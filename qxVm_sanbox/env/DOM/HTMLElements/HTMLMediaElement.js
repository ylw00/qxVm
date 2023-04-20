HTMLMediaElement = function HTMLMediaElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLMediaElement);

; (function () {
    const $attributes = {
        HAVE_CURRENT_DATA: 2,
        HAVE_ENOUGH_DATA: 4,
        HAVE_FUTURE_DATA: 3,
        HAVE_METADATA: 1,
        HAVE_NOTHING: 0,
        NETWORK_EMPTY: 0,
        NETWORK_IDLE: 1,
        NETWORK_LOADING: 2,
        NETWORK_NO_SOURCE: 3
    };
    const $safe_get_attribute = ['autoplay', 'buffered', 'controls', 'controlsList', 'crossOrigin', 'currentSrc', 'currentTime', 'defaultMuted', 'defaultPlaybackRate', 'disableRemotePlayback', 'duration', 'ended', 'error', 'loop', 'muted', 'networkState', 'onencrypted', 'onwaitingforkey', 'paused', 'playbackRate', 'played', 'preload', 'preservesPitch', 'readyState', 'remote', 'seekable', 'seeking', 'sinkId', 'src', 'srcObject', 'textTracks', 'volume', 'webkitAudioDecodedByteCount', 'webkitVideoDecodedByteCount'];
    const $safe_set_attribute = ['autoplay', 'controls', 'controlsList', 'crossOrigin', 'currentTime', 'defaultMuted', 'defaultPlaybackRate', 'disableRemotePlayback', 'loop', 'muted', 'onencrypted', 'onwaitingforkey', 'playbackRate', 'preload', 'preservesPitch', 'src', 'srcObject', 'volume'];
    const $safe_func_attribute = ['addTextTrack', 'canPlayType', 'captureStream', 'load', 'pause', 'play', 'setSinkId'];
    HTMLMediaElement.prototype = {

        addTextTrack() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get autoplay() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).autoplay, "");
        },
        set autoplay(value) {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).autoplay = value + "";
        },
        get buffered() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).buffered, "");
        },
        canPlayType() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        captureStream() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get controls() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).controls, "");
        },
        set controls(value) {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).controls = value + "";
        },
        get controlsList() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).controlsList, "");
        },
        set controlsList(value) {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).controlsList = value + "";
        },
        get crossOrigin() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).crossOrigin, "");
        },
        set crossOrigin(value) {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).crossOrigin = value + "";
        },
        get currentSrc() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).currentSrc, "");
        },
        get currentTime() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).currentTime, "");
        },
        set currentTime(value) {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).currentTime = value + "";
        },
        get defaultMuted() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).defaultMuted, "");
        },
        set defaultMuted(value) {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).defaultMuted = value + "";
        },
        get defaultPlaybackRate() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).defaultPlaybackRate, "");
        },
        set defaultPlaybackRate(value) {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).defaultPlaybackRate = value + "";
        },
        get disableRemotePlayback() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).disableRemotePlayback, "");
        },
        set disableRemotePlayback(value) {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).disableRemotePlayback = value + "";
        },
        get duration() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).duration, "");
        },
        get ended() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ended, "");
        },
        get error() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).error, "");
        },
        load() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get loop() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).loop, "");
        },
        set loop(value) {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).loop = value + "";
        },
        get muted() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).muted, "");
        },
        set muted(value) {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).muted = value + "";
        },
        get networkState() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).networkState, "");
        },
        get onencrypted() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onencrypted, "");
        },
        set onencrypted(value) {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onencrypted = value + "";
        },
        get onwaitingforkey() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onwaitingforkey, "");
        },
        set onwaitingforkey(value) {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onwaitingforkey = value + "";
        },
        pause() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get paused() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).paused, "");
        },
        play() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get playbackRate() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).playbackRate, "");
        },
        set playbackRate(value) {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).playbackRate = value + "";
        },
        get played() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).played, "");
        },
        get preload() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).preload, "");
        },
        set preload(value) {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).preload = value + "";
        },
        get preservesPitch() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).preservesPitch, "");
        },
        set preservesPitch(value) {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).preservesPitch = value + "";
        },
        get readyState() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).readyState, "");
        },
        get remote() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).remote, "");
        },
        get seekable() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).seekable, "");
        },
        get seeking() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).seeking, "");
        },
        setSinkId() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get sinkId() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).sinkId, "");
        },
        get src() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).src, "");
        },
        set src(value) {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).src = value + "";
        },
        get srcObject() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).srcObject, "");
        },
        set srcObject(value) {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).srcObject = value + "";
        },
        get textTracks() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).textTracks, "");
        },
        get volume() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).volume, "");
        },
        set volume(value) {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).volume = value + "";
        },
        get webkitAudioDecodedByteCount() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).webkitAudioDecodedByteCount, "");
        },
        get webkitVideoDecodedByteCount() {
            debugger;
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).webkitVideoDecodedByteCount, "");
        }
    };

    for (let key in $attributes) {
        if ($attributes.hasOwnProperty(key)) {
            const value = $attributes[key];
            Object.defineProperty(HTMLMediaElement, key, { value: value, configurable: false, enumerable: true, writable: false });
            Object.defineProperty(HTMLMediaElement.prototype, key, { value: value, configurable: false, enumerable: true, writable: false });
        }
    };

    qxVm.rename(HTMLMediaElement.prototype, "HTMLMediaElement");
    qxVm.safeDescriptor_addConstructor(HTMLMediaElement);
    qxVm.safe_Objattribute(HTMLMediaElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLMediaElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLMediaElement, HTMLElement);

})();
