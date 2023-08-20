/* reverse a string
	input:- 'sachin'
	output:- 'nihcas'
 */
const reverseString = (str) => {
  let temp = "";
  for (let i = str.length-1;i>=0;i--) {
    temp += str[i]
  }
  return temp;
  /* temp=str.split('').reverse()
    return temp.join('')
  */
  
};
console.log(reverseString("sachin"));
