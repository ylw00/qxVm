ServiceWorkerContainer = function ServiceWorkerContainer(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(ServiceWorkerContainer);

; (function () {
    const $safe_get_attribute = ['controller', 'oncontrollerchange', 'onmessage', 'onmessageerror', 'ready'];
    const $safe_set_attribute = ['oncontrollerchange', 'onmessage', 'onmessageerror'];
    const $safe_func_attribute = ['getRegistration', 'getRegistrations', 'register', 'startMessages'];

    ServiceWorkerContainer.prototype = {
        get controller() {
            debugger;
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return null;
        },
        getRegistration() {
            debugger;
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getRegistrations() {
            debugger;
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get oncontrollerchange() {
            debugger;
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oncontrollerchange, null);
        },
        set oncontrollerchange(value) {
            debugger;
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oncontrollerchange = value + "";
        },
        get onmessage() {
            debugger;
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmessage, null);
        },
        set onmessage(value) {
            debugger;
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmessage = value + "";
        },
        get onmessageerror() {
            debugger;
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmessageerror, null);
        },
        set onmessageerror(value) {
            debugger;
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmessageerror = value + "";
        },
        get ready() {
            debugger;
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return new Promise(function () { });
        },
        register() {
            debugger;
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        startMessages() {
            debugger;
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(ServiceWorkerContainer.prototype, "ServiceWorkerContainer");
    qxVm.safeDescriptor_addConstructor(ServiceWorkerContainer);
    qxVm.safe_Objattribute(ServiceWorkerContainer, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(ServiceWorkerContainer.prototype, EventTarget.prototype);
    Object.setPrototypeOf(ServiceWorkerContainer, EventTarget);

})();

