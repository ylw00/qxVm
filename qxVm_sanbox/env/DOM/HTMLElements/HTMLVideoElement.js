HTMLVideoElement = function HTMLVideoElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLVideoElement);

; (function () {
    const $safe_get_attribute = [
        'disablePictureInPicture', 'height', 'onenterpictureinpicture', 'onleavepictureinpicture', 'playsInline', 'poster', 'videoHeight', 'videoWidth', 
        'webkitDecodedFrameCount', 'webkitDisplayingFullscreen', 'webkitDroppedFrameCount', 'webkitSupportsFullscreen', 'width'
    ];
    const $safe_set_attribute = ['disablePictureInPicture', 'height', 'onenterpictureinpicture', 'onleavepictureinpicture', 'playsInline', 'poster', 'width'];
    const $safe_func_attribute = [
        'cancelVideoFrameCallback', 'getVideoPlaybackQuality', 'requestPictureInPicture', 'requestVideoFrameCallback', 'webkitEnterFullScreen', 'webkitEnterFullscreen',
        'webkitExitFullScreen', 'webkitExitFullscreen'
    ];

    HTMLVideoElement.prototype = {
        cancelVideoFrameCallback() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLVideoElement', 'cancelVideoFrameCallback', arguments, result);
            return result;
        },
        get disablePictureInPicture() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).disablePictureInPicture, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLVideoElement', 'disablePictureInPicture', arguments, result);
            return result;
        },
        set disablePictureInPicture(value) {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLVideoElement', 'disablePictureInPicture', arguments);
            lwVm.memory.private_data.get(this).disablePictureInPicture = value + "";
        },
        getVideoPlaybackQuality() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLVideoElement', 'getVideoPlaybackQuality', arguments, result);
            return result;
        },
        get height() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).height, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLVideoElement', 'height', arguments, result);
            return result;
        },
        set height(value) {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLVideoElement', 'height', arguments);
            lwVm.memory.private_data.get(this).height = value + "";
        },
        get onenterpictureinpicture() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onenterpictureinpicture, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLVideoElement', 'onenterpictureinpicture', arguments, result);
            return result;
        },
        set onenterpictureinpicture(value) {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLVideoElement', 'onenterpictureinpicture', arguments);
            lwVm.memory.private_data.get(this).onenterpictureinpicture = value + "";
        },
        get onleavepictureinpicture() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onleavepictureinpicture, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLVideoElement', 'onleavepictureinpicture', arguments, result);
            return result;
        },
        set onleavepictureinpicture(value) {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLVideoElement', 'onleavepictureinpicture', arguments);
            lwVm.memory.private_data.get(this).onleavepictureinpicture = value + "";
        },
        get playsInline() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).playsInline, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLVideoElement', 'playsInline', arguments, result);
            return result;
        },
        set playsInline(value) {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLVideoElement', 'playsInline', arguments);
            lwVm.memory.private_data.get(this).playsInline = value + "";
        },
        get poster() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).poster, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLVideoElement', 'poster', arguments, result);
            return result;
        },
        set poster(value) {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLVideoElement', 'poster', arguments);
            lwVm.memory.private_data.get(this).poster = value + "";
        },
        requestPictureInPicture() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLVideoElement', 'requestPictureInPicture', arguments, result);
            return result;
        },
        requestVideoFrameCallback() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLVideoElement', 'requestVideoFrameCallback', arguments, result);
            return result;
        },
        get videoHeight() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).videoHeight, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLVideoElement', 'videoHeight', arguments, result);
            return result;
        },
        get videoWidth() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).videoWidth, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLVideoElement', 'videoWidth', arguments, result);
            return result;
        },
        get webkitDecodedFrameCount() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).webkitDecodedFrameCount, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLVideoElement', 'webkitDecodedFrameCount', arguments, result);
            return result;
        },
        get webkitDisplayingFullscreen() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).webkitDisplayingFullscreen, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLVideoElement', 'webkitDisplayingFullscreen', arguments, result);
            return result;
        },
        get webkitDroppedFrameCount() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).webkitDroppedFrameCount, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLVideoElement', 'webkitDroppedFrameCount', arguments, result);
            return result;
        },
        webkitEnterFullScreen() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLVideoElement', 'webkitEnterFullScreen', arguments, result);
            return result;
        },
        webkitEnterFullscreen() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLVideoElement', 'webkitEnterFullscreen', arguments, result);
            return result;
        },
        webkitExitFullScreen() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLVideoElement', 'webkitExitFullScreen', arguments, result);
            return result;
        },
        webkitExitFullscreen() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLVideoElement', 'webkitExitFullscreen', arguments, result);
            return result;
        },
        get webkitSupportsFullscreen() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).webkitSupportsFullscreen, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLVideoElement', 'webkitSupportsFullscreen', arguments, result);
            return result;
        },
        get width() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).width, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLVideoElement', 'width', arguments, result);
            return result;
        },
        set width(value) {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).width = value + "";
        }
    };

    lwVm.rename(HTMLVideoElement.prototype, "HTMLVideoElement");
    lwVm.safeDescriptor_addConstructor(HTMLVideoElement);
    lwVm.safe_Objattribute(HTMLVideoElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLVideoElement.prototype, HTMLMediaElement.prototype);
    Object.setPrototypeOf(HTMLVideoElement, HTMLMediaElement);

})();

lwVm.memory.htmlElements["video"] = function () {
    return new HTMLVideoElement(lwVm.memory.$createObj_key);
}

