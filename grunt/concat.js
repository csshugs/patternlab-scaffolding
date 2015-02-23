module.exports = {
    options: {
        separator: ' ',
    },
    plugins: {
        src: ['source/js/plugins/*.js'],
        dest: 'public/js/plugins.js',
    },
    cms: {
        src: ['source/js/plugins/*.js', 'source/js/script.js'],
        dest: '<%= globalConfig.cms %>/js/script.js',
    }
};
