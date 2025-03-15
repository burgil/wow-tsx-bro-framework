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
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <h1 id="test">{counter}</h1>
        <Blah />
        <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16 px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SimpleFramework: Beyond React Hooks</h1>
          <p className="text-xl mb-6">React depends on useEffect's, useCallback's, useMemo's and many more hooks that take out the fun in programming. We bring it back.</p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-white text-indigo-800 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-100 transition-colors">Get Started</button>
            <button className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">Documentation</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <span className="block text-3xl font-bold mb-2">10k+</span>
              <span className="text-indigo-200">Downloads</span>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <span className="block text-3xl font-bold mb-2">4.9★</span>
              <span className="text-indigo-200">Rating</span>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <span className="block text-3xl font-bold mb-2">99%</span>
              <span className="text-indigo-200">Satisfaction</span>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg overflow-auto">
            <div className="text-green-400">// No more hook spaghetti and more</div>
          </div>
        </section>
      </body>
    </html>
  );
}