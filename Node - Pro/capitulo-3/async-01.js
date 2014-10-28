//modulo async
/* Um Exemplo de tarefas temporizadoras 
execuntando sem fluxo de controle estabelecido*/

var results = [];

setTimeout(function() {
	console.log("Tarefa 1");
	results[0] = 1;
}, 300);

setTimeout(function() {
	console.log("Tarefa 2");
	results[1] = 2;
}, 200);

setTimeout(function() {
	console.log("Tarefa 3");
	results[2] = 3;
}, 100);