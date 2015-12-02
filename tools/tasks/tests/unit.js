'use strict';

var karma = require('karma').server;

module.exports = function (gulp, opts) {
    return function (done) {
        karma.start({
            configFile: opts.PROJECT_PATH.tests + '/karma.conf.js',
            singleRun: true
        }, done);
    };
};
