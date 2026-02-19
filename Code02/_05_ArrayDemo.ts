
//数组对象是使用单独的变量名来存储一系列的值。
var sites:string[];
sites = ["Google","Runoob","Taobao"]
console.log(sites)

//Array 对象
// 我们也可以使用 Array 对象创建数组。
// Array 对象的构造函数接受以下两种值：
// 表示数组大小的数值。
// 初始化的数组列表，元素使用逗号分隔值。

//指定数组初始化大小
var arr_names:number[] = new Array(4)

for(var i = 0; i<arr_names.length; i++) {
    arr_names[i] = i * 2
    console.log(arr_names[i])
}

//以下实例我们直接初始化数组元素：
var sites1:string[] = new Array("Google","Runoob","Taobao","Facebook")

for(var i = 0;i<sites1.length;i++) {
    console.log(sites1[i])
}

//数组解构
// 我们也可以把数组元素赋值给变量，如下所示：
var arr:number[] = [12,13,69]
var[x,y,z] = arr // 将数组的两个元素赋值给变量 x 和 y
console.log(x)
console.log(y)
console.log(z)

//数组迭代
// 我们可以使用 for 语句来循环输出数组的各个元素：
var j:any;
var nums:number[] = [1001,1002,1003,1004]

for(j in nums) {
    console.log(nums[j])
}

//多维数组
//一个数组的元素可以是另外一个数组，这样就构成了多维数组（Multi-dimensional Array）。
// 最简单的多维数组是二维数组，定义方式如下：
var multi:number[][] = [[1,2,3],[23,24,25]]
console.log(multi[0][0])
console.log(multi[0][1])
console.log(multi[0][2])
console.log(multi[1][0])
console.log(multi[1][1])
console.log(multi[1][2])

//数组在函数中的使用
//作为参数传递给函数
var sites:string[] = new Array("Google","Runoob","Taobao","Facebook")

function disp(arr_sites:string[]) {
    for(var i = 0;i<arr_sites.length;i++) {
        console.log(arr_sites[i])
    }
}
disp(sites);

//作为函数的返回值
function disp1():string[] {
    return new Array("Google", "Runoob", "Taobao", "Facebook");
}

var sites2:string[] = disp1()
//@ts-ignore
for(var i in sites2) {
    console.log(sites2[i])
}