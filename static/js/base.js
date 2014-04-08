/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

'use strict';
//######################################################################################################################
// #NAMESPACES#
var Cl = window.Cl || {};
/* global requirejs */

//######################################################################################################################
// #BASE#
jQuery(document).ready(function () {

    // set the correct js path
    requirejs.config({ 'baseUrl': Cl.static + 'js/' });

    // load modules using require
    require(['modules/cl.utils.min'], function() {
        // removes noscript form body and adds print-js
        Cl.Utils.document();
        // handles input placeholder="" attributes
        Cl.Utils.placeholders();
        // handles the viewport scaling for mobile devices
        Cl.Utils.viewport();
        // load default jquery widgets from addons/jquery.functions.js
        $('.popup').autoPopUp();
        $('.mailcrypte').mailCrypte();
    });

});