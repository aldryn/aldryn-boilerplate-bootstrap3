'use strict';

var eslint = require('gulp-eslint');

module.exports = function (gulp, opts) {
    return function () {
        // DOCS: http://eslint.org/docs/user-guide/
        return gulp.src(opts.PROJECT_PATTERNS.js)
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    };
};
