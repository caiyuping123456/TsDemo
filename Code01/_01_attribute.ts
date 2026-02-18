// @ts-ignore


// string类型
let name : string = "李四";
console.log(name);

//number类型
let age : number = 18;
console.log(age);

//boolean类型
let sex : boolean = true;
console.log(sex ? '男':'女');

//数组类型：可以表示一组相同类型的元素。可以使用 type[] 或 Array<type> 两种方式表示。
let arr1 : number[] = [1,2,3,4]
console.log(arr1);
let arr2 : string[] = ["啊","c","d","s"];
console.log(arr2)

let arr3 : Array<number> = [2,3,4,5];
console.log(arr3);

//元组类型：表示已知数量和类型的数组。每个元素可以是不同的类型，适合表示固定结构的数据。
let tuple : [string,number,boolean] = ["李四",18,true];
console.log(tuple)

//enum枚举
enum Color{
    RED,
    GREED,
    YOLLOW
}
let MyColor : Color = Color.RED
console.log(MyColor)

//any 类型：以表示任何类型。适合不确定数据类型的情况，但使用时需谨慎，因为 any 会绕过类型检查。
let randomValue: any = 42;
randomValue = "hello";
console.log(randomValue)

// void 空类型
function logMessage(message: string): void {
    console.log(message);
}
logMessage("你好");

//null 和 undefined
//null 和 undefined分别表示"空值"和"未定义"。在默认情况下，它们是所有类型的子类型，但可以通过设置 strictNullChecks 严格检查。
let empty: null = null;
let notAssigned: undefined = undefined;
console.log(empty)
console.log(notAssigned)
/*
*
null
    在 JavaScript 中 null 表示 "什么都没有"。
    null是一个只有一个值的特殊类型。表示一个空对象引用。
    用 typeof 检测 null 返回是 object。
undefined
    在 JavaScript 中, undefined 是一个没有设置值的变量。
    typeof 一个没有值的变量会返回 undefined。
    Null 和 Undefined 是其他任何类型（包括 void）的子类型，可以赋值给其它类型，如数字类型，
    * 此时，赋值后的类型会变成 null 或 undefined。而在TypeScript中启用严格的空校验（--strictNullChecks）特性，
    * 就可以使得null 和 undefined 只能被赋值给 void 或本身对应的
* */

// never 类型：表示不会有返回值，通常用于抛出错误或进入无限循环的函数，表示该函数永远不会正常结束。
function throwError(message: string): never {
    throw new Error(message);
}

// object 对象类型：表示非原始类型的值，适用于复杂的对象结构。
let person: object = { name: "Alice", age: 30 };
console.log(person)

//联合类型 (Union)
// 表示一个变量可以是多种类型之一。通过 | 符号实现。
let id: string | number;
id = "123";
id = 456;

console.log(id)

//unknown 不确定的类型
// 与 any 类似，但更严格。必须经过类型检查后才能赋值给其他类型变量。
let value: unknown = "Hello";
if (typeof value === "string") {
    let message: string = value;
}
console.log(value);

//类型断言 (Type Assertions)
// 类型断言可以让开发者明确告诉编译器变量的类型，常用于无法推断的情况。可以使用 as 或尖括号语法。
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

//字面量类型：字面量类型可以让变量只能拥有特定的值，用于结合联合类型定义变量的特定状态。
let direction: "up" | "down" | "left" | "right";
direction = "up";
console.log(direction)












