/*!
 * @author:	Divio AG
 * @copyright:	http://www.divio.ch
 */

//######################################################################################################################
// #NAMESPACES#
var MBP = window.MBP || {};
var Cl = window.Cl || {};

//######################################################################################################################
// #JQUERY EXTENSION#
Cl.Base = {
	init: function () {
		// mainnav
		this.mainnav();
		// init mobilemenu
		if(Cl.MobileMenu) new Cl.MobileMenu();
		// init utils
		Cl.Utils.helpers();
	},

	mainnav: function () {
		var that = this;

		$('.mainnav > ul > li.children').hoverIntent({
			over: function() {
				if($(window).width() >= 520) that.mainnavOpen($(this));
			},
			out: function() {
				if($(window).width() >= 520) that.mainnavClose($(this));
			},
			timeout: 150
		});
	},

	mainnavOpen: function (trigger) {
		trigger.addClass('open');
		trigger.find('ul').stop(true, true).slideDown(200);
	},

	mainnavClose: function (trigger) {
		trigger.removeClass('open').find('ul').stop(true, true).slideUp(100);
	}
};

//######################################################################################################################
// #CL EXTENSION#
Cl.Utils = {
	helpers: function () {
		// remove no-js class if javascript is activated
		$(document.body).removeClass('no-js');

		// adds dynamic print functionality to a class
		$('.print-js').bind('click', function (e) {
			e.preventDefault();
			window.print();
		});

		// autoload plugins
		$('.popup').autoPopUp();
		$('.mailcrypte').mailCrypte();
		$('[placeholder]').fieldLabel();

		// load mobile helpers
		if(this.mobile() && MBP) {
			MBP.scaleFix();
			MBP.hideUrlBar();
		}
		// viewport zoom fix
		if(!$.browser.msie) {
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
	},

	mobile: function () {
		return (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i));
	},

	tablet: function () {
		return (navigator.userAgent.match(/iPad/i));
	}
};

//######################################################################################################################
// #JQUERY PLUGINS#
/*!
 * E-Mail encrypte
 * @version: 0.4.0
 * @param: autoConvert (converts innerHtml to match the email address)
 * @param: attribute (attribute from which the domain name is catched)
 * @example: <a href="#info" rel="divio.ch" class="mailcrypte">E-Mail</a>
 */
$.fn.mailCrypte = function (options) {
	options = $.extend({
		'autoConvert': true,
		'attribute': 'data-rel'
	}, options);

	return this.each(function () {
		var mailto = 'mailto:' + $(this).attr('href').replace('#', '') + '@' + $(this).attr(options.attribute);

		$(this).attr('href', mailto);

		if(options.autoConvert) $(this).html(mailto.replace('mailto:', ''));
	});
};

/*!
 * Pop-Up Generator
 * @version: 0.3.0
 * @param: width (initial width)
 * @param: height (initial height)
 * @example: <a href="http://www.google.ch" class="popup">Open Pop-Up</a>
 */
$.fn.autoPopUp = function (options) {
	options = $.extend({
		'width': 750,
		'height': 500
	}, options);

	return this.each(function () {
		var el = $(this);
		var url = el.attr('href');
		var width = el.data('width') || options.width;
		var height = el.data('height') || options.height;

		el.bind('click', function (e) {
			e.preventDefault();
			window.open(url, '_blank', 'width=' + width + ',height=' + height + ',status=yes,scrollbars=yes,resizable=yes');
		});
	});
};

/*!
 * Auto input fill-in
 * @version: 0.6.4
 * @param: label (if true than labeltext on parent else rel attribut on this)
 * @param: strip (replacement text)
 * @param: add (add additional information)
 */
$.fn.fieldLabel = function (options) {
	options = $.extend({
		'label': false,
		'strip': '',
		'add': ''
	}, options);

	function show(el, label) {
		if(el.attr('value') != '') return false;
		el.attr('value', label);

		return true;
	}

	function hide(el, e, label) {
		if(e.type == 'blur' && el.attr('value') == label) return false;
		el.attr('value', '');

		return true;
	}

	return this.each(function () {
		var label = (options.label) ? $(this).parent().find('label').text() : $(this).attr('placeholder');
			label = label.replace(options.strip, '');
			label += options.add;

		if($(this).attr('value') === undefined) $(this).attr('value', label);

		$(this).bind('click', function (e) {
			if($(this).attr('value') == label) hide($(this), e, label);
		});

		$(this).bind('blur', function (e) {
			($(this).attr('value') == label) ? hide($(this), e, label) : show($(this), label);
		});
	}
)};

