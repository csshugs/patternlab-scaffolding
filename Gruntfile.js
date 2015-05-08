module.exports = function(grunt) {



    var globalConfig = {
        source: {
            js: 'source/js',
            css: 'source/css'
        },
        // Adjust this value to the assets destination path of your cms
        cms: 'cms'
    };



    require('load-grunt-config')(grunt, {
        jitGrunt: {},
        config: {
            globalConfig: globalConfig
        }
    });



    // Default task.
    grunt.registerTask('default', [
        'clean',
        'concat',
        'copy',
        'uglify',
        'sass_globbing',
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
        'sass_globbing',
        'concurrent',
        'browserSync',
        'watch'
    ]);



};
