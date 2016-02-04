'use strict';

var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var header = require('gulp-header');

module.exports = function (gulp, opts) {
    return function () {
        gulp.src(opts.PROJECT_PATTERNS.sass)
            // sourcemaps can be activated through `gulp sass --debug´
            .pipe(gulpif(opts.DEBUG, sourcemaps.init()))
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
            .pipe(header('/* This file generated automatically on server side. All changes would be lost. */ \n\n'))
            .pipe(gulpif(opts.DEBUG, sourcemaps.write()))
            .pipe(gulp.dest(opts.PROJECT_PATH.css));
    };
};
