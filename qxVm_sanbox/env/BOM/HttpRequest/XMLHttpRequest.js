XMLHttpRequest = function XMLHttpRequest() {//构造函数
    if(new.target !== XMLHttpRequest){
		throw new TypeError(`Failed to construct 'XMLHttpRequest': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
	}

    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(XMLHttpRequest);
; (function () {
    const $attributes = {
        DONE: 4,
        HEADERS_RECEIVED: 2,
        LOADING: 3,
        OPENED: 1,
        UNSENT: 0
    }
    const $safe_get_attribute = [
        'onreadystatechange', 'readyState', 'response', 'responseText', 'responseType', 'responseURL', 'responseXML', 'status', 'statusText', 'timeout', 
        'upload', 'withCredentials'
    ];
    const $safe_set_attribute = ['onreadystatechange', 'response', 'responseType', 'timeout', 'withCredentials'];
    const $safe_func_attribute = ['abort', 'getAllResponseHeaders', 'getResponseHeader', 'open', 'overrideMimeType', 'send', 'setRequestHeader'];
    
    XMLHttpRequest.prototype = {
        abort() {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getAllResponseHeaders() {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getResponseHeader() {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get onreadystatechange() {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onreadystatechange, null);
        },
        set onreadystatechange(value) {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onreadystatechange = value + "";
        },
        open() {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        overrideMimeType() {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get readyState() {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).readyState, 0);
        },
        get response() {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).response, "");
        },
        set response(value) {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).response = value + "";
        },
        get responseText() {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).responseText, "");
        },
        get responseType() {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).responseType, "");
        },
        set responseType(value) {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).responseType = value + "";
        },
        get responseURL() {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).responseURL, "");
        },
        get responseXML() {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).responseXML, "");
        },
        send(body) {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return body
        },
        setRequestHeader() {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get status() {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).status, 0);
        },
        get statusText() {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).statusText, "");
        },
        get timeout() {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).timeout, 0);
        },
        set timeout(value) {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).timeout = value + "";
        },
        get upload() {  //  XMLHttpRequestUpload
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).upload, "");
        },
        get withCredentials() {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).withCredentials, false);
        },
        set withCredentials(value) {
            debugger;
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).withCredentials = value;
        }
    }

    for (let key in $attributes) {
        if ($attributes.hasOwnProperty(key)) {
            const value = $attributes[key];
            Object.defineProperty(XMLHttpRequest, key, { value: value, configurable: false, enumerable: true, writable: false });
            Object.defineProperty(XMLHttpRequest.prototype, key, { value: value, configurable: false, enumerable: true, writable: false });
        }
    };

    qxVm.rename(XMLHttpRequest.prototype, "XMLHttpRequest");
    qxVm.safeDescriptor_addConstructor(XMLHttpRequest);
    qxVm.safe_Objattribute(XMLHttpRequest, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(XMLHttpRequest.prototype, XMLHttpRequestEventTarget.prototype);
    Object.setPrototypeOf(XMLHttpRequest, XMLHttpRequestEventTarget);

})();
