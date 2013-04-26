/*!
 * @author      Divio AG
 * @copyright	Distributed under the BSD License.
 * @version     1.0.0
 */

// insure namespace is defined
var Cl = window.Cl || {};

(function($){

	Cl.Gallery = new Class({

		options: {
			'index': 0, // initial image to show
			'duration': 500, // duration for animation
			'timeout': 5000, // if set, the gallery will start moving automatically
			'direction': 'right', // direction to move by default (left, right, random)
			'animation': 'fade', // animation type (fade, slide)
			'cls': { // these selectors are all relative to the container
				'active': 'active', // class that will be used for active thumbnails
				'wrapper': '.wrapper', // viewport wrapper
				'viewport': '.viewport', // item container
				'navigation': 'nav', // navigation triggers container
				'leftTrigger': '.trigger-left a', // left trigger
				'rightTrigger': '.trigger-right a' // right trigger
			}
		},

		initialize: function (container, options) {
			var that = this;

			this.container = $(container);
			this.options = $.extend(true, {}, this.options, options);
			this.wrapper = this.container.find(this.options.cls.wrapper);
			this.viewport = this.container.find(this.options.cls.viewport);
			this.elements = this.container.find(this.options.cls.viewport).children();
			this.navigation = this.container.find(this.options.cls.navigation).children();
			this.leftTrigger = this.container.find(this.options.cls.leftTrigger);
			this.rightTrigger = this.container.find(this.options.cls.rightTrigger);

			this.index = this.options.index;
			this.timer = function () {};

			if (this.elements.length > 0) this._setup();
		},

		_setup: function () {
			var that = this;

			// dynamically set height if necessary (only happens on page reload)
			if (!parseInt(this.wrapper.css('height'))) {
				this.wrapper.css('height', $(this.elements[0]).outerHeight(true));
			}

			// set initial image
			this.navigation.removeClass(this.options.cls.active);
			$(this.navigation[this.options.index]).addClass(this.options.cls.active);
			this.elements.hide();
			$(this.elements[this.options.index]).show();

			// bind navigation events
			this.navigation.bind('click', function(e) {
				e.preventDefault();
				clearInterval(that.timer);
				that.move(that.navigation.index(this));
			});

			// bind left and right triggers
			this.leftTrigger.bind('click', function(e) {
				e.preventDefault();
				that.moveLeft('left', true);
			});
			this.rightTrigger.bind('click', function(e) {
				e.preventDefault();
				that.moveRight('right', true);
			});

			// start autoplay
			this._autoplay();
		},

		_autoplay: function () {
			var that = this;
			if (this.options.timeout) {
				this.timer = setInterval(function () {
					if (that.options.direction === 'left') {
						that.moveLeft('left');
					} else if (that.options.direction === 'random') {
						var rand = Math.floor(Math.random()*that.elements.length);
						that.move(rand);
					} else {
						that.moveRight('right');
					}
				}, this.options.timeout);
			}
		},

		moveRight: function (direction, clearTimer) {
			if (clearTimer) clearInterval(this.timer);
			var next = this.index + 1 < this.elements.length ? this.index + 1 : 0;
			this.move(next, direction);
		},

		moveLeft: function (direction, clearTimer) {
			if (clearTimer) clearInterval(this.timer);
			var next = this.index - 1 >= 0 ? this.index - 1 : this.elements.length - 1;
			this.move(next, direction);
		},

		move: function (index, direction) {
			this.navigation.removeClass(this.options.cls.active);
			$(this.navigation[index]).addClass(this.options.cls.active);
			if (index != this.index) {
				if (this.options.animation == 'slide') {
					this._animateSlide(index, this.index, direction);
				} else {
					this._animateFade(index);
				}
				this.index = index;
			}
		},

		_animateFade: function(index) {
			$(this.elements[this.index]).fadeOut(this.options.duration);
			$(this.elements[index]).stop(true, true).fadeIn(this.options.duration);
		},

		_animateSlide: function(indexNext, indexPrev, direction) {
			var width = parseInt($(this.wrapper).outerWidth(true));
			var dir = 'right';
			var prev = $(this.elements[indexPrev]);
			var next = $(this.elements[indexNext]);

			if (this.elements.length > 2) {
				if (indexNext < indexPrev) {
					if (indexPrev === this.elements.length-1 && indexNext === 0) dir = 'right'; else dir = 'left';
				} else {
					if (indexPrev === 0 && indexNext === this.elements.length-1) dir = 'left'; else dir = 'right';
				}
			} else if (direction === 'left') {
				dir = 'left';
			}

			if (dir === 'left') {
				prev.css('width', width);
				next.css('width', width);
				prev.css('marginLeft', 0);
				next.css('marginLeft', -width).show();
				prev.stop(true).animate(
					{ marginLeft: width },
					this.options.duration,
					function() {
						$(this).removeAttr('style').hide();
					}
				);
				next.stop(true).animate(
					{ marginLeft: 0 },
					this.options.duration,
					function() {
						$(this).removeAttr('style').show();
					}
				);
			} else {
				prev.css('width', width);
				next.css('width', width);
				prev.css('marginLeft', 0);
				next.css('marginLeft', width).show();
				prev.stop(true).animate(
					{ marginLeft: -width },
					this.options.duration,
					function() {
						$(this).removeAttr('style').hide();
					}
				);
				next.stop(true).animate(
					{ marginLeft: 0 },
					this.options.duration,
					function() {
						$(this).removeAttr('style').show();
					}
				);
			}
		}

	});

})(jQuery);