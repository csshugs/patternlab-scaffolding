module.exports = {
    libs: {
        src: [
            'jquery/dist/jquery.js'
        ],
        dest: '<%= globalConfig.source.js %>/vendor/libs'
    },
    plugins: {
        src: [
            'slick.js/slick/slick.js'
        ],
        dest: '<%= globalConfig.source.js %>/vendor/plugins'
    }
};
