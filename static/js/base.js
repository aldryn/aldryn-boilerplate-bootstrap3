/*!
 * @author:	Divio AG
 * @copyright:	http://www.divio.ch
 */

//######################################################################################################################
// #NAMESPACES#
var Cl = window.Cl || {};

//######################################################################################################################
// #JQUERY EXTENSION#
Cl.Base = {
	init: function () {
		// remove no-js class if javascript is activated
		$(document.body).removeClass('no-js');

		// adds dynamic print functionality to a class
		$('.print-js').bind('click', function (e) {
			e.preventDefault();
			window.print();
		});

		// add default jquery plugins
		if($.fn.autoPopUp) $('.popup').autoPopUp();
		if($.fn.mailCrypte) $('.mailcrypte').mailCrypte();
		if($.fn.fieldLabel && document.createElement("input").placeholder === undefined) $('[placeholder]').fieldLabel();

		// add mobile specific handlers
		if(Cl.Utils.mobile()) this.mobile();
	},

	mobile: function () {
		// load mobile helpers
		if(MBP !== undefined) {
			MBP.scaleFix();
			MBP.hideUrlBar();
		}
		// viewport zoom fix
		if(document.querySelector && document.body.addEventListener) {
			// fixes scale issue
			var viewportmeta = document.querySelector('meta[name="viewport"]');
			if(viewportmeta) {
				viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
				// reset to normal behaviour as soon as gestures are started
				document.body.addEventListener('gesturestart', function () {
					viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
				}, false);
			}
		}
	}
};

//######################################################################################################################
// #CL EXTENSION#
Cl.Utils = {
	mobile: function () { return (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i)); },
	tablet: function () { return (navigator.userAgent.match(/iPad/i)); }
};

//##################################################
// #AUTOINITS#
jQuery(document).ready(function($){
	Cl.Base.init();
});