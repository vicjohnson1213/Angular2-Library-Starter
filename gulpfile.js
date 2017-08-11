var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var inlineResources = require('./scripts/inline-resources');

function build() {
    return copyHtml();
}

function copyHtml() {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'))
        .on('end', copyLess);
}

function copyLess() {
    return gulp.src('./src/**/*.less')
        .pipe(gulp.dest('./dist'))
        .on('end', compileLess);
}

function compileLess() {
    return gulp.src('./src/**/*.less')
      .pipe(less())
      .pipe(gulp.dest('./dist'))
      .on('end', inline);
}

function inline() {
    inlineResources('./dist');
}

gulp.task('build', build);
gulp.task('default', ['build']);
