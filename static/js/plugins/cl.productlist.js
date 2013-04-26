/*!
 * @author      Divio AG
 * @copyright	Distributed under the BSD License
 * @version     1.0.0
 */

// insure namespace is defined
var Cl = window.Cl || {};

(function($){

	Cl.ProductList = new Class({

		options: {
			'dropdownSpeed': 400,
			'maxAutoPaginate': 2
		},

		initialize: function(form, options) {
			var that = this;

			this.form = $(form);
			this.options = $.extend(true, {}, this.options, options);
			this.orderby = this.form.find('.frm-productlist-orderby label');
			this.pageLoader = $('#page-loader');
			this.pageInput = $('#id_page');
			this.loadMoreButtons = $('.load-more');
			this.productContainer = $('#product-container');
			this.dropdownTriggers = $('.dropdown .title');
			this.dropdownFilters = $('.dropdown ul li');
			this.loading = false;
			this.autoPaginateCount = 0;

			this._setup();
		},

		_setup: function() {
			var that = this;

			// bind order-by links
			this.orderby.bind('click', function(e) {
				e.preventDefault();
				var trigger = $(e.currentTarget);
				$('#'+trigger.attr('for')).attr('checked', 'checked');
				trigger.siblings('label').removeClass('active');
				trigger.addClass('active');
				that.triggerAjaxReload();
			});

			// bind load more buttons
			this.loadMoreButtons.live('click', function(e) {
				e.preventDefault();
				var trigger = $(this);
				that.autoPaginateCount = 0;
				that.loadPage(trigger, trigger.parent());
			});

			// bind scrolling to bottom
			if (that.options.maxAutoPaginate > 0) {
				var hasNext;
				$(window).bind('scroll', function() {
					hasNext = that.productContainer.find('.has-next');
					if (that.autoPaginateCount < that.options.maxAutoPaginate && hasNext.length > 0) {
						if (hasNext.position().top - $(window).scrollTop() - $(window).height() < 20) {
							if (!that.loading) that.autoPaginateCount += 1;
							that.loadPage(hasNext.find('.load-more'), hasNext);
						}
					}
				});
			}

			// bind dropdowns
			this.dropdownTriggers.bind('click', function(e) {
				e.preventDefault();
				var dropdown = $(this).parent();
				var ul = dropdown.find('.items ul');
				if (dropdown.hasClass('closed')) {
					ul.slideDown(that.options.dropdownSpeed);
					dropdown.removeClass('closed').addClass('open');
					dropdown.find('.title .sign').text('+');
				} else {
					ul.slideUp(that.options.dropdownSpeed);
					setTimeout(function () {
						dropdown.removeClass('open').addClass('closed');
						dropdown.find('.title .sign').text('-');
					}, that.options.dropdownSpeed);
				}
			});

			// bind dropdown filters
			this.dropdownFilters.find('label').bind('click', function(e) {
				e.preventDefault();
				var checkbox = $('#'+$(this).attr('for'));
				checkbox.prop('checked', !checkbox.prop('checked'));
				that.triggerAjaxReload();
			});
			// bind dropdown filter checkboxes
			this.dropdownFilters.find('input').bind('click', function(e) {
				that.triggerAjaxReload();
			});
		},

		triggerAjaxReload: function(options) {
			options = options !== undefined ? options : {};
			options.push = options.push !== undefined ? options.push : true;
			options.page = options.page !== undefined ? options.page : 1;
			options.callback = options.callback !== undefined ? options.callback : function(){};

			var that = this;
			var speed = 200;

			this.pageInput.val(options.page);

			this.pageLoader.fadeIn(speed);
			$.ajax({
				'type': 'GET',
				'url': '',
				'dataType': 'html',
				'data': that.form.serialize()+'&ajax=1',
				'success': function(data, status) {
					that.productContainer.fadeOut(speed);
					setTimeout(function(){ that.productContainer.html(data); }, speed);
					that.productContainer.fadeIn(speed);
					if (options.push) {
						if (history && history.pushState) {
							history.pushState({}, document.title, '?' + that.form.serialize());
						}
					}
				},
				'error': function(data, status) {}
			}).done(function() {
				that.pageLoader.fadeOut(speed);
				options.callback();
			});
		},

		triggerReload: function() {
			this.pageInput.val(1);
			this.form.submit();
		},

		loadPage: function(trigger, container) {
			// stop if we are loading already
			if (this.loading) return;

			this.loading = true;

			var that = this;
			var page = trigger.data('page');
			var loader = container.find('.loader');
			var loadMoreButton = container.find('.load-more');
			var direction = '&direction=' + trigger.data('direction');

			// change page number
			this.pageInput.val(page);

			// show loader, hide button
			loadMoreButton.detach();
			loader.css('display', 'inline-block').hide().fadeIn(200);

			// create request
			$.ajax({
				'type': 'GET',
				'url': '',
				'dataType': 'html',
				'data': that.form.serialize()+direction,
				'success': function(data, status) {
					container.replaceWith(data);
				},
				'error': function(data, status) {}
			}).done(function() {
				// hide loader
				that.loading = false;
			});
		}

	});

})(jQuery);