var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Default task - DOES THIS HAVE TO BE AT THE BOTTOM?
gulp.task('default', ['serve']);

// Compile sass into CSS, auto-inject into browsers
// DOES THIS HAVE T OCOME AFTER THE SERVE TASK?
gulp.task('sass', function () {
  return gulp.src('styles/*.scss')
    // Process sass
    .pipe(sass())

    // Destination for output CSS
    .pipe(gulp.dest('styles'))

    // Update browsersync
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function () {
  // Initialise browsersync server
  browserSync.init({
    server: "./"
  });

  // Watch for changes to sass, and run 'sass' task on change
  gulp.watch("styles/*.scss", ['sass']);

  // Watch for changes to HTML, and reload browser on change
  gulp.watch("*.html").on('change', browserSync.reload);
});
