/* const arr = [{
  id: "1",
  name: "number1"
}, {
  id: "2",
  name: "number2"
}, {
  id: "3",
  name: "number3"
}, {
  id: "S1",
  name: "number4"
}, {
  id: "4",
  name: "number4"
}]	
 */
const arr = [
  {
    id: "1",
    name: "number1",
  },
  {
    id: "2",
    name: "number2",
  },
  {
    id: "3",
    name: "number3",
  },
  {
    id: "S1",
    name: "number4",
  },
  {
    id: "4",
    name: "number4",
  },
];
arr.map((val, ind) => {
  if (isNaN(parseInt(val.id))) {
    let temp = val;
    arr.splice(ind, 1);
    arr.unshift(temp);
  }
});

/* arr.sort((a,b)=>(a.id>b.id?1:-1))
let temp= arr.splice(arr.length-1,1)
arr.unshift(temp[0]) */
console.log(arr);
