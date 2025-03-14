// Import the App and render it
async function render() {
    const { default: App } = await import('../app');
    document.body.innerHTML = App();
}

// Initial render
render();

// Handle hot module replacement
if (module.hot) {
    module.hot.accept('../app', () => {
        render();
    });
}