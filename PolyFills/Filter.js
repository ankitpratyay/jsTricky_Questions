const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

Array.prototype.myFilter = function (cb) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) result.push(this[i])
    }
    return result;
}
console.log(arr.myFilter((ele)=>ele>5))