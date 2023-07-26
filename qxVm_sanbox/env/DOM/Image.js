Image = function Image() {
    return new HTMLImageElement(lwVm.memory.$createObj_key);
}; lwVm.safefunction(Image);

; (function () {
    Image.prototype = HTMLImageElement.prototype;
})();
