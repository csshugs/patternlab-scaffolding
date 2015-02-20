module.exports = function(grunt) {



    var globalConfig = {
        // Adjust this value to the assets destination path of your cms
        cms: 'cms'
    };



    grunt.initConfig({
        globalConfig: globalConfig,

        // Connect
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

        // BrowserSync
        browserSync: {
            bsFiles: {
                src : 'public/css/*.css'
            },
            options: {
                watchTask: true,
                port: 8000,
                server: {
                    baseDir: "./public/"
                }
            }
        },

        // Watch
        watch: {
            scss: {
                files: ['source/css/**/{.*,*,*/*}'],
                tasks: ['sass', 'autoprefixer']
            },
            js: {
                files: ['source/js/**/{.*,*,*/*}'],
                tasks: ['copy:js_public', 'concat', 'uglify']
            },
            img: {
                files: ['source/images/**/{.*,*,*/*}'],
                tasks: ['copy:img_public', 'copy:img_cms']
            },
            fonts: {
                files: ['source/fonts/**/{.*,*,*/*}'],
                tasks: ['copy:fonts_public', 'copy:fonts_cms']
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

        // Concurrent
        concurrent: {
            dev: [
                'sass'
            ]
        },

        // Sass
        sass: {
            options: {
                require: 'sass-globbing',
                loadPath: 'bower_components',
                sourcemap: 'none'
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

        // Autoprefixer
        autoprefixer: {
            options: {
                browsers: [
                    'last 3 version',
                    'ie 9',
                    'ie 10'
                ]
            },
            dev: {
                src: 'public/css/style.css'
            },
            cms: {
                src: '<%= globalConfig.cms %>/css/style.css'
            }
        },

        // Copy
        copy: {
            img_public: {
                files: [
                    {
                        expand: true,
                        cwd: 'source/images/',
                        src: ['./**/*.*'],
                        dest: 'public/images/'
                    }
                ]
            },
            // In the cms you don't want to have dummy images.
            img_cms: {
                files: [
                    {
                        expand: true,
                        cwd: 'source/images/ui/',
                        src: ['./**/*.*'],
                        dest: '<%= globalConfig.cms %>/images/ui/'
                    }
                ]
            },
            fonts_public: {
                files: [
                    {
                        expand: true,
                        cwd: 'source/fonts/',
                        src: ['./**/*.*'],
                        dest: 'public/fonts/'
                    }
                ]
            },
            fonts_cms: {
                files: [
                    {
                        expand: true,
                        cwd: 'source/fonts/',
                        src: ['./**/*.*'],
                        dest: '<%= globalConfig.cms %>/fonts/'
                    }
                ]
            },
            js_public: {
                files: [
                    {
                        expand: true,
                        cwd: 'source/js/',
                        src: ['script.js'],
                        dest: 'public/js/'
                    }
                ]
            }
        },

        // Concat
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

        // Uglifiy
        uglify: {
            cms: {
                files: {
                    '<%= globalConfig.cms %>/js/script.js': '<%= globalConfig.cms %>/js/script.js'
                }
            }
        },

        // Clean
        clean: {
            cms: {
                src: [
                    '<%= globalConfig.cms %>/css/',
                    '<%= globalConfig.cms %>/images/',
                    '<%= globalConfig.cms %>/js/',
                    '<%= globalConfig.cms %>/fonts/'
                ]
            }
        }

    });



    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');



    // Default task.
    grunt.registerTask('default', [
        'clean',
        'concat',
        'copy',
        'uglify',
        'concurrent',
        'connect:server',
        'watch'
    ]);

    // BorwserSync task.
    grunt.registerTask('sync', [
        'clean',
        'concat',
        'copy',
        'uglify',
        'concurrent',
        'browserSync',
        'watch'
    ]);



};
