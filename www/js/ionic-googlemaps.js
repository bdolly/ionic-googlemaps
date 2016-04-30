(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Library/WebServer/Documents/ionic-googlemaps/www/bower_components/angular-animate/angular-animate.min.js":[function(require,module,exports){
/*
 AngularJS v1.4.3
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F,t,W){'use strict';function ua(a,b,c){if(!a)throw ngMinErr("areq",b||"?",c||"required");return a}function va(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;X(a)&&(a=a.join(" "));X(b)&&(b=b.join(" "));return a+" "+b}function Ea(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function ba(a,b,c){var d="";a=X(a)?a:a&&U(a)&&a.length?a.split(/\s+/):[];u(a,function(a,s){a&&0<a.length&&(d+=0<s?" ":"",d+=c?b+a:a+b)});return d}function Fa(a){if(a instanceof G)switch(a.length){case 0:return[];
case 1:if(1===a[0].nodeType)return a;break;default:return G(ka(a))}if(1===a.nodeType)return G(a)}function ka(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Ga(a,b,c){u(b,function(b){a.addClass(b,c)})}function Ha(a,b,c){u(b,function(b){a.removeClass(b,c)})}function ha(a){return function(b,c){c.addClass&&(Ga(a,b,c.addClass),c.addClass=null);c.removeClass&&(Ha(a,b,c.removeClass),c.removeClass=null)}}function ia(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
H;a.domOperation=function(){a.$$domOperationFired=!0;b();b=H};a.$$prepared=!0}return a}function ca(a,b){wa(a,b);xa(a,b)}function wa(a,b){b.from&&(a.css(b.from),b.from=null)}function xa(a,b){b.to&&(a.css(b.to),b.to=null)}function R(a,b,c){var d=(b.addClass||"")+" "+(c.addClass||""),e=(b.removeClass||"")+" "+(c.removeClass||"");a=Ia(a.attr("class"),d,e);ya(b,c);b.addClass=a.addClass?a.addClass:null;b.removeClass=a.removeClass?a.removeClass:null;return b}function Ia(a,b,c){function d(a){U(a)&&(a=a.split(" "));
var b={};u(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);u(b,function(a,b){e[b]=1});c=d(c);u(c,function(a,b){e[b]=1===e[b]?null:-1});var s={addClass:"",removeClass:""};u(e,function(b,c){var d,e;1===b?(d="addClass",e=!a[c]):-1===b&&(d="removeClass",e=a[c]);e&&(s[d].length&&(s[d]+=" "),s[d]+=c)});return s}function z(a){return a instanceof t.element?a[0]:a}function za(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};u(c,function(a,b){var c=e[a];if(c){var k=c.charAt(0);
if("-"===k||"+"===k||0<=k)c=Ja(c);0===c&&(c=null);d[b]=c}});return d}function Ja(a){var b=0;a=a.split(/\s*,\s*/);u(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function la(a){return 0===a||null!=a}function Aa(a,b){var c=O,d=a+"s";b?c+="Duration":d+=" linear all";return[c,d]}function ja(a,b){var c=b?"-"+b+"s":"";da(a,[ea,c]);return[ea,c]}function ma(a,b){var c=b?"paused":"",d=V+"PlayState";da(a,[d,c]);return[d,c]}function da(a,
b){a.style[b[0]]=b[1]}function Ba(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}var H=t.noop,ya=t.extend,G=t.element,u=t.forEach,X=t.isArray,U=t.isString,na=t.isObject,Ka=t.isUndefined,La=t.isDefined,Ca=t.isFunction,oa=t.isElement,O,pa,V,qa;F.ontransitionend===W&&F.onwebkittransitionend!==W?(O="WebkitTransition",pa="webkitTransitionEnd transitionend"):
(O="transition",pa="transitionend");F.onanimationend===W&&F.onwebkitanimationend!==W?(V="WebkitAnimation",qa="webkitAnimationEnd animationend"):(V="animation",qa="animationend");var ra=V+"Delay",sa=V+"Duration",ea=O+"Delay";F=O+"Duration";var Ma={transitionDuration:F,transitionDelay:ea,transitionProperty:O+"Property",animationDuration:sa,animationDelay:ra,animationIterationCount:V+"IterationCount"},Na={transitionDuration:F,transitionDelay:ea,animationDuration:sa,animationDelay:ra};t.module("ngAnimate",
[]).directive("ngAnimateChildren",[function(){return function(a,b,c){a=c.ngAnimateChildren;t.isString(a)&&0===a.length?b.data("$$ngAnimateChildren",!0):c.$observe("ngAnimateChildren",function(a){b.data("$$ngAnimateChildren","on"===a||"true"===a)})}}]).factory("$$rAFMutex",["$$rAF",function(a){return function(){var b=!1;a(function(){b=!0});return function(c){b?c():a(c)}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d.push([].concat(a));c()}function c(){if(d.length){for(var b=[],n=
0;n<d.length;n++){var h=d[n];h.shift()();h.length&&b.push(h)}d=b;e||a(function(){e||c()})}}var d=[],e;b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).factory("$$AnimateRunner",["$q","$$rAFMutex",function(a,b){function c(a){this.setHost(a);this._doneCallbacks=[];this._runInAnimationFrame=b();this._state=0}c.chain=function(a,b){function c(){if(n===a.length)b(!0);else a[n](function(a){!1===a?b(!1):(n++,c())})}var n=0;c()};c.all=function(a,b){function c(s){h=h&&s;++n===
a.length&&b(h)}var n=0,h=!0;u(a,function(a){a.done(c)})};c.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:H,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&
this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._runInAnimationFrame(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(u(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return c}]).provider("$$animateQueue",["$animateProvider",
function(a){function b(a,b,c,h){return d[a].some(function(a){return a(b,c,h)})}function c(a,b){a=a||{};var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var d=this.rules={skip:[],cancel:[],join:[]};d.join.push(function(a,b,d){return!b.structural&&c(b.options)});d.skip.push(function(a,b,d){return!b.structural&&!c(b.options)});d.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});d.skip.push(function(a,b,c){return c.structural&&!b.structural});d.cancel.push(function(a,
b,c){return c.structural&&b.structural});d.cancel.push(function(a,b,c){return 2===c.state&&b.structural});d.cancel.push(function(a,b,c){a=b.options;c=c.options;return a.addClass&&a.addClass===c.removeClass||a.removeClass&&a.removeClass===c.addClass});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite",function(d,s,n,h,k,D,A,Z,I){function w(a,b){var c=z(a),f=[],m=l[b];m&&u(m,function(a){a.node.contains(c)&&f.push(a.callback)});
return f}function B(a,b,c,f){d(function(){u(w(b,a),function(a){a(b,c,f)})})}function r(a,S,p){function d(b,c,f,p){B(c,a,f,p);b.progress(c,f,p)}function g(b){Da(a,p);ca(a,p);p.domOperation();l.complete(!b)}var P,E;if(a=Fa(a))P=z(a),E=a.parent();p=ia(p);var l=new A;if(!P)return g(),l;X(p.addClass)&&(p.addClass=p.addClass.join(" "));X(p.removeClass)&&(p.removeClass=p.removeClass.join(" "));p.from&&!na(p.from)&&(p.from=null);p.to&&!na(p.to)&&(p.to=null);var e=[P.className,p.addClass,p.removeClass].join(" ");
if(!v(e))return g(),l;var M=0<=["enter","move","leave"].indexOf(S),h=!x||L.get(P),e=!h&&m.get(P)||{},k=!!e.state;h||k&&1==e.state||(h=!ta(a,E,S));if(h)return g(),l;M&&K(a);h={structural:M,element:a,event:S,close:g,options:p,runner:l};if(k){if(b("skip",a,h,e)){if(2===e.state)return g(),l;R(a,e.options,p);return e.runner}if(b("cancel",a,h,e))2===e.state?e.runner.end():e.structural?e.close():R(a,h.options,e.options);else if(b("join",a,h,e))if(2===e.state)R(a,p,{});else return S=h.event=e.event,p=R(a,
e.options,h.options),l}else R(a,p,{});(k=h.structural)||(k="animate"===h.event&&0<Object.keys(h.options.to||{}).length||c(h.options));if(!k)return g(),C(a),l;M&&f(E);var r=(e.counter||0)+1;h.counter=r;ga(a,1,h);s.$$postDigest(function(){var b=m.get(P),v=!b,b=b||{},e=a.parent()||[],E=0<e.length&&("animate"===b.event||b.structural||c(b.options));if(v||b.counter!==r||!E){v&&(Da(a,p),ca(a,p));if(v||M&&b.event!==S)p.domOperation(),l.end();E||C(a)}else S=!b.structural&&c(b.options,!0)?"setClass":b.event,
b.structural&&f(e),ga(a,2),b=D(a,S,b.options),b.done(function(b){g(!b);(b=m.get(P))&&b.counter===r&&C(z(a));d(l,S,"close",{})}),l.setHost(b),d(l,S,"start",{})});return l}function K(a){a=z(a).querySelectorAll("[data-ng-animate]");u(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=m.get(a);switch(b){case 2:c.runner.end();case 1:c&&m.remove(a)}})}function C(a){a=z(a);a.removeAttribute("data-ng-animate");m.remove(a)}function E(a,b){return z(a)===z(b)}function f(a){a=z(a);do{if(!a||1!==
a.nodeType)break;var b=m.get(a);if(b){var f=a;!b.structural&&c(b.options)&&(2===b.state&&b.runner.end(),C(f))}a=a.parentNode}while(1)}function ta(a,b,c){var f=c=!1,d=!1,v;for((a=a.data("$ngAnimatePin"))&&(b=a);b&&b.length;){f||(f=E(b,n));a=b[0];if(1!==a.nodeType)break;var e=m.get(a)||{};d||(d=e.structural||L.get(a));if(Ka(v)||!0===v)a=b.data("$$ngAnimateChildren"),La(a)&&(v=a);if(d&&!1===v)break;f||(f=E(b,n),f||(a=b.data("$ngAnimatePin"))&&(b=a));c||(c=E(b,g));b=b.parent()}return(!d||v)&&f&&c}function ga(a,
b,c){c=c||{};c.state=b;a=z(a);a.setAttribute("data-ng-animate",b);c=(b=m.get(a))?ya(b,c):c;m.put(a,c)}var m=new k,L=new k,x=null,M=s.$watch(function(){return 0===Z.totalPendingRequests},function(a){a&&(M(),s.$$postDigest(function(){s.$$postDigest(function(){null===x&&(x=!0)})}))}),g=G(h[0].body),l={},P=a.classNameFilter(),v=P?function(a){return P.test(a)}:function(){return!0},Da=ha(I);return{on:function(a,b,c){b=ka(b);l[a]=l[a]||[];l[a].push({node:b,callback:c})},off:function(a,b,c){function f(a,
b,c){var d=ka(b);return a.filter(function(a){return!(a.node===d&&(!c||a.callback===c))})}var d=l[a];d&&(l[a]=1===arguments.length?null:f(d,b,c))},pin:function(a,b){ua(oa(a),"element","not an element");ua(oa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return r(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!x;else if(oa(a)){var f=z(a),d=L.get(f);1===c?b=!d:(b=!!b)?d&&L.remove(f):L.put(f,!0)}else b=x=!!a;return b}}}]}]).provider("$$animation",
["$animateProvider",function(a){function b(a){return a.data("$$animationRunner")}var c=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$rAFScheduler",function(a,e,s,n,h){var k=[],D=ha(a),A=0,Z=0,I=[];return function(w,B,r){function K(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];u(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function C(a){var b=[],c={};u(a,function(a,f){var d=z(a.element),
m=0<=["enter","move"].indexOf(a.event),d=a.structural?K(d):[];if(d.length){var g=m?"to":"from";u(d,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][g]={animationID:f,element:G(a)}})}else b.push(a)});var f={},d={};u(c,function(c,m){var g=c.from,e=c.to;if(g&&e){var l=a[g.animationID],h=a[e.animationID],x=g.animationID.toString();if(!d[x]){var B=d[x]={structural:!0,beforeStart:function(){l.beforeStart();h.beforeStart()},close:function(){l.close();h.close()},classes:E(l.classes,h.classes),
from:l,to:h,anchors:[]};B.classes.length?b.push(B):(b.push(l),b.push(h))}d[x].anchors.push({out:g.element,"in":e.element})}else g=g?g.animationID:e.animationID,e=g.toString(),f[e]||(f[e]=!0,b.push(a[g]))});return b}function E(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],f=0;f<a.length;f++){var d=a[f];if("ng-"!==d.substring(0,3))for(var g=0;g<b.length;g++)if(d===b[g]){c.push(d);break}}return c.join(" ")}function f(a){for(var b=c.length-1;0<=b;b--){var f=c[b];if(s.has(f)&&(f=s.get(f)(a)))return f}}
function ta(a,c){a.from&&a.to?(b(a.from.element).setHost(c),b(a.to.element).setHost(c)):b(a.element).setHost(c)}function ga(){var a=b(w);!a||"leave"===B&&r.$$domOperationFired||a.end()}function m(b){w.off("$destroy",ga);w.removeData("$$animationRunner");D(w,r);ca(w,r);r.domOperation();g&&a.removeClass(w,g);w.removeClass("ng-animate");x.complete(!b)}r=ia(r);var L=0<=["enter","move","leave"].indexOf(B),x=new n({end:function(){m()},cancel:function(){m(!0)}});if(!c.length)return m(),x;w.data("$$animationRunner",
x);var M=va(w.attr("class"),va(r.addClass,r.removeClass)),g=r.tempClasses;g&&(M+=" "+g,r.tempClasses=null);var l;L||(l=A,A+=1);k.push({element:w,classes:M,event:B,classBasedIndex:l,structural:L,options:r,beforeStart:function(){w.addClass("ng-animate");g&&a.addClass(w,g)},close:m});w.on("$destroy",ga);if(1<k.length)return x;e.$$postDigest(function(){Z=A;A=0;I.length=0;var a=[];u(k,function(c){b(c.element)&&a.push(c)});k.length=0;u(C(a),function(a){function c(){a.beforeStart();var d,g=a.close,e=a.anchors?
a.from.element||a.to.element:a.element;b(e)&&z(e).parentNode&&(e=f(a))&&(d=e.start);d?(d=d(),d.done(function(a){g(!a)}),ta(a,d)):g()}a.structural?c():(I.push({node:z(a.element),fn:c}),a.classBasedIndex===Z-1&&(I=I.sort(function(a,b){return b.node.contains(a.node)}).map(function(a){return a.fn}),h(I)))})});return x}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ba(),c=Ba();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$document","$sniffer","$$rAFScheduler",function(a,
e,s,n,h,k,D){function A(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++r))+"-"+a.getAttribute("class")+"-"+b}function Z(h,f,B,k){var m;0<b.count(B)&&(m=c.get(B),m||(f=ba(f,"-stagger"),e.addClass(h,f),m=za(a,h,k),m.animationDuration=Math.max(m.animationDuration,0),m.transitionDuration=Math.max(m.transitionDuration,0),e.removeClass(h,f),c.put(B,m)));return m||{}}function I(a){C.push(a);D.waitUntilQuiet(function(){b.flush();c.flush();for(var a=K.offsetWidth+1,d=0;d<
C.length;d++)C[d](a);C.length=0})}function w(c,f,e){f=b.get(e);f||(f=za(a,c,Ma),"infinite"===f.animationIterationCount&&(f.animationIterationCount=1));b.put(e,f);c=f;e=c.animationDelay;f=c.transitionDelay;c.maxDelay=e&&f?Math.max(e,f):e||f;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var B=ha(e),r=0,K=z(h).body,C=[];return function(a,c){function d(){m()}function h(){m(!0)}function m(b){if(!(K||C&&D)){K=!0;D=!1;e.removeClass(a,Y);e.removeClass(a,
W);ma(g,!1);ja(g,!1);u(l,function(a){g.style[a[0]]=""});B(a,c);ca(a,c);if(c.onDone)c.onDone();p&&p.complete(!b)}}function L(a){q.blockTransition&&ja(g,a);q.blockKeyframeAnimation&&ma(g,!!a)}function x(){p=new s({end:d,cancel:h});m();return{$$willAnimate:!1,start:function(){return p},end:d}}function M(){function b(){if(!K){L(!1);u(l,function(a){g.style[a[0]]=a[1]});B(a,c);e.addClass(a,W);if(q.recalculateTimingStyles){fa=g.className+" "+Y;$=A(g,fa);y=w(g,fa,$);Q=y.maxDelay;H=Math.max(Q,0);J=y.maxDuration;
if(0===J){m();return}q.hasTransitions=0<y.transitionDuration;q.hasAnimations=0<y.animationDuration}if(q.applyTransitionDelay||q.applyAnimationDelay){Q="boolean"!==typeof c.delay&&la(c.delay)?parseFloat(c.delay):Q;H=Math.max(Q,0);var k;q.applyTransitionDelay&&(y.transitionDelay=Q,k=[ea,Q+"s"],l.push(k),g.style[k[0]]=k[1]);q.applyAnimationDelay&&(y.animationDelay=Q,k=[ra,Q+"s"],l.push(k),g.style[k[0]]=k[1])}F=1E3*H;G=1E3*J;if(c.easing){var r=c.easing;q.hasTransitions&&(k=O+"TimingFunction",l.push([k,
r]),g.style[k]=r);q.hasAnimations&&(k=V+"TimingFunction",l.push([k,r]),g.style[k]=r)}y.transitionDuration&&p.push(pa);y.animationDuration&&p.push(qa);x=Date.now();a.on(p.join(" "),h);n(d,F+1.5*G);xa(a,c)}}function d(){m()}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-x,0)>=F&&b>=J&&(C=!0,m())}if(!K)if(g.parentNode){var x,p=[],k=function(a){if(C)D&&a&&(D=!1,m());else if(D=!a,y.animationDuration)if(a=
ma(g,D),D)l.push(a);else{var b=l,c=b.indexOf(a);0<=a&&b.splice(c,1)}},r=0<U&&(y.transitionDuration&&0===T.transitionDuration||y.animationDuration&&0===T.animationDuration)&&Math.max(T.animationDelay,T.transitionDelay);r?n(b,Math.floor(r*U*1E3),!1):b();t.resume=function(){k(!0)};t.pause=function(){k(!1)}}else m()}var g=z(a);if(!g||!g.parentNode)return x();c=ia(c);var l=[],r=a.attr("class"),v=Ea(c),K,D,C,p,t,H,F,J,G;if(0===c.duration||!k.animations&&!k.transitions)return x();var aa=c.event&&X(c.event)?
c.event.join(" "):c.event,R="",N="";aa&&c.structural?R=ba(aa,"ng-",!0):aa&&(R=aa);c.addClass&&(N+=ba(c.addClass,"-add"));c.removeClass&&(N.length&&(N+=" "),N+=ba(c.removeClass,"-remove"));c.applyClassesEarly&&N.length&&(B(a,c),N="");var Y=[R,N].join(" ").trim(),fa=r+" "+Y,W=ba(Y,"-active"),r=v.to&&0<Object.keys(v.to).length;if(!(0<(c.keyframeStyle||"").length||r||Y))return x();var $,T;0<c.stagger?(v=parseFloat(c.stagger),T={transitionDelay:v,animationDelay:v,transitionDuration:0,animationDuration:0}):
($=A(g,fa),T=Z(g,Y,$,Na));e.addClass(a,Y);c.transitionStyle&&(v=[O,c.transitionStyle],da(g,v),l.push(v));0<=c.duration&&(v=0<g.style[O].length,v=Aa(c.duration,v),da(g,v),l.push(v));c.keyframeStyle&&(v=[V,c.keyframeStyle],da(g,v),l.push(v));var U=T?0<=c.staggerIndex?c.staggerIndex:b.count($):0;(aa=0===U)&&ja(g,9999);var y=w(g,fa,$),Q=y.maxDelay;H=Math.max(Q,0);J=y.maxDuration;var q={};q.hasTransitions=0<y.transitionDuration;q.hasAnimations=0<y.animationDuration;q.hasTransitionAll=q.hasTransitions&&
"all"==y.transitionProperty;q.applyTransitionDuration=r&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=c.duration&&q.hasAnimations;q.applyTransitionDelay=la(c.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=la(c.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<N.length;if(q.applyTransitionDuration||q.applyAnimationDuration)J=c.duration?parseFloat(c.duration):J,q.applyTransitionDuration&&(q.hasTransitions=!0,y.transitionDuration=
J,v=0<g.style[O+"Property"].length,l.push(Aa(J,v))),q.applyAnimationDuration&&(q.hasAnimations=!0,y.animationDuration=J,l.push([sa,J+"s"]));if(0===J&&!q.recalculateTimingStyles)return x();null==c.duration&&0<y.transitionDuration&&(q.recalculateTimingStyles=q.recalculateTimingStyles||aa);F=1E3*H;G=1E3*J;c.skipBlocking||(q.blockTransition=0<y.transitionDuration,q.blockKeyframeAnimation=0<y.animationDuration&&0<T.animationDelay&&0===T.animationDuration);wa(a,c);q.blockTransition||ja(g,!1);L(J);return{$$willAnimate:!0,
end:d,start:function(){if(!K)return t={end:d,cancel:h,resume:null,pause:null},p=new s(t),I(M),p}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$document","$sniffer",function(a,c,d,e,s,n){function h(a){return a.replace(/\bng-\S+\b/g,"")}function k(a,b){U(a)&&(a=a.split(" "));U(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function D(c,
e,A){function D(a){var b={},c=z(a).getBoundingClientRect();u(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=I.scrollTop;break;case "left":d+=I.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function s(){var c=h(A.attr("class")||""),d=k(c,t),c=k(t,c),d=a(n,{to:D(A),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function f(){n.remove();e.removeClass("ng-animate-shim");A.removeClass("ng-animate-shim")}var n=G(z(e).cloneNode(!0)),
t=h(n.attr("class")||"");e.addClass("ng-animate-shim");A.addClass("ng-animate-shim");n.addClass("ng-anchor");w.append(n);var m;c=function(){var c=a(n,{addClass:"ng-anchor-out",delay:!0,from:D(e)});return c.$$willAnimate?c:null}();if(!c&&(m=s(),!m))return f();var L=c||m;return{start:function(){function a(){c&&c.end()}var b,c=L.start();c.done(function(){c=null;if(!m&&(m=s()))return c=m.start(),c.done(function(){c=null;f();b.complete()}),c;f();b.complete()});return b=new d({end:a,cancel:a})}}}function A(a,
b,c,e){var h=t(a),f=t(b),k=[];u(e,function(a){(a=D(c,a.out,a["in"]))&&k.push(a)});if(h||f||0!==k.length)return{start:function(){function a(){u(b,function(a){a.end()})}var b=[];h&&b.push(h.start());f&&b.push(f.start());u(k,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function t(c){var d=c.element,e=c.options||{};c.structural?(e.structural=e.applyClassesEarly=!0,e.event=c.event,"leave"===e.event&&(e.onDone=e.domOperation)):e.event=null;
c=a(d,e);return c.$$willAnimate?c:null}if(!n.animations&&!n.transitions)return H;var I=z(s).body;c=z(e);var w=G(I.parentNode===c?I:c);return function(a){return a.from&&a.to?A(a.from,a.to,a.classes,a.anchors):t(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$rAFMutex","$$jqLite",function(b,c,d,e){function s(c){c=X(c)?c:c.split(" ");for(var d=[],e={},A=0;A<c.length;A++){var n=c[A],s=a.$$registeredAnimations[n];s&&!e[n]&&(d.push(b.get(s)),e[n]=
!0)}return d}var n=ha(e);return function(a,b,d,e){function t(){e.domOperation();n(a,e)}function z(a,b,d,e,g){switch(d){case "animate":b=[b,e.from,e.to,g];break;case "setClass":b=[b,r,K,g];break;case "addClass":b=[b,r,g];break;case "removeClass":b=[b,K,g];break;default:b=[b,g]}b.push(e);if(a=a.apply(a,b))if(Ca(a.start)&&(a=a.start()),a instanceof c)a.done(g);else if(Ca(a))return a;return H}function w(a,b,d,e,g){var f=[];u(e,function(e){var h=e[g];h&&f.push(function(){var e,g,f=!1,l=function(a){f||
(f=!0,(g||H)(a),e.complete(!a))};e=new c({end:function(){l()},cancel:function(){l(!0)}});g=z(h,a,b,d,function(a){l(!1===a)});return e})});return f}function B(a,b,d,e,g){var f=w(a,b,d,e,g);if(0===f.length){var h,k;"beforeSetClass"===g?(h=w(a,"removeClass",d,e,"beforeRemoveClass"),k=w(a,"addClass",d,e,"beforeAddClass")):"setClass"===g&&(h=w(a,"removeClass",d,e,"removeClass"),k=w(a,"addClass",d,e,"addClass"));h&&(f=f.concat(h));k&&(f=f.concat(k))}if(0!==f.length)return function(a){var b=[];f.length&&
u(f,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){u(b,function(b){a?b.cancel():b.end()})}}}3===arguments.length&&na(d)&&(e=d,d=null);e=ia(e);d||(d=a.attr("class")||"",e.addClass&&(d+=" "+e.addClass),e.removeClass&&(d+=" "+e.removeClass));var r=e.addClass,K=e.removeClass,C=s(d),E,f;if(C.length){var F,G;"leave"==b?(G="leave",F="afterLeave"):(G="before"+b.charAt(0).toUpperCase()+b.substr(1),F=b);"enter"!==b&&"move"!==b&&(E=B(a,b,e,C,G));f=B(a,b,e,C,F)}if(E||f)return{start:function(){function b(c){n=
!0;t();ca(a,e);g.complete(c)}var d,k=[];E&&k.push(function(a){d=E(a)});k.length?k.push(function(a){t();a(!0)}):t();f&&k.push(function(a){d=f(a)});var n=!1,g=new c({end:function(){n||((d||H)(void 0),b(void 0))},cancel:function(){n||((d||H)(!0),b(!0))}});c.chain(k,b);return g}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}
return function(a){if(a.from&&a.to){var b=d(a.from),n=d(a.to);if(b||n)return{start:function(){function a(){return function(){u(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());n&&d.push(n.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);

},{}],"/Library/WebServer/Documents/ionic-googlemaps/www/bower_components/ionic-advanced-carousel/src/advanced-carousel.js":[function(require,module,exports){
(function () {
    'use strict';

    angular
        .module('aCarousel', [])
        .directive('aCarousel', advancedCarousel);

    advancedCarousel.$inject = ['$compile', '$timeout', '$ionicScrollDelegate'];
    function advancedCarousel($compile, $timeout, $ionicScrollDelegate) {
        return {
            restrict        : 'E',
            replace         : true,
            template        : '',
            scope           : {},
            link            : linkFunc,
            controller      : Controller,
            controllerAs    : 'vm',
            bindToController: {
                itemDirective  : '@',
                carouselOptions: '=',
                arrayProvider  : '=',
                onSelect       : '&'
            }
        };

        /////////

        function linkFunc(scope, el, attr, ctrl) {
            ctrl.el = el;

            ctrl.options.trackBy    = typeof attr.trackBy !== 'undefined' ? attr.trackBy : '$index';
            ctrl.options.trackBystr = ctrl.options.trackBy === '$index' ? '$index' : 'item.' + ctrl.options.trackBy;

            var animateIn = ctrl.options.animateIn ? ' animateIn' : '';

            // Dynamic directive html
            // ----------------------
            var html = '<div class="a-carousel">';

            if (ctrl.options.pullRefresh.active) {
                html += '<div class="spinner-wrapper" ng-if="vm.options.pullRefresh.loading"><ion-spinner icon="android"></ion-spinner></div>';
                html += '<span class="pullrefresh-indicator">' +
                    '<svg viewBox="0 0 64 64"><g>' +
                    '<circle stroke-width="6" stroke-dasharray="135.26261239144287" stroke-dashoffset="16.51371474556214" ' +
                    'r="26" cx="32" cy="32" fill="none" transform="scale(1,1) translate(0,0) rotate(0,32,32)"></circle></g>' +
                    '</svg>' +
                    '</span>';
            }

            html += '<ion-scroll ';

            if (ctrl.options.pullRefresh.active) {
                html += 'on-scroll="vm.onScroll()" ';
            }

            html += 'scrollbar-x="false" delegate-handle="' + ctrl.options.carouselId + '" ' +
                'zooming="false" direction="x" overflow-scroll="false" has-bouncing="true">' +
                '<nav style="visibility:hidden;">' +
                '<ul> <li ' +
                'ng-repeat="item in vm.arrayProvider track by ' +
                ctrl.options.trackBystr + '"' +
                'class="carousel-item' + animateIn + '"' +
                'ng-class="{\'active\':vm.itemActive === item}">' +
                createItemDirective() +
                '</li>' +
                '</ul></nav></ion-scroll></div>';

            // Compile dynamic template
            html = $compile(html)(scope);
            el.append(html);

            /**
             * $timeout so ng-repeat is finished in order to calculate width of carousel
             */
            $timeout(function () {
                if (ctrl.arrayProvider && ctrl.arrayProvider.length > 0) {
                    ctrl.initCarousel();
                }

                allowVerticalScroll();
            }, 0);

            function createItemDirective() {
                var template = ctrl.options.template !== null ? 'template="' + ctrl.options.template + '"' : '';
                ctrl.itemDirective = typeof ctrl.itemDirective === 'undefined' ? 'carousel-generic-item' : ctrl.itemDirective;
                var directive = '<' + ctrl.itemDirective + ' ng-model="item" ' + template +
                    'on-select="vm.selectItem(item)" carousel-options="menuCarousel.options" ';
                directive += '></' + ctrl.itemDirective + '>';

                return directive;
            }

            // this method allows to scroll the page below the carousel
            function allowVerticalScroll() {
                var sv        = $ionicScrollDelegate.$getByHandle(ctrl.options.carouselId).getScrollView();
                var container = sv.__container;

                var originaltouchStart = sv.touchStart;
                var originaltouchMove  = sv.touchMove;

                container.removeEventListener('touchstart', sv.touchStart);
                document.removeEventListener('touchmove', sv.touchMove);

                sv.touchStart = function (e) {
                    e.preventDefault = function () {
                    };
                    originaltouchStart.apply(sv, [e]);
                };

                sv.touchMove = function (e) {
                    e.preventDefault = function () {
                    };
                    originaltouchMove.apply(sv, [e]);
                };

                container.addEventListener('touchstart', sv.touchStart, false);
                document.addEventListener('touchmove', sv.touchMove, false);
            }
        }
    }

    Controller.$inject = ['$scope', '$element', '$timeout', '$window', '$ionicScrollDelegate'];
    function Controller($scope, $element, $timeout, $window, $ionicScrollDelegate) {
        var vm = this;

        vm.options = {
            showScroll    : false,
            carouselId    : 'my-carousel',
            template      : null,
            align         : 'left',
            centerOnSelect: true,
            widthItem     : 0,
            heightItem    : 0,
            trackBy       : '$index',
            selectFirst   : true,
            selectAtStart : {
                property: null,
                value   : null,
                index   : -1
            },
            pullRefresh   : {
                active  : false,
                callBack: angular.noop,
                loading:false
            },
            animateIn     : false
        };

        // API
        vm.initCarousel = initCarousel;
        vm.selectItem   = selectItem;
        vm.onScroll     = onScroll;

        activate();

        //////////

        function activate() {
            angular.extend(vm.options, vm.carouselOptions);

            $scope.$on('a-carousel.arrayupdated', onArrayProviderUpdated);
            $scope.$on('a-carousel.desactivateItem', desactiveItemSelected);

            if (vm.options.pullRefresh.active) {
                $scope.$on('a-carousel.pullrefresh.done', onEndRefresh);
            }

            //////////
            /**
             *
             * @param e
             * @param {{carouselId:string}} param
             */
            function onArrayProviderUpdated(e, param) {
                var carouselId;
                if (typeof param === 'object') {
                    carouselId = param.carouselId;
                    angular.extend(vm.options, param);
                } else {
                    carouselId = param;
                }

                if (carouselId === vm.options.carouselId) {
                    $timeout(vm.initCarousel, 0);
                }
            }

            /**
             *
             * @param e
             * @param {{idContains:string, except:string}} param
             */
            function desactiveItemSelected(e, param) {
                var idContains = param.idContains;
                var except     = param.except;

                if (vm.options.carouselId.indexOf(idContains) >= 0 && vm.options.carouselId !== except) {
                    vm.itemActive = null;
                }
            }
        }

        function initCarousel() {
            var carouselItems = $element.find('li');
            var totalItems    = carouselItems.length;
            var numItems      = angular.element(carouselItems).length;
            var widthCarousel = 0;

            var marginLeft  = 0;
            var marginRight = 0;

            var index              = 0;
            var numTimesDomChecked = 0;
            var numRetryBuild           = 15;

            vm.itemActive = null;

            if (numItems > 0) {
                $timeout(function () {
                    checkDOM();
                }, 50);
            } else {
                throw Error('Trying to create a carousel from an empty array', vm.options);
            }

            function checkDOM() {
                // Checking if carousel items are in DOM
                var w = parseInt(carouselItems[totalItems - 1].offsetWidth);
                var h = parseInt(carouselItems[totalItems - 1].offsetHeight);

                if (w > 0 && h > 0) {
                    processNow();
                } else {
                    console.log('[INFO] Creating Carousel but DOM not ready yet...');

                    if (numTimesDomChecked < numRetryBuild) {
                        $timeout(function () {
                            checkDOM();
                        }, 50);
                    } else {
                        console.log('[ERROR] Size item Carousel could not be determined', vm.options.carouselId);
                    }

                    numTimesDomChecked++;
                }
            }

            function processNow() {
                var selectItemAtStart = vm.options.selectAtStart.property !== null;
                var modelItem;

                angular.forEach(carouselItems, function (item) {
                    modelItem            = vm.arrayProvider[index];
                    modelItem.carouselId = vm.options.carouselId;

                    widthCarousel += item.offsetWidth;
                    vm.options.widthItem  = Math.max(item.offsetWidth, vm.options.widthItem);
                    vm.options.heightItem = Math.max(item.offsetHeight, vm.options.heightItem);

                    vm.arrayProvider[index].widthItem = item.offsetWidth;

                    // As we can select at start an item with a property of certain value
                    // we check here its index in the Array
                    if (selectItemAtStart && vm.options.selectAtStart.index === -1) {
                        if (modelItem[vm.options.selectAtStart.property] === vm.options.selectAtStart.value) {
                            vm.options.selectAtStart.index = index;
                        }
                    }

                    index += 1;
                });

                if (vm.options.centerOnSelect) {
                    var centerX   = $window.innerWidth * 0.5;
                    var firstItem = carouselItems[0];
                    var lastItem  = carouselItems[numItems - 1];

                    marginLeft  = centerX - firstItem.offsetWidth * 0.5;
                    marginRight = centerX - lastItem.offsetWidth * 0.5;

                    // we add margin on both side to be able to center the first and last item
                    widthCarousel += marginLeft + marginRight;

                    vm.options.maxScroll = $window.innerWidth - widthCarousel;

                    // position the carousel on first item
                    if (vm.options.align === 'right') {
                        $ionicScrollDelegate
                            .$getByHandle(vm.options.carouselId)
                            .scrollTo(vm.options.maxScroll * -1, 0, false);
                    } else if (vm.options.align === 'center') {
                        $ionicScrollDelegate
                            .$getByHandle(vm.options.carouselId)
                            .scrollTo(vm.options.maxScroll * -0.5, 0, false);
                    } else {
                        $ionicScrollDelegate
                            .$getByHandle(vm.options.carouselId)
                            .scrollTo(0, 0, true);
                    }

                } else {
                    widthCarousel += 4; // + 4 to avoid line break when text going bold
                    vm.options.maxScroll = $window.innerWidth - widthCarousel;
                }

                vm.options.widthCarousel = widthCarousel;

                // Set Active item at start
                if (!selectItemAtStart && vm.options.selectFirst) {
                    if (vm.options.align === 'right') {
                        setItemActive(vm.arrayProvider[numItems - 1]);
                    } else {
                        setItemActive(vm.arrayProvider[0]);
                    }
                } else {
                    if (selectItemAtStart && vm.options.selectAtStart.index !== -1) {
                        selectItem(vm.arrayProvider[vm.options.selectAtStart.index]);
                    }
                }

                // Apply inline-css to carousel according to items width and height
                vm.navElem = $element.find('nav');
                vm.navElem.css({
                    'width'       : widthCarousel + 'px',
                    'height'      : vm.options.heightItem + 'px',
                    'visibility'  : 'visible',
                    'padding-left': marginLeft + 'px'
                });

                // Cache pull refresh DOM elements (both wrapper and svg elem)
                if (vm.options.pullRefresh.active) {
                    vm.pullrefreshIndicator = angular.element(document.querySelector('.a-carousel .pullrefresh-indicator'));
                    vm.svgElem              = $element.find('g');
                }
            }
        }

        function selectItem(item) {
            var scrollPos, i;

            setItemActive(item);

            // Center carousel
            if (vm.options.centerOnSelect) {
                var index = getIndexFromId(item);

                scrollPos = 0;

                if (index === 0) {
                    scrollPos = 0;
                } else {
                    for (i = 0; i < index; i++) {
                        scrollPos += (vm.arrayProvider[i].widthItem + vm.arrayProvider[i + 1].widthItem) * 0.5;
                    }
                }

                $ionicScrollDelegate.$getByHandle(vm.options.carouselId).scrollTo(scrollPos, 0, true);
            }
        }

        /**
         * Only for when pull-refresh active is set
         */
        function onScroll() {
            var pct;
            var pos             = $ionicScrollDelegate.$getByHandle(vm.options.carouselId).getScrollPosition().left;
            var pctPull         = 0;
            var pctRotIndicator = 0;

            if (vm.options.maxScroll < 0) {
                pct = pos / vm.options.maxScroll * -1;
            } else {
                // If NO maxScroll -> probably means that there are only 1 or 2 items (no need to scroll)
                // we fake a percentage
                pct = pos / 10;
            }

            if (pct > 1) {
                var pixelPull = pos - vm.options.maxScroll * -1;
                pctPull       = pixelPull / $window.innerWidth;
                vm.pullrefreshIndicator.css({'transform': 'translateX(' + pctRotIndicator * -56 + 'px)'});
            }

            if (pctPull > 0.25 && pos > 0) {
                vm.pullrefreshIndicator.css({'transform': 'translateX(0px)', display: 'none'});
                onPullRefresh();
            } else {
                pctRotIndicator = pctPull / 0.2;
                vm.svgElem[0].setAttribute('transform', 'rotate(' + pctRotIndicator * 360 + ' 32 32)');
                vm.pullrefreshIndicator.css({'transform': 'translateX(' + pctRotIndicator * -56 + 'px)'});
            }
        }

        // ----------
        // PRIVATE
        // ----------
        function setItemActive(item) {
            vm.itemActive = item;

            // Callback on select
            vm.onSelect.call(null, {item: item});

            $scope.$broadcast('a-carousel.itemselected', item);
        }

        function getIndexFromId(item) {
            for (var i in vm.arrayProvider) {
                if (vm.arrayProvider[i] === item) {
                    return i;
                }
            }
        }

        // Pull Refresh
        function onPullRefresh() {
            if (!vm.options.pullRefresh.loading) {
                $scope.$apply(function () {
                    vm.options.pullRefresh.loading = true;
                });

                $ionicScrollDelegate.$getByHandle(vm.options.carouselId).freezeScroll(true);

                // Add some width to the nav to make some room for the spinner
                vm.navElem.css({'width': vm.options.widthCarousel + 45 + 'px'});
                $ionicScrollDelegate.$getByHandle(vm.options.carouselId).resize();

                vm.options.pullRefresh.callBack();
            }

        }

        function onEndRefresh() {
            vm.options.pullRefresh.loading = false;

            vm.navElem.css({'width': vm.options.widthCarousel + 'px'});
            $ionicScrollDelegate.$getByHandle(vm.options.carouselId).resize();

            $ionicScrollDelegate.$getByHandle(vm.options.carouselId).freezeScroll(false);
            vm.pullrefreshIndicator.css({'transform': 'translateX(0px)', display: 'block'});
        }
    }
})();

},{}],"/Library/WebServer/Documents/ionic-googlemaps/www/bower_components/ng-knob/dist/ng-knob.min.js":[function(require,module,exports){
/*******************************************************
 * Name:          ng-knob
 * Description:   Angular.js Knob directive
 * Version:       0.1.3
 * Homepage:      https://radmie.github.io/ng-knob
 * Licence:       MIT
 *******************************************************/
"use strict";!function(){var ui={},Knob=function(element,value,options){this.element=element,this.value=value,this.options=options,this.inDrag=!1};Knob.prototype.valueToRadians=function(value,valueEnd,angleEnd,angleStart,valueStart){return valueEnd=valueEnd||100,valueStart=valueStart||0,angleEnd=angleEnd||360,angleStart=angleStart||0,Math.PI/180*((value-valueStart)*(angleEnd-angleStart)/(valueEnd-valueStart)+angleStart)},Knob.prototype.radiansToValue=function(radians,valueEnd,valueStart,angleEnd,angleStart){return valueEnd=valueEnd||100,valueStart=valueStart||0,angleEnd=angleEnd||360,angleStart=angleStart||0,(180/Math.PI*radians-angleStart)*(valueEnd-valueStart)/(angleEnd-angleStart)+valueStart},Knob.prototype.createArc=function(innerRadius,outerRadius,startAngle,endAngle,cornerRadius){var arc=d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius).startAngle(startAngle).endAngle(endAngle).cornerRadius(cornerRadius);return arc},Knob.prototype.drawArc=function(svg,arc,label,style,click,drag){var elem=svg.append("path").attr("id",label).attr("d",arc).style(style).attr("transform","translate("+this.options.size/2+", "+this.options.size/2+")");return this.options.readOnly===!1&&(click&&elem.on("click",click),drag&&elem.call(drag)),elem},Knob.prototype.createArcs=function(){var outerRadius=parseInt(this.options.size/2,10),startAngle=this.valueToRadians(this.options.startAngle,360),endAngle=this.valueToRadians(this.options.endAngle,360);this.options.scale.enabled&&(outerRadius-=this.options.scale.width+this.options.scale.spaceWidth);var diff,trackInnerRadius=outerRadius-this.options.trackWidth,changeInnerRadius=outerRadius-this.options.barWidth,valueInnerRadius=outerRadius-this.options.barWidth,interactInnerRadius=1,trackOuterRadius=outerRadius,changeOuterRadius=outerRadius,valueOuterRadius=outerRadius,interactOuterRadius=outerRadius;this.options.barWidth>this.options.trackWidth?(diff=(this.options.barWidth-this.options.trackWidth)/2,trackInnerRadius-=diff,trackOuterRadius-=diff):this.options.barWidth<this.options.trackWidth&&(diff=(this.options.trackWidth-this.options.barWidth)/2,changeOuterRadius-=diff,valueOuterRadius-=diff,changeInnerRadius-=diff,valueInnerRadius-=diff),this.options.bgColor&&(this.bgArc=this.createArc(0,outerRadius,startAngle,endAngle)),"tron"===this.options.skin.type&&(trackOuterRadius=trackOuterRadius-this.options.skin.width-this.options.skin.spaceWidth,changeOuterRadius=changeOuterRadius-this.options.skin.width-this.options.skin.spaceWidth,valueOuterRadius=valueOuterRadius-this.options.skin.width-this.options.skin.spaceWidth,interactOuterRadius=interactOuterRadius-this.options.skin.width-this.options.skin.spaceWidth,this.hoopArc=this.createArc(outerRadius-this.options.skin.width,outerRadius,startAngle,endAngle)),this.trackArc=this.createArc(trackInnerRadius,trackOuterRadius,startAngle,endAngle),this.changeArc=this.createArc(changeInnerRadius,changeOuterRadius,startAngle,startAngle,this.options.barCap),this.valueArc=this.createArc(valueInnerRadius,valueOuterRadius,startAngle,startAngle,this.options.barCap),this.interactArc=this.createArc(interactInnerRadius,interactOuterRadius,startAngle,endAngle)},Knob.prototype.drawArcs=function(clickInteraction,dragBehavior){var svg=d3.select(this.element).append("svg").attr("width",this.options.size).attr("height",this.options.size);if(this.options.bgColor&&this.drawArc(svg,this.bgArc,"bgArc",{fill:this.options.bgColor}),this.options.displayInput){var fontSize=.2*this.options.size+"px";"auto"!==this.options.fontSize&&(fontSize=this.options.fontSize+"px"),this.options.step<1&&(this.value=this.value.toFixed(1));var v=this.value;"function"==typeof this.options.inputFormatter&&(v=this.options.inputFormatter(v)),svg.append("text").attr("id","text").attr("text-anchor","middle").attr("font-size",fontSize).style("fill",this.options.textColor).text(v+this.options.unit||"").attr("transform","translate("+this.options.size/2+", "+(this.options.size/2+.06*this.options.size)+")"),this.options.subText.enabled&&(fontSize=.07*this.options.size+"px","auto"!==this.options.subText.font&&(fontSize=this.options.subText.font+"px"),svg.append("text").attr("class","sub-text").attr("text-anchor","middle").attr("font-size",fontSize).style("fill",this.options.subText.color).text(this.options.subText.text).attr("transform","translate("+this.options.size/2+", "+(this.options.size/2+.15*this.options.size)+")"))}if(this.options.scale.enabled){var radius,quantity,data,count=0,angle=0,startRadians=this.valueToRadians(this.options.min,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min),endRadians=this.valueToRadians(this.options.max,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min),diff=0;if(0===this.options.startAngle&&360===this.options.endAngle||(diff=1),"dots"===this.options.scale.type){var width=this.options.scale.width;radius=this.options.size/2-width,quantity=this.options.scale.quantity;var offset=radius+this.options.scale.width;data=d3.range(quantity).map(function(){return angle=count*(endRadians-startRadians)-Math.PI/2+startRadians,count+=1/(quantity-diff),{cx:offset+Math.cos(angle)*radius,cy:offset+Math.sin(angle)*radius,r:width}}),svg.selectAll("circle").data(data).enter().append("circle").attr({r:function(d){return d.r},cx:function(d){return d.cx},cy:function(d){return d.cy},fill:this.options.scale.color})}else if("lines"===this.options.scale.type){var height=this.options.scale.height;radius=this.options.size/2,quantity=this.options.scale.quantity,data=d3.range(quantity).map(function(){return angle=count*(endRadians-startRadians)-Math.PI/2+startRadians,count+=1/(quantity-diff),{x1:radius+Math.cos(angle)*radius,y1:radius+Math.sin(angle)*radius,x2:radius+Math.cos(angle)*(radius-height),y2:radius+Math.sin(angle)*(radius-height)}}),svg.selectAll("line").data(data).enter().append("line").attr({x1:function(d){return d.x1},y1:function(d){return d.y1},x2:function(d){return d.x2},y2:function(d){return d.y2},"stroke-width":this.options.scale.width,stroke:this.options.scale.color})}}"tron"===this.options.skin.type&&this.drawArc(svg,this.hoopArc,"hoopArc",{fill:this.options.skin.color}),this.drawArc(svg,this.trackArc,"trackArc",{fill:this.options.trackColor}),this.options.displayPrevious?this.changeElem=this.drawArc(svg,this.changeArc,"changeArc",{fill:this.options.prevBarColor}):this.changeElem=this.drawArc(svg,this.changeArc,"changeArc",{"fill-opacity":0}),this.valueElem=this.drawArc(svg,this.valueArc,"valueArc",{fill:this.options.barColor});var cursor="pointer";this.options.readOnly&&(cursor="default"),this.drawArc(svg,this.interactArc,"interactArc",{"fill-opacity":0,cursor:cursor},clickInteraction,dragBehavior)},Knob.prototype.draw=function(update){function dragInteraction(){that.inDrag=!0;var x=d3.event.x-that.options.size/2,y=d3.event.y-that.options.size/2;interaction(x,y,!1)}function clickInteraction(){that.inDrag=!1;var coords=d3.mouse(this.parentNode),x=coords[0]-that.options.size/2,y=coords[1]-that.options.size/2;interaction(x,y,!0)}function interaction(x,y,isFinal){var radians,delta,arc=Math.atan(y/x)/(Math.PI/180);if(x>=0&&0>=y||x>=0&&y>=0?delta=90:(delta=270,that.options.startAngle<0&&(delta=-90)),radians=(delta+arc)*(Math.PI/180),that.value=that.radiansToValue(radians,that.options.max,that.options.min,that.options.endAngle,that.options.startAngle),that.value>=that.options.min&&that.value<=that.options.max&&(that.value=Math.round(~~((that.value<0?-.5:.5)+that.value/that.options.step)*that.options.step*100)/100,that.options.step<1&&(that.value=that.value.toFixed(1)),update(that.value),that.valueArc.endAngle(that.valueToRadians(that.value,that.options.max,that.options.endAngle,that.options.startAngle,that.options.min)),that.valueElem.attr("d",that.valueArc),isFinal&&(that.changeArc.endAngle(that.valueToRadians(that.value,that.options.max,that.options.endAngle,that.options.startAngle,that.options.min)),that.changeElem.attr("d",that.changeArc)),that.options.displayInput)){var v=that.value;"function"==typeof that.options.inputFormatter&&(v=that.options.inputFormatter(v)),d3.select(that.element).select("#text").text(v+that.options.unit||"")}}d3.select(this.element).select("svg").remove();var that=this;that.createArcs();var dragBehavior=d3.behavior.drag().on("drag",dragInteraction).on("dragend",clickInteraction);that.drawArcs(clickInteraction,dragBehavior),that.options.animate.enabled?that.valueElem.transition().ease(that.options.animate.ease).duration(that.options.animate.duration).tween("",function(){var i=d3.interpolate(that.valueToRadians(that.options.startAngle,360),that.valueToRadians(that.value,that.options.max,that.options.endAngle,that.options.startAngle,that.options.min));return function(t){var val=i(t);that.valueElem.attr("d",that.valueArc.endAngle(val)),that.changeElem.attr("d",that.changeArc.endAngle(val))}}):(that.changeArc.endAngle(this.valueToRadians(this.value,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min)),that.changeElem.attr("d",that.changeArc),that.valueArc.endAngle(this.valueToRadians(this.value,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min)),that.valueElem.attr("d",that.valueArc))},Knob.prototype.setValue=function(newValue){if(!this.inDrag&&this.value>=this.options.min&&this.value<=this.options.max){var radians=this.valueToRadians(newValue,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min);if(this.value=Math.round(~~((0>newValue?-.5:.5)+newValue/this.options.step)*this.options.step*100)/100,this.options.step<1&&(this.value=this.value.toFixed(1)),this.changeArc.endAngle(radians),d3.select(this.element).select("#changeArc").attr("d",this.changeArc),this.valueArc.endAngle(radians),d3.select(this.element).select("#valueArc").attr("d",this.valueArc),this.options.displayInput){var v=this.value;"function"==typeof this.options.inputFormatter&&(v=this.options.inputFormatter(v)),d3.select(this.element).select("#text").text(v+this.options.unit||"")}}},ui.Knob=Knob,ui.knobDirective=function(){return{restrict:"E",scope:{value:"=",options:"="},link:function(scope,element){scope.value=scope.value||0;var defaultOptions={skin:{type:"simple",width:10,color:"rgba(255,0,0,.5)",spaceWidth:5},animate:{enabled:!0,duration:1e3,ease:"bounce"},size:200,startAngle:0,endAngle:360,unit:"",displayInput:!0,inputFormatter:function(v){return v},readOnly:!1,trackWidth:50,barWidth:50,trackColor:"rgba(0,0,0,0)",barColor:"rgba(255,0,0,.5)",prevBarColor:"rgba(0,0,0,0)",textColor:"#222",barCap:0,fontSize:"auto",subText:{enabled:!1,text:"",color:"gray",font:"auto"},bgColor:"",scale:{enabled:!1,type:"lines",color:"gray",width:4,quantity:20,height:10,spaceWidth:15},step:1,displayPrevious:!1,min:0,max:100,dynamicOptions:!1};scope.options=angular.merge(defaultOptions,scope.options);var knob=new ui.Knob(element[0],scope.value,scope.options);if(scope.$watch("value",function(newValue,oldValue){null===newValue&&"undefined"==typeof newValue||"undefined"==typeof oldValue||newValue===oldValue||knob.setValue(newValue)}),scope.options.dynamicOptions){var isFirstWatchOnOptions=!0;scope.$watch("options",function(){if(isFirstWatchOnOptions)isFirstWatchOnOptions=!1;else{var newOptions=angular.merge(defaultOptions,scope.options);knob=new ui.Knob(element[0],scope.value,newOptions),drawKnob()}},!0)}var drawKnob=function(){knob.draw(function(value){scope.$apply(function(){scope.value=value})})};drawKnob()}}},angular.module("ui.knob",[]).directive("uiKnob",ui.knobDirective)}();

},{}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/app-main.js":[function(require,module,exports){
'use strict';

// angular modules
// require('angular-module-sanitize');
// require('./templates');

require('./controllers/_index');
require('./services/_index');
require('./models/_index');
require('./directives/_index');

require('../bower_components/ng-knob/dist/ng-knob.min');
require('../bower_components/angular-animate/angular-animate.min');
require('../bower_components/ionic-advanced-carousel/src/advanced-carousel');



// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ionic',
    'app.controllers',
    'app.services',
    'app.models',
    'app.directives',
    'ui.router',
    'ui.knob',
    'aCarousel',
    'ngAnimate'
    // 'templates',
    // 'ngSanitize',
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular.module('app').constant('AppSettings', require('./constants.development'));

  angular.module('app').config(require('./on_config'));

  angular.module('app').run(require('./on_run'));


  setTimeout(function() {
    angular.bootstrap(document, ['app']);   
  }, (1000));
  

});

},{"../bower_components/angular-animate/angular-animate.min":"/Library/WebServer/Documents/ionic-googlemaps/www/bower_components/angular-animate/angular-animate.min.js","../bower_components/ionic-advanced-carousel/src/advanced-carousel":"/Library/WebServer/Documents/ionic-googlemaps/www/bower_components/ionic-advanced-carousel/src/advanced-carousel.js","../bower_components/ng-knob/dist/ng-knob.min":"/Library/WebServer/Documents/ionic-googlemaps/www/bower_components/ng-knob/dist/ng-knob.min.js","./constants.development":"/Library/WebServer/Documents/ionic-googlemaps/www/js/constants.development.js","./controllers/_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js","./directives/_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/directives/_index.js","./models/_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/_index.js","./on_config":"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_config.js","./on_run":"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_run.js","./services/_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/constants.development.js":[function(require,module,exports){
'use strict';

var AppSettings = {
  yocalAPI:{
    // base: 'http://yoendpoint4-wbbs.rhcloud.com/api/v1/yokal/data/'
    base: 'http://localhost:8100/api/v1/yokal/data/'
  },

  GMAP_DEFAULT:{
  	RADIUS: 800,
  	ZOOM:   14
  }
};

module.exports = AppSettings;

},{}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/AppCtrl.js":[function(require,module,exports){
'use strict';

AppCtrl.$inject = ["$log", "$rootScope", "$scope", "$ionicModal", "$timeout", "coordinates", "AppSettings"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function AppCtrl($log, $rootScope, $scope, $ionicModal, $timeout, coordinates, AppSettings) {

  $log = $log.getInstance('AppCtrl');

  var vm = this;
  // set curent position to rootScope to make globally available 
  $rootScope.currentPosition = coordinates;
  

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  

};

controllersModule.controller('AppCtrl', AppCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/BrowseCtrl.js":[function(require,module,exports){
'use strict';

BrowseCtrl.$inject = ["$scope", "$rootScope", "$q", "$http", "$log", "$filter", "$timeout", "LocationsService", "$ionicLoading", "$ionicSlideBoxDelegate", "AppSettings"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function BrowseCtrl($scope, $rootScope, $q, $http, $log, $filter, $timeout, LocationsService,  $ionicLoading,  $ionicSlideBoxDelegate, AppSettings) {
    $log = $log.getInstance('BrowseCtrl');

 	// ViewModel
  	var vm = this;
    vm.radius = AppSettings.GMAP_RADIUS;
    $scope.radius = AppSettings.GMAP_RADIUS;
    $scope.CurrentCoords =  $rootScope.currentPosition;

    $scope.locations =[];
    $scope.locations_groups =[];
    $scope.locations_loaded = 0; 
    $scope.carousels = [];

    $ionicLoading.show({
        template: "Finding Rad Spots ...",
        backdrop: true
    });

    $scope.carouselOptions = {
        template      : '../templates/locations-carousel.item.html', // templateUrl in case you don't need to pass a directive but just a html view
        align         : 'left', // alignement of the carousel
        selectFirst   : true,
        centerOnSelect: false, // center carousel when an item is selected
    };

    $scope.onSelectCarousel = function(item) {
        var cat = $scope.get_category_slug(item.catagorylevel1);
        $log.log('Carousel '+cat+' item selected:{name}', item);
        $scope.carousels[cat].itemSelected = item;
    };

    $scope.randoExpenseWidth = function() {
      return (Math.floor(Math.random() * 10)+1);  
    };
    
    $scope.get_category_slug = function (cat_name) {
        return cat_name.split(',').map(function(cat) { return cat.toLowerCase().trim(); }).join('-');
    }

    LocationsService.all()
                    .then(function(data){
                        
                        $scope.locations = data;

                        // group locations by category
                        // set travelTime for each location
                        // set carouselOptions for each category
                        $scope.locations_groups = _.chain(data)
                                        .groupBy("catagorylevel1")
                                        .map(function(locations, cat, array) {

                                            locations.map(function(location) {
                                                location.setTravelTime().then(function() {
                                                    $scope.locations_loaded++;
                                                });
                                            });

                                            return {
                                                category: cat,
                                                category_slug: $scope.get_category_slug(cat),
                                                locations: locations
                                            };
                                        })
                                        .map(function(category_obj) {
                                            $scope.carousels[category_obj.category_slug] = angular.extend({}, {carouselID: 'locations-carousel-'+category_obj.category_slug, itemSelected:{}}, $scope.carouselOptions);
                                            return category_obj;
                                        })
                                        .value();

                        


                        $scope.$watch('locations_loaded',function(new_val) {
                            if(new_val == data.length){

                                // sort location groups alpahbetically 
                                // sort group locations by travelTime.value
                                $scope.locations_groups_sorted = _.chain($scope.locations_groups)
                                                                  .map(function(group) {
                                                                      var sorted_locations = $filter('orderBy')(group.locations, 'travelTime.value');
                                                                      return angular.extend({},group, {locations:sorted_locations} );
                                                                  })
                                                                  .sortBy('category')
                                                                  .value();
                                                          
                                $ionicLoading.hide();      
                            }
                        })
                        

   	                });



};


controllersModule.controller('BrowseCtrl', BrowseCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/ConnectCtrl.js":[function(require,module,exports){
'use strict';

ConnectCtrl.$inject = ["$log", "$rootScope", "$scope", "AppSettings"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function ConnectCtrl($log, $rootScope, $scope, AppSettings) {

  $log = $log.getInstance('ConnectCtrl');

  var vm = this;

};

controllersModule.controller('ConnectCtrl', ConnectCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/LoginCtrl.js":[function(require,module,exports){
'use strict';

LoginCtrl.$inject = ["$log", "$rootScope", "$scope", "AppSettings"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function LoginCtrl($log, $rootScope, $scope, AppSettings) {

  $log = $log.getInstance('LoginCtrl');

  var vm = this;

};

controllersModule.controller('LoginCtrl', LoginCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/MapCtrl.js":[function(require,module,exports){
'use strict';

MapCtrl.$inject = ["$rootScope", "$scope", "$log", "$ionicLoading", "AppSettings", "GMap", "LocationsService", "$ionicSlideBoxDelegate"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MapCtrl($rootScope, $scope, $log, $ionicLoading, AppSettings, GMap, LocationsService, $ionicSlideBoxDelegate) {

    $log = $log.getInstance("MapCtrl");

 	  // ViewModel
  	var vm = this;
    var currentCenter = $rootScope.currentPosition;

    vm.this_radius = 5000;
    vm.gmap = new GMap({zoom:13, radius:vm.this_radius});    
    vm.gmap.height = 625;
    vm.showSlider = false;
    vm.markers = [];    
    
    
    vm.locations_by_distance = [];

    vm.knob ={
              value: 0,
              options:{ dynamicOptions: true },
            };

    
    var setKnobValue = function(val) {
      // set ui.knob options here
      // this tricks the knob into updating the value correctly
          vm.knob ={
              value:val,
              options:{
                size: 100,
                min:  1,
                max:  10000,
                step: 1,
                barColor: '#5BC01E',
                trackColor: '#212121',
                trackWidth: 5,
                barWidth: 20,
                subText: {
                  enabled: true,
                  text: 'meter radius'
                }
              }
            };
    };

    


    var setMarkers = function(locations) {
      locations.map(function(locate){
            var marker = vm.gmap.dropMarker({
                        center: {
                            lat: parseFloat(locate.lat),
                            lng: parseFloat(locate.long)
                        },
                        title:     locate.name,
                        map:       vm.gmap.map,
                        opacity:   0.125
                      });

                  marker.addListener('click',function(){
                     $scope.$broadcast('marker:clicked', locate);
                  });

                vm.markers[locate._id] = marker;
            // var infoWNDW = vm.gmap.buildInfoWindow(locate, marker);
          });

        return vm.markers;
    };

    
    $scope.$on("marker:clicked", function(e, marker) {
      console.log('click received');

      $scope.$apply(function() {
        vm.showSlider = true;
        $log.log(marker.name);
        $log.log(_.indexOf(vm.locations_by_distance, marker));
        $ionicSlideBoxDelegate.slide(_.indexOf(vm.locations_by_distance, marker));
        vm.gmap.plotRouteTo(marker);
      })


    });
    
    $ionicLoading.show({
        template: "Exploring Your Area ...",
        backdrop: true
    });

    // get all locations around specified area
      LocationsService
        .get({radius: vm.this_radius, 
              lat:    currentCenter.latitude, 
              lng:    currentCenter.longitude})
        .then(function(locations) {
          
          // sort locations by distnace 
          vm.locations_by_distance = _.sortBy(locations, 'distancefromlocation');
          setMarkers(vm.locations_by_distance);

          // set the locations radius and knob value to the closes loction to test
          vm.this_radius = _.first(vm.locations_by_distance).distancefromlocation;
          vm.locationsRadius = vm.gmap.setRadiusCircle({radius: vm.this_radius});
          vm.gmap.map.fitBounds(vm.locationsRadius.getBounds());
          
          setKnobValue(1000);
          $ionicLoading.hide();

          $ionicSlideBoxDelegate.update();
        });//end .then




        



         $scope.$watch("Map.knob.value", function(newValue, oldValue) {
            // $log.log("new Map.knob.value: "+newValue);
            // $log.log("old Map.knob.value: "+oldValue);

            if(vm.locationsRadius) vm.locationsRadius.setRadius(newValue);
            vm.showSlider = false;
            
            if(vm.locationsRadius){

               // Get the bounds
              var circleBounds = vm.locationsRadius.getBounds();
              var mapBounds = vm.gmap.map.getBounds();


              var ne = circleBounds.getNorthEast(); // LatLng of the north-east corner
              var sw = circleBounds.getSouthWest();
              var nw = new google.maps.LatLng(ne.lat(), sw.lng());
              var se = new google.maps.LatLng(sw.lat(), ne.lng());
              
              var LatLngList = new Array (nw, se);

              
              if(!mapBounds.contains(ne)){
                for (var i = 0, LtLgLen = LatLngList.length; i < LtLgLen; i++) {
                  //  And increase the bounds to take this point
                  mapBounds.extend(LatLngList[i]);
                }
                vm.gmap.map.fitBounds(mapBounds);
              }else{
                vm.gmap.map.fitBounds(circleBounds);
              }
            

            }//end if(vm.locationsRadius)
           
            

            // show/reveal locations inside radius
            vm.locations_by_distance.map(function(locate){
                  if( locate.distancefromlocation < newValue ){
                    vm.markers[locate._id].setOpacity(1);
                  }else {
                    vm.markers[locate._id].setOpacity(0);
                  }
            });//vm.locations_by_distance.map


        });///$scope.$watch "Map.knob.value"
      
    


        
        
         
            
            

  
  

  $rootScope.$on('marker:clicked', function(e, locale) {
    $scope.$apply(function() {
      
      vm.gmap.height = vm.gmap.height/2;
      vm.gmap.map.panTo({lat:parseFloat(locale.lat), 
                         lng:parseFloat(locale.long)});
    });
    
  });
};//// MapCtrl



controllersModule.controller('MapCtrl', MapCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistCtrl.js":[function(require,module,exports){
'use strict';

PlaylistCtrl.$inject = ["$scope"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function PlaylistCtrl($scope) {
  


};

controllersModule.controller('PlaylistCtrl', PlaylistCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistsCtrl.js":[function(require,module,exports){
'use strict';

PlaylistsCtrl.$inject = ["$scope"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function PlaylistsCtrl($scope) {
  
 $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

};

controllersModule.controller('PlaylistsCtrl', PlaylistsCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js":[function(require,module,exports){
'use strict';



module.exports = angular.module('app.controllers', []);

({"AppCtrl":require("./AppCtrl.js"),"BrowseCtrl":require("./BrowseCtrl.js"),"ConnectCtrl":require("./ConnectCtrl.js"),"LoginCtrl":require("./LoginCtrl.js"),"MapCtrl":require("./MapCtrl.js"),"PlaylistCtrl":require("./PlaylistCtrl.js"),"PlaylistsCtrl":require("./PlaylistsCtrl.js")});

},{"./AppCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/AppCtrl.js","./BrowseCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/BrowseCtrl.js","./ConnectCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/ConnectCtrl.js","./LoginCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/LoginCtrl.js","./MapCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/MapCtrl.js","./PlaylistCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistCtrl.js","./PlaylistsCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistsCtrl.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/directives/_index.js":[function(require,module,exports){
'use strict';



module.exports = angular.module('app.directives', []);

({"mAppLoadingDirective":require("./mAppLoadingDirective.js")});

},{"./mAppLoadingDirective.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/directives/mAppLoadingDirective.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/directives/mAppLoadingDirective.js":[function(require,module,exports){
'use strict';

mAppLoading.$inject = ["$log", "$animate"];
var directivesModule = require('./_index.js');

/**
 * @ngInject
 */
function mAppLoading($log, $animate){
  $log = $log.getInstance( "mAppLoading" );
  

  // Runs during compile
  return {
    restrict:    'C',
    link: function(scope, element, attributes, controller, transcludeFn) {
     $animate.leave( 
     	element.children().eq( 1 )
     	).then(
            function cleanupAfterAnimation() {
            	$log.log('cleanupAfterAnimation');
                // Remove the root directive element.
                element.remove();
                // Clear the closed-over variable references.
                scope = element = attributes = null;
            }
        );

    }
  }


};


directivesModule.directive('mAppLoading', mAppLoading);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/directives/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/GMap.js":[function(require,module,exports){
'use strict';

var modelsModule = require('./_index.js');

/**
 * @ngInject
*/

modelsModule.factory('GMap', ["$log", "$rootScope", "LocationsService", "AppSettings", function($log, $rootScope, LocationsService, AppSettings){
  $log = $log.getInstance('GMap');

  var currentCenter = $rootScope.currentPosition;



  function GMap(mapSettings){
    
    this.mapOptions = {
      center:    {lat: currentCenter.latitude, 
                  lng: currentCenter.longitude},
      zoom:      AppSettings.GMAP_DEFAULT.ZOOM,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      radius:    AppSettings.GMAP_DEFAULT.RADIUS,
    };

    angular.extend(this.mapOptions, mapSettings);
    
    $log.debug('zoom {mapOptions.zoom}', this);
    
    this.map = new google.maps.Map(document.getElementById("Map"), this.mapOptions);
    
 };//GMap constructor




  GMap.prototype ={

    dropMarker: function(markerData) {
      var _markerSettings = {};
      angular.extend(_markerSettings, this.mapOptions, markerData);
      $log.debug('dropMarker for "{title}"" at "{center.lat}, {center.lng}"', _markerSettings);
      
      var _marker = new google.maps.Marker({
            position:  _markerSettings.center,
            map:       _markerSettings.map,
            title:     _markerSettings.title,
            opacity:   _markerSettings.opacity,
            animation: google.maps.Animation.DROP
      });

       
      return _marker;
    },


    buildInfoWindow: function(locationInfo, locationMarker) {
      var _map = this;

      $log.debug('buildInfoWindow for {name}', locationInfo);
      var infowindow = new google.maps.InfoWindow({
                    content: '<h3 id="firstHeading" class="firstHeading">'+locationInfo.name+'</h3>'+
                             '<p>'+locationInfo.travelTime.text+' walk</p>'+
                             '<small>'+locationInfo.distancefromlocation+'</small>'
      });

      // locationMarker.addListener('click', function() {
      //   $rootScope.$broadcast('marker:clicked', locationInfo );
      //   infowindow.open( _map.map ,locationMarker);
      // });

      return infowindow;
    },


    plotLocations:function(plotData) {
      var _map = this;
      var _plotSettings ={}; 

      angular.extend(_plotSettings,this.mapOptions, plotData);
      $log.debug('plotLocations within a "{radius}" meter radius of "{center.lat}, {center.lng}"', _plotSettings);
      
      // drop marker on current location
      _map.dropMarker({title:"You Are Here", opacity:1});

      // get all locations around specified area
      LocationsService
        .get({radius: _plotSettings.radius, 
              lat:    _plotSettings.center.lat, 
              lng:    _plotSettings.center.lng })
        .then(function(locations) {

          // process locations 
          angular.forEach(locations, function(location) {
            $log.debug('plotLocation {name}',location);
            //get the travelTime forEach location
            location.setTravelTime().then(function() {

              var locationPin = _map.dropMarker({center: {
                                    lat: parseFloat(location.lat),
                                    lng: parseFloat(location.long)
                                  },
                                  opacity: 0.5,
                                  title: location.name
                                });

              _map.buildInfoWindow(location, locationPin);
              _map.plotRouteTo(location);

            });///location.setTravelTime


          });///end angular.forEach

        });//end LocationsService

    },

    plotRouteTo: function(location){
      $log.debug('plotRouteTo {name}',location);

      var _map = this;
      var _routeSettings = {
            draggable:           false,
            suppressInfoWindows: true,
            suppressMarkers:     true,
            origin:              _map.mapOptions.center
      };

      angular.extend(_routeSettings, this.mapOptions);

      var directionsDisplay = new google.maps.DirectionsRenderer({
            map:                 _map.map,
            draggable:           _routeSettings.draggable,
            suppressInfoWindows: _routeSettings.suppressInfoWindows,
            suppressMarkers:     _routeSettings.suppressMarkers
          }),
          request = {
            destination: {lat: parseFloat(location.lat), 
                          lng: parseFloat(location.long)},
            origin:      _routeSettings.origin,
            travelMode:  google.maps.TravelMode.WALKING,
          },
          directionsService = new google.maps.DirectionsService();// Pass the directions request to the directions service.


          directionsService.route(request, function(response, status) {
            
            if (status == google.maps.DirectionsStatus.OK) {
              // Display the route on the map.
              directionsDisplay.setDirections(response);
            }
          });///directiosService.route


    },

    setRadiusCircle: function(radiusCircleSettings) {
      var _map = this;
      var _circleSettings ={
              strokeColor:   '#0084b4',
              strokeOpacity: 0.8,
              strokeWeight:  1,
              fillColor:     '#0084b4',
              fillOpacity:   0.0625,
      };

      angular.extend(_circleSettings ,this.mapOptions, radiusCircleSettings);

      var locationsCircle = new google.maps.Circle({
                strokeColor:   _circleSettings.strokeColor,
                strokeOpacity: _circleSettings.strokeOpacity,
                strokeWeight:  _circleSettings.strokeWeight,
                fillColor:     _circleSettings.fillColor,
                fillOpacity:   _circleSettings.fillOpacity,
                map:           _map.map,
                center:        _circleSettings.center,
                radius:        _circleSettings.radius
          });

      return locationsCircle;
    }

  };
    


  return GMap;

  
}]);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/LocationModel.js":[function(require,module,exports){
'use strict';

var modelsModule = require('./_index.js');

/**
 * @ngInject
 */
modelsModule.factory('Location', ["$rootScope", "$log", "$q", function($rootScope, $log, $q ) {
  $log = $log.getInstance('Location');

  function Location(LocationData){
    angular.extend(this, LocationData);
    $log.debug('{name}', this);
  }


  Location.responseTransformer = function (responseData) {
    $log.debug('resoponseTransformer {length}', responseData.locations);
    
    if(responseData.locations){
      
      var populated_locations = [];

      responseData.locations
              .map(function(data){
                var location = new Location(data);
                populated_locations.push(location.setTravelTime());
              });

        return populated_locations;
    }

      return responseData.map(Location.build);  

    
  }


  Location.prototype.setTravelTime = function() {
      $log.debug('setTravelTime {name}', this);
      
      var _location = this;
      var deferred = $q.defer();

      var service = new google.maps.DistanceMatrixService;
       service.getDistanceMatrix({
         origins:       [{lat: $rootScope.currentPosition.latitude, lng:$rootScope.currentPosition.longitude}],
         destinations:  [{lat: parseFloat(this.lat), lng: parseFloat(this.long)}],
         travelMode:    google.maps.TravelMode.WALKING,
         unitSystem:    google.maps.UnitSystem.IMPERIAL,
         avoidHighways: false,
         avoidTolls:    false
       }, function(response, status) {
         	_location.travelTime = response.rows[0].elements[0].duration;
          _location.distance = response.rows[0].elements[0].distance;
         	deferred.resolve(_location);
         // $log.debug("{name} - {travelTime}", _location);
          
       });

       
       return deferred.promise;

  }


  Location.build = function(lData) {
    $log.debug('build {name}', lData);
    
    return new Location(lData);
  }

   

  
 
  return Location;


}]);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/_index.js":[function(require,module,exports){
'use strict';



module.exports = angular.module('app.models', []);

({"GMap":require("./GMap.js"),"LocationModel":require("./LocationModel.js")});

},{"./GMap.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/GMap.js","./LocationModel.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/LocationModel.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_config.js":[function(require,module,exports){
'use strict';


/**
 * @ngInject
 */
OnConfig.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider", "$provide"];
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $provide) {
  
  //activate LogDecorator
  require('./utils/logging/LogDecorator.js')($provide);

$stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl',
    resolve:{
        coordinates:["CurrentCoords", "$timeout", function(CurrentCoords, $timeout) {
            return CurrentCoords.get();  
        }]
    }
  })
  .state('app.connect', {
    url: '/connect',
    views: {
      'menuContent': {
        templateUrl: 'templates/connect.html',
        controller: 'ConnectCtrl as Connect'
      }
    }
  } )

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl as Lgn'
      }
    }
  } )
  
  .state('app.browse', {
    url: '/browse',
    views: {
      'menuContent': {
        templateUrl: 'templates/browse.html',
        controller: 'BrowseCtrl'
      }
    }
  })

  
  .state('app.map', {
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html',
          controller: 'MapCtrl as Map'
        }
      }
    });
    


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/map');
  
  


}//// OnConfig


module.exports = OnConfig;

},{"./utils/logging/LogDecorator.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/logging/LogDecorator.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_run.js":[function(require,module,exports){
'use strict';

/**
 * @ngInject
 */
OnRun.$inject = ["$ionicPlatform", "$log", "$animate"];
function OnRun($ionicPlatform, $log, $animate) {
  $log = $log.getInstance('OnRun');
   
  $ionicPlatform.ready(function() {
    $animate.enabled(true);
    
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}

module.exports = OnRun;

},{}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/CurrentCoordsService.js":[function(require,module,exports){
'use strict';

CurrentCoords.$inject = ["$q", "$http", "$log", "AppSettings"];
var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function CurrentCoords($q, $http, $log,  AppSettings) {
  $log = $log.getInstance("CurrentCoordsService");
  
  var service = {};

  service.get = function() {

    var deferred = $q.defer();    

    navigator.geolocation.getCurrentPosition(function(pos) {
        
      $log.debug('lat: {coords.latitude}',pos);
      $log.debug('long: {coords.longitude}',pos);

      deferred.resolve(pos.coords);
        
   }, function(error) {
       $log.warn('Unable to get location: ' + error.message);
       deferred.reject(err, status);
   });


    
    return deferred.promise;
  };

  return service;

}

servicesModule.service('CurrentCoords', CurrentCoords);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/LocationsService.js":[function(require,module,exports){
'use strict';

LocationsService.$inject = ["$log", "Yocal", "Location", "$q"];
var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function LocationsService($log, Yocal, Location, $q) {
  $log = $log.getInstance("LocationsServiceService");

  var service = {};

  service.get = function( getData ) {

    $log.debug('GET location in a {radius}  of {lat}, {lng}', getData);

    return Yocal.get(getData)
                .then(function(data){
                  // only return locations when they have ALL
                  // been populated with travelTimes
                  return $q.all(Location.responseTransformer(data));
                });
                

  };

  service.all = function( getData ) {

    $log.debug('ALL');

    return Yocal.all().then(Location.responseTransformer);

  };

  return service;

}

servicesModule.service('LocationsService', LocationsService);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/Yocal.js":[function(require,module,exports){
'use strict';

Yocal.$inject = ["$q", "$http", "AppSettings", "$log"];
var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function Yocal($q, $http, AppSettings, $log) {

  var service = {};
  $log = $log.getInstance("YocalService");

  service.get = function( getData ) {
    var deferred = $q.defer();

    // /listByDistanceCat/Food/8000/39.937893/-75.1689347
   $http.get(AppSettings.yocalAPI.base+'/listByDistanceCat/Food/'+getData.radius+'/'+getData.lat+'/'+getData.lng).success(function(data) {
        $log.debug('found {length} spots within '+getData.radius+' meters of '+getData.lat+','+getData.lng, data.locations);
        data.radius = getData.radius;
        deferred.resolve(data);
    }).error(function(err, status) {
        $log.warn('Unable to get location: ' + err.message);
        deferred.reject(err, status);
    });

    return deferred.promise;
  };

  service.all = function(getData){
    var deferred = $q.defer();

    // /listByDistanceCat/Food/8000/39.937893/-75.1689347
   $http.get(AppSettings.yocalAPI.base+'/list').success(function(data) {
        $log.debug('all: found {length} total spots', data);
        deferred.resolve(data);
    }).error(function(err, status) {
        $log.warn('Unable to get location: ' + err.message);
        deferred.reject(err, status);
    });

    return deferred.promise;

  }

  return service;

}

servicesModule.service('Yocal', Yocal);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js":[function(require,module,exports){
'use strict';



module.exports = angular.module('app.services', []);

({"CurrentCoordsService":require("./CurrentCoordsService.js"),"LocationsService":require("./LocationsService.js"),"Yocal":require("./Yocal.js"),"example":require("./example.js")});

},{"./CurrentCoordsService.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/CurrentCoordsService.js","./LocationsService.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/LocationsService.js","./Yocal.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/Yocal.js","./example.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/example.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/example.js":[function(require,module,exports){
'use strict';

ExampleService.$inject = ["$q", "$http"];
var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function ExampleService($q, $http) {

  var service = {};

  service.get = function() {
    var deferred = $q.defer();

    $http.get('apiPath').success(function(data) {
        deferred.resolve(data);
    }).error(function(err, status) {
        deferred.reject(err, status);
    });

    return deferred.promise;
  };

  return service;

}

servicesModule.service('ExampleService', ExampleService);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/DateTime.js":[function(require,module,exports){
/**
 * @author     Thomas Burleson
 * @author     StackOverflow - Harto, http://stackoverflow.com/questions/2315408/how-do-i-format-a-timestamp-in-javascript-to-display-it-in-graphs-utc-is-fine
 * @description
 *  
 * DateTime utility class that spits out UTC timestamp strings usually used in a reporting, print-capable process.
*/
 

 'use strict';


var buildTimeString = function (date, format)
        {
            format = format || "%h:%m:%s:%z";

            function pad(value, isMilliSeconds)
            {
                if(typeof (isMilliSeconds) === "undefined")
                {
                    isMilliSeconds = false;
                }
                if(isMilliSeconds)
                {
                    if(value < 10)
                    {
                        value = "00" + value;
                    }
                    else if(value < 100)
                    {
                        value = "0" + value;
                    }
                }
                return(value.toString().length < 2) ? "0" + value : value;
            }

            return format.replace(/%([a-zA-Z])/g, function (_, fmtCode)
            {
                switch(fmtCode)
                {
                case "Y":
                    return date.getFullYear();
                case "M":
                    return pad(date.getMonth() + 1);
                case "d":
                    return pad(date.getDate());
                case "h":
                    return pad(date.getHours());
                case "m":
                    return pad(date.getMinutes());
                case "s":
                    return pad(date.getSeconds());
                case "z":
                    return pad(date.getMilliseconds(), true);
                default:
                    throw new Error("Unsupported format code: " + fmtCode);
                }
            });
        };


 // Publish API for DateTime utils
        // return {
        //     formattedNow: function ()
        //     {
        //         return buildTimeString(new Date());
        //     }
        // };
        // 
 module.exports = {
    formattedNow: function () { return buildTimeString(new Date()); }
 };

},{}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/logging/LogDecorator.js":[function(require,module,exports){
'use strict';
/**
 * LogDecorator
 *  @source: http://solutionoptimist.com/2013/10/07/enhance-angularjs-logging-using-decorators/
 */

 var LogDecorator = function( $provide  ){


              // Register our $log decorator with AngularJS $provider
              $provide.decorator( '$log', [ "$delegate", function( $delegate )
              {
               // NOTE: the LogEnchancer module returns a FUNCTION that we named `enchanceLoggerFn`
               //       All the details of how the `enchancement` works is encapsulated in LogEnhancer!

                  require('./LogEnhancer.js')( $delegate );

                  return $delegate;
              }]);
};


module.exports =  LogDecorator;

},{"./LogEnhancer.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/logging/LogEnhancer.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/logging/LogEnhancer.js":[function(require,module,exports){
'use strict';
/**
 * LogEnhancer
 * This adds timestamps and supplant functionality to Angular $log service
 * @source: http://solutionoptimist.com/2013/10/07/enhance-angularjs-logging-using-decorators/
 * @api: public
 * @returns: Object - extended $log service
 */

var enchanceLogger = function( $log ){
  var supplant = require('../supplant.js');
  var DateTime = require('../DateTime.js');


  /**
   * Capture the original $log functions; for use in enhancedLogFn()
   * @api  private 
   */
  
  var _$log = (function( $log ){
      return {
        log   : $log.log,
        info  : $log.info,
        warn  : $log.warn,
        debug : $log.debug,
        error : $log.error
      };
  })( $log ); 



   /**
    * Partial application to pre-capture a logger function
    * @api:  private 
    * @returns: Function 
    */
    var prepareLogFn = function( logFn, className ){

      /**
       * Invoke the specified `logFn<` with the supplant functionality...
       * @api: private 
       * @example: 
       *   var user = { who:"Thomas Burleson"", email="ThomasBurleson@gmail.com"" };
       *   $log.warn( "A warning message for `{who}` will be sent to `{email}` !", user );   
       *
       * This should output: A warning message for `Thomas Burleson` will be sent to `ThomasBurleson@gmail.com` !
       */
      var enhancedLogFn = function( ){
        var args = Array.prototype.slice.call(arguments),
            now  = DateTime.formattedNow();
            className = className ? className : '';
            // prepend a timestamp to the original output message
            args[0] = supplant("{0} - {1}{2}", [ now, className, args[0] ]);

        logFn.call( null,  supplant.apply( null, args ) );
      };

      // Special... only needed to support angular-mocks expectations
      enhancedLogFn.logs = [ ];
 
      return enhancedLogFn;
      
    };




    /**
     * Support to generate class-specific logger instance with classname only
     *
     * @param: name
     * @returns: Object wrapper facade to $log
     */
    var getInstance = function( className ){
      className = ( className !== undefined ) ? className + "::" : "";

      return{
         log   : prepareLogFn( _$log.log,    className ),
         info  : prepareLogFn( _$log.info,   className ),
         warn  : prepareLogFn( _$log.warn,   className ),
         debug : prepareLogFn( _$log.debug,  className ),
         // error : prepareLogFn( _$log.error,  className )
      };

    };



    // wrap each log method 
    $log.log   = prepareLogFn( $log.log );
    $log.info  = prepareLogFn( $log.info );
    $log.warn  = prepareLogFn( $log.warn );
    $log.debug = prepareLogFn( $log.debug );
    // $log.error = prepareLogFn( $log.error );

    // Add special method to AngularJS $log
    $log.getInstance = getInstance;
 

    return $log;
};//enchanceLogger



module.exports =  enchanceLogger;

},{"../DateTime.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/DateTime.js","../supplant.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/supplant.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/supplant.js":[function(require,module,exports){
/**
 * @author      Thomas Burleson
 * @date        November, 2013
 * @source:     https://github.com/ThomasBurleson/angularjs-logDecorator/blob/master/src/mindspace/utils/supplant.js
  */
 

 'use strict';

var supplant =  function( template, values, pattern ) {
            pattern = pattern || /\{([^\{\}]*)\}/g;

            return template.replace(pattern, function(a, b) {
                var p = b.split('.'),
                    r = values;

                try {
                    for (var s in p) { r = r[p[s]];  }
                } catch(e){
                    r = a;
                }

                return (typeof r === 'string' || typeof r === 'number') ? r : a;
            });
        };


// supplant() method from Crockfords `Remedial Javascript`
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

String.method("supplant", function( values, pattern ) {
    var self = this;
    return supplant(self, values, pattern);
});




module.exports =  String.supplant = supplant;

},{}]},{},["/Library/WebServer/Documents/ionic-googlemaps/www/js/app-main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1hbmltYXRlL2FuZ3VsYXItYW5pbWF0ZS5taW4uanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2Jvd2VyX2NvbXBvbmVudHMvaW9uaWMtYWR2YW5jZWQtY2Fyb3VzZWwvc3JjL2FkdmFuY2VkLWNhcm91c2VsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9ib3dlcl9jb21wb25lbnRzL25nLWtub2IvZGlzdC9uZy1rbm9iLm1pbi5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvYXBwLW1haW4uanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnN0YW50cy5kZXZlbG9wbWVudC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvQXBwQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvQnJvd3NlQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvQ29ubmVjdEN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL0xvZ2luQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvTWFwQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvUGxheWxpc3RDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9QbGF5bGlzdHNDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9faW5kZXguanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2RpcmVjdGl2ZXMvX2luZGV4LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9kaXJlY3RpdmVzL21BcHBMb2FkaW5nRGlyZWN0aXZlLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9tb2RlbHMvR01hcC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvbW9kZWxzL0xvY2F0aW9uTW9kZWwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL21vZGVscy9faW5kZXguanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL29uX2NvbmZpZy5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvb25fcnVuLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9DdXJyZW50Q29vcmRzU2VydmljZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvTG9jYXRpb25zU2VydmljZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvWW9jYWwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3NlcnZpY2VzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvZXhhbXBsZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvdXRpbHMvRGF0ZVRpbWUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL2xvZ2dpbmcvTG9nRGVjb3JhdG9yLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9sb2dnaW5nL0xvZ0VuaGFuY2VyLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9zdXBwbGFudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7OztBQUtBLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLGFBQWEsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxTQUFTLE9BQU8sR0FBRyxJQUFJLEdBQUcsWUFBWSxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssTUFBTSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLE9BQU8sR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLGFBQWEsRUFBRSxPQUFPLEVBQUUsUUFBUSxLQUFLLEVBQUUsTUFBTTtBQUN4Z0IsS0FBSyxFQUFFLEdBQUcsSUFBSSxFQUFFLEdBQUcsU0FBUyxPQUFPLEVBQUUsTUFBTSxRQUFRLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUUsU0FBUyxPQUFPLEVBQUUsR0FBRyxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsU0FBUyxPQUFPLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssU0FBUyxHQUFHLEVBQUUsQ0FBQyxPQUFPLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEdBQUcsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsTUFBTSxFQUFFLGNBQWMsR0FBRyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsWUFBWSxPQUFPLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFO0FBQ2xmLEVBQUUsRUFBRSxhQUFhLFVBQVUsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssTUFBTSxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLElBQUksS0FBSyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxhQUFhLElBQUksS0FBSyxFQUFFLGFBQWEsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLFNBQVMsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEtBQUssRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksS0FBSyxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU07QUFDMWYsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLFlBQVksSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxjQUFjLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxHQUFHLFNBQVMsRUFBRSxJQUFJLEtBQUssRUFBRSxJQUFJLEtBQUssT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsT0FBTyxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxPQUFPLE1BQU0sRUFBRSxFQUFFLGlCQUFpQixJQUFJLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPO0FBQ3JmLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxXQUFXLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsT0FBTyxJQUFJLEVBQUUsV0FBVyxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssSUFBSSxFQUFFLEdBQUcsSUFBSSxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsQ0FBQyxPQUFPLElBQUksR0FBRyxNQUFNLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxXQUFXLEdBQUcsY0FBYyxNQUFNLENBQUMsRUFBRSxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLFlBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxFQUFFLEdBQUcsU0FBUyxHQUFHO0FBQ3hmLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxPQUFPLE1BQU0sTUFBTSxDQUFDLE1BQU0sVUFBVSxDQUFDLEVBQUUsT0FBTyxPQUFPLE9BQU8sTUFBTSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLElBQUksU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sS0FBSyxJQUFJLEVBQUUsRUFBRSxLQUFLLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxTQUFTLEdBQUcsRUFBRSxTQUFTLEdBQUcsRUFBRSxZQUFZLEdBQUcsRUFBRSxVQUFVLEdB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LE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxhQUFhLElBQUksT0FBTyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxLQUFLLElBQUksRUFBRSxLQUFLLEtBQUssU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFlBQVksRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEtBQUssU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFlBQVksQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxTQUFTLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEtBQUssU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsRUFBRSxhQUFhLEVBQUUsT0FBTyxLQUFLLFNBQVM7QUFDbGdCLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE9BQU8sS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxJQUFJLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEtBQUssU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxRQUFRLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLFdBQVcsS0FBSyxLQUFLLENBQUMsUUFBUSxhQUFhLGVBQWUsWUFBWSxZQUFZLGNBQWMsa0JBQWtCLG1CQUFtQixXQUFXLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLFNBQVMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUNuZixPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxHQUFHLFNBQVMsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLE9BQU8sSUFBSSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsS0FBSyxNQUFNLEVBQUUsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFlBQVksS0FBSyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsS0FBSyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxhQUFhLEtBQUs7QUFDeGYsR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsT0FBTyxTQUFTLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLE9BQU8sSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLE1BQU0sT0FBTyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxHQUFHLE9BQU8sRUFBRSxPQUFPLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxNQUFNLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLGNBQWMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxTQUFTLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRTtBQUNwZixFQUFFLFFBQVEsRUFBRSxTQUFTLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxPQUFPLEtBQUssRUFBRSxRQUFRLElBQUksSUFBSSxRQUFRLEVBQUUsRUFBRSxVQUFVLEdBQUcsQ0FBQyxFQUFFLE9BQU8sSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxhQUFhLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLFVBQVUsR0FBRyxFQUFFLEVBQUUsRUFBRSxTQUFTLFlBQVks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RSxRQUFRLEVBQUUsV0FBVyxFQUFFLEtBQUssS0FBSyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxZQUFZLFdBQVcsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxZQUFZLFVBQVUsQ0FBQyxFQUFFLGNBQWMsRUFBRSxlQUFlLE1BQU0sVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFO0FBQ3RmLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxJQUFJLEVBQUUsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUUsS0FBSyxHQUFHLEVBQUUsS0FBSyxJQUFJLEVBQUUsR0FBRyxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxLQUFLLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sS0FBSyxFQUFFLEVBQUUsTUFBTSxLQUFLLElBQUksSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sSUFBSSxHQUFHLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsT0FBTyxPQUFPLEVBQUUsS0FBSyxLQUFLLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssRUFBRSxFQUFFLElBQUksR0FBRyxJQUFJLE9BQU87QUFDcmYsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssU0FBUyxRQUFRLEdBQUcsRUFBRSxFQUFFLEdBQUcsU0FBUyxRQUFRLElBQUksRUFBRSxFQUFFLFNBQVMsUUFBUSxHQUFHLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLFVBQVUsR0FBRyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksV0FBVyxJQUFJLEVBQUUsV0FBVyxxQkFBcUIsRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxlQUFlLEdBQUcsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLFlBQVksY0FBYyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxPQUFPLFNBQVMsUUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxPQUFPLFVBQVUsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxPQUFPLE9BQU8sSUFBSSxFQUFFLEVBQUUsS0FBSztBQUM3ZSxHQUFHLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxTQUFTLEdBQUcsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLEVBQUUsWUFBWSxJQUFJLEdBQUcsSUFBSSxFQUFFLEVBQUUsWUFBWSxNQUFNLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFF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LEdBQUcsS0FBSyxFQUFFLEdBQUcsT0FBTyxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsWUFBWTtBQUN0ZixHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsU0FBUyxDQUFDLElBQUksU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixHQUFHLEVBQUUsR0FBRyxFQUFFLHdCQUF3QixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxJQUFJLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLE1BQU0sVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsU0FBUyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLEVBQUUsd0JBQXdCLENBQUMsR0FBRyxFQUFFLFVBQVUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7QUFDaGYsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLE9BQU8sRUFBRSxlQUFlLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsRUFBRSxrQkFBa0IsR0FBRyxFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixDQUFDLEVBQUUsWUFBWSxPQUFPLEVBQUUsT0FBTyxHQUFHLEVBQUUsT0FBTyxXQUFXLEVBQUUsT0FBTyxFQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRSxlQUFlLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDO0FBQ3JmLElBQUksRUFBRSxNQUFNLEdBQUcsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sR0FBRyxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxJQUFJLEVBQUUsS0FBSyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssS0FBSyxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxrQkFBa0IsSUFBSSxFQUFFLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEtBQUssTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLFFBQVEsSUFBSSxLQUFLLElBQUksRUFBRSxFQUFFLElBQUksR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFrQixHQUFHO0FBQzdmLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxHQUFHLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLElBQUksRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsSUFBSSxFQUFFLG9CQUFvQixLQUFLLElBQUksRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLEtBQUssTUFBTSxFQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUMsRUFBRSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxXQUFXLE9BQU8sSUFBSSxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLFVBQVUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxFQUFFLFlBQVksT0FBTyxJQUFJLElBQUksR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFO0FBQ2xmLEVBQUUsTUFBTSxLQUFLLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxFQUFFLFdBQVcsRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEdBQUcsR0FBRyxFQUFFLFNBQVMsU0FBUyxFQUFFLGNBQWMsRUFBRSxTQUFTLEdBQUcsS0FBSyxHQUFHLEdBQUcsRUFBRSxZQUFZLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsS0FBSyxLQUFLLE9BQU8sR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxLQUFLLEVBQUUsSUFBSSxPQUFPLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxlQUFlLElBQUksUUFBUSxHQUFHLEdBQUcsT0FBTyxJQUFJLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0I7Q0FDcmYsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsaUJBQWlCLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxJQUFJLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLE1BQU0sR0FBRyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssSUFBSSxFQUFFLGdCQUFnQixFQUFFLENBQUMsRUFBRSxFQUFFLGVBQWUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLElBQUksSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksSUFBSSxHQUFHLEVBQUUsTUFBTSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLFlBQVksSUFBSSxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRTtBQUN0ZSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsd0JBQXdCLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUscUJBQXFCLEdBQUcsRUFBRSxTQUFTLEVBQUUseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEdBQUcsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLHdCQUF3QixFQUFFLEVBQUUsT0FBTyxHQUFHLEVBQUUseUJBQXlCLEVBQUUsdUJBQXVCLEVBQUUsRUFBRSxTQUFTLFdBQVcsRUFBRSxVQUFVLEVBQUUsRUFBRSwwQkFBMEIsRUFBRSxlQUFlLENBQUMsRUFBRSxFQUFFO0FBQ25mLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksT0FBTyxFQUFFLEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSx5QkFBeUIsRUFBRSxjQUFjLENBQUMsRUFBRSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSx3QkFBd0IsT0FBTyxJQUFJLE1BQU0sRUFBRSxVQUFVLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSx3QkFBd0IsRUFBRSx5QkFBeUIsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxnQkFBZ0IsSUFBSSxFQUFFLG1CQUFtQixHQUFHLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO0FBQ3RnQixJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEtBQUssTUFBTSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLFVBQVUsU0FBUyxxQkFBcUIsQ0FBQyxzQkFBc0IsU0FBUyxFQUFFLENBQUMsRUFBRSxRQUFRLEtBQUssc0JBQXNCLEtBQUssS0FBSyxDQUFDLGNBQWMsYUFBYSxrQkFBa0IsZUFBZSxZQUFZLFdBQVcsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsY0FBYyxJQUFJLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU0sTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU0sTUFBTSxPQUFPLEVBQUUsT0FBTyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsS0FBSyxLQUFLLEtBQUssU0FBUyxFQUFFO0FBQzVmLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsd0JBQXdCLEVBQUUsQ0FBQyxRQUFRLFNBQVMsTUFBTSxRQUFRLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsT0FBTyxHQUFHLEtBQUssTUFBTSxHQUFHLEVBQUUsVUFBVSxNQUFNLEtBQUssT0FBTyxHQUFHLEVBQUUsV0FBVyxFQUFFLEdBQUcsS0FBSyxNQUFNLEdBQUcsT0FBTyxPQUFPLEVBQUUsU0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLFVBQVUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTLGdCQUFnQixFQUFFLFlBQVksaUJBQWlCLEVBQUUsTUFBTSxDQUFDLElBQUksT0FBTyxFQUFFLGNBQWMsRUFBRSxLQUFLLFNBQVMsR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxtQkFBbUIsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLFVBQVUsQ0FBQztBQUM3ZixFQUFFLEVBQUUsRUFBRSxLQUFLLFVBQVUsSUFBSSxFQUFFLFNBQVMsbUJBQW1CLEVBQUUsU0FBUyxtQkFBbUIsRUFBRSxTQUFTLGFBQWEsRUFBRSxPQUFPLEdBQUcsSUFBSSxFQUFFLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLGdCQUFnQixNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxPQUFPLElBQUksSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxVQUFVLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxVQUFVLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLGFBQWEsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLE1BQU0sU0FBUyxFQUFFO0FBQzFmLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUUsT0FBTyxNQUFNLENBQUMsTUFBTSxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsUUFBUSxJQUFJLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFXLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsU0FBUyxLQUFLLE9BQU8sSUFBSSxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLFNBQVMsR0FBRyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNO0FBQ2pmLEVBQUUsRUFBRSxFQUFFLEdBQUcsT0FBTyxFQUFFLGNBQWMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLFlBQVksQ0FBQyxFQUFFLFlBQVksT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsS0FBSyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEdBQUcsT0FBTyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLFNBQVMsY0FBYyxDQUFDLG1CQUFtQixTQUFTLEVBQUUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxZQUFZLGtCQUFrQixhQUFhLFdBQVcsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsTUFBTSxLQUFLLElBQUksSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsdUJBQXVCLEdBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUksRUFBRTtBQUN0ZixDQUFDLEdBQUcsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsT0FBTyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLGVBQWUsRUFBRSxFQUFFLEdBQUcsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLE1BQU0sS0FBSyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLE1BQU0sS0FBSyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLEtBQUssY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsU0FBUyxhQUFhLEVBQUUsRUFBRSxLQUFLLFFBQVEsR0FBRyxHQUFHLEdBQUcsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLEtBQUssVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUM7Q0FDamYsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFF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LFdBQVcsS0FBSyxFQUFFLEtBQUssUUFBUSxNQUFNLElBQUksS0FBSyxZQUFZLGFBQWEsS0FBSyxRQUFRLEtBQUssRUFBRSxNQUFNLEtBQUssUUFBUSxLQUFLLEVBQUUsSUFBSSxLQUFLLFFBQVEsTUFBTSxLQUFLLEtBQUssUUFBUSxRQUFRLFVBQVUsU0FBUyxJQUFJLEtBQUssUUFBUSxLQUFLLEtBQUssU0FBUyxLQUFLLFFBQVEsUUFBUSxPQUFPLFNBQVMsS0FBSyxRQUFRLFFBQVEsS0FBSyxNQUFNLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxZQUFZLEtBQUssY0FBYyxVQUFVLEtBQUssWUFBWSxVQUFVLE1BQU0sT0FBTyxLQUFLLFFBQVEsUUFBUSxPQUFPLEtBQUssS0FBSyxRQUFRLFFBQVEsTUFBTSxLQUFLLFlBQVksYUFBYSxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sS0FBSyxRQUFRLEtBQUssRUFBRSxJQUFJLEtBQUssUUFBUSxNQUFNLE1BQU0sR0FBRyxLQUFLLFFBQVEsTUFBTSxRQUFRLENBQUMsSUFBSSxPQUFPLFNBQVMsS0FBSyxNQUFNLEVBQUUsTUFBTSxFQUFFLGFBQWEsS0FBSyxlQUFlLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxLQUFLLFdBQVcsS0FBSyxlQUFlLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxLQUFLLEtBQUssRUFBRSxHQUFHLElBQUksS0FBSyxRQUFRLFlBQVksTUFBTSxLQUFLLFFBQVEsV0FBVyxLQUFLLEdBQUcsU0FBUyxLQUFLLFFBQVEsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssUUFBUSxNQUFNLE1BQU0sT0FBTyxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sU0FBUyxLQUFLLFFBQVEsTUFBTSxTQUFTLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxNQUFNLE1BQU0sS0FBSyxHQUFHLE1BQU0sVUFBVSxJQUFJLFVBQVUsQ0FBQyxPQUFPLE1BQU0sT0FBTyxXQUFXLGNBQWMsS0FBSyxHQUFHLEVBQUUsYUFBYSxPQUFPLEdBQUcsU0FBUyxNQUFNLENBQUMsR0FBRyxPQUFPLEtBQUssSUFBSSxPQUFPLE9BQU8sR0FBRyxPQUFPLEtBQUssSUFBSSxPQUFPLE9BQU8sRUFBRSxTQUFTLElBQUksVUFBVSxVQUFVLEtBQUssTUFBTSxRQUFRLE9BQU8sVUFBVSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksS0FBSyxLQUFLLFFBQVEsTUFBTSxhQUFhLEdBQUcsVUFBVSxLQUFLLFFBQVEsTUFBTSxLQUFLLENBQUMsSUFBSSxPQUFPLEtBQUssUUFBUSxNQUFNLE9BQU8sT0FBTyxLQUFLLFFBQVEsS0FBSyxFQUFFLFNBQVMsS0FBSyxRQUFRLE1BQU0sU0FBUyxLQUFLLEdBQUcsTUFBTSxVQUFVLElBQUksVUFBVSxDQUFDLE9BQU8sTUFBTSxPQUFPLFdBQVcsY0FBYyxLQUFLLEdBQUcsRUFBRSxhQUFhLE9BQU8sR0FBRyxTQUFTLE1BQU0sQ0FBQyxHQUFHLE9BQU8sS0FBSyxJQUFJLE9BQU8sT0FBTyxHQUFHLE9BQU8sS0FBSyxJQUFJLE9BQU8sT0FBTyxHQUFHLE9BQU8sS0FBSyxJQUFJLFFBQVEsT0FBTyxRQUFRLEdBQUcsT0FBTyxLQUFLLElBQUksUUFBUSxPQUFPLFdBQVcsSUFBSSxVQUFVLFFBQVEsS0FBSyxNQUFNLFFBQVEsT0FBTyxRQUFRLEtBQUssQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksR0FBRyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLGVBQWUsS0FBSyxRQUFRLE1BQU0sTUFBTSxPQUFPLEtBQUssUUFBUSxNQUFNLFNBQVMsU0FBUyxLQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxVQUFVLENBQUMsS0FBSyxLQUFLLFFBQVEsS0FBSyxRQUFRLEtBQUssUUFBUSxJQUFJLEtBQUssU0FBUyxXQUFXLENBQUMsS0FBSyxLQUFLLFFBQVEsYUFBYSxLQUFLLFFBQVEsZ0JBQWdCLEtBQUssV0FBVyxLQUFLLFFBQVEsSUFBSSxLQUFLLFVBQVUsWUFBWSxDQUFDLEtBQUssS0FBSyxRQUFRLGVBQWUsS0FBSyxXQUFXLEtBQUssUUFBUSxJQUFJLEtBQUssVUFBVSxZQUFZLENBQUMsZUFBZSxJQUFJLEtBQUssVUFBVSxLQUFLLFFBQVEsSUFBSSxLQUFLLFNBQVMsV0FBVyxDQUFDLEtBQUssS0FBSyxRQUFRLFdBQVcsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLFdBQVcsT0FBTyxXQUFXLEtBQUssUUFBUSxJQUFJLEtBQUssWUFBWSxjQUFjLENBQUMsZUFBZSxFQUFFLE9BQU8sUUFBUSxpQkFBaUIsZUFBZSxLQUFLLFVBQVUsS0FBSyxTQUFTLE9BQU8sQ0FBQyxTQUFTLGlCQUFpQixDQUFDLEtBQUssT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxFQUFFLEtBQUssUUFBUSxLQUFLLEVBQUUsRUFBRSxHQUFHLE1BQU0sRUFBRSxLQUFLLFFBQVEsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLGtCQUFrQixDQUFDLEtBQUssT0FBTyxDQUFDLEVBQUUsSUFBSSxPQUFPLEdBQUcsTUFBTSxLQUFLLFlBQVksRUFBRSxPQUFPLEdBQUcsS0FBSyxRQUFRLEtBQUssRUFBRSxFQUFFLE9BQU8sR0FBRyxLQUFLLFFBQVEsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLFlBQVksRUFBRSxFQUFFLFFBQVEsQ0FBQyxJQUFJLFFBQVEsTUFBTSxJQUFJLEtBQUssS0FBSyxFQUFFLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsTUFBTSxJQUFJLE1BQU0sSUFBSSxLQUFLLFFBQVEsV0FBVyxJQUFJLE1BQU0sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxNQUFNLE1BQU0sS0FBSyxHQUFHLEtBQUssS0FBSyxNQUFNLEtBQUssZUFBZSxRQUFRLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxZQUFZLEtBQUssT0FBTyxLQUFLLFFBQVEsS0FBSyxLQUFLLE9BQU8sS0FBSyxRQUFRLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxLQUFLLE1BQU0sS0FBSyxRQUFRLE1BQU0sS0FBSyxRQUFRLEtBQUssS0FBSyxJQUFJLEtBQUssUUFBUSxLQUFLLElBQUksS0FBSyxNQUFNLEtBQUssTUFBTSxRQUFRLElBQUksT0FBTyxLQUFLLE9BQU8sS0FBSyxTQUFTLFNBQVMsS0FBSyxlQUFlLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsTUFBTSxLQUFLLFVBQVUsS0FBSyxJQUFJLEtBQUssVUFBVSxVQUFVLEtBQUssVUFBVSxTQUFTLEtBQUssZUFBZSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLE1BQU0sS0FBSyxXQUFXLEtBQUssSUFBSSxLQUFLLFlBQVksS0FBSyxRQUFRLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLFFBQVEsaUJBQWlCLEVBQUUsS0FBSyxRQUFRLGVBQWUsSUFBSSxHQUFHLE9BQU8sS0FBSyxTQUFTLE9BQU8sU0FBUyxLQUFLLEVBQUUsS0FBSyxRQUFRLE1BQU0sS0FBSyxHQUFHLE9BQU8sS0FBSyxTQUFTLE9BQU8sT0FBTyxTQUFTLElBQUksS0FBSyxLQUFLLEtBQUssYUFBYSxJQUFJLGFBQWEsR0FBRyxTQUFTLE9BQU8sR0FBRyxPQUFPLGlCQUFpQixHQUFHLFVBQVUsa0JBQWtCLEtBQUssU0FBUyxpQkFBaUIsY0FBYyxLQUFLLFFBQVEsUUFBUSxRQUFRLEtBQUssVUFBVSxhQUFhLEtBQUssS0FBSyxRQUFRLFFBQVEsTUFBTSxTQUFTLEtBQUssUUFBUSxRQUFRLFVBQVUsTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxZQUFZLEtBQUssZUFBZSxLQUFLLFFBQVEsV0FBVyxLQUFLLEtBQUssZUFBZSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLE1BQU0sT0FBTyxTQUFTLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxHQUFHLEtBQUssVUFBVSxLQUFLLElBQUksS0FBSyxTQUFTLFNBQVMsTUFBTSxLQUFLLFdBQVcsS0FBSyxJQUFJLEtBQUssVUFBVSxTQUFTLFVBQVUsS0FBSyxVQUFVLFNBQVMsS0FBSyxlQUFlLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsTUFBTSxLQUFLLFdBQVcsS0FBSyxJQUFJLEtBQUssV0FBVyxLQUFLLFNBQVMsU0FBUyxLQUFLLGVBQWUsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxNQUFNLEtBQUssVUFBVSxLQUFLLElBQUksS0FBSyxZQUFZLEtBQUssVUFBVSxTQUFTLFNBQVMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsS0FBSyxPQUFPLEtBQUssUUFBUSxLQUFLLEtBQUssT0FBTyxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksUUFBUSxLQUFLLGVBQWUsU0FBUyxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsS0FB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VTtJQUNsRCxJQUFJLE9BQU87SUFDWCxPQUFPLFNBQVMsTUFBTSxRQUFROzs7Ozs7QUFNbEMsT0FBTyxXQUFXLE9BQU8sV0FBVyxTQUFTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG4gQW5ndWxhckpTIHYxLjQuM1xuIChjKSAyMDEwLTIwMTUgR29vZ2xlLCBJbmMuIGh0dHA6Ly9hbmd1bGFyanMub3JnXG4gTGljZW5zZTogTUlUXG4qL1xuKGZ1bmN0aW9uKEYsdCxXKXsndXNlIHN0cmljdCc7ZnVuY3Rpb24gdWEoYSxiLGMpe2lmKCFhKXRocm93IG5nTWluRXJyKFwiYXJlcVwiLGJ8fFwiP1wiLGN8fFwicmVxdWlyZWRcIik7cmV0dXJuIGF9ZnVuY3Rpb24gdmEoYSxiKXtpZighYSYmIWIpcmV0dXJuXCJcIjtpZighYSlyZXR1cm4gYjtpZighYilyZXR1cm4gYTtYKGEpJiYoYT1hLmpvaW4oXCIgXCIpKTtYKGIpJiYoYj1iLmpvaW4oXCIgXCIpKTtyZXR1cm4gYStcIiBcIitifWZ1bmN0aW9uIEVhKGEpe3ZhciBiPXt9O2EmJihhLnRvfHxhLmZyb20pJiYoYi50bz1hLnRvLGIuZnJvbT1hLmZyb20pO3JldHVybiBifWZ1bmN0aW9uIGJhKGEsYixjKXt2YXIgZD1cIlwiO2E9WChhKT9hOmEmJlUoYSkmJmEubGVuZ3RoP2Euc3BsaXQoL1xccysvKTpbXTt1KGEsZnVuY3Rpb24oYSxzKXthJiYwPGEubGVuZ3RoJiYoZCs9MDxzP1wiIFwiOlwiXCIsZCs9Yz9iK2E6YStiKX0pO3JldHVybiBkfWZ1bmN0aW9uIEZhKGEpe2lmKGEgaW5zdGFuY2VvZiBHKXN3aXRjaChhLmxlbmd0aCl7Y2FzZSAwOnJldHVybltdO1xuY2FzZSAxOmlmKDE9PT1hWzBdLm5vZGVUeXBlKXJldHVybiBhO2JyZWFrO2RlZmF1bHQ6cmV0dXJuIEcoa2EoYSkpfWlmKDE9PT1hLm5vZGVUeXBlKXJldHVybiBHKGEpfWZ1bmN0aW9uIGthKGEpe2lmKCFhWzBdKXJldHVybiBhO2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdO2lmKDE9PWMubm9kZVR5cGUpcmV0dXJuIGN9fWZ1bmN0aW9uIEdhKGEsYixjKXt1KGIsZnVuY3Rpb24oYil7YS5hZGRDbGFzcyhiLGMpfSl9ZnVuY3Rpb24gSGEoYSxiLGMpe3UoYixmdW5jdGlvbihiKXthLnJlbW92ZUNsYXNzKGIsYyl9KX1mdW5jdGlvbiBoYShhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtjLmFkZENsYXNzJiYoR2EoYSxiLGMuYWRkQ2xhc3MpLGMuYWRkQ2xhc3M9bnVsbCk7Yy5yZW1vdmVDbGFzcyYmKEhhKGEsYixjLnJlbW92ZUNsYXNzKSxjLnJlbW92ZUNsYXNzPW51bGwpfX1mdW5jdGlvbiBpYShhKXthPWF8fHt9O2lmKCFhLiQkcHJlcGFyZWQpe3ZhciBiPWEuZG9tT3BlcmF0aW9ufHxcbkg7YS5kb21PcGVyYXRpb249ZnVuY3Rpb24oKXthLiQkZG9tT3BlcmF0aW9uRmlyZWQ9ITA7YigpO2I9SH07YS4kJHByZXBhcmVkPSEwfXJldHVybiBhfWZ1bmN0aW9uIGNhKGEsYil7d2EoYSxiKTt4YShhLGIpfWZ1bmN0aW9uIHdhKGEsYil7Yi5mcm9tJiYoYS5jc3MoYi5mcm9tKSxiLmZyb209bnVsbCl9ZnVuY3Rpb24geGEoYSxiKXtiLnRvJiYoYS5jc3MoYi50byksYi50bz1udWxsKX1mdW5jdGlvbiBSKGEsYixjKXt2YXIgZD0oYi5hZGRDbGFzc3x8XCJcIikrXCIgXCIrKGMuYWRkQ2xhc3N8fFwiXCIpLGU9KGIucmVtb3ZlQ2xhc3N8fFwiXCIpK1wiIFwiKyhjLnJlbW92ZUNsYXNzfHxcIlwiKTthPUlhKGEuYXR0cihcImNsYXNzXCIpLGQsZSk7eWEoYixjKTtiLmFkZENsYXNzPWEuYWRkQ2xhc3M/YS5hZGRDbGFzczpudWxsO2IucmVtb3ZlQ2xhc3M9YS5yZW1vdmVDbGFzcz9hLnJlbW92ZUNsYXNzOm51bGw7cmV0dXJuIGJ9ZnVuY3Rpb24gSWEoYSxiLGMpe2Z1bmN0aW9uIGQoYSl7VShhKSYmKGE9YS5zcGxpdChcIiBcIikpO1xudmFyIGI9e307dShhLGZ1bmN0aW9uKGEpe2EubGVuZ3RoJiYoYlthXT0hMCl9KTtyZXR1cm4gYn12YXIgZT17fTthPWQoYSk7Yj1kKGIpO3UoYixmdW5jdGlvbihhLGIpe2VbYl09MX0pO2M9ZChjKTt1KGMsZnVuY3Rpb24oYSxiKXtlW2JdPTE9PT1lW2JdP251bGw6LTF9KTt2YXIgcz17YWRkQ2xhc3M6XCJcIixyZW1vdmVDbGFzczpcIlwifTt1KGUsZnVuY3Rpb24oYixjKXt2YXIgZCxlOzE9PT1iPyhkPVwiYWRkQ2xhc3NcIixlPSFhW2NdKTotMT09PWImJihkPVwicmVtb3ZlQ2xhc3NcIixlPWFbY10pO2UmJihzW2RdLmxlbmd0aCYmKHNbZF0rPVwiIFwiKSxzW2RdKz1jKX0pO3JldHVybiBzfWZ1bmN0aW9uIHooYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiB0LmVsZW1lbnQ/YVswXTphfWZ1bmN0aW9uIHphKGEsYixjKXt2YXIgZD1PYmplY3QuY3JlYXRlKG51bGwpLGU9YS5nZXRDb21wdXRlZFN0eWxlKGIpfHx7fTt1KGMsZnVuY3Rpb24oYSxiKXt2YXIgYz1lW2FdO2lmKGMpe3ZhciBrPWMuY2hhckF0KDApO1xuaWYoXCItXCI9PT1rfHxcIitcIj09PWt8fDA8PWspYz1KYShjKTswPT09YyYmKGM9bnVsbCk7ZFtiXT1jfX0pO3JldHVybiBkfWZ1bmN0aW9uIEphKGEpe3ZhciBiPTA7YT1hLnNwbGl0KC9cXHMqLFxccyovKTt1KGEsZnVuY3Rpb24oYSl7XCJzXCI9PWEuY2hhckF0KGEubGVuZ3RoLTEpJiYoYT1hLnN1YnN0cmluZygwLGEubGVuZ3RoLTEpKTthPXBhcnNlRmxvYXQoYSl8fDA7Yj1iP01hdGgubWF4KGEsYik6YX0pO3JldHVybiBifWZ1bmN0aW9uIGxhKGEpe3JldHVybiAwPT09YXx8bnVsbCE9YX1mdW5jdGlvbiBBYShhLGIpe3ZhciBjPU8sZD1hK1wic1wiO2I/Yys9XCJEdXJhdGlvblwiOmQrPVwiIGxpbmVhciBhbGxcIjtyZXR1cm5bYyxkXX1mdW5jdGlvbiBqYShhLGIpe3ZhciBjPWI/XCItXCIrYitcInNcIjpcIlwiO2RhKGEsW2VhLGNdKTtyZXR1cm5bZWEsY119ZnVuY3Rpb24gbWEoYSxiKXt2YXIgYz1iP1wicGF1c2VkXCI6XCJcIixkPVYrXCJQbGF5U3RhdGVcIjtkYShhLFtkLGNdKTtyZXR1cm5bZCxjXX1mdW5jdGlvbiBkYShhLFxuYil7YS5zdHlsZVtiWzBdXT1iWzFdfWZ1bmN0aW9uIEJhKCl7dmFyIGE9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57Zmx1c2g6ZnVuY3Rpb24oKXthPU9iamVjdC5jcmVhdGUobnVsbCl9LGNvdW50OmZ1bmN0aW9uKGIpe3JldHVybihiPWFbYl0pP2IudG90YWw6MH0sZ2V0OmZ1bmN0aW9uKGIpe3JldHVybihiPWFbYl0pJiZiLnZhbHVlfSxwdXQ6ZnVuY3Rpb24oYixjKXthW2JdP2FbYl0udG90YWwrKzphW2JdPXt0b3RhbDoxLHZhbHVlOmN9fX19dmFyIEg9dC5ub29wLHlhPXQuZXh0ZW5kLEc9dC5lbGVtZW50LHU9dC5mb3JFYWNoLFg9dC5pc0FycmF5LFU9dC5pc1N0cmluZyxuYT10LmlzT2JqZWN0LEthPXQuaXNVbmRlZmluZWQsTGE9dC5pc0RlZmluZWQsQ2E9dC5pc0Z1bmN0aW9uLG9hPXQuaXNFbGVtZW50LE8scGEsVixxYTtGLm9udHJhbnNpdGlvbmVuZD09PVcmJkYub253ZWJraXR0cmFuc2l0aW9uZW5kIT09Vz8oTz1cIldlYmtpdFRyYW5zaXRpb25cIixwYT1cIndlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZFwiKTpcbihPPVwidHJhbnNpdGlvblwiLHBhPVwidHJhbnNpdGlvbmVuZFwiKTtGLm9uYW5pbWF0aW9uZW5kPT09VyYmRi5vbndlYmtpdGFuaW1hdGlvbmVuZCE9PVc/KFY9XCJXZWJraXRBbmltYXRpb25cIixxYT1cIndlYmtpdEFuaW1hdGlvbkVuZCBhbmltYXRpb25lbmRcIik6KFY9XCJhbmltYXRpb25cIixxYT1cImFuaW1hdGlvbmVuZFwiKTt2YXIgcmE9VitcIkRlbGF5XCIsc2E9VitcIkR1cmF0aW9uXCIsZWE9TytcIkRlbGF5XCI7Rj1PK1wiRHVyYXRpb25cIjt2YXIgTWE9e3RyYW5zaXRpb25EdXJhdGlvbjpGLHRyYW5zaXRpb25EZWxheTplYSx0cmFuc2l0aW9uUHJvcGVydHk6TytcIlByb3BlcnR5XCIsYW5pbWF0aW9uRHVyYXRpb246c2EsYW5pbWF0aW9uRGVsYXk6cmEsYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6VitcIkl0ZXJhdGlvbkNvdW50XCJ9LE5hPXt0cmFuc2l0aW9uRHVyYXRpb246Rix0cmFuc2l0aW9uRGVsYXk6ZWEsYW5pbWF0aW9uRHVyYXRpb246c2EsYW5pbWF0aW9uRGVsYXk6cmF9O3QubW9kdWxlKFwibmdBbmltYXRlXCIsXG5bXSkuZGlyZWN0aXZlKFwibmdBbmltYXRlQ2hpbGRyZW5cIixbZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oYSxiLGMpe2E9Yy5uZ0FuaW1hdGVDaGlsZHJlbjt0LmlzU3RyaW5nKGEpJiYwPT09YS5sZW5ndGg/Yi5kYXRhKFwiJCRuZ0FuaW1hdGVDaGlsZHJlblwiLCEwKTpjLiRvYnNlcnZlKFwibmdBbmltYXRlQ2hpbGRyZW5cIixmdW5jdGlvbihhKXtiLmRhdGEoXCIkJG5nQW5pbWF0ZUNoaWxkcmVuXCIsXCJvblwiPT09YXx8XCJ0cnVlXCI9PT1hKX0pfX1dKS5mYWN0b3J5KFwiJCRyQUZNdXRleFwiLFtcIiQkckFGXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGI9ITE7YShmdW5jdGlvbigpe2I9ITB9KTtyZXR1cm4gZnVuY3Rpb24oYyl7Yj9jKCk6YShjKX19fV0pLmZhY3RvcnkoXCIkJHJBRlNjaGVkdWxlclwiLFtcIiQkckFGXCIsZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhKXtkLnB1c2goW10uY29uY2F0KGEpKTtjKCl9ZnVuY3Rpb24gYygpe2lmKGQubGVuZ3RoKXtmb3IodmFyIGI9W10sbj1cbjA7bjxkLmxlbmd0aDtuKyspe3ZhciBoPWRbbl07aC5zaGlmdCgpKCk7aC5sZW5ndGgmJmIucHVzaChoKX1kPWI7ZXx8YShmdW5jdGlvbigpe2V8fGMoKX0pfX12YXIgZD1bXSxlO2Iud2FpdFVudGlsUXVpZXQ9ZnVuY3Rpb24oYil7ZSYmZSgpO2U9YShmdW5jdGlvbigpe2U9bnVsbDtiKCk7YygpfSl9O3JldHVybiBifV0pLmZhY3RvcnkoXCIkJEFuaW1hdGVSdW5uZXJcIixbXCIkcVwiLFwiJCRyQUZNdXRleFwiLGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhKXt0aGlzLnNldEhvc3QoYSk7dGhpcy5fZG9uZUNhbGxiYWNrcz1bXTt0aGlzLl9ydW5JbkFuaW1hdGlvbkZyYW1lPWIoKTt0aGlzLl9zdGF0ZT0wfWMuY2hhaW49ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKCl7aWYobj09PWEubGVuZ3RoKWIoITApO2Vsc2UgYVtuXShmdW5jdGlvbihhKXshMT09PWE/YighMSk6KG4rKyxjKCkpfSl9dmFyIG49MDtjKCl9O2MuYWxsPWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhzKXtoPWgmJnM7KytuPT09XG5hLmxlbmd0aCYmYihoKX12YXIgbj0wLGg9ITA7dShhLGZ1bmN0aW9uKGEpe2EuZG9uZShjKX0pfTtjLnByb3RvdHlwZT17c2V0SG9zdDpmdW5jdGlvbihhKXt0aGlzLmhvc3Q9YXx8e319LGRvbmU6ZnVuY3Rpb24oYSl7Mj09PXRoaXMuX3N0YXRlP2EoKTp0aGlzLl9kb25lQ2FsbGJhY2tzLnB1c2goYSl9LHByb2dyZXNzOkgsZ2V0UHJvbWlzZTpmdW5jdGlvbigpe2lmKCF0aGlzLnByb21pc2Upe3ZhciBiPXRoaXM7dGhpcy5wcm9taXNlPWEoZnVuY3Rpb24oYSxjKXtiLmRvbmUoZnVuY3Rpb24oYil7ITE9PT1iP2MoKTphKCl9KX0pfXJldHVybiB0aGlzLnByb21pc2V9LHRoZW46ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5nZXRQcm9taXNlKCkudGhlbihhLGIpfSxcImNhdGNoXCI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZ2V0UHJvbWlzZSgpW1wiY2F0Y2hcIl0oYSl9LFwiZmluYWxseVwiOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmdldFByb21pc2UoKVtcImZpbmFsbHlcIl0oYSl9LHBhdXNlOmZ1bmN0aW9uKCl7dGhpcy5ob3N0LnBhdXNlJiZcbnRoaXMuaG9zdC5wYXVzZSgpfSxyZXN1bWU6ZnVuY3Rpb24oKXt0aGlzLmhvc3QucmVzdW1lJiZ0aGlzLmhvc3QucmVzdW1lKCl9LGVuZDpmdW5jdGlvbigpe3RoaXMuaG9zdC5lbmQmJnRoaXMuaG9zdC5lbmQoKTt0aGlzLl9yZXNvbHZlKCEwKX0sY2FuY2VsOmZ1bmN0aW9uKCl7dGhpcy5ob3N0LmNhbmNlbCYmdGhpcy5ob3N0LmNhbmNlbCgpO3RoaXMuX3Jlc29sdmUoITEpfSxjb21wbGV0ZTpmdW5jdGlvbihhKXt2YXIgYj10aGlzOzA9PT1iLl9zdGF0ZSYmKGIuX3N0YXRlPTEsYi5fcnVuSW5BbmltYXRpb25GcmFtZShmdW5jdGlvbigpe2IuX3Jlc29sdmUoYSl9KSl9LF9yZXNvbHZlOmZ1bmN0aW9uKGEpezIhPT10aGlzLl9zdGF0ZSYmKHUodGhpcy5fZG9uZUNhbGxiYWNrcyxmdW5jdGlvbihiKXtiKGEpfSksdGhpcy5fZG9uZUNhbGxiYWNrcy5sZW5ndGg9MCx0aGlzLl9zdGF0ZT0yKX19O3JldHVybiBjfV0pLnByb3ZpZGVyKFwiJCRhbmltYXRlUXVldWVcIixbXCIkYW5pbWF0ZVByb3ZpZGVyXCIsXG5mdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEsYixjLGgpe3JldHVybiBkW2FdLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIGEoYixjLGgpfSl9ZnVuY3Rpb24gYyhhLGIpe2E9YXx8e307dmFyIGM9MDwoYS5hZGRDbGFzc3x8XCJcIikubGVuZ3RoLGQ9MDwoYS5yZW1vdmVDbGFzc3x8XCJcIikubGVuZ3RoO3JldHVybiBiP2MmJmQ6Y3x8ZH12YXIgZD10aGlzLnJ1bGVzPXtza2lwOltdLGNhbmNlbDpbXSxqb2luOltdfTtkLmpvaW4ucHVzaChmdW5jdGlvbihhLGIsZCl7cmV0dXJuIWIuc3RydWN0dXJhbCYmYyhiLm9wdGlvbnMpfSk7ZC5za2lwLnB1c2goZnVuY3Rpb24oYSxiLGQpe3JldHVybiFiLnN0cnVjdHVyYWwmJiFjKGIub3B0aW9ucyl9KTtkLnNraXAucHVzaChmdW5jdGlvbihhLGIsYyl7cmV0dXJuXCJsZWF2ZVwiPT1jLmV2ZW50JiZiLnN0cnVjdHVyYWx9KTtkLnNraXAucHVzaChmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGMuc3RydWN0dXJhbCYmIWIuc3RydWN0dXJhbH0pO2QuY2FuY2VsLnB1c2goZnVuY3Rpb24oYSxcbmIsYyl7cmV0dXJuIGMuc3RydWN0dXJhbCYmYi5zdHJ1Y3R1cmFsfSk7ZC5jYW5jZWwucHVzaChmdW5jdGlvbihhLGIsYyl7cmV0dXJuIDI9PT1jLnN0YXRlJiZiLnN0cnVjdHVyYWx9KTtkLmNhbmNlbC5wdXNoKGZ1bmN0aW9uKGEsYixjKXthPWIub3B0aW9ucztjPWMub3B0aW9ucztyZXR1cm4gYS5hZGRDbGFzcyYmYS5hZGRDbGFzcz09PWMucmVtb3ZlQ2xhc3N8fGEucmVtb3ZlQ2xhc3MmJmEucmVtb3ZlQ2xhc3M9PT1jLmFkZENsYXNzfSk7dGhpcy4kZ2V0PVtcIiQkckFGXCIsXCIkcm9vdFNjb3BlXCIsXCIkcm9vdEVsZW1lbnRcIixcIiRkb2N1bWVudFwiLFwiJCRIYXNoTWFwXCIsXCIkJGFuaW1hdGlvblwiLFwiJCRBbmltYXRlUnVubmVyXCIsXCIkdGVtcGxhdGVSZXF1ZXN0XCIsXCIkJGpxTGl0ZVwiLGZ1bmN0aW9uKGQscyxuLGgsayxELEEsWixJKXtmdW5jdGlvbiB3KGEsYil7dmFyIGM9eihhKSxmPVtdLG09bFtiXTttJiZ1KG0sZnVuY3Rpb24oYSl7YS5ub2RlLmNvbnRhaW5zKGMpJiZmLnB1c2goYS5jYWxsYmFjayl9KTtcbnJldHVybiBmfWZ1bmN0aW9uIEIoYSxiLGMsZil7ZChmdW5jdGlvbigpe3UodyhiLGEpLGZ1bmN0aW9uKGEpe2EoYixjLGYpfSl9KX1mdW5jdGlvbiByKGEsUyxwKXtmdW5jdGlvbiBkKGIsYyxmLHApe0IoYyxhLGYscCk7Yi5wcm9ncmVzcyhjLGYscCl9ZnVuY3Rpb24gZyhiKXtEYShhLHApO2NhKGEscCk7cC5kb21PcGVyYXRpb24oKTtsLmNvbXBsZXRlKCFiKX12YXIgUCxFO2lmKGE9RmEoYSkpUD16KGEpLEU9YS5wYXJlbnQoKTtwPWlhKHApO3ZhciBsPW5ldyBBO2lmKCFQKXJldHVybiBnKCksbDtYKHAuYWRkQ2xhc3MpJiYocC5hZGRDbGFzcz1wLmFkZENsYXNzLmpvaW4oXCIgXCIpKTtYKHAucmVtb3ZlQ2xhc3MpJiYocC5yZW1vdmVDbGFzcz1wLnJlbW92ZUNsYXNzLmpvaW4oXCIgXCIpKTtwLmZyb20mJiFuYShwLmZyb20pJiYocC5mcm9tPW51bGwpO3AudG8mJiFuYShwLnRvKSYmKHAudG89bnVsbCk7dmFyIGU9W1AuY2xhc3NOYW1lLHAuYWRkQ2xhc3MscC5yZW1vdmVDbGFzc10uam9pbihcIiBcIik7XG5pZighdihlKSlyZXR1cm4gZygpLGw7dmFyIE09MDw9W1wiZW50ZXJcIixcIm1vdmVcIixcImxlYXZlXCJdLmluZGV4T2YoUyksaD0heHx8TC5nZXQoUCksZT0haCYmbS5nZXQoUCl8fHt9LGs9ISFlLnN0YXRlO2h8fGsmJjE9PWUuc3RhdGV8fChoPSF0YShhLEUsUykpO2lmKGgpcmV0dXJuIGcoKSxsO00mJksoYSk7aD17c3RydWN0dXJhbDpNLGVsZW1lbnQ6YSxldmVudDpTLGNsb3NlOmcsb3B0aW9uczpwLHJ1bm5lcjpsfTtpZihrKXtpZihiKFwic2tpcFwiLGEsaCxlKSl7aWYoMj09PWUuc3RhdGUpcmV0dXJuIGcoKSxsO1IoYSxlLm9wdGlvbnMscCk7cmV0dXJuIGUucnVubmVyfWlmKGIoXCJjYW5jZWxcIixhLGgsZSkpMj09PWUuc3RhdGU/ZS5ydW5uZXIuZW5kKCk6ZS5zdHJ1Y3R1cmFsP2UuY2xvc2UoKTpSKGEsaC5vcHRpb25zLGUub3B0aW9ucyk7ZWxzZSBpZihiKFwiam9pblwiLGEsaCxlKSlpZigyPT09ZS5zdGF0ZSlSKGEscCx7fSk7ZWxzZSByZXR1cm4gUz1oLmV2ZW50PWUuZXZlbnQscD1SKGEsXG5lLm9wdGlvbnMsaC5vcHRpb25zKSxsfWVsc2UgUihhLHAse30pOyhrPWguc3RydWN0dXJhbCl8fChrPVwiYW5pbWF0ZVwiPT09aC5ldmVudCYmMDxPYmplY3Qua2V5cyhoLm9wdGlvbnMudG98fHt9KS5sZW5ndGh8fGMoaC5vcHRpb25zKSk7aWYoIWspcmV0dXJuIGcoKSxDKGEpLGw7TSYmZihFKTt2YXIgcj0oZS5jb3VudGVyfHwwKSsxO2guY291bnRlcj1yO2dhKGEsMSxoKTtzLiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe3ZhciBiPW0uZ2V0KFApLHY9IWIsYj1ifHx7fSxlPWEucGFyZW50KCl8fFtdLEU9MDxlLmxlbmd0aCYmKFwiYW5pbWF0ZVwiPT09Yi5ldmVudHx8Yi5zdHJ1Y3R1cmFsfHxjKGIub3B0aW9ucykpO2lmKHZ8fGIuY291bnRlciE9PXJ8fCFFKXt2JiYoRGEoYSxwKSxjYShhLHApKTtpZih2fHxNJiZiLmV2ZW50IT09UylwLmRvbU9wZXJhdGlvbigpLGwuZW5kKCk7RXx8QyhhKX1lbHNlIFM9IWIuc3RydWN0dXJhbCYmYyhiLm9wdGlvbnMsITApP1wic2V0Q2xhc3NcIjpiLmV2ZW50LFxuYi5zdHJ1Y3R1cmFsJiZmKGUpLGdhKGEsMiksYj1EKGEsUyxiLm9wdGlvbnMpLGIuZG9uZShmdW5jdGlvbihiKXtnKCFiKTsoYj1tLmdldChQKSkmJmIuY291bnRlcj09PXImJkMoeihhKSk7ZChsLFMsXCJjbG9zZVwiLHt9KX0pLGwuc2V0SG9zdChiKSxkKGwsUyxcInN0YXJ0XCIse30pfSk7cmV0dXJuIGx9ZnVuY3Rpb24gSyhhKXthPXooYSkucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW5nLWFuaW1hdGVdXCIpO3UoYSxmdW5jdGlvbihhKXt2YXIgYj1wYXJzZUludChhLmdldEF0dHJpYnV0ZShcImRhdGEtbmctYW5pbWF0ZVwiKSksYz1tLmdldChhKTtzd2l0Y2goYil7Y2FzZSAyOmMucnVubmVyLmVuZCgpO2Nhc2UgMTpjJiZtLnJlbW92ZShhKX19KX1mdW5jdGlvbiBDKGEpe2E9eihhKTthLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtbmctYW5pbWF0ZVwiKTttLnJlbW92ZShhKX1mdW5jdGlvbiBFKGEsYil7cmV0dXJuIHooYSk9PT16KGIpfWZ1bmN0aW9uIGYoYSl7YT16KGEpO2Rve2lmKCFhfHwxIT09XG5hLm5vZGVUeXBlKWJyZWFrO3ZhciBiPW0uZ2V0KGEpO2lmKGIpe3ZhciBmPWE7IWIuc3RydWN0dXJhbCYmYyhiLm9wdGlvbnMpJiYoMj09PWIuc3RhdGUmJmIucnVubmVyLmVuZCgpLEMoZikpfWE9YS5wYXJlbnROb2RlfXdoaWxlKDEpfWZ1bmN0aW9uIHRhKGEsYixjKXt2YXIgZj1jPSExLGQ9ITEsdjtmb3IoKGE9YS5kYXRhKFwiJG5nQW5pbWF0ZVBpblwiKSkmJihiPWEpO2ImJmIubGVuZ3RoOyl7Znx8KGY9RShiLG4pKTthPWJbMF07aWYoMSE9PWEubm9kZVR5cGUpYnJlYWs7dmFyIGU9bS5nZXQoYSl8fHt9O2R8fChkPWUuc3RydWN0dXJhbHx8TC5nZXQoYSkpO2lmKEthKHYpfHwhMD09PXYpYT1iLmRhdGEoXCIkJG5nQW5pbWF0ZUNoaWxkcmVuXCIpLExhKGEpJiYodj1hKTtpZihkJiYhMT09PXYpYnJlYWs7Znx8KGY9RShiLG4pLGZ8fChhPWIuZGF0YShcIiRuZ0FuaW1hdGVQaW5cIikpJiYoYj1hKSk7Y3x8KGM9RShiLGcpKTtiPWIucGFyZW50KCl9cmV0dXJuKCFkfHx2KSYmZiYmY31mdW5jdGlvbiBnYShhLFxuYixjKXtjPWN8fHt9O2Muc3RhdGU9YjthPXooYSk7YS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5nLWFuaW1hdGVcIixiKTtjPShiPW0uZ2V0KGEpKT95YShiLGMpOmM7bS5wdXQoYSxjKX12YXIgbT1uZXcgayxMPW5ldyBrLHg9bnVsbCxNPXMuJHdhdGNoKGZ1bmN0aW9uKCl7cmV0dXJuIDA9PT1aLnRvdGFsUGVuZGluZ1JlcXVlc3RzfSxmdW5jdGlvbihhKXthJiYoTSgpLHMuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7cy4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXtudWxsPT09eCYmKHg9ITApfSl9KSl9KSxnPUcoaFswXS5ib2R5KSxsPXt9LFA9YS5jbGFzc05hbWVGaWx0ZXIoKSx2PVA/ZnVuY3Rpb24oYSl7cmV0dXJuIFAudGVzdChhKX06ZnVuY3Rpb24oKXtyZXR1cm4hMH0sRGE9aGEoSSk7cmV0dXJue29uOmZ1bmN0aW9uKGEsYixjKXtiPWthKGIpO2xbYV09bFthXXx8W107bFthXS5wdXNoKHtub2RlOmIsY2FsbGJhY2s6Y30pfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIGYoYSxcbmIsYyl7dmFyIGQ9a2EoYik7cmV0dXJuIGEuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiEoYS5ub2RlPT09ZCYmKCFjfHxhLmNhbGxiYWNrPT09YykpfSl9dmFyIGQ9bFthXTtkJiYobFthXT0xPT09YXJndW1lbnRzLmxlbmd0aD9udWxsOmYoZCxiLGMpKX0scGluOmZ1bmN0aW9uKGEsYil7dWEob2EoYSksXCJlbGVtZW50XCIsXCJub3QgYW4gZWxlbWVudFwiKTt1YShvYShiKSxcInBhcmVudEVsZW1lbnRcIixcIm5vdCBhbiBlbGVtZW50XCIpO2EuZGF0YShcIiRuZ0FuaW1hdGVQaW5cIixiKX0scHVzaDpmdW5jdGlvbihhLGIsYyxmKXtjPWN8fHt9O2MuZG9tT3BlcmF0aW9uPWY7cmV0dXJuIHIoYSxiLGMpfSxlbmFibGVkOmZ1bmN0aW9uKGEsYil7dmFyIGM9YXJndW1lbnRzLmxlbmd0aDtpZigwPT09YyliPSEheDtlbHNlIGlmKG9hKGEpKXt2YXIgZj16KGEpLGQ9TC5nZXQoZik7MT09PWM/Yj0hZDooYj0hIWIpP2QmJkwucmVtb3ZlKGYpOkwucHV0KGYsITApfWVsc2UgYj14PSEhYTtyZXR1cm4gYn19fV19XSkucHJvdmlkZXIoXCIkJGFuaW1hdGlvblwiLFxuW1wiJGFuaW1hdGVQcm92aWRlclwiLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSl7cmV0dXJuIGEuZGF0YShcIiQkYW5pbWF0aW9uUnVubmVyXCIpfXZhciBjPXRoaXMuZHJpdmVycz1bXTt0aGlzLiRnZXQ9W1wiJCRqcUxpdGVcIixcIiRyb290U2NvcGVcIixcIiRpbmplY3RvclwiLFwiJCRBbmltYXRlUnVubmVyXCIsXCIkJHJBRlNjaGVkdWxlclwiLGZ1bmN0aW9uKGEsZSxzLG4saCl7dmFyIGs9W10sRD1oYShhKSxBPTAsWj0wLEk9W107cmV0dXJuIGZ1bmN0aW9uKHcsQixyKXtmdW5jdGlvbiBLKGEpe2E9YS5oYXNBdHRyaWJ1dGUoXCJuZy1hbmltYXRlLXJlZlwiKT9bYV06YS5xdWVyeVNlbGVjdG9yQWxsKFwiW25nLWFuaW1hdGUtcmVmXVwiKTt2YXIgYj1bXTt1KGEsZnVuY3Rpb24oYSl7dmFyIGM9YS5nZXRBdHRyaWJ1dGUoXCJuZy1hbmltYXRlLXJlZlwiKTtjJiZjLmxlbmd0aCYmYi5wdXNoKGEpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gQyhhKXt2YXIgYj1bXSxjPXt9O3UoYSxmdW5jdGlvbihhLGYpe3ZhciBkPXooYS5lbGVtZW50KSxcbm09MDw9W1wiZW50ZXJcIixcIm1vdmVcIl0uaW5kZXhPZihhLmV2ZW50KSxkPWEuc3RydWN0dXJhbD9LKGQpOltdO2lmKGQubGVuZ3RoKXt2YXIgZz1tP1widG9cIjpcImZyb21cIjt1KGQsZnVuY3Rpb24oYSl7dmFyIGI9YS5nZXRBdHRyaWJ1dGUoXCJuZy1hbmltYXRlLXJlZlwiKTtjW2JdPWNbYl18fHt9O2NbYl1bZ109e2FuaW1hdGlvbklEOmYsZWxlbWVudDpHKGEpfX0pfWVsc2UgYi5wdXNoKGEpfSk7dmFyIGY9e30sZD17fTt1KGMsZnVuY3Rpb24oYyxtKXt2YXIgZz1jLmZyb20sZT1jLnRvO2lmKGcmJmUpe3ZhciBsPWFbZy5hbmltYXRpb25JRF0saD1hW2UuYW5pbWF0aW9uSURdLHg9Zy5hbmltYXRpb25JRC50b1N0cmluZygpO2lmKCFkW3hdKXt2YXIgQj1kW3hdPXtzdHJ1Y3R1cmFsOiEwLGJlZm9yZVN0YXJ0OmZ1bmN0aW9uKCl7bC5iZWZvcmVTdGFydCgpO2guYmVmb3JlU3RhcnQoKX0sY2xvc2U6ZnVuY3Rpb24oKXtsLmNsb3NlKCk7aC5jbG9zZSgpfSxjbGFzc2VzOkUobC5jbGFzc2VzLGguY2xhc3NlcyksXG5mcm9tOmwsdG86aCxhbmNob3JzOltdfTtCLmNsYXNzZXMubGVuZ3RoP2IucHVzaChCKTooYi5wdXNoKGwpLGIucHVzaChoKSl9ZFt4XS5hbmNob3JzLnB1c2goe291dDpnLmVsZW1lbnQsXCJpblwiOmUuZWxlbWVudH0pfWVsc2UgZz1nP2cuYW5pbWF0aW9uSUQ6ZS5hbmltYXRpb25JRCxlPWcudG9TdHJpbmcoKSxmW2VdfHwoZltlXT0hMCxiLnB1c2goYVtnXSkpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gRShhLGIpe2E9YS5zcGxpdChcIiBcIik7Yj1iLnNwbGl0KFwiIFwiKTtmb3IodmFyIGM9W10sZj0wO2Y8YS5sZW5ndGg7ZisrKXt2YXIgZD1hW2ZdO2lmKFwibmctXCIhPT1kLnN1YnN0cmluZygwLDMpKWZvcih2YXIgZz0wO2c8Yi5sZW5ndGg7ZysrKWlmKGQ9PT1iW2ddKXtjLnB1c2goZCk7YnJlYWt9fXJldHVybiBjLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIGYoYSl7Zm9yKHZhciBiPWMubGVuZ3RoLTE7MDw9YjtiLS0pe3ZhciBmPWNbYl07aWYocy5oYXMoZikmJihmPXMuZ2V0KGYpKGEpKSlyZXR1cm4gZn19XG5mdW5jdGlvbiB0YShhLGMpe2EuZnJvbSYmYS50bz8oYihhLmZyb20uZWxlbWVudCkuc2V0SG9zdChjKSxiKGEudG8uZWxlbWVudCkuc2V0SG9zdChjKSk6YihhLmVsZW1lbnQpLnNldEhvc3QoYyl9ZnVuY3Rpb24gZ2EoKXt2YXIgYT1iKHcpOyFhfHxcImxlYXZlXCI9PT1CJiZyLiQkZG9tT3BlcmF0aW9uRmlyZWR8fGEuZW5kKCl9ZnVuY3Rpb24gbShiKXt3Lm9mZihcIiRkZXN0cm95XCIsZ2EpO3cucmVtb3ZlRGF0YShcIiQkYW5pbWF0aW9uUnVubmVyXCIpO0QodyxyKTtjYSh3LHIpO3IuZG9tT3BlcmF0aW9uKCk7ZyYmYS5yZW1vdmVDbGFzcyh3LGcpO3cucmVtb3ZlQ2xhc3MoXCJuZy1hbmltYXRlXCIpO3guY29tcGxldGUoIWIpfXI9aWEocik7dmFyIEw9MDw9W1wiZW50ZXJcIixcIm1vdmVcIixcImxlYXZlXCJdLmluZGV4T2YoQikseD1uZXcgbih7ZW5kOmZ1bmN0aW9uKCl7bSgpfSxjYW5jZWw6ZnVuY3Rpb24oKXttKCEwKX19KTtpZighYy5sZW5ndGgpcmV0dXJuIG0oKSx4O3cuZGF0YShcIiQkYW5pbWF0aW9uUnVubmVyXCIsXG54KTt2YXIgTT12YSh3LmF0dHIoXCJjbGFzc1wiKSx2YShyLmFkZENsYXNzLHIucmVtb3ZlQ2xhc3MpKSxnPXIudGVtcENsYXNzZXM7ZyYmKE0rPVwiIFwiK2csci50ZW1wQ2xhc3Nlcz1udWxsKTt2YXIgbDtMfHwobD1BLEErPTEpO2sucHVzaCh7ZWxlbWVudDp3LGNsYXNzZXM6TSxldmVudDpCLGNsYXNzQmFzZWRJbmRleDpsLHN0cnVjdHVyYWw6TCxvcHRpb25zOnIsYmVmb3JlU3RhcnQ6ZnVuY3Rpb24oKXt3LmFkZENsYXNzKFwibmctYW5pbWF0ZVwiKTtnJiZhLmFkZENsYXNzKHcsZyl9LGNsb3NlOm19KTt3Lm9uKFwiJGRlc3Ryb3lcIixnYSk7aWYoMTxrLmxlbmd0aClyZXR1cm4geDtlLiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe1o9QTtBPTA7SS5sZW5ndGg9MDt2YXIgYT1bXTt1KGssZnVuY3Rpb24oYyl7YihjLmVsZW1lbnQpJiZhLnB1c2goYyl9KTtrLmxlbmd0aD0wO3UoQyhhKSxmdW5jdGlvbihhKXtmdW5jdGlvbiBjKCl7YS5iZWZvcmVTdGFydCgpO3ZhciBkLGc9YS5jbG9zZSxlPWEuYW5jaG9ycz9cbmEuZnJvbS5lbGVtZW50fHxhLnRvLmVsZW1lbnQ6YS5lbGVtZW50O2IoZSkmJnooZSkucGFyZW50Tm9kZSYmKGU9ZihhKSkmJihkPWUuc3RhcnQpO2Q/KGQ9ZCgpLGQuZG9uZShmdW5jdGlvbihhKXtnKCFhKX0pLHRhKGEsZCkpOmcoKX1hLnN0cnVjdHVyYWw/YygpOihJLnB1c2goe25vZGU6eihhLmVsZW1lbnQpLGZuOmN9KSxhLmNsYXNzQmFzZWRJbmRleD09PVotMSYmKEk9SS5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGIubm9kZS5jb250YWlucyhhLm5vZGUpfSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLmZufSksaChJKSkpfSl9KTtyZXR1cm4geH19XX1dKS5wcm92aWRlcihcIiRhbmltYXRlQ3NzXCIsW1wiJGFuaW1hdGVQcm92aWRlclwiLGZ1bmN0aW9uKGEpe3ZhciBiPUJhKCksYz1CYSgpO3RoaXMuJGdldD1bXCIkd2luZG93XCIsXCIkJGpxTGl0ZVwiLFwiJCRBbmltYXRlUnVubmVyXCIsXCIkdGltZW91dFwiLFwiJGRvY3VtZW50XCIsXCIkc25pZmZlclwiLFwiJCRyQUZTY2hlZHVsZXJcIixmdW5jdGlvbihhLFxuZSxzLG4saCxrLEQpe2Z1bmN0aW9uIEEoYSxiKXt2YXIgYz1hLnBhcmVudE5vZGU7cmV0dXJuKGMuJCRuZ0FuaW1hdGVQYXJlbnRLZXl8fChjLiQkbmdBbmltYXRlUGFyZW50S2V5PSsrcikpK1wiLVwiK2EuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikrXCItXCIrYn1mdW5jdGlvbiBaKGgsZixCLGspe3ZhciBtOzA8Yi5jb3VudChCKSYmKG09Yy5nZXQoQiksbXx8KGY9YmEoZixcIi1zdGFnZ2VyXCIpLGUuYWRkQ2xhc3MoaCxmKSxtPXphKGEsaCxrKSxtLmFuaW1hdGlvbkR1cmF0aW9uPU1hdGgubWF4KG0uYW5pbWF0aW9uRHVyYXRpb24sMCksbS50cmFuc2l0aW9uRHVyYXRpb249TWF0aC5tYXgobS50cmFuc2l0aW9uRHVyYXRpb24sMCksZS5yZW1vdmVDbGFzcyhoLGYpLGMucHV0KEIsbSkpKTtyZXR1cm4gbXx8e319ZnVuY3Rpb24gSShhKXtDLnB1c2goYSk7RC53YWl0VW50aWxRdWlldChmdW5jdGlvbigpe2IuZmx1c2goKTtjLmZsdXNoKCk7Zm9yKHZhciBhPUsub2Zmc2V0V2lkdGgrMSxkPTA7ZDxcbkMubGVuZ3RoO2QrKylDW2RdKGEpO0MubGVuZ3RoPTB9KX1mdW5jdGlvbiB3KGMsZixlKXtmPWIuZ2V0KGUpO2Z8fChmPXphKGEsYyxNYSksXCJpbmZpbml0ZVwiPT09Zi5hbmltYXRpb25JdGVyYXRpb25Db3VudCYmKGYuYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ9MSkpO2IucHV0KGUsZik7Yz1mO2U9Yy5hbmltYXRpb25EZWxheTtmPWMudHJhbnNpdGlvbkRlbGF5O2MubWF4RGVsYXk9ZSYmZj9NYXRoLm1heChlLGYpOmV8fGY7Yy5tYXhEdXJhdGlvbj1NYXRoLm1heChjLmFuaW1hdGlvbkR1cmF0aW9uKmMuYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQsYy50cmFuc2l0aW9uRHVyYXRpb24pO3JldHVybiBjfXZhciBCPWhhKGUpLHI9MCxLPXooaCkuYm9keSxDPVtdO3JldHVybiBmdW5jdGlvbihhLGMpe2Z1bmN0aW9uIGQoKXttKCl9ZnVuY3Rpb24gaCgpe20oITApfWZ1bmN0aW9uIG0oYil7aWYoIShLfHxDJiZEKSl7Sz0hMDtEPSExO2UucmVtb3ZlQ2xhc3MoYSxZKTtlLnJlbW92ZUNsYXNzKGEsXG5XKTttYShnLCExKTtqYShnLCExKTt1KGwsZnVuY3Rpb24oYSl7Zy5zdHlsZVthWzBdXT1cIlwifSk7QihhLGMpO2NhKGEsYyk7aWYoYy5vbkRvbmUpYy5vbkRvbmUoKTtwJiZwLmNvbXBsZXRlKCFiKX19ZnVuY3Rpb24gTChhKXtxLmJsb2NrVHJhbnNpdGlvbiYmamEoZyxhKTtxLmJsb2NrS2V5ZnJhbWVBbmltYXRpb24mJm1hKGcsISFhKX1mdW5jdGlvbiB4KCl7cD1uZXcgcyh7ZW5kOmQsY2FuY2VsOmh9KTttKCk7cmV0dXJueyQkd2lsbEFuaW1hdGU6ITEsc3RhcnQ6ZnVuY3Rpb24oKXtyZXR1cm4gcH0sZW5kOmR9fWZ1bmN0aW9uIE0oKXtmdW5jdGlvbiBiKCl7aWYoIUspe0woITEpO3UobCxmdW5jdGlvbihhKXtnLnN0eWxlW2FbMF1dPWFbMV19KTtCKGEsYyk7ZS5hZGRDbGFzcyhhLFcpO2lmKHEucmVjYWxjdWxhdGVUaW1pbmdTdHlsZXMpe2ZhPWcuY2xhc3NOYW1lK1wiIFwiK1k7JD1BKGcsZmEpO3k9dyhnLGZhLCQpO1E9eS5tYXhEZWxheTtIPU1hdGgubWF4KFEsMCk7Sj15Lm1heER1cmF0aW9uO1xuaWYoMD09PUope20oKTtyZXR1cm59cS5oYXNUcmFuc2l0aW9ucz0wPHkudHJhbnNpdGlvbkR1cmF0aW9uO3EuaGFzQW5pbWF0aW9ucz0wPHkuYW5pbWF0aW9uRHVyYXRpb259aWYocS5hcHBseVRyYW5zaXRpb25EZWxheXx8cS5hcHBseUFuaW1hdGlvbkRlbGF5KXtRPVwiYm9vbGVhblwiIT09dHlwZW9mIGMuZGVsYXkmJmxhKGMuZGVsYXkpP3BhcnNlRmxvYXQoYy5kZWxheSk6UTtIPU1hdGgubWF4KFEsMCk7dmFyIGs7cS5hcHBseVRyYW5zaXRpb25EZWxheSYmKHkudHJhbnNpdGlvbkRlbGF5PVEsaz1bZWEsUStcInNcIl0sbC5wdXNoKGspLGcuc3R5bGVba1swXV09a1sxXSk7cS5hcHBseUFuaW1hdGlvbkRlbGF5JiYoeS5hbmltYXRpb25EZWxheT1RLGs9W3JhLFErXCJzXCJdLGwucHVzaChrKSxnLnN0eWxlW2tbMF1dPWtbMV0pfUY9MUUzKkg7Rz0xRTMqSjtpZihjLmVhc2luZyl7dmFyIHI9Yy5lYXNpbmc7cS5oYXNUcmFuc2l0aW9ucyYmKGs9TytcIlRpbWluZ0Z1bmN0aW9uXCIsbC5wdXNoKFtrLFxucl0pLGcuc3R5bGVba109cik7cS5oYXNBbmltYXRpb25zJiYoaz1WK1wiVGltaW5nRnVuY3Rpb25cIixsLnB1c2goW2sscl0pLGcuc3R5bGVba109cil9eS50cmFuc2l0aW9uRHVyYXRpb24mJnAucHVzaChwYSk7eS5hbmltYXRpb25EdXJhdGlvbiYmcC5wdXNoKHFhKTt4PURhdGUubm93KCk7YS5vbihwLmpvaW4oXCIgXCIpLGgpO24oZCxGKzEuNSpHKTt4YShhLGMpfX1mdW5jdGlvbiBkKCl7bSgpfWZ1bmN0aW9uIGgoYSl7YS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgYj1hLm9yaWdpbmFsRXZlbnR8fGE7YT1iLiRtYW51YWxUaW1lU3RhbXB8fGIudGltZVN0YW1wfHxEYXRlLm5vdygpO2I9cGFyc2VGbG9hdChiLmVsYXBzZWRUaW1lLnRvRml4ZWQoMykpO01hdGgubWF4KGEteCwwKT49RiYmYj49SiYmKEM9ITAsbSgpKX1pZighSylpZihnLnBhcmVudE5vZGUpe3ZhciB4LHA9W10saz1mdW5jdGlvbihhKXtpZihDKUQmJmEmJihEPSExLG0oKSk7ZWxzZSBpZihEPSFhLHkuYW5pbWF0aW9uRHVyYXRpb24paWYoYT1cbm1hKGcsRCksRClsLnB1c2goYSk7ZWxzZXt2YXIgYj1sLGM9Yi5pbmRleE9mKGEpOzA8PWEmJmIuc3BsaWNlKGMsMSl9fSxyPTA8VSYmKHkudHJhbnNpdGlvbkR1cmF0aW9uJiYwPT09VC50cmFuc2l0aW9uRHVyYXRpb258fHkuYW5pbWF0aW9uRHVyYXRpb24mJjA9PT1ULmFuaW1hdGlvbkR1cmF0aW9uKSYmTWF0aC5tYXgoVC5hbmltYXRpb25EZWxheSxULnRyYW5zaXRpb25EZWxheSk7cj9uKGIsTWF0aC5mbG9vcihyKlUqMUUzKSwhMSk6YigpO3QucmVzdW1lPWZ1bmN0aW9uKCl7ayghMCl9O3QucGF1c2U9ZnVuY3Rpb24oKXtrKCExKX19ZWxzZSBtKCl9dmFyIGc9eihhKTtpZighZ3x8IWcucGFyZW50Tm9kZSlyZXR1cm4geCgpO2M9aWEoYyk7dmFyIGw9W10scj1hLmF0dHIoXCJjbGFzc1wiKSx2PUVhKGMpLEssRCxDLHAsdCxILEYsSixHO2lmKDA9PT1jLmR1cmF0aW9ufHwhay5hbmltYXRpb25zJiYhay50cmFuc2l0aW9ucylyZXR1cm4geCgpO3ZhciBhYT1jLmV2ZW50JiZYKGMuZXZlbnQpP1xuYy5ldmVudC5qb2luKFwiIFwiKTpjLmV2ZW50LFI9XCJcIixOPVwiXCI7YWEmJmMuc3RydWN0dXJhbD9SPWJhKGFhLFwibmctXCIsITApOmFhJiYoUj1hYSk7Yy5hZGRDbGFzcyYmKE4rPWJhKGMuYWRkQ2xhc3MsXCItYWRkXCIpKTtjLnJlbW92ZUNsYXNzJiYoTi5sZW5ndGgmJihOKz1cIiBcIiksTis9YmEoYy5yZW1vdmVDbGFzcyxcIi1yZW1vdmVcIikpO2MuYXBwbHlDbGFzc2VzRWFybHkmJk4ubGVuZ3RoJiYoQihhLGMpLE49XCJcIik7dmFyIFk9W1IsTl0uam9pbihcIiBcIikudHJpbSgpLGZhPXIrXCIgXCIrWSxXPWJhKFksXCItYWN0aXZlXCIpLHI9di50byYmMDxPYmplY3Qua2V5cyh2LnRvKS5sZW5ndGg7aWYoISgwPChjLmtleWZyYW1lU3R5bGV8fFwiXCIpLmxlbmd0aHx8cnx8WSkpcmV0dXJuIHgoKTt2YXIgJCxUOzA8Yy5zdGFnZ2VyPyh2PXBhcnNlRmxvYXQoYy5zdGFnZ2VyKSxUPXt0cmFuc2l0aW9uRGVsYXk6dixhbmltYXRpb25EZWxheTp2LHRyYW5zaXRpb25EdXJhdGlvbjowLGFuaW1hdGlvbkR1cmF0aW9uOjB9KTpcbigkPUEoZyxmYSksVD1aKGcsWSwkLE5hKSk7ZS5hZGRDbGFzcyhhLFkpO2MudHJhbnNpdGlvblN0eWxlJiYodj1bTyxjLnRyYW5zaXRpb25TdHlsZV0sZGEoZyx2KSxsLnB1c2godikpOzA8PWMuZHVyYXRpb24mJih2PTA8Zy5zdHlsZVtPXS5sZW5ndGgsdj1BYShjLmR1cmF0aW9uLHYpLGRhKGcsdiksbC5wdXNoKHYpKTtjLmtleWZyYW1lU3R5bGUmJih2PVtWLGMua2V5ZnJhbWVTdHlsZV0sZGEoZyx2KSxsLnB1c2godikpO3ZhciBVPVQ/MDw9Yy5zdGFnZ2VySW5kZXg/Yy5zdGFnZ2VySW5kZXg6Yi5jb3VudCgkKTowOyhhYT0wPT09VSkmJmphKGcsOTk5OSk7dmFyIHk9dyhnLGZhLCQpLFE9eS5tYXhEZWxheTtIPU1hdGgubWF4KFEsMCk7Sj15Lm1heER1cmF0aW9uO3ZhciBxPXt9O3EuaGFzVHJhbnNpdGlvbnM9MDx5LnRyYW5zaXRpb25EdXJhdGlvbjtxLmhhc0FuaW1hdGlvbnM9MDx5LmFuaW1hdGlvbkR1cmF0aW9uO3EuaGFzVHJhbnNpdGlvbkFsbD1xLmhhc1RyYW5zaXRpb25zJiZcblwiYWxsXCI9PXkudHJhbnNpdGlvblByb3BlcnR5O3EuYXBwbHlUcmFuc2l0aW9uRHVyYXRpb249ciYmKHEuaGFzVHJhbnNpdGlvbnMmJiFxLmhhc1RyYW5zaXRpb25BbGx8fHEuaGFzQW5pbWF0aW9ucyYmIXEuaGFzVHJhbnNpdGlvbnMpO3EuYXBwbHlBbmltYXRpb25EdXJhdGlvbj1jLmR1cmF0aW9uJiZxLmhhc0FuaW1hdGlvbnM7cS5hcHBseVRyYW5zaXRpb25EZWxheT1sYShjLmRlbGF5KSYmKHEuYXBwbHlUcmFuc2l0aW9uRHVyYXRpb258fHEuaGFzVHJhbnNpdGlvbnMpO3EuYXBwbHlBbmltYXRpb25EZWxheT1sYShjLmRlbGF5KSYmcS5oYXNBbmltYXRpb25zO3EucmVjYWxjdWxhdGVUaW1pbmdTdHlsZXM9MDxOLmxlbmd0aDtpZihxLmFwcGx5VHJhbnNpdGlvbkR1cmF0aW9ufHxxLmFwcGx5QW5pbWF0aW9uRHVyYXRpb24pSj1jLmR1cmF0aW9uP3BhcnNlRmxvYXQoYy5kdXJhdGlvbik6SixxLmFwcGx5VHJhbnNpdGlvbkR1cmF0aW9uJiYocS5oYXNUcmFuc2l0aW9ucz0hMCx5LnRyYW5zaXRpb25EdXJhdGlvbj1cbkosdj0wPGcuc3R5bGVbTytcIlByb3BlcnR5XCJdLmxlbmd0aCxsLnB1c2goQWEoSix2KSkpLHEuYXBwbHlBbmltYXRpb25EdXJhdGlvbiYmKHEuaGFzQW5pbWF0aW9ucz0hMCx5LmFuaW1hdGlvbkR1cmF0aW9uPUosbC5wdXNoKFtzYSxKK1wic1wiXSkpO2lmKDA9PT1KJiYhcS5yZWNhbGN1bGF0ZVRpbWluZ1N0eWxlcylyZXR1cm4geCgpO251bGw9PWMuZHVyYXRpb24mJjA8eS50cmFuc2l0aW9uRHVyYXRpb24mJihxLnJlY2FsY3VsYXRlVGltaW5nU3R5bGVzPXEucmVjYWxjdWxhdGVUaW1pbmdTdHlsZXN8fGFhKTtGPTFFMypIO0c9MUUzKko7Yy5za2lwQmxvY2tpbmd8fChxLmJsb2NrVHJhbnNpdGlvbj0wPHkudHJhbnNpdGlvbkR1cmF0aW9uLHEuYmxvY2tLZXlmcmFtZUFuaW1hdGlvbj0wPHkuYW5pbWF0aW9uRHVyYXRpb24mJjA8VC5hbmltYXRpb25EZWxheSYmMD09PVQuYW5pbWF0aW9uRHVyYXRpb24pO3dhKGEsYyk7cS5ibG9ja1RyYW5zaXRpb258fGphKGcsITEpO0woSik7cmV0dXJueyQkd2lsbEFuaW1hdGU6ITAsXG5lbmQ6ZCxzdGFydDpmdW5jdGlvbigpe2lmKCFLKXJldHVybiB0PXtlbmQ6ZCxjYW5jZWw6aCxyZXN1bWU6bnVsbCxwYXVzZTpudWxsfSxwPW5ldyBzKHQpLEkoTSkscH19fX1dfV0pLnByb3ZpZGVyKFwiJCRhbmltYXRlQ3NzRHJpdmVyXCIsW1wiJCRhbmltYXRpb25Qcm92aWRlclwiLGZ1bmN0aW9uKGEpe2EuZHJpdmVycy5wdXNoKFwiJCRhbmltYXRlQ3NzRHJpdmVyXCIpO3RoaXMuJGdldD1bXCIkYW5pbWF0ZUNzc1wiLFwiJHJvb3RTY29wZVwiLFwiJCRBbmltYXRlUnVubmVyXCIsXCIkcm9vdEVsZW1lbnRcIixcIiRkb2N1bWVudFwiLFwiJHNuaWZmZXJcIixmdW5jdGlvbihhLGMsZCxlLHMsbil7ZnVuY3Rpb24gaChhKXtyZXR1cm4gYS5yZXBsYWNlKC9cXGJuZy1cXFMrXFxiL2csXCJcIil9ZnVuY3Rpb24gayhhLGIpe1UoYSkmJihhPWEuc3BsaXQoXCIgXCIpKTtVKGIpJiYoYj1iLnNwbGl0KFwiIFwiKSk7cmV0dXJuIGEuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybi0xPT09Yi5pbmRleE9mKGEpfSkuam9pbihcIiBcIil9ZnVuY3Rpb24gRChjLFxuZSxBKXtmdW5jdGlvbiBEKGEpe3ZhciBiPXt9LGM9eihhKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTt1KFtcIndpZHRoXCIsXCJoZWlnaHRcIixcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihhKXt2YXIgZD1jW2FdO3N3aXRjaChhKXtjYXNlIFwidG9wXCI6ZCs9SS5zY3JvbGxUb3A7YnJlYWs7Y2FzZSBcImxlZnRcIjpkKz1JLnNjcm9sbExlZnR9YlthXT1NYXRoLmZsb29yKGQpK1wicHhcIn0pO3JldHVybiBifWZ1bmN0aW9uIHMoKXt2YXIgYz1oKEEuYXR0cihcImNsYXNzXCIpfHxcIlwiKSxkPWsoYyx0KSxjPWsodCxjKSxkPWEobix7dG86RChBKSxhZGRDbGFzczpcIm5nLWFuY2hvci1pbiBcIitkLHJlbW92ZUNsYXNzOlwibmctYW5jaG9yLW91dCBcIitjLGRlbGF5OiEwfSk7cmV0dXJuIGQuJCR3aWxsQW5pbWF0ZT9kOm51bGx9ZnVuY3Rpb24gZigpe24ucmVtb3ZlKCk7ZS5yZW1vdmVDbGFzcyhcIm5nLWFuaW1hdGUtc2hpbVwiKTtBLnJlbW92ZUNsYXNzKFwibmctYW5pbWF0ZS1zaGltXCIpfXZhciBuPUcoeihlKS5jbG9uZU5vZGUoITApKSxcbnQ9aChuLmF0dHIoXCJjbGFzc1wiKXx8XCJcIik7ZS5hZGRDbGFzcyhcIm5nLWFuaW1hdGUtc2hpbVwiKTtBLmFkZENsYXNzKFwibmctYW5pbWF0ZS1zaGltXCIpO24uYWRkQ2xhc3MoXCJuZy1hbmNob3JcIik7dy5hcHBlbmQobik7dmFyIG07Yz1mdW5jdGlvbigpe3ZhciBjPWEobix7YWRkQ2xhc3M6XCJuZy1hbmNob3Itb3V0XCIsZGVsYXk6ITAsZnJvbTpEKGUpfSk7cmV0dXJuIGMuJCR3aWxsQW5pbWF0ZT9jOm51bGx9KCk7aWYoIWMmJihtPXMoKSwhbSkpcmV0dXJuIGYoKTt2YXIgTD1jfHxtO3JldHVybntzdGFydDpmdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtjJiZjLmVuZCgpfXZhciBiLGM9TC5zdGFydCgpO2MuZG9uZShmdW5jdGlvbigpe2M9bnVsbDtpZighbSYmKG09cygpKSlyZXR1cm4gYz1tLnN0YXJ0KCksYy5kb25lKGZ1bmN0aW9uKCl7Yz1udWxsO2YoKTtiLmNvbXBsZXRlKCl9KSxjO2YoKTtiLmNvbXBsZXRlKCl9KTtyZXR1cm4gYj1uZXcgZCh7ZW5kOmEsY2FuY2VsOmF9KX19fWZ1bmN0aW9uIEEoYSxcbmIsYyxlKXt2YXIgaD10KGEpLGY9dChiKSxrPVtdO3UoZSxmdW5jdGlvbihhKXsoYT1EKGMsYS5vdXQsYVtcImluXCJdKSkmJmsucHVzaChhKX0pO2lmKGh8fGZ8fDAhPT1rLmxlbmd0aClyZXR1cm57c3RhcnQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7dShiLGZ1bmN0aW9uKGEpe2EuZW5kKCl9KX12YXIgYj1bXTtoJiZiLnB1c2goaC5zdGFydCgpKTtmJiZiLnB1c2goZi5zdGFydCgpKTt1KGssZnVuY3Rpb24oYSl7Yi5wdXNoKGEuc3RhcnQoKSl9KTt2YXIgYz1uZXcgZCh7ZW5kOmEsY2FuY2VsOmF9KTtkLmFsbChiLGZ1bmN0aW9uKGEpe2MuY29tcGxldGUoYSl9KTtyZXR1cm4gY319fWZ1bmN0aW9uIHQoYyl7dmFyIGQ9Yy5lbGVtZW50LGU9Yy5vcHRpb25zfHx7fTtjLnN0cnVjdHVyYWw/KGUuc3RydWN0dXJhbD1lLmFwcGx5Q2xhc3Nlc0Vhcmx5PSEwLGUuZXZlbnQ9Yy5ldmVudCxcImxlYXZlXCI9PT1lLmV2ZW50JiYoZS5vbkRvbmU9ZS5kb21PcGVyYXRpb24pKTplLmV2ZW50PW51bGw7XG5jPWEoZCxlKTtyZXR1cm4gYy4kJHdpbGxBbmltYXRlP2M6bnVsbH1pZighbi5hbmltYXRpb25zJiYhbi50cmFuc2l0aW9ucylyZXR1cm4gSDt2YXIgST16KHMpLmJvZHk7Yz16KGUpO3ZhciB3PUcoSS5wYXJlbnROb2RlPT09Yz9JOmMpO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gYS5mcm9tJiZhLnRvP0EoYS5mcm9tLGEudG8sYS5jbGFzc2VzLGEuYW5jaG9ycyk6dChhKX19XX1dKS5wcm92aWRlcihcIiQkYW5pbWF0ZUpzXCIsW1wiJGFuaW1hdGVQcm92aWRlclwiLGZ1bmN0aW9uKGEpe3RoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixcIiQkQW5pbWF0ZVJ1bm5lclwiLFwiJCRyQUZNdXRleFwiLFwiJCRqcUxpdGVcIixmdW5jdGlvbihiLGMsZCxlKXtmdW5jdGlvbiBzKGMpe2M9WChjKT9jOmMuc3BsaXQoXCIgXCIpO2Zvcih2YXIgZD1bXSxlPXt9LEE9MDtBPGMubGVuZ3RoO0ErKyl7dmFyIG49Y1tBXSxzPWEuJCRyZWdpc3RlcmVkQW5pbWF0aW9uc1tuXTtzJiYhZVtuXSYmKGQucHVzaChiLmdldChzKSksZVtuXT1cbiEwKX1yZXR1cm4gZH12YXIgbj1oYShlKTtyZXR1cm4gZnVuY3Rpb24oYSxiLGQsZSl7ZnVuY3Rpb24gdCgpe2UuZG9tT3BlcmF0aW9uKCk7bihhLGUpfWZ1bmN0aW9uIHooYSxiLGQsZSxnKXtzd2l0Y2goZCl7Y2FzZSBcImFuaW1hdGVcIjpiPVtiLGUuZnJvbSxlLnRvLGddO2JyZWFrO2Nhc2UgXCJzZXRDbGFzc1wiOmI9W2IscixLLGddO2JyZWFrO2Nhc2UgXCJhZGRDbGFzc1wiOmI9W2IscixnXTticmVhaztjYXNlIFwicmVtb3ZlQ2xhc3NcIjpiPVtiLEssZ107YnJlYWs7ZGVmYXVsdDpiPVtiLGddfWIucHVzaChlKTtpZihhPWEuYXBwbHkoYSxiKSlpZihDYShhLnN0YXJ0KSYmKGE9YS5zdGFydCgpKSxhIGluc3RhbmNlb2YgYylhLmRvbmUoZyk7ZWxzZSBpZihDYShhKSlyZXR1cm4gYTtyZXR1cm4gSH1mdW5jdGlvbiB3KGEsYixkLGUsZyl7dmFyIGY9W107dShlLGZ1bmN0aW9uKGUpe3ZhciBoPWVbZ107aCYmZi5wdXNoKGZ1bmN0aW9uKCl7dmFyIGUsZyxmPSExLGw9ZnVuY3Rpb24oYSl7Znx8XG4oZj0hMCwoZ3x8SCkoYSksZS5jb21wbGV0ZSghYSkpfTtlPW5ldyBjKHtlbmQ6ZnVuY3Rpb24oKXtsKCl9LGNhbmNlbDpmdW5jdGlvbigpe2woITApfX0pO2c9eihoLGEsYixkLGZ1bmN0aW9uKGEpe2woITE9PT1hKX0pO3JldHVybiBlfSl9KTtyZXR1cm4gZn1mdW5jdGlvbiBCKGEsYixkLGUsZyl7dmFyIGY9dyhhLGIsZCxlLGcpO2lmKDA9PT1mLmxlbmd0aCl7dmFyIGgsaztcImJlZm9yZVNldENsYXNzXCI9PT1nPyhoPXcoYSxcInJlbW92ZUNsYXNzXCIsZCxlLFwiYmVmb3JlUmVtb3ZlQ2xhc3NcIiksaz13KGEsXCJhZGRDbGFzc1wiLGQsZSxcImJlZm9yZUFkZENsYXNzXCIpKTpcInNldENsYXNzXCI9PT1nJiYoaD13KGEsXCJyZW1vdmVDbGFzc1wiLGQsZSxcInJlbW92ZUNsYXNzXCIpLGs9dyhhLFwiYWRkQ2xhc3NcIixkLGUsXCJhZGRDbGFzc1wiKSk7aCYmKGY9Zi5jb25jYXQoaCkpO2smJihmPWYuY29uY2F0KGspKX1pZigwIT09Zi5sZW5ndGgpcmV0dXJuIGZ1bmN0aW9uKGEpe3ZhciBiPVtdO2YubGVuZ3RoJiZcbnUoZixmdW5jdGlvbihhKXtiLnB1c2goYSgpKX0pO2IubGVuZ3RoP2MuYWxsKGIsYSk6YSgpO3JldHVybiBmdW5jdGlvbihhKXt1KGIsZnVuY3Rpb24oYil7YT9iLmNhbmNlbCgpOmIuZW5kKCl9KX19fTM9PT1hcmd1bWVudHMubGVuZ3RoJiZuYShkKSYmKGU9ZCxkPW51bGwpO2U9aWEoZSk7ZHx8KGQ9YS5hdHRyKFwiY2xhc3NcIil8fFwiXCIsZS5hZGRDbGFzcyYmKGQrPVwiIFwiK2UuYWRkQ2xhc3MpLGUucmVtb3ZlQ2xhc3MmJihkKz1cIiBcIitlLnJlbW92ZUNsYXNzKSk7dmFyIHI9ZS5hZGRDbGFzcyxLPWUucmVtb3ZlQ2xhc3MsQz1zKGQpLEUsZjtpZihDLmxlbmd0aCl7dmFyIEYsRztcImxlYXZlXCI9PWI/KEc9XCJsZWF2ZVwiLEY9XCJhZnRlckxlYXZlXCIpOihHPVwiYmVmb3JlXCIrYi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStiLnN1YnN0cigxKSxGPWIpO1wiZW50ZXJcIiE9PWImJlwibW92ZVwiIT09YiYmKEU9QihhLGIsZSxDLEcpKTtmPUIoYSxiLGUsQyxGKX1pZihFfHxmKXJldHVybntzdGFydDpmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYyl7bj1cbiEwO3QoKTtjYShhLGUpO2cuY29tcGxldGUoYyl9dmFyIGQsaz1bXTtFJiZrLnB1c2goZnVuY3Rpb24oYSl7ZD1FKGEpfSk7ay5sZW5ndGg/ay5wdXNoKGZ1bmN0aW9uKGEpe3QoKTthKCEwKX0pOnQoKTtmJiZrLnB1c2goZnVuY3Rpb24oYSl7ZD1mKGEpfSk7dmFyIG49ITEsZz1uZXcgYyh7ZW5kOmZ1bmN0aW9uKCl7bnx8KChkfHxIKSh2b2lkIDApLGIodm9pZCAwKSl9LGNhbmNlbDpmdW5jdGlvbigpe258fCgoZHx8SCkoITApLGIoITApKX19KTtjLmNoYWluKGssYik7cmV0dXJuIGd9fX19XX1dKS5wcm92aWRlcihcIiQkYW5pbWF0ZUpzRHJpdmVyXCIsW1wiJCRhbmltYXRpb25Qcm92aWRlclwiLGZ1bmN0aW9uKGEpe2EuZHJpdmVycy5wdXNoKFwiJCRhbmltYXRlSnNEcml2ZXJcIik7dGhpcy4kZ2V0PVtcIiQkYW5pbWF0ZUpzXCIsXCIkJEFuaW1hdGVSdW5uZXJcIixmdW5jdGlvbihhLGMpe2Z1bmN0aW9uIGQoYyl7cmV0dXJuIGEoYy5lbGVtZW50LGMuZXZlbnQsYy5jbGFzc2VzLGMub3B0aW9ucyl9XG5yZXR1cm4gZnVuY3Rpb24oYSl7aWYoYS5mcm9tJiZhLnRvKXt2YXIgYj1kKGEuZnJvbSksbj1kKGEudG8pO2lmKGJ8fG4pcmV0dXJue3N0YXJ0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3JldHVybiBmdW5jdGlvbigpe3UoZCxmdW5jdGlvbihhKXthLmVuZCgpfSl9fXZhciBkPVtdO2ImJmQucHVzaChiLnN0YXJ0KCkpO24mJmQucHVzaChuLnN0YXJ0KCkpO2MuYWxsKGQsZnVuY3Rpb24oYSl7ZS5jb21wbGV0ZShhKX0pO3ZhciBlPW5ldyBjKHtlbmQ6YSgpLGNhbmNlbDphKCl9KTtyZXR1cm4gZX19fWVsc2UgcmV0dXJuIGQoYSl9fV19XSl9KSh3aW5kb3csd2luZG93LmFuZ3VsYXIpO1xuXG4iLCIoZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnYUNhcm91c2VsJywgW10pXG4gICAgICAgIC5kaXJlY3RpdmUoJ2FDYXJvdXNlbCcsIGFkdmFuY2VkQ2Fyb3VzZWwpO1xuXG4gICAgYWR2YW5jZWRDYXJvdXNlbC4kaW5qZWN0ID0gWyckY29tcGlsZScsICckdGltZW91dCcsICckaW9uaWNTY3JvbGxEZWxlZ2F0ZSddO1xuICAgIGZ1bmN0aW9uIGFkdmFuY2VkQ2Fyb3VzZWwoJGNvbXBpbGUsICR0aW1lb3V0LCAkaW9uaWNTY3JvbGxEZWxlZ2F0ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3QgICAgICAgIDogJ0UnLFxuICAgICAgICAgICAgcmVwbGFjZSAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlICAgICAgICA6ICcnLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgICAgIDoge30sXG4gICAgICAgICAgICBsaW5rICAgICAgICAgICAgOiBsaW5rRnVuYyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXIgICAgICA6IENvbnRyb2xsZXIsXG4gICAgICAgICAgICBjb250cm9sbGVyQXMgICAgOiAndm0nLFxuICAgICAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xuICAgICAgICAgICAgICAgIGl0ZW1EaXJlY3RpdmUgIDogJ0AnLFxuICAgICAgICAgICAgICAgIGNhcm91c2VsT3B0aW9uczogJz0nLFxuICAgICAgICAgICAgICAgIGFycmF5UHJvdmlkZXIgIDogJz0nLFxuICAgICAgICAgICAgICAgIG9uU2VsZWN0ICAgICAgIDogJyYnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8vLy8vLy8vXG5cbiAgICAgICAgZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCBjdHJsKSB7XG4gICAgICAgICAgICBjdHJsLmVsID0gZWw7XG5cbiAgICAgICAgICAgIGN0cmwub3B0aW9ucy50cmFja0J5ICAgID0gdHlwZW9mIGF0dHIudHJhY2tCeSAhPT0gJ3VuZGVmaW5lZCcgPyBhdHRyLnRyYWNrQnkgOiAnJGluZGV4JztcbiAgICAgICAgICAgIGN0cmwub3B0aW9ucy50cmFja0J5c3RyID0gY3RybC5vcHRpb25zLnRyYWNrQnkgPT09ICckaW5kZXgnID8gJyRpbmRleCcgOiAnaXRlbS4nICsgY3RybC5vcHRpb25zLnRyYWNrQnk7XG5cbiAgICAgICAgICAgIHZhciBhbmltYXRlSW4gPSBjdHJsLm9wdGlvbnMuYW5pbWF0ZUluID8gJyBhbmltYXRlSW4nIDogJyc7XG5cbiAgICAgICAgICAgIC8vIER5bmFtaWMgZGlyZWN0aXZlIGh0bWxcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJhLWNhcm91c2VsXCI+JztcblxuICAgICAgICAgICAgaWYgKGN0cmwub3B0aW9ucy5wdWxsUmVmcmVzaC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwic3Bpbm5lci13cmFwcGVyXCIgbmctaWY9XCJ2bS5vcHRpb25zLnB1bGxSZWZyZXNoLmxvYWRpbmdcIj48aW9uLXNwaW5uZXIgaWNvbj1cImFuZHJvaWRcIj48L2lvbi1zcGlubmVyPjwvZGl2Pic7XG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPHNwYW4gY2xhc3M9XCJwdWxscmVmcmVzaC1pbmRpY2F0b3JcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxzdmcgdmlld0JveD1cIjAgMCA2NCA2NFwiPjxnPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGNpcmNsZSBzdHJva2Utd2lkdGg9XCI2XCIgc3Ryb2tlLWRhc2hhcnJheT1cIjEzNS4yNjI2MTIzOTE0NDI4N1wiIHN0cm9rZS1kYXNob2Zmc2V0PVwiMTYuNTEzNzE0NzQ1NTYyMTRcIiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ3I9XCIyNlwiIGN4PVwiMzJcIiBjeT1cIjMyXCIgZmlsbD1cIm5vbmVcIiB0cmFuc2Zvcm09XCJzY2FsZSgxLDEpIHRyYW5zbGF0ZSgwLDApIHJvdGF0ZSgwLDMyLDMyKVwiPjwvY2lyY2xlPjwvZz4nICtcbiAgICAgICAgICAgICAgICAgICAgJzwvc3ZnPicgK1xuICAgICAgICAgICAgICAgICAgICAnPC9zcGFuPic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGh0bWwgKz0gJzxpb24tc2Nyb2xsICc7XG5cbiAgICAgICAgICAgIGlmIChjdHJsLm9wdGlvbnMucHVsbFJlZnJlc2guYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgaHRtbCArPSAnb24tc2Nyb2xsPVwidm0ub25TY3JvbGwoKVwiICc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGh0bWwgKz0gJ3Njcm9sbGJhci14PVwiZmFsc2VcIiBkZWxlZ2F0ZS1oYW5kbGU9XCInICsgY3RybC5vcHRpb25zLmNhcm91c2VsSWQgKyAnXCIgJyArXG4gICAgICAgICAgICAgICAgJ3pvb21pbmc9XCJmYWxzZVwiIGRpcmVjdGlvbj1cInhcIiBvdmVyZmxvdy1zY3JvbGw9XCJmYWxzZVwiIGhhcy1ib3VuY2luZz1cInRydWVcIj4nICtcbiAgICAgICAgICAgICAgICAnPG5hdiBzdHlsZT1cInZpc2liaWxpdHk6aGlkZGVuO1wiPicgK1xuICAgICAgICAgICAgICAgICc8dWw+IDxsaSAnICtcbiAgICAgICAgICAgICAgICAnbmctcmVwZWF0PVwiaXRlbSBpbiB2bS5hcnJheVByb3ZpZGVyIHRyYWNrIGJ5ICcgK1xuICAgICAgICAgICAgICAgIGN0cmwub3B0aW9ucy50cmFja0J5c3RyICsgJ1wiJyArXG4gICAgICAgICAgICAgICAgJ2NsYXNzPVwiY2Fyb3VzZWwtaXRlbScgKyBhbmltYXRlSW4gKyAnXCInICtcbiAgICAgICAgICAgICAgICAnbmctY2xhc3M9XCJ7XFwnYWN0aXZlXFwnOnZtLml0ZW1BY3RpdmUgPT09IGl0ZW19XCI+JyArXG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbURpcmVjdGl2ZSgpICtcbiAgICAgICAgICAgICAgICAnPC9saT4nICtcbiAgICAgICAgICAgICAgICAnPC91bD48L25hdj48L2lvbi1zY3JvbGw+PC9kaXY+JztcblxuICAgICAgICAgICAgLy8gQ29tcGlsZSBkeW5hbWljIHRlbXBsYXRlXG4gICAgICAgICAgICBodG1sID0gJGNvbXBpbGUoaHRtbCkoc2NvcGUpO1xuICAgICAgICAgICAgZWwuYXBwZW5kKGh0bWwpO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqICR0aW1lb3V0IHNvIG5nLXJlcGVhdCBpcyBmaW5pc2hlZCBpbiBvcmRlciB0byBjYWxjdWxhdGUgd2lkdGggb2YgY2Fyb3VzZWxcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjdHJsLmFycmF5UHJvdmlkZXIgJiYgY3RybC5hcnJheVByb3ZpZGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3RybC5pbml0Q2Fyb3VzZWwoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhbGxvd1ZlcnRpY2FsU2Nyb2xsKCk7XG4gICAgICAgICAgICB9LCAwKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlSXRlbURpcmVjdGl2ZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSBjdHJsLm9wdGlvbnMudGVtcGxhdGUgIT09IG51bGwgPyAndGVtcGxhdGU9XCInICsgY3RybC5vcHRpb25zLnRlbXBsYXRlICsgJ1wiJyA6ICcnO1xuICAgICAgICAgICAgICAgIGN0cmwuaXRlbURpcmVjdGl2ZSA9IHR5cGVvZiBjdHJsLml0ZW1EaXJlY3RpdmUgPT09ICd1bmRlZmluZWQnID8gJ2Nhcm91c2VsLWdlbmVyaWMtaXRlbScgOiBjdHJsLml0ZW1EaXJlY3RpdmU7XG4gICAgICAgICAgICAgICAgdmFyIGRpcmVjdGl2ZSA9ICc8JyArIGN0cmwuaXRlbURpcmVjdGl2ZSArICcgbmctbW9kZWw9XCJpdGVtXCIgJyArIHRlbXBsYXRlICtcbiAgICAgICAgICAgICAgICAgICAgJ29uLXNlbGVjdD1cInZtLnNlbGVjdEl0ZW0oaXRlbSlcIiBjYXJvdXNlbC1vcHRpb25zPVwibWVudUNhcm91c2VsLm9wdGlvbnNcIiAnO1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZSArPSAnPjwvJyArIGN0cmwuaXRlbURpcmVjdGl2ZSArICc+JztcblxuICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRoaXMgbWV0aG9kIGFsbG93cyB0byBzY3JvbGwgdGhlIHBhZ2UgYmVsb3cgdGhlIGNhcm91c2VsXG4gICAgICAgICAgICBmdW5jdGlvbiBhbGxvd1ZlcnRpY2FsU2Nyb2xsKCkge1xuICAgICAgICAgICAgICAgIHZhciBzdiAgICAgICAgPSAkaW9uaWNTY3JvbGxEZWxlZ2F0ZS4kZ2V0QnlIYW5kbGUoY3RybC5vcHRpb25zLmNhcm91c2VsSWQpLmdldFNjcm9sbFZpZXcoKTtcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gc3YuX19jb250YWluZXI7XG5cbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWx0b3VjaFN0YXJ0ID0gc3YudG91Y2hTdGFydDtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWx0b3VjaE1vdmUgID0gc3YudG91Y2hNb3ZlO1xuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBzdi50b3VjaFN0YXJ0KTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBzdi50b3VjaE1vdmUpO1xuXG4gICAgICAgICAgICAgICAgc3YudG91Y2hTdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsdG91Y2hTdGFydC5hcHBseShzdiwgW2VdKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgc3YudG91Y2hNb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWx0b3VjaE1vdmUuYXBwbHkoc3YsIFtlXSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc3YudG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHN2LnRvdWNoTW92ZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJHRpbWVvdXQnLCAnJHdpbmRvdycsICckaW9uaWNTY3JvbGxEZWxlZ2F0ZSddO1xuICAgIGZ1bmN0aW9uIENvbnRyb2xsZXIoJHNjb3BlLCAkZWxlbWVudCwgJHRpbWVvdXQsICR3aW5kb3csICRpb25pY1Njcm9sbERlbGVnYXRlKSB7XG4gICAgICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAgICAgdm0ub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHNob3dTY3JvbGwgICAgOiBmYWxzZSxcbiAgICAgICAgICAgIGNhcm91c2VsSWQgICAgOiAnbXktY2Fyb3VzZWwnLFxuICAgICAgICAgICAgdGVtcGxhdGUgICAgICA6IG51bGwsXG4gICAgICAgICAgICBhbGlnbiAgICAgICAgIDogJ2xlZnQnLFxuICAgICAgICAgICAgY2VudGVyT25TZWxlY3Q6IHRydWUsXG4gICAgICAgICAgICB3aWR0aEl0ZW0gICAgIDogMCxcbiAgICAgICAgICAgIGhlaWdodEl0ZW0gICAgOiAwLFxuICAgICAgICAgICAgdHJhY2tCeSAgICAgICA6ICckaW5kZXgnLFxuICAgICAgICAgICAgc2VsZWN0Rmlyc3QgICA6IHRydWUsXG4gICAgICAgICAgICBzZWxlY3RBdFN0YXJ0IDoge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBudWxsLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiBudWxsLFxuICAgICAgICAgICAgICAgIGluZGV4ICAgOiAtMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHB1bGxSZWZyZXNoICAgOiB7XG4gICAgICAgICAgICAgICAgYWN0aXZlICA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNhbGxCYWNrOiBhbmd1bGFyLm5vb3AsXG4gICAgICAgICAgICAgICAgbG9hZGluZzpmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFuaW1hdGVJbiAgICAgOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEFQSVxuICAgICAgICB2bS5pbml0Q2Fyb3VzZWwgPSBpbml0Q2Fyb3VzZWw7XG4gICAgICAgIHZtLnNlbGVjdEl0ZW0gICA9IHNlbGVjdEl0ZW07XG4gICAgICAgIHZtLm9uU2Nyb2xsICAgICA9IG9uU2Nyb2xsO1xuXG4gICAgICAgIGFjdGl2YXRlKCk7XG5cbiAgICAgICAgLy8vLy8vLy8vL1xuXG4gICAgICAgIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgICAgICAgICAgYW5ndWxhci5leHRlbmQodm0ub3B0aW9ucywgdm0uY2Fyb3VzZWxPcHRpb25zKTtcblxuICAgICAgICAgICAgJHNjb3BlLiRvbignYS1jYXJvdXNlbC5hcnJheXVwZGF0ZWQnLCBvbkFycmF5UHJvdmlkZXJVcGRhdGVkKTtcbiAgICAgICAgICAgICRzY29wZS4kb24oJ2EtY2Fyb3VzZWwuZGVzYWN0aXZhdGVJdGVtJywgZGVzYWN0aXZlSXRlbVNlbGVjdGVkKTtcblxuICAgICAgICAgICAgaWYgKHZtLm9wdGlvbnMucHVsbFJlZnJlc2guYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLiRvbignYS1jYXJvdXNlbC5wdWxscmVmcmVzaC5kb25lJywgb25FbmRSZWZyZXNoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8vLy8vLy8vL1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtIGVcbiAgICAgICAgICAgICAqIEBwYXJhbSB7e2Nhcm91c2VsSWQ6c3RyaW5nfX0gcGFyYW1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gb25BcnJheVByb3ZpZGVyVXBkYXRlZChlLCBwYXJhbSkge1xuICAgICAgICAgICAgICAgIHZhciBjYXJvdXNlbElkO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcm91c2VsSWQgPSBwYXJhbS5jYXJvdXNlbElkO1xuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmV4dGVuZCh2bS5vcHRpb25zLCBwYXJhbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWxJZCA9IHBhcmFtO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjYXJvdXNlbElkID09PSB2bS5vcHRpb25zLmNhcm91c2VsSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQodm0uaW5pdENhcm91c2VsLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSBlXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3tpZENvbnRhaW5zOnN0cmluZywgZXhjZXB0OnN0cmluZ319IHBhcmFtXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlc2FjdGl2ZUl0ZW1TZWxlY3RlZChlLCBwYXJhbSkge1xuICAgICAgICAgICAgICAgIHZhciBpZENvbnRhaW5zID0gcGFyYW0uaWRDb250YWlucztcbiAgICAgICAgICAgICAgICB2YXIgZXhjZXB0ICAgICA9IHBhcmFtLmV4Y2VwdDtcblxuICAgICAgICAgICAgICAgIGlmICh2bS5vcHRpb25zLmNhcm91c2VsSWQuaW5kZXhPZihpZENvbnRhaW5zKSA+PSAwICYmIHZtLm9wdGlvbnMuY2Fyb3VzZWxJZCAhPT0gZXhjZXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLml0ZW1BY3RpdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXRDYXJvdXNlbCgpIHtcbiAgICAgICAgICAgIHZhciBjYXJvdXNlbEl0ZW1zID0gJGVsZW1lbnQuZmluZCgnbGknKTtcbiAgICAgICAgICAgIHZhciB0b3RhbEl0ZW1zICAgID0gY2Fyb3VzZWxJdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgbnVtSXRlbXMgICAgICA9IGFuZ3VsYXIuZWxlbWVudChjYXJvdXNlbEl0ZW1zKS5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgd2lkdGhDYXJvdXNlbCA9IDA7XG5cbiAgICAgICAgICAgIHZhciBtYXJnaW5MZWZ0ICA9IDA7XG4gICAgICAgICAgICB2YXIgbWFyZ2luUmlnaHQgPSAwO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggICAgICAgICAgICAgID0gMDtcbiAgICAgICAgICAgIHZhciBudW1UaW1lc0RvbUNoZWNrZWQgPSAwO1xuICAgICAgICAgICAgdmFyIG51bVJldHJ5QnVpbGQgICAgICAgICAgID0gMTU7XG5cbiAgICAgICAgICAgIHZtLml0ZW1BY3RpdmUgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAobnVtSXRlbXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjaGVja0RPTSgpO1xuICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RyeWluZyB0byBjcmVhdGUgYSBjYXJvdXNlbCBmcm9tIGFuIGVtcHR5IGFycmF5Jywgdm0ub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrRE9NKCkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNraW5nIGlmIGNhcm91c2VsIGl0ZW1zIGFyZSBpbiBET01cbiAgICAgICAgICAgICAgICB2YXIgdyA9IHBhcnNlSW50KGNhcm91c2VsSXRlbXNbdG90YWxJdGVtcyAtIDFdLm9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IHBhcnNlSW50KGNhcm91c2VsSXRlbXNbdG90YWxJdGVtcyAtIDFdLm9mZnNldEhlaWdodCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodyA+IDAgJiYgaCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc05vdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbSU5GT10gQ3JlYXRpbmcgQ2Fyb3VzZWwgYnV0IERPTSBub3QgcmVhZHkgeWV0Li4uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bVRpbWVzRG9tQ2hlY2tlZCA8IG51bVJldHJ5QnVpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0RPTSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tFUlJPUl0gU2l6ZSBpdGVtIENhcm91c2VsIGNvdWxkIG5vdCBiZSBkZXRlcm1pbmVkJywgdm0ub3B0aW9ucy5jYXJvdXNlbElkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG51bVRpbWVzRG9tQ2hlY2tlZCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcHJvY2Vzc05vdygpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0SXRlbUF0U3RhcnQgPSB2bS5vcHRpb25zLnNlbGVjdEF0U3RhcnQucHJvcGVydHkgIT09IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGVsSXRlbTtcblxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChjYXJvdXNlbEl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBtb2RlbEl0ZW0gICAgICAgICAgICA9IHZtLmFycmF5UHJvdmlkZXJbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBtb2RlbEl0ZW0uY2Fyb3VzZWxJZCA9IHZtLm9wdGlvbnMuY2Fyb3VzZWxJZDtcblxuICAgICAgICAgICAgICAgICAgICB3aWR0aENhcm91c2VsICs9IGl0ZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHZtLm9wdGlvbnMud2lkdGhJdGVtICA9IE1hdGgubWF4KGl0ZW0ub2Zmc2V0V2lkdGgsIHZtLm9wdGlvbnMud2lkdGhJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdm0ub3B0aW9ucy5oZWlnaHRJdGVtID0gTWF0aC5tYXgoaXRlbS5vZmZzZXRIZWlnaHQsIHZtLm9wdGlvbnMuaGVpZ2h0SXRlbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdm0uYXJyYXlQcm92aWRlcltpbmRleF0ud2lkdGhJdGVtID0gaXRlbS5vZmZzZXRXaWR0aDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBBcyB3ZSBjYW4gc2VsZWN0IGF0IHN0YXJ0IGFuIGl0ZW0gd2l0aCBhIHByb3BlcnR5IG9mIGNlcnRhaW4gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgY2hlY2sgaGVyZSBpdHMgaW5kZXggaW4gdGhlIEFycmF5XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtQXRTdGFydCAmJiB2bS5vcHRpb25zLnNlbGVjdEF0U3RhcnQuaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWxJdGVtW3ZtLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5wcm9wZXJ0eV0gPT09IHZtLm9wdGlvbnMuc2VsZWN0QXRTdGFydC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5pbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICh2bS5vcHRpb25zLmNlbnRlck9uU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjZW50ZXJYICAgPSAkd2luZG93LmlubmVyV2lkdGggKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdEl0ZW0gPSBjYXJvdXNlbEl0ZW1zWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdEl0ZW0gID0gY2Fyb3VzZWxJdGVtc1tudW1JdGVtcyAtIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQgID0gY2VudGVyWCAtIGZpcnN0SXRlbS5vZmZzZXRXaWR0aCAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQgPSBjZW50ZXJYIC0gbGFzdEl0ZW0ub2Zmc2V0V2lkdGggKiAwLjU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgYWRkIG1hcmdpbiBvbiBib3RoIHNpZGUgdG8gYmUgYWJsZSB0byBjZW50ZXIgdGhlIGZpcnN0IGFuZCBsYXN0IGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGhDYXJvdXNlbCArPSBtYXJnaW5MZWZ0ICsgbWFyZ2luUmlnaHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgdm0ub3B0aW9ucy5tYXhTY3JvbGwgPSAkd2luZG93LmlubmVyV2lkdGggLSB3aWR0aENhcm91c2VsO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uIHRoZSBjYXJvdXNlbCBvbiBmaXJzdCBpdGVtXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5vcHRpb25zLmFsaWduID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaW9uaWNTY3JvbGxEZWxlZ2F0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kZ2V0QnlIYW5kbGUodm0ub3B0aW9ucy5jYXJvdXNlbElkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zY3JvbGxUbyh2bS5vcHRpb25zLm1heFNjcm9sbCAqIC0xLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodm0ub3B0aW9ucy5hbGlnbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpb25pY1Njcm9sbERlbGVnYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLiRnZXRCeUhhbmRsZSh2bS5vcHRpb25zLmNhcm91c2VsSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNjcm9sbFRvKHZtLm9wdGlvbnMubWF4U2Nyb2xsICogLTAuNSwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGlvbmljU2Nyb2xsRGVsZWdhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuJGdldEJ5SGFuZGxlKHZtLm9wdGlvbnMuY2Fyb3VzZWxJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2Nyb2xsVG8oMCwgMCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoQ2Fyb3VzZWwgKz0gNDsgLy8gKyA0IHRvIGF2b2lkIGxpbmUgYnJlYWsgd2hlbiB0ZXh0IGdvaW5nIGJvbGRcbiAgICAgICAgICAgICAgICAgICAgdm0ub3B0aW9ucy5tYXhTY3JvbGwgPSAkd2luZG93LmlubmVyV2lkdGggLSB3aWR0aENhcm91c2VsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZtLm9wdGlvbnMud2lkdGhDYXJvdXNlbCA9IHdpZHRoQ2Fyb3VzZWw7XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgQWN0aXZlIGl0ZW0gYXQgc3RhcnRcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdEl0ZW1BdFN0YXJ0ICYmIHZtLm9wdGlvbnMuc2VsZWN0Rmlyc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLm9wdGlvbnMuYWxpZ24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW1BY3RpdmUodm0uYXJyYXlQcm92aWRlcltudW1JdGVtcyAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW1BY3RpdmUodm0uYXJyYXlQcm92aWRlclswXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0SXRlbUF0U3RhcnQgJiYgdm0ub3B0aW9ucy5zZWxlY3RBdFN0YXJ0LmluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0SXRlbSh2bS5hcnJheVByb3ZpZGVyW3ZtLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5pbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgaW5saW5lLWNzcyB0byBjYXJvdXNlbCBhY2NvcmRpbmcgdG8gaXRlbXMgd2lkdGggYW5kIGhlaWdodFxuICAgICAgICAgICAgICAgIHZtLm5hdkVsZW0gPSAkZWxlbWVudC5maW5kKCduYXYnKTtcbiAgICAgICAgICAgICAgICB2bS5uYXZFbGVtLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCcgICAgICAgOiB3aWR0aENhcm91c2VsICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCcgICAgICA6IHZtLm9wdGlvbnMuaGVpZ2h0SXRlbSArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JyAgOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nLWxlZnQnOiBtYXJnaW5MZWZ0ICsgJ3B4J1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2FjaGUgcHVsbCByZWZyZXNoIERPTSBlbGVtZW50cyAoYm90aCB3cmFwcGVyIGFuZCBzdmcgZWxlbSlcbiAgICAgICAgICAgICAgICBpZiAodm0ub3B0aW9ucy5wdWxsUmVmcmVzaC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdm0ucHVsbHJlZnJlc2hJbmRpY2F0b3IgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmEtY2Fyb3VzZWwgLnB1bGxyZWZyZXNoLWluZGljYXRvcicpKTtcbiAgICAgICAgICAgICAgICAgICAgdm0uc3ZnRWxlbSAgICAgICAgICAgICAgPSAkZWxlbWVudC5maW5kKCdnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2VsZWN0SXRlbShpdGVtKSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsUG9zLCBpO1xuXG4gICAgICAgICAgICBzZXRJdGVtQWN0aXZlKGl0ZW0pO1xuXG4gICAgICAgICAgICAvLyBDZW50ZXIgY2Fyb3VzZWxcbiAgICAgICAgICAgIGlmICh2bS5vcHRpb25zLmNlbnRlck9uU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhGcm9tSWQoaXRlbSk7XG5cbiAgICAgICAgICAgICAgICBzY3JvbGxQb3MgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFBvcyA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFBvcyArPSAodm0uYXJyYXlQcm92aWRlcltpXS53aWR0aEl0ZW0gKyB2bS5hcnJheVByb3ZpZGVyW2kgKyAxXS53aWR0aEl0ZW0pICogMC41O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJGlvbmljU2Nyb2xsRGVsZWdhdGUuJGdldEJ5SGFuZGxlKHZtLm9wdGlvbnMuY2Fyb3VzZWxJZCkuc2Nyb2xsVG8oc2Nyb2xsUG9zLCAwLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPbmx5IGZvciB3aGVuIHB1bGwtcmVmcmVzaCBhY3RpdmUgaXMgc2V0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcbiAgICAgICAgICAgIHZhciBwY3Q7XG4gICAgICAgICAgICB2YXIgcG9zICAgICAgICAgICAgID0gJGlvbmljU2Nyb2xsRGVsZWdhdGUuJGdldEJ5SGFuZGxlKHZtLm9wdGlvbnMuY2Fyb3VzZWxJZCkuZ2V0U2Nyb2xsUG9zaXRpb24oKS5sZWZ0O1xuICAgICAgICAgICAgdmFyIHBjdFB1bGwgICAgICAgICA9IDA7XG4gICAgICAgICAgICB2YXIgcGN0Um90SW5kaWNhdG9yID0gMDtcblxuICAgICAgICAgICAgaWYgKHZtLm9wdGlvbnMubWF4U2Nyb2xsIDwgMCkge1xuICAgICAgICAgICAgICAgIHBjdCA9IHBvcyAvIHZtLm9wdGlvbnMubWF4U2Nyb2xsICogLTE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIElmIE5PIG1heFNjcm9sbCAtPiBwcm9iYWJseSBtZWFucyB0aGF0IHRoZXJlIGFyZSBvbmx5IDEgb3IgMiBpdGVtcyAobm8gbmVlZCB0byBzY3JvbGwpXG4gICAgICAgICAgICAgICAgLy8gd2UgZmFrZSBhIHBlcmNlbnRhZ2VcbiAgICAgICAgICAgICAgICBwY3QgPSBwb3MgLyAxMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBjdCA+IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGl4ZWxQdWxsID0gcG9zIC0gdm0ub3B0aW9ucy5tYXhTY3JvbGwgKiAtMTtcbiAgICAgICAgICAgICAgICBwY3RQdWxsICAgICAgID0gcGl4ZWxQdWxsIC8gJHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIHZtLnB1bGxyZWZyZXNoSW5kaWNhdG9yLmNzcyh7J3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVYKCcgKyBwY3RSb3RJbmRpY2F0b3IgKiAtNTYgKyAncHgpJ30pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGN0UHVsbCA+IDAuMjUgJiYgcG9zID4gMCkge1xuICAgICAgICAgICAgICAgIHZtLnB1bGxyZWZyZXNoSW5kaWNhdG9yLmNzcyh7J3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVYKDBweCknLCBkaXNwbGF5OiAnbm9uZSd9KTtcbiAgICAgICAgICAgICAgICBvblB1bGxSZWZyZXNoKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBjdFJvdEluZGljYXRvciA9IHBjdFB1bGwgLyAwLjI7XG4gICAgICAgICAgICAgICAgdm0uc3ZnRWxlbVswXS5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsICdyb3RhdGUoJyArIHBjdFJvdEluZGljYXRvciAqIDM2MCArICcgMzIgMzIpJyk7XG4gICAgICAgICAgICAgICAgdm0ucHVsbHJlZnJlc2hJbmRpY2F0b3IuY3NzKHsndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVgoJyArIHBjdFJvdEluZGljYXRvciAqIC01NiArICdweCknfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLS0tXG4gICAgICAgIC8vIFBSSVZBVEVcbiAgICAgICAgLy8gLS0tLS0tLS0tLVxuICAgICAgICBmdW5jdGlvbiBzZXRJdGVtQWN0aXZlKGl0ZW0pIHtcbiAgICAgICAgICAgIHZtLml0ZW1BY3RpdmUgPSBpdGVtO1xuXG4gICAgICAgICAgICAvLyBDYWxsYmFjayBvbiBzZWxlY3RcbiAgICAgICAgICAgIHZtLm9uU2VsZWN0LmNhbGwobnVsbCwge2l0ZW06IGl0ZW19KTtcblxuICAgICAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ2EtY2Fyb3VzZWwuaXRlbXNlbGVjdGVkJywgaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRJbmRleEZyb21JZChpdGVtKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHZtLmFycmF5UHJvdmlkZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodm0uYXJyYXlQcm92aWRlcltpXSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQdWxsIFJlZnJlc2hcbiAgICAgICAgZnVuY3Rpb24gb25QdWxsUmVmcmVzaCgpIHtcbiAgICAgICAgICAgIGlmICghdm0ub3B0aW9ucy5wdWxsUmVmcmVzaC5sb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLm9wdGlvbnMucHVsbFJlZnJlc2gubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkaW9uaWNTY3JvbGxEZWxlZ2F0ZS4kZ2V0QnlIYW5kbGUodm0ub3B0aW9ucy5jYXJvdXNlbElkKS5mcmVlemVTY3JvbGwodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgc29tZSB3aWR0aCB0byB0aGUgbmF2IHRvIG1ha2Ugc29tZSByb29tIGZvciB0aGUgc3Bpbm5lclxuICAgICAgICAgICAgICAgIHZtLm5hdkVsZW0uY3NzKHsnd2lkdGgnOiB2bS5vcHRpb25zLndpZHRoQ2Fyb3VzZWwgKyA0NSArICdweCd9KTtcbiAgICAgICAgICAgICAgICAkaW9uaWNTY3JvbGxEZWxlZ2F0ZS4kZ2V0QnlIYW5kbGUodm0ub3B0aW9ucy5jYXJvdXNlbElkKS5yZXNpemUoKTtcblxuICAgICAgICAgICAgICAgIHZtLm9wdGlvbnMucHVsbFJlZnJlc2guY2FsbEJhY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25FbmRSZWZyZXNoKCkge1xuICAgICAgICAgICAgdm0ub3B0aW9ucy5wdWxsUmVmcmVzaC5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHZtLm5hdkVsZW0uY3NzKHsnd2lkdGgnOiB2bS5vcHRpb25zLndpZHRoQ2Fyb3VzZWwgKyAncHgnfSk7XG4gICAgICAgICAgICAkaW9uaWNTY3JvbGxEZWxlZ2F0ZS4kZ2V0QnlIYW5kbGUodm0ub3B0aW9ucy5jYXJvdXNlbElkKS5yZXNpemUoKTtcblxuICAgICAgICAgICAgJGlvbmljU2Nyb2xsRGVsZWdhdGUuJGdldEJ5SGFuZGxlKHZtLm9wdGlvbnMuY2Fyb3VzZWxJZCkuZnJlZXplU2Nyb2xsKGZhbHNlKTtcbiAgICAgICAgICAgIHZtLnB1bGxyZWZyZXNoSW5kaWNhdG9yLmNzcyh7J3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVYKDBweCknLCBkaXNwbGF5OiAnYmxvY2snfSk7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE5hbWU6ICAgICAgICAgIG5nLWtub2JcbiAqIERlc2NyaXB0aW9uOiAgIEFuZ3VsYXIuanMgS25vYiBkaXJlY3RpdmVcbiAqIFZlcnNpb246ICAgICAgIDAuMS4zXG4gKiBIb21lcGFnZTogICAgICBodHRwczovL3JhZG1pZS5naXRodWIuaW8vbmcta25vYlxuICogTGljZW5jZTogICAgICAgTUlUXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblwidXNlIHN0cmljdFwiOyFmdW5jdGlvbigpe3ZhciB1aT17fSxLbm9iPWZ1bmN0aW9uKGVsZW1lbnQsdmFsdWUsb3B0aW9ucyl7dGhpcy5lbGVtZW50PWVsZW1lbnQsdGhpcy52YWx1ZT12YWx1ZSx0aGlzLm9wdGlvbnM9b3B0aW9ucyx0aGlzLmluRHJhZz0hMX07S25vYi5wcm90b3R5cGUudmFsdWVUb1JhZGlhbnM9ZnVuY3Rpb24odmFsdWUsdmFsdWVFbmQsYW5nbGVFbmQsYW5nbGVTdGFydCx2YWx1ZVN0YXJ0KXtyZXR1cm4gdmFsdWVFbmQ9dmFsdWVFbmR8fDEwMCx2YWx1ZVN0YXJ0PXZhbHVlU3RhcnR8fDAsYW5nbGVFbmQ9YW5nbGVFbmR8fDM2MCxhbmdsZVN0YXJ0PWFuZ2xlU3RhcnR8fDAsTWF0aC5QSS8xODAqKCh2YWx1ZS12YWx1ZVN0YXJ0KSooYW5nbGVFbmQtYW5nbGVTdGFydCkvKHZhbHVlRW5kLXZhbHVlU3RhcnQpK2FuZ2xlU3RhcnQpfSxLbm9iLnByb3RvdHlwZS5yYWRpYW5zVG9WYWx1ZT1mdW5jdGlvbihyYWRpYW5zLHZhbHVlRW5kLHZhbHVlU3RhcnQsYW5nbGVFbmQsYW5nbGVTdGFydCl7cmV0dXJuIHZhbHVlRW5kPXZhbHVlRW5kfHwxMDAsdmFsdWVTdGFydD12YWx1ZVN0YXJ0fHwwLGFuZ2xlRW5kPWFuZ2xlRW5kfHwzNjAsYW5nbGVTdGFydD1hbmdsZVN0YXJ0fHwwLCgxODAvTWF0aC5QSSpyYWRpYW5zLWFuZ2xlU3RhcnQpKih2YWx1ZUVuZC12YWx1ZVN0YXJ0KS8oYW5nbGVFbmQtYW5nbGVTdGFydCkrdmFsdWVTdGFydH0sS25vYi5wcm90b3R5cGUuY3JlYXRlQXJjPWZ1bmN0aW9uKGlubmVyUmFkaXVzLG91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsZW5kQW5nbGUsY29ybmVyUmFkaXVzKXt2YXIgYXJjPWQzLnN2Zy5hcmMoKS5pbm5lclJhZGl1cyhpbm5lclJhZGl1cykub3V0ZXJSYWRpdXMob3V0ZXJSYWRpdXMpLnN0YXJ0QW5nbGUoc3RhcnRBbmdsZSkuZW5kQW5nbGUoZW5kQW5nbGUpLmNvcm5lclJhZGl1cyhjb3JuZXJSYWRpdXMpO3JldHVybiBhcmN9LEtub2IucHJvdG90eXBlLmRyYXdBcmM9ZnVuY3Rpb24oc3ZnLGFyYyxsYWJlbCxzdHlsZSxjbGljayxkcmFnKXt2YXIgZWxlbT1zdmcuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiaWRcIixsYWJlbCkuYXR0cihcImRcIixhcmMpLnN0eWxlKHN0eWxlKS5hdHRyKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoXCIrdGhpcy5vcHRpb25zLnNpemUvMitcIiwgXCIrdGhpcy5vcHRpb25zLnNpemUvMitcIilcIik7cmV0dXJuIHRoaXMub3B0aW9ucy5yZWFkT25seT09PSExJiYoY2xpY2smJmVsZW0ub24oXCJjbGlja1wiLGNsaWNrKSxkcmFnJiZlbGVtLmNhbGwoZHJhZykpLGVsZW19LEtub2IucHJvdG90eXBlLmNyZWF0ZUFyY3M9ZnVuY3Rpb24oKXt2YXIgb3V0ZXJSYWRpdXM9cGFyc2VJbnQodGhpcy5vcHRpb25zLnNpemUvMiwxMCksc3RhcnRBbmdsZT10aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLDM2MCksZW5kQW5nbGU9dGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLm9wdGlvbnMuZW5kQW5nbGUsMzYwKTt0aGlzLm9wdGlvbnMuc2NhbGUuZW5hYmxlZCYmKG91dGVyUmFkaXVzLT10aGlzLm9wdGlvbnMuc2NhbGUud2lkdGgrdGhpcy5vcHRpb25zLnNjYWxlLnNwYWNlV2lkdGgpO3ZhciBkaWZmLHRyYWNrSW5uZXJSYWRpdXM9b3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnRyYWNrV2lkdGgsY2hhbmdlSW5uZXJSYWRpdXM9b3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLmJhcldpZHRoLHZhbHVlSW5uZXJSYWRpdXM9b3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLmJhcldpZHRoLGludGVyYWN0SW5uZXJSYWRpdXM9MSx0cmFja091dGVyUmFkaXVzPW91dGVyUmFkaXVzLGNoYW5nZU91dGVyUmFkaXVzPW91dGVyUmFkaXVzLHZhbHVlT3V0ZXJSYWRpdXM9b3V0ZXJSYWRpdXMsaW50ZXJhY3RPdXRlclJhZGl1cz1vdXRlclJhZGl1czt0aGlzLm9wdGlvbnMuYmFyV2lkdGg+dGhpcy5vcHRpb25zLnRyYWNrV2lkdGg/KGRpZmY9KHRoaXMub3B0aW9ucy5iYXJXaWR0aC10aGlzLm9wdGlvbnMudHJhY2tXaWR0aCkvMix0cmFja0lubmVyUmFkaXVzLT1kaWZmLHRyYWNrT3V0ZXJSYWRpdXMtPWRpZmYpOnRoaXMub3B0aW9ucy5iYXJXaWR0aDx0aGlzLm9wdGlvbnMudHJhY2tXaWR0aCYmKGRpZmY9KHRoaXMub3B0aW9ucy50cmFja1dpZHRoLXRoaXMub3B0aW9ucy5iYXJXaWR0aCkvMixjaGFuZ2VPdXRlclJhZGl1cy09ZGlmZix2YWx1ZU91dGVyUmFkaXVzLT1kaWZmLGNoYW5nZUlubmVyUmFkaXVzLT1kaWZmLHZhbHVlSW5uZXJSYWRpdXMtPWRpZmYpLHRoaXMub3B0aW9ucy5iZ0NvbG9yJiYodGhpcy5iZ0FyYz10aGlzLmNyZWF0ZUFyYygwLG91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsZW5kQW5nbGUpKSxcInRyb25cIj09PXRoaXMub3B0aW9ucy5za2luLnR5cGUmJih0cmFja091dGVyUmFkaXVzPXRyYWNrT3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnNraW4ud2lkdGgtdGhpcy5vcHRpb25zLnNraW4uc3BhY2VXaWR0aCxjaGFuZ2VPdXRlclJhZGl1cz1jaGFuZ2VPdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuc2tpbi53aWR0aC10aGlzLm9wdGlvbnMuc2tpbi5zcGFjZVdpZHRoLHZhbHVlT3V0ZXJSYWRpdXM9dmFsdWVPdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuc2tpbi53aWR0aC10aGlzLm9wdGlvbnMuc2tpbi5zcGFjZVdpZHRoLGludGVyYWN0T3V0ZXJSYWRpdXM9aW50ZXJhY3RPdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuc2tpbi53aWR0aC10aGlzLm9wdGlvbnMuc2tpbi5zcGFjZVdpZHRoLHRoaXMuaG9vcEFyYz10aGlzLmNyZWF0ZUFyYyhvdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuc2tpbi53aWR0aCxvdXRlclJhZGl1cyxzdGFydEFuZ2xlLGVuZEFuZ2xlKSksdGhpcy50cmFja0FyYz10aGlzLmNyZWF0ZUFyYyh0cmFja0lubmVyUmFkaXVzLHRyYWNrT3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxlbmRBbmdsZSksdGhpcy5jaGFuZ2VBcmM9dGhpcy5jcmVhdGVBcmMoY2hhbmdlSW5uZXJSYWRpdXMsY2hhbmdlT3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxzdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5iYXJDYXApLHRoaXMudmFsdWVBcmM9dGhpcy5jcmVhdGVBcmModmFsdWVJbm5lclJhZGl1cyx2YWx1ZU91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMuYmFyQ2FwKSx0aGlzLmludGVyYWN0QXJjPXRoaXMuY3JlYXRlQXJjKGludGVyYWN0SW5uZXJSYWRpdXMsaW50ZXJhY3RPdXRlclJhZGl1cyxzdGFydEFuZ2xlLGVuZEFuZ2xlKX0sS25vYi5wcm90b3R5cGUuZHJhd0FyY3M9ZnVuY3Rpb24oY2xpY2tJbnRlcmFjdGlvbixkcmFnQmVoYXZpb3Ipe3ZhciBzdmc9ZDMuc2VsZWN0KHRoaXMuZWxlbWVudCkuYXBwZW5kKFwic3ZnXCIpLmF0dHIoXCJ3aWR0aFwiLHRoaXMub3B0aW9ucy5zaXplKS5hdHRyKFwiaGVpZ2h0XCIsdGhpcy5vcHRpb25zLnNpemUpO2lmKHRoaXMub3B0aW9ucy5iZ0NvbG9yJiZ0aGlzLmRyYXdBcmMoc3ZnLHRoaXMuYmdBcmMsXCJiZ0FyY1wiLHtmaWxsOnRoaXMub3B0aW9ucy5iZ0NvbG9yfSksdGhpcy5vcHRpb25zLmRpc3BsYXlJbnB1dCl7dmFyIGZvbnRTaXplPS4yKnRoaXMub3B0aW9ucy5zaXplK1wicHhcIjtcImF1dG9cIiE9PXRoaXMub3B0aW9ucy5mb250U2l6ZSYmKGZvbnRTaXplPXRoaXMub3B0aW9ucy5mb250U2l6ZStcInB4XCIpLHRoaXMub3B0aW9ucy5zdGVwPDEmJih0aGlzLnZhbHVlPXRoaXMudmFsdWUudG9GaXhlZCgxKSk7dmFyIHY9dGhpcy52YWx1ZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXImJih2PXRoaXMub3B0aW9ucy5pbnB1dEZvcm1hdHRlcih2KSksc3ZnLmFwcGVuZChcInRleHRcIikuYXR0cihcImlkXCIsXCJ0ZXh0XCIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLFwibWlkZGxlXCIpLmF0dHIoXCJmb250LXNpemVcIixmb250U2l6ZSkuc3R5bGUoXCJmaWxsXCIsdGhpcy5vcHRpb25zLnRleHRDb2xvcikudGV4dCh2K3RoaXMub3B0aW9ucy51bml0fHxcIlwiKS5hdHRyKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoXCIrdGhpcy5vcHRpb25zLnNpemUvMitcIiwgXCIrKHRoaXMub3B0aW9ucy5zaXplLzIrLjA2KnRoaXMub3B0aW9ucy5zaXplKStcIilcIiksdGhpcy5vcHRpb25zLnN1YlRleHQuZW5hYmxlZCYmKGZvbnRTaXplPS4wNyp0aGlzLm9wdGlvbnMuc2l6ZStcInB4XCIsXCJhdXRvXCIhPT10aGlzLm9wdGlvbnMuc3ViVGV4dC5mb250JiYoZm9udFNpemU9dGhpcy5vcHRpb25zLnN1YlRleHQuZm9udCtcInB4XCIpLHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJjbGFzc1wiLFwic3ViLXRleHRcIikuYXR0cihcInRleHQtYW5jaG9yXCIsXCJtaWRkbGVcIikuYXR0cihcImZvbnQtc2l6ZVwiLGZvbnRTaXplKS5zdHlsZShcImZpbGxcIix0aGlzLm9wdGlvbnMuc3ViVGV4dC5jb2xvcikudGV4dCh0aGlzLm9wdGlvbnMuc3ViVGV4dC50ZXh0KS5hdHRyKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoXCIrdGhpcy5vcHRpb25zLnNpemUvMitcIiwgXCIrKHRoaXMub3B0aW9ucy5zaXplLzIrLjE1KnRoaXMub3B0aW9ucy5zaXplKStcIilcIikpfWlmKHRoaXMub3B0aW9ucy5zY2FsZS5lbmFibGVkKXt2YXIgcmFkaXVzLHF1YW50aXR5LGRhdGEsY291bnQ9MCxhbmdsZT0wLHN0YXJ0UmFkaWFucz10aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMub3B0aW9ucy5taW4sdGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMuZW5kQW5nbGUsdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLm1pbiksZW5kUmFkaWFucz10aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMuZW5kQW5nbGUsdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLm1pbiksZGlmZj0wO2lmKDA9PT10aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSYmMzYwPT09dGhpcy5vcHRpb25zLmVuZEFuZ2xlfHwoZGlmZj0xKSxcImRvdHNcIj09PXRoaXMub3B0aW9ucy5zY2FsZS50eXBlKXt2YXIgd2lkdGg9dGhpcy5vcHRpb25zLnNjYWxlLndpZHRoO3JhZGl1cz10aGlzLm9wdGlvbnMuc2l6ZS8yLXdpZHRoLHF1YW50aXR5PXRoaXMub3B0aW9ucy5zY2FsZS5xdWFudGl0eTt2YXIgb2Zmc2V0PXJhZGl1cyt0aGlzLm9wdGlvbnMuc2NhbGUud2lkdGg7ZGF0YT1kMy5yYW5nZShxdWFudGl0eSkubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIGFuZ2xlPWNvdW50KihlbmRSYWRpYW5zLXN0YXJ0UmFkaWFucyktTWF0aC5QSS8yK3N0YXJ0UmFkaWFucyxjb3VudCs9MS8ocXVhbnRpdHktZGlmZikse2N4Om9mZnNldCtNYXRoLmNvcyhhbmdsZSkqcmFkaXVzLGN5Om9mZnNldCtNYXRoLnNpbihhbmdsZSkqcmFkaXVzLHI6d2lkdGh9fSksc3ZnLnNlbGVjdEFsbChcImNpcmNsZVwiKS5kYXRhKGRhdGEpLmVudGVyKCkuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoe3I6ZnVuY3Rpb24oZCl7cmV0dXJuIGQucn0sY3g6ZnVuY3Rpb24oZCl7cmV0dXJuIGQuY3h9LGN5OmZ1bmN0aW9uKGQpe3JldHVybiBkLmN5fSxmaWxsOnRoaXMub3B0aW9ucy5zY2FsZS5jb2xvcn0pfWVsc2UgaWYoXCJsaW5lc1wiPT09dGhpcy5vcHRpb25zLnNjYWxlLnR5cGUpe3ZhciBoZWlnaHQ9dGhpcy5vcHRpb25zLnNjYWxlLmhlaWdodDtyYWRpdXM9dGhpcy5vcHRpb25zLnNpemUvMixxdWFudGl0eT10aGlzLm9wdGlvbnMuc2NhbGUucXVhbnRpdHksZGF0YT1kMy5yYW5nZShxdWFudGl0eSkubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIGFuZ2xlPWNvdW50KihlbmRSYWRpYW5zLXN0YXJ0UmFkaWFucyktTWF0aC5QSS8yK3N0YXJ0UmFkaWFucyxjb3VudCs9MS8ocXVhbnRpdHktZGlmZikse3gxOnJhZGl1cytNYXRoLmNvcyhhbmdsZSkqcmFkaXVzLHkxOnJhZGl1cytNYXRoLnNpbihhbmdsZSkqcmFkaXVzLHgyOnJhZGl1cytNYXRoLmNvcyhhbmdsZSkqKHJhZGl1cy1oZWlnaHQpLHkyOnJhZGl1cytNYXRoLnNpbihhbmdsZSkqKHJhZGl1cy1oZWlnaHQpfX0pLHN2Zy5zZWxlY3RBbGwoXCJsaW5lXCIpLmRhdGEoZGF0YSkuZW50ZXIoKS5hcHBlbmQoXCJsaW5lXCIpLmF0dHIoe3gxOmZ1bmN0aW9uKGQpe3JldHVybiBkLngxfSx5MTpmdW5jdGlvbihkKXtyZXR1cm4gZC55MX0seDI6ZnVuY3Rpb24oZCl7cmV0dXJuIGQueDJ9LHkyOmZ1bmN0aW9uKGQpe3JldHVybiBkLnkyfSxcInN0cm9rZS13aWR0aFwiOnRoaXMub3B0aW9ucy5zY2FsZS53aWR0aCxzdHJva2U6dGhpcy5vcHRpb25zLnNjYWxlLmNvbG9yfSl9fVwidHJvblwiPT09dGhpcy5vcHRpb25zLnNraW4udHlwZSYmdGhpcy5kcmF3QXJjKHN2Zyx0aGlzLmhvb3BBcmMsXCJob29wQXJjXCIse2ZpbGw6dGhpcy5vcHRpb25zLnNraW4uY29sb3J9KSx0aGlzLmRyYXdBcmMoc3ZnLHRoaXMudHJhY2tBcmMsXCJ0cmFja0FyY1wiLHtmaWxsOnRoaXMub3B0aW9ucy50cmFja0NvbG9yfSksdGhpcy5vcHRpb25zLmRpc3BsYXlQcmV2aW91cz90aGlzLmNoYW5nZUVsZW09dGhpcy5kcmF3QXJjKHN2Zyx0aGlzLmNoYW5nZUFyYyxcImNoYW5nZUFyY1wiLHtmaWxsOnRoaXMub3B0aW9ucy5wcmV2QmFyQ29sb3J9KTp0aGlzLmNoYW5nZUVsZW09dGhpcy5kcmF3QXJjKHN2Zyx0aGlzLmNoYW5nZUFyYyxcImNoYW5nZUFyY1wiLHtcImZpbGwtb3BhY2l0eVwiOjB9KSx0aGlzLnZhbHVlRWxlbT10aGlzLmRyYXdBcmMoc3ZnLHRoaXMudmFsdWVBcmMsXCJ2YWx1ZUFyY1wiLHtmaWxsOnRoaXMub3B0aW9ucy5iYXJDb2xvcn0pO3ZhciBjdXJzb3I9XCJwb2ludGVyXCI7dGhpcy5vcHRpb25zLnJlYWRPbmx5JiYoY3Vyc29yPVwiZGVmYXVsdFwiKSx0aGlzLmRyYXdBcmMoc3ZnLHRoaXMuaW50ZXJhY3RBcmMsXCJpbnRlcmFjdEFyY1wiLHtcImZpbGwtb3BhY2l0eVwiOjAsY3Vyc29yOmN1cnNvcn0sY2xpY2tJbnRlcmFjdGlvbixkcmFnQmVoYXZpb3IpfSxLbm9iLnByb3RvdHlwZS5kcmF3PWZ1bmN0aW9uKHVwZGF0ZSl7ZnVuY3Rpb24gZHJhZ0ludGVyYWN0aW9uKCl7dGhhdC5pbkRyYWc9ITA7dmFyIHg9ZDMuZXZlbnQueC10aGF0Lm9wdGlvbnMuc2l6ZS8yLHk9ZDMuZXZlbnQueS10aGF0Lm9wdGlvbnMuc2l6ZS8yO2ludGVyYWN0aW9uKHgseSwhMSl9ZnVuY3Rpb24gY2xpY2tJbnRlcmFjdGlvbigpe3RoYXQuaW5EcmFnPSExO3ZhciBjb29yZHM9ZDMubW91c2UodGhpcy5wYXJlbnROb2RlKSx4PWNvb3Jkc1swXS10aGF0Lm9wdGlvbnMuc2l6ZS8yLHk9Y29vcmRzWzFdLXRoYXQub3B0aW9ucy5zaXplLzI7aW50ZXJhY3Rpb24oeCx5LCEwKX1mdW5jdGlvbiBpbnRlcmFjdGlvbih4LHksaXNGaW5hbCl7dmFyIHJhZGlhbnMsZGVsdGEsYXJjPU1hdGguYXRhbih5L3gpLyhNYXRoLlBJLzE4MCk7aWYoeD49MCYmMD49eXx8eD49MCYmeT49MD9kZWx0YT05MDooZGVsdGE9MjcwLHRoYXQub3B0aW9ucy5zdGFydEFuZ2xlPDAmJihkZWx0YT0tOTApKSxyYWRpYW5zPShkZWx0YSthcmMpKihNYXRoLlBJLzE4MCksdGhhdC52YWx1ZT10aGF0LnJhZGlhbnNUb1ZhbHVlKHJhZGlhbnMsdGhhdC5vcHRpb25zLm1heCx0aGF0Lm9wdGlvbnMubWluLHRoYXQub3B0aW9ucy5lbmRBbmdsZSx0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZSksdGhhdC52YWx1ZT49dGhhdC5vcHRpb25zLm1pbiYmdGhhdC52YWx1ZTw9dGhhdC5vcHRpb25zLm1heCYmKHRoYXQudmFsdWU9TWF0aC5yb3VuZCh+figodGhhdC52YWx1ZTwwPy0uNTouNSkrdGhhdC52YWx1ZS90aGF0Lm9wdGlvbnMuc3RlcCkqdGhhdC5vcHRpb25zLnN0ZXAqMTAwKS8xMDAsdGhhdC5vcHRpb25zLnN0ZXA8MSYmKHRoYXQudmFsdWU9dGhhdC52YWx1ZS50b0ZpeGVkKDEpKSx1cGRhdGUodGhhdC52YWx1ZSksdGhhdC52YWx1ZUFyYy5lbmRBbmdsZSh0aGF0LnZhbHVlVG9SYWRpYW5zKHRoYXQudmFsdWUsdGhhdC5vcHRpb25zLm1heCx0aGF0Lm9wdGlvbnMuZW5kQW5nbGUsdGhhdC5vcHRpb25zLnN0YXJ0QW5nbGUsdGhhdC5vcHRpb25zLm1pbikpLHRoYXQudmFsdWVFbGVtLmF0dHIoXCJkXCIsdGhhdC52YWx1ZUFyYyksaXNGaW5hbCYmKHRoYXQuY2hhbmdlQXJjLmVuZEFuZ2xlKHRoYXQudmFsdWVUb1JhZGlhbnModGhhdC52YWx1ZSx0aGF0Lm9wdGlvbnMubWF4LHRoYXQub3B0aW9ucy5lbmRBbmdsZSx0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZSx0aGF0Lm9wdGlvbnMubWluKSksdGhhdC5jaGFuZ2VFbGVtLmF0dHIoXCJkXCIsdGhhdC5jaGFuZ2VBcmMpKSx0aGF0Lm9wdGlvbnMuZGlzcGxheUlucHV0KSl7dmFyIHY9dGhhdC52YWx1ZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGF0Lm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXImJih2PXRoYXQub3B0aW9ucy5pbnB1dEZvcm1hdHRlcih2KSksZDMuc2VsZWN0KHRoYXQuZWxlbWVudCkuc2VsZWN0KFwiI3RleHRcIikudGV4dCh2K3RoYXQub3B0aW9ucy51bml0fHxcIlwiKX19ZDMuc2VsZWN0KHRoaXMuZWxlbWVudCkuc2VsZWN0KFwic3ZnXCIpLnJlbW92ZSgpO3ZhciB0aGF0PXRoaXM7dGhhdC5jcmVhdGVBcmNzKCk7dmFyIGRyYWdCZWhhdmlvcj1kMy5iZWhhdmlvci5kcmFnKCkub24oXCJkcmFnXCIsZHJhZ0ludGVyYWN0aW9uKS5vbihcImRyYWdlbmRcIixjbGlja0ludGVyYWN0aW9uKTt0aGF0LmRyYXdBcmNzKGNsaWNrSW50ZXJhY3Rpb24sZHJhZ0JlaGF2aW9yKSx0aGF0Lm9wdGlvbnMuYW5pbWF0ZS5lbmFibGVkP3RoYXQudmFsdWVFbGVtLnRyYW5zaXRpb24oKS5lYXNlKHRoYXQub3B0aW9ucy5hbmltYXRlLmVhc2UpLmR1cmF0aW9uKHRoYXQub3B0aW9ucy5hbmltYXRlLmR1cmF0aW9uKS50d2VlbihcIlwiLGZ1bmN0aW9uKCl7dmFyIGk9ZDMuaW50ZXJwb2xhdGUodGhhdC52YWx1ZVRvUmFkaWFucyh0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZSwzNjApLHRoYXQudmFsdWVUb1JhZGlhbnModGhhdC52YWx1ZSx0aGF0Lm9wdGlvbnMubWF4LHRoYXQub3B0aW9ucy5lbmRBbmdsZSx0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZSx0aGF0Lm9wdGlvbnMubWluKSk7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciB2YWw9aSh0KTt0aGF0LnZhbHVlRWxlbS5hdHRyKFwiZFwiLHRoYXQudmFsdWVBcmMuZW5kQW5nbGUodmFsKSksdGhhdC5jaGFuZ2VFbGVtLmF0dHIoXCJkXCIsdGhhdC5jaGFuZ2VBcmMuZW5kQW5nbGUodmFsKSl9fSk6KHRoYXQuY2hhbmdlQXJjLmVuZEFuZ2xlKHRoaXMudmFsdWVUb1JhZGlhbnModGhpcy52YWx1ZSx0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5lbmRBbmdsZSx0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMubWluKSksdGhhdC5jaGFuZ2VFbGVtLmF0dHIoXCJkXCIsdGhhdC5jaGFuZ2VBcmMpLHRoYXQudmFsdWVBcmMuZW5kQW5nbGUodGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLnZhbHVlLHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLmVuZEFuZ2xlLHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5taW4pKSx0aGF0LnZhbHVlRWxlbS5hdHRyKFwiZFwiLHRoYXQudmFsdWVBcmMpKX0sS25vYi5wcm90b3R5cGUuc2V0VmFsdWU9ZnVuY3Rpb24obmV3VmFsdWUpe2lmKCF0aGlzLmluRHJhZyYmdGhpcy52YWx1ZT49dGhpcy5vcHRpb25zLm1pbiYmdGhpcy52YWx1ZTw9dGhpcy5vcHRpb25zLm1heCl7dmFyIHJhZGlhbnM9dGhpcy52YWx1ZVRvUmFkaWFucyhuZXdWYWx1ZSx0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5lbmRBbmdsZSx0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMubWluKTtpZih0aGlzLnZhbHVlPU1hdGgucm91bmQofn4oKDA+bmV3VmFsdWU/LS41Oi41KStuZXdWYWx1ZS90aGlzLm9wdGlvbnMuc3RlcCkqdGhpcy5vcHRpb25zLnN0ZXAqMTAwKS8xMDAsdGhpcy5vcHRpb25zLnN0ZXA8MSYmKHRoaXMudmFsdWU9dGhpcy52YWx1ZS50b0ZpeGVkKDEpKSx0aGlzLmNoYW5nZUFyYy5lbmRBbmdsZShyYWRpYW5zKSxkMy5zZWxlY3QodGhpcy5lbGVtZW50KS5zZWxlY3QoXCIjY2hhbmdlQXJjXCIpLmF0dHIoXCJkXCIsdGhpcy5jaGFuZ2VBcmMpLHRoaXMudmFsdWVBcmMuZW5kQW5nbGUocmFkaWFucyksZDMuc2VsZWN0KHRoaXMuZWxlbWVudCkuc2VsZWN0KFwiI3ZhbHVlQXJjXCIpLmF0dHIoXCJkXCIsdGhpcy52YWx1ZUFyYyksdGhpcy5vcHRpb25zLmRpc3BsYXlJbnB1dCl7dmFyIHY9dGhpcy52YWx1ZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXImJih2PXRoaXMub3B0aW9ucy5pbnB1dEZvcm1hdHRlcih2KSksZDMuc2VsZWN0KHRoaXMuZWxlbWVudCkuc2VsZWN0KFwiI3RleHRcIikudGV4dCh2K3RoaXMub3B0aW9ucy51bml0fHxcIlwiKX19fSx1aS5Lbm9iPUtub2IsdWkua25vYkRpcmVjdGl2ZT1mdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVcIixzY29wZTp7dmFsdWU6XCI9XCIsb3B0aW9uczpcIj1cIn0sbGluazpmdW5jdGlvbihzY29wZSxlbGVtZW50KXtzY29wZS52YWx1ZT1zY29wZS52YWx1ZXx8MDt2YXIgZGVmYXVsdE9wdGlvbnM9e3NraW46e3R5cGU6XCJzaW1wbGVcIix3aWR0aDoxMCxjb2xvcjpcInJnYmEoMjU1LDAsMCwuNSlcIixzcGFjZVdpZHRoOjV9LGFuaW1hdGU6e2VuYWJsZWQ6ITAsZHVyYXRpb246MWUzLGVhc2U6XCJib3VuY2VcIn0sc2l6ZToyMDAsc3RhcnRBbmdsZTowLGVuZEFuZ2xlOjM2MCx1bml0OlwiXCIsZGlzcGxheUlucHV0OiEwLGlucHV0Rm9ybWF0dGVyOmZ1bmN0aW9uKHYpe3JldHVybiB2fSxyZWFkT25seTohMSx0cmFja1dpZHRoOjUwLGJhcldpZHRoOjUwLHRyYWNrQ29sb3I6XCJyZ2JhKDAsMCwwLDApXCIsYmFyQ29sb3I6XCJyZ2JhKDI1NSwwLDAsLjUpXCIscHJldkJhckNvbG9yOlwicmdiYSgwLDAsMCwwKVwiLHRleHRDb2xvcjpcIiMyMjJcIixiYXJDYXA6MCxmb250U2l6ZTpcImF1dG9cIixzdWJUZXh0OntlbmFibGVkOiExLHRleHQ6XCJcIixjb2xvcjpcImdyYXlcIixmb250OlwiYXV0b1wifSxiZ0NvbG9yOlwiXCIsc2NhbGU6e2VuYWJsZWQ6ITEsdHlwZTpcImxpbmVzXCIsY29sb3I6XCJncmF5XCIsd2lkdGg6NCxxdWFudGl0eToyMCxoZWlnaHQ6MTAsc3BhY2VXaWR0aDoxNX0sc3RlcDoxLGRpc3BsYXlQcmV2aW91czohMSxtaW46MCxtYXg6MTAwLGR5bmFtaWNPcHRpb25zOiExfTtzY29wZS5vcHRpb25zPWFuZ3VsYXIubWVyZ2UoZGVmYXVsdE9wdGlvbnMsc2NvcGUub3B0aW9ucyk7dmFyIGtub2I9bmV3IHVpLktub2IoZWxlbWVudFswXSxzY29wZS52YWx1ZSxzY29wZS5vcHRpb25zKTtpZihzY29wZS4kd2F0Y2goXCJ2YWx1ZVwiLGZ1bmN0aW9uKG5ld1ZhbHVlLG9sZFZhbHVlKXtudWxsPT09bmV3VmFsdWUmJlwidW5kZWZpbmVkXCI9PXR5cGVvZiBuZXdWYWx1ZXx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIG9sZFZhbHVlfHxuZXdWYWx1ZT09PW9sZFZhbHVlfHxrbm9iLnNldFZhbHVlKG5ld1ZhbHVlKX0pLHNjb3BlLm9wdGlvbnMuZHluYW1pY09wdGlvbnMpe3ZhciBpc0ZpcnN0V2F0Y2hPbk9wdGlvbnM9ITA7c2NvcGUuJHdhdGNoKFwib3B0aW9uc1wiLGZ1bmN0aW9uKCl7aWYoaXNGaXJzdFdhdGNoT25PcHRpb25zKWlzRmlyc3RXYXRjaE9uT3B0aW9ucz0hMTtlbHNle3ZhciBuZXdPcHRpb25zPWFuZ3VsYXIubWVyZ2UoZGVmYXVsdE9wdGlvbnMsc2NvcGUub3B0aW9ucyk7a25vYj1uZXcgdWkuS25vYihlbGVtZW50WzBdLHNjb3BlLnZhbHVlLG5ld09wdGlvbnMpLGRyYXdLbm9iKCl9fSwhMCl9dmFyIGRyYXdLbm9iPWZ1bmN0aW9uKCl7a25vYi5kcmF3KGZ1bmN0aW9uKHZhbHVlKXtzY29wZS4kYXBwbHkoZnVuY3Rpb24oKXtzY29wZS52YWx1ZT12YWx1ZX0pfSl9O2RyYXdLbm9iKCl9fX0sYW5ndWxhci5tb2R1bGUoXCJ1aS5rbm9iXCIsW10pLmRpcmVjdGl2ZShcInVpS25vYlwiLHVpLmtub2JEaXJlY3RpdmUpfSgpOyIsIid1c2Ugc3RyaWN0JztcblxuLy8gYW5ndWxhciBtb2R1bGVzXG4vLyByZXF1aXJlKCdhbmd1bGFyLW1vZHVsZS1zYW5pdGl6ZScpO1xuLy8gcmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcblxucmVxdWlyZSgnLi9jb250cm9sbGVycy9faW5kZXgnKTtcbnJlcXVpcmUoJy4vc2VydmljZXMvX2luZGV4Jyk7XG5yZXF1aXJlKCcuL21vZGVscy9faW5kZXgnKTtcbnJlcXVpcmUoJy4vZGlyZWN0aXZlcy9faW5kZXgnKTtcblxucmVxdWlyZSgnLi4vYm93ZXJfY29tcG9uZW50cy9uZy1rbm9iL2Rpc3Qvbmcta25vYi5taW4nKTtcbnJlcXVpcmUoJy4uL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1hbmltYXRlL2FuZ3VsYXItYW5pbWF0ZS5taW4nKTtcbnJlcXVpcmUoJy4uL2Jvd2VyX2NvbXBvbmVudHMvaW9uaWMtYWR2YW5jZWQtY2Fyb3VzZWwvc3JjL2FkdmFuY2VkLWNhcm91c2VsJyk7XG5cblxuXG4vLyBjcmVhdGUgYW5kIGJvb3RzdHJhcCBhcHBsaWNhdGlvblxuYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICB2YXIgcmVxdWlyZXMgPSBbXG4gICAgJ2lvbmljJyxcbiAgICAnYXBwLmNvbnRyb2xsZXJzJyxcbiAgICAnYXBwLnNlcnZpY2VzJyxcbiAgICAnYXBwLm1vZGVscycsXG4gICAgJ2FwcC5kaXJlY3RpdmVzJyxcbiAgICAndWkucm91dGVyJyxcbiAgICAndWkua25vYicsXG4gICAgJ2FDYXJvdXNlbCcsXG4gICAgJ25nQW5pbWF0ZSdcbiAgICAvLyAndGVtcGxhdGVzJyxcbiAgICAvLyAnbmdTYW5pdGl6ZScsXG4gIF07XG5cbiAgLy8gbW91bnQgb24gd2luZG93IGZvciB0ZXN0aW5nXG4gIHdpbmRvdy5hcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgcmVxdWlyZXMpO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb25zdGFudCgnQXBwU2V0dGluZ3MnLCByZXF1aXJlKCcuL2NvbnN0YW50cy5kZXZlbG9wbWVudCcpKTtcblxuICBhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29uZmlnKHJlcXVpcmUoJy4vb25fY29uZmlnJykpO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5ydW4ocmVxdWlyZSgnLi9vbl9ydW4nKSk7XG5cblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGFuZ3VsYXIuYm9vdHN0cmFwKGRvY3VtZW50LCBbJ2FwcCddKTsgICBcbiAgfSwgKDEwMDApKTtcbiAgXG5cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFwcFNldHRpbmdzID0ge1xuICB5b2NhbEFQSTp7XG4gICAgLy8gYmFzZTogJ2h0dHA6Ly95b2VuZHBvaW50NC13YmJzLnJoY2xvdWQuY29tL2FwaS92MS95b2thbC9kYXRhLydcbiAgICBiYXNlOiAnaHR0cDovL2xvY2FsaG9zdDo4MTAwL2FwaS92MS95b2thbC9kYXRhLydcbiAgfSxcblxuICBHTUFQX0RFRkFVTFQ6e1xuICBcdFJBRElVUzogODAwLFxuICBcdFpPT006ICAgMTRcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBTZXR0aW5nczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEFwcEN0cmwoJGxvZywgJHJvb3RTY29wZSwgJHNjb3BlLCAkaW9uaWNNb2RhbCwgJHRpbWVvdXQsIGNvb3JkaW5hdGVzLCBBcHBTZXR0aW5ncykge1xuXG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdBcHBDdHJsJyk7XG5cbiAgdmFyIHZtID0gdGhpcztcbiAgLy8gc2V0IGN1cmVudCBwb3NpdGlvbiB0byByb290U2NvcGUgdG8gbWFrZSBnbG9iYWxseSBhdmFpbGFibGUgXG4gICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uID0gY29vcmRpbmF0ZXM7XG4gIFxuXG4gIC8vIEZvcm0gZGF0YSBmb3IgdGhlIGxvZ2luIG1vZGFsXG4gICRzY29wZS5sb2dpbkRhdGEgPSB7fTtcblxuICAvLyBDcmVhdGUgdGhlIGxvZ2luIG1vZGFsIHRoYXQgd2Ugd2lsbCB1c2UgbGF0ZXJcbiAgJGlvbmljTW9kYWwuZnJvbVRlbXBsYXRlVXJsKCd0ZW1wbGF0ZXMvbG9naW4uaHRtbCcsIHtcbiAgICBzY29wZTogJHNjb3BlXG4gIH0pLnRoZW4oZnVuY3Rpb24obW9kYWwpIHtcbiAgICAkc2NvcGUubW9kYWwgPSBtb2RhbDtcbiAgfSk7XG5cbiAgLy8gVHJpZ2dlcmVkIGluIHRoZSBsb2dpbiBtb2RhbCB0byBjbG9zZSBpdFxuICAkc2NvcGUuY2xvc2VMb2dpbiA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5tb2RhbC5oaWRlKCk7XG4gIH07XG5cbiAgLy8gT3BlbiB0aGUgbG9naW4gbW9kYWxcbiAgJHNjb3BlLmxvZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLm1vZGFsLnNob3coKTtcbiAgfTtcblxuICAvLyBQZXJmb3JtIHRoZSBsb2dpbiBhY3Rpb24gd2hlbiB0aGUgdXNlciBzdWJtaXRzIHRoZSBsb2dpbiBmb3JtXG4gICRzY29wZS5kb0xvZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ0RvaW5nIGxvZ2luJywgJHNjb3BlLmxvZ2luRGF0YSk7XG5cbiAgICAvLyBTaW11bGF0ZSBhIGxvZ2luIGRlbGF5LiBSZW1vdmUgdGhpcyBhbmQgcmVwbGFjZSB3aXRoIHlvdXIgbG9naW5cbiAgICAvLyBjb2RlIGlmIHVzaW5nIGEgbG9naW4gc3lzdGVtXG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAkc2NvcGUuY2xvc2VMb2dpbigpO1xuICAgIH0sIDEwMDApO1xuICB9O1xuXG4gIFxuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdBcHBDdHJsJywgQXBwQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBCcm93c2VDdHJsKCRzY29wZSwgJHJvb3RTY29wZSwgJHEsICRodHRwLCAkbG9nLCAkZmlsdGVyLCAkdGltZW91dCwgTG9jYXRpb25zU2VydmljZSwgICRpb25pY0xvYWRpbmcsICAkaW9uaWNTbGlkZUJveERlbGVnYXRlLCBBcHBTZXR0aW5ncykge1xuICAgICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdCcm93c2VDdHJsJyk7XG5cbiBcdC8vIFZpZXdNb2RlbFxuICBcdHZhciB2bSA9IHRoaXM7XG4gICAgdm0ucmFkaXVzID0gQXBwU2V0dGluZ3MuR01BUF9SQURJVVM7XG4gICAgJHNjb3BlLnJhZGl1cyA9IEFwcFNldHRpbmdzLkdNQVBfUkFESVVTO1xuICAgICRzY29wZS5DdXJyZW50Q29vcmRzID0gICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uO1xuXG4gICAgJHNjb3BlLmxvY2F0aW9ucyA9W107XG4gICAgJHNjb3BlLmxvY2F0aW9uc19ncm91cHMgPVtdO1xuICAgICRzY29wZS5sb2NhdGlvbnNfbG9hZGVkID0gMDsgXG4gICAgJHNjb3BlLmNhcm91c2VscyA9IFtdO1xuXG4gICAgJGlvbmljTG9hZGluZy5zaG93KHtcbiAgICAgICAgdGVtcGxhdGU6IFwiRmluZGluZyBSYWQgU3BvdHMgLi4uXCIsXG4gICAgICAgIGJhY2tkcm9wOiB0cnVlXG4gICAgfSk7XG5cbiAgICAkc2NvcGUuY2Fyb3VzZWxPcHRpb25zID0ge1xuICAgICAgICB0ZW1wbGF0ZSAgICAgIDogJy4uL3RlbXBsYXRlcy9sb2NhdGlvbnMtY2Fyb3VzZWwuaXRlbS5odG1sJywgLy8gdGVtcGxhdGVVcmwgaW4gY2FzZSB5b3UgZG9uJ3QgbmVlZCB0byBwYXNzIGEgZGlyZWN0aXZlIGJ1dCBqdXN0IGEgaHRtbCB2aWV3XG4gICAgICAgIGFsaWduICAgICAgICAgOiAnbGVmdCcsIC8vIGFsaWduZW1lbnQgb2YgdGhlIGNhcm91c2VsXG4gICAgICAgIHNlbGVjdEZpcnN0ICAgOiB0cnVlLFxuICAgICAgICBjZW50ZXJPblNlbGVjdDogZmFsc2UsIC8vIGNlbnRlciBjYXJvdXNlbCB3aGVuIGFuIGl0ZW0gaXMgc2VsZWN0ZWRcbiAgICB9O1xuXG4gICAgJHNjb3BlLm9uU2VsZWN0Q2Fyb3VzZWwgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBjYXQgPSAkc2NvcGUuZ2V0X2NhdGVnb3J5X3NsdWcoaXRlbS5jYXRhZ29yeWxldmVsMSk7XG4gICAgICAgICRsb2cubG9nKCdDYXJvdXNlbCAnK2NhdCsnIGl0ZW0gc2VsZWN0ZWQ6e25hbWV9JywgaXRlbSk7XG4gICAgICAgICRzY29wZS5jYXJvdXNlbHNbY2F0XS5pdGVtU2VsZWN0ZWQgPSBpdGVtO1xuICAgIH07XG5cbiAgICAkc2NvcGUucmFuZG9FeHBlbnNlV2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKzEpOyAgXG4gICAgfTtcbiAgICBcbiAgICAkc2NvcGUuZ2V0X2NhdGVnb3J5X3NsdWcgPSBmdW5jdGlvbiAoY2F0X25hbWUpIHtcbiAgICAgICAgcmV0dXJuIGNhdF9uYW1lLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uKGNhdCkgeyByZXR1cm4gY2F0LnRvTG93ZXJDYXNlKCkudHJpbSgpOyB9KS5qb2luKCctJyk7XG4gICAgfVxuXG4gICAgTG9jYXRpb25zU2VydmljZS5hbGwoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvY2F0aW9ucyA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdyb3VwIGxvY2F0aW9ucyBieSBjYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IHRyYXZlbFRpbWUgZm9yIGVhY2ggbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBjYXJvdXNlbE9wdGlvbnMgZm9yIGVhY2ggY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2NhdGlvbnNfZ3JvdXBzID0gXy5jaGFpbihkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ncm91cEJ5KFwiY2F0YWdvcnlsZXZlbDFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGxvY2F0aW9ucywgY2F0LCBhcnJheSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9ucy5tYXAoZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnNldFRyYXZlbFRpbWUoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2NhdGlvbnNfbG9hZGVkKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeV9zbHVnOiAkc2NvcGUuZ2V0X2NhdGVnb3J5X3NsdWcoY2F0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uczogbG9jYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGNhdGVnb3J5X29iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuY2Fyb3VzZWxzW2NhdGVnb3J5X29iai5jYXRlZ29yeV9zbHVnXSA9IGFuZ3VsYXIuZXh0ZW5kKHt9LCB7Y2Fyb3VzZWxJRDogJ2xvY2F0aW9ucy1jYXJvdXNlbC0nK2NhdGVnb3J5X29iai5jYXRlZ29yeV9zbHVnLCBpdGVtU2VsZWN0ZWQ6e319LCAkc2NvcGUuY2Fyb3VzZWxPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5X29iajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCdsb2NhdGlvbnNfbG9hZGVkJyxmdW5jdGlvbihuZXdfdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV3X3ZhbCA9PSBkYXRhLmxlbmd0aCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc29ydCBsb2NhdGlvbiBncm91cHMgYWxwYWhiZXRpY2FsbHkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvcnQgZ3JvdXAgbG9jYXRpb25zIGJ5IHRyYXZlbFRpbWUudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvY2F0aW9uc19ncm91cHNfc29ydGVkID0gXy5jaGFpbigkc2NvcGUubG9jYXRpb25zX2dyb3VwcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc29ydGVkX2xvY2F0aW9ucyA9ICRmaWx0ZXIoJ29yZGVyQnknKShncm91cC5sb2NhdGlvbnMsICd0cmF2ZWxUaW1lLnZhbHVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXIuZXh0ZW5kKHt9LGdyb3VwLCB7bG9jYXRpb25zOnNvcnRlZF9sb2NhdGlvbnN9ICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnRCeSgnY2F0ZWdvcnknKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpb25pY0xvYWRpbmcuaGlkZSgpOyAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgXHQgICAgICAgICAgICAgICAgfSk7XG5cblxuXG59O1xuXG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ0Jyb3dzZUN0cmwnLCBCcm93c2VDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIENvbm5lY3RDdHJsKCRsb2csICRyb290U2NvcGUsICRzY29wZSwgQXBwU2V0dGluZ3MpIHtcblxuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnQ29ubmVjdEN0cmwnKTtcblxuICB2YXIgdm0gPSB0aGlzO1xuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdDb25uZWN0Q3RybCcsIENvbm5lY3RDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIExvZ2luQ3RybCgkbG9nLCAkcm9vdFNjb3BlLCAkc2NvcGUsIEFwcFNldHRpbmdzKSB7XG5cbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0xvZ2luQ3RybCcpO1xuXG4gIHZhciB2bSA9IHRoaXM7XG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIExvZ2luQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBNYXBDdHJsKCRyb290U2NvcGUsICRzY29wZSwgJGxvZywgJGlvbmljTG9hZGluZywgQXBwU2V0dGluZ3MsIEdNYXAsIExvY2F0aW9uc1NlcnZpY2UsICRpb25pY1NsaWRlQm94RGVsZWdhdGUpIHtcblxuICAgICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKFwiTWFwQ3RybFwiKTtcblxuIFx0ICAvLyBWaWV3TW9kZWxcbiAgXHR2YXIgdm0gPSB0aGlzO1xuICAgIHZhciBjdXJyZW50Q2VudGVyID0gJHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb247XG5cbiAgICB2bS50aGlzX3JhZGl1cyA9IDUwMDA7XG4gICAgdm0uZ21hcCA9IG5ldyBHTWFwKHt6b29tOjEzLCByYWRpdXM6dm0udGhpc19yYWRpdXN9KTsgICAgXG4gICAgdm0uZ21hcC5oZWlnaHQgPSA2MjU7XG4gICAgdm0uc2hvd1NsaWRlciA9IGZhbHNlO1xuICAgIHZtLm1hcmtlcnMgPSBbXTsgICAgXG4gICAgXG4gICAgXG4gICAgdm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlID0gW107XG5cbiAgICB2bS5rbm9iID17XG4gICAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgICBvcHRpb25zOnsgZHluYW1pY09wdGlvbnM6IHRydWUgfSxcbiAgICAgICAgICAgIH07XG5cbiAgICBcbiAgICB2YXIgc2V0S25vYlZhbHVlID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAvLyBzZXQgdWkua25vYiBvcHRpb25zIGhlcmVcbiAgICAgIC8vIHRoaXMgdHJpY2tzIHRoZSBrbm9iIGludG8gdXBkYXRpbmcgdGhlIHZhbHVlIGNvcnJlY3RseVxuICAgICAgICAgIHZtLmtub2IgPXtcbiAgICAgICAgICAgICAgdmFsdWU6dmFsLFxuICAgICAgICAgICAgICBvcHRpb25zOntcbiAgICAgICAgICAgICAgICBzaXplOiAxMDAsXG4gICAgICAgICAgICAgICAgbWluOiAgMSxcbiAgICAgICAgICAgICAgICBtYXg6ICAxMDAwMCxcbiAgICAgICAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgICAgICAgIGJhckNvbG9yOiAnIzVCQzAxRScsXG4gICAgICAgICAgICAgICAgdHJhY2tDb2xvcjogJyMyMTIxMjEnLFxuICAgICAgICAgICAgICAgIHRyYWNrV2lkdGg6IDUsXG4gICAgICAgICAgICAgICAgYmFyV2lkdGg6IDIwLFxuICAgICAgICAgICAgICAgIHN1YlRleHQ6IHtcbiAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnbWV0ZXIgcmFkaXVzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgXG5cblxuICAgIHZhciBzZXRNYXJrZXJzID0gZnVuY3Rpb24obG9jYXRpb25zKSB7XG4gICAgICBsb2NhdGlvbnMubWFwKGZ1bmN0aW9uKGxvY2F0ZSl7XG4gICAgICAgICAgICB2YXIgbWFya2VyID0gdm0uZ21hcC5kcm9wTWFya2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogcGFyc2VGbG9hdChsb2NhdGUubGF0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHBhcnNlRmxvYXQobG9jYXRlLmxvbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICAgICBsb2NhdGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcDogICAgICAgdm0uZ21hcC5tYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAgIDAuMTI1XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdCgnbWFya2VyOmNsaWNrZWQnLCBsb2NhdGUpO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2bS5tYXJrZXJzW2xvY2F0ZS5faWRdID0gbWFya2VyO1xuICAgICAgICAgICAgLy8gdmFyIGluZm9XTkRXID0gdm0uZ21hcC5idWlsZEluZm9XaW5kb3cobG9jYXRlLCBtYXJrZXIpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB2bS5tYXJrZXJzO1xuICAgIH07XG5cbiAgICBcbiAgICAkc2NvcGUuJG9uKFwibWFya2VyOmNsaWNrZWRcIiwgZnVuY3Rpb24oZSwgbWFya2VyKSB7XG4gICAgICBjb25zb2xlLmxvZygnY2xpY2sgcmVjZWl2ZWQnKTtcblxuICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgdm0uc2hvd1NsaWRlciA9IHRydWU7XG4gICAgICAgICRsb2cubG9nKG1hcmtlci5uYW1lKTtcbiAgICAgICAgJGxvZy5sb2coXy5pbmRleE9mKHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZSwgbWFya2VyKSk7XG4gICAgICAgICRpb25pY1NsaWRlQm94RGVsZWdhdGUuc2xpZGUoXy5pbmRleE9mKHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZSwgbWFya2VyKSk7XG4gICAgICAgIHZtLmdtYXAucGxvdFJvdXRlVG8obWFya2VyKTtcbiAgICAgIH0pXG5cblxuICAgIH0pO1xuICAgIFxuICAgICRpb25pY0xvYWRpbmcuc2hvdyh7XG4gICAgICAgIHRlbXBsYXRlOiBcIkV4cGxvcmluZyBZb3VyIEFyZWEgLi4uXCIsXG4gICAgICAgIGJhY2tkcm9wOiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyBnZXQgYWxsIGxvY2F0aW9ucyBhcm91bmQgc3BlY2lmaWVkIGFyZWFcbiAgICAgIExvY2F0aW9uc1NlcnZpY2VcbiAgICAgICAgLmdldCh7cmFkaXVzOiB2bS50aGlzX3JhZGl1cywgXG4gICAgICAgICAgICAgIGxhdDogICAgY3VycmVudENlbnRlci5sYXRpdHVkZSwgXG4gICAgICAgICAgICAgIGxuZzogICAgY3VycmVudENlbnRlci5sb25naXR1ZGV9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihsb2NhdGlvbnMpIHtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBzb3J0IGxvY2F0aW9ucyBieSBkaXN0bmFjZSBcbiAgICAgICAgICB2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UgPSBfLnNvcnRCeShsb2NhdGlvbnMsICdkaXN0YW5jZWZyb21sb2NhdGlvbicpO1xuICAgICAgICAgIHNldE1hcmtlcnModm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlKTtcblxuICAgICAgICAgIC8vIHNldCB0aGUgbG9jYXRpb25zIHJhZGl1cyBhbmQga25vYiB2YWx1ZSB0byB0aGUgY2xvc2VzIGxvY3Rpb24gdG8gdGVzdFxuICAgICAgICAgIHZtLnRoaXNfcmFkaXVzID0gXy5maXJzdCh2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UpLmRpc3RhbmNlZnJvbWxvY2F0aW9uO1xuICAgICAgICAgIHZtLmxvY2F0aW9uc1JhZGl1cyA9IHZtLmdtYXAuc2V0UmFkaXVzQ2lyY2xlKHtyYWRpdXM6IHZtLnRoaXNfcmFkaXVzfSk7XG4gICAgICAgICAgdm0uZ21hcC5tYXAuZml0Qm91bmRzKHZtLmxvY2F0aW9uc1JhZGl1cy5nZXRCb3VuZHMoKSk7XG4gICAgICAgICAgXG4gICAgICAgICAgc2V0S25vYlZhbHVlKDEwMDApO1xuICAgICAgICAgICRpb25pY0xvYWRpbmcuaGlkZSgpO1xuXG4gICAgICAgICAgJGlvbmljU2xpZGVCb3hEZWxlZ2F0ZS51cGRhdGUoKTtcbiAgICAgICAgfSk7Ly9lbmQgLnRoZW5cblxuXG5cblxuICAgICAgICBcblxuXG5cbiAgICAgICAgICRzY29wZS4kd2F0Y2goXCJNYXAua25vYi52YWx1ZVwiLCBmdW5jdGlvbihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwibmV3IE1hcC5rbm9iLnZhbHVlOiBcIituZXdWYWx1ZSk7XG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcIm9sZCBNYXAua25vYi52YWx1ZTogXCIrb2xkVmFsdWUpO1xuXG4gICAgICAgICAgICBpZih2bS5sb2NhdGlvbnNSYWRpdXMpIHZtLmxvY2F0aW9uc1JhZGl1cy5zZXRSYWRpdXMobmV3VmFsdWUpO1xuICAgICAgICAgICAgdm0uc2hvd1NsaWRlciA9IGZhbHNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih2bS5sb2NhdGlvbnNSYWRpdXMpe1xuXG4gICAgICAgICAgICAgICAvLyBHZXQgdGhlIGJvdW5kc1xuICAgICAgICAgICAgICB2YXIgY2lyY2xlQm91bmRzID0gdm0ubG9jYXRpb25zUmFkaXVzLmdldEJvdW5kcygpO1xuICAgICAgICAgICAgICB2YXIgbWFwQm91bmRzID0gdm0uZ21hcC5tYXAuZ2V0Qm91bmRzKCk7XG5cblxuICAgICAgICAgICAgICB2YXIgbmUgPSBjaXJjbGVCb3VuZHMuZ2V0Tm9ydGhFYXN0KCk7IC8vIExhdExuZyBvZiB0aGUgbm9ydGgtZWFzdCBjb3JuZXJcbiAgICAgICAgICAgICAgdmFyIHN3ID0gY2lyY2xlQm91bmRzLmdldFNvdXRoV2VzdCgpO1xuICAgICAgICAgICAgICB2YXIgbncgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG5lLmxhdCgpLCBzdy5sbmcoKSk7XG4gICAgICAgICAgICAgIHZhciBzZSA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoc3cubGF0KCksIG5lLmxuZygpKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHZhciBMYXRMbmdMaXN0ID0gbmV3IEFycmF5IChudywgc2UpO1xuXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZighbWFwQm91bmRzLmNvbnRhaW5zKG5lKSl7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIEx0TGdMZW4gPSBMYXRMbmdMaXN0Lmxlbmd0aDsgaSA8IEx0TGdMZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgLy8gIEFuZCBpbmNyZWFzZSB0aGUgYm91bmRzIHRvIHRha2UgdGhpcyBwb2ludFxuICAgICAgICAgICAgICAgICAgbWFwQm91bmRzLmV4dGVuZChMYXRMbmdMaXN0W2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdm0uZ21hcC5tYXAuZml0Qm91bmRzKG1hcEJvdW5kcyk7XG4gICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHZtLmdtYXAubWFwLmZpdEJvdW5kcyhjaXJjbGVCb3VuZHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgfS8vZW5kIGlmKHZtLmxvY2F0aW9uc1JhZGl1cylcbiAgICAgICAgICAgXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gc2hvdy9yZXZlYWwgbG9jYXRpb25zIGluc2lkZSByYWRpdXNcbiAgICAgICAgICAgIHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZS5tYXAoZnVuY3Rpb24obG9jYXRlKXtcbiAgICAgICAgICAgICAgICAgIGlmKCBsb2NhdGUuZGlzdGFuY2Vmcm9tbG9jYXRpb24gPCBuZXdWYWx1ZSApe1xuICAgICAgICAgICAgICAgICAgICB2bS5tYXJrZXJzW2xvY2F0ZS5faWRdLnNldE9wYWNpdHkoMSk7XG4gICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLm1hcmtlcnNbbG9jYXRlLl9pZF0uc2V0T3BhY2l0eSgwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOy8vdm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlLm1hcFxuXG5cbiAgICAgICAgfSk7Ly8vJHNjb3BlLiR3YXRjaCBcIk1hcC5rbm9iLnZhbHVlXCJcbiAgICAgIFxuICAgIFxuXG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuXG4gIFxuICBcblxuICAkcm9vdFNjb3BlLiRvbignbWFya2VyOmNsaWNrZWQnLCBmdW5jdGlvbihlLCBsb2NhbGUpIHtcbiAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgXG4gICAgICB2bS5nbWFwLmhlaWdodCA9IHZtLmdtYXAuaGVpZ2h0LzI7XG4gICAgICB2bS5nbWFwLm1hcC5wYW5Ubyh7bGF0OnBhcnNlRmxvYXQobG9jYWxlLmxhdCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzpwYXJzZUZsb2F0KGxvY2FsZS5sb25nKX0pO1xuICAgIH0pO1xuICAgIFxuICB9KTtcbn07Ly8vLyBNYXBDdHJsXG5cblxuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdNYXBDdHJsJywgTWFwQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBQbGF5bGlzdEN0cmwoJHNjb3BlKSB7XG4gIFxuXG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ1BsYXlsaXN0Q3RybCcsIFBsYXlsaXN0Q3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBQbGF5bGlzdHNDdHJsKCRzY29wZSkge1xuICBcbiAkc2NvcGUucGxheWxpc3RzID0gW1xuICAgIHsgdGl0bGU6ICdSZWdnYWUnLCBpZDogMSB9LFxuICAgIHsgdGl0bGU6ICdDaGlsbCcsIGlkOiAyIH0sXG4gICAgeyB0aXRsZTogJ0R1YnN0ZXAnLCBpZDogMyB9LFxuICAgIHsgdGl0bGU6ICdJbmRpZScsIGlkOiA0IH0sXG4gICAgeyB0aXRsZTogJ1JhcCcsIGlkOiA1IH0sXG4gICAgeyB0aXRsZTogJ0Nvd2JlbGwnLCBpZDogNiB9XG4gIF07XG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ1BsYXlsaXN0c0N0cmwnLCBQbGF5bGlzdHNDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5kaXJlY3RpdmVzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRpcmVjdGl2ZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBtQXBwTG9hZGluZygkbG9nLCAkYW5pbWF0ZSl7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCBcIm1BcHBMb2FkaW5nXCIgKTtcbiAgXG5cbiAgLy8gUnVucyBkdXJpbmcgY29tcGlsZVxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAgICAnQycsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJpYnV0ZXMsIGNvbnRyb2xsZXIsIHRyYW5zY2x1ZGVGbikge1xuICAgICAkYW5pbWF0ZS5sZWF2ZSggXG4gICAgIFx0ZWxlbWVudC5jaGlsZHJlbigpLmVxKCAxIClcbiAgICAgXHQpLnRoZW4oXG4gICAgICAgICAgICBmdW5jdGlvbiBjbGVhbnVwQWZ0ZXJBbmltYXRpb24oKSB7XG4gICAgICAgICAgICBcdCRsb2cubG9nKCdjbGVhbnVwQWZ0ZXJBbmltYXRpb24nKTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHJvb3QgZGlyZWN0aXZlIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAvLyBDbGVhciB0aGUgY2xvc2VkLW92ZXIgdmFyaWFibGUgcmVmZXJlbmNlcy5cbiAgICAgICAgICAgICAgICBzY29wZSA9IGVsZW1lbnQgPSBhdHRyaWJ1dGVzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgIH1cbiAgfVxuXG5cbn07XG5cblxuZGlyZWN0aXZlc01vZHVsZS5kaXJlY3RpdmUoJ21BcHBMb2FkaW5nJywgbUFwcExvYWRpbmcpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1vZGVsc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4qL1xuXG5tb2RlbHNNb2R1bGUuZmFjdG9yeSgnR01hcCcsIGZ1bmN0aW9uKCRsb2csICRyb290U2NvcGUsIExvY2F0aW9uc1NlcnZpY2UsIEFwcFNldHRpbmdzKXtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0dNYXAnKTtcblxuICB2YXIgY3VycmVudENlbnRlciA9ICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uO1xuXG5cblxuICBmdW5jdGlvbiBHTWFwKG1hcFNldHRpbmdzKXtcbiAgICBcbiAgICB0aGlzLm1hcE9wdGlvbnMgPSB7XG4gICAgICBjZW50ZXI6ICAgIHtsYXQ6IGN1cnJlbnRDZW50ZXIubGF0aXR1ZGUsIFxuICAgICAgICAgICAgICAgICAgbG5nOiBjdXJyZW50Q2VudGVyLmxvbmdpdHVkZX0sXG4gICAgICB6b29tOiAgICAgIEFwcFNldHRpbmdzLkdNQVBfREVGQVVMVC5aT09NLFxuICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCxcbiAgICAgIHJhZGl1czogICAgQXBwU2V0dGluZ3MuR01BUF9ERUZBVUxULlJBRElVUyxcbiAgICB9O1xuXG4gICAgYW5ndWxhci5leHRlbmQodGhpcy5tYXBPcHRpb25zLCBtYXBTZXR0aW5ncyk7XG4gICAgXG4gICAgJGxvZy5kZWJ1Zygnem9vbSB7bWFwT3B0aW9ucy56b29tfScsIHRoaXMpO1xuICAgIFxuICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1hcFwiKSwgdGhpcy5tYXBPcHRpb25zKTtcbiAgICBcbiB9Oy8vR01hcCBjb25zdHJ1Y3RvclxuXG5cblxuXG4gIEdNYXAucHJvdG90eXBlID17XG5cbiAgICBkcm9wTWFya2VyOiBmdW5jdGlvbihtYXJrZXJEYXRhKSB7XG4gICAgICB2YXIgX21hcmtlclNldHRpbmdzID0ge307XG4gICAgICBhbmd1bGFyLmV4dGVuZChfbWFya2VyU2V0dGluZ3MsIHRoaXMubWFwT3B0aW9ucywgbWFya2VyRGF0YSk7XG4gICAgICAkbG9nLmRlYnVnKCdkcm9wTWFya2VyIGZvciBcInt0aXRsZX1cIlwiIGF0IFwie2NlbnRlci5sYXR9LCB7Y2VudGVyLmxuZ31cIicsIF9tYXJrZXJTZXR0aW5ncyk7XG4gICAgICBcbiAgICAgIHZhciBfbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogIF9tYXJrZXJTZXR0aW5ncy5jZW50ZXIsXG4gICAgICAgICAgICBtYXA6ICAgICAgIF9tYXJrZXJTZXR0aW5ncy5tYXAsXG4gICAgICAgICAgICB0aXRsZTogICAgIF9tYXJrZXJTZXR0aW5ncy50aXRsZSxcbiAgICAgICAgICAgIG9wYWNpdHk6ICAgX21hcmtlclNldHRpbmdzLm9wYWNpdHksXG4gICAgICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QXG4gICAgICB9KTtcblxuICAgICAgIFxuICAgICAgcmV0dXJuIF9tYXJrZXI7XG4gICAgfSxcblxuXG4gICAgYnVpbGRJbmZvV2luZG93OiBmdW5jdGlvbihsb2NhdGlvbkluZm8sIGxvY2F0aW9uTWFya2VyKSB7XG4gICAgICB2YXIgX21hcCA9IHRoaXM7XG5cbiAgICAgICRsb2cuZGVidWcoJ2J1aWxkSW5mb1dpbmRvdyBmb3Ige25hbWV9JywgbG9jYXRpb25JbmZvKTtcbiAgICAgIHZhciBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnPGgzIGlkPVwiZmlyc3RIZWFkaW5nXCIgY2xhc3M9XCJmaXJzdEhlYWRpbmdcIj4nK2xvY2F0aW9uSW5mby5uYW1lKyc8L2gzPicrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8cD4nK2xvY2F0aW9uSW5mby50cmF2ZWxUaW1lLnRleHQrJyB3YWxrPC9wPicrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c21hbGw+Jytsb2NhdGlvbkluZm8uZGlzdGFuY2Vmcm9tbG9jYXRpb24rJzwvc21hbGw+J1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGxvY2F0aW9uTWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgLy8gICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ21hcmtlcjpjbGlja2VkJywgbG9jYXRpb25JbmZvICk7XG4gICAgICAvLyAgIGluZm93aW5kb3cub3BlbiggX21hcC5tYXAgLGxvY2F0aW9uTWFya2VyKTtcbiAgICAgIC8vIH0pO1xuXG4gICAgICByZXR1cm4gaW5mb3dpbmRvdztcbiAgICB9LFxuXG5cbiAgICBwbG90TG9jYXRpb25zOmZ1bmN0aW9uKHBsb3REYXRhKSB7XG4gICAgICB2YXIgX21hcCA9IHRoaXM7XG4gICAgICB2YXIgX3Bsb3RTZXR0aW5ncyA9e307IFxuXG4gICAgICBhbmd1bGFyLmV4dGVuZChfcGxvdFNldHRpbmdzLHRoaXMubWFwT3B0aW9ucywgcGxvdERhdGEpO1xuICAgICAgJGxvZy5kZWJ1ZygncGxvdExvY2F0aW9ucyB3aXRoaW4gYSBcIntyYWRpdXN9XCIgbWV0ZXIgcmFkaXVzIG9mIFwie2NlbnRlci5sYXR9LCB7Y2VudGVyLmxuZ31cIicsIF9wbG90U2V0dGluZ3MpO1xuICAgICAgXG4gICAgICAvLyBkcm9wIG1hcmtlciBvbiBjdXJyZW50IGxvY2F0aW9uXG4gICAgICBfbWFwLmRyb3BNYXJrZXIoe3RpdGxlOlwiWW91IEFyZSBIZXJlXCIsIG9wYWNpdHk6MX0pO1xuXG4gICAgICAvLyBnZXQgYWxsIGxvY2F0aW9ucyBhcm91bmQgc3BlY2lmaWVkIGFyZWFcbiAgICAgIExvY2F0aW9uc1NlcnZpY2VcbiAgICAgICAgLmdldCh7cmFkaXVzOiBfcGxvdFNldHRpbmdzLnJhZGl1cywgXG4gICAgICAgICAgICAgIGxhdDogICAgX3Bsb3RTZXR0aW5ncy5jZW50ZXIubGF0LCBcbiAgICAgICAgICAgICAgbG5nOiAgICBfcGxvdFNldHRpbmdzLmNlbnRlci5sbmcgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24obG9jYXRpb25zKSB7XG5cbiAgICAgICAgICAvLyBwcm9jZXNzIGxvY2F0aW9ucyBcbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2gobG9jYXRpb25zLCBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZygncGxvdExvY2F0aW9uIHtuYW1lfScsbG9jYXRpb24pO1xuICAgICAgICAgICAgLy9nZXQgdGhlIHRyYXZlbFRpbWUgZm9yRWFjaCBsb2NhdGlvblxuICAgICAgICAgICAgbG9jYXRpb24uc2V0VHJhdmVsVGltZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uUGluID0gX21hcC5kcm9wTWFya2VyKHtjZW50ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogcGFyc2VGbG9hdChsb2NhdGlvbi5sYXQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiBwYXJzZUZsb2F0KGxvY2F0aW9uLmxvbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGxvY2F0aW9uLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgX21hcC5idWlsZEluZm9XaW5kb3cobG9jYXRpb24sIGxvY2F0aW9uUGluKTtcbiAgICAgICAgICAgICAgX21hcC5wbG90Um91dGVUbyhsb2NhdGlvbik7XG5cbiAgICAgICAgICAgIH0pOy8vL2xvY2F0aW9uLnNldFRyYXZlbFRpbWVcblxuXG4gICAgICAgICAgfSk7Ly8vZW5kIGFuZ3VsYXIuZm9yRWFjaFxuXG4gICAgICAgIH0pOy8vZW5kIExvY2F0aW9uc1NlcnZpY2VcblxuICAgIH0sXG5cbiAgICBwbG90Um91dGVUbzogZnVuY3Rpb24obG9jYXRpb24pe1xuICAgICAgJGxvZy5kZWJ1ZygncGxvdFJvdXRlVG8ge25hbWV9Jyxsb2NhdGlvbik7XG5cbiAgICAgIHZhciBfbWFwID0gdGhpcztcbiAgICAgIHZhciBfcm91dGVTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgIGRyYWdnYWJsZTogICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgc3VwcHJlc3NJbmZvV2luZG93czogdHJ1ZSxcbiAgICAgICAgICAgIHN1cHByZXNzTWFya2VyczogICAgIHRydWUsXG4gICAgICAgICAgICBvcmlnaW46ICAgICAgICAgICAgICBfbWFwLm1hcE9wdGlvbnMuY2VudGVyXG4gICAgICB9O1xuXG4gICAgICBhbmd1bGFyLmV4dGVuZChfcm91dGVTZXR0aW5ncywgdGhpcy5tYXBPcHRpb25zKTtcblxuICAgICAgdmFyIGRpcmVjdGlvbnNEaXNwbGF5ID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcih7XG4gICAgICAgICAgICBtYXA6ICAgICAgICAgICAgICAgICBfbWFwLm1hcCxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogICAgICAgICAgIF9yb3V0ZVNldHRpbmdzLmRyYWdnYWJsZSxcbiAgICAgICAgICAgIHN1cHByZXNzSW5mb1dpbmRvd3M6IF9yb3V0ZVNldHRpbmdzLnN1cHByZXNzSW5mb1dpbmRvd3MsXG4gICAgICAgICAgICBzdXBwcmVzc01hcmtlcnM6ICAgICBfcm91dGVTZXR0aW5ncy5zdXBwcmVzc01hcmtlcnNcbiAgICAgICAgICB9KSxcbiAgICAgICAgICByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgZGVzdGluYXRpb246IHtsYXQ6IHBhcnNlRmxvYXQobG9jYXRpb24ubGF0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogcGFyc2VGbG9hdChsb2NhdGlvbi5sb25nKX0sXG4gICAgICAgICAgICBvcmlnaW46ICAgICAgX3JvdXRlU2V0dGluZ3Mub3JpZ2luLFxuICAgICAgICAgICAgdHJhdmVsTW9kZTogIGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuV0FMS0lORyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7Ly8gUGFzcyB0aGUgZGlyZWN0aW9ucyByZXF1ZXN0IHRvIHRoZSBkaXJlY3Rpb25zIHNlcnZpY2UuXG5cblxuICAgICAgICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKHJlcXVlc3QsIGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgIC8vIERpc3BsYXkgdGhlIHJvdXRlIG9uIHRoZSBtYXAuXG4gICAgICAgICAgICAgIGRpcmVjdGlvbnNEaXNwbGF5LnNldERpcmVjdGlvbnMocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pOy8vL2RpcmVjdGlvc1NlcnZpY2Uucm91dGVcblxuXG4gICAgfSxcblxuICAgIHNldFJhZGl1c0NpcmNsZTogZnVuY3Rpb24ocmFkaXVzQ2lyY2xlU2V0dGluZ3MpIHtcbiAgICAgIHZhciBfbWFwID0gdGhpcztcbiAgICAgIHZhciBfY2lyY2xlU2V0dGluZ3MgPXtcbiAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6ICAgJyMwMDg0YjQnLFxuICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAwLjgsXG4gICAgICAgICAgICAgIHN0cm9rZVdlaWdodDogIDEsXG4gICAgICAgICAgICAgIGZpbGxDb2xvcjogICAgICcjMDA4NGI0JyxcbiAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6ICAgMC4wNjI1LFxuICAgICAgfTtcblxuICAgICAgYW5ndWxhci5leHRlbmQoX2NpcmNsZVNldHRpbmdzICx0aGlzLm1hcE9wdGlvbnMsIHJhZGl1c0NpcmNsZVNldHRpbmdzKTtcblxuICAgICAgdmFyIGxvY2F0aW9uc0NpcmNsZSA9IG5ldyBnb29nbGUubWFwcy5DaXJjbGUoe1xuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAgIF9jaXJjbGVTZXR0aW5ncy5zdHJva2VDb2xvcixcbiAgICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiBfY2lyY2xlU2V0dGluZ3Muc3Ryb2tlT3BhY2l0eSxcbiAgICAgICAgICAgICAgICBzdHJva2VXZWlnaHQ6ICBfY2lyY2xlU2V0dGluZ3Muc3Ryb2tlV2VpZ2h0LFxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogICAgIF9jaXJjbGVTZXR0aW5ncy5maWxsQ29sb3IsXG4gICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6ICAgX2NpcmNsZVNldHRpbmdzLmZpbGxPcGFjaXR5LFxuICAgICAgICAgICAgICAgIG1hcDogICAgICAgICAgIF9tYXAubWFwLFxuICAgICAgICAgICAgICAgIGNlbnRlcjogICAgICAgIF9jaXJjbGVTZXR0aW5ncy5jZW50ZXIsXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAgICAgICAgX2NpcmNsZVNldHRpbmdzLnJhZGl1c1xuICAgICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbG9jYXRpb25zQ2lyY2xlO1xuICAgIH1cblxuICB9O1xuICAgIFxuXG5cbiAgcmV0dXJuIEdNYXA7XG5cbiAgXG59KTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbW9kZWxzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xubW9kZWxzTW9kdWxlLmZhY3RvcnkoJ0xvY2F0aW9uJywgZnVuY3Rpb24oJHJvb3RTY29wZSwgJGxvZywgJHEgKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdMb2NhdGlvbicpO1xuXG4gIGZ1bmN0aW9uIExvY2F0aW9uKExvY2F0aW9uRGF0YSl7XG4gICAgYW5ndWxhci5leHRlbmQodGhpcywgTG9jYXRpb25EYXRhKTtcbiAgICAkbG9nLmRlYnVnKCd7bmFtZX0nLCB0aGlzKTtcbiAgfVxuXG5cbiAgTG9jYXRpb24ucmVzcG9uc2VUcmFuc2Zvcm1lciA9IGZ1bmN0aW9uIChyZXNwb25zZURhdGEpIHtcbiAgICAkbG9nLmRlYnVnKCdyZXNvcG9uc2VUcmFuc2Zvcm1lciB7bGVuZ3RofScsIHJlc3BvbnNlRGF0YS5sb2NhdGlvbnMpO1xuICAgIFxuICAgIGlmKHJlc3BvbnNlRGF0YS5sb2NhdGlvbnMpe1xuICAgICAgXG4gICAgICB2YXIgcG9wdWxhdGVkX2xvY2F0aW9ucyA9IFtdO1xuXG4gICAgICByZXNwb25zZURhdGEubG9jYXRpb25zXG4gICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKGRhdGEpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlZF9sb2NhdGlvbnMucHVzaChsb2NhdGlvbi5zZXRUcmF2ZWxUaW1lKCkpO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcG9wdWxhdGVkX2xvY2F0aW9ucztcbiAgICB9XG5cbiAgICAgIHJldHVybiByZXNwb25zZURhdGEubWFwKExvY2F0aW9uLmJ1aWxkKTsgIFxuXG4gICAgXG4gIH1cblxuXG4gIExvY2F0aW9uLnByb3RvdHlwZS5zZXRUcmF2ZWxUaW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAkbG9nLmRlYnVnKCdzZXRUcmF2ZWxUaW1lIHtuYW1lfScsIHRoaXMpO1xuICAgICAgXG4gICAgICB2YXIgX2xvY2F0aW9uID0gdGhpcztcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgIHZhciBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpc3RhbmNlTWF0cml4U2VydmljZTtcbiAgICAgICBzZXJ2aWNlLmdldERpc3RhbmNlTWF0cml4KHtcbiAgICAgICAgIG9yaWdpbnM6ICAgICAgIFt7bGF0OiAkcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbi5sYXRpdHVkZSwgbG5nOiRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uLmxvbmdpdHVkZX1dLFxuICAgICAgICAgZGVzdGluYXRpb25zOiAgW3tsYXQ6IHBhcnNlRmxvYXQodGhpcy5sYXQpLCBsbmc6IHBhcnNlRmxvYXQodGhpcy5sb25nKX1dLFxuICAgICAgICAgdHJhdmVsTW9kZTogICAgZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5XQUxLSU5HLFxuICAgICAgICAgdW5pdFN5c3RlbTogICAgZ29vZ2xlLm1hcHMuVW5pdFN5c3RlbS5JTVBFUklBTCxcbiAgICAgICAgIGF2b2lkSGlnaHdheXM6IGZhbHNlLFxuICAgICAgICAgYXZvaWRUb2xsczogICAgZmFsc2VcbiAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzKSB7XG4gICAgICAgICBcdF9sb2NhdGlvbi50cmF2ZWxUaW1lID0gcmVzcG9uc2Uucm93c1swXS5lbGVtZW50c1swXS5kdXJhdGlvbjtcbiAgICAgICAgICBfbG9jYXRpb24uZGlzdGFuY2UgPSByZXNwb25zZS5yb3dzWzBdLmVsZW1lbnRzWzBdLmRpc3RhbmNlO1xuICAgICAgICAgXHRkZWZlcnJlZC5yZXNvbHZlKF9sb2NhdGlvbik7XG4gICAgICAgICAvLyAkbG9nLmRlYnVnKFwie25hbWV9IC0ge3RyYXZlbFRpbWV9XCIsIF9sb2NhdGlvbik7XG4gICAgICAgICAgXG4gICAgICAgfSk7XG5cbiAgICAgICBcbiAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcblxuICB9XG5cblxuICBMb2NhdGlvbi5idWlsZCA9IGZ1bmN0aW9uKGxEYXRhKSB7XG4gICAgJGxvZy5kZWJ1ZygnYnVpbGQge25hbWV9JywgbERhdGEpO1xuICAgIFxuICAgIHJldHVybiBuZXcgTG9jYXRpb24obERhdGEpO1xuICB9XG5cbiAgIFxuXG4gIFxuIFxuICByZXR1cm4gTG9jYXRpb247XG5cblxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYnVsayA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAubW9kZWxzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBPbkNvbmZpZygkc3RhdGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJHByb3ZpZGUpIHtcbiAgXG4gIC8vYWN0aXZhdGUgTG9nRGVjb3JhdG9yXG4gIHJlcXVpcmUoJy4vdXRpbHMvbG9nZ2luZy9Mb2dEZWNvcmF0b3IuanMnKSgkcHJvdmlkZSk7XG5cbiRzdGF0ZVByb3ZpZGVyXG5cbiAgLnN0YXRlKCdhcHAnLCB7XG4gICAgdXJsOiAnL2FwcCcsXG4gICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbWVudS5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnQXBwQ3RybCcsXG4gICAgcmVzb2x2ZTp7XG4gICAgICAgIGNvb3JkaW5hdGVzOmZ1bmN0aW9uKEN1cnJlbnRDb29yZHMsICR0aW1lb3V0KSB7XG4gICAgICAgICAgICByZXR1cm4gQ3VycmVudENvb3Jkcy5nZXQoKTsgIFxuICAgICAgICB9XG4gICAgfVxuICB9KVxuICAuc3RhdGUoJ2FwcC5jb25uZWN0Jywge1xuICAgIHVybDogJy9jb25uZWN0JyxcbiAgICB2aWV3czoge1xuICAgICAgJ21lbnVDb250ZW50Jzoge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9jb25uZWN0Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQ29ubmVjdEN0cmwgYXMgQ29ubmVjdCdcbiAgICAgIH1cbiAgICB9XG4gIH0gKVxuXG4gIC5zdGF0ZSgnYXBwLmxvZ2luJywge1xuICAgIHVybDogJy9sb2dpbicsXG4gICAgdmlld3M6IHtcbiAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbG9naW4uaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwgYXMgTGduJ1xuICAgICAgfVxuICAgIH1cbiAgfSApXG4gIFxuICAuc3RhdGUoJ2FwcC5icm93c2UnLCB7XG4gICAgdXJsOiAnL2Jyb3dzZScsXG4gICAgdmlld3M6IHtcbiAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYnJvd3NlLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQnJvd3NlQ3RybCdcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgXG4gIC5zdGF0ZSgnYXBwLm1hcCcsIHtcbiAgICAgIHVybDogJy9tYXAnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ21lbnVDb250ZW50Jzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL21hcC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnTWFwQ3RybCBhcyBNYXAnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBcblxuXG4gIC8vIGlmIG5vbmUgb2YgdGhlIGFib3ZlIHN0YXRlcyBhcmUgbWF0Y2hlZCwgdXNlIHRoaXMgYXMgdGhlIGZhbGxiYWNrXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9hcHAvbWFwJyk7XG4gIFxuICBcblxuXG59Ly8vLyBPbkNvbmZpZ1xuXG5cbm1vZHVsZS5leHBvcnRzID0gT25Db25maWc7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBPblJ1bigkaW9uaWNQbGF0Zm9ybSwgJGxvZywgJGFuaW1hdGUpIHtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ09uUnVuJyk7XG4gICBcbiAgJGlvbmljUGxhdGZvcm0ucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJGFuaW1hdGUuZW5hYmxlZCh0cnVlKTtcbiAgICBcbiAgICAvLyBIaWRlIHRoZSBhY2Nlc3NvcnkgYmFyIGJ5IGRlZmF1bHQgKHJlbW92ZSB0aGlzIHRvIHNob3cgdGhlIGFjY2Vzc29yeSBiYXIgYWJvdmUgdGhlIGtleWJvYXJkXG4gICAgLy8gZm9yIGZvcm0gaW5wdXRzKVxuICAgIGlmICh3aW5kb3cuY29yZG92YSAmJiB3aW5kb3cuY29yZG92YS5wbHVnaW5zLktleWJvYXJkKSB7XG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuaGlkZUtleWJvYXJkQWNjZXNzb3J5QmFyKHRydWUpO1xuICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmRpc2FibGVTY3JvbGwodHJ1ZSk7XG5cbiAgICB9XG4gICAgaWYgKHdpbmRvdy5TdGF0dXNCYXIpIHtcbiAgICAgIC8vIG9yZy5hcGFjaGUuY29yZG92YS5zdGF0dXNiYXIgcmVxdWlyZWRcbiAgICAgIFN0YXR1c0Jhci5zdHlsZURlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uUnVuOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNlcnZpY2VzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gQ3VycmVudENvb3JkcygkcSwgJGh0dHAsICRsb2csICBBcHBTZXR0aW5ncykge1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZShcIkN1cnJlbnRDb29yZHNTZXJ2aWNlXCIpO1xuICBcbiAgdmFyIHNlcnZpY2UgPSB7fTtcblxuICBzZXJ2aWNlLmdldCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTsgICAgXG5cbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKHBvcykge1xuICAgICAgICBcbiAgICAgICRsb2cuZGVidWcoJ2xhdDoge2Nvb3Jkcy5sYXRpdHVkZX0nLHBvcyk7XG4gICAgICAkbG9nLmRlYnVnKCdsb25nOiB7Y29vcmRzLmxvbmdpdHVkZX0nLHBvcyk7XG5cbiAgICAgIGRlZmVycmVkLnJlc29sdmUocG9zLmNvb3Jkcyk7XG4gICAgICAgIFxuICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAkbG9nLndhcm4oJ1VuYWJsZSB0byBnZXQgbG9jYXRpb246ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyLCBzdGF0dXMpO1xuICAgfSk7XG5cblxuICAgIFxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ0N1cnJlbnRDb29yZHMnLCBDdXJyZW50Q29vcmRzKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIExvY2F0aW9uc1NlcnZpY2UoJGxvZywgWW9jYWwsIExvY2F0aW9uLCAkcSkge1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZShcIkxvY2F0aW9uc1NlcnZpY2VTZXJ2aWNlXCIpO1xuXG4gIHZhciBzZXJ2aWNlID0ge307XG5cbiAgc2VydmljZS5nZXQgPSBmdW5jdGlvbiggZ2V0RGF0YSApIHtcblxuICAgICRsb2cuZGVidWcoJ0dFVCBsb2NhdGlvbiBpbiBhIHtyYWRpdXN9ICBvZiB7bGF0fSwge2xuZ30nLCBnZXREYXRhKTtcblxuICAgIHJldHVybiBZb2NhbC5nZXQoZ2V0RGF0YSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICAgIC8vIG9ubHkgcmV0dXJuIGxvY2F0aW9ucyB3aGVuIHRoZXkgaGF2ZSBBTExcbiAgICAgICAgICAgICAgICAgIC8vIGJlZW4gcG9wdWxhdGVkIHdpdGggdHJhdmVsVGltZXNcbiAgICAgICAgICAgICAgICAgIHJldHVybiAkcS5hbGwoTG9jYXRpb24ucmVzcG9uc2VUcmFuc2Zvcm1lcihkYXRhKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG5cbiAgfTtcblxuICBzZXJ2aWNlLmFsbCA9IGZ1bmN0aW9uKCBnZXREYXRhICkge1xuXG4gICAgJGxvZy5kZWJ1ZygnQUxMJyk7XG5cbiAgICByZXR1cm4gWW9jYWwuYWxsKCkudGhlbihMb2NhdGlvbi5yZXNwb25zZVRyYW5zZm9ybWVyKTtcblxuICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ0xvY2F0aW9uc1NlcnZpY2UnLCBMb2NhdGlvbnNTZXJ2aWNlKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIFlvY2FsKCRxLCAkaHR0cCwgQXBwU2V0dGluZ3MsICRsb2cpIHtcblxuICB2YXIgc2VydmljZSA9IHt9O1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZShcIllvY2FsU2VydmljZVwiKTtcblxuICBzZXJ2aWNlLmdldCA9IGZ1bmN0aW9uKCBnZXREYXRhICkge1xuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAvLyAvbGlzdEJ5RGlzdGFuY2VDYXQvRm9vZC84MDAwLzM5LjkzNzg5My8tNzUuMTY4OTM0N1xuICAgJGh0dHAuZ2V0KEFwcFNldHRpbmdzLnlvY2FsQVBJLmJhc2UrJy9saXN0QnlEaXN0YW5jZUNhdC9Gb29kLycrZ2V0RGF0YS5yYWRpdXMrJy8nK2dldERhdGEubGF0KycvJytnZXREYXRhLmxuZykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ2ZvdW5kIHtsZW5ndGh9IHNwb3RzIHdpdGhpbiAnK2dldERhdGEucmFkaXVzKycgbWV0ZXJzIG9mICcrZ2V0RGF0YS5sYXQrJywnK2dldERhdGEubG5nLCBkYXRhLmxvY2F0aW9ucyk7XG4gICAgICAgIGRhdGEucmFkaXVzID0gZ2V0RGF0YS5yYWRpdXM7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpIHtcbiAgICAgICAgJGxvZy53YXJuKCdVbmFibGUgdG8gZ2V0IGxvY2F0aW9uOiAnICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyLCBzdGF0dXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgc2VydmljZS5hbGwgPSBmdW5jdGlvbihnZXREYXRhKXtcbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgLy8gL2xpc3RCeURpc3RhbmNlQ2F0L0Zvb2QvODAwMC8zOS45Mzc4OTMvLTc1LjE2ODkzNDdcbiAgICRodHRwLmdldChBcHBTZXR0aW5ncy55b2NhbEFQSS5iYXNlKycvbGlzdCcpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKCdhbGw6IGZvdW5kIHtsZW5ndGh9IHRvdGFsIHNwb3RzJywgZGF0YSk7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpIHtcbiAgICAgICAgJGxvZy53YXJuKCdVbmFibGUgdG8gZ2V0IGxvY2F0aW9uOiAnICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyLCBzdGF0dXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG5cbiAgfVxuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ1lvY2FsJywgWW9jYWwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLnNlcnZpY2VzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNlcnZpY2VzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gRXhhbXBsZVNlcnZpY2UoJHEsICRodHRwKSB7XG5cbiAgdmFyIHNlcnZpY2UgPSB7fTtcblxuICBzZXJ2aWNlLmdldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAkaHR0cC5nZXQoJ2FwaVBhdGgnKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICB9KS5lcnJvcihmdW5jdGlvbihlcnIsIHN0YXR1cykge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyLCBzdGF0dXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cbn1cblxuc2VydmljZXNNb2R1bGUuc2VydmljZSgnRXhhbXBsZVNlcnZpY2UnLCBFeGFtcGxlU2VydmljZSk7IiwiLyoqXG4gKiBAYXV0aG9yICAgICBUaG9tYXMgQnVybGVzb25cbiAqIEBhdXRob3IgICAgIFN0YWNrT3ZlcmZsb3cgLSBIYXJ0bywgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzE1NDA4L2hvdy1kby1pLWZvcm1hdC1hLXRpbWVzdGFtcC1pbi1qYXZhc2NyaXB0LXRvLWRpc3BsYXktaXQtaW4tZ3JhcGhzLXV0Yy1pcy1maW5lXG4gKiBAZGVzY3JpcHRpb25cbiAqICBcbiAqIERhdGVUaW1lIHV0aWxpdHkgY2xhc3MgdGhhdCBzcGl0cyBvdXQgVVRDIHRpbWVzdGFtcCBzdHJpbmdzIHVzdWFsbHkgdXNlZCBpbiBhIHJlcG9ydGluZywgcHJpbnQtY2FwYWJsZSBwcm9jZXNzLlxuKi9cbiBcblxuICd1c2Ugc3RyaWN0JztcblxuXG52YXIgYnVpbGRUaW1lU3RyaW5nID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdClcbiAgICAgICAge1xuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8IFwiJWg6JW06JXM6JXpcIjtcblxuICAgICAgICAgICAgZnVuY3Rpb24gcGFkKHZhbHVlLCBpc01pbGxpU2Vjb25kcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgKGlzTWlsbGlTZWNvbmRzKSA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlzTWlsbGlTZWNvbmRzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGlzTWlsbGlTZWNvbmRzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUgPCAxMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIjAwXCIgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHZhbHVlIDwgMTAwKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiMFwiICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuKHZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoIDwgMikgPyBcIjBcIiArIHZhbHVlIDogdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQucmVwbGFjZSgvJShbYS16QS1aXSkvZywgZnVuY3Rpb24gKF8sIGZtdENvZGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3dpdGNoKGZtdENvZGUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJZXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiaFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0SG91cnMoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldE1pbnV0ZXMoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldFNlY29uZHMoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldE1pbGxpc2Vjb25kcygpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBmb3JtYXQgY29kZTogXCIgKyBmbXRDb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG4gLy8gUHVibGlzaCBBUEkgZm9yIERhdGVUaW1lIHV0aWxzXG4gICAgICAgIC8vIHJldHVybiB7XG4gICAgICAgIC8vICAgICBmb3JtYXR0ZWROb3c6IGZ1bmN0aW9uICgpXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGJ1aWxkVGltZVN0cmluZyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gXG4gbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZm9ybWF0dGVkTm93OiBmdW5jdGlvbiAoKSB7IHJldHVybiBidWlsZFRpbWVTdHJpbmcobmV3IERhdGUoKSk7IH1cbiB9O1xuXG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBMb2dEZWNvcmF0b3JcbiAqICBAc291cmNlOiBodHRwOi8vc29sdXRpb25vcHRpbWlzdC5jb20vMjAxMy8xMC8wNy9lbmhhbmNlLWFuZ3VsYXJqcy1sb2dnaW5nLXVzaW5nLWRlY29yYXRvcnMvXG4gKi9cblxuIHZhciBMb2dEZWNvcmF0b3IgPSBmdW5jdGlvbiggJHByb3ZpZGUgICl7XG5cblxuICAgICAgICAgICAgICAvLyBSZWdpc3RlciBvdXIgJGxvZyBkZWNvcmF0b3Igd2l0aCBBbmd1bGFySlMgJHByb3ZpZGVyXG4gICAgICAgICAgICAgICRwcm92aWRlLmRlY29yYXRvciggJyRsb2cnLCBbIFwiJGRlbGVnYXRlXCIsIGZ1bmN0aW9uKCAkZGVsZWdhdGUgKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAvLyBOT1RFOiB0aGUgTG9nRW5jaGFuY2VyIG1vZHVsZSByZXR1cm5zIGEgRlVOQ1RJT04gdGhhdCB3ZSBuYW1lZCBgZW5jaGFuY2VMb2dnZXJGbmBcbiAgICAgICAgICAgICAgIC8vICAgICAgIEFsbCB0aGUgZGV0YWlscyBvZiBob3cgdGhlIGBlbmNoYW5jZW1lbnRgIHdvcmtzIGlzIGVuY2Fwc3VsYXRlZCBpbiBMb2dFbmhhbmNlciFcblxuICAgICAgICAgICAgICAgICAgcmVxdWlyZSgnLi9Mb2dFbmhhbmNlci5qcycpKCAkZGVsZWdhdGUgKTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuICRkZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgfV0pO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9ICBMb2dEZWNvcmF0b3I7IiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBMb2dFbmhhbmNlclxuICogVGhpcyBhZGRzIHRpbWVzdGFtcHMgYW5kIHN1cHBsYW50IGZ1bmN0aW9uYWxpdHkgdG8gQW5ndWxhciAkbG9nIHNlcnZpY2VcbiAqIEBzb3VyY2U6IGh0dHA6Ly9zb2x1dGlvbm9wdGltaXN0LmNvbS8yMDEzLzEwLzA3L2VuaGFuY2UtYW5ndWxhcmpzLWxvZ2dpbmctdXNpbmctZGVjb3JhdG9ycy9cbiAqIEBhcGk6IHB1YmxpY1xuICogQHJldHVybnM6IE9iamVjdCAtIGV4dGVuZGVkICRsb2cgc2VydmljZVxuICovXG5cbnZhciBlbmNoYW5jZUxvZ2dlciA9IGZ1bmN0aW9uKCAkbG9nICl7XG4gIHZhciBzdXBwbGFudCA9IHJlcXVpcmUoJy4uL3N1cHBsYW50LmpzJyk7XG4gIHZhciBEYXRlVGltZSA9IHJlcXVpcmUoJy4uL0RhdGVUaW1lLmpzJyk7XG5cblxuICAvKipcbiAgICogQ2FwdHVyZSB0aGUgb3JpZ2luYWwgJGxvZyBmdW5jdGlvbnM7IGZvciB1c2UgaW4gZW5oYW5jZWRMb2dGbigpXG4gICAqIEBhcGkgIHByaXZhdGUgXG4gICAqL1xuICBcbiAgdmFyIF8kbG9nID0gKGZ1bmN0aW9uKCAkbG9nICl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2cgICA6ICRsb2cubG9nLFxuICAgICAgICBpbmZvICA6ICRsb2cuaW5mbyxcbiAgICAgICAgd2FybiAgOiAkbG9nLndhcm4sXG4gICAgICAgIGRlYnVnIDogJGxvZy5kZWJ1ZyxcbiAgICAgICAgZXJyb3IgOiAkbG9nLmVycm9yXG4gICAgICB9O1xuICB9KSggJGxvZyApOyBcblxuXG5cbiAgIC8qKlxuICAgICogUGFydGlhbCBhcHBsaWNhdGlvbiB0byBwcmUtY2FwdHVyZSBhIGxvZ2dlciBmdW5jdGlvblxuICAgICogQGFwaTogIHByaXZhdGUgXG4gICAgKiBAcmV0dXJuczogRnVuY3Rpb24gXG4gICAgKi9cbiAgICB2YXIgcHJlcGFyZUxvZ0ZuID0gZnVuY3Rpb24oIGxvZ0ZuLCBjbGFzc05hbWUgKXtcblxuICAgICAgLyoqXG4gICAgICAgKiBJbnZva2UgdGhlIHNwZWNpZmllZCBgbG9nRm48YCB3aXRoIHRoZSBzdXBwbGFudCBmdW5jdGlvbmFsaXR5Li4uXG4gICAgICAgKiBAYXBpOiBwcml2YXRlIFxuICAgICAgICogQGV4YW1wbGU6IFxuICAgICAgICogICB2YXIgdXNlciA9IHsgd2hvOlwiVGhvbWFzIEJ1cmxlc29uXCJcIiwgZW1haWw9XCJUaG9tYXNCdXJsZXNvbkBnbWFpbC5jb21cIlwiIH07XG4gICAgICAgKiAgICRsb2cud2FybiggXCJBIHdhcm5pbmcgbWVzc2FnZSBmb3IgYHt3aG99YCB3aWxsIGJlIHNlbnQgdG8gYHtlbWFpbH1gICFcIiwgdXNlciApOyAgIFxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc2hvdWxkIG91dHB1dDogQSB3YXJuaW5nIG1lc3NhZ2UgZm9yIGBUaG9tYXMgQnVybGVzb25gIHdpbGwgYmUgc2VudCB0byBgVGhvbWFzQnVybGVzb25AZ21haWwuY29tYCAhXG4gICAgICAgKi9cbiAgICAgIHZhciBlbmhhbmNlZExvZ0ZuID0gZnVuY3Rpb24oICl7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgICAgIG5vdyAgPSBEYXRlVGltZS5mb3JtYXR0ZWROb3coKTtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnO1xuICAgICAgICAgICAgLy8gcHJlcGVuZCBhIHRpbWVzdGFtcCB0byB0aGUgb3JpZ2luYWwgb3V0cHV0IG1lc3NhZ2VcbiAgICAgICAgICAgIGFyZ3NbMF0gPSBzdXBwbGFudChcInswfSAtIHsxfXsyfVwiLCBbIG5vdywgY2xhc3NOYW1lLCBhcmdzWzBdIF0pO1xuXG4gICAgICAgIGxvZ0ZuLmNhbGwoIG51bGwsICBzdXBwbGFudC5hcHBseSggbnVsbCwgYXJncyApICk7XG4gICAgICB9O1xuXG4gICAgICAvLyBTcGVjaWFsLi4uIG9ubHkgbmVlZGVkIHRvIHN1cHBvcnQgYW5ndWxhci1tb2NrcyBleHBlY3RhdGlvbnNcbiAgICAgIGVuaGFuY2VkTG9nRm4ubG9ncyA9IFsgXTtcbiBcbiAgICAgIHJldHVybiBlbmhhbmNlZExvZ0ZuO1xuICAgICAgXG4gICAgfTtcblxuXG5cblxuICAgIC8qKlxuICAgICAqIFN1cHBvcnQgdG8gZ2VuZXJhdGUgY2xhc3Mtc3BlY2lmaWMgbG9nZ2VyIGluc3RhbmNlIHdpdGggY2xhc3NuYW1lIG9ubHlcbiAgICAgKlxuICAgICAqIEBwYXJhbTogbmFtZVxuICAgICAqIEByZXR1cm5zOiBPYmplY3Qgd3JhcHBlciBmYWNhZGUgdG8gJGxvZ1xuICAgICAqL1xuICAgIHZhciBnZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKCBjbGFzc05hbWUgKXtcbiAgICAgIGNsYXNzTmFtZSA9ICggY2xhc3NOYW1lICE9PSB1bmRlZmluZWQgKSA/IGNsYXNzTmFtZSArIFwiOjpcIiA6IFwiXCI7XG5cbiAgICAgIHJldHVybntcbiAgICAgICAgIGxvZyAgIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5sb2csICAgIGNsYXNzTmFtZSApLFxuICAgICAgICAgaW5mbyAgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmluZm8sICAgY2xhc3NOYW1lICksXG4gICAgICAgICB3YXJuICA6IHByZXBhcmVMb2dGbiggXyRsb2cud2FybiwgICBjbGFzc05hbWUgKSxcbiAgICAgICAgIGRlYnVnIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5kZWJ1ZywgIGNsYXNzTmFtZSApLFxuICAgICAgICAgLy8gZXJyb3IgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmVycm9yLCAgY2xhc3NOYW1lIClcbiAgICAgIH07XG5cbiAgICB9O1xuXG5cblxuICAgIC8vIHdyYXAgZWFjaCBsb2cgbWV0aG9kIFxuICAgICRsb2cubG9nICAgPSBwcmVwYXJlTG9nRm4oICRsb2cubG9nICk7XG4gICAgJGxvZy5pbmZvICA9IHByZXBhcmVMb2dGbiggJGxvZy5pbmZvICk7XG4gICAgJGxvZy53YXJuICA9IHByZXBhcmVMb2dGbiggJGxvZy53YXJuICk7XG4gICAgJGxvZy5kZWJ1ZyA9IHByZXBhcmVMb2dGbiggJGxvZy5kZWJ1ZyApO1xuICAgIC8vICRsb2cuZXJyb3IgPSBwcmVwYXJlTG9nRm4oICRsb2cuZXJyb3IgKTtcblxuICAgIC8vIEFkZCBzcGVjaWFsIG1ldGhvZCB0byBBbmd1bGFySlMgJGxvZ1xuICAgICRsb2cuZ2V0SW5zdGFuY2UgPSBnZXRJbnN0YW5jZTtcbiBcblxuICAgIHJldHVybiAkbG9nO1xufTsvL2VuY2hhbmNlTG9nZ2VyXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9ICBlbmNoYW5jZUxvZ2dlcjsiLCIvKipcbiAqIEBhdXRob3IgICAgICBUaG9tYXMgQnVybGVzb25cbiAqIEBkYXRlICAgICAgICBOb3ZlbWJlciwgMjAxM1xuICogQHNvdXJjZTogICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9UaG9tYXNCdXJsZXNvbi9hbmd1bGFyanMtbG9nRGVjb3JhdG9yL2Jsb2IvbWFzdGVyL3NyYy9taW5kc3BhY2UvdXRpbHMvc3VwcGxhbnQuanNcbiAgKi9cbiBcblxuICd1c2Ugc3RyaWN0JztcblxudmFyIHN1cHBsYW50ID0gIGZ1bmN0aW9uKCB0ZW1wbGF0ZSwgdmFsdWVzLCBwYXR0ZXJuICkge1xuICAgICAgICAgICAgcGF0dGVybiA9IHBhdHRlcm4gfHwgL1xceyhbXlxce1xcfV0qKVxcfS9nO1xuXG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZShwYXR0ZXJuLCBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSBiLnNwbGl0KCcuJyksXG4gICAgICAgICAgICAgICAgICAgIHIgPSB2YWx1ZXM7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzIGluIHApIHsgciA9IHJbcFtzXV07ICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgICAgICAgICAgciA9IGE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgciA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHIgPT09ICdudW1iZXInKSA/IHIgOiBhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cblxuLy8gc3VwcGxhbnQoKSBtZXRob2QgZnJvbSBDcm9ja2ZvcmRzIGBSZW1lZGlhbCBKYXZhc2NyaXB0YFxuRnVuY3Rpb24ucHJvdG90eXBlLm1ldGhvZCA9IGZ1bmN0aW9uIChuYW1lLCBmdW5jKSB7XG4gICAgdGhpcy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuU3RyaW5nLm1ldGhvZChcInN1cHBsYW50XCIsIGZ1bmN0aW9uKCB2YWx1ZXMsIHBhdHRlcm4gKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBzdXBwbGFudChzZWxmLCB2YWx1ZXMsIHBhdHRlcm4pO1xufSk7XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gIFN0cmluZy5zdXBwbGFudCA9IHN1cHBsYW50OyJdfQ==
