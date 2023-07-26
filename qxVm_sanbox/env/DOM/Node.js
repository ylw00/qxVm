Node = function Node() {
    throw new TypeError("Illegal constructor");
};
lwVm.safefunction(Node);

; (function () {
    const $attributes = {
        ATTRIBUTE_NODE: 2,
        CDATA_SECTION_NODE: 4,
        COMMENT_NODE: 8,
        DOCUMENT_FRAGMENT_NODE: 11,
        DOCUMENT_NODE: 9,
        DOCUMENT_POSITION_CONTAINED_BY: 16,
        DOCUMENT_POSITION_CONTAINS: 8,
        DOCUMENT_POSITION_DISCONNECTED: 1,
        DOCUMENT_POSITION_FOLLOWING: 4,
        DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32,
        DOCUMENT_POSITION_PRECEDING: 2,
        DOCUMENT_TYPE_NODE: 10,
        ELEMENT_NODE: 1,
        ENTITY_NODE: 6,
        ENTITY_REFERENCE_NODE: 5,
        NOTATION_NODE: 12,
        PROCESSING_INSTRUCTION_NODE: 7,
        TEXT_NODE: 3
    };

    const $safe_get_attribute = [
        'baseURI', 'childNodes', 'firstChild', 'isConnected', 'lastChild', 'nextSibling', 'nodeName', 'nodeType', 'nodeValue', 'ownerDocument', 'parentElement', 'parentNode', 'previousSibling', 'textContent'
    ];
    const $safe_set_attribute = ['nodeValue', 'textContent'];
    const $safe_func_attribute = [
        'appendChild', 'cloneNode', 'compareDocumentPosition', 'contains', 'getRootNode', 'hasChildNodes', 'insertBefore', 'isDefaultNamespace', 'isEqualNode', 'isSameNode', 'lookupNamespaceURI',
        'lookupPrefix', 'normalize', 'removeChild', 'replaceChild'
    ];

    Node.prototype = {
        appendChild(aChild) {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };

        },
        get baseURI() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).baseURI, location.href);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Node', 'baseURI', arguments, result);
            return result;
        },
        get childNodes() {
            // debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).childNodes, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Node', 'childNodes', arguments, result);
            return result;
        },
        cloneNode() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Node', 'cloneNode', arguments, result);
            return result;
        },
        compareDocumentPosition() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Node', 'compareDocumentPosition', arguments, result);
            return result;
        },
        contains() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Node', 'contains', arguments, result);
            return result;
        },
        get firstChild() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).firstChild, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Node', 'firstChild', arguments, result);
            return result;
        },
        getRootNode() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            console.log(this)
        },
        hasChildNodes() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Node', 'hasChildNodes', arguments, result);
            return result;
        },
        insertBefore() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Node', 'insertBefore', arguments, result);
            return result;
        },
        get isConnected() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).isConnected, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Node', 'isConnected', arguments, result);
            return result;
        },
        isDefaultNamespace() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Node', 'isDefaultNamespace', arguments, result);
            return result;
        },
        isEqualNode() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Node', 'isEqualNode', arguments, result);
            return result;
        },
        isSameNode() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Node', 'isSameNode', arguments, result);
            return result;
        },
        get lastChild() {   // 返回一个html
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).lastChild, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Node', 'isSameNode', arguments, result);
            return result;
        },
        lookupNamespaceURI() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Node', 'lookupNamespaceURI', arguments, result);
            return result;
        },
        lookupPrefix() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Node', 'lookupPrefix', arguments, result);
            return result;
        },
        get nextSibling() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).nextSibling, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Node', 'nextSibling', arguments, result);
            return result;
        },
        get nodeName() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let node_name = lwVm.htmls_toStringTag(this).toUpperCase();
            let result = node_name === 'DOCUMENT' ? '#document' : node_name;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Node', 'nodeName', arguments, result);
            return result;
        },
        get nodeType() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 9;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Node', 'nodeType', arguments, result);
            return result;
        },
        get nodeValue() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).nodeValue, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Node', 'nodeValue', arguments, result);
            return result;
        },
        set nodeValue(value) {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Node', 'nodeValue', arguments);
            lwVm.memory.private_data.get(this).nodeValue = value + "";
        },
        normalize() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Node', 'normalize', arguments, result);
            return result;
        },
        get ownerDocument() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = null;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Node', 'ownerDocument', arguments, result);
            return result;
        },
        get parentElement() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = null;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Node', 'parentElement', arguments, result);
            return result;
        },
        get parentNode() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = this;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Node', 'parentNode', arguments, result);
            return result;
        },
        get previousSibling() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = null;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Node', 'previousSibling', arguments, result);
            return result;
        },
        removeChild() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Node', 'removeChild', arguments, result);
            return result;
        },
        replaceChild() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Node', 'replaceChild', arguments, result);
            return result;
        },
        get textContent() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).textContent, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Node', 'textContent', arguments, result);
            return result;
        },
        set textContent(value) {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Node', 'textContent', arguments);
            lwVm.memory.private_data.get(this).textContent = value + "";
        },
    };
    lwVm.rename(Node.prototype, "Node");
    lwVm.safeDescriptor_addConstructor(Node);
    lwVm.safe_Objattribute(Node, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    lwVm.add_capitalLetter_attribute(Node, $attributes);


    Object.setPrototypeOf(Node.prototype, EventTarget.prototype);
    Object.setPrototypeOf(Node, EventTarget);
})();


