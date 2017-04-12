

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
