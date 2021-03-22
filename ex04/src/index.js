var monitorListArray = ["Apple", "Peach", "Berry"];

var monitorsList = [];

function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    for (i = 0; i < newMonitorsList.length; i++) {

        newMonitorsList[i] = ([newMonitorsList[i], i + 1]);
    }

    return newMonitorsList;
}

console.log(myMonitorsFunction(monitorListArray));
module.exports = myMonitorsFunction;