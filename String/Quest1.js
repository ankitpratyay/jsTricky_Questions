/* let Str=”anKItAnk”		Output should be: {a:2,n:2;k:2,i:1} */

let Str = "anKItAnk";
let result = {};
Str = Str.toLowerCase();
for (ele of Str) {
  result[ele] = result[ele] ? result[ele] + 1 : 1;
}
console.log(result);
