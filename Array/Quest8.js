/* take 2 arrays and print only the common elements from the arrays. */
let arr = [1, 100, 10, 20, 50, 15, 17, 18, 25, 27, 30, 32, 41];
let arr1 = [2, 30, 1, 21, 10, 20, 15, 41, 32, 18, 100, 1, 500, 44, 49, 46, 26];
let result = [];

/* arr.forEach((val) => {
  arr1.forEach((ele) => {
    if (val === ele && !result.includes(val)) {
      result.push(val);
    }
  });
});
console.log(result); */
function common(arr, arr1) {
  let result = [];
  let val = 0;
  if (arr.length > arr1.length) {
    val = arr;
  } else {
    val = arr1;
  }

  val.forEach((ele) => {
    if (arr.includes(ele)) {
      if (!result.includes(ele)) {
        result.push(ele);
      }
    }
  });
  return result;
}
console.log(common(arr, arr1))
