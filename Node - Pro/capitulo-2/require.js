// Estendendo o objeto require.extensions para suportar tipos adicionais de arquivo
require.extensions[".javascript"] = require.extensions[".js"];
//Adicionando um tratador personalizado ao objeto require
require.extensions[".javascript"] = function() {
	console.log(arguments);
} 