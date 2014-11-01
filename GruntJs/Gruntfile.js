module.exports = function(grunt) {

	//Iniciando o plugin  "uglify" tarefas.
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//Configuração do Projeto
	grunt.initConfig({
		uglify: {
			target1: {
				src: 'foo.js',
				dst: 'foo.min.js'
			}
		}
	});

	//Definindo a tarefa padrão
	grunt.grunt.registerTask('default', ['uglify']);
};