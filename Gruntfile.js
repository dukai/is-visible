'use strict';

module.exports = function(grunt) {

    var version = JSON.parse(grunt.file.read('./package.json')).version;

    // Project configuration.
    grunt.initConfig({
        version: version,
        nodeunit: {
            files: ['test/**/*_test.js'],
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib: {
                src: ['lib/**/*.js']
            },
            test: {
                src: ['test/**/*.js']
            },
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib: {
                files: '<%= jshint.lib.src %>',
                tasks: ['jshint:lib', 'nodeunit']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'nodeunit']
            },
        },

        requirejs: {
            default: {
                options:{
                    //appDir: '.',
                    baseUrl: ".",
                    //optimize: "none",
                    paths: {
                        //jquery: "http://cdn.bootcss.com/jquery/1.12.1/jquery.min",
                        jquery: 'empty:',
                        tools: 'empty:',
                    },
                    name: "is-visible",
                    out: "./is-visible-<%= version %>.min.js"
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task.
    grunt.registerTask('default', ['jshint', 'nodeunit']);

};
