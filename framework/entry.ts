import clearTimers from './timers';
import createElement from './runtime';
globalThis.createElement = createElement;
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