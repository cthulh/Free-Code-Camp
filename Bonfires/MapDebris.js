/*
 Return a new array that transforms the element's average altitude into their orbital periods.

 The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
 */
function orbitalPeriod(arr) {
    var getOrbPer = function(alt){
        return Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + alt,3) / GM));
    };

    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    for (var i = 0; i < arr.length; i++){
        arr[i].orbitalPeriod = getOrbPer(arr[i].avgAlt);
        delete arr[i].avgAlt;
    }

    return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
