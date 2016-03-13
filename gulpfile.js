var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var shell = require('gulp-shell');

// pass -- drafts flag to serve drafts
var config = {
  drafts: !!gutil.env.drafts
};

// paths to various directories
var paths = {
  appDir: './_app',
  appSassFiles: './_app/sass',
  jekyllDir: './',
  siteDir: './_site'
};

gulp.task('build:styles', function () {
  return gulp.src(paths.appSassFiles + '/main.scss')
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['last 2 versions', 'ie >= 9']}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(paths.jekyllDir))
    .pipe(gulp.dest(paths.siteDir))
    .pipe(browserSync.stream())
    .on('error', gutil.log);
});

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
