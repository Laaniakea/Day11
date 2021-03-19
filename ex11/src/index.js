// Create an array here
var myArr = [2, 4, 0, 8, 10];
// End creating an array 

function myArrFunction(arr) {
    var myItems = [...arr];

    // Only change code below this line
    myItems[2] = 6;
    return myItems;
    // Only change code above this line

}
console.log(10);
console.log(myArrFunction(myArr));
module.exports = myArrFunction;
