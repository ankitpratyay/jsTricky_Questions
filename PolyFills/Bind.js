const Name={
    fname:"Ankit",
    lname:"Pratyay"
}
function getName(age,State){
    console.log(`Hello ${this.fname} ${this.lname} age ${age} from ${State} `)
}

Function.prototype.myBind=function (context={},...args){
    context.Fn=this
    return function(...myArgs){
        return context.Fn(...args,...myArgs)
    }
}
const result=getName.myBind(Name,29);
result("Bihar")