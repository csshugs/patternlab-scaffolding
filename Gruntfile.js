module.exports = function(grunt) {



    var globalConfig = {
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
