//listagem 4-9
var events = require("events");
var emitter = new events.EventEmitter();

emitter.on("newListener", function(eventName, listener) {
	console.log("Add listener for " + eventName + " events");
 });

emitter.on("foo", function() {});
