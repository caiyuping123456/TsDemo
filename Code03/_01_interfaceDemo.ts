
//接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，
// 然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。

//定义接口
interface IPerson{
    firstName:string,
    lastName:String,
    sayHi: ()=>string;
}

//实现接口
let customer:IPerson = {
    firstName:"Tom",
    lastName:"Hanks",
    sayHi: ():string =>{return "Hi there"}
}

console.log("Customer 对象 ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

let employee:IPerson = {
    firstName:"Jim",
    lastName:"Blakes",
    sayHi: ():string =>{return "Hello!!!"}
}

console.log("Employee  对象 ")
console.log(employee.firstName)
console.log(employee.lastName)

//联合类型
interface RunOptions {
    program:string;
    commandline:string[]|string|(()=>string);
}

// commandline 是字符串
var options:RunOptions = {program:"test1",commandline:"Hello"};
console.log(options.commandline)

// commandline 是字符串数组
options = {program:"test1",commandline:["Hello","World"]};
// @ts-ignore
console.log(options.commandline[0]);
// @ts-ignore
console.log(options.commandline[1]);

// commandline 是一个函数表达式
options = {program:"test1",commandline:()=>{return "**Hello World**";}};

var fn:any = options.commandline;
console.log(fn());


//单继承
interface Person {
    age:number
}

interface Musician extends Person {
    instrument:string
}

//类型断言
var drummer = <Musician>{};
drummer.age = 27
drummer.instrument = "Drums"
console.log("年龄:  "+drummer.age)
console.log("喜欢的乐器:  "+drummer.instrument)

//多继承实例
interface IParent1 {
    v1:number
}

interface IParent2 {
    v2:number
}

interface Child extends IParent1, IParent2 { }
var Iobj:Child = { v1:12, v2:23}
console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)















































