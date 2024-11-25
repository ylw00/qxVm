# qxVm补环境框架简介

- 个人微信 y278369368
- 微信公众号: y小白的笔记(https://mp.weixin.qq.com/s/GGqecHvqN54IzL3ap5c28A)
- git: https://github.com/ylw00/qxVm
- 基于 `node16`, `vm2`模块, 纯js设计一个补环境框架
- 目前的设计思路以及实现的方式,检测点相对来说是比较少的
- 因为是前期版本, 所以并没有加入动态`dom解析`
- 内部使用`弱引用`, 不会影响内存回收问题
- 优化实例产生的方式

 ## 声明(必看)

- (可忽略)持续更新, 看start量和赞助随心情更新
- 不会把同一种类型的所以api都实现,但是该有的必须有, 毕竟我做这个没有任何收益
- 不会在已有的基础之上添加新的api功能
- 框架内部的dom操作不可信(开源版本没有加入dom解析), 需要重写(详情见/z_working/rs4.js)
- 推荐`vscode`插件`Code Runner` 右键运行 
- 工作代码在z_working目录, 有两个demo, 入口文件格式为**Vm.js结尾



## 2023-08-18更新

- 封装浏览器事件得主动调用函数`lwVm.callListener`(只实现load, 以及鼠标事件, 其他同理, 自己去实现)
- 注意, `不用的事件参数对应不同的原型`, 实现之前需要先去浏览器测试明白
- 完善浏览器事件对需要得参数, 具体使用方式看 demoEventVm.js, demoEvent.js
- 增加一些常用方法封装导出, 便于对框架内部得状态做更新
- 增加给event实例添加isTrusted属性得功能函数`protectAddIsTrusted`
- 增加自定义log得功能函数`logAddMyLog`
- 增加开启nodeServer功能封装, 便于在某些情况加开放api, 具体使用方式看 demoServerVm.js, demoServer.js



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

## qxVm最新(暂时没有开源)

- 瑞数, 阿里, 腾讯, 
- https://mp.weixin.qq.com/s/Py7I6RG7UT9EtdpXlV98aA
- https://mp.weixin.qq.com/s/SSlZEMQhNxOlA3rzSNY37w


## 如果觉得框架还不错, 可以给作者一些动力

![a91fb35e1f5076630bb9f0f06424d57_536x729](https://github.com/ylw00/qxVm/assets/69897076/15d181dd-2dc0-46f0-85ce-e149be4c5c57)


