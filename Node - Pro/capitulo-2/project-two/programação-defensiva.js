var commander;

try {
	commander = require("commander");	
}catch( exception){
	commander = null;
}
if ( commander ) {
	//faz alguma coisa com o commander
}