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

BrowseCtrl.$inject = ["$scope", "Yocal"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function BrowseCtrl($scope, Yocal) {
  
  $scope.rando = Math.random();
  $scope.getType = function(x){
    return typeof x;
  }
  $scope.locations =[];
  Yocal.get().then(function(data){
    console.log(data);
    $scope.locations = data;
  });
  var _locations = [
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e6e",
          "name": "Los Gallos",
          "adress": "951 Wolf St Philadelphia PA 19148 United States",
          "lat": "39.921178",
          "long": "-75.1632599"
        },
        "distancefromlocation:1918"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e6f",
          "name": "Hardena",
          "adress": "754 S Hicks St, Philadelphia, PA 19145",
          "lat": "39.941686",
          "long": "-75.1684184"
        },
        "distancefromlocation:423"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e71",
          "name": "Nam Son Bakery",
          "adress": "1601 Washington Ave Philadelphia PA 19146 United States",
          "lat": "39.9392094",
          "long": "-75.170264"
        },
        "distancefromlocation:185"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e72",
          "name": "Breezy's Cafe",
          "adress": "1200 Point Breeze Ave Philadelphia PA 19146 United States",
          "lat": "39.9372372",
          "long": "-75.1771073"
        },
        "distancefromlocation:702"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e73",
          "name": "Pizza Brain/Little Baby's",
          "adress": "2313 Frankford Ave Philadelphia PA 19125 United States",
          "lat": "39.9806746",
          "long": "-75.1280968"
        },
        "distancefromlocation:5894"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e74",
          "name": "Sketch Burger",
          "adress": "413 E Girard Ave Philadelphia PA 19125 United States",
          "lat": "39.9705792",
          "long": "-75.1301184"
        },
        "distancefromlocation:4917"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e76",
          "name": "Tortilleria San Roman",
          "adress": "951 S 9th St Philadelphia PA 19147 United States",
          "lat": "39.9376396",
          "long": "-75.157989"
        },
        "distancefromlocation:936"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e78",
          "name": "Hai Street Kitchen & Co.",
          "adress": "32 S 18th St Philadelphia PA 19103 United States",
          "lat": "39.9521638",
          "long": "-75.1704619"
        },
        "distancefromlocation:1590"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e80",
          "name": "Federal Donuts",
          "adress": "1219 S 2nd St Philadelphia PA 19147 United States",
          "lat": "39.9322098",
          "long": "-75.1474603"
        },
        "distancefromlocation:1941"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e81",
          "name": "Bing Bing Dim Sum",
          "adress": "1648 E Passyunk Ave Philadelphia PA 19148 United States",
          "lat": "39.928959",
          "long": "-75.1647092"
        },
        "distancefromlocation:1056"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e88",
          "name": "Black N Brew",
          "adress": "523 E Passyunk Ave, Philadelphia, PA 19147",
          "lat": "39.941761",
          "long": "-75.1503928"
        },
        "distancefromlocation:1642"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e8e",
          "name": "Philly Flavors",
          "adress": "2004 Fairmount Ave, Philadelphia, PA 19130",
          "lat": "39.967087",
          "long": "-75.1705126"
        },
        "distancefromlocation:3244"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e8f",
          "name": "Capogiro Gelato",
          "adress": "233 Chestnut Street, Philadelphia, PA",
          "lat": "39.948822",
          "long": "-75.145358"
        },
        "distancefromlocation:2352"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e93",
          "name": "1st Oriental Supermarket",
          "adress": "1111 S 6th St Philadelphia, PA 19147",
          "lat": "39.9340158",
          "long": "-75.1536851"
        },
        "distancefromlocation:1373"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9ea0",
          "name": "K & A Sandwiches & Grocery",
          "adress": "1439 S 20th St, Philadelphia, PA 19146",
          "lat": "39.9330012",
          "long": "-75.1774748"
        },
        "distancefromlocation:910"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9ea1",
          "name": "South House",
          "adress": "2535 S 13th St, Philadelphia, PA 19148",
          "lat": "39.9180374",
          "long": "-75.1687131"
        },
        "distancefromlocation:2205"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9ea7",
          "name": "Cinemug",
          "adress": "s 19148, 1607 S Broad St, Philadelphia, PA 19148",
          "lat": "39.9301839",
          "long": "-75.168006"
        },
        "distancefromlocation:860"
      ]
    }
  ];


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

