module.exports = {
    dev: [
        '<%= globalConfig.source.css %>/**/*.scss'
    ],
    options: {
        config: '.scss-lint.yml',
        colorizeOutput: true,
        force: true
    }
};
