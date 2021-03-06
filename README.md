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

```javascript
//1. 基本数据类型
//1.1 undefined
var a;
// typedef 返回对应数据类型的字符串
console.log(a, typeof a); //undefined "undefined"
console.log(undefined === 'undefined'); //false
// 使用 === 和  typedef 判断 undefined 数据类型
console.log(typeof a === 'undefined', a === undefined); //true true
//1.2 number
a = 4;
console.log(typeof a, typeof a === 'number'); //'number' true
//1.3 string
a = '巴御前';
console.log(typeof a, typeof a === 'string'); //'string' true
//1.4 boolean
a = false;
console.log(typeof a, typeof a === 'boolean'); //'boolean' true
//1.5 null
a = null;
console.log(typeof a, a === null); // 'object' true - 不能使用typeof进行判断，因为其类型为 null

console.log("----------2 引用数据类型");
//2. 引用数据类型
var b1 = {
    b2: [1, 'emt', console.log],
    b3: function () {
        console.log('emt!!!!');
        return function () {
            return "OHHHHH";
        };
    }
};
console.log(typeof b1, b1 instanceof Object, b1 === Object); //object true false
console.log(typeof b1.b2, b1.b2 instanceof Array, b1.b2 instanceof Object); //object true true
console.log(typeof b1.b3, b1.b3 instanceof Function, // function true
            b1.b3 instanceof Object, typeof b1.b3 === 'function'); // true true

console.log(typeof b1.b2[2] === 'function'); // true
b1.b2[2]("巴御前"); //'巴御前'
console.log(b1.b3()()); // OHHHHH
```



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

```javascript
//2. undefined & null 的区别
var a;
console.log(a); //undefined 定义了变量但未赋值
var b = null;
console.log(b); //null 定义了变量但赋值为 null

//3. null 的使用
//3.1 初始化引用对象变量
var person = null;
//3.2 赋值引用对象变量
person = Person("EMT!!!", 16);
//3.3 结束时赋值为null回收对象
person = null;
```

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

# 第二章 函数高级

## 2.1 原型与原型链

### 2.1.1 原型 prototype

1. 函数的 prototype 属性

   ![image-20201103164723084](README.assets/image-20201103164723084.png)

   - 每个函数都有一个 `prototype` 属性，默认指向一个 Object 空对象(也称为原型对象)

     该对象为 **Object 实例对象**，为对应函数创建出来的实例对象提供**方法**

   - **Object 空对象：** 一个函数的原型对象中没有我们自定义的属性

   - 原型对象中有一个 `constructor` ，指向函数对象

2. 给构造函数的原型对象添加属性(一般是方法) ==> 实例对象可以访问

   - 作用：**构造**函数的所有**实例**对象自动拥有原型中的属性(方法)

   - 代码

     ```javascript
     /* 
     每一个函数的都有一个 prototype 属性,默认指向一个 Object空对象
         - 该对象是 Object 的实例对象，为对应函数创建出来的实例对象提供方法
         */
     console.log(Date.prototype,typeof Date.prototype);
     
     /* 
     Object 空对象：一个函数的原型对象中没有我们自定义的属性 
     */
     function fn(){
         consoel.log(1);
     }
     console.log(fn.prototype);
     
     //向自定义函数的原型对象添加一个方法
     fn.prototype.test = function(){
         alert(1);
     }
     console.log(fn.prototype);
     
     /* 原型对象中有一个 constructor 属性，指向它的函数对象 */
     console.log(Date.prototype.constructor,Date.prototype.constructor === Date); //true
     console.log(fn.prototype.constructor,fn.prototype.constructor === fn); //true
     
     /* 给构造函数的原型对象添加属性(一般是方法) ==》实例对象可以访问  */
     function Fn(){
         console.log("Fn()...");
     }
     Fn.prototype.test = function(){
         console.log("Test()...");
     }
     var fn = new Fn(); //Fn()....
     fn.test(); //Test()....
     ```

### 2.1.2 显式原型和隐式原型

- 每个函数 function 都有一个 `prototype` ，即**显式原型**(属性)

- 每个实例对象都有一个 `__proto__`，即 **隐式原型**(属性)

