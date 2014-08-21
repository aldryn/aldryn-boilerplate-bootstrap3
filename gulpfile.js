(function () {
// IMPORTS
//##########################################################
'use strict';
/* global require */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');

// SETTINGS
//##########################################################
var paths = {
    'css': './static/css/',
    'html': './templates/',
    'images': './static/img/',
    'js': './static/js/',
    'media': './tmp/media/',
    'sass': './private/sass/'
};

var patterns = {
    'images': [paths.images+'*', paths.images+'**/*', '!'+paths.images+'/dummy/*/**'],
    'js': [paths.js+'*.js', paths.js+'**/*.js', '!'+paths.js+'*.min.js', '!'+paths.js+'**/*.min.js'],
    'media': [paths.media+'**/*'],
    'sass': [paths.sass+'*', paths.sass+'**/*']
};

var port = process.env.PORT || '8000';

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
        paths.css+'base.css',
        paths.html+'**/*.html',
        paths.js+'**/*.js'
    ];

    // http://www.browsersync.io/docs/options/
    setTimeout(function () {
        browserSync.init(files, {
            'proxy': '0.0.0.0:' + port,
            'port': port
        });
    }, 1000);
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

// TASK/watchers
gulp.task('watch', function() {
    gulp.watch(patterns.js.concat(['./gulpfile.js']), ['lint']);
});

// RUNNERS
//##########################################################
gulp.task('default', ['lint', 'browser', 'watch']);

// end of gulpfile.js
}());