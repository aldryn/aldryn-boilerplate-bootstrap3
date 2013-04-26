//######################################################################################################################
// #MBP EXTENSIONS#
// Fix for iPhone viewport scale bug
// http://www.blog.highub.com/mobile-2/a-fix-for-iphone-viewport-scale-bug/
MBP = window.MBP || {};
MBP.viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]');
MBP.ua = navigator.userAgent;
MBP.scaleFix = function () {if (MBP.viewportmeta && /iPhone|iPad/.test(MBP.ua) && !/Opera Mini/.test(MBP.ua)) {MBP.viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";document.addEventListener("gesturestart", MBP.gestureStart, false);}};
MBP.gestureStart = function () { MBP.viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6"; };
MBP.hideUrlBar=function(){var a=window,b=a.document;if(!location.hash||!a.addEventListener){window.scrollTo(0,1);var c=1,d=setInterval(function(){if(b.body){clearInterval(d);c="scrollTop"in b.body?b.body.scrollTop:1;a.scrollTo(0,c===1?0:1)}},15);a.addEventListener("load",function(){setTimeout(function(){a.scrollTo(0,c===1?0:1)},0)},false)}};