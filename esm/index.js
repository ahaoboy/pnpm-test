import { a } from "./a";
import { b } from "./b";
import { c } from "./c";
import { d } from "./d";

console.log("index a", a);
console.log("index b", b);
console.log("index c", c);
console.log("index d", d);

/*
ln ./a.js hard-a.js     # 创建一个硬连接文件hard
ln -s ./a.js soft-a.js  # 创建一个软连接文件soft


*/