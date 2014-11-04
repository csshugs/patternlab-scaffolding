module.exports = function(grunt) {



    var globalConfig = {
        // Adjust this value to the assets destination path of your cms
        cms: 'cms'
    };



    grunt.initConfig({
        globalConfig: globalConfig,
        connect: {
            options: {
                port: 8000,
                hostname: '0.0.0.0',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        './public'
                    ]
                }
            },
            server: {
                options: {
                    base: './public'
                }
            }
        },
        watch: {
            scss: {
                files: ['source/css/**/{.*,*,*/*}'],
                tasks: 'scss'
            },
            js: {
                files: ['source/js/**/{.*,*,*/*}'],
                tasks: 'js'
            },
            livereload: {
                options: {
                    livereload: 35729
                },
                files: [
                    'public/css/style.css',
                    'public/js/**/*'
                ]
            }
        },
        concurrent: {
            dev: [
                'sass'
            ]
        },
        sass: {
            options: {
                require: 'sass-globbing',
                loadPath: 'bower_components'
            },
            dev: {
                options: {
                    style: 'expanded',
                    lineNumbers: true
                },
                files: {
                    'public/css/style.css': 'source/css/style.scss'
                }
            },
            cms: {
                options: {
                    style: 'compressed'
                },
                files: {
                    '<%= globalConfig.cms %>/css/style.css': 'source/css/style.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: [
                    'last 3 version',
                    'ie 8',
                    'ie 9',
                    'ie 10'
                ]
            },
            cms: {
                src: '<%= globalConfig.cms %>/css/style.css'
            }
        },
        concat: {
            options: {
                separator: ' ',
            },
            plugins: {
                src: ['source/js/plugins/*.js'],
                dest: 'public/js/plugins.js',
            },
            cms: {
                src: ['source/js/plugins/*.js', 'source/js/script.js'],
                dest: '<%= globalConfig.cms %>/js/script.js',
            }
        },
        uglify: {
            cms: {
                files: {
                    '<%= globalConfig.cms %>/js/script.js': '<%= globalConfig.cms %>/js/script.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('scss', [
        'sass',
        'autoprefixer'
    ]);

    grunt.registerTask('js', [
        'concat',
        'uglify'
    ]);

    grunt.registerTask('default', [
        'concat',
        'uglify',
        'concurrent',
        'connect:server',
        'watch'
    ]);

};
