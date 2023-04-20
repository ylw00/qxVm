HTMLVideoElement = function HTMLVideoElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLVideoElement);

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
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get disablePictureInPicture() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).disablePictureInPicture, "");
        },
        set disablePictureInPicture(value) {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).disablePictureInPicture = value + "";
        },
        getVideoPlaybackQuality() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get height() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).height, "");
        },
        set height(value) {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).height = value + "";
        },
        get onenterpictureinpicture() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onenterpictureinpicture, "");
        },
        set onenterpictureinpicture(value) {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onenterpictureinpicture = value + "";
        },
        get onleavepictureinpicture() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onleavepictureinpicture, "");
        },
        set onleavepictureinpicture(value) {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onleavepictureinpicture = value + "";
        },
        get playsInline() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).playsInline, "");
        },
        set playsInline(value) {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).playsInline = value + "";
        },
        get poster() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).poster, "");
        },
        set poster(value) {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).poster = value + "";
        },
        requestPictureInPicture() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        requestVideoFrameCallback() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get videoHeight() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).videoHeight, "");
        },
        get videoWidth() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).videoWidth, "");
        },
        get webkitDecodedFrameCount() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).webkitDecodedFrameCount, "");
        },
        get webkitDisplayingFullscreen() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).webkitDisplayingFullscreen, "");
        },
        get webkitDroppedFrameCount() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).webkitDroppedFrameCount, "");
        },
        webkitEnterFullScreen() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        webkitEnterFullscreen() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        webkitExitFullScreen() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        webkitExitFullscreen() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get webkitSupportsFullscreen() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).webkitSupportsFullscreen, "");
        },
        get width() {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).width, "");
        },
        set width(value) {
            debugger;
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).width = value + "";
        }
    };

    qxVm.rename(HTMLVideoElement.prototype, "HTMLVideoElement");
    qxVm.safeDescriptor_addConstructor(HTMLVideoElement);
    qxVm.safe_Objattribute(HTMLVideoElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLVideoElement.prototype, HTMLMediaElement.prototype);
    Object.setPrototypeOf(HTMLVideoElement, HTMLMediaElement);

})();

qxVm.memory.htmlElements["video"] = function () {
    return new HTMLVideoElement(qxVm.memory.$createObj_key);
}

