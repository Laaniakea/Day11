function myMutation(arr) {
    var firstStringLowecased = arr[0].toLowerCase();
    var secondStringLowecased = arr[1].toLowerCase();
    var secondStringArray = [...secondStringLowecased];
    var hasSecondsString = [];
    for (var i = 0; i < secondStringArray.length; i++) {
        if (firstStringLowecased.includes(secondStringArray[i])) {
            hasSecondsString.push(true);
        }
    }
    return secondStringArray.length == hasSecondsString.length;
}
console.log(myMutation(["hello","hey"]));
console.log(myMutation(["hello","Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba","qrstu"]));
console.log(myMutation(["Mary","Army"]));
console.log(myMutation(["Mary","Aarmy"]));
console.log(myMutation(["Alien","line"]));
console.log(myMutation(["floor","for"]));
console.log(myMutation(["hello","neo"]));
console.log(myMutation(["voodoo","no"]));
console.log(myMutation(["ate","date"]));
console.log(myMutation(["Tiger","Zebra"]));
console.log(myMutation(["Noel","Ole"]));
module.exports = myMutation;