/* var arr = [1, 2, "string", {
    foo: "bar"
  }]
 console.log(duplicate(arr);  
Output should be: [1,2,"string", { foo: "bar"} , 1,2,"string", { foo: "bar"} ] 
 */

let arr = [1, 2, "string", {
    foo: "bar"
  }]
arr.forEach((ele)=>(arr.push(ele)))
console.log(arr)