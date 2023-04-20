HTMLBodyElement = function HTMLBodyElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLBodyElement);


; (function () {
    const $safe_get_attribute = [
        'aLink', 'background', 'bgColor', 'link', 'onafterprint', 'onbeforeprint', 'onbeforeunload', 'onblur', 'onerror', 'onfocus', 'onhashchange', 'onlanguagechange', 'onload', 
        'onmessage', 'onmessageerror', 'onoffline', 'ononline', 'onpagehide', 'onpageshow', 'onpopstate', 'onrejectionhandled', 'onresize', 'onscroll', 'onstorage', 
        'onunhandledrejection', 'onunload', 'text', 'vLink'
    ];
    const $safe_set_attribute = [
        'aLink', 'background', 'bgColor', 'link', 'onafterprint', 'onbeforeprint', 'onbeforeunload', 'onblur', 'onerror', 'onfocus', 'onhashchange', 'onlanguagechange', 'onload', 
        'onmessage', 'onmessageerror', 'onoffline', 'ononline', 'onpagehide', 'onpageshow', 'onpopstate', 'onrejectionhandled', 'onresize', 'onscroll', 'onstorage', 
        'onunhandledrejection', 'onunload', 'text', 'vLink'
    ];
    const $safe_func_attribute = [];

    HTMLBodyElement.prototype = {
        get aLink(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).aLink, "");
        },
        set aLink(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).aLink = value + "";
        },
        get background(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).background, "");
        },
        set background(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).background = value + "";
        },
        get bgColor(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).bgColor, "");
        },
        set bgColor(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).bgColor = value + "";
        },
        get link(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).link, "");
        },
        set link(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).link = value + "";
        },
        get onafterprint(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onafterprint, null);
        },
        set onafterprint(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onafterprint = value + "";
        },
        get onbeforeprint(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onbeforeprint, null);
        },
        set onbeforeprint(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onbeforeprint = value + "";
        },
        get onbeforeunload(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onbeforeunload, null);
        },
        set onbeforeunload(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onbeforeunload = value + "";
        },
        get onblur(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onblur, null);
        },
        set onblur(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onblur = value + "";
        },
        get onerror(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onerror, null);
        },
        set onerror(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onerror = value + "";
        },
        get onfocus(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onfocus,null);
        },
        set onfocus(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onfocus = value + "";
        },
        get onhashchange(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onhashchange, null);
        },
        set onhashchange(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onhashchange = value + "";
        },
        get onlanguagechange(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onlanguagechange, null);
        },
        set onlanguagechange(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onlanguagechange = value + "";
        },
        get onload(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onload, null);
        },
        set onload(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onload = value + "";
        },
        get onmessage(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmessage, null);
        },
        set onmessage(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmessage = value + "";
        },
        get onmessageerror(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmessageerror, null);
        },
        set onmessageerror(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmessageerror = value + "";
        },
        get onoffline(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onoffline, null);
        },
        set onoffline(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onoffline = value + "";
        },
        get ononline(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ononline, null);
        },
        set ononline(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ononline = value + "";
        },
        get onpagehide(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpagehide, null);
        },
        set onpagehide(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpagehide = value + "";
        },
        get onpageshow(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpageshow, null);
        },
        set onpageshow(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpageshow = value + "";
        },
        get onpopstate(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpopstate, null);
        },
        set onpopstate(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpopstate = value + "";
        },
        get onrejectionhandled(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onrejectionhandled, null);
        },
        set onrejectionhandled(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onrejectionhandled = value + "";
        },
        get onresize(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onresize, null);
        },
        set onresize(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onresize = value + "";
        },
        get onscroll(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onscroll, null);
        },
        set onscroll(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onscroll = value + "";
        },
        get onstorage(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onstorage, null);
        },
        set onstorage(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onstorage = value + "";
        },
        get onunhandledrejection(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onunhandledrejection, null);
        },
        set onunhandledrejection(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onunhandledrejection = value + "";
        },
        get onunload(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onunload, null);
        },
        set onunload(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onunload = value + "";
        },
        get text(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).text, null);
        },
        set text(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).text = value + "";
        },
        get vLink(){
            debugger;
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).vLink, null);
        },
        set vLink(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).vLink = value + "";
        },
    }

    qxVm.rename(HTMLBodyElement.prototype, "HTMLBodyElement");
    qxVm.safeDescriptor_addConstructor(HTMLBodyElement);
    qxVm.safe_Objattribute(HTMLBodyElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLBodyElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLBodyElement, HTMLElement);

})();
qxVm.memory.htmlElements["body"] = function(){
    return new HTMLBodyElement(qxVm.memory.$createObj_key);
}

