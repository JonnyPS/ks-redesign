// get gulp
var gulp = require('gulp');
// get browser-sync
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('watch', ['browserSync'], function (){
  gulp.watch('app/*.html').on('change', browserSync.reload);
  gulp.watch('app/**/*.css').on('change', browserSync.reload);
  gulp.watch('app/**/*.js').on('change', browserSync.reload);
});