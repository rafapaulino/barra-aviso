/*global module:false*/
module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        cssmin: {
			target: {
				files: {
					'css/barra-aviso.min.css': [
						'css/barra-aviso.css'
					]
				}
			}
        },
        uglify: {
            target: {
                files: {
                    'js/barra-topo-min.min.js': [
                        'js/barra-topo.js'
                    ]
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task.
    grunt.registerTask('default', ['cssmin','uglify']);

};