# qxVm补环境框架简介

- 个人微信 y2783693683

- 微信公众号: y小白的笔记(https://mp.weixin.qq.com/s/GGqecHvqN54IzL3ap5c28A)
- git: https://github.com/ylw00/qxVm
- 基于 `node16`, `vm2`模块, 纯js设计一个补环境框架
- 目前的设计思路以及实现的方式,检测点相对来说是比较少的
- 因为是前期版本, 所以并没有加入动态`dom解析`
- 内部使用`弱引用`, 不会影响内存回收问题
- 优化实例产生的方式

 ## 声明

- 持续更新, 看(start/点赞量), 随心情更新
- 不会在已有的基础之上添加新的api功能
- 框架内部的dom操作不可信(开源版本没有加入dom解析), 需要重写(详情见/z_working/rs4.js)
- 运行代码在z_working目录, 格式为**Vm.js结尾, 并有两个demo



##  2023-07-26更新

- 添加完善的日志功能, 替代之前的debugger功能, 使得调试更加舒服
- 新增`QXVM_GENERATE.help` 方法, 打印帮助信息
- 添加`默认导出函数 printLog` (runConfig.logOpen=true), 一键导出
- 删除一些不必要的配置参数
- 为了避免一些问题, 框架内部`qxVm`字眼`更改`为 `lwVm`
- 隐藏环境代码, 更加简洁
- 封装事件调用函数 `lw.callListener`  // lw.callListener("load")
- 字符串处理 (./qxVm_sanbox/tools/updateDbugger.py)



## 调用方式(z_working目录)
```js
const QXVM_GENERATE = require('../qxVm_sanbox/qxVm.sanbox');

const js_code = "function get_form (){ return '' }";  // 导出函数是一定要写的
const user_config = {  // 用户配置
    isTest: true,  // 是不是测试状态, 如果是, 则会固定时间戳, 随机数
    compress: false,  // 是否压缩js, 准对检测格式化的网站
    runConfig: { proxy: false, logOpen: true },  // 运行配置
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

let result = QXVM_GENERATE.QXVm_sanbox(js_code, "get_form", user_config, );
console.log(result.get_form())
```
- 三个参数 (需要运行的目标js, 需要导出的目标函数, 个人配置)
- 框架内部均有默认值, `user_config`为空不影响运行

## 自动化生成原型文件
- 浏览器中组成字符串, 保存到本地, 具体可以看 (https://mp.weixin.qq.com/s/lDlylUGWS2qtCGBh-1RKFQ)
- 半自动方式可以看(qxVm_sanbox\tools\create_ptototype_js.py)

## qxVm最新

- 瑞数, 阿里, 腾讯, 
- https://mp.weixin.qq.com/s/Py7I6RG7UT9EtdpXlV98aA
- https://mp.weixin.qq.com/s/SSlZEMQhNxOlA3rzSNY37w

