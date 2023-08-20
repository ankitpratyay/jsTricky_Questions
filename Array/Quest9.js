/* Use own logic to remove duplicate from array  */
let arr = ["apple", "mango", "apple",
          "orange", "mango", "mango","orange"];
 
/* function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
} */

function removeDuplicates(arr) {
    return arr.filter((item,index)=>arr.indexOf(item)===index)
}
 
console.log(removeDuplicates(arr));
/* 
let arr = ["apple", "mango", "apple",
          "orange", "mango", "mango"];
 
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
 
console.log(removeDuplicates(arr)); */