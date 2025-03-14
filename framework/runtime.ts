function escapeHtml(str: string): string {
    return str.replace(/[&<>"']/g, match => {
        const escape: { [key: string]: string } = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return escape[match];
    });
}

export default function createElement(tag: string, props: any, ...children: any[]): string {
    const propsString = props ? Object.entries(props)
        .map(([key, value]) => {
            if (key === 'className') return `class="${value}"`;
            return `${key}="${value}"`;
        })
        .join(' ') : '';
    const content = children
        .flat()
        .map(child => String(child))
        .join('');
    return `<${tag}${propsString ? ' ' + propsString : ''}>${content}</${tag}>`;
}
