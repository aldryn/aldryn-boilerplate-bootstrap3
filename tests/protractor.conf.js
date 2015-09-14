/*
 * Copyright (c) 2013, Divio AG
 * Licensed under BSD
 * http://github.com/aldryn/aldryn-boilerplate-bootstrap3
 */

'use strict';
/* global browser */

// #############################################################################
// CONFIGURATION
var baseConf = require('./base.conf');
var formatTaskName = baseConf.formatTaskName;
var browsers = baseConf.sauceLabsBrowsers;

var config = {
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'phantomjs',
        'phantomjs.binary.path': require('phantomjs').path
    },

    onPrepare: function () {
        browser.ignoreSynchronization = true;
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 240000
    }
};

if (process.env.SAUCE_USERNAME && process.env.SAUCE_ACCESS_KEY) {
    config.capabilities = null;
    config.sauceUser = process.env.SAUCE_USERNAME;
    config.sauceKey = process.env.SAUCE_ACCESS_KEY;
    config.multiCapabilities = browsers.map(function (browser) {
        var browserCapability =  browser;
        browserCapability.name = formatTaskName(browserCapability.browserName);
        return browserCapability;
    });
}

exports.config = config;
