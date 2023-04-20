SourceBuffer = function SourceBuffer(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(SourceBuffer);

; (function () {
    const $safe_get_attribute = ['appendWindowEnd', 'appendWindowStart', 'buffered', 'mode', 'onabort', 'onerror', 'onupdate', 'onupdateend', 'onupdatestart', 'timestampOffset', 'updating'];
    const $safe_set_attribute = ['appendWindowEnd', 'appendWindowStart', 'mode', 'onabort', 'onerror', 'onupdate', 'onupdateend', 'onupdatestart', 'timestampOffset'];
    
    const $safe_func_attribute = ['abort', 'appendBuffer', 'changeType', 'remove'];
    SourceBuffer.prototype = {
        abort() {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        appendBuffer() {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get appendWindowEnd() {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).appendWindowEnd, "");
        },
        set appendWindowEnd(value) {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).appendWindowEnd = value + "";
        },
        get appendWindowStart() {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).appendWindowStart, "");
        },
        set appendWindowStart(value) {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).appendWindowStart = value + "";
        },
        get buffered() {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).buffered, "");
        },
        changeType() {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get mode() {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).mode, "");
        },
        set mode(value) {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).mode = value + "";
        },
        get onabort() {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onabort, "");
        },
        set onabort(value) {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onabort = value + "";
        },
        get onerror() {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onerror, "");
        },
        set onerror(value) {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onerror = value + "";
        },
        get onupdate() {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onupdate, "");
        },
        set onupdate(value) {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onupdate = value + "";
        },
        get onupdateend() {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onupdateend, "");
        },
        set onupdateend(value) {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onupdateend = value + "";
        },
        get onupdatestart() {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onupdatestart, "");
        },
        set onupdatestart(value) {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onupdatestart = value + "";
        },
        remove() {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get timestampOffset() {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).timestampOffset, "");
        },
        set timestampOffset(value) {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).timestampOffset = value + "";
        },
        get updating() {
            debugger;
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).updating, "");
        },
    }
    qxVm.rename(SourceBuffer.prototype, "SourceBuffer");
    qxVm.safeDescriptor_addConstructor(SourceBuffer);
    qxVm.safe_Objattribute(SourceBuffer, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(SourceBuffer.prototype, EventTarget.prototype);
    Object.setPrototypeOf(SourceBuffer, EventTarget);

})();