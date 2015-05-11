module.exports = {
    options: {
        destFile: '<%= globalConfig.source.source %>/_patterns/00-atoms/00-meta/_01-foot.mustache',
        ignorePath: 'source',
        addRootSlash: false,
        transform: function(file, index, length) {
            return '<script src="../../' + file + '"></script>';
        }
    },
    files: {
        expand: true,
        cwd: '<%= globalConfig.source.js %>/vendor',
        src: ['**/*.js']
    }
};