- 实例对象的隐式原型属性和对应构造函数的显示原型属性相同 

  ```javascript
  //1. 每个函数 function 类对象都有一个 prototype ，即显示原型(属性)
  function Fn(){
  }
  console.log(Fn.prototype);
  
  //2. 每个实例对象都有一个__proto__,即隐式原型(属性)
  var fn = new Fn();
  console.log(fn.__proto__);
  
  //3. 实例对象的隐式原型和对应构造函数的显式原型相同
  console.log(Fn.prototype == fn.__proto__); //true
  ```

- 总结

  1. 函数的 `prototype` 属性：在定义函数时自动添加的，默认值是一个空 Object 对象
  
     但 Object() 构造函数对象的显式原型并不是 Object 实例对象
  
     ```javascript
     console.log(Object.prototpype instanceof Object); //false
     ```
  
  2. 实例对象的 `__proto__` 属性：创建对象时自动添加的，默认值为构造函数的 `prototype` 属性
  
     注意：函数也是一个实例，它是 Function 的实例对象，所以也具有 `__proto__` 属性
  
  3. 在 **ES6** 之前，可以直接操作**显式原型**，但不能直接操作**隐式原型**
  
  4. 通过实例对象调用方法时：
  
     会先访问对象本身是否具有对应的属性
  
     如果没有就通过 `__proto__` 属性查看原型对象是否有对应的属性(方法)
  
     ```javascript
     //添加函数的显式原型属性(方法)
     Fn.prototype.test = function(){
         console.log("Test()...");
     }
     /*
     通过实例对象调用对应的方法
     其原理是：先访问对象本身是否具有对应的属性(方法)
     		如果没有就通过 __proto__ 隐式原型属性查看是否有对应的属性(方法)
     */
     fn.test(); //Test()...
     ```

### 2.1.3 原型链

#### 原型链

- 访问一个对象的属性时

  ```javascript
  function Fn(){
      this.test1 = function(){
          console.log("Test1()");
      } 
  }
  var fn = new Fn();
  Fn.prototype.test2 = function(){
      console.log("Test2()");
  }
  
  fn.test1();
  fn.test2();
  console.log(fn.toString());
  // fn.test3(); //error: test3 in not function
  ```

  1. 先在自身属性中查找，找到返回 

  2. 如果没有，再沿着 `__proto__` 找到对应的隐式原型对象，形成一条 **链**，找到返回

  3. Object 构造函数的 `prototype` 属性为 Object 原型对象，该对象中包含了需要基础的方法

     但同时，该对象的 `_proto__` 属性为 null

  4. 如果最终都没有找到，则返回 undefined

  5. 原型链的尽头就是 Object 的原型对象

     ```javascript
     console.log(Object.prototype.__proto__); //null
     ```

- 别名：**隐式**原型链

- 作用：查找对象的属性(方法)

- ![image-20201105110848916](README.assets/image-20201105110848916.png)

#### 构造函数 / 原型 / 实体对象的关系

- 图解1

  <img src="README.assets/image-20201105134325107.png" alt="image-20201105134325107" style="zoom: 33%;" />

- 图解2

  <img src="README.assets/image-20201105140845229.png" alt="image-20201105140845229" style="zoom: 50%;" />

- 所有函数的都是 **Function** 的实例，包括 Function() 本身，

  所以 **Fcuntion.\__proto__ == Fcuntion.prototype** 

  ```javascript
  function A(){}
  function B(){}
  console.log(A.__proto__ === B.__proto__); //true - 所有函数的 __proto__ 属性都是一样的
  console.log(Object.__proto__ === Function.prototype); //true - Object构造函数也是，都是 Function.prototype
  console.log(Function.prototype === Function.__proto__); //true - Fcuntion = new Function();
  ```

#### 属性问题

- 读取对象的属性值，会自动到原型链中查找

- 设置对象的属性值，不会查找原型链，如果当前对象中没有该属性，就会直接添加该属性并设置其值

- 方法一般定义在**原型**中，属性一般通过构造函数定义在**对象本身**上

