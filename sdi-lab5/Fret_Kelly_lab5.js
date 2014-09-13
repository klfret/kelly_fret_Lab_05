// alert("Lab 5 Function - JavaScript works!- 13 September 2014");


// variable declarations
var firstNumber;
var secondNumber;
var operSignifier;
var calculationResult;


// division function
var divisionFunction = function(div_one, div_two) {
	
	var divResult;
	
	divResult = div_one / div_two;
	
	return divResult;
	
};

// obtain user's numbers and operation signifier
firstNumber = parseFloat(prompt("Enter first number.", " 6 "));
secondNumber = parseFloat(prompt("Enter second number.", " 17 "));
operSignifier = prompt("Enter operation signifer.", " + ");

// if division signifier
if (operSignifier == "/") {
	
	calculationResult = divisionFunction(firstNumber, secondNumber);
	
	console.log(firstNumber + operSignifier + secondNumber + " = " + calculationResult);
}





























