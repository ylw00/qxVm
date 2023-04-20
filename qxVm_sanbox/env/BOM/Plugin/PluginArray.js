PluginArray = function PluPluginArraygin() {//构造函数
    throw new TypeError("Illegal constructor");
};
qxVm.safefunction(PluginArray);

; (function () {
    const $safe_get_attribute = ['length'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['item', 'namedItem', 'refresh'];


    PluginArray.prototype = {
        item(index) {
            if (!PluginArray.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return this[index];
        },
        get length() {
            if (!PluginArray.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.pluginArray.temp.length;
        },
        namedItem(key) {
            if (!PluginArray.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return this[key];
        },
        refresh() {
            if (!PluginArray.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            debugger;
        }
    };
    qxVm.set_iterator(PluginArray);
    qxVm.rename(PluginArray.prototype, 'PluginArray');
    qxVm.safeDescriptor_addConstructor(PluginArray);
    qxVm.safe_Objattribute(PluginArray, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    

    qxVm.memory.pluginArray.instantiate = {};
    ; (function add_default_pluginArray() {
        if (Array.isArray(qxVm.memory.pluginArray.temp) && qxVm.memory.pluginArray.temp.length > 0) {
            for (let index = 0; index < qxVm.memory.pluginArray.temp.length; index++) {
                let plugin_temp = qxVm.memory.plugin.new(qxVm.memory.pluginArray.temp[index]);

                Object.defineProperty(qxVm.memory.pluginArray.instantiate, index, {
                    value: plugin_temp, configurable: true, enumerable: true, writable: false
                });
                Object.defineProperty(qxVm.memory.pluginArray.instantiate, plugin_temp.name, {
                    value: plugin_temp, configurable: true, enumerable: false, writable: false
                });
            }
        }
    })();

    Object.setPrototypeOf(qxVm.memory.pluginArray.instantiate, PluginArray.prototype);

})();