- ```javascript
  /* 
  - 读取对象的属性值，会自动到原型链中查找
  - 设置对象的属性值，不会查找原型链，如果当前对象中没有该属性，就会直接添加该属性并设置其值
  - 方法一般定义在**原型**中，属性一般通过构造函数定义在**对象本身**上
  */
  
  /* 
  - 读取对象的属性值，会自动到原型链中查找
  - 设置对象的属性值，不会查找原型链，如果当前对象中没有该属性，就会直接添加该属性并设置其值
  */
  function Fn(){}
  var f1 = new Fn();
  f1.__proto__.a = "AAA";
  var f2 = new Fn();
  console.log(f1.a,f2.a,f1); //AAA AAA
  f2.a = "BBB";
  console.log(f1.a,f2.a,f2); //AAA BBB
  
  /* 
  - 方法一般定义在**原型**中，属性一般通过构造函数定义在**对象本身**上
  */
  function Person(name,age){
      this.name = name;
      this.age = age;
  }
  Person.prototype.setName = function(name){
      this.name = name
  }
  var p1 = new Person("EMT!",16);
  var p2 = new Person("Knight",20)
  p2.setName("77777");
  console.log(p1.name,p2.name,p1,p2); //EMT! 77777
  ```

### 2.1.4 探索 instanceof 

- 表达式：A(实例对象) instanceof B(构造函数对象)

- 作用：如果 B 函数的**显式原型对象**在 A 对象的**原型链**上，返回 true，否则返回 false

- ```javascript
  //案例1
  function Fun(){}
  var f1 = new Fun();
  console.log(f1 instanceof Fun) //true
  console.log(f1 instanceof Object); //true
  
  console.log(  );
  
  //案例2
  console.log(Object instanceof Function); //true
  console.log(Object instanceof Object); //true
  console.log(Function instanceof Function); //true
  console.log(Function instanceof Object); //true
  
  function Foo(){ }
  console.log(Object instanceof Foo); //false
  ```

- 案例 2 图解

  <img src="README.assets/image-20201106101935950.png" alt="image-20201106101935950" style="zoom:50%;" />

### 2.1.5 面试题

```javascript
// 测试题1
var A = function(){ }
A.prototype.n = 1;
var b = new A();

A.prototype = {
    n:2,
    m:3
}

var c = new A();
console.log(b.n ,b.m ,c.n ,c.m); 

// 测试题2
Object.prototype.a = function(){
    console.log('a()');
}

Function.prototype.b = function(){
    console.log("b()")
}
var f = new F();
f.a() 
// f.b() 
F.a() 
F.b() //b()
```

## 2.2 执行上下文与执行上下文栈

### 2.2.1 变量提升与函数提升 

1. 变量声明提升，通过 var 定义(声明)的变量，在定义语句之前就可以访问，值为 `undefined`

2. 函数声明提升，通过 function 声明的函数，在之前就可以直接调用，值为 **函数定义(对象)**

   但使用 var 声明的函数，在定义语句之前，值也是`undefined`

### 2.2.2 执行上下文

> 代码分类 - 根据位置
>
> - 全局代码
> - 局部代码

#### 全局执行上下文 (执行全局代码前的步骤)

- 在执行全局代码前将 **window** 确定为全局执行上下文

- 对全局数据进行预处理
  - var 定义的全局变量赋值为 undefined，添加为 **window** 的属性
  - function 声明的全局函数赋值为**函数定义(对象)**，添加为 **window** 的方法
  - **this ==> (赋值) window**

- 开始执行全局代码

#### 函数执行上下文

- 在调用函数时，准备执行函数体之前，创建对应的**函数执行上下文对象(虚拟的)**

- 对局部数据进行预处理

  - 将实参赋值给形参，并添加形参为执行上下文属性

  - 将**实参列表**，赋值给 **arguments** 属性(伪数组)，添加该属性为执行上下文属性

    ![image-20201105202633521](README.assets/image-20201105202633521.png)

  - var 定义的局部变量赋值为 undefined，添加为执行上下文属性

  - function 声明的局部函数赋值为 **函数定义(对象)**，添加执行上下文的方法

  - **this ==> (赋值) 调用函数的对象**

- 开始执行函数体代码

### 2.2.3 执行上下文栈

1. 在全局代码执行前，JS 引擎会创建一个栈用来存储管理所有的**执行上下文对象**
2. 在全局执行上下文(**window**)确定之后，将其添加到栈中(**压栈**)
3. 在函数执行上下文创建后，将其添加到栈中(**压栈**)
4. 在当前函数执行完后，将栈顶的对象移出(**出栈**)
5. 当所有代码执行完后，栈中只剩下 **window**

