module.exports = {
    options: {
        browsers: [
            'last 3 version',
            'ie 9',
            'ie 10'
        ]
    },
    dev: {
        src: 'public/css/style.css'
    },
    cms: {
        src: '<%= globalConfig.cms %>/css/style.css'
    }
};
