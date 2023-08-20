let arr = ["c", "a", "k", "e", "", "e", "a", "t", "", "m", "a", "t", "e", ""];

function joinArr(arr) {
  let result=[];
  let temp ='';
  arr.forEach((ele)=>{
    if (ele != '')
    {
      temp +=ele
    }else {
      result.push(temp)
      temp=''
    }
  })
  console.log(result)
}
joinArr(arr);

