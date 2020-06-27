var hours = new Date().getHours();

var hours = (hours+24)%24;

var mid='AM';

if (hours == 0) { 

	hours = 12;
}

else if (hours>12)  {

	hours = hours%12;

	mid='PM';
}

alert ("It's " + hours + mid);


var lastDate = new Date("Dec 31, 2020");

document.write("Later Date: " + lastDate + "<br>");


var ramazan = new Date("Apr 24, 2020");

var today = new Date();

var diff = today - ramazan;

var diff1 = Math.floor(diff/(1000*60*60*24));

document.write(diff1 + " dayshave passed since 1st Ramadan, 2020" + "<br>");

var ref = new Date("Jun 20, 2020");

var today = new Date();

var diff = today - ref;

var diff1 = Math.floor(diff/1000);

document.write("On reference date " + ref + "<br>")

document.write(diff1 + " seconds had passed since begining of 2020" + "<br>");


var d = new Date();

document.write("Current Time " + d + "<br>")

d.setHours(d.getHours()-1)

document.write("1 hour ago, It was " + d + "<br>");

var d = new Date();

document.write("Current Time " + d + "<br>")

d.setFullYear(d.getFullYear()-100)

document.write("100 years back, It was " + d + "<br>");

/*-----------------------------------Task----------------------------------*/

var dob = new Date(prompt("Please Enter Your Age","jan 1, 1970"))

var dobmili = dob.getTime();

var today = new Date();

var todaymili = today.getTime();

var diff = todaymili - dobmili;

var age = Math.floor(diff/(1000*60*60*24*30*12));

document.write("Your age is " + age + "<br>");

/*-----------------------------------Task----------------------------------*/

var dob = new Date(+prompt("Please Enter Your Age"))

var dobmili = dob.getTime();

document.write(dobmili)

var today = new Date();

var todaymili = Number(today.getFullYear());

var diff = todaymili - dobmili;

document.write("Your age is " + diff + "<br>");

/*-----------------------------------Task----------------------------------*/

var userName = prompt("Enter Customer Name");

var mon = new Date(prompt("Enter the Month"));

var mon1 = mon.getMonth();

var units = +prompt("Number of Units Consumed");

var charges = 16;

var net = units * charges;

var late = 350;

var gross = net + late;

document.write("Customer Name: " + userName + "<br>");

document.write("Month: " + mon1 + "<br>");

document.write("Number of units: " + units + "<br>");

document.write("Charges per unit: " + charges + "<br>");

document.write("Net Amount Payable (within Due Date): " + net + "<br>");

document.write("Late payment surcharge: " + late + "<br>");

document.write("Gross Amount PAyable (after Due Date) " + gross + "<br>");

/*-----------------------------------task-------------------------------------*/

function tellTime() {
var now = new Date();
var theHr = now.getHours();
var theMin = now.getMinutes();
alert("Current time: "+ theHr + ":" + theMin);
}
tellTime();


function time() {
	var now = new Date();
	document.write(now);


}

time();


function greeting() {
	var firstName = prompt("Enter Your First Name");

	var lastName = prompt("Enter Your Last Name");

	var fullNmae = firstName + " "  +lastName;

	alert("Your Full Name is " + fullNmae);
}

greeting();


function sum() {
	var firstNum = +prompt("Enter any number");

	var secondNum = +prompt("Enter any number");

	var sumOfNum = firstNum + secondNum;

	document.write("Sum of two number: " + sumOfNum + "<br>");
}

sum();

