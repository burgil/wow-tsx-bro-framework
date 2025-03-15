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
    document.body.innerHTML = App();
}
render();
if (module.hot) {
    module.hot.accept('../../app', () => {
        clearTimers();
        render();
    });
}