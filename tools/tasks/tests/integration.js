var gutil = require('gulp-util');
var protractor = require('gulp-protractor').protractor;

module.exports = function (gulp, opts) {
    'use strict';

    return function () {
        return gulp.src([opts.PROJECT_PATH.tests + '/integration/specs/*.js'])
            .pipe(protractor({
                configFile: opts.PROJECT_PATH.tests + '/protractor.conf.js',
                args: []
            }))
            .on('error', function (error) {
                gutil.log(gutil.colors.red(
                    'Error (' + error.plugin + '): ' + error.message
                ));
            });
    };
};
