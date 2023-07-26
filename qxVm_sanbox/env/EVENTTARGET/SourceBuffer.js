SourceBuffer = function SourceBuffer(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(SourceBuffer);

; (function () {
    const $safe_get_attribute = ['appendWindowEnd', 'appendWindowStart', 'buffered', 'mode', 'onabort', 'onerror', 'onupdate', 'onupdateend', 'onupdatestart', 'timestampOffset', 'updating'];
    const $safe_set_attribute = ['appendWindowEnd', 'appendWindowStart', 'mode', 'onabort', 'onerror', 'onupdate', 'onupdateend', 'onupdatestart', 'timestampOffset'];
    
    const $safe_func_attribute = ['abort', 'appendBuffer', 'changeType', 'remove'];
    SourceBuffer.prototype = {
        abort() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'SourceBuffer', 'abort', arguments, result);
            return result;
        },
        appendBuffer() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'SourceBuffer', 'appendBuffer', arguments, result);
            return result;
        },
        get appendWindowEnd() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).appendWindowEnd, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SourceBuffer', 'appendWindowEnd', arguments, result);
            return result;
        },
        set appendWindowEnd(value) {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SourceBuffer', 'appendWindowEnd', arguments);
            lwVm.memory.private_data.get(this).appendWindowEnd = value + "";
        },
        get appendWindowStart() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).appendWindowStart, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SourceBuffer', 'appendWindowStart', arguments, result);
            return result;
        },
        set appendWindowStart(value) {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SourceBuffer', 'appendWindowStart', arguments);
            lwVm.memory.private_data.get(this).appendWindowStart = value + "";
        },
        get buffered() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).buffered, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SourceBuffer', 'buffered', arguments, result);
            return result;
        },
        changeType() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'SourceBuffer', 'changeType', arguments, result);
            return result;
        },
        get mode() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).mode, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SourceBuffer', 'mode', arguments, result);
            return result;
        },
        set mode(value) {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SourceBuffer', 'mode', arguments);
            lwVm.memory.private_data.get(this).mode = value + "";
        },
        get onabort() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onabort, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SourceBuffer', 'onabort', arguments, result);
            return result;
        },
        set onabort(value) {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SourceBuffer', 'onabort', arguments);
            lwVm.memory.private_data.get(this).onabort = value + "";
        },
        get onerror() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onerror, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SourceBuffer', 'onerror', arguments, result);
            return result;
        },
        set onerror(value) {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SourceBuffer', 'onerror', arguments);
            lwVm.memory.private_data.get(this).onerror = value + "";
        },
        get onupdate() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onupdate, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SourceBuffer', 'onupdate', arguments, result);
            return result;
        },
        set onupdate(value) {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SourceBuffer', 'onupdate', arguments);
            lwVm.memory.private_data.get(this).onupdate = value + "";
        },
        get onupdateend() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onupdateend, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SourceBuffer', 'onupdateend', arguments, result);
            return result;
        },
        set onupdateend(value) {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SourceBuffer', 'onupdateend', arguments);
            lwVm.memory.private_data.get(this).onupdateend = value + "";
        },
        get onupdatestart() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onupdatestart, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SourceBuffer', 'onupdatestart', arguments, result);
            return result;
        },
        set onupdatestart(value) {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SourceBuffer', 'onupdatestart', arguments);
            lwVm.memory.private_data.get(this).onupdatestart = value + "";
        },
        remove() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'SourceBuffer', 'remove', arguments, result);
            return result;
        },
        get timestampOffset() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).timestampOffset, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SourceBuffer', 'timestampOffset', arguments, result);
            return result;
        },
        set timestampOffset(value) {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SourceBuffer', 'timestampOffset', arguments);
            lwVm.memory.private_data.get(this).timestampOffset = value + "";
        },
        get updating() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).updating, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SourceBuffer', 'updating', arguments, result);
            return result;
        },
    }
    lwVm.rename(SourceBuffer.prototype, "SourceBuffer");
    lwVm.safeDescriptor_addConstructor(SourceBuffer);
    lwVm.safe_Objattribute(SourceBuffer, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(SourceBuffer.prototype, EventTarget.prototype);
    Object.setPrototypeOf(SourceBuffer, EventTarget);

})();