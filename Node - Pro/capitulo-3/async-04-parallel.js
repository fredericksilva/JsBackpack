//modulo async-04 parallel()
//npm install async
/* Executando Tres tarefas em paralelo
usando async
*Listagem 3-20
*/

var async = require("async");

async.parallel({
    um: function(callback) {
        setTimeout(function() {
            console.log("Tarefa 1");
            callback(null, 1);
        }, 300);
    },
    dois:function(callback) {
        setTimeout(function() {
            console.log("Tarefa 2");
            callback(null, 2);
        }, 200);
    },
    tres: function(callback) {
    	setTimeout(function() {
    		console.log("Tarefa 3");
    		callback(null,3);
    		}, 100);
    }
}, function(error, results) {
	console.log(results);
});
