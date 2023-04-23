## qxVm(历史)
- 微信公众号: y小白的笔记(https://mp.weixin.qq.com/s/GGqecHvqN54IzL3ap5c28A)
- git: https://github.com/ylw00/qxVm
- 基于`vm2`模块使用js设计一个补环境框架
- `没有完全补完`, 主要提供思路以及壳子的设计, 剩下的就是重复性的工作, 
- 目前的设计思路以及实现的方式,检测点相对来说是比较少的
- 因为是前期版本, 所以并没有加入`dom解析`,属性的方法实现
- 内部使用`弱引用`, 不会影响内存回收问题以及`new出来的dom节点公用一块内存问题`

## 调用方式
```js
const QXVM_GENERATE = require('../qxVm_sanbox/qxVm.sanbox');

const js_code = "function get_form (){ return '' }";  // 导出函数是一定要写的
const user_config = {  // 用户配置
    isTest: true,  // 是不是测试状态, 如果是, 则会固定时间戳, 随机数
    compress: false,  // 是否压缩js, 准对检测格式化的网站
    proxy_config: { proxy: false, proxy_proto: false, print_log: true },  // 是否挂代理
    window_attribute: {},
    env: {  // 浏览器环境
        canvas: "",
        plugin: [
            { description: "Portable Document Format", filename: "internal-pdf-viewer", name: "Chrome PDF Plugin", MimeTypes: [{ description: "Portable Document Format", suffixes: "pdf", type: "application/x-google-chrome-pdf" }] }
        ],
        navigator: {
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.55"
        },
        location: { },
        document: { referrer: ""}
    }
}

let result = QXVM_GENERATE.QXVm_sanbox(js_code, "get_form", user_config);
console.log(result.get_form())
```
- 三个参数 (需要运行的目标js, 需要导出的目标函数, 个人配置)
- 框架内部均有默认值, `user_config`为空不影响运行

## 自动化生成原型文件
- 浏览器中组成字符串, 保存到本地, 具体可以看 (https://mp.weixin.qq.com/s/lDlylUGWS2qtCGBh-1RKFQ)
- 半自动方式可以看(qxVm_sanbox\tools\create_ptototype_js.py)

## qxVm优化方向(当然新版都是已经实现的)
- debugger 改为 日志打印, 并加入日志开关
- 加入dom解析 可以套壳jsdom, 我是使用了cheerio
- 优化堆栈替换, 防止检测堆栈
- 加入动态更换框架内浏览器环境的逻辑(保证框架只加载一次)
- 加入内部指纹库, 可以随意更改指纹
- 套壳 canvas, 实现canvas指纹生成

## qxVm(最新, 没有开源)

- 框架加载速度 200ms左右
- dom解析
- form特性
![](https://files.mdnice.com/user/23430/b583c38d-b2e2-454b-960d-657d15d0b101.png)

