/* let arr=[[10,20],[2,30],[30,40]]		Output should be: [30,32,70]
 */
let arr = [
  [10, 20],
  [2, 30],
  [30, 40],
];
function sunMarr(arr) {
  let count = 0;
  arr.forEach((ele) => {
    count += ele;
  });
  return count;
}

console.log(arr.map((ele) => sunMarr(ele)));
