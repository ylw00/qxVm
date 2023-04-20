Attr = function Attr() {//构造函数
    throw new TypeError("Illegal constructor");
}; qxVm.safefunction(Attr);

; (function () {
    const $safe_get_attribute = [
        'localName', 'name', 'namespaceURI', 'ownerElement', 'prefix', 'specified', 'value'
    ];
    const $safe_set_attribute = ['value'];
    const $safe_func_attribute = [];

    Attr.prototype = {
        get localName(){
            debugger;
            if (!Attr.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            
        },
        get name(){
            debugger;
            if (!Attr.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            
        },
        get namespaceURI(){
            debugger;
            if (!Attr.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get ownerElement(){
            debugger;
            if (!Attr.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get prefix(){
            debugger;
            if (!Attr.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get specified(){
            debugger;
            if (!Attr.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get value(){
            debugger;
            if (!Attr.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set value(value){
        }
    };
    qxVm.rename(Attr.prototype, "Attr");
    qxVm.safeDescriptor_addConstructor(Attr);
    // debugger;
    qxVm.safe_Objattribute(Attr, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);


    Object.setPrototypeOf(Attr.prototype, Node.prototype);
    Object.setPrototypeOf(Attr, Node);

})();
