//listagem 3-13
/*intercept() - Tratando de erros usando o metodos
Intercept() do dominio*/
var fs = require("fs");
var domain = require ("domain").create();

fs.readFile("", "utf-8", domain.intercept(function(error, data) {
	/*if (error){
		throw error;
	} Não é necessario com o intercept
	*/
	console.log(data);
	domain.dispose();
}));

domain.on("error", function(error) {
	console.log(" A exceção foi capturada!")
});
