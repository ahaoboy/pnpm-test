const { a } = require("./a");
const { b } = require("./b");
const { c } = require("./c");
const { d } = require("./d");
console.log("index a", a);
console.log("index b", b);
console.log("index c", c);
console.log("index d", d);

/*
ln ./a.js hard-a.js     # 创建一个硬连接文件hard
ln -s ./a.js soft-a.js  # 创建一个软连接文件soft
ls -ali

*/
