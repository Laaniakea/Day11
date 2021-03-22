
var myArray = [];
function multiplyArrayFunction(myArray) {
    var sum = 0;
    var product = 1;
    var arr = []
    for (var i = 0; i < myArray.length; i++) {

        for (var j = 0; j < myArray[i].length; j++) {

            sum = sum + myArray[i][j];
            product = product * myArray[i][j];
        }
    } 
    arr.push(product, sum);
    return arr;
}
console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));
console.log(multiplyArrayFunction([[1, 2], [3, 4, 5, 6], [7, 8, 9]]));


module.exports = multiplyArrayFunction;