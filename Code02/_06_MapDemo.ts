

// 创建 Map
let myMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
]);
console.log(myMap);

//迭代方法
const map = new Map<string, number>();

map.set('one', 1);
map.set('two', 2);

console.log(map.get('one')); // 输出: 1

console.log(map.has('two')); // 输出: true

map.delete('one');

console.log(map.size); // 输出: 1

map.forEach((value, key) => {
    console.log(key, value); // 输出: two 2
});

map.clear();

console.log(map.size); // 输出: 0


// 迭代 Map
let nameSiteMapping = new Map();

nameSiteMapping.set("Google", 1);
nameSiteMapping.set("Runoob", 2);
nameSiteMapping.set("Taobao", 3);

// 迭代 Map 中的 key
for (let key of nameSiteMapping.keys()) {
    console.log(key);
}

// 迭代 Map 中的 value
for (let value of nameSiteMapping.values()) {
    console.log(value);
}

// 迭代 Map 中的 key => value
for (let entry of nameSiteMapping.entries()) {
    console.log(entry[0], entry[1]);
}

// 使用对象解析
for (let [key, value] of nameSiteMapping) {
    console.log(key, value);
}