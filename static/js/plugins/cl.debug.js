/*!
 * @author      Angelo Dini - github.com/finalangel/classjs-plugins
 * @copyright	Distributed under the BSD License.
 * @version     1.1.1
 */

// ensure namespace is defined
var Cl = window.Cl || {};

(function($){
	'use strict';

	// creating singleton
	Cl.Debug = {

		options: {
			'closed': 'false',
			'collapsed': 'true'
		},

		init: function (options) {
			this.options = $.extend(true, {}, this.options, options);

			// global variables
			this.template = '';

			// setup
			this.setCSS();
			this.setHTML();
			this.setEvents();

			// register modules
			this.elements();

			// attach toolbar to document
			this.load();
		},

		setCSS: function () {
			this.template += '<style type="text/css">';
			this.template += '#divio-dt { position:fixed; right:0; bottom:0; z-index:99999; font-size:11px; width:180px; font-family:"Helvetica Neue", "Helvetica", sans-serif; }';
			this.template += '.divio-dt-header { height:25px; overflow:hidden; background:#00aeef; }';
			this.template += '.divio-dt-hide { float:left; } .divio-dt-close { float:right; }';
			this.template += '.divio-dt-body { position:relative; color:#616161; background:#eee; clear:both; overflow:hidden; }';
			this.template += '.divio-dt-body ul { list-style-type:none; padding:0; margin:0; }';
			this.template += '.divio-dt-body ul li { list-style-type:none; padding:0; margin:0; }';
			this.template += '.divio-dt-body ul li:last-child a { border:none !important; }';
			this.template += '.divio-dt-body a { display:block; cursor:pointer; color:#616161; padding:1px 8px; border-bottom:1px solid #00aeef; }';
			this.template += '.divio-dt-body a span { color:#00aeef; font-weight:bold; font-family:"Verdana"; font-size:10px; }';
			this.template += '.divio-dt-body a:hover { color:#000; text-decoration:none; background:#fff; }';
			this.template += '</style>';
		},

		setHTML: function () {
			var logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAZCAIAAAApJD5eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNENGRURFNDUxRTUxMUUyODUwMzg2MjJEMEVFRkQwRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNENGRURFNTUxRTUxMUUyODUwMzg2MjJEMEVFRkQwRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY0Q0ZFREUyNTFFNTExRTI4NTAzODYyMkQwRUVGRDBEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY0Q0ZFREUzNTFFNTExRTI4NTAzODYyMkQwRUVGRDBEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+b/JoVwAABMdJREFUeNrsWF1MW2UYfk/PX885LTtUBF3pVsZPJgkzc+xi/swu/mQa4/DSCwPEGBOJgtmFM8a0XJhNLwQS9VZ2pRdz4p03c51bhpljq0MXGJh1MihQWg5QoD+n5/h+PZuw/pwW9WZZv5w0p+d7v7fv8/48T1sGTi/Cg7Qs8ICtMuAy4DLgMuD7ajFF9nX9WCN3vEU6Nrr66UQSKMrEsmMH6xYxg3phd1T/nwlFpQx7TxXtqSoSgGEvM3pPPZ/xTPnGEtlhbHI1FEoFljSTOJlC0b/hYo42Cm9fXnrGQYXi2kEHNSzrA0/YPxlbPzWj5vGopdtdoqeGNwfQvpOv+1EBCw265nEw3mbR3P5INbX3fEJJqDt5tqPelolN842nNgcg09rX++xuiQnG1P7xGAC79Qpr6aMNUoPM/PL8Q5jV2bj2klN82SmuAry3izt1OwE0k3uEXADBlcTJsWhuEdp3O9x23i3RnkrwKzrGDWnV2Oz9NWSKWsDjvYFIW60g83R3o9g/EVH0u6h0raeeQ7TEz5WwkqRM8RYErL11IfTDC64lgMHr4ZH52L5qW0fzwwii6+Is6ELepjCaObic9F3L1DArHQDe/Y+Se4KTJfaIObN8v6+YxSgL6C0YpwZGF7ytNTJn6dsjdgawsQkByZZ0d5OMN/7plcGbayBVmM1dfsA4t7uFZx0SELTzH41EgGFPTy3gRmdz9WetVeei2olJtaBfjEOwA8vd81BV0clGavR759wqkcuMW2ngrL5Rpb1JdlfwHbukgcl4IEZS3NPAYwpIeQNR4EWwMFsnrbR6fE8lJn8url2JpsAmA8OBmsT7ToAXa6XDtXBiPLwBIBswkIZnuJznBROvv+7M7+l7ZeMNzWJSOn+eOftKHb7re1w6dD7mFsDbUkEKMxbxRzUQWPPyFgCspd8dnjtQxR1ybfM47d8tpgxsHid5/XZicXghCZpuzg1bWtQ30/k3NpcdkbC8P5oYuqm01cmeGmtbzeqR7YQjlUS69zcFeFv2HJUK2EJ/cWP52ryOgLsekylm9WI0/aRDfKdRQvYaGA1fijGkaf/PbwOkY0sy48X3L0U82+3IXn17K9w2knSc7aCK9WeKlrcAYGxIq/TlwUrI8HNXo9SVeYziRHrpaddTZ5fysPTdhUH4UGzoLNKiu5sKKpCvxW4qxck70o14GDYYZzHp3tZHDLQoCv3jK8BVlFLeAoDRL2X5+GrkzQb7Bxdufbjf+Zxr25mppc9HZnoP7PjqxjJYzEbFbee8LVyh3cDCuj+cBOEeA2+zZGY/te5XxRz2qkT2Ilw1ElYoq0kBSpMli2VoJjl0KwQ6ez0aR8B/RONX15hXfwrhIIGVz5umk5Mr524vG9+HcnXYEK3+sVXg7IaBfy4Bl2fxs7bW/4S9bK+dmW6rtSopffCvJIh2Q6JK4ov8/3hgfKicqJOaBok1SMbJjBHStxDXmObcCqO6JtYhFc+WnOxZFYDjyQ36R7d4FW1Fhs0WLfwsPJiKG1NNFKGE6TWtMJ43mgSjN5ziK23KCsRMAN5qBhiPk2RZ7sg1JpHINZU/g0XYK5O4rZ8t1voZnihJgf7JUam9hV2NtaX/Dav/h7Pl38NlwGXA9/f6W4ABAJLZvyUbIgMcAAAAAElFTkSuQmCC';
			var close = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NTMxQUZERjNBQTIxMUUxQkJBMjlFOTlENjg3RDk0MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NTMxQUZFMDNBQTIxMUUxQkJBMjlFOTlENjg3RDk0MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1MzFBRkREM0FBMjExRTFCQkEyOUU5OUQ2ODdEOTQxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1MzFBRkRFM0FBMjExRTFCQkEyOUU5OUQ2ODdEOTQxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iHgIJQAAAAxQTFRFQMLyEJvO////AK7vWmpDTAAAADxJREFUeNpiYMYFGIatDBOYyYRFhgEkxcSIzTSgFJIEij0oEqh6GJkYmLHawwixC9NtjGDpERAL6AAgwAADKwcXukvHXQAAAABJRU5ErkJggg%3D%3D';

			// template
			this.template += '<div id="divio-dt">';
			this.template += '  <div class="divio-dt-header">';
			this.template += '      <a href="/" class="divio-dt-hide"><img src="' + logo + '" alt="" /></a>';
			this.template += '      <a href="/" class="divio-dt-close"><img src="' + close + '" alt="" /></a>';
			this.template += '  </div>';
			this.template += '  <div class="divio-dt-wrapper"><div class="divio-dt-body clearfix"><ul></ul></div></div>';
			this.template += '</div>';
			this.template = $(this.template);
		},

		setEvents: function () {
			var that = this;

			// set global variables
			this.body = this.template.find('.divio-dt-body ul');
			this.frame = this.template.eq(1);

			this.closed = this.getStorage('divio-toolbar-closed') || this.options.closed;
			this.collapsed = this.getStorage('divio-toolbar-hidden') || this.options.collapsed;

			// setup visibility
			(this.closed === 'true') ? this.frame.hide() : this.frame.show();
			(this.collapsed === 'true') ? this.body.hide() : this.body.show();
			(this.collapsed === 'true') ? this.template.css('width', 110) : this.template.css('width', 180);

			// close event
			this.template.find('.divio-dt-close').bind('click', function (e) {
				e.preventDefault();

				that.frame.hide();
				that.setStorage('divio-toolbar-closed', 'true');
			});
			if(window.location.hash === '#show') {
				that.frame.show();
				that.setStorage('divio-toolbar-closed', 'false');
			}

			// hide event
			this.template.find('.divio-dt-hide').bind('click', function (e) {
				e.preventDefault();

				that.template.css('width', 180);
				that.body.slideToggle(function () {
					if(that.body.is(':visible')) {
						that.setStorage('divio-toolbar-hidden', false);
						that.template.css('width', 180);
					} else {
						that.setStorage('divio-toolbar-hidden', true);
						that.template.css('width', 110);
					}
				});
			});
		},

		elements: function () {
			// modifiers
			this.modules.responsive.call(this);
			this.modules.editable.call(this);
			this.modules.designmode.call(this);
			this.modules.resizeable.call(this);
			// bookmarklets
			this.modules.firebug.call(this);
			this.modules.grid.call(this);
			this.modules.advanced.call(this);
			// links
			this.modules.links.call(this);
		},

		modules: {

			'links': function () {
				var template = '';
				var links = [
					{ 'name': 'JQuery', 'url': 'http://docs.jquery.com/Main_Page' },
					{ 'name': 'Compass', 'url': 'http://compass-style.org/index/mixins/' },
					{ 'name': 'Django Templates', 'url': 'http://docs.djangoproject.com/en/dev/ref/templates/builtins/' }
				];
				// loop through the array
				$(links).each(function (index, item) {
					template += '<li><a href="' + item.url + '" target="_blank"><span>&raquo;</span> <strong>Docs</strong> ' + item.name + '</a></li>';
				});
				// attach links to body
				this.body.append(template);
			},

			'responsive': function () {
				var name = 'Responsive Mode';
				var script = "javascript:void((function()%7Bvar%20d%3Ddocument%3Bd.write(%27%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3Cmeta%20charset%3D%22UTF-8%22%3E%3Ctitle%3E%27%2Bd.title%2B%27%20-%20Responsive%20test%3C/title%3E%3Clink%20rel%3D%22stylesheet%22%20href%3D%22http://responsive.victorcoulon.fr/assets/css/app.css%22%3E%3Cscript%20src%3D%22http://responsive.victorcoulon.fr/assets/js/app.min.js%22%3E%3C/script%3E%3C/head%3E%3Cbody%3E%3Cheader%3E%3Cdiv%20class%3D%22close%22%3E%3Ca%20href%3D%22%23%22%3E%C3%97%3C/a%3E%3C/div%3E%3Cdiv%20id%3D%22size%22%3E%3C/div%3E%3Cdiv%20class%3D%22keyboard%22%3E%3Ca%20href%3D%22%23%22%3EI%3C/a%3E%3C/div%3E%3Cdiv%20class%3D%22cssrefresh%22%3E%3Ca%20href%3D%22%23%22%3EI%3C/a%3E%3C/div%3E%3Cdiv%20id%3D%22devices%22%3E%3Ca%20href%3D%22%23%22%20class%3D%22tablet-portrait%22%3E%3Cspan%3ETablet%20Portrait%3C/span%3E%3C/a%3E%3Ca%20href%3D%22%23%22%20class%3D%22tablet-landscape%22%3E%3Cspan%3ETablet%20Landscape%3C/span%3E%3C/a%3E%3Ca%20href%3D%22%23%22%20class%3D%22smartphone-landscape%22%3E%3Cspan%3EiPhone%20Landscape%3C/span%3E%3C/a%3E%3Ca%20href%3D%22%23%22%20class%3D%22smartphone-portrait%22%3E%3Cspan%3EiPhone%20Portrait%3C/span%3E%3C/a%3E%3Ca%20href%3D%22%23%22%20class%3D%22auto%20active%22%3E%3Cspan%3EAuto%3C/span%3E%3C/a%3E%3C/div%3E%3C/header%3E%3Csection%3E%3Cdiv%20id%3D%22wrapper%22%3E%3Ciframe%20src%3D%22%27%2Bd.URL%2B%27%22%20onLoad%3D%22resbook.changeUrl(this.contentWindow.location,this.contentDocument.title)%3B%22%3E%3C/iframe%3E%3Cspan%20class%3D%22keyboard-bg%22%3E%3C/span%3E%3C/div%3E%3C/section%3E%3C/body%3E%3C/html%3E%27)%7D)())%3B";
				// use helper to do the magic
				this.helper_bookmarklet(name, script);
			},

			'editable': function () {
				var name = 'Edit Mode';
				var attr = 'contenteditable';
				var value = [true, false];
				var type = 'attr';
				// use helper to do the magic
				this.helper_enabler(name, attr, value, type);
			},

			'designmode': function () {
				var name = 'Design Mode';
				var attr = 'designMode';
				var value = ['on', 'off'];
				var type = 'attr';
				// use helper to do the magic
				this.helper_enabler(name, attr, value, type);
			},

			'resizeable': function () {
				var name = 'Resizable';
				var attr = 'resize';
				var value = ['both', 'none'];
				var type = 'css';
				// use helper to do the magic
				this.helper_enabler(name, attr, value, type);
			},

			'firebug': function () {
				var name = 'Firebug Lite';
				var script = "javascript:(function(F,i,r,e,b,u,g,L,I,T,E){if(F.getElementById(b))return;E=F[i+'NS']&&F.documentElement.namespaceURI;E=E?F[i+'NS'](E,'script'):F[i]('script');E[r]('id',b);E[r]('src',I+g+T);E[r](b,u);(F[e]('head')[0]||F[e]('body')[0]).appendChild(E);E=new%20Image;E[r]('src',I+L);})(document,'createElement','setAttribute','getElementsByTagName','FirebugLite','4','firebug-lite-debug.js','releases/lite/debug/skin/xp/sprite.png','https://getfirebug.com/','#startOpened');";
				// use helper to do the magic
				this.helper_bookmarklet(name, script);
			},

			'grid': function () {
				var name = 'Grid';
				var script = "javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://gridder.andreehansson.se/releases/latest/960.gridder.js';})();";
				// use helper to do the magic
				this.helper_bookmarklet(name, script);
			},

			'advanced': function () {
				var name = 'More';
				var script = "javascript:(function(){var%20jselem=document.createElement('SCRIPT');jselem.type='text/javascript';jselem.src='http://stevesouders.com/mobileperf/mobileperfbkm.js';document.getElementsByTagName('body')[0].appendChild(jselem);})();";
				// use helper to do the magic
				this.helper_bookmarklet(name, script);
			}

		},

		helper_enabler: function (name, attr, value, type) {
			var state = false;
			var template = '';
			template += '<li><a href="# class="divio-dt-html"><span>&raquo;</span> <strong style="color:#cb3333;">Enable</strong> ' + name + '</a></li>';
			template = $(template);
			template.bind('click', function (e) {
				e.preventDefault();
				if(state === false) {
					(type === 'attr') ? $('body').attr(attr, value[0]) : $('*').css(attr, value[0]);
					$(this).find('strong').css('color', '#6f9935').text('Disable');
					state = true;
				} else {
					(type === 'attr') ? $('body').attr(attr, value[1]) : $('*').css(attr, value[1]);
					$(this).find('strong').css('color', '#cb3333').text('Enable');
					state = false;
				}
			});
			this.body.append(template);
		},


		helper_bookmarklet: function (name, script) {
			var template = '';
			template += '<li><a href="' + script + '"><span>&raquo;</span> <strong>Load</strong> ' + name + '</a></li>';
			template = $(template);
			template.bind('click', function () {
				$(this).css('opacity', 0.5);
			});
			this.body.append(template);
		},

		load: function () {
			// append elements to body
			$('body').append(this.template);
		},

		setStorage: function (attribute, value) {
			// cancel if this feature is not supported by some browser
			if($.browser.msie) return false;
			// save storage
			localStorage.setItem(attribute, value);
		},

		getStorage: function (attribute) {
			// cancel if feature is not supported by some browser
			if($.browser.msie) return false;
			// retrieve storage
			return localStorage.getItem(attribute);
		}
	};
	// autoinit
	Cl.Debug.init();
})(jQuery);