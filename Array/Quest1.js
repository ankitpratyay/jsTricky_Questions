/* write a program to count how many even numbers are there in an array.
Solution 1:
let arr=[10,20,15,17,18,25,27,30,32,41,100] */

let arr = [10, 20, 15, 17, 18, 25, 27, 30, 32, 41, 100];

function evenNo(arr) {
  let count = 0;
  arr.forEach((val) => {
    if (val % 2 === 0) {
      count += 1;
    }
  });
  return count;
}

console.log(evenNo(arr));
