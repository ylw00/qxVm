XMLHttpRequestEventTarget = function XMLHttpRequestEventTarget(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(XMLHttpRequestEventTarget);

; (function () {
    const $safe_get_attribute = ['onabort', 'onerror', 'onload', 'onloadend', 'onloadstart', 'onprogress', 'ontimeout'];
    const $safe_set_attribute = ['onabort', 'onerror', 'onload', 'onloadend', 'onloadstart', 'onprogress', 'ontimeout'];
    const $safe_func_attribute = [];

    XMLHttpRequestEventTarget.prototype = {
        get onabort() {
            debugger;
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onabort, null);
        },
        set onabort(value) {
            debugger;
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onabort = value + "";
        },
        get onerror() {
            debugger;
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onerror, null);
        },
        set onerror(value) {
            debugger;
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onerror = value + "";
        },
        get onload() {
            debugger;
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onload, null);
        },
        set onload(value) {
            debugger;
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onload = value + "";
        },
        get onloadend() {
            debugger;
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onloadend, null);
        },
        set onloadend(value) {
            debugger;
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onloadend = value + "";
        },
        get onloadstart() {
            debugger;
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onloadstart, null);
        },
        set onloadstart(value) {
            debugger;
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onloadstart = value + "";
        },
        get onprogress() {
            debugger;
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onprogress, null);
        },
        set onprogress(value) {
            debugger;
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onprogress = value + "";
        },
        get ontimeout() {
            debugger;
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ontimeout, null);
        },
        set ontimeout(value) {
            debugger;
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ontimeout = value + "";
        }
    }

    qxVm.rename(XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget");
    qxVm.safeDescriptor_addConstructor(XMLHttpRequestEventTarget);
    qxVm.safe_Objattribute(XMLHttpRequestEventTarget, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(XMLHttpRequestEventTarget.prototype, EventTarget.prototype);
    Object.setPrototypeOf(XMLHttpRequestEventTarget, EventTarget);

})();