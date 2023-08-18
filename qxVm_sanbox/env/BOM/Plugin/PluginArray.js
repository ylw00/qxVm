PluginArray = function PluPluginArraygin() {//构造函数
    throw new TypeError("Illegal constructor");
};
lwVm.safefunction(PluginArray);

; (function () {
    const $safe_get_attribute = ['length'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['item', 'namedItem', 'refresh'];


    PluginArray.prototype = {
        item(index) {
            if (!PluginArray.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = this[index];
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'PluginArray', 'item', arguments, result);
            return result;
        },
        get length() {
            if (!PluginArray.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.pluginArray.temp.length;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PluginArray', 'length', arguments, result);
            return result;
        },
        namedItem(key) {
            if (!PluginArray.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = this[key];
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'PluginArray', 'namedItem', arguments, result);
            return result;
        },
        refresh() {
            if (!PluginArray.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'PluginArray', 'refresh', arguments, result);
            return result;
        }
    };
    lwVm.set_iterator(PluginArray);
    lwVm.rename(PluginArray.prototype, 'PluginArray');
    lwVm.safeDescriptor_addConstructor(PluginArray);
    lwVm.safe_Objattribute(PluginArray, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    

    lwVm.memory.pluginArray.instantiate = {};
    ; (function add_default_pluginArray() {
        if (Array.isArray(lwVm.memory.pluginArray.temp) && lwVm.memory.pluginArray.temp.length > 0) {
            for (let index = 0; index < lwVm.memory.pluginArray.temp.length; index++) {
                let plugin_temp = lwVm.memory.plugin.new(lwVm.memory.pluginArray.temp[index]);

                Object.defineProperty(lwVm.memory.pluginArray.instantiate, index, {
                    value: plugin_temp, configurable: true, enumerable: true, writable: false
                });
                Object.defineProperty(lwVm.memory.pluginArray.instantiate, plugin_temp.name, {
                    value: plugin_temp, configurable: true, enumerable: false, writable: false
                });
            }
        }
    })();

    Object.setPrototypeOf(lwVm.memory.pluginArray.instantiate, PluginArray.prototype);

})();

