window = this;
WorkWindow = Object.create(window)
Workobj = [];
jsonify = JSON.stringify;
Blobobjects = new Map;
function Blob(a, b) {
    console.log("Blob.length=" + a.length)
    this.code = a[0];
    this.type = "";
    this.size = this.code.length;
}

function Worker(e) {
    var workobj = Object.create(WorkWindow)
    workobj.calleThis = this;
    workobj.onmessage = null;
    workobj.postMessage = function(msg) {
		typeof msg === "string" ? console.log("postMessage2::>>"+msg) : console.log("postMessage2::>>"+jsonify(msg)+"|"+this.calleThis.onmessage)
        this.calleThis.onmessage({data:msg})
    }
    // let a = e.match(/[^/]+$/)[0];
    const code = e;
    // const index = Workobj.push(callobj) - 1;
    const f = "var self=this,glabol=this,window=this;"
    this.code_function = Function(f + code).bind(workobj);
    this._onmsg = null;
    Object.defineProperty(this,"onmessage",{
        set:function(a){
          console.log("set onmessage",a);
          this._onmsg = a;
          this.code_function();
        },
        get:function(){
          console.log('get onmessage')
          return this._onmsg
        }
    })
	this.onerror = null;
    this.postMessage = function(msg) {
		typeof msg === "string" ? console.log("postMessage2::>>"+msg) : console.log("postMessage2::>>"+jsonify(msg)+"|"+this.calleThis.onmessage)
        workobj.onmessage({data:msg})
    };
};






//调用如下  


