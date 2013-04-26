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
	Cl.Uniform = new Class({

		options: {
			'offset': -40,
			'lang': {
				'fileBtn': 'Upload',
				'fileStatus': 'Please select a file...'
			},
			// class handling
			'cls': {
				'prefix': 'uniform',
				'radio': 'radio',
				'checkbox': 'checkbox',
				'file': 'file',
				'select': 'select',
				'disabled': 'disabled',
				'focus': 'focus'
			},
			// template handling
			'tpl': {
				'radio': '<span class="{cls}"><span class="{knob}"></span></span>',
				'checkbox': '<span class="{cls}"><span class="{knob}"></span></span>',
				'file': '<span class="{cls}"><span class="{input}"><!-- file --></span><span class="{btn}">{btntext}</span><span class="{status}">{statustext}</span></span>',
				'select': '<span class="{cls}"><span class="{input}"><!-- select --></span><span class="{status}"></span><span class="{arrow}"></span>'
			}
		},

		initialize: function (elements, options) {
			this.elements = $(elements);
			this.options = $.extend(true, {}, this.options, options);

			this.build();
		},

		build: function () {
			var that = this;

			// loop through individual entries
			this.elements.each(function (index, item) {
				that._scan($(item));
			});
		},

		/*
		 * PUBLIC API
		 */
		update: function () {},

		destroy: function () {},

		/*
		 * PRIVATE METHODS
		 */
		_scan: function (field) {
			// delegate form elements to their responsive setup handlers
			switch(field.attr('type')) {
				case 'checkbox':
					this._setupRadioCheck(field, 'checkbox');
					break;
				case 'radio':
					this._setupRadioCheck(field, 'radio');
					break;
				case 'file':
					this._setupFile(field);
					break;
				case undefined:
					if(field.prop('tagName') === 'SELECT'
						&& field.attr('multiple') === undefined) this._setupSelect(field);
					break;
				default:
					break;
			}
		},
	// TODO trigger visual change if checkbox is really selected
	// TODO test other pseudos like active and focus
		_setupRadioCheck: function (field, type) {
			var that = this;
			var cls = this.options.cls;
			var clsTpl = cls.prefix + ' ' + cls.prefix + '-' + cls[type];
			var clsKnob = cls.prefix + '-' + cls[type] + '-knob';

			var tpl = $(this.options.tpl[type]
				.replace('{cls}', clsTpl)
				.replace('{knob}', clsKnob));

			// inject element
			field.wrap(tpl).css('left', this.options.offset);
			field.bind('click.' + cls.prefix, function (e) {
				// prevent event bubbling
				e.stopPropagation();

				// getting vars
				var input = $(this);
				var knob = $(this).parents('.' + clsKnob);

				// cancel event if element is disabled
				if(input.is(':disabled')) return false;

				if(type === 'checkbox') {
					// we need to check if we should activate or deactivate the checkbox
					if(parseInt(knob.css('left')) === 0) {
						knob.css('left', that.options.offset);
					} else {
						knob.css('left', 0);
					}
				} else { // radio
					// we need to determine the radio group and trigger/enable them at once
					input.closest('form').find('input[type="radio"][name="' + input.attr('name') + '"]')
						.parents('.' + clsKnob)
						.css('left', that.options.offset);
					knob.css('left', 0);
				}

				// api call
				input.trigger(cls.prefix + 'change');
			});

			// start attaching events
			var parent = field.parents('.' + cls.prefix);
				parent.bind('click.' + cls.prefix, function (e) {
					// prevent event bubbling
					e.preventDefault();
					e.stopPropagation();

					// delegate to input
					var input = $(this).find('input');
						input.trigger('click');
				});

			// initial state
			if(!field.is(':checked')) field.parents('.' + cls.prefix).children().css('left', this.options.offset);

			// add common elements
			this._common(field);
		},

		_setupFile: function (field) {
			var cls = this.options.cls;
			var clsTpl = cls.prefix + ' ' + cls.prefix + '-' + cls.file;
			var clsInput = cls.prefix + ' ' + cls.prefix + '-input';
			var clsBtn = cls.prefix + '-' + cls.file + '-btn';
			var clsStatus = cls.prefix + '-' + cls.file + '-status';

			var tpl = $(this.options.tpl.file
				.replace('{cls}', clsTpl)
				.replace('{input}', clsInput)
				.replace('{btn}', clsBtn)
				.replace('{btntext}', this.options.lang.fileBtn)
				.replace('{status}', clsStatus)
				.replace('{statustext}', this.options.lang.fileStatus));

			// auto calculate sizes
			tpl.css({
				'width': field.css('width'),
				'height': field.css('height'),
				'padding': field.css('padding'),
				'margin': field.css('margin')
			});

			// inject element
			field.wrap(tpl).css('left', this.options.offset);
			field.bind('click.' + cls.prefix, function (e) {
				// prevent event bubbling
				e.stopPropagation();
			});
			field.bind('change.' + cls.prefix, function (e) {
				// set new value to status
				var value = $(this).val().replace(/^C:\\fakepath\\/i, '');
				$(this).parents('.' + cls.prefix).find('.' + clsStatus).text(value);
			});

			// start attaching events
			var parent = field.parents('.' + cls.prefix);
				parent.bind('click.' + cls.prefix, function (e) {
					// prevent event bubbling
					e.preventDefault();
					e.stopPropagation();

					// delegate to input
					var input = $(this).find('input');
						input.trigger('click');
				});

			// add common elements
			this._common(field);
		},

		_setupSelect: function (field) {
			var cls = this.options.cls;
			var clsTpl = cls.prefix + ' ' + cls.prefix + '-' + cls.select;
			var clsInput = cls.prefix + ' ' + cls.prefix + '-input';
			var clsStatus = cls.prefix + '-' + cls.select + '-status';
			var clsArrow = cls.prefix + '-' + cls.select + '-arrow';

			var tpl = $(this.options.tpl.select
				.replace('{cls}', clsTpl)
				.replace('{input}', clsInput)
				.replace('{status}', clsStatus)
				.replace('{arrow}', clsArrow));

			// auto calculate sizes
			tpl.css({
				'width': field.css('width'),
				'height': field.css('height'),
				'padding': field.css('padding'),
				'margin': field.css('margin')
			});

			// inject element
			field.wrap(tpl).css('opacity', 0); //  this.options.offset

			// set the correct content
			var parent = field.parents('.' + cls.prefix);
			var text = parent.find('.' + clsStatus);

			// attach change event
			field.bind('change', function () {
				text.text($(this).find('option:selected').text());
			});

			// set correct value
			text.text(field.find('option:selected').text());

			// add common elements
			this._common(field);
		},

		_common: function (field) {
			var cls = this.options.cls;

			// add focus event
			field.bind('focus.' + cls.prefix + ' blur.' + cls.prefix, function (e) {
				var wrap = $(this).parents('.' + cls.prefix);
				var wrapCls = cls.prefix + '-' + cls.focus;
				(e.type === 'focus') ? wrap.addClass(wrapCls) : wrap.removeClass(wrapCls);
			});

			// add classes depending on the state
			if(field.is(':disabled')) field.parents('.' + cls.prefix).addClass(cls.prefix + '-' + cls.disabled);
		}

	});
})(jQuery);