
//对象
// var sites = {
//     site1:"Runoob",
//     site2:"Google"
// };
// // 访问对象的值
// console.log(sites.site1)
// console.log(sites.site2)

//TypeScript 类型模板
// var sites = {
//     site1: "Runoob",
//     site2: "Google",
//     sayHello: ():void =>{} // 类型模板
// };
// sites.sayHello = function () {
//     console.log("hello " + sites.site1);
// };
// sites.sayHello();

//此外对象也可以作为一个参数传递给函数，如下实例：
// var sites = {
//     site1:"Runoob",
//     site2:"Google",
// };
// var invokesites = function(obj: { site1:string, site2 :string }) {
//     console.log("site1 :"+obj.site1)
//     console.log("site2 :"+obj.site2)
// }
// invokesites(sites)

//鸭子类型(Duck Typing)
// 鸭子类型（英语：duck typing）是动态类型的一种风格，是多态(polymorphism)的一种形式。
//
// 在这种风格中，一个对象有效的语义，不是由继承自特定的类或实现特定的接口，而是由"当前方法和属性的集合"决定。
interface IPoint {
    x:number
    y:number
}
function addPoints(p1:IPoint,p2:IPoint):IPoint {
    var x = p1.x + p2.x
    var y = p1.y + p2.y
    return {x:x,y:y}
}

// 正确
var newPoint = addPoints({x:3,y:4},{x:5,y:1})

// 错误
// var newPoint2 = addPoints({x:1},{x:4,y:3})























