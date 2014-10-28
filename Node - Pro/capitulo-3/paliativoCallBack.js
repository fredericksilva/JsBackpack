// Evitando Varias chamadas de Call Back  
//listagem 3-6
var fs = require("fs");
var fileName = "foo.txt";

function cbReadFile(error, data){
	if(error){
		throw error;
	}
	console.log(data);
}

function cbStat(error, stats){
	if (error) {
		throw error;
	}

	if (stats.isFile()) {
		fs.readFile(fileName, "utf8", cbReadFile);
	}
}

function cbExists(exists){
	if (exists) {
		fs.stat(fileName, cbStat);
	}
}
fs.exists(fileName, cbExists);