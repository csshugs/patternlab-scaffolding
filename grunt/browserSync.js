module.exports = {
    bsFiles: {
        src : '<%= globalConfig.public.css %>/*.css'
    },
    options: {
        watchTask: true,
        port: 8000,
        ui: {
            port: 8001
        },
        server: {
            baseDir: "./<%= globalConfig.public.public %>/"
        }
    }
};
