// Listagem 4-7 Determinando o numero de escutadores usando eventEmitter . listenerCount()
// listenerCount()

var events = require("events");
var EventEmitter = events.EventEmitter();

//Obtém o construtor de EventEmitter do módulo events
var emitter = new EventEmitter();

emitter.on("foo", function() {});
emitter.on("foo", function() {});
console.log(EventEmitter.listenerCount(emitter, "foo"));