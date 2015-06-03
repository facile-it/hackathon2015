/*global module:false*/
"use strict";

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> */\n',

        // Task configuration.

        // Clean build directory
        clean: ["build"],

        // JS Concatenation
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['src/js/app.js'],
                dest: 'build/js/app.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: '<%= concat.dist.dest %>'
            },
        },
        // SASS Build
        sass: {
            dist: {
                files: {
                    'build/css/app.css': 'src/sass/app.scss',
                }
            }
        },
        // CSS minification
        cssmin: {
            options: {
                compatibility: 'ie8',
                keepSpecialComments: '*',
                noAdvanced: true
            },
            core: {
                files: {
                    'build/css/app.css': 'build/css/app.css',
                }
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    {
                        flatten: true,
                        expand: true,
                        src: ['src/*.html'],
                        dest: 'build/',
                        filter: 'isFile'
                    },
                    {
                        flatten: true,
                        expand: true,
                        src: ['src/images/*.*'],
                        dest: 'build/images',
                        filter: 'isFile'
                    },
                    {
                        flatten: true,
                        expand: true,
                        src: ['src/font/*.*'],
                        dest: 'build/font',
                        filter: 'isFile'
                    },
                ],
            },
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'build'
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            scss: {
                files: ['src/sass/*.scss'],
                tasks: ['sass', 'cssmin'],
                options: {
                    spawn: false,
                },
            },
            html: {
                files: ['src/*.html'],
                tasks: ['copy'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    // Grunt force default
    grunt.option('force', true);

    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin', 'copy']);
    grunt.registerTask('serve', "Development server with files watch", ['connect:server', 'watch']);
};
