export default function Counter() {
  let count = 0;
  
  // Demonstrate manual DOM manipulation for counter
  function increment() {
    count += 1;
    updateDisplay();
  }
  
  function decrement() {
    count -= 1;
    updateDisplay();
  }
  
  function reset() {
    count = 0;
    updateDisplay();
  }
  
  function updateDisplay() {
    const display = document.getElementById('manual-counter');
    if (display) {
      display.textContent = count.toString();
      
      // Add a visual feedback animation
      display.classList.add('pulse');
      setTimeout(() => {
        display.classList.remove('pulse');
      }, 300);
    }
  }

  // Return the component's HTML structure
  return (
    <div className="counter-box bg-white/10 p-6 rounded-lg text-center">
      <h3 className="text-lg mb-3">Manual Counter</h3>
      <p className="text-3xl font-mono mb-4" id="manual-counter">{count}</p>
      
      <div className="flex justify-center gap-2">
        <button 
          className="px-3 py-1 bg-indigo-700 rounded hover:bg-indigo-600 transition-colors"
          onclick={decrement}>
          -
        </button>
        <button 
          className="px-3 py-1 bg-red-700 rounded hover:bg-red-600 transition-colors"
          onclick={reset}>
          Reset
        </button>
        <button 
          className="px-3 py-1 bg-indigo-700 rounded hover:bg-indigo-600 transition-colors"
          onclick={increment}>
          +
        </button>
      </div>
      
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
          
          .pulse {
            animation: pulse 0.3s ease;
          }
        `}
      </style>
    </div>
  );
}