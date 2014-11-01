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
	grunt.registerTask('default', ['uglify']);
};


//codigo de exemplo 2
module.exports = function(grunt) {
	
	grunt.registerTask('foo', function(){
		grunt.log.writeln('foo is running...');
	});
};

//codio de exemplo 3 - Simples Configuração

module.exports = function(grunt) {

	grunt.initConfig({
		bar: {
			foo: 42
		}
	});

	grunt.registerTask('bar', function() {
		var bar = grunt.config.get('bar');
		var bazz = bar.foo + 7;
		grunt.log.writeln('Bazz is ' + bazz);
	});
};