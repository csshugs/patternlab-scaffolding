module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            options: {
                port: 8000,
                hostname: 'localhost',
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
                tasks: 'sass'
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
            dist: {
                options: {
                    require: 'sass-globbing',
                    loadPath: 'bower_components',
                    style: 'expanded',
                    lineNumbers: true
                },
                files: {
                    'public/css/style.css': 'source/css/style.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', [
        'concurrent',
        'connect:server',
        'watch'
    ]);

};
