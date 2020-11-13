//分线程
//计算 斐波那契数列
function fibonacci(n){
    return n<=2 ? 1 : fibonacci(n-1) + fibonacci(n-2)
}

console.log(this); //当前文件的 this 不再是 window ，所以无法操作 DOM 元素
//1. 使用表达式定义一个函数，函数名固定为 onmessage
var onmessage = function(event){
    //2. 处理数据
    console.log("分线程：从主线程中接受的数据" + event.data);
    var result = fibonacci(event.data);
    //3. 返回数据
    postMessage(result);
}