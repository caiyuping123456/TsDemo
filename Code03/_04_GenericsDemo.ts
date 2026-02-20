
//泛型（Generics）是一种编程语言特性，允许在定义函数、类、接口等时使用占位符来表示类型，而不是具体的类型。
//
// 泛型是一种在编写可重用、灵活且类型安全的代码时非常有用的功能。
//
// 使用泛型的主要目的是为了处理不特定类型的数据，使得代码可以适用于多种数据类型而不失去类型检查。
//
// 泛型的优势包括：
//
// 代码重用： 可以编写与特定类型无关的通用代码，提高代码的复用性。
//
// 类型安全： 在编译时进行类型检查，避免在运行时出现类型错误。
//
// 抽象性： 允许编写更抽象和通用的代码，适应不同的数据类型和数据结构。

//泛型函数（Generic Functions）
// 使用泛型来创建一个可以处理不同类型的函数：
function identity<T>(arg: T): T {
    return arg;
}

// 使用泛型函数
let result = identity<string>("Hello");
console.log(result); // 输出: Hello

let numberResult = identity<number>(42);
console.log(numberResult); // 输出: 42


//泛型接口（Generic Interfaces）
// 基本语法
interface Pair<T, U> {
    first: T;
    second: U;
}

// 使用泛型接口
let pair: Pair<string, number> = { first: "hello", second: 42 };
console.log(pair); // 输出: { first: 'hello', second: 42 }

//泛型类（Generic Classes）
// 基本语法
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

// 使用泛型类
let stringBox = new Box<string>("TypeScript");
console.log(stringBox.getValue()); // 输出: TypeScript

//泛型约束（Generic Constraints）
// 基本语法
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
    console.log(arg.length);
}

// 正确的使用
logLength("hello"); // 输出: 5

// 错误的使用，因为数字没有 length 属性
// logLength(42); // 错误

//泛型与默认值
// 可以给泛型设置默认值，使得在不指定类型参数时能够使用默认类型：
// 基本语法
function defaultValue<T = string>(arg: T): T {
    return arg;
}

// 使用带默认值的泛型函数
let result1 = defaultValue("hello"); // 推断为 string 类型
let result2 = defaultValue(42);      // 推断为 number 类型
























