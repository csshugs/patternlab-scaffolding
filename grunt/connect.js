module.exports = {
    options: {
        port: 8000,
        hostname: '0.0.0.0',
        livereload: 35729
    },
    livereload: {
        options: {
            open: true,
            base: [
                './public'
            ]
        }
    },
    server: {
        options: {
            base: './public'
        }
    }
};