![image-20201106090810184](README.assets/image-20201106090810184.png)



## 2.3 作用域与作用域链

### 2.3.1 作用域

1. 理解
   - 一个代码段所在的区域
   - 静态的(相对于上下文对象)，在编写代码时就确定了
2. 分类
   - 全局作用域
   - 函数作用域
   - ES6中还具有一个 **块作用域**
3. 作用
   - **隔离变量**，不同作用域下同名变量不会有冲突

### 2.3.2 作用域和执行上下文

1. 创建时机不同
   - 全局作用域之外，每个函数都会创建自己的作用域，作用域在**函数定义**时就已经确定，而是在函数调用时
   - 全局执行上下文环境是在**全局作用域确定之后**，JS 代码执行之前创建的
   - 函数执行上下文是在**调用函数**时，函数体代码执行之前创建的
2. 是否可变化
   - 作用域时 **静态** 的，只要函数定义好了就一直存在，且不会再变化
   - 上下文环境是 **动态** 的，调用函数时创建，函数调用结束时上下文环境就会被自动释放
3. 联系
   - 指向上下文环境是**从属于**所在的作用域
   - 全局上下文环境 ==> 全局作用域
   - 函数上下文环境 ==> 对应的函数作用域

### 2.3.3 作用域链

1. 理解

   - 多个上下级关系的作用形成的链，方向是 **从下向上(从内到外)**
   - 查找变量时就会沿着对应的 **作用域链** 来查找的

2. 查找变量规则

   1. 在**当前作用域**下的**执行上下文**中查找对应的属性，如果由直接返回，否则进入2

   2. 在**上一级作用域**的执行上下文查找对应的属性，如果由直接返回，否则进入3

   3. 再次执行2的相同操作，直到**全局作用域**，如果还找不到就抛出找不到异常

      ```javascript
      var a = 1;
      function f1(){
          var b = 2;
          function f2(){
              var c = 3;
              console.log(c); //3
              console.log(b); //2
              console.log(a); //1
              console.log(d); //报错
          }
          f2();
      }
      f1();
      ```

### 2.3.4 测试题

```javascript
//1. 作用域的关系在函数定义时就确定的
var x = 10;
function fn(){
    console.log(x); 
}
function show(f){
    var x = 20;
    f();
}
show(fn);

//2. 只有通过 this 访问当前对象的属性(方法)
var fn = function(){
    console.log(fn); 
}
fn();

var obj = {
    fn2:function(){
        console.log(fn2); 
    }
}
obj.fn2(); 
```



## 2.4 闭包

### 2.4.1 说明

#### 闭包产生的时机

- 当一个**嵌套**的内部(子)函数引用了嵌套的**外部**(父)函数的**变量(函数)**时，就产生了**闭包**

#### 闭包理解

- 使用 **chrome** 调试查看

  ![image-20201109091044858](README.assets/image-20201109091044858.png)

- 理解一：闭包是嵌套的内部函数

- 理解二：包含被引用变量(函数)的对象

- **注意：闭包存在于嵌套的内部函数中**

#### 产生闭包的条件

1. 函数嵌套
2. 内部函数**引用**外部函数的数据(变量 / 函数)
3. **使用**内部函数(调用，作为返回值....)
4. 闭包产生的个数与**调用外部函数**次数有关

### 2.4.2 常用的闭包

```javascript
/* 
    1. 将函数作为另一个函数逇返回值
    2. 将函数作为实参传递给另一个函数调用
    */
//1. 将函数作为另一个函数逇返回值
function fn1(){
    var a= 3;
    function fn2(){
        a++;
        console.log(a);
    }
    return fn2;
}
var f = fn1();
f(); //3
f(); //4

//2 将函数作为实参传递给另一个函数调用
function showDelay(msg,time){
    //这里传递给 setTimeout() 让其帮我们延迟调用
    setTimeout(function(){
        alert(msg); //引用外部函数数据
    },time)
}
showDelay("巴御前！",2000)
```

### 2.4.3 闭包的作用

1. 作用在函数内部的局部变量在**函数执行完**后，仍然存活在内存中(**延长了局部变量的生命周期**)
2. **让函数外部可以操作(读写)到函数内部的数据**

