var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61],
];

function myArrayFunction(arr) {
    var newTemps = [...arr]
    var averageDayTemp = [];

    for (i = 0; i < newTemps.lenght; i++) {
        var suma = 0;

        for (j = 0; j < newTemps[i].lenght; j++) {

            suma = suma + newTemps[i][j];
        }
        var average = suma / newTemps[i].lenght;
        averageDayTemp.push(average);

    }
    return averageDayTemp;
}
console.log(myArrayFunction([[31, 32, 19, 37], [29, 27, 55, 36], [17, 27, 42, 46], [29, 52, 21, 64], [91, 27, 31, 61]]));

module.export = myArrayFunction;
