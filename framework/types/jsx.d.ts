// Enables html elements to be used in JSX
declare namespace JSX {
    interface IntrinsicElements {
        // Document metadata
        html: Partial<HTMLElement>;
        head: Partial<HTMLHeadElement>;
        body: Partial<HTMLBodyElement>;
        base: Partial<HTMLBaseElement>;
        link: Partial<HTMLLinkElement>;
        meta: Partial<HTMLMetaElement> & { charset?: string; };
        style: Partial<HTMLStyleElement>;
        title: Partial<HTMLTitleElement>;
        // Content sectioning
        address: Partial<HTMLElement>;
        article: Partial<HTMLElement>;
        aside: Partial<HTMLElement>;
        footer: Partial<HTMLElement>;
        header: Partial<HTMLElement>;
        h1: Partial<HTMLHeadingElement>;
        h2: Partial<HTMLHeadingElement>;
        h3: Partial<HTMLHeadingElement>;
        h4: Partial<HTMLHeadingElement>;
        h5: Partial<HTMLHeadingElement>;
        h6: Partial<HTMLHeadingElement>;
        nav: Partial<HTMLElement>;
        section: Partial<HTMLElement>;
        // Text content
        blockquote: Partial<HTMLQuoteElement>;
        dd: Partial<HTMLElement>;
        div: Partial<HTMLDivElement>;
        dl: Partial<HTMLDListElement>;
        dt: Partial<HTMLElement>;
        figcaption: Partial<HTMLElement>;
        figure: Partial<HTMLElement>;
        hr: Partial<HTMLHRElement>;
        li: Partial<HTMLLIElement>;
        main: Partial<HTMLElement>;
        ol: Partial<HTMLOListElement>;
        p: Partial<HTMLParagraphElement>;
        pre: Partial<HTMLPreElement>;
        ul: Partial<HTMLUListElement>;
        // Inline text semantics
        a: Partial<HTMLAnchorElement>;
        abbr: Partial<HTMLElement>;
        b: Partial<HTMLElement>;
        bdi: Partial<HTMLElement>;
        bdo: Partial<HTMLElement>;
        br: Partial<HTMLBRElement>;
        cite: Partial<HTMLElement>;
        code: Partial<HTMLElement>;
        data: Partial<HTMLDataElement>;
        dfn: Partial<HTMLElement>;
        em: Partial<HTMLElement>;
        i: Partial<HTMLElement>;
        kbd: Partial<HTMLElement>;
        mark: Partial<HTMLElement>;
        q: Partial<HTMLQuoteElement>;
        rp: Partial<HTMLElement>;
        rt: Partial<HTMLElement>;
        ruby: Partial<HTMLElement>;
        s: Partial<HTMLElement>;
        samp: Partial<HTMLElement>;
        small: Partial<HTMLElement>;
        span: Partial<HTMLSpanElement>;
        strong: Partial<HTMLElement>;
        sub: Partial<HTMLElement>;
        sup: Partial<HTMLElement>;
        time: Partial<HTMLTimeElement>;
        u: Partial<HTMLElement>;
        var: Partial<HTMLElement>;
        wbr: Partial<HTMLElement>;
        // Image and multimedia
        area: Partial<HTMLAreaElement>;
        audio: Partial<HTMLAudioElement>;
        img: Partial<HTMLImageElement>;
        map: Partial<HTMLMapElement>;
        track: Partial<HTMLTrackElement>;
        video: Partial<HTMLVideoElement>;
        // Embedded content
        embed: Partial<HTMLEmbedElement>;
        iframe: Partial<HTMLIFrameElement>;
        object: Partial<HTMLObjectElement>;
        param: Partial<HTMLParamElement>;
        picture: Partial<HTMLElement>;
        source: Partial<HTMLSourceElement>;
        // Scripting
        canvas: Partial<HTMLCanvasElement>;
        noscript: Partial<HTMLElement>;
        script: Partial<HTMLScriptElement>;
        // Demarcating edits
        del: Partial<HTMLModElement>;
        ins: Partial<HTMLModElement>;
        // Table content
        caption: Partial<HTMLTableCaptionElement>;
        col: Partial<HTMLTableColElement>;
        colgroup: Partial<HTMLTableColElement>;
        table: Partial<HTMLTableElement>;
        tbody: Partial<HTMLTableSectionElement>;
        td: Partial<HTMLTableCellElement>;
        tfoot: Partial<HTMLTableSectionElement>;
        th: Partial<HTMLTableCellElement>;
        thead: Partial<HTMLTableSectionElement>;
        tr: Partial<HTMLTableRowElement>;
        // Forms
        button: Partial<HTMLButtonElement>;
        datalist: Partial<HTMLDataListElement>;
        fieldset: Partial<HTMLFieldSetElement>;
        form: Partial<HTMLFormElement>;
        input: Partial<HTMLInputElement>;
        label: Partial<HTMLLabelElement>;
        legend: Partial<HTMLLegendElement>;
        meter: Partial<HTMLMeterElement>;
        optgroup: Partial<HTMLOptGroupElement>;
        option: Partial<HTMLOptionElement>;
        output: Partial<HTMLOutputElement>;
        progress: Partial<HTMLProgressElement>;
        select: Partial<HTMLSelectElement>;
        textarea: Partial<HTMLTextAreaElement>;
        // Interactive elements
        details: Partial<HTMLDetailsElement>;
        dialog: Partial<HTMLDialogElement>;
        menu: Partial<HTMLMenuElement>;
        summary: Partial<HTMLElement>;
        // Web Components & Custom Elements
        [key: string]: {
            children?: Node | Node[];
        } & Partial<HTMLElement>;
    }
}
