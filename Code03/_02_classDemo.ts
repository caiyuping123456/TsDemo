
//类
class Car {
    // 字段
    engine:string;

    // 构造函数
    constructor(engine:string) {
        this.engine = engine
    }

    // 方法
    disp():void {
        console.log("发动机为 :   "+this.engine)
    }
}
// 创建一个对象
var obj = new Car("XXSY1")

// 访问字段
console.log("读取发动机型号 :  "+obj.engine)

// 访问方法
obj.disp()

//类的继承
class Shape {
    Area:number

    constructor(a:number) {
        this.Area = a
    }
}

class Circle extends Shape {
    disp():void {
        console.log("圆的面积:  "+this.Area)
    }
}

var obj2 = new Circle(223);
obj2.disp()

//子类只能继承一个父类，TypeScript 不支持继承多个类，但支持多重继承，如下实例：


// 继承类的方法重写
class PrinterClass {
    doPrint():void {
        console.log("父类的 doPrint() 方法。")
    }
}

class StringPrinter extends PrinterClass {
    doPrint():void {
        super.doPrint() // 调用父类的函数
        console.log("子类的 doPrint()方法。")
    }
}

// static 关键字
class StaticMem {
    static num:number;

    static disp():void {
        console.log("num 值为 "+ StaticMem.num)
    }
}

StaticMem.num = 12     // 初始化静态变量
StaticMem.disp()       // 调用静态方法

//instanceof 运算符
class Person{ }
var obj3 = new Person()
var isPerson = obj3 instanceof Person;
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);


//类和接口
// 类可以实现接口，使用关键字 implements，并将 interest 字段作为类的属性使用。
//
// 以下实例中 AgriLoan 类实现了 ILoan 接口：

interface ILoan {
    interest:number
}

class AgriLoan implements ILoan {
    interest:number
    rebate:number

    constructor(interest:number,rebate:number) {
        this.interest = interest
        this.rebate = rebate
    }
}

var obj4 = new AgriLoan(10,1)
console.log("利润为 : "+obj4.interest+"，抽成为 : "+obj4.rebate )

















