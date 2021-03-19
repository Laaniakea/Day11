myPetsArray = ["Dog", "Cat"];



function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    myNewPets.push("Bird", "Fish");
    var lastPet = myNewPets.pop();
    var firstPet = myNewPets.shift();
    myNewPets.unshift("Lion");
    return myNewPets;
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;