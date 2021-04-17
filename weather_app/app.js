"use strict";

const request = require("request");

const urlApiMap =
	"https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWxvYmYiLCJhIjoiY2tubTFxaTdtMG1pYTJvbHQ3NTBzc2w0MyJ9.2ZHhLY0ac3FH-urObvg4Nw";

request({ url: urlApiMap, json: true }, (error, response) => {
	const arrCity = [];

	if (error) {
		console.log("Unable to connect to weather service");
	} else {
		let cityName = response.body.features[0]["text"];
		let coordinates = response.body.features[0]["geometry"].coordinates;

		arrCity.push(cityName, coordinates);
		// My variable is arrCity
		let lat = arrCity[1][0];
		let lon = arrCity[1][1];

		//console.log(lat, lon);
	}
});

// WEATHER STACK
const urlWeatherStack =
	"http://api.weatherstack.com/current?access_key=be0d617236c0e7dd1c5bb4bd097fa5fd&&query=37.8267,-122.4233";
const position = urlWeatherStack.indexOf("query=");
// The url below shall be used to build a the new one
const newPartialUrlWeather = urlWeatherStack.slice(0, position + 6);
//console.log(`${newPartialUrlWeather}${lon},${lat}`);
const finalUrlWeather = newPartialUrlWeather + lon + lat;

request({ url: finalUrlWeather, json: true }, (error, response) => {
	let temperature = response.body.current["temperature"];
	let precip = response.body.current["precip"];
	let cloudcover = response.body.current["cloudcover"];

	console.log(
		`Its currently ${temperature} with ${precip} % chance of rain and a cloudcouver of ${cloudcover}`
	);
});

// Add a new GeoCoding service to serve or url with a customize application.
// To serve us I will user the mapBox to provide the correct Lat ant Long .

// Challenge : Print: Its currently 59 degress out. There is a 0% chance of rain.

// Basic Async Lesson

/*
  ===============BASIC CONFIG AT MAPBOX================================================================ 
  https://account.mapbox.com
  token= pk.eyJ1IjoibWxvYmYiLCJhIjoiY2tubTFxaTdtMG1pYTJvbHQ3NTBzc2w0MyJ9.2ZHhLY0ac3FH-urObvg4Nw







  ===============BASIC CONFIG AT WEATHERSTACK================================================================
  Call Stack
  CallBack Queue
  Event Loop
  My Api Key
  password
  Futuro@10
  be0d617236c0e7dd1c5bb4bd097fa5fd
  http://api.weatherstack.com/
  A simple request
  http://api.weatherstack.com/current?access_key=be0d617236c0e7dd1c5bb4bd097fa5fd&&query=37.8267,-122.4233
  */
