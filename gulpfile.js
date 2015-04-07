/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

'use strict';

//######################################################################################################################
// #IMPORTS#
var browserSync = require('browser-sync');
var cache = require('gulp-cached');
var gulp = require('gulp');
var gutil = require('gulp-util');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var karma = require('karma').server;
var scsslint = require('gulp-scss-lint');
var yuidoc = require('gulp-yuidoc');

//######################################################################################################################
// #SETTINGS#
var paths = {
    'css': './static/css/',
    'html': './templates/',
    'images': './static/img/',
    'js': './static/js/',
    'sass': './private/sass/',
    'docs': './static/docs'
};

var patterns = {
    'images': [paths.images + '*', paths.images + '**/*',
        '!' + paths.images + 'dummy/*/**'],
    'js': [paths.js + '*.js', paths.js + '**/*.js',
        '!' + paths.js + '*.min.js', '!' + paths.js + '**/*.min.js'],
    'sass': [paths.sass + '*', paths.sass + '**/*',
        '!' + paths.sass + 'libs/*.scss', '!' + paths.sass + 'settings/*.scss', '!' + paths.sass + 'layout/_print.scss']
};

var port = parseInt(process.env.PORT, 10) || 8000;

//######################################################################################################################
// #LINTING#
gulp.task('lint', ['jslint', 'scsslint']);

gulp.task('jslint', function () {
    gulp.src(patterns.js.concat(['!' + paths.js + 'libs/*.js', './gulpfile.js']))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jscs()).on('error', function (error) {
            gutil.log('\n' + error.message);
        });
});

gulp.task('scsslint', function () {
    // DOCS: https://github.com/brigade/scss-lint/
    gulp.src(patterns.sass)
        .pipe(cache('scsslint'))
        .pipe(scsslint({
            'config': './scss-lint.json'
        }));
});


//##########################################################
// #PREPROCESSING#
gulp.task('preprocess', ['images', 'docs']);

gulp.task('images', function () {
    var options = {
        'interlaced': true,
        'optimizationLevel': 5,
        'progressive': true
    };

    gulp.src(patterns.images)
        .pipe(cache(imagemin(options)))
        .pipe(gulp.dest(paths.images)).on('error', function (error) {
            gutil.log('\n' + error.message);
        });
});

gulp.task('docs', function () {
    gulp.src(patterns.js)
        .pipe(yuidoc())
        .pipe(gulp.dest(paths.docs));
});

//##########################################################
// #SERVICES#
gulp.task('browser', function () {
    var files = [
        paths.css + '*.css',
        paths.html + '**/*.html',
        paths.js + '**/*.js'
    ];

    // DOCS: http://www.browsersync.io/docs/options/
    setTimeout(function () {
        browserSync.init(files, {
            'proxy': '0.0.0.0:' + port,
            'port': port + 1,
            'ui': {
                'port': port + 2
            }
        });
    }, 1000);
});

//##########################################################
// #TESTS#
gulp.task('tests', function () {
    karma.start({
        'configFile': __dirname + '/static/js/tests/karma.conf.js',
        'autoWatch': true
    });
});

//######################################################################################################################
// #COMMANDS#
gulp.task('watch', function () {
    gulp.watch(patterns.js.concat(['./gulpfile.js']), ['lint']);
});

gulp.task('default', ['lint', 'browser', 'watch']);
