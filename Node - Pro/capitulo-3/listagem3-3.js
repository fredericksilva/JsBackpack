//C 3 - Programação Assincrona
//Listagem 3-3
var fs = require("fs");

fs.readFile("foo.txt","utf-8", function(error, data){
	if (error){
		throw error;
	}
	console.log(data);
});
console.log("lendo o arquivo...");
