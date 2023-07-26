HTMLBodyElement = function HTMLBodyElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLBodyElement);


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
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).aLink, "");
        },
        set aLink(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).aLink = value + "";
        },
        get background(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).background, "");
        },
        set background(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).background = value + "";
        },
        get bgColor(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).bgColor, "");
        },
        set bgColor(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).bgColor = value + "";
        },
        get link(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).link, "");
        },
        set link(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).link = value + "";
        },
        get onafterprint(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onafterprint, null);
        },
        set onafterprint(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onafterprint = value + "";
        },
        get onbeforeprint(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onbeforeprint, null);
        },
        set onbeforeprint(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onbeforeprint = value + "";
        },
        get onbeforeunload(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onbeforeunload, null);
        },
        set onbeforeunload(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onbeforeunload = value + "";
        },
        get onblur(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onblur, null);
        },
        set onblur(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onblur = value + "";
        },
        get onerror(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onerror, null);
        },
        set onerror(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onerror = value + "";
        },
        get onfocus(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onfocus,null);
        },
        set onfocus(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onfocus = value + "";
        },
        get onhashchange(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onhashchange, null);
        },
        set onhashchange(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onhashchange = value + "";
        },
        get onlanguagechange(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onlanguagechange, null);
        },
        set onlanguagechange(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onlanguagechange = value + "";
        },
        get onload(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onload, null);
        },
        set onload(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onload = value + "";
        },
        get onmessage(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onmessage, null);
        },
        set onmessage(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onmessage = value + "";
        },
        get onmessageerror(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onmessageerror, null);
        },
        set onmessageerror(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onmessageerror = value + "";
        },
        get onoffline(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onoffline, null);
        },
        set onoffline(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onoffline = value + "";
        },
        get ononline(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).ononline, null);
        },
        set ononline(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).ononline = value + "";
        },
        get onpagehide(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onpagehide, null);
        },
        set onpagehide(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onpagehide = value + "";
        },
        get onpageshow(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onpageshow, null);
        },
        set onpageshow(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onpageshow = value + "";
        },
        get onpopstate(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onpopstate, null);
        },
        set onpopstate(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onpopstate = value + "";
        },
        get onrejectionhandled(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onrejectionhandled, null);
        },
        set onrejectionhandled(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onrejectionhandled = value + "";
        },
        get onresize(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onresize, null);
        },
        set onresize(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onresize = value + "";
        },
        get onscroll(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onscroll, null);
        },
        set onscroll(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onscroll = value + "";
        },
        get onstorage(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onstorage, null);
        },
        set onstorage(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onstorage = value + "";
        },
        get onunhandledrejection(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onunhandledrejection, null);
        },
        set onunhandledrejection(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onunhandledrejection = value + "";
        },
        get onunload(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).onunload, null);
        },
        set onunload(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).onunload = value + "";
        },
        get text(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).text, null);
        },
        set text(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).text = value + "";
        },
        get vLink(){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).vLink, null);
        },
        set vLink(value){
            if (!HTMLBodyElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).vLink = value + "";
        },
    }

    lwVm.rename(HTMLBodyElement.prototype, "HTMLBodyElement");
    lwVm.safeDescriptor_addConstructor(HTMLBodyElement);
    lwVm.safe_Objattribute(HTMLBodyElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLBodyElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLBodyElement, HTMLElement);

})();
lwVm.memory.htmlElements["body"] = function(){
    return new HTMLBodyElement(lwVm.memory.$createObj_key);
}

