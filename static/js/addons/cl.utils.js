'use strict';
//######################################################################################################################
// #NAMESPACES#
var Cl = window.Cl || {};

//######################################################################################################################
/* global Cl */
Cl.Utils = {

    // INFO: general document setup for no javascript fallbacks and logging
    document: function () {
        // remove no-js class if javascript is activated
        $(document.body).removeClass('noscript');
        // ensure console.log doesn't throw errors
        if (!window.console) { window.console = { 'log': function () {} }; }
    },

    // INFO: simple mobile and tablet filter that can be extended
    mobile: function () { return (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i)); },
    tablet: function () { return (navigator.userAgent.match(/iPad/i)); }

    // INFO: add here more Utilities required for the project

};
