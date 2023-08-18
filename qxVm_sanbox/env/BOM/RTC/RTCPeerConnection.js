RTCPeerConnection = function RTCPeerConnection() {//构造函数
    if(new.target !== RTCPeerConnection){
		throw new TypeError(`Failed to construct 'RTCPeerConnection': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
	}

    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(RTCPeerConnection);

; (function () {
    const $safe_get_attribute = [
        'canTrickleIceCandidates', 'connectionState', 'currentLocalDescription', 'currentRemoteDescription', 'iceConnectionState', 'iceGatheringState', 'localDescription', 'onaddstream', 'onconnectionstatechange', 'ondatachannel',
        'onicecandidate', 'onicecandidateerror', 'oniceconnectionstatechange', 'onicegatheringstatechange', 'onnegotiationneeded', 'onremovestream', 'onsignalingstatechange', 'ontrack', 'pendingLocalDescription', 'pendingRemoteDescription',
        'remoteDescription', 'sctp', 'signalingState'
    ];
    const $safe_set_attribute = [
        'onaddstream', 'onconnectionstatechange', 'ondatachannel', 'onicecandidate', 'onicecandidateerror', 'oniceconnectionstatechange', 'onicegatheringstatechange', 'onnegotiationneeded', 'onremovestream', 'onsignalingstatechange', 'ontrack'];
    const $safe_func_attribute = [
        'addIceCandidate', 'addStream', 'addTrack', 'addTransceiver', 'close', 'createAnswer', 'createDTMFSender', 'createDataChannel', 'createOffer', 'getConfiguration', 'getLocalStreams', 'getReceivers', 'getRemoteStreams', 'getSenders',
        'getStats', 'getTransceivers', 'removeStream', 'removeTrack', 'restartIce', 'setConfiguration', 'setLocalDescription', 'setRemoteDescription'
    ];

    RTCPeerConnection.prototype = {
        addIceCandidate() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'addIceCandidate', arguments, result);
            return result;
        },
        addStream() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'addStream', arguments, result);
            return result;
        },
        addTrack() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'addTrack', arguments, result);
            return result;
        },
        addTransceiver() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'addTransceiver', arguments, result);
            return result;
        },
        get canTrickleIceCandidates() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).canTrickleIceCandidates, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'canTrickleIceCandidates', arguments, result);
            return result;
        },
        close() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'close', arguments, result);
            return result;
        },
        get connectionState() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).connectionState, "new");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'connectionState', arguments, result);
            return result;
        },
        createAnswer() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'createAnswer', arguments, result);
            return result;
        },
        createDTMFSender() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'createDTMFSender', arguments, result);
            return result;
        },
        createDataChannel(label) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (label === undefined) { throw new TypeError(`Failed to execute 'createDataChannel' on 'RTCPeerConnection': 1 argument required, but only 0 present.`) }
            let result = new RTCDataChannel(lwVm.memory.$createObj_key, label);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'createDataChannel', arguments, result);
            return result;
        },
        async createOffer(successCallback, failureCallback) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };

            return new Promise(resolve=>{
                return function(offer){
                    console.log(offer)
                    resolve(new RTCSessionDescription(lwVm.memory.$createObj_key))
                }
            })
        },
        get currentLocalDescription() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).currentLocalDescription, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'currentLocalDescription', arguments, result);
            return result;
        },
        get currentRemoteDescription() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).currentRemoteDescription, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'currentRemoteDescription', arguments, result);
            return result;
        },
        getConfiguration() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'getConfiguration', arguments, result);
            return result;
        },
        getLocalStreams() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'getLocalStreams', arguments, result);
            return result;
        },
        getReceivers() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'getReceivers', arguments, result);
            return result;
        },
        getRemoteStreams() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'getRemoteStreams', arguments, result);
            return result;
        },
        getSenders() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'getSenders', arguments, result);
            return result;
        },
        getStats() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'getStats', arguments, result);
            return result;
        },
        getTransceivers() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'getTransceivers', arguments, result);
            return result;
        },
        get iceConnectionState() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).iceConnectionState, "new");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'iceConnectionState', arguments, result);
            return result;
        },
        get iceGatheringState() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).iceGatheringState, "new");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'iceGatheringState', arguments, result);
            return result;
        },
        get localDescription() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).localDescription, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'localDescription', arguments, result);
            return result;
        },
        get onaddstream() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onaddstream, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'onaddstream', arguments, result);
            return result;
        },
        set onaddstream(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCPeerConnection', 'onaddstream', arguments);
            lwVm.memory.private_data.get(this).onaddstream = value + "";
        },
        get onconnectionstatechange() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onconnectionstatechange, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'onconnectionstatechange', arguments, result);
            return result;
        },
        set onconnectionstatechange(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCPeerConnection', 'onconnectionstatechange', arguments);
            lwVm.memory.private_data.get(this).onconnectionstatechange = value + "";
        },
        get ondatachannel() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondatachannel, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'ondatachannel', arguments, result);
            return result;
        },
        set ondatachannel(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCPeerConnection', 'ondatachannel', arguments);
            lwVm.memory.private_data.get(this).ondatachannel = value + "";
        },
        get onicecandidate() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onicecandidate, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'onicecandidate', arguments, result);
            return result;
        },
        set onicecandidate(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCPeerConnection', 'onicecandidate', arguments);
            lwVm.memory.private_data.get(this).onicecandidate = value;
        },
        get onicecandidateerror() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onicecandidateerror, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'onicecandidateerror', arguments, result);
            return result;
        },
        set onicecandidateerror(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCPeerConnection', 'onicecandidateerror', arguments);
            lwVm.memory.private_data.get(this).onicecandidateerror = value + "";
        },
        get oniceconnectionstatechange() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oniceconnectionstatechange, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'oniceconnectionstatechange', arguments, result);
            return result;
        },
        set oniceconnectionstatechange(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCPeerConnection', 'oniceconnectionstatechange', arguments);
            lwVm.memory.private_data.get(this).oniceconnectionstatechange = value + "";
        },
        get onicegatheringstatechange() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onicegatheringstatechange, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'onicegatheringstatechange', arguments, result);
            return result;
        },
        set onicegatheringstatechange(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCPeerConnection', 'onicegatheringstatechange', arguments);
            lwVm.memory.private_data.get(this).onicegatheringstatechange = value + "";
        },
        get onnegotiationneeded() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onnegotiationneeded, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'onnegotiationneeded', arguments, result);
            return result;
        },
        set onnegotiationneeded(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCPeerConnection', 'onnegotiationneeded', arguments);
            lwVm.memory.private_data.get(this).onnegotiationneeded = value + "";
        },
        get onremovestream() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onremovestream, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'onremovestream', arguments, result);
            return result;
        },
        set onremovestream(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCPeerConnection', 'onremovestream', arguments);
            lwVm.memory.private_data.get(this).onremovestream = value + "";
        },
        get onsignalingstatechange() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onsignalingstatechange, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'onsignalingstatechange', arguments, result);
            return result;
        },
        set onsignalingstatechange(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCPeerConnection', 'onsignalingstatechange', arguments);
            lwVm.memory.private_data.get(this).onsignalingstatechange = value + "";
        },
        get ontrack() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ontrack, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'ontrack', arguments, result);
            return result;
        },
        set ontrack(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCPeerConnection', 'ontrack', arguments);
            lwVm.memory.private_data.get(this).ontrack = value + "";
        },
        get pendingLocalDescription() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).pendingLocalDescription, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'pendingLocalDescription', arguments, result);
            return result;
        },
        get pendingRemoteDescription() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).pendingRemoteDescription, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'pendingRemoteDescription', arguments, result);
            return result;
        },
        get remoteDescription() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).remoteDescription, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'remoteDescription', arguments, result);
            return result;
        },
        removeStream() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'removeStream', arguments, result);
            return result;
        },
        removeTrack() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'removeTrack', arguments, result);
            return result;
        },
        restartIce() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'restartIce', arguments, result);
            return result;
        },
        get sctp() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).sctp, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnection', 'sctp', arguments, result);
            return result;
        },
        setConfiguration() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'setConfiguration', arguments, result);
            return result;
        },
        async setLocalDescription(session) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            this.localDescription = session;
            this.pendingLocalDescription = session;
            let result = Promise.resolve();
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'async setLocalDescription', arguments, result);
            return result;
        },
        setRemoteDescription() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCPeerConnection', 'setRemoteDescription', arguments, result);
            return result;
        },
        get signalingState() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).signalingState, "stable");
        }
    };

    lwVm.rename(RTCPeerConnection.prototype, "RTCPeerConnection");
    lwVm.safeDescriptor_addConstructor(RTCPeerConnection);
    lwVm.safe_Objattribute(RTCPeerConnection, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(RTCPeerConnection.prototype, EventTarget.prototype);
    Object.setPrototypeOf(RTCPeerConnection, EventTarget);

})();

// 一个全局属性
webkitRTCPeerConnection = RTCPeerConnection;