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

},{}],"/Library/WebServer/Documents/ionic-googlemaps/www/bower_components/ionic-advanced-carousel/dist/advanced-carousel.min.js":[function(require,module,exports){
!function(){"use strict";
t.$inject = ["e", "t", "o", "n", "r"];
e.$inject = ["e", "o", "n"];function e(e,o,n){function r(t,r,i,l){function a(){var e=null!==l.options.template?'template="'+l.options.template+'"':"";l.itemDirective="undefined"==typeof l.itemDirective?"carousel-generic-item":l.itemDirective;var t="<"+l.itemDirective+' ng-model="item" '+e+'on-select="vm.selectItem(item)" carousel-options="menuCarousel.options" ';return t+="></"+l.itemDirective+">"}function s(){var e=n.$getByHandle(l.options.carouselId).getScrollView(),t=e.__container,o=e.touchStart,r=e.touchMove;t.removeEventListener("touchstart",e.touchStart),document.removeEventListener("touchmove",e.touchMove),e.touchStart=function(t){t.preventDefault=function(){},o.apply(e,[t])},e.touchMove=function(t){t.preventDefault=function(){},r.apply(e,[t])},t.addEventListener("touchstart",e.touchStart,!1),document.addEventListener("touchmove",e.touchMove,!1)}l.el=r,l.options.trackBy="undefined"!=typeof i.trackBy?i.trackBy:"$index",l.options.trackBystr="$index"===l.options.trackBy?"$index":"item."+l.options.trackBy;var c=l.options.animateIn?" animateIn":"",u='<div class="a-carousel">';l.options.pullRefresh.active&&(u+='<div class="spinner-wrapper" ng-if="vm.options.pullRefresh.loading"><ion-spinner icon="android"></ion-spinner></div>',u+='<span class="pullrefresh-indicator"><svg viewBox="0 0 64 64"><g><circle stroke-width="6" stroke-dasharray="135.26261239144287" stroke-dashoffset="16.51371474556214" r="26" cx="32" cy="32" fill="none" transform="scale(1,1) translate(0,0) rotate(0,32,32)"></circle></g></svg></span>'),u+="<ion-scroll ",l.options.pullRefresh.active&&(u+='on-scroll="vm.onScroll()" '),u+='scrollbar-x="false" delegate-handle="'+l.options.carouselId+'" zooming="false" direction="x" overflow-scroll="false" has-bouncing="true"><nav style="visibility:hidden;"><ul> <li ng-repeat="item in vm.arrayProvider track by '+l.options.trackBystr+'"class="carousel-item'+c+'"ng-class="{\'active\':vm.itemActive === item}">'+a()+"</li></ul></nav></ion-scroll></div>",u=e(u)(t),r.append(u),o(function(){l.arrayProvider&&l.arrayProvider.length>0&&l.initCarousel(),s()},0)}return{restrict:"E",replace:!0,template:"",scope:{},link:r,controller:t,controllerAs:"vm",bindToController:{itemDirective:"@",carouselOptions:"=",arrayProvider:"=",onSelect:"&"}}}function t(e,t,o,n,r){function i(){function t(e,t){var n;"object"==typeof t?(n=t.carouselId,angular.extend(f.options,t)):n=t,n===f.options.carouselId&&o(f.initCarousel,0)}function n(e,t){var o=t.idContains,n=t.except;f.options.carouselId.indexOf(o)>=0&&f.options.carouselId!==n&&(f.itemActive=null)}angular.extend(f.options,f.carouselOptions),e.$on("a-carousel.arrayupdated",t),e.$on("a-carousel.desactivateItem",n),f.options.pullRefresh.active&&e.$on("a-carousel.pullrefresh.done",p)}function l(){function e(){var t=parseInt(l[s-1].offsetWidth),n=parseInt(l[s-1].offsetHeight);t>0&&n>0?i():(console.log("[INFO] Creating Carousel but DOM not ready yet..."),g>h?o(function(){e()},50):console.log("[ERROR] Size item Carousel could not be determined",f.options.carouselId),h++)}function i(){var e,o=null!==f.options.selectAtStart.property;if(angular.forEach(l,function(t){e=f.arrayProvider[v],e.carouselId=f.options.carouselId,d+=t.offsetWidth,f.options.widthItem=Math.max(t.offsetWidth,f.options.widthItem),f.options.heightItem=Math.max(t.offsetHeight,f.options.heightItem),f.arrayProvider[v].widthItem=t.offsetWidth,o&&-1===f.options.selectAtStart.index&&e[f.options.selectAtStart.property]===f.options.selectAtStart.value&&(f.options.selectAtStart.index=v),v+=1}),f.options.centerOnSelect){var i=.5*n.innerWidth,s=l[0],h=l[u-1];p=i-.5*s.offsetWidth,m=i-.5*h.offsetWidth,d+=p+m,f.options.maxScroll=n.innerWidth-d,"right"===f.options.align?r.$getByHandle(f.options.carouselId).scrollTo(-1*f.options.maxScroll,0,!1):"center"===f.options.align?r.$getByHandle(f.options.carouselId).scrollTo(f.options.maxScroll*-.5,0,!1):r.$getByHandle(f.options.carouselId).scrollTo(0,0,!0)}else d+=4,f.options.maxScroll=n.innerWidth-d;f.options.widthCarousel=d,!o&&f.options.selectFirst?c("right"===f.options.align?f.arrayProvider[u-1]:f.arrayProvider[0]):o&&-1!==f.options.selectAtStart.index&&a(f.arrayProvider[f.options.selectAtStart.index]),f.navElem=t.find("nav"),f.navElem.css({width:d+"px",height:f.options.heightItem+"px",visibility:"visible","padding-left":p+"px"}),f.options.pullRefresh.active&&(f.pullrefreshIndicator=angular.element(document.querySelector(".a-carousel .pullrefresh-indicator")),f.svgElem=t.find("g"))}var l=t.find("li"),s=l.length,u=angular.element(l).length,d=0,p=0,m=0,v=0,h=0,g=15;if(f.itemActive=null,!(u>0))throw Error("Trying to create a carousel from an empty array",f.options);o(function(){e()},50)}function a(e){var t,o;if(c(e),f.options.centerOnSelect){var n=u(e);if(t=0,0===n)t=0;else for(o=0;n>o;o++)t+=.5*(f.arrayProvider[o].widthItem+f.arrayProvider[o+1].widthItem);r.$getByHandle(f.options.carouselId).scrollTo(t,0,!0)}}function s(){var e,t=r.$getByHandle(f.options.carouselId).getScrollPosition().left,o=0,i=0;if(e=f.options.maxScroll<0?t/f.options.maxScroll*-1:t/10,e>1){var l=t- -1*f.options.maxScroll;o=l/n.innerWidth,f.pullrefreshIndicator.css({transform:"translateX("+-56*i+"px)"})}o>.25&&t>0?(f.pullrefreshIndicator.css({transform:"translateX(0px)",display:"none"}),d()):(i=o/.2,f.svgElem[0].setAttribute("transform","rotate("+360*i+" 32 32)"),f.pullrefreshIndicator.css({transform:"translateX("+-56*i+"px)"}))}function c(t){f.itemActive=t,f.onSelect.call(null,{item:t}),e.$broadcast("a-carousel.itemselected",t)}function u(e){for(var t in f.arrayProvider)if(f.arrayProvider[t]===e)return t}function d(){f.options.pullRefresh.loading||(e.$apply(function(){f.options.pullRefresh.loading=!0}),r.$getByHandle(f.options.carouselId).freezeScroll(!0),f.navElem.css({width:f.options.widthCarousel+45+"px"}),r.$getByHandle(f.options.carouselId).resize(),f.options.pullRefresh.callBack())}function p(){f.options.pullRefresh.loading=!1,f.navElem.css({width:f.options.widthCarousel+"px"}),r.$getByHandle(f.options.carouselId).resize(),r.$getByHandle(f.options.carouselId).freezeScroll(!1),f.pullrefreshIndicator.css({transform:"translateX(0px)",display:"block"})}var f=this;f.options={showScroll:!1,carouselId:"my-carousel",template:null,align:"left",centerOnSelect:!0,widthItem:0,heightItem:0,trackBy:"$index",selectFirst:!0,selectAtStart:{property:null,value:null,index:-1},pullRefresh:{active:!1,callBack:angular.noop,loading:!1},animateIn:!1},f.initCarousel=l,f.selectItem=a,f.onScroll=s,i()}angular.module("aCarousel",[]).directive("aCarousel",e),e.$inject=["$compile","$timeout","$ionicScrollDelegate"],t.$inject=["$scope","$element","$timeout","$window","$ionicScrollDelegate"]}(),function(){"use strict";
t.$inject = ["e"];function e(){return{restrict:"E",replace:!0,templateUrl:function(e,t){return t.template},scope:{},controller:t,controllerAs:"vm",bindToController:{ngModel:"=",onSelect:"&",carouselOptions:"="}}}function t(e){function t(){e.$on("a-carousel.itemselected",function(e,t){o.selected=t===o.ngModel?!0:!1})}var o=this;o.selected=!1,t()}var o=document.getElementsByTagName("script");o[o.length-1].src;angular.module("aCarousel").directive("carouselGenericItem",e),t.$inject=["$scope"]}(),function(){"use strict";
t.$inject = ["e"];function e(){return{restrict:"E",replace:!0,template:'<a class="a-carousel-text-item"ng-bind="::vm.ngModel.display"ng-click="vm.onSelect({item:vm.ngModel})"></a>',scope:{},controller:t,controllerAs:"vm",bindToController:{ngModel:"=",onSelect:"&"}}}function t(e){function t(){e.$on("acarousel.itemselected",function(e,t){o.selected=t===o.ngModel?!0:!1})}var o=this;o.selected=!1,t()}angular.module("aCarousel").directive("carouselTextItem",e),t.$inject=["$scope"]}();

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
require('../bower_components/ionic-advanced-carousel/dist/advanced-carousel.min');



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

},{"../bower_components/angular-animate/angular-animate.min":"/Library/WebServer/Documents/ionic-googlemaps/www/bower_components/angular-animate/angular-animate.min.js","../bower_components/ionic-advanced-carousel/dist/advanced-carousel.min":"/Library/WebServer/Documents/ionic-googlemaps/www/bower_components/ionic-advanced-carousel/dist/advanced-carousel.min.js","../bower_components/ng-knob/dist/ng-knob.min":"/Library/WebServer/Documents/ionic-googlemaps/www/bower_components/ng-knob/dist/ng-knob.min.js","./constants.development":"/Library/WebServer/Documents/ionic-googlemaps/www/js/constants.development.js","./controllers/_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js","./directives/_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/directives/_index.js","./models/_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/_index.js","./on_config":"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_config.js","./on_run":"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_run.js","./services/_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/constants.development.js":[function(require,module,exports){
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

MapCtrl.$inject = ["$rootScope", "$scope", "$log", "$ionicLoading", "AppSettings", "GMap", "LocationsService"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MapCtrl($rootScope, $scope, $log, $ionicLoading, AppSettings, GMap, LocationsService) {

    $log = $log.getInstance("MapCtrl");

 	  // ViewModel
  	var vm = this;
    var currentCenter = $rootScope.currentPosition;

    vm.this_radius = 5000;
    vm.gmap = new GMap({zoom:13, radius:vm.this_radius});    
    vm.gmap.height = 625;
    vm.markers = [];    
    // vm.gmap.plotLocations();
    
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
                size: 200,
                min:  1,
                max:  10000,
                step: 1,
                barColor: '#5BC01E',
                trackColor: '#212121',
                trackWidth: 15,
                barWidth: 30,
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
                    
                vm.markers[locate._id] = marker;
          });

        return vm.markers;
    };

      

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
          
          setKnobValue(vm.this_radius)
                    
        });//end .then







         $scope.$watch("Map.knob.value", function(newValue, oldValue) {
            $log.log("new Map.knob.value: "+newValue);
            $log.log("old Map.knob.value: "+oldValue);

            vm.locationsRadius.setRadius(newValue);
            // vm.gmap.map.panTo({lat:$rootScope.currentPosition.latitude, lng:$rootScope.currentPosition.longitude});
            var MapBoundsArr = _.toArray(vm.gmap.map.getBounds());
            var RadiusBoundsArr = _.toArray(vm.locationsRadius.getBounds());
            // TODO: check if RadiusBounds are within MapBounds
            $log.log("MapBoundsArr: "+MapBoundsArr);
            $log.log("RadiusBoundsArr: "+ RadiusBoundsArr );

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

      locationMarker.addListener('click', function() {
        $rootScope.$broadcast('marker:clicked', locationInfo );
        infowindow.open( _map.map ,locationMarker);
      });

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
      return responseData.locations
              .map(Location.build);  
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
    // $log.debug('build {name}', lData);
    // Location.setTravelTime(lData);
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

LocationsService.$inject = ["$log", "Yocal", "Location"];
var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function LocationsService($log, Yocal, Location) {
  $log = $log.getInstance("LocationsServiceService");

  var service = {};

  service.get = function( getData ) {

    $log.debug('GET location in a {radius}  of {lat}, {lng}', getData);

    return Yocal.get(getData)
                .then(Location.responseTransformer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1hbmltYXRlL2FuZ3VsYXItYW5pbWF0ZS5taW4uanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2Jvd2VyX2NvbXBvbmVudHMvaW9uaWMtYWR2YW5jZWQtY2Fyb3VzZWwvZGlzdC9hZHZhbmNlZC1jYXJvdXNlbC5taW4uanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2Jvd2VyX2NvbXBvbmVudHMvbmcta25vYi9kaXN0L25nLWtub2IubWluLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9hcHAtbWFpbi5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29uc3RhbnRzLmRldmVsb3BtZW50LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9BcHBDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9Ccm93c2VDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9Db25uZWN0Q3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvTG9naW5DdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9NYXBDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9QbGF5bGlzdEN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL1BsYXlsaXN0c0N0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvZGlyZWN0aXZlcy9faW5kZXguanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2RpcmVjdGl2ZXMvbUFwcExvYWRpbmdEaXJlY3RpdmUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL21vZGVscy9HTWFwLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9tb2RlbHMvTG9jYXRpb25Nb2RlbC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvbW9kZWxzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvb25fY29uZmlnLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9vbl9ydW4uanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3NlcnZpY2VzL0N1cnJlbnRDb29yZHNTZXJ2aWNlLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9Mb2NhdGlvbnNTZXJ2aWNlLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9Zb2NhbC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvX2luZGV4LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9leGFtcGxlLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9EYXRlVGltZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvdXRpbHMvbG9nZ2luZy9Mb2dEZWNvcmF0b3IuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL2xvZ2dpbmcvTG9nRW5oYW5jZXIuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL3N1cHBsYW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7O0FBS0EsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsYUFBYSxTQUFTLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLFNBQVMsT0FBTyxHQUFHLElBQUksR0FBRyxZQUFZLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxNQUFNLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sT0FBTyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRLEtBQUssRUFBRSxNQUFNO0FBQ3hnQixLQUFLLEVBQUUsR0FBRyxJQUFJLEVBQUUsR0FBRyxTQUFTLE9BQU8sRUFBRSxNQUFNLFFBQVEsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRSxTQUFTLE9BQU8sRUFBRSxHQUFHLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLE9BQU8sR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxTQUFTLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxTQUFTLEdBQUcsRUFBRSxDQUFDLE9BQU8sU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsR0FBRyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxNQUFNLEVBQUUsY0FBYyxHQUFHLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxZQUFZLE9BQU8sU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUU7QUFDbGYsRUFBRSxFQUFFLGFBQWEsVUFBVSxDQUFDLEVBQUUsb0JBQW9CLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxNQUFNLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVUsSUFBSSxLQUFLLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLGFBQWEsSUFBSSxLQUFLLEVBQUUsYUFBYSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssU0FBUyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsS0FBSyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxLQUFLLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsTUFBTTtBQUMxZixJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUssT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsWUFBWSxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLGNBQWMsRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLEdBQUcsU0FBUyxFQUFFLElBQUksS0FBSyxFQUFFLElBQUksS0FBSyxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxPQUFPLGFBQWEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLE9BQU8sTUFBTSxFQUFFLEVBQUUsaUJBQWlCLElBQUksR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLE9BQU87QUFDcmYsR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxLQUFLLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLFdBQVcsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxPQUFPLElBQUksRUFBRSxXQUFXLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUUsR0FBRyxJQUFJLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDLE9BQU8sSUFBSSxHQUFHLE1BQU0sRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLFdBQVcsR0FBRyxjQUFjLE1BQU0sQ0FBQyxFQUFFLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsWUFBWSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLEVBQUUsR0FBRyxTQUFTLEdBQUc7QUFDeGYsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLE9BQU8sTUFBTSxNQUFNLENBQUMsTUFBTSxVQUFVLENBQUMsRUFBRSxPQUFPLE9BQU8sT0FBTyxNQUFNLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sSUFBSSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsUUFBUSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxLQUFLLElBQUksRUFBRSxFQUFFLEtBQUssR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLFNBQVMsR0FBRyxFQUFFLFNBQVMsR0FBRyxFQUFFLFlBQVksR0FBRyxFQUFFLFVB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QUFFLEtBQUssS0FBSyxRQUFRLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxRQUFRLE9BQU8sS0FBSyxTQUFTLEtBQUssU0FBUyxFQUFFLEVBQUUsQ0FBQyxPQUFPLEtBQUssYUFBYSxLQUFLLEVBQUUsSUFBSSxRQUFRLFNBQVMsRUFBRSxDQUFDLE9BQU8sS0FBSyxhQUFhLFNBQVMsSUFBSSxVQUFVLFNBQVMsRUFBRSxDQUFDLE9BQU8sS0FBSyxhQUFhLFdBQVcsSUFBSSxNQUFNLFVBQVUsQ0FBQyxLQUFLLEtBQUs7QUFDN2dCLEtBQUssS0FBSyxTQUFTLE9BQU8sVUFBVSxDQUFDLEtBQUssS0FBSyxRQUFRLEtBQUssS0FBSyxVQUFVLElBQUksVUFBVSxDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssU0FBUyxDQUFDLElBQUksT0FBTyxVQUFVLENBQUMsS0FBSyxLQUFLLFFBQVEsS0FBSyxLQUFLLFNBQVMsS0FBSyxTQUFTLENBQUMsSUFBSSxTQUFTLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUscUJBQXFCLFVBQVUsQ0FBQyxFQUFFLFNBQVMsT0FBTyxTQUFTLFNBQVMsRUFBRSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUUsS0FBSyxlQUFlLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxLQUFLLGVBQWUsT0FBTyxFQUFFLEtBQUssT0FBTyxLQUFLLE9BQU8sS0FBSyxTQUFTLGlCQUFpQixDQUFDO0FBQ3plLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxVQUFVLElBQUksT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLGFBQWEsSUFBSSxPQUFPLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLEtBQUssSUFBSSxFQUFFLEtBQUssS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsWUFBWSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxLQUFLLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxFQUFFLGFBQWEsRUFBRSxPQUFPLEtBQUssU0FBUztBQUNsZ0IsRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsT0FBTyxLQUFLLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLElBQUksRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE9BQU8sS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLFFBQVEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsV0FBVyxLQUFLLEtBQUssQ0FBQyxRQUFRLGFBQWEsZUFBZSxZQUFZLFlBQVksY0FBYyxrQkFBa0IsbUJBQW1CLFdBQVcsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssU0FBUyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ25mLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxTQUFTLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsT0FBTyxJQUFJLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxLQUFLLE1BQU0sRUFBRSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsWUFBWSxLQUFLLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGFBQWEsS0FBSztBQUN4ZixHQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxPQUFPLFNBQVMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLEVBQUUsT0FBTyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsTUFBTSxPQUFPLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEdBQUcsT0FBTyxFQUFFLE9BQU8sR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsY0FBYyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO0FBQ3BmLEVBQUUsUUFBUSxFQUFFLFNBQVMsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE9BQU8sS0FBSyxFQUFFLFFBQVEsSUFBSSxJQUFJLFFBQVEsRUFBRSxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsT0FBTyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLGFBQWEsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsVUFBVSxHQUFHLEVBQUUsRUFBRSxFQUFFLFNBQVMsWUFBWSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxVQUFVLEdBQUcsR0FBRyxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsZUFBZSxFQUFFLE1BQU0sR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUUsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFO0FBQ2pmLEVBQUUsWUFBWSxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksS0FBSyxFQUFFLFVBQVUsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLE1BQU0sRUFBRSxRQUFRLEdBQUcsRUFBRSxFQUFFLEVBQUUsUUFBUSxNQUFNLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLGlCQUFpQixxQkFBcUIsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxFQUFFLElBQUksR0FBRyxPQUFPLEdBQUcsS0FBSyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxNQUFNLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsbUJBQW1CLEVBQUUsT0FBTyxHQUFHLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUc7QUFDbmYsRUFBRSxTQUFTLE1BQU0sSUFBSSxFQUFFLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsRUFBRSxXQUFXLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsaUJBQWlCLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLG9CQUFvQixFQUFFLEdBQUcsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsU0FBUyxNQUFNLElBQUksRUFBRSxFQUFFLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssdUJBQXVCLEdBQUcsS0FBSyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxvQkFBb0IsRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsU0FBUyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLFNBQVMsR0FBRztBQUM5ZixFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLGFBQWEsa0JBQWtCLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxPQUFPLElBQUksRUFBRSxzQkFBc0IsU0FBUyxFQUFFLENBQUMs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WSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsS0FBSyxLQUFLLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLFlBQVksV0FBVyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFlBQVksVUFBVSxDQUFDLEVBQUUsY0FBYyxFQUFFLGVBQWUsTUFBTSxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUU7QUFDdGYsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLElBQUksRUFBRSxRQUFRLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRSxLQUFLLEdBQUcsRUFBRSxLQUFLLElBQUksRUFBRSxHQUFHLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLEtBQUssRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxLQUFLLEVBQUUsRUFBRSxNQUFNLEtBQUssSUFBSSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLEdBQUcsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxPQUFPLE9BQU8sRUFBRSxLQUFLLEtBQUssU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksT0FBTztBQUNyZixTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxTQUFTLFFBQVEsR0FBRyxFQUFFLEVBQUUsR0FBRyxTQUFTLFFBQVEsSUFBSSxFQUFFLEVBQUUsU0FBUyxRQUFRLEdBQUcsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsVUFBVSxHQUFHLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxXQUFXLElBQUksRUFBRSxXQUFXLHFCQUFxQixFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLGVBQWUsR0FBRyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsWUFBWSxjQUFjLEVBQUUsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLE9BQU8sU0FBUyxRQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLE9BQU8sVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE9BQU8sT0FBTyxJQUFJLEVBQUUsRUFBRSxLQUFLO0FBQzdlLEdBQUcsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLFNBQVMsR0FBRyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsRUFBRSxZQUFZLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRSxZQUFZLE1BQU0sSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxXQUFX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RSxNQUFNLEtBQUssSUFBSSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSx1QkFBdUIsR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFO0FBQ3RmLENBQUMsR0FBRyxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxPQUFPLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsZUFBZSxFQUFFLEVBQUUsR0FBRyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEdBQUcsTUFBTSxLQUFLLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsTUFBTSxLQUFLLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLE1BQU0sS0FBSyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLFFBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxTQUFTLGFBQWEsRUFBRSxFQUFFLEtBQUssUUFBUSxHQUFHLEdBQUcsR0FBRyxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQztDQUNqZixFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLE9BQU8sVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssT0FBTyxNQUFNLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxtQkFBbUIsR0FBRyxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsbUJBQW1CLGFBQWEsSUFBSSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLGFBQWEsSUFBSSxFQUFFLEVBQUUsT0FBTyxJQUFJLElBQUksRUFBRSxFQUFFLE9BQU8sSUFBSSxHQUFHLElBQUksRUFBRSxPQUFPLE9BQU8sU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUM5ZSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxPQUFPLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLFVBQVUsSUFBSSxVQUFVLFFBQVEsR0FBRyxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLEVBQUUsS0FBSyxVQUFVLEdBQUcsRUFBRSxXQUFXLEdBQUcsSUFBSSxFQUFFLFVBQVUsRUFBRSxjQUFjLEdBQUcsSUFBSSxFQUFFLGNBQWMsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVB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QUFHLEVBQUUsV0FBVyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEVBQUUsR0FBRyxFQUFFLFlBQVksR0FBRyxFQUFFLEVBQUUsRUFBRSxRQUFRLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsTUFBTSxFQUFFLGFBQWEsRUFBRSxRQUFRLFlBQVksU0FBUyxDQUFDLEVBQUUsRUFBRSxRQUFRLFVBQVUsRUFBRSxDQUFDLEdBQUcsV0FBVyxFQUFFLFFBQVEsTUFBTSxFQUFFLGFBQWEsRUFBRSxRQUFRLFlBQVksU0FBUyxFQUFFLFFBQVEsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUsUUFBUSxZQUFZLFNBQVMsRUFBRSxFQUFFLENBQUMsUUFBUSxHQUFHLEVBQUUsRUFBRSxRQUFRLFVBQVUsRUFBRSxXQUFXLEVBQUUsRUFBRSxRQUFRLGNBQWMsRUFBRSxDQUFDLEdBQUcsRUFBRSxRQUFRLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxNQUFNLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxjQUFjLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLGNBQWMsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLFFBQVEsY0FBYyxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssT0FBTyxFQUFFLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLE9BQU8sRUFBRSxRQUFRLFdBQVcsS0FBSyxXQUFXLFVBQVUsZUFBZSxFQUFFLE9BQU8sRUFBRSxRQUFRLFlBQVksU0FBUyxFQUFFLHFCQUFxQixRQUFRLFFBQVEsU0FBUyxjQUFjLHVDQUF1QyxFQUFFLFFBQVEsRUFBRSxLQUFLLE1BQU0sSUFBSSxFQUFFLEVBQUUsS0FBSyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxRQUFRLEdBQUcsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsV0FBVyxLQUFLLEVBQUUsRUFBRSxHQUFHLE1BQU0sTUFBTSxrREFBa0QsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLEtBQUssSUFBSSxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxlQUFlLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFLGNBQWMsR0FBRyxVQUFVLEVBQUUsY0FBYyxFQUFFLEdBQUcsV0FBVyxFQUFFLGFBQWEsRUFBRSxRQUFRLFlBQVksU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLFFBQVEsWUFBWSxvQkFBb0IsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLFFBQVEsVUFBVSxFQUFFLEVBQUUsRUFBRSxRQUFRLFVBQVUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxRQUFRLFVBQVUsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixJQUFJLENBQUMsVUFBVSxjQUFjLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLHFCQUFxQixJQUFJLENBQUMsVUFBVSxrQkFBa0IsUUFBUSxTQUFTLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLEdBQUcsYUFBYSxZQUFZLFVBQVUsSUFBSSxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsSUFBSSxDQUFDLFVBQVUsY0FBYyxDQUFDLEdBQUcsRUFBRSxTQUFTLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRSxTQUFTLEtBQUssS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLFdBQVcsMEJBQTBCLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFLGNBQWMsR0FBRyxFQUFFLGNBQWMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEdBQUcsQ0FBQyxFQUFFLFFBQVEsWUFBWSxVQUFVLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxRQUFRLFlBQVksUUFBUSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsUUFBUSxZQUFZLGFBQWEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsY0FBYyxHQUFHLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxZQUFZLFNBQVMsRUFBRSxRQUFRLFlBQVksWUFBWSxTQUFTLEdBQUcsQ0FBQyxFQUFFLFFBQVEsWUFBWSxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLGNBQWMsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLFlBQVksU0FBUyxFQUFFLGFBQWEsRUFBRSxRQUFRLFlBQVksYUFBYSxDQUFDLEdBQUcsRUFBRSxxQkFBcUIsSUFBSSxDQUFDLFVBQVUsa0JBQWtCLFFBQVEsVUFBVSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxXQUFXLGNBQWMsU0FBUyxLQUFLLE1BQU0sT0FBTyxlQUFlLENBQUMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVEsU0FBUyxZQUFZLENBQUMsRUFBRSxjQUFjLENBQUMsU0FBUyxLQUFLLE1BQU0sS0FBSyxNQUFNLENBQUMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxRQUFRLEtBQUssUUFBUSxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxRQUFRLE9BQU8sWUFBWSxJQUFJLFVBQVUsWUFBWSxHQUFHLEVBQUUsUUFBUSxDQUFDLFdBQVcsV0FBVyx3QkFBd0IsRUFBRSxRQUFRLENBQUMsU0FBUyxXQUFXLFdBQVcsVUFBVSwyQkFBMkIsVUFBVSxDQUFDO2tCQUFhLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLEVBQUUsWUFBWSxTQUFTLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLE1BQU0sR0FBRyxXQUFXLEVBQUUsYUFBYSxLQUFLLGlCQUFpQixDQUFDLFFBQVEsSUFBSSxTQUFTLElBQUksZ0JBQWdCLE1BQU0sU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLElBQUksMEJBQTBCLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBRSxJQUFJLElBQUksRUFBRSxTQUFTLHFCQUFxQixVQUFVLEVBQUUsRUFBRSxPQUFPLEdBQUcsSUFBSSxRQUFRLE9BQU8sYUFBYSxVQUFVLHNCQUFzQixHQUFHLEVBQUUsUUFBUSxDQUFDLGFBQWEsVUFBVSxDQUFDO2tCQUFhLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLEVBQUUsU0FBUyw4R0FBOEcsTUFBTSxHQUFHLFdBQVcsRUFBRSxhQUFhLEtBQUssaUJBQWlCLENBQUMsUUFBUSxJQUFJLFNBQVMsTUFBTSxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsSUFBSSx5QkFBeUIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFFLElBQUksUUFBUSxPQUFPLGFBQWEsVUFBVSxtQkFBbUIsR0FBRyxFQUFFLFFBQVEsQ0FBQyxhQUFhOzs7QUNBbi9POzs7Ozs7O0FBT0EsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsR0FBRyxLQUFLLFNBQVMsUUFBUSxNQUFNLFFBQVEsQ0FBQyxLQUFLLFFBQVEsUUFBUSxLQUFLLE1BQU0sTUFBTSxLQUFLLFFBQVEsUUFBUSxLQUFLLE9BQU8sQ0FBQyxHQUFHLEtBQUssVUFBVSxlQUFlLFNBQVMsTUFBTSxTQUFTLFNBQVMsV0FBVyxXQUFXLENBQUMsT0FBTyxTQUFTLFVBQVUsSUFBSSxXQUFXLFlBQVksRUFBRSxTQUFTLFVBQVUsSUFBSSxXQUFXLFlBQVksRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sYUFBYSxTQUFTLGFBQWEsU0FBUyxZQUFZLGFBQWEsS0FBSyxVQUFVLGVBQWUsU0FBUyxRQUFRLFNBQVMsV0FBVyxTQUFTLFdBQVcsQ0FBQyxPQUFPLFNBQVMsVUFBVSxJQUFJLFdBQVcsWUFBWSxFQUFFLFNBQVMsVUFBVSxJQUFJLFdBQVcsWUFBWSxFQUFFLENBQUMsSUFBSSxLQUFLLEdBQUcsUUFBUSxhQUFhLFNBQVMsYUFBYSxTQUFTLFlBQVksWUFBWSxLQUFLLFVBQVUsVUFBVSxTQUFTLFlBQVksWUFBWSxXQUFXLFNBQVMsYUFBYSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxZQUFZLGFBQWEsWUFBWSxhQUFhLFdBQVcsWUFBWSxTQUFTLFVBQVUsYUFBYSxjQUFjLE9BQU8sS0FBSyxLQUFLLFVBQVUsUUFBUSxTQUFTLElBQUksSUFBSSxNQUFNLE1BQU0sTUFBTSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksT0FBTyxRQUFRLEtBQUssS0FBSyxPQUFPLEtBQUssSUFBSSxLQUFLLE1BQU0sT0FBTyxLQUFLLFlBQVksYUFBYSxLQUFLLFFBQVEsS0FBSyxFQUFFLEtBQUssS0FBSyxRQUFRLEtBQUssRUFBRSxLQUFLLE9BQU8sS0FBSyxRQUFRLFdBQVcsQ0FBQyxJQUFJLE9BQU8sS0FBSyxHQUFHLFFBQVEsT0FBTyxNQUFNLEtBQUssS0FBSyxPQUFPLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxDQUFDLElBQUksWUFBWSxTQUFTLEtBQUssUUFBUSxLQUFLLEVBQUUsSUFBSSxXQUFXLEtBQUssZUFBZSxLQUFLLFFBQVEsV0FBVyxLQUFLLFNBQVMsS0FBSyxlQUFlLEtBQUssUUFBUSxTQUFTLEtBQUssS0FBSyxRQUFRLE1BQU0sVUFBVSxhQUFhLEtBQUssUUFBUSxNQUFNLE1BQU0sS0FBSyxRQUFRLE1BQU0sWUFBWSxJQUFJLEtBQUssaUJBQWlCLFlBQVksS0FBSyxRQUFRLFdBQVcsa0JBQWtCLFlBQVksS0FBSyxRQUFRLFNBQVMsaUJBQWlCLFlBQVksS0FBSyxRQUFRLFNBQVMsb0JBQW9CLEVBQUUsaUJBQWlCLFlBQVksa0JBQWtCLFlBQVksaUJBQWlCLFlBQVksb0JBQW9CLFlBQVksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFlBQVksS0FBSyxDQUFDLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxZQUFZLEVBQUUsa0JBQWtCLEtBQUssa0JBQWtCLE1BQU0sS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLGFBQWEsS0FBSyxDQUFDLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxVQUFVLEVBQUUsbUJBQW1CLEtBQUssa0JBQWtCLEtBQUssbUJBQW1CLEtBQUssa0JBQWtCLE1BQU0sS0FBSyxRQUFRLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxFQUFFLFlBQVksV0FBVyxXQUFXLFNBQVMsS0FBSyxRQUFRLEtBQUssT0FBTyxpQkFBaUIsaUJBQWlCLEtBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxRQUFRLEtBQUssV0FBVyxrQkFBa0Isa0JBQWtCLEtBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxRQUFRLEtBQUssV0FBVyxpQkFBaUIsaUJBQWlCLEtBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxRQUFRLEtBQUssV0FBVyxvQkFBb0Isb0JBQW9CLEtBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxRQUFRLEtBQUssV0FBVyxLQUFLLFFBQVEsS0FBSyxVQUFVLFlBQVksS0FBSyxRQUFRLEtBQUssTUFBTSxZQUFZLFdBQVcsV0FBVyxLQUFLLFNBQVMsS0FBSyxVQUFVLGlCQUFpQixpQkFBaUIsV0FBVyxVQUFVLEtBQUssVUFBVSxLQUFLLFVBQVUsa0JBQWtCLGtCQUFrQixXQUFXLFdBQVcsS0FBSyxRQUFRLFFBQVEsS0FBSyxTQUFTLEtBQUssVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVcsV0FBVyxLQUFLLFFBQVEsUUFBUSxLQUFLLFlBQVksS0FBSyxVQUFVLG9CQUFvQixvQkFBb0IsV0FBVyxXQUFXLEtBQUssVUFBVSxTQUFTLFNBQVMsaUJBQWlCLGFBQWEsQ0FBQyxJQUFJLElBQUksR0FBRyxPQUFPLEtBQUssU0FBUyxPQUFPLE9BQU8sS0FBSyxRQUFRLEtBQUssUUFBUSxNQUFNLEtBQUssU0FBUyxLQUFLLFFBQVEsTUFBTSxHQUFHLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxJQUFJLEtBQUssTUFBTSxRQUFRLENBQUMsS0FBSyxLQUFLLFFBQVEsVUFBVSxLQUFLLFFBQVEsYUFBYSxDQUFDLElBQUksU0FBUyxHQUFHLEtBQUssUUFBUSxLQUFLLEtBQUssU0FBUyxLQUFLLFFBQVEsV0FBVyxTQUFTLEtBQUssUUFBUSxTQUFTLE1BQU0sS0FBSyxRQUFRLEtBQUssSUFBSSxLQUFLLE1BQU0sS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLEVBQUUsS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLFFBQVEsaUJBQWlCLEVBQUUsS0FBSyxRQUFRLGVBQWUsSUFBSSxJQUFJLE9BQU8sUUFBUSxLQUFLLEtBQUssUUFBUSxLQUFLLGNBQWMsVUFBVSxLQUFLLFlBQVksVUFBVSxNQUFNLE9BQU8sS0FBSyxRQUFRLFdBQVcsS0FBSyxFQUFFLEtBQUssUUFBUSxNQUFNLElBQUksS0FBSyxZQUFZLGFBQWEsS0FBSyxRQUFRLEtBQUssRUFBRSxNQUFNLEtBQUssUUFBUSxLQUFLLEVBQUUsSUFBSSxLQUFLLFFBQVEsTUFBTSxLQUFLLEtBQUssUUFBUSxRQUFRLFVBQVUsU0FBUyxJQUFJLEtBQUssUUFBUSxLQUFLLEtBQUssU0FBUyxLQUFLLFFBQVEsUUFBUSxPQUFPLFNBQVMsS0FBSyxRQUFRLFFBQVEsS0FBSyxNQUFNLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxZQUFZLEtBQUssY0FBYyxVQUFVLEtBQUssWUFBWSxVQUFVLE1BQU0sT0FBTyxLQUFLLFFBQVEsUUFBUSxPQUFPLEtBQUssS0FBSyxRQUFRLFFBQVEsTUFBTSxLQUFLLFlBQVksYUFBYSxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sS0FBSyxRQUFRLEtBQUssRUFBRSxJQUFJLEtBQUssUUFBUSxNQUFNLE1BQU0sR0FBRyxLQUFLLFFBQVEsTUFBTSxRQUFRLENBQUMsSUFBSSxPQUFPLFNBQVMsS0FBSyxNQUFNLEVBQUUsTUFBTSxFQUFFLGFBQWEsS0FBSyxlQUFlLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxLQUFLLFdBQVcsS0FBSyxlQUFlLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxLQUFLLEtBQUssRUFBRSxHQUFHLElBQUksS0FBSyxRQUFRLFlBQVksTUFBTSxLQUFLLFFBQVEsV0FBVyxLQUFLLEdBQUcsU0FBUyxLQUFLLFFBQVEsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssUUFBUSxNQUFNLE1BQU0sT0FBTyxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sU0FBUyxLQUFLLFFBQVEsTUFBTSxTQUFTLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxNQUFNLE1BQU0sS0FBSyxHQUFHLE1BQU0sVUFBVSxJQUFJLFVBQVUsQ0FBQyxPQUFPLE1BQU0sT0FBTyxXQUFXLGNBQWMsS0FBSyxHQUFHLEVBQUUsYUFBYSxPQUFPLEdBQUcsU0FBUyxNQUFNLENBQUMsR0FBRyxPQUFPLEtBQUssSUFBSSxPQUFPLE9BQU8sR0FBRyxPQUFPLEtBQUssSUFBSSxPQUFPLE9BQU8sRUFBRSxTQUFTLElBQUksVUFBVSxVQUFVLEtBQUssTUFBTSxRQUFRLE9BQU8sVUFBVSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksS0FBSyxLQUFLLFFBQVEsTUFBTSxhQUFhLEdBQUcsVUFBVSxLQUFLLFFBQVEsTUFBTSxLQUFLLENBQUMsSUFBSSxPQUFPLEtBQUssUUFBUSxNQUFNLE9BQU8sT0FBTyxLQUFLLFFBQVEsS0FBSyxFQUFFLFNBQVMsS0FBSyxRQUFRLE1BQU0sU0FBUyxLQUFLLEdBQUcsTUFBTSxVQUFVLElBQUksVUFBVSxDQUFDLE9BQU8sTUFBTSxPQUFPLFdBQVcsY0FBYyxLQUFLLEdBQUcsRUFBRSxhQUFhLE9BQU8sR0FBRyxTQUFTLE1BQU0sQ0FBQyxHQUFHLE9BQU8sS0FBSyxJQUFJLE9BQU8sT0FBTyxHQUFHLE9BQU8sS0FBSyxJQUFJLE9BQU8sT0FBTyxHQUFHLE9BQU8sS0FBSyxJQUFJLFFBQVEsT0FBTyxRQUFRLEdBQUcsT0FBTyxLQUFLLElBQUksUUFBUSxPQUFPLFdBQVcsSUFBSSxVQUFVLFFBQVEsS0FBSyxNQUFNLFFBQVEsT0FBTyxRQUFRLEtBQUssQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksR0FBRyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLGVBQWUsS0FBSyxRQUFRLE1BQU0sTUFBTSxPQUFPLEtBQUssUUFBUSxNQUFNLFNBQVMsU0FBUyxLQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxVQUFVLENBQUMsS0FBSyxLQUFLLFFBQVEsS0FBSyxRQUFRLEtBQUssUUFBUSxJQUFJLEtBQUssU0FBUyxXQUFXLENBQUMsS0FBSyxLQUFLLFFBQVEsYUFBYSxLQUFLLFFBQVEsZ0JBQWdCLEtBQUssV0FBVyxLQUFLLFFBQVEsSUFBSSxLQUFLLFVBQVUsWUFBWSxDQUFDLEtBQUssS0FBSyxRQUFRLGVBQWUsS0FBSyxXQUFXLEtBQUssUUFBUSxJQUFJLEtBQUssVUFBVSxZQUFZLENBQUMsZUFBZSxJQUFJLEtBQUssVUFBVSxLQUFLLFFBQVEsSUFBSSxLQUFLLFNBQVMsV0FBVyxDQUFDLEtBQUssS0FBSyxRQUFRLFdBQVcsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLFdBQVcsT0FBTyxXQUFXLEtBQUssUUFBUSxJQUFJLEtBQUssWUFBWSxjQUFjLENBQUMsZUFBZSxFQUFFLE9BQU8sUUFBUSxpQkFBaUIsZUFBZSxLQUFLLFVBQVUsS0FBSyxTQUFTLE9BQU8sQ0FBQyxTQUFTLGlCQUFpQixDQUFDLEtBQUssT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxFQUFFLEtBQUssUUFBUSxLQUFLLEVBQUUsRUFBRSxHQUFHLE1BQU0sRUFBRSxLQUFLLFFBQVEsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLGtCQUFrQixDQUFDLEtBQUssT0FBTyxDQUFDLEVBQUUsSUFBSSxPQUFPLEdBQUcsTUFBTSxLQUFLLFlBQVksRUFBRSxPQUFPLEdBQUcsS0FBSyxRQUFRLEtBQUssRUFBRSxFQUFFLE9BQU8sR0FBRyxLQUFLLFFBQVEsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLFlBQVksRUFBRSxFQUFFLFFBQVEsQ0FBQyxJQUFJLFFBQVEsTUFBTSxJQUFJLEtBQUssS0FBSyxFQUFFLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsTUFBTSxJQUFJLE1BQU0sSUFBSSxLQUFLLFFBQVEsV0FBVyxJQUFJLE1BQU0sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxNQUFNLE1BQU0sS0FBSyxHQUFHLEtBQUssS0FBSyxNQUFNLEtBQUssZUFBZSxRQUFRLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxZQUFZLEtBQUssT0FBTyxLQUFLLFFBQVEsS0FBSyxLQUFLLE9BQU8sS0FBSyxRQUFRLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxLQUFLLE1BQU0sS0FBSyxRQUFRLE1BQU0sS0FBSyxRQUFRLEtBQUssS0FBSyxJQUFJLEtBQUssUUFBUSxLQUFLLElBQUksS0FBSyxNQUFNLEtBQUssTUFBTSxRQUFRLElBQUksT0FBTyxLQUFLLE9BQU8sS0FBSyxTQUFTLFNBQVMsS0FBSyxlQUFlLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsTUFBTSxLQUFLLFVBQVUsS0FBSyxJQUFJLEtBQUssVUFBVSxVQUFVLEtBQUssVUFBVSxTQUFTLEtBQUssZUFBZSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLE1BQU0sS0FBSyxXQUFXLEtBQUssSUFBSSxLQUFLLFlBQVksS0FBSyxRQUFRLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLFFBQVEsaUJBQWlCLEVBQUUsS0FBSyxRQUFRLGVBQWUsSUFBSSxHQUFHLE9BQU8sS0FBSyxTQUFTLE9BQU8sU0FBUyxLQUFLLEVBQUUsS0FBSyxRQUFRLE1BQU0sS0FBSyxHQUFHLE9BQU8sS0FBSyxTQUFTLE9BQU8sT0FBTyxTQUFTLElBQUksS0FBSyxLQUFLLEtBQUssYUFBYSxJQUFJLGFBQWEsR0FBRyxTQUFTLE9BQU8sR0FBRyxPQUFPLGlCQUFpQixHQUFHLFVBQVUsa0JBQWtCLEtBQUssU0FBUyxpQkFBaUIsY0FBYyxLQUFLLFFBQVEsUUFBUSxRQUFRLEtBQUssVUFBVSxhQUFhLEtBQUssS0FBSyxRQUFRLFFBQVEsTUFBTSxTQUFTLEtBQUssUUFBUSxRQUFRLFVBQVUsTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxZQUFZLEtBQUssZUFBZSxLQUFLLFFBQVEsV0FBVyxLQUFLLEtBQUssZUFBZSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLE1BQU0sT0FBTyxTQUFTLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxHQUFHLEtBQUssVUFBVSxLQUFLLElBQUksS0FBSyxTQUFTLFNBQVMsTUFBTSxLQUFLLFdBQVcsS0FBSyxJQUFJLEtBQUssVUFBVSxTQUFTLFVBQVUsS0FBSyxVQUFVLFNBQVMsS0FBSyxlQUFlLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsTUFBTSxLQUFLLFdBQVcsS0FBSyxJQUFJLEtBQUssV0FBVyxLQUFLLFNBQVMsU0FBUyxLQUFLLGVBQWUsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxNQUFNLEtBQUssVUFBVSxLQUFLLElBQUksS0FBSyxZQUFZLEtBQUssVUFBVSxTQUFTLFNBQVMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsS0FBSyxPQUFPLEtBQUssUUFBUSxLQUFLLEtBQUssT0FBTyxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksUUFBUSxLQUFLLGVBQWUsU0FBUyxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsS0FBSyxHQUFHLEtBQUssTUFBTSxLQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxJQUFJLFNBQVMsS0FBSyxRQUFRLE1BQU0sS0FBSyxRQUFRLEtBQUssS0FBSyxJQUFJLEtBQUssUUFBUSxLQUFLLElBQUksS0FBSyxNQUFNLEtBQUssTUFBTSxRQUFRLElBQUksS0FBSyxVQUFVLFNBQVMsU0FBUyxHQUFHLE9BQU8sS0FBSyxTQUFTLE9BQU8sY0FBYyxLQUFLLElBQUksS0FBSyxXQUFXLEtBQUssU0FBUyxTQUFTLFNBQVMs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ZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiBBbmd1bGFySlMgdjEuNC4zXG4gKGMpIDIwMTAtMjAxNSBHb29nbGUsIEluYy4gaHR0cDovL2FuZ3VsYXJqcy5vcmdcbiBMaWNlbnNlOiBNSVRcbiovXG4oZnVuY3Rpb24oRix0LFcpeyd1c2Ugc3RyaWN0JztmdW5jdGlvbiB1YShhLGIsYyl7aWYoIWEpdGhyb3cgbmdNaW5FcnIoXCJhcmVxXCIsYnx8XCI/XCIsY3x8XCJyZXF1aXJlZFwiKTtyZXR1cm4gYX1mdW5jdGlvbiB2YShhLGIpe2lmKCFhJiYhYilyZXR1cm5cIlwiO2lmKCFhKXJldHVybiBiO2lmKCFiKXJldHVybiBhO1goYSkmJihhPWEuam9pbihcIiBcIikpO1goYikmJihiPWIuam9pbihcIiBcIikpO3JldHVybiBhK1wiIFwiK2J9ZnVuY3Rpb24gRWEoYSl7dmFyIGI9e307YSYmKGEudG98fGEuZnJvbSkmJihiLnRvPWEudG8sYi5mcm9tPWEuZnJvbSk7cmV0dXJuIGJ9ZnVuY3Rpb24gYmEoYSxiLGMpe3ZhciBkPVwiXCI7YT1YKGEpP2E6YSYmVShhKSYmYS5sZW5ndGg/YS5zcGxpdCgvXFxzKy8pOltdO3UoYSxmdW5jdGlvbihhLHMpe2EmJjA8YS5sZW5ndGgmJihkKz0wPHM/XCIgXCI6XCJcIixkKz1jP2IrYTphK2IpfSk7cmV0dXJuIGR9ZnVuY3Rpb24gRmEoYSl7aWYoYSBpbnN0YW5jZW9mIEcpc3dpdGNoKGEubGVuZ3RoKXtjYXNlIDA6cmV0dXJuW107XG5jYXNlIDE6aWYoMT09PWFbMF0ubm9kZVR5cGUpcmV0dXJuIGE7YnJlYWs7ZGVmYXVsdDpyZXR1cm4gRyhrYShhKSl9aWYoMT09PWEubm9kZVR5cGUpcmV0dXJuIEcoYSl9ZnVuY3Rpb24ga2EoYSl7aWYoIWFbMF0pcmV0dXJuIGE7Zm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBjPWFbYl07aWYoMT09Yy5ub2RlVHlwZSlyZXR1cm4gY319ZnVuY3Rpb24gR2EoYSxiLGMpe3UoYixmdW5jdGlvbihiKXthLmFkZENsYXNzKGIsYyl9KX1mdW5jdGlvbiBIYShhLGIsYyl7dShiLGZ1bmN0aW9uKGIpe2EucmVtb3ZlQ2xhc3MoYixjKX0pfWZ1bmN0aW9uIGhhKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe2MuYWRkQ2xhc3MmJihHYShhLGIsYy5hZGRDbGFzcyksYy5hZGRDbGFzcz1udWxsKTtjLnJlbW92ZUNsYXNzJiYoSGEoYSxiLGMucmVtb3ZlQ2xhc3MpLGMucmVtb3ZlQ2xhc3M9bnVsbCl9fWZ1bmN0aW9uIGlhKGEpe2E9YXx8e307aWYoIWEuJCRwcmVwYXJlZCl7dmFyIGI9YS5kb21PcGVyYXRpb258fFxuSDthLmRvbU9wZXJhdGlvbj1mdW5jdGlvbigpe2EuJCRkb21PcGVyYXRpb25GaXJlZD0hMDtiKCk7Yj1IfTthLiQkcHJlcGFyZWQ9ITB9cmV0dXJuIGF9ZnVuY3Rpb24gY2EoYSxiKXt3YShhLGIpO3hhKGEsYil9ZnVuY3Rpb24gd2EoYSxiKXtiLmZyb20mJihhLmNzcyhiLmZyb20pLGIuZnJvbT1udWxsKX1mdW5jdGlvbiB4YShhLGIpe2IudG8mJihhLmNzcyhiLnRvKSxiLnRvPW51bGwpfWZ1bmN0aW9uIFIoYSxiLGMpe3ZhciBkPShiLmFkZENsYXNzfHxcIlwiKStcIiBcIisoYy5hZGRDbGFzc3x8XCJcIiksZT0oYi5yZW1vdmVDbGFzc3x8XCJcIikrXCIgXCIrKGMucmVtb3ZlQ2xhc3N8fFwiXCIpO2E9SWEoYS5hdHRyKFwiY2xhc3NcIiksZCxlKTt5YShiLGMpO2IuYWRkQ2xhc3M9YS5hZGRDbGFzcz9hLmFkZENsYXNzOm51bGw7Yi5yZW1vdmVDbGFzcz1hLnJlbW92ZUNsYXNzP2EucmVtb3ZlQ2xhc3M6bnVsbDtyZXR1cm4gYn1mdW5jdGlvbiBJYShhLGIsYyl7ZnVuY3Rpb24gZChhKXtVKGEpJiYoYT1hLnNwbGl0KFwiIFwiKSk7XG52YXIgYj17fTt1KGEsZnVuY3Rpb24oYSl7YS5sZW5ndGgmJihiW2FdPSEwKX0pO3JldHVybiBifXZhciBlPXt9O2E9ZChhKTtiPWQoYik7dShiLGZ1bmN0aW9uKGEsYil7ZVtiXT0xfSk7Yz1kKGMpO3UoYyxmdW5jdGlvbihhLGIpe2VbYl09MT09PWVbYl0/bnVsbDotMX0pO3ZhciBzPXthZGRDbGFzczpcIlwiLHJlbW92ZUNsYXNzOlwiXCJ9O3UoZSxmdW5jdGlvbihiLGMpe3ZhciBkLGU7MT09PWI/KGQ9XCJhZGRDbGFzc1wiLGU9IWFbY10pOi0xPT09YiYmKGQ9XCJyZW1vdmVDbGFzc1wiLGU9YVtjXSk7ZSYmKHNbZF0ubGVuZ3RoJiYoc1tkXSs9XCIgXCIpLHNbZF0rPWMpfSk7cmV0dXJuIHN9ZnVuY3Rpb24geihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIHQuZWxlbWVudD9hWzBdOmF9ZnVuY3Rpb24gemEoYSxiLGMpe3ZhciBkPU9iamVjdC5jcmVhdGUobnVsbCksZT1hLmdldENvbXB1dGVkU3R5bGUoYil8fHt9O3UoYyxmdW5jdGlvbihhLGIpe3ZhciBjPWVbYV07aWYoYyl7dmFyIGs9Yy5jaGFyQXQoMCk7XG5pZihcIi1cIj09PWt8fFwiK1wiPT09a3x8MDw9ayljPUphKGMpOzA9PT1jJiYoYz1udWxsKTtkW2JdPWN9fSk7cmV0dXJuIGR9ZnVuY3Rpb24gSmEoYSl7dmFyIGI9MDthPWEuc3BsaXQoL1xccyosXFxzKi8pO3UoYSxmdW5jdGlvbihhKXtcInNcIj09YS5jaGFyQXQoYS5sZW5ndGgtMSkmJihhPWEuc3Vic3RyaW5nKDAsYS5sZW5ndGgtMSkpO2E9cGFyc2VGbG9hdChhKXx8MDtiPWI/TWF0aC5tYXgoYSxiKTphfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gbGEoYSl7cmV0dXJuIDA9PT1hfHxudWxsIT1hfWZ1bmN0aW9uIEFhKGEsYil7dmFyIGM9TyxkPWErXCJzXCI7Yj9jKz1cIkR1cmF0aW9uXCI6ZCs9XCIgbGluZWFyIGFsbFwiO3JldHVybltjLGRdfWZ1bmN0aW9uIGphKGEsYil7dmFyIGM9Yj9cIi1cIitiK1wic1wiOlwiXCI7ZGEoYSxbZWEsY10pO3JldHVybltlYSxjXX1mdW5jdGlvbiBtYShhLGIpe3ZhciBjPWI/XCJwYXVzZWRcIjpcIlwiLGQ9VitcIlBsYXlTdGF0ZVwiO2RhKGEsW2QsY10pO3JldHVybltkLGNdfWZ1bmN0aW9uIGRhKGEsXG5iKXthLnN0eWxlW2JbMF1dPWJbMV19ZnVuY3Rpb24gQmEoKXt2YXIgYT1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybntmbHVzaDpmdW5jdGlvbigpe2E9T2JqZWN0LmNyZWF0ZShudWxsKX0sY291bnQ6ZnVuY3Rpb24oYil7cmV0dXJuKGI9YVtiXSk/Yi50b3RhbDowfSxnZXQ6ZnVuY3Rpb24oYil7cmV0dXJuKGI9YVtiXSkmJmIudmFsdWV9LHB1dDpmdW5jdGlvbihiLGMpe2FbYl0/YVtiXS50b3RhbCsrOmFbYl09e3RvdGFsOjEsdmFsdWU6Y319fX12YXIgSD10Lm5vb3AseWE9dC5leHRlbmQsRz10LmVsZW1lbnQsdT10LmZvckVhY2gsWD10LmlzQXJyYXksVT10LmlzU3RyaW5nLG5hPXQuaXNPYmplY3QsS2E9dC5pc1VuZGVmaW5lZCxMYT10LmlzRGVmaW5lZCxDYT10LmlzRnVuY3Rpb24sb2E9dC5pc0VsZW1lbnQsTyxwYSxWLHFhO0Yub250cmFuc2l0aW9uZW5kPT09VyYmRi5vbndlYmtpdHRyYW5zaXRpb25lbmQhPT1XPyhPPVwiV2Via2l0VHJhbnNpdGlvblwiLHBhPVwid2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kXCIpOlxuKE89XCJ0cmFuc2l0aW9uXCIscGE9XCJ0cmFuc2l0aW9uZW5kXCIpO0Yub25hbmltYXRpb25lbmQ9PT1XJiZGLm9ud2Via2l0YW5pbWF0aW9uZW5kIT09Vz8oVj1cIldlYmtpdEFuaW1hdGlvblwiLHFhPVwid2Via2l0QW5pbWF0aW9uRW5kIGFuaW1hdGlvbmVuZFwiKTooVj1cImFuaW1hdGlvblwiLHFhPVwiYW5pbWF0aW9uZW5kXCIpO3ZhciByYT1WK1wiRGVsYXlcIixzYT1WK1wiRHVyYXRpb25cIixlYT1PK1wiRGVsYXlcIjtGPU8rXCJEdXJhdGlvblwiO3ZhciBNYT17dHJhbnNpdGlvbkR1cmF0aW9uOkYsdHJhbnNpdGlvbkRlbGF5OmVhLHRyYW5zaXRpb25Qcm9wZXJ0eTpPK1wiUHJvcGVydHlcIixhbmltYXRpb25EdXJhdGlvbjpzYSxhbmltYXRpb25EZWxheTpyYSxhbmltYXRpb25JdGVyYXRpb25Db3VudDpWK1wiSXRlcmF0aW9uQ291bnRcIn0sTmE9e3RyYW5zaXRpb25EdXJhdGlvbjpGLHRyYW5zaXRpb25EZWxheTplYSxhbmltYXRpb25EdXJhdGlvbjpzYSxhbmltYXRpb25EZWxheTpyYX07dC5tb2R1bGUoXCJuZ0FuaW1hdGVcIixcbltdKS5kaXJlY3RpdmUoXCJuZ0FuaW1hdGVDaGlsZHJlblwiLFtmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihhLGIsYyl7YT1jLm5nQW5pbWF0ZUNoaWxkcmVuO3QuaXNTdHJpbmcoYSkmJjA9PT1hLmxlbmd0aD9iLmRhdGEoXCIkJG5nQW5pbWF0ZUNoaWxkcmVuXCIsITApOmMuJG9ic2VydmUoXCJuZ0FuaW1hdGVDaGlsZHJlblwiLGZ1bmN0aW9uKGEpe2IuZGF0YShcIiQkbmdBbmltYXRlQ2hpbGRyZW5cIixcIm9uXCI9PT1hfHxcInRydWVcIj09PWEpfSl9fV0pLmZhY3RvcnkoXCIkJHJBRk11dGV4XCIsW1wiJCRyQUZcIixmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYj0hMTthKGZ1bmN0aW9uKCl7Yj0hMH0pO3JldHVybiBmdW5jdGlvbihjKXtiP2MoKTphKGMpfX19XSkuZmFjdG9yeShcIiQkckFGU2NoZWR1bGVyXCIsW1wiJCRyQUZcIixmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe2QucHVzaChbXS5jb25jYXQoYSkpO2MoKX1mdW5jdGlvbiBjKCl7aWYoZC5sZW5ndGgpe2Zvcih2YXIgYj1bXSxuPVxuMDtuPGQubGVuZ3RoO24rKyl7dmFyIGg9ZFtuXTtoLnNoaWZ0KCkoKTtoLmxlbmd0aCYmYi5wdXNoKGgpfWQ9YjtlfHxhKGZ1bmN0aW9uKCl7ZXx8YygpfSl9fXZhciBkPVtdLGU7Yi53YWl0VW50aWxRdWlldD1mdW5jdGlvbihiKXtlJiZlKCk7ZT1hKGZ1bmN0aW9uKCl7ZT1udWxsO2IoKTtjKCl9KX07cmV0dXJuIGJ9XSkuZmFjdG9yeShcIiQkQW5pbWF0ZVJ1bm5lclwiLFtcIiRxXCIsXCIkJHJBRk11dGV4XCIsZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEpe3RoaXMuc2V0SG9zdChhKTt0aGlzLl9kb25lQ2FsbGJhY2tzPVtdO3RoaXMuX3J1bkluQW5pbWF0aW9uRnJhbWU9YigpO3RoaXMuX3N0YXRlPTB9Yy5jaGFpbj1mdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoKXtpZihuPT09YS5sZW5ndGgpYighMCk7ZWxzZSBhW25dKGZ1bmN0aW9uKGEpeyExPT09YT9iKCExKToobisrLGMoKSl9KX12YXIgbj0wO2MoKX07Yy5hbGw9ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKHMpe2g9aCYmczsrK249PT1cbmEubGVuZ3RoJiZiKGgpfXZhciBuPTAsaD0hMDt1KGEsZnVuY3Rpb24oYSl7YS5kb25lKGMpfSl9O2MucHJvdG90eXBlPXtzZXRIb3N0OmZ1bmN0aW9uKGEpe3RoaXMuaG9zdD1hfHx7fX0sZG9uZTpmdW5jdGlvbihhKXsyPT09dGhpcy5fc3RhdGU/YSgpOnRoaXMuX2RvbmVDYWxsYmFja3MucHVzaChhKX0scHJvZ3Jlc3M6SCxnZXRQcm9taXNlOmZ1bmN0aW9uKCl7aWYoIXRoaXMucHJvbWlzZSl7dmFyIGI9dGhpczt0aGlzLnByb21pc2U9YShmdW5jdGlvbihhLGMpe2IuZG9uZShmdW5jdGlvbihiKXshMT09PWI/YygpOmEoKX0pfSl9cmV0dXJuIHRoaXMucHJvbWlzZX0sdGhlbjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmdldFByb21pc2UoKS50aGVuKGEsYil9LFwiY2F0Y2hcIjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5nZXRQcm9taXNlKClbXCJjYXRjaFwiXShhKX0sXCJmaW5hbGx5XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZ2V0UHJvbWlzZSgpW1wiZmluYWxseVwiXShhKX0scGF1c2U6ZnVuY3Rpb24oKXt0aGlzLmhvc3QucGF1c2UmJlxudGhpcy5ob3N0LnBhdXNlKCl9LHJlc3VtZTpmdW5jdGlvbigpe3RoaXMuaG9zdC5yZXN1bWUmJnRoaXMuaG9zdC5yZXN1bWUoKX0sZW5kOmZ1bmN0aW9uKCl7dGhpcy5ob3N0LmVuZCYmdGhpcy5ob3N0LmVuZCgpO3RoaXMuX3Jlc29sdmUoITApfSxjYW5jZWw6ZnVuY3Rpb24oKXt0aGlzLmhvc3QuY2FuY2VsJiZ0aGlzLmhvc3QuY2FuY2VsKCk7dGhpcy5fcmVzb2x2ZSghMSl9LGNvbXBsZXRlOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7MD09PWIuX3N0YXRlJiYoYi5fc3RhdGU9MSxiLl9ydW5JbkFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7Yi5fcmVzb2x2ZShhKX0pKX0sX3Jlc29sdmU6ZnVuY3Rpb24oYSl7MiE9PXRoaXMuX3N0YXRlJiYodSh0aGlzLl9kb25lQ2FsbGJhY2tzLGZ1bmN0aW9uKGIpe2IoYSl9KSx0aGlzLl9kb25lQ2FsbGJhY2tzLmxlbmd0aD0wLHRoaXMuX3N0YXRlPTIpfX07cmV0dXJuIGN9XSkucHJvdmlkZXIoXCIkJGFuaW1hdGVRdWV1ZVwiLFtcIiRhbmltYXRlUHJvdmlkZXJcIixcbmZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSxiLGMsaCl7cmV0dXJuIGRbYV0uc29tZShmdW5jdGlvbihhKXtyZXR1cm4gYShiLGMsaCl9KX1mdW5jdGlvbiBjKGEsYil7YT1hfHx7fTt2YXIgYz0wPChhLmFkZENsYXNzfHxcIlwiKS5sZW5ndGgsZD0wPChhLnJlbW92ZUNsYXNzfHxcIlwiKS5sZW5ndGg7cmV0dXJuIGI/YyYmZDpjfHxkfXZhciBkPXRoaXMucnVsZXM9e3NraXA6W10sY2FuY2VsOltdLGpvaW46W119O2Quam9pbi5wdXNoKGZ1bmN0aW9uKGEsYixkKXtyZXR1cm4hYi5zdHJ1Y3R1cmFsJiZjKGIub3B0aW9ucyl9KTtkLnNraXAucHVzaChmdW5jdGlvbihhLGIsZCl7cmV0dXJuIWIuc3RydWN0dXJhbCYmIWMoYi5vcHRpb25zKX0pO2Quc2tpcC5wdXNoKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5cImxlYXZlXCI9PWMuZXZlbnQmJmIuc3RydWN0dXJhbH0pO2Quc2tpcC5wdXNoKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYy5zdHJ1Y3R1cmFsJiYhYi5zdHJ1Y3R1cmFsfSk7ZC5jYW5jZWwucHVzaChmdW5jdGlvbihhLFxuYixjKXtyZXR1cm4gYy5zdHJ1Y3R1cmFsJiZiLnN0cnVjdHVyYWx9KTtkLmNhbmNlbC5wdXNoKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gMj09PWMuc3RhdGUmJmIuc3RydWN0dXJhbH0pO2QuY2FuY2VsLnB1c2goZnVuY3Rpb24oYSxiLGMpe2E9Yi5vcHRpb25zO2M9Yy5vcHRpb25zO3JldHVybiBhLmFkZENsYXNzJiZhLmFkZENsYXNzPT09Yy5yZW1vdmVDbGFzc3x8YS5yZW1vdmVDbGFzcyYmYS5yZW1vdmVDbGFzcz09PWMuYWRkQ2xhc3N9KTt0aGlzLiRnZXQ9W1wiJCRyQUZcIixcIiRyb290U2NvcGVcIixcIiRyb290RWxlbWVudFwiLFwiJGRvY3VtZW50XCIsXCIkJEhhc2hNYXBcIixcIiQkYW5pbWF0aW9uXCIsXCIkJEFuaW1hdGVSdW5uZXJcIixcIiR0ZW1wbGF0ZVJlcXVlc3RcIixcIiQkanFMaXRlXCIsZnVuY3Rpb24oZCxzLG4saCxrLEQsQSxaLEkpe2Z1bmN0aW9uIHcoYSxiKXt2YXIgYz16KGEpLGY9W10sbT1sW2JdO20mJnUobSxmdW5jdGlvbihhKXthLm5vZGUuY29udGFpbnMoYykmJmYucHVzaChhLmNhbGxiYWNrKX0pO1xucmV0dXJuIGZ9ZnVuY3Rpb24gQihhLGIsYyxmKXtkKGZ1bmN0aW9uKCl7dSh3KGIsYSksZnVuY3Rpb24oYSl7YShiLGMsZil9KX0pfWZ1bmN0aW9uIHIoYSxTLHApe2Z1bmN0aW9uIGQoYixjLGYscCl7QihjLGEsZixwKTtiLnByb2dyZXNzKGMsZixwKX1mdW5jdGlvbiBnKGIpe0RhKGEscCk7Y2EoYSxwKTtwLmRvbU9wZXJhdGlvbigpO2wuY29tcGxldGUoIWIpfXZhciBQLEU7aWYoYT1GYShhKSlQPXooYSksRT1hLnBhcmVudCgpO3A9aWEocCk7dmFyIGw9bmV3IEE7aWYoIVApcmV0dXJuIGcoKSxsO1gocC5hZGRDbGFzcykmJihwLmFkZENsYXNzPXAuYWRkQ2xhc3Muam9pbihcIiBcIikpO1gocC5yZW1vdmVDbGFzcykmJihwLnJlbW92ZUNsYXNzPXAucmVtb3ZlQ2xhc3Muam9pbihcIiBcIikpO3AuZnJvbSYmIW5hKHAuZnJvbSkmJihwLmZyb209bnVsbCk7cC50byYmIW5hKHAudG8pJiYocC50bz1udWxsKTt2YXIgZT1bUC5jbGFzc05hbWUscC5hZGRDbGFzcyxwLnJlbW92ZUNsYXNzXS5qb2luKFwiIFwiKTtcbmlmKCF2KGUpKXJldHVybiBnKCksbDt2YXIgTT0wPD1bXCJlbnRlclwiLFwibW92ZVwiLFwibGVhdmVcIl0uaW5kZXhPZihTKSxoPSF4fHxMLmdldChQKSxlPSFoJiZtLmdldChQKXx8e30saz0hIWUuc3RhdGU7aHx8ayYmMT09ZS5zdGF0ZXx8KGg9IXRhKGEsRSxTKSk7aWYoaClyZXR1cm4gZygpLGw7TSYmSyhhKTtoPXtzdHJ1Y3R1cmFsOk0sZWxlbWVudDphLGV2ZW50OlMsY2xvc2U6ZyxvcHRpb25zOnAscnVubmVyOmx9O2lmKGspe2lmKGIoXCJza2lwXCIsYSxoLGUpKXtpZigyPT09ZS5zdGF0ZSlyZXR1cm4gZygpLGw7UihhLGUub3B0aW9ucyxwKTtyZXR1cm4gZS5ydW5uZXJ9aWYoYihcImNhbmNlbFwiLGEsaCxlKSkyPT09ZS5zdGF0ZT9lLnJ1bm5lci5lbmQoKTplLnN0cnVjdHVyYWw/ZS5jbG9zZSgpOlIoYSxoLm9wdGlvbnMsZS5vcHRpb25zKTtlbHNlIGlmKGIoXCJqb2luXCIsYSxoLGUpKWlmKDI9PT1lLnN0YXRlKVIoYSxwLHt9KTtlbHNlIHJldHVybiBTPWguZXZlbnQ9ZS5ldmVudCxwPVIoYSxcbmUub3B0aW9ucyxoLm9wdGlvbnMpLGx9ZWxzZSBSKGEscCx7fSk7KGs9aC5zdHJ1Y3R1cmFsKXx8KGs9XCJhbmltYXRlXCI9PT1oLmV2ZW50JiYwPE9iamVjdC5rZXlzKGgub3B0aW9ucy50b3x8e30pLmxlbmd0aHx8YyhoLm9wdGlvbnMpKTtpZighaylyZXR1cm4gZygpLEMoYSksbDtNJiZmKEUpO3ZhciByPShlLmNvdW50ZXJ8fDApKzE7aC5jb3VudGVyPXI7Z2EoYSwxLGgpO3MuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7dmFyIGI9bS5nZXQoUCksdj0hYixiPWJ8fHt9LGU9YS5wYXJlbnQoKXx8W10sRT0wPGUubGVuZ3RoJiYoXCJhbmltYXRlXCI9PT1iLmV2ZW50fHxiLnN0cnVjdHVyYWx8fGMoYi5vcHRpb25zKSk7aWYodnx8Yi5jb3VudGVyIT09cnx8IUUpe3YmJihEYShhLHApLGNhKGEscCkpO2lmKHZ8fE0mJmIuZXZlbnQhPT1TKXAuZG9tT3BlcmF0aW9uKCksbC5lbmQoKTtFfHxDKGEpfWVsc2UgUz0hYi5zdHJ1Y3R1cmFsJiZjKGIub3B0aW9ucywhMCk/XCJzZXRDbGFzc1wiOmIuZXZlbnQsXG5iLnN0cnVjdHVyYWwmJmYoZSksZ2EoYSwyKSxiPUQoYSxTLGIub3B0aW9ucyksYi5kb25lKGZ1bmN0aW9uKGIpe2coIWIpOyhiPW0uZ2V0KFApKSYmYi5jb3VudGVyPT09ciYmQyh6KGEpKTtkKGwsUyxcImNsb3NlXCIse30pfSksbC5zZXRIb3N0KGIpLGQobCxTLFwic3RhcnRcIix7fSl9KTtyZXR1cm4gbH1mdW5jdGlvbiBLKGEpe2E9eihhKS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbmctYW5pbWF0ZV1cIik7dShhLGZ1bmN0aW9uKGEpe3ZhciBiPXBhcnNlSW50KGEuZ2V0QXR0cmlidXRlKFwiZGF0YS1uZy1hbmltYXRlXCIpKSxjPW0uZ2V0KGEpO3N3aXRjaChiKXtjYXNlIDI6Yy5ydW5uZXIuZW5kKCk7Y2FzZSAxOmMmJm0ucmVtb3ZlKGEpfX0pfWZ1bmN0aW9uIEMoYSl7YT16KGEpO2EucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1uZy1hbmltYXRlXCIpO20ucmVtb3ZlKGEpfWZ1bmN0aW9uIEUoYSxiKXtyZXR1cm4geihhKT09PXooYil9ZnVuY3Rpb24gZihhKXthPXooYSk7ZG97aWYoIWF8fDEhPT1cbmEubm9kZVR5cGUpYnJlYWs7dmFyIGI9bS5nZXQoYSk7aWYoYil7dmFyIGY9YTshYi5zdHJ1Y3R1cmFsJiZjKGIub3B0aW9ucykmJigyPT09Yi5zdGF0ZSYmYi5ydW5uZXIuZW5kKCksQyhmKSl9YT1hLnBhcmVudE5vZGV9d2hpbGUoMSl9ZnVuY3Rpb24gdGEoYSxiLGMpe3ZhciBmPWM9ITEsZD0hMSx2O2ZvcigoYT1hLmRhdGEoXCIkbmdBbmltYXRlUGluXCIpKSYmKGI9YSk7YiYmYi5sZW5ndGg7KXtmfHwoZj1FKGIsbikpO2E9YlswXTtpZigxIT09YS5ub2RlVHlwZSlicmVhazt2YXIgZT1tLmdldChhKXx8e307ZHx8KGQ9ZS5zdHJ1Y3R1cmFsfHxMLmdldChhKSk7aWYoS2Eodil8fCEwPT09dilhPWIuZGF0YShcIiQkbmdBbmltYXRlQ2hpbGRyZW5cIiksTGEoYSkmJih2PWEpO2lmKGQmJiExPT09dilicmVhaztmfHwoZj1FKGIsbiksZnx8KGE9Yi5kYXRhKFwiJG5nQW5pbWF0ZVBpblwiKSkmJihiPWEpKTtjfHwoYz1FKGIsZykpO2I9Yi5wYXJlbnQoKX1yZXR1cm4oIWR8fHYpJiZmJiZjfWZ1bmN0aW9uIGdhKGEsXG5iLGMpe2M9Y3x8e307Yy5zdGF0ZT1iO2E9eihhKTthLnNldEF0dHJpYnV0ZShcImRhdGEtbmctYW5pbWF0ZVwiLGIpO2M9KGI9bS5nZXQoYSkpP3lhKGIsYyk6YzttLnB1dChhLGMpfXZhciBtPW5ldyBrLEw9bmV3IGsseD1udWxsLE09cy4kd2F0Y2goZnVuY3Rpb24oKXtyZXR1cm4gMD09PVoudG90YWxQZW5kaW5nUmVxdWVzdHN9LGZ1bmN0aW9uKGEpe2EmJihNKCkscy4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXtzLiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe251bGw9PT14JiYoeD0hMCl9KX0pKX0pLGc9RyhoWzBdLmJvZHkpLGw9e30sUD1hLmNsYXNzTmFtZUZpbHRlcigpLHY9UD9mdW5jdGlvbihhKXtyZXR1cm4gUC50ZXN0KGEpfTpmdW5jdGlvbigpe3JldHVybiEwfSxEYT1oYShJKTtyZXR1cm57b246ZnVuY3Rpb24oYSxiLGMpe2I9a2EoYik7bFthXT1sW2FdfHxbXTtsW2FdLnB1c2goe25vZGU6YixjYWxsYmFjazpjfSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gZihhLFxuYixjKXt2YXIgZD1rYShiKTtyZXR1cm4gYS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIShhLm5vZGU9PT1kJiYoIWN8fGEuY2FsbGJhY2s9PT1jKSl9KX12YXIgZD1sW2FdO2QmJihsW2FdPTE9PT1hcmd1bWVudHMubGVuZ3RoP251bGw6ZihkLGIsYykpfSxwaW46ZnVuY3Rpb24oYSxiKXt1YShvYShhKSxcImVsZW1lbnRcIixcIm5vdCBhbiBlbGVtZW50XCIpO3VhKG9hKGIpLFwicGFyZW50RWxlbWVudFwiLFwibm90IGFuIGVsZW1lbnRcIik7YS5kYXRhKFwiJG5nQW5pbWF0ZVBpblwiLGIpfSxwdXNoOmZ1bmN0aW9uKGEsYixjLGYpe2M9Y3x8e307Yy5kb21PcGVyYXRpb249ZjtyZXR1cm4gcihhLGIsYyl9LGVuYWJsZWQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz1hcmd1bWVudHMubGVuZ3RoO2lmKDA9PT1jKWI9ISF4O2Vsc2UgaWYob2EoYSkpe3ZhciBmPXooYSksZD1MLmdldChmKTsxPT09Yz9iPSFkOihiPSEhYik/ZCYmTC5yZW1vdmUoZik6TC5wdXQoZiwhMCl9ZWxzZSBiPXg9ISFhO3JldHVybiBifX19XX1dKS5wcm92aWRlcihcIiQkYW5pbWF0aW9uXCIsXG5bXCIkYW5pbWF0ZVByb3ZpZGVyXCIsZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhKXtyZXR1cm4gYS5kYXRhKFwiJCRhbmltYXRpb25SdW5uZXJcIil9dmFyIGM9dGhpcy5kcml2ZXJzPVtdO3RoaXMuJGdldD1bXCIkJGpxTGl0ZVwiLFwiJHJvb3RTY29wZVwiLFwiJGluamVjdG9yXCIsXCIkJEFuaW1hdGVSdW5uZXJcIixcIiQkckFGU2NoZWR1bGVyXCIsZnVuY3Rpb24oYSxlLHMsbixoKXt2YXIgaz1bXSxEPWhhKGEpLEE9MCxaPTAsST1bXTtyZXR1cm4gZnVuY3Rpb24odyxCLHIpe2Z1bmN0aW9uIEsoYSl7YT1hLmhhc0F0dHJpYnV0ZShcIm5nLWFuaW1hdGUtcmVmXCIpP1thXTphLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmctYW5pbWF0ZS1yZWZdXCIpO3ZhciBiPVtdO3UoYSxmdW5jdGlvbihhKXt2YXIgYz1hLmdldEF0dHJpYnV0ZShcIm5nLWFuaW1hdGUtcmVmXCIpO2MmJmMubGVuZ3RoJiZiLnB1c2goYSl9KTtyZXR1cm4gYn1mdW5jdGlvbiBDKGEpe3ZhciBiPVtdLGM9e307dShhLGZ1bmN0aW9uKGEsZil7dmFyIGQ9eihhLmVsZW1lbnQpLFxubT0wPD1bXCJlbnRlclwiLFwibW92ZVwiXS5pbmRleE9mKGEuZXZlbnQpLGQ9YS5zdHJ1Y3R1cmFsP0soZCk6W107aWYoZC5sZW5ndGgpe3ZhciBnPW0/XCJ0b1wiOlwiZnJvbVwiO3UoZCxmdW5jdGlvbihhKXt2YXIgYj1hLmdldEF0dHJpYnV0ZShcIm5nLWFuaW1hdGUtcmVmXCIpO2NbYl09Y1tiXXx8e307Y1tiXVtnXT17YW5pbWF0aW9uSUQ6ZixlbGVtZW50OkcoYSl9fSl9ZWxzZSBiLnB1c2goYSl9KTt2YXIgZj17fSxkPXt9O3UoYyxmdW5jdGlvbihjLG0pe3ZhciBnPWMuZnJvbSxlPWMudG87aWYoZyYmZSl7dmFyIGw9YVtnLmFuaW1hdGlvbklEXSxoPWFbZS5hbmltYXRpb25JRF0seD1nLmFuaW1hdGlvbklELnRvU3RyaW5nKCk7aWYoIWRbeF0pe3ZhciBCPWRbeF09e3N0cnVjdHVyYWw6ITAsYmVmb3JlU3RhcnQ6ZnVuY3Rpb24oKXtsLmJlZm9yZVN0YXJ0KCk7aC5iZWZvcmVTdGFydCgpfSxjbG9zZTpmdW5jdGlvbigpe2wuY2xvc2UoKTtoLmNsb3NlKCl9LGNsYXNzZXM6RShsLmNsYXNzZXMsaC5jbGFzc2VzKSxcbmZyb206bCx0bzpoLGFuY2hvcnM6W119O0IuY2xhc3Nlcy5sZW5ndGg/Yi5wdXNoKEIpOihiLnB1c2gobCksYi5wdXNoKGgpKX1kW3hdLmFuY2hvcnMucHVzaCh7b3V0OmcuZWxlbWVudCxcImluXCI6ZS5lbGVtZW50fSl9ZWxzZSBnPWc/Zy5hbmltYXRpb25JRDplLmFuaW1hdGlvbklELGU9Zy50b1N0cmluZygpLGZbZV18fChmW2VdPSEwLGIucHVzaChhW2ddKSl9KTtyZXR1cm4gYn1mdW5jdGlvbiBFKGEsYil7YT1hLnNwbGl0KFwiIFwiKTtiPWIuc3BsaXQoXCIgXCIpO2Zvcih2YXIgYz1bXSxmPTA7ZjxhLmxlbmd0aDtmKyspe3ZhciBkPWFbZl07aWYoXCJuZy1cIiE9PWQuc3Vic3RyaW5nKDAsMykpZm9yKHZhciBnPTA7ZzxiLmxlbmd0aDtnKyspaWYoZD09PWJbZ10pe2MucHVzaChkKTticmVha319cmV0dXJuIGMuam9pbihcIiBcIil9ZnVuY3Rpb24gZihhKXtmb3IodmFyIGI9Yy5sZW5ndGgtMTswPD1iO2ItLSl7dmFyIGY9Y1tiXTtpZihzLmhhcyhmKSYmKGY9cy5nZXQoZikoYSkpKXJldHVybiBmfX1cbmZ1bmN0aW9uIHRhKGEsYyl7YS5mcm9tJiZhLnRvPyhiKGEuZnJvbS5lbGVtZW50KS5zZXRIb3N0KGMpLGIoYS50by5lbGVtZW50KS5zZXRIb3N0KGMpKTpiKGEuZWxlbWVudCkuc2V0SG9zdChjKX1mdW5jdGlvbiBnYSgpe3ZhciBhPWIodyk7IWF8fFwibGVhdmVcIj09PUImJnIuJCRkb21PcGVyYXRpb25GaXJlZHx8YS5lbmQoKX1mdW5jdGlvbiBtKGIpe3cub2ZmKFwiJGRlc3Ryb3lcIixnYSk7dy5yZW1vdmVEYXRhKFwiJCRhbmltYXRpb25SdW5uZXJcIik7RCh3LHIpO2NhKHcscik7ci5kb21PcGVyYXRpb24oKTtnJiZhLnJlbW92ZUNsYXNzKHcsZyk7dy5yZW1vdmVDbGFzcyhcIm5nLWFuaW1hdGVcIik7eC5jb21wbGV0ZSghYil9cj1pYShyKTt2YXIgTD0wPD1bXCJlbnRlclwiLFwibW92ZVwiLFwibGVhdmVcIl0uaW5kZXhPZihCKSx4PW5ldyBuKHtlbmQ6ZnVuY3Rpb24oKXttKCl9LGNhbmNlbDpmdW5jdGlvbigpe20oITApfX0pO2lmKCFjLmxlbmd0aClyZXR1cm4gbSgpLHg7dy5kYXRhKFwiJCRhbmltYXRpb25SdW5uZXJcIixcbngpO3ZhciBNPXZhKHcuYXR0cihcImNsYXNzXCIpLHZhKHIuYWRkQ2xhc3Msci5yZW1vdmVDbGFzcykpLGc9ci50ZW1wQ2xhc3NlcztnJiYoTSs9XCIgXCIrZyxyLnRlbXBDbGFzc2VzPW51bGwpO3ZhciBsO0x8fChsPUEsQSs9MSk7ay5wdXNoKHtlbGVtZW50OncsY2xhc3NlczpNLGV2ZW50OkIsY2xhc3NCYXNlZEluZGV4Omwsc3RydWN0dXJhbDpMLG9wdGlvbnM6cixiZWZvcmVTdGFydDpmdW5jdGlvbigpe3cuYWRkQ2xhc3MoXCJuZy1hbmltYXRlXCIpO2cmJmEuYWRkQ2xhc3ModyxnKX0sY2xvc2U6bX0pO3cub24oXCIkZGVzdHJveVwiLGdhKTtpZigxPGsubGVuZ3RoKXJldHVybiB4O2UuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7Wj1BO0E9MDtJLmxlbmd0aD0wO3ZhciBhPVtdO3UoayxmdW5jdGlvbihjKXtiKGMuZWxlbWVudCkmJmEucHVzaChjKX0pO2subGVuZ3RoPTA7dShDKGEpLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGMoKXthLmJlZm9yZVN0YXJ0KCk7dmFyIGQsZz1hLmNsb3NlLGU9YS5hbmNob3JzP1xuYS5mcm9tLmVsZW1lbnR8fGEudG8uZWxlbWVudDphLmVsZW1lbnQ7YihlKSYmeihlKS5wYXJlbnROb2RlJiYoZT1mKGEpKSYmKGQ9ZS5zdGFydCk7ZD8oZD1kKCksZC5kb25lKGZ1bmN0aW9uKGEpe2coIWEpfSksdGEoYSxkKSk6ZygpfWEuc3RydWN0dXJhbD9jKCk6KEkucHVzaCh7bm9kZTp6KGEuZWxlbWVudCksZm46Y30pLGEuY2xhc3NCYXNlZEluZGV4PT09Wi0xJiYoST1JLnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi5ub2RlLmNvbnRhaW5zKGEubm9kZSl9KS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuZm59KSxoKEkpKSl9KX0pO3JldHVybiB4fX1dfV0pLnByb3ZpZGVyKFwiJGFuaW1hdGVDc3NcIixbXCIkYW5pbWF0ZVByb3ZpZGVyXCIsZnVuY3Rpb24oYSl7dmFyIGI9QmEoKSxjPUJhKCk7dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixcIiQkanFMaXRlXCIsXCIkJEFuaW1hdGVSdW5uZXJcIixcIiR0aW1lb3V0XCIsXCIkZG9jdW1lbnRcIixcIiRzbmlmZmVyXCIsXCIkJHJBRlNjaGVkdWxlclwiLGZ1bmN0aW9uKGEsXG5lLHMsbixoLGssRCl7ZnVuY3Rpb24gQShhLGIpe3ZhciBjPWEucGFyZW50Tm9kZTtyZXR1cm4oYy4kJG5nQW5pbWF0ZVBhcmVudEtleXx8KGMuJCRuZ0FuaW1hdGVQYXJlbnRLZXk9KytyKSkrXCItXCIrYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKStcIi1cIitifWZ1bmN0aW9uIFooaCxmLEIsayl7dmFyIG07MDxiLmNvdW50KEIpJiYobT1jLmdldChCKSxtfHwoZj1iYShmLFwiLXN0YWdnZXJcIiksZS5hZGRDbGFzcyhoLGYpLG09emEoYSxoLGspLG0uYW5pbWF0aW9uRHVyYXRpb249TWF0aC5tYXgobS5hbmltYXRpb25EdXJhdGlvbiwwKSxtLnRyYW5zaXRpb25EdXJhdGlvbj1NYXRoLm1heChtLnRyYW5zaXRpb25EdXJhdGlvbiwwKSxlLnJlbW92ZUNsYXNzKGgsZiksYy5wdXQoQixtKSkpO3JldHVybiBtfHx7fX1mdW5jdGlvbiBJKGEpe0MucHVzaChhKTtELndhaXRVbnRpbFF1aWV0KGZ1bmN0aW9uKCl7Yi5mbHVzaCgpO2MuZmx1c2goKTtmb3IodmFyIGE9Sy5vZmZzZXRXaWR0aCsxLGQ9MDtkPFxuQy5sZW5ndGg7ZCsrKUNbZF0oYSk7Qy5sZW5ndGg9MH0pfWZ1bmN0aW9uIHcoYyxmLGUpe2Y9Yi5nZXQoZSk7Znx8KGY9emEoYSxjLE1hKSxcImluZmluaXRlXCI9PT1mLmFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50JiYoZi5hbmltYXRpb25JdGVyYXRpb25Db3VudD0xKSk7Yi5wdXQoZSxmKTtjPWY7ZT1jLmFuaW1hdGlvbkRlbGF5O2Y9Yy50cmFuc2l0aW9uRGVsYXk7Yy5tYXhEZWxheT1lJiZmP01hdGgubWF4KGUsZik6ZXx8ZjtjLm1heER1cmF0aW9uPU1hdGgubWF4KGMuYW5pbWF0aW9uRHVyYXRpb24qYy5hbmltYXRpb25JdGVyYXRpb25Db3VudCxjLnRyYW5zaXRpb25EdXJhdGlvbik7cmV0dXJuIGN9dmFyIEI9aGEoZSkscj0wLEs9eihoKS5ib2R5LEM9W107cmV0dXJuIGZ1bmN0aW9uKGEsYyl7ZnVuY3Rpb24gZCgpe20oKX1mdW5jdGlvbiBoKCl7bSghMCl9ZnVuY3Rpb24gbShiKXtpZighKEt8fEMmJkQpKXtLPSEwO0Q9ITE7ZS5yZW1vdmVDbGFzcyhhLFkpO2UucmVtb3ZlQ2xhc3MoYSxcblcpO21hKGcsITEpO2phKGcsITEpO3UobCxmdW5jdGlvbihhKXtnLnN0eWxlW2FbMF1dPVwiXCJ9KTtCKGEsYyk7Y2EoYSxjKTtpZihjLm9uRG9uZSljLm9uRG9uZSgpO3AmJnAuY29tcGxldGUoIWIpfX1mdW5jdGlvbiBMKGEpe3EuYmxvY2tUcmFuc2l0aW9uJiZqYShnLGEpO3EuYmxvY2tLZXlmcmFtZUFuaW1hdGlvbiYmbWEoZywhIWEpfWZ1bmN0aW9uIHgoKXtwPW5ldyBzKHtlbmQ6ZCxjYW5jZWw6aH0pO20oKTtyZXR1cm57JCR3aWxsQW5pbWF0ZTohMSxzdGFydDpmdW5jdGlvbigpe3JldHVybiBwfSxlbmQ6ZH19ZnVuY3Rpb24gTSgpe2Z1bmN0aW9uIGIoKXtpZighSyl7TCghMSk7dShsLGZ1bmN0aW9uKGEpe2cuc3R5bGVbYVswXV09YVsxXX0pO0IoYSxjKTtlLmFkZENsYXNzKGEsVyk7aWYocS5yZWNhbGN1bGF0ZVRpbWluZ1N0eWxlcyl7ZmE9Zy5jbGFzc05hbWUrXCIgXCIrWTskPUEoZyxmYSk7eT13KGcsZmEsJCk7UT15Lm1heERlbGF5O0g9TWF0aC5tYXgoUSwwKTtKPXkubWF4RHVyYXRpb247XG5pZigwPT09Sil7bSgpO3JldHVybn1xLmhhc1RyYW5zaXRpb25zPTA8eS50cmFuc2l0aW9uRHVyYXRpb247cS5oYXNBbmltYXRpb25zPTA8eS5hbmltYXRpb25EdXJhdGlvbn1pZihxLmFwcGx5VHJhbnNpdGlvbkRlbGF5fHxxLmFwcGx5QW5pbWF0aW9uRGVsYXkpe1E9XCJib29sZWFuXCIhPT10eXBlb2YgYy5kZWxheSYmbGEoYy5kZWxheSk/cGFyc2VGbG9hdChjLmRlbGF5KTpRO0g9TWF0aC5tYXgoUSwwKTt2YXIgaztxLmFwcGx5VHJhbnNpdGlvbkRlbGF5JiYoeS50cmFuc2l0aW9uRGVsYXk9USxrPVtlYSxRK1wic1wiXSxsLnB1c2goayksZy5zdHlsZVtrWzBdXT1rWzFdKTtxLmFwcGx5QW5pbWF0aW9uRGVsYXkmJih5LmFuaW1hdGlvbkRlbGF5PVEsaz1bcmEsUStcInNcIl0sbC5wdXNoKGspLGcuc3R5bGVba1swXV09a1sxXSl9Rj0xRTMqSDtHPTFFMypKO2lmKGMuZWFzaW5nKXt2YXIgcj1jLmVhc2luZztxLmhhc1RyYW5zaXRpb25zJiYoaz1PK1wiVGltaW5nRnVuY3Rpb25cIixsLnB1c2goW2ssXG5yXSksZy5zdHlsZVtrXT1yKTtxLmhhc0FuaW1hdGlvbnMmJihrPVYrXCJUaW1pbmdGdW5jdGlvblwiLGwucHVzaChbayxyXSksZy5zdHlsZVtrXT1yKX15LnRyYW5zaXRpb25EdXJhdGlvbiYmcC5wdXNoKHBhKTt5LmFuaW1hdGlvbkR1cmF0aW9uJiZwLnB1c2gocWEpO3g9RGF0ZS5ub3coKTthLm9uKHAuam9pbihcIiBcIiksaCk7bihkLEYrMS41KkcpO3hhKGEsYyl9fWZ1bmN0aW9uIGQoKXttKCl9ZnVuY3Rpb24gaChhKXthLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBiPWEub3JpZ2luYWxFdmVudHx8YTthPWIuJG1hbnVhbFRpbWVTdGFtcHx8Yi50aW1lU3RhbXB8fERhdGUubm93KCk7Yj1wYXJzZUZsb2F0KGIuZWxhcHNlZFRpbWUudG9GaXhlZCgzKSk7TWF0aC5tYXgoYS14LDApPj1GJiZiPj1KJiYoQz0hMCxtKCkpfWlmKCFLKWlmKGcucGFyZW50Tm9kZSl7dmFyIHgscD1bXSxrPWZ1bmN0aW9uKGEpe2lmKEMpRCYmYSYmKEQ9ITEsbSgpKTtlbHNlIGlmKEQ9IWEseS5hbmltYXRpb25EdXJhdGlvbilpZihhPVxubWEoZyxEKSxEKWwucHVzaChhKTtlbHNle3ZhciBiPWwsYz1iLmluZGV4T2YoYSk7MDw9YSYmYi5zcGxpY2UoYywxKX19LHI9MDxVJiYoeS50cmFuc2l0aW9uRHVyYXRpb24mJjA9PT1ULnRyYW5zaXRpb25EdXJhdGlvbnx8eS5hbmltYXRpb25EdXJhdGlvbiYmMD09PVQuYW5pbWF0aW9uRHVyYXRpb24pJiZNYXRoLm1heChULmFuaW1hdGlvbkRlbGF5LFQudHJhbnNpdGlvbkRlbGF5KTtyP24oYixNYXRoLmZsb29yKHIqVSoxRTMpLCExKTpiKCk7dC5yZXN1bWU9ZnVuY3Rpb24oKXtrKCEwKX07dC5wYXVzZT1mdW5jdGlvbigpe2soITEpfX1lbHNlIG0oKX12YXIgZz16KGEpO2lmKCFnfHwhZy5wYXJlbnROb2RlKXJldHVybiB4KCk7Yz1pYShjKTt2YXIgbD1bXSxyPWEuYXR0cihcImNsYXNzXCIpLHY9RWEoYyksSyxELEMscCx0LEgsRixKLEc7aWYoMD09PWMuZHVyYXRpb258fCFrLmFuaW1hdGlvbnMmJiFrLnRyYW5zaXRpb25zKXJldHVybiB4KCk7dmFyIGFhPWMuZXZlbnQmJlgoYy5ldmVudCk/XG5jLmV2ZW50LmpvaW4oXCIgXCIpOmMuZXZlbnQsUj1cIlwiLE49XCJcIjthYSYmYy5zdHJ1Y3R1cmFsP1I9YmEoYWEsXCJuZy1cIiwhMCk6YWEmJihSPWFhKTtjLmFkZENsYXNzJiYoTis9YmEoYy5hZGRDbGFzcyxcIi1hZGRcIikpO2MucmVtb3ZlQ2xhc3MmJihOLmxlbmd0aCYmKE4rPVwiIFwiKSxOKz1iYShjLnJlbW92ZUNsYXNzLFwiLXJlbW92ZVwiKSk7Yy5hcHBseUNsYXNzZXNFYXJseSYmTi5sZW5ndGgmJihCKGEsYyksTj1cIlwiKTt2YXIgWT1bUixOXS5qb2luKFwiIFwiKS50cmltKCksZmE9citcIiBcIitZLFc9YmEoWSxcIi1hY3RpdmVcIikscj12LnRvJiYwPE9iamVjdC5rZXlzKHYudG8pLmxlbmd0aDtpZighKDA8KGMua2V5ZnJhbWVTdHlsZXx8XCJcIikubGVuZ3RofHxyfHxZKSlyZXR1cm4geCgpO3ZhciAkLFQ7MDxjLnN0YWdnZXI/KHY9cGFyc2VGbG9hdChjLnN0YWdnZXIpLFQ9e3RyYW5zaXRpb25EZWxheTp2LGFuaW1hdGlvbkRlbGF5OnYsdHJhbnNpdGlvbkR1cmF0aW9uOjAsYW5pbWF0aW9uRHVyYXRpb246MH0pOlxuKCQ9QShnLGZhKSxUPVooZyxZLCQsTmEpKTtlLmFkZENsYXNzKGEsWSk7Yy50cmFuc2l0aW9uU3R5bGUmJih2PVtPLGMudHJhbnNpdGlvblN0eWxlXSxkYShnLHYpLGwucHVzaCh2KSk7MDw9Yy5kdXJhdGlvbiYmKHY9MDxnLnN0eWxlW09dLmxlbmd0aCx2PUFhKGMuZHVyYXRpb24sdiksZGEoZyx2KSxsLnB1c2godikpO2Mua2V5ZnJhbWVTdHlsZSYmKHY9W1YsYy5rZXlmcmFtZVN0eWxlXSxkYShnLHYpLGwucHVzaCh2KSk7dmFyIFU9VD8wPD1jLnN0YWdnZXJJbmRleD9jLnN0YWdnZXJJbmRleDpiLmNvdW50KCQpOjA7KGFhPTA9PT1VKSYmamEoZyw5OTk5KTt2YXIgeT13KGcsZmEsJCksUT15Lm1heERlbGF5O0g9TWF0aC5tYXgoUSwwKTtKPXkubWF4RHVyYXRpb247dmFyIHE9e307cS5oYXNUcmFuc2l0aW9ucz0wPHkudHJhbnNpdGlvbkR1cmF0aW9uO3EuaGFzQW5pbWF0aW9ucz0wPHkuYW5pbWF0aW9uRHVyYXRpb247cS5oYXNUcmFuc2l0aW9uQWxsPXEuaGFzVHJhbnNpdGlvbnMmJlxuXCJhbGxcIj09eS50cmFuc2l0aW9uUHJvcGVydHk7cS5hcHBseVRyYW5zaXRpb25EdXJhdGlvbj1yJiYocS5oYXNUcmFuc2l0aW9ucyYmIXEuaGFzVHJhbnNpdGlvbkFsbHx8cS5oYXNBbmltYXRpb25zJiYhcS5oYXNUcmFuc2l0aW9ucyk7cS5hcHBseUFuaW1hdGlvbkR1cmF0aW9uPWMuZHVyYXRpb24mJnEuaGFzQW5pbWF0aW9ucztxLmFwcGx5VHJhbnNpdGlvbkRlbGF5PWxhKGMuZGVsYXkpJiYocS5hcHBseVRyYW5zaXRpb25EdXJhdGlvbnx8cS5oYXNUcmFuc2l0aW9ucyk7cS5hcHBseUFuaW1hdGlvbkRlbGF5PWxhKGMuZGVsYXkpJiZxLmhhc0FuaW1hdGlvbnM7cS5yZWNhbGN1bGF0ZVRpbWluZ1N0eWxlcz0wPE4ubGVuZ3RoO2lmKHEuYXBwbHlUcmFuc2l0aW9uRHVyYXRpb258fHEuYXBwbHlBbmltYXRpb25EdXJhdGlvbilKPWMuZHVyYXRpb24/cGFyc2VGbG9hdChjLmR1cmF0aW9uKTpKLHEuYXBwbHlUcmFuc2l0aW9uRHVyYXRpb24mJihxLmhhc1RyYW5zaXRpb25zPSEwLHkudHJhbnNpdGlvbkR1cmF0aW9uPVxuSix2PTA8Zy5zdHlsZVtPK1wiUHJvcGVydHlcIl0ubGVuZ3RoLGwucHVzaChBYShKLHYpKSkscS5hcHBseUFuaW1hdGlvbkR1cmF0aW9uJiYocS5oYXNBbmltYXRpb25zPSEwLHkuYW5pbWF0aW9uRHVyYXRpb249SixsLnB1c2goW3NhLEorXCJzXCJdKSk7aWYoMD09PUomJiFxLnJlY2FsY3VsYXRlVGltaW5nU3R5bGVzKXJldHVybiB4KCk7bnVsbD09Yy5kdXJhdGlvbiYmMDx5LnRyYW5zaXRpb25EdXJhdGlvbiYmKHEucmVjYWxjdWxhdGVUaW1pbmdTdHlsZXM9cS5yZWNhbGN1bGF0ZVRpbWluZ1N0eWxlc3x8YWEpO0Y9MUUzKkg7Rz0xRTMqSjtjLnNraXBCbG9ja2luZ3x8KHEuYmxvY2tUcmFuc2l0aW9uPTA8eS50cmFuc2l0aW9uRHVyYXRpb24scS5ibG9ja0tleWZyYW1lQW5pbWF0aW9uPTA8eS5hbmltYXRpb25EdXJhdGlvbiYmMDxULmFuaW1hdGlvbkRlbGF5JiYwPT09VC5hbmltYXRpb25EdXJhdGlvbik7d2EoYSxjKTtxLmJsb2NrVHJhbnNpdGlvbnx8amEoZywhMSk7TChKKTtyZXR1cm57JCR3aWxsQW5pbWF0ZTohMCxcbmVuZDpkLHN0YXJ0OmZ1bmN0aW9uKCl7aWYoIUspcmV0dXJuIHQ9e2VuZDpkLGNhbmNlbDpoLHJlc3VtZTpudWxsLHBhdXNlOm51bGx9LHA9bmV3IHModCksSShNKSxwfX19fV19XSkucHJvdmlkZXIoXCIkJGFuaW1hdGVDc3NEcml2ZXJcIixbXCIkJGFuaW1hdGlvblByb3ZpZGVyXCIsZnVuY3Rpb24oYSl7YS5kcml2ZXJzLnB1c2goXCIkJGFuaW1hdGVDc3NEcml2ZXJcIik7dGhpcy4kZ2V0PVtcIiRhbmltYXRlQ3NzXCIsXCIkcm9vdFNjb3BlXCIsXCIkJEFuaW1hdGVSdW5uZXJcIixcIiRyb290RWxlbWVudFwiLFwiJGRvY3VtZW50XCIsXCIkc25pZmZlclwiLGZ1bmN0aW9uKGEsYyxkLGUscyxuKXtmdW5jdGlvbiBoKGEpe3JldHVybiBhLnJlcGxhY2UoL1xcYm5nLVxcUytcXGIvZyxcIlwiKX1mdW5jdGlvbiBrKGEsYil7VShhKSYmKGE9YS5zcGxpdChcIiBcIikpO1UoYikmJihiPWIuc3BsaXQoXCIgXCIpKTtyZXR1cm4gYS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuLTE9PT1iLmluZGV4T2YoYSl9KS5qb2luKFwiIFwiKX1mdW5jdGlvbiBEKGMsXG5lLEEpe2Z1bmN0aW9uIEQoYSl7dmFyIGI9e30sYz16KGEpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3UoW1wid2lkdGhcIixcImhlaWdodFwiLFwidG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGEpe3ZhciBkPWNbYV07c3dpdGNoKGEpe2Nhc2UgXCJ0b3BcIjpkKz1JLnNjcm9sbFRvcDticmVhaztjYXNlIFwibGVmdFwiOmQrPUkuc2Nyb2xsTGVmdH1iW2FdPU1hdGguZmxvb3IoZCkrXCJweFwifSk7cmV0dXJuIGJ9ZnVuY3Rpb24gcygpe3ZhciBjPWgoQS5hdHRyKFwiY2xhc3NcIil8fFwiXCIpLGQ9ayhjLHQpLGM9ayh0LGMpLGQ9YShuLHt0bzpEKEEpLGFkZENsYXNzOlwibmctYW5jaG9yLWluIFwiK2QscmVtb3ZlQ2xhc3M6XCJuZy1hbmNob3Itb3V0IFwiK2MsZGVsYXk6ITB9KTtyZXR1cm4gZC4kJHdpbGxBbmltYXRlP2Q6bnVsbH1mdW5jdGlvbiBmKCl7bi5yZW1vdmUoKTtlLnJlbW92ZUNsYXNzKFwibmctYW5pbWF0ZS1zaGltXCIpO0EucmVtb3ZlQ2xhc3MoXCJuZy1hbmltYXRlLXNoaW1cIil9dmFyIG49Ryh6KGUpLmNsb25lTm9kZSghMCkpLFxudD1oKG4uYXR0cihcImNsYXNzXCIpfHxcIlwiKTtlLmFkZENsYXNzKFwibmctYW5pbWF0ZS1zaGltXCIpO0EuYWRkQ2xhc3MoXCJuZy1hbmltYXRlLXNoaW1cIik7bi5hZGRDbGFzcyhcIm5nLWFuY2hvclwiKTt3LmFwcGVuZChuKTt2YXIgbTtjPWZ1bmN0aW9uKCl7dmFyIGM9YShuLHthZGRDbGFzczpcIm5nLWFuY2hvci1vdXRcIixkZWxheTohMCxmcm9tOkQoZSl9KTtyZXR1cm4gYy4kJHdpbGxBbmltYXRlP2M6bnVsbH0oKTtpZighYyYmKG09cygpLCFtKSlyZXR1cm4gZigpO3ZhciBMPWN8fG07cmV0dXJue3N0YXJ0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe2MmJmMuZW5kKCl9dmFyIGIsYz1MLnN0YXJ0KCk7Yy5kb25lKGZ1bmN0aW9uKCl7Yz1udWxsO2lmKCFtJiYobT1zKCkpKXJldHVybiBjPW0uc3RhcnQoKSxjLmRvbmUoZnVuY3Rpb24oKXtjPW51bGw7ZigpO2IuY29tcGxldGUoKX0pLGM7ZigpO2IuY29tcGxldGUoKX0pO3JldHVybiBiPW5ldyBkKHtlbmQ6YSxjYW5jZWw6YX0pfX19ZnVuY3Rpb24gQShhLFxuYixjLGUpe3ZhciBoPXQoYSksZj10KGIpLGs9W107dShlLGZ1bmN0aW9uKGEpeyhhPUQoYyxhLm91dCxhW1wiaW5cIl0pKSYmay5wdXNoKGEpfSk7aWYoaHx8Znx8MCE9PWsubGVuZ3RoKXJldHVybntzdGFydDpmdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXt1KGIsZnVuY3Rpb24oYSl7YS5lbmQoKX0pfXZhciBiPVtdO2gmJmIucHVzaChoLnN0YXJ0KCkpO2YmJmIucHVzaChmLnN0YXJ0KCkpO3UoayxmdW5jdGlvbihhKXtiLnB1c2goYS5zdGFydCgpKX0pO3ZhciBjPW5ldyBkKHtlbmQ6YSxjYW5jZWw6YX0pO2QuYWxsKGIsZnVuY3Rpb24oYSl7Yy5jb21wbGV0ZShhKX0pO3JldHVybiBjfX19ZnVuY3Rpb24gdChjKXt2YXIgZD1jLmVsZW1lbnQsZT1jLm9wdGlvbnN8fHt9O2Muc3RydWN0dXJhbD8oZS5zdHJ1Y3R1cmFsPWUuYXBwbHlDbGFzc2VzRWFybHk9ITAsZS5ldmVudD1jLmV2ZW50LFwibGVhdmVcIj09PWUuZXZlbnQmJihlLm9uRG9uZT1lLmRvbU9wZXJhdGlvbikpOmUuZXZlbnQ9bnVsbDtcbmM9YShkLGUpO3JldHVybiBjLiQkd2lsbEFuaW1hdGU/YzpudWxsfWlmKCFuLmFuaW1hdGlvbnMmJiFuLnRyYW5zaXRpb25zKXJldHVybiBIO3ZhciBJPXoocykuYm9keTtjPXooZSk7dmFyIHc9RyhJLnBhcmVudE5vZGU9PT1jP0k6Yyk7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBhLmZyb20mJmEudG8/QShhLmZyb20sYS50byxhLmNsYXNzZXMsYS5hbmNob3JzKTp0KGEpfX1dfV0pLnByb3ZpZGVyKFwiJCRhbmltYXRlSnNcIixbXCIkYW5pbWF0ZVByb3ZpZGVyXCIsZnVuY3Rpb24oYSl7dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLFwiJCRBbmltYXRlUnVubmVyXCIsXCIkJHJBRk11dGV4XCIsXCIkJGpxTGl0ZVwiLGZ1bmN0aW9uKGIsYyxkLGUpe2Z1bmN0aW9uIHMoYyl7Yz1YKGMpP2M6Yy5zcGxpdChcIiBcIik7Zm9yKHZhciBkPVtdLGU9e30sQT0wO0E8Yy5sZW5ndGg7QSsrKXt2YXIgbj1jW0FdLHM9YS4kJHJlZ2lzdGVyZWRBbmltYXRpb25zW25dO3MmJiFlW25dJiYoZC5wdXNoKGIuZ2V0KHMpKSxlW25dPVxuITApfXJldHVybiBkfXZhciBuPWhhKGUpO3JldHVybiBmdW5jdGlvbihhLGIsZCxlKXtmdW5jdGlvbiB0KCl7ZS5kb21PcGVyYXRpb24oKTtuKGEsZSl9ZnVuY3Rpb24geihhLGIsZCxlLGcpe3N3aXRjaChkKXtjYXNlIFwiYW5pbWF0ZVwiOmI9W2IsZS5mcm9tLGUudG8sZ107YnJlYWs7Y2FzZSBcInNldENsYXNzXCI6Yj1bYixyLEssZ107YnJlYWs7Y2FzZSBcImFkZENsYXNzXCI6Yj1bYixyLGddO2JyZWFrO2Nhc2UgXCJyZW1vdmVDbGFzc1wiOmI9W2IsSyxnXTticmVhaztkZWZhdWx0OmI9W2IsZ119Yi5wdXNoKGUpO2lmKGE9YS5hcHBseShhLGIpKWlmKENhKGEuc3RhcnQpJiYoYT1hLnN0YXJ0KCkpLGEgaW5zdGFuY2VvZiBjKWEuZG9uZShnKTtlbHNlIGlmKENhKGEpKXJldHVybiBhO3JldHVybiBIfWZ1bmN0aW9uIHcoYSxiLGQsZSxnKXt2YXIgZj1bXTt1KGUsZnVuY3Rpb24oZSl7dmFyIGg9ZVtnXTtoJiZmLnB1c2goZnVuY3Rpb24oKXt2YXIgZSxnLGY9ITEsbD1mdW5jdGlvbihhKXtmfHxcbihmPSEwLChnfHxIKShhKSxlLmNvbXBsZXRlKCFhKSl9O2U9bmV3IGMoe2VuZDpmdW5jdGlvbigpe2woKX0sY2FuY2VsOmZ1bmN0aW9uKCl7bCghMCl9fSk7Zz16KGgsYSxiLGQsZnVuY3Rpb24oYSl7bCghMT09PWEpfSk7cmV0dXJuIGV9KX0pO3JldHVybiBmfWZ1bmN0aW9uIEIoYSxiLGQsZSxnKXt2YXIgZj13KGEsYixkLGUsZyk7aWYoMD09PWYubGVuZ3RoKXt2YXIgaCxrO1wiYmVmb3JlU2V0Q2xhc3NcIj09PWc/KGg9dyhhLFwicmVtb3ZlQ2xhc3NcIixkLGUsXCJiZWZvcmVSZW1vdmVDbGFzc1wiKSxrPXcoYSxcImFkZENsYXNzXCIsZCxlLFwiYmVmb3JlQWRkQ2xhc3NcIikpOlwic2V0Q2xhc3NcIj09PWcmJihoPXcoYSxcInJlbW92ZUNsYXNzXCIsZCxlLFwicmVtb3ZlQ2xhc3NcIiksaz13KGEsXCJhZGRDbGFzc1wiLGQsZSxcImFkZENsYXNzXCIpKTtoJiYoZj1mLmNvbmNhdChoKSk7ayYmKGY9Zi5jb25jYXQoaykpfWlmKDAhPT1mLmxlbmd0aClyZXR1cm4gZnVuY3Rpb24oYSl7dmFyIGI9W107Zi5sZW5ndGgmJlxudShmLGZ1bmN0aW9uKGEpe2IucHVzaChhKCkpfSk7Yi5sZW5ndGg/Yy5hbGwoYixhKTphKCk7cmV0dXJuIGZ1bmN0aW9uKGEpe3UoYixmdW5jdGlvbihiKXthP2IuY2FuY2VsKCk6Yi5lbmQoKX0pfX19Mz09PWFyZ3VtZW50cy5sZW5ndGgmJm5hKGQpJiYoZT1kLGQ9bnVsbCk7ZT1pYShlKTtkfHwoZD1hLmF0dHIoXCJjbGFzc1wiKXx8XCJcIixlLmFkZENsYXNzJiYoZCs9XCIgXCIrZS5hZGRDbGFzcyksZS5yZW1vdmVDbGFzcyYmKGQrPVwiIFwiK2UucmVtb3ZlQ2xhc3MpKTt2YXIgcj1lLmFkZENsYXNzLEs9ZS5yZW1vdmVDbGFzcyxDPXMoZCksRSxmO2lmKEMubGVuZ3RoKXt2YXIgRixHO1wibGVhdmVcIj09Yj8oRz1cImxlYXZlXCIsRj1cImFmdGVyTGVhdmVcIik6KEc9XCJiZWZvcmVcIitiLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Iuc3Vic3RyKDEpLEY9Yik7XCJlbnRlclwiIT09YiYmXCJtb3ZlXCIhPT1iJiYoRT1CKGEsYixlLEMsRykpO2Y9QihhLGIsZSxDLEYpfWlmKEV8fGYpcmV0dXJue3N0YXJ0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihjKXtuPVxuITA7dCgpO2NhKGEsZSk7Zy5jb21wbGV0ZShjKX12YXIgZCxrPVtdO0UmJmsucHVzaChmdW5jdGlvbihhKXtkPUUoYSl9KTtrLmxlbmd0aD9rLnB1c2goZnVuY3Rpb24oYSl7dCgpO2EoITApfSk6dCgpO2YmJmsucHVzaChmdW5jdGlvbihhKXtkPWYoYSl9KTt2YXIgbj0hMSxnPW5ldyBjKHtlbmQ6ZnVuY3Rpb24oKXtufHwoKGR8fEgpKHZvaWQgMCksYih2b2lkIDApKX0sY2FuY2VsOmZ1bmN0aW9uKCl7bnx8KChkfHxIKSghMCksYighMCkpfX0pO2MuY2hhaW4oayxiKTtyZXR1cm4gZ319fX1dfV0pLnByb3ZpZGVyKFwiJCRhbmltYXRlSnNEcml2ZXJcIixbXCIkJGFuaW1hdGlvblByb3ZpZGVyXCIsZnVuY3Rpb24oYSl7YS5kcml2ZXJzLnB1c2goXCIkJGFuaW1hdGVKc0RyaXZlclwiKTt0aGlzLiRnZXQ9W1wiJCRhbmltYXRlSnNcIixcIiQkQW5pbWF0ZVJ1bm5lclwiLGZ1bmN0aW9uKGEsYyl7ZnVuY3Rpb24gZChjKXtyZXR1cm4gYShjLmVsZW1lbnQsYy5ldmVudCxjLmNsYXNzZXMsYy5vcHRpb25zKX1cbnJldHVybiBmdW5jdGlvbihhKXtpZihhLmZyb20mJmEudG8pe3ZhciBiPWQoYS5mcm9tKSxuPWQoYS50byk7aWYoYnx8bilyZXR1cm57c3RhcnQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7cmV0dXJuIGZ1bmN0aW9uKCl7dShkLGZ1bmN0aW9uKGEpe2EuZW5kKCl9KX19dmFyIGQ9W107YiYmZC5wdXNoKGIuc3RhcnQoKSk7biYmZC5wdXNoKG4uc3RhcnQoKSk7Yy5hbGwoZCxmdW5jdGlvbihhKXtlLmNvbXBsZXRlKGEpfSk7dmFyIGU9bmV3IGMoe2VuZDphKCksY2FuY2VsOmEoKX0pO3JldHVybiBlfX19ZWxzZSByZXR1cm4gZChhKX19XX1dKX0pKHdpbmRvdyx3aW5kb3cuYW5ndWxhcik7XG5cbiIsIiFmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSxvLG4pe2Z1bmN0aW9uIHIodCxyLGksbCl7ZnVuY3Rpb24gYSgpe3ZhciBlPW51bGwhPT1sLm9wdGlvbnMudGVtcGxhdGU/J3RlbXBsYXRlPVwiJytsLm9wdGlvbnMudGVtcGxhdGUrJ1wiJzpcIlwiO2wuaXRlbURpcmVjdGl2ZT1cInVuZGVmaW5lZFwiPT10eXBlb2YgbC5pdGVtRGlyZWN0aXZlP1wiY2Fyb3VzZWwtZ2VuZXJpYy1pdGVtXCI6bC5pdGVtRGlyZWN0aXZlO3ZhciB0PVwiPFwiK2wuaXRlbURpcmVjdGl2ZSsnIG5nLW1vZGVsPVwiaXRlbVwiICcrZSsnb24tc2VsZWN0PVwidm0uc2VsZWN0SXRlbShpdGVtKVwiIGNhcm91c2VsLW9wdGlvbnM9XCJtZW51Q2Fyb3VzZWwub3B0aW9uc1wiICc7cmV0dXJuIHQrPVwiPjwvXCIrbC5pdGVtRGlyZWN0aXZlK1wiPlwifWZ1bmN0aW9uIHMoKXt2YXIgZT1uLiRnZXRCeUhhbmRsZShsLm9wdGlvbnMuY2Fyb3VzZWxJZCkuZ2V0U2Nyb2xsVmlldygpLHQ9ZS5fX2NvbnRhaW5lcixvPWUudG91Y2hTdGFydCxyPWUudG91Y2hNb3ZlO3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixlLnRvdWNoU3RhcnQpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixlLnRvdWNoTW92ZSksZS50b3VjaFN0YXJ0PWZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXt9LG8uYXBwbHkoZSxbdF0pfSxlLnRvdWNoTW92ZT1mdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7fSxyLmFwcGx5KGUsW3RdKX0sdC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLGUudG91Y2hTdGFydCwhMSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGUudG91Y2hNb3ZlLCExKX1sLmVsPXIsbC5vcHRpb25zLnRyYWNrQnk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkudHJhY2tCeT9pLnRyYWNrQnk6XCIkaW5kZXhcIixsLm9wdGlvbnMudHJhY2tCeXN0cj1cIiRpbmRleFwiPT09bC5vcHRpb25zLnRyYWNrQnk/XCIkaW5kZXhcIjpcIml0ZW0uXCIrbC5vcHRpb25zLnRyYWNrQnk7dmFyIGM9bC5vcHRpb25zLmFuaW1hdGVJbj9cIiBhbmltYXRlSW5cIjpcIlwiLHU9JzxkaXYgY2xhc3M9XCJhLWNhcm91c2VsXCI+JztsLm9wdGlvbnMucHVsbFJlZnJlc2guYWN0aXZlJiYodSs9JzxkaXYgY2xhc3M9XCJzcGlubmVyLXdyYXBwZXJcIiBuZy1pZj1cInZtLm9wdGlvbnMucHVsbFJlZnJlc2gubG9hZGluZ1wiPjxpb24tc3Bpbm5lciBpY29uPVwiYW5kcm9pZFwiPjwvaW9uLXNwaW5uZXI+PC9kaXY+Jyx1Kz0nPHNwYW4gY2xhc3M9XCJwdWxscmVmcmVzaC1pbmRpY2F0b3JcIj48c3ZnIHZpZXdCb3g9XCIwIDAgNjQgNjRcIj48Zz48Y2lyY2xlIHN0cm9rZS13aWR0aD1cIjZcIiBzdHJva2UtZGFzaGFycmF5PVwiMTM1LjI2MjYxMjM5MTQ0Mjg3XCIgc3Ryb2tlLWRhc2hvZmZzZXQ9XCIxNi41MTM3MTQ3NDU1NjIxNFwiIHI9XCIyNlwiIGN4PVwiMzJcIiBjeT1cIjMyXCIgZmlsbD1cIm5vbmVcIiB0cmFuc2Zvcm09XCJzY2FsZSgxLDEpIHRyYW5zbGF0ZSgwLDApIHJvdGF0ZSgwLDMyLDMyKVwiPjwvY2lyY2xlPjwvZz48L3N2Zz48L3NwYW4+JyksdSs9XCI8aW9uLXNjcm9sbCBcIixsLm9wdGlvbnMucHVsbFJlZnJlc2guYWN0aXZlJiYodSs9J29uLXNjcm9sbD1cInZtLm9uU2Nyb2xsKClcIiAnKSx1Kz0nc2Nyb2xsYmFyLXg9XCJmYWxzZVwiIGRlbGVnYXRlLWhhbmRsZT1cIicrbC5vcHRpb25zLmNhcm91c2VsSWQrJ1wiIHpvb21pbmc9XCJmYWxzZVwiIGRpcmVjdGlvbj1cInhcIiBvdmVyZmxvdy1zY3JvbGw9XCJmYWxzZVwiIGhhcy1ib3VuY2luZz1cInRydWVcIj48bmF2IHN0eWxlPVwidmlzaWJpbGl0eTpoaWRkZW47XCI+PHVsPiA8bGkgbmctcmVwZWF0PVwiaXRlbSBpbiB2bS5hcnJheVByb3ZpZGVyIHRyYWNrIGJ5ICcrbC5vcHRpb25zLnRyYWNrQnlzdHIrJ1wiY2xhc3M9XCJjYXJvdXNlbC1pdGVtJytjKydcIm5nLWNsYXNzPVwie1xcJ2FjdGl2ZVxcJzp2bS5pdGVtQWN0aXZlID09PSBpdGVtfVwiPicrYSgpK1wiPC9saT48L3VsPjwvbmF2PjwvaW9uLXNjcm9sbD48L2Rpdj5cIix1PWUodSkodCksci5hcHBlbmQodSksbyhmdW5jdGlvbigpe2wuYXJyYXlQcm92aWRlciYmbC5hcnJheVByb3ZpZGVyLmxlbmd0aD4wJiZsLmluaXRDYXJvdXNlbCgpLHMoKX0sMCl9cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHJlcGxhY2U6ITAsdGVtcGxhdGU6XCJcIixzY29wZTp7fSxsaW5rOnIsY29udHJvbGxlcjp0LGNvbnRyb2xsZXJBczpcInZtXCIsYmluZFRvQ29udHJvbGxlcjp7aXRlbURpcmVjdGl2ZTpcIkBcIixjYXJvdXNlbE9wdGlvbnM6XCI9XCIsYXJyYXlQcm92aWRlcjpcIj1cIixvblNlbGVjdDpcIiZcIn19fWZ1bmN0aW9uIHQoZSx0LG8sbixyKXtmdW5jdGlvbiBpKCl7ZnVuY3Rpb24gdChlLHQpe3ZhciBuO1wib2JqZWN0XCI9PXR5cGVvZiB0PyhuPXQuY2Fyb3VzZWxJZCxhbmd1bGFyLmV4dGVuZChmLm9wdGlvbnMsdCkpOm49dCxuPT09Zi5vcHRpb25zLmNhcm91c2VsSWQmJm8oZi5pbml0Q2Fyb3VzZWwsMCl9ZnVuY3Rpb24gbihlLHQpe3ZhciBvPXQuaWRDb250YWlucyxuPXQuZXhjZXB0O2Yub3B0aW9ucy5jYXJvdXNlbElkLmluZGV4T2Yobyk+PTAmJmYub3B0aW9ucy5jYXJvdXNlbElkIT09biYmKGYuaXRlbUFjdGl2ZT1udWxsKX1hbmd1bGFyLmV4dGVuZChmLm9wdGlvbnMsZi5jYXJvdXNlbE9wdGlvbnMpLGUuJG9uKFwiYS1jYXJvdXNlbC5hcnJheXVwZGF0ZWRcIix0KSxlLiRvbihcImEtY2Fyb3VzZWwuZGVzYWN0aXZhdGVJdGVtXCIsbiksZi5vcHRpb25zLnB1bGxSZWZyZXNoLmFjdGl2ZSYmZS4kb24oXCJhLWNhcm91c2VsLnB1bGxyZWZyZXNoLmRvbmVcIixwKX1mdW5jdGlvbiBsKCl7ZnVuY3Rpb24gZSgpe3ZhciB0PXBhcnNlSW50KGxbcy0xXS5vZmZzZXRXaWR0aCksbj1wYXJzZUludChsW3MtMV0ub2Zmc2V0SGVpZ2h0KTt0PjAmJm4+MD9pKCk6KGNvbnNvbGUubG9nKFwiW0lORk9dIENyZWF0aW5nIENhcm91c2VsIGJ1dCBET00gbm90IHJlYWR5IHlldC4uLlwiKSxnPmg/byhmdW5jdGlvbigpe2UoKX0sNTApOmNvbnNvbGUubG9nKFwiW0VSUk9SXSBTaXplIGl0ZW0gQ2Fyb3VzZWwgY291bGQgbm90IGJlIGRldGVybWluZWRcIixmLm9wdGlvbnMuY2Fyb3VzZWxJZCksaCsrKX1mdW5jdGlvbiBpKCl7dmFyIGUsbz1udWxsIT09Zi5vcHRpb25zLnNlbGVjdEF0U3RhcnQucHJvcGVydHk7aWYoYW5ndWxhci5mb3JFYWNoKGwsZnVuY3Rpb24odCl7ZT1mLmFycmF5UHJvdmlkZXJbdl0sZS5jYXJvdXNlbElkPWYub3B0aW9ucy5jYXJvdXNlbElkLGQrPXQub2Zmc2V0V2lkdGgsZi5vcHRpb25zLndpZHRoSXRlbT1NYXRoLm1heCh0Lm9mZnNldFdpZHRoLGYub3B0aW9ucy53aWR0aEl0ZW0pLGYub3B0aW9ucy5oZWlnaHRJdGVtPU1hdGgubWF4KHQub2Zmc2V0SGVpZ2h0LGYub3B0aW9ucy5oZWlnaHRJdGVtKSxmLmFycmF5UHJvdmlkZXJbdl0ud2lkdGhJdGVtPXQub2Zmc2V0V2lkdGgsbyYmLTE9PT1mLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5pbmRleCYmZVtmLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5wcm9wZXJ0eV09PT1mLm9wdGlvbnMuc2VsZWN0QXRTdGFydC52YWx1ZSYmKGYub3B0aW9ucy5zZWxlY3RBdFN0YXJ0LmluZGV4PXYpLHYrPTF9KSxmLm9wdGlvbnMuY2VudGVyT25TZWxlY3Qpe3ZhciBpPS41Km4uaW5uZXJXaWR0aCxzPWxbMF0saD1sW3UtMV07cD1pLS41KnMub2Zmc2V0V2lkdGgsbT1pLS41Kmgub2Zmc2V0V2lkdGgsZCs9cCttLGYub3B0aW9ucy5tYXhTY3JvbGw9bi5pbm5lcldpZHRoLWQsXCJyaWdodFwiPT09Zi5vcHRpb25zLmFsaWduP3IuJGdldEJ5SGFuZGxlKGYub3B0aW9ucy5jYXJvdXNlbElkKS5zY3JvbGxUbygtMSpmLm9wdGlvbnMubWF4U2Nyb2xsLDAsITEpOlwiY2VudGVyXCI9PT1mLm9wdGlvbnMuYWxpZ24/ci4kZ2V0QnlIYW5kbGUoZi5vcHRpb25zLmNhcm91c2VsSWQpLnNjcm9sbFRvKGYub3B0aW9ucy5tYXhTY3JvbGwqLS41LDAsITEpOnIuJGdldEJ5SGFuZGxlKGYub3B0aW9ucy5jYXJvdXNlbElkKS5zY3JvbGxUbygwLDAsITApfWVsc2UgZCs9NCxmLm9wdGlvbnMubWF4U2Nyb2xsPW4uaW5uZXJXaWR0aC1kO2Yub3B0aW9ucy53aWR0aENhcm91c2VsPWQsIW8mJmYub3B0aW9ucy5zZWxlY3RGaXJzdD9jKFwicmlnaHRcIj09PWYub3B0aW9ucy5hbGlnbj9mLmFycmF5UHJvdmlkZXJbdS0xXTpmLmFycmF5UHJvdmlkZXJbMF0pOm8mJi0xIT09Zi5vcHRpb25zLnNlbGVjdEF0U3RhcnQuaW5kZXgmJmEoZi5hcnJheVByb3ZpZGVyW2Yub3B0aW9ucy5zZWxlY3RBdFN0YXJ0LmluZGV4XSksZi5uYXZFbGVtPXQuZmluZChcIm5hdlwiKSxmLm5hdkVsZW0uY3NzKHt3aWR0aDpkK1wicHhcIixoZWlnaHQ6Zi5vcHRpb25zLmhlaWdodEl0ZW0rXCJweFwiLHZpc2liaWxpdHk6XCJ2aXNpYmxlXCIsXCJwYWRkaW5nLWxlZnRcIjpwK1wicHhcIn0pLGYub3B0aW9ucy5wdWxsUmVmcmVzaC5hY3RpdmUmJihmLnB1bGxyZWZyZXNoSW5kaWNhdG9yPWFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmEtY2Fyb3VzZWwgLnB1bGxyZWZyZXNoLWluZGljYXRvclwiKSksZi5zdmdFbGVtPXQuZmluZChcImdcIikpfXZhciBsPXQuZmluZChcImxpXCIpLHM9bC5sZW5ndGgsdT1hbmd1bGFyLmVsZW1lbnQobCkubGVuZ3RoLGQ9MCxwPTAsbT0wLHY9MCxoPTAsZz0xNTtpZihmLml0ZW1BY3RpdmU9bnVsbCwhKHU+MCkpdGhyb3cgRXJyb3IoXCJUcnlpbmcgdG8gY3JlYXRlIGEgY2Fyb3VzZWwgZnJvbSBhbiBlbXB0eSBhcnJheVwiLGYub3B0aW9ucyk7byhmdW5jdGlvbigpe2UoKX0sNTApfWZ1bmN0aW9uIGEoZSl7dmFyIHQsbztpZihjKGUpLGYub3B0aW9ucy5jZW50ZXJPblNlbGVjdCl7dmFyIG49dShlKTtpZih0PTAsMD09PW4pdD0wO2Vsc2UgZm9yKG89MDtuPm87bysrKXQrPS41KihmLmFycmF5UHJvdmlkZXJbb10ud2lkdGhJdGVtK2YuYXJyYXlQcm92aWRlcltvKzFdLndpZHRoSXRlbSk7ci4kZ2V0QnlIYW5kbGUoZi5vcHRpb25zLmNhcm91c2VsSWQpLnNjcm9sbFRvKHQsMCwhMCl9fWZ1bmN0aW9uIHMoKXt2YXIgZSx0PXIuJGdldEJ5SGFuZGxlKGYub3B0aW9ucy5jYXJvdXNlbElkKS5nZXRTY3JvbGxQb3NpdGlvbigpLmxlZnQsbz0wLGk9MDtpZihlPWYub3B0aW9ucy5tYXhTY3JvbGw8MD90L2Yub3B0aW9ucy5tYXhTY3JvbGwqLTE6dC8xMCxlPjEpe3ZhciBsPXQtIC0xKmYub3B0aW9ucy5tYXhTY3JvbGw7bz1sL24uaW5uZXJXaWR0aCxmLnB1bGxyZWZyZXNoSW5kaWNhdG9yLmNzcyh7dHJhbnNmb3JtOlwidHJhbnNsYXRlWChcIistNTYqaStcInB4KVwifSl9bz4uMjUmJnQ+MD8oZi5wdWxscmVmcmVzaEluZGljYXRvci5jc3Moe3RyYW5zZm9ybTpcInRyYW5zbGF0ZVgoMHB4KVwiLGRpc3BsYXk6XCJub25lXCJ9KSxkKCkpOihpPW8vLjIsZi5zdmdFbGVtWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLFwicm90YXRlKFwiKzM2MCppK1wiIDMyIDMyKVwiKSxmLnB1bGxyZWZyZXNoSW5kaWNhdG9yLmNzcyh7dHJhbnNmb3JtOlwidHJhbnNsYXRlWChcIistNTYqaStcInB4KVwifSkpfWZ1bmN0aW9uIGModCl7Zi5pdGVtQWN0aXZlPXQsZi5vblNlbGVjdC5jYWxsKG51bGwse2l0ZW06dH0pLGUuJGJyb2FkY2FzdChcImEtY2Fyb3VzZWwuaXRlbXNlbGVjdGVkXCIsdCl9ZnVuY3Rpb24gdShlKXtmb3IodmFyIHQgaW4gZi5hcnJheVByb3ZpZGVyKWlmKGYuYXJyYXlQcm92aWRlclt0XT09PWUpcmV0dXJuIHR9ZnVuY3Rpb24gZCgpe2Yub3B0aW9ucy5wdWxsUmVmcmVzaC5sb2FkaW5nfHwoZS4kYXBwbHkoZnVuY3Rpb24oKXtmLm9wdGlvbnMucHVsbFJlZnJlc2gubG9hZGluZz0hMH0pLHIuJGdldEJ5SGFuZGxlKGYub3B0aW9ucy5jYXJvdXNlbElkKS5mcmVlemVTY3JvbGwoITApLGYubmF2RWxlbS5jc3Moe3dpZHRoOmYub3B0aW9ucy53aWR0aENhcm91c2VsKzQ1K1wicHhcIn0pLHIuJGdldEJ5SGFuZGxlKGYub3B0aW9ucy5jYXJvdXNlbElkKS5yZXNpemUoKSxmLm9wdGlvbnMucHVsbFJlZnJlc2guY2FsbEJhY2soKSl9ZnVuY3Rpb24gcCgpe2Yub3B0aW9ucy5wdWxsUmVmcmVzaC5sb2FkaW5nPSExLGYubmF2RWxlbS5jc3Moe3dpZHRoOmYub3B0aW9ucy53aWR0aENhcm91c2VsK1wicHhcIn0pLHIuJGdldEJ5SGFuZGxlKGYub3B0aW9ucy5jYXJvdXNlbElkKS5yZXNpemUoKSxyLiRnZXRCeUhhbmRsZShmLm9wdGlvbnMuY2Fyb3VzZWxJZCkuZnJlZXplU2Nyb2xsKCExKSxmLnB1bGxyZWZyZXNoSW5kaWNhdG9yLmNzcyh7dHJhbnNmb3JtOlwidHJhbnNsYXRlWCgwcHgpXCIsZGlzcGxheTpcImJsb2NrXCJ9KX12YXIgZj10aGlzO2Yub3B0aW9ucz17c2hvd1Njcm9sbDohMSxjYXJvdXNlbElkOlwibXktY2Fyb3VzZWxcIix0ZW1wbGF0ZTpudWxsLGFsaWduOlwibGVmdFwiLGNlbnRlck9uU2VsZWN0OiEwLHdpZHRoSXRlbTowLGhlaWdodEl0ZW06MCx0cmFja0J5OlwiJGluZGV4XCIsc2VsZWN0Rmlyc3Q6ITAsc2VsZWN0QXRTdGFydDp7cHJvcGVydHk6bnVsbCx2YWx1ZTpudWxsLGluZGV4Oi0xfSxwdWxsUmVmcmVzaDp7YWN0aXZlOiExLGNhbGxCYWNrOmFuZ3VsYXIubm9vcCxsb2FkaW5nOiExfSxhbmltYXRlSW46ITF9LGYuaW5pdENhcm91c2VsPWwsZi5zZWxlY3RJdGVtPWEsZi5vblNjcm9sbD1zLGkoKX1hbmd1bGFyLm1vZHVsZShcImFDYXJvdXNlbFwiLFtdKS5kaXJlY3RpdmUoXCJhQ2Fyb3VzZWxcIixlKSxlLiRpbmplY3Q9W1wiJGNvbXBpbGVcIixcIiR0aW1lb3V0XCIsXCIkaW9uaWNTY3JvbGxEZWxlZ2F0ZVwiXSx0LiRpbmplY3Q9W1wiJHNjb3BlXCIsXCIkZWxlbWVudFwiLFwiJHRpbWVvdXRcIixcIiR3aW5kb3dcIixcIiRpb25pY1Njcm9sbERlbGVnYXRlXCJdfSgpLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSgpe3JldHVybntyZXN0cmljdDpcIkVcIixyZXBsYWNlOiEwLHRlbXBsYXRlVXJsOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQudGVtcGxhdGV9LHNjb3BlOnt9LGNvbnRyb2xsZXI6dCxjb250cm9sbGVyQXM6XCJ2bVwiLGJpbmRUb0NvbnRyb2xsZXI6e25nTW9kZWw6XCI9XCIsb25TZWxlY3Q6XCImXCIsY2Fyb3VzZWxPcHRpb25zOlwiPVwifX19ZnVuY3Rpb24gdChlKXtmdW5jdGlvbiB0KCl7ZS4kb24oXCJhLWNhcm91c2VsLml0ZW1zZWxlY3RlZFwiLGZ1bmN0aW9uKGUsdCl7by5zZWxlY3RlZD10PT09by5uZ01vZGVsPyEwOiExfSl9dmFyIG89dGhpcztvLnNlbGVjdGVkPSExLHQoKX12YXIgbz1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtvW28ubGVuZ3RoLTFdLnNyYzthbmd1bGFyLm1vZHVsZShcImFDYXJvdXNlbFwiKS5kaXJlY3RpdmUoXCJjYXJvdXNlbEdlbmVyaWNJdGVtXCIsZSksdC4kaW5qZWN0PVtcIiRzY29wZVwiXX0oKSxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoKXtyZXR1cm57cmVzdHJpY3Q6XCJFXCIscmVwbGFjZTohMCx0ZW1wbGF0ZTonPGEgY2xhc3M9XCJhLWNhcm91c2VsLXRleHQtaXRlbVwibmctYmluZD1cIjo6dm0ubmdNb2RlbC5kaXNwbGF5XCJuZy1jbGljaz1cInZtLm9uU2VsZWN0KHtpdGVtOnZtLm5nTW9kZWx9KVwiPjwvYT4nLHNjb3BlOnt9LGNvbnRyb2xsZXI6dCxjb250cm9sbGVyQXM6XCJ2bVwiLGJpbmRUb0NvbnRyb2xsZXI6e25nTW9kZWw6XCI9XCIsb25TZWxlY3Q6XCImXCJ9fX1mdW5jdGlvbiB0KGUpe2Z1bmN0aW9uIHQoKXtlLiRvbihcImFjYXJvdXNlbC5pdGVtc2VsZWN0ZWRcIixmdW5jdGlvbihlLHQpe28uc2VsZWN0ZWQ9dD09PW8ubmdNb2RlbD8hMDohMX0pfXZhciBvPXRoaXM7by5zZWxlY3RlZD0hMSx0KCl9YW5ndWxhci5tb2R1bGUoXCJhQ2Fyb3VzZWxcIikuZGlyZWN0aXZlKFwiY2Fyb3VzZWxUZXh0SXRlbVwiLGUpLHQuJGluamVjdD1bXCIkc2NvcGVcIl19KCk7IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE5hbWU6ICAgICAgICAgIG5nLWtub2JcbiAqIERlc2NyaXB0aW9uOiAgIEFuZ3VsYXIuanMgS25vYiBkaXJlY3RpdmVcbiAqIFZlcnNpb246ICAgICAgIDAuMS4zXG4gKiBIb21lcGFnZTogICAgICBodHRwczovL3JhZG1pZS5naXRodWIuaW8vbmcta25vYlxuICogTGljZW5jZTogICAgICAgTUlUXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblwidXNlIHN0cmljdFwiOyFmdW5jdGlvbigpe3ZhciB1aT17fSxLbm9iPWZ1bmN0aW9uKGVsZW1lbnQsdmFsdWUsb3B0aW9ucyl7dGhpcy5lbGVtZW50PWVsZW1lbnQsdGhpcy52YWx1ZT12YWx1ZSx0aGlzLm9wdGlvbnM9b3B0aW9ucyx0aGlzLmluRHJhZz0hMX07S25vYi5wcm90b3R5cGUudmFsdWVUb1JhZGlhbnM9ZnVuY3Rpb24odmFsdWUsdmFsdWVFbmQsYW5nbGVFbmQsYW5nbGVTdGFydCx2YWx1ZVN0YXJ0KXtyZXR1cm4gdmFsdWVFbmQ9dmFsdWVFbmR8fDEwMCx2YWx1ZVN0YXJ0PXZhbHVlU3RhcnR8fDAsYW5nbGVFbmQ9YW5nbGVFbmR8fDM2MCxhbmdsZVN0YXJ0PWFuZ2xlU3RhcnR8fDAsTWF0aC5QSS8xODAqKCh2YWx1ZS12YWx1ZVN0YXJ0KSooYW5nbGVFbmQtYW5nbGVTdGFydCkvKHZhbHVlRW5kLXZhbHVlU3RhcnQpK2FuZ2xlU3RhcnQpfSxLbm9iLnByb3RvdHlwZS5yYWRpYW5zVG9WYWx1ZT1mdW5jdGlvbihyYWRpYW5zLHZhbHVlRW5kLHZhbHVlU3RhcnQsYW5nbGVFbmQsYW5nbGVTdGFydCl7cmV0dXJuIHZhbHVlRW5kPXZhbHVlRW5kfHwxMDAsdmFsdWVTdGFydD12YWx1ZVN0YXJ0fHwwLGFuZ2xlRW5kPWFuZ2xlRW5kfHwzNjAsYW5nbGVTdGFydD1hbmdsZVN0YXJ0fHwwLCgxODAvTWF0aC5QSSpyYWRpYW5zLWFuZ2xlU3RhcnQpKih2YWx1ZUVuZC12YWx1ZVN0YXJ0KS8oYW5nbGVFbmQtYW5nbGVTdGFydCkrdmFsdWVTdGFydH0sS25vYi5wcm90b3R5cGUuY3JlYXRlQXJjPWZ1bmN0aW9uKGlubmVyUmFkaXVzLG91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsZW5kQW5nbGUsY29ybmVyUmFkaXVzKXt2YXIgYXJjPWQzLnN2Zy5hcmMoKS5pbm5lclJhZGl1cyhpbm5lclJhZGl1cykub3V0ZXJSYWRpdXMob3V0ZXJSYWRpdXMpLnN0YXJ0QW5nbGUoc3RhcnRBbmdsZSkuZW5kQW5nbGUoZW5kQW5nbGUpLmNvcm5lclJhZGl1cyhjb3JuZXJSYWRpdXMpO3JldHVybiBhcmN9LEtub2IucHJvdG90eXBlLmRyYXdBcmM9ZnVuY3Rpb24oc3ZnLGFyYyxsYWJlbCxzdHlsZSxjbGljayxkcmFnKXt2YXIgZWxlbT1zdmcuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiaWRcIixsYWJlbCkuYXR0cihcImRcIixhcmMpLnN0eWxlKHN0eWxlKS5hdHRyKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoXCIrdGhpcy5vcHRpb25zLnNpemUvMitcIiwgXCIrdGhpcy5vcHRpb25zLnNpemUvMitcIilcIik7cmV0dXJuIHRoaXMub3B0aW9ucy5yZWFkT25seT09PSExJiYoY2xpY2smJmVsZW0ub24oXCJjbGlja1wiLGNsaWNrKSxkcmFnJiZlbGVtLmNhbGwoZHJhZykpLGVsZW19LEtub2IucHJvdG90eXBlLmNyZWF0ZUFyY3M9ZnVuY3Rpb24oKXt2YXIgb3V0ZXJSYWRpdXM9cGFyc2VJbnQodGhpcy5vcHRpb25zLnNpemUvMiwxMCksc3RhcnRBbmdsZT10aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLDM2MCksZW5kQW5nbGU9dGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLm9wdGlvbnMuZW5kQW5nbGUsMzYwKTt0aGlzLm9wdGlvbnMuc2NhbGUuZW5hYmxlZCYmKG91dGVyUmFkaXVzLT10aGlzLm9wdGlvbnMuc2NhbGUud2lkdGgrdGhpcy5vcHRpb25zLnNjYWxlLnNwYWNlV2lkdGgpO3ZhciBkaWZmLHRyYWNrSW5uZXJSYWRpdXM9b3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnRyYWNrV2lkdGgsY2hhbmdlSW5uZXJSYWRpdXM9b3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLmJhcldpZHRoLHZhbHVlSW5uZXJSYWRpdXM9b3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLmJhcldpZHRoLGludGVyYWN0SW5uZXJSYWRpdXM9MSx0cmFja091dGVyUmFkaXVzPW91dGVyUmFkaXVzLGNoYW5nZU91dGVyUmFkaXVzPW91dGVyUmFkaXVzLHZhbHVlT3V0ZXJSYWRpdXM9b3V0ZXJSYWRpdXMsaW50ZXJhY3RPdXRlclJhZGl1cz1vdXRlclJhZGl1czt0aGlzLm9wdGlvbnMuYmFyV2lkdGg+dGhpcy5vcHRpb25zLnRyYWNrV2lkdGg/KGRpZmY9KHRoaXMub3B0aW9ucy5iYXJXaWR0aC10aGlzLm9wdGlvbnMudHJhY2tXaWR0aCkvMix0cmFja0lubmVyUmFkaXVzLT1kaWZmLHRyYWNrT3V0ZXJSYWRpdXMtPWRpZmYpOnRoaXMub3B0aW9ucy5iYXJXaWR0aDx0aGlzLm9wdGlvbnMudHJhY2tXaWR0aCYmKGRpZmY9KHRoaXMub3B0aW9ucy50cmFja1dpZHRoLXRoaXMub3B0aW9ucy5iYXJXaWR0aCkvMixjaGFuZ2VPdXRlclJhZGl1cy09ZGlmZix2YWx1ZU91dGVyUmFkaXVzLT1kaWZmLGNoYW5nZUlubmVyUmFkaXVzLT1kaWZmLHZhbHVlSW5uZXJSYWRpdXMtPWRpZmYpLHRoaXMub3B0aW9ucy5iZ0NvbG9yJiYodGhpcy5iZ0FyYz10aGlzLmNyZWF0ZUFyYygwLG91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsZW5kQW5nbGUpKSxcInRyb25cIj09PXRoaXMub3B0aW9ucy5za2luLnR5cGUmJih0cmFja091dGVyUmFkaXVzPXRyYWNrT3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnNraW4ud2lkdGgtdGhpcy5vcHRpb25zLnNraW4uc3BhY2VXaWR0aCxjaGFuZ2VPdXRlclJhZGl1cz1jaGFuZ2VPdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuc2tpbi53aWR0aC10aGlzLm9wdGlvbnMuc2tpbi5zcGFjZVdpZHRoLHZhbHVlT3V0ZXJSYWRpdXM9dmFsdWVPdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuc2tpbi53aWR0aC10aGlzLm9wdGlvbnMuc2tpbi5zcGFjZVdpZHRoLGludGVyYWN0T3V0ZXJSYWRpdXM9aW50ZXJhY3RPdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuc2tpbi53aWR0aC10aGlzLm9wdGlvbnMuc2tpbi5zcGFjZVdpZHRoLHRoaXMuaG9vcEFyYz10aGlzLmNyZWF0ZUFyYyhvdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuc2tpbi53aWR0aCxvdXRlclJhZGl1cyxzdGFydEFuZ2xlLGVuZEFuZ2xlKSksdGhpcy50cmFja0FyYz10aGlzLmNyZWF0ZUFyYyh0cmFja0lubmVyUmFkaXVzLHRyYWNrT3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxlbmRBbmdsZSksdGhpcy5jaGFuZ2VBcmM9dGhpcy5jcmVhdGVBcmMoY2hhbmdlSW5uZXJSYWRpdXMsY2hhbmdlT3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxzdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5iYXJDYXApLHRoaXMudmFsdWVBcmM9dGhpcy5jcmVhdGVBcmModmFsdWVJbm5lclJhZGl1cyx2YWx1ZU91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMuYmFyQ2FwKSx0aGlzLmludGVyYWN0QXJjPXRoaXMuY3JlYXRlQXJjKGludGVyYWN0SW5uZXJSYWRpdXMsaW50ZXJhY3RPdXRlclJhZGl1cyxzdGFydEFuZ2xlLGVuZEFuZ2xlKX0sS25vYi5wcm90b3R5cGUuZHJhd0FyY3M9ZnVuY3Rpb24oY2xpY2tJbnRlcmFjdGlvbixkcmFnQmVoYXZpb3Ipe3ZhciBzdmc9ZDMuc2VsZWN0KHRoaXMuZWxlbWVudCkuYXBwZW5kKFwic3ZnXCIpLmF0dHIoXCJ3aWR0aFwiLHRoaXMub3B0aW9ucy5zaXplKS5hdHRyKFwiaGVpZ2h0XCIsdGhpcy5vcHRpb25zLnNpemUpO2lmKHRoaXMub3B0aW9ucy5iZ0NvbG9yJiZ0aGlzLmRyYXdBcmMoc3ZnLHRoaXMuYmdBcmMsXCJiZ0FyY1wiLHtmaWxsOnRoaXMub3B0aW9ucy5iZ0NvbG9yfSksdGhpcy5vcHRpb25zLmRpc3BsYXlJbnB1dCl7dmFyIGZvbnRTaXplPS4yKnRoaXMub3B0aW9ucy5zaXplK1wicHhcIjtcImF1dG9cIiE9PXRoaXMub3B0aW9ucy5mb250U2l6ZSYmKGZvbnRTaXplPXRoaXMub3B0aW9ucy5mb250U2l6ZStcInB4XCIpLHRoaXMub3B0aW9ucy5zdGVwPDEmJih0aGlzLnZhbHVlPXRoaXMudmFsdWUudG9GaXhlZCgxKSk7dmFyIHY9dGhpcy52YWx1ZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXImJih2PXRoaXMub3B0aW9ucy5pbnB1dEZvcm1hdHRlcih2KSksc3ZnLmFwcGVuZChcInRleHRcIikuYXR0cihcImlkXCIsXCJ0ZXh0XCIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLFwibWlkZGxlXCIpLmF0dHIoXCJmb250LXNpemVcIixmb250U2l6ZSkuc3R5bGUoXCJmaWxsXCIsdGhpcy5vcHRpb25zLnRleHRDb2xvcikudGV4dCh2K3RoaXMub3B0aW9ucy51bml0fHxcIlwiKS5hdHRyKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoXCIrdGhpcy5vcHRpb25zLnNpemUvMitcIiwgXCIrKHRoaXMub3B0aW9ucy5zaXplLzIrLjA2KnRoaXMub3B0aW9ucy5zaXplKStcIilcIiksdGhpcy5vcHRpb25zLnN1YlRleHQuZW5hYmxlZCYmKGZvbnRTaXplPS4wNyp0aGlzLm9wdGlvbnMuc2l6ZStcInB4XCIsXCJhdXRvXCIhPT10aGlzLm9wdGlvbnMuc3ViVGV4dC5mb250JiYoZm9udFNpemU9dGhpcy5vcHRpb25zLnN1YlRleHQuZm9udCtcInB4XCIpLHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJjbGFzc1wiLFwic3ViLXRleHRcIikuYXR0cihcInRleHQtYW5jaG9yXCIsXCJtaWRkbGVcIikuYXR0cihcImZvbnQtc2l6ZVwiLGZvbnRTaXplKS5zdHlsZShcImZpbGxcIix0aGlzLm9wdGlvbnMuc3ViVGV4dC5jb2xvcikudGV4dCh0aGlzLm9wdGlvbnMuc3ViVGV4dC50ZXh0KS5hdHRyKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoXCIrdGhpcy5vcHRpb25zLnNpemUvMitcIiwgXCIrKHRoaXMub3B0aW9ucy5zaXplLzIrLjE1KnRoaXMub3B0aW9ucy5zaXplKStcIilcIikpfWlmKHRoaXMub3B0aW9ucy5zY2FsZS5lbmFibGVkKXt2YXIgcmFkaXVzLHF1YW50aXR5LGRhdGEsY291bnQ9MCxhbmdsZT0wLHN0YXJ0UmFkaWFucz10aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMub3B0aW9ucy5taW4sdGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMuZW5kQW5nbGUsdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLm1pbiksZW5kUmFkaWFucz10aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMuZW5kQW5nbGUsdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLm1pbiksZGlmZj0wO2lmKDA9PT10aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSYmMzYwPT09dGhpcy5vcHRpb25zLmVuZEFuZ2xlfHwoZGlmZj0xKSxcImRvdHNcIj09PXRoaXMub3B0aW9ucy5zY2FsZS50eXBlKXt2YXIgd2lkdGg9dGhpcy5vcHRpb25zLnNjYWxlLndpZHRoO3JhZGl1cz10aGlzLm9wdGlvbnMuc2l6ZS8yLXdpZHRoLHF1YW50aXR5PXRoaXMub3B0aW9ucy5zY2FsZS5xdWFudGl0eTt2YXIgb2Zmc2V0PXJhZGl1cyt0aGlzLm9wdGlvbnMuc2NhbGUud2lkdGg7ZGF0YT1kMy5yYW5nZShxdWFudGl0eSkubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIGFuZ2xlPWNvdW50KihlbmRSYWRpYW5zLXN0YXJ0UmFkaWFucyktTWF0aC5QSS8yK3N0YXJ0UmFkaWFucyxjb3VudCs9MS8ocXVhbnRpdHktZGlmZikse2N4Om9mZnNldCtNYXRoLmNvcyhhbmdsZSkqcmFkaXVzLGN5Om9mZnNldCtNYXRoLnNpbihhbmdsZSkqcmFkaXVzLHI6d2lkdGh9fSksc3ZnLnNlbGVjdEFsbChcImNpcmNsZVwiKS5kYXRhKGRhdGEpLmVudGVyKCkuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoe3I6ZnVuY3Rpb24oZCl7cmV0dXJuIGQucn0sY3g6ZnVuY3Rpb24oZCl7cmV0dXJuIGQuY3h9LGN5OmZ1bmN0aW9uKGQpe3JldHVybiBkLmN5fSxmaWxsOnRoaXMub3B0aW9ucy5zY2FsZS5jb2xvcn0pfWVsc2UgaWYoXCJsaW5lc1wiPT09dGhpcy5vcHRpb25zLnNjYWxlLnR5cGUpe3ZhciBoZWlnaHQ9dGhpcy5vcHRpb25zLnNjYWxlLmhlaWdodDtyYWRpdXM9dGhpcy5vcHRpb25zLnNpemUvMixxdWFudGl0eT10aGlzLm9wdGlvbnMuc2NhbGUucXVhbnRpdHksZGF0YT1kMy5yYW5nZShxdWFudGl0eSkubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIGFuZ2xlPWNvdW50KihlbmRSYWRpYW5zLXN0YXJ0UmFkaWFucyktTWF0aC5QSS8yK3N0YXJ0UmFkaWFucyxjb3VudCs9MS8ocXVhbnRpdHktZGlmZikse3gxOnJhZGl1cytNYXRoLmNvcyhhbmdsZSkqcmFkaXVzLHkxOnJhZGl1cytNYXRoLnNpbihhbmdsZSkqcmFkaXVzLHgyOnJhZGl1cytNYXRoLmNvcyhhbmdsZSkqKHJhZGl1cy1oZWlnaHQpLHkyOnJhZGl1cytNYXRoLnNpbihhbmdsZSkqKHJhZGl1cy1oZWlnaHQpfX0pLHN2Zy5zZWxlY3RBbGwoXCJsaW5lXCIpLmRhdGEoZGF0YSkuZW50ZXIoKS5hcHBlbmQoXCJsaW5lXCIpLmF0dHIoe3gxOmZ1bmN0aW9uKGQpe3JldHVybiBkLngxfSx5MTpmdW5jdGlvbihkKXtyZXR1cm4gZC55MX0seDI6ZnVuY3Rpb24oZCl7cmV0dXJuIGQueDJ9LHkyOmZ1bmN0aW9uKGQpe3JldHVybiBkLnkyfSxcInN0cm9rZS13aWR0aFwiOnRoaXMub3B0aW9ucy5zY2FsZS53aWR0aCxzdHJva2U6dGhpcy5vcHRpb25zLnNjYWxlLmNvbG9yfSl9fVwidHJvblwiPT09dGhpcy5vcHRpb25zLnNraW4udHlwZSYmdGhpcy5kcmF3QXJjKHN2Zyx0aGlzLmhvb3BBcmMsXCJob29wQXJjXCIse2ZpbGw6dGhpcy5vcHRpb25zLnNraW4uY29sb3J9KSx0aGlzLmRyYXdBcmMoc3ZnLHRoaXMudHJhY2tBcmMsXCJ0cmFja0FyY1wiLHtmaWxsOnRoaXMub3B0aW9ucy50cmFja0NvbG9yfSksdGhpcy5vcHRpb25zLmRpc3BsYXlQcmV2aW91cz90aGlzLmNoYW5nZUVsZW09dGhpcy5kcmF3QXJjKHN2Zyx0aGlzLmNoYW5nZUFyYyxcImNoYW5nZUFyY1wiLHtmaWxsOnRoaXMub3B0aW9ucy5wcmV2QmFyQ29sb3J9KTp0aGlzLmNoYW5nZUVsZW09dGhpcy5kcmF3QXJjKHN2Zyx0aGlzLmNoYW5nZUFyYyxcImNoYW5nZUFyY1wiLHtcImZpbGwtb3BhY2l0eVwiOjB9KSx0aGlzLnZhbHVlRWxlbT10aGlzLmRyYXdBcmMoc3ZnLHRoaXMudmFsdWVBcmMsXCJ2YWx1ZUFyY1wiLHtmaWxsOnRoaXMub3B0aW9ucy5iYXJDb2xvcn0pO3ZhciBjdXJzb3I9XCJwb2ludGVyXCI7dGhpcy5vcHRpb25zLnJlYWRPbmx5JiYoY3Vyc29yPVwiZGVmYXVsdFwiKSx0aGlzLmRyYXdBcmMoc3ZnLHRoaXMuaW50ZXJhY3RBcmMsXCJpbnRlcmFjdEFyY1wiLHtcImZpbGwtb3BhY2l0eVwiOjAsY3Vyc29yOmN1cnNvcn0sY2xpY2tJbnRlcmFjdGlvbixkcmFnQmVoYXZpb3IpfSxLbm9iLnByb3RvdHlwZS5kcmF3PWZ1bmN0aW9uKHVwZGF0ZSl7ZnVuY3Rpb24gZHJhZ0ludGVyYWN0aW9uKCl7dGhhdC5pbkRyYWc9ITA7dmFyIHg9ZDMuZXZlbnQueC10aGF0Lm9wdGlvbnMuc2l6ZS8yLHk9ZDMuZXZlbnQueS10aGF0Lm9wdGlvbnMuc2l6ZS8yO2ludGVyYWN0aW9uKHgseSwhMSl9ZnVuY3Rpb24gY2xpY2tJbnRlcmFjdGlvbigpe3RoYXQuaW5EcmFnPSExO3ZhciBjb29yZHM9ZDMubW91c2UodGhpcy5wYXJlbnROb2RlKSx4PWNvb3Jkc1swXS10aGF0Lm9wdGlvbnMuc2l6ZS8yLHk9Y29vcmRzWzFdLXRoYXQub3B0aW9ucy5zaXplLzI7aW50ZXJhY3Rpb24oeCx5LCEwKX1mdW5jdGlvbiBpbnRlcmFjdGlvbih4LHksaXNGaW5hbCl7dmFyIHJhZGlhbnMsZGVsdGEsYXJjPU1hdGguYXRhbih5L3gpLyhNYXRoLlBJLzE4MCk7aWYoeD49MCYmMD49eXx8eD49MCYmeT49MD9kZWx0YT05MDooZGVsdGE9MjcwLHRoYXQub3B0aW9ucy5zdGFydEFuZ2xlPDAmJihkZWx0YT0tOTApKSxyYWRpYW5zPShkZWx0YSthcmMpKihNYXRoLlBJLzE4MCksdGhhdC52YWx1ZT10aGF0LnJhZGlhbnNUb1ZhbHVlKHJhZGlhbnMsdGhhdC5vcHRpb25zLm1heCx0aGF0Lm9wdGlvbnMubWluLHRoYXQub3B0aW9ucy5lbmRBbmdsZSx0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZSksdGhhdC52YWx1ZT49dGhhdC5vcHRpb25zLm1pbiYmdGhhdC52YWx1ZTw9dGhhdC5vcHRpb25zLm1heCYmKHRoYXQudmFsdWU9TWF0aC5yb3VuZCh+figodGhhdC52YWx1ZTwwPy0uNTouNSkrdGhhdC52YWx1ZS90aGF0Lm9wdGlvbnMuc3RlcCkqdGhhdC5vcHRpb25zLnN0ZXAqMTAwKS8xMDAsdGhhdC5vcHRpb25zLnN0ZXA8MSYmKHRoYXQudmFsdWU9dGhhdC52YWx1ZS50b0ZpeGVkKDEpKSx1cGRhdGUodGhhdC52YWx1ZSksdGhhdC52YWx1ZUFyYy5lbmRBbmdsZSh0aGF0LnZhbHVlVG9SYWRpYW5zKHRoYXQudmFsdWUsdGhhdC5vcHRpb25zLm1heCx0aGF0Lm9wdGlvbnMuZW5kQW5nbGUsdGhhdC5vcHRpb25zLnN0YXJ0QW5nbGUsdGhhdC5vcHRpb25zLm1pbikpLHRoYXQudmFsdWVFbGVtLmF0dHIoXCJkXCIsdGhhdC52YWx1ZUFyYyksaXNGaW5hbCYmKHRoYXQuY2hhbmdlQXJjLmVuZEFuZ2xlKHRoYXQudmFsdWVUb1JhZGlhbnModGhhdC52YWx1ZSx0aGF0Lm9wdGlvbnMubWF4LHRoYXQub3B0aW9ucy5lbmRBbmdsZSx0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZSx0aGF0Lm9wdGlvbnMubWluKSksdGhhdC5jaGFuZ2VFbGVtLmF0dHIoXCJkXCIsdGhhdC5jaGFuZ2VBcmMpKSx0aGF0Lm9wdGlvbnMuZGlzcGxheUlucHV0KSl7dmFyIHY9dGhhdC52YWx1ZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGF0Lm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXImJih2PXRoYXQub3B0aW9ucy5pbnB1dEZvcm1hdHRlcih2KSksZDMuc2VsZWN0KHRoYXQuZWxlbWVudCkuc2VsZWN0KFwiI3RleHRcIikudGV4dCh2K3RoYXQub3B0aW9ucy51bml0fHxcIlwiKX19ZDMuc2VsZWN0KHRoaXMuZWxlbWVudCkuc2VsZWN0KFwic3ZnXCIpLnJlbW92ZSgpO3ZhciB0aGF0PXRoaXM7dGhhdC5jcmVhdGVBcmNzKCk7dmFyIGRyYWdCZWhhdmlvcj1kMy5iZWhhdmlvci5kcmFnKCkub24oXCJkcmFnXCIsZHJhZ0ludGVyYWN0aW9uKS5vbihcImRyYWdlbmRcIixjbGlja0ludGVyYWN0aW9uKTt0aGF0LmRyYXdBcmNzKGNsaWNrSW50ZXJhY3Rpb24sZHJhZ0JlaGF2aW9yKSx0aGF0Lm9wdGlvbnMuYW5pbWF0ZS5lbmFibGVkP3RoYXQudmFsdWVFbGVtLnRyYW5zaXRpb24oKS5lYXNlKHRoYXQub3B0aW9ucy5hbmltYXRlLmVhc2UpLmR1cmF0aW9uKHRoYXQub3B0aW9ucy5hbmltYXRlLmR1cmF0aW9uKS50d2VlbihcIlwiLGZ1bmN0aW9uKCl7dmFyIGk9ZDMuaW50ZXJwb2xhdGUodGhhdC52YWx1ZVRvUmFkaWFucyh0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZSwzNjApLHRoYXQudmFsdWVUb1JhZGlhbnModGhhdC52YWx1ZSx0aGF0Lm9wdGlvbnMubWF4LHRoYXQub3B0aW9ucy5lbmRBbmdsZSx0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZSx0aGF0Lm9wdGlvbnMubWluKSk7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciB2YWw9aSh0KTt0aGF0LnZhbHVlRWxlbS5hdHRyKFwiZFwiLHRoYXQudmFsdWVBcmMuZW5kQW5nbGUodmFsKSksdGhhdC5jaGFuZ2VFbGVtLmF0dHIoXCJkXCIsdGhhdC5jaGFuZ2VBcmMuZW5kQW5nbGUodmFsKSl9fSk6KHRoYXQuY2hhbmdlQXJjLmVuZEFuZ2xlKHRoaXMudmFsdWVUb1JhZGlhbnModGhpcy52YWx1ZSx0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5lbmRBbmdsZSx0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMubWluKSksdGhhdC5jaGFuZ2VFbGVtLmF0dHIoXCJkXCIsdGhhdC5jaGFuZ2VBcmMpLHRoYXQudmFsdWVBcmMuZW5kQW5nbGUodGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLnZhbHVlLHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLmVuZEFuZ2xlLHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5taW4pKSx0aGF0LnZhbHVlRWxlbS5hdHRyKFwiZFwiLHRoYXQudmFsdWVBcmMpKX0sS25vYi5wcm90b3R5cGUuc2V0VmFsdWU9ZnVuY3Rpb24obmV3VmFsdWUpe2lmKCF0aGlzLmluRHJhZyYmdGhpcy52YWx1ZT49dGhpcy5vcHRpb25zLm1pbiYmdGhpcy52YWx1ZTw9dGhpcy5vcHRpb25zLm1heCl7dmFyIHJhZGlhbnM9dGhpcy52YWx1ZVRvUmFkaWFucyhuZXdWYWx1ZSx0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5lbmRBbmdsZSx0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMubWluKTtpZih0aGlzLnZhbHVlPU1hdGgucm91bmQofn4oKDA+bmV3VmFsdWU/LS41Oi41KStuZXdWYWx1ZS90aGlzLm9wdGlvbnMuc3RlcCkqdGhpcy5vcHRpb25zLnN0ZXAqMTAwKS8xMDAsdGhpcy5vcHRpb25zLnN0ZXA8MSYmKHRoaXMudmFsdWU9dGhpcy52YWx1ZS50b0ZpeGVkKDEpKSx0aGlzLmNoYW5nZUFyYy5lbmRBbmdsZShyYWRpYW5zKSxkMy5zZWxlY3QodGhpcy5lbGVtZW50KS5zZWxlY3QoXCIjY2hhbmdlQXJjXCIpLmF0dHIoXCJkXCIsdGhpcy5jaGFuZ2VBcmMpLHRoaXMudmFsdWVBcmMuZW5kQW5nbGUocmFkaWFucyksZDMuc2VsZWN0KHRoaXMuZWxlbWVudCkuc2VsZWN0KFwiI3ZhbHVlQXJjXCIpLmF0dHIoXCJkXCIsdGhpcy52YWx1ZUFyYyksdGhpcy5vcHRpb25zLmRpc3BsYXlJbnB1dCl7dmFyIHY9dGhpcy52YWx1ZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXImJih2PXRoaXMub3B0aW9ucy5pbnB1dEZvcm1hdHRlcih2KSksZDMuc2VsZWN0KHRoaXMuZWxlbWVudCkuc2VsZWN0KFwiI3RleHRcIikudGV4dCh2K3RoaXMub3B0aW9ucy51bml0fHxcIlwiKX19fSx1aS5Lbm9iPUtub2IsdWkua25vYkRpcmVjdGl2ZT1mdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVcIixzY29wZTp7dmFsdWU6XCI9XCIsb3B0aW9uczpcIj1cIn0sbGluazpmdW5jdGlvbihzY29wZSxlbGVtZW50KXtzY29wZS52YWx1ZT1zY29wZS52YWx1ZXx8MDt2YXIgZGVmYXVsdE9wdGlvbnM9e3NraW46e3R5cGU6XCJzaW1wbGVcIix3aWR0aDoxMCxjb2xvcjpcInJnYmEoMjU1LDAsMCwuNSlcIixzcGFjZVdpZHRoOjV9LGFuaW1hdGU6e2VuYWJsZWQ6ITAsZHVyYXRpb246MWUzLGVhc2U6XCJib3VuY2VcIn0sc2l6ZToyMDAsc3RhcnRBbmdsZTowLGVuZEFuZ2xlOjM2MCx1bml0OlwiXCIsZGlzcGxheUlucHV0OiEwLGlucHV0Rm9ybWF0dGVyOmZ1bmN0aW9uKHYpe3JldHVybiB2fSxyZWFkT25seTohMSx0cmFja1dpZHRoOjUwLGJhcldpZHRoOjUwLHRyYWNrQ29sb3I6XCJyZ2JhKDAsMCwwLDApXCIsYmFyQ29sb3I6XCJyZ2JhKDI1NSwwLDAsLjUpXCIscHJldkJhckNvbG9yOlwicmdiYSgwLDAsMCwwKVwiLHRleHRDb2xvcjpcIiMyMjJcIixiYXJDYXA6MCxmb250U2l6ZTpcImF1dG9cIixzdWJUZXh0OntlbmFibGVkOiExLHRleHQ6XCJcIixjb2xvcjpcImdyYXlcIixmb250OlwiYXV0b1wifSxiZ0NvbG9yOlwiXCIsc2NhbGU6e2VuYWJsZWQ6ITEsdHlwZTpcImxpbmVzXCIsY29sb3I6XCJncmF5XCIsd2lkdGg6NCxxdWFudGl0eToyMCxoZWlnaHQ6MTAsc3BhY2VXaWR0aDoxNX0sc3RlcDoxLGRpc3BsYXlQcmV2aW91czohMSxtaW46MCxtYXg6MTAwLGR5bmFtaWNPcHRpb25zOiExfTtzY29wZS5vcHRpb25zPWFuZ3VsYXIubWVyZ2UoZGVmYXVsdE9wdGlvbnMsc2NvcGUub3B0aW9ucyk7dmFyIGtub2I9bmV3IHVpLktub2IoZWxlbWVudFswXSxzY29wZS52YWx1ZSxzY29wZS5vcHRpb25zKTtpZihzY29wZS4kd2F0Y2goXCJ2YWx1ZVwiLGZ1bmN0aW9uKG5ld1ZhbHVlLG9sZFZhbHVlKXtudWxsPT09bmV3VmFsdWUmJlwidW5kZWZpbmVkXCI9PXR5cGVvZiBuZXdWYWx1ZXx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIG9sZFZhbHVlfHxuZXdWYWx1ZT09PW9sZFZhbHVlfHxrbm9iLnNldFZhbHVlKG5ld1ZhbHVlKX0pLHNjb3BlLm9wdGlvbnMuZHluYW1pY09wdGlvbnMpe3ZhciBpc0ZpcnN0V2F0Y2hPbk9wdGlvbnM9ITA7c2NvcGUuJHdhdGNoKFwib3B0aW9uc1wiLGZ1bmN0aW9uKCl7aWYoaXNGaXJzdFdhdGNoT25PcHRpb25zKWlzRmlyc3RXYXRjaE9uT3B0aW9ucz0hMTtlbHNle3ZhciBuZXdPcHRpb25zPWFuZ3VsYXIubWVyZ2UoZGVmYXVsdE9wdGlvbnMsc2NvcGUub3B0aW9ucyk7a25vYj1uZXcgdWkuS25vYihlbGVtZW50WzBdLHNjb3BlLnZhbHVlLG5ld09wdGlvbnMpLGRyYXdLbm9iKCl9fSwhMCl9dmFyIGRyYXdLbm9iPWZ1bmN0aW9uKCl7a25vYi5kcmF3KGZ1bmN0aW9uKHZhbHVlKXtzY29wZS4kYXBwbHkoZnVuY3Rpb24oKXtzY29wZS52YWx1ZT12YWx1ZX0pfSl9O2RyYXdLbm9iKCl9fX0sYW5ndWxhci5tb2R1bGUoXCJ1aS5rbm9iXCIsW10pLmRpcmVjdGl2ZShcInVpS25vYlwiLHVpLmtub2JEaXJlY3RpdmUpfSgpOyIsIid1c2Ugc3RyaWN0JztcblxuLy8gYW5ndWxhciBtb2R1bGVzXG4vLyByZXF1aXJlKCdhbmd1bGFyLW1vZHVsZS1zYW5pdGl6ZScpO1xuLy8gcmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcblxucmVxdWlyZSgnLi9jb250cm9sbGVycy9faW5kZXgnKTtcbnJlcXVpcmUoJy4vc2VydmljZXMvX2luZGV4Jyk7XG5yZXF1aXJlKCcuL21vZGVscy9faW5kZXgnKTtcbnJlcXVpcmUoJy4vZGlyZWN0aXZlcy9faW5kZXgnKTtcblxucmVxdWlyZSgnLi4vYm93ZXJfY29tcG9uZW50cy9uZy1rbm9iL2Rpc3Qvbmcta25vYi5taW4nKTtcbnJlcXVpcmUoJy4uL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1hbmltYXRlL2FuZ3VsYXItYW5pbWF0ZS5taW4nKTtcbnJlcXVpcmUoJy4uL2Jvd2VyX2NvbXBvbmVudHMvaW9uaWMtYWR2YW5jZWQtY2Fyb3VzZWwvZGlzdC9hZHZhbmNlZC1jYXJvdXNlbC5taW4nKTtcblxuXG5cbi8vIGNyZWF0ZSBhbmQgYm9vdHN0cmFwIGFwcGxpY2F0aW9uXG5hbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gIHZhciByZXF1aXJlcyA9IFtcbiAgICAnaW9uaWMnLFxuICAgICdhcHAuY29udHJvbGxlcnMnLFxuICAgICdhcHAuc2VydmljZXMnLFxuICAgICdhcHAubW9kZWxzJyxcbiAgICAnYXBwLmRpcmVjdGl2ZXMnLFxuICAgICd1aS5yb3V0ZXInLFxuICAgICd1aS5rbm9iJyxcbiAgICAnYUNhcm91c2VsJyxcbiAgICAnbmdBbmltYXRlJ1xuICAgIC8vICd0ZW1wbGF0ZXMnLFxuICAgIC8vICduZ1Nhbml0aXplJyxcbiAgXTtcblxuICAvLyBtb3VudCBvbiB3aW5kb3cgZm9yIHRlc3RpbmdcbiAgd2luZG93LmFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCByZXF1aXJlcyk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnN0YW50KCdBcHBTZXR0aW5ncycsIHJlcXVpcmUoJy4vY29uc3RhbnRzLmRldmVsb3BtZW50JykpO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb25maWcocmVxdWlyZSgnLi9vbl9jb25maWcnKSk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLnJ1bihyZXF1aXJlKCcuL29uX3J1bicpKTtcblxuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgYW5ndWxhci5ib290c3RyYXAoZG9jdW1lbnQsIFsnYXBwJ10pOyAgIFxuICB9LCAoMTAwMCkpO1xuICBcblxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQXBwU2V0dGluZ3MgPSB7XG4gIHlvY2FsQVBJOntcbiAgICAvLyBiYXNlOiAnaHR0cDovL3lvZW5kcG9pbnQ0LXdiYnMucmhjbG91ZC5jb20vYXBpL3YxL3lva2FsL2RhdGEvJ1xuICAgIGJhc2U6ICdodHRwOi8vbG9jYWxob3N0OjgxMDAvYXBpL3YxL3lva2FsL2RhdGEvJ1xuICB9LFxuXG4gIEdNQVBfREVGQVVMVDp7XG4gIFx0UkFESVVTOiA4MDAsXG4gIFx0Wk9PTTogICAxNFxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcFNldHRpbmdzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gQXBwQ3RybCgkbG9nLCAkcm9vdFNjb3BlLCAkc2NvcGUsICRpb25pY01vZGFsLCAkdGltZW91dCwgY29vcmRpbmF0ZXMsIEFwcFNldHRpbmdzKSB7XG5cbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0FwcEN0cmwnKTtcblxuICB2YXIgdm0gPSB0aGlzO1xuICAvLyBzZXQgY3VyZW50IHBvc2l0aW9uIHRvIHJvb3RTY29wZSB0byBtYWtlIGdsb2JhbGx5IGF2YWlsYWJsZSBcbiAgJHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb24gPSBjb29yZGluYXRlcztcbiAgXG5cbiAgLy8gRm9ybSBkYXRhIGZvciB0aGUgbG9naW4gbW9kYWxcbiAgJHNjb3BlLmxvZ2luRGF0YSA9IHt9O1xuXG4gIC8vIENyZWF0ZSB0aGUgbG9naW4gbW9kYWwgdGhhdCB3ZSB3aWxsIHVzZSBsYXRlclxuICAkaW9uaWNNb2RhbC5mcm9tVGVtcGxhdGVVcmwoJ3RlbXBsYXRlcy9sb2dpbi5odG1sJywge1xuICAgIHNjb3BlOiAkc2NvcGVcbiAgfSkudGhlbihmdW5jdGlvbihtb2RhbCkge1xuICAgICRzY29wZS5tb2RhbCA9IG1vZGFsO1xuICB9KTtcblxuICAvLyBUcmlnZ2VyZWQgaW4gdGhlIGxvZ2luIG1vZGFsIHRvIGNsb3NlIGl0XG4gICRzY29wZS5jbG9zZUxvZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLm1vZGFsLmhpZGUoKTtcbiAgfTtcblxuICAvLyBPcGVuIHRoZSBsb2dpbiBtb2RhbFxuICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUubW9kYWwuc2hvdygpO1xuICB9O1xuXG4gIC8vIFBlcmZvcm0gdGhlIGxvZ2luIGFjdGlvbiB3aGVuIHRoZSB1c2VyIHN1Ym1pdHMgdGhlIGxvZ2luIGZvcm1cbiAgJHNjb3BlLmRvTG9naW4gPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnRG9pbmcgbG9naW4nLCAkc2NvcGUubG9naW5EYXRhKTtcblxuICAgIC8vIFNpbXVsYXRlIGEgbG9naW4gZGVsYXkuIFJlbW92ZSB0aGlzIGFuZCByZXBsYWNlIHdpdGggeW91ciBsb2dpblxuICAgIC8vIGNvZGUgaWYgdXNpbmcgYSBsb2dpbiBzeXN0ZW1cbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS5jbG9zZUxvZ2luKCk7XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgXG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBBcHBDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEJyb3dzZUN0cmwoJHNjb3BlLCAkcm9vdFNjb3BlLCAkcSwgJGh0dHAsICRsb2csICRmaWx0ZXIsICR0aW1lb3V0LCBMb2NhdGlvbnNTZXJ2aWNlLCAgJGlvbmljTG9hZGluZywgICRpb25pY1NsaWRlQm94RGVsZWdhdGUsIEFwcFNldHRpbmdzKSB7XG4gICAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0Jyb3dzZUN0cmwnKTtcblxuIFx0Ly8gVmlld01vZGVsXG4gIFx0dmFyIHZtID0gdGhpcztcbiAgICB2bS5yYWRpdXMgPSBBcHBTZXR0aW5ncy5HTUFQX1JBRElVUztcbiAgICAkc2NvcGUucmFkaXVzID0gQXBwU2V0dGluZ3MuR01BUF9SQURJVVM7XG4gICAgJHNjb3BlLkN1cnJlbnRDb29yZHMgPSAgJHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb247XG5cbiAgICAkc2NvcGUubG9jYXRpb25zID1bXTtcbiAgICAkc2NvcGUubG9jYXRpb25zX2dyb3VwcyA9W107XG4gICAgJHNjb3BlLmxvY2F0aW9uc19sb2FkZWQgPSAwOyBcbiAgICAkc2NvcGUuY2Fyb3VzZWxzID0gW107XG5cbiAgICAkaW9uaWNMb2FkaW5nLnNob3coe1xuICAgICAgICB0ZW1wbGF0ZTogXCJGaW5kaW5nIFJhZCBTcG90cyAuLi5cIixcbiAgICAgICAgYmFja2Ryb3A6IHRydWVcbiAgICB9KTtcblxuICAgICRzY29wZS5jYXJvdXNlbE9wdGlvbnMgPSB7XG4gICAgICAgIHRlbXBsYXRlICAgICAgOiAnLi4vdGVtcGxhdGVzL2xvY2F0aW9ucy1jYXJvdXNlbC5pdGVtLmh0bWwnLCAvLyB0ZW1wbGF0ZVVybCBpbiBjYXNlIHlvdSBkb24ndCBuZWVkIHRvIHBhc3MgYSBkaXJlY3RpdmUgYnV0IGp1c3QgYSBodG1sIHZpZXdcbiAgICAgICAgYWxpZ24gICAgICAgICA6ICdsZWZ0JywgLy8gYWxpZ25lbWVudCBvZiB0aGUgY2Fyb3VzZWxcbiAgICAgICAgc2VsZWN0Rmlyc3QgICA6IHRydWUsXG4gICAgICAgIGNlbnRlck9uU2VsZWN0OiBmYWxzZSwgLy8gY2VudGVyIGNhcm91c2VsIHdoZW4gYW4gaXRlbSBpcyBzZWxlY3RlZFxuICAgIH07XG5cbiAgICAkc2NvcGUub25TZWxlY3RDYXJvdXNlbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgdmFyIGNhdCA9ICRzY29wZS5nZXRfY2F0ZWdvcnlfc2x1ZyhpdGVtLmNhdGFnb3J5bGV2ZWwxKTtcbiAgICAgICAgJGxvZy5sb2coJ0Nhcm91c2VsICcrY2F0KycgaXRlbSBzZWxlY3RlZDp7bmFtZX0nLCBpdGVtKTtcbiAgICAgICAgJHNjb3BlLmNhcm91c2Vsc1tjYXRdLml0ZW1TZWxlY3RlZCA9IGl0ZW07XG4gICAgfTtcblxuICAgICRzY29wZS5yYW5kb0V4cGVuc2VXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkrMSk7ICBcbiAgICB9O1xuICAgIFxuICAgICRzY29wZS5nZXRfY2F0ZWdvcnlfc2x1ZyA9IGZ1bmN0aW9uIChjYXRfbmFtZSkge1xuICAgICAgICByZXR1cm4gY2F0X25hbWUuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24oY2F0KSB7IHJldHVybiBjYXQudG9Mb3dlckNhc2UoKS50cmltKCk7IH0pLmpvaW4oJy0nKTtcbiAgICB9XG5cbiAgICBMb2NhdGlvbnNTZXJ2aWNlLmFsbCgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubG9jYXRpb25zID0gZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ3JvdXAgbG9jYXRpb25zIGJ5IGNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgdHJhdmVsVGltZSBmb3IgZWFjaCBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGNhcm91c2VsT3B0aW9ucyBmb3IgZWFjaCBjYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvY2F0aW9uc19ncm91cHMgPSBfLmNoYWluKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdyb3VwQnkoXCJjYXRhZ29yeWxldmVsMVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obG9jYXRpb25zLCBjYXQsIGFycmF5KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zLm1hcChmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uc2V0VHJhdmVsVGltZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvY2F0aW9uc19sb2FkZWQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5X3NsdWc6ICRzY29wZS5nZXRfY2F0ZWdvcnlfc2x1ZyhjYXQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zOiBsb2NhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24oY2F0ZWdvcnlfb2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5jYXJvdXNlbHNbY2F0ZWdvcnlfb2JqLmNhdGVnb3J5X3NsdWddID0gYW5ndWxhci5leHRlbmQoe30sIHtjYXJvdXNlbElEOiAnbG9jYXRpb25zLWNhcm91c2VsLScrY2F0ZWdvcnlfb2JqLmNhdGVnb3J5X3NsdWcsIGl0ZW1TZWxlY3RlZDp7fX0sICRzY29wZS5jYXJvdXNlbE9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2F0ZWdvcnlfb2JqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS4kd2F0Y2goJ2xvY2F0aW9uc19sb2FkZWQnLGZ1bmN0aW9uKG5ld192YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihuZXdfdmFsID09IGRhdGEubGVuZ3RoKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzb3J0IGxvY2F0aW9uIGdyb3VwcyBhbHBhaGJldGljYWxseSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc29ydCBncm91cCBsb2NhdGlvbnMgYnkgdHJhdmVsVGltZS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubG9jYXRpb25zX2dyb3Vwc19zb3J0ZWQgPSBfLmNoYWluKCRzY29wZS5sb2NhdGlvbnNfZ3JvdXBzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihncm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzb3J0ZWRfbG9jYXRpb25zID0gJGZpbHRlcignb3JkZXJCeScpKGdyb3VwLmxvY2F0aW9ucywgJ3RyYXZlbFRpbWUudmFsdWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYW5ndWxhci5leHRlbmQoe30sZ3JvdXAsIHtsb2NhdGlvbnM6c29ydGVkX2xvY2F0aW9uc30gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydEJ5KCdjYXRlZ29yeScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGlvbmljTG9hZGluZy5oaWRlKCk7ICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICBcdCAgICAgICAgICAgICAgICB9KTtcblxuXG5cbn07XG5cblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignQnJvd3NlQ3RybCcsIEJyb3dzZUN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gQ29ubmVjdEN0cmwoJGxvZywgJHJvb3RTY29wZSwgJHNjb3BlLCBBcHBTZXR0aW5ncykge1xuXG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdDb25uZWN0Q3RybCcpO1xuXG4gIHZhciB2bSA9IHRoaXM7XG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ0Nvbm5lY3RDdHJsJywgQ29ubmVjdEN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gTG9naW5DdHJsKCRsb2csICRyb290U2NvcGUsICRzY29wZSwgQXBwU2V0dGluZ3MpIHtcblxuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnTG9naW5DdHJsJyk7XG5cbiAgdmFyIHZtID0gdGhpcztcblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignTG9naW5DdHJsJywgTG9naW5DdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIE1hcEN0cmwoJHJvb3RTY29wZSwgJHNjb3BlLCAkbG9nLCAkaW9uaWNMb2FkaW5nLCBBcHBTZXR0aW5ncywgR01hcCwgTG9jYXRpb25zU2VydmljZSkge1xuXG4gICAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoXCJNYXBDdHJsXCIpO1xuXG4gXHQgIC8vIFZpZXdNb2RlbFxuICBcdHZhciB2bSA9IHRoaXM7XG4gICAgdmFyIGN1cnJlbnRDZW50ZXIgPSAkcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbjtcblxuICAgIHZtLnRoaXNfcmFkaXVzID0gNTAwMDtcbiAgICB2bS5nbWFwID0gbmV3IEdNYXAoe3pvb206MTMsIHJhZGl1czp2bS50aGlzX3JhZGl1c30pOyAgICBcbiAgICB2bS5nbWFwLmhlaWdodCA9IDYyNTtcbiAgICB2bS5tYXJrZXJzID0gW107ICAgIFxuICAgIC8vIHZtLmdtYXAucGxvdExvY2F0aW9ucygpO1xuICAgIFxuICAgIHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZSA9IFtdO1xuXG4gICAgdm0ua25vYiA9e1xuICAgICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgICAgb3B0aW9uczp7IGR5bmFtaWNPcHRpb25zOiB0cnVlIH0sXG4gICAgICAgICAgICB9O1xuXG4gICAgXG4gICAgdmFyIHNldEtub2JWYWx1ZSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgLy8gc2V0IHVpLmtub2Igb3B0aW9ucyBoZXJlXG4gICAgICAvLyB0aGlzIHRyaWNrcyB0aGUga25vYiBpbnRvIHVwZGF0aW5nIHRoZSB2YWx1ZSBjb3JyZWN0bHlcbiAgICAgICAgICB2bS5rbm9iID17XG4gICAgICAgICAgICAgIHZhbHVlOnZhbCxcbiAgICAgICAgICAgICAgb3B0aW9uczp7XG4gICAgICAgICAgICAgICAgc2l6ZTogMjAwLFxuICAgICAgICAgICAgICAgIG1pbjogIDEsXG4gICAgICAgICAgICAgICAgbWF4OiAgMTAwMDAsXG4gICAgICAgICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICAgICAgICBiYXJDb2xvcjogJyM1QkMwMUUnLFxuICAgICAgICAgICAgICAgIHRyYWNrQ29sb3I6ICcjMjEyMTIxJyxcbiAgICAgICAgICAgICAgICB0cmFja1dpZHRoOiAxNSxcbiAgICAgICAgICAgICAgICBiYXJXaWR0aDogMzAsXG4gICAgICAgICAgICAgICAgc3ViVGV4dDoge1xuICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdtZXRlciByYWRpdXMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgIH07XG4gICBcblxuICAgIHZhciBzZXRNYXJrZXJzID0gZnVuY3Rpb24obG9jYXRpb25zKSB7XG4gICAgICBsb2NhdGlvbnMubWFwKGZ1bmN0aW9uKGxvY2F0ZSl7XG4gICAgICAgICAgICB2YXIgbWFya2VyID0gdm0uZ21hcC5kcm9wTWFya2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogcGFyc2VGbG9hdChsb2NhdGUubGF0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHBhcnNlRmxvYXQobG9jYXRlLmxvbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICAgICBsb2NhdGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcDogICAgICAgdm0uZ21hcC5tYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAgIDAuMTI1XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZtLm1hcmtlcnNbbG9jYXRlLl9pZF0gPSBtYXJrZXI7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZtLm1hcmtlcnM7XG4gICAgfTtcblxuICAgICAgXG5cbiAgICAvLyBnZXQgYWxsIGxvY2F0aW9ucyBhcm91bmQgc3BlY2lmaWVkIGFyZWFcbiAgICAgIExvY2F0aW9uc1NlcnZpY2VcbiAgICAgICAgLmdldCh7cmFkaXVzOiB2bS50aGlzX3JhZGl1cywgXG4gICAgICAgICAgICAgIGxhdDogICAgY3VycmVudENlbnRlci5sYXRpdHVkZSwgXG4gICAgICAgICAgICAgIGxuZzogICAgY3VycmVudENlbnRlci5sb25naXR1ZGV9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihsb2NhdGlvbnMpIHtcblxuICAgICAgICAgIC8vIHNvcnQgbG9jYXRpb25zIGJ5IGRpc3RuYWNlIFxuICAgICAgICAgIHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZSA9IF8uc29ydEJ5KGxvY2F0aW9ucywgJ2Rpc3RhbmNlZnJvbWxvY2F0aW9uJyk7XG4gICAgICAgICAgc2V0TWFya2Vycyh2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UpO1xuXG4gICAgICAgICAgLy8gc2V0IHRoZSBsb2NhdGlvbnMgcmFkaXVzIGFuZCBrbm9iIHZhbHVlIHRvIHRoZSBjbG9zZXMgbG9jdGlvbiB0byB0ZXN0XG4gICAgICAgICAgdm0udGhpc19yYWRpdXMgPSBfLmZpcnN0KHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZSkuZGlzdGFuY2Vmcm9tbG9jYXRpb247XG4gICAgICAgICAgdm0ubG9jYXRpb25zUmFkaXVzID0gdm0uZ21hcC5zZXRSYWRpdXNDaXJjbGUoe3JhZGl1czogdm0udGhpc19yYWRpdXN9KTtcbiAgICAgICAgICB2bS5nbWFwLm1hcC5maXRCb3VuZHModm0ubG9jYXRpb25zUmFkaXVzLmdldEJvdW5kcygpKTtcbiAgICAgICAgICBcbiAgICAgICAgICBzZXRLbm9iVmFsdWUodm0udGhpc19yYWRpdXMpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9KTsvL2VuZCAudGhlblxuXG5cblxuXG5cblxuXG4gICAgICAgICAkc2NvcGUuJHdhdGNoKFwiTWFwLmtub2IudmFsdWVcIiwgZnVuY3Rpb24obmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAkbG9nLmxvZyhcIm5ldyBNYXAua25vYi52YWx1ZTogXCIrbmV3VmFsdWUpO1xuICAgICAgICAgICAgJGxvZy5sb2coXCJvbGQgTWFwLmtub2IudmFsdWU6IFwiK29sZFZhbHVlKTtcblxuICAgICAgICAgICAgdm0ubG9jYXRpb25zUmFkaXVzLnNldFJhZGl1cyhuZXdWYWx1ZSk7XG4gICAgICAgICAgICAvLyB2bS5nbWFwLm1hcC5wYW5Ubyh7bGF0OiRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uLmxhdGl0dWRlLCBsbmc6JHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb24ubG9uZ2l0dWRlfSk7XG4gICAgICAgICAgICB2YXIgTWFwQm91bmRzQXJyID0gXy50b0FycmF5KHZtLmdtYXAubWFwLmdldEJvdW5kcygpKTtcbiAgICAgICAgICAgIHZhciBSYWRpdXNCb3VuZHNBcnIgPSBfLnRvQXJyYXkodm0ubG9jYXRpb25zUmFkaXVzLmdldEJvdW5kcygpKTtcbiAgICAgICAgICAgIC8vIFRPRE86IGNoZWNrIGlmIFJhZGl1c0JvdW5kcyBhcmUgd2l0aGluIE1hcEJvdW5kc1xuICAgICAgICAgICAgJGxvZy5sb2coXCJNYXBCb3VuZHNBcnI6IFwiK01hcEJvdW5kc0Fycik7XG4gICAgICAgICAgICAkbG9nLmxvZyhcIlJhZGl1c0JvdW5kc0FycjogXCIrIFJhZGl1c0JvdW5kc0FyciApO1xuXG4gICAgICAgICAgICAvLyBzaG93L3JldmVhbCBsb2NhdGlvbnMgaW5zaWRlIHJhZGl1c1xuICAgICAgICAgICAgdm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlLm1hcChmdW5jdGlvbihsb2NhdGUpe1xuICAgICAgICAgICAgICAgICAgaWYoIGxvY2F0ZS5kaXN0YW5jZWZyb21sb2NhdGlvbiA8IG5ld1ZhbHVlICl7XG4gICAgICAgICAgICAgICAgICAgIHZtLm1hcmtlcnNbbG9jYXRlLl9pZF0uc2V0T3BhY2l0eSgxKTtcbiAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdm0ubWFya2Vyc1tsb2NhdGUuX2lkXS5zZXRPcGFjaXR5KDApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7Ly92bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UubWFwXG5cblxuICAgICAgICB9KTsvLy8kc2NvcGUuJHdhdGNoIFwiTWFwLmtub2IudmFsdWVcIlxuICAgICAgXG4gICAgXG5cblxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG5cbiAgXG4gIFxuXG4gICRyb290U2NvcGUuJG9uKCdtYXJrZXI6Y2xpY2tlZCcsIGZ1bmN0aW9uKGUsIGxvY2FsZSkge1xuICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICBcbiAgICAgIHZtLmdtYXAuaGVpZ2h0ID0gdm0uZ21hcC5oZWlnaHQvMjtcbiAgICAgIHZtLmdtYXAubWFwLnBhblRvKHtsYXQ6cGFyc2VGbG9hdChsb2NhbGUubGF0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgbG5nOnBhcnNlRmxvYXQobG9jYWxlLmxvbmcpfSk7XG4gICAgfSk7XG4gICAgXG4gIH0pO1xufTsvLy8vIE1hcEN0cmxcblxuXG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ01hcEN0cmwnLCBNYXBDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIFBsYXlsaXN0Q3RybCgkc2NvcGUpIHtcbiAgXG5cblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignUGxheWxpc3RDdHJsJywgUGxheWxpc3RDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIFBsYXlsaXN0c0N0cmwoJHNjb3BlKSB7XG4gIFxuICRzY29wZS5wbGF5bGlzdHMgPSBbXG4gICAgeyB0aXRsZTogJ1JlZ2dhZScsIGlkOiAxIH0sXG4gICAgeyB0aXRsZTogJ0NoaWxsJywgaWQ6IDIgfSxcbiAgICB7IHRpdGxlOiAnRHVic3RlcCcsIGlkOiAzIH0sXG4gICAgeyB0aXRsZTogJ0luZGllJywgaWQ6IDQgfSxcbiAgICB7IHRpdGxlOiAnUmFwJywgaWQ6IDUgfSxcbiAgICB7IHRpdGxlOiAnQ293YmVsbCcsIGlkOiA2IH1cbiAgXTtcblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignUGxheWxpc3RzQ3RybCcsIFBsYXlsaXN0c0N0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbnRyb2xsZXJzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmRpcmVjdGl2ZXMnLCBbXSk7XG5cbmJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqX2luZGV4fCouc3BlYykuanMnXSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGlyZWN0aXZlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIG1BcHBMb2FkaW5nKCRsb2csICRhbmltYXRlKXtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoIFwibUFwcExvYWRpbmdcIiApO1xuICBcblxuICAvLyBSdW5zIGR1cmluZyBjb21waWxlXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICAgICdDJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cmlidXRlcywgY29udHJvbGxlciwgdHJhbnNjbHVkZUZuKSB7XG4gICAgICRhbmltYXRlLmxlYXZlKCBcbiAgICAgXHRlbGVtZW50LmNoaWxkcmVuKCkuZXEoIDEgKVxuICAgICBcdCkudGhlbihcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsZWFudXBBZnRlckFuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIFx0JGxvZy5sb2coJ2NsZWFudXBBZnRlckFuaW1hdGlvbicpO1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcm9vdCBkaXJlY3RpdmUgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIC8vIENsZWFyIHRoZSBjbG9zZWQtb3ZlciB2YXJpYWJsZSByZWZlcmVuY2VzLlxuICAgICAgICAgICAgICAgIHNjb3BlID0gZWxlbWVudCA9IGF0dHJpYnV0ZXMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgfVxuICB9XG5cblxufTtcblxuXG5kaXJlY3RpdmVzTW9kdWxlLmRpcmVjdGl2ZSgnbUFwcExvYWRpbmcnLCBtQXBwTG9hZGluZyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbW9kZWxzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiovXG5cbm1vZGVsc01vZHVsZS5mYWN0b3J5KCdHTWFwJywgZnVuY3Rpb24oJGxvZywgJHJvb3RTY29wZSwgTG9jYXRpb25zU2VydmljZSwgQXBwU2V0dGluZ3Mpe1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnR01hcCcpO1xuXG4gIHZhciBjdXJyZW50Q2VudGVyID0gJHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb247XG5cbiAgZnVuY3Rpb24gR01hcChtYXBTZXR0aW5ncyl7XG4gICAgXG4gICAgdGhpcy5tYXBPcHRpb25zID0ge1xuICAgICAgY2VudGVyOiAgICB7bGF0OiBjdXJyZW50Q2VudGVyLmxhdGl0dWRlLCBcbiAgICAgICAgICAgICAgICAgIGxuZzogY3VycmVudENlbnRlci5sb25naXR1ZGV9LFxuICAgICAgem9vbTogICAgICBBcHBTZXR0aW5ncy5HTUFQX0RFRkFVTFQuWk9PTSxcbiAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsXG4gICAgICByYWRpdXM6ICAgIEFwcFNldHRpbmdzLkdNQVBfREVGQVVMVC5SQURJVVMsXG4gICAgfTtcblxuICAgIGFuZ3VsYXIuZXh0ZW5kKHRoaXMubWFwT3B0aW9ucywgbWFwU2V0dGluZ3MpO1xuICAgIFxuICAgICRsb2cuZGVidWcoJ3pvb20ge21hcE9wdGlvbnMuem9vbX0nLCB0aGlzKTtcbiAgICBcbiAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYXBcIiksIHRoaXMubWFwT3B0aW9ucyk7XG4gICAgXG4gfTsvL0dNYXAgY29uc3RydWN0b3JcblxuXG4gIEdNYXAucHJvdG90eXBlID17XG5cbiAgICBkcm9wTWFya2VyOiBmdW5jdGlvbihtYXJrZXJEYXRhKSB7XG4gICAgICB2YXIgX21hcmtlclNldHRpbmdzID0ge307XG4gICAgICBhbmd1bGFyLmV4dGVuZChfbWFya2VyU2V0dGluZ3MsIHRoaXMubWFwT3B0aW9ucywgbWFya2VyRGF0YSk7XG4gICAgICAkbG9nLmRlYnVnKCdkcm9wTWFya2VyIGZvciBcInt0aXRsZX1cIlwiIGF0IFwie2NlbnRlci5sYXR9LCB7Y2VudGVyLmxuZ31cIicsIF9tYXJrZXJTZXR0aW5ncyk7XG4gICAgICBcbiAgICAgIHZhciBfbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogIF9tYXJrZXJTZXR0aW5ncy5jZW50ZXIsXG4gICAgICAgICAgICBtYXA6ICAgICAgIF9tYXJrZXJTZXR0aW5ncy5tYXAsXG4gICAgICAgICAgICB0aXRsZTogICAgIF9tYXJrZXJTZXR0aW5ncy50aXRsZSxcbiAgICAgICAgICAgIG9wYWNpdHk6ICAgX21hcmtlclNldHRpbmdzLm9wYWNpdHksXG4gICAgICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIF9tYXJrZXI7XG4gICAgfSxcblxuXG4gICAgYnVpbGRJbmZvV2luZG93OiBmdW5jdGlvbihsb2NhdGlvbkluZm8sIGxvY2F0aW9uTWFya2VyKSB7XG4gICAgICB2YXIgX21hcCA9IHRoaXM7XG5cbiAgICAgICRsb2cuZGVidWcoJ2J1aWxkSW5mb1dpbmRvdyBmb3Ige25hbWV9JywgbG9jYXRpb25JbmZvKTtcbiAgICAgIHZhciBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnPGgzIGlkPVwiZmlyc3RIZWFkaW5nXCIgY2xhc3M9XCJmaXJzdEhlYWRpbmdcIj4nK2xvY2F0aW9uSW5mby5uYW1lKyc8L2gzPicrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8cD4nK2xvY2F0aW9uSW5mby50cmF2ZWxUaW1lLnRleHQrJyB3YWxrPC9wPicrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c21hbGw+Jytsb2NhdGlvbkluZm8uZGlzdGFuY2Vmcm9tbG9jYXRpb24rJzwvc21hbGw+J1xuICAgICAgfSk7XG5cbiAgICAgIGxvY2F0aW9uTWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ21hcmtlcjpjbGlja2VkJywgbG9jYXRpb25JbmZvICk7XG4gICAgICAgIGluZm93aW5kb3cub3BlbiggX21hcC5tYXAgLGxvY2F0aW9uTWFya2VyKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gaW5mb3dpbmRvdztcbiAgICB9LFxuXG5cbiAgICBwbG90TG9jYXRpb25zOmZ1bmN0aW9uKHBsb3REYXRhKSB7XG4gICAgICB2YXIgX21hcCA9IHRoaXM7XG4gICAgICB2YXIgX3Bsb3RTZXR0aW5ncyA9e307IFxuXG4gICAgICBhbmd1bGFyLmV4dGVuZChfcGxvdFNldHRpbmdzLHRoaXMubWFwT3B0aW9ucywgcGxvdERhdGEpO1xuICAgICAgJGxvZy5kZWJ1ZygncGxvdExvY2F0aW9ucyB3aXRoaW4gYSBcIntyYWRpdXN9XCIgbWV0ZXIgcmFkaXVzIG9mIFwie2NlbnRlci5sYXR9LCB7Y2VudGVyLmxuZ31cIicsIF9wbG90U2V0dGluZ3MpO1xuICAgICAgXG4gICAgICAvLyBkcm9wIG1hcmtlciBvbiBjdXJyZW50IGxvY2F0aW9uXG4gICAgICBfbWFwLmRyb3BNYXJrZXIoe3RpdGxlOlwiWW91IEFyZSBIZXJlXCIsIG9wYWNpdHk6MX0pO1xuXG4gICAgICAvLyBnZXQgYWxsIGxvY2F0aW9ucyBhcm91bmQgc3BlY2lmaWVkIGFyZWFcbiAgICAgIExvY2F0aW9uc1NlcnZpY2VcbiAgICAgICAgLmdldCh7cmFkaXVzOiBfcGxvdFNldHRpbmdzLnJhZGl1cywgXG4gICAgICAgICAgICAgIGxhdDogICAgX3Bsb3RTZXR0aW5ncy5jZW50ZXIubGF0LCBcbiAgICAgICAgICAgICAgbG5nOiAgICBfcGxvdFNldHRpbmdzLmNlbnRlci5sbmcgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24obG9jYXRpb25zKSB7XG5cbiAgICAgICAgICAvLyBwcm9jZXNzIGxvY2F0aW9ucyBcbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2gobG9jYXRpb25zLCBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZygncGxvdExvY2F0aW9uIHtuYW1lfScsbG9jYXRpb24pO1xuICAgICAgICAgICAgLy9nZXQgdGhlIHRyYXZlbFRpbWUgZm9yRWFjaCBsb2NhdGlvblxuICAgICAgICAgICAgbG9jYXRpb24uc2V0VHJhdmVsVGltZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uUGluID0gX21hcC5kcm9wTWFya2VyKHtjZW50ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogcGFyc2VGbG9hdChsb2NhdGlvbi5sYXQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiBwYXJzZUZsb2F0KGxvY2F0aW9uLmxvbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGxvY2F0aW9uLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgX21hcC5idWlsZEluZm9XaW5kb3cobG9jYXRpb24sIGxvY2F0aW9uUGluKTtcbiAgICAgICAgICAgICAgX21hcC5wbG90Um91dGVUbyhsb2NhdGlvbik7XG5cbiAgICAgICAgICAgIH0pOy8vL2xvY2F0aW9uLnNldFRyYXZlbFRpbWVcblxuXG4gICAgICAgICAgfSk7Ly8vZW5kIGFuZ3VsYXIuZm9yRWFjaFxuXG4gICAgICAgIH0pOy8vZW5kIExvY2F0aW9uc1NlcnZpY2VcblxuICAgIH0sXG5cbiAgICBwbG90Um91dGVUbzogZnVuY3Rpb24obG9jYXRpb24pe1xuICAgICAgJGxvZy5kZWJ1ZygncGxvdFJvdXRlVG8ge25hbWV9Jyxsb2NhdGlvbik7XG5cbiAgICAgIHZhciBfbWFwID0gdGhpcztcbiAgICAgIHZhciBfcm91dGVTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgIGRyYWdnYWJsZTogICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgc3VwcHJlc3NJbmZvV2luZG93czogdHJ1ZSxcbiAgICAgICAgICAgIHN1cHByZXNzTWFya2VyczogICAgIHRydWUsXG4gICAgICAgICAgICBvcmlnaW46ICAgICAgICAgICAgICBfbWFwLm1hcE9wdGlvbnMuY2VudGVyXG4gICAgICB9O1xuXG4gICAgICBhbmd1bGFyLmV4dGVuZChfcm91dGVTZXR0aW5ncywgdGhpcy5tYXBPcHRpb25zKTtcblxuICAgICAgdmFyIGRpcmVjdGlvbnNEaXNwbGF5ID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcih7XG4gICAgICAgICAgICBtYXA6ICAgICAgICAgICAgICAgICBfbWFwLm1hcCxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogICAgICAgICAgIF9yb3V0ZVNldHRpbmdzLmRyYWdnYWJsZSxcbiAgICAgICAgICAgIHN1cHByZXNzSW5mb1dpbmRvd3M6IF9yb3V0ZVNldHRpbmdzLnN1cHByZXNzSW5mb1dpbmRvd3MsXG4gICAgICAgICAgICBzdXBwcmVzc01hcmtlcnM6ICAgICBfcm91dGVTZXR0aW5ncy5zdXBwcmVzc01hcmtlcnNcbiAgICAgICAgICB9KSxcbiAgICAgICAgICByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgZGVzdGluYXRpb246IHtsYXQ6IHBhcnNlRmxvYXQobG9jYXRpb24ubGF0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogcGFyc2VGbG9hdChsb2NhdGlvbi5sb25nKX0sXG4gICAgICAgICAgICBvcmlnaW46ICAgICAgX3JvdXRlU2V0dGluZ3Mub3JpZ2luLFxuICAgICAgICAgICAgdHJhdmVsTW9kZTogIGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuV0FMS0lORyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7Ly8gUGFzcyB0aGUgZGlyZWN0aW9ucyByZXF1ZXN0IHRvIHRoZSBkaXJlY3Rpb25zIHNlcnZpY2UuXG5cblxuICAgICAgICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKHJlcXVlc3QsIGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgIC8vIERpc3BsYXkgdGhlIHJvdXRlIG9uIHRoZSBtYXAuXG4gICAgICAgICAgICAgIGRpcmVjdGlvbnNEaXNwbGF5LnNldERpcmVjdGlvbnMocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pOy8vL2RpcmVjdGlvc1NlcnZpY2Uucm91dGVcblxuXG4gICAgfSxcblxuICAgIHNldFJhZGl1c0NpcmNsZTogZnVuY3Rpb24ocmFkaXVzQ2lyY2xlU2V0dGluZ3MpIHtcbiAgICAgIHZhciBfbWFwID0gdGhpcztcbiAgICAgIHZhciBfY2lyY2xlU2V0dGluZ3MgPXtcbiAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6ICAgJyMwMDg0YjQnLFxuICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAwLjgsXG4gICAgICAgICAgICAgIHN0cm9rZVdlaWdodDogIDEsXG4gICAgICAgICAgICAgIGZpbGxDb2xvcjogICAgICcjMDA4NGI0JyxcbiAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6ICAgMC4wNjI1LFxuICAgICAgfTtcblxuICAgICAgYW5ndWxhci5leHRlbmQoX2NpcmNsZVNldHRpbmdzICx0aGlzLm1hcE9wdGlvbnMsIHJhZGl1c0NpcmNsZVNldHRpbmdzKTtcblxuICAgICAgdmFyIGxvY2F0aW9uc0NpcmNsZSA9IG5ldyBnb29nbGUubWFwcy5DaXJjbGUoe1xuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAgIF9jaXJjbGVTZXR0aW5ncy5zdHJva2VDb2xvcixcbiAgICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiBfY2lyY2xlU2V0dGluZ3Muc3Ryb2tlT3BhY2l0eSxcbiAgICAgICAgICAgICAgICBzdHJva2VXZWlnaHQ6ICBfY2lyY2xlU2V0dGluZ3Muc3Ryb2tlV2VpZ2h0LFxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogICAgIF9jaXJjbGVTZXR0aW5ncy5maWxsQ29sb3IsXG4gICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6ICAgX2NpcmNsZVNldHRpbmdzLmZpbGxPcGFjaXR5LFxuICAgICAgICAgICAgICAgIG1hcDogICAgICAgICAgIF9tYXAubWFwLFxuICAgICAgICAgICAgICAgIGNlbnRlcjogICAgICAgIF9jaXJjbGVTZXR0aW5ncy5jZW50ZXIsXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAgICAgICAgX2NpcmNsZVNldHRpbmdzLnJhZGl1c1xuICAgICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbG9jYXRpb25zQ2lyY2xlO1xuICAgIH1cblxuICB9O1xuICAgIFxuXG5cbiAgcmV0dXJuIEdNYXA7XG5cbiAgXG59KTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbW9kZWxzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xubW9kZWxzTW9kdWxlLmZhY3RvcnkoJ0xvY2F0aW9uJywgZnVuY3Rpb24oJHJvb3RTY29wZSwgJGxvZywgJHEgKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdMb2NhdGlvbicpO1xuXG4gIGZ1bmN0aW9uIExvY2F0aW9uKExvY2F0aW9uRGF0YSl7XG4gICAgYW5ndWxhci5leHRlbmQodGhpcywgTG9jYXRpb25EYXRhKTtcbiAgICAkbG9nLmRlYnVnKCd7bmFtZX0nLCB0aGlzKTtcbiAgfVxuXG5cbiAgTG9jYXRpb24ucmVzcG9uc2VUcmFuc2Zvcm1lciA9IGZ1bmN0aW9uIChyZXNwb25zZURhdGEpIHtcbiAgICAkbG9nLmRlYnVnKCdyZXNvcG9uc2VUcmFuc2Zvcm1lciB7bGVuZ3RofScsIHJlc3BvbnNlRGF0YS5sb2NhdGlvbnMpO1xuICAgIGlmKHJlc3BvbnNlRGF0YS5sb2NhdGlvbnMpe1xuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YS5sb2NhdGlvbnNcbiAgICAgICAgICAgICAgLm1hcChMb2NhdGlvbi5idWlsZCk7ICBcbiAgICB9XG5cbiAgICAgIHJldHVybiByZXNwb25zZURhdGEubWFwKExvY2F0aW9uLmJ1aWxkKTsgIFxuXG4gICAgXG4gIH1cblxuXG4gIExvY2F0aW9uLnByb3RvdHlwZS5zZXRUcmF2ZWxUaW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAkbG9nLmRlYnVnKCdzZXRUcmF2ZWxUaW1lIHtuYW1lfScsIHRoaXMpO1xuICAgICAgXG4gICAgICB2YXIgX2xvY2F0aW9uID0gdGhpcztcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgIHZhciBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpc3RhbmNlTWF0cml4U2VydmljZTtcbiAgICAgICBzZXJ2aWNlLmdldERpc3RhbmNlTWF0cml4KHtcbiAgICAgICAgIG9yaWdpbnM6ICAgICAgIFt7bGF0OiAkcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbi5sYXRpdHVkZSwgbG5nOiRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uLmxvbmdpdHVkZX1dLFxuICAgICAgICAgZGVzdGluYXRpb25zOiAgW3tsYXQ6IHBhcnNlRmxvYXQodGhpcy5sYXQpLCBsbmc6IHBhcnNlRmxvYXQodGhpcy5sb25nKX1dLFxuICAgICAgICAgdHJhdmVsTW9kZTogICAgZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5XQUxLSU5HLFxuICAgICAgICAgdW5pdFN5c3RlbTogICAgZ29vZ2xlLm1hcHMuVW5pdFN5c3RlbS5JTVBFUklBTCxcbiAgICAgICAgIGF2b2lkSGlnaHdheXM6IGZhbHNlLFxuICAgICAgICAgYXZvaWRUb2xsczogICAgZmFsc2VcbiAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzKSB7XG4gICAgICAgICBcdF9sb2NhdGlvbi50cmF2ZWxUaW1lID0gcmVzcG9uc2Uucm93c1swXS5lbGVtZW50c1swXS5kdXJhdGlvbjtcbiAgICAgICAgICBfbG9jYXRpb24uZGlzdGFuY2UgPSByZXNwb25zZS5yb3dzWzBdLmVsZW1lbnRzWzBdLmRpc3RhbmNlO1xuICAgICAgICAgXHRkZWZlcnJlZC5yZXNvbHZlKF9sb2NhdGlvbik7XG4gICAgICAgICAvLyAkbG9nLmRlYnVnKFwie25hbWV9IC0ge3RyYXZlbFRpbWV9XCIsIF9sb2NhdGlvbik7XG4gICAgICAgICAgXG4gICAgICAgfSk7XG5cbiAgICAgICBcbiAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcblxuICB9XG5cblxuICBMb2NhdGlvbi5idWlsZCA9IGZ1bmN0aW9uKGxEYXRhKSB7XG4gICAgLy8gJGxvZy5kZWJ1ZygnYnVpbGQge25hbWV9JywgbERhdGEpO1xuICAgIC8vIExvY2F0aW9uLnNldFRyYXZlbFRpbWUobERhdGEpO1xuICAgIHJldHVybiBuZXcgTG9jYXRpb24obERhdGEpO1xuICB9XG5cbiAgIFxuXG4gIFxuIFxuICByZXR1cm4gTG9jYXRpb247XG5cblxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYnVsayA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAubW9kZWxzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBPbkNvbmZpZygkc3RhdGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJHByb3ZpZGUpIHtcbiAgXG4gIC8vYWN0aXZhdGUgTG9nRGVjb3JhdG9yXG4gIHJlcXVpcmUoJy4vdXRpbHMvbG9nZ2luZy9Mb2dEZWNvcmF0b3IuanMnKSgkcHJvdmlkZSk7XG5cbiRzdGF0ZVByb3ZpZGVyXG5cbiAgLnN0YXRlKCdhcHAnLCB7XG4gICAgdXJsOiAnL2FwcCcsXG4gICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbWVudS5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnQXBwQ3RybCcsXG4gICAgcmVzb2x2ZTp7XG4gICAgICAgIGNvb3JkaW5hdGVzOmZ1bmN0aW9uKEN1cnJlbnRDb29yZHMsICR0aW1lb3V0KSB7XG4gICAgICAgICAgICByZXR1cm4gQ3VycmVudENvb3Jkcy5nZXQoKTsgIFxuICAgICAgICB9XG4gICAgfVxuICB9KVxuICAuc3RhdGUoJ2FwcC5jb25uZWN0Jywge1xuICAgIHVybDogJy9jb25uZWN0JyxcbiAgICB2aWV3czoge1xuICAgICAgJ21lbnVDb250ZW50Jzoge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9jb25uZWN0Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQ29ubmVjdEN0cmwgYXMgQ29ubmVjdCdcbiAgICAgIH1cbiAgICB9XG4gIH0gKVxuXG4gIC5zdGF0ZSgnYXBwLmxvZ2luJywge1xuICAgIHVybDogJy9sb2dpbicsXG4gICAgdmlld3M6IHtcbiAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbG9naW4uaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwgYXMgTGduJ1xuICAgICAgfVxuICAgIH1cbiAgfSApXG4gIFxuICAuc3RhdGUoJ2FwcC5icm93c2UnLCB7XG4gICAgdXJsOiAnL2Jyb3dzZScsXG4gICAgdmlld3M6IHtcbiAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYnJvd3NlLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQnJvd3NlQ3RybCdcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgXG4gIC5zdGF0ZSgnYXBwLm1hcCcsIHtcbiAgICAgIHVybDogJy9tYXAnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ21lbnVDb250ZW50Jzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL21hcC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnTWFwQ3RybCBhcyBNYXAnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBcblxuXG4gIC8vIGlmIG5vbmUgb2YgdGhlIGFib3ZlIHN0YXRlcyBhcmUgbWF0Y2hlZCwgdXNlIHRoaXMgYXMgdGhlIGZhbGxiYWNrXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9hcHAvbWFwJyk7XG4gIFxuICBcblxuXG59Ly8vLyBPbkNvbmZpZ1xuXG5cbm1vZHVsZS5leHBvcnRzID0gT25Db25maWc7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBPblJ1bigkaW9uaWNQbGF0Zm9ybSwgJGxvZywgJGFuaW1hdGUpIHtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ09uUnVuJyk7XG4gICBcbiAgJGlvbmljUGxhdGZvcm0ucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJGFuaW1hdGUuZW5hYmxlZCh0cnVlKTtcbiAgICBcbiAgICAvLyBIaWRlIHRoZSBhY2Nlc3NvcnkgYmFyIGJ5IGRlZmF1bHQgKHJlbW92ZSB0aGlzIHRvIHNob3cgdGhlIGFjY2Vzc29yeSBiYXIgYWJvdmUgdGhlIGtleWJvYXJkXG4gICAgLy8gZm9yIGZvcm0gaW5wdXRzKVxuICAgIGlmICh3aW5kb3cuY29yZG92YSAmJiB3aW5kb3cuY29yZG92YS5wbHVnaW5zLktleWJvYXJkKSB7XG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuaGlkZUtleWJvYXJkQWNjZXNzb3J5QmFyKHRydWUpO1xuICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmRpc2FibGVTY3JvbGwodHJ1ZSk7XG5cbiAgICB9XG4gICAgaWYgKHdpbmRvdy5TdGF0dXNCYXIpIHtcbiAgICAgIC8vIG9yZy5hcGFjaGUuY29yZG92YS5zdGF0dXNiYXIgcmVxdWlyZWRcbiAgICAgIFN0YXR1c0Jhci5zdHlsZURlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uUnVuOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNlcnZpY2VzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gQ3VycmVudENvb3JkcygkcSwgJGh0dHAsICRsb2csICBBcHBTZXR0aW5ncykge1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZShcIkN1cnJlbnRDb29yZHNTZXJ2aWNlXCIpO1xuICBcbiAgdmFyIHNlcnZpY2UgPSB7fTtcblxuICBzZXJ2aWNlLmdldCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTsgICAgXG5cbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKHBvcykge1xuICAgICAgICBcbiAgICAgICRsb2cuZGVidWcoJ2xhdDoge2Nvb3Jkcy5sYXRpdHVkZX0nLHBvcyk7XG4gICAgICAkbG9nLmRlYnVnKCdsb25nOiB7Y29vcmRzLmxvbmdpdHVkZX0nLHBvcyk7XG5cbiAgICAgIGRlZmVycmVkLnJlc29sdmUocG9zLmNvb3Jkcyk7XG4gICAgICAgIFxuICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAkbG9nLndhcm4oJ1VuYWJsZSB0byBnZXQgbG9jYXRpb246ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyLCBzdGF0dXMpO1xuICAgfSk7XG5cblxuICAgIFxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ0N1cnJlbnRDb29yZHMnLCBDdXJyZW50Q29vcmRzKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIExvY2F0aW9uc1NlcnZpY2UoJGxvZywgWW9jYWwsIExvY2F0aW9uKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKFwiTG9jYXRpb25zU2VydmljZVNlcnZpY2VcIik7XG5cbiAgdmFyIHNlcnZpY2UgPSB7fTtcblxuICBzZXJ2aWNlLmdldCA9IGZ1bmN0aW9uKCBnZXREYXRhICkge1xuXG4gICAgJGxvZy5kZWJ1ZygnR0VUIGxvY2F0aW9uIGluIGEge3JhZGl1c30gIG9mIHtsYXR9LCB7bG5nfScsIGdldERhdGEpO1xuXG4gICAgcmV0dXJuIFlvY2FsLmdldChnZXREYXRhKVxuICAgICAgICAgICAgICAgIC50aGVuKExvY2F0aW9uLnJlc3BvbnNlVHJhbnNmb3JtZXIpO1xuXG4gIH07XG5cbiAgc2VydmljZS5hbGwgPSBmdW5jdGlvbiggZ2V0RGF0YSApIHtcblxuICAgICRsb2cuZGVidWcoJ0FMTCcpO1xuXG4gICAgcmV0dXJuIFlvY2FsLmFsbCgpLnRoZW4oTG9jYXRpb24ucmVzcG9uc2VUcmFuc2Zvcm1lcik7XG5cbiAgfTtcblxuICByZXR1cm4gc2VydmljZTtcblxufVxuXG5zZXJ2aWNlc01vZHVsZS5zZXJ2aWNlKCdMb2NhdGlvbnNTZXJ2aWNlJywgTG9jYXRpb25zU2VydmljZSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2VydmljZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBZb2NhbCgkcSwgJGh0dHAsIEFwcFNldHRpbmdzLCAkbG9nKSB7XG5cbiAgdmFyIHNlcnZpY2UgPSB7fTtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoXCJZb2NhbFNlcnZpY2VcIik7XG5cbiAgc2VydmljZS5nZXQgPSBmdW5jdGlvbiggZ2V0RGF0YSApIHtcbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgLy8gL2xpc3RCeURpc3RhbmNlQ2F0L0Zvb2QvODAwMC8zOS45Mzc4OTMvLTc1LjE2ODkzNDdcbiAgICRodHRwLmdldChBcHBTZXR0aW5ncy55b2NhbEFQSS5iYXNlKycvbGlzdEJ5RGlzdGFuY2VDYXQvRm9vZC8nK2dldERhdGEucmFkaXVzKycvJytnZXREYXRhLmxhdCsnLycrZ2V0RGF0YS5sbmcpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKCdmb3VuZCB7bGVuZ3RofSBzcG90cyB3aXRoaW4gJytnZXREYXRhLnJhZGl1cysnIG1ldGVycyBvZiAnK2dldERhdGEubGF0KycsJytnZXREYXRhLmxuZywgZGF0YS5sb2NhdGlvbnMpO1xuICAgICAgICBkYXRhLnJhZGl1cyA9IGdldERhdGEucmFkaXVzO1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgIH0pLmVycm9yKGZ1bmN0aW9uKGVyciwgc3RhdHVzKSB7XG4gICAgICAgICRsb2cud2FybignVW5hYmxlIHRvIGdldCBsb2NhdGlvbjogJyArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVyciwgc3RhdHVzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIHNlcnZpY2UuYWxsID0gZnVuY3Rpb24oZ2V0RGF0YSl7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgIC8vIC9saXN0QnlEaXN0YW5jZUNhdC9Gb29kLzgwMDAvMzkuOTM3ODkzLy03NS4xNjg5MzQ3XG4gICAkaHR0cC5nZXQoQXBwU2V0dGluZ3MueW9jYWxBUEkuYmFzZSsnL2xpc3QnKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZygnYWxsOiBmb3VuZCB7bGVuZ3RofSB0b3RhbCBzcG90cycsIGRhdGEpO1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgIH0pLmVycm9yKGZ1bmN0aW9uKGVyciwgc3RhdHVzKSB7XG4gICAgICAgICRsb2cud2FybignVW5hYmxlIHRvIGdldCBsb2NhdGlvbjogJyArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVyciwgc3RhdHVzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuXG4gIH1cblxuICByZXR1cm4gc2VydmljZTtcblxufVxuXG5zZXJ2aWNlc01vZHVsZS5zZXJ2aWNlKCdZb2NhbCcsIFlvY2FsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5zZXJ2aWNlcycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEV4YW1wbGVTZXJ2aWNlKCRxLCAkaHR0cCkge1xuXG4gIHZhciBzZXJ2aWNlID0ge307XG5cbiAgc2VydmljZS5nZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgJGh0dHAuZ2V0KCdhcGlQYXRoJykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVyciwgc3RhdHVzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ0V4YW1wbGVTZXJ2aWNlJywgRXhhbXBsZVNlcnZpY2UpOyIsIi8qKlxuICogQGF1dGhvciAgICAgVGhvbWFzIEJ1cmxlc29uXG4gKiBAYXV0aG9yICAgICBTdGFja092ZXJmbG93IC0gSGFydG8sIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjMxNTQwOC9ob3ctZG8taS1mb3JtYXQtYS10aW1lc3RhbXAtaW4tamF2YXNjcmlwdC10by1kaXNwbGF5LWl0LWluLWdyYXBocy11dGMtaXMtZmluZVxuICogQGRlc2NyaXB0aW9uXG4gKiAgXG4gKiBEYXRlVGltZSB1dGlsaXR5IGNsYXNzIHRoYXQgc3BpdHMgb3V0IFVUQyB0aW1lc3RhbXAgc3RyaW5ncyB1c3VhbGx5IHVzZWQgaW4gYSByZXBvcnRpbmcsIHByaW50LWNhcGFibGUgcHJvY2Vzcy5cbiovXG4gXG5cbiAndXNlIHN0cmljdCc7XG5cblxudmFyIGJ1aWxkVGltZVN0cmluZyA9IGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCBcIiVoOiVtOiVzOiV6XCI7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBhZCh2YWx1ZSwgaXNNaWxsaVNlY29uZHMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIChpc01pbGxpU2Vjb25kcykgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpc01pbGxpU2Vjb25kcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihpc01pbGxpU2Vjb25kcylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlIDwgMTApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCIwMFwiICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih2YWx1ZSA8IDEwMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIjBcIiArIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybih2YWx1ZS50b1N0cmluZygpLmxlbmd0aCA8IDIpID8gXCIwXCIgKyB2YWx1ZSA6IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoLyUoW2EtekEtWl0pL2csIGZ1bmN0aW9uIChfLCBmbXRDb2RlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN3aXRjaChmbXRDb2RlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiWVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldERhdGUoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldEhvdXJzKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNaW51dGVzKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgZm9ybWF0IGNvZGU6IFwiICsgZm10Q29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cblxuIC8vIFB1Ymxpc2ggQVBJIGZvciBEYXRlVGltZSB1dGlsc1xuICAgICAgICAvLyByZXR1cm4ge1xuICAgICAgICAvLyAgICAgZm9ybWF0dGVkTm93OiBmdW5jdGlvbiAoKVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBidWlsZFRpbWVTdHJpbmcobmV3IERhdGUoKSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIFxuIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZvcm1hdHRlZE5vdzogZnVuY3Rpb24gKCkgeyByZXR1cm4gYnVpbGRUaW1lU3RyaW5nKG5ldyBEYXRlKCkpOyB9XG4gfTtcblxuXG5cbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogTG9nRGVjb3JhdG9yXG4gKiAgQHNvdXJjZTogaHR0cDovL3NvbHV0aW9ub3B0aW1pc3QuY29tLzIwMTMvMTAvMDcvZW5oYW5jZS1hbmd1bGFyanMtbG9nZ2luZy11c2luZy1kZWNvcmF0b3JzL1xuICovXG5cbiB2YXIgTG9nRGVjb3JhdG9yID0gZnVuY3Rpb24oICRwcm92aWRlICApe1xuXG5cbiAgICAgICAgICAgICAgLy8gUmVnaXN0ZXIgb3VyICRsb2cgZGVjb3JhdG9yIHdpdGggQW5ndWxhckpTICRwcm92aWRlclxuICAgICAgICAgICAgICAkcHJvdmlkZS5kZWNvcmF0b3IoICckbG9nJywgWyBcIiRkZWxlZ2F0ZVwiLCBmdW5jdGlvbiggJGRlbGVnYXRlIClcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgLy8gTk9URTogdGhlIExvZ0VuY2hhbmNlciBtb2R1bGUgcmV0dXJucyBhIEZVTkNUSU9OIHRoYXQgd2UgbmFtZWQgYGVuY2hhbmNlTG9nZ2VyRm5gXG4gICAgICAgICAgICAgICAvLyAgICAgICBBbGwgdGhlIGRldGFpbHMgb2YgaG93IHRoZSBgZW5jaGFuY2VtZW50YCB3b3JrcyBpcyBlbmNhcHN1bGF0ZWQgaW4gTG9nRW5oYW5jZXIhXG5cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmUoJy4vTG9nRW5oYW5jZXIuanMnKSggJGRlbGVnYXRlICk7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAkZGVsZWdhdGU7XG4gICAgICAgICAgICAgIH1dKTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSAgTG9nRGVjb3JhdG9yOyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogTG9nRW5oYW5jZXJcbiAqIFRoaXMgYWRkcyB0aW1lc3RhbXBzIGFuZCBzdXBwbGFudCBmdW5jdGlvbmFsaXR5IHRvIEFuZ3VsYXIgJGxvZyBzZXJ2aWNlXG4gKiBAc291cmNlOiBodHRwOi8vc29sdXRpb25vcHRpbWlzdC5jb20vMjAxMy8xMC8wNy9lbmhhbmNlLWFuZ3VsYXJqcy1sb2dnaW5nLXVzaW5nLWRlY29yYXRvcnMvXG4gKiBAYXBpOiBwdWJsaWNcbiAqIEByZXR1cm5zOiBPYmplY3QgLSBleHRlbmRlZCAkbG9nIHNlcnZpY2VcbiAqL1xuXG52YXIgZW5jaGFuY2VMb2dnZXIgPSBmdW5jdGlvbiggJGxvZyApe1xuICB2YXIgc3VwcGxhbnQgPSByZXF1aXJlKCcuLi9zdXBwbGFudC5qcycpO1xuICB2YXIgRGF0ZVRpbWUgPSByZXF1aXJlKCcuLi9EYXRlVGltZS5qcycpO1xuXG5cbiAgLyoqXG4gICAqIENhcHR1cmUgdGhlIG9yaWdpbmFsICRsb2cgZnVuY3Rpb25zOyBmb3IgdXNlIGluIGVuaGFuY2VkTG9nRm4oKVxuICAgKiBAYXBpICBwcml2YXRlIFxuICAgKi9cbiAgXG4gIHZhciBfJGxvZyA9IChmdW5jdGlvbiggJGxvZyApe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9nICAgOiAkbG9nLmxvZyxcbiAgICAgICAgaW5mbyAgOiAkbG9nLmluZm8sXG4gICAgICAgIHdhcm4gIDogJGxvZy53YXJuLFxuICAgICAgICBkZWJ1ZyA6ICRsb2cuZGVidWcsXG4gICAgICAgIGVycm9yIDogJGxvZy5lcnJvclxuICAgICAgfTtcbiAgfSkoICRsb2cgKTsgXG5cblxuXG4gICAvKipcbiAgICAqIFBhcnRpYWwgYXBwbGljYXRpb24gdG8gcHJlLWNhcHR1cmUgYSBsb2dnZXIgZnVuY3Rpb25cbiAgICAqIEBhcGk6ICBwcml2YXRlIFxuICAgICogQHJldHVybnM6IEZ1bmN0aW9uIFxuICAgICovXG4gICAgdmFyIHByZXBhcmVMb2dGbiA9IGZ1bmN0aW9uKCBsb2dGbiwgY2xhc3NOYW1lICl7XG5cbiAgICAgIC8qKlxuICAgICAgICogSW52b2tlIHRoZSBzcGVjaWZpZWQgYGxvZ0ZuPGAgd2l0aCB0aGUgc3VwcGxhbnQgZnVuY3Rpb25hbGl0eS4uLlxuICAgICAgICogQGFwaTogcHJpdmF0ZSBcbiAgICAgICAqIEBleGFtcGxlOiBcbiAgICAgICAqICAgdmFyIHVzZXIgPSB7IHdobzpcIlRob21hcyBCdXJsZXNvblwiXCIsIGVtYWlsPVwiVGhvbWFzQnVybGVzb25AZ21haWwuY29tXCJcIiB9O1xuICAgICAgICogICAkbG9nLndhcm4oIFwiQSB3YXJuaW5nIG1lc3NhZ2UgZm9yIGB7d2hvfWAgd2lsbCBiZSBzZW50IHRvIGB7ZW1haWx9YCAhXCIsIHVzZXIgKTsgICBcbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNob3VsZCBvdXRwdXQ6IEEgd2FybmluZyBtZXNzYWdlIGZvciBgVGhvbWFzIEJ1cmxlc29uYCB3aWxsIGJlIHNlbnQgdG8gYFRob21hc0J1cmxlc29uQGdtYWlsLmNvbWAgIVxuICAgICAgICovXG4gICAgICB2YXIgZW5oYW5jZWRMb2dGbiA9IGZ1bmN0aW9uKCApe1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgICAgICBub3cgID0gRGF0ZVRpbWUuZm9ybWF0dGVkTm93KCk7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJztcbiAgICAgICAgICAgIC8vIHByZXBlbmQgYSB0aW1lc3RhbXAgdG8gdGhlIG9yaWdpbmFsIG91dHB1dCBtZXNzYWdlXG4gICAgICAgICAgICBhcmdzWzBdID0gc3VwcGxhbnQoXCJ7MH0gLSB7MX17Mn1cIiwgWyBub3csIGNsYXNzTmFtZSwgYXJnc1swXSBdKTtcblxuICAgICAgICBsb2dGbi5jYWxsKCBudWxsLCAgc3VwcGxhbnQuYXBwbHkoIG51bGwsIGFyZ3MgKSApO1xuICAgICAgfTtcblxuICAgICAgLy8gU3BlY2lhbC4uLiBvbmx5IG5lZWRlZCB0byBzdXBwb3J0IGFuZ3VsYXItbW9ja3MgZXhwZWN0YXRpb25zXG4gICAgICBlbmhhbmNlZExvZ0ZuLmxvZ3MgPSBbIF07XG4gXG4gICAgICByZXR1cm4gZW5oYW5jZWRMb2dGbjtcbiAgICAgIFxuICAgIH07XG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBTdXBwb3J0IHRvIGdlbmVyYXRlIGNsYXNzLXNwZWNpZmljIGxvZ2dlciBpbnN0YW5jZSB3aXRoIGNsYXNzbmFtZSBvbmx5XG4gICAgICpcbiAgICAgKiBAcGFyYW06IG5hbWVcbiAgICAgKiBAcmV0dXJuczogT2JqZWN0IHdyYXBwZXIgZmFjYWRlIHRvICRsb2dcbiAgICAgKi9cbiAgICB2YXIgZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiggY2xhc3NOYW1lICl7XG4gICAgICBjbGFzc05hbWUgPSAoIGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICkgPyBjbGFzc05hbWUgKyBcIjo6XCIgOiBcIlwiO1xuXG4gICAgICByZXR1cm57XG4gICAgICAgICBsb2cgICA6IHByZXBhcmVMb2dGbiggXyRsb2cubG9nLCAgICBjbGFzc05hbWUgKSxcbiAgICAgICAgIGluZm8gIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5pbmZvLCAgIGNsYXNzTmFtZSApLFxuICAgICAgICAgd2FybiAgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLndhcm4sICAgY2xhc3NOYW1lICksXG4gICAgICAgICBkZWJ1ZyA6IHByZXBhcmVMb2dGbiggXyRsb2cuZGVidWcsICBjbGFzc05hbWUgKSxcbiAgICAgICAgIC8vIGVycm9yIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5lcnJvciwgIGNsYXNzTmFtZSApXG4gICAgICB9O1xuXG4gICAgfTtcblxuXG5cbiAgICAvLyB3cmFwIGVhY2ggbG9nIG1ldGhvZCBcbiAgICAkbG9nLmxvZyAgID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmxvZyApO1xuICAgICRsb2cuaW5mbyAgPSBwcmVwYXJlTG9nRm4oICRsb2cuaW5mbyApO1xuICAgICRsb2cud2FybiAgPSBwcmVwYXJlTG9nRm4oICRsb2cud2FybiApO1xuICAgICRsb2cuZGVidWcgPSBwcmVwYXJlTG9nRm4oICRsb2cuZGVidWcgKTtcbiAgICAvLyAkbG9nLmVycm9yID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmVycm9yICk7XG5cbiAgICAvLyBBZGQgc3BlY2lhbCBtZXRob2QgdG8gQW5ndWxhckpTICRsb2dcbiAgICAkbG9nLmdldEluc3RhbmNlID0gZ2V0SW5zdGFuY2U7XG4gXG5cbiAgICByZXR1cm4gJGxvZztcbn07Ly9lbmNoYW5jZUxvZ2dlclxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSAgZW5jaGFuY2VMb2dnZXI7IiwiLyoqXG4gKiBAYXV0aG9yICAgICAgVGhvbWFzIEJ1cmxlc29uXG4gKiBAZGF0ZSAgICAgICAgTm92ZW1iZXIsIDIwMTNcbiAqIEBzb3VyY2U6ICAgICBodHRwczovL2dpdGh1Yi5jb20vVGhvbWFzQnVybGVzb24vYW5ndWxhcmpzLWxvZ0RlY29yYXRvci9ibG9iL21hc3Rlci9zcmMvbWluZHNwYWNlL3V0aWxzL3N1cHBsYW50LmpzXG4gICovXG4gXG5cbiAndXNlIHN0cmljdCc7XG5cbnZhciBzdXBwbGFudCA9ICBmdW5jdGlvbiggdGVtcGxhdGUsIHZhbHVlcywgcGF0dGVybiApIHtcbiAgICAgICAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuIHx8IC9cXHsoW15cXHtcXH1dKilcXH0vZztcblxuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UocGF0dGVybiwgZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHZhciBwID0gYi5zcGxpdCgnLicpLFxuICAgICAgICAgICAgICAgICAgICByID0gdmFsdWVzO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyBpbiBwKSB7IHIgPSByW3Bbc11dOyAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAgICAgICAgIHIgPSBhO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAodHlwZW9mIHIgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiByID09PSAnbnVtYmVyJykgPyByIDogYTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG5cbi8vIHN1cHBsYW50KCkgbWV0aG9kIGZyb20gQ3JvY2tmb3JkcyBgUmVtZWRpYWwgSmF2YXNjcmlwdGBcbkZ1bmN0aW9uLnByb3RvdHlwZS5tZXRob2QgPSBmdW5jdGlvbiAobmFtZSwgZnVuYykge1xuICAgIHRoaXMucHJvdG90eXBlW25hbWVdID0gZnVuYztcbiAgICByZXR1cm4gdGhpcztcbn07XG5cblN0cmluZy5tZXRob2QoXCJzdXBwbGFudFwiLCBmdW5jdGlvbiggdmFsdWVzLCBwYXR0ZXJuICkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICByZXR1cm4gc3VwcGxhbnQoc2VsZiwgdmFsdWVzLCBwYXR0ZXJuKTtcbn0pO1xuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9ICBTdHJpbmcuc3VwcGxhbnQgPSBzdXBwbGFudDsiXX0=
