//Listing 4-13 
/* 
	An Incorret Use of removeListener() with Anonymouns Functions
*/
var events = require("events");
var emitter = new events.EventEmitter();

emitter.on("foo", function () {
	console.log("foo handler ");
});
emitter.removeListener("foo", function() {
	console.log("foo handle");
});
emitter.emit("foo");