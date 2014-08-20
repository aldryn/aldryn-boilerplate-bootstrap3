'use strict';
//######################################################################################################################
/* global Cl */
Cl.Utils = {

    document: function () {
        // remove no-js class if javascript is activated
        $(document.body).removeClass('noscript');
        // ensure console.log doesn't throw errors
        if(!window.console){ window.console = { log: function () {} }; } 
    },

    mobile: function () { return (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i)); },
    tablet: function () { return (navigator.userAgent.match(/iPad/i)); }

    // INFO: add here more Utilities required for the project

};