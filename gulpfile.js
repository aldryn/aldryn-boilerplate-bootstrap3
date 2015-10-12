/*
 * Copyright (c) 2013, Divio AG
 * Licensed under BSD
 * http://github.com/aldryn/aldryn-boilerplate-bootstrap3
 */

'use strict';

// #############################################################################
// IMPORTS
var argv = require('minimist')(process.argv.slice(2));
var autoprefixer = require('gulp-autoprefixer');
var bower = require('gulp-bower');
var browserSync = require('browser-sync');
var cache = require('gulp-cached');
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var karma = require('karma').server;
var minifyCss = require('gulp-minify-css');
var protractor = require('gulp-protractor').protractor;
var sass = require('gulp-sass');
// var scsslint = require('gulp-scss-lint');
var sourcemaps = require('gulp-sourcemaps');
var webdriverUpdate = require('gulp-protractor').webdriver_update;
var yuidoc = require('gulp-yuidoc');

// #############################################################################
// SETTINGS
var PROJECT_ROOT = __dirname;
var PROJECT_PATH = {
    'bower': PROJECT_ROOT + '/static/vendor',
    'css': PROJECT_ROOT + '/static/css',
    'docs': PROJECT_ROOT + '/static/docs',
    'fonts':  PROJECT_ROOT + '/static/fonts',
    'html': PROJECT_ROOT + '/templates',
    'images': PROJECT_ROOT + '/static/img',
    'icons': PROJECT_ROOT + '/private/icons',
    'js': PROJECT_ROOT + '/static/js',
    'sass': PROJECT_ROOT + '/private/sass',
    'tests': PROJECT_ROOT + '/tests'
};

var PROJECT_PATTERNS = {
    'images': [
        PROJECT_PATH.images + '/**/*',
        // exclude from preprocessing
        '!' + PROJECT_PATH.images + '/dummy/*/**'
    ],
    'js': [
        'gulpfile.js',
        PROJECT_PATH.js + '/**/*.js',
        PROJECT_PATH.tests + '/**/*.js',
        // exclude from linting
        '!' + PROJECT_PATH.js + '/*.min.js',
        '!' + PROJECT_PATH.js + '/**/*.min.js',
        '!' + PROJECT_PATH.tests + '/coverage/**/*'
    ],
    'sass': [
        PROJECT_PATH.sass + '/**/*.{scss,sass}'
    ]
};

var PORT = parseInt(process.env.PORT, 10) || 8000;
var DEBUG = argv.debug;

// #############################################################################
// LINTING
gulp.task('lint', ['lint:javascript']);

gulp.task('lint:javascript', function () {
    // DOCS: http://jshint.com/docs/
    return gulp.src(PROJECT_PATTERNS.js)
        .pipe(jshint())
        .pipe(jscs())
        .on('error', function (error) {
            gutil.log('\n' + error.message);
            if (process.env.CI) {
                // force the process to exit with error code
                process.exit(1);
            }
        })
        .pipe(jshint.reporter('jshint-stylish'));
});

/* FIXME: disabled for now
gulp.task('lint:sass', function () {
    // DOCS: https://github.com/brigade/scss-lint/
    return gulp.src(PROJECT_PATTERNS.sass)
        .pipe(cache('scsslint'))
        .pipe(scsslint({
            config: './scss-lint.json'
        }));
});
*/

// #############################################################################
// PREPROCESSING
gulp.task('preprocess', ['sass', 'images', 'docs']);

gulp.task('sass', function () {
    gulp.src(PROJECT_PATTERNS.sass)
        // sourcemaps can be activated through `gulp sass --debug´
        .pipe(gulpif(DEBUG, sourcemaps.init()))
        .pipe(sass())
        .on('error', function (error) {
            gutil.log(gutil.colors.red(
                'Error (' + error.plugin + '): ' + error.messageFormatted)
            );
            // used on Aldryn to inform aldryn client about the errors in
            // SASS compilation
            if (process.env.EXIT_ON_ERRORS) {
                process.exit(1);
            }
        })
        .pipe(autoprefixer({
            // browsers are coming from browserslist file
            cascade: false
        }))
        .pipe(minifyCss({
            rebase: false
        }))
        // sourcemaps can be activated through `gulp sass --debug´
        .pipe(gulpif(DEBUG, sourcemaps.write()))
        .pipe(gulp.dest(PROJECT_PATH.css));
});

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

gulp.task('icons', function () {
    gulp.src(PROJECT_PATH.icons + '/**/*.svg')
        .pipe(iconfontCss({
            fontName: 'iconfont',
            appendUnicode: true,
            formats: ['ttf', 'eot', 'woff', 'svg'],
            fontPath: 'static/fonts/',
            path: PROJECT_PATH.sass + '/libs/_iconfont.scss',
            targetPath: '../../../private/sass/layout/_iconography.scss'
        }))
        .pipe(iconfont({
            fontName: 'iconfont',
            normalize: true
        }))
        .on('glyphs', function (glyphs, options) {
            gutil.log.bind(glyphs, options);
        })
        .pipe(gulp.dest(PROJECT_PATH.fonts));
});

gulp.task('bower', function () {
    return bower(gulp.dest(PROJECT_ROOT + PROJECT_PATH.bower));
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
    return gulp.src([PROJECT_PATH.tests + '/integration/specs/*.js'])
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
    gulp.watch(PROJECT_PATTERNS.sass, ['sass']);
    gulp.watch(PROJECT_PATTERNS.js, ['lint']);
});

gulp.task('default', ['bower', 'sass', 'lint', 'watch']);
