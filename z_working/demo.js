const fs = require("fs");
const { VM, VMScript } = require('../qxVm_sanbox/lib/vm2/index');
const { NodeVM } = require('../qxVm_sanbox/lib/vm2/index');
const addon = require('../qxVm_sanbox/lib/addon')


const vm = new VM();
vm.setGlobal("Vm_node", {
    addon:addon
})


let aaa =`
debugger;
let document = {};
document.all = Vm_node.addon.undetectable("document.all")
document.all
document.all == "undefined"
typeof document.all
// document.all + ""
`
const script = new VMScript(aaa)

console.log(vm.run(script))



class All{
    constructor (){

    }

    static __equal__(p1, p2){
        return false
    }
}


class Point {
    constructor (x, y) {
        this.x = x
        this.y = y
    }
    static __add__(p1, p2) {
        return new Point(p1.x + p2.x, p1.y + p2.y)
    }
}


let p1 = new Point(2, 2)
let p2 = new Point(3,1)
let p3 = p1 + p2
console.log(p1, p2, p3)
console.log('(x, y) of p3 :(' + p3.x + ',' + p3.y + ')')



aa = JSON.parse('{"name":"verificationCode","version":"1.0.0","description":"","main":"verificationCode.js","scripts":{"build-dev":"export ENV=dev && rm -rf ./dist && webpack --config ./config/config.js && npm run cp-zip","build-fat":"export ENV=fat && rm -rf ./dist && webpack --config ./config/config.js && npm run cp-zip","build-prd":"export ENV=prd && rm -rf ./dist && webpack --config ./config/config.js && npm run cp-zip","cp-zip":" cd dist/ && zip -r9 dist.zip ./* && echo  \'\\\\033[32m \\n----:complete:----\\\\033[0m\'"},"keywords":["pc"],"author":"","license":"MIT","devDependencies":{"webpack":"^4.16.0","webpack-bundle-analyzer":"^3.6.0","webpack-cli":"^3.0.8","chalk":"^4.1.0","express":"^4.17.1"},"dependencies":{"art-template":"^4.13.2","art-template-loader":"1.4.3","babel-core":"^6.26.3","babel-loader":"^7.1.5","babel-plugin-transform-class-properties":"^6.24.1","babel-plugin-transform-es2015-classes":"^6.24.1","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-preset-es2015":"^6.24.1","babel-preset-es2015-loose":"^8.0.0","bluebird":"^3.5.1","console-polyfill":"^0.3.0","css-loader":"^3.4.2","es3ify-webpack-plugin":"^0.1.0","es5-shim":"^4.5.10","fetch-detector":"^1.0.1","fetch-ie8":"^1.5.0","fetch-polyfill2":"0.0.3","json3":"^3.3.2","object-create-ie8":"^1.0.0","object-defineproperty-ie8":"^1.0.1","promise-polyfill":"^8.1.3","style-loader":"^1.1.3","uglifyjs-webpack-plugin":"^2.2.0","url-loader":"^3.0.0","clean-webpack-plugin":"^3.0.0","copy-webpack-plugin":"^6.0.2","html-webpack-plugin":"^4.3.0","vue-loader":"^15.9.2","vue-template-compiler":"^2.6.11"}}')
console.log(aa)