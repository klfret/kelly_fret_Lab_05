// alert("Lab 5 Function - JavaScript works!- 13 September 2014");


// variable declarations
var firstNumber;
var secondNumber;
var operSignifier;
var calculationResult;


// ******* division function *******
var divisionFunction = function(div_one, div_two) {
	
	var divResult;
	
	divResult = div_one / div_two;
	
	return divResult;
	
};


// ******* multiplication function *******
var multiplicationFunction = function(mul_one, mul_two) {
	
	var mulResult;
	
	mulResult = mul_one * mul_two;
	
	return mulResult;
	
};


// ******* subtraction function *******
var subtractionFunction = function(sub_one, sub_two) {
	
	var subResult;
	
	subResult = sub_one - sub_two;
	
	return subResult;
	
};


// obtain user's numbers and operation signifier for calculation
firstNumber = parseFloat(prompt("Enter first number.", " 6 "));
secondNumber = parseFloat(prompt("Enter second number.", " 17 "));
operSignifier = prompt("Enter one of the following operation signifer.", " \n\n+,  -,  *,  / ");

// if user tries to divide by zero
if (secondNumber == 0) {
	secondNumber = parseFloat(prompt("You cannot divide by zero. \n\nEnter another number."));
}


// if operation signifier is division
if (operSignifier == "/") {
	
	calculationResult = divisionFunction(firstNumber, secondNumber);
	
	
// if operation signifier is multiplication
} else if (operSignifier == "*") {
	
	calculationResult = multiplicationFunction(firstNumber, secondNumber);


// if operation signifier is subtraction	
} else if (operSignifier == "-") {
	
	calculationResult = subtractionFunction(firstNumber, secondNumber);
}


console.log(firstNumber + " " + operSignifier + " " + secondNumber + " = " + calculationResult);


























