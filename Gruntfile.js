'use strict';

module.exports = function(grunt) {
  var config = {
    src: 'src/',
    build: 'build/'
  };

  grunt.initConfig({
    config: config,
    uglify: {
      dev: {
        files: {
          '<%= config.build %>angular-aiqrcode.min.js': ['<%= config.src %>*.js']
        }
      }
    },
    watch: {
      all: {
        files: ['<%= config.src %>*.js',],
        tasks: ['uglify:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['uglify:dev']);
  grunt.registerTask('default', ['uglify:dev','watch']);
};
