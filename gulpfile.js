var gulp = require('gulp');
var less = require('gulp-less');
var sass = require('gulp-sass');
var path = require('path');
var inlineResources = require('./scripts/inline-resources');

gulp.task('copy', function() {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('compileLess', function() {
    return gulp.src('./src/**/*.less')
      .pipe(less())
      .pipe(gulp.dest('./dist'));
});

gulp.task('compileScss', function() {
    return gulp.src('./src/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./dist'));
});

gulp.task('inline', ['copy', 'compileLess', 'compileScss'], function() {
    inlineResources('./dist');
});

gulp.task('build', ['copy', 'compileLess', 'compileScss', 'inline']);
gulp.task('default', ['build']);
