
//进行循环
//for循环
var num:number = 5;
var i:number;
var factorial = 1;

for(i = num;i>=1;i--) {
    factorial *= i;
}
console.log(factorial)

//for...in 循环
//for...in 语句用于一组值的集合或列表进行迭代输出。
var j:any;
var n:any = "a b c"

for(j in n) {
    console.log(n[j])
}

//for…of
//for...of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等。
let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}

//TypeScript forEach 循环
let list = [4, 5, 6];
list.forEach((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    console.log(val+" "+idx+" "+array);
});

//TypeScript every 循环
let list2 = [4, 5, 6];
list2.every((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    return true; // Continues
    // Return false will quit the iteration
});

// while 循环 while 语句在给定条件为 true 时，重复执行语句或语句组。循环主体执行之前会先测试条件。
var num:number = 5;
var factorial:number = 1;

while(num >=1) {
    factorial = factorial * num;
    num--;
}
console.log("5 的阶乘为："+factorial);

//do...while 循环
var n1:number = 10;
do {
    console.log(n1);
    n1--;
} while(n1>=0);

//无限循环
for(;;) {
    console.log("这段代码会不停的执行")
}

while(true) {
    console.log("这段代码会不停的执行")
}