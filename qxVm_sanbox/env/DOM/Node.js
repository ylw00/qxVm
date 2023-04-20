Node = function Node() {
    throw new TypeError("Illegal constructor");
};
qxVm.safefunction(Node);

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
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };

        },
        get baseURI() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).baseURI, location.href);
        },
        get childNodes() {
            // debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).childNodes, "");
        },
        cloneNode() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        compareDocumentPosition() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        contains() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get firstChild() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).firstChild, "");
        },
        getRootNode() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            console.log(this)
        },
        hasChildNodes() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        insertBefore() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get isConnected() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).isConnected, "");
        },
        isDefaultNamespace() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        isEqualNode() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        isSameNode() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get lastChild() {   // 返回一个html
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).lastChild, "");
        },
        lookupNamespaceURI() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        lookupPrefix() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get nextSibling() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).nextSibling, null);
        },
        get nodeName() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let node_name = qxVm.htmls_toStringTag(this).toUpperCase();
            return node_name === 'DOCUMENT' ? '#document' : node_name;
        },
        get nodeType() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 9
        },
        get nodeValue() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).nodeValue, null);
        },
        set nodeValue(value) {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).nodeValue = value + "";
        },
        normalize() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get ownerDocument() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return null;
        },
        get parentElement() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return null;
        },
        get parentNode() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return this;
        },
        get previousSibling() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return null;
        },
        removeChild() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        replaceChild() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get textContent() {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).textContent, null);
        },
        set textContent(value) {
            debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).textContent = value + "";
        },
    };
    qxVm.rename(Node.prototype, "Node");
    qxVm.safeDescriptor_addConstructor(Node);
    qxVm.safe_Objattribute(Node, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    qxVm.add_capitalLetter_attribute(Node, $attributes);


    Object.setPrototypeOf(Node.prototype, EventTarget.prototype);
    Object.setPrototypeOf(Node, EventTarget);
})();


