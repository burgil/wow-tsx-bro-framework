import Blah from './Blah';
import Counter from './Counter';
import ThemeToggle from './ThemeToggle';

export default function App() {
  let counter = 0;
  
  // This timer will automatically be cleared on Hot Module Replacement
  // thanks to our custom timers implementation in framework/browser-side/timers.ts
  setInterval(() => {
    counter += 1;
    const test = document.getElementById('test')
    if (test) test.textContent = counter.toString();
  }, 1000)
  
  // Add a click handler to demonstrate event handling
  function handleGetStarted() {
    alert("Welcome to SimpleFramework! This demonstrates basic event handling.");
  }
  
  function handleDarkMode() {
    document.documentElement.classList.toggle('dark-mode');
  }

  window.addEventListener('load', function() {
    console.log("Loading snippet...")
    const snippet = document.getElementById('snippet');
    if (snippet) snippet.textContent = `export default function App() {
    let counter = 0;
    
    // Timers automatically reset on HMR
    setInterval(() => {
      counter += 1;
      document.getElementById('counter').textContent = counter;
    }, 1000);
    
    return (
      <div>
        <h1>Counter: <span id="counter">{counter}</span></h1>
        <button onclick="alert('Hello!')">Say Hello</button>
      </div>
    );
  }`
  });
  
  return (
    <html lang="he" className="scroll-smooth">
      <head>
        <title>SimpleFramework Demo</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          {`
            .dark-mode { 
              background-color: #121212; 
              color: #f5f5f5; 
            }
            .counter-box {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .counter-box:hover {
              transform: translateY(-5px);
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .fade-in {
              animation: fadeIn 0.5s ease forwards;
            }
            .code-sample {
              position: relative;
              overflow: hidden;
            }
            .code-sample::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent 70%, rgba(0,0,0,0.8) 100%);
              pointer-events: none;
            }
          `}
        </style>
      </head>
      <body className="min-h-screen">
        {/* Framework Demo Section */}
        <header className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-8 px-4 md:px-8 shadow-lg">
          <nav className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold">SimpleFramework</h2>
            <div className="flex gap-4">
              <button className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors" onclick={() => document.documentElement.classList.toggle('dark-mode')}>
                Toggle Dark Mode
              </button>
              <ThemeToggle />
            </div>
          </nav>
        </header>
        
        <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in">SimpleFramework: Beyond React Hooks</h1>
            <p className="text-xl mb-6 opacity-90">React depends on useEffect's, useCallback's, useMemo's and many more hooks that take out the fun in programming. We bring it back.</p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button 
                className="bg-white text-indigo-800 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-100 transition-colors"
                onclick={handleGetStarted}>
                Get Started
              </button>
              <button className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Documentation
              </button>
            </div>

            {/* Interactive Demo */}
            <div className="mb-12 bg-white/5 p-8 rounded-xl backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6">Interactive Demo</h2>
              
              <div className="flex flex-wrap gap-6">
                <div className="counter-box bg-white/10 p-6 rounded-lg text-center hover:bg-white/15 transition-all">
                  <h3 className="text-lg mb-3">Auto Counter</h3>
                  <p className="text-3xl font-mono" id="test">{counter}</p>
                  <p className="text-sm mt-2 text-indigo-200">Auto-increments</p>
                </div>
                
                <Counter />
                
                <div className="counter-box bg-white/10 p-6 rounded-lg text-center">
                  <h3 className="text-lg mb-3">🔥 HMR Ready</h3>
                  <p className="text-sm text-indigo-200">Edit and see changes instantly</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/15 transition-all">
                <span className="block text-3xl font-bold mb-2">10k+</span>
                <span className="text-indigo-200">Downloads</span>
              </div>
              <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/15 transition-all">
                <span className="block text-3xl font-bold mb-2">4.9★</span>
                <span className="text-indigo-200">Rating</span>
              </div>
              <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/15 transition-all">
                <span className="block text-3xl font-bold mb-2">99%</span>
                <span className="text-indigo-200">Satisfaction</span>
              </div>
            </div>

            {/* Code sample */}
            <div className="code-sample bg-gray-800 p-6 rounded-lg overflow-auto mb-8">
              <div className="text-green-400">// SimpleFramework in action</div>
              <pre className="text-gray-300" id="snippet"></pre>
            </div>

            {/* How it works */}
            <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm mb-12">
              <h2 className="text-2xl font-bold mb-4">How SimpleFramework Works</h2>
              <div className="space-y-4 text-white/90">
                <p><strong>Hot Module Replacement (HMR):</strong> When you edit a file, our framework automatically refreshes only the changed components without losing state or reloading the page.</p>
                <p><strong>Timer Management:</strong> All timers (setTimeout, setInterval) are automatically tracked and cleared during HMR reloads, preventing memory leaks and duplicate timers.</p>
                <p><strong>Build Process:</strong> Webpack bundles your TSX files, processes them with our custom createElement function, and serves everything with optimized performance.</p>
                <p><strong>No Virtual DOM:</strong> Direct DOM manipulation without the overhead of a virtual DOM reconciliation algorithm.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-white/70 py-8 px-4 text-center">
          <p>© 2023 SimpleFramework - A lightweight alternative to React</p>
        </footer>
      </body>
    </html>
  );
}