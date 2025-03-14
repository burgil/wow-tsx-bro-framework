import { createElement } from './framework/runtime';

export default function App() {
    return (
        <html>
            <head>
                <title>Simple TSX Framework</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <div id="root">
                    <h1>Hello from Simple TSX Framework!</h1>
                    <p>This is a minimal example of a TSX page.</p>
                </div>
            </body>
        </html>
    );
}