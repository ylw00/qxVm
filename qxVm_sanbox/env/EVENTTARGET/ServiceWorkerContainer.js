ServiceWorkerContainer = function ServiceWorkerContainer(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(ServiceWorkerContainer);

; (function () {
    const $safe_get_attribute = ['controller', 'oncontrollerchange', 'onmessage', 'onmessageerror', 'ready'];
    const $safe_set_attribute = ['oncontrollerchange', 'onmessage', 'onmessageerror'];
    const $safe_func_attribute = ['getRegistration', 'getRegistrations', 'register', 'startMessages'];

    ServiceWorkerContainer.prototype = {
        get controller() {
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = null;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'ServiceWorkerContainer', 'controller', arguments, result);
            return result;
        },
        getRegistration() {
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'ServiceWorkerContainer', 'getRegistration', arguments, result);
            return result;
        },
        getRegistrations() {
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'ServiceWorkerContainer', 'getRegistrations', arguments, result);
            return result;
        },
        get oncontrollerchange() {
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oncontrollerchange, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'ServiceWorkerContainer', 'oncontrollerchange', arguments, result);
            return result;
        },
        set oncontrollerchange(value) {
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'ServiceWorkerContainer', 'oncontrollerchange', arguments);
            lwVm.memory.private_data.get(this).oncontrollerchange = value + "";
        },
        get onmessage() {
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onmessage, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'ServiceWorkerContainer', 'onmessage', arguments, result);
            return result;
        },
        set onmessage(value) {
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'ServiceWorkerContainer', 'onmessage', arguments);
            lwVm.memory.private_data.get(this).onmessage = value + "";
        },
        get onmessageerror() {
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onmessageerror, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'ServiceWorkerContainer', 'onmessageerror', arguments, result);
            return result;
        },
        set onmessageerror(value) {
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'ServiceWorkerContainer', 'onmessageerror', arguments);
            lwVm.memory.private_data.get(this).onmessageerror = value + "";
        },
        get ready() {
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = new Promise(function () { });;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'ServiceWorkerContainer', 'ready', arguments, result);
            return result;
        },
        register() {
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'ServiceWorkerContainer', 'register', arguments, result);
            return result;
        },
        startMessages() {
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'ServiceWorkerContainer', 'startMessages', arguments, result);
            return result;
        },
    }
    lwVm.rename(ServiceWorkerContainer.prototype, "ServiceWorkerContainer");
    lwVm.safeDescriptor_addConstructor(ServiceWorkerContainer);
    lwVm.safe_Objattribute(ServiceWorkerContainer, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(ServiceWorkerContainer.prototype, EventTarget.prototype);
    Object.setPrototypeOf(ServiceWorkerContainer, EventTarget);

})();