!function(){
//自己整个Blob对象， 下面new Worker（URL.create(new Blob([js代码]))）这样才是正确方式，下面是测试 直接Worker填代码

var work = new Worker(`!function (t) { var n = {}; function e(r) { if (n[r]) return n[r].exports; var o = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports } e.m = t, e.c = n, e.d = function (t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r }) }, e.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, e.t = function (t, n) { if (1 & n && (t = e(t)), 8 & n) return t; if (4 & n && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (e.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t) for (var o in t) e.d(r, o, function (n) { return t[n] }.bind(null, o)); return r }, e.n = function (t) { var n = t && t.__esModule ? function () { return t["default"] } : function () { return t }; return e.d(n, "a", n), n }, e.o = function (t, n) { return Object.prototype.hasOwnProperty.call(t, n) }, e.p = "", e(e.s = 0) }([function (t, n, e) { "use strict"; var r = this && this.__assign || function () { return (r = Object.assign || function (t) { for (var n, e = 1, r = arguments.length; e < r; e++)for (var o in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]); return t }).apply(this, arguments) }, o = this && this.__rest || function (t, n) { var e = {}; for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]); if (null != t && "function" == typeof Object.getOwnPropertySymbols) { var o = 0; for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]) } return e }, u = this && this.__importDefault || function (t) { return t && t.__esModule ? t : { "default": t } }; n.__esModule = !0; var f = e(1), a = u(e(2)), i = self; function c(t, n) { i.postMessage({ type: t, data: n }) } c(a["default"].WORKER_READY); i.onmessage = function (t) { var n = t.data; if (n.type === a["default"].RUN_TASK) { var e = n.data, u = e.taskId, i = o(e, ["taskId"]); c(a["default"].TASK_RESULT, r(r({}, f.getWorkloadResult(i)), { taskId: u })) } }, n["default"] = function () { } }, function (t, n, e) { "use strict"; function r(t, n) { var e = (65535 & t) + (65535 & n); return (t >> 16) + (n >> 16) + (e >> 16) << 16 | 65535 & e } function o(t, n, e, o, u, f) { return r(function (t, n) { return t << n | t >>> 32 - n }(r(r(n, t), r(o, f)), u), e) } function u(t, n, e, r, u, f, a) { return o(n & e | ~n & r, t, n, u, f, a) } function f(t, n, e, r, u, f, a) { return o(n & r | e & ~r, t, n, u, f, a) } function a(t, n, e, r, u, f, a) { return o(n ^ e ^ r, t, n, u, f, a) } function i(t, n, e, r, u, f, a) { return o(e ^ (n | ~r), t, n, u, f, a) } function c(t, n) { var e, o, c, l, s; t[n >> 5] |= 128 << n % 32, t[14 + (n + 64 >>> 9 << 4)] = n; var d = 1732584193, p = -271733879, g = -1732584194, _ = 271733878; for (e = 0; e < t.length; e += 16)o = d, c = p, l = g, s = _, p = i(p = i(p = i(p = i(p = a(p = a(p = a(p = a(p = f(p = f(p = f(p = f(p = u(p = u(p = u(p = u(p, g = u(g, _ = u(_, d = u(d, p, g, _, t[e], 7, -680876936), p, g, t[e + 1], 12, -389564586), d, p, t[e + 2], 17, 606105819), _, d, t[e + 3], 22, -1044525330), g = u(g, _ = u(_, d = u(d, p, g, _, t[e + 4], 7, -176418897), p, g, t[e + 5], 12, 1200080426), d, p, t[e + 6], 17, -1473231341), _, d, t[e + 7], 22, -45705983), g = u(g, _ = u(_, d = u(d, p, g, _, t[e + 8], 7, 1770035416), p, g, t[e + 9], 12, -1958414417), d, p, t[e + 10], 17, -42063), _, d, t[e + 11], 22, -1990404162), g = u(g, _ = u(_, d = u(d, p, g, _, t[e + 12], 7, 1804603682), p, g, t[e + 13], 12, -40341101), d, p, t[e + 14], 17, -1502002290), _, d, t[e + 15], 22, 1236535329), g = f(g, _ = f(_, d = f(d, p, g, _, t[e + 1], 5, -165796510), p, g, t[e + 6], 9, -1069501632), d, p, t[e + 11], 14, 643717713), _, d, t[e], 20, -373897302), g = f(g, _ = f(_, d = f(d, p, g, _, t[e + 5], 5, -701558691), p, g, t[e + 10], 9, 38016083), d, p, t[e + 15], 14, -660478335), _, d, t[e + 4], 20, -405537848), g = f(g, _ = f(_, d = f(d, p, g, _, t[e + 9], 5, 568446438), p, g, t[e + 14], 9, -1019803690), d, p, t[e + 3], 14, -187363961), _, d, t[e + 8], 20, 1163531501), g = f(g, _ = f(_, d = f(d, p, g, _, t[e + 13], 5, -1444681467), p, g, t[e + 2], 9, -51403784), d, p, t[e + 7], 14, 1735328473), _, d, t[e + 12], 20, -1926607734), g = a(g, _ = a(_, d = a(d, p, g, _, t[e + 5], 4, -378558), p, g, t[e + 8], 11, -2022574463), d, p, t[e + 11], 16, 1839030562), _, d, t[e + 14], 23, -35309556), g = a(g, _ = a(_, d = a(d, p, g, _, t[e + 1], 4, -1530992060), p, g, t[e + 4], 11, 1272893353), d, p, t[e + 7], 16, -155497632), _, d, t[e + 10], 23, -1094730640), g = a(g, _ = a(_, d = a(d, p, g, _, t[e + 13], 4, 681279174), p, g, t[e], 11, -358537222), d, p, t[e + 3], 16, -722521979), _, d, t[e + 6], 23, 76029189), g = a(g, _ = a(_, d = a(d, p, g, _, t[e + 9], 4, -640364487), p, g, t[e + 12], 11, -421815835), d, p, t[e + 15], 16, 530742520), _, d, t[e + 2], 23, -995338651), g = i(g, _ = i(_, d = i(d, p, g, _, t[e], 6, -198630844), p, g, t[e + 7], 10, 1126891415), d, p, t[e + 14], 15, -1416354905), _, d, t[e + 5], 21, -57434055), g = i(g, _ = i(_, d = i(d, p, g, _, t[e + 12], 6, 1700485571), p, g, t[e + 3], 10, -1894986606), d, p, t[e + 10], 15, -1051523), _, d, t[e + 1], 21, -2054922799), g = i(g, _ = i(_, d = i(d, p, g, _, t[e + 8], 6, 1873313359), p, g, t[e + 15], 10, -30611744), d, p, t[e + 6], 15, -1560198380), _, d, t[e + 13], 21, 1309151649), g = i(g, _ = i(_, d = i(d, p, g, _, t[e + 4], 6, -145523070), p, g, t[e + 11], 10, -1120210379), d, p, t[e + 2], 15, 718787259), _, d, t[e + 9], 21, -343485551), d = r(d, o), p = r(p, c), g = r(g, l), _ = r(_, s); return [d, p, g, _] } function l(t) { var n, e = ""; for (n = 0; n < 32 * t.length; n += 8)e += String.fromCharCode(t[n >> 5] >>> n % 32 & 255); return e } function s(t) { var n, e = []; for (e[(t.length >> 2) - 1] = void 0, n = 0; n < e.length; n += 1)e[n] = 0; for (n = 0; n < 8 * t.length; n += 8)e[n >> 5] |= (255 & t.charCodeAt(n / 8)) << n % 32; return e } function d(t) { var n, e, r = "0123456789abcdef", o = ""; for (e = 0; e < t.length; e += 1)n = t.charCodeAt(e), o += r.charAt(n >>> 4 & 15) + r.charAt(15 & n); return o } function p(t) { return unescape(encodeURIComponent(t)) } function g(t) { return function (t) { return l(c(s(t), 8 * t.length)) }(p(t)) } function _(t, n) { return function (t, n) { var e, r, o = s(t), u = [], f = []; for (u[15] = f[15] = void 0, o.length > 16 && (o = c(o, 8 * t.length)), e = 0; e < 16; e += 1)u[e] = 909522486 ^ o[e], f[e] = 1549556828 ^ o[e]; return r = c(u.concat(s(n)), 512 + 8 * n.length), l(c(f.concat(r), 640)) }(p(t), p(n)) } function v(t, n, e) { return n ? e ? _(n, t) : function (t, n) { return d(_(t, n)) }(n, t) : e ? g(t) : function (t) { return d(g(t)) }(t) } n.__esModule = !0, n.getWorkloadResult = n.md5 = void 0, n.md5 = v, n.getWorkloadResult = function (t) { for (var n = t.nonce, e = t.target, r = +new Date, o = 0; o <= 3e5 && v("" + n + o) !== e;)o += 1; return { ans: o, duration: +new Date - r } } }, function (t, n, e) { "use strict"; n.__esModule = !0; n["default"] = { WORKER_READY: "WORKER_READY", RUN_TASK: "RUN_TASK", TASK_RESULT: "TASK_RESULT" } }]);`)
work.onmessage = function(msg){console.log('w msg',msg)}
console.log(work.onmessage)
}()
