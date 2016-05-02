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
            // console.log(ctrl);

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
            // console.log(html)
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
            // console.log(createItemDirective())


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

        console.log(vm);

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
                console.log('onArrayProviderUpdated');
                console.log(param)
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
  	ZOOM:   14,
  	THEME:{
  		light:[{"featureType":"poi","stylers":[{"visibility":"off"}]},{"stylers":[{"saturation":-70},{"lightness":37},{"gamma":1.15}]},{"elementType":"labels","stylers":[{"gamma":0.26},{"visibility":"off"}]},{"featureType":"road","stylers":[{"lightness":0},{"saturation":0},{"hue":"#ffffff"},{"gamma":0}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"lightness":50},{"saturation":0},{"hue":"#ffffff"}]},{"featureType":"administrative.province","stylers":[{"visibility":"on"},{"lightness":-50}]},{"featureType":"administrative.province","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"lightness":20}]}]
  	}
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
                                                $timeout(function() {
                                                    $scope.locations_loaded++;    
                                                },10)
                                            });

                                            return {
                                                category: cat,
                                                category_slug: $scope.get_category_slug(cat),
                                                locations: locations
                                            };
                                        })
                                        .map(function(category_obj) {

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
                                                                  .map(function(category_obj) {
                                                                      $scope.carousels[category_obj.category_slug] = angular.extend({}, {carouselId: 'locations-carousel-'+category_obj.category_slug, itemSelected:_.first(category_obj.locations)}, $scope.carouselOptions);
                                                                      return category_obj;
                                                                  })
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

MapCtrl.$inject = ["$rootScope", "$scope", "$timeout", "$log", "$ionicLoading", "AppSettings", "GMap", "LocationsService", "$ionicSlideBoxDelegate"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MapCtrl($rootScope, $scope, $timeout, $log, $ionicLoading, AppSettings, GMap, LocationsService, $ionicSlideBoxDelegate) {

    $log = $log.getInstance("MapCtrl");

 	  // ViewModel
  	var vm = this;
    var currentCenter = $rootScope.currentPosition;

    vm.this_radius = 5000;

    vm.gmap = new GMap({
                        zoom:   13, 
                        radius: vm.this_radius, 
                        styles: AppSettings.GMAP_DEFAULT.THEME.light
                      });    


    vm.gmap.height = 575,
    vm.gmap.locationFocused = false;
    vm.gmap.markers = [];
    vm.gmap.routes = [];  
     // drop marker on current position
    vm.gmap.dropMarker({
              map:    vm.gmap.map,
              center: {lat: currentCenter.latitude, 
                       lng: currentCenter.longitude },
              opacity:1,
            });
    
    
    vm.locations_by_distance = [];
    vm.locations_categories = {
      distance: 80,
      current:  null,
      list: [
              {name: 'Arts'},
              {name: 'Drink'},
              {name: 'Food'}
            ]
    };
    


    vm.knob ={ 
              options:{  
                dynamicOptions: true 
              } 
            };



    vm.slider ={
      shown:   false,
      meta:{
        category:     '',
        travelTime:   '',
        neighborhood: ''
      },
      activeSlide:{}
    };

    console.log(vm.slider)




  vm.load_category = function(category) {
      $log.log('load_category: {name}',category);
      
      vm.gmap.map.setOptions({styles:null});

      $ionicLoading.show({
        template: "Exploring Your Area ...",
        backdrop: true
      });


      // get all locations around specified area
      LocationsService
        .get({
              category: category.name,
              radius:   vm.this_radius, 
              lat:      currentCenter.latitude, 
              lng:      currentCenter.longitude
            })
        .then(function(locations) {
          vm.locations_categories.distance = 0;
          vm.locations_loaded = true;

          vm.locations_categories.current = category.name;

          // sort locations by distnace 
          vm.locations_by_distance = _.sortBy(locations, 'distancefromlocation');

          // set all markers on map
          setMarkers(vm.locations_by_distance);  

          // set the locations radius and knob value to the closes loction to test
          vm.this_radius = _.first(vm.locations_by_distance).distancefromlocation+100;
          vm.locationsRadius = vm.gmap.setRadiusCircle({radius: vm.this_radius});
          vm.gmap.map.fitBounds(vm.locationsRadius.getBounds());
          
          setKnobValue(vm.this_radius, _.first(vm.locations_by_distance).distancefromlocation, _.last(vm.locations_by_distance).distancefromlocation);
          vm.locations_loaded = true;
          
          $ionicLoading.hide();
          $ionicSlideBoxDelegate.update();
        });//end .then


    }////end vm.load_category


    $scope.slideHasChanged = function(indx) {
        $log.log("ion-slide-box:slideHasChanged:"+indx);
        
        var slider_location = vm.locations_by_distance[indx];
        //set active slide
        vm.locations_by_distance.map(function(location) { location.isActive = false; return location;});
        slider_location.isActive = true;

        showRouteTo(slider_location);
        fitInMapView(slider_location);
        vm.knob.value = slider_location.distancefromlocation;
        vm.slider = {
          shown:    true,
          isActive: false,
          meta:     {
            category:     slider_location.catagorylevel1,
            travelTime:   slider_location.travelTime,
            neighborhood: slider_location.neighborhood
          }
        };

      };//  $scope.slideHasChanged


    


    
    var setKnobValue = function(val,min, max) {
      // set ui.knob options here
      // this tricks the knob into updating the value correctly
          vm.knob ={
              value:val,
              options:{
                displayInput: false,
                size:         100,
                min:          100,
                max:          max,
                step:         1,
                barColor:     '#5BC01E',
                trackColor:   '#212121',
                trackWidth:   5,
                barWidth:     20
              }
            };
        return vm.knob;
    };

    
    var showMarkerFor = function(location) {
      $log.log("showMarkerFor:{name}", location);
      var shownMarker = vm.gmap.markers[location._id];
      shownMarker.setOpacity(1);
      shownMarker.setClickable(true);
      return shownMarker; 
    }//showMarkerFor


    var hideMarkerFor = function(location) {
      $log.log("hideMarkerFor:{name}", location);
      var hiddenMarker = vm.gmap.markers[location._id];
      hiddenMarker.setOpacity(0);
      hiddenMarker.setClickable(false);
      return hiddenMarker;
    }//hideMarkerFor


    var setMarkers = function(locations) {
      locations.map(function(locate){
            var marker = vm.gmap.dropMarker({
                        center: {
                            lat: parseFloat(locate.lat),
                            lng: parseFloat(locate.long)
                        },
                        title:     locate.name,
                        map:       vm.gmap.map,
                        opacity:   0,
                        clickable: false
                      });

                  marker.addListener('click',function(){
                     $scope.$broadcast('marker:clicked', locate);
                  });

                vm.gmap.markers[locate._id] = marker;
    
          });

        return vm.markers;
    };//setMarkers



    var clearFromMap = function(obj) {
      $log.log('clearFromMap');
      return obj.setMap(null);
    }//clearFromMap



    var showRouteTo = function(location) {
      $log.log('showRouteTo;{name}', location);
      // clear all routes
      vm.gmap.routes.map(clearFromMap);
      vm.locationsRadius.setVisible(false);
      vm.locations_by_distance.map(hideMarkerFor);

      var marker = showMarkerFor(location);

      var route = vm.gmap.plotRouteTo(location)
                         .then(function(route) {
                            vm.gmap.routes.push(route);   
                          
                            // $timeout(function() { 
                            //   // if(vm.gmap.map.zoom < 13 )vm.gmap.map.setZoom(13);
                            //   var markerPos = vm.gmap.getPixelPosition(marker);
                            //   var posFromTop = (vm.gmap.height - markerPos.y);
                            //   var panY = posFromTop - (posFromTop*0.5);
                            //   vm.gmap.map.panBy(0, Math.abs(panY) );
                            // },450);
                            
                          });
    }// showRouteTo
    
        

    var fitInMapView = function(location) {
      if(location) vm.locationsRadius.setRadius(location.distancefromlocation);
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
    
    }//fitInMapView
    


    


    


        // watch for the ui knob value to update
         $scope.$watch("Map.knob.value", function(newValue, oldValue) {
            // $log.log("new Map.knob.value: "+newValue);
            // $log.log("old Map.knob.value: "+oldValue);
            
            if(vm.locationsRadius){
              vm.locationsRadius.setRadius(newValue);
              vm.locationsRadius.setVisible(true);  
            }
            
            vm.gmap.height = 575;
            vm.gmap.locationFocused = false;
            vm.gmap.routes.map(clearFromMap);
            if(vm.locations_by_distance.length) vm.gmap.map.setOptions({styles: null});

            vm.slider.shown = false;
            

            if(vm.locationsRadius) fitInMapView();

            // show/reveal locations inside radius
            vm.locations_by_distance.map(function(locate){
                  if( locate.distancefromlocation < newValue ){
                    showMarkerFor(locate);
                  }else {
                    hideMarkerFor(locate);
                  }
            });//vm.locations_by_distance.map


        });///$scope.$watch "Map.knob.value"




      $scope.$on("marker:clicked", function(e, marker) {
        $scope.$apply(function() {
        
          $log.log("marker:clicked - {name}", marker);
        
          vm.gmap.map.setOptions({styles: AppSettings.GMAP_DEFAULT.THEME.light});

          vm.gmap.locationFocused = true;
          vm.gmap.height = 350;
          vm.slider = {
            shown: true,
            meta:{
              category:     marker.catagorylevel1,
              travelTime:   marker.travelTime,
              neighborhood: marker.neighborhood
            }
          };

          $ionicSlideBoxDelegate.slide(_.indexOf(vm.locations_by_distance, marker));

          showRouteTo(marker);
          fitInMapView();

      });
    });// $scope.$on "marker:clicked"
      


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

modelsModule.factory('GMap', ["$log", "$rootScope", "$q", "LocationsService", "AppSettings", function($log, $rootScope, $q, LocationsService, AppSettings){
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


    getPixelPosition: function (marker) {
        var _map = this.map;
        var scale = Math.pow(2, _map.getZoom());
        var nw = new google.maps.LatLng(
            _map.getBounds().getNorthEast().lat(),
            _map.getBounds().getSouthWest().lng()
        );
        var worldCoordinateNW = _map.getProjection().fromLatLngToPoint(nw);
        var worldCoordinate = _map.getProjection().fromLatLngToPoint(marker.getPosition());
        var pixelOffset = new google.maps.Point(
            Math.floor((worldCoordinate.x - worldCoordinateNW.x) * scale),
            Math.floor((worldCoordinate.y - worldCoordinateNW.y) * scale)
        );

        return pixelOffset;
    },

    plotRouteTo: function(location){
      $log.debug('plotRouteTo {name}',location);
      var deferred = $q.defer();
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
            suppressMarkers:     _routeSettings.suppressMarkers,
            // preserveViewport: true
          }),

          request = {
            destination: {lat: parseFloat(location.lat), 
                          lng: parseFloat(location.long)},
            origin:      _routeSettings.origin,
            travelMode:  google.maps.TravelMode.WALKING,
            provideRouteAlternatives: false,

          },
          directionsService = new google.maps.DirectionsService();// Pass the directions request to the directions service.


          directionsService.route(request, function(response, status) {
            
            if (status == google.maps.DirectionsStatus.OK) {
              // Display the route on the map.
              response.renderer = directionsDisplay;
              directionsDisplay.setDirections(response);
              deferred.resolve(directionsDisplay);
            }
          });///directiosService.route

          return deferred.promise;


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
       $log.warn('Unable to get location: ' + error);
       deferred.reject(error, status);
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

    return Yocal.all()
                .then(function(data){
                  // only return locations when they have ALL
                  // been populated with travelTimes
                  return $q.all(Location.responseTransformer(data));
                });

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

    // listByDistanceCat/Food/8000/39.937893/-75.1689347
   $http.get(AppSettings.yocalAPI.base+'/listByDistanceCat/'+getData.category+'/'+getData.radius+'/'+getData.lat+'/'+getData.lng)
        .success(function(data) {
          $log.debug('found {length} '+getData.category+' spots within '+getData.radius+' meters of '+getData.lat+','+getData.lng, data.locations);
          data.radius = getData.radius;
          deferred.resolve(data);
        })
        .error(function(err, status) {
          $log.warn('Unable to get location: ' + err.message);
          deferred.reject(err, status);
        });
   
    return deferred.promise;
  };

  service.all = function(getData){
    var deferred = $q.defer();

    //listByDistanceCat/Food/8000/39.937893/-75.1689347
   $http.get(AppSettings.yocalAPI.base+'/list')
        .success(function(data) {
          $log.debug('all: found {length} total spots', data);
          deferred.resolve(data);
        })
        .error(function(err, status) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1hbmltYXRlL2FuZ3VsYXItYW5pbWF0ZS5taW4uanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2Jvd2VyX2NvbXBvbmVudHMvaW9uaWMtYWR2YW5jZWQtY2Fyb3VzZWwvc3JjL2FkdmFuY2VkLWNhcm91c2VsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9ib3dlcl9jb21wb25lbnRzL25nLWtub2IvZGlzdC9uZy1rbm9iLm1pbi5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvYXBwLW1haW4uanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnN0YW50cy5kZXZlbG9wbWVudC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvQXBwQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvQnJvd3NlQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvQ29ubmVjdEN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL0xvZ2luQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvTWFwQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvUGxheWxpc3RDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9QbGF5bGlzdHNDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9faW5kZXguanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2RpcmVjdGl2ZXMvX2luZGV4LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9kaXJlY3RpdmVzL21BcHBMb2FkaW5nRGlyZWN0aXZlLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9tb2RlbHMvR01hcC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvbW9kZWxzL0xvY2F0aW9uTW9kZWwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL21vZGVscy9faW5kZXguanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL29uX2NvbmZpZy5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvb25fcnVuLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9DdXJyZW50Q29vcmRzU2VydmljZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvTG9jYXRpb25zU2VydmljZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvWW9jYWwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3NlcnZpY2VzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvZXhhbXBsZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvdXRpbHMvRGF0ZVRpbWUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL2xvZ2dpbmcvTG9nRGVjb3JhdG9yLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9sb2dnaW5nL0xvZ0VuaGFuY2VyLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9zdXBwbGFudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7OztBQUtBLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLGFBQWEsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxTQUFTLE9BQU8sR0FBRyxJQUFJLEdBQUcsWUFBWSxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssTUFBTSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLE9BQU8sR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLGFBQWEsRUFBRSxPQUFPLEVBQUUsUUFBUSxLQUFLLEVBQUUsTUFBTTtBQUN4Z0IsS0FBSyxFQUFFLEdBQUcsSUFBSSxFQUFFLEdBQUcsU0FBUyxPQUFPLEVBQUUsTUFBTSxRQUFRLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUUsU0FBUyxPQUFPLEVBQUUsR0FBRyxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsU0FBUyxPQUFPLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssU0FBUyxHQUFHLEVBQUUsQ0FBQyxPQUFPLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEdBQUcsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsTUFBTSxFQUFFLGNBQWMsR0FBRyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsWUFBWSxPQUFPLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFO0FBQ2xmLEVBQUUsRUFBRSxhQUFhLFVBQVUsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssTUFBTSxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLElBQUksS0FBSyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxhQUFhLElBQUksS0FBSyxFQUFFLGFBQWEsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLFNBQVMsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEtBQUssRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksS0FBSyxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU07QUFDMWYsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLFlBQVksSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxjQUFjLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxHQUFHLFNBQVMsRUFBRSxJQUFJLEtBQUssRUFBRSxJQUFJLEtBQUssT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsT0FBTyxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxPQUFPLE1BQU0sRUFBRSxFQUFFLGlCQUFpQixJQUFJLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPO0FBQ3JmLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxXQUFXLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsT0FBTyxJQUFJLEVBQUUsV0FBVyxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssSUFBSSxFQUFFLEdBQUcsSUFBSSxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsQ0FBQyxPQUFPLElBQUksR0FBRyxNQUFNLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxXQUFXLEdBQUcsY0FBYyxNQUFNLENBQUMsRUFBRSxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLFlBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxFQUFFLEdBQUcsU0FBUyxHQUFHO0FBQ3hmLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxPQUFPLE1BQU0sTUFBTSxDQUFDLE1BQU0sVUFBVSxDQUFDLEVBQUUsT0FBTyxPQUFPLE9BQU8sTUFBTSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLElBQUksU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sS0FBSyxJQUFJLEVBQUUsRUFBRSxLQUFLLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxTQUFTLEdBQUcsRUFBRSxTQUFTLEdBQUcsRUFBRSxZQUFZLEdBQUcsRUFBRSxVQUFVLEdB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LE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxhQUFhLElBQUksT0FBTyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxLQUFLLElBQUksRUFBRSxLQUFLLEtBQUssU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFlBQVksRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEtBQUssU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFlBQVksQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxTQUFTLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEtBQUssU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsRUFBRSxhQUFhLEVBQUUsT0FBTyxLQUFLLFNBQVM7QUFDbGdCLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE9BQU8sS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxJQUFJLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEtBQUssU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxRQUFRLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLFdBQVcsS0FBSyxLQUFLLENBQUMsUUFBUSxhQUFhLGVBQWUsWUFBWSxZQUFZLGNBQWMsa0JBQWtCLG1CQUFtQixXQUFXLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLFNBQVMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUNuZixPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxHQUFHLFNBQVMsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLE9BQU8sSUFBSSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsS0FBSyxNQUFNLEVBQUUsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFlBQVksS0FBSyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsS0FBSyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxhQUFhLEtBQUs7QUFDeGYsR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsT0FBTyxTQUFTLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLE9BQU8sSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLE1BQU0sT0FBTyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxHQUFHLE9BQU8sRUFBRSxPQUFPLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxNQUFNLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLGNBQWMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxTQUFTLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRTtBQUNwZixFQUFFLFFBQVEsRUFBRSxTQUFTLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxPQUFPLEtBQUssRUFBRSxRQUFRLElBQUksSUFBSSxRQUFRLEVBQUUsRUFBRSxVQUFVLEdBQUcsQ0FBQyxFQUFFLE9BQU8sSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxhQUFhLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLFVBQVUsR0FBRyxFQUFFLEVBQUUsRUFBRSxTQUFTLFlBQVks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RSxRQUFRLEVBQUUsV0FBVyxFQUFFLEtBQUssS0FBSyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxZQUFZLFdBQVcsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxZQUFZLFVBQVUsQ0FBQyxFQUFFLGNBQWMsRUFBRSxlQUFlLE1BQU0sVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFO0FBQ3RmLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxJQUFJLEVBQUUsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUUsS0FBSyxHQUFHLEVBQUUsS0FBSyxJQUFJLEVBQUUsR0FBRyxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxLQUFLLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sS0FBSyxFQUFFLEVBQUUsTUFBTSxLQUFLLElBQUksSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sSUFBSSxHQUFHLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsT0FBTyxPQUFPLEVBQUUsS0FBSyxLQUFLLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssRUFBRSxFQUFFLElBQUksR0FBRyxJQUFJLE9BQU87QUFDcmYsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssU0FBUyxRQUFRLEdBQUcsRUFBRSxFQUFFLEdBQUcsU0FBUyxRQUFRLElBQUksRUFBRSxFQUFFLFNBQVMsUUFBUSxHQUFHLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLFVBQVUsR0FBRyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksV0FBVyxJQUFJLEVBQUUsV0FBVyxxQkFBcUIsRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxlQUFlLEdBQUcsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLFlBQVksY0FBYyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxPQUFPLFNBQVMsUUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxPQUFPLFVBQVUsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxPQUFPLE9BQU8sSUFBSSxFQUFFLEVBQUUsS0FBSztBQUM3ZSxHQUFHLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxTQUFTLEdBQUcsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLEVBQUUsWUFBWSxJQUFJLEdBQUcsSUFBSSxFQUFFLEVBQUUsWUFBWSxNQUFNLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFF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LEdBQUcsS0FBSyxFQUFFLEdBQUcsT0FBTyxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsWUFBWTtBQUN0ZixHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsU0FBUyxDQUFDLElBQUksU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixHQUFHLEVBQUUsR0FBRyxFQUFFLHdCQUF3QixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxJQUFJLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLE1BQU0sVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsU0FBUyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLEVBQUUsd0JBQXdCLENBQUMsR0FBRyxFQUFFLFVBQVUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7QUFDaGYsR0FBRyxJ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TSxLQUFLLElBQUksSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsdUJBQXVCLEdBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUksRUFBRTtBQUN0ZixDQUFDLEdBQUcsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsT0FBTyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLGVBQWUsRUFBRSxFQUFFLEdBQUcsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLE1BQU0sS0FBSyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLE1BQU0sS0FBSyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLEtBQUssY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsU0FBUyxhQUFhLEVBQUUsRUFBRSxLQUFLLFFBQVEsR0FBRyxHQUFHLEdBQUcsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLEtBQUssVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUM7Q0FDamYsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFF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QUFDLElBQUksS0FBSyxJQUFJLE9BQU8sUUFBUSxLQUFLLEtBQUssT0FBTyxLQUFLLElBQUksS0FBSyxNQUFNLE9BQU8sS0FBSyxZQUFZLGFBQWEsS0FBSyxRQUFRLEtBQUssRUFBRSxLQUFLLEtBQUssUUFBUSxLQUFLLEVBQUUsS0FBSyxPQUFPLEtBQUssUUFBUSxXQUFXLENBQUMsSUFBSSxPQUFPLEtBQUssR0FBRyxRQUFRLE9BQU8sTUFBTSxLQUFLLEtBQUssT0FBTyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsQ0FBQyxJQUFJLFlBQVksU0FBUyxLQUFLLFFBQVEsS0FBSyxFQUFFLElBQUksV0FBVyxLQUFLLGVBQWUsS0FBSyxRQUFRLFdBQVcsS0FBSyxTQUFTLEtBQUssZUFBZSxLQUFLLFFBQVEsU0FBUyxLQUFLLEtBQUssUUFBUSxNQUFNLFVBQVUsYUFBYSxLQUFLLFFBQVEsTUFBTSxNQUFNLEtBQUssUUFBUSxNQUFNLFlBQVksSUFBSSxLQUFLLGlCQUFpQixZQUFZLEtBQUssUUFBUSxXQUFXLGtCQUFrQixZQUFZLEtBQUssUUFBUSxTQUFTLGlCQUFpQixZQUFZLEtBQUssUUFBUSxTQUFTLG9CQUFvQixFQUFFLGlCQUFpQixZQUFZLGtCQUFrQixZQUFZLGlCQUFpQixZQUFZLG9CQUFvQixZQUFZLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxZQUFZLEtBQUssQ0FBQyxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsWUFBWSxFQUFFLGtCQUFrQixLQUFLLGtCQUFrQixNQUFNLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxhQUFhLEtBQUssQ0FBQyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsVUFBVSxFQUFFLG1CQUFtQixLQUFLLGtCQUFrQixLQUFLLG1CQUFtQixLQUFLLGtCQUFrQixNQUFNLEtBQUssUUFBUSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsRUFBRSxZQUFZLFdBQVcsV0FBVyxTQUFTLEtBQUssUUFBUSxLQUFLLE9BQU8saUJBQWlCLGlCQUFpQixLQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssUUFBUSxLQUFLLFdBQVcsa0JBQWtCLGtCQUFrQixLQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssUUFBUSxLQUFLLFdBQVcsaUJBQWlCLGlCQUFpQixLQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssUUFBUSxLQUFLLFdBQVcsb0JBQW9CLG9CQUFvQixLQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssUUFBUSxLQUFLLFdBQVcsS0FBSyxRQUFRLEtBQUssVUFBVSxZQUFZLEtBQUssUUFBUSxLQUFLLE1BQU0sWUFBWSxXQUFXLFdBQVcsS0FBSyxTQUFTLEtBQUssVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVcsVUFBVSxLQUFLLFVBQVUsS0FBSyxVQUFVLGtCQUFrQixrQkFBa0IsV0FBVyxXQUFXLEtBQUssUUFBUSxRQUFRLEtBQUssU0FBUyxLQUFLLFVBQVUsaUJBQWlCLGlCQUFpQixXQUFXLFdBQVcsS0FBSyxRQUFRLFFBQVEsS0FBSyxZQUFZLEtBQUssVUFBVSxvQkFBb0Isb0JBQW9CLFdBQVcsV0FBVyxLQUFLLFVBQVUsU0FBUyxTQUFTLGlCQUFpQixhQUFhLENBQUMsSUFBSSxJQUFJLEdBQUcsT0FBTyxLQUFLLFNBQVMsT0FBTyxPQUFPLEtBQUssUUFBUSxLQUFLLFFBQVEsTUFBTSxLQUFLLFNBQVMsS0FBSyxRQUFRLE1BQU0sR0FBRyxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsSUFBSSxLQUFLLE1BQU0sUUFBUSxDQUFDLEtBQUssS0FBSyxRQUFRLFVBQVUsS0FBSyxRQUFRLGFBQWEsQ0FBQyxJQUFJLFNBQVMsR0FBRyxLQUFLLFFBQVEsS0FBSyxLQUFLLFNBQVMsS0FBSyxRQUFRLFdBQVcsU0FBUyxLQUFLLFFBQVEsU0FBUyxNQUFNLEtBQUssUUFBUSxLQUFLLElBQUksS0FBSyxNQUFNLEtBQUssTUFBTSxRQUFRLElBQUksSUFBSSxFQUFFLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxRQUFRLGlCQUFpQixFQUFFLEtBQUssUUFBUSxlQUFlLElBQUksSUFBSSxPQUFPLFFBQVEsS0FBSyxLQUFLLFFBQVEsS0FBSyxjQUFjLFVBQVUsS0FBSyxZQUFZLFVBQVUsTUFBTSxPQUFPLEtBQUssUUFBUSxXQUFXLEtBQUssRUFBRSxLQUFLLFFBQVEsTUFBTSxJQUFJLEtBQUssWUFBWSxhQUFhLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxLQUFLLFFBQVEsS0FBSyxFQUFFLElBQUksS0FBSyxRQUFRLE1BQU0sS0FBSyxLQUFLLFFBQVEsUUFBUSxVQUFVLFNBQVMsSUFBSSxLQUFLLFFBQVEsS0FBSyxLQUFLLFNBQVMsS0FBSyxRQUFRLFFBQVEsT0FBTyxTQUFTLEtBQUssUUFBUSxRQUFRLEtBQUssTUFBTSxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsWUFBWSxLQUFLLGNBQWMsVUFBVSxLQUFLLFlBQVksVUFBVSxNQUFNLE9BQU8sS0FBSyxRQUFRLFFBQVEsT0FBTyxLQUFLLEtBQUssUUFBUSxRQUFRLE1BQU0sS0FBSyxZQUFZLGFBQWEsS0FBSyxRQUFRLEtBQUssRUFBRSxNQUFNLEtBQUssUUFBUSxLQUFLLEVBQUUsSUFBSSxLQUFLLFFBQVEsTUFBTSxNQUFNLEdBQUcsS0FBSyxRQUFRLE1BQU0sUUFBUSxDQUFDLElBQUksT0FBTyxTQUFTLEtBQUssTUFBTSxFQUFFLE1BQU0sRUFBRSxhQUFhLEtBQUssZUFBZSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsS0FBSyxXQUFXLEtBQUssZUFBZSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsS0FBSyxLQUFLLEVBQUUsR0FBRyxJQUFJLEtBQUssUUFBUSxZQUFZLE1BQU0sS0FBSyxRQUFRLFdBQVcsS0FBSyxHQUFHLFNBQVMsS0FBSyxRQUFRLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLFFBQVEsTUFBTSxNQUFNLE9BQU8sS0FBSyxRQUFRLEtBQUssRUFBRSxNQUFNLFNBQVMsS0FBSyxRQUFRLE1BQU0sU0FBUyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsTUFBTSxNQUFNLEtBQUssR0FBRyxNQUFNLFVBQVUsSUFBSSxVQUFVLENBQUMsT0FBTyxNQUFNLE9BQU8sV0FBVyxjQUFjLEtBQUssR0FBRyxFQUFFLGFBQWEsT0FBTyxHQUFHLFNBQVMsTUFBTSxDQUFDLEdBQUcsT0FBTyxLQUFLLElBQUksT0FBTyxPQUFPLEdBQUcsT0FBTyxLQUFLLElBQUksT0FBTyxPQUFPLEVBQUUsU0FBUyxJQUFJLFVBQVUsVUFBVSxLQUFLLE1BQU0sUUFBUSxPQUFPLFVBQVUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEtBQUssS0FBSyxRQUFRLE1BQU0sYUFBYSxHQUFHLFVBQVUsS0FBSyxRQUFRLE1BQU0sS0FBSyxDQUFDLElBQUksT0FBTyxLQUFLLFFBQVEsTUFBTSxPQUFPLE9BQU8sS0FBSyxRQUFRLEtBQUssRUFBRSxTQUFTLEtBQUssUUFBUSxNQUFNLFNBQVMsS0FBSyxHQUFHLE1BQU0sVUFBVSxJQUFJLFVBQVUsQ0FBQyxPQUFPLE1BQU0sT0FBTyxXQUFXLGNBQWMsS0FBSyxHQUFHLEVBQUUsYUFBYSxPQUFPLEdBQUcsU0FBUyxNQUFNLENBQUMsR0FBRyxPQUFPLEtBQUssSUFBSSxPQUFPLE9BQU8sR0FBRyxPQUFPLEtBQUssSUFBSSxPQUFPLE9BQU8sR0FBRyxPQUFPLEtBQUssSUFBSSxRQUFRLE9BQU8sUUFBUSxHQUFHLE9BQU8sS0FBSyxJQUFJLFFBQVEsT0FBTyxXQUFXLElBQUksVUFBVSxRQUFRLEtBQUssTUFBTSxRQUFRLE9BQU8sUUFBUSxLQUFLLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksR0FBRyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxlQUFlLEtBQUssUUFBUSxNQUFNLE1BQU0sT0FBTyxLQUFLLFFBQVEsTUFBTSxTQUFTLFNBQVMsS0FBSyxRQUFRLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsVUFBVSxDQUFDLEtBQUssS0FBSyxRQUFRLEtBQUssUUFBUSxLQUFLLFFBQVEsSUFBSSxLQUFLLFNBQVMsV0FBVyxDQUFDLEtBQUssS0FBSyxRQUFRLGFBQWEsS0FBSyxRQUFRLGdCQUFnQixLQUFLLFdBQVcsS0FBSyxRQUFRLElBQUksS0FBSyxVQUFVLFlBQVksQ0FBQyxLQUFLLEtBQUssUUFBUSxlQUFlLEtBQUssV0FBVyxLQUFLLFFBQVEsSUFBSSxLQUFLLFVBQVUsWUFBWSxDQUFDLGVBQWUsSUFBSSxLQUFLLFVBQVUsS0FBSyxRQUFRLElBQUksS0FBSyxTQUFTLFdBQVcsQ0FBQyxLQUFLLEtBQUssUUFBUSxXQUFXLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxXQUFXLE9BQU8sV0FBVyxLQUFLLFFBQVEsSUFBSSxLQUFLLFlBQVksY0FBYyxDQUFDLGVBQWUsRUFBRSxPQUFPLFFBQVEsaUJBQWlCLGVBQWUsS0FBSyxVQUFVLEtBQUssU0FBUyxPQUFPLENBQUMsU0FBUyxpQkFBaUIsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sRUFBRSxLQUFLLFFBQVEsS0FBSyxFQUFFLEVBQUUsR0FBRyxNQUFNLEVBQUUsS0FBSyxRQUFRLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyxrQkFBa0IsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxFQUFFLElBQUksT0FBTyxHQUFHLE1BQU0sS0FBSyxZQUFZLEVBQUUsT0FBTyxHQUFHLEtBQUssUUFBUSxLQUFLLEVBQUUsRUFBRSxPQUFPLEdBQUcsS0FBSyxRQUFRLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyxZQUFZLEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxRQUFRLE1BQU0sSUFBSSxLQUFLLEtBQUssRUFBRSxJQUFJLEtBQUssR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLE1BQU0sSUFBSSxNQUFNLElBQUksS0FBSyxRQUFRLFdBQVcsSUFBSSxNQUFNLENBQUMsS0FBSyxRQUFRLENBQUMsTUFBTSxNQUFNLEtBQUssR0FBRyxLQUFLLEtBQUssTUFBTSxLQUFLLGVBQWUsUUFBUSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsWUFBWSxLQUFLLE9BQU8sS0FBSyxRQUFRLEtBQUssS0FBSyxPQUFPLEtBQUssUUFBUSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksS0FBSyxNQUFNLEtBQUssUUFBUSxNQUFNLEtBQUssUUFBUSxLQUFLLEtBQUssSUFBSSxLQUFLLFFBQVEsS0FBSyxJQUFJLEtBQUssTUFBTSxLQUFLLE1BQU0sUUFBUSxJQUFJLE9BQU8sS0FBSyxPQUFPLEtBQUssU0FBUyxTQUFTLEtBQUssZUFBZSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLE1BQU0sS0FBSyxVQUFVLEtBQUssSUFBSSxLQUFLLFVBQVUsVUFBVSxLQUFLLFVBQVUsU0FBUyxLQUFLLGVBQWUsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxNQUFNLEtBQUssV0FBVyxLQUFLLElBQUksS0FBSyxZQUFZLEtBQUssUUFBUSxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxRQUFRLGlCQUFpQixFQUFFLEtBQUssUUFBUSxlQUFlLElBQUksR0FBRyxPQUFPLEtBQUssU0FBUyxPQUFPLFNBQVMsS0FBSyxFQUFFLEtBQUssUUFBUSxNQUFNLEtBQUssR0FBRyxPQUFPLEtBQUssU0FBUyxPQUFPLE9BQU8sU0FBUyxJQUFJLEtBQUssS0FBSyxLQUFLLGFBQWEsSUFBSSxhQUFhLEdBQUcsU0FBUyxPQUFPLEdBQUcsT0FBTyxpQkFBaUIsR0FBRyxVQUFVLGtCQUFrQixLQUFLLFNBQVMsaUJBQWlCLGNBQWMsS0FBSyxRQUFRLFFBQVEsUUFBUSxLQUFLLFVBQVUsYUFBYSxLQUFLLEtBQUssUUFBUSxRQUFRLE1BQU0sU0FBUyxLQUFLLFFBQVEsUUFBUSxVQUFVLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsWUFBWSxLQUFLLGVBQWUsS0FBSyxRQUFRLFdBQVcsS0FBSyxLQUFLLGVBQWUsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxNQUFNLE9BQU8sU0FBUyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsR0FBRyxLQUFLLFVBQVUsS0FBSyxJQUFJLEtBQUssU0FBUyxTQUFTLE1BQU0sS0FBSyxXQUFXLEtBQUssSUFBSSxLQUFLLFVBQVUsU0FBUyxVQUFVLEtBQUssVUFBVSxTQUFTLEtBQUssZUFBZSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLE1BQU0sS0FBSyxXQUFXLEtBQUssSUFBSSxLQUFLLFdBQVcsS0FBSyxTQUFTLFNBQVMsS0FBSyxlQUFlLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsTUFBTSxLQUFLLFVBQVUsS0FBSyxJQUFJLEtBQUssWUFBWSxLQUFLLFVBQVUsU0FBUyxTQUFTLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEtBQUssT0FBTyxLQUFLLFFBQVEsS0FBSyxLQUFLLE9BQU8sS0FBSyxRQUFRLElBQUksQ0FBQyxJQUFJLFFBQVEsS0FBSyxlQUFlLFNBQVMsS0FBSyxR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LFFBQVEsY0FBYyxNQUFNLFFBQVE7U0FDcEMsUUFBUSxjQUFjLE1BQU0sUUFBUTs7Ozs7Ozs7O0lBU3pDLEtBQUssUUFBUSxjQUFjLEtBQUs7SUFDaEMsS0FBSyxRQUFRLGNBQWMsS0FBSztJQUNoQyxLQUFLLFFBQVEsY0FBYyxLQUFLO0lBQ2hDLEtBQUssUUFBUSxjQUFjLEtBQUs7Ozs7SUFJaEMsS0FBSyxjQUFjOzs7SUFHbkIsT0FBTzs7Ozs7QUFLWCxPQUFPLFdBQVcsZUFBZTs7O0FDeEdqQzs7Ozs7OztDQU9DOztBQUVELElBQUksWUFBWSxVQUFVLFVBQVUsUUFBUSxVQUFVO1lBQzFDLFVBQVUsV0FBVzs7WUFFckIsT0FBTyxTQUFTLFFBQVEsU0FBUyxTQUFTLEdBQUcsR0FBRztnQkFDNUMsSUFBSSxJQUFJLEVBQUUsTUFBTTtvQkFDWixJQUFJOztnQkFFUixJQUFJO29CQUNBLEtBQUssSUFBSSxLQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtrQkFDN0IsTUFBTSxFQUFFO29CQUNOLElBQUk7OztnQkFHUixPQUFPLENBQUMsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksSUFBSTs7Ozs7O0FBTTlFLFNBQVMsVUFBVSxTQUFTLFVBQVUsTUFBTSxNQUFNO0lBQzlDLEtBQUssVUFBVSxRQUFRO0lBQ3ZCLE9BQU87OztBQUdYLE9BQU8sT0FBTyxZQUFZLFVBQVUsUUFBUSxVQUFVO0lBQ2xELElBQUksT0FBTztJQUNYLE9BQU8sU0FBUyxNQUFNLFFBQVE7Ozs7OztBQU1sQyxPQUFPLFdBQVcsT0FBTyxXQUFXLFNBQVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiBBbmd1bGFySlMgdjEuNC4zXG4gKGMpIDIwMTAtMjAxNSBHb29nbGUsIEluYy4gaHR0cDovL2FuZ3VsYXJqcy5vcmdcbiBMaWNlbnNlOiBNSVRcbiovXG4oZnVuY3Rpb24oRix0LFcpeyd1c2Ugc3RyaWN0JztmdW5jdGlvbiB1YShhLGIsYyl7aWYoIWEpdGhyb3cgbmdNaW5FcnIoXCJhcmVxXCIsYnx8XCI/XCIsY3x8XCJyZXF1aXJlZFwiKTtyZXR1cm4gYX1mdW5jdGlvbiB2YShhLGIpe2lmKCFhJiYhYilyZXR1cm5cIlwiO2lmKCFhKXJldHVybiBiO2lmKCFiKXJldHVybiBhO1goYSkmJihhPWEuam9pbihcIiBcIikpO1goYikmJihiPWIuam9pbihcIiBcIikpO3JldHVybiBhK1wiIFwiK2J9ZnVuY3Rpb24gRWEoYSl7dmFyIGI9e307YSYmKGEudG98fGEuZnJvbSkmJihiLnRvPWEudG8sYi5mcm9tPWEuZnJvbSk7cmV0dXJuIGJ9ZnVuY3Rpb24gYmEoYSxiLGMpe3ZhciBkPVwiXCI7YT1YKGEpP2E6YSYmVShhKSYmYS5sZW5ndGg/YS5zcGxpdCgvXFxzKy8pOltdO3UoYSxmdW5jdGlvbihhLHMpe2EmJjA8YS5sZW5ndGgmJihkKz0wPHM/XCIgXCI6XCJcIixkKz1jP2IrYTphK2IpfSk7cmV0dXJuIGR9ZnVuY3Rpb24gRmEoYSl7aWYoYSBpbnN0YW5jZW9mIEcpc3dpdGNoKGEubGVuZ3RoKXtjYXNlIDA6cmV0dXJuW107XG5jYXNlIDE6aWYoMT09PWFbMF0ubm9kZVR5cGUpcmV0dXJuIGE7YnJlYWs7ZGVmYXVsdDpyZXR1cm4gRyhrYShhKSl9aWYoMT09PWEubm9kZVR5cGUpcmV0dXJuIEcoYSl9ZnVuY3Rpb24ga2EoYSl7aWYoIWFbMF0pcmV0dXJuIGE7Zm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBjPWFbYl07aWYoMT09Yy5ub2RlVHlwZSlyZXR1cm4gY319ZnVuY3Rpb24gR2EoYSxiLGMpe3UoYixmdW5jdGlvbihiKXthLmFkZENsYXNzKGIsYyl9KX1mdW5jdGlvbiBIYShhLGIsYyl7dShiLGZ1bmN0aW9uKGIpe2EucmVtb3ZlQ2xhc3MoYixjKX0pfWZ1bmN0aW9uIGhhKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe2MuYWRkQ2xhc3MmJihHYShhLGIsYy5hZGRDbGFzcyksYy5hZGRDbGFzcz1udWxsKTtjLnJlbW92ZUNsYXNzJiYoSGEoYSxiLGMucmVtb3ZlQ2xhc3MpLGMucmVtb3ZlQ2xhc3M9bnVsbCl9fWZ1bmN0aW9uIGlhKGEpe2E9YXx8e307aWYoIWEuJCRwcmVwYXJlZCl7dmFyIGI9YS5kb21PcGVyYXRpb258fFxuSDthLmRvbU9wZXJhdGlvbj1mdW5jdGlvbigpe2EuJCRkb21PcGVyYXRpb25GaXJlZD0hMDtiKCk7Yj1IfTthLiQkcHJlcGFyZWQ9ITB9cmV0dXJuIGF9ZnVuY3Rpb24gY2EoYSxiKXt3YShhLGIpO3hhKGEsYil9ZnVuY3Rpb24gd2EoYSxiKXtiLmZyb20mJihhLmNzcyhiLmZyb20pLGIuZnJvbT1udWxsKX1mdW5jdGlvbiB4YShhLGIpe2IudG8mJihhLmNzcyhiLnRvKSxiLnRvPW51bGwpfWZ1bmN0aW9uIFIoYSxiLGMpe3ZhciBkPShiLmFkZENsYXNzfHxcIlwiKStcIiBcIisoYy5hZGRDbGFzc3x8XCJcIiksZT0oYi5yZW1vdmVDbGFzc3x8XCJcIikrXCIgXCIrKGMucmVtb3ZlQ2xhc3N8fFwiXCIpO2E9SWEoYS5hdHRyKFwiY2xhc3NcIiksZCxlKTt5YShiLGMpO2IuYWRkQ2xhc3M9YS5hZGRDbGFzcz9hLmFkZENsYXNzOm51bGw7Yi5yZW1vdmVDbGFzcz1hLnJlbW92ZUNsYXNzP2EucmVtb3ZlQ2xhc3M6bnVsbDtyZXR1cm4gYn1mdW5jdGlvbiBJYShhLGIsYyl7ZnVuY3Rpb24gZChhKXtVKGEpJiYoYT1hLnNwbGl0KFwiIFwiKSk7XG52YXIgYj17fTt1KGEsZnVuY3Rpb24oYSl7YS5sZW5ndGgmJihiW2FdPSEwKX0pO3JldHVybiBifXZhciBlPXt9O2E9ZChhKTtiPWQoYik7dShiLGZ1bmN0aW9uKGEsYil7ZVtiXT0xfSk7Yz1kKGMpO3UoYyxmdW5jdGlvbihhLGIpe2VbYl09MT09PWVbYl0/bnVsbDotMX0pO3ZhciBzPXthZGRDbGFzczpcIlwiLHJlbW92ZUNsYXNzOlwiXCJ9O3UoZSxmdW5jdGlvbihiLGMpe3ZhciBkLGU7MT09PWI/KGQ9XCJhZGRDbGFzc1wiLGU9IWFbY10pOi0xPT09YiYmKGQ9XCJyZW1vdmVDbGFzc1wiLGU9YVtjXSk7ZSYmKHNbZF0ubGVuZ3RoJiYoc1tkXSs9XCIgXCIpLHNbZF0rPWMpfSk7cmV0dXJuIHN9ZnVuY3Rpb24geihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIHQuZWxlbWVudD9hWzBdOmF9ZnVuY3Rpb24gemEoYSxiLGMpe3ZhciBkPU9iamVjdC5jcmVhdGUobnVsbCksZT1hLmdldENvbXB1dGVkU3R5bGUoYil8fHt9O3UoYyxmdW5jdGlvbihhLGIpe3ZhciBjPWVbYV07aWYoYyl7dmFyIGs9Yy5jaGFyQXQoMCk7XG5pZihcIi1cIj09PWt8fFwiK1wiPT09a3x8MDw9ayljPUphKGMpOzA9PT1jJiYoYz1udWxsKTtkW2JdPWN9fSk7cmV0dXJuIGR9ZnVuY3Rpb24gSmEoYSl7dmFyIGI9MDthPWEuc3BsaXQoL1xccyosXFxzKi8pO3UoYSxmdW5jdGlvbihhKXtcInNcIj09YS5jaGFyQXQoYS5sZW5ndGgtMSkmJihhPWEuc3Vic3RyaW5nKDAsYS5sZW5ndGgtMSkpO2E9cGFyc2VGbG9hdChhKXx8MDtiPWI/TWF0aC5tYXgoYSxiKTphfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gbGEoYSl7cmV0dXJuIDA9PT1hfHxudWxsIT1hfWZ1bmN0aW9uIEFhKGEsYil7dmFyIGM9TyxkPWErXCJzXCI7Yj9jKz1cIkR1cmF0aW9uXCI6ZCs9XCIgbGluZWFyIGFsbFwiO3JldHVybltjLGRdfWZ1bmN0aW9uIGphKGEsYil7dmFyIGM9Yj9cIi1cIitiK1wic1wiOlwiXCI7ZGEoYSxbZWEsY10pO3JldHVybltlYSxjXX1mdW5jdGlvbiBtYShhLGIpe3ZhciBjPWI/XCJwYXVzZWRcIjpcIlwiLGQ9VitcIlBsYXlTdGF0ZVwiO2RhKGEsW2QsY10pO3JldHVybltkLGNdfWZ1bmN0aW9uIGRhKGEsXG5iKXthLnN0eWxlW2JbMF1dPWJbMV19ZnVuY3Rpb24gQmEoKXt2YXIgYT1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybntmbHVzaDpmdW5jdGlvbigpe2E9T2JqZWN0LmNyZWF0ZShudWxsKX0sY291bnQ6ZnVuY3Rpb24oYil7cmV0dXJuKGI9YVtiXSk/Yi50b3RhbDowfSxnZXQ6ZnVuY3Rpb24oYil7cmV0dXJuKGI9YVtiXSkmJmIudmFsdWV9LHB1dDpmdW5jdGlvbihiLGMpe2FbYl0/YVtiXS50b3RhbCsrOmFbYl09e3RvdGFsOjEsdmFsdWU6Y319fX12YXIgSD10Lm5vb3AseWE9dC5leHRlbmQsRz10LmVsZW1lbnQsdT10LmZvckVhY2gsWD10LmlzQXJyYXksVT10LmlzU3RyaW5nLG5hPXQuaXNPYmplY3QsS2E9dC5pc1VuZGVmaW5lZCxMYT10LmlzRGVmaW5lZCxDYT10LmlzRnVuY3Rpb24sb2E9dC5pc0VsZW1lbnQsTyxwYSxWLHFhO0Yub250cmFuc2l0aW9uZW5kPT09VyYmRi5vbndlYmtpdHRyYW5zaXRpb25lbmQhPT1XPyhPPVwiV2Via2l0VHJhbnNpdGlvblwiLHBhPVwid2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kXCIpOlxuKE89XCJ0cmFuc2l0aW9uXCIscGE9XCJ0cmFuc2l0aW9uZW5kXCIpO0Yub25hbmltYXRpb25lbmQ9PT1XJiZGLm9ud2Via2l0YW5pbWF0aW9uZW5kIT09Vz8oVj1cIldlYmtpdEFuaW1hdGlvblwiLHFhPVwid2Via2l0QW5pbWF0aW9uRW5kIGFuaW1hdGlvbmVuZFwiKTooVj1cImFuaW1hdGlvblwiLHFhPVwiYW5pbWF0aW9uZW5kXCIpO3ZhciByYT1WK1wiRGVsYXlcIixzYT1WK1wiRHVyYXRpb25cIixlYT1PK1wiRGVsYXlcIjtGPU8rXCJEdXJhdGlvblwiO3ZhciBNYT17dHJhbnNpdGlvbkR1cmF0aW9uOkYsdHJhbnNpdGlvbkRlbGF5OmVhLHRyYW5zaXRpb25Qcm9wZXJ0eTpPK1wiUHJvcGVydHlcIixhbmltYXRpb25EdXJhdGlvbjpzYSxhbmltYXRpb25EZWxheTpyYSxhbmltYXRpb25JdGVyYXRpb25Db3VudDpWK1wiSXRlcmF0aW9uQ291bnRcIn0sTmE9e3RyYW5zaXRpb25EdXJhdGlvbjpGLHRyYW5zaXRpb25EZWxheTplYSxhbmltYXRpb25EdXJhdGlvbjpzYSxhbmltYXRpb25EZWxheTpyYX07dC5tb2R1bGUoXCJuZ0FuaW1hdGVcIixcbltdKS5kaXJlY3RpdmUoXCJuZ0FuaW1hdGVDaGlsZHJlblwiLFtmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihhLGIsYyl7YT1jLm5nQW5pbWF0ZUNoaWxkcmVuO3QuaXNTdHJpbmcoYSkmJjA9PT1hLmxlbmd0aD9iLmRhdGEoXCIkJG5nQW5pbWF0ZUNoaWxkcmVuXCIsITApOmMuJG9ic2VydmUoXCJuZ0FuaW1hdGVDaGlsZHJlblwiLGZ1bmN0aW9uKGEpe2IuZGF0YShcIiQkbmdBbmltYXRlQ2hpbGRyZW5cIixcIm9uXCI9PT1hfHxcInRydWVcIj09PWEpfSl9fV0pLmZhY3RvcnkoXCIkJHJBRk11dGV4XCIsW1wiJCRyQUZcIixmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYj0hMTthKGZ1bmN0aW9uKCl7Yj0hMH0pO3JldHVybiBmdW5jdGlvbihjKXtiP2MoKTphKGMpfX19XSkuZmFjdG9yeShcIiQkckFGU2NoZWR1bGVyXCIsW1wiJCRyQUZcIixmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe2QucHVzaChbXS5jb25jYXQoYSkpO2MoKX1mdW5jdGlvbiBjKCl7aWYoZC5sZW5ndGgpe2Zvcih2YXIgYj1bXSxuPVxuMDtuPGQubGVuZ3RoO24rKyl7dmFyIGg9ZFtuXTtoLnNoaWZ0KCkoKTtoLmxlbmd0aCYmYi5wdXNoKGgpfWQ9YjtlfHxhKGZ1bmN0aW9uKCl7ZXx8YygpfSl9fXZhciBkPVtdLGU7Yi53YWl0VW50aWxRdWlldD1mdW5jdGlvbihiKXtlJiZlKCk7ZT1hKGZ1bmN0aW9uKCl7ZT1udWxsO2IoKTtjKCl9KX07cmV0dXJuIGJ9XSkuZmFjdG9yeShcIiQkQW5pbWF0ZVJ1bm5lclwiLFtcIiRxXCIsXCIkJHJBRk11dGV4XCIsZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEpe3RoaXMuc2V0SG9zdChhKTt0aGlzLl9kb25lQ2FsbGJhY2tzPVtdO3RoaXMuX3J1bkluQW5pbWF0aW9uRnJhbWU9YigpO3RoaXMuX3N0YXRlPTB9Yy5jaGFpbj1mdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoKXtpZihuPT09YS5sZW5ndGgpYighMCk7ZWxzZSBhW25dKGZ1bmN0aW9uKGEpeyExPT09YT9iKCExKToobisrLGMoKSl9KX12YXIgbj0wO2MoKX07Yy5hbGw9ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKHMpe2g9aCYmczsrK249PT1cbmEubGVuZ3RoJiZiKGgpfXZhciBuPTAsaD0hMDt1KGEsZnVuY3Rpb24oYSl7YS5kb25lKGMpfSl9O2MucHJvdG90eXBlPXtzZXRIb3N0OmZ1bmN0aW9uKGEpe3RoaXMuaG9zdD1hfHx7fX0sZG9uZTpmdW5jdGlvbihhKXsyPT09dGhpcy5fc3RhdGU/YSgpOnRoaXMuX2RvbmVDYWxsYmFja3MucHVzaChhKX0scHJvZ3Jlc3M6SCxnZXRQcm9taXNlOmZ1bmN0aW9uKCl7aWYoIXRoaXMucHJvbWlzZSl7dmFyIGI9dGhpczt0aGlzLnByb21pc2U9YShmdW5jdGlvbihhLGMpe2IuZG9uZShmdW5jdGlvbihiKXshMT09PWI/YygpOmEoKX0pfSl9cmV0dXJuIHRoaXMucHJvbWlzZX0sdGhlbjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmdldFByb21pc2UoKS50aGVuKGEsYil9LFwiY2F0Y2hcIjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5nZXRQcm9taXNlKClbXCJjYXRjaFwiXShhKX0sXCJmaW5hbGx5XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZ2V0UHJvbWlzZSgpW1wiZmluYWxseVwiXShhKX0scGF1c2U6ZnVuY3Rpb24oKXt0aGlzLmhvc3QucGF1c2UmJlxudGhpcy5ob3N0LnBhdXNlKCl9LHJlc3VtZTpmdW5jdGlvbigpe3RoaXMuaG9zdC5yZXN1bWUmJnRoaXMuaG9zdC5yZXN1bWUoKX0sZW5kOmZ1bmN0aW9uKCl7dGhpcy5ob3N0LmVuZCYmdGhpcy5ob3N0LmVuZCgpO3RoaXMuX3Jlc29sdmUoITApfSxjYW5jZWw6ZnVuY3Rpb24oKXt0aGlzLmhvc3QuY2FuY2VsJiZ0aGlzLmhvc3QuY2FuY2VsKCk7dGhpcy5fcmVzb2x2ZSghMSl9LGNvbXBsZXRlOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7MD09PWIuX3N0YXRlJiYoYi5fc3RhdGU9MSxiLl9ydW5JbkFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7Yi5fcmVzb2x2ZShhKX0pKX0sX3Jlc29sdmU6ZnVuY3Rpb24oYSl7MiE9PXRoaXMuX3N0YXRlJiYodSh0aGlzLl9kb25lQ2FsbGJhY2tzLGZ1bmN0aW9uKGIpe2IoYSl9KSx0aGlzLl9kb25lQ2FsbGJhY2tzLmxlbmd0aD0wLHRoaXMuX3N0YXRlPTIpfX07cmV0dXJuIGN9XSkucHJvdmlkZXIoXCIkJGFuaW1hdGVRdWV1ZVwiLFtcIiRhbmltYXRlUHJvdmlkZXJcIixcbmZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSxiLGMsaCl7cmV0dXJuIGRbYV0uc29tZShmdW5jdGlvbihhKXtyZXR1cm4gYShiLGMsaCl9KX1mdW5jdGlvbiBjKGEsYil7YT1hfHx7fTt2YXIgYz0wPChhLmFkZENsYXNzfHxcIlwiKS5sZW5ndGgsZD0wPChhLnJlbW92ZUNsYXNzfHxcIlwiKS5sZW5ndGg7cmV0dXJuIGI/YyYmZDpjfHxkfXZhciBkPXRoaXMucnVsZXM9e3NraXA6W10sY2FuY2VsOltdLGpvaW46W119O2Quam9pbi5wdXNoKGZ1bmN0aW9uKGEsYixkKXtyZXR1cm4hYi5zdHJ1Y3R1cmFsJiZjKGIub3B0aW9ucyl9KTtkLnNraXAucHVzaChmdW5jdGlvbihhLGIsZCl7cmV0dXJuIWIuc3RydWN0dXJhbCYmIWMoYi5vcHRpb25zKX0pO2Quc2tpcC5wdXNoKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5cImxlYXZlXCI9PWMuZXZlbnQmJmIuc3RydWN0dXJhbH0pO2Quc2tpcC5wdXNoKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYy5zdHJ1Y3R1cmFsJiYhYi5zdHJ1Y3R1cmFsfSk7ZC5jYW5jZWwucHVzaChmdW5jdGlvbihhLFxuYixjKXtyZXR1cm4gYy5zdHJ1Y3R1cmFsJiZiLnN0cnVjdHVyYWx9KTtkLmNhbmNlbC5wdXNoKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gMj09PWMuc3RhdGUmJmIuc3RydWN0dXJhbH0pO2QuY2FuY2VsLnB1c2goZnVuY3Rpb24oYSxiLGMpe2E9Yi5vcHRpb25zO2M9Yy5vcHRpb25zO3JldHVybiBhLmFkZENsYXNzJiZhLmFkZENsYXNzPT09Yy5yZW1vdmVDbGFzc3x8YS5yZW1vdmVDbGFzcyYmYS5yZW1vdmVDbGFzcz09PWMuYWRkQ2xhc3N9KTt0aGlzLiRnZXQ9W1wiJCRyQUZcIixcIiRyb290U2NvcGVcIixcIiRyb290RWxlbWVudFwiLFwiJGRvY3VtZW50XCIsXCIkJEhhc2hNYXBcIixcIiQkYW5pbWF0aW9uXCIsXCIkJEFuaW1hdGVSdW5uZXJcIixcIiR0ZW1wbGF0ZVJlcXVlc3RcIixcIiQkanFMaXRlXCIsZnVuY3Rpb24oZCxzLG4saCxrLEQsQSxaLEkpe2Z1bmN0aW9uIHcoYSxiKXt2YXIgYz16KGEpLGY9W10sbT1sW2JdO20mJnUobSxmdW5jdGlvbihhKXthLm5vZGUuY29udGFpbnMoYykmJmYucHVzaChhLmNhbGxiYWNrKX0pO1xucmV0dXJuIGZ9ZnVuY3Rpb24gQihhLGIsYyxmKXtkKGZ1bmN0aW9uKCl7dSh3KGIsYSksZnVuY3Rpb24oYSl7YShiLGMsZil9KX0pfWZ1bmN0aW9uIHIoYSxTLHApe2Z1bmN0aW9uIGQoYixjLGYscCl7QihjLGEsZixwKTtiLnByb2dyZXNzKGMsZixwKX1mdW5jdGlvbiBnKGIpe0RhKGEscCk7Y2EoYSxwKTtwLmRvbU9wZXJhdGlvbigpO2wuY29tcGxldGUoIWIpfXZhciBQLEU7aWYoYT1GYShhKSlQPXooYSksRT1hLnBhcmVudCgpO3A9aWEocCk7dmFyIGw9bmV3IEE7aWYoIVApcmV0dXJuIGcoKSxsO1gocC5hZGRDbGFzcykmJihwLmFkZENsYXNzPXAuYWRkQ2xhc3Muam9pbihcIiBcIikpO1gocC5yZW1vdmVDbGFzcykmJihwLnJlbW92ZUNsYXNzPXAucmVtb3ZlQ2xhc3Muam9pbihcIiBcIikpO3AuZnJvbSYmIW5hKHAuZnJvbSkmJihwLmZyb209bnVsbCk7cC50byYmIW5hKHAudG8pJiYocC50bz1udWxsKTt2YXIgZT1bUC5jbGFzc05hbWUscC5hZGRDbGFzcyxwLnJlbW92ZUNsYXNzXS5qb2luKFwiIFwiKTtcbmlmKCF2KGUpKXJldHVybiBnKCksbDt2YXIgTT0wPD1bXCJlbnRlclwiLFwibW92ZVwiLFwibGVhdmVcIl0uaW5kZXhPZihTKSxoPSF4fHxMLmdldChQKSxlPSFoJiZtLmdldChQKXx8e30saz0hIWUuc3RhdGU7aHx8ayYmMT09ZS5zdGF0ZXx8KGg9IXRhKGEsRSxTKSk7aWYoaClyZXR1cm4gZygpLGw7TSYmSyhhKTtoPXtzdHJ1Y3R1cmFsOk0sZWxlbWVudDphLGV2ZW50OlMsY2xvc2U6ZyxvcHRpb25zOnAscnVubmVyOmx9O2lmKGspe2lmKGIoXCJza2lwXCIsYSxoLGUpKXtpZigyPT09ZS5zdGF0ZSlyZXR1cm4gZygpLGw7UihhLGUub3B0aW9ucyxwKTtyZXR1cm4gZS5ydW5uZXJ9aWYoYihcImNhbmNlbFwiLGEsaCxlKSkyPT09ZS5zdGF0ZT9lLnJ1bm5lci5lbmQoKTplLnN0cnVjdHVyYWw/ZS5jbG9zZSgpOlIoYSxoLm9wdGlvbnMsZS5vcHRpb25zKTtlbHNlIGlmKGIoXCJqb2luXCIsYSxoLGUpKWlmKDI9PT1lLnN0YXRlKVIoYSxwLHt9KTtlbHNlIHJldHVybiBTPWguZXZlbnQ9ZS5ldmVudCxwPVIoYSxcbmUub3B0aW9ucyxoLm9wdGlvbnMpLGx9ZWxzZSBSKGEscCx7fSk7KGs9aC5zdHJ1Y3R1cmFsKXx8KGs9XCJhbmltYXRlXCI9PT1oLmV2ZW50JiYwPE9iamVjdC5rZXlzKGgub3B0aW9ucy50b3x8e30pLmxlbmd0aHx8YyhoLm9wdGlvbnMpKTtpZighaylyZXR1cm4gZygpLEMoYSksbDtNJiZmKEUpO3ZhciByPShlLmNvdW50ZXJ8fDApKzE7aC5jb3VudGVyPXI7Z2EoYSwxLGgpO3MuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7dmFyIGI9bS5nZXQoUCksdj0hYixiPWJ8fHt9LGU9YS5wYXJlbnQoKXx8W10sRT0wPGUubGVuZ3RoJiYoXCJhbmltYXRlXCI9PT1iLmV2ZW50fHxiLnN0cnVjdHVyYWx8fGMoYi5vcHRpb25zKSk7aWYodnx8Yi5jb3VudGVyIT09cnx8IUUpe3YmJihEYShhLHApLGNhKGEscCkpO2lmKHZ8fE0mJmIuZXZlbnQhPT1TKXAuZG9tT3BlcmF0aW9uKCksbC5lbmQoKTtFfHxDKGEpfWVsc2UgUz0hYi5zdHJ1Y3R1cmFsJiZjKGIub3B0aW9ucywhMCk/XCJzZXRDbGFzc1wiOmIuZXZlbnQsXG5iLnN0cnVjdHVyYWwmJmYoZSksZ2EoYSwyKSxiPUQoYSxTLGIub3B0aW9ucyksYi5kb25lKGZ1bmN0aW9uKGIpe2coIWIpOyhiPW0uZ2V0KFApKSYmYi5jb3VudGVyPT09ciYmQyh6KGEpKTtkKGwsUyxcImNsb3NlXCIse30pfSksbC5zZXRIb3N0KGIpLGQobCxTLFwic3RhcnRcIix7fSl9KTtyZXR1cm4gbH1mdW5jdGlvbiBLKGEpe2E9eihhKS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbmctYW5pbWF0ZV1cIik7dShhLGZ1bmN0aW9uKGEpe3ZhciBiPXBhcnNlSW50KGEuZ2V0QXR0cmlidXRlKFwiZGF0YS1uZy1hbmltYXRlXCIpKSxjPW0uZ2V0KGEpO3N3aXRjaChiKXtjYXNlIDI6Yy5ydW5uZXIuZW5kKCk7Y2FzZSAxOmMmJm0ucmVtb3ZlKGEpfX0pfWZ1bmN0aW9uIEMoYSl7YT16KGEpO2EucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1uZy1hbmltYXRlXCIpO20ucmVtb3ZlKGEpfWZ1bmN0aW9uIEUoYSxiKXtyZXR1cm4geihhKT09PXooYil9ZnVuY3Rpb24gZihhKXthPXooYSk7ZG97aWYoIWF8fDEhPT1cbmEubm9kZVR5cGUpYnJlYWs7dmFyIGI9bS5nZXQoYSk7aWYoYil7dmFyIGY9YTshYi5zdHJ1Y3R1cmFsJiZjKGIub3B0aW9ucykmJigyPT09Yi5zdGF0ZSYmYi5ydW5uZXIuZW5kKCksQyhmKSl9YT1hLnBhcmVudE5vZGV9d2hpbGUoMSl9ZnVuY3Rpb24gdGEoYSxiLGMpe3ZhciBmPWM9ITEsZD0hMSx2O2ZvcigoYT1hLmRhdGEoXCIkbmdBbmltYXRlUGluXCIpKSYmKGI9YSk7YiYmYi5sZW5ndGg7KXtmfHwoZj1FKGIsbikpO2E9YlswXTtpZigxIT09YS5ub2RlVHlwZSlicmVhazt2YXIgZT1tLmdldChhKXx8e307ZHx8KGQ9ZS5zdHJ1Y3R1cmFsfHxMLmdldChhKSk7aWYoS2Eodil8fCEwPT09dilhPWIuZGF0YShcIiQkbmdBbmltYXRlQ2hpbGRyZW5cIiksTGEoYSkmJih2PWEpO2lmKGQmJiExPT09dilicmVhaztmfHwoZj1FKGIsbiksZnx8KGE9Yi5kYXRhKFwiJG5nQW5pbWF0ZVBpblwiKSkmJihiPWEpKTtjfHwoYz1FKGIsZykpO2I9Yi5wYXJlbnQoKX1yZXR1cm4oIWR8fHYpJiZmJiZjfWZ1bmN0aW9uIGdhKGEsXG5iLGMpe2M9Y3x8e307Yy5zdGF0ZT1iO2E9eihhKTthLnNldEF0dHJpYnV0ZShcImRhdGEtbmctYW5pbWF0ZVwiLGIpO2M9KGI9bS5nZXQoYSkpP3lhKGIsYyk6YzttLnB1dChhLGMpfXZhciBtPW5ldyBrLEw9bmV3IGsseD1udWxsLE09cy4kd2F0Y2goZnVuY3Rpb24oKXtyZXR1cm4gMD09PVoudG90YWxQZW5kaW5nUmVxdWVzdHN9LGZ1bmN0aW9uKGEpe2EmJihNKCkscy4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXtzLiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe251bGw9PT14JiYoeD0hMCl9KX0pKX0pLGc9RyhoWzBdLmJvZHkpLGw9e30sUD1hLmNsYXNzTmFtZUZpbHRlcigpLHY9UD9mdW5jdGlvbihhKXtyZXR1cm4gUC50ZXN0KGEpfTpmdW5jdGlvbigpe3JldHVybiEwfSxEYT1oYShJKTtyZXR1cm57b246ZnVuY3Rpb24oYSxiLGMpe2I9a2EoYik7bFthXT1sW2FdfHxbXTtsW2FdLnB1c2goe25vZGU6YixjYWxsYmFjazpjfSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gZihhLFxuYixjKXt2YXIgZD1rYShiKTtyZXR1cm4gYS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIShhLm5vZGU9PT1kJiYoIWN8fGEuY2FsbGJhY2s9PT1jKSl9KX12YXIgZD1sW2FdO2QmJihsW2FdPTE9PT1hcmd1bWVudHMubGVuZ3RoP251bGw6ZihkLGIsYykpfSxwaW46ZnVuY3Rpb24oYSxiKXt1YShvYShhKSxcImVsZW1lbnRcIixcIm5vdCBhbiBlbGVtZW50XCIpO3VhKG9hKGIpLFwicGFyZW50RWxlbWVudFwiLFwibm90IGFuIGVsZW1lbnRcIik7YS5kYXRhKFwiJG5nQW5pbWF0ZVBpblwiLGIpfSxwdXNoOmZ1bmN0aW9uKGEsYixjLGYpe2M9Y3x8e307Yy5kb21PcGVyYXRpb249ZjtyZXR1cm4gcihhLGIsYyl9LGVuYWJsZWQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz1hcmd1bWVudHMubGVuZ3RoO2lmKDA9PT1jKWI9ISF4O2Vsc2UgaWYob2EoYSkpe3ZhciBmPXooYSksZD1MLmdldChmKTsxPT09Yz9iPSFkOihiPSEhYik/ZCYmTC5yZW1vdmUoZik6TC5wdXQoZiwhMCl9ZWxzZSBiPXg9ISFhO3JldHVybiBifX19XX1dKS5wcm92aWRlcihcIiQkYW5pbWF0aW9uXCIsXG5bXCIkYW5pbWF0ZVByb3ZpZGVyXCIsZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhKXtyZXR1cm4gYS5kYXRhKFwiJCRhbmltYXRpb25SdW5uZXJcIil9dmFyIGM9dGhpcy5kcml2ZXJzPVtdO3RoaXMuJGdldD1bXCIkJGpxTGl0ZVwiLFwiJHJvb3RTY29wZVwiLFwiJGluamVjdG9yXCIsXCIkJEFuaW1hdGVSdW5uZXJcIixcIiQkckFGU2NoZWR1bGVyXCIsZnVuY3Rpb24oYSxlLHMsbixoKXt2YXIgaz1bXSxEPWhhKGEpLEE9MCxaPTAsST1bXTtyZXR1cm4gZnVuY3Rpb24odyxCLHIpe2Z1bmN0aW9uIEsoYSl7YT1hLmhhc0F0dHJpYnV0ZShcIm5nLWFuaW1hdGUtcmVmXCIpP1thXTphLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmctYW5pbWF0ZS1yZWZdXCIpO3ZhciBiPVtdO3UoYSxmdW5jdGlvbihhKXt2YXIgYz1hLmdldEF0dHJpYnV0ZShcIm5nLWFuaW1hdGUtcmVmXCIpO2MmJmMubGVuZ3RoJiZiLnB1c2goYSl9KTtyZXR1cm4gYn1mdW5jdGlvbiBDKGEpe3ZhciBiPVtdLGM9e307dShhLGZ1bmN0aW9uKGEsZil7dmFyIGQ9eihhLmVsZW1lbnQpLFxubT0wPD1bXCJlbnRlclwiLFwibW92ZVwiXS5pbmRleE9mKGEuZXZlbnQpLGQ9YS5zdHJ1Y3R1cmFsP0soZCk6W107aWYoZC5sZW5ndGgpe3ZhciBnPW0/XCJ0b1wiOlwiZnJvbVwiO3UoZCxmdW5jdGlvbihhKXt2YXIgYj1hLmdldEF0dHJpYnV0ZShcIm5nLWFuaW1hdGUtcmVmXCIpO2NbYl09Y1tiXXx8e307Y1tiXVtnXT17YW5pbWF0aW9uSUQ6ZixlbGVtZW50OkcoYSl9fSl9ZWxzZSBiLnB1c2goYSl9KTt2YXIgZj17fSxkPXt9O3UoYyxmdW5jdGlvbihjLG0pe3ZhciBnPWMuZnJvbSxlPWMudG87aWYoZyYmZSl7dmFyIGw9YVtnLmFuaW1hdGlvbklEXSxoPWFbZS5hbmltYXRpb25JRF0seD1nLmFuaW1hdGlvbklELnRvU3RyaW5nKCk7aWYoIWRbeF0pe3ZhciBCPWRbeF09e3N0cnVjdHVyYWw6ITAsYmVmb3JlU3RhcnQ6ZnVuY3Rpb24oKXtsLmJlZm9yZVN0YXJ0KCk7aC5iZWZvcmVTdGFydCgpfSxjbG9zZTpmdW5jdGlvbigpe2wuY2xvc2UoKTtoLmNsb3NlKCl9LGNsYXNzZXM6RShsLmNsYXNzZXMsaC5jbGFzc2VzKSxcbmZyb206bCx0bzpoLGFuY2hvcnM6W119O0IuY2xhc3Nlcy5sZW5ndGg/Yi5wdXNoKEIpOihiLnB1c2gobCksYi5wdXNoKGgpKX1kW3hdLmFuY2hvcnMucHVzaCh7b3V0OmcuZWxlbWVudCxcImluXCI6ZS5lbGVtZW50fSl9ZWxzZSBnPWc/Zy5hbmltYXRpb25JRDplLmFuaW1hdGlvbklELGU9Zy50b1N0cmluZygpLGZbZV18fChmW2VdPSEwLGIucHVzaChhW2ddKSl9KTtyZXR1cm4gYn1mdW5jdGlvbiBFKGEsYil7YT1hLnNwbGl0KFwiIFwiKTtiPWIuc3BsaXQoXCIgXCIpO2Zvcih2YXIgYz1bXSxmPTA7ZjxhLmxlbmd0aDtmKyspe3ZhciBkPWFbZl07aWYoXCJuZy1cIiE9PWQuc3Vic3RyaW5nKDAsMykpZm9yKHZhciBnPTA7ZzxiLmxlbmd0aDtnKyspaWYoZD09PWJbZ10pe2MucHVzaChkKTticmVha319cmV0dXJuIGMuam9pbihcIiBcIil9ZnVuY3Rpb24gZihhKXtmb3IodmFyIGI9Yy5sZW5ndGgtMTswPD1iO2ItLSl7dmFyIGY9Y1tiXTtpZihzLmhhcyhmKSYmKGY9cy5nZXQoZikoYSkpKXJldHVybiBmfX1cbmZ1bmN0aW9uIHRhKGEsYyl7YS5mcm9tJiZhLnRvPyhiKGEuZnJvbS5lbGVtZW50KS5zZXRIb3N0KGMpLGIoYS50by5lbGVtZW50KS5zZXRIb3N0KGMpKTpiKGEuZWxlbWVudCkuc2V0SG9zdChjKX1mdW5jdGlvbiBnYSgpe3ZhciBhPWIodyk7IWF8fFwibGVhdmVcIj09PUImJnIuJCRkb21PcGVyYXRpb25GaXJlZHx8YS5lbmQoKX1mdW5jdGlvbiBtKGIpe3cub2ZmKFwiJGRlc3Ryb3lcIixnYSk7dy5yZW1vdmVEYXRhKFwiJCRhbmltYXRpb25SdW5uZXJcIik7RCh3LHIpO2NhKHcscik7ci5kb21PcGVyYXRpb24oKTtnJiZhLnJlbW92ZUNsYXNzKHcsZyk7dy5yZW1vdmVDbGFzcyhcIm5nLWFuaW1hdGVcIik7eC5jb21wbGV0ZSghYil9cj1pYShyKTt2YXIgTD0wPD1bXCJlbnRlclwiLFwibW92ZVwiLFwibGVhdmVcIl0uaW5kZXhPZihCKSx4PW5ldyBuKHtlbmQ6ZnVuY3Rpb24oKXttKCl9LGNhbmNlbDpmdW5jdGlvbigpe20oITApfX0pO2lmKCFjLmxlbmd0aClyZXR1cm4gbSgpLHg7dy5kYXRhKFwiJCRhbmltYXRpb25SdW5uZXJcIixcbngpO3ZhciBNPXZhKHcuYXR0cihcImNsYXNzXCIpLHZhKHIuYWRkQ2xhc3Msci5yZW1vdmVDbGFzcykpLGc9ci50ZW1wQ2xhc3NlcztnJiYoTSs9XCIgXCIrZyxyLnRlbXBDbGFzc2VzPW51bGwpO3ZhciBsO0x8fChsPUEsQSs9MSk7ay5wdXNoKHtlbGVtZW50OncsY2xhc3NlczpNLGV2ZW50OkIsY2xhc3NCYXNlZEluZGV4Omwsc3RydWN0dXJhbDpMLG9wdGlvbnM6cixiZWZvcmVTdGFydDpmdW5jdGlvbigpe3cuYWRkQ2xhc3MoXCJuZy1hbmltYXRlXCIpO2cmJmEuYWRkQ2xhc3ModyxnKX0sY2xvc2U6bX0pO3cub24oXCIkZGVzdHJveVwiLGdhKTtpZigxPGsubGVuZ3RoKXJldHVybiB4O2UuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7Wj1BO0E9MDtJLmxlbmd0aD0wO3ZhciBhPVtdO3UoayxmdW5jdGlvbihjKXtiKGMuZWxlbWVudCkmJmEucHVzaChjKX0pO2subGVuZ3RoPTA7dShDKGEpLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGMoKXthLmJlZm9yZVN0YXJ0KCk7dmFyIGQsZz1hLmNsb3NlLGU9YS5hbmNob3JzP1xuYS5mcm9tLmVsZW1lbnR8fGEudG8uZWxlbWVudDphLmVsZW1lbnQ7YihlKSYmeihlKS5wYXJlbnROb2RlJiYoZT1mKGEpKSYmKGQ9ZS5zdGFydCk7ZD8oZD1kKCksZC5kb25lKGZ1bmN0aW9uKGEpe2coIWEpfSksdGEoYSxkKSk6ZygpfWEuc3RydWN0dXJhbD9jKCk6KEkucHVzaCh7bm9kZTp6KGEuZWxlbWVudCksZm46Y30pLGEuY2xhc3NCYXNlZEluZGV4PT09Wi0xJiYoST1JLnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi5ub2RlLmNvbnRhaW5zKGEubm9kZSl9KS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuZm59KSxoKEkpKSl9KX0pO3JldHVybiB4fX1dfV0pLnByb3ZpZGVyKFwiJGFuaW1hdGVDc3NcIixbXCIkYW5pbWF0ZVByb3ZpZGVyXCIsZnVuY3Rpb24oYSl7dmFyIGI9QmEoKSxjPUJhKCk7dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixcIiQkanFMaXRlXCIsXCIkJEFuaW1hdGVSdW5uZXJcIixcIiR0aW1lb3V0XCIsXCIkZG9jdW1lbnRcIixcIiRzbmlmZmVyXCIsXCIkJHJBRlNjaGVkdWxlclwiLGZ1bmN0aW9uKGEsXG5lLHMsbixoLGssRCl7ZnVuY3Rpb24gQShhLGIpe3ZhciBjPWEucGFyZW50Tm9kZTtyZXR1cm4oYy4kJG5nQW5pbWF0ZVBhcmVudEtleXx8KGMuJCRuZ0FuaW1hdGVQYXJlbnRLZXk9KytyKSkrXCItXCIrYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKStcIi1cIitifWZ1bmN0aW9uIFooaCxmLEIsayl7dmFyIG07MDxiLmNvdW50KEIpJiYobT1jLmdldChCKSxtfHwoZj1iYShmLFwiLXN0YWdnZXJcIiksZS5hZGRDbGFzcyhoLGYpLG09emEoYSxoLGspLG0uYW5pbWF0aW9uRHVyYXRpb249TWF0aC5tYXgobS5hbmltYXRpb25EdXJhdGlvbiwwKSxtLnRyYW5zaXRpb25EdXJhdGlvbj1NYXRoLm1heChtLnRyYW5zaXRpb25EdXJhdGlvbiwwKSxlLnJlbW92ZUNsYXNzKGgsZiksYy5wdXQoQixtKSkpO3JldHVybiBtfHx7fX1mdW5jdGlvbiBJKGEpe0MucHVzaChhKTtELndhaXRVbnRpbFF1aWV0KGZ1bmN0aW9uKCl7Yi5mbHVzaCgpO2MuZmx1c2goKTtmb3IodmFyIGE9Sy5vZmZzZXRXaWR0aCsxLGQ9MDtkPFxuQy5sZW5ndGg7ZCsrKUNbZF0oYSk7Qy5sZW5ndGg9MH0pfWZ1bmN0aW9uIHcoYyxmLGUpe2Y9Yi5nZXQoZSk7Znx8KGY9emEoYSxjLE1hKSxcImluZmluaXRlXCI9PT1mLmFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50JiYoZi5hbmltYXRpb25JdGVyYXRpb25Db3VudD0xKSk7Yi5wdXQoZSxmKTtjPWY7ZT1jLmFuaW1hdGlvbkRlbGF5O2Y9Yy50cmFuc2l0aW9uRGVsYXk7Yy5tYXhEZWxheT1lJiZmP01hdGgubWF4KGUsZik6ZXx8ZjtjLm1heER1cmF0aW9uPU1hdGgubWF4KGMuYW5pbWF0aW9uRHVyYXRpb24qYy5hbmltYXRpb25JdGVyYXRpb25Db3VudCxjLnRyYW5zaXRpb25EdXJhdGlvbik7cmV0dXJuIGN9dmFyIEI9aGEoZSkscj0wLEs9eihoKS5ib2R5LEM9W107cmV0dXJuIGZ1bmN0aW9uKGEsYyl7ZnVuY3Rpb24gZCgpe20oKX1mdW5jdGlvbiBoKCl7bSghMCl9ZnVuY3Rpb24gbShiKXtpZighKEt8fEMmJkQpKXtLPSEwO0Q9ITE7ZS5yZW1vdmVDbGFzcyhhLFkpO2UucmVtb3ZlQ2xhc3MoYSxcblcpO21hKGcsITEpO2phKGcsITEpO3UobCxmdW5jdGlvbihhKXtnLnN0eWxlW2FbMF1dPVwiXCJ9KTtCKGEsYyk7Y2EoYSxjKTtpZihjLm9uRG9uZSljLm9uRG9uZSgpO3AmJnAuY29tcGxldGUoIWIpfX1mdW5jdGlvbiBMKGEpe3EuYmxvY2tUcmFuc2l0aW9uJiZqYShnLGEpO3EuYmxvY2tLZXlmcmFtZUFuaW1hdGlvbiYmbWEoZywhIWEpfWZ1bmN0aW9uIHgoKXtwPW5ldyBzKHtlbmQ6ZCxjYW5jZWw6aH0pO20oKTtyZXR1cm57JCR3aWxsQW5pbWF0ZTohMSxzdGFydDpmdW5jdGlvbigpe3JldHVybiBwfSxlbmQ6ZH19ZnVuY3Rpb24gTSgpe2Z1bmN0aW9uIGIoKXtpZighSyl7TCghMSk7dShsLGZ1bmN0aW9uKGEpe2cuc3R5bGVbYVswXV09YVsxXX0pO0IoYSxjKTtlLmFkZENsYXNzKGEsVyk7aWYocS5yZWNhbGN1bGF0ZVRpbWluZ1N0eWxlcyl7ZmE9Zy5jbGFzc05hbWUrXCIgXCIrWTskPUEoZyxmYSk7eT13KGcsZmEsJCk7UT15Lm1heERlbGF5O0g9TWF0aC5tYXgoUSwwKTtKPXkubWF4RHVyYXRpb247XG5pZigwPT09Sil7bSgpO3JldHVybn1xLmhhc1RyYW5zaXRpb25zPTA8eS50cmFuc2l0aW9uRHVyYXRpb247cS5oYXNBbmltYXRpb25zPTA8eS5hbmltYXRpb25EdXJhdGlvbn1pZihxLmFwcGx5VHJhbnNpdGlvbkRlbGF5fHxxLmFwcGx5QW5pbWF0aW9uRGVsYXkpe1E9XCJib29sZWFuXCIhPT10eXBlb2YgYy5kZWxheSYmbGEoYy5kZWxheSk/cGFyc2VGbG9hdChjLmRlbGF5KTpRO0g9TWF0aC5tYXgoUSwwKTt2YXIgaztxLmFwcGx5VHJhbnNpdGlvbkRlbGF5JiYoeS50cmFuc2l0aW9uRGVsYXk9USxrPVtlYSxRK1wic1wiXSxsLnB1c2goayksZy5zdHlsZVtrWzBdXT1rWzFdKTtxLmFwcGx5QW5pbWF0aW9uRGVsYXkmJih5LmFuaW1hdGlvbkRlbGF5PVEsaz1bcmEsUStcInNcIl0sbC5wdXNoKGspLGcuc3R5bGVba1swXV09a1sxXSl9Rj0xRTMqSDtHPTFFMypKO2lmKGMuZWFzaW5nKXt2YXIgcj1jLmVhc2luZztxLmhhc1RyYW5zaXRpb25zJiYoaz1PK1wiVGltaW5nRnVuY3Rpb25cIixsLnB1c2goW2ssXG5yXSksZy5zdHlsZVtrXT1yKTtxLmhhc0FuaW1hdGlvbnMmJihrPVYrXCJUaW1pbmdGdW5jdGlvblwiLGwucHVzaChbayxyXSksZy5zdHlsZVtrXT1yKX15LnRyYW5zaXRpb25EdXJhdGlvbiYmcC5wdXNoKHBhKTt5LmFuaW1hdGlvbkR1cmF0aW9uJiZwLnB1c2gocWEpO3g9RGF0ZS5ub3coKTthLm9uKHAuam9pbihcIiBcIiksaCk7bihkLEYrMS41KkcpO3hhKGEsYyl9fWZ1bmN0aW9uIGQoKXttKCl9ZnVuY3Rpb24gaChhKXthLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBiPWEub3JpZ2luYWxFdmVudHx8YTthPWIuJG1hbnVhbFRpbWVTdGFtcHx8Yi50aW1lU3RhbXB8fERhdGUubm93KCk7Yj1wYXJzZUZsb2F0KGIuZWxhcHNlZFRpbWUudG9GaXhlZCgzKSk7TWF0aC5tYXgoYS14LDApPj1GJiZiPj1KJiYoQz0hMCxtKCkpfWlmKCFLKWlmKGcucGFyZW50Tm9kZSl7dmFyIHgscD1bXSxrPWZ1bmN0aW9uKGEpe2lmKEMpRCYmYSYmKEQ9ITEsbSgpKTtlbHNlIGlmKEQ9IWEseS5hbmltYXRpb25EdXJhdGlvbilpZihhPVxubWEoZyxEKSxEKWwucHVzaChhKTtlbHNle3ZhciBiPWwsYz1iLmluZGV4T2YoYSk7MDw9YSYmYi5zcGxpY2UoYywxKX19LHI9MDxVJiYoeS50cmFuc2l0aW9uRHVyYXRpb24mJjA9PT1ULnRyYW5zaXRpb25EdXJhdGlvbnx8eS5hbmltYXRpb25EdXJhdGlvbiYmMD09PVQuYW5pbWF0aW9uRHVyYXRpb24pJiZNYXRoLm1heChULmFuaW1hdGlvbkRlbGF5LFQudHJhbnNpdGlvbkRlbGF5KTtyP24oYixNYXRoLmZsb29yKHIqVSoxRTMpLCExKTpiKCk7dC5yZXN1bWU9ZnVuY3Rpb24oKXtrKCEwKX07dC5wYXVzZT1mdW5jdGlvbigpe2soITEpfX1lbHNlIG0oKX12YXIgZz16KGEpO2lmKCFnfHwhZy5wYXJlbnROb2RlKXJldHVybiB4KCk7Yz1pYShjKTt2YXIgbD1bXSxyPWEuYXR0cihcImNsYXNzXCIpLHY9RWEoYyksSyxELEMscCx0LEgsRixKLEc7aWYoMD09PWMuZHVyYXRpb258fCFrLmFuaW1hdGlvbnMmJiFrLnRyYW5zaXRpb25zKXJldHVybiB4KCk7dmFyIGFhPWMuZXZlbnQmJlgoYy5ldmVudCk/XG5jLmV2ZW50LmpvaW4oXCIgXCIpOmMuZXZlbnQsUj1cIlwiLE49XCJcIjthYSYmYy5zdHJ1Y3R1cmFsP1I9YmEoYWEsXCJuZy1cIiwhMCk6YWEmJihSPWFhKTtjLmFkZENsYXNzJiYoTis9YmEoYy5hZGRDbGFzcyxcIi1hZGRcIikpO2MucmVtb3ZlQ2xhc3MmJihOLmxlbmd0aCYmKE4rPVwiIFwiKSxOKz1iYShjLnJlbW92ZUNsYXNzLFwiLXJlbW92ZVwiKSk7Yy5hcHBseUNsYXNzZXNFYXJseSYmTi5sZW5ndGgmJihCKGEsYyksTj1cIlwiKTt2YXIgWT1bUixOXS5qb2luKFwiIFwiKS50cmltKCksZmE9citcIiBcIitZLFc9YmEoWSxcIi1hY3RpdmVcIikscj12LnRvJiYwPE9iamVjdC5rZXlzKHYudG8pLmxlbmd0aDtpZighKDA8KGMua2V5ZnJhbWVTdHlsZXx8XCJcIikubGVuZ3RofHxyfHxZKSlyZXR1cm4geCgpO3ZhciAkLFQ7MDxjLnN0YWdnZXI/KHY9cGFyc2VGbG9hdChjLnN0YWdnZXIpLFQ9e3RyYW5zaXRpb25EZWxheTp2LGFuaW1hdGlvbkRlbGF5OnYsdHJhbnNpdGlvbkR1cmF0aW9uOjAsYW5pbWF0aW9uRHVyYXRpb246MH0pOlxuKCQ9QShnLGZhKSxUPVooZyxZLCQsTmEpKTtlLmFkZENsYXNzKGEsWSk7Yy50cmFuc2l0aW9uU3R5bGUmJih2PVtPLGMudHJhbnNpdGlvblN0eWxlXSxkYShnLHYpLGwucHVzaCh2KSk7MDw9Yy5kdXJhdGlvbiYmKHY9MDxnLnN0eWxlW09dLmxlbmd0aCx2PUFhKGMuZHVyYXRpb24sdiksZGEoZyx2KSxsLnB1c2godikpO2Mua2V5ZnJhbWVTdHlsZSYmKHY9W1YsYy5rZXlmcmFtZVN0eWxlXSxkYShnLHYpLGwucHVzaCh2KSk7dmFyIFU9VD8wPD1jLnN0YWdnZXJJbmRleD9jLnN0YWdnZXJJbmRleDpiLmNvdW50KCQpOjA7KGFhPTA9PT1VKSYmamEoZyw5OTk5KTt2YXIgeT13KGcsZmEsJCksUT15Lm1heERlbGF5O0g9TWF0aC5tYXgoUSwwKTtKPXkubWF4RHVyYXRpb247dmFyIHE9e307cS5oYXNUcmFuc2l0aW9ucz0wPHkudHJhbnNpdGlvbkR1cmF0aW9uO3EuaGFzQW5pbWF0aW9ucz0wPHkuYW5pbWF0aW9uRHVyYXRpb247cS5oYXNUcmFuc2l0aW9uQWxsPXEuaGFzVHJhbnNpdGlvbnMmJlxuXCJhbGxcIj09eS50cmFuc2l0aW9uUHJvcGVydHk7cS5hcHBseVRyYW5zaXRpb25EdXJhdGlvbj1yJiYocS5oYXNUcmFuc2l0aW9ucyYmIXEuaGFzVHJhbnNpdGlvbkFsbHx8cS5oYXNBbmltYXRpb25zJiYhcS5oYXNUcmFuc2l0aW9ucyk7cS5hcHBseUFuaW1hdGlvbkR1cmF0aW9uPWMuZHVyYXRpb24mJnEuaGFzQW5pbWF0aW9ucztxLmFwcGx5VHJhbnNpdGlvbkRlbGF5PWxhKGMuZGVsYXkpJiYocS5hcHBseVRyYW5zaXRpb25EdXJhdGlvbnx8cS5oYXNUcmFuc2l0aW9ucyk7cS5hcHBseUFuaW1hdGlvbkRlbGF5PWxhKGMuZGVsYXkpJiZxLmhhc0FuaW1hdGlvbnM7cS5yZWNhbGN1bGF0ZVRpbWluZ1N0eWxlcz0wPE4ubGVuZ3RoO2lmKHEuYXBwbHlUcmFuc2l0aW9uRHVyYXRpb258fHEuYXBwbHlBbmltYXRpb25EdXJhdGlvbilKPWMuZHVyYXRpb24/cGFyc2VGbG9hdChjLmR1cmF0aW9uKTpKLHEuYXBwbHlUcmFuc2l0aW9uRHVyYXRpb24mJihxLmhhc1RyYW5zaXRpb25zPSEwLHkudHJhbnNpdGlvbkR1cmF0aW9uPVxuSix2PTA8Zy5zdHlsZVtPK1wiUHJvcGVydHlcIl0ubGVuZ3RoLGwucHVzaChBYShKLHYpKSkscS5hcHBseUFuaW1hdGlvbkR1cmF0aW9uJiYocS5oYXNBbmltYXRpb25zPSEwLHkuYW5pbWF0aW9uRHVyYXRpb249SixsLnB1c2goW3NhLEorXCJzXCJdKSk7aWYoMD09PUomJiFxLnJlY2FsY3VsYXRlVGltaW5nU3R5bGVzKXJldHVybiB4KCk7bnVsbD09Yy5kdXJhdGlvbiYmMDx5LnRyYW5zaXRpb25EdXJhdGlvbiYmKHEucmVjYWxjdWxhdGVUaW1pbmdTdHlsZXM9cS5yZWNhbGN1bGF0ZVRpbWluZ1N0eWxlc3x8YWEpO0Y9MUUzKkg7Rz0xRTMqSjtjLnNraXBCbG9ja2luZ3x8KHEuYmxvY2tUcmFuc2l0aW9uPTA8eS50cmFuc2l0aW9uRHVyYXRpb24scS5ibG9ja0tleWZyYW1lQW5pbWF0aW9uPTA8eS5hbmltYXRpb25EdXJhdGlvbiYmMDxULmFuaW1hdGlvbkRlbGF5JiYwPT09VC5hbmltYXRpb25EdXJhdGlvbik7d2EoYSxjKTtxLmJsb2NrVHJhbnNpdGlvbnx8amEoZywhMSk7TChKKTtyZXR1cm57JCR3aWxsQW5pbWF0ZTohMCxcbmVuZDpkLHN0YXJ0OmZ1bmN0aW9uKCl7aWYoIUspcmV0dXJuIHQ9e2VuZDpkLGNhbmNlbDpoLHJlc3VtZTpudWxsLHBhdXNlOm51bGx9LHA9bmV3IHModCksSShNKSxwfX19fV19XSkucHJvdmlkZXIoXCIkJGFuaW1hdGVDc3NEcml2ZXJcIixbXCIkJGFuaW1hdGlvblByb3ZpZGVyXCIsZnVuY3Rpb24oYSl7YS5kcml2ZXJzLnB1c2goXCIkJGFuaW1hdGVDc3NEcml2ZXJcIik7dGhpcy4kZ2V0PVtcIiRhbmltYXRlQ3NzXCIsXCIkcm9vdFNjb3BlXCIsXCIkJEFuaW1hdGVSdW5uZXJcIixcIiRyb290RWxlbWVudFwiLFwiJGRvY3VtZW50XCIsXCIkc25pZmZlclwiLGZ1bmN0aW9uKGEsYyxkLGUscyxuKXtmdW5jdGlvbiBoKGEpe3JldHVybiBhLnJlcGxhY2UoL1xcYm5nLVxcUytcXGIvZyxcIlwiKX1mdW5jdGlvbiBrKGEsYil7VShhKSYmKGE9YS5zcGxpdChcIiBcIikpO1UoYikmJihiPWIuc3BsaXQoXCIgXCIpKTtyZXR1cm4gYS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuLTE9PT1iLmluZGV4T2YoYSl9KS5qb2luKFwiIFwiKX1mdW5jdGlvbiBEKGMsXG5lLEEpe2Z1bmN0aW9uIEQoYSl7dmFyIGI9e30sYz16KGEpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3UoW1wid2lkdGhcIixcImhlaWdodFwiLFwidG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGEpe3ZhciBkPWNbYV07c3dpdGNoKGEpe2Nhc2UgXCJ0b3BcIjpkKz1JLnNjcm9sbFRvcDticmVhaztjYXNlIFwibGVmdFwiOmQrPUkuc2Nyb2xsTGVmdH1iW2FdPU1hdGguZmxvb3IoZCkrXCJweFwifSk7cmV0dXJuIGJ9ZnVuY3Rpb24gcygpe3ZhciBjPWgoQS5hdHRyKFwiY2xhc3NcIil8fFwiXCIpLGQ9ayhjLHQpLGM9ayh0LGMpLGQ9YShuLHt0bzpEKEEpLGFkZENsYXNzOlwibmctYW5jaG9yLWluIFwiK2QscmVtb3ZlQ2xhc3M6XCJuZy1hbmNob3Itb3V0IFwiK2MsZGVsYXk6ITB9KTtyZXR1cm4gZC4kJHdpbGxBbmltYXRlP2Q6bnVsbH1mdW5jdGlvbiBmKCl7bi5yZW1vdmUoKTtlLnJlbW92ZUNsYXNzKFwibmctYW5pbWF0ZS1zaGltXCIpO0EucmVtb3ZlQ2xhc3MoXCJuZy1hbmltYXRlLXNoaW1cIil9dmFyIG49Ryh6KGUpLmNsb25lTm9kZSghMCkpLFxudD1oKG4uYXR0cihcImNsYXNzXCIpfHxcIlwiKTtlLmFkZENsYXNzKFwibmctYW5pbWF0ZS1zaGltXCIpO0EuYWRkQ2xhc3MoXCJuZy1hbmltYXRlLXNoaW1cIik7bi5hZGRDbGFzcyhcIm5nLWFuY2hvclwiKTt3LmFwcGVuZChuKTt2YXIgbTtjPWZ1bmN0aW9uKCl7dmFyIGM9YShuLHthZGRDbGFzczpcIm5nLWFuY2hvci1vdXRcIixkZWxheTohMCxmcm9tOkQoZSl9KTtyZXR1cm4gYy4kJHdpbGxBbmltYXRlP2M6bnVsbH0oKTtpZighYyYmKG09cygpLCFtKSlyZXR1cm4gZigpO3ZhciBMPWN8fG07cmV0dXJue3N0YXJ0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe2MmJmMuZW5kKCl9dmFyIGIsYz1MLnN0YXJ0KCk7Yy5kb25lKGZ1bmN0aW9uKCl7Yz1udWxsO2lmKCFtJiYobT1zKCkpKXJldHVybiBjPW0uc3RhcnQoKSxjLmRvbmUoZnVuY3Rpb24oKXtjPW51bGw7ZigpO2IuY29tcGxldGUoKX0pLGM7ZigpO2IuY29tcGxldGUoKX0pO3JldHVybiBiPW5ldyBkKHtlbmQ6YSxjYW5jZWw6YX0pfX19ZnVuY3Rpb24gQShhLFxuYixjLGUpe3ZhciBoPXQoYSksZj10KGIpLGs9W107dShlLGZ1bmN0aW9uKGEpeyhhPUQoYyxhLm91dCxhW1wiaW5cIl0pKSYmay5wdXNoKGEpfSk7aWYoaHx8Znx8MCE9PWsubGVuZ3RoKXJldHVybntzdGFydDpmdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXt1KGIsZnVuY3Rpb24oYSl7YS5lbmQoKX0pfXZhciBiPVtdO2gmJmIucHVzaChoLnN0YXJ0KCkpO2YmJmIucHVzaChmLnN0YXJ0KCkpO3UoayxmdW5jdGlvbihhKXtiLnB1c2goYS5zdGFydCgpKX0pO3ZhciBjPW5ldyBkKHtlbmQ6YSxjYW5jZWw6YX0pO2QuYWxsKGIsZnVuY3Rpb24oYSl7Yy5jb21wbGV0ZShhKX0pO3JldHVybiBjfX19ZnVuY3Rpb24gdChjKXt2YXIgZD1jLmVsZW1lbnQsZT1jLm9wdGlvbnN8fHt9O2Muc3RydWN0dXJhbD8oZS5zdHJ1Y3R1cmFsPWUuYXBwbHlDbGFzc2VzRWFybHk9ITAsZS5ldmVudD1jLmV2ZW50LFwibGVhdmVcIj09PWUuZXZlbnQmJihlLm9uRG9uZT1lLmRvbU9wZXJhdGlvbikpOmUuZXZlbnQ9bnVsbDtcbmM9YShkLGUpO3JldHVybiBjLiQkd2lsbEFuaW1hdGU/YzpudWxsfWlmKCFuLmFuaW1hdGlvbnMmJiFuLnRyYW5zaXRpb25zKXJldHVybiBIO3ZhciBJPXoocykuYm9keTtjPXooZSk7dmFyIHc9RyhJLnBhcmVudE5vZGU9PT1jP0k6Yyk7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBhLmZyb20mJmEudG8/QShhLmZyb20sYS50byxhLmNsYXNzZXMsYS5hbmNob3JzKTp0KGEpfX1dfV0pLnByb3ZpZGVyKFwiJCRhbmltYXRlSnNcIixbXCIkYW5pbWF0ZVByb3ZpZGVyXCIsZnVuY3Rpb24oYSl7dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLFwiJCRBbmltYXRlUnVubmVyXCIsXCIkJHJBRk11dGV4XCIsXCIkJGpxTGl0ZVwiLGZ1bmN0aW9uKGIsYyxkLGUpe2Z1bmN0aW9uIHMoYyl7Yz1YKGMpP2M6Yy5zcGxpdChcIiBcIik7Zm9yKHZhciBkPVtdLGU9e30sQT0wO0E8Yy5sZW5ndGg7QSsrKXt2YXIgbj1jW0FdLHM9YS4kJHJlZ2lzdGVyZWRBbmltYXRpb25zW25dO3MmJiFlW25dJiYoZC5wdXNoKGIuZ2V0KHMpKSxlW25dPVxuITApfXJldHVybiBkfXZhciBuPWhhKGUpO3JldHVybiBmdW5jdGlvbihhLGIsZCxlKXtmdW5jdGlvbiB0KCl7ZS5kb21PcGVyYXRpb24oKTtuKGEsZSl9ZnVuY3Rpb24geihhLGIsZCxlLGcpe3N3aXRjaChkKXtjYXNlIFwiYW5pbWF0ZVwiOmI9W2IsZS5mcm9tLGUudG8sZ107YnJlYWs7Y2FzZSBcInNldENsYXNzXCI6Yj1bYixyLEssZ107YnJlYWs7Y2FzZSBcImFkZENsYXNzXCI6Yj1bYixyLGddO2JyZWFrO2Nhc2UgXCJyZW1vdmVDbGFzc1wiOmI9W2IsSyxnXTticmVhaztkZWZhdWx0OmI9W2IsZ119Yi5wdXNoKGUpO2lmKGE9YS5hcHBseShhLGIpKWlmKENhKGEuc3RhcnQpJiYoYT1hLnN0YXJ0KCkpLGEgaW5zdGFuY2VvZiBjKWEuZG9uZShnKTtlbHNlIGlmKENhKGEpKXJldHVybiBhO3JldHVybiBIfWZ1bmN0aW9uIHcoYSxiLGQsZSxnKXt2YXIgZj1bXTt1KGUsZnVuY3Rpb24oZSl7dmFyIGg9ZVtnXTtoJiZmLnB1c2goZnVuY3Rpb24oKXt2YXIgZSxnLGY9ITEsbD1mdW5jdGlvbihhKXtmfHxcbihmPSEwLChnfHxIKShhKSxlLmNvbXBsZXRlKCFhKSl9O2U9bmV3IGMoe2VuZDpmdW5jdGlvbigpe2woKX0sY2FuY2VsOmZ1bmN0aW9uKCl7bCghMCl9fSk7Zz16KGgsYSxiLGQsZnVuY3Rpb24oYSl7bCghMT09PWEpfSk7cmV0dXJuIGV9KX0pO3JldHVybiBmfWZ1bmN0aW9uIEIoYSxiLGQsZSxnKXt2YXIgZj13KGEsYixkLGUsZyk7aWYoMD09PWYubGVuZ3RoKXt2YXIgaCxrO1wiYmVmb3JlU2V0Q2xhc3NcIj09PWc/KGg9dyhhLFwicmVtb3ZlQ2xhc3NcIixkLGUsXCJiZWZvcmVSZW1vdmVDbGFzc1wiKSxrPXcoYSxcImFkZENsYXNzXCIsZCxlLFwiYmVmb3JlQWRkQ2xhc3NcIikpOlwic2V0Q2xhc3NcIj09PWcmJihoPXcoYSxcInJlbW92ZUNsYXNzXCIsZCxlLFwicmVtb3ZlQ2xhc3NcIiksaz13KGEsXCJhZGRDbGFzc1wiLGQsZSxcImFkZENsYXNzXCIpKTtoJiYoZj1mLmNvbmNhdChoKSk7ayYmKGY9Zi5jb25jYXQoaykpfWlmKDAhPT1mLmxlbmd0aClyZXR1cm4gZnVuY3Rpb24oYSl7dmFyIGI9W107Zi5sZW5ndGgmJlxudShmLGZ1bmN0aW9uKGEpe2IucHVzaChhKCkpfSk7Yi5sZW5ndGg/Yy5hbGwoYixhKTphKCk7cmV0dXJuIGZ1bmN0aW9uKGEpe3UoYixmdW5jdGlvbihiKXthP2IuY2FuY2VsKCk6Yi5lbmQoKX0pfX19Mz09PWFyZ3VtZW50cy5sZW5ndGgmJm5hKGQpJiYoZT1kLGQ9bnVsbCk7ZT1pYShlKTtkfHwoZD1hLmF0dHIoXCJjbGFzc1wiKXx8XCJcIixlLmFkZENsYXNzJiYoZCs9XCIgXCIrZS5hZGRDbGFzcyksZS5yZW1vdmVDbGFzcyYmKGQrPVwiIFwiK2UucmVtb3ZlQ2xhc3MpKTt2YXIgcj1lLmFkZENsYXNzLEs9ZS5yZW1vdmVDbGFzcyxDPXMoZCksRSxmO2lmKEMubGVuZ3RoKXt2YXIgRixHO1wibGVhdmVcIj09Yj8oRz1cImxlYXZlXCIsRj1cImFmdGVyTGVhdmVcIik6KEc9XCJiZWZvcmVcIitiLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Iuc3Vic3RyKDEpLEY9Yik7XCJlbnRlclwiIT09YiYmXCJtb3ZlXCIhPT1iJiYoRT1CKGEsYixlLEMsRykpO2Y9QihhLGIsZSxDLEYpfWlmKEV8fGYpcmV0dXJue3N0YXJ0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihjKXtuPVxuITA7dCgpO2NhKGEsZSk7Zy5jb21wbGV0ZShjKX12YXIgZCxrPVtdO0UmJmsucHVzaChmdW5jdGlvbihhKXtkPUUoYSl9KTtrLmxlbmd0aD9rLnB1c2goZnVuY3Rpb24oYSl7dCgpO2EoITApfSk6dCgpO2YmJmsucHVzaChmdW5jdGlvbihhKXtkPWYoYSl9KTt2YXIgbj0hMSxnPW5ldyBjKHtlbmQ6ZnVuY3Rpb24oKXtufHwoKGR8fEgpKHZvaWQgMCksYih2b2lkIDApKX0sY2FuY2VsOmZ1bmN0aW9uKCl7bnx8KChkfHxIKSghMCksYighMCkpfX0pO2MuY2hhaW4oayxiKTtyZXR1cm4gZ319fX1dfV0pLnByb3ZpZGVyKFwiJCRhbmltYXRlSnNEcml2ZXJcIixbXCIkJGFuaW1hdGlvblByb3ZpZGVyXCIsZnVuY3Rpb24oYSl7YS5kcml2ZXJzLnB1c2goXCIkJGFuaW1hdGVKc0RyaXZlclwiKTt0aGlzLiRnZXQ9W1wiJCRhbmltYXRlSnNcIixcIiQkQW5pbWF0ZVJ1bm5lclwiLGZ1bmN0aW9uKGEsYyl7ZnVuY3Rpb24gZChjKXtyZXR1cm4gYShjLmVsZW1lbnQsYy5ldmVudCxjLmNsYXNzZXMsYy5vcHRpb25zKX1cbnJldHVybiBmdW5jdGlvbihhKXtpZihhLmZyb20mJmEudG8pe3ZhciBiPWQoYS5mcm9tKSxuPWQoYS50byk7aWYoYnx8bilyZXR1cm57c3RhcnQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7cmV0dXJuIGZ1bmN0aW9uKCl7dShkLGZ1bmN0aW9uKGEpe2EuZW5kKCl9KX19dmFyIGQ9W107YiYmZC5wdXNoKGIuc3RhcnQoKSk7biYmZC5wdXNoKG4uc3RhcnQoKSk7Yy5hbGwoZCxmdW5jdGlvbihhKXtlLmNvbXBsZXRlKGEpfSk7dmFyIGU9bmV3IGMoe2VuZDphKCksY2FuY2VsOmEoKX0pO3JldHVybiBlfX19ZWxzZSByZXR1cm4gZChhKX19XX1dKX0pKHdpbmRvdyx3aW5kb3cuYW5ndWxhcik7XG5cbiIsIihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdhQ2Fyb3VzZWwnLCBbXSlcbiAgICAgICAgLmRpcmVjdGl2ZSgnYUNhcm91c2VsJywgYWR2YW5jZWRDYXJvdXNlbCk7XG5cbiAgICBhZHZhbmNlZENhcm91c2VsLiRpbmplY3QgPSBbJyRjb21waWxlJywgJyR0aW1lb3V0JywgJyRpb25pY1Njcm9sbERlbGVnYXRlJ107XG4gICAgZnVuY3Rpb24gYWR2YW5jZWRDYXJvdXNlbCgkY29tcGlsZSwgJHRpbWVvdXQsICRpb25pY1Njcm9sbERlbGVnYXRlKSB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0ICAgICAgICA6ICdFJyxcbiAgICAgICAgICAgIHJlcGxhY2UgICAgICAgICA6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZSAgICAgICAgOiAnJyxcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgICA6IHt9LFxuICAgICAgICAgICAgbGluayAgICAgICAgICAgIDogbGlua0Z1bmMsXG4gICAgICAgICAgICBjb250cm9sbGVyICAgICAgOiBDb250cm9sbGVyLFxuICAgICAgICAgICAgY29udHJvbGxlckFzICAgIDogJ3ZtJyxcbiAgICAgICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHtcbiAgICAgICAgICAgICAgICBpdGVtRGlyZWN0aXZlICA6ICdAJyxcbiAgICAgICAgICAgICAgICBjYXJvdXNlbE9wdGlvbnM6ICc9JyxcbiAgICAgICAgICAgICAgICBhcnJheVByb3ZpZGVyICA6ICc9JyxcbiAgICAgICAgICAgICAgICBvblNlbGVjdCAgICAgICA6ICcmJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vLy8vLy8vL1xuXG4gICAgICAgIGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgY3RybCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3RybCk7XG5cbiAgICAgICAgICAgIGN0cmwuZWwgPSBlbDtcblxuICAgICAgICAgICAgY3RybC5vcHRpb25zLnRyYWNrQnkgICAgPSB0eXBlb2YgYXR0ci50cmFja0J5ICE9PSAndW5kZWZpbmVkJyA/IGF0dHIudHJhY2tCeSA6ICckaW5kZXgnO1xuICAgICAgICAgICAgY3RybC5vcHRpb25zLnRyYWNrQnlzdHIgPSBjdHJsLm9wdGlvbnMudHJhY2tCeSA9PT0gJyRpbmRleCcgPyAnJGluZGV4JyA6ICdpdGVtLicgKyBjdHJsLm9wdGlvbnMudHJhY2tCeTtcblxuICAgICAgICAgICAgdmFyIGFuaW1hdGVJbiA9IGN0cmwub3B0aW9ucy5hbmltYXRlSW4gPyAnIGFuaW1hdGVJbicgOiAnJztcblxuICAgICAgICAgICAgLy8gRHluYW1pYyBkaXJlY3RpdmUgaHRtbFxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cImEtY2Fyb3VzZWxcIj4nO1xuXG4gICAgICAgICAgICBpZiAoY3RybC5vcHRpb25zLnB1bGxSZWZyZXNoLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJzcGlubmVyLXdyYXBwZXJcIiBuZy1pZj1cInZtLm9wdGlvbnMucHVsbFJlZnJlc2gubG9hZGluZ1wiPjxpb24tc3Bpbm5lciBpY29uPVwiYW5kcm9pZFwiPjwvaW9uLXNwaW5uZXI+PC9kaXY+JztcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8c3BhbiBjbGFzcz1cInB1bGxyZWZyZXNoLWluZGljYXRvclwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPHN2ZyB2aWV3Qm94PVwiMCAwIDY0IDY0XCI+PGc+JyArXG4gICAgICAgICAgICAgICAgICAgICc8Y2lyY2xlIHN0cm9rZS13aWR0aD1cIjZcIiBzdHJva2UtZGFzaGFycmF5PVwiMTM1LjI2MjYxMjM5MTQ0Mjg3XCIgc3Ryb2tlLWRhc2hvZmZzZXQ9XCIxNi41MTM3MTQ3NDU1NjIxNFwiICcgK1xuICAgICAgICAgICAgICAgICAgICAncj1cIjI2XCIgY3g9XCIzMlwiIGN5PVwiMzJcIiBmaWxsPVwibm9uZVwiIHRyYW5zZm9ybT1cInNjYWxlKDEsMSkgdHJhbnNsYXRlKDAsMCkgcm90YXRlKDAsMzIsMzIpXCI+PC9jaXJjbGU+PC9nPicgK1xuICAgICAgICAgICAgICAgICAgICAnPC9zdmc+JyArXG4gICAgICAgICAgICAgICAgICAgICc8L3NwYW4+JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaHRtbCArPSAnPGlvbi1zY3JvbGwgJztcblxuICAgICAgICAgICAgaWYgKGN0cmwub3B0aW9ucy5wdWxsUmVmcmVzaC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBodG1sICs9ICdvbi1zY3JvbGw9XCJ2bS5vblNjcm9sbCgpXCIgJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaHRtbCArPSAnc2Nyb2xsYmFyLXg9XCJmYWxzZVwiIGRlbGVnYXRlLWhhbmRsZT1cIicgKyBjdHJsLm9wdGlvbnMuY2Fyb3VzZWxJZCArICdcIiAnICtcbiAgICAgICAgICAgICAgICAnem9vbWluZz1cImZhbHNlXCIgZGlyZWN0aW9uPVwieFwiIG92ZXJmbG93LXNjcm9sbD1cImZhbHNlXCIgaGFzLWJvdW5jaW5nPVwidHJ1ZVwiPicgK1xuICAgICAgICAgICAgICAgICc8bmF2IHN0eWxlPVwidmlzaWJpbGl0eTpoaWRkZW47XCI+JyArXG4gICAgICAgICAgICAgICAgJzx1bD4gPGxpICcgK1xuICAgICAgICAgICAgICAgICduZy1yZXBlYXQ9XCJpdGVtIGluIHZtLmFycmF5UHJvdmlkZXIgdHJhY2sgYnkgJyArXG4gICAgICAgICAgICAgICAgY3RybC5vcHRpb25zLnRyYWNrQnlzdHIgKyAnXCInICtcbiAgICAgICAgICAgICAgICAnY2xhc3M9XCJjYXJvdXNlbC1pdGVtJyArIGFuaW1hdGVJbiArICdcIicgK1xuICAgICAgICAgICAgICAgICduZy1jbGFzcz1cIntcXCdhY3RpdmVcXCc6dm0uaXRlbUFjdGl2ZSA9PT0gaXRlbX1cIj4nICtcbiAgICAgICAgICAgICAgICBjcmVhdGVJdGVtRGlyZWN0aXZlKCkgK1xuICAgICAgICAgICAgICAgICc8L2xpPicgK1xuICAgICAgICAgICAgICAgICc8L3VsPjwvbmF2PjwvaW9uLXNjcm9sbD48L2Rpdj4nO1xuXG4gICAgICAgICAgICAvLyBDb21waWxlIGR5bmFtaWMgdGVtcGxhdGVcbiAgICAgICAgICAgIGh0bWwgPSAkY29tcGlsZShodG1sKShzY29wZSk7XG4gICAgICAgICAgICBlbC5hcHBlbmQoaHRtbCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhodG1sKVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAkdGltZW91dCBzbyBuZy1yZXBlYXQgaXMgZmluaXNoZWQgaW4gb3JkZXIgdG8gY2FsY3VsYXRlIHdpZHRoIG9mIGNhcm91c2VsXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3RybC5hcnJheVByb3ZpZGVyICYmIGN0cmwuYXJyYXlQcm92aWRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0cmwuaW5pdENhcm91c2VsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFsbG93VmVydGljYWxTY3JvbGwoKTtcbiAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVJdGVtRGlyZWN0aXZlKCkge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IGN0cmwub3B0aW9ucy50ZW1wbGF0ZSAhPT0gbnVsbCA/ICd0ZW1wbGF0ZT1cIicgKyBjdHJsLm9wdGlvbnMudGVtcGxhdGUgKyAnXCInIDogJyc7XG4gICAgICAgICAgICAgICAgY3RybC5pdGVtRGlyZWN0aXZlID0gdHlwZW9mIGN0cmwuaXRlbURpcmVjdGl2ZSA9PT0gJ3VuZGVmaW5lZCcgPyAnY2Fyb3VzZWwtZ2VuZXJpYy1pdGVtJyA6IGN0cmwuaXRlbURpcmVjdGl2ZTtcbiAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aXZlID0gJzwnICsgY3RybC5pdGVtRGlyZWN0aXZlICsgJyBuZy1tb2RlbD1cIml0ZW1cIiAnICsgdGVtcGxhdGUgK1xuICAgICAgICAgICAgICAgICAgICAnb24tc2VsZWN0PVwidm0uc2VsZWN0SXRlbShpdGVtKVwiIGNhcm91c2VsLW9wdGlvbnM9XCJtZW51Q2Fyb3VzZWwub3B0aW9uc1wiICc7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlICs9ICc+PC8nICsgY3RybC5pdGVtRGlyZWN0aXZlICsgJz4nO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNyZWF0ZUl0ZW1EaXJlY3RpdmUoKSlcblxuXG4gICAgICAgICAgICAvLyB0aGlzIG1ldGhvZCBhbGxvd3MgdG8gc2Nyb2xsIHRoZSBwYWdlIGJlbG93IHRoZSBjYXJvdXNlbFxuICAgICAgICAgICAgZnVuY3Rpb24gYWxsb3dWZXJ0aWNhbFNjcm9sbCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3YgICAgICAgID0gJGlvbmljU2Nyb2xsRGVsZWdhdGUuJGdldEJ5SGFuZGxlKGN0cmwub3B0aW9ucy5jYXJvdXNlbElkKS5nZXRTY3JvbGxWaWV3KCk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHN2Ll9fY29udGFpbmVyO1xuXG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsdG91Y2hTdGFydCA9IHN2LnRvdWNoU3RhcnQ7XG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsdG91Y2hNb3ZlICA9IHN2LnRvdWNoTW92ZTtcblxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc3YudG91Y2hTdGFydCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgc3YudG91Y2hNb3ZlKTtcblxuICAgICAgICAgICAgICAgIHN2LnRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbHRvdWNoU3RhcnQuYXBwbHkoc3YsIFtlXSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHN2LnRvdWNoTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsdG91Y2hNb3ZlLmFwcGx5KHN2LCBbZV0pO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHN2LnRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBzdi50b3VjaE1vdmUsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyR0aW1lb3V0JywgJyR3aW5kb3cnLCAnJGlvbmljU2Nyb2xsRGVsZWdhdGUnXTtcbiAgICBmdW5jdGlvbiBDb250cm9sbGVyKCRzY29wZSwgJGVsZW1lbnQsICR0aW1lb3V0LCAkd2luZG93LCAkaW9uaWNTY3JvbGxEZWxlZ2F0ZSkge1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgdm0ub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHNob3dTY3JvbGwgICAgOiBmYWxzZSxcbiAgICAgICAgICAgIGNhcm91c2VsSWQgICAgOiAnbXktY2Fyb3VzZWwnLFxuICAgICAgICAgICAgdGVtcGxhdGUgICAgICA6IG51bGwsXG4gICAgICAgICAgICBhbGlnbiAgICAgICAgIDogJ2xlZnQnLFxuICAgICAgICAgICAgY2VudGVyT25TZWxlY3Q6IHRydWUsXG4gICAgICAgICAgICB3aWR0aEl0ZW0gICAgIDogMCxcbiAgICAgICAgICAgIGhlaWdodEl0ZW0gICAgOiAwLFxuICAgICAgICAgICAgdHJhY2tCeSAgICAgICA6ICckaW5kZXgnLFxuICAgICAgICAgICAgc2VsZWN0Rmlyc3QgICA6IHRydWUsXG4gICAgICAgICAgICBzZWxlY3RBdFN0YXJ0IDoge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBudWxsLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiBudWxsLFxuICAgICAgICAgICAgICAgIGluZGV4ICAgOiAtMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHB1bGxSZWZyZXNoICAgOiB7XG4gICAgICAgICAgICAgICAgYWN0aXZlICA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNhbGxCYWNrOiBhbmd1bGFyLm5vb3AsXG4gICAgICAgICAgICAgICAgbG9hZGluZzpmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFuaW1hdGVJbiAgICAgOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEFQSVxuICAgICAgICB2bS5pbml0Q2Fyb3VzZWwgPSBpbml0Q2Fyb3VzZWw7XG4gICAgICAgIHZtLnNlbGVjdEl0ZW0gICA9IHNlbGVjdEl0ZW07XG4gICAgICAgIHZtLm9uU2Nyb2xsICAgICA9IG9uU2Nyb2xsO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHZtKTtcblxuICAgICAgICBhY3RpdmF0ZSgpO1xuXG4gICAgICAgIC8vLy8vLy8vLy9cblxuICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICAgICAgICAgIGFuZ3VsYXIuZXh0ZW5kKHZtLm9wdGlvbnMsIHZtLmNhcm91c2VsT3B0aW9ucyk7XG5cbiAgICAgICAgICAgICRzY29wZS4kb24oJ2EtY2Fyb3VzZWwuYXJyYXl1cGRhdGVkJywgb25BcnJheVByb3ZpZGVyVXBkYXRlZCk7XG4gICAgICAgICAgICAkc2NvcGUuJG9uKCdhLWNhcm91c2VsLmRlc2FjdGl2YXRlSXRlbScsIGRlc2FjdGl2ZUl0ZW1TZWxlY3RlZCk7XG5cbiAgICAgICAgICAgIGlmICh2bS5vcHRpb25zLnB1bGxSZWZyZXNoLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICRzY29wZS4kb24oJ2EtY2Fyb3VzZWwucHVsbHJlZnJlc2guZG9uZScsIG9uRW5kUmVmcmVzaCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vLy8vLy8vLy9cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSBlXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3tjYXJvdXNlbElkOnN0cmluZ319IHBhcmFtXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uQXJyYXlQcm92aWRlclVwZGF0ZWQoZSwgcGFyYW0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb25BcnJheVByb3ZpZGVyVXBkYXRlZCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmFtKVxuICAgICAgICAgICAgICAgIHZhciBjYXJvdXNlbElkO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcm91c2VsSWQgPSBwYXJhbS5jYXJvdXNlbElkO1xuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmV4dGVuZCh2bS5vcHRpb25zLCBwYXJhbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWxJZCA9IHBhcmFtO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjYXJvdXNlbElkID09PSB2bS5vcHRpb25zLmNhcm91c2VsSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQodm0uaW5pdENhcm91c2VsLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSBlXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3tpZENvbnRhaW5zOnN0cmluZywgZXhjZXB0OnN0cmluZ319IHBhcmFtXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlc2FjdGl2ZUl0ZW1TZWxlY3RlZChlLCBwYXJhbSkge1xuICAgICAgICAgICAgICAgIHZhciBpZENvbnRhaW5zID0gcGFyYW0uaWRDb250YWlucztcbiAgICAgICAgICAgICAgICB2YXIgZXhjZXB0ICAgICA9IHBhcmFtLmV4Y2VwdDtcblxuICAgICAgICAgICAgICAgIGlmICh2bS5vcHRpb25zLmNhcm91c2VsSWQuaW5kZXhPZihpZENvbnRhaW5zKSA+PSAwICYmIHZtLm9wdGlvbnMuY2Fyb3VzZWxJZCAhPT0gZXhjZXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLml0ZW1BY3RpdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXRDYXJvdXNlbCgpIHtcbiAgICAgICAgICAgIHZhciBjYXJvdXNlbEl0ZW1zID0gJGVsZW1lbnQuZmluZCgnbGknKTtcbiAgICAgICAgICAgIHZhciB0b3RhbEl0ZW1zICAgID0gY2Fyb3VzZWxJdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgbnVtSXRlbXMgICAgICA9IGFuZ3VsYXIuZWxlbWVudChjYXJvdXNlbEl0ZW1zKS5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgd2lkdGhDYXJvdXNlbCA9IDA7XG5cbiAgICAgICAgICAgIHZhciBtYXJnaW5MZWZ0ICA9IDA7XG4gICAgICAgICAgICB2YXIgbWFyZ2luUmlnaHQgPSAwO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggICAgICAgICAgICAgID0gMDtcbiAgICAgICAgICAgIHZhciBudW1UaW1lc0RvbUNoZWNrZWQgPSAwO1xuICAgICAgICAgICAgdmFyIG51bVJldHJ5QnVpbGQgICAgICAgICAgID0gMTU7XG5cbiAgICAgICAgICAgIHZtLml0ZW1BY3RpdmUgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAobnVtSXRlbXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjaGVja0RPTSgpO1xuICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RyeWluZyB0byBjcmVhdGUgYSBjYXJvdXNlbCBmcm9tIGFuIGVtcHR5IGFycmF5Jywgdm0ub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrRE9NKCkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNraW5nIGlmIGNhcm91c2VsIGl0ZW1zIGFyZSBpbiBET01cbiAgICAgICAgICAgICAgICB2YXIgdyA9IHBhcnNlSW50KGNhcm91c2VsSXRlbXNbdG90YWxJdGVtcyAtIDFdLm9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IHBhcnNlSW50KGNhcm91c2VsSXRlbXNbdG90YWxJdGVtcyAtIDFdLm9mZnNldEhlaWdodCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodyA+IDAgJiYgaCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc05vdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbSU5GT10gQ3JlYXRpbmcgQ2Fyb3VzZWwgYnV0IERPTSBub3QgcmVhZHkgeWV0Li4uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bVRpbWVzRG9tQ2hlY2tlZCA8IG51bVJldHJ5QnVpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0RPTSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tFUlJPUl0gU2l6ZSBpdGVtIENhcm91c2VsIGNvdWxkIG5vdCBiZSBkZXRlcm1pbmVkJywgdm0ub3B0aW9ucy5jYXJvdXNlbElkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG51bVRpbWVzRG9tQ2hlY2tlZCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcHJvY2Vzc05vdygpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0SXRlbUF0U3RhcnQgPSB2bS5vcHRpb25zLnNlbGVjdEF0U3RhcnQucHJvcGVydHkgIT09IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGVsSXRlbTtcblxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChjYXJvdXNlbEl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBtb2RlbEl0ZW0gICAgICAgICAgICA9IHZtLmFycmF5UHJvdmlkZXJbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBtb2RlbEl0ZW0uY2Fyb3VzZWxJZCA9IHZtLm9wdGlvbnMuY2Fyb3VzZWxJZDtcblxuICAgICAgICAgICAgICAgICAgICB3aWR0aENhcm91c2VsICs9IGl0ZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHZtLm9wdGlvbnMud2lkdGhJdGVtICA9IE1hdGgubWF4KGl0ZW0ub2Zmc2V0V2lkdGgsIHZtLm9wdGlvbnMud2lkdGhJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdm0ub3B0aW9ucy5oZWlnaHRJdGVtID0gTWF0aC5tYXgoaXRlbS5vZmZzZXRIZWlnaHQsIHZtLm9wdGlvbnMuaGVpZ2h0SXRlbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdm0uYXJyYXlQcm92aWRlcltpbmRleF0ud2lkdGhJdGVtID0gaXRlbS5vZmZzZXRXaWR0aDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBBcyB3ZSBjYW4gc2VsZWN0IGF0IHN0YXJ0IGFuIGl0ZW0gd2l0aCBhIHByb3BlcnR5IG9mIGNlcnRhaW4gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgY2hlY2sgaGVyZSBpdHMgaW5kZXggaW4gdGhlIEFycmF5XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtQXRTdGFydCAmJiB2bS5vcHRpb25zLnNlbGVjdEF0U3RhcnQuaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWxJdGVtW3ZtLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5wcm9wZXJ0eV0gPT09IHZtLm9wdGlvbnMuc2VsZWN0QXRTdGFydC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5pbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICh2bS5vcHRpb25zLmNlbnRlck9uU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjZW50ZXJYICAgPSAkd2luZG93LmlubmVyV2lkdGggKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdEl0ZW0gPSBjYXJvdXNlbEl0ZW1zWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdEl0ZW0gID0gY2Fyb3VzZWxJdGVtc1tudW1JdGVtcyAtIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQgID0gY2VudGVyWCAtIGZpcnN0SXRlbS5vZmZzZXRXaWR0aCAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQgPSBjZW50ZXJYIC0gbGFzdEl0ZW0ub2Zmc2V0V2lkdGggKiAwLjU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgYWRkIG1hcmdpbiBvbiBib3RoIHNpZGUgdG8gYmUgYWJsZSB0byBjZW50ZXIgdGhlIGZpcnN0IGFuZCBsYXN0IGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGhDYXJvdXNlbCArPSBtYXJnaW5MZWZ0ICsgbWFyZ2luUmlnaHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgdm0ub3B0aW9ucy5tYXhTY3JvbGwgPSAkd2luZG93LmlubmVyV2lkdGggLSB3aWR0aENhcm91c2VsO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uIHRoZSBjYXJvdXNlbCBvbiBmaXJzdCBpdGVtXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5vcHRpb25zLmFsaWduID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaW9uaWNTY3JvbGxEZWxlZ2F0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kZ2V0QnlIYW5kbGUodm0ub3B0aW9ucy5jYXJvdXNlbElkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zY3JvbGxUbyh2bS5vcHRpb25zLm1heFNjcm9sbCAqIC0xLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodm0ub3B0aW9ucy5hbGlnbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpb25pY1Njcm9sbERlbGVnYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLiRnZXRCeUhhbmRsZSh2bS5vcHRpb25zLmNhcm91c2VsSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNjcm9sbFRvKHZtLm9wdGlvbnMubWF4U2Nyb2xsICogLTAuNSwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGlvbmljU2Nyb2xsRGVsZWdhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuJGdldEJ5SGFuZGxlKHZtLm9wdGlvbnMuY2Fyb3VzZWxJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2Nyb2xsVG8oMCwgMCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoQ2Fyb3VzZWwgKz0gNDsgLy8gKyA0IHRvIGF2b2lkIGxpbmUgYnJlYWsgd2hlbiB0ZXh0IGdvaW5nIGJvbGRcbiAgICAgICAgICAgICAgICAgICAgdm0ub3B0aW9ucy5tYXhTY3JvbGwgPSAkd2luZG93LmlubmVyV2lkdGggLSB3aWR0aENhcm91c2VsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZtLm9wdGlvbnMud2lkdGhDYXJvdXNlbCA9IHdpZHRoQ2Fyb3VzZWw7XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgQWN0aXZlIGl0ZW0gYXQgc3RhcnRcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdEl0ZW1BdFN0YXJ0ICYmIHZtLm9wdGlvbnMuc2VsZWN0Rmlyc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLm9wdGlvbnMuYWxpZ24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW1BY3RpdmUodm0uYXJyYXlQcm92aWRlcltudW1JdGVtcyAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW1BY3RpdmUodm0uYXJyYXlQcm92aWRlclswXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0SXRlbUF0U3RhcnQgJiYgdm0ub3B0aW9ucy5zZWxlY3RBdFN0YXJ0LmluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0SXRlbSh2bS5hcnJheVByb3ZpZGVyW3ZtLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5pbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgaW5saW5lLWNzcyB0byBjYXJvdXNlbCBhY2NvcmRpbmcgdG8gaXRlbXMgd2lkdGggYW5kIGhlaWdodFxuICAgICAgICAgICAgICAgIHZtLm5hdkVsZW0gPSAkZWxlbWVudC5maW5kKCduYXYnKTtcbiAgICAgICAgICAgICAgICB2bS5uYXZFbGVtLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCcgICAgICAgOiB3aWR0aENhcm91c2VsICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCcgICAgICA6IHZtLm9wdGlvbnMuaGVpZ2h0SXRlbSArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JyAgOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nLWxlZnQnOiBtYXJnaW5MZWZ0ICsgJ3B4J1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2FjaGUgcHVsbCByZWZyZXNoIERPTSBlbGVtZW50cyAoYm90aCB3cmFwcGVyIGFuZCBzdmcgZWxlbSlcbiAgICAgICAgICAgICAgICBpZiAodm0ub3B0aW9ucy5wdWxsUmVmcmVzaC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdm0ucHVsbHJlZnJlc2hJbmRpY2F0b3IgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmEtY2Fyb3VzZWwgLnB1bGxyZWZyZXNoLWluZGljYXRvcicpKTtcbiAgICAgICAgICAgICAgICAgICAgdm0uc3ZnRWxlbSAgICAgICAgICAgICAgPSAkZWxlbWVudC5maW5kKCdnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2VsZWN0SXRlbShpdGVtKSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsUG9zLCBpO1xuXG4gICAgICAgICAgICBzZXRJdGVtQWN0aXZlKGl0ZW0pO1xuXG4gICAgICAgICAgICAvLyBDZW50ZXIgY2Fyb3VzZWxcbiAgICAgICAgICAgIGlmICh2bS5vcHRpb25zLmNlbnRlck9uU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhGcm9tSWQoaXRlbSk7XG5cbiAgICAgICAgICAgICAgICBzY3JvbGxQb3MgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFBvcyA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFBvcyArPSAodm0uYXJyYXlQcm92aWRlcltpXS53aWR0aEl0ZW0gKyB2bS5hcnJheVByb3ZpZGVyW2kgKyAxXS53aWR0aEl0ZW0pICogMC41O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJGlvbmljU2Nyb2xsRGVsZWdhdGUuJGdldEJ5SGFuZGxlKHZtLm9wdGlvbnMuY2Fyb3VzZWxJZCkuc2Nyb2xsVG8oc2Nyb2xsUG9zLCAwLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPbmx5IGZvciB3aGVuIHB1bGwtcmVmcmVzaCBhY3RpdmUgaXMgc2V0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcbiAgICAgICAgICAgIHZhciBwY3Q7XG4gICAgICAgICAgICB2YXIgcG9zICAgICAgICAgICAgID0gJGlvbmljU2Nyb2xsRGVsZWdhdGUuJGdldEJ5SGFuZGxlKHZtLm9wdGlvbnMuY2Fyb3VzZWxJZCkuZ2V0U2Nyb2xsUG9zaXRpb24oKS5sZWZ0O1xuICAgICAgICAgICAgdmFyIHBjdFB1bGwgICAgICAgICA9IDA7XG4gICAgICAgICAgICB2YXIgcGN0Um90SW5kaWNhdG9yID0gMDtcblxuICAgICAgICAgICAgaWYgKHZtLm9wdGlvbnMubWF4U2Nyb2xsIDwgMCkge1xuICAgICAgICAgICAgICAgIHBjdCA9IHBvcyAvIHZtLm9wdGlvbnMubWF4U2Nyb2xsICogLTE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIElmIE5PIG1heFNjcm9sbCAtPiBwcm9iYWJseSBtZWFucyB0aGF0IHRoZXJlIGFyZSBvbmx5IDEgb3IgMiBpdGVtcyAobm8gbmVlZCB0byBzY3JvbGwpXG4gICAgICAgICAgICAgICAgLy8gd2UgZmFrZSBhIHBlcmNlbnRhZ2VcbiAgICAgICAgICAgICAgICBwY3QgPSBwb3MgLyAxMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBjdCA+IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGl4ZWxQdWxsID0gcG9zIC0gdm0ub3B0aW9ucy5tYXhTY3JvbGwgKiAtMTtcbiAgICAgICAgICAgICAgICBwY3RQdWxsICAgICAgID0gcGl4ZWxQdWxsIC8gJHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIHZtLnB1bGxyZWZyZXNoSW5kaWNhdG9yLmNzcyh7J3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVYKCcgKyBwY3RSb3RJbmRpY2F0b3IgKiAtNTYgKyAncHgpJ30pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGN0UHVsbCA+IDAuMjUgJiYgcG9zID4gMCkge1xuICAgICAgICAgICAgICAgIHZtLnB1bGxyZWZyZXNoSW5kaWNhdG9yLmNzcyh7J3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVYKDBweCknLCBkaXNwbGF5OiAnbm9uZSd9KTtcbiAgICAgICAgICAgICAgICBvblB1bGxSZWZyZXNoKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBjdFJvdEluZGljYXRvciA9IHBjdFB1bGwgLyAwLjI7XG4gICAgICAgICAgICAgICAgdm0uc3ZnRWxlbVswXS5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsICdyb3RhdGUoJyArIHBjdFJvdEluZGljYXRvciAqIDM2MCArICcgMzIgMzIpJyk7XG4gICAgICAgICAgICAgICAgdm0ucHVsbHJlZnJlc2hJbmRpY2F0b3IuY3NzKHsndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVgoJyArIHBjdFJvdEluZGljYXRvciAqIC01NiArICdweCknfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLS0tXG4gICAgICAgIC8vIFBSSVZBVEVcbiAgICAgICAgLy8gLS0tLS0tLS0tLVxuICAgICAgICBmdW5jdGlvbiBzZXRJdGVtQWN0aXZlKGl0ZW0pIHtcbiAgICAgICAgICAgIHZtLml0ZW1BY3RpdmUgPSBpdGVtO1xuXG4gICAgICAgICAgICAvLyBDYWxsYmFjayBvbiBzZWxlY3RcbiAgICAgICAgICAgIHZtLm9uU2VsZWN0LmNhbGwobnVsbCwge2l0ZW06IGl0ZW19KTtcblxuICAgICAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ2EtY2Fyb3VzZWwuaXRlbXNlbGVjdGVkJywgaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRJbmRleEZyb21JZChpdGVtKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHZtLmFycmF5UHJvdmlkZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodm0uYXJyYXlQcm92aWRlcltpXSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQdWxsIFJlZnJlc2hcbiAgICAgICAgZnVuY3Rpb24gb25QdWxsUmVmcmVzaCgpIHtcbiAgICAgICAgICAgIGlmICghdm0ub3B0aW9ucy5wdWxsUmVmcmVzaC5sb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLm9wdGlvbnMucHVsbFJlZnJlc2gubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkaW9uaWNTY3JvbGxEZWxlZ2F0ZS4kZ2V0QnlIYW5kbGUodm0ub3B0aW9ucy5jYXJvdXNlbElkKS5mcmVlemVTY3JvbGwodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgc29tZSB3aWR0aCB0byB0aGUgbmF2IHRvIG1ha2Ugc29tZSByb29tIGZvciB0aGUgc3Bpbm5lclxuICAgICAgICAgICAgICAgIHZtLm5hdkVsZW0uY3NzKHsnd2lkdGgnOiB2bS5vcHRpb25zLndpZHRoQ2Fyb3VzZWwgKyA0NSArICdweCd9KTtcbiAgICAgICAgICAgICAgICAkaW9uaWNTY3JvbGxEZWxlZ2F0ZS4kZ2V0QnlIYW5kbGUodm0ub3B0aW9ucy5jYXJvdXNlbElkKS5yZXNpemUoKTtcblxuICAgICAgICAgICAgICAgIHZtLm9wdGlvbnMucHVsbFJlZnJlc2guY2FsbEJhY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25FbmRSZWZyZXNoKCkge1xuICAgICAgICAgICAgdm0ub3B0aW9ucy5wdWxsUmVmcmVzaC5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHZtLm5hdkVsZW0uY3NzKHsnd2lkdGgnOiB2bS5vcHRpb25zLndpZHRoQ2Fyb3VzZWwgKyAncHgnfSk7XG4gICAgICAgICAgICAkaW9uaWNTY3JvbGxEZWxlZ2F0ZS4kZ2V0QnlIYW5kbGUodm0ub3B0aW9ucy5jYXJvdXNlbElkKS5yZXNpemUoKTtcblxuICAgICAgICAgICAgJGlvbmljU2Nyb2xsRGVsZWdhdGUuJGdldEJ5SGFuZGxlKHZtLm9wdGlvbnMuY2Fyb3VzZWxJZCkuZnJlZXplU2Nyb2xsKGZhbHNlKTtcbiAgICAgICAgICAgIHZtLnB1bGxyZWZyZXNoSW5kaWNhdG9yLmNzcyh7J3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVYKDBweCknLCBkaXNwbGF5OiAnYmxvY2snfSk7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE5hbWU6ICAgICAgICAgIG5nLWtub2JcbiAqIERlc2NyaXB0aW9uOiAgIEFuZ3VsYXIuanMgS25vYiBkaXJlY3RpdmVcbiAqIFZlcnNpb246ICAgICAgIDAuMS4zXG4gKiBIb21lcGFnZTogICAgICBodHRwczovL3JhZG1pZS5naXRodWIuaW8vbmcta25vYlxuICogTGljZW5jZTogICAgICAgTUlUXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblwidXNlIHN0cmljdFwiOyFmdW5jdGlvbigpe3ZhciB1aT17fSxLbm9iPWZ1bmN0aW9uKGVsZW1lbnQsdmFsdWUsb3B0aW9ucyl7dGhpcy5lbGVtZW50PWVsZW1lbnQsdGhpcy52YWx1ZT12YWx1ZSx0aGlzLm9wdGlvbnM9b3B0aW9ucyx0aGlzLmluRHJhZz0hMX07S25vYi5wcm90b3R5cGUudmFsdWVUb1JhZGlhbnM9ZnVuY3Rpb24odmFsdWUsdmFsdWVFbmQsYW5nbGVFbmQsYW5nbGVTdGFydCx2YWx1ZVN0YXJ0KXtyZXR1cm4gdmFsdWVFbmQ9dmFsdWVFbmR8fDEwMCx2YWx1ZVN0YXJ0PXZhbHVlU3RhcnR8fDAsYW5nbGVFbmQ9YW5nbGVFbmR8fDM2MCxhbmdsZVN0YXJ0PWFuZ2xlU3RhcnR8fDAsTWF0aC5QSS8xODAqKCh2YWx1ZS12YWx1ZVN0YXJ0KSooYW5nbGVFbmQtYW5nbGVTdGFydCkvKHZhbHVlRW5kLXZhbHVlU3RhcnQpK2FuZ2xlU3RhcnQpfSxLbm9iLnByb3RvdHlwZS5yYWRpYW5zVG9WYWx1ZT1mdW5jdGlvbihyYWRpYW5zLHZhbHVlRW5kLHZhbHVlU3RhcnQsYW5nbGVFbmQsYW5nbGVTdGFydCl7cmV0dXJuIHZhbHVlRW5kPXZhbHVlRW5kfHwxMDAsdmFsdWVTdGFydD12YWx1ZVN0YXJ0fHwwLGFuZ2xlRW5kPWFuZ2xlRW5kfHwzNjAsYW5nbGVTdGFydD1hbmdsZVN0YXJ0fHwwLCgxODAvTWF0aC5QSSpyYWRpYW5zLWFuZ2xlU3RhcnQpKih2YWx1ZUVuZC12YWx1ZVN0YXJ0KS8oYW5nbGVFbmQtYW5nbGVTdGFydCkrdmFsdWVTdGFydH0sS25vYi5wcm90b3R5cGUuY3JlYXRlQXJjPWZ1bmN0aW9uKGlubmVyUmFkaXVzLG91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsZW5kQW5nbGUsY29ybmVyUmFkaXVzKXt2YXIgYXJjPWQzLnN2Zy5hcmMoKS5pbm5lclJhZGl1cyhpbm5lclJhZGl1cykub3V0ZXJSYWRpdXMob3V0ZXJSYWRpdXMpLnN0YXJ0QW5nbGUoc3RhcnRBbmdsZSkuZW5kQW5nbGUoZW5kQW5nbGUpLmNvcm5lclJhZGl1cyhjb3JuZXJSYWRpdXMpO3JldHVybiBhcmN9LEtub2IucHJvdG90eXBlLmRyYXdBcmM9ZnVuY3Rpb24oc3ZnLGFyYyxsYWJlbCxzdHlsZSxjbGljayxkcmFnKXt2YXIgZWxlbT1zdmcuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiaWRcIixsYWJlbCkuYXR0cihcImRcIixhcmMpLnN0eWxlKHN0eWxlKS5hdHRyKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoXCIrdGhpcy5vcHRpb25zLnNpemUvMitcIiwgXCIrdGhpcy5vcHRpb25zLnNpemUvMitcIilcIik7cmV0dXJuIHRoaXMub3B0aW9ucy5yZWFkT25seT09PSExJiYoY2xpY2smJmVsZW0ub24oXCJjbGlja1wiLGNsaWNrKSxkcmFnJiZlbGVtLmNhbGwoZHJhZykpLGVsZW19LEtub2IucHJvdG90eXBlLmNyZWF0ZUFyY3M9ZnVuY3Rpb24oKXt2YXIgb3V0ZXJSYWRpdXM9cGFyc2VJbnQodGhpcy5vcHRpb25zLnNpemUvMiwxMCksc3RhcnRBbmdsZT10aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLDM2MCksZW5kQW5nbGU9dGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLm9wdGlvbnMuZW5kQW5nbGUsMzYwKTt0aGlzLm9wdGlvbnMuc2NhbGUuZW5hYmxlZCYmKG91dGVyUmFkaXVzLT10aGlzLm9wdGlvbnMuc2NhbGUud2lkdGgrdGhpcy5vcHRpb25zLnNjYWxlLnNwYWNlV2lkdGgpO3ZhciBkaWZmLHRyYWNrSW5uZXJSYWRpdXM9b3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnRyYWNrV2lkdGgsY2hhbmdlSW5uZXJSYWRpdXM9b3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLmJhcldpZHRoLHZhbHVlSW5uZXJSYWRpdXM9b3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLmJhcldpZHRoLGludGVyYWN0SW5uZXJSYWRpdXM9MSx0cmFja091dGVyUmFkaXVzPW91dGVyUmFkaXVzLGNoYW5nZU91dGVyUmFkaXVzPW91dGVyUmFkaXVzLHZhbHVlT3V0ZXJSYWRpdXM9b3V0ZXJSYWRpdXMsaW50ZXJhY3RPdXRlclJhZGl1cz1vdXRlclJhZGl1czt0aGlzLm9wdGlvbnMuYmFyV2lkdGg+dGhpcy5vcHRpb25zLnRyYWNrV2lkdGg/KGRpZmY9KHRoaXMub3B0aW9ucy5iYXJXaWR0aC10aGlzLm9wdGlvbnMudHJhY2tXaWR0aCkvMix0cmFja0lubmVyUmFkaXVzLT1kaWZmLHRyYWNrT3V0ZXJSYWRpdXMtPWRpZmYpOnRoaXMub3B0aW9ucy5iYXJXaWR0aDx0aGlzLm9wdGlvbnMudHJhY2tXaWR0aCYmKGRpZmY9KHRoaXMub3B0aW9ucy50cmFja1dpZHRoLXRoaXMub3B0aW9ucy5iYXJXaWR0aCkvMixjaGFuZ2VPdXRlclJhZGl1cy09ZGlmZix2YWx1ZU91dGVyUmFkaXVzLT1kaWZmLGNoYW5nZUlubmVyUmFkaXVzLT1kaWZmLHZhbHVlSW5uZXJSYWRpdXMtPWRpZmYpLHRoaXMub3B0aW9ucy5iZ0NvbG9yJiYodGhpcy5iZ0FyYz10aGlzLmNyZWF0ZUFyYygwLG91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsZW5kQW5nbGUpKSxcInRyb25cIj09PXRoaXMub3B0aW9ucy5za2luLnR5cGUmJih0cmFja091dGVyUmFkaXVzPXRyYWNrT3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnNraW4ud2lkdGgtdGhpcy5vcHRpb25zLnNraW4uc3BhY2VXaWR0aCxjaGFuZ2VPdXRlclJhZGl1cz1jaGFuZ2VPdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuc2tpbi53aWR0aC10aGlzLm9wdGlvbnMuc2tpbi5zcGFjZVdpZHRoLHZhbHVlT3V0ZXJSYWRpdXM9dmFsdWVPdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuc2tpbi53aWR0aC10aGlzLm9wdGlvbnMuc2tpbi5zcGFjZVdpZHRoLGludGVyYWN0T3V0ZXJSYWRpdXM9aW50ZXJhY3RPdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuc2tpbi53aWR0aC10aGlzLm9wdGlvbnMuc2tpbi5zcGFjZVdpZHRoLHRoaXMuaG9vcEFyYz10aGlzLmNyZWF0ZUFyYyhvdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuc2tpbi53aWR0aCxvdXRlclJhZGl1cyxzdGFydEFuZ2xlLGVuZEFuZ2xlKSksdGhpcy50cmFja0FyYz10aGlzLmNyZWF0ZUFyYyh0cmFja0lubmVyUmFkaXVzLHRyYWNrT3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxlbmRBbmdsZSksdGhpcy5jaGFuZ2VBcmM9dGhpcy5jcmVhdGVBcmMoY2hhbmdlSW5uZXJSYWRpdXMsY2hhbmdlT3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxzdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5iYXJDYXApLHRoaXMudmFsdWVBcmM9dGhpcy5jcmVhdGVBcmModmFsdWVJbm5lclJhZGl1cyx2YWx1ZU91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMuYmFyQ2FwKSx0aGlzLmludGVyYWN0QXJjPXRoaXMuY3JlYXRlQXJjKGludGVyYWN0SW5uZXJSYWRpdXMsaW50ZXJhY3RPdXRlclJhZGl1cyxzdGFydEFuZ2xlLGVuZEFuZ2xlKX0sS25vYi5wcm90b3R5cGUuZHJhd0FyY3M9ZnVuY3Rpb24oY2xpY2tJbnRlcmFjdGlvbixkcmFnQmVoYXZpb3Ipe3ZhciBzdmc9ZDMuc2VsZWN0KHRoaXMuZWxlbWVudCkuYXBwZW5kKFwic3ZnXCIpLmF0dHIoXCJ3aWR0aFwiLHRoaXMub3B0aW9ucy5zaXplKS5hdHRyKFwiaGVpZ2h0XCIsdGhpcy5vcHRpb25zLnNpemUpO2lmKHRoaXMub3B0aW9ucy5iZ0NvbG9yJiZ0aGlzLmRyYXdBcmMoc3ZnLHRoaXMuYmdBcmMsXCJiZ0FyY1wiLHtmaWxsOnRoaXMub3B0aW9ucy5iZ0NvbG9yfSksdGhpcy5vcHRpb25zLmRpc3BsYXlJbnB1dCl7dmFyIGZvbnRTaXplPS4yKnRoaXMub3B0aW9ucy5zaXplK1wicHhcIjtcImF1dG9cIiE9PXRoaXMub3B0aW9ucy5mb250U2l6ZSYmKGZvbnRTaXplPXRoaXMub3B0aW9ucy5mb250U2l6ZStcInB4XCIpLHRoaXMub3B0aW9ucy5zdGVwPDEmJih0aGlzLnZhbHVlPXRoaXMudmFsdWUudG9GaXhlZCgxKSk7dmFyIHY9dGhpcy52YWx1ZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXImJih2PXRoaXMub3B0aW9ucy5pbnB1dEZvcm1hdHRlcih2KSksc3ZnLmFwcGVuZChcInRleHRcIikuYXR0cihcImlkXCIsXCJ0ZXh0XCIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLFwibWlkZGxlXCIpLmF0dHIoXCJmb250LXNpemVcIixmb250U2l6ZSkuc3R5bGUoXCJmaWxsXCIsdGhpcy5vcHRpb25zLnRleHRDb2xvcikudGV4dCh2K3RoaXMub3B0aW9ucy51bml0fHxcIlwiKS5hdHRyKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoXCIrdGhpcy5vcHRpb25zLnNpemUvMitcIiwgXCIrKHRoaXMub3B0aW9ucy5zaXplLzIrLjA2KnRoaXMub3B0aW9ucy5zaXplKStcIilcIiksdGhpcy5vcHRpb25zLnN1YlRleHQuZW5hYmxlZCYmKGZvbnRTaXplPS4wNyp0aGlzLm9wdGlvbnMuc2l6ZStcInB4XCIsXCJhdXRvXCIhPT10aGlzLm9wdGlvbnMuc3ViVGV4dC5mb250JiYoZm9udFNpemU9dGhpcy5vcHRpb25zLnN1YlRleHQuZm9udCtcInB4XCIpLHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJjbGFzc1wiLFwic3ViLXRleHRcIikuYXR0cihcInRleHQtYW5jaG9yXCIsXCJtaWRkbGVcIikuYXR0cihcImZvbnQtc2l6ZVwiLGZvbnRTaXplKS5zdHlsZShcImZpbGxcIix0aGlzLm9wdGlvbnMuc3ViVGV4dC5jb2xvcikudGV4dCh0aGlzLm9wdGlvbnMuc3ViVGV4dC50ZXh0KS5hdHRyKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoXCIrdGhpcy5vcHRpb25zLnNpemUvMitcIiwgXCIrKHRoaXMub3B0aW9ucy5zaXplLzIrLjE1KnRoaXMub3B0aW9ucy5zaXplKStcIilcIikpfWlmKHRoaXMub3B0aW9ucy5zY2FsZS5lbmFibGVkKXt2YXIgcmFkaXVzLHF1YW50aXR5LGRhdGEsY291bnQ9MCxhbmdsZT0wLHN0YXJ0UmFkaWFucz10aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMub3B0aW9ucy5taW4sdGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMuZW5kQW5nbGUsdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLm1pbiksZW5kUmFkaWFucz10aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMuZW5kQW5nbGUsdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLm1pbiksZGlmZj0wO2lmKDA9PT10aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSYmMzYwPT09dGhpcy5vcHRpb25zLmVuZEFuZ2xlfHwoZGlmZj0xKSxcImRvdHNcIj09PXRoaXMub3B0aW9ucy5zY2FsZS50eXBlKXt2YXIgd2lkdGg9dGhpcy5vcHRpb25zLnNjYWxlLndpZHRoO3JhZGl1cz10aGlzLm9wdGlvbnMuc2l6ZS8yLXdpZHRoLHF1YW50aXR5PXRoaXMub3B0aW9ucy5zY2FsZS5xdWFudGl0eTt2YXIgb2Zmc2V0PXJhZGl1cyt0aGlzLm9wdGlvbnMuc2NhbGUud2lkdGg7ZGF0YT1kMy5yYW5nZShxdWFudGl0eSkubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIGFuZ2xlPWNvdW50KihlbmRSYWRpYW5zLXN0YXJ0UmFkaWFucyktTWF0aC5QSS8yK3N0YXJ0UmFkaWFucyxjb3VudCs9MS8ocXVhbnRpdHktZGlmZikse2N4Om9mZnNldCtNYXRoLmNvcyhhbmdsZSkqcmFkaXVzLGN5Om9mZnNldCtNYXRoLnNpbihhbmdsZSkqcmFkaXVzLHI6d2lkdGh9fSksc3ZnLnNlbGVjdEFsbChcImNpcmNsZVwiKS5kYXRhKGRhdGEpLmVudGVyKCkuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoe3I6ZnVuY3Rpb24oZCl7cmV0dXJuIGQucn0sY3g6ZnVuY3Rpb24oZCl7cmV0dXJuIGQuY3h9LGN5OmZ1bmN0aW9uKGQpe3JldHVybiBkLmN5fSxmaWxsOnRoaXMub3B0aW9ucy5zY2FsZS5jb2xvcn0pfWVsc2UgaWYoXCJsaW5lc1wiPT09dGhpcy5vcHRpb25zLnNjYWxlLnR5cGUpe3ZhciBoZWlnaHQ9dGhpcy5vcHRpb25zLnNjYWxlLmhlaWdodDtyYWRpdXM9dGhpcy5vcHRpb25zLnNpemUvMixxdWFudGl0eT10aGlzLm9wdGlvbnMuc2NhbGUucXVhbnRpdHksZGF0YT1kMy5yYW5nZShxdWFudGl0eSkubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIGFuZ2xlPWNvdW50KihlbmRSYWRpYW5zLXN0YXJ0UmFkaWFucyktTWF0aC5QSS8yK3N0YXJ0UmFkaWFucyxjb3VudCs9MS8ocXVhbnRpdHktZGlmZikse3gxOnJhZGl1cytNYXRoLmNvcyhhbmdsZSkqcmFkaXVzLHkxOnJhZGl1cytNYXRoLnNpbihhbmdsZSkqcmFkaXVzLHgyOnJhZGl1cytNYXRoLmNvcyhhbmdsZSkqKHJhZGl1cy1oZWlnaHQpLHkyOnJhZGl1cytNYXRoLnNpbihhbmdsZSkqKHJhZGl1cy1oZWlnaHQpfX0pLHN2Zy5zZWxlY3RBbGwoXCJsaW5lXCIpLmRhdGEoZGF0YSkuZW50ZXIoKS5hcHBlbmQoXCJsaW5lXCIpLmF0dHIoe3gxOmZ1bmN0aW9uKGQpe3JldHVybiBkLngxfSx5MTpmdW5jdGlvbihkKXtyZXR1cm4gZC55MX0seDI6ZnVuY3Rpb24oZCl7cmV0dXJuIGQueDJ9LHkyOmZ1bmN0aW9uKGQpe3JldHVybiBkLnkyfSxcInN0cm9rZS13aWR0aFwiOnRoaXMub3B0aW9ucy5zY2FsZS53aWR0aCxzdHJva2U6dGhpcy5vcHRpb25zLnNjYWxlLmNvbG9yfSl9fVwidHJvblwiPT09dGhpcy5vcHRpb25zLnNraW4udHlwZSYmdGhpcy5kcmF3QXJjKHN2Zyx0aGlzLmhvb3BBcmMsXCJob29wQXJjXCIse2ZpbGw6dGhpcy5vcHRpb25zLnNraW4uY29sb3J9KSx0aGlzLmRyYXdBcmMoc3ZnLHRoaXMudHJhY2tBcmMsXCJ0cmFja0FyY1wiLHtmaWxsOnRoaXMub3B0aW9ucy50cmFja0NvbG9yfSksdGhpcy5vcHRpb25zLmRpc3BsYXlQcmV2aW91cz90aGlzLmNoYW5nZUVsZW09dGhpcy5kcmF3QXJjKHN2Zyx0aGlzLmNoYW5nZUFyYyxcImNoYW5nZUFyY1wiLHtmaWxsOnRoaXMub3B0aW9ucy5wcmV2QmFyQ29sb3J9KTp0aGlzLmNoYW5nZUVsZW09dGhpcy5kcmF3QXJjKHN2Zyx0aGlzLmNoYW5nZUFyYyxcImNoYW5nZUFyY1wiLHtcImZpbGwtb3BhY2l0eVwiOjB9KSx0aGlzLnZhbHVlRWxlbT10aGlzLmRyYXdBcmMoc3ZnLHRoaXMudmFsdWVBcmMsXCJ2YWx1ZUFyY1wiLHtmaWxsOnRoaXMub3B0aW9ucy5iYXJDb2xvcn0pO3ZhciBjdXJzb3I9XCJwb2ludGVyXCI7dGhpcy5vcHRpb25zLnJlYWRPbmx5JiYoY3Vyc29yPVwiZGVmYXVsdFwiKSx0aGlzLmRyYXdBcmMoc3ZnLHRoaXMuaW50ZXJhY3RBcmMsXCJpbnRlcmFjdEFyY1wiLHtcImZpbGwtb3BhY2l0eVwiOjAsY3Vyc29yOmN1cnNvcn0sY2xpY2tJbnRlcmFjdGlvbixkcmFnQmVoYXZpb3IpfSxLbm9iLnByb3RvdHlwZS5kcmF3PWZ1bmN0aW9uKHVwZGF0ZSl7ZnVuY3Rpb24gZHJhZ0ludGVyYWN0aW9uKCl7dGhhdC5pbkRyYWc9ITA7dmFyIHg9ZDMuZXZlbnQueC10aGF0Lm9wdGlvbnMuc2l6ZS8yLHk9ZDMuZXZlbnQueS10aGF0Lm9wdGlvbnMuc2l6ZS8yO2ludGVyYWN0aW9uKHgseSwhMSl9ZnVuY3Rpb24gY2xpY2tJbnRlcmFjdGlvbigpe3RoYXQuaW5EcmFnPSExO3ZhciBjb29yZHM9ZDMubW91c2UodGhpcy5wYXJlbnROb2RlKSx4PWNvb3Jkc1swXS10aGF0Lm9wdGlvbnMuc2l6ZS8yLHk9Y29vcmRzWzFdLXRoYXQub3B0aW9ucy5zaXplLzI7aW50ZXJhY3Rpb24oeCx5LCEwKX1mdW5jdGlvbiBpbnRlcmFjdGlvbih4LHksaXNGaW5hbCl7dmFyIHJhZGlhbnMsZGVsdGEsYXJjPU1hdGguYXRhbih5L3gpLyhNYXRoLlBJLzE4MCk7aWYoeD49MCYmMD49eXx8eD49MCYmeT49MD9kZWx0YT05MDooZGVsdGE9MjcwLHRoYXQub3B0aW9ucy5zdGFydEFuZ2xlPDAmJihkZWx0YT0tOTApKSxyYWRpYW5zPShkZWx0YSthcmMpKihNYXRoLlBJLzE4MCksdGhhdC52YWx1ZT10aGF0LnJhZGlhbnNUb1ZhbHVlKHJhZGlhbnMsdGhhdC5vcHRpb25zLm1heCx0aGF0Lm9wdGlvbnMubWluLHRoYXQub3B0aW9ucy5lbmRBbmdsZSx0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZSksdGhhdC52YWx1ZT49dGhhdC5vcHRpb25zLm1pbiYmdGhhdC52YWx1ZTw9dGhhdC5vcHRpb25zLm1heCYmKHRoYXQudmFsdWU9TWF0aC5yb3VuZCh+figodGhhdC52YWx1ZTwwPy0uNTouNSkrdGhhdC52YWx1ZS90aGF0Lm9wdGlvbnMuc3RlcCkqdGhhdC5vcHRpb25zLnN0ZXAqMTAwKS8xMDAsdGhhdC5vcHRpb25zLnN0ZXA8MSYmKHRoYXQudmFsdWU9dGhhdC52YWx1ZS50b0ZpeGVkKDEpKSx1cGRhdGUodGhhdC52YWx1ZSksdGhhdC52YWx1ZUFyYy5lbmRBbmdsZSh0aGF0LnZhbHVlVG9SYWRpYW5zKHRoYXQudmFsdWUsdGhhdC5vcHRpb25zLm1heCx0aGF0Lm9wdGlvbnMuZW5kQW5nbGUsdGhhdC5vcHRpb25zLnN0YXJ0QW5nbGUsdGhhdC5vcHRpb25zLm1pbikpLHRoYXQudmFsdWVFbGVtLmF0dHIoXCJkXCIsdGhhdC52YWx1ZUFyYyksaXNGaW5hbCYmKHRoYXQuY2hhbmdlQXJjLmVuZEFuZ2xlKHRoYXQudmFsdWVUb1JhZGlhbnModGhhdC52YWx1ZSx0aGF0Lm9wdGlvbnMubWF4LHRoYXQub3B0aW9ucy5lbmRBbmdsZSx0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZSx0aGF0Lm9wdGlvbnMubWluKSksdGhhdC5jaGFuZ2VFbGVtLmF0dHIoXCJkXCIsdGhhdC5jaGFuZ2VBcmMpKSx0aGF0Lm9wdGlvbnMuZGlzcGxheUlucHV0KSl7dmFyIHY9dGhhdC52YWx1ZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGF0Lm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXImJih2PXRoYXQub3B0aW9ucy5pbnB1dEZvcm1hdHRlcih2KSksZDMuc2VsZWN0KHRoYXQuZWxlbWVudCkuc2VsZWN0KFwiI3RleHRcIikudGV4dCh2K3RoYXQub3B0aW9ucy51bml0fHxcIlwiKX19ZDMuc2VsZWN0KHRoaXMuZWxlbWVudCkuc2VsZWN0KFwic3ZnXCIpLnJlbW92ZSgpO3ZhciB0aGF0PXRoaXM7dGhhdC5jcmVhdGVBcmNzKCk7dmFyIGRyYWdCZWhhdmlvcj1kMy5iZWhhdmlvci5kcmFnKCkub24oXCJkcmFnXCIsZHJhZ0ludGVyYWN0aW9uKS5vbihcImRyYWdlbmRcIixjbGlja0ludGVyYWN0aW9uKTt0aGF0LmRyYXdBcmNzKGNsaWNrSW50ZXJhY3Rpb24sZHJhZ0JlaGF2aW9yKSx0aGF0Lm9wdGlvbnMuYW5pbWF0ZS5lbmFibGVkP3RoYXQudmFsdWVFbGVtLnRyYW5zaXRpb24oKS5lYXNlKHRoYXQub3B0aW9ucy5hbmltYXRlLmVhc2UpLmR1cmF0aW9uKHRoYXQub3B0aW9ucy5hbmltYXRlLmR1cmF0aW9uKS50d2VlbihcIlwiLGZ1bmN0aW9uKCl7dmFyIGk9ZDMuaW50ZXJwb2xhdGUodGhhdC52YWx1ZVRvUmFkaWFucyh0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZSwzNjApLHRoYXQudmFsdWVUb1JhZGlhbnModGhhdC52YWx1ZSx0aGF0Lm9wdGlvbnMubWF4LHRoYXQub3B0aW9ucy5lbmRBbmdsZSx0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZSx0aGF0Lm9wdGlvbnMubWluKSk7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciB2YWw9aSh0KTt0aGF0LnZhbHVlRWxlbS5hdHRyKFwiZFwiLHRoYXQudmFsdWVBcmMuZW5kQW5nbGUodmFsKSksdGhhdC5jaGFuZ2VFbGVtLmF0dHIoXCJkXCIsdGhhdC5jaGFuZ2VBcmMuZW5kQW5nbGUodmFsKSl9fSk6KHRoYXQuY2hhbmdlQXJjLmVuZEFuZ2xlKHRoaXMudmFsdWVUb1JhZGlhbnModGhpcy52YWx1ZSx0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5lbmRBbmdsZSx0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMubWluKSksdGhhdC5jaGFuZ2VFbGVtLmF0dHIoXCJkXCIsdGhhdC5jaGFuZ2VBcmMpLHRoYXQudmFsdWVBcmMuZW5kQW5nbGUodGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLnZhbHVlLHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLmVuZEFuZ2xlLHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5taW4pKSx0aGF0LnZhbHVlRWxlbS5hdHRyKFwiZFwiLHRoYXQudmFsdWVBcmMpKX0sS25vYi5wcm90b3R5cGUuc2V0VmFsdWU9ZnVuY3Rpb24obmV3VmFsdWUpe2lmKCF0aGlzLmluRHJhZyYmdGhpcy52YWx1ZT49dGhpcy5vcHRpb25zLm1pbiYmdGhpcy52YWx1ZTw9dGhpcy5vcHRpb25zLm1heCl7dmFyIHJhZGlhbnM9dGhpcy52YWx1ZVRvUmFkaWFucyhuZXdWYWx1ZSx0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5lbmRBbmdsZSx0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMubWluKTtpZih0aGlzLnZhbHVlPU1hdGgucm91bmQofn4oKDA+bmV3VmFsdWU/LS41Oi41KStuZXdWYWx1ZS90aGlzLm9wdGlvbnMuc3RlcCkqdGhpcy5vcHRpb25zLnN0ZXAqMTAwKS8xMDAsdGhpcy5vcHRpb25zLnN0ZXA8MSYmKHRoaXMudmFsdWU9dGhpcy52YWx1ZS50b0ZpeGVkKDEpKSx0aGlzLmNoYW5nZUFyYy5lbmRBbmdsZShyYWRpYW5zKSxkMy5zZWxlY3QodGhpcy5lbGVtZW50KS5zZWxlY3QoXCIjY2hhbmdlQXJjXCIpLmF0dHIoXCJkXCIsdGhpcy5jaGFuZ2VBcmMpLHRoaXMudmFsdWVBcmMuZW5kQW5nbGUocmFkaWFucyksZDMuc2VsZWN0KHRoaXMuZWxlbWVudCkuc2VsZWN0KFwiI3ZhbHVlQXJjXCIpLmF0dHIoXCJkXCIsdGhpcy52YWx1ZUFyYyksdGhpcy5vcHRpb25zLmRpc3BsYXlJbnB1dCl7dmFyIHY9dGhpcy52YWx1ZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXImJih2PXRoaXMub3B0aW9ucy5pbnB1dEZvcm1hdHRlcih2KSksZDMuc2VsZWN0KHRoaXMuZWxlbWVudCkuc2VsZWN0KFwiI3RleHRcIikudGV4dCh2K3RoaXMub3B0aW9ucy51bml0fHxcIlwiKX19fSx1aS5Lbm9iPUtub2IsdWkua25vYkRpcmVjdGl2ZT1mdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVcIixzY29wZTp7dmFsdWU6XCI9XCIsb3B0aW9uczpcIj1cIn0sbGluazpmdW5jdGlvbihzY29wZSxlbGVtZW50KXtzY29wZS52YWx1ZT1zY29wZS52YWx1ZXx8MDt2YXIgZGVmYXVsdE9wdGlvbnM9e3NraW46e3R5cGU6XCJzaW1wbGVcIix3aWR0aDoxMCxjb2xvcjpcInJnYmEoMjU1LDAsMCwuNSlcIixzcGFjZVdpZHRoOjV9LGFuaW1hdGU6e2VuYWJsZWQ6ITAsZHVyYXRpb246MWUzLGVhc2U6XCJib3VuY2VcIn0sc2l6ZToyMDAsc3RhcnRBbmdsZTowLGVuZEFuZ2xlOjM2MCx1bml0OlwiXCIsZGlzcGxheUlucHV0OiEwLGlucHV0Rm9ybWF0dGVyOmZ1bmN0aW9uKHYpe3JldHVybiB2fSxyZWFkT25seTohMSx0cmFja1dpZHRoOjUwLGJhcldpZHRoOjUwLHRyYWNrQ29sb3I6XCJyZ2JhKDAsMCwwLDApXCIsYmFyQ29sb3I6XCJyZ2JhKDI1NSwwLDAsLjUpXCIscHJldkJhckNvbG9yOlwicmdiYSgwLDAsMCwwKVwiLHRleHRDb2xvcjpcIiMyMjJcIixiYXJDYXA6MCxmb250U2l6ZTpcImF1dG9cIixzdWJUZXh0OntlbmFibGVkOiExLHRleHQ6XCJcIixjb2xvcjpcImdyYXlcIixmb250OlwiYXV0b1wifSxiZ0NvbG9yOlwiXCIsc2NhbGU6e2VuYWJsZWQ6ITEsdHlwZTpcImxpbmVzXCIsY29sb3I6XCJncmF5XCIsd2lkdGg6NCxxdWFudGl0eToyMCxoZWlnaHQ6MTAsc3BhY2VXaWR0aDoxNX0sc3RlcDoxLGRpc3BsYXlQcmV2aW91czohMSxtaW46MCxtYXg6MTAwLGR5bmFtaWNPcHRpb25zOiExfTtzY29wZS5vcHRpb25zPWFuZ3VsYXIubWVyZ2UoZGVmYXVsdE9wdGlvbnMsc2NvcGUub3B0aW9ucyk7dmFyIGtub2I9bmV3IHVpLktub2IoZWxlbWVudFswXSxzY29wZS52YWx1ZSxzY29wZS5vcHRpb25zKTtpZihzY29wZS4kd2F0Y2goXCJ2YWx1ZVwiLGZ1bmN0aW9uKG5ld1ZhbHVlLG9sZFZhbHVlKXtudWxsPT09bmV3VmFsdWUmJlwidW5kZWZpbmVkXCI9PXR5cGVvZiBuZXdWYWx1ZXx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIG9sZFZhbHVlfHxuZXdWYWx1ZT09PW9sZFZhbHVlfHxrbm9iLnNldFZhbHVlKG5ld1ZhbHVlKX0pLHNjb3BlLm9wdGlvbnMuZHluYW1pY09wdGlvbnMpe3ZhciBpc0ZpcnN0V2F0Y2hPbk9wdGlvbnM9ITA7c2NvcGUuJHdhdGNoKFwib3B0aW9uc1wiLGZ1bmN0aW9uKCl7aWYoaXNGaXJzdFdhdGNoT25PcHRpb25zKWlzRmlyc3RXYXRjaE9uT3B0aW9ucz0hMTtlbHNle3ZhciBuZXdPcHRpb25zPWFuZ3VsYXIubWVyZ2UoZGVmYXVsdE9wdGlvbnMsc2NvcGUub3B0aW9ucyk7a25vYj1uZXcgdWkuS25vYihlbGVtZW50WzBdLHNjb3BlLnZhbHVlLG5ld09wdGlvbnMpLGRyYXdLbm9iKCl9fSwhMCl9dmFyIGRyYXdLbm9iPWZ1bmN0aW9uKCl7a25vYi5kcmF3KGZ1bmN0aW9uKHZhbHVlKXtzY29wZS4kYXBwbHkoZnVuY3Rpb24oKXtzY29wZS52YWx1ZT12YWx1ZX0pfSl9O2RyYXdLbm9iKCl9fX0sYW5ndWxhci5tb2R1bGUoXCJ1aS5rbm9iXCIsW10pLmRpcmVjdGl2ZShcInVpS25vYlwiLHVpLmtub2JEaXJlY3RpdmUpfSgpOyIsIid1c2Ugc3RyaWN0JztcblxuLy8gYW5ndWxhciBtb2R1bGVzXG4vLyByZXF1aXJlKCdhbmd1bGFyLW1vZHVsZS1zYW5pdGl6ZScpO1xuLy8gcmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcblxucmVxdWlyZSgnLi9jb250cm9sbGVycy9faW5kZXgnKTtcbnJlcXVpcmUoJy4vc2VydmljZXMvX2luZGV4Jyk7XG5yZXF1aXJlKCcuL21vZGVscy9faW5kZXgnKTtcbnJlcXVpcmUoJy4vZGlyZWN0aXZlcy9faW5kZXgnKTtcblxucmVxdWlyZSgnLi4vYm93ZXJfY29tcG9uZW50cy9uZy1rbm9iL2Rpc3Qvbmcta25vYi5taW4nKTtcbnJlcXVpcmUoJy4uL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1hbmltYXRlL2FuZ3VsYXItYW5pbWF0ZS5taW4nKTtcbnJlcXVpcmUoJy4uL2Jvd2VyX2NvbXBvbmVudHMvaW9uaWMtYWR2YW5jZWQtY2Fyb3VzZWwvc3JjL2FkdmFuY2VkLWNhcm91c2VsJyk7XG5cblxuXG4vLyBjcmVhdGUgYW5kIGJvb3RzdHJhcCBhcHBsaWNhdGlvblxuYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICB2YXIgcmVxdWlyZXMgPSBbXG4gICAgJ2lvbmljJyxcbiAgICAnYXBwLmNvbnRyb2xsZXJzJyxcbiAgICAnYXBwLnNlcnZpY2VzJyxcbiAgICAnYXBwLm1vZGVscycsXG4gICAgJ2FwcC5kaXJlY3RpdmVzJyxcbiAgICAndWkucm91dGVyJyxcbiAgICAndWkua25vYicsXG4gICAgJ2FDYXJvdXNlbCcsXG4gICAgJ25nQW5pbWF0ZSdcbiAgICAvLyAndGVtcGxhdGVzJyxcbiAgICAvLyAnbmdTYW5pdGl6ZScsXG4gIF07XG5cbiAgLy8gbW91bnQgb24gd2luZG93IGZvciB0ZXN0aW5nXG4gIHdpbmRvdy5hcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgcmVxdWlyZXMpO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb25zdGFudCgnQXBwU2V0dGluZ3MnLCByZXF1aXJlKCcuL2NvbnN0YW50cy5kZXZlbG9wbWVudCcpKTtcblxuICBhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29uZmlnKHJlcXVpcmUoJy4vb25fY29uZmlnJykpO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5ydW4ocmVxdWlyZSgnLi9vbl9ydW4nKSk7XG5cblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGFuZ3VsYXIuYm9vdHN0cmFwKGRvY3VtZW50LCBbJ2FwcCddKTsgICBcbiAgfSwgKDEwMDApKTtcbiAgXG5cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFwcFNldHRpbmdzID0ge1xuICB5b2NhbEFQSTp7XG4gICAgLy8gYmFzZTogJ2h0dHA6Ly95b2VuZHBvaW50NC13YmJzLnJoY2xvdWQuY29tL2FwaS92MS95b2thbC9kYXRhLydcbiAgICBiYXNlOiAnaHR0cDovL2xvY2FsaG9zdDo4MTAwL2FwaS92MS95b2thbC9kYXRhLydcbiAgfSxcblxuICBHTUFQX0RFRkFVTFQ6e1xuICBcdFJBRElVUzogODAwLFxuICBcdFpPT006ICAgMTQsXG4gIFx0VEhFTUU6e1xuICBcdFx0bGlnaHQ6W3tcImZlYXR1cmVUeXBlXCI6XCJwb2lcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wic3R5bGVyc1wiOlt7XCJzYXR1cmF0aW9uXCI6LTcwfSx7XCJsaWdodG5lc3NcIjozN30se1wiZ2FtbWFcIjoxLjE1fV19LHtcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHNcIixcInN0eWxlcnNcIjpbe1wiZ2FtbWFcIjowLjI2fSx7XCJ2aXNpYmlsaXR5XCI6XCJvZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZFwiLFwic3R5bGVyc1wiOlt7XCJsaWdodG5lc3NcIjowfSx7XCJzYXR1cmF0aW9uXCI6MH0se1wiaHVlXCI6XCIjZmZmZmZmXCJ9LHtcImdhbW1hXCI6MH1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZFwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVscy50ZXh0LnN0cm9rZVwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZC5hcnRlcmlhbFwiLFwiZWxlbWVudFR5cGVcIjpcImdlb21ldHJ5XCIsXCJzdHlsZXJzXCI6W3tcImxpZ2h0bmVzc1wiOjIwfV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmhpZ2h3YXlcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeVwiLFwic3R5bGVyc1wiOlt7XCJsaWdodG5lc3NcIjo1MH0se1wic2F0dXJhdGlvblwiOjB9LHtcImh1ZVwiOlwiI2ZmZmZmZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZS5wcm92aW5jZVwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvblwifSx7XCJsaWdodG5lc3NcIjotNTB9XX0se1wiZmVhdHVyZVR5cGVcIjpcImFkbWluaXN0cmF0aXZlLnByb3ZpbmNlXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9mZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZS5wcm92aW5jZVwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVscy50ZXh0XCIsXCJzdHlsZXJzXCI6W3tcImxpZ2h0bmVzc1wiOjIwfV19XVxuICBcdH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBTZXR0aW5nczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEFwcEN0cmwoJGxvZywgJHJvb3RTY29wZSwgJHNjb3BlLCAkaW9uaWNNb2RhbCwgJHRpbWVvdXQsIGNvb3JkaW5hdGVzLCBBcHBTZXR0aW5ncykge1xuXG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdBcHBDdHJsJyk7XG5cbiAgdmFyIHZtID0gdGhpcztcbiAgLy8gc2V0IGN1cmVudCBwb3NpdGlvbiB0byByb290U2NvcGUgdG8gbWFrZSBnbG9iYWxseSBhdmFpbGFibGUgXG4gICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uID0gY29vcmRpbmF0ZXM7XG4gIFxuXG4gIC8vIEZvcm0gZGF0YSBmb3IgdGhlIGxvZ2luIG1vZGFsXG4gICRzY29wZS5sb2dpbkRhdGEgPSB7fTtcblxuICAvLyBDcmVhdGUgdGhlIGxvZ2luIG1vZGFsIHRoYXQgd2Ugd2lsbCB1c2UgbGF0ZXJcbiAgJGlvbmljTW9kYWwuZnJvbVRlbXBsYXRlVXJsKCd0ZW1wbGF0ZXMvbG9naW4uaHRtbCcsIHtcbiAgICBzY29wZTogJHNjb3BlXG4gIH0pLnRoZW4oZnVuY3Rpb24obW9kYWwpIHtcbiAgICAkc2NvcGUubW9kYWwgPSBtb2RhbDtcbiAgfSk7XG5cbiAgLy8gVHJpZ2dlcmVkIGluIHRoZSBsb2dpbiBtb2RhbCB0byBjbG9zZSBpdFxuICAkc2NvcGUuY2xvc2VMb2dpbiA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5tb2RhbC5oaWRlKCk7XG4gIH07XG5cbiAgLy8gT3BlbiB0aGUgbG9naW4gbW9kYWxcbiAgJHNjb3BlLmxvZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLm1vZGFsLnNob3coKTtcbiAgfTtcblxuICAvLyBQZXJmb3JtIHRoZSBsb2dpbiBhY3Rpb24gd2hlbiB0aGUgdXNlciBzdWJtaXRzIHRoZSBsb2dpbiBmb3JtXG4gICRzY29wZS5kb0xvZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ0RvaW5nIGxvZ2luJywgJHNjb3BlLmxvZ2luRGF0YSk7XG5cbiAgICAvLyBTaW11bGF0ZSBhIGxvZ2luIGRlbGF5LiBSZW1vdmUgdGhpcyBhbmQgcmVwbGFjZSB3aXRoIHlvdXIgbG9naW5cbiAgICAvLyBjb2RlIGlmIHVzaW5nIGEgbG9naW4gc3lzdGVtXG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAkc2NvcGUuY2xvc2VMb2dpbigpO1xuICAgIH0sIDEwMDApO1xuICB9O1xuXG4gIFxuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdBcHBDdHJsJywgQXBwQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBCcm93c2VDdHJsKCRzY29wZSwgJHJvb3RTY29wZSwgJHEsICRodHRwLCAkbG9nLCAkZmlsdGVyLCAkdGltZW91dCwgTG9jYXRpb25zU2VydmljZSwgICRpb25pY0xvYWRpbmcsICAkaW9uaWNTbGlkZUJveERlbGVnYXRlLCBBcHBTZXR0aW5ncykge1xuICAgICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdCcm93c2VDdHJsJyk7XG5cbiBcdC8vIFZpZXdNb2RlbFxuICBcdHZhciB2bSA9IHRoaXM7XG4gICAgdm0ucmFkaXVzID0gQXBwU2V0dGluZ3MuR01BUF9SQURJVVM7XG4gICAgJHNjb3BlLnJhZGl1cyA9IEFwcFNldHRpbmdzLkdNQVBfUkFESVVTO1xuICAgICRzY29wZS5DdXJyZW50Q29vcmRzID0gICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uO1xuXG4gICAgJHNjb3BlLmxvY2F0aW9ucyA9W107XG4gICAgJHNjb3BlLmxvY2F0aW9uc19ncm91cHMgPVtdO1xuICAgICRzY29wZS5sb2NhdGlvbnNfbG9hZGVkID0gMDsgXG4gICAgJHNjb3BlLmNhcm91c2VscyA9IFtdO1xuXG4gICAgJGlvbmljTG9hZGluZy5zaG93KHtcbiAgICAgICAgdGVtcGxhdGU6IFwiRmluZGluZyBSYWQgU3BvdHMgLi4uXCIsXG4gICAgICAgIGJhY2tkcm9wOiB0cnVlXG4gICAgfSk7XG5cbiAgICAkc2NvcGUuY2Fyb3VzZWxPcHRpb25zID0ge1xuICAgICAgICB0ZW1wbGF0ZSAgICAgIDogJy4uL3RlbXBsYXRlcy9sb2NhdGlvbnMtY2Fyb3VzZWwuaXRlbS5odG1sJywgLy8gdGVtcGxhdGVVcmwgaW4gY2FzZSB5b3UgZG9uJ3QgbmVlZCB0byBwYXNzIGEgZGlyZWN0aXZlIGJ1dCBqdXN0IGEgaHRtbCB2aWV3XG4gICAgICAgIGFsaWduICAgICAgICAgOiAnbGVmdCcsIC8vIGFsaWduZW1lbnQgb2YgdGhlIGNhcm91c2VsXG4gICAgICAgIHNlbGVjdEZpcnN0ICAgOiB0cnVlLFxuICAgICAgICBjZW50ZXJPblNlbGVjdDogZmFsc2UsIC8vIGNlbnRlciBjYXJvdXNlbCB3aGVuIGFuIGl0ZW0gaXMgc2VsZWN0ZWRcbiAgICB9O1xuXG4gICAgJHNjb3BlLm9uU2VsZWN0Q2Fyb3VzZWwgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBjYXQgPSAkc2NvcGUuZ2V0X2NhdGVnb3J5X3NsdWcoaXRlbS5jYXRhZ29yeWxldmVsMSk7XG4gICAgICAgICRsb2cubG9nKCdDYXJvdXNlbCAnK2NhdCsnIGl0ZW0gc2VsZWN0ZWQ6e25hbWV9JywgaXRlbSk7XG4gICAgICAgICRzY29wZS5jYXJvdXNlbHNbY2F0XS5pdGVtU2VsZWN0ZWQgPSBpdGVtO1xuICAgIH07XG5cbiAgICAkc2NvcGUucmFuZG9FeHBlbnNlV2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKzEpOyAgXG4gICAgfTtcbiAgICBcbiAgICAkc2NvcGUuZ2V0X2NhdGVnb3J5X3NsdWcgPSBmdW5jdGlvbiAoY2F0X25hbWUpIHtcbiAgICAgICAgcmV0dXJuIGNhdF9uYW1lLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uKGNhdCkgeyByZXR1cm4gY2F0LnRvTG93ZXJDYXNlKCkudHJpbSgpOyB9KS5qb2luKCctJyk7XG4gICAgfVxuXG4gICAgTG9jYXRpb25zU2VydmljZS5hbGwoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvY2F0aW9ucyA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdyb3VwIGxvY2F0aW9ucyBieSBjYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IHRyYXZlbFRpbWUgZm9yIGVhY2ggbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBjYXJvdXNlbE9wdGlvbnMgZm9yIGVhY2ggY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2NhdGlvbnNfZ3JvdXBzID0gXy5jaGFpbihkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ncm91cEJ5KFwiY2F0YWdvcnlsZXZlbDFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGxvY2F0aW9ucywgY2F0LCBhcnJheSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9ucy5tYXAoZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2NhdGlvbnNfbG9hZGVkKys7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwxMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeV9zbHVnOiAkc2NvcGUuZ2V0X2NhdGVnb3J5X3NsdWcoY2F0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uczogbG9jYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGNhdGVnb3J5X29iaikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYXRlZ29yeV9vYmo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgnbG9jYXRpb25zX2xvYWRlZCcsZnVuY3Rpb24obmV3X3ZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG5ld192YWwgPT0gZGF0YS5sZW5ndGgpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvcnQgbG9jYXRpb24gZ3JvdXBzIGFscGFoYmV0aWNhbGx5IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzb3J0IGdyb3VwIGxvY2F0aW9ucyBieSB0cmF2ZWxUaW1lLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2NhdGlvbnNfZ3JvdXBzX3NvcnRlZCA9IF8uY2hhaW4oJHNjb3BlLmxvY2F0aW9uc19ncm91cHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNvcnRlZF9sb2NhdGlvbnMgPSAkZmlsdGVyKCdvcmRlckJ5JykoZ3JvdXAubG9jYXRpb25zLCAndHJhdmVsVGltZS52YWx1ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyLmV4dGVuZCh7fSxncm91cCwge2xvY2F0aW9uczpzb3J0ZWRfbG9jYXRpb25zfSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0QnkoJ2NhdGVnb3J5JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24oY2F0ZWdvcnlfb2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmNhcm91c2Vsc1tjYXRlZ29yeV9vYmouY2F0ZWdvcnlfc2x1Z10gPSBhbmd1bGFyLmV4dGVuZCh7fSwge2Nhcm91c2VsSWQ6ICdsb2NhdGlvbnMtY2Fyb3VzZWwtJytjYXRlZ29yeV9vYmouY2F0ZWdvcnlfc2x1ZywgaXRlbVNlbGVjdGVkOl8uZmlyc3QoY2F0ZWdvcnlfb2JqLmxvY2F0aW9ucyl9LCAkc2NvcGUuY2Fyb3VzZWxPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2F0ZWdvcnlfb2JqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW9uaWNMb2FkaW5nLmhpZGUoKTsgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgIFx0ICAgICAgICAgICAgICAgIH0pO1xuXG5cblxufTtcblxuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdCcm93c2VDdHJsJywgQnJvd3NlQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBDb25uZWN0Q3RybCgkbG9nLCAkcm9vdFNjb3BlLCAkc2NvcGUsIEFwcFNldHRpbmdzKSB7XG5cbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0Nvbm5lY3RDdHJsJyk7XG5cbiAgdmFyIHZtID0gdGhpcztcblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignQ29ubmVjdEN0cmwnLCBDb25uZWN0Q3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBMb2dpbkN0cmwoJGxvZywgJHJvb3RTY29wZSwgJHNjb3BlLCBBcHBTZXR0aW5ncykge1xuXG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdMb2dpbkN0cmwnKTtcblxuICB2YXIgdm0gPSB0aGlzO1xuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBMb2dpbkN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gTWFwQ3RybCgkcm9vdFNjb3BlLCAkc2NvcGUsICR0aW1lb3V0LCAkbG9nLCAkaW9uaWNMb2FkaW5nLCBBcHBTZXR0aW5ncywgR01hcCwgTG9jYXRpb25zU2VydmljZSwgJGlvbmljU2xpZGVCb3hEZWxlZ2F0ZSkge1xuXG4gICAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoXCJNYXBDdHJsXCIpO1xuXG4gXHQgIC8vIFZpZXdNb2RlbFxuICBcdHZhciB2bSA9IHRoaXM7XG4gICAgdmFyIGN1cnJlbnRDZW50ZXIgPSAkcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbjtcblxuICAgIHZtLnRoaXNfcmFkaXVzID0gNTAwMDtcblxuICAgIHZtLmdtYXAgPSBuZXcgR01hcCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB6b29tOiAgIDEzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogdm0udGhpc19yYWRpdXMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBBcHBTZXR0aW5ncy5HTUFQX0RFRkFVTFQuVEhFTUUubGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICB9KTsgICAgXG5cblxuICAgIHZtLmdtYXAuaGVpZ2h0ID0gNTc1LFxuICAgIHZtLmdtYXAubG9jYXRpb25Gb2N1c2VkID0gZmFsc2U7XG4gICAgdm0uZ21hcC5tYXJrZXJzID0gW107XG4gICAgdm0uZ21hcC5yb3V0ZXMgPSBbXTsgIFxuICAgICAvLyBkcm9wIG1hcmtlciBvbiBjdXJyZW50IHBvc2l0aW9uXG4gICAgdm0uZ21hcC5kcm9wTWFya2VyKHtcbiAgICAgICAgICAgICAgbWFwOiAgICB2bS5nbWFwLm1hcCxcbiAgICAgICAgICAgICAgY2VudGVyOiB7bGF0OiBjdXJyZW50Q2VudGVyLmxhdGl0dWRlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgbG5nOiBjdXJyZW50Q2VudGVyLmxvbmdpdHVkZSB9LFxuICAgICAgICAgICAgICBvcGFjaXR5OjEsXG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICBcbiAgICB2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UgPSBbXTtcbiAgICB2bS5sb2NhdGlvbnNfY2F0ZWdvcmllcyA9IHtcbiAgICAgIGRpc3RhbmNlOiA4MCxcbiAgICAgIGN1cnJlbnQ6ICBudWxsLFxuICAgICAgbGlzdDogW1xuICAgICAgICAgICAgICB7bmFtZTogJ0FydHMnfSxcbiAgICAgICAgICAgICAge25hbWU6ICdEcmluayd9LFxuICAgICAgICAgICAgICB7bmFtZTogJ0Zvb2QnfVxuICAgICAgICAgICAgXVxuICAgIH07XG4gICAgXG5cblxuICAgIHZtLmtub2IgPXsgXG4gICAgICAgICAgICAgIG9wdGlvbnM6eyAgXG4gICAgICAgICAgICAgICAgZHluYW1pY09wdGlvbnM6IHRydWUgXG4gICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9O1xuXG5cblxuICAgIHZtLnNsaWRlciA9e1xuICAgICAgc2hvd246ICAgZmFsc2UsXG4gICAgICBtZXRhOntcbiAgICAgICAgY2F0ZWdvcnk6ICAgICAnJyxcbiAgICAgICAgdHJhdmVsVGltZTogICAnJyxcbiAgICAgICAgbmVpZ2hib3Job29kOiAnJ1xuICAgICAgfSxcbiAgICAgIGFjdGl2ZVNsaWRlOnt9XG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKHZtLnNsaWRlcilcblxuXG5cblxuICB2bS5sb2FkX2NhdGVnb3J5ID0gZnVuY3Rpb24oY2F0ZWdvcnkpIHtcbiAgICAgICRsb2cubG9nKCdsb2FkX2NhdGVnb3J5OiB7bmFtZX0nLGNhdGVnb3J5KTtcbiAgICAgIFxuICAgICAgdm0uZ21hcC5tYXAuc2V0T3B0aW9ucyh7c3R5bGVzOm51bGx9KTtcblxuICAgICAgJGlvbmljTG9hZGluZy5zaG93KHtcbiAgICAgICAgdGVtcGxhdGU6IFwiRXhwbG9yaW5nIFlvdXIgQXJlYSAuLi5cIixcbiAgICAgICAgYmFja2Ryb3A6IHRydWVcbiAgICAgIH0pO1xuXG5cbiAgICAgIC8vIGdldCBhbGwgbG9jYXRpb25zIGFyb3VuZCBzcGVjaWZpZWQgYXJlYVxuICAgICAgTG9jYXRpb25zU2VydmljZVxuICAgICAgICAuZ2V0KHtcbiAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgICAgIHJhZGl1czogICB2bS50aGlzX3JhZGl1cywgXG4gICAgICAgICAgICAgIGxhdDogICAgICBjdXJyZW50Q2VudGVyLmxhdGl0dWRlLCBcbiAgICAgICAgICAgICAgbG5nOiAgICAgIGN1cnJlbnRDZW50ZXIubG9uZ2l0dWRlXG4gICAgICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihsb2NhdGlvbnMpIHtcbiAgICAgICAgICB2bS5sb2NhdGlvbnNfY2F0ZWdvcmllcy5kaXN0YW5jZSA9IDA7XG4gICAgICAgICAgdm0ubG9jYXRpb25zX2xvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgICB2bS5sb2NhdGlvbnNfY2F0ZWdvcmllcy5jdXJyZW50ID0gY2F0ZWdvcnkubmFtZTtcblxuICAgICAgICAgIC8vIHNvcnQgbG9jYXRpb25zIGJ5IGRpc3RuYWNlIFxuICAgICAgICAgIHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZSA9IF8uc29ydEJ5KGxvY2F0aW9ucywgJ2Rpc3RhbmNlZnJvbWxvY2F0aW9uJyk7XG5cbiAgICAgICAgICAvLyBzZXQgYWxsIG1hcmtlcnMgb24gbWFwXG4gICAgICAgICAgc2V0TWFya2Vycyh2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UpOyAgXG5cbiAgICAgICAgICAvLyBzZXQgdGhlIGxvY2F0aW9ucyByYWRpdXMgYW5kIGtub2IgdmFsdWUgdG8gdGhlIGNsb3NlcyBsb2N0aW9uIHRvIHRlc3RcbiAgICAgICAgICB2bS50aGlzX3JhZGl1cyA9IF8uZmlyc3Qodm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlKS5kaXN0YW5jZWZyb21sb2NhdGlvbisxMDA7XG4gICAgICAgICAgdm0ubG9jYXRpb25zUmFkaXVzID0gdm0uZ21hcC5zZXRSYWRpdXNDaXJjbGUoe3JhZGl1czogdm0udGhpc19yYWRpdXN9KTtcbiAgICAgICAgICB2bS5nbWFwLm1hcC5maXRCb3VuZHModm0ubG9jYXRpb25zUmFkaXVzLmdldEJvdW5kcygpKTtcbiAgICAgICAgICBcbiAgICAgICAgICBzZXRLbm9iVmFsdWUodm0udGhpc19yYWRpdXMsIF8uZmlyc3Qodm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlKS5kaXN0YW5jZWZyb21sb2NhdGlvbiwgXy5sYXN0KHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZSkuZGlzdGFuY2Vmcm9tbG9jYXRpb24pO1xuICAgICAgICAgIHZtLmxvY2F0aW9uc19sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgIFxuICAgICAgICAgICRpb25pY0xvYWRpbmcuaGlkZSgpO1xuICAgICAgICAgICRpb25pY1NsaWRlQm94RGVsZWdhdGUudXBkYXRlKCk7XG4gICAgICAgIH0pOy8vZW5kIC50aGVuXG5cblxuICAgIH0vLy8vZW5kIHZtLmxvYWRfY2F0ZWdvcnlcblxuXG4gICAgJHNjb3BlLnNsaWRlSGFzQ2hhbmdlZCA9IGZ1bmN0aW9uKGluZHgpIHtcbiAgICAgICAgJGxvZy5sb2coXCJpb24tc2xpZGUtYm94OnNsaWRlSGFzQ2hhbmdlZDpcIitpbmR4KTtcbiAgICAgICAgXG4gICAgICAgIHZhciBzbGlkZXJfbG9jYXRpb24gPSB2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2VbaW5keF07XG4gICAgICAgIC8vc2V0IGFjdGl2ZSBzbGlkZVxuICAgICAgICB2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UubWFwKGZ1bmN0aW9uKGxvY2F0aW9uKSB7IGxvY2F0aW9uLmlzQWN0aXZlID0gZmFsc2U7IHJldHVybiBsb2NhdGlvbjt9KTtcbiAgICAgICAgc2xpZGVyX2xvY2F0aW9uLmlzQWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICBzaG93Um91dGVUbyhzbGlkZXJfbG9jYXRpb24pO1xuICAgICAgICBmaXRJbk1hcFZpZXcoc2xpZGVyX2xvY2F0aW9uKTtcbiAgICAgICAgdm0ua25vYi52YWx1ZSA9IHNsaWRlcl9sb2NhdGlvbi5kaXN0YW5jZWZyb21sb2NhdGlvbjtcbiAgICAgICAgdm0uc2xpZGVyID0ge1xuICAgICAgICAgIHNob3duOiAgICB0cnVlLFxuICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICBtZXRhOiAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICAgICBzbGlkZXJfbG9jYXRpb24uY2F0YWdvcnlsZXZlbDEsXG4gICAgICAgICAgICB0cmF2ZWxUaW1lOiAgIHNsaWRlcl9sb2NhdGlvbi50cmF2ZWxUaW1lLFxuICAgICAgICAgICAgbmVpZ2hib3Job29kOiBzbGlkZXJfbG9jYXRpb24ubmVpZ2hib3Job29kXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICB9Oy8vICAkc2NvcGUuc2xpZGVIYXNDaGFuZ2VkXG5cblxuICAgIFxuXG5cbiAgICBcbiAgICB2YXIgc2V0S25vYlZhbHVlID0gZnVuY3Rpb24odmFsLG1pbiwgbWF4KSB7XG4gICAgICAvLyBzZXQgdWkua25vYiBvcHRpb25zIGhlcmVcbiAgICAgIC8vIHRoaXMgdHJpY2tzIHRoZSBrbm9iIGludG8gdXBkYXRpbmcgdGhlIHZhbHVlIGNvcnJlY3RseVxuICAgICAgICAgIHZtLmtub2IgPXtcbiAgICAgICAgICAgICAgdmFsdWU6dmFsLFxuICAgICAgICAgICAgICBvcHRpb25zOntcbiAgICAgICAgICAgICAgICBkaXNwbGF5SW5wdXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNpemU6ICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICAgIG1pbjogICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICAgIG1heDogICAgICAgICAgbWF4LFxuICAgICAgICAgICAgICAgIHN0ZXA6ICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICBiYXJDb2xvcjogICAgICcjNUJDMDFFJyxcbiAgICAgICAgICAgICAgICB0cmFja0NvbG9yOiAgICcjMjEyMTIxJyxcbiAgICAgICAgICAgICAgICB0cmFja1dpZHRoOiAgIDUsXG4gICAgICAgICAgICAgICAgYmFyV2lkdGg6ICAgICAyMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdm0ua25vYjtcbiAgICB9O1xuXG4gICAgXG4gICAgdmFyIHNob3dNYXJrZXJGb3IgPSBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgJGxvZy5sb2coXCJzaG93TWFya2VyRm9yOntuYW1lfVwiLCBsb2NhdGlvbik7XG4gICAgICB2YXIgc2hvd25NYXJrZXIgPSB2bS5nbWFwLm1hcmtlcnNbbG9jYXRpb24uX2lkXTtcbiAgICAgIHNob3duTWFya2VyLnNldE9wYWNpdHkoMSk7XG4gICAgICBzaG93bk1hcmtlci5zZXRDbGlja2FibGUodHJ1ZSk7XG4gICAgICByZXR1cm4gc2hvd25NYXJrZXI7IFxuICAgIH0vL3Nob3dNYXJrZXJGb3JcblxuXG4gICAgdmFyIGhpZGVNYXJrZXJGb3IgPSBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgJGxvZy5sb2coXCJoaWRlTWFya2VyRm9yOntuYW1lfVwiLCBsb2NhdGlvbik7XG4gICAgICB2YXIgaGlkZGVuTWFya2VyID0gdm0uZ21hcC5tYXJrZXJzW2xvY2F0aW9uLl9pZF07XG4gICAgICBoaWRkZW5NYXJrZXIuc2V0T3BhY2l0eSgwKTtcbiAgICAgIGhpZGRlbk1hcmtlci5zZXRDbGlja2FibGUoZmFsc2UpO1xuICAgICAgcmV0dXJuIGhpZGRlbk1hcmtlcjtcbiAgICB9Ly9oaWRlTWFya2VyRm9yXG5cblxuICAgIHZhciBzZXRNYXJrZXJzID0gZnVuY3Rpb24obG9jYXRpb25zKSB7XG4gICAgICBsb2NhdGlvbnMubWFwKGZ1bmN0aW9uKGxvY2F0ZSl7XG4gICAgICAgICAgICB2YXIgbWFya2VyID0gdm0uZ21hcC5kcm9wTWFya2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogcGFyc2VGbG9hdChsb2NhdGUubGF0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHBhcnNlRmxvYXQobG9jYXRlLmxvbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICAgICBsb2NhdGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcDogICAgICAgdm0uZ21hcC5tYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdCgnbWFya2VyOmNsaWNrZWQnLCBsb2NhdGUpO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2bS5nbWFwLm1hcmtlcnNbbG9jYXRlLl9pZF0gPSBtYXJrZXI7XG4gICAgXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZtLm1hcmtlcnM7XG4gICAgfTsvL3NldE1hcmtlcnNcblxuXG5cbiAgICB2YXIgY2xlYXJGcm9tTWFwID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAkbG9nLmxvZygnY2xlYXJGcm9tTWFwJyk7XG4gICAgICByZXR1cm4gb2JqLnNldE1hcChudWxsKTtcbiAgICB9Ly9jbGVhckZyb21NYXBcblxuXG5cbiAgICB2YXIgc2hvd1JvdXRlVG8gPSBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgJGxvZy5sb2coJ3Nob3dSb3V0ZVRvO3tuYW1lfScsIGxvY2F0aW9uKTtcbiAgICAgIC8vIGNsZWFyIGFsbCByb3V0ZXNcbiAgICAgIHZtLmdtYXAucm91dGVzLm1hcChjbGVhckZyb21NYXApO1xuICAgICAgdm0ubG9jYXRpb25zUmFkaXVzLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgdm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlLm1hcChoaWRlTWFya2VyRm9yKTtcblxuICAgICAgdmFyIG1hcmtlciA9IHNob3dNYXJrZXJGb3IobG9jYXRpb24pO1xuXG4gICAgICB2YXIgcm91dGUgPSB2bS5nbWFwLnBsb3RSb3V0ZVRvKGxvY2F0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZ21hcC5yb3V0ZXMucHVzaChyb3V0ZSk7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICR0aW1lb3V0KGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIC8vIGlmKHZtLmdtYXAubWFwLnpvb20gPCAxMyApdm0uZ21hcC5tYXAuc2V0Wm9vbSgxMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB2YXIgbWFya2VyUG9zID0gdm0uZ21hcC5nZXRQaXhlbFBvc2l0aW9uKG1hcmtlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB2YXIgcG9zRnJvbVRvcCA9ICh2bS5nbWFwLmhlaWdodCAtIG1hcmtlclBvcy55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHZhciBwYW5ZID0gcG9zRnJvbVRvcCAtIChwb3NGcm9tVG9wKjAuNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB2bS5nbWFwLm1hcC5wYW5CeSgwLCBNYXRoLmFicyhwYW5ZKSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sNDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfS8vIHNob3dSb3V0ZVRvXG4gICAgXG4gICAgICAgIFxuXG4gICAgdmFyIGZpdEluTWFwVmlldyA9IGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgICBpZihsb2NhdGlvbikgdm0ubG9jYXRpb25zUmFkaXVzLnNldFJhZGl1cyhsb2NhdGlvbi5kaXN0YW5jZWZyb21sb2NhdGlvbik7XG4gICAgICAvLyBHZXQgdGhlIGJvdW5kc1xuICAgICAgdmFyIGNpcmNsZUJvdW5kcyA9IHZtLmxvY2F0aW9uc1JhZGl1cy5nZXRCb3VuZHMoKTtcbiAgICAgIHZhciBtYXBCb3VuZHMgPSB2bS5nbWFwLm1hcC5nZXRCb3VuZHMoKTtcblxuICAgICAgdmFyIG5lID0gY2lyY2xlQm91bmRzLmdldE5vcnRoRWFzdCgpOyAvLyBMYXRMbmcgb2YgdGhlIG5vcnRoLWVhc3QgY29ybmVyXG4gICAgICB2YXIgc3cgPSBjaXJjbGVCb3VuZHMuZ2V0U291dGhXZXN0KCk7XG4gICAgICB2YXIgbncgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG5lLmxhdCgpLCBzdy5sbmcoKSk7XG4gICAgICB2YXIgc2UgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHN3LmxhdCgpLCBuZS5sbmcoKSk7XG4gICAgICAgICAgICAgIFxuICAgICAgdmFyIExhdExuZ0xpc3QgPSBuZXcgQXJyYXkgKG53LCBzZSk7XG5cbiAgICAgICAgICAgICAgXG4gICAgICBpZighbWFwQm91bmRzLmNvbnRhaW5zKG5lKSl7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBMdExnTGVuID0gTGF0TG5nTGlzdC5sZW5ndGg7IGkgPCBMdExnTGVuOyBpKyspIHtcbiAgICAgICAgICAvLyAgQW5kIGluY3JlYXNlIHRoZSBib3VuZHMgdG8gdGFrZSB0aGlzIHBvaW50XG4gICAgICAgICAgbWFwQm91bmRzLmV4dGVuZChMYXRMbmdMaXN0W2ldKTtcbiAgICAgICAgfVxuICAgICAgICB2bS5nbWFwLm1hcC5maXRCb3VuZHMobWFwQm91bmRzKTtcbiAgICAgIH1lbHNle1xuICAgICAgICB2bS5nbWFwLm1hcC5maXRCb3VuZHMoY2lyY2xlQm91bmRzKTtcbiAgICAgIH1cbiAgICBcbiAgICB9Ly9maXRJbk1hcFZpZXdcbiAgICBcblxuXG4gICAgXG5cblxuICAgIFxuXG5cbiAgICAgICAgLy8gd2F0Y2ggZm9yIHRoZSB1aSBrbm9iIHZhbHVlIHRvIHVwZGF0ZVxuICAgICAgICAgJHNjb3BlLiR3YXRjaChcIk1hcC5rbm9iLnZhbHVlXCIsIGZ1bmN0aW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJuZXcgTWFwLmtub2IudmFsdWU6IFwiK25ld1ZhbHVlKTtcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwib2xkIE1hcC5rbm9iLnZhbHVlOiBcIitvbGRWYWx1ZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHZtLmxvY2F0aW9uc1JhZGl1cyl7XG4gICAgICAgICAgICAgIHZtLmxvY2F0aW9uc1JhZGl1cy5zZXRSYWRpdXMobmV3VmFsdWUpO1xuICAgICAgICAgICAgICB2bS5sb2NhdGlvbnNSYWRpdXMuc2V0VmlzaWJsZSh0cnVlKTsgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2bS5nbWFwLmhlaWdodCA9IDU3NTtcbiAgICAgICAgICAgIHZtLmdtYXAubG9jYXRpb25Gb2N1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICB2bS5nbWFwLnJvdXRlcy5tYXAoY2xlYXJGcm9tTWFwKTtcbiAgICAgICAgICAgIGlmKHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZS5sZW5ndGgpIHZtLmdtYXAubWFwLnNldE9wdGlvbnMoe3N0eWxlczogbnVsbH0pO1xuXG4gICAgICAgICAgICB2bS5zbGlkZXIuc2hvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBpZih2bS5sb2NhdGlvbnNSYWRpdXMpIGZpdEluTWFwVmlldygpO1xuXG4gICAgICAgICAgICAvLyBzaG93L3JldmVhbCBsb2NhdGlvbnMgaW5zaWRlIHJhZGl1c1xuICAgICAgICAgICAgdm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlLm1hcChmdW5jdGlvbihsb2NhdGUpe1xuICAgICAgICAgICAgICAgICAgaWYoIGxvY2F0ZS5kaXN0YW5jZWZyb21sb2NhdGlvbiA8IG5ld1ZhbHVlICl7XG4gICAgICAgICAgICAgICAgICAgIHNob3dNYXJrZXJGb3IobG9jYXRlKTtcbiAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZU1hcmtlckZvcihsb2NhdGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7Ly92bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UubWFwXG5cblxuICAgICAgICB9KTsvLy8kc2NvcGUuJHdhdGNoIFwiTWFwLmtub2IudmFsdWVcIlxuXG5cblxuXG4gICAgICAkc2NvcGUuJG9uKFwibWFya2VyOmNsaWNrZWRcIiwgZnVuY3Rpb24oZSwgbWFya2VyKSB7XG4gICAgICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgIFxuICAgICAgICAgICRsb2cubG9nKFwibWFya2VyOmNsaWNrZWQgLSB7bmFtZX1cIiwgbWFya2VyKTtcbiAgICAgICAgXG4gICAgICAgICAgdm0uZ21hcC5tYXAuc2V0T3B0aW9ucyh7c3R5bGVzOiBBcHBTZXR0aW5ncy5HTUFQX0RFRkFVTFQuVEhFTUUubGlnaHR9KTtcblxuICAgICAgICAgIHZtLmdtYXAubG9jYXRpb25Gb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgICB2bS5nbWFwLmhlaWdodCA9IDM1MDtcbiAgICAgICAgICB2bS5zbGlkZXIgPSB7XG4gICAgICAgICAgICBzaG93bjogdHJ1ZSxcbiAgICAgICAgICAgIG1ldGE6e1xuICAgICAgICAgICAgICBjYXRlZ29yeTogICAgIG1hcmtlci5jYXRhZ29yeWxldmVsMSxcbiAgICAgICAgICAgICAgdHJhdmVsVGltZTogICBtYXJrZXIudHJhdmVsVGltZSxcbiAgICAgICAgICAgICAgbmVpZ2hib3Job29kOiBtYXJrZXIubmVpZ2hib3Job29kXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgICRpb25pY1NsaWRlQm94RGVsZWdhdGUuc2xpZGUoXy5pbmRleE9mKHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZSwgbWFya2VyKSk7XG5cbiAgICAgICAgICBzaG93Um91dGVUbyhtYXJrZXIpO1xuICAgICAgICAgIGZpdEluTWFwVmlldygpO1xuXG4gICAgICB9KTtcbiAgICB9KTsvLyAkc2NvcGUuJG9uIFwibWFya2VyOmNsaWNrZWRcIlxuICAgICAgXG5cblxufTsvLy8vIE1hcEN0cmxcblxuXG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ01hcEN0cmwnLCBNYXBDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIFBsYXlsaXN0Q3RybCgkc2NvcGUpIHtcbiAgXG5cblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignUGxheWxpc3RDdHJsJywgUGxheWxpc3RDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIFBsYXlsaXN0c0N0cmwoJHNjb3BlKSB7XG4gIFxuICRzY29wZS5wbGF5bGlzdHMgPSBbXG4gICAgeyB0aXRsZTogJ1JlZ2dhZScsIGlkOiAxIH0sXG4gICAgeyB0aXRsZTogJ0NoaWxsJywgaWQ6IDIgfSxcbiAgICB7IHRpdGxlOiAnRHVic3RlcCcsIGlkOiAzIH0sXG4gICAgeyB0aXRsZTogJ0luZGllJywgaWQ6IDQgfSxcbiAgICB7IHRpdGxlOiAnUmFwJywgaWQ6IDUgfSxcbiAgICB7IHRpdGxlOiAnQ293YmVsbCcsIGlkOiA2IH1cbiAgXTtcblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignUGxheWxpc3RzQ3RybCcsIFBsYXlsaXN0c0N0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbnRyb2xsZXJzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmRpcmVjdGl2ZXMnLCBbXSk7XG5cbmJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqX2luZGV4fCouc3BlYykuanMnXSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGlyZWN0aXZlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIG1BcHBMb2FkaW5nKCRsb2csICRhbmltYXRlKXtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoIFwibUFwcExvYWRpbmdcIiApO1xuICBcblxuICAvLyBSdW5zIGR1cmluZyBjb21waWxlXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICAgICdDJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cmlidXRlcywgY29udHJvbGxlciwgdHJhbnNjbHVkZUZuKSB7XG4gICAgICRhbmltYXRlLmxlYXZlKCBcbiAgICAgXHRlbGVtZW50LmNoaWxkcmVuKCkuZXEoIDEgKVxuICAgICBcdCkudGhlbihcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsZWFudXBBZnRlckFuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIFx0JGxvZy5sb2coJ2NsZWFudXBBZnRlckFuaW1hdGlvbicpO1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcm9vdCBkaXJlY3RpdmUgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIC8vIENsZWFyIHRoZSBjbG9zZWQtb3ZlciB2YXJpYWJsZSByZWZlcmVuY2VzLlxuICAgICAgICAgICAgICAgIHNjb3BlID0gZWxlbWVudCA9IGF0dHJpYnV0ZXMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgfVxuICB9XG5cblxufTtcblxuXG5kaXJlY3RpdmVzTW9kdWxlLmRpcmVjdGl2ZSgnbUFwcExvYWRpbmcnLCBtQXBwTG9hZGluZyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbW9kZWxzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiovXG5cbm1vZGVsc01vZHVsZS5mYWN0b3J5KCdHTWFwJywgZnVuY3Rpb24oJGxvZywgJHJvb3RTY29wZSwgJHEsIExvY2F0aW9uc1NlcnZpY2UsIEFwcFNldHRpbmdzKXtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0dNYXAnKTtcblxuICB2YXIgY3VycmVudENlbnRlciA9ICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uO1xuXG5cblxuICBmdW5jdGlvbiBHTWFwKG1hcFNldHRpbmdzKXtcbiAgICBcbiAgICB0aGlzLm1hcE9wdGlvbnMgPSB7XG4gICAgICBjZW50ZXI6ICAgIHtsYXQ6IGN1cnJlbnRDZW50ZXIubGF0aXR1ZGUsIFxuICAgICAgICAgICAgICAgICAgbG5nOiBjdXJyZW50Q2VudGVyLmxvbmdpdHVkZX0sXG4gICAgICB6b29tOiAgICAgIEFwcFNldHRpbmdzLkdNQVBfREVGQVVMVC5aT09NLFxuICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCxcbiAgICAgIHJhZGl1czogICAgQXBwU2V0dGluZ3MuR01BUF9ERUZBVUxULlJBRElVUyxcbiAgICB9O1xuXG4gICAgYW5ndWxhci5leHRlbmQodGhpcy5tYXBPcHRpb25zLCBtYXBTZXR0aW5ncyk7XG4gICAgXG4gICAgJGxvZy5kZWJ1Zygnem9vbSB7bWFwT3B0aW9ucy56b29tfScsIHRoaXMpO1xuICAgIFxuICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1hcFwiKSwgdGhpcy5tYXBPcHRpb25zKTtcbiAgICBcbiB9Oy8vR01hcCBjb25zdHJ1Y3RvclxuXG5cblxuXG4gIEdNYXAucHJvdG90eXBlID17XG5cbiAgICBkcm9wTWFya2VyOiBmdW5jdGlvbihtYXJrZXJEYXRhKSB7XG4gICAgICB2YXIgX21hcmtlclNldHRpbmdzID0ge307XG4gICAgICBhbmd1bGFyLmV4dGVuZChfbWFya2VyU2V0dGluZ3MsIHRoaXMubWFwT3B0aW9ucywgbWFya2VyRGF0YSk7XG4gICAgICAkbG9nLmRlYnVnKCdkcm9wTWFya2VyIGZvciBcInt0aXRsZX1cIlwiIGF0IFwie2NlbnRlci5sYXR9LCB7Y2VudGVyLmxuZ31cIicsIF9tYXJrZXJTZXR0aW5ncyk7XG5cbiAgICAgIHZhciBfbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogIF9tYXJrZXJTZXR0aW5ncy5jZW50ZXIsXG4gICAgICAgICAgICBtYXA6ICAgICAgIF9tYXJrZXJTZXR0aW5ncy5tYXAsXG4gICAgICAgICAgICB0aXRsZTogICAgIF9tYXJrZXJTZXR0aW5ncy50aXRsZSxcbiAgICAgICAgICAgIG9wYWNpdHk6ICAgX21hcmtlclNldHRpbmdzLm9wYWNpdHksXG4gICAgICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QXG4gICAgICB9KTtcblxuICAgICAgIFxuICAgICAgcmV0dXJuIF9tYXJrZXI7XG4gICAgfSxcblxuXG4gICAgYnVpbGRJbmZvV2luZG93OiBmdW5jdGlvbihsb2NhdGlvbkluZm8sIGxvY2F0aW9uTWFya2VyKSB7XG4gICAgICB2YXIgX21hcCA9IHRoaXM7XG5cbiAgICAgICRsb2cuZGVidWcoJ2J1aWxkSW5mb1dpbmRvdyBmb3Ige25hbWV9JywgbG9jYXRpb25JbmZvKTtcbiAgICAgIHZhciBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnPGgzIGlkPVwiZmlyc3RIZWFkaW5nXCIgY2xhc3M9XCJmaXJzdEhlYWRpbmdcIj4nK2xvY2F0aW9uSW5mby5uYW1lKyc8L2gzPicrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8cD4nK2xvY2F0aW9uSW5mby50cmF2ZWxUaW1lLnRleHQrJyB3YWxrPC9wPicrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c21hbGw+Jytsb2NhdGlvbkluZm8uZGlzdGFuY2Vmcm9tbG9jYXRpb24rJzwvc21hbGw+J1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGxvY2F0aW9uTWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgLy8gICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ21hcmtlcjpjbGlja2VkJywgbG9jYXRpb25JbmZvICk7XG4gICAgICAvLyAgIGluZm93aW5kb3cub3BlbiggX21hcC5tYXAgLGxvY2F0aW9uTWFya2VyKTtcbiAgICAgIC8vIH0pO1xuXG4gICAgICByZXR1cm4gaW5mb3dpbmRvdztcbiAgICB9LFxuXG5cbiAgICBnZXRQaXhlbFBvc2l0aW9uOiBmdW5jdGlvbiAobWFya2VyKSB7XG4gICAgICAgIHZhciBfbWFwID0gdGhpcy5tYXA7XG4gICAgICAgIHZhciBzY2FsZSA9IE1hdGgucG93KDIsIF9tYXAuZ2V0Wm9vbSgpKTtcbiAgICAgICAgdmFyIG53ID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhcbiAgICAgICAgICAgIF9tYXAuZ2V0Qm91bmRzKCkuZ2V0Tm9ydGhFYXN0KCkubGF0KCksXG4gICAgICAgICAgICBfbWFwLmdldEJvdW5kcygpLmdldFNvdXRoV2VzdCgpLmxuZygpXG4gICAgICAgICk7XG4gICAgICAgIHZhciB3b3JsZENvb3JkaW5hdGVOVyA9IF9tYXAuZ2V0UHJvamVjdGlvbigpLmZyb21MYXRMbmdUb1BvaW50KG53KTtcbiAgICAgICAgdmFyIHdvcmxkQ29vcmRpbmF0ZSA9IF9tYXAuZ2V0UHJvamVjdGlvbigpLmZyb21MYXRMbmdUb1BvaW50KG1hcmtlci5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgdmFyIHBpeGVsT2Zmc2V0ID0gbmV3IGdvb2dsZS5tYXBzLlBvaW50KFxuICAgICAgICAgICAgTWF0aC5mbG9vcigod29ybGRDb29yZGluYXRlLnggLSB3b3JsZENvb3JkaW5hdGVOVy54KSAqIHNjYWxlKSxcbiAgICAgICAgICAgIE1hdGguZmxvb3IoKHdvcmxkQ29vcmRpbmF0ZS55IC0gd29ybGRDb29yZGluYXRlTlcueSkgKiBzY2FsZSlcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gcGl4ZWxPZmZzZXQ7XG4gICAgfSxcblxuICAgIHBsb3RSb3V0ZVRvOiBmdW5jdGlvbihsb2NhdGlvbil7XG4gICAgICAkbG9nLmRlYnVnKCdwbG90Um91dGVUbyB7bmFtZX0nLGxvY2F0aW9uKTtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICB2YXIgX21hcCA9IHRoaXM7XG4gICAgICB2YXIgX3JvdXRlU2V0dGluZ3MgPSB7XG4gICAgICAgICAgICBkcmFnZ2FibGU6ICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIHN1cHByZXNzSW5mb1dpbmRvd3M6IHRydWUsXG4gICAgICAgICAgICBzdXBwcmVzc01hcmtlcnM6ICAgICB0cnVlLFxuICAgICAgICAgICAgb3JpZ2luOiAgICAgICAgICAgICAgX21hcC5tYXBPcHRpb25zLmNlbnRlclxuICAgICAgfTtcblxuICAgICAgYW5ndWxhci5leHRlbmQoX3JvdXRlU2V0dGluZ3MsIHRoaXMubWFwT3B0aW9ucyk7XG5cbiAgICAgIHZhciBkaXJlY3Rpb25zRGlzcGxheSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIoe1xuICAgICAgICAgICAgbWFwOiAgICAgICAgICAgICAgICAgX21hcC5tYXAsXG4gICAgICAgICAgICBkcmFnZ2FibGU6ICAgICAgICAgICBfcm91dGVTZXR0aW5ncy5kcmFnZ2FibGUsXG4gICAgICAgICAgICBzdXBwcmVzc0luZm9XaW5kb3dzOiBfcm91dGVTZXR0aW5ncy5zdXBwcmVzc0luZm9XaW5kb3dzLFxuICAgICAgICAgICAgc3VwcHJlc3NNYXJrZXJzOiAgICAgX3JvdXRlU2V0dGluZ3Muc3VwcHJlc3NNYXJrZXJzLFxuICAgICAgICAgICAgLy8gcHJlc2VydmVWaWV3cG9ydDogdHJ1ZVxuICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiB7bGF0OiBwYXJzZUZsb2F0KGxvY2F0aW9uLmxhdCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHBhcnNlRmxvYXQobG9jYXRpb24ubG9uZyl9LFxuICAgICAgICAgICAgb3JpZ2luOiAgICAgIF9yb3V0ZVNldHRpbmdzLm9yaWdpbixcbiAgICAgICAgICAgIHRyYXZlbE1vZGU6ICBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLldBTEtJTkcsXG4gICAgICAgICAgICBwcm92aWRlUm91dGVBbHRlcm5hdGl2ZXM6IGZhbHNlLFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpOy8vIFBhc3MgdGhlIGRpcmVjdGlvbnMgcmVxdWVzdCB0byB0aGUgZGlyZWN0aW9ucyBzZXJ2aWNlLlxuXG5cbiAgICAgICAgICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShyZXF1ZXN0LCBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xuICAgICAgICAgICAgICAvLyBEaXNwbGF5IHRoZSByb3V0ZSBvbiB0aGUgbWFwLlxuICAgICAgICAgICAgICByZXNwb25zZS5yZW5kZXJlciA9IGRpcmVjdGlvbnNEaXNwbGF5O1xuICAgICAgICAgICAgICBkaXJlY3Rpb25zRGlzcGxheS5zZXREaXJlY3Rpb25zKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkaXJlY3Rpb25zRGlzcGxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7Ly8vZGlyZWN0aW9zU2VydmljZS5yb3V0ZVxuXG4gICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG5cblxuICAgIH0sXG5cbiAgICBzZXRSYWRpdXNDaXJjbGU6IGZ1bmN0aW9uKHJhZGl1c0NpcmNsZVNldHRpbmdzKSB7XG4gICAgICB2YXIgX21hcCA9IHRoaXM7XG4gICAgICB2YXIgX2NpcmNsZVNldHRpbmdzID17XG4gICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAgICcjMDA4NGI0JyxcbiAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogMC44LFxuICAgICAgICAgICAgICBzdHJva2VXZWlnaHQ6ICAxLFxuICAgICAgICAgICAgICBmaWxsQ29sb3I6ICAgICAnIzAwODRiNCcsXG4gICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAgIDAuMDYyNSxcbiAgICAgIH07XG5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKF9jaXJjbGVTZXR0aW5ncyAsdGhpcy5tYXBPcHRpb25zLCByYWRpdXNDaXJjbGVTZXR0aW5ncyk7XG5cbiAgICAgIHZhciBsb2NhdGlvbnNDaXJjbGUgPSBuZXcgZ29vZ2xlLm1hcHMuQ2lyY2xlKHtcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogICBfY2lyY2xlU2V0dGluZ3Muc3Ryb2tlQ29sb3IsXG4gICAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogX2NpcmNsZVNldHRpbmdzLnN0cm9rZU9wYWNpdHksXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2VpZ2h0OiAgX2NpcmNsZVNldHRpbmdzLnN0cm9rZVdlaWdodCxcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3I6ICAgICBfY2lyY2xlU2V0dGluZ3MuZmlsbENvbG9yLFxuICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAgIF9jaXJjbGVTZXR0aW5ncy5maWxsT3BhY2l0eSxcbiAgICAgICAgICAgICAgICBtYXA6ICAgICAgICAgICBfbWFwLm1hcCxcbiAgICAgICAgICAgICAgICBjZW50ZXI6ICAgICAgICBfY2lyY2xlU2V0dGluZ3MuY2VudGVyLFxuICAgICAgICAgICAgICAgIHJhZGl1czogICAgICAgIF9jaXJjbGVTZXR0aW5ncy5yYWRpdXNcbiAgICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxvY2F0aW9uc0NpcmNsZTtcbiAgICB9XG5cbiAgfTtcbiAgICBcblxuXG4gIHJldHVybiBHTWFwO1xuXG4gIFxufSk7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1vZGVsc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbm1vZGVsc01vZHVsZS5mYWN0b3J5KCdMb2NhdGlvbicsIGZ1bmN0aW9uKCRyb290U2NvcGUsICRsb2csICRxICkge1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnTG9jYXRpb24nKTtcblxuICBmdW5jdGlvbiBMb2NhdGlvbihMb2NhdGlvbkRhdGEpe1xuICAgIGFuZ3VsYXIuZXh0ZW5kKHRoaXMsIExvY2F0aW9uRGF0YSk7XG4gICAgJGxvZy5kZWJ1Zygne25hbWV9JywgdGhpcyk7XG4gIH1cblxuXG4gIExvY2F0aW9uLnJlc3BvbnNlVHJhbnNmb3JtZXIgPSBmdW5jdGlvbiAocmVzcG9uc2VEYXRhKSB7XG4gICAgJGxvZy5kZWJ1ZygncmVzb3BvbnNlVHJhbnNmb3JtZXIge2xlbmd0aH0nLCByZXNwb25zZURhdGEubG9jYXRpb25zKTtcbiAgICBcbiAgICBpZihyZXNwb25zZURhdGEubG9jYXRpb25zKXtcbiAgICAgIFxuICAgICAgdmFyIHBvcHVsYXRlZF9sb2NhdGlvbnMgPSBbXTtcblxuICAgICAgcmVzcG9uc2VEYXRhLmxvY2F0aW9uc1xuICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IG5ldyBMb2NhdGlvbihkYXRhKTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZWRfbG9jYXRpb25zLnB1c2gobG9jYXRpb24uc2V0VHJhdmVsVGltZSgpKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBvcHVsYXRlZF9sb2NhdGlvbnM7XG4gICAgfVxuXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhLm1hcChMb2NhdGlvbi5idWlsZCk7ICBcblxuICAgIFxuICB9XG5cblxuICBMb2NhdGlvbi5wcm90b3R5cGUuc2V0VHJhdmVsVGltZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgJGxvZy5kZWJ1Zygnc2V0VHJhdmVsVGltZSB7bmFtZX0nLCB0aGlzKTtcbiAgICAgIFxuICAgICAgdmFyIF9sb2NhdGlvbiA9IHRoaXM7XG4gICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICB2YXIgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXN0YW5jZU1hdHJpeFNlcnZpY2U7XG4gICAgICAgc2VydmljZS5nZXREaXN0YW5jZU1hdHJpeCh7XG4gICAgICAgICBvcmlnaW5zOiAgICAgICBbe2xhdDogJHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb24ubGF0aXR1ZGUsIGxuZzokcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbi5sb25naXR1ZGV9XSxcbiAgICAgICAgIGRlc3RpbmF0aW9uczogIFt7bGF0OiBwYXJzZUZsb2F0KHRoaXMubGF0KSwgbG5nOiBwYXJzZUZsb2F0KHRoaXMubG9uZyl9XSxcbiAgICAgICAgIHRyYXZlbE1vZGU6ICAgIGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuV0FMS0lORyxcbiAgICAgICAgIHVuaXRTeXN0ZW06ICAgIGdvb2dsZS5tYXBzLlVuaXRTeXN0ZW0uSU1QRVJJQUwsXG4gICAgICAgICBhdm9pZEhpZ2h3YXlzOiBmYWxzZSxcbiAgICAgICAgIGF2b2lkVG9sbHM6ICAgIGZhbHNlXG4gICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cykge1xuICAgICAgICAgXHRfbG9jYXRpb24udHJhdmVsVGltZSA9IHJlc3BvbnNlLnJvd3NbMF0uZWxlbWVudHNbMF0uZHVyYXRpb247XG4gICAgICAgICAgX2xvY2F0aW9uLmRpc3RhbmNlID0gcmVzcG9uc2Uucm93c1swXS5lbGVtZW50c1swXS5kaXN0YW5jZTtcbiAgICAgICAgIFx0ZGVmZXJyZWQucmVzb2x2ZShfbG9jYXRpb24pO1xuICAgICAgICAgLy8gJGxvZy5kZWJ1ZyhcIntuYW1lfSAtIHt0cmF2ZWxUaW1lfVwiLCBfbG9jYXRpb24pO1xuICAgICAgICAgIFxuICAgICAgIH0pO1xuXG4gICAgICAgXG4gICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG5cbiAgfVxuXG5cbiAgTG9jYXRpb24uYnVpbGQgPSBmdW5jdGlvbihsRGF0YSkge1xuICAgICRsb2cuZGVidWcoJ2J1aWxkIHtuYW1lfScsIGxEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gbmV3IExvY2F0aW9uKGxEYXRhKTtcbiAgfVxuXG4gICBcblxuICBcbiBcbiAgcmV0dXJuIExvY2F0aW9uO1xuXG5cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLm1vZGVscycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTsiLCIndXNlIHN0cmljdCc7XG5cblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gT25Db25maWcoJHN0YXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRwcm92aWRlKSB7XG4gIFxuICAvL2FjdGl2YXRlIExvZ0RlY29yYXRvclxuICByZXF1aXJlKCcuL3V0aWxzL2xvZ2dpbmcvTG9nRGVjb3JhdG9yLmpzJykoJHByb3ZpZGUpO1xuXG4kc3RhdGVQcm92aWRlclxuXG4gIC5zdGF0ZSgnYXBwJywge1xuICAgIHVybDogJy9hcHAnLFxuICAgIGFic3RyYWN0OiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL21lbnUuaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ0FwcEN0cmwnLFxuICAgIHJlc29sdmU6e1xuICAgICAgICBjb29yZGluYXRlczpmdW5jdGlvbihDdXJyZW50Q29vcmRzLCAkdGltZW91dCkge1xuICAgICAgICAgICAgcmV0dXJuIEN1cnJlbnRDb29yZHMuZ2V0KCk7ICBcbiAgICAgICAgfVxuICAgIH1cbiAgfSlcbiAgLnN0YXRlKCdhcHAuY29ubmVjdCcsIHtcbiAgICB1cmw6ICcvY29ubmVjdCcsXG4gICAgdmlld3M6IHtcbiAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvY29ubmVjdC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0Nvbm5lY3RDdHJsIGFzIENvbm5lY3QnXG4gICAgICB9XG4gICAgfVxuICB9IClcblxuICAuc3RhdGUoJ2FwcC5sb2dpbicsIHtcbiAgICB1cmw6ICcvbG9naW4nLFxuICAgIHZpZXdzOiB7XG4gICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2xvZ2luLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTG9naW5DdHJsIGFzIExnbidcbiAgICAgIH1cbiAgICB9XG4gIH0gKVxuICBcbiAgLnN0YXRlKCdhcHAuYnJvd3NlJywge1xuICAgIHVybDogJy9icm93c2UnLFxuICAgIHZpZXdzOiB7XG4gICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2Jyb3dzZS5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0Jyb3dzZUN0cmwnXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIFxuICAuc3RhdGUoJ2FwcC5tYXAnLCB7XG4gICAgICB1cmw6ICcvbWFwJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9tYXAuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ01hcEN0cmwgYXMgTWFwJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG5cblxuICAvLyBpZiBub25lIG9mIHRoZSBhYm92ZSBzdGF0ZXMgYXJlIG1hdGNoZWQsIHVzZSB0aGlzIGFzIHRoZSBmYWxsYmFja1xuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvYXBwL21hcCcpO1xuICBcbiAgXG5cblxufS8vLy8gT25Db25maWdcblxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uQ29uZmlnOyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gT25SdW4oJGlvbmljUGxhdGZvcm0sICRsb2csICRhbmltYXRlKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdPblJ1bicpO1xuICAgXG4gICRpb25pY1BsYXRmb3JtLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICRhbmltYXRlLmVuYWJsZWQodHJ1ZSk7XG4gICAgXG4gICAgLy8gSGlkZSB0aGUgYWNjZXNzb3J5IGJhciBieSBkZWZhdWx0IChyZW1vdmUgdGhpcyB0byBzaG93IHRoZSBhY2Nlc3NvcnkgYmFyIGFib3ZlIHRoZSBrZXlib2FyZFxuICAgIC8vIGZvciBmb3JtIGlucHV0cylcbiAgICBpZiAod2luZG93LmNvcmRvdmEgJiYgd2luZG93LmNvcmRvdmEucGx1Z2lucy5LZXlib2FyZCkge1xuICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmhpZGVLZXlib2FyZEFjY2Vzc29yeUJhcih0cnVlKTtcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5kaXNhYmxlU2Nyb2xsKHRydWUpO1xuXG4gICAgfVxuICAgIGlmICh3aW5kb3cuU3RhdHVzQmFyKSB7XG4gICAgICAvLyBvcmcuYXBhY2hlLmNvcmRvdmEuc3RhdHVzYmFyIHJlcXVpcmVkXG4gICAgICBTdGF0dXNCYXIuc3R5bGVEZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPblJ1bjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEN1cnJlbnRDb29yZHMoJHEsICRodHRwLCAkbG9nLCAgQXBwU2V0dGluZ3MpIHtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoXCJDdXJyZW50Q29vcmRzU2VydmljZVwiKTtcbiAgXG4gIHZhciBzZXJ2aWNlID0ge307XG5cbiAgc2VydmljZS5nZXQgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7ICAgIFxuXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbihwb3MpIHtcbiAgICAgICRsb2cuZGVidWcoJ2xhdDoge2Nvb3Jkcy5sYXRpdHVkZX0nLHBvcyk7XG4gICAgICAkbG9nLmRlYnVnKCdsb25nOiB7Y29vcmRzLmxvbmdpdHVkZX0nLHBvcyk7XG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKHBvcy5jb29yZHMpO1xuICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAkbG9nLndhcm4oJ1VuYWJsZSB0byBnZXQgbG9jYXRpb246ICcgKyBlcnJvcik7XG4gICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yLCBzdGF0dXMpO1xuICAgfSk7XG4gICAgXG4gIFxuICAgIFxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ0N1cnJlbnRDb29yZHMnLCBDdXJyZW50Q29vcmRzKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIExvY2F0aW9uc1NlcnZpY2UoJGxvZywgWW9jYWwsIExvY2F0aW9uLCAkcSkge1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZShcIkxvY2F0aW9uc1NlcnZpY2VTZXJ2aWNlXCIpO1xuXG4gIHZhciBzZXJ2aWNlID0ge307XG4gIFxuXG4gIHNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24oIGdldERhdGEgKSB7XG5cbiAgICAkbG9nLmRlYnVnKCdHRVQgbG9jYXRpb24gaW4gYSB7cmFkaXVzfSAgb2Yge2xhdH0sIHtsbmd9JywgZ2V0RGF0YSk7XG5cbiAgICByZXR1cm4gWW9jYWwuZ2V0KGdldERhdGEpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgICAvLyBvbmx5IHJldHVybiBsb2NhdGlvbnMgd2hlbiB0aGV5IGhhdmUgQUxMXG4gICAgICAgICAgICAgICAgICAvLyBiZWVuIHBvcHVsYXRlZCB3aXRoIHRyYXZlbFRpbWVzXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJHEuYWxsKExvY2F0aW9uLnJlc3BvbnNlVHJhbnNmb3JtZXIoZGF0YSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuXG4gIH07XG5cbiAgc2VydmljZS5hbGwgPSBmdW5jdGlvbiggZ2V0RGF0YSApIHtcblxuICAgICRsb2cuZGVidWcoJ0FMTCcpO1xuXG4gICAgcmV0dXJuIFlvY2FsLmFsbCgpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgICAvLyBvbmx5IHJldHVybiBsb2NhdGlvbnMgd2hlbiB0aGV5IGhhdmUgQUxMXG4gICAgICAgICAgICAgICAgICAvLyBiZWVuIHBvcHVsYXRlZCB3aXRoIHRyYXZlbFRpbWVzXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJHEuYWxsKExvY2F0aW9uLnJlc3BvbnNlVHJhbnNmb3JtZXIoZGF0YSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gIH07XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cbn1cblxuc2VydmljZXNNb2R1bGUuc2VydmljZSgnTG9jYXRpb25zU2VydmljZScsIExvY2F0aW9uc1NlcnZpY2UpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNlcnZpY2VzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gWW9jYWwoJHEsICRodHRwLCBBcHBTZXR0aW5ncywgJGxvZykge1xuXG4gIHZhciBzZXJ2aWNlID0ge307XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKFwiWW9jYWxTZXJ2aWNlXCIpO1xuXG4gICBcblxuIFxuXG4gIHNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24oIGdldERhdGEgKSB7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgIC8vIGxpc3RCeURpc3RhbmNlQ2F0L0Zvb2QvODAwMC8zOS45Mzc4OTMvLTc1LjE2ODkzNDdcbiAgICRodHRwLmdldChBcHBTZXR0aW5ncy55b2NhbEFQSS5iYXNlKycvbGlzdEJ5RGlzdGFuY2VDYXQvJytnZXREYXRhLmNhdGVnb3J5KycvJytnZXREYXRhLnJhZGl1cysnLycrZ2V0RGF0YS5sYXQrJy8nK2dldERhdGEubG5nKVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZygnZm91bmQge2xlbmd0aH0gJytnZXREYXRhLmNhdGVnb3J5Kycgc3BvdHMgd2l0aGluICcrZ2V0RGF0YS5yYWRpdXMrJyBtZXRlcnMgb2YgJytnZXREYXRhLmxhdCsnLCcrZ2V0RGF0YS5sbmcsIGRhdGEubG9jYXRpb25zKTtcbiAgICAgICAgICBkYXRhLnJhZGl1cyA9IGdldERhdGEucmFkaXVzO1xuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihlcnIsIHN0YXR1cykge1xuICAgICAgICAgICRsb2cud2FybignVW5hYmxlIHRvIGdldCBsb2NhdGlvbjogJyArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyLCBzdGF0dXMpO1xuICAgICAgICB9KTtcbiAgIFxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIHNlcnZpY2UuYWxsID0gZnVuY3Rpb24oZ2V0RGF0YSl7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgIC8vbGlzdEJ5RGlzdGFuY2VDYXQvRm9vZC84MDAwLzM5LjkzNzg5My8tNzUuMTY4OTM0N1xuICAgJGh0dHAuZ2V0KEFwcFNldHRpbmdzLnlvY2FsQVBJLmJhc2UrJy9saXN0JylcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoJ2FsbDogZm91bmQge2xlbmd0aH0gdG90YWwgc3BvdHMnLCBkYXRhKTtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpIHtcbiAgICAgICAgICAkbG9nLndhcm4oJ1VuYWJsZSB0byBnZXQgbG9jYXRpb246ICcgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVyciwgc3RhdHVzKTtcbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcblxuICB9XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cbn1cblxuc2VydmljZXNNb2R1bGUuc2VydmljZSgnWW9jYWwnLCBZb2NhbCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYnVsayA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuc2VydmljZXMnLCBbXSk7XG5cbmJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqX2luZGV4fCouc3BlYykuanMnXSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2VydmljZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBFeGFtcGxlU2VydmljZSgkcSwgJGh0dHApIHtcblxuICB2YXIgc2VydmljZSA9IHt9O1xuXG4gIHNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICRodHRwLmdldCgnYXBpUGF0aCcpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgIH0pLmVycm9yKGZ1bmN0aW9uKGVyciwgc3RhdHVzKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIsIHN0YXR1cyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfTtcblxuICByZXR1cm4gc2VydmljZTtcblxufVxuXG5zZXJ2aWNlc01vZHVsZS5zZXJ2aWNlKCdFeGFtcGxlU2VydmljZScsIEV4YW1wbGVTZXJ2aWNlKTsiLCIvKipcbiAqIEBhdXRob3IgICAgIFRob21hcyBCdXJsZXNvblxuICogQGF1dGhvciAgICAgU3RhY2tPdmVyZmxvdyAtIEhhcnRvLCBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzMTU0MDgvaG93LWRvLWktZm9ybWF0LWEtdGltZXN0YW1wLWluLWphdmFzY3JpcHQtdG8tZGlzcGxheS1pdC1pbi1ncmFwaHMtdXRjLWlzLWZpbmVcbiAqIEBkZXNjcmlwdGlvblxuICogIFxuICogRGF0ZVRpbWUgdXRpbGl0eSBjbGFzcyB0aGF0IHNwaXRzIG91dCBVVEMgdGltZXN0YW1wIHN0cmluZ3MgdXN1YWxseSB1c2VkIGluIGEgcmVwb3J0aW5nLCBwcmludC1jYXBhYmxlIHByb2Nlc3MuXG4qL1xuIFxuXG4gJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBidWlsZFRpbWVTdHJpbmcgPSBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0KVxuICAgICAgICB7XG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgXCIlaDolbTolczolelwiO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBwYWQodmFsdWUsIGlzTWlsbGlTZWNvbmRzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiAoaXNNaWxsaVNlY29uZHMpID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNaWxsaVNlY29uZHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoaXNNaWxsaVNlY29uZHMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZSA8IDEwKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiMDBcIiArIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodmFsdWUgPCAxMDApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCIwXCIgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4odmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPCAyKSA/IFwiMFwiICsgdmFsdWUgOiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdC5yZXBsYWNlKC8lKFthLXpBLVpdKS9nLCBmdW5jdGlvbiAoXywgZm10Q29kZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2goZm10Q29kZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIllcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRIb3VycygpKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TWludXRlcygpKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0U2Vjb25kcygpKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwielwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIHRydWUpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGZvcm1hdCBjb2RlOiBcIiArIGZtdENvZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG5cbiAvLyBQdWJsaXNoIEFQSSBmb3IgRGF0ZVRpbWUgdXRpbHNcbiAgICAgICAgLy8gcmV0dXJuIHtcbiAgICAgICAgLy8gICAgIGZvcm1hdHRlZE5vdzogZnVuY3Rpb24gKClcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gYnVpbGRUaW1lU3RyaW5nKG5ldyBEYXRlKCkpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9O1xuICAgICAgICAvLyBcbiBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmb3JtYXR0ZWROb3c6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJ1aWxkVGltZVN0cmluZyhuZXcgRGF0ZSgpKTsgfVxuIH07XG5cblxuXG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIExvZ0RlY29yYXRvclxuICogIEBzb3VyY2U6IGh0dHA6Ly9zb2x1dGlvbm9wdGltaXN0LmNvbS8yMDEzLzEwLzA3L2VuaGFuY2UtYW5ndWxhcmpzLWxvZ2dpbmctdXNpbmctZGVjb3JhdG9ycy9cbiAqL1xuXG4gdmFyIExvZ0RlY29yYXRvciA9IGZ1bmN0aW9uKCAkcHJvdmlkZSAgKXtcblxuXG4gICAgICAgICAgICAgIC8vIFJlZ2lzdGVyIG91ciAkbG9nIGRlY29yYXRvciB3aXRoIEFuZ3VsYXJKUyAkcHJvdmlkZXJcbiAgICAgICAgICAgICAgJHByb3ZpZGUuZGVjb3JhdG9yKCAnJGxvZycsIFsgXCIkZGVsZWdhdGVcIiwgZnVuY3Rpb24oICRkZWxlZ2F0ZSApXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIC8vIE5PVEU6IHRoZSBMb2dFbmNoYW5jZXIgbW9kdWxlIHJldHVybnMgYSBGVU5DVElPTiB0aGF0IHdlIG5hbWVkIGBlbmNoYW5jZUxvZ2dlckZuYFxuICAgICAgICAgICAgICAgLy8gICAgICAgQWxsIHRoZSBkZXRhaWxzIG9mIGhvdyB0aGUgYGVuY2hhbmNlbWVudGAgd29ya3MgaXMgZW5jYXBzdWxhdGVkIGluIExvZ0VuaGFuY2VyIVxuXG4gICAgICAgICAgICAgICAgICByZXF1aXJlKCcuL0xvZ0VuaGFuY2VyLmpzJykoICRkZWxlZ2F0ZSApO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJGRlbGVnYXRlO1xuICAgICAgICAgICAgICB9XSk7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gIExvZ0RlY29yYXRvcjsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIExvZ0VuaGFuY2VyXG4gKiBUaGlzIGFkZHMgdGltZXN0YW1wcyBhbmQgc3VwcGxhbnQgZnVuY3Rpb25hbGl0eSB0byBBbmd1bGFyICRsb2cgc2VydmljZVxuICogQHNvdXJjZTogaHR0cDovL3NvbHV0aW9ub3B0aW1pc3QuY29tLzIwMTMvMTAvMDcvZW5oYW5jZS1hbmd1bGFyanMtbG9nZ2luZy11c2luZy1kZWNvcmF0b3JzL1xuICogQGFwaTogcHVibGljXG4gKiBAcmV0dXJuczogT2JqZWN0IC0gZXh0ZW5kZWQgJGxvZyBzZXJ2aWNlXG4gKi9cblxudmFyIGVuY2hhbmNlTG9nZ2VyID0gZnVuY3Rpb24oICRsb2cgKXtcbiAgdmFyIHN1cHBsYW50ID0gcmVxdWlyZSgnLi4vc3VwcGxhbnQuanMnKTtcbiAgdmFyIERhdGVUaW1lID0gcmVxdWlyZSgnLi4vRGF0ZVRpbWUuanMnKTtcblxuXG4gIC8qKlxuICAgKiBDYXB0dXJlIHRoZSBvcmlnaW5hbCAkbG9nIGZ1bmN0aW9uczsgZm9yIHVzZSBpbiBlbmhhbmNlZExvZ0ZuKClcbiAgICogQGFwaSAgcHJpdmF0ZSBcbiAgICovXG4gIFxuICB2YXIgXyRsb2cgPSAoZnVuY3Rpb24oICRsb2cgKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvZyAgIDogJGxvZy5sb2csXG4gICAgICAgIGluZm8gIDogJGxvZy5pbmZvLFxuICAgICAgICB3YXJuICA6ICRsb2cud2FybixcbiAgICAgICAgZGVidWcgOiAkbG9nLmRlYnVnLFxuICAgICAgICBlcnJvciA6ICRsb2cuZXJyb3JcbiAgICAgIH07XG4gIH0pKCAkbG9nICk7IFxuXG5cblxuICAgLyoqXG4gICAgKiBQYXJ0aWFsIGFwcGxpY2F0aW9uIHRvIHByZS1jYXB0dXJlIGEgbG9nZ2VyIGZ1bmN0aW9uXG4gICAgKiBAYXBpOiAgcHJpdmF0ZSBcbiAgICAqIEByZXR1cm5zOiBGdW5jdGlvbiBcbiAgICAqL1xuICAgIHZhciBwcmVwYXJlTG9nRm4gPSBmdW5jdGlvbiggbG9nRm4sIGNsYXNzTmFtZSApe1xuXG4gICAgICAvKipcbiAgICAgICAqIEludm9rZSB0aGUgc3BlY2lmaWVkIGBsb2dGbjxgIHdpdGggdGhlIHN1cHBsYW50IGZ1bmN0aW9uYWxpdHkuLi5cbiAgICAgICAqIEBhcGk6IHByaXZhdGUgXG4gICAgICAgKiBAZXhhbXBsZTogXG4gICAgICAgKiAgIHZhciB1c2VyID0geyB3aG86XCJUaG9tYXMgQnVybGVzb25cIlwiLCBlbWFpbD1cIlRob21hc0J1cmxlc29uQGdtYWlsLmNvbVwiXCIgfTtcbiAgICAgICAqICAgJGxvZy53YXJuKCBcIkEgd2FybmluZyBtZXNzYWdlIGZvciBge3dob31gIHdpbGwgYmUgc2VudCB0byBge2VtYWlsfWAgIVwiLCB1c2VyICk7ICAgXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzaG91bGQgb3V0cHV0OiBBIHdhcm5pbmcgbWVzc2FnZSBmb3IgYFRob21hcyBCdXJsZXNvbmAgd2lsbCBiZSBzZW50IHRvIGBUaG9tYXNCdXJsZXNvbkBnbWFpbC5jb21gICFcbiAgICAgICAqL1xuICAgICAgdmFyIGVuaGFuY2VkTG9nRm4gPSBmdW5jdGlvbiggKXtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgICAgbm93ICA9IERhdGVUaW1lLmZvcm1hdHRlZE5vdygpO1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJyc7XG4gICAgICAgICAgICAvLyBwcmVwZW5kIGEgdGltZXN0YW1wIHRvIHRoZSBvcmlnaW5hbCBvdXRwdXQgbWVzc2FnZVxuICAgICAgICAgICAgYXJnc1swXSA9IHN1cHBsYW50KFwiezB9IC0gezF9ezJ9XCIsIFsgbm93LCBjbGFzc05hbWUsIGFyZ3NbMF0gXSk7XG5cbiAgICAgICAgbG9nRm4uY2FsbCggbnVsbCwgIHN1cHBsYW50LmFwcGx5KCBudWxsLCBhcmdzICkgKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIFNwZWNpYWwuLi4gb25seSBuZWVkZWQgdG8gc3VwcG9ydCBhbmd1bGFyLW1vY2tzIGV4cGVjdGF0aW9uc1xuICAgICAgZW5oYW5jZWRMb2dGbi5sb2dzID0gWyBdO1xuIFxuICAgICAgcmV0dXJuIGVuaGFuY2VkTG9nRm47XG4gICAgICBcbiAgICB9O1xuXG5cblxuXG4gICAgLyoqXG4gICAgICogU3VwcG9ydCB0byBnZW5lcmF0ZSBjbGFzcy1zcGVjaWZpYyBsb2dnZXIgaW5zdGFuY2Ugd2l0aCBjbGFzc25hbWUgb25seVxuICAgICAqXG4gICAgICogQHBhcmFtOiBuYW1lXG4gICAgICogQHJldHVybnM6IE9iamVjdCB3cmFwcGVyIGZhY2FkZSB0byAkbG9nXG4gICAgICovXG4gICAgdmFyIGdldEluc3RhbmNlID0gZnVuY3Rpb24oIGNsYXNzTmFtZSApe1xuICAgICAgY2xhc3NOYW1lID0gKCBjbGFzc05hbWUgIT09IHVuZGVmaW5lZCApID8gY2xhc3NOYW1lICsgXCI6OlwiIDogXCJcIjtcblxuICAgICAgcmV0dXJue1xuICAgICAgICAgbG9nICAgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmxvZywgICAgY2xhc3NOYW1lICksXG4gICAgICAgICBpbmZvICA6IHByZXBhcmVMb2dGbiggXyRsb2cuaW5mbywgICBjbGFzc05hbWUgKSxcbiAgICAgICAgIHdhcm4gIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy53YXJuLCAgIGNsYXNzTmFtZSApLFxuICAgICAgICAgZGVidWcgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmRlYnVnLCAgY2xhc3NOYW1lICksXG4gICAgICAgICAvLyBlcnJvciA6IHByZXBhcmVMb2dGbiggXyRsb2cuZXJyb3IsICBjbGFzc05hbWUgKVxuICAgICAgfTtcblxuICAgIH07XG5cblxuXG4gICAgLy8gd3JhcCBlYWNoIGxvZyBtZXRob2QgXG4gICAgJGxvZy5sb2cgICA9IHByZXBhcmVMb2dGbiggJGxvZy5sb2cgKTtcbiAgICAkbG9nLmluZm8gID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmluZm8gKTtcbiAgICAkbG9nLndhcm4gID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLndhcm4gKTtcbiAgICAkbG9nLmRlYnVnID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmRlYnVnICk7XG4gICAgLy8gJGxvZy5lcnJvciA9IHByZXBhcmVMb2dGbiggJGxvZy5lcnJvciApO1xuXG4gICAgLy8gQWRkIHNwZWNpYWwgbWV0aG9kIHRvIEFuZ3VsYXJKUyAkbG9nXG4gICAgJGxvZy5nZXRJbnN0YW5jZSA9IGdldEluc3RhbmNlO1xuIFxuXG4gICAgcmV0dXJuICRsb2c7XG59Oy8vZW5jaGFuY2VMb2dnZXJcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gIGVuY2hhbmNlTG9nZ2VyOyIsIi8qKlxuICogQGF1dGhvciAgICAgIFRob21hcyBCdXJsZXNvblxuICogQGRhdGUgICAgICAgIE5vdmVtYmVyLCAyMDEzXG4gKiBAc291cmNlOiAgICAgaHR0cHM6Ly9naXRodWIuY29tL1Rob21hc0J1cmxlc29uL2FuZ3VsYXJqcy1sb2dEZWNvcmF0b3IvYmxvYi9tYXN0ZXIvc3JjL21pbmRzcGFjZS91dGlscy9zdXBwbGFudC5qc1xuICAqL1xuIFxuXG4gJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3VwcGxhbnQgPSAgZnVuY3Rpb24oIHRlbXBsYXRlLCB2YWx1ZXMsIHBhdHRlcm4gKSB7XG4gICAgICAgICAgICBwYXR0ZXJuID0gcGF0dGVybiB8fCAvXFx7KFteXFx7XFx9XSopXFx9L2c7XG5cbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKHBhdHRlcm4sIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IGIuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgICAgICAgICAgciA9IHZhbHVlcztcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHMgaW4gcCkgeyByID0gcltwW3NdXTsgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgICAgICAgICByID0gYTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKHR5cGVvZiByID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgciA9PT0gJ251bWJlcicpID8gciA6IGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG4vLyBzdXBwbGFudCgpIG1ldGhvZCBmcm9tIENyb2NrZm9yZHMgYFJlbWVkaWFsIEphdmFzY3JpcHRgXG5GdW5jdGlvbi5wcm90b3R5cGUubWV0aG9kID0gZnVuY3Rpb24gKG5hbWUsIGZ1bmMpIHtcbiAgICB0aGlzLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmM7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdHJpbmcubWV0aG9kKFwic3VwcGxhbnRcIiwgZnVuY3Rpb24oIHZhbHVlcywgcGF0dGVybiApIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIHN1cHBsYW50KHNlbGYsIHZhbHVlcywgcGF0dGVybik7XG59KTtcblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSAgU3RyaW5nLnN1cHBsYW50ID0gc3VwcGxhbnQ7Il19
