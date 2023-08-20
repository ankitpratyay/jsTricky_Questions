Array.prototype.MyReduce=function(cb,initialValue){
    let accumulator= initialValue
    for (let i = 0; i < this.length; i++) {
        accumulator= accumulator?cb(accumulator,this[i], i,this):this[i]
    }
    return (accumulator)
}
arr=[1,2,3,4,5]

const sum = arr.MyReduce((curr,acc)=>{
	return curr+acc
})
console.log(sum)
