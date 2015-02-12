// HIDING VARIABLES

// when we defne our functions they can see variables declared within the
// containing scope
//
// we need to be careful with the variable names that we choose 
// to use inside a function or as parameters to a function, when we 
// use the expression style of function declaration as below

var a = 1;
var b = 2;
var c = 10;

// for example, we are using a & b
var addNumbersAndC = function(x, y)
{
	return a + b + c; // the function now relies on C being defined in the containing scope
}

var answer = addNumbersAndC(a,b);

console.log("the answer is",answer);



// if we redfine our function
var addNumbersAndHideC = function(x, y)
{
	var c = 1; // and happen to use a variable c we wil hide the one in the containing scope
	return a + b + c;
}

var answer = addNumbersAndHideC(a,b);

console.log("the answer is",answer);