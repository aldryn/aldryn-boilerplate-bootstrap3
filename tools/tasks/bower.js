'use strict';

var bower = require('gulp-bower');

module.exports = function (gulp, opts) {
    return function () {
        gulp.task('bower', function () {
            return bower(gulp.dest(opts.PROJECT_ROOT + opts.PROJECT_PATH.bower));
        });
    };
};
