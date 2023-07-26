Screen = function Screen(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
};
lwVm.safefunction(Screen);
screen = {};
; (function () {
    const $attribute_map = {
        availHeight: 1392,
        availLeft: 0,
        availTop: 0,
        availWidth: 2560,
        colorDepth: 24,
        height: 1440,
        orientation: new ScreenOrientation(lwVm.memory.$createObj_key),
        pixelDepth: 24,
        width: 2560
    };
    // 将属性更新为用户自定义属性
    lwVm.updata_envs(lwVm.default_envs['screen'], $attribute_map)

    const $safe_get_attribute = [
        'availHeight', 'availLeft', 'availTop', 'availWidth', 'colorDepth', 'height', 'orientation', 'pixelDepth', 'width'
    ];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    Screen.prototype = {
        get availHeight() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.availHeight;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Screen', 'availHeight', arguments, result);
            return result;
        },
        get availLeft() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.availLeft;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Screen', 'availLeft', arguments, result);
            return result;
        },
        get availTop() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.availTop;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Screen', 'availTop', arguments, result);
            return result;
        },
        get availWidth() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.availWidth;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Screen', 'availWidth', arguments, result);
            return result;
        },
        get colorDepth() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.colorDepth;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Screen', 'colorDepth', arguments, result);
            return result;
        },
        get height() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.height;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Screen', 'height', arguments, result);
            return result;
        },
        get orientation() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.orientation;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Screen', 'orientation', arguments, result);
            return result;
        },
        get pixelDepth() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.pixelDepth;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Screen', 'pixelDepth', arguments, result);
            return result;
        },
        get width() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.width;
        }
    };
    lwVm.rename(Screen.prototype, "Screen");
    lwVm.safeDescriptor_addConstructor(Screen);
    lwVm.safe_Objattribute(Screen, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(screen, Screen.prototype);

})();

