/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

'use strict';

// #############################################################################
// IMPORTS
var browserSync = require('browser-sync');
var cache = require('gulp-cached');
var gulp = require('gulp');
var gutil = require('gulp-util');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var karma = require('karma').server;
var protractor = require('gulp-protractor').protractor;
var scsslint = require('gulp-scss-lint');
var webdriverUpdate = require('gulp-protractor').webdriver_update;
var yuidoc = require('gulp-yuidoc');

// #############################################################################
// SETTINGS
var PROJECT_ROOT = __dirname;
var PROJECT_PATH = {
    'css': PROJECT_ROOT + '/static/css/',
    'docs': PROJECT_ROOT + '/static/docs',
    'html': PROJECT_ROOT + '/templates/',
    'images': PROJECT_ROOT + '/static/img/',
    'js': PROJECT_ROOT + '/static/js/',
    'sass': PROJECT_ROOT + '/private/sass/',
    'tests': PROJECT_ROOT + '/tests'
};

var PROJECT_PATTERNS = {
    'images': [
        PROJECT_PATH.images + '*',
        PROJECT_PATH.images + '**/*',
        '!' + PROJECT_PATH.images + 'dummy/*/**'
    ],
    'js': [
        PROJECT_PATH.js + '*.js',
        PROJECT_PATH.js + '**/*.js',
        PROJECT_PATH.tests + '*.js',
        PROJECT_PATH.tests + '*/**.js',
        '!' + PROJECT_PATH.js + '*.min.js',
        '!' + PROJECT_PATH.js + '**/*.min.js'
    ],
    'sass': [
        PROJECT_PATH.sass + '*',
        PROJECT_PATH.sass + '**/*',
        '!' + PROJECT_PATH.sass + 'libs/*',
        '!' + PROJECT_PATH.sass + 'settings/*',
        '!' + PROJECT_PATH.sass + 'layout/_print.{scss,sass}'
    ]
};

var PORT = parseInt(process.env.PORT, 10) || 8000;

// #############################################################################
// LINTING
gulp.task('lint', ['lint:javascript', 'lint:sass']);

gulp.task('lint:javascript', function () {
    // DOCS: http://jshint.com/docs/
    return gulp.src(PROJECT_PATTERNS.js)
        .pipe(jshint())
        .pipe(jscs())
        .on('error', function (error) {
            gutil.log('\n' + error.message);
        })
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('lint:sass', function () {
    // DOCS: https://github.com/brigade/scss-lint/
    return gulp.src(PROJECT_PATTERNS.sass)
        .pipe(cache('scsslint'))
        .pipe(scsslint({
            config: './scss-lint.json'
        }));
});

// #############################################################################
// PREPROCESSING
gulp.task('preprocess', ['images', 'docs']);

gulp.task('images', function () {
    var options = {
        interlaced: true,
        optimizationLevel: 5,
        progressive: true
    };

    gulp.src(PROJECT_PATTERNS.images)
        .pipe(cache(imagemin(options)))
        .pipe(gulp.dest(PROJECT_PATH.images)).on('error', function (error) {
            gutil.log('\n' + error.message);
        });
});

gulp.task('docs', function () {
    gulp.src(PROJECT_PATTERNS.js)
        .pipe(yuidoc())
        .pipe(gulp.dest(PROJECT_PATH.docs));
});

// #############################################################################
// SERVICES
gulp.task('browser', function () {
    var files = [
        PROJECT_PATH.css + '*.css',
        PROJECT_PATH.html + '**/*.html',
        PROJECT_PATH.js + '**/*.js'
    ];

    // DOCS: http://www.browsersync.io/docs/options/
    setTimeout(function () {
        browserSync.init(files, {
            proxy: '0.0.0.0:' + PORT,
            port: PORT + 1,
            ui: {
                'port': PORT + 2
            }
        });
    }, 1000);
});

// #############################################################################
// TESTS
gulp.task('tests', ['tests:unit', 'tests:integration', 'tests:lint']);
gulp.task('tests:unit', function (done) {
    // run javascript tests
    karma.start({
        configFile: PROJECT_PATH.tests + '/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('tests:webdriver', webdriverUpdate);
gulp.task('tests:integration', ['tests:webdriver'], function () {
    return gulp.src([PROJECT_PATH.tests + '/integration/*.js'])
        .pipe(protractor({
            configFile: PROJECT_PATH.tests + '/protractor.conf.js',
            args: []
        }))
        .on('error', function (error) {
            gutil.log(gutil.colors.red(
                'Error (' + error.plugin + '): ' + error.message
            ));
        });
});

gulp.task('tests:lint', ['lint']);

gulp.task('tests:watch', ['tests:lint'], function () {
    // run javascript tests
    karma.start({
        configFile: PROJECT_PATH.tests + '/karma.conf.js'
    });
});

// #############################################################################
// COMMANDS
gulp.task('watch', function () {
    gulp.watch(PROJECT_PATTERNS.js, ['lint']);
});

gulp.task('default', ['browser', 'lint', 'watch']);
