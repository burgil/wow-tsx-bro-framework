import createElement from './framework/runtime';
import clearTimers from './framework/timers';
import Blah from './Blah';
clearTimers();

export default function App() {
  let counter = 0;
  setInterval(() => {
    counter += 1;
    const test = document.getElementById('test')
    if (test) test.textContent = counter.toString();
  }, 1000)
  return (
    <html>
      <head>
        <title>Apps</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <h1 id="test">{counter}</h1>
        <textarea rows="6" type="text" style="width: 100%;">
          <Blah />
        </textarea>
      </body>
    </html>
  );
}