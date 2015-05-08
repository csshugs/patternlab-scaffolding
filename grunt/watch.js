module.exports = {
    scss: {
        files: ['source/css/**/{.*,*,*/*}'],
        tasks: ['sass_globbing', 'sass', 'autoprefixer']
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
};
