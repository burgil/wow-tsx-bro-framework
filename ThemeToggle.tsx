// Theme toggle with animation
export default function ThemeToggle() {
  
  return (
    <div className="flex items-center">
      <div 
        className="flex items-center cursor-pointer relative bg-white/5 h-[28px] w-[50px] rounded-full p-[4px]"
        onclick={() => {
          const html = document.documentElement;
          const themeIcon = document.getElementById('theme-icon');
          const themeSwitchCircle = document.getElementById('theme-switch-circle');
          
          if (html.classList.contains('dark-mode')) {
            // Switch to light mode
            html.classList.remove('dark-mode');
            if (themeIcon) {
              themeIcon.textContent = '☀️';
              themeIcon.classList.add('rotate-animation');
              setTimeout(() => themeIcon.classList.remove('rotate-animation'), 500);
            }
            if (themeSwitchCircle) {
              themeSwitchCircle.style.transform = 'translateX(0)';
            }
          } else {
            // Switch to dark mode
            html.classList.add('dark-mode');
            if (themeIcon) {
              themeIcon.textContent = '🌙';
              themeIcon.classList.add('rotate-animation');
              setTimeout(() => themeIcon.classList.remove('rotate-animation'), 500);
            }
            if (themeSwitchCircle) {
              themeSwitchCircle.style.transform = 'translateX(20px)';
            }
          }
        }}
      >
        <div 
          id="theme-switch-circle" 
          className="absolute h-[20px] w-[20px] bg-white rounded-full transition-transform duration-300"
        ></div>
        <span id="theme-icon" className="absolute left-[30px] transform -translate-y-[1px]">☀️</span>
      </div>
      
      <style>
        {`
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .rotate-animation {
            animation: rotate 0.5s ease;
          }
        `}
      </style>
    </div>
  );
}