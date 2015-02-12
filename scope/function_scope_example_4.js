// this example shows the different style of defining a function
// the expression style which is defined at runtime

// this example will run, as the funciton is defined at runtime before it is used

var a = 1;
var b = 2;

var addNumbers = function(x, y)
{
	return x + y;
}

var answer = addNumbers(a,b);

console.log("the answer is",answer);

