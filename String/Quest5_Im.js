/* print a string in title case
	input:- 'this is javascript class'
    output:- 'This Is Javascript Class'
 */
let str= 'this is javascript class';
str=str.split(' ')
for(let i =0;i<str.length;i++)
{
    console.log(str[i])
    str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
}
str=str.join(' ')
console.log(str)