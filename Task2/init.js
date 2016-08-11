var data = [];

//creating elements of array of random type
for (var i = 0; i < 5; i++) {
    data[i] = {};
    var type = random(1,3);
    data[i]["count"] = random(1,10);
    data[i]["getCount" + type] = function() {
        return this.count;
    }

    console.log("type = %s, count = %s", type, data[i].count);
}