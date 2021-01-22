// 1st Problem: Convert kilometer to meter


// var kilo = 2;
// var meter = kilo*1000;
// console.log(meter);

function kilometerToMeter(kilometer){
    if(kilometer == (null || undefined) || kilometer < 0){
        return "negative or undefined";
    }
    var meter = kilometer*1000; // 1 kilometer = 1000 meter.
    return meter;
}
var meter = kilometerToMeter(1);
console.log(meter);

// 2nd problem: Calculation yo

