module.exports = function(grunt){
  //Project configuration
  grunt.initConfig({
    // Configure tasks
    concat: {
      release: {
        src: ["js/values.js", "js/prompt.js", "js/getImages.js", "js/main.js"],
        dest: "release/main.js"
      }
    },
    copy: {
      release: {
        src: "manifest.json",
        dest: "release/manifest.json"
      }
    },
    jshint: {
      files: ["js/values.js", "js/prompt.js", "js/getImages.js", "js/main.js"]
    },
    watch: {
      // "<%= jshint.files %>" reference to jshint files, see above
      files: ["<%= jshint.files %>", "manifest.json"],
      tasks: ["default"]
    },
    jasmine: {
      test: {
        src: ["js/values.js", "js/prompt.js", "js/getImages.js", "js/main.js"],
        options: {
          specs: "test/*.js"
        }
      }
    }
  });

  // Load grunt plugins
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");


  // Register tasks
  grunt.registerTask("default", ["jshint", "concat", "copy"]);
};
