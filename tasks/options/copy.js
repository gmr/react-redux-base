'use strict';

module.exports = {
  index: {
    files: [
      {
        expand: true,
        flatten: true,
        src: ['src/index.html'],
        dest: 'dist/<%= pkg.version %>/',
        filter: 'isFile'
      }
    ]
  },
  fonts: {
    files: [
      {
        expand: true,
        flatten: true,
        src: ['node_modules/font-awesome/fonts/*'],
        dest: 'dist/<%= pkg.version %>/fonts/',
        filter: 'isFile'
      }
    ]
  }
};
