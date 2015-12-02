/*
 * Copyright (c) 2013, Divio AG
 * Licensed under BSD
 * http://github.com/aldryn/aldryn-boilerplate-bootstrap3
 */

'use strict';

// #############################################################################
// NAMESPACES
/**
 * @module Cl
 */

var Cl = window.Cl || {};
/* global outdatedBrowser */

// #############################################################################
// BASE
(function ($) {
    // shorthand for invoking jQuery(document).ready
    $(function () {
        // removes noscript form body and adds print-js
        if (window.Cl && window.Cl.Utils) {
            Cl.Utils._document();
        }

        // DOCS: https://github.com/burocratik/outdated-browser
        if (window.outdatedBrowser) {
            outdatedBrowser({
                languagePath: '',
                lowerThan: 'boxShadow'
            });
        }
    });

})(jQuery);
