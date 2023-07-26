MediaStream = function MediaStream(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(MediaStream);

; (function () {
    const $safe_get_attribute = ['active', 'id', 'onactive', 'onaddtrack', 'oninactive', 'onremovetrack'];
    const $safe_set_attribute = ['onactive', 'onaddtrack', 'oninactive', 'onremovetrack'];
    const $safe_func_attribute = [
        'addTrack', 'clone', 'getAudioTracks', 'getTrackById', 'getTracks', 'getVideoTracks', 'removeTrack'
    ];
    
    MediaStream.prototype = {
        get active() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).active, true);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MediaStream', 'active', arguments, result);
            return result;
        },
        addTrack() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MediaStream', 'addTrack', arguments, result);
            return result;
        },
        clone() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MediaStream', 'clone', arguments, result);
            return result;
        },
        getAudioTracks() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MediaStream', 'getAudioTracks', arguments, result);
            return result;
        },
        getTrackById() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MediaStream', 'getTrackById', arguments, result);
            return result;
        },
        getTracks() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MediaStream', 'getTracks', arguments, result);
            return result;
        },
        getVideoTracks() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MediaStream', 'getVideoTracks', arguments, result);
            return result;
        },
        get id() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).id, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MediaStream', 'id', arguments, result);
            return result;
        },
        get onactive() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onactive, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MediaStream', 'onactive', arguments, result);
            return result;
        },
        set onactive(value) {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'MediaStream', 'onactive', arguments);
            lwVm.memory.private_data.get(this).onactive = value + "";
        },
        get onaddtrack() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onaddtrack, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MediaStream', 'onaddtrack', arguments, result);
            return result;
        },
        set onaddtrack(value) {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'MediaStream', 'onaddtrack', arguments);
            lwVm.memory.private_data.get(this).onaddtrack = value + "";
        },
        get oninactive() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oninactive, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MediaStream', 'oninactive', arguments, result);
            return result;
        },
        set oninactive(value) {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'MediaStream', 'oninactive', arguments);
            lwVm.memory.private_data.get(this).oninactive = value + "";
        },
        get onremovetrack() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onremovetrack, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MediaStream', 'onremovetrack', arguments, result);
            return result;
        },
        set onremovetrack(value) {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'MediaStream', 'onremovetrack', arguments);
            lwVm.memory.private_data.get(this).onremovetrack = value + "";
        },
        removeTrack() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MediaStream', 'removeTrack', arguments, result);
            return result;
        },
    }

    lwVm.rename(MediaStream.prototype, "MediaStream");
    lwVm.safeDescriptor_addConstructor(MediaStream);
    lwVm.safe_Objattribute(MediaStream, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(MediaStream.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(MediaStream, HTMLElement);

})();


// lwVm.z_sanbox.memory.htmlElements["div"] = function () {
//     return new MediaStream(lwVm.z_sanbox.memory.$createObj_key);
// }