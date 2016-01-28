/*
 * Copyright (c) 2013, Divio AG
 * Licensed under BSD
 * http://github.com/aldryn/aldryn-boilerplate-bootstrap3
 */
// istanbul ignore next
'use strict';

// #############################################################################
// NAMESPACES
/**
 * @module Cl
 */

var Cl = window.Cl || {};

// #############################################################################
// UTILS
(function ($) {
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
            // istanbul ignore next
            var noop = function () {};
            var methods = [
                'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
                'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
                'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
                'timeStamp', 'trace', 'warn'
            ];
            var length = methods.length;
            // istanbul ignore next
            var console = window.console || {};

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
         * @param {String} url - URL string
         */
        redirectTo: function (url) {
            window.location.href = url;
        },

        /**
         * Save information within local storage
         *
         * @method setStorage
         * @param {String} token - namespace
         * @param {String} value - storage value
         * @returns {Boolean|String} item value or negative result
         */
        setStorage: function (token, value) {
            if (token && value && this._isStorageSupported) {
                localStorage.setItem(token, value);
                return value;
            }
            return false;
        },

        /**
         * Retrieve information from local storage
         *
         * @method getStorage
         * @param {String} token - namespace
         * @returns {Object|Boolean} localStorage item or negative result
         */
        getStorage: function (token) {
            if (token && this._isStorageSupported) {
                return localStorage.getItem(token);
            }
            return false;
        },

        /**
         * Localstorage shim from Modernizr
         *
         * @method _isStorageSupported
         * @private
         * @returns {Boolean} localStorage availability
         */
        _isStorageSupported: (function localStorageCheck () {
            var mod = 'modernizr';

            try {
                localStorage.setItem(mod, mod);
                localStorage.removeItem(mod);
                return true;
            } catch (e) {
                return false;
            }
        })()
    };

})(jQuery);
