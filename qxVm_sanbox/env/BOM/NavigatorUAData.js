NavigatorUAData = function NavigatorUAData(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(NavigatorUAData);

; (function () {
    const $safe_get_attribute = ['brands', 'mobile', 'platform'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getHighEntropyValues', 'toJSON'];

    NavigatorUAData.prototype = {
        get brands() { // 这个属性得对象描述符不正确, 
            debugger;
            if (!NavigatorUAData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return [
                { brand: ' Not;A Brand', version: '99' },
                { brand: 'Google Chrome', version: '97' },
                { brand: 'Chromium', version: '97' }
            ]
        },
        getHighEntropyValues() {
            debugger;
            if (!NavigatorUAData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get mobile() {
            if (!NavigatorUAData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return false;
        },
        get platform() {
            if (!NavigatorUAData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return "Windows";
        },
        toJSON() {
            debugger;
            if (!NavigatorUAData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    };
    qxVm.rename(NavigatorUAData.prototype, "NavigatorUAData");
    qxVm.safeDescriptor_addConstructor(NavigatorUAData);
    qxVm.safe_Objattribute(NavigatorUAData, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})()

