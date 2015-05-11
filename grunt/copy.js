module.exports = {
    patternlab: {
        files: [
            {
                expand: true,
                cwd: 'core/styleguide/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.public.public %>/styleguide/'
            }
        ]
    },
    img: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.img %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.public.img %>/'
            }
        ]
    },
    fontsPublic: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.fonts %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.public.fonts %>/'
            }
        ]
    },
    fontsCms: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.fonts %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.cms.fonts %>/'
            }
        ]
    },
    jsPublic: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.js %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.public.js %>/'
            }
        ]
    },
    jsCms: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.js %>/',
                src: ['*.js'],
                dest: '<%= globalConfig.cms.js %>/'
            }
        ]
    }
};
