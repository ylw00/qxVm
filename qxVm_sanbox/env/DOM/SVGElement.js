SVGElement = function SVGElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(SVGElement);

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
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).autofocus, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'autofocus', arguments, result);
            return result;
        },
        set autofocus(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'autofocus', arguments);
            lwVm.memory.private_data.get(this).autofocus = value + "";
        },
        blur() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'SVGElement', 'blur', arguments, result);
            return result;
        },
        get className() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).className, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'className', arguments, result);
            return result;
        },
        get dataset() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).dataset, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'dataset', arguments, result);
            return result;
        },
        focus() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'SVGElement', 'focus', arguments, result);
            return result;
        },
        get nonce() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).nonce, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'nonce', arguments, result);
            return result;
        },
        set nonce(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'nonce', arguments);
            lwVm.memory.private_data.get(this).nonce = value + "";
        },
        get onabort() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onabort, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onabort', arguments, result);
            return result;
        },
        set onabort(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onabort', arguments);
            lwVm.memory.private_data.get(this).onabort = value + "";
        },
        get onanimationend() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onanimationend, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onanimationend', arguments, result);
            return result;
        },
        set onanimationend(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onanimationend', arguments);
            lwVm.memory.private_data.get(this).onanimationend = value + "";
        },
        get onanimationiteration() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onanimationiteration, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onanimationiteration', arguments, result);
            return result;
        },
        set onanimationiteration(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onanimationiteration', arguments);
            lwVm.memory.private_data.get(this).onanimationiteration = value + "";
        },
        get onanimationstart() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onanimationstart, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onanimationstart', arguments, result);
            return result;
        },
        set onanimationstart(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onanimationstart', arguments);
            lwVm.memory.private_data.get(this).onanimationstart = value + "";
        },
        get onauxclick() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onauxclick, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onauxclick', arguments, result);
            return result;
        },
        set onauxclick(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onauxclick', arguments);
            lwVm.memory.private_data.get(this).onauxclick = value + "";
        },
        get onbeforexrselect() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onbeforexrselect, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onbeforexrselect', arguments, result);
            return result;
        },
        set onbeforexrselect(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onbeforexrselect', arguments);
            lwVm.memory.private_data.get(this).onbeforexrselect = value + "";
        },
        get onblur() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onblur, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onblur', arguments, result);
            return result;
        },
        set onblur(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onblur', arguments);
            lwVm.memory.private_data.get(this).onblur = value + "";
        },
        get oncancel() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oncancel, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'oncancel', arguments, result);
            return result;
        },
        set oncancel(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'oncancel', arguments);
            lwVm.memory.private_data.get(this).oncancel = value + "";
        },
        get oncanplay() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oncanplay, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'oncanplay', arguments, result);
            return result;
        },
        set oncanplay(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'oncanplay', arguments);
            lwVm.memory.private_data.get(this).oncanplay = value + "";
        },
        get oncanplaythrough() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oncanplaythrough, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'oncanplaythrough', arguments, result);
            return result;
        },
        set oncanplaythrough(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'oncanplaythrough', arguments);
            lwVm.memory.private_data.get(this).oncanplaythrough = value + "";
        },
        get onchange() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onchange, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onchange', arguments, result);
            return result;
        },
        set onchange(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onchange', arguments);
            lwVm.memory.private_data.get(this).onchange = value + "";
        },
        get onclick() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onclick, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onclick', arguments, result);
            return result;
        },
        set onclick(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onclick', arguments);
            lwVm.memory.private_data.get(this).onclick = value + "";
        },
        get onclose() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onclose, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onclose', arguments, result);
            return result;
        },
        set onclose(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onclose', arguments);
            lwVm.memory.private_data.get(this).onclose = value + "";
        },
        get oncontextmenu() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oncontextmenu, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'oncontextmenu', arguments, result);
            return result;
        },
        set oncontextmenu(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'oncontextmenu', arguments);
            lwVm.memory.private_data.get(this).oncontextmenu = value + "";
        },
        get oncopy() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oncopy, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'oncopy', arguments, result);
            return result;
        },
        set oncopy(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'oncopy', arguments);
            lwVm.memory.private_data.get(this).oncopy = value + "";
        },
        get oncuechange() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oncuechange, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'oncuechange', arguments, result);
            return result;
        },
        set oncuechange(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'oncuechange', arguments);
            lwVm.memory.private_data.get(this).oncuechange = value + "";
        },
        get oncut() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oncut, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'oncut', arguments, result);
            return result;
        },
        set oncut(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'oncut', arguments);
            lwVm.memory.private_data.get(this).oncut = value + "";
        },
        get ondblclick() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondblclick, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'ondblclick', arguments, result);
            return result;
        },
        set ondblclick(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'ondblclick', arguments);
            lwVm.memory.private_data.get(this).ondblclick = value + "";
        },
        get ondrag() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondrag, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'ondrag', arguments, result);
            return result;
        },
        set ondrag(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'ondrag', arguments);
            lwVm.memory.private_data.get(this).ondrag = value + "";
        },
        get ondragend() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondragend, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'ondragend', arguments, result);
            return result;
        },
        set ondragend(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'ondragend', arguments);
            lwVm.memory.private_data.get(this).ondragend = value + "";
        },
        get ondragenter() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondragenter, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'ondragenter', arguments, result);
            return result;
        },
        set ondragenter(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'ondragenter', arguments);
            lwVm.memory.private_data.get(this).ondragenter = value + "";
        },
        get ondragleave() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondragleave, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'ondragleave', arguments, result);
            return result;
        },
        set ondragleave(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'ondragleave', arguments);
            lwVm.memory.private_data.get(this).ondragleave = value + "";
        },
        get ondragover() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondragover, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'ondragover', arguments, result);
            return result;
        },
        set ondragover(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'ondragover', arguments);
            lwVm.memory.private_data.get(this).ondragover = value + "";
        },
        get ondragstart() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondragstart, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'ondragstart', arguments, result);
            return result;
        },
        set ondragstart(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'ondragstart', arguments);
            lwVm.memory.private_data.get(this).ondragstart = value + "";
        },
        get ondrop() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondrop, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'ondrop', arguments, result);
            return result;
        },
        set ondrop(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'ondrop', arguments);
            lwVm.memory.private_data.get(this).ondrop = value + "";
        },
        get ondurationchange() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondurationchange, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'ondurationchange', arguments, result);
            return result;
        },
        set ondurationchange(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'ondurationchange', arguments);
            lwVm.memory.private_data.get(this).ondurationchange = value + "";
        },
        get onemptied() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onemptied, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onemptied', arguments, result);
            return result;
        },
        set onemptied(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onemptied', arguments);
            lwVm.memory.private_data.get(this).onemptied = value + "";
        },
        get onended() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onended, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onended', arguments, result);
            return result;
        },
        set onended(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onended', arguments);
            lwVm.memory.private_data.get(this).onended = value + "";
        },
        get onerror() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onerror, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onerror', arguments, result);
            return result;
        },
        set onerror(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onerror', arguments);
            lwVm.memory.private_data.get(this).onerror = value + "";
        },
        get onfocus() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onfocus, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onfocus', arguments, result);
            return result;
        },
        set onfocus(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onfocus', arguments);
            lwVm.memory.private_data.get(this).onfocus = value + "";
        },
        get onformdata() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onformdata, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onformdata', arguments, result);
            return result;
        },
        set onformdata(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onformdata', arguments);
            lwVm.memory.private_data.get(this).onformdata = value + "";
        },
        get ongotpointercapture() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ongotpointercapture, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'ongotpointercapture', arguments, result);
            return result;
        },
        set ongotpointercapture(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'ongotpointercapture', arguments);
            lwVm.memory.private_data.get(this).ongotpointercapture = value + "";
        },
        get oninput() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oninput, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'oninput', arguments, result);
            return result;
        },
        set oninput(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'oninput', arguments);
            lwVm.memory.private_data.get(this).oninput = value + "";
        },
        get oninvalid() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oninvalid, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'oninvalid', arguments, result);
            return result;
        },
        set oninvalid(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'oninvalid', arguments);
            lwVm.memory.private_data.get(this).oninvalid = value + "";
        },
        get onkeydown() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onkeydown, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onkeydown', arguments, result);
            return result;
        },
        set onkeydown(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onkeydown', arguments);
            lwVm.memory.private_data.get(this).onkeydown = value + "";
        },
        get onkeypress() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onkeypress, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onkeypress', arguments, result);
            return result;
        },
        set onkeypress(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onkeypress', arguments);
            lwVm.memory.private_data.get(this).onkeypress = value + "";
        },
        get onkeyup() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onkeyup, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onkeyup', arguments, result);
            return result;
        },
        set onkeyup(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onkeyup', arguments);
            lwVm.memory.private_data.get(this).onkeyup = value + "";
        },
        get onload() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onload, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onload', arguments, result);
            return result;
        },
        set onload(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onload', arguments);
            lwVm.memory.private_data.get(this).onload = value + "";
        },
        get onloadeddata() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onloadeddata, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onloadeddata', arguments, result);
            return result;
        },
        set onloadeddata(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onloadeddata', arguments);
            lwVm.memory.private_data.get(this).onloadeddata = value + "";
        },
        get onloadedmetadata() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onloadedmetadata, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onloadedmetadata', arguments, result);
            return result;
        },
        set onloadedmetadata(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onloadedmetadata', arguments);
            lwVm.memory.private_data.get(this).onloadedmetadata = value + "";
        },
        get onloadstart() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onloadstart, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onloadstart', arguments, result);
            return result;
        },
        set onloadstart(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onloadstart', arguments);
            lwVm.memory.private_data.get(this).onloadstart = value + "";
        },
        get onlostpointercapture() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onlostpointercapture, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onlostpointercapture', arguments, result);
            return result;
        },
        set onlostpointercapture(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onlostpointercapture', arguments);
            lwVm.memory.private_data.get(this).onlostpointercapture = value + "";
        },
        get onmousedown() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onmousedown, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onmousedown', arguments, result);
            return result;
        },
        set onmousedown(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onmousedown', arguments);
            lwVm.memory.private_data.get(this).onmousedown = value + "";
        },
        get onmousemove() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onmousemove, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onmousemove', arguments, result);
            return result;
        },
        set onmousemove(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onmousemove', arguments);
            lwVm.memory.private_data.get(this).onmousemove = value + "";
        },
        get onmouseout() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onmouseout, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onmouseout', arguments, result);
            return result;
        },
        set onmouseout(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onmouseout', arguments);
            lwVm.memory.private_data.get(this).onmouseout = value + "";
        },
        get onmouseover() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onmouseover, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onmouseover', arguments, result);
            return result;
        },
        set onmouseover(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onmouseover', arguments);
            lwVm.memory.private_data.get(this).onmouseover = value + "";
        },
        get onmouseup() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onmouseup, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onmouseup', arguments, result);
            return result;
        },
        set onmouseup(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onmouseup', arguments);
            lwVm.memory.private_data.get(this).onmouseup = value + "";
        },
        get onmousewheel() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onmousewheel, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onmousewheel', arguments, result);
            return result;
        },
        set onmousewheel(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onmousewheel', arguments);
            lwVm.memory.private_data.get(this).onmousewheel = value + "";
        },
        get onpaste() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpaste, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onpaste', arguments, result);
            return result;
        },
        set onpaste(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onpaste', arguments);
            lwVm.memory.private_data.get(this).onpaste = value + "";
        },
        get onpause() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpause, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onpause', arguments, result);
            return result;
        },
        set onpause(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onpause', arguments);
            lwVm.memory.private_data.get(this).onpause = value + "";
        },
        get onplay() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onplay, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onplay', arguments, result);
            return result;
        },
        set onplay(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onplay', arguments);
            lwVm.memory.private_data.get(this).onplay = value + "";
        },
        get onplaying() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onplaying, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onplaying', arguments, result);
            return result;
        },
        set onplaying(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onplaying', arguments);
            lwVm.memory.private_data.get(this).onplaying = value + "";
        },
        get onpointercancel() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpointercancel, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onpointercancel', arguments, result);
            return result;
        },
        set onpointercancel(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onpointercancel', arguments);
            lwVm.memory.private_data.get(this).onpointercancel = value + "";
        },
        get onpointerdown() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpointerdown, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onpointerdown', arguments, result);
            return result;
        },
        set onpointerdown(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onpointerdown', arguments);
            lwVm.memory.private_data.get(this).onpointerdown = value + "";
        },
        get onpointerenter() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpointerenter, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onpointerenter', arguments, result);
            return result;
        },
        set onpointerenter(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onpointerenter', arguments);
            lwVm.memory.private_data.get(this).onpointerenter = value + "";
        },
        get onpointerleave() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpointerleave, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onpointerleave', arguments, result);
            return result;
        },
        set onpointerleave(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onpointerleave', arguments);
            lwVm.memory.private_data.get(this).onpointerleave = value + "";
        },
        get onpointermove() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpointermove, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onpointermove', arguments, result);
            return result;
        },
        set onpointermove(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onpointermove', arguments);
            lwVm.memory.private_data.get(this).onpointermove = value + "";
        },
        get onpointerout() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpointerout, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onpointerout', arguments, result);
            return result;
        },
        set onpointerout(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onpointerout', arguments);
            lwVm.memory.private_data.get(this).onpointerout = value + "";
        },
        get onpointerover() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpointerover, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onpointerover', arguments, result);
            return result;
        },
        set onpointerover(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onpointerover', arguments);
            lwVm.memory.private_data.get(this).onpointerover = value + "";
        },
        get onpointerrawupdate() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpointerrawupdate, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onpointerrawupdate', arguments, result);
            return result;
        },
        set onpointerrawupdate(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onpointerrawupdate', arguments);
            lwVm.memory.private_data.get(this).onpointerrawupdate = value + "";
        },
        get onpointerup() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpointerup, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onpointerup', arguments, result);
            return result;
        },
        set onpointerup(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onpointerup', arguments);
            lwVm.memory.private_data.get(this).onpointerup = value + "";
        },
        get onprogress() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onprogress, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onprogress', arguments, result);
            return result;
        },
        set onprogress(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onprogress', arguments);
            lwVm.memory.private_data.get(this).onprogress = value + "";
        },
        get onratechange() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onratechange, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onratechange', arguments, result);
            return result;
        },
        set onratechange(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onratechange', arguments);
            lwVm.memory.private_data.get(this).onratechange = value + "";
        },
        get onreset() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onreset, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onreset', arguments, result);
            return result;
        },
        set onreset(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onreset', arguments);
            lwVm.memory.private_data.get(this).onreset = value + "";
        },
        get onresize() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onresize, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onresize', arguments, result);
            return result;
        },
        set onresize(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onresize', arguments);
            lwVm.memory.private_data.get(this).onresize = value + "";
        },
        get onscroll() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onscroll, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onscroll', arguments, result);
            return result;
        },
        set onscroll(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onscroll', arguments);
            lwVm.memory.private_data.get(this).onscroll = value + "";
        },
        get onsecuritypolicyviolation() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onsecuritypolicyviolation, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onsecuritypolicyviolation', arguments, result);
            return result;
        },
        set onsecuritypolicyviolation(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onsecuritypolicyviolation', arguments);
            lwVm.memory.private_data.get(this).onsecuritypolicyviolation = value + "";
        },
        get onseeked() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onseeked, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onseeked', arguments, result);
            return result;
        },
        set onseeked(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onseeked', arguments);
            lwVm.memory.private_data.get(this).onseeked = value + "";
        },
        get onseeking() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onseeking, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onseeking', arguments, result);
            return result;
        },
        set onseeking(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onseeking', arguments);
            lwVm.memory.private_data.get(this).onseeking = value + "";
        },
        get onselect() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onselect, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onselect', arguments, result);
            return result;
        },
        set onselect(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onselect', arguments);
            lwVm.memory.private_data.get(this).onselect = value + "";
        },
        get onselectionchange() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onselectionchange, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onselectionchange', arguments, result);
            return result;
        },
        set onselectionchange(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onselectionchange', arguments);
            lwVm.memory.private_data.get(this).onselectionchange = value + "";
        },
        get onselectstart() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onselectstart, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onselectstart', arguments, result);
            return result;
        },
        set onselectstart(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onselectstart', arguments);
            lwVm.memory.private_data.get(this).onselectstart = value + "";
        },
        get onslotchange() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onslotchange, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onslotchange', arguments, result);
            return result;
        },
        set onslotchange(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onslotchange', arguments);
            lwVm.memory.private_data.get(this).onslotchange = value + "";
        },
        get onstalled() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onstalled, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onstalled', arguments, result);
            return result;
        },
        set onstalled(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onstalled', arguments);
            lwVm.memory.private_data.get(this).onstalled = value + "";
        },
        get onsubmit() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onsubmit, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onsubmit', arguments, result);
            return result;
        },
        set onsubmit(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onsubmit', arguments);
            lwVm.memory.private_data.get(this).onsubmit = value + "";
        },
        get onsuspend() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onsuspend, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onsuspend', arguments, result);
            return result;
        },
        set onsuspend(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onsuspend', arguments);
            lwVm.memory.private_data.get(this).onsuspend = value + "";
        },
        get ontimeupdate() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ontimeupdate, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'ontimeupdate', arguments, result);
            return result;
        },
        set ontimeupdate(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'ontimeupdate', arguments);
            lwVm.memory.private_data.get(this).ontimeupdate = value + "";
        },
        get ontoggle() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ontoggle, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'ontoggle', arguments, result);
            return result;
        },
        set ontoggle(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'ontoggle', arguments);
            lwVm.memory.private_data.get(this).ontoggle = value + "";
        },
        get ontransitioncancel() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ontransitioncancel, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'ontransitioncancel', arguments, result);
            return result;
        },
        set ontransitioncancel(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'ontransitioncancel', arguments);
            lwVm.memory.private_data.get(this).ontransitioncancel = value + "";
        },
        get ontransitionend() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ontransitionend, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'ontransitionend', arguments, result);
            return result;
        },
        set ontransitionend(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'ontransitionend', arguments);
            lwVm.memory.private_data.get(this).ontransitionend = value + "";
        },
        get ontransitionrun() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ontransitionrun, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'ontransitionrun', arguments, result);
            return result;
        },
        set ontransitionrun(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'ontransitionrun', arguments);
            lwVm.memory.private_data.get(this).ontransitionrun = value + "";
        },
        get ontransitionstart() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ontransitionstart, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'ontransitionstart', arguments, result);
            return result;
        },
        set ontransitionstart(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'ontransitionstart', arguments);
            lwVm.memory.private_data.get(this).ontransitionstart = value + "";
        },
        get onvolumechange() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onvolumechange, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onvolumechange', arguments, result);
            return result;
        },
        set onvolumechange(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onvolumechange', arguments);
            lwVm.memory.private_data.get(this).onvolumechange = value + "";
        },
        get onwaiting() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onwaiting, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onwaiting', arguments, result);
            return result;
        },
        set onwaiting(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onwaiting', arguments);
            lwVm.memory.private_data.get(this).onwaiting = value + "";
        },
        get onwebkitanimationend() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onwebkitanimationend, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onwebkitanimationend', arguments, result);
            return result;
        },
        set onwebkitanimationend(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onwebkitanimationend', arguments);
            lwVm.memory.private_data.get(this).onwebkitanimationend = value + "";
        },
        get onwebkitanimationiteration() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onwebkitanimationiteration, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onwebkitanimationiteration', arguments, result);
            return result;
        },
        set onwebkitanimationiteration(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onwebkitanimationiteration', arguments);
            lwVm.memory.private_data.get(this).onwebkitanimationiteration = value + "";
        },
        get onwebkitanimationstart() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onwebkitanimationstart, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onwebkitanimationstart', arguments, result);
            return result;
        },
        set onwebkitanimationstart(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onwebkitanimationstart', arguments);
            lwVm.memory.private_data.get(this).onwebkitanimationstart = value + "";
        },
        get onwebkittransitionend() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onwebkittransitionend, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onwebkittransitionend', arguments, result);
            return result;
        },
        set onwebkittransitionend(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onwebkittransitionend', arguments);
            lwVm.memory.private_data.get(this).onwebkittransitionend = value + "";
        },
        get onwheel() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onwheel, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'onwheel', arguments, result);
            return result;
        },
        set onwheel(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'onwheel', arguments);
            lwVm.memory.private_data.get(this).onwheel = value + "";
        },
        get ownerSVGElement() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ownerSVGElement, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'ownerSVGElement', arguments, result);
            return result;
        },
        get style() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).style, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'style', arguments, result);
            return result;
        },
        set style(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'style', arguments);
            lwVm.memory.private_data.get(this).style = value + "";
        },
        get tabIndex() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).tabIndex, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGElement', 'tabIndex', arguments, result);
            return result;
        },
        set tabIndex(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'SVGElement', 'tabIndex', arguments);
            lwVm.memory.private_data.get(this).tabIndex = value + "";
        },
        get viewportElement() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).viewportElement, "");
        }
    }

    lwVm.rename(SVGElement.prototype, "SVGElement");
    lwVm.safeDescriptor_addConstructor(SVGElement);
    lwVm.safe_Objattribute(SVGElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(SVGElement.prototype, Element.prototype);
    Object.setPrototypeOf(SVGElement, Element);

})();

