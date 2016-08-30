(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/bower_components/angular-animate/angular-animate.min.js":[function(require,module,exports){
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

},{}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/bower_components/ionic-advanced-carousel/src/advanced-carousel.js":[function(require,module,exports){
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

},{}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/bower_components/ng-knob/dist/ng-knob.min.js":[function(require,module,exports){
/*******************************************************
 * Name:          ng-knob
 * Description:   Angular.js Knob directive
 * Version:       0.1.3
 * Homepage:      https://radmie.github.io/ng-knob
 * Licence:       MIT
 *******************************************************/
"use strict";!function(){var ui={},Knob=function(element,value,options){this.element=element,this.value=value,this.options=options,this.inDrag=!1};Knob.prototype.valueToRadians=function(value,valueEnd,angleEnd,angleStart,valueStart){return valueEnd=valueEnd||100,valueStart=valueStart||0,angleEnd=angleEnd||360,angleStart=angleStart||0,Math.PI/180*((value-valueStart)*(angleEnd-angleStart)/(valueEnd-valueStart)+angleStart)},Knob.prototype.radiansToValue=function(radians,valueEnd,valueStart,angleEnd,angleStart){return valueEnd=valueEnd||100,valueStart=valueStart||0,angleEnd=angleEnd||360,angleStart=angleStart||0,(180/Math.PI*radians-angleStart)*(valueEnd-valueStart)/(angleEnd-angleStart)+valueStart},Knob.prototype.createArc=function(innerRadius,outerRadius,startAngle,endAngle,cornerRadius){var arc=d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius).startAngle(startAngle).endAngle(endAngle).cornerRadius(cornerRadius);return arc},Knob.prototype.drawArc=function(svg,arc,label,style,click,drag){var elem=svg.append("path").attr("id",label).attr("d",arc).style(style).attr("transform","translate("+this.options.size/2+", "+this.options.size/2+")");return this.options.readOnly===!1&&(click&&elem.on("click",click),drag&&elem.call(drag)),elem},Knob.prototype.createArcs=function(){var outerRadius=parseInt(this.options.size/2,10),startAngle=this.valueToRadians(this.options.startAngle,360),endAngle=this.valueToRadians(this.options.endAngle,360);this.options.scale.enabled&&(outerRadius-=this.options.scale.width+this.options.scale.spaceWidth);var diff,trackInnerRadius=outerRadius-this.options.trackWidth,changeInnerRadius=outerRadius-this.options.barWidth,valueInnerRadius=outerRadius-this.options.barWidth,interactInnerRadius=1,trackOuterRadius=outerRadius,changeOuterRadius=outerRadius,valueOuterRadius=outerRadius,interactOuterRadius=outerRadius;this.options.barWidth>this.options.trackWidth?(diff=(this.options.barWidth-this.options.trackWidth)/2,trackInnerRadius-=diff,trackOuterRadius-=diff):this.options.barWidth<this.options.trackWidth&&(diff=(this.options.trackWidth-this.options.barWidth)/2,changeOuterRadius-=diff,valueOuterRadius-=diff,changeInnerRadius-=diff,valueInnerRadius-=diff),this.options.bgColor&&(this.bgArc=this.createArc(0,outerRadius,startAngle,endAngle)),"tron"===this.options.skin.type&&(trackOuterRadius=trackOuterRadius-this.options.skin.width-this.options.skin.spaceWidth,changeOuterRadius=changeOuterRadius-this.options.skin.width-this.options.skin.spaceWidth,valueOuterRadius=valueOuterRadius-this.options.skin.width-this.options.skin.spaceWidth,interactOuterRadius=interactOuterRadius-this.options.skin.width-this.options.skin.spaceWidth,this.hoopArc=this.createArc(outerRadius-this.options.skin.width,outerRadius,startAngle,endAngle)),this.trackArc=this.createArc(trackInnerRadius,trackOuterRadius,startAngle,endAngle),this.changeArc=this.createArc(changeInnerRadius,changeOuterRadius,startAngle,startAngle,this.options.barCap),this.valueArc=this.createArc(valueInnerRadius,valueOuterRadius,startAngle,startAngle,this.options.barCap),this.interactArc=this.createArc(interactInnerRadius,interactOuterRadius,startAngle,endAngle)},Knob.prototype.drawArcs=function(clickInteraction,dragBehavior){var svg=d3.select(this.element).append("svg").attr("width",this.options.size).attr("height",this.options.size);if(this.options.bgColor&&this.drawArc(svg,this.bgArc,"bgArc",{fill:this.options.bgColor}),this.options.displayInput){var fontSize=.2*this.options.size+"px";"auto"!==this.options.fontSize&&(fontSize=this.options.fontSize+"px"),this.options.step<1&&(this.value=this.value.toFixed(1));var v=this.value;"function"==typeof this.options.inputFormatter&&(v=this.options.inputFormatter(v)),svg.append("text").attr("id","text").attr("text-anchor","middle").attr("font-size",fontSize).style("fill",this.options.textColor).text(v+this.options.unit||"").attr("transform","translate("+this.options.size/2+", "+(this.options.size/2+.06*this.options.size)+")"),this.options.subText.enabled&&(fontSize=.07*this.options.size+"px","auto"!==this.options.subText.font&&(fontSize=this.options.subText.font+"px"),svg.append("text").attr("class","sub-text").attr("text-anchor","middle").attr("font-size",fontSize).style("fill",this.options.subText.color).text(this.options.subText.text).attr("transform","translate("+this.options.size/2+", "+(this.options.size/2+.15*this.options.size)+")"))}if(this.options.scale.enabled){var radius,quantity,data,count=0,angle=0,startRadians=this.valueToRadians(this.options.min,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min),endRadians=this.valueToRadians(this.options.max,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min),diff=0;if(0===this.options.startAngle&&360===this.options.endAngle||(diff=1),"dots"===this.options.scale.type){var width=this.options.scale.width;radius=this.options.size/2-width,quantity=this.options.scale.quantity;var offset=radius+this.options.scale.width;data=d3.range(quantity).map(function(){return angle=count*(endRadians-startRadians)-Math.PI/2+startRadians,count+=1/(quantity-diff),{cx:offset+Math.cos(angle)*radius,cy:offset+Math.sin(angle)*radius,r:width}}),svg.selectAll("circle").data(data).enter().append("circle").attr({r:function(d){return d.r},cx:function(d){return d.cx},cy:function(d){return d.cy},fill:this.options.scale.color})}else if("lines"===this.options.scale.type){var height=this.options.scale.height;radius=this.options.size/2,quantity=this.options.scale.quantity,data=d3.range(quantity).map(function(){return angle=count*(endRadians-startRadians)-Math.PI/2+startRadians,count+=1/(quantity-diff),{x1:radius+Math.cos(angle)*radius,y1:radius+Math.sin(angle)*radius,x2:radius+Math.cos(angle)*(radius-height),y2:radius+Math.sin(angle)*(radius-height)}}),svg.selectAll("line").data(data).enter().append("line").attr({x1:function(d){return d.x1},y1:function(d){return d.y1},x2:function(d){return d.x2},y2:function(d){return d.y2},"stroke-width":this.options.scale.width,stroke:this.options.scale.color})}}"tron"===this.options.skin.type&&this.drawArc(svg,this.hoopArc,"hoopArc",{fill:this.options.skin.color}),this.drawArc(svg,this.trackArc,"trackArc",{fill:this.options.trackColor}),this.options.displayPrevious?this.changeElem=this.drawArc(svg,this.changeArc,"changeArc",{fill:this.options.prevBarColor}):this.changeElem=this.drawArc(svg,this.changeArc,"changeArc",{"fill-opacity":0}),this.valueElem=this.drawArc(svg,this.valueArc,"valueArc",{fill:this.options.barColor});var cursor="pointer";this.options.readOnly&&(cursor="default"),this.drawArc(svg,this.interactArc,"interactArc",{"fill-opacity":0,cursor:cursor},clickInteraction,dragBehavior)},Knob.prototype.draw=function(update){function dragInteraction(){that.inDrag=!0;var x=d3.event.x-that.options.size/2,y=d3.event.y-that.options.size/2;interaction(x,y,!1)}function clickInteraction(){that.inDrag=!1;var coords=d3.mouse(this.parentNode),x=coords[0]-that.options.size/2,y=coords[1]-that.options.size/2;interaction(x,y,!0)}function interaction(x,y,isFinal){var radians,delta,arc=Math.atan(y/x)/(Math.PI/180);if(x>=0&&0>=y||x>=0&&y>=0?delta=90:(delta=270,that.options.startAngle<0&&(delta=-90)),radians=(delta+arc)*(Math.PI/180),that.value=that.radiansToValue(radians,that.options.max,that.options.min,that.options.endAngle,that.options.startAngle),that.value>=that.options.min&&that.value<=that.options.max&&(that.value=Math.round(~~((that.value<0?-.5:.5)+that.value/that.options.step)*that.options.step*100)/100,that.options.step<1&&(that.value=that.value.toFixed(1)),update(that.value),that.valueArc.endAngle(that.valueToRadians(that.value,that.options.max,that.options.endAngle,that.options.startAngle,that.options.min)),that.valueElem.attr("d",that.valueArc),isFinal&&(that.changeArc.endAngle(that.valueToRadians(that.value,that.options.max,that.options.endAngle,that.options.startAngle,that.options.min)),that.changeElem.attr("d",that.changeArc)),that.options.displayInput)){var v=that.value;"function"==typeof that.options.inputFormatter&&(v=that.options.inputFormatter(v)),d3.select(that.element).select("#text").text(v+that.options.unit||"")}}d3.select(this.element).select("svg").remove();var that=this;that.createArcs();var dragBehavior=d3.behavior.drag().on("drag",dragInteraction).on("dragend",clickInteraction);that.drawArcs(clickInteraction,dragBehavior),that.options.animate.enabled?that.valueElem.transition().ease(that.options.animate.ease).duration(that.options.animate.duration).tween("",function(){var i=d3.interpolate(that.valueToRadians(that.options.startAngle,360),that.valueToRadians(that.value,that.options.max,that.options.endAngle,that.options.startAngle,that.options.min));return function(t){var val=i(t);that.valueElem.attr("d",that.valueArc.endAngle(val)),that.changeElem.attr("d",that.changeArc.endAngle(val))}}):(that.changeArc.endAngle(this.valueToRadians(this.value,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min)),that.changeElem.attr("d",that.changeArc),that.valueArc.endAngle(this.valueToRadians(this.value,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min)),that.valueElem.attr("d",that.valueArc))},Knob.prototype.setValue=function(newValue){if(!this.inDrag&&this.value>=this.options.min&&this.value<=this.options.max){var radians=this.valueToRadians(newValue,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min);if(this.value=Math.round(~~((0>newValue?-.5:.5)+newValue/this.options.step)*this.options.step*100)/100,this.options.step<1&&(this.value=this.value.toFixed(1)),this.changeArc.endAngle(radians),d3.select(this.element).select("#changeArc").attr("d",this.changeArc),this.valueArc.endAngle(radians),d3.select(this.element).select("#valueArc").attr("d",this.valueArc),this.options.displayInput){var v=this.value;"function"==typeof this.options.inputFormatter&&(v=this.options.inputFormatter(v)),d3.select(this.element).select("#text").text(v+this.options.unit||"")}}},ui.Knob=Knob,ui.knobDirective=function(){return{restrict:"E",scope:{value:"=",options:"="},link:function(scope,element){scope.value=scope.value||0;var defaultOptions={skin:{type:"simple",width:10,color:"rgba(255,0,0,.5)",spaceWidth:5},animate:{enabled:!0,duration:1e3,ease:"bounce"},size:200,startAngle:0,endAngle:360,unit:"",displayInput:!0,inputFormatter:function(v){return v},readOnly:!1,trackWidth:50,barWidth:50,trackColor:"rgba(0,0,0,0)",barColor:"rgba(255,0,0,.5)",prevBarColor:"rgba(0,0,0,0)",textColor:"#222",barCap:0,fontSize:"auto",subText:{enabled:!1,text:"",color:"gray",font:"auto"},bgColor:"",scale:{enabled:!1,type:"lines",color:"gray",width:4,quantity:20,height:10,spaceWidth:15},step:1,displayPrevious:!1,min:0,max:100,dynamicOptions:!1};scope.options=angular.merge(defaultOptions,scope.options);var knob=new ui.Knob(element[0],scope.value,scope.options);if(scope.$watch("value",function(newValue,oldValue){null===newValue&&"undefined"==typeof newValue||"undefined"==typeof oldValue||newValue===oldValue||knob.setValue(newValue)}),scope.options.dynamicOptions){var isFirstWatchOnOptions=!0;scope.$watch("options",function(){if(isFirstWatchOnOptions)isFirstWatchOnOptions=!1;else{var newOptions=angular.merge(defaultOptions,scope.options);knob=new ui.Knob(element[0],scope.value,newOptions),drawKnob()}},!0)}var drawKnob=function(){knob.draw(function(value){scope.$apply(function(){scope.value=value})})};drawKnob()}}},angular.module("ui.knob",[]).directive("uiKnob",ui.knobDirective)}();

},{}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/app-main.js":[function(require,module,exports){
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

},{"../bower_components/angular-animate/angular-animate.min":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/bower_components/angular-animate/angular-animate.min.js","../bower_components/ionic-advanced-carousel/src/advanced-carousel":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/bower_components/ionic-advanced-carousel/src/advanced-carousel.js","../bower_components/ng-knob/dist/ng-knob.min":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/bower_components/ng-knob/dist/ng-knob.min.js","./constants.development":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/constants.development.js","./controllers/_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js","./directives/_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/directives/_index.js","./models/_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/models/_index.js","./on_config":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/on_config.js","./on_run":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/on_run.js","./services/_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/constants.development.js":[function(require,module,exports){
'use strict';

var AppSettings = {
  yocalAPI:{
    base: 'http://yoendpoint4-wbbs.rhcloud.com/api/v1/yokal/data/'
    // base: 'http://localhost:8100/api/v1/yokal/data/'
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

},{}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/AppCtrl.js":[function(require,module,exports){
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

},{"./_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/BrowseCtrl.js":[function(require,module,exports){
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

},{"./_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/ConnectCtrl.js":[function(require,module,exports){
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

},{"./_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/LoginCtrl.js":[function(require,module,exports){
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

},{"./_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/MapCtrl.js":[function(require,module,exports){
'use strict';

MapCtrl.$inject = ["$rootScope", "$scope", "$timeout", "$log", "$ionicLoading", "AppSettings", "GMap", "LocationsService", "$ionicSlideBoxDelegate"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MapCtrl($rootScope, $scope, $timeout, $log, $ionicLoading, AppSettings, GMap, LocationsService, $ionicSlideBoxDelegate) {

    $log = $log.getInstance("MapCtrl", true);
    
 	  // ViewModel
  	var vm = this;
    /* =======================================================================
      VM defaults   
    ========================================================================== */
    var currentCenter = $rootScope.currentPosition.coords;

    

    /* Google Map ===================================================== */
    vm.gmap = new GMap({
                        zoom:   13, 
                        radius: vm.this_radius, 
                        styles: AppSettings.GMAP_DEFAULT.THEME.light
                      });    
    $rootScope.gmap = vm.gmap;
    
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



    
    /* Locaitons Collections and Meta ========================================= */
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
    

    /* UI Knobs ========================================= */
    // radius knob 
    vm.knob = { 
               options:{  dynamicOptions: true } 
              };
    // slider-metaNav distance knob
    vm.distance_knob ={
              options:{
                readOnly:       true,
                dynamicOptions: true,
                displayInput:   false,
                size:           30,
                min:            0,
                max:            80,//hour and a half
                step:           1,
                barColor:       '#5BC01E',
                trackColor:     '#212121',
                trackWidth:     3,
                barWidth:       6
              }
    };


    /* Lcoations card slider ========================================= */
    vm.slider ={
      shown:   false,
      meta:{
        category:     '',
        travelTime:   '',
        neighborhood: ''
      },
      activeSlide:{}
    };




    /* =======================================================================
      Public methods - availabe in templates 
    ========================================================================== */
    
    
    /**
     * Load locations of a specific category within a specified radisu of users current loacation
     * and then populate the vm and ui with returned data
     *  
     * @param { Object } category - category object of Loactions to load
     */
    vm.load_category = function(category) {

      $log.log('load_category: {name}',category);
      
      // reset locations, markers, and radius
      vm.gmap.map.setOptions({styles:null});
      vm.gmap.markers.map(_clearFromMap);
      vm.gmap.markers = [];
      vm.locations_by_distance =[];
      vm.this_radius = 5000;
      if (vm.locationsRadius) vm.locationsRadius.setVisible(false);

      // show ionic loader
      $ionicLoading.show({
        template: "Exploring Your Area ...",
        backdrop: true
      });


      // get all locations around specified area
      LocationsService
        .get({
              category: category.name,
              radius:   5000, 
              lat:      currentCenter.latitude, 
              lng:      currentCenter.longitude
            })
        .then(function(locations) {
          vm.locations_categories.distance = 0;
          // vm.locations_loaded = true;

          vm.locations_categories.current = category;

          // sort locations by distnace 
          vm.locations_by_distance = _.sortBy(locations, 'distancefromlocation');

          // set all markers on map
          _setMarkers(vm.locations_by_distance);  

          // set the locations radius and knob value to the closes loction to test
          vm.this_radius = _.first(vm.locations_by_distance).travelTime.value+200;
          vm.locationsRadius = vm.gmap.setRadiusCircle({radius: vm.this_radius});
          vm.gmap.map.fitBounds(vm.locationsRadius.getBounds());

          // get the current travel rate based on the time to to the furtherest Location
          vm.travelRate = vm.metersPerMin(_.last(vm.locations_by_distance).travelTime);
          vm.distance_knob.value = Math.ceil(vm.this_radius/vm.travelRate);
          
          // update Radius knob 
          _setKnobValue(vm.this_radius, _.first(vm.locations_by_distance).travelTime.value, _.last(vm.locations_by_distance).travelTime.value);
          vm.locations_loaded = true;
        
          // hide the loader once all is loaded
          $ionicLoading.hide();
          $ionicSlideBoxDelegate.update();
          
        });//end .then


    }////end vm.load_category



    /**
     * Get the rate of tranel to a location in meters/min format
     * 
     * @param { Object } travelTime  -  the travelTime object of the location
     * 
     * @returns { Number} meters/min based on location distance and travel time 
     */
    vm.metersPerMin  = function( travelTime) {
        // parse tiem for either a double digit minute format
        // or the first did
        var _time = travelTime.text.match(/([0-9][0-9])|(\d)/g);
        // if hours convert to mins
        if(_time.length == 2) var mins = +_time[1] + (+_time[0]*60);
        var _mins = mins || +_time[0];
        var _distance = travelTime.value; 
        
        return _distance/_mins;
    };


    vm.metersToMiles = function(meters) {
      return meters*0.000621371;
    }


    vm.showDiscoveryMap = function () {
       vm.gmap.height = 575;
            vm.gmap.locationFocused = false;
            vm.gmap.routes.map(_clearFromMap);
            if(vm.locations_by_distance.length) vm.gmap.map.setOptions({styles: null});

            // hides slider
            vm.slider.shown = false;
      
    }



  


  /* =======================================================================
      Private vm methods 
  ========================================================================== */
    
    /**
     * Update the Radius ui knob valuse
     * this tricks the knob into updating the value correctly
     * 
     * @param { Number } val  -  new knob vale
     * @param { Number } min  -  minimum knob value
     * @param { Number } max  -  maximum knob value
     */
    var _setKnobValue = function(val,min, max) {
      // set ui.knob options here
      
          vm.knob ={
              value:val,
              options:{
                displayInput: false,
                // subText: {
                //   enabled: true,
                //   text:    'meter radius',
                //   color:   'black',
                //   font:    'auto'
                // },
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
        // return vm.knob;
    };



    /**
     * Show Google map marker for Location
     *     
     * @param {Object} loaction - location object model
     */
    var _showMarkerFor = function(location) {
      // $log.log("_showMarkerFor:{name}", location);
      // var shownMarker = vm.gmap.markers[location._id];
      var shownMarker = _.where(vm.gmap.markers, {title: location.name})[0];
      shownMarker.setOpacity(1);
      shownMarker.setClickable(true);
    }//_showMarkerFor


    /**
     * Hide Google map marker for Location
     *     
     * @param {Object} loaction - location object model
     */
    var _hideMarkerFor = function(location) {
      // $log.log("_hideMarkerFor:{name}", location);
      var hiddenMarker = _.where(vm.gmap.markers, {title: location.name})[0];
      hiddenMarker.setOpacity(0);
      hiddenMarker.setClickable(false);
    }//_hideMarkerFor


    /**
     * Set Google Map markers for all Locations and attach 
     * a click listener to each 
     *  
     * @param { Array } locations  -  collection of Location Model Objects
     */
    var _setMarkers = function(locations) {
      locations.map(function(localle){


            var marker = vm.gmap.dropMarker({
                        center: {
                            lat: parseFloat(localle.lat),
                            lng: parseFloat(localle.long)},

                                                title:     localle.name,
                        map:       vm.gmap.map,
                        opacity:   0,
                        clickable: false
                      });

                  marker.addListener('click',function(){
                     $scope.$broadcast('marker:clicked', localle);
                  });

                vm.gmap.markers.push(marker);
    
          });

        // return vm.markers;
    };//_setMarkers


    /**
     * Remove marker from Google Map
     *  
     * @param { Object } marker  -  google map marker object
     */
    var _clearFromMap = function(marker) {
      $log.log('_clearFromMap::Marker:{title}', marker);
       marker.setMap(null);
    }//_clearFromMap


    /**
     * Plot route to Location on Google Map 
     *  
     * @param { Object } location  -  Location Model Object
     */
    var _showRouteTo = function(location) {
      $log.log('_showRouteTo;{name}', location);
      // clear all routes
      vm.gmap.routes.map(_clearFromMap);
      vm.locationsRadius.setVisible(false);
      vm.locations_by_distance.map(_hideMarkerFor);

      var marker = _showMarkerFor(location);

      var route = vm.gmap.plotRouteTo(location)
                         .then(function(route) {
                            vm.gmap.routes.push(route);   
                            //TODO: center route in screen
                            
                            // $timeout(function() { 
                            //   // if(vm.gmap.map.zoom < 13 )vm.gmap.map.setZoom(13);
                            //   var markerPos = vm.gmap.getPixelPosition(marker);
                            //   var posFromTop = (vm.gmap.height - markerPos.y);
                            //   var panY = posFromTop - (posFromTop*0.5);
                            //   vm.gmap.map.panBy(0, Math.abs(panY) );
                            // },450);
                            
                          });
    }// _showRouteTo
    
        

    /**
     * Make sure the map radius doesn't exceed the map viewport.
     * It does this by getting the rectangular coords of the radius 
     * and then zooms the map to fit them within the map bounds
     *  
     * @param { Object } location  -  Location Model 
     
     */
    var _fitInMapView = function(location) {
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
    
    }//_fitInMapView
    





  /* =======================================================================
      $scope events and watchers 
   ========================================================================== */
  
  /**
   * On Locations Slider Slide Change update to show route to new Location from slide
   */
    $scope.slideHasChanged = function(indx) {
        $log.log("ion-slide-box:slideHasChanged:"+indx);
        
        var slider_location = vm.locations_by_distance[indx];
        //set active slide
        vm.locations_by_distance.map(function(location) { location.isActive = false; return location;});
        slider_location.isActive = true;

        _showRouteTo(slider_location);
        _fitInMapView(slider_location);
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

    


    /**
     * Watch the Radius Knob value and udpate data on change
     */
    $scope.$watch("Map.knob.value", function(newValue, oldValue) {
            // $log.log("new Map.knob.value: "+newValue);
            // $log.log("old Map.knob.value: "+oldValue);
            
            if(vm.locationsRadius){
              vm.locationsRadius.setRadius(newValue);
              vm.locationsRadius.setVisible(true);  

              // update distance knob
              vm.distance_knob.value = Math.ceil(newValue/vm.travelRate);
              vm.distance_knob.options = vm.distance_knob.options;

            }
            
           vm.showDiscoveryMap();
            

            if(vm.locationsRadius) _fitInMapView();

            // show/reveal locations inside radius
            vm.locations_by_distance.map(function(locate){
                  if( locate.distancefromlocation < newValue ){
                    _showMarkerFor(locate);
                  }else {
                    _hideMarkerFor(locate);
                  }
            });//vm.locations_by_distance.map


        });///$scope.$watch "Map.knob.value"



      /**
       * Listen for a Google Map loaction marker to be clicked
       * and then display the Locations Slider 
       */
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

          _showRouteTo(marker);
          _fitInMapView();

      });
    });// $scope.$on "marker:clicked"
      


};//// MapCtrl



controllersModule.controller('MapCtrl', MapCtrl);

},{"./_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js":[function(require,module,exports){
'use strict';



module.exports = angular.module('app.controllers', []);

({"AppCtrl":require("./AppCtrl.js"),"BrowseCtrl":require("./BrowseCtrl.js"),"ConnectCtrl":require("./ConnectCtrl.js"),"LoginCtrl":require("./LoginCtrl.js"),"MapCtrl":require("./MapCtrl.js")});

},{"./AppCtrl.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/AppCtrl.js","./BrowseCtrl.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/BrowseCtrl.js","./ConnectCtrl.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/ConnectCtrl.js","./LoginCtrl.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/LoginCtrl.js","./MapCtrl.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/MapCtrl.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/directives/_index.js":[function(require,module,exports){
'use strict';



module.exports = angular.module('app.directives', []);

({"mAppLoadingDirective":require("./mAppLoadingDirective.js")});

},{"./mAppLoadingDirective.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/directives/mAppLoadingDirective.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/directives/mAppLoadingDirective.js":[function(require,module,exports){
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

},{"./_index.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/directives/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/models/GMap.js":[function(require,module,exports){
'use strict';

var modelsModule = require('./_index.js');

/**
 * @ngInject
*/

modelsModule.factory('GMap', ["$log", "$rootScope", "$q", "LocationsService", "AppSettings", function($log, $rootScope, $q, LocationsService, AppSettings){
  $log = $log.getInstance('GMap', false);

  var currentCenter = $rootScope.currentPosition.coords;



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
    },

    placesService: function() {
      var _service = new google.maps.places.PlacesService(this.map);
      return _service;

    }

  };
    


  return GMap;

  
}]);

},{"./_index.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/models/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/models/LocationModel.js":[function(require,module,exports){
'use strict';

var modelsModule = require('./_index.js');

/**
 * @ngInject
 */
modelsModule.factory('Location', ["$rootScope", "$log", "$q", function($rootScope, $log, $q) {
  $log = $log.getInstance('Location', true);

  function Location(LocationData){
    angular.extend(this, LocationData);
    $log.log('{name}', this);
  }


  Location.responseTransformer = function (responseData) {
    $log.log('resoponseTransformer for {length} items', responseData.locations);
    
    if(responseData.locations){
      
      var populated_locations = [];

      responseData.locations
              .map(function(data){
                var location = new Location(data);
                location.setGooglePlaceID().then(function(place) {
                  location.setGooglePlaceDetails();
                });

                

                populated_locations.push(location.setTravelTime());
                
              });

        return populated_locations;
    }



      return responseData.map(Location.build);  

    
  }


  Location.prototype.setTravelTime = function() {
      $log.log('setTravelTime:{name}', this);
      
      var _location = this;
      var deferred = $q.defer();

      var service = new google.maps.DistanceMatrixService;
       service.getDistanceMatrix({
         origins:       [{lat: $rootScope.currentPosition.coords.latitude, lng:$rootScope.currentPosition.coords.longitude}],
         destinations:  [{lat: parseFloat(this.lat), lng: parseFloat(this.long)}],
         travelMode:    google.maps.TravelMode.WALKING,
         unitSystem:    google.maps.UnitSystem.IMPERIAL,
         avoidHighways: true,
         avoidTolls:    true
       }, function(response, status) {
         	_location.travelTime = response.rows[0].elements[0].duration;
          _location.distance = response.rows[0].elements[0].distance;
         	deferred.resolve(_location);
         // $log.debug("{name} - {travelTime}", _location);
          
       });

       
       return deferred.promise;

  }


  Location.prototype.setGooglePlaceID = function() {

    $log.log('setGooglePlaceID:{name}', this);

      var _location = this,
          deferred = $q.defer(),
          PlacesService = new google.maps.places.PlacesService($rootScope.gmap.map),
          _searchQuery = {query:_location.name, 
                          location: new google.maps.LatLng(parseFloat(_location.lat), parseFloat(_location.long)),
                          radius:500};


          PlacesService.textSearch(_searchQuery, 
                    function (results, status) {
                        if (status == google.maps.places.PlacesServiceStatus.OK) {
                            //TODO: make sure this is the correct result
                            _location.googlePlaceId = results[0].place_id;
                            deferred.resolve(_location);
                        }
          });


      return deferred.promise;
    
  };


  Location.prototype.setGooglePlaceDetails = function() {
    $log.log('setGooglePlaceDetails:{name}', this);
    var _location = this,
         deferred = $q.defer(),
         PlacesService = new google.maps.places.PlacesService($rootScope.gmap.map);
         
        PlacesService.getDetails( {placeId:_location.googlePlaceId}, 
                    function(place, status) {
                      console.log(status);
                        if (status == google.maps.places.PlacesServiceStatus.OK) {
                          console.log(place);
                          angular.extend(_location, place);
                          deferred.resolve(_location);
                        }
                 });

        return deferred.promise;
  };


  Location.build = function(lData) {
    $log.log('build:{name}', lData);
    
    return new Location(lData);
  }

   

  
 
  return Location;


}]);

},{"./_index.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/models/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/models/_index.js":[function(require,module,exports){
'use strict';



module.exports = angular.module('app.models', []);

({"GMap":require("./GMap.js"),"LocationModel":require("./LocationModel.js")});

},{"./GMap.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/models/GMap.js","./LocationModel.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/models/LocationModel.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/on_config.js":[function(require,module,exports){
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

},{"./utils/logging/LogDecorator.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/utils/logging/LogDecorator.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/on_run.js":[function(require,module,exports){
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

},{}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/CurrentCoordsService.js":[function(require,module,exports){
'use strict';

CurrentCoords.$inject = ["$q", "$http", "$log", "AppSettings"];
var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function CurrentCoords($q, $http, $log,  AppSettings) {
  $log = $log.getInstance("CurrentCoordsService");
  var geocoder = new google.maps.Geocoder();
  var service = {};

  service.get = function() {

    var deferred = $q.defer();    
    // get latitiude and longitude 
    navigator.geolocation.getCurrentPosition(function(pos) {
      $log.debug('lat: {coords.latitude}',pos);
      $log.debug('long: {coords.longitude}',pos);
      

       // get city name from google api geocoder
      var latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      var _city;

      geocoder.geocode({'latLng': latlng}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK && results[1]) {
            // TODO: cleanup underscors parsing
               _city = _.compact(
                          _.map(results[1].address_components, function(comp){
                            if(_.contains(comp.types,'locality')) return comp;
                          } )
               );
          }
        pos.city = _city[0].long_name;

        deferred.resolve(pos);  
      });/// end geocode

   }, function(error) {
       $log.warn('Unable to get location: ' + error);
       deferred.reject(error, status);
   });
    
  
    
    return deferred.promise;
  };

  return service;

}

servicesModule.service('CurrentCoords', CurrentCoords);

},{"./_index.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/LocationsService.js":[function(require,module,exports){
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
                  // been populated with data from async services
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

},{"./_index.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/Yocal.js":[function(require,module,exports){
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
   $http.get(AppSettings.yocalAPI.base+'listByDistanceCat/'+getData.category+'/'+getData.radius+'/'+getData.lat+'/'+getData.lng)
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

},{"./_index.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/_index.js":[function(require,module,exports){
'use strict';



module.exports = angular.module('app.services', []);

({"CurrentCoordsService":require("./CurrentCoordsService.js"),"LocationsService":require("./LocationsService.js"),"Yocal":require("./Yocal.js"),"example":require("./example.js")});

},{"./CurrentCoordsService.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/CurrentCoordsService.js","./LocationsService.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/LocationsService.js","./Yocal.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/Yocal.js","./example.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/example.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/example.js":[function(require,module,exports){
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

},{"./_index.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/utils/DateTime.js":[function(require,module,exports){
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

},{}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/utils/logging/LogDecorator.js":[function(require,module,exports){
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

},{"./LogEnhancer.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/utils/logging/LogEnhancer.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/utils/logging/LogEnhancer.js":[function(require,module,exports){
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
    var prepareLogFn = function( logFn, className, logging ){
      
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

        if(logging)logFn.call( null,  supplant.apply( null, args ) );
      };

      // Special... only needed to support angular-mocks expectations
      enhancedLogFn.logs = [ ];
      
    
        return  enhancedLogFn; 
      
      
    };




    /**
     * Support to generate class-specific logger instance with classname only
     *
     * @param: name
     * @returns: Object wrapper facade to $log
     */
    var getInstance = function( className, logging){
      className = ( className !== undefined ) ? className + "::" : "";

          return{
           log   : prepareLogFn( _$log.log,   className, logging ),
           info  : prepareLogFn( _$log.info,  className, logging ),
           warn  : prepareLogFn( _$log.warn,  className, logging ),
           debug : prepareLogFn( _$log.debug, className, logging ),
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

},{"../DateTime.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/utils/DateTime.js","../supplant.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/utils/supplant.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/utils/supplant.js":[function(require,module,exports){
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

},{}]},{},["/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/app-main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItYW5pbWF0ZS9hbmd1bGFyLWFuaW1hdGUubWluLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvYm93ZXJfY29tcG9uZW50cy9pb25pYy1hZHZhbmNlZC1jYXJvdXNlbC9zcmMvYWR2YW5jZWQtY2Fyb3VzZWwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9ib3dlcl9jb21wb25lbnRzL25nLWtub2IvZGlzdC9uZy1rbm9iLm1pbi5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2FwcC1tYWluLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29uc3RhbnRzLmRldmVsb3BtZW50LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvQXBwQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL0Jyb3dzZUN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9Db25uZWN0Q3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL0xvZ2luQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL01hcEN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9faW5kZXguanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9kaXJlY3RpdmVzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2RpcmVjdGl2ZXMvbUFwcExvYWRpbmdEaXJlY3RpdmUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9tb2RlbHMvR01hcC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL21vZGVscy9Mb2NhdGlvbk1vZGVsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvbW9kZWxzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL29uX2NvbmZpZy5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL29uX3J1bi5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3NlcnZpY2VzL0N1cnJlbnRDb29yZHNTZXJ2aWNlLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvTG9jYXRpb25zU2VydmljZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3NlcnZpY2VzL1lvY2FsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvX2luZGV4LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvZXhhbXBsZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL0RhdGVUaW1lLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvdXRpbHMvbG9nZ2luZy9Mb2dEZWNvcmF0b3IuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9sb2dnaW5nL0xvZ0VuaGFuY2VyLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvdXRpbHMvc3VwcGxhbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7QUFLQSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxhQUFhLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sU0FBUyxPQUFPLEdBQUcsSUFBSSxHQUFHLFlBQVksT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLE1BQU0sT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxPQUFPLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsT0FBTyxFQUFFLFFBQVEsS0FBSyxFQUFFLE1BQU07QUFDeGdCLEtBQUssRUFBRSxHQUFHLElBQUksRUFBRSxHQUFHLFNBQVMsT0FBTyxFQUFFLE1BQU0sUUFBUSxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFFLFNBQVMsT0FBTyxFQUFFLEdBQUcsU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLFNBQVMsT0FBTyxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxLQUFLLFNBQVMsR0FBRyxFQUFFLENBQUMsT0FBTyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxHQUFHLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLE1BQU0sRUFBRSxjQUFjLEdBQUcsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLFlBQVksT0FBTyxTQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtBQUNsZixFQUFFLEVBQUUsYUFBYSxVQUFVLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLE1BQU0sU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxJQUFJLEtBQUssRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsYUFBYSxJQUFJLEtBQUssRUFBRSxhQUFhLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxTQUFTLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxLQUFLLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEtBQUssT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNO0FBQzFmLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSyxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxZQUFZLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxHQUFHLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsY0FBYyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsR0FBRyxTQUFTLEVBQUUsSUFBSSxLQUFLLEVBQUUsSUFBSSxLQUFLLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLE9BQU8sYUFBYSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sT0FBTyxNQUFNLEVBQUUsRUFBRSxpQkFBaUIsSUFBSSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTztBQUNyZixHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sV0FBVyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLE9BQU8sSUFBSSxFQUFFLFdBQVcsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLElBQUksRUFBRSxHQUFHLElBQUksT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLENBQUMsT0FBTyxJQUFJLEdBQUcsTUFBTSxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsV0FBVyxHQUFHLGNBQWMsTUFBTSxDQUFDLEVBQUUsR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxZQUFZLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsRUFBRSxHQUFHLFNBQVMsR0FBRztBQUN4ZixFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sT0FBTyxNQUFNLE1BQU0sQ0FBQyxNQUFNLFVBQVUsQ0FBQyxFQUFFLE9BQU8sT0FBTyxPQUFPLE1BQU0sU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxJQUFJLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEtBQUssSUFBSSxFQUFFLEVBQUUsS0FBSyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsU0FBUyxHQUFHLEVBQUUsU0FBUyxHQUFHLEVBQUUsWUFBWSxHQUFHLEVBQUUsVUFBVSxHQUFHLEVBQUUsV0FBVyxHQUFHLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEdBQUcsRUFBRSx3QkFBd0IsR0FBRyxFQUFFLG1CQUFtQixHQUFHO0NBQzNlLEVBQUUsYUFBYSxHQUFHLGlCQUFpQixFQUFFLGlCQUFpQixHQUFHLEVBQUUsdUJBQXVCLEdBQUcsRUFBRSxrQkFBa0IsR0FBRyxvQ0FBb0MsRUFBRSxZQUFZLEdBQUcsZ0JBQWdCLElBQUksR0FBRyxFQUFFLFFBQVEsR0FBRyxFQUFFLFdBQVcsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLFdBQVcsSUFBSSxHQUFHLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLEdBQUcsbUJBQW1CLEVBQUUsV0FBVyxrQkFBa0IsR0FBRyxlQUFlLEdBQUcsd0JBQXdCLEVBQUUsa0JBQWtCLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxnQkFBZ0IsR0FBRyxrQkFBa0IsR0FBRyxlQUFlLElBQUksRUFBRSxPQUFPO0FBQy9lLElBQUksVUFBVSxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsSUFBSSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssc0JBQXNCLENBQUMsR0FBRyxFQUFFLFNBQVMsb0JBQW9CLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxzQkFBc0IsT0FBTyxHQUFHLFNBQVMsU0FBUyxRQUFRLGFBQWEsQ0FBQyxRQUFRLFNBQVMsRUFBRSxDQUFDLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksT0FBTyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLFFBQVEsaUJBQWlCLENBQUMsUUFBUSxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxHQUFHLE9BQU8sSUFBSSxJQUFJLFNBQVMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsR0FBRztBQUNwZixFQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsR0FBRyxPQUFPLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxlQUFlLFNBQVMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUUsS0FBSyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsa0JBQWtCLENBQUMsS0FBSyxhQUFhLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxLQUFLLFFBQVEsR0FBRyxLQUFLLGVBQWUsR0FBRyxLQUFLLHFCQUFxQixJQUFJLEtBQUssT0FBTyxFQUFFLEVBQUUsTUFBTSxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksT0FBTyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtBQUNuZixFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssTUFBTSxFQUFFLFVBQVUsQ0FBQyxRQUFRLFNBQVMsRUFBRSxDQUFDLEtBQUssS0FBSyxHQUFHLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLEtBQUssZUFBZSxLQUFLLElBQUksU0FBUyxFQUFFLFdBQVcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxLQUFLLFFBQVEsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLFFBQVEsT0FBTyxLQUFLLFNBQVMsS0FBSyxTQUFTLEVBQUUsRUFBRSxDQUFDLE9BQU8sS0FBSyxhQUFhLEtBQUssRUFBRSxJQUFJLFFBQVEsU0FBUyxFQUFFLENBQUMsT0FBTyxLQUFLLGFBQWEsU0FBUyxJQUFJLFVBQVUsU0FBUyxFQUFFLENBQUMsT0FBTyxLQUFLLGFBQWEsV0FBVyxJQUFJLE1BQU0sVUFBVSxDQUFDLEtBQUssS0FBSztBQUM3Z0IsS0FBSyxLQUFLLFNBQVMsT0FBTyxVQUFVLENBQUMsS0FBSyxLQUFLLFFBQVEsS0FBSyxLQUFLLFVBQVUsSUFBSSxVQUFVLENBQUMsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxTQUFTLENBQUMsSUFBSSxPQUFPLFVBQVUsQ0FBQyxLQUFLLEtBQUssUUFBUSxLQUFLLEtBQUssU0FBUyxLQUFLLFNBQVMsQ0FBQyxJQUFJLFNBQVMsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxxQkFBcUIsVUFBVSxDQUFDLEVBQUUsU0FBUyxPQUFPLFNBQVMsU0FBUyxFQUFFLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRSxLQUFLLGVBQWUsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLEtBQUssZUFBZSxPQUFPLEVBQUUsS0FBSyxPQUFPLEtBQUssT0FBTyxLQUFLLFNBQVMsaUJBQWlCLENBQUM7QUFDemUsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFVBQVUsSUFBSSxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsYUFBYSxJQUFJLE9BQU8sT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUcsS0FBSyxJQUFJLEVBQUUsS0FBSyxLQUFLLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxZQUFZLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxLQUFLLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxZQUFZLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEtBQUssU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sU0FBUyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxLQUFLLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLEVBQUUsYUFBYSxFQUFFLE9BQU8sS0FBSyxTQUFTO0FBQ2xnQixFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxPQUFPLEtBQUssU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxLQUFLLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsUUFBUSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxXQUFXLEtBQUssS0FBSyxDQUFDLFFBQVEsYUFBYSxlQUFlLFlBQVksWUFBWSxjQUFjLGtCQUFrQixtQkFBbUIsV0FBVyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxTQUFTLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDbmYsT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsR0FBRyxTQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLFNBQVMsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLElBQUksRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxTQUFTLEtBQUssTUFBTSxFQUFFLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxZQUFZLEtBQUssTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEtBQUssTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsYUFBYSxLQUFLO0FBQ3hmLEdBQUcsQ0FBQyxFQUFFLEdBQUcsT0FBTyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLE9BQU8sU0FBUyxRQUFRLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsRUFBRSxPQUFPLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxNQUFNLE9BQU8sSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsR0FBRyxPQUFPLEVBQUUsT0FBTyxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sTUFBTSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxjQUFjLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsU0FBUyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUU7QUFDcGYsRUFBRSxRQUFRLEVBQUUsU0FBUyxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsT0FBTyxLQUFLLEVBQUUsUUFBUSxJQUFJLElBQUksUUFBUSxFQUFFLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxPQUFPLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxF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QUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxPQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxhQUFhLGtCQUFrQixFQUFFLEdBQUcsRUFBRSxJQUFJLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxLQUFLLEtBQUssSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsWUFBWSxXQUFXLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsWUFBWSxVQUFVLENBQUMsRUFBRSxjQUFjLEVBQUUsZUFBZSxNQUFNLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRTtBQUN0ZixLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsSUFBSSxFQUFFLFFBQVEsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFLEtBQUssR0FBRyxFQUFFLEtBQUssSUFBSSxFQUFFLEdBQUcsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLEtBQUssRUFBRSxFQUFFLE1BQU0sS0FBSyxJQUFJLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksR0FBRyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLE9BQU8sT0FBTyxFQUFFLEtBQUssS0FBSyxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxPQUFPO0FBQ3JmLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLFNBQVMsUUFBUSxHQUFHLEVBQUUsRUFBRSxHQUFHLFNBQVMsUUFBUSxJQUFJLEVBQUUsRUFBRSxTQUFTLFFBQVEsR0FBRyxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLFdBQVcsSUFBSSxFQUFFLFdBQVcscUJBQXFCLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsZUFBZSxHQUFHLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxZQUFZLGNBQWMsRUFBRSxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsT0FBTyxTQUFTLFFBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssT0FBTyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsT0FBTyxPQUFPLElBQUksRUFBRSxFQUFFLEtBQUs7QUFDN2UsR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssU0FBUyxHQUFHLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxFQUFFLFlBQVksSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFLFlBQVksTUFBTSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsWUFBWSxVQUFVLENBQUMsRUFBRSxTQUFTLGNBQWMsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLE1BQU0sSUFBSSxFQUFFLEdBQUcsV0FBVyxJQUFJLEdBQUcsRUFBRSxFQUFFLE9BQU8sT0FBTyxFQUFFLEVBQUUsYUFBYSxVQUFVLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEdBQUcsU0FBUyxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxjQUFjLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUU7QUFDcGYsRUFBRSxLQUFLLFNBQVMsRUFBRSxHQUFHLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLElBQUksSUFBSSxFQUFFLFdBQVcsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLEdBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxTQUFTLEVBQUUsUUFBUSxJQUFJLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVB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QUUsT0FBTyxNQUFNLFNBQVMsRUFBRTtBQUMxZixFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFFBQVEsSUFBSSxFQUFFLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFNBQVMsS0FBSyxPQUFPLElBQUksU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxTQUFTLEdBQUcsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTTtBQUNqZixFQUFFLEVBQUUsRUFBRSxHQUFHLE9BQU8sRUFBRSxjQUFjLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxZQUFZLENBQUMsRUFBRSxZQUFZLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLEtBQUssRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxHQUFHLE9BQU8sU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxTQUFTLGNBQWMsQ0FBQyxtQkFBbUIsU0FBUyxFQUFFLENBQUMsS0FBSyxLQUFLLENBQUMsWUFBWSxrQkFBa0IsYUFBYSxXQUFXLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLE1BQU0sS0FBSyxJQUFJLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLHVCQUF1QixHQUFHLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDdGYsQ0FBQyxHQUFHLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLE9BQU8sU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxlQUFlLEVBQUUsRUFBRSxHQUFHLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsR0FBRyxNQUFNLEtBQUssV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxNQUFNLEtBQUssV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxLQUFLLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLE1BQU0sUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLFNBQVMsYUFBYSxFQUFFLEVBQUUsS0FBSyxRQUFRLEdBQUcsR0FBRyxHQUFHLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxLQUFLLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDO0NBQ2pmLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssT0FBTyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxPQUFPLE1BQU0sT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLG1CQUFtQixHQUFHLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLHFCQUFxQixFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxtQkFBbUIsYUFBYSxJQUFJLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsYUFBYSxJQUFJLEVBQUUsRUFBRSxPQUFPLElBQUksSUFBSSxFQUFFLEVBQUUsT0FBTyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sT0FBTyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzllLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLE9BQU8sU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsVUFBVSxJQUFJLFVBQVUsUUFBUSxHQUFHLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsRUFBRSxLQUFLLFVBQVUsR0FBRyxFQUFFLFdBQVcsR0FBRyxJQUFJLEVBQUUsVUFBVSxFQUFFLGNBQWMsR0FBRyxJQUFJLEVBQUUsY0FBYyxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsR0FBRyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE9BQU8sR0FBRyxjQUFjLEVBQUUsT0FBTyxHQUFHLEVBQUUsR0FBRyxVQUFVLEdBQUcsU0FBUyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztBQUMxZ0IsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxHQUFHLEVBQUUsS0FBSyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsRUFBRSxLQUFLLEtBQUssT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPLFVBQVUsU0FBUyxvQkFBb0IsQ0FBQyxzQkFBc0IsU0FBUyxFQUFFLENBQUMsRUFBRSxRQUFRLEtBQUsscUJBQXFCLEtBQUssS0FBSyxDQUFDLGNBQWMsa0JBQWtCLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtBQUM3ZSxPQUFPLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEdBQUcsR0FBRyxFQUFFLE1BQU0sQ0FBQyxNQUFNLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxTQUFTLElBQUksRUFBRSxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxTQUFTLEtBQUssSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxPQUFPLE1BQU0sT0FBTyxTQUFTLE9BQU8sRUFBRSxXQUFXLE9BQU8sT0FBTzs7QUFFblU7QUNwREEsQ0FBQyxZQUFZO0lBQ1Q7O0lBRUE7U0FDSyxPQUFPLGFBQWE7U0FDcEIsVUFBVSxhQUFhOztJQUU1QixpQkFBaUIsVUFBVSxDQUFDLFlBQVksWUFBWTtJQUNwRCxTQUFTLGlCQUFpQixVQUFVLFVBQVUsc0JBQXNCOztRQUVoRSxPQUFPO1lBQ0gsa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLGtCQUFrQjtnQkFDZCxpQkFBaUI7Z0JBQ2pCLGlCQUFpQjtnQkFDakIsaUJBQWlCO2dCQUNqQixpQkFBaUI7Ozs7OztRQU16QixTQUFTLFNBQVMsT0FBTyxJQUFJLE1BQU0sTUFBTTs7O1lBR3JDLEtBQUssS0FBSzs7WUFFVixLQUFLLFFBQVEsYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLEtBQUssVUFBVTtZQUMvRSxLQUFLLFFBQVEsYUFBYSxLQUFLLFFBQVEsWUFBWSxXQUFXLFdBQVcsVUFBVSxLQUFLLFFBQVE7O1lBRWhHLElBQUksWUFBWSxLQUFLLFFBQVEsWUFBWSxlQUFlOzs7O1lBSXhELElBQUksT0FBTzs7WUFFWCxJQUFJLEtBQUssUUFBUSxZQUFZLFFBQVE7Z0JBQ2pDLFFBQVE7Z0JBQ1IsUUFBUTtvQkFDSjtvQkFDQTtvQkFDQTtvQkFDQTtvQkFDQTs7O1lBR1IsUUFBUTs7WUFFUixJQUFJLEtBQUssUUFBUSxZQUFZLFFBQVE7Z0JBQ2pDLFFBQVE7OztZQUdaLFFBQVEsMENBQTBDLEtBQUssUUFBUSxhQUFhO2dCQUN4RTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQSxLQUFLLFFBQVEsYUFBYTtnQkFDMUIseUJBQXlCLFlBQVk7Z0JBQ3JDO2dCQUNBO2dCQUNBO2dCQUNBOzs7WUFHSixPQUFPLFNBQVMsTUFBTTtZQUN0QixHQUFHLE9BQU87Ozs7O1lBS1YsU0FBUyxZQUFZO2dCQUNqQixJQUFJLEtBQUssaUJBQWlCLEtBQUssY0FBYyxTQUFTLEdBQUc7b0JBQ3JELEtBQUs7O2dCQUVUO2VBQ0Q7O1lBRUgsU0FBUyxzQkFBc0I7Z0JBQzNCLElBQUksV0FBVyxLQUFLLFFBQVEsYUFBYSxPQUFPLGVBQWUsS0FBSyxRQUFRLFdBQVcsTUFBTTtnQkFDN0YsS0FBSyxnQkFBZ0IsT0FBTyxLQUFLLGtCQUFrQixjQUFjLDBCQUEwQixLQUFLO2dCQUNoRyxJQUFJLFlBQVksTUFBTSxLQUFLLGdCQUFnQixzQkFBc0I7b0JBQzdEO2dCQUNKLGFBQWEsUUFBUSxLQUFLLGdCQUFnQjs7Z0JBRTFDLE9BQU87Ozs7OztZQU1YLFNBQVMsc0JBQXNCO2dCQUMzQixJQUFJLFlBQVkscUJBQXFCLGFBQWEsS0FBSyxRQUFRLFlBQVk7Z0JBQzNFLElBQUksWUFBWSxHQUFHOztnQkFFbkIsSUFBSSxxQkFBcUIsR0FBRztnQkFDNUIsSUFBSSxxQkFBcUIsR0FBRzs7Z0JBRTVCLFVBQVUsb0JBQW9CLGNBQWMsR0FBRztnQkFDL0MsU0FBUyxvQkFBb0IsYUFBYSxHQUFHOztnQkFFN0MsR0FBRyxhQUFhLFVBQVUsR0FBRztvQkFDekIsRUFBRSxpQkFBaUIsWUFBWTs7b0JBRS9CLG1CQUFtQixNQUFNLElBQUksQ0FBQzs7O2dCQUdsQyxHQUFHLFlBQVksVUFBVSxHQUFHO29CQUN4QixFQUFFLGlCQUFpQixZQUFZOztvQkFFL0Isa0JBQWtCLE1BQU0sSUFBSSxDQUFDOzs7Z0JBR2pDLFVBQVUsaUJBQWlCLGNBQWMsR0FBRyxZQUFZO2dCQUN4RCxTQUFTLGlCQUFpQixhQUFhLEdBQUcsV0FBVzs7Ozs7SUFLakUsV0FBVyxVQUFVLENBQUMsVUFBVSxZQUFZLFlBQVksV0FBVztJQUNuRSxTQUFTLFdBQVcsUUFBUSxVQUFVLFVBQVUsU0FBUyxzQkFBc0I7UUFDM0UsSUFBSSxLQUFLOztRQUVULEdBQUcsVUFBVTtZQUNULGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtnQkFDWixVQUFVO2dCQUNWLFVBQVU7Z0JBQ1YsVUFBVSxDQUFDOztZQUVmLGdCQUFnQjtnQkFDWixVQUFVO2dCQUNWLFVBQVUsUUFBUTtnQkFDbEIsUUFBUTs7WUFFWixnQkFBZ0I7Ozs7UUFJcEIsR0FBRyxlQUFlO1FBQ2xCLEdBQUcsZUFBZTtRQUNsQixHQUFHLGVBQWU7O1FBRWxCLFFBQVEsSUFBSTs7UUFFWjs7OztRQUlBLFNBQVMsV0FBVztZQUNoQixRQUFRLE9BQU8sR0FBRyxTQUFTLEdBQUc7O1lBRTlCLE9BQU8sSUFBSSwyQkFBMkI7WUFDdEMsT0FBTyxJQUFJLDhCQUE4Qjs7WUFFekMsSUFBSSxHQUFHLFFBQVEsWUFBWSxRQUFRO2dCQUMvQixPQUFPLElBQUksK0JBQStCOzs7Ozs7Ozs7WUFTOUMsU0FBUyx1QkFBdUIsR0FBRyxPQUFPO2dCQUN0QyxRQUFRLElBQUk7Z0JBQ1osUUFBUSxJQUFJO2dCQUNaLElBQUk7Z0JBQ0osSUFBSSxPQUFPLFVBQVUsVUFBVTtvQkFDM0IsYUFBYSxNQUFNO29CQUNuQixRQUFRLE9BQU8sR0FBRyxTQUFTO3VCQUN4QjtvQkFDSCxhQUFhOzs7Z0JBR2pCLElBQUksZUFBZSxHQUFHLFFBQVEsWUFBWTtvQkFDdEMsU0FBUyxHQUFHLGNBQWM7Ozs7Ozs7OztZQVNsQyxTQUFTLHNCQUFzQixHQUFHLE9BQU87Z0JBQ3JDLElBQUksYUFBYSxNQUFNO2dCQUN2QixJQUFJLGFBQWEsTUFBTTs7Z0JBRXZCLElBQUksR0FBRyxRQUFRLFdBQVcsUUFBUSxlQUFlLEtBQUssR0FBRyxRQUFRLGVBQWUsUUFBUTtvQkFDcEYsR0FBRyxhQUFhOzs7OztRQUs1QixTQUFTLGVBQWU7WUFDcEIsSUFBSSxnQkFBZ0IsU0FBUyxLQUFLO1lBQ2xDLElBQUksZ0JBQWdCLGNBQWM7WUFDbEMsSUFBSSxnQkFBZ0IsUUFBUSxRQUFRLGVBQWU7WUFDbkQsSUFBSSxnQkFBZ0I7O1lBRXBCLElBQUksY0FBYztZQUNsQixJQUFJLGNBQWM7O1lBRWxCLElBQUkscUJBQXFCO1lBQ3pCLElBQUkscUJBQXFCO1lBQ3pCLElBQUksMEJBQTBCOztZQUU5QixHQUFHLGFBQWE7O1lBRWhCLElBQUksV0FBVyxHQUFHO2dCQUNkLFNBQVMsWUFBWTtvQkFDakI7bUJBQ0Q7bUJBQ0E7Z0JBQ0gsTUFBTSxNQUFNLG1EQUFtRCxHQUFHOzs7WUFHdEUsU0FBUyxXQUFXOztnQkFFaEIsSUFBSSxJQUFJLFNBQVMsY0FBYyxhQUFhLEdBQUc7Z0JBQy9DLElBQUksSUFBSSxTQUFTLGNBQWMsYUFBYSxHQUFHOztnQkFFL0MsSUFBSSxJQUFJLEtBQUssSUFBSSxHQUFHO29CQUNoQjt1QkFDRztvQkFDSCxRQUFRLElBQUk7O29CQUVaLElBQUkscUJBQXFCLGVBQWU7d0JBQ3BDLFNBQVMsWUFBWTs0QkFDakI7MkJBQ0Q7MkJBQ0E7d0JBQ0gsUUFBUSxJQUFJLHNEQUFzRCxHQUFHLFFBQVE7OztvQkFHakY7Ozs7WUFJUixTQUFTLGFBQWE7Z0JBQ2xCLElBQUksb0JBQW9CLEdBQUcsUUFBUSxjQUFjLGFBQWE7Z0JBQzlELElBQUk7O2dCQUVKLFFBQVEsUUFBUSxlQUFlLFVBQVUsTUFBTTtvQkFDM0MsdUJBQXVCLEdBQUcsY0FBYztvQkFDeEMsVUFBVSxhQUFhLEdBQUcsUUFBUTs7b0JBRWxDLGlCQUFpQixLQUFLO29CQUN0QixHQUFHLFFBQVEsYUFBYSxLQUFLLElBQUksS0FBSyxhQUFhLEdBQUcsUUFBUTtvQkFDOUQsR0FBRyxRQUFRLGFBQWEsS0FBSyxJQUFJLEtBQUssY0FBYyxHQUFHLFFBQVE7O29CQUUvRCxHQUFHLGNBQWMsT0FBTyxZQUFZLEtBQUs7Ozs7b0JBSXpDLElBQUkscUJBQXFCLEdBQUcsUUFBUSxjQUFjLFVBQVUsQ0FBQyxHQUFHO3dCQUM1RCxJQUFJLFVBQVUsR0FBRyxRQUFRLGNBQWMsY0FBYyxHQUFHLFFBQVEsY0FBYyxPQUFPOzRCQUNqRixHQUFHLFFBQVEsY0FBYyxRQUFROzs7O29CQUl6QyxTQUFTOzs7Z0JBR2IsSUFBSSxHQUFHLFFBQVEsZ0JBQWdCO29CQUMzQixJQUFJLFlBQVksUUFBUSxhQUFhO29CQUNyQyxJQUFJLFlBQVksY0FBYztvQkFDOUIsSUFBSSxZQUFZLGNBQWMsV0FBVzs7b0JBRXpDLGNBQWMsVUFBVSxVQUFVLGNBQWM7b0JBQ2hELGNBQWMsVUFBVSxTQUFTLGNBQWM7OztvQkFHL0MsaUJBQWlCLGFBQWE7O29CQUU5QixHQUFHLFFBQVEsWUFBWSxRQUFRLGFBQWE7OztvQkFHNUMsSUFBSSxHQUFHLFFBQVEsVUFBVSxTQUFTO3dCQUM5Qjs2QkFDSyxhQUFhLEdBQUcsUUFBUTs2QkFDeEIsU0FBUyxHQUFHLFFBQVEsWUFBWSxDQUFDLEdBQUcsR0FBRzsyQkFDekMsSUFBSSxHQUFHLFFBQVEsVUFBVSxVQUFVO3dCQUN0Qzs2QkFDSyxhQUFhLEdBQUcsUUFBUTs2QkFDeEIsU0FBUyxHQUFHLFFBQVEsWUFBWSxDQUFDLEtBQUssR0FBRzsyQkFDM0M7d0JBQ0g7NkJBQ0ssYUFBYSxHQUFHLFFBQVE7NkJBQ3hCLFNBQVMsR0FBRyxHQUFHOzs7dUJBR3JCO29CQUNILGlCQUFpQjtvQkFDakIsR0FBRyxRQUFRLFlBQVksUUFBUSxhQUFhOzs7Z0JBR2hELEdBQUcsUUFBUSxnQkFBZ0I7OztnQkFHM0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFFBQVEsYUFBYTtvQkFDOUMsSUFBSSxHQUFHLFFBQVEsVUFBVSxTQUFTO3dCQUM5QixjQUFjLEdBQUcsY0FBYyxXQUFXOzJCQUN2Qzt3QkFDSCxjQUFjLEdBQUcsY0FBYzs7dUJBRWhDO29CQUNILElBQUkscUJBQXFCLEdBQUcsUUFBUSxjQUFjLFVBQVUsQ0FBQyxHQUFHO3dCQUM1RCxXQUFXLEdBQUcsY0FBYyxHQUFHLFFBQVEsY0FBYzs7Ozs7Z0JBSzdELEdBQUcsVUFBVSxTQUFTLEtBQUs7Z0JBQzNCLEdBQUcsUUFBUSxJQUFJO29CQUNYLGdCQUFnQixnQkFBZ0I7b0JBQ2hDLGdCQUFnQixHQUFHLFFBQVEsYUFBYTtvQkFDeEMsZ0JBQWdCO29CQUNoQixnQkFBZ0IsYUFBYTs7OztnQkFJakMsSUFBSSxHQUFHLFFBQVEsWUFBWSxRQUFRO29CQUMvQixHQUFHLHVCQUF1QixRQUFRLFFBQVEsU0FBUyxjQUFjO29CQUNqRSxHQUFHLHVCQUF1QixTQUFTLEtBQUs7Ozs7O1FBS3BELFNBQVMsV0FBVyxNQUFNO1lBQ3RCLElBQUksV0FBVzs7WUFFZixjQUFjOzs7WUFHZCxJQUFJLEdBQUcsUUFBUSxnQkFBZ0I7Z0JBQzNCLElBQUksUUFBUSxlQUFlOztnQkFFM0IsWUFBWTs7Z0JBRVosSUFBSSxVQUFVLEdBQUc7b0JBQ2IsWUFBWTt1QkFDVDtvQkFDSCxLQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sS0FBSzt3QkFDeEIsYUFBYSxDQUFDLEdBQUcsY0FBYyxHQUFHLFlBQVksR0FBRyxjQUFjLElBQUksR0FBRyxhQUFhOzs7O2dCQUkzRixxQkFBcUIsYUFBYSxHQUFHLFFBQVEsWUFBWSxTQUFTLFdBQVcsR0FBRzs7Ozs7OztRQU94RixTQUFTLFdBQVc7WUFDaEIsSUFBSTtZQUNKLElBQUksa0JBQWtCLHFCQUFxQixhQUFhLEdBQUcsUUFBUSxZQUFZLG9CQUFvQjtZQUNuRyxJQUFJLGtCQUFrQjtZQUN0QixJQUFJLGtCQUFrQjs7WUFFdEIsSUFBSSxHQUFHLFFBQVEsWUFBWSxHQUFHO2dCQUMxQixNQUFNLE1BQU0sR0FBRyxRQUFRLFlBQVksQ0FBQzttQkFDakM7OztnQkFHSCxNQUFNLE1BQU07OztZQUdoQixJQUFJLE1BQU0sR0FBRztnQkFDVCxJQUFJLFlBQVksTUFBTSxHQUFHLFFBQVEsWUFBWSxDQUFDO2dCQUM5QyxnQkFBZ0IsWUFBWSxRQUFRO2dCQUNwQyxHQUFHLHFCQUFxQixJQUFJLENBQUMsYUFBYSxnQkFBZ0Isa0JBQWtCLENBQUMsS0FBSzs7O1lBR3RGLElBQUksVUFBVSxRQUFRLE1BQU0sR0FBRztnQkFDM0IsR0FBRyxxQkFBcUIsSUFBSSxDQUFDLGFBQWEsbUJBQW1CLFNBQVM7Z0JBQ3RFO21CQUNHO2dCQUNILGtCQUFrQixVQUFVO2dCQUM1QixHQUFHLFFBQVEsR0FBRyxhQUFhLGFBQWEsWUFBWSxrQkFBa0IsTUFBTTtnQkFDNUUsR0FBRyxxQkFBcUIsSUFBSSxDQUFDLGFBQWEsZ0JBQWdCLGtCQUFrQixDQUFDLEtBQUs7Ozs7Ozs7UUFPMUYsU0FBUyxjQUFjLE1BQU07WUFDekIsR0FBRyxhQUFhOzs7WUFHaEIsR0FBRyxTQUFTLEtBQUssTUFBTSxDQUFDLE1BQU07O1lBRTlCLE9BQU8sV0FBVywyQkFBMkI7OztRQUdqRCxTQUFTLGVBQWUsTUFBTTtZQUMxQixLQUFLLElBQUksS0FBSyxHQUFHLGVBQWU7Z0JBQzVCLElBQUksR0FBRyxjQUFjLE9BQU8sTUFBTTtvQkFDOUIsT0FBTzs7Ozs7O1FBTW5CLFNBQVMsZ0JBQWdCO1lBQ3JCLElBQUksQ0FBQyxHQUFHLFFBQVEsWUFBWSxTQUFTO2dCQUNqQyxPQUFPLE9BQU8sWUFBWTtvQkFDdEIsR0FBRyxRQUFRLFlBQVksVUFBVTs7O2dCQUdyQyxxQkFBcUIsYUFBYSxHQUFHLFFBQVEsWUFBWSxhQUFhOzs7Z0JBR3RFLEdBQUcsUUFBUSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsZ0JBQWdCLEtBQUs7Z0JBQ3pELHFCQUFxQixhQUFhLEdBQUcsUUFBUSxZQUFZOztnQkFFekQsR0FBRyxRQUFRLFlBQVk7Ozs7O1FBSy9CLFNBQVMsZUFBZTtZQUNwQixHQUFHLFFBQVEsWUFBWSxVQUFVOztZQUVqQyxHQUFHLFFBQVEsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLGdCQUFnQjtZQUNwRCxxQkFBcUIsYUFBYSxHQUFHLFFBQVEsWUFBWTs7WUFFekQscUJBQXFCLGFBQWEsR0FBRyxRQUFRLFlBQVksYUFBYTtZQUN0RSxHQUFHLHFCQUFxQixJQUFJLENBQUMsYUFBYSxtQkFBbUIsU0FBUzs7OztBQUlsRjs7QUNsY0E7Ozs7Ozs7QUFPQSxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxHQUFHLEtBQUssU0FBUyxRQUFRLE1BQU0sUUFBUSxDQUFDLEtBQUssUUFBUSxRQUFRLEtBQUssTUFBTSxNQUFNLEtBQUssUUFBUSxRQUFRLEtBQUssT0FBTyxDQUFDLEdBQUcsS0FBSyxVQUFVLGVBQWUsU0FBUyxNQUFNLFNBQVMsU0FBUyxXQUFXLFdBQVcsQ0FBQyxPQUFPLFNBQVMsVUFBVSxJQUFJLFdBQVcsWUFBWSxFQUFFLFNBQVMsVUFBVSxJQUFJLFdBQVcsWUFBWSxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxhQUFhLFNBQVMsYUFBYSxTQUFTLFlBQVksYUFBYSxLQUFLLFVBQVUsZUFBZSxTQUFTLFFBQVEsU0FBUyxXQUFXLFNBQVMsV0FBVyxDQUFDLE9BQU8sU0FBUyxVQUFVLElBQUksV0FBVyxZQUFZLEVBQUUsU0FBUyxVQUFVLElBQUksV0FBVyxZQUFZLEVBQUUsQ0FBQyxJQUFJLEtBQUssR0FBRyxRQUFRLGFBQWEsU0FBUyxhQUFhLFNBQVMsWUFBWSxZQUFZLEtBQUssVUFBVSxVQUFVLFNBQVMsWUFBWSxZQUFZLFdBQVcsU0FBUyxhQUFhLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFlBQVksYUFBYSxZQUFZLGFBQWEsV0FBVyxZQUFZLFNBQVMsVUFBVSxhQUFhLGNBQWMsT0FBTyxLQUFLLEtBQUssVUFBVSxRQUFRLFNBQVMsSUFBSSxJQUFJLE1BQU0sTUFBTSxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxPQUFPLFFBQVEsS0FBSyxLQUFLLE9BQU8sS0FBSyxJQUFJLEtBQUssTUFBTSxPQUFPLEtBQUssWUFBWSxhQUFhLEtBQUssUUFBUSxLQUFLLEVBQUUsS0FBSyxLQUFLLFFBQVEsS0FBSyxFQUFFLEtBQUssT0FBTyxLQUFLLFFBQVEsV0FBVyxDQUFDLElBQUksT0FBTyxLQUFLLEdBQUcsUUFBUSxPQUFPLE1BQU0sS0FBSyxLQUFLLE9BQU8sTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLENBQUMsSUFBSSxZQUFZLFNBQVMsS0FBSyxRQUFRLEtBQUssRUFBRSxJQUFJLFdBQVcsS0FBSyxlQUFlLEtBQUssUUFBUSxXQUFXLEtBQUssU0FBUyxLQUFLLGVBQWUsS0FBSyxRQUFRLFNBQVMsS0FBSyxLQUFLLFFBQVEsTUFBTSxVQUFVLGFBQWEsS0FBSyxRQUFRLE1BQU0sTUFBTSxLQUFLLFFBQVEsTUFBTSxZQUFZLElBQUksS0FBSyxpQkFBaUIsWUFBWSxLQUFLLFFBQVEsV0FBVyxrQkFBa0IsWUFBWSxLQUFLLFFBQVEsU0FBUyxpQkFBaUIsWUFBWSxLQUFLLFFBQVEsU0FBUyxvQkFBb0IsRUFBRSxpQkFBaUIsWUFBWSxrQkFBa0IsWUFBWSxpQkFBaUIsWUFBWSxvQkFBb0IsWUFBWSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsWUFBWSxLQUFLLENBQUMsS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFlBQVksRUFBRSxrQkFBa0IsS0FBSyxrQkFBa0IsTUFBTSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsYUFBYSxLQUFLLENBQUMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLFVBQVUsRUFBRSxtQkFBbUIsS0FBSyxrQkFBa0IsS0FBSyxtQkFBbUIsS0FBSyxrQkFBa0IsTUFBTSxLQUFLLFFBQVEsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLEVBQUUsWUFBWSxXQUFXLFdBQVcsU0FBUyxLQUFLLFFBQVEsS0FBSyxPQUFPLGlCQUFpQixpQkFBaUIsS0FBSyxRQUFRLEtBQUssTUFBTSxLQUFLLFFBQVEsS0FBSyxXQUFXLGtCQUFrQixrQkFBa0IsS0FBSyxRQUFRLEtBQUssTUFBTSxLQUFLLFFBQVEsS0FBSyxXQUFXLGlCQUFpQixpQkFBaUIsS0FBSyxRQUFRLEtBQUssTUFBTSxLQUFLLFFBQVEsS0FBSyxXQUFXLG9CQUFvQixvQkFBb0IsS0FBSyxRQUFRLEtBQUssTUFBTSxLQUFLLFFBQVEsS0FBSyxXQUFXLEtBQUssUUFBUSxLQUFLLFVBQVUsWUFBWSxLQUFLLFFBQVEsS0FBSyxNQUFNLFlBQVksV0FBVyxXQUFXLEtBQUssU0FBUyxLQUFLLFVBQVUsaUJBQWlCLGlCQUFpQixXQUFXLFVBQVUsS0FBSyxVQUFVLEtBQUssVUFBVSxrQkFBa0Isa0JBQWtCLFdBQVcsV0FBVyxLQUFLLFFBQVEsUUFBUSxLQUFLLFNBQVMsS0FBSyxVQUFVLGlCQUFpQixpQkFBaUIsV0FBVyxXQUFXLEtBQUssUUFBUSxRQUFRLEtBQUssWUFBWSxLQUFLLFVBQVUsb0JBQW9CLG9CQUFvQixXQUFXLFdBQVcsS0FBSyxVQUFVLFNBQVMsU0FBUyxpQkFBaUIsYUFBYSxDQUFDLElBQUksSUFBSSxHQUFHLE9BQU8sS0FBSyxTQUFTLE9BQU8sT0FBTyxLQUFLLFFBQVEsS0FBSyxRQUFRLE1BQU0sS0FBSyxTQUFTLEtBQUssUUFBUSxNQUFNLEdBQUcsS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLElBQUksS0FBSyxNQUFNLFFBQVEsQ0FBQyxLQUFLLEtBQUssUUFBUSxVQUFVLEtBQUssUUFBUSxhQUFhLENBQUMsSUFBSSxTQUFTLEdBQUcsS0FBSyxRQUFRLEtBQUssS0FBSyxTQUFTLEtBQUssUUFBUSxXQUFXLFNBQVMsS0FBSyxRQUFRLFNBQVMsTUFBTSxLQUFLLFFBQVEsS0FBSyxJQUFJLEtBQUssTUFBTSxLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksRUFBRSxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssUUFBUSxpQkFBaUIsRUFBRSxLQUFLLFFBQVEsZUFBZSxJQUFJLElBQUksT0FBTyxRQUFRLEtBQUssS0FBSyxRQUFRLEtBQUssY0FBYyxVQUFVLEtBQUssWUFBWSxVQUFVLE1BQU0sT0FBTyxLQUFLLFFBQVEsV0FBVyxLQUFLLEVBQUUsS0FBSyxRQUFRLE1BQU0sSUFBSSxLQUFLLFlBQVksYUFBYSxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sS0FBSyxRQUFRLEtBQUssRUFBRSxJQUFJLEtBQUssUUFBUSxNQUFNLEtBQUssS0FBSyxRQUFRLFFBQVEsVUFBVSxTQUFTLElBQUksS0FBSyxRQUFRLEtBQUssS0FBSyxTQUFTLEtBQUssUUFBUSxRQUFRLE9BQU8sU0FBUyxLQUFLLFFBQVEsUUFBUSxLQUFLLE1BQU0sSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLFlBQVksS0FBSyxjQUFjLFVBQVUsS0FBSyxZQUFZLFVBQVUsTUFBTSxPQUFPLEtBQUssUUFBUSxRQUFRLE9BQU8sS0FBSyxLQUFLLFFBQVEsUUFBUSxNQUFNLEtBQUssWUFBWSxhQUFhLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxLQUFLLFFBQVEsS0FBSyxFQUFFLElBQUksS0FBSyxRQUFRLE1BQU0sTUFBTSxHQUFHLEtBQUssUUFBUSxNQUFNLFFBQVEsQ0FBQyxJQUFJLE9BQU8sU0FBUyxLQUFLLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxLQUFLLGVBQWUsS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLEtBQUssV0FBVyxLQUFLLGVBQWUsS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLEtBQUssS0FBSyxFQUFFLEdBQUcsSUFBSSxLQUFLLFFBQVEsWUFBWSxNQUFNLEtBQUssUUFBUSxXQUFXLEtBQUssR0FBRyxTQUFTLEtBQUssUUFBUSxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxRQUFRLE1BQU0sTUFBTSxPQUFPLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxTQUFTLEtBQUssUUFBUSxNQUFNLFNBQVMsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLE1BQU0sTUFBTSxLQUFLLEdBQUcsTUFBTSxVQUFVLElBQUksVUFBVSxDQUFDLE9BQU8sTUFBTSxPQUFPLFdBQVcsY0FBYyxLQUFLLEdBQUcsRUFBRSxhQUFhLE9BQU8sR0FBRyxTQUFTLE1BQU0sQ0FBQyxHQUFHLE9BQU8sS0FBSyxJQUFJLE9BQU8sT0FBTyxHQUFHLE9BQU8sS0FBSyxJQUFJLE9BQU8sT0FBTyxFQUFFLFNBQVMsSUFBSSxVQUFVLFVBQVUsS0FBSyxNQUFNLFFBQVEsT0FBTyxVQUFVLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksR0FBRyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxLQUFLLEtBQUssUUFBUSxNQUFNLGFBQWEsR0FBRyxVQUFVLEtBQUssUUFBUSxNQUFNLEtBQUssQ0FBQyxJQUFJLE9BQU8sS0FBSyxRQUFRLE1BQU0sT0FBTyxPQUFPLEtBQUssUUFBUSxLQUFLLEVBQUUsU0FBUyxLQUFLLFFBQVEsTUFBTSxTQUFTLEtBQUssR0FBRyxNQUFNLFVBQVUsSUFBSSxVQUFVLENBQUMsT0FBTyxNQUFNLE9BQU8sV0FBVyxjQUFjLEtBQUssR0FBRyxFQUFFLGFBQWEsT0FBTyxHQUFHLFNBQVMsTUFBTSxDQUFDLEdBQUcsT0FBTyxLQUFLLElBQUksT0FBTyxPQUFPLEdBQUcsT0FBTyxLQUFLLElBQUksT0FBTyxPQUFPLEdBQUcsT0FBTyxLQUFLLElBQUksUUFBUSxPQUFPLFFBQVEsR0FBRyxPQUFPLEtBQUssSUFBSSxRQUFRLE9BQU8sV0FBVyxJQUFJLFVBQVUsUUFBUSxLQUFLLE1BQU0sUUFBUSxPQUFPLFFBQVEsS0FBSyxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksR0FBRyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksZUFBZSxLQUFLLFFBQVEsTUFBTSxNQUFNLE9BQU8sS0FBSyxRQUFRLE1BQU0sU0FBUyxTQUFTLEtBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFVBQVUsQ0FBQyxLQUFLLEtBQUssUUFBUSxLQUFLLFFBQVEsS0FBSyxRQUFRLElBQUksS0FBSyxTQUFTLFdBQVcsQ0FBQyxLQUFLLEtBQUssUUFBUSxhQUFhLEtBQUssUUFBUSxnQkFBZ0IsS0FBSyxXQUFXLEtBQUssUUFBUSxJQUFJLEtBQUssVUFBVSxZQUFZLENBQUMsS0FBSyxLQUFLLFFBQVEsZUFBZSxLQUFLLFdBQVcsS0FBSyxRQUFRLElBQUksS0FBSyxVQUFVLFlBQVksQ0FBQyxlQUFlLElBQUksS0FBSyxVQUFVLEtBQUssUUFBUSxJQUFJLEtBQUssU0FBUyxXQUFXLENBQUMsS0FBSyxLQUFLLFFBQVEsV0FBVyxJQUFJLE9BQU8sVUFBVSxLQUFLLFFBQVEsV0FBVyxPQUFPLFdBQVcsS0FBSyxRQUFRLElBQUksS0FBSyxZQUFZLGNBQWMsQ0FBQyxlQUFlLEVBQUUsT0FBTyxRQUFRLGlCQUFpQixlQUFlLEtBQUssVUFBVSxLQUFLLFNBQVMsT0FBTyxDQUFDLFNBQVMsaUJBQWlCLENBQUMsS0FBSyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLEVBQUUsS0FBSyxRQUFRLEtBQUssRUFBRSxFQUFFLEdBQUcsTUFBTSxFQUFFLEtBQUssUUFBUSxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsa0JBQWtCLENBQUMsS0FBSyxPQUFPLENBQUMsRUFBRSxJQUFJLE9BQU8sR0FBRyxNQUFNLEtBQUssWUFBWSxFQUFFLE9BQU8sR0FBRyxLQUFLLFFBQVEsS0FBSyxFQUFFLEVBQUUsT0FBTyxHQUFHLEtBQUssUUFBUSxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsWUFBWSxFQUFFLEVBQUUsUUFBUSxDQUFDLElBQUksUUFBUSxNQUFNLElBQUksS0FBSyxLQUFLLEVBQUUsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxNQUFNLElBQUksTUFBTSxJQUFJLEtBQUssUUFBUSxXQUFXLElBQUksTUFBTSxDQUFDLEtBQUssUUFBUSxDQUFDLE1BQU0sTUFBTSxLQUFLLEdBQUcsS0FBSyxLQUFLLE1BQU0sS0FBSyxlQUFlLFFBQVEsS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFlBQVksS0FBSyxPQUFPLEtBQUssUUFBUSxLQUFLLEtBQUssT0FBTyxLQUFLLFFBQVEsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLEtBQUssTUFBTSxLQUFLLFFBQVEsTUFBTSxLQUFLLFFBQVEsS0FBSyxLQUFLLElBQUksS0FBSyxRQUFRLEtBQUssSUFBSSxLQUFLLE1BQU0sS0FBSyxNQUFNLFFBQVEsSUFBSSxPQUFPLEtBQUssT0FBTyxLQUFLLFNBQVMsU0FBUyxLQUFLLGVBQWUsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxNQUFNLEtBQUssVUFBVSxLQUFLLElBQUksS0FBSyxVQUFVLFVBQVUsS0FBSyxVQUFVLFNBQVMsS0FBSyxlQUFlLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsTUFBTSxLQUFLLFdBQVcsS0FBSyxJQUFJLEtBQUssWUFBWSxLQUFLLFFBQVEsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssUUFBUSxpQkFBaUIsRUFBRSxLQUFLLFFBQVEsZUFBZSxJQUFJLEdBQUcsT0FBTyxLQUFLLFNBQVMsT0FBTyxTQUFTLEtBQUssRUFBRSxLQUFLLFFBQVEsTUFBTSxLQUFLLEdBQUcsT0FBTyxLQUFLLFNBQVMsT0FBTyxPQUFPLFNBQVMsSUFBSSxLQUFLLEtBQUssS0FBSyxhQUFhLElBQUksYUFBYSxHQUFHLFNBQVMsT0FBTyxHQUFHLE9BQU8saUJBQWlCLEdBQUcsVUFBVSxrQkFBa0IsS0FBSyxTQUFTLGlCQUFpQixjQUFjLEtBQUssUUFBUSxRQUFRLFFBQVEsS0FBSyxVQUFVLGFBQWEsS0FBSyxLQUFLLFFBQVEsUUFBUSxNQUFNLFNBQVMsS0FBSyxRQUFRLFFBQVEsVUFBVSxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxHQUFHLFlBQVksS0FBSyxlQUFlLEtBQUssUUFBUSxXQUFXLEtBQUssS0FBSyxlQUFlLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsTUFBTSxPQUFPLFNBQVMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLEdBQUcsS0FBSyxVQUFVLEtBQUssSUFBSSxLQUFLLFNBQVMsU0FBUyxNQUFNLEtBQUssV0FBVyxLQUFLLElBQUksS0FBSyxVQUFVLFNBQVMsVUFBVSxLQUFLLFVBQVUsU0FBUyxLQUFLLGVBQWUsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxNQUFNLEtBQUssV0FBVyxLQUFLLElBQUksS0FBSyxXQUFXLEtBQUssU0FBUyxTQUFTLEtBQUssZUFBZSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLE1BQU0sS0FBSyxVQUFVLEtBQUssSUFBSSxLQUFLLFlBQVksS0FBSyxVQUFVLFNBQVMsU0FBUyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxLQUFLLE9BQU8sS0FBSyxRQUFRLEtBQUssS0FBSyxPQUFPLEtBQUssUUFBUSxJQUFJLENBQUMsSUFBSSxRQUFRLEtBQUssZUFBZSxTQUFTLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxLQUFLLEdBQUcsS0FBSyxNQUFNLEtBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLElBQUksU0FBUyxLQUFLLFFBQVEsTUFBTSxLQUFLLFFBQVEsS0FBSyxLQUFLLElBQUksS0FBSyxRQUFRLEtBQUssSUFBSSxLQUFLLE1BQU0sS0FBSyxNQUFNLFFBQVEsSUFBSSxLQUFLLFVBQVUsU0FBUyxTQUFTLEdBQUcsT0FBTyxLQUFLLFNBQVMsT0FBTyxjQUFjLEtBQUssSUFBSSxLQUFLLFdBQVcsS0FBSyxTQUFTLFNBQVMsU0FBUyxHQUFHLE9BQU8sS0FBSyxTQUFTLE9BQU8sYUFBYSxLQUFLLElBQUksS0FBSyxVQUFVLEtBQUssUUFBUSxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxRQUFRLGlCQUFpQixFQUFFLEtBQUssUUFBUSxlQUFlLElBQUksR0FBRyxPQUFPLEtBQUssU0FBUyxPQUFPLFNBQVMsS0FBSyxFQUFFLEtBQUssUUFBUSxNQUFNLE9BQU8sR0FBRyxLQUFLLEtBQUssR0FBRyxjQUFjLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksUUFBUSxLQUFLLEtBQUssU0FBUyxNQUFNLFFBQVEsQ0FBQyxNQUFNLE1BQU0sTUFBTSxPQUFPLEVBQUUsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssU0FBUyxNQUFNLEdBQUcsTUFBTSxtQkFBbUIsV0FBVyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLElBQUksS0FBSyxVQUFVLEtBQUssSUFBSSxXQUFXLEVBQUUsU0FBUyxJQUFJLEtBQUssR0FBRyxhQUFhLENBQUMsRUFBRSxlQUFlLFNBQVMsRUFBRSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsRUFBRSxXQUFXLEdBQUcsU0FBUyxHQUFHLFdBQVcsZ0JBQWdCLFNBQVMsbUJBQW1CLGFBQWEsZ0JBQWdCLFVBQVUsT0FBTyxPQUFPLEVBQUUsU0FBUyxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEdBQUcsTUFBTSxPQUFPLEtBQUssUUFBUSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssUUFBUSxNQUFNLE9BQU8sTUFBTSxFQUFFLFNBQVMsR0FBRyxPQUFPLEdBQUcsV0FBVyxJQUFJLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLElBQUksZUFBZSxDQUFDLEdBQUcsTUFBTSxRQUFRLFFBQVEsTUFBTSxlQUFlLE1BQU0sU0FBUyxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssUUFBUSxHQUFHLE1BQU0sTUFBTSxNQUFNLFNBQVMsR0FBRyxNQUFNLE9BQU8sUUFBUSxTQUFTLFNBQVMsU0FBUyxDQUFDLE9BQU8sVUFBVSxhQUFhLE9BQU8sVUFBVSxhQUFhLE9BQU8sVUFBVSxXQUFXLFVBQVUsS0FBSyxTQUFTLFlBQVksTUFBTSxRQUFRLGVBQWUsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLEVBQUUsTUFBTSxPQUFPLFVBQVUsVUFBVSxDQUFDLEdBQUcsc0JBQXNCLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxJQUFJLFdBQVcsUUFBUSxNQUFNLGVBQWUsTUFBTSxTQUFTLEtBQUssSUFBSSxHQUFHLEtBQUssUUFBUSxHQUFHLE1BQU0sTUFBTSxZQUFZLGFBQWEsQ0FBQyxHQUFHLElBQUksU0FBUyxVQUFVLENBQUMsS0FBSyxLQUFLLFNBQVMsTUFBTSxDQUFDLE1BQU0sT0FBTyxVQUFVLENBQUMsTUFBTSxNQUFN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QzlDLFFBQVEsY0FBYyxNQUFNLE9BQU8sV0FBVztXQUM5QyxRQUFRLGNBQWMsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7OztJQVNyRCxLQUFLLFFBQVEsY0FBYyxLQUFLO0lBQ2hDLEtBQUssUUFBUSxjQUFjLEtBQUs7SUFDaEMsS0FBSyxRQUFRLGNBQWMsS0FBSztJQUNoQyxLQUFLLFFBQVEsY0FBYyxLQUFLOzs7O0lBSWhDLEtBQUssY0FBYzs7O0lBR25CLE9BQU87Ozs7O0FBS1gsT0FBTyxXQUFXLGVBQWU7OztBQzFHakM7Ozs7Ozs7Q0FPQzs7QUFFRCxJQUFJLFlBQVksVUFBVSxVQUFVLFFBQVEsVUFBVTtZQUMxQyxVQUFVLFdBQVc7O1lBRXJCLE9BQU8sU0FBUyxRQUFRLFNBQVMsU0FBUyxHQUFHLEdBQUc7Z0JBQzVDLElBQUksSUFBSSxFQUFFLE1BQU07b0JBQ1osSUFBSTs7Z0JBRVIsSUFBSTtvQkFDQSxLQUFLLElBQUksS0FBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7a0JBQzdCLE1BQU0sRUFBRTtvQkFDTixJQUFJOzs7Z0JBR1IsT0FBTyxDQUFDLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLElBQUk7Ozs7OztBQU05RSxTQUFTLFVBQVUsU0FBUyxVQUFVLE1BQU0sTUFBTTtJQUM5QyxLQUFLLFVBQVUsUUFBUTtJQUN2QixPQUFPOzs7QUFHWCxPQUFPLE9BQU8sWUFBWSxVQUFVLFFBQVEsVUFBVTtJQUNsRCxJQUFJLE9BQU87SUFDWCxPQUFPLFNBQVMsTUFBTSxRQUFROzs7Ozs7QUFNbEMsT0FBTyxXQUFXLE9BQU8sV0FBVyxTQUFTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG4gQW5ndWxhckpTIHYxLjQuM1xuIChjKSAyMDEwLTIwMTUgR29vZ2xlLCBJbmMuIGh0dHA6Ly9hbmd1bGFyanMub3JnXG4gTGljZW5zZTogTUlUXG4qL1xuKGZ1bmN0aW9uKEYsdCxXKXsndXNlIHN0cmljdCc7ZnVuY3Rpb24gdWEoYSxiLGMpe2lmKCFhKXRocm93IG5nTWluRXJyKFwiYXJlcVwiLGJ8fFwiP1wiLGN8fFwicmVxdWlyZWRcIik7cmV0dXJuIGF9ZnVuY3Rpb24gdmEoYSxiKXtpZighYSYmIWIpcmV0dXJuXCJcIjtpZighYSlyZXR1cm4gYjtpZighYilyZXR1cm4gYTtYKGEpJiYoYT1hLmpvaW4oXCIgXCIpKTtYKGIpJiYoYj1iLmpvaW4oXCIgXCIpKTtyZXR1cm4gYStcIiBcIitifWZ1bmN0aW9uIEVhKGEpe3ZhciBiPXt9O2EmJihhLnRvfHxhLmZyb20pJiYoYi50bz1hLnRvLGIuZnJvbT1hLmZyb20pO3JldHVybiBifWZ1bmN0aW9uIGJhKGEsYixjKXt2YXIgZD1cIlwiO2E9WChhKT9hOmEmJlUoYSkmJmEubGVuZ3RoP2Euc3BsaXQoL1xccysvKTpbXTt1KGEsZnVuY3Rpb24oYSxzKXthJiYwPGEubGVuZ3RoJiYoZCs9MDxzP1wiIFwiOlwiXCIsZCs9Yz9iK2E6YStiKX0pO3JldHVybiBkfWZ1bmN0aW9uIEZhKGEpe2lmKGEgaW5zdGFuY2VvZiBHKXN3aXRjaChhLmxlbmd0aCl7Y2FzZSAwOnJldHVybltdO1xuY2FzZSAxOmlmKDE9PT1hWzBdLm5vZGVUeXBlKXJldHVybiBhO2JyZWFrO2RlZmF1bHQ6cmV0dXJuIEcoa2EoYSkpfWlmKDE9PT1hLm5vZGVUeXBlKXJldHVybiBHKGEpfWZ1bmN0aW9uIGthKGEpe2lmKCFhWzBdKXJldHVybiBhO2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdO2lmKDE9PWMubm9kZVR5cGUpcmV0dXJuIGN9fWZ1bmN0aW9uIEdhKGEsYixjKXt1KGIsZnVuY3Rpb24oYil7YS5hZGRDbGFzcyhiLGMpfSl9ZnVuY3Rpb24gSGEoYSxiLGMpe3UoYixmdW5jdGlvbihiKXthLnJlbW92ZUNsYXNzKGIsYyl9KX1mdW5jdGlvbiBoYShhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtjLmFkZENsYXNzJiYoR2EoYSxiLGMuYWRkQ2xhc3MpLGMuYWRkQ2xhc3M9bnVsbCk7Yy5yZW1vdmVDbGFzcyYmKEhhKGEsYixjLnJlbW92ZUNsYXNzKSxjLnJlbW92ZUNsYXNzPW51bGwpfX1mdW5jdGlvbiBpYShhKXthPWF8fHt9O2lmKCFhLiQkcHJlcGFyZWQpe3ZhciBiPWEuZG9tT3BlcmF0aW9ufHxcbkg7YS5kb21PcGVyYXRpb249ZnVuY3Rpb24oKXthLiQkZG9tT3BlcmF0aW9uRmlyZWQ9ITA7YigpO2I9SH07YS4kJHByZXBhcmVkPSEwfXJldHVybiBhfWZ1bmN0aW9uIGNhKGEsYil7d2EoYSxiKTt4YShhLGIpfWZ1bmN0aW9uIHdhKGEsYil7Yi5mcm9tJiYoYS5jc3MoYi5mcm9tKSxiLmZyb209bnVsbCl9ZnVuY3Rpb24geGEoYSxiKXtiLnRvJiYoYS5jc3MoYi50byksYi50bz1udWxsKX1mdW5jdGlvbiBSKGEsYixjKXt2YXIgZD0oYi5hZGRDbGFzc3x8XCJcIikrXCIgXCIrKGMuYWRkQ2xhc3N8fFwiXCIpLGU9KGIucmVtb3ZlQ2xhc3N8fFwiXCIpK1wiIFwiKyhjLnJlbW92ZUNsYXNzfHxcIlwiKTthPUlhKGEuYXR0cihcImNsYXNzXCIpLGQsZSk7eWEoYixjKTtiLmFkZENsYXNzPWEuYWRkQ2xhc3M/YS5hZGRDbGFzczpudWxsO2IucmVtb3ZlQ2xhc3M9YS5yZW1vdmVDbGFzcz9hLnJlbW92ZUNsYXNzOm51bGw7cmV0dXJuIGJ9ZnVuY3Rpb24gSWEoYSxiLGMpe2Z1bmN0aW9uIGQoYSl7VShhKSYmKGE9YS5zcGxpdChcIiBcIikpO1xudmFyIGI9e307dShhLGZ1bmN0aW9uKGEpe2EubGVuZ3RoJiYoYlthXT0hMCl9KTtyZXR1cm4gYn12YXIgZT17fTthPWQoYSk7Yj1kKGIpO3UoYixmdW5jdGlvbihhLGIpe2VbYl09MX0pO2M9ZChjKTt1KGMsZnVuY3Rpb24oYSxiKXtlW2JdPTE9PT1lW2JdP251bGw6LTF9KTt2YXIgcz17YWRkQ2xhc3M6XCJcIixyZW1vdmVDbGFzczpcIlwifTt1KGUsZnVuY3Rpb24oYixjKXt2YXIgZCxlOzE9PT1iPyhkPVwiYWRkQ2xhc3NcIixlPSFhW2NdKTotMT09PWImJihkPVwicmVtb3ZlQ2xhc3NcIixlPWFbY10pO2UmJihzW2RdLmxlbmd0aCYmKHNbZF0rPVwiIFwiKSxzW2RdKz1jKX0pO3JldHVybiBzfWZ1bmN0aW9uIHooYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiB0LmVsZW1lbnQ/YVswXTphfWZ1bmN0aW9uIHphKGEsYixjKXt2YXIgZD1PYmplY3QuY3JlYXRlKG51bGwpLGU9YS5nZXRDb21wdXRlZFN0eWxlKGIpfHx7fTt1KGMsZnVuY3Rpb24oYSxiKXt2YXIgYz1lW2FdO2lmKGMpe3ZhciBrPWMuY2hhckF0KDApO1xuaWYoXCItXCI9PT1rfHxcIitcIj09PWt8fDA8PWspYz1KYShjKTswPT09YyYmKGM9bnVsbCk7ZFtiXT1jfX0pO3JldHVybiBkfWZ1bmN0aW9uIEphKGEpe3ZhciBiPTA7YT1hLnNwbGl0KC9cXHMqLFxccyovKTt1KGEsZnVuY3Rpb24oYSl7XCJzXCI9PWEuY2hhckF0KGEubGVuZ3RoLTEpJiYoYT1hLnN1YnN0cmluZygwLGEubGVuZ3RoLTEpKTthPXBhcnNlRmxvYXQoYSl8fDA7Yj1iP01hdGgubWF4KGEsYik6YX0pO3JldHVybiBifWZ1bmN0aW9uIGxhKGEpe3JldHVybiAwPT09YXx8bnVsbCE9YX1mdW5jdGlvbiBBYShhLGIpe3ZhciBjPU8sZD1hK1wic1wiO2I/Yys9XCJEdXJhdGlvblwiOmQrPVwiIGxpbmVhciBhbGxcIjtyZXR1cm5bYyxkXX1mdW5jdGlvbiBqYShhLGIpe3ZhciBjPWI/XCItXCIrYitcInNcIjpcIlwiO2RhKGEsW2VhLGNdKTtyZXR1cm5bZWEsY119ZnVuY3Rpb24gbWEoYSxiKXt2YXIgYz1iP1wicGF1c2VkXCI6XCJcIixkPVYrXCJQbGF5U3RhdGVcIjtkYShhLFtkLGNdKTtyZXR1cm5bZCxjXX1mdW5jdGlvbiBkYShhLFxuYil7YS5zdHlsZVtiWzBdXT1iWzFdfWZ1bmN0aW9uIEJhKCl7dmFyIGE9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57Zmx1c2g6ZnVuY3Rpb24oKXthPU9iamVjdC5jcmVhdGUobnVsbCl9LGNvdW50OmZ1bmN0aW9uKGIpe3JldHVybihiPWFbYl0pP2IudG90YWw6MH0sZ2V0OmZ1bmN0aW9uKGIpe3JldHVybihiPWFbYl0pJiZiLnZhbHVlfSxwdXQ6ZnVuY3Rpb24oYixjKXthW2JdP2FbYl0udG90YWwrKzphW2JdPXt0b3RhbDoxLHZhbHVlOmN9fX19dmFyIEg9dC5ub29wLHlhPXQuZXh0ZW5kLEc9dC5lbGVtZW50LHU9dC5mb3JFYWNoLFg9dC5pc0FycmF5LFU9dC5pc1N0cmluZyxuYT10LmlzT2JqZWN0LEthPXQuaXNVbmRlZmluZWQsTGE9dC5pc0RlZmluZWQsQ2E9dC5pc0Z1bmN0aW9uLG9hPXQuaXNFbGVtZW50LE8scGEsVixxYTtGLm9udHJhbnNpdGlvbmVuZD09PVcmJkYub253ZWJraXR0cmFuc2l0aW9uZW5kIT09Vz8oTz1cIldlYmtpdFRyYW5zaXRpb25cIixwYT1cIndlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZFwiKTpcbihPPVwidHJhbnNpdGlvblwiLHBhPVwidHJhbnNpdGlvbmVuZFwiKTtGLm9uYW5pbWF0aW9uZW5kPT09VyYmRi5vbndlYmtpdGFuaW1hdGlvbmVuZCE9PVc/KFY9XCJXZWJraXRBbmltYXRpb25cIixxYT1cIndlYmtpdEFuaW1hdGlvbkVuZCBhbmltYXRpb25lbmRcIik6KFY9XCJhbmltYXRpb25cIixxYT1cImFuaW1hdGlvbmVuZFwiKTt2YXIgcmE9VitcIkRlbGF5XCIsc2E9VitcIkR1cmF0aW9uXCIsZWE9TytcIkRlbGF5XCI7Rj1PK1wiRHVyYXRpb25cIjt2YXIgTWE9e3RyYW5zaXRpb25EdXJhdGlvbjpGLHRyYW5zaXRpb25EZWxheTplYSx0cmFuc2l0aW9uUHJvcGVydHk6TytcIlByb3BlcnR5XCIsYW5pbWF0aW9uRHVyYXRpb246c2EsYW5pbWF0aW9uRGVsYXk6cmEsYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6VitcIkl0ZXJhdGlvbkNvdW50XCJ9LE5hPXt0cmFuc2l0aW9uRHVyYXRpb246Rix0cmFuc2l0aW9uRGVsYXk6ZWEsYW5pbWF0aW9uRHVyYXRpb246c2EsYW5pbWF0aW9uRGVsYXk6cmF9O3QubW9kdWxlKFwibmdBbmltYXRlXCIsXG5bXSkuZGlyZWN0aXZlKFwibmdBbmltYXRlQ2hpbGRyZW5cIixbZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oYSxiLGMpe2E9Yy5uZ0FuaW1hdGVDaGlsZHJlbjt0LmlzU3RyaW5nKGEpJiYwPT09YS5sZW5ndGg/Yi5kYXRhKFwiJCRuZ0FuaW1hdGVDaGlsZHJlblwiLCEwKTpjLiRvYnNlcnZlKFwibmdBbmltYXRlQ2hpbGRyZW5cIixmdW5jdGlvbihhKXtiLmRhdGEoXCIkJG5nQW5pbWF0ZUNoaWxkcmVuXCIsXCJvblwiPT09YXx8XCJ0cnVlXCI9PT1hKX0pfX1dKS5mYWN0b3J5KFwiJCRyQUZNdXRleFwiLFtcIiQkckFGXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGI9ITE7YShmdW5jdGlvbigpe2I9ITB9KTtyZXR1cm4gZnVuY3Rpb24oYyl7Yj9jKCk6YShjKX19fV0pLmZhY3RvcnkoXCIkJHJBRlNjaGVkdWxlclwiLFtcIiQkckFGXCIsZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhKXtkLnB1c2goW10uY29uY2F0KGEpKTtjKCl9ZnVuY3Rpb24gYygpe2lmKGQubGVuZ3RoKXtmb3IodmFyIGI9W10sbj1cbjA7bjxkLmxlbmd0aDtuKyspe3ZhciBoPWRbbl07aC5zaGlmdCgpKCk7aC5sZW5ndGgmJmIucHVzaChoKX1kPWI7ZXx8YShmdW5jdGlvbigpe2V8fGMoKX0pfX12YXIgZD1bXSxlO2Iud2FpdFVudGlsUXVpZXQ9ZnVuY3Rpb24oYil7ZSYmZSgpO2U9YShmdW5jdGlvbigpe2U9bnVsbDtiKCk7YygpfSl9O3JldHVybiBifV0pLmZhY3RvcnkoXCIkJEFuaW1hdGVSdW5uZXJcIixbXCIkcVwiLFwiJCRyQUZNdXRleFwiLGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhKXt0aGlzLnNldEhvc3QoYSk7dGhpcy5fZG9uZUNhbGxiYWNrcz1bXTt0aGlzLl9ydW5JbkFuaW1hdGlvbkZyYW1lPWIoKTt0aGlzLl9zdGF0ZT0wfWMuY2hhaW49ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKCl7aWYobj09PWEubGVuZ3RoKWIoITApO2Vsc2UgYVtuXShmdW5jdGlvbihhKXshMT09PWE/YighMSk6KG4rKyxjKCkpfSl9dmFyIG49MDtjKCl9O2MuYWxsPWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhzKXtoPWgmJnM7KytuPT09XG5hLmxlbmd0aCYmYihoKX12YXIgbj0wLGg9ITA7dShhLGZ1bmN0aW9uKGEpe2EuZG9uZShjKX0pfTtjLnByb3RvdHlwZT17c2V0SG9zdDpmdW5jdGlvbihhKXt0aGlzLmhvc3Q9YXx8e319LGRvbmU6ZnVuY3Rpb24oYSl7Mj09PXRoaXMuX3N0YXRlP2EoKTp0aGlzLl9kb25lQ2FsbGJhY2tzLnB1c2goYSl9LHByb2dyZXNzOkgsZ2V0UHJvbWlzZTpmdW5jdGlvbigpe2lmKCF0aGlzLnByb21pc2Upe3ZhciBiPXRoaXM7dGhpcy5wcm9taXNlPWEoZnVuY3Rpb24oYSxjKXtiLmRvbmUoZnVuY3Rpb24oYil7ITE9PT1iP2MoKTphKCl9KX0pfXJldHVybiB0aGlzLnByb21pc2V9LHRoZW46ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5nZXRQcm9taXNlKCkudGhlbihhLGIpfSxcImNhdGNoXCI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZ2V0UHJvbWlzZSgpW1wiY2F0Y2hcIl0oYSl9LFwiZmluYWxseVwiOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmdldFByb21pc2UoKVtcImZpbmFsbHlcIl0oYSl9LHBhdXNlOmZ1bmN0aW9uKCl7dGhpcy5ob3N0LnBhdXNlJiZcbnRoaXMuaG9zdC5wYXVzZSgpfSxyZXN1bWU6ZnVuY3Rpb24oKXt0aGlzLmhvc3QucmVzdW1lJiZ0aGlzLmhvc3QucmVzdW1lKCl9LGVuZDpmdW5jdGlvbigpe3RoaXMuaG9zdC5lbmQmJnRoaXMuaG9zdC5lbmQoKTt0aGlzLl9yZXNvbHZlKCEwKX0sY2FuY2VsOmZ1bmN0aW9uKCl7dGhpcy5ob3N0LmNhbmNlbCYmdGhpcy5ob3N0LmNhbmNlbCgpO3RoaXMuX3Jlc29sdmUoITEpfSxjb21wbGV0ZTpmdW5jdGlvbihhKXt2YXIgYj10aGlzOzA9PT1iLl9zdGF0ZSYmKGIuX3N0YXRlPTEsYi5fcnVuSW5BbmltYXRpb25GcmFtZShmdW5jdGlvbigpe2IuX3Jlc29sdmUoYSl9KSl9LF9yZXNvbHZlOmZ1bmN0aW9uKGEpezIhPT10aGlzLl9zdGF0ZSYmKHUodGhpcy5fZG9uZUNhbGxiYWNrcyxmdW5jdGlvbihiKXtiKGEpfSksdGhpcy5fZG9uZUNhbGxiYWNrcy5sZW5ndGg9MCx0aGlzLl9zdGF0ZT0yKX19O3JldHVybiBjfV0pLnByb3ZpZGVyKFwiJCRhbmltYXRlUXVldWVcIixbXCIkYW5pbWF0ZVByb3ZpZGVyXCIsXG5mdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEsYixjLGgpe3JldHVybiBkW2FdLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIGEoYixjLGgpfSl9ZnVuY3Rpb24gYyhhLGIpe2E9YXx8e307dmFyIGM9MDwoYS5hZGRDbGFzc3x8XCJcIikubGVuZ3RoLGQ9MDwoYS5yZW1vdmVDbGFzc3x8XCJcIikubGVuZ3RoO3JldHVybiBiP2MmJmQ6Y3x8ZH12YXIgZD10aGlzLnJ1bGVzPXtza2lwOltdLGNhbmNlbDpbXSxqb2luOltdfTtkLmpvaW4ucHVzaChmdW5jdGlvbihhLGIsZCl7cmV0dXJuIWIuc3RydWN0dXJhbCYmYyhiLm9wdGlvbnMpfSk7ZC5za2lwLnB1c2goZnVuY3Rpb24oYSxiLGQpe3JldHVybiFiLnN0cnVjdHVyYWwmJiFjKGIub3B0aW9ucyl9KTtkLnNraXAucHVzaChmdW5jdGlvbihhLGIsYyl7cmV0dXJuXCJsZWF2ZVwiPT1jLmV2ZW50JiZiLnN0cnVjdHVyYWx9KTtkLnNraXAucHVzaChmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGMuc3RydWN0dXJhbCYmIWIuc3RydWN0dXJhbH0pO2QuY2FuY2VsLnB1c2goZnVuY3Rpb24oYSxcbmIsYyl7cmV0dXJuIGMuc3RydWN0dXJhbCYmYi5zdHJ1Y3R1cmFsfSk7ZC5jYW5jZWwucHVzaChmdW5jdGlvbihhLGIsYyl7cmV0dXJuIDI9PT1jLnN0YXRlJiZiLnN0cnVjdHVyYWx9KTtkLmNhbmNlbC5wdXNoKGZ1bmN0aW9uKGEsYixjKXthPWIub3B0aW9ucztjPWMub3B0aW9ucztyZXR1cm4gYS5hZGRDbGFzcyYmYS5hZGRDbGFzcz09PWMucmVtb3ZlQ2xhc3N8fGEucmVtb3ZlQ2xhc3MmJmEucmVtb3ZlQ2xhc3M9PT1jLmFkZENsYXNzfSk7dGhpcy4kZ2V0PVtcIiQkckFGXCIsXCIkcm9vdFNjb3BlXCIsXCIkcm9vdEVsZW1lbnRcIixcIiRkb2N1bWVudFwiLFwiJCRIYXNoTWFwXCIsXCIkJGFuaW1hdGlvblwiLFwiJCRBbmltYXRlUnVubmVyXCIsXCIkdGVtcGxhdGVSZXF1ZXN0XCIsXCIkJGpxTGl0ZVwiLGZ1bmN0aW9uKGQscyxuLGgsayxELEEsWixJKXtmdW5jdGlvbiB3KGEsYil7dmFyIGM9eihhKSxmPVtdLG09bFtiXTttJiZ1KG0sZnVuY3Rpb24oYSl7YS5ub2RlLmNvbnRhaW5zKGMpJiZmLnB1c2goYS5jYWxsYmFjayl9KTtcbnJldHVybiBmfWZ1bmN0aW9uIEIoYSxiLGMsZil7ZChmdW5jdGlvbigpe3UodyhiLGEpLGZ1bmN0aW9uKGEpe2EoYixjLGYpfSl9KX1mdW5jdGlvbiByKGEsUyxwKXtmdW5jdGlvbiBkKGIsYyxmLHApe0IoYyxhLGYscCk7Yi5wcm9ncmVzcyhjLGYscCl9ZnVuY3Rpb24gZyhiKXtEYShhLHApO2NhKGEscCk7cC5kb21PcGVyYXRpb24oKTtsLmNvbXBsZXRlKCFiKX12YXIgUCxFO2lmKGE9RmEoYSkpUD16KGEpLEU9YS5wYXJlbnQoKTtwPWlhKHApO3ZhciBsPW5ldyBBO2lmKCFQKXJldHVybiBnKCksbDtYKHAuYWRkQ2xhc3MpJiYocC5hZGRDbGFzcz1wLmFkZENsYXNzLmpvaW4oXCIgXCIpKTtYKHAucmVtb3ZlQ2xhc3MpJiYocC5yZW1vdmVDbGFzcz1wLnJlbW92ZUNsYXNzLmpvaW4oXCIgXCIpKTtwLmZyb20mJiFuYShwLmZyb20pJiYocC5mcm9tPW51bGwpO3AudG8mJiFuYShwLnRvKSYmKHAudG89bnVsbCk7dmFyIGU9W1AuY2xhc3NOYW1lLHAuYWRkQ2xhc3MscC5yZW1vdmVDbGFzc10uam9pbihcIiBcIik7XG5pZighdihlKSlyZXR1cm4gZygpLGw7dmFyIE09MDw9W1wiZW50ZXJcIixcIm1vdmVcIixcImxlYXZlXCJdLmluZGV4T2YoUyksaD0heHx8TC5nZXQoUCksZT0haCYmbS5nZXQoUCl8fHt9LGs9ISFlLnN0YXRlO2h8fGsmJjE9PWUuc3RhdGV8fChoPSF0YShhLEUsUykpO2lmKGgpcmV0dXJuIGcoKSxsO00mJksoYSk7aD17c3RydWN0dXJhbDpNLGVsZW1lbnQ6YSxldmVudDpTLGNsb3NlOmcsb3B0aW9uczpwLHJ1bm5lcjpsfTtpZihrKXtpZihiKFwic2tpcFwiLGEsaCxlKSl7aWYoMj09PWUuc3RhdGUpcmV0dXJuIGcoKSxsO1IoYSxlLm9wdGlvbnMscCk7cmV0dXJuIGUucnVubmVyfWlmKGIoXCJjYW5jZWxcIixhLGgsZSkpMj09PWUuc3RhdGU/ZS5ydW5uZXIuZW5kKCk6ZS5zdHJ1Y3R1cmFsP2UuY2xvc2UoKTpSKGEsaC5vcHRpb25zLGUub3B0aW9ucyk7ZWxzZSBpZihiKFwiam9pblwiLGEsaCxlKSlpZigyPT09ZS5zdGF0ZSlSKGEscCx7fSk7ZWxzZSByZXR1cm4gUz1oLmV2ZW50PWUuZXZlbnQscD1SKGEsXG5lLm9wdGlvbnMsaC5vcHRpb25zKSxsfWVsc2UgUihhLHAse30pOyhrPWguc3RydWN0dXJhbCl8fChrPVwiYW5pbWF0ZVwiPT09aC5ldmVudCYmMDxPYmplY3Qua2V5cyhoLm9wdGlvbnMudG98fHt9KS5sZW5ndGh8fGMoaC5vcHRpb25zKSk7aWYoIWspcmV0dXJuIGcoKSxDKGEpLGw7TSYmZihFKTt2YXIgcj0oZS5jb3VudGVyfHwwKSsxO2guY291bnRlcj1yO2dhKGEsMSxoKTtzLiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe3ZhciBiPW0uZ2V0KFApLHY9IWIsYj1ifHx7fSxlPWEucGFyZW50KCl8fFtdLEU9MDxlLmxlbmd0aCYmKFwiYW5pbWF0ZVwiPT09Yi5ldmVudHx8Yi5zdHJ1Y3R1cmFsfHxjKGIub3B0aW9ucykpO2lmKHZ8fGIuY291bnRlciE9PXJ8fCFFKXt2JiYoRGEoYSxwKSxjYShhLHApKTtpZih2fHxNJiZiLmV2ZW50IT09UylwLmRvbU9wZXJhdGlvbigpLGwuZW5kKCk7RXx8QyhhKX1lbHNlIFM9IWIuc3RydWN0dXJhbCYmYyhiLm9wdGlvbnMsITApP1wic2V0Q2xhc3NcIjpiLmV2ZW50LFxuYi5zdHJ1Y3R1cmFsJiZmKGUpLGdhKGEsMiksYj1EKGEsUyxiLm9wdGlvbnMpLGIuZG9uZShmdW5jdGlvbihiKXtnKCFiKTsoYj1tLmdldChQKSkmJmIuY291bnRlcj09PXImJkMoeihhKSk7ZChsLFMsXCJjbG9zZVwiLHt9KX0pLGwuc2V0SG9zdChiKSxkKGwsUyxcInN0YXJ0XCIse30pfSk7cmV0dXJuIGx9ZnVuY3Rpb24gSyhhKXthPXooYSkucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW5nLWFuaW1hdGVdXCIpO3UoYSxmdW5jdGlvbihhKXt2YXIgYj1wYXJzZUludChhLmdldEF0dHJpYnV0ZShcImRhdGEtbmctYW5pbWF0ZVwiKSksYz1tLmdldChhKTtzd2l0Y2goYil7Y2FzZSAyOmMucnVubmVyLmVuZCgpO2Nhc2UgMTpjJiZtLnJlbW92ZShhKX19KX1mdW5jdGlvbiBDKGEpe2E9eihhKTthLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtbmctYW5pbWF0ZVwiKTttLnJlbW92ZShhKX1mdW5jdGlvbiBFKGEsYil7cmV0dXJuIHooYSk9PT16KGIpfWZ1bmN0aW9uIGYoYSl7YT16KGEpO2Rve2lmKCFhfHwxIT09XG5hLm5vZGVUeXBlKWJyZWFrO3ZhciBiPW0uZ2V0KGEpO2lmKGIpe3ZhciBmPWE7IWIuc3RydWN0dXJhbCYmYyhiLm9wdGlvbnMpJiYoMj09PWIuc3RhdGUmJmIucnVubmVyLmVuZCgpLEMoZikpfWE9YS5wYXJlbnROb2RlfXdoaWxlKDEpfWZ1bmN0aW9uIHRhKGEsYixjKXt2YXIgZj1jPSExLGQ9ITEsdjtmb3IoKGE9YS5kYXRhKFwiJG5nQW5pbWF0ZVBpblwiKSkmJihiPWEpO2ImJmIubGVuZ3RoOyl7Znx8KGY9RShiLG4pKTthPWJbMF07aWYoMSE9PWEubm9kZVR5cGUpYnJlYWs7dmFyIGU9bS5nZXQoYSl8fHt9O2R8fChkPWUuc3RydWN0dXJhbHx8TC5nZXQoYSkpO2lmKEthKHYpfHwhMD09PXYpYT1iLmRhdGEoXCIkJG5nQW5pbWF0ZUNoaWxkcmVuXCIpLExhKGEpJiYodj1hKTtpZihkJiYhMT09PXYpYnJlYWs7Znx8KGY9RShiLG4pLGZ8fChhPWIuZGF0YShcIiRuZ0FuaW1hdGVQaW5cIikpJiYoYj1hKSk7Y3x8KGM9RShiLGcpKTtiPWIucGFyZW50KCl9cmV0dXJuKCFkfHx2KSYmZiYmY31mdW5jdGlvbiBnYShhLFxuYixjKXtjPWN8fHt9O2Muc3RhdGU9YjthPXooYSk7YS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5nLWFuaW1hdGVcIixiKTtjPShiPW0uZ2V0KGEpKT95YShiLGMpOmM7bS5wdXQoYSxjKX12YXIgbT1uZXcgayxMPW5ldyBrLHg9bnVsbCxNPXMuJHdhdGNoKGZ1bmN0aW9uKCl7cmV0dXJuIDA9PT1aLnRvdGFsUGVuZGluZ1JlcXVlc3RzfSxmdW5jdGlvbihhKXthJiYoTSgpLHMuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7cy4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXtudWxsPT09eCYmKHg9ITApfSl9KSl9KSxnPUcoaFswXS5ib2R5KSxsPXt9LFA9YS5jbGFzc05hbWVGaWx0ZXIoKSx2PVA/ZnVuY3Rpb24oYSl7cmV0dXJuIFAudGVzdChhKX06ZnVuY3Rpb24oKXtyZXR1cm4hMH0sRGE9aGEoSSk7cmV0dXJue29uOmZ1bmN0aW9uKGEsYixjKXtiPWthKGIpO2xbYV09bFthXXx8W107bFthXS5wdXNoKHtub2RlOmIsY2FsbGJhY2s6Y30pfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIGYoYSxcbmIsYyl7dmFyIGQ9a2EoYik7cmV0dXJuIGEuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiEoYS5ub2RlPT09ZCYmKCFjfHxhLmNhbGxiYWNrPT09YykpfSl9dmFyIGQ9bFthXTtkJiYobFthXT0xPT09YXJndW1lbnRzLmxlbmd0aD9udWxsOmYoZCxiLGMpKX0scGluOmZ1bmN0aW9uKGEsYil7dWEob2EoYSksXCJlbGVtZW50XCIsXCJub3QgYW4gZWxlbWVudFwiKTt1YShvYShiKSxcInBhcmVudEVsZW1lbnRcIixcIm5vdCBhbiBlbGVtZW50XCIpO2EuZGF0YShcIiRuZ0FuaW1hdGVQaW5cIixiKX0scHVzaDpmdW5jdGlvbihhLGIsYyxmKXtjPWN8fHt9O2MuZG9tT3BlcmF0aW9uPWY7cmV0dXJuIHIoYSxiLGMpfSxlbmFibGVkOmZ1bmN0aW9uKGEsYil7dmFyIGM9YXJndW1lbnRzLmxlbmd0aDtpZigwPT09YyliPSEheDtlbHNlIGlmKG9hKGEpKXt2YXIgZj16KGEpLGQ9TC5nZXQoZik7MT09PWM/Yj0hZDooYj0hIWIpP2QmJkwucmVtb3ZlKGYpOkwucHV0KGYsITApfWVsc2UgYj14PSEhYTtyZXR1cm4gYn19fV19XSkucHJvdmlkZXIoXCIkJGFuaW1hdGlvblwiLFxuW1wiJGFuaW1hdGVQcm92aWRlclwiLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSl7cmV0dXJuIGEuZGF0YShcIiQkYW5pbWF0aW9uUnVubmVyXCIpfXZhciBjPXRoaXMuZHJpdmVycz1bXTt0aGlzLiRnZXQ9W1wiJCRqcUxpdGVcIixcIiRyb290U2NvcGVcIixcIiRpbmplY3RvclwiLFwiJCRBbmltYXRlUnVubmVyXCIsXCIkJHJBRlNjaGVkdWxlclwiLGZ1bmN0aW9uKGEsZSxzLG4saCl7dmFyIGs9W10sRD1oYShhKSxBPTAsWj0wLEk9W107cmV0dXJuIGZ1bmN0aW9uKHcsQixyKXtmdW5jdGlvbiBLKGEpe2E9YS5oYXNBdHRyaWJ1dGUoXCJuZy1hbmltYXRlLXJlZlwiKT9bYV06YS5xdWVyeVNlbGVjdG9yQWxsKFwiW25nLWFuaW1hdGUtcmVmXVwiKTt2YXIgYj1bXTt1KGEsZnVuY3Rpb24oYSl7dmFyIGM9YS5nZXRBdHRyaWJ1dGUoXCJuZy1hbmltYXRlLXJlZlwiKTtjJiZjLmxlbmd0aCYmYi5wdXNoKGEpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gQyhhKXt2YXIgYj1bXSxjPXt9O3UoYSxmdW5jdGlvbihhLGYpe3ZhciBkPXooYS5lbGVtZW50KSxcbm09MDw9W1wiZW50ZXJcIixcIm1vdmVcIl0uaW5kZXhPZihhLmV2ZW50KSxkPWEuc3RydWN0dXJhbD9LKGQpOltdO2lmKGQubGVuZ3RoKXt2YXIgZz1tP1widG9cIjpcImZyb21cIjt1KGQsZnVuY3Rpb24oYSl7dmFyIGI9YS5nZXRBdHRyaWJ1dGUoXCJuZy1hbmltYXRlLXJlZlwiKTtjW2JdPWNbYl18fHt9O2NbYl1bZ109e2FuaW1hdGlvbklEOmYsZWxlbWVudDpHKGEpfX0pfWVsc2UgYi5wdXNoKGEpfSk7dmFyIGY9e30sZD17fTt1KGMsZnVuY3Rpb24oYyxtKXt2YXIgZz1jLmZyb20sZT1jLnRvO2lmKGcmJmUpe3ZhciBsPWFbZy5hbmltYXRpb25JRF0saD1hW2UuYW5pbWF0aW9uSURdLHg9Zy5hbmltYXRpb25JRC50b1N0cmluZygpO2lmKCFkW3hdKXt2YXIgQj1kW3hdPXtzdHJ1Y3R1cmFsOiEwLGJlZm9yZVN0YXJ0OmZ1bmN0aW9uKCl7bC5iZWZvcmVTdGFydCgpO2guYmVmb3JlU3RhcnQoKX0sY2xvc2U6ZnVuY3Rpb24oKXtsLmNsb3NlKCk7aC5jbG9zZSgpfSxjbGFzc2VzOkUobC5jbGFzc2VzLGguY2xhc3NlcyksXG5mcm9tOmwsdG86aCxhbmNob3JzOltdfTtCLmNsYXNzZXMubGVuZ3RoP2IucHVzaChCKTooYi5wdXNoKGwpLGIucHVzaChoKSl9ZFt4XS5hbmNob3JzLnB1c2goe291dDpnLmVsZW1lbnQsXCJpblwiOmUuZWxlbWVudH0pfWVsc2UgZz1nP2cuYW5pbWF0aW9uSUQ6ZS5hbmltYXRpb25JRCxlPWcudG9TdHJpbmcoKSxmW2VdfHwoZltlXT0hMCxiLnB1c2goYVtnXSkpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gRShhLGIpe2E9YS5zcGxpdChcIiBcIik7Yj1iLnNwbGl0KFwiIFwiKTtmb3IodmFyIGM9W10sZj0wO2Y8YS5sZW5ndGg7ZisrKXt2YXIgZD1hW2ZdO2lmKFwibmctXCIhPT1kLnN1YnN0cmluZygwLDMpKWZvcih2YXIgZz0wO2c8Yi5sZW5ndGg7ZysrKWlmKGQ9PT1iW2ddKXtjLnB1c2goZCk7YnJlYWt9fXJldHVybiBjLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIGYoYSl7Zm9yKHZhciBiPWMubGVuZ3RoLTE7MDw9YjtiLS0pe3ZhciBmPWNbYl07aWYocy5oYXMoZikmJihmPXMuZ2V0KGYpKGEpKSlyZXR1cm4gZn19XG5mdW5jdGlvbiB0YShhLGMpe2EuZnJvbSYmYS50bz8oYihhLmZyb20uZWxlbWVudCkuc2V0SG9zdChjKSxiKGEudG8uZWxlbWVudCkuc2V0SG9zdChjKSk6YihhLmVsZW1lbnQpLnNldEhvc3QoYyl9ZnVuY3Rpb24gZ2EoKXt2YXIgYT1iKHcpOyFhfHxcImxlYXZlXCI9PT1CJiZyLiQkZG9tT3BlcmF0aW9uRmlyZWR8fGEuZW5kKCl9ZnVuY3Rpb24gbShiKXt3Lm9mZihcIiRkZXN0cm95XCIsZ2EpO3cucmVtb3ZlRGF0YShcIiQkYW5pbWF0aW9uUnVubmVyXCIpO0QodyxyKTtjYSh3LHIpO3IuZG9tT3BlcmF0aW9uKCk7ZyYmYS5yZW1vdmVDbGFzcyh3LGcpO3cucmVtb3ZlQ2xhc3MoXCJuZy1hbmltYXRlXCIpO3guY29tcGxldGUoIWIpfXI9aWEocik7dmFyIEw9MDw9W1wiZW50ZXJcIixcIm1vdmVcIixcImxlYXZlXCJdLmluZGV4T2YoQikseD1uZXcgbih7ZW5kOmZ1bmN0aW9uKCl7bSgpfSxjYW5jZWw6ZnVuY3Rpb24oKXttKCEwKX19KTtpZighYy5sZW5ndGgpcmV0dXJuIG0oKSx4O3cuZGF0YShcIiQkYW5pbWF0aW9uUnVubmVyXCIsXG54KTt2YXIgTT12YSh3LmF0dHIoXCJjbGFzc1wiKSx2YShyLmFkZENsYXNzLHIucmVtb3ZlQ2xhc3MpKSxnPXIudGVtcENsYXNzZXM7ZyYmKE0rPVwiIFwiK2csci50ZW1wQ2xhc3Nlcz1udWxsKTt2YXIgbDtMfHwobD1BLEErPTEpO2sucHVzaCh7ZWxlbWVudDp3LGNsYXNzZXM6TSxldmVudDpCLGNsYXNzQmFzZWRJbmRleDpsLHN0cnVjdHVyYWw6TCxvcHRpb25zOnIsYmVmb3JlU3RhcnQ6ZnVuY3Rpb24oKXt3LmFkZENsYXNzKFwibmctYW5pbWF0ZVwiKTtnJiZhLmFkZENsYXNzKHcsZyl9LGNsb3NlOm19KTt3Lm9uKFwiJGRlc3Ryb3lcIixnYSk7aWYoMTxrLmxlbmd0aClyZXR1cm4geDtlLiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe1o9QTtBPTA7SS5sZW5ndGg9MDt2YXIgYT1bXTt1KGssZnVuY3Rpb24oYyl7YihjLmVsZW1lbnQpJiZhLnB1c2goYyl9KTtrLmxlbmd0aD0wO3UoQyhhKSxmdW5jdGlvbihhKXtmdW5jdGlvbiBjKCl7YS5iZWZvcmVTdGFydCgpO3ZhciBkLGc9YS5jbG9zZSxlPWEuYW5jaG9ycz9cbmEuZnJvbS5lbGVtZW50fHxhLnRvLmVsZW1lbnQ6YS5lbGVtZW50O2IoZSkmJnooZSkucGFyZW50Tm9kZSYmKGU9ZihhKSkmJihkPWUuc3RhcnQpO2Q/KGQ9ZCgpLGQuZG9uZShmdW5jdGlvbihhKXtnKCFhKX0pLHRhKGEsZCkpOmcoKX1hLnN0cnVjdHVyYWw/YygpOihJLnB1c2goe25vZGU6eihhLmVsZW1lbnQpLGZuOmN9KSxhLmNsYXNzQmFzZWRJbmRleD09PVotMSYmKEk9SS5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGIubm9kZS5jb250YWlucyhhLm5vZGUpfSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLmZufSksaChJKSkpfSl9KTtyZXR1cm4geH19XX1dKS5wcm92aWRlcihcIiRhbmltYXRlQ3NzXCIsW1wiJGFuaW1hdGVQcm92aWRlclwiLGZ1bmN0aW9uKGEpe3ZhciBiPUJhKCksYz1CYSgpO3RoaXMuJGdldD1bXCIkd2luZG93XCIsXCIkJGpxTGl0ZVwiLFwiJCRBbmltYXRlUnVubmVyXCIsXCIkdGltZW91dFwiLFwiJGRvY3VtZW50XCIsXCIkc25pZmZlclwiLFwiJCRyQUZTY2hlZHVsZXJcIixmdW5jdGlvbihhLFxuZSxzLG4saCxrLEQpe2Z1bmN0aW9uIEEoYSxiKXt2YXIgYz1hLnBhcmVudE5vZGU7cmV0dXJuKGMuJCRuZ0FuaW1hdGVQYXJlbnRLZXl8fChjLiQkbmdBbmltYXRlUGFyZW50S2V5PSsrcikpK1wiLVwiK2EuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikrXCItXCIrYn1mdW5jdGlvbiBaKGgsZixCLGspe3ZhciBtOzA8Yi5jb3VudChCKSYmKG09Yy5nZXQoQiksbXx8KGY9YmEoZixcIi1zdGFnZ2VyXCIpLGUuYWRkQ2xhc3MoaCxmKSxtPXphKGEsaCxrKSxtLmFuaW1hdGlvbkR1cmF0aW9uPU1hdGgubWF4KG0uYW5pbWF0aW9uRHVyYXRpb24sMCksbS50cmFuc2l0aW9uRHVyYXRpb249TWF0aC5tYXgobS50cmFuc2l0aW9uRHVyYXRpb24sMCksZS5yZW1vdmVDbGFzcyhoLGYpLGMucHV0KEIsbSkpKTtyZXR1cm4gbXx8e319ZnVuY3Rpb24gSShhKXtDLnB1c2goYSk7RC53YWl0VW50aWxRdWlldChmdW5jdGlvbigpe2IuZmx1c2goKTtjLmZsdXNoKCk7Zm9yKHZhciBhPUsub2Zmc2V0V2lkdGgrMSxkPTA7ZDxcbkMubGVuZ3RoO2QrKylDW2RdKGEpO0MubGVuZ3RoPTB9KX1mdW5jdGlvbiB3KGMsZixlKXtmPWIuZ2V0KGUpO2Z8fChmPXphKGEsYyxNYSksXCJpbmZpbml0ZVwiPT09Zi5hbmltYXRpb25JdGVyYXRpb25Db3VudCYmKGYuYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ9MSkpO2IucHV0KGUsZik7Yz1mO2U9Yy5hbmltYXRpb25EZWxheTtmPWMudHJhbnNpdGlvbkRlbGF5O2MubWF4RGVsYXk9ZSYmZj9NYXRoLm1heChlLGYpOmV8fGY7Yy5tYXhEdXJhdGlvbj1NYXRoLm1heChjLmFuaW1hdGlvbkR1cmF0aW9uKmMuYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQsYy50cmFuc2l0aW9uRHVyYXRpb24pO3JldHVybiBjfXZhciBCPWhhKGUpLHI9MCxLPXooaCkuYm9keSxDPVtdO3JldHVybiBmdW5jdGlvbihhLGMpe2Z1bmN0aW9uIGQoKXttKCl9ZnVuY3Rpb24gaCgpe20oITApfWZ1bmN0aW9uIG0oYil7aWYoIShLfHxDJiZEKSl7Sz0hMDtEPSExO2UucmVtb3ZlQ2xhc3MoYSxZKTtlLnJlbW92ZUNsYXNzKGEsXG5XKTttYShnLCExKTtqYShnLCExKTt1KGwsZnVuY3Rpb24oYSl7Zy5zdHlsZVthWzBdXT1cIlwifSk7QihhLGMpO2NhKGEsYyk7aWYoYy5vbkRvbmUpYy5vbkRvbmUoKTtwJiZwLmNvbXBsZXRlKCFiKX19ZnVuY3Rpb24gTChhKXtxLmJsb2NrVHJhbnNpdGlvbiYmamEoZyxhKTtxLmJsb2NrS2V5ZnJhbWVBbmltYXRpb24mJm1hKGcsISFhKX1mdW5jdGlvbiB4KCl7cD1uZXcgcyh7ZW5kOmQsY2FuY2VsOmh9KTttKCk7cmV0dXJueyQkd2lsbEFuaW1hdGU6ITEsc3RhcnQ6ZnVuY3Rpb24oKXtyZXR1cm4gcH0sZW5kOmR9fWZ1bmN0aW9uIE0oKXtmdW5jdGlvbiBiKCl7aWYoIUspe0woITEpO3UobCxmdW5jdGlvbihhKXtnLnN0eWxlW2FbMF1dPWFbMV19KTtCKGEsYyk7ZS5hZGRDbGFzcyhhLFcpO2lmKHEucmVjYWxjdWxhdGVUaW1pbmdTdHlsZXMpe2ZhPWcuY2xhc3NOYW1lK1wiIFwiK1k7JD1BKGcsZmEpO3k9dyhnLGZhLCQpO1E9eS5tYXhEZWxheTtIPU1hdGgubWF4KFEsMCk7Sj15Lm1heER1cmF0aW9uO1xuaWYoMD09PUope20oKTtyZXR1cm59cS5oYXNUcmFuc2l0aW9ucz0wPHkudHJhbnNpdGlvbkR1cmF0aW9uO3EuaGFzQW5pbWF0aW9ucz0wPHkuYW5pbWF0aW9uRHVyYXRpb259aWYocS5hcHBseVRyYW5zaXRpb25EZWxheXx8cS5hcHBseUFuaW1hdGlvbkRlbGF5KXtRPVwiYm9vbGVhblwiIT09dHlwZW9mIGMuZGVsYXkmJmxhKGMuZGVsYXkpP3BhcnNlRmxvYXQoYy5kZWxheSk6UTtIPU1hdGgubWF4KFEsMCk7dmFyIGs7cS5hcHBseVRyYW5zaXRpb25EZWxheSYmKHkudHJhbnNpdGlvbkRlbGF5PVEsaz1bZWEsUStcInNcIl0sbC5wdXNoKGspLGcuc3R5bGVba1swXV09a1sxXSk7cS5hcHBseUFuaW1hdGlvbkRlbGF5JiYoeS5hbmltYXRpb25EZWxheT1RLGs9W3JhLFErXCJzXCJdLGwucHVzaChrKSxnLnN0eWxlW2tbMF1dPWtbMV0pfUY9MUUzKkg7Rz0xRTMqSjtpZihjLmVhc2luZyl7dmFyIHI9Yy5lYXNpbmc7cS5oYXNUcmFuc2l0aW9ucyYmKGs9TytcIlRpbWluZ0Z1bmN0aW9uXCIsbC5wdXNoKFtrLFxucl0pLGcuc3R5bGVba109cik7cS5oYXNBbmltYXRpb25zJiYoaz1WK1wiVGltaW5nRnVuY3Rpb25cIixsLnB1c2goW2sscl0pLGcuc3R5bGVba109cil9eS50cmFuc2l0aW9uRHVyYXRpb24mJnAucHVzaChwYSk7eS5hbmltYXRpb25EdXJhdGlvbiYmcC5wdXNoKHFhKTt4PURhdGUubm93KCk7YS5vbihwLmpvaW4oXCIgXCIpLGgpO24oZCxGKzEuNSpHKTt4YShhLGMpfX1mdW5jdGlvbiBkKCl7bSgpfWZ1bmN0aW9uIGgoYSl7YS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgYj1hLm9yaWdpbmFsRXZlbnR8fGE7YT1iLiRtYW51YWxUaW1lU3RhbXB8fGIudGltZVN0YW1wfHxEYXRlLm5vdygpO2I9cGFyc2VGbG9hdChiLmVsYXBzZWRUaW1lLnRvRml4ZWQoMykpO01hdGgubWF4KGEteCwwKT49RiYmYj49SiYmKEM9ITAsbSgpKX1pZighSylpZihnLnBhcmVudE5vZGUpe3ZhciB4LHA9W10saz1mdW5jdGlvbihhKXtpZihDKUQmJmEmJihEPSExLG0oKSk7ZWxzZSBpZihEPSFhLHkuYW5pbWF0aW9uRHVyYXRpb24paWYoYT1cbm1hKGcsRCksRClsLnB1c2goYSk7ZWxzZXt2YXIgYj1sLGM9Yi5pbmRleE9mKGEpOzA8PWEmJmIuc3BsaWNlKGMsMSl9fSxyPTA8VSYmKHkudHJhbnNpdGlvbkR1cmF0aW9uJiYwPT09VC50cmFuc2l0aW9uRHVyYXRpb258fHkuYW5pbWF0aW9uRHVyYXRpb24mJjA9PT1ULmFuaW1hdGlvbkR1cmF0aW9uKSYmTWF0aC5tYXgoVC5hbmltYXRpb25EZWxheSxULnRyYW5zaXRpb25EZWxheSk7cj9uKGIsTWF0aC5mbG9vcihyKlUqMUUzKSwhMSk6YigpO3QucmVzdW1lPWZ1bmN0aW9uKCl7ayghMCl9O3QucGF1c2U9ZnVuY3Rpb24oKXtrKCExKX19ZWxzZSBtKCl9dmFyIGc9eihhKTtpZighZ3x8IWcucGFyZW50Tm9kZSlyZXR1cm4geCgpO2M9aWEoYyk7dmFyIGw9W10scj1hLmF0dHIoXCJjbGFzc1wiKSx2PUVhKGMpLEssRCxDLHAsdCxILEYsSixHO2lmKDA9PT1jLmR1cmF0aW9ufHwhay5hbmltYXRpb25zJiYhay50cmFuc2l0aW9ucylyZXR1cm4geCgpO3ZhciBhYT1jLmV2ZW50JiZYKGMuZXZlbnQpP1xuYy5ldmVudC5qb2luKFwiIFwiKTpjLmV2ZW50LFI9XCJcIixOPVwiXCI7YWEmJmMuc3RydWN0dXJhbD9SPWJhKGFhLFwibmctXCIsITApOmFhJiYoUj1hYSk7Yy5hZGRDbGFzcyYmKE4rPWJhKGMuYWRkQ2xhc3MsXCItYWRkXCIpKTtjLnJlbW92ZUNsYXNzJiYoTi5sZW5ndGgmJihOKz1cIiBcIiksTis9YmEoYy5yZW1vdmVDbGFzcyxcIi1yZW1vdmVcIikpO2MuYXBwbHlDbGFzc2VzRWFybHkmJk4ubGVuZ3RoJiYoQihhLGMpLE49XCJcIik7dmFyIFk9W1IsTl0uam9pbihcIiBcIikudHJpbSgpLGZhPXIrXCIgXCIrWSxXPWJhKFksXCItYWN0aXZlXCIpLHI9di50byYmMDxPYmplY3Qua2V5cyh2LnRvKS5sZW5ndGg7aWYoISgwPChjLmtleWZyYW1lU3R5bGV8fFwiXCIpLmxlbmd0aHx8cnx8WSkpcmV0dXJuIHgoKTt2YXIgJCxUOzA8Yy5zdGFnZ2VyPyh2PXBhcnNlRmxvYXQoYy5zdGFnZ2VyKSxUPXt0cmFuc2l0aW9uRGVsYXk6dixhbmltYXRpb25EZWxheTp2LHRyYW5zaXRpb25EdXJhdGlvbjowLGFuaW1hdGlvbkR1cmF0aW9uOjB9KTpcbigkPUEoZyxmYSksVD1aKGcsWSwkLE5hKSk7ZS5hZGRDbGFzcyhhLFkpO2MudHJhbnNpdGlvblN0eWxlJiYodj1bTyxjLnRyYW5zaXRpb25TdHlsZV0sZGEoZyx2KSxsLnB1c2godikpOzA8PWMuZHVyYXRpb24mJih2PTA8Zy5zdHlsZVtPXS5sZW5ndGgsdj1BYShjLmR1cmF0aW9uLHYpLGRhKGcsdiksbC5wdXNoKHYpKTtjLmtleWZyYW1lU3R5bGUmJih2PVtWLGMua2V5ZnJhbWVTdHlsZV0sZGEoZyx2KSxsLnB1c2godikpO3ZhciBVPVQ/MDw9Yy5zdGFnZ2VySW5kZXg/Yy5zdGFnZ2VySW5kZXg6Yi5jb3VudCgkKTowOyhhYT0wPT09VSkmJmphKGcsOTk5OSk7dmFyIHk9dyhnLGZhLCQpLFE9eS5tYXhEZWxheTtIPU1hdGgubWF4KFEsMCk7Sj15Lm1heER1cmF0aW9uO3ZhciBxPXt9O3EuaGFzVHJhbnNpdGlvbnM9MDx5LnRyYW5zaXRpb25EdXJhdGlvbjtxLmhhc0FuaW1hdGlvbnM9MDx5LmFuaW1hdGlvbkR1cmF0aW9uO3EuaGFzVHJhbnNpdGlvbkFsbD1xLmhhc1RyYW5zaXRpb25zJiZcblwiYWxsXCI9PXkudHJhbnNpdGlvblByb3BlcnR5O3EuYXBwbHlUcmFuc2l0aW9uRHVyYXRpb249ciYmKHEuaGFzVHJhbnNpdGlvbnMmJiFxLmhhc1RyYW5zaXRpb25BbGx8fHEuaGFzQW5pbWF0aW9ucyYmIXEuaGFzVHJhbnNpdGlvbnMpO3EuYXBwbHlBbmltYXRpb25EdXJhdGlvbj1jLmR1cmF0aW9uJiZxLmhhc0FuaW1hdGlvbnM7cS5hcHBseVRyYW5zaXRpb25EZWxheT1sYShjLmRlbGF5KSYmKHEuYXBwbHlUcmFuc2l0aW9uRHVyYXRpb258fHEuaGFzVHJhbnNpdGlvbnMpO3EuYXBwbHlBbmltYXRpb25EZWxheT1sYShjLmRlbGF5KSYmcS5oYXNBbmltYXRpb25zO3EucmVjYWxjdWxhdGVUaW1pbmdTdHlsZXM9MDxOLmxlbmd0aDtpZihxLmFwcGx5VHJhbnNpdGlvbkR1cmF0aW9ufHxxLmFwcGx5QW5pbWF0aW9uRHVyYXRpb24pSj1jLmR1cmF0aW9uP3BhcnNlRmxvYXQoYy5kdXJhdGlvbik6SixxLmFwcGx5VHJhbnNpdGlvbkR1cmF0aW9uJiYocS5oYXNUcmFuc2l0aW9ucz0hMCx5LnRyYW5zaXRpb25EdXJhdGlvbj1cbkosdj0wPGcuc3R5bGVbTytcIlByb3BlcnR5XCJdLmxlbmd0aCxsLnB1c2goQWEoSix2KSkpLHEuYXBwbHlBbmltYXRpb25EdXJhdGlvbiYmKHEuaGFzQW5pbWF0aW9ucz0hMCx5LmFuaW1hdGlvbkR1cmF0aW9uPUosbC5wdXNoKFtzYSxKK1wic1wiXSkpO2lmKDA9PT1KJiYhcS5yZWNhbGN1bGF0ZVRpbWluZ1N0eWxlcylyZXR1cm4geCgpO251bGw9PWMuZHVyYXRpb24mJjA8eS50cmFuc2l0aW9uRHVyYXRpb24mJihxLnJlY2FsY3VsYXRlVGltaW5nU3R5bGVzPXEucmVjYWxjdWxhdGVUaW1pbmdTdHlsZXN8fGFhKTtGPTFFMypIO0c9MUUzKko7Yy5za2lwQmxvY2tpbmd8fChxLmJsb2NrVHJhbnNpdGlvbj0wPHkudHJhbnNpdGlvbkR1cmF0aW9uLHEuYmxvY2tLZXlmcmFtZUFuaW1hdGlvbj0wPHkuYW5pbWF0aW9uRHVyYXRpb24mJjA8VC5hbmltYXRpb25EZWxheSYmMD09PVQuYW5pbWF0aW9uRHVyYXRpb24pO3dhKGEsYyk7cS5ibG9ja1RyYW5zaXRpb258fGphKGcsITEpO0woSik7cmV0dXJueyQkd2lsbEFuaW1hdGU6ITAsXG5lbmQ6ZCxzdGFydDpmdW5jdGlvbigpe2lmKCFLKXJldHVybiB0PXtlbmQ6ZCxjYW5jZWw6aCxyZXN1bWU6bnVsbCxwYXVzZTpudWxsfSxwPW5ldyBzKHQpLEkoTSkscH19fX1dfV0pLnByb3ZpZGVyKFwiJCRhbmltYXRlQ3NzRHJpdmVyXCIsW1wiJCRhbmltYXRpb25Qcm92aWRlclwiLGZ1bmN0aW9uKGEpe2EuZHJpdmVycy5wdXNoKFwiJCRhbmltYXRlQ3NzRHJpdmVyXCIpO3RoaXMuJGdldD1bXCIkYW5pbWF0ZUNzc1wiLFwiJHJvb3RTY29wZVwiLFwiJCRBbmltYXRlUnVubmVyXCIsXCIkcm9vdEVsZW1lbnRcIixcIiRkb2N1bWVudFwiLFwiJHNuaWZmZXJcIixmdW5jdGlvbihhLGMsZCxlLHMsbil7ZnVuY3Rpb24gaChhKXtyZXR1cm4gYS5yZXBsYWNlKC9cXGJuZy1cXFMrXFxiL2csXCJcIil9ZnVuY3Rpb24gayhhLGIpe1UoYSkmJihhPWEuc3BsaXQoXCIgXCIpKTtVKGIpJiYoYj1iLnNwbGl0KFwiIFwiKSk7cmV0dXJuIGEuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybi0xPT09Yi5pbmRleE9mKGEpfSkuam9pbihcIiBcIil9ZnVuY3Rpb24gRChjLFxuZSxBKXtmdW5jdGlvbiBEKGEpe3ZhciBiPXt9LGM9eihhKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTt1KFtcIndpZHRoXCIsXCJoZWlnaHRcIixcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihhKXt2YXIgZD1jW2FdO3N3aXRjaChhKXtjYXNlIFwidG9wXCI6ZCs9SS5zY3JvbGxUb3A7YnJlYWs7Y2FzZSBcImxlZnRcIjpkKz1JLnNjcm9sbExlZnR9YlthXT1NYXRoLmZsb29yKGQpK1wicHhcIn0pO3JldHVybiBifWZ1bmN0aW9uIHMoKXt2YXIgYz1oKEEuYXR0cihcImNsYXNzXCIpfHxcIlwiKSxkPWsoYyx0KSxjPWsodCxjKSxkPWEobix7dG86RChBKSxhZGRDbGFzczpcIm5nLWFuY2hvci1pbiBcIitkLHJlbW92ZUNsYXNzOlwibmctYW5jaG9yLW91dCBcIitjLGRlbGF5OiEwfSk7cmV0dXJuIGQuJCR3aWxsQW5pbWF0ZT9kOm51bGx9ZnVuY3Rpb24gZigpe24ucmVtb3ZlKCk7ZS5yZW1vdmVDbGFzcyhcIm5nLWFuaW1hdGUtc2hpbVwiKTtBLnJlbW92ZUNsYXNzKFwibmctYW5pbWF0ZS1zaGltXCIpfXZhciBuPUcoeihlKS5jbG9uZU5vZGUoITApKSxcbnQ9aChuLmF0dHIoXCJjbGFzc1wiKXx8XCJcIik7ZS5hZGRDbGFzcyhcIm5nLWFuaW1hdGUtc2hpbVwiKTtBLmFkZENsYXNzKFwibmctYW5pbWF0ZS1zaGltXCIpO24uYWRkQ2xhc3MoXCJuZy1hbmNob3JcIik7dy5hcHBlbmQobik7dmFyIG07Yz1mdW5jdGlvbigpe3ZhciBjPWEobix7YWRkQ2xhc3M6XCJuZy1hbmNob3Itb3V0XCIsZGVsYXk6ITAsZnJvbTpEKGUpfSk7cmV0dXJuIGMuJCR3aWxsQW5pbWF0ZT9jOm51bGx9KCk7aWYoIWMmJihtPXMoKSwhbSkpcmV0dXJuIGYoKTt2YXIgTD1jfHxtO3JldHVybntzdGFydDpmdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtjJiZjLmVuZCgpfXZhciBiLGM9TC5zdGFydCgpO2MuZG9uZShmdW5jdGlvbigpe2M9bnVsbDtpZighbSYmKG09cygpKSlyZXR1cm4gYz1tLnN0YXJ0KCksYy5kb25lKGZ1bmN0aW9uKCl7Yz1udWxsO2YoKTtiLmNvbXBsZXRlKCl9KSxjO2YoKTtiLmNvbXBsZXRlKCl9KTtyZXR1cm4gYj1uZXcgZCh7ZW5kOmEsY2FuY2VsOmF9KX19fWZ1bmN0aW9uIEEoYSxcbmIsYyxlKXt2YXIgaD10KGEpLGY9dChiKSxrPVtdO3UoZSxmdW5jdGlvbihhKXsoYT1EKGMsYS5vdXQsYVtcImluXCJdKSkmJmsucHVzaChhKX0pO2lmKGh8fGZ8fDAhPT1rLmxlbmd0aClyZXR1cm57c3RhcnQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7dShiLGZ1bmN0aW9uKGEpe2EuZW5kKCl9KX12YXIgYj1bXTtoJiZiLnB1c2goaC5zdGFydCgpKTtmJiZiLnB1c2goZi5zdGFydCgpKTt1KGssZnVuY3Rpb24oYSl7Yi5wdXNoKGEuc3RhcnQoKSl9KTt2YXIgYz1uZXcgZCh7ZW5kOmEsY2FuY2VsOmF9KTtkLmFsbChiLGZ1bmN0aW9uKGEpe2MuY29tcGxldGUoYSl9KTtyZXR1cm4gY319fWZ1bmN0aW9uIHQoYyl7dmFyIGQ9Yy5lbGVtZW50LGU9Yy5vcHRpb25zfHx7fTtjLnN0cnVjdHVyYWw/KGUuc3RydWN0dXJhbD1lLmFwcGx5Q2xhc3Nlc0Vhcmx5PSEwLGUuZXZlbnQ9Yy5ldmVudCxcImxlYXZlXCI9PT1lLmV2ZW50JiYoZS5vbkRvbmU9ZS5kb21PcGVyYXRpb24pKTplLmV2ZW50PW51bGw7XG5jPWEoZCxlKTtyZXR1cm4gYy4kJHdpbGxBbmltYXRlP2M6bnVsbH1pZighbi5hbmltYXRpb25zJiYhbi50cmFuc2l0aW9ucylyZXR1cm4gSDt2YXIgST16KHMpLmJvZHk7Yz16KGUpO3ZhciB3PUcoSS5wYXJlbnROb2RlPT09Yz9JOmMpO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gYS5mcm9tJiZhLnRvP0EoYS5mcm9tLGEudG8sYS5jbGFzc2VzLGEuYW5jaG9ycyk6dChhKX19XX1dKS5wcm92aWRlcihcIiQkYW5pbWF0ZUpzXCIsW1wiJGFuaW1hdGVQcm92aWRlclwiLGZ1bmN0aW9uKGEpe3RoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixcIiQkQW5pbWF0ZVJ1bm5lclwiLFwiJCRyQUZNdXRleFwiLFwiJCRqcUxpdGVcIixmdW5jdGlvbihiLGMsZCxlKXtmdW5jdGlvbiBzKGMpe2M9WChjKT9jOmMuc3BsaXQoXCIgXCIpO2Zvcih2YXIgZD1bXSxlPXt9LEE9MDtBPGMubGVuZ3RoO0ErKyl7dmFyIG49Y1tBXSxzPWEuJCRyZWdpc3RlcmVkQW5pbWF0aW9uc1tuXTtzJiYhZVtuXSYmKGQucHVzaChiLmdldChzKSksZVtuXT1cbiEwKX1yZXR1cm4gZH12YXIgbj1oYShlKTtyZXR1cm4gZnVuY3Rpb24oYSxiLGQsZSl7ZnVuY3Rpb24gdCgpe2UuZG9tT3BlcmF0aW9uKCk7bihhLGUpfWZ1bmN0aW9uIHooYSxiLGQsZSxnKXtzd2l0Y2goZCl7Y2FzZSBcImFuaW1hdGVcIjpiPVtiLGUuZnJvbSxlLnRvLGddO2JyZWFrO2Nhc2UgXCJzZXRDbGFzc1wiOmI9W2IscixLLGddO2JyZWFrO2Nhc2UgXCJhZGRDbGFzc1wiOmI9W2IscixnXTticmVhaztjYXNlIFwicmVtb3ZlQ2xhc3NcIjpiPVtiLEssZ107YnJlYWs7ZGVmYXVsdDpiPVtiLGddfWIucHVzaChlKTtpZihhPWEuYXBwbHkoYSxiKSlpZihDYShhLnN0YXJ0KSYmKGE9YS5zdGFydCgpKSxhIGluc3RhbmNlb2YgYylhLmRvbmUoZyk7ZWxzZSBpZihDYShhKSlyZXR1cm4gYTtyZXR1cm4gSH1mdW5jdGlvbiB3KGEsYixkLGUsZyl7dmFyIGY9W107dShlLGZ1bmN0aW9uKGUpe3ZhciBoPWVbZ107aCYmZi5wdXNoKGZ1bmN0aW9uKCl7dmFyIGUsZyxmPSExLGw9ZnVuY3Rpb24oYSl7Znx8XG4oZj0hMCwoZ3x8SCkoYSksZS5jb21wbGV0ZSghYSkpfTtlPW5ldyBjKHtlbmQ6ZnVuY3Rpb24oKXtsKCl9LGNhbmNlbDpmdW5jdGlvbigpe2woITApfX0pO2c9eihoLGEsYixkLGZ1bmN0aW9uKGEpe2woITE9PT1hKX0pO3JldHVybiBlfSl9KTtyZXR1cm4gZn1mdW5jdGlvbiBCKGEsYixkLGUsZyl7dmFyIGY9dyhhLGIsZCxlLGcpO2lmKDA9PT1mLmxlbmd0aCl7dmFyIGgsaztcImJlZm9yZVNldENsYXNzXCI9PT1nPyhoPXcoYSxcInJlbW92ZUNsYXNzXCIsZCxlLFwiYmVmb3JlUmVtb3ZlQ2xhc3NcIiksaz13KGEsXCJhZGRDbGFzc1wiLGQsZSxcImJlZm9yZUFkZENsYXNzXCIpKTpcInNldENsYXNzXCI9PT1nJiYoaD13KGEsXCJyZW1vdmVDbGFzc1wiLGQsZSxcInJlbW92ZUNsYXNzXCIpLGs9dyhhLFwiYWRkQ2xhc3NcIixkLGUsXCJhZGRDbGFzc1wiKSk7aCYmKGY9Zi5jb25jYXQoaCkpO2smJihmPWYuY29uY2F0KGspKX1pZigwIT09Zi5sZW5ndGgpcmV0dXJuIGZ1bmN0aW9uKGEpe3ZhciBiPVtdO2YubGVuZ3RoJiZcbnUoZixmdW5jdGlvbihhKXtiLnB1c2goYSgpKX0pO2IubGVuZ3RoP2MuYWxsKGIsYSk6YSgpO3JldHVybiBmdW5jdGlvbihhKXt1KGIsZnVuY3Rpb24oYil7YT9iLmNhbmNlbCgpOmIuZW5kKCl9KX19fTM9PT1hcmd1bWVudHMubGVuZ3RoJiZuYShkKSYmKGU9ZCxkPW51bGwpO2U9aWEoZSk7ZHx8KGQ9YS5hdHRyKFwiY2xhc3NcIil8fFwiXCIsZS5hZGRDbGFzcyYmKGQrPVwiIFwiK2UuYWRkQ2xhc3MpLGUucmVtb3ZlQ2xhc3MmJihkKz1cIiBcIitlLnJlbW92ZUNsYXNzKSk7dmFyIHI9ZS5hZGRDbGFzcyxLPWUucmVtb3ZlQ2xhc3MsQz1zKGQpLEUsZjtpZihDLmxlbmd0aCl7dmFyIEYsRztcImxlYXZlXCI9PWI/KEc9XCJsZWF2ZVwiLEY9XCJhZnRlckxlYXZlXCIpOihHPVwiYmVmb3JlXCIrYi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStiLnN1YnN0cigxKSxGPWIpO1wiZW50ZXJcIiE9PWImJlwibW92ZVwiIT09YiYmKEU9QihhLGIsZSxDLEcpKTtmPUIoYSxiLGUsQyxGKX1pZihFfHxmKXJldHVybntzdGFydDpmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYyl7bj1cbiEwO3QoKTtjYShhLGUpO2cuY29tcGxldGUoYyl9dmFyIGQsaz1bXTtFJiZrLnB1c2goZnVuY3Rpb24oYSl7ZD1FKGEpfSk7ay5sZW5ndGg/ay5wdXNoKGZ1bmN0aW9uKGEpe3QoKTthKCEwKX0pOnQoKTtmJiZrLnB1c2goZnVuY3Rpb24oYSl7ZD1mKGEpfSk7dmFyIG49ITEsZz1uZXcgYyh7ZW5kOmZ1bmN0aW9uKCl7bnx8KChkfHxIKSh2b2lkIDApLGIodm9pZCAwKSl9LGNhbmNlbDpmdW5jdGlvbigpe258fCgoZHx8SCkoITApLGIoITApKX19KTtjLmNoYWluKGssYik7cmV0dXJuIGd9fX19XX1dKS5wcm92aWRlcihcIiQkYW5pbWF0ZUpzRHJpdmVyXCIsW1wiJCRhbmltYXRpb25Qcm92aWRlclwiLGZ1bmN0aW9uKGEpe2EuZHJpdmVycy5wdXNoKFwiJCRhbmltYXRlSnNEcml2ZXJcIik7dGhpcy4kZ2V0PVtcIiQkYW5pbWF0ZUpzXCIsXCIkJEFuaW1hdGVSdW5uZXJcIixmdW5jdGlvbihhLGMpe2Z1bmN0aW9uIGQoYyl7cmV0dXJuIGEoYy5lbGVtZW50LGMuZXZlbnQsYy5jbGFzc2VzLGMub3B0aW9ucyl9XG5yZXR1cm4gZnVuY3Rpb24oYSl7aWYoYS5mcm9tJiZhLnRvKXt2YXIgYj1kKGEuZnJvbSksbj1kKGEudG8pO2lmKGJ8fG4pcmV0dXJue3N0YXJ0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3JldHVybiBmdW5jdGlvbigpe3UoZCxmdW5jdGlvbihhKXthLmVuZCgpfSl9fXZhciBkPVtdO2ImJmQucHVzaChiLnN0YXJ0KCkpO24mJmQucHVzaChuLnN0YXJ0KCkpO2MuYWxsKGQsZnVuY3Rpb24oYSl7ZS5jb21wbGV0ZShhKX0pO3ZhciBlPW5ldyBjKHtlbmQ6YSgpLGNhbmNlbDphKCl9KTtyZXR1cm4gZX19fWVsc2UgcmV0dXJuIGQoYSl9fV19XSl9KSh3aW5kb3csd2luZG93LmFuZ3VsYXIpO1xuXG4iLCIoZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnYUNhcm91c2VsJywgW10pXG4gICAgICAgIC5kaXJlY3RpdmUoJ2FDYXJvdXNlbCcsIGFkdmFuY2VkQ2Fyb3VzZWwpO1xuXG4gICAgYWR2YW5jZWRDYXJvdXNlbC4kaW5qZWN0ID0gWyckY29tcGlsZScsICckdGltZW91dCcsICckaW9uaWNTY3JvbGxEZWxlZ2F0ZSddO1xuICAgIGZ1bmN0aW9uIGFkdmFuY2VkQ2Fyb3VzZWwoJGNvbXBpbGUsICR0aW1lb3V0LCAkaW9uaWNTY3JvbGxEZWxlZ2F0ZSkge1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdCAgICAgICAgOiAnRScsXG4gICAgICAgICAgICByZXBsYWNlICAgICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgdGVtcGxhdGUgICAgICAgIDogJycsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgICAgOiB7fSxcbiAgICAgICAgICAgIGxpbmsgICAgICAgICAgICA6IGxpbmtGdW5jLFxuICAgICAgICAgICAgY29udHJvbGxlciAgICAgIDogQ29udHJvbGxlcixcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBcyAgICA6ICd2bScsXG4gICAgICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XG4gICAgICAgICAgICAgICAgaXRlbURpcmVjdGl2ZSAgOiAnQCcsXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWxPcHRpb25zOiAnPScsXG4gICAgICAgICAgICAgICAgYXJyYXlQcm92aWRlciAgOiAnPScsXG4gICAgICAgICAgICAgICAgb25TZWxlY3QgICAgICAgOiAnJidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLy8vLy8vLy9cblxuICAgICAgICBmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIGN0cmwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN0cmwpO1xuXG4gICAgICAgICAgICBjdHJsLmVsID0gZWw7XG5cbiAgICAgICAgICAgIGN0cmwub3B0aW9ucy50cmFja0J5ICAgID0gdHlwZW9mIGF0dHIudHJhY2tCeSAhPT0gJ3VuZGVmaW5lZCcgPyBhdHRyLnRyYWNrQnkgOiAnJGluZGV4JztcbiAgICAgICAgICAgIGN0cmwub3B0aW9ucy50cmFja0J5c3RyID0gY3RybC5vcHRpb25zLnRyYWNrQnkgPT09ICckaW5kZXgnID8gJyRpbmRleCcgOiAnaXRlbS4nICsgY3RybC5vcHRpb25zLnRyYWNrQnk7XG5cbiAgICAgICAgICAgIHZhciBhbmltYXRlSW4gPSBjdHJsLm9wdGlvbnMuYW5pbWF0ZUluID8gJyBhbmltYXRlSW4nIDogJyc7XG5cbiAgICAgICAgICAgIC8vIER5bmFtaWMgZGlyZWN0aXZlIGh0bWxcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJhLWNhcm91c2VsXCI+JztcblxuICAgICAgICAgICAgaWYgKGN0cmwub3B0aW9ucy5wdWxsUmVmcmVzaC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwic3Bpbm5lci13cmFwcGVyXCIgbmctaWY9XCJ2bS5vcHRpb25zLnB1bGxSZWZyZXNoLmxvYWRpbmdcIj48aW9uLXNwaW5uZXIgaWNvbj1cImFuZHJvaWRcIj48L2lvbi1zcGlubmVyPjwvZGl2Pic7XG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPHNwYW4gY2xhc3M9XCJwdWxscmVmcmVzaC1pbmRpY2F0b3JcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxzdmcgdmlld0JveD1cIjAgMCA2NCA2NFwiPjxnPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGNpcmNsZSBzdHJva2Utd2lkdGg9XCI2XCIgc3Ryb2tlLWRhc2hhcnJheT1cIjEzNS4yNjI2MTIzOTE0NDI4N1wiIHN0cm9rZS1kYXNob2Zmc2V0PVwiMTYuNTEzNzE0NzQ1NTYyMTRcIiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ3I9XCIyNlwiIGN4PVwiMzJcIiBjeT1cIjMyXCIgZmlsbD1cIm5vbmVcIiB0cmFuc2Zvcm09XCJzY2FsZSgxLDEpIHRyYW5zbGF0ZSgwLDApIHJvdGF0ZSgwLDMyLDMyKVwiPjwvY2lyY2xlPjwvZz4nICtcbiAgICAgICAgICAgICAgICAgICAgJzwvc3ZnPicgK1xuICAgICAgICAgICAgICAgICAgICAnPC9zcGFuPic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGh0bWwgKz0gJzxpb24tc2Nyb2xsICc7XG5cbiAgICAgICAgICAgIGlmIChjdHJsLm9wdGlvbnMucHVsbFJlZnJlc2guYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgaHRtbCArPSAnb24tc2Nyb2xsPVwidm0ub25TY3JvbGwoKVwiICc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGh0bWwgKz0gJ3Njcm9sbGJhci14PVwiZmFsc2VcIiBkZWxlZ2F0ZS1oYW5kbGU9XCInICsgY3RybC5vcHRpb25zLmNhcm91c2VsSWQgKyAnXCIgJyArXG4gICAgICAgICAgICAgICAgJ3pvb21pbmc9XCJmYWxzZVwiIGRpcmVjdGlvbj1cInhcIiBvdmVyZmxvdy1zY3JvbGw9XCJmYWxzZVwiIGhhcy1ib3VuY2luZz1cInRydWVcIj4nICtcbiAgICAgICAgICAgICAgICAnPG5hdiBzdHlsZT1cInZpc2liaWxpdHk6aGlkZGVuO1wiPicgK1xuICAgICAgICAgICAgICAgICc8dWw+IDxsaSAnICtcbiAgICAgICAgICAgICAgICAnbmctcmVwZWF0PVwiaXRlbSBpbiB2bS5hcnJheVByb3ZpZGVyIHRyYWNrIGJ5ICcgK1xuICAgICAgICAgICAgICAgIGN0cmwub3B0aW9ucy50cmFja0J5c3RyICsgJ1wiJyArXG4gICAgICAgICAgICAgICAgJ2NsYXNzPVwiY2Fyb3VzZWwtaXRlbScgKyBhbmltYXRlSW4gKyAnXCInICtcbiAgICAgICAgICAgICAgICAnbmctY2xhc3M9XCJ7XFwnYWN0aXZlXFwnOnZtLml0ZW1BY3RpdmUgPT09IGl0ZW19XCI+JyArXG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbURpcmVjdGl2ZSgpICtcbiAgICAgICAgICAgICAgICAnPC9saT4nICtcbiAgICAgICAgICAgICAgICAnPC91bD48L25hdj48L2lvbi1zY3JvbGw+PC9kaXY+JztcblxuICAgICAgICAgICAgLy8gQ29tcGlsZSBkeW5hbWljIHRlbXBsYXRlXG4gICAgICAgICAgICBodG1sID0gJGNvbXBpbGUoaHRtbCkoc2NvcGUpO1xuICAgICAgICAgICAgZWwuYXBwZW5kKGh0bWwpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaHRtbClcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogJHRpbWVvdXQgc28gbmctcmVwZWF0IGlzIGZpbmlzaGVkIGluIG9yZGVyIHRvIGNhbGN1bGF0ZSB3aWR0aCBvZiBjYXJvdXNlbFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN0cmwuYXJyYXlQcm92aWRlciAmJiBjdHJsLmFycmF5UHJvdmlkZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjdHJsLmluaXRDYXJvdXNlbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhbGxvd1ZlcnRpY2FsU2Nyb2xsKCk7XG4gICAgICAgICAgICB9LCAwKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlSXRlbURpcmVjdGl2ZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSBjdHJsLm9wdGlvbnMudGVtcGxhdGUgIT09IG51bGwgPyAndGVtcGxhdGU9XCInICsgY3RybC5vcHRpb25zLnRlbXBsYXRlICsgJ1wiJyA6ICcnO1xuICAgICAgICAgICAgICAgIGN0cmwuaXRlbURpcmVjdGl2ZSA9IHR5cGVvZiBjdHJsLml0ZW1EaXJlY3RpdmUgPT09ICd1bmRlZmluZWQnID8gJ2Nhcm91c2VsLWdlbmVyaWMtaXRlbScgOiBjdHJsLml0ZW1EaXJlY3RpdmU7XG4gICAgICAgICAgICAgICAgdmFyIGRpcmVjdGl2ZSA9ICc8JyArIGN0cmwuaXRlbURpcmVjdGl2ZSArICcgbmctbW9kZWw9XCJpdGVtXCIgJyArIHRlbXBsYXRlICtcbiAgICAgICAgICAgICAgICAgICAgJ29uLXNlbGVjdD1cInZtLnNlbGVjdEl0ZW0oaXRlbSlcIiBjYXJvdXNlbC1vcHRpb25zPVwibWVudUNhcm91c2VsLm9wdGlvbnNcIiAnO1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZSArPSAnPjwvJyArIGN0cmwuaXRlbURpcmVjdGl2ZSArICc+JztcblxuICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjcmVhdGVJdGVtRGlyZWN0aXZlKCkpXG5cblxuICAgICAgICAgICAgLy8gdGhpcyBtZXRob2QgYWxsb3dzIHRvIHNjcm9sbCB0aGUgcGFnZSBiZWxvdyB0aGUgY2Fyb3VzZWxcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFsbG93VmVydGljYWxTY3JvbGwoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN2ICAgICAgICA9ICRpb25pY1Njcm9sbERlbGVnYXRlLiRnZXRCeUhhbmRsZShjdHJsLm9wdGlvbnMuY2Fyb3VzZWxJZCkuZ2V0U2Nyb2xsVmlldygpO1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBzdi5fX2NvbnRhaW5lcjtcblxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbHRvdWNoU3RhcnQgPSBzdi50b3VjaFN0YXJ0O1xuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbHRvdWNoTW92ZSAgPSBzdi50b3VjaE1vdmU7XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHN2LnRvdWNoU3RhcnQpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHN2LnRvdWNoTW92ZSk7XG5cbiAgICAgICAgICAgICAgICBzdi50b3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWx0b3VjaFN0YXJ0LmFwcGx5KHN2LCBbZV0pO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBzdi50b3VjaE1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbHRvdWNoTW92ZS5hcHBseShzdiwgW2VdKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBzdi50b3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgc3YudG91Y2hNb3ZlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckZWxlbWVudCcsICckdGltZW91dCcsICckd2luZG93JywgJyRpb25pY1Njcm9sbERlbGVnYXRlJ107XG4gICAgZnVuY3Rpb24gQ29udHJvbGxlcigkc2NvcGUsICRlbGVtZW50LCAkdGltZW91dCwgJHdpbmRvdywgJGlvbmljU2Nyb2xsRGVsZWdhdGUpIHtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgXG4gICAgICAgIHZtLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzaG93U2Nyb2xsICAgIDogZmFsc2UsXG4gICAgICAgICAgICBjYXJvdXNlbElkICAgIDogJ215LWNhcm91c2VsJyxcbiAgICAgICAgICAgIHRlbXBsYXRlICAgICAgOiBudWxsLFxuICAgICAgICAgICAgYWxpZ24gICAgICAgICA6ICdsZWZ0JyxcbiAgICAgICAgICAgIGNlbnRlck9uU2VsZWN0OiB0cnVlLFxuICAgICAgICAgICAgd2lkdGhJdGVtICAgICA6IDAsXG4gICAgICAgICAgICBoZWlnaHRJdGVtICAgIDogMCxcbiAgICAgICAgICAgIHRyYWNrQnkgICAgICAgOiAnJGluZGV4JyxcbiAgICAgICAgICAgIHNlbGVjdEZpcnN0ICAgOiB0cnVlLFxuICAgICAgICAgICAgc2VsZWN0QXRTdGFydCA6IHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogbnVsbCxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICBpbmRleCAgIDogLTFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwdWxsUmVmcmVzaCAgIDoge1xuICAgICAgICAgICAgICAgIGFjdGl2ZSAgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjYWxsQmFjazogYW5ndWxhci5ub29wLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbmltYXRlSW4gICAgIDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBUElcbiAgICAgICAgdm0uaW5pdENhcm91c2VsID0gaW5pdENhcm91c2VsO1xuICAgICAgICB2bS5zZWxlY3RJdGVtICAgPSBzZWxlY3RJdGVtO1xuICAgICAgICB2bS5vblNjcm9sbCAgICAgPSBvblNjcm9sbDtcblxuICAgICAgICBjb25zb2xlLmxvZyh2bSk7XG5cbiAgICAgICAgYWN0aXZhdGUoKTtcblxuICAgICAgICAvLy8vLy8vLy8vXG5cbiAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgICAgICAgICBhbmd1bGFyLmV4dGVuZCh2bS5vcHRpb25zLCB2bS5jYXJvdXNlbE9wdGlvbnMpO1xuXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCdhLWNhcm91c2VsLmFycmF5dXBkYXRlZCcsIG9uQXJyYXlQcm92aWRlclVwZGF0ZWQpO1xuICAgICAgICAgICAgJHNjb3BlLiRvbignYS1jYXJvdXNlbC5kZXNhY3RpdmF0ZUl0ZW0nLCBkZXNhY3RpdmVJdGVtU2VsZWN0ZWQpO1xuXG4gICAgICAgICAgICBpZiAodm0ub3B0aW9ucy5wdWxsUmVmcmVzaC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKCdhLWNhcm91c2VsLnB1bGxyZWZyZXNoLmRvbmUnLCBvbkVuZFJlZnJlc2gpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLy8vLy8vLy8vXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gZVxuICAgICAgICAgICAgICogQHBhcmFtIHt7Y2Fyb3VzZWxJZDpzdHJpbmd9fSBwYXJhbVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBvbkFycmF5UHJvdmlkZXJVcGRhdGVkKGUsIHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29uQXJyYXlQcm92aWRlclVwZGF0ZWQnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJhbSlcbiAgICAgICAgICAgICAgICB2YXIgY2Fyb3VzZWxJZDtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBjYXJvdXNlbElkID0gcGFyYW0uY2Fyb3VzZWxJZDtcbiAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5leHRlbmQodm0ub3B0aW9ucywgcGFyYW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcm91c2VsSWQgPSBwYXJhbTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY2Fyb3VzZWxJZCA9PT0gdm0ub3B0aW9ucy5jYXJvdXNlbElkKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KHZtLmluaXRDYXJvdXNlbCwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gZVxuICAgICAgICAgICAgICogQHBhcmFtIHt7aWRDb250YWluczpzdHJpbmcsIGV4Y2VwdDpzdHJpbmd9fSBwYXJhbVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBkZXNhY3RpdmVJdGVtU2VsZWN0ZWQoZSwgcGFyYW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgaWRDb250YWlucyA9IHBhcmFtLmlkQ29udGFpbnM7XG4gICAgICAgICAgICAgICAgdmFyIGV4Y2VwdCAgICAgPSBwYXJhbS5leGNlcHQ7XG5cbiAgICAgICAgICAgICAgICBpZiAodm0ub3B0aW9ucy5jYXJvdXNlbElkLmluZGV4T2YoaWRDb250YWlucykgPj0gMCAmJiB2bS5vcHRpb25zLmNhcm91c2VsSWQgIT09IGV4Y2VwdCkge1xuICAgICAgICAgICAgICAgICAgICB2bS5pdGVtQWN0aXZlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbml0Q2Fyb3VzZWwoKSB7XG4gICAgICAgICAgICB2YXIgY2Fyb3VzZWxJdGVtcyA9ICRlbGVtZW50LmZpbmQoJ2xpJyk7XG4gICAgICAgICAgICB2YXIgdG90YWxJdGVtcyAgICA9IGNhcm91c2VsSXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIG51bUl0ZW1zICAgICAgPSBhbmd1bGFyLmVsZW1lbnQoY2Fyb3VzZWxJdGVtcykubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIHdpZHRoQ2Fyb3VzZWwgPSAwO1xuXG4gICAgICAgICAgICB2YXIgbWFyZ2luTGVmdCAgPSAwO1xuICAgICAgICAgICAgdmFyIG1hcmdpblJpZ2h0ID0gMDtcblxuICAgICAgICAgICAgdmFyIGluZGV4ICAgICAgICAgICAgICA9IDA7XG4gICAgICAgICAgICB2YXIgbnVtVGltZXNEb21DaGVja2VkID0gMDtcbiAgICAgICAgICAgIHZhciBudW1SZXRyeUJ1aWxkICAgICAgICAgICA9IDE1O1xuXG4gICAgICAgICAgICB2bS5pdGVtQWN0aXZlID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKG51bUl0ZW1zID4gMCkge1xuICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tET00oKTtcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdUcnlpbmcgdG8gY3JlYXRlIGEgY2Fyb3VzZWwgZnJvbSBhbiBlbXB0eSBhcnJheScsIHZtLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGVja0RPTSgpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVja2luZyBpZiBjYXJvdXNlbCBpdGVtcyBhcmUgaW4gRE9NXG4gICAgICAgICAgICAgICAgdmFyIHcgPSBwYXJzZUludChjYXJvdXNlbEl0ZW1zW3RvdGFsSXRlbXMgLSAxXS5vZmZzZXRXaWR0aCk7XG4gICAgICAgICAgICAgICAgdmFyIGggPSBwYXJzZUludChjYXJvdXNlbEl0ZW1zW3RvdGFsSXRlbXMgLSAxXS5vZmZzZXRIZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHcgPiAwICYmIGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NOb3coKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW0lORk9dIENyZWF0aW5nIENhcm91c2VsIGJ1dCBET00gbm90IHJlYWR5IHlldC4uLicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1UaW1lc0RvbUNoZWNrZWQgPCBudW1SZXRyeUJ1aWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tET00oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbRVJST1JdIFNpemUgaXRlbSBDYXJvdXNlbCBjb3VsZCBub3QgYmUgZGV0ZXJtaW5lZCcsIHZtLm9wdGlvbnMuY2Fyb3VzZWxJZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBudW1UaW1lc0RvbUNoZWNrZWQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NOb3coKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdEl0ZW1BdFN0YXJ0ID0gdm0ub3B0aW9ucy5zZWxlY3RBdFN0YXJ0LnByb3BlcnR5ICE9PSBudWxsO1xuICAgICAgICAgICAgICAgIHZhciBtb2RlbEl0ZW07XG5cbiAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goY2Fyb3VzZWxJdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxJdGVtICAgICAgICAgICAgPSB2bS5hcnJheVByb3ZpZGVyW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxJdGVtLmNhcm91c2VsSWQgPSB2bS5vcHRpb25zLmNhcm91c2VsSWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgd2lkdGhDYXJvdXNlbCArPSBpdGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICB2bS5vcHRpb25zLndpZHRoSXRlbSAgPSBNYXRoLm1heChpdGVtLm9mZnNldFdpZHRoLCB2bS5vcHRpb25zLndpZHRoSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHZtLm9wdGlvbnMuaGVpZ2h0SXRlbSA9IE1hdGgubWF4KGl0ZW0ub2Zmc2V0SGVpZ2h0LCB2bS5vcHRpb25zLmhlaWdodEl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHZtLmFycmF5UHJvdmlkZXJbaW5kZXhdLndpZHRoSXRlbSA9IGl0ZW0ub2Zmc2V0V2lkdGg7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQXMgd2UgY2FuIHNlbGVjdCBhdCBzdGFydCBhbiBpdGVtIHdpdGggYSBwcm9wZXJ0eSBvZiBjZXJ0YWluIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGNoZWNrIGhlcmUgaXRzIGluZGV4IGluIHRoZSBBcnJheVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0SXRlbUF0U3RhcnQgJiYgdm0ub3B0aW9ucy5zZWxlY3RBdFN0YXJ0LmluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsSXRlbVt2bS5vcHRpb25zLnNlbGVjdEF0U3RhcnQucHJvcGVydHldID09PSB2bS5vcHRpb25zLnNlbGVjdEF0U3RhcnQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5vcHRpb25zLnNlbGVjdEF0U3RhcnQuaW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodm0ub3B0aW9ucy5jZW50ZXJPblNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2VudGVyWCAgID0gJHdpbmRvdy5pbm5lcldpZHRoICogMC41O1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmlyc3RJdGVtID0gY2Fyb3VzZWxJdGVtc1swXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RJdGVtICA9IGNhcm91c2VsSXRlbXNbbnVtSXRlbXMgLSAxXTtcblxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0ICA9IGNlbnRlclggLSBmaXJzdEl0ZW0ub2Zmc2V0V2lkdGggKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0ID0gY2VudGVyWCAtIGxhc3RJdGVtLm9mZnNldFdpZHRoICogMC41O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGFkZCBtYXJnaW4gb24gYm90aCBzaWRlIHRvIGJlIGFibGUgdG8gY2VudGVyIHRoZSBmaXJzdCBhbmQgbGFzdCBpdGVtXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoQ2Fyb3VzZWwgKz0gbWFyZ2luTGVmdCArIG1hcmdpblJpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgIHZtLm9wdGlvbnMubWF4U2Nyb2xsID0gJHdpbmRvdy5pbm5lcldpZHRoIC0gd2lkdGhDYXJvdXNlbDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbiB0aGUgY2Fyb3VzZWwgb24gZmlyc3QgaXRlbVxuICAgICAgICAgICAgICAgICAgICBpZiAodm0ub3B0aW9ucy5hbGlnbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGlvbmljU2Nyb2xsRGVsZWdhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuJGdldEJ5SGFuZGxlKHZtLm9wdGlvbnMuY2Fyb3VzZWxJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2Nyb2xsVG8odm0ub3B0aW9ucy5tYXhTY3JvbGwgKiAtMSwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZtLm9wdGlvbnMuYWxpZ24gPT09ICdjZW50ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaW9uaWNTY3JvbGxEZWxlZ2F0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kZ2V0QnlIYW5kbGUodm0ub3B0aW9ucy5jYXJvdXNlbElkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zY3JvbGxUbyh2bS5vcHRpb25zLm1heFNjcm9sbCAqIC0wLjUsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpb25pY1Njcm9sbERlbGVnYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLiRnZXRCeUhhbmRsZSh2bS5vcHRpb25zLmNhcm91c2VsSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNjcm9sbFRvKDAsIDAsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aENhcm91c2VsICs9IDQ7IC8vICsgNCB0byBhdm9pZCBsaW5lIGJyZWFrIHdoZW4gdGV4dCBnb2luZyBib2xkXG4gICAgICAgICAgICAgICAgICAgIHZtLm9wdGlvbnMubWF4U2Nyb2xsID0gJHdpbmRvdy5pbm5lcldpZHRoIC0gd2lkdGhDYXJvdXNlbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2bS5vcHRpb25zLndpZHRoQ2Fyb3VzZWwgPSB3aWR0aENhcm91c2VsO1xuXG4gICAgICAgICAgICAgICAgLy8gU2V0IEFjdGl2ZSBpdGVtIGF0IHN0YXJ0XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3RJdGVtQXRTdGFydCAmJiB2bS5vcHRpb25zLnNlbGVjdEZpcnN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5vcHRpb25zLmFsaWduID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJdGVtQWN0aXZlKHZtLmFycmF5UHJvdmlkZXJbbnVtSXRlbXMgLSAxXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJdGVtQWN0aXZlKHZtLmFycmF5UHJvdmlkZXJbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdEl0ZW1BdFN0YXJ0ICYmIHZtLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5pbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW0odm0uYXJyYXlQcm92aWRlclt2bS5vcHRpb25zLnNlbGVjdEF0U3RhcnQuaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEFwcGx5IGlubGluZS1jc3MgdG8gY2Fyb3VzZWwgYWNjb3JkaW5nIHRvIGl0ZW1zIHdpZHRoIGFuZCBoZWlnaHRcbiAgICAgICAgICAgICAgICB2bS5uYXZFbGVtID0gJGVsZW1lbnQuZmluZCgnbmF2Jyk7XG4gICAgICAgICAgICAgICAgdm0ubmF2RWxlbS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnICAgICAgIDogd2lkdGhDYXJvdXNlbCArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnICAgICAgOiB2bS5vcHRpb25zLmhlaWdodEl0ZW0gKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eScgIDogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZy1sZWZ0JzogbWFyZ2luTGVmdCArICdweCdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIENhY2hlIHB1bGwgcmVmcmVzaCBET00gZWxlbWVudHMgKGJvdGggd3JhcHBlciBhbmQgc3ZnIGVsZW0pXG4gICAgICAgICAgICAgICAgaWYgKHZtLm9wdGlvbnMucHVsbFJlZnJlc2guYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLnB1bGxyZWZyZXNoSW5kaWNhdG9yID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hLWNhcm91c2VsIC5wdWxscmVmcmVzaC1pbmRpY2F0b3InKSk7XG4gICAgICAgICAgICAgICAgICAgIHZtLnN2Z0VsZW0gICAgICAgICAgICAgID0gJGVsZW1lbnQuZmluZCgnZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNlbGVjdEl0ZW0oaXRlbSkge1xuICAgICAgICAgICAgdmFyIHNjcm9sbFBvcywgaTtcblxuICAgICAgICAgICAgc2V0SXRlbUFjdGl2ZShpdGVtKTtcblxuICAgICAgICAgICAgLy8gQ2VudGVyIGNhcm91c2VsXG4gICAgICAgICAgICBpZiAodm0ub3B0aW9ucy5jZW50ZXJPblNlbGVjdCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4RnJvbUlkKGl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgc2Nyb2xsUG9zID0gMDtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxQb3MgPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxQb3MgKz0gKHZtLmFycmF5UHJvdmlkZXJbaV0ud2lkdGhJdGVtICsgdm0uYXJyYXlQcm92aWRlcltpICsgMV0ud2lkdGhJdGVtKSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRpb25pY1Njcm9sbERlbGVnYXRlLiRnZXRCeUhhbmRsZSh2bS5vcHRpb25zLmNhcm91c2VsSWQpLnNjcm9sbFRvKHNjcm9sbFBvcywgMCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogT25seSBmb3Igd2hlbiBwdWxsLXJlZnJlc2ggYWN0aXZlIGlzIHNldFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XG4gICAgICAgICAgICB2YXIgcGN0O1xuICAgICAgICAgICAgdmFyIHBvcyAgICAgICAgICAgICA9ICRpb25pY1Njcm9sbERlbGVnYXRlLiRnZXRCeUhhbmRsZSh2bS5vcHRpb25zLmNhcm91c2VsSWQpLmdldFNjcm9sbFBvc2l0aW9uKCkubGVmdDtcbiAgICAgICAgICAgIHZhciBwY3RQdWxsICAgICAgICAgPSAwO1xuICAgICAgICAgICAgdmFyIHBjdFJvdEluZGljYXRvciA9IDA7XG5cbiAgICAgICAgICAgIGlmICh2bS5vcHRpb25zLm1heFNjcm9sbCA8IDApIHtcbiAgICAgICAgICAgICAgICBwY3QgPSBwb3MgLyB2bS5vcHRpb25zLm1heFNjcm9sbCAqIC0xO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBOTyBtYXhTY3JvbGwgLT4gcHJvYmFibHkgbWVhbnMgdGhhdCB0aGVyZSBhcmUgb25seSAxIG9yIDIgaXRlbXMgKG5vIG5lZWQgdG8gc2Nyb2xsKVxuICAgICAgICAgICAgICAgIC8vIHdlIGZha2UgYSBwZXJjZW50YWdlXG4gICAgICAgICAgICAgICAgcGN0ID0gcG9zIC8gMTA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwY3QgPiAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBpeGVsUHVsbCA9IHBvcyAtIHZtLm9wdGlvbnMubWF4U2Nyb2xsICogLTE7XG4gICAgICAgICAgICAgICAgcGN0UHVsbCAgICAgICA9IHBpeGVsUHVsbCAvICR3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICB2bS5wdWxscmVmcmVzaEluZGljYXRvci5jc3Moeyd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWCgnICsgcGN0Um90SW5kaWNhdG9yICogLTU2ICsgJ3B4KSd9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBjdFB1bGwgPiAwLjI1ICYmIHBvcyA+IDApIHtcbiAgICAgICAgICAgICAgICB2bS5wdWxscmVmcmVzaEluZGljYXRvci5jc3Moeyd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWCgwcHgpJywgZGlzcGxheTogJ25vbmUnfSk7XG4gICAgICAgICAgICAgICAgb25QdWxsUmVmcmVzaCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwY3RSb3RJbmRpY2F0b3IgPSBwY3RQdWxsIC8gMC4yO1xuICAgICAgICAgICAgICAgIHZtLnN2Z0VsZW1bMF0uc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCAncm90YXRlKCcgKyBwY3RSb3RJbmRpY2F0b3IgKiAzNjAgKyAnIDMyIDMyKScpO1xuICAgICAgICAgICAgICAgIHZtLnB1bGxyZWZyZXNoSW5kaWNhdG9yLmNzcyh7J3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVYKCcgKyBwY3RSb3RJbmRpY2F0b3IgKiAtNTYgKyAncHgpJ30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLVxuICAgICAgICAvLyBQUklWQVRFXG4gICAgICAgIC8vIC0tLS0tLS0tLS1cbiAgICAgICAgZnVuY3Rpb24gc2V0SXRlbUFjdGl2ZShpdGVtKSB7XG4gICAgICAgICAgICB2bS5pdGVtQWN0aXZlID0gaXRlbTtcblxuICAgICAgICAgICAgLy8gQ2FsbGJhY2sgb24gc2VsZWN0XG4gICAgICAgICAgICB2bS5vblNlbGVjdC5jYWxsKG51bGwsIHtpdGVtOiBpdGVtfSk7XG5cbiAgICAgICAgICAgICRzY29wZS4kYnJvYWRjYXN0KCdhLWNhcm91c2VsLml0ZW1zZWxlY3RlZCcsIGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SW5kZXhGcm9tSWQoaXRlbSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB2bS5hcnJheVByb3ZpZGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZtLmFycmF5UHJvdmlkZXJbaV0gPT09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHVsbCBSZWZyZXNoXG4gICAgICAgIGZ1bmN0aW9uIG9uUHVsbFJlZnJlc2goKSB7XG4gICAgICAgICAgICBpZiAoIXZtLm9wdGlvbnMucHVsbFJlZnJlc2gubG9hZGluZykge1xuICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2bS5vcHRpb25zLnB1bGxSZWZyZXNoLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJGlvbmljU2Nyb2xsRGVsZWdhdGUuJGdldEJ5SGFuZGxlKHZtLm9wdGlvbnMuY2Fyb3VzZWxJZCkuZnJlZXplU2Nyb2xsKHRydWUpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHNvbWUgd2lkdGggdG8gdGhlIG5hdiB0byBtYWtlIHNvbWUgcm9vbSBmb3IgdGhlIHNwaW5uZXJcbiAgICAgICAgICAgICAgICB2bS5uYXZFbGVtLmNzcyh7J3dpZHRoJzogdm0ub3B0aW9ucy53aWR0aENhcm91c2VsICsgNDUgKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgJGlvbmljU2Nyb2xsRGVsZWdhdGUuJGdldEJ5SGFuZGxlKHZtLm9wdGlvbnMuY2Fyb3VzZWxJZCkucmVzaXplKCk7XG5cbiAgICAgICAgICAgICAgICB2bS5vcHRpb25zLnB1bGxSZWZyZXNoLmNhbGxCYWNrKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uRW5kUmVmcmVzaCgpIHtcbiAgICAgICAgICAgIHZtLm9wdGlvbnMucHVsbFJlZnJlc2gubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICB2bS5uYXZFbGVtLmNzcyh7J3dpZHRoJzogdm0ub3B0aW9ucy53aWR0aENhcm91c2VsICsgJ3B4J30pO1xuICAgICAgICAgICAgJGlvbmljU2Nyb2xsRGVsZWdhdGUuJGdldEJ5SGFuZGxlKHZtLm9wdGlvbnMuY2Fyb3VzZWxJZCkucmVzaXplKCk7XG5cbiAgICAgICAgICAgICRpb25pY1Njcm9sbERlbGVnYXRlLiRnZXRCeUhhbmRsZSh2bS5vcHRpb25zLmNhcm91c2VsSWQpLmZyZWV6ZVNjcm9sbChmYWxzZSk7XG4gICAgICAgICAgICB2bS5wdWxscmVmcmVzaEluZGljYXRvci5jc3Moeyd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWCgwcHgpJywgZGlzcGxheTogJ2Jsb2NrJ30pO1xuICAgICAgICB9XG4gICAgfVxufSkoKTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBOYW1lOiAgICAgICAgICBuZy1rbm9iXG4gKiBEZXNjcmlwdGlvbjogICBBbmd1bGFyLmpzIEtub2IgZGlyZWN0aXZlXG4gKiBWZXJzaW9uOiAgICAgICAwLjEuM1xuICogSG9tZXBhZ2U6ICAgICAgaHR0cHM6Ly9yYWRtaWUuZ2l0aHViLmlvL25nLWtub2JcbiAqIExpY2VuY2U6ICAgICAgIE1JVFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cInVzZSBzdHJpY3RcIjshZnVuY3Rpb24oKXt2YXIgdWk9e30sS25vYj1mdW5jdGlvbihlbGVtZW50LHZhbHVlLG9wdGlvbnMpe3RoaXMuZWxlbWVudD1lbGVtZW50LHRoaXMudmFsdWU9dmFsdWUsdGhpcy5vcHRpb25zPW9wdGlvbnMsdGhpcy5pbkRyYWc9ITF9O0tub2IucHJvdG90eXBlLnZhbHVlVG9SYWRpYW5zPWZ1bmN0aW9uKHZhbHVlLHZhbHVlRW5kLGFuZ2xlRW5kLGFuZ2xlU3RhcnQsdmFsdWVTdGFydCl7cmV0dXJuIHZhbHVlRW5kPXZhbHVlRW5kfHwxMDAsdmFsdWVTdGFydD12YWx1ZVN0YXJ0fHwwLGFuZ2xlRW5kPWFuZ2xlRW5kfHwzNjAsYW5nbGVTdGFydD1hbmdsZVN0YXJ0fHwwLE1hdGguUEkvMTgwKigodmFsdWUtdmFsdWVTdGFydCkqKGFuZ2xlRW5kLWFuZ2xlU3RhcnQpLyh2YWx1ZUVuZC12YWx1ZVN0YXJ0KSthbmdsZVN0YXJ0KX0sS25vYi5wcm90b3R5cGUucmFkaWFuc1RvVmFsdWU9ZnVuY3Rpb24ocmFkaWFucyx2YWx1ZUVuZCx2YWx1ZVN0YXJ0LGFuZ2xlRW5kLGFuZ2xlU3RhcnQpe3JldHVybiB2YWx1ZUVuZD12YWx1ZUVuZHx8MTAwLHZhbHVlU3RhcnQ9dmFsdWVTdGFydHx8MCxhbmdsZUVuZD1hbmdsZUVuZHx8MzYwLGFuZ2xlU3RhcnQ9YW5nbGVTdGFydHx8MCwoMTgwL01hdGguUEkqcmFkaWFucy1hbmdsZVN0YXJ0KSoodmFsdWVFbmQtdmFsdWVTdGFydCkvKGFuZ2xlRW5kLWFuZ2xlU3RhcnQpK3ZhbHVlU3RhcnR9LEtub2IucHJvdG90eXBlLmNyZWF0ZUFyYz1mdW5jdGlvbihpbm5lclJhZGl1cyxvdXRlclJhZGl1cyxzdGFydEFuZ2xlLGVuZEFuZ2xlLGNvcm5lclJhZGl1cyl7dmFyIGFyYz1kMy5zdmcuYXJjKCkuaW5uZXJSYWRpdXMoaW5uZXJSYWRpdXMpLm91dGVyUmFkaXVzKG91dGVyUmFkaXVzKS5zdGFydEFuZ2xlKHN0YXJ0QW5nbGUpLmVuZEFuZ2xlKGVuZEFuZ2xlKS5jb3JuZXJSYWRpdXMoY29ybmVyUmFkaXVzKTtyZXR1cm4gYXJjfSxLbm9iLnByb3RvdHlwZS5kcmF3QXJjPWZ1bmN0aW9uKHN2ZyxhcmMsbGFiZWwsc3R5bGUsY2xpY2ssZHJhZyl7dmFyIGVsZW09c3ZnLmFwcGVuZChcInBhdGhcIikuYXR0cihcImlkXCIsbGFiZWwpLmF0dHIoXCJkXCIsYXJjKS5zdHlsZShzdHlsZSkuYXR0cihcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKFwiK3RoaXMub3B0aW9ucy5zaXplLzIrXCIsIFwiK3RoaXMub3B0aW9ucy5zaXplLzIrXCIpXCIpO3JldHVybiB0aGlzLm9wdGlvbnMucmVhZE9ubHk9PT0hMSYmKGNsaWNrJiZlbGVtLm9uKFwiY2xpY2tcIixjbGljayksZHJhZyYmZWxlbS5jYWxsKGRyYWcpKSxlbGVtfSxLbm9iLnByb3RvdHlwZS5jcmVhdGVBcmNzPWZ1bmN0aW9uKCl7dmFyIG91dGVyUmFkaXVzPXBhcnNlSW50KHRoaXMub3B0aW9ucy5zaXplLzIsMTApLHN0YXJ0QW5nbGU9dGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSwzNjApLGVuZEFuZ2xlPXRoaXMudmFsdWVUb1JhZGlhbnModGhpcy5vcHRpb25zLmVuZEFuZ2xlLDM2MCk7dGhpcy5vcHRpb25zLnNjYWxlLmVuYWJsZWQmJihvdXRlclJhZGl1cy09dGhpcy5vcHRpb25zLnNjYWxlLndpZHRoK3RoaXMub3B0aW9ucy5zY2FsZS5zcGFjZVdpZHRoKTt2YXIgZGlmZix0cmFja0lubmVyUmFkaXVzPW91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy50cmFja1dpZHRoLGNoYW5nZUlubmVyUmFkaXVzPW91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5iYXJXaWR0aCx2YWx1ZUlubmVyUmFkaXVzPW91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5iYXJXaWR0aCxpbnRlcmFjdElubmVyUmFkaXVzPTEsdHJhY2tPdXRlclJhZGl1cz1vdXRlclJhZGl1cyxjaGFuZ2VPdXRlclJhZGl1cz1vdXRlclJhZGl1cyx2YWx1ZU91dGVyUmFkaXVzPW91dGVyUmFkaXVzLGludGVyYWN0T3V0ZXJSYWRpdXM9b3V0ZXJSYWRpdXM7dGhpcy5vcHRpb25zLmJhcldpZHRoPnRoaXMub3B0aW9ucy50cmFja1dpZHRoPyhkaWZmPSh0aGlzLm9wdGlvbnMuYmFyV2lkdGgtdGhpcy5vcHRpb25zLnRyYWNrV2lkdGgpLzIsdHJhY2tJbm5lclJhZGl1cy09ZGlmZix0cmFja091dGVyUmFkaXVzLT1kaWZmKTp0aGlzLm9wdGlvbnMuYmFyV2lkdGg8dGhpcy5vcHRpb25zLnRyYWNrV2lkdGgmJihkaWZmPSh0aGlzLm9wdGlvbnMudHJhY2tXaWR0aC10aGlzLm9wdGlvbnMuYmFyV2lkdGgpLzIsY2hhbmdlT3V0ZXJSYWRpdXMtPWRpZmYsdmFsdWVPdXRlclJhZGl1cy09ZGlmZixjaGFuZ2VJbm5lclJhZGl1cy09ZGlmZix2YWx1ZUlubmVyUmFkaXVzLT1kaWZmKSx0aGlzLm9wdGlvbnMuYmdDb2xvciYmKHRoaXMuYmdBcmM9dGhpcy5jcmVhdGVBcmMoMCxvdXRlclJhZGl1cyxzdGFydEFuZ2xlLGVuZEFuZ2xlKSksXCJ0cm9uXCI9PT10aGlzLm9wdGlvbnMuc2tpbi50eXBlJiYodHJhY2tPdXRlclJhZGl1cz10cmFja091dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5za2luLndpZHRoLXRoaXMub3B0aW9ucy5za2luLnNwYWNlV2lkdGgsY2hhbmdlT3V0ZXJSYWRpdXM9Y2hhbmdlT3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnNraW4ud2lkdGgtdGhpcy5vcHRpb25zLnNraW4uc3BhY2VXaWR0aCx2YWx1ZU91dGVyUmFkaXVzPXZhbHVlT3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnNraW4ud2lkdGgtdGhpcy5vcHRpb25zLnNraW4uc3BhY2VXaWR0aCxpbnRlcmFjdE91dGVyUmFkaXVzPWludGVyYWN0T3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnNraW4ud2lkdGgtdGhpcy5vcHRpb25zLnNraW4uc3BhY2VXaWR0aCx0aGlzLmhvb3BBcmM9dGhpcy5jcmVhdGVBcmMob3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnNraW4ud2lkdGgsb3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxlbmRBbmdsZSkpLHRoaXMudHJhY2tBcmM9dGhpcy5jcmVhdGVBcmModHJhY2tJbm5lclJhZGl1cyx0cmFja091dGVyUmFkaXVzLHN0YXJ0QW5nbGUsZW5kQW5nbGUpLHRoaXMuY2hhbmdlQXJjPXRoaXMuY3JlYXRlQXJjKGNoYW5nZUlubmVyUmFkaXVzLGNoYW5nZU91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMuYmFyQ2FwKSx0aGlzLnZhbHVlQXJjPXRoaXMuY3JlYXRlQXJjKHZhbHVlSW5uZXJSYWRpdXMsdmFsdWVPdXRlclJhZGl1cyxzdGFydEFuZ2xlLHN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLmJhckNhcCksdGhpcy5pbnRlcmFjdEFyYz10aGlzLmNyZWF0ZUFyYyhpbnRlcmFjdElubmVyUmFkaXVzLGludGVyYWN0T3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxlbmRBbmdsZSl9LEtub2IucHJvdG90eXBlLmRyYXdBcmNzPWZ1bmN0aW9uKGNsaWNrSW50ZXJhY3Rpb24sZHJhZ0JlaGF2aW9yKXt2YXIgc3ZnPWQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpLmFwcGVuZChcInN2Z1wiKS5hdHRyKFwid2lkdGhcIix0aGlzLm9wdGlvbnMuc2l6ZSkuYXR0cihcImhlaWdodFwiLHRoaXMub3B0aW9ucy5zaXplKTtpZih0aGlzLm9wdGlvbnMuYmdDb2xvciYmdGhpcy5kcmF3QXJjKHN2Zyx0aGlzLmJnQXJjLFwiYmdBcmNcIix7ZmlsbDp0aGlzLm9wdGlvbnMuYmdDb2xvcn0pLHRoaXMub3B0aW9ucy5kaXNwbGF5SW5wdXQpe3ZhciBmb250U2l6ZT0uMip0aGlzLm9wdGlvbnMuc2l6ZStcInB4XCI7XCJhdXRvXCIhPT10aGlzLm9wdGlvbnMuZm9udFNpemUmJihmb250U2l6ZT10aGlzLm9wdGlvbnMuZm9udFNpemUrXCJweFwiKSx0aGlzLm9wdGlvbnMuc3RlcDwxJiYodGhpcy52YWx1ZT10aGlzLnZhbHVlLnRvRml4ZWQoMSkpO3ZhciB2PXRoaXMudmFsdWU7XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5vcHRpb25zLmlucHV0Rm9ybWF0dGVyJiYodj10aGlzLm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXIodikpLHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJpZFwiLFwidGV4dFwiKS5hdHRyKFwidGV4dC1hbmNob3JcIixcIm1pZGRsZVwiKS5hdHRyKFwiZm9udC1zaXplXCIsZm9udFNpemUpLnN0eWxlKFwiZmlsbFwiLHRoaXMub3B0aW9ucy50ZXh0Q29sb3IpLnRleHQodit0aGlzLm9wdGlvbnMudW5pdHx8XCJcIikuYXR0cihcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKFwiK3RoaXMub3B0aW9ucy5zaXplLzIrXCIsIFwiKyh0aGlzLm9wdGlvbnMuc2l6ZS8yKy4wNip0aGlzLm9wdGlvbnMuc2l6ZSkrXCIpXCIpLHRoaXMub3B0aW9ucy5zdWJUZXh0LmVuYWJsZWQmJihmb250U2l6ZT0uMDcqdGhpcy5vcHRpb25zLnNpemUrXCJweFwiLFwiYXV0b1wiIT09dGhpcy5vcHRpb25zLnN1YlRleHQuZm9udCYmKGZvbnRTaXplPXRoaXMub3B0aW9ucy5zdWJUZXh0LmZvbnQrXCJweFwiKSxzdmcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwiY2xhc3NcIixcInN1Yi10ZXh0XCIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLFwibWlkZGxlXCIpLmF0dHIoXCJmb250LXNpemVcIixmb250U2l6ZSkuc3R5bGUoXCJmaWxsXCIsdGhpcy5vcHRpb25zLnN1YlRleHQuY29sb3IpLnRleHQodGhpcy5vcHRpb25zLnN1YlRleHQudGV4dCkuYXR0cihcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKFwiK3RoaXMub3B0aW9ucy5zaXplLzIrXCIsIFwiKyh0aGlzLm9wdGlvbnMuc2l6ZS8yKy4xNSp0aGlzLm9wdGlvbnMuc2l6ZSkrXCIpXCIpKX1pZih0aGlzLm9wdGlvbnMuc2NhbGUuZW5hYmxlZCl7dmFyIHJhZGl1cyxxdWFudGl0eSxkYXRhLGNvdW50PTAsYW5nbGU9MCxzdGFydFJhZGlhbnM9dGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLm9wdGlvbnMubWluLHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLmVuZEFuZ2xlLHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5taW4pLGVuZFJhZGlhbnM9dGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLmVuZEFuZ2xlLHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5taW4pLGRpZmY9MDtpZigwPT09dGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUmJjM2MD09PXRoaXMub3B0aW9ucy5lbmRBbmdsZXx8KGRpZmY9MSksXCJkb3RzXCI9PT10aGlzLm9wdGlvbnMuc2NhbGUudHlwZSl7dmFyIHdpZHRoPXRoaXMub3B0aW9ucy5zY2FsZS53aWR0aDtyYWRpdXM9dGhpcy5vcHRpb25zLnNpemUvMi13aWR0aCxxdWFudGl0eT10aGlzLm9wdGlvbnMuc2NhbGUucXVhbnRpdHk7dmFyIG9mZnNldD1yYWRpdXMrdGhpcy5vcHRpb25zLnNjYWxlLndpZHRoO2RhdGE9ZDMucmFuZ2UocXVhbnRpdHkpLm1hcChmdW5jdGlvbigpe3JldHVybiBhbmdsZT1jb3VudCooZW5kUmFkaWFucy1zdGFydFJhZGlhbnMpLU1hdGguUEkvMitzdGFydFJhZGlhbnMsY291bnQrPTEvKHF1YW50aXR5LWRpZmYpLHtjeDpvZmZzZXQrTWF0aC5jb3MoYW5nbGUpKnJhZGl1cyxjeTpvZmZzZXQrTWF0aC5zaW4oYW5nbGUpKnJhZGl1cyxyOndpZHRofX0pLHN2Zy5zZWxlY3RBbGwoXCJjaXJjbGVcIikuZGF0YShkYXRhKS5lbnRlcigpLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKHtyOmZ1bmN0aW9uKGQpe3JldHVybiBkLnJ9LGN4OmZ1bmN0aW9uKGQpe3JldHVybiBkLmN4fSxjeTpmdW5jdGlvbihkKXtyZXR1cm4gZC5jeX0sZmlsbDp0aGlzLm9wdGlvbnMuc2NhbGUuY29sb3J9KX1lbHNlIGlmKFwibGluZXNcIj09PXRoaXMub3B0aW9ucy5zY2FsZS50eXBlKXt2YXIgaGVpZ2h0PXRoaXMub3B0aW9ucy5zY2FsZS5oZWlnaHQ7cmFkaXVzPXRoaXMub3B0aW9ucy5zaXplLzIscXVhbnRpdHk9dGhpcy5vcHRpb25zLnNjYWxlLnF1YW50aXR5LGRhdGE9ZDMucmFuZ2UocXVhbnRpdHkpLm1hcChmdW5jdGlvbigpe3JldHVybiBhbmdsZT1jb3VudCooZW5kUmFkaWFucy1zdGFydFJhZGlhbnMpLU1hdGguUEkvMitzdGFydFJhZGlhbnMsY291bnQrPTEvKHF1YW50aXR5LWRpZmYpLHt4MTpyYWRpdXMrTWF0aC5jb3MoYW5nbGUpKnJhZGl1cyx5MTpyYWRpdXMrTWF0aC5zaW4oYW5nbGUpKnJhZGl1cyx4MjpyYWRpdXMrTWF0aC5jb3MoYW5nbGUpKihyYWRpdXMtaGVpZ2h0KSx5MjpyYWRpdXMrTWF0aC5zaW4oYW5nbGUpKihyYWRpdXMtaGVpZ2h0KX19KSxzdmcuc2VsZWN0QWxsKFwibGluZVwiKS5kYXRhKGRhdGEpLmVudGVyKCkuYXBwZW5kKFwibGluZVwiKS5hdHRyKHt4MTpmdW5jdGlvbihkKXtyZXR1cm4gZC54MX0seTE6ZnVuY3Rpb24oZCl7cmV0dXJuIGQueTF9LHgyOmZ1bmN0aW9uKGQpe3JldHVybiBkLngyfSx5MjpmdW5jdGlvbihkKXtyZXR1cm4gZC55Mn0sXCJzdHJva2Utd2lkdGhcIjp0aGlzLm9wdGlvbnMuc2NhbGUud2lkdGgsc3Ryb2tlOnRoaXMub3B0aW9ucy5zY2FsZS5jb2xvcn0pfX1cInRyb25cIj09PXRoaXMub3B0aW9ucy5za2luLnR5cGUmJnRoaXMuZHJhd0FyYyhzdmcsdGhpcy5ob29wQXJjLFwiaG9vcEFyY1wiLHtmaWxsOnRoaXMub3B0aW9ucy5za2luLmNvbG9yfSksdGhpcy5kcmF3QXJjKHN2Zyx0aGlzLnRyYWNrQXJjLFwidHJhY2tBcmNcIix7ZmlsbDp0aGlzLm9wdGlvbnMudHJhY2tDb2xvcn0pLHRoaXMub3B0aW9ucy5kaXNwbGF5UHJldmlvdXM/dGhpcy5jaGFuZ2VFbGVtPXRoaXMuZHJhd0FyYyhzdmcsdGhpcy5jaGFuZ2VBcmMsXCJjaGFuZ2VBcmNcIix7ZmlsbDp0aGlzLm9wdGlvbnMucHJldkJhckNvbG9yfSk6dGhpcy5jaGFuZ2VFbGVtPXRoaXMuZHJhd0FyYyhzdmcsdGhpcy5jaGFuZ2VBcmMsXCJjaGFuZ2VBcmNcIix7XCJmaWxsLW9wYWNpdHlcIjowfSksdGhpcy52YWx1ZUVsZW09dGhpcy5kcmF3QXJjKHN2Zyx0aGlzLnZhbHVlQXJjLFwidmFsdWVBcmNcIix7ZmlsbDp0aGlzLm9wdGlvbnMuYmFyQ29sb3J9KTt2YXIgY3Vyc29yPVwicG9pbnRlclwiO3RoaXMub3B0aW9ucy5yZWFkT25seSYmKGN1cnNvcj1cImRlZmF1bHRcIiksdGhpcy5kcmF3QXJjKHN2Zyx0aGlzLmludGVyYWN0QXJjLFwiaW50ZXJhY3RBcmNcIix7XCJmaWxsLW9wYWNpdHlcIjowLGN1cnNvcjpjdXJzb3J9LGNsaWNrSW50ZXJhY3Rpb24sZHJhZ0JlaGF2aW9yKX0sS25vYi5wcm90b3R5cGUuZHJhdz1mdW5jdGlvbih1cGRhdGUpe2Z1bmN0aW9uIGRyYWdJbnRlcmFjdGlvbigpe3RoYXQuaW5EcmFnPSEwO3ZhciB4PWQzLmV2ZW50LngtdGhhdC5vcHRpb25zLnNpemUvMix5PWQzLmV2ZW50LnktdGhhdC5vcHRpb25zLnNpemUvMjtpbnRlcmFjdGlvbih4LHksITEpfWZ1bmN0aW9uIGNsaWNrSW50ZXJhY3Rpb24oKXt0aGF0LmluRHJhZz0hMTt2YXIgY29vcmRzPWQzLm1vdXNlKHRoaXMucGFyZW50Tm9kZSkseD1jb29yZHNbMF0tdGhhdC5vcHRpb25zLnNpemUvMix5PWNvb3Jkc1sxXS10aGF0Lm9wdGlvbnMuc2l6ZS8yO2ludGVyYWN0aW9uKHgseSwhMCl9ZnVuY3Rpb24gaW50ZXJhY3Rpb24oeCx5LGlzRmluYWwpe3ZhciByYWRpYW5zLGRlbHRhLGFyYz1NYXRoLmF0YW4oeS94KS8oTWF0aC5QSS8xODApO2lmKHg+PTAmJjA+PXl8fHg+PTAmJnk+PTA/ZGVsdGE9OTA6KGRlbHRhPTI3MCx0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZTwwJiYoZGVsdGE9LTkwKSkscmFkaWFucz0oZGVsdGErYXJjKSooTWF0aC5QSS8xODApLHRoYXQudmFsdWU9dGhhdC5yYWRpYW5zVG9WYWx1ZShyYWRpYW5zLHRoYXQub3B0aW9ucy5tYXgsdGhhdC5vcHRpb25zLm1pbix0aGF0Lm9wdGlvbnMuZW5kQW5nbGUsdGhhdC5vcHRpb25zLnN0YXJ0QW5nbGUpLHRoYXQudmFsdWU+PXRoYXQub3B0aW9ucy5taW4mJnRoYXQudmFsdWU8PXRoYXQub3B0aW9ucy5tYXgmJih0aGF0LnZhbHVlPU1hdGgucm91bmQofn4oKHRoYXQudmFsdWU8MD8tLjU6LjUpK3RoYXQudmFsdWUvdGhhdC5vcHRpb25zLnN0ZXApKnRoYXQub3B0aW9ucy5zdGVwKjEwMCkvMTAwLHRoYXQub3B0aW9ucy5zdGVwPDEmJih0aGF0LnZhbHVlPXRoYXQudmFsdWUudG9GaXhlZCgxKSksdXBkYXRlKHRoYXQudmFsdWUpLHRoYXQudmFsdWVBcmMuZW5kQW5nbGUodGhhdC52YWx1ZVRvUmFkaWFucyh0aGF0LnZhbHVlLHRoYXQub3B0aW9ucy5tYXgsdGhhdC5vcHRpb25zLmVuZEFuZ2xlLHRoYXQub3B0aW9ucy5zdGFydEFuZ2xlLHRoYXQub3B0aW9ucy5taW4pKSx0aGF0LnZhbHVlRWxlbS5hdHRyKFwiZFwiLHRoYXQudmFsdWVBcmMpLGlzRmluYWwmJih0aGF0LmNoYW5nZUFyYy5lbmRBbmdsZSh0aGF0LnZhbHVlVG9SYWRpYW5zKHRoYXQudmFsdWUsdGhhdC5vcHRpb25zLm1heCx0aGF0Lm9wdGlvbnMuZW5kQW5nbGUsdGhhdC5vcHRpb25zLnN0YXJ0QW5nbGUsdGhhdC5vcHRpb25zLm1pbikpLHRoYXQuY2hhbmdlRWxlbS5hdHRyKFwiZFwiLHRoYXQuY2hhbmdlQXJjKSksdGhhdC5vcHRpb25zLmRpc3BsYXlJbnB1dCkpe3ZhciB2PXRoYXQudmFsdWU7XCJmdW5jdGlvblwiPT10eXBlb2YgdGhhdC5vcHRpb25zLmlucHV0Rm9ybWF0dGVyJiYodj10aGF0Lm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXIodikpLGQzLnNlbGVjdCh0aGF0LmVsZW1lbnQpLnNlbGVjdChcIiN0ZXh0XCIpLnRleHQodit0aGF0Lm9wdGlvbnMudW5pdHx8XCJcIil9fWQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpLnNlbGVjdChcInN2Z1wiKS5yZW1vdmUoKTt2YXIgdGhhdD10aGlzO3RoYXQuY3JlYXRlQXJjcygpO3ZhciBkcmFnQmVoYXZpb3I9ZDMuYmVoYXZpb3IuZHJhZygpLm9uKFwiZHJhZ1wiLGRyYWdJbnRlcmFjdGlvbikub24oXCJkcmFnZW5kXCIsY2xpY2tJbnRlcmFjdGlvbik7dGhhdC5kcmF3QXJjcyhjbGlja0ludGVyYWN0aW9uLGRyYWdCZWhhdmlvciksdGhhdC5vcHRpb25zLmFuaW1hdGUuZW5hYmxlZD90aGF0LnZhbHVlRWxlbS50cmFuc2l0aW9uKCkuZWFzZSh0aGF0Lm9wdGlvbnMuYW5pbWF0ZS5lYXNlKS5kdXJhdGlvbih0aGF0Lm9wdGlvbnMuYW5pbWF0ZS5kdXJhdGlvbikudHdlZW4oXCJcIixmdW5jdGlvbigpe3ZhciBpPWQzLmludGVycG9sYXRlKHRoYXQudmFsdWVUb1JhZGlhbnModGhhdC5vcHRpb25zLnN0YXJ0QW5nbGUsMzYwKSx0aGF0LnZhbHVlVG9SYWRpYW5zKHRoYXQudmFsdWUsdGhhdC5vcHRpb25zLm1heCx0aGF0Lm9wdGlvbnMuZW5kQW5nbGUsdGhhdC5vcHRpb25zLnN0YXJ0QW5nbGUsdGhhdC5vcHRpb25zLm1pbikpO3JldHVybiBmdW5jdGlvbih0KXt2YXIgdmFsPWkodCk7dGhhdC52YWx1ZUVsZW0uYXR0cihcImRcIix0aGF0LnZhbHVlQXJjLmVuZEFuZ2xlKHZhbCkpLHRoYXQuY2hhbmdlRWxlbS5hdHRyKFwiZFwiLHRoYXQuY2hhbmdlQXJjLmVuZEFuZ2xlKHZhbCkpfX0pOih0aGF0LmNoYW5nZUFyYy5lbmRBbmdsZSh0aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMudmFsdWUsdGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMuZW5kQW5nbGUsdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLm1pbikpLHRoYXQuY2hhbmdlRWxlbS5hdHRyKFwiZFwiLHRoYXQuY2hhbmdlQXJjKSx0aGF0LnZhbHVlQXJjLmVuZEFuZ2xlKHRoaXMudmFsdWVUb1JhZGlhbnModGhpcy52YWx1ZSx0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5lbmRBbmdsZSx0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMubWluKSksdGhhdC52YWx1ZUVsZW0uYXR0cihcImRcIix0aGF0LnZhbHVlQXJjKSl9LEtub2IucHJvdG90eXBlLnNldFZhbHVlPWZ1bmN0aW9uKG5ld1ZhbHVlKXtpZighdGhpcy5pbkRyYWcmJnRoaXMudmFsdWU+PXRoaXMub3B0aW9ucy5taW4mJnRoaXMudmFsdWU8PXRoaXMub3B0aW9ucy5tYXgpe3ZhciByYWRpYW5zPXRoaXMudmFsdWVUb1JhZGlhbnMobmV3VmFsdWUsdGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMuZW5kQW5nbGUsdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLm1pbik7aWYodGhpcy52YWx1ZT1NYXRoLnJvdW5kKH5+KCgwPm5ld1ZhbHVlPy0uNTouNSkrbmV3VmFsdWUvdGhpcy5vcHRpb25zLnN0ZXApKnRoaXMub3B0aW9ucy5zdGVwKjEwMCkvMTAwLHRoaXMub3B0aW9ucy5zdGVwPDEmJih0aGlzLnZhbHVlPXRoaXMudmFsdWUudG9GaXhlZCgxKSksdGhpcy5jaGFuZ2VBcmMuZW5kQW5nbGUocmFkaWFucyksZDMuc2VsZWN0KHRoaXMuZWxlbWVudCkuc2VsZWN0KFwiI2NoYW5nZUFyY1wiKS5hdHRyKFwiZFwiLHRoaXMuY2hhbmdlQXJjKSx0aGlzLnZhbHVlQXJjLmVuZEFuZ2xlKHJhZGlhbnMpLGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpLnNlbGVjdChcIiN2YWx1ZUFyY1wiKS5hdHRyKFwiZFwiLHRoaXMudmFsdWVBcmMpLHRoaXMub3B0aW9ucy5kaXNwbGF5SW5wdXQpe3ZhciB2PXRoaXMudmFsdWU7XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5vcHRpb25zLmlucHV0Rm9ybWF0dGVyJiYodj10aGlzLm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXIodikpLGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpLnNlbGVjdChcIiN0ZXh0XCIpLnRleHQodit0aGlzLm9wdGlvbnMudW5pdHx8XCJcIil9fX0sdWkuS25vYj1Lbm9iLHVpLmtub2JEaXJlY3RpdmU9ZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFXCIsc2NvcGU6e3ZhbHVlOlwiPVwiLG9wdGlvbnM6XCI9XCJ9LGxpbms6ZnVuY3Rpb24oc2NvcGUsZWxlbWVudCl7c2NvcGUudmFsdWU9c2NvcGUudmFsdWV8fDA7dmFyIGRlZmF1bHRPcHRpb25zPXtza2luOnt0eXBlOlwic2ltcGxlXCIsd2lkdGg6MTAsY29sb3I6XCJyZ2JhKDI1NSwwLDAsLjUpXCIsc3BhY2VXaWR0aDo1fSxhbmltYXRlOntlbmFibGVkOiEwLGR1cmF0aW9uOjFlMyxlYXNlOlwiYm91bmNlXCJ9LHNpemU6MjAwLHN0YXJ0QW5nbGU6MCxlbmRBbmdsZTozNjAsdW5pdDpcIlwiLGRpc3BsYXlJbnB1dDohMCxpbnB1dEZvcm1hdHRlcjpmdW5jdGlvbih2KXtyZXR1cm4gdn0scmVhZE9ubHk6ITEsdHJhY2tXaWR0aDo1MCxiYXJXaWR0aDo1MCx0cmFja0NvbG9yOlwicmdiYSgwLDAsMCwwKVwiLGJhckNvbG9yOlwicmdiYSgyNTUsMCwwLC41KVwiLHByZXZCYXJDb2xvcjpcInJnYmEoMCwwLDAsMClcIix0ZXh0Q29sb3I6XCIjMjIyXCIsYmFyQ2FwOjAsZm9udFNpemU6XCJhdXRvXCIsc3ViVGV4dDp7ZW5hYmxlZDohMSx0ZXh0OlwiXCIsY29sb3I6XCJncmF5XCIsZm9udDpcImF1dG9cIn0sYmdDb2xvcjpcIlwiLHNjYWxlOntlbmFibGVkOiExLHR5cGU6XCJsaW5lc1wiLGNvbG9yOlwiZ3JheVwiLHdpZHRoOjQscXVhbnRpdHk6MjAsaGVpZ2h0OjEwLHNwYWNlV2lkdGg6MTV9LHN0ZXA6MSxkaXNwbGF5UHJldmlvdXM6ITEsbWluOjAsbWF4OjEwMCxkeW5hbWljT3B0aW9uczohMX07c2NvcGUub3B0aW9ucz1hbmd1bGFyLm1lcmdlKGRlZmF1bHRPcHRpb25zLHNjb3BlLm9wdGlvbnMpO3ZhciBrbm9iPW5ldyB1aS5Lbm9iKGVsZW1lbnRbMF0sc2NvcGUudmFsdWUsc2NvcGUub3B0aW9ucyk7aWYoc2NvcGUuJHdhdGNoKFwidmFsdWVcIixmdW5jdGlvbihuZXdWYWx1ZSxvbGRWYWx1ZSl7bnVsbD09PW5ld1ZhbHVlJiZcInVuZGVmaW5lZFwiPT10eXBlb2YgbmV3VmFsdWV8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBvbGRWYWx1ZXx8bmV3VmFsdWU9PT1vbGRWYWx1ZXx8a25vYi5zZXRWYWx1ZShuZXdWYWx1ZSl9KSxzY29wZS5vcHRpb25zLmR5bmFtaWNPcHRpb25zKXt2YXIgaXNGaXJzdFdhdGNoT25PcHRpb25zPSEwO3Njb3BlLiR3YXRjaChcIm9wdGlvbnNcIixmdW5jdGlvbigpe2lmKGlzRmlyc3RXYXRjaE9uT3B0aW9ucylpc0ZpcnN0V2F0Y2hPbk9wdGlvbnM9ITE7ZWxzZXt2YXIgbmV3T3B0aW9ucz1hbmd1bGFyLm1lcmdlKGRlZmF1bHRPcHRpb25zLHNjb3BlLm9wdGlvbnMpO2tub2I9bmV3IHVpLktub2IoZWxlbWVudFswXSxzY29wZS52YWx1ZSxuZXdPcHRpb25zKSxkcmF3S25vYigpfX0sITApfXZhciBkcmF3S25vYj1mdW5jdGlvbigpe2tub2IuZHJhdyhmdW5jdGlvbih2YWx1ZSl7c2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCl7c2NvcGUudmFsdWU9dmFsdWV9KX0pfTtkcmF3S25vYigpfX19LGFuZ3VsYXIubW9kdWxlKFwidWkua25vYlwiLFtdKS5kaXJlY3RpdmUoXCJ1aUtub2JcIix1aS5rbm9iRGlyZWN0aXZlKX0oKTsiLCIndXNlIHN0cmljdCc7XG5cbi8vIGFuZ3VsYXIgbW9kdWxlc1xuLy8gcmVxdWlyZSgnYW5ndWxhci1tb2R1bGUtc2FuaXRpemUnKTtcbi8vIHJlcXVpcmUoJy4vdGVtcGxhdGVzJyk7XG5cbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvX2luZGV4Jyk7XG5yZXF1aXJlKCcuL3NlcnZpY2VzL19pbmRleCcpO1xucmVxdWlyZSgnLi9tb2RlbHMvX2luZGV4Jyk7XG5yZXF1aXJlKCcuL2RpcmVjdGl2ZXMvX2luZGV4Jyk7XG5cbnJlcXVpcmUoJy4uL2Jvd2VyX2NvbXBvbmVudHMvbmcta25vYi9kaXN0L25nLWtub2IubWluJyk7XG5yZXF1aXJlKCcuLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItYW5pbWF0ZS9hbmd1bGFyLWFuaW1hdGUubWluJyk7XG5yZXF1aXJlKCcuLi9ib3dlcl9jb21wb25lbnRzL2lvbmljLWFkdmFuY2VkLWNhcm91c2VsL3NyYy9hZHZhbmNlZC1jYXJvdXNlbCcpO1xuXG5cblxuLy8gY3JlYXRlIGFuZCBib290c3RyYXAgYXBwbGljYXRpb25cbmFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgdmFyIHJlcXVpcmVzID0gW1xuICAgICdpb25pYycsXG4gICAgJ2FwcC5jb250cm9sbGVycycsXG4gICAgJ2FwcC5zZXJ2aWNlcycsXG4gICAgJ2FwcC5tb2RlbHMnLFxuICAgICdhcHAuZGlyZWN0aXZlcycsXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgJ3VpLmtub2InLFxuICAgICdhQ2Fyb3VzZWwnLFxuICAgICduZ0FuaW1hdGUnXG4gICAgLy8gJ3RlbXBsYXRlcycsXG4gICAgLy8gJ25nU2FuaXRpemUnLFxuICBdO1xuXG4gIC8vIG1vdW50IG9uIHdpbmRvdyBmb3IgdGVzdGluZ1xuICB3aW5kb3cuYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIHJlcXVpcmVzKTtcblxuICBhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29uc3RhbnQoJ0FwcFNldHRpbmdzJywgcmVxdWlyZSgnLi9jb25zdGFudHMuZGV2ZWxvcG1lbnQnKSk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbmZpZyhyZXF1aXJlKCcuL29uX2NvbmZpZycpKTtcblxuICBhbmd1bGFyLm1vZHVsZSgnYXBwJykucnVuKHJlcXVpcmUoJy4vb25fcnVuJykpO1xuXG5cbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBhbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydhcHAnXSk7ICAgXG4gIH0sICgxMDAwKSk7XG4gIFxuXG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBBcHBTZXR0aW5ncyA9IHtcbiAgeW9jYWxBUEk6e1xuICAgIGJhc2U6ICdodHRwOi8veW9lbmRwb2ludDQtd2Jicy5yaGNsb3VkLmNvbS9hcGkvdjEveW9rYWwvZGF0YS8nXG4gICAgLy8gYmFzZTogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODEwMC9hcGkvdjEveW9rYWwvZGF0YS8nXG4gIH0sXG5cbiAgR01BUF9ERUZBVUxUOntcbiAgXHRSQURJVVM6IDgwMCxcbiAgXHRaT09NOiAgIDE0LFxuICBcdFRIRU1FOntcbiAgXHRcdGxpZ2h0Olt7XCJmZWF0dXJlVHlwZVwiOlwicG9pXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9mZlwifV19LHtcInN0eWxlcnNcIjpbe1wic2F0dXJhdGlvblwiOi03MH0se1wibGlnaHRuZXNzXCI6Mzd9LHtcImdhbW1hXCI6MS4xNX1dfSx7XCJlbGVtZW50VHlwZVwiOlwibGFiZWxzXCIsXCJzdHlsZXJzXCI6W3tcImdhbW1hXCI6MC4yNn0se1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWRcIixcInN0eWxlcnNcIjpbe1wibGlnaHRuZXNzXCI6MH0se1wic2F0dXJhdGlvblwiOjB9LHtcImh1ZVwiOlwiI2ZmZmZmZlwifSx7XCJnYW1tYVwiOjB9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWRcIixcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHMudGV4dC5zdHJva2VcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWQuYXJ0ZXJpYWxcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeVwiLFwic3R5bGVyc1wiOlt7XCJsaWdodG5lc3NcIjoyMH1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZC5oaWdod2F5XCIsXCJlbGVtZW50VHlwZVwiOlwiZ2VvbWV0cnlcIixcInN0eWxlcnNcIjpbe1wibGlnaHRuZXNzXCI6NTB9LHtcInNhdHVyYXRpb25cIjowfSx7XCJodWVcIjpcIiNmZmZmZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwiYWRtaW5pc3RyYXRpdmUucHJvdmluY2VcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib25cIn0se1wibGlnaHRuZXNzXCI6LTUwfV19LHtcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZS5wcm92aW5jZVwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVscy50ZXh0LnN0cm9rZVwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwiYWRtaW5pc3RyYXRpdmUucHJvdmluY2VcIixcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHMudGV4dFwiLFwic3R5bGVyc1wiOlt7XCJsaWdodG5lc3NcIjoyMH1dfV1cbiAgXHR9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwU2V0dGluZ3M7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBBcHBDdHJsKCRsb2csICRyb290U2NvcGUsICRzY29wZSwgJGlvbmljTW9kYWwsICR0aW1lb3V0LCBjb29yZGluYXRlcywgQXBwU2V0dGluZ3MpIHtcblxuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnQXBwQ3RybCcpO1xuXG4gIHZhciB2bSA9IHRoaXM7XG4gIC8vIHNldCBjdXJlbnQgcG9zaXRpb24gdG8gcm9vdFNjb3BlIHRvIG1ha2UgZ2xvYmFsbHkgYXZhaWxhYmxlIFxuICAkcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbiA9IGNvb3JkaW5hdGVzO1xuICBcblxuICAvLyBGb3JtIGRhdGEgZm9yIHRoZSBsb2dpbiBtb2RhbFxuICAkc2NvcGUubG9naW5EYXRhID0ge307XG5cbiAgLy8gQ3JlYXRlIHRoZSBsb2dpbiBtb2RhbCB0aGF0IHdlIHdpbGwgdXNlIGxhdGVyXG4gICRpb25pY01vZGFsLmZyb21UZW1wbGF0ZVVybCgndGVtcGxhdGVzL2xvZ2luLmh0bWwnLCB7XG4gICAgc2NvcGU6ICRzY29wZVxuICB9KS50aGVuKGZ1bmN0aW9uKG1vZGFsKSB7XG4gICAgJHNjb3BlLm1vZGFsID0gbW9kYWw7XG4gIH0pO1xuXG4gIC8vIFRyaWdnZXJlZCBpbiB0aGUgbG9naW4gbW9kYWwgdG8gY2xvc2UgaXRcbiAgJHNjb3BlLmNsb3NlTG9naW4gPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUubW9kYWwuaGlkZSgpO1xuICB9O1xuXG4gIC8vIE9wZW4gdGhlIGxvZ2luIG1vZGFsXG4gICRzY29wZS5sb2dpbiA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5tb2RhbC5zaG93KCk7XG4gIH07XG5cbiAgLy8gUGVyZm9ybSB0aGUgbG9naW4gYWN0aW9uIHdoZW4gdGhlIHVzZXIgc3VibWl0cyB0aGUgbG9naW4gZm9ybVxuICAkc2NvcGUuZG9Mb2dpbiA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdEb2luZyBsb2dpbicsICRzY29wZS5sb2dpbkRhdGEpO1xuXG4gICAgLy8gU2ltdWxhdGUgYSBsb2dpbiBkZWxheS4gUmVtb3ZlIHRoaXMgYW5kIHJlcGxhY2Ugd2l0aCB5b3VyIGxvZ2luXG4gICAgLy8gY29kZSBpZiB1c2luZyBhIGxvZ2luIHN5c3RlbVxuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLmNsb3NlTG9naW4oKTtcbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuICBcblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignQXBwQ3RybCcsIEFwcEN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gQnJvd3NlQ3RybCgkc2NvcGUsICRyb290U2NvcGUsICRxLCAkaHR0cCwgJGxvZywgJGZpbHRlciwgJHRpbWVvdXQsIExvY2F0aW9uc1NlcnZpY2UsICAkaW9uaWNMb2FkaW5nLCAgJGlvbmljU2xpZGVCb3hEZWxlZ2F0ZSwgQXBwU2V0dGluZ3MpIHtcbiAgICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnQnJvd3NlQ3RybCcpO1xuXG4gXHQvLyBWaWV3TW9kZWxcbiAgXHR2YXIgdm0gPSB0aGlzO1xuICAgIHZtLnJhZGl1cyA9IEFwcFNldHRpbmdzLkdNQVBfUkFESVVTO1xuICAgICRzY29wZS5yYWRpdXMgPSBBcHBTZXR0aW5ncy5HTUFQX1JBRElVUztcbiAgICAkc2NvcGUuQ3VycmVudENvb3JkcyA9ICAkcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbjtcblxuICAgICRzY29wZS5sb2NhdGlvbnMgPVtdO1xuICAgICRzY29wZS5sb2NhdGlvbnNfZ3JvdXBzID1bXTtcbiAgICAkc2NvcGUubG9jYXRpb25zX2xvYWRlZCA9IDA7IFxuICAgICRzY29wZS5jYXJvdXNlbHMgPSBbXTtcblxuICAgICRpb25pY0xvYWRpbmcuc2hvdyh7XG4gICAgICAgIHRlbXBsYXRlOiBcIkZpbmRpbmcgUmFkIFNwb3RzIC4uLlwiLFxuICAgICAgICBiYWNrZHJvcDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgJHNjb3BlLmNhcm91c2VsT3B0aW9ucyA9IHtcbiAgICAgICAgdGVtcGxhdGUgICAgICA6ICcuLi90ZW1wbGF0ZXMvbG9jYXRpb25zLWNhcm91c2VsLml0ZW0uaHRtbCcsIC8vIHRlbXBsYXRlVXJsIGluIGNhc2UgeW91IGRvbid0IG5lZWQgdG8gcGFzcyBhIGRpcmVjdGl2ZSBidXQganVzdCBhIGh0bWwgdmlld1xuICAgICAgICBhbGlnbiAgICAgICAgIDogJ2xlZnQnLCAvLyBhbGlnbmVtZW50IG9mIHRoZSBjYXJvdXNlbFxuICAgICAgICBzZWxlY3RGaXJzdCAgIDogdHJ1ZSxcbiAgICAgICAgY2VudGVyT25TZWxlY3Q6IGZhbHNlLCAvLyBjZW50ZXIgY2Fyb3VzZWwgd2hlbiBhbiBpdGVtIGlzIHNlbGVjdGVkXG4gICAgfTtcblxuICAgICRzY29wZS5vblNlbGVjdENhcm91c2VsID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB2YXIgY2F0ID0gJHNjb3BlLmdldF9jYXRlZ29yeV9zbHVnKGl0ZW0uY2F0YWdvcnlsZXZlbDEpO1xuICAgICAgICAkbG9nLmxvZygnQ2Fyb3VzZWwgJytjYXQrJyBpdGVtIHNlbGVjdGVkOntuYW1lfScsIGl0ZW0pO1xuICAgICAgICAkc2NvcGUuY2Fyb3VzZWxzW2NhdF0uaXRlbVNlbGVjdGVkID0gaXRlbTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnJhbmRvRXhwZW5zZVdpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSsxKTsgIFxuICAgIH07XG4gICAgXG4gICAgJHNjb3BlLmdldF9jYXRlZ29yeV9zbHVnID0gZnVuY3Rpb24gKGNhdF9uYW1lKSB7XG4gICAgICAgIHJldHVybiBjYXRfbmFtZS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbihjYXQpIHsgcmV0dXJuIGNhdC50b0xvd2VyQ2FzZSgpLnRyaW0oKTsgfSkuam9pbignLScpO1xuICAgIH1cblxuICAgIExvY2F0aW9uc1NlcnZpY2UuYWxsKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2NhdGlvbnMgPSBkYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBncm91cCBsb2NhdGlvbnMgYnkgY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCB0cmF2ZWxUaW1lIGZvciBlYWNoIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgY2Fyb3VzZWxPcHRpb25zIGZvciBlYWNoIGNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubG9jYXRpb25zX2dyb3VwcyA9IF8uY2hhaW4oZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ3JvdXBCeShcImNhdGFnb3J5bGV2ZWwxXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihsb2NhdGlvbnMsIGNhdCwgYXJyYXkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbnMubWFwKGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubG9jYXRpb25zX2xvYWRlZCsrOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sMTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogY2F0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlfc2x1ZzogJHNjb3BlLmdldF9jYXRlZ29yeV9zbHVnKGNhdCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbnM6IGxvY2F0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihjYXRlZ29yeV9vYmopIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2F0ZWdvcnlfb2JqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS4kd2F0Y2goJ2xvY2F0aW9uc19sb2FkZWQnLGZ1bmN0aW9uKG5ld192YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihuZXdfdmFsID09IGRhdGEubGVuZ3RoKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzb3J0IGxvY2F0aW9uIGdyb3VwcyBhbHBhaGJldGljYWxseSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc29ydCBncm91cCBsb2NhdGlvbnMgYnkgdHJhdmVsVGltZS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubG9jYXRpb25zX2dyb3Vwc19zb3J0ZWQgPSBfLmNoYWluKCRzY29wZS5sb2NhdGlvbnNfZ3JvdXBzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihncm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzb3J0ZWRfbG9jYXRpb25zID0gJGZpbHRlcignb3JkZXJCeScpKGdyb3VwLmxvY2F0aW9ucywgJ3RyYXZlbFRpbWUudmFsdWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYW5ndWxhci5leHRlbmQoe30sZ3JvdXAsIHtsb2NhdGlvbnM6c29ydGVkX2xvY2F0aW9uc30gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydEJ5KCdjYXRlZ29yeScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGNhdGVnb3J5X29iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5jYXJvdXNlbHNbY2F0ZWdvcnlfb2JqLmNhdGVnb3J5X3NsdWddID0gYW5ndWxhci5leHRlbmQoe30sIHtjYXJvdXNlbElkOiAnbG9jYXRpb25zLWNhcm91c2VsLScrY2F0ZWdvcnlfb2JqLmNhdGVnb3J5X3NsdWcsIGl0ZW1TZWxlY3RlZDpfLmZpcnN0KGNhdGVnb3J5X29iai5sb2NhdGlvbnMpfSwgJHNjb3BlLmNhcm91c2VsT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5X29iajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGlvbmljTG9hZGluZy5oaWRlKCk7ICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICBcdCAgICAgICAgICAgICAgICB9KTtcblxuXG5cbn07XG5cblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignQnJvd3NlQ3RybCcsIEJyb3dzZUN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gQ29ubmVjdEN0cmwoJGxvZywgJHJvb3RTY29wZSwgJHNjb3BlLCBBcHBTZXR0aW5ncykge1xuXG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdDb25uZWN0Q3RybCcpO1xuXG4gIHZhciB2bSA9IHRoaXM7XG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ0Nvbm5lY3RDdHJsJywgQ29ubmVjdEN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gTG9naW5DdHJsKCRsb2csICRyb290U2NvcGUsICRzY29wZSwgQXBwU2V0dGluZ3MpIHtcblxuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnTG9naW5DdHJsJyk7XG5cbiAgdmFyIHZtID0gdGhpcztcblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignTG9naW5DdHJsJywgTG9naW5DdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIE1hcEN0cmwoJHJvb3RTY29wZSwgJHNjb3BlLCAkdGltZW91dCwgJGxvZywgJGlvbmljTG9hZGluZywgQXBwU2V0dGluZ3MsIEdNYXAsIExvY2F0aW9uc1NlcnZpY2UsICRpb25pY1NsaWRlQm94RGVsZWdhdGUpIHtcblxuICAgICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKFwiTWFwQ3RybFwiLCB0cnVlKTtcbiAgICBcbiBcdCAgLy8gVmlld01vZGVsXG4gIFx0dmFyIHZtID0gdGhpcztcbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgVk0gZGVmYXVsdHMgICBcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgIHZhciBjdXJyZW50Q2VudGVyID0gJHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb24uY29vcmRzO1xuXG4gICAgXG5cbiAgICAvKiBHb29nbGUgTWFwID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICAgdm0uZ21hcCA9IG5ldyBHTWFwKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHpvb206ICAgMTMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiB2bS50aGlzX3JhZGl1cywgXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IEFwcFNldHRpbmdzLkdNQVBfREVGQVVMVC5USEVNRS5saWdodFxuICAgICAgICAgICAgICAgICAgICAgIH0pOyAgICBcbiAgICAkcm9vdFNjb3BlLmdtYXAgPSB2bS5nbWFwO1xuICAgIFxuICAgIHZtLmdtYXAuaGVpZ2h0ID0gNTc1LFxuICAgIHZtLmdtYXAubG9jYXRpb25Gb2N1c2VkID0gZmFsc2U7XG4gICAgdm0uZ21hcC5tYXJrZXJzID0gW107XG4gICAgdm0uZ21hcC5yb3V0ZXMgPSBbXTsgIFxuICAgICAvLyBkcm9wIG1hcmtlciBvbiBjdXJyZW50IHBvc2l0aW9uXG4gICAgdm0uZ21hcC5kcm9wTWFya2VyKHtcbiAgICAgICAgICAgICAgbWFwOiAgICB2bS5nbWFwLm1hcCxcbiAgICAgICAgICAgICAgY2VudGVyOiB7bGF0OiBjdXJyZW50Q2VudGVyLmxhdGl0dWRlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgbG5nOiBjdXJyZW50Q2VudGVyLmxvbmdpdHVkZSB9LFxuICAgICAgICAgICAgICBvcGFjaXR5OjEsXG4gICAgICAgICAgICB9KTtcblxuXG5cbiAgICBcbiAgICAvKiBMb2NhaXRvbnMgQ29sbGVjdGlvbnMgYW5kIE1ldGEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICB2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UgPSBbXTtcbiAgICB2bS5sb2NhdGlvbnNfY2F0ZWdvcmllcyA9IHtcbiAgICAgIGRpc3RhbmNlOiA4MCxcbiAgICAgIGN1cnJlbnQ6ICBudWxsLFxuICAgICAgbGlzdDogW1xuICAgICAgICAgICAgICB7bmFtZTogJ0FydHMnfSxcbiAgICAgICAgICAgICAge25hbWU6ICdEcmluayd9LFxuICAgICAgICAgICAgICB7bmFtZTogJ0Zvb2QnfVxuICAgICAgICAgICAgXVxuICAgIH07XG4gICAgXG5cbiAgICAvKiBVSSBLbm9icyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgIC8vIHJhZGl1cyBrbm9iIFxuICAgIHZtLmtub2IgPSB7IFxuICAgICAgICAgICAgICAgb3B0aW9uczp7ICBkeW5hbWljT3B0aW9uczogdHJ1ZSB9IFxuICAgICAgICAgICAgICB9O1xuICAgIC8vIHNsaWRlci1tZXRhTmF2IGRpc3RhbmNlIGtub2JcbiAgICB2bS5kaXN0YW5jZV9rbm9iID17XG4gICAgICAgICAgICAgIG9wdGlvbnM6e1xuICAgICAgICAgICAgICAgIHJlYWRPbmx5OiAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIGR5bmFtaWNPcHRpb25zOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlJbnB1dDogICBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaXplOiAgICAgICAgICAgMzAsXG4gICAgICAgICAgICAgICAgbWluOiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgbWF4OiAgICAgICAgICAgIDgwLC8vaG91ciBhbmQgYSBoYWxmXG4gICAgICAgICAgICAgICAgc3RlcDogICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgYmFyQ29sb3I6ICAgICAgICcjNUJDMDFFJyxcbiAgICAgICAgICAgICAgICB0cmFja0NvbG9yOiAgICAgJyMyMTIxMjEnLFxuICAgICAgICAgICAgICAgIHRyYWNrV2lkdGg6ICAgICAzLFxuICAgICAgICAgICAgICAgIGJhcldpZHRoOiAgICAgICA2XG4gICAgICAgICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKiBMY29hdGlvbnMgY2FyZCBzbGlkZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICB2bS5zbGlkZXIgPXtcbiAgICAgIHNob3duOiAgIGZhbHNlLFxuICAgICAgbWV0YTp7XG4gICAgICAgIGNhdGVnb3J5OiAgICAgJycsXG4gICAgICAgIHRyYXZlbFRpbWU6ICAgJycsXG4gICAgICAgIG5laWdoYm9yaG9vZDogJydcbiAgICAgIH0sXG4gICAgICBhY3RpdmVTbGlkZTp7fVxuICAgIH07XG5cblxuXG5cbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgUHVibGljIG1ldGhvZHMgLSBhdmFpbGFiZSBpbiB0ZW1wbGF0ZXMgXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICBcbiAgICBcbiAgICAvKipcbiAgICAgKiBMb2FkIGxvY2F0aW9ucyBvZiBhIHNwZWNpZmljIGNhdGVnb3J5IHdpdGhpbiBhIHNwZWNpZmllZCByYWRpc3Ugb2YgdXNlcnMgY3VycmVudCBsb2FjYXRpb25cbiAgICAgKiBhbmQgdGhlbiBwb3B1bGF0ZSB0aGUgdm0gYW5kIHVpIHdpdGggcmV0dXJuZWQgZGF0YVxuICAgICAqICBcbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBjYXRlZ29yeSAtIGNhdGVnb3J5IG9iamVjdCBvZiBMb2FjdGlvbnMgdG8gbG9hZFxuICAgICAqL1xuICAgIHZtLmxvYWRfY2F0ZWdvcnkgPSBmdW5jdGlvbihjYXRlZ29yeSkge1xuXG4gICAgICAkbG9nLmxvZygnbG9hZF9jYXRlZ29yeToge25hbWV9JyxjYXRlZ29yeSk7XG4gICAgICBcbiAgICAgIC8vIHJlc2V0IGxvY2F0aW9ucywgbWFya2VycywgYW5kIHJhZGl1c1xuICAgICAgdm0uZ21hcC5tYXAuc2V0T3B0aW9ucyh7c3R5bGVzOm51bGx9KTtcbiAgICAgIHZtLmdtYXAubWFya2Vycy5tYXAoX2NsZWFyRnJvbU1hcCk7XG4gICAgICB2bS5nbWFwLm1hcmtlcnMgPSBbXTtcbiAgICAgIHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZSA9W107XG4gICAgICB2bS50aGlzX3JhZGl1cyA9IDUwMDA7XG4gICAgICBpZiAodm0ubG9jYXRpb25zUmFkaXVzKSB2bS5sb2NhdGlvbnNSYWRpdXMuc2V0VmlzaWJsZShmYWxzZSk7XG5cbiAgICAgIC8vIHNob3cgaW9uaWMgbG9hZGVyXG4gICAgICAkaW9uaWNMb2FkaW5nLnNob3coe1xuICAgICAgICB0ZW1wbGF0ZTogXCJFeHBsb3JpbmcgWW91ciBBcmVhIC4uLlwiLFxuICAgICAgICBiYWNrZHJvcDogdHJ1ZVxuICAgICAgfSk7XG5cblxuICAgICAgLy8gZ2V0IGFsbCBsb2NhdGlvbnMgYXJvdW5kIHNwZWNpZmllZCBhcmVhXG4gICAgICBMb2NhdGlvbnNTZXJ2aWNlXG4gICAgICAgIC5nZXQoe1xuICAgICAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgICAgcmFkaXVzOiAgIDUwMDAsIFxuICAgICAgICAgICAgICBsYXQ6ICAgICAgY3VycmVudENlbnRlci5sYXRpdHVkZSwgXG4gICAgICAgICAgICAgIGxuZzogICAgICBjdXJyZW50Q2VudGVyLmxvbmdpdHVkZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24obG9jYXRpb25zKSB7XG4gICAgICAgICAgdm0ubG9jYXRpb25zX2NhdGVnb3JpZXMuZGlzdGFuY2UgPSAwO1xuICAgICAgICAgIC8vIHZtLmxvY2F0aW9uc19sb2FkZWQgPSB0cnVlO1xuXG4gICAgICAgICAgdm0ubG9jYXRpb25zX2NhdGVnb3JpZXMuY3VycmVudCA9IGNhdGVnb3J5O1xuXG4gICAgICAgICAgLy8gc29ydCBsb2NhdGlvbnMgYnkgZGlzdG5hY2UgXG4gICAgICAgICAgdm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlID0gXy5zb3J0QnkobG9jYXRpb25zLCAnZGlzdGFuY2Vmcm9tbG9jYXRpb24nKTtcblxuICAgICAgICAgIC8vIHNldCBhbGwgbWFya2VycyBvbiBtYXBcbiAgICAgICAgICBfc2V0TWFya2Vycyh2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UpOyAgXG5cbiAgICAgICAgICAvLyBzZXQgdGhlIGxvY2F0aW9ucyByYWRpdXMgYW5kIGtub2IgdmFsdWUgdG8gdGhlIGNsb3NlcyBsb2N0aW9uIHRvIHRlc3RcbiAgICAgICAgICB2bS50aGlzX3JhZGl1cyA9IF8uZmlyc3Qodm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlKS50cmF2ZWxUaW1lLnZhbHVlKzIwMDtcbiAgICAgICAgICB2bS5sb2NhdGlvbnNSYWRpdXMgPSB2bS5nbWFwLnNldFJhZGl1c0NpcmNsZSh7cmFkaXVzOiB2bS50aGlzX3JhZGl1c30pO1xuICAgICAgICAgIHZtLmdtYXAubWFwLmZpdEJvdW5kcyh2bS5sb2NhdGlvbnNSYWRpdXMuZ2V0Qm91bmRzKCkpO1xuXG4gICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IHRyYXZlbCByYXRlIGJhc2VkIG9uIHRoZSB0aW1lIHRvIHRvIHRoZSBmdXJ0aGVyZXN0IExvY2F0aW9uXG4gICAgICAgICAgdm0udHJhdmVsUmF0ZSA9IHZtLm1ldGVyc1Blck1pbihfLmxhc3Qodm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlKS50cmF2ZWxUaW1lKTtcbiAgICAgICAgICB2bS5kaXN0YW5jZV9rbm9iLnZhbHVlID0gTWF0aC5jZWlsKHZtLnRoaXNfcmFkaXVzL3ZtLnRyYXZlbFJhdGUpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIHVwZGF0ZSBSYWRpdXMga25vYiBcbiAgICAgICAgICBfc2V0S25vYlZhbHVlKHZtLnRoaXNfcmFkaXVzLCBfLmZpcnN0KHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZSkudHJhdmVsVGltZS52YWx1ZSwgXy5sYXN0KHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZSkudHJhdmVsVGltZS52YWx1ZSk7XG4gICAgICAgICAgdm0ubG9jYXRpb25zX2xvYWRlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICAgIC8vIGhpZGUgdGhlIGxvYWRlciBvbmNlIGFsbCBpcyBsb2FkZWRcbiAgICAgICAgICAkaW9uaWNMb2FkaW5nLmhpZGUoKTtcbiAgICAgICAgICAkaW9uaWNTbGlkZUJveERlbGVnYXRlLnVwZGF0ZSgpO1xuICAgICAgICAgIFxuICAgICAgICB9KTsvL2VuZCAudGhlblxuXG5cbiAgICB9Ly8vL2VuZCB2bS5sb2FkX2NhdGVnb3J5XG5cblxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSByYXRlIG9mIHRyYW5lbCB0byBhIGxvY2F0aW9uIGluIG1ldGVycy9taW4gZm9ybWF0XG4gICAgICogXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gdHJhdmVsVGltZSAgLSAgdGhlIHRyYXZlbFRpbWUgb2JqZWN0IG9mIHRoZSBsb2NhdGlvblxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHsgTnVtYmVyfSBtZXRlcnMvbWluIGJhc2VkIG9uIGxvY2F0aW9uIGRpc3RhbmNlIGFuZCB0cmF2ZWwgdGltZSBcbiAgICAgKi9cbiAgICB2bS5tZXRlcnNQZXJNaW4gID0gZnVuY3Rpb24oIHRyYXZlbFRpbWUpIHtcbiAgICAgICAgLy8gcGFyc2UgdGllbSBmb3IgZWl0aGVyIGEgZG91YmxlIGRpZ2l0IG1pbnV0ZSBmb3JtYXRcbiAgICAgICAgLy8gb3IgdGhlIGZpcnN0IGRpZFxuICAgICAgICB2YXIgX3RpbWUgPSB0cmF2ZWxUaW1lLnRleHQubWF0Y2goLyhbMC05XVswLTldKXwoXFxkKS9nKTtcbiAgICAgICAgLy8gaWYgaG91cnMgY29udmVydCB0byBtaW5zXG4gICAgICAgIGlmKF90aW1lLmxlbmd0aCA9PSAyKSB2YXIgbWlucyA9ICtfdGltZVsxXSArICgrX3RpbWVbMF0qNjApO1xuICAgICAgICB2YXIgX21pbnMgPSBtaW5zIHx8ICtfdGltZVswXTtcbiAgICAgICAgdmFyIF9kaXN0YW5jZSA9IHRyYXZlbFRpbWUudmFsdWU7IFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIF9kaXN0YW5jZS9fbWlucztcbiAgICB9O1xuXG5cbiAgICB2bS5tZXRlcnNUb01pbGVzID0gZnVuY3Rpb24obWV0ZXJzKSB7XG4gICAgICByZXR1cm4gbWV0ZXJzKjAuMDAwNjIxMzcxO1xuICAgIH1cblxuXG4gICAgdm0uc2hvd0Rpc2NvdmVyeU1hcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICB2bS5nbWFwLmhlaWdodCA9IDU3NTtcbiAgICAgICAgICAgIHZtLmdtYXAubG9jYXRpb25Gb2N1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICB2bS5nbWFwLnJvdXRlcy5tYXAoX2NsZWFyRnJvbU1hcCk7XG4gICAgICAgICAgICBpZih2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UubGVuZ3RoKSB2bS5nbWFwLm1hcC5zZXRPcHRpb25zKHtzdHlsZXM6IG51bGx9KTtcblxuICAgICAgICAgICAgLy8gaGlkZXMgc2xpZGVyXG4gICAgICAgICAgICB2bS5zbGlkZXIuc2hvd24gPSBmYWxzZTtcbiAgICAgIFxuICAgIH1cblxuXG5cbiAgXG5cblxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgUHJpdmF0ZSB2bSBtZXRob2RzIFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgUmFkaXVzIHVpIGtub2IgdmFsdXNlXG4gICAgICogdGhpcyB0cmlja3MgdGhlIGtub2IgaW50byB1cGRhdGluZyB0aGUgdmFsdWUgY29ycmVjdGx5XG4gICAgICogXG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gdmFsICAtICBuZXcga25vYiB2YWxlXG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gbWluICAtICBtaW5pbXVtIGtub2IgdmFsdWVcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBtYXggIC0gIG1heGltdW0ga25vYiB2YWx1ZVxuICAgICAqL1xuICAgIHZhciBfc2V0S25vYlZhbHVlID0gZnVuY3Rpb24odmFsLG1pbiwgbWF4KSB7XG4gICAgICAvLyBzZXQgdWkua25vYiBvcHRpb25zIGhlcmVcbiAgICAgIFxuICAgICAgICAgIHZtLmtub2IgPXtcbiAgICAgICAgICAgICAgdmFsdWU6dmFsLFxuICAgICAgICAgICAgICBvcHRpb25zOntcbiAgICAgICAgICAgICAgICBkaXNwbGF5SW5wdXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIHN1YlRleHQ6IHtcbiAgICAgICAgICAgICAgICAvLyAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gICB0ZXh0OiAgICAnbWV0ZXIgcmFkaXVzJyxcbiAgICAgICAgICAgICAgICAvLyAgIGNvbG9yOiAgICdibGFjaycsXG4gICAgICAgICAgICAgICAgLy8gICBmb250OiAgICAnYXV0bydcbiAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgIHNpemU6ICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICAgIG1pbjogICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICAgIG1heDogICAgICAgICAgbWF4LFxuICAgICAgICAgICAgICAgIHN0ZXA6ICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICBiYXJDb2xvcjogICAgICcjNUJDMDFFJyxcbiAgICAgICAgICAgICAgICB0cmFja0NvbG9yOiAgICcjMjEyMTIxJyxcbiAgICAgICAgICAgICAgICB0cmFja1dpZHRoOiAgIDUsXG4gICAgICAgICAgICAgICAgYmFyV2lkdGg6ICAgICAyMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAvLyByZXR1cm4gdm0ua25vYjtcbiAgICB9O1xuXG5cblxuICAgIC8qKlxuICAgICAqIFNob3cgR29vZ2xlIG1hcCBtYXJrZXIgZm9yIExvY2F0aW9uXG4gICAgICogICAgIFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBsb2FjdGlvbiAtIGxvY2F0aW9uIG9iamVjdCBtb2RlbFxuICAgICAqL1xuICAgIHZhciBfc2hvd01hcmtlckZvciA9IGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAvLyAkbG9nLmxvZyhcIl9zaG93TWFya2VyRm9yOntuYW1lfVwiLCBsb2NhdGlvbik7XG4gICAgICAvLyB2YXIgc2hvd25NYXJrZXIgPSB2bS5nbWFwLm1hcmtlcnNbbG9jYXRpb24uX2lkXTtcbiAgICAgIHZhciBzaG93bk1hcmtlciA9IF8ud2hlcmUodm0uZ21hcC5tYXJrZXJzLCB7dGl0bGU6IGxvY2F0aW9uLm5hbWV9KVswXTtcbiAgICAgIHNob3duTWFya2VyLnNldE9wYWNpdHkoMSk7XG4gICAgICBzaG93bk1hcmtlci5zZXRDbGlja2FibGUodHJ1ZSk7XG4gICAgfS8vX3Nob3dNYXJrZXJGb3JcblxuXG4gICAgLyoqXG4gICAgICogSGlkZSBHb29nbGUgbWFwIG1hcmtlciBmb3IgTG9jYXRpb25cbiAgICAgKiAgICAgXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGxvYWN0aW9uIC0gbG9jYXRpb24gb2JqZWN0IG1vZGVsXG4gICAgICovXG4gICAgdmFyIF9oaWRlTWFya2VyRm9yID0gZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICAgIC8vICRsb2cubG9nKFwiX2hpZGVNYXJrZXJGb3I6e25hbWV9XCIsIGxvY2F0aW9uKTtcbiAgICAgIHZhciBoaWRkZW5NYXJrZXIgPSBfLndoZXJlKHZtLmdtYXAubWFya2Vycywge3RpdGxlOiBsb2NhdGlvbi5uYW1lfSlbMF07XG4gICAgICBoaWRkZW5NYXJrZXIuc2V0T3BhY2l0eSgwKTtcbiAgICAgIGhpZGRlbk1hcmtlci5zZXRDbGlja2FibGUoZmFsc2UpO1xuICAgIH0vL19oaWRlTWFya2VyRm9yXG5cblxuICAgIC8qKlxuICAgICAqIFNldCBHb29nbGUgTWFwIG1hcmtlcnMgZm9yIGFsbCBMb2NhdGlvbnMgYW5kIGF0dGFjaCBcbiAgICAgKiBhIGNsaWNrIGxpc3RlbmVyIHRvIGVhY2ggXG4gICAgICogIFxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gbG9jYXRpb25zICAtICBjb2xsZWN0aW9uIG9mIExvY2F0aW9uIE1vZGVsIE9iamVjdHNcbiAgICAgKi9cbiAgICB2YXIgX3NldE1hcmtlcnMgPSBmdW5jdGlvbihsb2NhdGlvbnMpIHtcbiAgICAgIGxvY2F0aW9ucy5tYXAoZnVuY3Rpb24obG9jYWxsZSl7XG5cblxuICAgICAgICAgICAgdmFyIG1hcmtlciA9IHZtLmdtYXAuZHJvcE1hcmtlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IHBhcnNlRmxvYXQobG9jYWxsZS5sYXQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogcGFyc2VGbG9hdChsb2NhbGxlLmxvbmcpfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICAgICBsb2NhbGxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXA6ICAgICAgIHZtLmdtYXAubWFwLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ21hcmtlcjpjbGlja2VkJywgbG9jYWxsZSk7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZtLmdtYXAubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmV0dXJuIHZtLm1hcmtlcnM7XG4gICAgfTsvL19zZXRNYXJrZXJzXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBtYXJrZXIgZnJvbSBHb29nbGUgTWFwXG4gICAgICogIFxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IG1hcmtlciAgLSAgZ29vZ2xlIG1hcCBtYXJrZXIgb2JqZWN0XG4gICAgICovXG4gICAgdmFyIF9jbGVhckZyb21NYXAgPSBmdW5jdGlvbihtYXJrZXIpIHtcbiAgICAgICRsb2cubG9nKCdfY2xlYXJGcm9tTWFwOjpNYXJrZXI6e3RpdGxlfScsIG1hcmtlcik7XG4gICAgICAgbWFya2VyLnNldE1hcChudWxsKTtcbiAgICB9Ly9fY2xlYXJGcm9tTWFwXG5cblxuICAgIC8qKlxuICAgICAqIFBsb3Qgcm91dGUgdG8gTG9jYXRpb24gb24gR29vZ2xlIE1hcCBcbiAgICAgKiAgXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gbG9jYXRpb24gIC0gIExvY2F0aW9uIE1vZGVsIE9iamVjdFxuICAgICAqL1xuICAgIHZhciBfc2hvd1JvdXRlVG8gPSBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgJGxvZy5sb2coJ19zaG93Um91dGVUbzt7bmFtZX0nLCBsb2NhdGlvbik7XG4gICAgICAvLyBjbGVhciBhbGwgcm91dGVzXG4gICAgICB2bS5nbWFwLnJvdXRlcy5tYXAoX2NsZWFyRnJvbU1hcCk7XG4gICAgICB2bS5sb2NhdGlvbnNSYWRpdXMuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICB2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UubWFwKF9oaWRlTWFya2VyRm9yKTtcblxuICAgICAgdmFyIG1hcmtlciA9IF9zaG93TWFya2VyRm9yKGxvY2F0aW9uKTtcblxuICAgICAgdmFyIHJvdXRlID0gdm0uZ21hcC5wbG90Um91dGVUbyhsb2NhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihyb3V0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmdtYXAucm91dGVzLnB1c2gocm91dGUpOyAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVE9ETzogY2VudGVyIHJvdXRlIGluIHNjcmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICR0aW1lb3V0KGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIC8vIGlmKHZtLmdtYXAubWFwLnpvb20gPCAxMyApdm0uZ21hcC5tYXAuc2V0Wm9vbSgxMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB2YXIgbWFya2VyUG9zID0gdm0uZ21hcC5nZXRQaXhlbFBvc2l0aW9uKG1hcmtlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB2YXIgcG9zRnJvbVRvcCA9ICh2bS5nbWFwLmhlaWdodCAtIG1hcmtlclBvcy55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHZhciBwYW5ZID0gcG9zRnJvbVRvcCAtIChwb3NGcm9tVG9wKjAuNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB2bS5nbWFwLm1hcC5wYW5CeSgwLCBNYXRoLmFicyhwYW5ZKSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sNDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfS8vIF9zaG93Um91dGVUb1xuICAgIFxuICAgICAgICBcblxuICAgIC8qKlxuICAgICAqIE1ha2Ugc3VyZSB0aGUgbWFwIHJhZGl1cyBkb2Vzbid0IGV4Y2VlZCB0aGUgbWFwIHZpZXdwb3J0LlxuICAgICAqIEl0IGRvZXMgdGhpcyBieSBnZXR0aW5nIHRoZSByZWN0YW5ndWxhciBjb29yZHMgb2YgdGhlIHJhZGl1cyBcbiAgICAgKiBhbmQgdGhlbiB6b29tcyB0aGUgbWFwIHRvIGZpdCB0aGVtIHdpdGhpbiB0aGUgbWFwIGJvdW5kc1xuICAgICAqICBcbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBsb2NhdGlvbiAgLSAgTG9jYXRpb24gTW9kZWwgXG4gICAgIFxuICAgICAqL1xuICAgIHZhciBfZml0SW5NYXBWaWV3ID0gZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICAgIGlmKGxvY2F0aW9uKSB2bS5sb2NhdGlvbnNSYWRpdXMuc2V0UmFkaXVzKGxvY2F0aW9uLmRpc3RhbmNlZnJvbWxvY2F0aW9uKTtcbiAgICAgIC8vIEdldCB0aGUgYm91bmRzXG4gICAgICB2YXIgY2lyY2xlQm91bmRzID0gdm0ubG9jYXRpb25zUmFkaXVzLmdldEJvdW5kcygpO1xuICAgICAgdmFyIG1hcEJvdW5kcyA9IHZtLmdtYXAubWFwLmdldEJvdW5kcygpO1xuXG4gICAgICB2YXIgbmUgPSBjaXJjbGVCb3VuZHMuZ2V0Tm9ydGhFYXN0KCk7IC8vIExhdExuZyBvZiB0aGUgbm9ydGgtZWFzdCBjb3JuZXJcbiAgICAgIHZhciBzdyA9IGNpcmNsZUJvdW5kcy5nZXRTb3V0aFdlc3QoKTtcbiAgICAgIHZhciBudyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobmUubGF0KCksIHN3LmxuZygpKTtcbiAgICAgIHZhciBzZSA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoc3cubGF0KCksIG5lLmxuZygpKTtcbiAgICAgICAgICAgICAgXG4gICAgICB2YXIgTGF0TG5nTGlzdCA9IG5ldyBBcnJheSAobncsIHNlKTtcblxuICAgICAgICAgICAgICBcbiAgICAgIGlmKCFtYXBCb3VuZHMuY29udGFpbnMobmUpKXtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIEx0TGdMZW4gPSBMYXRMbmdMaXN0Lmxlbmd0aDsgaSA8IEx0TGdMZW47IGkrKykge1xuICAgICAgICAgIC8vICBBbmQgaW5jcmVhc2UgdGhlIGJvdW5kcyB0byB0YWtlIHRoaXMgcG9pbnRcbiAgICAgICAgICBtYXBCb3VuZHMuZXh0ZW5kKExhdExuZ0xpc3RbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHZtLmdtYXAubWFwLmZpdEJvdW5kcyhtYXBCb3VuZHMpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHZtLmdtYXAubWFwLmZpdEJvdW5kcyhjaXJjbGVCb3VuZHMpO1xuICAgICAgfVxuICAgIFxuICAgIH0vL19maXRJbk1hcFZpZXdcbiAgICBcblxuXG5cblxuXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAkc2NvcGUgZXZlbnRzIGFuZCB3YXRjaGVycyBcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIFxuICAvKipcbiAgICogT24gTG9jYXRpb25zIFNsaWRlciBTbGlkZSBDaGFuZ2UgdXBkYXRlIHRvIHNob3cgcm91dGUgdG8gbmV3IExvY2F0aW9uIGZyb20gc2xpZGVcbiAgICovXG4gICAgJHNjb3BlLnNsaWRlSGFzQ2hhbmdlZCA9IGZ1bmN0aW9uKGluZHgpIHtcbiAgICAgICAgJGxvZy5sb2coXCJpb24tc2xpZGUtYm94OnNsaWRlSGFzQ2hhbmdlZDpcIitpbmR4KTtcbiAgICAgICAgXG4gICAgICAgIHZhciBzbGlkZXJfbG9jYXRpb24gPSB2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2VbaW5keF07XG4gICAgICAgIC8vc2V0IGFjdGl2ZSBzbGlkZVxuICAgICAgICB2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UubWFwKGZ1bmN0aW9uKGxvY2F0aW9uKSB7IGxvY2F0aW9uLmlzQWN0aXZlID0gZmFsc2U7IHJldHVybiBsb2NhdGlvbjt9KTtcbiAgICAgICAgc2xpZGVyX2xvY2F0aW9uLmlzQWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICBfc2hvd1JvdXRlVG8oc2xpZGVyX2xvY2F0aW9uKTtcbiAgICAgICAgX2ZpdEluTWFwVmlldyhzbGlkZXJfbG9jYXRpb24pO1xuICAgICAgICB2bS5zbGlkZXIgPSB7XG4gICAgICAgICAgc2hvd246ICAgIHRydWUsXG4gICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIG1ldGE6ICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogICAgIHNsaWRlcl9sb2NhdGlvbi5jYXRhZ29yeWxldmVsMSxcbiAgICAgICAgICAgIHRyYXZlbFRpbWU6ICAgc2xpZGVyX2xvY2F0aW9uLnRyYXZlbFRpbWUsXG4gICAgICAgICAgICBuZWlnaGJvcmhvb2Q6IHNsaWRlcl9sb2NhdGlvbi5uZWlnaGJvcmhvb2RcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgIH07Ly8gICRzY29wZS5zbGlkZUhhc0NoYW5nZWRcblxuICAgIFxuXG5cbiAgICAvKipcbiAgICAgKiBXYXRjaCB0aGUgUmFkaXVzIEtub2IgdmFsdWUgYW5kIHVkcGF0ZSBkYXRhIG9uIGNoYW5nZVxuICAgICAqL1xuICAgICRzY29wZS4kd2F0Y2goXCJNYXAua25vYi52YWx1ZVwiLCBmdW5jdGlvbihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwibmV3IE1hcC5rbm9iLnZhbHVlOiBcIituZXdWYWx1ZSk7XG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcIm9sZCBNYXAua25vYi52YWx1ZTogXCIrb2xkVmFsdWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih2bS5sb2NhdGlvbnNSYWRpdXMpe1xuICAgICAgICAgICAgICB2bS5sb2NhdGlvbnNSYWRpdXMuc2V0UmFkaXVzKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgdm0ubG9jYXRpb25zUmFkaXVzLnNldFZpc2libGUodHJ1ZSk7ICBcblxuICAgICAgICAgICAgICAvLyB1cGRhdGUgZGlzdGFuY2Uga25vYlxuICAgICAgICAgICAgICB2bS5kaXN0YW5jZV9rbm9iLnZhbHVlID0gTWF0aC5jZWlsKG5ld1ZhbHVlL3ZtLnRyYXZlbFJhdGUpO1xuICAgICAgICAgICAgICB2bS5kaXN0YW5jZV9rbm9iLm9wdGlvbnMgPSB2bS5kaXN0YW5jZV9rbm9iLm9wdGlvbnM7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICB2bS5zaG93RGlzY292ZXJ5TWFwKCk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgaWYodm0ubG9jYXRpb25zUmFkaXVzKSBfZml0SW5NYXBWaWV3KCk7XG5cbiAgICAgICAgICAgIC8vIHNob3cvcmV2ZWFsIGxvY2F0aW9ucyBpbnNpZGUgcmFkaXVzXG4gICAgICAgICAgICB2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UubWFwKGZ1bmN0aW9uKGxvY2F0ZSl7XG4gICAgICAgICAgICAgICAgICBpZiggbG9jYXRlLmRpc3RhbmNlZnJvbWxvY2F0aW9uIDwgbmV3VmFsdWUgKXtcbiAgICAgICAgICAgICAgICAgICAgX3Nob3dNYXJrZXJGb3IobG9jYXRlKTtcbiAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX2hpZGVNYXJrZXJGb3IobG9jYXRlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOy8vdm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlLm1hcFxuXG5cbiAgICAgICAgfSk7Ly8vJHNjb3BlLiR3YXRjaCBcIk1hcC5rbm9iLnZhbHVlXCJcblxuXG5cbiAgICAgIC8qKlxuICAgICAgICogTGlzdGVuIGZvciBhIEdvb2dsZSBNYXAgbG9hY3Rpb24gbWFya2VyIHRvIGJlIGNsaWNrZWRcbiAgICAgICAqIGFuZCB0aGVuIGRpc3BsYXkgdGhlIExvY2F0aW9ucyBTbGlkZXIgXG4gICAgICAgKi9cbiAgICAgICRzY29wZS4kb24oXCJtYXJrZXI6Y2xpY2tlZFwiLCBmdW5jdGlvbihlLCBtYXJrZXIpIHtcbiAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgXG4gICAgICAgICAgJGxvZy5sb2coXCJtYXJrZXI6Y2xpY2tlZCAtIHtuYW1lfVwiLCBtYXJrZXIpO1xuICAgICAgICBcbiAgICAgICAgICB2bS5nbWFwLm1hcC5zZXRPcHRpb25zKHtzdHlsZXM6IEFwcFNldHRpbmdzLkdNQVBfREVGQVVMVC5USEVNRS5saWdodH0pO1xuXG4gICAgICAgICAgdm0uZ21hcC5sb2NhdGlvbkZvY3VzZWQgPSB0cnVlO1xuICAgICAgICAgIHZtLmdtYXAuaGVpZ2h0ID0gMzUwO1xuICAgICAgICAgIHZtLnNsaWRlciA9IHtcbiAgICAgICAgICAgIHNob3duOiB0cnVlLFxuICAgICAgICAgICAgbWV0YTp7XG4gICAgICAgICAgICAgIGNhdGVnb3J5OiAgICAgbWFya2VyLmNhdGFnb3J5bGV2ZWwxLFxuICAgICAgICAgICAgICB0cmF2ZWxUaW1lOiAgIG1hcmtlci50cmF2ZWxUaW1lLFxuICAgICAgICAgICAgICBuZWlnaGJvcmhvb2Q6IG1hcmtlci5uZWlnaGJvcmhvb2RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgJGlvbmljU2xpZGVCb3hEZWxlZ2F0ZS5zbGlkZShfLmluZGV4T2Yodm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlLCBtYXJrZXIpKTtcblxuICAgICAgICAgIF9zaG93Um91dGVUbyhtYXJrZXIpO1xuICAgICAgICAgIF9maXRJbk1hcFZpZXcoKTtcblxuICAgICAgfSk7XG4gICAgfSk7Ly8gJHNjb3BlLiRvbiBcIm1hcmtlcjpjbGlja2VkXCJcbiAgICAgIFxuXG5cbn07Ly8vLyBNYXBDdHJsXG5cblxuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdNYXBDdHJsJywgTWFwQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYnVsayA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnLCBbXSk7XG5cbmJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqX2luZGV4fCouc3BlYykuanMnXSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYnVsayA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuZGlyZWN0aXZlcycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkaXJlY3RpdmVzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gbUFwcExvYWRpbmcoJGxvZywgJGFuaW1hdGUpe1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSggXCJtQXBwTG9hZGluZ1wiICk7XG4gIFxuXG4gIC8vIFJ1bnMgZHVyaW5nIGNvbXBpbGVcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogICAgJ0MnLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRyaWJ1dGVzLCBjb250cm9sbGVyLCB0cmFuc2NsdWRlRm4pIHtcbiAgICAgJGFuaW1hdGUubGVhdmUoIFxuICAgICBcdGVsZW1lbnQuY2hpbGRyZW4oKS5lcSggMSApXG4gICAgIFx0KS50aGVuKFxuICAgICAgICAgICAgZnVuY3Rpb24gY2xlYW51cEFmdGVyQW5pbWF0aW9uKCkge1xuICAgICAgICAgICAgXHQkbG9nLmxvZygnY2xlYW51cEFmdGVyQW5pbWF0aW9uJyk7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSByb290IGRpcmVjdGl2ZSBlbGVtZW50LlxuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIGNsb3NlZC1vdmVyIHZhcmlhYmxlIHJlZmVyZW5jZXMuXG4gICAgICAgICAgICAgICAgc2NvcGUgPSBlbGVtZW50ID0gYXR0cmlidXRlcyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICB9XG4gIH1cblxuXG59O1xuXG5cbmRpcmVjdGl2ZXNNb2R1bGUuZGlyZWN0aXZlKCdtQXBwTG9hZGluZycsIG1BcHBMb2FkaW5nKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBtb2RlbHNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuKi9cblxubW9kZWxzTW9kdWxlLmZhY3RvcnkoJ0dNYXAnLCBmdW5jdGlvbigkbG9nLCAkcm9vdFNjb3BlLCAkcSwgTG9jYXRpb25zU2VydmljZSwgQXBwU2V0dGluZ3Mpe1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnR01hcCcsIGZhbHNlKTtcblxuICB2YXIgY3VycmVudENlbnRlciA9ICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uLmNvb3JkcztcblxuXG5cbiAgZnVuY3Rpb24gR01hcChtYXBTZXR0aW5ncyl7XG4gICAgXG4gICAgdGhpcy5tYXBPcHRpb25zID0ge1xuICAgICAgY2VudGVyOiAgICB7bGF0OiBjdXJyZW50Q2VudGVyLmxhdGl0dWRlLCBcbiAgICAgICAgICAgICAgICAgIGxuZzogY3VycmVudENlbnRlci5sb25naXR1ZGV9LFxuICAgICAgem9vbTogICAgICBBcHBTZXR0aW5ncy5HTUFQX0RFRkFVTFQuWk9PTSxcbiAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsXG4gICAgICByYWRpdXM6ICAgIEFwcFNldHRpbmdzLkdNQVBfREVGQVVMVC5SQURJVVMsXG4gICAgfTtcblxuICAgIGFuZ3VsYXIuZXh0ZW5kKHRoaXMubWFwT3B0aW9ucywgbWFwU2V0dGluZ3MpO1xuICAgIFxuICAgICRsb2cuZGVidWcoJ3pvb20ge21hcE9wdGlvbnMuem9vbX0nLCB0aGlzKTtcbiAgICBcbiAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYXBcIiksIHRoaXMubWFwT3B0aW9ucyk7XG4gICAgXG4gfTsvL0dNYXAgY29uc3RydWN0b3JcblxuXG5cblxuICBHTWFwLnByb3RvdHlwZSA9e1xuXG4gICAgZHJvcE1hcmtlcjogZnVuY3Rpb24obWFya2VyRGF0YSkge1xuICAgICAgdmFyIF9tYXJrZXJTZXR0aW5ncyA9IHt9O1xuICAgICAgYW5ndWxhci5leHRlbmQoX21hcmtlclNldHRpbmdzLCB0aGlzLm1hcE9wdGlvbnMsIG1hcmtlckRhdGEpO1xuICAgICAgJGxvZy5kZWJ1ZygnZHJvcE1hcmtlciBmb3IgXCJ7dGl0bGV9XCJcIiBhdCBcIntjZW50ZXIubGF0fSwge2NlbnRlci5sbmd9XCInLCBfbWFya2VyU2V0dGluZ3MpO1xuXG4gICAgICB2YXIgX21hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgcG9zaXRpb246ICBfbWFya2VyU2V0dGluZ3MuY2VudGVyLFxuICAgICAgICAgICAgbWFwOiAgICAgICBfbWFya2VyU2V0dGluZ3MubWFwLFxuICAgICAgICAgICAgdGl0bGU6ICAgICBfbWFya2VyU2V0dGluZ3MudGl0bGUsXG4gICAgICAgICAgICBvcGFjaXR5OiAgIF9tYXJrZXJTZXR0aW5ncy5vcGFjaXR5LFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUFxuICAgICAgfSk7XG5cbiAgICAgICBcbiAgICAgIHJldHVybiBfbWFya2VyO1xuICAgIH0sXG5cblxuICAgIGJ1aWxkSW5mb1dpbmRvdzogZnVuY3Rpb24obG9jYXRpb25JbmZvLCBsb2NhdGlvbk1hcmtlcikge1xuICAgICAgdmFyIF9tYXAgPSB0aGlzO1xuXG4gICAgICAkbG9nLmRlYnVnKCdidWlsZEluZm9XaW5kb3cgZm9yIHtuYW1lfScsIGxvY2F0aW9uSW5mbyk7XG4gICAgICB2YXIgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJzxoMyBpZD1cImZpcnN0SGVhZGluZ1wiIGNsYXNzPVwiZmlyc3RIZWFkaW5nXCI+Jytsb2NhdGlvbkluZm8ubmFtZSsnPC9oMz4nK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHA+Jytsb2NhdGlvbkluZm8udHJhdmVsVGltZS50ZXh0Kycgd2FsazwvcD4nK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNtYWxsPicrbG9jYXRpb25JbmZvLmRpc3RhbmNlZnJvbWxvY2F0aW9uKyc8L3NtYWxsPidcbiAgICAgIH0pO1xuXG4gICAgICAvLyBsb2NhdGlvbk1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIC8vICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdtYXJrZXI6Y2xpY2tlZCcsIGxvY2F0aW9uSW5mbyApO1xuICAgICAgLy8gICBpbmZvd2luZG93Lm9wZW4oIF9tYXAubWFwICxsb2NhdGlvbk1hcmtlcik7XG4gICAgICAvLyB9KTtcblxuICAgICAgcmV0dXJuIGluZm93aW5kb3c7XG4gICAgfSxcblxuXG4gICAgZ2V0UGl4ZWxQb3NpdGlvbjogZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICB2YXIgX21hcCA9IHRoaXMubWFwO1xuICAgICAgICB2YXIgc2NhbGUgPSBNYXRoLnBvdygyLCBfbWFwLmdldFpvb20oKSk7XG4gICAgICAgIHZhciBudyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoXG4gICAgICAgICAgICBfbWFwLmdldEJvdW5kcygpLmdldE5vcnRoRWFzdCgpLmxhdCgpLFxuICAgICAgICAgICAgX21hcC5nZXRCb3VuZHMoKS5nZXRTb3V0aFdlc3QoKS5sbmcoKVxuICAgICAgICApO1xuICAgICAgICB2YXIgd29ybGRDb29yZGluYXRlTlcgPSBfbWFwLmdldFByb2plY3Rpb24oKS5mcm9tTGF0TG5nVG9Qb2ludChudyk7XG4gICAgICAgIHZhciB3b3JsZENvb3JkaW5hdGUgPSBfbWFwLmdldFByb2plY3Rpb24oKS5mcm9tTGF0TG5nVG9Qb2ludChtYXJrZXIuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIHZhciBwaXhlbE9mZnNldCA9IG5ldyBnb29nbGUubWFwcy5Qb2ludChcbiAgICAgICAgICAgIE1hdGguZmxvb3IoKHdvcmxkQ29vcmRpbmF0ZS54IC0gd29ybGRDb29yZGluYXRlTlcueCkgKiBzY2FsZSksXG4gICAgICAgICAgICBNYXRoLmZsb29yKCh3b3JsZENvb3JkaW5hdGUueSAtIHdvcmxkQ29vcmRpbmF0ZU5XLnkpICogc2NhbGUpXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHBpeGVsT2Zmc2V0O1xuICAgIH0sXG5cbiAgICBwbG90Um91dGVUbzogZnVuY3Rpb24obG9jYXRpb24pe1xuICAgICAgJGxvZy5kZWJ1ZygncGxvdFJvdXRlVG8ge25hbWV9Jyxsb2NhdGlvbik7XG4gICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgdmFyIF9tYXAgPSB0aGlzO1xuICAgICAgdmFyIF9yb3V0ZVNldHRpbmdzID0ge1xuICAgICAgICAgICAgZHJhZ2dhYmxlOiAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBzdXBwcmVzc0luZm9XaW5kb3dzOiB0cnVlLFxuICAgICAgICAgICAgc3VwcHJlc3NNYXJrZXJzOiAgICAgdHJ1ZSxcbiAgICAgICAgICAgIG9yaWdpbjogICAgICAgICAgICAgIF9tYXAubWFwT3B0aW9ucy5jZW50ZXJcbiAgICAgIH07XG5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKF9yb3V0ZVNldHRpbmdzLCB0aGlzLm1hcE9wdGlvbnMpO1xuXG4gICAgICB2YXIgZGlyZWN0aW9uc0Rpc3BsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyKHtcbiAgICAgICAgICAgIG1hcDogICAgICAgICAgICAgICAgIF9tYXAubWFwLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiAgICAgICAgICAgX3JvdXRlU2V0dGluZ3MuZHJhZ2dhYmxlLFxuICAgICAgICAgICAgc3VwcHJlc3NJbmZvV2luZG93czogX3JvdXRlU2V0dGluZ3Muc3VwcHJlc3NJbmZvV2luZG93cyxcbiAgICAgICAgICAgIHN1cHByZXNzTWFya2VyczogICAgIF9yb3V0ZVNldHRpbmdzLnN1cHByZXNzTWFya2VycyxcbiAgICAgICAgICAgIC8vIHByZXNlcnZlVmlld3BvcnQ6IHRydWVcbiAgICAgICAgICB9KSxcblxuICAgICAgICAgIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbjoge2xhdDogcGFyc2VGbG9hdChsb2NhdGlvbi5sYXQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiBwYXJzZUZsb2F0KGxvY2F0aW9uLmxvbmcpfSxcbiAgICAgICAgICAgIG9yaWdpbjogICAgICBfcm91dGVTZXR0aW5ncy5vcmlnaW4sXG4gICAgICAgICAgICB0cmF2ZWxNb2RlOiAgZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5XQUxLSU5HLFxuICAgICAgICAgICAgcHJvdmlkZVJvdXRlQWx0ZXJuYXRpdmVzOiBmYWxzZSxcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGlyZWN0aW9uc1NlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTsvLyBQYXNzIHRoZSBkaXJlY3Rpb25zIHJlcXVlc3QgdG8gdGhlIGRpcmVjdGlvbnMgc2VydmljZS5cblxuXG4gICAgICAgICAgZGlyZWN0aW9uc1NlcnZpY2Uucm91dGUocmVxdWVzdCwgZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTdGF0dXMuT0spIHtcbiAgICAgICAgICAgICAgLy8gRGlzcGxheSB0aGUgcm91dGUgb24gdGhlIG1hcC5cbiAgICAgICAgICAgICAgcmVzcG9uc2UucmVuZGVyZXIgPSBkaXJlY3Rpb25zRGlzcGxheTtcbiAgICAgICAgICAgICAgZGlyZWN0aW9uc0Rpc3BsYXkuc2V0RGlyZWN0aW9ucyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGlyZWN0aW9uc0Rpc3BsYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pOy8vL2RpcmVjdGlvc1NlcnZpY2Uucm91dGVcblxuICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuXG5cbiAgICB9LFxuXG4gICAgc2V0UmFkaXVzQ2lyY2xlOiBmdW5jdGlvbihyYWRpdXNDaXJjbGVTZXR0aW5ncykge1xuICAgICAgdmFyIF9tYXAgPSB0aGlzO1xuICAgICAgdmFyIF9jaXJjbGVTZXR0aW5ncyA9e1xuICAgICAgICAgICAgICBzdHJva2VDb2xvcjogICAnIzAwODRiNCcsXG4gICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IDAuOCxcbiAgICAgICAgICAgICAgc3Ryb2tlV2VpZ2h0OiAgMSxcbiAgICAgICAgICAgICAgZmlsbENvbG9yOiAgICAgJyMwMDg0YjQnLFxuICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogICAwLjA2MjUsXG4gICAgICB9O1xuXG4gICAgICBhbmd1bGFyLmV4dGVuZChfY2lyY2xlU2V0dGluZ3MgLHRoaXMubWFwT3B0aW9ucywgcmFkaXVzQ2lyY2xlU2V0dGluZ3MpO1xuXG4gICAgICB2YXIgbG9jYXRpb25zQ2lyY2xlID0gbmV3IGdvb2dsZS5tYXBzLkNpcmNsZSh7XG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6ICAgX2NpcmNsZVNldHRpbmdzLnN0cm9rZUNvbG9yLFxuICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IF9jaXJjbGVTZXR0aW5ncy5zdHJva2VPcGFjaXR5LFxuICAgICAgICAgICAgICAgIHN0cm9rZVdlaWdodDogIF9jaXJjbGVTZXR0aW5ncy5zdHJva2VXZWlnaHQsXG4gICAgICAgICAgICAgICAgZmlsbENvbG9yOiAgICAgX2NpcmNsZVNldHRpbmdzLmZpbGxDb2xvcixcbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogICBfY2lyY2xlU2V0dGluZ3MuZmlsbE9wYWNpdHksXG4gICAgICAgICAgICAgICAgbWFwOiAgICAgICAgICAgX21hcC5tYXAsXG4gICAgICAgICAgICAgICAgY2VudGVyOiAgICAgICAgX2NpcmNsZVNldHRpbmdzLmNlbnRlcixcbiAgICAgICAgICAgICAgICByYWRpdXM6ICAgICAgICBfY2lyY2xlU2V0dGluZ3MucmFkaXVzXG4gICAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBsb2NhdGlvbnNDaXJjbGU7XG4gICAgfSxcblxuICAgIHBsYWNlc1NlcnZpY2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIF9zZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlKHRoaXMubWFwKTtcbiAgICAgIHJldHVybiBfc2VydmljZTtcblxuICAgIH1cblxuICB9O1xuICAgIFxuXG5cbiAgcmV0dXJuIEdNYXA7XG5cbiAgXG59KTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbW9kZWxzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xubW9kZWxzTW9kdWxlLmZhY3RvcnkoJ0xvY2F0aW9uJywgZnVuY3Rpb24oJHJvb3RTY29wZSwgJGxvZywgJHEpIHtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0xvY2F0aW9uJywgdHJ1ZSk7XG5cbiAgZnVuY3Rpb24gTG9jYXRpb24oTG9jYXRpb25EYXRhKXtcbiAgICBhbmd1bGFyLmV4dGVuZCh0aGlzLCBMb2NhdGlvbkRhdGEpO1xuICAgICRsb2cubG9nKCd7bmFtZX0nLCB0aGlzKTtcbiAgfVxuXG5cbiAgTG9jYXRpb24ucmVzcG9uc2VUcmFuc2Zvcm1lciA9IGZ1bmN0aW9uIChyZXNwb25zZURhdGEpIHtcbiAgICAkbG9nLmxvZygncmVzb3BvbnNlVHJhbnNmb3JtZXIgZm9yIHtsZW5ndGh9IGl0ZW1zJywgcmVzcG9uc2VEYXRhLmxvY2F0aW9ucyk7XG4gICAgXG4gICAgaWYocmVzcG9uc2VEYXRhLmxvY2F0aW9ucyl7XG4gICAgICBcbiAgICAgIHZhciBwb3B1bGF0ZWRfbG9jYXRpb25zID0gW107XG5cbiAgICAgIHJlc3BvbnNlRGF0YS5sb2NhdGlvbnNcbiAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBuZXcgTG9jYXRpb24oZGF0YSk7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24uc2V0R29vZ2xlUGxhY2VJRCgpLnRoZW4oZnVuY3Rpb24ocGxhY2UpIHtcbiAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnNldEdvb2dsZVBsYWNlRGV0YWlscygpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBwb3B1bGF0ZWRfbG9jYXRpb25zLnB1c2gobG9jYXRpb24uc2V0VHJhdmVsVGltZSgpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBvcHVsYXRlZF9sb2NhdGlvbnM7XG4gICAgfVxuXG5cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YS5tYXAoTG9jYXRpb24uYnVpbGQpOyAgXG5cbiAgICBcbiAgfVxuXG5cbiAgTG9jYXRpb24ucHJvdG90eXBlLnNldFRyYXZlbFRpbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICRsb2cubG9nKCdzZXRUcmF2ZWxUaW1lOntuYW1lfScsIHRoaXMpO1xuICAgICAgXG4gICAgICB2YXIgX2xvY2F0aW9uID0gdGhpcztcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgIHZhciBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpc3RhbmNlTWF0cml4U2VydmljZTtcbiAgICAgICBzZXJ2aWNlLmdldERpc3RhbmNlTWF0cml4KHtcbiAgICAgICAgIG9yaWdpbnM6ICAgICAgIFt7bGF0OiAkcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsIGxuZzokcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlfV0sXG4gICAgICAgICBkZXN0aW5hdGlvbnM6ICBbe2xhdDogcGFyc2VGbG9hdCh0aGlzLmxhdCksIGxuZzogcGFyc2VGbG9hdCh0aGlzLmxvbmcpfV0sXG4gICAgICAgICB0cmF2ZWxNb2RlOiAgICBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLldBTEtJTkcsXG4gICAgICAgICB1bml0U3lzdGVtOiAgICBnb29nbGUubWFwcy5Vbml0U3lzdGVtLklNUEVSSUFMLFxuICAgICAgICAgYXZvaWRIaWdod2F5czogdHJ1ZSxcbiAgICAgICAgIGF2b2lkVG9sbHM6ICAgIHRydWVcbiAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzKSB7XG4gICAgICAgICBcdF9sb2NhdGlvbi50cmF2ZWxUaW1lID0gcmVzcG9uc2Uucm93c1swXS5lbGVtZW50c1swXS5kdXJhdGlvbjtcbiAgICAgICAgICBfbG9jYXRpb24uZGlzdGFuY2UgPSByZXNwb25zZS5yb3dzWzBdLmVsZW1lbnRzWzBdLmRpc3RhbmNlO1xuICAgICAgICAgXHRkZWZlcnJlZC5yZXNvbHZlKF9sb2NhdGlvbik7XG4gICAgICAgICAvLyAkbG9nLmRlYnVnKFwie25hbWV9IC0ge3RyYXZlbFRpbWV9XCIsIF9sb2NhdGlvbik7XG4gICAgICAgICAgXG4gICAgICAgfSk7XG5cbiAgICAgICBcbiAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcblxuICB9XG5cblxuICBMb2NhdGlvbi5wcm90b3R5cGUuc2V0R29vZ2xlUGxhY2VJRCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgJGxvZy5sb2coJ3NldEdvb2dsZVBsYWNlSUQ6e25hbWV9JywgdGhpcyk7XG5cbiAgICAgIHZhciBfbG9jYXRpb24gPSB0aGlzLFxuICAgICAgICAgIGRlZmVycmVkID0gJHEuZGVmZXIoKSxcbiAgICAgICAgICBQbGFjZXNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlKCRyb290U2NvcGUuZ21hcC5tYXApLFxuICAgICAgICAgIF9zZWFyY2hRdWVyeSA9IHtxdWVyeTpfbG9jYXRpb24ubmFtZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHBhcnNlRmxvYXQoX2xvY2F0aW9uLmxhdCksIHBhcnNlRmxvYXQoX2xvY2F0aW9uLmxvbmcpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOjUwMH07XG5cblxuICAgICAgICAgIFBsYWNlc1NlcnZpY2UudGV4dFNlYXJjaChfc2VhcmNoUXVlcnksIFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0cywgc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBtYWtlIHN1cmUgdGhpcyBpcyB0aGUgY29ycmVjdCByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbG9jYXRpb24uZ29vZ2xlUGxhY2VJZCA9IHJlc3VsdHNbMF0ucGxhY2VfaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShfbG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG5cbiAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIFxuICB9O1xuXG5cbiAgTG9jYXRpb24ucHJvdG90eXBlLnNldEdvb2dsZVBsYWNlRGV0YWlscyA9IGZ1bmN0aW9uKCkge1xuICAgICRsb2cubG9nKCdzZXRHb29nbGVQbGFjZURldGFpbHM6e25hbWV9JywgdGhpcyk7XG4gICAgdmFyIF9sb2NhdGlvbiA9IHRoaXMsXG4gICAgICAgICBkZWZlcnJlZCA9ICRxLmRlZmVyKCksXG4gICAgICAgICBQbGFjZXNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlKCRyb290U2NvcGUuZ21hcC5tYXApO1xuICAgICAgICAgXG4gICAgICAgIFBsYWNlc1NlcnZpY2UuZ2V0RGV0YWlscygge3BsYWNlSWQ6X2xvY2F0aW9uLmdvb2dsZVBsYWNlSWR9LCBcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24ocGxhY2UsIHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5leHRlbmQoX2xvY2F0aW9uLCBwbGFjZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoX2xvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cblxuICBMb2NhdGlvbi5idWlsZCA9IGZ1bmN0aW9uKGxEYXRhKSB7XG4gICAgJGxvZy5sb2coJ2J1aWxkOntuYW1lfScsIGxEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gbmV3IExvY2F0aW9uKGxEYXRhKTtcbiAgfVxuXG4gICBcblxuICBcbiBcbiAgcmV0dXJuIExvY2F0aW9uO1xuXG5cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLm1vZGVscycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTsiLCIndXNlIHN0cmljdCc7XG5cblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gT25Db25maWcoJHN0YXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRwcm92aWRlKSB7XG4gIFxuICAvL2FjdGl2YXRlIExvZ0RlY29yYXRvclxuICByZXF1aXJlKCcuL3V0aWxzL2xvZ2dpbmcvTG9nRGVjb3JhdG9yLmpzJykoJHByb3ZpZGUpO1xuXG4kc3RhdGVQcm92aWRlclxuXG4gIC5zdGF0ZSgnYXBwJywge1xuICAgIHVybDogJy9hcHAnLFxuICAgIGFic3RyYWN0OiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL21lbnUuaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ0FwcEN0cmwnLFxuICAgIHJlc29sdmU6e1xuICAgICAgICBjb29yZGluYXRlczpmdW5jdGlvbihDdXJyZW50Q29vcmRzLCAkdGltZW91dCkge1xuICAgICAgICAgICAgcmV0dXJuIEN1cnJlbnRDb29yZHMuZ2V0KCk7ICBcbiAgICAgICAgfVxuICAgIH1cbiAgfSlcbiAgLnN0YXRlKCdhcHAuY29ubmVjdCcsIHtcbiAgICB1cmw6ICcvY29ubmVjdCcsXG4gICAgdmlld3M6IHtcbiAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvY29ubmVjdC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0Nvbm5lY3RDdHJsIGFzIENvbm5lY3QnXG4gICAgICB9XG4gICAgfVxuICB9IClcblxuICAuc3RhdGUoJ2FwcC5sb2dpbicsIHtcbiAgICB1cmw6ICcvbG9naW4nLFxuICAgIHZpZXdzOiB7XG4gICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2xvZ2luLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTG9naW5DdHJsIGFzIExnbidcbiAgICAgIH1cbiAgICB9XG4gIH0gKVxuICBcbiAgLnN0YXRlKCdhcHAuYnJvd3NlJywge1xuICAgIHVybDogJy9icm93c2UnLFxuICAgIHZpZXdzOiB7XG4gICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2Jyb3dzZS5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0Jyb3dzZUN0cmwnXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIFxuICAuc3RhdGUoJ2FwcC5tYXAnLCB7XG4gICAgICB1cmw6ICcvbWFwJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9tYXAuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ01hcEN0cmwgYXMgTWFwJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG5cblxuICAvLyBpZiBub25lIG9mIHRoZSBhYm92ZSBzdGF0ZXMgYXJlIG1hdGNoZWQsIHVzZSB0aGlzIGFzIHRoZSBmYWxsYmFja1xuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvYXBwL21hcCcpO1xuICBcbiAgXG5cblxufS8vLy8gT25Db25maWdcblxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uQ29uZmlnOyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gT25SdW4oJGlvbmljUGxhdGZvcm0sICRsb2csICRhbmltYXRlKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdPblJ1bicpO1xuICAgXG4gICRpb25pY1BsYXRmb3JtLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICRhbmltYXRlLmVuYWJsZWQodHJ1ZSk7XG4gICAgXG4gICAgLy8gSGlkZSB0aGUgYWNjZXNzb3J5IGJhciBieSBkZWZhdWx0IChyZW1vdmUgdGhpcyB0byBzaG93IHRoZSBhY2Nlc3NvcnkgYmFyIGFib3ZlIHRoZSBrZXlib2FyZFxuICAgIC8vIGZvciBmb3JtIGlucHV0cylcbiAgICBpZiAod2luZG93LmNvcmRvdmEgJiYgd2luZG93LmNvcmRvdmEucGx1Z2lucy5LZXlib2FyZCkge1xuICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmhpZGVLZXlib2FyZEFjY2Vzc29yeUJhcih0cnVlKTtcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5kaXNhYmxlU2Nyb2xsKHRydWUpO1xuXG4gICAgfVxuICAgIGlmICh3aW5kb3cuU3RhdHVzQmFyKSB7XG4gICAgICAvLyBvcmcuYXBhY2hlLmNvcmRvdmEuc3RhdHVzYmFyIHJlcXVpcmVkXG4gICAgICBTdGF0dXNCYXIuc3R5bGVEZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPblJ1bjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEN1cnJlbnRDb29yZHMoJHEsICRodHRwLCAkbG9nLCAgQXBwU2V0dGluZ3MpIHtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoXCJDdXJyZW50Q29vcmRzU2VydmljZVwiKTtcbiAgdmFyIGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG4gIHZhciBzZXJ2aWNlID0ge307XG5cbiAgc2VydmljZS5nZXQgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7ICAgIFxuICAgIC8vIGdldCBsYXRpdGl1ZGUgYW5kIGxvbmdpdHVkZSBcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKHBvcykge1xuICAgICAgJGxvZy5kZWJ1ZygnbGF0OiB7Y29vcmRzLmxhdGl0dWRlfScscG9zKTtcbiAgICAgICRsb2cuZGVidWcoJ2xvbmc6IHtjb29yZHMubG9uZ2l0dWRlfScscG9zKTtcbiAgICAgIFxuXG4gICAgICAgLy8gZ2V0IGNpdHkgbmFtZSBmcm9tIGdvb2dsZSBhcGkgZ2VvY29kZXJcbiAgICAgIHZhciBsYXRsbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHBvcy5jb29yZHMubGF0aXR1ZGUsIHBvcy5jb29yZHMubG9uZ2l0dWRlKTtcbiAgICAgIHZhciBfY2l0eTtcblxuICAgICAgZ2VvY29kZXIuZ2VvY29kZSh7J2xhdExuZyc6IGxhdGxuZ30sIGZ1bmN0aW9uKHJlc3VsdHMsIHN0YXR1cykge1xuICAgICAgICAgIGlmIChzdGF0dXMgPT0gZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuT0sgJiYgcmVzdWx0c1sxXSkge1xuICAgICAgICAgICAgLy8gVE9ETzogY2xlYW51cCB1bmRlcnNjb3JzIHBhcnNpbmdcbiAgICAgICAgICAgICAgIF9jaXR5ID0gXy5jb21wYWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfLm1hcChyZXN1bHRzWzFdLmFkZHJlc3NfY29tcG9uZW50cywgZnVuY3Rpb24oY29tcCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoXy5jb250YWlucyhjb21wLnR5cGVzLCdsb2NhbGl0eScpKSByZXR1cm4gY29tcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSApXG4gICAgICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgcG9zLmNpdHkgPSBfY2l0eVswXS5sb25nX25hbWU7XG5cbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShwb3MpOyAgXG4gICAgICB9KTsvLy8gZW5kIGdlb2NvZGVcblxuICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAkbG9nLndhcm4oJ1VuYWJsZSB0byBnZXQgbG9jYXRpb246ICcgKyBlcnJvcik7XG4gICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yLCBzdGF0dXMpO1xuICAgfSk7XG4gICAgXG4gIFxuICAgIFxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ0N1cnJlbnRDb29yZHMnLCBDdXJyZW50Q29vcmRzKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIExvY2F0aW9uc1NlcnZpY2UoJGxvZywgWW9jYWwsIExvY2F0aW9uLCAkcSkge1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZShcIkxvY2F0aW9uc1NlcnZpY2VTZXJ2aWNlXCIpO1xuXG4gIHZhciBzZXJ2aWNlID0ge307XG4gIFxuXG4gIHNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24oIGdldERhdGEgKSB7XG5cbiAgICAkbG9nLmRlYnVnKCdHRVQgbG9jYXRpb24gaW4gYSB7cmFkaXVzfSAgb2Yge2xhdH0sIHtsbmd9JywgZ2V0RGF0YSk7XG5cbiAgICByZXR1cm4gWW9jYWwuZ2V0KGdldERhdGEpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgICAvLyBvbmx5IHJldHVybiBsb2NhdGlvbnMgd2hlbiB0aGV5IGhhdmUgQUxMXG4gICAgICAgICAgICAgICAgICAvLyBiZWVuIHBvcHVsYXRlZCB3aXRoIGRhdGEgZnJvbSBhc3luYyBzZXJ2aWNlc1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICRxLmFsbChMb2NhdGlvbi5yZXNwb25zZVRyYW5zZm9ybWVyKGRhdGEpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcblxuICB9O1xuXG4gIHNlcnZpY2UuYWxsID0gZnVuY3Rpb24oIGdldERhdGEgKSB7XG5cbiAgICAkbG9nLmRlYnVnKCdBTEwnKTtcblxuICAgIHJldHVybiBZb2NhbC5hbGwoKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgICAgLy8gb25seSByZXR1cm4gbG9jYXRpb25zIHdoZW4gdGhleSBoYXZlIEFMTFxuICAgICAgICAgICAgICAgICAgLy8gYmVlbiBwb3B1bGF0ZWQgd2l0aCB0cmF2ZWxUaW1lc1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICRxLmFsbChMb2NhdGlvbi5yZXNwb25zZVRyYW5zZm9ybWVyKGRhdGEpKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ0xvY2F0aW9uc1NlcnZpY2UnLCBMb2NhdGlvbnNTZXJ2aWNlKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIFlvY2FsKCRxLCAkaHR0cCwgQXBwU2V0dGluZ3MsICRsb2cpIHtcblxuICB2YXIgc2VydmljZSA9IHt9O1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZShcIllvY2FsU2VydmljZVwiKTtcblxuICAgXG5cbiBcblxuICBzZXJ2aWNlLmdldCA9IGZ1bmN0aW9uKCBnZXREYXRhICkge1xuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAvLyBsaXN0QnlEaXN0YW5jZUNhdC9Gb29kLzgwMDAvMzkuOTM3ODkzLy03NS4xNjg5MzQ3XG4gICAkaHR0cC5nZXQoQXBwU2V0dGluZ3MueW9jYWxBUEkuYmFzZSsnbGlzdEJ5RGlzdGFuY2VDYXQvJytnZXREYXRhLmNhdGVnb3J5KycvJytnZXREYXRhLnJhZGl1cysnLycrZ2V0RGF0YS5sYXQrJy8nK2dldERhdGEubG5nKVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZygnZm91bmQge2xlbmd0aH0gJytnZXREYXRhLmNhdGVnb3J5Kycgc3BvdHMgd2l0aGluICcrZ2V0RGF0YS5yYWRpdXMrJyBtZXRlcnMgb2YgJytnZXREYXRhLmxhdCsnLCcrZ2V0RGF0YS5sbmcsIGRhdGEubG9jYXRpb25zKTtcbiAgICAgICAgICBkYXRhLnJhZGl1cyA9IGdldERhdGEucmFkaXVzO1xuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihlcnIsIHN0YXR1cykge1xuICAgICAgICAgICRsb2cud2FybignVW5hYmxlIHRvIGdldCBsb2NhdGlvbjogJyArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyLCBzdGF0dXMpO1xuICAgICAgICB9KTtcbiAgIFxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIHNlcnZpY2UuYWxsID0gZnVuY3Rpb24oZ2V0RGF0YSl7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgIC8vbGlzdEJ5RGlzdGFuY2VDYXQvRm9vZC84MDAwLzM5LjkzNzg5My8tNzUuMTY4OTM0N1xuICAgJGh0dHAuZ2V0KEFwcFNldHRpbmdzLnlvY2FsQVBJLmJhc2UrJy9saXN0JylcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoJ2FsbDogZm91bmQge2xlbmd0aH0gdG90YWwgc3BvdHMnLCBkYXRhKTtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpIHtcbiAgICAgICAgICAkbG9nLndhcm4oJ1VuYWJsZSB0byBnZXQgbG9jYXRpb246ICcgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVyciwgc3RhdHVzKTtcbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcblxuICB9XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cbn1cblxuc2VydmljZXNNb2R1bGUuc2VydmljZSgnWW9jYWwnLCBZb2NhbCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYnVsayA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuc2VydmljZXMnLCBbXSk7XG5cbmJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqX2luZGV4fCouc3BlYykuanMnXSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2VydmljZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBFeGFtcGxlU2VydmljZSgkcSwgJGh0dHApIHtcblxuICB2YXIgc2VydmljZSA9IHt9O1xuXG4gIHNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICRodHRwLmdldCgnYXBpUGF0aCcpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgIH0pLmVycm9yKGZ1bmN0aW9uKGVyciwgc3RhdHVzKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIsIHN0YXR1cyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfTtcblxuICByZXR1cm4gc2VydmljZTtcblxufVxuXG5zZXJ2aWNlc01vZHVsZS5zZXJ2aWNlKCdFeGFtcGxlU2VydmljZScsIEV4YW1wbGVTZXJ2aWNlKTsiLCIvKipcbiAqIEBhdXRob3IgICAgIFRob21hcyBCdXJsZXNvblxuICogQGF1dGhvciAgICAgU3RhY2tPdmVyZmxvdyAtIEhhcnRvLCBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzMTU0MDgvaG93LWRvLWktZm9ybWF0LWEtdGltZXN0YW1wLWluLWphdmFzY3JpcHQtdG8tZGlzcGxheS1pdC1pbi1ncmFwaHMtdXRjLWlzLWZpbmVcbiAqIEBkZXNjcmlwdGlvblxuICogIFxuICogRGF0ZVRpbWUgdXRpbGl0eSBjbGFzcyB0aGF0IHNwaXRzIG91dCBVVEMgdGltZXN0YW1wIHN0cmluZ3MgdXN1YWxseSB1c2VkIGluIGEgcmVwb3J0aW5nLCBwcmludC1jYXBhYmxlIHByb2Nlc3MuXG4qL1xuIFxuXG4gJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBidWlsZFRpbWVTdHJpbmcgPSBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0KVxuICAgICAgICB7XG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgXCIlaDolbTolczolelwiO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBwYWQodmFsdWUsIGlzTWlsbGlTZWNvbmRzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiAoaXNNaWxsaVNlY29uZHMpID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNaWxsaVNlY29uZHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoaXNNaWxsaVNlY29uZHMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZSA8IDEwKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiMDBcIiArIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodmFsdWUgPCAxMDApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCIwXCIgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4odmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPCAyKSA/IFwiMFwiICsgdmFsdWUgOiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdC5yZXBsYWNlKC8lKFthLXpBLVpdKS9nLCBmdW5jdGlvbiAoXywgZm10Q29kZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2goZm10Q29kZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIllcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRIb3VycygpKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TWludXRlcygpKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0U2Vjb25kcygpKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwielwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIHRydWUpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGZvcm1hdCBjb2RlOiBcIiArIGZtdENvZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG5cbiAvLyBQdWJsaXNoIEFQSSBmb3IgRGF0ZVRpbWUgdXRpbHNcbiAgICAgICAgLy8gcmV0dXJuIHtcbiAgICAgICAgLy8gICAgIGZvcm1hdHRlZE5vdzogZnVuY3Rpb24gKClcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gYnVpbGRUaW1lU3RyaW5nKG5ldyBEYXRlKCkpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9O1xuICAgICAgICAvLyBcbiBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmb3JtYXR0ZWROb3c6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJ1aWxkVGltZVN0cmluZyhuZXcgRGF0ZSgpKTsgfVxuIH07XG5cblxuXG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIExvZ0RlY29yYXRvclxuICogIEBzb3VyY2U6IGh0dHA6Ly9zb2x1dGlvbm9wdGltaXN0LmNvbS8yMDEzLzEwLzA3L2VuaGFuY2UtYW5ndWxhcmpzLWxvZ2dpbmctdXNpbmctZGVjb3JhdG9ycy9cbiAqL1xuXG4gdmFyIExvZ0RlY29yYXRvciA9IGZ1bmN0aW9uKCAkcHJvdmlkZSAgKXtcblxuXG4gICAgICAgICAgICAgIC8vIFJlZ2lzdGVyIG91ciAkbG9nIGRlY29yYXRvciB3aXRoIEFuZ3VsYXJKUyAkcHJvdmlkZXJcbiAgICAgICAgICAgICAgJHByb3ZpZGUuZGVjb3JhdG9yKCAnJGxvZycsIFsgXCIkZGVsZWdhdGVcIiwgZnVuY3Rpb24oICRkZWxlZ2F0ZSApXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIC8vIE5PVEU6IHRoZSBMb2dFbmNoYW5jZXIgbW9kdWxlIHJldHVybnMgYSBGVU5DVElPTiB0aGF0IHdlIG5hbWVkIGBlbmNoYW5jZUxvZ2dlckZuYFxuICAgICAgICAgICAgICAgLy8gICAgICAgQWxsIHRoZSBkZXRhaWxzIG9mIGhvdyB0aGUgYGVuY2hhbmNlbWVudGAgd29ya3MgaXMgZW5jYXBzdWxhdGVkIGluIExvZ0VuaGFuY2VyIVxuXG4gICAgICAgICAgICAgICAgICByZXF1aXJlKCcuL0xvZ0VuaGFuY2VyLmpzJykoICRkZWxlZ2F0ZSApO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJGRlbGVnYXRlO1xuICAgICAgICAgICAgICB9XSk7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gIExvZ0RlY29yYXRvcjsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIExvZ0VuaGFuY2VyXG4gKiBUaGlzIGFkZHMgdGltZXN0YW1wcyBhbmQgc3VwcGxhbnQgZnVuY3Rpb25hbGl0eSB0byBBbmd1bGFyICRsb2cgc2VydmljZVxuICogQHNvdXJjZTogaHR0cDovL3NvbHV0aW9ub3B0aW1pc3QuY29tLzIwMTMvMTAvMDcvZW5oYW5jZS1hbmd1bGFyanMtbG9nZ2luZy11c2luZy1kZWNvcmF0b3JzL1xuICogQGFwaTogcHVibGljXG4gKiBAcmV0dXJuczogT2JqZWN0IC0gZXh0ZW5kZWQgJGxvZyBzZXJ2aWNlXG4gKi9cblxudmFyIGVuY2hhbmNlTG9nZ2VyID0gZnVuY3Rpb24oICRsb2cgKXtcbiAgdmFyIHN1cHBsYW50ID0gcmVxdWlyZSgnLi4vc3VwcGxhbnQuanMnKTtcbiAgdmFyIERhdGVUaW1lID0gcmVxdWlyZSgnLi4vRGF0ZVRpbWUuanMnKTtcblxuXG4gIC8qKlxuICAgKiBDYXB0dXJlIHRoZSBvcmlnaW5hbCAkbG9nIGZ1bmN0aW9uczsgZm9yIHVzZSBpbiBlbmhhbmNlZExvZ0ZuKClcbiAgICogQGFwaSAgcHJpdmF0ZSBcbiAgICovXG4gIFxuICB2YXIgXyRsb2cgPSAoZnVuY3Rpb24oICRsb2cgKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvZyAgIDogJGxvZy5sb2csXG4gICAgICAgIGluZm8gIDogJGxvZy5pbmZvLFxuICAgICAgICB3YXJuICA6ICRsb2cud2FybixcbiAgICAgICAgZGVidWcgOiAkbG9nLmRlYnVnLFxuICAgICAgICBlcnJvciA6ICRsb2cuZXJyb3JcbiAgICAgIH07XG4gIH0pKCAkbG9nICk7IFxuXG5cblxuICAgLyoqXG4gICAgKiBQYXJ0aWFsIGFwcGxpY2F0aW9uIHRvIHByZS1jYXB0dXJlIGEgbG9nZ2VyIGZ1bmN0aW9uXG4gICAgKiBAYXBpOiAgcHJpdmF0ZSBcbiAgICAqIEByZXR1cm5zOiBGdW5jdGlvbiBcbiAgICAqL1xuICAgIHZhciBwcmVwYXJlTG9nRm4gPSBmdW5jdGlvbiggbG9nRm4sIGNsYXNzTmFtZSwgbG9nZ2luZyApe1xuICAgICAgXG4gICAgICAvKipcbiAgICAgICAqIEludm9rZSB0aGUgc3BlY2lmaWVkIGBsb2dGbjxgIHdpdGggdGhlIHN1cHBsYW50IGZ1bmN0aW9uYWxpdHkuLi5cbiAgICAgICAqIEBhcGk6IHByaXZhdGUgXG4gICAgICAgKiBAZXhhbXBsZTogXG4gICAgICAgKiAgIHZhciB1c2VyID0geyB3aG86XCJUaG9tYXMgQnVybGVzb25cIlwiLCBlbWFpbD1cIlRob21hc0J1cmxlc29uQGdtYWlsLmNvbVwiXCIgfTtcbiAgICAgICAqICAgJGxvZy53YXJuKCBcIkEgd2FybmluZyBtZXNzYWdlIGZvciBge3dob31gIHdpbGwgYmUgc2VudCB0byBge2VtYWlsfWAgIVwiLCB1c2VyICk7ICAgXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzaG91bGQgb3V0cHV0OiBBIHdhcm5pbmcgbWVzc2FnZSBmb3IgYFRob21hcyBCdXJsZXNvbmAgd2lsbCBiZSBzZW50IHRvIGBUaG9tYXNCdXJsZXNvbkBnbWFpbC5jb21gICFcbiAgICAgICAqL1xuICAgICAgdmFyIGVuaGFuY2VkTG9nRm4gPSBmdW5jdGlvbiggKXtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgICAgbm93ICA9IERhdGVUaW1lLmZvcm1hdHRlZE5vdygpO1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJyc7XG4gICAgICAgICAgICAvLyBwcmVwZW5kIGEgdGltZXN0YW1wIHRvIHRoZSBvcmlnaW5hbCBvdXRwdXQgbWVzc2FnZVxuICAgICAgICAgICAgYXJnc1swXSA9IHN1cHBsYW50KFwiezB9IC0gezF9ezJ9XCIsIFsgbm93LCBjbGFzc05hbWUsIGFyZ3NbMF0gXSk7XG5cbiAgICAgICAgaWYobG9nZ2luZylsb2dGbi5jYWxsKCBudWxsLCAgc3VwcGxhbnQuYXBwbHkoIG51bGwsIGFyZ3MgKSApO1xuICAgICAgfTtcblxuICAgICAgLy8gU3BlY2lhbC4uLiBvbmx5IG5lZWRlZCB0byBzdXBwb3J0IGFuZ3VsYXItbW9ja3MgZXhwZWN0YXRpb25zXG4gICAgICBlbmhhbmNlZExvZ0ZuLmxvZ3MgPSBbIF07XG4gICAgICBcbiAgICBcbiAgICAgICAgcmV0dXJuICBlbmhhbmNlZExvZ0ZuOyBcbiAgICAgIFxuICAgICAgXG4gICAgfTtcblxuXG5cblxuICAgIC8qKlxuICAgICAqIFN1cHBvcnQgdG8gZ2VuZXJhdGUgY2xhc3Mtc3BlY2lmaWMgbG9nZ2VyIGluc3RhbmNlIHdpdGggY2xhc3NuYW1lIG9ubHlcbiAgICAgKlxuICAgICAqIEBwYXJhbTogbmFtZVxuICAgICAqIEByZXR1cm5zOiBPYmplY3Qgd3JhcHBlciBmYWNhZGUgdG8gJGxvZ1xuICAgICAqL1xuICAgIHZhciBnZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKCBjbGFzc05hbWUsIGxvZ2dpbmcpe1xuICAgICAgY2xhc3NOYW1lID0gKCBjbGFzc05hbWUgIT09IHVuZGVmaW5lZCApID8gY2xhc3NOYW1lICsgXCI6OlwiIDogXCJcIjtcblxuICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgbG9nICAgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmxvZywgICBjbGFzc05hbWUsIGxvZ2dpbmcgKSxcbiAgICAgICAgICAgaW5mbyAgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmluZm8sICBjbGFzc05hbWUsIGxvZ2dpbmcgKSxcbiAgICAgICAgICAgd2FybiAgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLndhcm4sICBjbGFzc05hbWUsIGxvZ2dpbmcgKSxcbiAgICAgICAgICAgZGVidWcgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmRlYnVnLCBjbGFzc05hbWUsIGxvZ2dpbmcgKSxcbiAgICAgICAgICAgLy8gZXJyb3IgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmVycm9yLCAgY2xhc3NOYW1lIClcbiAgICAgICAgfTsgIFxuICAgIFxuICAgIH07XG5cblxuXG4gICAgLy8gd3JhcCBlYWNoIGxvZyBtZXRob2QgXG4gICAgJGxvZy5sb2cgICA9IHByZXBhcmVMb2dGbiggJGxvZy5sb2cgKTtcbiAgICAkbG9nLmluZm8gID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmluZm8gKTtcbiAgICAkbG9nLndhcm4gID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLndhcm4gKTtcbiAgICAkbG9nLmRlYnVnID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmRlYnVnICk7XG4gICAgLy8gJGxvZy5lcnJvciA9IHByZXBhcmVMb2dGbiggJGxvZy5lcnJvciApO1xuXG4gICAgLy8gQWRkIHNwZWNpYWwgbWV0aG9kIHRvIEFuZ3VsYXJKUyAkbG9nXG4gICAgJGxvZy5nZXRJbnN0YW5jZSA9IGdldEluc3RhbmNlO1xuIFxuXG4gICAgcmV0dXJuICRsb2c7XG59Oy8vZW5jaGFuY2VMb2dnZXJcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gIGVuY2hhbmNlTG9nZ2VyOyIsIi8qKlxuICogQGF1dGhvciAgICAgIFRob21hcyBCdXJsZXNvblxuICogQGRhdGUgICAgICAgIE5vdmVtYmVyLCAyMDEzXG4gKiBAc291cmNlOiAgICAgaHR0cHM6Ly9naXRodWIuY29tL1Rob21hc0J1cmxlc29uL2FuZ3VsYXJqcy1sb2dEZWNvcmF0b3IvYmxvYi9tYXN0ZXIvc3JjL21pbmRzcGFjZS91dGlscy9zdXBwbGFudC5qc1xuICAqL1xuIFxuXG4gJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3VwcGxhbnQgPSAgZnVuY3Rpb24oIHRlbXBsYXRlLCB2YWx1ZXMsIHBhdHRlcm4gKSB7XG4gICAgICAgICAgICBwYXR0ZXJuID0gcGF0dGVybiB8fCAvXFx7KFteXFx7XFx9XSopXFx9L2c7XG5cbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKHBhdHRlcm4sIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IGIuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgICAgICAgICAgciA9IHZhbHVlcztcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHMgaW4gcCkgeyByID0gcltwW3NdXTsgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgICAgICAgICByID0gYTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKHR5cGVvZiByID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgciA9PT0gJ251bWJlcicpID8gciA6IGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG4vLyBzdXBwbGFudCgpIG1ldGhvZCBmcm9tIENyb2NrZm9yZHMgYFJlbWVkaWFsIEphdmFzY3JpcHRgXG5GdW5jdGlvbi5wcm90b3R5cGUubWV0aG9kID0gZnVuY3Rpb24gKG5hbWUsIGZ1bmMpIHtcbiAgICB0aGlzLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmM7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdHJpbmcubWV0aG9kKFwic3VwcGxhbnRcIiwgZnVuY3Rpb24oIHZhbHVlcywgcGF0dGVybiApIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIHN1cHBsYW50KHNlbGYsIHZhbHVlcywgcGF0dGVybik7XG59KTtcblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSAgU3RyaW5nLnN1cHBsYW50ID0gc3VwcGxhbnQ7Il19
