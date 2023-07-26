// ========================================================================================================================
// Window -> WindowProperties -> EventTarget
Window = function Window() {
    throw new TypeError("Illegal constructor");
}; 
lwVm.safefunction(Window);
window = this;

; (function () {

    let WindowProperties = (function () {
        let WindowProperties = function WindowProperties() {
            throw new TypeError("Illegal constructor");
        }; lwVm.safefunction(WindowProperties);

        delete WindowProperties.prototype.constructor;
        lwVm.rename(WindowProperties.prototype, "WindowProperties");
        Object.setPrototypeOf(WindowProperties.prototype, EventTarget.prototype);
        return WindowProperties;
    })();

    const $attributes = {
        TEMPORARY: 0,
        PERSISTENT: 1
    };

    lwVm.rename(Window.prototype, "Window");
    lwVm.add_capitalLetter_attribute(Window, $attributes);

    Object.setPrototypeOf(WindowProperties.prototype, EventTarget.prototype);
    Object.setPrototypeOf(Window.prototype, WindowProperties.prototype);
    Object.setPrototypeOf(Window, EventTarget);

    Object.defineProperty(Window, 'prototype', { value: Window.prototype, configurable: false, enumerable: false, writable: false });


    window.constructor = Window;
    window.__proto__ = Window.prototype;  // 这个有点特殊, 必须要强制指定原型链

    Object.defineProperty(window, 'window', {
        value: window,
        configurable: false,
        enumerable: true,
        writable: true
    })
})();
