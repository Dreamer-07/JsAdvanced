//05_闭包的应用_自定义JS模块
function MyModule(){
    //定义私有数据
    var msg = 'EMT!!';
    //定义操作私有数据的函数
    function doSomething(){
        console.log("doSomething "+ msg.toUpperCase());
    }
    function doOtherthing(){
        console.log("doOthering " + msg.toLowerCase());
    }
    //返回一个对外暴露的对象(给外部使用的方法)
    return {
        doSomething:doSomething,
        doOtherthing:doOtherthing
    }
}