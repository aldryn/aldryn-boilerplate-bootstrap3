'use strict';

var karma = require('karma').server;

module.exports = function (gulp, opts) {
    return function () {
        karma.start({
            configFile: opts.PROJECT_PATH.tests + '/karma.conf.js'
        });
    };
};
