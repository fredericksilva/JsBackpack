//listagem 3-12
/*bind callback usando dominios*/
var fs = require("fs");
var domain = require ("domain").create();

fs.readFile("", "utf-8", domain.bind(function(error, data) {
	if (error){
		throw error;
	}

	console.log(data);
	domain.dispose();
}));

domain.on("error", function(error) {
	console.log(" the exception was caught!")
});
