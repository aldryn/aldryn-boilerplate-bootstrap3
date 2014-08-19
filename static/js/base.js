/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

'use strict';
//######################################################################################################################
// #NAMESPACES#
var Cl = window.Cl || {};
/* global requirejs */
/* global outdatedBrowser */

//######################################################################################################################
// #BASE#
jQuery(document).ready(function () {

    // set the correct js path
    requirejs.config({ 'baseUrl': Cl.static + 'js/' });

    // load modules using require
    require(['modules/cl.utils'], function() {
        // removes noscript form body and adds print-js
        Cl.Utils.document();
        // INFO: additionally you will be able to use:
        // Cl.Utils.mobile() for detecting mobile devices
        // Cl.Utils.tablet() for detecting tablet devices
    });

    // load outdated browser scropt
    require(['modules/outdatedBrowser.min'], function () {
        // DOCS: https://github.com/burocratik/outdated-browser
        outdatedBrowser();
    });

});