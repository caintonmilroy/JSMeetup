// this example should work when run

var a = 1;
var b = 2;

var answer = addNumbers(a,b);

console.log("the answer is",answer);

// there are two ways to define a function
// when we define a function with the function keyword like this
// the javascript interpreter will "pull" the function definition
// up to the top of our current scope. So it doesn't matter where 
// within our scope we define the function, it will behave like it 
// was defined right at the top of the scope. Here we are working at global
// scope so this is just like defining it at the top of the file
//
// also see: http://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname
function addNumbers(x, y)
{
	return x + y;
}