
var myArray = [];
function multiplyArrayFunction(myArray) {
    var suma = 0;
    var product = 1;
    var arr = []
    for (var i = 0; i < myArray.length; i++) {

        for (var j = 0; j < myArray[i].length; j++) {

            suma = suma + myArray[i][j];
            product = product * myArray[i][j];
        }
    } arr.push(product, suma);
    return arr;
}
console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));


module.exports = multiplyArrayFunction;