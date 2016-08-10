document.addEventListener("DOMContentLoaded", function() {

    for(var i = 0; i < data.length; i++){ //passing on the array
        var outputString; //string contains the value of element

        if(typeof(data[i])== "undefined"){ //checking for type of element of array is undefined
            outputString = "element is undefined";
        }
        else if(typeof(data[i]) == null){  //checking if the type of element is null
            outputString = "element is null"
        }
        else{ //element is a number
            outputString = data[i];
        }
        console.log("data[" + i + "]=" + outputString);
    }
});