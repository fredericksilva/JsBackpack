//listing 4-12
/*
	Removing an Event HAndler Using removeListener()
*/

var events = require("events");
var emitter = new events.EventEmitter();

function handler() {
	console.log("In foo handler");
}

emitter.on("foo", handler);
emitter.emitter.removeListener("foo", handler);
emitter.emit("foo");