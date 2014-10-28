//Modelo Cascata
//npm install async
/*
	obs: só funciona com matriz notação de objeto
	não é suportada
	obs2: somente o resultado da ultima tarefa é retornado
	obs3: as funções podem receber argumentos adicionais
	das tarefas anteriores

*Listagem 3-24
* Um cascata que calcula o comprimento da hipotenusa de um triangulo
retangulo
*/

var async = require("async");

async.waterfall([
	function(callback) {
		callback(null, Math.random(), Math.random());
	},

	function(a, b, callback){
		callback(null, a * a + b * b);
	},

	function(cc, callback) {
		callback(null, Math.sqrt(cc));
	}
 ],function(error, c) {
 	console.log(c);
 });
