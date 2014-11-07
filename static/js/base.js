/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

'use strict';
//######################################################################################################################
// #NAMESPACES#
var Cl = window.Cl || {};
/* global outdatedBrowser */

//######################################################################################################################
// #BASE#
jQuery(document).ready(function () {

    // removes noscript form body and adds print-js
    Cl.Utils.document();
    // INFO: additionally you will be able to use:
    // Cl.Utils.mobile() for detecting mobile devices
    // Cl.Utils.tablet() for detecting tablet devices

    // DOCS: https://github.com/burocratik/outdated-browser
    outdatedBrowser({
        'languagePath': '',
        'lowerThan': 'boxShadow'
    });

});
