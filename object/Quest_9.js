/* let friends = [{
    name: "chris",
    age: 13,
    books: ["sherlock holmes", "english"]
  },
  {
    name: "john",
    age: 13,
    books: ["bible", "harry potter"]
  },
  {
    name: "jack",
    age: 21,
    books: ["Alchemist", "Java"]
  },
  {
    name: "jack",
    age: 21,
    books: ["Wings of fire”,”Davinci code"]
  },
  {
    name: "holmes",
    age: 23,
    books: ["Invisible man”,”The Rainbow"]
  }
]
Output should be: 
{
  13: ["sherlock holmes", "english", "bible", "harry potter"],
  21: ["Alchemist", "Java", "Wings of fire”,”Davinci code"],
  23:["Invisible man”,”The Rainbow"]
}
 */
let friends = [{
    name: "chris",
    age: 13,
    books: ["sherlock holmes", "english"]
  },
  {
    name: "john",
    age: 13,
    books: ["bible", "harry potter"]
  },
  {
    name: "jack",
    age: 21,
    books: ["Alchemist", "Java"]
  },
  {
    name: "jack",
    age: 21,
    books: ["Wings of fire”,”Davinci code"]
  },
  {
    name: "holmes",
    age: 23,
    books: ["Invisible man”,”The Rainbow"]
  }
]
let result={}

friends.forEach((ele)=>{
  result[ele.age] = result[ele.age]? [...result[ele.age],...ele.books] : [...ele.books]
})

/* friends.forEach((val)=>{
  if(result[val.age]){
    result[val.age]=[...result[val.age],...val.books]
  }
  else{
    result[val.age]=[...val.books]
  }

}) */
console.log(result)