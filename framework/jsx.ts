export function createElement(tag: string | ((attrs: Record<string, any> | null, ...children: any[]) => any), attrs: Record<string, any> | null, ...children: any[]) {
    if (typeof tag === 'function') return tag(attrs, ...children);

    const element = document.createElement(tag);
    
    if (attrs) {
        Object.entries(attrs).forEach(([name, value]) => {
            if (name === 'className') element.setAttribute('class', value);
            else if (name === 'charSet') element.setAttribute('charset', value);
            else element.setAttribute(name, value);
        });
    }

    children.flat().forEach(child => {
        if (typeof child === 'string' || typeof child === 'number') {
            element.appendChild(document.createTextNode(child.toString()));
        } else if (child instanceof Node) {
            element.appendChild(child);
        }
    });

    return element;
}