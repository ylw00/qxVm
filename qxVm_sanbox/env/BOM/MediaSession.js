MediaSession = function MediaSession(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(MediaSession);

; (function () {
    const $safe_get_attribute = ['metadata', 'playbackState'];
    const $safe_set_attribute = ['metadata', 'playbackState'];
    const $safe_func_attribute = ['setActionHandler', 'setCameraActive', 'setMicrophoneActive', 'setPositionState'];

    MediaSession.prototype = {
        get metadata() {
            debugger;
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).metadata, null);
        },
        set metadata(value) {
            debugger;
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).metadata = value + "";
        },
        get playbackState() {
            debugger;
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).playbackState, "none");
        },
        set playbackState(value) {
            debugger;
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).playbackState = value + "";
        },
        setActionHandler() {
            debugger;
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        setCameraActive() {
            debugger;
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        setMicrophoneActive() {
            debugger;
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        setPositionState() {
            debugger;
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(MediaSession.prototype, "MediaSession");
    qxVm.safeDescriptor_addConstructor(MediaSession);
    qxVm.safe_Objattribute(MediaSession, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();