- **注意**

  1. 函数执行完后，函数内部声明的局部变量一般是不存在，除了存在于闭包中的局部变量**才有可能**存在

     有可能具有闭包变量的外部引用(函数)成为**垃圾对象**

     ```javascript
     function fn1(){
         var a = 2;
         //这里fn2 在函数执行后，会被自动释放，而指向的函数对象会因为没有引用而成为垃圾对象
         function fn2(){
             a--;
             console.log(a);
         }
         //fn3 在函数执行后也会被自动释放
         function fn3(){
             a++;
             console.log(a);
         }
         //但 fn3 所指向的函数的函数对象的地址值会被返回
         return fn3;
     }
     var f = fn1();//这里接收返回值后，f 会执行对应的函数对象，使其不被回收，内部的闭包中的局部变量边得以存在
     ```

  2. 在函数外部一般不能直接访问函数内部的局部变量

     但可以通过**闭包**在外部操作它

### 2.4.4 闭包的生命周期

- 产生：在嵌套内部函数被使用(函数调用，返回值....)时产生

- 死亡：在嵌套的内部函数成为垃圾对象时

- ```javascript
  /* 
  - 产生：在嵌套内部函数被使用(函数调用，返回值....)时产生
  - 死亡：在嵌套的内部函数成为垃圾对象时
  */
  function fn1(){
      var a = 3;
      function fn2(){
          a++;
          console.log(a);
      }
      // return fn2;
  }
  var f = fn1();
  f(); //4
  f(); //5
  //在嵌套的内部函数成为垃圾对象时
  f = null;
  ```

### 2.4.5 闭包的应用_自定义模块

#### 使用步骤

1. 具有特定功能的 JS **文件**
2. 将所有的数据和功能都**封装**在一个**函数内部(私有的)**
3. 只向外暴露包含n个方法的对象 / 函数
4. 模块的使用者，只需要通过模块暴露的**对象**调用方法来实现对应的功能

#### 使用方式

1. 定义一个函数，返回一个对外 **暴露** 的对象

   ```javascript
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
   ```

2. (**推荐**)使用匿名函数，为 `window` 设置一个对外暴露的对象

   ```javascript
   //这里在行首加上;，防止合并压缩时出错
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
   ```

### 2.4.6 闭包的缺点及解决

- 缺点
  1. 函数执行完后，函数内的局部变量没有释放，占用内存的时间会变长
  2. 容易造成**内存泄漏**
- 解决
  1. 能不用闭包就不用
  2. 及时释放

# 第三章 面向对象高级

## 3.1 对象创建模式

1. 方式一：`Object` 构造函数模式

   - 套路：先创建空 Object 对象，再动态添加属性 / 方法

   - 使用场景：起始时**不确定对象内部数据**

   - 问题：语句太多

   - ```javascript
     var a = new Object();
     a.name = "EMT!!";
     a.age = 12;
     ```

2. 方式二：对象字面量模式

   - 套路：使用 {} 创建对象，**同时**指定属性 / 方法

   - 适用场景：起始时对象**内部数据是确定**的

   - 问题：如果创建多个对象，有重复代码

   - ```javascript
     var a = {
         name:"EMT!!",
         age:12
     }
     ```

3. 方式三：工厂模式

   - 套路：通过**工厂函数**(返回一个对象的函数)动态创建对象并返回

   - 适用场景：需要创建多个对象

   - 问题：对象没有一个具体的类型，都是 `Object` 类型

   - ```javascript
     function createPerson(name,age){
         var obj = {
             name: name,
             age: age
         }
         return obj;
     }
     var p = createPerson("Tom",12);
     ```

4. 方式四 - 自定义构造函数模式

   - 套路：自定义 **构造函数**，通过 `new` 关键字创建对象

   - 使用场景：需要创建多个**类型确定**的对象

   - 问题：每个对象都有相同的数据，浪费内存

   - ```javascript
     function Person(name,age){
         this.name = name;
         this.age = age;
         this.setName = function(name){
             this.name = name;
         }
     }
     //两个对象不同但都有相同的数据(方法)，浪费内存
     var p1 = new Person("Jack",12);
     var p2 = new Person("Tom".,16);
     ```

