"use strict";
(function() {

    var showMultiplicationTable = function(num) {
        for (var i = 1; i <=10;i++) {
            console.log(num + "x" + i + " = "+ (i * parseInt(num)));
        }
    };

    // showMultiplicationTable(13);

    var randomEvenOdds = function (num){
        for (var j=1; j < 11; j++) {

        var randomNum = Math.floor(Math.random() * 100) + 20;
        var remainderNum = randomNum % 2;
        if (remainderNum === 0){
            console.log(randomNum + " is even");
        } else {
            console.log(randomNum + ' is odd');
        }
    }

        // randomEvenOdds();


    var christmasTree = function (){
        for (var outer = 1;outer <= 9; outer++) {
            var output = '';
            for (var inner = 1; inner <= outer; inner++) ; {
                output += outer;
            }
            console.log(output);
        }
    };

    // christmasTree();

    for (var q=100; q >= 5; q -= 5) {
        console.log(q);
    }
}

})();