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

// 2nd problem: Calculation your budget

// var numberOfWatch = 4;
// var numberOfPhone = 5;
// var numberOfLaptop = 6;

// var watchPrice = 50;
// var phonePrice = 100;
// var laptopPrice = 500;

// var total = (watchPrice * numberOfWatch) + (phonePrice * numberOfPhone) + (laptopPrice * numberOfLaptop);
// console.log(total);



function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
    // checking validation
    if (numberOfWatch < 0 || numberOfPhone < 0 || numberOfLaptop <
        0) {
        return " Input valid quantity";
    } else if (numberOfWatch == (null || undefined) || numberOfPhone == (null || undefined) || numberOfLaptop == (null || undefined)) {
        return "This product is not free";
    }

    // Price of Items
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var total = (watchPrice * numberOfWatch) + (phonePrice * numberOfPhone) + (laptopPrice * numberOfLaptop);
    return total;
}
var total = budgetCalculator(1, 2, 3);
console.log(total);

//3rd problem: finding mega name of friends

function megaFriend(friendsName) {
    var count = 0;
    var megaName = ' ';
    for (var i = 0; i < friendsName.length; i++) {
        var char = friendsName[i];

        if (char != null && char != undefined) { // checking char null or undefined
            if (char.length > count) {
                count = char.length;
                megaName = char;
            }
        }
    }
    return megaName;
}

var megaName = megaFriend(['jahid', 'sabbir', 'kabir']);
console.log(megaName);

// 4th problem: hotel cost calculation

