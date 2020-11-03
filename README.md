# 第一章 基础总结深入

## 1.1 数据类型

### 1.1.1 分类

#### 基本(值)类型

1. String：任意字符串
2. Number：任意的数字
3. boolean：true / false
4. undefined：undefined
5. null：null

#### 对象(引用)类型

1. Object：任意对象
2. Function：可以执行的对象
3. Array：具有 `数值下标、内部数据有序的` 特点的对象

### 1.1.2 判断

1. typeof：返回对应数据类型的**字符串**
   - 支持判断的数据类型：undefined / number / string / boolean / function
   - 不能判断：null array object
2. instanceof：判断对象具体的类型
   - 支持判断的数据类型：引用数据类型
3. === / ==
   - 支持判断的数据类型：undefined / null

### 1.1.3 类型 / 实例 对象

```js
/* 
1. 实例与类型
- 实例:实例对象
- 类型:类型对象
*/
function Person(name, age) { //构造函数 - 类型对象
    this.name = name;
    this.age = age;
}
var p = new Person("EMT!!!", 16); //通过类型创建出来的对象变量 - 实例对象
```

### 1.1.4 undefined & null

#### 二者的区别

- undefined：定义了变量但未赋值
- null：定义了变量但赋值为 null

#### null的使用

1. 初始赋值，表明将要赋值为对象
2. 结束前，让对象变量称为垃圾对象(被垃圾回收器回收)

#### 严格区分变量类型和数据类型

- 数据的类型
  1. 基本类型
  2. 对象类型
- 变量的类型(变量内存值的类型)
  1. 基本类型：保存的是 `基本类型` 的数据
  2. 引用类型：保存的地址值(该地址值指向 `对象类型` 的数据)

## 1.2 数据 - 变量 - 内存

### 1.2.1 说明

#### 数据

- 存储在内存中代表特定信息，本质上是 0101...
- 特点
  1. 可传递
  2. 可运算
- (前端)一切皆数据

#### 内存

- 内存条通电后产生的可存储数据的空间(临时的)
- 内存的产生和死亡：内存条 ==>(通电) 产生内存空间 ==> 存取数据 ==> 断电 ==> 内存空间和数据都会消息
- 一块小内存的 2 个数据
  - 内部**存储的数据**
  - 对应**内存块的地址值**
- 内存分类
  - 栈：存放全局变量 / 局部变量
  - 堆：存放对象

#### 变量

- 可以变化的量，由变量名和变量值组成
- 每个变量都对应一块小内存空间，**变量名用来查询对应的内存，变量值就是内存中保存的数据**

#### 三者关系 

- 内存用来存储数据的空间
- 变量是内存的标识

### 1.2.2 赋值与内存

1. 如果变量值是 基本数据类型 ，保存的就是**数据本身**
2. 如果变量值是 引用数据类型 ，保存的就是**引用数据的地址值**
3. 如果变量值是 一个变量A，保存的就是变量A对应的变量值(内存内容)

### 1.2.3 引用变量赋值

1. 多个引用变量指向同一个对象，其中一个对象修改对象中的数据，其他所有引用变量读取的就是修改之后的数据

   ```javascript
   var a = {name:'Tom'};
   var b = a;
   a.name = "EMT!!";
   console.log(b.name); //EMT!!
   ```

2. 多个引用变量指向同一个对象A，修改其中一个对象指向其他对象，其他所有引用变量依然指向对象A

   ```javascript
   var a = {name:'EMT!!'};
   var b = a;
   a = {name:"Knight"};
   console.log(a.name,b.name); //Knight EMT!!
   ```

3. JS 调用函数时传递变量参数时

   理解1：使用的是 `值(基本值 / 地址值)传递`

   理解2：可能是`值传递`，也可能是`引用传递(地址值)`

   ```js
   var a = 3;
   function fn(a){
       a = a + 1;
   }
   fn(a);
   console.log(a); //3
   ```

### 1.2.4 JS引擎管理内存

#### 内存生命周期

1. 分配小内存空间，得到它的使用权
2. 存读数据，可以反复进行操作
3. 释放小内存空间

#### 释放内存

- 全局变量：在当前运行结束前都不会被释放
- 局部变量：对应函数执行完后**自动释放**
- 对象：成为垃圾对象 ==> 由**垃圾回收器**进行回收

```javascript
var a = 3;
var obj = {};
/*
即使定义为 undefined ，obj全局变量来所占的内存也不会被释放
对应的所指向的对象，再成为垃圾对象后，由 垃圾回收器 回收 
*/
obj = undefined;

function fn(){
    var b = {};
}
fn();
/*
在函数执行结束后，变量 b 所占的内存空间会被自动释放
对应的所指向的对象，再成为垃圾对象后，由 垃圾回收器 回收 
*/
```

## 1.3 对象

### 1.3.1 基本概念

#### 说明

- 多个数据的封装体 
- 用来保存多个数据的容器
- 一个对象代表现实生活中的一个事物

#### 使用

统一管理多个数据  

#### 组成

- 属性：属性名(字符串)和属性值(任意类型)组成
- 方法：属性值为函数的属性

#### 访问对象的内部数据

