const fs = require("fs")

function ReadCode(name, dir) {
    let file_path = dir === undefined ? `${__dirname}/${name}` : `${__dirname}/${dir}/${name}`;
    return fs.readFileSync(file_path) + "\r\n"
}

function Get_Dom_node_code() {
    let code = "";

    // Doucument
    /*
    <-： : 儿子原型链指向父亲的原型
    <<-  ：儿子原型的原型链执行父亲的原型
    <<<- : 儿子原型的原型链执行父亲的原型, 并且儿子原型链指向父亲

    document <- HTMLDocument <<<- Document <<<- Node <<<- EventTarget
    */

    code += ReadCode("Node.js");
    code += ReadCode("NodeList.js")

    code += ReadCode("DOMParser.js");
    code += ReadCode("DOMRectReadOnly.js");
    code += ReadCode("DOMTokenList.js");
    code += ReadCode("HTMLCollection.js")

    code += ReadCode("Element.js");
    code += ReadCode("Document.js");
    
    code += ReadCode("Attr.js");
    code += ReadCode("CSS.js");
    code += ReadCode("CSSStyleDeclaration.js");

    code += ReadCode("CharacterData.js");
    code += ReadCode("Text.js");
    code += ReadCode("CDATASection.js");
    
    code += ReadCode("HTMLDocument.js");  // Document
    code += ReadCode("HTMLElement.js");  // Element
    code += ReadCode("SVGElement.js");

    code += ReadCode("Path2D.js")

    code += ReadCode("CanvasRenderingContext2D.js")
    code += ReadCode("WebGLRenderingContext.js");
    code += ReadCode("SVGGraphicsElement.js");

    // <<<- HTMLElement
    code += ReadCode("HTMLAnchorElement.js", "HTMLElements");
    code += ReadCode("HTMLBodyElement.js", "HTMLElements");
    code += ReadCode("HTMLButtonElement.js", "HTMLElements");
    code += ReadCode("HTMLCanvasElement.js", "HTMLElements");  
    code += ReadCode("HTMLDivElement.js", "HTMLElements");
    code += ReadCode("HTMLFrameElement.js", "HTMLElements");
    code += ReadCode("HTMLFrameSetElement.js", "HTMLElements");
    code += ReadCode("HTMLHeadElement.js", "HTMLElements");
    code += ReadCode("HTMLHtmlElement.js", "HTMLElements");
    code += ReadCode("HTMLIFrameElement.js", "HTMLElements");
    code += ReadCode("HTMLImageElement.js", "HTMLElements");
    code += ReadCode("HTMLInputElement.js", "HTMLElements");
    code += ReadCode("HTMLLabelElement.js", "HTMLElements");
    code += ReadCode("HTMLLIElement.js", "HTMLElements");
    code += ReadCode("HTMLLinkElement.js", "HTMLElements");
    code += ReadCode("HTMLMediaElement.js", "HTMLElements");
    code += ReadCode("HTMLMetaElement.js", "HTMLElements");
    code += ReadCode("HTMLScriptElement.js", "HTMLElements");
    code += ReadCode("HTMLSpanElement.js", "HTMLElements");
    code += ReadCode("HTMLTitleElement.js", "HTMLElements");
    code += ReadCode("HTMLAudioElement.js", "HTMLElements");
    code += ReadCode("HTMLVideoElement.js", "HTMLElements");


    // 

    code += ReadCode("Image.js");
    code += ReadCode("document_.js");

    return code;
}

module.exports = {
    Get_Dom_node_code
}