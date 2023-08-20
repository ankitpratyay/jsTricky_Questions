const Name={
    fname:"Ankit",
    lname:"Pratyay"
}
function getName(){
    console.log(`Hello ${this.fname} ${this.lname} `)
}

Function.prototype.myCall= function(context={}, ...args){
    context.Fn=this;

    context.Fn(...args)
}
getName.myCall(Name);