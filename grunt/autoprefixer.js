module.exports = {
    options: {
        browsers: [
            'last 3 version',
            'ie 9',
            'ie 10'
        ]
    },
    dev: {
        src: '<%= globalConfig.public.stylesheet %>'
    },
    cms: {
        src: '<%= globalConfig.cms.stylesheet %>'
    }
};
