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

    $('h3').click(function () {
            $(this).next().children().css('font-weight', 'bold')
    //    here you could also leave out .children and it would yield the same results
    });

    $('li').click(function() {
        $(this).parent().children().first().css('color', 'blue')
    });

















});
