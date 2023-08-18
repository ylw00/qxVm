Element = function Element() {
    throw new TypeError("Illegal constructor");
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(Element);

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
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'after', arguments, result);
            return result;
        },
        animate() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'animate', arguments, result);
            return result;
        },
        append() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'append', arguments, result);
            return result;
        },
        get ariaAtomic() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaAtomic', arguments, result);
            return result;
        },
        set ariaAtomic(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaAtomic', arguments);
            lwVm.memory.private_data.get(this).ariaAtomic = value;
        },
        get ariaAutoComplete() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaAutoComplete', arguments, result);
            return result;
        },
        set ariaAutoComplete(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaAutoComplete', arguments);
            lwVm.memory.private_data.get(this).ariaAutoComplete = value;
        },
        get ariaBusy() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaBusy', arguments, result);
            return result;
        },
        set ariaBusy(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaBusy', arguments);
            lwVm.memory.private_data.get(this).ariaBusy = value;
        },
        get ariaChecked() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaChecked', arguments, result);
            return result;
        },
        set ariaChecked(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaChecked', arguments);
            lwVm.memory.private_data.get(this).ariaChecked = value;
        },
        get ariaColCount() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaColCount', arguments, result);
            return result;
        },
        set ariaColCount(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaColCount', arguments);
            lwVm.memory.private_data.get(this).ariaColCount = value;
        },
        get ariaColIndex() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaColIndex', arguments, result);
            return result;
        },
        set ariaColIndex(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaColIndex', arguments);
            lwVm.memory.private_data.get(this).ariaColIndex = value;
        },
        get ariaColSpan() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaColSpan', arguments, result);
            return result;
        },
        set ariaColSpan(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaColSpan', arguments);
            lwVm.memory.private_data.get(this).ariaColSpan = value;
        },
        get ariaCurrent() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaCurrent', arguments, result);
            return result;
        },
        set ariaCurrent(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaCurrent', arguments);
            lwVm.memory.private_data.get(this).ariaCurrent = value;
        },
        get ariaDescription() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaDescription', arguments, result);
            return result;
        },
        set ariaDescription(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaDescription', arguments);
            lwVm.memory.private_data.get(this).ariaDescription = value;
        },
        get ariaDisabled() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaDisabled', arguments, result);
            return result;
        },
        set ariaDisabled(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaDisabled', arguments);
            lwVm.memory.private_data.get(this).ariaDisabled = value;
        },
        get ariaExpanded() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaExpanded', arguments, result);
            return result;
        },
        set ariaExpanded(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaExpanded', arguments);
            lwVm.memory.private_data.get(this).ariaExpanded = value;
        },
        get ariaHasPopup() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaHasPopup', arguments, result);
            return result;
        },
        set ariaHasPopup(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaHasPopup', arguments);
            lwVm.memory.private_data.get(this).ariaHasPopup = value;
        },
        get ariaHidden() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaHidden', arguments, result);
            return result;
        },
        set ariaHidden(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaHidden', arguments);
            lwVm.memory.private_data.get(this).ariaHidden = value;
        },
        get ariaKeyShortcuts() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaKeyShortcuts', arguments, result);
            return result;
        },
        set ariaKeyShortcuts(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaKeyShortcuts', arguments);
            lwVm.memory.private_data.get(this).ariaKeyShortcuts = value;
        },
        get ariaLabel() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaLabel', arguments, result);
            return result;
        },
        set ariaLabel(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaLabel', arguments);
            lwVm.memory.private_data.get(this).ariaLabel = value;
        },
        get ariaLevel() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaLevel', arguments, result);
            return result;
        },
        set ariaLevel(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaLevel', arguments);
            lwVm.memory.private_data.get(this).ariaLevel = value;
        },
        get ariaLive() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaLive', arguments, result);
            return result;
        },
        set ariaLive(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaLive', arguments);
            lwVm.memory.private_data.get(this).ariaLive = value;
        },
        get ariaModal() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaModal', arguments, result);
            return result;
        },
        set ariaModal(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaModal', arguments);
            lwVm.memory.private_data.get(this).ariaModal = value;
        },
        get ariaMultiLine() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaMultiLine', arguments, result);
            return result;
        },
        set ariaMultiLine(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaMultiLine', arguments);
            lwVm.memory.private_data.get(this).ariaMultiLine = value;
        },
        get ariaMultiSelectable() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaMultiSelectable', arguments, result);
            return result;
        },
        set ariaMultiSelectable(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaMultiSelectable', arguments);
            lwVm.memory.private_data.get(this).ariaMultiSelectable = value;
        },
        get ariaOrientation() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaOrientation', arguments, result);
            return result;
        },
        set ariaOrientation(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaOrientation', arguments);
            lwVm.memory.private_data.get(this).ariaOrientation = value;
        },
        get ariaPlaceholder() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaPlaceholder', arguments, result);
            return result;
        },
        set ariaPlaceholder(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaPlaceholder', arguments);
            lwVm.memory.private_data.get(this).ariaPlaceholder = value;
        },
        get ariaPosInSet() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaPosInSet', arguments, result);
            return result;
        },
        set ariaPosInSet(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaPosInSet', arguments);
            lwVm.memory.private_data.get(this).ariaPosInSet = value;
        },
        get ariaPressed() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaPressed', arguments, result);
            return result;
        },
        set ariaPressed(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaPressed', arguments);
            lwVm.memory.private_data.get(this).ariaPressed = value;
        },
        get ariaReadOnly() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaReadOnly', arguments, result);
            return result;
        },
        set ariaReadOnly(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaReadOnly', arguments);
            lwVm.memory.private_data.get(this).ariaReadOnly = value;
        },
        get ariaRelevant() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaRelevant', arguments, result);
            return result;
        },
        set ariaRelevant(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaRelevant', arguments);
            lwVm.memory.private_data.get(this).ariaRelevant = value;
        },
        get ariaRequired() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaRequired', arguments, result);
            return result;
        },
        set ariaRequired(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaRequired', arguments);
            lwVm.memory.private_data.get(this).ariaRequired = value;
        },
        get ariaRoleDescription() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaRoleDescription', arguments, result);
            return result;
        },
        set ariaRoleDescription(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaRoleDescription', arguments);
            lwVm.memory.private_data.get(this).ariaRoleDescription = value;
        },
        get ariaRowCount() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaRowCount', arguments, result);
            return result;
        },
        set ariaRowCount(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaRowCount', arguments);
            lwVm.memory.private_data.get(this).ariaRowCount = value;
        },
        get ariaRowIndex() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaRowIndex', arguments, result);
            return result;
        },
        set ariaRowIndex(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaRowIndex', arguments);
            lwVm.memory.private_data.get(this).ariaRowIndex = value;
        },
        get ariaRowSpan() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaRowSpan', arguments, result);
            return result;
        },
        set ariaRowSpan(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaRowSpan', arguments);
            lwVm.memory.private_data.get(this).ariaRowSpan = value;
        },
        get ariaSelected() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaSelected', arguments, result);
            return result;
        },
        set ariaSelected(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaSelected', arguments);
            lwVm.memory.private_data.get(this).ariaSelected = value;
        },
        get ariaSetSize() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaSetSize', arguments, result);
            return result;
        },
        set ariaSetSize(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaSetSize', arguments);
            lwVm.memory.private_data.get(this).ariaSetSize = value;
        },
        get ariaSort() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaSort', arguments, result);
            return result;
        },
        set ariaSort(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaSort', arguments);
            lwVm.memory.private_data.get(this).ariaSort = value;
        },
        get ariaValueMax() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaValueMax', arguments, result);
            return result;
        },
        set ariaValueMax(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaValueMax', arguments);
            lwVm.memory.private_data.get(this).ariaValueMax = value;
        },
        get ariaValueMin() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaValueMin', arguments, result);
            return result;
        },
        set ariaValueMin(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaValueMin', arguments);
            lwVm.memory.private_data.get(this).ariaValueMin = value;
        },
        get ariaValueNow() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaValueNow', arguments, result);
            return result;
        },
        set ariaValueNow(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaValueNow', arguments);
            lwVm.memory.private_data.get(this).ariaValueNow = value;
        },
        get ariaValueText() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'ariaValueText', arguments, result);
            return result;
        },
        set ariaValueText(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'ariaValueText', arguments);
            lwVm.memory.private_data.get(this).ariaValueText = value;
        },
        get assignedSlot() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'assignedSlot', arguments, result);
            return result;
        },
        attachShadow() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'attachShadow', arguments, result);
            return result;
        },
        get attributeStyleMap() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'attributeStyleMap', arguments, result);
            return result;
        },
        get attributes() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'attributes', arguments, result);
            return result;
        },
        before() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'before', arguments, result);
            return result;
        },
        get childElementCount() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'childElementCount', arguments, result);
            return result;
        },
        get children() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'children', arguments, result);
            return result;
        },
        get classList() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'classList', arguments, result);
            return result;
        },
        set classList(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'classList', arguments);
            lwVm.memory.private_data.get(this).classList = value;
        },
        get className() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'className', arguments, result);
            return result;
        },
        set className(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'className', arguments);
            lwVm.memory.private_data.get(this).className = value;
        },
        get clientHeight() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 1290;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'clientHeight', arguments, result);
            return result;
        },
        get clientLeft() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'clientLeft', arguments, result);
            return result;
        },
        get clientTop() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'clientTop', arguments, result);
            return result;
        },
        get clientWidth() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 2560;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'clientWidth', arguments, result);
            return result;
        },
        closest() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'closest', arguments, result);
            return result;
        },
        computedStyleMap() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'computedStyleMap', arguments, result);
            return result;
        },
        get elementTiming() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'elementTiming', arguments, result);
            return result;
        },
        set elementTiming(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'elementTiming', arguments);
            lwVm.memory.private_data.get(this).elementTiming = value;
        },
        get firstElementChild() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'firstElementChild', arguments, result);
            return result;
        },
        getAnimations() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'getAnimations', arguments, result);
            return result;
        },
        getAttribute() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'getAttribute', arguments, result);
            return result;
        },
        getAttributeNS() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'getAttributeNS', arguments, result);
            return result;
        },
        getAttributeNames() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'getAttributeNames', arguments, result);
            return result;
        },
        getAttributeNode() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'getAttributeNode', arguments, result);
            return result;
        },
        getAttributeNodeNS() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'getAttributeNodeNS', arguments, result);
            return result;
        },
        getBoundingClientRect() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'getBoundingClientRect', arguments, result);
            return result;
        },
        getClientRects() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'getClientRects', arguments, result);
            return result;
        },
        getElementsByClassName() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'getElementsByClassName', arguments, result);
            return result;
        },
        getElementsByTagName() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'getElementsByTagName', arguments, result);
            return result;
        },
        getElementsByTagNameNS() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'getElementsByTagNameNS', arguments, result);
            return result;
        },
        getInnerHTML() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'getInnerHTML', arguments, result);
            return result;
        },
        hasAttribute() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'hasAttribute', arguments, result);
            return result;
        },
        hasAttributeNS() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'hasAttributeNS', arguments, result);
            return result;
        },
        hasAttributes() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'hasAttributes', arguments, result);
            return result;
        },
        hasPointerCapture() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'hasPointerCapture', arguments, result);
            return result;
        },
        get id() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'id', arguments, result);
            return result;
        },
        set id(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'id', arguments);
            lwVm.memory.private_data.get(this).id = value;
        },
        get innerHTML() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).innerHTML, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'innerHTML', arguments, result);
            return result;
        },
        set innerHTML(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'innerHTML', arguments);
            lwVm.memory.private_data.get(this).innerHTML = value + "";
        },
        insertAdjacentElement() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'insertAdjacentElement', arguments, result);
            return result;
        },
        insertAdjacentHTML() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'insertAdjacentHTML', arguments, result);
            return result;
        },
        insertAdjacentText() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'insertAdjacentText', arguments, result);
            return result;
        },
        get lastElementChild() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'lastElementChild', arguments, result);
            return result;
        },
        get localName() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.htmls_toStringTag(this).toLowerCase();
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'localName', arguments, result);
            return result;
        },
        matches() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'matches', arguments, result);
            return result;
        },
        get namespaceURI() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'namespaceURI', arguments, result);
            return result;
        },
        get nextElementSibling() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'nextElementSibling', arguments, result);
            return result;
        },
        get onbeforecopy() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'onbeforecopy', arguments, result);
            return result;
        },
        set onbeforecopy(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'onbeforecopy', arguments);
            lwVm.memory.private_data.get(this).onbeforecopy = value;
        },
        get onbeforecut() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'onbeforecut', arguments, result);
            return result;
        },
        set onbeforecut(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'onbeforecut', arguments);
            lwVm.memory.private_data.get(this).onbeforecut = value;
        },
        get onbeforepaste() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'onbeforepaste', arguments, result);
            return result;
        },
        set onbeforepaste(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'onbeforepaste', arguments);
            lwVm.memory.private_data.get(this).onbeforepaste = value;
        },
        get onfullscreenchange() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'onfullscreenchange', arguments, result);
            return result;
        },
        set onfullscreenchange(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'onfullscreenchange', arguments);
            lwVm.memory.private_data.get(this).onfullscreenchange = value;
        },
        get onfullscreenerror() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'onfullscreenerror', arguments, result);
            return result;
        },
        set onfullscreenerror(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'onfullscreenerror', arguments);
            lwVm.memory.private_data.get(this).onfullscreenerror = value;
        },
        get onsearch() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'onsearch', arguments, result);
            return result;
        },
        set onsearch(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'onsearch', arguments);
            lwVm.memory.private_data.get(this).onsearch = value;
        },
        get onwebkitfullscreenchange() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'onwebkitfullscreenchange', arguments, result);
            return result;
        },
        set onwebkitfullscreenchange(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'onwebkitfullscreenchange', arguments);
            lwVm.memory.private_data.get(this).onwebkitfullscreenchange = value;
        },
        get onwebkitfullscreenerror() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'onwebkitfullscreenerror', arguments, result);
            return result;
        },
        set onwebkitfullscreenerror(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'onwebkitfullscreenerror', arguments);
            lwVm.memory.private_data.get(this).onwebkitfullscreenerror = value;
        },
        get outerHTML() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'outerHTML', arguments, result);
            return result;
        },
        set outerHTML(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'outerHTML', arguments);
            lwVm.memory.private_data.get(this).outerHTML = value;
        },
        get part() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'part', arguments, result);
            return result;
        },
        set part(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'part', arguments);
            lwVm.memory.private_data.get(this).part = value;
        },
        get prefix() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'prefix', arguments, result);
            return result;
        },
        prepend() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'prepend', arguments, result);
            return result;
        },
        get previousElementSibling() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'previousElementSibling', arguments, result);
            return result;
        },
        querySelector() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'querySelector', arguments, result);
            return result;
        },
        querySelectorAll() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'querySelectorAll', arguments, result);
            return result;
        },
        releasePointerCapture() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'releasePointerCapture', arguments, result);
            return result;
        },
        remove() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'remove', arguments, result);
            return result;
        },
        removeAttribute() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'removeAttribute', arguments, result);
            return result;
        },
        removeAttributeNS() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'removeAttributeNS', arguments, result);
            return result;
        },
        removeAttributeNode() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'removeAttributeNode', arguments, result);
            return result;
        },
        replaceChildren() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'replaceChildren', arguments, result);
            return result;
        },
        replaceWith() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'replaceWith', arguments, result);
            return result;
        },
        requestFullscreen() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'requestFullscreen', arguments, result);
            return result;
        },
        requestPointerLock() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'requestPointerLock', arguments, result);
            return result;
        },
        scroll() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'scroll', arguments, result);
            return result;
        },
        scrollBy() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'scrollBy', arguments, result);
            return result;
        },
        get scrollHeight() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'scrollHeight', arguments, result);
            return result;
        },
        scrollIntoView() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'scrollIntoView', arguments, result);
            return result;
        },

        scrollIntoViewIfNeeded() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'scrollIntoViewIfNeeded', arguments, result);
            return result;
        },
        get scrollLeft() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'scrollLeft', arguments, result);
            return result;
        },
        set scrollLeft(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'scrollLeft', arguments);
            lwVm.memory.private_data.get(this).scrollLeft = value;
        },
        scrollTo() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'scrollTo', arguments, result);
            return result;
        },
        get scrollTop() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'scrollTop', arguments, result);
            return result;
        },
        set scrollTop(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'scrollTop', arguments);
            lwVm.memory.private_data.get(this).scrollTop = value;
        },
        get scrollWidth() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'scrollWidth', arguments, result);
            return result;
        },
        setAttribute() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'setAttribute', arguments, result);
            return result;
        },
        setAttributeNS() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'setAttributeNS', arguments, result);
            return result;
        },
        setAttributeNode() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'setAttributeNode', arguments, result);
            return result;
        },
        setAttributeNodeNS() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'setAttributeNodeNS', arguments, result);
            return result;
        },
        setPointerCapture() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'setPointerCapture', arguments, result);
            return result;
        },
        get shadowRoot() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'shadowRoot', arguments, result);
            return result;
        },
        get slot() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'slot', arguments, result);
            return result;
        },
        set slot(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Element', 'slot', arguments);
            lwVm.memory.private_data.get(this).slot = value;
        },
        get tagName() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Element', 'tagName', arguments, result);
            return result;
        },
        toggleAttribute() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'toggleAttribute', arguments, result);
            return result;
        },
        webkitMatchesSelector() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'webkitMatchesSelector', arguments, result);
            return result;
        },
        webkitRequestFullScreen() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'webkitRequestFullScreen', arguments, result);
            return result;
        },
        webkitRequestFullscreen() {
            if (!Element.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Element', 'webkitRequestFullscreen', arguments, result);
            return result;
        }
    };
    lwVm.rename(Element.prototype, "Element");
    lwVm.safeDescriptor_addConstructor(Element);
    lwVm.safe_Objattribute(Element, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

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

