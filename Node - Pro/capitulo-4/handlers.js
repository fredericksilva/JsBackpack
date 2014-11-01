// listagem 4-8 
var events = require("events");
var EventEmitter = events.EventEmitter();
var emitter = new EventEmitter();

emitter.on("foo", function() { console.log("in foo handler"); });
emitter.listeners("foo").forEach(function(handler) {
	handler();
});