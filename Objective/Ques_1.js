/* let i=0; 
for(;i<10;)
{ setTimeout(()=>console.log(i),i++) } */
/* function add(a){
  return function (b){
    if (b){
      return  add(a+b)
    }
    else{
      return a;
    }
  }
}

console.log(add(2)(3)(4)(5)(6)()) */ /* let object = {}
console.log(typeof(typeof(object)))
console.log(typeof(object)) */
/* const b = {
  name: "Vivek",
  f: function () {
    var self = this;
    console.log(this.name);
    (function () {
      console.log(this.name);
      console.log(self.name);
    })();
  },
};
b.f(); */
/* a();
b();
let value = 10
const a = () => {
  console.log(value)
}

function b() {
  console.log(value)
} */
/* const a = () => {
    setTimeout(() => {
      console.log("hello world")
    }, 2000);
    console.log("abc")
  }
  a(); */

/* const a = {
  x: 1,
  y: 2,
};
const b = a;
b.x = 3;
console.log(a);
console.log(b); */
/* var fun = function (arg1) {
  console.log(arg1);
};
console.log(fun); */
/* console.log(typeof [{ x: 1 }]);
console.log(typeof { x: 1 }); */
/* var object = {
  age: 20,
  name: "Rahul",
  colour: ["red", "green", "yellow"],
};
var obj2 = object;
var obj3 = Object.assign({}, object);
var obj4 = {
  ...object,
};
obj2.age = 30;
obj2.colour.push("blue");
console.log(object);
console.log(obj2);
console.log(obj3);
console.log(obj4); */
/* for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  });
} */
/* console.log("first");
Promise.resolve("second").then(sec => console.log(sec));
setTimeout(() => console.log("third"));
console.log("fourth");
 */

/* const foo = {
  bar: "String",
};
foo.bar = 123;
console.log(foo.bar); */
