/*
暴露给用户的
更改浏览器的某些参数
在此文件下的代码 必须要框架run方法执行后执行
*/


//lwVm.z_sanbox.memory.Plugin.new({description:"npAliSSOLogin Plugin",filename:"npalissologin.dll",name:"AliSSOLogin plugin",MimeTypes:[{description: "AliSSOLogin",suffixes: "AliSSOLogin",type: "application/npalissologin"},{description: "AliSSOLogin1",suffixes: "AliSSOLogin",type: "application1/npalissologin"}]})
lwVm.config_plugin = function (data) {
    if (lwVm.memory.pluginArray.temp === undefined) {
        lwVm.memory.pluginArray.temp = [];
    }
    lwVm.memory.pluginArray.temp.push(data);
};

// 将用户配置的环境放到自己的内存
lwVm.config_envs = function(data){
    /*
    lwVm.z_sanbox.config_envs({"navigator":{"userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.44"}})
    */
    for (const key in data) {
        lwVm.updata_envs(data[key], lwVm.default_envs[key])
    }
}