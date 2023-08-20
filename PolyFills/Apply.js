const Name={
    fname:"Ankit",
    lname:"Pratyay"
}
function getName(age,State){
    console.log(`Hello ${this.fname} ${this.lname} age ${age} from ${State} `)
}

Function.prototype.myApply= function(context={}, args){
    context.Fn=this;
    if(args)
    context.Fn(...args)
    else
    context.Fn()
}
getName.myApply(Name);