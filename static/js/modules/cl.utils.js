'use strict';
//######################################################################################################################
/* global Cl */
/* global MBP */
Cl.Utils = {

    document: function () {
        // remove no-js class if javascript is activated
        $(document.body).removeClass('noscript');

        // adds dynamic print functionality to a class
        $('.print-js').bind('click', function (e) {
            e.preventDefault();
            window.print();
        });
    },

    viewport: function () {
        // viewport zoom fix and hide bar
        if(window.MBP) {
            MBP.scaleFix();
            MBP.hideUrlBar();
        }
    },

    placeholders: function () {
        // cancel if the browser actually supports placeholders
        if(document.createElement('input').placeholder !== undefined) { return false; }

        // add plugin
        $('[placeholder]').fieldLabel();

        // check if we should clear the value
        $('form').on('submit', function () {
            $(this).find('[placeholder]').each(function () {
                var input = $(this);
                if(input.val() === input.attr('placeholder')) { input.val(''); }
            });
        });
    },

    mobile: function () { return (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i)); },
    tablet: function () { return (navigator.userAgent.match(/iPad/i)); }

};