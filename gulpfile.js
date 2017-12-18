'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  });
});

gulp.task('watch', function () {
    gulp.watch('css/**/*.css', browserSync.reload);
    gulp.watch('assets/js/**/*.js', browserSync.reload);
    gulp.watch('./*.html', browserSync.reload);
});

gulp.task('default', ['browserSync','watch']);
