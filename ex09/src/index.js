function myBouncer (arr) {
    var cleanArr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== false && arr[i] !== undefined && arr[i] !== NaN && arr[i] !== "" && arr[i] !== null && arr[i] !== 0) {
            cleanArr.push(arr[i]);
        }
    }
    return cleanArr;
}
console.log(myBouncer([7,"ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));
module.exports= myBouncer;