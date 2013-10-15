/*!
 * @author:	Divio AG
 * @copyright:	http://www.divio.ch
 */

//######################################################################################################################
// #NAMESPACES#
var Cl = window.Cl || {};

//######################################################################################################################
// #BASE#
(function () {
	// set the correct js path
	requirejs.config({ 'baseUrl': '/static/js' });
	// load modules using require
	require(['modules/cl.utils'], function() {
		// handles input placeholder="" attributes
		Cl.Utils.placeholders();
		// handles the viewport scaling for mobile devices
		Cl.Utils.viewport();
		// load default jquery widgets from plugins/jquery.functions.js
		// $('.popup').autoPopUp();
		// $('.mailcrypte').mailCrypte();
	});
}());