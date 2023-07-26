// =====================================================================

Navigator = function Navigator(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
};
lwVm.safefunction(Navigator);
navigator = {};

; (function () {

    DeprecatedStorageQuota = function DeprecatedStorageQuota(createObj_key) {
        if (createObj_key !== lwVm.memory.$createObj_key) {
            throw new TypeError("Illegal constructor");
        }
        lwVm.memory.private_data.set(this, {})
    }; lwVm.safefunction(DeprecatedStorageQuota);

    ; (function () {
        const $safe_get_attribute = [];
        const $safe_set_attribute = [];
        const $safe_func_attribute = ['queryUsageAndQuota', 'requestQuota'];

        DeprecatedStorageQuota.prototype = {
            queryUsageAndQuota() {
                if (!DeprecatedStorageQuota.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'DeprecatedStorageQuota', 'queryUsageAndQuota', arguments, result);
            return result;
            },
            requestQuota() {
                if (!DeprecatedStorageQuota.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'DeprecatedStorageQuota', 'requestQuota', arguments, result);
            return result;
            },
        }
        lwVm.rename(DeprecatedStorageQuota.prototype, "DeprecatedStorageQuota");
        lwVm.safeDescriptor_addConstructor(DeprecatedStorageQuota);
        lwVm.safe_Objattribute(DeprecatedStorageQuota, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    })();


    // 因为没有 set 属性, 所以需要一个中间变量保存
    const $attribute_map = {
        appCodeName: "Mozilla",
        appName: "Netscape",
        appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
        bluetooth: new Bluetooth(lwVm.memory.$createObj_key),
        clipboard: new Clipboard(lwVm.memory.$createObj_key),
        connection: new NetworkInformation(lwVm.memory.$createObj_key),
        cookieEnabled: true,
        credentials: new CredentialsContainer(lwVm.memory.$createObj_key),
        deviceMemory: 8,
        doNotTrack: null,
        geolocation: new Geolocation(lwVm.memory.$createObj_key),
        hardwareConcurrency: 16,
        hid: new HID(lwVm.memory.$createObj_key),
        ink: new Ink(lwVm.memory.$createObj_key),
        keyboard: new Keyboard(lwVm.memory.$createObj_key),
        language: "zh-CN",
        languages: ['zh-CN', 'zh'],
        locks: new LockManager(lwVm.memory.$createObj_key),
        managed: new NavigatorManagedData(lwVm.memory.$createObj_key),
        maxTouchPoints: 0,
        mediaCapabilities: new MediaCapabilities(lwVm.memory.$createObj_key),
        mediaDevices: new MediaDevices(lwVm.memory.$createObj_key),
        mediaSession: new MediaSession(lwVm.memory.$createObj_key),
        mimeTypes: lwVm.memory.mimeTypeArray.instantiate,
        onLine: true,
        pdfViewerEnabled: true,
        permissions: new Permissions(lwVm.memory.$createObj_key),
        platform: "Win32",
        plugins: lwVm.memory.pluginArray.instantiate,
        presentation: new Presentation(lwVm.memory.$createObj_key),
        product: "Gecko",
        productSub: "20030107",
        scheduling: new Scheduling(lwVm.memory.$createObj_key),
        serial: new Serial(lwVm.memory.$createObj_key),
        serviceWorker: new ServiceWorkerContainer(lwVm.memory.$createObj_key),
        storage: new StorageManager(lwVm.memory.$createObj_key),
        usb: new USB(lwVm.memory.$createObj_key),
        userActivation: new UserActivation(lwVm.memory.$createObj_key),
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.44",
        userAgentData: new NavigatorUAData(lwVm.memory.$createObj_key),
        vendor: "Google Inc.",
        vendorSub: "",
        virtualKeyboard: new VirtualKeyboard(lwVm.memory.$createObj_key),
        wakeLock: new WakeLock(lwVm.memory.$createObj_key),
        webdriver: false,
        webkitPersistentStorage: new DeprecatedStorageQuota(lwVm.memory.$createObj_key),
        webkitTemporaryStorage: new DeprecatedStorageQuota(lwVm.memory.$createObj_key),
        xr: new XRSystem(lwVm.memory.$createObj_key)
    };

    // 将属性更新为用户自定义属性
    lwVm.updata_envs(lwVm.default_envs['navigator'], $attribute_map)

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
            let result = $attribute_map.appCodeName;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'appCodeName', arguments, result);
            return result;
        },
        get appName() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.appName;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'appName', arguments, result);
            return result;
        },
        get appVersion() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.appVersion;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'appVersion', arguments, result);
            return result;
        },
        get bluetooth() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.bluetooth;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'bluetooth', arguments, result);
            return result;
        },
        canShare() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Navigator', 'canShare', arguments, result);
            return result;
        },
        clearAppBadge() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Navigator', 'clearAppBadge', arguments, result);
            return result;
        },
        get clipboard() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.clipboard;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'clipboard', arguments, result);
            return result;
        },
        get connection() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.connection;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'connection', arguments, result);
            return result;
        },
        get cookieEnabled() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.cookieEnabled;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'cookieEnabled', arguments, result);
            return result;
        },
        get credentials() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.credentials;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'credentials', arguments, result);
            return result;
        },
        get deviceMemory() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.deviceMemory;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'deviceMemory', arguments, result);
            return result;
        },
        get doNotTrack() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.doNotTrack;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'doNotTrack', arguments, result);
            return result;
        },
        get geolocation() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.geolocation;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'geolocation', arguments, result);
            return result;
        },
        getBattery() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = new Promise((resolve, reject) => {
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
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Navigator', 'getBattery', arguments, result);
            return result;
        },
        getGamepads() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Navigator', 'getGamepads', arguments, result);
            return result;
        },
        getInstalledRelatedApps() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Navigator', 'getInstalledRelatedApps', arguments, result);
            return result;
        },
        getUserMedia() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Navigator', 'getUserMedia', arguments, result);
            return result;
        },
        javaEnabled() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Navigator', 'javaEnabled', arguments, result);
            return result;
        },
        get hardwareConcurrency() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.hardwareConcurrency;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'hardwareConcurrency', arguments, result);
            return result;
        },
        get hid() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.hid;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'hid', arguments, result);
            return result;
        },
        get ink() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.ink;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'ink', arguments, result);
            return result;
        },
        get keyboard() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.keyboard;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'keyboard', arguments, result);
            return result;
        },
        get language() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.languages;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'language', arguments, result);
            return result;
        },
        get languages() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.languages;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'languages', arguments, result);
            return result;
        },
        get locks() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.locks;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'locks', arguments, result);
            return result;
        },
        get managed() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.managed;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'managed', arguments, result);
            return result;
        },
        get maxTouchPoints() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.maxTouchPoints;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'maxTouchPoints', arguments, result);
            return result;
        },
        get mediaCapabilities() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.mediaCapabilities;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'mediaCapabilities', arguments, result);
            return result;
        },
        get mediaDevices() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.mediaDevices;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'mediaDevices', arguments, result);
            return result;
        },
        get mediaSession() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.mediaSession;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'mediaSession', arguments, result);
            return result;
        },
        get mimeTypes() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.mimeTypes;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'mimeTypes', arguments, result);
            return result;
        },
        get onLine() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onLine;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'onLine', arguments, result);
            return result;
        },
        get pdfViewerEnabled() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.pdfViewerEnabled;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'pdfViewerEnabled', arguments, result);
            return result;
        },
        get permissions() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.permissions;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'permissions', arguments, result);
            return result;
        },
        get platform() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.platform;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'platform', arguments, result);
            return result;
        },
        get plugins() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.plugins;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'plugins', arguments, result);
            return result;
        },
        get presentation() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.presentation;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'presentation', arguments, result);
            return result;
        },
        get product() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.product;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'product', arguments, result);
            return result;
        },
        get productSub() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.productSub;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'productSub', arguments, result);
            return result;
        },
        registerProtocolHandler() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Navigator', 'registerProtocolHandler', arguments, result);
            return result;
        },
        requestMIDIAccess() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Navigator', 'requestMIDIAccess', arguments, result);
            return result;
        },
        requestMediaKeySystemAccess() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Navigator', 'requestMediaKeySystemAccess', arguments, result);
            return result;
        },
        get scheduling() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.scheduling;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'scheduling', arguments, result);
            return result;
        },
        sendBeacon() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Navigator', 'sendBeacon', arguments, result);
            return result;
        },
        get serial() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };

            let result = $attribute_map.serial;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'serial', arguments, result);
            return result;
        },
        get serviceWorker() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.serviceWorker;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'serviceWorker', arguments, result);
            return result;
        },
        setAppBadge() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Navigator', 'setAppBadge', arguments, result);
            return result;
        },
        share() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Navigator', 'share', arguments, result);
            return result;
        },
        get storage() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.storage;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'storage', arguments, result);
            return result;
        },
        unregisterProtocolHandler() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Navigator', 'unregisterProtocolHandler', arguments, result);
            return result;
        },
        get usb() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = new lwVm.memory.$createObj_key();;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'usb', arguments, result);
            return result;
        },
        get userActivation() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.userActivation;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'userActivation', arguments, result);
            return result;
        },
        get userAgent() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.userAgent;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'userAgent', arguments, result);
            return result;
        },
        get userAgentData() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.userAgentData;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'userAgentData', arguments, result);
            return result;
        },
        get vendor() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.vendor;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'vendor', arguments, result);
            return result;
        },
        get vendorSub() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.vendorSub;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'vendorSub', arguments, result);
            return result;
        },
        vibrate() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Navigator', 'vibrate', arguments, result);
            return result;
        },
        get virtualKeyboard() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.virtualKeyboard;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'virtualKeyboard', arguments, result);
            return result;
        },
        get wakeLock() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.wakeLock;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'wakeLock', arguments, result);
            return result;
        },
        get webdriver() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.webdriver;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'webdriver', arguments, result);
            return result;
        },
        webkitGetUserMedia() {
        },
        get webkitPersistentStorage() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.webkitPersistentStorage;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'webkitPersistentStorage', arguments, result);
            return result;
        },
        get webkitTemporaryStorage() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.webkitTemporaryStorage;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'webkitTemporaryStorage', arguments, result);
            return result;
        },
        get xr() {
            if (!Navigator.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.xr;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Navigator', 'xr', arguments, result);
            return result;
        },
    };
    lwVm.rename(Navigator.prototype, "Navigator");
    lwVm.safeDescriptor_addConstructor(Navigator);
    lwVm.safe_Objattribute(Navigator, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(navigator, Navigator.prototype);

})();

