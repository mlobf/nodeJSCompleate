// Arrow Functions
// Arrow Functions are not great for methods

console.log("Using normal functions approach");
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

/*
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
console.log(square(100));

console.log("++++++++++++++++++++++++++++");

const square1 = (x) => {
	return x * x;
};

console.log(square1(8));

console.log("++++++++++++++++++++++++++++");

const square2 = (x) => x * x;

console.log(square2(99));
*/

// Recovering

//const square = (num) => {
//	return num * num;
//};

const square = (num) => num * num;

const event = {
	name: "Bday Party",
	guestList: ["Marcos", "Lin", "Caio", "Carlos"],
	printGuestList() {
		console.log("Guest list for " + this.name);
		this.guestList.forEach((guest) => {
			console.log(guest + " is attending " + this.name);
		});
	},
};

event.printGuestList();

console.log(square(2));
