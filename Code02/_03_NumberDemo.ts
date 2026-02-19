
//说Number类型
//TypeScript 与 JavaScript 类似，支持 Number 对象。
// 在 TypeScript 中，Number 对象用于包装数值类型。
// Number 对象是原始数值的包装对象。
// 类似于 String 对象，Number 对象是引用类型，与基本的 number 类型有所不同。
// 尽管 Number 对象提供了一些额外的属性和方法，但在 TypeScript 中更推荐直接使用基本的 number 类型，因为 Number 对象会带来性能开销和类型混淆。

let numLiteral: number = 42;
let numObject: Number = new Number(42);

console.log(typeof numLiteral); // 输出："number"
console.log(typeof numObject);  // 输出："object"

console.log("TypeScript Number 属性: ");
console.log("最大值为: " + Number.MAX_VALUE);
console.log("最小值为: " + Number.MIN_VALUE);
console.log("负无穷大: " + Number.NEGATIVE_INFINITY);
console.log("正无穷大:" + Number.POSITIVE_INFINITY);

//NaN 实例
var month = 0
if( month<=0 || month >12) {
    month = Number.NaN
    console.log("月份是："+ month)
} else {
    console.log("输入月份数值正确。")
}

//prototype 实例
function employee(id:number,name:string) {
    //@ts-ignore
    this.id = id
    //@ts-ignore
    this.name = name
}
//@ts-ignore
var emp = new employee(123,"admin")
//这里给原型添加了 email 属性，值为 "admin@runoob.com"—— 这个属性是所有实例共享的，而非某个实例独有。
employee.prototype.email = "admin@runoob.com"

console.log("员工号: "+emp.id)
console.log("员工姓名: "+emp.name)
console.log("员工邮箱: "+emp.email)