"use strict";
$(document).ready(function() {
// This alerts the html of the element with the id of "second paragraph"

// var content = $('#second-paragraph').html();
// alert(content);
// OR
// alert($('#second-paragraph').html());


// Class selectors

// This originally had the same ID of "generic-lists" set to 2 different elements. What ended up happening is that jquery only took the first occurrence of the id, not the second.

// // // var duplicateId = $('#generic-lists').html();
// // // alert(duplicateId);
// $('.codeup').css('border', '1px solid red');


// Element selectors

// $('li').css('font-size', '20px');
//
// $('h1, p, li').css('background-color', '#ef0');
//
// alert($('h1').html());


    // Mouse Events Exercise
//Using "this" tells the us that we ONLY want that certain element to accept the mouse event. If it were replaced with the element you were targeting, ALL of that specific element would change. Notice the difference between the list items and h1/p elements.

    $('h1').click(function () {
        $(this).css('background-color', '#42D2A9')
    });

        $('p').dblclick(function () {
            $('p').css('font-size', '18px')
        });

        $('li').hover(
            function () {
                $(this).css('color', 'red');
            },
            function () {
                $(this).css('color', 'black');
            })

});