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
            '<%= globalConfig.public.stylesheet %>': '<%= globalConfig.source.stylesheet %>'
        }
    },
    cms: {
        options: {
            outputStyle: 'compressed'
        },
        files: {
            '<%= globalConfig.cms.stylesheet %>': '<%= globalConfig.source.stylesheet %>'
        }
    }
};
