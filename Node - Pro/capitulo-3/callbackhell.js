//Call Back Hell
//listagem 3-5
var fs = require("fs");
var fileName = "foo.txt";

fs.exists(fileName, function(exists) {
	if (exists) {
		fs.stat(fileName, function(error, stats) {
			if (error) {
				throw error;
			}

			if ( stats.isFile()) {
				fs.readFile(fileName, "utf8", function(error, data) {
					if(error) {
						throw error;
					}

					console.log(data);
				});
			}
		});
	}
});