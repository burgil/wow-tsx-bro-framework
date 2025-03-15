import clearTimers from './timers';
globalThis.createElement = function createElement(tag: string | Function, props: any, ...children: any[]): string | HTMLElement {
    if (typeof tag === 'function') return tag(props);
    const propsString = props ? Object.entries(props).map(([key, value]) => {
        if (key === 'className') return `class="${value}"`;
        return `${key}="${value}"`;
    }).join(' ') : '';
    const content = children.flat().map(child => String(child)).join('');
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