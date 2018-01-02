

### 1. 关于变量提升
```
(function() {

    alert(bar); // 此时的bar是函数bar还是undefined？

    function bar() {}

    var bar = 111;

    alert(bar); // 此时的bar是函数bar还是111？

})();

```
**变量和函数的声明会提升； 函数提升优先于变量； 重复的var声明会忽略掉，重复的函数声明会覆盖前面的**

### 2. JS词法作用域
```
(function() {

    function foo() {
        console.log(bar);
    }

    function baz() {
        var bar = 3;
        foo();
    }

    var bar = 2;

    baz(); // 打印的是 2 还是 3 ？

})();
```
**词法作用域意味着作用域是由书写代码时函数声明的位置来决定的。**

## 3. 使用JSON.parse()
```
var a = {abc:'123'}
JSON.stringify(a) 
=> "{"abc":"123"}" 

var b = "{abc:'123'}"
JSON.parse(b)
=> Uncaught SyntaxError: Unexpected token a in JSON at position 1

var b = "{'abc':'123'}"
JSON.parse(b)
=> Uncaught SyntaxError: Unexpected token ' in JSON at position 1

var b = '{"abc":"123"}'
JSON.parse(b)
=> Object {abc: "123"}

var b = '{"abc":123}'
JSON.parse(b)
=> Object {abc: 123}
```
**key必须用双引号包裹**

## 4. 关于作用域

```
// 哪个会编译成功?

const a = 1;
const a = 2;

const b = 1;
(function(){
	const b = 2;
})()

const c = 1;
if(true){
  const c = 2;
}

```
**函数作用域； 块作用域； 作用域可以避免同名标识符之间的冲突**


### js是词法作用域（lexical scope），不是动态作用域

```js
// wrong
function bar (thing = x) {}
function main (){
  let x = 'x from foo';
  return bar();
}
main(); // Uncaught ReferenceError: x is not defined

// right
function bar (thing = x) {}
function main (){
  let x = 'x from foo';
  return bar(x);
}
main();
```
> bar中的x在声明函数时确定作用域，及bar的参数作用域->全局作用域，然后当执行main()时，let x的作用域是在main函数中，调用bar()时，thing = x 中的 x 是在bar声明时就确定的，不是动态作用域，所以引用不到。 当执行 bar(x) 时，相当于 bar (thing = arguments[0] === undefined ? arguments[0] : x ), 因为传入的x相当于arguments[0], 所以不需要引用 x ,就不会报错了。

> Because x is a local variable that bar does not have access to. We're so lucky that they are not dynamically scoped! The parameter initialisers are not evaluated at the call site, but inside the called function's scope. In this case, the x identifier is resolved to the global x variable.


### 暂时性死区（temporal dead zone，简称 TDZ）
> ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
```js
var tmp = 123;
if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```
> “暂时性死区”也意味着typeof不再是一个百分之百安全的操作。
```js
typeof x; // ReferenceError
let x;
```
> 暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量

### 函数参数的作用域

> When an *execution context* is established for evaluating an ECMAScript function a new function *Environment Record* is created and bindings for each formal parameter are instantiated in that *Environment Record*. Each declaration in the function body is also instantiated. If the function’s formal parameters do not include any default value initializers then the body declarations are instantiated in the same *Environment Record* as the parameters. If default value parameter initializers exist, a second *Environment Record* is created for the body declarations. Formal parameters and functions are initialized as part of FunctionDeclarationInstantiation. All other bindings are initialized during evaluation of the function body.

```js
  // wrong
  let a = 1;
  (function(a = a) { })(); // ReferenceError: a is not defined

  // right
  let a = 1;
  (function(b = a) { })();
```
>解析： 参数初始化默认值时，生成一个新的作用域，就像{ let a = a },因为存在let，形成`TDZ`，所以右引用a会报错。


```js
// wrong
((b = 3) => {let b})() // SyntaxError: Identifier 'b' has already been declared

// right
((b = 3) => {var b})() 
```
> 解析： 参数作用域会带入函数体，所以参数已经声明的变量，函数体内不得用let再次声明。 可以用var声明，是为了兼容ES5。


### let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
```js
let b = 1;
window.b // undefined
```

### const变量指向的指针不得改动, 但数据结构是可变的。
```js
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```
> 如果真的想将对象冻结，应该使用Object.freeze方法。
```js
const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;
foo.prop; // undefined
```
> 除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数。
```js
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, i) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};
```