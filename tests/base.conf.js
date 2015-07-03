/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

'use strict';

// #####################################################################################################################
// #CONFIGURATION#
module.exports = {
    formatTaskName: function formatTaskName(browserName) {
        return [
            'Test', browserName, 'for',
            process.env.TRAVIS_REPO_SLUG,
            (process.env.TRAVIS_PULL_REQUEST ? 'pull request #' + process.env.TRAVIS_PULL_REQUEST : ''),
            'build #' + process.env.TRAVIS_BUILD_NUMBER
        ].join(' ');
    },

    sauceLabsBrowsers: {
        sl_ie_9: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 7',
            version: '9.0'
        },
        sl_firefox: {
            base: 'SauceLabs',
            browserName: 'firefox',
            platform: 'Windows 8',
            version: '38'
        }
    }
};
