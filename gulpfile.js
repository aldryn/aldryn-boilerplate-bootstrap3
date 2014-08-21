// IMPORTS
//##########################################################
'use strict';
/* global require */
var browserSync = require('browser-sync');
var cache = require('gulp-cached');
var gulp = require('gulp');
var gutil = require('gulp-util');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

// SETTINGS
//##########################################################
var paths = {
    'css': './static/css/',
    'html': './templates/',
    'images': './static/img/',
    'js': './static/js/',
    'sass': './private/sass/'
};

var patterns = {
    'images': [paths.images + '*', paths.images + '**/*', '!' + paths.images + '/dummy/*/**'],
    'js': [paths.js + '*.js', paths.js + '**/*.js', '!' + paths.js + '*.min.js', '!' + paths.js + '**/*.min.js'],
    'sass': [paths.sass + '*', paths.sass + '**/*']
};

var port = process.env.PORT || '8000';

// TASKS
//##########################################################
// TASKS/javascript
gulp.task('lint', function () {
    gulp.src(patterns.js.concat([paths.js + '!libs/*.js', './gulpfile.js']))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jscs().on('error', function (error) {
            gutil.log('\n' + error.message);
        }));
});

// TASK/image preprocessing
gulp.task('images', function () {
    var options = {
        'interlaced': true,
        'optimizationLevel': 5,
        'progressive': true
    };

    gulp.src(patterns.images)
        .pipe(cache(imagemin(options)))
        .pipe(gulp.dest(paths.images));
});

// TASK/browser reload
gulp.task('browser', function () {
    var files = [
        paths.css + '*.css',
        paths.html + '**/*.html',
        paths.js + '**/*.js'
    ];

    // DOCS: http://www.browsersync.io/docs/options/
    setTimeout(function () {
        browserSync.init(files, {
            'proxy': '0.0.0.0:' + port
        });
    }, 1000);
});

// TASK/watchers
gulp.task('watch', function () {
    gulp.watch(patterns.js.concat(['./gulpfile.js']), ['lint']);
});

// RUNNERS
//##########################################################
gulp.task('default', ['lint', 'images', 'browser', 'watch']);

// end of gulpfile.js
