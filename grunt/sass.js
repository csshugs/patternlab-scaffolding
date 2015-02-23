module.exports = {
    options: {
        require: 'sass-globbing',
        loadPath: 'bower_components',
        sourcemap: 'none'
    },
    dev: {
        options: {
            style: 'expanded',
            lineNumbers: true
        },
        files: {
            'public/css/style.css': 'source/css/style.scss'
        }
    },
    cms: {
        options: {
            style: 'compressed'
        },
        files: {
            '<%= globalConfig.cms %>/css/style.css': 'source/css/style.scss'
        }
    }
};
