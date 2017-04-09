var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('connect', function(){
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('sass', function(){
  return gulp.src('./scss/*.scss')
  .pipe(sass( {errLogToConsole: true }))
  .pipe(gulp.dest('./css'))
  .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('../portfolio/*.html')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('js/*.js')
    .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch(['*.html'], ['html']);
  gulp.watch('js/*.js',['js']);
});

gulp.task('default', ['connect', 'watch', 'sass']);
