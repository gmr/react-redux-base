'use strict';

module.exports = function(grunt) {
    grunt.registerTask('serve',
        'Serve application over local connect server',
        ['configureProxies:livereload',
         'connect:livereload']);
};
