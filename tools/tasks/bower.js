var bower = require('gulp-bower');

module.exports = function (gulp, opts) {
    'use strict';

    return function () {
        gulp.task('bower', function () {
            return bower(gulp.dest(opts.PROJECT_ROOT + opts.PROJECT_PATH.bower));
        });
    };
};
