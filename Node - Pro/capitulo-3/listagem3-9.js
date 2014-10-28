//listagem 3-9 
/*Tratamento de Exceções usando dominios*/
var fs = require("fs");
var domain = require("domain").create();

domain.run(function() {
	fs.readFile("", "utf-8", function(error, data) {
		if (error){
			throw error;
		}

		console.log(data);
		domain.dispose();
	});
});

domain.on("error", function(error) {
	console.log("A exceção foi capturada!")
});