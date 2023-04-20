NodeList = function NodeList(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(NodeList);

; (function () {
    const $safe_get_attribute = ['length'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['entries', 'forEach', 'item', 'keys', 'values'];

    NodeList.prototype = {
        entries() {
            debugger;
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        forEach(callback, ...args) {
            debugger;
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        item(imdex) {
            debugger;
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            try{
                return this[imdex]
            }catch(error){
                return null;
            }
        },
        keys() {
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return Object.keys(this);
        },
        get length() {
            debugger;
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).length, "");
        },
        values() {
            debugger;
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        }
    };
    qxVm.set_iterator(NodeList);
    qxVm.rename(NodeList.prototype, "NodeList");
    qxVm.safeDescriptor_addConstructor(NodeList);
    qxVm.safe_Objattribute(NodeList, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();