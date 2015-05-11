module.exports = function(grunt) {



    var globalConfig = {

        source: {
            source: 'source',
            css: 'source/css',
            stylesheet: 'source/css/style.scss',
            js: 'source/js',
            fonts: 'source/fonts',
            img: 'source/images'
        },
        public: {
            public: 'public',
            css: 'public/css',
            stylesheet: 'public/css/style.css',
            js: 'public/js',
            fonts: 'public/fonts',
            img: 'public/images'
        },

        // Adjust these values to the assets destination paths of your cms
        cms: {
            css: 'cms/css',
            stylesheet: 'cms/css/style.css',
            js: 'cms/js',
            fonts: 'cms/fonts'
        }

    };



    require('time-grunt')(grunt);



    require('load-grunt-config')(grunt, {
        jitGrunt: {},
        config: {
            globalConfig: globalConfig
        }
    });



    // Default task.
    grunt.registerTask('default', [
        'clean:public',
        'copy:patternlab',
        'shell:patternlab-generate',
        'bowerInject',
        'jsVendor',
        'copy:img',
        'copy:fontsPublic',
        'copy:fontsCms',
        'copy:jsPublic',
        'copy:jsCms',
        'shell:patternlab-patterns',
        'sass_globbing',
        'concurrent',
        'autoprefixer'
    ]);

    // Pattern Lab dev task.
    grunt.registerTask('dev', [
        'default',
        'connect:server',
        'watch'
    ]);

    // BorwserSync task.
    grunt.registerTask('sync', [
        'default',
        'browserSync',
        'watch'
    ]);



    grunt.registerTask('bowerInject', [
        'clean:jsVendor',
        // 'bowercopy',
        // 'injector'
    ]);

    grunt.registerTask('jsVendor', [
        'concat:jsVendor',
        'uglify:jsVendor'
    ]);



};
