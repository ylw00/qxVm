Document = function Document(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(Document);


; (function () {
    let $attribute_map = {
        body: {},
        referrer: "",
        cookie: "",
        hidden: true,
        webkitHidden: true,
        getElementById: function (id) {
            //用id匹配当前环境内存种已有的Element
            switch (id) {
                case "xMidasToken":
                    return (new class {
                        get value() {
                            return window.__xMidasToken
                        }
                    })
                case "xMidasVersion":
                    return (new class {
                        getAttribute(e) {
                            if (e == 'width') {
                                return '325';
                            }
                        }
                    })
                default:
                    const ele = qxVm.memory.runElementList.filter(t => t.id == id)[0];
                    if (!ele) debugger;
                    return ele;
            }
        }
    };

    // 初始化用户配置
    qxVm.updata_envs(qxVm.default_envs['document'], $attribute_map)


    const $safe_get_attribute = [
        'URL', 'activeElement', 'adoptedStyleSheets', 'alinkColor', 'all', 'anchors', 'applets', 'bgColor', 'body', 'characterSet',
        'charset', 'childElementCount', 'children', 'compatMode', 'contentType', 'cookie', 'currentScript', 'defaultView', 'designMode', 'dir', 'doctype',
        'documentElement', 'documentURI', 'domain', 'embeds', 'featurePolicy', 'fgColor', 'firstElementChild', 'fonts', 'forms', 'fragmentDirective', 'fullscreen',
        'fullscreenElement', 'fullscreenEnabled', 'head', 'hidden', 'images', 'implementation', 'inputEncoding', 'lastElementChild', 'lastModified', 'linkColor',
        'links', 'onabort', 'onanimationend', 'onanimationiteration', 'onanimationstart', 'onauxclick', 'onbeforecopy', 'onbeforecut', 'onbeforepaste',
        'onbeforexrselect', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncontextmenu', 'oncopy', 'oncuechange',
        'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied',
        'onended', 'onerror', 'onfocus', 'onformdata', 'onfreeze', 'onfullscreenchange', 'onfullscreenerror', 'ongotpointercapture', 'oninput', 'oninvalid',
        'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onlostpointercapture', 'onmousedown', 'onmousemove',
        'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpointercancel', 'onpointerdown',
        'onpointerenter', 'onpointerleave', 'onpointerlockchange', 'onpointerlockerror', 'onpointermove', 'onpointerout', 'onpointerover', 'onpointerrawupdate',
        'onpointerup', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onresume', 'onscroll', 'onsearch', 'onsecuritypolicyviolation', 'onseeked',
        'onseeking', 'onselect', 'onselectionchange', 'onselectstart', 'onslotchange', 'onstalled', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle',
        'ontransitioncancel', 'ontransitionend', 'ontransitionrun', 'ontransitionstart', 'onvisibilitychange', 'onvolumechange', 'onwaiting', 'onwebkitanimationend',
        'onwebkitanimationiteration', 'onwebkitanimationstart', 'onwebkitfullscreenchange', 'onwebkitfullscreenerror', 'onwebkittransitionend', 'onwheel',
        'pictureInPictureElement', 'pictureInPictureEnabled', 'plugins', 'pointerLockElement', 'readyState', 'referrer', 'rootElement', 'scripts',
        'scrollingElement', 'styleSheets', 'timeline', 'title', 'visibilityState', 'vlinkColor', 'wasDiscarded', 'webkitCurrentFullScreenElement',
        'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitHidden', 'webkitIsFullScreen', 'webkitVisibilityState', 'xmlEncoding', 'xmlStandalone',
        'xmlVersion'
    ];
    const $safe_set_attribute = [
        'adoptedStyleSheets', 'alinkColor', 'bgColor', 'body', 'cookie', 'designMode', 'dir', 'domain', 'fgColor', 'fullscreen', 'fullscreenElement',
        'fullscreenEnabled', 'linkColor', 'onabort', 'onanimationend', 'onanimationiteration', 'onanimationstart', 'onauxclick', 'onbeforecopy',
        'onbeforecut', 'onbeforepaste', 'onbeforexrselect', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose',
        'oncontextmenu', 'oncopy', 'oncuechange', 'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart',
        'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'onformdata', 'onfreeze', 'onfullscreenchange', 'onfullscreenerror',
        'ongotpointercapture', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart',
        'onlostpointercapture', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onpaste', 'onpause', 'onplay',
        'onplaying', 'onpointercancel', 'onpointerdown', 'onpointerenter', 'onpointerleave', 'onpointerlockchange', 'onpointerlockerror', 'onpointermove',
        'onpointerout', 'onpointerover', 'onpointerrawupdate', 'onpointerup', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onresume', 'onscroll',
        'onsearch', 'onsecuritypolicyviolation', 'onseeked', 'onseeking', 'onselect', 'onselectionchange', 'onselectstart', 'onslotchange', 'onstalled',
        'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'ontransitioncancel', 'ontransitionend', 'ontransitionrun', 'ontransitionstart',
        'onvisibilitychange', 'onvolumechange', 'onwaiting', 'onwebkitanimationend', 'onwebkitanimationiteration', 'onwebkitanimationstart',
        'onwebkitfullscreenchange', 'onwebkitfullscreenerror', 'onwebkittransitionend', 'onwheel', 'title', 'vlinkColor', 'xmlStandalone', 'xmlVersion'
    ];
    const $safe_func_attribute = [
        'adoptNode', 'append', 'captureEvents', 'caretRangeFromPoint', 'clear', 'close', 'createAttribute', 'createAttributeNS', 'createCDATASection',
        'createComment', 'createDocumentFragment', 'createElement', 'createElementNS', 'createEvent', 'createExpression', 'createNSResolver',
        'createNodeIterator', 'createProcessingInstruction', 'createRange', 'createTextNode', 'createTreeWalker', 'elementFromPoint', 'elementsFromPoint',
        'evaluate', 'execCommand', 'exitFullscreen', 'exitPictureInPicture', 'exitPointerLock', 'getAnimations', 'getElementById', 'getElementsByClassName',
        'getElementsByName', 'getElementsByTagName', 'getElementsByTagNameNS', 'getSelection', 'hasFocus', 'importNode', 'open', 'prepend', 'queryCommandEnabled',
        'queryCommandIndeterm', 'queryCommandState', 'queryCommandSupported', 'queryCommandValue', 'querySelector', 'querySelectorAll', 'releaseEvents',
        'replaceChildren', 'webkitCancelFullScreen', 'webkitExitFullscreen', 'write', 'writeln'
    ];


    // if (this instanceof Document != true) { throw new TypeError("Illegal constructor"); };
    Document.prototype = {
        get URL() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return location.href;
        },
        get activeElement() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.activeElement;
        },
        adoptNode() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.adoptNode;
        },
        get adoptedStyleSheets() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.adoptedStyleSheets;
        },
        set adoptedStyleSheets(value) {
            debugger;
            $attribute_map.adoptedStyleSheets = value;
        },
        get alinkColor() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.alinkColor;
        },
        set alinkColor(value) {
            debugger;
            $attribute_map.alinkColor = value;
        },
        get all() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.all;
        },
        get anchors() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.anchors;
        },
        append() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.append;
        },
        get applets() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.applets;
        },
        get bgColor() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.bgColor;
        },
        set bgColor(value) {
            debugger;
            $attribute_map.bgColor = value;
        },
        get body() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.body;
        },
        set body(value) {
            debugger;
            $attribute_map.body = value;
        },
        captureEvents() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.captureEvents;
        },
        caretRangeFromPoint() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.caretRangeFromPoint;
        },
        get characterSet() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 'UTF-8';
        },
        get charset() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 'UTF-8';
        },
        get childElementCount() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.childElementCount;
        },
        get children() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.children;
        },
        clear() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.clear;
        },
        close() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.close;
        },
        get compatMode() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 'CSS1Compat';
        },
        get contentType() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.contentType;
        },
        get cookie() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.cookie;
        },
        set cookie(value) {
            debugger;
            if (value === null) {
                return ;
            }
            if (typeof value === "symbol") {
                throw new TypeError("Cannot convert a Symbol value to a string")
            }
        
            const S = String(value);
            const n = S.length;
            const U = [];
            for (let i = 0; i < n; ++i) {
                const c = S.charCodeAt(i);
                if (c < 0xD800 || c > 0xDFFF) {
                    U.push(String.fromCodePoint(c));
                } else if (0xDC00 <= c && c <= 0xDFFF) {
                    U.push(String.fromCodePoint(0xFFFD));
                } else if (i === n - 1) {
                    U.push(String.fromCodePoint(0xFFFD));
                } else {
                    const d = S.charCodeAt(i + 1);
                    if (0xDC00 <= d && d <= 0xDFFF) {
                        const a = c & 0x3FF;
                        const b = d & 0x3FF;
                        U.push(String.fromCodePoint((2 << 15) + ((2 << 9) * a) + b));
                        ++i;
                    } else {
                        U.push(String.fromCodePoint(0xFFFD));
                    }
                }
            }
            $attribute_map.cookie = U.join("");
        },
        createAttribute() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.createAttribute;
        },
        createAttributeNS() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.createAttributeNS;
        },
        createCDATASection() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.createCDATASection;
        },
        createComment() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.createComment;
        },
        createDocumentFragment() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.createDocumentFragment;
        },
        createElement(tagName, options) {
            let tagname = tagName.toLowerCase() + "";
            console.log(tagname, '---')
            let ele;
            if (qxVm.memory.htmlElements[tagname] === "undefined ") {
                ele = new class createElement { }
            } else {
                ele = qxVm.memory.htmlElements[tagname]();
            };
            qxVm.memory.runElementList.push(ele);

            debugger;
            return ele;
        },
        createElementNS() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.createElementNS;
        },
        createEvent(type) {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele;
            switch(type.toLowerCase()){
                case 'event':
                    ele = new Event(qxVm.memory.$createObj_key);
                    break;
                case 'events':
                    ele = new Event(qxVm.memory.$createObj_key);
                    break;
                case 'uievent':
                    ele = new UIEvent(qxVm.memory.$createObj_key);
                    break;
                case 'uievents':
                    ele = new UIEvent(qxVm.memory.$createObj_key);
                    break;
                case 'mouseevent':
                    ele = new MouseEvent(qxVm.memory.$createObj_key);
                    break;
                case 'mouseevents':
                    ele = new MouseEvent(qxVm.memory.$createObj_key);
                    break;
                case 'mutationevent':
                    ele = new MutationEvent(qxVm.memory.$createObj_key);
                    break;
                case 'mutationevents':
                    ele = new MutationEvent(qxVm.memory.$createObj_key);
                    break;
                case 'textevent':
                    ele = new TextEvent(qxVm.memory.$createObj_key);
                    break;
                case 'textevents':
                    ele = new TextEvent(qxVm.memory.$createObj_key);
                    break;
                case 'keyboardevent':
                    ele = new KeyboardEvent(qxVm.memory.$createObj_key);
                    break;
                
                case 'customevent':
                    ele = new CustomEvent(qxVm.memory.$createObj_key);
                    break;
                    
                default:
                    debugger;
                    throw new DOMException(`Failed to execute 'createEvent' on 'Document': The provided event type ('${type}') is invalid.`)
            }
            ele.isTrusted =  false;
            return ele;

        },
        createExpression() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.createExpression;
        },
        createNSResolver() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.createNSResolver;
        },
        createNodeIterator() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.createNodeIterator;
        },
        createProcessingInstruction() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.createProcessingInstruction;
        },
        createRange() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.createRange;
        },
        createTextNode() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.createTextNode;
        },
        createTreeWalker() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.createTreeWalker;
        },
        get currentScript() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return null;
        },
        get defaultView() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.defaultView;
        },
        get designMode() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.designMode;
        },
        set designMode(value) {
            debugger;
            $attribute_map.designMode = value;
        },
        get dir() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.dir;
        },
        set dir(value) {
            debugger;
            $attribute_map.dir = value;
        },
        get doctype() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.doctype;
        },
        get documentElement() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this);

            if (!ele) {
                ele = new HTMLHtmlElement(qxVm.memory.$createObj_key);
                qxVm.memory.private_data.set(this, {
                    documentElement: ele
                })
                qxVm.memory.private_data.get(this).documentElement = ele;
            }else{
                ele = ele.documentElement;
            }
            return ele;

        },
        get documentURI() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.documentURI;
        },
        get domain() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.domain;
        },
        set domain(value) {
            debugger;
            $attribute_map.domain = value;
        },
        elementFromPoint() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.elementFromPoint;
        },
        elementsFromPoint() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.elementsFromPoint;
        },
        get embeds() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.embeds;
        },
        evaluate() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.evaluate;
        },
        execCommand() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.execCommand;
        },
        exitFullscreen() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.exitFullscreen;
        },
        exitPictureInPicture() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.exitPictureInPicture;
        },
        exitPointerLock() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.exitPointerLock;
        },
        get featurePolicy() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.featurePolicy;
        },
        get fgColor() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.fgColor;
        },
        set fgColor(value) {
            debugger;
            $attribute_map.fgColor = value;
        },
        get firstElementChild() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.firstElementChild;
        },
        get fonts() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.fonts;
        },
        get forms() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.forms;
        },
        get fragmentDirective() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.fragmentDirective;
        },
        get fullscreen() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.fullscreen;
        },
        set fullscreen(value) {
            debugger;
            $attribute_map.fullscreen = value;
        },
        get fullscreenElement() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.fullscreenElement;
        },
        set fullscreenElement(value) {
            debugger;
            $attribute_map.fullscreenElement = value;
        },
        get fullscreenEnabled() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.fullscreenEnabled;
        },
        set fullscreenEnabled(value) {
            debugger;
            $attribute_map.fullscreenEnabled = value;
        },
        getAnimations() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.getAnimations;
        },
        getElementById(id) {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.getElementById(id);
        },
        getElementsByClassName() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.getElementsByClassName;
        },
        getElementsByName() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.getElementsByName;
        },
        getElementsByTagName(tagName) {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (tagName === "*") {
                return qxVm.memory.htmlCollection;
            };
            
            tagName = tagName.toLowerCase();
            
            let collection = new HTMLCollection(qxVm.memory.$createObj_key);
            let collection_index = 0;

            for (let i = 0; i < qxVm.memory.htmlCollection.length; i++) {
                let node_onj = qxVm.memory.htmlCollection[i];
                console.log(node_onj.localName, node_onj.localName, tagName)
                if (node_onj.localName && node_onj.localName === tagName) {
                    collection[collection_index] = node_onj;
                    collection_index++;
                }
            }
            return collection
        },
        getElementsByTagNameNS() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.getElementsByTagNameNS;
        },
        getSelection() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.getSelection;
        },
        hasFocus() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.hasFocus;
        },
        get head() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).head;
            if (!ele) {
                ele = new HTMLHeadElement(qxVm.memory.$createObj_key);
                qxVm.memory.private_data.get(this).head = ele;
            }
            return ele;
        },
        get hidden() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return true;
        },
        get images() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.images;
        },
        get implementation() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.implementation;
        },
        importNode() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.importNode;
        },
        get inputEncoding() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.inputEncoding;
        },
        get lastElementChild() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.lastElementChild;
        },
        get lastModified() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.lastModified;
        },
        get linkColor() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.linkColor;
        },
        set linkColor(value) {
            debugger;
            $attribute_map.linkColor = value;
        },
        get links() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.links;
        },
        get onabort() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onabort;
        },
        set onabort(value) {
            debugger;
            $attribute_map.onabort = value;
        },
        get onanimationend() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onanimationend;
        },
        set onanimationend(value) {
            debugger;
            $attribute_map.onanimationend = value;
        },
        get onanimationiteration() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onanimationiteration;
        },
        set onanimationiteration(value) {
            debugger;
            $attribute_map.onanimationiteration = value;
        },
        get onanimationstart() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onanimationstart;
        },
        set onanimationstart(value) {
            debugger;
            $attribute_map.onanimationstart = value;
        },
        get onauxclick() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onauxclick;
        },
        set onauxclick(value) {
            debugger;
            $attribute_map.onauxclick = value;
        },
        get onbeforecopy() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onbeforecopy;
        },
        set onbeforecopy(value) {
            debugger;
            $attribute_map.onbeforecopy = value;
        },
        get onbeforecut() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onbeforecut;
        },
        set onbeforecut(value) {
            debugger;
            $attribute_map.onbeforecut = value;
        },
        get onbeforepaste() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onbeforepaste;
        },
        set onbeforepaste(value) {
            debugger;
            $attribute_map.onbeforepaste = value;
        },
        get onbeforexrselect() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onbeforexrselect;
        },
        set onbeforexrselect(value) {
            debugger;
            $attribute_map.onbeforexrselect = value;
        },
        get onblur() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onblur;
        },
        set onblur(value) {
            debugger;
            $attribute_map.onblur = value;
        },
        get oncancel() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.oncancel;
        },
        set oncancel(value) {
            debugger;
            $attribute_map.oncancel = value;
        },
        get oncanplay() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.oncanplay;
        },
        set oncanplay(value) {
            debugger;
            $attribute_map.oncanplay = value;
        },
        get oncanplaythrough() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.oncanplaythrough;
        },
        set oncanplaythrough(value) {
            debugger;
            $attribute_map.oncanplaythrough = value;
        },
        get onchange() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onchange;
        },
        set onchange(value) {
            debugger;
            $attribute_map.onchange = value;
        },
        get onclick() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onclick;
        },
        set onclick(value) {
            debugger;
            $attribute_map.onclick = value;
        },
        get onclose() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onclose;
        },
        set onclose(value) {
            debugger;
            $attribute_map.onclose = value;
        },
        get oncontextmenu() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.oncontextmenu;
        },
        set oncontextmenu(value) {
            debugger;
            $attribute_map.oncontextmenu = value;
        },
        get oncopy() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.oncopy;
        },
        set oncopy(value) {
            debugger;
            $attribute_map.oncopy = value;
        },
        get oncuechange() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.oncuechange;
        },
        set oncuechange(value) {
            debugger;
            $attribute_map.oncuechange = value;
        },
        get oncut() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.oncut;
        },
        set oncut(value) {
            debugger;
            $attribute_map.oncut = value;
        },
        get ondblclick() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.ondblclick;
        },
        set ondblclick(value) {
            debugger;
            $attribute_map.ondblclick = value;
        },
        get ondrag() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.ondrag;
        },
        set ondrag(value) {
            debugger;
            $attribute_map.ondrag = value;
        },
        get ondragend() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.ondragend;
        },
        set ondragend(value) {
            debugger;
            $attribute_map.ondragend = value;
        },
        get ondragenter() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.ondragenter;
        },
        set ondragenter(value) {
            debugger;
            $attribute_map.ondragenter = value;
        },
        get ondragleave() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.ondragleave;
        },
        set ondragleave(value) {
            debugger;
            $attribute_map.ondragleave = value;
        },
        get ondragover() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.ondragover;
        },
        set ondragover(value) {
            debugger;
            $attribute_map.ondragover = value;
        },
        get ondragstart() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.ondragstart;
        },
        set ondragstart(value) {
            debugger;
            $attribute_map.ondragstart = value;
        },
        get ondrop() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.ondrop;
        },
        set ondrop(value) {
            debugger;
            $attribute_map.ondrop = value;
        },
        get ondurationchange() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.ondurationchange;
        },
        set ondurationchange(value) {
            debugger;
            $attribute_map.ondurationchange = value;
        },
        get onemptied() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onemptied;
        },
        set onemptied(value) {
            debugger;
            $attribute_map.onemptied = value;
        },
        get onended() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onended;
        },
        set onended(value) {
            debugger;
            $attribute_map.onended = value;
        },
        get onerror() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onerror;
        },
        set onerror(value) {
            debugger;
            $attribute_map.onerror = value;
        },
        get onfocus() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onfocus;
        },
        set onfocus(value) {
            debugger;
            $attribute_map.onfocus = value;
        },
        get onformdata() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onformdata;
        },
        set onformdata(value) {
            debugger;
            $attribute_map.onformdata = value;
        },
        get onfreeze() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onfreeze;
        },
        set onfreeze(value) {
            debugger;
            $attribute_map.onfreeze = value;
        },
        get onfullscreenchange() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onfullscreenchange;
        },
        set onfullscreenchange(value) {
            debugger;
            $attribute_map.onfullscreenchange = value;
        },
        get onfullscreenerror() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onfullscreenerror;
        },
        set onfullscreenerror(value) {
            debugger;
            $attribute_map.onfullscreenerror = value;
        },
        get ongotpointercapture() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.ongotpointercapture;
        },
        set ongotpointercapture(value) {
            debugger;
            $attribute_map.ongotpointercapture = value;
        },
        get oninput() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.oninput;
        },
        set oninput(value) {
            debugger;
            $attribute_map.oninput = value;
        },
        get oninvalid() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.oninvalid;
        },
        set oninvalid(value) {
            debugger;
            $attribute_map.oninvalid = value;
        },
        get onkeydown() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onkeydown;
        },
        set onkeydown(value) {
            debugger;
            $attribute_map.onkeydown = value;
        },
        get onkeypress() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onkeypress;
        },
        set onkeypress(value) {
            debugger;
            $attribute_map.onkeypress = value;
        },
        get onkeyup() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onkeyup;
        },
        set onkeyup(value) {
            debugger;
            $attribute_map.onkeyup = value;
        },
        get onload() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onload;
        },
        set onload(value) {
            debugger;
            $attribute_map.onload = value;
        },
        get onloadeddata() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onloadeddata;
        },
        set onloadeddata(value) {
            debugger;
            $attribute_map.onloadeddata = value;
        },
        get onloadedmetadata() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onloadedmetadata;
        },
        set onloadedmetadata(value) {
            debugger;
            $attribute_map.onloadedmetadata = value;
        },
        get onloadstart() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onloadstart;
        },
        set onloadstart(value) {
            debugger;
            $attribute_map.onloadstart = value;
        },
        get onlostpointercapture() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onlostpointercapture;
        },
        set onlostpointercapture(value) {
            debugger;
            $attribute_map.onlostpointercapture = value;
        },
        get onmousedown() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onmousedown;
        },
        set onmousedown(value) {
            debugger;
            $attribute_map.onmousedown = value;
        },
        onmouseenter: undefined,
        onmouseleave: undefined,
        get onmousemove() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onmousemove;
        },
        set onmousemove(value) {
            debugger;
            $attribute_map.onmousemove = value;
        },
        get onmouseout() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onmouseout;
        },
        set onmouseout(value) {
            debugger;
            $attribute_map.onmouseout = value;
        },
        get onmouseover() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onmouseover;
        },
        set onmouseover(value) {
            debugger;
            $attribute_map.onmouseover = value;
        },
        get onmouseup() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onmouseup;
        },
        set onmouseup(value) {
            debugger;
            $attribute_map.onmouseup = value;
        },
        get onmousewheel() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onmousewheel;
        },
        set onmousewheel(value) {
            debugger;
            $attribute_map.onmousewheel = value;
        },
        get onpaste() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onpaste;
        },
        set onpaste(value) {
            debugger;
            $attribute_map.onpaste = value;
        },
        get onpause() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onpause;
        },
        set onpause(value) {
            debugger;
            $attribute_map.onpause = value;
        },
        get onplay() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onplay;
        },
        set onplay(value) {
            debugger;
            $attribute_map.onplay = value;
        },
        get onplaying() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onplaying;
        },
        set onplaying(value) {
            debugger;
            $attribute_map.onplaying = value;
        },
        get onpointercancel() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onpointercancel;
        },
        set onpointercancel(value) {
            debugger;
            $attribute_map.onpointercancel = value;
        },
        get onpointerdown() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onpointerdown;
        },
        set onpointerdown(value) {
            debugger;
            $attribute_map.onpointerdown = value;
        },
        get onpointerenter() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onpointerenter;
        },
        set onpointerenter(value) {
            debugger;
            $attribute_map.onpointerenter = value;
        },
        get onpointerleave() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onpointerleave;
        },
        set onpointerleave(value) {
            debugger;
            $attribute_map.onpointerleave = value;
        },
        get onpointerlockchange() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onpointerlockchange;
        },
        set onpointerlockchange(value) {
            debugger;
            $attribute_map.onpointerlockchange = value;
        },
        get onpointerlockerror() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onpointerlockerror;
        },
        set onpointerlockerror(value) {
            debugger;
            $attribute_map.onpointerlockerror = value;
        },
        get onpointermove() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onpointermove;
        },
        set onpointermove(value) {
            debugger;
            $attribute_map.onpointermove = value;
        },
        get onpointerout() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onpointerout;
        },
        set onpointerout(value) {
            debugger;
            $attribute_map.onpointerout = value;
        },
        get onpointerover() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onpointerover;
        },
        set onpointerover(value) {
            debugger;
            $attribute_map.onpointerover = value;
        },
        get onpointerrawupdate() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onpointerrawupdate;
        },
        set onpointerrawupdate(value) {
            debugger;
            $attribute_map.onpointerrawupdate = value;
        },
        get onpointerup() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onpointerup;
        },
        set onpointerup(value) {
            debugger;
            $attribute_map.onpointerup = value;
        },
        get onprogress() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onprogress;
        },
        set onprogress(value) {
            debugger;
            $attribute_map.onprogress = value;
        },
        get onratechange() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onratechange;
        },
        set onratechange(value) {
            debugger;
            $attribute_map.onratechange = value;
        },
        onreadystatechange: undefined,
        get onreset() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onreset;
        },
        set onreset(value) {
            debugger;
            $attribute_map.onreset = value;
        },
        get onresize() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onresize;
        },
        set onresize(value) {
            debugger;
            $attribute_map.onresize = value;
        },
        get onresume() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onresume;
        },
        set onresume(value) {
            debugger;
            $attribute_map.onresume = value;
        },
        get onscroll() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onscroll;
        },
        set onscroll(value) {
            debugger;
            $attribute_map.onscroll = value;
        },
        get onsearch() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onsearch;
        },
        set onsearch(value) {
            debugger;
            $attribute_map.onsearch = value;
        },
        get onsecuritypolicyviolation() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onsecuritypolicyviolation;
        },
        set onsecuritypolicyviolation(value) {
            debugger;
            $attribute_map.onsecuritypolicyviolation = value;
        },
        get onseeked() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onseeked;
        },
        set onseeked(value) {
            debugger;
            $attribute_map.onseeked = value;
        },
        get onseeking() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onseeking;
        },
        set onseeking(value) {
            debugger;
            $attribute_map.onseeking = value;
        },
        get onselect() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onselect;
        },
        set onselect(value) {
            debugger;
            $attribute_map.onselect = value;
        },
        get onselectionchange() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onselectionchange;
        },
        set onselectionchange(value) {
            debugger;
            $attribute_map.onselectionchange = value;
        },
        get onselectstart() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onselectstart;
        },
        set onselectstart(value) {
            debugger;
            $attribute_map.onselectstart = value;
        },
        get onslotchange() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onslotchange;
        },
        set onslotchange(value) {
            debugger;
            $attribute_map.onslotchange = value;
        },
        get onstalled() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onstalled;
        },
        set onstalled(value) {
            debugger;
            $attribute_map.onstalled = value;
        },
        get onsubmit() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onsubmit;
        },
        set onsubmit(value) {
            debugger;
            $attribute_map.onsubmit = value;
        },
        get onsuspend() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onsuspend;
        },
        set onsuspend(value) {
            debugger;
            $attribute_map.onsuspend = value;
        },
        get ontimeupdate() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.ontimeupdate;
        },
        set ontimeupdate(value) {
            debugger;
            $attribute_map.ontimeupdate = value;
        },
        get ontoggle() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.ontoggle;
        },
        set ontoggle(value) {
            debugger;
            $attribute_map.ontoggle = value;
        },
        get ontransitioncancel() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.ontransitioncancel;
        },
        set ontransitioncancel(value) {
            debugger;
            $attribute_map.ontransitioncancel = value;
        },
        get ontransitionend() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.ontransitionend;
        },
        set ontransitionend(value) {
            debugger;
            $attribute_map.ontransitionend = value;
        },
        get ontransitionrun() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.ontransitionrun;
        },
        set ontransitionrun(value) {
            debugger;
            $attribute_map.ontransitionrun = value;
        },
        get ontransitionstart() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.ontransitionstart;
        },
        set ontransitionstart(value) {
            debugger;
            $attribute_map.ontransitionstart = value;
        },
        get onvisibilitychange() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onvisibilitychange;
        },
        set onvisibilitychange(value) {
            debugger;
            $attribute_map.onvisibilitychange = value;
        },
        get onvolumechange() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onvolumechange;
        },
        set onvolumechange(value) {
            debugger;
            $attribute_map.onvolumechange = value;
        },
        get onwaiting() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onwaiting;
        },
        set onwaiting(value) {
            debugger;
            $attribute_map.onwaiting = value;
        },
        get onwebkitanimationend() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onwebkitanimationend;
        },
        set onwebkitanimationend(value) {
            debugger;
            $attribute_map.onwebkitanimationend = value;
        },
        get onwebkitanimationiteration() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onwebkitanimationiteration;
        },
        set onwebkitanimationiteration(value) {
            debugger;
            $attribute_map.onwebkitanimationiteration = value;
        },
        get onwebkitanimationstart() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onwebkitanimationstart;
        },
        set onwebkitanimationstart(value) {
            debugger;
            $attribute_map.onwebkitanimationstart = value;
        },
        get onwebkitfullscreenchange() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onwebkitfullscreenchange;
        },
        set onwebkitfullscreenchange(value) {
            debugger;
            $attribute_map.onwebkitfullscreenchange = value;
        },
        get onwebkitfullscreenerror() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onwebkitfullscreenerror;
        },
        set onwebkitfullscreenerror(value) {
            debugger;
            $attribute_map.onwebkitfullscreenerror = value;
        },
        get onwebkittransitionend() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onwebkittransitionend;
        },
        set onwebkittransitionend(value) {
            debugger;
            $attribute_map.onwebkittransitionend = value;
        },
        get onwheel() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onwheel;
        },
        set onwheel(value) {
            debugger;
            $attribute_map.onwheel = value;
        },
        open() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.open;
        },
        get pictureInPictureElement() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.pictureInPictureElement;
        },
        get pictureInPictureEnabled() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.pictureInPictureEnabled;
        },
        get plugins() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.plugins;
        },
        get pointerLockElement() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.pointerLockElement;
        },
        prepend() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.prepend;
        },
        queryCommandEnabled() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.queryCommandEnabled;
        },
        queryCommandIndeterm() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.queryCommandIndeterm;
        },
        queryCommandState() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.queryCommandState;
        },
        queryCommandSupported() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.queryCommandSupported;
        },
        queryCommandValue() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.queryCommandValue;
        },
        querySelector() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.querySelector;
        },
        querySelectorAll() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.querySelectorAll;
        },
        get readyState() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return "complete";
        },
        get referrer() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.referrer;
        },
        releaseEvents() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.releaseEvents;
        },
        replaceChildren() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.replaceChildren;
        },
        get rootElement() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.rootElement;
        },
        get scripts() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.scripts;
        },
        get scrollingElement() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.scrollingElement;
        },
        get styleSheets() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.styleSheets;
        },
        get timeline() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.timeline;
        },
        get title() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.title;
        },
        set title(value) {
            debugger;
            $attribute_map.title = value;
        },
        get visibilityState() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return "hidden";
        },
        get vlinkColor() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.vlinkColor;
        },
        set vlinkColor(value) {
            debugger;
            $attribute_map.vlinkColor = value;
        },
        get wasDiscarded() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return false;
        },
        webkitCancelFullScreen() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.webkitCancelFullScreen;
        },
        get webkitCurrentFullScreenElement() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.webkitCurrentFullScreenElement;
        },
        webkitExitFullscreen() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.webkitExitFullscreen;
        },
        get webkitFullscreenElement() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.webkitFullscreenElement;
        },
        get webkitFullscreenEnabled() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.webkitFullscreenEnabled;
        },
        get webkitHidden() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return true;
        },
        get webkitIsFullScreen() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.webkitIsFullScreen;
        },
        get webkitVisibilityState() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.webkitVisibilityState;
        },
        write() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.write;
        },
        writeln() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.writeln;
        },
        get xmlEncoding() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.xmlEncoding;
        },
        get xmlStandalone() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.xmlStandalone;
        },
        set xmlStandalone(value) {
            debugger;
            $attribute_map.xmlStandalone = value;
        },
        get xmlVersion() {
            debugger;
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.xmlVersion;
        },
        set xmlVersion(value) {
            debugger;
            $attribute_map.xmlVersion = value;
        },
    }

    qxVm.rename(Document.prototype, "Document");
    qxVm.safeDescriptor_addConstructor(Document);
    qxVm.safe_Objattribute(Document, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.defineProperties(Document.prototype, {
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

    Object.setPrototypeOf(Document.prototype, Node.prototype);
    Object.setPrototypeOf(Document, Node);

})();
// debugger;
