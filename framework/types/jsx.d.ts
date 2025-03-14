// Enables html elements to be used in JSX
declare namespace JSX {
    interface IntrinsicElements {
        burgil: any;
        html: any;
        head: any;
        body: any;
        title: any;
        h1: any;
        h2: any;
        p: any;
        div: any;
        meta: any;
        pre: any;
        code: any;
        input: any;
        textarea: any;
    }
    interface Element extends Node {}
}
