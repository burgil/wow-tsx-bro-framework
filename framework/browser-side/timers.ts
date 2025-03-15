const nativeSetTimeout = Function.prototype.call.bind(window.setTimeout);
const nativeClearTimeout = Function.prototype.call.bind(window.clearTimeout);
const nativeSetInterval = Function.prototype.call.bind(window.setInterval);
const nativeClearInterval = Function.prototype.call.bind(window.clearInterval);

window.activeTimers = window.activeTimers || [];

export default function clearTimers() {
    while (window.activeTimers.length > 0) {
        const id = window.activeTimers.pop();
        nativeClearTimeout(window, id);
        nativeClearInterval(window, id);
    }
}

if (typeof window._timersOverridden === 'undefined') {
    window._timersOverridden = true;
    window.setTimeout = function (handler: TimerHandler, timeout?: number, ...args: any[]) {
        const id = nativeSetTimeout(window, handler, timeout, ...args);
        window.activeTimers.push(id);
        return id;
    } as typeof setTimeout;
    window.clearTimeout = function (id) {
        const index = window.activeTimers.indexOf(id);
        if (index !== -1) window.activeTimers.splice(index, 1);
        return nativeClearTimeout(window, id);
    };
    window.setInterval = function (handler: TimerHandler, interval?: number, ...args: any[]) {
        const id = nativeSetInterval(window, handler, interval, ...args);
        window.activeTimers.push(id);
        return id;
    } as typeof setInterval;
    window.clearInterval = function (id) {
        const index = window.activeTimers.indexOf(id);
        if (index !== -1) window.activeTimers.splice(index, 1);
        return nativeClearInterval(window, id);
    };
}
