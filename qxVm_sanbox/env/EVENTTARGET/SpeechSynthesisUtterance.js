SpeechSynthesisUtterance = function SpeechSynthesisUtterance(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(SpeechSynthesisUtterance);

; (function () {
    const $safe_get_attribute = ['lang', 'onboundary', 'onend', 'onerror', 'onmark', 'onpause', 'onresume', 'onstart', 'pitch', 'rate', 'text', 'voice', 'volume'];
    const $safe_set_attribute = ['lang', 'onboundary', 'onend', 'onerror', 'onmark', 'onpause', 'onresume', 'onstart', 'pitch', 'rate', 'text', 'voice', 'volume'];
    const $safe_func_attribute = [];

    SpeechSynthesisUtterance.prototype = {
        get lang() {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).lang, "");
        },
        set lang(value) {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).lang = value + "";
        },
        get onboundary() {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onboundary, "");
        },
        set onboundary(value) {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onboundary = value + "";
        },
        get onend() {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onend, "");
        },
        set onend(value) {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onend = value + "";
        },
        get onerror() {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onerror, "");
        },
        set onerror(value) {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onerror = value + "";
        },
        get onmark() {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmark, "");
        },
        set onmark(value) {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmark = value + "";
        },
        get onpause() {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpause, "");
        },
        set onpause(value) {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpause = value + "";
        },
        get onresume() {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onresume, "");
        },
        set onresume(value) {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onresume = value + "";
        },
        get onstart() {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onstart, "");
        },
        set onstart(value) {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onstart = value + "";
        },
        get pitch() {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).pitch, "");
        },
        set pitch(value) {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).pitch = value + "";
        },
        get rate() {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).rate, "");
        },
        set rate(value) {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).rate = value + "";
        },
        get text() {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).text, "");
        },
        set text(value) {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).text = value + "";
        },
        get voice() {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).voice, "");
        },
        set voice(value) {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).voice = value + "";
        },
        get volume() {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).volume, "");
        },
        set volume(value) {
            debugger;
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).volume = value + "";
        },
    }
    qxVm.rename(SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance");
    qxVm.safeDescriptor_addConstructor(SpeechSynthesisUtterance);
    qxVm.safe_Objattribute(SpeechSynthesisUtterance, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(SpeechSynthesisUtterance.prototype, EventTarget.prototype);
    Object.setPrototypeOf(SpeechSynthesisUtterance, EventTarget);
})();