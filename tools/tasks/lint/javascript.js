var gutil = require('gulp-util');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

module.exports = function (gulp, opts) {
    'use strict';

    return function () {
        // DOCS: http://jshint.com/docs/
        return gulp.src(opts.PROJECT_PATTERNS.js)
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
    };
};
