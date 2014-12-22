/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

//######################################################################################################################
// #NAMESPACES#
var Cl = window.Cl || {};

//######################################################################################################################
// #UTILS#
(function ($) {
    'use strict';

    Cl.Utils = {

        // INFO: general document setup for no javascript fallbacks and logging
        document: function () {
            // remove no-js class if javascript is activated
            $(document.body).removeClass('noscript');
            // ensure that console methods don't throw errors
            this.consoleWrapper();
        },

        /**
         * Stubs all the methods from console api that are not available in current environment
         * INFO: https://developer.chrome.com/devtools/docs/console-api
         */
        consoleWrapper: function () {
            var method;
            var noop = function () {};
            var methods = [
                'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
                'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
                'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
                'timeStamp', 'trace', 'warn'
            ];
            var length = methods.length;
            var console = (window.console = window.console || {});

            while (length--) {
                method = methods[length];

                // Only stub undefined methods.
                if (!console[method]) {
                    console[method] = noop;
                }
            }
        },

        // INFO: simple mobile and tablet filter that can be extended
        mobile: function () { return (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i)); },
        tablet: function () { return (navigator.userAgent.match(/iPad/i)); }

        // INFO: add here more Utilities required for the project

    };

})(jQuery);
