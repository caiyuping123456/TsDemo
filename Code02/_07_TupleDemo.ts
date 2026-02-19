
//tuple
// TypeScript 中的元组（Tuple）是一种特殊类型的数组，它允许在数组中存储不同类型的元素，
// 与普通数组不同，元组中的每个元素都有明确的类型和位置。元组可以在很多场景下用于表示固定长度、且各元素类型已知的数据结构。
let mytuple: [number, string];
mytuple = [42,"Runoob"];

//访问元组
let mytuple1: [number, string, boolean] = [42, "Runoob", true];

// 访问元组中的元素
let num = mytuple1[0]; // 访问第一个元素，值为 42，类型为 number
let str = mytuple1[1]; // 访问第二个元素，值为 "Runoob"，类型为 string
let bool = mytuple1[2]; // 访问第三个元素，值为 true，类型为 boolean

console.log(num);  // 输出: 42
console.log(str);  // 输出: Runoob
console.log(bool); // 输出: true

// 元组运算
// push 方法可以向元组的末尾添加一个元素，类型必须符合元组定义中的类型约束。如果超出元组的类型约束，TypeScript 会报错。
var tuple = [42, "Hello"];
// 添加符合类型的元素
tuple.push("World"); // 合法，因为元组定义了可选的 string 类型
console.log(tuple); // 输出: [42, "Hello", "World"]
mytuple1.push(true);
console.log(mytuple1);

// pop 方法从元组的末尾移除一个元素，并返回该元素。返回的元素类型将根据元组的定义类型推断。
let tuple1: [number, string, boolean] = [42, "Hello", true];
// 移除最后一个元素
let lastElement = tuple1.pop();
console.log(lastElement); // 输出: true
console.log(tuple1);       // 输出: [42, "Hello"]

//更新元组
var mytuple2 = [42, "Runoob", "Taobao", "Google"]; // 创建一个元组
console.log("元组的第一个元素为：" + mytuple2[0])

// 更新元组元素
mytuple2[0] = 121
console.log("元组中的第一个元素更新为："+ mytuple2[0])


//解构元组
let a: [number, string, boolean] = [42, "Hello", true];// 创建一个元组

var [b,c,d] = a
console.log( b )
console.log( c )
console.log( d )

//使用标签元组
let tuple4: [id: number, name: string] = [1, "John"];
console.log(tuple4)

//元组的类型推断
//通过 as const 断言，TypeScript 会将该元组视为一个不可变的常量元组。
let tuple5 = [42, "Hello"] as const; // 元组类型：[42, "Hello"]

//连接元组
let tuple11: [number, string] = [42, "Hello"];
let tuple22: [boolean, number] = [true, 100];

//@ts-ignore
let result = tuple11.concat(tuple22); // 结果是一个数组: [42, "Hello", true, 100]
console.log(result); // 输出: [42, "Hello", true, 100]

//切片元组
let tuple33: [number, string, boolean] = [42, "Hello", true];

let sliced = tuple33.slice(1); // 从索引 1 开始切片
console.log(sliced); // 输出: ["Hello", true]

//遍历元组
let tuple66: [number, string, boolean] = [42, "Hello", true];

// 使用 for...of 循环
for (let item of tuple66) {
    console.log(item);
}

// 使用 forEach 方法
tuple66.forEach(item => console.log(item));

//转换为普通数组
let tuple77: [number, string, boolean] = [42, "Hello", true];

// 转换为数组并使用数组方法
let array = Array.from(tuple77);
array.push("New Element");

console.log(array); // 输出: [42, "Hello", true, "New Element"]

//扩展元组
let tuple111: [number, string] = [42, "Hello"];
let tuple222: [boolean] = [true];

let extendedTuple: [number, string, ...typeof tuple222] = [42, "Hello", ...tuple222];

console.log(extendedTuple); // 输出: [42, "Hello", true]









