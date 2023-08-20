/* print the first non-repeated character in a string
   input:- 'entertainment'
   output:- r
 */
let str='entertainment'
function findNonRep(str){
    let temp=''
    for(ele of str){
        if(str.indexOf(ele)===str.lastIndexOf(ele))
        {
            temp= ele
            break;
        }
    }
    console.log(temp)
}
findNonRep(str)