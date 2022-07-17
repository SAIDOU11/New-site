/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
!function(a){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],a):a("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function($){"use strict";function q(a){return a&& void 0===a.allowPageScroll&&(void 0!==a.swipe|| void 0!==a.swipeStatus)&&(a.allowPageScroll=h),void 0!==a.click&& void 0===a.tap&&(a.tap=a.click),a||(a={}),a=$.extend({},$.fn.swipe.defaults,a),this.each(function(){var c=$(this),b=c.data(A);b||(b=new r(this,a),c.data(A,b))})}function r(E,r){function F(c){if(!(aj()||$(c.target).closest(r.excludedElements,D).length>0)){var a=c.originalEvent?c.originalEvent:c;if(!a.pointerType||"mouse"!=a.pointerType||0!=r.fallbackToMouseEvents){var d,b=a.touches,e=b?b[0]:a;return aP=m,b?aQ=b.length:!1!==r.preventDefaultEvents&&c.preventDefault(),aF=0,aG=null,aH=null,aN=null,aI=0,aJ=0,aK=0,aL=1,aM=0,aO=aq(),ah(),al(0,e),!b||aQ===r.fingers||r.fingers===l||T()?(aS=ay(),2==aQ&&(al(1,b[1]),aJ=aK=at(aR[0].start,aR[1].start)),(r.swipeStatus||r.pinchStatus)&&(d=M(a,aP))):d=!1,!1===d?(M(a,aP=p),d):(r.hold&&(aY=setTimeout($.proxy(function(){D.trigger("hold",[a.target]),r.hold&&(d=r.hold.call(D,a,a.target))},this),r.longTapThreshold)),ak(!0),null)}}}function H(d){var c=d.originalEvent?d.originalEvent:d;if(aP!==o&&aP!==p&&!ai()){var f,a=c.touches,g=a?a[0]:c,b=am(g);if(aT=ay(),a&&(aQ=a.length),r.hold&&clearTimeout(aY),aP=n,2==aQ&&(0==aJ?(al(1,a[1]),aJ=aK=at(aR[0].start,aR[1].start)):(am(a[1]),aK=at(aR[0].end,aR[1].end),aN=av(aR[0].end,aR[1].end)),aL=au(aJ,aK),aM=Math.abs(aJ-aK)),aQ===r.fingers||r.fingers===l||!a||T()){if(aG=ax(b.start,b.end),aH=ax(b.last,b.end),R(d,aH),aF=aw(b.start,b.end),aI=as(),ao(aG,aF),f=M(c,aP),!r.triggerOnTouchEnd||r.triggerOnTouchLeave){var e=!0;if(r.triggerOnTouchLeave){var h=az(this);e=aA(b.end,h)}!r.triggerOnTouchEnd&&e?aP=L(n):r.triggerOnTouchLeave&&!e&&(aP=L(o)),aP!=p&&aP!=o||M(c,aP)}}else M(c,aP=p);!1===f&&M(c,aP=p)}}function I(b){var a=b.originalEvent?b.originalEvent:b,c=a.touches;if(c){if(c.length&&!ai())return ag(a),!0;if(c.length&&ai())return!0}return ai()&&(aQ=aV),aT=ay(),aI=as(),P()||!O()?M(a,aP=p):r.triggerOnTouchEnd|| !1===r.triggerOnTouchEnd&&aP===n?(!1!==r.preventDefaultEvents&& !1!==b.cancelable&&b.preventDefault(),M(a,aP=o)):!r.triggerOnTouchEnd&&_()?N(a,aP=o,u):aP===n&&M(a,aP=p),ak(!1),null}function G(){aQ=0,aT=0,aS=0,aJ=0,aK=0,aL=1,ah(),ak(!1)}function J(a){var b=a.originalEvent?a.originalEvent:a;r.triggerOnTouchLeave&&M(b,aP=L(o))}function K(){D.unbind(B,F),D.unbind(C,G),D.unbind(aC,H),D.unbind(aD,I),aE&&D.unbind(aE,J),ak(!1)}function L(b){var a=b,d=Q(),c=O(),e=P();return!d||e?a=p:c&&b==n&&(!r.triggerOnTouchEnd||r.triggerOnTouchLeave)?a=o:!c&&b==o&&r.triggerOnTouchLeave&&(a=p),a}function M(b,c){var a,d=b.touches;return(X()||W())&&(a=N(b,c,s)),(U()||T())&& !1!==a&&(a=N(b,c,t)),ae()&& !1!==a?a=N(b,c,v):af()&& !1!==a?a=N(b,c,w):ad()&& !1!==a&&(a=N(b,c,u)),c===p&&G(b),c===o&&(d&&d.length||G(b)),a}function N(a,i,j){var h;if(j==s){if(D.trigger("swipeStatus",[i,aG||null,aF||0,aI||0,aQ,aR,aH]),r.swipeStatus&& !1===(h=r.swipeStatus.call(D,a,i,aG||null,aF||0,aI||0,aQ,aR,aH)))return!1;if(i==o&&V()){if(clearTimeout(aX),clearTimeout(aY),D.trigger("swipe",[aG,aF,aI,aQ,aR,aH]),r.swipe&& !1===(h=r.swipe.call(D,a,aG,aF,aI,aQ,aR,aH)))return!1;switch(aG){case b:D.trigger("swipeLeft",[aG,aF,aI,aQ,aR,aH]),r.swipeLeft&&(h=r.swipeLeft.call(D,a,aG,aF,aI,aQ,aR,aH));break;case c:D.trigger("swipeRight",[aG,aF,aI,aQ,aR,aH]),r.swipeRight&&(h=r.swipeRight.call(D,a,aG,aF,aI,aQ,aR,aH));break;case d:D.trigger("swipeUp",[aG,aF,aI,aQ,aR,aH]),r.swipeUp&&(h=r.swipeUp.call(D,a,aG,aF,aI,aQ,aR,aH));break;case e:D.trigger("swipeDown",[aG,aF,aI,aQ,aR,aH]),r.swipeDown&&(h=r.swipeDown.call(D,a,aG,aF,aI,aQ,aR,aH))}}}if(j==t){if(D.trigger("pinchStatus",[i,aN||null,aM||0,aI||0,aQ,aL,aR]),r.pinchStatus&& !1===(h=r.pinchStatus.call(D,a,i,aN||null,aM||0,aI||0,aQ,aL,aR)))return!1;if(i==o&&S())switch(aN){case f:D.trigger("pinchIn",[aN||null,aM||0,aI||0,aQ,aL,aR]),r.pinchIn&&(h=r.pinchIn.call(D,a,aN||null,aM||0,aI||0,aQ,aL,aR));break;case g:D.trigger("pinchOut",[aN||null,aM||0,aI||0,aQ,aL,aR]),r.pinchOut&&(h=r.pinchOut.call(D,a,aN||null,aM||0,aI||0,aQ,aL,aR))}}return j==u?i!==p&&i!==o||(clearTimeout(aX),clearTimeout(aY),aa()&&!ac()?(aW=ay(),aX=setTimeout($.proxy(function(){aW=null,D.trigger("tap",[a.target]),r.tap&&(h=r.tap.call(D,a,a.target))},this),r.doubleTapThreshold)):(aW=null,D.trigger("tap",[a.target]),r.tap&&(h=r.tap.call(D,a,a.target)))):j==v?i!==p&&i!==o||(clearTimeout(aX),clearTimeout(aY),aW=null,D.trigger("doubletap",[a.target]),r.doubleTap&&(h=r.doubleTap.call(D,a,a.target))):j==w&&(i!==p&&i!==o||(clearTimeout(aX),aW=null,D.trigger("longtap",[a.target]),r.longTap&&(h=r.longTap.call(D,a,a.target)))),h}function O(){var a=!0;return null!==r.threshold&&(a=aF>=r.threshold),a}function P(){var a=!1;return null!==r.cancelThreshold&&null!==aG&&(a=ap(aG)-aF>=r.cancelThreshold),a}function Q(){return!r.maxTimeThreshold||!(aI>=r.maxTimeThreshold)}function R(f,g){if(!1!==r.preventDefaultEvents){if(r.allowPageScroll===h)f.preventDefault();else{var a=r.allowPageScroll===i;switch(g){case b:(r.swipeLeft&&a|| !a&&r.allowPageScroll!=j)&&f.preventDefault();break;case c:(r.swipeRight&&a|| !a&&r.allowPageScroll!=j)&&f.preventDefault();break;case d:(r.swipeUp&&a|| !a&&r.allowPageScroll!=k)&&f.preventDefault();break;case e:(r.swipeDown&&a|| !a&&r.allowPageScroll!=k)&&f.preventDefault()}}}}function S(){var a=Y(),b=Z(),c=null===r.pinchThreshold||aM>=r.pinchThreshold;return a&&b&&c}function T(){return!!(r.pinchStatus||r.pinchIn||r.pinchOut)}function U(){return!(!S()||!T())}function V(){var a=Q(),b=O(),c=Y(),d=Z();return!P()&&d&&c&&b&&a}function W(){return!!(r.swipe||r.swipeStatus||r.swipeLeft||r.swipeRight||r.swipeUp||r.swipeDown)}function X(){return!(!V()||!W())}function Y(){return aQ===r.fingers||r.fingers===l||!a}function Z(){return 0!==aR[0].end.x}function _(){return!!r.tap}function aa(){return!!r.doubleTap}function ab(){if(null==aW)return!1;var a=ay();return aa()&&a-aW<=r.doubleTapThreshold}function ac(){return ab()}function ad(){return!(!((1===aQ||!a)&&(isNaN(aF)||aF<r.threshold))||!_())}function ae(){return!(!ab()||!aa())}function af(){return!(!(aI>r.longTapThreshold&&aF<x)||!r.longTap)}function ag(a){aU=ay(),aV=a.touches.length+1}function ah(){aU=0,aV=0}function ai(){var a=!1;return aU&&ay()-aU<=r.fingerReleaseThreshold&&(a=!0),a}function aj(){return!(!0!==D.data(A+"_intouch"))}function ak(a){D&&(!0===a?(D.bind(aC,H),D.bind(aD,I),aE&&D.bind(aE,J)):(D.unbind(aC,H,!1),D.unbind(aD,I,!1),aE&&D.unbind(aE,J,!1)),D.data(A+"_intouch",!0===a))}function al(c,b){var a={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return a.start.x=a.last.x=a.end.x=b.pageX||b.clientX,a.start.y=a.last.y=a.end.y=b.pageY||b.clientY,aR[c]=a,a}function am(b){var c=void 0!==b.identifier?b.identifier:0,a=an(c);return null===a&&(a=al(c,b)),a.last.x=a.end.x,a.last.y=a.end.y,a.end.x=b.pageX||b.clientX,a.end.y=b.pageY||b.clientY,a}function an(a){return aR[a]||null}function ao(a,b){a!=h&&(b=Math.max(b,ap(a)),aO[a].distance=b)}function ap(a){if(aO[a])return aO[a].distance}function aq(){var a={};return a[b]=ar(b),a[c]=ar(c),a[d]=ar(d),a[e]=ar(e),a}function ar(a){return{direction:a,distance:0}}function as(){return aT-aS}function at(a,b){var c=Math.abs(a.x-b.x),d=Math.abs(a.y-b.y);return Math.round(Math.sqrt(c*c+d*d))}function au(a,b){return(b/a*1).toFixed(2)}function av(){return aL<1?g:f}function aw(a,b){return Math.round(Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2)))}function ax(j,k){if(aB(j,k))return h;var g,i,l,m,n,f,a=(g=j,i=k,l=g.x-i.x,m=i.y-g.y,n=Math.atan2(m,l),f=Math.round(180*n/Math.PI),f<0&&(f=360-Math.abs(f)),f);return a<=45&&a>=0?b:a<=360&&a>=315?b:a>=135&&a<=225?c:a>45&&a<135?e:d}function ay(){return(new Date).getTime()}function az(a){var b=(a=$(a)).offset();return{left:b.left,right:b.left+a.outerWidth(),top:b.top,bottom:b.top+a.outerHeight()}}function aA(a,b){return a.x>b.left&&a.x<b.right&&a.y>b.top&&a.y<b.bottom}function aB(a,b){return a.x==b.x&&a.y==b.y}var r=$.extend({},r),q=a||z||!r.fallbackToMouseEvents,B=q?z?y?"MSPointerDown":"pointerdown":"touchstart":"mousedown",aC=q?z?y?"MSPointerMove":"pointermove":"touchmove":"mousemove",aD=q?z?y?"MSPointerUp":"pointerup":"touchend":"mouseup",aE=q?z?"mouseleave":null:"mouseleave",C=z?y?"MSPointerCancel":"pointercancel":"touchcancel",aF=0,aG=null,aH=null,aI=0,aJ=0,aK=0,aL=1,aM=0,aN=0,aO=null,D=$(E),aP="start",aQ=0,aR={},aS=0,aT=0,aU=0,aV=0,aW=0,aX=null,aY=null;try{D.bind(B,F),D.bind(C,G)}catch(aZ){$.error("events not supported "+B+","+C+" on jQuery.swipe")}this.enable=function(){return this.disable(),D.bind(B,F),D.bind(C,G),D},this.disable=function(){return K(),D},this.destroy=function(){K(),D.data(A,null),D=null},this.option=function(a,b){if("object"==typeof a)r=$.extend(r,a);else if(void 0!==r[a]){if(void 0===b)return r[a];r[a]=b}else{if(!a)return r;$.error("Option "+a+" does not exist on jQuery.swipe.options")}return null}}var b="left",c="right",d="up",e="down",f="in",g="out",h="none",i="auto",s="swipe",t="pinch",u="tap",v="doubletap",w="longtap",j="horizontal",k="vertical",l="all",x=10,m="start",n="move",o="end",p="cancel",a="ontouchstart"in window,y=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!a,z=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!a,A="TouchSwipe";$.fn.swipe=function(b){var c=$(this),a=c.data(A);if(a&&"string"==typeof b){if(a[b])return a[b].apply(a,Array.prototype.slice.call(arguments,1));$.error("Method "+b+" does not exist on jQuery.swipe")}else if(a&&"object"==typeof b)a.option.apply(a,arguments);else if(!(a||"object"!=typeof b&&b))return q.apply(this,arguments);return c},$.fn.swipe.version="1.6.18",$.fn.swipe.defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0},$.fn.swipe.phases={PHASE_START:m,PHASE_MOVE:n,PHASE_END:o,PHASE_CANCEL:p},$.fn.swipe.directions={LEFT:b,RIGHT:c,UP:d,DOWN:e,IN:f,OUT:g},$.fn.swipe.pageScroll={NONE:h,HORIZONTAL:j,VERTICAL:k,AUTO:i},$.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:l}})
JavaScript Minifier Tool Documentation
The API has changed, to see more please click here
To minify/compress your JavaScript, perform a POST request to

API https://www.toptal.com/developers/javascript-minifier/api/raw
with the input parameter set to the JavaScript you want to minify.

Hire the top 3% of freelance talent
Join the Toptal Network
Copyright 2010 - 2022 Toptal, LLC
