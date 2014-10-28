/* Tratamento Assincrono de Erro ( incorreto )
* listagem 3.7*/
var fs = require ("fs");

try {
	fs.readFile("", "utf-8", function(error, data) {
		if (error) {
			throw error;
		}
		console.log(data);
	});
} catch (exception) {
	console.log(" A execução foi capturada")
}