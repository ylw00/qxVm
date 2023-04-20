let fs = require("fs");

/**
 * @return {string}
 */
function ReadCode(name) {
    return fs.readFileSync(`${__dirname}/${name}`) + "\r\n"
}

/**
 * 加载跟 EventTarget 相关的 js
 * @return {string}
 */
function Get_eventTarget_node_code() {
    let code = "";
    code += ReadCode("EventTarget.js");
    code += ReadCode("Bluetooth.js");
    code += ReadCode("Clipboard.js");
    code += ReadCode("CookieStore.js");
    // code += ReadCode("EventTarget.js");  需要放到头部
    code += ReadCode("HID.js");
    code += ReadCode("IDBDatabase.js");
    code += ReadCode("IDBRequest.js");
    code += ReadCode("MediaDevices.js");
    code += ReadCode("NavigatorManagedData.js");
    code += ReadCode("NetworkInformation.js");
    code += ReadCode("RTCSctpTransport.js");
    code += ReadCode("ScreenOrientation.js");
    code += ReadCode("Serial.js");
    code += ReadCode("ServiceWorkerContainer.js");
    code += ReadCode("SourceBuffer.js");
    code += ReadCode("SpeechSynthesisUtterance.js");
    code += ReadCode("StorageManager.js");
    code += ReadCode("TrustedTypePolicyFactory.js");
    code += ReadCode("USB.js");
    code += ReadCode("VirtualKeyboard.js");
    code += ReadCode("VisualViewport.js");
    code += ReadCode("XRSystem.js");
    
    return code;
}

module.exports = {
    Get_eventTarget_node_code
};
