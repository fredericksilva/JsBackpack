//codigo de exemplo 4 linting
//Gruntfile.js

module.exports = function(grunt) {
	
	//Iniciando a tarefa do plugin Jshint 
	grunt.loadNpmTasks('grunt-contrib-jshint');

	//Configuração do projeto
	grunt.initConfig({
		jshint: {
			options: {
				curly: true,
				eqeqeq: true
			},
			target1: ['Gruntfile.js','src/**/*.js']
		}
	});

	//Definindo a tarefa padrão
	grunt.registerTask('default', ['jshint']);
};
