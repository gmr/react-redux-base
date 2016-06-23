module.exports = function(grunt) {
  grunt.registerTask('build', 'Build UI', function(target) {
    var tasks = [
      'clean:build',
      'clean:dist',
      'copy:index',
      'copy:fonts',
      'less',
      'eslint',
      'browserify:app',
      'concat:app'
    ];
    return grunt.task.run(tasks);
  });
};
