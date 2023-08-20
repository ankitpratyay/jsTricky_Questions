const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
 console.log(x)
} 

// for-in return the key of object
//where as for-of used in iterative value like array, string