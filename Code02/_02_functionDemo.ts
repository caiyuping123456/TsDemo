
//普通函数
function print(){
    console.log("这是一个函数");
}
//函数·1调用
print()

//有返回值的函数
function m1():number{
    return Math.random().valueOf();
}

let result = m1();
console.log(result);

//带参数的函数
function add(x : number,y : number):number {
    return x+y;
}
console.log(add(5,6));

//可选参数
//可选参数必须跟在必需参数后面。 如果上例我们想让 firstName 是可选的，lastName 必选，那么就要调整它们的位置，把 firstName 放在后面。
function m2(name : string,age? : number,sex?: boolean): void {
    console.log(name+" "+age+" "+(sex?"男":"女"));
}
m2("李四");
m2("李四",14);
m2("李四",14,true);

//默认参数
function calculate_discount(price:number,rate:number = 0.50) {
    let discount = price * rate;
    console.log("计算结果: ",discount);
}
calculate_discount(1000)
calculate_discount(1000,0.30)

//剩余参数
//剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入。
function addNumbers(...nums:number[]) {
    var i;
    var sum:number = 0;

    for(i = 0;i<nums.length;i++) {
        sum = sum + nums[i];
    }
    console.log("和为：",sum)
}
addNumbers(1,2,3)
addNumbers(10,10,10,10,10)

//匿名函数
//匿名函数是一个没有函数名的函数。
//匿名函数在程序运行时动态声明，除了没有函数名外，其他的与标准函数一样。
var msg = function() {
    return "hello world";
}
//@ts-ignore
console.log(msg());

//匿名函数自调用
(function () {
    var x = "Hello!!";
    console.log(x)
})()

//构造函数
// TypeScript 也支持使用 JavaScript 内置的构造函数 Function() 来定义函数：
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);

//Lambda 函数
// Lambda 函数也称之为箭头函数。
// 箭头函数表达式的语法比函数表达式更短。
let foo = (x:number)=>10 + x
console.log(foo(100))      //输出结果为 110


//函数重载
// 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
// 每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。

//建议写
//而重载签名的作用就是在编译阶段就明确告诉编译器和开发者：这个函数只能按这两种方式调用，提前规避错误。
function disp(s1:string):void;
function disp(n1:number,s1:string):void;

function disp(x:any,y?:any):void {
    console.log(x);
    console.log(y);
}
disp("abc")
disp(1,"xyz");
