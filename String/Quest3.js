/* input:- 'This is javascript class'
	output:- 'class javascript is this'
 */
let str= 'This is javascript class';
function reverseWord(str) {
/* 	str=str.split(' ').reverse();
	console.log(str.join(' ')) */
	let arr=[]
	let temp=''
	for(ele of str)
	{
		if(ele != ' ')
		{
			temp += ele
		} else{
			arr.unshift(temp)
			temp = ""
		}
	}
	arr.unshift(temp)
	console.log(...arr)
	
}
reverseWord(str)