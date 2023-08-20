/* let arr=[1,1,2,2,3,3,3,3,4,4,4,4,4,5,6,7]	
Output should be: 
Remove the duplicate element from this array without using predefined methods.
 */
let arr=[1,1,2,2,3,3,3,3,4,4,4,4,4,5,6,7]

function dupEle(arr) {
    let temp= [];
    arr.forEach(ele=>{
        if(!temp.includes(ele))
        {
            temp.push(ele)
        }
    })
    return temp
}
console.log(dupEle(arr))