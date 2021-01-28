// Arrow Functions
console.log("Using tradicional functions approach");
/* 
console.log(" Run the script");
const square = function (x) {
    return x * x;
};
*/

//console.log('Using arrows functions es6');

//const square = (x) => {
//    return x * x;
//};
// Now the short hand syntax of arrow functions;

//const square = (x) => x * x;

//let quadrado = square(5);
//console.log(quadrado);

// Now the arrows functions under object s perspective!!
const evento = {
	name: "Birthday Party",
	guestList: ["Marcos", "Jen", "Mike", "Joao", "Carlos", "Vinicios"],

	printGuestList() {
		console.log("This is a guest list for " + this.name);

		this.guestList.forEach((guest) => {
			console.log(guest + " is attending " + this.name);
		});
	},
};

evento.printGuestList();

console.log(" ");
console.log(" ");
console.log(" ");

console.log("++++++++++++++++++++++++++++");
const square = function (x) {
	return x + x;
};
console.log(square(10));

console.log("++++++++++++++++++++++++++++");

const square1 = (x) => {
	return x * x;
};

console.log(square1(5));
