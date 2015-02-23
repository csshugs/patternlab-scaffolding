module.exports = {
    img_public: {
        files: [
            {
                expand: true,
                cwd: 'source/images/',
                src: ['./**/*.*'],
                dest: 'public/images/'
            }
        ]
    },
    // In the cms you don't want to have dummy images.
    img_cms: {
        files: [
            {
                expand: true,
                cwd: 'source/images/ui/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.cms %>/images/ui/'
            }
        ]
    },
    fonts_public: {
        files: [
            {
                expand: true,
                cwd: 'source/fonts/',
                src: ['./**/*.*'],
                dest: 'public/fonts/'
            }
        ]
    },
    fonts_cms: {
        files: [
            {
                expand: true,
                cwd: 'source/fonts/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.cms %>/fonts/'
            }
        ]
    },
    js_public: {
        files: [
            {
                expand: true,
                cwd: 'source/js/',
                src: ['script.js'],
                dest: 'public/js/'
            }
        ]
    }
};
