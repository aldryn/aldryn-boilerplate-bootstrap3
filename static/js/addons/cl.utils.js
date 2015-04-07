/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

//######################################################################################################################
// #NAMESPACES#
/**
 * @module Cl
 */
var Cl = window.Cl || {};

//######################################################################################################################
// #UTILS#
(function ($) {
    'use strict';

    /**
     * Contains various helpers, feel free to extend and adapt
     *
     * @class Utils
     * @namespace Cl
     */
    Cl.Utils = {
        /**
         * Document setup for no javascript fallbacks and logging
         *
         * @method _document
         * @private
         */
        _document: function () {
            // remove no-js class if javascript is activated
            $(document.body).removeClass('noscript');
            // ensure that console methods don't throw errors
            this._consoleWrapper();
        },

        /**
         * Stubs all the methods from console api that are not available in current environment
         * DOCS: https://developer.chrome.com/devtools/docs/console-api
         *
         * @method _consoleWrapper
         * @private
         */
        _consoleWrapper: function () {
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

        /**
         * Simple redirection
         *
         * @method redirectTo
         * @param url {String} URL string
         */
        redirectTo: function (url) {
            window.location.href = url;
        },

        /**
         * Save information within local storage
         *
         * @method setStorage
         * @param token {String} namespace
         * @param value {String} storage value
         */
        setStorage: function (token, value) {
            if (typeof (Storage) !== void(0)) {
                localStorage.setItem(token, value);
            }
        },

        /**
         * Retrieve information from local storage
         *
         * @method getStorage
         * @param token {String} namespace
         */
        getStorage: function (token) {
            if (typeof (Storage) !== void(0)) {
                return localStorage.getItem(token);
            }
        }
    };

})(jQuery);
