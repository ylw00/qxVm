Attr = function Attr() {//构造函数
    throw new TypeError("Illegal constructor");
}; lwVm.safefunction(Attr);

; (function () {
    const $safe_get_attribute = [
        'localName', 'name', 'namespaceURI', 'ownerElement', 'prefix', 'specified', 'value'
    ];
    const $safe_set_attribute = ['value'];
    const $safe_func_attribute = [];

    Attr.prototype = {
        get localName(){
            if (!Attr.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            
        },
        get name(){
            if (!Attr.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            
        },
        get namespaceURI(){
            if (!Attr.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get ownerElement(){
            if (!Attr.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get prefix(){
            if (!Attr.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get specified(){
            if (!Attr.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get value(){
            if (!Attr.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set value(value){
        }
    };
    lwVm.rename(Attr.prototype, "Attr");
    lwVm.safeDescriptor_addConstructor(Attr);
    // debugger;
    lwVm.safe_Objattribute(Attr, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);


    Object.setPrototypeOf(Attr.prototype, Node.prototype);
    Object.setPrototypeOf(Attr, Node);

})();