1. 通过 **.运算符**访问属性：编码简单，但不通用

2. 通过 **['属性名']** 访问属性：编码复杂，但通用

   ```javascript
   /* 两种方式的对比 */
   var obj = {
       name: "Tom",
       age: 16,
       setName: function (name) {
           this.name = name;
       },
       setAge: function (age) {
           this.age = age;
       }
   };
   /* 方式1：通过 **.运算符**访问属性：编码简单，但不通用  */
   obj.setName("EMT!!");
   console.log(obj.name); //EMT!!
   /* 方式2：通过 **['属性名']** 访问属性：编码复杂，但通用 */
   obj['setAge'](17);
   console.log(obj['age']); //17
   ```

### 1.3.2 使用['属性名']访问属性 

- 属性名中保存特殊字符时

- 属性名不确定

  ```javascript
  /* 使用['属性名']访问属性的情况 */
  /* 情况1：属性名中保存特殊字符时 */
  var obj = {};
  // obj.context-type = "text/json"; //包含特殊字符-,无法使用 .运算符直接访问
  obj['context-type'] = 'text/json';
  console.log(obj['context-type']); //text/json
  /* 情况2：属性名不确定 */
  var propName = "name";
  // obj.propName = "ABC"; //这样保存的数据，属性名是 propName，而不是 name
  obj[propName] = "ABC";
  console.log(obj[propName]); //ABC
  ```

## 1.4 函数

### 1.4.1 基本概念

#### 说明

- 实现特定功能的 n 条语句的封装体
- 只有函数时可以执行的，其他类型的数据不能执行

#### 使用 

- 提高代码的复用率
- 体现了封装性 - 便于阅读交流

#### 定义

1. 函数声明
2. 表达式

#### 执行

1. 使用 `函数名()` 直接调用
2. 通过 `对象.方法名()` 调用对应的函数
3. 通过 `new 构造函数名()` 调用对应的构造函数
4. `函数名.apply/call(obj)` 让该函数临时成为 obj 对象的方法属性执行

### 1.4.2 回调函数

#### 定义

1. 程序员 定义的
2. 没有调用
3. 但最终执行了

#### 常见的回调函数

1. dom 事件回调函数

2. 定时器回调函数

3. ajax 请求回调函数

4. 生产周期回调函数

5. ```html
   <body>
       <button id="btn">测试回调函数</button>
   </body>
   <script>
       var btn = document.querySelector("#btn");
   
       //1. dom事件回调函数
       btn.onclick = function () {
           alert(this.innerHTML);
       };
   
       //2. 定时器回调函数
       setTimeout(function () {
           alert("定时器回调函数")
       }, 2000)
   </script>
   ```

   

### 1.4.3 IIFE

> 与 **匿名函数自调用** 是同一个概念

#### 作用

1. 隐藏实现 - 对于外部程序来说

2. 不会污染外部(全局)命名空间

3. 可以用来编写 JS 模块

4. ```javascript
   /* 匿名函数自调用 */
   (function () {
       var a = 3;
       //隐藏实现
       function test() {
           console.log(++a);
       }
       window.$ = function () { //对外暴露一个全局函数
           return {
               test: test
           }
       }
   })();
   var a = 7;
   $().test(); //$ 是一个函数，执行后返回一个对象
   console.log(a); //不污染全局命名空间
   ```

   

### 1.4.4 函数中的this

#### 说明

- 任何函数的本质都是通过某个对象进行调用的，如果没有明确指定就是 window
- 所有函数内部都有一个变量 this
- this 就是调用该函数的对象

#### 确定 this 的值

- 直接调用
- 通过对象调用
- 使用构造函数调用 this 为新创建的对象
- 通过 call ./ apply 方法执行函数的 this 为指定的 obj

```javascript
function Person(color) {
        console.log(this);
        this.color = color;
        this.getColor = function () {
            console.log(this);
            return this.color;
        };
        this.setColor = function (color) {
            console.log(this);
            this.color = color;
        };
    }

    Person("red"); //this ==> window

    var p = new Person("yello"); //this ==> p

    p.getColor(); //this ==> p

    var obj = {};
    p.setColor.call(obj, "black"); //this ==> obj

    var test = p.setColor;
    test(); //this ==> window

    function fun1() {
        function fun2() {
            console.log(this);
        }

        fun2();
    }

    fun1();  //this ==> window
```

# 第五章 补充

## 5.1 分号问题

- js 一条语句的后面可以不加分号

- 是否加分号是个人的编码风格问题，没有具体的标准

- 在下列两种情况时需要加分号

  1. 小括号开头时，前一条语句要加分号
  2. 中方括号开头时，前一条语句要加分号

- 解决方法：

  1. 按需要在前一条语句结尾加分号
  2. 在行首加分号

- 在 JS 文件中的**第一条语句的行首**加上分号

  在开发上线时，我们一般需要对 JS 文件进行**合并压缩**的操作

  - 合并：将多个 JS 文件合并成一个 JS 文件
  - 压缩：将 JS 文件中多余的空格，换行等不需要的东西删除，同时将函数名替换成简单的 abcd...(在没有和变量名冲突的情况下)，不影响使用



  