//######################################################################################################################
// #MBP EXTENSIONS#
// Fix for iPhone viewport scale bug
// http://www.blog.highub.com/mobile-2/a-fix-for-iphone-viewport-scale-bug/
MBP.viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]');
MBP.ua = navigator.userAgent;
MBP.scaleFix = function () {if (MBP.viewportmeta && /iPhone|iPad/.test(MBP.ua) && !/Opera Mini/.test(MBP.ua)) {MBP.viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";document.addEventListener("gesturestart", MBP.gestureStart, false);}};
MBP.gestureStart = function () { MBP.viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6"; };
MBP.hideUrlBar=function(){var a=window,b=a.document;if(!location.hash||!a.addEventListener){window.scrollTo(0,1);var c=1,d=setInterval(function(){if(b.body){clearInterval(d);c="scrollTop"in b.body?b.body.scrollTop:1;a.scrollTo(0,c===1?0:1)}},15);a.addEventListener("load",function(){setTimeout(function(){a.scrollTo(0,c===1?0:1)},0)},false)}};

/*!
 * @author      Angelo Dini
 * @version     1.0
 * @copyright	Distributed under the BSD License.
 */
(function(){var d="1.0";var c=window.Class;var b=window.Class=function(n){n=n||{};var m=function(){return(this.initialize)?this.initialize.apply(this,arguments):j};if(n.implement){var j=window===this?g(m.prototype):this;var l=n.implement;a(n,"implement");n=f(n,e(l))}m.prototype=g(n);m.constructor=m;m._parent=g(n);for(var k=0,h=["extend","implement","getOptions","setOptions"];k<h.length;k++){m[h[k]]=b[h[k]]}return m};b.extend=function(j){var h=this;if(j.implement){this.prototype=f(this.prototype,e(j.implement));a(j,"implement")}for(var i in j){j[i]=typeof j[i]==="function"&&/parent/.test(j[i].toString())?(function(l,k){return function(){this.parent=h._parent[k];return l.apply(this,arguments)}})(j[i],i):j[i]}this._parent=f(this._parent,j,true);this.prototype=f(this.prototype,j);return this};b.implement=function(h){return this.prototype=f(this.prototype,e(h))};b.getOptions=function(){return this.prototype.options||{}};b.setOptions=function(h){return this.prototype.options=f(this.prototype.options,h)};b.noConflict=function(){window.Class=c;return b};b.version=d;function g(i){var h=function(){};h.prototype=i.prototype||i;return new h()}function a(l,i,k){if(k){var h={};for(var j in l){if(j!==i){h[j]=l[j]}}}else{delete l[i]}return h||l}function f(h,i,k){if(!h||!i){return h||i||{}}h=g(h);i=g(i);for(var j in i){if(Object.prototype.toString.call(i[j])==="[object Object]"){f(h[j],i[j])}else{h[j]=(k&&h[j])?h[j]:i[j]}}return h}function e(l){var k={};for(var h=0;h<l.length;h++){if(typeof(l[h])==="function"){l[h]=l[h].prototype}var j=a(l[h],"initialize",true);if(j.implement){k=e(j.implement)}else{k=f(k,j)}}return k}})();

/*!
 * @author      Angelo Dini - github.com/finalangel/classjs-plugins
 * @copyright	Distributed under the BSD License.
 * @version     1.1.0
 */

(function($){
	'use strict';

	// creating class
	Cl.MobileMenu = new Class({

		options: {
			'easing': 'linear',
			'duration': 300,
			'bound': 720,
			'ratio': 70 / 100,
			'offset': {
				'left': -10,
				'top': 0
			},
			'cls': {
				'menu': '.mainnav',
				'knob': '.mainnav-knob'
			},
			'overlay': '<div class="mainnav-overlay"></div>'
		},

		initialize: function (options) {
			this.options = $.extend(true, {}, this.options, options);

			this.html = $('html');
			this.body = $('body');

			this.menu = $(this.options.cls.menu);
			this.knob = $(this.options.cls.knob);
			this.overlay = $(this.options.overlay);

			this.initialized = false;
			this.visible = false;
			this.timer = function () {};
			this.width = null;
			this.height = this.menu.outerHeight(true);
			this.callbacks = {};

			this._setup();
		},

		_setup: function () {
			var that = this;

			// setup initial states
			this.menu.attr('aria-expanded', false);

			// attach trigger to mainmenu
			this.knob.on('click', function (e) {
				e.preventDefault();
				that.toggle();
			});

			// attach event to overlay
			this.overlay.on('click', function () { that.hide(); });

			// show navigation if focus
			this.menu.on('focusin focusout', function (e) {
				// cancel if viewport is smaller than expected
				if($(window).width() >= that.options.bound) return false;
				// start timer
				clearTimeout(that.timer);
				that.timer = setTimeout(function () {
					(e.type === 'focusin') ? that.show() : that.hide(0)
				}, 50);
			});

			// attach resize event for hiding mobile menu
			$(window).bind('resize.menu', function () {
				if(that.visible && $(window).width() >= that.options.bound) that.hide(0);
				if($(window).width() <= that.options.bound) {
					that.menu.height(0);
				} else {
					that.menu.height('auto');
				}
			});
		},

		toggle: function () {
			// trigger event
			this._fire('toggle');

			(this.visible) ? this.hide() : this.show();

			// if not initialized, inject overlay
			if(!this.initialized) this.body.append(this.overlay);
			this.initialized = true;

			// trigger callback
			this._fire('toggle', this);
		},

		show: function (speed) {
			// trigger event
			this._fire('show');

			// switch aria
			this.menu.attr('aria-expanded', true);

			// calculate width, use original if once calculated
			if(!this.visible) this.width = ($(window).width() * this.options.ratio);

			// fix html size and animate
			this.html.animate({
				'margin-left': this.width
			}, (speed !== undefined) ? speed : this.options.duration, this.options.easing)
				.css('width', $(window).width())
				.css('overflow-x', 'hidden');
			// figure out the correct height for the menu
			var height = ($(window).height() > this.body.height()) ? $(window).height() : this.body.height();
			if(this.height > height) height = this.height;
			// set correct menu css
			this.menu.css({
				'width': this.width,
				'height': height + 1, // +5 = address bar fix
				'top': this.options.offset.top,
				'left': -this.width + this.options.offset.left
			});
			// show overlay
			this.overlay.show();

			// set new state
			this.visible = true;

			// trigger callback
			this._fire('show', this);
		},

		hide: function (speed) {
			// trigger event
			this._fire('hide');

			var that = this;

			// switch aria
			this.menu.attr('aria-expanded', false);

			// animate back and remove attributes
			this.html.animate({
				'margin-left': 0
			}, (speed !== undefined) ? speed : this.options.duration, this.options.easing, function () {
				that.menu.removeAttr('style');
				that.html.removeAttr('style');
			});
			// hide overlay
			this.overlay.hide();

			// set new state
			this.visible = false;

			// trigger callback
			this._fire('hide', this);
		},

		_fire: function (keyword, scope) {
			if(scope) {
				// cancel if there is no callback found
				if(this.callbacks[keyword] === undefined) return false;
				// excecute callback
				this.callbacks[keyword](scope);
			} else {
				// excecute event
				$.event.trigger('accordion-' + keyword);
			}
		}
	});

})(jQuery);
//##################################################
// #AUTOINITS#
jQuery(document).ready(function($){
	Cl.Base.init();
});

// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
if(Function.prototype.bind&&(typeof console==="object"||typeof console==="function")&&typeof console.log==="object"){["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function(a){console[a]=this.call(console[a],console)},Function.prototype.bind)}if(!window.log){window.log=function(){log.history=log.history||[];log.history.push(arguments);if(typeof console!="undefined"&&typeof console.log=="function"){if(Array.prototype.slice.call(arguments).length===1&&typeof Array.prototype.slice.call(arguments)[0]==="string"){console.log(Array.prototype.slice.call(arguments).toString())}else{console.log(Array.prototype.slice.call(arguments))}}else if(!Function.prototype.bind&&typeof console!=="undefined"&&typeof console.log==="object"){Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments))}else{if(!document.getElementById("firebug-lite")){var a=document.createElement("script");a.type="text/javascript";a.id="firebug-lite";a.src="https://getfirebug.com/firebug-lite.js";document.getElementsByTagName("HEAD")[0].appendChild(a);setTimeout(function(){log(Array.prototype.slice.call(arguments))},2e3)}else{setTimeout(function(){log(Array.prototype.slice.call(arguments))},500)}}}}// make it safe to use console.log always
window.log=window.log||function(){};window.log.needDetailPrint=function(){var uaCheck,uaVersion,ua=window.navigator.userAgent;if(/iPad|iPhone|iPod/.test(window.navigator.platform)){uaCheck=ua.match(/OS\s([0-9]{1})_([0-9]{1})/);uaVersion=uaCheck?parseInt(uaCheck[1],10):0;if(uaVersion>=6)return!0}else if(window.opera){uaCheck=/Version\/(\d+)\.\d+/;if(uaCheck.test(ua)&&parseInt(uaCheck.exec(ua)[1],10)<=11)return!0}else if(/MSIE\s\d/.test(ua))return!0;return!1};window.log.detailPrint=function(args){var j,thisArg,argType,str,beginStr,getSpecificType=function(obj){var reportedType=Object.prototype.toString.call(obj),found="",types="Array,Date,RegExp,Null".split(","),n=types.length;while(n--)if(reportedType==="[object "+types[n]+"]"){found=types[n].toLowerCase();break}if(found.length)return found;if(typeof HTMLElement=="object"&&obj instanceof HTMLElement||typeof obj.nodeName=="string"&&obj.nodeType===1)found="element";else if(typeof Node=="object"&&obj instanceof Node||typeof obj.nodeType=="number"&&typeof obj.nodeName=="string")found="node";return found.length?found:typeof obj},detailedArgs=[],i=0;while(i<args.length){thisArg=args[i];argType=typeof thisArg;beginStr="Item "+(i+1)+"/"+args.length+" ";if(argType==="object"){argType=getSpecificType(thisArg);if(argType==="array")if(!thisArg.length)detailedArgs.push(beginStr+"(array, empty) ",thisArg);else{j=thisArg.length>3?3:thisArg.length;str="";while(j--)str=getSpecificType(thisArg[j])+", "+str;thisArg.length>3?str+="...":str=str.replace(/,\s$/,"");detailedArgs.push(beginStr+"(array, length="+thisArg.length+", ["+str+"]) ",thisArg)}else if(argType==="element"){str=thisArg.nodeName.toLowerCase();thisArg.id&&(str+="#"+thisArg.id);thisArg.className&&(str+="."+thisArg.className.replace(/\s+/g,"."));detailedArgs.push(beginStr+"(element, "+str+") ",thisArg)}else if(argType==="date")detailedArgs.push(beginStr+"(date) ",thisArg.toUTCString());else{detailedArgs.push(beginStr+"("+argType+")",thisArg);if(argType==="object"&&typeof thisArg.hasOwnProperty=="function")for(j in thisArg)thisArg.hasOwnProperty(j)&&detailedArgs.push('  --> "'+j+'" = ('+getSpecificType(thisArg[j])+") ",thisArg[j])}}else detailedArgs.push(beginStr+"("+typeof thisArg+") ",thisArg);i++}return detailedArgs};
// (function(b){function c(){}for(var d="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try{console.log();return window.console;}catch(err){return window.console={};}})());
// Avoid `console` errors in browsers that lack a console.
(function() {var method;var noop = function noop() {};var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error','exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log','markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd','timeStamp', 'trace', 'warn'];var length = methods.length;var console = (window.console = window.console || {});while (length--) {method = methods[length];if (!console[method]) {console[method] = noop;}}}());

/**
 * hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
 * <http://cherne.net/brian/resources/jquery.hoverIntent.html>
 *
 * @param  f  onMouseOver function || An object with configuration options
 * @param  g  onMouseOut function  || Nothing (use configuration options object)
 * @author    Brian Cherne brian(at)cherne(dot)net
 */
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);