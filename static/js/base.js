/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

// #####################################################################################################################
// #NAMESPACES#
/**
 * @module Cl
 */
// istanbul ignore next
var Cl = window.Cl || {};
/* global outdatedBrowser */

// #####################################################################################################################
// #BASE#
// istanbul ignore next
(function ($) {
    'use strict';

    // shorthand for invoking jQuery(document).ready
    $(function () {
        // removes noscript form body and adds print-js
        if (window.Cl && window.Cl.Utils) {
            Cl.Utils._document();
        }

        // DOCS: https://github.com/burocratik/outdated-browser
        if (window.outdatedBrowser) {
            outdatedBrowser({
                'languagePath': '',
                'lowerThan': 'boxShadow'
            });
        }

        // load debugging
        // DOCS: http://finalangel.github.io/classjs-plugins/examples/cl.debug/
        if (window.Cl && window.Cl.Debug) {
            new Cl.Debug();
        }
    });

})(jQuery);
