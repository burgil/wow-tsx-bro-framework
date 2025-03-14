// Fixes an error in entry.ts - document.body.innerHTML

declare interface HTMLElement {
    innerHTML: string | Node;
}