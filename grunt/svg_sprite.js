module.exports = function (grunt, options) {
    var path = require('path');
    return {
        'common': {
            expand: true,
            cwd: './webApp/images/sprites/common',
            src: ['*.svg'],
            dest: './webApp/generated/svg_images/common',
            options: {
                shape: {
                    id: {
                        generator: function(file_path){
                            return path.basename(file_path, path.extname(file_path))
                        }
                    },
                    dimension: {
                        maxWidth: 52,
                        maxHeight: 52
                    },
                    spacing: {
                        padding: 4
                    },
                },
                mode: {
                    view: {
                        dest: './',
                        common: 'common',
                        bust: false,
                        sprite: 'common.svg',
                        render: {
                            scss: {
                                template: './grunt/template/scss.svg.sprite.template.handlebars',
                                dest: './../../../../src/sass/generated/sprites/_common.scss'
                            }
                        }
                    },
                }
            }
        }
    }
};