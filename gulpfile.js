(function () {
// IMPORTS
//##########################################################
'use strict';
/* global require */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var browser = require('browser-sync');

// SETTINGS
//##########################################################
var paths = {
    'css': './static/css/',
    'images': './static/img/',
    'js': './static/js/',
    'media': './tmp/media/',
    'sass': './private/sass/',
    'html': './templates/'
};

var patterns = {
    'images': [paths.images+'*', paths.images+'**/*', '!'+paths.images+'/dummy/*/**'],
    'js': [paths.js+'*.js', paths.js+'**/*.js', '!'+paths.js+'*.min.js', '!'+paths.js+'**/*.min.js'],
    'media': [paths.media+'**/*'],
    'sass': [paths.sass+'*', paths.sass+'**/*']
};

// TASKS
//##########################################################
// TASKS/javascript
gulp.task('lint', function() {
    gulp.src(patterns.js.concat([paths.js+'!libs/*.js', './gulpfile.js']))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// TASK/browser reload
gulp.task('browser', function() {
    var files = [
        paths.html+'**/*.html',
        paths.css+'base.css',
        paths.js+'**/*min.js'
    ];

    browser.init(files, {
        proxy: 'localhost:' + process.env.PORT || '8000'
    });
});

// TASK/image preprocessing
gulp.task('static', function () {
    gulp.src(patterns.images)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images));
});

gulp.task('media', function () {
    gulp.src(patterns.media)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.media));
});

// RUNNERS
//##########################################################
gulp.task('default', function () {

    // initial load
    // gulp.start('static'); start this manually
    gulp.start('lint');
    gulp.start('browser');

    // add watch tasks
    gulp.watch(patterns.js.concat(['./gulpfile.js']), ['lint']);

});

// end of gulpfile.js
}());