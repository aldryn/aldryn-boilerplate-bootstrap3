/*!
 * @author:	Divio AG
 * @copyright:	http://www.divio.ch
 */

//######################################################################################################################
// #NAMESPACES#
var MBP = window.MBP || {};
var Cl = window.Cl || {};

jQuery(document).ready(function($){
//######################################################################################################################
// #JQUERY EXTENSION#
Cl.Base = {
	init: function () {
		// mainnav
		this.mainnav();
		// mobile mainnav
		Cl.Base.MobileNav.init();
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

// Mobile Navigation
// v1.0.1
Cl.Base.MobileNav = {
	options: {
		'speed': 300,
		'bound': 720
	},

	init: function (options) {
		this.options = $.extend(true, {}, this.options, options);

		this.mainnav = $('.mainnav');
		this.knob = $('.mainnav-knob');
		this.body = $('body');
		this.html = $('html');
		this.state = false;
		this.initialized = false;
		this.overlay = $('<div class="mainnav-overlay"></div>');
		this.timer = function () {};

		// attach required events
		this._events();
	},

	_events: function () {
		var that = this;

		// attach trigger to mainmenu
		this.knob.bind('click', function (e) {
			var width = $(window).width() * 70 / 100; // needs to be 70% of canvas

			// overflow:hidden; :320px; min-width:320px;
			(that.state) ? that.close() : that.open(width);

			// if not initialized, inject overlay
			if(!that.initialized) that.body.append(that.overlay);
			that.initialized = true;
		});
		// attach event to overlay
		this.overlay.bind('click.mainnav', function () { that.close(); });

		// show navigation if
		this.mainnav.find('a').bind('focus', function (e) {
			clearTimeout(that.timer);
			if(that.state || $(window).width() >= that.options.bound) return false;
			that.open($(window).width() * 70 / 100);
		});
		this.mainnav.find('a').bind('blur', function () {
			that.timer = setTimeout(function () { that.close(); }, 50);
		});

		// attach resize event for hiding mobile menu
		$(window).bind('resize.mainnav', function () {
			if(that.state && $(window).width() >= that.options.bound) that.close();
		});
	},

	open: function (width) {
		this.html.animate({ 'margin-left': width }, this.options.speed);
		this.overlay.show();

		this.mainnav.css({
			'width': width,
			'left': -width,
			'height': ($(window).height() > this.body.height()) ? $(window).height() : this.body.height()
		});

		this.state = true;
	},

	close: function () {
		var that = this;

		this.html.animate({ 'margin-left': 0 }, this.options.speed, function () {
			that.mainnav.css({
				'width': '',
				'left': '',
				'height': ''
			});
		});
		this.overlay.hide();

		this.state = false;
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

		// load mobile helpers
		if(this.mobile() && MBP !== {}) {
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
 * @version: 0.6.2
 * @param: label (if true than labeltext on parent else rel attribut on this)
 * @param: strip (replacement text)
 * @param: add (add additional information)
 */
$.fn.fieldLabel = function (options) {
	options = $.extend({
		'label': true,
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

		if($(this).attr('value') == '') $(this).attr('value', label);

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
MBP.hideUrlBar=function(){var a=window,b=a.document;if(!location.hash||!a.addEventListener){window.scrollTo(0,1);var c=1,d=setInterval(function(){if(b.body){clearInterval(d);c="scrollTop"in b.body?b.body.scrollTop:1;a.scrollTo(0,c===1?0:1)}},15);a.addEventListener("load",function(){setTimeout(function(){a.scrollTo(0,c===1?0:1)},0)},false)}}

//##################################################
// #AUTOINITS#
Cl.Base.init();

// end of jquery
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