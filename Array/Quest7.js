/* write a program to check if an array has duplicate elements or not.(return-yes/no) */

let arr = [10, 20, 15, 17, 18, 25, 27, 17, 30, 32, 41, 100];

function checkDup(arr) {
  let flag = [];
  for (ele of arr) {
    if (arr.indexOf(ele) != arr.lastIndexOf(ele)) {
      flag.push("true");
      flag.push(ele)
      break;
    }
  }
  return flag;
}

console.log(...checkDup(arr));
