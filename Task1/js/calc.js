// passing on the array. if elements are undefined
for(var element in data){
    if(isNumeric(data[element])) {
        data[element] = Number(data[element]);

        if (data[element] == 0) {
            data[element] += 10;
        }
        else if (data[element] > 100) {
            data[element] -= 100;
        }
        else if (data[element] < 100) {
            data[element] += 100;
        }
    }
}

function isNumeric(n) { //checking for the number
    return !isNaN(parseFloat(n)) && //parseFloat() parse argument to string, then get from string a number. Return NaN if the string is empty, contains boolean type or null
        isFinite(n); //isFinite() return true if the number is not Infinity/-Infinity/NaN.

}