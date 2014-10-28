//Modelo de Fila
//npm install async
/*
	Metodo queue().

	Pode adicionar tarefas dinamicamente a qualquer momento


*Listagem 3-25
* Inicialização de Uma Fila
* unishift() adiciona tarefa no inicio
* push() adiciona tarefa no final
*/

var async = require("async");
var queue = async.queue(function(task, callback) {
	

	//processa argumentos da tarefa
	console.log(task);
	callback(null);
}, 4);

//Listagem 3.26
/* Um exemplo de adição de tarefas a uma fila async*/
var i = 0;
setInterval(function() {
	queue.push({
		id: i
	}, function(error) {
		console.log("Terminou uma tarefa");
	});
	i++;
}, 200);

/*//Listagem 3.27

if(queue.length() > threshold) {
	queue.concurrency = 8;
}*/

//Listagem 3.28 Exemplo de saturated(), empty() e drain()
queue.saturated = function() {
	console.log(" A fila está saturada");
};

queue.empty = function() {
	console.log(" A fila esta vazia ");
};

queue.drain = function() {
	console.log(" A fila foi drenada ");
};