RTCPeerConnection = function RTCPeerConnection() {//构造函数
    if(new.target !== RTCPeerConnection){
		throw new TypeError(`Failed to construct 'RTCPeerConnection': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
	}

    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(RTCPeerConnection);

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
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        addStream() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        addTrack() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        addTransceiver() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get canTrickleIceCandidates() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).canTrickleIceCandidates, null);
        },
        close() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get connectionState() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).connectionState, "new");
        },
        createAnswer() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createDTMFSender() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createDataChannel(label) {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (label === undefined) { throw new TypeError(`Failed to execute 'createDataChannel' on 'RTCPeerConnection': 1 argument required, but only 0 present.`) }
            return new RTCDataChannel(qxVm.memory.$createObj_key, label);
        },
        async createOffer(successCallback, failureCallback) {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };

            return new Promise(resolve=>{
                return function(offer){
                    console.log(offer)
                    resolve(new RTCSessionDescription(qxVm.memory.$createObj_key))
                }
            })
        },
        get currentLocalDescription() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).currentLocalDescription, null);
        },
        get currentRemoteDescription() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).currentRemoteDescription, null);
        },
        getConfiguration() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getLocalStreams() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getReceivers() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getRemoteStreams() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getSenders() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getStats() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getTransceivers() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get iceConnectionState() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).iceConnectionState, "new");
        },
        get iceGatheringState() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).iceGatheringState, "new");
        },
        get localDescription() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).localDescription, null);
        },
        get onaddstream() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onaddstream, null);
        },
        set onaddstream(value) {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onaddstream = value + "";
        },
        get onconnectionstatechange() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onconnectionstatechange, null);
        },
        set onconnectionstatechange(value) {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onconnectionstatechange = value + "";
        },
        get ondatachannel() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondatachannel, null);
        },
        set ondatachannel(value) {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondatachannel = value + "";
        },
        get onicecandidate() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onicecandidate, null);
        },
        set onicecandidate(value) {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onicecandidate = value;
        },
        get onicecandidateerror() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onicecandidateerror, null);
        },
        set onicecandidateerror(value) {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onicecandidateerror = value + "";
        },
        get oniceconnectionstatechange() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oniceconnectionstatechange, null);
        },
        set oniceconnectionstatechange(value) {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oniceconnectionstatechange = value + "";
        },
        get onicegatheringstatechange() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onicegatheringstatechange, null);
        },
        set onicegatheringstatechange(value) {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onicegatheringstatechange = value + "";
        },
        get onnegotiationneeded() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onnegotiationneeded, null);
        },
        set onnegotiationneeded(value) {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onnegotiationneeded = value + "";
        },
        get onremovestream() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onremovestream, null);
        },
        set onremovestream(value) {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onremovestream = value + "";
        },
        get onsignalingstatechange() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onsignalingstatechange, null);
        },
        set onsignalingstatechange(value) {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onsignalingstatechange = value + "";
        },
        get ontrack() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ontrack, null);
        },
        set ontrack(value) {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ontrack = value + "";
        },
        get pendingLocalDescription() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).pendingLocalDescription, null);
        },
        get pendingRemoteDescription() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).pendingRemoteDescription, null);
        },
        get remoteDescription() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).remoteDescription, null);
        },
        removeStream() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        removeTrack() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        restartIce() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get sctp() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).sctp, null);
        },
        setConfiguration() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        async setLocalDescription(session) {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            this.localDescription = session;
            this.pendingLocalDescription = session;
            return Promise.resolve()
        },
        setRemoteDescription() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get signalingState() {
            debugger;
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).signalingState, "stable");
        }
    };

    qxVm.rename(RTCPeerConnection.prototype, "RTCPeerConnection");
    qxVm.safeDescriptor_addConstructor(RTCPeerConnection);
    qxVm.safe_Objattribute(RTCPeerConnection, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(RTCPeerConnection.prototype, EventTarget.prototype);
    Object.setPrototypeOf(RTCPeerConnection, EventTarget);

})();

// 一个全局属性
webkitRTCPeerConnection = RTCPeerConnection;