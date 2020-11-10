//05_闭包的应用_自定义JS模块 - 使用方式2
;(function(window){
    //定义私有数据
    var msg = 'EMT!!';
    //定义操作私有数据的函数
    function doSomething(){
        console.log("doSomething "+ msg.toUpperCase());
    }
    function doOtherthing(){
        console.log("doOthering " + msg.toLowerCase());
    }
    //设置(返回)一个向外暴露的对象
    window.MyModule2 = {
        doSomething:doSomething,
        doOtherthing:doOtherthing
    }
})(window) //这里传入 window 全局对象，方便代码压缩