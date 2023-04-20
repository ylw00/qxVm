MediaStream = function MediaStream(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(MediaStream);

; (function () {
    const $safe_get_attribute = ['active', 'id', 'onactive', 'onaddtrack', 'oninactive', 'onremovetrack'];
    const $safe_set_attribute = ['onactive', 'onaddtrack', 'oninactive', 'onremovetrack'];
    const $safe_func_attribute = [
        'addTrack', 'clone', 'getAudioTracks', 'getTrackById', 'getTracks', 'getVideoTracks', 'removeTrack'
    ];
    
    MediaStream.prototype = {
        get active() {
            debugger;
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).active, true);
        },
        addTrack() {
            debugger;
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        clone() {
            debugger;
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getAudioTracks() {
            debugger;
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getTrackById() {
            debugger;
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getTracks() {
            debugger;
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getVideoTracks() {
            debugger;
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get id() {
            debugger;
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).id, "");
        },
        get onactive() {
            debugger;
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onactive, "");
        },
        set onactive(value) {
            debugger;
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onactive = value + "";
        },
        get onaddtrack() {
            debugger;
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onaddtrack, "");
        },
        set onaddtrack(value) {
            debugger;
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onaddtrack = value + "";
        },
        get oninactive() {
            debugger;
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oninactive, "");
        },
        set oninactive(value) {
            debugger;
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oninactive = value + "";
        },
        get onremovetrack() {
            debugger;
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onremovetrack, "");
        },
        set onremovetrack(value) {
            debugger;
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onremovetrack = value + "";
        },
        removeTrack() {
            debugger;
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }

    qxVm.rename(MediaStream.prototype, "MediaStream");
    qxVm.safeDescriptor_addConstructor(MediaStream);
    qxVm.safe_Objattribute(MediaStream, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(MediaStream.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(MediaStream, HTMLElement);

})();


// qxVm.z_sanbox.memory.htmlElements["div"] = function () {
//     return new MediaStream(qxVm.z_sanbox.memory.$createObj_key);
// }