// this example will not work as "a" is undefined when the function is called


var b = 2;

var answer = addNumbers(a,b);

var a = 1;

console.log("the answer is",answer);

// there are two ways to define a function
// when we define a function with the function keyword like this
// the javascripte interpreter will "pull" the function definition
// up to the top of our current scope. SO it doesn't matter where 
// within our scope we define the function, it will behave like it 
// was defined right at the top of the scope. Here we are working at global
// scope so this is just like defining it at the top of the file
function addNumbers(x, y)
{
	return x + y;
}