"use strict";
(function(){

var i = 1;
while(i < 65536) {
    i = i * 2;
    console.log(i);
}


var allCones = Math.floor(Math.random() * 50) + 50;
do {
    var conesSold = Math.floor(Math.random() * 5) + 1;
    if (allCones < conesSold) {
        console.log("Customer attempted to buy too many cones");
    } else {
        allCones -= conesSold;
        console.log("Customer bought " + conesSold);
    }
} while (allCones >= 1 );


})();

