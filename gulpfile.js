/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

'use strict';

// #####################################################################################################################
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

// #####################################################################################################################
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
    'images': [
        paths.images + '*',
        paths.images + '**/*',
        '!' + paths.images + 'dummy/*/**'
    ],
    'js': [
        paths.js + '*.js',
        paths.js + '**/*.js',
        './tests/*.js',
        '!' + paths.js + '*.min.js',
        '!' + paths.js + '**/*.min.js'
    ],
    'sass': [
        paths.sass + '*',
        paths.sass + '**/*',
        '!' + paths.sass + 'libs/*.scss',
        '!' + paths.sass + 'settings/*.scss',
        '!' + paths.sass + 'layout/_print.scss'
    ]
};
patterns.jshint = patterns.js.concat(['!' + paths.js + 'libs/*.js', './gulpfile.js']);

var port = parseInt(process.env.PORT, 10) || 8000;

// #####################################################################################################################
// #LINTING#
gulp.task('lint', ['jslint', 'scsslint']);

gulp.task('jslint', function () {
    gulp.src(patterns.jshint)
        .pipe(jshint())
        .pipe(jscs())
        .on('error', function (error) {
            gutil.log('\n' + error.message);
        })
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('scsslint', function () {
    // DOCS: https://github.com/brigade/scss-lint/
    gulp.src(patterns.sass)
        .pipe(cache('scsslint'))
        .pipe(scsslint({
            'config': './scss-lint.json'
        }));
    // FIXME: tests currently pass even if there is a linting error, the reporter stops all remaining issues :(
    // .pipe(scsslint.failReporter());
});

// #########################################################
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

// #########################################################
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

// #########################################################
// #TESTS#
gulp.task('tests', ['lint'], function () {
    // run javascript tests
    karma.start({
        'configFile': __dirname + '/tests/karma.conf.js',
        'singleRun': true
    });
});

gulp.task('karma', function () {
    // run javascript tests
    karma.start({
        'configFile': __dirname + '/tests/karma.conf.js'
    });
});

// #####################################################################################################################
// #COMMANDS#
gulp.task('watch', function () {
    gulp.watch(patterns.jshint, ['lint']);
});

gulp.task('default', ['lint', 'browser', 'watch']);
