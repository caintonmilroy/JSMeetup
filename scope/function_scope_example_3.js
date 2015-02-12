// this example shows the different style of defining a function
// the expression style which is defined at runtime

// this example will *not* run, as the funciton is defined at runtime at the 
// place in the file where it is assignd to var addNumbers. It is not puled up.
// so we get an error as addNumber is used before it is defined

var a = 1;
var b = 2;

var answer = addNumbers(a,b);

console.log("the answer is",answer);

var addNumbers = function(x, y)
{
	return x + y;
}