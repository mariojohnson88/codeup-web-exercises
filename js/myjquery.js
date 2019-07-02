"use strict";

// This alerts the html of the element with the id of "second paragraph"

// var content = $('#second-paragraph').html();
// alert(content);
// OR
// alert($('#second-paragraph').html());

// This originally had the same ID of "generic-lists" set to 2 different elements. What ended up happening is that jquery only took the first occurrence of the id, not the second.
// // // var duplicateId = $('#generic-lists').html();
// // // alert(duplicateId);



// $('.codeup').css('border', '1px solid red');

$('li').css('font-size', '20px').css('background-color', 'red');

$('h1, p, li').css('background-color', '#ef0');

alert($('h1').html());
