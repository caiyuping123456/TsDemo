
//条件语句
//if 语句 - 只有当指定条件为 true 时，使用该语句来执行代码
// if...else 语句 - 当条件为 true 时执行代码，当条件为 false 时执行其他代码
// if...else if....else 语句- 使用该语句来选择多个代码块之一来执行
// switch 语句 - 使用该语句来选择多个代码块之一来执行

//if类型
let falg: number = 5;
if(typeof falg === "number"){
    console.log("是number类型");
}else{
    console.log("不是number类型");
}

//else-if
//@ts-ignore
let name : string = "小红";
//@ts-ignore
if(name === "小明"){
    console.log("我是小明");
    //@ts-ignore
}else if(name === "小红"){
    console.log("我是小红");
}else{
    console.log("我是小蓝");
}

//switch
var grade:string = "A";
switch(grade) {
    case "A": {
        console.log("优");
        break;
    }
    case "B": {
        console.log("良");
        break;
    }
    case "C": {
        console.log("及格");
        break;
    }
    case "D": {
        console.log("不及格");
        break;
    }
    default: {
        console.log("非法输入");
        break;
    }
}