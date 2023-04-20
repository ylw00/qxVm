const fs = require("fs")


function ReadCode(name, dir) {
    let file_path = dir === undefined ? `${__dirname}/${name}` : `${__dirname}/${dir}/${name}`;
    return fs.readFileSync(file_path) + "\r\n"
}

function Get_Bom_node_code() {
    let code = "";

    // Browser[Bom]

    // Event
    // code += ReadCode("UIEvent.js");
    // code += ReadCode("MouseEvent.js");
    // code += ReadCode("PointerEvent.js");

    // Performance
    code += ReadCode("PerformanceNavigation.js", "Performance")  // 继承 Object
    code += ReadCode("PerformanceTiming.js", "Performance");  // 继承 Object
    code += ReadCode("PerformanceEntry.js", "Performance");  // 继承 Object
    code += ReadCode("PerformancePaintTiming.js", "Performance");  // 继承 PerformanceEntry
    code += ReadCode("Performance.js", "Performance");  // 继承 EventTarget

    // RTC
    code += ReadCode("RTCDataChannel.js", "RTC");
    code += ReadCode("RTCIceCandidate.js", "RTC");
    code += ReadCode("RTCPeerConnectionIceEvent.js", "RTC");
    code += ReadCode("RTCSessionDescription.js", "RTC");
    code += ReadCode("RTCPeerConnection.js", "RTC");

    // Functin
    code += ReadCode("BarProp.js");
    code += ReadCode("CacheStorage.js");
    code += ReadCode("chrome.js");
    code += ReadCode("CredentialsContainer.js");
    code += ReadCode("Crypto.js");
    code += ReadCode("CustomElementRegistry.js");
    code += ReadCode("External.js");
    code += ReadCode("Geolocation.js");
    code += ReadCode("History.js");
    code += ReadCode("Ink.js");
    code += ReadCode("Keyboard.js");
    code += ReadCode("Location.js");
    code += ReadCode("LockManager.js");
    code += ReadCode("MediaCapabilities.js");
    code += ReadCode("MediaSession.js");
    code += ReadCode("Permissions.js");
    code += ReadCode("Presentation.js");
    code += ReadCode("Scheduler.js");
    code += ReadCode("Scheduling.js");
    code += ReadCode("Screen.js");
    code += ReadCode("ShadyCSS.js");
    code += ReadCode("Storage.js");
    code += ReadCode("UserActivation.js");
    code += ReadCode("WakeLock.js");
    code += ReadCode("Worklet.js");

    // idb datatabases
    code += ReadCode("IDBOpenDBRequest.js", "IDB");
    code += ReadCode("IDBFactory.js", "IDB");
    code += ReadCode("Database.js");

    
    // audio AudioContext
    code += ReadCode("AudioWorklet.js", "Audio");  // Worklet
    code += ReadCode("AudioListener.js", "Audio");  // Object
    code += ReadCode("AudioParam.js", "Audio");  // Object
    code += ReadCode("AudioNode.js", "Audio");  //  EventTarget
    code += ReadCode("AudioDestinationNode.js", "Audio");  // AudioNode
    code += ReadCode("AudioScheduledSourceNode.js", "Audio");  // AudioNode
    code += ReadCode("DynamicsCompressorNode.js", "Audio")  // AudioNode
    code += ReadCode("OscillatorNode.js", "Audio");  // AudioScheduledSourceNode
    code += ReadCode("BaseAudioContext.js", "Audio");  // EventTarget
    code += ReadCode("OfflineAudioContext.js", "Audio");  // BaseAudioContext
    

    // Navigator
    code += ReadCode("MimeType.js", "Plugin");
    code += ReadCode("Plugin.js", "Plugin");
    code += ReadCode("PluginArray.js", "Plugin");
    code += ReadCode("MimeTypeArray.js", "Plugin");
    code += ReadCode("NavigatorUAData.js");
    code += ReadCode("Navigator.js");

    // XMLHttpRequest
    code += ReadCode("XMLHttpRequestEventTarget.js", "HttpRequest");
    code += ReadCode("XMLHttpRequest.js", "HttpRequest");
    code += ReadCode("Headers.js");
    code += ReadCode("Request.js", "HttpRequest");

    // Window
    code += ReadCode("Window.js");
    code += ReadCode("Base64.js");
    code += ReadCode("timer.js");
    code += ReadCode("window.attributes.js"); // 追加window属性

    return code;
}

module.exports = {
    Get_Bom_node_code
}