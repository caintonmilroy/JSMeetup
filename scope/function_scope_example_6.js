// passing by value vs passing by reference

// in javascript primitive types like String & Number are passed by value
// whilst objects are passed by reference

// for example

var name = "Cainton";
function printName1(the_name) {
	console.log('Inside printName1 - the_name is', the_name);
}
printName1(name);
console.log('Outside Function - the name is', name);

console.log("now let's change the name inside the function");

function printName2(the_name) {
	the_name = "Steve";
	console.log('Inside printName2 - the_name is', the_name);
}
printName2(name);
console.log('Outside Function - the name is', name);

// no change as the value of name is passed into the function,
// then changing the_name does not affect name


var t = {name: "Cainton"};
function printName3(the_person) {
	console.log('Inside printName2 - the_name is', the_person.name);
}
printName3(person);
console.log('Outside Function - the name is', person.name);

console.log("now let's change the name inside the function again");

function printName4(the_person) {
	the_person.name = "Steve";
	console.log('Inside printName2 - the_name is', the_person.name);
}
printName4(person);
console.log('Outside Function - the name is', person.name);