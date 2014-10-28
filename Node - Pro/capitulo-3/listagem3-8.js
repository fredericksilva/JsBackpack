/* Tratamento de Exeções Globais */
var fs = require("fs");

fs.readFile("", "utf-8", function(error,data){
	if (error) {
			throw error;
	}

	console.log(data);
});

process.on("uncoughtException",function(error) {
	console.log("The exception was cought!")
});