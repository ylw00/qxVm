EventTarget = function EventTarget() {  //构造函数
}; lwVm.safefunction(EventTarget);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['addEventListener', 'dispatchEvent', 'removeEventListener'];

    EventTarget.prototype = {
        addEventListener(type, listener, ...args) {
            if (!lwVm.memory.listeners.has(type)) { lwVm.memory.listeners.set(type, []) };

            lwVm.memory.listeners.get(type).push({
                listener: listener,
                self: this,
            });
            let result = undefined;
            if (lwVm.config.logOpen === true) lwVm.logAdd('Func', 'EventTarget', `addEventListener(${type})`, [listener, ...args], result);
            return result;
        },
        dispatchEvent(event_) {
            if (event_.type === undefined || event_.type === "") {
                return;
            }
            if (lwVm.memory.listeners[event_.type] != undefined) {
                return;
            }

            let stack = lwVm.memory.listeners[event_.type];
            for (var i = 0; stack.length > i; i++) {
                stack[i].apply(this, event_);
            }

        },
        removeEventListener(type, callback) {
            if (!(type in lwVm.memory.listeners)) {
                return;
            }
            var stack = lwVm.memory.listeners[type];
            for (var i = 0; stack.length > i; i++) {
                if (stack[i] === callback) {
                    stack.splice(i, 1);
                }
            }
            let result = undefined;
            if (lwVm.config.logOpen === true) lwVm.logAdd('Func', 'EventTarget', 'removeEventListener ', arguments, result);
            return result;
        }
    };
    lwVm.rename(EventTarget.prototype, "EventTarget");
    lwVm.safeDescriptor_addConstructor(EventTarget);
    lwVm.safe_Objattribute(EventTarget, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

