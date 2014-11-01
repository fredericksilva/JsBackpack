// Listagem 4-5 - Um Exemplo de esutador de evento de instante usando once()


var events = require("events");
var emitter = new events.EventEmitter();

//escutador de eventos
emitter.once("foo", function() {
	console.log("no tratador de foo ");
});

//adiciona o usuário e depois emite um evento

emitter.emit("foo");
emitter.emit("foo");