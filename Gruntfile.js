module.exports = function(grunt) {  "use strict";

   ['grunt-contrib-jshint',
    'grunt-contrib-uglify',
    'grunt-contrib-stylus',
    'grunt-contrib-clean',
    'grunt-open'
   ].forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: ".jshintrc",
        reports: require('jshint-stylish')
      },
      all:[
        'Gruntfile.js',
        './src/xs-action-buttons-directive.js',
        './test/pages/*.js'
      ]
    },
    clean: {
      js: ['dist/*.js']
    },
    uglify: {
      options: {
        mangle: false
      },
      all: {
        src: 'src/xs-action-buttons-directive.js',
        dest: 'dist/xs-action-buttons-directive.min.js'
      }
    },
    open: {
      demo: {
        path: 'demo/xs-action-buttons-options.html'
      }
    }

  });
  grunt.registerTask('check', ['jshint']);
  grunt.registerTask('build', ['jshint', 'clean', 'uglify']);
  grunt.registerTask('demo', ['open:demo']);

};
