
;(function(){
    let del_attribute = ['global', 'SharedArrayBuffer', 'GLOBAL', 'root', 'VMError', 'Buffer', 'KNBCore'];
    del_attribute.forEach(function(item, index){
        delete this[item];
    })
    
})();