MapCtrl.$inject = ["$rootScope", "$scope", "$log", "$timeout", "$ionicLoading", "AppSettings", "GMap"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MapCtrl($rootScope, $scope, $log, $timeout, $ionicLoading, AppSettings, GMap ) {

    $log = $log.getInstance("MapCtrl");

 	  // ViewModel
  	var vm = this;
    vm.gmap = new GMap({zoom:13});    
    vm.gmap.height = 625;
    var locationsRadius = vm.gmap.setRadiusCircle();
    // vm.gmap.plotLocations();

    


    // vm.knob ={
    //   value: vm.gmap.mapOptions.zoom,
    //   options:{
    //     size: 200,
    //     min:  1,
    //     max:  40,
    //     step: 1,
        
    //     barColor: '#5BC01E',
    //     trackColor: '#212121',
    //     trackWidth: 15,
    //     barWidth: 30,
    //     subText: {
    //       enabled: true,
    //       text: 'meter radius'
    //     },
    //   }
    // };


  $scope.$watch("Map.knob.value", function(oldValue, newValue) {
      vm.gmap.map.panTo({lat:$rootScope.currentPosition.latitude, lng:$rootScope.currentPosition.longitude});
      locationsRadius.setRadius((newValue/2)*100);
      // TODO: calculate proper zoom based on locationRadius
      // vm.gmap.map.setZoom(newValue);
  });
    


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

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/SearchCtrl.js":[function(require,module,exports){
'use strict';

SearchCtrl.$inject = ["$scope", "$rootScope", "$q", "$http", "$log", "LocationsService", "$ionicLoading", "$ionicSlideBoxDelegate", "AppSettings"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function SearchCtrl($scope, $rootScope, $q, $http, $log,  LocationsService,  $ionicLoading,  $ionicSlideBoxDelegate, AppSettings) {
    $log = $log.getInstance('SearchCtrl');

 	// ViewModel
  	var vm = this;
    vm.radius = AppSettings.GMAP_RADIUS;
    $scope.radius = AppSettings.GMAP_RADIUS;

    $scope.locations =[];
    $scope.locations_groups =[];
    $scope.locations_loaded = 0; 
    $scope.CurrentCoords =  $rootScope.currentPosition;

    vm.carouselOptions = {
            carouselId    : 'locations-carousel', // unique id for the carousel
            template      : '../../templates/locations-carousel.item.html', // templateUrl in case you don't need to pass a directive but just a html view
            align         : 'left', // alignement of the carousel
            centerOnSelect: true, // center carousel when an item is selected
            trackBy       : '$index',  // indicate a track by property
            selectFirst   : true, // select first carousel item at start
            selectAtStart : {    // optional => Select at start the item with the property (string) with value passed
                property: null,
                value   : null
            },
            pullRefresh   : {  // optional => set active to true for pull refresh passing a callBack
                active  : false,
                callBack: angular.noop
            }
        };

    $ionicLoading.show({
    	template: "Finding Rad Spots ...",
    	backdrop: true
    });



    LocationsService.all()
                    .then(function(data){
                        
                        $scope.locations = data;
                        $scope.locations_groups = _.chain(data)
                                        .groupBy("catagorylevel1")
                                        .map(function(locations, cat) {

                                            locations.map(function(location) {
                                                location.setTravelTime().then(function() {
                                                    $scope.locations_loaded++;
                                                });
                                            });

                                            return {
                                                category: cat,
                                                locations: locations
                                            };
                                        })
                                        .value();


                        $scope.$watch('locations_loaded',function(new_val) {
                            if(new_val == data.length){
                                $ionicSlideBoxDelegate.update();
                                $ionicLoading.hide();      
                            }
                        })
                        
                        
                        
                        

                                        

                        // data[0].setTravelTime().then(function(locale) {

                        //     data[0] =locale;
                        //     $scope.locations = data;   
                        //     $ionicSlideBoxDelegate.update();
                        //     $ionicLoading.hide();  

                        // });
   	                });


    // $scope.slideHasChanged = function(idx) {
    //     var currentSlide = $scope.locations[idx];
    //     $log.debug('slideHasChanged {name}', currentSlide);

    //     currentSlide.setTravelTime().then(function(locale) {
    //         return locale;
    //     });
    // }

  
};


controllersModule.controller('SearchCtrl', SearchCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js":[function(require,module,exports){
'use strict';



module.exports = angular.module('app.controllers', []);

({"AppCtrl":require("./AppCtrl.js"),"BrowseCtrl":require("./BrowseCtrl.js"),"ConnectCtrl":require("./ConnectCtrl.js"),"LoginCtrl":require("./LoginCtrl.js"),"MapCtrl":require("./MapCtrl.js"),"PlaylistCtrl":require("./PlaylistCtrl.js"),"PlaylistsCtrl":require("./PlaylistsCtrl.js"),"SearchCtrl":require("./SearchCtrl.js")});

},{"./AppCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/AppCtrl.js","./BrowseCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/BrowseCtrl.js","./ConnectCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/ConnectCtrl.js","./LoginCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/LoginCtrl.js","./MapCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/MapCtrl.js","./PlaylistCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistCtrl.js","./PlaylistsCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistsCtrl.js","./SearchCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/SearchCtrl.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/directives/_index.js":[function(require,module,exports){
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
            map:       this.map,
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
                             '<p>'+locationInfo.travelTime+' walk</p>'
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
  
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'SearchCtrl'
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
  $urlRouterProvider.otherwise('/app/connect');
  
  


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1hbmltYXRlL2FuZ3VsYXItYW5pbWF0ZS5taW4uanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2Jvd2VyX2NvbXBvbmVudHMvaW9uaWMtYWR2YW5jZWQtY2Fyb3VzZWwvZGlzdC9hZHZhbmNlZC1jYXJvdXNlbC5taW4uanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2Jvd2VyX2NvbXBvbmVudHMvbmcta25vYi9kaXN0L25nLWtub2IubWluLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9hcHAtbWFpbi5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29uc3RhbnRzLmRldmVsb3BtZW50LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9BcHBDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9Ccm93c2VDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9Db25uZWN0Q3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvTG9naW5DdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9NYXBDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9QbGF5bGlzdEN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL1BsYXlsaXN0c0N0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL1NlYXJjaEN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvZGlyZWN0aXZlcy9faW5kZXguanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2RpcmVjdGl2ZXMvbUFwcExvYWRpbmdEaXJlY3RpdmUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL21vZGVscy9HTWFwLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9tb2RlbHMvTG9jYXRpb25Nb2RlbC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvbW9kZWxzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvb25fY29uZmlnLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9vbl9ydW4uanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3NlcnZpY2VzL0N1cnJlbnRDb29yZHNTZXJ2aWNlLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9Mb2NhdGlvbnNTZXJ2aWNlLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9Zb2NhbC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvX2luZGV4LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9leGFtcGxlLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9EYXRlVGltZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvdXRpbHMvbG9nZ2luZy9Mb2dEZWNvcmF0b3IuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL2xvZ2dpbmcvTG9nRW5oYW5jZXIuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL3N1cHBsYW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7O0FBS0EsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsYUFBYSxTQUFTLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLFNBQVMsT0FBTyxHQUFHLElBQUksR0FBRyxZQUFZLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxNQUFNLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sT0FBTyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRLEtBQUssRUFBRSxNQUFNO0FBQ3hnQixLQUFLLEVBQUUsR0FBRyxJQUFJLEVBQUUsR0FBRyxTQUFTLE9BQU8sRUFBRSxNQUFNLFFBQVEsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRSxTQUFTLE9BQU8sRUFBRSxHQUFHLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLE9BQU8sR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxTQUFTLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxTQUFTLEdBQUcsRUFBRSxDQUFDLE9BQU8sU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsR0FBRyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxNQUFNLEVBQUUsY0FBYyxHQUFHLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxZQUFZLE9BQU8sU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUU7QUFDbGYsRUFBRSxFQUFFLGFBQWEsVUFBVSxDQUFDLEVBQUUsb0JBQW9CLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxNQUFNLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVUsSUFBSSxLQUFLLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLGFBQWEsSUFBSSxLQUFLLEVBQUUsYUFBYSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssU0FBUyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsS0FBSyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxLQUFLLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsTUFBTTtBQUMxZixJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUssT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsWUFBWSxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLGNBQWMsRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLEdBQUcsU0FBUyxFQUFFLElBQUksS0FBSyxFQUFFLElBQUksS0FBSyxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxPQUFPLGFBQWEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLE9BQU8sTUFBTSxFQUFFLEVBQUUsaUJBQWlCLElBQUksR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLE9BQU87QUFDcmYsR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxLQUFLLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLFdBQVcsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxPQUFPLElBQUksRUFBRSxXQUFXLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUUsR0FBRyxJQUFJLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDLE9BQU8sSUFBSSxHQUFHLE1BQU0sRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLFdBQVcsR0FBRyxjQUFjLE1BQU0sQ0FBQyxFQUFFLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsWUFBWSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLEVBQUUsR0FBRyxTQUFTLEdBQUc7QUFDeGYsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLE9BQU8sTUFBTSxNQUFNLENBQUMsTUFBTSxVQUFVLENBQUMsRUFBRSxPQUFPLE9BQU8sT0FBTyxNQUFNLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sSUFBSSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsUUFBUSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxLQUFLLElBQUksRUFBRSxFQUFFLEtBQUssR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLFNBQVMsR0FBRyxFQUFFLFNBQVMsR0FBRyxFQUFFLFlBQVksR0FBRyxFQUFFLFVBQVUsR0FBRyxFQUFFLFdBQVcsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLGtCQUFrQixHQUFHLEVBQUUsd0JBQXdCLEdBQUcsRUFBRSxtQkFBbUIsR0FBRztDQUMzZSxFQUFFLGFBQWEsR0FBRyxpQkFBaUIsRUFBRSxpQkFBaUIsR0FBRyxFQUFFLHVCQUF1QixHQUFHLEVBQUUsa0JBQWtCLEdBQUcsb0NBQW9DLEVBQUUsWUFBWSxHQUFHLGdCQUFnQixJQUFJLEdBQUcsRUFBRSxRQUFRLEdBQUcsRUFBRSxXQUFXLEdBQUcsRUFBRSxRQUFRLEVBQUUsRUFBRSxXQUFXLElBQUksR0FBRyxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixHQUFHLG1CQUFtQixFQUFFLFdBQVcsa0JBQWtCLEdBQUcsZUFBZSxHQUFHLHdCQUF3QixFQUFFLGtCQUFrQixHQUFHLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLEdBQUcsa0JBQWtCLEdBQUcsZUFBZSxJQUFJLEVBQUUsT0FBTztBQUMvZSxJQUFJLFVBQVUsb0JBQW9CLENBQUMsVUFBVSxDQUFDLE9BQU8sU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxTQUFTLElBQUksSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxTQUFTLG9CQUFvQixTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssc0JBQXNCLE9BQU8sR0FBRyxTQUFTLFNBQVMsUUFBUSxhQUFhLENBQUMsUUFBUSxTQUFTLEVBQUUsQ0FBQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE9BQU8sU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxRQUFRLGlCQUFpQixDQUFDLFFBQVEsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssR0FBRyxPQUFPLElBQUksSUFBSSxTQUFTLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDcGYsRUFBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLEdBQUcsT0FBTyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsZUFBZSxTQUFTLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFLEtBQUssSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLGtCQUFrQixDQUFDLEtBQUssYUFBYSxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsS0FBSyxRQUFRLEdBQUcsS0FBSyxlQUFlLEdBQUcsS0FBSyxxQkFBcUIsSUFBSSxLQUFLLE9BQU8sRUFBRSxFQUFFLE1BQU0sU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7QUFDbmYsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBRSxVQUFVLENBQUMsUUFBUSxTQUFTLEVBQUUsQ0FBQyxLQUFLLEtBQUssR0FBRyxJQUFJLEtBQUssU0FBUyxFQUFFLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxLQUFLLGVBQWUsS0FBSyxJQUFJLFNBQVMsRUFBRSxXQUFXLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssS0FBSyxRQUFRLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxRQUFRLE9BQU8sS0FBSyxTQUFTLEtBQUssU0FBUyxFQUFFLEVBQUUsQ0FBQyxPQUFPLEtBQUssYUFBYSxLQUFLLEVBQUUsSUFBSSxRQUFRLFNBQVMsRUFBRSxDQUFDLE9BQU8sS0FBSyxhQUFhLFNBQVMsSUFBSSxVQUFVLFNBQVMsRUFBRSxDQUFDLE9BQU8sS0FBSyxhQUFhLFdBQVcsSUFBSSxNQUFNLFVBQVUsQ0FBQyxLQUFLLEtBQUs7QUFDN2dCLEtBQUssS0FBSyxTQUFTLE9BQU8sVUFBVSxDQUFDLEtBQUssS0FBSyxRQUFRLEtBQUssS0FBSyxVQUFVLElBQUksVUFBVSxDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssU0FBUyxDQUFDLElBQUksT0FBTyxVQUFVLENBQUMsS0FBSyxLQUFLLFFBQVEsS0FBSyxLQUFLLFNBQVMsS0FBSyxTQUFTLENBQUMsSUFBSSxTQUFTLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUscUJBQXFCLFVBQVUsQ0FBQyxFQUFFLFNBQVMsT0FBTyxTQUFTLFNBQVMsRUFBRSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUUsS0FBSyxlQUFlLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxLQUFLLGVBQWUsT0FBTyxFQUFFLEtBQUssT0FBTyxLQUFLLE9BQU8sS0FBSyxTQUFTLGlCQUFpQixDQUFDO0FBQ3plLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxVQUFVLElBQUksT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLGFBQWEsSUFBSSxPQUFPLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLEtBQUssSUFBSSxFQUFFLEtBQUssS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsWUFBWSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxLQUFLLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxFQUFFLGFBQWEsRUFBRSxPQUFPLEtBQUssU0FBUztBQUNsZ0IsRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsT0FBTyxLQUFLLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLElBQUksRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE9BQU8sS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLFFBQVEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsV0FBVyxLQUFLLEtBQUssQ0FBQyxRQUFRLGFBQWEsZUFBZSxZQUFZLFlBQVksY0FBYyxrQkFBa0IsbUJBQW1CLFdBQVcsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssU0FBUyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ25mLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxTQUFTLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsT0FBTyxJQUFJLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxLQUFLLE1BQU0sRUFBRSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsWUFBWSxLQUFLLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGFBQWEsS0FBSztBQUN4ZixHQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxPQUFPLFNBQVMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLEVBQUUsT0FBTyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsTUFBTSxPQUFPLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEdBQUcsT0FBTyxFQUFFLE9BQU8sR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsY0FBYyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO0FBQ3BmLEVBQUUsUUFBUSxFQUFFLFNBQVMsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE9BQU8sS0FBSyxFQUFFLFFBQVEsSUFBSSxJQUFJLFFBQVEsRUFBRSxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsT0FBTyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLGFBQWEsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFF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LENBQUMsSUFBSSxFQUFFLEVBQUUsYUFBYSxrQkFBa0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsS0FBSyxLQUFLLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLFlBQVksV0FBVyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFlBQVksVUFBVSxDQUFDLEVBQUUsY0FBYyxFQUFFLGVBQWUsTUFBTSxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUU7QUFDdGYsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLElBQUksRUFBRSxRQUFRLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRSxLQUFLLEdBQUcsRUFBRSxLQUFLLElBQUksRUFBRSxHQUFHLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLEtBQUssRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxLQUFLLEVBQUUsRUFBRSxNQUFNLEtBQUssSUFBSSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLEdBQUcsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxPQUFPLE9BQU8sRUFBRSxLQUFLLEtBQUssU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksT0FBTztBQUNyZixTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxTQUFTLFFBQVEsR0FBRyxFQUFFLEVBQUUsR0FBRyxTQUFTLFFBQVEsSUFBSSxFQUFFLEVBQUUsU0FBUyxRQUFRLEdBQUcsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsVUFBVSxHQUFHLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxXQUFXLElBQUksRUFBRSxXQUFXLHFCQUFxQixFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLGVBQWUsR0FBRyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsWUFBWSxjQUFjLEVBQUUsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLE9BQU8sU0FBUyxRQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLE9BQU8sVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE9BQU8sT0FBTyxJQUFJLEVBQUUsRUFBRSxLQUFLO0FBQzdlLEdBQUcsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLFNBQVMsR0FBRyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsRUFBRSxZQUFZLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRSxZQUFZLE1BQU0sSUFBSSxFQUFFLElBQUks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LEVBQUUsa0JBQWtCLEVBQUUsd0JBQXdCLEVBQUUsb0JBQW9CLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxLQUFLLEVBQUUsR0FBRyxPQUFPLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxZQUFZO0FBQ3RmLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEtBQUssRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxTQUFTLENBQUMsSUFBSSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEdBQUcsRUFBRSxHQUFHLEVBQUUsd0JBQXdCLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLElBQUksSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsTUFBTSxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxTQUFTLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsRUFBRSx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsVUFBVSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxF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QWEsV0FBVyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxNQUFNLEtBQUssSUFBSSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSx1QkFBdUIsR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFO0FBQ3RmLENBQUMsR0FBRyxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxPQUFPLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsZUFBZSxFQUFFLEVBQUUsR0FBRyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEdBQUcsTUFBTSxLQUFLLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsTUFBTSxLQUFLLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLE1BQU0sS0FBSyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLFFBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxTQUFTLGFBQWEsRUFBRSxFQUFFLEtBQUssUUFBUSxHQUFHLEdBQUcsR0FBRyxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQztDQUNqZixFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLE9BQU8sVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssT0FBTyxNQUFNLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxtQkFBbUIsR0FBRyxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsbUJBQW1CLGFBQWEsSUFBSSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLGFBQWEsSUFBSSxFQUFFLEVBQUUsT0FBTyxJQUFJLElBQUksRUFBRSxFQUFFLE9BQU8sSUFBSSxHQUFHLElBQUksRUFBRSxPQUFPLE9BQU8sU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUM5ZSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxPQUFPLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLFVBQVUsSUFBSSxVQUFVLFFBQVEsR0FBRyxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLEVBQUUsS0FBSyxVQUFVLEdBQUcsRUFBRSxXQUFXLEdBQUcsSUFBSSxFQUFFLFVBQVUsRUFBRSxjQUFjLEdBQUcsSUFBSSxFQUFFLGNBQWMsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxTQUFTLEdBQUcsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxPQUFPLEdBQUcsY0FBYyxFQUFFLE9BQU8sR0FBRyxFQUFFLEdBQUcsVUFBVSxHQUFHLFNBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsTUFBTSxDQUFDLE1BQU0sVUFBVSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7QUFDMWdCLENBQUMsRUFBRSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxHQUFHLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLEtBQUssU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFFLEtBQUssU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLEVBQUUsS0FBSyxLQUFLLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTyxVQUFVLFNBQVMsb0JBQW9CLENBQUMsc0JBQXNCLFNBQVMsRUFBRSxDQUFDLEVBQUUsUUFBUSxLQUFLLHFCQUFxQixLQUFLLEtBQUssQ0FBQyxjQUFjLGtCQUFrQixTQUFTLEVBQUUsRUFBRSxD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UUFBUSxjQUFjLFFBQVEsRUFBRSxRQUFRLGNBQWMsTUFBTSxHQUFHLEdBQUcsSUFBSSxFQUFFLFFBQVEsZUFBZSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEVBQUUsR0FBRyxFQUFFLFlBQVksR0FBRyxFQUFFLEVBQUUsRUFBRSxRQUFRLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsTUFBTSxFQUFFLGFBQWEsRUFBRSxRQUFRLFlBQVksU0FBUyxDQUFDLEVBQUUsRUFBRSxRQUFRLFVBQVUsRUFBRSxDQUFDLEdBQUcsV0FBVyxFQUFFLFFBQVEsTUFBTSxFQUFFLGFBQWEsRUFBRSxRQUFRLFlBQVksU0FBUyxFQUFFLFFBQVEsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUsUUFBUSxZQUFZLFNBQVMsRUFBRSxFQUFFLENBQUMsUUFBUSxHQUFHLEVBQUUsRUFBRSxRQUFRLFVBQVUsRUFBRSxXQUFXLEVBQUUsRUFBRSxRQUFRLGNBQWMsRUFBRSxDQUFDLEdBQUcsRUFBRSxRQUFRLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxNQUFNLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxjQUFjLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLGNBQWMsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLFFBQVEsY0FBYyxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssT0FBTyxFQUFFLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLE9BQU8sRUFBRSxRQUFRLFdBQVcsS0FBSyxXQUFXLFVBQVUsZUFBZSxFQUFFLE9BQU8sRUFBRSxRQUFRLFlBQVksU0FBUyxFQUFFLHFCQUFxQixRQUFRLFFBQVEsU0FBUyxjQUFjLHVDQUF1QyxFQUFFLFFBQVEsRUFBRSxLQUFLLE1BQU0sSUFBSSxFQUFFLEVBQUUsS0FBSyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxRQUFRLEdBQUcsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsV0FBVyxLQUFLLEVBQUUsRUFBRSxHQUFHLE1BQU0sTUFBTSxrREFBa0QsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLEtBQUssSUFBSSxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxlQUFlLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFLGNBQWMsR0FBRyxVQUFVLEVBQUUsY0FBYyxFQUFFLEdBQUcsV0FBVyxFQUFFLGFBQWEsRUFBRSxRQUFRLFlBQVksU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLFFBQVEsWUFBWSxvQkFBb0IsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLFFBQVEsVUFBVSxFQUFFLEVBQUUsRUFBRSxRQUFRLFVBQVUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxRQUFRLFVBQVUsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixJQUFJLENBQUMsVUFBVSxjQUFjLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLHFCQUFxQixJQUFJLENBQUMsVUFBVSxrQkFBa0IsUUFBUSxTQUFTLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLEdBQUcsYUFBYSxZQUFZLFVBQVUsSUFBSSxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsSUFBSSxDQUFDLFVBQVUsY0FBYyxDQUFDLEdBQUcsRUFBRSxTQUFTLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRSxTQUFTLEtBQUssS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLFdBQVcsMEJBQTBCLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFLGNBQWMsR0FBRyxFQUFFLGNBQWMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEdBQUcsQ0FBQyxFQUFFLFFBQVEsWUFBWSxVQUFVLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxRQUFRLFlBQVksUUFBUSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsUUFBUSxZQUFZLGFBQWEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsY0FBYyxHQUFHLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxZQUFZLFNBQVMsRUFBRSxRQUFRLFlBQVksWUFBWSxTQUFTLEdBQUcsQ0FBQyxFQUFFLFFBQVEsWUFBWSxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLGNBQWMsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLFlBQVksU0FBUyxFQUFFLGFBQWEsRUFBRSxRQUFRLFlBQVksYUFBYSxDQUFDLEdBQUcsRUFBRSxxQkFBcUIsSUFBSSxDQUFDLFVBQVUsa0JBQWtCLFFBQVEsVUFBVSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxXQUFXLGNBQWMsU0FBUyxLQUFLLE1BQU0sT0FBTyxlQUFlLENBQUMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVEsU0FBUyxZQUFZLENBQUMsRUFBRSxjQUFjLENBQUMsU0FBUyxLQUFLLE1BQU0sS0FBSyxNQUFNLENBQUMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxRQUFRLEtBQUssUUFBUSxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFB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LFdBQVcsVUFBVSxDQUFDLElBQUksWUFBWSxTQUFTLEtBQUssUUFBUSxLQUFLLEVBQUUsSUFBSSxXQUFXLEtBQUssZUFBZSxLQUFLLFFBQVEsV0FBVyxLQUFLLFNBQVMsS0FBSyxlQUFlLEtBQUssUUFBUSxTQUFTLEtBQUssS0FBSyxRQUFRLE1BQU0sVUFBVSxhQUFhLEtBQUssUUFBUSxNQUFNLE1BQU0sS0FBSyxRQUFRLE1BQU0sWUFBWSxJQUFJLEtBQUssaUJBQWlCLFlBQVksS0FBSyxRQUFRLFdBQVcsa0JBQWtCLFlBQVksS0FBSyxRQUFRLFNBQVMsaUJBQWlCLFlBQVksS0FBSyxRQUFRLFNBQVMsb0JBQW9CLEVBQUUsaUJBQWlCLFlBQVksa0JBQWtCLFlBQVksaUJBQWlCLFlBQVksb0JBQW9CLFlBQVksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFlBQVksS0FBSyxDQUFDLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxZQUFZLEVBQUUsa0JBQWtCLEtBQUssa0JBQWtCLE1BQU0sS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLGFBQWEsS0FBSyxDQUFDLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxVQUFVLEVBQUUsbUJBQW1CLEtBQUssa0JBQWtCLEtBQUssbUJBQW1CLEtBQUssa0JBQWtCLE1BQU0sS0FBSyxRQUFRLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxFQUFFLFlBQVksV0FBVyxXQUFXLFNBQVMsS0FBSyxRQUFRLEtBQUssT0FBTyxpQkFBaUIsaUJBQWlCLEtBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxRQUFRLEtBQUssV0FBVyxrQkFBa0Isa0JBQWtCLEtBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxRQUFRLEtBQUssV0FBVyxpQkFBaUIsaUJBQWlCLEtBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxRQUFRLEtBQUssV0FBVyxvQkFBb0Isb0JBQW9CLEtBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxRQUFRLEtBQUssV0FBVyxLQUFLLFFBQVEsS0FBSyxVQUFVLFlBQVksS0FBSyxRQUFRLEtBQUssTUFBTSxZQUFZLFdBQVcsV0FBVyxLQUFLLFNBQVMsS0FBSyxVQUFVLGlCQUFpQixpQkFBaUIsV0FBVyxVQUFVLEtBQUssVUFBVSxLQUFLLFVBQVUsa0JBQWtCLGtCQUFrQixXQUFXLFdBQVcsS0FBSyxRQUFRLFFBQVEsS0FBSyxTQUFTLEtBQUssVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVcsV0FBVyxLQUFLLFFBQVEsUUFBUSxLQUFLLFlBQVksS0FBSyxVQUFVLG9CQUFvQixvQkFBb0IsV0FBVyxXQUFXLEtBQUssVUFBVSxTQUFTLFNBQVMsaUJBQWlCLGFBQWEsQ0FBQyxJQUFJLElBQUksR0FBRyxPQUFPLEtBQUssU0FBUyxPQUFPLE9BQU8sS0FBSyxRQUFRLEtBQUssUUFBUSxNQUFNLEtBQUssU0FBUyxLQUFLLFFBQVEsTUFBTSxHQUFHLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxJQUFJLEtBQUssTUFBTSxRQUFRLENBQUMsS0FBSyxLQUFLLFFBQVEsVUFBVSxLQUFLLFFBQVEsYUFBYSxDQUFDLElBQUksU0FBUyxHQUFHLEtBQUssUUFBUSxLQUFLLEtBQUssU0FBUyxLQUFLLFFBQVEsV0FBVyxTQUFTLEtBQUssUUFBUSxTQUFTLE1BQU0sS0FBSyxRQUFRLEtBQUssSUFBSSxLQUFLLE1BQU0sS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLEVBQUUsS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLFFBQVEsaUJBQWlCLEVBQUUsS0FBSyxRQUFRLGVBQWUsSUFBSSxJQUFJLE9BQU8sUUFBUSxLQUFLLEtBQUssUUFBUSxLQUFLLGNBQWMsVUFBVSxLQUFLLFlBQVksVUFBVSxNQUFNLE9BQU8sS0FBSyxRQUFRLFdBQVcsS0FBSyxFQUFFLEtBQUssUUFBUSxNQUFNLElBQUksS0FBSyxZQUFZLGFBQWEsS0FBSyxRQUFRLEtBQUssRUFBRSxNQUFNLEtBQUssUUFBUSxLQUFLLEVBQUUsSUFBSSxLQUFLLFFBQVEsTUFBTSxLQUFLLEtBQUssUUFBUSxRQUFRLFVBQVUsU0FBUyxJQUFJLEtBQUssUUFBUSxLQUFLLEtBQUssU0FBUyxLQUFLLFFBQVEsUUFBUSxPQUFPLFNBQVMsS0FBSyxRQUFRLFFBQVEsS0FBSyxNQUFNLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxZQUFZLEtBQUssY0FBYyxVQUFVLEtBQUssWUFBWSxVQUFVLE1BQU0sT0FBTyxLQUFLLFFBQVEsUUFBUSxPQUFPLEtBQUssS0FBSyxRQUFRLFFBQVEsTUFBTSxLQUFLLFlBQVksYUFBYSxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sS0FBSyxRQUFRLEtBQUssRUFBRSxJQUFJLEtBQUssUUFBUSxNQUFNLE1BQU0sR0FBRyxLQUFLLFFBQVEsTUFBTSxRQUFRLENBQUMsSUFBSSxPQUFPLFNBQVMsS0FBSyxNQUFNLEVBQUUsTUFBTSxFQUFFLGFBQWEsS0FBSyxlQUFlLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxLQUFLLFdBQVcsS0FBSyxlQUFlLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxLQUFLLEtBQUssRUFBRSxHQUFHLElBQUksS0FBSyxRQUFRLFlBQVksTUFBTSxLQUFLLFFBQVEsV0FBVyxLQUFLLEdBQUcsU0FBUyxLQUFLLFFBQVEsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssUUFBUSxNQUFNLE1BQU0sT0FBTyxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sU0FBUyxLQUFLLFFBQVEsTUFBTSxTQUFTLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxNQUFNLE1BQU0sS0FBSyxHQUFHLE1BQU0sVUFBVSxJQUFJLFVBQVUsQ0FBQyxPQUFPLE1BQU0sT0FBTyxXQUFXLGNBQWMsS0FBSyxHQUFHLEVBQUUsYUFBYSxPQUFPLEdBQUcsU0FBUyxNQUFNLENBQUMsR0FBRyxPQUFPLEtBQUssSUFBSSxPQUFPLE9BQU8sR0FBRyxPQUFPLEtBQUssSUFBSSxPQUFPLE9BQU8sRUFBRSxTQUFTLElBQUksVUFBVSxVQUFVLEtBQUssTUFBTSxRQUFRLE9BQU8sVUFBVSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksS0FBSyxLQUFLLFFBQVEsTUFBTSxhQUFhLEdBQUcsVUFBVSxLQUFLLFFBQVEsTUFBTSxLQUFLLENBQUMsSUFBSSxPQUFPLEtBQUssUUFBUSxNQUFNLE9BQU8sT0FBTyxLQUFLLFFBQVEsS0FBSyxFQUFFLFNBQVMsS0FBSyxRQUFRLE1BQU0sU0FBUyxLQUFLLEdBQUcsTUFBTSxVQUFVLElBQUksVUFBVSxDQUFDLE9BQU8sTUFBTSxPQUFPLFdBQVcsY0FBYyxLQUFLLEdBQUcsRUFBRSxhQUFhLE9BQU8sR0FBRyxTQUFTLE1BQU0sQ0FBQyxHQUFHLE9BQU8sS0FBSyxJQUFJLE9BQU8sT0FBTyxHQUFHLE9BQU8sS0FBSyxJQUFJLE9BQU8sT0FBTyxHQUFHLE9BQU8sS0FBSyxJQUFJLFFBQVEsT0FBTyxRQUFRLEdBQUcsT0FBTyxLQUFLLElBQUksUUFBUSxPQUFPLFdBQVcsSUFBSSxVQUFVLFFBQVEsS0FBSyxNQUFNLFFBQVEsT0FBTyxRQUFRLEtBQUssQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksR0FBRyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLGVBQWUsS0FBSyxRQUFRLE1BQU0sTUFBTSxPQUFPLEtBQUssUUFBUSxNQUFNLFNBQVMsU0FBUyxLQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxVQUFVLENBQUMsS0FBSyxLQUFLLFFBQVEsS0FBSyxRQUFRLEtBQUssUUFBUSxJQUFJLEtBQUssU0FBUyxXQUFXLENBQUMsS0FBSyxLQUFLLFFBQVEsYUFBYSxLQUFLLFFBQVEsZ0JBQWdCLEtBQUssV0FBVyxLQUFLLFFBQVEsSUFBSSxLQUFLLFVBQVUsWUFBWSxDQUFDLEtBQUssS0FBSyxRQUFRLGVBQWUsS0FBSyxXQUFXLEtBQUssUUFBUSxJQUFJLEtBQUssVUFBVSxZQUFZLENBQUMsZUFBZSxJQUFJLEtBQUssVUFBVSxLQUFLLFFBQVEsSUFBSSxLQUFLLFNBQVMsV0FBVyxDQUFDLEtBQUssS0FBSyxRQUFRLFdBQVcsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLFdBQVcsT0FBTyxXQUFXLEtBQUssUUFBUSxJQUFJLEtBQUssWUFBWSxjQUFjLENBQUMsZUFBZSxFQUFFLE9BQU8sUUFBUSxpQkFBaUIsZUFBZSxLQUFLLFVBQVUsS0FBSyxTQUFTLE9BQU8sQ0FBQyxTQUFTLGlCQUFpQixDQUFDLEtBQUssT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxFQUFFLEtBQUssUUFBUSxLQUFLLEVBQUUsRUFBRSxHQUFHLE1BQU0sRUFBRSxLQUFLLFFBQVEsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLGtCQUFrQixDQUFDLEtBQUssT0FBTyxDQUFDLEVBQUUsSUFBSSxPQUFPLEdBQUcsTUFBTSxLQUFLLFlBQVksRUFBRSxPQUFPLEdBQUcsS0FBSyxRQUFRLEtBQUssRUFBRSxFQUFFLE9BQU8sR0FBRyxLQUFLLFFBQVEsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLFlBQVksRUFBRSxFQUFFLFFBQVEsQ0FBQyxJQUFJLFFBQVEsTUFBTSxJQUFJLEtBQUssS0FBSyxFQUFFLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsTUFBTSxJQUFJLE1BQU0sSUFBSSxLQUFLLFFBQVEsV0FBVyxJQUFJLE1BQU0sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxNQUFNLE1BQU0sS0FBSyxHQUFHLEtBQUssS0FBSyxNQUFNLEtBQUssZUFBZSxRQUFRLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxZQUFZLEtBQUssT0FBTyxLQUFLLFFBQVEsS0FBSyxLQUFLLE9BQU8sS0FBSyxRQUFRLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxLQUFLLE1BQU0sS0FBSyxRQUFRLE1BQU0sS0FBSyxRQUFRLEtBQUssS0FBSyxJQUFJLEtBQUssUUFBUSxLQUFLLElBQUksS0FBSyxNQUFNLEtBQUssTUFBTSxRQUFRLElBQUksT0FBTyxLQUFLLE9BQU8sS0FBSyxTQUFTLFNBQVMsS0FBSyxlQUFlLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsTUFBTSxLQUFLLFVBQVUsS0FBSyxJQUFJLEtBQUssVUFBVSxVQUFVLEtBQUssVUFBVSxTQUFTLEtBQUssZUFBZSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLE1BQU0sS0FBSyxXQUFXLEtBQUssSUFBSSxLQUFLLFlBQVksS0FBSyxRQUFRLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLFFBQVEsaUJBQWlCLEVBQUUsS0FBSyxRQUFRLGVBQWUsSUFBSSxHQUFHLE9BQU8sS0FBSyxTQUFTLE9BQU8sU0FBUyxLQUFLLEVBQUUsS0FBSyxRQUFRLE1BQU0sS0FBSyxHQUFHLE9BQU8sS0FBSyxTQUFTLE9BQU8sT0FBTyxTQUFTLElBQUksS0FBSyxLQUFLLEtBQUssYUFBYSxJQUFJLGFBQWEsR0FBRyxTQUFTLE9BQU8sR0FBRyxPQUFPLGlCQUFpQixHQUFHLFVBQVUsa0JBQWtCLEtBQUssU0FBUyxpQkFBaUIsY0FBYyxLQUFLLFFBQVEsUUFBUSxRQUFRLEtBQUssVUFBVSxhQUFhLEtBQUssS0FBSyxRQUFRLFFBQVEsTUFBTSxTQUFTLEtBQUssUUFBUSxRQUFRLFVBQVUsTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxZQUFZLEtBQUssZUFBZSxLQUFLLFFBQVEsV0FBVyxLQUFLLEtBQUssZUFBZSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLE1BQU0sT0FBTyxTQUFTLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxHQUFHLEtBQUssVUFBVSxLQUFLLElBQUksS0FBSyxTQUFTLFNBQVMsTUFBTSxLQUFLLFdBQVcsS0FBSyxJQUFJLEtBQUssVUFBVSxTQUFTLFVBQVUsS0FBSyxVQUFVLFNBQVMsS0FBSyxlQUFlLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsTUFBTSxLQUFLLFdBQVcsS0FBSyxJQUFJLEtBQUssV0FBVyxLQUFLLFNBQVMsU0FBUyxLQUFLLGVBQWUsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxNQUFNLEtBQUssVUFBVSxLQUFLLElBQUksS0FBSyxZQUFZLEtBQUssVUFBVSxTQUFTLFNBQVMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsS0FBSyxPQUFPLEtBQUssUUFBUSxLQUFLLEtBQUssT0FBTyxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksUUFBUSxLQUFLLGVBQWUsU0FBUyxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsS0FBSyxHQUFHLEtBQUssTUFBTSxLQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxJQUFJLFNBQVMsS0FBSyxRQUFRLE1BQU0sS0FBSyxRQUFRLEtBQUssS0FBSyxJQUFJLEtBQUssUUFBUSxLQUFLLElBQUksS0FBSyxNQUFNLEtBQUssTUFBTSxRQUFRLElBQUksS0FBSyxVQUFV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Q1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtN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QUFRLFVBQVU7SUFDbEQsSUFBSSxPQUFPO0lBQ1gsT0FBTyxTQUFTLE1BQU0sUUFBUTs7Ozs7O0FBTWxDLE9BQU8sV0FBVyxPQUFPLFdBQVcsU0FBUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuIEFuZ3VsYXJKUyB2MS40LjNcbiAoYykgMjAxMC0yMDE1IEdvb2dsZSwgSW5jLiBodHRwOi8vYW5ndWxhcmpzLm9yZ1xuIExpY2Vuc2U6IE1JVFxuKi9cbihmdW5jdGlvbihGLHQsVyl7J3VzZSBzdHJpY3QnO2Z1bmN0aW9uIHVhKGEsYixjKXtpZighYSl0aHJvdyBuZ01pbkVycihcImFyZXFcIixifHxcIj9cIixjfHxcInJlcXVpcmVkXCIpO3JldHVybiBhfWZ1bmN0aW9uIHZhKGEsYil7aWYoIWEmJiFiKXJldHVyblwiXCI7aWYoIWEpcmV0dXJuIGI7aWYoIWIpcmV0dXJuIGE7WChhKSYmKGE9YS5qb2luKFwiIFwiKSk7WChiKSYmKGI9Yi5qb2luKFwiIFwiKSk7cmV0dXJuIGErXCIgXCIrYn1mdW5jdGlvbiBFYShhKXt2YXIgYj17fTthJiYoYS50b3x8YS5mcm9tKSYmKGIudG89YS50byxiLmZyb209YS5mcm9tKTtyZXR1cm4gYn1mdW5jdGlvbiBiYShhLGIsYyl7dmFyIGQ9XCJcIjthPVgoYSk/YTphJiZVKGEpJiZhLmxlbmd0aD9hLnNwbGl0KC9cXHMrLyk6W107dShhLGZ1bmN0aW9uKGEscyl7YSYmMDxhLmxlbmd0aCYmKGQrPTA8cz9cIiBcIjpcIlwiLGQrPWM/YithOmErYil9KTtyZXR1cm4gZH1mdW5jdGlvbiBGYShhKXtpZihhIGluc3RhbmNlb2YgRylzd2l0Y2goYS5sZW5ndGgpe2Nhc2UgMDpyZXR1cm5bXTtcbmNhc2UgMTppZigxPT09YVswXS5ub2RlVHlwZSlyZXR1cm4gYTticmVhaztkZWZhdWx0OnJldHVybiBHKGthKGEpKX1pZigxPT09YS5ub2RlVHlwZSlyZXR1cm4gRyhhKX1mdW5jdGlvbiBrYShhKXtpZighYVswXSlyZXR1cm4gYTtmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXTtpZigxPT1jLm5vZGVUeXBlKXJldHVybiBjfX1mdW5jdGlvbiBHYShhLGIsYyl7dShiLGZ1bmN0aW9uKGIpe2EuYWRkQ2xhc3MoYixjKX0pfWZ1bmN0aW9uIEhhKGEsYixjKXt1KGIsZnVuY3Rpb24oYil7YS5yZW1vdmVDbGFzcyhiLGMpfSl9ZnVuY3Rpb24gaGEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7Yy5hZGRDbGFzcyYmKEdhKGEsYixjLmFkZENsYXNzKSxjLmFkZENsYXNzPW51bGwpO2MucmVtb3ZlQ2xhc3MmJihIYShhLGIsYy5yZW1vdmVDbGFzcyksYy5yZW1vdmVDbGFzcz1udWxsKX19ZnVuY3Rpb24gaWEoYSl7YT1hfHx7fTtpZighYS4kJHByZXBhcmVkKXt2YXIgYj1hLmRvbU9wZXJhdGlvbnx8XG5IO2EuZG9tT3BlcmF0aW9uPWZ1bmN0aW9uKCl7YS4kJGRvbU9wZXJhdGlvbkZpcmVkPSEwO2IoKTtiPUh9O2EuJCRwcmVwYXJlZD0hMH1yZXR1cm4gYX1mdW5jdGlvbiBjYShhLGIpe3dhKGEsYik7eGEoYSxiKX1mdW5jdGlvbiB3YShhLGIpe2IuZnJvbSYmKGEuY3NzKGIuZnJvbSksYi5mcm9tPW51bGwpfWZ1bmN0aW9uIHhhKGEsYil7Yi50byYmKGEuY3NzKGIudG8pLGIudG89bnVsbCl9ZnVuY3Rpb24gUihhLGIsYyl7dmFyIGQ9KGIuYWRkQ2xhc3N8fFwiXCIpK1wiIFwiKyhjLmFkZENsYXNzfHxcIlwiKSxlPShiLnJlbW92ZUNsYXNzfHxcIlwiKStcIiBcIisoYy5yZW1vdmVDbGFzc3x8XCJcIik7YT1JYShhLmF0dHIoXCJjbGFzc1wiKSxkLGUpO3lhKGIsYyk7Yi5hZGRDbGFzcz1hLmFkZENsYXNzP2EuYWRkQ2xhc3M6bnVsbDtiLnJlbW92ZUNsYXNzPWEucmVtb3ZlQ2xhc3M/YS5yZW1vdmVDbGFzczpudWxsO3JldHVybiBifWZ1bmN0aW9uIElhKGEsYixjKXtmdW5jdGlvbiBkKGEpe1UoYSkmJihhPWEuc3BsaXQoXCIgXCIpKTtcbnZhciBiPXt9O3UoYSxmdW5jdGlvbihhKXthLmxlbmd0aCYmKGJbYV09ITApfSk7cmV0dXJuIGJ9dmFyIGU9e307YT1kKGEpO2I9ZChiKTt1KGIsZnVuY3Rpb24oYSxiKXtlW2JdPTF9KTtjPWQoYyk7dShjLGZ1bmN0aW9uKGEsYil7ZVtiXT0xPT09ZVtiXT9udWxsOi0xfSk7dmFyIHM9e2FkZENsYXNzOlwiXCIscmVtb3ZlQ2xhc3M6XCJcIn07dShlLGZ1bmN0aW9uKGIsYyl7dmFyIGQsZTsxPT09Yj8oZD1cImFkZENsYXNzXCIsZT0hYVtjXSk6LTE9PT1iJiYoZD1cInJlbW92ZUNsYXNzXCIsZT1hW2NdKTtlJiYoc1tkXS5sZW5ndGgmJihzW2RdKz1cIiBcIiksc1tkXSs9Yyl9KTtyZXR1cm4gc31mdW5jdGlvbiB6KGEpe3JldHVybiBhIGluc3RhbmNlb2YgdC5lbGVtZW50P2FbMF06YX1mdW5jdGlvbiB6YShhLGIsYyl7dmFyIGQ9T2JqZWN0LmNyZWF0ZShudWxsKSxlPWEuZ2V0Q29tcHV0ZWRTdHlsZShiKXx8e307dShjLGZ1bmN0aW9uKGEsYil7dmFyIGM9ZVthXTtpZihjKXt2YXIgaz1jLmNoYXJBdCgwKTtcbmlmKFwiLVwiPT09a3x8XCIrXCI9PT1rfHwwPD1rKWM9SmEoYyk7MD09PWMmJihjPW51bGwpO2RbYl09Y319KTtyZXR1cm4gZH1mdW5jdGlvbiBKYShhKXt2YXIgYj0wO2E9YS5zcGxpdCgvXFxzKixcXHMqLyk7dShhLGZ1bmN0aW9uKGEpe1wic1wiPT1hLmNoYXJBdChhLmxlbmd0aC0xKSYmKGE9YS5zdWJzdHJpbmcoMCxhLmxlbmd0aC0xKSk7YT1wYXJzZUZsb2F0KGEpfHwwO2I9Yj9NYXRoLm1heChhLGIpOmF9KTtyZXR1cm4gYn1mdW5jdGlvbiBsYShhKXtyZXR1cm4gMD09PWF8fG51bGwhPWF9ZnVuY3Rpb24gQWEoYSxiKXt2YXIgYz1PLGQ9YStcInNcIjtiP2MrPVwiRHVyYXRpb25cIjpkKz1cIiBsaW5lYXIgYWxsXCI7cmV0dXJuW2MsZF19ZnVuY3Rpb24gamEoYSxiKXt2YXIgYz1iP1wiLVwiK2IrXCJzXCI6XCJcIjtkYShhLFtlYSxjXSk7cmV0dXJuW2VhLGNdfWZ1bmN0aW9uIG1hKGEsYil7dmFyIGM9Yj9cInBhdXNlZFwiOlwiXCIsZD1WK1wiUGxheVN0YXRlXCI7ZGEoYSxbZCxjXSk7cmV0dXJuW2QsY119ZnVuY3Rpb24gZGEoYSxcbmIpe2Euc3R5bGVbYlswXV09YlsxXX1mdW5jdGlvbiBCYSgpe3ZhciBhPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue2ZsdXNoOmZ1bmN0aW9uKCl7YT1PYmplY3QuY3JlYXRlKG51bGwpfSxjb3VudDpmdW5jdGlvbihiKXtyZXR1cm4oYj1hW2JdKT9iLnRvdGFsOjB9LGdldDpmdW5jdGlvbihiKXtyZXR1cm4oYj1hW2JdKSYmYi52YWx1ZX0scHV0OmZ1bmN0aW9uKGIsYyl7YVtiXT9hW2JdLnRvdGFsKys6YVtiXT17dG90YWw6MSx2YWx1ZTpjfX19fXZhciBIPXQubm9vcCx5YT10LmV4dGVuZCxHPXQuZWxlbWVudCx1PXQuZm9yRWFjaCxYPXQuaXNBcnJheSxVPXQuaXNTdHJpbmcsbmE9dC5pc09iamVjdCxLYT10LmlzVW5kZWZpbmVkLExhPXQuaXNEZWZpbmVkLENhPXQuaXNGdW5jdGlvbixvYT10LmlzRWxlbWVudCxPLHBhLFYscWE7Ri5vbnRyYW5zaXRpb25lbmQ9PT1XJiZGLm9ud2Via2l0dHJhbnNpdGlvbmVuZCE9PVc/KE89XCJXZWJraXRUcmFuc2l0aW9uXCIscGE9XCJ3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmRcIik6XG4oTz1cInRyYW5zaXRpb25cIixwYT1cInRyYW5zaXRpb25lbmRcIik7Ri5vbmFuaW1hdGlvbmVuZD09PVcmJkYub253ZWJraXRhbmltYXRpb25lbmQhPT1XPyhWPVwiV2Via2l0QW5pbWF0aW9uXCIscWE9XCJ3ZWJraXRBbmltYXRpb25FbmQgYW5pbWF0aW9uZW5kXCIpOihWPVwiYW5pbWF0aW9uXCIscWE9XCJhbmltYXRpb25lbmRcIik7dmFyIHJhPVYrXCJEZWxheVwiLHNhPVYrXCJEdXJhdGlvblwiLGVhPU8rXCJEZWxheVwiO0Y9TytcIkR1cmF0aW9uXCI7dmFyIE1hPXt0cmFuc2l0aW9uRHVyYXRpb246Rix0cmFuc2l0aW9uRGVsYXk6ZWEsdHJhbnNpdGlvblByb3BlcnR5Ok8rXCJQcm9wZXJ0eVwiLGFuaW1hdGlvbkR1cmF0aW9uOnNhLGFuaW1hdGlvbkRlbGF5OnJhLGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OlYrXCJJdGVyYXRpb25Db3VudFwifSxOYT17dHJhbnNpdGlvbkR1cmF0aW9uOkYsdHJhbnNpdGlvbkRlbGF5OmVhLGFuaW1hdGlvbkR1cmF0aW9uOnNhLGFuaW1hdGlvbkRlbGF5OnJhfTt0Lm1vZHVsZShcIm5nQW5pbWF0ZVwiLFxuW10pLmRpcmVjdGl2ZShcIm5nQW5pbWF0ZUNoaWxkcmVuXCIsW2Z1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGEsYixjKXthPWMubmdBbmltYXRlQ2hpbGRyZW47dC5pc1N0cmluZyhhKSYmMD09PWEubGVuZ3RoP2IuZGF0YShcIiQkbmdBbmltYXRlQ2hpbGRyZW5cIiwhMCk6Yy4kb2JzZXJ2ZShcIm5nQW5pbWF0ZUNoaWxkcmVuXCIsZnVuY3Rpb24oYSl7Yi5kYXRhKFwiJCRuZ0FuaW1hdGVDaGlsZHJlblwiLFwib25cIj09PWF8fFwidHJ1ZVwiPT09YSl9KX19XSkuZmFjdG9yeShcIiQkckFGTXV0ZXhcIixbXCIkJHJBRlwiLGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe3ZhciBiPSExO2EoZnVuY3Rpb24oKXtiPSEwfSk7cmV0dXJuIGZ1bmN0aW9uKGMpe2I/YygpOmEoYyl9fX1dKS5mYWN0b3J5KFwiJCRyQUZTY2hlZHVsZXJcIixbXCIkJHJBRlwiLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSl7ZC5wdXNoKFtdLmNvbmNhdChhKSk7YygpfWZ1bmN0aW9uIGMoKXtpZihkLmxlbmd0aCl7Zm9yKHZhciBiPVtdLG49XG4wO248ZC5sZW5ndGg7bisrKXt2YXIgaD1kW25dO2guc2hpZnQoKSgpO2gubGVuZ3RoJiZiLnB1c2goaCl9ZD1iO2V8fGEoZnVuY3Rpb24oKXtlfHxjKCl9KX19dmFyIGQ9W10sZTtiLndhaXRVbnRpbFF1aWV0PWZ1bmN0aW9uKGIpe2UmJmUoKTtlPWEoZnVuY3Rpb24oKXtlPW51bGw7YigpO2MoKX0pfTtyZXR1cm4gYn1dKS5mYWN0b3J5KFwiJCRBbmltYXRlUnVubmVyXCIsW1wiJHFcIixcIiQkckFGTXV0ZXhcIixmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSl7dGhpcy5zZXRIb3N0KGEpO3RoaXMuX2RvbmVDYWxsYmFja3M9W107dGhpcy5fcnVuSW5BbmltYXRpb25GcmFtZT1iKCk7dGhpcy5fc3RhdGU9MH1jLmNoYWluPWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYygpe2lmKG49PT1hLmxlbmd0aCliKCEwKTtlbHNlIGFbbl0oZnVuY3Rpb24oYSl7ITE9PT1hP2IoITEpOihuKyssYygpKX0pfXZhciBuPTA7YygpfTtjLmFsbD1mdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMocyl7aD1oJiZzOysrbj09PVxuYS5sZW5ndGgmJmIoaCl9dmFyIG49MCxoPSEwO3UoYSxmdW5jdGlvbihhKXthLmRvbmUoYyl9KX07Yy5wcm90b3R5cGU9e3NldEhvc3Q6ZnVuY3Rpb24oYSl7dGhpcy5ob3N0PWF8fHt9fSxkb25lOmZ1bmN0aW9uKGEpezI9PT10aGlzLl9zdGF0ZT9hKCk6dGhpcy5fZG9uZUNhbGxiYWNrcy5wdXNoKGEpfSxwcm9ncmVzczpILGdldFByb21pc2U6ZnVuY3Rpb24oKXtpZighdGhpcy5wcm9taXNlKXt2YXIgYj10aGlzO3RoaXMucHJvbWlzZT1hKGZ1bmN0aW9uKGEsYyl7Yi5kb25lKGZ1bmN0aW9uKGIpeyExPT09Yj9jKCk6YSgpfSl9KX1yZXR1cm4gdGhpcy5wcm9taXNlfSx0aGVuOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZ2V0UHJvbWlzZSgpLnRoZW4oYSxiKX0sXCJjYXRjaFwiOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmdldFByb21pc2UoKVtcImNhdGNoXCJdKGEpfSxcImZpbmFsbHlcIjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5nZXRQcm9taXNlKClbXCJmaW5hbGx5XCJdKGEpfSxwYXVzZTpmdW5jdGlvbigpe3RoaXMuaG9zdC5wYXVzZSYmXG50aGlzLmhvc3QucGF1c2UoKX0scmVzdW1lOmZ1bmN0aW9uKCl7dGhpcy5ob3N0LnJlc3VtZSYmdGhpcy5ob3N0LnJlc3VtZSgpfSxlbmQ6ZnVuY3Rpb24oKXt0aGlzLmhvc3QuZW5kJiZ0aGlzLmhvc3QuZW5kKCk7dGhpcy5fcmVzb2x2ZSghMCl9LGNhbmNlbDpmdW5jdGlvbigpe3RoaXMuaG9zdC5jYW5jZWwmJnRoaXMuaG9zdC5jYW5jZWwoKTt0aGlzLl9yZXNvbHZlKCExKX0sY29tcGxldGU6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczswPT09Yi5fc3RhdGUmJihiLl9zdGF0ZT0xLGIuX3J1bkluQW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtiLl9yZXNvbHZlKGEpfSkpfSxfcmVzb2x2ZTpmdW5jdGlvbihhKXsyIT09dGhpcy5fc3RhdGUmJih1KHRoaXMuX2RvbmVDYWxsYmFja3MsZnVuY3Rpb24oYil7YihhKX0pLHRoaXMuX2RvbmVDYWxsYmFja3MubGVuZ3RoPTAsdGhpcy5fc3RhdGU9Mil9fTtyZXR1cm4gY31dKS5wcm92aWRlcihcIiQkYW5pbWF0ZVF1ZXVlXCIsW1wiJGFuaW1hdGVQcm92aWRlclwiLFxuZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhLGIsYyxoKXtyZXR1cm4gZFthXS5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiBhKGIsYyxoKX0pfWZ1bmN0aW9uIGMoYSxiKXthPWF8fHt9O3ZhciBjPTA8KGEuYWRkQ2xhc3N8fFwiXCIpLmxlbmd0aCxkPTA8KGEucmVtb3ZlQ2xhc3N8fFwiXCIpLmxlbmd0aDtyZXR1cm4gYj9jJiZkOmN8fGR9dmFyIGQ9dGhpcy5ydWxlcz17c2tpcDpbXSxjYW5jZWw6W10sam9pbjpbXX07ZC5qb2luLnB1c2goZnVuY3Rpb24oYSxiLGQpe3JldHVybiFiLnN0cnVjdHVyYWwmJmMoYi5vcHRpb25zKX0pO2Quc2tpcC5wdXNoKGZ1bmN0aW9uKGEsYixkKXtyZXR1cm4hYi5zdHJ1Y3R1cmFsJiYhYyhiLm9wdGlvbnMpfSk7ZC5za2lwLnB1c2goZnVuY3Rpb24oYSxiLGMpe3JldHVyblwibGVhdmVcIj09Yy5ldmVudCYmYi5zdHJ1Y3R1cmFsfSk7ZC5za2lwLnB1c2goZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjLnN0cnVjdHVyYWwmJiFiLnN0cnVjdHVyYWx9KTtkLmNhbmNlbC5wdXNoKGZ1bmN0aW9uKGEsXG5iLGMpe3JldHVybiBjLnN0cnVjdHVyYWwmJmIuc3RydWN0dXJhbH0pO2QuY2FuY2VsLnB1c2goZnVuY3Rpb24oYSxiLGMpe3JldHVybiAyPT09Yy5zdGF0ZSYmYi5zdHJ1Y3R1cmFsfSk7ZC5jYW5jZWwucHVzaChmdW5jdGlvbihhLGIsYyl7YT1iLm9wdGlvbnM7Yz1jLm9wdGlvbnM7cmV0dXJuIGEuYWRkQ2xhc3MmJmEuYWRkQ2xhc3M9PT1jLnJlbW92ZUNsYXNzfHxhLnJlbW92ZUNsYXNzJiZhLnJlbW92ZUNsYXNzPT09Yy5hZGRDbGFzc30pO3RoaXMuJGdldD1bXCIkJHJBRlwiLFwiJHJvb3RTY29wZVwiLFwiJHJvb3RFbGVtZW50XCIsXCIkZG9jdW1lbnRcIixcIiQkSGFzaE1hcFwiLFwiJCRhbmltYXRpb25cIixcIiQkQW5pbWF0ZVJ1bm5lclwiLFwiJHRlbXBsYXRlUmVxdWVzdFwiLFwiJCRqcUxpdGVcIixmdW5jdGlvbihkLHMsbixoLGssRCxBLFosSSl7ZnVuY3Rpb24gdyhhLGIpe3ZhciBjPXooYSksZj1bXSxtPWxbYl07bSYmdShtLGZ1bmN0aW9uKGEpe2Eubm9kZS5jb250YWlucyhjKSYmZi5wdXNoKGEuY2FsbGJhY2spfSk7XG5yZXR1cm4gZn1mdW5jdGlvbiBCKGEsYixjLGYpe2QoZnVuY3Rpb24oKXt1KHcoYixhKSxmdW5jdGlvbihhKXthKGIsYyxmKX0pfSl9ZnVuY3Rpb24gcihhLFMscCl7ZnVuY3Rpb24gZChiLGMsZixwKXtCKGMsYSxmLHApO2IucHJvZ3Jlc3MoYyxmLHApfWZ1bmN0aW9uIGcoYil7RGEoYSxwKTtjYShhLHApO3AuZG9tT3BlcmF0aW9uKCk7bC5jb21wbGV0ZSghYil9dmFyIFAsRTtpZihhPUZhKGEpKVA9eihhKSxFPWEucGFyZW50KCk7cD1pYShwKTt2YXIgbD1uZXcgQTtpZighUClyZXR1cm4gZygpLGw7WChwLmFkZENsYXNzKSYmKHAuYWRkQ2xhc3M9cC5hZGRDbGFzcy5qb2luKFwiIFwiKSk7WChwLnJlbW92ZUNsYXNzKSYmKHAucmVtb3ZlQ2xhc3M9cC5yZW1vdmVDbGFzcy5qb2luKFwiIFwiKSk7cC5mcm9tJiYhbmEocC5mcm9tKSYmKHAuZnJvbT1udWxsKTtwLnRvJiYhbmEocC50bykmJihwLnRvPW51bGwpO3ZhciBlPVtQLmNsYXNzTmFtZSxwLmFkZENsYXNzLHAucmVtb3ZlQ2xhc3NdLmpvaW4oXCIgXCIpO1xuaWYoIXYoZSkpcmV0dXJuIGcoKSxsO3ZhciBNPTA8PVtcImVudGVyXCIsXCJtb3ZlXCIsXCJsZWF2ZVwiXS5pbmRleE9mKFMpLGg9IXh8fEwuZ2V0KFApLGU9IWgmJm0uZ2V0KFApfHx7fSxrPSEhZS5zdGF0ZTtofHxrJiYxPT1lLnN0YXRlfHwoaD0hdGEoYSxFLFMpKTtpZihoKXJldHVybiBnKCksbDtNJiZLKGEpO2g9e3N0cnVjdHVyYWw6TSxlbGVtZW50OmEsZXZlbnQ6UyxjbG9zZTpnLG9wdGlvbnM6cCxydW5uZXI6bH07aWYoayl7aWYoYihcInNraXBcIixhLGgsZSkpe2lmKDI9PT1lLnN0YXRlKXJldHVybiBnKCksbDtSKGEsZS5vcHRpb25zLHApO3JldHVybiBlLnJ1bm5lcn1pZihiKFwiY2FuY2VsXCIsYSxoLGUpKTI9PT1lLnN0YXRlP2UucnVubmVyLmVuZCgpOmUuc3RydWN0dXJhbD9lLmNsb3NlKCk6UihhLGgub3B0aW9ucyxlLm9wdGlvbnMpO2Vsc2UgaWYoYihcImpvaW5cIixhLGgsZSkpaWYoMj09PWUuc3RhdGUpUihhLHAse30pO2Vsc2UgcmV0dXJuIFM9aC5ldmVudD1lLmV2ZW50LHA9UihhLFxuZS5vcHRpb25zLGgub3B0aW9ucyksbH1lbHNlIFIoYSxwLHt9KTsoaz1oLnN0cnVjdHVyYWwpfHwoaz1cImFuaW1hdGVcIj09PWguZXZlbnQmJjA8T2JqZWN0LmtleXMoaC5vcHRpb25zLnRvfHx7fSkubGVuZ3RofHxjKGgub3B0aW9ucykpO2lmKCFrKXJldHVybiBnKCksQyhhKSxsO00mJmYoRSk7dmFyIHI9KGUuY291bnRlcnx8MCkrMTtoLmNvdW50ZXI9cjtnYShhLDEsaCk7cy4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXt2YXIgYj1tLmdldChQKSx2PSFiLGI9Ynx8e30sZT1hLnBhcmVudCgpfHxbXSxFPTA8ZS5sZW5ndGgmJihcImFuaW1hdGVcIj09PWIuZXZlbnR8fGIuc3RydWN0dXJhbHx8YyhiLm9wdGlvbnMpKTtpZih2fHxiLmNvdW50ZXIhPT1yfHwhRSl7diYmKERhKGEscCksY2EoYSxwKSk7aWYodnx8TSYmYi5ldmVudCE9PVMpcC5kb21PcGVyYXRpb24oKSxsLmVuZCgpO0V8fEMoYSl9ZWxzZSBTPSFiLnN0cnVjdHVyYWwmJmMoYi5vcHRpb25zLCEwKT9cInNldENsYXNzXCI6Yi5ldmVudCxcbmIuc3RydWN0dXJhbCYmZihlKSxnYShhLDIpLGI9RChhLFMsYi5vcHRpb25zKSxiLmRvbmUoZnVuY3Rpb24oYil7ZyghYik7KGI9bS5nZXQoUCkpJiZiLmNvdW50ZXI9PT1yJiZDKHooYSkpO2QobCxTLFwiY2xvc2VcIix7fSl9KSxsLnNldEhvc3QoYiksZChsLFMsXCJzdGFydFwiLHt9KX0pO3JldHVybiBsfWZ1bmN0aW9uIEsoYSl7YT16KGEpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1uZy1hbmltYXRlXVwiKTt1KGEsZnVuY3Rpb24oYSl7dmFyIGI9cGFyc2VJbnQoYS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5nLWFuaW1hdGVcIikpLGM9bS5nZXQoYSk7c3dpdGNoKGIpe2Nhc2UgMjpjLnJ1bm5lci5lbmQoKTtjYXNlIDE6YyYmbS5yZW1vdmUoYSl9fSl9ZnVuY3Rpb24gQyhhKXthPXooYSk7YS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLW5nLWFuaW1hdGVcIik7bS5yZW1vdmUoYSl9ZnVuY3Rpb24gRShhLGIpe3JldHVybiB6KGEpPT09eihiKX1mdW5jdGlvbiBmKGEpe2E9eihhKTtkb3tpZighYXx8MSE9PVxuYS5ub2RlVHlwZSlicmVhazt2YXIgYj1tLmdldChhKTtpZihiKXt2YXIgZj1hOyFiLnN0cnVjdHVyYWwmJmMoYi5vcHRpb25zKSYmKDI9PT1iLnN0YXRlJiZiLnJ1bm5lci5lbmQoKSxDKGYpKX1hPWEucGFyZW50Tm9kZX13aGlsZSgxKX1mdW5jdGlvbiB0YShhLGIsYyl7dmFyIGY9Yz0hMSxkPSExLHY7Zm9yKChhPWEuZGF0YShcIiRuZ0FuaW1hdGVQaW5cIikpJiYoYj1hKTtiJiZiLmxlbmd0aDspe2Z8fChmPUUoYixuKSk7YT1iWzBdO2lmKDEhPT1hLm5vZGVUeXBlKWJyZWFrO3ZhciBlPW0uZ2V0KGEpfHx7fTtkfHwoZD1lLnN0cnVjdHVyYWx8fEwuZ2V0KGEpKTtpZihLYSh2KXx8ITA9PT12KWE9Yi5kYXRhKFwiJCRuZ0FuaW1hdGVDaGlsZHJlblwiKSxMYShhKSYmKHY9YSk7aWYoZCYmITE9PT12KWJyZWFrO2Z8fChmPUUoYixuKSxmfHwoYT1iLmRhdGEoXCIkbmdBbmltYXRlUGluXCIpKSYmKGI9YSkpO2N8fChjPUUoYixnKSk7Yj1iLnBhcmVudCgpfXJldHVybighZHx8dikmJmYmJmN9ZnVuY3Rpb24gZ2EoYSxcbmIsYyl7Yz1jfHx7fTtjLnN0YXRlPWI7YT16KGEpO2Euc2V0QXR0cmlidXRlKFwiZGF0YS1uZy1hbmltYXRlXCIsYik7Yz0oYj1tLmdldChhKSk/eWEoYixjKTpjO20ucHV0KGEsYyl9dmFyIG09bmV3IGssTD1uZXcgayx4PW51bGwsTT1zLiR3YXRjaChmdW5jdGlvbigpe3JldHVybiAwPT09Wi50b3RhbFBlbmRpbmdSZXF1ZXN0c30sZnVuY3Rpb24oYSl7YSYmKE0oKSxzLiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe3MuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7bnVsbD09PXgmJih4PSEwKX0pfSkpfSksZz1HKGhbMF0uYm9keSksbD17fSxQPWEuY2xhc3NOYW1lRmlsdGVyKCksdj1QP2Z1bmN0aW9uKGEpe3JldHVybiBQLnRlc3QoYSl9OmZ1bmN0aW9uKCl7cmV0dXJuITB9LERhPWhhKEkpO3JldHVybntvbjpmdW5jdGlvbihhLGIsYyl7Yj1rYShiKTtsW2FdPWxbYV18fFtdO2xbYV0ucHVzaCh7bm9kZTpiLGNhbGxiYWNrOmN9KX0sb2ZmOmZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBmKGEsXG5iLGMpe3ZhciBkPWthKGIpO3JldHVybiBhLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4hKGEubm9kZT09PWQmJighY3x8YS5jYWxsYmFjaz09PWMpKX0pfXZhciBkPWxbYV07ZCYmKGxbYV09MT09PWFyZ3VtZW50cy5sZW5ndGg/bnVsbDpmKGQsYixjKSl9LHBpbjpmdW5jdGlvbihhLGIpe3VhKG9hKGEpLFwiZWxlbWVudFwiLFwibm90IGFuIGVsZW1lbnRcIik7dWEob2EoYiksXCJwYXJlbnRFbGVtZW50XCIsXCJub3QgYW4gZWxlbWVudFwiKTthLmRhdGEoXCIkbmdBbmltYXRlUGluXCIsYil9LHB1c2g6ZnVuY3Rpb24oYSxiLGMsZil7Yz1jfHx7fTtjLmRvbU9wZXJhdGlvbj1mO3JldHVybiByKGEsYixjKX0sZW5hYmxlZDpmdW5jdGlvbihhLGIpe3ZhciBjPWFyZ3VtZW50cy5sZW5ndGg7aWYoMD09PWMpYj0hIXg7ZWxzZSBpZihvYShhKSl7dmFyIGY9eihhKSxkPUwuZ2V0KGYpOzE9PT1jP2I9IWQ6KGI9ISFiKT9kJiZMLnJlbW92ZShmKTpMLnB1dChmLCEwKX1lbHNlIGI9eD0hIWE7cmV0dXJuIGJ9fX1dfV0pLnByb3ZpZGVyKFwiJCRhbmltYXRpb25cIixcbltcIiRhbmltYXRlUHJvdmlkZXJcIixmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe3JldHVybiBhLmRhdGEoXCIkJGFuaW1hdGlvblJ1bm5lclwiKX12YXIgYz10aGlzLmRyaXZlcnM9W107dGhpcy4kZ2V0PVtcIiQkanFMaXRlXCIsXCIkcm9vdFNjb3BlXCIsXCIkaW5qZWN0b3JcIixcIiQkQW5pbWF0ZVJ1bm5lclwiLFwiJCRyQUZTY2hlZHVsZXJcIixmdW5jdGlvbihhLGUscyxuLGgpe3ZhciBrPVtdLEQ9aGEoYSksQT0wLFo9MCxJPVtdO3JldHVybiBmdW5jdGlvbih3LEIscil7ZnVuY3Rpb24gSyhhKXthPWEuaGFzQXR0cmlidXRlKFwibmctYW5pbWF0ZS1yZWZcIik/W2FdOmEucXVlcnlTZWxlY3RvckFsbChcIltuZy1hbmltYXRlLXJlZl1cIik7dmFyIGI9W107dShhLGZ1bmN0aW9uKGEpe3ZhciBjPWEuZ2V0QXR0cmlidXRlKFwibmctYW5pbWF0ZS1yZWZcIik7YyYmYy5sZW5ndGgmJmIucHVzaChhKX0pO3JldHVybiBifWZ1bmN0aW9uIEMoYSl7dmFyIGI9W10sYz17fTt1KGEsZnVuY3Rpb24oYSxmKXt2YXIgZD16KGEuZWxlbWVudCksXG5tPTA8PVtcImVudGVyXCIsXCJtb3ZlXCJdLmluZGV4T2YoYS5ldmVudCksZD1hLnN0cnVjdHVyYWw/SyhkKTpbXTtpZihkLmxlbmd0aCl7dmFyIGc9bT9cInRvXCI6XCJmcm9tXCI7dShkLGZ1bmN0aW9uKGEpe3ZhciBiPWEuZ2V0QXR0cmlidXRlKFwibmctYW5pbWF0ZS1yZWZcIik7Y1tiXT1jW2JdfHx7fTtjW2JdW2ddPXthbmltYXRpb25JRDpmLGVsZW1lbnQ6RyhhKX19KX1lbHNlIGIucHVzaChhKX0pO3ZhciBmPXt9LGQ9e307dShjLGZ1bmN0aW9uKGMsbSl7dmFyIGc9Yy5mcm9tLGU9Yy50bztpZihnJiZlKXt2YXIgbD1hW2cuYW5pbWF0aW9uSURdLGg9YVtlLmFuaW1hdGlvbklEXSx4PWcuYW5pbWF0aW9uSUQudG9TdHJpbmcoKTtpZighZFt4XSl7dmFyIEI9ZFt4XT17c3RydWN0dXJhbDohMCxiZWZvcmVTdGFydDpmdW5jdGlvbigpe2wuYmVmb3JlU3RhcnQoKTtoLmJlZm9yZVN0YXJ0KCl9LGNsb3NlOmZ1bmN0aW9uKCl7bC5jbG9zZSgpO2guY2xvc2UoKX0sY2xhc3NlczpFKGwuY2xhc3NlcyxoLmNsYXNzZXMpLFxuZnJvbTpsLHRvOmgsYW5jaG9yczpbXX07Qi5jbGFzc2VzLmxlbmd0aD9iLnB1c2goQik6KGIucHVzaChsKSxiLnB1c2goaCkpfWRbeF0uYW5jaG9ycy5wdXNoKHtvdXQ6Zy5lbGVtZW50LFwiaW5cIjplLmVsZW1lbnR9KX1lbHNlIGc9Zz9nLmFuaW1hdGlvbklEOmUuYW5pbWF0aW9uSUQsZT1nLnRvU3RyaW5nKCksZltlXXx8KGZbZV09ITAsYi5wdXNoKGFbZ10pKX0pO3JldHVybiBifWZ1bmN0aW9uIEUoYSxiKXthPWEuc3BsaXQoXCIgXCIpO2I9Yi5zcGxpdChcIiBcIik7Zm9yKHZhciBjPVtdLGY9MDtmPGEubGVuZ3RoO2YrKyl7dmFyIGQ9YVtmXTtpZihcIm5nLVwiIT09ZC5zdWJzdHJpbmcoMCwzKSlmb3IodmFyIGc9MDtnPGIubGVuZ3RoO2crKylpZihkPT09YltnXSl7Yy5wdXNoKGQpO2JyZWFrfX1yZXR1cm4gYy5qb2luKFwiIFwiKX1mdW5jdGlvbiBmKGEpe2Zvcih2YXIgYj1jLmxlbmd0aC0xOzA8PWI7Yi0tKXt2YXIgZj1jW2JdO2lmKHMuaGFzKGYpJiYoZj1zLmdldChmKShhKSkpcmV0dXJuIGZ9fVxuZnVuY3Rpb24gdGEoYSxjKXthLmZyb20mJmEudG8/KGIoYS5mcm9tLmVsZW1lbnQpLnNldEhvc3QoYyksYihhLnRvLmVsZW1lbnQpLnNldEhvc3QoYykpOmIoYS5lbGVtZW50KS5zZXRIb3N0KGMpfWZ1bmN0aW9uIGdhKCl7dmFyIGE9Yih3KTshYXx8XCJsZWF2ZVwiPT09QiYmci4kJGRvbU9wZXJhdGlvbkZpcmVkfHxhLmVuZCgpfWZ1bmN0aW9uIG0oYil7dy5vZmYoXCIkZGVzdHJveVwiLGdhKTt3LnJlbW92ZURhdGEoXCIkJGFuaW1hdGlvblJ1bm5lclwiKTtEKHcscik7Y2EodyxyKTtyLmRvbU9wZXJhdGlvbigpO2cmJmEucmVtb3ZlQ2xhc3ModyxnKTt3LnJlbW92ZUNsYXNzKFwibmctYW5pbWF0ZVwiKTt4LmNvbXBsZXRlKCFiKX1yPWlhKHIpO3ZhciBMPTA8PVtcImVudGVyXCIsXCJtb3ZlXCIsXCJsZWF2ZVwiXS5pbmRleE9mKEIpLHg9bmV3IG4oe2VuZDpmdW5jdGlvbigpe20oKX0sY2FuY2VsOmZ1bmN0aW9uKCl7bSghMCl9fSk7aWYoIWMubGVuZ3RoKXJldHVybiBtKCkseDt3LmRhdGEoXCIkJGFuaW1hdGlvblJ1bm5lclwiLFxueCk7dmFyIE09dmEody5hdHRyKFwiY2xhc3NcIiksdmEoci5hZGRDbGFzcyxyLnJlbW92ZUNsYXNzKSksZz1yLnRlbXBDbGFzc2VzO2cmJihNKz1cIiBcIitnLHIudGVtcENsYXNzZXM9bnVsbCk7dmFyIGw7THx8KGw9QSxBKz0xKTtrLnB1c2goe2VsZW1lbnQ6dyxjbGFzc2VzOk0sZXZlbnQ6QixjbGFzc0Jhc2VkSW5kZXg6bCxzdHJ1Y3R1cmFsOkwsb3B0aW9uczpyLGJlZm9yZVN0YXJ0OmZ1bmN0aW9uKCl7dy5hZGRDbGFzcyhcIm5nLWFuaW1hdGVcIik7ZyYmYS5hZGRDbGFzcyh3LGcpfSxjbG9zZTptfSk7dy5vbihcIiRkZXN0cm95XCIsZ2EpO2lmKDE8ay5sZW5ndGgpcmV0dXJuIHg7ZS4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXtaPUE7QT0wO0kubGVuZ3RoPTA7dmFyIGE9W107dShrLGZ1bmN0aW9uKGMpe2IoYy5lbGVtZW50KSYmYS5wdXNoKGMpfSk7ay5sZW5ndGg9MDt1KEMoYSksZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYygpe2EuYmVmb3JlU3RhcnQoKTt2YXIgZCxnPWEuY2xvc2UsZT1hLmFuY2hvcnM/XG5hLmZyb20uZWxlbWVudHx8YS50by5lbGVtZW50OmEuZWxlbWVudDtiKGUpJiZ6KGUpLnBhcmVudE5vZGUmJihlPWYoYSkpJiYoZD1lLnN0YXJ0KTtkPyhkPWQoKSxkLmRvbmUoZnVuY3Rpb24oYSl7ZyghYSl9KSx0YShhLGQpKTpnKCl9YS5zdHJ1Y3R1cmFsP2MoKTooSS5wdXNoKHtub2RlOnooYS5lbGVtZW50KSxmbjpjfSksYS5jbGFzc0Jhc2VkSW5kZXg9PT1aLTEmJihJPUkuc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBiLm5vZGUuY29udGFpbnMoYS5ub2RlKX0pLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5mbn0pLGgoSSkpKX0pfSk7cmV0dXJuIHh9fV19XSkucHJvdmlkZXIoXCIkYW5pbWF0ZUNzc1wiLFtcIiRhbmltYXRlUHJvdmlkZXJcIixmdW5jdGlvbihhKXt2YXIgYj1CYSgpLGM9QmEoKTt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLFwiJCRqcUxpdGVcIixcIiQkQW5pbWF0ZVJ1bm5lclwiLFwiJHRpbWVvdXRcIixcIiRkb2N1bWVudFwiLFwiJHNuaWZmZXJcIixcIiQkckFGU2NoZWR1bGVyXCIsZnVuY3Rpb24oYSxcbmUscyxuLGgsayxEKXtmdW5jdGlvbiBBKGEsYil7dmFyIGM9YS5wYXJlbnROb2RlO3JldHVybihjLiQkbmdBbmltYXRlUGFyZW50S2V5fHwoYy4kJG5nQW5pbWF0ZVBhcmVudEtleT0rK3IpKStcIi1cIithLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpK1wiLVwiK2J9ZnVuY3Rpb24gWihoLGYsQixrKXt2YXIgbTswPGIuY291bnQoQikmJihtPWMuZ2V0KEIpLG18fChmPWJhKGYsXCItc3RhZ2dlclwiKSxlLmFkZENsYXNzKGgsZiksbT16YShhLGgsayksbS5hbmltYXRpb25EdXJhdGlvbj1NYXRoLm1heChtLmFuaW1hdGlvbkR1cmF0aW9uLDApLG0udHJhbnNpdGlvbkR1cmF0aW9uPU1hdGgubWF4KG0udHJhbnNpdGlvbkR1cmF0aW9uLDApLGUucmVtb3ZlQ2xhc3MoaCxmKSxjLnB1dChCLG0pKSk7cmV0dXJuIG18fHt9fWZ1bmN0aW9uIEkoYSl7Qy5wdXNoKGEpO0Qud2FpdFVudGlsUXVpZXQoZnVuY3Rpb24oKXtiLmZsdXNoKCk7Yy5mbHVzaCgpO2Zvcih2YXIgYT1LLm9mZnNldFdpZHRoKzEsZD0wO2Q8XG5DLmxlbmd0aDtkKyspQ1tkXShhKTtDLmxlbmd0aD0wfSl9ZnVuY3Rpb24gdyhjLGYsZSl7Zj1iLmdldChlKTtmfHwoZj16YShhLGMsTWEpLFwiaW5maW5pdGVcIj09PWYuYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQmJihmLmFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50PTEpKTtiLnB1dChlLGYpO2M9ZjtlPWMuYW5pbWF0aW9uRGVsYXk7Zj1jLnRyYW5zaXRpb25EZWxheTtjLm1heERlbGF5PWUmJmY/TWF0aC5tYXgoZSxmKTplfHxmO2MubWF4RHVyYXRpb249TWF0aC5tYXgoYy5hbmltYXRpb25EdXJhdGlvbipjLmFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50LGMudHJhbnNpdGlvbkR1cmF0aW9uKTtyZXR1cm4gY312YXIgQj1oYShlKSxyPTAsSz16KGgpLmJvZHksQz1bXTtyZXR1cm4gZnVuY3Rpb24oYSxjKXtmdW5jdGlvbiBkKCl7bSgpfWZ1bmN0aW9uIGgoKXttKCEwKX1mdW5jdGlvbiBtKGIpe2lmKCEoS3x8QyYmRCkpe0s9ITA7RD0hMTtlLnJlbW92ZUNsYXNzKGEsWSk7ZS5yZW1vdmVDbGFzcyhhLFxuVyk7bWEoZywhMSk7amEoZywhMSk7dShsLGZ1bmN0aW9uKGEpe2cuc3R5bGVbYVswXV09XCJcIn0pO0IoYSxjKTtjYShhLGMpO2lmKGMub25Eb25lKWMub25Eb25lKCk7cCYmcC5jb21wbGV0ZSghYil9fWZ1bmN0aW9uIEwoYSl7cS5ibG9ja1RyYW5zaXRpb24mJmphKGcsYSk7cS5ibG9ja0tleWZyYW1lQW5pbWF0aW9uJiZtYShnLCEhYSl9ZnVuY3Rpb24geCgpe3A9bmV3IHMoe2VuZDpkLGNhbmNlbDpofSk7bSgpO3JldHVybnskJHdpbGxBbmltYXRlOiExLHN0YXJ0OmZ1bmN0aW9uKCl7cmV0dXJuIHB9LGVuZDpkfX1mdW5jdGlvbiBNKCl7ZnVuY3Rpb24gYigpe2lmKCFLKXtMKCExKTt1KGwsZnVuY3Rpb24oYSl7Zy5zdHlsZVthWzBdXT1hWzFdfSk7QihhLGMpO2UuYWRkQ2xhc3MoYSxXKTtpZihxLnJlY2FsY3VsYXRlVGltaW5nU3R5bGVzKXtmYT1nLmNsYXNzTmFtZStcIiBcIitZOyQ9QShnLGZhKTt5PXcoZyxmYSwkKTtRPXkubWF4RGVsYXk7SD1NYXRoLm1heChRLDApO0o9eS5tYXhEdXJhdGlvbjtcbmlmKDA9PT1KKXttKCk7cmV0dXJufXEuaGFzVHJhbnNpdGlvbnM9MDx5LnRyYW5zaXRpb25EdXJhdGlvbjtxLmhhc0FuaW1hdGlvbnM9MDx5LmFuaW1hdGlvbkR1cmF0aW9ufWlmKHEuYXBwbHlUcmFuc2l0aW9uRGVsYXl8fHEuYXBwbHlBbmltYXRpb25EZWxheSl7UT1cImJvb2xlYW5cIiE9PXR5cGVvZiBjLmRlbGF5JiZsYShjLmRlbGF5KT9wYXJzZUZsb2F0KGMuZGVsYXkpOlE7SD1NYXRoLm1heChRLDApO3ZhciBrO3EuYXBwbHlUcmFuc2l0aW9uRGVsYXkmJih5LnRyYW5zaXRpb25EZWxheT1RLGs9W2VhLFErXCJzXCJdLGwucHVzaChrKSxnLnN0eWxlW2tbMF1dPWtbMV0pO3EuYXBwbHlBbmltYXRpb25EZWxheSYmKHkuYW5pbWF0aW9uRGVsYXk9USxrPVtyYSxRK1wic1wiXSxsLnB1c2goayksZy5zdHlsZVtrWzBdXT1rWzFdKX1GPTFFMypIO0c9MUUzKko7aWYoYy5lYXNpbmcpe3ZhciByPWMuZWFzaW5nO3EuaGFzVHJhbnNpdGlvbnMmJihrPU8rXCJUaW1pbmdGdW5jdGlvblwiLGwucHVzaChbayxcbnJdKSxnLnN0eWxlW2tdPXIpO3EuaGFzQW5pbWF0aW9ucyYmKGs9VitcIlRpbWluZ0Z1bmN0aW9uXCIsbC5wdXNoKFtrLHJdKSxnLnN0eWxlW2tdPXIpfXkudHJhbnNpdGlvbkR1cmF0aW9uJiZwLnB1c2gocGEpO3kuYW5pbWF0aW9uRHVyYXRpb24mJnAucHVzaChxYSk7eD1EYXRlLm5vdygpO2Eub24ocC5qb2luKFwiIFwiKSxoKTtuKGQsRisxLjUqRyk7eGEoYSxjKX19ZnVuY3Rpb24gZCgpe20oKX1mdW5jdGlvbiBoKGEpe2Euc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGI9YS5vcmlnaW5hbEV2ZW50fHxhO2E9Yi4kbWFudWFsVGltZVN0YW1wfHxiLnRpbWVTdGFtcHx8RGF0ZS5ub3coKTtiPXBhcnNlRmxvYXQoYi5lbGFwc2VkVGltZS50b0ZpeGVkKDMpKTtNYXRoLm1heChhLXgsMCk+PUYmJmI+PUomJihDPSEwLG0oKSl9aWYoIUspaWYoZy5wYXJlbnROb2RlKXt2YXIgeCxwPVtdLGs9ZnVuY3Rpb24oYSl7aWYoQylEJiZhJiYoRD0hMSxtKCkpO2Vsc2UgaWYoRD0hYSx5LmFuaW1hdGlvbkR1cmF0aW9uKWlmKGE9XG5tYShnLEQpLEQpbC5wdXNoKGEpO2Vsc2V7dmFyIGI9bCxjPWIuaW5kZXhPZihhKTswPD1hJiZiLnNwbGljZShjLDEpfX0scj0wPFUmJih5LnRyYW5zaXRpb25EdXJhdGlvbiYmMD09PVQudHJhbnNpdGlvbkR1cmF0aW9ufHx5LmFuaW1hdGlvbkR1cmF0aW9uJiYwPT09VC5hbmltYXRpb25EdXJhdGlvbikmJk1hdGgubWF4KFQuYW5pbWF0aW9uRGVsYXksVC50cmFuc2l0aW9uRGVsYXkpO3I/bihiLE1hdGguZmxvb3IocipVKjFFMyksITEpOmIoKTt0LnJlc3VtZT1mdW5jdGlvbigpe2soITApfTt0LnBhdXNlPWZ1bmN0aW9uKCl7ayghMSl9fWVsc2UgbSgpfXZhciBnPXooYSk7aWYoIWd8fCFnLnBhcmVudE5vZGUpcmV0dXJuIHgoKTtjPWlhKGMpO3ZhciBsPVtdLHI9YS5hdHRyKFwiY2xhc3NcIiksdj1FYShjKSxLLEQsQyxwLHQsSCxGLEosRztpZigwPT09Yy5kdXJhdGlvbnx8IWsuYW5pbWF0aW9ucyYmIWsudHJhbnNpdGlvbnMpcmV0dXJuIHgoKTt2YXIgYWE9Yy5ldmVudCYmWChjLmV2ZW50KT9cbmMuZXZlbnQuam9pbihcIiBcIik6Yy5ldmVudCxSPVwiXCIsTj1cIlwiO2FhJiZjLnN0cnVjdHVyYWw/Uj1iYShhYSxcIm5nLVwiLCEwKTphYSYmKFI9YWEpO2MuYWRkQ2xhc3MmJihOKz1iYShjLmFkZENsYXNzLFwiLWFkZFwiKSk7Yy5yZW1vdmVDbGFzcyYmKE4ubGVuZ3RoJiYoTis9XCIgXCIpLE4rPWJhKGMucmVtb3ZlQ2xhc3MsXCItcmVtb3ZlXCIpKTtjLmFwcGx5Q2xhc3Nlc0Vhcmx5JiZOLmxlbmd0aCYmKEIoYSxjKSxOPVwiXCIpO3ZhciBZPVtSLE5dLmpvaW4oXCIgXCIpLnRyaW0oKSxmYT1yK1wiIFwiK1ksVz1iYShZLFwiLWFjdGl2ZVwiKSxyPXYudG8mJjA8T2JqZWN0LmtleXModi50bykubGVuZ3RoO2lmKCEoMDwoYy5rZXlmcmFtZVN0eWxlfHxcIlwiKS5sZW5ndGh8fHJ8fFkpKXJldHVybiB4KCk7dmFyICQsVDswPGMuc3RhZ2dlcj8odj1wYXJzZUZsb2F0KGMuc3RhZ2dlciksVD17dHJhbnNpdGlvbkRlbGF5OnYsYW5pbWF0aW9uRGVsYXk6dix0cmFuc2l0aW9uRHVyYXRpb246MCxhbmltYXRpb25EdXJhdGlvbjowfSk6XG4oJD1BKGcsZmEpLFQ9WihnLFksJCxOYSkpO2UuYWRkQ2xhc3MoYSxZKTtjLnRyYW5zaXRpb25TdHlsZSYmKHY9W08sYy50cmFuc2l0aW9uU3R5bGVdLGRhKGcsdiksbC5wdXNoKHYpKTswPD1jLmR1cmF0aW9uJiYodj0wPGcuc3R5bGVbT10ubGVuZ3RoLHY9QWEoYy5kdXJhdGlvbix2KSxkYShnLHYpLGwucHVzaCh2KSk7Yy5rZXlmcmFtZVN0eWxlJiYodj1bVixjLmtleWZyYW1lU3R5bGVdLGRhKGcsdiksbC5wdXNoKHYpKTt2YXIgVT1UPzA8PWMuc3RhZ2dlckluZGV4P2Muc3RhZ2dlckluZGV4OmIuY291bnQoJCk6MDsoYWE9MD09PVUpJiZqYShnLDk5OTkpO3ZhciB5PXcoZyxmYSwkKSxRPXkubWF4RGVsYXk7SD1NYXRoLm1heChRLDApO0o9eS5tYXhEdXJhdGlvbjt2YXIgcT17fTtxLmhhc1RyYW5zaXRpb25zPTA8eS50cmFuc2l0aW9uRHVyYXRpb247cS5oYXNBbmltYXRpb25zPTA8eS5hbmltYXRpb25EdXJhdGlvbjtxLmhhc1RyYW5zaXRpb25BbGw9cS5oYXNUcmFuc2l0aW9ucyYmXG5cImFsbFwiPT15LnRyYW5zaXRpb25Qcm9wZXJ0eTtxLmFwcGx5VHJhbnNpdGlvbkR1cmF0aW9uPXImJihxLmhhc1RyYW5zaXRpb25zJiYhcS5oYXNUcmFuc2l0aW9uQWxsfHxxLmhhc0FuaW1hdGlvbnMmJiFxLmhhc1RyYW5zaXRpb25zKTtxLmFwcGx5QW5pbWF0aW9uRHVyYXRpb249Yy5kdXJhdGlvbiYmcS5oYXNBbmltYXRpb25zO3EuYXBwbHlUcmFuc2l0aW9uRGVsYXk9bGEoYy5kZWxheSkmJihxLmFwcGx5VHJhbnNpdGlvbkR1cmF0aW9ufHxxLmhhc1RyYW5zaXRpb25zKTtxLmFwcGx5QW5pbWF0aW9uRGVsYXk9bGEoYy5kZWxheSkmJnEuaGFzQW5pbWF0aW9ucztxLnJlY2FsY3VsYXRlVGltaW5nU3R5bGVzPTA8Ti5sZW5ndGg7aWYocS5hcHBseVRyYW5zaXRpb25EdXJhdGlvbnx8cS5hcHBseUFuaW1hdGlvbkR1cmF0aW9uKUo9Yy5kdXJhdGlvbj9wYXJzZUZsb2F0KGMuZHVyYXRpb24pOkoscS5hcHBseVRyYW5zaXRpb25EdXJhdGlvbiYmKHEuaGFzVHJhbnNpdGlvbnM9ITAseS50cmFuc2l0aW9uRHVyYXRpb249XG5KLHY9MDxnLnN0eWxlW08rXCJQcm9wZXJ0eVwiXS5sZW5ndGgsbC5wdXNoKEFhKEosdikpKSxxLmFwcGx5QW5pbWF0aW9uRHVyYXRpb24mJihxLmhhc0FuaW1hdGlvbnM9ITAseS5hbmltYXRpb25EdXJhdGlvbj1KLGwucHVzaChbc2EsSitcInNcIl0pKTtpZigwPT09SiYmIXEucmVjYWxjdWxhdGVUaW1pbmdTdHlsZXMpcmV0dXJuIHgoKTtudWxsPT1jLmR1cmF0aW9uJiYwPHkudHJhbnNpdGlvbkR1cmF0aW9uJiYocS5yZWNhbGN1bGF0ZVRpbWluZ1N0eWxlcz1xLnJlY2FsY3VsYXRlVGltaW5nU3R5bGVzfHxhYSk7Rj0xRTMqSDtHPTFFMypKO2Muc2tpcEJsb2NraW5nfHwocS5ibG9ja1RyYW5zaXRpb249MDx5LnRyYW5zaXRpb25EdXJhdGlvbixxLmJsb2NrS2V5ZnJhbWVBbmltYXRpb249MDx5LmFuaW1hdGlvbkR1cmF0aW9uJiYwPFQuYW5pbWF0aW9uRGVsYXkmJjA9PT1ULmFuaW1hdGlvbkR1cmF0aW9uKTt3YShhLGMpO3EuYmxvY2tUcmFuc2l0aW9ufHxqYShnLCExKTtMKEopO3JldHVybnskJHdpbGxBbmltYXRlOiEwLFxuZW5kOmQsc3RhcnQ6ZnVuY3Rpb24oKXtpZighSylyZXR1cm4gdD17ZW5kOmQsY2FuY2VsOmgscmVzdW1lOm51bGwscGF1c2U6bnVsbH0scD1uZXcgcyh0KSxJKE0pLHB9fX19XX1dKS5wcm92aWRlcihcIiQkYW5pbWF0ZUNzc0RyaXZlclwiLFtcIiQkYW5pbWF0aW9uUHJvdmlkZXJcIixmdW5jdGlvbihhKXthLmRyaXZlcnMucHVzaChcIiQkYW5pbWF0ZUNzc0RyaXZlclwiKTt0aGlzLiRnZXQ9W1wiJGFuaW1hdGVDc3NcIixcIiRyb290U2NvcGVcIixcIiQkQW5pbWF0ZVJ1bm5lclwiLFwiJHJvb3RFbGVtZW50XCIsXCIkZG9jdW1lbnRcIixcIiRzbmlmZmVyXCIsZnVuY3Rpb24oYSxjLGQsZSxzLG4pe2Z1bmN0aW9uIGgoYSl7cmV0dXJuIGEucmVwbGFjZSgvXFxibmctXFxTK1xcYi9nLFwiXCIpfWZ1bmN0aW9uIGsoYSxiKXtVKGEpJiYoYT1hLnNwbGl0KFwiIFwiKSk7VShiKSYmKGI9Yi5zcGxpdChcIiBcIikpO3JldHVybiBhLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4tMT09PWIuaW5kZXhPZihhKX0pLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIEQoYyxcbmUsQSl7ZnVuY3Rpb24gRChhKXt2YXIgYj17fSxjPXooYSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7dShbXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oYSl7dmFyIGQ9Y1thXTtzd2l0Y2goYSl7Y2FzZSBcInRvcFwiOmQrPUkuc2Nyb2xsVG9wO2JyZWFrO2Nhc2UgXCJsZWZ0XCI6ZCs9SS5zY3JvbGxMZWZ0fWJbYV09TWF0aC5mbG9vcihkKStcInB4XCJ9KTtyZXR1cm4gYn1mdW5jdGlvbiBzKCl7dmFyIGM9aChBLmF0dHIoXCJjbGFzc1wiKXx8XCJcIiksZD1rKGMsdCksYz1rKHQsYyksZD1hKG4se3RvOkQoQSksYWRkQ2xhc3M6XCJuZy1hbmNob3ItaW4gXCIrZCxyZW1vdmVDbGFzczpcIm5nLWFuY2hvci1vdXQgXCIrYyxkZWxheTohMH0pO3JldHVybiBkLiQkd2lsbEFuaW1hdGU/ZDpudWxsfWZ1bmN0aW9uIGYoKXtuLnJlbW92ZSgpO2UucmVtb3ZlQ2xhc3MoXCJuZy1hbmltYXRlLXNoaW1cIik7QS5yZW1vdmVDbGFzcyhcIm5nLWFuaW1hdGUtc2hpbVwiKX12YXIgbj1HKHooZSkuY2xvbmVOb2RlKCEwKSksXG50PWgobi5hdHRyKFwiY2xhc3NcIil8fFwiXCIpO2UuYWRkQ2xhc3MoXCJuZy1hbmltYXRlLXNoaW1cIik7QS5hZGRDbGFzcyhcIm5nLWFuaW1hdGUtc2hpbVwiKTtuLmFkZENsYXNzKFwibmctYW5jaG9yXCIpO3cuYXBwZW5kKG4pO3ZhciBtO2M9ZnVuY3Rpb24oKXt2YXIgYz1hKG4se2FkZENsYXNzOlwibmctYW5jaG9yLW91dFwiLGRlbGF5OiEwLGZyb206RChlKX0pO3JldHVybiBjLiQkd2lsbEFuaW1hdGU/YzpudWxsfSgpO2lmKCFjJiYobT1zKCksIW0pKXJldHVybiBmKCk7dmFyIEw9Y3x8bTtyZXR1cm57c3RhcnQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7YyYmYy5lbmQoKX12YXIgYixjPUwuc3RhcnQoKTtjLmRvbmUoZnVuY3Rpb24oKXtjPW51bGw7aWYoIW0mJihtPXMoKSkpcmV0dXJuIGM9bS5zdGFydCgpLGMuZG9uZShmdW5jdGlvbigpe2M9bnVsbDtmKCk7Yi5jb21wbGV0ZSgpfSksYztmKCk7Yi5jb21wbGV0ZSgpfSk7cmV0dXJuIGI9bmV3IGQoe2VuZDphLGNhbmNlbDphfSl9fX1mdW5jdGlvbiBBKGEsXG5iLGMsZSl7dmFyIGg9dChhKSxmPXQoYiksaz1bXTt1KGUsZnVuY3Rpb24oYSl7KGE9RChjLGEub3V0LGFbXCJpblwiXSkpJiZrLnB1c2goYSl9KTtpZihofHxmfHwwIT09ay5sZW5ndGgpcmV0dXJue3N0YXJ0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3UoYixmdW5jdGlvbihhKXthLmVuZCgpfSl9dmFyIGI9W107aCYmYi5wdXNoKGguc3RhcnQoKSk7ZiYmYi5wdXNoKGYuc3RhcnQoKSk7dShrLGZ1bmN0aW9uKGEpe2IucHVzaChhLnN0YXJ0KCkpfSk7dmFyIGM9bmV3IGQoe2VuZDphLGNhbmNlbDphfSk7ZC5hbGwoYixmdW5jdGlvbihhKXtjLmNvbXBsZXRlKGEpfSk7cmV0dXJuIGN9fX1mdW5jdGlvbiB0KGMpe3ZhciBkPWMuZWxlbWVudCxlPWMub3B0aW9uc3x8e307Yy5zdHJ1Y3R1cmFsPyhlLnN0cnVjdHVyYWw9ZS5hcHBseUNsYXNzZXNFYXJseT0hMCxlLmV2ZW50PWMuZXZlbnQsXCJsZWF2ZVwiPT09ZS5ldmVudCYmKGUub25Eb25lPWUuZG9tT3BlcmF0aW9uKSk6ZS5ldmVudD1udWxsO1xuYz1hKGQsZSk7cmV0dXJuIGMuJCR3aWxsQW5pbWF0ZT9jOm51bGx9aWYoIW4uYW5pbWF0aW9ucyYmIW4udHJhbnNpdGlvbnMpcmV0dXJuIEg7dmFyIEk9eihzKS5ib2R5O2M9eihlKTt2YXIgdz1HKEkucGFyZW50Tm9kZT09PWM/STpjKTtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGEuZnJvbSYmYS50bz9BKGEuZnJvbSxhLnRvLGEuY2xhc3NlcyxhLmFuY2hvcnMpOnQoYSl9fV19XSkucHJvdmlkZXIoXCIkJGFuaW1hdGVKc1wiLFtcIiRhbmltYXRlUHJvdmlkZXJcIixmdW5jdGlvbihhKXt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsXCIkJEFuaW1hdGVSdW5uZXJcIixcIiQkckFGTXV0ZXhcIixcIiQkanFMaXRlXCIsZnVuY3Rpb24oYixjLGQsZSl7ZnVuY3Rpb24gcyhjKXtjPVgoYyk/YzpjLnNwbGl0KFwiIFwiKTtmb3IodmFyIGQ9W10sZT17fSxBPTA7QTxjLmxlbmd0aDtBKyspe3ZhciBuPWNbQV0scz1hLiQkcmVnaXN0ZXJlZEFuaW1hdGlvbnNbbl07cyYmIWVbbl0mJihkLnB1c2goYi5nZXQocykpLGVbbl09XG4hMCl9cmV0dXJuIGR9dmFyIG49aGEoZSk7cmV0dXJuIGZ1bmN0aW9uKGEsYixkLGUpe2Z1bmN0aW9uIHQoKXtlLmRvbU9wZXJhdGlvbigpO24oYSxlKX1mdW5jdGlvbiB6KGEsYixkLGUsZyl7c3dpdGNoKGQpe2Nhc2UgXCJhbmltYXRlXCI6Yj1bYixlLmZyb20sZS50byxnXTticmVhaztjYXNlIFwic2V0Q2xhc3NcIjpiPVtiLHIsSyxnXTticmVhaztjYXNlIFwiYWRkQ2xhc3NcIjpiPVtiLHIsZ107YnJlYWs7Y2FzZSBcInJlbW92ZUNsYXNzXCI6Yj1bYixLLGddO2JyZWFrO2RlZmF1bHQ6Yj1bYixnXX1iLnB1c2goZSk7aWYoYT1hLmFwcGx5KGEsYikpaWYoQ2EoYS5zdGFydCkmJihhPWEuc3RhcnQoKSksYSBpbnN0YW5jZW9mIGMpYS5kb25lKGcpO2Vsc2UgaWYoQ2EoYSkpcmV0dXJuIGE7cmV0dXJuIEh9ZnVuY3Rpb24gdyhhLGIsZCxlLGcpe3ZhciBmPVtdO3UoZSxmdW5jdGlvbihlKXt2YXIgaD1lW2ddO2gmJmYucHVzaChmdW5jdGlvbigpe3ZhciBlLGcsZj0hMSxsPWZ1bmN0aW9uKGEpe2Z8fFxuKGY9ITAsKGd8fEgpKGEpLGUuY29tcGxldGUoIWEpKX07ZT1uZXcgYyh7ZW5kOmZ1bmN0aW9uKCl7bCgpfSxjYW5jZWw6ZnVuY3Rpb24oKXtsKCEwKX19KTtnPXooaCxhLGIsZCxmdW5jdGlvbihhKXtsKCExPT09YSl9KTtyZXR1cm4gZX0pfSk7cmV0dXJuIGZ9ZnVuY3Rpb24gQihhLGIsZCxlLGcpe3ZhciBmPXcoYSxiLGQsZSxnKTtpZigwPT09Zi5sZW5ndGgpe3ZhciBoLGs7XCJiZWZvcmVTZXRDbGFzc1wiPT09Zz8oaD13KGEsXCJyZW1vdmVDbGFzc1wiLGQsZSxcImJlZm9yZVJlbW92ZUNsYXNzXCIpLGs9dyhhLFwiYWRkQ2xhc3NcIixkLGUsXCJiZWZvcmVBZGRDbGFzc1wiKSk6XCJzZXRDbGFzc1wiPT09ZyYmKGg9dyhhLFwicmVtb3ZlQ2xhc3NcIixkLGUsXCJyZW1vdmVDbGFzc1wiKSxrPXcoYSxcImFkZENsYXNzXCIsZCxlLFwiYWRkQ2xhc3NcIikpO2gmJihmPWYuY29uY2F0KGgpKTtrJiYoZj1mLmNvbmNhdChrKSl9aWYoMCE9PWYubGVuZ3RoKXJldHVybiBmdW5jdGlvbihhKXt2YXIgYj1bXTtmLmxlbmd0aCYmXG51KGYsZnVuY3Rpb24oYSl7Yi5wdXNoKGEoKSl9KTtiLmxlbmd0aD9jLmFsbChiLGEpOmEoKTtyZXR1cm4gZnVuY3Rpb24oYSl7dShiLGZ1bmN0aW9uKGIpe2E/Yi5jYW5jZWwoKTpiLmVuZCgpfSl9fX0zPT09YXJndW1lbnRzLmxlbmd0aCYmbmEoZCkmJihlPWQsZD1udWxsKTtlPWlhKGUpO2R8fChkPWEuYXR0cihcImNsYXNzXCIpfHxcIlwiLGUuYWRkQ2xhc3MmJihkKz1cIiBcIitlLmFkZENsYXNzKSxlLnJlbW92ZUNsYXNzJiYoZCs9XCIgXCIrZS5yZW1vdmVDbGFzcykpO3ZhciByPWUuYWRkQ2xhc3MsSz1lLnJlbW92ZUNsYXNzLEM9cyhkKSxFLGY7aWYoQy5sZW5ndGgpe3ZhciBGLEc7XCJsZWF2ZVwiPT1iPyhHPVwibGVhdmVcIixGPVwiYWZ0ZXJMZWF2ZVwiKTooRz1cImJlZm9yZVwiK2IuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYi5zdWJzdHIoMSksRj1iKTtcImVudGVyXCIhPT1iJiZcIm1vdmVcIiE9PWImJihFPUIoYSxiLGUsQyxHKSk7Zj1CKGEsYixlLEMsRil9aWYoRXx8ZilyZXR1cm57c3RhcnQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGMpe249XG4hMDt0KCk7Y2EoYSxlKTtnLmNvbXBsZXRlKGMpfXZhciBkLGs9W107RSYmay5wdXNoKGZ1bmN0aW9uKGEpe2Q9RShhKX0pO2subGVuZ3RoP2sucHVzaChmdW5jdGlvbihhKXt0KCk7YSghMCl9KTp0KCk7ZiYmay5wdXNoKGZ1bmN0aW9uKGEpe2Q9ZihhKX0pO3ZhciBuPSExLGc9bmV3IGMoe2VuZDpmdW5jdGlvbigpe258fCgoZHx8SCkodm9pZCAwKSxiKHZvaWQgMCkpfSxjYW5jZWw6ZnVuY3Rpb24oKXtufHwoKGR8fEgpKCEwKSxiKCEwKSl9fSk7Yy5jaGFpbihrLGIpO3JldHVybiBnfX19fV19XSkucHJvdmlkZXIoXCIkJGFuaW1hdGVKc0RyaXZlclwiLFtcIiQkYW5pbWF0aW9uUHJvdmlkZXJcIixmdW5jdGlvbihhKXthLmRyaXZlcnMucHVzaChcIiQkYW5pbWF0ZUpzRHJpdmVyXCIpO3RoaXMuJGdldD1bXCIkJGFuaW1hdGVKc1wiLFwiJCRBbmltYXRlUnVubmVyXCIsZnVuY3Rpb24oYSxjKXtmdW5jdGlvbiBkKGMpe3JldHVybiBhKGMuZWxlbWVudCxjLmV2ZW50LGMuY2xhc3NlcyxjLm9wdGlvbnMpfVxucmV0dXJuIGZ1bmN0aW9uKGEpe2lmKGEuZnJvbSYmYS50byl7dmFyIGI9ZChhLmZyb20pLG49ZChhLnRvKTtpZihifHxuKXJldHVybntzdGFydDpmdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtyZXR1cm4gZnVuY3Rpb24oKXt1KGQsZnVuY3Rpb24oYSl7YS5lbmQoKX0pfX12YXIgZD1bXTtiJiZkLnB1c2goYi5zdGFydCgpKTtuJiZkLnB1c2gobi5zdGFydCgpKTtjLmFsbChkLGZ1bmN0aW9uKGEpe2UuY29tcGxldGUoYSl9KTt2YXIgZT1uZXcgYyh7ZW5kOmEoKSxjYW5jZWw6YSgpfSk7cmV0dXJuIGV9fX1lbHNlIHJldHVybiBkKGEpfX1dfV0pfSkod2luZG93LHdpbmRvdy5hbmd1bGFyKTtcblxuIiwiIWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlLG8sbil7ZnVuY3Rpb24gcih0LHIsaSxsKXtmdW5jdGlvbiBhKCl7dmFyIGU9bnVsbCE9PWwub3B0aW9ucy50ZW1wbGF0ZT8ndGVtcGxhdGU9XCInK2wub3B0aW9ucy50ZW1wbGF0ZSsnXCInOlwiXCI7bC5pdGVtRGlyZWN0aXZlPVwidW5kZWZpbmVkXCI9PXR5cGVvZiBsLml0ZW1EaXJlY3RpdmU/XCJjYXJvdXNlbC1nZW5lcmljLWl0ZW1cIjpsLml0ZW1EaXJlY3RpdmU7dmFyIHQ9XCI8XCIrbC5pdGVtRGlyZWN0aXZlKycgbmctbW9kZWw9XCJpdGVtXCIgJytlKydvbi1zZWxlY3Q9XCJ2bS5zZWxlY3RJdGVtKGl0ZW0pXCIgY2Fyb3VzZWwtb3B0aW9ucz1cIm1lbnVDYXJvdXNlbC5vcHRpb25zXCIgJztyZXR1cm4gdCs9XCI+PC9cIitsLml0ZW1EaXJlY3RpdmUrXCI+XCJ9ZnVuY3Rpb24gcygpe3ZhciBlPW4uJGdldEJ5SGFuZGxlKGwub3B0aW9ucy5jYXJvdXNlbElkKS5nZXRTY3JvbGxWaWV3KCksdD1lLl9fY29udGFpbmVyLG89ZS50b3VjaFN0YXJ0LHI9ZS50b3VjaE1vdmU7dC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLGUudG91Y2hTdGFydCksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGUudG91Y2hNb3ZlKSxlLnRvdWNoU3RhcnQ9ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe30sby5hcHBseShlLFt0XSl9LGUudG91Y2hNb3ZlPWZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXt9LHIuYXBwbHkoZSxbdF0pfSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsZS50b3VjaFN0YXJ0LCExKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsZS50b3VjaE1vdmUsITEpfWwuZWw9cixsLm9wdGlvbnMudHJhY2tCeT1cInVuZGVmaW5lZFwiIT10eXBlb2YgaS50cmFja0J5P2kudHJhY2tCeTpcIiRpbmRleFwiLGwub3B0aW9ucy50cmFja0J5c3RyPVwiJGluZGV4XCI9PT1sLm9wdGlvbnMudHJhY2tCeT9cIiRpbmRleFwiOlwiaXRlbS5cIitsLm9wdGlvbnMudHJhY2tCeTt2YXIgYz1sLm9wdGlvbnMuYW5pbWF0ZUluP1wiIGFuaW1hdGVJblwiOlwiXCIsdT0nPGRpdiBjbGFzcz1cImEtY2Fyb3VzZWxcIj4nO2wub3B0aW9ucy5wdWxsUmVmcmVzaC5hY3RpdmUmJih1Kz0nPGRpdiBjbGFzcz1cInNwaW5uZXItd3JhcHBlclwiIG5nLWlmPVwidm0ub3B0aW9ucy5wdWxsUmVmcmVzaC5sb2FkaW5nXCI+PGlvbi1zcGlubmVyIGljb249XCJhbmRyb2lkXCI+PC9pb24tc3Bpbm5lcj48L2Rpdj4nLHUrPSc8c3BhbiBjbGFzcz1cInB1bGxyZWZyZXNoLWluZGljYXRvclwiPjxzdmcgdmlld0JveD1cIjAgMCA2NCA2NFwiPjxnPjxjaXJjbGUgc3Ryb2tlLXdpZHRoPVwiNlwiIHN0cm9rZS1kYXNoYXJyYXk9XCIxMzUuMjYyNjEyMzkxNDQyODdcIiBzdHJva2UtZGFzaG9mZnNldD1cIjE2LjUxMzcxNDc0NTU2MjE0XCIgcj1cIjI2XCIgY3g9XCIzMlwiIGN5PVwiMzJcIiBmaWxsPVwibm9uZVwiIHRyYW5zZm9ybT1cInNjYWxlKDEsMSkgdHJhbnNsYXRlKDAsMCkgcm90YXRlKDAsMzIsMzIpXCI+PC9jaXJjbGU+PC9nPjwvc3ZnPjwvc3Bhbj4nKSx1Kz1cIjxpb24tc2Nyb2xsIFwiLGwub3B0aW9ucy5wdWxsUmVmcmVzaC5hY3RpdmUmJih1Kz0nb24tc2Nyb2xsPVwidm0ub25TY3JvbGwoKVwiICcpLHUrPSdzY3JvbGxiYXIteD1cImZhbHNlXCIgZGVsZWdhdGUtaGFuZGxlPVwiJytsLm9wdGlvbnMuY2Fyb3VzZWxJZCsnXCIgem9vbWluZz1cImZhbHNlXCIgZGlyZWN0aW9uPVwieFwiIG92ZXJmbG93LXNjcm9sbD1cImZhbHNlXCIgaGFzLWJvdW5jaW5nPVwidHJ1ZVwiPjxuYXYgc3R5bGU9XCJ2aXNpYmlsaXR5OmhpZGRlbjtcIj48dWw+IDxsaSBuZy1yZXBlYXQ9XCJpdGVtIGluIHZtLmFycmF5UHJvdmlkZXIgdHJhY2sgYnkgJytsLm9wdGlvbnMudHJhY2tCeXN0cisnXCJjbGFzcz1cImNhcm91c2VsLWl0ZW0nK2MrJ1wibmctY2xhc3M9XCJ7XFwnYWN0aXZlXFwnOnZtLml0ZW1BY3RpdmUgPT09IGl0ZW19XCI+JythKCkrXCI8L2xpPjwvdWw+PC9uYXY+PC9pb24tc2Nyb2xsPjwvZGl2PlwiLHU9ZSh1KSh0KSxyLmFwcGVuZCh1KSxvKGZ1bmN0aW9uKCl7bC5hcnJheVByb3ZpZGVyJiZsLmFycmF5UHJvdmlkZXIubGVuZ3RoPjAmJmwuaW5pdENhcm91c2VsKCkscygpfSwwKX1yZXR1cm57cmVzdHJpY3Q6XCJFXCIscmVwbGFjZTohMCx0ZW1wbGF0ZTpcIlwiLHNjb3BlOnt9LGxpbms6cixjb250cm9sbGVyOnQsY29udHJvbGxlckFzOlwidm1cIixiaW5kVG9Db250cm9sbGVyOntpdGVtRGlyZWN0aXZlOlwiQFwiLGNhcm91c2VsT3B0aW9uczpcIj1cIixhcnJheVByb3ZpZGVyOlwiPVwiLG9uU2VsZWN0OlwiJlwifX19ZnVuY3Rpb24gdChlLHQsbyxuLHIpe2Z1bmN0aW9uIGkoKXtmdW5jdGlvbiB0KGUsdCl7dmFyIG47XCJvYmplY3RcIj09dHlwZW9mIHQ/KG49dC5jYXJvdXNlbElkLGFuZ3VsYXIuZXh0ZW5kKGYub3B0aW9ucyx0KSk6bj10LG49PT1mLm9wdGlvbnMuY2Fyb3VzZWxJZCYmbyhmLmluaXRDYXJvdXNlbCwwKX1mdW5jdGlvbiBuKGUsdCl7dmFyIG89dC5pZENvbnRhaW5zLG49dC5leGNlcHQ7Zi5vcHRpb25zLmNhcm91c2VsSWQuaW5kZXhPZihvKT49MCYmZi5vcHRpb25zLmNhcm91c2VsSWQhPT1uJiYoZi5pdGVtQWN0aXZlPW51bGwpfWFuZ3VsYXIuZXh0ZW5kKGYub3B0aW9ucyxmLmNhcm91c2VsT3B0aW9ucyksZS4kb24oXCJhLWNhcm91c2VsLmFycmF5dXBkYXRlZFwiLHQpLGUuJG9uKFwiYS1jYXJvdXNlbC5kZXNhY3RpdmF0ZUl0ZW1cIixuKSxmLm9wdGlvbnMucHVsbFJlZnJlc2guYWN0aXZlJiZlLiRvbihcImEtY2Fyb3VzZWwucHVsbHJlZnJlc2guZG9uZVwiLHApfWZ1bmN0aW9uIGwoKXtmdW5jdGlvbiBlKCl7dmFyIHQ9cGFyc2VJbnQobFtzLTFdLm9mZnNldFdpZHRoKSxuPXBhcnNlSW50KGxbcy0xXS5vZmZzZXRIZWlnaHQpO3Q+MCYmbj4wP2koKTooY29uc29sZS5sb2coXCJbSU5GT10gQ3JlYXRpbmcgQ2Fyb3VzZWwgYnV0IERPTSBub3QgcmVhZHkgeWV0Li4uXCIpLGc+aD9vKGZ1bmN0aW9uKCl7ZSgpfSw1MCk6Y29uc29sZS5sb2coXCJbRVJST1JdIFNpemUgaXRlbSBDYXJvdXNlbCBjb3VsZCBub3QgYmUgZGV0ZXJtaW5lZFwiLGYub3B0aW9ucy5jYXJvdXNlbElkKSxoKyspfWZ1bmN0aW9uIGkoKXt2YXIgZSxvPW51bGwhPT1mLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5wcm9wZXJ0eTtpZihhbmd1bGFyLmZvckVhY2gobCxmdW5jdGlvbih0KXtlPWYuYXJyYXlQcm92aWRlclt2XSxlLmNhcm91c2VsSWQ9Zi5vcHRpb25zLmNhcm91c2VsSWQsZCs9dC5vZmZzZXRXaWR0aCxmLm9wdGlvbnMud2lkdGhJdGVtPU1hdGgubWF4KHQub2Zmc2V0V2lkdGgsZi5vcHRpb25zLndpZHRoSXRlbSksZi5vcHRpb25zLmhlaWdodEl0ZW09TWF0aC5tYXgodC5vZmZzZXRIZWlnaHQsZi5vcHRpb25zLmhlaWdodEl0ZW0pLGYuYXJyYXlQcm92aWRlclt2XS53aWR0aEl0ZW09dC5vZmZzZXRXaWR0aCxvJiYtMT09PWYub3B0aW9ucy5zZWxlY3RBdFN0YXJ0LmluZGV4JiZlW2Yub3B0aW9ucy5zZWxlY3RBdFN0YXJ0LnByb3BlcnR5XT09PWYub3B0aW9ucy5zZWxlY3RBdFN0YXJ0LnZhbHVlJiYoZi5vcHRpb25zLnNlbGVjdEF0U3RhcnQuaW5kZXg9diksdis9MX0pLGYub3B0aW9ucy5jZW50ZXJPblNlbGVjdCl7dmFyIGk9LjUqbi5pbm5lcldpZHRoLHM9bFswXSxoPWxbdS0xXTtwPWktLjUqcy5vZmZzZXRXaWR0aCxtPWktLjUqaC5vZmZzZXRXaWR0aCxkKz1wK20sZi5vcHRpb25zLm1heFNjcm9sbD1uLmlubmVyV2lkdGgtZCxcInJpZ2h0XCI9PT1mLm9wdGlvbnMuYWxpZ24/ci4kZ2V0QnlIYW5kbGUoZi5vcHRpb25zLmNhcm91c2VsSWQpLnNjcm9sbFRvKC0xKmYub3B0aW9ucy5tYXhTY3JvbGwsMCwhMSk6XCJjZW50ZXJcIj09PWYub3B0aW9ucy5hbGlnbj9yLiRnZXRCeUhhbmRsZShmLm9wdGlvbnMuY2Fyb3VzZWxJZCkuc2Nyb2xsVG8oZi5vcHRpb25zLm1heFNjcm9sbCotLjUsMCwhMSk6ci4kZ2V0QnlIYW5kbGUoZi5vcHRpb25zLmNhcm91c2VsSWQpLnNjcm9sbFRvKDAsMCwhMCl9ZWxzZSBkKz00LGYub3B0aW9ucy5tYXhTY3JvbGw9bi5pbm5lcldpZHRoLWQ7Zi5vcHRpb25zLndpZHRoQ2Fyb3VzZWw9ZCwhbyYmZi5vcHRpb25zLnNlbGVjdEZpcnN0P2MoXCJyaWdodFwiPT09Zi5vcHRpb25zLmFsaWduP2YuYXJyYXlQcm92aWRlclt1LTFdOmYuYXJyYXlQcm92aWRlclswXSk6byYmLTEhPT1mLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5pbmRleCYmYShmLmFycmF5UHJvdmlkZXJbZi5vcHRpb25zLnNlbGVjdEF0U3RhcnQuaW5kZXhdKSxmLm5hdkVsZW09dC5maW5kKFwibmF2XCIpLGYubmF2RWxlbS5jc3Moe3dpZHRoOmQrXCJweFwiLGhlaWdodDpmLm9wdGlvbnMuaGVpZ2h0SXRlbStcInB4XCIsdmlzaWJpbGl0eTpcInZpc2libGVcIixcInBhZGRpbmctbGVmdFwiOnArXCJweFwifSksZi5vcHRpb25zLnB1bGxSZWZyZXNoLmFjdGl2ZSYmKGYucHVsbHJlZnJlc2hJbmRpY2F0b3I9YW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYS1jYXJvdXNlbCAucHVsbHJlZnJlc2gtaW5kaWNhdG9yXCIpKSxmLnN2Z0VsZW09dC5maW5kKFwiZ1wiKSl9dmFyIGw9dC5maW5kKFwibGlcIikscz1sLmxlbmd0aCx1PWFuZ3VsYXIuZWxlbWVudChsKS5sZW5ndGgsZD0wLHA9MCxtPTAsdj0wLGg9MCxnPTE1O2lmKGYuaXRlbUFjdGl2ZT1udWxsLCEodT4wKSl0aHJvdyBFcnJvcihcIlRyeWluZyB0byBjcmVhdGUgYSBjYXJvdXNlbCBmcm9tIGFuIGVtcHR5IGFycmF5XCIsZi5vcHRpb25zKTtvKGZ1bmN0aW9uKCl7ZSgpfSw1MCl9ZnVuY3Rpb24gYShlKXt2YXIgdCxvO2lmKGMoZSksZi5vcHRpb25zLmNlbnRlck9uU2VsZWN0KXt2YXIgbj11KGUpO2lmKHQ9MCwwPT09bil0PTA7ZWxzZSBmb3Iobz0wO24+bztvKyspdCs9LjUqKGYuYXJyYXlQcm92aWRlcltvXS53aWR0aEl0ZW0rZi5hcnJheVByb3ZpZGVyW28rMV0ud2lkdGhJdGVtKTtyLiRnZXRCeUhhbmRsZShmLm9wdGlvbnMuY2Fyb3VzZWxJZCkuc2Nyb2xsVG8odCwwLCEwKX19ZnVuY3Rpb24gcygpe3ZhciBlLHQ9ci4kZ2V0QnlIYW5kbGUoZi5vcHRpb25zLmNhcm91c2VsSWQpLmdldFNjcm9sbFBvc2l0aW9uKCkubGVmdCxvPTAsaT0wO2lmKGU9Zi5vcHRpb25zLm1heFNjcm9sbDwwP3QvZi5vcHRpb25zLm1heFNjcm9sbCotMTp0LzEwLGU+MSl7dmFyIGw9dC0gLTEqZi5vcHRpb25zLm1heFNjcm9sbDtvPWwvbi5pbm5lcldpZHRoLGYucHVsbHJlZnJlc2hJbmRpY2F0b3IuY3NzKHt0cmFuc2Zvcm06XCJ0cmFuc2xhdGVYKFwiKy01NippK1wicHgpXCJ9KX1vPi4yNSYmdD4wPyhmLnB1bGxyZWZyZXNoSW5kaWNhdG9yLmNzcyh7dHJhbnNmb3JtOlwidHJhbnNsYXRlWCgwcHgpXCIsZGlzcGxheTpcIm5vbmVcIn0pLGQoKSk6KGk9by8uMixmLnN2Z0VsZW1bMF0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsXCJyb3RhdGUoXCIrMzYwKmkrXCIgMzIgMzIpXCIpLGYucHVsbHJlZnJlc2hJbmRpY2F0b3IuY3NzKHt0cmFuc2Zvcm06XCJ0cmFuc2xhdGVYKFwiKy01NippK1wicHgpXCJ9KSl9ZnVuY3Rpb24gYyh0KXtmLml0ZW1BY3RpdmU9dCxmLm9uU2VsZWN0LmNhbGwobnVsbCx7aXRlbTp0fSksZS4kYnJvYWRjYXN0KFwiYS1jYXJvdXNlbC5pdGVtc2VsZWN0ZWRcIix0KX1mdW5jdGlvbiB1KGUpe2Zvcih2YXIgdCBpbiBmLmFycmF5UHJvdmlkZXIpaWYoZi5hcnJheVByb3ZpZGVyW3RdPT09ZSlyZXR1cm4gdH1mdW5jdGlvbiBkKCl7Zi5vcHRpb25zLnB1bGxSZWZyZXNoLmxvYWRpbmd8fChlLiRhcHBseShmdW5jdGlvbigpe2Yub3B0aW9ucy5wdWxsUmVmcmVzaC5sb2FkaW5nPSEwfSksci4kZ2V0QnlIYW5kbGUoZi5vcHRpb25zLmNhcm91c2VsSWQpLmZyZWV6ZVNjcm9sbCghMCksZi5uYXZFbGVtLmNzcyh7d2lkdGg6Zi5vcHRpb25zLndpZHRoQ2Fyb3VzZWwrNDUrXCJweFwifSksci4kZ2V0QnlIYW5kbGUoZi5vcHRpb25zLmNhcm91c2VsSWQpLnJlc2l6ZSgpLGYub3B0aW9ucy5wdWxsUmVmcmVzaC5jYWxsQmFjaygpKX1mdW5jdGlvbiBwKCl7Zi5vcHRpb25zLnB1bGxSZWZyZXNoLmxvYWRpbmc9ITEsZi5uYXZFbGVtLmNzcyh7d2lkdGg6Zi5vcHRpb25zLndpZHRoQ2Fyb3VzZWwrXCJweFwifSksci4kZ2V0QnlIYW5kbGUoZi5vcHRpb25zLmNhcm91c2VsSWQpLnJlc2l6ZSgpLHIuJGdldEJ5SGFuZGxlKGYub3B0aW9ucy5jYXJvdXNlbElkKS5mcmVlemVTY3JvbGwoITEpLGYucHVsbHJlZnJlc2hJbmRpY2F0b3IuY3NzKHt0cmFuc2Zvcm06XCJ0cmFuc2xhdGVYKDBweClcIixkaXNwbGF5OlwiYmxvY2tcIn0pfXZhciBmPXRoaXM7Zi5vcHRpb25zPXtzaG93U2Nyb2xsOiExLGNhcm91c2VsSWQ6XCJteS1jYXJvdXNlbFwiLHRlbXBsYXRlOm51bGwsYWxpZ246XCJsZWZ0XCIsY2VudGVyT25TZWxlY3Q6ITAsd2lkdGhJdGVtOjAsaGVpZ2h0SXRlbTowLHRyYWNrQnk6XCIkaW5kZXhcIixzZWxlY3RGaXJzdDohMCxzZWxlY3RBdFN0YXJ0Ontwcm9wZXJ0eTpudWxsLHZhbHVlOm51bGwsaW5kZXg6LTF9LHB1bGxSZWZyZXNoOnthY3RpdmU6ITEsY2FsbEJhY2s6YW5ndWxhci5ub29wLGxvYWRpbmc6ITF9LGFuaW1hdGVJbjohMX0sZi5pbml0Q2Fyb3VzZWw9bCxmLnNlbGVjdEl0ZW09YSxmLm9uU2Nyb2xsPXMsaSgpfWFuZ3VsYXIubW9kdWxlKFwiYUNhcm91c2VsXCIsW10pLmRpcmVjdGl2ZShcImFDYXJvdXNlbFwiLGUpLGUuJGluamVjdD1bXCIkY29tcGlsZVwiLFwiJHRpbWVvdXRcIixcIiRpb25pY1Njcm9sbERlbGVnYXRlXCJdLHQuJGluamVjdD1bXCIkc2NvcGVcIixcIiRlbGVtZW50XCIsXCIkdGltZW91dFwiLFwiJHdpbmRvd1wiLFwiJGlvbmljU2Nyb2xsRGVsZWdhdGVcIl19KCksZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKCl7cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHJlcGxhY2U6ITAsdGVtcGxhdGVVcmw6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC50ZW1wbGF0ZX0sc2NvcGU6e30sY29udHJvbGxlcjp0LGNvbnRyb2xsZXJBczpcInZtXCIsYmluZFRvQ29udHJvbGxlcjp7bmdNb2RlbDpcIj1cIixvblNlbGVjdDpcIiZcIixjYXJvdXNlbE9wdGlvbnM6XCI9XCJ9fX1mdW5jdGlvbiB0KGUpe2Z1bmN0aW9uIHQoKXtlLiRvbihcImEtY2Fyb3VzZWwuaXRlbXNlbGVjdGVkXCIsZnVuY3Rpb24oZSx0KXtvLnNlbGVjdGVkPXQ9PT1vLm5nTW9kZWw/ITA6ITF9KX12YXIgbz10aGlzO28uc2VsZWN0ZWQ9ITEsdCgpfXZhciBvPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO29bby5sZW5ndGgtMV0uc3JjO2FuZ3VsYXIubW9kdWxlKFwiYUNhcm91c2VsXCIpLmRpcmVjdGl2ZShcImNhcm91c2VsR2VuZXJpY0l0ZW1cIixlKSx0LiRpbmplY3Q9W1wiJHNjb3BlXCJdfSgpLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSgpe3JldHVybntyZXN0cmljdDpcIkVcIixyZXBsYWNlOiEwLHRlbXBsYXRlOic8YSBjbGFzcz1cImEtY2Fyb3VzZWwtdGV4dC1pdGVtXCJuZy1iaW5kPVwiOjp2bS5uZ01vZGVsLmRpc3BsYXlcIm5nLWNsaWNrPVwidm0ub25TZWxlY3Qoe2l0ZW06dm0ubmdNb2RlbH0pXCI+PC9hPicsc2NvcGU6e30sY29udHJvbGxlcjp0LGNvbnRyb2xsZXJBczpcInZtXCIsYmluZFRvQ29udHJvbGxlcjp7bmdNb2RlbDpcIj1cIixvblNlbGVjdDpcIiZcIn19fWZ1bmN0aW9uIHQoZSl7ZnVuY3Rpb24gdCgpe2UuJG9uKFwiYWNhcm91c2VsLml0ZW1zZWxlY3RlZFwiLGZ1bmN0aW9uKGUsdCl7by5zZWxlY3RlZD10PT09by5uZ01vZGVsPyEwOiExfSl9dmFyIG89dGhpcztvLnNlbGVjdGVkPSExLHQoKX1hbmd1bGFyLm1vZHVsZShcImFDYXJvdXNlbFwiKS5kaXJlY3RpdmUoXCJjYXJvdXNlbFRleHRJdGVtXCIsZSksdC4kaW5qZWN0PVtcIiRzY29wZVwiXX0oKTsiLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTmFtZTogICAgICAgICAgbmcta25vYlxuICogRGVzY3JpcHRpb246ICAgQW5ndWxhci5qcyBLbm9iIGRpcmVjdGl2ZVxuICogVmVyc2lvbjogICAgICAgMC4xLjNcbiAqIEhvbWVwYWdlOiAgICAgIGh0dHBzOi8vcmFkbWllLmdpdGh1Yi5pby9uZy1rbm9iXG4gKiBMaWNlbmNlOiAgICAgICBNSVRcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXCJ1c2Ugc3RyaWN0XCI7IWZ1bmN0aW9uKCl7dmFyIHVpPXt9LEtub2I9ZnVuY3Rpb24oZWxlbWVudCx2YWx1ZSxvcHRpb25zKXt0aGlzLmVsZW1lbnQ9ZWxlbWVudCx0aGlzLnZhbHVlPXZhbHVlLHRoaXMub3B0aW9ucz1vcHRpb25zLHRoaXMuaW5EcmFnPSExfTtLbm9iLnByb3RvdHlwZS52YWx1ZVRvUmFkaWFucz1mdW5jdGlvbih2YWx1ZSx2YWx1ZUVuZCxhbmdsZUVuZCxhbmdsZVN0YXJ0LHZhbHVlU3RhcnQpe3JldHVybiB2YWx1ZUVuZD12YWx1ZUVuZHx8MTAwLHZhbHVlU3RhcnQ9dmFsdWVTdGFydHx8MCxhbmdsZUVuZD1hbmdsZUVuZHx8MzYwLGFuZ2xlU3RhcnQ9YW5nbGVTdGFydHx8MCxNYXRoLlBJLzE4MCooKHZhbHVlLXZhbHVlU3RhcnQpKihhbmdsZUVuZC1hbmdsZVN0YXJ0KS8odmFsdWVFbmQtdmFsdWVTdGFydCkrYW5nbGVTdGFydCl9LEtub2IucHJvdG90eXBlLnJhZGlhbnNUb1ZhbHVlPWZ1bmN0aW9uKHJhZGlhbnMsdmFsdWVFbmQsdmFsdWVTdGFydCxhbmdsZUVuZCxhbmdsZVN0YXJ0KXtyZXR1cm4gdmFsdWVFbmQ9dmFsdWVFbmR8fDEwMCx2YWx1ZVN0YXJ0PXZhbHVlU3RhcnR8fDAsYW5nbGVFbmQ9YW5nbGVFbmR8fDM2MCxhbmdsZVN0YXJ0PWFuZ2xlU3RhcnR8fDAsKDE4MC9NYXRoLlBJKnJhZGlhbnMtYW5nbGVTdGFydCkqKHZhbHVlRW5kLXZhbHVlU3RhcnQpLyhhbmdsZUVuZC1hbmdsZVN0YXJ0KSt2YWx1ZVN0YXJ0fSxLbm9iLnByb3RvdHlwZS5jcmVhdGVBcmM9ZnVuY3Rpb24oaW5uZXJSYWRpdXMsb3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxlbmRBbmdsZSxjb3JuZXJSYWRpdXMpe3ZhciBhcmM9ZDMuc3ZnLmFyYygpLmlubmVyUmFkaXVzKGlubmVyUmFkaXVzKS5vdXRlclJhZGl1cyhvdXRlclJhZGl1cykuc3RhcnRBbmdsZShzdGFydEFuZ2xlKS5lbmRBbmdsZShlbmRBbmdsZSkuY29ybmVyUmFkaXVzKGNvcm5lclJhZGl1cyk7cmV0dXJuIGFyY30sS25vYi5wcm90b3R5cGUuZHJhd0FyYz1mdW5jdGlvbihzdmcsYXJjLGxhYmVsLHN0eWxlLGNsaWNrLGRyYWcpe3ZhciBlbGVtPXN2Zy5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJpZFwiLGxhYmVsKS5hdHRyKFwiZFwiLGFyYykuc3R5bGUoc3R5bGUpLmF0dHIoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZShcIit0aGlzLm9wdGlvbnMuc2l6ZS8yK1wiLCBcIit0aGlzLm9wdGlvbnMuc2l6ZS8yK1wiKVwiKTtyZXR1cm4gdGhpcy5vcHRpb25zLnJlYWRPbmx5PT09ITEmJihjbGljayYmZWxlbS5vbihcImNsaWNrXCIsY2xpY2spLGRyYWcmJmVsZW0uY2FsbChkcmFnKSksZWxlbX0sS25vYi5wcm90b3R5cGUuY3JlYXRlQXJjcz1mdW5jdGlvbigpe3ZhciBvdXRlclJhZGl1cz1wYXJzZUludCh0aGlzLm9wdGlvbnMuc2l6ZS8yLDEwKSxzdGFydEFuZ2xlPXRoaXMudmFsdWVUb1JhZGlhbnModGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsMzYwKSxlbmRBbmdsZT10aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMub3B0aW9ucy5lbmRBbmdsZSwzNjApO3RoaXMub3B0aW9ucy5zY2FsZS5lbmFibGVkJiYob3V0ZXJSYWRpdXMtPXRoaXMub3B0aW9ucy5zY2FsZS53aWR0aCt0aGlzLm9wdGlvbnMuc2NhbGUuc3BhY2VXaWR0aCk7dmFyIGRpZmYsdHJhY2tJbm5lclJhZGl1cz1vdXRlclJhZGl1cy10aGlzLm9wdGlvbnMudHJhY2tXaWR0aCxjaGFuZ2VJbm5lclJhZGl1cz1vdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuYmFyV2lkdGgsdmFsdWVJbm5lclJhZGl1cz1vdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuYmFyV2lkdGgsaW50ZXJhY3RJbm5lclJhZGl1cz0xLHRyYWNrT3V0ZXJSYWRpdXM9b3V0ZXJSYWRpdXMsY2hhbmdlT3V0ZXJSYWRpdXM9b3V0ZXJSYWRpdXMsdmFsdWVPdXRlclJhZGl1cz1vdXRlclJhZGl1cyxpbnRlcmFjdE91dGVyUmFkaXVzPW91dGVyUmFkaXVzO3RoaXMub3B0aW9ucy5iYXJXaWR0aD50aGlzLm9wdGlvbnMudHJhY2tXaWR0aD8oZGlmZj0odGhpcy5vcHRpb25zLmJhcldpZHRoLXRoaXMub3B0aW9ucy50cmFja1dpZHRoKS8yLHRyYWNrSW5uZXJSYWRpdXMtPWRpZmYsdHJhY2tPdXRlclJhZGl1cy09ZGlmZik6dGhpcy5vcHRpb25zLmJhcldpZHRoPHRoaXMub3B0aW9ucy50cmFja1dpZHRoJiYoZGlmZj0odGhpcy5vcHRpb25zLnRyYWNrV2lkdGgtdGhpcy5vcHRpb25zLmJhcldpZHRoKS8yLGNoYW5nZU91dGVyUmFkaXVzLT1kaWZmLHZhbHVlT3V0ZXJSYWRpdXMtPWRpZmYsY2hhbmdlSW5uZXJSYWRpdXMtPWRpZmYsdmFsdWVJbm5lclJhZGl1cy09ZGlmZiksdGhpcy5vcHRpb25zLmJnQ29sb3ImJih0aGlzLmJnQXJjPXRoaXMuY3JlYXRlQXJjKDAsb3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxlbmRBbmdsZSkpLFwidHJvblwiPT09dGhpcy5vcHRpb25zLnNraW4udHlwZSYmKHRyYWNrT3V0ZXJSYWRpdXM9dHJhY2tPdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuc2tpbi53aWR0aC10aGlzLm9wdGlvbnMuc2tpbi5zcGFjZVdpZHRoLGNoYW5nZU91dGVyUmFkaXVzPWNoYW5nZU91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5za2luLndpZHRoLXRoaXMub3B0aW9ucy5za2luLnNwYWNlV2lkdGgsdmFsdWVPdXRlclJhZGl1cz12YWx1ZU91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5za2luLndpZHRoLXRoaXMub3B0aW9ucy5za2luLnNwYWNlV2lkdGgsaW50ZXJhY3RPdXRlclJhZGl1cz1pbnRlcmFjdE91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5za2luLndpZHRoLXRoaXMub3B0aW9ucy5za2luLnNwYWNlV2lkdGgsdGhpcy5ob29wQXJjPXRoaXMuY3JlYXRlQXJjKG91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5za2luLndpZHRoLG91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsZW5kQW5nbGUpKSx0aGlzLnRyYWNrQXJjPXRoaXMuY3JlYXRlQXJjKHRyYWNrSW5uZXJSYWRpdXMsdHJhY2tPdXRlclJhZGl1cyxzdGFydEFuZ2xlLGVuZEFuZ2xlKSx0aGlzLmNoYW5nZUFyYz10aGlzLmNyZWF0ZUFyYyhjaGFuZ2VJbm5lclJhZGl1cyxjaGFuZ2VPdXRlclJhZGl1cyxzdGFydEFuZ2xlLHN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLmJhckNhcCksdGhpcy52YWx1ZUFyYz10aGlzLmNyZWF0ZUFyYyh2YWx1ZUlubmVyUmFkaXVzLHZhbHVlT3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxzdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5iYXJDYXApLHRoaXMuaW50ZXJhY3RBcmM9dGhpcy5jcmVhdGVBcmMoaW50ZXJhY3RJbm5lclJhZGl1cyxpbnRlcmFjdE91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsZW5kQW5nbGUpfSxLbm9iLnByb3RvdHlwZS5kcmF3QXJjcz1mdW5jdGlvbihjbGlja0ludGVyYWN0aW9uLGRyYWdCZWhhdmlvcil7dmFyIHN2Zz1kMy5zZWxlY3QodGhpcy5lbGVtZW50KS5hcHBlbmQoXCJzdmdcIikuYXR0cihcIndpZHRoXCIsdGhpcy5vcHRpb25zLnNpemUpLmF0dHIoXCJoZWlnaHRcIix0aGlzLm9wdGlvbnMuc2l6ZSk7aWYodGhpcy5vcHRpb25zLmJnQ29sb3ImJnRoaXMuZHJhd0FyYyhzdmcsdGhpcy5iZ0FyYyxcImJnQXJjXCIse2ZpbGw6dGhpcy5vcHRpb25zLmJnQ29sb3J9KSx0aGlzLm9wdGlvbnMuZGlzcGxheUlucHV0KXt2YXIgZm9udFNpemU9LjIqdGhpcy5vcHRpb25zLnNpemUrXCJweFwiO1wiYXV0b1wiIT09dGhpcy5vcHRpb25zLmZvbnRTaXplJiYoZm9udFNpemU9dGhpcy5vcHRpb25zLmZvbnRTaXplK1wicHhcIiksdGhpcy5vcHRpb25zLnN0ZXA8MSYmKHRoaXMudmFsdWU9dGhpcy52YWx1ZS50b0ZpeGVkKDEpKTt2YXIgdj10aGlzLnZhbHVlO1wiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMub3B0aW9ucy5pbnB1dEZvcm1hdHRlciYmKHY9dGhpcy5vcHRpb25zLmlucHV0Rm9ybWF0dGVyKHYpKSxzdmcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwiaWRcIixcInRleHRcIikuYXR0cihcInRleHQtYW5jaG9yXCIsXCJtaWRkbGVcIikuYXR0cihcImZvbnQtc2l6ZVwiLGZvbnRTaXplKS5zdHlsZShcImZpbGxcIix0aGlzLm9wdGlvbnMudGV4dENvbG9yKS50ZXh0KHYrdGhpcy5vcHRpb25zLnVuaXR8fFwiXCIpLmF0dHIoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZShcIit0aGlzLm9wdGlvbnMuc2l6ZS8yK1wiLCBcIisodGhpcy5vcHRpb25zLnNpemUvMisuMDYqdGhpcy5vcHRpb25zLnNpemUpK1wiKVwiKSx0aGlzLm9wdGlvbnMuc3ViVGV4dC5lbmFibGVkJiYoZm9udFNpemU9LjA3KnRoaXMub3B0aW9ucy5zaXplK1wicHhcIixcImF1dG9cIiE9PXRoaXMub3B0aW9ucy5zdWJUZXh0LmZvbnQmJihmb250U2l6ZT10aGlzLm9wdGlvbnMuc3ViVGV4dC5mb250K1wicHhcIiksc3ZnLmFwcGVuZChcInRleHRcIikuYXR0cihcImNsYXNzXCIsXCJzdWItdGV4dFwiKS5hdHRyKFwidGV4dC1hbmNob3JcIixcIm1pZGRsZVwiKS5hdHRyKFwiZm9udC1zaXplXCIsZm9udFNpemUpLnN0eWxlKFwiZmlsbFwiLHRoaXMub3B0aW9ucy5zdWJUZXh0LmNvbG9yKS50ZXh0KHRoaXMub3B0aW9ucy5zdWJUZXh0LnRleHQpLmF0dHIoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZShcIit0aGlzLm9wdGlvbnMuc2l6ZS8yK1wiLCBcIisodGhpcy5vcHRpb25zLnNpemUvMisuMTUqdGhpcy5vcHRpb25zLnNpemUpK1wiKVwiKSl9aWYodGhpcy5vcHRpb25zLnNjYWxlLmVuYWJsZWQpe3ZhciByYWRpdXMscXVhbnRpdHksZGF0YSxjb3VudD0wLGFuZ2xlPTAsc3RhcnRSYWRpYW5zPXRoaXMudmFsdWVUb1JhZGlhbnModGhpcy5vcHRpb25zLm1pbix0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5lbmRBbmdsZSx0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMubWluKSxlbmRSYWRpYW5zPXRoaXMudmFsdWVUb1JhZGlhbnModGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5lbmRBbmdsZSx0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMubWluKSxkaWZmPTA7aWYoMD09PXRoaXMub3B0aW9ucy5zdGFydEFuZ2xlJiYzNjA9PT10aGlzLm9wdGlvbnMuZW5kQW5nbGV8fChkaWZmPTEpLFwiZG90c1wiPT09dGhpcy5vcHRpb25zLnNjYWxlLnR5cGUpe3ZhciB3aWR0aD10aGlzLm9wdGlvbnMuc2NhbGUud2lkdGg7cmFkaXVzPXRoaXMub3B0aW9ucy5zaXplLzItd2lkdGgscXVhbnRpdHk9dGhpcy5vcHRpb25zLnNjYWxlLnF1YW50aXR5O3ZhciBvZmZzZXQ9cmFkaXVzK3RoaXMub3B0aW9ucy5zY2FsZS53aWR0aDtkYXRhPWQzLnJhbmdlKHF1YW50aXR5KS5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gYW5nbGU9Y291bnQqKGVuZFJhZGlhbnMtc3RhcnRSYWRpYW5zKS1NYXRoLlBJLzIrc3RhcnRSYWRpYW5zLGNvdW50Kz0xLyhxdWFudGl0eS1kaWZmKSx7Y3g6b2Zmc2V0K01hdGguY29zKGFuZ2xlKSpyYWRpdXMsY3k6b2Zmc2V0K01hdGguc2luKGFuZ2xlKSpyYWRpdXMscjp3aWR0aH19KSxzdmcuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLmRhdGEoZGF0YSkuZW50ZXIoKS5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cih7cjpmdW5jdGlvbihkKXtyZXR1cm4gZC5yfSxjeDpmdW5jdGlvbihkKXtyZXR1cm4gZC5jeH0sY3k6ZnVuY3Rpb24oZCl7cmV0dXJuIGQuY3l9LGZpbGw6dGhpcy5vcHRpb25zLnNjYWxlLmNvbG9yfSl9ZWxzZSBpZihcImxpbmVzXCI9PT10aGlzLm9wdGlvbnMuc2NhbGUudHlwZSl7dmFyIGhlaWdodD10aGlzLm9wdGlvbnMuc2NhbGUuaGVpZ2h0O3JhZGl1cz10aGlzLm9wdGlvbnMuc2l6ZS8yLHF1YW50aXR5PXRoaXMub3B0aW9ucy5zY2FsZS5xdWFudGl0eSxkYXRhPWQzLnJhbmdlKHF1YW50aXR5KS5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gYW5nbGU9Y291bnQqKGVuZFJhZGlhbnMtc3RhcnRSYWRpYW5zKS1NYXRoLlBJLzIrc3RhcnRSYWRpYW5zLGNvdW50Kz0xLyhxdWFudGl0eS1kaWZmKSx7eDE6cmFkaXVzK01hdGguY29zKGFuZ2xlKSpyYWRpdXMseTE6cmFkaXVzK01hdGguc2luKGFuZ2xlKSpyYWRpdXMseDI6cmFkaXVzK01hdGguY29zKGFuZ2xlKSoocmFkaXVzLWhlaWdodCkseTI6cmFkaXVzK01hdGguc2luKGFuZ2xlKSoocmFkaXVzLWhlaWdodCl9fSksc3ZnLnNlbGVjdEFsbChcImxpbmVcIikuZGF0YShkYXRhKS5lbnRlcigpLmFwcGVuZChcImxpbmVcIikuYXR0cih7eDE6ZnVuY3Rpb24oZCl7cmV0dXJuIGQueDF9LHkxOmZ1bmN0aW9uKGQpe3JldHVybiBkLnkxfSx4MjpmdW5jdGlvbihkKXtyZXR1cm4gZC54Mn0seTI6ZnVuY3Rpb24oZCl7cmV0dXJuIGQueTJ9LFwic3Ryb2tlLXdpZHRoXCI6dGhpcy5vcHRpb25zLnNjYWxlLndpZHRoLHN0cm9rZTp0aGlzLm9wdGlvbnMuc2NhbGUuY29sb3J9KX19XCJ0cm9uXCI9PT10aGlzLm9wdGlvbnMuc2tpbi50eXBlJiZ0aGlzLmRyYXdBcmMoc3ZnLHRoaXMuaG9vcEFyYyxcImhvb3BBcmNcIix7ZmlsbDp0aGlzLm9wdGlvbnMuc2tpbi5jb2xvcn0pLHRoaXMuZHJhd0FyYyhzdmcsdGhpcy50cmFja0FyYyxcInRyYWNrQXJjXCIse2ZpbGw6dGhpcy5vcHRpb25zLnRyYWNrQ29sb3J9KSx0aGlzLm9wdGlvbnMuZGlzcGxheVByZXZpb3VzP3RoaXMuY2hhbmdlRWxlbT10aGlzLmRyYXdBcmMoc3ZnLHRoaXMuY2hhbmdlQXJjLFwiY2hhbmdlQXJjXCIse2ZpbGw6dGhpcy5vcHRpb25zLnByZXZCYXJDb2xvcn0pOnRoaXMuY2hhbmdlRWxlbT10aGlzLmRyYXdBcmMoc3ZnLHRoaXMuY2hhbmdlQXJjLFwiY2hhbmdlQXJjXCIse1wiZmlsbC1vcGFjaXR5XCI6MH0pLHRoaXMudmFsdWVFbGVtPXRoaXMuZHJhd0FyYyhzdmcsdGhpcy52YWx1ZUFyYyxcInZhbHVlQXJjXCIse2ZpbGw6dGhpcy5vcHRpb25zLmJhckNvbG9yfSk7dmFyIGN1cnNvcj1cInBvaW50ZXJcIjt0aGlzLm9wdGlvbnMucmVhZE9ubHkmJihjdXJzb3I9XCJkZWZhdWx0XCIpLHRoaXMuZHJhd0FyYyhzdmcsdGhpcy5pbnRlcmFjdEFyYyxcImludGVyYWN0QXJjXCIse1wiZmlsbC1vcGFjaXR5XCI6MCxjdXJzb3I6Y3Vyc29yfSxjbGlja0ludGVyYWN0aW9uLGRyYWdCZWhhdmlvcil9LEtub2IucHJvdG90eXBlLmRyYXc9ZnVuY3Rpb24odXBkYXRlKXtmdW5jdGlvbiBkcmFnSW50ZXJhY3Rpb24oKXt0aGF0LmluRHJhZz0hMDt2YXIgeD1kMy5ldmVudC54LXRoYXQub3B0aW9ucy5zaXplLzIseT1kMy5ldmVudC55LXRoYXQub3B0aW9ucy5zaXplLzI7aW50ZXJhY3Rpb24oeCx5LCExKX1mdW5jdGlvbiBjbGlja0ludGVyYWN0aW9uKCl7dGhhdC5pbkRyYWc9ITE7dmFyIGNvb3Jkcz1kMy5tb3VzZSh0aGlzLnBhcmVudE5vZGUpLHg9Y29vcmRzWzBdLXRoYXQub3B0aW9ucy5zaXplLzIseT1jb29yZHNbMV0tdGhhdC5vcHRpb25zLnNpemUvMjtpbnRlcmFjdGlvbih4LHksITApfWZ1bmN0aW9uIGludGVyYWN0aW9uKHgseSxpc0ZpbmFsKXt2YXIgcmFkaWFucyxkZWx0YSxhcmM9TWF0aC5hdGFuKHkveCkvKE1hdGguUEkvMTgwKTtpZih4Pj0wJiYwPj15fHx4Pj0wJiZ5Pj0wP2RlbHRhPTkwOihkZWx0YT0yNzAsdGhhdC5vcHRpb25zLnN0YXJ0QW5nbGU8MCYmKGRlbHRhPS05MCkpLHJhZGlhbnM9KGRlbHRhK2FyYykqKE1hdGguUEkvMTgwKSx0aGF0LnZhbHVlPXRoYXQucmFkaWFuc1RvVmFsdWUocmFkaWFucyx0aGF0Lm9wdGlvbnMubWF4LHRoYXQub3B0aW9ucy5taW4sdGhhdC5vcHRpb25zLmVuZEFuZ2xlLHRoYXQub3B0aW9ucy5zdGFydEFuZ2xlKSx0aGF0LnZhbHVlPj10aGF0Lm9wdGlvbnMubWluJiZ0aGF0LnZhbHVlPD10aGF0Lm9wdGlvbnMubWF4JiYodGhhdC52YWx1ZT1NYXRoLnJvdW5kKH5+KCh0aGF0LnZhbHVlPDA/LS41Oi41KSt0aGF0LnZhbHVlL3RoYXQub3B0aW9ucy5zdGVwKSp0aGF0Lm9wdGlvbnMuc3RlcCoxMDApLzEwMCx0aGF0Lm9wdGlvbnMuc3RlcDwxJiYodGhhdC52YWx1ZT10aGF0LnZhbHVlLnRvRml4ZWQoMSkpLHVwZGF0ZSh0aGF0LnZhbHVlKSx0aGF0LnZhbHVlQXJjLmVuZEFuZ2xlKHRoYXQudmFsdWVUb1JhZGlhbnModGhhdC52YWx1ZSx0aGF0Lm9wdGlvbnMubWF4LHRoYXQub3B0aW9ucy5lbmRBbmdsZSx0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZSx0aGF0Lm9wdGlvbnMubWluKSksdGhhdC52YWx1ZUVsZW0uYXR0cihcImRcIix0aGF0LnZhbHVlQXJjKSxpc0ZpbmFsJiYodGhhdC5jaGFuZ2VBcmMuZW5kQW5nbGUodGhhdC52YWx1ZVRvUmFkaWFucyh0aGF0LnZhbHVlLHRoYXQub3B0aW9ucy5tYXgsdGhhdC5vcHRpb25zLmVuZEFuZ2xlLHRoYXQub3B0aW9ucy5zdGFydEFuZ2xlLHRoYXQub3B0aW9ucy5taW4pKSx0aGF0LmNoYW5nZUVsZW0uYXR0cihcImRcIix0aGF0LmNoYW5nZUFyYykpLHRoYXQub3B0aW9ucy5kaXNwbGF5SW5wdXQpKXt2YXIgdj10aGF0LnZhbHVlO1wiZnVuY3Rpb25cIj09dHlwZW9mIHRoYXQub3B0aW9ucy5pbnB1dEZvcm1hdHRlciYmKHY9dGhhdC5vcHRpb25zLmlucHV0Rm9ybWF0dGVyKHYpKSxkMy5zZWxlY3QodGhhdC5lbGVtZW50KS5zZWxlY3QoXCIjdGV4dFwiKS50ZXh0KHYrdGhhdC5vcHRpb25zLnVuaXR8fFwiXCIpfX1kMy5zZWxlY3QodGhpcy5lbGVtZW50KS5zZWxlY3QoXCJzdmdcIikucmVtb3ZlKCk7dmFyIHRoYXQ9dGhpczt0aGF0LmNyZWF0ZUFyY3MoKTt2YXIgZHJhZ0JlaGF2aW9yPWQzLmJlaGF2aW9yLmRyYWcoKS5vbihcImRyYWdcIixkcmFnSW50ZXJhY3Rpb24pLm9uKFwiZHJhZ2VuZFwiLGNsaWNrSW50ZXJhY3Rpb24pO3RoYXQuZHJhd0FyY3MoY2xpY2tJbnRlcmFjdGlvbixkcmFnQmVoYXZpb3IpLHRoYXQub3B0aW9ucy5hbmltYXRlLmVuYWJsZWQ/dGhhdC52YWx1ZUVsZW0udHJhbnNpdGlvbigpLmVhc2UodGhhdC5vcHRpb25zLmFuaW1hdGUuZWFzZSkuZHVyYXRpb24odGhhdC5vcHRpb25zLmFuaW1hdGUuZHVyYXRpb24pLnR3ZWVuKFwiXCIsZnVuY3Rpb24oKXt2YXIgaT1kMy5pbnRlcnBvbGF0ZSh0aGF0LnZhbHVlVG9SYWRpYW5zKHRoYXQub3B0aW9ucy5zdGFydEFuZ2xlLDM2MCksdGhhdC52YWx1ZVRvUmFkaWFucyh0aGF0LnZhbHVlLHRoYXQub3B0aW9ucy5tYXgsdGhhdC5vcHRpb25zLmVuZEFuZ2xlLHRoYXQub3B0aW9ucy5zdGFydEFuZ2xlLHRoYXQub3B0aW9ucy5taW4pKTtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIHZhbD1pKHQpO3RoYXQudmFsdWVFbGVtLmF0dHIoXCJkXCIsdGhhdC52YWx1ZUFyYy5lbmRBbmdsZSh2YWwpKSx0aGF0LmNoYW5nZUVsZW0uYXR0cihcImRcIix0aGF0LmNoYW5nZUFyYy5lbmRBbmdsZSh2YWwpKX19KToodGhhdC5jaGFuZ2VBcmMuZW5kQW5nbGUodGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLnZhbHVlLHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLmVuZEFuZ2xlLHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5taW4pKSx0aGF0LmNoYW5nZUVsZW0uYXR0cihcImRcIix0aGF0LmNoYW5nZUFyYyksdGhhdC52YWx1ZUFyYy5lbmRBbmdsZSh0aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMudmFsdWUsdGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMuZW5kQW5nbGUsdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLm1pbikpLHRoYXQudmFsdWVFbGVtLmF0dHIoXCJkXCIsdGhhdC52YWx1ZUFyYykpfSxLbm9iLnByb3RvdHlwZS5zZXRWYWx1ZT1mdW5jdGlvbihuZXdWYWx1ZSl7aWYoIXRoaXMuaW5EcmFnJiZ0aGlzLnZhbHVlPj10aGlzLm9wdGlvbnMubWluJiZ0aGlzLnZhbHVlPD10aGlzLm9wdGlvbnMubWF4KXt2YXIgcmFkaWFucz10aGlzLnZhbHVlVG9SYWRpYW5zKG5ld1ZhbHVlLHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLmVuZEFuZ2xlLHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5taW4pO2lmKHRoaXMudmFsdWU9TWF0aC5yb3VuZCh+figoMD5uZXdWYWx1ZT8tLjU6LjUpK25ld1ZhbHVlL3RoaXMub3B0aW9ucy5zdGVwKSp0aGlzLm9wdGlvbnMuc3RlcCoxMDApLzEwMCx0aGlzLm9wdGlvbnMuc3RlcDwxJiYodGhpcy52YWx1ZT10aGlzLnZhbHVlLnRvRml4ZWQoMSkpLHRoaXMuY2hhbmdlQXJjLmVuZEFuZ2xlKHJhZGlhbnMpLGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpLnNlbGVjdChcIiNjaGFuZ2VBcmNcIikuYXR0cihcImRcIix0aGlzLmNoYW5nZUFyYyksdGhpcy52YWx1ZUFyYy5lbmRBbmdsZShyYWRpYW5zKSxkMy5zZWxlY3QodGhpcy5lbGVtZW50KS5zZWxlY3QoXCIjdmFsdWVBcmNcIikuYXR0cihcImRcIix0aGlzLnZhbHVlQXJjKSx0aGlzLm9wdGlvbnMuZGlzcGxheUlucHV0KXt2YXIgdj10aGlzLnZhbHVlO1wiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMub3B0aW9ucy5pbnB1dEZvcm1hdHRlciYmKHY9dGhpcy5vcHRpb25zLmlucHV0Rm9ybWF0dGVyKHYpKSxkMy5zZWxlY3QodGhpcy5lbGVtZW50KS5zZWxlY3QoXCIjdGV4dFwiKS50ZXh0KHYrdGhpcy5vcHRpb25zLnVuaXR8fFwiXCIpfX19LHVpLktub2I9S25vYix1aS5rbm9iRGlyZWN0aXZlPWZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHNjb3BlOnt2YWx1ZTpcIj1cIixvcHRpb25zOlwiPVwifSxsaW5rOmZ1bmN0aW9uKHNjb3BlLGVsZW1lbnQpe3Njb3BlLnZhbHVlPXNjb3BlLnZhbHVlfHwwO3ZhciBkZWZhdWx0T3B0aW9ucz17c2tpbjp7dHlwZTpcInNpbXBsZVwiLHdpZHRoOjEwLGNvbG9yOlwicmdiYSgyNTUsMCwwLC41KVwiLHNwYWNlV2lkdGg6NX0sYW5pbWF0ZTp7ZW5hYmxlZDohMCxkdXJhdGlvbjoxZTMsZWFzZTpcImJvdW5jZVwifSxzaXplOjIwMCxzdGFydEFuZ2xlOjAsZW5kQW5nbGU6MzYwLHVuaXQ6XCJcIixkaXNwbGF5SW5wdXQ6ITAsaW5wdXRGb3JtYXR0ZXI6ZnVuY3Rpb24odil7cmV0dXJuIHZ9LHJlYWRPbmx5OiExLHRyYWNrV2lkdGg6NTAsYmFyV2lkdGg6NTAsdHJhY2tDb2xvcjpcInJnYmEoMCwwLDAsMClcIixiYXJDb2xvcjpcInJnYmEoMjU1LDAsMCwuNSlcIixwcmV2QmFyQ29sb3I6XCJyZ2JhKDAsMCwwLDApXCIsdGV4dENvbG9yOlwiIzIyMlwiLGJhckNhcDowLGZvbnRTaXplOlwiYXV0b1wiLHN1YlRleHQ6e2VuYWJsZWQ6ITEsdGV4dDpcIlwiLGNvbG9yOlwiZ3JheVwiLGZvbnQ6XCJhdXRvXCJ9LGJnQ29sb3I6XCJcIixzY2FsZTp7ZW5hYmxlZDohMSx0eXBlOlwibGluZXNcIixjb2xvcjpcImdyYXlcIix3aWR0aDo0LHF1YW50aXR5OjIwLGhlaWdodDoxMCxzcGFjZVdpZHRoOjE1fSxzdGVwOjEsZGlzcGxheVByZXZpb3VzOiExLG1pbjowLG1heDoxMDAsZHluYW1pY09wdGlvbnM6ITF9O3Njb3BlLm9wdGlvbnM9YW5ndWxhci5tZXJnZShkZWZhdWx0T3B0aW9ucyxzY29wZS5vcHRpb25zKTt2YXIga25vYj1uZXcgdWkuS25vYihlbGVtZW50WzBdLHNjb3BlLnZhbHVlLHNjb3BlLm9wdGlvbnMpO2lmKHNjb3BlLiR3YXRjaChcInZhbHVlXCIsZnVuY3Rpb24obmV3VmFsdWUsb2xkVmFsdWUpe251bGw9PT1uZXdWYWx1ZSYmXCJ1bmRlZmluZWRcIj09dHlwZW9mIG5ld1ZhbHVlfHxcInVuZGVmaW5lZFwiPT10eXBlb2Ygb2xkVmFsdWV8fG5ld1ZhbHVlPT09b2xkVmFsdWV8fGtub2Iuc2V0VmFsdWUobmV3VmFsdWUpfSksc2NvcGUub3B0aW9ucy5keW5hbWljT3B0aW9ucyl7dmFyIGlzRmlyc3RXYXRjaE9uT3B0aW9ucz0hMDtzY29wZS4kd2F0Y2goXCJvcHRpb25zXCIsZnVuY3Rpb24oKXtpZihpc0ZpcnN0V2F0Y2hPbk9wdGlvbnMpaXNGaXJzdFdhdGNoT25PcHRpb25zPSExO2Vsc2V7dmFyIG5ld09wdGlvbnM9YW5ndWxhci5tZXJnZShkZWZhdWx0T3B0aW9ucyxzY29wZS5vcHRpb25zKTtrbm9iPW5ldyB1aS5Lbm9iKGVsZW1lbnRbMF0sc2NvcGUudmFsdWUsbmV3T3B0aW9ucyksZHJhd0tub2IoKX19LCEwKX12YXIgZHJhd0tub2I9ZnVuY3Rpb24oKXtrbm9iLmRyYXcoZnVuY3Rpb24odmFsdWUpe3Njb3BlLiRhcHBseShmdW5jdGlvbigpe3Njb3BlLnZhbHVlPXZhbHVlfSl9KX07ZHJhd0tub2IoKX19fSxhbmd1bGFyLm1vZHVsZShcInVpLmtub2JcIixbXSkuZGlyZWN0aXZlKFwidWlLbm9iXCIsdWkua25vYkRpcmVjdGl2ZSl9KCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBhbmd1bGFyIG1vZHVsZXNcbi8vIHJlcXVpcmUoJ2FuZ3VsYXItbW9kdWxlLXNhbml0aXplJyk7XG4vLyByZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xuXG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL19pbmRleCcpO1xucmVxdWlyZSgnLi9zZXJ2aWNlcy9faW5kZXgnKTtcbnJlcXVpcmUoJy4vbW9kZWxzL19pbmRleCcpO1xucmVxdWlyZSgnLi9kaXJlY3RpdmVzL19pbmRleCcpO1xuXG5yZXF1aXJlKCcuLi9ib3dlcl9jb21wb25lbnRzL25nLWtub2IvZGlzdC9uZy1rbm9iLm1pbicpO1xucmVxdWlyZSgnLi4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLWFuaW1hdGUvYW5ndWxhci1hbmltYXRlLm1pbicpO1xucmVxdWlyZSgnLi4vYm93ZXJfY29tcG9uZW50cy9pb25pYy1hZHZhbmNlZC1jYXJvdXNlbC9kaXN0L2FkdmFuY2VkLWNhcm91c2VsLm1pbicpO1xuXG5cbi8vIGNyZWF0ZSBhbmQgYm9vdHN0cmFwIGFwcGxpY2F0aW9uXG5hbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gIHZhciByZXF1aXJlcyA9IFtcbiAgICAnaW9uaWMnLFxuICAgICdhcHAuY29udHJvbGxlcnMnLFxuICAgICdhcHAuc2VydmljZXMnLFxuICAgICdhcHAubW9kZWxzJyxcbiAgICAnYXBwLmRpcmVjdGl2ZXMnLFxuICAgICd1aS5yb3V0ZXInLFxuICAgICd1aS5rbm9iJyxcbiAgICAnYUNhcm91c2VsJyxcbiAgICAnbmdBbmltYXRlJ1xuICAgIC8vICd0ZW1wbGF0ZXMnLFxuICAgIC8vICduZ1Nhbml0aXplJyxcbiAgXTtcblxuICAvLyBtb3VudCBvbiB3aW5kb3cgZm9yIHRlc3RpbmdcbiAgd2luZG93LmFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCByZXF1aXJlcyk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnN0YW50KCdBcHBTZXR0aW5ncycsIHJlcXVpcmUoJy4vY29uc3RhbnRzLmRldmVsb3BtZW50JykpO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb25maWcocmVxdWlyZSgnLi9vbl9jb25maWcnKSk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLnJ1bihyZXF1aXJlKCcuL29uX3J1bicpKTtcblxuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgYW5ndWxhci5ib290c3RyYXAoZG9jdW1lbnQsIFsnYXBwJ10pOyAgIFxuICB9LCAoMTAwMCkpO1xuICBcblxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQXBwU2V0dGluZ3MgPSB7XG4gIHlvY2FsQVBJOntcbiAgICAvLyBiYXNlOiAnaHR0cDovL3lvZW5kcG9pbnQ0LXdiYnMucmhjbG91ZC5jb20vYXBpL3YxL3lva2FsL2RhdGEvJ1xuICAgIGJhc2U6ICdodHRwOi8vbG9jYWxob3N0OjgxMDAvYXBpL3YxL3lva2FsL2RhdGEvJ1xuICB9LFxuXG4gIEdNQVBfREVGQVVMVDp7XG4gIFx0UkFESVVTOiA4MDAsXG4gIFx0Wk9PTTogICAxNFxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcFNldHRpbmdzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gQXBwQ3RybCgkbG9nLCAkcm9vdFNjb3BlLCAkc2NvcGUsICRpb25pY01vZGFsLCAkdGltZW91dCwgY29vcmRpbmF0ZXMsIEFwcFNldHRpbmdzKSB7XG5cbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0FwcEN0cmwnKTtcblxuICB2YXIgdm0gPSB0aGlzO1xuICAvLyBzZXQgY3VyZW50IHBvc2l0aW9uIHRvIHJvb3RTY29wZSB0byBtYWtlIGdsb2JhbGx5IGF2YWlsYWJsZSBcbiAgJHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb24gPSBjb29yZGluYXRlcztcbiAgXG5cbiAgLy8gRm9ybSBkYXRhIGZvciB0aGUgbG9naW4gbW9kYWxcbiAgJHNjb3BlLmxvZ2luRGF0YSA9IHt9O1xuXG4gIC8vIENyZWF0ZSB0aGUgbG9naW4gbW9kYWwgdGhhdCB3ZSB3aWxsIHVzZSBsYXRlclxuICAkaW9uaWNNb2RhbC5mcm9tVGVtcGxhdGVVcmwoJ3RlbXBsYXRlcy9sb2dpbi5odG1sJywge1xuICAgIHNjb3BlOiAkc2NvcGVcbiAgfSkudGhlbihmdW5jdGlvbihtb2RhbCkge1xuICAgICRzY29wZS5tb2RhbCA9IG1vZGFsO1xuICB9KTtcblxuICAvLyBUcmlnZ2VyZWQgaW4gdGhlIGxvZ2luIG1vZGFsIHRvIGNsb3NlIGl0XG4gICRzY29wZS5jbG9zZUxvZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLm1vZGFsLmhpZGUoKTtcbiAgfTtcblxuICAvLyBPcGVuIHRoZSBsb2dpbiBtb2RhbFxuICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUubW9kYWwuc2hvdygpO1xuICB9O1xuXG4gIC8vIFBlcmZvcm0gdGhlIGxvZ2luIGFjdGlvbiB3aGVuIHRoZSB1c2VyIHN1Ym1pdHMgdGhlIGxvZ2luIGZvcm1cbiAgJHNjb3BlLmRvTG9naW4gPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnRG9pbmcgbG9naW4nLCAkc2NvcGUubG9naW5EYXRhKTtcblxuICAgIC8vIFNpbXVsYXRlIGEgbG9naW4gZGVsYXkuIFJlbW92ZSB0aGlzIGFuZCByZXBsYWNlIHdpdGggeW91ciBsb2dpblxuICAgIC8vIGNvZGUgaWYgdXNpbmcgYSBsb2dpbiBzeXN0ZW1cbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS5jbG9zZUxvZ2luKCk7XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgXG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBBcHBDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEJyb3dzZUN0cmwoJHNjb3BlLCBZb2NhbCkge1xuICBcbiAgJHNjb3BlLnJhbmRvID0gTWF0aC5yYW5kb20oKTtcbiAgJHNjb3BlLmdldFR5cGUgPSBmdW5jdGlvbih4KXtcbiAgICByZXR1cm4gdHlwZW9mIHg7XG4gIH1cbiAgJHNjb3BlLmxvY2F0aW9ucyA9W107XG4gIFlvY2FsLmdldCgpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgJHNjb3BlLmxvY2F0aW9ucyA9IGRhdGE7XG4gIH0pO1xuICB2YXIgX2xvY2F0aW9ucyA9IFtcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTZlXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiTG9zIEdhbGxvc1wiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiOTUxIFdvbGYgU3QgUGhpbGFkZWxwaGlhIFBBIDE5MTQ4IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkyMTE3OFwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNjMyNTk5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjoxOTE4XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNmZcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJIYXJkZW5hXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCI3NTQgUyBIaWNrcyBTdCwgUGhpbGFkZWxwaGlhLCBQQSAxOTE0NVwiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTQxNjg2XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE2ODQxODRcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjQyM1wiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTcxXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiTmFtIFNvbiBCYWtlcnlcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjE2MDEgV2FzaGluZ3RvbiBBdmUgUGhpbGFkZWxwaGlhIFBBIDE5MTQ2IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkzOTIwOTRcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTcwMjY0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjoxODVcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU3MlwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkJyZWV6eSdzIENhZmVcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjEyMDAgUG9pbnQgQnJlZXplIEF2ZSBQaGlsYWRlbHBoaWEgUEEgMTkxNDYgVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTM3MjM3MlwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNzcxMDczXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjo3MDJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU3M1wiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlBpenphIEJyYWluL0xpdHRsZSBCYWJ5J3NcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjIzMTMgRnJhbmtmb3JkIEF2ZSBQaGlsYWRlbHBoaWEgUEEgMTkxMjUgVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTgwNjc0NlwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xMjgwOTY4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjo1ODk0XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNzRcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJTa2V0Y2ggQnVyZ2VyXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCI0MTMgRSBHaXJhcmQgQXZlIFBoaWxhZGVscGhpYSBQQSAxOTEyNSBVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45NzA1NzkyXCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjEzMDExODRcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjQ5MTdcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU3NlwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlRvcnRpbGxlcmlhIFNhbiBSb21hblwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiOTUxIFMgOXRoIFN0IFBoaWxhZGVscGhpYSBQQSAxOTE0NyBVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45Mzc2Mzk2XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE1Nzk4OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246OTM2XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNzhcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJIYWkgU3RyZWV0IEtpdGNoZW4gJiBDby5cIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjMyIFMgMTh0aCBTdCBQaGlsYWRlbHBoaWEgUEEgMTkxMDMgVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTUyMTYzOFwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNzA0NjE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjoxNTkwXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllODBcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJGZWRlcmFsIERvbnV0c1wiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMTIxOSBTIDJuZCBTdCBQaGlsYWRlbHBoaWEgUEEgMTkxNDcgVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTMyMjA5OFwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNDc0NjAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjoxOTQxXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllODFcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJCaW5nIEJpbmcgRGltIFN1bVwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMTY0OCBFIFBhc3N5dW5rIEF2ZSBQaGlsYWRlbHBoaWEgUEEgMTkxNDggVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTI4OTU5XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE2NDcwOTJcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjEwNTZcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU4OFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkJsYWNrIE4gQnJld1wiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiNTIzIEUgUGFzc3l1bmsgQXZlLCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ3XCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45NDE3NjFcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTUwMzkyOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MTY0MlwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZThlXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiUGhpbGx5IEZsYXZvcnNcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjIwMDQgRmFpcm1vdW50IEF2ZSwgUGhpbGFkZWxwaGlhLCBQQSAxOTEzMFwiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTY3MDg3XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE3MDUxMjZcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjMyNDRcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU4ZlwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkNhcG9naXJvIEdlbGF0b1wiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMjMzIENoZXN0bnV0IFN0cmVldCwgUGhpbGFkZWxwaGlhLCBQQVwiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTQ4ODIyXCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE0NTM1OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MjM1MlwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTkzXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiMXN0IE9yaWVudGFsIFN1cGVybWFya2V0XCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIxMTExIFMgNnRoIFN0IFBoaWxhZGVscGhpYSwgUEEgMTkxNDdcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkzNDAxNThcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTUzNjg1MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MTM3M1wiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZWEwXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSyAmIEEgU2FuZHdpY2hlcyAmIEdyb2NlcnlcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjE0MzkgUyAyMHRoIFN0LCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ2XCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45MzMwMDEyXCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE3NzQ3NDhcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjkxMFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZWExXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiU291dGggSG91c2VcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjI1MzUgUyAxM3RoIFN0LCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ4XCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45MTgwMzc0XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE2ODcxMzFcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjIyMDVcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWVhN1wiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkNpbmVtdWdcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcInMgMTkxNDgsIDE2MDcgUyBCcm9hZCBTdCwgUGhpbGFkZWxwaGlhLCBQQSAxOTE0OFwiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTMwMTgzOVwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNjgwMDZcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjg2MFwiXG4gICAgICBdXG4gICAgfVxuICBdO1xuXG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ0Jyb3dzZUN0cmwnLCBCcm93c2VDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIENvbm5lY3RDdHJsKCRsb2csICRyb290U2NvcGUsICRzY29wZSwgQXBwU2V0dGluZ3MpIHtcblxuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnQ29ubmVjdEN0cmwnKTtcblxuICB2YXIgdm0gPSB0aGlzO1xuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdDb25uZWN0Q3RybCcsIENvbm5lY3RDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIExvZ2luQ3RybCgkbG9nLCAkcm9vdFNjb3BlLCAkc2NvcGUsIEFwcFNldHRpbmdzKSB7XG5cbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0xvZ2luQ3RybCcpO1xuXG4gIHZhciB2bSA9IHRoaXM7XG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIExvZ2luQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBNYXBDdHJsKCRyb290U2NvcGUsICRzY29wZSwgJGxvZywgJHRpbWVvdXQsICRpb25pY0xvYWRpbmcsIEFwcFNldHRpbmdzLCBHTWFwICkge1xuXG4gICAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoXCJNYXBDdHJsXCIpO1xuXG4gXHQgIC8vIFZpZXdNb2RlbFxuICBcdHZhciB2bSA9IHRoaXM7XG4gICAgdm0uZ21hcCA9IG5ldyBHTWFwKHt6b29tOjEzfSk7ICAgIFxuICAgIHZtLmdtYXAuaGVpZ2h0ID0gNjI1O1xuICAgIHZhciBsb2NhdGlvbnNSYWRpdXMgPSB2bS5nbWFwLnNldFJhZGl1c0NpcmNsZSgpO1xuICAgIC8vIHZtLmdtYXAucGxvdExvY2F0aW9ucygpO1xuXG4gICAgXG5cblxuICAgIC8vIHZtLmtub2IgPXtcbiAgICAvLyAgIHZhbHVlOiB2bS5nbWFwLm1hcE9wdGlvbnMuem9vbSxcbiAgICAvLyAgIG9wdGlvbnM6e1xuICAgIC8vICAgICBzaXplOiAyMDAsXG4gICAgLy8gICAgIG1pbjogIDEsXG4gICAgLy8gICAgIG1heDogIDQwLFxuICAgIC8vICAgICBzdGVwOiAxLFxuICAgICAgICBcbiAgICAvLyAgICAgYmFyQ29sb3I6ICcjNUJDMDFFJyxcbiAgICAvLyAgICAgdHJhY2tDb2xvcjogJyMyMTIxMjEnLFxuICAgIC8vICAgICB0cmFja1dpZHRoOiAxNSxcbiAgICAvLyAgICAgYmFyV2lkdGg6IDMwLFxuICAgIC8vICAgICBzdWJUZXh0OiB7XG4gICAgLy8gICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvLyAgICAgICB0ZXh0OiAnbWV0ZXIgcmFkaXVzJ1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgfVxuICAgIC8vIH07XG5cblxuICAkc2NvcGUuJHdhdGNoKFwiTWFwLmtub2IudmFsdWVcIiwgZnVuY3Rpb24ob2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICB2bS5nbWFwLm1hcC5wYW5Ubyh7bGF0OiRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uLmxhdGl0dWRlLCBsbmc6JHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb24ubG9uZ2l0dWRlfSk7XG4gICAgICBsb2NhdGlvbnNSYWRpdXMuc2V0UmFkaXVzKChuZXdWYWx1ZS8yKSoxMDApO1xuICAgICAgLy8gVE9ETzogY2FsY3VsYXRlIHByb3BlciB6b29tIGJhc2VkIG9uIGxvY2F0aW9uUmFkaXVzXG4gICAgICAvLyB2bS5nbWFwLm1hcC5zZXRab29tKG5ld1ZhbHVlKTtcbiAgfSk7XG4gICAgXG5cblxuICAkcm9vdFNjb3BlLiRvbignbWFya2VyOmNsaWNrZWQnLCBmdW5jdGlvbihlLCBsb2NhbGUpIHtcbiAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgXG4gICAgICB2bS5nbWFwLmhlaWdodCA9IHZtLmdtYXAuaGVpZ2h0LzI7XG4gICAgICB2bS5nbWFwLm1hcC5wYW5Ubyh7bGF0OnBhcnNlRmxvYXQobG9jYWxlLmxhdCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzpwYXJzZUZsb2F0KGxvY2FsZS5sb25nKX0pO1xuICAgIH0pO1xuICAgIFxuICB9KTtcbn07Ly8vLyBNYXBDdHJsXG5cblxuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdNYXBDdHJsJywgTWFwQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBQbGF5bGlzdEN0cmwoJHNjb3BlKSB7XG4gIFxuXG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ1BsYXlsaXN0Q3RybCcsIFBsYXlsaXN0Q3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBQbGF5bGlzdHNDdHJsKCRzY29wZSkge1xuICBcbiAkc2NvcGUucGxheWxpc3RzID0gW1xuICAgIHsgdGl0bGU6ICdSZWdnYWUnLCBpZDogMSB9LFxuICAgIHsgdGl0bGU6ICdDaGlsbCcsIGlkOiAyIH0sXG4gICAgeyB0aXRsZTogJ0R1YnN0ZXAnLCBpZDogMyB9LFxuICAgIHsgdGl0bGU6ICdJbmRpZScsIGlkOiA0IH0sXG4gICAgeyB0aXRsZTogJ1JhcCcsIGlkOiA1IH0sXG4gICAgeyB0aXRsZTogJ0Nvd2JlbGwnLCBpZDogNiB9XG4gIF07XG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ1BsYXlsaXN0c0N0cmwnLCBQbGF5bGlzdHNDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIFNlYXJjaEN0cmwoJHNjb3BlLCAkcm9vdFNjb3BlLCAkcSwgJGh0dHAsICRsb2csICBMb2NhdGlvbnNTZXJ2aWNlLCAgJGlvbmljTG9hZGluZywgICRpb25pY1NsaWRlQm94RGVsZWdhdGUsIEFwcFNldHRpbmdzKSB7XG4gICAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ1NlYXJjaEN0cmwnKTtcblxuIFx0Ly8gVmlld01vZGVsXG4gIFx0dmFyIHZtID0gdGhpcztcbiAgICB2bS5yYWRpdXMgPSBBcHBTZXR0aW5ncy5HTUFQX1JBRElVUztcbiAgICAkc2NvcGUucmFkaXVzID0gQXBwU2V0dGluZ3MuR01BUF9SQURJVVM7XG5cbiAgICAkc2NvcGUubG9jYXRpb25zID1bXTtcbiAgICAkc2NvcGUubG9jYXRpb25zX2dyb3VwcyA9W107XG4gICAgJHNjb3BlLmxvY2F0aW9uc19sb2FkZWQgPSAwOyBcbiAgICAkc2NvcGUuQ3VycmVudENvb3JkcyA9ICAkcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbjtcblxuICAgIHZtLmNhcm91c2VsT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNhcm91c2VsSWQgICAgOiAnbG9jYXRpb25zLWNhcm91c2VsJywgLy8gdW5pcXVlIGlkIGZvciB0aGUgY2Fyb3VzZWxcbiAgICAgICAgICAgIHRlbXBsYXRlICAgICAgOiAnLi4vLi4vdGVtcGxhdGVzL2xvY2F0aW9ucy1jYXJvdXNlbC5pdGVtLmh0bWwnLCAvLyB0ZW1wbGF0ZVVybCBpbiBjYXNlIHlvdSBkb24ndCBuZWVkIHRvIHBhc3MgYSBkaXJlY3RpdmUgYnV0IGp1c3QgYSBodG1sIHZpZXdcbiAgICAgICAgICAgIGFsaWduICAgICAgICAgOiAnbGVmdCcsIC8vIGFsaWduZW1lbnQgb2YgdGhlIGNhcm91c2VsXG4gICAgICAgICAgICBjZW50ZXJPblNlbGVjdDogdHJ1ZSwgLy8gY2VudGVyIGNhcm91c2VsIHdoZW4gYW4gaXRlbSBpcyBzZWxlY3RlZFxuICAgICAgICAgICAgdHJhY2tCeSAgICAgICA6ICckaW5kZXgnLCAgLy8gaW5kaWNhdGUgYSB0cmFjayBieSBwcm9wZXJ0eVxuICAgICAgICAgICAgc2VsZWN0Rmlyc3QgICA6IHRydWUsIC8vIHNlbGVjdCBmaXJzdCBjYXJvdXNlbCBpdGVtIGF0IHN0YXJ0XG4gICAgICAgICAgICBzZWxlY3RBdFN0YXJ0IDogeyAgICAvLyBvcHRpb25hbCA9PiBTZWxlY3QgYXQgc3RhcnQgdGhlIGl0ZW0gd2l0aCB0aGUgcHJvcGVydHkgKHN0cmluZykgd2l0aCB2YWx1ZSBwYXNzZWRcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogbnVsbCxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgIDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHB1bGxSZWZyZXNoICAgOiB7ICAvLyBvcHRpb25hbCA9PiBzZXQgYWN0aXZlIHRvIHRydWUgZm9yIHB1bGwgcmVmcmVzaCBwYXNzaW5nIGEgY2FsbEJhY2tcbiAgICAgICAgICAgICAgICBhY3RpdmUgIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2FsbEJhY2s6IGFuZ3VsYXIubm9vcFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgJGlvbmljTG9hZGluZy5zaG93KHtcbiAgICBcdHRlbXBsYXRlOiBcIkZpbmRpbmcgUmFkIFNwb3RzIC4uLlwiLFxuICAgIFx0YmFja2Ryb3A6IHRydWVcbiAgICB9KTtcblxuXG5cbiAgICBMb2NhdGlvbnNTZXJ2aWNlLmFsbCgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubG9jYXRpb25zID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2NhdGlvbnNfZ3JvdXBzID0gXy5jaGFpbihkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ncm91cEJ5KFwiY2F0YWdvcnlsZXZlbDFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGxvY2F0aW9ucywgY2F0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zLm1hcChmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uc2V0VHJhdmVsVGltZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvY2F0aW9uc19sb2FkZWQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uczogbG9jYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUoKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCdsb2NhdGlvbnNfbG9hZGVkJyxmdW5jdGlvbihuZXdfdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV3X3ZhbCA9PSBkYXRhLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpb25pY1NsaWRlQm94RGVsZWdhdGUudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpb25pY0xvYWRpbmcuaGlkZSgpOyAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkYXRhWzBdLnNldFRyYXZlbFRpbWUoKS50aGVuKGZ1bmN0aW9uKGxvY2FsZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGF0YVswXSA9bG9jYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICRzY29wZS5sb2NhdGlvbnMgPSBkYXRhOyAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICRpb25pY1NsaWRlQm94RGVsZWdhdGUudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgJGlvbmljTG9hZGluZy5oaWRlKCk7ICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG4gICBcdCAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgLy8gJHNjb3BlLnNsaWRlSGFzQ2hhbmdlZCA9IGZ1bmN0aW9uKGlkeCkge1xuICAgIC8vICAgICB2YXIgY3VycmVudFNsaWRlID0gJHNjb3BlLmxvY2F0aW9uc1tpZHhdO1xuICAgIC8vICAgICAkbG9nLmRlYnVnKCdzbGlkZUhhc0NoYW5nZWQge25hbWV9JywgY3VycmVudFNsaWRlKTtcblxuICAgIC8vICAgICBjdXJyZW50U2xpZGUuc2V0VHJhdmVsVGltZSgpLnRoZW4oZnVuY3Rpb24obG9jYWxlKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gbG9jYWxlO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgXG59O1xuXG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ1NlYXJjaEN0cmwnLCBTZWFyY2hDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5kaXJlY3RpdmVzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRpcmVjdGl2ZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBtQXBwTG9hZGluZygkbG9nLCAkYW5pbWF0ZSl7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCBcIm1BcHBMb2FkaW5nXCIgKTtcbiAgXG5cbiAgLy8gUnVucyBkdXJpbmcgY29tcGlsZVxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAgICAnQycsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJpYnV0ZXMsIGNvbnRyb2xsZXIsIHRyYW5zY2x1ZGVGbikge1xuICAgICAkYW5pbWF0ZS5sZWF2ZSggXG4gICAgIFx0ZWxlbWVudC5jaGlsZHJlbigpLmVxKCAxIClcbiAgICAgXHQpLnRoZW4oXG4gICAgICAgICAgICBmdW5jdGlvbiBjbGVhbnVwQWZ0ZXJBbmltYXRpb24oKSB7XG4gICAgICAgICAgICBcdCRsb2cubG9nKCdjbGVhbnVwQWZ0ZXJBbmltYXRpb24nKTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHJvb3QgZGlyZWN0aXZlIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAvLyBDbGVhciB0aGUgY2xvc2VkLW92ZXIgdmFyaWFibGUgcmVmZXJlbmNlcy5cbiAgICAgICAgICAgICAgICBzY29wZSA9IGVsZW1lbnQgPSBhdHRyaWJ1dGVzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgIH1cbiAgfVxuXG5cbn07XG5cblxuZGlyZWN0aXZlc01vZHVsZS5kaXJlY3RpdmUoJ21BcHBMb2FkaW5nJywgbUFwcExvYWRpbmcpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1vZGVsc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4qL1xuXG5tb2RlbHNNb2R1bGUuZmFjdG9yeSgnR01hcCcsIGZ1bmN0aW9uKCRsb2csICRyb290U2NvcGUsIExvY2F0aW9uc1NlcnZpY2UsIEFwcFNldHRpbmdzKXtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0dNYXAnKTtcblxuICB2YXIgY3VycmVudENlbnRlciA9ICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uO1xuXG4gIGZ1bmN0aW9uIEdNYXAobWFwU2V0dGluZ3Mpe1xuICAgIFxuICAgIHRoaXMubWFwT3B0aW9ucyA9IHtcbiAgICAgIGNlbnRlcjogICAge2xhdDogY3VycmVudENlbnRlci5sYXRpdHVkZSwgXG4gICAgICAgICAgICAgICAgICBsbmc6IGN1cnJlbnRDZW50ZXIubG9uZ2l0dWRlfSxcbiAgICAgIHpvb206ICAgICAgQXBwU2V0dGluZ3MuR01BUF9ERUZBVUxULlpPT00sXG4gICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLFxuICAgICAgcmFkaXVzOiAgICBBcHBTZXR0aW5ncy5HTUFQX0RFRkFVTFQuUkFESVVTLFxuICAgIH07XG5cbiAgICBhbmd1bGFyLmV4dGVuZCh0aGlzLm1hcE9wdGlvbnMsIG1hcFNldHRpbmdzKTtcbiAgICBcbiAgICAkbG9nLmRlYnVnKCd6b29tIHttYXBPcHRpb25zLnpvb219JywgdGhpcyk7XG4gICAgXG4gICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFwXCIpLCB0aGlzLm1hcE9wdGlvbnMpO1xuIH07Ly9HTWFwIGNvbnN0cnVjdG9yXG5cblxuICBHTWFwLnByb3RvdHlwZSA9e1xuXG4gICAgZHJvcE1hcmtlcjogZnVuY3Rpb24obWFya2VyRGF0YSkge1xuICAgICAgdmFyIF9tYXJrZXJTZXR0aW5ncyA9IHt9O1xuICAgICAgYW5ndWxhci5leHRlbmQoX21hcmtlclNldHRpbmdzLCB0aGlzLm1hcE9wdGlvbnMsIG1hcmtlckRhdGEpO1xuICAgICAgJGxvZy5kZWJ1ZygnZHJvcE1hcmtlciBmb3IgXCJ7dGl0bGV9XCJcIiBhdCBcIntjZW50ZXIubGF0fSwge2NlbnRlci5sbmd9XCInLCBfbWFya2VyU2V0dGluZ3MpO1xuICAgICAgXG4gICAgICB2YXIgX21hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgcG9zaXRpb246ICBfbWFya2VyU2V0dGluZ3MuY2VudGVyLFxuICAgICAgICAgICAgbWFwOiAgICAgICB0aGlzLm1hcCxcbiAgICAgICAgICAgIHRpdGxlOiAgICAgX21hcmtlclNldHRpbmdzLnRpdGxlLFxuICAgICAgICAgICAgb3BhY2l0eTogICBfbWFya2VyU2V0dGluZ3Mub3BhY2l0eSxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1BcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX21hcmtlcjtcbiAgICB9LFxuXG5cbiAgICBidWlsZEluZm9XaW5kb3c6IGZ1bmN0aW9uKGxvY2F0aW9uSW5mbywgbG9jYXRpb25NYXJrZXIpIHtcbiAgICAgIHZhciBfbWFwID0gdGhpcztcblxuICAgICAgJGxvZy5kZWJ1ZygnYnVpbGRJbmZvV2luZG93IGZvciB7bmFtZX0nLCBsb2NhdGlvbkluZm8pO1xuICAgICAgdmFyIGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICc8aDMgaWQ9XCJmaXJzdEhlYWRpbmdcIiBjbGFzcz1cImZpcnN0SGVhZGluZ1wiPicrbG9jYXRpb25JbmZvLm5hbWUrJzwvaDM+JytcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxwPicrbG9jYXRpb25JbmZvLnRyYXZlbFRpbWUrJyB3YWxrPC9wPidcbiAgICAgIH0pO1xuXG4gICAgICBsb2NhdGlvbk1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdtYXJrZXI6Y2xpY2tlZCcsIGxvY2F0aW9uSW5mbyApO1xuICAgICAgICBpbmZvd2luZG93Lm9wZW4oIF9tYXAubWFwICxsb2NhdGlvbk1hcmtlcik7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGluZm93aW5kb3c7XG4gICAgfSxcblxuXG4gICAgcGxvdExvY2F0aW9uczpmdW5jdGlvbihwbG90RGF0YSkge1xuICAgICAgdmFyIF9tYXAgPSB0aGlzO1xuICAgICAgdmFyIF9wbG90U2V0dGluZ3MgPXt9OyBcblxuICAgICAgYW5ndWxhci5leHRlbmQoX3Bsb3RTZXR0aW5ncyx0aGlzLm1hcE9wdGlvbnMsIHBsb3REYXRhKTtcbiAgICAgICRsb2cuZGVidWcoJ3Bsb3RMb2NhdGlvbnMgd2l0aGluIGEgXCJ7cmFkaXVzfVwiIG1ldGVyIHJhZGl1cyBvZiBcIntjZW50ZXIubGF0fSwge2NlbnRlci5sbmd9XCInLCBfcGxvdFNldHRpbmdzKTtcbiAgICAgIFxuICAgICAgLy8gZHJvcCBtYXJrZXIgb24gY3VycmVudCBsb2NhdGlvblxuICAgICAgX21hcC5kcm9wTWFya2VyKHt0aXRsZTpcIllvdSBBcmUgSGVyZVwiLCBvcGFjaXR5OjF9KTtcblxuICAgICAgLy8gZ2V0IGFsbCBsb2NhdGlvbnMgYXJvdW5kIHNwZWNpZmllZCBhcmVhXG4gICAgICBMb2NhdGlvbnNTZXJ2aWNlXG4gICAgICAgIC5nZXQoe3JhZGl1czogX3Bsb3RTZXR0aW5ncy5yYWRpdXMsIFxuICAgICAgICAgICAgICBsYXQ6ICAgIF9wbG90U2V0dGluZ3MuY2VudGVyLmxhdCwgXG4gICAgICAgICAgICAgIGxuZzogICAgX3Bsb3RTZXR0aW5ncy5jZW50ZXIubG5nIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGxvY2F0aW9ucykge1xuXG4gICAgICAgICAgLy8gcHJvY2VzcyBsb2NhdGlvbnMgXG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGxvY2F0aW9ucywgZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoJ3Bsb3RMb2NhdGlvbiB7bmFtZX0nLGxvY2F0aW9uKTtcbiAgICAgICAgICAgIC8vZ2V0IHRoZSB0cmF2ZWxUaW1lIGZvckVhY2ggbG9jYXRpb25cbiAgICAgICAgICAgIGxvY2F0aW9uLnNldFRyYXZlbFRpbWUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgIHZhciBsb2NhdGlvblBpbiA9IF9tYXAuZHJvcE1hcmtlcih7Y2VudGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IHBhcnNlRmxvYXQobG9jYXRpb24ubGF0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogcGFyc2VGbG9hdChsb2NhdGlvbi5sb25nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBsb2NhdGlvbi5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIF9tYXAuYnVpbGRJbmZvV2luZG93KGxvY2F0aW9uLCBsb2NhdGlvblBpbik7XG4gICAgICAgICAgICAgIF9tYXAucGxvdFJvdXRlVG8obG9jYXRpb24pO1xuXG4gICAgICAgICAgICB9KTsvLy9sb2NhdGlvbi5zZXRUcmF2ZWxUaW1lXG5cblxuICAgICAgICAgIH0pOy8vL2VuZCBhbmd1bGFyLmZvckVhY2hcblxuICAgICAgICB9KTsvL2VuZCBMb2NhdGlvbnNTZXJ2aWNlXG5cbiAgICB9LFxuXG4gICAgcGxvdFJvdXRlVG86IGZ1bmN0aW9uKGxvY2F0aW9uKXtcbiAgICAgICRsb2cuZGVidWcoJ3Bsb3RSb3V0ZVRvIHtuYW1lfScsbG9jYXRpb24pO1xuXG4gICAgICB2YXIgX21hcCA9IHRoaXM7XG4gICAgICB2YXIgX3JvdXRlU2V0dGluZ3MgPSB7XG4gICAgICAgICAgICBkcmFnZ2FibGU6ICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIHN1cHByZXNzSW5mb1dpbmRvd3M6IHRydWUsXG4gICAgICAgICAgICBzdXBwcmVzc01hcmtlcnM6ICAgICB0cnVlLFxuICAgICAgICAgICAgb3JpZ2luOiAgICAgICAgICAgICAgX21hcC5tYXBPcHRpb25zLmNlbnRlclxuICAgICAgfTtcblxuICAgICAgYW5ndWxhci5leHRlbmQoX3JvdXRlU2V0dGluZ3MsIHRoaXMubWFwT3B0aW9ucyk7XG5cbiAgICAgIHZhciBkaXJlY3Rpb25zRGlzcGxheSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIoe1xuICAgICAgICAgICAgbWFwOiAgICAgICAgICAgICAgICAgX21hcC5tYXAsXG4gICAgICAgICAgICBkcmFnZ2FibGU6ICAgICAgICAgICBfcm91dGVTZXR0aW5ncy5kcmFnZ2FibGUsXG4gICAgICAgICAgICBzdXBwcmVzc0luZm9XaW5kb3dzOiBfcm91dGVTZXR0aW5ncy5zdXBwcmVzc0luZm9XaW5kb3dzLFxuICAgICAgICAgICAgc3VwcHJlc3NNYXJrZXJzOiAgICAgX3JvdXRlU2V0dGluZ3Muc3VwcHJlc3NNYXJrZXJzXG4gICAgICAgICAgfSksXG4gICAgICAgICAgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiB7bGF0OiBwYXJzZUZsb2F0KGxvY2F0aW9uLmxhdCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHBhcnNlRmxvYXQobG9jYXRpb24ubG9uZyl9LFxuICAgICAgICAgICAgb3JpZ2luOiAgICAgIF9yb3V0ZVNldHRpbmdzLm9yaWdpbixcbiAgICAgICAgICAgIHRyYXZlbE1vZGU6ICBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLldBTEtJTkcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpOy8vIFBhc3MgdGhlIGRpcmVjdGlvbnMgcmVxdWVzdCB0byB0aGUgZGlyZWN0aW9ucyBzZXJ2aWNlLlxuXG5cbiAgICAgICAgICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShyZXF1ZXN0LCBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xuICAgICAgICAgICAgICAvLyBEaXNwbGF5IHRoZSByb3V0ZSBvbiB0aGUgbWFwLlxuICAgICAgICAgICAgICBkaXJlY3Rpb25zRGlzcGxheS5zZXREaXJlY3Rpb25zKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTsvLy9kaXJlY3Rpb3NTZXJ2aWNlLnJvdXRlXG5cblxuICAgIH0sXG5cbiAgICBzZXRSYWRpdXNDaXJjbGU6IGZ1bmN0aW9uKHJhZGl1c0NpcmNsZVNldHRpbmdzKSB7XG4gICAgICB2YXIgX21hcCA9IHRoaXM7XG4gICAgICB2YXIgX2NpcmNsZVNldHRpbmdzID17XG4gICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAgICcjMDA4NGI0JyxcbiAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogMC44LFxuICAgICAgICAgICAgICBzdHJva2VXZWlnaHQ6ICAxLFxuICAgICAgICAgICAgICBmaWxsQ29sb3I6ICAgICAnIzAwODRiNCcsXG4gICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAgIDAuMDYyNSxcbiAgICAgIH07XG5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKF9jaXJjbGVTZXR0aW5ncyAsdGhpcy5tYXBPcHRpb25zLCByYWRpdXNDaXJjbGVTZXR0aW5ncyk7XG5cbiAgICAgIHZhciBsb2NhdGlvbnNDaXJjbGUgPSBuZXcgZ29vZ2xlLm1hcHMuQ2lyY2xlKHtcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogICBfY2lyY2xlU2V0dGluZ3Muc3Ryb2tlQ29sb3IsXG4gICAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogX2NpcmNsZVNldHRpbmdzLnN0cm9rZU9wYWNpdHksXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2VpZ2h0OiAgX2NpcmNsZVNldHRpbmdzLnN0cm9rZVdlaWdodCxcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3I6ICAgICBfY2lyY2xlU2V0dGluZ3MuZmlsbENvbG9yLFxuICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAgIF9jaXJjbGVTZXR0aW5ncy5maWxsT3BhY2l0eSxcbiAgICAgICAgICAgICAgICBtYXA6ICAgICAgICAgICBfbWFwLm1hcCxcbiAgICAgICAgICAgICAgICBjZW50ZXI6ICAgICAgICBfY2lyY2xlU2V0dGluZ3MuY2VudGVyLFxuICAgICAgICAgICAgICAgIHJhZGl1czogICAgICAgIF9jaXJjbGVTZXR0aW5ncy5yYWRpdXNcbiAgICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxvY2F0aW9uc0NpcmNsZTtcbiAgICB9XG5cbiAgfTtcbiAgICBcblxuXG4gIHJldHVybiBHTWFwO1xuXG4gIFxufSk7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1vZGVsc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbm1vZGVsc01vZHVsZS5mYWN0b3J5KCdMb2NhdGlvbicsIGZ1bmN0aW9uKCRyb290U2NvcGUsICRsb2csICRxICkge1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnTG9jYXRpb24nKTtcblxuICBmdW5jdGlvbiBMb2NhdGlvbihMb2NhdGlvbkRhdGEpe1xuICAgIGFuZ3VsYXIuZXh0ZW5kKHRoaXMsIExvY2F0aW9uRGF0YSk7XG4gICAgJGxvZy5kZWJ1Zygne25hbWV9JywgdGhpcyk7XG4gIH1cblxuXG4gIExvY2F0aW9uLnJlc3BvbnNlVHJhbnNmb3JtZXIgPSBmdW5jdGlvbiAocmVzcG9uc2VEYXRhKSB7XG4gICAgJGxvZy5kZWJ1ZygncmVzb3BvbnNlVHJhbnNmb3JtZXIge2xlbmd0aH0nLCByZXNwb25zZURhdGEubG9jYXRpb25zKTtcbiAgICBpZihyZXNwb25zZURhdGEubG9jYXRpb25zKXtcbiAgICAgIHJldHVybiByZXNwb25zZURhdGEubG9jYXRpb25zXG4gICAgICAgICAgICAgIC5tYXAoTG9jYXRpb24uYnVpbGQpOyAgXG4gICAgfVxuXG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhLm1hcChMb2NhdGlvbi5idWlsZCk7ICBcblxuICAgIFxuICB9XG5cblxuICBMb2NhdGlvbi5wcm90b3R5cGUuc2V0VHJhdmVsVGltZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgJGxvZy5kZWJ1Zygnc2V0VHJhdmVsVGltZSB7bmFtZX0nLCB0aGlzKTtcbiAgICAgIFxuICAgICAgdmFyIF9sb2NhdGlvbiA9IHRoaXM7XG4gICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICB2YXIgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXN0YW5jZU1hdHJpeFNlcnZpY2U7XG4gICAgICAgc2VydmljZS5nZXREaXN0YW5jZU1hdHJpeCh7XG4gICAgICAgICBvcmlnaW5zOiAgICAgICBbe2xhdDogJHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb24ubGF0aXR1ZGUsIGxuZzokcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbi5sb25naXR1ZGV9XSxcbiAgICAgICAgIGRlc3RpbmF0aW9uczogIFt7bGF0OiBwYXJzZUZsb2F0KHRoaXMubGF0KSwgbG5nOiBwYXJzZUZsb2F0KHRoaXMubG9uZyl9XSxcbiAgICAgICAgIHRyYXZlbE1vZGU6ICAgIGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuV0FMS0lORyxcbiAgICAgICAgIHVuaXRTeXN0ZW06ICAgIGdvb2dsZS5tYXBzLlVuaXRTeXN0ZW0uSU1QRVJJQUwsXG4gICAgICAgICBhdm9pZEhpZ2h3YXlzOiBmYWxzZSxcbiAgICAgICAgIGF2b2lkVG9sbHM6ICAgIGZhbHNlXG4gICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cykge1xuICAgICAgICAgXHRfbG9jYXRpb24udHJhdmVsVGltZSA9IHJlc3BvbnNlLnJvd3NbMF0uZWxlbWVudHNbMF0uZHVyYXRpb247XG4gICAgICAgICAgX2xvY2F0aW9uLmRpc3RhbmNlID0gcmVzcG9uc2Uucm93c1swXS5lbGVtZW50c1swXS5kaXN0YW5jZTtcbiAgICAgICAgIFx0ZGVmZXJyZWQucmVzb2x2ZShfbG9jYXRpb24pO1xuICAgICAgICAgLy8gJGxvZy5kZWJ1ZyhcIntuYW1lfSAtIHt0cmF2ZWxUaW1lfVwiLCBfbG9jYXRpb24pO1xuICAgICAgICAgIFxuICAgICAgIH0pO1xuXG4gICAgICAgXG4gICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG5cbiAgfVxuXG5cbiAgTG9jYXRpb24uYnVpbGQgPSBmdW5jdGlvbihsRGF0YSkge1xuICAgIC8vICRsb2cuZGVidWcoJ2J1aWxkIHtuYW1lfScsIGxEYXRhKTtcbiAgICAvLyBMb2NhdGlvbi5zZXRUcmF2ZWxUaW1lKGxEYXRhKTtcbiAgICByZXR1cm4gbmV3IExvY2F0aW9uKGxEYXRhKTtcbiAgfVxuXG4gICBcblxuICBcbiBcbiAgcmV0dXJuIExvY2F0aW9uO1xuXG5cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLm1vZGVscycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTsiLCIndXNlIHN0cmljdCc7XG5cblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gT25Db25maWcoJHN0YXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRwcm92aWRlKSB7XG4gIFxuICAvL2FjdGl2YXRlIExvZ0RlY29yYXRvclxuICByZXF1aXJlKCcuL3V0aWxzL2xvZ2dpbmcvTG9nRGVjb3JhdG9yLmpzJykoJHByb3ZpZGUpO1xuXG4kc3RhdGVQcm92aWRlclxuXG4gIC5zdGF0ZSgnYXBwJywge1xuICAgIHVybDogJy9hcHAnLFxuICAgIGFic3RyYWN0OiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL21lbnUuaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ0FwcEN0cmwnLFxuICAgIHJlc29sdmU6e1xuICAgICAgICBjb29yZGluYXRlczpmdW5jdGlvbihDdXJyZW50Q29vcmRzLCAkdGltZW91dCkge1xuICAgICAgICAgICAgcmV0dXJuIEN1cnJlbnRDb29yZHMuZ2V0KCk7ICBcbiAgICAgICAgfVxuICAgIH1cbiAgfSlcbiAgLnN0YXRlKCdhcHAuY29ubmVjdCcsIHtcbiAgICB1cmw6ICcvY29ubmVjdCcsXG4gICAgdmlld3M6IHtcbiAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvY29ubmVjdC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0Nvbm5lY3RDdHJsIGFzIENvbm5lY3QnXG4gICAgICB9XG4gICAgfVxuICB9IClcblxuICAuc3RhdGUoJ2FwcC5sb2dpbicsIHtcbiAgICB1cmw6ICcvbG9naW4nLFxuICAgIHZpZXdzOiB7XG4gICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2xvZ2luLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTG9naW5DdHJsIGFzIExnbidcbiAgICAgIH1cbiAgICB9XG4gIH0gKVxuICBcbiAgLnN0YXRlKCdhcHAuc2VhcmNoJywge1xuICAgIHVybDogJy9zZWFyY2gnLFxuICAgIHZpZXdzOiB7XG4gICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3NlYXJjaC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1NlYXJjaEN0cmwnXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIFxuICAuc3RhdGUoJ2FwcC5tYXAnLCB7XG4gICAgICB1cmw6ICcvbWFwJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9tYXAuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ01hcEN0cmwgYXMgTWFwJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG5cblxuICAvLyBpZiBub25lIG9mIHRoZSBhYm92ZSBzdGF0ZXMgYXJlIG1hdGNoZWQsIHVzZSB0aGlzIGFzIHRoZSBmYWxsYmFja1xuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvYXBwL2Nvbm5lY3QnKTtcbiAgXG4gIFxuXG5cbn0vLy8vIE9uQ29uZmlnXG5cblxubW9kdWxlLmV4cG9ydHMgPSBPbkNvbmZpZzsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIE9uUnVuKCRpb25pY1BsYXRmb3JtLCAkbG9nLCAkYW5pbWF0ZSkge1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnT25SdW4nKTtcbiAgIFxuICAkaW9uaWNQbGF0Zm9ybS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkYW5pbWF0ZS5lbmFibGVkKHRydWUpO1xuICAgIFxuICAgIC8vIEhpZGUgdGhlIGFjY2Vzc29yeSBiYXIgYnkgZGVmYXVsdCAocmVtb3ZlIHRoaXMgdG8gc2hvdyB0aGUgYWNjZXNzb3J5IGJhciBhYm92ZSB0aGUga2V5Ym9hcmRcbiAgICAvLyBmb3IgZm9ybSBpbnB1dHMpXG4gICAgaWYgKHdpbmRvdy5jb3Jkb3ZhICYmIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQpIHtcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5oaWRlS2V5Ym9hcmRBY2Nlc3NvcnlCYXIodHJ1ZSk7XG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuZGlzYWJsZVNjcm9sbCh0cnVlKTtcblxuICAgIH1cbiAgICBpZiAod2luZG93LlN0YXR1c0Jhcikge1xuICAgICAgLy8gb3JnLmFwYWNoZS5jb3Jkb3ZhLnN0YXR1c2JhciByZXF1aXJlZFxuICAgICAgU3RhdHVzQmFyLnN0eWxlRGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT25SdW47IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2VydmljZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBDdXJyZW50Q29vcmRzKCRxLCAkaHR0cCwgJGxvZywgIEFwcFNldHRpbmdzKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKFwiQ3VycmVudENvb3Jkc1NlcnZpY2VcIik7XG4gIFxuICB2YXIgc2VydmljZSA9IHt9O1xuXG4gIHNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpOyAgICBcblxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24ocG9zKSB7XG4gICAgICAgIFxuICAgICAgJGxvZy5kZWJ1ZygnbGF0OiB7Y29vcmRzLmxhdGl0dWRlfScscG9zKTtcbiAgICAgICRsb2cuZGVidWcoJ2xvbmc6IHtjb29yZHMubG9uZ2l0dWRlfScscG9zKTtcblxuICAgICAgZGVmZXJyZWQucmVzb2x2ZShwb3MuY29vcmRzKTtcbiAgICAgICAgXG4gICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICRsb2cud2FybignVW5hYmxlIHRvIGdldCBsb2NhdGlvbjogJyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIsIHN0YXR1cyk7XG4gICB9KTtcblxuXG4gICAgXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cbn1cblxuc2VydmljZXNNb2R1bGUuc2VydmljZSgnQ3VycmVudENvb3JkcycsIEN1cnJlbnRDb29yZHMpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNlcnZpY2VzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gTG9jYXRpb25zU2VydmljZSgkbG9nLCBZb2NhbCwgTG9jYXRpb24pIHtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoXCJMb2NhdGlvbnNTZXJ2aWNlU2VydmljZVwiKTtcblxuICB2YXIgc2VydmljZSA9IHt9O1xuXG4gIHNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24oIGdldERhdGEgKSB7XG5cbiAgICAkbG9nLmRlYnVnKCdHRVQgbG9jYXRpb24gaW4gYSB7cmFkaXVzfSAgb2Yge2xhdH0sIHtsbmd9JywgZ2V0RGF0YSk7XG5cbiAgICByZXR1cm4gWW9jYWwuZ2V0KGdldERhdGEpXG4gICAgICAgICAgICAgICAgLnRoZW4oTG9jYXRpb24ucmVzcG9uc2VUcmFuc2Zvcm1lcik7XG5cbiAgfTtcblxuICBzZXJ2aWNlLmFsbCA9IGZ1bmN0aW9uKCBnZXREYXRhICkge1xuXG4gICAgJGxvZy5kZWJ1ZygnQUxMJyk7XG5cbiAgICByZXR1cm4gWW9jYWwuYWxsKCkudGhlbihMb2NhdGlvbi5yZXNwb25zZVRyYW5zZm9ybWVyKTtcblxuICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ0xvY2F0aW9uc1NlcnZpY2UnLCBMb2NhdGlvbnNTZXJ2aWNlKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIFlvY2FsKCRxLCAkaHR0cCwgQXBwU2V0dGluZ3MsICRsb2cpIHtcblxuICB2YXIgc2VydmljZSA9IHt9O1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZShcIllvY2FsU2VydmljZVwiKTtcblxuICBzZXJ2aWNlLmdldCA9IGZ1bmN0aW9uKCBnZXREYXRhICkge1xuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAvLyAvbGlzdEJ5RGlzdGFuY2VDYXQvRm9vZC84MDAwLzM5LjkzNzg5My8tNzUuMTY4OTM0N1xuICAgJGh0dHAuZ2V0KEFwcFNldHRpbmdzLnlvY2FsQVBJLmJhc2UrJy9saXN0QnlEaXN0YW5jZUNhdC9Gb29kLycrZ2V0RGF0YS5yYWRpdXMrJy8nK2dldERhdGEubGF0KycvJytnZXREYXRhLmxuZykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ2ZvdW5kIHtsZW5ndGh9IHNwb3RzIHdpdGhpbiAnK2dldERhdGEucmFkaXVzKycgbWV0ZXJzIG9mICcrZ2V0RGF0YS5sYXQrJywnK2dldERhdGEubG5nLCBkYXRhLmxvY2F0aW9ucyk7XG4gICAgICAgIGRhdGEucmFkaXVzID0gZ2V0RGF0YS5yYWRpdXM7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpIHtcbiAgICAgICAgJGxvZy53YXJuKCdVbmFibGUgdG8gZ2V0IGxvY2F0aW9uOiAnICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyLCBzdGF0dXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgc2VydmljZS5hbGwgPSBmdW5jdGlvbihnZXREYXRhKXtcbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgLy8gL2xpc3RCeURpc3RhbmNlQ2F0L0Zvb2QvODAwMC8zOS45Mzc4OTMvLTc1LjE2ODkzNDdcbiAgICRodHRwLmdldChBcHBTZXR0aW5ncy55b2NhbEFQSS5iYXNlKycvbGlzdCcpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKCdhbGw6IGZvdW5kIHtsZW5ndGh9IHRvdGFsIHNwb3RzJywgZGF0YSk7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpIHtcbiAgICAgICAgJGxvZy53YXJuKCdVbmFibGUgdG8gZ2V0IGxvY2F0aW9uOiAnICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyLCBzdGF0dXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG5cbiAgfVxuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ1lvY2FsJywgWW9jYWwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLnNlcnZpY2VzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNlcnZpY2VzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gRXhhbXBsZVNlcnZpY2UoJHEsICRodHRwKSB7XG5cbiAgdmFyIHNlcnZpY2UgPSB7fTtcblxuICBzZXJ2aWNlLmdldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAkaHR0cC5nZXQoJ2FwaVBhdGgnKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICB9KS5lcnJvcihmdW5jdGlvbihlcnIsIHN0YXR1cykge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyLCBzdGF0dXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cbn1cblxuc2VydmljZXNNb2R1bGUuc2VydmljZSgnRXhhbXBsZVNlcnZpY2UnLCBFeGFtcGxlU2VydmljZSk7IiwiLyoqXG4gKiBAYXV0aG9yICAgICBUaG9tYXMgQnVybGVzb25cbiAqIEBhdXRob3IgICAgIFN0YWNrT3ZlcmZsb3cgLSBIYXJ0bywgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzE1NDA4L2hvdy1kby1pLWZvcm1hdC1hLXRpbWVzdGFtcC1pbi1qYXZhc2NyaXB0LXRvLWRpc3BsYXktaXQtaW4tZ3JhcGhzLXV0Yy1pcy1maW5lXG4gKiBAZGVzY3JpcHRpb25cbiAqICBcbiAqIERhdGVUaW1lIHV0aWxpdHkgY2xhc3MgdGhhdCBzcGl0cyBvdXQgVVRDIHRpbWVzdGFtcCBzdHJpbmdzIHVzdWFsbHkgdXNlZCBpbiBhIHJlcG9ydGluZywgcHJpbnQtY2FwYWJsZSBwcm9jZXNzLlxuKi9cbiBcblxuICd1c2Ugc3RyaWN0JztcblxuXG52YXIgYnVpbGRUaW1lU3RyaW5nID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdClcbiAgICAgICAge1xuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8IFwiJWg6JW06JXM6JXpcIjtcblxuICAgICAgICAgICAgZnVuY3Rpb24gcGFkKHZhbHVlLCBpc01pbGxpU2Vjb25kcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgKGlzTWlsbGlTZWNvbmRzKSA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlzTWlsbGlTZWNvbmRzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGlzTWlsbGlTZWNvbmRzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUgPCAxMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIjAwXCIgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHZhbHVlIDwgMTAwKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiMFwiICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuKHZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoIDwgMikgPyBcIjBcIiArIHZhbHVlIDogdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQucmVwbGFjZSgvJShbYS16QS1aXSkvZywgZnVuY3Rpb24gKF8sIGZtdENvZGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3dpdGNoKGZtdENvZGUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJZXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiaFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0SG91cnMoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldE1pbnV0ZXMoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldFNlY29uZHMoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldE1pbGxpc2Vjb25kcygpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBmb3JtYXQgY29kZTogXCIgKyBmbXRDb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG4gLy8gUHVibGlzaCBBUEkgZm9yIERhdGVUaW1lIHV0aWxzXG4gICAgICAgIC8vIHJldHVybiB7XG4gICAgICAgIC8vICAgICBmb3JtYXR0ZWROb3c6IGZ1bmN0aW9uICgpXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGJ1aWxkVGltZVN0cmluZyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gXG4gbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZm9ybWF0dGVkTm93OiBmdW5jdGlvbiAoKSB7IHJldHVybiBidWlsZFRpbWVTdHJpbmcobmV3IERhdGUoKSk7IH1cbiB9O1xuXG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBMb2dEZWNvcmF0b3JcbiAqICBAc291cmNlOiBodHRwOi8vc29sdXRpb25vcHRpbWlzdC5jb20vMjAxMy8xMC8wNy9lbmhhbmNlLWFuZ3VsYXJqcy1sb2dnaW5nLXVzaW5nLWRlY29yYXRvcnMvXG4gKi9cblxuIHZhciBMb2dEZWNvcmF0b3IgPSBmdW5jdGlvbiggJHByb3ZpZGUgICl7XG5cblxuICAgICAgICAgICAgICAvLyBSZWdpc3RlciBvdXIgJGxvZyBkZWNvcmF0b3Igd2l0aCBBbmd1bGFySlMgJHByb3ZpZGVyXG4gICAgICAgICAgICAgICRwcm92aWRlLmRlY29yYXRvciggJyRsb2cnLCBbIFwiJGRlbGVnYXRlXCIsIGZ1bmN0aW9uKCAkZGVsZWdhdGUgKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAvLyBOT1RFOiB0aGUgTG9nRW5jaGFuY2VyIG1vZHVsZSByZXR1cm5zIGEgRlVOQ1RJT04gdGhhdCB3ZSBuYW1lZCBgZW5jaGFuY2VMb2dnZXJGbmBcbiAgICAgICAgICAgICAgIC8vICAgICAgIEFsbCB0aGUgZGV0YWlscyBvZiBob3cgdGhlIGBlbmNoYW5jZW1lbnRgIHdvcmtzIGlzIGVuY2Fwc3VsYXRlZCBpbiBMb2dFbmhhbmNlciFcblxuICAgICAgICAgICAgICAgICAgcmVxdWlyZSgnLi9Mb2dFbmhhbmNlci5qcycpKCAkZGVsZWdhdGUgKTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuICRkZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgfV0pO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9ICBMb2dEZWNvcmF0b3I7IiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBMb2dFbmhhbmNlclxuICogVGhpcyBhZGRzIHRpbWVzdGFtcHMgYW5kIHN1cHBsYW50IGZ1bmN0aW9uYWxpdHkgdG8gQW5ndWxhciAkbG9nIHNlcnZpY2VcbiAqIEBzb3VyY2U6IGh0dHA6Ly9zb2x1dGlvbm9wdGltaXN0LmNvbS8yMDEzLzEwLzA3L2VuaGFuY2UtYW5ndWxhcmpzLWxvZ2dpbmctdXNpbmctZGVjb3JhdG9ycy9cbiAqIEBhcGk6IHB1YmxpY1xuICogQHJldHVybnM6IE9iamVjdCAtIGV4dGVuZGVkICRsb2cgc2VydmljZVxuICovXG5cbnZhciBlbmNoYW5jZUxvZ2dlciA9IGZ1bmN0aW9uKCAkbG9nICl7XG4gIHZhciBzdXBwbGFudCA9IHJlcXVpcmUoJy4uL3N1cHBsYW50LmpzJyk7XG4gIHZhciBEYXRlVGltZSA9IHJlcXVpcmUoJy4uL0RhdGVUaW1lLmpzJyk7XG5cblxuICAvKipcbiAgICogQ2FwdHVyZSB0aGUgb3JpZ2luYWwgJGxvZyBmdW5jdGlvbnM7IGZvciB1c2UgaW4gZW5oYW5jZWRMb2dGbigpXG4gICAqIEBhcGkgIHByaXZhdGUgXG4gICAqL1xuICBcbiAgdmFyIF8kbG9nID0gKGZ1bmN0aW9uKCAkbG9nICl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2cgICA6ICRsb2cubG9nLFxuICAgICAgICBpbmZvICA6ICRsb2cuaW5mbyxcbiAgICAgICAgd2FybiAgOiAkbG9nLndhcm4sXG4gICAgICAgIGRlYnVnIDogJGxvZy5kZWJ1ZyxcbiAgICAgICAgZXJyb3IgOiAkbG9nLmVycm9yXG4gICAgICB9O1xuICB9KSggJGxvZyApOyBcblxuXG5cbiAgIC8qKlxuICAgICogUGFydGlhbCBhcHBsaWNhdGlvbiB0byBwcmUtY2FwdHVyZSBhIGxvZ2dlciBmdW5jdGlvblxuICAgICogQGFwaTogIHByaXZhdGUgXG4gICAgKiBAcmV0dXJuczogRnVuY3Rpb24gXG4gICAgKi9cbiAgICB2YXIgcHJlcGFyZUxvZ0ZuID0gZnVuY3Rpb24oIGxvZ0ZuLCBjbGFzc05hbWUgKXtcblxuICAgICAgLyoqXG4gICAgICAgKiBJbnZva2UgdGhlIHNwZWNpZmllZCBgbG9nRm48YCB3aXRoIHRoZSBzdXBwbGFudCBmdW5jdGlvbmFsaXR5Li4uXG4gICAgICAgKiBAYXBpOiBwcml2YXRlIFxuICAgICAgICogQGV4YW1wbGU6IFxuICAgICAgICogICB2YXIgdXNlciA9IHsgd2hvOlwiVGhvbWFzIEJ1cmxlc29uXCJcIiwgZW1haWw9XCJUaG9tYXNCdXJsZXNvbkBnbWFpbC5jb21cIlwiIH07XG4gICAgICAgKiAgICRsb2cud2FybiggXCJBIHdhcm5pbmcgbWVzc2FnZSBmb3IgYHt3aG99YCB3aWxsIGJlIHNlbnQgdG8gYHtlbWFpbH1gICFcIiwgdXNlciApOyAgIFxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc2hvdWxkIG91dHB1dDogQSB3YXJuaW5nIG1lc3NhZ2UgZm9yIGBUaG9tYXMgQnVybGVzb25gIHdpbGwgYmUgc2VudCB0byBgVGhvbWFzQnVybGVzb25AZ21haWwuY29tYCAhXG4gICAgICAgKi9cbiAgICAgIHZhciBlbmhhbmNlZExvZ0ZuID0gZnVuY3Rpb24oICl7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgICAgIG5vdyAgPSBEYXRlVGltZS5mb3JtYXR0ZWROb3coKTtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnO1xuICAgICAgICAgICAgLy8gcHJlcGVuZCBhIHRpbWVzdGFtcCB0byB0aGUgb3JpZ2luYWwgb3V0cHV0IG1lc3NhZ2VcbiAgICAgICAgICAgIGFyZ3NbMF0gPSBzdXBwbGFudChcInswfSAtIHsxfXsyfVwiLCBbIG5vdywgY2xhc3NOYW1lLCBhcmdzWzBdIF0pO1xuXG4gICAgICAgIGxvZ0ZuLmNhbGwoIG51bGwsICBzdXBwbGFudC5hcHBseSggbnVsbCwgYXJncyApICk7XG4gICAgICB9O1xuXG4gICAgICAvLyBTcGVjaWFsLi4uIG9ubHkgbmVlZGVkIHRvIHN1cHBvcnQgYW5ndWxhci1tb2NrcyBleHBlY3RhdGlvbnNcbiAgICAgIGVuaGFuY2VkTG9nRm4ubG9ncyA9IFsgXTtcbiBcbiAgICAgIHJldHVybiBlbmhhbmNlZExvZ0ZuO1xuICAgICAgXG4gICAgfTtcblxuXG5cblxuICAgIC8qKlxuICAgICAqIFN1cHBvcnQgdG8gZ2VuZXJhdGUgY2xhc3Mtc3BlY2lmaWMgbG9nZ2VyIGluc3RhbmNlIHdpdGggY2xhc3NuYW1lIG9ubHlcbiAgICAgKlxuICAgICAqIEBwYXJhbTogbmFtZVxuICAgICAqIEByZXR1cm5zOiBPYmplY3Qgd3JhcHBlciBmYWNhZGUgdG8gJGxvZ1xuICAgICAqL1xuICAgIHZhciBnZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKCBjbGFzc05hbWUgKXtcbiAgICAgIGNsYXNzTmFtZSA9ICggY2xhc3NOYW1lICE9PSB1bmRlZmluZWQgKSA/IGNsYXNzTmFtZSArIFwiOjpcIiA6IFwiXCI7XG5cbiAgICAgIHJldHVybntcbiAgICAgICAgIGxvZyAgIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5sb2csICAgIGNsYXNzTmFtZSApLFxuICAgICAgICAgaW5mbyAgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmluZm8sICAgY2xhc3NOYW1lICksXG4gICAgICAgICB3YXJuICA6IHByZXBhcmVMb2dGbiggXyRsb2cud2FybiwgICBjbGFzc05hbWUgKSxcbiAgICAgICAgIGRlYnVnIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5kZWJ1ZywgIGNsYXNzTmFtZSApLFxuICAgICAgICAgLy8gZXJyb3IgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmVycm9yLCAgY2xhc3NOYW1lIClcbiAgICAgIH07XG5cbiAgICB9O1xuXG5cblxuICAgIC8vIHdyYXAgZWFjaCBsb2cgbWV0aG9kIFxuICAgICRsb2cubG9nICAgPSBwcmVwYXJlTG9nRm4oICRsb2cubG9nICk7XG4gICAgJGxvZy5pbmZvICA9IHByZXBhcmVMb2dGbiggJGxvZy5pbmZvICk7XG4gICAgJGxvZy53YXJuICA9IHByZXBhcmVMb2dGbiggJGxvZy53YXJuICk7XG4gICAgJGxvZy5kZWJ1ZyA9IHByZXBhcmVMb2dGbiggJGxvZy5kZWJ1ZyApO1xuICAgIC8vICRsb2cuZXJyb3IgPSBwcmVwYXJlTG9nRm4oICRsb2cuZXJyb3IgKTtcblxuICAgIC8vIEFkZCBzcGVjaWFsIG1ldGhvZCB0byBBbmd1bGFySlMgJGxvZ1xuICAgICRsb2cuZ2V0SW5zdGFuY2UgPSBnZXRJbnN0YW5jZTtcbiBcblxuICAgIHJldHVybiAkbG9nO1xufTsvL2VuY2hhbmNlTG9nZ2VyXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9ICBlbmNoYW5jZUxvZ2dlcjsiLCIvKipcbiAqIEBhdXRob3IgICAgICBUaG9tYXMgQnVybGVzb25cbiAqIEBkYXRlICAgICAgICBOb3ZlbWJlciwgMjAxM1xuICogQHNvdXJjZTogICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9UaG9tYXNCdXJsZXNvbi9hbmd1bGFyanMtbG9nRGVjb3JhdG9yL2Jsb2IvbWFzdGVyL3NyYy9taW5kc3BhY2UvdXRpbHMvc3VwcGxhbnQuanNcbiAgKi9cbiBcblxuICd1c2Ugc3RyaWN0JztcblxudmFyIHN1cHBsYW50ID0gIGZ1bmN0aW9uKCB0ZW1wbGF0ZSwgdmFsdWVzLCBwYXR0ZXJuICkge1xuICAgICAgICAgICAgcGF0dGVybiA9IHBhdHRlcm4gfHwgL1xceyhbXlxce1xcfV0qKVxcfS9nO1xuXG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZShwYXR0ZXJuLCBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSBiLnNwbGl0KCcuJyksXG4gICAgICAgICAgICAgICAgICAgIHIgPSB2YWx1ZXM7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzIGluIHApIHsgciA9IHJbcFtzXV07ICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgICAgICAgICAgciA9IGE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgciA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHIgPT09ICdudW1iZXInKSA/IHIgOiBhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cblxuLy8gc3VwcGxhbnQoKSBtZXRob2QgZnJvbSBDcm9ja2ZvcmRzIGBSZW1lZGlhbCBKYXZhc2NyaXB0YFxuRnVuY3Rpb24ucHJvdG90eXBlLm1ldGhvZCA9IGZ1bmN0aW9uIChuYW1lLCBmdW5jKSB7XG4gICAgdGhpcy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuU3RyaW5nLm1ldGhvZChcInN1cHBsYW50XCIsIGZ1bmN0aW9uKCB2YWx1ZXMsIHBhdHRlcm4gKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBzdXBwbGFudChzZWxmLCB2YWx1ZXMsIHBhdHRlcm4pO1xufSk7XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gIFN0cmluZy5zdXBwbGFudCA9IHN1cHBsYW50OyJdfQ==
