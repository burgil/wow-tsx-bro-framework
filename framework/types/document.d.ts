// This allows document selectors to return an HTMLElement instead of a Node

declare interface Document {
    querySelector<K extends keyof HTMLElementTagNameMap>(
        selectors: K
    ): HTMLElementTagNameMap[K] | null;
    querySelector(selectors: string): HTMLElement | null;
    querySelectorAll<K extends keyof HTMLElementTagNameMap>(
        selectors: K
    ): NodeListOf<HTMLElementTagNameMap[K]>;
    querySelectorAll(selectors: string): NodeListOf<HTMLElement>;
    getElementById(elementId: string): HTMLElement | null;
    getElementsByClassName(classNames: string): HTMLCollectionOf<HTMLElement>;
    getElementsByTagName<K extends keyof HTMLElementTagNameMap>(
        tagName: K
    ): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
    getElementsByTagName(tagName: string): HTMLCollectionOf<HTMLElement>;
}

declare interface ParentNode {
    querySelector<K extends keyof HTMLElementTagNameMap>(
        selectors: K
    ): HTMLElementTagNameMap[K] | null;
    querySelector(selectors: string): HTMLElement | null;
    querySelectorAll<K extends keyof HTMLElementTagNameMap>(
        selectors: K
    ): NodeListOf<HTMLElementTagNameMap[K]>;
    querySelectorAll(selectors: string): NodeListOf<HTMLElement>;
}
