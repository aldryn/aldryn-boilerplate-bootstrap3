(function () {
// IMPORTS
//##########################################################
'use strict';
/* global require */
var gulp = require('gulp');
var gutil = require('gulp-util');
var compass = require('gulp-compass');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var spawn = require('child_process').spawn;

// SETTINGS
//##########################################################
var port = 8000;

var paths = {
    'css': './static/css/',
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

// TASKS
//##########################################################
// TASKS/compass
gulp.task('compass', function() {
    gulp.src(patterns.sass)
        .pipe(compass({
            style: 'compressed',
            comments: false,
            css: paths.css,
            sass: paths.sass
        }))
        .on('error', function(error) {
            gutil.log(error);
        });
});

// TASKS/javascript
gulp.task('compress', function () {
    gulp.src(patterns.js)
        .pipe(rename(function (path) {
            path.extname = '.min.js';
        }))
        .pipe(uglify())
        .pipe(gulp.dest(paths.js));
});

// TASKS/linting .jshintrc within /static/js
gulp.task('lint', function() {
    gulp.src(patterns.js.concat([paths.js+'!libs/*.js', './gulpfile.js']))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
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

// TASK/django
gulp.task('runserver', function () {
    var rs = spawn('src/local', ['runserver', '0.0.0.0:'+port]);
    var stdout = '';
    var stderr = '';

    rs.stdout.setEncoding('utf8');
    rs.stdout.on('data', function (data) {
        stdout += data;
        gutil.log(data);
    });

    rs.stderr.setEncoding('utf8');
    rs.stderr.on('data', function (data) {
        stderr += data;
        gutil.log(data);
    });
});

// RUNNERS
//##########################################################
gulp.task('default', function () {

    // initial load
    gulp.start('static');
    gulp.start('compass');
    gulp.start('compress');
    gulp.start('lint');
    gulp.start('runserver');

    // add watch tasks
    gulp.watch(patterns.sass, ['compass']);
    gulp.watch(patterns.js, ['compress']);
    gulp.watch(patterns.js.concat(['./gulpfile.js']), ['lint']);

});

// end of gulpfile.js
}());