5. 方式五 - 构造函数 + 原型的组合模式

   - 套路：自定义构造函数，属性在函数中初始化，方法添加到**显式原型**中

   - 使用场景：需要创建多个类型确定的对象

   - ```javascript
     //属性在函数中初始化
     function Person(name,age){
         this.name = name;
         this.age = age;
     }
     //方法添加到 显式原型 中
     Person.prototype.setName = function(name){
         this.name = name;
     }
     var p1 = new Person("Jack",23);
     var p2 = new Person("Tom",24);
     ```

     

## 3.2 继承模式

### 3.2.1 原型链继承

- 套路

  1. 定义父类型的构造函数
  2. 给父类型的原型添加方法
  3. 定义子类型的构造函数
  4. **(关键)创建父类型的对象赋值给子类型的原型**
  5. 设置子类型的原型的 `constructor` 属性指向子类型
  6. 给子类型的原型添加方法
  7. 创建子类型的对象调用父类型的方法

- 关键

  **子类型的原型为父类型的一个实例对象**

- 代码

  ```javascript
  //定义父类型的构造函数
  function Person(){
      perInfo = "show perInfo"
  }
  //给父类型的原型添加方法
  Person.prototype.showPer = function(){
      console.log(perInfo);
  }
  
  //定义子类型的构造函数
  function Student(){
      stuInfo = "show stuInfo"
  }
  //创建父类型的对象赋值给子类型的原型
  Student.prototype = new Person();
  //设置子类型的 constructor 属性指向子类型
  Student.prototype.constructor = Student;
  //给子类型的原型添加方法
  Student.prototype.showStu = function(){
      console.log(stuInfo);
  }
  //创建子类型的对象调用父类型的方法  
  var stu1 = new Student();
  stu1.showPer();
  stu1.showStu();
  ```

- 图解

  ![原型链继承](README.assets/原型链继承.png)

### 3.2.2 借用构造函数继承

> 虚伪的

- 套路

  1. 定义父类型构造函数
  2. 定义子类型构造函数
  3. 在子类型构造函数中调用父类型构造

- 关键

  - 在子类型构造函数中调用 call() 调用父类型构造函数

- 代码

  ```javascript
  function Person(name,age){
      this.name = name;
      this.age = age;
  }
  
  function Student(name,age,price){
      Person.call(this,name,age); //this.Person(name,age)
      this.price = price;
  }
  
  var p1 = new Student("emt!!",16,14000);
  ```

### 3.2.3 组合继承

> 使用 原型链 + 构造函数

- 代码

  ```javascript
  // 定义父类型构造函数
  function Person(name,age){
      this.name = name;
      this.age = age;
  }
  // 给父类型的原型添加方法
  Person.prototype.setName = function(name){
      this.name = name;
  }
  
  //定义子类型
  function Student(name,age,price){
      //使用 call 调用父类型构造函数
      Person.call(this,name,age)
      this.price = price;
  }
  //定义子类型的原型对象为父类型的实例对象
  Student.prototype = new Person();
  //设置子类型的原型的 constructor 属性为子类型
  Student.prototype.constructor = Student;
  //给子类型的原型添加方法
  Student.prototype.setPrice = function(price){
      this.price = price;
  }
  
  //创建子类型实例对象
  var student = new Student("EMT!!",16,16000);
  console.log(student);
  //调用方法
  student.setName("巴御前");
  student.setPrice(50000);
  console.log(student);
  ```


# 第四章 线程机制与事件机制

## 4.1 进程与线程

- 线程(process)

  - 程序的一次执行，占有一片**独有的内存空间**
  - 可以通过 windows 任务管理器查看进程

- 进程(thread)

  - 是进程内的一个独立执行单元
  - 是程序执行的一个完整流程
  - 是 CPU 的最小调度单元

- 图解

  ![image-20201110111147998](README.assets/image-20201110111147998.png)
  
- 相关知识

  1. 应用程序必须运行在某个进程的某个线程上
  2. 一个进程中只要有一个**运行**的线程：**主线程**，进程启动后会自动创建
  3. 一个进程也可以同时运行多个线程 - 多线程执行
  4. 一个进程内的数据可以供其他的多个线程直接共享
  5. 多个进程之内的数据时不能共享的
  6. **线程池(thread pool):**保存多个线程对象的容器，实现线程对象的反复利用

