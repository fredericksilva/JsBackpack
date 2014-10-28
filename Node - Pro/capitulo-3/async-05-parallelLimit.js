//metodo async-05 parallelLimit()
//npm install async
/* com esse modulo posso aumentar o numero de tarefas
executadas simultaneamente
*Listagem 3-22
*/

var async = require("async");

async.parallelLimit({
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
}, 2, function(error, results) {// 2 é o limite ( N = 2)
	console.log(results);
});
