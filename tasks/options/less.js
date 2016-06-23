'use strict';

module.exports = {
  dev: {
    options: {
      compress: false,
      yuicompress: false,
      sourceMap: true,
      paths: ['src/less/', 'node_modules/bootstrap/less/', 'node_modules/font-awesome/less/']
    },
    files: {
      'dist/<%= pkg.version %>/main.css': 'src/less/main.less'
    }
  }
};