- 相关问题

  - 多进程与多线程

    - 多进程：一个应用程序可以同时启动多个实例运行
    - 多线程：一个进程内，同时有多个线程运行

  - 多进程与单线程

    - 多进程
      - 优点：能有效提高 CPU 利用率
      - 缺点:
        - **创建**多线程开销
        - 线程间**切换**开销
        - **死锁与状态同步问题**
    - 单线程
      - 优点：方便顺序程序编码
      - 缺点：效率低

  - JS 是**单线程**执行的

    但 H5 中的 `Web Workers` 可以多线程运行

  - 游览器是**多线程**运行的 

    游览器中 `IE(旧版) FireFox` 是单进程的

    `Chrome IE(新版)` 多进程的

## 4.2 游览器内核

> 支撑游览器运行的核心程序

- 不同的游览器不一样

  - Chrome , Safari：`webkit`

  - firefox: `Gecko`

  - IE：`Trident`

  - 360,搜狗等国内游览器：`Trident + webkit`

  - `Trident` 在**金钱交易**方面具有安全性，所以大多数银行的网站只支持 IE

    国内的游览器在涉及交易时就会切换为 `Trident` 内核

- 内核由多个模块组成

  <img src="README.assets/image-20201111093015121.png" alt="image-20201111093015121" style="zoom:50%;" />

## 4.3 定时器

- 定时器的定时执行  
  - 不能保证真正的定时执行
  - 一般情况下会额外延迟一点，也有可能延长较长的时间
- 定时器的回调函数是在 **主线程** 上执行的。JS 是单线程的
- 定时器的具体实现：**事件循环模型**

- 代码

  ```javascript
  var btn = document.querySelector("#btn");
  btn.onclick = function(){
      var start = Date.now(); //获取当前时间戳
      console.log("启动定时器前");
      setTimeout(function(){
          console.log("定制器执行了",Date.now() - start);
      },200)
      console.log("启动定时器后");
  
      // 做一个长时间的工作 - 会导致定时器额外延长
      for(var i = 1; i < 1000000000;i++){
  
      }
  } 
  ```

## 4.4 JS 单线程执行

> 在主线程执行的，但 JS 是单线程的

- JS是单线程执行

  - `setTimeout()` 的回调函数是在**主线程**执行的
  - 定时器中的回调函数只有在 **运行栈** 中的代码全部执行完后才有可能执行

- 原因：

  JS是为了与用户进行交互而开发的语言，如果是多线程，还需要解决**多线程**的同步问题

- 代码分类

  1. 初始化代码
  2. 回调代码

- JS 引擎执行代码的基本流程

  - 先执行初始化代码，包含一些特别的代码：
    - 设置定时器
    - 绑定监听
    - 发送 `ajax` 请求
  - 后面在某个时刻才会执行回调函数(异步代码)

- 代码

  ```javascript
  setTimeout(function(){
      console.log("AAA");
      alert("setTimeout 2222")
  },2000)
  setTimeout(function(){
      console.log("BBB");
      alert("setTimeout 1111")
  },1000)
  setTimeout(function(){
      //定时器的回调函数都在初始化代码执行后执行
      console.log("CCC");
  },0)
  function fn(){
      console.log("fn(),,,");
  }
  fn()
  console.log("alert()之前");
  alert("CC") //不仅会暂停主线程的执行，同时会暂停计时线程的执行
  console.log("alert()之后");
  ```

- 注意：即使使用 `H5 Workeres` 多线程的语法，在同一时刻也只能有一个线程可以操作页面

## 4.5 游览器的事件循环(轮询)模式

- 模型原理图

  ![img](README.assets/898684-20200421174601857-1537701411.png)

- 重要概念

  1. 执行栈：`execution stack`所有代码都在此空间中执行

  2. 游览器内核

     - JS 引擎模块 - 在主线程处理
     - 其他模块 - 在主 / 分线程处理

  3. 任务 & 消息 & 事件队列

     都是同一个队列 `Callback Queue`

  4. 事件轮询：

     从 `Callback Queue`中循环取出 回调函数 放入执行栈中处理(一个接一个)

  5. 事件驱动模型 `event-driven interaction model`

     == 事件循环模型

  6. 请求响应模型 `request-response model`

  7. 代码分类

     - 初始化代码(同步代码)：包含 **绑定 dom 事件监听，设置定时器，发送 Ajax 请求**
     - 回调执行代码(异步代码)：处理回调逻辑

  8. JS 引擎执行代码的基本流程：初始化代码 ==> 回调代码

  9. 模型的 2 个组成部分

     1. 事件管理模块 `Web APIs`
     2. 回调队列 `Callback Queue`：包含着待处理的回调函数

