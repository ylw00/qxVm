SVGElement = function SVGElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(SVGElement);

; (function () {
    const $safe_get_attribute = [
        'autofocus', 'className', 'dataset', 'nonce', 'onabort', 'onanimationend', 'onanimationiteration', 'onanimationstart', 'onauxclick', 'onbeforexrselect', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick',
        'onclose', 'oncontextmenu', 'oncopy', 'oncuechange', 'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror',
        'onfocus', 'onformdata', 'ongotpointercapture', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onlostpointercapture', 'onmousedown', 'onmousemove',
        'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpointercancel', 'onpointerdown', 'onpointerenter', 'onpointerleave', 'onpointermove', 'onpointerout', 'onpointerover',
        'onpointerrawupdate', 'onpointerup', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onscroll', 'onsecuritypolicyviolation', 'onseeked', 'onseeking', 'onselect', 'onselectionchange', 'onselectstart', 'onslotchange', 'onstalled',
        'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'ontransitioncancel', 'ontransitionend', 'ontransitionrun', 'ontransitionstart', 'onvolumechange', 'onwaiting', 'onwebkitanimationend', 'onwebkitanimationiteration',
        'onwebkitanimationstart', 'onwebkittransitionend', 'onwheel', 'ownerSVGElement', 'style', 'tabIndex', 'viewportElement'
    ];
    const $safe_set_attribute = [
        'autofocus', 'nonce', 'onabort', 'onanimationend', 'onanimationiteration', 'onanimationstart', 'onauxclick', 'onbeforexrselect', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncontextmenu',
        'oncopy', 'oncuechange', 'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'onformdata',
        'ongotpointercapture', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onlostpointercapture', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover',
        'onmouseup', 'onmousewheel', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpointercancel', 'onpointerdown', 'onpointerenter', 'onpointerleave', 'onpointermove', 'onpointerout', 'onpointerover', 'onpointerrawupdate', 'onpointerup',
        'onprogress', 'onratechange', 'onreset', 'onresize', 'onscroll', 'onsecuritypolicyviolation', 'onseeked', 'onseeking', 'onselect', 'onselectionchange', 'onselectstart', 'onslotchange', 'onstalled', 'onsubmit', 'onsuspend', 'ontimeupdate',
        'ontoggle', 'ontransitioncancel', 'ontransitionend', 'ontransitionrun', 'ontransitionstart', 'onvolumechange', 'onwaiting', 'onwebkitanimationend', 'onwebkitanimationiteration', 'onwebkitanimationstart', 'onwebkittransitionend',
        'onwheel', 'style', 'tabIndex'
    ];
    const $safe_func_attribute = ['blur', 'focus'];

    SVGElement.prototype = {
        get autofocus() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).autofocus, "");
        },
        set autofocus(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).autofocus = value + "";
        },
        blur() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get className() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).className, "");
        },
        get dataset() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).dataset, "");
        },
        focus() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get nonce() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).nonce, "");
        },
        set nonce(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).nonce = value + "";
        },
        get onabort() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onabort, "");
        },
        set onabort(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onabort = value + "";
        },
        get onanimationend() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onanimationend, "");
        },
        set onanimationend(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onanimationend = value + "";
        },
        get onanimationiteration() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onanimationiteration, "");
        },
        set onanimationiteration(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onanimationiteration = value + "";
        },
        get onanimationstart() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onanimationstart, "");
        },
        set onanimationstart(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onanimationstart = value + "";
        },
        get onauxclick() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onauxclick, "");
        },
        set onauxclick(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onauxclick = value + "";
        },
        get onbeforexrselect() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onbeforexrselect, "");
        },
        set onbeforexrselect(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onbeforexrselect = value + "";
        },
        get onblur() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onblur, "");
        },
        set onblur(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onblur = value + "";
        },
        get oncancel() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oncancel, "");
        },
        set oncancel(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oncancel = value + "";
        },
        get oncanplay() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oncanplay, "");
        },
        set oncanplay(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oncanplay = value + "";
        },
        get oncanplaythrough() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oncanplaythrough, "");
        },
        set oncanplaythrough(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oncanplaythrough = value + "";
        },
        get onchange() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onchange, "");
        },
        set onchange(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onchange = value + "";
        },
        get onclick() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onclick, "");
        },
        set onclick(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onclick = value + "";
        },
        get onclose() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onclose, "");
        },
        set onclose(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onclose = value + "";
        },
        get oncontextmenu() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oncontextmenu, "");
        },
        set oncontextmenu(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oncontextmenu = value + "";
        },
        get oncopy() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oncopy, "");
        },
        set oncopy(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oncopy = value + "";
        },
        get oncuechange() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oncuechange, "");
        },
        set oncuechange(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oncuechange = value + "";
        },
        get oncut() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oncut, "");
        },
        set oncut(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oncut = value + "";
        },
        get ondblclick() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondblclick, "");
        },
        set ondblclick(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondblclick = value + "";
        },
        get ondrag() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondrag, "");
        },
        set ondrag(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondrag = value + "";
        },
        get ondragend() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondragend, "");
        },
        set ondragend(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondragend = value + "";
        },
        get ondragenter() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondragenter, "");
        },
        set ondragenter(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondragenter = value + "";
        },
        get ondragleave() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondragleave, "");
        },
        set ondragleave(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondragleave = value + "";
        },
        get ondragover() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondragover, "");
        },
        set ondragover(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondragover = value + "";
        },
        get ondragstart() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondragstart, "");
        },
        set ondragstart(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondragstart = value + "";
        },
        get ondrop() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondrop, "");
        },
        set ondrop(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondrop = value + "";
        },
        get ondurationchange() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondurationchange, "");
        },
        set ondurationchange(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondurationchange = value + "";
        },
        get onemptied() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onemptied, "");
        },
        set onemptied(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onemptied = value + "";
        },
        get onended() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onended, "");
        },
        set onended(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onended = value + "";
        },
        get onerror() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onerror, "");
        },
        set onerror(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onerror = value + "";
        },
        get onfocus() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onfocus, "");
        },
        set onfocus(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onfocus = value + "";
        },
        get onformdata() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onformdata, "");
        },
        set onformdata(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onformdata = value + "";
        },
        get ongotpointercapture() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ongotpointercapture, "");
        },
        set ongotpointercapture(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ongotpointercapture = value + "";
        },
        get oninput() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oninput, "");
        },
        set oninput(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oninput = value + "";
        },
        get oninvalid() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oninvalid, "");
        },
        set oninvalid(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oninvalid = value + "";
        },
        get onkeydown() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onkeydown, "");
        },
        set onkeydown(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onkeydown = value + "";
        },
        get onkeypress() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onkeypress, "");
        },
        set onkeypress(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onkeypress = value + "";
        },
        get onkeyup() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onkeyup, "");
        },
        set onkeyup(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onkeyup = value + "";
        },
        get onload() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onload, "");
        },
        set onload(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onload = value + "";
        },
        get onloadeddata() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onloadeddata, "");
        },
        set onloadeddata(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onloadeddata = value + "";
        },
        get onloadedmetadata() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onloadedmetadata, "");
        },
        set onloadedmetadata(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onloadedmetadata = value + "";
        },
        get onloadstart() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onloadstart, "");
        },
        set onloadstart(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onloadstart = value + "";
        },
        get onlostpointercapture() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onlostpointercapture, "");
        },
        set onlostpointercapture(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onlostpointercapture = value + "";
        },
        get onmousedown() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmousedown, "");
        },
        set onmousedown(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmousedown = value + "";
        },
        get onmousemove() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmousemove, "");
        },
        set onmousemove(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmousemove = value + "";
        },
        get onmouseout() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmouseout, "");
        },
        set onmouseout(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmouseout = value + "";
        },
        get onmouseover() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmouseover, "");
        },
        set onmouseover(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmouseover = value + "";
        },
        get onmouseup() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmouseup, "");
        },
        set onmouseup(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmouseup = value + "";
        },
        get onmousewheel() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmousewheel, "");
        },
        set onmousewheel(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmousewheel = value + "";
        },
        get onpaste() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpaste, "");
        },
        set onpaste(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpaste = value + "";
        },
        get onpause() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpause, "");
        },
        set onpause(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpause = value + "";
        },
        get onplay() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onplay, "");
        },
        set onplay(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onplay = value + "";
        },
        get onplaying() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onplaying, "");
        },
        set onplaying(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onplaying = value + "";
        },
        get onpointercancel() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpointercancel, "");
        },
        set onpointercancel(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpointercancel = value + "";
        },
        get onpointerdown() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpointerdown, "");
        },
        set onpointerdown(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpointerdown = value + "";
        },
        get onpointerenter() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpointerenter, "");
        },
        set onpointerenter(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpointerenter = value + "";
        },
        get onpointerleave() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpointerleave, "");
        },
        set onpointerleave(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpointerleave = value + "";
        },
        get onpointermove() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpointermove, "");
        },
        set onpointermove(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpointermove = value + "";
        },
        get onpointerout() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpointerout, "");
        },
        set onpointerout(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpointerout = value + "";
        },
        get onpointerover() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpointerover, "");
        },
        set onpointerover(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpointerover = value + "";
        },
        get onpointerrawupdate() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpointerrawupdate, "");
        },
        set onpointerrawupdate(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpointerrawupdate = value + "";
        },
        get onpointerup() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpointerup, "");
        },
        set onpointerup(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpointerup = value + "";
        },
        get onprogress() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onprogress, "");
        },
        set onprogress(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onprogress = value + "";
        },
        get onratechange() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onratechange, "");
        },
        set onratechange(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onratechange = value + "";
        },
        get onreset() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onreset, "");
        },
        set onreset(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onreset = value + "";
        },
        get onresize() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onresize, "");
        },
        set onresize(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onresize = value + "";
        },
        get onscroll() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onscroll, "");
        },
        set onscroll(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onscroll = value + "";
        },
        get onsecuritypolicyviolation() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onsecuritypolicyviolation, "");
        },
        set onsecuritypolicyviolation(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onsecuritypolicyviolation = value + "";
        },
        get onseeked() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onseeked, "");
        },
        set onseeked(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onseeked = value + "";
        },
        get onseeking() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onseeking, "");
        },
        set onseeking(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onseeking = value + "";
        },
        get onselect() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onselect, "");
        },
        set onselect(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onselect = value + "";
        },
        get onselectionchange() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onselectionchange, "");
        },
        set onselectionchange(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onselectionchange = value + "";
        },
        get onselectstart() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onselectstart, "");
        },
        set onselectstart(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onselectstart = value + "";
        },
        get onslotchange() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onslotchange, "");
        },
        set onslotchange(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onslotchange = value + "";
        },
        get onstalled() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onstalled, "");
        },
        set onstalled(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onstalled = value + "";
        },
        get onsubmit() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onsubmit, "");
        },
        set onsubmit(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onsubmit = value + "";
        },
        get onsuspend() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onsuspend, "");
        },
        set onsuspend(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onsuspend = value + "";
        },
        get ontimeupdate() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ontimeupdate, "");
        },
        set ontimeupdate(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ontimeupdate = value + "";
        },
        get ontoggle() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ontoggle, "");
        },
        set ontoggle(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ontoggle = value + "";
        },
        get ontransitioncancel() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ontransitioncancel, "");
        },
        set ontransitioncancel(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ontransitioncancel = value + "";
        },
        get ontransitionend() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ontransitionend, "");
        },
        set ontransitionend(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ontransitionend = value + "";
        },
        get ontransitionrun() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ontransitionrun, "");
        },
        set ontransitionrun(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ontransitionrun = value + "";
        },
        get ontransitionstart() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ontransitionstart, "");
        },
        set ontransitionstart(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ontransitionstart = value + "";
        },
        get onvolumechange() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onvolumechange, "");
        },
        set onvolumechange(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onvolumechange = value + "";
        },
        get onwaiting() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onwaiting, "");
        },
        set onwaiting(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onwaiting = value + "";
        },
        get onwebkitanimationend() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onwebkitanimationend, "");
        },
        set onwebkitanimationend(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onwebkitanimationend = value + "";
        },
        get onwebkitanimationiteration() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onwebkitanimationiteration, "");
        },
        set onwebkitanimationiteration(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onwebkitanimationiteration = value + "";
        },
        get onwebkitanimationstart() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onwebkitanimationstart, "");
        },
        set onwebkitanimationstart(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onwebkitanimationstart = value + "";
        },
        get onwebkittransitionend() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onwebkittransitionend, "");
        },
        set onwebkittransitionend(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onwebkittransitionend = value + "";
        },
        get onwheel() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onwheel, "");
        },
        set onwheel(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onwheel = value + "";
        },
        get ownerSVGElement() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ownerSVGElement, "");
        },
        get style() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).style, "");
        },
        set style(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).style = value + "";
        },
        get tabIndex() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).tabIndex, "");
        },
        set tabIndex(value) {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).tabIndex = value + "";
        },
        get viewportElement() {
            debugger;
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).viewportElement, "");
        }
    }

    qxVm.rename(SVGElement.prototype, "SVGElement");
    qxVm.safeDescriptor_addConstructor(SVGElement);
    qxVm.safe_Objattribute(SVGElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(SVGElement.prototype, Element.prototype);
    Object.setPrototypeOf(SVGElement, Element);

})();

