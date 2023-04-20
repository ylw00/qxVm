// =====================================================================

Navigator = function Navigator(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
};
qxVm.safefunction(Navigator);
navigator = {};

; (function () {

    DeprecatedStorageQuota = function DeprecatedStorageQuota(createObj_key) {
        if (createObj_key !== qxVm.memory.$createObj_key) {
            throw new TypeError("Illegal constructor");
        }
        qxVm.memory.private_data.set(this, {})
    }; qxVm.safefunction(DeprecatedStorageQuota);

    ; (function () {
        const $safe_get_attribute = [];
        const $safe_set_attribute = [];
        const $safe_func_attribute = ['queryUsageAndQuota', 'requestQuota'];

        DeprecatedStorageQuota.prototype = {
            queryUsageAndQuota() {
                debugger;
                if (!DeprecatedStorageQuota.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            },
            requestQuota() {
                debugger;
                if (!DeprecatedStorageQuota.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            },
        }
        qxVm.rename(DeprecatedStorageQuota.prototype, "DeprecatedStorageQuota");
        qxVm.safeDescriptor_addConstructor(DeprecatedStorageQuota);
        qxVm.safe_Objattribute(DeprecatedStorageQuota, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    })();


    // 因为没有 set 属性, 所以需要一个中间变量保存
    const $attribute_map = {
        appCodeName: "Mozilla",
        appName: "Netscape",
        appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
        bluetooth: new Bluetooth(qxVm.memory.$createObj_key),
        clipboard: new Clipboard(qxVm.memory.$createObj_key),
        connection: new NetworkInformation(qxVm.memory.$createObj_key),
        cookieEnabled: true,
        credentials: new CredentialsContainer(qxVm.memory.$createObj_key),
        deviceMemory: 8,
        doNotTrack: null,
        geolocation: new Geolocation(qxVm.memory.$createObj_key),
        hardwareConcurrency: 16,
        hid: new HID(qxVm.memory.$createObj_key),
        ink: new Ink(qxVm.memory.$createObj_key),
        keyboard: new Keyboard(qxVm.memory.$createObj_key),
        language: "zh-CN",
        languages: ['zh-CN', 'zh'],
        locks: new LockManager(qxVm.memory.$createObj_key),
        managed: new NavigatorManagedData(qxVm.memory.$createObj_key),
        maxTouchPoints: 0,
        mediaCapabilities: new MediaCapabilities(qxVm.memory.$createObj_key),
        mediaDevices: new MediaDevices(qxVm.memory.$createObj_key),
        mediaSession: new MediaSession(qxVm.memory.$createObj_key),
        mimeTypes: qxVm.memory.mimeTypeArray.instantiate,
        onLine: true,
        pdfViewerEnabled: true,
        permissions: new Permissions(qxVm.memory.$createObj_key),
        platform: "Win32",
        plugins: qxVm.memory.pluginArray.instantiate,
        presentation: new Presentation(qxVm.memory.$createObj_key),
        product: "Gecko",
        productSub: "20030107",
        scheduling: new Scheduling(qxVm.memory.$createObj_key),
        serial: new Serial(qxVm.memory.$createObj_key),
        serviceWorker: new ServiceWorkerContainer(qxVm.memory.$createObj_key),
        storage: new StorageManager(qxVm.memory.$createObj_key),
        usb: new USB(qxVm.memory.$createObj_key),
        userActivation: new UserActivation(qxVm.memory.$createObj_key),
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.44",
        userAgentData: new NavigatorUAData(qxVm.memory.$createObj_key),
        vendor: "Google Inc.",
        vendorSub: "",
        virtualKeyboard: new VirtualKeyboard(qxVm.memory.$createObj_key),
        wakeLock: new WakeLock(qxVm.memory.$createObj_key),
        webdriver: false,
        webkitPersistentStorage: new DeprecatedStorageQuota(qxVm.memory.$createObj_key),
        webkitTemporaryStorage: new DeprecatedStorageQuota(qxVm.memory.$createObj_key),
        xr: new XRSystem(qxVm.memory.$createObj_key)
    };

    // 将属性更新为用户自定义属性
    qxVm.updata_envs(qxVm.default_envs['navigator'], $attribute_map)

    const $safe_get_attribute = [
        'appCodeName', 'appName', 'appVersion', 'bluetooth', 'clipboard', 'connection', 'cookieEnabled', 'credentials', 'deviceMemory', 'doNotTrack',
        'geolocation', 'hardwareConcurrency', 'hid', 'ink', 'keyboard', 'language', 'languages', 'locks', 'managed', 'maxTouchPoints', 'mediaCapabilities',
        'mediaDevices', 'mediaSession', 'mimeTypes', 'onLine', 'pdfViewerEnabled', 'permissions', 'platform', 'plugins', 'presentation', 'product',
        'productSub', 'scheduling', 'serial', 'serviceWorker', 'storage', 'usb', 'userActivation', 'userAgent', 'userAgentData', 'vendor', 'vendorSub',
        'virtualKeyboard', 'wakeLock', 'webdriver', 'webkitPersistentStorage', 'webkitTemporaryStorage', 'xr'
    ];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [
        'canShare', 'clearAppBadge', 'getBattery', 'getGamepads', 'getInstalledRelatedApps', 'getUserMedia', 'javaEnabled', 'registerProtocolHandler',
        'requestMIDIAccess', 'requestMediaKeySystemAccess', 'sendBeacon', 'setAppBadge', 'share', 'unregisterProtocolHandler', 'vibrate',
        'webkitGetUserMedia'
    ];

    Navigator.prototype = {
        get appCodeName() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.appCodeName;
        },
        get appName() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.appName;
        },
        get appVersion() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.appVersion;
        },
        get bluetooth() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.bluetooth;
        },
        canShare() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            debugger;
        },
        clearAppBadge() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            debugger;
        },
        get clipboard() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.clipboard;
        },
        get connection() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.connection;
        },
        get cookieEnabled() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.cookieEnabled;
        },
        get credentials() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.credentials;
        },
        get deviceMemory() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.deviceMemory;
        },
        get doNotTrack() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.doNotTrack;
        },
        get geolocation() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.geolocation;
        },
        getBattery() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            debugger;;
            return new Promise((resolve, reject) => {
                resolve({
                    charging: true,
                    chargingTime: Infinity,
                    dischargingTime: Infinity,
                    level: 1,
                    onchargingchange: null,
                    onchargingtimechange: null,
                    ondischargingtimechange: null,
                    onlevelchange: null

                })
            })
        },
        getGamepads() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            debugger;
        },
        getInstalledRelatedApps() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            debugger;
        },
        getUserMedia() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            debugger;
        },
        javaEnabled() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            debugger;
        },
        get hardwareConcurrency() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.hardwareConcurrency;
        },
        get hid() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.hid;
        },
        get ink() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.ink;
        },
        get keyboard() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.keyboard;
        },
        get language() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.languages;
        },
        get languages() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.languages;
        },
        get locks() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.locks;
        },
        get managed() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.managed;
        },
        get maxTouchPoints() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.maxTouchPoints;
        },
        get mediaCapabilities() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.mediaCapabilities;
        },
        get mediaDevices() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.mediaDevices;
        },
        get mediaSession() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.mediaSession;
        },
        get mimeTypes() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.mimeTypes;
        },
        get onLine() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.onLine;
        },
        get pdfViewerEnabled() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.pdfViewerEnabled;
        },
        get permissions() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.permissions;
        },
        get platform() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.platform;
        },
        get plugins() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.plugins;
        },
        get presentation() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.presentation;
        },
        get product() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.product;
        },
        get productSub() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.productSub;
        },
        registerProtocolHandler() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            debugger;
        },
        requestMIDIAccess() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            debugger;
        },
        requestMediaKeySystemAccess() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            debugger;
        },
        get scheduling() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.scheduling;
        },
        sendBeacon() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            debugger;
        },
        get serial() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            debugger;

            return $attribute_map.serial;
        },
        get serviceWorker() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.serviceWorker;
        },
        setAppBadge() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            debugger;
        },
        share() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            debugger;
        },
        get storage() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.storage;
        },
        unregisterProtocolHandler() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            debugger;
        },
        get usb() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return new qxVm.memory.$createObj_key();
        },
        get userActivation() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.userActivation;
        },
        get userAgent() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.userAgent;
        },
        get userAgentData() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.userAgentData;
        },
        get vendor() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.vendor;
        },
        get vendorSub() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.vendorSub;
        },
        vibrate() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            debugger;
        },
        get virtualKeyboard() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.virtualKeyboard;
        },
        get wakeLock() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.wakeLock;
        },
        get webdriver() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.webdriver;
        },
        webkitGetUserMedia() {
            debugger;
        },
        get webkitPersistentStorage() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.webkitPersistentStorage;
        },
        get webkitTemporaryStorage() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.webkitTemporaryStorage;
        },
        get xr() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.xr;
        },
    };
    qxVm.rename(Navigator.prototype, "Navigator");
    qxVm.safeDescriptor_addConstructor(Navigator);
    qxVm.safe_Objattribute(Navigator, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(navigator, Navigator.prototype);

})();

