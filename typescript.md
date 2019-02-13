

## 原始数据类型

boolean, number, string, null, undefined, symbol.

布尔值：
1. new Boolean(1) 不属于 boolean类型。

数值：
1. 包括NaN和Infinity及各种进制。

空值void：
1. 没有对应的js类型。
2. 用来表示没有返回值的函数。

null和undefined：
1. undefined 和 null 是所有类型的子类型。


## 任意值

any 允许赋值时改变类型。

1. 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型。


## 类型推导

如果没有明确的指定类型，TypeScript 根据一定规则推断出类型。

```
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;
```

如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查。

```
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

## 联合类型

可以在多种类型之间赋值。

```
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

1. 访问联合类型的属性或方法, 只能访问共有方法和属性。


## 对象的类型——接口


1. 可以精确描述某个对象的属性, 不能多不能少。
```
interface Person {
    name: string;
    age: number;
}
let tom: person = {name:'Tom',age: 25}
```

2. 可选属性
```
interface Person {
    name: string;
    age?: number;
}
let tom: person = {name:'Tom'}
```
3. 任意属性

一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性, 一般使用any。

索引签名参数propName类型必须为 "string" 或 "number"。

```
interface Person {
    name: string;
    age?: number;
    [propName: string]: any;    
}
let tom: Person = { name: 'Tom', gender: 'male'};
```
4. 只读属性

只能在创建对象的时候被赋值，否则报错。
```
interface Person {
    readonly id: number;
}
```

## 数组的类型

1. 「类型 + 方括号」表示法 和 数组泛型表示法。

 ```
let fibonacci: number[] = [1, 1, 2, 3, 5];
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
```

2. 类数组（Array-like Object）不是数组类型。
事实上常见的类数组都有自己的内置接口定义，如 IArguments, NodeList, HTMLCollection 等。


## 函数的类型

1. 函数声明，不允许输入多余的（或者少于要求的）参数。
```
function sum(x: number, y: number): number {
    return x + y;
}
```

2. 函数表达式, ts中 => 表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
```
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
```

3. 用接口定义函数的形状
```
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```

4. 可选参数，参考数组。
5. 剩余参数，使用数组类型`...items: any[]`。
6. 重载，精确匹配多类型参数和多类型返回值。

```
// 前几次都是函数定义，最后一次是函数实现。
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```
7. 类型断言

    用来手动指定一个值的类型, 用于在还不确定类型的时候就访问其中一个类型的属性或方法。
```
function getLength(something: string | number): number {
    // number没有length属性，在这里断言为string类型。
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}
```

    类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的



## 声明文件

使用第三方库时，我们需要引用它的声明文件。

1. 声明语句， 给引用第三方库变量声明类型。
2. 通常我们会把类型声明放到一个单独的文件中，这就是声明文件：
```
// jQuery.d.ts
declare var jQuery: (string) => any;
```
3. 然后在使用到的文件的开头，用「三斜线指令」表示引用了声明文件：
```
/// <reference path="./jQuery.d.ts" />
jQuery('#foo');
```
4. 第三方声明文件
    推荐的是使用工具统一管理第三方库的声明文件。
    TypeScript 2.0 推荐使用 @types 来管理。
    直接用 npm 安装对应的声明模块即可。


## 内置对象

1. ECMAScript 的内置对象
2. DOM 和 BOM 的内置对象
3. TypeScript 核心库的定义文件
4. Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件。
