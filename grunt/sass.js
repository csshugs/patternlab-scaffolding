module.exports = {
    options: {
        includePaths: [
            'bower_components/'
        ],
        sourcemap: false
    },
    dev: {
        options: {
            outputStyle: 'nested',
            sourceComments: true
        },
        files: {
            'public/css/style.css': 'source/css/style.scss'
        }
    },
    cms: {
        options: {
            outputStyle: 'compressed'
        },
        files: {
            '<%= globalConfig.cms %>/css/style.css': 'source/css/style.scss'
        }
    }
};
