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

MapCtrl.$inject = ["$rootScope", "$scope", "$log", "$ionicLoading", "AppSettings", "GMap", "LocationsService", "$q"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MapCtrl($rootScope, $scope, $log, $ionicLoading, AppSettings, GMap, LocationsService, $q) {

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
            var infoWNDW = vm.gmap.buildInfoWindow(locate, marker);
          });

        return vm.markers;
    };

    
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
          
          setKnobValue(vm.this_radius);
          $ionicLoading.hide();


        });//end .then







         $scope.$watch("Map.knob.value", function(newValue, oldValue) {
            // $log.log("new Map.knob.value: "+newValue);
            // $log.log("old Map.knob.value: "+oldValue);

            if(vm.locationsRadius) vm.locationsRadius.setRadius(newValue);
            
            
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1hbmltYXRlL2FuZ3VsYXItYW5pbWF0ZS5taW4uanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2Jvd2VyX2NvbXBvbmVudHMvaW9uaWMtYWR2YW5jZWQtY2Fyb3VzZWwvZGlzdC9hZHZhbmNlZC1jYXJvdXNlbC5taW4uanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2Jvd2VyX2NvbXBvbmVudHMvbmcta25vYi9kaXN0L25nLWtub2IubWluLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9hcHAtbWFpbi5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29uc3RhbnRzLmRldmVsb3BtZW50LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9BcHBDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9Ccm93c2VDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9Db25uZWN0Q3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvTG9naW5DdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9NYXBDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9QbGF5bGlzdEN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL1BsYXlsaXN0c0N0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvZGlyZWN0aXZlcy9faW5kZXguanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2RpcmVjdGl2ZXMvbUFwcExvYWRpbmdEaXJlY3RpdmUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL21vZGVscy9HTWFwLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9tb2RlbHMvTG9jYXRpb25Nb2RlbC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvbW9kZWxzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvb25fY29uZmlnLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9vbl9ydW4uanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3NlcnZpY2VzL0N1cnJlbnRDb29yZHNTZXJ2aWNlLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9Mb2NhdGlvbnNTZXJ2aWNlLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9Zb2NhbC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvX2luZGV4LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9leGFtcGxlLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9EYXRlVGltZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvdXRpbHMvbG9nZ2luZy9Mb2dEZWNvcmF0b3IuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL2xvZ2dpbmcvTG9nRW5oYW5jZXIuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL3N1cHBsYW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7O0FBS0EsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsYUFBYSxTQUFTLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLFNBQVMsT0FBTyxHQUFHLElBQUksR0FBRyxZQUFZLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxNQUFNLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sT0FBTyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRLEtBQUssRUFBRSxNQUFNO0FBQ3hnQixLQUFLLEVBQUUsR0FBRyxJQUFJLEVBQUUsR0FBRyxTQUFTLE9BQU8sRUFBRSxNQUFNLFFBQVEsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRSxTQUFTLE9BQU8sRUFBRSxHQUFHLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLE9BQU8sR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxTQUFTLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxTQUFTLEdBQUcsRUFBRSxDQUFDLE9BQU8sU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsR0FBRyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxNQUFNLEVBQUUsY0FBYyxHQUFHLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxZQUFZLE9BQU8sU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUU7QUFDbGYsRUFBRSxFQUFFLGFBQWEsVUFBVSxDQUFDLEVBQUUsb0JBQW9CLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxNQUFNLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVUsSUFBSSxLQUFLLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLGFBQWEsSUFBSSxLQUFLLEVBQUUsYUFBYSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssU0FBUyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsS0FBSyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxLQUFLLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsTUFBTTtBQUMxZixJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUssT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsWUFBWSxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLGNBQWMsRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLEdBQUcsU0FBUyxFQUFFLElBQUksS0FBSyxFQUFFLElBQUksS0FBSyxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxPQUFPLGFBQWEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLE9BQU8sTUFBTSxFQUFFLEVBQUUsaUJBQWlCLElBQUksR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLE9BQU87QUFDcmYsR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxLQUFLLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLFdBQVcsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxPQUFPLElBQUksRUFBRSxXQUFXLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUUsR0FBRyxJQUFJLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDLE9BQU8sSUFBSSxHQUFHLE1BQU0sRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLFdBQVcsR0FBRyxjQUFjLE1BQU0sQ0FBQyxFQUFFLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsWUFBWSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLEVBQUUsR0FBRyxTQUFTLEdBQUc7QUFDeGYsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLE9BQU8sTUFBTSxNQUFNLENBQUMsTUFBTSxVQUFVLENBQUMsRUFBRSxPQUFPLE9BQU8sT0FBTyxNQUFNLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sSUFBSSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsUUFBUSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxLQUFLLElBQUksRUFBRSxFQUFFLEtBQUssR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLFNBQVMsR0FBRyxFQUFFLFNBQVMsR0FBRyxFQUFFLFlBQVksR0FBRyxFQUFFLFVB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QUFFLEtBQUssS0FBSyxRQUFRLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxRQUFRLE9BQU8sS0FBSyxTQUFTLEtBQUssU0FBUyxFQUFFLEVBQUUsQ0FBQyxPQUFPLEtBQUssYUFBYSxLQUFLLEVBQUUsSUFBSSxRQUFRLFNBQVMsRUFBRSxDQUFDLE9BQU8sS0FBSyxhQUFhLFNBQVMsSUFBSSxVQUFVLFNBQVMsRUFBRSxDQUFDLE9BQU8sS0FBSyxhQUFhLFdBQVcsSUFBSSxNQUFNLFVBQVUsQ0FBQyxLQUFLLEtBQUs7QUFDN2dCLEtBQUssS0FBSyxTQUFTLE9BQU8sVUFBVSxDQUFDLEtBQUssS0FBSyxRQUFRLEtBQUssS0FBSyxVQUFVLElBQUksVUFBVSxDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssU0FBUyxDQUFDLElBQUksT0FBTyxVQUFVLENBQUMsS0FBSyxLQUFLLFFBQVEsS0FBSyxLQUFLLFNBQVMsS0FBSyxTQUFTLENBQUMsSUFBSSxTQUFTLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUscUJBQXFCLFVBQVUsQ0FBQyxFQUFFLFNBQVMsT0FBTyxTQUFTLFNBQVMsRUFBRSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUUsS0FBSyxlQUFlLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxLQUFLLGVBQWUsT0FBTyxFQUFFLEtBQUssT0FBTyxLQUFLLE9BQU8sS0FBSyxTQUFTLGlCQUFpQixDQUFDO0FBQ3plLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxVQUFVLElBQUksT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLGFBQWEsSUFBSSxPQUFPLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLEtBQUssSUFBSSxFQUFFLEtBQUssS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsWUFBWSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxLQUFLLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxFQUFFLGFBQWEsRUFBRSxPQUFPLEtBQUssU0FBUztBQUNsZ0IsRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsT0FBTyxLQUFLLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLElBQUksRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE9BQU8sS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLFFBQVEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsV0FBVyxLQUFLLEtBQUssQ0FBQyxRQUFRLGFBQWEsZUFBZSxZQUFZLFlBQVksY0FBYyxrQkFBa0IsbUJBQW1CLFdBQVcsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssU0FBUyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ25mLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxTQUFTLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsT0FBTyxJQUFJLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxLQUFLLE1BQU0sRUFBRSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsWUFBWSxLQUFLLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGFBQWEsS0FBSztBQUN4ZixHQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxPQUFPLFNBQVMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLEVBQUUsT0FBTyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsTUFBTSxPQUFPLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEdBQUcsT0FBTyxFQUFFLE9BQU8sR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsY0FBYyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO0FBQ3BmLEVBQUUsUUFBUSxFQUFFLFNBQVMsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE9BQU8sS0FBSyxFQUFFLFFBQVEsSUFBSSxJQUFJLFFBQVEsRUFBRSxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsT0FBTyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLGFBQWEsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsVUFBVSxHQUFHLEVBQUUsRUFBRSxFQUFFLFNBQVMsWUFBWSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxVQUFVLEdBQUcsR0FBRyxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsZUFBZSxFQUFFLE1BQU0sR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUUsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFO0FBQ2pmLEVBQUUsWUFBWSxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksS0FBSyxFQUFFLFVBQVUsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLE1BQU0sRUFBRSxRQUFRLEdBQUcsRUFBRSxFQUFFLEVBQUUsUUFBUSxNQUFNLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLGlCQUFpQixxQkFBcUIsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxFQUFFLElBQUksR0FBRyxPQUFPLEdBQUcsS0FBSyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxNQUFNLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsbUJBQW1CLEVBQUUsT0FBTyxHQUFHLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUc7QUFDbmYsRUFBRSxTQUFTLE1BQU0sSUFBSSxFQUFFLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsRUFBRSxXQUFXLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsaUJBQWlCLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLG9CQUFvQixFQUFFLEdBQUcsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsU0FBUyxNQUFNLElBQUksRUFBRSxFQUFFLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssdUJBQXVCLEdBQUcsS0FBSyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxvQkFBb0IsRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsU0FBUyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLFNBQVMsR0FBRztBQUM5ZixFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLGFBQWEsa0JBQWtCLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxPQUFPLElBQUksRUFBRSxzQkFBc0IsU0FBUyxFQUFFLENBQUMs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WSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsS0FBSyxLQUFLLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLFlBQVksV0FBVyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFlBQVksVUFBVSxDQUFDLEVBQUUsY0FBYyxFQUFFLGVBQWUsTUFBTSxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUU7QUFDdGYsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLElBQUksRUFBRSxRQUFRLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRSxLQUFLLEdBQUcsRUFBRSxLQUFLLElBQUksRUFBRSxHQUFHLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLEtBQUssRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxLQUFLLEVBQUUsRUFBRSxNQUFNLEtBQUssSUFBSSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLEdBQUcsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxPQUFPLE9BQU8sRUFBRSxLQUFLLEtBQUssU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksT0FBTztBQUNyZixTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxTQUFTLFFBQVEsR0FBRyxFQUFFLEVBQUUsR0FBRyxTQUFTLFFBQVEsSUFBSSxFQUFFLEVBQUUsU0FBUyxRQUFRLEdBQUcsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsVUFBVSxHQUFHLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxXQUFXLElBQUksRUFBRSxXQUFXLHFCQUFxQixFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLGVBQWUsR0FBRyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsWUFBWSxjQUFjLEVBQUUsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLE9BQU8sU0FBUyxRQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLE9BQU8sVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE9BQU8sT0FBTyxJQUFJLEVBQUUsRUFBRSxLQUFLO0FBQzdlLEdBQUcsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLFNBQVMsR0FBRyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsRUFBRSxZQUFZLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRSxZQUFZLE1BQU0sSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxXQUFX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RSxNQUFNLEtBQUssSUFBSSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSx1QkFBdUIsR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFO0FBQ3RmLENBQUMsR0FBRyxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxPQUFPLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsZUFBZSxFQUFFLEVBQUUsR0FBRyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEdBQUcsTUFBTSxLQUFLLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsTUFBTSxLQUFLLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLE1BQU0sS0FBSyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLFFBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxTQUFTLGFBQWEsRUFBRSxFQUFFLEtBQUssUUFBUSxHQUFHLEdBQUcsR0FBRyxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQztDQUNqZixFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLE9BQU8sVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssT0FBTyxNQUFNLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxtQkFBbUIsR0FBRyxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsbUJBQW1CLGFBQWEsSUFBSSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLGFBQWEsSUFBSSxFQUFFLEVBQUUsT0FBTyxJQUFJLElBQUksRUFBRSxFQUFFLE9BQU8sSUFBSSxHQUFHLElBQUksRUFBRSxPQUFPLE9BQU8sU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUM5ZSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxPQUFPLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLFVBQVUsSUFBSSxVQUFVLFFBQVEsR0FBRyxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLEVBQUUsS0FBSyxVQUFVLEdBQUcsRUFBRSxXQUFXLEdBQUcsSUFBSSxFQUFFLFVBQVUsRUFBRSxjQUFjLEdBQUcsSUFBSSxFQUFFLGNBQWMsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVB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QUFHLEVBQUUsV0FBVyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEVBQUUsR0FBRyxFQUFFLFlBQVksR0FBRyxFQUFFLEVBQUUsRUFBRSxRQUFRLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsTUFBTSxFQUFFLGFBQWEsRUFBRSxRQUFRLFlBQVksU0FBUyxDQUFDLEVBQUUsRUFBRSxRQUFRLFVBQVUsRUFBRSxDQUFDLEdBQUcsV0FBVyxFQUFFLFFBQVEsTUFBTSxFQUFFLGFBQWEsRUFBRSxRQUFRLFlBQVksU0FBUyxFQUFFLFFBQVEsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUsUUFBUSxZQUFZLFNBQVMsRUFBRSxFQUFFLENBQUMsUUFBUSxHQUFHLEVBQUUsRUFBRSxRQUFRLFVBQVUsRUFBRSxXQUFXLEVBQUUsRUFBRSxRQUFRLGNBQWMsRUFBRSxDQUFDLEdBQUcsRUFBRSxRQUFRLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxNQUFNLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxjQUFjLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLGNBQWMsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLFFBQVEsY0FBYyxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssT0FBTyxFQUFFLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLE9BQU8sRUFBRSxRQUFRLFdBQVcsS0FBSyxXQUFXLFVBQVUsZUFBZSxFQUFFLE9BQU8sRUFBRSxRQUFRLFlBQVksU0FBUyxFQUFFLHFCQUFxQixRQUFRLFFBQVEsU0FBUyxjQUFjLHVDQUF1QyxFQUFFLFFBQVEsRUFBRSxLQUFLLE1BQU0sSUFBSSxFQUFFLEVBQUUsS0FBSyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxRQUFRLEdBQUcsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsV0FBVyxLQUFLLEVBQUUsRUFBRSxHQUFHLE1BQU0sTUFBTSxrREFBa0QsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLEtBQUssSUFBSSxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxlQUFlLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFLGNBQWMsR0FBRyxVQUFVLEVBQUUsY0FBYyxFQUFFLEdBQUcsV0FBVyxFQUFFLGFBQWEsRUFBRSxRQUFRLFlBQVksU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLFFBQVEsWUFBWSxvQkFBb0IsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLFFBQVEsVUFBVSxFQUFFLEVBQUUsRUFBRSxRQUFRLFVBQVUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxRQUFRLFVBQVUsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixJQUFJLENBQUMsVUFBVSxjQUFjLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLHFCQUFxQixJQUFJLENBQUMsVUFBVSxrQkFBa0IsUUFBUSxTQUFTLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLEdBQUcsYUFBYSxZQUFZLFVBQVUsSUFBSSxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsSUFBSSxDQUFDLFVBQVUsY0FBYyxDQUFDLEdBQUcsRUFBRSxTQUFTLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRSxTQUFTLEtBQUssS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLFdBQVcsMEJBQTBCLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFLGNBQWMsR0FBRyxFQUFFLGNBQWMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEdBQUcsQ0FBQyxFQUFFLFFBQVEsWUFBWSxVQUFVLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxRQUFRLFlBQVksUUFBUSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsUUFBUSxZQUFZLGFBQWEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsY0FBYyxHQUFHLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxZQUFZLFNBQVMsRUFBRSxRQUFRLFlBQVksWUFBWSxTQUFTLEdBQUcsQ0FBQyxFQUFFLFFBQVEsWUFBWSxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLGNBQWMsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLFlBQVksU0FBUyxFQUFFLGFBQWEsRUFBRSxRQUFRLFlBQVksYUFBYSxDQUFDLEdBQUcsRUFBRSxxQkFBcUIsSUFBSSxDQUFDLFVBQVUsa0JBQWtCLFFBQVEsVUFBVSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxXQUFXLGNBQWMsU0FBUyxLQUFLLE1BQU0sT0FBTyxlQUFlLENBQUMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVEsU0FBUyxZQUFZLENBQUMsRUFBRSxjQUFjLENBQUMsU0FBUyxLQUFLLE1BQU0sS0FBSyxNQUFNLENBQUMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxRQUFRLEtBQUssUUFBUSxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxRQUFRLE9BQU8sWUFBWSxJQUFJLFVBQVUsWUFBWSxHQUFHLEVBQUUsUUFBUSxDQUFDLFdBQVcsV0FBVyx3QkFBd0IsRUFBRSxRQUFRLENBQUMsU0FBUyxXQUFXLFdBQVcsVUFBVSwyQkFBMkIsVUFBVSxDQUFDO2tCQUFhLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLEVBQUUsWUFBWSxTQUFTLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLE1BQU0sR0FBRyxXQUFXLEVBQUUsYUFBYSxLQUFLLGlCQUFpQixDQUFDLFFBQVEsSUFBSSxTQUFTLElBQUksZ0JBQWdCLE1BQU0sU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLElBQUksMEJBQTBCLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBRSxJQUFJLElBQUksRUFBRSxTQUFTLHFCQUFxQixVQUFVLEVBQUUsRUFBRSxPQUFPLEdBQUcsSUFBSSxRQUFRLE9BQU8sYUFBYSxVQUFVLHNCQUFzQixHQUFHLEVBQUUsUUFBUSxDQUFDLGFBQWEsVUFBVSxDQUFDO2tCQUFhLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLEVBQUUsU0FBUyw4R0FBOEcsTUFBTSxHQUFHLFdBQVcsRUFBRSxhQUFhLEtBQUssaUJBQWlCLENBQUMsUUFBUSxJQUFJLFNBQVMsTUFBTSxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsSUFBSSx5QkFBeUIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFFLElBQUksUUFBUSxPQUFPLGFBQWEsVUFBVSxtQkFBbUIsR0FBRyxFQUFFLFFBQVEsQ0FBQyxhQUFhOzs7QUNBbi9POzs7Ozs7O0FBT0EsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsR0FBRyxLQUFLLFNBQVMsUUFBUSxNQUFNLFFBQVEsQ0FBQyxLQUFLLFFBQVEsUUFBUSxLQUFLLE1BQU0sTUFBTSxLQUFLLFFBQVEsUUFBUSxLQUFLLE9BQU8sQ0FBQyxHQUFHLEtBQUssVUFBVSxlQUFlLFNBQVMsTUFBTSxTQUFTLFNBQVMsV0FBVyxXQUFXLENBQUMsT0FBTyxTQUFTLFVBQVUsSUFBSSxXQUFXLFlBQVksRUFBRSxTQUFTLFVBQVUsSUFBSSxXQUFXLFlBQVksRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sYUFBYSxTQUFTLGFBQWEsU0FBUyxZQUFZLGFBQWEsS0FBSyxVQUFVLGVBQWUsU0FBUyxRQUFRLFNBQVMsV0FBVyxTQUFTLFdBQVcsQ0FBQyxPQUFPLFNBQVMsVUFBVSxJQUFJLFdBQVcsWUFBWSxFQUFFLFNBQVMsVUFBVSxJQUFJLFdBQVcsWUFBWSxFQUFFLENBQUMsSUFBSSxLQUFLLEdBQUcsUUFBUSxhQUFhLFNBQVMsYUFBYSxTQUFTLFlBQVksWUFBWSxLQUFLLFVBQVUsVUFBVSxTQUFTLFlBQVksWUFBWSxXQUFXLFNBQVMsYUFBYSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxZQUFZLGFBQWEsWUFBWSxhQUFhLFdBQVcsWUFBWSxTQUFTLFVBQVUsYUFBYSxjQUFjLE9BQU8sS0FBSyxLQUFLLFVBQVUsUUFBUSxTQUFTLElBQUksSUFBSSxNQUFNLE1BQU0sTUFBTSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksT0FBTyxRQUFRLEtBQUssS0FBSyxPQUFPLEtBQUssSUFBSSxLQUFLLE1BQU0sT0FBTyxLQUFLLFlBQVksYUFBYSxLQUFLLFFBQVEsS0FBSyxFQUFFLEtBQUssS0FBSyxRQUFRLEtBQUssRUFBRSxLQUFLLE9BQU8sS0FBSyxRQUFRLFdBQVcsQ0FBQyxJQUFJLE9BQU8sS0FBSyxHQUFHLFFBQVEsT0FBTyxNQUFNLEtBQUssS0FBSyxPQUFPLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxDQUFDLElBQUksWUFBWSxTQUFTLEtBQUssUUFBUSxLQUFLLEVBQUUsSUFBSSxXQUFXLEtBQUssZUFBZSxLQUFLLFFBQVEsV0FBVyxLQUFLLFNBQVMsS0FBSyxlQUFlLEtBQUssUUFBUSxTQUFTLEtBQUssS0FBSyxRQUFRLE1BQU0sVUFBVSxhQUFhLEtBQUssUUFBUSxNQUFNLE1BQU0sS0FBSyxRQUFRLE1BQU0sWUFBWSxJQUFJLEtBQUssaUJBQWlCLFlBQVksS0FBSyxRQUFRLFdBQVcsa0JBQWtCLFlBQVksS0FBSyxRQUFRLFNBQVMsaUJBQWlCLFlBQVksS0FBSyxRQUFRLFNBQVMsb0JBQW9CLEVBQUUsaUJBQWlCLFlBQVksa0JBQWtCLFlBQVksaUJBQWlCLFlBQVksb0JBQW9CLFlBQVksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFlBQVksS0FBSyxDQUFDLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxZQUFZLEVBQUUsa0JBQWtCLEtBQUssa0JBQWtCLE1BQU0sS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLGFBQWEsS0FBSyxDQUFDLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxVQUFVLEVBQUUsbUJBQW1CLEtBQUssa0JBQWtCLEtBQUssbUJBQW1CLEtBQUssa0JBQWtCLE1BQU0sS0FBSyxRQUFRLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxFQUFFLFlBQVksV0FBVyxXQUFXLFNBQVMsS0FBSyxRQUFRLEtBQUssT0FBTyxpQkFBaUIsaUJBQWlCLEtBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxRQUFRLEtBQUssV0FBVyxrQkFBa0Isa0JBQWtCLEtBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxRQUFRLEtBQUssV0FBVyxpQkFBaUIsaUJBQWlCLEtBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxRQUFRLEtBQUssV0FBVyxvQkFBb0Isb0JBQW9CLEtBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxRQUFRLEtBQUssV0FBVyxLQUFLLFFBQVEsS0FBSyxVQUFVLFlBQVksS0FBSyxRQUFRLEtBQUssTUFBTSxZQUFZLFdBQVcsV0FBVyxLQUFLLFNBQVMsS0FBSyxVQUFVLGlCQUFpQixpQkFBaUIsV0FBVyxVQUFVLEtBQUssVUFBVSxLQUFLLFVBQVUsa0JBQWtCLGtCQUFrQixXQUFXLFdBQVcsS0FBSyxRQUFRLFFBQVEsS0FBSyxTQUFTLEtBQUssVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVcsV0FBVyxLQUFLLFFBQVEsUUFBUSxLQUFLLFlBQVksS0FBSyxVQUFVLG9CQUFvQixvQkFBb0IsV0FBVyxXQUFXLEtBQUssVUFBVSxTQUFTLFNBQVMsaUJBQWlCLGFBQWEsQ0FBQyxJQUFJLElBQUksR0FBRyxPQUFPLEtBQUssU0FBUyxPQUFPLE9BQU8sS0FBSyxRQUFRLEtBQUssUUFBUSxNQUFNLEtBQUssU0FBUyxLQUFLLFFBQVEsTUFBTSxHQUFHLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxJQUFJLEtBQUssTUFBTSxRQUFRLENBQUMsS0FBSyxLQUFLLFFBQVEsVUFBVSxLQUFLLFFBQVEsYUFBYSxDQUFDLElBQUksU0FBUyxHQUFHLEtBQUssUUFBUSxLQUFLLEtBQUssU0FBUyxLQUFLLFFBQVEsV0FBVyxTQUFTLEtBQUssUUFBUSxTQUFTLE1BQU0sS0FBSyxRQUFRLEtBQUssSUFBSSxLQUFLLE1BQU0sS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLEVBQUUsS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLFFBQVEsaUJBQWlCLEVBQUUsS0FBSyxRQUFRLGVBQWUsSUFBSSxJQUFJLE9BQU8sUUFBUSxLQUFLLEtBQUssUUFBUSxLQUFLLGNBQWMsVUFBVSxLQUFLLFlBQVksVUFBVSxNQUFNLE9BQU8sS0FBSyxRQUFRLFdBQVcsS0FBSyxFQUFFLEtBQUssUUFBUSxNQUFNLElBQUksS0FBSyxZQUFZLGFBQWEsS0FBSyxRQUFRLEtBQUssRUFBRSxNQUFNLEtBQUssUUFBUSxLQUFLLEVBQUUsSUFBSSxLQUFLLFFBQVEsTUFBTSxLQUFLLEtBQUssUUFBUSxRQUFRLFVBQVUsU0FBUyxJQUFJLEtBQUssUUFBUSxLQUFLLEtBQUssU0FBUyxLQUFLLFFBQVEsUUFBUSxPQUFPLFNBQVMsS0FBSyxRQUFRLFFBQVEsS0FBSyxNQUFNLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxZQUFZLEtBQUssY0FBYyxVQUFVLEtBQUssWUFBWSxVQUFVLE1BQU0sT0FBTyxLQUFLLFFBQVEsUUFBUSxPQUFPLEtBQUssS0FBSyxRQUFRLFFBQVEsTUFBTSxLQUFLLFlBQVksYUFBYSxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sS0FBSyxRQUFRLEtBQUssRUFBRSxJQUFJLEtBQUssUUFBUSxNQUFNLE1BQU0sR0FBRyxLQUFLLFFBQVEsTUFBTSxRQUFRLENBQUMsSUFBSSxPQUFPLFNBQVMsS0FBSyxNQUFNLEVBQUUsTUFBTSxFQUFFLGFBQWEsS0FBSyxlQUFlLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxLQUFLLFdBQVcsS0FBSyxlQUFlLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxLQUFLLEtBQUssRUFBRSxHQUFHLElBQUksS0FBSyxRQUFRLFlBQVksTUFBTSxLQUFLLFFBQVEsV0FBVyxLQUFLLEdBQUcsU0FBUyxLQUFLLFFBQVEsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssUUFBUSxNQUFNLE1BQU0sT0FBTyxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sU0FBUyxLQUFLLFFBQVEsTUFBTSxTQUFTLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxNQUFNLE1BQU0sS0FBSyxHQUFHLE1BQU0sVUFBVSxJQUFJLFVBQVUsQ0FBQyxPQUFPLE1BQU0sT0FBTyxXQUFXLGNBQWMsS0FBSyxHQUFHLEVBQUUsYUFBYSxPQUFPLEdBQUcsU0FBUyxNQUFNLENBQUMsR0FBRyxPQUFPLEtBQUssSUFBSSxPQUFPLE9BQU8sR0FBRyxPQUFPLEtBQUssSUFBSSxPQUFPLE9BQU8sRUFBRSxTQUFTLElBQUksVUFBVSxVQUFVLEtBQUssTUFBTSxRQUFRLE9BQU8sVUFBVSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksS0FBSyxLQUFLLFFBQVEsTUFBTSxhQUFhLEdBQUcsVUFBVSxLQUFLLFFBQVEsTUFBTSxLQUFLLENBQUMsSUFBSSxPQUFPLEtBQUssUUFBUSxNQUFNLE9BQU8sT0FBTyxLQUFLLFFBQVEsS0FBSyxFQUFFLFNBQVMsS0FBSyxRQUFRLE1BQU0sU0FBUyxLQUFLLEdBQUcsTUFBTSxVQUFVLElBQUksVUFBVSxDQUFDLE9BQU8sTUFBTSxPQUFPLFdBQVcsY0FBYyxLQUFLLEdBQUcsRUFBRSxhQUFhLE9BQU8sR0FBRyxTQUFTLE1BQU0sQ0FBQyxHQUFHLE9BQU8sS0FBSyxJQUFJLE9BQU8sT0FBTyxHQUFHLE9BQU8sS0FBSyxJQUFJLE9BQU8sT0FBTyxHQUFHLE9BQU8sS0FBSyxJQUFJLFFBQVEsT0FBTyxRQUFRLEdBQUcsT0FBTyxLQUFLLElBQUksUUFBUSxPQUFPLFdBQVcsSUFBSSxVQUFVLFFBQVEsS0FBSyxNQUFNLFFBQVEsT0FBTyxRQUFRLEtBQUssQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksR0FBRyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLGVBQWUsS0FBSyxRQUFRLE1BQU0sTUFBTSxPQUFPLEtBQUssUUFBUSxNQUFNLFNBQVMsU0FBUyxLQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxVQUFVLENBQUMsS0FBSyxLQUFLLFFBQVEsS0FBSyxRQUFRLEtBQUssUUFBUSxJQUFJLEtBQUssU0FBUyxXQUFXLENBQUMsS0FBSyxLQUFLLFFBQVEsYUFBYSxLQUFLLFFBQVEsZ0JBQWdCLEtBQUssV0FBVyxLQUFLLFFBQVEsSUFBSSxLQUFLLFVBQVUsWUFBWSxDQUFDLEtBQUssS0FBSyxRQUFRLGVBQWUsS0FBSyxXQUFXLEtBQUssUUFBUSxJQUFJLEtBQUssVUFBVSxZQUFZLENBQUMsZUFBZSxJQUFJLEtBQUssVUFBVSxLQUFLLFFBQVEsSUFBSSxLQUFLLFNBQVMsV0FBVyxDQUFDLEtBQUssS0FBSyxRQUFRLFdBQVcsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLFdBQVcsT0FBTyxXQUFXLEtBQUssUUFBUSxJQUFJLEtBQUssWUFBWSxjQUFjLENBQUMsZUFBZSxFQUFFLE9BQU8sUUFBUSxpQkFBaUIsZUFBZSxLQUFLLFVBQVUsS0FBSyxTQUFTLE9BQU8sQ0FBQyxTQUFTLGlCQUFpQixDQUFDLEtBQUssT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxFQUFFLEtBQUssUUFBUSxLQUFLLEVBQUUsRUFBRSxHQUFHLE1BQU0sRUFBRSxLQUFLLFFBQVEsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLGtCQUFrQixDQUFDLEtBQUssT0FBTyxDQUFDLEVBQUUsSUFBSSxPQUFPLEdBQUcsTUFBTSxLQUFLLFlBQVksRUFBRSxPQUFPLEdBQUcsS0FBSyxRQUFRLEtBQUssRUFBRSxFQUFFLE9BQU8sR0FBRyxLQUFLLFFBQVEsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLFlBQVksRUFBRSxFQUFFLFFBQVEsQ0FBQyxJQUFJLFFBQVEsTUFBTSxJQUFJLEtBQUssS0FBSyxFQUFFLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsTUFBTSxJQUFJLE1BQU0sSUFBSSxLQUFLLFFBQVEsV0FBVyxJQUFJLE1BQU0sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxNQUFNLE1BQU0sS0FBSyxHQUFHLEtBQUssS0FBSyxNQUFNLEtBQUssZUFBZSxRQUFRLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxZQUFZLEtBQUssT0FBTyxLQUFLLFFBQVEsS0FBSyxLQUFLLE9BQU8sS0FBSyxRQUFRLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxLQUFLLE1BQU0sS0FBSyxRQUFRLE1BQU0sS0FBSyxRQUFRLEtBQUssS0FBSyxJQUFJLEtBQUssUUFBUSxLQUFLLElBQUksS0FBSyxNQUFNLEtBQUssTUFBTSxRQUFRLElBQUksT0FBTyxLQUFLLE9BQU8sS0FBSyxTQUFTLFNBQVMsS0FBSyxlQUFlLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsTUFBTSxLQUFLLFVBQVUsS0FBSyxJQUFJLEtBQUssVUFBVSxVQUFVLEtBQUssVUFBVSxTQUFTLEtBQUssZUFBZSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLE1BQU0sS0FBSyxXQUFXLEtBQUssSUFBSSxLQUFLLFlBQVksS0FBSyxRQUFRLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLFFBQVEsaUJBQWlCLEVBQUUsS0FBSyxRQUFRLGVBQWUsSUFBSSxHQUFHLE9BQU8sS0FBSyxTQUFTLE9BQU8sU0FBUyxLQUFLLEVBQUUsS0FBSyxRQUFRLE1BQU0sS0FBSyxHQUFHLE9BQU8sS0FBSyxTQUFTLE9BQU8sT0FBTyxTQUFTLElBQUksS0FBSyxLQUFLLEtBQUssYUFBYSxJQUFJLGFBQWEsR0FBRyxTQUFTLE9BQU8sR0FBRyxPQUFPLGlCQUFpQixHQUFHLFVBQVUsa0JBQWtCLEtBQUssU0FBUyxpQkFBaUIsY0FBYyxLQUFLLFFBQVEsUUFBUSxRQUFRLEtBQUssVUFBVSxhQUFhLEtBQUssS0FBSyxRQUFRLFFBQVEsTUFBTSxTQUFTLEtBQUssUUFBUSxRQUFRLFVBQVUsTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxZQUFZLEtBQUssZUFBZSxLQUFLLFFBQVEsV0FBVyxLQUFLLEtBQUssZUFBZSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLE1BQU0sT0FBTyxTQUFTLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxHQUFHLEtBQUssVUFBVSxLQUFLLElBQUksS0FBSyxTQUFTLFNBQVMsTUFBTSxLQUFLLFdBQVcsS0FBSyxJQUFJLEtBQUssVUFBVSxTQUFTLFVBQVUsS0FBSyxVQUFVLFNBQVMsS0FBSyxlQUFlLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsTUFBTSxLQUFLLFdBQVcsS0FBSyxJQUFJLEtBQUssV0FBVyxLQUFLLFNBQVMsU0FBUyxLQUFLLGVBQWUsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxNQUFNLEtBQUssVUFBVSxLQUFLLElBQUksS0FBSyxZQUFZLEtBQUssVUFBVSxTQUFTLFNBQVMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsS0FBSyxPQUFPLEtBQUssUUFBUSxLQUFLLEtBQUssT0FBTyxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksUUFBUSxLQUFLLGVBQWUsU0FBUyxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsS0FBSyxHQUFHLEtBQUssTUFBTSxLQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxJQUFJLFNBQVMsS0FBSyxRQUFRLE1BQU0sS0FBSyxRQUFRLEtBQUssS0FBSyxJQUFJLEtBQUssUUFBUSxLQUFLLElBQUksS0FBSyxNQUFNLEtBQUssTUFBTSxRQUFRLElBQUksS0FBSyxVQUFVLFNBQVMsU0FBUyxHQUFHLE9BQU8sS0FBSyxTQUFTLE9BQU8sY0FBYyxLQUFLLElBQUksS0FBSyxXQUFXLEtBQUssU0FBUyxTQUFTLFNBQVMs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QUFLLGNBQWM7OztJQUduQixPQUFPOzs7OztBQUtYLE9BQU8sV0FBVyxlQUFlOzs7QUN4R2pDOzs7Ozs7O0NBT0M7O0FBRUQsSUFBSSxZQUFZLFVBQVUsVUFBVSxRQUFRLFVBQVU7WUFDMUMsVUFBVSxXQUFXOztZQUVyQixPQUFPLFNBQVMsUUFBUSxTQUFTLFNBQVMsR0FBRyxHQUFHO2dCQUM1QyxJQUFJLElBQUksRUFBRSxNQUFNO29CQUNaLElBQUk7O2dCQUVSLElBQUk7b0JBQ0EsS0FBSyxJQUFJLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO2tCQUM3QixNQUFNLEVBQUU7b0JBQ04sSUFBSTs7O2dCQUdSLE9BQU8sQ0FBQyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxJQUFJOzs7Ozs7QUFNOUUsU0FBUyxVQUFVLFNBQVMsVUFBVSxNQUFNLE1BQU07SUFDOUMsS0FBSyxVQUFVLFFBQVE7SUFDdkIsT0FBTzs7O0FBR1gsT0FBTyxPQUFPLFlBQVksVUFBVSxRQUFRLFVBQVU7SUFDbEQsSUFBSSxPQUFPO0lBQ1gsT0FBTyxTQUFTLE1BQU0sUUFBUTs7Ozs7O0FBTWxDLE9BQU8sV0FBVyxPQUFPLFdBQVcsU0FBUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuIEFuZ3VsYXJKUyB2MS40LjNcbiAoYykgMjAxMC0yMDE1IEdvb2dsZSwgSW5jLiBodHRwOi8vYW5ndWxhcmpzLm9yZ1xuIExpY2Vuc2U6IE1JVFxuKi9cbihmdW5jdGlvbihGLHQsVyl7J3VzZSBzdHJpY3QnO2Z1bmN0aW9uIHVhKGEsYixjKXtpZighYSl0aHJvdyBuZ01pbkVycihcImFyZXFcIixifHxcIj9cIixjfHxcInJlcXVpcmVkXCIpO3JldHVybiBhfWZ1bmN0aW9uIHZhKGEsYil7aWYoIWEmJiFiKXJldHVyblwiXCI7aWYoIWEpcmV0dXJuIGI7aWYoIWIpcmV0dXJuIGE7WChhKSYmKGE9YS5qb2luKFwiIFwiKSk7WChiKSYmKGI9Yi5qb2luKFwiIFwiKSk7cmV0dXJuIGErXCIgXCIrYn1mdW5jdGlvbiBFYShhKXt2YXIgYj17fTthJiYoYS50b3x8YS5mcm9tKSYmKGIudG89YS50byxiLmZyb209YS5mcm9tKTtyZXR1cm4gYn1mdW5jdGlvbiBiYShhLGIsYyl7dmFyIGQ9XCJcIjthPVgoYSk/YTphJiZVKGEpJiZhLmxlbmd0aD9hLnNwbGl0KC9cXHMrLyk6W107dShhLGZ1bmN0aW9uKGEscyl7YSYmMDxhLmxlbmd0aCYmKGQrPTA8cz9cIiBcIjpcIlwiLGQrPWM/YithOmErYil9KTtyZXR1cm4gZH1mdW5jdGlvbiBGYShhKXtpZihhIGluc3RhbmNlb2YgRylzd2l0Y2goYS5sZW5ndGgpe2Nhc2UgMDpyZXR1cm5bXTtcbmNhc2UgMTppZigxPT09YVswXS5ub2RlVHlwZSlyZXR1cm4gYTticmVhaztkZWZhdWx0OnJldHVybiBHKGthKGEpKX1pZigxPT09YS5ub2RlVHlwZSlyZXR1cm4gRyhhKX1mdW5jdGlvbiBrYShhKXtpZighYVswXSlyZXR1cm4gYTtmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXTtpZigxPT1jLm5vZGVUeXBlKXJldHVybiBjfX1mdW5jdGlvbiBHYShhLGIsYyl7dShiLGZ1bmN0aW9uKGIpe2EuYWRkQ2xhc3MoYixjKX0pfWZ1bmN0aW9uIEhhKGEsYixjKXt1KGIsZnVuY3Rpb24oYil7YS5yZW1vdmVDbGFzcyhiLGMpfSl9ZnVuY3Rpb24gaGEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7Yy5hZGRDbGFzcyYmKEdhKGEsYixjLmFkZENsYXNzKSxjLmFkZENsYXNzPW51bGwpO2MucmVtb3ZlQ2xhc3MmJihIYShhLGIsYy5yZW1vdmVDbGFzcyksYy5yZW1vdmVDbGFzcz1udWxsKX19ZnVuY3Rpb24gaWEoYSl7YT1hfHx7fTtpZighYS4kJHByZXBhcmVkKXt2YXIgYj1hLmRvbU9wZXJhdGlvbnx8XG5IO2EuZG9tT3BlcmF0aW9uPWZ1bmN0aW9uKCl7YS4kJGRvbU9wZXJhdGlvbkZpcmVkPSEwO2IoKTtiPUh9O2EuJCRwcmVwYXJlZD0hMH1yZXR1cm4gYX1mdW5jdGlvbiBjYShhLGIpe3dhKGEsYik7eGEoYSxiKX1mdW5jdGlvbiB3YShhLGIpe2IuZnJvbSYmKGEuY3NzKGIuZnJvbSksYi5mcm9tPW51bGwpfWZ1bmN0aW9uIHhhKGEsYil7Yi50byYmKGEuY3NzKGIudG8pLGIudG89bnVsbCl9ZnVuY3Rpb24gUihhLGIsYyl7dmFyIGQ9KGIuYWRkQ2xhc3N8fFwiXCIpK1wiIFwiKyhjLmFkZENsYXNzfHxcIlwiKSxlPShiLnJlbW92ZUNsYXNzfHxcIlwiKStcIiBcIisoYy5yZW1vdmVDbGFzc3x8XCJcIik7YT1JYShhLmF0dHIoXCJjbGFzc1wiKSxkLGUpO3lhKGIsYyk7Yi5hZGRDbGFzcz1hLmFkZENsYXNzP2EuYWRkQ2xhc3M6bnVsbDtiLnJlbW92ZUNsYXNzPWEucmVtb3ZlQ2xhc3M/YS5yZW1vdmVDbGFzczpudWxsO3JldHVybiBifWZ1bmN0aW9uIElhKGEsYixjKXtmdW5jdGlvbiBkKGEpe1UoYSkmJihhPWEuc3BsaXQoXCIgXCIpKTtcbnZhciBiPXt9O3UoYSxmdW5jdGlvbihhKXthLmxlbmd0aCYmKGJbYV09ITApfSk7cmV0dXJuIGJ9dmFyIGU9e307YT1kKGEpO2I9ZChiKTt1KGIsZnVuY3Rpb24oYSxiKXtlW2JdPTF9KTtjPWQoYyk7dShjLGZ1bmN0aW9uKGEsYil7ZVtiXT0xPT09ZVtiXT9udWxsOi0xfSk7dmFyIHM9e2FkZENsYXNzOlwiXCIscmVtb3ZlQ2xhc3M6XCJcIn07dShlLGZ1bmN0aW9uKGIsYyl7dmFyIGQsZTsxPT09Yj8oZD1cImFkZENsYXNzXCIsZT0hYVtjXSk6LTE9PT1iJiYoZD1cInJlbW92ZUNsYXNzXCIsZT1hW2NdKTtlJiYoc1tkXS5sZW5ndGgmJihzW2RdKz1cIiBcIiksc1tkXSs9Yyl9KTtyZXR1cm4gc31mdW5jdGlvbiB6KGEpe3JldHVybiBhIGluc3RhbmNlb2YgdC5lbGVtZW50P2FbMF06YX1mdW5jdGlvbiB6YShhLGIsYyl7dmFyIGQ9T2JqZWN0LmNyZWF0ZShudWxsKSxlPWEuZ2V0Q29tcHV0ZWRTdHlsZShiKXx8e307dShjLGZ1bmN0aW9uKGEsYil7dmFyIGM9ZVthXTtpZihjKXt2YXIgaz1jLmNoYXJBdCgwKTtcbmlmKFwiLVwiPT09a3x8XCIrXCI9PT1rfHwwPD1rKWM9SmEoYyk7MD09PWMmJihjPW51bGwpO2RbYl09Y319KTtyZXR1cm4gZH1mdW5jdGlvbiBKYShhKXt2YXIgYj0wO2E9YS5zcGxpdCgvXFxzKixcXHMqLyk7dShhLGZ1bmN0aW9uKGEpe1wic1wiPT1hLmNoYXJBdChhLmxlbmd0aC0xKSYmKGE9YS5zdWJzdHJpbmcoMCxhLmxlbmd0aC0xKSk7YT1wYXJzZUZsb2F0KGEpfHwwO2I9Yj9NYXRoLm1heChhLGIpOmF9KTtyZXR1cm4gYn1mdW5jdGlvbiBsYShhKXtyZXR1cm4gMD09PWF8fG51bGwhPWF9ZnVuY3Rpb24gQWEoYSxiKXt2YXIgYz1PLGQ9YStcInNcIjtiP2MrPVwiRHVyYXRpb25cIjpkKz1cIiBsaW5lYXIgYWxsXCI7cmV0dXJuW2MsZF19ZnVuY3Rpb24gamEoYSxiKXt2YXIgYz1iP1wiLVwiK2IrXCJzXCI6XCJcIjtkYShhLFtlYSxjXSk7cmV0dXJuW2VhLGNdfWZ1bmN0aW9uIG1hKGEsYil7dmFyIGM9Yj9cInBhdXNlZFwiOlwiXCIsZD1WK1wiUGxheVN0YXRlXCI7ZGEoYSxbZCxjXSk7cmV0dXJuW2QsY119ZnVuY3Rpb24gZGEoYSxcbmIpe2Euc3R5bGVbYlswXV09YlsxXX1mdW5jdGlvbiBCYSgpe3ZhciBhPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue2ZsdXNoOmZ1bmN0aW9uKCl7YT1PYmplY3QuY3JlYXRlKG51bGwpfSxjb3VudDpmdW5jdGlvbihiKXtyZXR1cm4oYj1hW2JdKT9iLnRvdGFsOjB9LGdldDpmdW5jdGlvbihiKXtyZXR1cm4oYj1hW2JdKSYmYi52YWx1ZX0scHV0OmZ1bmN0aW9uKGIsYyl7YVtiXT9hW2JdLnRvdGFsKys6YVtiXT17dG90YWw6MSx2YWx1ZTpjfX19fXZhciBIPXQubm9vcCx5YT10LmV4dGVuZCxHPXQuZWxlbWVudCx1PXQuZm9yRWFjaCxYPXQuaXNBcnJheSxVPXQuaXNTdHJpbmcsbmE9dC5pc09iamVjdCxLYT10LmlzVW5kZWZpbmVkLExhPXQuaXNEZWZpbmVkLENhPXQuaXNGdW5jdGlvbixvYT10LmlzRWxlbWVudCxPLHBhLFYscWE7Ri5vbnRyYW5zaXRpb25lbmQ9PT1XJiZGLm9ud2Via2l0dHJhbnNpdGlvbmVuZCE9PVc/KE89XCJXZWJraXRUcmFuc2l0aW9uXCIscGE9XCJ3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmRcIik6XG4oTz1cInRyYW5zaXRpb25cIixwYT1cInRyYW5zaXRpb25lbmRcIik7Ri5vbmFuaW1hdGlvbmVuZD09PVcmJkYub253ZWJraXRhbmltYXRpb25lbmQhPT1XPyhWPVwiV2Via2l0QW5pbWF0aW9uXCIscWE9XCJ3ZWJraXRBbmltYXRpb25FbmQgYW5pbWF0aW9uZW5kXCIpOihWPVwiYW5pbWF0aW9uXCIscWE9XCJhbmltYXRpb25lbmRcIik7dmFyIHJhPVYrXCJEZWxheVwiLHNhPVYrXCJEdXJhdGlvblwiLGVhPU8rXCJEZWxheVwiO0Y9TytcIkR1cmF0aW9uXCI7dmFyIE1hPXt0cmFuc2l0aW9uRHVyYXRpb246Rix0cmFuc2l0aW9uRGVsYXk6ZWEsdHJhbnNpdGlvblByb3BlcnR5Ok8rXCJQcm9wZXJ0eVwiLGFuaW1hdGlvbkR1cmF0aW9uOnNhLGFuaW1hdGlvbkRlbGF5OnJhLGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OlYrXCJJdGVyYXRpb25Db3VudFwifSxOYT17dHJhbnNpdGlvbkR1cmF0aW9uOkYsdHJhbnNpdGlvbkRlbGF5OmVhLGFuaW1hdGlvbkR1cmF0aW9uOnNhLGFuaW1hdGlvbkRlbGF5OnJhfTt0Lm1vZHVsZShcIm5nQW5pbWF0ZVwiLFxuW10pLmRpcmVjdGl2ZShcIm5nQW5pbWF0ZUNoaWxkcmVuXCIsW2Z1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGEsYixjKXthPWMubmdBbmltYXRlQ2hpbGRyZW47dC5pc1N0cmluZyhhKSYmMD09PWEubGVuZ3RoP2IuZGF0YShcIiQkbmdBbmltYXRlQ2hpbGRyZW5cIiwhMCk6Yy4kb2JzZXJ2ZShcIm5nQW5pbWF0ZUNoaWxkcmVuXCIsZnVuY3Rpb24oYSl7Yi5kYXRhKFwiJCRuZ0FuaW1hdGVDaGlsZHJlblwiLFwib25cIj09PWF8fFwidHJ1ZVwiPT09YSl9KX19XSkuZmFjdG9yeShcIiQkckFGTXV0ZXhcIixbXCIkJHJBRlwiLGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe3ZhciBiPSExO2EoZnVuY3Rpb24oKXtiPSEwfSk7cmV0dXJuIGZ1bmN0aW9uKGMpe2I/YygpOmEoYyl9fX1dKS5mYWN0b3J5KFwiJCRyQUZTY2hlZHVsZXJcIixbXCIkJHJBRlwiLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSl7ZC5wdXNoKFtdLmNvbmNhdChhKSk7YygpfWZ1bmN0aW9uIGMoKXtpZihkLmxlbmd0aCl7Zm9yKHZhciBiPVtdLG49XG4wO248ZC5sZW5ndGg7bisrKXt2YXIgaD1kW25dO2guc2hpZnQoKSgpO2gubGVuZ3RoJiZiLnB1c2goaCl9ZD1iO2V8fGEoZnVuY3Rpb24oKXtlfHxjKCl9KX19dmFyIGQ9W10sZTtiLndhaXRVbnRpbFF1aWV0PWZ1bmN0aW9uKGIpe2UmJmUoKTtlPWEoZnVuY3Rpb24oKXtlPW51bGw7YigpO2MoKX0pfTtyZXR1cm4gYn1dKS5mYWN0b3J5KFwiJCRBbmltYXRlUnVubmVyXCIsW1wiJHFcIixcIiQkckFGTXV0ZXhcIixmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSl7dGhpcy5zZXRIb3N0KGEpO3RoaXMuX2RvbmVDYWxsYmFja3M9W107dGhpcy5fcnVuSW5BbmltYXRpb25GcmFtZT1iKCk7dGhpcy5fc3RhdGU9MH1jLmNoYWluPWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYygpe2lmKG49PT1hLmxlbmd0aCliKCEwKTtlbHNlIGFbbl0oZnVuY3Rpb24oYSl7ITE9PT1hP2IoITEpOihuKyssYygpKX0pfXZhciBuPTA7YygpfTtjLmFsbD1mdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMocyl7aD1oJiZzOysrbj09PVxuYS5sZW5ndGgmJmIoaCl9dmFyIG49MCxoPSEwO3UoYSxmdW5jdGlvbihhKXthLmRvbmUoYyl9KX07Yy5wcm90b3R5cGU9e3NldEhvc3Q6ZnVuY3Rpb24oYSl7dGhpcy5ob3N0PWF8fHt9fSxkb25lOmZ1bmN0aW9uKGEpezI9PT10aGlzLl9zdGF0ZT9hKCk6dGhpcy5fZG9uZUNhbGxiYWNrcy5wdXNoKGEpfSxwcm9ncmVzczpILGdldFByb21pc2U6ZnVuY3Rpb24oKXtpZighdGhpcy5wcm9taXNlKXt2YXIgYj10aGlzO3RoaXMucHJvbWlzZT1hKGZ1bmN0aW9uKGEsYyl7Yi5kb25lKGZ1bmN0aW9uKGIpeyExPT09Yj9jKCk6YSgpfSl9KX1yZXR1cm4gdGhpcy5wcm9taXNlfSx0aGVuOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZ2V0UHJvbWlzZSgpLnRoZW4oYSxiKX0sXCJjYXRjaFwiOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmdldFByb21pc2UoKVtcImNhdGNoXCJdKGEpfSxcImZpbmFsbHlcIjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5nZXRQcm9taXNlKClbXCJmaW5hbGx5XCJdKGEpfSxwYXVzZTpmdW5jdGlvbigpe3RoaXMuaG9zdC5wYXVzZSYmXG50aGlzLmhvc3QucGF1c2UoKX0scmVzdW1lOmZ1bmN0aW9uKCl7dGhpcy5ob3N0LnJlc3VtZSYmdGhpcy5ob3N0LnJlc3VtZSgpfSxlbmQ6ZnVuY3Rpb24oKXt0aGlzLmhvc3QuZW5kJiZ0aGlzLmhvc3QuZW5kKCk7dGhpcy5fcmVzb2x2ZSghMCl9LGNhbmNlbDpmdW5jdGlvbigpe3RoaXMuaG9zdC5jYW5jZWwmJnRoaXMuaG9zdC5jYW5jZWwoKTt0aGlzLl9yZXNvbHZlKCExKX0sY29tcGxldGU6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczswPT09Yi5fc3RhdGUmJihiLl9zdGF0ZT0xLGIuX3J1bkluQW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtiLl9yZXNvbHZlKGEpfSkpfSxfcmVzb2x2ZTpmdW5jdGlvbihhKXsyIT09dGhpcy5fc3RhdGUmJih1KHRoaXMuX2RvbmVDYWxsYmFja3MsZnVuY3Rpb24oYil7YihhKX0pLHRoaXMuX2RvbmVDYWxsYmFja3MubGVuZ3RoPTAsdGhpcy5fc3RhdGU9Mil9fTtyZXR1cm4gY31dKS5wcm92aWRlcihcIiQkYW5pbWF0ZVF1ZXVlXCIsW1wiJGFuaW1hdGVQcm92aWRlclwiLFxuZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhLGIsYyxoKXtyZXR1cm4gZFthXS5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiBhKGIsYyxoKX0pfWZ1bmN0aW9uIGMoYSxiKXthPWF8fHt9O3ZhciBjPTA8KGEuYWRkQ2xhc3N8fFwiXCIpLmxlbmd0aCxkPTA8KGEucmVtb3ZlQ2xhc3N8fFwiXCIpLmxlbmd0aDtyZXR1cm4gYj9jJiZkOmN8fGR9dmFyIGQ9dGhpcy5ydWxlcz17c2tpcDpbXSxjYW5jZWw6W10sam9pbjpbXX07ZC5qb2luLnB1c2goZnVuY3Rpb24oYSxiLGQpe3JldHVybiFiLnN0cnVjdHVyYWwmJmMoYi5vcHRpb25zKX0pO2Quc2tpcC5wdXNoKGZ1bmN0aW9uKGEsYixkKXtyZXR1cm4hYi5zdHJ1Y3R1cmFsJiYhYyhiLm9wdGlvbnMpfSk7ZC5za2lwLnB1c2goZnVuY3Rpb24oYSxiLGMpe3JldHVyblwibGVhdmVcIj09Yy5ldmVudCYmYi5zdHJ1Y3R1cmFsfSk7ZC5za2lwLnB1c2goZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjLnN0cnVjdHVyYWwmJiFiLnN0cnVjdHVyYWx9KTtkLmNhbmNlbC5wdXNoKGZ1bmN0aW9uKGEsXG5iLGMpe3JldHVybiBjLnN0cnVjdHVyYWwmJmIuc3RydWN0dXJhbH0pO2QuY2FuY2VsLnB1c2goZnVuY3Rpb24oYSxiLGMpe3JldHVybiAyPT09Yy5zdGF0ZSYmYi5zdHJ1Y3R1cmFsfSk7ZC5jYW5jZWwucHVzaChmdW5jdGlvbihhLGIsYyl7YT1iLm9wdGlvbnM7Yz1jLm9wdGlvbnM7cmV0dXJuIGEuYWRkQ2xhc3MmJmEuYWRkQ2xhc3M9PT1jLnJlbW92ZUNsYXNzfHxhLnJlbW92ZUNsYXNzJiZhLnJlbW92ZUNsYXNzPT09Yy5hZGRDbGFzc30pO3RoaXMuJGdldD1bXCIkJHJBRlwiLFwiJHJvb3RTY29wZVwiLFwiJHJvb3RFbGVtZW50XCIsXCIkZG9jdW1lbnRcIixcIiQkSGFzaE1hcFwiLFwiJCRhbmltYXRpb25cIixcIiQkQW5pbWF0ZVJ1bm5lclwiLFwiJHRlbXBsYXRlUmVxdWVzdFwiLFwiJCRqcUxpdGVcIixmdW5jdGlvbihkLHMsbixoLGssRCxBLFosSSl7ZnVuY3Rpb24gdyhhLGIpe3ZhciBjPXooYSksZj1bXSxtPWxbYl07bSYmdShtLGZ1bmN0aW9uKGEpe2Eubm9kZS5jb250YWlucyhjKSYmZi5wdXNoKGEuY2FsbGJhY2spfSk7XG5yZXR1cm4gZn1mdW5jdGlvbiBCKGEsYixjLGYpe2QoZnVuY3Rpb24oKXt1KHcoYixhKSxmdW5jdGlvbihhKXthKGIsYyxmKX0pfSl9ZnVuY3Rpb24gcihhLFMscCl7ZnVuY3Rpb24gZChiLGMsZixwKXtCKGMsYSxmLHApO2IucHJvZ3Jlc3MoYyxmLHApfWZ1bmN0aW9uIGcoYil7RGEoYSxwKTtjYShhLHApO3AuZG9tT3BlcmF0aW9uKCk7bC5jb21wbGV0ZSghYil9dmFyIFAsRTtpZihhPUZhKGEpKVA9eihhKSxFPWEucGFyZW50KCk7cD1pYShwKTt2YXIgbD1uZXcgQTtpZighUClyZXR1cm4gZygpLGw7WChwLmFkZENsYXNzKSYmKHAuYWRkQ2xhc3M9cC5hZGRDbGFzcy5qb2luKFwiIFwiKSk7WChwLnJlbW92ZUNsYXNzKSYmKHAucmVtb3ZlQ2xhc3M9cC5yZW1vdmVDbGFzcy5qb2luKFwiIFwiKSk7cC5mcm9tJiYhbmEocC5mcm9tKSYmKHAuZnJvbT1udWxsKTtwLnRvJiYhbmEocC50bykmJihwLnRvPW51bGwpO3ZhciBlPVtQLmNsYXNzTmFtZSxwLmFkZENsYXNzLHAucmVtb3ZlQ2xhc3NdLmpvaW4oXCIgXCIpO1xuaWYoIXYoZSkpcmV0dXJuIGcoKSxsO3ZhciBNPTA8PVtcImVudGVyXCIsXCJtb3ZlXCIsXCJsZWF2ZVwiXS5pbmRleE9mKFMpLGg9IXh8fEwuZ2V0KFApLGU9IWgmJm0uZ2V0KFApfHx7fSxrPSEhZS5zdGF0ZTtofHxrJiYxPT1lLnN0YXRlfHwoaD0hdGEoYSxFLFMpKTtpZihoKXJldHVybiBnKCksbDtNJiZLKGEpO2g9e3N0cnVjdHVyYWw6TSxlbGVtZW50OmEsZXZlbnQ6UyxjbG9zZTpnLG9wdGlvbnM6cCxydW5uZXI6bH07aWYoayl7aWYoYihcInNraXBcIixhLGgsZSkpe2lmKDI9PT1lLnN0YXRlKXJldHVybiBnKCksbDtSKGEsZS5vcHRpb25zLHApO3JldHVybiBlLnJ1bm5lcn1pZihiKFwiY2FuY2VsXCIsYSxoLGUpKTI9PT1lLnN0YXRlP2UucnVubmVyLmVuZCgpOmUuc3RydWN0dXJhbD9lLmNsb3NlKCk6UihhLGgub3B0aW9ucyxlLm9wdGlvbnMpO2Vsc2UgaWYoYihcImpvaW5cIixhLGgsZSkpaWYoMj09PWUuc3RhdGUpUihhLHAse30pO2Vsc2UgcmV0dXJuIFM9aC5ldmVudD1lLmV2ZW50LHA9UihhLFxuZS5vcHRpb25zLGgub3B0aW9ucyksbH1lbHNlIFIoYSxwLHt9KTsoaz1oLnN0cnVjdHVyYWwpfHwoaz1cImFuaW1hdGVcIj09PWguZXZlbnQmJjA8T2JqZWN0LmtleXMoaC5vcHRpb25zLnRvfHx7fSkubGVuZ3RofHxjKGgub3B0aW9ucykpO2lmKCFrKXJldHVybiBnKCksQyhhKSxsO00mJmYoRSk7dmFyIHI9KGUuY291bnRlcnx8MCkrMTtoLmNvdW50ZXI9cjtnYShhLDEsaCk7cy4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXt2YXIgYj1tLmdldChQKSx2PSFiLGI9Ynx8e30sZT1hLnBhcmVudCgpfHxbXSxFPTA8ZS5sZW5ndGgmJihcImFuaW1hdGVcIj09PWIuZXZlbnR8fGIuc3RydWN0dXJhbHx8YyhiLm9wdGlvbnMpKTtpZih2fHxiLmNvdW50ZXIhPT1yfHwhRSl7diYmKERhKGEscCksY2EoYSxwKSk7aWYodnx8TSYmYi5ldmVudCE9PVMpcC5kb21PcGVyYXRpb24oKSxsLmVuZCgpO0V8fEMoYSl9ZWxzZSBTPSFiLnN0cnVjdHVyYWwmJmMoYi5vcHRpb25zLCEwKT9cInNldENsYXNzXCI6Yi5ldmVudCxcbmIuc3RydWN0dXJhbCYmZihlKSxnYShhLDIpLGI9RChhLFMsYi5vcHRpb25zKSxiLmRvbmUoZnVuY3Rpb24oYil7ZyghYik7KGI9bS5nZXQoUCkpJiZiLmNvdW50ZXI9PT1yJiZDKHooYSkpO2QobCxTLFwiY2xvc2VcIix7fSl9KSxsLnNldEhvc3QoYiksZChsLFMsXCJzdGFydFwiLHt9KX0pO3JldHVybiBsfWZ1bmN0aW9uIEsoYSl7YT16KGEpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1uZy1hbmltYXRlXVwiKTt1KGEsZnVuY3Rpb24oYSl7dmFyIGI9cGFyc2VJbnQoYS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5nLWFuaW1hdGVcIikpLGM9bS5nZXQoYSk7c3dpdGNoKGIpe2Nhc2UgMjpjLnJ1bm5lci5lbmQoKTtjYXNlIDE6YyYmbS5yZW1vdmUoYSl9fSl9ZnVuY3Rpb24gQyhhKXthPXooYSk7YS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLW5nLWFuaW1hdGVcIik7bS5yZW1vdmUoYSl9ZnVuY3Rpb24gRShhLGIpe3JldHVybiB6KGEpPT09eihiKX1mdW5jdGlvbiBmKGEpe2E9eihhKTtkb3tpZighYXx8MSE9PVxuYS5ub2RlVHlwZSlicmVhazt2YXIgYj1tLmdldChhKTtpZihiKXt2YXIgZj1hOyFiLnN0cnVjdHVyYWwmJmMoYi5vcHRpb25zKSYmKDI9PT1iLnN0YXRlJiZiLnJ1bm5lci5lbmQoKSxDKGYpKX1hPWEucGFyZW50Tm9kZX13aGlsZSgxKX1mdW5jdGlvbiB0YShhLGIsYyl7dmFyIGY9Yz0hMSxkPSExLHY7Zm9yKChhPWEuZGF0YShcIiRuZ0FuaW1hdGVQaW5cIikpJiYoYj1hKTtiJiZiLmxlbmd0aDspe2Z8fChmPUUoYixuKSk7YT1iWzBdO2lmKDEhPT1hLm5vZGVUeXBlKWJyZWFrO3ZhciBlPW0uZ2V0KGEpfHx7fTtkfHwoZD1lLnN0cnVjdHVyYWx8fEwuZ2V0KGEpKTtpZihLYSh2KXx8ITA9PT12KWE9Yi5kYXRhKFwiJCRuZ0FuaW1hdGVDaGlsZHJlblwiKSxMYShhKSYmKHY9YSk7aWYoZCYmITE9PT12KWJyZWFrO2Z8fChmPUUoYixuKSxmfHwoYT1iLmRhdGEoXCIkbmdBbmltYXRlUGluXCIpKSYmKGI9YSkpO2N8fChjPUUoYixnKSk7Yj1iLnBhcmVudCgpfXJldHVybighZHx8dikmJmYmJmN9ZnVuY3Rpb24gZ2EoYSxcbmIsYyl7Yz1jfHx7fTtjLnN0YXRlPWI7YT16KGEpO2Euc2V0QXR0cmlidXRlKFwiZGF0YS1uZy1hbmltYXRlXCIsYik7Yz0oYj1tLmdldChhKSk/eWEoYixjKTpjO20ucHV0KGEsYyl9dmFyIG09bmV3IGssTD1uZXcgayx4PW51bGwsTT1zLiR3YXRjaChmdW5jdGlvbigpe3JldHVybiAwPT09Wi50b3RhbFBlbmRpbmdSZXF1ZXN0c30sZnVuY3Rpb24oYSl7YSYmKE0oKSxzLiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe3MuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7bnVsbD09PXgmJih4PSEwKX0pfSkpfSksZz1HKGhbMF0uYm9keSksbD17fSxQPWEuY2xhc3NOYW1lRmlsdGVyKCksdj1QP2Z1bmN0aW9uKGEpe3JldHVybiBQLnRlc3QoYSl9OmZ1bmN0aW9uKCl7cmV0dXJuITB9LERhPWhhKEkpO3JldHVybntvbjpmdW5jdGlvbihhLGIsYyl7Yj1rYShiKTtsW2FdPWxbYV18fFtdO2xbYV0ucHVzaCh7bm9kZTpiLGNhbGxiYWNrOmN9KX0sb2ZmOmZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBmKGEsXG5iLGMpe3ZhciBkPWthKGIpO3JldHVybiBhLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4hKGEubm9kZT09PWQmJighY3x8YS5jYWxsYmFjaz09PWMpKX0pfXZhciBkPWxbYV07ZCYmKGxbYV09MT09PWFyZ3VtZW50cy5sZW5ndGg/bnVsbDpmKGQsYixjKSl9LHBpbjpmdW5jdGlvbihhLGIpe3VhKG9hKGEpLFwiZWxlbWVudFwiLFwibm90IGFuIGVsZW1lbnRcIik7dWEob2EoYiksXCJwYXJlbnRFbGVtZW50XCIsXCJub3QgYW4gZWxlbWVudFwiKTthLmRhdGEoXCIkbmdBbmltYXRlUGluXCIsYil9LHB1c2g6ZnVuY3Rpb24oYSxiLGMsZil7Yz1jfHx7fTtjLmRvbU9wZXJhdGlvbj1mO3JldHVybiByKGEsYixjKX0sZW5hYmxlZDpmdW5jdGlvbihhLGIpe3ZhciBjPWFyZ3VtZW50cy5sZW5ndGg7aWYoMD09PWMpYj0hIXg7ZWxzZSBpZihvYShhKSl7dmFyIGY9eihhKSxkPUwuZ2V0KGYpOzE9PT1jP2I9IWQ6KGI9ISFiKT9kJiZMLnJlbW92ZShmKTpMLnB1dChmLCEwKX1lbHNlIGI9eD0hIWE7cmV0dXJuIGJ9fX1dfV0pLnByb3ZpZGVyKFwiJCRhbmltYXRpb25cIixcbltcIiRhbmltYXRlUHJvdmlkZXJcIixmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe3JldHVybiBhLmRhdGEoXCIkJGFuaW1hdGlvblJ1bm5lclwiKX12YXIgYz10aGlzLmRyaXZlcnM9W107dGhpcy4kZ2V0PVtcIiQkanFMaXRlXCIsXCIkcm9vdFNjb3BlXCIsXCIkaW5qZWN0b3JcIixcIiQkQW5pbWF0ZVJ1bm5lclwiLFwiJCRyQUZTY2hlZHVsZXJcIixmdW5jdGlvbihhLGUscyxuLGgpe3ZhciBrPVtdLEQ9aGEoYSksQT0wLFo9MCxJPVtdO3JldHVybiBmdW5jdGlvbih3LEIscil7ZnVuY3Rpb24gSyhhKXthPWEuaGFzQXR0cmlidXRlKFwibmctYW5pbWF0ZS1yZWZcIik/W2FdOmEucXVlcnlTZWxlY3RvckFsbChcIltuZy1hbmltYXRlLXJlZl1cIik7dmFyIGI9W107dShhLGZ1bmN0aW9uKGEpe3ZhciBjPWEuZ2V0QXR0cmlidXRlKFwibmctYW5pbWF0ZS1yZWZcIik7YyYmYy5sZW5ndGgmJmIucHVzaChhKX0pO3JldHVybiBifWZ1bmN0aW9uIEMoYSl7dmFyIGI9W10sYz17fTt1KGEsZnVuY3Rpb24oYSxmKXt2YXIgZD16KGEuZWxlbWVudCksXG5tPTA8PVtcImVudGVyXCIsXCJtb3ZlXCJdLmluZGV4T2YoYS5ldmVudCksZD1hLnN0cnVjdHVyYWw/SyhkKTpbXTtpZihkLmxlbmd0aCl7dmFyIGc9bT9cInRvXCI6XCJmcm9tXCI7dShkLGZ1bmN0aW9uKGEpe3ZhciBiPWEuZ2V0QXR0cmlidXRlKFwibmctYW5pbWF0ZS1yZWZcIik7Y1tiXT1jW2JdfHx7fTtjW2JdW2ddPXthbmltYXRpb25JRDpmLGVsZW1lbnQ6RyhhKX19KX1lbHNlIGIucHVzaChhKX0pO3ZhciBmPXt9LGQ9e307dShjLGZ1bmN0aW9uKGMsbSl7dmFyIGc9Yy5mcm9tLGU9Yy50bztpZihnJiZlKXt2YXIgbD1hW2cuYW5pbWF0aW9uSURdLGg9YVtlLmFuaW1hdGlvbklEXSx4PWcuYW5pbWF0aW9uSUQudG9TdHJpbmcoKTtpZighZFt4XSl7dmFyIEI9ZFt4XT17c3RydWN0dXJhbDohMCxiZWZvcmVTdGFydDpmdW5jdGlvbigpe2wuYmVmb3JlU3RhcnQoKTtoLmJlZm9yZVN0YXJ0KCl9LGNsb3NlOmZ1bmN0aW9uKCl7bC5jbG9zZSgpO2guY2xvc2UoKX0sY2xhc3NlczpFKGwuY2xhc3NlcyxoLmNsYXNzZXMpLFxuZnJvbTpsLHRvOmgsYW5jaG9yczpbXX07Qi5jbGFzc2VzLmxlbmd0aD9iLnB1c2goQik6KGIucHVzaChsKSxiLnB1c2goaCkpfWRbeF0uYW5jaG9ycy5wdXNoKHtvdXQ6Zy5lbGVtZW50LFwiaW5cIjplLmVsZW1lbnR9KX1lbHNlIGc9Zz9nLmFuaW1hdGlvbklEOmUuYW5pbWF0aW9uSUQsZT1nLnRvU3RyaW5nKCksZltlXXx8KGZbZV09ITAsYi5wdXNoKGFbZ10pKX0pO3JldHVybiBifWZ1bmN0aW9uIEUoYSxiKXthPWEuc3BsaXQoXCIgXCIpO2I9Yi5zcGxpdChcIiBcIik7Zm9yKHZhciBjPVtdLGY9MDtmPGEubGVuZ3RoO2YrKyl7dmFyIGQ9YVtmXTtpZihcIm5nLVwiIT09ZC5zdWJzdHJpbmcoMCwzKSlmb3IodmFyIGc9MDtnPGIubGVuZ3RoO2crKylpZihkPT09YltnXSl7Yy5wdXNoKGQpO2JyZWFrfX1yZXR1cm4gYy5qb2luKFwiIFwiKX1mdW5jdGlvbiBmKGEpe2Zvcih2YXIgYj1jLmxlbmd0aC0xOzA8PWI7Yi0tKXt2YXIgZj1jW2JdO2lmKHMuaGFzKGYpJiYoZj1zLmdldChmKShhKSkpcmV0dXJuIGZ9fVxuZnVuY3Rpb24gdGEoYSxjKXthLmZyb20mJmEudG8/KGIoYS5mcm9tLmVsZW1lbnQpLnNldEhvc3QoYyksYihhLnRvLmVsZW1lbnQpLnNldEhvc3QoYykpOmIoYS5lbGVtZW50KS5zZXRIb3N0KGMpfWZ1bmN0aW9uIGdhKCl7dmFyIGE9Yih3KTshYXx8XCJsZWF2ZVwiPT09QiYmci4kJGRvbU9wZXJhdGlvbkZpcmVkfHxhLmVuZCgpfWZ1bmN0aW9uIG0oYil7dy5vZmYoXCIkZGVzdHJveVwiLGdhKTt3LnJlbW92ZURhdGEoXCIkJGFuaW1hdGlvblJ1bm5lclwiKTtEKHcscik7Y2EodyxyKTtyLmRvbU9wZXJhdGlvbigpO2cmJmEucmVtb3ZlQ2xhc3ModyxnKTt3LnJlbW92ZUNsYXNzKFwibmctYW5pbWF0ZVwiKTt4LmNvbXBsZXRlKCFiKX1yPWlhKHIpO3ZhciBMPTA8PVtcImVudGVyXCIsXCJtb3ZlXCIsXCJsZWF2ZVwiXS5pbmRleE9mKEIpLHg9bmV3IG4oe2VuZDpmdW5jdGlvbigpe20oKX0sY2FuY2VsOmZ1bmN0aW9uKCl7bSghMCl9fSk7aWYoIWMubGVuZ3RoKXJldHVybiBtKCkseDt3LmRhdGEoXCIkJGFuaW1hdGlvblJ1bm5lclwiLFxueCk7dmFyIE09dmEody5hdHRyKFwiY2xhc3NcIiksdmEoci5hZGRDbGFzcyxyLnJlbW92ZUNsYXNzKSksZz1yLnRlbXBDbGFzc2VzO2cmJihNKz1cIiBcIitnLHIudGVtcENsYXNzZXM9bnVsbCk7dmFyIGw7THx8KGw9QSxBKz0xKTtrLnB1c2goe2VsZW1lbnQ6dyxjbGFzc2VzOk0sZXZlbnQ6QixjbGFzc0Jhc2VkSW5kZXg6bCxzdHJ1Y3R1cmFsOkwsb3B0aW9uczpyLGJlZm9yZVN0YXJ0OmZ1bmN0aW9uKCl7dy5hZGRDbGFzcyhcIm5nLWFuaW1hdGVcIik7ZyYmYS5hZGRDbGFzcyh3LGcpfSxjbG9zZTptfSk7dy5vbihcIiRkZXN0cm95XCIsZ2EpO2lmKDE8ay5sZW5ndGgpcmV0dXJuIHg7ZS4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXtaPUE7QT0wO0kubGVuZ3RoPTA7dmFyIGE9W107dShrLGZ1bmN0aW9uKGMpe2IoYy5lbGVtZW50KSYmYS5wdXNoKGMpfSk7ay5sZW5ndGg9MDt1KEMoYSksZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYygpe2EuYmVmb3JlU3RhcnQoKTt2YXIgZCxnPWEuY2xvc2UsZT1hLmFuY2hvcnM/XG5hLmZyb20uZWxlbWVudHx8YS50by5lbGVtZW50OmEuZWxlbWVudDtiKGUpJiZ6KGUpLnBhcmVudE5vZGUmJihlPWYoYSkpJiYoZD1lLnN0YXJ0KTtkPyhkPWQoKSxkLmRvbmUoZnVuY3Rpb24oYSl7ZyghYSl9KSx0YShhLGQpKTpnKCl9YS5zdHJ1Y3R1cmFsP2MoKTooSS5wdXNoKHtub2RlOnooYS5lbGVtZW50KSxmbjpjfSksYS5jbGFzc0Jhc2VkSW5kZXg9PT1aLTEmJihJPUkuc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBiLm5vZGUuY29udGFpbnMoYS5ub2RlKX0pLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5mbn0pLGgoSSkpKX0pfSk7cmV0dXJuIHh9fV19XSkucHJvdmlkZXIoXCIkYW5pbWF0ZUNzc1wiLFtcIiRhbmltYXRlUHJvdmlkZXJcIixmdW5jdGlvbihhKXt2YXIgYj1CYSgpLGM9QmEoKTt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLFwiJCRqcUxpdGVcIixcIiQkQW5pbWF0ZVJ1bm5lclwiLFwiJHRpbWVvdXRcIixcIiRkb2N1bWVudFwiLFwiJHNuaWZmZXJcIixcIiQkckFGU2NoZWR1bGVyXCIsZnVuY3Rpb24oYSxcbmUscyxuLGgsayxEKXtmdW5jdGlvbiBBKGEsYil7dmFyIGM9YS5wYXJlbnROb2RlO3JldHVybihjLiQkbmdBbmltYXRlUGFyZW50S2V5fHwoYy4kJG5nQW5pbWF0ZVBhcmVudEtleT0rK3IpKStcIi1cIithLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpK1wiLVwiK2J9ZnVuY3Rpb24gWihoLGYsQixrKXt2YXIgbTswPGIuY291bnQoQikmJihtPWMuZ2V0KEIpLG18fChmPWJhKGYsXCItc3RhZ2dlclwiKSxlLmFkZENsYXNzKGgsZiksbT16YShhLGgsayksbS5hbmltYXRpb25EdXJhdGlvbj1NYXRoLm1heChtLmFuaW1hdGlvbkR1cmF0aW9uLDApLG0udHJhbnNpdGlvbkR1cmF0aW9uPU1hdGgubWF4KG0udHJhbnNpdGlvbkR1cmF0aW9uLDApLGUucmVtb3ZlQ2xhc3MoaCxmKSxjLnB1dChCLG0pKSk7cmV0dXJuIG18fHt9fWZ1bmN0aW9uIEkoYSl7Qy5wdXNoKGEpO0Qud2FpdFVudGlsUXVpZXQoZnVuY3Rpb24oKXtiLmZsdXNoKCk7Yy5mbHVzaCgpO2Zvcih2YXIgYT1LLm9mZnNldFdpZHRoKzEsZD0wO2Q8XG5DLmxlbmd0aDtkKyspQ1tkXShhKTtDLmxlbmd0aD0wfSl9ZnVuY3Rpb24gdyhjLGYsZSl7Zj1iLmdldChlKTtmfHwoZj16YShhLGMsTWEpLFwiaW5maW5pdGVcIj09PWYuYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQmJihmLmFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50PTEpKTtiLnB1dChlLGYpO2M9ZjtlPWMuYW5pbWF0aW9uRGVsYXk7Zj1jLnRyYW5zaXRpb25EZWxheTtjLm1heERlbGF5PWUmJmY/TWF0aC5tYXgoZSxmKTplfHxmO2MubWF4RHVyYXRpb249TWF0aC5tYXgoYy5hbmltYXRpb25EdXJhdGlvbipjLmFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50LGMudHJhbnNpdGlvbkR1cmF0aW9uKTtyZXR1cm4gY312YXIgQj1oYShlKSxyPTAsSz16KGgpLmJvZHksQz1bXTtyZXR1cm4gZnVuY3Rpb24oYSxjKXtmdW5jdGlvbiBkKCl7bSgpfWZ1bmN0aW9uIGgoKXttKCEwKX1mdW5jdGlvbiBtKGIpe2lmKCEoS3x8QyYmRCkpe0s9ITA7RD0hMTtlLnJlbW92ZUNsYXNzKGEsWSk7ZS5yZW1vdmVDbGFzcyhhLFxuVyk7bWEoZywhMSk7amEoZywhMSk7dShsLGZ1bmN0aW9uKGEpe2cuc3R5bGVbYVswXV09XCJcIn0pO0IoYSxjKTtjYShhLGMpO2lmKGMub25Eb25lKWMub25Eb25lKCk7cCYmcC5jb21wbGV0ZSghYil9fWZ1bmN0aW9uIEwoYSl7cS5ibG9ja1RyYW5zaXRpb24mJmphKGcsYSk7cS5ibG9ja0tleWZyYW1lQW5pbWF0aW9uJiZtYShnLCEhYSl9ZnVuY3Rpb24geCgpe3A9bmV3IHMoe2VuZDpkLGNhbmNlbDpofSk7bSgpO3JldHVybnskJHdpbGxBbmltYXRlOiExLHN0YXJ0OmZ1bmN0aW9uKCl7cmV0dXJuIHB9LGVuZDpkfX1mdW5jdGlvbiBNKCl7ZnVuY3Rpb24gYigpe2lmKCFLKXtMKCExKTt1KGwsZnVuY3Rpb24oYSl7Zy5zdHlsZVthWzBdXT1hWzFdfSk7QihhLGMpO2UuYWRkQ2xhc3MoYSxXKTtpZihxLnJlY2FsY3VsYXRlVGltaW5nU3R5bGVzKXtmYT1nLmNsYXNzTmFtZStcIiBcIitZOyQ9QShnLGZhKTt5PXcoZyxmYSwkKTtRPXkubWF4RGVsYXk7SD1NYXRoLm1heChRLDApO0o9eS5tYXhEdXJhdGlvbjtcbmlmKDA9PT1KKXttKCk7cmV0dXJufXEuaGFzVHJhbnNpdGlvbnM9MDx5LnRyYW5zaXRpb25EdXJhdGlvbjtxLmhhc0FuaW1hdGlvbnM9MDx5LmFuaW1hdGlvbkR1cmF0aW9ufWlmKHEuYXBwbHlUcmFuc2l0aW9uRGVsYXl8fHEuYXBwbHlBbmltYXRpb25EZWxheSl7UT1cImJvb2xlYW5cIiE9PXR5cGVvZiBjLmRlbGF5JiZsYShjLmRlbGF5KT9wYXJzZUZsb2F0KGMuZGVsYXkpOlE7SD1NYXRoLm1heChRLDApO3ZhciBrO3EuYXBwbHlUcmFuc2l0aW9uRGVsYXkmJih5LnRyYW5zaXRpb25EZWxheT1RLGs9W2VhLFErXCJzXCJdLGwucHVzaChrKSxnLnN0eWxlW2tbMF1dPWtbMV0pO3EuYXBwbHlBbmltYXRpb25EZWxheSYmKHkuYW5pbWF0aW9uRGVsYXk9USxrPVtyYSxRK1wic1wiXSxsLnB1c2goayksZy5zdHlsZVtrWzBdXT1rWzFdKX1GPTFFMypIO0c9MUUzKko7aWYoYy5lYXNpbmcpe3ZhciByPWMuZWFzaW5nO3EuaGFzVHJhbnNpdGlvbnMmJihrPU8rXCJUaW1pbmdGdW5jdGlvblwiLGwucHVzaChbayxcbnJdKSxnLnN0eWxlW2tdPXIpO3EuaGFzQW5pbWF0aW9ucyYmKGs9VitcIlRpbWluZ0Z1bmN0aW9uXCIsbC5wdXNoKFtrLHJdKSxnLnN0eWxlW2tdPXIpfXkudHJhbnNpdGlvbkR1cmF0aW9uJiZwLnB1c2gocGEpO3kuYW5pbWF0aW9uRHVyYXRpb24mJnAucHVzaChxYSk7eD1EYXRlLm5vdygpO2Eub24ocC5qb2luKFwiIFwiKSxoKTtuKGQsRisxLjUqRyk7eGEoYSxjKX19ZnVuY3Rpb24gZCgpe20oKX1mdW5jdGlvbiBoKGEpe2Euc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGI9YS5vcmlnaW5hbEV2ZW50fHxhO2E9Yi4kbWFudWFsVGltZVN0YW1wfHxiLnRpbWVTdGFtcHx8RGF0ZS5ub3coKTtiPXBhcnNlRmxvYXQoYi5lbGFwc2VkVGltZS50b0ZpeGVkKDMpKTtNYXRoLm1heChhLXgsMCk+PUYmJmI+PUomJihDPSEwLG0oKSl9aWYoIUspaWYoZy5wYXJlbnROb2RlKXt2YXIgeCxwPVtdLGs9ZnVuY3Rpb24oYSl7aWYoQylEJiZhJiYoRD0hMSxtKCkpO2Vsc2UgaWYoRD0hYSx5LmFuaW1hdGlvbkR1cmF0aW9uKWlmKGE9XG5tYShnLEQpLEQpbC5wdXNoKGEpO2Vsc2V7dmFyIGI9bCxjPWIuaW5kZXhPZihhKTswPD1hJiZiLnNwbGljZShjLDEpfX0scj0wPFUmJih5LnRyYW5zaXRpb25EdXJhdGlvbiYmMD09PVQudHJhbnNpdGlvbkR1cmF0aW9ufHx5LmFuaW1hdGlvbkR1cmF0aW9uJiYwPT09VC5hbmltYXRpb25EdXJhdGlvbikmJk1hdGgubWF4KFQuYW5pbWF0aW9uRGVsYXksVC50cmFuc2l0aW9uRGVsYXkpO3I/bihiLE1hdGguZmxvb3IocipVKjFFMyksITEpOmIoKTt0LnJlc3VtZT1mdW5jdGlvbigpe2soITApfTt0LnBhdXNlPWZ1bmN0aW9uKCl7ayghMSl9fWVsc2UgbSgpfXZhciBnPXooYSk7aWYoIWd8fCFnLnBhcmVudE5vZGUpcmV0dXJuIHgoKTtjPWlhKGMpO3ZhciBsPVtdLHI9YS5hdHRyKFwiY2xhc3NcIiksdj1FYShjKSxLLEQsQyxwLHQsSCxGLEosRztpZigwPT09Yy5kdXJhdGlvbnx8IWsuYW5pbWF0aW9ucyYmIWsudHJhbnNpdGlvbnMpcmV0dXJuIHgoKTt2YXIgYWE9Yy5ldmVudCYmWChjLmV2ZW50KT9cbmMuZXZlbnQuam9pbihcIiBcIik6Yy5ldmVudCxSPVwiXCIsTj1cIlwiO2FhJiZjLnN0cnVjdHVyYWw/Uj1iYShhYSxcIm5nLVwiLCEwKTphYSYmKFI9YWEpO2MuYWRkQ2xhc3MmJihOKz1iYShjLmFkZENsYXNzLFwiLWFkZFwiKSk7Yy5yZW1vdmVDbGFzcyYmKE4ubGVuZ3RoJiYoTis9XCIgXCIpLE4rPWJhKGMucmVtb3ZlQ2xhc3MsXCItcmVtb3ZlXCIpKTtjLmFwcGx5Q2xhc3Nlc0Vhcmx5JiZOLmxlbmd0aCYmKEIoYSxjKSxOPVwiXCIpO3ZhciBZPVtSLE5dLmpvaW4oXCIgXCIpLnRyaW0oKSxmYT1yK1wiIFwiK1ksVz1iYShZLFwiLWFjdGl2ZVwiKSxyPXYudG8mJjA8T2JqZWN0LmtleXModi50bykubGVuZ3RoO2lmKCEoMDwoYy5rZXlmcmFtZVN0eWxlfHxcIlwiKS5sZW5ndGh8fHJ8fFkpKXJldHVybiB4KCk7dmFyICQsVDswPGMuc3RhZ2dlcj8odj1wYXJzZUZsb2F0KGMuc3RhZ2dlciksVD17dHJhbnNpdGlvbkRlbGF5OnYsYW5pbWF0aW9uRGVsYXk6dix0cmFuc2l0aW9uRHVyYXRpb246MCxhbmltYXRpb25EdXJhdGlvbjowfSk6XG4oJD1BKGcsZmEpLFQ9WihnLFksJCxOYSkpO2UuYWRkQ2xhc3MoYSxZKTtjLnRyYW5zaXRpb25TdHlsZSYmKHY9W08sYy50cmFuc2l0aW9uU3R5bGVdLGRhKGcsdiksbC5wdXNoKHYpKTswPD1jLmR1cmF0aW9uJiYodj0wPGcuc3R5bGVbT10ubGVuZ3RoLHY9QWEoYy5kdXJhdGlvbix2KSxkYShnLHYpLGwucHVzaCh2KSk7Yy5rZXlmcmFtZVN0eWxlJiYodj1bVixjLmtleWZyYW1lU3R5bGVdLGRhKGcsdiksbC5wdXNoKHYpKTt2YXIgVT1UPzA8PWMuc3RhZ2dlckluZGV4P2Muc3RhZ2dlckluZGV4OmIuY291bnQoJCk6MDsoYWE9MD09PVUpJiZqYShnLDk5OTkpO3ZhciB5PXcoZyxmYSwkKSxRPXkubWF4RGVsYXk7SD1NYXRoLm1heChRLDApO0o9eS5tYXhEdXJhdGlvbjt2YXIgcT17fTtxLmhhc1RyYW5zaXRpb25zPTA8eS50cmFuc2l0aW9uRHVyYXRpb247cS5oYXNBbmltYXRpb25zPTA8eS5hbmltYXRpb25EdXJhdGlvbjtxLmhhc1RyYW5zaXRpb25BbGw9cS5oYXNUcmFuc2l0aW9ucyYmXG5cImFsbFwiPT15LnRyYW5zaXRpb25Qcm9wZXJ0eTtxLmFwcGx5VHJhbnNpdGlvbkR1cmF0aW9uPXImJihxLmhhc1RyYW5zaXRpb25zJiYhcS5oYXNUcmFuc2l0aW9uQWxsfHxxLmhhc0FuaW1hdGlvbnMmJiFxLmhhc1RyYW5zaXRpb25zKTtxLmFwcGx5QW5pbWF0aW9uRHVyYXRpb249Yy5kdXJhdGlvbiYmcS5oYXNBbmltYXRpb25zO3EuYXBwbHlUcmFuc2l0aW9uRGVsYXk9bGEoYy5kZWxheSkmJihxLmFwcGx5VHJhbnNpdGlvbkR1cmF0aW9ufHxxLmhhc1RyYW5zaXRpb25zKTtxLmFwcGx5QW5pbWF0aW9uRGVsYXk9bGEoYy5kZWxheSkmJnEuaGFzQW5pbWF0aW9ucztxLnJlY2FsY3VsYXRlVGltaW5nU3R5bGVzPTA8Ti5sZW5ndGg7aWYocS5hcHBseVRyYW5zaXRpb25EdXJhdGlvbnx8cS5hcHBseUFuaW1hdGlvbkR1cmF0aW9uKUo9Yy5kdXJhdGlvbj9wYXJzZUZsb2F0KGMuZHVyYXRpb24pOkoscS5hcHBseVRyYW5zaXRpb25EdXJhdGlvbiYmKHEuaGFzVHJhbnNpdGlvbnM9ITAseS50cmFuc2l0aW9uRHVyYXRpb249XG5KLHY9MDxnLnN0eWxlW08rXCJQcm9wZXJ0eVwiXS5sZW5ndGgsbC5wdXNoKEFhKEosdikpKSxxLmFwcGx5QW5pbWF0aW9uRHVyYXRpb24mJihxLmhhc0FuaW1hdGlvbnM9ITAseS5hbmltYXRpb25EdXJhdGlvbj1KLGwucHVzaChbc2EsSitcInNcIl0pKTtpZigwPT09SiYmIXEucmVjYWxjdWxhdGVUaW1pbmdTdHlsZXMpcmV0dXJuIHgoKTtudWxsPT1jLmR1cmF0aW9uJiYwPHkudHJhbnNpdGlvbkR1cmF0aW9uJiYocS5yZWNhbGN1bGF0ZVRpbWluZ1N0eWxlcz1xLnJlY2FsY3VsYXRlVGltaW5nU3R5bGVzfHxhYSk7Rj0xRTMqSDtHPTFFMypKO2Muc2tpcEJsb2NraW5nfHwocS5ibG9ja1RyYW5zaXRpb249MDx5LnRyYW5zaXRpb25EdXJhdGlvbixxLmJsb2NrS2V5ZnJhbWVBbmltYXRpb249MDx5LmFuaW1hdGlvbkR1cmF0aW9uJiYwPFQuYW5pbWF0aW9uRGVsYXkmJjA9PT1ULmFuaW1hdGlvbkR1cmF0aW9uKTt3YShhLGMpO3EuYmxvY2tUcmFuc2l0aW9ufHxqYShnLCExKTtMKEopO3JldHVybnskJHdpbGxBbmltYXRlOiEwLFxuZW5kOmQsc3RhcnQ6ZnVuY3Rpb24oKXtpZighSylyZXR1cm4gdD17ZW5kOmQsY2FuY2VsOmgscmVzdW1lOm51bGwscGF1c2U6bnVsbH0scD1uZXcgcyh0KSxJKE0pLHB9fX19XX1dKS5wcm92aWRlcihcIiQkYW5pbWF0ZUNzc0RyaXZlclwiLFtcIiQkYW5pbWF0aW9uUHJvdmlkZXJcIixmdW5jdGlvbihhKXthLmRyaXZlcnMucHVzaChcIiQkYW5pbWF0ZUNzc0RyaXZlclwiKTt0aGlzLiRnZXQ9W1wiJGFuaW1hdGVDc3NcIixcIiRyb290U2NvcGVcIixcIiQkQW5pbWF0ZVJ1bm5lclwiLFwiJHJvb3RFbGVtZW50XCIsXCIkZG9jdW1lbnRcIixcIiRzbmlmZmVyXCIsZnVuY3Rpb24oYSxjLGQsZSxzLG4pe2Z1bmN0aW9uIGgoYSl7cmV0dXJuIGEucmVwbGFjZSgvXFxibmctXFxTK1xcYi9nLFwiXCIpfWZ1bmN0aW9uIGsoYSxiKXtVKGEpJiYoYT1hLnNwbGl0KFwiIFwiKSk7VShiKSYmKGI9Yi5zcGxpdChcIiBcIikpO3JldHVybiBhLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4tMT09PWIuaW5kZXhPZihhKX0pLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIEQoYyxcbmUsQSl7ZnVuY3Rpb24gRChhKXt2YXIgYj17fSxjPXooYSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7dShbXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oYSl7dmFyIGQ9Y1thXTtzd2l0Y2goYSl7Y2FzZSBcInRvcFwiOmQrPUkuc2Nyb2xsVG9wO2JyZWFrO2Nhc2UgXCJsZWZ0XCI6ZCs9SS5zY3JvbGxMZWZ0fWJbYV09TWF0aC5mbG9vcihkKStcInB4XCJ9KTtyZXR1cm4gYn1mdW5jdGlvbiBzKCl7dmFyIGM9aChBLmF0dHIoXCJjbGFzc1wiKXx8XCJcIiksZD1rKGMsdCksYz1rKHQsYyksZD1hKG4se3RvOkQoQSksYWRkQ2xhc3M6XCJuZy1hbmNob3ItaW4gXCIrZCxyZW1vdmVDbGFzczpcIm5nLWFuY2hvci1vdXQgXCIrYyxkZWxheTohMH0pO3JldHVybiBkLiQkd2lsbEFuaW1hdGU/ZDpudWxsfWZ1bmN0aW9uIGYoKXtuLnJlbW92ZSgpO2UucmVtb3ZlQ2xhc3MoXCJuZy1hbmltYXRlLXNoaW1cIik7QS5yZW1vdmVDbGFzcyhcIm5nLWFuaW1hdGUtc2hpbVwiKX12YXIgbj1HKHooZSkuY2xvbmVOb2RlKCEwKSksXG50PWgobi5hdHRyKFwiY2xhc3NcIil8fFwiXCIpO2UuYWRkQ2xhc3MoXCJuZy1hbmltYXRlLXNoaW1cIik7QS5hZGRDbGFzcyhcIm5nLWFuaW1hdGUtc2hpbVwiKTtuLmFkZENsYXNzKFwibmctYW5jaG9yXCIpO3cuYXBwZW5kKG4pO3ZhciBtO2M9ZnVuY3Rpb24oKXt2YXIgYz1hKG4se2FkZENsYXNzOlwibmctYW5jaG9yLW91dFwiLGRlbGF5OiEwLGZyb206RChlKX0pO3JldHVybiBjLiQkd2lsbEFuaW1hdGU/YzpudWxsfSgpO2lmKCFjJiYobT1zKCksIW0pKXJldHVybiBmKCk7dmFyIEw9Y3x8bTtyZXR1cm57c3RhcnQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7YyYmYy5lbmQoKX12YXIgYixjPUwuc3RhcnQoKTtjLmRvbmUoZnVuY3Rpb24oKXtjPW51bGw7aWYoIW0mJihtPXMoKSkpcmV0dXJuIGM9bS5zdGFydCgpLGMuZG9uZShmdW5jdGlvbigpe2M9bnVsbDtmKCk7Yi5jb21wbGV0ZSgpfSksYztmKCk7Yi5jb21wbGV0ZSgpfSk7cmV0dXJuIGI9bmV3IGQoe2VuZDphLGNhbmNlbDphfSl9fX1mdW5jdGlvbiBBKGEsXG5iLGMsZSl7dmFyIGg9dChhKSxmPXQoYiksaz1bXTt1KGUsZnVuY3Rpb24oYSl7KGE9RChjLGEub3V0LGFbXCJpblwiXSkpJiZrLnB1c2goYSl9KTtpZihofHxmfHwwIT09ay5sZW5ndGgpcmV0dXJue3N0YXJ0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3UoYixmdW5jdGlvbihhKXthLmVuZCgpfSl9dmFyIGI9W107aCYmYi5wdXNoKGguc3RhcnQoKSk7ZiYmYi5wdXNoKGYuc3RhcnQoKSk7dShrLGZ1bmN0aW9uKGEpe2IucHVzaChhLnN0YXJ0KCkpfSk7dmFyIGM9bmV3IGQoe2VuZDphLGNhbmNlbDphfSk7ZC5hbGwoYixmdW5jdGlvbihhKXtjLmNvbXBsZXRlKGEpfSk7cmV0dXJuIGN9fX1mdW5jdGlvbiB0KGMpe3ZhciBkPWMuZWxlbWVudCxlPWMub3B0aW9uc3x8e307Yy5zdHJ1Y3R1cmFsPyhlLnN0cnVjdHVyYWw9ZS5hcHBseUNsYXNzZXNFYXJseT0hMCxlLmV2ZW50PWMuZXZlbnQsXCJsZWF2ZVwiPT09ZS5ldmVudCYmKGUub25Eb25lPWUuZG9tT3BlcmF0aW9uKSk6ZS5ldmVudD1udWxsO1xuYz1hKGQsZSk7cmV0dXJuIGMuJCR3aWxsQW5pbWF0ZT9jOm51bGx9aWYoIW4uYW5pbWF0aW9ucyYmIW4udHJhbnNpdGlvbnMpcmV0dXJuIEg7dmFyIEk9eihzKS5ib2R5O2M9eihlKTt2YXIgdz1HKEkucGFyZW50Tm9kZT09PWM/STpjKTtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGEuZnJvbSYmYS50bz9BKGEuZnJvbSxhLnRvLGEuY2xhc3NlcyxhLmFuY2hvcnMpOnQoYSl9fV19XSkucHJvdmlkZXIoXCIkJGFuaW1hdGVKc1wiLFtcIiRhbmltYXRlUHJvdmlkZXJcIixmdW5jdGlvbihhKXt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsXCIkJEFuaW1hdGVSdW5uZXJcIixcIiQkckFGTXV0ZXhcIixcIiQkanFMaXRlXCIsZnVuY3Rpb24oYixjLGQsZSl7ZnVuY3Rpb24gcyhjKXtjPVgoYyk/YzpjLnNwbGl0KFwiIFwiKTtmb3IodmFyIGQ9W10sZT17fSxBPTA7QTxjLmxlbmd0aDtBKyspe3ZhciBuPWNbQV0scz1hLiQkcmVnaXN0ZXJlZEFuaW1hdGlvbnNbbl07cyYmIWVbbl0mJihkLnB1c2goYi5nZXQocykpLGVbbl09XG4hMCl9cmV0dXJuIGR9dmFyIG49aGEoZSk7cmV0dXJuIGZ1bmN0aW9uKGEsYixkLGUpe2Z1bmN0aW9uIHQoKXtlLmRvbU9wZXJhdGlvbigpO24oYSxlKX1mdW5jdGlvbiB6KGEsYixkLGUsZyl7c3dpdGNoKGQpe2Nhc2UgXCJhbmltYXRlXCI6Yj1bYixlLmZyb20sZS50byxnXTticmVhaztjYXNlIFwic2V0Q2xhc3NcIjpiPVtiLHIsSyxnXTticmVhaztjYXNlIFwiYWRkQ2xhc3NcIjpiPVtiLHIsZ107YnJlYWs7Y2FzZSBcInJlbW92ZUNsYXNzXCI6Yj1bYixLLGddO2JyZWFrO2RlZmF1bHQ6Yj1bYixnXX1iLnB1c2goZSk7aWYoYT1hLmFwcGx5KGEsYikpaWYoQ2EoYS5zdGFydCkmJihhPWEuc3RhcnQoKSksYSBpbnN0YW5jZW9mIGMpYS5kb25lKGcpO2Vsc2UgaWYoQ2EoYSkpcmV0dXJuIGE7cmV0dXJuIEh9ZnVuY3Rpb24gdyhhLGIsZCxlLGcpe3ZhciBmPVtdO3UoZSxmdW5jdGlvbihlKXt2YXIgaD1lW2ddO2gmJmYucHVzaChmdW5jdGlvbigpe3ZhciBlLGcsZj0hMSxsPWZ1bmN0aW9uKGEpe2Z8fFxuKGY9ITAsKGd8fEgpKGEpLGUuY29tcGxldGUoIWEpKX07ZT1uZXcgYyh7ZW5kOmZ1bmN0aW9uKCl7bCgpfSxjYW5jZWw6ZnVuY3Rpb24oKXtsKCEwKX19KTtnPXooaCxhLGIsZCxmdW5jdGlvbihhKXtsKCExPT09YSl9KTtyZXR1cm4gZX0pfSk7cmV0dXJuIGZ9ZnVuY3Rpb24gQihhLGIsZCxlLGcpe3ZhciBmPXcoYSxiLGQsZSxnKTtpZigwPT09Zi5sZW5ndGgpe3ZhciBoLGs7XCJiZWZvcmVTZXRDbGFzc1wiPT09Zz8oaD13KGEsXCJyZW1vdmVDbGFzc1wiLGQsZSxcImJlZm9yZVJlbW92ZUNsYXNzXCIpLGs9dyhhLFwiYWRkQ2xhc3NcIixkLGUsXCJiZWZvcmVBZGRDbGFzc1wiKSk6XCJzZXRDbGFzc1wiPT09ZyYmKGg9dyhhLFwicmVtb3ZlQ2xhc3NcIixkLGUsXCJyZW1vdmVDbGFzc1wiKSxrPXcoYSxcImFkZENsYXNzXCIsZCxlLFwiYWRkQ2xhc3NcIikpO2gmJihmPWYuY29uY2F0KGgpKTtrJiYoZj1mLmNvbmNhdChrKSl9aWYoMCE9PWYubGVuZ3RoKXJldHVybiBmdW5jdGlvbihhKXt2YXIgYj1bXTtmLmxlbmd0aCYmXG51KGYsZnVuY3Rpb24oYSl7Yi5wdXNoKGEoKSl9KTtiLmxlbmd0aD9jLmFsbChiLGEpOmEoKTtyZXR1cm4gZnVuY3Rpb24oYSl7dShiLGZ1bmN0aW9uKGIpe2E/Yi5jYW5jZWwoKTpiLmVuZCgpfSl9fX0zPT09YXJndW1lbnRzLmxlbmd0aCYmbmEoZCkmJihlPWQsZD1udWxsKTtlPWlhKGUpO2R8fChkPWEuYXR0cihcImNsYXNzXCIpfHxcIlwiLGUuYWRkQ2xhc3MmJihkKz1cIiBcIitlLmFkZENsYXNzKSxlLnJlbW92ZUNsYXNzJiYoZCs9XCIgXCIrZS5yZW1vdmVDbGFzcykpO3ZhciByPWUuYWRkQ2xhc3MsSz1lLnJlbW92ZUNsYXNzLEM9cyhkKSxFLGY7aWYoQy5sZW5ndGgpe3ZhciBGLEc7XCJsZWF2ZVwiPT1iPyhHPVwibGVhdmVcIixGPVwiYWZ0ZXJMZWF2ZVwiKTooRz1cImJlZm9yZVwiK2IuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYi5zdWJzdHIoMSksRj1iKTtcImVudGVyXCIhPT1iJiZcIm1vdmVcIiE9PWImJihFPUIoYSxiLGUsQyxHKSk7Zj1CKGEsYixlLEMsRil9aWYoRXx8ZilyZXR1cm57c3RhcnQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGMpe249XG4hMDt0KCk7Y2EoYSxlKTtnLmNvbXBsZXRlKGMpfXZhciBkLGs9W107RSYmay5wdXNoKGZ1bmN0aW9uKGEpe2Q9RShhKX0pO2subGVuZ3RoP2sucHVzaChmdW5jdGlvbihhKXt0KCk7YSghMCl9KTp0KCk7ZiYmay5wdXNoKGZ1bmN0aW9uKGEpe2Q9ZihhKX0pO3ZhciBuPSExLGc9bmV3IGMoe2VuZDpmdW5jdGlvbigpe258fCgoZHx8SCkodm9pZCAwKSxiKHZvaWQgMCkpfSxjYW5jZWw6ZnVuY3Rpb24oKXtufHwoKGR8fEgpKCEwKSxiKCEwKSl9fSk7Yy5jaGFpbihrLGIpO3JldHVybiBnfX19fV19XSkucHJvdmlkZXIoXCIkJGFuaW1hdGVKc0RyaXZlclwiLFtcIiQkYW5pbWF0aW9uUHJvdmlkZXJcIixmdW5jdGlvbihhKXthLmRyaXZlcnMucHVzaChcIiQkYW5pbWF0ZUpzRHJpdmVyXCIpO3RoaXMuJGdldD1bXCIkJGFuaW1hdGVKc1wiLFwiJCRBbmltYXRlUnVubmVyXCIsZnVuY3Rpb24oYSxjKXtmdW5jdGlvbiBkKGMpe3JldHVybiBhKGMuZWxlbWVudCxjLmV2ZW50LGMuY2xhc3NlcyxjLm9wdGlvbnMpfVxucmV0dXJuIGZ1bmN0aW9uKGEpe2lmKGEuZnJvbSYmYS50byl7dmFyIGI9ZChhLmZyb20pLG49ZChhLnRvKTtpZihifHxuKXJldHVybntzdGFydDpmdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtyZXR1cm4gZnVuY3Rpb24oKXt1KGQsZnVuY3Rpb24oYSl7YS5lbmQoKX0pfX12YXIgZD1bXTtiJiZkLnB1c2goYi5zdGFydCgpKTtuJiZkLnB1c2gobi5zdGFydCgpKTtjLmFsbChkLGZ1bmN0aW9uKGEpe2UuY29tcGxldGUoYSl9KTt2YXIgZT1uZXcgYyh7ZW5kOmEoKSxjYW5jZWw6YSgpfSk7cmV0dXJuIGV9fX1lbHNlIHJldHVybiBkKGEpfX1dfV0pfSkod2luZG93LHdpbmRvdy5hbmd1bGFyKTtcblxuIiwiIWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlLG8sbil7ZnVuY3Rpb24gcih0LHIsaSxsKXtmdW5jdGlvbiBhKCl7dmFyIGU9bnVsbCE9PWwub3B0aW9ucy50ZW1wbGF0ZT8ndGVtcGxhdGU9XCInK2wub3B0aW9ucy50ZW1wbGF0ZSsnXCInOlwiXCI7bC5pdGVtRGlyZWN0aXZlPVwidW5kZWZpbmVkXCI9PXR5cGVvZiBsLml0ZW1EaXJlY3RpdmU/XCJjYXJvdXNlbC1nZW5lcmljLWl0ZW1cIjpsLml0ZW1EaXJlY3RpdmU7dmFyIHQ9XCI8XCIrbC5pdGVtRGlyZWN0aXZlKycgbmctbW9kZWw9XCJpdGVtXCIgJytlKydvbi1zZWxlY3Q9XCJ2bS5zZWxlY3RJdGVtKGl0ZW0pXCIgY2Fyb3VzZWwtb3B0aW9ucz1cIm1lbnVDYXJvdXNlbC5vcHRpb25zXCIgJztyZXR1cm4gdCs9XCI+PC9cIitsLml0ZW1EaXJlY3RpdmUrXCI+XCJ9ZnVuY3Rpb24gcygpe3ZhciBlPW4uJGdldEJ5SGFuZGxlKGwub3B0aW9ucy5jYXJvdXNlbElkKS5nZXRTY3JvbGxWaWV3KCksdD1lLl9fY29udGFpbmVyLG89ZS50b3VjaFN0YXJ0LHI9ZS50b3VjaE1vdmU7dC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLGUudG91Y2hTdGFydCksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGUudG91Y2hNb3ZlKSxlLnRvdWNoU3RhcnQ9ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe30sby5hcHBseShlLFt0XSl9LGUudG91Y2hNb3ZlPWZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXt9LHIuYXBwbHkoZSxbdF0pfSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsZS50b3VjaFN0YXJ0LCExKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsZS50b3VjaE1vdmUsITEpfWwuZWw9cixsLm9wdGlvbnMudHJhY2tCeT1cInVuZGVmaW5lZFwiIT10eXBlb2YgaS50cmFja0J5P2kudHJhY2tCeTpcIiRpbmRleFwiLGwub3B0aW9ucy50cmFja0J5c3RyPVwiJGluZGV4XCI9PT1sLm9wdGlvbnMudHJhY2tCeT9cIiRpbmRleFwiOlwiaXRlbS5cIitsLm9wdGlvbnMudHJhY2tCeTt2YXIgYz1sLm9wdGlvbnMuYW5pbWF0ZUluP1wiIGFuaW1hdGVJblwiOlwiXCIsdT0nPGRpdiBjbGFzcz1cImEtY2Fyb3VzZWxcIj4nO2wub3B0aW9ucy5wdWxsUmVmcmVzaC5hY3RpdmUmJih1Kz0nPGRpdiBjbGFzcz1cInNwaW5uZXItd3JhcHBlclwiIG5nLWlmPVwidm0ub3B0aW9ucy5wdWxsUmVmcmVzaC5sb2FkaW5nXCI+PGlvbi1zcGlubmVyIGljb249XCJhbmRyb2lkXCI+PC9pb24tc3Bpbm5lcj48L2Rpdj4nLHUrPSc8c3BhbiBjbGFzcz1cInB1bGxyZWZyZXNoLWluZGljYXRvclwiPjxzdmcgdmlld0JveD1cIjAgMCA2NCA2NFwiPjxnPjxjaXJjbGUgc3Ryb2tlLXdpZHRoPVwiNlwiIHN0cm9rZS1kYXNoYXJyYXk9XCIxMzUuMjYyNjEyMzkxNDQyODdcIiBzdHJva2UtZGFzaG9mZnNldD1cIjE2LjUxMzcxNDc0NTU2MjE0XCIgcj1cIjI2XCIgY3g9XCIzMlwiIGN5PVwiMzJcIiBmaWxsPVwibm9uZVwiIHRyYW5zZm9ybT1cInNjYWxlKDEsMSkgdHJhbnNsYXRlKDAsMCkgcm90YXRlKDAsMzIsMzIpXCI+PC9jaXJjbGU+PC9nPjwvc3ZnPjwvc3Bhbj4nKSx1Kz1cIjxpb24tc2Nyb2xsIFwiLGwub3B0aW9ucy5wdWxsUmVmcmVzaC5hY3RpdmUmJih1Kz0nb24tc2Nyb2xsPVwidm0ub25TY3JvbGwoKVwiICcpLHUrPSdzY3JvbGxiYXIteD1cImZhbHNlXCIgZGVsZWdhdGUtaGFuZGxlPVwiJytsLm9wdGlvbnMuY2Fyb3VzZWxJZCsnXCIgem9vbWluZz1cImZhbHNlXCIgZGlyZWN0aW9uPVwieFwiIG92ZXJmbG93LXNjcm9sbD1cImZhbHNlXCIgaGFzLWJvdW5jaW5nPVwidHJ1ZVwiPjxuYXYgc3R5bGU9XCJ2aXNpYmlsaXR5OmhpZGRlbjtcIj48dWw+IDxsaSBuZy1yZXBlYXQ9XCJpdGVtIGluIHZtLmFycmF5UHJvdmlkZXIgdHJhY2sgYnkgJytsLm9wdGlvbnMudHJhY2tCeXN0cisnXCJjbGFzcz1cImNhcm91c2VsLWl0ZW0nK2MrJ1wibmctY2xhc3M9XCJ7XFwnYWN0aXZlXFwnOnZtLml0ZW1BY3RpdmUgPT09IGl0ZW19XCI+JythKCkrXCI8L2xpPjwvdWw+PC9uYXY+PC9pb24tc2Nyb2xsPjwvZGl2PlwiLHU9ZSh1KSh0KSxyLmFwcGVuZCh1KSxvKGZ1bmN0aW9uKCl7bC5hcnJheVByb3ZpZGVyJiZsLmFycmF5UHJvdmlkZXIubGVuZ3RoPjAmJmwuaW5pdENhcm91c2VsKCkscygpfSwwKX1yZXR1cm57cmVzdHJpY3Q6XCJFXCIscmVwbGFjZTohMCx0ZW1wbGF0ZTpcIlwiLHNjb3BlOnt9LGxpbms6cixjb250cm9sbGVyOnQsY29udHJvbGxlckFzOlwidm1cIixiaW5kVG9Db250cm9sbGVyOntpdGVtRGlyZWN0aXZlOlwiQFwiLGNhcm91c2VsT3B0aW9uczpcIj1cIixhcnJheVByb3ZpZGVyOlwiPVwiLG9uU2VsZWN0OlwiJlwifX19ZnVuY3Rpb24gdChlLHQsbyxuLHIpe2Z1bmN0aW9uIGkoKXtmdW5jdGlvbiB0KGUsdCl7dmFyIG47XCJvYmplY3RcIj09dHlwZW9mIHQ/KG49dC5jYXJvdXNlbElkLGFuZ3VsYXIuZXh0ZW5kKGYub3B0aW9ucyx0KSk6bj10LG49PT1mLm9wdGlvbnMuY2Fyb3VzZWxJZCYmbyhmLmluaXRDYXJvdXNlbCwwKX1mdW5jdGlvbiBuKGUsdCl7dmFyIG89dC5pZENvbnRhaW5zLG49dC5leGNlcHQ7Zi5vcHRpb25zLmNhcm91c2VsSWQuaW5kZXhPZihvKT49MCYmZi5vcHRpb25zLmNhcm91c2VsSWQhPT1uJiYoZi5pdGVtQWN0aXZlPW51bGwpfWFuZ3VsYXIuZXh0ZW5kKGYub3B0aW9ucyxmLmNhcm91c2VsT3B0aW9ucyksZS4kb24oXCJhLWNhcm91c2VsLmFycmF5dXBkYXRlZFwiLHQpLGUuJG9uKFwiYS1jYXJvdXNlbC5kZXNhY3RpdmF0ZUl0ZW1cIixuKSxmLm9wdGlvbnMucHVsbFJlZnJlc2guYWN0aXZlJiZlLiRvbihcImEtY2Fyb3VzZWwucHVsbHJlZnJlc2guZG9uZVwiLHApfWZ1bmN0aW9uIGwoKXtmdW5jdGlvbiBlKCl7dmFyIHQ9cGFyc2VJbnQobFtzLTFdLm9mZnNldFdpZHRoKSxuPXBhcnNlSW50KGxbcy0xXS5vZmZzZXRIZWlnaHQpO3Q+MCYmbj4wP2koKTooY29uc29sZS5sb2coXCJbSU5GT10gQ3JlYXRpbmcgQ2Fyb3VzZWwgYnV0IERPTSBub3QgcmVhZHkgeWV0Li4uXCIpLGc+aD9vKGZ1bmN0aW9uKCl7ZSgpfSw1MCk6Y29uc29sZS5sb2coXCJbRVJST1JdIFNpemUgaXRlbSBDYXJvdXNlbCBjb3VsZCBub3QgYmUgZGV0ZXJtaW5lZFwiLGYub3B0aW9ucy5jYXJvdXNlbElkKSxoKyspfWZ1bmN0aW9uIGkoKXt2YXIgZSxvPW51bGwhPT1mLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5wcm9wZXJ0eTtpZihhbmd1bGFyLmZvckVhY2gobCxmdW5jdGlvbih0KXtlPWYuYXJyYXlQcm92aWRlclt2XSxlLmNhcm91c2VsSWQ9Zi5vcHRpb25zLmNhcm91c2VsSWQsZCs9dC5vZmZzZXRXaWR0aCxmLm9wdGlvbnMud2lkdGhJdGVtPU1hdGgubWF4KHQub2Zmc2V0V2lkdGgsZi5vcHRpb25zLndpZHRoSXRlbSksZi5vcHRpb25zLmhlaWdodEl0ZW09TWF0aC5tYXgodC5vZmZzZXRIZWlnaHQsZi5vcHRpb25zLmhlaWdodEl0ZW0pLGYuYXJyYXlQcm92aWRlclt2XS53aWR0aEl0ZW09dC5vZmZzZXRXaWR0aCxvJiYtMT09PWYub3B0aW9ucy5zZWxlY3RBdFN0YXJ0LmluZGV4JiZlW2Yub3B0aW9ucy5zZWxlY3RBdFN0YXJ0LnByb3BlcnR5XT09PWYub3B0aW9ucy5zZWxlY3RBdFN0YXJ0LnZhbHVlJiYoZi5vcHRpb25zLnNlbGVjdEF0U3RhcnQuaW5kZXg9diksdis9MX0pLGYub3B0aW9ucy5jZW50ZXJPblNlbGVjdCl7dmFyIGk9LjUqbi5pbm5lcldpZHRoLHM9bFswXSxoPWxbdS0xXTtwPWktLjUqcy5vZmZzZXRXaWR0aCxtPWktLjUqaC5vZmZzZXRXaWR0aCxkKz1wK20sZi5vcHRpb25zLm1heFNjcm9sbD1uLmlubmVyV2lkdGgtZCxcInJpZ2h0XCI9PT1mLm9wdGlvbnMuYWxpZ24/ci4kZ2V0QnlIYW5kbGUoZi5vcHRpb25zLmNhcm91c2VsSWQpLnNjcm9sbFRvKC0xKmYub3B0aW9ucy5tYXhTY3JvbGwsMCwhMSk6XCJjZW50ZXJcIj09PWYub3B0aW9ucy5hbGlnbj9yLiRnZXRCeUhhbmRsZShmLm9wdGlvbnMuY2Fyb3VzZWxJZCkuc2Nyb2xsVG8oZi5vcHRpb25zLm1heFNjcm9sbCotLjUsMCwhMSk6ci4kZ2V0QnlIYW5kbGUoZi5vcHRpb25zLmNhcm91c2VsSWQpLnNjcm9sbFRvKDAsMCwhMCl9ZWxzZSBkKz00LGYub3B0aW9ucy5tYXhTY3JvbGw9bi5pbm5lcldpZHRoLWQ7Zi5vcHRpb25zLndpZHRoQ2Fyb3VzZWw9ZCwhbyYmZi5vcHRpb25zLnNlbGVjdEZpcnN0P2MoXCJyaWdodFwiPT09Zi5vcHRpb25zLmFsaWduP2YuYXJyYXlQcm92aWRlclt1LTFdOmYuYXJyYXlQcm92aWRlclswXSk6byYmLTEhPT1mLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5pbmRleCYmYShmLmFycmF5UHJvdmlkZXJbZi5vcHRpb25zLnNlbGVjdEF0U3RhcnQuaW5kZXhdKSxmLm5hdkVsZW09dC5maW5kKFwibmF2XCIpLGYubmF2RWxlbS5jc3Moe3dpZHRoOmQrXCJweFwiLGhlaWdodDpmLm9wdGlvbnMuaGVpZ2h0SXRlbStcInB4XCIsdmlzaWJpbGl0eTpcInZpc2libGVcIixcInBhZGRpbmctbGVmdFwiOnArXCJweFwifSksZi5vcHRpb25zLnB1bGxSZWZyZXNoLmFjdGl2ZSYmKGYucHVsbHJlZnJlc2hJbmRpY2F0b3I9YW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYS1jYXJvdXNlbCAucHVsbHJlZnJlc2gtaW5kaWNhdG9yXCIpKSxmLnN2Z0VsZW09dC5maW5kKFwiZ1wiKSl9dmFyIGw9dC5maW5kKFwibGlcIikscz1sLmxlbmd0aCx1PWFuZ3VsYXIuZWxlbWVudChsKS5sZW5ndGgsZD0wLHA9MCxtPTAsdj0wLGg9MCxnPTE1O2lmKGYuaXRlbUFjdGl2ZT1udWxsLCEodT4wKSl0aHJvdyBFcnJvcihcIlRyeWluZyB0byBjcmVhdGUgYSBjYXJvdXNlbCBmcm9tIGFuIGVtcHR5IGFycmF5XCIsZi5vcHRpb25zKTtvKGZ1bmN0aW9uKCl7ZSgpfSw1MCl9ZnVuY3Rpb24gYShlKXt2YXIgdCxvO2lmKGMoZSksZi5vcHRpb25zLmNlbnRlck9uU2VsZWN0KXt2YXIgbj11KGUpO2lmKHQ9MCwwPT09bil0PTA7ZWxzZSBmb3Iobz0wO24+bztvKyspdCs9LjUqKGYuYXJyYXlQcm92aWRlcltvXS53aWR0aEl0ZW0rZi5hcnJheVByb3ZpZGVyW28rMV0ud2lkdGhJdGVtKTtyLiRnZXRCeUhhbmRsZShmLm9wdGlvbnMuY2Fyb3VzZWxJZCkuc2Nyb2xsVG8odCwwLCEwKX19ZnVuY3Rpb24gcygpe3ZhciBlLHQ9ci4kZ2V0QnlIYW5kbGUoZi5vcHRpb25zLmNhcm91c2VsSWQpLmdldFNjcm9sbFBvc2l0aW9uKCkubGVmdCxvPTAsaT0wO2lmKGU9Zi5vcHRpb25zLm1heFNjcm9sbDwwP3QvZi5vcHRpb25zLm1heFNjcm9sbCotMTp0LzEwLGU+MSl7dmFyIGw9dC0gLTEqZi5vcHRpb25zLm1heFNjcm9sbDtvPWwvbi5pbm5lcldpZHRoLGYucHVsbHJlZnJlc2hJbmRpY2F0b3IuY3NzKHt0cmFuc2Zvcm06XCJ0cmFuc2xhdGVYKFwiKy01NippK1wicHgpXCJ9KX1vPi4yNSYmdD4wPyhmLnB1bGxyZWZyZXNoSW5kaWNhdG9yLmNzcyh7dHJhbnNmb3JtOlwidHJhbnNsYXRlWCgwcHgpXCIsZGlzcGxheTpcIm5vbmVcIn0pLGQoKSk6KGk9by8uMixmLnN2Z0VsZW1bMF0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsXCJyb3RhdGUoXCIrMzYwKmkrXCIgMzIgMzIpXCIpLGYucHVsbHJlZnJlc2hJbmRpY2F0b3IuY3NzKHt0cmFuc2Zvcm06XCJ0cmFuc2xhdGVYKFwiKy01NippK1wicHgpXCJ9KSl9ZnVuY3Rpb24gYyh0KXtmLml0ZW1BY3RpdmU9dCxmLm9uU2VsZWN0LmNhbGwobnVsbCx7aXRlbTp0fSksZS4kYnJvYWRjYXN0KFwiYS1jYXJvdXNlbC5pdGVtc2VsZWN0ZWRcIix0KX1mdW5jdGlvbiB1KGUpe2Zvcih2YXIgdCBpbiBmLmFycmF5UHJvdmlkZXIpaWYoZi5hcnJheVByb3ZpZGVyW3RdPT09ZSlyZXR1cm4gdH1mdW5jdGlvbiBkKCl7Zi5vcHRpb25zLnB1bGxSZWZyZXNoLmxvYWRpbmd8fChlLiRhcHBseShmdW5jdGlvbigpe2Yub3B0aW9ucy5wdWxsUmVmcmVzaC5sb2FkaW5nPSEwfSksci4kZ2V0QnlIYW5kbGUoZi5vcHRpb25zLmNhcm91c2VsSWQpLmZyZWV6ZVNjcm9sbCghMCksZi5uYXZFbGVtLmNzcyh7d2lkdGg6Zi5vcHRpb25zLndpZHRoQ2Fyb3VzZWwrNDUrXCJweFwifSksci4kZ2V0QnlIYW5kbGUoZi5vcHRpb25zLmNhcm91c2VsSWQpLnJlc2l6ZSgpLGYub3B0aW9ucy5wdWxsUmVmcmVzaC5jYWxsQmFjaygpKX1mdW5jdGlvbiBwKCl7Zi5vcHRpb25zLnB1bGxSZWZyZXNoLmxvYWRpbmc9ITEsZi5uYXZFbGVtLmNzcyh7d2lkdGg6Zi5vcHRpb25zLndpZHRoQ2Fyb3VzZWwrXCJweFwifSksci4kZ2V0QnlIYW5kbGUoZi5vcHRpb25zLmNhcm91c2VsSWQpLnJlc2l6ZSgpLHIuJGdldEJ5SGFuZGxlKGYub3B0aW9ucy5jYXJvdXNlbElkKS5mcmVlemVTY3JvbGwoITEpLGYucHVsbHJlZnJlc2hJbmRpY2F0b3IuY3NzKHt0cmFuc2Zvcm06XCJ0cmFuc2xhdGVYKDBweClcIixkaXNwbGF5OlwiYmxvY2tcIn0pfXZhciBmPXRoaXM7Zi5vcHRpb25zPXtzaG93U2Nyb2xsOiExLGNhcm91c2VsSWQ6XCJteS1jYXJvdXNlbFwiLHRlbXBsYXRlOm51bGwsYWxpZ246XCJsZWZ0XCIsY2VudGVyT25TZWxlY3Q6ITAsd2lkdGhJdGVtOjAsaGVpZ2h0SXRlbTowLHRyYWNrQnk6XCIkaW5kZXhcIixzZWxlY3RGaXJzdDohMCxzZWxlY3RBdFN0YXJ0Ontwcm9wZXJ0eTpudWxsLHZhbHVlOm51bGwsaW5kZXg6LTF9LHB1bGxSZWZyZXNoOnthY3RpdmU6ITEsY2FsbEJhY2s6YW5ndWxhci5ub29wLGxvYWRpbmc6ITF9LGFuaW1hdGVJbjohMX0sZi5pbml0Q2Fyb3VzZWw9bCxmLnNlbGVjdEl0ZW09YSxmLm9uU2Nyb2xsPXMsaSgpfWFuZ3VsYXIubW9kdWxlKFwiYUNhcm91c2VsXCIsW10pLmRpcmVjdGl2ZShcImFDYXJvdXNlbFwiLGUpLGUuJGluamVjdD1bXCIkY29tcGlsZVwiLFwiJHRpbWVvdXRcIixcIiRpb25pY1Njcm9sbERlbGVnYXRlXCJdLHQuJGluamVjdD1bXCIkc2NvcGVcIixcIiRlbGVtZW50XCIsXCIkdGltZW91dFwiLFwiJHdpbmRvd1wiLFwiJGlvbmljU2Nyb2xsRGVsZWdhdGVcIl19KCksZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKCl7cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHJlcGxhY2U6ITAsdGVtcGxhdGVVcmw6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC50ZW1wbGF0ZX0sc2NvcGU6e30sY29udHJvbGxlcjp0LGNvbnRyb2xsZXJBczpcInZtXCIsYmluZFRvQ29udHJvbGxlcjp7bmdNb2RlbDpcIj1cIixvblNlbGVjdDpcIiZcIixjYXJvdXNlbE9wdGlvbnM6XCI9XCJ9fX1mdW5jdGlvbiB0KGUpe2Z1bmN0aW9uIHQoKXtlLiRvbihcImEtY2Fyb3VzZWwuaXRlbXNlbGVjdGVkXCIsZnVuY3Rpb24oZSx0KXtvLnNlbGVjdGVkPXQ9PT1vLm5nTW9kZWw/ITA6ITF9KX12YXIgbz10aGlzO28uc2VsZWN0ZWQ9ITEsdCgpfXZhciBvPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO29bby5sZW5ndGgtMV0uc3JjO2FuZ3VsYXIubW9kdWxlKFwiYUNhcm91c2VsXCIpLmRpcmVjdGl2ZShcImNhcm91c2VsR2VuZXJpY0l0ZW1cIixlKSx0LiRpbmplY3Q9W1wiJHNjb3BlXCJdfSgpLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSgpe3JldHVybntyZXN0cmljdDpcIkVcIixyZXBsYWNlOiEwLHRlbXBsYXRlOic8YSBjbGFzcz1cImEtY2Fyb3VzZWwtdGV4dC1pdGVtXCJuZy1iaW5kPVwiOjp2bS5uZ01vZGVsLmRpc3BsYXlcIm5nLWNsaWNrPVwidm0ub25TZWxlY3Qoe2l0ZW06dm0ubmdNb2RlbH0pXCI+PC9hPicsc2NvcGU6e30sY29udHJvbGxlcjp0LGNvbnRyb2xsZXJBczpcInZtXCIsYmluZFRvQ29udHJvbGxlcjp7bmdNb2RlbDpcIj1cIixvblNlbGVjdDpcIiZcIn19fWZ1bmN0aW9uIHQoZSl7ZnVuY3Rpb24gdCgpe2UuJG9uKFwiYWNhcm91c2VsLml0ZW1zZWxlY3RlZFwiLGZ1bmN0aW9uKGUsdCl7by5zZWxlY3RlZD10PT09by5uZ01vZGVsPyEwOiExfSl9dmFyIG89dGhpcztvLnNlbGVjdGVkPSExLHQoKX1hbmd1bGFyLm1vZHVsZShcImFDYXJvdXNlbFwiKS5kaXJlY3RpdmUoXCJjYXJvdXNlbFRleHRJdGVtXCIsZSksdC4kaW5qZWN0PVtcIiRzY29wZVwiXX0oKTsiLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTmFtZTogICAgICAgICAgbmcta25vYlxuICogRGVzY3JpcHRpb246ICAgQW5ndWxhci5qcyBLbm9iIGRpcmVjdGl2ZVxuICogVmVyc2lvbjogICAgICAgMC4xLjNcbiAqIEhvbWVwYWdlOiAgICAgIGh0dHBzOi8vcmFkbWllLmdpdGh1Yi5pby9uZy1rbm9iXG4gKiBMaWNlbmNlOiAgICAgICBNSVRcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXCJ1c2Ugc3RyaWN0XCI7IWZ1bmN0aW9uKCl7dmFyIHVpPXt9LEtub2I9ZnVuY3Rpb24oZWxlbWVudCx2YWx1ZSxvcHRpb25zKXt0aGlzLmVsZW1lbnQ9ZWxlbWVudCx0aGlzLnZhbHVlPXZhbHVlLHRoaXMub3B0aW9ucz1vcHRpb25zLHRoaXMuaW5EcmFnPSExfTtLbm9iLnByb3RvdHlwZS52YWx1ZVRvUmFkaWFucz1mdW5jdGlvbih2YWx1ZSx2YWx1ZUVuZCxhbmdsZUVuZCxhbmdsZVN0YXJ0LHZhbHVlU3RhcnQpe3JldHVybiB2YWx1ZUVuZD12YWx1ZUVuZHx8MTAwLHZhbHVlU3RhcnQ9dmFsdWVTdGFydHx8MCxhbmdsZUVuZD1hbmdsZUVuZHx8MzYwLGFuZ2xlU3RhcnQ9YW5nbGVTdGFydHx8MCxNYXRoLlBJLzE4MCooKHZhbHVlLXZhbHVlU3RhcnQpKihhbmdsZUVuZC1hbmdsZVN0YXJ0KS8odmFsdWVFbmQtdmFsdWVTdGFydCkrYW5nbGVTdGFydCl9LEtub2IucHJvdG90eXBlLnJhZGlhbnNUb1ZhbHVlPWZ1bmN0aW9uKHJhZGlhbnMsdmFsdWVFbmQsdmFsdWVTdGFydCxhbmdsZUVuZCxhbmdsZVN0YXJ0KXtyZXR1cm4gdmFsdWVFbmQ9dmFsdWVFbmR8fDEwMCx2YWx1ZVN0YXJ0PXZhbHVlU3RhcnR8fDAsYW5nbGVFbmQ9YW5nbGVFbmR8fDM2MCxhbmdsZVN0YXJ0PWFuZ2xlU3RhcnR8fDAsKDE4MC9NYXRoLlBJKnJhZGlhbnMtYW5nbGVTdGFydCkqKHZhbHVlRW5kLXZhbHVlU3RhcnQpLyhhbmdsZUVuZC1hbmdsZVN0YXJ0KSt2YWx1ZVN0YXJ0fSxLbm9iLnByb3RvdHlwZS5jcmVhdGVBcmM9ZnVuY3Rpb24oaW5uZXJSYWRpdXMsb3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxlbmRBbmdsZSxjb3JuZXJSYWRpdXMpe3ZhciBhcmM9ZDMuc3ZnLmFyYygpLmlubmVyUmFkaXVzKGlubmVyUmFkaXVzKS5vdXRlclJhZGl1cyhvdXRlclJhZGl1cykuc3RhcnRBbmdsZShzdGFydEFuZ2xlKS5lbmRBbmdsZShlbmRBbmdsZSkuY29ybmVyUmFkaXVzKGNvcm5lclJhZGl1cyk7cmV0dXJuIGFyY30sS25vYi5wcm90b3R5cGUuZHJhd0FyYz1mdW5jdGlvbihzdmcsYXJjLGxhYmVsLHN0eWxlLGNsaWNrLGRyYWcpe3ZhciBlbGVtPXN2Zy5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJpZFwiLGxhYmVsKS5hdHRyKFwiZFwiLGFyYykuc3R5bGUoc3R5bGUpLmF0dHIoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZShcIit0aGlzLm9wdGlvbnMuc2l6ZS8yK1wiLCBcIit0aGlzLm9wdGlvbnMuc2l6ZS8yK1wiKVwiKTtyZXR1cm4gdGhpcy5vcHRpb25zLnJlYWRPbmx5PT09ITEmJihjbGljayYmZWxlbS5vbihcImNsaWNrXCIsY2xpY2spLGRyYWcmJmVsZW0uY2FsbChkcmFnKSksZWxlbX0sS25vYi5wcm90b3R5cGUuY3JlYXRlQXJjcz1mdW5jdGlvbigpe3ZhciBvdXRlclJhZGl1cz1wYXJzZUludCh0aGlzLm9wdGlvbnMuc2l6ZS8yLDEwKSxzdGFydEFuZ2xlPXRoaXMudmFsdWVUb1JhZGlhbnModGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsMzYwKSxlbmRBbmdsZT10aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMub3B0aW9ucy5lbmRBbmdsZSwzNjApO3RoaXMub3B0aW9ucy5zY2FsZS5lbmFibGVkJiYob3V0ZXJSYWRpdXMtPXRoaXMub3B0aW9ucy5zY2FsZS53aWR0aCt0aGlzLm9wdGlvbnMuc2NhbGUuc3BhY2VXaWR0aCk7dmFyIGRpZmYsdHJhY2tJbm5lclJhZGl1cz1vdXRlclJhZGl1cy10aGlzLm9wdGlvbnMudHJhY2tXaWR0aCxjaGFuZ2VJbm5lclJhZGl1cz1vdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuYmFyV2lkdGgsdmFsdWVJbm5lclJhZGl1cz1vdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuYmFyV2lkdGgsaW50ZXJhY3RJbm5lclJhZGl1cz0xLHRyYWNrT3V0ZXJSYWRpdXM9b3V0ZXJSYWRpdXMsY2hhbmdlT3V0ZXJSYWRpdXM9b3V0ZXJSYWRpdXMsdmFsdWVPdXRlclJhZGl1cz1vdXRlclJhZGl1cyxpbnRlcmFjdE91dGVyUmFkaXVzPW91dGVyUmFkaXVzO3RoaXMub3B0aW9ucy5iYXJXaWR0aD50aGlzLm9wdGlvbnMudHJhY2tXaWR0aD8oZGlmZj0odGhpcy5vcHRpb25zLmJhcldpZHRoLXRoaXMub3B0aW9ucy50cmFja1dpZHRoKS8yLHRyYWNrSW5uZXJSYWRpdXMtPWRpZmYsdHJhY2tPdXRlclJhZGl1cy09ZGlmZik6dGhpcy5vcHRpb25zLmJhcldpZHRoPHRoaXMub3B0aW9ucy50cmFja1dpZHRoJiYoZGlmZj0odGhpcy5vcHRpb25zLnRyYWNrV2lkdGgtdGhpcy5vcHRpb25zLmJhcldpZHRoKS8yLGNoYW5nZU91dGVyUmFkaXVzLT1kaWZmLHZhbHVlT3V0ZXJSYWRpdXMtPWRpZmYsY2hhbmdlSW5uZXJSYWRpdXMtPWRpZmYsdmFsdWVJbm5lclJhZGl1cy09ZGlmZiksdGhpcy5vcHRpb25zLmJnQ29sb3ImJih0aGlzLmJnQXJjPXRoaXMuY3JlYXRlQXJjKDAsb3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxlbmRBbmdsZSkpLFwidHJvblwiPT09dGhpcy5vcHRpb25zLnNraW4udHlwZSYmKHRyYWNrT3V0ZXJSYWRpdXM9dHJhY2tPdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuc2tpbi53aWR0aC10aGlzLm9wdGlvbnMuc2tpbi5zcGFjZVdpZHRoLGNoYW5nZU91dGVyUmFkaXVzPWNoYW5nZU91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5za2luLndpZHRoLXRoaXMub3B0aW9ucy5za2luLnNwYWNlV2lkdGgsdmFsdWVPdXRlclJhZGl1cz12YWx1ZU91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5za2luLndpZHRoLXRoaXMub3B0aW9ucy5za2luLnNwYWNlV2lkdGgsaW50ZXJhY3RPdXRlclJhZGl1cz1pbnRlcmFjdE91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5za2luLndpZHRoLXRoaXMub3B0aW9ucy5za2luLnNwYWNlV2lkdGgsdGhpcy5ob29wQXJjPXRoaXMuY3JlYXRlQXJjKG91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5za2luLndpZHRoLG91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsZW5kQW5nbGUpKSx0aGlzLnRyYWNrQXJjPXRoaXMuY3JlYXRlQXJjKHRyYWNrSW5uZXJSYWRpdXMsdHJhY2tPdXRlclJhZGl1cyxzdGFydEFuZ2xlLGVuZEFuZ2xlKSx0aGlzLmNoYW5nZUFyYz10aGlzLmNyZWF0ZUFyYyhjaGFuZ2VJbm5lclJhZGl1cyxjaGFuZ2VPdXRlclJhZGl1cyxzdGFydEFuZ2xlLHN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLmJhckNhcCksdGhpcy52YWx1ZUFyYz10aGlzLmNyZWF0ZUFyYyh2YWx1ZUlubmVyUmFkaXVzLHZhbHVlT3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxzdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5iYXJDYXApLHRoaXMuaW50ZXJhY3RBcmM9dGhpcy5jcmVhdGVBcmMoaW50ZXJhY3RJbm5lclJhZGl1cyxpbnRlcmFjdE91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsZW5kQW5nbGUpfSxLbm9iLnByb3RvdHlwZS5kcmF3QXJjcz1mdW5jdGlvbihjbGlja0ludGVyYWN0aW9uLGRyYWdCZWhhdmlvcil7dmFyIHN2Zz1kMy5zZWxlY3QodGhpcy5lbGVtZW50KS5hcHBlbmQoXCJzdmdcIikuYXR0cihcIndpZHRoXCIsdGhpcy5vcHRpb25zLnNpemUpLmF0dHIoXCJoZWlnaHRcIix0aGlzLm9wdGlvbnMuc2l6ZSk7aWYodGhpcy5vcHRpb25zLmJnQ29sb3ImJnRoaXMuZHJhd0FyYyhzdmcsdGhpcy5iZ0FyYyxcImJnQXJjXCIse2ZpbGw6dGhpcy5vcHRpb25zLmJnQ29sb3J9KSx0aGlzLm9wdGlvbnMuZGlzcGxheUlucHV0KXt2YXIgZm9udFNpemU9LjIqdGhpcy5vcHRpb25zLnNpemUrXCJweFwiO1wiYXV0b1wiIT09dGhpcy5vcHRpb25zLmZvbnRTaXplJiYoZm9udFNpemU9dGhpcy5vcHRpb25zLmZvbnRTaXplK1wicHhcIiksdGhpcy5vcHRpb25zLnN0ZXA8MSYmKHRoaXMudmFsdWU9dGhpcy52YWx1ZS50b0ZpeGVkKDEpKTt2YXIgdj10aGlzLnZhbHVlO1wiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMub3B0aW9ucy5pbnB1dEZvcm1hdHRlciYmKHY9dGhpcy5vcHRpb25zLmlucHV0Rm9ybWF0dGVyKHYpKSxzdmcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwiaWRcIixcInRleHRcIikuYXR0cihcInRleHQtYW5jaG9yXCIsXCJtaWRkbGVcIikuYXR0cihcImZvbnQtc2l6ZVwiLGZvbnRTaXplKS5zdHlsZShcImZpbGxcIix0aGlzLm9wdGlvbnMudGV4dENvbG9yKS50ZXh0KHYrdGhpcy5vcHRpb25zLnVuaXR8fFwiXCIpLmF0dHIoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZShcIit0aGlzLm9wdGlvbnMuc2l6ZS8yK1wiLCBcIisodGhpcy5vcHRpb25zLnNpemUvMisuMDYqdGhpcy5vcHRpb25zLnNpemUpK1wiKVwiKSx0aGlzLm9wdGlvbnMuc3ViVGV4dC5lbmFibGVkJiYoZm9udFNpemU9LjA3KnRoaXMub3B0aW9ucy5zaXplK1wicHhcIixcImF1dG9cIiE9PXRoaXMub3B0aW9ucy5zdWJUZXh0LmZvbnQmJihmb250U2l6ZT10aGlzLm9wdGlvbnMuc3ViVGV4dC5mb250K1wicHhcIiksc3ZnLmFwcGVuZChcInRleHRcIikuYXR0cihcImNsYXNzXCIsXCJzdWItdGV4dFwiKS5hdHRyKFwidGV4dC1hbmNob3JcIixcIm1pZGRsZVwiKS5hdHRyKFwiZm9udC1zaXplXCIsZm9udFNpemUpLnN0eWxlKFwiZmlsbFwiLHRoaXMub3B0aW9ucy5zdWJUZXh0LmNvbG9yKS50ZXh0KHRoaXMub3B0aW9ucy5zdWJUZXh0LnRleHQpLmF0dHIoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZShcIit0aGlzLm9wdGlvbnMuc2l6ZS8yK1wiLCBcIisodGhpcy5vcHRpb25zLnNpemUvMisuMTUqdGhpcy5vcHRpb25zLnNpemUpK1wiKVwiKSl9aWYodGhpcy5vcHRpb25zLnNjYWxlLmVuYWJsZWQpe3ZhciByYWRpdXMscXVhbnRpdHksZGF0YSxjb3VudD0wLGFuZ2xlPTAsc3RhcnRSYWRpYW5zPXRoaXMudmFsdWVUb1JhZGlhbnModGhpcy5vcHRpb25zLm1pbix0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5lbmRBbmdsZSx0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMubWluKSxlbmRSYWRpYW5zPXRoaXMudmFsdWVUb1JhZGlhbnModGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5lbmRBbmdsZSx0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMubWluKSxkaWZmPTA7aWYoMD09PXRoaXMub3B0aW9ucy5zdGFydEFuZ2xlJiYzNjA9PT10aGlzLm9wdGlvbnMuZW5kQW5nbGV8fChkaWZmPTEpLFwiZG90c1wiPT09dGhpcy5vcHRpb25zLnNjYWxlLnR5cGUpe3ZhciB3aWR0aD10aGlzLm9wdGlvbnMuc2NhbGUud2lkdGg7cmFkaXVzPXRoaXMub3B0aW9ucy5zaXplLzItd2lkdGgscXVhbnRpdHk9dGhpcy5vcHRpb25zLnNjYWxlLnF1YW50aXR5O3ZhciBvZmZzZXQ9cmFkaXVzK3RoaXMub3B0aW9ucy5zY2FsZS53aWR0aDtkYXRhPWQzLnJhbmdlKHF1YW50aXR5KS5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gYW5nbGU9Y291bnQqKGVuZFJhZGlhbnMtc3RhcnRSYWRpYW5zKS1NYXRoLlBJLzIrc3RhcnRSYWRpYW5zLGNvdW50Kz0xLyhxdWFudGl0eS1kaWZmKSx7Y3g6b2Zmc2V0K01hdGguY29zKGFuZ2xlKSpyYWRpdXMsY3k6b2Zmc2V0K01hdGguc2luKGFuZ2xlKSpyYWRpdXMscjp3aWR0aH19KSxzdmcuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLmRhdGEoZGF0YSkuZW50ZXIoKS5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cih7cjpmdW5jdGlvbihkKXtyZXR1cm4gZC5yfSxjeDpmdW5jdGlvbihkKXtyZXR1cm4gZC5jeH0sY3k6ZnVuY3Rpb24oZCl7cmV0dXJuIGQuY3l9LGZpbGw6dGhpcy5vcHRpb25zLnNjYWxlLmNvbG9yfSl9ZWxzZSBpZihcImxpbmVzXCI9PT10aGlzLm9wdGlvbnMuc2NhbGUudHlwZSl7dmFyIGhlaWdodD10aGlzLm9wdGlvbnMuc2NhbGUuaGVpZ2h0O3JhZGl1cz10aGlzLm9wdGlvbnMuc2l6ZS8yLHF1YW50aXR5PXRoaXMub3B0aW9ucy5zY2FsZS5xdWFudGl0eSxkYXRhPWQzLnJhbmdlKHF1YW50aXR5KS5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gYW5nbGU9Y291bnQqKGVuZFJhZGlhbnMtc3RhcnRSYWRpYW5zKS1NYXRoLlBJLzIrc3RhcnRSYWRpYW5zLGNvdW50Kz0xLyhxdWFudGl0eS1kaWZmKSx7eDE6cmFkaXVzK01hdGguY29zKGFuZ2xlKSpyYWRpdXMseTE6cmFkaXVzK01hdGguc2luKGFuZ2xlKSpyYWRpdXMseDI6cmFkaXVzK01hdGguY29zKGFuZ2xlKSoocmFkaXVzLWhlaWdodCkseTI6cmFkaXVzK01hdGguc2luKGFuZ2xlKSoocmFkaXVzLWhlaWdodCl9fSksc3ZnLnNlbGVjdEFsbChcImxpbmVcIikuZGF0YShkYXRhKS5lbnRlcigpLmFwcGVuZChcImxpbmVcIikuYXR0cih7eDE6ZnVuY3Rpb24oZCl7cmV0dXJuIGQueDF9LHkxOmZ1bmN0aW9uKGQpe3JldHVybiBkLnkxfSx4MjpmdW5jdGlvbihkKXtyZXR1cm4gZC54Mn0seTI6ZnVuY3Rpb24oZCl7cmV0dXJuIGQueTJ9LFwic3Ryb2tlLXdpZHRoXCI6dGhpcy5vcHRpb25zLnNjYWxlLndpZHRoLHN0cm9rZTp0aGlzLm9wdGlvbnMuc2NhbGUuY29sb3J9KX19XCJ0cm9uXCI9PT10aGlzLm9wdGlvbnMuc2tpbi50eXBlJiZ0aGlzLmRyYXdBcmMoc3ZnLHRoaXMuaG9vcEFyYyxcImhvb3BBcmNcIix7ZmlsbDp0aGlzLm9wdGlvbnMuc2tpbi5jb2xvcn0pLHRoaXMuZHJhd0FyYyhzdmcsdGhpcy50cmFja0FyYyxcInRyYWNrQXJjXCIse2ZpbGw6dGhpcy5vcHRpb25zLnRyYWNrQ29sb3J9KSx0aGlzLm9wdGlvbnMuZGlzcGxheVByZXZpb3VzP3RoaXMuY2hhbmdlRWxlbT10aGlzLmRyYXdBcmMoc3ZnLHRoaXMuY2hhbmdlQXJjLFwiY2hhbmdlQXJjXCIse2ZpbGw6dGhpcy5vcHRpb25zLnByZXZCYXJDb2xvcn0pOnRoaXMuY2hhbmdlRWxlbT10aGlzLmRyYXdBcmMoc3ZnLHRoaXMuY2hhbmdlQXJjLFwiY2hhbmdlQXJjXCIse1wiZmlsbC1vcGFjaXR5XCI6MH0pLHRoaXMudmFsdWVFbGVtPXRoaXMuZHJhd0FyYyhzdmcsdGhpcy52YWx1ZUFyYyxcInZhbHVlQXJjXCIse2ZpbGw6dGhpcy5vcHRpb25zLmJhckNvbG9yfSk7dmFyIGN1cnNvcj1cInBvaW50ZXJcIjt0aGlzLm9wdGlvbnMucmVhZE9ubHkmJihjdXJzb3I9XCJkZWZhdWx0XCIpLHRoaXMuZHJhd0FyYyhzdmcsdGhpcy5pbnRlcmFjdEFyYyxcImludGVyYWN0QXJjXCIse1wiZmlsbC1vcGFjaXR5XCI6MCxjdXJzb3I6Y3Vyc29yfSxjbGlja0ludGVyYWN0aW9uLGRyYWdCZWhhdmlvcil9LEtub2IucHJvdG90eXBlLmRyYXc9ZnVuY3Rpb24odXBkYXRlKXtmdW5jdGlvbiBkcmFnSW50ZXJhY3Rpb24oKXt0aGF0LmluRHJhZz0hMDt2YXIgeD1kMy5ldmVudC54LXRoYXQub3B0aW9ucy5zaXplLzIseT1kMy5ldmVudC55LXRoYXQub3B0aW9ucy5zaXplLzI7aW50ZXJhY3Rpb24oeCx5LCExKX1mdW5jdGlvbiBjbGlja0ludGVyYWN0aW9uKCl7dGhhdC5pbkRyYWc9ITE7dmFyIGNvb3Jkcz1kMy5tb3VzZSh0aGlzLnBhcmVudE5vZGUpLHg9Y29vcmRzWzBdLXRoYXQub3B0aW9ucy5zaXplLzIseT1jb29yZHNbMV0tdGhhdC5vcHRpb25zLnNpemUvMjtpbnRlcmFjdGlvbih4LHksITApfWZ1bmN0aW9uIGludGVyYWN0aW9uKHgseSxpc0ZpbmFsKXt2YXIgcmFkaWFucyxkZWx0YSxhcmM9TWF0aC5hdGFuKHkveCkvKE1hdGguUEkvMTgwKTtpZih4Pj0wJiYwPj15fHx4Pj0wJiZ5Pj0wP2RlbHRhPTkwOihkZWx0YT0yNzAsdGhhdC5vcHRpb25zLnN0YXJ0QW5nbGU8MCYmKGRlbHRhPS05MCkpLHJhZGlhbnM9KGRlbHRhK2FyYykqKE1hdGguUEkvMTgwKSx0aGF0LnZhbHVlPXRoYXQucmFkaWFuc1RvVmFsdWUocmFkaWFucyx0aGF0Lm9wdGlvbnMubWF4LHRoYXQub3B0aW9ucy5taW4sdGhhdC5vcHRpb25zLmVuZEFuZ2xlLHRoYXQub3B0aW9ucy5zdGFydEFuZ2xlKSx0aGF0LnZhbHVlPj10aGF0Lm9wdGlvbnMubWluJiZ0aGF0LnZhbHVlPD10aGF0Lm9wdGlvbnMubWF4JiYodGhhdC52YWx1ZT1NYXRoLnJvdW5kKH5+KCh0aGF0LnZhbHVlPDA/LS41Oi41KSt0aGF0LnZhbHVlL3RoYXQub3B0aW9ucy5zdGVwKSp0aGF0Lm9wdGlvbnMuc3RlcCoxMDApLzEwMCx0aGF0Lm9wdGlvbnMuc3RlcDwxJiYodGhhdC52YWx1ZT10aGF0LnZhbHVlLnRvRml4ZWQoMSkpLHVwZGF0ZSh0aGF0LnZhbHVlKSx0aGF0LnZhbHVlQXJjLmVuZEFuZ2xlKHRoYXQudmFsdWVUb1JhZGlhbnModGhhdC52YWx1ZSx0aGF0Lm9wdGlvbnMubWF4LHRoYXQub3B0aW9ucy5lbmRBbmdsZSx0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZSx0aGF0Lm9wdGlvbnMubWluKSksdGhhdC52YWx1ZUVsZW0uYXR0cihcImRcIix0aGF0LnZhbHVlQXJjKSxpc0ZpbmFsJiYodGhhdC5jaGFuZ2VBcmMuZW5kQW5nbGUodGhhdC52YWx1ZVRvUmFkaWFucyh0aGF0LnZhbHVlLHRoYXQub3B0aW9ucy5tYXgsdGhhdC5vcHRpb25zLmVuZEFuZ2xlLHRoYXQub3B0aW9ucy5zdGFydEFuZ2xlLHRoYXQub3B0aW9ucy5taW4pKSx0aGF0LmNoYW5nZUVsZW0uYXR0cihcImRcIix0aGF0LmNoYW5nZUFyYykpLHRoYXQub3B0aW9ucy5kaXNwbGF5SW5wdXQpKXt2YXIgdj10aGF0LnZhbHVlO1wiZnVuY3Rpb25cIj09dHlwZW9mIHRoYXQub3B0aW9ucy5pbnB1dEZvcm1hdHRlciYmKHY9dGhhdC5vcHRpb25zLmlucHV0Rm9ybWF0dGVyKHYpKSxkMy5zZWxlY3QodGhhdC5lbGVtZW50KS5zZWxlY3QoXCIjdGV4dFwiKS50ZXh0KHYrdGhhdC5vcHRpb25zLnVuaXR8fFwiXCIpfX1kMy5zZWxlY3QodGhpcy5lbGVtZW50KS5zZWxlY3QoXCJzdmdcIikucmVtb3ZlKCk7dmFyIHRoYXQ9dGhpczt0aGF0LmNyZWF0ZUFyY3MoKTt2YXIgZHJhZ0JlaGF2aW9yPWQzLmJlaGF2aW9yLmRyYWcoKS5vbihcImRyYWdcIixkcmFnSW50ZXJhY3Rpb24pLm9uKFwiZHJhZ2VuZFwiLGNsaWNrSW50ZXJhY3Rpb24pO3RoYXQuZHJhd0FyY3MoY2xpY2tJbnRlcmFjdGlvbixkcmFnQmVoYXZpb3IpLHRoYXQub3B0aW9ucy5hbmltYXRlLmVuYWJsZWQ/dGhhdC52YWx1ZUVsZW0udHJhbnNpdGlvbigpLmVhc2UodGhhdC5vcHRpb25zLmFuaW1hdGUuZWFzZSkuZHVyYXRpb24odGhhdC5vcHRpb25zLmFuaW1hdGUuZHVyYXRpb24pLnR3ZWVuKFwiXCIsZnVuY3Rpb24oKXt2YXIgaT1kMy5pbnRlcnBvbGF0ZSh0aGF0LnZhbHVlVG9SYWRpYW5zKHRoYXQub3B0aW9ucy5zdGFydEFuZ2xlLDM2MCksdGhhdC52YWx1ZVRvUmFkaWFucyh0aGF0LnZhbHVlLHRoYXQub3B0aW9ucy5tYXgsdGhhdC5vcHRpb25zLmVuZEFuZ2xlLHRoYXQub3B0aW9ucy5zdGFydEFuZ2xlLHRoYXQub3B0aW9ucy5taW4pKTtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIHZhbD1pKHQpO3RoYXQudmFsdWVFbGVtLmF0dHIoXCJkXCIsdGhhdC52YWx1ZUFyYy5lbmRBbmdsZSh2YWwpKSx0aGF0LmNoYW5nZUVsZW0uYXR0cihcImRcIix0aGF0LmNoYW5nZUFyYy5lbmRBbmdsZSh2YWwpKX19KToodGhhdC5jaGFuZ2VBcmMuZW5kQW5nbGUodGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLnZhbHVlLHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLmVuZEFuZ2xlLHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5taW4pKSx0aGF0LmNoYW5nZUVsZW0uYXR0cihcImRcIix0aGF0LmNoYW5nZUFyYyksdGhhdC52YWx1ZUFyYy5lbmRBbmdsZSh0aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMudmFsdWUsdGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMuZW5kQW5nbGUsdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLm1pbikpLHRoYXQudmFsdWVFbGVtLmF0dHIoXCJkXCIsdGhhdC52YWx1ZUFyYykpfSxLbm9iLnByb3RvdHlwZS5zZXRWYWx1ZT1mdW5jdGlvbihuZXdWYWx1ZSl7aWYoIXRoaXMuaW5EcmFnJiZ0aGlzLnZhbHVlPj10aGlzLm9wdGlvbnMubWluJiZ0aGlzLnZhbHVlPD10aGlzLm9wdGlvbnMubWF4KXt2YXIgcmFkaWFucz10aGlzLnZhbHVlVG9SYWRpYW5zKG5ld1ZhbHVlLHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLmVuZEFuZ2xlLHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5taW4pO2lmKHRoaXMudmFsdWU9TWF0aC5yb3VuZCh+figoMD5uZXdWYWx1ZT8tLjU6LjUpK25ld1ZhbHVlL3RoaXMub3B0aW9ucy5zdGVwKSp0aGlzLm9wdGlvbnMuc3RlcCoxMDApLzEwMCx0aGlzLm9wdGlvbnMuc3RlcDwxJiYodGhpcy52YWx1ZT10aGlzLnZhbHVlLnRvRml4ZWQoMSkpLHRoaXMuY2hhbmdlQXJjLmVuZEFuZ2xlKHJhZGlhbnMpLGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpLnNlbGVjdChcIiNjaGFuZ2VBcmNcIikuYXR0cihcImRcIix0aGlzLmNoYW5nZUFyYyksdGhpcy52YWx1ZUFyYy5lbmRBbmdsZShyYWRpYW5zKSxkMy5zZWxlY3QodGhpcy5lbGVtZW50KS5zZWxlY3QoXCIjdmFsdWVBcmNcIikuYXR0cihcImRcIix0aGlzLnZhbHVlQXJjKSx0aGlzLm9wdGlvbnMuZGlzcGxheUlucHV0KXt2YXIgdj10aGlzLnZhbHVlO1wiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMub3B0aW9ucy5pbnB1dEZvcm1hdHRlciYmKHY9dGhpcy5vcHRpb25zLmlucHV0Rm9ybWF0dGVyKHYpKSxkMy5zZWxlY3QodGhpcy5lbGVtZW50KS5zZWxlY3QoXCIjdGV4dFwiKS50ZXh0KHYrdGhpcy5vcHRpb25zLnVuaXR8fFwiXCIpfX19LHVpLktub2I9S25vYix1aS5rbm9iRGlyZWN0aXZlPWZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHNjb3BlOnt2YWx1ZTpcIj1cIixvcHRpb25zOlwiPVwifSxsaW5rOmZ1bmN0aW9uKHNjb3BlLGVsZW1lbnQpe3Njb3BlLnZhbHVlPXNjb3BlLnZhbHVlfHwwO3ZhciBkZWZhdWx0T3B0aW9ucz17c2tpbjp7dHlwZTpcInNpbXBsZVwiLHdpZHRoOjEwLGNvbG9yOlwicmdiYSgyNTUsMCwwLC41KVwiLHNwYWNlV2lkdGg6NX0sYW5pbWF0ZTp7ZW5hYmxlZDohMCxkdXJhdGlvbjoxZTMsZWFzZTpcImJvdW5jZVwifSxzaXplOjIwMCxzdGFydEFuZ2xlOjAsZW5kQW5nbGU6MzYwLHVuaXQ6XCJcIixkaXNwbGF5SW5wdXQ6ITAsaW5wdXRGb3JtYXR0ZXI6ZnVuY3Rpb24odil7cmV0dXJuIHZ9LHJlYWRPbmx5OiExLHRyYWNrV2lkdGg6NTAsYmFyV2lkdGg6NTAsdHJhY2tDb2xvcjpcInJnYmEoMCwwLDAsMClcIixiYXJDb2xvcjpcInJnYmEoMjU1LDAsMCwuNSlcIixwcmV2QmFyQ29sb3I6XCJyZ2JhKDAsMCwwLDApXCIsdGV4dENvbG9yOlwiIzIyMlwiLGJhckNhcDowLGZvbnRTaXplOlwiYXV0b1wiLHN1YlRleHQ6e2VuYWJsZWQ6ITEsdGV4dDpcIlwiLGNvbG9yOlwiZ3JheVwiLGZvbnQ6XCJhdXRvXCJ9LGJnQ29sb3I6XCJcIixzY2FsZTp7ZW5hYmxlZDohMSx0eXBlOlwibGluZXNcIixjb2xvcjpcImdyYXlcIix3aWR0aDo0LHF1YW50aXR5OjIwLGhlaWdodDoxMCxzcGFjZVdpZHRoOjE1fSxzdGVwOjEsZGlzcGxheVByZXZpb3VzOiExLG1pbjowLG1heDoxMDAsZHluYW1pY09wdGlvbnM6ITF9O3Njb3BlLm9wdGlvbnM9YW5ndWxhci5tZXJnZShkZWZhdWx0T3B0aW9ucyxzY29wZS5vcHRpb25zKTt2YXIga25vYj1uZXcgdWkuS25vYihlbGVtZW50WzBdLHNjb3BlLnZhbHVlLHNjb3BlLm9wdGlvbnMpO2lmKHNjb3BlLiR3YXRjaChcInZhbHVlXCIsZnVuY3Rpb24obmV3VmFsdWUsb2xkVmFsdWUpe251bGw9PT1uZXdWYWx1ZSYmXCJ1bmRlZmluZWRcIj09dHlwZW9mIG5ld1ZhbHVlfHxcInVuZGVmaW5lZFwiPT10eXBlb2Ygb2xkVmFsdWV8fG5ld1ZhbHVlPT09b2xkVmFsdWV8fGtub2Iuc2V0VmFsdWUobmV3VmFsdWUpfSksc2NvcGUub3B0aW9ucy5keW5hbWljT3B0aW9ucyl7dmFyIGlzRmlyc3RXYXRjaE9uT3B0aW9ucz0hMDtzY29wZS4kd2F0Y2goXCJvcHRpb25zXCIsZnVuY3Rpb24oKXtpZihpc0ZpcnN0V2F0Y2hPbk9wdGlvbnMpaXNGaXJzdFdhdGNoT25PcHRpb25zPSExO2Vsc2V7dmFyIG5ld09wdGlvbnM9YW5ndWxhci5tZXJnZShkZWZhdWx0T3B0aW9ucyxzY29wZS5vcHRpb25zKTtrbm9iPW5ldyB1aS5Lbm9iKGVsZW1lbnRbMF0sc2NvcGUudmFsdWUsbmV3T3B0aW9ucyksZHJhd0tub2IoKX19LCEwKX12YXIgZHJhd0tub2I9ZnVuY3Rpb24oKXtrbm9iLmRyYXcoZnVuY3Rpb24odmFsdWUpe3Njb3BlLiRhcHBseShmdW5jdGlvbigpe3Njb3BlLnZhbHVlPXZhbHVlfSl9KX07ZHJhd0tub2IoKX19fSxhbmd1bGFyLm1vZHVsZShcInVpLmtub2JcIixbXSkuZGlyZWN0aXZlKFwidWlLbm9iXCIsdWkua25vYkRpcmVjdGl2ZSl9KCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBhbmd1bGFyIG1vZHVsZXNcbi8vIHJlcXVpcmUoJ2FuZ3VsYXItbW9kdWxlLXNhbml0aXplJyk7XG4vLyByZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xuXG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL19pbmRleCcpO1xucmVxdWlyZSgnLi9zZXJ2aWNlcy9faW5kZXgnKTtcbnJlcXVpcmUoJy4vbW9kZWxzL19pbmRleCcpO1xucmVxdWlyZSgnLi9kaXJlY3RpdmVzL19pbmRleCcpO1xuXG5yZXF1aXJlKCcuLi9ib3dlcl9jb21wb25lbnRzL25nLWtub2IvZGlzdC9uZy1rbm9iLm1pbicpO1xucmVxdWlyZSgnLi4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLWFuaW1hdGUvYW5ndWxhci1hbmltYXRlLm1pbicpO1xucmVxdWlyZSgnLi4vYm93ZXJfY29tcG9uZW50cy9pb25pYy1hZHZhbmNlZC1jYXJvdXNlbC9kaXN0L2FkdmFuY2VkLWNhcm91c2VsLm1pbicpO1xuXG5cblxuLy8gY3JlYXRlIGFuZCBib290c3RyYXAgYXBwbGljYXRpb25cbmFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgdmFyIHJlcXVpcmVzID0gW1xuICAgICdpb25pYycsXG4gICAgJ2FwcC5jb250cm9sbGVycycsXG4gICAgJ2FwcC5zZXJ2aWNlcycsXG4gICAgJ2FwcC5tb2RlbHMnLFxuICAgICdhcHAuZGlyZWN0aXZlcycsXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgJ3VpLmtub2InLFxuICAgICdhQ2Fyb3VzZWwnLFxuICAgICduZ0FuaW1hdGUnXG4gICAgLy8gJ3RlbXBsYXRlcycsXG4gICAgLy8gJ25nU2FuaXRpemUnLFxuICBdO1xuXG4gIC8vIG1vdW50IG9uIHdpbmRvdyBmb3IgdGVzdGluZ1xuICB3aW5kb3cuYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIHJlcXVpcmVzKTtcblxuICBhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29uc3RhbnQoJ0FwcFNldHRpbmdzJywgcmVxdWlyZSgnLi9jb25zdGFudHMuZGV2ZWxvcG1lbnQnKSk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbmZpZyhyZXF1aXJlKCcuL29uX2NvbmZpZycpKTtcblxuICBhbmd1bGFyLm1vZHVsZSgnYXBwJykucnVuKHJlcXVpcmUoJy4vb25fcnVuJykpO1xuXG5cbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBhbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydhcHAnXSk7ICAgXG4gIH0sICgxMDAwKSk7XG4gIFxuXG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBBcHBTZXR0aW5ncyA9IHtcbiAgeW9jYWxBUEk6e1xuICAgIC8vIGJhc2U6ICdodHRwOi8veW9lbmRwb2ludDQtd2Jicy5yaGNsb3VkLmNvbS9hcGkvdjEveW9rYWwvZGF0YS8nXG4gICAgYmFzZTogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODEwMC9hcGkvdjEveW9rYWwvZGF0YS8nXG4gIH0sXG5cbiAgR01BUF9ERUZBVUxUOntcbiAgXHRSQURJVVM6IDgwMCxcbiAgXHRaT09NOiAgIDE0XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwU2V0dGluZ3M7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBBcHBDdHJsKCRsb2csICRyb290U2NvcGUsICRzY29wZSwgJGlvbmljTW9kYWwsICR0aW1lb3V0LCBjb29yZGluYXRlcywgQXBwU2V0dGluZ3MpIHtcblxuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnQXBwQ3RybCcpO1xuXG4gIHZhciB2bSA9IHRoaXM7XG4gIC8vIHNldCBjdXJlbnQgcG9zaXRpb24gdG8gcm9vdFNjb3BlIHRvIG1ha2UgZ2xvYmFsbHkgYXZhaWxhYmxlIFxuICAkcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbiA9IGNvb3JkaW5hdGVzO1xuICBcblxuICAvLyBGb3JtIGRhdGEgZm9yIHRoZSBsb2dpbiBtb2RhbFxuICAkc2NvcGUubG9naW5EYXRhID0ge307XG5cbiAgLy8gQ3JlYXRlIHRoZSBsb2dpbiBtb2RhbCB0aGF0IHdlIHdpbGwgdXNlIGxhdGVyXG4gICRpb25pY01vZGFsLmZyb21UZW1wbGF0ZVVybCgndGVtcGxhdGVzL2xvZ2luLmh0bWwnLCB7XG4gICAgc2NvcGU6ICRzY29wZVxuICB9KS50aGVuKGZ1bmN0aW9uKG1vZGFsKSB7XG4gICAgJHNjb3BlLm1vZGFsID0gbW9kYWw7XG4gIH0pO1xuXG4gIC8vIFRyaWdnZXJlZCBpbiB0aGUgbG9naW4gbW9kYWwgdG8gY2xvc2UgaXRcbiAgJHNjb3BlLmNsb3NlTG9naW4gPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUubW9kYWwuaGlkZSgpO1xuICB9O1xuXG4gIC8vIE9wZW4gdGhlIGxvZ2luIG1vZGFsXG4gICRzY29wZS5sb2dpbiA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5tb2RhbC5zaG93KCk7XG4gIH07XG5cbiAgLy8gUGVyZm9ybSB0aGUgbG9naW4gYWN0aW9uIHdoZW4gdGhlIHVzZXIgc3VibWl0cyB0aGUgbG9naW4gZm9ybVxuICAkc2NvcGUuZG9Mb2dpbiA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdEb2luZyBsb2dpbicsICRzY29wZS5sb2dpbkRhdGEpO1xuXG4gICAgLy8gU2ltdWxhdGUgYSBsb2dpbiBkZWxheS4gUmVtb3ZlIHRoaXMgYW5kIHJlcGxhY2Ugd2l0aCB5b3VyIGxvZ2luXG4gICAgLy8gY29kZSBpZiB1c2luZyBhIGxvZ2luIHN5c3RlbVxuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLmNsb3NlTG9naW4oKTtcbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuICBcblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignQXBwQ3RybCcsIEFwcEN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gQnJvd3NlQ3RybCgkc2NvcGUsICRyb290U2NvcGUsICRxLCAkaHR0cCwgJGxvZywgJGZpbHRlciwgJHRpbWVvdXQsIExvY2F0aW9uc1NlcnZpY2UsICAkaW9uaWNMb2FkaW5nLCAgJGlvbmljU2xpZGVCb3hEZWxlZ2F0ZSwgQXBwU2V0dGluZ3MpIHtcbiAgICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnQnJvd3NlQ3RybCcpO1xuXG4gXHQvLyBWaWV3TW9kZWxcbiAgXHR2YXIgdm0gPSB0aGlzO1xuICAgIHZtLnJhZGl1cyA9IEFwcFNldHRpbmdzLkdNQVBfUkFESVVTO1xuICAgICRzY29wZS5yYWRpdXMgPSBBcHBTZXR0aW5ncy5HTUFQX1JBRElVUztcbiAgICAkc2NvcGUuQ3VycmVudENvb3JkcyA9ICAkcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbjtcblxuICAgICRzY29wZS5sb2NhdGlvbnMgPVtdO1xuICAgICRzY29wZS5sb2NhdGlvbnNfZ3JvdXBzID1bXTtcbiAgICAkc2NvcGUubG9jYXRpb25zX2xvYWRlZCA9IDA7IFxuICAgICRzY29wZS5jYXJvdXNlbHMgPSBbXTtcblxuICAgICRpb25pY0xvYWRpbmcuc2hvdyh7XG4gICAgICAgIHRlbXBsYXRlOiBcIkZpbmRpbmcgUmFkIFNwb3RzIC4uLlwiLFxuICAgICAgICBiYWNrZHJvcDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgJHNjb3BlLmNhcm91c2VsT3B0aW9ucyA9IHtcbiAgICAgICAgdGVtcGxhdGUgICAgICA6ICcuLi90ZW1wbGF0ZXMvbG9jYXRpb25zLWNhcm91c2VsLml0ZW0uaHRtbCcsIC8vIHRlbXBsYXRlVXJsIGluIGNhc2UgeW91IGRvbid0IG5lZWQgdG8gcGFzcyBhIGRpcmVjdGl2ZSBidXQganVzdCBhIGh0bWwgdmlld1xuICAgICAgICBhbGlnbiAgICAgICAgIDogJ2xlZnQnLCAvLyBhbGlnbmVtZW50IG9mIHRoZSBjYXJvdXNlbFxuICAgICAgICBzZWxlY3RGaXJzdCAgIDogdHJ1ZSxcbiAgICAgICAgY2VudGVyT25TZWxlY3Q6IGZhbHNlLCAvLyBjZW50ZXIgY2Fyb3VzZWwgd2hlbiBhbiBpdGVtIGlzIHNlbGVjdGVkXG4gICAgfTtcblxuICAgICRzY29wZS5vblNlbGVjdENhcm91c2VsID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB2YXIgY2F0ID0gJHNjb3BlLmdldF9jYXRlZ29yeV9zbHVnKGl0ZW0uY2F0YWdvcnlsZXZlbDEpO1xuICAgICAgICAkbG9nLmxvZygnQ2Fyb3VzZWwgJytjYXQrJyBpdGVtIHNlbGVjdGVkOntuYW1lfScsIGl0ZW0pO1xuICAgICAgICAkc2NvcGUuY2Fyb3VzZWxzW2NhdF0uaXRlbVNlbGVjdGVkID0gaXRlbTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnJhbmRvRXhwZW5zZVdpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSsxKTsgIFxuICAgIH07XG4gICAgXG4gICAgJHNjb3BlLmdldF9jYXRlZ29yeV9zbHVnID0gZnVuY3Rpb24gKGNhdF9uYW1lKSB7XG4gICAgICAgIHJldHVybiBjYXRfbmFtZS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbihjYXQpIHsgcmV0dXJuIGNhdC50b0xvd2VyQ2FzZSgpLnRyaW0oKTsgfSkuam9pbignLScpO1xuICAgIH1cblxuICAgIExvY2F0aW9uc1NlcnZpY2UuYWxsKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2NhdGlvbnMgPSBkYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBncm91cCBsb2NhdGlvbnMgYnkgY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCB0cmF2ZWxUaW1lIGZvciBlYWNoIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgY2Fyb3VzZWxPcHRpb25zIGZvciBlYWNoIGNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubG9jYXRpb25zX2dyb3VwcyA9IF8uY2hhaW4oZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ3JvdXBCeShcImNhdGFnb3J5bGV2ZWwxXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihsb2NhdGlvbnMsIGNhdCwgYXJyYXkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbnMubWFwKGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5zZXRUcmF2ZWxUaW1lKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubG9jYXRpb25zX2xvYWRlZCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogY2F0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlfc2x1ZzogJHNjb3BlLmdldF9jYXRlZ29yeV9zbHVnKGNhdCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbnM6IGxvY2F0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihjYXRlZ29yeV9vYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmNhcm91c2Vsc1tjYXRlZ29yeV9vYmouY2F0ZWdvcnlfc2x1Z10gPSBhbmd1bGFyLmV4dGVuZCh7fSwge2Nhcm91c2VsSUQ6ICdsb2NhdGlvbnMtY2Fyb3VzZWwtJytjYXRlZ29yeV9vYmouY2F0ZWdvcnlfc2x1ZywgaXRlbVNlbGVjdGVkOnt9fSwgJHNjb3BlLmNhcm91c2VsT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYXRlZ29yeV9vYmo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgnbG9jYXRpb25zX2xvYWRlZCcsZnVuY3Rpb24obmV3X3ZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG5ld192YWwgPT0gZGF0YS5sZW5ndGgpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvcnQgbG9jYXRpb24gZ3JvdXBzIGFscGFoYmV0aWNhbGx5IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzb3J0IGdyb3VwIGxvY2F0aW9ucyBieSB0cmF2ZWxUaW1lLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2NhdGlvbnNfZ3JvdXBzX3NvcnRlZCA9IF8uY2hhaW4oJHNjb3BlLmxvY2F0aW9uc19ncm91cHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNvcnRlZF9sb2NhdGlvbnMgPSAkZmlsdGVyKCdvcmRlckJ5JykoZ3JvdXAubG9jYXRpb25zLCAndHJhdmVsVGltZS52YWx1ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyLmV4dGVuZCh7fSxncm91cCwge2xvY2F0aW9uczpzb3J0ZWRfbG9jYXRpb25zfSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0QnkoJ2NhdGVnb3J5JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW9uaWNMb2FkaW5nLmhpZGUoKTsgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgIFx0ICAgICAgICAgICAgICAgIH0pO1xuXG5cblxufTtcblxuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdCcm93c2VDdHJsJywgQnJvd3NlQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBDb25uZWN0Q3RybCgkbG9nLCAkcm9vdFNjb3BlLCAkc2NvcGUsIEFwcFNldHRpbmdzKSB7XG5cbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0Nvbm5lY3RDdHJsJyk7XG5cbiAgdmFyIHZtID0gdGhpcztcblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignQ29ubmVjdEN0cmwnLCBDb25uZWN0Q3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBMb2dpbkN0cmwoJGxvZywgJHJvb3RTY29wZSwgJHNjb3BlLCBBcHBTZXR0aW5ncykge1xuXG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdMb2dpbkN0cmwnKTtcblxuICB2YXIgdm0gPSB0aGlzO1xuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBMb2dpbkN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gTWFwQ3RybCgkcm9vdFNjb3BlLCAkc2NvcGUsICRsb2csICRpb25pY0xvYWRpbmcsIEFwcFNldHRpbmdzLCBHTWFwLCBMb2NhdGlvbnNTZXJ2aWNlLCAkcSkge1xuXG4gICAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoXCJNYXBDdHJsXCIpO1xuXG4gXHQgIC8vIFZpZXdNb2RlbFxuICBcdHZhciB2bSA9IHRoaXM7XG4gICAgdmFyIGN1cnJlbnRDZW50ZXIgPSAkcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbjtcblxuICAgIHZtLnRoaXNfcmFkaXVzID0gNTAwMDtcbiAgICB2bS5nbWFwID0gbmV3IEdNYXAoe3pvb206MTMsIHJhZGl1czp2bS50aGlzX3JhZGl1c30pOyAgICBcbiAgICB2bS5nbWFwLmhlaWdodCA9IDYyNTtcbiAgICB2bS5tYXJrZXJzID0gW107ICAgIFxuICAgIC8vIHZtLmdtYXAucGxvdExvY2F0aW9ucygpO1xuICAgIFxuICAgIHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZSA9IFtdO1xuXG4gICAgdm0ua25vYiA9e1xuICAgICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgICAgb3B0aW9uczp7IGR5bmFtaWNPcHRpb25zOiB0cnVlIH0sXG4gICAgICAgICAgICB9O1xuXG4gICAgXG4gICAgdmFyIHNldEtub2JWYWx1ZSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgLy8gc2V0IHVpLmtub2Igb3B0aW9ucyBoZXJlXG4gICAgICAvLyB0aGlzIHRyaWNrcyB0aGUga25vYiBpbnRvIHVwZGF0aW5nIHRoZSB2YWx1ZSBjb3JyZWN0bHlcbiAgICAgICAgICB2bS5rbm9iID17XG4gICAgICAgICAgICAgIHZhbHVlOnZhbCxcbiAgICAgICAgICAgICAgb3B0aW9uczp7XG4gICAgICAgICAgICAgICAgc2l6ZTogMjAwLFxuICAgICAgICAgICAgICAgIG1pbjogIDEsXG4gICAgICAgICAgICAgICAgbWF4OiAgMTAwMDAsXG4gICAgICAgICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICAgICAgICBiYXJDb2xvcjogJyM1QkMwMUUnLFxuICAgICAgICAgICAgICAgIHRyYWNrQ29sb3I6ICcjMjEyMTIxJyxcbiAgICAgICAgICAgICAgICB0cmFja1dpZHRoOiAxNSxcbiAgICAgICAgICAgICAgICBiYXJXaWR0aDogMzAsXG4gICAgICAgICAgICAgICAgc3ViVGV4dDoge1xuICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdtZXRlciByYWRpdXMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgIH07XG4gICBcblxuICAgIHZhciBzZXRNYXJrZXJzID0gZnVuY3Rpb24obG9jYXRpb25zKSB7XG4gICAgICBsb2NhdGlvbnMubWFwKGZ1bmN0aW9uKGxvY2F0ZSl7XG4gICAgICAgICAgICB2YXIgbWFya2VyID0gdm0uZ21hcC5kcm9wTWFya2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogcGFyc2VGbG9hdChsb2NhdGUubGF0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHBhcnNlRmxvYXQobG9jYXRlLmxvbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICAgICBsb2NhdGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcDogICAgICAgdm0uZ21hcC5tYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAgIDAuMTI1XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZtLm1hcmtlcnNbbG9jYXRlLl9pZF0gPSBtYXJrZXI7XG4gICAgICAgICAgICB2YXIgaW5mb1dORFcgPSB2bS5nbWFwLmJ1aWxkSW5mb1dpbmRvdyhsb2NhdGUsIG1hcmtlcik7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZtLm1hcmtlcnM7XG4gICAgfTtcblxuICAgIFxuICAgICRpb25pY0xvYWRpbmcuc2hvdyh7XG4gICAgICAgIHRlbXBsYXRlOiBcIkV4cGxvcmluZyBZb3VyIEFyZWEgLi4uXCIsXG4gICAgICAgIGJhY2tkcm9wOiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyBnZXQgYWxsIGxvY2F0aW9ucyBhcm91bmQgc3BlY2lmaWVkIGFyZWFcbiAgICAgIExvY2F0aW9uc1NlcnZpY2VcbiAgICAgICAgLmdldCh7cmFkaXVzOiB2bS50aGlzX3JhZGl1cywgXG4gICAgICAgICAgICAgIGxhdDogICAgY3VycmVudENlbnRlci5sYXRpdHVkZSwgXG4gICAgICAgICAgICAgIGxuZzogICAgY3VycmVudENlbnRlci5sb25naXR1ZGV9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihsb2NhdGlvbnMpIHtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBzb3J0IGxvY2F0aW9ucyBieSBkaXN0bmFjZSBcbiAgICAgICAgICB2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UgPSBfLnNvcnRCeShsb2NhdGlvbnMsICdkaXN0YW5jZWZyb21sb2NhdGlvbicpO1xuICAgICAgICAgIHNldE1hcmtlcnModm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlKTtcblxuICAgICAgICAgIC8vIHNldCB0aGUgbG9jYXRpb25zIHJhZGl1cyBhbmQga25vYiB2YWx1ZSB0byB0aGUgY2xvc2VzIGxvY3Rpb24gdG8gdGVzdFxuICAgICAgICAgIHZtLnRoaXNfcmFkaXVzID0gXy5maXJzdCh2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UpLmRpc3RhbmNlZnJvbWxvY2F0aW9uO1xuICAgICAgICAgIHZtLmxvY2F0aW9uc1JhZGl1cyA9IHZtLmdtYXAuc2V0UmFkaXVzQ2lyY2xlKHtyYWRpdXM6IHZtLnRoaXNfcmFkaXVzfSk7XG4gICAgICAgICAgdm0uZ21hcC5tYXAuZml0Qm91bmRzKHZtLmxvY2F0aW9uc1JhZGl1cy5nZXRCb3VuZHMoKSk7XG4gICAgICAgICAgXG4gICAgICAgICAgc2V0S25vYlZhbHVlKHZtLnRoaXNfcmFkaXVzKTtcbiAgICAgICAgICAkaW9uaWNMb2FkaW5nLmhpZGUoKTtcblxuXG4gICAgICAgIH0pOy8vZW5kIC50aGVuXG5cblxuXG5cblxuXG5cbiAgICAgICAgICRzY29wZS4kd2F0Y2goXCJNYXAua25vYi52YWx1ZVwiLCBmdW5jdGlvbihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwibmV3IE1hcC5rbm9iLnZhbHVlOiBcIituZXdWYWx1ZSk7XG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcIm9sZCBNYXAua25vYi52YWx1ZTogXCIrb2xkVmFsdWUpO1xuXG4gICAgICAgICAgICBpZih2bS5sb2NhdGlvbnNSYWRpdXMpIHZtLmxvY2F0aW9uc1JhZGl1cy5zZXRSYWRpdXMobmV3VmFsdWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHZtLmxvY2F0aW9uc1JhZGl1cyl7XG5cbiAgICAgICAgICAgICAgIC8vIEdldCB0aGUgYm91bmRzXG4gICAgICAgICAgICAgIHZhciBjaXJjbGVCb3VuZHMgPSB2bS5sb2NhdGlvbnNSYWRpdXMuZ2V0Qm91bmRzKCk7XG4gICAgICAgICAgICAgIHZhciBtYXBCb3VuZHMgPSB2bS5nbWFwLm1hcC5nZXRCb3VuZHMoKTtcblxuXG4gICAgICAgICAgICAgIHZhciBuZSA9IGNpcmNsZUJvdW5kcy5nZXROb3J0aEVhc3QoKTsgLy8gTGF0TG5nIG9mIHRoZSBub3J0aC1lYXN0IGNvcm5lclxuICAgICAgICAgICAgICB2YXIgc3cgPSBjaXJjbGVCb3VuZHMuZ2V0U291dGhXZXN0KCk7XG4gICAgICAgICAgICAgIHZhciBudyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobmUubGF0KCksIHN3LmxuZygpKTtcbiAgICAgICAgICAgICAgdmFyIHNlID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhzdy5sYXQoKSwgbmUubG5nKCkpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgdmFyIExhdExuZ0xpc3QgPSBuZXcgQXJyYXkgKG53LCBzZSk7XG5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGlmKCFtYXBCb3VuZHMuY29udGFpbnMobmUpKXtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgTHRMZ0xlbiA9IExhdExuZ0xpc3QubGVuZ3RoOyBpIDwgTHRMZ0xlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAvLyAgQW5kIGluY3JlYXNlIHRoZSBib3VuZHMgdG8gdGFrZSB0aGlzIHBvaW50XG4gICAgICAgICAgICAgICAgICBtYXBCb3VuZHMuZXh0ZW5kKExhdExuZ0xpc3RbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2bS5nbWFwLm1hcC5maXRCb3VuZHMobWFwQm91bmRzKTtcbiAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdm0uZ21hcC5tYXAuZml0Qm91bmRzKGNpcmNsZUJvdW5kcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB9Ly9lbmQgaWYodm0ubG9jYXRpb25zUmFkaXVzKVxuICAgICAgICAgICBcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAvLyBzaG93L3JldmVhbCBsb2NhdGlvbnMgaW5zaWRlIHJhZGl1c1xuICAgICAgICAgICAgdm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlLm1hcChmdW5jdGlvbihsb2NhdGUpe1xuICAgICAgICAgICAgICAgICAgaWYoIGxvY2F0ZS5kaXN0YW5jZWZyb21sb2NhdGlvbiA8IG5ld1ZhbHVlICl7XG4gICAgICAgICAgICAgICAgICAgIHZtLm1hcmtlcnNbbG9jYXRlLl9pZF0uc2V0T3BhY2l0eSgxKTtcbiAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdm0ubWFya2Vyc1tsb2NhdGUuX2lkXS5zZXRPcGFjaXR5KDApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7Ly92bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UubWFwXG5cblxuICAgICAgICB9KTsvLy8kc2NvcGUuJHdhdGNoIFwiTWFwLmtub2IudmFsdWVcIlxuICAgICAgXG4gICAgXG5cblxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG5cbiAgXG4gIFxuXG4gICRyb290U2NvcGUuJG9uKCdtYXJrZXI6Y2xpY2tlZCcsIGZ1bmN0aW9uKGUsIGxvY2FsZSkge1xuICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICBcbiAgICAgIHZtLmdtYXAuaGVpZ2h0ID0gdm0uZ21hcC5oZWlnaHQvMjtcbiAgICAgIHZtLmdtYXAubWFwLnBhblRvKHtsYXQ6cGFyc2VGbG9hdChsb2NhbGUubGF0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgbG5nOnBhcnNlRmxvYXQobG9jYWxlLmxvbmcpfSk7XG4gICAgfSk7XG4gICAgXG4gIH0pO1xufTsvLy8vIE1hcEN0cmxcblxuXG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ01hcEN0cmwnLCBNYXBDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIFBsYXlsaXN0Q3RybCgkc2NvcGUpIHtcbiAgXG5cblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignUGxheWxpc3RDdHJsJywgUGxheWxpc3RDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIFBsYXlsaXN0c0N0cmwoJHNjb3BlKSB7XG4gIFxuICRzY29wZS5wbGF5bGlzdHMgPSBbXG4gICAgeyB0aXRsZTogJ1JlZ2dhZScsIGlkOiAxIH0sXG4gICAgeyB0aXRsZTogJ0NoaWxsJywgaWQ6IDIgfSxcbiAgICB7IHRpdGxlOiAnRHVic3RlcCcsIGlkOiAzIH0sXG4gICAgeyB0aXRsZTogJ0luZGllJywgaWQ6IDQgfSxcbiAgICB7IHRpdGxlOiAnUmFwJywgaWQ6IDUgfSxcbiAgICB7IHRpdGxlOiAnQ293YmVsbCcsIGlkOiA2IH1cbiAgXTtcblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignUGxheWxpc3RzQ3RybCcsIFBsYXlsaXN0c0N0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbnRyb2xsZXJzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmRpcmVjdGl2ZXMnLCBbXSk7XG5cbmJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqX2luZGV4fCouc3BlYykuanMnXSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGlyZWN0aXZlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIG1BcHBMb2FkaW5nKCRsb2csICRhbmltYXRlKXtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoIFwibUFwcExvYWRpbmdcIiApO1xuICBcblxuICAvLyBSdW5zIGR1cmluZyBjb21waWxlXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICAgICdDJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cmlidXRlcywgY29udHJvbGxlciwgdHJhbnNjbHVkZUZuKSB7XG4gICAgICRhbmltYXRlLmxlYXZlKCBcbiAgICAgXHRlbGVtZW50LmNoaWxkcmVuKCkuZXEoIDEgKVxuICAgICBcdCkudGhlbihcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsZWFudXBBZnRlckFuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIFx0JGxvZy5sb2coJ2NsZWFudXBBZnRlckFuaW1hdGlvbicpO1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcm9vdCBkaXJlY3RpdmUgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIC8vIENsZWFyIHRoZSBjbG9zZWQtb3ZlciB2YXJpYWJsZSByZWZlcmVuY2VzLlxuICAgICAgICAgICAgICAgIHNjb3BlID0gZWxlbWVudCA9IGF0dHJpYnV0ZXMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgfVxuICB9XG5cblxufTtcblxuXG5kaXJlY3RpdmVzTW9kdWxlLmRpcmVjdGl2ZSgnbUFwcExvYWRpbmcnLCBtQXBwTG9hZGluZyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbW9kZWxzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiovXG5cbm1vZGVsc01vZHVsZS5mYWN0b3J5KCdHTWFwJywgZnVuY3Rpb24oJGxvZywgJHJvb3RTY29wZSwgTG9jYXRpb25zU2VydmljZSwgQXBwU2V0dGluZ3Mpe1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnR01hcCcpO1xuXG4gIHZhciBjdXJyZW50Q2VudGVyID0gJHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb247XG5cblxuXG4gIGZ1bmN0aW9uIEdNYXAobWFwU2V0dGluZ3Mpe1xuICAgIFxuICAgIHRoaXMubWFwT3B0aW9ucyA9IHtcbiAgICAgIGNlbnRlcjogICAge2xhdDogY3VycmVudENlbnRlci5sYXRpdHVkZSwgXG4gICAgICAgICAgICAgICAgICBsbmc6IGN1cnJlbnRDZW50ZXIubG9uZ2l0dWRlfSxcbiAgICAgIHpvb206ICAgICAgQXBwU2V0dGluZ3MuR01BUF9ERUZBVUxULlpPT00sXG4gICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLFxuICAgICAgcmFkaXVzOiAgICBBcHBTZXR0aW5ncy5HTUFQX0RFRkFVTFQuUkFESVVTLFxuICAgIH07XG5cbiAgICBhbmd1bGFyLmV4dGVuZCh0aGlzLm1hcE9wdGlvbnMsIG1hcFNldHRpbmdzKTtcbiAgICBcbiAgICAkbG9nLmRlYnVnKCd6b29tIHttYXBPcHRpb25zLnpvb219JywgdGhpcyk7XG4gICAgXG4gICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFwXCIpLCB0aGlzLm1hcE9wdGlvbnMpO1xuICAgIFxuIH07Ly9HTWFwIGNvbnN0cnVjdG9yXG5cblxuXG5cbiAgR01hcC5wcm90b3R5cGUgPXtcblxuICAgIGRyb3BNYXJrZXI6IGZ1bmN0aW9uKG1hcmtlckRhdGEpIHtcbiAgICAgIHZhciBfbWFya2VyU2V0dGluZ3MgPSB7fTtcbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKF9tYXJrZXJTZXR0aW5ncywgdGhpcy5tYXBPcHRpb25zLCBtYXJrZXJEYXRhKTtcbiAgICAgICRsb2cuZGVidWcoJ2Ryb3BNYXJrZXIgZm9yIFwie3RpdGxlfVwiXCIgYXQgXCJ7Y2VudGVyLmxhdH0sIHtjZW50ZXIubG5nfVwiJywgX21hcmtlclNldHRpbmdzKTtcbiAgICAgIFxuICAgICAgdmFyIF9tYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAgX21hcmtlclNldHRpbmdzLmNlbnRlcixcbiAgICAgICAgICAgIG1hcDogICAgICAgX21hcmtlclNldHRpbmdzLm1hcCxcbiAgICAgICAgICAgIHRpdGxlOiAgICAgX21hcmtlclNldHRpbmdzLnRpdGxlLFxuICAgICAgICAgICAgb3BhY2l0eTogICBfbWFya2VyU2V0dGluZ3Mub3BhY2l0eSxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1BcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX21hcmtlcjtcbiAgICB9LFxuXG5cbiAgICBidWlsZEluZm9XaW5kb3c6IGZ1bmN0aW9uKGxvY2F0aW9uSW5mbywgbG9jYXRpb25NYXJrZXIpIHtcbiAgICAgIHZhciBfbWFwID0gdGhpcztcblxuICAgICAgJGxvZy5kZWJ1ZygnYnVpbGRJbmZvV2luZG93IGZvciB7bmFtZX0nLCBsb2NhdGlvbkluZm8pO1xuICAgICAgdmFyIGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICc8aDMgaWQ9XCJmaXJzdEhlYWRpbmdcIiBjbGFzcz1cImZpcnN0SGVhZGluZ1wiPicrbG9jYXRpb25JbmZvLm5hbWUrJzwvaDM+JytcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxwPicrbG9jYXRpb25JbmZvLnRyYXZlbFRpbWUudGV4dCsnIHdhbGs8L3A+JytcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzbWFsbD4nK2xvY2F0aW9uSW5mby5kaXN0YW5jZWZyb21sb2NhdGlvbisnPC9zbWFsbD4nXG4gICAgICB9KTtcblxuICAgICAgbG9jYXRpb25NYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnbWFya2VyOmNsaWNrZWQnLCBsb2NhdGlvbkluZm8gKTtcbiAgICAgICAgaW5mb3dpbmRvdy5vcGVuKCBfbWFwLm1hcCAsbG9jYXRpb25NYXJrZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBpbmZvd2luZG93O1xuICAgIH0sXG5cblxuICAgIHBsb3RMb2NhdGlvbnM6ZnVuY3Rpb24ocGxvdERhdGEpIHtcbiAgICAgIHZhciBfbWFwID0gdGhpcztcbiAgICAgIHZhciBfcGxvdFNldHRpbmdzID17fTsgXG5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKF9wbG90U2V0dGluZ3MsdGhpcy5tYXBPcHRpb25zLCBwbG90RGF0YSk7XG4gICAgICAkbG9nLmRlYnVnKCdwbG90TG9jYXRpb25zIHdpdGhpbiBhIFwie3JhZGl1c31cIiBtZXRlciByYWRpdXMgb2YgXCJ7Y2VudGVyLmxhdH0sIHtjZW50ZXIubG5nfVwiJywgX3Bsb3RTZXR0aW5ncyk7XG4gICAgICBcbiAgICAgIC8vIGRyb3AgbWFya2VyIG9uIGN1cnJlbnQgbG9jYXRpb25cbiAgICAgIF9tYXAuZHJvcE1hcmtlcih7dGl0bGU6XCJZb3UgQXJlIEhlcmVcIiwgb3BhY2l0eToxfSk7XG5cbiAgICAgIC8vIGdldCBhbGwgbG9jYXRpb25zIGFyb3VuZCBzcGVjaWZpZWQgYXJlYVxuICAgICAgTG9jYXRpb25zU2VydmljZVxuICAgICAgICAuZ2V0KHtyYWRpdXM6IF9wbG90U2V0dGluZ3MucmFkaXVzLCBcbiAgICAgICAgICAgICAgbGF0OiAgICBfcGxvdFNldHRpbmdzLmNlbnRlci5sYXQsIFxuICAgICAgICAgICAgICBsbmc6ICAgIF9wbG90U2V0dGluZ3MuY2VudGVyLmxuZyB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihsb2NhdGlvbnMpIHtcblxuICAgICAgICAgIC8vIHByb2Nlc3MgbG9jYXRpb25zIFxuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChsb2NhdGlvbnMsIGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKCdwbG90TG9jYXRpb24ge25hbWV9Jyxsb2NhdGlvbik7XG4gICAgICAgICAgICAvL2dldCB0aGUgdHJhdmVsVGltZSBmb3JFYWNoIGxvY2F0aW9uXG4gICAgICAgICAgICBsb2NhdGlvbi5zZXRUcmF2ZWxUaW1lKCkudGhlbihmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICB2YXIgbG9jYXRpb25QaW4gPSBfbWFwLmRyb3BNYXJrZXIoe2NlbnRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiBwYXJzZUZsb2F0KGxvY2F0aW9uLmxhdCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHBhcnNlRmxvYXQobG9jYXRpb24ubG9uZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogbG9jYXRpb24ubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBfbWFwLmJ1aWxkSW5mb1dpbmRvdyhsb2NhdGlvbiwgbG9jYXRpb25QaW4pO1xuICAgICAgICAgICAgICBfbWFwLnBsb3RSb3V0ZVRvKGxvY2F0aW9uKTtcblxuICAgICAgICAgICAgfSk7Ly8vbG9jYXRpb24uc2V0VHJhdmVsVGltZVxuXG5cbiAgICAgICAgICB9KTsvLy9lbmQgYW5ndWxhci5mb3JFYWNoXG5cbiAgICAgICAgfSk7Ly9lbmQgTG9jYXRpb25zU2VydmljZVxuXG4gICAgfSxcblxuICAgIHBsb3RSb3V0ZVRvOiBmdW5jdGlvbihsb2NhdGlvbil7XG4gICAgICAkbG9nLmRlYnVnKCdwbG90Um91dGVUbyB7bmFtZX0nLGxvY2F0aW9uKTtcblxuICAgICAgdmFyIF9tYXAgPSB0aGlzO1xuICAgICAgdmFyIF9yb3V0ZVNldHRpbmdzID0ge1xuICAgICAgICAgICAgZHJhZ2dhYmxlOiAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBzdXBwcmVzc0luZm9XaW5kb3dzOiB0cnVlLFxuICAgICAgICAgICAgc3VwcHJlc3NNYXJrZXJzOiAgICAgdHJ1ZSxcbiAgICAgICAgICAgIG9yaWdpbjogICAgICAgICAgICAgIF9tYXAubWFwT3B0aW9ucy5jZW50ZXJcbiAgICAgIH07XG5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKF9yb3V0ZVNldHRpbmdzLCB0aGlzLm1hcE9wdGlvbnMpO1xuXG4gICAgICB2YXIgZGlyZWN0aW9uc0Rpc3BsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyKHtcbiAgICAgICAgICAgIG1hcDogICAgICAgICAgICAgICAgIF9tYXAubWFwLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiAgICAgICAgICAgX3JvdXRlU2V0dGluZ3MuZHJhZ2dhYmxlLFxuICAgICAgICAgICAgc3VwcHJlc3NJbmZvV2luZG93czogX3JvdXRlU2V0dGluZ3Muc3VwcHJlc3NJbmZvV2luZG93cyxcbiAgICAgICAgICAgIHN1cHByZXNzTWFya2VyczogICAgIF9yb3V0ZVNldHRpbmdzLnN1cHByZXNzTWFya2Vyc1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbjoge2xhdDogcGFyc2VGbG9hdChsb2NhdGlvbi5sYXQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiBwYXJzZUZsb2F0KGxvY2F0aW9uLmxvbmcpfSxcbiAgICAgICAgICAgIG9yaWdpbjogICAgICBfcm91dGVTZXR0aW5ncy5vcmlnaW4sXG4gICAgICAgICAgICB0cmF2ZWxNb2RlOiAgZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5XQUxLSU5HLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGlyZWN0aW9uc1NlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTsvLyBQYXNzIHRoZSBkaXJlY3Rpb25zIHJlcXVlc3QgdG8gdGhlIGRpcmVjdGlvbnMgc2VydmljZS5cblxuXG4gICAgICAgICAgZGlyZWN0aW9uc1NlcnZpY2Uucm91dGUocmVxdWVzdCwgZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTdGF0dXMuT0spIHtcbiAgICAgICAgICAgICAgLy8gRGlzcGxheSB0aGUgcm91dGUgb24gdGhlIG1hcC5cbiAgICAgICAgICAgICAgZGlyZWN0aW9uc0Rpc3BsYXkuc2V0RGlyZWN0aW9ucyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7Ly8vZGlyZWN0aW9zU2VydmljZS5yb3V0ZVxuXG5cbiAgICB9LFxuXG4gICAgc2V0UmFkaXVzQ2lyY2xlOiBmdW5jdGlvbihyYWRpdXNDaXJjbGVTZXR0aW5ncykge1xuICAgICAgdmFyIF9tYXAgPSB0aGlzO1xuICAgICAgdmFyIF9jaXJjbGVTZXR0aW5ncyA9e1xuICAgICAgICAgICAgICBzdHJva2VDb2xvcjogICAnIzAwODRiNCcsXG4gICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IDAuOCxcbiAgICAgICAgICAgICAgc3Ryb2tlV2VpZ2h0OiAgMSxcbiAgICAgICAgICAgICAgZmlsbENvbG9yOiAgICAgJyMwMDg0YjQnLFxuICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogICAwLjA2MjUsXG4gICAgICB9O1xuXG4gICAgICBhbmd1bGFyLmV4dGVuZChfY2lyY2xlU2V0dGluZ3MgLHRoaXMubWFwT3B0aW9ucywgcmFkaXVzQ2lyY2xlU2V0dGluZ3MpO1xuXG4gICAgICB2YXIgbG9jYXRpb25zQ2lyY2xlID0gbmV3IGdvb2dsZS5tYXBzLkNpcmNsZSh7XG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6ICAgX2NpcmNsZVNldHRpbmdzLnN0cm9rZUNvbG9yLFxuICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IF9jaXJjbGVTZXR0aW5ncy5zdHJva2VPcGFjaXR5LFxuICAgICAgICAgICAgICAgIHN0cm9rZVdlaWdodDogIF9jaXJjbGVTZXR0aW5ncy5zdHJva2VXZWlnaHQsXG4gICAgICAgICAgICAgICAgZmlsbENvbG9yOiAgICAgX2NpcmNsZVNldHRpbmdzLmZpbGxDb2xvcixcbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogICBfY2lyY2xlU2V0dGluZ3MuZmlsbE9wYWNpdHksXG4gICAgICAgICAgICAgICAgbWFwOiAgICAgICAgICAgX21hcC5tYXAsXG4gICAgICAgICAgICAgICAgY2VudGVyOiAgICAgICAgX2NpcmNsZVNldHRpbmdzLmNlbnRlcixcbiAgICAgICAgICAgICAgICByYWRpdXM6ICAgICAgICBfY2lyY2xlU2V0dGluZ3MucmFkaXVzXG4gICAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBsb2NhdGlvbnNDaXJjbGU7XG4gICAgfVxuXG4gIH07XG4gICAgXG5cblxuICByZXR1cm4gR01hcDtcblxuICBcbn0pO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBtb2RlbHNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5tb2RlbHNNb2R1bGUuZmFjdG9yeSgnTG9jYXRpb24nLCBmdW5jdGlvbigkcm9vdFNjb3BlLCAkbG9nLCAkcSApIHtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0xvY2F0aW9uJyk7XG5cbiAgZnVuY3Rpb24gTG9jYXRpb24oTG9jYXRpb25EYXRhKXtcbiAgICBhbmd1bGFyLmV4dGVuZCh0aGlzLCBMb2NhdGlvbkRhdGEpO1xuICAgICRsb2cuZGVidWcoJ3tuYW1lfScsIHRoaXMpO1xuICB9XG5cblxuICBMb2NhdGlvbi5yZXNwb25zZVRyYW5zZm9ybWVyID0gZnVuY3Rpb24gKHJlc3BvbnNlRGF0YSkge1xuICAgICRsb2cuZGVidWcoJ3Jlc29wb25zZVRyYW5zZm9ybWVyIHtsZW5ndGh9JywgcmVzcG9uc2VEYXRhLmxvY2F0aW9ucyk7XG4gICAgXG4gICAgaWYocmVzcG9uc2VEYXRhLmxvY2F0aW9ucyl7XG4gICAgICBcbiAgICAgIHZhciBwb3B1bGF0ZWRfbG9jYXRpb25zID0gW107XG5cbiAgICAgIHJlc3BvbnNlRGF0YS5sb2NhdGlvbnNcbiAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBuZXcgTG9jYXRpb24oZGF0YSk7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVkX2xvY2F0aW9ucy5wdXNoKGxvY2F0aW9uLnNldFRyYXZlbFRpbWUoKSk7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwb3B1bGF0ZWRfbG9jYXRpb25zO1xuICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YS5tYXAoTG9jYXRpb24uYnVpbGQpOyAgXG5cbiAgICBcbiAgfVxuXG5cbiAgTG9jYXRpb24ucHJvdG90eXBlLnNldFRyYXZlbFRpbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICRsb2cuZGVidWcoJ3NldFRyYXZlbFRpbWUge25hbWV9JywgdGhpcyk7XG4gICAgICBcbiAgICAgIHZhciBfbG9jYXRpb24gPSB0aGlzO1xuICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICAgdmFyIHNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlzdGFuY2VNYXRyaXhTZXJ2aWNlO1xuICAgICAgIHNlcnZpY2UuZ2V0RGlzdGFuY2VNYXRyaXgoe1xuICAgICAgICAgb3JpZ2luczogICAgICAgW3tsYXQ6ICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uLmxhdGl0dWRlLCBsbmc6JHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb24ubG9uZ2l0dWRlfV0sXG4gICAgICAgICBkZXN0aW5hdGlvbnM6ICBbe2xhdDogcGFyc2VGbG9hdCh0aGlzLmxhdCksIGxuZzogcGFyc2VGbG9hdCh0aGlzLmxvbmcpfV0sXG4gICAgICAgICB0cmF2ZWxNb2RlOiAgICBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLldBTEtJTkcsXG4gICAgICAgICB1bml0U3lzdGVtOiAgICBnb29nbGUubWFwcy5Vbml0U3lzdGVtLklNUEVSSUFMLFxuICAgICAgICAgYXZvaWRIaWdod2F5czogZmFsc2UsXG4gICAgICAgICBhdm9pZFRvbGxzOiAgICBmYWxzZVxuICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICAgICAgIFx0X2xvY2F0aW9uLnRyYXZlbFRpbWUgPSByZXNwb25zZS5yb3dzWzBdLmVsZW1lbnRzWzBdLmR1cmF0aW9uO1xuICAgICAgICAgIF9sb2NhdGlvbi5kaXN0YW5jZSA9IHJlc3BvbnNlLnJvd3NbMF0uZWxlbWVudHNbMF0uZGlzdGFuY2U7XG4gICAgICAgICBcdGRlZmVycmVkLnJlc29sdmUoX2xvY2F0aW9uKTtcbiAgICAgICAgIC8vICRsb2cuZGVidWcoXCJ7bmFtZX0gLSB7dHJhdmVsVGltZX1cIiwgX2xvY2F0aW9uKTtcbiAgICAgICAgICBcbiAgICAgICB9KTtcblxuICAgICAgIFxuICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuXG4gIH1cblxuXG4gIExvY2F0aW9uLmJ1aWxkID0gZnVuY3Rpb24obERhdGEpIHtcbiAgICAkbG9nLmRlYnVnKCdidWlsZCB7bmFtZX0nLCBsRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIG5ldyBMb2NhdGlvbihsRGF0YSk7XG4gIH1cblxuICAgXG5cbiAgXG4gXG4gIHJldHVybiBMb2NhdGlvbjtcblxuXG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5tb2RlbHMnLCBbXSk7XG5cbmJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqX2luZGV4fCouc3BlYykuanMnXSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIE9uQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkcHJvdmlkZSkge1xuICBcbiAgLy9hY3RpdmF0ZSBMb2dEZWNvcmF0b3JcbiAgcmVxdWlyZSgnLi91dGlscy9sb2dnaW5nL0xvZ0RlY29yYXRvci5qcycpKCRwcm92aWRlKTtcblxuJHN0YXRlUHJvdmlkZXJcblxuICAuc3RhdGUoJ2FwcCcsIHtcbiAgICB1cmw6ICcvYXBwJyxcbiAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9tZW51Lmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdBcHBDdHJsJyxcbiAgICByZXNvbHZlOntcbiAgICAgICAgY29vcmRpbmF0ZXM6ZnVuY3Rpb24oQ3VycmVudENvb3JkcywgJHRpbWVvdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBDdXJyZW50Q29vcmRzLmdldCgpOyAgXG4gICAgICAgIH1cbiAgICB9XG4gIH0pXG4gIC5zdGF0ZSgnYXBwLmNvbm5lY3QnLCB7XG4gICAgdXJsOiAnL2Nvbm5lY3QnLFxuICAgIHZpZXdzOiB7XG4gICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2Nvbm5lY3QuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdDb25uZWN0Q3RybCBhcyBDb25uZWN0J1xuICAgICAgfVxuICAgIH1cbiAgfSApXG5cbiAgLnN0YXRlKCdhcHAubG9naW4nLCB7XG4gICAgdXJsOiAnL2xvZ2luJyxcbiAgICB2aWV3czoge1xuICAgICAgJ21lbnVDb250ZW50Jzoge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9sb2dpbi5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ3RybCBhcyBMZ24nXG4gICAgICB9XG4gICAgfVxuICB9IClcbiAgXG4gIC5zdGF0ZSgnYXBwLmJyb3dzZScsIHtcbiAgICB1cmw6ICcvYnJvd3NlJyxcbiAgICB2aWV3czoge1xuICAgICAgJ21lbnVDb250ZW50Jzoge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9icm93c2UuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdCcm93c2VDdHJsJ1xuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBcbiAgLnN0YXRlKCdhcHAubWFwJywge1xuICAgICAgdXJsOiAnL21hcCcsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbWFwLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdNYXBDdHJsIGFzIE1hcCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIFxuXG5cbiAgLy8gaWYgbm9uZSBvZiB0aGUgYWJvdmUgc3RhdGVzIGFyZSBtYXRjaGVkLCB1c2UgdGhpcyBhcyB0aGUgZmFsbGJhY2tcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2FwcC9tYXAnKTtcbiAgXG4gIFxuXG5cbn0vLy8vIE9uQ29uZmlnXG5cblxubW9kdWxlLmV4cG9ydHMgPSBPbkNvbmZpZzsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIE9uUnVuKCRpb25pY1BsYXRmb3JtLCAkbG9nLCAkYW5pbWF0ZSkge1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnT25SdW4nKTtcbiAgIFxuICAkaW9uaWNQbGF0Zm9ybS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkYW5pbWF0ZS5lbmFibGVkKHRydWUpO1xuICAgIFxuICAgIC8vIEhpZGUgdGhlIGFjY2Vzc29yeSBiYXIgYnkgZGVmYXVsdCAocmVtb3ZlIHRoaXMgdG8gc2hvdyB0aGUgYWNjZXNzb3J5IGJhciBhYm92ZSB0aGUga2V5Ym9hcmRcbiAgICAvLyBmb3IgZm9ybSBpbnB1dHMpXG4gICAgaWYgKHdpbmRvdy5jb3Jkb3ZhICYmIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQpIHtcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5oaWRlS2V5Ym9hcmRBY2Nlc3NvcnlCYXIodHJ1ZSk7XG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuZGlzYWJsZVNjcm9sbCh0cnVlKTtcblxuICAgIH1cbiAgICBpZiAod2luZG93LlN0YXR1c0Jhcikge1xuICAgICAgLy8gb3JnLmFwYWNoZS5jb3Jkb3ZhLnN0YXR1c2JhciByZXF1aXJlZFxuICAgICAgU3RhdHVzQmFyLnN0eWxlRGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT25SdW47IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2VydmljZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBDdXJyZW50Q29vcmRzKCRxLCAkaHR0cCwgJGxvZywgIEFwcFNldHRpbmdzKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKFwiQ3VycmVudENvb3Jkc1NlcnZpY2VcIik7XG4gIFxuICB2YXIgc2VydmljZSA9IHt9O1xuXG4gIHNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpOyAgICBcblxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24ocG9zKSB7XG4gICAgICAgIFxuICAgICAgJGxvZy5kZWJ1ZygnbGF0OiB7Y29vcmRzLmxhdGl0dWRlfScscG9zKTtcbiAgICAgICRsb2cuZGVidWcoJ2xvbmc6IHtjb29yZHMubG9uZ2l0dWRlfScscG9zKTtcblxuICAgICAgZGVmZXJyZWQucmVzb2x2ZShwb3MuY29vcmRzKTtcbiAgICAgICAgXG4gICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICRsb2cud2FybignVW5hYmxlIHRvIGdldCBsb2NhdGlvbjogJyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIsIHN0YXR1cyk7XG4gICB9KTtcblxuXG4gICAgXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cbn1cblxuc2VydmljZXNNb2R1bGUuc2VydmljZSgnQ3VycmVudENvb3JkcycsIEN1cnJlbnRDb29yZHMpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNlcnZpY2VzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gTG9jYXRpb25zU2VydmljZSgkbG9nLCBZb2NhbCwgTG9jYXRpb24sICRxKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKFwiTG9jYXRpb25zU2VydmljZVNlcnZpY2VcIik7XG5cbiAgdmFyIHNlcnZpY2UgPSB7fTtcblxuICBzZXJ2aWNlLmdldCA9IGZ1bmN0aW9uKCBnZXREYXRhICkge1xuXG4gICAgJGxvZy5kZWJ1ZygnR0VUIGxvY2F0aW9uIGluIGEge3JhZGl1c30gIG9mIHtsYXR9LCB7bG5nfScsIGdldERhdGEpO1xuXG4gICAgcmV0dXJuIFlvY2FsLmdldChnZXREYXRhKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgICAgLy8gb25seSByZXR1cm4gbG9jYXRpb25zIHdoZW4gdGhleSBoYXZlIEFMTFxuICAgICAgICAgICAgICAgICAgLy8gYmVlbiBwb3B1bGF0ZWQgd2l0aCB0cmF2ZWxUaW1lc1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICRxLmFsbChMb2NhdGlvbi5yZXNwb25zZVRyYW5zZm9ybWVyKGRhdGEpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcblxuICB9O1xuXG4gIHNlcnZpY2UuYWxsID0gZnVuY3Rpb24oIGdldERhdGEgKSB7XG5cbiAgICAkbG9nLmRlYnVnKCdBTEwnKTtcblxuICAgIHJldHVybiBZb2NhbC5hbGwoKS50aGVuKExvY2F0aW9uLnJlc3BvbnNlVHJhbnNmb3JtZXIpO1xuXG4gIH07XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cbn1cblxuc2VydmljZXNNb2R1bGUuc2VydmljZSgnTG9jYXRpb25zU2VydmljZScsIExvY2F0aW9uc1NlcnZpY2UpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNlcnZpY2VzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gWW9jYWwoJHEsICRodHRwLCBBcHBTZXR0aW5ncywgJGxvZykge1xuXG4gIHZhciBzZXJ2aWNlID0ge307XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKFwiWW9jYWxTZXJ2aWNlXCIpO1xuXG4gIHNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24oIGdldERhdGEgKSB7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgIC8vIC9saXN0QnlEaXN0YW5jZUNhdC9Gb29kLzgwMDAvMzkuOTM3ODkzLy03NS4xNjg5MzQ3XG4gICAkaHR0cC5nZXQoQXBwU2V0dGluZ3MueW9jYWxBUEkuYmFzZSsnL2xpc3RCeURpc3RhbmNlQ2F0L0Zvb2QvJytnZXREYXRhLnJhZGl1cysnLycrZ2V0RGF0YS5sYXQrJy8nK2dldERhdGEubG5nKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZygnZm91bmQge2xlbmd0aH0gc3BvdHMgd2l0aGluICcrZ2V0RGF0YS5yYWRpdXMrJyBtZXRlcnMgb2YgJytnZXREYXRhLmxhdCsnLCcrZ2V0RGF0YS5sbmcsIGRhdGEubG9jYXRpb25zKTtcbiAgICAgICAgZGF0YS5yYWRpdXMgPSBnZXREYXRhLnJhZGl1cztcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICB9KS5lcnJvcihmdW5jdGlvbihlcnIsIHN0YXR1cykge1xuICAgICAgICAkbG9nLndhcm4oJ1VuYWJsZSB0byBnZXQgbG9jYXRpb246ICcgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIsIHN0YXR1cyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfTtcblxuICBzZXJ2aWNlLmFsbCA9IGZ1bmN0aW9uKGdldERhdGEpe1xuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAvLyAvbGlzdEJ5RGlzdGFuY2VDYXQvRm9vZC84MDAwLzM5LjkzNzg5My8tNzUuMTY4OTM0N1xuICAgJGh0dHAuZ2V0KEFwcFNldHRpbmdzLnlvY2FsQVBJLmJhc2UrJy9saXN0Jykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ2FsbDogZm91bmQge2xlbmd0aH0gdG90YWwgc3BvdHMnLCBkYXRhKTtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICB9KS5lcnJvcihmdW5jdGlvbihlcnIsIHN0YXR1cykge1xuICAgICAgICAkbG9nLndhcm4oJ1VuYWJsZSB0byBnZXQgbG9jYXRpb246ICcgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIsIHN0YXR1cyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcblxuICB9XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cbn1cblxuc2VydmljZXNNb2R1bGUuc2VydmljZSgnWW9jYWwnLCBZb2NhbCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYnVsayA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuc2VydmljZXMnLCBbXSk7XG5cbmJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqX2luZGV4fCouc3BlYykuanMnXSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2VydmljZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBFeGFtcGxlU2VydmljZSgkcSwgJGh0dHApIHtcblxuICB2YXIgc2VydmljZSA9IHt9O1xuXG4gIHNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICRodHRwLmdldCgnYXBpUGF0aCcpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgIH0pLmVycm9yKGZ1bmN0aW9uKGVyciwgc3RhdHVzKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIsIHN0YXR1cyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfTtcblxuICByZXR1cm4gc2VydmljZTtcblxufVxuXG5zZXJ2aWNlc01vZHVsZS5zZXJ2aWNlKCdFeGFtcGxlU2VydmljZScsIEV4YW1wbGVTZXJ2aWNlKTsiLCIvKipcbiAqIEBhdXRob3IgICAgIFRob21hcyBCdXJsZXNvblxuICogQGF1dGhvciAgICAgU3RhY2tPdmVyZmxvdyAtIEhhcnRvLCBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzMTU0MDgvaG93LWRvLWktZm9ybWF0LWEtdGltZXN0YW1wLWluLWphdmFzY3JpcHQtdG8tZGlzcGxheS1pdC1pbi1ncmFwaHMtdXRjLWlzLWZpbmVcbiAqIEBkZXNjcmlwdGlvblxuICogIFxuICogRGF0ZVRpbWUgdXRpbGl0eSBjbGFzcyB0aGF0IHNwaXRzIG91dCBVVEMgdGltZXN0YW1wIHN0cmluZ3MgdXN1YWxseSB1c2VkIGluIGEgcmVwb3J0aW5nLCBwcmludC1jYXBhYmxlIHByb2Nlc3MuXG4qL1xuIFxuXG4gJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBidWlsZFRpbWVTdHJpbmcgPSBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0KVxuICAgICAgICB7XG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgXCIlaDolbTolczolelwiO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBwYWQodmFsdWUsIGlzTWlsbGlTZWNvbmRzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiAoaXNNaWxsaVNlY29uZHMpID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNaWxsaVNlY29uZHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoaXNNaWxsaVNlY29uZHMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZSA8IDEwKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiMDBcIiArIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodmFsdWUgPCAxMDApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCIwXCIgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4odmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPCAyKSA/IFwiMFwiICsgdmFsdWUgOiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdC5yZXBsYWNlKC8lKFthLXpBLVpdKS9nLCBmdW5jdGlvbiAoXywgZm10Q29kZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2goZm10Q29kZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIllcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRIb3VycygpKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TWludXRlcygpKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0U2Vjb25kcygpKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwielwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIHRydWUpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGZvcm1hdCBjb2RlOiBcIiArIGZtdENvZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG5cbiAvLyBQdWJsaXNoIEFQSSBmb3IgRGF0ZVRpbWUgdXRpbHNcbiAgICAgICAgLy8gcmV0dXJuIHtcbiAgICAgICAgLy8gICAgIGZvcm1hdHRlZE5vdzogZnVuY3Rpb24gKClcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gYnVpbGRUaW1lU3RyaW5nKG5ldyBEYXRlKCkpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9O1xuICAgICAgICAvLyBcbiBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmb3JtYXR0ZWROb3c6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJ1aWxkVGltZVN0cmluZyhuZXcgRGF0ZSgpKTsgfVxuIH07XG5cblxuXG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIExvZ0RlY29yYXRvclxuICogIEBzb3VyY2U6IGh0dHA6Ly9zb2x1dGlvbm9wdGltaXN0LmNvbS8yMDEzLzEwLzA3L2VuaGFuY2UtYW5ndWxhcmpzLWxvZ2dpbmctdXNpbmctZGVjb3JhdG9ycy9cbiAqL1xuXG4gdmFyIExvZ0RlY29yYXRvciA9IGZ1bmN0aW9uKCAkcHJvdmlkZSAgKXtcblxuXG4gICAgICAgICAgICAgIC8vIFJlZ2lzdGVyIG91ciAkbG9nIGRlY29yYXRvciB3aXRoIEFuZ3VsYXJKUyAkcHJvdmlkZXJcbiAgICAgICAgICAgICAgJHByb3ZpZGUuZGVjb3JhdG9yKCAnJGxvZycsIFsgXCIkZGVsZWdhdGVcIiwgZnVuY3Rpb24oICRkZWxlZ2F0ZSApXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIC8vIE5PVEU6IHRoZSBMb2dFbmNoYW5jZXIgbW9kdWxlIHJldHVybnMgYSBGVU5DVElPTiB0aGF0IHdlIG5hbWVkIGBlbmNoYW5jZUxvZ2dlckZuYFxuICAgICAgICAgICAgICAgLy8gICAgICAgQWxsIHRoZSBkZXRhaWxzIG9mIGhvdyB0aGUgYGVuY2hhbmNlbWVudGAgd29ya3MgaXMgZW5jYXBzdWxhdGVkIGluIExvZ0VuaGFuY2VyIVxuXG4gICAgICAgICAgICAgICAgICByZXF1aXJlKCcuL0xvZ0VuaGFuY2VyLmpzJykoICRkZWxlZ2F0ZSApO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJGRlbGVnYXRlO1xuICAgICAgICAgICAgICB9XSk7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gIExvZ0RlY29yYXRvcjsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIExvZ0VuaGFuY2VyXG4gKiBUaGlzIGFkZHMgdGltZXN0YW1wcyBhbmQgc3VwcGxhbnQgZnVuY3Rpb25hbGl0eSB0byBBbmd1bGFyICRsb2cgc2VydmljZVxuICogQHNvdXJjZTogaHR0cDovL3NvbHV0aW9ub3B0aW1pc3QuY29tLzIwMTMvMTAvMDcvZW5oYW5jZS1hbmd1bGFyanMtbG9nZ2luZy11c2luZy1kZWNvcmF0b3JzL1xuICogQGFwaTogcHVibGljXG4gKiBAcmV0dXJuczogT2JqZWN0IC0gZXh0ZW5kZWQgJGxvZyBzZXJ2aWNlXG4gKi9cblxudmFyIGVuY2hhbmNlTG9nZ2VyID0gZnVuY3Rpb24oICRsb2cgKXtcbiAgdmFyIHN1cHBsYW50ID0gcmVxdWlyZSgnLi4vc3VwcGxhbnQuanMnKTtcbiAgdmFyIERhdGVUaW1lID0gcmVxdWlyZSgnLi4vRGF0ZVRpbWUuanMnKTtcblxuXG4gIC8qKlxuICAgKiBDYXB0dXJlIHRoZSBvcmlnaW5hbCAkbG9nIGZ1bmN0aW9uczsgZm9yIHVzZSBpbiBlbmhhbmNlZExvZ0ZuKClcbiAgICogQGFwaSAgcHJpdmF0ZSBcbiAgICovXG4gIFxuICB2YXIgXyRsb2cgPSAoZnVuY3Rpb24oICRsb2cgKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvZyAgIDogJGxvZy5sb2csXG4gICAgICAgIGluZm8gIDogJGxvZy5pbmZvLFxuICAgICAgICB3YXJuICA6ICRsb2cud2FybixcbiAgICAgICAgZGVidWcgOiAkbG9nLmRlYnVnLFxuICAgICAgICBlcnJvciA6ICRsb2cuZXJyb3JcbiAgICAgIH07XG4gIH0pKCAkbG9nICk7IFxuXG5cblxuICAgLyoqXG4gICAgKiBQYXJ0aWFsIGFwcGxpY2F0aW9uIHRvIHByZS1jYXB0dXJlIGEgbG9nZ2VyIGZ1bmN0aW9uXG4gICAgKiBAYXBpOiAgcHJpdmF0ZSBcbiAgICAqIEByZXR1cm5zOiBGdW5jdGlvbiBcbiAgICAqL1xuICAgIHZhciBwcmVwYXJlTG9nRm4gPSBmdW5jdGlvbiggbG9nRm4sIGNsYXNzTmFtZSApe1xuXG4gICAgICAvKipcbiAgICAgICAqIEludm9rZSB0aGUgc3BlY2lmaWVkIGBsb2dGbjxgIHdpdGggdGhlIHN1cHBsYW50IGZ1bmN0aW9uYWxpdHkuLi5cbiAgICAgICAqIEBhcGk6IHByaXZhdGUgXG4gICAgICAgKiBAZXhhbXBsZTogXG4gICAgICAgKiAgIHZhciB1c2VyID0geyB3aG86XCJUaG9tYXMgQnVybGVzb25cIlwiLCBlbWFpbD1cIlRob21hc0J1cmxlc29uQGdtYWlsLmNvbVwiXCIgfTtcbiAgICAgICAqICAgJGxvZy53YXJuKCBcIkEgd2FybmluZyBtZXNzYWdlIGZvciBge3dob31gIHdpbGwgYmUgc2VudCB0byBge2VtYWlsfWAgIVwiLCB1c2VyICk7ICAgXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzaG91bGQgb3V0cHV0OiBBIHdhcm5pbmcgbWVzc2FnZSBmb3IgYFRob21hcyBCdXJsZXNvbmAgd2lsbCBiZSBzZW50IHRvIGBUaG9tYXNCdXJsZXNvbkBnbWFpbC5jb21gICFcbiAgICAgICAqL1xuICAgICAgdmFyIGVuaGFuY2VkTG9nRm4gPSBmdW5jdGlvbiggKXtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgICAgbm93ICA9IERhdGVUaW1lLmZvcm1hdHRlZE5vdygpO1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJyc7XG4gICAgICAgICAgICAvLyBwcmVwZW5kIGEgdGltZXN0YW1wIHRvIHRoZSBvcmlnaW5hbCBvdXRwdXQgbWVzc2FnZVxuICAgICAgICAgICAgYXJnc1swXSA9IHN1cHBsYW50KFwiezB9IC0gezF9ezJ9XCIsIFsgbm93LCBjbGFzc05hbWUsIGFyZ3NbMF0gXSk7XG5cbiAgICAgICAgbG9nRm4uY2FsbCggbnVsbCwgIHN1cHBsYW50LmFwcGx5KCBudWxsLCBhcmdzICkgKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIFNwZWNpYWwuLi4gb25seSBuZWVkZWQgdG8gc3VwcG9ydCBhbmd1bGFyLW1vY2tzIGV4cGVjdGF0aW9uc1xuICAgICAgZW5oYW5jZWRMb2dGbi5sb2dzID0gWyBdO1xuIFxuICAgICAgcmV0dXJuIGVuaGFuY2VkTG9nRm47XG4gICAgICBcbiAgICB9O1xuXG5cblxuXG4gICAgLyoqXG4gICAgICogU3VwcG9ydCB0byBnZW5lcmF0ZSBjbGFzcy1zcGVjaWZpYyBsb2dnZXIgaW5zdGFuY2Ugd2l0aCBjbGFzc25hbWUgb25seVxuICAgICAqXG4gICAgICogQHBhcmFtOiBuYW1lXG4gICAgICogQHJldHVybnM6IE9iamVjdCB3cmFwcGVyIGZhY2FkZSB0byAkbG9nXG4gICAgICovXG4gICAgdmFyIGdldEluc3RhbmNlID0gZnVuY3Rpb24oIGNsYXNzTmFtZSApe1xuICAgICAgY2xhc3NOYW1lID0gKCBjbGFzc05hbWUgIT09IHVuZGVmaW5lZCApID8gY2xhc3NOYW1lICsgXCI6OlwiIDogXCJcIjtcblxuICAgICAgcmV0dXJue1xuICAgICAgICAgbG9nICAgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmxvZywgICAgY2xhc3NOYW1lICksXG4gICAgICAgICBpbmZvICA6IHByZXBhcmVMb2dGbiggXyRsb2cuaW5mbywgICBjbGFzc05hbWUgKSxcbiAgICAgICAgIHdhcm4gIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy53YXJuLCAgIGNsYXNzTmFtZSApLFxuICAgICAgICAgZGVidWcgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmRlYnVnLCAgY2xhc3NOYW1lICksXG4gICAgICAgICAvLyBlcnJvciA6IHByZXBhcmVMb2dGbiggXyRsb2cuZXJyb3IsICBjbGFzc05hbWUgKVxuICAgICAgfTtcblxuICAgIH07XG5cblxuXG4gICAgLy8gd3JhcCBlYWNoIGxvZyBtZXRob2QgXG4gICAgJGxvZy5sb2cgICA9IHByZXBhcmVMb2dGbiggJGxvZy5sb2cgKTtcbiAgICAkbG9nLmluZm8gID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmluZm8gKTtcbiAgICAkbG9nLndhcm4gID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLndhcm4gKTtcbiAgICAkbG9nLmRlYnVnID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmRlYnVnICk7XG4gICAgLy8gJGxvZy5lcnJvciA9IHByZXBhcmVMb2dGbiggJGxvZy5lcnJvciApO1xuXG4gICAgLy8gQWRkIHNwZWNpYWwgbWV0aG9kIHRvIEFuZ3VsYXJKUyAkbG9nXG4gICAgJGxvZy5nZXRJbnN0YW5jZSA9IGdldEluc3RhbmNlO1xuIFxuXG4gICAgcmV0dXJuICRsb2c7XG59Oy8vZW5jaGFuY2VMb2dnZXJcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gIGVuY2hhbmNlTG9nZ2VyOyIsIi8qKlxuICogQGF1dGhvciAgICAgIFRob21hcyBCdXJsZXNvblxuICogQGRhdGUgICAgICAgIE5vdmVtYmVyLCAyMDEzXG4gKiBAc291cmNlOiAgICAgaHR0cHM6Ly9naXRodWIuY29tL1Rob21hc0J1cmxlc29uL2FuZ3VsYXJqcy1sb2dEZWNvcmF0b3IvYmxvYi9tYXN0ZXIvc3JjL21pbmRzcGFjZS91dGlscy9zdXBwbGFudC5qc1xuICAqL1xuIFxuXG4gJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3VwcGxhbnQgPSAgZnVuY3Rpb24oIHRlbXBsYXRlLCB2YWx1ZXMsIHBhdHRlcm4gKSB7XG4gICAgICAgICAgICBwYXR0ZXJuID0gcGF0dGVybiB8fCAvXFx7KFteXFx7XFx9XSopXFx9L2c7XG5cbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKHBhdHRlcm4sIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IGIuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgICAgICAgICAgciA9IHZhbHVlcztcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHMgaW4gcCkgeyByID0gcltwW3NdXTsgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgICAgICAgICByID0gYTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKHR5cGVvZiByID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgciA9PT0gJ251bWJlcicpID8gciA6IGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG4vLyBzdXBwbGFudCgpIG1ldGhvZCBmcm9tIENyb2NrZm9yZHMgYFJlbWVkaWFsIEphdmFzY3JpcHRgXG5GdW5jdGlvbi5wcm90b3R5cGUubWV0aG9kID0gZnVuY3Rpb24gKG5hbWUsIGZ1bmMpIHtcbiAgICB0aGlzLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmM7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdHJpbmcubWV0aG9kKFwic3VwcGxhbnRcIiwgZnVuY3Rpb24oIHZhbHVlcywgcGF0dGVybiApIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIHN1cHBsYW50KHNlbGYsIHZhbHVlcywgcGF0dGVybik7XG59KTtcblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSAgU3RyaW5nLnN1cHBsYW50ID0gc3VwcGxhbnQ7Il19
