"use strict";


console.log("Hello from external JavaScript");
alert('Welcome to my Website!');
var userColor = prompt('Tell us your favorite color!');
alert('Awesome ' + userColor + ' is my favorite color too!');
console.log('Awesome ' + userColor + ' is a great choice.');

//exercise 3.1
var mermaid = prompt("How many days would you like to rent The Little Mermaid?");
console.log(mermaid * 3 );
var bear = prompt("How many days would you like to rent The Brother Bear?");
console.log(bear * 3);
var hercules = prompt("How many days would you like to rent Hercules?");
console.log(hercules * 3);
var total = (parseInt(mermaid) + parseInt(bear) + parseInt(hercules)) * 3;
console.log(total);
alert("Your total is " + total);

//exercise 3.2
var googleHours = Number(prompt("How many hours did you work for Google this week?"));
var amazonHours = Number(prompt("How many hours did you work for Amazon this week?"));
var faceBookHours = Number(prompt("How many hours did you work for Facebook this week?"));


var googlePay = 400;
var amazonPay = 380;
var fbPay = 350;
alert("This week you've earned " + ((googleHours * googlePay) + (amazonHours * amazonPay) + (faceBookHours * fbPay)));

var classTime = prompt("What time is the class?");
var noScheduleConflict = !confirm("Do you have a class at " + classTime);

var classSizeLimit = (Number(prompt("Whats the maximum class size?")));
var currentClassSize = (Number(prompt('How many student are currently registered?')));
alert("Student can enroll in class " + (noScheduleConflict && (currentClassSize < classSizeLimit)));


var isPremiumMember = confirm('Is the customer a premium member?');
var numberItemsBought = Number(prompt('How many items did you buy?'));
var isOfferValid = confirm('Is the coupon still valid?');
alert('Customer coupon valid: ' + (isOfferValid && (isPremiumMember || numberItemsBought >= 2)));