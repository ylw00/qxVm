let fs = require("fs");

/**
 * @return {string}
 */
function ReadCode(name) {
    return fs.readFileSync(`${__dirname}/${name}`) + "\r\n"
}

/**
 * 加载跟event相关的 js
 * @return {string}
 */
function Get_event_node_code() {
    let code = "";
    code += ReadCode("Event.js");
    code += ReadCode("CustomEvent.js");
    code += ReadCode("MediaEncryptedEvent.js");
    code += ReadCode("UIEvent.js");
    code += ReadCode("KeyboardEvent.js");
    code += ReadCode("TextEvent.js");
    code += ReadCode("MouseEvent.js");
    code += ReadCode("PointerEvent.js");
    code += ReadCode("MutationEvent.js");
    
    return code;
}

module.exports = {
    Get_event_node_code
};
