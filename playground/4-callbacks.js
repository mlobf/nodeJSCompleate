"use strict";

// Callback is a function the we provided as arg another function

setTimeout(() => {
	console.log("2 seconds to go");
}, 2000);

const names = ["Marcos", "Victor", "Douglas"];
const shortNames = names.filter((name) => {
	return name.length <= 4;
});

const geocode = (address, callback) => {
	setTimeout(() => {
		const data = {
			latitude: 0,
			longitude: 0,
		};
		callback(data);
	}, 2000);
};

geocode("Philadelphia", (data) => {
	console.log(data);
});
