/*!
 * @author      Angelo Dini - github.com/finalangel/classjs-plugins
 * @copyright	Distributed under the BSD License.
 * @version     1.2.1
 */

// ensure namespace is defined
var Cl = window.Cl || {};

(function($){
	'use strict';

	// creating class
	Cl.Carousel = new Class({

		options: {
			'index': 0, // initial page to load
			'timeout': null, // timeout for autoplay, if 0 or null autoplay is ignored
			'duration': 500, // duration for animation
			'move': 'single', // either "single" to move one element or "auto" to move the whole slider
			'momentum': true, // allow scrolling over the left and right border
			'cls': {
				'active': 'active', // class that will be used for active states
				'disabled': 'disabled',
				'leftTrigger': '.trigger-left a',
				'rightTrigger': '.trigger-right a',
				'wrapper': '.wrapper',
				'viewport': '.viewport',
				'elements': 'article',
				'navigation': 'nav a'
			}
		},

		initialize: function (container, options) {
			this.container = $(container);
			this.options = $.extend(true, {}, this.options, options);

			this.wrapper = this.container.find(this.options.cls.wrapper);
			this.viewport = this.wrapper.find(this.options.cls.viewport);
			this.elements = this.viewport.find(this.options.cls.elements);
			this.navigation = this.container.find(this.options.cls.navigation);

			this.index = this.options.index;
			this.bound = this.elements.length;
			this.timer = function () {};

			this.triggerLeft = this.container.find(this.options.cls.leftTrigger);
			this.triggerRight = this.container.find(this.options.cls.rightTrigger);

			this._setup();
		},

		_setup: function () {
			var that = this;

			// calculate container height
			this.wrapper.css('height', this.viewport.height());
			// calculate viewport width
			this.viewport.css('width', this.elements.length * this.elements.outerWidth(true));

			// cancel if bound is bigger then containing items
			if(this.bound < Math.ceil(this.wrapper.outerWidth(true) / $(this.elements[0]).outerWidth(true))) {
				this.triggerLeft.hide();
				this.triggerRight.hide();
				return false;
			}

			// bind event for left triggers
			this.triggerLeft.bind('click', function (e) {
				e.preventDefault();
				that.moveLeft.call(that, e);
			});

			// bind event for right triggers
			this.triggerRight.bind('click', function (e) {
				e.preventDefault();
				that.moveRight.call(that, e);
			});

			// bind navigation
			this.navigation.bind('click', function (e) {
				e.preventDefault();
				that.move(that.navigation.index($(this)));
			});

			// start autoplay
			if(this.options.timeout) this._autoplay();

			// add swipe event
			if(typeof($.fn.swipe) === "function" && (Cl.Utils.mobile() || Cl.Utils.tablet())) this._swipe();

			// init first
			this.move();
		},

		moveLeft: function (event) {
			// cance timeout when clicking
			if(event) clearInterval(this.timer);

			var width = $(this.elements[0]).outerWidth(true);
			var viewBound = Math.ceil(this.wrapper.width() / width);

			// cancel if bound is reached and momentum is false
			if(this.index <= 0 && !this.options.momentum) return false;
			// continue with last slide if momentum is true
			if(this.index <= 0 && this.options.momentum) {
				this.index = this.bound - viewBound + 1;
			}

			// increment settings
			this.index = this.index - 1;

			// move
			this.move();
		},

		moveRight: function (event) {
			// cancel timeout when clicking
			if(event) clearInterval(this.timer);

			var width = $(this.elements[0]).outerWidth(true);
			var viewBound = Math.ceil(this.wrapper.width() / width);

			// cancel if bound is reached and momentum is false
			if(viewBound + this.index >= this.bound && !this.options.momentum) return false;
			// continue with first slide if momentum is true
			if(viewBound + this.index >= this.bound && this.options.momentum) {
				this.index = -1;
			}

			// increment settings
			this.index = this.index + 1;

			// move
			this.move();
		},

		move: function (index) {
			// set new index if neccessary
			this.index = (index !== undefined) ? index : this.index;

			var width = $(this.elements[0]).outerWidth(true);
			var viewBound = Math.ceil(this.wrapper.width() / width);
			var moveBound = (this.options.move === 'single') ? 1 : viewBound;
			var position = -(width * (this.index * moveBound));

			// animation settings
			this.viewport.stop().animate({
				'left': position
			}, this.options.duration);

			// change active navigation
			this.navigation.removeClass(this.options.cls.active);
			this.navigation.eq(this.index).addClass(this.options.cls.active);

			// add appropriate classes to left trigger
			if(this.index <= 0) {
				this.triggerLeft.addClass(this.options.cls.disabled);
				this.triggerRight.removeClass(this.options.cls.disabled);
			} else {
				this.triggerLeft.removeClass(this.options.cls.disabled);
			}
			// add appropriate classes to right trigger
			if(viewBound + this.index >= this.bound) {
				this.triggerLeft.removeClass(this.options.cls.disabled);
				this.triggerRight.addClass(this.options.cls.disabled);
			} else {
				this.triggerRight.removeClass(this.options.cls.disabled);
			}

			// check if we should disable the arrows
			if(viewBound >= this.bound) {
				this.triggerLeft.addClass(this.options.cls.disabled);
				this.triggerRight.addClass(this.options.cls.disabled);
			}
		},

		_autoplay: function () {
			var that = this;

			this.timer = setInterval(function () {
				that.moveRight();
			}, this.options.timeout);
		},

		// add swipe events for mobile
		_swipe: function () {
			// requires touchSwipe from plugins
			var that = this;

			this.container.swipe({
				'swipeLeft': swipeLeft,
				'swipeRight': swipeRight
			});

			// inverse movement
			function swipeLeft() {
				that.moveRight();
				// clear timer
				clearInterval(that.timer);
			}
			function swipeRight() {
				that.moveLeft();
				// clear timer
				clearInterval(that.timer);
			}
		}

	});

})(jQuery);