// Listagem 4-3 Configurando o Retorno do Evento usando on()

var events = require("events");
var emitter = new events.EventEmitter();

var username = "Frederick";
var password = "mundoadescobrir";

//escutador de eventos
emitter.on("userAdded", function(username, password) {
	console.log("Usuario adicionado: " +username);
});

//adiciona o usuário e depois emite um evento

emitter.emit("userAdded", username, password);