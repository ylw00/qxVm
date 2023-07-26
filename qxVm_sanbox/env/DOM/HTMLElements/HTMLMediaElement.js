HTMLMediaElement = function HTMLMediaElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLMediaElement);

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
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLMediaElement', 'addTextTrack', arguments, result);
            return result;
        },
        get autoplay() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).autoplay, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'autoplay', arguments, result);
            return result;
        },
        set autoplay(value) {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMediaElement', 'autoplay', arguments);
            lwVm.memory.private_data.get(this).autoplay = value + "";
        },
        get buffered() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).buffered, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'buffered', arguments, result);
            return result;
        },
        canPlayType() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLMediaElement', 'canPlayType', arguments, result);
            return result;
        },
        captureStream() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLMediaElement', 'captureStream', arguments, result);
            return result;
        },
        get controls() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).controls, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'controls', arguments, result);
            return result;
        },
        set controls(value) {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMediaElement', 'controls', arguments);
            lwVm.memory.private_data.get(this).controls = value + "";
        },
        get controlsList() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).controlsList, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'controlsList', arguments, result);
            return result;
        },
        set controlsList(value) {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMediaElement', 'controlsList', arguments);
            lwVm.memory.private_data.get(this).controlsList = value + "";
        },
        get crossOrigin() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).crossOrigin, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'crossOrigin', arguments, result);
            return result;
        },
        set crossOrigin(value) {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMediaElement', 'crossOrigin', arguments);
            lwVm.memory.private_data.get(this).crossOrigin = value + "";
        },
        get currentSrc() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).currentSrc, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'currentSrc', arguments, result);
            return result;
        },
        get currentTime() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).currentTime, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'currentTime', arguments, result);
            return result;
        },
        set currentTime(value) {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMediaElement', 'currentTime', arguments);
            lwVm.memory.private_data.get(this).currentTime = value + "";
        },
        get defaultMuted() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).defaultMuted, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'defaultMuted', arguments, result);
            return result;
        },
        set defaultMuted(value) {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMediaElement', 'defaultMuted', arguments);
            lwVm.memory.private_data.get(this).defaultMuted = value + "";
        },
        get defaultPlaybackRate() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).defaultPlaybackRate, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'defaultPlaybackRate', arguments, result);
            return result;
        },
        set defaultPlaybackRate(value) {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMediaElement', 'defaultPlaybackRate', arguments);
            lwVm.memory.private_data.get(this).defaultPlaybackRate = value + "";
        },
        get disableRemotePlayback() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).disableRemotePlayback, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'disableRemotePlayback', arguments, result);
            return result;
        },
        set disableRemotePlayback(value) {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMediaElement', 'disableRemotePlayback', arguments);
            lwVm.memory.private_data.get(this).disableRemotePlayback = value + "";
        },
        get duration() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).duration, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'duration', arguments, result);
            return result;
        },
        get ended() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ended, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'ended', arguments, result);
            return result;
        },
        get error() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).error, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'error', arguments, result);
            return result;
        },
        load() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLMediaElement', 'load', arguments, result);
            return result;
        },
        get loop() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).loop, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'loop', arguments, result);
            return result;
        },
        set loop(value) {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMediaElement', 'loop', arguments);
            lwVm.memory.private_data.get(this).loop = value + "";
        },
        get muted() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).muted, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'muted', arguments, result);
            return result;
        },
        set muted(value) {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMediaElement', 'muted', arguments);
            lwVm.memory.private_data.get(this).muted = value + "";
        },
        get networkState() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).networkState, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'networkState', arguments, result);
            return result;
        },
        get onencrypted() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onencrypted, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'onencrypted', arguments, result);
            return result;
        },
        set onencrypted(value) {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMediaElement', 'onencrypted', arguments);
            lwVm.memory.private_data.get(this).onencrypted = value + "";
        },
        get onwaitingforkey() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onwaitingforkey, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'onwaitingforkey', arguments, result);
            return result;
        },
        set onwaitingforkey(value) {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMediaElement', 'onwaitingforkey', arguments);
            lwVm.memory.private_data.get(this).onwaitingforkey = value + "";
        },
        pause() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLMediaElement', 'pause', arguments, result);
            return result;
        },
        get paused() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).paused, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'paused', arguments, result);
            return result;
        },
        play() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLMediaElement', 'play', arguments, result);
            return result;
        },
        get playbackRate() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).playbackRate, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'playbackRate', arguments, result);
            return result;
        },
        set playbackRate(value) {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMediaElement', 'playbackRate', arguments);
            lwVm.memory.private_data.get(this).playbackRate = value + "";
        },
        get played() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).played, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'played', arguments, result);
            return result;
        },
        get preload() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).preload, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'preload', arguments, result);
            return result;
        },
        set preload(value) {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMediaElement', 'preload', arguments);
            lwVm.memory.private_data.get(this).preload = value + "";
        },
        get preservesPitch() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).preservesPitch, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'preservesPitch', arguments, result);
            return result;
        },
        set preservesPitch(value) {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMediaElement', 'preservesPitch', arguments);
            lwVm.memory.private_data.get(this).preservesPitch = value + "";
        },
        get readyState() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).readyState, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'readyState', arguments, result);
            return result;
        },
        get remote() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).remote, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'remote', arguments, result);
            return result;
        },
        get seekable() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).seekable, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'seekable', arguments, result);
            return result;
        },
        get seeking() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).seeking, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'seeking', arguments, result);
            return result;
        },
        setSinkId() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLMediaElement', 'setSinkId', arguments, result);
            return result;
        },
        get sinkId() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).sinkId, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'sinkId', arguments, result);
            return result;
        },
        get src() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).src, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'src', arguments, result);
            return result;
        },
        set src(value) {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMediaElement', 'src', arguments);
            lwVm.memory.private_data.get(this).src = value + "";
        },
        get srcObject() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).srcObject, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'srcObject', arguments, result);
            return result;
        },
        set srcObject(value) {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMediaElement', 'srcObject', arguments);
            lwVm.memory.private_data.get(this).srcObject = value + "";
        },
        get textTracks() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).textTracks, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'textTracks', arguments, result);
            return result;
        },
        get volume() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).volume, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'volume', arguments, result);
            return result;
        },
        set volume(value) {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMediaElement', 'volume', arguments);
            lwVm.memory.private_data.get(this).volume = value + "";
        },
        get webkitAudioDecodedByteCount() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).webkitAudioDecodedByteCount, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMediaElement', 'webkitAudioDecodedByteCount', arguments, result);
            return result;
        },
        get webkitVideoDecodedByteCount() {
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).webkitVideoDecodedByteCount, "");
        }
    };

    for (let key in $attributes) {
        if ($attributes.hasOwnProperty(key)) {
            const value = $attributes[key];
            Object.defineProperty(HTMLMediaElement, key, { value: value, configurable: false, enumerable: true, writable: false });
            Object.defineProperty(HTMLMediaElement.prototype, key, { value: value, configurable: false, enumerable: true, writable: false });
        }
    };

    lwVm.rename(HTMLMediaElement.prototype, "HTMLMediaElement");
    lwVm.safeDescriptor_addConstructor(HTMLMediaElement);
    lwVm.safe_Objattribute(HTMLMediaElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLMediaElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLMediaElement, HTMLElement);

})();
