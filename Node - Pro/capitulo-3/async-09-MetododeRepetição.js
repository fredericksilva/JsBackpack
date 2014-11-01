//Métodos de Repetição
//npm install async
/*
	Metodo Whilst()ta 

*Listagem 3-29



*/

var async = require("async");
var i = 0;

async.whilst(function() {
	return i < 5;
}, function(callback) {
	setTimeout(function() {
		console.log("i =" + i);
		i++;
		callback(null);
	}, 1000);
},	function(error) {
		console.log("pronto!");
});

/*Assinatura dos Metodos doWhilst()

async.doWhilist(corpo, teste, rechamada)
async.until(teste, corpo, rechamada)
async.doUntil(corpo, teste, rechamada)
*/

//Memoize() and async.unmemoize(fn) ( Memorizaão )

// Lista Completa Github: https://github/caolan/async