module.exports = {
    bsFiles: {
        src : 'public/css/*.css'
    },
    options: {
        watchTask: true,
        port: 8000,
        server: {
            baseDir: "./public/"
        }
    }
};
