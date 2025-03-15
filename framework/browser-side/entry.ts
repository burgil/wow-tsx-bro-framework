import clearTimers from './timers';
globalThis.createElement = function createElement(tag: string | Function, props: any, ...children: any[]): string {
    if (typeof tag === 'function') return tag(props);
    const propsString = props ? Object.entries(props).map(([key, value]) => {
        if (key === 'className') return `class="${value}"`;
        return `${key}="${value}"`;
    }).join(' ') : '';
    const content = children.flat().map(child => String(child)).join('');
    if (tag === 'script') {
        // Create and execute the script element
        const scriptElement = document.createElement('script');
        if (props) {
            Object.entries(props).forEach(([key, value]) => {
                if (key === 'className') {
                    scriptElement.className = value as string;
                } else {
                    scriptElement.setAttribute(key, value as string);
                }
            });
        }
        scriptElement.textContent = content;
        document.head.appendChild(scriptElement);
    }
    return `<${tag}${propsString ? ' ' + propsString : ''}>${content}</${tag}>`;
}

async function render() {
    const { default: App } = await import('../../app');
    const appOutput = App();
    
    // Extract parts using regex
    const htmlMatch = appOutput.match(/<html([^>]*)>([\s\S]*)<\/html>/);
    
    if (htmlMatch) {
        const htmlAttrs = htmlMatch[1];
        const htmlContent = htmlMatch[2];
        
        // Extract head and body
        const headMatch = htmlContent.match(/<head>([\s\S]*)<\/head>/);
        const bodyMatch = htmlContent.match(/<body([^>]*)>([\s\S]*)<\/body>/);
        
        if (headMatch && bodyMatch) {
            // Apply HTML attributes
            const htmlAttrPairs = htmlAttrs.match(/(\w+)="([^"]*)"/g);
            if (htmlAttrPairs) {
                htmlAttrPairs.forEach((attr: string) => {
                    const [attrName, attrValue] = attr.split('=');
                    document.documentElement.setAttribute(
                        attrName, 
                        attrValue.replace(/"/g, '')
                    );
                });
            }
            
            // Apply body attributes
            const bodyAttrs = bodyMatch[1];
            const bodyAttrPairs = bodyAttrs.match(/(\w+)="([^"]*)"/g);
            if (bodyAttrPairs) {
                bodyAttrPairs.forEach((attr: string) => {
                    const [attrName, attrValue] = attr.split('=');
                    document.body.setAttribute(
                        attrName, 
                        attrValue.replace(/"/g, '')
                    );
                });
            }
            
            // Set head content
            document.head.innerHTML = headMatch[1];
            
            // Set body content
            document.body.innerHTML = bodyMatch[2];
        } else {
            console.error("Couldn't parse head or body from App output");
            document.body.innerHTML = appOutput;
        }
    } else {
        console.error("App output doesn't contain proper HTML structure");
        document.body.innerHTML = appOutput;
    }
}
render();
if (module.hot) {
    module.hot.accept('../../app', () => {
        clearTimers();
        render();
    });
}