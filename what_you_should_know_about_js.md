

### 1. 关于变量提升
```
(function() {

    alert(bar); // 此时的bar是函数bar还是undefined？

    function bar() {}

    var bar = 111;

    alert(bar); // 此时的bar是函数bar还是111？

})();

```

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