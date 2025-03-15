import Blah from './Blah';

export default function App() {
  let counter = 0;
  setInterval(() => {
    counter += 1;
    const test = document.getElementById('test')
    if (test) test.textContent = counter.toString();
  }, 1000)
  return (
    <html lang="en">
      <head>
        <title>Apps</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <h1 id="test">{counter}</h1>
        <Blah />
      </body>
    </html>
  );
}