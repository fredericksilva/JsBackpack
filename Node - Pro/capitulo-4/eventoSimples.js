// Listagem 4-1. Um Exemplo de emissor de Eventos Simples
var events = require("events");
var emitter = new events.EventEmitter();

emitter.emit("foo");

//Listagem 4.2 Passagem de Argumento a um evento emitido

var events = require("events");
var emitter = new events.EventEmitter();
var username = "Frederick";
var password = "mundoadescobrir";

/* Adiciona o usuario e depois emite um evento*/
emitter.emit("userAdded", username, password);