/*!
 * @author      Angelo Dini - github.com/finalangel/classjs-plugins
 * @copyright	Distributed under the BSD License.
 * @version     1.0.0.beta
 */

// insure namespace is defined
var Cl = window.Cl || {};

(function($){
	'use strict';

	// creating class
	Cl.Tooltip = new Class({

		options: {
			delay: 0,
			hideAfter: 0, // hides after a specific amount of time
			showOn: 'mouseenter',
			hideOn: 'mouseleave',
			offset: { x: 0, y: 0 },
			fixed: true, // false to follow mouse
			close: false, // requires to close the window when shown
			viewport: true, // keep element inside the viewport
			position: 'top right bottom or left', // also called hook?
			cls: 'tooltip',
			ajax: { /* jquery ajax request */ },
			tpl: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-close"></div><div class="tooltip-inner"></div></div>',
			callbacks: ''
		},

		initialize: function (elements, options) {
			this.elements = $(elements);
			this.options = $.extend(true, {}, this.options, options);

			this.build();

			/*

			<a href="#getIdContainer" class="tooltip" title="This is some tooltip title">This is a tooltip</a>

			<div id="getIdContainer">
				<p>This is some custom content</p<
			</div>

			 */
		},

		build: function () {},

		/*
		 * PUBLIC API
		 */
		load: function (content) {},

		show: function () {},

		hide: function () {},

		destroy: function () {},

		/*
		 * PRIVATE METHODS
		 */
		_blah: function () {}

	});
})(jQuery);