//modulo async-03
//npm install async
/* Verificando Erros
usando async
*Listagem 3-8
*/

var async = require("async");

async.series([
    function(callback) {
        setTimeout(function() {
            console.log("Tarefa 1");
            callback(new Error("problema na tarefa 1", 1);
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            console.log("Tarefa 2");
            callback(null, 2);
        }, 100);
    }
], function(error, results) {
	if (error){
		console.log(error.toString());
	} else {
		console.log(results);
	}
});
