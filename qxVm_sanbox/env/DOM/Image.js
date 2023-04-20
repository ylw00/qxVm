Image = function Image() {
    return new HTMLImageElement(qxVm.memory.$createObj_key);
}; qxVm.safefunction(Image);

; (function () {
    Image.prototype = HTMLImageElement.prototype;
})();
