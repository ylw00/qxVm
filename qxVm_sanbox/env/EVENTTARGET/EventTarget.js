EventTarget = function EventTarget() {  //构造函数
}; qxVm.safefunction(EventTarget);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['addEventListener', 'dispatchEvent', 'removeEventListener'];

    EventTarget.prototype = {
        addEventListener(type, callback) {
            if (!(type in qxVm.memory.listeners)) {
                qxVm.memory.listeners[type] = [];
            }
            qxVm.memory.eventObj[type] = callback;
            qxVm.memory.listeners[type].push(callback);
        },
        dispatchEvent(event_) {
            debugger;
            if (event_.type === undefined || event_.type === "") {
                return;
            }
            if (qxVm.memory.listeners[event_.type] != undefined) {
                return;
            }

            let stack = qxVm.memory.listeners[event_.type];
            for (var i = 0; stack.length > i; i++) {
                stack[i].apply(this, event_);
            }
            
        },
        removeEventListener(type, callback) {
            debugger;
            if (!(type in qxVm.memory.listeners)) {
                return;
            }
            var stack = qxVm.memory.listeners[type];
            for (var i = 0; stack.length > i; i++) {
                if (stack[i] === callback) {
                    stack.splice(i, 1);
                    return this.removeEventListener(type, callback);
                }
            }
            
        }
    }; 
    qxVm.rename(EventTarget.prototype, "EventTarget");
    qxVm.safeDescriptor_addConstructor(EventTarget);
    qxVm.safe_Objattribute(EventTarget, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

