Screen = function Screen(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
};
qxVm.safefunction(Screen);
screen = {};
; (function () {
    const $attribute_map = {
        availHeight: 1392,
        availLeft: 0,
        availTop: 0,
        availWidth: 2560,
        colorDepth: 24,
        height: 1440,
        orientation: new ScreenOrientation(qxVm.memory.$createObj_key),
        pixelDepth: 24,
        width: 2560
    };
    // 将属性更新为用户自定义属性
    qxVm.updata_envs(qxVm.default_envs['screen'], $attribute_map)

    const $safe_get_attribute = [
        'availHeight', 'availLeft', 'availTop', 'availWidth', 'colorDepth', 'height', 'orientation', 'pixelDepth', 'width'
    ];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    Screen.prototype = {
        get availHeight() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.availHeight;
        },
        get availLeft() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.availLeft;
        },
        get availTop() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.availTop;
        },
        get availWidth() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.availWidth;
        },
        get colorDepth() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.colorDepth;
        },
        get height() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.height;
        },
        get orientation() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.orientation
        },
        get pixelDepth() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.pixelDepth;
        },
        get width() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.width;
        }
    };
    qxVm.rename(Screen.prototype, "Screen");
    qxVm.safeDescriptor_addConstructor(Screen);
    qxVm.safe_Objattribute(Screen, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(screen, Screen.prototype);

})();

