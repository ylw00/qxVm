NavigatorUAData = function NavigatorUAData(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(NavigatorUAData);

; (function () {
    const $safe_get_attribute = ['brands', 'mobile', 'platform'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getHighEntropyValues', 'toJSON'];

    NavigatorUAData.prototype = {
        get brands() { // 这个属性得对象描述符不正确, 
            if (!NavigatorUAData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return [
                { brand: ' Not;A Brand', version: '99' },
                { brand: 'Google Chrome', version: '97' },
                { brand: 'Chromium', version: '97' }
            ]
        },
        getHighEntropyValues() {
            if (!NavigatorUAData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'NavigatorUAData', 'getHighEntropyValues', arguments, result);
            return result;
        },
        get mobile() {
            if (!NavigatorUAData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = false;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'NavigatorUAData', 'mobile', arguments, result);
            return result;
        },
        get platform() {
            if (!NavigatorUAData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = "Windows";
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'NavigatorUAData', 'platform', arguments, result);
            return result;
        },
        toJSON() {
            if (!NavigatorUAData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'NavigatorUAData', 'toJSON', arguments, result);
            return result;
        },
    };
    lwVm.rename(NavigatorUAData.prototype, "NavigatorUAData");
    lwVm.safeDescriptor_addConstructor(NavigatorUAData);
    lwVm.safe_Objattribute(NavigatorUAData, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})()

