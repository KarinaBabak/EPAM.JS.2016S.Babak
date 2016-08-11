var type1 = 0;
var type2 = 0;
var type3 = 0;

for (var i = 0; i < data.length; i++) {
    if (data[i].getCount1) { //if the element of array has a property the counter increases
        type1 += data[i].getCount1();
    }
    else if (data[i].getCount2) {
        type2 += data[i].getCount2();
    }
    else {
        type3 += data[i].getCount3();
    }
}

printCount();

//print count of all types
function printCount() {
    console.log("count 1 = %s", type1);
    console.log("count 2 = %s", type2);
    console.log("count 3 = %s", type3);
}
