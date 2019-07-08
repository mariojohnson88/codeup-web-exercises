"use strict";

$(document).ready(function() {
    $('#visible').click(function() {
        $('dd').toggleClass('invisible');
    });
    $('dt').click(function() {
        $(this).toggleClass('highlight');
    });

    $('#highlight-last-fact').click(function() {
        $('ul').each(function () {
            $(this).children().last().css('background-color', '#FFFF3F')
        })
    });
    $("ul").hide();
    $('h3').click(function () {
        $(this).next().slideToggle(2500);
            $(this).next().children().css('font-weight', 'bold')
    //    here you could also leave out .children and it would yield the same results
    });

    $('li').click(function() {
        $(this).parent().children().first().css('color', 'blue')
    });

    $('span').click(function() {
        $('div').hide()
    });

    $('#register').hide();
    var delay = 8000;
    var timeoutId = setTimeout(function () {
        $('#register').fadeIn(4000);
    }, delay);











});
