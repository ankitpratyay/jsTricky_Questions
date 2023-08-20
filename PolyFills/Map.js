const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

Array.prototype.myMap = function (cb) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this))
    }
    return result;
}
console.log(arr.myMap((ele)=>ele*2))