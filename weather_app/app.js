"use strict";

// Basic Async Lesson

console.log("Starting");

setTimeout(() => {
	console.log("2 second Timer");
}, 2000);

setTimeout(() => {
	console.log("O second timer");
}, 0);

console.log("Stopping");
/*
  Call Stack
  CallBack Queue
  Event Loop
*/
