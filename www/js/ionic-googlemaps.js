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
  console.log( coordinates);
  

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

    $log = $log.getInstance("MapCtrl");

 	  // ViewModel
  	var vm = this;
    var currentCenter = $rootScope.currentPosition.coords;

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

    vm.distance_knob ={
              options:{
                readOnly:       true,
                dynamicOptions: true,
                displayInput:   false,
                // scale:          {
                //   enabled:  true,
                //   type:     'lines',
                //   color:    'gray',
                //   width:    1,
                //   quantity: 30,
                //   height:   5,
                //   spaceWidth: 5
                // },
                size:         30,
                min:          0,
                max:          80,//hour and a half
                step:         1,
                barColor:     '#5BC01E',
                trackColor:   '#212121',
                trackWidth:   3,
                barWidth:     6
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

    
  vm._metersPerMin  = function( far) {
      // parse tiem for either a double digit minute format
      // or the first did
      var _time = far.text.match(/([0-9][0-9])|(\d)/g);
      // if hours convert to mins
      if(_time.length == 2) var mins = +_time[1] + (+_time[0]*60);
      var _mins = mins || +_time[0];
      var _distance = far.value; 
      
      return _distance/_mins;
  };



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
          vm.this_radius = _.first(vm.locations_by_distance).travelTime.value+100;
          vm.locationsRadius = vm.gmap.setRadiusCircle({radius: vm.this_radius});
          vm.gmap.map.fitBounds(vm.locationsRadius.getBounds());


          vm.travelRate = vm._metersPerMin(_.last(vm.locations_by_distance).travelTime);
          vm.distance_knob.value = Math.ceil(vm.this_radius/vm.travelRate);
          
          setKnobValue(vm.this_radius, _.first(vm.locations_by_distance).travelTime.value, _.last(vm.locations_by_distance).travelTime.value);
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
                displayInput: true,
                subText: {
                  enabled: true,
                  text:    'meter radius',
                  color:   'black',
                  font:    'auto'
                },
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
      // $log.log("hideMarkerFor:{name}", location);
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

              // update distance knob
              vm.distance_knob.value = Math.ceil(newValue/vm.travelRate);
              vm.distance_knob.options = vm.distance_knob.options;

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
  $log = $log.getInstance('GMap');

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


  Location.build = function(lData) {
    $log.debug('build {name}', lData);
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItYW5pbWF0ZS9hbmd1bGFyLWFuaW1hdGUubWluLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvYm93ZXJfY29tcG9uZW50cy9pb25pYy1hZHZhbmNlZC1jYXJvdXNlbC9zcmMvYWR2YW5jZWQtY2Fyb3VzZWwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9ib3dlcl9jb21wb25lbnRzL25nLWtub2IvZGlzdC9uZy1rbm9iLm1pbi5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2FwcC1tYWluLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29uc3RhbnRzLmRldmVsb3BtZW50LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvQXBwQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL0Jyb3dzZUN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9Db25uZWN0Q3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL0xvZ2luQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL01hcEN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9faW5kZXguanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9kaXJlY3RpdmVzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2RpcmVjdGl2ZXMvbUFwcExvYWRpbmdEaXJlY3RpdmUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9tb2RlbHMvR01hcC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL21vZGVscy9Mb2NhdGlvbk1vZGVsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvbW9kZWxzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL29uX2NvbmZpZy5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL29uX3J1bi5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3NlcnZpY2VzL0N1cnJlbnRDb29yZHNTZXJ2aWNlLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvTG9jYXRpb25zU2VydmljZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3NlcnZpY2VzL1lvY2FsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvX2luZGV4LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvZXhhbXBsZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL0RhdGVUaW1lLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvdXRpbHMvbG9nZ2luZy9Mb2dEZWNvcmF0b3IuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9sb2dnaW5nL0xvZ0VuaGFuY2VyLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvdXRpbHMvc3VwcGxhbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7QUFLQSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxhQUFhLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sU0FBUyxPQUFPLEdBQUcsSUFBSSxHQUFHLFlBQVksT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLE1BQU0sT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxPQUFPLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsT0FBTyxFQUFFLFFBQVEsS0FBSyxFQUFFLE1BQU07QUFDeGdCLEtBQUssRUFBRSxHQUFHLElBQUksRUFBRSxHQUFHLFNBQVMsT0FBTyxFQUFFLE1BQU0sUUFBUSxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFFLFNBQVMsT0FBTyxFQUFFLEdBQUcsU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLFNBQVMsT0FBTyxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxLQUFLLFNBQVMsR0FBRyxFQUFFLENBQUMsT0FBTyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxHQUFHLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLE1BQU0sRUFBRSxjQUFjLEdBQUcsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLFlBQVksT0FBTyxTQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtBQUNsZixFQUFFLEVBQUUsYUFBYSxVQUFVLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLE1BQU0sU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxJQUFJLEtBQUssRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsYUFBYSxJQUFJLEtBQUssRUFBRSxhQUFhLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxTQUFTLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxLQUFLLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEtBQUssT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNO0FBQzFmLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSyxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxZQUFZLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxHQUFHLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsY0FBYyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsR0FBRyxTQUFTLEVBQUUsSUFBSSxLQUFLLEVBQUUsSUFBSSxLQUFLLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLE9BQU8sYUFBYSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sT0FBTyxNQUFNLEVBQUUsRUFBRSxpQkFBaUIsSUFBSSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTztBQUNyZixHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sV0FBVyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLE9BQU8sSUFBSSxFQUFFLFdBQVcsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLElBQUksRUFBRSxHQUFHLElBQUksT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLENBQUMsT0FBTyxJQUFJLEdBQUcsTUFBTSxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsV0FBVyxHQUFHLGNBQWMsTUFBTSxDQUFDLEVBQUUsR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxZQUFZLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsRUFBRSxHQUFHLFNBQVMsR0FBRztBQUN4ZixFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sT0FBTyxNQUFNLE1BQU0sQ0FBQyxNQUFNLFVBQVUsQ0FBQyxFQUFFLE9BQU8sT0FBTyxPQUFPLE1BQU0sU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxJQUFJLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEtBQUssSUFBSSxFQUFFLEVBQUUsS0FBSyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsU0FBUyxHQUFHLEVBQUUsU0FBUyxHQUFHLEVBQUUsWUFBWSxHQUFHLEVBQUUsVUFBVSxHQUFHLEVBQUUsV0FBVyxHQUFHLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEdBQUcsRUFBRSx3QkFBd0IsR0FBRyxFQUFFLG1CQUFtQixHQUFHO0NBQzNlLEVBQUUsYUFBYSxHQUFHLGlCQUFpQixFQUFFLGlCQUFpQixHQUFHLEVBQUUsdUJBQXVCLEdBQUcsRUFBRSxrQkFBa0IsR0FBRyxvQ0FBb0MsRUFBRSxZQUFZLEdBQUcsZ0JBQWdCLElBQUksR0FBRyxFQUFFLFFBQVEsR0FBRyxFQUFFLFdBQVcsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLFdBQVcsSUFBSSxHQUFHLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLEdBQUcsbUJBQW1CLEVBQUUsV0FBVyxrQkFBa0IsR0FBRyxlQUFlLEdBQUcsd0JBQXdCLEVBQUUsa0JBQWtCLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxnQkFBZ0IsR0FBRyxrQkFBa0IsR0FBRyxlQUFlLElBQUksRUFBRSxPQUFPO0FBQy9lLElBQUksVUFBVSxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsSUFBSSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssc0JBQXNCLENBQUMsR0FBRyxFQUFFLFNBQVMsb0JBQW9CLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxzQkFBc0IsT0FBTyxHQUFHLFNBQVMsU0FBUyxRQUFRLGFBQWEsQ0FBQyxRQUFRLFNBQVMsRUFBRSxDQUFDLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksT0FBTyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLFFBQVEsaUJBQWlCLENBQUMsUUFBUSxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxHQUFHLE9BQU8sSUFBSSxJQUFJLFNBQVMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsR0FBRztBQUNwZixFQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsR0FBRyxPQUFPLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxlQUFlLFNBQVMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUUsS0FBSyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsa0JBQWtCLENBQUMsS0FBSyxhQUFhLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxLQUFLLFFBQVEsR0FBRyxLQUFLLGVBQWUsR0FBRyxLQUFLLHFCQUFxQixJQUFJLEtBQUssT0FBTyxFQUFFLEVBQUUsTUFBTSxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksT0FBTyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtBQUNuZixFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssTUFBTSxFQUFFLFVBQVUsQ0FBQyxRQUFRLFNBQVMsRUFBRSxDQUFDLEtBQUssS0FBSyxHQUFHLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLEtBQUssZUFBZSxLQUFLLElBQUksU0FBUyxFQUFFLFdBQVcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxLQUFLLFFBQVEsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLFFBQVEsT0FBTyxLQUFLLFNBQVMsS0FBSyxTQUFTLEVBQUUsRUFBRSxDQUFDLE9BQU8sS0FBSyxhQUFhLEtBQUssRUFBRSxJQUFJLFFBQVEsU0FBUyxFQUFFLENBQUMsT0FBTyxLQUFLLGFBQWEsU0FBUyxJQUFJLFVBQVUsU0FBUyxFQUFFLENBQUMsT0FBTyxLQUFLLGFBQWEsV0FBVyxJQUFJLE1BQU0sVUFBVSxDQUFDLEtBQUssS0FBSztBQUM3Z0IsS0FBSyxLQUFLLFNBQVMsT0FBTyxVQUFVLENBQUMsS0FBSyxLQUFLLFFBQVEsS0FBSyxLQUFLLFVBQVUsSUFBSSxVQUFVLENBQUMsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxTQUFTLENBQUMsSUFBSSxPQUFPLFVBQVUsQ0FBQyxLQUFLLEtBQUssUUFBUSxLQUFLLEtBQUssU0FBUyxLQUFLLFNBQVMsQ0FBQyxJQUFJLFNBQVMsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxxQkFBcUIsVUFBVSxDQUFDLEVBQUUsU0FBUyxPQUFPLFNBQVMsU0FBUyxFQUFFLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRSxLQUFLLGVBQWUsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLEtBQUssZUFBZSxPQUFPLEVBQUUsS0FBSyxPQUFPLEtBQUssT0FBTyxLQUFLLFNBQVMsaUJBQWlCLENBQUM7QUFDemUsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFVBQVUsSUFBSSxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsYUFBYSxJQUFJLE9BQU8sT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUcsS0FBSyxJQUFJLEVBQUUsS0FBSyxLQUFLLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxZQUFZLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxLQUFLLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxZQUFZLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEtBQUssU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sU0FBUyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxLQUFLLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLEVBQUUsYUFBYSxFQUFFLE9BQU8sS0FBSyxTQUFTO0FBQ2xnQixFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxPQUFPLEtBQUssU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxLQUFLLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsUUFBUSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxXQUFXLEtBQUssS0FBSyxDQUFDLFFBQVEsYUFBYSxlQUFlLFlBQVksWUFBWSxjQUFjLGtCQUFrQixtQkFBbUIsV0FBVyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxTQUFTLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDbmYsT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsR0FBRyxTQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLFNBQVMsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLElBQUksRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxTQUFTLEtBQUssTUFBTSxFQUFFLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxZQUFZLEtBQUssTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEtBQUssTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsYUFBYSxLQUFLO0FBQ3hmLEdBQUcsQ0FBQyxFQUFFLEdBQUcsT0FBTyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLE9BQU8sU0FBUyxRQUFRLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsRUFBRSxPQUFPLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxNQUFNLE9BQU8sSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsR0FBRyxPQUFPLEVBQUUsT0FBTyxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sTUFBTSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxjQUFjLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsU0FBUyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUU7QUFDcGYsRUFBRSxRQUFRLEVBQUUsU0FBUyxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsT0FBTyxLQUFLLEVBQUUsUUFBUSxJQUFJLElBQUksUUFBUSxFQUFFLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxPQUFPLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxF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QUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxPQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxhQUFhLGtCQUFrQixFQUFFLEdBQUcsRUFBRSxJQUFJLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxLQUFLLEtBQUssSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsWUFBWSxXQUFXLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsWUFBWSxVQUFVLENBQUMsRUFBRSxjQUFjLEVBQUUsZUFBZSxNQUFNLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRTtBQUN0ZixLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsSUFBSSxFQUFFLFFBQVEsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFLEtBQUssR0FBRyxFQUFFLEtBQUssSUFBSSxFQUFFLEdBQUcsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLEtBQUssRUFBRSxFQUFFLE1BQU0sS0FBSyxJQUFJLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksR0FBRyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLE9BQU8sT0FBTyxFQUFFLEtBQUssS0FBSyxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxPQUFPO0FBQ3JmLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLFNBQVMsUUFBUSxHQUFHLEVBQUUsRUFBRSxHQUFHLFNBQVMsUUFBUSxJQUFJLEVBQUUsRUFBRSxTQUFTLFFBQVEsR0FBRyxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLFdBQVcsSUFBSSxFQUFFLFdBQVcscUJBQXFCLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsZUFBZSxHQUFHLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxZQUFZLGNBQWMsRUFBRSxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsT0FBTyxTQUFTLFFBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssT0FBTyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsT0FBTyxPQUFPLElBQUksRUFBRSxFQUFFLEtBQUs7QUFDN2UsR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssU0FBUyxHQUFHLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxFQUFFLFlBQVksSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFLFlBQVksTUFBTSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsWUFBWSxVQUFVLENBQUMsRUFBRSxTQUFTLGNBQWMsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLE1BQU0sSUFBSSxFQUFFLEdBQUcsV0FBVyxJQUFJLEdBQUcsRUFBRSxFQUFFLE9BQU8sT0FBTyxFQUFFLEVBQUUsYUFBYSxVQUFVLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEdBQUcsU0FBUyxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxjQUFjLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUU7QUFDcGYsRUFBRSxLQUFLLFNBQVMsRUFBRSxHQUFHLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLElBQUksSUFBSSxFQUFFLFdBQVcsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLEdBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxTQUFTLEVBQUUsUUFBUSxJQUFJLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVB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QUUsT0FBTyxNQUFNLFNBQVMsRUFBRTtBQUMxZixFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFFBQVEsSUFBSSxFQUFFLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFNBQVMsS0FBSyxPQUFPLElBQUksU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxTQUFTLEdBQUcsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTTtBQUNqZixFQUFFLEVBQUUsRUFBRSxHQUFHLE9BQU8sRUFBRSxjQUFjLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxZQUFZLENBQUMsRUFBRSxZQUFZLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLEtBQUssRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxHQUFHLE9BQU8sU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxTQUFTLGNBQWMsQ0FBQyxtQkFBbUIsU0FBUyxFQUFFLENBQUMsS0FBSyxLQUFLLENBQUMsWUFBWSxrQkFBa0IsYUFBYSxXQUFXLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLE1BQU0sS0FBSyxJQUFJLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLHVCQUF1QixHQUFHLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDdGYsQ0FBQyxHQUFHLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLE9BQU8sU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxlQUFlLEVBQUUsRUFBRSxHQUFHLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsR0FBRyxNQUFNLEtBQUssV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxNQUFNLEtBQUssV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxLQUFLLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLE1BQU0sUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLFNBQVMsYUFBYSxFQUFFLEVBQUUsS0FBSyxRQUFRLEdBQUcsR0FBRyxHQUFHLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxLQUFLLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDO0NBQ2pmLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssT0FBTyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxPQUFPLE1BQU0sT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLG1CQUFtQixHQUFHLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLHFCQUFxQixFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxtQkFBbUIsYUFBYSxJQUFJLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsYUFBYSxJQUFJLEVBQUUsRUFBRSxPQUFPLElBQUksSUFBSSxFQUFFLEVBQUUsT0FBTyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sT0FBTyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzllLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLE9BQU8sU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsVUFBVSxJQUFJLFVBQVUsUUFBUSxHQUFHLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsRUFBRSxLQUFLLFVBQVUsR0FBRyxFQUFFLFdBQVcsR0FBRyxJQUFJLEVBQUUsVUFBVSxFQUFFLGNBQWMsR0FBRyxJQUFJLEVBQUUsY0FBYyxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsR0FBRyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE9BQU8sR0FBRyxjQUFjLEVBQUUsT0FBTyxHQUFHLEVBQUUsR0FBRyxVQUFVLEdBQUcsU0FBUyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztBQUMxZ0IsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxHQUFHLEVBQUUsS0FBSyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsRUFBRSxLQUFLLEtBQUssT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPLFVBQVUsU0FBUyxv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QUssVUFBVSxVQUFVLFNBQVMsWUFBWSxZQUFZLFdBQVcsU0FBUyxhQUFhLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFlBQVksYUFBYSxZQUFZLGFBQWEsV0FBVyxZQUFZLFNBQVMsVUFBVSxhQUFhLGNBQWMsT0FBTyxLQUFLLEtBQUssVUFBVSxRQUFRLFNBQVMsSUFBSSxJQUFJLE1BQU0sTUFBTSxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxPQUFPLFFBQVEsS0FBSyxLQUFLLE9BQU8sS0FBSyxJQUFJLEtBQUssTUFBTSxPQUFPLEtBQUssWUFBWSxhQUFhLEtBQUssUUFBUSxLQUFLLEVBQUUsS0FBSyxLQUFLLFFBQVEsS0FBSyxFQUFFLEtBQUssT0FBTyxLQUFLLFFBQVEsV0FBVyxDQUFDLElBQUksT0FBTyxLQUFLLEdBQUcsUUFBUSxPQUFPLE1BQU0sS0FBSyxLQUFLLE9BQU8sTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLENBQUMsSUFBSSxZQUFZLFNBQVMsS0FBSyxRQUFRLEtBQUssRUFBRSxJQUFJLFdBQVcsS0FBSyxlQUFlLEtBQUssUUFBUSxXQUFXLEtBQUssU0FBUyxLQUFLLGVBQWUsS0FBSyxRQUFRLFNBQVMsS0FBSyxLQUFLLFFBQVEsTUFBTSxVQUFVLGFBQWEsS0FBSyxRQUFRLE1BQU0sTUFBTSxLQUFLLFFBQVEsTUFBTSxZQUFZLElBQUksS0FBSyxpQkFBaUIsWUFBWSxLQUFLLFFBQVEsV0FBVyxrQkFBa0IsWUFBWSxLQUFLLFFBQVEsU0FBUyxpQkFBaUIsWUFBWSxLQUFLLFFBQVEsU0FBUyxvQkFBb0IsRUFBRSxpQkFBaUIsWUFBWSxrQkFBa0IsWUFBWSxpQkFBaUIsWUFBWSxvQkFBb0IsWUFBWSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsWUFBWSxLQUFLLENBQUMsS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFlBQVksRUFBRSxrQkFBa0IsS0FBSyxrQkFBa0IsTUFBTSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsYUFBYSxLQUFLLENBQUMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLFVBQVUsRUFBRSxtQkFBbUIsS0FBSyxrQkFBa0IsS0FBSyxtQkFBbUIsS0FBSyxrQkFBa0IsTUFBTSxLQUFLLFFBQVEsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLEVBQUUsWUFBWSxXQUFXLFdBQVcsU0FBUyxLQUFLLFFBQVEsS0FBSyxPQUFPLGlCQUFpQixpQkFBaUIsS0FBSyxRQUFRLEtBQUssTUFBTSxLQUFLLFFBQVEsS0FBSyxXQUFXLGtCQUFrQixrQkFBa0IsS0FBSyxRQUFRLEtBQUssTUFBTSxLQUFLLFFBQVEsS0FBSyxXQUFXLGlCQUFpQixpQkFBaUIsS0FBSyxRQUFRLEtBQUssTUFBTSxLQUFLLFFBQVEsS0FBSyxXQUFXLG9CQUFvQixvQkFBb0IsS0FBSyxRQUFRLEtBQUssTUFBTSxLQUFLLFFBQVEsS0FBSyxXQUFXLEtBQUssUUFBUSxLQUFLLFVBQVUsWUFBWSxLQUFLLFFBQVEsS0FBSyxNQUFNLFlBQVksV0FBVyxXQUFXLEtBQUssU0FBUyxLQUFLLFVBQVUsaUJBQWlCLGlCQUFpQixXQUFXLFVBQVUsS0FBSyxVQUFVLEtBQUssVUFBVSxrQkFBa0Isa0JBQWtCLFdBQVcsV0FBVyxLQUFLLFFBQVEsUUFBUSxLQUFLLFNBQVMsS0FBSyxVQUFVLGlCQUFpQixpQkFBaUIsV0FBVyxXQUFXLEtBQUssUUFBUSxRQUFRLEtBQUssWUFBWSxLQUFLLFVBQVUsb0JBQW9CLG9CQUFvQixXQUFXLFdBQVcsS0FBSyxVQUFVLFNBQVMsU0FBUyxpQkFBaUIsYUFBYSxDQUFDLElBQUksSUFBSSxHQUFHLE9BQU8sS0FBSyxTQUFTLE9BQU8sT0FBTyxLQUFLLFFBQVEsS0FBSyxRQUFRLE1BQU0sS0FBSyxTQUFTLEtBQUssUUFBUSxNQUFNLEdBQUcsS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLElBQUksS0FBSyxNQUFNLFFBQVEsQ0FBQyxLQUFLLEtBQUssUUFBUSxVQUFVLEtBQUssUUFBUSxhQUFhLENBQUMsSUFBSSxTQUFTLEdBQUcsS0FBSyxRQUFRLEtBQUssS0FBSyxTQUFTLEtBQUssUUFBUSxXQUFXLFNBQVMsS0FBSyxRQUFRLFNBQVMsTUFBTSxLQUFLLFFBQVEsS0FBSyxJQUFJLEtBQUssTUFBTSxLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksRUFBRSxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssUUFBUSxpQkFBaUIsRUFBRSxLQUFLLFFBQVEsZUFBZSxJQUFJLElBQUksT0FBTyxRQUFRLEtBQUssS0FBSyxRQUFRLEtBQUssY0FBYyxVQUFVLEtBQUssWUFBWSxVQUFVLE1BQU0sT0FBTyxLQUFLLFFBQVEsV0FBVyxLQUFLLEVBQUUsS0FBSyxRQUFRLE1BQU0sSUFBSSxLQUFLLFlBQVksYUFBYSxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sS0FBSyxRQUFRLEtBQUssRUFBRSxJQUFJLEtBQUssUUFBUSxNQUFNLEtBQUssS0FBSyxRQUFRLFFBQVEsVUFBVSxTQUFTLElBQUksS0FBSyxRQUFRLEtBQUssS0FBSyxTQUFTLEtBQUssUUFBUSxRQUFRLE9BQU8sU0FBUyxLQUFLLFFBQVEsUUFBUSxLQUFLLE1BQU0sSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLFlBQVksS0FBSyxjQUFjLFVBQVUsS0FBSyxZQUFZLFVBQVUsTUFBTSxPQUFPLEtBQUssUUFBUSxRQUFRLE9BQU8sS0FBSyxLQUFLLFFBQVEsUUFBUSxNQUFNLEtBQUssWUFBWSxhQUFhLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxLQUFLLFFBQVEsS0FBSyxFQUFFLElBQUksS0FBSyxRQUFRLE1BQU0sTUFBTSxHQUFHLEtBQUssUUFBUSxNQUFNLFFBQVEsQ0FBQyxJQUFJLE9BQU8sU0FBUyxLQUFLLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxLQUFLLGVBQWUsS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLEtBQUssV0FBVyxLQUFLLGVBQWUsS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLEtBQUssS0FBSyxFQUFFLEdBQUcsSUFBSSxLQUFLLFFBQVEsWUFBWSxNQUFNLEtBQUssUUFBUSxXQUFXLEtBQUssR0FBRyxTQUFTLEtBQUssUUFBUSxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxRQUFRLE1BQU0sTUFBTSxPQUFPLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxTQUFTLEtBQUssUUFBUSxNQUFNLFNBQVMsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLE1BQU0sTUFBTSxLQUFLLEdBQUcsTUFBTSxVQUFVLElBQUksVUFBVSxDQUFDLE9BQU8sTUFBTSxPQUFPLFdBQVcsY0FBYyxLQUFLLEdBQUcsRUFBRSxhQUFhLE9BQU8sR0FBRyxTQUFTLE1BQU0sQ0FBQyxHQUFHLE9BQU8sS0FBSyxJQUFJLE9BQU8sT0FBTyxHQUFHLE9BQU8sS0FBSyxJQUFJLE9BQU8sT0FBTyxFQUFFLFNBQVMsSUFBSSxVQUFVLFVBQVUsS0FBSyxNQUFNLFFBQVEsT0FBTyxVQUFVLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksR0FBRyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxLQUFLLEtBQUssUUFBUSxNQUFNLGFBQWEsR0FBRyxVQUFVLEtBQUssUUFBUSxNQUFNLEtBQUssQ0FBQyxJQUFJLE9BQU8sS0FBSyxRQUFRLE1BQU0sT0FBTyxPQUFPLEtBQUssUUFBUSxLQUFLLEVBQUUsU0FBUyxLQUFLLFFBQVEsTUFBTSxTQUFTLEtBQUssR0FBRyxNQUFNLFVBQVUsSUFBSSxVQUFVLENBQUMsT0FBTyxNQUFNLE9BQU8sV0FBVyxjQUFjLEtBQUssR0FBRyxFQUFFLGFBQWEsT0FBTyxHQUFHLFNBQVMsTUFBTSxDQUFDLEdBQUcsT0FBTyxLQUFLLElBQUksT0FBTyxPQUFPLEdBQUcsT0FBTyxLQUFLLElBQUksT0FBTyxPQUFPLEdBQUcsT0FBTyxLQUFLLElBQUksUUFBUSxPQUFPLFFBQVEsR0FBRyxPQUFPLEtBQUssSUFBSSxRQUFRLE9BQU8sV0FBVyxJQUFJLFVBQVUsUUFBUSxLQUFLLE1BQU0sUUFBUSxPQUFPLFFBQVEsS0FBSyxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksR0FBRyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksZUFBZSxLQUFLLFFBQVEsTUFBTSxNQUFNLE9BQU8sS0FBSyxRQUFRLE1BQU0sU0FBUyxTQUFTLEtBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFVBQVUsQ0FBQyxLQUFLLEtBQUssUUFBUSxLQUFLLFFBQVEsS0FBSyxRQUFRLElBQUksS0FBSyxTQUFTLFdBQVcsQ0FBQyxLQUFLLEtBQUssUUFBUSxhQUFhLEtBQUssUUFBUSxnQkFBZ0IsS0FBSyxXQUFXLEtBQUssUUFBUSxJQUFJLEtBQUssVUFBVSxZQUFZLENBQUMsS0FBSyxLQUFLLFFBQVEsZUFBZSxLQUFLLFdBQVcsS0FBSyxRQUFRLElBQUksS0FBSyxVQUFVLFlBQVksQ0FBQyxlQUFlLElBQUksS0FBSyxVQUFVLEtBQUssUUFBUSxJQUFJLEtBQUssU0FBUyxXQUFXLENBQUMsS0FBSyxLQUFLLFFBQVEsV0FBVyxJQUFJLE9BQU8sVUFBVSxLQUFLLFFBQVEsV0FBVyxPQUFPLFdBQVcsS0FBSyxRQUFRLElBQUksS0FBSyxZQUFZLGNBQWMsQ0FBQyxlQUFlLEVBQUUsT0FBTyxRQUFRLGlCQUFpQixlQUFlLEtBQUssVUFBVSxLQUFLLFNBQVMsT0FBTyxDQUFDLFNBQVMsaUJBQWlCLENBQUMsS0FBSyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLEVBQUUsS0FBSyxRQUFRLEtBQUssRUFBRSxFQUFFLEdBQUcsTUFBTSxFQUFFLEtBQUssUUFBUSxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsa0JBQWtCLENBQUMsS0FBSyxPQUFPLENBQUMsRUFBRSxJQUFJLE9BQU8sR0FBRyxNQUFNLEtBQUssWUFBWSxFQUFFLE9BQU8sR0FBRyxLQUFLLFFBQVEsS0FBSyxFQUFFLEVBQUUsT0FBTyxHQUFHLEtBQUssUUFBUSxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsWUFBWSxFQUFFLEVBQUUsUUFBUSxDQUFDLElBQUksUUFBUSxNQUFNLElBQUksS0FBSyxLQUFLLEVBQUUsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxNQUFNLElBQUksTUFBTSxJQUFJLEtBQUssUUFBUSxXQUFXLElBQUksTUFBTSxDQUFDLEtBQUssUUFBUSxDQUFDLE1BQU0sTUFBTSxLQUFLLEdBQUcsS0FBSyxLQUFLLE1BQU0sS0FBSyxlQUFlLFFBQVEsS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFlBQVksS0FBSyxPQUFPLEtBQUssUUFBUSxLQUFLLEtBQUssT0FBTyxLQUFLLFFBQVEsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLEtBQUssTUFBTSxLQUFLLFFBQVEsTUFBTSxLQUFLLFFBQVEsS0FBSyxLQUFLLElBQUksS0FBSyxRQUFRLEtBQUssSUFBSSxLQUFLLE1BQU0sS0FBSyxNQUFNLFFBQVEsSUFBSSxPQUFPLEtBQUssT0FBTyxLQUFLLFNBQVMsU0FBUyxLQUFLLGVBQWUsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxNQUFNLEtBQUssVUFBVSxLQUFLLElBQUksS0FBSyxVQUFVLFVBQVUsS0FBSyxVQUFVLFNBQVMsS0FBSyxlQUFlLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsTUFBTSxLQUFLLFdBQVcsS0FBSyxJQUFJLEtBQUssWUFBWSxLQUFLLFFBQVEsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssUUFBUSxpQkFBaUIsRUFBRSxLQUFLLFFBQVEsZUFBZSxJQUFJLEdBQUcsT0FBTyxLQUFLLFNBQVMsT0FBTyxTQUFTLEtBQUssRUFBRSxLQUFLLFFBQVEsTUFBTSxLQUFLLEdBQUcsT0FBTyxLQUFLLFNBQVMsT0FBTyxPQUFPLFNBQVMsSUFBSSxLQUFLLEtBQUssS0FBSyxhQUFhLElBQUksYUFBYSxHQUFHLFNBQVMsT0FBTyxHQUFHLE9BQU8saUJBQWlCLEdBQUcsVUFBVSxrQkFBa0IsS0FBSyxTQUFTLGlCQUFpQixjQUFjLEtBQUssUUFBUSxRQUFRLFFBQVEsS0FBSyxVQUFVLGFBQWEsS0FBSyxLQUFLLFFBQVEsUUFBUSxNQUFNLFNBQVMsS0FBSyxRQUFRLFFBQVEsVUFBVSxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxHQUFHLFlBQVksS0FBSyxlQUFlLEtBQUssUUFBUSxXQUFXLEtBQUssS0FBSyxlQUFlLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsTUFBTSxPQUFPLFNBQVMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLEdBQUcsS0FBSyxVQUFVLEtBQUssSUFBSSxLQUFLLFNBQVMsU0FBUyxNQUFNLEtBQUssV0FBVyxLQUFLLElBQUksS0FBSyxVQUFVLFNBQVMsVUFBVSxLQUFLLFVBQVUsU0FBUyxLQUFLLGVBQWUsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxNQUFNLEtBQUssV0FBVyxLQUFLLElBQUksS0FBSyxXQUFXLEtBQUssU0FBUyxTQUFTLEtBQUssZUFBZSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLE1BQU0sS0FBSyxVQUFVLEtBQUssSUFBSSxLQUFLLFlBQVksS0FBSyxVQUFVLFNBQVMsU0FBUyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxLQUFLLE9BQU8sS0FBSyxRQUFRLEtBQUssS0FBSyxPQUFPLEtBQUssUUFBUSxJQUFJLENBQUMsSUFBSSxRQUFRLEtBQUssZUFBZSxTQUFTLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxLQUFLLEdBQUcsS0FBSyxNQUFNLEtBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLElBQUksU0FBUyxLQUFLLFFBQVEsTUFBTSxLQUFLLFFBQVEsS0FBSyxLQUFLLElBQUksS0FBSyxRQUFRLEtBQUssSUFBSSxLQUFLLE1BQU0sS0FBSyxNQUFNLFFBQVEsSUFBSSxLQUFLLFVBQVUsU0FBUyxTQUFTLEdBQUcsT0FBTyxLQUFLLFNBQVMsT0FBTyxjQUFjLEtBQUssSUFBSSxLQUFLLFdBQVcsS0FBSyxTQUFTLFNBQVMsU0FBUyxHQUFHLE9BQU8sS0FBSyxTQUFTLE9BQU8sYUFBYSxLQUFLLElBQUksS0FBSyxVQUFVLEtBQUssUUFBUSxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxRQUFRLGlCQUFpQixFQUFFLEtBQUssUUFBUSxlQUFlLElBQUksR0FBRyxPQUFPLEtBQUssU0FBUyxPQUFPLFNBQVMsS0FBSyxFQUFFLEtBQUssUUFBUSxNQUFNLE9BQU8sR0FBRyxLQUFLLEtBQUssR0FBRyxjQUFjLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksUUFBUSxLQUFLLEtBQUssU0FBUyxNQUFNLFFBQVEsQ0FBQyxNQUFNLE1BQU0sTUFBTSxPQUFPLEVBQUUsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssU0FBUyxNQUFNLEdBQUcsTUFBTSxtQkFBbUIsV0FBVyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLElBQUksS0FBSyxVQUFVLEtBQUssSUFBSSxXQUFXLEVBQUUsU0FBUyxJQUFJLEtBQUssR0FBRyxhQUFhLENBQUMsRUFBRSxlQUFlLFNBQVMsRUFBRSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsRUFBRSxXQUFXLEdBQUcsU0FBUyxHQUFHLFdBQVcsZ0JBQWdCLFNBQVMsbUJBQW1CLGFBQWEsZ0JBQWdCLFVBQVUsT0FBTyxPQUFPLEVBQUUsU0FBUyxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEdBQUcsTUFBTSxPQUFPLEtBQUssUUFBUSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssUUFBUSxNQUFNLE9BQU8sTUFBTSxFQUFFLFNBQVMsR0FBRyxPQUFPLEdBQUcsV0FBVyxJQUFJLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLElBQUksZUFBZSxDQUFDLEdBQUcsTUFBTSxRQUFRLFFBQVEsTUFBTSxlQUFlLE1BQU0sU0FBUyxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssUUFBUSxHQUFHLE1BQU0sTUFBTSxNQUFNLFNBQVMsR0FBRyxNQUFNLE9BQU8sUUFBUSxTQUFTLFNBQVMsU0FBUyxDQUFDLE9BQU8sVUFBVSxhQUFhLE9BQU8sVUFBVSxhQUFhLE9BQU8sVUFBVSxXQUFXLFVBQVUsS0FBSyxTQUFTLFlBQVksTUFBTSxRQUFRLGVBQWUsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLEVBQUUsTUFBTSxPQUFPLFVBQVUsVUFBVSxDQUFDLEdBQUcsc0JBQXNCLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxJQUFJLFdBQVcsUUFBUSxNQUFNLGVBQWUsTUFBTSxTQUFTLEtBQUssSUFBSSxHQUFHLEtBQUssUUFBUSxHQUFHLE1BQU0sTUFBTSxZQUFZLGFBQWEsQ0FBQyxHQUFHLElBQUksU0FBUyxVQUFVLENBQUMsS0FBSyxLQUFLLFNBQVMsTUFBTSxDQUFDLE1BQU0sT0FBTyxVQUFVLENBQUMsTUFBTSxNQUFN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QUduQixPQUFPOzs7OztBQUtYLE9BQU8sV0FBVyxlQUFlOzs7QUN4R2pDOzs7Ozs7O0NBT0M7O0FBRUQsSUFBSSxZQUFZLFVBQVUsVUFBVSxRQUFRLFVBQVU7WUFDMUMsVUFBVSxXQUFXOztZQUVyQixPQUFPLFNBQVMsUUFBUSxTQUFTLFNBQVMsR0FBRyxHQUFHO2dCQUM1QyxJQUFJLElBQUksRUFBRSxNQUFNO29CQUNaLElBQUk7O2dCQUVSLElBQUk7b0JBQ0EsS0FBSyxJQUFJLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO2tCQUM3QixNQUFNLEVBQUU7b0JBQ04sSUFBSTs7O2dCQUdSLE9BQU8sQ0FBQyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxJQUFJOzs7Ozs7QUFNOUUsU0FBUyxVQUFVLFNBQVMsVUFBVSxNQUFNLE1BQU07SUFDOUMsS0FBSyxVQUFVLFFBQVE7SUFDdkIsT0FBTzs7O0FBR1gsT0FBTyxPQUFPLFlBQVksVUFBVSxRQUFRLFVBQVU7SUFDbEQsSUFBSSxPQUFPO0lBQ1gsT0FBTyxTQUFTLE1BQU0sUUFBUTs7Ozs7O0FBTWxDLE9BQU8sV0FBVyxPQUFPLFdBQVcsU0FBUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuIEFuZ3VsYXJKUyB2MS40LjNcbiAoYykgMjAxMC0yMDE1IEdvb2dsZSwgSW5jLiBodHRwOi8vYW5ndWxhcmpzLm9yZ1xuIExpY2Vuc2U6IE1JVFxuKi9cbihmdW5jdGlvbihGLHQsVyl7J3VzZSBzdHJpY3QnO2Z1bmN0aW9uIHVhKGEsYixjKXtpZighYSl0aHJvdyBuZ01pbkVycihcImFyZXFcIixifHxcIj9cIixjfHxcInJlcXVpcmVkXCIpO3JldHVybiBhfWZ1bmN0aW9uIHZhKGEsYil7aWYoIWEmJiFiKXJldHVyblwiXCI7aWYoIWEpcmV0dXJuIGI7aWYoIWIpcmV0dXJuIGE7WChhKSYmKGE9YS5qb2luKFwiIFwiKSk7WChiKSYmKGI9Yi5qb2luKFwiIFwiKSk7cmV0dXJuIGErXCIgXCIrYn1mdW5jdGlvbiBFYShhKXt2YXIgYj17fTthJiYoYS50b3x8YS5mcm9tKSYmKGIudG89YS50byxiLmZyb209YS5mcm9tKTtyZXR1cm4gYn1mdW5jdGlvbiBiYShhLGIsYyl7dmFyIGQ9XCJcIjthPVgoYSk/YTphJiZVKGEpJiZhLmxlbmd0aD9hLnNwbGl0KC9cXHMrLyk6W107dShhLGZ1bmN0aW9uKGEscyl7YSYmMDxhLmxlbmd0aCYmKGQrPTA8cz9cIiBcIjpcIlwiLGQrPWM/YithOmErYil9KTtyZXR1cm4gZH1mdW5jdGlvbiBGYShhKXtpZihhIGluc3RhbmNlb2YgRylzd2l0Y2goYS5sZW5ndGgpe2Nhc2UgMDpyZXR1cm5bXTtcbmNhc2UgMTppZigxPT09YVswXS5ub2RlVHlwZSlyZXR1cm4gYTticmVhaztkZWZhdWx0OnJldHVybiBHKGthKGEpKX1pZigxPT09YS5ub2RlVHlwZSlyZXR1cm4gRyhhKX1mdW5jdGlvbiBrYShhKXtpZighYVswXSlyZXR1cm4gYTtmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXTtpZigxPT1jLm5vZGVUeXBlKXJldHVybiBjfX1mdW5jdGlvbiBHYShhLGIsYyl7dShiLGZ1bmN0aW9uKGIpe2EuYWRkQ2xhc3MoYixjKX0pfWZ1bmN0aW9uIEhhKGEsYixjKXt1KGIsZnVuY3Rpb24oYil7YS5yZW1vdmVDbGFzcyhiLGMpfSl9ZnVuY3Rpb24gaGEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7Yy5hZGRDbGFzcyYmKEdhKGEsYixjLmFkZENsYXNzKSxjLmFkZENsYXNzPW51bGwpO2MucmVtb3ZlQ2xhc3MmJihIYShhLGIsYy5yZW1vdmVDbGFzcyksYy5yZW1vdmVDbGFzcz1udWxsKX19ZnVuY3Rpb24gaWEoYSl7YT1hfHx7fTtpZighYS4kJHByZXBhcmVkKXt2YXIgYj1hLmRvbU9wZXJhdGlvbnx8XG5IO2EuZG9tT3BlcmF0aW9uPWZ1bmN0aW9uKCl7YS4kJGRvbU9wZXJhdGlvbkZpcmVkPSEwO2IoKTtiPUh9O2EuJCRwcmVwYXJlZD0hMH1yZXR1cm4gYX1mdW5jdGlvbiBjYShhLGIpe3dhKGEsYik7eGEoYSxiKX1mdW5jdGlvbiB3YShhLGIpe2IuZnJvbSYmKGEuY3NzKGIuZnJvbSksYi5mcm9tPW51bGwpfWZ1bmN0aW9uIHhhKGEsYil7Yi50byYmKGEuY3NzKGIudG8pLGIudG89bnVsbCl9ZnVuY3Rpb24gUihhLGIsYyl7dmFyIGQ9KGIuYWRkQ2xhc3N8fFwiXCIpK1wiIFwiKyhjLmFkZENsYXNzfHxcIlwiKSxlPShiLnJlbW92ZUNsYXNzfHxcIlwiKStcIiBcIisoYy5yZW1vdmVDbGFzc3x8XCJcIik7YT1JYShhLmF0dHIoXCJjbGFzc1wiKSxkLGUpO3lhKGIsYyk7Yi5hZGRDbGFzcz1hLmFkZENsYXNzP2EuYWRkQ2xhc3M6bnVsbDtiLnJlbW92ZUNsYXNzPWEucmVtb3ZlQ2xhc3M/YS5yZW1vdmVDbGFzczpudWxsO3JldHVybiBifWZ1bmN0aW9uIElhKGEsYixjKXtmdW5jdGlvbiBkKGEpe1UoYSkmJihhPWEuc3BsaXQoXCIgXCIpKTtcbnZhciBiPXt9O3UoYSxmdW5jdGlvbihhKXthLmxlbmd0aCYmKGJbYV09ITApfSk7cmV0dXJuIGJ9dmFyIGU9e307YT1kKGEpO2I9ZChiKTt1KGIsZnVuY3Rpb24oYSxiKXtlW2JdPTF9KTtjPWQoYyk7dShjLGZ1bmN0aW9uKGEsYil7ZVtiXT0xPT09ZVtiXT9udWxsOi0xfSk7dmFyIHM9e2FkZENsYXNzOlwiXCIscmVtb3ZlQ2xhc3M6XCJcIn07dShlLGZ1bmN0aW9uKGIsYyl7dmFyIGQsZTsxPT09Yj8oZD1cImFkZENsYXNzXCIsZT0hYVtjXSk6LTE9PT1iJiYoZD1cInJlbW92ZUNsYXNzXCIsZT1hW2NdKTtlJiYoc1tkXS5sZW5ndGgmJihzW2RdKz1cIiBcIiksc1tkXSs9Yyl9KTtyZXR1cm4gc31mdW5jdGlvbiB6KGEpe3JldHVybiBhIGluc3RhbmNlb2YgdC5lbGVtZW50P2FbMF06YX1mdW5jdGlvbiB6YShhLGIsYyl7dmFyIGQ9T2JqZWN0LmNyZWF0ZShudWxsKSxlPWEuZ2V0Q29tcHV0ZWRTdHlsZShiKXx8e307dShjLGZ1bmN0aW9uKGEsYil7dmFyIGM9ZVthXTtpZihjKXt2YXIgaz1jLmNoYXJBdCgwKTtcbmlmKFwiLVwiPT09a3x8XCIrXCI9PT1rfHwwPD1rKWM9SmEoYyk7MD09PWMmJihjPW51bGwpO2RbYl09Y319KTtyZXR1cm4gZH1mdW5jdGlvbiBKYShhKXt2YXIgYj0wO2E9YS5zcGxpdCgvXFxzKixcXHMqLyk7dShhLGZ1bmN0aW9uKGEpe1wic1wiPT1hLmNoYXJBdChhLmxlbmd0aC0xKSYmKGE9YS5zdWJzdHJpbmcoMCxhLmxlbmd0aC0xKSk7YT1wYXJzZUZsb2F0KGEpfHwwO2I9Yj9NYXRoLm1heChhLGIpOmF9KTtyZXR1cm4gYn1mdW5jdGlvbiBsYShhKXtyZXR1cm4gMD09PWF8fG51bGwhPWF9ZnVuY3Rpb24gQWEoYSxiKXt2YXIgYz1PLGQ9YStcInNcIjtiP2MrPVwiRHVyYXRpb25cIjpkKz1cIiBsaW5lYXIgYWxsXCI7cmV0dXJuW2MsZF19ZnVuY3Rpb24gamEoYSxiKXt2YXIgYz1iP1wiLVwiK2IrXCJzXCI6XCJcIjtkYShhLFtlYSxjXSk7cmV0dXJuW2VhLGNdfWZ1bmN0aW9uIG1hKGEsYil7dmFyIGM9Yj9cInBhdXNlZFwiOlwiXCIsZD1WK1wiUGxheVN0YXRlXCI7ZGEoYSxbZCxjXSk7cmV0dXJuW2QsY119ZnVuY3Rpb24gZGEoYSxcbmIpe2Euc3R5bGVbYlswXV09YlsxXX1mdW5jdGlvbiBCYSgpe3ZhciBhPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue2ZsdXNoOmZ1bmN0aW9uKCl7YT1PYmplY3QuY3JlYXRlKG51bGwpfSxjb3VudDpmdW5jdGlvbihiKXtyZXR1cm4oYj1hW2JdKT9iLnRvdGFsOjB9LGdldDpmdW5jdGlvbihiKXtyZXR1cm4oYj1hW2JdKSYmYi52YWx1ZX0scHV0OmZ1bmN0aW9uKGIsYyl7YVtiXT9hW2JdLnRvdGFsKys6YVtiXT17dG90YWw6MSx2YWx1ZTpjfX19fXZhciBIPXQubm9vcCx5YT10LmV4dGVuZCxHPXQuZWxlbWVudCx1PXQuZm9yRWFjaCxYPXQuaXNBcnJheSxVPXQuaXNTdHJpbmcsbmE9dC5pc09iamVjdCxLYT10LmlzVW5kZWZpbmVkLExhPXQuaXNEZWZpbmVkLENhPXQuaXNGdW5jdGlvbixvYT10LmlzRWxlbWVudCxPLHBhLFYscWE7Ri5vbnRyYW5zaXRpb25lbmQ9PT1XJiZGLm9ud2Via2l0dHJhbnNpdGlvbmVuZCE9PVc/KE89XCJXZWJraXRUcmFuc2l0aW9uXCIscGE9XCJ3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmRcIik6XG4oTz1cInRyYW5zaXRpb25cIixwYT1cInRyYW5zaXRpb25lbmRcIik7Ri5vbmFuaW1hdGlvbmVuZD09PVcmJkYub253ZWJraXRhbmltYXRpb25lbmQhPT1XPyhWPVwiV2Via2l0QW5pbWF0aW9uXCIscWE9XCJ3ZWJraXRBbmltYXRpb25FbmQgYW5pbWF0aW9uZW5kXCIpOihWPVwiYW5pbWF0aW9uXCIscWE9XCJhbmltYXRpb25lbmRcIik7dmFyIHJhPVYrXCJEZWxheVwiLHNhPVYrXCJEdXJhdGlvblwiLGVhPU8rXCJEZWxheVwiO0Y9TytcIkR1cmF0aW9uXCI7dmFyIE1hPXt0cmFuc2l0aW9uRHVyYXRpb246Rix0cmFuc2l0aW9uRGVsYXk6ZWEsdHJhbnNpdGlvblByb3BlcnR5Ok8rXCJQcm9wZXJ0eVwiLGFuaW1hdGlvbkR1cmF0aW9uOnNhLGFuaW1hdGlvbkRlbGF5OnJhLGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OlYrXCJJdGVyYXRpb25Db3VudFwifSxOYT17dHJhbnNpdGlvbkR1cmF0aW9uOkYsdHJhbnNpdGlvbkRlbGF5OmVhLGFuaW1hdGlvbkR1cmF0aW9uOnNhLGFuaW1hdGlvbkRlbGF5OnJhfTt0Lm1vZHVsZShcIm5nQW5pbWF0ZVwiLFxuW10pLmRpcmVjdGl2ZShcIm5nQW5pbWF0ZUNoaWxkcmVuXCIsW2Z1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGEsYixjKXthPWMubmdBbmltYXRlQ2hpbGRyZW47dC5pc1N0cmluZyhhKSYmMD09PWEubGVuZ3RoP2IuZGF0YShcIiQkbmdBbmltYXRlQ2hpbGRyZW5cIiwhMCk6Yy4kb2JzZXJ2ZShcIm5nQW5pbWF0ZUNoaWxkcmVuXCIsZnVuY3Rpb24oYSl7Yi5kYXRhKFwiJCRuZ0FuaW1hdGVDaGlsZHJlblwiLFwib25cIj09PWF8fFwidHJ1ZVwiPT09YSl9KX19XSkuZmFjdG9yeShcIiQkckFGTXV0ZXhcIixbXCIkJHJBRlwiLGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe3ZhciBiPSExO2EoZnVuY3Rpb24oKXtiPSEwfSk7cmV0dXJuIGZ1bmN0aW9uKGMpe2I/YygpOmEoYyl9fX1dKS5mYWN0b3J5KFwiJCRyQUZTY2hlZHVsZXJcIixbXCIkJHJBRlwiLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSl7ZC5wdXNoKFtdLmNvbmNhdChhKSk7YygpfWZ1bmN0aW9uIGMoKXtpZihkLmxlbmd0aCl7Zm9yKHZhciBiPVtdLG49XG4wO248ZC5sZW5ndGg7bisrKXt2YXIgaD1kW25dO2guc2hpZnQoKSgpO2gubGVuZ3RoJiZiLnB1c2goaCl9ZD1iO2V8fGEoZnVuY3Rpb24oKXtlfHxjKCl9KX19dmFyIGQ9W10sZTtiLndhaXRVbnRpbFF1aWV0PWZ1bmN0aW9uKGIpe2UmJmUoKTtlPWEoZnVuY3Rpb24oKXtlPW51bGw7YigpO2MoKX0pfTtyZXR1cm4gYn1dKS5mYWN0b3J5KFwiJCRBbmltYXRlUnVubmVyXCIsW1wiJHFcIixcIiQkckFGTXV0ZXhcIixmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSl7dGhpcy5zZXRIb3N0KGEpO3RoaXMuX2RvbmVDYWxsYmFja3M9W107dGhpcy5fcnVuSW5BbmltYXRpb25GcmFtZT1iKCk7dGhpcy5fc3RhdGU9MH1jLmNoYWluPWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYygpe2lmKG49PT1hLmxlbmd0aCliKCEwKTtlbHNlIGFbbl0oZnVuY3Rpb24oYSl7ITE9PT1hP2IoITEpOihuKyssYygpKX0pfXZhciBuPTA7YygpfTtjLmFsbD1mdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMocyl7aD1oJiZzOysrbj09PVxuYS5sZW5ndGgmJmIoaCl9dmFyIG49MCxoPSEwO3UoYSxmdW5jdGlvbihhKXthLmRvbmUoYyl9KX07Yy5wcm90b3R5cGU9e3NldEhvc3Q6ZnVuY3Rpb24oYSl7dGhpcy5ob3N0PWF8fHt9fSxkb25lOmZ1bmN0aW9uKGEpezI9PT10aGlzLl9zdGF0ZT9hKCk6dGhpcy5fZG9uZUNhbGxiYWNrcy5wdXNoKGEpfSxwcm9ncmVzczpILGdldFByb21pc2U6ZnVuY3Rpb24oKXtpZighdGhpcy5wcm9taXNlKXt2YXIgYj10aGlzO3RoaXMucHJvbWlzZT1hKGZ1bmN0aW9uKGEsYyl7Yi5kb25lKGZ1bmN0aW9uKGIpeyExPT09Yj9jKCk6YSgpfSl9KX1yZXR1cm4gdGhpcy5wcm9taXNlfSx0aGVuOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZ2V0UHJvbWlzZSgpLnRoZW4oYSxiKX0sXCJjYXRjaFwiOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmdldFByb21pc2UoKVtcImNhdGNoXCJdKGEpfSxcImZpbmFsbHlcIjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5nZXRQcm9taXNlKClbXCJmaW5hbGx5XCJdKGEpfSxwYXVzZTpmdW5jdGlvbigpe3RoaXMuaG9zdC5wYXVzZSYmXG50aGlzLmhvc3QucGF1c2UoKX0scmVzdW1lOmZ1bmN0aW9uKCl7dGhpcy5ob3N0LnJlc3VtZSYmdGhpcy5ob3N0LnJlc3VtZSgpfSxlbmQ6ZnVuY3Rpb24oKXt0aGlzLmhvc3QuZW5kJiZ0aGlzLmhvc3QuZW5kKCk7dGhpcy5fcmVzb2x2ZSghMCl9LGNhbmNlbDpmdW5jdGlvbigpe3RoaXMuaG9zdC5jYW5jZWwmJnRoaXMuaG9zdC5jYW5jZWwoKTt0aGlzLl9yZXNvbHZlKCExKX0sY29tcGxldGU6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczswPT09Yi5fc3RhdGUmJihiLl9zdGF0ZT0xLGIuX3J1bkluQW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtiLl9yZXNvbHZlKGEpfSkpfSxfcmVzb2x2ZTpmdW5jdGlvbihhKXsyIT09dGhpcy5fc3RhdGUmJih1KHRoaXMuX2RvbmVDYWxsYmFja3MsZnVuY3Rpb24oYil7YihhKX0pLHRoaXMuX2RvbmVDYWxsYmFja3MubGVuZ3RoPTAsdGhpcy5fc3RhdGU9Mil9fTtyZXR1cm4gY31dKS5wcm92aWRlcihcIiQkYW5pbWF0ZVF1ZXVlXCIsW1wiJGFuaW1hdGVQcm92aWRlclwiLFxuZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhLGIsYyxoKXtyZXR1cm4gZFthXS5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiBhKGIsYyxoKX0pfWZ1bmN0aW9uIGMoYSxiKXthPWF8fHt9O3ZhciBjPTA8KGEuYWRkQ2xhc3N8fFwiXCIpLmxlbmd0aCxkPTA8KGEucmVtb3ZlQ2xhc3N8fFwiXCIpLmxlbmd0aDtyZXR1cm4gYj9jJiZkOmN8fGR9dmFyIGQ9dGhpcy5ydWxlcz17c2tpcDpbXSxjYW5jZWw6W10sam9pbjpbXX07ZC5qb2luLnB1c2goZnVuY3Rpb24oYSxiLGQpe3JldHVybiFiLnN0cnVjdHVyYWwmJmMoYi5vcHRpb25zKX0pO2Quc2tpcC5wdXNoKGZ1bmN0aW9uKGEsYixkKXtyZXR1cm4hYi5zdHJ1Y3R1cmFsJiYhYyhiLm9wdGlvbnMpfSk7ZC5za2lwLnB1c2goZnVuY3Rpb24oYSxiLGMpe3JldHVyblwibGVhdmVcIj09Yy5ldmVudCYmYi5zdHJ1Y3R1cmFsfSk7ZC5za2lwLnB1c2goZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjLnN0cnVjdHVyYWwmJiFiLnN0cnVjdHVyYWx9KTtkLmNhbmNlbC5wdXNoKGZ1bmN0aW9uKGEsXG5iLGMpe3JldHVybiBjLnN0cnVjdHVyYWwmJmIuc3RydWN0dXJhbH0pO2QuY2FuY2VsLnB1c2goZnVuY3Rpb24oYSxiLGMpe3JldHVybiAyPT09Yy5zdGF0ZSYmYi5zdHJ1Y3R1cmFsfSk7ZC5jYW5jZWwucHVzaChmdW5jdGlvbihhLGIsYyl7YT1iLm9wdGlvbnM7Yz1jLm9wdGlvbnM7cmV0dXJuIGEuYWRkQ2xhc3MmJmEuYWRkQ2xhc3M9PT1jLnJlbW92ZUNsYXNzfHxhLnJlbW92ZUNsYXNzJiZhLnJlbW92ZUNsYXNzPT09Yy5hZGRDbGFzc30pO3RoaXMuJGdldD1bXCIkJHJBRlwiLFwiJHJvb3RTY29wZVwiLFwiJHJvb3RFbGVtZW50XCIsXCIkZG9jdW1lbnRcIixcIiQkSGFzaE1hcFwiLFwiJCRhbmltYXRpb25cIixcIiQkQW5pbWF0ZVJ1bm5lclwiLFwiJHRlbXBsYXRlUmVxdWVzdFwiLFwiJCRqcUxpdGVcIixmdW5jdGlvbihkLHMsbixoLGssRCxBLFosSSl7ZnVuY3Rpb24gdyhhLGIpe3ZhciBjPXooYSksZj1bXSxtPWxbYl07bSYmdShtLGZ1bmN0aW9uKGEpe2Eubm9kZS5jb250YWlucyhjKSYmZi5wdXNoKGEuY2FsbGJhY2spfSk7XG5yZXR1cm4gZn1mdW5jdGlvbiBCKGEsYixjLGYpe2QoZnVuY3Rpb24oKXt1KHcoYixhKSxmdW5jdGlvbihhKXthKGIsYyxmKX0pfSl9ZnVuY3Rpb24gcihhLFMscCl7ZnVuY3Rpb24gZChiLGMsZixwKXtCKGMsYSxmLHApO2IucHJvZ3Jlc3MoYyxmLHApfWZ1bmN0aW9uIGcoYil7RGEoYSxwKTtjYShhLHApO3AuZG9tT3BlcmF0aW9uKCk7bC5jb21wbGV0ZSghYil9dmFyIFAsRTtpZihhPUZhKGEpKVA9eihhKSxFPWEucGFyZW50KCk7cD1pYShwKTt2YXIgbD1uZXcgQTtpZighUClyZXR1cm4gZygpLGw7WChwLmFkZENsYXNzKSYmKHAuYWRkQ2xhc3M9cC5hZGRDbGFzcy5qb2luKFwiIFwiKSk7WChwLnJlbW92ZUNsYXNzKSYmKHAucmVtb3ZlQ2xhc3M9cC5yZW1vdmVDbGFzcy5qb2luKFwiIFwiKSk7cC5mcm9tJiYhbmEocC5mcm9tKSYmKHAuZnJvbT1udWxsKTtwLnRvJiYhbmEocC50bykmJihwLnRvPW51bGwpO3ZhciBlPVtQLmNsYXNzTmFtZSxwLmFkZENsYXNzLHAucmVtb3ZlQ2xhc3NdLmpvaW4oXCIgXCIpO1xuaWYoIXYoZSkpcmV0dXJuIGcoKSxsO3ZhciBNPTA8PVtcImVudGVyXCIsXCJtb3ZlXCIsXCJsZWF2ZVwiXS5pbmRleE9mKFMpLGg9IXh8fEwuZ2V0KFApLGU9IWgmJm0uZ2V0KFApfHx7fSxrPSEhZS5zdGF0ZTtofHxrJiYxPT1lLnN0YXRlfHwoaD0hdGEoYSxFLFMpKTtpZihoKXJldHVybiBnKCksbDtNJiZLKGEpO2g9e3N0cnVjdHVyYWw6TSxlbGVtZW50OmEsZXZlbnQ6UyxjbG9zZTpnLG9wdGlvbnM6cCxydW5uZXI6bH07aWYoayl7aWYoYihcInNraXBcIixhLGgsZSkpe2lmKDI9PT1lLnN0YXRlKXJldHVybiBnKCksbDtSKGEsZS5vcHRpb25zLHApO3JldHVybiBlLnJ1bm5lcn1pZihiKFwiY2FuY2VsXCIsYSxoLGUpKTI9PT1lLnN0YXRlP2UucnVubmVyLmVuZCgpOmUuc3RydWN0dXJhbD9lLmNsb3NlKCk6UihhLGgub3B0aW9ucyxlLm9wdGlvbnMpO2Vsc2UgaWYoYihcImpvaW5cIixhLGgsZSkpaWYoMj09PWUuc3RhdGUpUihhLHAse30pO2Vsc2UgcmV0dXJuIFM9aC5ldmVudD1lLmV2ZW50LHA9UihhLFxuZS5vcHRpb25zLGgub3B0aW9ucyksbH1lbHNlIFIoYSxwLHt9KTsoaz1oLnN0cnVjdHVyYWwpfHwoaz1cImFuaW1hdGVcIj09PWguZXZlbnQmJjA8T2JqZWN0LmtleXMoaC5vcHRpb25zLnRvfHx7fSkubGVuZ3RofHxjKGgub3B0aW9ucykpO2lmKCFrKXJldHVybiBnKCksQyhhKSxsO00mJmYoRSk7dmFyIHI9KGUuY291bnRlcnx8MCkrMTtoLmNvdW50ZXI9cjtnYShhLDEsaCk7cy4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXt2YXIgYj1tLmdldChQKSx2PSFiLGI9Ynx8e30sZT1hLnBhcmVudCgpfHxbXSxFPTA8ZS5sZW5ndGgmJihcImFuaW1hdGVcIj09PWIuZXZlbnR8fGIuc3RydWN0dXJhbHx8YyhiLm9wdGlvbnMpKTtpZih2fHxiLmNvdW50ZXIhPT1yfHwhRSl7diYmKERhKGEscCksY2EoYSxwKSk7aWYodnx8TSYmYi5ldmVudCE9PVMpcC5kb21PcGVyYXRpb24oKSxsLmVuZCgpO0V8fEMoYSl9ZWxzZSBTPSFiLnN0cnVjdHVyYWwmJmMoYi5vcHRpb25zLCEwKT9cInNldENsYXNzXCI6Yi5ldmVudCxcbmIuc3RydWN0dXJhbCYmZihlKSxnYShhLDIpLGI9RChhLFMsYi5vcHRpb25zKSxiLmRvbmUoZnVuY3Rpb24oYil7ZyghYik7KGI9bS5nZXQoUCkpJiZiLmNvdW50ZXI9PT1yJiZDKHooYSkpO2QobCxTLFwiY2xvc2VcIix7fSl9KSxsLnNldEhvc3QoYiksZChsLFMsXCJzdGFydFwiLHt9KX0pO3JldHVybiBsfWZ1bmN0aW9uIEsoYSl7YT16KGEpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1uZy1hbmltYXRlXVwiKTt1KGEsZnVuY3Rpb24oYSl7dmFyIGI9cGFyc2VJbnQoYS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5nLWFuaW1hdGVcIikpLGM9bS5nZXQoYSk7c3dpdGNoKGIpe2Nhc2UgMjpjLnJ1bm5lci5lbmQoKTtjYXNlIDE6YyYmbS5yZW1vdmUoYSl9fSl9ZnVuY3Rpb24gQyhhKXthPXooYSk7YS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLW5nLWFuaW1hdGVcIik7bS5yZW1vdmUoYSl9ZnVuY3Rpb24gRShhLGIpe3JldHVybiB6KGEpPT09eihiKX1mdW5jdGlvbiBmKGEpe2E9eihhKTtkb3tpZighYXx8MSE9PVxuYS5ub2RlVHlwZSlicmVhazt2YXIgYj1tLmdldChhKTtpZihiKXt2YXIgZj1hOyFiLnN0cnVjdHVyYWwmJmMoYi5vcHRpb25zKSYmKDI9PT1iLnN0YXRlJiZiLnJ1bm5lci5lbmQoKSxDKGYpKX1hPWEucGFyZW50Tm9kZX13aGlsZSgxKX1mdW5jdGlvbiB0YShhLGIsYyl7dmFyIGY9Yz0hMSxkPSExLHY7Zm9yKChhPWEuZGF0YShcIiRuZ0FuaW1hdGVQaW5cIikpJiYoYj1hKTtiJiZiLmxlbmd0aDspe2Z8fChmPUUoYixuKSk7YT1iWzBdO2lmKDEhPT1hLm5vZGVUeXBlKWJyZWFrO3ZhciBlPW0uZ2V0KGEpfHx7fTtkfHwoZD1lLnN0cnVjdHVyYWx8fEwuZ2V0KGEpKTtpZihLYSh2KXx8ITA9PT12KWE9Yi5kYXRhKFwiJCRuZ0FuaW1hdGVDaGlsZHJlblwiKSxMYShhKSYmKHY9YSk7aWYoZCYmITE9PT12KWJyZWFrO2Z8fChmPUUoYixuKSxmfHwoYT1iLmRhdGEoXCIkbmdBbmltYXRlUGluXCIpKSYmKGI9YSkpO2N8fChjPUUoYixnKSk7Yj1iLnBhcmVudCgpfXJldHVybighZHx8dikmJmYmJmN9ZnVuY3Rpb24gZ2EoYSxcbmIsYyl7Yz1jfHx7fTtjLnN0YXRlPWI7YT16KGEpO2Euc2V0QXR0cmlidXRlKFwiZGF0YS1uZy1hbmltYXRlXCIsYik7Yz0oYj1tLmdldChhKSk/eWEoYixjKTpjO20ucHV0KGEsYyl9dmFyIG09bmV3IGssTD1uZXcgayx4PW51bGwsTT1zLiR3YXRjaChmdW5jdGlvbigpe3JldHVybiAwPT09Wi50b3RhbFBlbmRpbmdSZXF1ZXN0c30sZnVuY3Rpb24oYSl7YSYmKE0oKSxzLiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe3MuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7bnVsbD09PXgmJih4PSEwKX0pfSkpfSksZz1HKGhbMF0uYm9keSksbD17fSxQPWEuY2xhc3NOYW1lRmlsdGVyKCksdj1QP2Z1bmN0aW9uKGEpe3JldHVybiBQLnRlc3QoYSl9OmZ1bmN0aW9uKCl7cmV0dXJuITB9LERhPWhhKEkpO3JldHVybntvbjpmdW5jdGlvbihhLGIsYyl7Yj1rYShiKTtsW2FdPWxbYV18fFtdO2xbYV0ucHVzaCh7bm9kZTpiLGNhbGxiYWNrOmN9KX0sb2ZmOmZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBmKGEsXG5iLGMpe3ZhciBkPWthKGIpO3JldHVybiBhLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4hKGEubm9kZT09PWQmJighY3x8YS5jYWxsYmFjaz09PWMpKX0pfXZhciBkPWxbYV07ZCYmKGxbYV09MT09PWFyZ3VtZW50cy5sZW5ndGg/bnVsbDpmKGQsYixjKSl9LHBpbjpmdW5jdGlvbihhLGIpe3VhKG9hKGEpLFwiZWxlbWVudFwiLFwibm90IGFuIGVsZW1lbnRcIik7dWEob2EoYiksXCJwYXJlbnRFbGVtZW50XCIsXCJub3QgYW4gZWxlbWVudFwiKTthLmRhdGEoXCIkbmdBbmltYXRlUGluXCIsYil9LHB1c2g6ZnVuY3Rpb24oYSxiLGMsZil7Yz1jfHx7fTtjLmRvbU9wZXJhdGlvbj1mO3JldHVybiByKGEsYixjKX0sZW5hYmxlZDpmdW5jdGlvbihhLGIpe3ZhciBjPWFyZ3VtZW50cy5sZW5ndGg7aWYoMD09PWMpYj0hIXg7ZWxzZSBpZihvYShhKSl7dmFyIGY9eihhKSxkPUwuZ2V0KGYpOzE9PT1jP2I9IWQ6KGI9ISFiKT9kJiZMLnJlbW92ZShmKTpMLnB1dChmLCEwKX1lbHNlIGI9eD0hIWE7cmV0dXJuIGJ9fX1dfV0pLnByb3ZpZGVyKFwiJCRhbmltYXRpb25cIixcbltcIiRhbmltYXRlUHJvdmlkZXJcIixmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe3JldHVybiBhLmRhdGEoXCIkJGFuaW1hdGlvblJ1bm5lclwiKX12YXIgYz10aGlzLmRyaXZlcnM9W107dGhpcy4kZ2V0PVtcIiQkanFMaXRlXCIsXCIkcm9vdFNjb3BlXCIsXCIkaW5qZWN0b3JcIixcIiQkQW5pbWF0ZVJ1bm5lclwiLFwiJCRyQUZTY2hlZHVsZXJcIixmdW5jdGlvbihhLGUscyxuLGgpe3ZhciBrPVtdLEQ9aGEoYSksQT0wLFo9MCxJPVtdO3JldHVybiBmdW5jdGlvbih3LEIscil7ZnVuY3Rpb24gSyhhKXthPWEuaGFzQXR0cmlidXRlKFwibmctYW5pbWF0ZS1yZWZcIik/W2FdOmEucXVlcnlTZWxlY3RvckFsbChcIltuZy1hbmltYXRlLXJlZl1cIik7dmFyIGI9W107dShhLGZ1bmN0aW9uKGEpe3ZhciBjPWEuZ2V0QXR0cmlidXRlKFwibmctYW5pbWF0ZS1yZWZcIik7YyYmYy5sZW5ndGgmJmIucHVzaChhKX0pO3JldHVybiBifWZ1bmN0aW9uIEMoYSl7dmFyIGI9W10sYz17fTt1KGEsZnVuY3Rpb24oYSxmKXt2YXIgZD16KGEuZWxlbWVudCksXG5tPTA8PVtcImVudGVyXCIsXCJtb3ZlXCJdLmluZGV4T2YoYS5ldmVudCksZD1hLnN0cnVjdHVyYWw/SyhkKTpbXTtpZihkLmxlbmd0aCl7dmFyIGc9bT9cInRvXCI6XCJmcm9tXCI7dShkLGZ1bmN0aW9uKGEpe3ZhciBiPWEuZ2V0QXR0cmlidXRlKFwibmctYW5pbWF0ZS1yZWZcIik7Y1tiXT1jW2JdfHx7fTtjW2JdW2ddPXthbmltYXRpb25JRDpmLGVsZW1lbnQ6RyhhKX19KX1lbHNlIGIucHVzaChhKX0pO3ZhciBmPXt9LGQ9e307dShjLGZ1bmN0aW9uKGMsbSl7dmFyIGc9Yy5mcm9tLGU9Yy50bztpZihnJiZlKXt2YXIgbD1hW2cuYW5pbWF0aW9uSURdLGg9YVtlLmFuaW1hdGlvbklEXSx4PWcuYW5pbWF0aW9uSUQudG9TdHJpbmcoKTtpZighZFt4XSl7dmFyIEI9ZFt4XT17c3RydWN0dXJhbDohMCxiZWZvcmVTdGFydDpmdW5jdGlvbigpe2wuYmVmb3JlU3RhcnQoKTtoLmJlZm9yZVN0YXJ0KCl9LGNsb3NlOmZ1bmN0aW9uKCl7bC5jbG9zZSgpO2guY2xvc2UoKX0sY2xhc3NlczpFKGwuY2xhc3NlcyxoLmNsYXNzZXMpLFxuZnJvbTpsLHRvOmgsYW5jaG9yczpbXX07Qi5jbGFzc2VzLmxlbmd0aD9iLnB1c2goQik6KGIucHVzaChsKSxiLnB1c2goaCkpfWRbeF0uYW5jaG9ycy5wdXNoKHtvdXQ6Zy5lbGVtZW50LFwiaW5cIjplLmVsZW1lbnR9KX1lbHNlIGc9Zz9nLmFuaW1hdGlvbklEOmUuYW5pbWF0aW9uSUQsZT1nLnRvU3RyaW5nKCksZltlXXx8KGZbZV09ITAsYi5wdXNoKGFbZ10pKX0pO3JldHVybiBifWZ1bmN0aW9uIEUoYSxiKXthPWEuc3BsaXQoXCIgXCIpO2I9Yi5zcGxpdChcIiBcIik7Zm9yKHZhciBjPVtdLGY9MDtmPGEubGVuZ3RoO2YrKyl7dmFyIGQ9YVtmXTtpZihcIm5nLVwiIT09ZC5zdWJzdHJpbmcoMCwzKSlmb3IodmFyIGc9MDtnPGIubGVuZ3RoO2crKylpZihkPT09YltnXSl7Yy5wdXNoKGQpO2JyZWFrfX1yZXR1cm4gYy5qb2luKFwiIFwiKX1mdW5jdGlvbiBmKGEpe2Zvcih2YXIgYj1jLmxlbmd0aC0xOzA8PWI7Yi0tKXt2YXIgZj1jW2JdO2lmKHMuaGFzKGYpJiYoZj1zLmdldChmKShhKSkpcmV0dXJuIGZ9fVxuZnVuY3Rpb24gdGEoYSxjKXthLmZyb20mJmEudG8/KGIoYS5mcm9tLmVsZW1lbnQpLnNldEhvc3QoYyksYihhLnRvLmVsZW1lbnQpLnNldEhvc3QoYykpOmIoYS5lbGVtZW50KS5zZXRIb3N0KGMpfWZ1bmN0aW9uIGdhKCl7dmFyIGE9Yih3KTshYXx8XCJsZWF2ZVwiPT09QiYmci4kJGRvbU9wZXJhdGlvbkZpcmVkfHxhLmVuZCgpfWZ1bmN0aW9uIG0oYil7dy5vZmYoXCIkZGVzdHJveVwiLGdhKTt3LnJlbW92ZURhdGEoXCIkJGFuaW1hdGlvblJ1bm5lclwiKTtEKHcscik7Y2EodyxyKTtyLmRvbU9wZXJhdGlvbigpO2cmJmEucmVtb3ZlQ2xhc3ModyxnKTt3LnJlbW92ZUNsYXNzKFwibmctYW5pbWF0ZVwiKTt4LmNvbXBsZXRlKCFiKX1yPWlhKHIpO3ZhciBMPTA8PVtcImVudGVyXCIsXCJtb3ZlXCIsXCJsZWF2ZVwiXS5pbmRleE9mKEIpLHg9bmV3IG4oe2VuZDpmdW5jdGlvbigpe20oKX0sY2FuY2VsOmZ1bmN0aW9uKCl7bSghMCl9fSk7aWYoIWMubGVuZ3RoKXJldHVybiBtKCkseDt3LmRhdGEoXCIkJGFuaW1hdGlvblJ1bm5lclwiLFxueCk7dmFyIE09dmEody5hdHRyKFwiY2xhc3NcIiksdmEoci5hZGRDbGFzcyxyLnJlbW92ZUNsYXNzKSksZz1yLnRlbXBDbGFzc2VzO2cmJihNKz1cIiBcIitnLHIudGVtcENsYXNzZXM9bnVsbCk7dmFyIGw7THx8KGw9QSxBKz0xKTtrLnB1c2goe2VsZW1lbnQ6dyxjbGFzc2VzOk0sZXZlbnQ6QixjbGFzc0Jhc2VkSW5kZXg6bCxzdHJ1Y3R1cmFsOkwsb3B0aW9uczpyLGJlZm9yZVN0YXJ0OmZ1bmN0aW9uKCl7dy5hZGRDbGFzcyhcIm5nLWFuaW1hdGVcIik7ZyYmYS5hZGRDbGFzcyh3LGcpfSxjbG9zZTptfSk7dy5vbihcIiRkZXN0cm95XCIsZ2EpO2lmKDE8ay5sZW5ndGgpcmV0dXJuIHg7ZS4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXtaPUE7QT0wO0kubGVuZ3RoPTA7dmFyIGE9W107dShrLGZ1bmN0aW9uKGMpe2IoYy5lbGVtZW50KSYmYS5wdXNoKGMpfSk7ay5sZW5ndGg9MDt1KEMoYSksZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYygpe2EuYmVmb3JlU3RhcnQoKTt2YXIgZCxnPWEuY2xvc2UsZT1hLmFuY2hvcnM/XG5hLmZyb20uZWxlbWVudHx8YS50by5lbGVtZW50OmEuZWxlbWVudDtiKGUpJiZ6KGUpLnBhcmVudE5vZGUmJihlPWYoYSkpJiYoZD1lLnN0YXJ0KTtkPyhkPWQoKSxkLmRvbmUoZnVuY3Rpb24oYSl7ZyghYSl9KSx0YShhLGQpKTpnKCl9YS5zdHJ1Y3R1cmFsP2MoKTooSS5wdXNoKHtub2RlOnooYS5lbGVtZW50KSxmbjpjfSksYS5jbGFzc0Jhc2VkSW5kZXg9PT1aLTEmJihJPUkuc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBiLm5vZGUuY29udGFpbnMoYS5ub2RlKX0pLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5mbn0pLGgoSSkpKX0pfSk7cmV0dXJuIHh9fV19XSkucHJvdmlkZXIoXCIkYW5pbWF0ZUNzc1wiLFtcIiRhbmltYXRlUHJvdmlkZXJcIixmdW5jdGlvbihhKXt2YXIgYj1CYSgpLGM9QmEoKTt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLFwiJCRqcUxpdGVcIixcIiQkQW5pbWF0ZVJ1bm5lclwiLFwiJHRpbWVvdXRcIixcIiRkb2N1bWVudFwiLFwiJHNuaWZmZXJcIixcIiQkckFGU2NoZWR1bGVyXCIsZnVuY3Rpb24oYSxcbmUscyxuLGgsayxEKXtmdW5jdGlvbiBBKGEsYil7dmFyIGM9YS5wYXJlbnROb2RlO3JldHVybihjLiQkbmdBbmltYXRlUGFyZW50S2V5fHwoYy4kJG5nQW5pbWF0ZVBhcmVudEtleT0rK3IpKStcIi1cIithLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpK1wiLVwiK2J9ZnVuY3Rpb24gWihoLGYsQixrKXt2YXIgbTswPGIuY291bnQoQikmJihtPWMuZ2V0KEIpLG18fChmPWJhKGYsXCItc3RhZ2dlclwiKSxlLmFkZENsYXNzKGgsZiksbT16YShhLGgsayksbS5hbmltYXRpb25EdXJhdGlvbj1NYXRoLm1heChtLmFuaW1hdGlvbkR1cmF0aW9uLDApLG0udHJhbnNpdGlvbkR1cmF0aW9uPU1hdGgubWF4KG0udHJhbnNpdGlvbkR1cmF0aW9uLDApLGUucmVtb3ZlQ2xhc3MoaCxmKSxjLnB1dChCLG0pKSk7cmV0dXJuIG18fHt9fWZ1bmN0aW9uIEkoYSl7Qy5wdXNoKGEpO0Qud2FpdFVudGlsUXVpZXQoZnVuY3Rpb24oKXtiLmZsdXNoKCk7Yy5mbHVzaCgpO2Zvcih2YXIgYT1LLm9mZnNldFdpZHRoKzEsZD0wO2Q8XG5DLmxlbmd0aDtkKyspQ1tkXShhKTtDLmxlbmd0aD0wfSl9ZnVuY3Rpb24gdyhjLGYsZSl7Zj1iLmdldChlKTtmfHwoZj16YShhLGMsTWEpLFwiaW5maW5pdGVcIj09PWYuYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQmJihmLmFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50PTEpKTtiLnB1dChlLGYpO2M9ZjtlPWMuYW5pbWF0aW9uRGVsYXk7Zj1jLnRyYW5zaXRpb25EZWxheTtjLm1heERlbGF5PWUmJmY/TWF0aC5tYXgoZSxmKTplfHxmO2MubWF4RHVyYXRpb249TWF0aC5tYXgoYy5hbmltYXRpb25EdXJhdGlvbipjLmFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50LGMudHJhbnNpdGlvbkR1cmF0aW9uKTtyZXR1cm4gY312YXIgQj1oYShlKSxyPTAsSz16KGgpLmJvZHksQz1bXTtyZXR1cm4gZnVuY3Rpb24oYSxjKXtmdW5jdGlvbiBkKCl7bSgpfWZ1bmN0aW9uIGgoKXttKCEwKX1mdW5jdGlvbiBtKGIpe2lmKCEoS3x8QyYmRCkpe0s9ITA7RD0hMTtlLnJlbW92ZUNsYXNzKGEsWSk7ZS5yZW1vdmVDbGFzcyhhLFxuVyk7bWEoZywhMSk7amEoZywhMSk7dShsLGZ1bmN0aW9uKGEpe2cuc3R5bGVbYVswXV09XCJcIn0pO0IoYSxjKTtjYShhLGMpO2lmKGMub25Eb25lKWMub25Eb25lKCk7cCYmcC5jb21wbGV0ZSghYil9fWZ1bmN0aW9uIEwoYSl7cS5ibG9ja1RyYW5zaXRpb24mJmphKGcsYSk7cS5ibG9ja0tleWZyYW1lQW5pbWF0aW9uJiZtYShnLCEhYSl9ZnVuY3Rpb24geCgpe3A9bmV3IHMoe2VuZDpkLGNhbmNlbDpofSk7bSgpO3JldHVybnskJHdpbGxBbmltYXRlOiExLHN0YXJ0OmZ1bmN0aW9uKCl7cmV0dXJuIHB9LGVuZDpkfX1mdW5jdGlvbiBNKCl7ZnVuY3Rpb24gYigpe2lmKCFLKXtMKCExKTt1KGwsZnVuY3Rpb24oYSl7Zy5zdHlsZVthWzBdXT1hWzFdfSk7QihhLGMpO2UuYWRkQ2xhc3MoYSxXKTtpZihxLnJlY2FsY3VsYXRlVGltaW5nU3R5bGVzKXtmYT1nLmNsYXNzTmFtZStcIiBcIitZOyQ9QShnLGZhKTt5PXcoZyxmYSwkKTtRPXkubWF4RGVsYXk7SD1NYXRoLm1heChRLDApO0o9eS5tYXhEdXJhdGlvbjtcbmlmKDA9PT1KKXttKCk7cmV0dXJufXEuaGFzVHJhbnNpdGlvbnM9MDx5LnRyYW5zaXRpb25EdXJhdGlvbjtxLmhhc0FuaW1hdGlvbnM9MDx5LmFuaW1hdGlvbkR1cmF0aW9ufWlmKHEuYXBwbHlUcmFuc2l0aW9uRGVsYXl8fHEuYXBwbHlBbmltYXRpb25EZWxheSl7UT1cImJvb2xlYW5cIiE9PXR5cGVvZiBjLmRlbGF5JiZsYShjLmRlbGF5KT9wYXJzZUZsb2F0KGMuZGVsYXkpOlE7SD1NYXRoLm1heChRLDApO3ZhciBrO3EuYXBwbHlUcmFuc2l0aW9uRGVsYXkmJih5LnRyYW5zaXRpb25EZWxheT1RLGs9W2VhLFErXCJzXCJdLGwucHVzaChrKSxnLnN0eWxlW2tbMF1dPWtbMV0pO3EuYXBwbHlBbmltYXRpb25EZWxheSYmKHkuYW5pbWF0aW9uRGVsYXk9USxrPVtyYSxRK1wic1wiXSxsLnB1c2goayksZy5zdHlsZVtrWzBdXT1rWzFdKX1GPTFFMypIO0c9MUUzKko7aWYoYy5lYXNpbmcpe3ZhciByPWMuZWFzaW5nO3EuaGFzVHJhbnNpdGlvbnMmJihrPU8rXCJUaW1pbmdGdW5jdGlvblwiLGwucHVzaChbayxcbnJdKSxnLnN0eWxlW2tdPXIpO3EuaGFzQW5pbWF0aW9ucyYmKGs9VitcIlRpbWluZ0Z1bmN0aW9uXCIsbC5wdXNoKFtrLHJdKSxnLnN0eWxlW2tdPXIpfXkudHJhbnNpdGlvbkR1cmF0aW9uJiZwLnB1c2gocGEpO3kuYW5pbWF0aW9uRHVyYXRpb24mJnAucHVzaChxYSk7eD1EYXRlLm5vdygpO2Eub24ocC5qb2luKFwiIFwiKSxoKTtuKGQsRisxLjUqRyk7eGEoYSxjKX19ZnVuY3Rpb24gZCgpe20oKX1mdW5jdGlvbiBoKGEpe2Euc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGI9YS5vcmlnaW5hbEV2ZW50fHxhO2E9Yi4kbWFudWFsVGltZVN0YW1wfHxiLnRpbWVTdGFtcHx8RGF0ZS5ub3coKTtiPXBhcnNlRmxvYXQoYi5lbGFwc2VkVGltZS50b0ZpeGVkKDMpKTtNYXRoLm1heChhLXgsMCk+PUYmJmI+PUomJihDPSEwLG0oKSl9aWYoIUspaWYoZy5wYXJlbnROb2RlKXt2YXIgeCxwPVtdLGs9ZnVuY3Rpb24oYSl7aWYoQylEJiZhJiYoRD0hMSxtKCkpO2Vsc2UgaWYoRD0hYSx5LmFuaW1hdGlvbkR1cmF0aW9uKWlmKGE9XG5tYShnLEQpLEQpbC5wdXNoKGEpO2Vsc2V7dmFyIGI9bCxjPWIuaW5kZXhPZihhKTswPD1hJiZiLnNwbGljZShjLDEpfX0scj0wPFUmJih5LnRyYW5zaXRpb25EdXJhdGlvbiYmMD09PVQudHJhbnNpdGlvbkR1cmF0aW9ufHx5LmFuaW1hdGlvbkR1cmF0aW9uJiYwPT09VC5hbmltYXRpb25EdXJhdGlvbikmJk1hdGgubWF4KFQuYW5pbWF0aW9uRGVsYXksVC50cmFuc2l0aW9uRGVsYXkpO3I/bihiLE1hdGguZmxvb3IocipVKjFFMyksITEpOmIoKTt0LnJlc3VtZT1mdW5jdGlvbigpe2soITApfTt0LnBhdXNlPWZ1bmN0aW9uKCl7ayghMSl9fWVsc2UgbSgpfXZhciBnPXooYSk7aWYoIWd8fCFnLnBhcmVudE5vZGUpcmV0dXJuIHgoKTtjPWlhKGMpO3ZhciBsPVtdLHI9YS5hdHRyKFwiY2xhc3NcIiksdj1FYShjKSxLLEQsQyxwLHQsSCxGLEosRztpZigwPT09Yy5kdXJhdGlvbnx8IWsuYW5pbWF0aW9ucyYmIWsudHJhbnNpdGlvbnMpcmV0dXJuIHgoKTt2YXIgYWE9Yy5ldmVudCYmWChjLmV2ZW50KT9cbmMuZXZlbnQuam9pbihcIiBcIik6Yy5ldmVudCxSPVwiXCIsTj1cIlwiO2FhJiZjLnN0cnVjdHVyYWw/Uj1iYShhYSxcIm5nLVwiLCEwKTphYSYmKFI9YWEpO2MuYWRkQ2xhc3MmJihOKz1iYShjLmFkZENsYXNzLFwiLWFkZFwiKSk7Yy5yZW1vdmVDbGFzcyYmKE4ubGVuZ3RoJiYoTis9XCIgXCIpLE4rPWJhKGMucmVtb3ZlQ2xhc3MsXCItcmVtb3ZlXCIpKTtjLmFwcGx5Q2xhc3Nlc0Vhcmx5JiZOLmxlbmd0aCYmKEIoYSxjKSxOPVwiXCIpO3ZhciBZPVtSLE5dLmpvaW4oXCIgXCIpLnRyaW0oKSxmYT1yK1wiIFwiK1ksVz1iYShZLFwiLWFjdGl2ZVwiKSxyPXYudG8mJjA8T2JqZWN0LmtleXModi50bykubGVuZ3RoO2lmKCEoMDwoYy5rZXlmcmFtZVN0eWxlfHxcIlwiKS5sZW5ndGh8fHJ8fFkpKXJldHVybiB4KCk7dmFyICQsVDswPGMuc3RhZ2dlcj8odj1wYXJzZUZsb2F0KGMuc3RhZ2dlciksVD17dHJhbnNpdGlvbkRlbGF5OnYsYW5pbWF0aW9uRGVsYXk6dix0cmFuc2l0aW9uRHVyYXRpb246MCxhbmltYXRpb25EdXJhdGlvbjowfSk6XG4oJD1BKGcsZmEpLFQ9WihnLFksJCxOYSkpO2UuYWRkQ2xhc3MoYSxZKTtjLnRyYW5zaXRpb25TdHlsZSYmKHY9W08sYy50cmFuc2l0aW9uU3R5bGVdLGRhKGcsdiksbC5wdXNoKHYpKTswPD1jLmR1cmF0aW9uJiYodj0wPGcuc3R5bGVbT10ubGVuZ3RoLHY9QWEoYy5kdXJhdGlvbix2KSxkYShnLHYpLGwucHVzaCh2KSk7Yy5rZXlmcmFtZVN0eWxlJiYodj1bVixjLmtleWZyYW1lU3R5bGVdLGRhKGcsdiksbC5wdXNoKHYpKTt2YXIgVT1UPzA8PWMuc3RhZ2dlckluZGV4P2Muc3RhZ2dlckluZGV4OmIuY291bnQoJCk6MDsoYWE9MD09PVUpJiZqYShnLDk5OTkpO3ZhciB5PXcoZyxmYSwkKSxRPXkubWF4RGVsYXk7SD1NYXRoLm1heChRLDApO0o9eS5tYXhEdXJhdGlvbjt2YXIgcT17fTtxLmhhc1RyYW5zaXRpb25zPTA8eS50cmFuc2l0aW9uRHVyYXRpb247cS5oYXNBbmltYXRpb25zPTA8eS5hbmltYXRpb25EdXJhdGlvbjtxLmhhc1RyYW5zaXRpb25BbGw9cS5oYXNUcmFuc2l0aW9ucyYmXG5cImFsbFwiPT15LnRyYW5zaXRpb25Qcm9wZXJ0eTtxLmFwcGx5VHJhbnNpdGlvbkR1cmF0aW9uPXImJihxLmhhc1RyYW5zaXRpb25zJiYhcS5oYXNUcmFuc2l0aW9uQWxsfHxxLmhhc0FuaW1hdGlvbnMmJiFxLmhhc1RyYW5zaXRpb25zKTtxLmFwcGx5QW5pbWF0aW9uRHVyYXRpb249Yy5kdXJhdGlvbiYmcS5oYXNBbmltYXRpb25zO3EuYXBwbHlUcmFuc2l0aW9uRGVsYXk9bGEoYy5kZWxheSkmJihxLmFwcGx5VHJhbnNpdGlvbkR1cmF0aW9ufHxxLmhhc1RyYW5zaXRpb25zKTtxLmFwcGx5QW5pbWF0aW9uRGVsYXk9bGEoYy5kZWxheSkmJnEuaGFzQW5pbWF0aW9ucztxLnJlY2FsY3VsYXRlVGltaW5nU3R5bGVzPTA8Ti5sZW5ndGg7aWYocS5hcHBseVRyYW5zaXRpb25EdXJhdGlvbnx8cS5hcHBseUFuaW1hdGlvbkR1cmF0aW9uKUo9Yy5kdXJhdGlvbj9wYXJzZUZsb2F0KGMuZHVyYXRpb24pOkoscS5hcHBseVRyYW5zaXRpb25EdXJhdGlvbiYmKHEuaGFzVHJhbnNpdGlvbnM9ITAseS50cmFuc2l0aW9uRHVyYXRpb249XG5KLHY9MDxnLnN0eWxlW08rXCJQcm9wZXJ0eVwiXS5sZW5ndGgsbC5wdXNoKEFhKEosdikpKSxxLmFwcGx5QW5pbWF0aW9uRHVyYXRpb24mJihxLmhhc0FuaW1hdGlvbnM9ITAseS5hbmltYXRpb25EdXJhdGlvbj1KLGwucHVzaChbc2EsSitcInNcIl0pKTtpZigwPT09SiYmIXEucmVjYWxjdWxhdGVUaW1pbmdTdHlsZXMpcmV0dXJuIHgoKTtudWxsPT1jLmR1cmF0aW9uJiYwPHkudHJhbnNpdGlvbkR1cmF0aW9uJiYocS5yZWNhbGN1bGF0ZVRpbWluZ1N0eWxlcz1xLnJlY2FsY3VsYXRlVGltaW5nU3R5bGVzfHxhYSk7Rj0xRTMqSDtHPTFFMypKO2Muc2tpcEJsb2NraW5nfHwocS5ibG9ja1RyYW5zaXRpb249MDx5LnRyYW5zaXRpb25EdXJhdGlvbixxLmJsb2NrS2V5ZnJhbWVBbmltYXRpb249MDx5LmFuaW1hdGlvbkR1cmF0aW9uJiYwPFQuYW5pbWF0aW9uRGVsYXkmJjA9PT1ULmFuaW1hdGlvbkR1cmF0aW9uKTt3YShhLGMpO3EuYmxvY2tUcmFuc2l0aW9ufHxqYShnLCExKTtMKEopO3JldHVybnskJHdpbGxBbmltYXRlOiEwLFxuZW5kOmQsc3RhcnQ6ZnVuY3Rpb24oKXtpZighSylyZXR1cm4gdD17ZW5kOmQsY2FuY2VsOmgscmVzdW1lOm51bGwscGF1c2U6bnVsbH0scD1uZXcgcyh0KSxJKE0pLHB9fX19XX1dKS5wcm92aWRlcihcIiQkYW5pbWF0ZUNzc0RyaXZlclwiLFtcIiQkYW5pbWF0aW9uUHJvdmlkZXJcIixmdW5jdGlvbihhKXthLmRyaXZlcnMucHVzaChcIiQkYW5pbWF0ZUNzc0RyaXZlclwiKTt0aGlzLiRnZXQ9W1wiJGFuaW1hdGVDc3NcIixcIiRyb290U2NvcGVcIixcIiQkQW5pbWF0ZVJ1bm5lclwiLFwiJHJvb3RFbGVtZW50XCIsXCIkZG9jdW1lbnRcIixcIiRzbmlmZmVyXCIsZnVuY3Rpb24oYSxjLGQsZSxzLG4pe2Z1bmN0aW9uIGgoYSl7cmV0dXJuIGEucmVwbGFjZSgvXFxibmctXFxTK1xcYi9nLFwiXCIpfWZ1bmN0aW9uIGsoYSxiKXtVKGEpJiYoYT1hLnNwbGl0KFwiIFwiKSk7VShiKSYmKGI9Yi5zcGxpdChcIiBcIikpO3JldHVybiBhLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4tMT09PWIuaW5kZXhPZihhKX0pLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIEQoYyxcbmUsQSl7ZnVuY3Rpb24gRChhKXt2YXIgYj17fSxjPXooYSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7dShbXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oYSl7dmFyIGQ9Y1thXTtzd2l0Y2goYSl7Y2FzZSBcInRvcFwiOmQrPUkuc2Nyb2xsVG9wO2JyZWFrO2Nhc2UgXCJsZWZ0XCI6ZCs9SS5zY3JvbGxMZWZ0fWJbYV09TWF0aC5mbG9vcihkKStcInB4XCJ9KTtyZXR1cm4gYn1mdW5jdGlvbiBzKCl7dmFyIGM9aChBLmF0dHIoXCJjbGFzc1wiKXx8XCJcIiksZD1rKGMsdCksYz1rKHQsYyksZD1hKG4se3RvOkQoQSksYWRkQ2xhc3M6XCJuZy1hbmNob3ItaW4gXCIrZCxyZW1vdmVDbGFzczpcIm5nLWFuY2hvci1vdXQgXCIrYyxkZWxheTohMH0pO3JldHVybiBkLiQkd2lsbEFuaW1hdGU/ZDpudWxsfWZ1bmN0aW9uIGYoKXtuLnJlbW92ZSgpO2UucmVtb3ZlQ2xhc3MoXCJuZy1hbmltYXRlLXNoaW1cIik7QS5yZW1vdmVDbGFzcyhcIm5nLWFuaW1hdGUtc2hpbVwiKX12YXIgbj1HKHooZSkuY2xvbmVOb2RlKCEwKSksXG50PWgobi5hdHRyKFwiY2xhc3NcIil8fFwiXCIpO2UuYWRkQ2xhc3MoXCJuZy1hbmltYXRlLXNoaW1cIik7QS5hZGRDbGFzcyhcIm5nLWFuaW1hdGUtc2hpbVwiKTtuLmFkZENsYXNzKFwibmctYW5jaG9yXCIpO3cuYXBwZW5kKG4pO3ZhciBtO2M9ZnVuY3Rpb24oKXt2YXIgYz1hKG4se2FkZENsYXNzOlwibmctYW5jaG9yLW91dFwiLGRlbGF5OiEwLGZyb206RChlKX0pO3JldHVybiBjLiQkd2lsbEFuaW1hdGU/YzpudWxsfSgpO2lmKCFjJiYobT1zKCksIW0pKXJldHVybiBmKCk7dmFyIEw9Y3x8bTtyZXR1cm57c3RhcnQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7YyYmYy5lbmQoKX12YXIgYixjPUwuc3RhcnQoKTtjLmRvbmUoZnVuY3Rpb24oKXtjPW51bGw7aWYoIW0mJihtPXMoKSkpcmV0dXJuIGM9bS5zdGFydCgpLGMuZG9uZShmdW5jdGlvbigpe2M9bnVsbDtmKCk7Yi5jb21wbGV0ZSgpfSksYztmKCk7Yi5jb21wbGV0ZSgpfSk7cmV0dXJuIGI9bmV3IGQoe2VuZDphLGNhbmNlbDphfSl9fX1mdW5jdGlvbiBBKGEsXG5iLGMsZSl7dmFyIGg9dChhKSxmPXQoYiksaz1bXTt1KGUsZnVuY3Rpb24oYSl7KGE9RChjLGEub3V0LGFbXCJpblwiXSkpJiZrLnB1c2goYSl9KTtpZihofHxmfHwwIT09ay5sZW5ndGgpcmV0dXJue3N0YXJ0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3UoYixmdW5jdGlvbihhKXthLmVuZCgpfSl9dmFyIGI9W107aCYmYi5wdXNoKGguc3RhcnQoKSk7ZiYmYi5wdXNoKGYuc3RhcnQoKSk7dShrLGZ1bmN0aW9uKGEpe2IucHVzaChhLnN0YXJ0KCkpfSk7dmFyIGM9bmV3IGQoe2VuZDphLGNhbmNlbDphfSk7ZC5hbGwoYixmdW5jdGlvbihhKXtjLmNvbXBsZXRlKGEpfSk7cmV0dXJuIGN9fX1mdW5jdGlvbiB0KGMpe3ZhciBkPWMuZWxlbWVudCxlPWMub3B0aW9uc3x8e307Yy5zdHJ1Y3R1cmFsPyhlLnN0cnVjdHVyYWw9ZS5hcHBseUNsYXNzZXNFYXJseT0hMCxlLmV2ZW50PWMuZXZlbnQsXCJsZWF2ZVwiPT09ZS5ldmVudCYmKGUub25Eb25lPWUuZG9tT3BlcmF0aW9uKSk6ZS5ldmVudD1udWxsO1xuYz1hKGQsZSk7cmV0dXJuIGMuJCR3aWxsQW5pbWF0ZT9jOm51bGx9aWYoIW4uYW5pbWF0aW9ucyYmIW4udHJhbnNpdGlvbnMpcmV0dXJuIEg7dmFyIEk9eihzKS5ib2R5O2M9eihlKTt2YXIgdz1HKEkucGFyZW50Tm9kZT09PWM/STpjKTtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGEuZnJvbSYmYS50bz9BKGEuZnJvbSxhLnRvLGEuY2xhc3NlcyxhLmFuY2hvcnMpOnQoYSl9fV19XSkucHJvdmlkZXIoXCIkJGFuaW1hdGVKc1wiLFtcIiRhbmltYXRlUHJvdmlkZXJcIixmdW5jdGlvbihhKXt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsXCIkJEFuaW1hdGVSdW5uZXJcIixcIiQkckFGTXV0ZXhcIixcIiQkanFMaXRlXCIsZnVuY3Rpb24oYixjLGQsZSl7ZnVuY3Rpb24gcyhjKXtjPVgoYyk/YzpjLnNwbGl0KFwiIFwiKTtmb3IodmFyIGQ9W10sZT17fSxBPTA7QTxjLmxlbmd0aDtBKyspe3ZhciBuPWNbQV0scz1hLiQkcmVnaXN0ZXJlZEFuaW1hdGlvbnNbbl07cyYmIWVbbl0mJihkLnB1c2goYi5nZXQocykpLGVbbl09XG4hMCl9cmV0dXJuIGR9dmFyIG49aGEoZSk7cmV0dXJuIGZ1bmN0aW9uKGEsYixkLGUpe2Z1bmN0aW9uIHQoKXtlLmRvbU9wZXJhdGlvbigpO24oYSxlKX1mdW5jdGlvbiB6KGEsYixkLGUsZyl7c3dpdGNoKGQpe2Nhc2UgXCJhbmltYXRlXCI6Yj1bYixlLmZyb20sZS50byxnXTticmVhaztjYXNlIFwic2V0Q2xhc3NcIjpiPVtiLHIsSyxnXTticmVhaztjYXNlIFwiYWRkQ2xhc3NcIjpiPVtiLHIsZ107YnJlYWs7Y2FzZSBcInJlbW92ZUNsYXNzXCI6Yj1bYixLLGddO2JyZWFrO2RlZmF1bHQ6Yj1bYixnXX1iLnB1c2goZSk7aWYoYT1hLmFwcGx5KGEsYikpaWYoQ2EoYS5zdGFydCkmJihhPWEuc3RhcnQoKSksYSBpbnN0YW5jZW9mIGMpYS5kb25lKGcpO2Vsc2UgaWYoQ2EoYSkpcmV0dXJuIGE7cmV0dXJuIEh9ZnVuY3Rpb24gdyhhLGIsZCxlLGcpe3ZhciBmPVtdO3UoZSxmdW5jdGlvbihlKXt2YXIgaD1lW2ddO2gmJmYucHVzaChmdW5jdGlvbigpe3ZhciBlLGcsZj0hMSxsPWZ1bmN0aW9uKGEpe2Z8fFxuKGY9ITAsKGd8fEgpKGEpLGUuY29tcGxldGUoIWEpKX07ZT1uZXcgYyh7ZW5kOmZ1bmN0aW9uKCl7bCgpfSxjYW5jZWw6ZnVuY3Rpb24oKXtsKCEwKX19KTtnPXooaCxhLGIsZCxmdW5jdGlvbihhKXtsKCExPT09YSl9KTtyZXR1cm4gZX0pfSk7cmV0dXJuIGZ9ZnVuY3Rpb24gQihhLGIsZCxlLGcpe3ZhciBmPXcoYSxiLGQsZSxnKTtpZigwPT09Zi5sZW5ndGgpe3ZhciBoLGs7XCJiZWZvcmVTZXRDbGFzc1wiPT09Zz8oaD13KGEsXCJyZW1vdmVDbGFzc1wiLGQsZSxcImJlZm9yZVJlbW92ZUNsYXNzXCIpLGs9dyhhLFwiYWRkQ2xhc3NcIixkLGUsXCJiZWZvcmVBZGRDbGFzc1wiKSk6XCJzZXRDbGFzc1wiPT09ZyYmKGg9dyhhLFwicmVtb3ZlQ2xhc3NcIixkLGUsXCJyZW1vdmVDbGFzc1wiKSxrPXcoYSxcImFkZENsYXNzXCIsZCxlLFwiYWRkQ2xhc3NcIikpO2gmJihmPWYuY29uY2F0KGgpKTtrJiYoZj1mLmNvbmNhdChrKSl9aWYoMCE9PWYubGVuZ3RoKXJldHVybiBmdW5jdGlvbihhKXt2YXIgYj1bXTtmLmxlbmd0aCYmXG51KGYsZnVuY3Rpb24oYSl7Yi5wdXNoKGEoKSl9KTtiLmxlbmd0aD9jLmFsbChiLGEpOmEoKTtyZXR1cm4gZnVuY3Rpb24oYSl7dShiLGZ1bmN0aW9uKGIpe2E/Yi5jYW5jZWwoKTpiLmVuZCgpfSl9fX0zPT09YXJndW1lbnRzLmxlbmd0aCYmbmEoZCkmJihlPWQsZD1udWxsKTtlPWlhKGUpO2R8fChkPWEuYXR0cihcImNsYXNzXCIpfHxcIlwiLGUuYWRkQ2xhc3MmJihkKz1cIiBcIitlLmFkZENsYXNzKSxlLnJlbW92ZUNsYXNzJiYoZCs9XCIgXCIrZS5yZW1vdmVDbGFzcykpO3ZhciByPWUuYWRkQ2xhc3MsSz1lLnJlbW92ZUNsYXNzLEM9cyhkKSxFLGY7aWYoQy5sZW5ndGgpe3ZhciBGLEc7XCJsZWF2ZVwiPT1iPyhHPVwibGVhdmVcIixGPVwiYWZ0ZXJMZWF2ZVwiKTooRz1cImJlZm9yZVwiK2IuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYi5zdWJzdHIoMSksRj1iKTtcImVudGVyXCIhPT1iJiZcIm1vdmVcIiE9PWImJihFPUIoYSxiLGUsQyxHKSk7Zj1CKGEsYixlLEMsRil9aWYoRXx8ZilyZXR1cm57c3RhcnQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGMpe249XG4hMDt0KCk7Y2EoYSxlKTtnLmNvbXBsZXRlKGMpfXZhciBkLGs9W107RSYmay5wdXNoKGZ1bmN0aW9uKGEpe2Q9RShhKX0pO2subGVuZ3RoP2sucHVzaChmdW5jdGlvbihhKXt0KCk7YSghMCl9KTp0KCk7ZiYmay5wdXNoKGZ1bmN0aW9uKGEpe2Q9ZihhKX0pO3ZhciBuPSExLGc9bmV3IGMoe2VuZDpmdW5jdGlvbigpe258fCgoZHx8SCkodm9pZCAwKSxiKHZvaWQgMCkpfSxjYW5jZWw6ZnVuY3Rpb24oKXtufHwoKGR8fEgpKCEwKSxiKCEwKSl9fSk7Yy5jaGFpbihrLGIpO3JldHVybiBnfX19fV19XSkucHJvdmlkZXIoXCIkJGFuaW1hdGVKc0RyaXZlclwiLFtcIiQkYW5pbWF0aW9uUHJvdmlkZXJcIixmdW5jdGlvbihhKXthLmRyaXZlcnMucHVzaChcIiQkYW5pbWF0ZUpzRHJpdmVyXCIpO3RoaXMuJGdldD1bXCIkJGFuaW1hdGVKc1wiLFwiJCRBbmltYXRlUnVubmVyXCIsZnVuY3Rpb24oYSxjKXtmdW5jdGlvbiBkKGMpe3JldHVybiBhKGMuZWxlbWVudCxjLmV2ZW50LGMuY2xhc3NlcyxjLm9wdGlvbnMpfVxucmV0dXJuIGZ1bmN0aW9uKGEpe2lmKGEuZnJvbSYmYS50byl7dmFyIGI9ZChhLmZyb20pLG49ZChhLnRvKTtpZihifHxuKXJldHVybntzdGFydDpmdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtyZXR1cm4gZnVuY3Rpb24oKXt1KGQsZnVuY3Rpb24oYSl7YS5lbmQoKX0pfX12YXIgZD1bXTtiJiZkLnB1c2goYi5zdGFydCgpKTtuJiZkLnB1c2gobi5zdGFydCgpKTtjLmFsbChkLGZ1bmN0aW9uKGEpe2UuY29tcGxldGUoYSl9KTt2YXIgZT1uZXcgYyh7ZW5kOmEoKSxjYW5jZWw6YSgpfSk7cmV0dXJuIGV9fX1lbHNlIHJldHVybiBkKGEpfX1dfV0pfSkod2luZG93LHdpbmRvdy5hbmd1bGFyKTtcblxuIiwiKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ2FDYXJvdXNlbCcsIFtdKVxuICAgICAgICAuZGlyZWN0aXZlKCdhQ2Fyb3VzZWwnLCBhZHZhbmNlZENhcm91c2VsKTtcblxuICAgIGFkdmFuY2VkQ2Fyb3VzZWwuJGluamVjdCA9IFsnJGNvbXBpbGUnLCAnJHRpbWVvdXQnLCAnJGlvbmljU2Nyb2xsRGVsZWdhdGUnXTtcbiAgICBmdW5jdGlvbiBhZHZhbmNlZENhcm91c2VsKCRjb21waWxlLCAkdGltZW91dCwgJGlvbmljU2Nyb2xsRGVsZWdhdGUpIHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3QgICAgICAgIDogJ0UnLFxuICAgICAgICAgICAgcmVwbGFjZSAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlICAgICAgICA6ICcnLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgICAgIDoge30sXG4gICAgICAgICAgICBsaW5rICAgICAgICAgICAgOiBsaW5rRnVuYyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXIgICAgICA6IENvbnRyb2xsZXIsXG4gICAgICAgICAgICBjb250cm9sbGVyQXMgICAgOiAndm0nLFxuICAgICAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xuICAgICAgICAgICAgICAgIGl0ZW1EaXJlY3RpdmUgIDogJ0AnLFxuICAgICAgICAgICAgICAgIGNhcm91c2VsT3B0aW9uczogJz0nLFxuICAgICAgICAgICAgICAgIGFycmF5UHJvdmlkZXIgIDogJz0nLFxuICAgICAgICAgICAgICAgIG9uU2VsZWN0ICAgICAgIDogJyYnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8vLy8vLy8vXG5cbiAgICAgICAgZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCBjdHJsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdHJsKTtcblxuICAgICAgICAgICAgY3RybC5lbCA9IGVsO1xuXG4gICAgICAgICAgICBjdHJsLm9wdGlvbnMudHJhY2tCeSAgICA9IHR5cGVvZiBhdHRyLnRyYWNrQnkgIT09ICd1bmRlZmluZWQnID8gYXR0ci50cmFja0J5IDogJyRpbmRleCc7XG4gICAgICAgICAgICBjdHJsLm9wdGlvbnMudHJhY2tCeXN0ciA9IGN0cmwub3B0aW9ucy50cmFja0J5ID09PSAnJGluZGV4JyA/ICckaW5kZXgnIDogJ2l0ZW0uJyArIGN0cmwub3B0aW9ucy50cmFja0J5O1xuXG4gICAgICAgICAgICB2YXIgYW5pbWF0ZUluID0gY3RybC5vcHRpb25zLmFuaW1hdGVJbiA/ICcgYW5pbWF0ZUluJyA6ICcnO1xuXG4gICAgICAgICAgICAvLyBEeW5hbWljIGRpcmVjdGl2ZSBodG1sXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYS1jYXJvdXNlbFwiPic7XG5cbiAgICAgICAgICAgIGlmIChjdHJsLm9wdGlvbnMucHVsbFJlZnJlc2guYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cInNwaW5uZXItd3JhcHBlclwiIG5nLWlmPVwidm0ub3B0aW9ucy5wdWxsUmVmcmVzaC5sb2FkaW5nXCI+PGlvbi1zcGlubmVyIGljb249XCJhbmRyb2lkXCI+PC9pb24tc3Bpbm5lcj48L2Rpdj4nO1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzxzcGFuIGNsYXNzPVwicHVsbHJlZnJlc2gtaW5kaWNhdG9yXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8c3ZnIHZpZXdCb3g9XCIwIDAgNjQgNjRcIj48Zz4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxjaXJjbGUgc3Ryb2tlLXdpZHRoPVwiNlwiIHN0cm9rZS1kYXNoYXJyYXk9XCIxMzUuMjYyNjEyMzkxNDQyODdcIiBzdHJva2UtZGFzaG9mZnNldD1cIjE2LjUxMzcxNDc0NTU2MjE0XCIgJyArXG4gICAgICAgICAgICAgICAgICAgICdyPVwiMjZcIiBjeD1cIjMyXCIgY3k9XCIzMlwiIGZpbGw9XCJub25lXCIgdHJhbnNmb3JtPVwic2NhbGUoMSwxKSB0cmFuc2xhdGUoMCwwKSByb3RhdGUoMCwzMiwzMilcIj48L2NpcmNsZT48L2c+JyArXG4gICAgICAgICAgICAgICAgICAgICc8L3N2Zz4nICtcbiAgICAgICAgICAgICAgICAgICAgJzwvc3Bhbj4nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBodG1sICs9ICc8aW9uLXNjcm9sbCAnO1xuXG4gICAgICAgICAgICBpZiAoY3RybC5vcHRpb25zLnB1bGxSZWZyZXNoLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gJ29uLXNjcm9sbD1cInZtLm9uU2Nyb2xsKClcIiAnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBodG1sICs9ICdzY3JvbGxiYXIteD1cImZhbHNlXCIgZGVsZWdhdGUtaGFuZGxlPVwiJyArIGN0cmwub3B0aW9ucy5jYXJvdXNlbElkICsgJ1wiICcgK1xuICAgICAgICAgICAgICAgICd6b29taW5nPVwiZmFsc2VcIiBkaXJlY3Rpb249XCJ4XCIgb3ZlcmZsb3ctc2Nyb2xsPVwiZmFsc2VcIiBoYXMtYm91bmNpbmc9XCJ0cnVlXCI+JyArXG4gICAgICAgICAgICAgICAgJzxuYXYgc3R5bGU9XCJ2aXNpYmlsaXR5OmhpZGRlbjtcIj4nICtcbiAgICAgICAgICAgICAgICAnPHVsPiA8bGkgJyArXG4gICAgICAgICAgICAgICAgJ25nLXJlcGVhdD1cIml0ZW0gaW4gdm0uYXJyYXlQcm92aWRlciB0cmFjayBieSAnICtcbiAgICAgICAgICAgICAgICBjdHJsLm9wdGlvbnMudHJhY2tCeXN0ciArICdcIicgK1xuICAgICAgICAgICAgICAgICdjbGFzcz1cImNhcm91c2VsLWl0ZW0nICsgYW5pbWF0ZUluICsgJ1wiJyArXG4gICAgICAgICAgICAgICAgJ25nLWNsYXNzPVwie1xcJ2FjdGl2ZVxcJzp2bS5pdGVtQWN0aXZlID09PSBpdGVtfVwiPicgK1xuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW1EaXJlY3RpdmUoKSArXG4gICAgICAgICAgICAgICAgJzwvbGk+JyArXG4gICAgICAgICAgICAgICAgJzwvdWw+PC9uYXY+PC9pb24tc2Nyb2xsPjwvZGl2Pic7XG5cbiAgICAgICAgICAgIC8vIENvbXBpbGUgZHluYW1pYyB0ZW1wbGF0ZVxuICAgICAgICAgICAgaHRtbCA9ICRjb21waWxlKGh0bWwpKHNjb3BlKTtcbiAgICAgICAgICAgIGVsLmFwcGVuZChodG1sKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGh0bWwpXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqICR0aW1lb3V0IHNvIG5nLXJlcGVhdCBpcyBmaW5pc2hlZCBpbiBvcmRlciB0byBjYWxjdWxhdGUgd2lkdGggb2YgY2Fyb3VzZWxcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjdHJsLmFycmF5UHJvdmlkZXIgJiYgY3RybC5hcnJheVByb3ZpZGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3RybC5pbml0Q2Fyb3VzZWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWxsb3dWZXJ0aWNhbFNjcm9sbCgpO1xuICAgICAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUl0ZW1EaXJlY3RpdmUoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gY3RybC5vcHRpb25zLnRlbXBsYXRlICE9PSBudWxsID8gJ3RlbXBsYXRlPVwiJyArIGN0cmwub3B0aW9ucy50ZW1wbGF0ZSArICdcIicgOiAnJztcbiAgICAgICAgICAgICAgICBjdHJsLml0ZW1EaXJlY3RpdmUgPSB0eXBlb2YgY3RybC5pdGVtRGlyZWN0aXZlID09PSAndW5kZWZpbmVkJyA/ICdjYXJvdXNlbC1nZW5lcmljLWl0ZW0nIDogY3RybC5pdGVtRGlyZWN0aXZlO1xuICAgICAgICAgICAgICAgIHZhciBkaXJlY3RpdmUgPSAnPCcgKyBjdHJsLml0ZW1EaXJlY3RpdmUgKyAnIG5nLW1vZGVsPVwiaXRlbVwiICcgKyB0ZW1wbGF0ZSArXG4gICAgICAgICAgICAgICAgICAgICdvbi1zZWxlY3Q9XCJ2bS5zZWxlY3RJdGVtKGl0ZW0pXCIgY2Fyb3VzZWwtb3B0aW9ucz1cIm1lbnVDYXJvdXNlbC5vcHRpb25zXCIgJztcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmUgKz0gJz48LycgKyBjdHJsLml0ZW1EaXJlY3RpdmUgKyAnPic7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3JlYXRlSXRlbURpcmVjdGl2ZSgpKVxuXG5cbiAgICAgICAgICAgIC8vIHRoaXMgbWV0aG9kIGFsbG93cyB0byBzY3JvbGwgdGhlIHBhZ2UgYmVsb3cgdGhlIGNhcm91c2VsXG4gICAgICAgICAgICBmdW5jdGlvbiBhbGxvd1ZlcnRpY2FsU2Nyb2xsKCkge1xuICAgICAgICAgICAgICAgIHZhciBzdiAgICAgICAgPSAkaW9uaWNTY3JvbGxEZWxlZ2F0ZS4kZ2V0QnlIYW5kbGUoY3RybC5vcHRpb25zLmNhcm91c2VsSWQpLmdldFNjcm9sbFZpZXcoKTtcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gc3YuX19jb250YWluZXI7XG5cbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWx0b3VjaFN0YXJ0ID0gc3YudG91Y2hTdGFydDtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWx0b3VjaE1vdmUgID0gc3YudG91Y2hNb3ZlO1xuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBzdi50b3VjaFN0YXJ0KTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBzdi50b3VjaE1vdmUpO1xuXG4gICAgICAgICAgICAgICAgc3YudG91Y2hTdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsdG91Y2hTdGFydC5hcHBseShzdiwgW2VdKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgc3YudG91Y2hNb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWx0b3VjaE1vdmUuYXBwbHkoc3YsIFtlXSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc3YudG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHN2LnRvdWNoTW92ZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJHRpbWVvdXQnLCAnJHdpbmRvdycsICckaW9uaWNTY3JvbGxEZWxlZ2F0ZSddO1xuICAgIGZ1bmN0aW9uIENvbnRyb2xsZXIoJHNjb3BlLCAkZWxlbWVudCwgJHRpbWVvdXQsICR3aW5kb3csICRpb25pY1Njcm9sbERlbGVnYXRlKSB7XG4gICAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICAgIFxuICAgICAgICB2bS5vcHRpb25zID0ge1xuICAgICAgICAgICAgc2hvd1Njcm9sbCAgICA6IGZhbHNlLFxuICAgICAgICAgICAgY2Fyb3VzZWxJZCAgICA6ICdteS1jYXJvdXNlbCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZSAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIGFsaWduICAgICAgICAgOiAnbGVmdCcsXG4gICAgICAgICAgICBjZW50ZXJPblNlbGVjdDogdHJ1ZSxcbiAgICAgICAgICAgIHdpZHRoSXRlbSAgICAgOiAwLFxuICAgICAgICAgICAgaGVpZ2h0SXRlbSAgICA6IDAsXG4gICAgICAgICAgICB0cmFja0J5ICAgICAgIDogJyRpbmRleCcsXG4gICAgICAgICAgICBzZWxlY3RGaXJzdCAgIDogdHJ1ZSxcbiAgICAgICAgICAgIHNlbGVjdEF0U3RhcnQgOiB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHk6IG51bGwsXG4gICAgICAgICAgICAgICAgdmFsdWUgICA6IG51bGwsXG4gICAgICAgICAgICAgICAgaW5kZXggICA6IC0xXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHVsbFJlZnJlc2ggICA6IHtcbiAgICAgICAgICAgICAgICBhY3RpdmUgIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2FsbEJhY2s6IGFuZ3VsYXIubm9vcCxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW5pbWF0ZUluICAgICA6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQVBJXG4gICAgICAgIHZtLmluaXRDYXJvdXNlbCA9IGluaXRDYXJvdXNlbDtcbiAgICAgICAgdm0uc2VsZWN0SXRlbSAgID0gc2VsZWN0SXRlbTtcbiAgICAgICAgdm0ub25TY3JvbGwgICAgID0gb25TY3JvbGw7XG5cbiAgICAgICAgY29uc29sZS5sb2codm0pO1xuXG4gICAgICAgIGFjdGl2YXRlKCk7XG5cbiAgICAgICAgLy8vLy8vLy8vL1xuXG4gICAgICAgIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgICAgICAgICAgYW5ndWxhci5leHRlbmQodm0ub3B0aW9ucywgdm0uY2Fyb3VzZWxPcHRpb25zKTtcblxuICAgICAgICAgICAgJHNjb3BlLiRvbignYS1jYXJvdXNlbC5hcnJheXVwZGF0ZWQnLCBvbkFycmF5UHJvdmlkZXJVcGRhdGVkKTtcbiAgICAgICAgICAgICRzY29wZS4kb24oJ2EtY2Fyb3VzZWwuZGVzYWN0aXZhdGVJdGVtJywgZGVzYWN0aXZlSXRlbVNlbGVjdGVkKTtcblxuICAgICAgICAgICAgaWYgKHZtLm9wdGlvbnMucHVsbFJlZnJlc2guYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLiRvbignYS1jYXJvdXNlbC5wdWxscmVmcmVzaC5kb25lJywgb25FbmRSZWZyZXNoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8vLy8vLy8vL1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtIGVcbiAgICAgICAgICAgICAqIEBwYXJhbSB7e2Nhcm91c2VsSWQ6c3RyaW5nfX0gcGFyYW1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gb25BcnJheVByb3ZpZGVyVXBkYXRlZChlLCBwYXJhbSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkFycmF5UHJvdmlkZXJVcGRhdGVkJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFyYW0pXG4gICAgICAgICAgICAgICAgdmFyIGNhcm91c2VsSWQ7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWxJZCA9IHBhcmFtLmNhcm91c2VsSWQ7XG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZXh0ZW5kKHZtLm9wdGlvbnMsIHBhcmFtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYXJvdXNlbElkID0gcGFyYW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNhcm91c2VsSWQgPT09IHZtLm9wdGlvbnMuY2Fyb3VzZWxJZCkge1xuICAgICAgICAgICAgICAgICAgICAkdGltZW91dCh2bS5pbml0Q2Fyb3VzZWwsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtIGVcbiAgICAgICAgICAgICAqIEBwYXJhbSB7e2lkQ29udGFpbnM6c3RyaW5nLCBleGNlcHQ6c3RyaW5nfX0gcGFyYW1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZGVzYWN0aXZlSXRlbVNlbGVjdGVkKGUsIHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkQ29udGFpbnMgPSBwYXJhbS5pZENvbnRhaW5zO1xuICAgICAgICAgICAgICAgIHZhciBleGNlcHQgICAgID0gcGFyYW0uZXhjZXB0O1xuXG4gICAgICAgICAgICAgICAgaWYgKHZtLm9wdGlvbnMuY2Fyb3VzZWxJZC5pbmRleE9mKGlkQ29udGFpbnMpID49IDAgJiYgdm0ub3B0aW9ucy5jYXJvdXNlbElkICE9PSBleGNlcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdm0uaXRlbUFjdGl2ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdENhcm91c2VsKCkge1xuICAgICAgICAgICAgdmFyIGNhcm91c2VsSXRlbXMgPSAkZWxlbWVudC5maW5kKCdsaScpO1xuICAgICAgICAgICAgdmFyIHRvdGFsSXRlbXMgICAgPSBjYXJvdXNlbEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBudW1JdGVtcyAgICAgID0gYW5ndWxhci5lbGVtZW50KGNhcm91c2VsSXRlbXMpLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciB3aWR0aENhcm91c2VsID0gMDtcblxuICAgICAgICAgICAgdmFyIG1hcmdpbkxlZnQgID0gMDtcbiAgICAgICAgICAgIHZhciBtYXJnaW5SaWdodCA9IDA7XG5cbiAgICAgICAgICAgIHZhciBpbmRleCAgICAgICAgICAgICAgPSAwO1xuICAgICAgICAgICAgdmFyIG51bVRpbWVzRG9tQ2hlY2tlZCA9IDA7XG4gICAgICAgICAgICB2YXIgbnVtUmV0cnlCdWlsZCAgICAgICAgICAgPSAxNTtcblxuICAgICAgICAgICAgdm0uaXRlbUFjdGl2ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChudW1JdGVtcyA+IDApIHtcbiAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrRE9NKCk7XG4gICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignVHJ5aW5nIHRvIGNyZWF0ZSBhIGNhcm91c2VsIGZyb20gYW4gZW1wdHkgYXJyYXknLCB2bS5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tET00oKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2tpbmcgaWYgY2Fyb3VzZWwgaXRlbXMgYXJlIGluIERPTVxuICAgICAgICAgICAgICAgIHZhciB3ID0gcGFyc2VJbnQoY2Fyb3VzZWxJdGVtc1t0b3RhbEl0ZW1zIC0gMV0ub2Zmc2V0V2lkdGgpO1xuICAgICAgICAgICAgICAgIHZhciBoID0gcGFyc2VJbnQoY2Fyb3VzZWxJdGVtc1t0b3RhbEl0ZW1zIC0gMV0ub2Zmc2V0SGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIGlmICh3ID4gMCAmJiBoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzTm93KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tJTkZPXSBDcmVhdGluZyBDYXJvdXNlbCBidXQgRE9NIG5vdCByZWFkeSB5ZXQuLi4nKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtVGltZXNEb21DaGVja2VkIDwgbnVtUmV0cnlCdWlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrRE9NKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW0VSUk9SXSBTaXplIGl0ZW0gQ2Fyb3VzZWwgY291bGQgbm90IGJlIGRldGVybWluZWQnLCB2bS5vcHRpb25zLmNhcm91c2VsSWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbnVtVGltZXNEb21DaGVja2VkKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBwcm9jZXNzTm93KCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RJdGVtQXRTdGFydCA9IHZtLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5wcm9wZXJ0eSAhPT0gbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgbW9kZWxJdGVtO1xuXG4gICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGNhcm91c2VsSXRlbXMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsSXRlbSAgICAgICAgICAgID0gdm0uYXJyYXlQcm92aWRlcltpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsSXRlbS5jYXJvdXNlbElkID0gdm0ub3B0aW9ucy5jYXJvdXNlbElkO1xuXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoQ2Fyb3VzZWwgKz0gaXRlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdm0ub3B0aW9ucy53aWR0aEl0ZW0gID0gTWF0aC5tYXgoaXRlbS5vZmZzZXRXaWR0aCwgdm0ub3B0aW9ucy53aWR0aEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB2bS5vcHRpb25zLmhlaWdodEl0ZW0gPSBNYXRoLm1heChpdGVtLm9mZnNldEhlaWdodCwgdm0ub3B0aW9ucy5oZWlnaHRJdGVtKTtcblxuICAgICAgICAgICAgICAgICAgICB2bS5hcnJheVByb3ZpZGVyW2luZGV4XS53aWR0aEl0ZW0gPSBpdGVtLm9mZnNldFdpZHRoO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFzIHdlIGNhbiBzZWxlY3QgYXQgc3RhcnQgYW4gaXRlbSB3aXRoIGEgcHJvcGVydHkgb2YgY2VydGFpbiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjaGVjayBoZXJlIGl0cyBpbmRleCBpbiB0aGUgQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdEl0ZW1BdFN0YXJ0ICYmIHZtLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5pbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbEl0ZW1bdm0ub3B0aW9ucy5zZWxlY3RBdFN0YXJ0LnByb3BlcnR5XSA9PT0gdm0ub3B0aW9ucy5zZWxlY3RBdFN0YXJ0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0ub3B0aW9ucy5zZWxlY3RBdFN0YXJ0LmluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZtLm9wdGlvbnMuY2VudGVyT25TZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNlbnRlclggICA9ICR3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpcnN0SXRlbSA9IGNhcm91c2VsSXRlbXNbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXN0SXRlbSAgPSBjYXJvdXNlbEl0ZW1zW251bUl0ZW1zIC0gMV07XG5cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdCAgPSBjZW50ZXJYIC0gZmlyc3RJdGVtLm9mZnNldFdpZHRoICogMC41O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodCA9IGNlbnRlclggLSBsYXN0SXRlbS5vZmZzZXRXaWR0aCAqIDAuNTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBhZGQgbWFyZ2luIG9uIGJvdGggc2lkZSB0byBiZSBhYmxlIHRvIGNlbnRlciB0aGUgZmlyc3QgYW5kIGxhc3QgaXRlbVxuICAgICAgICAgICAgICAgICAgICB3aWR0aENhcm91c2VsICs9IG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodDtcblxuICAgICAgICAgICAgICAgICAgICB2bS5vcHRpb25zLm1heFNjcm9sbCA9ICR3aW5kb3cuaW5uZXJXaWR0aCAtIHdpZHRoQ2Fyb3VzZWw7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcG9zaXRpb24gdGhlIGNhcm91c2VsIG9uIGZpcnN0IGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLm9wdGlvbnMuYWxpZ24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpb25pY1Njcm9sbERlbGVnYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLiRnZXRCeUhhbmRsZSh2bS5vcHRpb25zLmNhcm91c2VsSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNjcm9sbFRvKHZtLm9wdGlvbnMubWF4U2Nyb2xsICogLTEsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2bS5vcHRpb25zLmFsaWduID09PSAnY2VudGVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGlvbmljU2Nyb2xsRGVsZWdhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuJGdldEJ5SGFuZGxlKHZtLm9wdGlvbnMuY2Fyb3VzZWxJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2Nyb2xsVG8odm0ub3B0aW9ucy5tYXhTY3JvbGwgKiAtMC41LCAwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaW9uaWNTY3JvbGxEZWxlZ2F0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kZ2V0QnlIYW5kbGUodm0ub3B0aW9ucy5jYXJvdXNlbElkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zY3JvbGxUbygwLCAwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhDYXJvdXNlbCArPSA0OyAvLyArIDQgdG8gYXZvaWQgbGluZSBicmVhayB3aGVuIHRleHQgZ29pbmcgYm9sZFxuICAgICAgICAgICAgICAgICAgICB2bS5vcHRpb25zLm1heFNjcm9sbCA9ICR3aW5kb3cuaW5uZXJXaWR0aCAtIHdpZHRoQ2Fyb3VzZWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdm0ub3B0aW9ucy53aWR0aENhcm91c2VsID0gd2lkdGhDYXJvdXNlbDtcblxuICAgICAgICAgICAgICAgIC8vIFNldCBBY3RpdmUgaXRlbSBhdCBzdGFydFxuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0SXRlbUF0U3RhcnQgJiYgdm0ub3B0aW9ucy5zZWxlY3RGaXJzdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodm0ub3B0aW9ucy5hbGlnbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUFjdGl2ZSh2bS5hcnJheVByb3ZpZGVyW251bUl0ZW1zIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUFjdGl2ZSh2bS5hcnJheVByb3ZpZGVyWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtQXRTdGFydCAmJiB2bS5vcHRpb25zLnNlbGVjdEF0U3RhcnQuaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RJdGVtKHZtLmFycmF5UHJvdmlkZXJbdm0ub3B0aW9ucy5zZWxlY3RBdFN0YXJ0LmluZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBseSBpbmxpbmUtY3NzIHRvIGNhcm91c2VsIGFjY29yZGluZyB0byBpdGVtcyB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgICAgICAgICAgICAgdm0ubmF2RWxlbSA9ICRlbGVtZW50LmZpbmQoJ25hdicpO1xuICAgICAgICAgICAgICAgIHZtLm5hdkVsZW0uY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJyAgICAgICA6IHdpZHRoQ2Fyb3VzZWwgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JyAgICAgIDogdm0ub3B0aW9ucy5oZWlnaHRJdGVtICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknICA6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmctbGVmdCc6IG1hcmdpbkxlZnQgKyAncHgnXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBDYWNoZSBwdWxsIHJlZnJlc2ggRE9NIGVsZW1lbnRzIChib3RoIHdyYXBwZXIgYW5kIHN2ZyBlbGVtKVxuICAgICAgICAgICAgICAgIGlmICh2bS5vcHRpb25zLnB1bGxSZWZyZXNoLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICB2bS5wdWxscmVmcmVzaEluZGljYXRvciA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYS1jYXJvdXNlbCAucHVsbHJlZnJlc2gtaW5kaWNhdG9yJykpO1xuICAgICAgICAgICAgICAgICAgICB2bS5zdmdFbGVtICAgICAgICAgICAgICA9ICRlbGVtZW50LmZpbmQoJ2cnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZWxlY3RJdGVtKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciBzY3JvbGxQb3MsIGk7XG5cbiAgICAgICAgICAgIHNldEl0ZW1BY3RpdmUoaXRlbSk7XG5cbiAgICAgICAgICAgIC8vIENlbnRlciBjYXJvdXNlbFxuICAgICAgICAgICAgaWYgKHZtLm9wdGlvbnMuY2VudGVyT25TZWxlY3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEZyb21JZChpdGVtKTtcblxuICAgICAgICAgICAgICAgIHNjcm9sbFBvcyA9IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsUG9zID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsUG9zICs9ICh2bS5hcnJheVByb3ZpZGVyW2ldLndpZHRoSXRlbSArIHZtLmFycmF5UHJvdmlkZXJbaSArIDFdLndpZHRoSXRlbSkgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkaW9uaWNTY3JvbGxEZWxlZ2F0ZS4kZ2V0QnlIYW5kbGUodm0ub3B0aW9ucy5jYXJvdXNlbElkKS5zY3JvbGxUbyhzY3JvbGxQb3MsIDAsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ubHkgZm9yIHdoZW4gcHVsbC1yZWZyZXNoIGFjdGl2ZSBpcyBzZXRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xuICAgICAgICAgICAgdmFyIHBjdDtcbiAgICAgICAgICAgIHZhciBwb3MgICAgICAgICAgICAgPSAkaW9uaWNTY3JvbGxEZWxlZ2F0ZS4kZ2V0QnlIYW5kbGUodm0ub3B0aW9ucy5jYXJvdXNlbElkKS5nZXRTY3JvbGxQb3NpdGlvbigpLmxlZnQ7XG4gICAgICAgICAgICB2YXIgcGN0UHVsbCAgICAgICAgID0gMDtcbiAgICAgICAgICAgIHZhciBwY3RSb3RJbmRpY2F0b3IgPSAwO1xuXG4gICAgICAgICAgICBpZiAodm0ub3B0aW9ucy5tYXhTY3JvbGwgPCAwKSB7XG4gICAgICAgICAgICAgICAgcGN0ID0gcG9zIC8gdm0ub3B0aW9ucy5tYXhTY3JvbGwgKiAtMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgTk8gbWF4U2Nyb2xsIC0+IHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlcmUgYXJlIG9ubHkgMSBvciAyIGl0ZW1zIChubyBuZWVkIHRvIHNjcm9sbClcbiAgICAgICAgICAgICAgICAvLyB3ZSBmYWtlIGEgcGVyY2VudGFnZVxuICAgICAgICAgICAgICAgIHBjdCA9IHBvcyAvIDEwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGN0ID4gMSkge1xuICAgICAgICAgICAgICAgIHZhciBwaXhlbFB1bGwgPSBwb3MgLSB2bS5vcHRpb25zLm1heFNjcm9sbCAqIC0xO1xuICAgICAgICAgICAgICAgIHBjdFB1bGwgICAgICAgPSBwaXhlbFB1bGwgLyAkd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgdm0ucHVsbHJlZnJlc2hJbmRpY2F0b3IuY3NzKHsndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVgoJyArIHBjdFJvdEluZGljYXRvciAqIC01NiArICdweCknfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwY3RQdWxsID4gMC4yNSAmJiBwb3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgdm0ucHVsbHJlZnJlc2hJbmRpY2F0b3IuY3NzKHsndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVgoMHB4KScsIGRpc3BsYXk6ICdub25lJ30pO1xuICAgICAgICAgICAgICAgIG9uUHVsbFJlZnJlc2goKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGN0Um90SW5kaWNhdG9yID0gcGN0UHVsbCAvIDAuMjtcbiAgICAgICAgICAgICAgICB2bS5zdmdFbGVtWzBdLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgJ3JvdGF0ZSgnICsgcGN0Um90SW5kaWNhdG9yICogMzYwICsgJyAzMiAzMiknKTtcbiAgICAgICAgICAgICAgICB2bS5wdWxscmVmcmVzaEluZGljYXRvci5jc3Moeyd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWCgnICsgcGN0Um90SW5kaWNhdG9yICogLTU2ICsgJ3B4KSd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS1cbiAgICAgICAgLy8gUFJJVkFURVxuICAgICAgICAvLyAtLS0tLS0tLS0tXG4gICAgICAgIGZ1bmN0aW9uIHNldEl0ZW1BY3RpdmUoaXRlbSkge1xuICAgICAgICAgICAgdm0uaXRlbUFjdGl2ZSA9IGl0ZW07XG5cbiAgICAgICAgICAgIC8vIENhbGxiYWNrIG9uIHNlbGVjdFxuICAgICAgICAgICAgdm0ub25TZWxlY3QuY2FsbChudWxsLCB7aXRlbTogaXRlbX0pO1xuXG4gICAgICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdCgnYS1jYXJvdXNlbC5pdGVtc2VsZWN0ZWQnLCBpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldEluZGV4RnJvbUlkKGl0ZW0pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdm0uYXJyYXlQcm92aWRlcikge1xuICAgICAgICAgICAgICAgIGlmICh2bS5hcnJheVByb3ZpZGVyW2ldID09PSBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFB1bGwgUmVmcmVzaFxuICAgICAgICBmdW5jdGlvbiBvblB1bGxSZWZyZXNoKCkge1xuICAgICAgICAgICAgaWYgKCF2bS5vcHRpb25zLnB1bGxSZWZyZXNoLmxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdm0ub3B0aW9ucy5wdWxsUmVmcmVzaC5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICRpb25pY1Njcm9sbERlbGVnYXRlLiRnZXRCeUhhbmRsZSh2bS5vcHRpb25zLmNhcm91c2VsSWQpLmZyZWV6ZVNjcm9sbCh0cnVlKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBzb21lIHdpZHRoIHRvIHRoZSBuYXYgdG8gbWFrZSBzb21lIHJvb20gZm9yIHRoZSBzcGlubmVyXG4gICAgICAgICAgICAgICAgdm0ubmF2RWxlbS5jc3Moeyd3aWR0aCc6IHZtLm9wdGlvbnMud2lkdGhDYXJvdXNlbCArIDQ1ICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICRpb25pY1Njcm9sbERlbGVnYXRlLiRnZXRCeUhhbmRsZSh2bS5vcHRpb25zLmNhcm91c2VsSWQpLnJlc2l6ZSgpO1xuXG4gICAgICAgICAgICAgICAgdm0ub3B0aW9ucy5wdWxsUmVmcmVzaC5jYWxsQmFjaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbkVuZFJlZnJlc2goKSB7XG4gICAgICAgICAgICB2bS5vcHRpb25zLnB1bGxSZWZyZXNoLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgdm0ubmF2RWxlbS5jc3Moeyd3aWR0aCc6IHZtLm9wdGlvbnMud2lkdGhDYXJvdXNlbCArICdweCd9KTtcbiAgICAgICAgICAgICRpb25pY1Njcm9sbERlbGVnYXRlLiRnZXRCeUhhbmRsZSh2bS5vcHRpb25zLmNhcm91c2VsSWQpLnJlc2l6ZSgpO1xuXG4gICAgICAgICAgICAkaW9uaWNTY3JvbGxEZWxlZ2F0ZS4kZ2V0QnlIYW5kbGUodm0ub3B0aW9ucy5jYXJvdXNlbElkKS5mcmVlemVTY3JvbGwoZmFsc2UpO1xuICAgICAgICAgICAgdm0ucHVsbHJlZnJlc2hJbmRpY2F0b3IuY3NzKHsndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVgoMHB4KScsIGRpc3BsYXk6ICdibG9jayd9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pKCk7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTmFtZTogICAgICAgICAgbmcta25vYlxuICogRGVzY3JpcHRpb246ICAgQW5ndWxhci5qcyBLbm9iIGRpcmVjdGl2ZVxuICogVmVyc2lvbjogICAgICAgMC4xLjNcbiAqIEhvbWVwYWdlOiAgICAgIGh0dHBzOi8vcmFkbWllLmdpdGh1Yi5pby9uZy1rbm9iXG4gKiBMaWNlbmNlOiAgICAgICBNSVRcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXCJ1c2Ugc3RyaWN0XCI7IWZ1bmN0aW9uKCl7dmFyIHVpPXt9LEtub2I9ZnVuY3Rpb24oZWxlbWVudCx2YWx1ZSxvcHRpb25zKXt0aGlzLmVsZW1lbnQ9ZWxlbWVudCx0aGlzLnZhbHVlPXZhbHVlLHRoaXMub3B0aW9ucz1vcHRpb25zLHRoaXMuaW5EcmFnPSExfTtLbm9iLnByb3RvdHlwZS52YWx1ZVRvUmFkaWFucz1mdW5jdGlvbih2YWx1ZSx2YWx1ZUVuZCxhbmdsZUVuZCxhbmdsZVN0YXJ0LHZhbHVlU3RhcnQpe3JldHVybiB2YWx1ZUVuZD12YWx1ZUVuZHx8MTAwLHZhbHVlU3RhcnQ9dmFsdWVTdGFydHx8MCxhbmdsZUVuZD1hbmdsZUVuZHx8MzYwLGFuZ2xlU3RhcnQ9YW5nbGVTdGFydHx8MCxNYXRoLlBJLzE4MCooKHZhbHVlLXZhbHVlU3RhcnQpKihhbmdsZUVuZC1hbmdsZVN0YXJ0KS8odmFsdWVFbmQtdmFsdWVTdGFydCkrYW5nbGVTdGFydCl9LEtub2IucHJvdG90eXBlLnJhZGlhbnNUb1ZhbHVlPWZ1bmN0aW9uKHJhZGlhbnMsdmFsdWVFbmQsdmFsdWVTdGFydCxhbmdsZUVuZCxhbmdsZVN0YXJ0KXtyZXR1cm4gdmFsdWVFbmQ9dmFsdWVFbmR8fDEwMCx2YWx1ZVN0YXJ0PXZhbHVlU3RhcnR8fDAsYW5nbGVFbmQ9YW5nbGVFbmR8fDM2MCxhbmdsZVN0YXJ0PWFuZ2xlU3RhcnR8fDAsKDE4MC9NYXRoLlBJKnJhZGlhbnMtYW5nbGVTdGFydCkqKHZhbHVlRW5kLXZhbHVlU3RhcnQpLyhhbmdsZUVuZC1hbmdsZVN0YXJ0KSt2YWx1ZVN0YXJ0fSxLbm9iLnByb3RvdHlwZS5jcmVhdGVBcmM9ZnVuY3Rpb24oaW5uZXJSYWRpdXMsb3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxlbmRBbmdsZSxjb3JuZXJSYWRpdXMpe3ZhciBhcmM9ZDMuc3ZnLmFyYygpLmlubmVyUmFkaXVzKGlubmVyUmFkaXVzKS5vdXRlclJhZGl1cyhvdXRlclJhZGl1cykuc3RhcnRBbmdsZShzdGFydEFuZ2xlKS5lbmRBbmdsZShlbmRBbmdsZSkuY29ybmVyUmFkaXVzKGNvcm5lclJhZGl1cyk7cmV0dXJuIGFyY30sS25vYi5wcm90b3R5cGUuZHJhd0FyYz1mdW5jdGlvbihzdmcsYXJjLGxhYmVsLHN0eWxlLGNsaWNrLGRyYWcpe3ZhciBlbGVtPXN2Zy5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJpZFwiLGxhYmVsKS5hdHRyKFwiZFwiLGFyYykuc3R5bGUoc3R5bGUpLmF0dHIoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZShcIit0aGlzLm9wdGlvbnMuc2l6ZS8yK1wiLCBcIit0aGlzLm9wdGlvbnMuc2l6ZS8yK1wiKVwiKTtyZXR1cm4gdGhpcy5vcHRpb25zLnJlYWRPbmx5PT09ITEmJihjbGljayYmZWxlbS5vbihcImNsaWNrXCIsY2xpY2spLGRyYWcmJmVsZW0uY2FsbChkcmFnKSksZWxlbX0sS25vYi5wcm90b3R5cGUuY3JlYXRlQXJjcz1mdW5jdGlvbigpe3ZhciBvdXRlclJhZGl1cz1wYXJzZUludCh0aGlzLm9wdGlvbnMuc2l6ZS8yLDEwKSxzdGFydEFuZ2xlPXRoaXMudmFsdWVUb1JhZGlhbnModGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsMzYwKSxlbmRBbmdsZT10aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMub3B0aW9ucy5lbmRBbmdsZSwzNjApO3RoaXMub3B0aW9ucy5zY2FsZS5lbmFibGVkJiYob3V0ZXJSYWRpdXMtPXRoaXMub3B0aW9ucy5zY2FsZS53aWR0aCt0aGlzLm9wdGlvbnMuc2NhbGUuc3BhY2VXaWR0aCk7dmFyIGRpZmYsdHJhY2tJbm5lclJhZGl1cz1vdXRlclJhZGl1cy10aGlzLm9wdGlvbnMudHJhY2tXaWR0aCxjaGFuZ2VJbm5lclJhZGl1cz1vdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuYmFyV2lkdGgsdmFsdWVJbm5lclJhZGl1cz1vdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuYmFyV2lkdGgsaW50ZXJhY3RJbm5lclJhZGl1cz0xLHRyYWNrT3V0ZXJSYWRpdXM9b3V0ZXJSYWRpdXMsY2hhbmdlT3V0ZXJSYWRpdXM9b3V0ZXJSYWRpdXMsdmFsdWVPdXRlclJhZGl1cz1vdXRlclJhZGl1cyxpbnRlcmFjdE91dGVyUmFkaXVzPW91dGVyUmFkaXVzO3RoaXMub3B0aW9ucy5iYXJXaWR0aD50aGlzLm9wdGlvbnMudHJhY2tXaWR0aD8oZGlmZj0odGhpcy5vcHRpb25zLmJhcldpZHRoLXRoaXMub3B0aW9ucy50cmFja1dpZHRoKS8yLHRyYWNrSW5uZXJSYWRpdXMtPWRpZmYsdHJhY2tPdXRlclJhZGl1cy09ZGlmZik6dGhpcy5vcHRpb25zLmJhcldpZHRoPHRoaXMub3B0aW9ucy50cmFja1dpZHRoJiYoZGlmZj0odGhpcy5vcHRpb25zLnRyYWNrV2lkdGgtdGhpcy5vcHRpb25zLmJhcldpZHRoKS8yLGNoYW5nZU91dGVyUmFkaXVzLT1kaWZmLHZhbHVlT3V0ZXJSYWRpdXMtPWRpZmYsY2hhbmdlSW5uZXJSYWRpdXMtPWRpZmYsdmFsdWVJbm5lclJhZGl1cy09ZGlmZiksdGhpcy5vcHRpb25zLmJnQ29sb3ImJih0aGlzLmJnQXJjPXRoaXMuY3JlYXRlQXJjKDAsb3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxlbmRBbmdsZSkpLFwidHJvblwiPT09dGhpcy5vcHRpb25zLnNraW4udHlwZSYmKHRyYWNrT3V0ZXJSYWRpdXM9dHJhY2tPdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuc2tpbi53aWR0aC10aGlzLm9wdGlvbnMuc2tpbi5zcGFjZVdpZHRoLGNoYW5nZU91dGVyUmFkaXVzPWNoYW5nZU91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5za2luLndpZHRoLXRoaXMub3B0aW9ucy5za2luLnNwYWNlV2lkdGgsdmFsdWVPdXRlclJhZGl1cz12YWx1ZU91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5za2luLndpZHRoLXRoaXMub3B0aW9ucy5za2luLnNwYWNlV2lkdGgsaW50ZXJhY3RPdXRlclJhZGl1cz1pbnRlcmFjdE91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5za2luLndpZHRoLXRoaXMub3B0aW9ucy5za2luLnNwYWNlV2lkdGgsdGhpcy5ob29wQXJjPXRoaXMuY3JlYXRlQXJjKG91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5za2luLndpZHRoLG91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsZW5kQW5nbGUpKSx0aGlzLnRyYWNrQXJjPXRoaXMuY3JlYXRlQXJjKHRyYWNrSW5uZXJSYWRpdXMsdHJhY2tPdXRlclJhZGl1cyxzdGFydEFuZ2xlLGVuZEFuZ2xlKSx0aGlzLmNoYW5nZUFyYz10aGlzLmNyZWF0ZUFyYyhjaGFuZ2VJbm5lclJhZGl1cyxjaGFuZ2VPdXRlclJhZGl1cyxzdGFydEFuZ2xlLHN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLmJhckNhcCksdGhpcy52YWx1ZUFyYz10aGlzLmNyZWF0ZUFyYyh2YWx1ZUlubmVyUmFkaXVzLHZhbHVlT3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxzdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5iYXJDYXApLHRoaXMuaW50ZXJhY3RBcmM9dGhpcy5jcmVhdGVBcmMoaW50ZXJhY3RJbm5lclJhZGl1cyxpbnRlcmFjdE91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsZW5kQW5nbGUpfSxLbm9iLnByb3RvdHlwZS5kcmF3QXJjcz1mdW5jdGlvbihjbGlja0ludGVyYWN0aW9uLGRyYWdCZWhhdmlvcil7dmFyIHN2Zz1kMy5zZWxlY3QodGhpcy5lbGVtZW50KS5hcHBlbmQoXCJzdmdcIikuYXR0cihcIndpZHRoXCIsdGhpcy5vcHRpb25zLnNpemUpLmF0dHIoXCJoZWlnaHRcIix0aGlzLm9wdGlvbnMuc2l6ZSk7aWYodGhpcy5vcHRpb25zLmJnQ29sb3ImJnRoaXMuZHJhd0FyYyhzdmcsdGhpcy5iZ0FyYyxcImJnQXJjXCIse2ZpbGw6dGhpcy5vcHRpb25zLmJnQ29sb3J9KSx0aGlzLm9wdGlvbnMuZGlzcGxheUlucHV0KXt2YXIgZm9udFNpemU9LjIqdGhpcy5vcHRpb25zLnNpemUrXCJweFwiO1wiYXV0b1wiIT09dGhpcy5vcHRpb25zLmZvbnRTaXplJiYoZm9udFNpemU9dGhpcy5vcHRpb25zLmZvbnRTaXplK1wicHhcIiksdGhpcy5vcHRpb25zLnN0ZXA8MSYmKHRoaXMudmFsdWU9dGhpcy52YWx1ZS50b0ZpeGVkKDEpKTt2YXIgdj10aGlzLnZhbHVlO1wiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMub3B0aW9ucy5pbnB1dEZvcm1hdHRlciYmKHY9dGhpcy5vcHRpb25zLmlucHV0Rm9ybWF0dGVyKHYpKSxzdmcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwiaWRcIixcInRleHRcIikuYXR0cihcInRleHQtYW5jaG9yXCIsXCJtaWRkbGVcIikuYXR0cihcImZvbnQtc2l6ZVwiLGZvbnRTaXplKS5zdHlsZShcImZpbGxcIix0aGlzLm9wdGlvbnMudGV4dENvbG9yKS50ZXh0KHYrdGhpcy5vcHRpb25zLnVuaXR8fFwiXCIpLmF0dHIoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZShcIit0aGlzLm9wdGlvbnMuc2l6ZS8yK1wiLCBcIisodGhpcy5vcHRpb25zLnNpemUvMisuMDYqdGhpcy5vcHRpb25zLnNpemUpK1wiKVwiKSx0aGlzLm9wdGlvbnMuc3ViVGV4dC5lbmFibGVkJiYoZm9udFNpemU9LjA3KnRoaXMub3B0aW9ucy5zaXplK1wicHhcIixcImF1dG9cIiE9PXRoaXMub3B0aW9ucy5zdWJUZXh0LmZvbnQmJihmb250U2l6ZT10aGlzLm9wdGlvbnMuc3ViVGV4dC5mb250K1wicHhcIiksc3ZnLmFwcGVuZChcInRleHRcIikuYXR0cihcImNsYXNzXCIsXCJzdWItdGV4dFwiKS5hdHRyKFwidGV4dC1hbmNob3JcIixcIm1pZGRsZVwiKS5hdHRyKFwiZm9udC1zaXplXCIsZm9udFNpemUpLnN0eWxlKFwiZmlsbFwiLHRoaXMub3B0aW9ucy5zdWJUZXh0LmNvbG9yKS50ZXh0KHRoaXMub3B0aW9ucy5zdWJUZXh0LnRleHQpLmF0dHIoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZShcIit0aGlzLm9wdGlvbnMuc2l6ZS8yK1wiLCBcIisodGhpcy5vcHRpb25zLnNpemUvMisuMTUqdGhpcy5vcHRpb25zLnNpemUpK1wiKVwiKSl9aWYodGhpcy5vcHRpb25zLnNjYWxlLmVuYWJsZWQpe3ZhciByYWRpdXMscXVhbnRpdHksZGF0YSxjb3VudD0wLGFuZ2xlPTAsc3RhcnRSYWRpYW5zPXRoaXMudmFsdWVUb1JhZGlhbnModGhpcy5vcHRpb25zLm1pbix0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5lbmRBbmdsZSx0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMubWluKSxlbmRSYWRpYW5zPXRoaXMudmFsdWVUb1JhZGlhbnModGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5lbmRBbmdsZSx0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMubWluKSxkaWZmPTA7aWYoMD09PXRoaXMub3B0aW9ucy5zdGFydEFuZ2xlJiYzNjA9PT10aGlzLm9wdGlvbnMuZW5kQW5nbGV8fChkaWZmPTEpLFwiZG90c1wiPT09dGhpcy5vcHRpb25zLnNjYWxlLnR5cGUpe3ZhciB3aWR0aD10aGlzLm9wdGlvbnMuc2NhbGUud2lkdGg7cmFkaXVzPXRoaXMub3B0aW9ucy5zaXplLzItd2lkdGgscXVhbnRpdHk9dGhpcy5vcHRpb25zLnNjYWxlLnF1YW50aXR5O3ZhciBvZmZzZXQ9cmFkaXVzK3RoaXMub3B0aW9ucy5zY2FsZS53aWR0aDtkYXRhPWQzLnJhbmdlKHF1YW50aXR5KS5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gYW5nbGU9Y291bnQqKGVuZFJhZGlhbnMtc3RhcnRSYWRpYW5zKS1NYXRoLlBJLzIrc3RhcnRSYWRpYW5zLGNvdW50Kz0xLyhxdWFudGl0eS1kaWZmKSx7Y3g6b2Zmc2V0K01hdGguY29zKGFuZ2xlKSpyYWRpdXMsY3k6b2Zmc2V0K01hdGguc2luKGFuZ2xlKSpyYWRpdXMscjp3aWR0aH19KSxzdmcuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLmRhdGEoZGF0YSkuZW50ZXIoKS5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cih7cjpmdW5jdGlvbihkKXtyZXR1cm4gZC5yfSxjeDpmdW5jdGlvbihkKXtyZXR1cm4gZC5jeH0sY3k6ZnVuY3Rpb24oZCl7cmV0dXJuIGQuY3l9LGZpbGw6dGhpcy5vcHRpb25zLnNjYWxlLmNvbG9yfSl9ZWxzZSBpZihcImxpbmVzXCI9PT10aGlzLm9wdGlvbnMuc2NhbGUudHlwZSl7dmFyIGhlaWdodD10aGlzLm9wdGlvbnMuc2NhbGUuaGVpZ2h0O3JhZGl1cz10aGlzLm9wdGlvbnMuc2l6ZS8yLHF1YW50aXR5PXRoaXMub3B0aW9ucy5zY2FsZS5xdWFudGl0eSxkYXRhPWQzLnJhbmdlKHF1YW50aXR5KS5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gYW5nbGU9Y291bnQqKGVuZFJhZGlhbnMtc3RhcnRSYWRpYW5zKS1NYXRoLlBJLzIrc3RhcnRSYWRpYW5zLGNvdW50Kz0xLyhxdWFudGl0eS1kaWZmKSx7eDE6cmFkaXVzK01hdGguY29zKGFuZ2xlKSpyYWRpdXMseTE6cmFkaXVzK01hdGguc2luKGFuZ2xlKSpyYWRpdXMseDI6cmFkaXVzK01hdGguY29zKGFuZ2xlKSoocmFkaXVzLWhlaWdodCkseTI6cmFkaXVzK01hdGguc2luKGFuZ2xlKSoocmFkaXVzLWhlaWdodCl9fSksc3ZnLnNlbGVjdEFsbChcImxpbmVcIikuZGF0YShkYXRhKS5lbnRlcigpLmFwcGVuZChcImxpbmVcIikuYXR0cih7eDE6ZnVuY3Rpb24oZCl7cmV0dXJuIGQueDF9LHkxOmZ1bmN0aW9uKGQpe3JldHVybiBkLnkxfSx4MjpmdW5jdGlvbihkKXtyZXR1cm4gZC54Mn0seTI6ZnVuY3Rpb24oZCl7cmV0dXJuIGQueTJ9LFwic3Ryb2tlLXdpZHRoXCI6dGhpcy5vcHRpb25zLnNjYWxlLndpZHRoLHN0cm9rZTp0aGlzLm9wdGlvbnMuc2NhbGUuY29sb3J9KX19XCJ0cm9uXCI9PT10aGlzLm9wdGlvbnMuc2tpbi50eXBlJiZ0aGlzLmRyYXdBcmMoc3ZnLHRoaXMuaG9vcEFyYyxcImhvb3BBcmNcIix7ZmlsbDp0aGlzLm9wdGlvbnMuc2tpbi5jb2xvcn0pLHRoaXMuZHJhd0FyYyhzdmcsdGhpcy50cmFja0FyYyxcInRyYWNrQXJjXCIse2ZpbGw6dGhpcy5vcHRpb25zLnRyYWNrQ29sb3J9KSx0aGlzLm9wdGlvbnMuZGlzcGxheVByZXZpb3VzP3RoaXMuY2hhbmdlRWxlbT10aGlzLmRyYXdBcmMoc3ZnLHRoaXMuY2hhbmdlQXJjLFwiY2hhbmdlQXJjXCIse2ZpbGw6dGhpcy5vcHRpb25zLnByZXZCYXJDb2xvcn0pOnRoaXMuY2hhbmdlRWxlbT10aGlzLmRyYXdBcmMoc3ZnLHRoaXMuY2hhbmdlQXJjLFwiY2hhbmdlQXJjXCIse1wiZmlsbC1vcGFjaXR5XCI6MH0pLHRoaXMudmFsdWVFbGVtPXRoaXMuZHJhd0FyYyhzdmcsdGhpcy52YWx1ZUFyYyxcInZhbHVlQXJjXCIse2ZpbGw6dGhpcy5vcHRpb25zLmJhckNvbG9yfSk7dmFyIGN1cnNvcj1cInBvaW50ZXJcIjt0aGlzLm9wdGlvbnMucmVhZE9ubHkmJihjdXJzb3I9XCJkZWZhdWx0XCIpLHRoaXMuZHJhd0FyYyhzdmcsdGhpcy5pbnRlcmFjdEFyYyxcImludGVyYWN0QXJjXCIse1wiZmlsbC1vcGFjaXR5XCI6MCxjdXJzb3I6Y3Vyc29yfSxjbGlja0ludGVyYWN0aW9uLGRyYWdCZWhhdmlvcil9LEtub2IucHJvdG90eXBlLmRyYXc9ZnVuY3Rpb24odXBkYXRlKXtmdW5jdGlvbiBkcmFnSW50ZXJhY3Rpb24oKXt0aGF0LmluRHJhZz0hMDt2YXIgeD1kMy5ldmVudC54LXRoYXQub3B0aW9ucy5zaXplLzIseT1kMy5ldmVudC55LXRoYXQub3B0aW9ucy5zaXplLzI7aW50ZXJhY3Rpb24oeCx5LCExKX1mdW5jdGlvbiBjbGlja0ludGVyYWN0aW9uKCl7dGhhdC5pbkRyYWc9ITE7dmFyIGNvb3Jkcz1kMy5tb3VzZSh0aGlzLnBhcmVudE5vZGUpLHg9Y29vcmRzWzBdLXRoYXQub3B0aW9ucy5zaXplLzIseT1jb29yZHNbMV0tdGhhdC5vcHRpb25zLnNpemUvMjtpbnRlcmFjdGlvbih4LHksITApfWZ1bmN0aW9uIGludGVyYWN0aW9uKHgseSxpc0ZpbmFsKXt2YXIgcmFkaWFucyxkZWx0YSxhcmM9TWF0aC5hdGFuKHkveCkvKE1hdGguUEkvMTgwKTtpZih4Pj0wJiYwPj15fHx4Pj0wJiZ5Pj0wP2RlbHRhPTkwOihkZWx0YT0yNzAsdGhhdC5vcHRpb25zLnN0YXJ0QW5nbGU8MCYmKGRlbHRhPS05MCkpLHJhZGlhbnM9KGRlbHRhK2FyYykqKE1hdGguUEkvMTgwKSx0aGF0LnZhbHVlPXRoYXQucmFkaWFuc1RvVmFsdWUocmFkaWFucyx0aGF0Lm9wdGlvbnMubWF4LHRoYXQub3B0aW9ucy5taW4sdGhhdC5vcHRpb25zLmVuZEFuZ2xlLHRoYXQub3B0aW9ucy5zdGFydEFuZ2xlKSx0aGF0LnZhbHVlPj10aGF0Lm9wdGlvbnMubWluJiZ0aGF0LnZhbHVlPD10aGF0Lm9wdGlvbnMubWF4JiYodGhhdC52YWx1ZT1NYXRoLnJvdW5kKH5+KCh0aGF0LnZhbHVlPDA/LS41Oi41KSt0aGF0LnZhbHVlL3RoYXQub3B0aW9ucy5zdGVwKSp0aGF0Lm9wdGlvbnMuc3RlcCoxMDApLzEwMCx0aGF0Lm9wdGlvbnMuc3RlcDwxJiYodGhhdC52YWx1ZT10aGF0LnZhbHVlLnRvRml4ZWQoMSkpLHVwZGF0ZSh0aGF0LnZhbHVlKSx0aGF0LnZhbHVlQXJjLmVuZEFuZ2xlKHRoYXQudmFsdWVUb1JhZGlhbnModGhhdC52YWx1ZSx0aGF0Lm9wdGlvbnMubWF4LHRoYXQub3B0aW9ucy5lbmRBbmdsZSx0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZSx0aGF0Lm9wdGlvbnMubWluKSksdGhhdC52YWx1ZUVsZW0uYXR0cihcImRcIix0aGF0LnZhbHVlQXJjKSxpc0ZpbmFsJiYodGhhdC5jaGFuZ2VBcmMuZW5kQW5nbGUodGhhdC52YWx1ZVRvUmFkaWFucyh0aGF0LnZhbHVlLHRoYXQub3B0aW9ucy5tYXgsdGhhdC5vcHRpb25zLmVuZEFuZ2xlLHRoYXQub3B0aW9ucy5zdGFydEFuZ2xlLHRoYXQub3B0aW9ucy5taW4pKSx0aGF0LmNoYW5nZUVsZW0uYXR0cihcImRcIix0aGF0LmNoYW5nZUFyYykpLHRoYXQub3B0aW9ucy5kaXNwbGF5SW5wdXQpKXt2YXIgdj10aGF0LnZhbHVlO1wiZnVuY3Rpb25cIj09dHlwZW9mIHRoYXQub3B0aW9ucy5pbnB1dEZvcm1hdHRlciYmKHY9dGhhdC5vcHRpb25zLmlucHV0Rm9ybWF0dGVyKHYpKSxkMy5zZWxlY3QodGhhdC5lbGVtZW50KS5zZWxlY3QoXCIjdGV4dFwiKS50ZXh0KHYrdGhhdC5vcHRpb25zLnVuaXR8fFwiXCIpfX1kMy5zZWxlY3QodGhpcy5lbGVtZW50KS5zZWxlY3QoXCJzdmdcIikucmVtb3ZlKCk7dmFyIHRoYXQ9dGhpczt0aGF0LmNyZWF0ZUFyY3MoKTt2YXIgZHJhZ0JlaGF2aW9yPWQzLmJlaGF2aW9yLmRyYWcoKS5vbihcImRyYWdcIixkcmFnSW50ZXJhY3Rpb24pLm9uKFwiZHJhZ2VuZFwiLGNsaWNrSW50ZXJhY3Rpb24pO3RoYXQuZHJhd0FyY3MoY2xpY2tJbnRlcmFjdGlvbixkcmFnQmVoYXZpb3IpLHRoYXQub3B0aW9ucy5hbmltYXRlLmVuYWJsZWQ/dGhhdC52YWx1ZUVsZW0udHJhbnNpdGlvbigpLmVhc2UodGhhdC5vcHRpb25zLmFuaW1hdGUuZWFzZSkuZHVyYXRpb24odGhhdC5vcHRpb25zLmFuaW1hdGUuZHVyYXRpb24pLnR3ZWVuKFwiXCIsZnVuY3Rpb24oKXt2YXIgaT1kMy5pbnRlcnBvbGF0ZSh0aGF0LnZhbHVlVG9SYWRpYW5zKHRoYXQub3B0aW9ucy5zdGFydEFuZ2xlLDM2MCksdGhhdC52YWx1ZVRvUmFkaWFucyh0aGF0LnZhbHVlLHRoYXQub3B0aW9ucy5tYXgsdGhhdC5vcHRpb25zLmVuZEFuZ2xlLHRoYXQub3B0aW9ucy5zdGFydEFuZ2xlLHRoYXQub3B0aW9ucy5taW4pKTtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIHZhbD1pKHQpO3RoYXQudmFsdWVFbGVtLmF0dHIoXCJkXCIsdGhhdC52YWx1ZUFyYy5lbmRBbmdsZSh2YWwpKSx0aGF0LmNoYW5nZUVsZW0uYXR0cihcImRcIix0aGF0LmNoYW5nZUFyYy5lbmRBbmdsZSh2YWwpKX19KToodGhhdC5jaGFuZ2VBcmMuZW5kQW5nbGUodGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLnZhbHVlLHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLmVuZEFuZ2xlLHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5taW4pKSx0aGF0LmNoYW5nZUVsZW0uYXR0cihcImRcIix0aGF0LmNoYW5nZUFyYyksdGhhdC52YWx1ZUFyYy5lbmRBbmdsZSh0aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMudmFsdWUsdGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMuZW5kQW5nbGUsdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLm1pbikpLHRoYXQudmFsdWVFbGVtLmF0dHIoXCJkXCIsdGhhdC52YWx1ZUFyYykpfSxLbm9iLnByb3RvdHlwZS5zZXRWYWx1ZT1mdW5jdGlvbihuZXdWYWx1ZSl7aWYoIXRoaXMuaW5EcmFnJiZ0aGlzLnZhbHVlPj10aGlzLm9wdGlvbnMubWluJiZ0aGlzLnZhbHVlPD10aGlzLm9wdGlvbnMubWF4KXt2YXIgcmFkaWFucz10aGlzLnZhbHVlVG9SYWRpYW5zKG5ld1ZhbHVlLHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLmVuZEFuZ2xlLHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5taW4pO2lmKHRoaXMudmFsdWU9TWF0aC5yb3VuZCh+figoMD5uZXdWYWx1ZT8tLjU6LjUpK25ld1ZhbHVlL3RoaXMub3B0aW9ucy5zdGVwKSp0aGlzLm9wdGlvbnMuc3RlcCoxMDApLzEwMCx0aGlzLm9wdGlvbnMuc3RlcDwxJiYodGhpcy52YWx1ZT10aGlzLnZhbHVlLnRvRml4ZWQoMSkpLHRoaXMuY2hhbmdlQXJjLmVuZEFuZ2xlKHJhZGlhbnMpLGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpLnNlbGVjdChcIiNjaGFuZ2VBcmNcIikuYXR0cihcImRcIix0aGlzLmNoYW5nZUFyYyksdGhpcy52YWx1ZUFyYy5lbmRBbmdsZShyYWRpYW5zKSxkMy5zZWxlY3QodGhpcy5lbGVtZW50KS5zZWxlY3QoXCIjdmFsdWVBcmNcIikuYXR0cihcImRcIix0aGlzLnZhbHVlQXJjKSx0aGlzLm9wdGlvbnMuZGlzcGxheUlucHV0KXt2YXIgdj10aGlzLnZhbHVlO1wiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMub3B0aW9ucy5pbnB1dEZvcm1hdHRlciYmKHY9dGhpcy5vcHRpb25zLmlucHV0Rm9ybWF0dGVyKHYpKSxkMy5zZWxlY3QodGhpcy5lbGVtZW50KS5zZWxlY3QoXCIjdGV4dFwiKS50ZXh0KHYrdGhpcy5vcHRpb25zLnVuaXR8fFwiXCIpfX19LHVpLktub2I9S25vYix1aS5rbm9iRGlyZWN0aXZlPWZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHNjb3BlOnt2YWx1ZTpcIj1cIixvcHRpb25zOlwiPVwifSxsaW5rOmZ1bmN0aW9uKHNjb3BlLGVsZW1lbnQpe3Njb3BlLnZhbHVlPXNjb3BlLnZhbHVlfHwwO3ZhciBkZWZhdWx0T3B0aW9ucz17c2tpbjp7dHlwZTpcInNpbXBsZVwiLHdpZHRoOjEwLGNvbG9yOlwicmdiYSgyNTUsMCwwLC41KVwiLHNwYWNlV2lkdGg6NX0sYW5pbWF0ZTp7ZW5hYmxlZDohMCxkdXJhdGlvbjoxZTMsZWFzZTpcImJvdW5jZVwifSxzaXplOjIwMCxzdGFydEFuZ2xlOjAsZW5kQW5nbGU6MzYwLHVuaXQ6XCJcIixkaXNwbGF5SW5wdXQ6ITAsaW5wdXRGb3JtYXR0ZXI6ZnVuY3Rpb24odil7cmV0dXJuIHZ9LHJlYWRPbmx5OiExLHRyYWNrV2lkdGg6NTAsYmFyV2lkdGg6NTAsdHJhY2tDb2xvcjpcInJnYmEoMCwwLDAsMClcIixiYXJDb2xvcjpcInJnYmEoMjU1LDAsMCwuNSlcIixwcmV2QmFyQ29sb3I6XCJyZ2JhKDAsMCwwLDApXCIsdGV4dENvbG9yOlwiIzIyMlwiLGJhckNhcDowLGZvbnRTaXplOlwiYXV0b1wiLHN1YlRleHQ6e2VuYWJsZWQ6ITEsdGV4dDpcIlwiLGNvbG9yOlwiZ3JheVwiLGZvbnQ6XCJhdXRvXCJ9LGJnQ29sb3I6XCJcIixzY2FsZTp7ZW5hYmxlZDohMSx0eXBlOlwibGluZXNcIixjb2xvcjpcImdyYXlcIix3aWR0aDo0LHF1YW50aXR5OjIwLGhlaWdodDoxMCxzcGFjZVdpZHRoOjE1fSxzdGVwOjEsZGlzcGxheVByZXZpb3VzOiExLG1pbjowLG1heDoxMDAsZHluYW1pY09wdGlvbnM6ITF9O3Njb3BlLm9wdGlvbnM9YW5ndWxhci5tZXJnZShkZWZhdWx0T3B0aW9ucyxzY29wZS5vcHRpb25zKTt2YXIga25vYj1uZXcgdWkuS25vYihlbGVtZW50WzBdLHNjb3BlLnZhbHVlLHNjb3BlLm9wdGlvbnMpO2lmKHNjb3BlLiR3YXRjaChcInZhbHVlXCIsZnVuY3Rpb24obmV3VmFsdWUsb2xkVmFsdWUpe251bGw9PT1uZXdWYWx1ZSYmXCJ1bmRlZmluZWRcIj09dHlwZW9mIG5ld1ZhbHVlfHxcInVuZGVmaW5lZFwiPT10eXBlb2Ygb2xkVmFsdWV8fG5ld1ZhbHVlPT09b2xkVmFsdWV8fGtub2Iuc2V0VmFsdWUobmV3VmFsdWUpfSksc2NvcGUub3B0aW9ucy5keW5hbWljT3B0aW9ucyl7dmFyIGlzRmlyc3RXYXRjaE9uT3B0aW9ucz0hMDtzY29wZS4kd2F0Y2goXCJvcHRpb25zXCIsZnVuY3Rpb24oKXtpZihpc0ZpcnN0V2F0Y2hPbk9wdGlvbnMpaXNGaXJzdFdhdGNoT25PcHRpb25zPSExO2Vsc2V7dmFyIG5ld09wdGlvbnM9YW5ndWxhci5tZXJnZShkZWZhdWx0T3B0aW9ucyxzY29wZS5vcHRpb25zKTtrbm9iPW5ldyB1aS5Lbm9iKGVsZW1lbnRbMF0sc2NvcGUudmFsdWUsbmV3T3B0aW9ucyksZHJhd0tub2IoKX19LCEwKX12YXIgZHJhd0tub2I9ZnVuY3Rpb24oKXtrbm9iLmRyYXcoZnVuY3Rpb24odmFsdWUpe3Njb3BlLiRhcHBseShmdW5jdGlvbigpe3Njb3BlLnZhbHVlPXZhbHVlfSl9KX07ZHJhd0tub2IoKX19fSxhbmd1bGFyLm1vZHVsZShcInVpLmtub2JcIixbXSkuZGlyZWN0aXZlKFwidWlLbm9iXCIsdWkua25vYkRpcmVjdGl2ZSl9KCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBhbmd1bGFyIG1vZHVsZXNcbi8vIHJlcXVpcmUoJ2FuZ3VsYXItbW9kdWxlLXNhbml0aXplJyk7XG4vLyByZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xuXG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL19pbmRleCcpO1xucmVxdWlyZSgnLi9zZXJ2aWNlcy9faW5kZXgnKTtcbnJlcXVpcmUoJy4vbW9kZWxzL19pbmRleCcpO1xucmVxdWlyZSgnLi9kaXJlY3RpdmVzL19pbmRleCcpO1xuXG5yZXF1aXJlKCcuLi9ib3dlcl9jb21wb25lbnRzL25nLWtub2IvZGlzdC9uZy1rbm9iLm1pbicpO1xucmVxdWlyZSgnLi4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLWFuaW1hdGUvYW5ndWxhci1hbmltYXRlLm1pbicpO1xucmVxdWlyZSgnLi4vYm93ZXJfY29tcG9uZW50cy9pb25pYy1hZHZhbmNlZC1jYXJvdXNlbC9zcmMvYWR2YW5jZWQtY2Fyb3VzZWwnKTtcblxuXG5cbi8vIGNyZWF0ZSBhbmQgYm9vdHN0cmFwIGFwcGxpY2F0aW9uXG5hbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gIHZhciByZXF1aXJlcyA9IFtcbiAgICAnaW9uaWMnLFxuICAgICdhcHAuY29udHJvbGxlcnMnLFxuICAgICdhcHAuc2VydmljZXMnLFxuICAgICdhcHAubW9kZWxzJyxcbiAgICAnYXBwLmRpcmVjdGl2ZXMnLFxuICAgICd1aS5yb3V0ZXInLFxuICAgICd1aS5rbm9iJyxcbiAgICAnYUNhcm91c2VsJyxcbiAgICAnbmdBbmltYXRlJ1xuICAgIC8vICd0ZW1wbGF0ZXMnLFxuICAgIC8vICduZ1Nhbml0aXplJyxcbiAgXTtcblxuICAvLyBtb3VudCBvbiB3aW5kb3cgZm9yIHRlc3RpbmdcbiAgd2luZG93LmFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCByZXF1aXJlcyk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnN0YW50KCdBcHBTZXR0aW5ncycsIHJlcXVpcmUoJy4vY29uc3RhbnRzLmRldmVsb3BtZW50JykpO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb25maWcocmVxdWlyZSgnLi9vbl9jb25maWcnKSk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLnJ1bihyZXF1aXJlKCcuL29uX3J1bicpKTtcblxuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgYW5ndWxhci5ib290c3RyYXAoZG9jdW1lbnQsIFsnYXBwJ10pOyAgIFxuICB9LCAoMTAwMCkpO1xuICBcblxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQXBwU2V0dGluZ3MgPSB7XG4gIHlvY2FsQVBJOntcbiAgICBiYXNlOiAnaHR0cDovL3lvZW5kcG9pbnQ0LXdiYnMucmhjbG91ZC5jb20vYXBpL3YxL3lva2FsL2RhdGEvJ1xuICAgIC8vIGJhc2U6ICdodHRwOi8vbG9jYWxob3N0OjgxMDAvYXBpL3YxL3lva2FsL2RhdGEvJ1xuICB9LFxuXG4gIEdNQVBfREVGQVVMVDp7XG4gIFx0UkFESVVTOiA4MDAsXG4gIFx0Wk9PTTogICAxNCxcbiAgXHRUSEVNRTp7XG4gIFx0XHRsaWdodDpbe1wiZmVhdHVyZVR5cGVcIjpcInBvaVwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvZmZcIn1dfSx7XCJzdHlsZXJzXCI6W3tcInNhdHVyYXRpb25cIjotNzB9LHtcImxpZ2h0bmVzc1wiOjM3fSx7XCJnYW1tYVwiOjEuMTV9XX0se1wiZWxlbWVudFR5cGVcIjpcImxhYmVsc1wiLFwic3R5bGVyc1wiOlt7XCJnYW1tYVwiOjAuMjZ9LHtcInZpc2liaWxpdHlcIjpcIm9mZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkXCIsXCJzdHlsZXJzXCI6W3tcImxpZ2h0bmVzc1wiOjB9LHtcInNhdHVyYXRpb25cIjowfSx7XCJodWVcIjpcIiNmZmZmZmZcIn0se1wiZ2FtbWFcIjowfV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9mZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmFydGVyaWFsXCIsXCJlbGVtZW50VHlwZVwiOlwiZ2VvbWV0cnlcIixcInN0eWxlcnNcIjpbe1wibGlnaHRuZXNzXCI6MjB9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWQuaGlnaHdheVwiLFwiZWxlbWVudFR5cGVcIjpcImdlb21ldHJ5XCIsXCJzdHlsZXJzXCI6W3tcImxpZ2h0bmVzc1wiOjUwfSx7XCJzYXR1cmF0aW9uXCI6MH0se1wiaHVlXCI6XCIjZmZmZmZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcImFkbWluaXN0cmF0aXZlLnByb3ZpbmNlXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9uXCJ9LHtcImxpZ2h0bmVzc1wiOi01MH1dfSx7XCJmZWF0dXJlVHlwZVwiOlwiYWRtaW5pc3RyYXRpdmUucHJvdmluY2VcIixcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHMudGV4dC5zdHJva2VcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcImFkbWluaXN0cmF0aXZlLnByb3ZpbmNlXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLnRleHRcIixcInN0eWxlcnNcIjpbe1wibGlnaHRuZXNzXCI6MjB9XX1dXG4gIFx0fVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcFNldHRpbmdzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gQXBwQ3RybCgkbG9nLCAkcm9vdFNjb3BlLCAkc2NvcGUsICRpb25pY01vZGFsLCAkdGltZW91dCwgY29vcmRpbmF0ZXMsIEFwcFNldHRpbmdzKSB7XG5cbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0FwcEN0cmwnKTtcblxuICB2YXIgdm0gPSB0aGlzO1xuICAvLyBzZXQgY3VyZW50IHBvc2l0aW9uIHRvIHJvb3RTY29wZSB0byBtYWtlIGdsb2JhbGx5IGF2YWlsYWJsZSBcbiAgJHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb24gPSBjb29yZGluYXRlcztcbiAgY29uc29sZS5sb2coIGNvb3JkaW5hdGVzKTtcbiAgXG5cbiAgLy8gRm9ybSBkYXRhIGZvciB0aGUgbG9naW4gbW9kYWxcbiAgJHNjb3BlLmxvZ2luRGF0YSA9IHt9O1xuXG4gIC8vIENyZWF0ZSB0aGUgbG9naW4gbW9kYWwgdGhhdCB3ZSB3aWxsIHVzZSBsYXRlclxuICAkaW9uaWNNb2RhbC5mcm9tVGVtcGxhdGVVcmwoJ3RlbXBsYXRlcy9sb2dpbi5odG1sJywge1xuICAgIHNjb3BlOiAkc2NvcGVcbiAgfSkudGhlbihmdW5jdGlvbihtb2RhbCkge1xuICAgICRzY29wZS5tb2RhbCA9IG1vZGFsO1xuICB9KTtcblxuICAvLyBUcmlnZ2VyZWQgaW4gdGhlIGxvZ2luIG1vZGFsIHRvIGNsb3NlIGl0XG4gICRzY29wZS5jbG9zZUxvZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLm1vZGFsLmhpZGUoKTtcbiAgfTtcblxuICAvLyBPcGVuIHRoZSBsb2dpbiBtb2RhbFxuICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUubW9kYWwuc2hvdygpO1xuICB9O1xuXG4gIC8vIFBlcmZvcm0gdGhlIGxvZ2luIGFjdGlvbiB3aGVuIHRoZSB1c2VyIHN1Ym1pdHMgdGhlIGxvZ2luIGZvcm1cbiAgJHNjb3BlLmRvTG9naW4gPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnRG9pbmcgbG9naW4nLCAkc2NvcGUubG9naW5EYXRhKTtcblxuICAgIC8vIFNpbXVsYXRlIGEgbG9naW4gZGVsYXkuIFJlbW92ZSB0aGlzIGFuZCByZXBsYWNlIHdpdGggeW91ciBsb2dpblxuICAgIC8vIGNvZGUgaWYgdXNpbmcgYSBsb2dpbiBzeXN0ZW1cbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS5jbG9zZUxvZ2luKCk7XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgXG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBBcHBDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEJyb3dzZUN0cmwoJHNjb3BlLCAkcm9vdFNjb3BlLCAkcSwgJGh0dHAsICRsb2csICRmaWx0ZXIsICR0aW1lb3V0LCBMb2NhdGlvbnNTZXJ2aWNlLCAgJGlvbmljTG9hZGluZywgICRpb25pY1NsaWRlQm94RGVsZWdhdGUsIEFwcFNldHRpbmdzKSB7XG4gICAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0Jyb3dzZUN0cmwnKTtcblxuIFx0Ly8gVmlld01vZGVsXG4gIFx0dmFyIHZtID0gdGhpcztcbiAgICB2bS5yYWRpdXMgPSBBcHBTZXR0aW5ncy5HTUFQX1JBRElVUztcbiAgICAkc2NvcGUucmFkaXVzID0gQXBwU2V0dGluZ3MuR01BUF9SQURJVVM7XG4gICAgJHNjb3BlLkN1cnJlbnRDb29yZHMgPSAgJHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb247XG5cbiAgICAkc2NvcGUubG9jYXRpb25zID1bXTtcbiAgICAkc2NvcGUubG9jYXRpb25zX2dyb3VwcyA9W107XG4gICAgJHNjb3BlLmxvY2F0aW9uc19sb2FkZWQgPSAwOyBcbiAgICAkc2NvcGUuY2Fyb3VzZWxzID0gW107XG5cbiAgICAkaW9uaWNMb2FkaW5nLnNob3coe1xuICAgICAgICB0ZW1wbGF0ZTogXCJGaW5kaW5nIFJhZCBTcG90cyAuLi5cIixcbiAgICAgICAgYmFja2Ryb3A6IHRydWVcbiAgICB9KTtcblxuICAgICRzY29wZS5jYXJvdXNlbE9wdGlvbnMgPSB7XG4gICAgICAgIHRlbXBsYXRlICAgICAgOiAnLi4vdGVtcGxhdGVzL2xvY2F0aW9ucy1jYXJvdXNlbC5pdGVtLmh0bWwnLCAvLyB0ZW1wbGF0ZVVybCBpbiBjYXNlIHlvdSBkb24ndCBuZWVkIHRvIHBhc3MgYSBkaXJlY3RpdmUgYnV0IGp1c3QgYSBodG1sIHZpZXdcbiAgICAgICAgYWxpZ24gICAgICAgICA6ICdsZWZ0JywgLy8gYWxpZ25lbWVudCBvZiB0aGUgY2Fyb3VzZWxcbiAgICAgICAgc2VsZWN0Rmlyc3QgICA6IHRydWUsXG4gICAgICAgIGNlbnRlck9uU2VsZWN0OiBmYWxzZSwgLy8gY2VudGVyIGNhcm91c2VsIHdoZW4gYW4gaXRlbSBpcyBzZWxlY3RlZFxuICAgIH07XG5cbiAgICAkc2NvcGUub25TZWxlY3RDYXJvdXNlbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgdmFyIGNhdCA9ICRzY29wZS5nZXRfY2F0ZWdvcnlfc2x1ZyhpdGVtLmNhdGFnb3J5bGV2ZWwxKTtcbiAgICAgICAgJGxvZy5sb2coJ0Nhcm91c2VsICcrY2F0KycgaXRlbSBzZWxlY3RlZDp7bmFtZX0nLCBpdGVtKTtcbiAgICAgICAgJHNjb3BlLmNhcm91c2Vsc1tjYXRdLml0ZW1TZWxlY3RlZCA9IGl0ZW07XG4gICAgfTtcblxuICAgICRzY29wZS5yYW5kb0V4cGVuc2VXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkrMSk7ICBcbiAgICB9O1xuICAgIFxuICAgICRzY29wZS5nZXRfY2F0ZWdvcnlfc2x1ZyA9IGZ1bmN0aW9uIChjYXRfbmFtZSkge1xuICAgICAgICByZXR1cm4gY2F0X25hbWUuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24oY2F0KSB7IHJldHVybiBjYXQudG9Mb3dlckNhc2UoKS50cmltKCk7IH0pLmpvaW4oJy0nKTtcbiAgICB9XG5cbiAgICBMb2NhdGlvbnNTZXJ2aWNlLmFsbCgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubG9jYXRpb25zID0gZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ3JvdXAgbG9jYXRpb25zIGJ5IGNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgdHJhdmVsVGltZSBmb3IgZWFjaCBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGNhcm91c2VsT3B0aW9ucyBmb3IgZWFjaCBjYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvY2F0aW9uc19ncm91cHMgPSBfLmNoYWluKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdyb3VwQnkoXCJjYXRhZ29yeWxldmVsMVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obG9jYXRpb25zLCBjYXQsIGFycmF5KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zLm1hcChmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvY2F0aW9uc19sb2FkZWQrKzsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5X3NsdWc6ICRzY29wZS5nZXRfY2F0ZWdvcnlfc2x1ZyhjYXQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zOiBsb2NhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24oY2F0ZWdvcnlfb2JqKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5X29iajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCdsb2NhdGlvbnNfbG9hZGVkJyxmdW5jdGlvbihuZXdfdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV3X3ZhbCA9PSBkYXRhLmxlbmd0aCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc29ydCBsb2NhdGlvbiBncm91cHMgYWxwYWhiZXRpY2FsbHkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvcnQgZ3JvdXAgbG9jYXRpb25zIGJ5IHRyYXZlbFRpbWUudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvY2F0aW9uc19ncm91cHNfc29ydGVkID0gXy5jaGFpbigkc2NvcGUubG9jYXRpb25zX2dyb3VwcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc29ydGVkX2xvY2F0aW9ucyA9ICRmaWx0ZXIoJ29yZGVyQnknKShncm91cC5sb2NhdGlvbnMsICd0cmF2ZWxUaW1lLnZhbHVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXIuZXh0ZW5kKHt9LGdyb3VwLCB7bG9jYXRpb25zOnNvcnRlZF9sb2NhdGlvbnN9ICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnRCeSgnY2F0ZWdvcnknKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihjYXRlZ29yeV9vYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuY2Fyb3VzZWxzW2NhdGVnb3J5X29iai5jYXRlZ29yeV9zbHVnXSA9IGFuZ3VsYXIuZXh0ZW5kKHt9LCB7Y2Fyb3VzZWxJZDogJ2xvY2F0aW9ucy1jYXJvdXNlbC0nK2NhdGVnb3J5X29iai5jYXRlZ29yeV9zbHVnLCBpdGVtU2VsZWN0ZWQ6Xy5maXJzdChjYXRlZ29yeV9vYmoubG9jYXRpb25zKX0sICRzY29wZS5jYXJvdXNlbE9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYXRlZ29yeV9vYmo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpb25pY0xvYWRpbmcuaGlkZSgpOyAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgXHQgICAgICAgICAgICAgICAgfSk7XG5cblxuXG59O1xuXG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ0Jyb3dzZUN0cmwnLCBCcm93c2VDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIENvbm5lY3RDdHJsKCRsb2csICRyb290U2NvcGUsICRzY29wZSwgQXBwU2V0dGluZ3MpIHtcblxuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnQ29ubmVjdEN0cmwnKTtcblxuICB2YXIgdm0gPSB0aGlzO1xuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdDb25uZWN0Q3RybCcsIENvbm5lY3RDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIExvZ2luQ3RybCgkbG9nLCAkcm9vdFNjb3BlLCAkc2NvcGUsIEFwcFNldHRpbmdzKSB7XG5cbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0xvZ2luQ3RybCcpO1xuXG4gIHZhciB2bSA9IHRoaXM7XG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIExvZ2luQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBNYXBDdHJsKCRyb290U2NvcGUsICRzY29wZSwgJHRpbWVvdXQsICRsb2csICRpb25pY0xvYWRpbmcsIEFwcFNldHRpbmdzLCBHTWFwLCBMb2NhdGlvbnNTZXJ2aWNlLCAkaW9uaWNTbGlkZUJveERlbGVnYXRlKSB7XG5cbiAgICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZShcIk1hcEN0cmxcIik7XG5cbiBcdCAgLy8gVmlld01vZGVsXG4gIFx0dmFyIHZtID0gdGhpcztcbiAgICB2YXIgY3VycmVudENlbnRlciA9ICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uLmNvb3JkcztcblxuICAgIHZtLnRoaXNfcmFkaXVzID0gNTAwMDtcblxuICAgIHZtLmdtYXAgPSBuZXcgR01hcCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB6b29tOiAgIDEzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogdm0udGhpc19yYWRpdXMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBBcHBTZXR0aW5ncy5HTUFQX0RFRkFVTFQuVEhFTUUubGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICB9KTsgICAgXG5cblxuICAgIHZtLmdtYXAuaGVpZ2h0ID0gNTc1LFxuICAgIHZtLmdtYXAubG9jYXRpb25Gb2N1c2VkID0gZmFsc2U7XG4gICAgdm0uZ21hcC5tYXJrZXJzID0gW107XG4gICAgdm0uZ21hcC5yb3V0ZXMgPSBbXTsgIFxuICAgICAvLyBkcm9wIG1hcmtlciBvbiBjdXJyZW50IHBvc2l0aW9uXG4gICAgdm0uZ21hcC5kcm9wTWFya2VyKHtcbiAgICAgICAgICAgICAgbWFwOiAgICB2bS5nbWFwLm1hcCxcbiAgICAgICAgICAgICAgY2VudGVyOiB7bGF0OiBjdXJyZW50Q2VudGVyLmxhdGl0dWRlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgbG5nOiBjdXJyZW50Q2VudGVyLmxvbmdpdHVkZSB9LFxuICAgICAgICAgICAgICBvcGFjaXR5OjEsXG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICBcbiAgICB2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UgPSBbXTtcbiAgICB2bS5sb2NhdGlvbnNfY2F0ZWdvcmllcyA9IHtcbiAgICAgIGRpc3RhbmNlOiA4MCxcbiAgICAgIGN1cnJlbnQ6ICBudWxsLFxuICAgICAgbGlzdDogW1xuICAgICAgICAgICAgICB7bmFtZTogJ0FydHMnfSxcbiAgICAgICAgICAgICAge25hbWU6ICdEcmluayd9LFxuICAgICAgICAgICAgICB7bmFtZTogJ0Zvb2QnfVxuICAgICAgICAgICAgXVxuICAgIH07XG4gICAgXG5cblxuICAgIHZtLmtub2IgPXsgXG4gICAgICAgICAgICAgIG9wdGlvbnM6eyAgXG4gICAgICAgICAgICAgICAgZHluYW1pY09wdGlvbnM6IHRydWUgXG4gICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9O1xuXG4gICAgdm0uZGlzdGFuY2Vfa25vYiA9e1xuICAgICAgICAgICAgICBvcHRpb25zOntcbiAgICAgICAgICAgICAgICByZWFkT25seTogICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICBkeW5hbWljT3B0aW9uczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5SW5wdXQ6ICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gc2NhbGU6ICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgIGVuYWJsZWQ6ICB0cnVlLFxuICAgICAgICAgICAgICAgIC8vICAgdHlwZTogICAgICdsaW5lcycsXG4gICAgICAgICAgICAgICAgLy8gICBjb2xvcjogICAgJ2dyYXknLFxuICAgICAgICAgICAgICAgIC8vICAgd2lkdGg6ICAgIDEsXG4gICAgICAgICAgICAgICAgLy8gICBxdWFudGl0eTogMzAsXG4gICAgICAgICAgICAgICAgLy8gICBoZWlnaHQ6ICAgNSxcbiAgICAgICAgICAgICAgICAvLyAgIHNwYWNlV2lkdGg6IDVcbiAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgIHNpemU6ICAgICAgICAgMzAsXG4gICAgICAgICAgICAgICAgbWluOiAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIG1heDogICAgICAgICAgODAsLy9ob3VyIGFuZCBhIGhhbGZcbiAgICAgICAgICAgICAgICBzdGVwOiAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgYmFyQ29sb3I6ICAgICAnIzVCQzAxRScsXG4gICAgICAgICAgICAgICAgdHJhY2tDb2xvcjogICAnIzIxMjEyMScsXG4gICAgICAgICAgICAgICAgdHJhY2tXaWR0aDogICAzLFxuICAgICAgICAgICAgICAgIGJhcldpZHRoOiAgICAgNlxuICAgICAgICAgICAgICB9XG4gICAgfTtcblxuXG5cbiAgICB2bS5zbGlkZXIgPXtcbiAgICAgIHNob3duOiAgIGZhbHNlLFxuICAgICAgbWV0YTp7XG4gICAgICAgIGNhdGVnb3J5OiAgICAgJycsXG4gICAgICAgIHRyYXZlbFRpbWU6ICAgJycsXG4gICAgICAgIG5laWdoYm9yaG9vZDogJydcbiAgICAgIH0sXG4gICAgICBhY3RpdmVTbGlkZTp7fVxuICAgIH07XG5cbiAgICBcbiAgdm0uX21ldGVyc1Blck1pbiAgPSBmdW5jdGlvbiggZmFyKSB7XG4gICAgICAvLyBwYXJzZSB0aWVtIGZvciBlaXRoZXIgYSBkb3VibGUgZGlnaXQgbWludXRlIGZvcm1hdFxuICAgICAgLy8gb3IgdGhlIGZpcnN0IGRpZFxuICAgICAgdmFyIF90aW1lID0gZmFyLnRleHQubWF0Y2goLyhbMC05XVswLTldKXwoXFxkKS9nKTtcbiAgICAgIC8vIGlmIGhvdXJzIGNvbnZlcnQgdG8gbWluc1xuICAgICAgaWYoX3RpbWUubGVuZ3RoID09IDIpIHZhciBtaW5zID0gK190aW1lWzFdICsgKCtfdGltZVswXSo2MCk7XG4gICAgICB2YXIgX21pbnMgPSBtaW5zIHx8ICtfdGltZVswXTtcbiAgICAgIHZhciBfZGlzdGFuY2UgPSBmYXIudmFsdWU7IFxuICAgICAgXG4gICAgICByZXR1cm4gX2Rpc3RhbmNlL19taW5zO1xuICB9O1xuXG5cblxuICB2bS5sb2FkX2NhdGVnb3J5ID0gZnVuY3Rpb24oY2F0ZWdvcnkpIHtcbiAgICAgICRsb2cubG9nKCdsb2FkX2NhdGVnb3J5OiB7bmFtZX0nLGNhdGVnb3J5KTtcbiAgICAgIFxuICAgICAgdm0uZ21hcC5tYXAuc2V0T3B0aW9ucyh7c3R5bGVzOm51bGx9KTtcblxuICAgICAgJGlvbmljTG9hZGluZy5zaG93KHtcbiAgICAgICAgdGVtcGxhdGU6IFwiRXhwbG9yaW5nIFlvdXIgQXJlYSAuLi5cIixcbiAgICAgICAgYmFja2Ryb3A6IHRydWVcbiAgICAgIH0pO1xuXG5cbiAgICAgIC8vIGdldCBhbGwgbG9jYXRpb25zIGFyb3VuZCBzcGVjaWZpZWQgYXJlYVxuICAgICAgTG9jYXRpb25zU2VydmljZVxuICAgICAgICAuZ2V0KHtcbiAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgICAgIHJhZGl1czogICB2bS50aGlzX3JhZGl1cywgXG4gICAgICAgICAgICAgIGxhdDogICAgICBjdXJyZW50Q2VudGVyLmxhdGl0dWRlLCBcbiAgICAgICAgICAgICAgbG5nOiAgICAgIGN1cnJlbnRDZW50ZXIubG9uZ2l0dWRlXG4gICAgICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihsb2NhdGlvbnMpIHtcbiAgICAgICAgICB2bS5sb2NhdGlvbnNfY2F0ZWdvcmllcy5kaXN0YW5jZSA9IDA7XG4gICAgICAgICAgdm0ubG9jYXRpb25zX2xvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgICB2bS5sb2NhdGlvbnNfY2F0ZWdvcmllcy5jdXJyZW50ID0gY2F0ZWdvcnkubmFtZTtcblxuICAgICAgICAgIC8vIHNvcnQgbG9jYXRpb25zIGJ5IGRpc3RuYWNlIFxuICAgICAgICAgIHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZSA9IF8uc29ydEJ5KGxvY2F0aW9ucywgJ2Rpc3RhbmNlZnJvbWxvY2F0aW9uJyk7XG5cbiAgICAgICAgICAvLyBzZXQgYWxsIG1hcmtlcnMgb24gbWFwXG4gICAgICAgICAgc2V0TWFya2Vycyh2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UpOyAgXG5cbiAgICAgICAgICAvLyBzZXQgdGhlIGxvY2F0aW9ucyByYWRpdXMgYW5kIGtub2IgdmFsdWUgdG8gdGhlIGNsb3NlcyBsb2N0aW9uIHRvIHRlc3RcbiAgICAgICAgICB2bS50aGlzX3JhZGl1cyA9IF8uZmlyc3Qodm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlKS50cmF2ZWxUaW1lLnZhbHVlKzEwMDtcbiAgICAgICAgICB2bS5sb2NhdGlvbnNSYWRpdXMgPSB2bS5nbWFwLnNldFJhZGl1c0NpcmNsZSh7cmFkaXVzOiB2bS50aGlzX3JhZGl1c30pO1xuICAgICAgICAgIHZtLmdtYXAubWFwLmZpdEJvdW5kcyh2bS5sb2NhdGlvbnNSYWRpdXMuZ2V0Qm91bmRzKCkpO1xuXG5cbiAgICAgICAgICB2bS50cmF2ZWxSYXRlID0gdm0uX21ldGVyc1Blck1pbihfLmxhc3Qodm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlKS50cmF2ZWxUaW1lKTtcbiAgICAgICAgICB2bS5kaXN0YW5jZV9rbm9iLnZhbHVlID0gTWF0aC5jZWlsKHZtLnRoaXNfcmFkaXVzL3ZtLnRyYXZlbFJhdGUpO1xuICAgICAgICAgIFxuICAgICAgICAgIHNldEtub2JWYWx1ZSh2bS50aGlzX3JhZGl1cywgXy5maXJzdCh2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UpLnRyYXZlbFRpbWUudmFsdWUsIF8ubGFzdCh2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UpLnRyYXZlbFRpbWUudmFsdWUpO1xuICAgICAgICAgIHZtLmxvY2F0aW9uc19sb2FkZWQgPSB0cnVlO1xuICAgICAgICBcblxuICAgICAgICAgICRpb25pY0xvYWRpbmcuaGlkZSgpO1xuICAgICAgICAgICRpb25pY1NsaWRlQm94RGVsZWdhdGUudXBkYXRlKCk7XG4gICAgICAgIH0pOy8vZW5kIC50aGVuXG5cblxuICAgIH0vLy8vZW5kIHZtLmxvYWRfY2F0ZWdvcnlcblxuXG4gICAgJHNjb3BlLnNsaWRlSGFzQ2hhbmdlZCA9IGZ1bmN0aW9uKGluZHgpIHtcbiAgICAgICAgJGxvZy5sb2coXCJpb24tc2xpZGUtYm94OnNsaWRlSGFzQ2hhbmdlZDpcIitpbmR4KTtcbiAgICAgICAgXG4gICAgICAgIHZhciBzbGlkZXJfbG9jYXRpb24gPSB2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2VbaW5keF07XG4gICAgICAgIC8vc2V0IGFjdGl2ZSBzbGlkZVxuICAgICAgICB2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UubWFwKGZ1bmN0aW9uKGxvY2F0aW9uKSB7IGxvY2F0aW9uLmlzQWN0aXZlID0gZmFsc2U7IHJldHVybiBsb2NhdGlvbjt9KTtcbiAgICAgICAgc2xpZGVyX2xvY2F0aW9uLmlzQWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICBzaG93Um91dGVUbyhzbGlkZXJfbG9jYXRpb24pO1xuICAgICAgICBmaXRJbk1hcFZpZXcoc2xpZGVyX2xvY2F0aW9uKTtcbiAgICAgICAgdm0uc2xpZGVyID0ge1xuICAgICAgICAgIHNob3duOiAgICB0cnVlLFxuICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICBtZXRhOiAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICAgICBzbGlkZXJfbG9jYXRpb24uY2F0YWdvcnlsZXZlbDEsXG4gICAgICAgICAgICB0cmF2ZWxUaW1lOiAgIHNsaWRlcl9sb2NhdGlvbi50cmF2ZWxUaW1lLFxuICAgICAgICAgICAgbmVpZ2hib3Job29kOiBzbGlkZXJfbG9jYXRpb24ubmVpZ2hib3Job29kXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICB9Oy8vICAkc2NvcGUuc2xpZGVIYXNDaGFuZ2VkXG5cblxuICAgIFxuXG5cbiAgICBcbiAgICB2YXIgc2V0S25vYlZhbHVlID0gZnVuY3Rpb24odmFsLG1pbiwgbWF4KSB7XG4gICAgICAvLyBzZXQgdWkua25vYiBvcHRpb25zIGhlcmVcbiAgICAgIC8vIHRoaXMgdHJpY2tzIHRoZSBrbm9iIGludG8gdXBkYXRpbmcgdGhlIHZhbHVlIGNvcnJlY3RseVxuICAgICAgICAgIHZtLmtub2IgPXtcbiAgICAgICAgICAgICAgdmFsdWU6dmFsLFxuICAgICAgICAgICAgICBvcHRpb25zOntcbiAgICAgICAgICAgICAgICBkaXNwbGF5SW5wdXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgc3ViVGV4dDoge1xuICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICAgICdtZXRlciByYWRpdXMnLFxuICAgICAgICAgICAgICAgICAgY29sb3I6ICAgJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgIGZvbnQ6ICAgICdhdXRvJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2l6ZTogICAgICAgICAxMDAsXG4gICAgICAgICAgICAgICAgbWluOiAgICAgICAgICAxMDAsXG4gICAgICAgICAgICAgICAgbWF4OiAgICAgICAgICBtYXgsXG4gICAgICAgICAgICAgICAgc3RlcDogICAgICAgICAxLFxuICAgICAgICAgICAgICAgIGJhckNvbG9yOiAgICAgJyM1QkMwMUUnLFxuICAgICAgICAgICAgICAgIHRyYWNrQ29sb3I6ICAgJyMyMTIxMjEnLFxuICAgICAgICAgICAgICAgIHRyYWNrV2lkdGg6ICAgNSxcbiAgICAgICAgICAgICAgICBiYXJXaWR0aDogICAgIDIwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiB2bS5rbm9iO1xuICAgIH07XG5cbiAgICBcbiAgICB2YXIgc2hvd01hcmtlckZvciA9IGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAkbG9nLmxvZyhcInNob3dNYXJrZXJGb3I6e25hbWV9XCIsIGxvY2F0aW9uKTtcbiAgICAgIHZhciBzaG93bk1hcmtlciA9IHZtLmdtYXAubWFya2Vyc1tsb2NhdGlvbi5faWRdO1xuICAgICAgc2hvd25NYXJrZXIuc2V0T3BhY2l0eSgxKTtcbiAgICAgIHNob3duTWFya2VyLnNldENsaWNrYWJsZSh0cnVlKTtcbiAgICAgIHJldHVybiBzaG93bk1hcmtlcjsgXG4gICAgfS8vc2hvd01hcmtlckZvclxuXG5cbiAgICB2YXIgaGlkZU1hcmtlckZvciA9IGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAvLyAkbG9nLmxvZyhcImhpZGVNYXJrZXJGb3I6e25hbWV9XCIsIGxvY2F0aW9uKTtcbiAgICAgIHZhciBoaWRkZW5NYXJrZXIgPSB2bS5nbWFwLm1hcmtlcnNbbG9jYXRpb24uX2lkXTtcbiAgICAgIGhpZGRlbk1hcmtlci5zZXRPcGFjaXR5KDApO1xuICAgICAgaGlkZGVuTWFya2VyLnNldENsaWNrYWJsZShmYWxzZSk7XG4gICAgICByZXR1cm4gaGlkZGVuTWFya2VyO1xuICAgIH0vL2hpZGVNYXJrZXJGb3JcblxuXG4gICAgdmFyIHNldE1hcmtlcnMgPSBmdW5jdGlvbihsb2NhdGlvbnMpIHtcbiAgICAgIGxvY2F0aW9ucy5tYXAoZnVuY3Rpb24obG9jYXRlKXtcbiAgICAgICAgICAgIHZhciBtYXJrZXIgPSB2bS5nbWFwLmRyb3BNYXJrZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiBwYXJzZUZsb2F0KGxvY2F0ZS5sYXQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogcGFyc2VGbG9hdChsb2NhdGUubG9uZylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogICAgIGxvY2F0ZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwOiAgICAgICB2bS5nbWFwLm1hcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICRzY29wZS4kYnJvYWRjYXN0KCdtYXJrZXI6Y2xpY2tlZCcsIGxvY2F0ZSk7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZtLmdtYXAubWFya2Vyc1tsb2NhdGUuX2lkXSA9IG1hcmtlcjtcbiAgICBcbiAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdm0ubWFya2VycztcbiAgICB9Oy8vc2V0TWFya2Vyc1xuXG5cblxuICAgIHZhciBjbGVhckZyb21NYXAgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICRsb2cubG9nKCdjbGVhckZyb21NYXAnKTtcbiAgICAgIHJldHVybiBvYmouc2V0TWFwKG51bGwpO1xuICAgIH0vL2NsZWFyRnJvbU1hcFxuXG5cblxuICAgIHZhciBzaG93Um91dGVUbyA9IGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAkbG9nLmxvZygnc2hvd1JvdXRlVG87e25hbWV9JywgbG9jYXRpb24pO1xuICAgICAgLy8gY2xlYXIgYWxsIHJvdXRlc1xuICAgICAgdm0uZ21hcC5yb3V0ZXMubWFwKGNsZWFyRnJvbU1hcCk7XG4gICAgICB2bS5sb2NhdGlvbnNSYWRpdXMuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICB2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UubWFwKGhpZGVNYXJrZXJGb3IpO1xuXG4gICAgICB2YXIgbWFya2VyID0gc2hvd01hcmtlckZvcihsb2NhdGlvbik7XG5cbiAgICAgIHZhciByb3V0ZSA9IHZtLmdtYXAucGxvdFJvdXRlVG8obG9jYXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocm91dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5nbWFwLnJvdXRlcy5wdXNoKHJvdXRlKTsgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJHRpbWVvdXQoZnVuY3Rpb24oKSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgLy8gaWYodm0uZ21hcC5tYXAuem9vbSA8IDEzICl2bS5nbWFwLm1hcC5zZXRab29tKDEzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHZhciBtYXJrZXJQb3MgPSB2bS5nbWFwLmdldFBpeGVsUG9zaXRpb24obWFya2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHZhciBwb3NGcm9tVG9wID0gKHZtLmdtYXAuaGVpZ2h0IC0gbWFya2VyUG9zLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgdmFyIHBhblkgPSBwb3NGcm9tVG9wIC0gKHBvc0Zyb21Ub3AqMC41KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHZtLmdtYXAubWFwLnBhbkJ5KDAsIE1hdGguYWJzKHBhblkpICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSw0NTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9Ly8gc2hvd1JvdXRlVG9cbiAgICBcbiAgICAgICAgXG5cbiAgICB2YXIgZml0SW5NYXBWaWV3ID0gZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICAgIGlmKGxvY2F0aW9uKSB2bS5sb2NhdGlvbnNSYWRpdXMuc2V0UmFkaXVzKGxvY2F0aW9uLmRpc3RhbmNlZnJvbWxvY2F0aW9uKTtcbiAgICAgIC8vIEdldCB0aGUgYm91bmRzXG4gICAgICB2YXIgY2lyY2xlQm91bmRzID0gdm0ubG9jYXRpb25zUmFkaXVzLmdldEJvdW5kcygpO1xuICAgICAgdmFyIG1hcEJvdW5kcyA9IHZtLmdtYXAubWFwLmdldEJvdW5kcygpO1xuXG4gICAgICB2YXIgbmUgPSBjaXJjbGVCb3VuZHMuZ2V0Tm9ydGhFYXN0KCk7IC8vIExhdExuZyBvZiB0aGUgbm9ydGgtZWFzdCBjb3JuZXJcbiAgICAgIHZhciBzdyA9IGNpcmNsZUJvdW5kcy5nZXRTb3V0aFdlc3QoKTtcbiAgICAgIHZhciBudyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobmUubGF0KCksIHN3LmxuZygpKTtcbiAgICAgIHZhciBzZSA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoc3cubGF0KCksIG5lLmxuZygpKTtcbiAgICAgICAgICAgICAgXG4gICAgICB2YXIgTGF0TG5nTGlzdCA9IG5ldyBBcnJheSAobncsIHNlKTtcblxuICAgICAgICAgICAgICBcbiAgICAgIGlmKCFtYXBCb3VuZHMuY29udGFpbnMobmUpKXtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIEx0TGdMZW4gPSBMYXRMbmdMaXN0Lmxlbmd0aDsgaSA8IEx0TGdMZW47IGkrKykge1xuICAgICAgICAgIC8vICBBbmQgaW5jcmVhc2UgdGhlIGJvdW5kcyB0byB0YWtlIHRoaXMgcG9pbnRcbiAgICAgICAgICBtYXBCb3VuZHMuZXh0ZW5kKExhdExuZ0xpc3RbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHZtLmdtYXAubWFwLmZpdEJvdW5kcyhtYXBCb3VuZHMpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHZtLmdtYXAubWFwLmZpdEJvdW5kcyhjaXJjbGVCb3VuZHMpO1xuICAgICAgfVxuICAgIFxuICAgIH0vL2ZpdEluTWFwVmlld1xuICAgIFxuXG5cbiAgICBcblxuXG4gICAgXG5cblxuICAgICAgICAvLyB3YXRjaCBmb3IgdGhlIHVpIGtub2IgdmFsdWUgdG8gdXBkYXRlXG4gICAgICAgICAkc2NvcGUuJHdhdGNoKFwiTWFwLmtub2IudmFsdWVcIiwgZnVuY3Rpb24obmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcIm5ldyBNYXAua25vYi52YWx1ZTogXCIrbmV3VmFsdWUpO1xuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJvbGQgTWFwLmtub2IudmFsdWU6IFwiK29sZFZhbHVlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodm0ubG9jYXRpb25zUmFkaXVzKXtcbiAgICAgICAgICAgICAgdm0ubG9jYXRpb25zUmFkaXVzLnNldFJhZGl1cyhuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgIHZtLmxvY2F0aW9uc1JhZGl1cy5zZXRWaXNpYmxlKHRydWUpOyAgXG5cbiAgICAgICAgICAgICAgLy8gdXBkYXRlIGRpc3RhbmNlIGtub2JcbiAgICAgICAgICAgICAgdm0uZGlzdGFuY2Vfa25vYi52YWx1ZSA9IE1hdGguY2VpbChuZXdWYWx1ZS92bS50cmF2ZWxSYXRlKTtcbiAgICAgICAgICAgICAgdm0uZGlzdGFuY2Vfa25vYi5vcHRpb25zID0gdm0uZGlzdGFuY2Vfa25vYi5vcHRpb25zO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZtLmdtYXAuaGVpZ2h0ID0gNTc1O1xuICAgICAgICAgICAgdm0uZ21hcC5sb2NhdGlvbkZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHZtLmdtYXAucm91dGVzLm1hcChjbGVhckZyb21NYXApO1xuICAgICAgICAgICAgaWYodm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlLmxlbmd0aCkgdm0uZ21hcC5tYXAuc2V0T3B0aW9ucyh7c3R5bGVzOiBudWxsfSk7XG5cbiAgICAgICAgICAgIHZtLnNsaWRlci5zaG93biA9IGZhbHNlO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmKHZtLmxvY2F0aW9uc1JhZGl1cykgZml0SW5NYXBWaWV3KCk7XG5cbiAgICAgICAgICAgIC8vIHNob3cvcmV2ZWFsIGxvY2F0aW9ucyBpbnNpZGUgcmFkaXVzXG4gICAgICAgICAgICB2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UubWFwKGZ1bmN0aW9uKGxvY2F0ZSl7XG4gICAgICAgICAgICAgICAgICBpZiggbG9jYXRlLmRpc3RhbmNlZnJvbWxvY2F0aW9uIDwgbmV3VmFsdWUgKXtcbiAgICAgICAgICAgICAgICAgICAgc2hvd01hcmtlckZvcihsb2NhdGUpO1xuICAgICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBoaWRlTWFya2VyRm9yKGxvY2F0ZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTsvL3ZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZS5tYXBcblxuXG4gICAgICAgIH0pOy8vLyRzY29wZS4kd2F0Y2ggXCJNYXAua25vYi52YWx1ZVwiXG5cblxuXG5cbiAgICAgICRzY29wZS4kb24oXCJtYXJrZXI6Y2xpY2tlZFwiLCBmdW5jdGlvbihlLCBtYXJrZXIpIHtcbiAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgXG4gICAgICAgICAgJGxvZy5sb2coXCJtYXJrZXI6Y2xpY2tlZCAtIHtuYW1lfVwiLCBtYXJrZXIpO1xuICAgICAgICBcbiAgICAgICAgICB2bS5nbWFwLm1hcC5zZXRPcHRpb25zKHtzdHlsZXM6IEFwcFNldHRpbmdzLkdNQVBfREVGQVVMVC5USEVNRS5saWdodH0pO1xuXG4gICAgICAgICAgdm0uZ21hcC5sb2NhdGlvbkZvY3VzZWQgPSB0cnVlO1xuICAgICAgICAgIHZtLmdtYXAuaGVpZ2h0ID0gMzUwO1xuICAgICAgICAgIHZtLnNsaWRlciA9IHtcbiAgICAgICAgICAgIHNob3duOiB0cnVlLFxuICAgICAgICAgICAgbWV0YTp7XG4gICAgICAgICAgICAgIGNhdGVnb3J5OiAgICAgbWFya2VyLmNhdGFnb3J5bGV2ZWwxLFxuICAgICAgICAgICAgICB0cmF2ZWxUaW1lOiAgIG1hcmtlci50cmF2ZWxUaW1lLFxuICAgICAgICAgICAgICBuZWlnaGJvcmhvb2Q6IG1hcmtlci5uZWlnaGJvcmhvb2RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgJGlvbmljU2xpZGVCb3hEZWxlZ2F0ZS5zbGlkZShfLmluZGV4T2Yodm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlLCBtYXJrZXIpKTtcblxuICAgICAgICAgIHNob3dSb3V0ZVRvKG1hcmtlcik7XG4gICAgICAgICAgZml0SW5NYXBWaWV3KCk7XG5cbiAgICAgIH0pO1xuICAgIH0pOy8vICRzY29wZS4kb24gXCJtYXJrZXI6Y2xpY2tlZFwiXG4gICAgICBcblxuXG59Oy8vLy8gTWFwQ3RybFxuXG5cblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignTWFwQ3RybCcsIE1hcEN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbnRyb2xsZXJzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmRpcmVjdGl2ZXMnLCBbXSk7XG5cbmJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqX2luZGV4fCouc3BlYykuanMnXSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGlyZWN0aXZlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIG1BcHBMb2FkaW5nKCRsb2csICRhbmltYXRlKXtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoIFwibUFwcExvYWRpbmdcIiApO1xuICBcblxuICAvLyBSdW5zIGR1cmluZyBjb21waWxlXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICAgICdDJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cmlidXRlcywgY29udHJvbGxlciwgdHJhbnNjbHVkZUZuKSB7XG4gICAgICRhbmltYXRlLmxlYXZlKCBcbiAgICAgXHRlbGVtZW50LmNoaWxkcmVuKCkuZXEoIDEgKVxuICAgICBcdCkudGhlbihcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsZWFudXBBZnRlckFuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIFx0JGxvZy5sb2coJ2NsZWFudXBBZnRlckFuaW1hdGlvbicpO1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcm9vdCBkaXJlY3RpdmUgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIC8vIENsZWFyIHRoZSBjbG9zZWQtb3ZlciB2YXJpYWJsZSByZWZlcmVuY2VzLlxuICAgICAgICAgICAgICAgIHNjb3BlID0gZWxlbWVudCA9IGF0dHJpYnV0ZXMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgfVxuICB9XG5cblxufTtcblxuXG5kaXJlY3RpdmVzTW9kdWxlLmRpcmVjdGl2ZSgnbUFwcExvYWRpbmcnLCBtQXBwTG9hZGluZyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbW9kZWxzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiovXG5cbm1vZGVsc01vZHVsZS5mYWN0b3J5KCdHTWFwJywgZnVuY3Rpb24oJGxvZywgJHJvb3RTY29wZSwgJHEsIExvY2F0aW9uc1NlcnZpY2UsIEFwcFNldHRpbmdzKXtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0dNYXAnKTtcblxuICB2YXIgY3VycmVudENlbnRlciA9ICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uLmNvb3JkcztcblxuXG5cbiAgZnVuY3Rpb24gR01hcChtYXBTZXR0aW5ncyl7XG4gICAgXG4gICAgdGhpcy5tYXBPcHRpb25zID0ge1xuICAgICAgY2VudGVyOiAgICB7bGF0OiBjdXJyZW50Q2VudGVyLmxhdGl0dWRlLCBcbiAgICAgICAgICAgICAgICAgIGxuZzogY3VycmVudENlbnRlci5sb25naXR1ZGV9LFxuICAgICAgem9vbTogICAgICBBcHBTZXR0aW5ncy5HTUFQX0RFRkFVTFQuWk9PTSxcbiAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsXG4gICAgICByYWRpdXM6ICAgIEFwcFNldHRpbmdzLkdNQVBfREVGQVVMVC5SQURJVVMsXG4gICAgfTtcblxuICAgIGFuZ3VsYXIuZXh0ZW5kKHRoaXMubWFwT3B0aW9ucywgbWFwU2V0dGluZ3MpO1xuICAgIFxuICAgICRsb2cuZGVidWcoJ3pvb20ge21hcE9wdGlvbnMuem9vbX0nLCB0aGlzKTtcbiAgICBcbiAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYXBcIiksIHRoaXMubWFwT3B0aW9ucyk7XG4gICAgXG4gfTsvL0dNYXAgY29uc3RydWN0b3JcblxuXG5cblxuICBHTWFwLnByb3RvdHlwZSA9e1xuXG4gICAgZHJvcE1hcmtlcjogZnVuY3Rpb24obWFya2VyRGF0YSkge1xuICAgICAgdmFyIF9tYXJrZXJTZXR0aW5ncyA9IHt9O1xuICAgICAgYW5ndWxhci5leHRlbmQoX21hcmtlclNldHRpbmdzLCB0aGlzLm1hcE9wdGlvbnMsIG1hcmtlckRhdGEpO1xuICAgICAgJGxvZy5kZWJ1ZygnZHJvcE1hcmtlciBmb3IgXCJ7dGl0bGV9XCJcIiBhdCBcIntjZW50ZXIubGF0fSwge2NlbnRlci5sbmd9XCInLCBfbWFya2VyU2V0dGluZ3MpO1xuXG4gICAgICB2YXIgX21hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgcG9zaXRpb246ICBfbWFya2VyU2V0dGluZ3MuY2VudGVyLFxuICAgICAgICAgICAgbWFwOiAgICAgICBfbWFya2VyU2V0dGluZ3MubWFwLFxuICAgICAgICAgICAgdGl0bGU6ICAgICBfbWFya2VyU2V0dGluZ3MudGl0bGUsXG4gICAgICAgICAgICBvcGFjaXR5OiAgIF9tYXJrZXJTZXR0aW5ncy5vcGFjaXR5LFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUFxuICAgICAgfSk7XG5cbiAgICAgICBcbiAgICAgIHJldHVybiBfbWFya2VyO1xuICAgIH0sXG5cblxuICAgIGJ1aWxkSW5mb1dpbmRvdzogZnVuY3Rpb24obG9jYXRpb25JbmZvLCBsb2NhdGlvbk1hcmtlcikge1xuICAgICAgdmFyIF9tYXAgPSB0aGlzO1xuXG4gICAgICAkbG9nLmRlYnVnKCdidWlsZEluZm9XaW5kb3cgZm9yIHtuYW1lfScsIGxvY2F0aW9uSW5mbyk7XG4gICAgICB2YXIgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJzxoMyBpZD1cImZpcnN0SGVhZGluZ1wiIGNsYXNzPVwiZmlyc3RIZWFkaW5nXCI+Jytsb2NhdGlvbkluZm8ubmFtZSsnPC9oMz4nK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHA+Jytsb2NhdGlvbkluZm8udHJhdmVsVGltZS50ZXh0Kycgd2FsazwvcD4nK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNtYWxsPicrbG9jYXRpb25JbmZvLmRpc3RhbmNlZnJvbWxvY2F0aW9uKyc8L3NtYWxsPidcbiAgICAgIH0pO1xuXG4gICAgICAvLyBsb2NhdGlvbk1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIC8vICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdtYXJrZXI6Y2xpY2tlZCcsIGxvY2F0aW9uSW5mbyApO1xuICAgICAgLy8gICBpbmZvd2luZG93Lm9wZW4oIF9tYXAubWFwICxsb2NhdGlvbk1hcmtlcik7XG4gICAgICAvLyB9KTtcblxuICAgICAgcmV0dXJuIGluZm93aW5kb3c7XG4gICAgfSxcblxuXG4gICAgZ2V0UGl4ZWxQb3NpdGlvbjogZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICB2YXIgX21hcCA9IHRoaXMubWFwO1xuICAgICAgICB2YXIgc2NhbGUgPSBNYXRoLnBvdygyLCBfbWFwLmdldFpvb20oKSk7XG4gICAgICAgIHZhciBudyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoXG4gICAgICAgICAgICBfbWFwLmdldEJvdW5kcygpLmdldE5vcnRoRWFzdCgpLmxhdCgpLFxuICAgICAgICAgICAgX21hcC5nZXRCb3VuZHMoKS5nZXRTb3V0aFdlc3QoKS5sbmcoKVxuICAgICAgICApO1xuICAgICAgICB2YXIgd29ybGRDb29yZGluYXRlTlcgPSBfbWFwLmdldFByb2plY3Rpb24oKS5mcm9tTGF0TG5nVG9Qb2ludChudyk7XG4gICAgICAgIHZhciB3b3JsZENvb3JkaW5hdGUgPSBfbWFwLmdldFByb2plY3Rpb24oKS5mcm9tTGF0TG5nVG9Qb2ludChtYXJrZXIuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIHZhciBwaXhlbE9mZnNldCA9IG5ldyBnb29nbGUubWFwcy5Qb2ludChcbiAgICAgICAgICAgIE1hdGguZmxvb3IoKHdvcmxkQ29vcmRpbmF0ZS54IC0gd29ybGRDb29yZGluYXRlTlcueCkgKiBzY2FsZSksXG4gICAgICAgICAgICBNYXRoLmZsb29yKCh3b3JsZENvb3JkaW5hdGUueSAtIHdvcmxkQ29vcmRpbmF0ZU5XLnkpICogc2NhbGUpXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHBpeGVsT2Zmc2V0O1xuICAgIH0sXG5cbiAgICBwbG90Um91dGVUbzogZnVuY3Rpb24obG9jYXRpb24pe1xuICAgICAgJGxvZy5kZWJ1ZygncGxvdFJvdXRlVG8ge25hbWV9Jyxsb2NhdGlvbik7XG4gICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgdmFyIF9tYXAgPSB0aGlzO1xuICAgICAgdmFyIF9yb3V0ZVNldHRpbmdzID0ge1xuICAgICAgICAgICAgZHJhZ2dhYmxlOiAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBzdXBwcmVzc0luZm9XaW5kb3dzOiB0cnVlLFxuICAgICAgICAgICAgc3VwcHJlc3NNYXJrZXJzOiAgICAgdHJ1ZSxcbiAgICAgICAgICAgIG9yaWdpbjogICAgICAgICAgICAgIF9tYXAubWFwT3B0aW9ucy5jZW50ZXJcbiAgICAgIH07XG5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKF9yb3V0ZVNldHRpbmdzLCB0aGlzLm1hcE9wdGlvbnMpO1xuXG4gICAgICB2YXIgZGlyZWN0aW9uc0Rpc3BsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyKHtcbiAgICAgICAgICAgIG1hcDogICAgICAgICAgICAgICAgIF9tYXAubWFwLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiAgICAgICAgICAgX3JvdXRlU2V0dGluZ3MuZHJhZ2dhYmxlLFxuICAgICAgICAgICAgc3VwcHJlc3NJbmZvV2luZG93czogX3JvdXRlU2V0dGluZ3Muc3VwcHJlc3NJbmZvV2luZG93cyxcbiAgICAgICAgICAgIHN1cHByZXNzTWFya2VyczogICAgIF9yb3V0ZVNldHRpbmdzLnN1cHByZXNzTWFya2VycyxcbiAgICAgICAgICAgIC8vIHByZXNlcnZlVmlld3BvcnQ6IHRydWVcbiAgICAgICAgICB9KSxcblxuICAgICAgICAgIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbjoge2xhdDogcGFyc2VGbG9hdChsb2NhdGlvbi5sYXQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiBwYXJzZUZsb2F0KGxvY2F0aW9uLmxvbmcpfSxcbiAgICAgICAgICAgIG9yaWdpbjogICAgICBfcm91dGVTZXR0aW5ncy5vcmlnaW4sXG4gICAgICAgICAgICB0cmF2ZWxNb2RlOiAgZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5XQUxLSU5HLFxuICAgICAgICAgICAgcHJvdmlkZVJvdXRlQWx0ZXJuYXRpdmVzOiBmYWxzZSxcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGlyZWN0aW9uc1NlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTsvLyBQYXNzIHRoZSBkaXJlY3Rpb25zIHJlcXVlc3QgdG8gdGhlIGRpcmVjdGlvbnMgc2VydmljZS5cblxuXG4gICAgICAgICAgZGlyZWN0aW9uc1NlcnZpY2Uucm91dGUocmVxdWVzdCwgZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTdGF0dXMuT0spIHtcbiAgICAgICAgICAgICAgLy8gRGlzcGxheSB0aGUgcm91dGUgb24gdGhlIG1hcC5cbiAgICAgICAgICAgICAgcmVzcG9uc2UucmVuZGVyZXIgPSBkaXJlY3Rpb25zRGlzcGxheTtcbiAgICAgICAgICAgICAgZGlyZWN0aW9uc0Rpc3BsYXkuc2V0RGlyZWN0aW9ucyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGlyZWN0aW9uc0Rpc3BsYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pOy8vL2RpcmVjdGlvc1NlcnZpY2Uucm91dGVcblxuICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuXG5cbiAgICB9LFxuXG4gICAgc2V0UmFkaXVzQ2lyY2xlOiBmdW5jdGlvbihyYWRpdXNDaXJjbGVTZXR0aW5ncykge1xuICAgICAgdmFyIF9tYXAgPSB0aGlzO1xuICAgICAgdmFyIF9jaXJjbGVTZXR0aW5ncyA9e1xuICAgICAgICAgICAgICBzdHJva2VDb2xvcjogICAnIzAwODRiNCcsXG4gICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IDAuOCxcbiAgICAgICAgICAgICAgc3Ryb2tlV2VpZ2h0OiAgMSxcbiAgICAgICAgICAgICAgZmlsbENvbG9yOiAgICAgJyMwMDg0YjQnLFxuICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogICAwLjA2MjUsXG4gICAgICB9O1xuXG4gICAgICBhbmd1bGFyLmV4dGVuZChfY2lyY2xlU2V0dGluZ3MgLHRoaXMubWFwT3B0aW9ucywgcmFkaXVzQ2lyY2xlU2V0dGluZ3MpO1xuXG4gICAgICB2YXIgbG9jYXRpb25zQ2lyY2xlID0gbmV3IGdvb2dsZS5tYXBzLkNpcmNsZSh7XG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6ICAgX2NpcmNsZVNldHRpbmdzLnN0cm9rZUNvbG9yLFxuICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IF9jaXJjbGVTZXR0aW5ncy5zdHJva2VPcGFjaXR5LFxuICAgICAgICAgICAgICAgIHN0cm9rZVdlaWdodDogIF9jaXJjbGVTZXR0aW5ncy5zdHJva2VXZWlnaHQsXG4gICAgICAgICAgICAgICAgZmlsbENvbG9yOiAgICAgX2NpcmNsZVNldHRpbmdzLmZpbGxDb2xvcixcbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogICBfY2lyY2xlU2V0dGluZ3MuZmlsbE9wYWNpdHksXG4gICAgICAgICAgICAgICAgbWFwOiAgICAgICAgICAgX21hcC5tYXAsXG4gICAgICAgICAgICAgICAgY2VudGVyOiAgICAgICAgX2NpcmNsZVNldHRpbmdzLmNlbnRlcixcbiAgICAgICAgICAgICAgICByYWRpdXM6ICAgICAgICBfY2lyY2xlU2V0dGluZ3MucmFkaXVzXG4gICAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBsb2NhdGlvbnNDaXJjbGU7XG4gICAgfVxuXG4gIH07XG4gICAgXG5cblxuICByZXR1cm4gR01hcDtcblxuICBcbn0pO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBtb2RlbHNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5tb2RlbHNNb2R1bGUuZmFjdG9yeSgnTG9jYXRpb24nLCBmdW5jdGlvbigkcm9vdFNjb3BlLCAkbG9nLCAkcSApIHtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0xvY2F0aW9uJyk7XG5cbiAgZnVuY3Rpb24gTG9jYXRpb24oTG9jYXRpb25EYXRhKXtcbiAgICBhbmd1bGFyLmV4dGVuZCh0aGlzLCBMb2NhdGlvbkRhdGEpO1xuICAgICRsb2cuZGVidWcoJ3tuYW1lfScsIHRoaXMpO1xuICB9XG5cblxuICBMb2NhdGlvbi5yZXNwb25zZVRyYW5zZm9ybWVyID0gZnVuY3Rpb24gKHJlc3BvbnNlRGF0YSkge1xuICAgICRsb2cuZGVidWcoJ3Jlc29wb25zZVRyYW5zZm9ybWVyIHtsZW5ndGh9JywgcmVzcG9uc2VEYXRhLmxvY2F0aW9ucyk7XG4gICAgXG4gICAgaWYocmVzcG9uc2VEYXRhLmxvY2F0aW9ucyl7XG4gICAgICBcbiAgICAgIHZhciBwb3B1bGF0ZWRfbG9jYXRpb25zID0gW107XG5cbiAgICAgIHJlc3BvbnNlRGF0YS5sb2NhdGlvbnNcbiAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBuZXcgTG9jYXRpb24oZGF0YSk7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVkX2xvY2F0aW9ucy5wdXNoKGxvY2F0aW9uLnNldFRyYXZlbFRpbWUoKSk7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwb3B1bGF0ZWRfbG9jYXRpb25zO1xuICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YS5tYXAoTG9jYXRpb24uYnVpbGQpOyAgXG5cbiAgICBcbiAgfVxuXG5cbiAgTG9jYXRpb24ucHJvdG90eXBlLnNldFRyYXZlbFRpbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICRsb2cuZGVidWcoJ3NldFRyYXZlbFRpbWUge25hbWV9JywgdGhpcyk7XG4gICAgICBcbiAgICAgIHZhciBfbG9jYXRpb24gPSB0aGlzO1xuICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICAgdmFyIHNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlzdGFuY2VNYXRyaXhTZXJ2aWNlO1xuICAgICAgIHNlcnZpY2UuZ2V0RGlzdGFuY2VNYXRyaXgoe1xuICAgICAgICAgb3JpZ2luczogICAgICAgW3tsYXQ6ICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSwgbG5nOiRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGV9XSxcbiAgICAgICAgIGRlc3RpbmF0aW9uczogIFt7bGF0OiBwYXJzZUZsb2F0KHRoaXMubGF0KSwgbG5nOiBwYXJzZUZsb2F0KHRoaXMubG9uZyl9XSxcbiAgICAgICAgIHRyYXZlbE1vZGU6ICAgIGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuV0FMS0lORyxcbiAgICAgICAgIHVuaXRTeXN0ZW06ICAgIGdvb2dsZS5tYXBzLlVuaXRTeXN0ZW0uSU1QRVJJQUwsXG4gICAgICAgICBhdm9pZEhpZ2h3YXlzOiB0cnVlLFxuICAgICAgICAgYXZvaWRUb2xsczogICAgdHJ1ZVxuICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICAgICAgIFx0X2xvY2F0aW9uLnRyYXZlbFRpbWUgPSByZXNwb25zZS5yb3dzWzBdLmVsZW1lbnRzWzBdLmR1cmF0aW9uO1xuICAgICAgICAgIF9sb2NhdGlvbi5kaXN0YW5jZSA9IHJlc3BvbnNlLnJvd3NbMF0uZWxlbWVudHNbMF0uZGlzdGFuY2U7XG4gICAgICAgICBcdGRlZmVycmVkLnJlc29sdmUoX2xvY2F0aW9uKTtcbiAgICAgICAgIC8vICRsb2cuZGVidWcoXCJ7bmFtZX0gLSB7dHJhdmVsVGltZX1cIiwgX2xvY2F0aW9uKTtcbiAgICAgICAgICBcbiAgICAgICB9KTtcblxuICAgICAgIFxuICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuXG4gIH1cblxuXG4gIExvY2F0aW9uLmJ1aWxkID0gZnVuY3Rpb24obERhdGEpIHtcbiAgICAkbG9nLmRlYnVnKCdidWlsZCB7bmFtZX0nLCBsRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIG5ldyBMb2NhdGlvbihsRGF0YSk7XG4gIH1cblxuICAgXG5cbiAgXG4gXG4gIHJldHVybiBMb2NhdGlvbjtcblxuXG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5tb2RlbHMnLCBbXSk7XG5cbmJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqX2luZGV4fCouc3BlYykuanMnXSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIE9uQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkcHJvdmlkZSkge1xuICBcbiAgLy9hY3RpdmF0ZSBMb2dEZWNvcmF0b3JcbiAgcmVxdWlyZSgnLi91dGlscy9sb2dnaW5nL0xvZ0RlY29yYXRvci5qcycpKCRwcm92aWRlKTtcblxuJHN0YXRlUHJvdmlkZXJcblxuICAuc3RhdGUoJ2FwcCcsIHtcbiAgICB1cmw6ICcvYXBwJyxcbiAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9tZW51Lmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdBcHBDdHJsJyxcbiAgICByZXNvbHZlOntcbiAgICAgICAgY29vcmRpbmF0ZXM6ZnVuY3Rpb24oQ3VycmVudENvb3JkcywgJHRpbWVvdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBDdXJyZW50Q29vcmRzLmdldCgpOyAgXG4gICAgICAgIH1cbiAgICB9XG4gIH0pXG4gIC5zdGF0ZSgnYXBwLmNvbm5lY3QnLCB7XG4gICAgdXJsOiAnL2Nvbm5lY3QnLFxuICAgIHZpZXdzOiB7XG4gICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2Nvbm5lY3QuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdDb25uZWN0Q3RybCBhcyBDb25uZWN0J1xuICAgICAgfVxuICAgIH1cbiAgfSApXG5cbiAgLnN0YXRlKCdhcHAubG9naW4nLCB7XG4gICAgdXJsOiAnL2xvZ2luJyxcbiAgICB2aWV3czoge1xuICAgICAgJ21lbnVDb250ZW50Jzoge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9sb2dpbi5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ3RybCBhcyBMZ24nXG4gICAgICB9XG4gICAgfVxuICB9IClcbiAgXG4gIC5zdGF0ZSgnYXBwLmJyb3dzZScsIHtcbiAgICB1cmw6ICcvYnJvd3NlJyxcbiAgICB2aWV3czoge1xuICAgICAgJ21lbnVDb250ZW50Jzoge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9icm93c2UuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdCcm93c2VDdHJsJ1xuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBcbiAgLnN0YXRlKCdhcHAubWFwJywge1xuICAgICAgdXJsOiAnL21hcCcsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbWFwLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdNYXBDdHJsIGFzIE1hcCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIFxuXG5cbiAgLy8gaWYgbm9uZSBvZiB0aGUgYWJvdmUgc3RhdGVzIGFyZSBtYXRjaGVkLCB1c2UgdGhpcyBhcyB0aGUgZmFsbGJhY2tcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2FwcC9tYXAnKTtcbiAgXG4gIFxuXG5cbn0vLy8vIE9uQ29uZmlnXG5cblxubW9kdWxlLmV4cG9ydHMgPSBPbkNvbmZpZzsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIE9uUnVuKCRpb25pY1BsYXRmb3JtLCAkbG9nLCAkYW5pbWF0ZSkge1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnT25SdW4nKTtcbiAgIFxuICAkaW9uaWNQbGF0Zm9ybS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkYW5pbWF0ZS5lbmFibGVkKHRydWUpO1xuICAgIFxuICAgIC8vIEhpZGUgdGhlIGFjY2Vzc29yeSBiYXIgYnkgZGVmYXVsdCAocmVtb3ZlIHRoaXMgdG8gc2hvdyB0aGUgYWNjZXNzb3J5IGJhciBhYm92ZSB0aGUga2V5Ym9hcmRcbiAgICAvLyBmb3IgZm9ybSBpbnB1dHMpXG4gICAgaWYgKHdpbmRvdy5jb3Jkb3ZhICYmIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQpIHtcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5oaWRlS2V5Ym9hcmRBY2Nlc3NvcnlCYXIodHJ1ZSk7XG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuZGlzYWJsZVNjcm9sbCh0cnVlKTtcblxuICAgIH1cbiAgICBpZiAod2luZG93LlN0YXR1c0Jhcikge1xuICAgICAgLy8gb3JnLmFwYWNoZS5jb3Jkb3ZhLnN0YXR1c2JhciByZXF1aXJlZFxuICAgICAgU3RhdHVzQmFyLnN0eWxlRGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT25SdW47IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2VydmljZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBDdXJyZW50Q29vcmRzKCRxLCAkaHR0cCwgJGxvZywgIEFwcFNldHRpbmdzKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKFwiQ3VycmVudENvb3Jkc1NlcnZpY2VcIik7XG4gIHZhciBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuICB2YXIgc2VydmljZSA9IHt9O1xuXG4gIHNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpOyAgICBcbiAgICAvLyBnZXQgbGF0aXRpdWRlIGFuZCBsb25naXR1ZGUgXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbihwb3MpIHtcbiAgICAgICRsb2cuZGVidWcoJ2xhdDoge2Nvb3Jkcy5sYXRpdHVkZX0nLHBvcyk7XG4gICAgICAkbG9nLmRlYnVnKCdsb25nOiB7Y29vcmRzLmxvbmdpdHVkZX0nLHBvcyk7XG4gICAgICBcblxuICAgICAgIC8vIGdldCBjaXR5IG5hbWUgZnJvbSBnb29nbGUgYXBpIGdlb2NvZGVyXG4gICAgICB2YXIgbGF0bG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwb3MuY29vcmRzLmxhdGl0dWRlLCBwb3MuY29vcmRzLmxvbmdpdHVkZSk7XG4gICAgICB2YXIgX2NpdHk7XG5cbiAgICAgIGdlb2NvZGVyLmdlb2NvZGUoeydsYXRMbmcnOiBsYXRsbmd9LCBmdW5jdGlvbihyZXN1bHRzLCBzdGF0dXMpIHtcbiAgICAgICAgICBpZiAoc3RhdHVzID09IGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9LICYmIHJlc3VsdHNbMV0pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGNsZWFudXAgdW5kZXJzY29ycyBwYXJzaW5nXG4gICAgICAgICAgICAgICBfY2l0eSA9IF8uY29tcGFjdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXy5tYXAocmVzdWx0c1sxXS5hZGRyZXNzX2NvbXBvbmVudHMsIGZ1bmN0aW9uKGNvbXApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKF8uY29udGFpbnMoY29tcC50eXBlcywnbG9jYWxpdHknKSkgcmV0dXJuIGNvbXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxuICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIHBvcy5jaXR5ID0gX2NpdHlbMF0ubG9uZ19uYW1lO1xuXG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUocG9zKTsgIFxuICAgICAgfSk7Ly8vIGVuZCBnZW9jb2RlXG5cbiAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgJGxvZy53YXJuKCdVbmFibGUgdG8gZ2V0IGxvY2F0aW9uOiAnICsgZXJyb3IpO1xuICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvciwgc3RhdHVzKTtcbiAgIH0pO1xuICAgIFxuICBcbiAgICBcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfTtcblxuICByZXR1cm4gc2VydmljZTtcblxufVxuXG5zZXJ2aWNlc01vZHVsZS5zZXJ2aWNlKCdDdXJyZW50Q29vcmRzJywgQ3VycmVudENvb3Jkcyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2VydmljZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBMb2NhdGlvbnNTZXJ2aWNlKCRsb2csIFlvY2FsLCBMb2NhdGlvbiwgJHEpIHtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoXCJMb2NhdGlvbnNTZXJ2aWNlU2VydmljZVwiKTtcblxuICB2YXIgc2VydmljZSA9IHt9O1xuICBcblxuICBzZXJ2aWNlLmdldCA9IGZ1bmN0aW9uKCBnZXREYXRhICkge1xuXG4gICAgJGxvZy5kZWJ1ZygnR0VUIGxvY2F0aW9uIGluIGEge3JhZGl1c30gIG9mIHtsYXR9LCB7bG5nfScsIGdldERhdGEpO1xuXG4gICAgcmV0dXJuIFlvY2FsLmdldChnZXREYXRhKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgICAgLy8gb25seSByZXR1cm4gbG9jYXRpb25zIHdoZW4gdGhleSBoYXZlIEFMTFxuICAgICAgICAgICAgICAgICAgLy8gYmVlbiBwb3B1bGF0ZWQgd2l0aCB0cmF2ZWxUaW1lc1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICRxLmFsbChMb2NhdGlvbi5yZXNwb25zZVRyYW5zZm9ybWVyKGRhdGEpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcblxuICB9O1xuXG4gIHNlcnZpY2UuYWxsID0gZnVuY3Rpb24oIGdldERhdGEgKSB7XG5cbiAgICAkbG9nLmRlYnVnKCdBTEwnKTtcblxuICAgIHJldHVybiBZb2NhbC5hbGwoKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgICAgLy8gb25seSByZXR1cm4gbG9jYXRpb25zIHdoZW4gdGhleSBoYXZlIEFMTFxuICAgICAgICAgICAgICAgICAgLy8gYmVlbiBwb3B1bGF0ZWQgd2l0aCB0cmF2ZWxUaW1lc1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICRxLmFsbChMb2NhdGlvbi5yZXNwb25zZVRyYW5zZm9ybWVyKGRhdGEpKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ0xvY2F0aW9uc1NlcnZpY2UnLCBMb2NhdGlvbnNTZXJ2aWNlKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIFlvY2FsKCRxLCAkaHR0cCwgQXBwU2V0dGluZ3MsICRsb2cpIHtcblxuICB2YXIgc2VydmljZSA9IHt9O1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZShcIllvY2FsU2VydmljZVwiKTtcblxuICAgXG5cbiBcblxuICBzZXJ2aWNlLmdldCA9IGZ1bmN0aW9uKCBnZXREYXRhICkge1xuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAvLyBsaXN0QnlEaXN0YW5jZUNhdC9Gb29kLzgwMDAvMzkuOTM3ODkzLy03NS4xNjg5MzQ3XG4gICAkaHR0cC5nZXQoQXBwU2V0dGluZ3MueW9jYWxBUEkuYmFzZSsnL2xpc3RCeURpc3RhbmNlQ2F0LycrZ2V0RGF0YS5jYXRlZ29yeSsnLycrZ2V0RGF0YS5yYWRpdXMrJy8nK2dldERhdGEubGF0KycvJytnZXREYXRhLmxuZylcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoJ2ZvdW5kIHtsZW5ndGh9ICcrZ2V0RGF0YS5jYXRlZ29yeSsnIHNwb3RzIHdpdGhpbiAnK2dldERhdGEucmFkaXVzKycgbWV0ZXJzIG9mICcrZ2V0RGF0YS5sYXQrJywnK2dldERhdGEubG5nLCBkYXRhLmxvY2F0aW9ucyk7XG4gICAgICAgICAgZGF0YS5yYWRpdXMgPSBnZXREYXRhLnJhZGl1cztcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpIHtcbiAgICAgICAgICAkbG9nLndhcm4oJ1VuYWJsZSB0byBnZXQgbG9jYXRpb246ICcgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVyciwgc3RhdHVzKTtcbiAgICAgICAgfSk7XG4gICBcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfTtcblxuICBzZXJ2aWNlLmFsbCA9IGZ1bmN0aW9uKGdldERhdGEpe1xuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAvL2xpc3RCeURpc3RhbmNlQ2F0L0Zvb2QvODAwMC8zOS45Mzc4OTMvLTc1LjE2ODkzNDdcbiAgICRodHRwLmdldChBcHBTZXR0aW5ncy55b2NhbEFQSS5iYXNlKycvbGlzdCcpXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKCdhbGw6IGZvdW5kIHtsZW5ndGh9IHRvdGFsIHNwb3RzJywgZGF0YSk7XG4gICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGVyciwgc3RhdHVzKSB7XG4gICAgICAgICAgJGxvZy53YXJuKCdVbmFibGUgdG8gZ2V0IGxvY2F0aW9uOiAnICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIsIHN0YXR1cyk7XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG5cbiAgfVxuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ1lvY2FsJywgWW9jYWwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLnNlcnZpY2VzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNlcnZpY2VzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gRXhhbXBsZVNlcnZpY2UoJHEsICRodHRwKSB7XG5cbiAgdmFyIHNlcnZpY2UgPSB7fTtcblxuICBzZXJ2aWNlLmdldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAkaHR0cC5nZXQoJ2FwaVBhdGgnKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICB9KS5lcnJvcihmdW5jdGlvbihlcnIsIHN0YXR1cykge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyLCBzdGF0dXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cbn1cblxuc2VydmljZXNNb2R1bGUuc2VydmljZSgnRXhhbXBsZVNlcnZpY2UnLCBFeGFtcGxlU2VydmljZSk7IiwiLyoqXG4gKiBAYXV0aG9yICAgICBUaG9tYXMgQnVybGVzb25cbiAqIEBhdXRob3IgICAgIFN0YWNrT3ZlcmZsb3cgLSBIYXJ0bywgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzE1NDA4L2hvdy1kby1pLWZvcm1hdC1hLXRpbWVzdGFtcC1pbi1qYXZhc2NyaXB0LXRvLWRpc3BsYXktaXQtaW4tZ3JhcGhzLXV0Yy1pcy1maW5lXG4gKiBAZGVzY3JpcHRpb25cbiAqICBcbiAqIERhdGVUaW1lIHV0aWxpdHkgY2xhc3MgdGhhdCBzcGl0cyBvdXQgVVRDIHRpbWVzdGFtcCBzdHJpbmdzIHVzdWFsbHkgdXNlZCBpbiBhIHJlcG9ydGluZywgcHJpbnQtY2FwYWJsZSBwcm9jZXNzLlxuKi9cbiBcblxuICd1c2Ugc3RyaWN0JztcblxuXG52YXIgYnVpbGRUaW1lU3RyaW5nID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdClcbiAgICAgICAge1xuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8IFwiJWg6JW06JXM6JXpcIjtcblxuICAgICAgICAgICAgZnVuY3Rpb24gcGFkKHZhbHVlLCBpc01pbGxpU2Vjb25kcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgKGlzTWlsbGlTZWNvbmRzKSA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlzTWlsbGlTZWNvbmRzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGlzTWlsbGlTZWNvbmRzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUgPCAxMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIjAwXCIgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHZhbHVlIDwgMTAwKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiMFwiICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuKHZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoIDwgMikgPyBcIjBcIiArIHZhbHVlIDogdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQucmVwbGFjZSgvJShbYS16QS1aXSkvZywgZnVuY3Rpb24gKF8sIGZtdENvZGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3dpdGNoKGZtdENvZGUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJZXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiaFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0SG91cnMoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldE1pbnV0ZXMoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldFNlY29uZHMoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldE1pbGxpc2Vjb25kcygpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBmb3JtYXQgY29kZTogXCIgKyBmbXRDb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG4gLy8gUHVibGlzaCBBUEkgZm9yIERhdGVUaW1lIHV0aWxzXG4gICAgICAgIC8vIHJldHVybiB7XG4gICAgICAgIC8vICAgICBmb3JtYXR0ZWROb3c6IGZ1bmN0aW9uICgpXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGJ1aWxkVGltZVN0cmluZyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gXG4gbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZm9ybWF0dGVkTm93OiBmdW5jdGlvbiAoKSB7IHJldHVybiBidWlsZFRpbWVTdHJpbmcobmV3IERhdGUoKSk7IH1cbiB9O1xuXG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBMb2dEZWNvcmF0b3JcbiAqICBAc291cmNlOiBodHRwOi8vc29sdXRpb25vcHRpbWlzdC5jb20vMjAxMy8xMC8wNy9lbmhhbmNlLWFuZ3VsYXJqcy1sb2dnaW5nLXVzaW5nLWRlY29yYXRvcnMvXG4gKi9cblxuIHZhciBMb2dEZWNvcmF0b3IgPSBmdW5jdGlvbiggJHByb3ZpZGUgICl7XG5cblxuICAgICAgICAgICAgICAvLyBSZWdpc3RlciBvdXIgJGxvZyBkZWNvcmF0b3Igd2l0aCBBbmd1bGFySlMgJHByb3ZpZGVyXG4gICAgICAgICAgICAgICRwcm92aWRlLmRlY29yYXRvciggJyRsb2cnLCBbIFwiJGRlbGVnYXRlXCIsIGZ1bmN0aW9uKCAkZGVsZWdhdGUgKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAvLyBOT1RFOiB0aGUgTG9nRW5jaGFuY2VyIG1vZHVsZSByZXR1cm5zIGEgRlVOQ1RJT04gdGhhdCB3ZSBuYW1lZCBgZW5jaGFuY2VMb2dnZXJGbmBcbiAgICAgICAgICAgICAgIC8vICAgICAgIEFsbCB0aGUgZGV0YWlscyBvZiBob3cgdGhlIGBlbmNoYW5jZW1lbnRgIHdvcmtzIGlzIGVuY2Fwc3VsYXRlZCBpbiBMb2dFbmhhbmNlciFcblxuICAgICAgICAgICAgICAgICAgcmVxdWlyZSgnLi9Mb2dFbmhhbmNlci5qcycpKCAkZGVsZWdhdGUgKTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuICRkZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgfV0pO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9ICBMb2dEZWNvcmF0b3I7IiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBMb2dFbmhhbmNlclxuICogVGhpcyBhZGRzIHRpbWVzdGFtcHMgYW5kIHN1cHBsYW50IGZ1bmN0aW9uYWxpdHkgdG8gQW5ndWxhciAkbG9nIHNlcnZpY2VcbiAqIEBzb3VyY2U6IGh0dHA6Ly9zb2x1dGlvbm9wdGltaXN0LmNvbS8yMDEzLzEwLzA3L2VuaGFuY2UtYW5ndWxhcmpzLWxvZ2dpbmctdXNpbmctZGVjb3JhdG9ycy9cbiAqIEBhcGk6IHB1YmxpY1xuICogQHJldHVybnM6IE9iamVjdCAtIGV4dGVuZGVkICRsb2cgc2VydmljZVxuICovXG5cbnZhciBlbmNoYW5jZUxvZ2dlciA9IGZ1bmN0aW9uKCAkbG9nICl7XG4gIHZhciBzdXBwbGFudCA9IHJlcXVpcmUoJy4uL3N1cHBsYW50LmpzJyk7XG4gIHZhciBEYXRlVGltZSA9IHJlcXVpcmUoJy4uL0RhdGVUaW1lLmpzJyk7XG5cblxuICAvKipcbiAgICogQ2FwdHVyZSB0aGUgb3JpZ2luYWwgJGxvZyBmdW5jdGlvbnM7IGZvciB1c2UgaW4gZW5oYW5jZWRMb2dGbigpXG4gICAqIEBhcGkgIHByaXZhdGUgXG4gICAqL1xuICBcbiAgdmFyIF8kbG9nID0gKGZ1bmN0aW9uKCAkbG9nICl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2cgICA6ICRsb2cubG9nLFxuICAgICAgICBpbmZvICA6ICRsb2cuaW5mbyxcbiAgICAgICAgd2FybiAgOiAkbG9nLndhcm4sXG4gICAgICAgIGRlYnVnIDogJGxvZy5kZWJ1ZyxcbiAgICAgICAgZXJyb3IgOiAkbG9nLmVycm9yXG4gICAgICB9O1xuICB9KSggJGxvZyApOyBcblxuXG5cbiAgIC8qKlxuICAgICogUGFydGlhbCBhcHBsaWNhdGlvbiB0byBwcmUtY2FwdHVyZSBhIGxvZ2dlciBmdW5jdGlvblxuICAgICogQGFwaTogIHByaXZhdGUgXG4gICAgKiBAcmV0dXJuczogRnVuY3Rpb24gXG4gICAgKi9cbiAgICB2YXIgcHJlcGFyZUxvZ0ZuID0gZnVuY3Rpb24oIGxvZ0ZuLCBjbGFzc05hbWUgKXtcblxuICAgICAgLyoqXG4gICAgICAgKiBJbnZva2UgdGhlIHNwZWNpZmllZCBgbG9nRm48YCB3aXRoIHRoZSBzdXBwbGFudCBmdW5jdGlvbmFsaXR5Li4uXG4gICAgICAgKiBAYXBpOiBwcml2YXRlIFxuICAgICAgICogQGV4YW1wbGU6IFxuICAgICAgICogICB2YXIgdXNlciA9IHsgd2hvOlwiVGhvbWFzIEJ1cmxlc29uXCJcIiwgZW1haWw9XCJUaG9tYXNCdXJsZXNvbkBnbWFpbC5jb21cIlwiIH07XG4gICAgICAgKiAgICRsb2cud2FybiggXCJBIHdhcm5pbmcgbWVzc2FnZSBmb3IgYHt3aG99YCB3aWxsIGJlIHNlbnQgdG8gYHtlbWFpbH1gICFcIiwgdXNlciApOyAgIFxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc2hvdWxkIG91dHB1dDogQSB3YXJuaW5nIG1lc3NhZ2UgZm9yIGBUaG9tYXMgQnVybGVzb25gIHdpbGwgYmUgc2VudCB0byBgVGhvbWFzQnVybGVzb25AZ21haWwuY29tYCAhXG4gICAgICAgKi9cbiAgICAgIHZhciBlbmhhbmNlZExvZ0ZuID0gZnVuY3Rpb24oICl7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgICAgIG5vdyAgPSBEYXRlVGltZS5mb3JtYXR0ZWROb3coKTtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnO1xuICAgICAgICAgICAgLy8gcHJlcGVuZCBhIHRpbWVzdGFtcCB0byB0aGUgb3JpZ2luYWwgb3V0cHV0IG1lc3NhZ2VcbiAgICAgICAgICAgIGFyZ3NbMF0gPSBzdXBwbGFudChcInswfSAtIHsxfXsyfVwiLCBbIG5vdywgY2xhc3NOYW1lLCBhcmdzWzBdIF0pO1xuXG4gICAgICAgIGxvZ0ZuLmNhbGwoIG51bGwsICBzdXBwbGFudC5hcHBseSggbnVsbCwgYXJncyApICk7XG4gICAgICB9O1xuXG4gICAgICAvLyBTcGVjaWFsLi4uIG9ubHkgbmVlZGVkIHRvIHN1cHBvcnQgYW5ndWxhci1tb2NrcyBleHBlY3RhdGlvbnNcbiAgICAgIGVuaGFuY2VkTG9nRm4ubG9ncyA9IFsgXTtcbiBcbiAgICAgIHJldHVybiBlbmhhbmNlZExvZ0ZuO1xuICAgICAgXG4gICAgfTtcblxuXG5cblxuICAgIC8qKlxuICAgICAqIFN1cHBvcnQgdG8gZ2VuZXJhdGUgY2xhc3Mtc3BlY2lmaWMgbG9nZ2VyIGluc3RhbmNlIHdpdGggY2xhc3NuYW1lIG9ubHlcbiAgICAgKlxuICAgICAqIEBwYXJhbTogbmFtZVxuICAgICAqIEByZXR1cm5zOiBPYmplY3Qgd3JhcHBlciBmYWNhZGUgdG8gJGxvZ1xuICAgICAqL1xuICAgIHZhciBnZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKCBjbGFzc05hbWUgKXtcbiAgICAgIGNsYXNzTmFtZSA9ICggY2xhc3NOYW1lICE9PSB1bmRlZmluZWQgKSA/IGNsYXNzTmFtZSArIFwiOjpcIiA6IFwiXCI7XG5cbiAgICAgIHJldHVybntcbiAgICAgICAgIGxvZyAgIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5sb2csICAgIGNsYXNzTmFtZSApLFxuICAgICAgICAgaW5mbyAgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmluZm8sICAgY2xhc3NOYW1lICksXG4gICAgICAgICB3YXJuICA6IHByZXBhcmVMb2dGbiggXyRsb2cud2FybiwgICBjbGFzc05hbWUgKSxcbiAgICAgICAgIGRlYnVnIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5kZWJ1ZywgIGNsYXNzTmFtZSApLFxuICAgICAgICAgLy8gZXJyb3IgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmVycm9yLCAgY2xhc3NOYW1lIClcbiAgICAgIH07XG5cbiAgICB9O1xuXG5cblxuICAgIC8vIHdyYXAgZWFjaCBsb2cgbWV0aG9kIFxuICAgICRsb2cubG9nICAgPSBwcmVwYXJlTG9nRm4oICRsb2cubG9nICk7XG4gICAgJGxvZy5pbmZvICA9IHByZXBhcmVMb2dGbiggJGxvZy5pbmZvICk7XG4gICAgJGxvZy53YXJuICA9IHByZXBhcmVMb2dGbiggJGxvZy53YXJuICk7XG4gICAgJGxvZy5kZWJ1ZyA9IHByZXBhcmVMb2dGbiggJGxvZy5kZWJ1ZyApO1xuICAgIC8vICRsb2cuZXJyb3IgPSBwcmVwYXJlTG9nRm4oICRsb2cuZXJyb3IgKTtcblxuICAgIC8vIEFkZCBzcGVjaWFsIG1ldGhvZCB0byBBbmd1bGFySlMgJGxvZ1xuICAgICRsb2cuZ2V0SW5zdGFuY2UgPSBnZXRJbnN0YW5jZTtcbiBcblxuICAgIHJldHVybiAkbG9nO1xufTsvL2VuY2hhbmNlTG9nZ2VyXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9ICBlbmNoYW5jZUxvZ2dlcjsiLCIvKipcbiAqIEBhdXRob3IgICAgICBUaG9tYXMgQnVybGVzb25cbiAqIEBkYXRlICAgICAgICBOb3ZlbWJlciwgMjAxM1xuICogQHNvdXJjZTogICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9UaG9tYXNCdXJsZXNvbi9hbmd1bGFyanMtbG9nRGVjb3JhdG9yL2Jsb2IvbWFzdGVyL3NyYy9taW5kc3BhY2UvdXRpbHMvc3VwcGxhbnQuanNcbiAgKi9cbiBcblxuICd1c2Ugc3RyaWN0JztcblxudmFyIHN1cHBsYW50ID0gIGZ1bmN0aW9uKCB0ZW1wbGF0ZSwgdmFsdWVzLCBwYXR0ZXJuICkge1xuICAgICAgICAgICAgcGF0dGVybiA9IHBhdHRlcm4gfHwgL1xceyhbXlxce1xcfV0qKVxcfS9nO1xuXG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZShwYXR0ZXJuLCBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSBiLnNwbGl0KCcuJyksXG4gICAgICAgICAgICAgICAgICAgIHIgPSB2YWx1ZXM7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzIGluIHApIHsgciA9IHJbcFtzXV07ICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgICAgICAgICAgciA9IGE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgciA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHIgPT09ICdudW1iZXInKSA/IHIgOiBhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cblxuLy8gc3VwcGxhbnQoKSBtZXRob2QgZnJvbSBDcm9ja2ZvcmRzIGBSZW1lZGlhbCBKYXZhc2NyaXB0YFxuRnVuY3Rpb24ucHJvdG90eXBlLm1ldGhvZCA9IGZ1bmN0aW9uIChuYW1lLCBmdW5jKSB7XG4gICAgdGhpcy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuU3RyaW5nLm1ldGhvZChcInN1cHBsYW50XCIsIGZ1bmN0aW9uKCB2YWx1ZXMsIHBhdHRlcm4gKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBzdXBwbGFudChzZWxmLCB2YWx1ZXMsIHBhdHRlcm4pO1xufSk7XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gIFN0cmluZy5zdXBwbGFudCA9IHN1cHBsYW50OyJdfQ==
