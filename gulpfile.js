// gulpfile.js
var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('scripts', function() {
  return gulp.src(['./src/*.js'])
    .pipe(concat('rawrfletime.combined.js'))
    .pipe(minify())
    .pipe(gulp.dest('./dist/'))
});
