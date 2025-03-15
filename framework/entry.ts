import clearTimers from './timers';
async function render() {
    const { default: App } = await import('../app');
    document.body.innerHTML = App();
}
render();
if (module.hot) {
    module.hot.accept('../app', () => {
        clearTimers();
        render();
    });
}