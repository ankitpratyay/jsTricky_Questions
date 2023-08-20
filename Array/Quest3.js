/* write a program to find the sum of all the digits of an array
let arr=[10,20,15,17,18,25,27,30,32,41,100] */

let arr = [10, 20, 15, 17, 18, 25, 27, 30, 32, 41, 100];

function sumArr(arr) {
  let count = 0;
  arr.forEach((val) => {
    count += val;
  });
  return count;
}
console.log(sumArr(arr));

/* 
const result=arr.reduce((curr,acc)=>{
  return acc+=curr
},0)
console.log(result) */