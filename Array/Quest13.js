/* Ques:
let arr=["hello","world","java","hello","world"]
Output should be: 
{ hello: 2, world: 2, java: 1}
 */
let arr = ["hello", "world", "java", "hello", "world"];
function objreturn(arr) {
  let result = {};
  arr.forEach((ele) => {
    result[ele] = result[ele]? result[ele] + 1 : 1;
  });
  console.log(result);
}
objreturn(arr);
