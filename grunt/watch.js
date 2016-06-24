module.exports = {
    scss: {
        files: ['<%= globalConfig.source.css %>/**/{.*,*,*/*}'],
        tasks: ['sass']
    },
    js: {
        files: ['<%= globalConfig.source.js %>/**/{.*,*,*/*}'],
        tasks: ['copy:jsPublic', 'copy:jsCms']
    },
    img: {
        files: ['<%= globalConfig.source.img %>/**/{.*,*,*/*}'],
        tasks: ['copy:img']
    },
    fonts: {
        files: ['<%= globalConfig.source.fonts %>/**/{.*,*,*/*}'],
        tasks: ['copy:fontsPublic', 'copy:fontsCms']
    },
    livereload: {
        options: {
            livereload: 35729
        },
        files: [
            '<%= globalConfig.public.css %>/*.css',
            '<%= globalConfig.public.js %>/**/*'
        ]
    }
};
