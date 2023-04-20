Request = function Request() {//构造函数
    if(new.target !== Request){
		throw new TypeError(`Failed to construct 'Request': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
	}

    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(Request);

; (function () {
    const $safe_get_attribute = [
        'bodyUsed', 'cache', 'credentials', 'destination', 'headers', 'integrity', 'isHistoryNavigation', 'keepalive', 'method',
        'mode', 'redirect', 'referrer', 'referrerPolicy', 'signal', 'url'
    ];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['arrayBuffer', 'blob', 'clone', 'formData', 'json', 'text'];

    Request.prototype = {
        arrayBuffer() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        blob() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get bodyUsed() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).bodyUsed, false);
        },
        get cache() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).cache, "default");
        },
        clone() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get credentials() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).credentials, "same-origin");
        },
        get destination() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).destination, "");
        },
        formData() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get headers() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).headers, new class Headers { });
        },
        get integrity() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).integrity, "");
        },
        get isHistoryNavigation() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).isHistoryNavigation, false);
        },
        json() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get keepalive() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).keepalive, false);
        },
        get method() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).method, "GET");
        },
        get mode() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).mode, "cors");
        },
        get redirect() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).redirect, "follow");
        },
        get referrer() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).referrer, "about:client");
        },
        get referrerPolicy() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).referrerPolicy, "");
        },
        get signal() { // 这个有问题
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).signal, new class AbortSignal { aborted = false; onabort = null });
        },
        text() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get url() {
            debugger;
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).url, location.href);
        }
    };

    qxVm.rename(Request.prototype, "Request");
    qxVm.safeDescriptor_addConstructor(Request);
    qxVm.safe_Objattribute(Request, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

