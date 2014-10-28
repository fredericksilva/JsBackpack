//listagem 3-10 
/*Conexão Explicita - CallBack Conectado usando dominios*/

var domain = require ("domain");
var d1 = domain.create();
var d2 = domain.create();

d1.run(function() {
	d2.add(setTimeout(function() {
		throw new Error (" erro de teste");
	}, 1));
});

d2.on("error", function(error) {
	console.log("Capturado por d2");
});

d1.on("error", function(error) {
	console.log("Capturado por d1");
});
