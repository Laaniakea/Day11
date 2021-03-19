function largestNumFromArr(arr) {
    var maxNumArray = [];
    

    for (var i = 0; i < arr.length; i++) {
        var max = 0
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max){
                max = arr[i][j];
            }
        }
        maxNumArray.push(max);
    }
    return maxNumArray;
}

console.log(largestNumFromArr([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
module.exports = largestNumFromArr;