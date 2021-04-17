"use strict";
//Stop at 3:33
const request = require("request");

const url =
	"http://api.weatherstack.com/current?access_key=be0d617236c0e7dd1c5bb4bd097fa5fd&&query=37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
	let temperature = response.body.current["temperature"];
	let precip = response.body.current["precip"];
	let cloudcover = response.body.current["cloudcover"];

	console.log(
		`Its currently ${temperature} with ${precip} % chance of rain and a cloudcouver of ${cloudcover}`
	);
});

// Challenge : Print: Its currently 59 degress out. There is a 0% chance of rain.

// Basic Async Lesson

/*
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
