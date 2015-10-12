var yuidoc = require('gulp-yuidoc');

module.exports = function (gulp, opts) {
    'use strict';

    return function () {
        gulp.src(opts.PROJECT_PATTERNS.js)
            .pipe(yuidoc())
            .pipe(gulp.dest(opts.PROJECT_PATH.docs));
    };
};
