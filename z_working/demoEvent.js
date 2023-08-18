


function demoLoad(){
    function aaa(ooo){
        console.log(ooo)
        debugger;
    }
    
    
    window.addEventListener('load', aaa)

    lwVm.callListener('load');

    function target1(){ }

    lwVm.callListener('load', {
        target: target1,
        timeStamp: 1111,
    })
}




function demoClick(){
    function bbb(ooo){
        debugger;
        console.log(ooo)
        ooo.screenY
    }
    window.addEventListener('click', bbb)

    function target1(){ }

    lwVm.callListener('click', {
        timeStamp: 1111,
    })
}


demoLoad()
demoClick()

function get_dddd(){}