- 执行流程

  - 执行初始化代码，将事件回调函数交给 **对应模块** 管理
  - 当事件发生时，管理模块会将**回调函数及其数据添加到回调队列中**
  - **只有当初始化代码执行完后**(可能需要一定时间)，才会**遍历读取**回调队列中的回调函数执行

## 4.6 Web Workers(多线程)

> 更多参考：https://juejin.im/post/6844903496550989837

- 介绍
  - `Web Workers` 是 HTML5 提供的一个 JavaScript 多线程解决方案
  - 可以将一些大计算量的代码交由 `Web Worker` 运行而不冻结用户界面
  - 子线程完全受主线程控制，且**不得操作 DOM**，所以这个新标准并不能改变 JavaScript 单线程的本质
  
- 使用
  - 创建在分线程执行的 **JS 文件**
  - 在主线程中的 JS 中发消息并设置回调
  
- 图解

  ![image-20201112091344200](README.assets/image-20201112091344200.png)

- 应用练习 

  1. 在主线程中创建 `Worker`对象，并发送消息

     ```javascript
     var inp = document.querySelector("#number");
     document.querySelector("#btn").onclick = function(){
         var value = inp.value;
     
         var worker = new Worker("JS/worker.js"); //创建一个 Worker 对象
         worker.onmessage = function(event){ //绑定一个接受消息的监听事件
             console.log("主线程收到的信息" + event.data);
         }
         worker.postMessage(value); //发送数据给分线程
         console.log("主线程：发送数据给分线程");
     }
     ```

  2. 根据创建 `Worker`对象传入的路径创建一个 worker.js 文件

     ```javascript
     //分线程
     //计算 斐波那契数列
     function fibonacci(n){
         return n<=2 ? 1 : fibonacci(n-1) + fibonacci(n-2)
     }
     
     //1. 使用表达式定义一个函数，函数名固定为 onmessage
     var onmessage = function(event){
         //2. 处理数据
         console.log("分线程：从主线程中接受的数据" + event.data);
         var result = fibonacci(event.data);
         //3. 返回数据
         postMessage(result);
     }
     ```

- 缺点

  1. 慢

  2. 不能跨域加载 JS

  3. Worker内的代码无法访问 DOM

     因为对应的全局对象不再是 `window`

     ![image-20201112092043564](README.assets/image-20201112092043564.png)

  4. 不是每个游览器都兼容该特性

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

## 5.2 内存溢出和内存泄漏

### 5.2.1 内存溢出

- 程序运行时出现的错误

- 程序运行时需要的内存超过了剩余的内存，就出抛出内存溢出的错误

- ```javascript
  /* 
  1. 内存溢出
  	- 程序运行时出现的错误
  	- 程序运行时需要的内存超过了剩余的内存，就会抛出内存溢出的错误
  */
  var obj = {};
  for (var i = 0; i < 10000; i++) {
      obj[i] = new Array(1000000);
      console.log("------");
  }
  ```

  <img src="README.assets/image-20201109134304865.png" alt="image-20201109134304865" style="zoom:50%;" />

### 5.2.2 内存泄漏

- 占用的内存没有及时释放

- 内存泄漏积累多了就容易导致内存溢出

- 常见的内存泄漏

  1. 意外的全局变量
  2. 没有及时清理的计时器和回调函数
  3. 闭包

- ```javascript
  //2.1 意外的全局变量
  function fn(){
      a = 3;
      console.log(a); //3
  }
  fn();
  console.log(a); //3
  
  //2.2 没有及时清理的计时器和回调函数
  var intervalId = setInterval(function(){
      console.log("----");
  },1000)
  //   clearInterval(intervalId); //及时清理计时器
  
  //2.3 闭包
  function fn1(){
      var a = 5;
      function fn2(){
          console.log(a);
      }
      return fn2;
  }
  var f = fn1();
  f();
  // f = null; //及时处理局部变量占用的内存
  ```

  