/* find longest word in a sentence
	input:- 'this is javascript class'
    output:- javascript
 */
/* const findLongestWord = (str) => {
    str=str.split(' ');
    let longest =''
    str.forEach((ele)=>{
        if(ele.length>longest.length)
        {
            longest=ele;
        }
    })
    console.log(longest)
} */

/* const findLongestWord = (str) => {
  let word = "";
  let temp = "";
  for (ele of str) {
    if (ele != " ") {
      temp += ele;
    } else {
      if (word.length < temp.length) {
        word = temp;
      }
      temp = "";
    }
  }
  if (word.length < temp.length) {
    word = temp;
    temp = "";
  }
  console.log(word);
}; */

function findLongestWord(str) {
  var longestWord = str.split(" ").sort((a, b) => b.length - a.length);
  console.log(longestWord);
  console.log(longestWord[0]);
}
findLongestWord("this is javascript clas");
