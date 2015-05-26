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
                ],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Grunt force default
    grunt.option('force', true);

    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin', 'copy']);
};
