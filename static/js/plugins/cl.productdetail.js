/*!
 * @author      Divio AG
 * @copyright	Distributed under the BSD License
 * @version     1.0.0
 */

// insure namespace is defined
var Cl = window.Cl || {};

(function($){

	Cl.ProductDetail = new Class({

		options: {
			'priceFormat': 'CHF {price}',
			'decimalPlaces': 2
		},

		initialize: function(container, options) {
			var that = this;

			this.container = $(container);
			this.options = $.extend(true, {}, this.options, options);
			this.totalPrice = this.container.find('#total-price');
			this.startingPrice = parseFloat(this.totalPrice.data('price'));
			this.variationOptions = this.container.find('.variation-option select');
			this.textOptions = this.container.find('.text-option input');

			this._setup();
		},

		_setup: function() {
			var that = this;

			that.updateTotalPrice();

			this.variationOptions.bind('change', function() {
				that.updateTotalPrice();
			});
			this.textOptions.bind('change', function() {
				that.updateTotalPrice();
			});
		},

		_format: function(format, price) {
			price = price.toFixed(this.options.decimalPlaces);
			return format.replace(/{price}/g, price);
		},

		updateTotalPrice: function() {
			var toAdd = 0;
			this.variationOptions.find('option:selected').each(function(index, item) {
				toAdd += parseFloat($(item).data('price'));
			});
			this.textOptions.each(function(index, item) {
				if ($(item).val().length > 0) toAdd += parseFloat($(item).data('price'));
			});
			this.totalPrice.text(this._format(this.options.priceFormat, this.startingPrice + parseFloat(toAdd)));
		}

	});

})(jQuery);