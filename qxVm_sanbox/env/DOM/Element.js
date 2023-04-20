Element = function Element() {
    throw new TypeError("Illegal constructor");
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(Element);

; (function () {
    const $safe_get_attribute = [
        'ariaAtomic', 'ariaAutoComplete', 'ariaBusy', 'ariaChecked', 'ariaColCount', 'ariaColIndex', 'ariaColSpan',
        'ariaCurrent', 'ariaDescription', 'ariaDisabled', 'ariaExpanded', 'ariaHasPopup', 'ariaHidden', 'ariaKeyShortcuts',
        'ariaLabel', 'ariaLevel', 'ariaLive', 'ariaModal', 'ariaMultiLine', 'ariaMultiSelectable', 'ariaOrientation',
        'ariaPlaceholder', 'ariaPosInSet', 'ariaPressed', 'ariaReadOnly', 'ariaRelevant', 'ariaRequired',
        'ariaRoleDescription', 'ariaRowCount', 'ariaRowIndex', 'ariaRowSpan', 'ariaSelected', 'ariaSetSize', 'ariaSort',
        'ariaValueMax', 'ariaValueMin', 'ariaValueNow', 'ariaValueText', 'assignedSlot', 'attributeStyleMap',
        'attributes', 'childElementCount', 'children', 'classList', 'className', 'clientHeight', 'clientLeft', 'clientTop',
        'clientWidth', 'elementTiming', 'firstElementChild', 'id', 'innerHTML', 'lastElementChild', 'localName',
        'namespaceURI', 'nextElementSibling', 'onbeforecopy', 'onbeforecut', 'onbeforepaste', 'onfullscreenchange',
        'onfullscreenerror', 'onsearch', 'onwebkitfullscreenchange', 'onwebkitfullscreenerror', 'outerHTML', 'part',
        'prefix', 'previousElementSibling', 'scrollHeight', 'scrollLeft', 'scrollTop', 'scrollWidth', 'shadowRoot',
        'slot', 'tagName'
    ];
    const $safe_set_attribute = [
        'ariaAtomic', 'ariaAutoComplete', 'ariaBusy', 'ariaChecked', 'ariaColCount', 'ariaColIndex', 'ariaColSpan',
        'ariaCurrent', 'ariaDescription', 'ariaDisabled', 'ariaExpanded', 'ariaHasPopup', 'ariaHidden', 'ariaKeyShortcuts',
        'ariaLabel', 'ariaLevel', 'ariaLive', 'ariaModal', 'ariaMultiLine', 'ariaMultiSelectable', 'ariaOrientation',
        'ariaPlaceholder', 'ariaPosInSet', 'ariaPressed', 'ariaReadOnly', 'ariaRelevant', 'ariaRequired',
        'ariaRoleDescription', 'ariaRowCount', 'ariaRowIndex', 'ariaRowSpan', 'ariaSelected', 'ariaSetSize', 'ariaSort',
        'ariaValueMax', 'ariaValueMin', 'ariaValueNow', 'ariaValueText', 'classList', 'className', 'elementTiming', 'id',
        'innerHTML', 'onbeforecopy', 'onbeforecut', 'onbeforepaste', 'onfullscreenchange', 'onfullscreenerror', 'onsearch',
        'onwebkitfullscreenchange', 'onwebkitfullscreenerror', 'outerHTML', 'part', 'scrollLeft', 'scrollTop', 'slot'
    ];
    const $safe_func_attribute = [
        'after', 'animate', 'append', 'attachShadow', 'before', 'closest', 'computedStyleMap', 'getAnimations',
        'getAttribute', 'getAttributeNS', 'getAttributeNames', 'getAttributeNode', 'getAttributeNodeNS',
        'getBoundingClientRect', 'getClientRects', 'getElementsByClassName', 'getElementsByTagName', 'getElementsByTagNameNS',
        'getInnerHTML', 'hasAttribute', 'hasAttributeNS', 'hasAttributes', 'hasPointerCapture', 'insertAdjacentElement',
        'insertAdjacentHTML', 'insertAdjacentText', 'matches', 'prepend', 'querySelector', 'querySelectorAll',
        'releasePointerCapture', 'remove', 'removeAttribute', 'removeAttributeNS', 'removeAttributeNode', 'replaceChildren',
        'replaceWith', 'requestFullscreen', 'requestPointerLock', 'scroll', 'scrollBy', 'scrollIntoView', 'scrollIntoViewIfNeeded',
        'scrollTo', 'setAttribute', 'setAttributeNS', 'setAttributeNode', 'setAttributeNodeNS', 'setPointerCapture',
        'toggleAttribute', 'webkitMatchesSelector', 'webkitRequestFullScreen', 'webkitRequestFullscreen'
    ];


    Element.prototype = {
        after() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        animate() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        append() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get ariaAtomic() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaAtomic(value) {
            debugger;
        },
        get ariaAutoComplete() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaAutoComplete(value) {
            debugger;
        },
        get ariaBusy() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaBusy(value) {
            debugger;
        },
        get ariaChecked() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaChecked(value) {
            debugger;
        },
        get ariaColCount() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaColCount(value) {
            debugger;
        },
        get ariaColIndex() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaColIndex(value) {
            debugger;
        },
        get ariaColSpan() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaColSpan(value) {
            debugger;
        },
        get ariaCurrent() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaCurrent(value) {
            debugger;
        },
        get ariaDescription() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaDescription(value) {
            debugger;
        },
        get ariaDisabled() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaDisabled(value) {
            debugger;
        },
        get ariaExpanded() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaExpanded(value) {
            debugger;
        },
        get ariaHasPopup() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaHasPopup(value) {
            debugger;
        },
        get ariaHidden() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaHidden(value) {
            debugger;
        },
        get ariaKeyShortcuts() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaKeyShortcuts(value) {
            debugger;
        },
        get ariaLabel() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaLabel(value) {
            debugger;
        },
        get ariaLevel() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaLevel(value) {
            debugger;
        },
        get ariaLive() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaLive(value) {
            debugger;
        },
        get ariaModal() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaModal(value) {
            debugger;
        },
        get ariaMultiLine() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaMultiLine(value) {
            debugger;
        },
        get ariaMultiSelectable() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaMultiSelectable(value) {
            debugger;
        },
        get ariaOrientation() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaOrientation(value) {
            debugger;
        },
        get ariaPlaceholder() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaPlaceholder(value) {
            debugger;
        },
        get ariaPosInSet() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaPosInSet(value) {
            debugger;
        },
        get ariaPressed() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaPressed(value) {
            debugger;
        },
        get ariaReadOnly() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaReadOnly(value) {
            debugger;
        },
        get ariaRelevant() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaRelevant(value) {
            debugger;
        },
        get ariaRequired() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaRequired(value) {
            debugger;
        },
        get ariaRoleDescription() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaRoleDescription(value) {
            debugger;
        },
        get ariaRowCount() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaRowCount(value) {
            debugger;
        },
        get ariaRowIndex() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaRowIndex(value) {
            debugger;
        },
        get ariaRowSpan() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaRowSpan(value) {
            debugger;
        },
        get ariaSelected() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaSelected(value) {
            debugger;
        },
        get ariaSetSize() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaSetSize(value) {
            debugger;
        },
        get ariaSort() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaSort(value) {
            debugger;
        },
        get ariaValueMax() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaValueMax(value) {
            debugger;
        },
        get ariaValueMin() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaValueMin(value) {
            debugger;
        },
        get ariaValueNow() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaValueNow(value) {
            debugger;
        },
        get ariaValueText() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set ariaValueText(value) {
            debugger;
        },
        get assignedSlot() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        attachShadow() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get attributeStyleMap() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get attributes() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        before() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get childElementCount() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get children() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get classList() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set classList(value) {
            debugger;
        },
        get className() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set className(value) {
            debugger;
        },
        get clientHeight() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 1290
        },
        get clientLeft() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get clientTop() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get clientWidth() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 2560
        },
        closest() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        computedStyleMap() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get elementTiming() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set elementTiming(value) {
            debugger;
        },
        get firstElementChild() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getAnimations() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getAttribute() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getAttributeNS() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getAttributeNames() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getAttributeNode() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getAttributeNodeNS() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getBoundingClientRect() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getClientRects() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getElementsByClassName() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getElementsByTagName() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getElementsByTagNameNS() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getInnerHTML() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        hasAttribute() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        hasAttributeNS() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        hasAttributes() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        hasPointerCapture() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get id() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set id(value) {
            debugger;
        },
        get innerHTML() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).innerHTML, "");
        },
        set innerHTML(value) {
            debugger;
            qxVm.memory.private_data.get(this).innerHTML = value + "";
        },
        insertAdjacentElement() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        insertAdjacentHTML() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        insertAdjacentText() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get lastElementChild() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get localName() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.htmls_toStringTag(this).toLowerCase()
        },
        matches() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get namespaceURI() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get nextElementSibling() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get onbeforecopy() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set onbeforecopy(value) {
            debugger;
        },
        get onbeforecut() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set onbeforecut(value) {
            debugger;
        },
        get onbeforepaste() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set onbeforepaste(value) {
            debugger;
        },
        get onfullscreenchange() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set onfullscreenchange(value) {
            debugger;
        },
        get onfullscreenerror() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set onfullscreenerror(value) {
            debugger;
        },
        get onsearch() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set onsearch(value) {
            debugger;
        },
        get onwebkitfullscreenchange() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set onwebkitfullscreenchange(value) {
            debugger;
        },
        get onwebkitfullscreenerror() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set onwebkitfullscreenerror(value) {
            debugger;
        },
        get outerHTML() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set outerHTML(value) {
            debugger;
        },
        get part() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set part(value) {
            debugger;
        },
        get prefix() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        prepend() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get previousElementSibling() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        querySelector() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        querySelectorAll() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        releasePointerCapture() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        remove() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        removeAttribute() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        removeAttributeNS() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        removeAttributeNode() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        replaceChildren() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        replaceWith() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        requestFullscreen() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        requestPointerLock() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        scroll() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        scrollBy() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get scrollHeight() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        scrollIntoView() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },

        scrollIntoViewIfNeeded() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get scrollLeft() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set scrollLeft(value) {
            debugger;
        },
        scrollTo() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get scrollTop() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set scrollTop(value) {
            debugger;
        },
        get scrollWidth() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        setAttribute() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        setAttributeNS() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        setAttributeNode() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        setAttributeNodeNS() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        setPointerCapture() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get shadowRoot() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get slot() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set slot(value) {
            debugger;
        },
        get tagName() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        toggleAttribute() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        webkitMatchesSelector() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        webkitRequestFullScreen() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        webkitRequestFullscreen() {
            debugger;
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        }
    };
    qxVm.rename(Element.prototype, "Element");
    qxVm.safeDescriptor_addConstructor(Element);
    qxVm.safe_Objattribute(Element, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.defineProperties(Element.prototype, {
        [Symbol.unscopables]: {
            value: {
                after: true,
                append: true,
                before: true,
                prepend: true,
                remove: true,
                replaceChildren: true,
                replaceWith: true,
                slot: true,
            },
            configurable: true, enumerable: false, writable: false
        }
    });

    Object.setPrototypeOf(Element.prototype, Node.prototype);
    Object.setPrototypeOf(Element, Node);

})();
// debugger;

