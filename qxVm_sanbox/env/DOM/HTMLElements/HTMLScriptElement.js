HTMLScriptElement = function HTMLScriptElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLScriptElement);


;(function(){
    const $safe_get_attribute = ['async', 'charset', 'crossOrigin', 'defer', 'event', 'htmlFor', 'integrity', 'noModule', 'referrerPolicy', 'src', 'text', 'type'];
    const $safe_set_attribute = ['async', 'charset', 'crossOrigin', 'defer', 'event', 'htmlFor', 'integrity', 'noModule', 'referrerPolicy', 'src', 'text', 'type'];
    const $safe_func_attribute = [];

    HTMLScriptElement.prototype = {
        get async(){
            debugger;
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).async, true);
        },
        set async(value){
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).async = value + "";
        },
        get charset(){
            debugger;
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).charset, "");
        },
        set charset(value){
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).charset = value + "";
        },
        get crossOrigin(){
            debugger;
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).crossOrigin, null);
        },
        set crossOrigin(value){
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).crossOrigin = value + "";
        },
        get defer(){
            debugger;
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).defer, false);
        },
        set defer(value){
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).defer = value + "";
        },
        get event(){
            debugger;
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).event, "");
        },
        set event(value){
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).event = value + "";
        },
        get htmlFor(){
            debugger;
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).htmlFor, "");
        },
        set htmlFor(value){
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).htmlFor = value + "";
        },
        get integrity(){
            debugger;
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).integrity, "");
        },
        set integrity(value){
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).integrity = value + "";
        },
        get noModule(){
            debugger;
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).noModule, false);
        },
        set noModule(value){
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).noModule = value + "";
        },
        get referrerPolicy(){
            debugger;
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).referrerPolicy, null);
        },
        set referrerPolicy(value){
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).referrerPolicy = value + "";
        },
        get src(){
            debugger;
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).src, "");
        },
        set src(value){
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).src = value + "";
        },
        get text(){
            debugger;
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).text, "");
        },
        set text(value){
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).text = value + "";
        },
        get type(){
            debugger;
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).type, "");
        },
        set type(value){
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).type = value + "";
        }
    };


    qxVm.rename(HTMLScriptElement.prototype, "HTMLScriptElement");
    qxVm.safeDescriptor_addConstructor(HTMLScriptElement);
    qxVm.safe_Objattribute(HTMLScriptElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLScriptElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLScriptElement, HTMLElement);

})();

qxVm.memory.htmlElements["script"] = function () {
    return new HTMLScriptElement(qxVm.memory.$createObj_key);
}

