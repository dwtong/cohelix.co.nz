var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();

// Run Jekyll 'build' task, and watch for changes
gulp.task('build', shell.task(['jekyll build --watch']));

// Run browser sync server, and update when Jekyll rebuilds
gulp.task('serve', function() {
  // Initialise browserSync server
  browserSync.init({
    server: {
      baseDir: '_site'
    }
  });

  // Update browserSync whenever Jekyll rebuilds any files in _site
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

// Default task
gulp.task('default', ['build', 'serve']);
