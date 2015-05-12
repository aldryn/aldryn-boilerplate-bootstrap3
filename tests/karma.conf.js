/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

'use strict';

// #####################################################################################################################
// #CONFIGURATION#
module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '..',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        // tests/${path}
        files: [
            // these have to be specified in order since
            // dependency loading is not handled yet
            'static/js/libs/jquery.min.js',
            'static/js/libs/bootstrap.min.js',
            'static/js/libs/class.min.js',
            'static/js/addons/*.js',
            'static/js/*.js',

            // tests themselves
            'tests/*.js'
        ],

        // list of files to exclude
        exclude: [
            'static/js/addons/ckeditor.wysiwyg.js',
            'tests/karma.conf.js'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'static/js/base.js': ['coverage'],
            'static/js/addons/cl.utils.js': ['coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
            reporters: [
                { type: 'html', dir: 'tests/coverage/' },
                { type: 'lcov', dir: 'tests/coverage/' }
            ]
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values:
        // config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
