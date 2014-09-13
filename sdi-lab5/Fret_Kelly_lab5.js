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


// ******* addition function *******
var additionFunction = function(add_one, add_two) {
	
	var addResult;
	
	addResult = add_one + add_two;
	
	return addResult;
	
};


// obtain user's numbers and operation signifier for calculation
firstNumber = parseFloat(prompt("Enter first number.", " 6 "));
secondNumber = parseFloat(prompt("Enter second number.", " 17 "));
operSignifier = prompt("Enter one of the following operation signifers.", " \n\n+,  -,  *,  / ");


// if user tries to divide by zero
if (secondNumber == 0) {
	secondNumber = parseFloat(prompt("You cannot divide by zero. \n\nEnter another number."));
}


// if user enters division operation signifier
if (operSignifier == "/") {
	
	calculationResult = divisionFunction(firstNumber, secondNumber);
	
	
// if user enters multiplication operation signifier
} else if (operSignifier == "*") {
	
	calculationResult = multiplicationFunction(firstNumber, secondNumber);


// if user enters subtraction operation signifier	
} else if (operSignifier == "-") {
	
	calculationResult = subtractionFunction(firstNumber, secondNumber);
	
	
// if user enters addition operation signifier
} else if (operSignifier == "+") {
	
	calculationResult = additionFunction(firstNumber, secondNumber);
	
}


console.log(firstNumber + " " + operSignifier + " " + secondNumber + " = " + calculationResult);




























