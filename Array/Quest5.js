/* write a program to delete the duplicate elements from an array. */
let arr = [
    10, 20, 15, 17, 18, 25, 27, 30, 32, 41, 100, 15, 17, 18, 25, 27, 30, 440,
];

/* function removeDup(arr) {
    let result= [];
    arr.forEach((val)=>{
        if(!result.includes(val))
        {
            result.push(val)
        }
    })
    return result
}

console.log(removeDup(arr)); */

/* const result=arr.reduce((acc,curr)=>{
    if(!acc.includes(curr))acc.push(curr)
    return acc;
},[])
console.log(result) */

/* const result=[...new Set(arr)]
console.log(result) */
/* 
const result = arr.filter((a, i) => arr.indexOf(a) === i)
console.log(result)  */