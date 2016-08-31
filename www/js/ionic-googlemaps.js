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

},{}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/DATA/LocationsMock_drink.json":[function(require,module,exports){
module.exports=[
  {
    "_id": "5709d94d85db6f029bff9e79",
    "name": "Bob and Barbara's Lounge",
    "catagorylevel1": "Drink",
    "adress": "1509 South St Philadelphia PA 19146 United States",
    "neighborhood": "South Street",
    "lat": "39.9440555",
    "long": "-75.1675493",
    "distancefromlocation": 2901,
    "travelTime": {
      "text": "49 mins",
      "value": 2967
    },
    "distance": {
      "text": "2.4 mi",
      "value": 3913
    },
    "googlePlaceId": "ChIJi995vjzGxokRIbxCa4BprWg",
    "address_components": [
      {
        "long_name": "1509",
        "short_name": "1509",
        "types": [
          "street_number"
        ]
      },
      {
        "long_name": "South Street",
        "short_name": "South Street",
        "types": [
          "route"
        ]
      },
      {
        "long_name": "Center City",
        "short_name": "Center City",
        "types": [
          "neighborhood",
          "political"
        ]
      },
      {
        "long_name": "Philadelphia",
        "short_name": "Philadelphia",
        "types": [
          "locality",
          "political"
        ]
      },
      {
        "long_name": "Philadelphia County",
        "short_name": "Philadelphia County",
        "types": [
          "administrative_area_level_2",
          "political"
        ]
      },
      {
        "long_name": "PA",
        "short_name": "PA",
        "types": [
          "administrative_area_level_1",
          "political"
        ]
      },
      {
        "long_name": "",
        "short_name": "US",
        "types": [
          "country",
          "political"
        ]
      },
      {
        "long_name": "19146",
        "short_name": "19146",
        "types": [
          "postal_code"
        ]
      },
      {
        "long_name": "1680",
        "short_name": "1680",
        "types": [
          "postal_code_suffix"
        ]
      }
    ],
    "adr_address": "<span class=\"street-address\">1509 South Street</span>, <span class=\"locality\">Philadelphia</span>, <span class=\"region\">PA</span> <span class=\"postal-code\">19146-1680</span>",
    "formatted_address": "1509 South Street, Philadelphia, PA 19146",
    "formatted_phone_number": "(215) 545-4511",
    "geometry": {
      "location": {
        "lat": 39.9440475,
        "lng": -75.16754789999999
      }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "9c0b84306b57bb1571943d9ca993aed38474582b",
    "international_phone_number": "+1 215-545-4511",
    "opening_hours": {
      "open_now": false,
      "periods": [
        {
          "close": {
            "day": 1,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1473055200000
          },
          "open": {
            "day": 0,
            "time": "1500",
            "hours": 15,
            "minutes": 0,
            "nextDate": 1473015600000
          }
        },
        {
          "close": {
            "day": 2,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1473141600000
          },
          "open": {
            "day": 1,
            "time": "1500",
            "hours": 15,
            "minutes": 0,
            "nextDate": 1473102000000
          }
        },
        {
          "close": {
            "day": 3,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1473228000000
          },
          "open": {
            "day": 2,
            "time": "1500",
            "hours": 15,
            "minutes": 0,
            "nextDate": 1473188400000
          }
        },
        {
          "close": {
            "day": 4,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1472709600000
          },
          "open": {
            "day": 3,
            "time": "1500",
            "hours": 15,
            "minutes": 0,
            "nextDate": 1472670000000
          }
        },
        {
          "close": {
            "day": 5,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1472796000000
          },
          "open": {
            "day": 4,
            "time": "1500",
            "hours": 15,
            "minutes": 0,
            "nextDate": 1472756400000
          }
        },
        {
          "close": {
            "day": 6,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1472882400000
          },
          "open": {
            "day": 5,
            "time": "1500",
            "hours": 15,
            "minutes": 0,
            "nextDate": 1472842800000
          }
        },
        {
          "close": {
            "day": 0,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1472968800000
          },
          "open": {
            "day": 6,
            "time": "1500",
            "hours": 15,
            "minutes": 0,
            "nextDate": 1472929200000
          }
        }
      ],
      "weekday_text": [
        "Monday: 3:00 PM – 2:00 AM",
        "Tuesday: 3:00 PM – 2:00 AM",
        "Wednesday: 3:00 PM – 2:00 AM",
        "Thursday: 3:00 PM – 2:00 AM",
        "Friday: 3:00 PM – 2:00 AM",
        "Saturday: 3:00 PM – 2:00 AM",
        "Sunday: 3:00 PM – 2:00 AM"
      ]
    },
    "photos": [
      {
        "height": 2448,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/109288764654610552840/photos\">Mackenzie Canavarro</a>"
        ],
        "width": 3264
      },
      {
        "height": 5312,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/117448114570107206075/photos\">Lisa Myers</a>"
        ],
        "width": 2988
      },
      {
        "height": 3264,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/115390019946104710705/photos\">KBC criollos</a>"
        ],
        "width": 1836
      },
      {
        "height": 2048,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/118241900451727165278/photos\">Jeff Washburn</a>"
        ],
        "width": 1152
      },
      {
        "height": 2048,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/118241900451727165278/photos\">Jeff Washburn</a>"
        ],
        "width": 1152
      }
    ],
    "place_id": "ChIJi995vjzGxokRIbxCa4BprWg",
    "price_level": 2,
    "rating": 4,
    "reference": "CnRrAAAAmraQFDVxwgrKt2Tk_1YmMYorOwnhhtTBlEZyrxlBDaZUvICIXYLTqb4XxuOTrW41DdbCfkIILfebta1h3tnP_MBgo4m0sMZVJgbIHR2LyxmIAjTwdbeYyHA7kuTPQwaqVUgtS6Ybk6DGQ6z5AYWgZhIQvDkvJg7uiYP_qzcJZ_pyVRoUH-F-bhSoNgmFW3raeGCf5e_Wqoo",
    "reviews": [
      {
        "aspects": [
          {
            "rating": 3,
            "type": "overall"
          }
        ],
        "author_name": "Caleb Radens",
        "author_url": "https://plus.google.com/116233799351028541162",
        "language": "en",
        "profile_photo_url": "//lh5.googleusercontent.com/-mZn1lYQCcP0/AAAAAAAAAAI/AAAAAAAAEGA/q9gFQSP47tI/photo.jpg",
        "rating": 5,
        "text": "One of my favorite places to pre-game a night. Get a couple of City-wide specials and you'll be happy for the rest of the night!",
        "time": 1467120375
      },
      {
        "aspects": [
          {
            "rating": 2,
            "type": "overall"
          }
        ],
        "author_name": "Matt Ruby",
        "author_url": "https://plus.google.com/113601610665507745553",
        "language": "en",
        "rating": 4,
        "text": "Great dive bar with competitive drink specials.  Lots of PBR memorabilia and regular (often campy) live entertainment.",
        "time": 1467234489
      },
      {
        "aspects": [
          {
            "rating": 2,
            "type": "overall"
          }
        ],
        "author_name": "Lily de la Torre",
        "author_url": "https://plus.google.com/104302264587788132938",
        "language": "en",
        "profile_photo_url": "//lh3.googleusercontent.com/-gqSXHDv795Q/AAAAAAAAAAI/AAAAAAAAAFI/Uxqj8oJ_4Mw/photo.jpg",
        "rating": 4,
        "text": "This is a great local dive bar on South Street. The selection is pretty good, but it's cash only.  No food here. ",
        "time": 1461441410
      },
      {
        "aspects": [
          {
            "rating": 3,
            "type": "overall"
          }
        ],
        "author_name": "Steve Telenko",
        "author_url": "https://plus.google.com/115624688347399296354",
        "language": "en",
        "rating": 5,
        "text": "Best plase in town to drink cheap buch is the best.",
        "time": 1460853955
      },
      {
        "aspects": [
          {
            "rating": 3,
            "type": "overall"
          }
        ],
        "author_name": "Jared Jacobs",
        "author_url": "https://plus.google.com/102767645449996368280",
        "language": "en",
        "profile_photo_url": "//lh6.googleusercontent.com/-mmGq2fyBxjw/AAAAAAAAAAI/AAAAAAAAAKs/CKpw2UYdz20/photo.jpg",
        "rating": 5,
        "text": "What a great dive. Cash only to. Live music is outstanding, bar has a classic feel. Home to the first city wide special beer and a bourbon for 5 bucks. No cover, cheap drinks. Can't go wrong.",
        "time": 1456248841
      }
    ],
    "scope": "GOOGLE",
    "types": [
      "bar",
      "point_of_interest",
      "establishment"
    ],
    "url": "https://maps.google.com/?cid=7542800951191714849",
    "utc_offset": -240,
    "vicinity": "1509 South Street, Philadelphia",
    "website": "http://www.bobandbarbaras.com/",
    "html_attributions": []
  },
  {
    "_id": "5709d94d85db6f029bff9e7a",
    "name": "Garage",
    "catagorylevel1": "Drink",
    "adress": "E Passyunk Ave Philadelphia PA 19147 United States",
    "neighborhood": "Passyunk Square",
    "lat": "39.935438",
    "long": "-75.1566705",
    "distancefromlocation": 3260,
    "travelTime": {
      "text": "44 mins",
      "value": 2612
    },
    "distance": {
      "text": "2.2 mi",
      "value": 3479
    },
    "googlePlaceId": "ChIJkXTjnx7GxokRgQA7mIv2L2g",
    "address_components": [
      {
        "long_name": "1231-1233",
        "short_name": "1231-1233",
        "types": [
          "street_number"
        ]
      },
      {
        "long_name": "East Passyunk Avenue",
        "short_name": "E Passyunk Ave",
        "types": [
          "route"
        ]
      },
      {
        "long_name": "Passyunk Square",
        "short_name": "Passyunk Square",
        "types": [
          "neighborhood",
          "political"
        ]
      },
      {
        "long_name": "Philadelphia",
        "short_name": "Philadelphia",
        "types": [
          "locality",
          "political"
        ]
      },
      {
        "long_name": "Philadelphia County",
        "short_name": "Philadelphia County",
        "types": [
          "administrative_area_level_2",
          "political"
        ]
      },
      {
        "long_name": "Pennsylvania",
        "short_name": "PA",
        "types": [
          "administrative_area_level_1",
          "political"
        ]
      },
      {
        "long_name": "United States",
        "short_name": "US",
        "types": [
          "country",
          "political"
        ]
      },
      {
        "long_name": "19147",
        "short_name": "19147",
        "types": [
          "postal_code"
        ]
      }
    ],
    "adr_address": "<span class=\"street-address\">1231-1233 E Passyunk Ave</span>, <span class=\"locality\">Philadelphia</span>, <span class=\"region\">PA</span> <span class=\"postal-code\">19147</span>, <span class=\"country-name\">USA</span>",
    "formatted_address": "1231-1233 E Passyunk Ave, Philadelphia, PA 19147, USA",
    "formatted_phone_number": "(215) 278-2429",
    "geometry": {
      "location": {
        "lat": 39.9334777,
        "lng": -75.15873669999996
      },
      "viewport": {
        "south": 39.93342275,
        "west": -75.15902770000002,
        "north": 39.93364254999999,
        "east": -75.15863969999998
      }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "4e2e54e22bd2533956581c720ab3291a7998c9bd",
    "international_phone_number": "+1 215-278-2429",
    "opening_hours": {
      "open_now": false,
      "periods": [
        {
          "close": {
            "day": 1,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1473055200000
          },
          "open": {
            "day": 0,
            "time": "1200",
            "hours": 12,
            "minutes": 0,
            "nextDate": 1473004800000
          }
        },
        {
          "close": {
            "day": 2,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1473141600000
          },
          "open": {
            "day": 1,
            "time": "1700",
            "hours": 17,
            "minutes": 0,
            "nextDate": 1473109200000
          }
        },
        {
          "close": {
            "day": 3,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1473228000000
          },
          "open": {
            "day": 2,
            "time": "1700",
            "hours": 17,
            "minutes": 0,
            "nextDate": 1473195600000
          }
        },
        {
          "close": {
            "day": 4,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1472709600000
          },
          "open": {
            "day": 3,
            "time": "1700",
            "hours": 17,
            "minutes": 0,
            "nextDate": 1472677200000
          }
        },
        {
          "close": {
            "day": 5,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1472796000000
          },
          "open": {
            "day": 4,
            "time": "1700",
            "hours": 17,
            "minutes": 0,
            "nextDate": 1472763600000
          }
        },
        {
          "close": {
            "day": 6,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1472882400000
          },
          "open": {
            "day": 5,
            "time": "1700",
            "hours": 17,
            "minutes": 0,
            "nextDate": 1472850000000
          }
        },
        {
          "close": {
            "day": 0,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1472968800000
          },
          "open": {
            "day": 6,
            "time": "1200",
            "hours": 12,
            "minutes": 0,
            "nextDate": 1472918400000
          }
        }
      ],
      "weekday_text": [
        "Monday: 5:00 PM – 2:00 AM",
        "Tuesday: 5:00 PM – 2:00 AM",
        "Wednesday: 5:00 PM – 2:00 AM",
        "Thursday: 5:00 PM – 2:00 AM",
        "Friday: 5:00 PM – 2:00 AM",
        "Saturday: 12:00 PM – 2:00 AM",
        "Sunday: 12:00 PM – 2:00 AM"
      ]
    },
    "photos": [
      {
        "height": 2322,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/118012748467279824986/photos\">MARIA ANGELES GARCIA IBAÑEZ</a>"
        ],
        "width": 4128
      },
      {
        "height": 2340,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/102008987022329575937/photos\">Tj Seningen</a>"
        ],
        "width": 4160
      },
      {
        "height": 2102,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/118151799496761308790/photos\">Eric Williams</a>"
        ],
        "width": 2448
      },
      {
        "height": 2604,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/104204655941149837951/photos\">Seth Rivard</a>"
        ],
        "width": 1934
      },
      {
        "height": 5312,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/107274785414897510428/photos\">jason kelso</a>"
        ],
        "width": 2988
      },
      {
        "height": 3264,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/105154492685453503391/photos\">Michael Faia</a>"
        ],
        "width": 2448
      },
      {
        "height": 3264,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/103765008452362570329/photos\">Matt Byrnes</a>"
        ],
        "width": 1836
      },
      {
        "height": 3264,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/109249467420211536700/photos\">Justin Liles</a>"
        ],
        "width": 2448
      }
    ],
    "place_id": "ChIJkXTjnx7GxokRgQA7mIv2L2g",
    "price_level": 1,
    "rating": 4.3,
    "reference": "CmRZAAAANdVRnpKQYOA8832UVNoPWHa00szULl7l_AIDlPfeU-Nirw-PcsSlt33h8NEui9aeAipmZ57Vi3J5Y_JZF_rfAUigN7NPLI2mr-dzQv4IIWW5wbbgm37FzQQrquwo1wFEEhBH4z75YTqUol8QIqk-FcIVGhStrqqejIn0IypVniIsBFGIQ8Vo9Q",
    "reviews": [
      {
        "aspects": [
          {
            "rating": 2,
            "type": "overall"
          }
        ],
        "author_name": "Josiah Nedd",
        "author_url": "https://plus.google.com/113359586281265080808",
        "language": "en",
        "profile_photo_url": "//lh4.googleusercontent.com/-e0YjVUdWwBo/AAAAAAAAAAI/AAAAAAAAAFk/lbVdbX29VT8/photo.jpg",
        "rating": 4,
        "text": "Nice bar with a food truck in it! Billiards table, Skeeball, and decent bartenders. Stumble to Pat's for a steak before/after.",
        "time": 1470674346
      },
      {
        "aspects": [
          {
            "rating": 2,
            "type": "overall"
          }
        ],
        "author_name": "Frank Gioffre",
        "author_url": "https://plus.google.com/113632090473894631930",
        "language": "en",
        "rating": 4,
        "text": "Nice small bar with plenty of televisions to watch doing events. Indoor and outdoor seating.\nPrices are reasonable and the food is tasty.",
        "time": 1466733444
      },
      {
        "aspects": [
          {
            "rating": 2,
            "type": "overall"
          }
        ],
        "author_name": "Paul Gwilym",
        "author_url": "https://plus.google.com/103877905499017103428",
        "language": "en",
        "rating": 4,
        "text": "Awesome beer collection....absolutely awesome.  Menu in a folder for the old land cruiser with c30 pages of beer.... Only beer, by brewer( at least 40) and style.......  Heaven.... Especially to wash down a Pats Philly Cheese Steak sandwich.  A bit off the beaten track but worth the experience. 😄👍👍😳",
        "time": 1464990418
      },
      {
        "aspects": [
          {
            "rating": 3,
            "type": "overall"
          }
        ],
        "author_name": "rocky romero",
        "author_url": "https://plus.google.com/114790834993004567609",
        "language": "en",
        "rating": 5,
        "text": "Love the canned beer selection. So many to choose from. Chill layed back place and it's located between pat's and genos cheese steaks. ",
        "time": 1461191479
      },
      {
        "aspects": [
          {
            "rating": 3,
            "type": "overall"
          }
        ],
        "author_name": "Frank Iacovino",
        "author_url": "https://plus.google.com/104246094571010268585",
        "language": "en",
        "profile_photo_url": "//lh6.googleusercontent.com/-Iaujs7_M1qw/AAAAAAAAAAI/AAAAAAAAGd4/8ukL843dP8U/photo.jpg",
        "rating": 5,
        "text": "Great beer selection paired with super knowledgeable bartenders. What's not to love? ",
        "time": 1459735652
      }
    ],
    "scope": "GOOGLE",
    "types": [
      "bar",
      "point_of_interest",
      "establishment"
    ],
    "url": "https://maps.google.com/?cid=7507490183264796801",
    "utc_offset": -240,
    "vicinity": "1231-1233 East Passyunk Avenue, Philadelphia",
    "website": "http://garagephilly.com/",
    "html_attributions": []
  },
  {
    "_id": "5709d94d85db6f029bff9e7d",
    "name": "Hop Sing Laundromat",
    "catagorylevel1": "Drink",
    "adress": "1029 Race St, Philadelphia, PA 19107",
    "neighborhood": "Olde City",
    "lat": "39.9555162",
    "long": "-75.1569554",
    "distancefromlocation": 1366,
    "travelTime": {
      "text": "23 mins",
      "value": 1405
    },
    "distance": {
      "text": "1.1 mi",
      "value": 1835
    },
    "googlePlaceId": "ChIJifv3WSrGxokR5zgPectkymI",
    "address_components": [
      {
        "long_name": "1029",
        "short_name": "1029",
        "types": [
          "street_number"
        ]
      },
      {
        "long_name": "Race Street",
        "short_name": "Race St",
        "types": [
          "route"
        ]
      },
      {
        "long_name": "Center City",
        "short_name": "Center City",
        "types": [
          "neighborhood",
          "political"
        ]
      },
      {
        "long_name": "Philadelphia",
        "short_name": "Philadelphia",
        "types": [
          "locality",
          "political"
        ]
      },
      {
        "long_name": "Philadelphia County",
        "short_name": "Philadelphia County",
        "types": [
          "administrative_area_level_2",
          "political"
        ]
      },
      {
        "long_name": "Pennsylvania",
        "short_name": "PA",
        "types": [
          "administrative_area_level_1",
          "political"
        ]
      },
      {
        "long_name": "United States",
        "short_name": "US",
        "types": [
          "country",
          "political"
        ]
      },
      {
        "long_name": "19107",
        "short_name": "19107",
        "types": [
          "postal_code"
        ]
      }
    ],
    "adr_address": "<span class=\"street-address\">1029 Race St</span>, <span class=\"locality\">Philadelphia</span>, <span class=\"region\">PA</span> <span class=\"postal-code\">19107</span>, <span class=\"country-name\">USA</span>",
    "formatted_address": "1029 Race St, Philadelphia, PA 19107, USA",
    "geometry": {
      "location": {
        "lat": 39.95568169999999,
        "lng": -75.15686579999999
      },
      "viewport": {
        "south": 39.95535635,
        "west": -75.15698325,
        "north": 39.95579014999999,
        "east": -75.15651345000003
      }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "e9bfaf236e907f3f40ccb73e5a28c08b7b081460",
    "opening_hours": {
      "open_now": false,
      "periods": [
        {
          "close": {
            "day": 2,
            "time": "2100",
            "hours": 21,
            "minutes": 0,
            "nextDate": 1473210000000
          },
          "open": {
            "day": 2,
            "time": "1700",
            "hours": 17,
            "minutes": 0,
            "nextDate": 1473195600000
          }
        },
        {
          "close": {
            "day": 3,
            "time": "2100",
            "hours": 21,
            "minutes": 0,
            "nextDate": 1472691600000
          },
          "open": {
            "day": 3,
            "time": "1700",
            "hours": 17,
            "minutes": 0,
            "nextDate": 1472677200000
          }
        },
        {
          "close": {
            "day": 4,
            "time": "2100",
            "hours": 21,
            "minutes": 0,
            "nextDate": 1472778000000
          },
          "open": {
            "day": 4,
            "time": "1700",
            "hours": 17,
            "minutes": 0,
            "nextDate": 1472763600000
          }
        },
        {
          "close": {
            "day": 5,
            "time": "2100",
            "hours": 21,
            "minutes": 0,
            "nextDate": 1472864400000
          },
          "open": {
            "day": 5,
            "time": "1700",
            "hours": 17,
            "minutes": 0,
            "nextDate": 1472850000000
          }
        },
        {
          "close": {
            "day": 6,
            "time": "2100",
            "hours": 21,
            "minutes": 0,
            "nextDate": 1472950800000
          },
          "open": {
            "day": 6,
            "time": "1700",
            "hours": 17,
            "minutes": 0,
            "nextDate": 1472936400000
          }
        }
      ],
      "weekday_text": [
        "Monday: Closed",
        "Tuesday: 5:00 – 9:00 PM",
        "Wednesday: 5:00 – 9:00 PM",
        "Thursday: 5:00 – 9:00 PM",
        "Friday: 5:00 – 9:00 PM",
        "Saturday: 5:00 – 9:00 PM",
        "Sunday: Closed"
      ]
    },
    "photos": [
      {
        "height": 3264,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/101810068829626301924/photos\">Austin Graff</a>"
        ],
        "width": 2448
      }
    ],
    "place_id": "ChIJifv3WSrGxokR5zgPectkymI",
    "price_level": 2,
    "rating": 4.1,
    "reference": "CnRmAAAAQJSKXSxDQl-XXbWFi2DfMJNeTfPVO8-zoI9bk-JNk6fe4urn3hm1elcDTlo8vJH1QwszGpDqteqs4-ZAn29cXJOIaGu4ATaRQsQL4MmxWMtBilIW-9uh3lB3SlkfE8xXSbISVDMyh2rekkkdLPzerBIQ7mU4gbXTZPmnS8Tgp1oK6BoUEDtNWpNjt3Zc7aYo7z0PnuER4hM",
    "reviews": [
      {
        "aspects": [
          {
            "rating": 2,
            "type": "overall"
          }
        ],
        "author_name": "Rita M",
        "author_url": "https://plus.google.com/112203294384501474372",
        "language": "en",
        "profile_photo_url": "//lh3.googleusercontent.com/-3FTluiV9fwk/AAAAAAAAAAI/AAAAAAAAMMU/tQCvMIofmqU/photo.jpg",
        "rating": 4,
        "text": "Wanting to maintain the prohibition experience, the doorman was incredibly cold and rude. There is a dress code, no shorts (for men) or trainers. Strict no cell phone policy. The venue itself is stunning. Lots of cool decor. The drinks are expensive. We were told it is a 2 drink minimum per person. Be warned they are not cheap. Would def return for a date or nice night and out.",
        "time": 1471216388
      },
      {
        "aspects": [
          {
            "rating": 3,
            "type": "overall"
          }
        ],
        "author_name": "Nate Archibald",
        "author_url": "https://plus.google.com/101066767095374750671",
        "language": "en",
        "profile_photo_url": "//lh4.googleusercontent.com/-r0cbpGy791o/AAAAAAAAAAI/AAAAAAAAXD8/YqDh9xU48kA/photo.jpg",
        "rating": 5,
        "text": "This place is wonderful.  A unique experience that transcends the typical.   I really enjoyed the handcrafted cocktails but my favorite part was not knowing what to expect.  A real pleasure and I will certainly return when I'm in Philly again.  Highly recommended.",
        "time": 1466090795
      },
      {
        "aspects": [
          {
            "rating": 0,
            "type": "overall"
          }
        ],
        "author_name": "Julia Dennis",
        "author_url": "https://plus.google.com/101209637943555603041",
        "language": "en",
        "rating": 1,
        "text": "At Hop Sing tonight I observed the gentleman at the door let a couple inside that was wearing open toe sneakers and jeans but refuse service to my fiancé because his \"pants were too tight\". Absolutely ridiculous. We were well dressed, wore closed toe dress shoes, and were looking forward to having a few drinks at this elusive bar. The gentleman at the gate kept referring to my fiancé's pants as \"tights\" and insisted that men were not allowed to come in wearing tights (for clarification he was not; they were dress pants). I was, however, amazed to observe such a clearly regressive and anti-LGBT sentiment being echoed in the most progressive city I know. We went down the road to Charlie was a Sinner instead and had a wonderful time. We will not be back to Hop Sing",
        "time": 1471700129
      },
      {
        "aspects": [
          {
            "rating": 3,
            "type": "overall"
          }
        ],
        "author_name": "Tajee B",
        "author_url": "https://plus.google.com/107108631226876998316",
        "language": "en",
        "profile_photo_url": "//lh3.googleusercontent.com/-PFfxs9K4IbQ/AAAAAAAAAAI/AAAAAAAAAJ0/f_qpS7NYmd8/photo.jpg",
        "rating": 5,
        "text": "This is a very upscale speakeasy.  First of, it's just the door. No sign no indication that it's a bar. You ring the doorbell an Asian gentleman with really nice glasses comes out and ask you questions. He'll ask you questions like how do you know about this place , are you looking for someone, are you lost? If you're not dressed well, you will not get in.\n\nOnce you're in, it is a very seductive bar with nice cocktails. The cocktails are a little bit expensive but they're very tasty and well worth it. If you have some money to blow I suggest you go ahead get really nicely dressed and go to this bar.",
        "time": 1470064658
      },
      {
        "aspects": [
          {
            "rating": 3,
            "type": "overall"
          }
        ],
        "author_name": "Evan T",
        "author_url": "https://plus.google.com/102580237429212790863",
        "language": "en",
        "profile_photo_url": "//lh4.googleusercontent.com/-lQEe8Km3F9E/AAAAAAAAAAI/AAAAAAAALQA/4ETszY93oZg/photo.jpg",
        "rating": 5,
        "text": "Best drinks in the city without it being a typical bar. The place is modeled after a speakeasy so you won't be able to spot it from the street. Great atmosphere which is bolstered by strict rules against talking on cell phones, behavior (if you are too loud they will ask you to keep it down or tell you to leave) and a dress code. \n\n",
        "time": 1465259585
      }
    ],
    "scope": "GOOGLE",
    "types": [
      "laundry",
      "point_of_interest",
      "establishment"
    ],
    "url": "https://maps.google.com/?cid=7118612986084669671",
    "utc_offset": -240,
    "vicinity": "1029 Race Street, Philadelphia",
    "website": "http://www.hopsinglaundromat.com/",
    "html_attributions": []
  },
  {
    "_id": "5709d94d85db6f029bff9ea4",
    "name": "Barcade",
    "catagorylevel1": "Drink",
    "adress": "1114 Frankford Ave, Philadelphia, PA 19125",
    "neighborhood": "Fishtown",
    "lat": "39.9674516",
    "long": "-75.1346252",
    "distancefromlocation": 966,
    "travelTime": {
      "text": "15 mins",
      "value": 927
    },
    "distance": {
      "text": "0.8 mi",
      "value": 1299
    },
    "googlePlaceId": "ChIJ595L92jIxokRany45-G9urw",
    "address_components": [
      {
        "long_name": "1114",
        "short_name": "1114",
        "types": [
          "street_number"
        ]
      },
      {
        "long_name": "Frankford Avenue",
        "short_name": "Frankford Ave",
        "types": [
          "route"
        ]
      },
      {
        "long_name": "Fishtown",
        "short_name": "Fishtown",
        "types": [
          "neighborhood",
          "political"
        ]
      },
      {
        "long_name": "Philadelphia",
        "short_name": "Philadelphia",
        "types": [
          "locality",
          "political"
        ]
      },
      {
        "long_name": "Philadelphia County",
        "short_name": "Philadelphia County",
        "types": [
          "administrative_area_level_2",
          "political"
        ]
      },
      {
        "long_name": "Pennsylvania",
        "short_name": "PA",
        "types": [
          "administrative_area_level_1",
          "political"
        ]
      },
      {
        "long_name": "United States",
        "short_name": "US",
        "types": [
          "country",
          "political"
        ]
      },
      {
        "long_name": "19125",
        "short_name": "19125",
        "types": [
          "postal_code"
        ]
      }
    ],
    "adr_address": "<span class=\"street-address\">1114 Frankford Ave</span>, <span class=\"locality\">Philadelphia</span>, <span class=\"region\">PA</span> <span class=\"postal-code\">19125</span>, <span class=\"country-name\">USA</span>",
    "formatted_address": "1114 Frankford Ave, Philadelphia, PA 19125, USA",
    "formatted_phone_number": "(215) 634-4400",
    "geometry": {
      "location": {
        "lat": 39.9674476,
        "lng": -75.13468849999998
      },
      "viewport": {
        "south": 39.96744705,
        "west": -75.13482175000001,
        "north": 39.96744924999999,
        "east": -75.13428875
      }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "b39d0f7b68938fda1eb2d50dec36764a533c9ff6",
    "international_phone_number": "+1 215-634-4400",
    "opening_hours": {
      "open_now": false,
      "periods": [
        {
          "close": {
            "day": 1,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1473055200000
          },
          "open": {
            "day": 0,
            "time": "1200",
            "hours": 12,
            "minutes": 0,
            "nextDate": 1473004800000
          }
        },
        {
          "close": {
            "day": 2,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1473141600000
          },
          "open": {
            "day": 1,
            "time": "1500",
            "hours": 15,
            "minutes": 0,
            "nextDate": 1473102000000
          }
        },
        {
          "close": {
            "day": 3,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1473228000000
          },
          "open": {
            "day": 2,
            "time": "1500",
            "hours": 15,
            "minutes": 0,
            "nextDate": 1473188400000
          }
        },
        {
          "close": {
            "day": 4,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1472709600000
          },
          "open": {
            "day": 3,
            "time": "1500",
            "hours": 15,
            "minutes": 0,
            "nextDate": 1472670000000
          }
        },
        {
          "close": {
            "day": 5,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1472796000000
          },
          "open": {
            "day": 4,
            "time": "1500",
            "hours": 15,
            "minutes": 0,
            "nextDate": 1472756400000
          }
        },
        {
          "close": {
            "day": 6,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1472882400000
          },
          "open": {
            "day": 5,
            "time": "1200",
            "hours": 12,
            "minutes": 0,
            "nextDate": 1472832000000
          }
        },
        {
          "close": {
            "day": 0,
            "time": "0200",
            "hours": 2,
            "minutes": 0,
            "nextDate": 1472968800000
          },
          "open": {
            "day": 6,
            "time": "1200",
            "hours": 12,
            "minutes": 0,
            "nextDate": 1472918400000
          }
        }
      ],
      "weekday_text": [
        "Monday: 3:00 PM – 2:00 AM",
        "Tuesday: 3:00 PM – 2:00 AM",
        "Wednesday: 3:00 PM – 2:00 AM",
        "Thursday: 3:00 PM – 2:00 AM",
        "Friday: 12:00 PM – 2:00 AM",
        "Saturday: 12:00 PM – 2:00 AM",
        "Sunday: 12:00 PM – 2:00 AM"
      ]
    },
    "photos": [
      {
        "height": 864,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/100805785395923438332/photos\">Barcade</a>"
        ],
        "width": 1296
      },
      {
        "height": 576,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/100805785395923438332/photos\">Barcade</a>"
        ],
        "width": 864
      },
      {
        "height": 518,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/100805785395923438332/photos\">Barcade</a>"
        ],
        "width": 800
      },
      {
        "height": 1944,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/112213799343173532608/photos\">Mike Stich</a>"
        ],
        "width": 2592
      },
      {
        "height": 864,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/100805785395923438332/photos\">Barcade</a>"
        ],
        "width": 576
      },
      {
        "height": 5344,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/104890601473266287086/photos\">Scott Cover</a>"
        ],
        "width": 3006
      },
      {
        "height": 2432,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/118201447512597066585/photos\">Chris Waasdorp</a>"
        ],
        "width": 4320
      },
      {
        "height": 864,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/100805785395923438332/photos\">Barcade</a>"
        ],
        "width": 1296
      },
      {
        "height": 864,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/100805785395923438332/photos\">Barcade</a>"
        ],
        "width": 1296
      },
      {
        "height": 2988,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/115089017996120152352/photos\">Alexandra Mays</a>"
        ],
        "width": 5312
      }
    ],
    "place_id": "ChIJ595L92jIxokRany45-G9urw",
    "price_level": 1,
    "rating": 4.3,
    "reference": "CmRbAAAAeE8pHxgywPTnJTUaPLx85S2gm7NabH9O2ym_ZaOcSzo3y6jOtRQpxqqD1E8L-OB21IjFlHUSJYM2se44mXX4AakG4uO2ZH1oRSDMDP8PBwtFXUBvMkZ0zkfOXhlAt4avEhA5mx3RkcpcRzNouFnZA5i0GhRuCeakn_aFNXvg4b1pzs4wQQ9fQQ",
    "reviews": [
      {
        "aspects": [
          {
            "rating": 3,
            "type": "overall"
          }
        ],
        "author_name": "Derek Nordlund",
        "author_url": "https://plus.google.com/111353973353891029231",
        "language": "en",
        "profile_photo_url": "//lh5.googleusercontent.com/-CWropOc0fRs/AAAAAAAAAAI/AAAAAAAAAB0/hnuhAkr67vA/photo.jpg",
        "rating": 5,
        "text": "Like a page straight from nostalgia, this place is everything a younger me wants but with great craft beer.  It's amazing old arcade games, all in working order, with a huge craft beer list that is constantly updated.  They go a bit beyond your typical bar food.  My last trip was $3 tacos, about 5 different types to select from including veggie and they have $1 tacos on, I believe, Mondays.  It can get a bit crowded on Friday and Saturday nights, so if you want to avoid the crowds and just play some awesome arcades and drink some beer then be prepared to clear out around 9ish.",
        "time": 1470768338
      },
      {
        "aspects": [
          {
            "rating": 3,
            "type": "overall"
          }
        ],
        "author_name": "Joe Sgro",
        "author_url": "https://plus.google.com/103262598098547007953",
        "language": "en",
        "profile_photo_url": "//lh4.googleusercontent.com/-mRWlkyHVD5c/AAAAAAAAAAI/AAAAAAAACww/cB736DDJxB0/photo.jpg",
        "rating": 5,
        "text": "The best game line-up of any of the Barcade locations in my opinion.  Beer selection is phenomenal as well.  The sandwiches are also really good, I was blown away the first time I ate here and haven't been let down on later visits.  Only issues are it gets super crowded at times, and it always seems like the game I am most excited to play (last time it was BurgerTime) is not working when I'm there.",
        "time": 1468003754
      },
      {
        "aspects": [
          {
            "rating": 2,
            "type": "overall"
          }
        ],
        "author_name": "George Wells",
        "author_url": "https://plus.google.com/118042871570134135672",
        "language": "en",
        "profile_photo_url": "//lh5.googleusercontent.com/-jGLOnxayuWw/AAAAAAAAAAI/AAAAAAAAEiI/6xy6KI_r4zs/photo.jpg",
        "rating": 4,
        "text": "Excellent beer selection and fun retro games. Fun times are had in 3+ groups. Expect a crowd and wait for drink ordered and games on the weekends. Enjoyed the layout, size, and service of the Jersey City location better. ",
        "time": 1465155326
      },
      {
        "aspects": [
          {
            "rating": 2,
            "type": "overall"
          }
        ],
        "author_name": "Michael N",
        "author_url": "https://plus.google.com/116079407214484183950",
        "language": "en",
        "profile_photo_url": "//lh5.googleusercontent.com/-NSmu4_kmgkg/AAAAAAAAAAI/AAAAAAAABQg/y_KFTJqJWZQ/photo.jpg",
        "rating": 4,
        "text": "Cool concept. Great beer list. Excellent spot for a group hang. Nice little outdoor patio area. Food is decent too. ",
        "time": 1466014033
      },
      {
        "aspects": [
          {
            "rating": 3,
            "type": "overall"
          }
        ],
        "author_name": "Lily de la Torre",
        "author_url": "https://plus.google.com/104302264587788132938",
        "language": "en",
        "profile_photo_url": "//lh3.googleusercontent.com/-gqSXHDv795Q/AAAAAAAAAAI/AAAAAAAAAFI/Uxqj8oJ_4Mw/photo.jpg",
        "rating": 5,
        "text": "There's a great beer list and vegan food options. Most games are 25 cents per play. When a game ate my coins, the manager was very quick to respond and gave me coins back. It's a great place to go alone or with friends. ",
        "time": 1466872944
      }
    ],
    "scope": "GOOGLE",
    "types": [
      "bar",
      "point_of_interest",
      "establishment"
    ],
    "url": "https://maps.google.com/?cid=13599390802751552618",
    "utc_offset": -240,
    "vicinity": "1114 Frankford Avenue, Philadelphia",
    "website": "http://www.barcadephiladelphia.com",
    "html_attributions": []
  }
]
},{}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/DATA/LocationsMock_food.json":[function(require,module,exports){
module.exports=[{
    "_id": "5709d94d85db6f029bff9e74",
    "name": "Sketch Burger",
    "catagorylevel1": "Food",
    "adress": "413 E Girard Ave Philadelphia PA 19125 United States",
    "neighborhood": "Fishtown",
    "lat": "39.9705792",
    "long": "-75.1301184",
    "distancefromlocation": 1475,
    "travelTime": {
      "text": "22 mins",
      "value": 1318
    },
    "distance": {
      "text": "1.1 mi",
      "value": 1808
    }
  },
  {
    "_id": "5709d94d85db6f029bff9e8f",
    "name": "Capogiro Gelato",
    "catagorylevel1": "Food",
    "adress": "233 Chestnut Street, Philadelphia, PA",
    "neighborhood": "Washingtion Square",
    "lat": "39.948822",
    "long": "-75.145358",
    "distancefromlocation": 1608,
    "travelTime": {
      "text": "23 mins",
      "value": 1351
    },
    "distance": {
      "text": "1.1 mi",
      "value": 1807
    }
  },
  {
    "_id": "5709d94d85db6f029bff9e8e",
    "name": "Philly Flavors",
    "catagorylevel1": "Food",
    "adress": "2004 Fairmount Ave, Philadelphia, PA 19130",
    "neighborhood": "Fairmount",
    "lat": "39.967087",
    "long": "-75.1705126",
    "distancefromlocation": 2258,
    "travelTime": {
      "text": "31 mins",
      "value": 1833
    },
    "distance": {
      "text": "1.5 mi",
      "value": 2342
    }
  },
  {
    "_id": "5709d94d85db6f029bff9e73",
    "name": "Pizza Brain/Little Baby's",
    "catagorylevel1": "Food",
    "adress": "2313 Frankford Ave Philadelphia PA 19125 United States",
    "neighborhood": "Northern Liberties",
    "lat": "39.9806746",
    "long": "-75.1280968",
    "distancefromlocation": 2388,
    "travelTime": {
      "text": "36 mins",
      "value": 2147
    },
    "distance": {
      "text": "1.8 mi",
      "value": 2889
    }
  },
  {
    "_id": "5709d94d85db6f029bff9e88",
    "name": "Black N Brew",
    "catagorylevel1": "Food",
    "adress": "523 E Passyunk Ave, Philadelphia, PA 19147",
    "neighborhood": "Passyunk Square",
    "lat": "39.941761",
    "long": "-75.1503928",
    "distancefromlocation": 2442,
    "travelTime": {
      "text": "32 mins",
      "value": 1896
    },
    "distance": {
      "text": "1.6 mi",
      "value": 2548
    }
  },
  {
    "_id": "5709d94d85db6f029bff9e78",
    "name": "Hai Street Kitchen & Co.",
    "catagorylevel1": "Food",
    "adress": "32 S 18th St Philadelphia PA 19103 United States",
    "neighborhood": "Center City, Rittenhouse ",
    "lat": "39.9521638",
    "long": "-75.1704619",
    "distancefromlocation": 2535,
    "travelTime": {
      "text": "44 mins",
      "value": 2664
    },
    "distance": {
      "text": "2.1 mi",
      "value": 3450
    }
  },
  {
    "_id": "5709d94d85db6f029bff9e76",
    "name": "Tortilleria San Roman",
    "catagorylevel1": "Food",
    "adress": "951 S 9th St Philadelphia PA 19147 United States",
    "neighborhood": "Italian Market",
    "lat": "39.9376396",
    "long": "-75.157989",
    "distancefromlocation": 3071,
    "travelTime": {
      "text": "44 mins",
      "value": 2655
    },
    "distance": {
      "text": "2.2 mi",
      "value": 3550
    }
  },
  {
    "_id": "5709d94d85db6f029bff9e6f",
    "name": "Hardena",
    "catagorylevel1": "Food",
    "adress": "754 S Hicks St, Philadelphia, PA 19145",
    "neighborhood": "South Philly",
    "lat": "39.941686",
    "long": "-75.1684184",
    "distancefromlocation": 3149,
    "travelTime": {
      "text": "53 mins",
      "value": 3185
    },
    "distance": {
      "text": "2.6 mi",
      "value": 4198
    }
  },
  {
    "_id": "5709d94d85db6f029bff9e93",
    "name": "1st Oriental Supermarket",
    "catagorylevel1": "Food",
    "adress": "1111 S 6th St Philadelphia, PA 19147",
    "neighborhood": "Grduate Hospital",
    "lat": "39.9340158",
    "long": "-75.1536851",
    "distancefromlocation": 3343,
    "travelTime": {
      "text": "44 mins",
      "value": 2657
    },
    "distance": {
      "text": "2.2 mi",
      "value": 3556
    }
  },
  {
    "_id": "5709d94d85db6f029bff9e80",
    "name": "Federal Donuts",
    "catagorylevel1": "Food",
    "adress": "1219 S 2nd St Philadelphia PA 19147 United States",
    "neighborhood": "Penns Port",
    "lat": "39.9322098",
    "long": "-75.1474603",
    "distancefromlocation": 3460,
    "travelTime": {
      "text": "46 mins",
      "value": 2752
    },
    "distance": {
      "text": "2.3 mi",
      "value": 3704
    }
  },
  {
    "_id": "5709d94d85db6f029bff9e71",
    "name": "Nam Son Bakery",
    "catagorylevel1": "Food",
    "adress": "1601 Washington Ave Philadelphia PA 19146 United States",
    "neighborhood": "Graduate Hospital",
    "lat": "39.9392094",
    "long": "-75.170264",
    "distancefromlocation": 3461,
    "travelTime": {
      "text": "58 mins",
      "value": 3470
    },
    "distance": {
      "text": "2.8 mi",
      "value": 4579
    }
  },
  {
    "_id": "5709d94d85db6f029bff9e72",
    "name": "Breezy's Cafe",
    "catagorylevel1": "Food",
    "adress": "1200 Point Breeze Ave Philadelphia PA 19146 United States",
    "neighborhood": "Point Breeze",
    "lat": "39.9372372",
    "long": "-75.1771073",
    "distancefromlocation": 4014,
    "travelTime": {
      "text": "1 hour 7 mins",
      "value": 4031
    },
    "distance": {
      "text": "3.3 mi",
      "value": 5324
    }
  },
  {
    "_id": "5709d94d85db6f029bff9e81",
    "name": "Bing Bing Dim Sum",
    "catagorylevel1": "Food",
    "adress": "1648 E Passyunk Ave Philadelphia PA 19148 United States",
    "neighborhood": "Passyunk Square",
    "lat": "39.928959",
    "long": "-75.1647092",
    "distancefromlocation": 4183,
    "travelTime": {
      "text": "56 mins",
      "value": 3363
    },
    "distance": {
      "text": "2.8 mi",
      "value": 4479
    }
  },
  {
    "_id": "5709d94d85db6f029bff9ea7",
    "name": "Cinemug",
    "catagorylevel1": "Food",
    "adress": "s 19148, 1607 S Broad St, Philadelphia, PA 19148",
    "neighborhood": "Newbold",
    "lat": "39.9301839",
    "long": "-75.168006",
    "distancefromlocation": 4187,
    "travelTime": {
      "text": "59 mins",
      "value": 3541
    },
    "distance": {
      "text": "2.9 mi",
      "value": 4729
    }
  },
  {
    "_id": "5709d94d85db6f029bff9ea0",
    "name": "K & A Sandwiches & Grocery",
    "catagorylevel1": "Food",
    "adress": "1439 S 20th St, Philadelphia, PA 19146",
    "neighborhood": "Point Breeze",
    "lat": "39.9330012",
    "long": "-75.1774748",
    "distancefromlocation": 4385,
    "travelTime": {
      "text": "1 hour 9 mins",
      "value": 4151
    },
    "distance": {
      "text": "3.4 mi",
      "value": 5497
    }
  },
  {
    "_id": "5709d94d85db6f029bff9e6e",
    "name": "Los Gallos",
    "catagorylevel1": "Food",
    "adress": "951 Wolf St Philadelphia PA 19148 United States",
    "neighborhood": "South Philly",
    "lat": "39.921178",
    "long": "-75.1632599",
    "distancefromlocation": 4942,
    "travelTime": {
      "text": "1 hour 5 mins",
      "value": 3908
    },
    "distance": {
      "text": "3.3 mi",
      "value": 5232
    }
  }]
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

MapCtrl.$inject = ["$rootScope", "$scope", "$timeout", "$log", "$ionicLoading", "AppSettings", "GMap", "LocationsService", "$ionicSlideBoxDelegate", "$ionicGesture"];
var controllersModule = require('./_index');


/**
 * @ngInject
 */
function MapCtrl($rootScope, $scope, $timeout, $log, $ionicLoading, AppSettings, GMap, LocationsService, $ionicSlideBoxDelegate, $ionicGesture) {

    $log = $log.getInstance("MapCtrl", true);
    
 	  // ViewModel
  	var vm = this;
    /* =======================================================================
      VM defaults   
    ========================================================================== */
    var currentCenter = $rootScope.currentPosition.coords;

    $rootScope.activeLocation = null;

    /* Google Map ===================================================== */
    vm.gmap = new GMap({
                        zoom:   13, 
                        radius: vm.this_radius, 
                        styles: AppSettings.GMAP_DEFAULT.THEME.light
                      });    
    $rootScope.gmap = vm.gmap;
    
    vm.gmap.height = 575,
    vm.gmap.markers = [];
    vm.gmap.routes = []; 

     // drop marker on current position
    vm.gmap.dropMarker({
              map:    vm.gmap.map,
              center: {lat: currentCenter.latitude, 
                       lng: currentCenter.longitude 
                      },
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
    vm.discoverCatsExpanded = false;
    

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
      shown:      false,
      detailView: false,
      meta:       {
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
          vm.discoverCatsExpanded = false;
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
                          lng: parseFloat(localle.long)
                        },
                        title:     localle.name,
                        map:       vm.gmap.map,
                        opacity:   0,
                        clickable: false,
                        // icon:      localle.icon
                      });

                  marker.addListener('click',function(){
                     $scope.$broadcast('marker:clicked', localle);
                  });

                vm.gmap.markers.push(marker);
    
          });

        // return vm.markers;
    };//_setMarkers


    var _setupSlideDrag = function(dir, indx) {
      
        $ionicGesture.on('drag'+dir, 
              function () { 
                $scope.$apply(function() {
                  vm.slider.detailView = dir =='down'? true : false;
                });

              }, 
              angular.element(
                  document.querySelectorAll('.map--slider-location')[indx]
                )
            );
    }



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
      $rootScope.activeLocation = location;

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
        var slideEL = angular.element(document.querySelectorAll('.map--slider-location')[indx]);
        var slider_location = vm.locations_by_distance[indx];
        //set active slide
        vm.locations_by_distance.map(function(location) { location.isActive = false; return location;});
        slider_location.isActive = true;

        _showRouteTo(slider_location);
        _fitInMapView(slider_location);

        // add new vaues to slider model
        angular.extend(vm.slider,{
          shown:    true,
          isActive: false,
          meta:     {
            category:     slider_location.catagorylevel1,
            travelTime:   slider_location.travelTime,
            neighborhood: slider_location.neighborhood
          }
        });
        
        
        _setupSlideDrag('down', indx);
        _setupSlideDrag('up', indx);

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
          _setupSlideDrag('down', 0);
          _setupSlideDrag('up', 0);

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
            animation: google.maps.Animation.DROP,
            icon:       _markerSettings.icon
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
modelsModule.factory('Location', ["$rootScope", "$log", "$q", "$filter", function($rootScope, $log, $q, $filter) {
  $log = $log.getInstance('Location', true);

  function Location(LocationData){
    angular.extend(this, LocationData);
    $log.log('{name}', this);
  }


  Location.responseTransformer = function (responseData) {
    $log.log('resoponseTransformer for {length} items', responseData.locations);
    
    // if(responseData.locations){
      
    //   // transfrom the response data into an array of promises 
    //   // to be fullfilled wiht async Loaction methods 
    //   return responseData.locations.map(function(data) {
    //       // create a new loaction 
    //       // and perform sequential async functions
    //       return new Location(data)
    //                   .setTravelTime()
    //                   .then(function(_l) {
    //                       return _l.setGooglePlaceDetails();
    //                   })
    //                   .then(function(_LData) {
    //                     var dfd = $q.defer(); 
    //                     dfd.resolve(_LData);
    //                     return dfd.promise;
    //                   });
        
    //   });
    // }

    return responseData.map(function(location){
      return new Location(location);
    });      
  }




  Location.prototype.setTravelTime = function() {
      $log.log('setTravelTime:{name}', this);
      
      var _location = this;
      var deferred  = $q.defer();

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
          _location.distance   = response.rows[0].elements[0].distance;
         	deferred.resolve(_location);
         // $log.debug("{name} - {travelTime}", _location);
          
       });

       
       return deferred.promise;

  }


  Location.prototype.setGooglePlaceID = function() {

    $log.log('setGooglePlaceID:{name}', this);

      var _location     = this,
          deferred      = $q.defer(),
          PlacesService = new google.maps.places.PlacesService($rootScope.gmap.map),
          _searchQuery  = {query:   _location.name, 
                          location: new google.maps.LatLng(parseFloat(_location.lat), parseFloat(_location.long)),
                          radius:   500};


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
    var _location      = this,
         deferred      = $q.defer(),
         PlacesService = new google.maps.places.PlacesService($rootScope.gmap.map);

         this.setGooglePlaceID().then(function(_place) {

          PlacesService.getDetails( {placeId:_place.googlePlaceId}, 
                    function(place, status) {
                        if (status == google.maps.places.PlacesServiceStatus.OK) {
                          deferred.resolve(angular.extend(_location, place));
                        }
                 });
           
         });
        

        return deferred.promise;
  };



  Location.prototype.todaysHours = function(openClose) {
    var d = new Date(),
        weekday= d.getDay();

      return $filter('date')(new Date(this.opening_hours.periods[weekday][openClose].nextDate), 'ha').replace('M','');

  }

  // Location.build = function(lData) {
  //   $log.log('build:{name}', lData);
    
  //   return new Location(lData);
  // }

   

  
 
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

LocationsService.$inject = ["$log", "Yocal", "Location", "$q", "$timeout"];
var servicesModule = require('./_index.js');



/**
 * @ngInject
 */
function LocationsService($log, Yocal, Location, $q, $timeout) {
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

Yocal.$inject = ["$q", "$http", "AppSettings", "$log", "$timeout"];
var servicesModule = require('./_index.js');
var LocationsMock = {
  drink: require('../DATA/LocationsMock_drink.json'),
  food:  require('../DATA/LocationsMock_food.json')
};

/**
 * @ngInject
 */
function Yocal($q, $http, AppSettings, $log, $timeout) {

  var service = {};
  $log = $log.getInstance("YocalService");

    

  service.get = function( getData ) {
    var deferred = $q.defer();
    $timeout(function() {
      deferred.resolve(LocationsMock[getData.category.toLowerCase()]);  
    }, 1000);

    // listByDistanceCat/Food/8000/39.937893/-75.1689347
   // $http.get(AppSettings.yocalAPI.base+'listByDistanceCat/'+getData.category+'/'+getData.radius+'/'+getData.lat+'/'+getData.lng)
   //      .success(function(data) {
   //        $log.debug('found {length} '+getData.category+' spots within '+getData.radius+' meters of '+getData.lat+','+getData.lng, data.locations);
   //        data.radius = getData.radius;
   //        deferred.resolve(data);
   //      })
   //      .error(function(err, status) {
   //        $log.warn('Unable to get location: ' + err.message);
   //        deferred.reject(err, status);
   //      });
   
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

},{"../DATA/LocationsMock_drink.json":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/DATA/LocationsMock_drink.json","../DATA/LocationsMock_food.json":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/DATA/LocationsMock_food.json","./_index.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/_index.js":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItYW5pbWF0ZS9hbmd1bGFyLWFuaW1hdGUubWluLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvYm93ZXJfY29tcG9uZW50cy9pb25pYy1hZHZhbmNlZC1jYXJvdXNlbC9zcmMvYWR2YW5jZWQtY2Fyb3VzZWwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9ib3dlcl9jb21wb25lbnRzL25nLWtub2IvZGlzdC9uZy1rbm9iLm1pbi5qcyIsInd3dy9qcy9EQVRBL0xvY2F0aW9uc01vY2tfZHJpbmsuanNvbiIsInd3dy9qcy9EQVRBL0xvY2F0aW9uc01vY2tfZm9vZC5qc29uIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvYXBwLW1haW4uanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb25zdGFudHMuZGV2ZWxvcG1lbnQuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9BcHBDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvQnJvd3NlQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL0Nvbm5lY3RDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvTG9naW5DdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvTWFwQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2RpcmVjdGl2ZXMvX2luZGV4LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvZGlyZWN0aXZlcy9tQXBwTG9hZGluZ0RpcmVjdGl2ZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL21vZGVscy9HTWFwLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvbW9kZWxzL0xvY2F0aW9uTW9kZWwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9tb2RlbHMvX2luZGV4LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvb25fY29uZmlnLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvb25fcnVuLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvQ3VycmVudENvb3Jkc1NlcnZpY2UuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9Mb2NhdGlvbnNTZXJ2aWNlLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvWW9jYWwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9faW5kZXguanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9leGFtcGxlLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvdXRpbHMvRGF0ZVRpbWUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9sb2dnaW5nL0xvZ0RlY29yYXRvci5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL2xvZ2dpbmcvTG9nRW5oYW5jZXIuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9zdXBwbGFudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7OztBQUtBLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLGFBQWEsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxTQUFTLE9BQU8sR0FBRyxJQUFJLEdBQUcsWUFBWSxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssTUFBTSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLE9BQU8sR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLGFBQWEsRUFBRSxPQUFPLEVBQUUsUUFBUSxLQUFLLEVBQUUsTUFBTTtBQUN4Z0IsS0FBSyxFQUFFLEdBQUcsSUFBSSxFQUFFLEdBQUcsU0FBUyxPQUFPLEVBQUUsTUFBTSxRQUFRLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUUsU0FBUyxPQUFPLEVBQUUsR0FBRyxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsU0FBUyxPQUFPLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssU0FBUyxHQUFHLEVBQUUsQ0FBQyxPQUFPLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEdBQUcsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsTUFBTSxFQUFFLGNBQWMsR0FBRyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsWUFBWSxPQUFPLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFO0FBQ2xmLEVBQUUsRUFBRSxhQUFhLFVBQVUsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssTUFBTSxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLElBQUksS0FBSyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxhQUFhLElBQUksS0FBSyxFQUFFLGFBQWEsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLFNBQVMsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEtBQUssRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksS0FBSyxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU07QUFDMWYsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLFlBQVksSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxjQUFjLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxHQUFHLFNBQVMsRUFBRSxJQUFJLEtBQUssRUFBRSxJQUFJLEtBQUssT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsT0FBTyxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxPQUFPLE1BQU0sRUFBRSxFQUFFLGlCQUFpQixJQUFJLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPO0FBQ3JmLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxXQUFXLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsT0FBTyxJQUFJLEVBQUUsV0FBVyxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssSUFBSSxFQUFFLEdBQUcsSUFBSSxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsQ0FBQyxPQUFPLElBQUksR0FBRyxNQUFNLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxXQUFXLEdBQUcsY0FBYyxNQUFNLENBQUMsRUFBRSxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLFlBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxFQUFFLEdBQUcsU0FBUyxHQUFHO0FBQ3hmLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxPQUFPLE1BQU0sTUFBTSxDQUFDLE1BQU0sVUFBVSxDQUFDLEVBQUUsT0FBTyxPQUFPLE9BQU8sTUFBTSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQyxN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UUFBUSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQUUsVUFBVSxDQUFDLFFBQVEsU0FBUyxFQUFFLENBQUMsS0FBSyxLQUFLLEdBQUcsSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxlQUFlLEtBQUssSUFBSSxTQUFTLEVBQUUsV0FBVyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLEtBQUssUUFBUSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksUUFBUSxPQUFPLEtBQUssU0FBUyxLQUFLLFNBQVMsRUFBRSxFQUFFLENBQUMsT0FBTyxLQUFLLGFBQWEsS0FBSyxFQUFFLElBQUksUUFBUSxTQUFTLEVBQUUsQ0FBQyxPQUFPLEtBQUssYUFBYSxTQUFTLElBQUksVUFBVSxTQUFTLEVBQUUsQ0FBQyxPQUFPLEtBQUssYUFBYSxXQUFXLElBQUksTUFBTSxVQUFVLENBQUMsS0FBSyxLQUFLO0FBQzdnQixLQUFLLEtBQUssU0FBUyxPQUFPLFVBQVUsQ0FBQyxLQUFLLEtBQUssUUFBUSxLQUFLLEtBQUssVUFBVSxJQUFJLFVBQVUsQ0FBQyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLFNBQVMsQ0FBQyxJQUFJLE9BQU8sVUFBVSxDQUFDLEtBQUssS0FBSyxRQUFRLEtBQUssS0FBSyxTQUFTLEtBQUssU0FBUyxDQUFDLElBQUksU0FBUyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLHFCQUFxQixVQUFVLENBQUMsRUFBRSxTQUFTLE9BQU8sU0FBUyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFLEtBQUssZUFBZSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssS0FBSyxlQUFlLE9BQU8sRUFBRSxLQUFLLE9BQU8sS0FBSyxPQUFPLEtBQUssU0FBUyxpQkFBaUIsQ0FBQztBQUN6ZSxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEtBQUssU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsVUFBVSxJQUFJLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxhQUFhLElBQUksT0FBTyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxLQUFLLElBQUksRUFBRSxLQUFLLEtBQUssU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFlBQVksRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEtBQUssU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFlBQVksQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxTQUFTLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEtBQUssU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsRUFBRSxhQUFhLEVBQUUsT0FBTyxLQUFLLFNBQVM7QUFDbGdCLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE9BQU8sS0FBSyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxJQUFJLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEtBQUssU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxRQUFRLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLFdBQVcsS0FBSyxLQUFLLENBQUMsUUFBUSxhQUFhLGVBQWUsWUFBWSxZQUFZLGNBQWMsa0JBQWtCLG1CQUFtQixXQUFXLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLFNBQVMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUNuZixPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxHQUFHLFNBQVMsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLE9BQU8sSUFBSSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsS0FBSyxNQUFNLEVBQUUsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFlBQVksS0FBSyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsS0FBSyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxhQUFhLEtBQUs7QUFDeGYsR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsT0FBTyxTQUFTLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLE9BQU8sSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLE1BQU0sT0FBTyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxHQUFHLE9BQU8sRUFBRSxPQUFPLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxNQUFNLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLGNBQWMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxTQUFTLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRTtBQUNwZixFQUFFLFFBQVEsRUFBRSxTQUFTLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxPQUFPLEtBQUssRUFBRSxRQUFRLElBQUksSUFBSSxRQUFRLEVBQUUsRUFBRSxVQUFVLEdBQUcsQ0FBQyxFQUFFLE9BQU8sSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxhQUFhLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLFVBQVUsR0FBRyxFQUFFLEVBQUUsRUFBRSxTQUFTLFlBQVksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsVUFBVSxHQUFHLEdBQUcsRUFBRSxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLGVBQWUsRUFBRSxNQUFNLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxFQUFFLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRTtBQUNqZixFQUFFLFlBQVksRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEtBQUssRUFBRSxVQUFVLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxNQUFNLEVBQUUsUUFBUSxHQUFHLEVBQUUsRUFBRSxFQUFFLFFBQVEsTUFBTSxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxpQkFBaUIscUJBQXFCLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLGFBQWEsb0JBQW9CLEVBQUUsRUFBRSxJQUFJLEdBQUcsT0FBTyxHQUFHLEtBQUssRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLEVB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QUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sS0FBSyxFQUFFLEVBQUUsTUFBTSxLQUFLLElBQUksSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sSUFBSSxHQUFHLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsT0FBTyxPQUFPLEVBQUUsS0FBSyxLQUFLLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssRUFBRSxFQUFFLElBQUksR0FBRyxJQUFJLE9BQU87QUFDcmYsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssU0FBUyxRQUFRLEdBQUcsRUFBRSxFQUFFLEdBQUcsU0FBUyxRQUFRLElBQUksRUFBRSxFQUFFLFNBQVMsUUFBUSxHQUFHLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLFVBQVUsR0FBRyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksV0FBVyxJQUFJLEVBQUUsV0FBVyxxQkFBcUIsRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxlQUFlLEdBQUcsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLFlBQVksY0FBYyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxPQUFPLFNBQVMsUUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxPQUFPLFVBQVUsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxPQUFPLE9BQU8sSUFBSSxFQUFFLEVBQUUsS0FBSztBQUM3ZSxHQUFHLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxTQUFTLEdBQUcsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLEVBQUUsWUFBWSxJQUFJLEdBQUcsSUFBSSxFQUFFLEVBQUUsWUFBWSxNQUFNLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxZQUFZLFVBQVUsQ0FBQyxFQUFFLFNBQVMsY0FBYyxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksTUFBTSxJQUFJLEVBQUUsR0FBRyxXQUFXLElBQUksR0FBRyxFQUFFLEVBQUUsT0FBTyxPQUFPLEVBQUUsRUFBRSxhQUFhLFVBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsR0FBRyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLGNBQWMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRTtBQUNwZixFQUFFLEtBQUssU0FBUyxFQUFFLEdBQUcsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsSUFBSSxJQUFJLEVBQUUsV0FBVyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsR0FBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLFNBQVMsRUFBRSxRQUFRLElBQUksU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLE9BQU8sUUFBUSxTQUFTLGNBQWMsQ0FBQyxtQkFBbUIsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEtBQUssS0FBSyxDQUFDLFVBQVUsV0FBVyxrQkFBa0IsV0FBVyxZQUFZLFdBQVcsaUJBQWlCLFNBQVM7QUFDemYsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsV0FBVyxNQUFNLENBQUMsRUFBRSx1QkFBdUIsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLElBQUksRUFBRSxhQUFhLFNBQVMsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEtBQUssRUFBRSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxrQkFBa0IsS0FBSyxJQUFJLEVBQUUsa0JBQWtCLEdBQUcsRUFBRSxtQkFBbUIsS0FBSyxJQUFJLEVBQUUsbUJBQW1CLEdBQUcsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLE9BQU8sR0FBRyxHQUFHLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEdBQUcsRUFBRSxlQUFlLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLElBQUksSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRTtBQUNuZixFQUFFLE9BQU8sSUFBSSxFQUFFLEdBQUcsR0FBRyxFQUFFLE9BQU8sSUFBSSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxJQUFJLGFBQWEsRUFBRSwwQkFBMEIsRUFBRSx3QkFBd0IsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxHQUFHLEVBQUUsS0FBSyxJQUFJLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxFQUFFLGtCQUFrQixFQUFFLHdCQUF3QixFQUFFLG9CQUFvQixPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsS0FBSyxFQUFFLEdBQUcsT0FBTyxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsWUFBWTtBQUN0ZixHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUUsU0FBUyxDQUFDLElBQUksU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixHQUFHLEVBQUUsR0FBRyxFQUFFLHdCQUF3QixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxJQUFJLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLE1BQU0sVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsU0FBUyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FB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TUFBTSxRQUFRLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsT0FBTyxHQUFHLEtBQUssTUFBTSxHQUFHLEVBQUUsVUFBVSxNQUFNLEtBQUssT0FBTyxHQUFHLEVBQUUsV0FBVyxFQUFFLEdBQUcsS0FBSyxNQUFNLEdBQUcsT0FBTyxPQUFPLEVBQUUsU0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLFVBQVUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTLGdCQUFnQixFQUFFLFlBQVksaUJBQWlCLEVBQUUsTUFBTSxDQUFDLElBQUksT0FBTyxFQUFFLGNBQWMsRUFBRSxLQUFLLFNBQVMsR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxtQkFBbUIsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLFVBQVUsQ0FBQztBQUM3ZixFQUFFLEVBQUUsRUFBRSxLQUFLLFVBQVUsSUFBSSxFQUFFLFNBQVMsbUJBQW1CLEVBQUUsU0FBUyxtQkFBbUIsRUFBRSxTQUFTLGFBQWEsRUFBRSxPQUFPLEdBQUcsSUFBSSxFQUFFLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLGdCQUFnQixNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxPQUFPLElBQUksSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxVQUFVLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxVQUFVLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLGFBQWEsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLE1BQU0sU0FBUyxFQUFFO0FBQzFmLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUUsT0FBTyxNQUFNLENBQUMsTUFBTSxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsUUFBUSxJQUFJLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFXLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsU0FBUyxLQUFLLE9BQU8sSUFBSSxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLFNBQVMsR0FBRyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNO0FBQ2pmLEVBQUUsRUFBRSxFQUFFLEdBQUcsT0FBTyxFQUFFLGNBQWMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLFlBQVksQ0FBQyxFQUFFLFlBQVksT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsS0FBSyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEdBQUcsT0FBTyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLFNBQVMsY0FBYyxDQUFDLG1CQUFtQixTQUFTLEVBQUUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxZQUFZLGtCQUFrQixhQUFhLFdBQVcsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsTUFBTSxLQUFLLElBQUksSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsdUJBQXVCLEdBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUksRUFBRTtBQUN0ZixDQUFDLEdBQUcsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsT0FBTyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLGVBQWUsRUFBRSxFQUFFLEdBQUcsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLE1BQU0sS0FBSyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLE1BQU0sS0FBSyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLEtBQUssY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsU0FBUyxhQUFhLEVBQUUsRUFBRSxLQUFLLFFBQVEsR0FBRyxHQUFHLEdBQUcsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLEtBQUssVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUM7Q0FDamYsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxPQUFPLFVBQVUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLE9BQU8sTUFBTSxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsbUJBQW1CLEdBQUcsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLG1CQUFtQixhQUFhLElBQUksRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxhQUFhLElBQUksRUFBRSxFQUFFLE9BQU8sSUFBSSxJQUFJLEVBQUUsRUFBRSxPQUFPLElBQUksR0FBRyxJQUFJLEVBQUUsT0FBTyxPQUFPLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDOWUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksT0FBTyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxVQUFVLElBQUksVUFBVSxRQUFRLEdBQUcsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxFQUFFLEtBQUssVUFBVSxHQUFHLEVBQUUsV0FBVyxHQUFHLElBQUksRUFBRSxVQUFVLEVBQUUsY0FBYyxHQUFHLElBQUksRUFBRSxjQUFjLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxHQUFHLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsT0FBTyxHQUFHLGNBQWMsRUFBRSxPQUFPLEdBQUcsRUFBRSxHQUFHLFVBQVUsR0FBRyxTQUFTLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLE1BQU0sQ0FBQyxNQUFNLFVBQVUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO0FBQzFnQixDQUFDLEVBQUUsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLFNBQVMsR0FBRyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxLQUFLLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRSxLQUFLLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxFQUFFLEtBQUssS0FBSyxPQUFPLFVBQVUsQ0FBQyxJQUFJ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SUFBSSxXQUFXLFlBQVksRUFBRSxDQUFDLElBQUksS0FBSyxHQUFHLFFBQVEsYUFBYSxTQUFTLGFBQWEsU0FBUyxZQUFZLFlBQVksS0FBSyxVQUFVLFVBQVUsU0FBUyxZQUFZLFlBQVksV0FBVyxTQUFTLGFBQWEsQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sWUFBWSxhQUFhLFlBQVksYUFBYSxXQUFXLFlBQVksU0FBUyxVQUFVLGFBQWEsY0FBYyxPQUFPLEtBQUssS0FBSyxVQUFVLFFBQVEsU0FBUyxJQUFJLElBQUksTUFBTSxNQUFNLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLE9BQU8sUUFBUSxLQUFLLEtBQUssT0FBTyxLQUFLLElBQUksS0FBSyxNQUFNLE9BQU8sS0FBSyxZQUFZLGFBQWEsS0FBSyxRQUFRLEtBQUssRUFBRSxLQUFLLEtBQUssUUFBUSxLQUFLLEVBQUUsS0FBSyxPQUFPLEtBQUssUUFBUSxXQUFXLENBQUMsSUFBSSxPQUFPLEtBQUssR0FBRyxRQUFRLE9BQU8sTUFBTSxLQUFLLEtBQUssT0FBTyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsQ0FBQyxJQUFJLFlBQVksU0FBUyxLQUFLLFFBQVEsS0FBSyxFQUFFLElBQUksV0FBVyxLQUFLLGVBQWUsS0FBSyxRQUFRLFdBQVcsS0FBSyxTQUFTLEtBQUssZUFBZSxLQUFLLFFBQVEsU0FBUyxLQUFLLEtBQUssUUFBUSxNQUFNLFVBQVUsYUFBYSxLQUFLLFFBQVEsTUFBTSxNQUFNLEtBQUssUUFBUSxNQUFNLFlBQVksSUFBSSxLQUFLLGlCQUFpQixZQUFZLEtBQUssUUFBUSxXQUFXLGtCQUFrQixZQUFZLEtBQUssUUFBUSxTQUFTLGlCQUFpQixZQUFZLEtBQUssUUFBUSxTQUFTLG9CQUFvQixFQUFFLGlCQUFpQixZQUFZLGtCQUFrQixZQUFZLGlCQUFpQixZQUFZLG9CQUFvQixZQUFZLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxZQUFZLEtBQUssQ0FBQyxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsWUFBWSxFQUFFLGtCQUFrQixLQUFLLGtCQUFrQixNQUFNLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxhQUFhLEtBQUssQ0FBQyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsVUFBVSxFQUFFLG1CQUFtQixLQUFLLGtCQUFrQixLQUFLLG1CQUFtQixLQUFLLGtCQUFrQixNQUFNLEtBQUssUUFBUSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsRUFBRSxZQUFZLFdBQVcsV0FBVyxTQUFTLEtBQUssUUFBUSxLQUFLLE9BQU8saUJBQWlCLGlCQUFpQixLQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssUUFBUSxLQUFLLFdBQVcsa0JBQWtCLGtCQUFrQixLQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssUUFBUSxLQUFLLFdBQVcsaUJBQWlCLGlCQUFpQixLQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssUUFBUSxLQUFLLFdBQVcsb0JBQW9CLG9CQUFvQixLQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssUUFBUSxLQUFLLFdBQVcsS0FBSyxRQUFRLEtBQUssVUFBVSxZQUFZLEtBQUssUUFBUSxLQUFLLE1BQU0sWUFBWSxXQUFXLFdBQVcsS0FBSyxTQUFTLEtBQUssVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVcsVUFBVSxLQUFLLFVBQVUsS0FBSyxVQUFVLGtCQUFrQixrQkFBa0IsV0FBVyxXQUFXLEtBQUssUUFBUSxRQUFRLEtBQUssU0FBUyxLQUFLLFVBQVUsaUJBQWlCLGlCQUFpQixXQUFXLFdBQVcsS0FBSyxRQUFRLFFBQVEsS0FBSyxZQUFZLEtBQUssVUFBVSxvQkFBb0Isb0JBQW9CLFdBQVcsV0FBVyxLQUFLLFVBQVUsU0FBUyxTQUFTLGlCQUFpQixhQUFhLENBQUMsSUFBSSxJQUFJLEdBQUcsT0FBTyxLQUFLLFNBQVMsT0FBTyxPQUFPLEtBQUssUUFBUSxLQUFLLFFBQVEsTUFBTSxLQUFLLFNBQVMsS0FBSyxRQUFRLE1BQU0sR0FBRyxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsSUFBSSxLQUFLLE1BQU0sUUFBUSxDQUFDLEtBQUssS0FBSyxRQUFRLFVBQVUsS0FBSyxRQUFRLGFBQWEsQ0FBQyxJQUFJLFNBQVMsR0FBRyxLQUFLLFFBQVEsS0FBSyxLQUFLLFNBQVMsS0FBSyxRQUFRLFdBQVcsU0FBUyxLQUFLLFFBQVEsU0FBUyxNQUFNLEtBQUssUUFBUSxLQUFLLElBQUksS0FBSyxNQUFNLEtBQUssTUFBTSxRQUFRLElBQUksSUFBSSxFQUFFLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxRQUFRLGlCQUFpQixFQUFFLEtBQUssUUFBUSxlQUFlLElBQUksSUFBSSxPQUFPLFFBQVEsS0FBSyxLQUFLLFFBQVEsS0FBSyxjQUFjLFVBQVUsS0FBSyxZQUFZLFVBQVUsTUFBTSxPQUFPLEtBQUssUUFBUSxXQUFXLEtBQUssRUFBRSxLQUFLLFFBQVEsTUFBTSxJQUFJLEtBQUssWUFBWSxhQUFhLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxLQUFLLFFBQVEsS0FBSyxFQUFFLElBQUksS0FBSyxRQUFRLE1BQU0sS0FBSyxLQUFLLFFBQVEsUUFBUSxVQUFVLFNBQVMsSUFBSSxLQUFLLFFBQVEsS0FBSyxLQUFLLFNBQVMsS0FBSyxRQUFRLFFBQVEsT0FBTyxTQUFTLEtBQUssUUFBUSxRQUFRLEtBQUssTUFBTSxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsWUFBWSxLQUFLLGNBQWMsVUFBVSxLQUFLLFlBQVksVUFBVSxNQUFNLE9BQU8sS0FBSyxRQUFRLFFBQVEsT0FBTyxLQUFLLEtBQUssUUFBUSxRQUFRLE1BQU0sS0FBSyxZQUFZLGFBQWEsS0FBSyxRQUFRLEtBQUssRUFBRSxNQUFNLEtBQUssUUFBUSxLQUFLLEVBQUUsSUFBSSxLQUFLLFFBQVEsTUFBTSxNQUFNLEdBQUcsS0FBSyxRQUFRLE1BQU0sUUFBUSxDQUFDLElBQUksT0FBTyxTQUFTLEtBQUssTUFBTSxFQUFFLE1BQU0sRUFBRSxhQUFhLEtBQUssZUFBZSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsS0FBSyxXQUFXLEtBQUssZUFBZSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsS0FBSyxLQUFLLEVBQUUsR0FBRyxJQUFJLEtBQUssUUFBUSxZQUFZLE1BQU0sS0FBSyxRQUFRLFdBQVcsS0FBSyxHQUFHLFNBQVMsS0FBSyxRQUFRLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLFFBQVEsTUFBTSxNQUFNLE9BQU8sS0FBSyxRQUFRLEtBQUssRUFBRSxNQUFNLFNBQVMsS0FBSyxRQUFRLE1BQU0sU0FBUyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsTUFBTSxNQUFNLEtBQUssR0FBRyxNQUFNLFVBQVUsSUFBSSxVQUFVLENBQUMsT0FBTyxNQUFNLE9BQU8sV0FBVyxjQUFjLEtBQUssR0FBRyxFQUFFLGFBQWEsT0FBTyxHQUFHLFNBQVMsTUFBTSxDQUFDLEdBQUcsT0FBTyxLQUFLLElBQUksT0FBTyxPQUFPLEdBQUcsT0FBTyxLQUFLLElBQUksT0FBTyxPQUFPLEVBQUUsU0FBUyxJQUFJLFVBQVUsVUFBVSxLQUFLLE1BQU0sUUFBUSxPQUFPLFVBQVUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEtBQUssS0FBSyxRQUFRLE1BQU0sYUFBYSxHQUFHLFVBQVUsS0FBSyxRQUFRLE1BQU0sS0FBSyxDQUFDLElBQUksT0FBTyxLQUFLLFFBQVEsTUFBTSxPQUFPLE9BQU8sS0FBSyxRQUFRLEtBQUssRUFBRSxTQUFTLEtBQUssUUFBUSxNQUFNLFNBQVMsS0FBSyxHQUFHLE1BQU0sVUFBVSxJQUFJLFVBQVUsQ0FBQyxPQUFPLE1BQU0sT0FBTyxXQUFXLGNBQWMsS0FBSyxHQUFHLEVBQUUsYUFBYSxPQUFPLEdBQUcsU0FBUyxNQUFNLENBQUMsR0FBRyxPQUFPLEtBQUssSUFBSSxPQUFPLE9BQU8sR0FBRyxPQUFPLEtBQUssSUFBSSxPQUFPLE9BQU8sR0FBRyxPQUFPLEtBQUssSUFBSSxRQUFRLE9BQU8sUUFBUSxHQUFHLE9BQU8sS0FBSyxJQUFJLFFBQVEsT0FBTyxXQUFXLElBQUksVUFBVSxRQUFRLEtBQUssTUFBTSxRQUFRLE9BQU8sUUFBUSxLQUFLLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksR0FBRyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxlQUFlLEtBQUssUUFBUSxNQUFNLE1BQU0sT0FBTyxLQUFLLFFBQVEsTUFBTSxTQUFTLFNBQVMsS0FBSyxRQUFRLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsVUFBVSxDQUFDLEtBQUssS0FBSyxRQUFRLEtBQUssUUFBUSxLQUFLLFFBQVEsSUFBSSxLQUFLLFNBQVMsV0FBVyxDQUFDLEtBQUssS0FBSyxRQUFRLGFBQWEsS0FBSyxRQUFRLGdCQUFnQixLQUFLLFdBQVcsS0FBSyxRQUFRLElBQUksS0FBSyxVQUFVLFlBQVksQ0FBQyxLQUFLLEtBQUssUUFBUSxlQUFlLEtBQUssV0FBVyxLQUFLLFFBQVEsSUFBSSxLQUFLLFVBQVUsWUFBWSxDQUFDLGVBQWUsSUFBSSxLQUFLLFVBQVUsS0FBSyxRQUFRLElBQUksS0FBSyxTQUFTLFdBQVcsQ0FBQyxLQUFLLEtBQUssUUFBUSxXQUFXLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxXQUFXLE9BQU8sV0FBVyxLQUFLLFFBQVEsSUFBSSxLQUFLLFlBQVksY0FBYyxDQUFDLGVBQWUsRUFBRSxPQUFPLFFBQVEsaUJBQWlCLGVBQWUsS0FBSyxVQUFVLEtBQUssU0FBUyxPQUFPLENBQUMsU0FBUyxpQkFBaUIsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sRUFBRSxLQUFLLFFBQVEsS0FBSyxFQUFFLEVBQUUsR0FBRyxNQUFNLEVBQUUsS0FBSyxRQUFRLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyxrQkFBa0IsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxFQUFFLElBQUksT0FBTyxHQUFHLE1BQU0sS0FBSyxZQUFZLEVBQUUsT0FBTyxHQUFHLEtBQUssUUFBUSxLQUFLLEVBQUUsRUFBRSxPQUFPLEdBQUcsS0FBSyxRQUFRLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyxZQUFZLEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxRQUFRLE1BQU0sSUFBSSxLQUFLLEtBQUssRUFBRSxJQUFJLEtBQUssR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLE1BQU0sSUFBSSxNQUFNLElBQUksS0FBSyxRQUFRLFdBQVcsSUFBSSxNQUFNLENBQUMsS0FBSyxRQUFRLENBQUMsTUFBTSxNQUFNLEtBQUssR0FBRyxLQUFLLEtBQUssTUFBTSxLQUFLLGVBQWUsUUFBUSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsWUFBWSxLQUFLLE9BQU8sS0FBSyxRQUFRLEtBQUssS0FBSyxPQUFPLEtBQUssUUFBUSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksS0FBSyxNQUFNLEtBQUssUUFBUSxNQUFNLEtBQUssUUFBUSxLQUFLLEtBQUssSUFBSSxLQUFLLFFBQVEsS0FBSyxJQUFJLEtBQUssTUFBTSxLQUFLLE1BQU0sUUFBUSxJQUFJLE9BQU8sS0FBSyxPQUFPLEtBQUssU0FBUyxTQUFTLEtBQUssZUFBZSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLE1BQU0sS0FBSyxVQUFVLEtBQUssSUFBSSxLQUFLLFVBQVUsVUFBVSxLQUFLLFVBQVUsU0FBUyxLQUFLLGVBQWUsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxNQUFNLEtBQUssV0FBVyxLQUFLLElBQUksS0FBSyxZQUFZLEtBQUssUUFBUSxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxRQUFRLGlCQUFpQixFQUFFLEtBQUssUUFBUSxlQUFlLElBQUksR0FBRyxPQUFPLEtBQUssU0FBUyxPQUFPLFNBQVMsS0FBSyxFQUFFLEtBQUssUUFBUSxNQUFNLEtBQUssR0FBRyxPQUFPLEtBQUssU0FBUyxPQUFPLE9BQU8sU0FBUyxJQUFJLEtBQUssS0FBSyxLQUFLLGFBQWEsSUFBSSxhQUFhLEdBQUcsU0FBUyxPQUFPLEdBQUcsT0FBTyxpQkFBaUIsR0FBRyxVQUFVLGtCQUFrQixLQUFLLFNBQVMsaUJBQWlCLGNBQWMsS0FBSyxRQUFRLFFBQVEsUUFBUSxLQUFLLFVBQVUsYUFBYSxLQUFLLEtBQUssUUFBUSxRQUFRLE1BQU0sU0FBUyxLQUFLLFFBQVEsUUFBUSxVQUFVLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsWUFBWSxLQUFLLGVBQWUsS0FBSyxRQUFRLFdBQVcsS0FBSyxLQUFLLGVBQWUsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxNQUFNLE9BQU8sU0FBUyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsR0FBRyxLQUFLLFVBQVUsS0FBSyxJQUFJLEtBQUssU0FBUyxTQUFTLE1BQU0sS0FBSyxXQUFXLEtBQUssSUFBSSxLQUFLLFVBQVUsU0FBUyxVQUFVLEtBQUssVUFBVSxTQUFTLEtBQUssZUFBZSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLE1BQU0sS0FBSyxXQUFXLEtBQUssSUFBSSxLQUFLLFdBQVcsS0FBSyxTQUFTLFNBQVMsS0FBSyxlQUFlLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsTUFBTSxLQUFLLFVBQVUsS0FBSyxJQUFJLEtBQUssWUFBWSxLQUFLLFVBQVUsU0FBUyxTQUFTLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEtBQUssT0FBTyxLQUFLLFFBQVEsS0FBSyxLQUFLLE9BQU8sS0FBSyxRQUFRLElBQUksQ0FBQyxJQUFJLFFBQVEsS0FBSyxlQUFlLFNBQVMsS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLEtBQUssR0FBRyxLQUFLLE1BQU0sS0FBSyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsSUFBSSxTQUFTLEtBQUssUUFBUSxNQUFNLEtBQUssUUFBUSxLQUFLLEtBQUssSUFBSSxLQUFLLFFBQVEsS0FBSyxJQUFJLEtBQUssTUFBTSxLQUFLLE1BQU0sUUFBUSxJQUFJLEtBQUssVUFBVSxTQUFTLFNBQVMsR0FBRyxPQUFPLEtBQUssU0FBUyxPQUFPLGNBQWMsS0FBSyxJQUFJLEtBQUssV0FBVyxLQUFLLFNBQVMsU0FBUyxTQUFTLEdBQUcsT0FBTyxLQUFLLFNBQVMsT0FBTyxhQUFhLEtBQUssSUFBSSxLQUFLLFVBQVUsS0FBSyxRQUFRLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLFFBQVEsaUJBQWlCLEVBQUUsS0FBSyxRQUFRLGVBQWUsSUFBSSxHQUFHLE9BQU8sS0FBSyxTQUFTLE9BQU8sU0FBUyxLQUFLLEVBQUUsS0FBSyxRQUFRLE1BQU0sT0FBTyxHQUFHLEtBQUssS0FBSyxHQUFHLGNBQWMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxRQUFRLEtBQUssS0FBSyxTQUFTLE1BQU0sUUFBUSxDQUFDLE1BQU0sTUFBTSxNQUFNLE9BQU8sRUFBRSxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxTQUFTLE1BQU0sR0FBRyxNQUFNLG1CQUFtQixXQUFXLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsSUFBSSxLQUFLLFVBQVUsS0FBSyxJQUFJLFdBQVcsRUFBRSxTQUFTLElBQUksS0FBSyxHQUFHLGFBQWEsQ0FBQyxFQUFFLGVBQWUsU0FBUyxFQUFFLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxFQUFFLFdBQVcsR0FBRyxTQUFTLEdBQUcsV0FBVyxnQkFBZ0IsU0FBUyxtQkFBbUIsYUFBYSxnQkFBZ0IsVUFBVSxPQUFPLE9BQU8sRUFBRSxTQUFTLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssR0FBRyxNQUFNLE9BQU8sS0FBSyxRQUFRLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxRQUFRLE1BQU0sT0FBTyxNQUFNLEVBQUUsU0FBUyxHQUFHLE9BQU8sR0FBRyxXQUFXLElBQUksS0FBSyxFQUFFLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksSUFBSSxlQUFlLENBQUMsR0FBRyxNQUFNLFFBQVEsUUFBUSxNQUFNLGVBQWUsTUFBTSxTQUFTLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxRQUFRLEdBQUcsTUFBTSxNQUFNLE1BQU0sU0FBUyxHQUFHLE1BQU0sT0FBTyxRQUFRLFNBQVMsU0FBUyxTQUFTLENBQUMsT0FBTyxVQUFVLGFBQWEsT0FBTyxVQUFVLGFBQWEsT0FBTyxVQUFVLFdBQVcsVUFBVSxLQUFLLFNBQVMsWUFBWSxNQUFNLFFBQVEsZUFBZSxDQUFDLElBQUksc0JBQXNCLENBQUMsRUFBRSxNQUFNLE9BQU8sVUFBVSxVQUFVLENBQUMsR0FBRyxzQkFBc0Isc0JBQXNCLENBQUMsTUFBTSxDQUFDLElBQUksV0FBVyxRQUFRLE1BQU0sZUFBZSxNQUFNLFNBQVMsS0FBSyxJQUFJLEdBQUcsS0FBSyxRQUFRLEdBQUcsTUFBTSxNQUFNLFlBQVksYUFBYSxDQUFDLEdBQUcsSUFBSSxTQUFTLFVBQVUsQ0FBQyxLQUFLLEtBQUssU0FBUyxNQUFNLENBQUMsTUFBTSxPQUFPLFVBQVUsQ0FBQyxNQUFNLE1BQU0sV0FBVyxjQUFjLFFBQVEsT0FBTyxVQUFVLElBQUksVUFBVSxTQUFTLEdBQUcsa0JBQWtCOzs7QUNQNXhXO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2w0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9SQTs7Ozs7O0FBTUEsUUFBUTtBQUNSLFFBQVE7QUFDUixRQUFRO0FBQ1IsUUFBUTs7QUFFUixRQUFRO0FBQ1IsUUFBUTtBQUNSLFFBQVE7Ozs7O0FBS1IsUUFBUSxRQUFRLFVBQVUsTUFBTSxXQUFXOztFQUV6QyxJQUFJLFdBQVc7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Ozs7OztFQU1GLE9BQU8sTUFBTSxRQUFRLE9BQU8sT0FBTzs7RUFFbkMsUUFBUSxPQUFPLE9BQU8sU0FBUyxlQUFlLFFBQVE7O0VBRXRELFFBQVEsT0FBTyxPQUFPLE9BQU8sUUFBUTs7RUFFckMsUUFBUSxPQUFPLE9BQU8sSUFBSSxRQUFROzs7RUFHbEMsV0FBVyxXQUFXO0lBQ3BCLFFBQVEsVUFBVSxVQUFVLENBQUM7TUFDM0I7OztHQUdIOzs7QUNqREg7O0FBRUEsSUFBSSxjQUFjO0VBQ2hCLFNBQVM7SUFDUCxNQUFNOzs7O0VBSVIsYUFBYTtHQUNaLFFBQVE7R0FDUixRQUFRO0dBQ1IsTUFBTTtJQUNMLE1BQU0sQ0FBQyxDQUFDLGNBQWMsTUFBTSxVQUFVLENBQUMsQ0FBQyxhQUFhLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLFFBQVEsUUFBUSxDQUFDLGNBQWMsU0FBUyxVQUFVLENBQUMsQ0FBQyxRQUFRLE1BQU0sQ0FBQyxhQUFhLFNBQVMsQ0FBQyxjQUFjLE9BQU8sVUFBVSxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsYUFBYSxHQUFHLENBQUMsTUFBTSxXQUFXLENBQUMsUUFBUSxLQUFLLENBQUMsY0FBYyxPQUFPLGNBQWMscUJBQXFCLFVBQVUsQ0FBQyxDQUFDLGFBQWEsU0FBUyxDQUFDLGNBQWMsZ0JBQWdCLGNBQWMsV0FBVyxVQUFVLENBQUMsQ0FBQyxZQUFZLE1BQU0sQ0FBQyxjQUFjLGVBQWUsY0FBYyxXQUFXLFVBQVUsQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLE1BQU0sYUFBYSxDQUFDLGNBQWMsMEJBQTBCLFVBQVUsQ0FBQyxDQUFDLGFBQWEsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsY0FBYywwQkFBMEIsY0FBYyxxQkFBcUIsVUFBVSxDQUFDLENBQUMsYUFBYSxTQUFTLENBQUMsY0FBYywwQkFBMEIsY0FBYyxjQUFjLFVBQVUsQ0FBQyxDQUFDLFlBQVk7Ozs7O0FBSzkzQixPQUFPLFVBQVUsWUFBWTs7O0FDakI3Qjs7O0FBRUEsSUFBSSxvQkFBb0IsUUFBUTs7Ozs7QUFLaEMsU0FBUyxRQUFRLE1BQU0sWUFBWSxRQUFRLGFBQWEsVUFBVSxhQUFhLGFBQWE7O0VBRTFGLE9BQU8sS0FBSyxZQUFZOztFQUV4QixJQUFJLEtBQUs7O0VBRVQsV0FBVyxrQkFBa0I7Ozs7RUFJN0IsT0FBTyxZQUFZOzs7RUFHbkIsWUFBWSxnQkFBZ0Isd0JBQXdCO0lBQ2xELE9BQU87S0FDTixLQUFLLFNBQVMsT0FBTztJQUN0QixPQUFPLFFBQVE7Ozs7RUFJakIsT0FBTyxhQUFhLFdBQVc7SUFDN0IsT0FBTyxNQUFNOzs7O0VBSWYsT0FBTyxRQUFRLFdBQVc7SUFDeEIsT0FBTyxNQUFNOzs7O0VBSWYsT0FBTyxVQUFVLFdBQVc7SUFDMUIsUUFBUSxJQUFJLGVBQWUsT0FBTzs7OztJQUlsQyxTQUFTLFdBQVc7TUFDbEIsT0FBTztPQUNOOzs7OztDQUtOOztBQUVELGtCQUFrQixXQUFXLFdBQVcsU0FBUzs7O0FDbkRqRDs7O0FBRUEsSUFBSSxvQkFBb0IsUUFBUTs7Ozs7QUFLaEMsU0FBUyxXQUFXLFFBQVEsWUFBWSxJQUFJLE9BQU8sTUFBTSxTQUFTLFVBQVUsbUJBQW1CLGdCQUFnQix3QkFBd0IsYUFBYTtJQUNoSixPQUFPLEtBQUssWUFBWTs7O0dBR3pCLElBQUksS0FBSztJQUNSLEdBQUcsU0FBUyxZQUFZO0lBQ3hCLE9BQU8sU0FBUyxZQUFZO0lBQzVCLE9BQU8saUJBQWlCLFdBQVc7O0lBRW5DLE9BQU8sV0FBVztJQUNsQixPQUFPLGtCQUFrQjtJQUN6QixPQUFPLG1CQUFtQjtJQUMxQixPQUFPLFlBQVk7O0lBRW5CLGNBQWMsS0FBSztRQUNmLFVBQVU7UUFDVixVQUFVOzs7SUFHZCxPQUFPLGtCQUFrQjtRQUNyQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixnQkFBZ0I7OztJQUdwQixPQUFPLG1CQUFtQixTQUFTLE1BQU07UUFDckMsSUFBSSxNQUFNLE9BQU8sa0JBQWtCLEtBQUs7UUFDeEMsS0FBSyxJQUFJLFlBQVksSUFBSSx5QkFBeUI7UUFDbEQsT0FBTyxVQUFVLEtBQUssZUFBZTs7O0lBR3pDLE9BQU8sb0JBQW9CLFdBQVc7TUFDcEMsUUFBUSxLQUFLLE1BQU0sS0FBSyxXQUFXLElBQUk7OztJQUd6QyxPQUFPLG9CQUFvQixVQUFVLFVBQVU7UUFDM0MsT0FBTyxTQUFTLE1BQU0sS0FBSyxJQUFJLFNBQVMsS0FBSyxFQUFFLE9BQU8sSUFBSSxjQUFjLFdBQVcsS0FBSzs7O0lBRzVGLGlCQUFpQjtxQkFDQSxLQUFLLFNBQVMsS0FBSzs7d0JBRWhCLE9BQU8sWUFBWTs7Ozs7d0JBS25CLE9BQU8sbUJBQW1CLEVBQUUsTUFBTTt5Q0FDakIsUUFBUTt5Q0FDUixJQUFJLFNBQVMsV0FBVyxLQUFLLE9BQU87OzRDQUVqQyxVQUFVLElBQUksU0FBUyxVQUFVO2dEQUM3QixTQUFTLFdBQVc7b0RBQ2hCLE9BQU87a0RBQ1Q7Ozs0Q0FHTixPQUFPO2dEQUNILFVBQVU7Z0RBQ1YsZUFBZSxPQUFPLGtCQUFrQjtnREFDeEMsV0FBVzs7O3lDQUdsQixJQUFJLFNBQVMsY0FBYzs7NENBRXhCLE9BQU87O3lDQUVWOzs7Ozt3QkFLakIsT0FBTyxPQUFPLG1CQUFtQixTQUFTLFNBQVM7NEJBQy9DLEdBQUcsV0FBVyxLQUFLLE9BQU87Ozs7Z0NBSXRCLE9BQU8sMEJBQTBCLEVBQUUsTUFBTSxPQUFPO21FQUNiLElBQUksU0FBUyxPQUFPO3NFQUNqQixJQUFJLG1CQUFtQixRQUFRLFdBQVcsTUFBTSxXQUFXO3NFQUMzRCxPQUFPLFFBQVEsT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVOzttRUFFOUMsT0FBTzttRUFDUCxJQUFJLFNBQVMsY0FBYztzRUFDeEIsT0FBTyxVQUFVLGFBQWEsaUJBQWlCLFFBQVEsT0FBTyxJQUFJLENBQUMsWUFBWSxzQkFBc0IsYUFBYSxlQUFlLGFBQWEsRUFBRSxNQUFNLGFBQWEsYUFBYSxPQUFPO3NFQUN2TCxPQUFPOzttRUFFVjs7Z0NBRW5DLGNBQWM7Ozs7Ozs7OztDQVM3Qzs7O0FBR0Qsa0JBQWtCLFdBQVcsY0FBYyxZQUFZOzs7QUM3R3ZEOzs7QUFFQSxJQUFJLG9CQUFvQixRQUFROzs7OztBQUtoQyxTQUFTLFlBQVksTUFBTSxZQUFZLFFBQVEsYUFBYTs7RUFFMUQsT0FBTyxLQUFLLFlBQVk7O0VBRXhCLElBQUksS0FBSzs7Q0FFVjs7QUFFRCxrQkFBa0IsV0FBVyxlQUFlLGFBQWE7OztBQ2Z6RDs7O0FBRUEsSUFBSSxvQkFBb0IsUUFBUTs7Ozs7QUFLaEMsU0FBUyxVQUFVLE1BQU0sWUFBWSxRQUFRLGFBQWE7O0VBRXhELE9BQU8sS0FBSyxZQUFZOztFQUV4QixJQUFJLEtBQUs7O0NBRVY7O0FBRUQsa0JBQWtCLFdBQVcsYUFBYSxXQUFXOzs7QUNmckQ7OztBQUVBLElBQUksb0JBQW9CLFFBQVE7Ozs7OztBQU1oQyxTQUFTLFFBQVEsWUFBWSxRQUFRLFVBQVUsTUFBTSxlQUFlLGFBQWEsTUFBTSxrQkFBa0Isd0JBQXdCLGVBQWU7O0lBRTVJLE9BQU8sS0FBSyxZQUFZLFdBQVc7OztHQUdwQyxJQUFJLEtBQUs7Ozs7SUFJUixJQUFJLGdCQUFnQixXQUFXLGdCQUFnQjs7SUFFL0MsV0FBVyxpQkFBaUI7OztJQUc1QixHQUFHLE9BQU8sSUFBSSxLQUFLO3dCQUNDLFFBQVE7d0JBQ1IsUUFBUSxHQUFHO3dCQUNYLFFBQVEsWUFBWSxhQUFhLE1BQU07O0lBRTNELFdBQVcsT0FBTyxHQUFHOztJQUVyQixHQUFHLEtBQUssU0FBUztJQUNqQixHQUFHLEtBQUssVUFBVTtJQUNsQixHQUFHLEtBQUssU0FBUzs7O0lBR2pCLEdBQUcsS0FBSyxXQUFXO2NBQ1QsUUFBUSxHQUFHLEtBQUs7Y0FDaEIsUUFBUSxDQUFDLEtBQUssY0FBYzt1QkFDbkIsS0FBSyxjQUFjOztjQUU1QixRQUFROzs7Ozs7OztJQVFsQixHQUFHLHdCQUF3QjtJQUMzQixHQUFHLHVCQUF1QjtNQUN4QixVQUFVO01BQ1YsVUFBVTtNQUNWLE1BQU07Y0FDRSxDQUFDLE1BQU07Y0FDUCxDQUFDLE1BQU07Y0FDUCxDQUFDLE1BQU07OztJQUdqQixHQUFHLHVCQUF1Qjs7Ozs7SUFLMUIsR0FBRyxPQUFPO2VBQ0MsUUFBUSxHQUFHLGdCQUFnQjs7O0lBR3RDLEdBQUcsZUFBZTtjQUNSLFFBQVE7Z0JBQ04sZ0JBQWdCO2dCQUNoQixnQkFBZ0I7Z0JBQ2hCLGdCQUFnQjtnQkFDaEIsZ0JBQWdCO2dCQUNoQixnQkFBZ0I7Z0JBQ2hCLGdCQUFnQjtnQkFDaEIsZ0JBQWdCO2dCQUNoQixnQkFBZ0I7Z0JBQ2hCLGdCQUFnQjtnQkFDaEIsZ0JBQWdCO2dCQUNoQixnQkFBZ0I7Ozs7OztJQU01QixHQUFHLFFBQVE7TUFDVCxZQUFZO01BQ1osWUFBWTtNQUNaLFlBQVk7UUFDVixjQUFjO1FBQ2QsY0FBYztRQUNkLGNBQWM7O01BRWhCLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJkLEdBQUcsZ0JBQWdCLFNBQVMsVUFBVTs7TUFFcEMsS0FBSyxJQUFJLHdCQUF3Qjs7O01BR2pDLEdBQUcsS0FBSyxJQUFJLFdBQVcsQ0FBQyxPQUFPO01BQy9CLEdBQUcsS0FBSyxRQUFRLElBQUk7TUFDcEIsR0FBRyxLQUFLLFVBQVU7TUFDbEIsR0FBRyx1QkFBdUI7TUFDMUIsR0FBRyxjQUFjO01BQ2pCLElBQUksR0FBRyxpQkFBaUIsR0FBRyxnQkFBZ0IsV0FBVzs7O01BR3RELGNBQWMsS0FBSztRQUNqQixVQUFVO1FBQ1YsVUFBVTs7Ozs7TUFLWjtTQUNHLElBQUk7Y0FDQyxVQUFVLFNBQVM7Y0FDbkIsVUFBVTtjQUNWLFVBQVUsY0FBYztjQUN4QixVQUFVLGNBQWM7O1NBRTdCLEtBQUssU0FBUyxXQUFXOztVQUV4QixHQUFHLHFCQUFxQixXQUFXOztVQUVuQyxHQUFHLHVCQUF1QjtVQUMxQixHQUFHLHFCQUFxQixVQUFVOzs7VUFHbEMsR0FBRyx3QkFBd0IsRUFBRSxPQUFPLFdBQVc7Ozs7VUFJL0MsWUFBWSxHQUFHOzs7VUFHZixHQUFHLGNBQWMsRUFBRSxNQUFNLEdBQUcsdUJBQXVCLFdBQVcsTUFBTTtVQUNwRSxHQUFHLGtCQUFrQixHQUFHLEtBQUssZ0JBQWdCLENBQUMsUUFBUSxHQUFHO1VBQ3pELEdBQUcsS0FBSyxJQUFJLFVBQVUsR0FBRyxnQkFBZ0I7OztVQUd6QyxHQUFHLGFBQWEsR0FBRyxhQUFhLEVBQUUsS0FBSyxHQUFHLHVCQUF1QjtVQUNqRSxHQUFHLGNBQWMsUUFBUSxLQUFLLEtBQUssR0FBRyxZQUFZLEdBQUc7OztVQUdyRCxjQUFjLEdBQUcsYUFBYSxFQUFFLE1BQU0sR0FBRyx1QkFBdUIsV0FBVyxPQUFPLEVBQUUsS0FBSyxHQUFHLHVCQUF1QixXQUFXO1VBQzlILEdBQUcsbUJBQW1COzs7VUFHdEIsY0FBYztVQUNkLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpQjdCLEdBQUcsZ0JBQWdCLFVBQVUsWUFBWTs7O1FBR3JDLElBQUksUUFBUSxXQUFXLEtBQUssTUFBTTs7UUFFbEMsR0FBRyxNQUFNLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLE1BQU0sQ0FBQyxNQUFNLEdBQUc7UUFDeEQsSUFBSSxRQUFRLFFBQVEsQ0FBQyxNQUFNO1FBQzNCLElBQUksWUFBWSxXQUFXOztRQUUzQixPQUFPLFVBQVU7Ozs7SUFJckIsR0FBRyxnQkFBZ0IsU0FBUyxRQUFRO01BQ2xDLE9BQU8sT0FBTzs7OztJQUloQixHQUFHLG1CQUFtQixZQUFZO09BQy9CLEdBQUcsS0FBSyxTQUFTOztZQUVaLEdBQUcsS0FBSyxPQUFPLElBQUk7WUFDbkIsR0FBRyxHQUFHLHNCQUFzQixRQUFRLEdBQUcsS0FBSyxJQUFJLFdBQVcsQ0FBQyxRQUFROzs7WUFHcEUsR0FBRyxPQUFPLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXFCMUIsSUFBSSxnQkFBZ0IsU0FBUyxJQUFJLEtBQUssS0FBSzs7O1VBR3JDLEdBQUcsTUFBTTtjQUNMLE1BQU07Y0FDTixRQUFRO2dCQUNOLGNBQWM7Ozs7Ozs7Z0JBT2QsY0FBYztnQkFDZCxjQUFjO2dCQUNkLGNBQWM7Z0JBQ2QsY0FBYztnQkFDZCxjQUFjO2dCQUNkLGNBQWM7Z0JBQ2QsY0FBYztnQkFDZCxjQUFjOzs7Ozs7Ozs7Ozs7O0lBYTFCLElBQUksaUJBQWlCLFNBQVMsVUFBVTs7O01BR3RDLElBQUksY0FBYyxFQUFFLE1BQU0sR0FBRyxLQUFLLFNBQVMsQ0FBQyxPQUFPLFNBQVMsT0FBTztNQUNuRSxZQUFZLFdBQVc7TUFDdkIsWUFBWSxhQUFhOzs7Ozs7Ozs7SUFTM0IsSUFBSSxpQkFBaUIsU0FBUyxVQUFVOztNQUV0QyxJQUFJLGVBQWUsRUFBRSxNQUFNLEdBQUcsS0FBSyxTQUFTLENBQUMsT0FBTyxTQUFTLE9BQU87TUFDcEUsYUFBYSxXQUFXO01BQ3hCLGFBQWEsYUFBYTs7Ozs7Ozs7OztJQVU1QixJQUFJLGNBQWMsU0FBUyxXQUFXO01BQ3BDLFVBQVUsSUFBSSxTQUFTLFFBQVE7OztZQUd6QixJQUFJLFNBQVMsR0FBRyxLQUFLLFdBQVc7d0JBQ3BCLFFBQVE7MEJBQ04sS0FBSyxXQUFXLFFBQVE7MEJBQ3hCLEtBQUssV0FBVyxRQUFROzt3QkFFMUIsV0FBVyxRQUFRO3dCQUNuQixXQUFXLEdBQUcsS0FBSzt3QkFDbkIsV0FBVzt3QkFDWCxXQUFXOzs7O2tCQUlqQixPQUFPLFlBQVksUUFBUSxVQUFVO3FCQUNsQyxPQUFPLFdBQVcsa0JBQWtCOzs7Z0JBR3pDLEdBQUcsS0FBSyxRQUFRLEtBQUs7Ozs7Ozs7O0lBUWpDLElBQUksa0JBQWtCLFNBQVMsS0FBSyxNQUFNOztRQUV0QyxjQUFjLEdBQUcsT0FBTztjQUNsQixZQUFZO2dCQUNWLE9BQU8sT0FBTyxXQUFXO2tCQUN2QixHQUFHLE9BQU8sYUFBYSxNQUFNLFFBQVEsT0FBTzs7OztjQUloRCxRQUFRO2tCQUNKLFNBQVMsaUJBQWlCLHlCQUF5Qjs7Ozs7Ozs7Ozs7O0lBWWpFLElBQUksZ0JBQWdCLFNBQVMsUUFBUTtNQUNuQyxLQUFLLElBQUksaUNBQWlDO09BQ3pDLE9BQU8sT0FBTzs7Ozs7Ozs7O0lBU2pCLElBQUksZUFBZSxTQUFTLFVBQVU7TUFDcEMsS0FBSyxJQUFJLHVCQUF1QjtNQUNoQyxXQUFXLGlCQUFpQjs7O01BRzVCLEdBQUcsS0FBSyxPQUFPLElBQUk7TUFDbkIsR0FBRyxnQkFBZ0IsV0FBVztNQUM5QixHQUFHLHNCQUFzQixJQUFJOztNQUU3QixJQUFJLFNBQVMsZUFBZTs7TUFFNUIsSUFBSSxRQUFRLEdBQUcsS0FBSyxZQUFZOzBCQUNaLEtBQUssU0FBUyxPQUFPOzRCQUNuQixHQUFHLEtBQUssT0FBTyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3QjVDLElBQUksZ0JBQWdCLFNBQVMsVUFBVTtNQUNyQyxHQUFHLFVBQVUsR0FBRyxnQkFBZ0IsVUFBVSxTQUFTOztNQUVuRCxJQUFJLGVBQWUsR0FBRyxnQkFBZ0I7TUFDdEMsSUFBSSxZQUFZLEdBQUcsS0FBSyxJQUFJOztNQUU1QixJQUFJLEtBQUssYUFBYTtNQUN0QixJQUFJLEtBQUssYUFBYTtNQUN0QixJQUFJLEtBQUssSUFBSSxPQUFPLEtBQUssT0FBTyxHQUFHLE9BQU8sR0FBRztNQUM3QyxJQUFJLEtBQUssSUFBSSxPQUFPLEtBQUssT0FBTyxHQUFHLE9BQU8sR0FBRzs7TUFFN0MsSUFBSSxhQUFhLElBQUksT0FBTyxJQUFJOzs7TUFHaEMsR0FBRyxDQUFDLFVBQVUsU0FBUyxJQUFJO1FBQ3pCLEtBQUssSUFBSSxJQUFJLEdBQUcsVUFBVSxXQUFXLFFBQVEsSUFBSSxTQUFTLEtBQUs7O1VBRTdELFVBQVUsT0FBTyxXQUFXOztRQUU5QixHQUFHLEtBQUssSUFBSSxVQUFVO1dBQ25CO1FBQ0gsR0FBRyxLQUFLLElBQUksVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpQjFCLE9BQU8sa0JBQWtCLFNBQVMsTUFBTTtRQUNwQyxLQUFLLElBQUksaUNBQWlDO1FBQzFDLElBQUksVUFBVSxRQUFRLFFBQVEsU0FBUyxpQkFBaUIseUJBQXlCO1FBQ2pGLElBQUksa0JBQWtCLEdBQUcsc0JBQXNCOztRQUUvQyxHQUFHLHNCQUFzQixJQUFJLFNBQVMsVUFBVSxFQUFFLFNBQVMsV0FBVyxPQUFPLE9BQU87UUFDcEYsZ0JBQWdCLFdBQVc7O1FBRTNCLGFBQWE7UUFDYixjQUFjOzs7UUFHZCxRQUFRLE9BQU8sR0FBRyxPQUFPO1VBQ3ZCLFVBQVU7VUFDVixVQUFVO1VBQ1YsVUFBVTtZQUNSLGNBQWMsZ0JBQWdCO1lBQzlCLGNBQWMsZ0JBQWdCO1lBQzlCLGNBQWMsZ0JBQWdCOzs7OztRQUtsQyxnQkFBZ0IsUUFBUTtRQUN4QixnQkFBZ0IsTUFBTTs7Ozs7Ozs7OztJQVUxQixPQUFPLE9BQU8sa0JBQWtCLFNBQVMsVUFBVSxVQUFVOzs7O1lBSXJELEdBQUcsR0FBRyxnQkFBZ0I7Y0FDcEIsR0FBRyxnQkFBZ0IsVUFBVTtjQUM3QixHQUFHLGdCQUFnQixXQUFXOzs7Y0FHOUIsR0FBRyxjQUFjLFFBQVEsS0FBSyxLQUFLLFNBQVMsR0FBRztjQUMvQyxHQUFHLGNBQWMsVUFBVSxHQUFHLGNBQWM7Ozs7V0FJL0MsR0FBRzs7O1lBR0YsR0FBRyxHQUFHLGlCQUFpQjs7O1lBR3ZCLEdBQUcsc0JBQXNCLElBQUksU0FBUyxPQUFPO2tCQUN2QyxJQUFJLE9BQU8sdUJBQXVCLFVBQVU7b0JBQzFDLGVBQWU7d0JBQ1g7b0JBQ0osZUFBZTs7Ozs7Ozs7Ozs7OztNQWE3QixPQUFPLElBQUksa0JBQWtCLFNBQVMsR0FBRyxRQUFRO1FBQy9DLE9BQU8sT0FBTyxXQUFXOztVQUV2QixLQUFLLElBQUksMkJBQTJCOztVQUVwQyxHQUFHLEtBQUssSUFBSSxXQUFXLENBQUMsUUFBUSxZQUFZLGFBQWEsTUFBTTs7O1VBRy9ELEdBQUcsS0FBSyxTQUFTO1VBQ2pCLEdBQUcsU0FBUztZQUNWLE9BQU87WUFDUCxLQUFLO2NBQ0gsY0FBYyxPQUFPO2NBQ3JCLGNBQWMsT0FBTztjQUNyQixjQUFjLE9BQU87Ozs7VUFJekIsdUJBQXVCLE1BQU0sRUFBRSxRQUFRLEdBQUcsdUJBQXVCOzs7VUFHakUsYUFBYTtVQUNiO1VBQ0EsZ0JBQWdCLFFBQVE7VUFDeEIsZ0JBQWdCLE1BQU07Ozs7Ozs7Q0FPL0I7Ozs7QUFJRCxrQkFBa0IsV0FBVyxXQUFXLFNBQVM7OztBQ25oQmpEOztBQUVBLElBQUksT0FBTyxRQUFROztBQUVuQixPQUFPLFVBQVUsUUFBUSxPQUFPLG1CQUFtQjs7QUFFbkQsS0FBSyxXQUFXLENBQUMsOEJBQThCOzs7QUNOL0M7O0FBRUEsSUFBSSxPQUFPLFFBQVE7O0FBRW5CLE9BQU8sVUFBVSxRQUFRLE9BQU8sa0JBQWtCOztBQUVsRCxLQUFLLFdBQVcsQ0FBQyw4QkFBOEI7OztBQ04vQzs7O0FBRUEsSUFBSSxtQkFBbUIsUUFBUTs7Ozs7QUFLL0IsU0FBUyxZQUFZLE1BQU0sU0FBUztFQUNsQyxPQUFPLEtBQUssYUFBYTs7OztFQUl6QixPQUFPO0lBQ0wsYUFBYTtJQUNiLE1BQU0sU0FBUyxPQUFPLFNBQVMsWUFBWSxZQUFZLGNBQWM7S0FDcEUsU0FBUztNQUNSLFFBQVEsV0FBVyxJQUFJO1FBQ3JCO1lBQ0ksU0FBUyx3QkFBd0I7YUFDaEMsS0FBSyxJQUFJOztnQkFFTixRQUFROztnQkFFUixRQUFRLFVBQVUsYUFBYTs7Ozs7Ozs7Q0FROUM7OztBQUdELGlCQUFpQixVQUFVLGVBQWUsYUFBYTs7O0FDbEN2RDs7QUFFQSxJQUFJLGVBQWUsUUFBUTs7Ozs7O0FBTTNCLGFBQWEsUUFBUSx3RUFBUSxTQUFTLE1BQU0sWUFBWSxJQUFJLGtCQUFrQixZQUFZO0VBQ3hGLE9BQU8sS0FBSyxZQUFZLFFBQVE7O0VBRWhDLElBQUksZ0JBQWdCLFdBQVcsZ0JBQWdCOzs7O0VBSS9DLFNBQVMsS0FBSyxZQUFZOztJQUV4QixLQUFLLGFBQWE7TUFDaEIsV0FBVyxDQUFDLEtBQUssY0FBYztrQkFDbkIsS0FBSyxjQUFjO01BQy9CLFdBQVcsWUFBWSxhQUFhO01BQ3BDLFdBQVcsT0FBTyxLQUFLLFVBQVU7TUFDakMsV0FBVyxZQUFZLGFBQWE7OztJQUd0QyxRQUFRLE9BQU8sS0FBSyxZQUFZOztJQUVoQyxLQUFLLE1BQU0sMEJBQTBCOztJQUVyQyxLQUFLLE1BQU0sSUFBSSxPQUFPLEtBQUssSUFBSSxTQUFTLGVBQWUsUUFBUSxLQUFLOztFQUV0RTs7Ozs7RUFLQSxLQUFLLFdBQVc7O0lBRWQsWUFBWSxTQUFTLFlBQVk7TUFDL0IsSUFBSSxrQkFBa0I7TUFDdEIsUUFBUSxPQUFPLGlCQUFpQixLQUFLLFlBQVk7TUFDakQsS0FBSyxNQUFNLDZEQUE2RDs7TUFFeEUsSUFBSSxVQUFVLElBQUksT0FBTyxLQUFLLE9BQU87WUFDL0IsV0FBVyxnQkFBZ0I7WUFDM0IsV0FBVyxnQkFBZ0I7WUFDM0IsV0FBVyxnQkFBZ0I7WUFDM0IsV0FBVyxnQkFBZ0I7WUFDM0IsV0FBVyxPQUFPLEtBQUssVUFBVTtZQUNqQyxZQUFZLGdCQUFnQjs7O01BR2xDLE9BQU87Ozs7SUFJVCxpQkFBaUIsU0FBUyxjQUFjLGdCQUFnQjtNQUN0RCxJQUFJLE9BQU87O01BRVgsS0FBSyxNQUFNLDhCQUE4QjtNQUN6QyxJQUFJLGFBQWEsSUFBSSxPQUFPLEtBQUssV0FBVztvQkFDOUIsU0FBUyw4Q0FBOEMsYUFBYSxLQUFLOzZCQUNoRSxNQUFNLGFBQWEsV0FBVyxLQUFLOzZCQUNuQyxVQUFVLGFBQWEscUJBQXFCOzs7Ozs7OztNQVFuRSxPQUFPOzs7O0lBSVQsa0JBQWtCLFVBQVUsUUFBUTtRQUNoQyxJQUFJLE9BQU8sS0FBSztRQUNoQixJQUFJLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSztRQUM3QixJQUFJLEtBQUssSUFBSSxPQUFPLEtBQUs7WUFDckIsS0FBSyxZQUFZLGVBQWU7WUFDaEMsS0FBSyxZQUFZLGVBQWU7O1FBRXBDLElBQUksb0JBQW9CLEtBQUssZ0JBQWdCLGtCQUFrQjtRQUMvRCxJQUFJLGtCQUFrQixLQUFLLGdCQUFnQixrQkFBa0IsT0FBTztRQUNwRSxJQUFJLGNBQWMsSUFBSSxPQUFPLEtBQUs7WUFDOUIsS0FBSyxNQUFNLENBQUMsZ0JBQWdCLElBQUksa0JBQWtCLEtBQUs7WUFDdkQsS0FBSyxNQUFNLENBQUMsZ0JBQWdCLElBQUksa0JBQWtCLEtBQUs7OztRQUczRCxPQUFPOzs7SUFHWCxhQUFhLFNBQVMsU0FBUztNQUM3QixLQUFLLE1BQU0scUJBQXFCO01BQ2hDLElBQUksV0FBVyxHQUFHO01BQ2xCLElBQUksT0FBTztNQUNYLElBQUksaUJBQWlCO1lBQ2YscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQixxQkFBcUI7WUFDckIscUJBQXFCLEtBQUssV0FBVzs7O01BRzNDLFFBQVEsT0FBTyxnQkFBZ0IsS0FBSzs7TUFFcEMsSUFBSSxvQkFBb0IsSUFBSSxPQUFPLEtBQUssbUJBQW1CO1lBQ3JELHFCQUFxQixLQUFLO1lBQzFCLHFCQUFxQixlQUFlO1lBQ3BDLHFCQUFxQixlQUFlO1lBQ3BDLHFCQUFxQixlQUFlOzs7O1VBSXRDLFVBQVU7WUFDUixhQUFhLENBQUMsS0FBSyxXQUFXLFNBQVM7MEJBQ3pCLEtBQUssV0FBVyxTQUFTO1lBQ3ZDLGFBQWEsZUFBZTtZQUM1QixhQUFhLE9BQU8sS0FBSyxXQUFXO1lBQ3BDLDBCQUEwQjs7O1VBRzVCLG9CQUFvQixJQUFJLE9BQU8sS0FBSzs7O1VBR3BDLGtCQUFrQixNQUFNLFNBQVMsU0FBUyxVQUFVLFFBQVE7O1lBRTFELElBQUksVUFBVSxPQUFPLEtBQUssaUJBQWlCLElBQUk7O2NBRTdDLFNBQVMsV0FBVztjQUNwQixrQkFBa0IsY0FBYztjQUNoQyxTQUFTLFFBQVE7Ozs7VUFJckIsT0FBTyxTQUFTOzs7OztJQUt0QixpQkFBaUIsU0FBUyxzQkFBc0I7TUFDOUMsSUFBSSxPQUFPO01BQ1gsSUFBSSxpQkFBaUI7Y0FDYixlQUFlO2NBQ2YsZUFBZTtjQUNmLGVBQWU7Y0FDZixlQUFlO2NBQ2YsZUFBZTs7O01BR3ZCLFFBQVEsT0FBTyxpQkFBaUIsS0FBSyxZQUFZOztNQUVqRCxJQUFJLGtCQUFrQixJQUFJLE9BQU8sS0FBSyxPQUFPO2dCQUNuQyxlQUFlLGdCQUFnQjtnQkFDL0IsZUFBZSxnQkFBZ0I7Z0JBQy9CLGVBQWUsZ0JBQWdCO2dCQUMvQixlQUFlLGdCQUFnQjtnQkFDL0IsZUFBZSxnQkFBZ0I7Z0JBQy9CLGVBQWUsS0FBSztnQkFDcEIsZUFBZSxnQkFBZ0I7Z0JBQy9CLGVBQWUsZ0JBQWdCOzs7TUFHekMsT0FBTzs7O0lBR1QsZUFBZSxXQUFXO01BQ3hCLElBQUksV0FBVyxJQUFJLE9BQU8sS0FBSyxPQUFPLGNBQWMsS0FBSztNQUN6RCxPQUFPOzs7Ozs7OztFQVFYLE9BQU87Ozs7O0FBS1Q7QUNwTEE7O0FBRUEsSUFBSSxlQUFlLFFBQVE7Ozs7OztBQU0zQixhQUFhLFFBQVEsb0RBQVksU0FBUyxZQUFZLE1BQU0sSUFBSSxTQUFTO0VBQ3ZFLE9BQU8sS0FBSyxZQUFZLFlBQVk7O0VBRXBDLFNBQVMsU0FBUyxhQUFhO0lBQzdCLFFBQVEsT0FBTyxNQUFNO0lBQ3JCLEtBQUssSUFBSSxVQUFVOzs7O0VBSXJCLFNBQVMsc0JBQXNCLFVBQVUsY0FBYztJQUNyRCxLQUFLLElBQUksMkNBQTJDLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJqRSxPQUFPLGFBQWEsSUFBSSxTQUFTLFNBQVM7TUFDeEMsT0FBTyxJQUFJLFNBQVM7Ozs7Ozs7RUFPeEIsU0FBUyxVQUFVLGdCQUFnQixXQUFXO01BQzFDLEtBQUssSUFBSSx3QkFBd0I7O01BRWpDLElBQUksWUFBWTtNQUNoQixJQUFJLFlBQVksR0FBRzs7TUFFbkIsSUFBSSxVQUFVLElBQUksT0FBTyxLQUFLO09BQzdCLFFBQVEsa0JBQWtCO1NBQ3hCLGVBQWUsQ0FBQyxDQUFDLEtBQUssV0FBVyxnQkFBZ0IsT0FBTyxVQUFVLElBQUksV0FBVyxnQkFBZ0IsT0FBTztTQUN4RyxlQUFlLENBQUMsQ0FBQyxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLO1NBQ2pFLGVBQWUsT0FBTyxLQUFLLFdBQVc7U0FDdEMsZUFBZSxPQUFPLEtBQUssV0FBVztTQUN0QyxlQUFlO1NBQ2YsZUFBZTtVQUNkLFNBQVMsVUFBVSxRQUFRO1VBQzNCLFVBQVUsYUFBYSxTQUFTLEtBQUssR0FBRyxTQUFTLEdBQUc7VUFDcEQsVUFBVSxhQUFhLFNBQVMsS0FBSyxHQUFHLFNBQVMsR0FBRztVQUNwRCxTQUFTLFFBQVE7Ozs7OztPQU1wQixPQUFPLFNBQVM7Ozs7O0VBS3JCLFNBQVMsVUFBVSxtQkFBbUIsV0FBVzs7SUFFL0MsS0FBSyxJQUFJLDJCQUEyQjs7TUFFbEMsSUFBSSxnQkFBZ0I7VUFDaEIsZ0JBQWdCLEdBQUc7VUFDbkIsZ0JBQWdCLElBQUksT0FBTyxLQUFLLE9BQU8sY0FBYyxXQUFXLEtBQUs7VUFDckUsZ0JBQWdCLENBQUMsU0FBUyxVQUFVOzBCQUNwQixVQUFVLElBQUksT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLE1BQU0sV0FBVyxVQUFVOzBCQUNqRixVQUFVOzs7VUFHMUIsY0FBYyxXQUFXO29CQUNmLFVBQVUsU0FBUyxRQUFRO3dCQUN2QixJQUFJLFVBQVUsT0FBTyxLQUFLLE9BQU8sb0JBQW9CLElBQUk7OzRCQUVyRCxVQUFVLGdCQUFnQixRQUFRLEdBQUc7NEJBQ3JDLFNBQVMsUUFBUTs7Ozs7TUFLdkMsT0FBTyxTQUFTOzs7OztFQUtwQixTQUFTLFVBQVUsd0JBQXdCLFdBQVc7SUFDcEQsS0FBSyxJQUFJLGdDQUFnQztJQUN6QyxJQUFJLGlCQUFpQjtTQUNoQixnQkFBZ0IsR0FBRztTQUNuQixnQkFBZ0IsSUFBSSxPQUFPLEtBQUssT0FBTyxjQUFjLFdBQVcsS0FBSzs7U0FFckUsS0FBSyxtQkFBbUIsS0FBSyxTQUFTLFFBQVE7O1VBRTdDLGNBQWMsWUFBWSxDQUFDLFFBQVEsT0FBTztvQkFDaEMsU0FBUyxPQUFPLFFBQVE7d0JBQ3BCLElBQUksVUFBVSxPQUFPLEtBQUssT0FBTyxvQkFBb0IsSUFBSTswQkFDdkQsU0FBUyxRQUFRLFFBQVEsT0FBTyxXQUFXOzs7Ozs7O1FBTzdELE9BQU8sU0FBUzs7Ozs7RUFLdEIsU0FBUyxVQUFVLGNBQWMsU0FBUyxXQUFXO0lBQ25ELElBQUksSUFBSSxJQUFJO1FBQ1IsU0FBUyxFQUFFOztNQUViLE9BQU8sUUFBUSxRQUFRLElBQUksS0FBSyxLQUFLLGNBQWMsUUFBUSxTQUFTLFdBQVcsV0FBVyxNQUFNLFFBQVEsSUFBSTs7Ozs7Ozs7Ozs7Ozs7RUFjaEgsT0FBTzs7O0lBR047OztBQ3BKSDs7QUFFQSxJQUFJLE9BQU8sUUFBUTs7QUFFbkIsT0FBTyxVQUFVLFFBQVEsT0FBTyxjQUFjOztBQUU5QyxLQUFLLFdBQVcsQ0FBQyw4QkFBOEI7OztBQ04vQzs7Ozs7OztBQU1BLFNBQVMsU0FBUyxnQkFBZ0IsbUJBQW1CLG9CQUFvQixVQUFVOzs7RUFHakYsUUFBUSxtQ0FBbUM7O0FBRTdDOztHQUVHLE1BQU0sT0FBTztJQUNaLEtBQUs7SUFDTCxVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7SUFDWixRQUFRO1FBQ0osMENBQVksU0FBUyxlQUFlLFVBQVU7WUFDMUMsT0FBTyxjQUFjOzs7O0dBSTlCLE1BQU0sZUFBZTtJQUNwQixLQUFLO0lBQ0wsT0FBTztNQUNMLGVBQWU7UUFDYixhQUFhO1FBQ2IsWUFBWTs7Ozs7R0FLakIsTUFBTSxhQUFhO0lBQ2xCLEtBQUs7SUFDTCxPQUFPO01BQ0wsZUFBZTtRQUNiLGFBQWE7UUFDYixZQUFZOzs7OztHQUtqQixNQUFNLGNBQWM7SUFDbkIsS0FBSztJQUNMLE9BQU87TUFDTCxlQUFlO1FBQ2IsYUFBYTtRQUNiLFlBQVk7Ozs7OztHQU1qQixNQUFNLFdBQVc7TUFDZCxLQUFLO01BQ0wsT0FBTztRQUNMLGVBQWU7VUFDYixhQUFhO1VBQ2IsWUFBWTs7Ozs7Ozs7RUFRcEIsbUJBQW1CLFVBQVU7Ozs7Ozs7O0FBUS9CLE9BQU8sVUFBVSxTQUFTOzs7QUM1RTFCOzs7Ozs7QUFLQSxTQUFTLE1BQU0sZ0JBQWdCLE1BQU0sVUFBVTtFQUM3QyxPQUFPLEtBQUssWUFBWTs7RUFFeEIsZUFBZSxNQUFNLFdBQVc7SUFDOUIsU0FBUyxRQUFROzs7O0lBSWpCLElBQUksT0FBTyxXQUFXLE9BQU8sUUFBUSxRQUFRLFVBQVU7TUFDckQsUUFBUSxRQUFRLFNBQVMseUJBQXlCO01BQ2xELFFBQVEsUUFBUSxTQUFTLGNBQWM7OztJQUd6QyxJQUFJLE9BQU8sV0FBVzs7TUFFcEIsVUFBVTs7Ozs7QUFLaEIsT0FBTyxVQUFVLE1BQU07OztBQ3pCdkI7OztBQUVBLElBQUksaUJBQWlCLFFBQVE7Ozs7O0FBSzdCLFNBQVMsY0FBYyxJQUFJLE9BQU8sT0FBTyxhQUFhO0VBQ3BELE9BQU8sS0FBSyxZQUFZO0VBQ3hCLElBQUksV0FBVyxJQUFJLE9BQU8sS0FBSztFQUMvQixJQUFJLFVBQVU7O0VBRWQsUUFBUSxNQUFNLFdBQVc7O0lBRXZCLElBQUksV0FBVyxHQUFHOztJQUVsQixVQUFVLFlBQVksbUJBQW1CLFNBQVMsS0FBSztNQUNyRCxLQUFLLE1BQU0seUJBQXlCO01BQ3BDLEtBQUssTUFBTSwyQkFBMkI7Ozs7TUFJdEMsSUFBSSxTQUFTLElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxPQUFPLFVBQVUsSUFBSSxPQUFPO01BQ3BFLElBQUk7O01BRUosU0FBUyxRQUFRLENBQUMsVUFBVSxTQUFTLFNBQVMsU0FBUyxRQUFRO1VBQzNELElBQUksVUFBVSxPQUFPLEtBQUssZUFBZSxNQUFNLFFBQVEsSUFBSTs7ZUFFdEQsUUFBUSxFQUFFOzBCQUNDLEVBQUUsSUFBSSxRQUFRLEdBQUcsb0JBQW9CLFNBQVMsS0FBSzs0QkFDakQsR0FBRyxFQUFFLFNBQVMsS0FBSyxNQUFNLGFBQWEsT0FBTzs7OztRQUlqRSxJQUFJLE9BQU8sTUFBTSxHQUFHOztRQUVwQixTQUFTLFFBQVE7OztNQUduQixTQUFTLE9BQU87T0FDZixLQUFLLEtBQUssNkJBQTZCO09BQ3ZDLFNBQVMsT0FBTyxPQUFPOzs7OztJQUsxQixPQUFPLFNBQVM7OztFQUdsQixPQUFPOzs7O0FBSVQsZUFBZSxRQUFRLGlCQUFpQixlQUFlOzs7QUNyRHZEOzs7QUFFQSxJQUFJLGlCQUFpQixRQUFROzs7Ozs7O0FBTzdCLFNBQVMsaUJBQWlCLE1BQU0sT0FBTyxVQUFVLElBQUksVUFBVTtFQUM3RCxPQUFPLEtBQUssWUFBWTs7RUFFeEIsSUFBSSxVQUFVOzs7RUFHZCxRQUFRLE1BQU0sVUFBVSxVQUFVOztJQUVoQyxLQUFLLE1BQU0sK0NBQStDOztJQUUxRCxPQUFPLE1BQU0sSUFBSTtpQkFDSixLQUFLLFNBQVMsS0FBSzs7O2tCQUdsQixPQUFPLEdBQUcsSUFBSSxTQUFTLG9CQUFvQjs7Ozs7OztFQU8zRCxRQUFRLE1BQU0sVUFBVSxVQUFVOztJQUVoQyxLQUFLLE1BQU07O0lBRVgsT0FBTyxNQUFNO2lCQUNBLEtBQUssU0FBUyxLQUFLOzs7a0JBR2xCLE9BQU8sR0FBRyxJQUFJLFNBQVMsb0JBQW9COzs7OztFQUszRCxPQUFPOzs7O0FBSVQsZUFBZSxRQUFRLG9CQUFvQixrQkFBa0I7OztBQy9DN0Q7OztBQUVBLElBQUksaUJBQWlCLFFBQVE7QUFDN0IsSUFBSSxnQkFBZ0I7RUFDbEIsT0FBTyxRQUFRO0VBQ2YsT0FBTyxRQUFROzs7Ozs7QUFNakIsU0FBUyxNQUFNLElBQUksT0FBTyxhQUFhLE1BQU0sVUFBVTs7RUFFckQsSUFBSSxVQUFVO0VBQ2QsT0FBTyxLQUFLLFlBQVk7Ozs7RUFJeEIsUUFBUSxNQUFNLFVBQVUsVUFBVTtJQUNoQyxJQUFJLFdBQVcsR0FBRztJQUNsQixTQUFTLFdBQVc7TUFDbEIsU0FBUyxRQUFRLGNBQWMsUUFBUSxTQUFTO09BQy9DOzs7Ozs7Ozs7Ozs7OztJQWNILE9BQU8sU0FBUzs7Ozs7RUFLbEIsUUFBUSxNQUFNLFNBQVMsUUFBUTtJQUM3QixJQUFJLFdBQVcsR0FBRzs7O0dBR25CLE1BQU0sSUFBSSxZQUFZLFNBQVMsS0FBSztTQUM5QixRQUFRLFNBQVMsTUFBTTtVQUN0QixLQUFLLE1BQU0sbUNBQW1DO1VBQzlDLFNBQVMsUUFBUTs7U0FFbEIsTUFBTSxTQUFTLEtBQUssUUFBUTtVQUMzQixLQUFLLEtBQUssNkJBQTZCLElBQUk7VUFDM0MsU0FBUyxPQUFPLEtBQUs7OztJQUczQixPQUFPLFNBQVM7Ozs7RUFJbEIsT0FBTzs7OztBQUlULGVBQWUsUUFBUSxTQUFTLE9BQU87OztBQy9EdkM7O0FBRUEsSUFBSSxPQUFPLFFBQVE7O0FBRW5CLE9BQU8sVUFBVSxRQUFRLE9BQU8sZ0JBQWdCOztBQUVoRCxLQUFLLFdBQVcsQ0FBQyw4QkFBOEI7OztBQ04vQzs7O0FBRUEsSUFBSSxpQkFBaUIsUUFBUTs7Ozs7QUFLN0IsU0FBUyxlQUFlLElBQUksT0FBTzs7RUFFakMsSUFBSSxVQUFVOztFQUVkLFFBQVEsTUFBTSxXQUFXO0lBQ3ZCLElBQUksV0FBVyxHQUFHOztJQUVsQixNQUFNLElBQUksV0FBVyxRQUFRLFNBQVMsTUFBTTtRQUN4QyxTQUFTLFFBQVE7T0FDbEIsTUFBTSxTQUFTLEtBQUssUUFBUTtRQUMzQixTQUFTLE9BQU8sS0FBSzs7O0lBR3pCLE9BQU8sU0FBUzs7O0VBR2xCLE9BQU87Ozs7QUFJVCxlQUFlLFFBQVEsa0JBQWtCLGdCQUFnQjs7O0FDM0J6RDs7Ozs7Ozs7O0NBU0M7OztBQUdELElBQUksa0JBQWtCLFVBQVUsTUFBTTtRQUM5QjtZQUNJLFNBQVMsVUFBVTs7WUFFbkIsU0FBUyxJQUFJLE9BQU87WUFDcEI7Z0JBQ0ksR0FBRyxRQUFRLG9CQUFvQjtnQkFDL0I7b0JBQ0ksaUJBQWlCOztnQkFFckIsR0FBRztnQkFDSDtvQkFDSSxHQUFHLFFBQVE7b0JBQ1g7d0JBQ0ksUUFBUSxPQUFPOzt5QkFFZCxHQUFHLFFBQVE7b0JBQ2hCO3dCQUNJLFFBQVEsTUFBTTs7O2dCQUd0QixNQUFNLENBQUMsTUFBTSxXQUFXLFNBQVMsS0FBSyxNQUFNLFFBQVE7OztZQUd4RCxPQUFPLE9BQU8sUUFBUSxnQkFBZ0IsVUFBVSxHQUFHO1lBQ25EO2dCQUNJLE9BQU87O2dCQUVQLEtBQUs7b0JBQ0QsT0FBTyxLQUFLO2dCQUNoQixLQUFLO29CQUNELE9BQU8sSUFBSSxLQUFLLGFBQWE7Z0JBQ2pDLEtBQUs7b0JBQ0QsT0FBTyxJQUFJLEtBQUs7Z0JBQ3BCLEtBQUs7b0JBQ0QsT0FBTyxJQUFJLEtBQUs7Z0JBQ3BCLEtBQUs7b0JBQ0QsT0FBTyxJQUFJLEtBQUs7Z0JBQ3BCLEtBQUs7b0JBQ0QsT0FBTyxJQUFJLEtBQUs7Z0JBQ3BCLEtBQUs7b0JBQ0QsT0FBTyxJQUFJLEtBQUssbUJBQW1CO2dCQUN2QztvQkFDSSxNQUFNLElBQUksTUFBTSw4QkFBOEI7Ozs7Ozs7Ozs7Ozs7O0NBY2pFLE9BQU8sVUFBVTtJQUNkLGNBQWMsWUFBWSxFQUFFLE9BQU8sZ0JBQWdCLElBQUk7Ozs7QUN0RTNEO0FEMkVBOzs7OztDQ3JFQyxJQUFJLGVBQWUsVUFBVSxXQUFXOzs7O2NBSTNCLFNBQVMsV0FBVyxRQUFRLEVBQUUsYUFBYSxVQUFVO2NBQ3JEOzs7O2tCQUlJLFFBQVEscUJBQXFCOztrQkFFN0IsT0FBTzs7Ozs7QUFLekIsT0FBTyxXQUFXLGFBQWE7OztBQ3RCL0I7Ozs7Ozs7OztBQVNBLElBQUksaUJBQWlCLFVBQVUsTUFBTTtFQUNuQyxJQUFJLFdBQVcsUUFBUTtFQUN2QixJQUFJLFdBQVcsUUFBUTs7Ozs7Ozs7RUFRdkIsSUFBSSxRQUFRLENBQUMsVUFBVSxNQUFNO01BQ3pCLE9BQU87UUFDTCxRQUFRLEtBQUs7UUFDYixRQUFRLEtBQUs7UUFDYixRQUFRLEtBQUs7UUFDYixRQUFRLEtBQUs7UUFDYixRQUFRLEtBQUs7O01BRWY7Ozs7Ozs7OztJQVNGLElBQUksZUFBZSxVQUFVLE9BQU8sV0FBVyxTQUFTOzs7Ozs7Ozs7OztNQVd0RCxJQUFJLGdCQUFnQixXQUFXO1FBQzdCLElBQUksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLO1lBQ2xDLE9BQU8sU0FBUztZQUNoQixZQUFZLFlBQVksWUFBWTs7WUFFcEMsS0FBSyxLQUFLLFNBQVMsZ0JBQWdCLEVBQUUsS0FBSyxXQUFXLEtBQUs7O1FBRTlELEdBQUcsUUFBUSxNQUFNLE1BQU0sT0FBTyxTQUFTLE9BQU8sTUFBTTs7OztNQUl0RCxjQUFjLE9BQU87OztRQUduQixRQUFROzs7Ozs7Ozs7Ozs7OztJQWNaLElBQUksY0FBYyxVQUFVLFdBQVcsUUFBUTtNQUM3QyxZQUFZLEVBQUUsY0FBYyxjQUFjLFlBQVksT0FBTzs7VUFFekQsTUFBTTtXQUNMLFFBQVEsY0FBYyxNQUFNLE9BQU8sV0FBVztXQUM5QyxRQUFRLGNBQWMsTUFBTSxPQUFPLFdBQVc7V0FDOUMsUUFBUSxjQUFjLE1BQU0sT0FBTyxXQUFXO1dBQzlDLFFBQVEsY0FBYyxNQUFNLE9BQU8sV0FBVzs7Ozs7Ozs7O0lBU3JELEtBQUssUUFBUSxjQUFjLEtBQUs7SUFDaEMsS0FBSyxRQUFRLGNBQWMsS0FBSztJQUNoQyxLQUFLLFFBQVEsY0FBYyxLQUFLO0lBQ2hDLEtBQUssUUFBUSxjQUFjLEtBQUs7Ozs7SUFJaEMsS0FBSyxjQUFjOzs7SUFHbkIsT0FBTzs7Ozs7QUFLWCxPQUFPLFdBQVcsZUFBZTs7O0FDMUdqQzs7Ozs7OztDQU9DOztBQUVELElBQUksWUFBWSxVQUFVLFVBQVUsUUFBUSxVQUFVO1lBQzFDLFVBQVUsV0FBVzs7WUFFckIsT0FBTyxTQUFTLFFBQVEsU0FBUyxTQUFTLEdBQUcsR0FBRztnQkFDNUMsSUFBSSxJQUFJLEVBQUUsTUFBTTtvQkFDWixJQUFJOztnQkFFUixJQUFJO29CQUNBLEtBQUssSUFBSSxLQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtrQkFDN0IsTUFBTSxFQUFFO29CQUNOLElBQUk7OztnQkFHUixPQUFPLENBQUMsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksSUFBSTs7Ozs7O0FBTTlFLFNBQVMsVUFBVSxTQUFTLFVBQVUsTUFBTSxNQUFNO0lBQzlDLEtBQUssVUFBVSxRQUFRO0lBQ3ZCLE9BQU87OztBQUdYLE9BQU8sT0FBTyxZQUFZLFVBQVUsUUFBUSxVQUFVO0lBQ2xELElBQUksT0FBTztJQUNYLE9BQU8sU0FBUyxNQUFNLFFBQVE7Ozs7OztBQU1sQyxPQUFPLFdBQVcsT0FBTyxXQUFXLFNBQVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiBBbmd1bGFySlMgdjEuNC4zXG4gKGMpIDIwMTAtMjAxNSBHb29nbGUsIEluYy4gaHR0cDovL2FuZ3VsYXJqcy5vcmdcbiBMaWNlbnNlOiBNSVRcbiovXG4oZnVuY3Rpb24oRix0LFcpeyd1c2Ugc3RyaWN0JztmdW5jdGlvbiB1YShhLGIsYyl7aWYoIWEpdGhyb3cgbmdNaW5FcnIoXCJhcmVxXCIsYnx8XCI/XCIsY3x8XCJyZXF1aXJlZFwiKTtyZXR1cm4gYX1mdW5jdGlvbiB2YShhLGIpe2lmKCFhJiYhYilyZXR1cm5cIlwiO2lmKCFhKXJldHVybiBiO2lmKCFiKXJldHVybiBhO1goYSkmJihhPWEuam9pbihcIiBcIikpO1goYikmJihiPWIuam9pbihcIiBcIikpO3JldHVybiBhK1wiIFwiK2J9ZnVuY3Rpb24gRWEoYSl7dmFyIGI9e307YSYmKGEudG98fGEuZnJvbSkmJihiLnRvPWEudG8sYi5mcm9tPWEuZnJvbSk7cmV0dXJuIGJ9ZnVuY3Rpb24gYmEoYSxiLGMpe3ZhciBkPVwiXCI7YT1YKGEpP2E6YSYmVShhKSYmYS5sZW5ndGg/YS5zcGxpdCgvXFxzKy8pOltdO3UoYSxmdW5jdGlvbihhLHMpe2EmJjA8YS5sZW5ndGgmJihkKz0wPHM/XCIgXCI6XCJcIixkKz1jP2IrYTphK2IpfSk7cmV0dXJuIGR9ZnVuY3Rpb24gRmEoYSl7aWYoYSBpbnN0YW5jZW9mIEcpc3dpdGNoKGEubGVuZ3RoKXtjYXNlIDA6cmV0dXJuW107XG5jYXNlIDE6aWYoMT09PWFbMF0ubm9kZVR5cGUpcmV0dXJuIGE7YnJlYWs7ZGVmYXVsdDpyZXR1cm4gRyhrYShhKSl9aWYoMT09PWEubm9kZVR5cGUpcmV0dXJuIEcoYSl9ZnVuY3Rpb24ga2EoYSl7aWYoIWFbMF0pcmV0dXJuIGE7Zm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBjPWFbYl07aWYoMT09Yy5ub2RlVHlwZSlyZXR1cm4gY319ZnVuY3Rpb24gR2EoYSxiLGMpe3UoYixmdW5jdGlvbihiKXthLmFkZENsYXNzKGIsYyl9KX1mdW5jdGlvbiBIYShhLGIsYyl7dShiLGZ1bmN0aW9uKGIpe2EucmVtb3ZlQ2xhc3MoYixjKX0pfWZ1bmN0aW9uIGhhKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe2MuYWRkQ2xhc3MmJihHYShhLGIsYy5hZGRDbGFzcyksYy5hZGRDbGFzcz1udWxsKTtjLnJlbW92ZUNsYXNzJiYoSGEoYSxiLGMucmVtb3ZlQ2xhc3MpLGMucmVtb3ZlQ2xhc3M9bnVsbCl9fWZ1bmN0aW9uIGlhKGEpe2E9YXx8e307aWYoIWEuJCRwcmVwYXJlZCl7dmFyIGI9YS5kb21PcGVyYXRpb258fFxuSDthLmRvbU9wZXJhdGlvbj1mdW5jdGlvbigpe2EuJCRkb21PcGVyYXRpb25GaXJlZD0hMDtiKCk7Yj1IfTthLiQkcHJlcGFyZWQ9ITB9cmV0dXJuIGF9ZnVuY3Rpb24gY2EoYSxiKXt3YShhLGIpO3hhKGEsYil9ZnVuY3Rpb24gd2EoYSxiKXtiLmZyb20mJihhLmNzcyhiLmZyb20pLGIuZnJvbT1udWxsKX1mdW5jdGlvbiB4YShhLGIpe2IudG8mJihhLmNzcyhiLnRvKSxiLnRvPW51bGwpfWZ1bmN0aW9uIFIoYSxiLGMpe3ZhciBkPShiLmFkZENsYXNzfHxcIlwiKStcIiBcIisoYy5hZGRDbGFzc3x8XCJcIiksZT0oYi5yZW1vdmVDbGFzc3x8XCJcIikrXCIgXCIrKGMucmVtb3ZlQ2xhc3N8fFwiXCIpO2E9SWEoYS5hdHRyKFwiY2xhc3NcIiksZCxlKTt5YShiLGMpO2IuYWRkQ2xhc3M9YS5hZGRDbGFzcz9hLmFkZENsYXNzOm51bGw7Yi5yZW1vdmVDbGFzcz1hLnJlbW92ZUNsYXNzP2EucmVtb3ZlQ2xhc3M6bnVsbDtyZXR1cm4gYn1mdW5jdGlvbiBJYShhLGIsYyl7ZnVuY3Rpb24gZChhKXtVKGEpJiYoYT1hLnNwbGl0KFwiIFwiKSk7XG52YXIgYj17fTt1KGEsZnVuY3Rpb24oYSl7YS5sZW5ndGgmJihiW2FdPSEwKX0pO3JldHVybiBifXZhciBlPXt9O2E9ZChhKTtiPWQoYik7dShiLGZ1bmN0aW9uKGEsYil7ZVtiXT0xfSk7Yz1kKGMpO3UoYyxmdW5jdGlvbihhLGIpe2VbYl09MT09PWVbYl0/bnVsbDotMX0pO3ZhciBzPXthZGRDbGFzczpcIlwiLHJlbW92ZUNsYXNzOlwiXCJ9O3UoZSxmdW5jdGlvbihiLGMpe3ZhciBkLGU7MT09PWI/KGQ9XCJhZGRDbGFzc1wiLGU9IWFbY10pOi0xPT09YiYmKGQ9XCJyZW1vdmVDbGFzc1wiLGU9YVtjXSk7ZSYmKHNbZF0ubGVuZ3RoJiYoc1tkXSs9XCIgXCIpLHNbZF0rPWMpfSk7cmV0dXJuIHN9ZnVuY3Rpb24geihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIHQuZWxlbWVudD9hWzBdOmF9ZnVuY3Rpb24gemEoYSxiLGMpe3ZhciBkPU9iamVjdC5jcmVhdGUobnVsbCksZT1hLmdldENvbXB1dGVkU3R5bGUoYil8fHt9O3UoYyxmdW5jdGlvbihhLGIpe3ZhciBjPWVbYV07aWYoYyl7dmFyIGs9Yy5jaGFyQXQoMCk7XG5pZihcIi1cIj09PWt8fFwiK1wiPT09a3x8MDw9ayljPUphKGMpOzA9PT1jJiYoYz1udWxsKTtkW2JdPWN9fSk7cmV0dXJuIGR9ZnVuY3Rpb24gSmEoYSl7dmFyIGI9MDthPWEuc3BsaXQoL1xccyosXFxzKi8pO3UoYSxmdW5jdGlvbihhKXtcInNcIj09YS5jaGFyQXQoYS5sZW5ndGgtMSkmJihhPWEuc3Vic3RyaW5nKDAsYS5sZW5ndGgtMSkpO2E9cGFyc2VGbG9hdChhKXx8MDtiPWI/TWF0aC5tYXgoYSxiKTphfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gbGEoYSl7cmV0dXJuIDA9PT1hfHxudWxsIT1hfWZ1bmN0aW9uIEFhKGEsYil7dmFyIGM9TyxkPWErXCJzXCI7Yj9jKz1cIkR1cmF0aW9uXCI6ZCs9XCIgbGluZWFyIGFsbFwiO3JldHVybltjLGRdfWZ1bmN0aW9uIGphKGEsYil7dmFyIGM9Yj9cIi1cIitiK1wic1wiOlwiXCI7ZGEoYSxbZWEsY10pO3JldHVybltlYSxjXX1mdW5jdGlvbiBtYShhLGIpe3ZhciBjPWI/XCJwYXVzZWRcIjpcIlwiLGQ9VitcIlBsYXlTdGF0ZVwiO2RhKGEsW2QsY10pO3JldHVybltkLGNdfWZ1bmN0aW9uIGRhKGEsXG5iKXthLnN0eWxlW2JbMF1dPWJbMV19ZnVuY3Rpb24gQmEoKXt2YXIgYT1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybntmbHVzaDpmdW5jdGlvbigpe2E9T2JqZWN0LmNyZWF0ZShudWxsKX0sY291bnQ6ZnVuY3Rpb24oYil7cmV0dXJuKGI9YVtiXSk/Yi50b3RhbDowfSxnZXQ6ZnVuY3Rpb24oYil7cmV0dXJuKGI9YVtiXSkmJmIudmFsdWV9LHB1dDpmdW5jdGlvbihiLGMpe2FbYl0/YVtiXS50b3RhbCsrOmFbYl09e3RvdGFsOjEsdmFsdWU6Y319fX12YXIgSD10Lm5vb3AseWE9dC5leHRlbmQsRz10LmVsZW1lbnQsdT10LmZvckVhY2gsWD10LmlzQXJyYXksVT10LmlzU3RyaW5nLG5hPXQuaXNPYmplY3QsS2E9dC5pc1VuZGVmaW5lZCxMYT10LmlzRGVmaW5lZCxDYT10LmlzRnVuY3Rpb24sb2E9dC5pc0VsZW1lbnQsTyxwYSxWLHFhO0Yub250cmFuc2l0aW9uZW5kPT09VyYmRi5vbndlYmtpdHRyYW5zaXRpb25lbmQhPT1XPyhPPVwiV2Via2l0VHJhbnNpdGlvblwiLHBhPVwid2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kXCIpOlxuKE89XCJ0cmFuc2l0aW9uXCIscGE9XCJ0cmFuc2l0aW9uZW5kXCIpO0Yub25hbmltYXRpb25lbmQ9PT1XJiZGLm9ud2Via2l0YW5pbWF0aW9uZW5kIT09Vz8oVj1cIldlYmtpdEFuaW1hdGlvblwiLHFhPVwid2Via2l0QW5pbWF0aW9uRW5kIGFuaW1hdGlvbmVuZFwiKTooVj1cImFuaW1hdGlvblwiLHFhPVwiYW5pbWF0aW9uZW5kXCIpO3ZhciByYT1WK1wiRGVsYXlcIixzYT1WK1wiRHVyYXRpb25cIixlYT1PK1wiRGVsYXlcIjtGPU8rXCJEdXJhdGlvblwiO3ZhciBNYT17dHJhbnNpdGlvbkR1cmF0aW9uOkYsdHJhbnNpdGlvbkRlbGF5OmVhLHRyYW5zaXRpb25Qcm9wZXJ0eTpPK1wiUHJvcGVydHlcIixhbmltYXRpb25EdXJhdGlvbjpzYSxhbmltYXRpb25EZWxheTpyYSxhbmltYXRpb25JdGVyYXRpb25Db3VudDpWK1wiSXRlcmF0aW9uQ291bnRcIn0sTmE9e3RyYW5zaXRpb25EdXJhdGlvbjpGLHRyYW5zaXRpb25EZWxheTplYSxhbmltYXRpb25EdXJhdGlvbjpzYSxhbmltYXRpb25EZWxheTpyYX07dC5tb2R1bGUoXCJuZ0FuaW1hdGVcIixcbltdKS5kaXJlY3RpdmUoXCJuZ0FuaW1hdGVDaGlsZHJlblwiLFtmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihhLGIsYyl7YT1jLm5nQW5pbWF0ZUNoaWxkcmVuO3QuaXNTdHJpbmcoYSkmJjA9PT1hLmxlbmd0aD9iLmRhdGEoXCIkJG5nQW5pbWF0ZUNoaWxkcmVuXCIsITApOmMuJG9ic2VydmUoXCJuZ0FuaW1hdGVDaGlsZHJlblwiLGZ1bmN0aW9uKGEpe2IuZGF0YShcIiQkbmdBbmltYXRlQ2hpbGRyZW5cIixcIm9uXCI9PT1hfHxcInRydWVcIj09PWEpfSl9fV0pLmZhY3RvcnkoXCIkJHJBRk11dGV4XCIsW1wiJCRyQUZcIixmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYj0hMTthKGZ1bmN0aW9uKCl7Yj0hMH0pO3JldHVybiBmdW5jdGlvbihjKXtiP2MoKTphKGMpfX19XSkuZmFjdG9yeShcIiQkckFGU2NoZWR1bGVyXCIsW1wiJCRyQUZcIixmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe2QucHVzaChbXS5jb25jYXQoYSkpO2MoKX1mdW5jdGlvbiBjKCl7aWYoZC5sZW5ndGgpe2Zvcih2YXIgYj1bXSxuPVxuMDtuPGQubGVuZ3RoO24rKyl7dmFyIGg9ZFtuXTtoLnNoaWZ0KCkoKTtoLmxlbmd0aCYmYi5wdXNoKGgpfWQ9YjtlfHxhKGZ1bmN0aW9uKCl7ZXx8YygpfSl9fXZhciBkPVtdLGU7Yi53YWl0VW50aWxRdWlldD1mdW5jdGlvbihiKXtlJiZlKCk7ZT1hKGZ1bmN0aW9uKCl7ZT1udWxsO2IoKTtjKCl9KX07cmV0dXJuIGJ9XSkuZmFjdG9yeShcIiQkQW5pbWF0ZVJ1bm5lclwiLFtcIiRxXCIsXCIkJHJBRk11dGV4XCIsZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEpe3RoaXMuc2V0SG9zdChhKTt0aGlzLl9kb25lQ2FsbGJhY2tzPVtdO3RoaXMuX3J1bkluQW5pbWF0aW9uRnJhbWU9YigpO3RoaXMuX3N0YXRlPTB9Yy5jaGFpbj1mdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoKXtpZihuPT09YS5sZW5ndGgpYighMCk7ZWxzZSBhW25dKGZ1bmN0aW9uKGEpeyExPT09YT9iKCExKToobisrLGMoKSl9KX12YXIgbj0wO2MoKX07Yy5hbGw9ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKHMpe2g9aCYmczsrK249PT1cbmEubGVuZ3RoJiZiKGgpfXZhciBuPTAsaD0hMDt1KGEsZnVuY3Rpb24oYSl7YS5kb25lKGMpfSl9O2MucHJvdG90eXBlPXtzZXRIb3N0OmZ1bmN0aW9uKGEpe3RoaXMuaG9zdD1hfHx7fX0sZG9uZTpmdW5jdGlvbihhKXsyPT09dGhpcy5fc3RhdGU/YSgpOnRoaXMuX2RvbmVDYWxsYmFja3MucHVzaChhKX0scHJvZ3Jlc3M6SCxnZXRQcm9taXNlOmZ1bmN0aW9uKCl7aWYoIXRoaXMucHJvbWlzZSl7dmFyIGI9dGhpczt0aGlzLnByb21pc2U9YShmdW5jdGlvbihhLGMpe2IuZG9uZShmdW5jdGlvbihiKXshMT09PWI/YygpOmEoKX0pfSl9cmV0dXJuIHRoaXMucHJvbWlzZX0sdGhlbjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmdldFByb21pc2UoKS50aGVuKGEsYil9LFwiY2F0Y2hcIjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5nZXRQcm9taXNlKClbXCJjYXRjaFwiXShhKX0sXCJmaW5hbGx5XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZ2V0UHJvbWlzZSgpW1wiZmluYWxseVwiXShhKX0scGF1c2U6ZnVuY3Rpb24oKXt0aGlzLmhvc3QucGF1c2UmJlxudGhpcy5ob3N0LnBhdXNlKCl9LHJlc3VtZTpmdW5jdGlvbigpe3RoaXMuaG9zdC5yZXN1bWUmJnRoaXMuaG9zdC5yZXN1bWUoKX0sZW5kOmZ1bmN0aW9uKCl7dGhpcy5ob3N0LmVuZCYmdGhpcy5ob3N0LmVuZCgpO3RoaXMuX3Jlc29sdmUoITApfSxjYW5jZWw6ZnVuY3Rpb24oKXt0aGlzLmhvc3QuY2FuY2VsJiZ0aGlzLmhvc3QuY2FuY2VsKCk7dGhpcy5fcmVzb2x2ZSghMSl9LGNvbXBsZXRlOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7MD09PWIuX3N0YXRlJiYoYi5fc3RhdGU9MSxiLl9ydW5JbkFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7Yi5fcmVzb2x2ZShhKX0pKX0sX3Jlc29sdmU6ZnVuY3Rpb24oYSl7MiE9PXRoaXMuX3N0YXRlJiYodSh0aGlzLl9kb25lQ2FsbGJhY2tzLGZ1bmN0aW9uKGIpe2IoYSl9KSx0aGlzLl9kb25lQ2FsbGJhY2tzLmxlbmd0aD0wLHRoaXMuX3N0YXRlPTIpfX07cmV0dXJuIGN9XSkucHJvdmlkZXIoXCIkJGFuaW1hdGVRdWV1ZVwiLFtcIiRhbmltYXRlUHJvdmlkZXJcIixcbmZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSxiLGMsaCl7cmV0dXJuIGRbYV0uc29tZShmdW5jdGlvbihhKXtyZXR1cm4gYShiLGMsaCl9KX1mdW5jdGlvbiBjKGEsYil7YT1hfHx7fTt2YXIgYz0wPChhLmFkZENsYXNzfHxcIlwiKS5sZW5ndGgsZD0wPChhLnJlbW92ZUNsYXNzfHxcIlwiKS5sZW5ndGg7cmV0dXJuIGI/YyYmZDpjfHxkfXZhciBkPXRoaXMucnVsZXM9e3NraXA6W10sY2FuY2VsOltdLGpvaW46W119O2Quam9pbi5wdXNoKGZ1bmN0aW9uKGEsYixkKXtyZXR1cm4hYi5zdHJ1Y3R1cmFsJiZjKGIub3B0aW9ucyl9KTtkLnNraXAucHVzaChmdW5jdGlvbihhLGIsZCl7cmV0dXJuIWIuc3RydWN0dXJhbCYmIWMoYi5vcHRpb25zKX0pO2Quc2tpcC5wdXNoKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5cImxlYXZlXCI9PWMuZXZlbnQmJmIuc3RydWN0dXJhbH0pO2Quc2tpcC5wdXNoKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYy5zdHJ1Y3R1cmFsJiYhYi5zdHJ1Y3R1cmFsfSk7ZC5jYW5jZWwucHVzaChmdW5jdGlvbihhLFxuYixjKXtyZXR1cm4gYy5zdHJ1Y3R1cmFsJiZiLnN0cnVjdHVyYWx9KTtkLmNhbmNlbC5wdXNoKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gMj09PWMuc3RhdGUmJmIuc3RydWN0dXJhbH0pO2QuY2FuY2VsLnB1c2goZnVuY3Rpb24oYSxiLGMpe2E9Yi5vcHRpb25zO2M9Yy5vcHRpb25zO3JldHVybiBhLmFkZENsYXNzJiZhLmFkZENsYXNzPT09Yy5yZW1vdmVDbGFzc3x8YS5yZW1vdmVDbGFzcyYmYS5yZW1vdmVDbGFzcz09PWMuYWRkQ2xhc3N9KTt0aGlzLiRnZXQ9W1wiJCRyQUZcIixcIiRyb290U2NvcGVcIixcIiRyb290RWxlbWVudFwiLFwiJGRvY3VtZW50XCIsXCIkJEhhc2hNYXBcIixcIiQkYW5pbWF0aW9uXCIsXCIkJEFuaW1hdGVSdW5uZXJcIixcIiR0ZW1wbGF0ZVJlcXVlc3RcIixcIiQkanFMaXRlXCIsZnVuY3Rpb24oZCxzLG4saCxrLEQsQSxaLEkpe2Z1bmN0aW9uIHcoYSxiKXt2YXIgYz16KGEpLGY9W10sbT1sW2JdO20mJnUobSxmdW5jdGlvbihhKXthLm5vZGUuY29udGFpbnMoYykmJmYucHVzaChhLmNhbGxiYWNrKX0pO1xucmV0dXJuIGZ9ZnVuY3Rpb24gQihhLGIsYyxmKXtkKGZ1bmN0aW9uKCl7dSh3KGIsYSksZnVuY3Rpb24oYSl7YShiLGMsZil9KX0pfWZ1bmN0aW9uIHIoYSxTLHApe2Z1bmN0aW9uIGQoYixjLGYscCl7QihjLGEsZixwKTtiLnByb2dyZXNzKGMsZixwKX1mdW5jdGlvbiBnKGIpe0RhKGEscCk7Y2EoYSxwKTtwLmRvbU9wZXJhdGlvbigpO2wuY29tcGxldGUoIWIpfXZhciBQLEU7aWYoYT1GYShhKSlQPXooYSksRT1hLnBhcmVudCgpO3A9aWEocCk7dmFyIGw9bmV3IEE7aWYoIVApcmV0dXJuIGcoKSxsO1gocC5hZGRDbGFzcykmJihwLmFkZENsYXNzPXAuYWRkQ2xhc3Muam9pbihcIiBcIikpO1gocC5yZW1vdmVDbGFzcykmJihwLnJlbW92ZUNsYXNzPXAucmVtb3ZlQ2xhc3Muam9pbihcIiBcIikpO3AuZnJvbSYmIW5hKHAuZnJvbSkmJihwLmZyb209bnVsbCk7cC50byYmIW5hKHAudG8pJiYocC50bz1udWxsKTt2YXIgZT1bUC5jbGFzc05hbWUscC5hZGRDbGFzcyxwLnJlbW92ZUNsYXNzXS5qb2luKFwiIFwiKTtcbmlmKCF2KGUpKXJldHVybiBnKCksbDt2YXIgTT0wPD1bXCJlbnRlclwiLFwibW92ZVwiLFwibGVhdmVcIl0uaW5kZXhPZihTKSxoPSF4fHxMLmdldChQKSxlPSFoJiZtLmdldChQKXx8e30saz0hIWUuc3RhdGU7aHx8ayYmMT09ZS5zdGF0ZXx8KGg9IXRhKGEsRSxTKSk7aWYoaClyZXR1cm4gZygpLGw7TSYmSyhhKTtoPXtzdHJ1Y3R1cmFsOk0sZWxlbWVudDphLGV2ZW50OlMsY2xvc2U6ZyxvcHRpb25zOnAscnVubmVyOmx9O2lmKGspe2lmKGIoXCJza2lwXCIsYSxoLGUpKXtpZigyPT09ZS5zdGF0ZSlyZXR1cm4gZygpLGw7UihhLGUub3B0aW9ucyxwKTtyZXR1cm4gZS5ydW5uZXJ9aWYoYihcImNhbmNlbFwiLGEsaCxlKSkyPT09ZS5zdGF0ZT9lLnJ1bm5lci5lbmQoKTplLnN0cnVjdHVyYWw/ZS5jbG9zZSgpOlIoYSxoLm9wdGlvbnMsZS5vcHRpb25zKTtlbHNlIGlmKGIoXCJqb2luXCIsYSxoLGUpKWlmKDI9PT1lLnN0YXRlKVIoYSxwLHt9KTtlbHNlIHJldHVybiBTPWguZXZlbnQ9ZS5ldmVudCxwPVIoYSxcbmUub3B0aW9ucyxoLm9wdGlvbnMpLGx9ZWxzZSBSKGEscCx7fSk7KGs9aC5zdHJ1Y3R1cmFsKXx8KGs9XCJhbmltYXRlXCI9PT1oLmV2ZW50JiYwPE9iamVjdC5rZXlzKGgub3B0aW9ucy50b3x8e30pLmxlbmd0aHx8YyhoLm9wdGlvbnMpKTtpZighaylyZXR1cm4gZygpLEMoYSksbDtNJiZmKEUpO3ZhciByPShlLmNvdW50ZXJ8fDApKzE7aC5jb3VudGVyPXI7Z2EoYSwxLGgpO3MuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7dmFyIGI9bS5nZXQoUCksdj0hYixiPWJ8fHt9LGU9YS5wYXJlbnQoKXx8W10sRT0wPGUubGVuZ3RoJiYoXCJhbmltYXRlXCI9PT1iLmV2ZW50fHxiLnN0cnVjdHVyYWx8fGMoYi5vcHRpb25zKSk7aWYodnx8Yi5jb3VudGVyIT09cnx8IUUpe3YmJihEYShhLHApLGNhKGEscCkpO2lmKHZ8fE0mJmIuZXZlbnQhPT1TKXAuZG9tT3BlcmF0aW9uKCksbC5lbmQoKTtFfHxDKGEpfWVsc2UgUz0hYi5zdHJ1Y3R1cmFsJiZjKGIub3B0aW9ucywhMCk/XCJzZXRDbGFzc1wiOmIuZXZlbnQsXG5iLnN0cnVjdHVyYWwmJmYoZSksZ2EoYSwyKSxiPUQoYSxTLGIub3B0aW9ucyksYi5kb25lKGZ1bmN0aW9uKGIpe2coIWIpOyhiPW0uZ2V0KFApKSYmYi5jb3VudGVyPT09ciYmQyh6KGEpKTtkKGwsUyxcImNsb3NlXCIse30pfSksbC5zZXRIb3N0KGIpLGQobCxTLFwic3RhcnRcIix7fSl9KTtyZXR1cm4gbH1mdW5jdGlvbiBLKGEpe2E9eihhKS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbmctYW5pbWF0ZV1cIik7dShhLGZ1bmN0aW9uKGEpe3ZhciBiPXBhcnNlSW50KGEuZ2V0QXR0cmlidXRlKFwiZGF0YS1uZy1hbmltYXRlXCIpKSxjPW0uZ2V0KGEpO3N3aXRjaChiKXtjYXNlIDI6Yy5ydW5uZXIuZW5kKCk7Y2FzZSAxOmMmJm0ucmVtb3ZlKGEpfX0pfWZ1bmN0aW9uIEMoYSl7YT16KGEpO2EucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1uZy1hbmltYXRlXCIpO20ucmVtb3ZlKGEpfWZ1bmN0aW9uIEUoYSxiKXtyZXR1cm4geihhKT09PXooYil9ZnVuY3Rpb24gZihhKXthPXooYSk7ZG97aWYoIWF8fDEhPT1cbmEubm9kZVR5cGUpYnJlYWs7dmFyIGI9bS5nZXQoYSk7aWYoYil7dmFyIGY9YTshYi5zdHJ1Y3R1cmFsJiZjKGIub3B0aW9ucykmJigyPT09Yi5zdGF0ZSYmYi5ydW5uZXIuZW5kKCksQyhmKSl9YT1hLnBhcmVudE5vZGV9d2hpbGUoMSl9ZnVuY3Rpb24gdGEoYSxiLGMpe3ZhciBmPWM9ITEsZD0hMSx2O2ZvcigoYT1hLmRhdGEoXCIkbmdBbmltYXRlUGluXCIpKSYmKGI9YSk7YiYmYi5sZW5ndGg7KXtmfHwoZj1FKGIsbikpO2E9YlswXTtpZigxIT09YS5ub2RlVHlwZSlicmVhazt2YXIgZT1tLmdldChhKXx8e307ZHx8KGQ9ZS5zdHJ1Y3R1cmFsfHxMLmdldChhKSk7aWYoS2Eodil8fCEwPT09dilhPWIuZGF0YShcIiQkbmdBbmltYXRlQ2hpbGRyZW5cIiksTGEoYSkmJih2PWEpO2lmKGQmJiExPT09dilicmVhaztmfHwoZj1FKGIsbiksZnx8KGE9Yi5kYXRhKFwiJG5nQW5pbWF0ZVBpblwiKSkmJihiPWEpKTtjfHwoYz1FKGIsZykpO2I9Yi5wYXJlbnQoKX1yZXR1cm4oIWR8fHYpJiZmJiZjfWZ1bmN0aW9uIGdhKGEsXG5iLGMpe2M9Y3x8e307Yy5zdGF0ZT1iO2E9eihhKTthLnNldEF0dHJpYnV0ZShcImRhdGEtbmctYW5pbWF0ZVwiLGIpO2M9KGI9bS5nZXQoYSkpP3lhKGIsYyk6YzttLnB1dChhLGMpfXZhciBtPW5ldyBrLEw9bmV3IGsseD1udWxsLE09cy4kd2F0Y2goZnVuY3Rpb24oKXtyZXR1cm4gMD09PVoudG90YWxQZW5kaW5nUmVxdWVzdHN9LGZ1bmN0aW9uKGEpe2EmJihNKCkscy4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXtzLiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe251bGw9PT14JiYoeD0hMCl9KX0pKX0pLGc9RyhoWzBdLmJvZHkpLGw9e30sUD1hLmNsYXNzTmFtZUZpbHRlcigpLHY9UD9mdW5jdGlvbihhKXtyZXR1cm4gUC50ZXN0KGEpfTpmdW5jdGlvbigpe3JldHVybiEwfSxEYT1oYShJKTtyZXR1cm57b246ZnVuY3Rpb24oYSxiLGMpe2I9a2EoYik7bFthXT1sW2FdfHxbXTtsW2FdLnB1c2goe25vZGU6YixjYWxsYmFjazpjfSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gZihhLFxuYixjKXt2YXIgZD1rYShiKTtyZXR1cm4gYS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIShhLm5vZGU9PT1kJiYoIWN8fGEuY2FsbGJhY2s9PT1jKSl9KX12YXIgZD1sW2FdO2QmJihsW2FdPTE9PT1hcmd1bWVudHMubGVuZ3RoP251bGw6ZihkLGIsYykpfSxwaW46ZnVuY3Rpb24oYSxiKXt1YShvYShhKSxcImVsZW1lbnRcIixcIm5vdCBhbiBlbGVtZW50XCIpO3VhKG9hKGIpLFwicGFyZW50RWxlbWVudFwiLFwibm90IGFuIGVsZW1lbnRcIik7YS5kYXRhKFwiJG5nQW5pbWF0ZVBpblwiLGIpfSxwdXNoOmZ1bmN0aW9uKGEsYixjLGYpe2M9Y3x8e307Yy5kb21PcGVyYXRpb249ZjtyZXR1cm4gcihhLGIsYyl9LGVuYWJsZWQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz1hcmd1bWVudHMubGVuZ3RoO2lmKDA9PT1jKWI9ISF4O2Vsc2UgaWYob2EoYSkpe3ZhciBmPXooYSksZD1MLmdldChmKTsxPT09Yz9iPSFkOihiPSEhYik/ZCYmTC5yZW1vdmUoZik6TC5wdXQoZiwhMCl9ZWxzZSBiPXg9ISFhO3JldHVybiBifX19XX1dKS5wcm92aWRlcihcIiQkYW5pbWF0aW9uXCIsXG5bXCIkYW5pbWF0ZVByb3ZpZGVyXCIsZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhKXtyZXR1cm4gYS5kYXRhKFwiJCRhbmltYXRpb25SdW5uZXJcIil9dmFyIGM9dGhpcy5kcml2ZXJzPVtdO3RoaXMuJGdldD1bXCIkJGpxTGl0ZVwiLFwiJHJvb3RTY29wZVwiLFwiJGluamVjdG9yXCIsXCIkJEFuaW1hdGVSdW5uZXJcIixcIiQkckFGU2NoZWR1bGVyXCIsZnVuY3Rpb24oYSxlLHMsbixoKXt2YXIgaz1bXSxEPWhhKGEpLEE9MCxaPTAsST1bXTtyZXR1cm4gZnVuY3Rpb24odyxCLHIpe2Z1bmN0aW9uIEsoYSl7YT1hLmhhc0F0dHJpYnV0ZShcIm5nLWFuaW1hdGUtcmVmXCIpP1thXTphLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmctYW5pbWF0ZS1yZWZdXCIpO3ZhciBiPVtdO3UoYSxmdW5jdGlvbihhKXt2YXIgYz1hLmdldEF0dHJpYnV0ZShcIm5nLWFuaW1hdGUtcmVmXCIpO2MmJmMubGVuZ3RoJiZiLnB1c2goYSl9KTtyZXR1cm4gYn1mdW5jdGlvbiBDKGEpe3ZhciBiPVtdLGM9e307dShhLGZ1bmN0aW9uKGEsZil7dmFyIGQ9eihhLmVsZW1lbnQpLFxubT0wPD1bXCJlbnRlclwiLFwibW92ZVwiXS5pbmRleE9mKGEuZXZlbnQpLGQ9YS5zdHJ1Y3R1cmFsP0soZCk6W107aWYoZC5sZW5ndGgpe3ZhciBnPW0/XCJ0b1wiOlwiZnJvbVwiO3UoZCxmdW5jdGlvbihhKXt2YXIgYj1hLmdldEF0dHJpYnV0ZShcIm5nLWFuaW1hdGUtcmVmXCIpO2NbYl09Y1tiXXx8e307Y1tiXVtnXT17YW5pbWF0aW9uSUQ6ZixlbGVtZW50OkcoYSl9fSl9ZWxzZSBiLnB1c2goYSl9KTt2YXIgZj17fSxkPXt9O3UoYyxmdW5jdGlvbihjLG0pe3ZhciBnPWMuZnJvbSxlPWMudG87aWYoZyYmZSl7dmFyIGw9YVtnLmFuaW1hdGlvbklEXSxoPWFbZS5hbmltYXRpb25JRF0seD1nLmFuaW1hdGlvbklELnRvU3RyaW5nKCk7aWYoIWRbeF0pe3ZhciBCPWRbeF09e3N0cnVjdHVyYWw6ITAsYmVmb3JlU3RhcnQ6ZnVuY3Rpb24oKXtsLmJlZm9yZVN0YXJ0KCk7aC5iZWZvcmVTdGFydCgpfSxjbG9zZTpmdW5jdGlvbigpe2wuY2xvc2UoKTtoLmNsb3NlKCl9LGNsYXNzZXM6RShsLmNsYXNzZXMsaC5jbGFzc2VzKSxcbmZyb206bCx0bzpoLGFuY2hvcnM6W119O0IuY2xhc3Nlcy5sZW5ndGg/Yi5wdXNoKEIpOihiLnB1c2gobCksYi5wdXNoKGgpKX1kW3hdLmFuY2hvcnMucHVzaCh7b3V0OmcuZWxlbWVudCxcImluXCI6ZS5lbGVtZW50fSl9ZWxzZSBnPWc/Zy5hbmltYXRpb25JRDplLmFuaW1hdGlvbklELGU9Zy50b1N0cmluZygpLGZbZV18fChmW2VdPSEwLGIucHVzaChhW2ddKSl9KTtyZXR1cm4gYn1mdW5jdGlvbiBFKGEsYil7YT1hLnNwbGl0KFwiIFwiKTtiPWIuc3BsaXQoXCIgXCIpO2Zvcih2YXIgYz1bXSxmPTA7ZjxhLmxlbmd0aDtmKyspe3ZhciBkPWFbZl07aWYoXCJuZy1cIiE9PWQuc3Vic3RyaW5nKDAsMykpZm9yKHZhciBnPTA7ZzxiLmxlbmd0aDtnKyspaWYoZD09PWJbZ10pe2MucHVzaChkKTticmVha319cmV0dXJuIGMuam9pbihcIiBcIil9ZnVuY3Rpb24gZihhKXtmb3IodmFyIGI9Yy5sZW5ndGgtMTswPD1iO2ItLSl7dmFyIGY9Y1tiXTtpZihzLmhhcyhmKSYmKGY9cy5nZXQoZikoYSkpKXJldHVybiBmfX1cbmZ1bmN0aW9uIHRhKGEsYyl7YS5mcm9tJiZhLnRvPyhiKGEuZnJvbS5lbGVtZW50KS5zZXRIb3N0KGMpLGIoYS50by5lbGVtZW50KS5zZXRIb3N0KGMpKTpiKGEuZWxlbWVudCkuc2V0SG9zdChjKX1mdW5jdGlvbiBnYSgpe3ZhciBhPWIodyk7IWF8fFwibGVhdmVcIj09PUImJnIuJCRkb21PcGVyYXRpb25GaXJlZHx8YS5lbmQoKX1mdW5jdGlvbiBtKGIpe3cub2ZmKFwiJGRlc3Ryb3lcIixnYSk7dy5yZW1vdmVEYXRhKFwiJCRhbmltYXRpb25SdW5uZXJcIik7RCh3LHIpO2NhKHcscik7ci5kb21PcGVyYXRpb24oKTtnJiZhLnJlbW92ZUNsYXNzKHcsZyk7dy5yZW1vdmVDbGFzcyhcIm5nLWFuaW1hdGVcIik7eC5jb21wbGV0ZSghYil9cj1pYShyKTt2YXIgTD0wPD1bXCJlbnRlclwiLFwibW92ZVwiLFwibGVhdmVcIl0uaW5kZXhPZihCKSx4PW5ldyBuKHtlbmQ6ZnVuY3Rpb24oKXttKCl9LGNhbmNlbDpmdW5jdGlvbigpe20oITApfX0pO2lmKCFjLmxlbmd0aClyZXR1cm4gbSgpLHg7dy5kYXRhKFwiJCRhbmltYXRpb25SdW5uZXJcIixcbngpO3ZhciBNPXZhKHcuYXR0cihcImNsYXNzXCIpLHZhKHIuYWRkQ2xhc3Msci5yZW1vdmVDbGFzcykpLGc9ci50ZW1wQ2xhc3NlcztnJiYoTSs9XCIgXCIrZyxyLnRlbXBDbGFzc2VzPW51bGwpO3ZhciBsO0x8fChsPUEsQSs9MSk7ay5wdXNoKHtlbGVtZW50OncsY2xhc3NlczpNLGV2ZW50OkIsY2xhc3NCYXNlZEluZGV4Omwsc3RydWN0dXJhbDpMLG9wdGlvbnM6cixiZWZvcmVTdGFydDpmdW5jdGlvbigpe3cuYWRkQ2xhc3MoXCJuZy1hbmltYXRlXCIpO2cmJmEuYWRkQ2xhc3ModyxnKX0sY2xvc2U6bX0pO3cub24oXCIkZGVzdHJveVwiLGdhKTtpZigxPGsubGVuZ3RoKXJldHVybiB4O2UuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7Wj1BO0E9MDtJLmxlbmd0aD0wO3ZhciBhPVtdO3UoayxmdW5jdGlvbihjKXtiKGMuZWxlbWVudCkmJmEucHVzaChjKX0pO2subGVuZ3RoPTA7dShDKGEpLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGMoKXthLmJlZm9yZVN0YXJ0KCk7dmFyIGQsZz1hLmNsb3NlLGU9YS5hbmNob3JzP1xuYS5mcm9tLmVsZW1lbnR8fGEudG8uZWxlbWVudDphLmVsZW1lbnQ7YihlKSYmeihlKS5wYXJlbnROb2RlJiYoZT1mKGEpKSYmKGQ9ZS5zdGFydCk7ZD8oZD1kKCksZC5kb25lKGZ1bmN0aW9uKGEpe2coIWEpfSksdGEoYSxkKSk6ZygpfWEuc3RydWN0dXJhbD9jKCk6KEkucHVzaCh7bm9kZTp6KGEuZWxlbWVudCksZm46Y30pLGEuY2xhc3NCYXNlZEluZGV4PT09Wi0xJiYoST1JLnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi5ub2RlLmNvbnRhaW5zKGEubm9kZSl9KS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuZm59KSxoKEkpKSl9KX0pO3JldHVybiB4fX1dfV0pLnByb3ZpZGVyKFwiJGFuaW1hdGVDc3NcIixbXCIkYW5pbWF0ZVByb3ZpZGVyXCIsZnVuY3Rpb24oYSl7dmFyIGI9QmEoKSxjPUJhKCk7dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixcIiQkanFMaXRlXCIsXCIkJEFuaW1hdGVSdW5uZXJcIixcIiR0aW1lb3V0XCIsXCIkZG9jdW1lbnRcIixcIiRzbmlmZmVyXCIsXCIkJHJBRlNjaGVkdWxlclwiLGZ1bmN0aW9uKGEsXG5lLHMsbixoLGssRCl7ZnVuY3Rpb24gQShhLGIpe3ZhciBjPWEucGFyZW50Tm9kZTtyZXR1cm4oYy4kJG5nQW5pbWF0ZVBhcmVudEtleXx8KGMuJCRuZ0FuaW1hdGVQYXJlbnRLZXk9KytyKSkrXCItXCIrYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKStcIi1cIitifWZ1bmN0aW9uIFooaCxmLEIsayl7dmFyIG07MDxiLmNvdW50KEIpJiYobT1jLmdldChCKSxtfHwoZj1iYShmLFwiLXN0YWdnZXJcIiksZS5hZGRDbGFzcyhoLGYpLG09emEoYSxoLGspLG0uYW5pbWF0aW9uRHVyYXRpb249TWF0aC5tYXgobS5hbmltYXRpb25EdXJhdGlvbiwwKSxtLnRyYW5zaXRpb25EdXJhdGlvbj1NYXRoLm1heChtLnRyYW5zaXRpb25EdXJhdGlvbiwwKSxlLnJlbW92ZUNsYXNzKGgsZiksYy5wdXQoQixtKSkpO3JldHVybiBtfHx7fX1mdW5jdGlvbiBJKGEpe0MucHVzaChhKTtELndhaXRVbnRpbFF1aWV0KGZ1bmN0aW9uKCl7Yi5mbHVzaCgpO2MuZmx1c2goKTtmb3IodmFyIGE9Sy5vZmZzZXRXaWR0aCsxLGQ9MDtkPFxuQy5sZW5ndGg7ZCsrKUNbZF0oYSk7Qy5sZW5ndGg9MH0pfWZ1bmN0aW9uIHcoYyxmLGUpe2Y9Yi5nZXQoZSk7Znx8KGY9emEoYSxjLE1hKSxcImluZmluaXRlXCI9PT1mLmFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50JiYoZi5hbmltYXRpb25JdGVyYXRpb25Db3VudD0xKSk7Yi5wdXQoZSxmKTtjPWY7ZT1jLmFuaW1hdGlvbkRlbGF5O2Y9Yy50cmFuc2l0aW9uRGVsYXk7Yy5tYXhEZWxheT1lJiZmP01hdGgubWF4KGUsZik6ZXx8ZjtjLm1heER1cmF0aW9uPU1hdGgubWF4KGMuYW5pbWF0aW9uRHVyYXRpb24qYy5hbmltYXRpb25JdGVyYXRpb25Db3VudCxjLnRyYW5zaXRpb25EdXJhdGlvbik7cmV0dXJuIGN9dmFyIEI9aGEoZSkscj0wLEs9eihoKS5ib2R5LEM9W107cmV0dXJuIGZ1bmN0aW9uKGEsYyl7ZnVuY3Rpb24gZCgpe20oKX1mdW5jdGlvbiBoKCl7bSghMCl9ZnVuY3Rpb24gbShiKXtpZighKEt8fEMmJkQpKXtLPSEwO0Q9ITE7ZS5yZW1vdmVDbGFzcyhhLFkpO2UucmVtb3ZlQ2xhc3MoYSxcblcpO21hKGcsITEpO2phKGcsITEpO3UobCxmdW5jdGlvbihhKXtnLnN0eWxlW2FbMF1dPVwiXCJ9KTtCKGEsYyk7Y2EoYSxjKTtpZihjLm9uRG9uZSljLm9uRG9uZSgpO3AmJnAuY29tcGxldGUoIWIpfX1mdW5jdGlvbiBMKGEpe3EuYmxvY2tUcmFuc2l0aW9uJiZqYShnLGEpO3EuYmxvY2tLZXlmcmFtZUFuaW1hdGlvbiYmbWEoZywhIWEpfWZ1bmN0aW9uIHgoKXtwPW5ldyBzKHtlbmQ6ZCxjYW5jZWw6aH0pO20oKTtyZXR1cm57JCR3aWxsQW5pbWF0ZTohMSxzdGFydDpmdW5jdGlvbigpe3JldHVybiBwfSxlbmQ6ZH19ZnVuY3Rpb24gTSgpe2Z1bmN0aW9uIGIoKXtpZighSyl7TCghMSk7dShsLGZ1bmN0aW9uKGEpe2cuc3R5bGVbYVswXV09YVsxXX0pO0IoYSxjKTtlLmFkZENsYXNzKGEsVyk7aWYocS5yZWNhbGN1bGF0ZVRpbWluZ1N0eWxlcyl7ZmE9Zy5jbGFzc05hbWUrXCIgXCIrWTskPUEoZyxmYSk7eT13KGcsZmEsJCk7UT15Lm1heERlbGF5O0g9TWF0aC5tYXgoUSwwKTtKPXkubWF4RHVyYXRpb247XG5pZigwPT09Sil7bSgpO3JldHVybn1xLmhhc1RyYW5zaXRpb25zPTA8eS50cmFuc2l0aW9uRHVyYXRpb247cS5oYXNBbmltYXRpb25zPTA8eS5hbmltYXRpb25EdXJhdGlvbn1pZihxLmFwcGx5VHJhbnNpdGlvbkRlbGF5fHxxLmFwcGx5QW5pbWF0aW9uRGVsYXkpe1E9XCJib29sZWFuXCIhPT10eXBlb2YgYy5kZWxheSYmbGEoYy5kZWxheSk/cGFyc2VGbG9hdChjLmRlbGF5KTpRO0g9TWF0aC5tYXgoUSwwKTt2YXIgaztxLmFwcGx5VHJhbnNpdGlvbkRlbGF5JiYoeS50cmFuc2l0aW9uRGVsYXk9USxrPVtlYSxRK1wic1wiXSxsLnB1c2goayksZy5zdHlsZVtrWzBdXT1rWzFdKTtxLmFwcGx5QW5pbWF0aW9uRGVsYXkmJih5LmFuaW1hdGlvbkRlbGF5PVEsaz1bcmEsUStcInNcIl0sbC5wdXNoKGspLGcuc3R5bGVba1swXV09a1sxXSl9Rj0xRTMqSDtHPTFFMypKO2lmKGMuZWFzaW5nKXt2YXIgcj1jLmVhc2luZztxLmhhc1RyYW5zaXRpb25zJiYoaz1PK1wiVGltaW5nRnVuY3Rpb25cIixsLnB1c2goW2ssXG5yXSksZy5zdHlsZVtrXT1yKTtxLmhhc0FuaW1hdGlvbnMmJihrPVYrXCJUaW1pbmdGdW5jdGlvblwiLGwucHVzaChbayxyXSksZy5zdHlsZVtrXT1yKX15LnRyYW5zaXRpb25EdXJhdGlvbiYmcC5wdXNoKHBhKTt5LmFuaW1hdGlvbkR1cmF0aW9uJiZwLnB1c2gocWEpO3g9RGF0ZS5ub3coKTthLm9uKHAuam9pbihcIiBcIiksaCk7bihkLEYrMS41KkcpO3hhKGEsYyl9fWZ1bmN0aW9uIGQoKXttKCl9ZnVuY3Rpb24gaChhKXthLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBiPWEub3JpZ2luYWxFdmVudHx8YTthPWIuJG1hbnVhbFRpbWVTdGFtcHx8Yi50aW1lU3RhbXB8fERhdGUubm93KCk7Yj1wYXJzZUZsb2F0KGIuZWxhcHNlZFRpbWUudG9GaXhlZCgzKSk7TWF0aC5tYXgoYS14LDApPj1GJiZiPj1KJiYoQz0hMCxtKCkpfWlmKCFLKWlmKGcucGFyZW50Tm9kZSl7dmFyIHgscD1bXSxrPWZ1bmN0aW9uKGEpe2lmKEMpRCYmYSYmKEQ9ITEsbSgpKTtlbHNlIGlmKEQ9IWEseS5hbmltYXRpb25EdXJhdGlvbilpZihhPVxubWEoZyxEKSxEKWwucHVzaChhKTtlbHNle3ZhciBiPWwsYz1iLmluZGV4T2YoYSk7MDw9YSYmYi5zcGxpY2UoYywxKX19LHI9MDxVJiYoeS50cmFuc2l0aW9uRHVyYXRpb24mJjA9PT1ULnRyYW5zaXRpb25EdXJhdGlvbnx8eS5hbmltYXRpb25EdXJhdGlvbiYmMD09PVQuYW5pbWF0aW9uRHVyYXRpb24pJiZNYXRoLm1heChULmFuaW1hdGlvbkRlbGF5LFQudHJhbnNpdGlvbkRlbGF5KTtyP24oYixNYXRoLmZsb29yKHIqVSoxRTMpLCExKTpiKCk7dC5yZXN1bWU9ZnVuY3Rpb24oKXtrKCEwKX07dC5wYXVzZT1mdW5jdGlvbigpe2soITEpfX1lbHNlIG0oKX12YXIgZz16KGEpO2lmKCFnfHwhZy5wYXJlbnROb2RlKXJldHVybiB4KCk7Yz1pYShjKTt2YXIgbD1bXSxyPWEuYXR0cihcImNsYXNzXCIpLHY9RWEoYyksSyxELEMscCx0LEgsRixKLEc7aWYoMD09PWMuZHVyYXRpb258fCFrLmFuaW1hdGlvbnMmJiFrLnRyYW5zaXRpb25zKXJldHVybiB4KCk7dmFyIGFhPWMuZXZlbnQmJlgoYy5ldmVudCk/XG5jLmV2ZW50LmpvaW4oXCIgXCIpOmMuZXZlbnQsUj1cIlwiLE49XCJcIjthYSYmYy5zdHJ1Y3R1cmFsP1I9YmEoYWEsXCJuZy1cIiwhMCk6YWEmJihSPWFhKTtjLmFkZENsYXNzJiYoTis9YmEoYy5hZGRDbGFzcyxcIi1hZGRcIikpO2MucmVtb3ZlQ2xhc3MmJihOLmxlbmd0aCYmKE4rPVwiIFwiKSxOKz1iYShjLnJlbW92ZUNsYXNzLFwiLXJlbW92ZVwiKSk7Yy5hcHBseUNsYXNzZXNFYXJseSYmTi5sZW5ndGgmJihCKGEsYyksTj1cIlwiKTt2YXIgWT1bUixOXS5qb2luKFwiIFwiKS50cmltKCksZmE9citcIiBcIitZLFc9YmEoWSxcIi1hY3RpdmVcIikscj12LnRvJiYwPE9iamVjdC5rZXlzKHYudG8pLmxlbmd0aDtpZighKDA8KGMua2V5ZnJhbWVTdHlsZXx8XCJcIikubGVuZ3RofHxyfHxZKSlyZXR1cm4geCgpO3ZhciAkLFQ7MDxjLnN0YWdnZXI/KHY9cGFyc2VGbG9hdChjLnN0YWdnZXIpLFQ9e3RyYW5zaXRpb25EZWxheTp2LGFuaW1hdGlvbkRlbGF5OnYsdHJhbnNpdGlvbkR1cmF0aW9uOjAsYW5pbWF0aW9uRHVyYXRpb246MH0pOlxuKCQ9QShnLGZhKSxUPVooZyxZLCQsTmEpKTtlLmFkZENsYXNzKGEsWSk7Yy50cmFuc2l0aW9uU3R5bGUmJih2PVtPLGMudHJhbnNpdGlvblN0eWxlXSxkYShnLHYpLGwucHVzaCh2KSk7MDw9Yy5kdXJhdGlvbiYmKHY9MDxnLnN0eWxlW09dLmxlbmd0aCx2PUFhKGMuZHVyYXRpb24sdiksZGEoZyx2KSxsLnB1c2godikpO2Mua2V5ZnJhbWVTdHlsZSYmKHY9W1YsYy5rZXlmcmFtZVN0eWxlXSxkYShnLHYpLGwucHVzaCh2KSk7dmFyIFU9VD8wPD1jLnN0YWdnZXJJbmRleD9jLnN0YWdnZXJJbmRleDpiLmNvdW50KCQpOjA7KGFhPTA9PT1VKSYmamEoZyw5OTk5KTt2YXIgeT13KGcsZmEsJCksUT15Lm1heERlbGF5O0g9TWF0aC5tYXgoUSwwKTtKPXkubWF4RHVyYXRpb247dmFyIHE9e307cS5oYXNUcmFuc2l0aW9ucz0wPHkudHJhbnNpdGlvbkR1cmF0aW9uO3EuaGFzQW5pbWF0aW9ucz0wPHkuYW5pbWF0aW9uRHVyYXRpb247cS5oYXNUcmFuc2l0aW9uQWxsPXEuaGFzVHJhbnNpdGlvbnMmJlxuXCJhbGxcIj09eS50cmFuc2l0aW9uUHJvcGVydHk7cS5hcHBseVRyYW5zaXRpb25EdXJhdGlvbj1yJiYocS5oYXNUcmFuc2l0aW9ucyYmIXEuaGFzVHJhbnNpdGlvbkFsbHx8cS5oYXNBbmltYXRpb25zJiYhcS5oYXNUcmFuc2l0aW9ucyk7cS5hcHBseUFuaW1hdGlvbkR1cmF0aW9uPWMuZHVyYXRpb24mJnEuaGFzQW5pbWF0aW9ucztxLmFwcGx5VHJhbnNpdGlvbkRlbGF5PWxhKGMuZGVsYXkpJiYocS5hcHBseVRyYW5zaXRpb25EdXJhdGlvbnx8cS5oYXNUcmFuc2l0aW9ucyk7cS5hcHBseUFuaW1hdGlvbkRlbGF5PWxhKGMuZGVsYXkpJiZxLmhhc0FuaW1hdGlvbnM7cS5yZWNhbGN1bGF0ZVRpbWluZ1N0eWxlcz0wPE4ubGVuZ3RoO2lmKHEuYXBwbHlUcmFuc2l0aW9uRHVyYXRpb258fHEuYXBwbHlBbmltYXRpb25EdXJhdGlvbilKPWMuZHVyYXRpb24/cGFyc2VGbG9hdChjLmR1cmF0aW9uKTpKLHEuYXBwbHlUcmFuc2l0aW9uRHVyYXRpb24mJihxLmhhc1RyYW5zaXRpb25zPSEwLHkudHJhbnNpdGlvbkR1cmF0aW9uPVxuSix2PTA8Zy5zdHlsZVtPK1wiUHJvcGVydHlcIl0ubGVuZ3RoLGwucHVzaChBYShKLHYpKSkscS5hcHBseUFuaW1hdGlvbkR1cmF0aW9uJiYocS5oYXNBbmltYXRpb25zPSEwLHkuYW5pbWF0aW9uRHVyYXRpb249SixsLnB1c2goW3NhLEorXCJzXCJdKSk7aWYoMD09PUomJiFxLnJlY2FsY3VsYXRlVGltaW5nU3R5bGVzKXJldHVybiB4KCk7bnVsbD09Yy5kdXJhdGlvbiYmMDx5LnRyYW5zaXRpb25EdXJhdGlvbiYmKHEucmVjYWxjdWxhdGVUaW1pbmdTdHlsZXM9cS5yZWNhbGN1bGF0ZVRpbWluZ1N0eWxlc3x8YWEpO0Y9MUUzKkg7Rz0xRTMqSjtjLnNraXBCbG9ja2luZ3x8KHEuYmxvY2tUcmFuc2l0aW9uPTA8eS50cmFuc2l0aW9uRHVyYXRpb24scS5ibG9ja0tleWZyYW1lQW5pbWF0aW9uPTA8eS5hbmltYXRpb25EdXJhdGlvbiYmMDxULmFuaW1hdGlvbkRlbGF5JiYwPT09VC5hbmltYXRpb25EdXJhdGlvbik7d2EoYSxjKTtxLmJsb2NrVHJhbnNpdGlvbnx8amEoZywhMSk7TChKKTtyZXR1cm57JCR3aWxsQW5pbWF0ZTohMCxcbmVuZDpkLHN0YXJ0OmZ1bmN0aW9uKCl7aWYoIUspcmV0dXJuIHQ9e2VuZDpkLGNhbmNlbDpoLHJlc3VtZTpudWxsLHBhdXNlOm51bGx9LHA9bmV3IHModCksSShNKSxwfX19fV19XSkucHJvdmlkZXIoXCIkJGFuaW1hdGVDc3NEcml2ZXJcIixbXCIkJGFuaW1hdGlvblByb3ZpZGVyXCIsZnVuY3Rpb24oYSl7YS5kcml2ZXJzLnB1c2goXCIkJGFuaW1hdGVDc3NEcml2ZXJcIik7dGhpcy4kZ2V0PVtcIiRhbmltYXRlQ3NzXCIsXCIkcm9vdFNjb3BlXCIsXCIkJEFuaW1hdGVSdW5uZXJcIixcIiRyb290RWxlbWVudFwiLFwiJGRvY3VtZW50XCIsXCIkc25pZmZlclwiLGZ1bmN0aW9uKGEsYyxkLGUscyxuKXtmdW5jdGlvbiBoKGEpe3JldHVybiBhLnJlcGxhY2UoL1xcYm5nLVxcUytcXGIvZyxcIlwiKX1mdW5jdGlvbiBrKGEsYil7VShhKSYmKGE9YS5zcGxpdChcIiBcIikpO1UoYikmJihiPWIuc3BsaXQoXCIgXCIpKTtyZXR1cm4gYS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuLTE9PT1iLmluZGV4T2YoYSl9KS5qb2luKFwiIFwiKX1mdW5jdGlvbiBEKGMsXG5lLEEpe2Z1bmN0aW9uIEQoYSl7dmFyIGI9e30sYz16KGEpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3UoW1wid2lkdGhcIixcImhlaWdodFwiLFwidG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGEpe3ZhciBkPWNbYV07c3dpdGNoKGEpe2Nhc2UgXCJ0b3BcIjpkKz1JLnNjcm9sbFRvcDticmVhaztjYXNlIFwibGVmdFwiOmQrPUkuc2Nyb2xsTGVmdH1iW2FdPU1hdGguZmxvb3IoZCkrXCJweFwifSk7cmV0dXJuIGJ9ZnVuY3Rpb24gcygpe3ZhciBjPWgoQS5hdHRyKFwiY2xhc3NcIil8fFwiXCIpLGQ9ayhjLHQpLGM9ayh0LGMpLGQ9YShuLHt0bzpEKEEpLGFkZENsYXNzOlwibmctYW5jaG9yLWluIFwiK2QscmVtb3ZlQ2xhc3M6XCJuZy1hbmNob3Itb3V0IFwiK2MsZGVsYXk6ITB9KTtyZXR1cm4gZC4kJHdpbGxBbmltYXRlP2Q6bnVsbH1mdW5jdGlvbiBmKCl7bi5yZW1vdmUoKTtlLnJlbW92ZUNsYXNzKFwibmctYW5pbWF0ZS1zaGltXCIpO0EucmVtb3ZlQ2xhc3MoXCJuZy1hbmltYXRlLXNoaW1cIil9dmFyIG49Ryh6KGUpLmNsb25lTm9kZSghMCkpLFxudD1oKG4uYXR0cihcImNsYXNzXCIpfHxcIlwiKTtlLmFkZENsYXNzKFwibmctYW5pbWF0ZS1zaGltXCIpO0EuYWRkQ2xhc3MoXCJuZy1hbmltYXRlLXNoaW1cIik7bi5hZGRDbGFzcyhcIm5nLWFuY2hvclwiKTt3LmFwcGVuZChuKTt2YXIgbTtjPWZ1bmN0aW9uKCl7dmFyIGM9YShuLHthZGRDbGFzczpcIm5nLWFuY2hvci1vdXRcIixkZWxheTohMCxmcm9tOkQoZSl9KTtyZXR1cm4gYy4kJHdpbGxBbmltYXRlP2M6bnVsbH0oKTtpZighYyYmKG09cygpLCFtKSlyZXR1cm4gZigpO3ZhciBMPWN8fG07cmV0dXJue3N0YXJ0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe2MmJmMuZW5kKCl9dmFyIGIsYz1MLnN0YXJ0KCk7Yy5kb25lKGZ1bmN0aW9uKCl7Yz1udWxsO2lmKCFtJiYobT1zKCkpKXJldHVybiBjPW0uc3RhcnQoKSxjLmRvbmUoZnVuY3Rpb24oKXtjPW51bGw7ZigpO2IuY29tcGxldGUoKX0pLGM7ZigpO2IuY29tcGxldGUoKX0pO3JldHVybiBiPW5ldyBkKHtlbmQ6YSxjYW5jZWw6YX0pfX19ZnVuY3Rpb24gQShhLFxuYixjLGUpe3ZhciBoPXQoYSksZj10KGIpLGs9W107dShlLGZ1bmN0aW9uKGEpeyhhPUQoYyxhLm91dCxhW1wiaW5cIl0pKSYmay5wdXNoKGEpfSk7aWYoaHx8Znx8MCE9PWsubGVuZ3RoKXJldHVybntzdGFydDpmdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXt1KGIsZnVuY3Rpb24oYSl7YS5lbmQoKX0pfXZhciBiPVtdO2gmJmIucHVzaChoLnN0YXJ0KCkpO2YmJmIucHVzaChmLnN0YXJ0KCkpO3UoayxmdW5jdGlvbihhKXtiLnB1c2goYS5zdGFydCgpKX0pO3ZhciBjPW5ldyBkKHtlbmQ6YSxjYW5jZWw6YX0pO2QuYWxsKGIsZnVuY3Rpb24oYSl7Yy5jb21wbGV0ZShhKX0pO3JldHVybiBjfX19ZnVuY3Rpb24gdChjKXt2YXIgZD1jLmVsZW1lbnQsZT1jLm9wdGlvbnN8fHt9O2Muc3RydWN0dXJhbD8oZS5zdHJ1Y3R1cmFsPWUuYXBwbHlDbGFzc2VzRWFybHk9ITAsZS5ldmVudD1jLmV2ZW50LFwibGVhdmVcIj09PWUuZXZlbnQmJihlLm9uRG9uZT1lLmRvbU9wZXJhdGlvbikpOmUuZXZlbnQ9bnVsbDtcbmM9YShkLGUpO3JldHVybiBjLiQkd2lsbEFuaW1hdGU/YzpudWxsfWlmKCFuLmFuaW1hdGlvbnMmJiFuLnRyYW5zaXRpb25zKXJldHVybiBIO3ZhciBJPXoocykuYm9keTtjPXooZSk7dmFyIHc9RyhJLnBhcmVudE5vZGU9PT1jP0k6Yyk7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBhLmZyb20mJmEudG8/QShhLmZyb20sYS50byxhLmNsYXNzZXMsYS5hbmNob3JzKTp0KGEpfX1dfV0pLnByb3ZpZGVyKFwiJCRhbmltYXRlSnNcIixbXCIkYW5pbWF0ZVByb3ZpZGVyXCIsZnVuY3Rpb24oYSl7dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLFwiJCRBbmltYXRlUnVubmVyXCIsXCIkJHJBRk11dGV4XCIsXCIkJGpxTGl0ZVwiLGZ1bmN0aW9uKGIsYyxkLGUpe2Z1bmN0aW9uIHMoYyl7Yz1YKGMpP2M6Yy5zcGxpdChcIiBcIik7Zm9yKHZhciBkPVtdLGU9e30sQT0wO0E8Yy5sZW5ndGg7QSsrKXt2YXIgbj1jW0FdLHM9YS4kJHJlZ2lzdGVyZWRBbmltYXRpb25zW25dO3MmJiFlW25dJiYoZC5wdXNoKGIuZ2V0KHMpKSxlW25dPVxuITApfXJldHVybiBkfXZhciBuPWhhKGUpO3JldHVybiBmdW5jdGlvbihhLGIsZCxlKXtmdW5jdGlvbiB0KCl7ZS5kb21PcGVyYXRpb24oKTtuKGEsZSl9ZnVuY3Rpb24geihhLGIsZCxlLGcpe3N3aXRjaChkKXtjYXNlIFwiYW5pbWF0ZVwiOmI9W2IsZS5mcm9tLGUudG8sZ107YnJlYWs7Y2FzZSBcInNldENsYXNzXCI6Yj1bYixyLEssZ107YnJlYWs7Y2FzZSBcImFkZENsYXNzXCI6Yj1bYixyLGddO2JyZWFrO2Nhc2UgXCJyZW1vdmVDbGFzc1wiOmI9W2IsSyxnXTticmVhaztkZWZhdWx0OmI9W2IsZ119Yi5wdXNoKGUpO2lmKGE9YS5hcHBseShhLGIpKWlmKENhKGEuc3RhcnQpJiYoYT1hLnN0YXJ0KCkpLGEgaW5zdGFuY2VvZiBjKWEuZG9uZShnKTtlbHNlIGlmKENhKGEpKXJldHVybiBhO3JldHVybiBIfWZ1bmN0aW9uIHcoYSxiLGQsZSxnKXt2YXIgZj1bXTt1KGUsZnVuY3Rpb24oZSl7dmFyIGg9ZVtnXTtoJiZmLnB1c2goZnVuY3Rpb24oKXt2YXIgZSxnLGY9ITEsbD1mdW5jdGlvbihhKXtmfHxcbihmPSEwLChnfHxIKShhKSxlLmNvbXBsZXRlKCFhKSl9O2U9bmV3IGMoe2VuZDpmdW5jdGlvbigpe2woKX0sY2FuY2VsOmZ1bmN0aW9uKCl7bCghMCl9fSk7Zz16KGgsYSxiLGQsZnVuY3Rpb24oYSl7bCghMT09PWEpfSk7cmV0dXJuIGV9KX0pO3JldHVybiBmfWZ1bmN0aW9uIEIoYSxiLGQsZSxnKXt2YXIgZj13KGEsYixkLGUsZyk7aWYoMD09PWYubGVuZ3RoKXt2YXIgaCxrO1wiYmVmb3JlU2V0Q2xhc3NcIj09PWc/KGg9dyhhLFwicmVtb3ZlQ2xhc3NcIixkLGUsXCJiZWZvcmVSZW1vdmVDbGFzc1wiKSxrPXcoYSxcImFkZENsYXNzXCIsZCxlLFwiYmVmb3JlQWRkQ2xhc3NcIikpOlwic2V0Q2xhc3NcIj09PWcmJihoPXcoYSxcInJlbW92ZUNsYXNzXCIsZCxlLFwicmVtb3ZlQ2xhc3NcIiksaz13KGEsXCJhZGRDbGFzc1wiLGQsZSxcImFkZENsYXNzXCIpKTtoJiYoZj1mLmNvbmNhdChoKSk7ayYmKGY9Zi5jb25jYXQoaykpfWlmKDAhPT1mLmxlbmd0aClyZXR1cm4gZnVuY3Rpb24oYSl7dmFyIGI9W107Zi5sZW5ndGgmJlxudShmLGZ1bmN0aW9uKGEpe2IucHVzaChhKCkpfSk7Yi5sZW5ndGg/Yy5hbGwoYixhKTphKCk7cmV0dXJuIGZ1bmN0aW9uKGEpe3UoYixmdW5jdGlvbihiKXthP2IuY2FuY2VsKCk6Yi5lbmQoKX0pfX19Mz09PWFyZ3VtZW50cy5sZW5ndGgmJm5hKGQpJiYoZT1kLGQ9bnVsbCk7ZT1pYShlKTtkfHwoZD1hLmF0dHIoXCJjbGFzc1wiKXx8XCJcIixlLmFkZENsYXNzJiYoZCs9XCIgXCIrZS5hZGRDbGFzcyksZS5yZW1vdmVDbGFzcyYmKGQrPVwiIFwiK2UucmVtb3ZlQ2xhc3MpKTt2YXIgcj1lLmFkZENsYXNzLEs9ZS5yZW1vdmVDbGFzcyxDPXMoZCksRSxmO2lmKEMubGVuZ3RoKXt2YXIgRixHO1wibGVhdmVcIj09Yj8oRz1cImxlYXZlXCIsRj1cImFmdGVyTGVhdmVcIik6KEc9XCJiZWZvcmVcIitiLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Iuc3Vic3RyKDEpLEY9Yik7XCJlbnRlclwiIT09YiYmXCJtb3ZlXCIhPT1iJiYoRT1CKGEsYixlLEMsRykpO2Y9QihhLGIsZSxDLEYpfWlmKEV8fGYpcmV0dXJue3N0YXJ0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihjKXtuPVxuITA7dCgpO2NhKGEsZSk7Zy5jb21wbGV0ZShjKX12YXIgZCxrPVtdO0UmJmsucHVzaChmdW5jdGlvbihhKXtkPUUoYSl9KTtrLmxlbmd0aD9rLnB1c2goZnVuY3Rpb24oYSl7dCgpO2EoITApfSk6dCgpO2YmJmsucHVzaChmdW5jdGlvbihhKXtkPWYoYSl9KTt2YXIgbj0hMSxnPW5ldyBjKHtlbmQ6ZnVuY3Rpb24oKXtufHwoKGR8fEgpKHZvaWQgMCksYih2b2lkIDApKX0sY2FuY2VsOmZ1bmN0aW9uKCl7bnx8KChkfHxIKSghMCksYighMCkpfX0pO2MuY2hhaW4oayxiKTtyZXR1cm4gZ319fX1dfV0pLnByb3ZpZGVyKFwiJCRhbmltYXRlSnNEcml2ZXJcIixbXCIkJGFuaW1hdGlvblByb3ZpZGVyXCIsZnVuY3Rpb24oYSl7YS5kcml2ZXJzLnB1c2goXCIkJGFuaW1hdGVKc0RyaXZlclwiKTt0aGlzLiRnZXQ9W1wiJCRhbmltYXRlSnNcIixcIiQkQW5pbWF0ZVJ1bm5lclwiLGZ1bmN0aW9uKGEsYyl7ZnVuY3Rpb24gZChjKXtyZXR1cm4gYShjLmVsZW1lbnQsYy5ldmVudCxjLmNsYXNzZXMsYy5vcHRpb25zKX1cbnJldHVybiBmdW5jdGlvbihhKXtpZihhLmZyb20mJmEudG8pe3ZhciBiPWQoYS5mcm9tKSxuPWQoYS50byk7aWYoYnx8bilyZXR1cm57c3RhcnQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7cmV0dXJuIGZ1bmN0aW9uKCl7dShkLGZ1bmN0aW9uKGEpe2EuZW5kKCl9KX19dmFyIGQ9W107YiYmZC5wdXNoKGIuc3RhcnQoKSk7biYmZC5wdXNoKG4uc3RhcnQoKSk7Yy5hbGwoZCxmdW5jdGlvbihhKXtlLmNvbXBsZXRlKGEpfSk7dmFyIGU9bmV3IGMoe2VuZDphKCksY2FuY2VsOmEoKX0pO3JldHVybiBlfX19ZWxzZSByZXR1cm4gZChhKX19XX1dKX0pKHdpbmRvdyx3aW5kb3cuYW5ndWxhcik7XG5cbiIsIihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdhQ2Fyb3VzZWwnLCBbXSlcbiAgICAgICAgLmRpcmVjdGl2ZSgnYUNhcm91c2VsJywgYWR2YW5jZWRDYXJvdXNlbCk7XG5cbiAgICBhZHZhbmNlZENhcm91c2VsLiRpbmplY3QgPSBbJyRjb21waWxlJywgJyR0aW1lb3V0JywgJyRpb25pY1Njcm9sbERlbGVnYXRlJ107XG4gICAgZnVuY3Rpb24gYWR2YW5jZWRDYXJvdXNlbCgkY29tcGlsZSwgJHRpbWVvdXQsICRpb25pY1Njcm9sbERlbGVnYXRlKSB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0ICAgICAgICA6ICdFJyxcbiAgICAgICAgICAgIHJlcGxhY2UgICAgICAgICA6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZSAgICAgICAgOiAnJyxcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgICA6IHt9LFxuICAgICAgICAgICAgbGluayAgICAgICAgICAgIDogbGlua0Z1bmMsXG4gICAgICAgICAgICBjb250cm9sbGVyICAgICAgOiBDb250cm9sbGVyLFxuICAgICAgICAgICAgY29udHJvbGxlckFzICAgIDogJ3ZtJyxcbiAgICAgICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHtcbiAgICAgICAgICAgICAgICBpdGVtRGlyZWN0aXZlICA6ICdAJyxcbiAgICAgICAgICAgICAgICBjYXJvdXNlbE9wdGlvbnM6ICc9JyxcbiAgICAgICAgICAgICAgICBhcnJheVByb3ZpZGVyICA6ICc9JyxcbiAgICAgICAgICAgICAgICBvblNlbGVjdCAgICAgICA6ICcmJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vLy8vLy8vL1xuXG4gICAgICAgIGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgY3RybCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3RybCk7XG5cbiAgICAgICAgICAgIGN0cmwuZWwgPSBlbDtcblxuICAgICAgICAgICAgY3RybC5vcHRpb25zLnRyYWNrQnkgICAgPSB0eXBlb2YgYXR0ci50cmFja0J5ICE9PSAndW5kZWZpbmVkJyA/IGF0dHIudHJhY2tCeSA6ICckaW5kZXgnO1xuICAgICAgICAgICAgY3RybC5vcHRpb25zLnRyYWNrQnlzdHIgPSBjdHJsLm9wdGlvbnMudHJhY2tCeSA9PT0gJyRpbmRleCcgPyAnJGluZGV4JyA6ICdpdGVtLicgKyBjdHJsLm9wdGlvbnMudHJhY2tCeTtcblxuICAgICAgICAgICAgdmFyIGFuaW1hdGVJbiA9IGN0cmwub3B0aW9ucy5hbmltYXRlSW4gPyAnIGFuaW1hdGVJbicgOiAnJztcblxuICAgICAgICAgICAgLy8gRHluYW1pYyBkaXJlY3RpdmUgaHRtbFxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cImEtY2Fyb3VzZWxcIj4nO1xuXG4gICAgICAgICAgICBpZiAoY3RybC5vcHRpb25zLnB1bGxSZWZyZXNoLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJzcGlubmVyLXdyYXBwZXJcIiBuZy1pZj1cInZtLm9wdGlvbnMucHVsbFJlZnJlc2gubG9hZGluZ1wiPjxpb24tc3Bpbm5lciBpY29uPVwiYW5kcm9pZFwiPjwvaW9uLXNwaW5uZXI+PC9kaXY+JztcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8c3BhbiBjbGFzcz1cInB1bGxyZWZyZXNoLWluZGljYXRvclwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPHN2ZyB2aWV3Qm94PVwiMCAwIDY0IDY0XCI+PGc+JyArXG4gICAgICAgICAgICAgICAgICAgICc8Y2lyY2xlIHN0cm9rZS13aWR0aD1cIjZcIiBzdHJva2UtZGFzaGFycmF5PVwiMTM1LjI2MjYxMjM5MTQ0Mjg3XCIgc3Ryb2tlLWRhc2hvZmZzZXQ9XCIxNi41MTM3MTQ3NDU1NjIxNFwiICcgK1xuICAgICAgICAgICAgICAgICAgICAncj1cIjI2XCIgY3g9XCIzMlwiIGN5PVwiMzJcIiBmaWxsPVwibm9uZVwiIHRyYW5zZm9ybT1cInNjYWxlKDEsMSkgdHJhbnNsYXRlKDAsMCkgcm90YXRlKDAsMzIsMzIpXCI+PC9jaXJjbGU+PC9nPicgK1xuICAgICAgICAgICAgICAgICAgICAnPC9zdmc+JyArXG4gICAgICAgICAgICAgICAgICAgICc8L3NwYW4+JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaHRtbCArPSAnPGlvbi1zY3JvbGwgJztcblxuICAgICAgICAgICAgaWYgKGN0cmwub3B0aW9ucy5wdWxsUmVmcmVzaC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBodG1sICs9ICdvbi1zY3JvbGw9XCJ2bS5vblNjcm9sbCgpXCIgJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaHRtbCArPSAnc2Nyb2xsYmFyLXg9XCJmYWxzZVwiIGRlbGVnYXRlLWhhbmRsZT1cIicgKyBjdHJsLm9wdGlvbnMuY2Fyb3VzZWxJZCArICdcIiAnICtcbiAgICAgICAgICAgICAgICAnem9vbWluZz1cImZhbHNlXCIgZGlyZWN0aW9uPVwieFwiIG92ZXJmbG93LXNjcm9sbD1cImZhbHNlXCIgaGFzLWJvdW5jaW5nPVwidHJ1ZVwiPicgK1xuICAgICAgICAgICAgICAgICc8bmF2IHN0eWxlPVwidmlzaWJpbGl0eTpoaWRkZW47XCI+JyArXG4gICAgICAgICAgICAgICAgJzx1bD4gPGxpICcgK1xuICAgICAgICAgICAgICAgICduZy1yZXBlYXQ9XCJpdGVtIGluIHZtLmFycmF5UHJvdmlkZXIgdHJhY2sgYnkgJyArXG4gICAgICAgICAgICAgICAgY3RybC5vcHRpb25zLnRyYWNrQnlzdHIgKyAnXCInICtcbiAgICAgICAgICAgICAgICAnY2xhc3M9XCJjYXJvdXNlbC1pdGVtJyArIGFuaW1hdGVJbiArICdcIicgK1xuICAgICAgICAgICAgICAgICduZy1jbGFzcz1cIntcXCdhY3RpdmVcXCc6dm0uaXRlbUFjdGl2ZSA9PT0gaXRlbX1cIj4nICtcbiAgICAgICAgICAgICAgICBjcmVhdGVJdGVtRGlyZWN0aXZlKCkgK1xuICAgICAgICAgICAgICAgICc8L2xpPicgK1xuICAgICAgICAgICAgICAgICc8L3VsPjwvbmF2PjwvaW9uLXNjcm9sbD48L2Rpdj4nO1xuXG4gICAgICAgICAgICAvLyBDb21waWxlIGR5bmFtaWMgdGVtcGxhdGVcbiAgICAgICAgICAgIGh0bWwgPSAkY29tcGlsZShodG1sKShzY29wZSk7XG4gICAgICAgICAgICBlbC5hcHBlbmQoaHRtbCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhodG1sKVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAkdGltZW91dCBzbyBuZy1yZXBlYXQgaXMgZmluaXNoZWQgaW4gb3JkZXIgdG8gY2FsY3VsYXRlIHdpZHRoIG9mIGNhcm91c2VsXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3RybC5hcnJheVByb3ZpZGVyICYmIGN0cmwuYXJyYXlQcm92aWRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0cmwuaW5pdENhcm91c2VsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFsbG93VmVydGljYWxTY3JvbGwoKTtcbiAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVJdGVtRGlyZWN0aXZlKCkge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IGN0cmwub3B0aW9ucy50ZW1wbGF0ZSAhPT0gbnVsbCA/ICd0ZW1wbGF0ZT1cIicgKyBjdHJsLm9wdGlvbnMudGVtcGxhdGUgKyAnXCInIDogJyc7XG4gICAgICAgICAgICAgICAgY3RybC5pdGVtRGlyZWN0aXZlID0gdHlwZW9mIGN0cmwuaXRlbURpcmVjdGl2ZSA9PT0gJ3VuZGVmaW5lZCcgPyAnY2Fyb3VzZWwtZ2VuZXJpYy1pdGVtJyA6IGN0cmwuaXRlbURpcmVjdGl2ZTtcbiAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aXZlID0gJzwnICsgY3RybC5pdGVtRGlyZWN0aXZlICsgJyBuZy1tb2RlbD1cIml0ZW1cIiAnICsgdGVtcGxhdGUgK1xuICAgICAgICAgICAgICAgICAgICAnb24tc2VsZWN0PVwidm0uc2VsZWN0SXRlbShpdGVtKVwiIGNhcm91c2VsLW9wdGlvbnM9XCJtZW51Q2Fyb3VzZWwub3B0aW9uc1wiICc7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlICs9ICc+PC8nICsgY3RybC5pdGVtRGlyZWN0aXZlICsgJz4nO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNyZWF0ZUl0ZW1EaXJlY3RpdmUoKSlcblxuXG4gICAgICAgICAgICAvLyB0aGlzIG1ldGhvZCBhbGxvd3MgdG8gc2Nyb2xsIHRoZSBwYWdlIGJlbG93IHRoZSBjYXJvdXNlbFxuICAgICAgICAgICAgZnVuY3Rpb24gYWxsb3dWZXJ0aWNhbFNjcm9sbCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3YgICAgICAgID0gJGlvbmljU2Nyb2xsRGVsZWdhdGUuJGdldEJ5SGFuZGxlKGN0cmwub3B0aW9ucy5jYXJvdXNlbElkKS5nZXRTY3JvbGxWaWV3KCk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHN2Ll9fY29udGFpbmVyO1xuXG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsdG91Y2hTdGFydCA9IHN2LnRvdWNoU3RhcnQ7XG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsdG91Y2hNb3ZlICA9IHN2LnRvdWNoTW92ZTtcblxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc3YudG91Y2hTdGFydCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgc3YudG91Y2hNb3ZlKTtcblxuICAgICAgICAgICAgICAgIHN2LnRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbHRvdWNoU3RhcnQuYXBwbHkoc3YsIFtlXSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHN2LnRvdWNoTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsdG91Y2hNb3ZlLmFwcGx5KHN2LCBbZV0pO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHN2LnRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBzdi50b3VjaE1vdmUsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyR0aW1lb3V0JywgJyR3aW5kb3cnLCAnJGlvbmljU2Nyb2xsRGVsZWdhdGUnXTtcbiAgICBmdW5jdGlvbiBDb250cm9sbGVyKCRzY29wZSwgJGVsZW1lbnQsICR0aW1lb3V0LCAkd2luZG93LCAkaW9uaWNTY3JvbGxEZWxlZ2F0ZSkge1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgdm0ub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHNob3dTY3JvbGwgICAgOiBmYWxzZSxcbiAgICAgICAgICAgIGNhcm91c2VsSWQgICAgOiAnbXktY2Fyb3VzZWwnLFxuICAgICAgICAgICAgdGVtcGxhdGUgICAgICA6IG51bGwsXG4gICAgICAgICAgICBhbGlnbiAgICAgICAgIDogJ2xlZnQnLFxuICAgICAgICAgICAgY2VudGVyT25TZWxlY3Q6IHRydWUsXG4gICAgICAgICAgICB3aWR0aEl0ZW0gICAgIDogMCxcbiAgICAgICAgICAgIGhlaWdodEl0ZW0gICAgOiAwLFxuICAgICAgICAgICAgdHJhY2tCeSAgICAgICA6ICckaW5kZXgnLFxuICAgICAgICAgICAgc2VsZWN0Rmlyc3QgICA6IHRydWUsXG4gICAgICAgICAgICBzZWxlY3RBdFN0YXJ0IDoge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBudWxsLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiBudWxsLFxuICAgICAgICAgICAgICAgIGluZGV4ICAgOiAtMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHB1bGxSZWZyZXNoICAgOiB7XG4gICAgICAgICAgICAgICAgYWN0aXZlICA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNhbGxCYWNrOiBhbmd1bGFyLm5vb3AsXG4gICAgICAgICAgICAgICAgbG9hZGluZzpmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFuaW1hdGVJbiAgICAgOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEFQSVxuICAgICAgICB2bS5pbml0Q2Fyb3VzZWwgPSBpbml0Q2Fyb3VzZWw7XG4gICAgICAgIHZtLnNlbGVjdEl0ZW0gICA9IHNlbGVjdEl0ZW07XG4gICAgICAgIHZtLm9uU2Nyb2xsICAgICA9IG9uU2Nyb2xsO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHZtKTtcblxuICAgICAgICBhY3RpdmF0ZSgpO1xuXG4gICAgICAgIC8vLy8vLy8vLy9cblxuICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICAgICAgICAgIGFuZ3VsYXIuZXh0ZW5kKHZtLm9wdGlvbnMsIHZtLmNhcm91c2VsT3B0aW9ucyk7XG5cbiAgICAgICAgICAgICRzY29wZS4kb24oJ2EtY2Fyb3VzZWwuYXJyYXl1cGRhdGVkJywgb25BcnJheVByb3ZpZGVyVXBkYXRlZCk7XG4gICAgICAgICAgICAkc2NvcGUuJG9uKCdhLWNhcm91c2VsLmRlc2FjdGl2YXRlSXRlbScsIGRlc2FjdGl2ZUl0ZW1TZWxlY3RlZCk7XG5cbiAgICAgICAgICAgIGlmICh2bS5vcHRpb25zLnB1bGxSZWZyZXNoLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICRzY29wZS4kb24oJ2EtY2Fyb3VzZWwucHVsbHJlZnJlc2guZG9uZScsIG9uRW5kUmVmcmVzaCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vLy8vLy8vLy9cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSBlXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3tjYXJvdXNlbElkOnN0cmluZ319IHBhcmFtXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uQXJyYXlQcm92aWRlclVwZGF0ZWQoZSwgcGFyYW0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb25BcnJheVByb3ZpZGVyVXBkYXRlZCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmFtKVxuICAgICAgICAgICAgICAgIHZhciBjYXJvdXNlbElkO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcm91c2VsSWQgPSBwYXJhbS5jYXJvdXNlbElkO1xuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmV4dGVuZCh2bS5vcHRpb25zLCBwYXJhbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWxJZCA9IHBhcmFtO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjYXJvdXNlbElkID09PSB2bS5vcHRpb25zLmNhcm91c2VsSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQodm0uaW5pdENhcm91c2VsLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSBlXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3tpZENvbnRhaW5zOnN0cmluZywgZXhjZXB0OnN0cmluZ319IHBhcmFtXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlc2FjdGl2ZUl0ZW1TZWxlY3RlZChlLCBwYXJhbSkge1xuICAgICAgICAgICAgICAgIHZhciBpZENvbnRhaW5zID0gcGFyYW0uaWRDb250YWlucztcbiAgICAgICAgICAgICAgICB2YXIgZXhjZXB0ICAgICA9IHBhcmFtLmV4Y2VwdDtcblxuICAgICAgICAgICAgICAgIGlmICh2bS5vcHRpb25zLmNhcm91c2VsSWQuaW5kZXhPZihpZENvbnRhaW5zKSA+PSAwICYmIHZtLm9wdGlvbnMuY2Fyb3VzZWxJZCAhPT0gZXhjZXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLml0ZW1BY3RpdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXRDYXJvdXNlbCgpIHtcbiAgICAgICAgICAgIHZhciBjYXJvdXNlbEl0ZW1zID0gJGVsZW1lbnQuZmluZCgnbGknKTtcbiAgICAgICAgICAgIHZhciB0b3RhbEl0ZW1zICAgID0gY2Fyb3VzZWxJdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgbnVtSXRlbXMgICAgICA9IGFuZ3VsYXIuZWxlbWVudChjYXJvdXNlbEl0ZW1zKS5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgd2lkdGhDYXJvdXNlbCA9IDA7XG5cbiAgICAgICAgICAgIHZhciBtYXJnaW5MZWZ0ICA9IDA7XG4gICAgICAgICAgICB2YXIgbWFyZ2luUmlnaHQgPSAwO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggICAgICAgICAgICAgID0gMDtcbiAgICAgICAgICAgIHZhciBudW1UaW1lc0RvbUNoZWNrZWQgPSAwO1xuICAgICAgICAgICAgdmFyIG51bVJldHJ5QnVpbGQgICAgICAgICAgID0gMTU7XG5cbiAgICAgICAgICAgIHZtLml0ZW1BY3RpdmUgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAobnVtSXRlbXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjaGVja0RPTSgpO1xuICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RyeWluZyB0byBjcmVhdGUgYSBjYXJvdXNlbCBmcm9tIGFuIGVtcHR5IGFycmF5Jywgdm0ub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrRE9NKCkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNraW5nIGlmIGNhcm91c2VsIGl0ZW1zIGFyZSBpbiBET01cbiAgICAgICAgICAgICAgICB2YXIgdyA9IHBhcnNlSW50KGNhcm91c2VsSXRlbXNbdG90YWxJdGVtcyAtIDFdLm9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IHBhcnNlSW50KGNhcm91c2VsSXRlbXNbdG90YWxJdGVtcyAtIDFdLm9mZnNldEhlaWdodCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodyA+IDAgJiYgaCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc05vdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbSU5GT10gQ3JlYXRpbmcgQ2Fyb3VzZWwgYnV0IERPTSBub3QgcmVhZHkgeWV0Li4uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bVRpbWVzRG9tQ2hlY2tlZCA8IG51bVJldHJ5QnVpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0RPTSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tFUlJPUl0gU2l6ZSBpdGVtIENhcm91c2VsIGNvdWxkIG5vdCBiZSBkZXRlcm1pbmVkJywgdm0ub3B0aW9ucy5jYXJvdXNlbElkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG51bVRpbWVzRG9tQ2hlY2tlZCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcHJvY2Vzc05vdygpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0SXRlbUF0U3RhcnQgPSB2bS5vcHRpb25zLnNlbGVjdEF0U3RhcnQucHJvcGVydHkgIT09IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGVsSXRlbTtcblxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChjYXJvdXNlbEl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBtb2RlbEl0ZW0gICAgICAgICAgICA9IHZtLmFycmF5UHJvdmlkZXJbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBtb2RlbEl0ZW0uY2Fyb3VzZWxJZCA9IHZtLm9wdGlvbnMuY2Fyb3VzZWxJZDtcblxuICAgICAgICAgICAgICAgICAgICB3aWR0aENhcm91c2VsICs9IGl0ZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHZtLm9wdGlvbnMud2lkdGhJdGVtICA9IE1hdGgubWF4KGl0ZW0ub2Zmc2V0V2lkdGgsIHZtLm9wdGlvbnMud2lkdGhJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdm0ub3B0aW9ucy5oZWlnaHRJdGVtID0gTWF0aC5tYXgoaXRlbS5vZmZzZXRIZWlnaHQsIHZtLm9wdGlvbnMuaGVpZ2h0SXRlbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdm0uYXJyYXlQcm92aWRlcltpbmRleF0ud2lkdGhJdGVtID0gaXRlbS5vZmZzZXRXaWR0aDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBBcyB3ZSBjYW4gc2VsZWN0IGF0IHN0YXJ0IGFuIGl0ZW0gd2l0aCBhIHByb3BlcnR5IG9mIGNlcnRhaW4gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgY2hlY2sgaGVyZSBpdHMgaW5kZXggaW4gdGhlIEFycmF5XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtQXRTdGFydCAmJiB2bS5vcHRpb25zLnNlbGVjdEF0U3RhcnQuaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWxJdGVtW3ZtLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5wcm9wZXJ0eV0gPT09IHZtLm9wdGlvbnMuc2VsZWN0QXRTdGFydC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5pbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICh2bS5vcHRpb25zLmNlbnRlck9uU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjZW50ZXJYICAgPSAkd2luZG93LmlubmVyV2lkdGggKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdEl0ZW0gPSBjYXJvdXNlbEl0ZW1zWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdEl0ZW0gID0gY2Fyb3VzZWxJdGVtc1tudW1JdGVtcyAtIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQgID0gY2VudGVyWCAtIGZpcnN0SXRlbS5vZmZzZXRXaWR0aCAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQgPSBjZW50ZXJYIC0gbGFzdEl0ZW0ub2Zmc2V0V2lkdGggKiAwLjU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgYWRkIG1hcmdpbiBvbiBib3RoIHNpZGUgdG8gYmUgYWJsZSB0byBjZW50ZXIgdGhlIGZpcnN0IGFuZCBsYXN0IGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGhDYXJvdXNlbCArPSBtYXJnaW5MZWZ0ICsgbWFyZ2luUmlnaHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgdm0ub3B0aW9ucy5tYXhTY3JvbGwgPSAkd2luZG93LmlubmVyV2lkdGggLSB3aWR0aENhcm91c2VsO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uIHRoZSBjYXJvdXNlbCBvbiBmaXJzdCBpdGVtXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5vcHRpb25zLmFsaWduID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaW9uaWNTY3JvbGxEZWxlZ2F0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kZ2V0QnlIYW5kbGUodm0ub3B0aW9ucy5jYXJvdXNlbElkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zY3JvbGxUbyh2bS5vcHRpb25zLm1heFNjcm9sbCAqIC0xLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodm0ub3B0aW9ucy5hbGlnbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpb25pY1Njcm9sbERlbGVnYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLiRnZXRCeUhhbmRsZSh2bS5vcHRpb25zLmNhcm91c2VsSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNjcm9sbFRvKHZtLm9wdGlvbnMubWF4U2Nyb2xsICogLTAuNSwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGlvbmljU2Nyb2xsRGVsZWdhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuJGdldEJ5SGFuZGxlKHZtLm9wdGlvbnMuY2Fyb3VzZWxJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2Nyb2xsVG8oMCwgMCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoQ2Fyb3VzZWwgKz0gNDsgLy8gKyA0IHRvIGF2b2lkIGxpbmUgYnJlYWsgd2hlbiB0ZXh0IGdvaW5nIGJvbGRcbiAgICAgICAgICAgICAgICAgICAgdm0ub3B0aW9ucy5tYXhTY3JvbGwgPSAkd2luZG93LmlubmVyV2lkdGggLSB3aWR0aENhcm91c2VsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZtLm9wdGlvbnMud2lkdGhDYXJvdXNlbCA9IHdpZHRoQ2Fyb3VzZWw7XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgQWN0aXZlIGl0ZW0gYXQgc3RhcnRcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdEl0ZW1BdFN0YXJ0ICYmIHZtLm9wdGlvbnMuc2VsZWN0Rmlyc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLm9wdGlvbnMuYWxpZ24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW1BY3RpdmUodm0uYXJyYXlQcm92aWRlcltudW1JdGVtcyAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW1BY3RpdmUodm0uYXJyYXlQcm92aWRlclswXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0SXRlbUF0U3RhcnQgJiYgdm0ub3B0aW9ucy5zZWxlY3RBdFN0YXJ0LmluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0SXRlbSh2bS5hcnJheVByb3ZpZGVyW3ZtLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5pbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgaW5saW5lLWNzcyB0byBjYXJvdXNlbCBhY2NvcmRpbmcgdG8gaXRlbXMgd2lkdGggYW5kIGhlaWdodFxuICAgICAgICAgICAgICAgIHZtLm5hdkVsZW0gPSAkZWxlbWVudC5maW5kKCduYXYnKTtcbiAgICAgICAgICAgICAgICB2bS5uYXZFbGVtLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCcgICAgICAgOiB3aWR0aENhcm91c2VsICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCcgICAgICA6IHZtLm9wdGlvbnMuaGVpZ2h0SXRlbSArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JyAgOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nLWxlZnQnOiBtYXJnaW5MZWZ0ICsgJ3B4J1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2FjaGUgcHVsbCByZWZyZXNoIERPTSBlbGVtZW50cyAoYm90aCB3cmFwcGVyIGFuZCBzdmcgZWxlbSlcbiAgICAgICAgICAgICAgICBpZiAodm0ub3B0aW9ucy5wdWxsUmVmcmVzaC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdm0ucHVsbHJlZnJlc2hJbmRpY2F0b3IgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmEtY2Fyb3VzZWwgLnB1bGxyZWZyZXNoLWluZGljYXRvcicpKTtcbiAgICAgICAgICAgICAgICAgICAgdm0uc3ZnRWxlbSAgICAgICAgICAgICAgPSAkZWxlbWVudC5maW5kKCdnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2VsZWN0SXRlbShpdGVtKSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsUG9zLCBpO1xuXG4gICAgICAgICAgICBzZXRJdGVtQWN0aXZlKGl0ZW0pO1xuXG4gICAgICAgICAgICAvLyBDZW50ZXIgY2Fyb3VzZWxcbiAgICAgICAgICAgIGlmICh2bS5vcHRpb25zLmNlbnRlck9uU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhGcm9tSWQoaXRlbSk7XG5cbiAgICAgICAgICAgICAgICBzY3JvbGxQb3MgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFBvcyA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFBvcyArPSAodm0uYXJyYXlQcm92aWRlcltpXS53aWR0aEl0ZW0gKyB2bS5hcnJheVByb3ZpZGVyW2kgKyAxXS53aWR0aEl0ZW0pICogMC41O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJGlvbmljU2Nyb2xsRGVsZWdhdGUuJGdldEJ5SGFuZGxlKHZtLm9wdGlvbnMuY2Fyb3VzZWxJZCkuc2Nyb2xsVG8oc2Nyb2xsUG9zLCAwLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPbmx5IGZvciB3aGVuIHB1bGwtcmVmcmVzaCBhY3RpdmUgaXMgc2V0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcbiAgICAgICAgICAgIHZhciBwY3Q7XG4gICAgICAgICAgICB2YXIgcG9zICAgICAgICAgICAgID0gJGlvbmljU2Nyb2xsRGVsZWdhdGUuJGdldEJ5SGFuZGxlKHZtLm9wdGlvbnMuY2Fyb3VzZWxJZCkuZ2V0U2Nyb2xsUG9zaXRpb24oKS5sZWZ0O1xuICAgICAgICAgICAgdmFyIHBjdFB1bGwgICAgICAgICA9IDA7XG4gICAgICAgICAgICB2YXIgcGN0Um90SW5kaWNhdG9yID0gMDtcblxuICAgICAgICAgICAgaWYgKHZtLm9wdGlvbnMubWF4U2Nyb2xsIDwgMCkge1xuICAgICAgICAgICAgICAgIHBjdCA9IHBvcyAvIHZtLm9wdGlvbnMubWF4U2Nyb2xsICogLTE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIElmIE5PIG1heFNjcm9sbCAtPiBwcm9iYWJseSBtZWFucyB0aGF0IHRoZXJlIGFyZSBvbmx5IDEgb3IgMiBpdGVtcyAobm8gbmVlZCB0byBzY3JvbGwpXG4gICAgICAgICAgICAgICAgLy8gd2UgZmFrZSBhIHBlcmNlbnRhZ2VcbiAgICAgICAgICAgICAgICBwY3QgPSBwb3MgLyAxMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBjdCA+IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGl4ZWxQdWxsID0gcG9zIC0gdm0ub3B0aW9ucy5tYXhTY3JvbGwgKiAtMTtcbiAgICAgICAgICAgICAgICBwY3RQdWxsICAgICAgID0gcGl4ZWxQdWxsIC8gJHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIHZtLnB1bGxyZWZyZXNoSW5kaWNhdG9yLmNzcyh7J3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVYKCcgKyBwY3RSb3RJbmRpY2F0b3IgKiAtNTYgKyAncHgpJ30pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGN0UHVsbCA+IDAuMjUgJiYgcG9zID4gMCkge1xuICAgICAgICAgICAgICAgIHZtLnB1bGxyZWZyZXNoSW5kaWNhdG9yLmNzcyh7J3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVYKDBweCknLCBkaXNwbGF5OiAnbm9uZSd9KTtcbiAgICAgICAgICAgICAgICBvblB1bGxSZWZyZXNoKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBjdFJvdEluZGljYXRvciA9IHBjdFB1bGwgLyAwLjI7XG4gICAgICAgICAgICAgICAgdm0uc3ZnRWxlbVswXS5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsICdyb3RhdGUoJyArIHBjdFJvdEluZGljYXRvciAqIDM2MCArICcgMzIgMzIpJyk7XG4gICAgICAgICAgICAgICAgdm0ucHVsbHJlZnJlc2hJbmRpY2F0b3IuY3NzKHsndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVgoJyArIHBjdFJvdEluZGljYXRvciAqIC01NiArICdweCknfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLS0tXG4gICAgICAgIC8vIFBSSVZBVEVcbiAgICAgICAgLy8gLS0tLS0tLS0tLVxuICAgICAgICBmdW5jdGlvbiBzZXRJdGVtQWN0aXZlKGl0ZW0pIHtcbiAgICAgICAgICAgIHZtLml0ZW1BY3RpdmUgPSBpdGVtO1xuXG4gICAgICAgICAgICAvLyBDYWxsYmFjayBvbiBzZWxlY3RcbiAgICAgICAgICAgIHZtLm9uU2VsZWN0LmNhbGwobnVsbCwge2l0ZW06IGl0ZW19KTtcblxuICAgICAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ2EtY2Fyb3VzZWwuaXRlbXNlbGVjdGVkJywgaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRJbmRleEZyb21JZChpdGVtKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHZtLmFycmF5UHJvdmlkZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodm0uYXJyYXlQcm92aWRlcltpXSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQdWxsIFJlZnJlc2hcbiAgICAgICAgZnVuY3Rpb24gb25QdWxsUmVmcmVzaCgpIHtcbiAgICAgICAgICAgIGlmICghdm0ub3B0aW9ucy5wdWxsUmVmcmVzaC5sb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLm9wdGlvbnMucHVsbFJlZnJlc2gubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkaW9uaWNTY3JvbGxEZWxlZ2F0ZS4kZ2V0QnlIYW5kbGUodm0ub3B0aW9ucy5jYXJvdXNlbElkKS5mcmVlemVTY3JvbGwodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgc29tZSB3aWR0aCB0byB0aGUgbmF2IHRvIG1ha2Ugc29tZSByb29tIGZvciB0aGUgc3Bpbm5lclxuICAgICAgICAgICAgICAgIHZtLm5hdkVsZW0uY3NzKHsnd2lkdGgnOiB2bS5vcHRpb25zLndpZHRoQ2Fyb3VzZWwgKyA0NSArICdweCd9KTtcbiAgICAgICAgICAgICAgICAkaW9uaWNTY3JvbGxEZWxlZ2F0ZS4kZ2V0QnlIYW5kbGUodm0ub3B0aW9ucy5jYXJvdXNlbElkKS5yZXNpemUoKTtcblxuICAgICAgICAgICAgICAgIHZtLm9wdGlvbnMucHVsbFJlZnJlc2guY2FsbEJhY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25FbmRSZWZyZXNoKCkge1xuICAgICAgICAgICAgdm0ub3B0aW9ucy5wdWxsUmVmcmVzaC5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHZtLm5hdkVsZW0uY3NzKHsnd2lkdGgnOiB2bS5vcHRpb25zLndpZHRoQ2Fyb3VzZWwgKyAncHgnfSk7XG4gICAgICAgICAgICAkaW9uaWNTY3JvbGxEZWxlZ2F0ZS4kZ2V0QnlIYW5kbGUodm0ub3B0aW9ucy5jYXJvdXNlbElkKS5yZXNpemUoKTtcblxuICAgICAgICAgICAgJGlvbmljU2Nyb2xsRGVsZWdhdGUuJGdldEJ5SGFuZGxlKHZtLm9wdGlvbnMuY2Fyb3VzZWxJZCkuZnJlZXplU2Nyb2xsKGZhbHNlKTtcbiAgICAgICAgICAgIHZtLnB1bGxyZWZyZXNoSW5kaWNhdG9yLmNzcyh7J3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVYKDBweCknLCBkaXNwbGF5OiAnYmxvY2snfSk7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE5hbWU6ICAgICAgICAgIG5nLWtub2JcbiAqIERlc2NyaXB0aW9uOiAgIEFuZ3VsYXIuanMgS25vYiBkaXJlY3RpdmVcbiAqIFZlcnNpb246ICAgICAgIDAuMS4zXG4gKiBIb21lcGFnZTogICAgICBodHRwczovL3JhZG1pZS5naXRodWIuaW8vbmcta25vYlxuICogTGljZW5jZTogICAgICAgTUlUXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblwidXNlIHN0cmljdFwiOyFmdW5jdGlvbigpe3ZhciB1aT17fSxLbm9iPWZ1bmN0aW9uKGVsZW1lbnQsdmFsdWUsb3B0aW9ucyl7dGhpcy5lbGVtZW50PWVsZW1lbnQsdGhpcy52YWx1ZT12YWx1ZSx0aGlzLm9wdGlvbnM9b3B0aW9ucyx0aGlzLmluRHJhZz0hMX07S25vYi5wcm90b3R5cGUudmFsdWVUb1JhZGlhbnM9ZnVuY3Rpb24odmFsdWUsdmFsdWVFbmQsYW5nbGVFbmQsYW5nbGVTdGFydCx2YWx1ZVN0YXJ0KXtyZXR1cm4gdmFsdWVFbmQ9dmFsdWVFbmR8fDEwMCx2YWx1ZVN0YXJ0PXZhbHVlU3RhcnR8fDAsYW5nbGVFbmQ9YW5nbGVFbmR8fDM2MCxhbmdsZVN0YXJ0PWFuZ2xlU3RhcnR8fDAsTWF0aC5QSS8xODAqKCh2YWx1ZS12YWx1ZVN0YXJ0KSooYW5nbGVFbmQtYW5nbGVTdGFydCkvKHZhbHVlRW5kLXZhbHVlU3RhcnQpK2FuZ2xlU3RhcnQpfSxLbm9iLnByb3RvdHlwZS5yYWRpYW5zVG9WYWx1ZT1mdW5jdGlvbihyYWRpYW5zLHZhbHVlRW5kLHZhbHVlU3RhcnQsYW5nbGVFbmQsYW5nbGVTdGFydCl7cmV0dXJuIHZhbHVlRW5kPXZhbHVlRW5kfHwxMDAsdmFsdWVTdGFydD12YWx1ZVN0YXJ0fHwwLGFuZ2xlRW5kPWFuZ2xlRW5kfHwzNjAsYW5nbGVTdGFydD1hbmdsZVN0YXJ0fHwwLCgxODAvTWF0aC5QSSpyYWRpYW5zLWFuZ2xlU3RhcnQpKih2YWx1ZUVuZC12YWx1ZVN0YXJ0KS8oYW5nbGVFbmQtYW5nbGVTdGFydCkrdmFsdWVTdGFydH0sS25vYi5wcm90b3R5cGUuY3JlYXRlQXJjPWZ1bmN0aW9uKGlubmVyUmFkaXVzLG91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsZW5kQW5nbGUsY29ybmVyUmFkaXVzKXt2YXIgYXJjPWQzLnN2Zy5hcmMoKS5pbm5lclJhZGl1cyhpbm5lclJhZGl1cykub3V0ZXJSYWRpdXMob3V0ZXJSYWRpdXMpLnN0YXJ0QW5nbGUoc3RhcnRBbmdsZSkuZW5kQW5nbGUoZW5kQW5nbGUpLmNvcm5lclJhZGl1cyhjb3JuZXJSYWRpdXMpO3JldHVybiBhcmN9LEtub2IucHJvdG90eXBlLmRyYXdBcmM9ZnVuY3Rpb24oc3ZnLGFyYyxsYWJlbCxzdHlsZSxjbGljayxkcmFnKXt2YXIgZWxlbT1zdmcuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiaWRcIixsYWJlbCkuYXR0cihcImRcIixhcmMpLnN0eWxlKHN0eWxlKS5hdHRyKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoXCIrdGhpcy5vcHRpb25zLnNpemUvMitcIiwgXCIrdGhpcy5vcHRpb25zLnNpemUvMitcIilcIik7cmV0dXJuIHRoaXMub3B0aW9ucy5yZWFkT25seT09PSExJiYoY2xpY2smJmVsZW0ub24oXCJjbGlja1wiLGNsaWNrKSxkcmFnJiZlbGVtLmNhbGwoZHJhZykpLGVsZW19LEtub2IucHJvdG90eXBlLmNyZWF0ZUFyY3M9ZnVuY3Rpb24oKXt2YXIgb3V0ZXJSYWRpdXM9cGFyc2VJbnQodGhpcy5vcHRpb25zLnNpemUvMiwxMCksc3RhcnRBbmdsZT10aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLDM2MCksZW5kQW5nbGU9dGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLm9wdGlvbnMuZW5kQW5nbGUsMzYwKTt0aGlzLm9wdGlvbnMuc2NhbGUuZW5hYmxlZCYmKG91dGVyUmFkaXVzLT10aGlzLm9wdGlvbnMuc2NhbGUud2lkdGgrdGhpcy5vcHRpb25zLnNjYWxlLnNwYWNlV2lkdGgpO3ZhciBkaWZmLHRyYWNrSW5uZXJSYWRpdXM9b3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnRyYWNrV2lkdGgsY2hhbmdlSW5uZXJSYWRpdXM9b3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLmJhcldpZHRoLHZhbHVlSW5uZXJSYWRpdXM9b3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLmJhcldpZHRoLGludGVyYWN0SW5uZXJSYWRpdXM9MSx0cmFja091dGVyUmFkaXVzPW91dGVyUmFkaXVzLGNoYW5nZU91dGVyUmFkaXVzPW91dGVyUmFkaXVzLHZhbHVlT3V0ZXJSYWRpdXM9b3V0ZXJSYWRpdXMsaW50ZXJhY3RPdXRlclJhZGl1cz1vdXRlclJhZGl1czt0aGlzLm9wdGlvbnMuYmFyV2lkdGg+dGhpcy5vcHRpb25zLnRyYWNrV2lkdGg/KGRpZmY9KHRoaXMub3B0aW9ucy5iYXJXaWR0aC10aGlzLm9wdGlvbnMudHJhY2tXaWR0aCkvMix0cmFja0lubmVyUmFkaXVzLT1kaWZmLHRyYWNrT3V0ZXJSYWRpdXMtPWRpZmYpOnRoaXMub3B0aW9ucy5iYXJXaWR0aDx0aGlzLm9wdGlvbnMudHJhY2tXaWR0aCYmKGRpZmY9KHRoaXMub3B0aW9ucy50cmFja1dpZHRoLXRoaXMub3B0aW9ucy5iYXJXaWR0aCkvMixjaGFuZ2VPdXRlclJhZGl1cy09ZGlmZix2YWx1ZU91dGVyUmFkaXVzLT1kaWZmLGNoYW5nZUlubmVyUmFkaXVzLT1kaWZmLHZhbHVlSW5uZXJSYWRpdXMtPWRpZmYpLHRoaXMub3B0aW9ucy5iZ0NvbG9yJiYodGhpcy5iZ0FyYz10aGlzLmNyZWF0ZUFyYygwLG91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsZW5kQW5nbGUpKSxcInRyb25cIj09PXRoaXMub3B0aW9ucy5za2luLnR5cGUmJih0cmFja091dGVyUmFkaXVzPXRyYWNrT3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnNraW4ud2lkdGgtdGhpcy5vcHRpb25zLnNraW4uc3BhY2VXaWR0aCxjaGFuZ2VPdXRlclJhZGl1cz1jaGFuZ2VPdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuc2tpbi53aWR0aC10aGlzLm9wdGlvbnMuc2tpbi5zcGFjZVdpZHRoLHZhbHVlT3V0ZXJSYWRpdXM9dmFsdWVPdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuc2tpbi53aWR0aC10aGlzLm9wdGlvbnMuc2tpbi5zcGFjZVdpZHRoLGludGVyYWN0T3V0ZXJSYWRpdXM9aW50ZXJhY3RPdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuc2tpbi53aWR0aC10aGlzLm9wdGlvbnMuc2tpbi5zcGFjZVdpZHRoLHRoaXMuaG9vcEFyYz10aGlzLmNyZWF0ZUFyYyhvdXRlclJhZGl1cy10aGlzLm9wdGlvbnMuc2tpbi53aWR0aCxvdXRlclJhZGl1cyxzdGFydEFuZ2xlLGVuZEFuZ2xlKSksdGhpcy50cmFja0FyYz10aGlzLmNyZWF0ZUFyYyh0cmFja0lubmVyUmFkaXVzLHRyYWNrT3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxlbmRBbmdsZSksdGhpcy5jaGFuZ2VBcmM9dGhpcy5jcmVhdGVBcmMoY2hhbmdlSW5uZXJSYWRpdXMsY2hhbmdlT3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxzdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5iYXJDYXApLHRoaXMudmFsdWVBcmM9dGhpcy5jcmVhdGVBcmModmFsdWVJbm5lclJhZGl1cyx2YWx1ZU91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMuYmFyQ2FwKSx0aGlzLmludGVyYWN0QXJjPXRoaXMuY3JlYXRlQXJjKGludGVyYWN0SW5uZXJSYWRpdXMsaW50ZXJhY3RPdXRlclJhZGl1cyxzdGFydEFuZ2xlLGVuZEFuZ2xlKX0sS25vYi5wcm90b3R5cGUuZHJhd0FyY3M9ZnVuY3Rpb24oY2xpY2tJbnRlcmFjdGlvbixkcmFnQmVoYXZpb3Ipe3ZhciBzdmc9ZDMuc2VsZWN0KHRoaXMuZWxlbWVudCkuYXBwZW5kKFwic3ZnXCIpLmF0dHIoXCJ3aWR0aFwiLHRoaXMub3B0aW9ucy5zaXplKS5hdHRyKFwiaGVpZ2h0XCIsdGhpcy5vcHRpb25zLnNpemUpO2lmKHRoaXMub3B0aW9ucy5iZ0NvbG9yJiZ0aGlzLmRyYXdBcmMoc3ZnLHRoaXMuYmdBcmMsXCJiZ0FyY1wiLHtmaWxsOnRoaXMub3B0aW9ucy5iZ0NvbG9yfSksdGhpcy5vcHRpb25zLmRpc3BsYXlJbnB1dCl7dmFyIGZvbnRTaXplPS4yKnRoaXMub3B0aW9ucy5zaXplK1wicHhcIjtcImF1dG9cIiE9PXRoaXMub3B0aW9ucy5mb250U2l6ZSYmKGZvbnRTaXplPXRoaXMub3B0aW9ucy5mb250U2l6ZStcInB4XCIpLHRoaXMub3B0aW9ucy5zdGVwPDEmJih0aGlzLnZhbHVlPXRoaXMudmFsdWUudG9GaXhlZCgxKSk7dmFyIHY9dGhpcy52YWx1ZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXImJih2PXRoaXMub3B0aW9ucy5pbnB1dEZvcm1hdHRlcih2KSksc3ZnLmFwcGVuZChcInRleHRcIikuYXR0cihcImlkXCIsXCJ0ZXh0XCIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLFwibWlkZGxlXCIpLmF0dHIoXCJmb250LXNpemVcIixmb250U2l6ZSkuc3R5bGUoXCJmaWxsXCIsdGhpcy5vcHRpb25zLnRleHRDb2xvcikudGV4dCh2K3RoaXMub3B0aW9ucy51bml0fHxcIlwiKS5hdHRyKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoXCIrdGhpcy5vcHRpb25zLnNpemUvMitcIiwgXCIrKHRoaXMub3B0aW9ucy5zaXplLzIrLjA2KnRoaXMub3B0aW9ucy5zaXplKStcIilcIiksdGhpcy5vcHRpb25zLnN1YlRleHQuZW5hYmxlZCYmKGZvbnRTaXplPS4wNyp0aGlzLm9wdGlvbnMuc2l6ZStcInB4XCIsXCJhdXRvXCIhPT10aGlzLm9wdGlvbnMuc3ViVGV4dC5mb250JiYoZm9udFNpemU9dGhpcy5vcHRpb25zLnN1YlRleHQuZm9udCtcInB4XCIpLHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJjbGFzc1wiLFwic3ViLXRleHRcIikuYXR0cihcInRleHQtYW5jaG9yXCIsXCJtaWRkbGVcIikuYXR0cihcImZvbnQtc2l6ZVwiLGZvbnRTaXplKS5zdHlsZShcImZpbGxcIix0aGlzLm9wdGlvbnMuc3ViVGV4dC5jb2xvcikudGV4dCh0aGlzLm9wdGlvbnMuc3ViVGV4dC50ZXh0KS5hdHRyKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoXCIrdGhpcy5vcHRpb25zLnNpemUvMitcIiwgXCIrKHRoaXMub3B0aW9ucy5zaXplLzIrLjE1KnRoaXMub3B0aW9ucy5zaXplKStcIilcIikpfWlmKHRoaXMub3B0aW9ucy5zY2FsZS5lbmFibGVkKXt2YXIgcmFkaXVzLHF1YW50aXR5LGRhdGEsY291bnQ9MCxhbmdsZT0wLHN0YXJ0UmFkaWFucz10aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMub3B0aW9ucy5taW4sdGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMuZW5kQW5nbGUsdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLm1pbiksZW5kUmFkaWFucz10aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMuZW5kQW5nbGUsdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLm1pbiksZGlmZj0wO2lmKDA9PT10aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSYmMzYwPT09dGhpcy5vcHRpb25zLmVuZEFuZ2xlfHwoZGlmZj0xKSxcImRvdHNcIj09PXRoaXMub3B0aW9ucy5zY2FsZS50eXBlKXt2YXIgd2lkdGg9dGhpcy5vcHRpb25zLnNjYWxlLndpZHRoO3JhZGl1cz10aGlzLm9wdGlvbnMuc2l6ZS8yLXdpZHRoLHF1YW50aXR5PXRoaXMub3B0aW9ucy5zY2FsZS5xdWFudGl0eTt2YXIgb2Zmc2V0PXJhZGl1cyt0aGlzLm9wdGlvbnMuc2NhbGUud2lkdGg7ZGF0YT1kMy5yYW5nZShxdWFudGl0eSkubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIGFuZ2xlPWNvdW50KihlbmRSYWRpYW5zLXN0YXJ0UmFkaWFucyktTWF0aC5QSS8yK3N0YXJ0UmFkaWFucyxjb3VudCs9MS8ocXVhbnRpdHktZGlmZikse2N4Om9mZnNldCtNYXRoLmNvcyhhbmdsZSkqcmFkaXVzLGN5Om9mZnNldCtNYXRoLnNpbihhbmdsZSkqcmFkaXVzLHI6d2lkdGh9fSksc3ZnLnNlbGVjdEFsbChcImNpcmNsZVwiKS5kYXRhKGRhdGEpLmVudGVyKCkuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoe3I6ZnVuY3Rpb24oZCl7cmV0dXJuIGQucn0sY3g6ZnVuY3Rpb24oZCl7cmV0dXJuIGQuY3h9LGN5OmZ1bmN0aW9uKGQpe3JldHVybiBkLmN5fSxmaWxsOnRoaXMub3B0aW9ucy5zY2FsZS5jb2xvcn0pfWVsc2UgaWYoXCJsaW5lc1wiPT09dGhpcy5vcHRpb25zLnNjYWxlLnR5cGUpe3ZhciBoZWlnaHQ9dGhpcy5vcHRpb25zLnNjYWxlLmhlaWdodDtyYWRpdXM9dGhpcy5vcHRpb25zLnNpemUvMixxdWFudGl0eT10aGlzLm9wdGlvbnMuc2NhbGUucXVhbnRpdHksZGF0YT1kMy5yYW5nZShxdWFudGl0eSkubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIGFuZ2xlPWNvdW50KihlbmRSYWRpYW5zLXN0YXJ0UmFkaWFucyktTWF0aC5QSS8yK3N0YXJ0UmFkaWFucyxjb3VudCs9MS8ocXVhbnRpdHktZGlmZikse3gxOnJhZGl1cytNYXRoLmNvcyhhbmdsZSkqcmFkaXVzLHkxOnJhZGl1cytNYXRoLnNpbihhbmdsZSkqcmFkaXVzLHgyOnJhZGl1cytNYXRoLmNvcyhhbmdsZSkqKHJhZGl1cy1oZWlnaHQpLHkyOnJhZGl1cytNYXRoLnNpbihhbmdsZSkqKHJhZGl1cy1oZWlnaHQpfX0pLHN2Zy5zZWxlY3RBbGwoXCJsaW5lXCIpLmRhdGEoZGF0YSkuZW50ZXIoKS5hcHBlbmQoXCJsaW5lXCIpLmF0dHIoe3gxOmZ1bmN0aW9uKGQpe3JldHVybiBkLngxfSx5MTpmdW5jdGlvbihkKXtyZXR1cm4gZC55MX0seDI6ZnVuY3Rpb24oZCl7cmV0dXJuIGQueDJ9LHkyOmZ1bmN0aW9uKGQpe3JldHVybiBkLnkyfSxcInN0cm9rZS13aWR0aFwiOnRoaXMub3B0aW9ucy5zY2FsZS53aWR0aCxzdHJva2U6dGhpcy5vcHRpb25zLnNjYWxlLmNvbG9yfSl9fVwidHJvblwiPT09dGhpcy5vcHRpb25zLnNraW4udHlwZSYmdGhpcy5kcmF3QXJjKHN2Zyx0aGlzLmhvb3BBcmMsXCJob29wQXJjXCIse2ZpbGw6dGhpcy5vcHRpb25zLnNraW4uY29sb3J9KSx0aGlzLmRyYXdBcmMoc3ZnLHRoaXMudHJhY2tBcmMsXCJ0cmFja0FyY1wiLHtmaWxsOnRoaXMub3B0aW9ucy50cmFja0NvbG9yfSksdGhpcy5vcHRpb25zLmRpc3BsYXlQcmV2aW91cz90aGlzLmNoYW5nZUVsZW09dGhpcy5kcmF3QXJjKHN2Zyx0aGlzLmNoYW5nZUFyYyxcImNoYW5nZUFyY1wiLHtmaWxsOnRoaXMub3B0aW9ucy5wcmV2QmFyQ29sb3J9KTp0aGlzLmNoYW5nZUVsZW09dGhpcy5kcmF3QXJjKHN2Zyx0aGlzLmNoYW5nZUFyYyxcImNoYW5nZUFyY1wiLHtcImZpbGwtb3BhY2l0eVwiOjB9KSx0aGlzLnZhbHVlRWxlbT10aGlzLmRyYXdBcmMoc3ZnLHRoaXMudmFsdWVBcmMsXCJ2YWx1ZUFyY1wiLHtmaWxsOnRoaXMub3B0aW9ucy5iYXJDb2xvcn0pO3ZhciBjdXJzb3I9XCJwb2ludGVyXCI7dGhpcy5vcHRpb25zLnJlYWRPbmx5JiYoY3Vyc29yPVwiZGVmYXVsdFwiKSx0aGlzLmRyYXdBcmMoc3ZnLHRoaXMuaW50ZXJhY3RBcmMsXCJpbnRlcmFjdEFyY1wiLHtcImZpbGwtb3BhY2l0eVwiOjAsY3Vyc29yOmN1cnNvcn0sY2xpY2tJbnRlcmFjdGlvbixkcmFnQmVoYXZpb3IpfSxLbm9iLnByb3RvdHlwZS5kcmF3PWZ1bmN0aW9uKHVwZGF0ZSl7ZnVuY3Rpb24gZHJhZ0ludGVyYWN0aW9uKCl7dGhhdC5pbkRyYWc9ITA7dmFyIHg9ZDMuZXZlbnQueC10aGF0Lm9wdGlvbnMuc2l6ZS8yLHk9ZDMuZXZlbnQueS10aGF0Lm9wdGlvbnMuc2l6ZS8yO2ludGVyYWN0aW9uKHgseSwhMSl9ZnVuY3Rpb24gY2xpY2tJbnRlcmFjdGlvbigpe3RoYXQuaW5EcmFnPSExO3ZhciBjb29yZHM9ZDMubW91c2UodGhpcy5wYXJlbnROb2RlKSx4PWNvb3Jkc1swXS10aGF0Lm9wdGlvbnMuc2l6ZS8yLHk9Y29vcmRzWzFdLXRoYXQub3B0aW9ucy5zaXplLzI7aW50ZXJhY3Rpb24oeCx5LCEwKX1mdW5jdGlvbiBpbnRlcmFjdGlvbih4LHksaXNGaW5hbCl7dmFyIHJhZGlhbnMsZGVsdGEsYXJjPU1hdGguYXRhbih5L3gpLyhNYXRoLlBJLzE4MCk7aWYoeD49MCYmMD49eXx8eD49MCYmeT49MD9kZWx0YT05MDooZGVsdGE9MjcwLHRoYXQub3B0aW9ucy5zdGFydEFuZ2xlPDAmJihkZWx0YT0tOTApKSxyYWRpYW5zPShkZWx0YSthcmMpKihNYXRoLlBJLzE4MCksdGhhdC52YWx1ZT10aGF0LnJhZGlhbnNUb1ZhbHVlKHJhZGlhbnMsdGhhdC5vcHRpb25zLm1heCx0aGF0Lm9wdGlvbnMubWluLHRoYXQub3B0aW9ucy5lbmRBbmdsZSx0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZSksdGhhdC52YWx1ZT49dGhhdC5vcHRpb25zLm1pbiYmdGhhdC52YWx1ZTw9dGhhdC5vcHRpb25zLm1heCYmKHRoYXQudmFsdWU9TWF0aC5yb3VuZCh+figodGhhdC52YWx1ZTwwPy0uNTouNSkrdGhhdC52YWx1ZS90aGF0Lm9wdGlvbnMuc3RlcCkqdGhhdC5vcHRpb25zLnN0ZXAqMTAwKS8xMDAsdGhhdC5vcHRpb25zLnN0ZXA8MSYmKHRoYXQudmFsdWU9dGhhdC52YWx1ZS50b0ZpeGVkKDEpKSx1cGRhdGUodGhhdC52YWx1ZSksdGhhdC52YWx1ZUFyYy5lbmRBbmdsZSh0aGF0LnZhbHVlVG9SYWRpYW5zKHRoYXQudmFsdWUsdGhhdC5vcHRpb25zLm1heCx0aGF0Lm9wdGlvbnMuZW5kQW5nbGUsdGhhdC5vcHRpb25zLnN0YXJ0QW5nbGUsdGhhdC5vcHRpb25zLm1pbikpLHRoYXQudmFsdWVFbGVtLmF0dHIoXCJkXCIsdGhhdC52YWx1ZUFyYyksaXNGaW5hbCYmKHRoYXQuY2hhbmdlQXJjLmVuZEFuZ2xlKHRoYXQudmFsdWVUb1JhZGlhbnModGhhdC52YWx1ZSx0aGF0Lm9wdGlvbnMubWF4LHRoYXQub3B0aW9ucy5lbmRBbmdsZSx0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZSx0aGF0Lm9wdGlvbnMubWluKSksdGhhdC5jaGFuZ2VFbGVtLmF0dHIoXCJkXCIsdGhhdC5jaGFuZ2VBcmMpKSx0aGF0Lm9wdGlvbnMuZGlzcGxheUlucHV0KSl7dmFyIHY9dGhhdC52YWx1ZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGF0Lm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXImJih2PXRoYXQub3B0aW9ucy5pbnB1dEZvcm1hdHRlcih2KSksZDMuc2VsZWN0KHRoYXQuZWxlbWVudCkuc2VsZWN0KFwiI3RleHRcIikudGV4dCh2K3RoYXQub3B0aW9ucy51bml0fHxcIlwiKX19ZDMuc2VsZWN0KHRoaXMuZWxlbWVudCkuc2VsZWN0KFwic3ZnXCIpLnJlbW92ZSgpO3ZhciB0aGF0PXRoaXM7dGhhdC5jcmVhdGVBcmNzKCk7dmFyIGRyYWdCZWhhdmlvcj1kMy5iZWhhdmlvci5kcmFnKCkub24oXCJkcmFnXCIsZHJhZ0ludGVyYWN0aW9uKS5vbihcImRyYWdlbmRcIixjbGlja0ludGVyYWN0aW9uKTt0aGF0LmRyYXdBcmNzKGNsaWNrSW50ZXJhY3Rpb24sZHJhZ0JlaGF2aW9yKSx0aGF0Lm9wdGlvbnMuYW5pbWF0ZS5lbmFibGVkP3RoYXQudmFsdWVFbGVtLnRyYW5zaXRpb24oKS5lYXNlKHRoYXQub3B0aW9ucy5hbmltYXRlLmVhc2UpLmR1cmF0aW9uKHRoYXQub3B0aW9ucy5hbmltYXRlLmR1cmF0aW9uKS50d2VlbihcIlwiLGZ1bmN0aW9uKCl7dmFyIGk9ZDMuaW50ZXJwb2xhdGUodGhhdC52YWx1ZVRvUmFkaWFucyh0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZSwzNjApLHRoYXQudmFsdWVUb1JhZGlhbnModGhhdC52YWx1ZSx0aGF0Lm9wdGlvbnMubWF4LHRoYXQub3B0aW9ucy5lbmRBbmdsZSx0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZSx0aGF0Lm9wdGlvbnMubWluKSk7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciB2YWw9aSh0KTt0aGF0LnZhbHVlRWxlbS5hdHRyKFwiZFwiLHRoYXQudmFsdWVBcmMuZW5kQW5nbGUodmFsKSksdGhhdC5jaGFuZ2VFbGVtLmF0dHIoXCJkXCIsdGhhdC5jaGFuZ2VBcmMuZW5kQW5nbGUodmFsKSl9fSk6KHRoYXQuY2hhbmdlQXJjLmVuZEFuZ2xlKHRoaXMudmFsdWVUb1JhZGlhbnModGhpcy52YWx1ZSx0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5lbmRBbmdsZSx0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMubWluKSksdGhhdC5jaGFuZ2VFbGVtLmF0dHIoXCJkXCIsdGhhdC5jaGFuZ2VBcmMpLHRoYXQudmFsdWVBcmMuZW5kQW5nbGUodGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLnZhbHVlLHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLmVuZEFuZ2xlLHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5taW4pKSx0aGF0LnZhbHVlRWxlbS5hdHRyKFwiZFwiLHRoYXQudmFsdWVBcmMpKX0sS25vYi5wcm90b3R5cGUuc2V0VmFsdWU9ZnVuY3Rpb24obmV3VmFsdWUpe2lmKCF0aGlzLmluRHJhZyYmdGhpcy52YWx1ZT49dGhpcy5vcHRpb25zLm1pbiYmdGhpcy52YWx1ZTw9dGhpcy5vcHRpb25zLm1heCl7dmFyIHJhZGlhbnM9dGhpcy52YWx1ZVRvUmFkaWFucyhuZXdWYWx1ZSx0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5lbmRBbmdsZSx0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMubWluKTtpZih0aGlzLnZhbHVlPU1hdGgucm91bmQofn4oKDA+bmV3VmFsdWU/LS41Oi41KStuZXdWYWx1ZS90aGlzLm9wdGlvbnMuc3RlcCkqdGhpcy5vcHRpb25zLnN0ZXAqMTAwKS8xMDAsdGhpcy5vcHRpb25zLnN0ZXA8MSYmKHRoaXMudmFsdWU9dGhpcy52YWx1ZS50b0ZpeGVkKDEpKSx0aGlzLmNoYW5nZUFyYy5lbmRBbmdsZShyYWRpYW5zKSxkMy5zZWxlY3QodGhpcy5lbGVtZW50KS5zZWxlY3QoXCIjY2hhbmdlQXJjXCIpLmF0dHIoXCJkXCIsdGhpcy5jaGFuZ2VBcmMpLHRoaXMudmFsdWVBcmMuZW5kQW5nbGUocmFkaWFucyksZDMuc2VsZWN0KHRoaXMuZWxlbWVudCkuc2VsZWN0KFwiI3ZhbHVlQXJjXCIpLmF0dHIoXCJkXCIsdGhpcy52YWx1ZUFyYyksdGhpcy5vcHRpb25zLmRpc3BsYXlJbnB1dCl7dmFyIHY9dGhpcy52YWx1ZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXImJih2PXRoaXMub3B0aW9ucy5pbnB1dEZvcm1hdHRlcih2KSksZDMuc2VsZWN0KHRoaXMuZWxlbWVudCkuc2VsZWN0KFwiI3RleHRcIikudGV4dCh2K3RoaXMub3B0aW9ucy51bml0fHxcIlwiKX19fSx1aS5Lbm9iPUtub2IsdWkua25vYkRpcmVjdGl2ZT1mdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVcIixzY29wZTp7dmFsdWU6XCI9XCIsb3B0aW9uczpcIj1cIn0sbGluazpmdW5jdGlvbihzY29wZSxlbGVtZW50KXtzY29wZS52YWx1ZT1zY29wZS52YWx1ZXx8MDt2YXIgZGVmYXVsdE9wdGlvbnM9e3NraW46e3R5cGU6XCJzaW1wbGVcIix3aWR0aDoxMCxjb2xvcjpcInJnYmEoMjU1LDAsMCwuNSlcIixzcGFjZVdpZHRoOjV9LGFuaW1hdGU6e2VuYWJsZWQ6ITAsZHVyYXRpb246MWUzLGVhc2U6XCJib3VuY2VcIn0sc2l6ZToyMDAsc3RhcnRBbmdsZTowLGVuZEFuZ2xlOjM2MCx1bml0OlwiXCIsZGlzcGxheUlucHV0OiEwLGlucHV0Rm9ybWF0dGVyOmZ1bmN0aW9uKHYpe3JldHVybiB2fSxyZWFkT25seTohMSx0cmFja1dpZHRoOjUwLGJhcldpZHRoOjUwLHRyYWNrQ29sb3I6XCJyZ2JhKDAsMCwwLDApXCIsYmFyQ29sb3I6XCJyZ2JhKDI1NSwwLDAsLjUpXCIscHJldkJhckNvbG9yOlwicmdiYSgwLDAsMCwwKVwiLHRleHRDb2xvcjpcIiMyMjJcIixiYXJDYXA6MCxmb250U2l6ZTpcImF1dG9cIixzdWJUZXh0OntlbmFibGVkOiExLHRleHQ6XCJcIixjb2xvcjpcImdyYXlcIixmb250OlwiYXV0b1wifSxiZ0NvbG9yOlwiXCIsc2NhbGU6e2VuYWJsZWQ6ITEsdHlwZTpcImxpbmVzXCIsY29sb3I6XCJncmF5XCIsd2lkdGg6NCxxdWFudGl0eToyMCxoZWlnaHQ6MTAsc3BhY2VXaWR0aDoxNX0sc3RlcDoxLGRpc3BsYXlQcmV2aW91czohMSxtaW46MCxtYXg6MTAwLGR5bmFtaWNPcHRpb25zOiExfTtzY29wZS5vcHRpb25zPWFuZ3VsYXIubWVyZ2UoZGVmYXVsdE9wdGlvbnMsc2NvcGUub3B0aW9ucyk7dmFyIGtub2I9bmV3IHVpLktub2IoZWxlbWVudFswXSxzY29wZS52YWx1ZSxzY29wZS5vcHRpb25zKTtpZihzY29wZS4kd2F0Y2goXCJ2YWx1ZVwiLGZ1bmN0aW9uKG5ld1ZhbHVlLG9sZFZhbHVlKXtudWxsPT09bmV3VmFsdWUmJlwidW5kZWZpbmVkXCI9PXR5cGVvZiBuZXdWYWx1ZXx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIG9sZFZhbHVlfHxuZXdWYWx1ZT09PW9sZFZhbHVlfHxrbm9iLnNldFZhbHVlKG5ld1ZhbHVlKX0pLHNjb3BlLm9wdGlvbnMuZHluYW1pY09wdGlvbnMpe3ZhciBpc0ZpcnN0V2F0Y2hPbk9wdGlvbnM9ITA7c2NvcGUuJHdhdGNoKFwib3B0aW9uc1wiLGZ1bmN0aW9uKCl7aWYoaXNGaXJzdFdhdGNoT25PcHRpb25zKWlzRmlyc3RXYXRjaE9uT3B0aW9ucz0hMTtlbHNle3ZhciBuZXdPcHRpb25zPWFuZ3VsYXIubWVyZ2UoZGVmYXVsdE9wdGlvbnMsc2NvcGUub3B0aW9ucyk7a25vYj1uZXcgdWkuS25vYihlbGVtZW50WzBdLHNjb3BlLnZhbHVlLG5ld09wdGlvbnMpLGRyYXdLbm9iKCl9fSwhMCl9dmFyIGRyYXdLbm9iPWZ1bmN0aW9uKCl7a25vYi5kcmF3KGZ1bmN0aW9uKHZhbHVlKXtzY29wZS4kYXBwbHkoZnVuY3Rpb24oKXtzY29wZS52YWx1ZT12YWx1ZX0pfSl9O2RyYXdLbm9iKCl9fX0sYW5ndWxhci5tb2R1bGUoXCJ1aS5rbm9iXCIsW10pLmRpcmVjdGl2ZShcInVpS25vYlwiLHVpLmtub2JEaXJlY3RpdmUpfSgpOyIsIm1vZHVsZS5leHBvcnRzPVtcbiAge1xuICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTc5XCIsXG4gICAgXCJuYW1lXCI6IFwiQm9iIGFuZCBCYXJiYXJhJ3MgTG91bmdlXCIsXG4gICAgXCJjYXRhZ29yeWxldmVsMVwiOiBcIkRyaW5rXCIsXG4gICAgXCJhZHJlc3NcIjogXCIxNTA5IFNvdXRoIFN0IFBoaWxhZGVscGhpYSBQQSAxOTE0NiBVbml0ZWQgU3RhdGVzXCIsXG4gICAgXCJuZWlnaGJvcmhvb2RcIjogXCJTb3V0aCBTdHJlZXRcIixcbiAgICBcImxhdFwiOiBcIjM5Ljk0NDA1NTVcIixcbiAgICBcImxvbmdcIjogXCItNzUuMTY3NTQ5M1wiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjogMjkwMSxcbiAgICBcInRyYXZlbFRpbWVcIjoge1xuICAgICAgXCJ0ZXh0XCI6IFwiNDkgbWluc1wiLFxuICAgICAgXCJ2YWx1ZVwiOiAyOTY3XG4gICAgfSxcbiAgICBcImRpc3RhbmNlXCI6IHtcbiAgICAgIFwidGV4dFwiOiBcIjIuNCBtaVwiLFxuICAgICAgXCJ2YWx1ZVwiOiAzOTEzXG4gICAgfSxcbiAgICBcImdvb2dsZVBsYWNlSWRcIjogXCJDaElKaTk5NXZqekd4b2tSSWJ4Q2E0QnByV2dcIixcbiAgICBcImFkZHJlc3NfY29tcG9uZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibG9uZ19uYW1lXCI6IFwiMTUwOVwiLFxuICAgICAgICBcInNob3J0X25hbWVcIjogXCIxNTA5XCIsXG4gICAgICAgIFwidHlwZXNcIjogW1xuICAgICAgICAgIFwic3RyZWV0X251bWJlclwiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibG9uZ19uYW1lXCI6IFwiU291dGggU3RyZWV0XCIsXG4gICAgICAgIFwic2hvcnRfbmFtZVwiOiBcIlNvdXRoIFN0cmVldFwiLFxuICAgICAgICBcInR5cGVzXCI6IFtcbiAgICAgICAgICBcInJvdXRlXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJsb25nX25hbWVcIjogXCJDZW50ZXIgQ2l0eVwiLFxuICAgICAgICBcInNob3J0X25hbWVcIjogXCJDZW50ZXIgQ2l0eVwiLFxuICAgICAgICBcInR5cGVzXCI6IFtcbiAgICAgICAgICBcIm5laWdoYm9yaG9vZFwiLFxuICAgICAgICAgIFwicG9saXRpY2FsXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJsb25nX25hbWVcIjogXCJQaGlsYWRlbHBoaWFcIixcbiAgICAgICAgXCJzaG9ydF9uYW1lXCI6IFwiUGhpbGFkZWxwaGlhXCIsXG4gICAgICAgIFwidHlwZXNcIjogW1xuICAgICAgICAgIFwibG9jYWxpdHlcIixcbiAgICAgICAgICBcInBvbGl0aWNhbFwiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibG9uZ19uYW1lXCI6IFwiUGhpbGFkZWxwaGlhIENvdW50eVwiLFxuICAgICAgICBcInNob3J0X25hbWVcIjogXCJQaGlsYWRlbHBoaWEgQ291bnR5XCIsXG4gICAgICAgIFwidHlwZXNcIjogW1xuICAgICAgICAgIFwiYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8yXCIsXG4gICAgICAgICAgXCJwb2xpdGljYWxcIlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImxvbmdfbmFtZVwiOiBcIlBBXCIsXG4gICAgICAgIFwic2hvcnRfbmFtZVwiOiBcIlBBXCIsXG4gICAgICAgIFwidHlwZXNcIjogW1xuICAgICAgICAgIFwiYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8xXCIsXG4gICAgICAgICAgXCJwb2xpdGljYWxcIlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImxvbmdfbmFtZVwiOiBcIlwiLFxuICAgICAgICBcInNob3J0X25hbWVcIjogXCJVU1wiLFxuICAgICAgICBcInR5cGVzXCI6IFtcbiAgICAgICAgICBcImNvdW50cnlcIixcbiAgICAgICAgICBcInBvbGl0aWNhbFwiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibG9uZ19uYW1lXCI6IFwiMTkxNDZcIixcbiAgICAgICAgXCJzaG9ydF9uYW1lXCI6IFwiMTkxNDZcIixcbiAgICAgICAgXCJ0eXBlc1wiOiBbXG4gICAgICAgICAgXCJwb3N0YWxfY29kZVwiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibG9uZ19uYW1lXCI6IFwiMTY4MFwiLFxuICAgICAgICBcInNob3J0X25hbWVcIjogXCIxNjgwXCIsXG4gICAgICAgIFwidHlwZXNcIjogW1xuICAgICAgICAgIFwicG9zdGFsX2NvZGVfc3VmZml4XCJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJhZHJfYWRkcmVzc1wiOiBcIjxzcGFuIGNsYXNzPVxcXCJzdHJlZXQtYWRkcmVzc1xcXCI+MTUwOSBTb3V0aCBTdHJlZXQ8L3NwYW4+LCA8c3BhbiBjbGFzcz1cXFwibG9jYWxpdHlcXFwiPlBoaWxhZGVscGhpYTwvc3Bhbj4sIDxzcGFuIGNsYXNzPVxcXCJyZWdpb25cXFwiPlBBPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwicG9zdGFsLWNvZGVcXFwiPjE5MTQ2LTE2ODA8L3NwYW4+XCIsXG4gICAgXCJmb3JtYXR0ZWRfYWRkcmVzc1wiOiBcIjE1MDkgU291dGggU3RyZWV0LCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ2XCIsXG4gICAgXCJmb3JtYXR0ZWRfcGhvbmVfbnVtYmVyXCI6IFwiKDIxNSkgNTQ1LTQ1MTFcIixcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwibG9jYXRpb25cIjoge1xuICAgICAgICBcImxhdFwiOiAzOS45NDQwNDc1LFxuICAgICAgICBcImxuZ1wiOiAtNzUuMTY3NTQ3ODk5OTk5OTlcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiaWNvblwiOiBcImh0dHBzOi8vbWFwcy5nc3RhdGljLmNvbS9tYXBmaWxlcy9wbGFjZV9hcGkvaWNvbnMvYmFyLTcxLnBuZ1wiLFxuICAgIFwiaWRcIjogXCI5YzBiODQzMDZiNTdiYjE1NzE5NDNkOWNhOTkzYWVkMzg0NzQ1ODJiXCIsXG4gICAgXCJpbnRlcm5hdGlvbmFsX3Bob25lX251bWJlclwiOiBcIisxIDIxNS01NDUtNDUxMVwiLFxuICAgIFwib3BlbmluZ19ob3Vyc1wiOiB7XG4gICAgICBcIm9wZW5fbm93XCI6IGZhbHNlLFxuICAgICAgXCJwZXJpb2RzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY2xvc2VcIjoge1xuICAgICAgICAgICAgXCJkYXlcIjogMSxcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjAyMDBcIixcbiAgICAgICAgICAgIFwiaG91cnNcIjogMixcbiAgICAgICAgICAgIFwibWludXRlc1wiOiAwLFxuICAgICAgICAgICAgXCJuZXh0RGF0ZVwiOiAxNDczMDU1MjAwMDAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgXCJkYXlcIjogMCxcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjE1MDBcIixcbiAgICAgICAgICAgIFwiaG91cnNcIjogMTUsXG4gICAgICAgICAgICBcIm1pbnV0ZXNcIjogMCxcbiAgICAgICAgICAgIFwibmV4dERhdGVcIjogMTQ3MzAxNTYwMDAwMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiY2xvc2VcIjoge1xuICAgICAgICAgICAgXCJkYXlcIjogMixcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjAyMDBcIixcbiAgICAgICAgICAgIFwiaG91cnNcIjogMixcbiAgICAgICAgICAgIFwibWludXRlc1wiOiAwLFxuICAgICAgICAgICAgXCJuZXh0RGF0ZVwiOiAxNDczMTQxNjAwMDAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgXCJkYXlcIjogMSxcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjE1MDBcIixcbiAgICAgICAgICAgIFwiaG91cnNcIjogMTUsXG4gICAgICAgICAgICBcIm1pbnV0ZXNcIjogMCxcbiAgICAgICAgICAgIFwibmV4dERhdGVcIjogMTQ3MzEwMjAwMDAwMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiY2xvc2VcIjoge1xuICAgICAgICAgICAgXCJkYXlcIjogMyxcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjAyMDBcIixcbiAgICAgICAgICAgIFwiaG91cnNcIjogMixcbiAgICAgICAgICAgIFwibWludXRlc1wiOiAwLFxuICAgICAgICAgICAgXCJuZXh0RGF0ZVwiOiAxNDczMjI4MDAwMDAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgXCJkYXlcIjogMixcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjE1MDBcIixcbiAgICAgICAgICAgIFwiaG91cnNcIjogMTUsXG4gICAgICAgICAgICBcIm1pbnV0ZXNcIjogMCxcbiAgICAgICAgICAgIFwibmV4dERhdGVcIjogMTQ3MzE4ODQwMDAwMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiY2xvc2VcIjoge1xuICAgICAgICAgICAgXCJkYXlcIjogNCxcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjAyMDBcIixcbiAgICAgICAgICAgIFwiaG91cnNcIjogMixcbiAgICAgICAgICAgIFwibWludXRlc1wiOiAwLFxuICAgICAgICAgICAgXCJuZXh0RGF0ZVwiOiAxNDcyNzA5NjAwMDAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgXCJkYXlcIjogMyxcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjE1MDBcIixcbiAgICAgICAgICAgIFwiaG91cnNcIjogMTUsXG4gICAgICAgICAgICBcIm1pbnV0ZXNcIjogMCxcbiAgICAgICAgICAgIFwibmV4dERhdGVcIjogMTQ3MjY3MDAwMDAwMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiY2xvc2VcIjoge1xuICAgICAgICAgICAgXCJkYXlcIjogNSxcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjAyMDBcIixcbiAgICAgICAgICAgIFwiaG91cnNcIjogMixcbiAgICAgICAgICAgIFwibWludXRlc1wiOiAwLFxuICAgICAgICAgICAgXCJuZXh0RGF0ZVwiOiAxNDcyNzk2MDAwMDAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgXCJkYXlcIjogNCxcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjE1MDBcIixcbiAgICAgICAgICAgIFwiaG91cnNcIjogMTUsXG4gICAgICAgICAgICBcIm1pbnV0ZXNcIjogMCxcbiAgICAgICAgICAgIFwibmV4dERhdGVcIjogMTQ3Mjc1NjQwMDAwMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiY2xvc2VcIjoge1xuICAgICAgICAgICAgXCJkYXlcIjogNixcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjAyMDBcIixcbiAgICAgICAgICAgIFwiaG91cnNcIjogMixcbiAgICAgICAgICAgIFwibWludXRlc1wiOiAwLFxuICAgICAgICAgICAgXCJuZXh0RGF0ZVwiOiAxNDcyODgyNDAwMDAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgXCJkYXlcIjogNSxcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjE1MDBcIixcbiAgICAgICAgICAgIFwiaG91cnNcIjogMTUsXG4gICAgICAgICAgICBcIm1pbnV0ZXNcIjogMCxcbiAgICAgICAgICAgIFwibmV4dERhdGVcIjogMTQ3Mjg0MjgwMDAwMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiY2xvc2VcIjoge1xuICAgICAgICAgICAgXCJkYXlcIjogMCxcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjAyMDBcIixcbiAgICAgICAgICAgIFwiaG91cnNcIjogMixcbiAgICAgICAgICAgIFwibWludXRlc1wiOiAwLFxuICAgICAgICAgICAgXCJuZXh0RGF0ZVwiOiAxNDcyOTY4ODAwMDAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgXCJkYXlcIjogNixcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjE1MDBcIixcbiAgICAgICAgICAgIFwiaG91cnNcIjogMTUsXG4gICAgICAgICAgICBcIm1pbnV0ZXNcIjogMCxcbiAgICAgICAgICAgIFwibmV4dERhdGVcIjogMTQ3MjkyOTIwMDAwMFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwid2Vla2RheV90ZXh0XCI6IFtcbiAgICAgICAgXCJNb25kYXk6IDM6MDAgUE0g4oCTIDI6MDAgQU1cIixcbiAgICAgICAgXCJUdWVzZGF5OiAzOjAwIFBNIOKAkyAyOjAwIEFNXCIsXG4gICAgICAgIFwiV2VkbmVzZGF5OiAzOjAwIFBNIOKAkyAyOjAwIEFNXCIsXG4gICAgICAgIFwiVGh1cnNkYXk6IDM6MDAgUE0g4oCTIDI6MDAgQU1cIixcbiAgICAgICAgXCJGcmlkYXk6IDM6MDAgUE0g4oCTIDI6MDAgQU1cIixcbiAgICAgICAgXCJTYXR1cmRheTogMzowMCBQTSDigJMgMjowMCBBTVwiLFxuICAgICAgICBcIlN1bmRheTogMzowMCBQTSDigJMgMjowMCBBTVwiXG4gICAgICBdXG4gICAgfSxcbiAgICBcInBob3Rvc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaGVpZ2h0XCI6IDI0NDgsXG4gICAgICAgIFwiaHRtbF9hdHRyaWJ1dGlvbnNcIjogW1xuICAgICAgICAgIFwiPGEgaHJlZj1cXFwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcy9jb250cmliLzEwOTI4ODc2NDY1NDYxMDU1Mjg0MC9waG90b3NcXFwiPk1hY2tlbnppZSBDYW5hdmFycm88L2E+XCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJ3aWR0aFwiOiAzMjY0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhlaWdodFwiOiA1MzEyLFxuICAgICAgICBcImh0bWxfYXR0cmlidXRpb25zXCI6IFtcbiAgICAgICAgICBcIjxhIGhyZWY9XFxcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHMvY29udHJpYi8xMTc0NDgxMTQ1NzAxMDcyMDYwNzUvcGhvdG9zXFxcIj5MaXNhIE15ZXJzPC9hPlwiXG4gICAgICAgIF0sXG4gICAgICAgIFwid2lkdGhcIjogMjk4OFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJoZWlnaHRcIjogMzI2NCxcbiAgICAgICAgXCJodG1sX2F0dHJpYnV0aW9uc1wiOiBbXG4gICAgICAgICAgXCI8YSBocmVmPVxcXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzL2NvbnRyaWIvMTE1MzkwMDE5OTQ2MTA0NzEwNzA1L3Bob3Rvc1xcXCI+S0JDIGNyaW9sbG9zPC9hPlwiXG4gICAgICAgIF0sXG4gICAgICAgIFwid2lkdGhcIjogMTgzNlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJoZWlnaHRcIjogMjA0OCxcbiAgICAgICAgXCJodG1sX2F0dHJpYnV0aW9uc1wiOiBbXG4gICAgICAgICAgXCI8YSBocmVmPVxcXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzL2NvbnRyaWIvMTE4MjQxOTAwNDUxNzI3MTY1Mjc4L3Bob3Rvc1xcXCI+SmVmZiBXYXNoYnVybjwvYT5cIlxuICAgICAgICBdLFxuICAgICAgICBcIndpZHRoXCI6IDExNTJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaGVpZ2h0XCI6IDIwNDgsXG4gICAgICAgIFwiaHRtbF9hdHRyaWJ1dGlvbnNcIjogW1xuICAgICAgICAgIFwiPGEgaHJlZj1cXFwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcy9jb250cmliLzExODI0MTkwMDQ1MTcyNzE2NTI3OC9waG90b3NcXFwiPkplZmYgV2FzaGJ1cm48L2E+XCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJ3aWR0aFwiOiAxMTUyXG4gICAgICB9XG4gICAgXSxcbiAgICBcInBsYWNlX2lkXCI6IFwiQ2hJSmk5OTV2anpHeG9rUklieENhNEJwcldnXCIsXG4gICAgXCJwcmljZV9sZXZlbFwiOiAyLFxuICAgIFwicmF0aW5nXCI6IDQsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJDblJyQUFBQW1yYVFGRFZ4d2dyS3QyVGtfMVltTVlvck93bmhodFRCbEVaeXJ4bEJEYVpVdklDSVhZTFRxYjRYeHVPVHJXNDFEZGJDZmtJSUxmZWJ0YTFoM3RuUF9NQmdvNG0wc01aVkpnYklIUjJMeXhtSUFqVHdkYmVZeUhBN2t1VFBRd2FxVlVndFM2WWJrNkRHUTZ6NUFZV2daaElRdkRrdkpnN3VpWVBfcXpjSlpfcHlWUm9VSC1GLWJoU29OZ21GVzNyYWVHQ2Y1ZV9XcW9vXCIsXG4gICAgXCJyZXZpZXdzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJhc3BlY3RzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJhdGluZ1wiOiAzLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3ZlcmFsbFwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImF1dGhvcl9uYW1lXCI6IFwiQ2FsZWIgUmFkZW5zXCIsXG4gICAgICAgIFwiYXV0aG9yX3VybFwiOiBcImh0dHBzOi8vcGx1cy5nb29nbGUuY29tLzExNjIzMzc5OTM1MTAyODU0MTE2MlwiLFxuICAgICAgICBcImxhbmd1YWdlXCI6IFwiZW5cIixcbiAgICAgICAgXCJwcm9maWxlX3Bob3RvX3VybFwiOiBcIi8vbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tbVpuMWxZUUNjUDAvQUFBQUFBQUFBQUkvQUFBQUFBQUFFR0EvcTlnRlFTUDQ3dEkvcGhvdG8uanBnXCIsXG4gICAgICAgIFwicmF0aW5nXCI6IDUsXG4gICAgICAgIFwidGV4dFwiOiBcIk9uZSBvZiBteSBmYXZvcml0ZSBwbGFjZXMgdG8gcHJlLWdhbWUgYSBuaWdodC4gR2V0IGEgY291cGxlIG9mIENpdHktd2lkZSBzcGVjaWFscyBhbmQgeW91J2xsIGJlIGhhcHB5IGZvciB0aGUgcmVzdCBvZiB0aGUgbmlnaHQhXCIsXG4gICAgICAgIFwidGltZVwiOiAxNDY3MTIwMzc1XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImFzcGVjdHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmF0aW5nXCI6IDIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvdmVyYWxsXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiYXV0aG9yX25hbWVcIjogXCJNYXR0IFJ1YnlcIixcbiAgICAgICAgXCJhdXRob3JfdXJsXCI6IFwiaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vMTEzNjAxNjEwNjY1NTA3NzQ1NTUzXCIsXG4gICAgICAgIFwibGFuZ3VhZ2VcIjogXCJlblwiLFxuICAgICAgICBcInJhdGluZ1wiOiA0LFxuICAgICAgICBcInRleHRcIjogXCJHcmVhdCBkaXZlIGJhciB3aXRoIGNvbXBldGl0aXZlIGRyaW5rIHNwZWNpYWxzLiAgTG90cyBvZiBQQlIgbWVtb3JhYmlsaWEgYW5kIHJlZ3VsYXIgKG9mdGVuIGNhbXB5KSBsaXZlIGVudGVydGFpbm1lbnQuXCIsXG4gICAgICAgIFwidGltZVwiOiAxNDY3MjM0NDg5XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImFzcGVjdHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmF0aW5nXCI6IDIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvdmVyYWxsXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiYXV0aG9yX25hbWVcIjogXCJMaWx5IGRlIGxhIFRvcnJlXCIsXG4gICAgICAgIFwiYXV0aG9yX3VybFwiOiBcImh0dHBzOi8vcGx1cy5nb29nbGUuY29tLzEwNDMwMjI2NDU4Nzc4ODEzMjkzOFwiLFxuICAgICAgICBcImxhbmd1YWdlXCI6IFwiZW5cIixcbiAgICAgICAgXCJwcm9maWxlX3Bob3RvX3VybFwiOiBcIi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS8tZ3FTWEhEdjc5NVEvQUFBQUFBQUFBQUkvQUFBQUFBQUFBRkkvVXhxajhvSl80TXcvcGhvdG8uanBnXCIsXG4gICAgICAgIFwicmF0aW5nXCI6IDQsXG4gICAgICAgIFwidGV4dFwiOiBcIlRoaXMgaXMgYSBncmVhdCBsb2NhbCBkaXZlIGJhciBvbiBTb3V0aCBTdHJlZXQuIFRoZSBzZWxlY3Rpb24gaXMgcHJldHR5IGdvb2QsIGJ1dCBpdCdzIGNhc2ggb25seS4gIE5vIGZvb2QgaGVyZS4gXCIsXG4gICAgICAgIFwidGltZVwiOiAxNDYxNDQxNDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImFzcGVjdHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmF0aW5nXCI6IDMsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvdmVyYWxsXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiYXV0aG9yX25hbWVcIjogXCJTdGV2ZSBUZWxlbmtvXCIsXG4gICAgICAgIFwiYXV0aG9yX3VybFwiOiBcImh0dHBzOi8vcGx1cy5nb29nbGUuY29tLzExNTYyNDY4ODM0NzM5OTI5NjM1NFwiLFxuICAgICAgICBcImxhbmd1YWdlXCI6IFwiZW5cIixcbiAgICAgICAgXCJyYXRpbmdcIjogNSxcbiAgICAgICAgXCJ0ZXh0XCI6IFwiQmVzdCBwbGFzZSBpbiB0b3duIHRvIGRyaW5rIGNoZWFwIGJ1Y2ggaXMgdGhlIGJlc3QuXCIsXG4gICAgICAgIFwidGltZVwiOiAxNDYwODUzOTU1XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImFzcGVjdHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmF0aW5nXCI6IDMsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvdmVyYWxsXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiYXV0aG9yX25hbWVcIjogXCJKYXJlZCBKYWNvYnNcIixcbiAgICAgICAgXCJhdXRob3JfdXJsXCI6IFwiaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vMTAyNzY3NjQ1NDQ5OTk2MzY4MjgwXCIsXG4gICAgICAgIFwibGFuZ3VhZ2VcIjogXCJlblwiLFxuICAgICAgICBcInByb2ZpbGVfcGhvdG9fdXJsXCI6IFwiLy9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1tbUdxMmZ5Qnhqdy9BQUFBQUFBQUFBSS9BQUFBQUFBQUFLcy9DS3B3MlVZZHoyMC9waG90by5qcGdcIixcbiAgICAgICAgXCJyYXRpbmdcIjogNSxcbiAgICAgICAgXCJ0ZXh0XCI6IFwiV2hhdCBhIGdyZWF0IGRpdmUuIENhc2ggb25seSB0by4gTGl2ZSBtdXNpYyBpcyBvdXRzdGFuZGluZywgYmFyIGhhcyBhIGNsYXNzaWMgZmVlbC4gSG9tZSB0byB0aGUgZmlyc3QgY2l0eSB3aWRlIHNwZWNpYWwgYmVlciBhbmQgYSBib3VyYm9uIGZvciA1IGJ1Y2tzLiBObyBjb3ZlciwgY2hlYXAgZHJpbmtzLiBDYW4ndCBnbyB3cm9uZy5cIixcbiAgICAgICAgXCJ0aW1lXCI6IDE0NTYyNDg4NDFcbiAgICAgIH1cbiAgICBdLFxuICAgIFwic2NvcGVcIjogXCJHT09HTEVcIixcbiAgICBcInR5cGVzXCI6IFtcbiAgICAgIFwiYmFyXCIsXG4gICAgICBcInBvaW50X29mX2ludGVyZXN0XCIsXG4gICAgICBcImVzdGFibGlzaG1lbnRcIlxuICAgIF0sXG4gICAgXCJ1cmxcIjogXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS8/Y2lkPTc1NDI4MDA5NTExOTE3MTQ4NDlcIixcbiAgICBcInV0Y19vZmZzZXRcIjogLTI0MCxcbiAgICBcInZpY2luaXR5XCI6IFwiMTUwOSBTb3V0aCBTdHJlZXQsIFBoaWxhZGVscGhpYVwiLFxuICAgIFwid2Vic2l0ZVwiOiBcImh0dHA6Ly93d3cuYm9iYW5kYmFyYmFyYXMuY29tL1wiLFxuICAgIFwiaHRtbF9hdHRyaWJ1dGlvbnNcIjogW11cbiAgfSxcbiAge1xuICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTdhXCIsXG4gICAgXCJuYW1lXCI6IFwiR2FyYWdlXCIsXG4gICAgXCJjYXRhZ29yeWxldmVsMVwiOiBcIkRyaW5rXCIsXG4gICAgXCJhZHJlc3NcIjogXCJFIFBhc3N5dW5rIEF2ZSBQaGlsYWRlbHBoaWEgUEEgMTkxNDcgVW5pdGVkIFN0YXRlc1wiLFxuICAgIFwibmVpZ2hib3Job29kXCI6IFwiUGFzc3l1bmsgU3F1YXJlXCIsXG4gICAgXCJsYXRcIjogXCIzOS45MzU0MzhcIixcbiAgICBcImxvbmdcIjogXCItNzUuMTU2NjcwNVwiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjogMzI2MCxcbiAgICBcInRyYXZlbFRpbWVcIjoge1xuICAgICAgXCJ0ZXh0XCI6IFwiNDQgbWluc1wiLFxuICAgICAgXCJ2YWx1ZVwiOiAyNjEyXG4gICAgfSxcbiAgICBcImRpc3RhbmNlXCI6IHtcbiAgICAgIFwidGV4dFwiOiBcIjIuMiBtaVwiLFxuICAgICAgXCJ2YWx1ZVwiOiAzNDc5XG4gICAgfSxcbiAgICBcImdvb2dsZVBsYWNlSWRcIjogXCJDaElKa1hUam54N0d4b2tSZ1FBN21JdjJMMmdcIixcbiAgICBcImFkZHJlc3NfY29tcG9uZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibG9uZ19uYW1lXCI6IFwiMTIzMS0xMjMzXCIsXG4gICAgICAgIFwic2hvcnRfbmFtZVwiOiBcIjEyMzEtMTIzM1wiLFxuICAgICAgICBcInR5cGVzXCI6IFtcbiAgICAgICAgICBcInN0cmVldF9udW1iZXJcIlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImxvbmdfbmFtZVwiOiBcIkVhc3QgUGFzc3l1bmsgQXZlbnVlXCIsXG4gICAgICAgIFwic2hvcnRfbmFtZVwiOiBcIkUgUGFzc3l1bmsgQXZlXCIsXG4gICAgICAgIFwidHlwZXNcIjogW1xuICAgICAgICAgIFwicm91dGVcIlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImxvbmdfbmFtZVwiOiBcIlBhc3N5dW5rIFNxdWFyZVwiLFxuICAgICAgICBcInNob3J0X25hbWVcIjogXCJQYXNzeXVuayBTcXVhcmVcIixcbiAgICAgICAgXCJ0eXBlc1wiOiBbXG4gICAgICAgICAgXCJuZWlnaGJvcmhvb2RcIixcbiAgICAgICAgICBcInBvbGl0aWNhbFwiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibG9uZ19uYW1lXCI6IFwiUGhpbGFkZWxwaGlhXCIsXG4gICAgICAgIFwic2hvcnRfbmFtZVwiOiBcIlBoaWxhZGVscGhpYVwiLFxuICAgICAgICBcInR5cGVzXCI6IFtcbiAgICAgICAgICBcImxvY2FsaXR5XCIsXG4gICAgICAgICAgXCJwb2xpdGljYWxcIlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImxvbmdfbmFtZVwiOiBcIlBoaWxhZGVscGhpYSBDb3VudHlcIixcbiAgICAgICAgXCJzaG9ydF9uYW1lXCI6IFwiUGhpbGFkZWxwaGlhIENvdW50eVwiLFxuICAgICAgICBcInR5cGVzXCI6IFtcbiAgICAgICAgICBcImFkbWluaXN0cmF0aXZlX2FyZWFfbGV2ZWxfMlwiLFxuICAgICAgICAgIFwicG9saXRpY2FsXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJsb25nX25hbWVcIjogXCJQZW5uc3lsdmFuaWFcIixcbiAgICAgICAgXCJzaG9ydF9uYW1lXCI6IFwiUEFcIixcbiAgICAgICAgXCJ0eXBlc1wiOiBbXG4gICAgICAgICAgXCJhZG1pbmlzdHJhdGl2ZV9hcmVhX2xldmVsXzFcIixcbiAgICAgICAgICBcInBvbGl0aWNhbFwiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibG9uZ19uYW1lXCI6IFwiVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICBcInNob3J0X25hbWVcIjogXCJVU1wiLFxuICAgICAgICBcInR5cGVzXCI6IFtcbiAgICAgICAgICBcImNvdW50cnlcIixcbiAgICAgICAgICBcInBvbGl0aWNhbFwiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibG9uZ19uYW1lXCI6IFwiMTkxNDdcIixcbiAgICAgICAgXCJzaG9ydF9uYW1lXCI6IFwiMTkxNDdcIixcbiAgICAgICAgXCJ0eXBlc1wiOiBbXG4gICAgICAgICAgXCJwb3N0YWxfY29kZVwiXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuICAgIFwiYWRyX2FkZHJlc3NcIjogXCI8c3BhbiBjbGFzcz1cXFwic3RyZWV0LWFkZHJlc3NcXFwiPjEyMzEtMTIzMyBFIFBhc3N5dW5rIEF2ZTwvc3Bhbj4sIDxzcGFuIGNsYXNzPVxcXCJsb2NhbGl0eVxcXCI+UGhpbGFkZWxwaGlhPC9zcGFuPiwgPHNwYW4gY2xhc3M9XFxcInJlZ2lvblxcXCI+UEE8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJwb3N0YWwtY29kZVxcXCI+MTkxNDc8L3NwYW4+LCA8c3BhbiBjbGFzcz1cXFwiY291bnRyeS1uYW1lXFxcIj5VU0E8L3NwYW4+XCIsXG4gICAgXCJmb3JtYXR0ZWRfYWRkcmVzc1wiOiBcIjEyMzEtMTIzMyBFIFBhc3N5dW5rIEF2ZSwgUGhpbGFkZWxwaGlhLCBQQSAxOTE0NywgVVNBXCIsXG4gICAgXCJmb3JtYXR0ZWRfcGhvbmVfbnVtYmVyXCI6IFwiKDIxNSkgMjc4LTI0MjlcIixcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwibG9jYXRpb25cIjoge1xuICAgICAgICBcImxhdFwiOiAzOS45MzM0Nzc3LFxuICAgICAgICBcImxuZ1wiOiAtNzUuMTU4NzM2Njk5OTk5OTZcbiAgICAgIH0sXG4gICAgICBcInZpZXdwb3J0XCI6IHtcbiAgICAgICAgXCJzb3V0aFwiOiAzOS45MzM0MjI3NSxcbiAgICAgICAgXCJ3ZXN0XCI6IC03NS4xNTkwMjc3MDAwMDAwMixcbiAgICAgICAgXCJub3J0aFwiOiAzOS45MzM2NDI1NDk5OTk5OSxcbiAgICAgICAgXCJlYXN0XCI6IC03NS4xNTg2Mzk2OTk5OTk5OFxuICAgICAgfVxuICAgIH0sXG4gICAgXCJpY29uXCI6IFwiaHR0cHM6Ly9tYXBzLmdzdGF0aWMuY29tL21hcGZpbGVzL3BsYWNlX2FwaS9pY29ucy9iYXItNzEucG5nXCIsXG4gICAgXCJpZFwiOiBcIjRlMmU1NGUyMmJkMjUzMzk1NjU4MWM3MjBhYjMyOTFhNzk5OGM5YmRcIixcbiAgICBcImludGVybmF0aW9uYWxfcGhvbmVfbnVtYmVyXCI6IFwiKzEgMjE1LTI3OC0yNDI5XCIsXG4gICAgXCJvcGVuaW5nX2hvdXJzXCI6IHtcbiAgICAgIFwib3Blbl9ub3dcIjogZmFsc2UsXG4gICAgICBcInBlcmlvZHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjbG9zZVwiOiB7XG4gICAgICAgICAgICBcImRheVwiOiAxLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMDIwMFwiLFxuICAgICAgICAgICAgXCJob3Vyc1wiOiAyLFxuICAgICAgICAgICAgXCJtaW51dGVzXCI6IDAsXG4gICAgICAgICAgICBcIm5leHREYXRlXCI6IDE0NzMwNTUyMDAwMDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcImRheVwiOiAwLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMTIwMFwiLFxuICAgICAgICAgICAgXCJob3Vyc1wiOiAxMixcbiAgICAgICAgICAgIFwibWludXRlc1wiOiAwLFxuICAgICAgICAgICAgXCJuZXh0RGF0ZVwiOiAxNDczMDA0ODAwMDAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJjbG9zZVwiOiB7XG4gICAgICAgICAgICBcImRheVwiOiAyLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMDIwMFwiLFxuICAgICAgICAgICAgXCJob3Vyc1wiOiAyLFxuICAgICAgICAgICAgXCJtaW51dGVzXCI6IDAsXG4gICAgICAgICAgICBcIm5leHREYXRlXCI6IDE0NzMxNDE2MDAwMDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcImRheVwiOiAxLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMTcwMFwiLFxuICAgICAgICAgICAgXCJob3Vyc1wiOiAxNyxcbiAgICAgICAgICAgIFwibWludXRlc1wiOiAwLFxuICAgICAgICAgICAgXCJuZXh0RGF0ZVwiOiAxNDczMTA5MjAwMDAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJjbG9zZVwiOiB7XG4gICAgICAgICAgICBcImRheVwiOiAzLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMDIwMFwiLFxuICAgICAgICAgICAgXCJob3Vyc1wiOiAyLFxuICAgICAgICAgICAgXCJtaW51dGVzXCI6IDAsXG4gICAgICAgICAgICBcIm5leHREYXRlXCI6IDE0NzMyMjgwMDAwMDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcImRheVwiOiAyLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMTcwMFwiLFxuICAgICAgICAgICAgXCJob3Vyc1wiOiAxNyxcbiAgICAgICAgICAgIFwibWludXRlc1wiOiAwLFxuICAgICAgICAgICAgXCJuZXh0RGF0ZVwiOiAxNDczMTk1NjAwMDAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJjbG9zZVwiOiB7XG4gICAgICAgICAgICBcImRheVwiOiA0LFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMDIwMFwiLFxuICAgICAgICAgICAgXCJob3Vyc1wiOiAyLFxuICAgICAgICAgICAgXCJtaW51dGVzXCI6IDAsXG4gICAgICAgICAgICBcIm5leHREYXRlXCI6IDE0NzI3MDk2MDAwMDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcImRheVwiOiAzLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMTcwMFwiLFxuICAgICAgICAgICAgXCJob3Vyc1wiOiAxNyxcbiAgICAgICAgICAgIFwibWludXRlc1wiOiAwLFxuICAgICAgICAgICAgXCJuZXh0RGF0ZVwiOiAxNDcyNjc3MjAwMDAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJjbG9zZVwiOiB7XG4gICAgICAgICAgICBcImRheVwiOiA1LFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMDIwMFwiLFxuICAgICAgICAgICAgXCJob3Vyc1wiOiAyLFxuICAgICAgICAgICAgXCJtaW51dGVzXCI6IDAsXG4gICAgICAgICAgICBcIm5leHREYXRlXCI6IDE0NzI3OTYwMDAwMDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcImRheVwiOiA0LFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMTcwMFwiLFxuICAgICAgICAgICAgXCJob3Vyc1wiOiAxNyxcbiAgICAgICAgICAgIFwibWludXRlc1wiOiAwLFxuICAgICAgICAgICAgXCJuZXh0RGF0ZVwiOiAxNDcyNzYzNjAwMDAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJjbG9zZVwiOiB7XG4gICAgICAgICAgICBcImRheVwiOiA2LFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMDIwMFwiLFxuICAgICAgICAgICAgXCJob3Vyc1wiOiAyLFxuICAgICAgICAgICAgXCJtaW51dGVzXCI6IDAsXG4gICAgICAgICAgICBcIm5leHREYXRlXCI6IDE0NzI4ODI0MDAwMDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcImRheVwiOiA1LFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMTcwMFwiLFxuICAgICAgICAgICAgXCJob3Vyc1wiOiAxNyxcbiAgICAgICAgICAgIFwibWludXRlc1wiOiAwLFxuICAgICAgICAgICAgXCJuZXh0RGF0ZVwiOiAxNDcyODUwMDAwMDAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJjbG9zZVwiOiB7XG4gICAgICAgICAgICBcImRheVwiOiAwLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMDIwMFwiLFxuICAgICAgICAgICAgXCJob3Vyc1wiOiAyLFxuICAgICAgICAgICAgXCJtaW51dGVzXCI6IDAsXG4gICAgICAgICAgICBcIm5leHREYXRlXCI6IDE0NzI5Njg4MDAwMDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcImRheVwiOiA2LFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMTIwMFwiLFxuICAgICAgICAgICAgXCJob3Vyc1wiOiAxMixcbiAgICAgICAgICAgIFwibWludXRlc1wiOiAwLFxuICAgICAgICAgICAgXCJuZXh0RGF0ZVwiOiAxNDcyOTE4NDAwMDAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJ3ZWVrZGF5X3RleHRcIjogW1xuICAgICAgICBcIk1vbmRheTogNTowMCBQTSDigJMgMjowMCBBTVwiLFxuICAgICAgICBcIlR1ZXNkYXk6IDU6MDAgUE0g4oCTIDI6MDAgQU1cIixcbiAgICAgICAgXCJXZWRuZXNkYXk6IDU6MDAgUE0g4oCTIDI6MDAgQU1cIixcbiAgICAgICAgXCJUaHVyc2RheTogNTowMCBQTSDigJMgMjowMCBBTVwiLFxuICAgICAgICBcIkZyaWRheTogNTowMCBQTSDigJMgMjowMCBBTVwiLFxuICAgICAgICBcIlNhdHVyZGF5OiAxMjowMCBQTSDigJMgMjowMCBBTVwiLFxuICAgICAgICBcIlN1bmRheTogMTI6MDAgUE0g4oCTIDI6MDAgQU1cIlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwaG90b3NcIjogW1xuICAgICAge1xuICAgICAgICBcImhlaWdodFwiOiAyMzIyLFxuICAgICAgICBcImh0bWxfYXR0cmlidXRpb25zXCI6IFtcbiAgICAgICAgICBcIjxhIGhyZWY9XFxcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHMvY29udHJpYi8xMTgwMTI3NDg0NjcyNzk4MjQ5ODYvcGhvdG9zXFxcIj5NQVJJQSBBTkdFTEVTIEdBUkNJQSBJQkHDkUVaPC9hPlwiXG4gICAgICAgIF0sXG4gICAgICAgIFwid2lkdGhcIjogNDEyOFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJoZWlnaHRcIjogMjM0MCxcbiAgICAgICAgXCJodG1sX2F0dHJpYnV0aW9uc1wiOiBbXG4gICAgICAgICAgXCI8YSBocmVmPVxcXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzL2NvbnRyaWIvMTAyMDA4OTg3MDIyMzI5NTc1OTM3L3Bob3Rvc1xcXCI+VGogU2VuaW5nZW48L2E+XCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJ3aWR0aFwiOiA0MTYwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhlaWdodFwiOiAyMTAyLFxuICAgICAgICBcImh0bWxfYXR0cmlidXRpb25zXCI6IFtcbiAgICAgICAgICBcIjxhIGhyZWY9XFxcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHMvY29udHJpYi8xMTgxNTE3OTk0OTY3NjEzMDg3OTAvcGhvdG9zXFxcIj5FcmljIFdpbGxpYW1zPC9hPlwiXG4gICAgICAgIF0sXG4gICAgICAgIFwid2lkdGhcIjogMjQ0OFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJoZWlnaHRcIjogMjYwNCxcbiAgICAgICAgXCJodG1sX2F0dHJpYnV0aW9uc1wiOiBbXG4gICAgICAgICAgXCI8YSBocmVmPVxcXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzL2NvbnRyaWIvMTA0MjA0NjU1OTQxMTQ5ODM3OTUxL3Bob3Rvc1xcXCI+U2V0aCBSaXZhcmQ8L2E+XCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJ3aWR0aFwiOiAxOTM0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhlaWdodFwiOiA1MzEyLFxuICAgICAgICBcImh0bWxfYXR0cmlidXRpb25zXCI6IFtcbiAgICAgICAgICBcIjxhIGhyZWY9XFxcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHMvY29udHJpYi8xMDcyNzQ3ODU0MTQ4OTc1MTA0MjgvcGhvdG9zXFxcIj5qYXNvbiBrZWxzbzwvYT5cIlxuICAgICAgICBdLFxuICAgICAgICBcIndpZHRoXCI6IDI5ODhcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaGVpZ2h0XCI6IDMyNjQsXG4gICAgICAgIFwiaHRtbF9hdHRyaWJ1dGlvbnNcIjogW1xuICAgICAgICAgIFwiPGEgaHJlZj1cXFwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcy9jb250cmliLzEwNTE1NDQ5MjY4NTQ1MzUwMzM5MS9waG90b3NcXFwiPk1pY2hhZWwgRmFpYTwvYT5cIlxuICAgICAgICBdLFxuICAgICAgICBcIndpZHRoXCI6IDI0NDhcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaGVpZ2h0XCI6IDMyNjQsXG4gICAgICAgIFwiaHRtbF9hdHRyaWJ1dGlvbnNcIjogW1xuICAgICAgICAgIFwiPGEgaHJlZj1cXFwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcy9jb250cmliLzEwMzc2NTAwODQ1MjM2MjU3MDMyOS9waG90b3NcXFwiPk1hdHQgQnlybmVzPC9hPlwiXG4gICAgICAgIF0sXG4gICAgICAgIFwid2lkdGhcIjogMTgzNlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJoZWlnaHRcIjogMzI2NCxcbiAgICAgICAgXCJodG1sX2F0dHJpYnV0aW9uc1wiOiBbXG4gICAgICAgICAgXCI8YSBocmVmPVxcXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzL2NvbnRyaWIvMTA5MjQ5NDY3NDIwMjExNTM2NzAwL3Bob3Rvc1xcXCI+SnVzdGluIExpbGVzPC9hPlwiXG4gICAgICAgIF0sXG4gICAgICAgIFwid2lkdGhcIjogMjQ0OFxuICAgICAgfVxuICAgIF0sXG4gICAgXCJwbGFjZV9pZFwiOiBcIkNoSUprWFRqbng3R3hva1JnUUE3bUl2MkwyZ1wiLFxuICAgIFwicHJpY2VfbGV2ZWxcIjogMSxcbiAgICBcInJhdGluZ1wiOiA0LjMsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJDbVJaQUFBQU5kVlJucEtRWU9BODgzMlVWTm9QV0hhMDBzelVMbDdsX0FJRGxQZmVVLU5pcnctUGNzU2x0MzNoOE5FdWk5YWVBaXBtWjU3VmkzSjVZX0paRl9yZkFVaWdON05QTEkybXItZHpRdjRJSVdXNXdiYmdtMzdGelFRcnF1d28xd0ZFRWhCSDR6NzVZVHFVb2w4UUlxay1GY0lWR2hTdHJxcWVqSW4wSXlwVm5pSXNCRkdJUThWbzlRXCIsXG4gICAgXCJyZXZpZXdzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJhc3BlY3RzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJhdGluZ1wiOiAyLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3ZlcmFsbFwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImF1dGhvcl9uYW1lXCI6IFwiSm9zaWFoIE5lZGRcIixcbiAgICAgICAgXCJhdXRob3JfdXJsXCI6IFwiaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vMTEzMzU5NTg2MjgxMjY1MDgwODA4XCIsXG4gICAgICAgIFwibGFuZ3VhZ2VcIjogXCJlblwiLFxuICAgICAgICBcInByb2ZpbGVfcGhvdG9fdXJsXCI6IFwiLy9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1lMFlqVlVkV3dCby9BQUFBQUFBQUFBSS9BQUFBQUFBQUFGay9sYlZkYlgyOVZUOC9waG90by5qcGdcIixcbiAgICAgICAgXCJyYXRpbmdcIjogNCxcbiAgICAgICAgXCJ0ZXh0XCI6IFwiTmljZSBiYXIgd2l0aCBhIGZvb2QgdHJ1Y2sgaW4gaXQhIEJpbGxpYXJkcyB0YWJsZSwgU2tlZWJhbGwsIGFuZCBkZWNlbnQgYmFydGVuZGVycy4gU3R1bWJsZSB0byBQYXQncyBmb3IgYSBzdGVhayBiZWZvcmUvYWZ0ZXIuXCIsXG4gICAgICAgIFwidGltZVwiOiAxNDcwNjc0MzQ2XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImFzcGVjdHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmF0aW5nXCI6IDIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvdmVyYWxsXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiYXV0aG9yX25hbWVcIjogXCJGcmFuayBHaW9mZnJlXCIsXG4gICAgICAgIFwiYXV0aG9yX3VybFwiOiBcImh0dHBzOi8vcGx1cy5nb29nbGUuY29tLzExMzYzMjA5MDQ3Mzg5NDYzMTkzMFwiLFxuICAgICAgICBcImxhbmd1YWdlXCI6IFwiZW5cIixcbiAgICAgICAgXCJyYXRpbmdcIjogNCxcbiAgICAgICAgXCJ0ZXh0XCI6IFwiTmljZSBzbWFsbCBiYXIgd2l0aCBwbGVudHkgb2YgdGVsZXZpc2lvbnMgdG8gd2F0Y2ggZG9pbmcgZXZlbnRzLiBJbmRvb3IgYW5kIG91dGRvb3Igc2VhdGluZy5cXG5QcmljZXMgYXJlIHJlYXNvbmFibGUgYW5kIHRoZSBmb29kIGlzIHRhc3R5LlwiLFxuICAgICAgICBcInRpbWVcIjogMTQ2NjczMzQ0NFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJhc3BlY3RzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJhdGluZ1wiOiAyLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3ZlcmFsbFwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImF1dGhvcl9uYW1lXCI6IFwiUGF1bCBHd2lseW1cIixcbiAgICAgICAgXCJhdXRob3JfdXJsXCI6IFwiaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vMTAzODc3OTA1NDk5MDE3MTAzNDI4XCIsXG4gICAgICAgIFwibGFuZ3VhZ2VcIjogXCJlblwiLFxuICAgICAgICBcInJhdGluZ1wiOiA0LFxuICAgICAgICBcInRleHRcIjogXCJBd2Vzb21lIGJlZXIgY29sbGVjdGlvbi4uLi5hYnNvbHV0ZWx5IGF3ZXNvbWUuICBNZW51IGluIGEgZm9sZGVyIGZvciB0aGUgb2xkIGxhbmQgY3J1aXNlciB3aXRoIGMzMCBwYWdlcyBvZiBiZWVyLi4uLiBPbmx5IGJlZXIsIGJ5IGJyZXdlciggYXQgbGVhc3QgNDApIGFuZCBzdHlsZS4uLi4uLi4gIEhlYXZlbi4uLi4gRXNwZWNpYWxseSB0byB3YXNoIGRvd24gYSBQYXRzIFBoaWxseSBDaGVlc2UgU3RlYWsgc2FuZHdpY2guICBBIGJpdCBvZmYgdGhlIGJlYXRlbiB0cmFjayBidXQgd29ydGggdGhlIGV4cGVyaWVuY2UuIPCfmITwn5GN8J+RjfCfmLNcIixcbiAgICAgICAgXCJ0aW1lXCI6IDE0NjQ5OTA0MThcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiYXNwZWN0c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyYXRpbmdcIjogMyxcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm92ZXJhbGxcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJhdXRob3JfbmFtZVwiOiBcInJvY2t5IHJvbWVyb1wiLFxuICAgICAgICBcImF1dGhvcl91cmxcIjogXCJodHRwczovL3BsdXMuZ29vZ2xlLmNvbS8xMTQ3OTA4MzQ5OTMwMDQ1Njc2MDlcIixcbiAgICAgICAgXCJsYW5ndWFnZVwiOiBcImVuXCIsXG4gICAgICAgIFwicmF0aW5nXCI6IDUsXG4gICAgICAgIFwidGV4dFwiOiBcIkxvdmUgdGhlIGNhbm5lZCBiZWVyIHNlbGVjdGlvbi4gU28gbWFueSB0byBjaG9vc2UgZnJvbS4gQ2hpbGwgbGF5ZWQgYmFjayBwbGFjZSBhbmQgaXQncyBsb2NhdGVkIGJldHdlZW4gcGF0J3MgYW5kIGdlbm9zIGNoZWVzZSBzdGVha3MuIFwiLFxuICAgICAgICBcInRpbWVcIjogMTQ2MTE5MTQ3OVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJhc3BlY3RzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJhdGluZ1wiOiAzLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3ZlcmFsbFwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImF1dGhvcl9uYW1lXCI6IFwiRnJhbmsgSWFjb3Zpbm9cIixcbiAgICAgICAgXCJhdXRob3JfdXJsXCI6IFwiaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vMTA0MjQ2MDk0NTcxMDEwMjY4NTg1XCIsXG4gICAgICAgIFwibGFuZ3VhZ2VcIjogXCJlblwiLFxuICAgICAgICBcInByb2ZpbGVfcGhvdG9fdXJsXCI6IFwiLy9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1JYXVqczdfTTFxdy9BQUFBQUFBQUFBSS9BQUFBQUFBQUdkNC84dWtMODQzZFA4VS9waG90by5qcGdcIixcbiAgICAgICAgXCJyYXRpbmdcIjogNSxcbiAgICAgICAgXCJ0ZXh0XCI6IFwiR3JlYXQgYmVlciBzZWxlY3Rpb24gcGFpcmVkIHdpdGggc3VwZXIga25vd2xlZGdlYWJsZSBiYXJ0ZW5kZXJzLiBXaGF0J3Mgbm90IHRvIGxvdmU/IFwiLFxuICAgICAgICBcInRpbWVcIjogMTQ1OTczNTY1MlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJzY29wZVwiOiBcIkdPT0dMRVwiLFxuICAgIFwidHlwZXNcIjogW1xuICAgICAgXCJiYXJcIixcbiAgICAgIFwicG9pbnRfb2ZfaW50ZXJlc3RcIixcbiAgICAgIFwiZXN0YWJsaXNobWVudFwiXG4gICAgXSxcbiAgICBcInVybFwiOiBcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tLz9jaWQ9NzUwNzQ5MDE4MzI2NDc5NjgwMVwiLFxuICAgIFwidXRjX29mZnNldFwiOiAtMjQwLFxuICAgIFwidmljaW5pdHlcIjogXCIxMjMxLTEyMzMgRWFzdCBQYXNzeXVuayBBdmVudWUsIFBoaWxhZGVscGhpYVwiLFxuICAgIFwid2Vic2l0ZVwiOiBcImh0dHA6Ly9nYXJhZ2VwaGlsbHkuY29tL1wiLFxuICAgIFwiaHRtbF9hdHRyaWJ1dGlvbnNcIjogW11cbiAgfSxcbiAge1xuICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTdkXCIsXG4gICAgXCJuYW1lXCI6IFwiSG9wIFNpbmcgTGF1bmRyb21hdFwiLFxuICAgIFwiY2F0YWdvcnlsZXZlbDFcIjogXCJEcmlua1wiLFxuICAgIFwiYWRyZXNzXCI6IFwiMTAyOSBSYWNlIFN0LCBQaGlsYWRlbHBoaWEsIFBBIDE5MTA3XCIsXG4gICAgXCJuZWlnaGJvcmhvb2RcIjogXCJPbGRlIENpdHlcIixcbiAgICBcImxhdFwiOiBcIjM5Ljk1NTUxNjJcIixcbiAgICBcImxvbmdcIjogXCItNzUuMTU2OTU1NFwiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjogMTM2NixcbiAgICBcInRyYXZlbFRpbWVcIjoge1xuICAgICAgXCJ0ZXh0XCI6IFwiMjMgbWluc1wiLFxuICAgICAgXCJ2YWx1ZVwiOiAxNDA1XG4gICAgfSxcbiAgICBcImRpc3RhbmNlXCI6IHtcbiAgICAgIFwidGV4dFwiOiBcIjEuMSBtaVwiLFxuICAgICAgXCJ2YWx1ZVwiOiAxODM1XG4gICAgfSxcbiAgICBcImdvb2dsZVBsYWNlSWRcIjogXCJDaElKaWZ2M1dTckd4b2tSNXpnUGVjdGt5bUlcIixcbiAgICBcImFkZHJlc3NfY29tcG9uZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibG9uZ19uYW1lXCI6IFwiMTAyOVwiLFxuICAgICAgICBcInNob3J0X25hbWVcIjogXCIxMDI5XCIsXG4gICAgICAgIFwidHlwZXNcIjogW1xuICAgICAgICAgIFwic3RyZWV0X251bWJlclwiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibG9uZ19uYW1lXCI6IFwiUmFjZSBTdHJlZXRcIixcbiAgICAgICAgXCJzaG9ydF9uYW1lXCI6IFwiUmFjZSBTdFwiLFxuICAgICAgICBcInR5cGVzXCI6IFtcbiAgICAgICAgICBcInJvdXRlXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJsb25nX25hbWVcIjogXCJDZW50ZXIgQ2l0eVwiLFxuICAgICAgICBcInNob3J0X25hbWVcIjogXCJDZW50ZXIgQ2l0eVwiLFxuICAgICAgICBcInR5cGVzXCI6IFtcbiAgICAgICAgICBcIm5laWdoYm9yaG9vZFwiLFxuICAgICAgICAgIFwicG9saXRpY2FsXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJsb25nX25hbWVcIjogXCJQaGlsYWRlbHBoaWFcIixcbiAgICAgICAgXCJzaG9ydF9uYW1lXCI6IFwiUGhpbGFkZWxwaGlhXCIsXG4gICAgICAgIFwidHlwZXNcIjogW1xuICAgICAgICAgIFwibG9jYWxpdHlcIixcbiAgICAgICAgICBcInBvbGl0aWNhbFwiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibG9uZ19uYW1lXCI6IFwiUGhpbGFkZWxwaGlhIENvdW50eVwiLFxuICAgICAgICBcInNob3J0X25hbWVcIjogXCJQaGlsYWRlbHBoaWEgQ291bnR5XCIsXG4gICAgICAgIFwidHlwZXNcIjogW1xuICAgICAgICAgIFwiYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8yXCIsXG4gICAgICAgICAgXCJwb2xpdGljYWxcIlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImxvbmdfbmFtZVwiOiBcIlBlbm5zeWx2YW5pYVwiLFxuICAgICAgICBcInNob3J0X25hbWVcIjogXCJQQVwiLFxuICAgICAgICBcInR5cGVzXCI6IFtcbiAgICAgICAgICBcImFkbWluaXN0cmF0aXZlX2FyZWFfbGV2ZWxfMVwiLFxuICAgICAgICAgIFwicG9saXRpY2FsXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJsb25nX25hbWVcIjogXCJVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgIFwic2hvcnRfbmFtZVwiOiBcIlVTXCIsXG4gICAgICAgIFwidHlwZXNcIjogW1xuICAgICAgICAgIFwiY291bnRyeVwiLFxuICAgICAgICAgIFwicG9saXRpY2FsXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJsb25nX25hbWVcIjogXCIxOTEwN1wiLFxuICAgICAgICBcInNob3J0X25hbWVcIjogXCIxOTEwN1wiLFxuICAgICAgICBcInR5cGVzXCI6IFtcbiAgICAgICAgICBcInBvc3RhbF9jb2RlXCJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJhZHJfYWRkcmVzc1wiOiBcIjxzcGFuIGNsYXNzPVxcXCJzdHJlZXQtYWRkcmVzc1xcXCI+MTAyOSBSYWNlIFN0PC9zcGFuPiwgPHNwYW4gY2xhc3M9XFxcImxvY2FsaXR5XFxcIj5QaGlsYWRlbHBoaWE8L3NwYW4+LCA8c3BhbiBjbGFzcz1cXFwicmVnaW9uXFxcIj5QQTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInBvc3RhbC1jb2RlXFxcIj4xOTEwNzwvc3Bhbj4sIDxzcGFuIGNsYXNzPVxcXCJjb3VudHJ5LW5hbWVcXFwiPlVTQTwvc3Bhbj5cIixcbiAgICBcImZvcm1hdHRlZF9hZGRyZXNzXCI6IFwiMTAyOSBSYWNlIFN0LCBQaGlsYWRlbHBoaWEsIFBBIDE5MTA3LCBVU0FcIixcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwibG9jYXRpb25cIjoge1xuICAgICAgICBcImxhdFwiOiAzOS45NTU2ODE2OTk5OTk5OSxcbiAgICAgICAgXCJsbmdcIjogLTc1LjE1Njg2NTc5OTk5OTk5XG4gICAgICB9LFxuICAgICAgXCJ2aWV3cG9ydFwiOiB7XG4gICAgICAgIFwic291dGhcIjogMzkuOTU1MzU2MzUsXG4gICAgICAgIFwid2VzdFwiOiAtNzUuMTU2OTgzMjUsXG4gICAgICAgIFwibm9ydGhcIjogMzkuOTU1NzkwMTQ5OTk5OTksXG4gICAgICAgIFwiZWFzdFwiOiAtNzUuMTU2NTEzNDUwMDAwMDNcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiaWNvblwiOiBcImh0dHBzOi8vbWFwcy5nc3RhdGljLmNvbS9tYXBmaWxlcy9wbGFjZV9hcGkvaWNvbnMvZ2VuZXJpY19idXNpbmVzcy03MS5wbmdcIixcbiAgICBcImlkXCI6IFwiZTliZmFmMjM2ZTkwN2YzZjQwY2NiNzNlNWEyOGMwOGI3YjA4MTQ2MFwiLFxuICAgIFwib3BlbmluZ19ob3Vyc1wiOiB7XG4gICAgICBcIm9wZW5fbm93XCI6IGZhbHNlLFxuICAgICAgXCJwZXJpb2RzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY2xvc2VcIjoge1xuICAgICAgICAgICAgXCJkYXlcIjogMixcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjIxMDBcIixcbiAgICAgICAgICAgIFwiaG91cnNcIjogMjEsXG4gICAgICAgICAgICBcIm1pbnV0ZXNcIjogMCxcbiAgICAgICAgICAgIFwibmV4dERhdGVcIjogMTQ3MzIxMDAwMDAwMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgIFwiZGF5XCI6IDIsXG4gICAgICAgICAgICBcInRpbWVcIjogXCIxNzAwXCIsXG4gICAgICAgICAgICBcImhvdXJzXCI6IDE3LFxuICAgICAgICAgICAgXCJtaW51dGVzXCI6IDAsXG4gICAgICAgICAgICBcIm5leHREYXRlXCI6IDE0NzMxOTU2MDAwMDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImNsb3NlXCI6IHtcbiAgICAgICAgICAgIFwiZGF5XCI6IDMsXG4gICAgICAgICAgICBcInRpbWVcIjogXCIyMTAwXCIsXG4gICAgICAgICAgICBcImhvdXJzXCI6IDIxLFxuICAgICAgICAgICAgXCJtaW51dGVzXCI6IDAsXG4gICAgICAgICAgICBcIm5leHREYXRlXCI6IDE0NzI2OTE2MDAwMDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcImRheVwiOiAzLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMTcwMFwiLFxuICAgICAgICAgICAgXCJob3Vyc1wiOiAxNyxcbiAgICAgICAgICAgIFwibWludXRlc1wiOiAwLFxuICAgICAgICAgICAgXCJuZXh0RGF0ZVwiOiAxNDcyNjc3MjAwMDAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJjbG9zZVwiOiB7XG4gICAgICAgICAgICBcImRheVwiOiA0LFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMjEwMFwiLFxuICAgICAgICAgICAgXCJob3Vyc1wiOiAyMSxcbiAgICAgICAgICAgIFwibWludXRlc1wiOiAwLFxuICAgICAgICAgICAgXCJuZXh0RGF0ZVwiOiAxNDcyNzc4MDAwMDAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgXCJkYXlcIjogNCxcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjE3MDBcIixcbiAgICAgICAgICAgIFwiaG91cnNcIjogMTcsXG4gICAgICAgICAgICBcIm1pbnV0ZXNcIjogMCxcbiAgICAgICAgICAgIFwibmV4dERhdGVcIjogMTQ3Mjc2MzYwMDAwMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiY2xvc2VcIjoge1xuICAgICAgICAgICAgXCJkYXlcIjogNSxcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjIxMDBcIixcbiAgICAgICAgICAgIFwiaG91cnNcIjogMjEsXG4gICAgICAgICAgICBcIm1pbnV0ZXNcIjogMCxcbiAgICAgICAgICAgIFwibmV4dERhdGVcIjogMTQ3Mjg2NDQwMDAwMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgIFwiZGF5XCI6IDUsXG4gICAgICAgICAgICBcInRpbWVcIjogXCIxNzAwXCIsXG4gICAgICAgICAgICBcImhvdXJzXCI6IDE3LFxuICAgICAgICAgICAgXCJtaW51dGVzXCI6IDAsXG4gICAgICAgICAgICBcIm5leHREYXRlXCI6IDE0NzI4NTAwMDAwMDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImNsb3NlXCI6IHtcbiAgICAgICAgICAgIFwiZGF5XCI6IDYsXG4gICAgICAgICAgICBcInRpbWVcIjogXCIyMTAwXCIsXG4gICAgICAgICAgICBcImhvdXJzXCI6IDIxLFxuICAgICAgICAgICAgXCJtaW51dGVzXCI6IDAsXG4gICAgICAgICAgICBcIm5leHREYXRlXCI6IDE0NzI5NTA4MDAwMDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcImRheVwiOiA2LFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMTcwMFwiLFxuICAgICAgICAgICAgXCJob3Vyc1wiOiAxNyxcbiAgICAgICAgICAgIFwibWludXRlc1wiOiAwLFxuICAgICAgICAgICAgXCJuZXh0RGF0ZVwiOiAxNDcyOTM2NDAwMDAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJ3ZWVrZGF5X3RleHRcIjogW1xuICAgICAgICBcIk1vbmRheTogQ2xvc2VkXCIsXG4gICAgICAgIFwiVHVlc2RheTogNTowMCDigJMgOTowMCBQTVwiLFxuICAgICAgICBcIldlZG5lc2RheTogNTowMCDigJMgOTowMCBQTVwiLFxuICAgICAgICBcIlRodXJzZGF5OiA1OjAwIOKAkyA5OjAwIFBNXCIsXG4gICAgICAgIFwiRnJpZGF5OiA1OjAwIOKAkyA5OjAwIFBNXCIsXG4gICAgICAgIFwiU2F0dXJkYXk6IDU6MDAg4oCTIDk6MDAgUE1cIixcbiAgICAgICAgXCJTdW5kYXk6IENsb3NlZFwiXG4gICAgICBdXG4gICAgfSxcbiAgICBcInBob3Rvc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaGVpZ2h0XCI6IDMyNjQsXG4gICAgICAgIFwiaHRtbF9hdHRyaWJ1dGlvbnNcIjogW1xuICAgICAgICAgIFwiPGEgaHJlZj1cXFwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcy9jb250cmliLzEwMTgxMDA2ODgyOTYyNjMwMTkyNC9waG90b3NcXFwiPkF1c3RpbiBHcmFmZjwvYT5cIlxuICAgICAgICBdLFxuICAgICAgICBcIndpZHRoXCI6IDI0NDhcbiAgICAgIH1cbiAgICBdLFxuICAgIFwicGxhY2VfaWRcIjogXCJDaElKaWZ2M1dTckd4b2tSNXpnUGVjdGt5bUlcIixcbiAgICBcInByaWNlX2xldmVsXCI6IDIsXG4gICAgXCJyYXRpbmdcIjogNC4xLFxuICAgIFwicmVmZXJlbmNlXCI6IFwiQ25SbUFBQUFRSlNLWFN4RFFsLVhYYldGaTJEZk1KTmVUZlBWTzgtem9JOWJrLUpOazZmZTR1cm4zaG0xZWxjRFRsbzh2SkgxUXdzekdwRHF0ZXFzNC1aQW4yOWNYSk9JYUd1NEFUYVJRc1FMNE1teFdNdEJpbElXLTl1aDNsQjNTbGtmRTh4WFNiSVNWRE15aDJyZWtra2RMUHplckJJUTdtVTRnYlhUWlBtblM4VGdwMW9LNkJvVUVEdE5XcE5qdDNaYzdhWW83ejBQbnVFUjRoTVwiLFxuICAgIFwicmV2aWV3c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiYXNwZWN0c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyYXRpbmdcIjogMixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm92ZXJhbGxcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJhdXRob3JfbmFtZVwiOiBcIlJpdGEgTVwiLFxuICAgICAgICBcImF1dGhvcl91cmxcIjogXCJodHRwczovL3BsdXMuZ29vZ2xlLmNvbS8xMTIyMDMyOTQzODQ1MDE0NzQzNzJcIixcbiAgICAgICAgXCJsYW5ndWFnZVwiOiBcImVuXCIsXG4gICAgICAgIFwicHJvZmlsZV9waG90b191cmxcIjogXCIvL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLTNGVGx1aVY5ZndrL0FBQUFBQUFBQUFJL0FBQUFBQUFBTU1VL3RRQ3ZNSW9mbXFVL3Bob3RvLmpwZ1wiLFxuICAgICAgICBcInJhdGluZ1wiOiA0LFxuICAgICAgICBcInRleHRcIjogXCJXYW50aW5nIHRvIG1haW50YWluIHRoZSBwcm9oaWJpdGlvbiBleHBlcmllbmNlLCB0aGUgZG9vcm1hbiB3YXMgaW5jcmVkaWJseSBjb2xkIGFuZCBydWRlLiBUaGVyZSBpcyBhIGRyZXNzIGNvZGUsIG5vIHNob3J0cyAoZm9yIG1lbikgb3IgdHJhaW5lcnMuIFN0cmljdCBubyBjZWxsIHBob25lIHBvbGljeS4gVGhlIHZlbnVlIGl0c2VsZiBpcyBzdHVubmluZy4gTG90cyBvZiBjb29sIGRlY29yLiBUaGUgZHJpbmtzIGFyZSBleHBlbnNpdmUuIFdlIHdlcmUgdG9sZCBpdCBpcyBhIDIgZHJpbmsgbWluaW11bSBwZXIgcGVyc29uLiBCZSB3YXJuZWQgdGhleSBhcmUgbm90IGNoZWFwLiBXb3VsZCBkZWYgcmV0dXJuIGZvciBhIGRhdGUgb3IgbmljZSBuaWdodCBhbmQgb3V0LlwiLFxuICAgICAgICBcInRpbWVcIjogMTQ3MTIxNjM4OFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJhc3BlY3RzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJhdGluZ1wiOiAzLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3ZlcmFsbFwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImF1dGhvcl9uYW1lXCI6IFwiTmF0ZSBBcmNoaWJhbGRcIixcbiAgICAgICAgXCJhdXRob3JfdXJsXCI6IFwiaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vMTAxMDY2NzY3MDk1Mzc0NzUwNjcxXCIsXG4gICAgICAgIFwibGFuZ3VhZ2VcIjogXCJlblwiLFxuICAgICAgICBcInByb2ZpbGVfcGhvdG9fdXJsXCI6IFwiLy9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1yMGNicEd5Nzkxby9BQUFBQUFBQUFBSS9BQUFBQUFBQVhEOC9ZcURoOXhVNDhrQS9waG90by5qcGdcIixcbiAgICAgICAgXCJyYXRpbmdcIjogNSxcbiAgICAgICAgXCJ0ZXh0XCI6IFwiVGhpcyBwbGFjZSBpcyB3b25kZXJmdWwuICBBIHVuaXF1ZSBleHBlcmllbmNlIHRoYXQgdHJhbnNjZW5kcyB0aGUgdHlwaWNhbC4gICBJIHJlYWxseSBlbmpveWVkIHRoZSBoYW5kY3JhZnRlZCBjb2NrdGFpbHMgYnV0IG15IGZhdm9yaXRlIHBhcnQgd2FzIG5vdCBrbm93aW5nIHdoYXQgdG8gZXhwZWN0LiAgQSByZWFsIHBsZWFzdXJlIGFuZCBJIHdpbGwgY2VydGFpbmx5IHJldHVybiB3aGVuIEknbSBpbiBQaGlsbHkgYWdhaW4uICBIaWdobHkgcmVjb21tZW5kZWQuXCIsXG4gICAgICAgIFwidGltZVwiOiAxNDY2MDkwNzk1XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImFzcGVjdHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmF0aW5nXCI6IDAsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvdmVyYWxsXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiYXV0aG9yX25hbWVcIjogXCJKdWxpYSBEZW5uaXNcIixcbiAgICAgICAgXCJhdXRob3JfdXJsXCI6IFwiaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vMTAxMjA5NjM3OTQzNTU1NjAzMDQxXCIsXG4gICAgICAgIFwibGFuZ3VhZ2VcIjogXCJlblwiLFxuICAgICAgICBcInJhdGluZ1wiOiAxLFxuICAgICAgICBcInRleHRcIjogXCJBdCBIb3AgU2luZyB0b25pZ2h0IEkgb2JzZXJ2ZWQgdGhlIGdlbnRsZW1hbiBhdCB0aGUgZG9vciBsZXQgYSBjb3VwbGUgaW5zaWRlIHRoYXQgd2FzIHdlYXJpbmcgb3BlbiB0b2Ugc25lYWtlcnMgYW5kIGplYW5zIGJ1dCByZWZ1c2Ugc2VydmljZSB0byBteSBmaWFuY8OpIGJlY2F1c2UgaGlzIFxcXCJwYW50cyB3ZXJlIHRvbyB0aWdodFxcXCIuIEFic29sdXRlbHkgcmlkaWN1bG91cy4gV2Ugd2VyZSB3ZWxsIGRyZXNzZWQsIHdvcmUgY2xvc2VkIHRvZSBkcmVzcyBzaG9lcywgYW5kIHdlcmUgbG9va2luZyBmb3J3YXJkIHRvIGhhdmluZyBhIGZldyBkcmlua3MgYXQgdGhpcyBlbHVzaXZlIGJhci4gVGhlIGdlbnRsZW1hbiBhdCB0aGUgZ2F0ZSBrZXB0IHJlZmVycmluZyB0byBteSBmaWFuY8OpJ3MgcGFudHMgYXMgXFxcInRpZ2h0c1xcXCIgYW5kIGluc2lzdGVkIHRoYXQgbWVuIHdlcmUgbm90IGFsbG93ZWQgdG8gY29tZSBpbiB3ZWFyaW5nIHRpZ2h0cyAoZm9yIGNsYXJpZmljYXRpb24gaGUgd2FzIG5vdDsgdGhleSB3ZXJlIGRyZXNzIHBhbnRzKS4gSSB3YXMsIGhvd2V2ZXIsIGFtYXplZCB0byBvYnNlcnZlIHN1Y2ggYSBjbGVhcmx5IHJlZ3Jlc3NpdmUgYW5kIGFudGktTEdCVCBzZW50aW1lbnQgYmVpbmcgZWNob2VkIGluIHRoZSBtb3N0IHByb2dyZXNzaXZlIGNpdHkgSSBrbm93LiBXZSB3ZW50IGRvd24gdGhlIHJvYWQgdG8gQ2hhcmxpZSB3YXMgYSBTaW5uZXIgaW5zdGVhZCBhbmQgaGFkIGEgd29uZGVyZnVsIHRpbWUuIFdlIHdpbGwgbm90IGJlIGJhY2sgdG8gSG9wIFNpbmdcIixcbiAgICAgICAgXCJ0aW1lXCI6IDE0NzE3MDAxMjlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiYXNwZWN0c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyYXRpbmdcIjogMyxcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm92ZXJhbGxcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJhdXRob3JfbmFtZVwiOiBcIlRhamVlIEJcIixcbiAgICAgICAgXCJhdXRob3JfdXJsXCI6IFwiaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vMTA3MTA4NjMxMjI2ODc2OTk4MzE2XCIsXG4gICAgICAgIFwibGFuZ3VhZ2VcIjogXCJlblwiLFxuICAgICAgICBcInByb2ZpbGVfcGhvdG9fdXJsXCI6IFwiLy9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1QRmZ4czlLNEliUS9BQUFBQUFBQUFBSS9BQUFBQUFBQUFKMC9mX3FwUzdOWW1kOC9waG90by5qcGdcIixcbiAgICAgICAgXCJyYXRpbmdcIjogNSxcbiAgICAgICAgXCJ0ZXh0XCI6IFwiVGhpcyBpcyBhIHZlcnkgdXBzY2FsZSBzcGVha2Vhc3kuICBGaXJzdCBvZiwgaXQncyBqdXN0IHRoZSBkb29yLiBObyBzaWduIG5vIGluZGljYXRpb24gdGhhdCBpdCdzIGEgYmFyLiBZb3UgcmluZyB0aGUgZG9vcmJlbGwgYW4gQXNpYW4gZ2VudGxlbWFuIHdpdGggcmVhbGx5IG5pY2UgZ2xhc3NlcyBjb21lcyBvdXQgYW5kIGFzayB5b3UgcXVlc3Rpb25zLiBIZSdsbCBhc2sgeW91IHF1ZXN0aW9ucyBsaWtlIGhvdyBkbyB5b3Uga25vdyBhYm91dCB0aGlzIHBsYWNlICwgYXJlIHlvdSBsb29raW5nIGZvciBzb21lb25lLCBhcmUgeW91IGxvc3Q/IElmIHlvdSdyZSBub3QgZHJlc3NlZCB3ZWxsLCB5b3Ugd2lsbCBub3QgZ2V0IGluLlxcblxcbk9uY2UgeW91J3JlIGluLCBpdCBpcyBhIHZlcnkgc2VkdWN0aXZlIGJhciB3aXRoIG5pY2UgY29ja3RhaWxzLiBUaGUgY29ja3RhaWxzIGFyZSBhIGxpdHRsZSBiaXQgZXhwZW5zaXZlIGJ1dCB0aGV5J3JlIHZlcnkgdGFzdHkgYW5kIHdlbGwgd29ydGggaXQuIElmIHlvdSBoYXZlIHNvbWUgbW9uZXkgdG8gYmxvdyBJIHN1Z2dlc3QgeW91IGdvIGFoZWFkIGdldCByZWFsbHkgbmljZWx5IGRyZXNzZWQgYW5kIGdvIHRvIHRoaXMgYmFyLlwiLFxuICAgICAgICBcInRpbWVcIjogMTQ3MDA2NDY1OFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJhc3BlY3RzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJhdGluZ1wiOiAzLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3ZlcmFsbFwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImF1dGhvcl9uYW1lXCI6IFwiRXZhbiBUXCIsXG4gICAgICAgIFwiYXV0aG9yX3VybFwiOiBcImh0dHBzOi8vcGx1cy5nb29nbGUuY29tLzEwMjU4MDIzNzQyOTIxMjc5MDg2M1wiLFxuICAgICAgICBcImxhbmd1YWdlXCI6IFwiZW5cIixcbiAgICAgICAgXCJwcm9maWxlX3Bob3RvX3VybFwiOiBcIi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tbFFFZThLbTNGOUUvQUFBQUFBQUFBQUkvQUFBQUFBQUFMUUEvNEVUc3pZOTNvWmcvcGhvdG8uanBnXCIsXG4gICAgICAgIFwicmF0aW5nXCI6IDUsXG4gICAgICAgIFwidGV4dFwiOiBcIkJlc3QgZHJpbmtzIGluIHRoZSBjaXR5IHdpdGhvdXQgaXQgYmVpbmcgYSB0eXBpY2FsIGJhci4gVGhlIHBsYWNlIGlzIG1vZGVsZWQgYWZ0ZXIgYSBzcGVha2Vhc3kgc28geW91IHdvbid0IGJlIGFibGUgdG8gc3BvdCBpdCBmcm9tIHRoZSBzdHJlZXQuIEdyZWF0IGF0bW9zcGhlcmUgd2hpY2ggaXMgYm9sc3RlcmVkIGJ5IHN0cmljdCBydWxlcyBhZ2FpbnN0IHRhbGtpbmcgb24gY2VsbCBwaG9uZXMsIGJlaGF2aW9yIChpZiB5b3UgYXJlIHRvbyBsb3VkIHRoZXkgd2lsbCBhc2sgeW91IHRvIGtlZXAgaXQgZG93biBvciB0ZWxsIHlvdSB0byBsZWF2ZSkgYW5kIGEgZHJlc3MgY29kZS4gXFxuXFxuXCIsXG4gICAgICAgIFwidGltZVwiOiAxNDY1MjU5NTg1XG4gICAgICB9XG4gICAgXSxcbiAgICBcInNjb3BlXCI6IFwiR09PR0xFXCIsXG4gICAgXCJ0eXBlc1wiOiBbXG4gICAgICBcImxhdW5kcnlcIixcbiAgICAgIFwicG9pbnRfb2ZfaW50ZXJlc3RcIixcbiAgICAgIFwiZXN0YWJsaXNobWVudFwiXG4gICAgXSxcbiAgICBcInVybFwiOiBcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tLz9jaWQ9NzExODYxMjk4NjA4NDY2OTY3MVwiLFxuICAgIFwidXRjX29mZnNldFwiOiAtMjQwLFxuICAgIFwidmljaW5pdHlcIjogXCIxMDI5IFJhY2UgU3RyZWV0LCBQaGlsYWRlbHBoaWFcIixcbiAgICBcIndlYnNpdGVcIjogXCJodHRwOi8vd3d3LmhvcHNpbmdsYXVuZHJvbWF0LmNvbS9cIixcbiAgICBcImh0bWxfYXR0cmlidXRpb25zXCI6IFtdXG4gIH0sXG4gIHtcbiAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWVhNFwiLFxuICAgIFwibmFtZVwiOiBcIkJhcmNhZGVcIixcbiAgICBcImNhdGFnb3J5bGV2ZWwxXCI6IFwiRHJpbmtcIixcbiAgICBcImFkcmVzc1wiOiBcIjExMTQgRnJhbmtmb3JkIEF2ZSwgUGhpbGFkZWxwaGlhLCBQQSAxOTEyNVwiLFxuICAgIFwibmVpZ2hib3Job29kXCI6IFwiRmlzaHRvd25cIixcbiAgICBcImxhdFwiOiBcIjM5Ljk2NzQ1MTZcIixcbiAgICBcImxvbmdcIjogXCItNzUuMTM0NjI1MlwiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjogOTY2LFxuICAgIFwidHJhdmVsVGltZVwiOiB7XG4gICAgICBcInRleHRcIjogXCIxNSBtaW5zXCIsXG4gICAgICBcInZhbHVlXCI6IDkyN1xuICAgIH0sXG4gICAgXCJkaXN0YW5jZVwiOiB7XG4gICAgICBcInRleHRcIjogXCIwLjggbWlcIixcbiAgICAgIFwidmFsdWVcIjogMTI5OVxuICAgIH0sXG4gICAgXCJnb29nbGVQbGFjZUlkXCI6IFwiQ2hJSjU5NUw5MmpJeG9rUmFueTQ1LUc5dXJ3XCIsXG4gICAgXCJhZGRyZXNzX2NvbXBvbmVudHNcIjogW1xuICAgICAge1xuICAgICAgICBcImxvbmdfbmFtZVwiOiBcIjExMTRcIixcbiAgICAgICAgXCJzaG9ydF9uYW1lXCI6IFwiMTExNFwiLFxuICAgICAgICBcInR5cGVzXCI6IFtcbiAgICAgICAgICBcInN0cmVldF9udW1iZXJcIlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImxvbmdfbmFtZVwiOiBcIkZyYW5rZm9yZCBBdmVudWVcIixcbiAgICAgICAgXCJzaG9ydF9uYW1lXCI6IFwiRnJhbmtmb3JkIEF2ZVwiLFxuICAgICAgICBcInR5cGVzXCI6IFtcbiAgICAgICAgICBcInJvdXRlXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJsb25nX25hbWVcIjogXCJGaXNodG93blwiLFxuICAgICAgICBcInNob3J0X25hbWVcIjogXCJGaXNodG93blwiLFxuICAgICAgICBcInR5cGVzXCI6IFtcbiAgICAgICAgICBcIm5laWdoYm9yaG9vZFwiLFxuICAgICAgICAgIFwicG9saXRpY2FsXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJsb25nX25hbWVcIjogXCJQaGlsYWRlbHBoaWFcIixcbiAgICAgICAgXCJzaG9ydF9uYW1lXCI6IFwiUGhpbGFkZWxwaGlhXCIsXG4gICAgICAgIFwidHlwZXNcIjogW1xuICAgICAgICAgIFwibG9jYWxpdHlcIixcbiAgICAgICAgICBcInBvbGl0aWNhbFwiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibG9uZ19uYW1lXCI6IFwiUGhpbGFkZWxwaGlhIENvdW50eVwiLFxuICAgICAgICBcInNob3J0X25hbWVcIjogXCJQaGlsYWRlbHBoaWEgQ291bnR5XCIsXG4gICAgICAgIFwidHlwZXNcIjogW1xuICAgICAgICAgIFwiYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8yXCIsXG4gICAgICAgICAgXCJwb2xpdGljYWxcIlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImxvbmdfbmFtZVwiOiBcIlBlbm5zeWx2YW5pYVwiLFxuICAgICAgICBcInNob3J0X25hbWVcIjogXCJQQVwiLFxuICAgICAgICBcInR5cGVzXCI6IFtcbiAgICAgICAgICBcImFkbWluaXN0cmF0aXZlX2FyZWFfbGV2ZWxfMVwiLFxuICAgICAgICAgIFwicG9saXRpY2FsXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJsb25nX25hbWVcIjogXCJVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgIFwic2hvcnRfbmFtZVwiOiBcIlVTXCIsXG4gICAgICAgIFwidHlwZXNcIjogW1xuICAgICAgICAgIFwiY291bnRyeVwiLFxuICAgICAgICAgIFwicG9saXRpY2FsXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJsb25nX25hbWVcIjogXCIxOTEyNVwiLFxuICAgICAgICBcInNob3J0X25hbWVcIjogXCIxOTEyNVwiLFxuICAgICAgICBcInR5cGVzXCI6IFtcbiAgICAgICAgICBcInBvc3RhbF9jb2RlXCJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJhZHJfYWRkcmVzc1wiOiBcIjxzcGFuIGNsYXNzPVxcXCJzdHJlZXQtYWRkcmVzc1xcXCI+MTExNCBGcmFua2ZvcmQgQXZlPC9zcGFuPiwgPHNwYW4gY2xhc3M9XFxcImxvY2FsaXR5XFxcIj5QaGlsYWRlbHBoaWE8L3NwYW4+LCA8c3BhbiBjbGFzcz1cXFwicmVnaW9uXFxcIj5QQTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInBvc3RhbC1jb2RlXFxcIj4xOTEyNTwvc3Bhbj4sIDxzcGFuIGNsYXNzPVxcXCJjb3VudHJ5LW5hbWVcXFwiPlVTQTwvc3Bhbj5cIixcbiAgICBcImZvcm1hdHRlZF9hZGRyZXNzXCI6IFwiMTExNCBGcmFua2ZvcmQgQXZlLCBQaGlsYWRlbHBoaWEsIFBBIDE5MTI1LCBVU0FcIixcbiAgICBcImZvcm1hdHRlZF9waG9uZV9udW1iZXJcIjogXCIoMjE1KSA2MzQtNDQwMFwiLFxuICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgXCJsb2NhdGlvblwiOiB7XG4gICAgICAgIFwibGF0XCI6IDM5Ljk2NzQ0NzYsXG4gICAgICAgIFwibG5nXCI6IC03NS4xMzQ2ODg0OTk5OTk5OFxuICAgICAgfSxcbiAgICAgIFwidmlld3BvcnRcIjoge1xuICAgICAgICBcInNvdXRoXCI6IDM5Ljk2NzQ0NzA1LFxuICAgICAgICBcIndlc3RcIjogLTc1LjEzNDgyMTc1MDAwMDAxLFxuICAgICAgICBcIm5vcnRoXCI6IDM5Ljk2NzQ0OTI0OTk5OTk5LFxuICAgICAgICBcImVhc3RcIjogLTc1LjEzNDI4ODc1XG4gICAgICB9XG4gICAgfSxcbiAgICBcImljb25cIjogXCJodHRwczovL21hcHMuZ3N0YXRpYy5jb20vbWFwZmlsZXMvcGxhY2VfYXBpL2ljb25zL2Jhci03MS5wbmdcIixcbiAgICBcImlkXCI6IFwiYjM5ZDBmN2I2ODkzOGZkYTFlYjJkNTBkZWMzNjc2NGE1MzNjOWZmNlwiLFxuICAgIFwiaW50ZXJuYXRpb25hbF9waG9uZV9udW1iZXJcIjogXCIrMSAyMTUtNjM0LTQ0MDBcIixcbiAgICBcIm9wZW5pbmdfaG91cnNcIjoge1xuICAgICAgXCJvcGVuX25vd1wiOiBmYWxzZSxcbiAgICAgIFwicGVyaW9kc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNsb3NlXCI6IHtcbiAgICAgICAgICAgIFwiZGF5XCI6IDEsXG4gICAgICAgICAgICBcInRpbWVcIjogXCIwMjAwXCIsXG4gICAgICAgICAgICBcImhvdXJzXCI6IDIsXG4gICAgICAgICAgICBcIm1pbnV0ZXNcIjogMCxcbiAgICAgICAgICAgIFwibmV4dERhdGVcIjogMTQ3MzA1NTIwMDAwMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgIFwiZGF5XCI6IDAsXG4gICAgICAgICAgICBcInRpbWVcIjogXCIxMjAwXCIsXG4gICAgICAgICAgICBcImhvdXJzXCI6IDEyLFxuICAgICAgICAgICAgXCJtaW51dGVzXCI6IDAsXG4gICAgICAgICAgICBcIm5leHREYXRlXCI6IDE0NzMwMDQ4MDAwMDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImNsb3NlXCI6IHtcbiAgICAgICAgICAgIFwiZGF5XCI6IDIsXG4gICAgICAgICAgICBcInRpbWVcIjogXCIwMjAwXCIsXG4gICAgICAgICAgICBcImhvdXJzXCI6IDIsXG4gICAgICAgICAgICBcIm1pbnV0ZXNcIjogMCxcbiAgICAgICAgICAgIFwibmV4dERhdGVcIjogMTQ3MzE0MTYwMDAwMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgIFwiZGF5XCI6IDEsXG4gICAgICAgICAgICBcInRpbWVcIjogXCIxNTAwXCIsXG4gICAgICAgICAgICBcImhvdXJzXCI6IDE1LFxuICAgICAgICAgICAgXCJtaW51dGVzXCI6IDAsXG4gICAgICAgICAgICBcIm5leHREYXRlXCI6IDE0NzMxMDIwMDAwMDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImNsb3NlXCI6IHtcbiAgICAgICAgICAgIFwiZGF5XCI6IDMsXG4gICAgICAgICAgICBcInRpbWVcIjogXCIwMjAwXCIsXG4gICAgICAgICAgICBcImhvdXJzXCI6IDIsXG4gICAgICAgICAgICBcIm1pbnV0ZXNcIjogMCxcbiAgICAgICAgICAgIFwibmV4dERhdGVcIjogMTQ3MzIyODAwMDAwMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgIFwiZGF5XCI6IDIsXG4gICAgICAgICAgICBcInRpbWVcIjogXCIxNTAwXCIsXG4gICAgICAgICAgICBcImhvdXJzXCI6IDE1LFxuICAgICAgICAgICAgXCJtaW51dGVzXCI6IDAsXG4gICAgICAgICAgICBcIm5leHREYXRlXCI6IDE0NzMxODg0MDAwMDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImNsb3NlXCI6IHtcbiAgICAgICAgICAgIFwiZGF5XCI6IDQsXG4gICAgICAgICAgICBcInRpbWVcIjogXCIwMjAwXCIsXG4gICAgICAgICAgICBcImhvdXJzXCI6IDIsXG4gICAgICAgICAgICBcIm1pbnV0ZXNcIjogMCxcbiAgICAgICAgICAgIFwibmV4dERhdGVcIjogMTQ3MjcwOTYwMDAwMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgIFwiZGF5XCI6IDMsXG4gICAgICAgICAgICBcInRpbWVcIjogXCIxNTAwXCIsXG4gICAgICAgICAgICBcImhvdXJzXCI6IDE1LFxuICAgICAgICAgICAgXCJtaW51dGVzXCI6IDAsXG4gICAgICAgICAgICBcIm5leHREYXRlXCI6IDE0NzI2NzAwMDAwMDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImNsb3NlXCI6IHtcbiAgICAgICAgICAgIFwiZGF5XCI6IDUsXG4gICAgICAgICAgICBcInRpbWVcIjogXCIwMjAwXCIsXG4gICAgICAgICAgICBcImhvdXJzXCI6IDIsXG4gICAgICAgICAgICBcIm1pbnV0ZXNcIjogMCxcbiAgICAgICAgICAgIFwibmV4dERhdGVcIjogMTQ3Mjc5NjAwMDAwMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgIFwiZGF5XCI6IDQsXG4gICAgICAgICAgICBcInRpbWVcIjogXCIxNTAwXCIsXG4gICAgICAgICAgICBcImhvdXJzXCI6IDE1LFxuICAgICAgICAgICAgXCJtaW51dGVzXCI6IDAsXG4gICAgICAgICAgICBcIm5leHREYXRlXCI6IDE0NzI3NTY0MDAwMDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImNsb3NlXCI6IHtcbiAgICAgICAgICAgIFwiZGF5XCI6IDYsXG4gICAgICAgICAgICBcInRpbWVcIjogXCIwMjAwXCIsXG4gICAgICAgICAgICBcImhvdXJzXCI6IDIsXG4gICAgICAgICAgICBcIm1pbnV0ZXNcIjogMCxcbiAgICAgICAgICAgIFwibmV4dERhdGVcIjogMTQ3Mjg4MjQwMDAwMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgIFwiZGF5XCI6IDUsXG4gICAgICAgICAgICBcInRpbWVcIjogXCIxMjAwXCIsXG4gICAgICAgICAgICBcImhvdXJzXCI6IDEyLFxuICAgICAgICAgICAgXCJtaW51dGVzXCI6IDAsXG4gICAgICAgICAgICBcIm5leHREYXRlXCI6IDE0NzI4MzIwMDAwMDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImNsb3NlXCI6IHtcbiAgICAgICAgICAgIFwiZGF5XCI6IDAsXG4gICAgICAgICAgICBcInRpbWVcIjogXCIwMjAwXCIsXG4gICAgICAgICAgICBcImhvdXJzXCI6IDIsXG4gICAgICAgICAgICBcIm1pbnV0ZXNcIjogMCxcbiAgICAgICAgICAgIFwibmV4dERhdGVcIjogMTQ3Mjk2ODgwMDAwMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgIFwiZGF5XCI6IDYsXG4gICAgICAgICAgICBcInRpbWVcIjogXCIxMjAwXCIsXG4gICAgICAgICAgICBcImhvdXJzXCI6IDEyLFxuICAgICAgICAgICAgXCJtaW51dGVzXCI6IDAsXG4gICAgICAgICAgICBcIm5leHREYXRlXCI6IDE0NzI5MTg0MDAwMDBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIndlZWtkYXlfdGV4dFwiOiBbXG4gICAgICAgIFwiTW9uZGF5OiAzOjAwIFBNIOKAkyAyOjAwIEFNXCIsXG4gICAgICAgIFwiVHVlc2RheTogMzowMCBQTSDigJMgMjowMCBBTVwiLFxuICAgICAgICBcIldlZG5lc2RheTogMzowMCBQTSDigJMgMjowMCBBTVwiLFxuICAgICAgICBcIlRodXJzZGF5OiAzOjAwIFBNIOKAkyAyOjAwIEFNXCIsXG4gICAgICAgIFwiRnJpZGF5OiAxMjowMCBQTSDigJMgMjowMCBBTVwiLFxuICAgICAgICBcIlNhdHVyZGF5OiAxMjowMCBQTSDigJMgMjowMCBBTVwiLFxuICAgICAgICBcIlN1bmRheTogMTI6MDAgUE0g4oCTIDI6MDAgQU1cIlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwaG90b3NcIjogW1xuICAgICAge1xuICAgICAgICBcImhlaWdodFwiOiA4NjQsXG4gICAgICAgIFwiaHRtbF9hdHRyaWJ1dGlvbnNcIjogW1xuICAgICAgICAgIFwiPGEgaHJlZj1cXFwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcy9jb250cmliLzEwMDgwNTc4NTM5NTkyMzQzODMzMi9waG90b3NcXFwiPkJhcmNhZGU8L2E+XCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJ3aWR0aFwiOiAxMjk2XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhlaWdodFwiOiA1NzYsXG4gICAgICAgIFwiaHRtbF9hdHRyaWJ1dGlvbnNcIjogW1xuICAgICAgICAgIFwiPGEgaHJlZj1cXFwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcy9jb250cmliLzEwMDgwNTc4NTM5NTkyMzQzODMzMi9waG90b3NcXFwiPkJhcmNhZGU8L2E+XCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJ3aWR0aFwiOiA4NjRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaGVpZ2h0XCI6IDUxOCxcbiAgICAgICAgXCJodG1sX2F0dHJpYnV0aW9uc1wiOiBbXG4gICAgICAgICAgXCI8YSBocmVmPVxcXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzL2NvbnRyaWIvMTAwODA1Nzg1Mzk1OTIzNDM4MzMyL3Bob3Rvc1xcXCI+QmFyY2FkZTwvYT5cIlxuICAgICAgICBdLFxuICAgICAgICBcIndpZHRoXCI6IDgwMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJoZWlnaHRcIjogMTk0NCxcbiAgICAgICAgXCJodG1sX2F0dHJpYnV0aW9uc1wiOiBbXG4gICAgICAgICAgXCI8YSBocmVmPVxcXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzL2NvbnRyaWIvMTEyMjEzNzk5MzQzMTczNTMyNjA4L3Bob3Rvc1xcXCI+TWlrZSBTdGljaDwvYT5cIlxuICAgICAgICBdLFxuICAgICAgICBcIndpZHRoXCI6IDI1OTJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaGVpZ2h0XCI6IDg2NCxcbiAgICAgICAgXCJodG1sX2F0dHJpYnV0aW9uc1wiOiBbXG4gICAgICAgICAgXCI8YSBocmVmPVxcXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzL2NvbnRyaWIvMTAwODA1Nzg1Mzk1OTIzNDM4MzMyL3Bob3Rvc1xcXCI+QmFyY2FkZTwvYT5cIlxuICAgICAgICBdLFxuICAgICAgICBcIndpZHRoXCI6IDU3NlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJoZWlnaHRcIjogNTM0NCxcbiAgICAgICAgXCJodG1sX2F0dHJpYnV0aW9uc1wiOiBbXG4gICAgICAgICAgXCI8YSBocmVmPVxcXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzL2NvbnRyaWIvMTA0ODkwNjAxNDczMjY2Mjg3MDg2L3Bob3Rvc1xcXCI+U2NvdHQgQ292ZXI8L2E+XCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJ3aWR0aFwiOiAzMDA2XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImhlaWdodFwiOiAyNDMyLFxuICAgICAgICBcImh0bWxfYXR0cmlidXRpb25zXCI6IFtcbiAgICAgICAgICBcIjxhIGhyZWY9XFxcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHMvY29udHJpYi8xMTgyMDE0NDc1MTI1OTcwNjY1ODUvcGhvdG9zXFxcIj5DaHJpcyBXYWFzZG9ycDwvYT5cIlxuICAgICAgICBdLFxuICAgICAgICBcIndpZHRoXCI6IDQzMjBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaGVpZ2h0XCI6IDg2NCxcbiAgICAgICAgXCJodG1sX2F0dHJpYnV0aW9uc1wiOiBbXG4gICAgICAgICAgXCI8YSBocmVmPVxcXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzL2NvbnRyaWIvMTAwODA1Nzg1Mzk1OTIzNDM4MzMyL3Bob3Rvc1xcXCI+QmFyY2FkZTwvYT5cIlxuICAgICAgICBdLFxuICAgICAgICBcIndpZHRoXCI6IDEyOTZcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaGVpZ2h0XCI6IDg2NCxcbiAgICAgICAgXCJodG1sX2F0dHJpYnV0aW9uc1wiOiBbXG4gICAgICAgICAgXCI8YSBocmVmPVxcXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzL2NvbnRyaWIvMTAwODA1Nzg1Mzk1OTIzNDM4MzMyL3Bob3Rvc1xcXCI+QmFyY2FkZTwvYT5cIlxuICAgICAgICBdLFxuICAgICAgICBcIndpZHRoXCI6IDEyOTZcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaGVpZ2h0XCI6IDI5ODgsXG4gICAgICAgIFwiaHRtbF9hdHRyaWJ1dGlvbnNcIjogW1xuICAgICAgICAgIFwiPGEgaHJlZj1cXFwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcy9jb250cmliLzExNTA4OTAxNzk5NjEyMDE1MjM1Mi9waG90b3NcXFwiPkFsZXhhbmRyYSBNYXlzPC9hPlwiXG4gICAgICAgIF0sXG4gICAgICAgIFwid2lkdGhcIjogNTMxMlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJwbGFjZV9pZFwiOiBcIkNoSUo1OTVMOTJqSXhva1Jhbnk0NS1HOXVyd1wiLFxuICAgIFwicHJpY2VfbGV2ZWxcIjogMSxcbiAgICBcInJhdGluZ1wiOiA0LjMsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJDbVJiQUFBQWVFOHBIeGd5d1BUbkpUVWFQTHg4NVMyZ203TmFiSDlPMnltX1phT2NTem8zeTZqT3RSUXB4cXFEMUU4TC1PQjIxSWpGbEhVU0pZTTJzZTQ0bVhYNEFha0c0dU8yWkgxb1JTRE1EUDhQQnd0RlhVQnZNa1owemtmT1hobEF0NGF2RWhBNW14M1JrY3BjUnpOb3VGblpBNWkwR2hSdUNlYWtuX2FGTlh2ZzRiMXB6czR3UVE5ZlFRXCIsXG4gICAgXCJyZXZpZXdzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJhc3BlY3RzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJhdGluZ1wiOiAzLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3ZlcmFsbFwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImF1dGhvcl9uYW1lXCI6IFwiRGVyZWsgTm9yZGx1bmRcIixcbiAgICAgICAgXCJhdXRob3JfdXJsXCI6IFwiaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vMTExMzUzOTczMzUzODkxMDI5MjMxXCIsXG4gICAgICAgIFwibGFuZ3VhZ2VcIjogXCJlblwiLFxuICAgICAgICBcInByb2ZpbGVfcGhvdG9fdXJsXCI6IFwiLy9saDUuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1DV3JvcE9jMGZScy9BQUFBQUFBQUFBSS9BQUFBQUFBQUFCMC9obnVoQWtyNjd2QS9waG90by5qcGdcIixcbiAgICAgICAgXCJyYXRpbmdcIjogNSxcbiAgICAgICAgXCJ0ZXh0XCI6IFwiTGlrZSBhIHBhZ2Ugc3RyYWlnaHQgZnJvbSBub3N0YWxnaWEsIHRoaXMgcGxhY2UgaXMgZXZlcnl0aGluZyBhIHlvdW5nZXIgbWUgd2FudHMgYnV0IHdpdGggZ3JlYXQgY3JhZnQgYmVlci4gIEl0J3MgYW1hemluZyBvbGQgYXJjYWRlIGdhbWVzLCBhbGwgaW4gd29ya2luZyBvcmRlciwgd2l0aCBhIGh1Z2UgY3JhZnQgYmVlciBsaXN0IHRoYXQgaXMgY29uc3RhbnRseSB1cGRhdGVkLiAgVGhleSBnbyBhIGJpdCBiZXlvbmQgeW91ciB0eXBpY2FsIGJhciBmb29kLiAgTXkgbGFzdCB0cmlwIHdhcyAkMyB0YWNvcywgYWJvdXQgNSBkaWZmZXJlbnQgdHlwZXMgdG8gc2VsZWN0IGZyb20gaW5jbHVkaW5nIHZlZ2dpZSBhbmQgdGhleSBoYXZlICQxIHRhY29zIG9uLCBJIGJlbGlldmUsIE1vbmRheXMuICBJdCBjYW4gZ2V0IGEgYml0IGNyb3dkZWQgb24gRnJpZGF5IGFuZCBTYXR1cmRheSBuaWdodHMsIHNvIGlmIHlvdSB3YW50IHRvIGF2b2lkIHRoZSBjcm93ZHMgYW5kIGp1c3QgcGxheSBzb21lIGF3ZXNvbWUgYXJjYWRlcyBhbmQgZHJpbmsgc29tZSBiZWVyIHRoZW4gYmUgcHJlcGFyZWQgdG8gY2xlYXIgb3V0IGFyb3VuZCA5aXNoLlwiLFxuICAgICAgICBcInRpbWVcIjogMTQ3MDc2ODMzOFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJhc3BlY3RzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJhdGluZ1wiOiAzLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3ZlcmFsbFwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImF1dGhvcl9uYW1lXCI6IFwiSm9lIFNncm9cIixcbiAgICAgICAgXCJhdXRob3JfdXJsXCI6IFwiaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vMTAzMjYyNTk4MDk4NTQ3MDA3OTUzXCIsXG4gICAgICAgIFwibGFuZ3VhZ2VcIjogXCJlblwiLFxuICAgICAgICBcInByb2ZpbGVfcGhvdG9fdXJsXCI6IFwiLy9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1tUldsa3lIVkQ1Yy9BQUFBQUFBQUFBSS9BQUFBQUFBQUN3dy9jQjczNkRESnhCMC9waG90by5qcGdcIixcbiAgICAgICAgXCJyYXRpbmdcIjogNSxcbiAgICAgICAgXCJ0ZXh0XCI6IFwiVGhlIGJlc3QgZ2FtZSBsaW5lLXVwIG9mIGFueSBvZiB0aGUgQmFyY2FkZSBsb2NhdGlvbnMgaW4gbXkgb3Bpbmlvbi4gIEJlZXIgc2VsZWN0aW9uIGlzIHBoZW5vbWVuYWwgYXMgd2VsbC4gIFRoZSBzYW5kd2ljaGVzIGFyZSBhbHNvIHJlYWxseSBnb29kLCBJIHdhcyBibG93biBhd2F5IHRoZSBmaXJzdCB0aW1lIEkgYXRlIGhlcmUgYW5kIGhhdmVuJ3QgYmVlbiBsZXQgZG93biBvbiBsYXRlciB2aXNpdHMuICBPbmx5IGlzc3VlcyBhcmUgaXQgZ2V0cyBzdXBlciBjcm93ZGVkIGF0IHRpbWVzLCBhbmQgaXQgYWx3YXlzIHNlZW1zIGxpa2UgdGhlIGdhbWUgSSBhbSBtb3N0IGV4Y2l0ZWQgdG8gcGxheSAobGFzdCB0aW1lIGl0IHdhcyBCdXJnZXJUaW1lKSBpcyBub3Qgd29ya2luZyB3aGVuIEknbSB0aGVyZS5cIixcbiAgICAgICAgXCJ0aW1lXCI6IDE0NjgwMDM3NTRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiYXNwZWN0c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyYXRpbmdcIjogMixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm92ZXJhbGxcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJhdXRob3JfbmFtZVwiOiBcIkdlb3JnZSBXZWxsc1wiLFxuICAgICAgICBcImF1dGhvcl91cmxcIjogXCJodHRwczovL3BsdXMuZ29vZ2xlLmNvbS8xMTgwNDI4NzE1NzAxMzQxMzU2NzJcIixcbiAgICAgICAgXCJsYW5ndWFnZVwiOiBcImVuXCIsXG4gICAgICAgIFwicHJvZmlsZV9waG90b191cmxcIjogXCIvL2xoNS5nb29nbGV1c2VyY29udGVudC5jb20vLWpHTE9ueGF5dVd3L0FBQUFBQUFBQUFJL0FBQUFBQUFBRWlJLzZ4eTZLSV9yNHpzL3Bob3RvLmpwZ1wiLFxuICAgICAgICBcInJhdGluZ1wiOiA0LFxuICAgICAgICBcInRleHRcIjogXCJFeGNlbGxlbnQgYmVlciBzZWxlY3Rpb24gYW5kIGZ1biByZXRybyBnYW1lcy4gRnVuIHRpbWVzIGFyZSBoYWQgaW4gMysgZ3JvdXBzLiBFeHBlY3QgYSBjcm93ZCBhbmQgd2FpdCBmb3IgZHJpbmsgb3JkZXJlZCBhbmQgZ2FtZXMgb24gdGhlIHdlZWtlbmRzLiBFbmpveWVkIHRoZSBsYXlvdXQsIHNpemUsIGFuZCBzZXJ2aWNlIG9mIHRoZSBKZXJzZXkgQ2l0eSBsb2NhdGlvbiBiZXR0ZXIuIFwiLFxuICAgICAgICBcInRpbWVcIjogMTQ2NTE1NTMyNlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJhc3BlY3RzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJhdGluZ1wiOiAyLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3ZlcmFsbFwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImF1dGhvcl9uYW1lXCI6IFwiTWljaGFlbCBOXCIsXG4gICAgICAgIFwiYXV0aG9yX3VybFwiOiBcImh0dHBzOi8vcGx1cy5nb29nbGUuY29tLzExNjA3OTQwNzIxNDQ4NDE4Mzk1MFwiLFxuICAgICAgICBcImxhbmd1YWdlXCI6IFwiZW5cIixcbiAgICAgICAgXCJwcm9maWxlX3Bob3RvX3VybFwiOiBcIi8vbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tTlNtdTRfa21na2cvQUFBQUFBQUFBQUkvQUFBQUFBQUFCUWcveV9LRlRKcUpXWlEvcGhvdG8uanBnXCIsXG4gICAgICAgIFwicmF0aW5nXCI6IDQsXG4gICAgICAgIFwidGV4dFwiOiBcIkNvb2wgY29uY2VwdC4gR3JlYXQgYmVlciBsaXN0LiBFeGNlbGxlbnQgc3BvdCBmb3IgYSBncm91cCBoYW5nLiBOaWNlIGxpdHRsZSBvdXRkb29yIHBhdGlvIGFyZWEuIEZvb2QgaXMgZGVjZW50IHRvby4gXCIsXG4gICAgICAgIFwidGltZVwiOiAxNDY2MDE0MDMzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImFzcGVjdHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmF0aW5nXCI6IDMsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvdmVyYWxsXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiYXV0aG9yX25hbWVcIjogXCJMaWx5IGRlIGxhIFRvcnJlXCIsXG4gICAgICAgIFwiYXV0aG9yX3VybFwiOiBcImh0dHBzOi8vcGx1cy5nb29nbGUuY29tLzEwNDMwMjI2NDU4Nzc4ODEzMjkzOFwiLFxuICAgICAgICBcImxhbmd1YWdlXCI6IFwiZW5cIixcbiAgICAgICAgXCJwcm9maWxlX3Bob3RvX3VybFwiOiBcIi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS8tZ3FTWEhEdjc5NVEvQUFBQUFBQUFBQUkvQUFBQUFBQUFBRkkvVXhxajhvSl80TXcvcGhvdG8uanBnXCIsXG4gICAgICAgIFwicmF0aW5nXCI6IDUsXG4gICAgICAgIFwidGV4dFwiOiBcIlRoZXJlJ3MgYSBncmVhdCBiZWVyIGxpc3QgYW5kIHZlZ2FuIGZvb2Qgb3B0aW9ucy4gTW9zdCBnYW1lcyBhcmUgMjUgY2VudHMgcGVyIHBsYXkuIFdoZW4gYSBnYW1lIGF0ZSBteSBjb2lucywgdGhlIG1hbmFnZXIgd2FzIHZlcnkgcXVpY2sgdG8gcmVzcG9uZCBhbmQgZ2F2ZSBtZSBjb2lucyBiYWNrLiBJdCdzIGEgZ3JlYXQgcGxhY2UgdG8gZ28gYWxvbmUgb3Igd2l0aCBmcmllbmRzLiBcIixcbiAgICAgICAgXCJ0aW1lXCI6IDE0NjY4NzI5NDRcbiAgICAgIH1cbiAgICBdLFxuICAgIFwic2NvcGVcIjogXCJHT09HTEVcIixcbiAgICBcInR5cGVzXCI6IFtcbiAgICAgIFwiYmFyXCIsXG4gICAgICBcInBvaW50X29mX2ludGVyZXN0XCIsXG4gICAgICBcImVzdGFibGlzaG1lbnRcIlxuICAgIF0sXG4gICAgXCJ1cmxcIjogXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS8/Y2lkPTEzNTk5MzkwODAyNzUxNTUyNjE4XCIsXG4gICAgXCJ1dGNfb2Zmc2V0XCI6IC0yNDAsXG4gICAgXCJ2aWNpbml0eVwiOiBcIjExMTQgRnJhbmtmb3JkIEF2ZW51ZSwgUGhpbGFkZWxwaGlhXCIsXG4gICAgXCJ3ZWJzaXRlXCI6IFwiaHR0cDovL3d3dy5iYXJjYWRlcGhpbGFkZWxwaGlhLmNvbVwiLFxuICAgIFwiaHRtbF9hdHRyaWJ1dGlvbnNcIjogW11cbiAgfVxuXSIsIm1vZHVsZS5leHBvcnRzPVt7XG4gICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNzRcIixcbiAgICBcIm5hbWVcIjogXCJTa2V0Y2ggQnVyZ2VyXCIsXG4gICAgXCJjYXRhZ29yeWxldmVsMVwiOiBcIkZvb2RcIixcbiAgICBcImFkcmVzc1wiOiBcIjQxMyBFIEdpcmFyZCBBdmUgUGhpbGFkZWxwaGlhIFBBIDE5MTI1IFVuaXRlZCBTdGF0ZXNcIixcbiAgICBcIm5laWdoYm9yaG9vZFwiOiBcIkZpc2h0b3duXCIsXG4gICAgXCJsYXRcIjogXCIzOS45NzA1NzkyXCIsXG4gICAgXCJsb25nXCI6IFwiLTc1LjEzMDExODRcIixcbiAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uXCI6IDE0NzUsXG4gICAgXCJ0cmF2ZWxUaW1lXCI6IHtcbiAgICAgIFwidGV4dFwiOiBcIjIyIG1pbnNcIixcbiAgICAgIFwidmFsdWVcIjogMTMxOFxuICAgIH0sXG4gICAgXCJkaXN0YW5jZVwiOiB7XG4gICAgICBcInRleHRcIjogXCIxLjEgbWlcIixcbiAgICAgIFwidmFsdWVcIjogMTgwOFxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZThmXCIsXG4gICAgXCJuYW1lXCI6IFwiQ2Fwb2dpcm8gR2VsYXRvXCIsXG4gICAgXCJjYXRhZ29yeWxldmVsMVwiOiBcIkZvb2RcIixcbiAgICBcImFkcmVzc1wiOiBcIjIzMyBDaGVzdG51dCBTdHJlZXQsIFBoaWxhZGVscGhpYSwgUEFcIixcbiAgICBcIm5laWdoYm9yaG9vZFwiOiBcIldhc2hpbmd0aW9uIFNxdWFyZVwiLFxuICAgIFwibGF0XCI6IFwiMzkuOTQ4ODIyXCIsXG4gICAgXCJsb25nXCI6IFwiLTc1LjE0NTM1OFwiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjogMTYwOCxcbiAgICBcInRyYXZlbFRpbWVcIjoge1xuICAgICAgXCJ0ZXh0XCI6IFwiMjMgbWluc1wiLFxuICAgICAgXCJ2YWx1ZVwiOiAxMzUxXG4gICAgfSxcbiAgICBcImRpc3RhbmNlXCI6IHtcbiAgICAgIFwidGV4dFwiOiBcIjEuMSBtaVwiLFxuICAgICAgXCJ2YWx1ZVwiOiAxODA3XG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllOGVcIixcbiAgICBcIm5hbWVcIjogXCJQaGlsbHkgRmxhdm9yc1wiLFxuICAgIFwiY2F0YWdvcnlsZXZlbDFcIjogXCJGb29kXCIsXG4gICAgXCJhZHJlc3NcIjogXCIyMDA0IEZhaXJtb3VudCBBdmUsIFBoaWxhZGVscGhpYSwgUEEgMTkxMzBcIixcbiAgICBcIm5laWdoYm9yaG9vZFwiOiBcIkZhaXJtb3VudFwiLFxuICAgIFwibGF0XCI6IFwiMzkuOTY3MDg3XCIsXG4gICAgXCJsb25nXCI6IFwiLTc1LjE3MDUxMjZcIixcbiAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uXCI6IDIyNTgsXG4gICAgXCJ0cmF2ZWxUaW1lXCI6IHtcbiAgICAgIFwidGV4dFwiOiBcIjMxIG1pbnNcIixcbiAgICAgIFwidmFsdWVcIjogMTgzM1xuICAgIH0sXG4gICAgXCJkaXN0YW5jZVwiOiB7XG4gICAgICBcInRleHRcIjogXCIxLjUgbWlcIixcbiAgICAgIFwidmFsdWVcIjogMjM0MlxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTczXCIsXG4gICAgXCJuYW1lXCI6IFwiUGl6emEgQnJhaW4vTGl0dGxlIEJhYnknc1wiLFxuICAgIFwiY2F0YWdvcnlsZXZlbDFcIjogXCJGb29kXCIsXG4gICAgXCJhZHJlc3NcIjogXCIyMzEzIEZyYW5rZm9yZCBBdmUgUGhpbGFkZWxwaGlhIFBBIDE5MTI1IFVuaXRlZCBTdGF0ZXNcIixcbiAgICBcIm5laWdoYm9yaG9vZFwiOiBcIk5vcnRoZXJuIExpYmVydGllc1wiLFxuICAgIFwibGF0XCI6IFwiMzkuOTgwNjc0NlwiLFxuICAgIFwibG9uZ1wiOiBcIi03NS4xMjgwOTY4XCIsXG4gICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvblwiOiAyMzg4LFxuICAgIFwidHJhdmVsVGltZVwiOiB7XG4gICAgICBcInRleHRcIjogXCIzNiBtaW5zXCIsXG4gICAgICBcInZhbHVlXCI6IDIxNDdcbiAgICB9LFxuICAgIFwiZGlzdGFuY2VcIjoge1xuICAgICAgXCJ0ZXh0XCI6IFwiMS44IG1pXCIsXG4gICAgICBcInZhbHVlXCI6IDI4ODlcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU4OFwiLFxuICAgIFwibmFtZVwiOiBcIkJsYWNrIE4gQnJld1wiLFxuICAgIFwiY2F0YWdvcnlsZXZlbDFcIjogXCJGb29kXCIsXG4gICAgXCJhZHJlc3NcIjogXCI1MjMgRSBQYXNzeXVuayBBdmUsIFBoaWxhZGVscGhpYSwgUEEgMTkxNDdcIixcbiAgICBcIm5laWdoYm9yaG9vZFwiOiBcIlBhc3N5dW5rIFNxdWFyZVwiLFxuICAgIFwibGF0XCI6IFwiMzkuOTQxNzYxXCIsXG4gICAgXCJsb25nXCI6IFwiLTc1LjE1MDM5MjhcIixcbiAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uXCI6IDI0NDIsXG4gICAgXCJ0cmF2ZWxUaW1lXCI6IHtcbiAgICAgIFwidGV4dFwiOiBcIjMyIG1pbnNcIixcbiAgICAgIFwidmFsdWVcIjogMTg5NlxuICAgIH0sXG4gICAgXCJkaXN0YW5jZVwiOiB7XG4gICAgICBcInRleHRcIjogXCIxLjYgbWlcIixcbiAgICAgIFwidmFsdWVcIjogMjU0OFxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTc4XCIsXG4gICAgXCJuYW1lXCI6IFwiSGFpIFN0cmVldCBLaXRjaGVuICYgQ28uXCIsXG4gICAgXCJjYXRhZ29yeWxldmVsMVwiOiBcIkZvb2RcIixcbiAgICBcImFkcmVzc1wiOiBcIjMyIFMgMTh0aCBTdCBQaGlsYWRlbHBoaWEgUEEgMTkxMDMgVW5pdGVkIFN0YXRlc1wiLFxuICAgIFwibmVpZ2hib3Job29kXCI6IFwiQ2VudGVyIENpdHksIFJpdHRlbmhvdXNlIFwiLFxuICAgIFwibGF0XCI6IFwiMzkuOTUyMTYzOFwiLFxuICAgIFwibG9uZ1wiOiBcIi03NS4xNzA0NjE5XCIsXG4gICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvblwiOiAyNTM1LFxuICAgIFwidHJhdmVsVGltZVwiOiB7XG4gICAgICBcInRleHRcIjogXCI0NCBtaW5zXCIsXG4gICAgICBcInZhbHVlXCI6IDI2NjRcbiAgICB9LFxuICAgIFwiZGlzdGFuY2VcIjoge1xuICAgICAgXCJ0ZXh0XCI6IFwiMi4xIG1pXCIsXG4gICAgICBcInZhbHVlXCI6IDM0NTBcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU3NlwiLFxuICAgIFwibmFtZVwiOiBcIlRvcnRpbGxlcmlhIFNhbiBSb21hblwiLFxuICAgIFwiY2F0YWdvcnlsZXZlbDFcIjogXCJGb29kXCIsXG4gICAgXCJhZHJlc3NcIjogXCI5NTEgUyA5dGggU3QgUGhpbGFkZWxwaGlhIFBBIDE5MTQ3IFVuaXRlZCBTdGF0ZXNcIixcbiAgICBcIm5laWdoYm9yaG9vZFwiOiBcIkl0YWxpYW4gTWFya2V0XCIsXG4gICAgXCJsYXRcIjogXCIzOS45Mzc2Mzk2XCIsXG4gICAgXCJsb25nXCI6IFwiLTc1LjE1Nzk4OVwiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjogMzA3MSxcbiAgICBcInRyYXZlbFRpbWVcIjoge1xuICAgICAgXCJ0ZXh0XCI6IFwiNDQgbWluc1wiLFxuICAgICAgXCJ2YWx1ZVwiOiAyNjU1XG4gICAgfSxcbiAgICBcImRpc3RhbmNlXCI6IHtcbiAgICAgIFwidGV4dFwiOiBcIjIuMiBtaVwiLFxuICAgICAgXCJ2YWx1ZVwiOiAzNTUwXG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNmZcIixcbiAgICBcIm5hbWVcIjogXCJIYXJkZW5hXCIsXG4gICAgXCJjYXRhZ29yeWxldmVsMVwiOiBcIkZvb2RcIixcbiAgICBcImFkcmVzc1wiOiBcIjc1NCBTIEhpY2tzIFN0LCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ1XCIsXG4gICAgXCJuZWlnaGJvcmhvb2RcIjogXCJTb3V0aCBQaGlsbHlcIixcbiAgICBcImxhdFwiOiBcIjM5Ljk0MTY4NlwiLFxuICAgIFwibG9uZ1wiOiBcIi03NS4xNjg0MTg0XCIsXG4gICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvblwiOiAzMTQ5LFxuICAgIFwidHJhdmVsVGltZVwiOiB7XG4gICAgICBcInRleHRcIjogXCI1MyBtaW5zXCIsXG4gICAgICBcInZhbHVlXCI6IDMxODVcbiAgICB9LFxuICAgIFwiZGlzdGFuY2VcIjoge1xuICAgICAgXCJ0ZXh0XCI6IFwiMi42IG1pXCIsXG4gICAgICBcInZhbHVlXCI6IDQxOThcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU5M1wiLFxuICAgIFwibmFtZVwiOiBcIjFzdCBPcmllbnRhbCBTdXBlcm1hcmtldFwiLFxuICAgIFwiY2F0YWdvcnlsZXZlbDFcIjogXCJGb29kXCIsXG4gICAgXCJhZHJlc3NcIjogXCIxMTExIFMgNnRoIFN0IFBoaWxhZGVscGhpYSwgUEEgMTkxNDdcIixcbiAgICBcIm5laWdoYm9yaG9vZFwiOiBcIkdyZHVhdGUgSG9zcGl0YWxcIixcbiAgICBcImxhdFwiOiBcIjM5LjkzNDAxNThcIixcbiAgICBcImxvbmdcIjogXCItNzUuMTUzNjg1MVwiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjogMzM0MyxcbiAgICBcInRyYXZlbFRpbWVcIjoge1xuICAgICAgXCJ0ZXh0XCI6IFwiNDQgbWluc1wiLFxuICAgICAgXCJ2YWx1ZVwiOiAyNjU3XG4gICAgfSxcbiAgICBcImRpc3RhbmNlXCI6IHtcbiAgICAgIFwidGV4dFwiOiBcIjIuMiBtaVwiLFxuICAgICAgXCJ2YWx1ZVwiOiAzNTU2XG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllODBcIixcbiAgICBcIm5hbWVcIjogXCJGZWRlcmFsIERvbnV0c1wiLFxuICAgIFwiY2F0YWdvcnlsZXZlbDFcIjogXCJGb29kXCIsXG4gICAgXCJhZHJlc3NcIjogXCIxMjE5IFMgMm5kIFN0IFBoaWxhZGVscGhpYSBQQSAxOTE0NyBVbml0ZWQgU3RhdGVzXCIsXG4gICAgXCJuZWlnaGJvcmhvb2RcIjogXCJQZW5ucyBQb3J0XCIsXG4gICAgXCJsYXRcIjogXCIzOS45MzIyMDk4XCIsXG4gICAgXCJsb25nXCI6IFwiLTc1LjE0NzQ2MDNcIixcbiAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uXCI6IDM0NjAsXG4gICAgXCJ0cmF2ZWxUaW1lXCI6IHtcbiAgICAgIFwidGV4dFwiOiBcIjQ2IG1pbnNcIixcbiAgICAgIFwidmFsdWVcIjogMjc1MlxuICAgIH0sXG4gICAgXCJkaXN0YW5jZVwiOiB7XG4gICAgICBcInRleHRcIjogXCIyLjMgbWlcIixcbiAgICAgIFwidmFsdWVcIjogMzcwNFxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTcxXCIsXG4gICAgXCJuYW1lXCI6IFwiTmFtIFNvbiBCYWtlcnlcIixcbiAgICBcImNhdGFnb3J5bGV2ZWwxXCI6IFwiRm9vZFwiLFxuICAgIFwiYWRyZXNzXCI6IFwiMTYwMSBXYXNoaW5ndG9uIEF2ZSBQaGlsYWRlbHBoaWEgUEEgMTkxNDYgVW5pdGVkIFN0YXRlc1wiLFxuICAgIFwibmVpZ2hib3Job29kXCI6IFwiR3JhZHVhdGUgSG9zcGl0YWxcIixcbiAgICBcImxhdFwiOiBcIjM5LjkzOTIwOTRcIixcbiAgICBcImxvbmdcIjogXCItNzUuMTcwMjY0XCIsXG4gICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvblwiOiAzNDYxLFxuICAgIFwidHJhdmVsVGltZVwiOiB7XG4gICAgICBcInRleHRcIjogXCI1OCBtaW5zXCIsXG4gICAgICBcInZhbHVlXCI6IDM0NzBcbiAgICB9LFxuICAgIFwiZGlzdGFuY2VcIjoge1xuICAgICAgXCJ0ZXh0XCI6IFwiMi44IG1pXCIsXG4gICAgICBcInZhbHVlXCI6IDQ1NzlcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU3MlwiLFxuICAgIFwibmFtZVwiOiBcIkJyZWV6eSdzIENhZmVcIixcbiAgICBcImNhdGFnb3J5bGV2ZWwxXCI6IFwiRm9vZFwiLFxuICAgIFwiYWRyZXNzXCI6IFwiMTIwMCBQb2ludCBCcmVlemUgQXZlIFBoaWxhZGVscGhpYSBQQSAxOTE0NiBVbml0ZWQgU3RhdGVzXCIsXG4gICAgXCJuZWlnaGJvcmhvb2RcIjogXCJQb2ludCBCcmVlemVcIixcbiAgICBcImxhdFwiOiBcIjM5LjkzNzIzNzJcIixcbiAgICBcImxvbmdcIjogXCItNzUuMTc3MTA3M1wiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjogNDAxNCxcbiAgICBcInRyYXZlbFRpbWVcIjoge1xuICAgICAgXCJ0ZXh0XCI6IFwiMSBob3VyIDcgbWluc1wiLFxuICAgICAgXCJ2YWx1ZVwiOiA0MDMxXG4gICAgfSxcbiAgICBcImRpc3RhbmNlXCI6IHtcbiAgICAgIFwidGV4dFwiOiBcIjMuMyBtaVwiLFxuICAgICAgXCJ2YWx1ZVwiOiA1MzI0XG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllODFcIixcbiAgICBcIm5hbWVcIjogXCJCaW5nIEJpbmcgRGltIFN1bVwiLFxuICAgIFwiY2F0YWdvcnlsZXZlbDFcIjogXCJGb29kXCIsXG4gICAgXCJhZHJlc3NcIjogXCIxNjQ4IEUgUGFzc3l1bmsgQXZlIFBoaWxhZGVscGhpYSBQQSAxOTE0OCBVbml0ZWQgU3RhdGVzXCIsXG4gICAgXCJuZWlnaGJvcmhvb2RcIjogXCJQYXNzeXVuayBTcXVhcmVcIixcbiAgICBcImxhdFwiOiBcIjM5LjkyODk1OVwiLFxuICAgIFwibG9uZ1wiOiBcIi03NS4xNjQ3MDkyXCIsXG4gICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvblwiOiA0MTgzLFxuICAgIFwidHJhdmVsVGltZVwiOiB7XG4gICAgICBcInRleHRcIjogXCI1NiBtaW5zXCIsXG4gICAgICBcInZhbHVlXCI6IDMzNjNcbiAgICB9LFxuICAgIFwiZGlzdGFuY2VcIjoge1xuICAgICAgXCJ0ZXh0XCI6IFwiMi44IG1pXCIsXG4gICAgICBcInZhbHVlXCI6IDQ0NzlcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWVhN1wiLFxuICAgIFwibmFtZVwiOiBcIkNpbmVtdWdcIixcbiAgICBcImNhdGFnb3J5bGV2ZWwxXCI6IFwiRm9vZFwiLFxuICAgIFwiYWRyZXNzXCI6IFwicyAxOTE0OCwgMTYwNyBTIEJyb2FkIFN0LCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ4XCIsXG4gICAgXCJuZWlnaGJvcmhvb2RcIjogXCJOZXdib2xkXCIsXG4gICAgXCJsYXRcIjogXCIzOS45MzAxODM5XCIsXG4gICAgXCJsb25nXCI6IFwiLTc1LjE2ODAwNlwiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjogNDE4NyxcbiAgICBcInRyYXZlbFRpbWVcIjoge1xuICAgICAgXCJ0ZXh0XCI6IFwiNTkgbWluc1wiLFxuICAgICAgXCJ2YWx1ZVwiOiAzNTQxXG4gICAgfSxcbiAgICBcImRpc3RhbmNlXCI6IHtcbiAgICAgIFwidGV4dFwiOiBcIjIuOSBtaVwiLFxuICAgICAgXCJ2YWx1ZVwiOiA0NzI5XG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllYTBcIixcbiAgICBcIm5hbWVcIjogXCJLICYgQSBTYW5kd2ljaGVzICYgR3JvY2VyeVwiLFxuICAgIFwiY2F0YWdvcnlsZXZlbDFcIjogXCJGb29kXCIsXG4gICAgXCJhZHJlc3NcIjogXCIxNDM5IFMgMjB0aCBTdCwgUGhpbGFkZWxwaGlhLCBQQSAxOTE0NlwiLFxuICAgIFwibmVpZ2hib3Job29kXCI6IFwiUG9pbnQgQnJlZXplXCIsXG4gICAgXCJsYXRcIjogXCIzOS45MzMwMDEyXCIsXG4gICAgXCJsb25nXCI6IFwiLTc1LjE3NzQ3NDhcIixcbiAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uXCI6IDQzODUsXG4gICAgXCJ0cmF2ZWxUaW1lXCI6IHtcbiAgICAgIFwidGV4dFwiOiBcIjEgaG91ciA5IG1pbnNcIixcbiAgICAgIFwidmFsdWVcIjogNDE1MVxuICAgIH0sXG4gICAgXCJkaXN0YW5jZVwiOiB7XG4gICAgICBcInRleHRcIjogXCIzLjQgbWlcIixcbiAgICAgIFwidmFsdWVcIjogNTQ5N1xuICAgIH1cbiAgfSxcbiAge1xuICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTZlXCIsXG4gICAgXCJuYW1lXCI6IFwiTG9zIEdhbGxvc1wiLFxuICAgIFwiY2F0YWdvcnlsZXZlbDFcIjogXCJGb29kXCIsXG4gICAgXCJhZHJlc3NcIjogXCI5NTEgV29sZiBTdCBQaGlsYWRlbHBoaWEgUEEgMTkxNDggVW5pdGVkIFN0YXRlc1wiLFxuICAgIFwibmVpZ2hib3Job29kXCI6IFwiU291dGggUGhpbGx5XCIsXG4gICAgXCJsYXRcIjogXCIzOS45MjExNzhcIixcbiAgICBcImxvbmdcIjogXCItNzUuMTYzMjU5OVwiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjogNDk0MixcbiAgICBcInRyYXZlbFRpbWVcIjoge1xuICAgICAgXCJ0ZXh0XCI6IFwiMSBob3VyIDUgbWluc1wiLFxuICAgICAgXCJ2YWx1ZVwiOiAzOTA4XG4gICAgfSxcbiAgICBcImRpc3RhbmNlXCI6IHtcbiAgICAgIFwidGV4dFwiOiBcIjMuMyBtaVwiLFxuICAgICAgXCJ2YWx1ZVwiOiA1MjMyXG4gICAgfVxuICB9XSIsIid1c2Ugc3RyaWN0JztcblxuLy8gYW5ndWxhciBtb2R1bGVzXG4vLyByZXF1aXJlKCdhbmd1bGFyLW1vZHVsZS1zYW5pdGl6ZScpO1xuLy8gcmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcblxucmVxdWlyZSgnLi9jb250cm9sbGVycy9faW5kZXgnKTtcbnJlcXVpcmUoJy4vc2VydmljZXMvX2luZGV4Jyk7XG5yZXF1aXJlKCcuL21vZGVscy9faW5kZXgnKTtcbnJlcXVpcmUoJy4vZGlyZWN0aXZlcy9faW5kZXgnKTtcblxucmVxdWlyZSgnLi4vYm93ZXJfY29tcG9uZW50cy9uZy1rbm9iL2Rpc3Qvbmcta25vYi5taW4nKTtcbnJlcXVpcmUoJy4uL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1hbmltYXRlL2FuZ3VsYXItYW5pbWF0ZS5taW4nKTtcbnJlcXVpcmUoJy4uL2Jvd2VyX2NvbXBvbmVudHMvaW9uaWMtYWR2YW5jZWQtY2Fyb3VzZWwvc3JjL2FkdmFuY2VkLWNhcm91c2VsJyk7XG5cblxuXG4vLyBjcmVhdGUgYW5kIGJvb3RzdHJhcCBhcHBsaWNhdGlvblxuYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICB2YXIgcmVxdWlyZXMgPSBbXG4gICAgJ2lvbmljJyxcbiAgICAnYXBwLmNvbnRyb2xsZXJzJyxcbiAgICAnYXBwLnNlcnZpY2VzJyxcbiAgICAnYXBwLm1vZGVscycsXG4gICAgJ2FwcC5kaXJlY3RpdmVzJyxcbiAgICAndWkucm91dGVyJyxcbiAgICAndWkua25vYicsXG4gICAgJ2FDYXJvdXNlbCcsXG4gICAgJ25nQW5pbWF0ZSdcbiAgICAvLyAndGVtcGxhdGVzJyxcbiAgICAvLyAnbmdTYW5pdGl6ZScsXG4gIF07XG5cbiAgLy8gbW91bnQgb24gd2luZG93IGZvciB0ZXN0aW5nXG4gIHdpbmRvdy5hcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgcmVxdWlyZXMpO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb25zdGFudCgnQXBwU2V0dGluZ3MnLCByZXF1aXJlKCcuL2NvbnN0YW50cy5kZXZlbG9wbWVudCcpKTtcblxuICBhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29uZmlnKHJlcXVpcmUoJy4vb25fY29uZmlnJykpO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5ydW4ocmVxdWlyZSgnLi9vbl9ydW4nKSk7XG5cblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGFuZ3VsYXIuYm9vdHN0cmFwKGRvY3VtZW50LCBbJ2FwcCddKTsgICBcbiAgfSwgKDEwMDApKTtcbiAgXG5cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFwcFNldHRpbmdzID0ge1xuICB5b2NhbEFQSTp7XG4gICAgYmFzZTogJ2h0dHA6Ly95b2VuZHBvaW50NC13YmJzLnJoY2xvdWQuY29tL2FwaS92MS95b2thbC9kYXRhLydcbiAgICAvLyBiYXNlOiAnaHR0cDovL2xvY2FsaG9zdDo4MTAwL2FwaS92MS95b2thbC9kYXRhLydcbiAgfSxcblxuICBHTUFQX0RFRkFVTFQ6e1xuICBcdFJBRElVUzogODAwLFxuICBcdFpPT006ICAgMTQsXG4gIFx0VEhFTUU6e1xuICBcdFx0bGlnaHQ6W3tcImZlYXR1cmVUeXBlXCI6XCJwb2lcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wic3R5bGVyc1wiOlt7XCJzYXR1cmF0aW9uXCI6LTcwfSx7XCJsaWdodG5lc3NcIjozN30se1wiZ2FtbWFcIjoxLjE1fV19LHtcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHNcIixcInN0eWxlcnNcIjpbe1wiZ2FtbWFcIjowLjI2fSx7XCJ2aXNpYmlsaXR5XCI6XCJvZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZFwiLFwic3R5bGVyc1wiOlt7XCJsaWdodG5lc3NcIjowfSx7XCJzYXR1cmF0aW9uXCI6MH0se1wiaHVlXCI6XCIjZmZmZmZmXCJ9LHtcImdhbW1hXCI6MH1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZFwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVscy50ZXh0LnN0cm9rZVwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZC5hcnRlcmlhbFwiLFwiZWxlbWVudFR5cGVcIjpcImdlb21ldHJ5XCIsXCJzdHlsZXJzXCI6W3tcImxpZ2h0bmVzc1wiOjIwfV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmhpZ2h3YXlcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeVwiLFwic3R5bGVyc1wiOlt7XCJsaWdodG5lc3NcIjo1MH0se1wic2F0dXJhdGlvblwiOjB9LHtcImh1ZVwiOlwiI2ZmZmZmZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZS5wcm92aW5jZVwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvblwifSx7XCJsaWdodG5lc3NcIjotNTB9XX0se1wiZmVhdHVyZVR5cGVcIjpcImFkbWluaXN0cmF0aXZlLnByb3ZpbmNlXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9mZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZS5wcm92aW5jZVwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVscy50ZXh0XCIsXCJzdHlsZXJzXCI6W3tcImxpZ2h0bmVzc1wiOjIwfV19XVxuICBcdH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBTZXR0aW5nczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEFwcEN0cmwoJGxvZywgJHJvb3RTY29wZSwgJHNjb3BlLCAkaW9uaWNNb2RhbCwgJHRpbWVvdXQsIGNvb3JkaW5hdGVzLCBBcHBTZXR0aW5ncykge1xuXG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdBcHBDdHJsJyk7XG5cbiAgdmFyIHZtID0gdGhpcztcbiAgLy8gc2V0IGN1cmVudCBwb3NpdGlvbiB0byByb290U2NvcGUgdG8gbWFrZSBnbG9iYWxseSBhdmFpbGFibGUgXG4gICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uID0gY29vcmRpbmF0ZXM7XG4gIFxuXG4gIC8vIEZvcm0gZGF0YSBmb3IgdGhlIGxvZ2luIG1vZGFsXG4gICRzY29wZS5sb2dpbkRhdGEgPSB7fTtcblxuICAvLyBDcmVhdGUgdGhlIGxvZ2luIG1vZGFsIHRoYXQgd2Ugd2lsbCB1c2UgbGF0ZXJcbiAgJGlvbmljTW9kYWwuZnJvbVRlbXBsYXRlVXJsKCd0ZW1wbGF0ZXMvbG9naW4uaHRtbCcsIHtcbiAgICBzY29wZTogJHNjb3BlXG4gIH0pLnRoZW4oZnVuY3Rpb24obW9kYWwpIHtcbiAgICAkc2NvcGUubW9kYWwgPSBtb2RhbDtcbiAgfSk7XG5cbiAgLy8gVHJpZ2dlcmVkIGluIHRoZSBsb2dpbiBtb2RhbCB0byBjbG9zZSBpdFxuICAkc2NvcGUuY2xvc2VMb2dpbiA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5tb2RhbC5oaWRlKCk7XG4gIH07XG5cbiAgLy8gT3BlbiB0aGUgbG9naW4gbW9kYWxcbiAgJHNjb3BlLmxvZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLm1vZGFsLnNob3coKTtcbiAgfTtcblxuICAvLyBQZXJmb3JtIHRoZSBsb2dpbiBhY3Rpb24gd2hlbiB0aGUgdXNlciBzdWJtaXRzIHRoZSBsb2dpbiBmb3JtXG4gICRzY29wZS5kb0xvZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ0RvaW5nIGxvZ2luJywgJHNjb3BlLmxvZ2luRGF0YSk7XG5cbiAgICAvLyBTaW11bGF0ZSBhIGxvZ2luIGRlbGF5LiBSZW1vdmUgdGhpcyBhbmQgcmVwbGFjZSB3aXRoIHlvdXIgbG9naW5cbiAgICAvLyBjb2RlIGlmIHVzaW5nIGEgbG9naW4gc3lzdGVtXG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAkc2NvcGUuY2xvc2VMb2dpbigpO1xuICAgIH0sIDEwMDApO1xuICB9O1xuXG4gIFxuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdBcHBDdHJsJywgQXBwQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBCcm93c2VDdHJsKCRzY29wZSwgJHJvb3RTY29wZSwgJHEsICRodHRwLCAkbG9nLCAkZmlsdGVyLCAkdGltZW91dCwgTG9jYXRpb25zU2VydmljZSwgICRpb25pY0xvYWRpbmcsICAkaW9uaWNTbGlkZUJveERlbGVnYXRlLCBBcHBTZXR0aW5ncykge1xuICAgICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdCcm93c2VDdHJsJyk7XG5cbiBcdC8vIFZpZXdNb2RlbFxuICBcdHZhciB2bSA9IHRoaXM7XG4gICAgdm0ucmFkaXVzID0gQXBwU2V0dGluZ3MuR01BUF9SQURJVVM7XG4gICAgJHNjb3BlLnJhZGl1cyA9IEFwcFNldHRpbmdzLkdNQVBfUkFESVVTO1xuICAgICRzY29wZS5DdXJyZW50Q29vcmRzID0gICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uO1xuXG4gICAgJHNjb3BlLmxvY2F0aW9ucyA9W107XG4gICAgJHNjb3BlLmxvY2F0aW9uc19ncm91cHMgPVtdO1xuICAgICRzY29wZS5sb2NhdGlvbnNfbG9hZGVkID0gMDsgXG4gICAgJHNjb3BlLmNhcm91c2VscyA9IFtdO1xuXG4gICAgJGlvbmljTG9hZGluZy5zaG93KHtcbiAgICAgICAgdGVtcGxhdGU6IFwiRmluZGluZyBSYWQgU3BvdHMgLi4uXCIsXG4gICAgICAgIGJhY2tkcm9wOiB0cnVlXG4gICAgfSk7XG5cbiAgICAkc2NvcGUuY2Fyb3VzZWxPcHRpb25zID0ge1xuICAgICAgICB0ZW1wbGF0ZSAgICAgIDogJy4uL3RlbXBsYXRlcy9sb2NhdGlvbnMtY2Fyb3VzZWwuaXRlbS5odG1sJywgLy8gdGVtcGxhdGVVcmwgaW4gY2FzZSB5b3UgZG9uJ3QgbmVlZCB0byBwYXNzIGEgZGlyZWN0aXZlIGJ1dCBqdXN0IGEgaHRtbCB2aWV3XG4gICAgICAgIGFsaWduICAgICAgICAgOiAnbGVmdCcsIC8vIGFsaWduZW1lbnQgb2YgdGhlIGNhcm91c2VsXG4gICAgICAgIHNlbGVjdEZpcnN0ICAgOiB0cnVlLFxuICAgICAgICBjZW50ZXJPblNlbGVjdDogZmFsc2UsIC8vIGNlbnRlciBjYXJvdXNlbCB3aGVuIGFuIGl0ZW0gaXMgc2VsZWN0ZWRcbiAgICB9O1xuXG4gICAgJHNjb3BlLm9uU2VsZWN0Q2Fyb3VzZWwgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBjYXQgPSAkc2NvcGUuZ2V0X2NhdGVnb3J5X3NsdWcoaXRlbS5jYXRhZ29yeWxldmVsMSk7XG4gICAgICAgICRsb2cubG9nKCdDYXJvdXNlbCAnK2NhdCsnIGl0ZW0gc2VsZWN0ZWQ6e25hbWV9JywgaXRlbSk7XG4gICAgICAgICRzY29wZS5jYXJvdXNlbHNbY2F0XS5pdGVtU2VsZWN0ZWQgPSBpdGVtO1xuICAgIH07XG5cbiAgICAkc2NvcGUucmFuZG9FeHBlbnNlV2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKzEpOyAgXG4gICAgfTtcbiAgICBcbiAgICAkc2NvcGUuZ2V0X2NhdGVnb3J5X3NsdWcgPSBmdW5jdGlvbiAoY2F0X25hbWUpIHtcbiAgICAgICAgcmV0dXJuIGNhdF9uYW1lLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uKGNhdCkgeyByZXR1cm4gY2F0LnRvTG93ZXJDYXNlKCkudHJpbSgpOyB9KS5qb2luKCctJyk7XG4gICAgfVxuXG4gICAgTG9jYXRpb25zU2VydmljZS5hbGwoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvY2F0aW9ucyA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdyb3VwIGxvY2F0aW9ucyBieSBjYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IHRyYXZlbFRpbWUgZm9yIGVhY2ggbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBjYXJvdXNlbE9wdGlvbnMgZm9yIGVhY2ggY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2NhdGlvbnNfZ3JvdXBzID0gXy5jaGFpbihkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ncm91cEJ5KFwiY2F0YWdvcnlsZXZlbDFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGxvY2F0aW9ucywgY2F0LCBhcnJheSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9ucy5tYXAoZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2NhdGlvbnNfbG9hZGVkKys7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwxMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeV9zbHVnOiAkc2NvcGUuZ2V0X2NhdGVnb3J5X3NsdWcoY2F0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uczogbG9jYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGNhdGVnb3J5X29iaikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYXRlZ29yeV9vYmo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgnbG9jYXRpb25zX2xvYWRlZCcsZnVuY3Rpb24obmV3X3ZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG5ld192YWwgPT0gZGF0YS5sZW5ndGgpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvcnQgbG9jYXRpb24gZ3JvdXBzIGFscGFoYmV0aWNhbGx5IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzb3J0IGdyb3VwIGxvY2F0aW9ucyBieSB0cmF2ZWxUaW1lLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2NhdGlvbnNfZ3JvdXBzX3NvcnRlZCA9IF8uY2hhaW4oJHNjb3BlLmxvY2F0aW9uc19ncm91cHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNvcnRlZF9sb2NhdGlvbnMgPSAkZmlsdGVyKCdvcmRlckJ5JykoZ3JvdXAubG9jYXRpb25zLCAndHJhdmVsVGltZS52YWx1ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyLmV4dGVuZCh7fSxncm91cCwge2xvY2F0aW9uczpzb3J0ZWRfbG9jYXRpb25zfSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0QnkoJ2NhdGVnb3J5JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24oY2F0ZWdvcnlfb2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmNhcm91c2Vsc1tjYXRlZ29yeV9vYmouY2F0ZWdvcnlfc2x1Z10gPSBhbmd1bGFyLmV4dGVuZCh7fSwge2Nhcm91c2VsSWQ6ICdsb2NhdGlvbnMtY2Fyb3VzZWwtJytjYXRlZ29yeV9vYmouY2F0ZWdvcnlfc2x1ZywgaXRlbVNlbGVjdGVkOl8uZmlyc3QoY2F0ZWdvcnlfb2JqLmxvY2F0aW9ucyl9LCAkc2NvcGUuY2Fyb3VzZWxPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2F0ZWdvcnlfb2JqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW9uaWNMb2FkaW5nLmhpZGUoKTsgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgIFx0ICAgICAgICAgICAgICAgIH0pO1xuXG5cblxufTtcblxuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdCcm93c2VDdHJsJywgQnJvd3NlQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBDb25uZWN0Q3RybCgkbG9nLCAkcm9vdFNjb3BlLCAkc2NvcGUsIEFwcFNldHRpbmdzKSB7XG5cbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0Nvbm5lY3RDdHJsJyk7XG5cbiAgdmFyIHZtID0gdGhpcztcblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignQ29ubmVjdEN0cmwnLCBDb25uZWN0Q3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBMb2dpbkN0cmwoJGxvZywgJHJvb3RTY29wZSwgJHNjb3BlLCBBcHBTZXR0aW5ncykge1xuXG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdMb2dpbkN0cmwnKTtcblxuICB2YXIgdm0gPSB0aGlzO1xuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBMb2dpbkN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBNYXBDdHJsKCRyb290U2NvcGUsICRzY29wZSwgJHRpbWVvdXQsICRsb2csICRpb25pY0xvYWRpbmcsIEFwcFNldHRpbmdzLCBHTWFwLCBMb2NhdGlvbnNTZXJ2aWNlLCAkaW9uaWNTbGlkZUJveERlbGVnYXRlLCAkaW9uaWNHZXN0dXJlKSB7XG5cbiAgICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZShcIk1hcEN0cmxcIiwgdHJ1ZSk7XG4gICAgXG4gXHQgIC8vIFZpZXdNb2RlbFxuICBcdHZhciB2bSA9IHRoaXM7XG4gICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIFZNIGRlZmF1bHRzICAgXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICB2YXIgY3VycmVudENlbnRlciA9ICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uLmNvb3JkcztcblxuICAgICRyb290U2NvcGUuYWN0aXZlTG9jYXRpb24gPSBudWxsO1xuXG4gICAgLyogR29vZ2xlIE1hcCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgIHZtLmdtYXAgPSBuZXcgR01hcCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB6b29tOiAgIDEzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogdm0udGhpc19yYWRpdXMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBBcHBTZXR0aW5ncy5HTUFQX0RFRkFVTFQuVEhFTUUubGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICB9KTsgICAgXG4gICAgJHJvb3RTY29wZS5nbWFwID0gdm0uZ21hcDtcbiAgICBcbiAgICB2bS5nbWFwLmhlaWdodCA9IDU3NSxcbiAgICB2bS5nbWFwLm1hcmtlcnMgPSBbXTtcbiAgICB2bS5nbWFwLnJvdXRlcyA9IFtdOyBcblxuICAgICAvLyBkcm9wIG1hcmtlciBvbiBjdXJyZW50IHBvc2l0aW9uXG4gICAgdm0uZ21hcC5kcm9wTWFya2VyKHtcbiAgICAgICAgICAgICAgbWFwOiAgICB2bS5nbWFwLm1hcCxcbiAgICAgICAgICAgICAgY2VudGVyOiB7bGF0OiBjdXJyZW50Q2VudGVyLmxhdGl0dWRlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgbG5nOiBjdXJyZW50Q2VudGVyLmxvbmdpdHVkZSBcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvcGFjaXR5OjEsXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgXG5cbiAgICBcbiAgICAvKiBMb2NhaXRvbnMgQ29sbGVjdGlvbnMgYW5kIE1ldGEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICB2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UgPSBbXTtcbiAgICB2bS5sb2NhdGlvbnNfY2F0ZWdvcmllcyA9IHtcbiAgICAgIGRpc3RhbmNlOiA4MCxcbiAgICAgIGN1cnJlbnQ6ICBudWxsLFxuICAgICAgbGlzdDogW1xuICAgICAgICAgICAgICB7bmFtZTogJ0FydHMnfSxcbiAgICAgICAgICAgICAge25hbWU6ICdEcmluayd9LFxuICAgICAgICAgICAgICB7bmFtZTogJ0Zvb2QnfVxuICAgICAgICAgICAgXVxuICAgIH07XG4gICAgdm0uZGlzY292ZXJDYXRzRXhwYW5kZWQgPSBmYWxzZTtcbiAgICBcblxuICAgIC8qIFVJIEtub2JzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICAgLy8gcmFkaXVzIGtub2IgXG4gICAgdm0ua25vYiA9IHsgXG4gICAgICAgICAgICAgICBvcHRpb25zOnsgIGR5bmFtaWNPcHRpb25zOiB0cnVlIH0gXG4gICAgICAgICAgICAgIH07XG4gICAgLy8gc2xpZGVyLW1ldGFOYXYgZGlzdGFuY2Uga25vYlxuICAgIHZtLmRpc3RhbmNlX2tub2IgPXtcbiAgICAgICAgICAgICAgb3B0aW9uczp7XG4gICAgICAgICAgICAgICAgcmVhZE9ubHk6ICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgZHluYW1pY09wdGlvbnM6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlzcGxheUlucHV0OiAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIHNpemU6ICAgICAgICAgICAzMCxcbiAgICAgICAgICAgICAgICBtaW46ICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICBtYXg6ICAgICAgICAgICAgODAsLy9ob3VyIGFuZCBhIGhhbGZcbiAgICAgICAgICAgICAgICBzdGVwOiAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICBiYXJDb2xvcjogICAgICAgJyM1QkMwMUUnLFxuICAgICAgICAgICAgICAgIHRyYWNrQ29sb3I6ICAgICAnIzIxMjEyMScsXG4gICAgICAgICAgICAgICAgdHJhY2tXaWR0aDogICAgIDMsXG4gICAgICAgICAgICAgICAgYmFyV2lkdGg6ICAgICAgIDZcbiAgICAgICAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qIExjb2F0aW9ucyBjYXJkIHNsaWRlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgIHZtLnNsaWRlciA9e1xuICAgICAgc2hvd246ICAgICAgZmFsc2UsXG4gICAgICBkZXRhaWxWaWV3OiBmYWxzZSxcbiAgICAgIG1ldGE6ICAgICAgIHtcbiAgICAgICAgY2F0ZWdvcnk6ICAgICAnJyxcbiAgICAgICAgdHJhdmVsVGltZTogICAnJyxcbiAgICAgICAgbmVpZ2hib3Job29kOiAnJ1xuICAgICAgfSxcbiAgICAgIGFjdGl2ZVNsaWRlOnt9XG4gICAgfTtcblxuXG5cblxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBQdWJsaWMgbWV0aG9kcyAtIGF2YWlsYWJlIGluIHRlbXBsYXRlcyBcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgIFxuICAgIFxuICAgIC8qKlxuICAgICAqIExvYWQgbG9jYXRpb25zIG9mIGEgc3BlY2lmaWMgY2F0ZWdvcnkgd2l0aGluIGEgc3BlY2lmaWVkIHJhZGlzdSBvZiB1c2VycyBjdXJyZW50IGxvYWNhdGlvblxuICAgICAqIGFuZCB0aGVuIHBvcHVsYXRlIHRoZSB2bSBhbmQgdWkgd2l0aCByZXR1cm5lZCBkYXRhXG4gICAgICogIFxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGNhdGVnb3J5IC0gY2F0ZWdvcnkgb2JqZWN0IG9mIExvYWN0aW9ucyB0byBsb2FkXG4gICAgICovXG4gICAgdm0ubG9hZF9jYXRlZ29yeSA9IGZ1bmN0aW9uKGNhdGVnb3J5KSB7XG5cbiAgICAgICRsb2cubG9nKCdsb2FkX2NhdGVnb3J5OiB7bmFtZX0nLGNhdGVnb3J5KTtcbiAgICAgIFxuICAgICAgLy8gcmVzZXQgbG9jYXRpb25zLCBtYXJrZXJzLCBhbmQgcmFkaXVzXG4gICAgICB2bS5nbWFwLm1hcC5zZXRPcHRpb25zKHtzdHlsZXM6bnVsbH0pO1xuICAgICAgdm0uZ21hcC5tYXJrZXJzLm1hcChfY2xlYXJGcm9tTWFwKTtcbiAgICAgIHZtLmdtYXAubWFya2VycyA9IFtdO1xuICAgICAgdm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlID1bXTtcbiAgICAgIHZtLnRoaXNfcmFkaXVzID0gNTAwMDtcbiAgICAgIGlmICh2bS5sb2NhdGlvbnNSYWRpdXMpIHZtLmxvY2F0aW9uc1JhZGl1cy5zZXRWaXNpYmxlKGZhbHNlKTtcblxuICAgICAgLy8gc2hvdyBpb25pYyBsb2FkZXJcbiAgICAgICRpb25pY0xvYWRpbmcuc2hvdyh7XG4gICAgICAgIHRlbXBsYXRlOiBcIkV4cGxvcmluZyBZb3VyIEFyZWEgLi4uXCIsXG4gICAgICAgIGJhY2tkcm9wOiB0cnVlXG4gICAgICB9KTtcblxuXG4gICAgICAvLyBnZXQgYWxsIGxvY2F0aW9ucyBhcm91bmQgc3BlY2lmaWVkIGFyZWFcbiAgICAgIExvY2F0aW9uc1NlcnZpY2VcbiAgICAgICAgLmdldCh7XG4gICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeS5uYW1lLFxuICAgICAgICAgICAgICByYWRpdXM6ICAgNTAwMCwgXG4gICAgICAgICAgICAgIGxhdDogICAgICBjdXJyZW50Q2VudGVyLmxhdGl0dWRlLCBcbiAgICAgICAgICAgICAgbG5nOiAgICAgIGN1cnJlbnRDZW50ZXIubG9uZ2l0dWRlXG4gICAgICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihsb2NhdGlvbnMpIHtcblxuICAgICAgICAgIHZtLmxvY2F0aW9uc19jYXRlZ29yaWVzLmRpc3RhbmNlID0gMDtcbiAgICAgICAgICAvLyB2bS5sb2NhdGlvbnNfbG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICB2bS5kaXNjb3ZlckNhdHNFeHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICAgIHZtLmxvY2F0aW9uc19jYXRlZ29yaWVzLmN1cnJlbnQgPSBjYXRlZ29yeTtcblxuICAgICAgICAgIC8vIHNvcnQgbG9jYXRpb25zIGJ5IGRpc3RuYWNlIFxuICAgICAgICAgIHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZSA9IF8uc29ydEJ5KGxvY2F0aW9ucywgJ2Rpc3RhbmNlZnJvbWxvY2F0aW9uJyk7XG4gICAgICAgICAgIFxuXG4gICAgICAgICAgLy8gc2V0IGFsbCBtYXJrZXJzIG9uIG1hcFxuICAgICAgICAgIF9zZXRNYXJrZXJzKHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZSk7ICBcblxuICAgICAgICAgIC8vIHNldCB0aGUgbG9jYXRpb25zIHJhZGl1cyBhbmQga25vYiB2YWx1ZSB0byB0aGUgY2xvc2VzIGxvY3Rpb24gdG8gdGVzdFxuICAgICAgICAgIHZtLnRoaXNfcmFkaXVzID0gXy5maXJzdCh2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UpLnRyYXZlbFRpbWUudmFsdWUrMjAwO1xuICAgICAgICAgIHZtLmxvY2F0aW9uc1JhZGl1cyA9IHZtLmdtYXAuc2V0UmFkaXVzQ2lyY2xlKHtyYWRpdXM6IHZtLnRoaXNfcmFkaXVzfSk7XG4gICAgICAgICAgdm0uZ21hcC5tYXAuZml0Qm91bmRzKHZtLmxvY2F0aW9uc1JhZGl1cy5nZXRCb3VuZHMoKSk7XG5cbiAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgdHJhdmVsIHJhdGUgYmFzZWQgb24gdGhlIHRpbWUgdG8gdG8gdGhlIGZ1cnRoZXJlc3QgTG9jYXRpb25cbiAgICAgICAgICB2bS50cmF2ZWxSYXRlID0gdm0ubWV0ZXJzUGVyTWluKF8ubGFzdCh2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UpLnRyYXZlbFRpbWUpO1xuICAgICAgICAgIHZtLmRpc3RhbmNlX2tub2IudmFsdWUgPSBNYXRoLmNlaWwodm0udGhpc19yYWRpdXMvdm0udHJhdmVsUmF0ZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gdXBkYXRlIFJhZGl1cyBrbm9iIFxuICAgICAgICAgIF9zZXRLbm9iVmFsdWUodm0udGhpc19yYWRpdXMsIF8uZmlyc3Qodm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlKS50cmF2ZWxUaW1lLnZhbHVlLCBfLmxhc3Qodm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlKS50cmF2ZWxUaW1lLnZhbHVlKTtcbiAgICAgICAgICB2bS5sb2NhdGlvbnNfbG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgICAgLy8gaGlkZSB0aGUgbG9hZGVyIG9uY2UgYWxsIGlzIGxvYWRlZFxuICAgICAgICAgICRpb25pY0xvYWRpbmcuaGlkZSgpO1xuICAgICAgICAgICRpb25pY1NsaWRlQm94RGVsZWdhdGUudXBkYXRlKCk7XG5cbiAgICAgICAgICBcbiAgICAgICAgfSk7Ly9lbmQgLnRoZW5cblxuXG4gICAgfS8vLy9lbmQgdm0ubG9hZF9jYXRlZ29yeVxuXG5cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcmF0ZSBvZiB0cmFuZWwgdG8gYSBsb2NhdGlvbiBpbiBtZXRlcnMvbWluIGZvcm1hdFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IHRyYXZlbFRpbWUgIC0gIHRoZSB0cmF2ZWxUaW1lIG9iamVjdCBvZiB0aGUgbG9jYXRpb25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7IE51bWJlcn0gbWV0ZXJzL21pbiBiYXNlZCBvbiBsb2NhdGlvbiBkaXN0YW5jZSBhbmQgdHJhdmVsIHRpbWUgXG4gICAgICovXG4gICAgdm0ubWV0ZXJzUGVyTWluICA9IGZ1bmN0aW9uKCB0cmF2ZWxUaW1lKSB7XG4gICAgICAgIC8vIHBhcnNlIHRpZW0gZm9yIGVpdGhlciBhIGRvdWJsZSBkaWdpdCBtaW51dGUgZm9ybWF0XG4gICAgICAgIC8vIG9yIHRoZSBmaXJzdCBkaWRcbiAgICAgICAgdmFyIF90aW1lID0gdHJhdmVsVGltZS50ZXh0Lm1hdGNoKC8oWzAtOV1bMC05XSl8KFxcZCkvZyk7XG4gICAgICAgIC8vIGlmIGhvdXJzIGNvbnZlcnQgdG8gbWluc1xuICAgICAgICBpZihfdGltZS5sZW5ndGggPT0gMikgdmFyIG1pbnMgPSArX3RpbWVbMV0gKyAoK190aW1lWzBdKjYwKTtcbiAgICAgICAgdmFyIF9taW5zID0gbWlucyB8fCArX3RpbWVbMF07XG4gICAgICAgIHZhciBfZGlzdGFuY2UgPSB0cmF2ZWxUaW1lLnZhbHVlOyBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBfZGlzdGFuY2UvX21pbnM7XG4gICAgfTtcblxuXG4gICAgdm0ubWV0ZXJzVG9NaWxlcyA9IGZ1bmN0aW9uKG1ldGVycykge1xuICAgICAgcmV0dXJuIG1ldGVycyowLjAwMDYyMTM3MTtcbiAgICB9XG5cblxuICAgIHZtLnNob3dEaXNjb3ZlcnlNYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgdm0uZ21hcC5oZWlnaHQgPSA1NzU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZtLmdtYXAucm91dGVzLm1hcChfY2xlYXJGcm9tTWFwKTtcbiAgICAgICAgICAgIGlmKHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZS5sZW5ndGgpIHZtLmdtYXAubWFwLnNldE9wdGlvbnMoe3N0eWxlczogbnVsbH0pO1xuXG4gICAgICAgICAgICAvLyBoaWRlcyBzbGlkZXJcbiAgICAgICAgICAgIHZtLnNsaWRlci5zaG93biA9IGZhbHNlO1xuICAgICAgXG4gICAgfVxuXG5cblxuICBcblxuXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBQcml2YXRlIHZtIG1ldGhvZHMgXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICAgXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBSYWRpdXMgdWkga25vYiB2YWx1c2VcbiAgICAgKiB0aGlzIHRyaWNrcyB0aGUga25vYiBpbnRvIHVwZGF0aW5nIHRoZSB2YWx1ZSBjb3JyZWN0bHlcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSB2YWwgIC0gIG5ldyBrbm9iIHZhbGVcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBtaW4gIC0gIG1pbmltdW0ga25vYiB2YWx1ZVxuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IG1heCAgLSAgbWF4aW11bSBrbm9iIHZhbHVlXG4gICAgICovXG4gICAgdmFyIF9zZXRLbm9iVmFsdWUgPSBmdW5jdGlvbih2YWwsbWluLCBtYXgpIHtcbiAgICAgIC8vIHNldCB1aS5rbm9iIG9wdGlvbnMgaGVyZVxuICAgICAgXG4gICAgICAgICAgdm0ua25vYiA9e1xuICAgICAgICAgICAgICB2YWx1ZTp2YWwsXG4gICAgICAgICAgICAgIG9wdGlvbnM6e1xuICAgICAgICAgICAgICAgIGRpc3BsYXlJbnB1dDogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gc3ViVGV4dDoge1xuICAgICAgICAgICAgICAgIC8vICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyAgIHRleHQ6ICAgICdtZXRlciByYWRpdXMnLFxuICAgICAgICAgICAgICAgIC8vICAgY29sb3I6ICAgJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAvLyAgIGZvbnQ6ICAgICdhdXRvJ1xuICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgc2l6ZTogICAgICAgICAxMDAsXG4gICAgICAgICAgICAgICAgbWluOiAgICAgICAgICAxMDAsXG4gICAgICAgICAgICAgICAgbWF4OiAgICAgICAgICBtYXgsXG4gICAgICAgICAgICAgICAgc3RlcDogICAgICAgICAxLFxuICAgICAgICAgICAgICAgIGJhckNvbG9yOiAgICAgJyM1QkMwMUUnLFxuICAgICAgICAgICAgICAgIHRyYWNrQ29sb3I6ICAgJyMyMTIxMjEnLFxuICAgICAgICAgICAgICAgIHRyYWNrV2lkdGg6ICAgNSxcbiAgICAgICAgICAgICAgICBiYXJXaWR0aDogICAgIDIwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIC8vIHJldHVybiB2bS5rbm9iO1xuICAgIH07XG5cblxuXG4gICAgLyoqXG4gICAgICogU2hvdyBHb29nbGUgbWFwIG1hcmtlciBmb3IgTG9jYXRpb25cbiAgICAgKiAgICAgXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGxvYWN0aW9uIC0gbG9jYXRpb24gb2JqZWN0IG1vZGVsXG4gICAgICovXG4gICAgdmFyIF9zaG93TWFya2VyRm9yID0gZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICAgIC8vICRsb2cubG9nKFwiX3Nob3dNYXJrZXJGb3I6e25hbWV9XCIsIGxvY2F0aW9uKTtcbiAgICAgIC8vIHZhciBzaG93bk1hcmtlciA9IHZtLmdtYXAubWFya2Vyc1tsb2NhdGlvbi5faWRdO1xuICAgICAgdmFyIHNob3duTWFya2VyID0gXy53aGVyZSh2bS5nbWFwLm1hcmtlcnMsIHt0aXRsZTogbG9jYXRpb24ubmFtZX0pWzBdO1xuICAgICAgc2hvd25NYXJrZXIuc2V0T3BhY2l0eSgxKTtcbiAgICAgIHNob3duTWFya2VyLnNldENsaWNrYWJsZSh0cnVlKTtcbiAgICB9Ly9fc2hvd01hcmtlckZvclxuXG5cbiAgICAvKipcbiAgICAgKiBIaWRlIEdvb2dsZSBtYXAgbWFya2VyIGZvciBMb2NhdGlvblxuICAgICAqICAgICBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbG9hY3Rpb24gLSBsb2NhdGlvbiBvYmplY3QgbW9kZWxcbiAgICAgKi9cbiAgICB2YXIgX2hpZGVNYXJrZXJGb3IgPSBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgLy8gJGxvZy5sb2coXCJfaGlkZU1hcmtlckZvcjp7bmFtZX1cIiwgbG9jYXRpb24pO1xuICAgICAgdmFyIGhpZGRlbk1hcmtlciA9IF8ud2hlcmUodm0uZ21hcC5tYXJrZXJzLCB7dGl0bGU6IGxvY2F0aW9uLm5hbWV9KVswXTtcbiAgICAgIGhpZGRlbk1hcmtlci5zZXRPcGFjaXR5KDApO1xuICAgICAgaGlkZGVuTWFya2VyLnNldENsaWNrYWJsZShmYWxzZSk7XG4gICAgfS8vX2hpZGVNYXJrZXJGb3JcblxuXG4gICAgLyoqXG4gICAgICogU2V0IEdvb2dsZSBNYXAgbWFya2VycyBmb3IgYWxsIExvY2F0aW9ucyBhbmQgYXR0YWNoIFxuICAgICAqIGEgY2xpY2sgbGlzdGVuZXIgdG8gZWFjaCBcbiAgICAgKiAgXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSBsb2NhdGlvbnMgIC0gIGNvbGxlY3Rpb24gb2YgTG9jYXRpb24gTW9kZWwgT2JqZWN0c1xuICAgICAqL1xuICAgIHZhciBfc2V0TWFya2VycyA9IGZ1bmN0aW9uKGxvY2F0aW9ucykge1xuICAgICAgbG9jYXRpb25zLm1hcChmdW5jdGlvbihsb2NhbGxlKXtcblxuXG4gICAgICAgICAgICB2YXIgbWFya2VyID0gdm0uZ21hcC5kcm9wTWFya2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IHBhcnNlRmxvYXQobG9jYWxsZS5sYXQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHBhcnNlRmxvYXQobG9jYWxsZS5sb25nKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAgICAgbG9jYWxsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwOiAgICAgICB2bS5nbWFwLm1hcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpY29uOiAgICAgIGxvY2FsbGUuaWNvblxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ21hcmtlcjpjbGlja2VkJywgbG9jYWxsZSk7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZtLmdtYXAubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmV0dXJuIHZtLm1hcmtlcnM7XG4gICAgfTsvL19zZXRNYXJrZXJzXG5cblxuICAgIHZhciBfc2V0dXBTbGlkZURyYWcgPSBmdW5jdGlvbihkaXIsIGluZHgpIHtcbiAgICAgIFxuICAgICAgICAkaW9uaWNHZXN0dXJlLm9uKCdkcmFnJytkaXIsIFxuICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7IFxuICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICB2bS5zbGlkZXIuZGV0YWlsVmlldyA9IGRpciA9PSdkb3duJz8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFwLS1zbGlkZXItbG9jYXRpb24nKVtpbmR4XVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBtYXJrZXIgZnJvbSBHb29nbGUgTWFwXG4gICAgICogIFxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IG1hcmtlciAgLSAgZ29vZ2xlIG1hcCBtYXJrZXIgb2JqZWN0XG4gICAgICovXG4gICAgdmFyIF9jbGVhckZyb21NYXAgPSBmdW5jdGlvbihtYXJrZXIpIHtcbiAgICAgICRsb2cubG9nKCdfY2xlYXJGcm9tTWFwOjpNYXJrZXI6e3RpdGxlfScsIG1hcmtlcik7XG4gICAgICAgbWFya2VyLnNldE1hcChudWxsKTtcbiAgICB9Ly9fY2xlYXJGcm9tTWFwXG5cblxuICAgIC8qKlxuICAgICAqIFBsb3Qgcm91dGUgdG8gTG9jYXRpb24gb24gR29vZ2xlIE1hcCBcbiAgICAgKiAgXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gbG9jYXRpb24gIC0gIExvY2F0aW9uIE1vZGVsIE9iamVjdFxuICAgICAqL1xuICAgIHZhciBfc2hvd1JvdXRlVG8gPSBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgJGxvZy5sb2coJ19zaG93Um91dGVUbzt7bmFtZX0nLCBsb2NhdGlvbik7XG4gICAgICAkcm9vdFNjb3BlLmFjdGl2ZUxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICAgIC8vIGNsZWFyIGFsbCByb3V0ZXNcbiAgICAgIHZtLmdtYXAucm91dGVzLm1hcChfY2xlYXJGcm9tTWFwKTtcbiAgICAgIHZtLmxvY2F0aW9uc1JhZGl1cy5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgIHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZS5tYXAoX2hpZGVNYXJrZXJGb3IpO1xuXG4gICAgICB2YXIgbWFya2VyID0gX3Nob3dNYXJrZXJGb3IobG9jYXRpb24pO1xuXG4gICAgICB2YXIgcm91dGUgPSB2bS5nbWFwLnBsb3RSb3V0ZVRvKGxvY2F0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZ21hcC5yb3V0ZXMucHVzaChyb3V0ZSk7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBjZW50ZXIgcm91dGUgaW4gc2NyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJHRpbWVvdXQoZnVuY3Rpb24oKSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgLy8gaWYodm0uZ21hcC5tYXAuem9vbSA8IDEzICl2bS5nbWFwLm1hcC5zZXRab29tKDEzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHZhciBtYXJrZXJQb3MgPSB2bS5nbWFwLmdldFBpeGVsUG9zaXRpb24obWFya2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHZhciBwb3NGcm9tVG9wID0gKHZtLmdtYXAuaGVpZ2h0IC0gbWFya2VyUG9zLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgdmFyIHBhblkgPSBwb3NGcm9tVG9wIC0gKHBvc0Zyb21Ub3AqMC41KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHZtLmdtYXAubWFwLnBhbkJ5KDAsIE1hdGguYWJzKHBhblkpICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSw0NTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9Ly8gX3Nob3dSb3V0ZVRvXG4gICAgXG4gICAgICAgIFxuXG4gICAgLyoqXG4gICAgICogTWFrZSBzdXJlIHRoZSBtYXAgcmFkaXVzIGRvZXNuJ3QgZXhjZWVkIHRoZSBtYXAgdmlld3BvcnQuXG4gICAgICogSXQgZG9lcyB0aGlzIGJ5IGdldHRpbmcgdGhlIHJlY3Rhbmd1bGFyIGNvb3JkcyBvZiB0aGUgcmFkaXVzIFxuICAgICAqIGFuZCB0aGVuIHpvb21zIHRoZSBtYXAgdG8gZml0IHRoZW0gd2l0aGluIHRoZSBtYXAgYm91bmRzXG4gICAgICogIFxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGxvY2F0aW9uICAtICBMb2NhdGlvbiBNb2RlbCBcbiAgICAgXG4gICAgICovXG4gICAgdmFyIF9maXRJbk1hcFZpZXcgPSBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgaWYobG9jYXRpb24pIHZtLmxvY2F0aW9uc1JhZGl1cy5zZXRSYWRpdXMobG9jYXRpb24uZGlzdGFuY2Vmcm9tbG9jYXRpb24pO1xuICAgICAgLy8gR2V0IHRoZSBib3VuZHNcbiAgICAgIHZhciBjaXJjbGVCb3VuZHMgPSB2bS5sb2NhdGlvbnNSYWRpdXMuZ2V0Qm91bmRzKCk7XG4gICAgICB2YXIgbWFwQm91bmRzID0gdm0uZ21hcC5tYXAuZ2V0Qm91bmRzKCk7XG5cbiAgICAgIHZhciBuZSA9IGNpcmNsZUJvdW5kcy5nZXROb3J0aEVhc3QoKTsgLy8gTGF0TG5nIG9mIHRoZSBub3J0aC1lYXN0IGNvcm5lclxuICAgICAgdmFyIHN3ID0gY2lyY2xlQm91bmRzLmdldFNvdXRoV2VzdCgpO1xuICAgICAgdmFyIG53ID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhuZS5sYXQoKSwgc3cubG5nKCkpO1xuICAgICAgdmFyIHNlID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhzdy5sYXQoKSwgbmUubG5nKCkpO1xuICAgICAgICAgICAgICBcbiAgICAgIHZhciBMYXRMbmdMaXN0ID0gbmV3IEFycmF5IChudywgc2UpO1xuXG4gICAgICAgICAgICAgIFxuICAgICAgaWYoIW1hcEJvdW5kcy5jb250YWlucyhuZSkpe1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgTHRMZ0xlbiA9IExhdExuZ0xpc3QubGVuZ3RoOyBpIDwgTHRMZ0xlbjsgaSsrKSB7XG4gICAgICAgICAgLy8gIEFuZCBpbmNyZWFzZSB0aGUgYm91bmRzIHRvIHRha2UgdGhpcyBwb2ludFxuICAgICAgICAgIG1hcEJvdW5kcy5leHRlbmQoTGF0TG5nTGlzdFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdm0uZ21hcC5tYXAuZml0Qm91bmRzKG1hcEJvdW5kcyk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdm0uZ21hcC5tYXAuZml0Qm91bmRzKGNpcmNsZUJvdW5kcyk7XG4gICAgICB9XG4gICAgXG4gICAgfS8vX2ZpdEluTWFwVmlld1xuICAgIFxuXG5cblxuXG5cbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICRzY29wZSBldmVudHMgYW5kIHdhdGNoZXJzIFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgXG4gIC8qKlxuICAgKiBPbiBMb2NhdGlvbnMgU2xpZGVyIFNsaWRlIENoYW5nZSB1cGRhdGUgdG8gc2hvdyByb3V0ZSB0byBuZXcgTG9jYXRpb24gZnJvbSBzbGlkZVxuICAgKi9cbiAgICAkc2NvcGUuc2xpZGVIYXNDaGFuZ2VkID0gZnVuY3Rpb24oaW5keCkge1xuICAgICAgICAkbG9nLmxvZyhcImlvbi1zbGlkZS1ib3g6c2xpZGVIYXNDaGFuZ2VkOlwiK2luZHgpO1xuICAgICAgICB2YXIgc2xpZGVFTCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFwLS1zbGlkZXItbG9jYXRpb24nKVtpbmR4XSk7XG4gICAgICAgIHZhciBzbGlkZXJfbG9jYXRpb24gPSB2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2VbaW5keF07XG4gICAgICAgIC8vc2V0IGFjdGl2ZSBzbGlkZVxuICAgICAgICB2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UubWFwKGZ1bmN0aW9uKGxvY2F0aW9uKSB7IGxvY2F0aW9uLmlzQWN0aXZlID0gZmFsc2U7IHJldHVybiBsb2NhdGlvbjt9KTtcbiAgICAgICAgc2xpZGVyX2xvY2F0aW9uLmlzQWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICBfc2hvd1JvdXRlVG8oc2xpZGVyX2xvY2F0aW9uKTtcbiAgICAgICAgX2ZpdEluTWFwVmlldyhzbGlkZXJfbG9jYXRpb24pO1xuXG4gICAgICAgIC8vIGFkZCBuZXcgdmF1ZXMgdG8gc2xpZGVyIG1vZGVsXG4gICAgICAgIGFuZ3VsYXIuZXh0ZW5kKHZtLnNsaWRlcix7XG4gICAgICAgICAgc2hvd246ICAgIHRydWUsXG4gICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIG1ldGE6ICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogICAgIHNsaWRlcl9sb2NhdGlvbi5jYXRhZ29yeWxldmVsMSxcbiAgICAgICAgICAgIHRyYXZlbFRpbWU6ICAgc2xpZGVyX2xvY2F0aW9uLnRyYXZlbFRpbWUsXG4gICAgICAgICAgICBuZWlnaGJvcmhvb2Q6IHNsaWRlcl9sb2NhdGlvbi5uZWlnaGJvcmhvb2RcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIF9zZXR1cFNsaWRlRHJhZygnZG93bicsIGluZHgpO1xuICAgICAgICBfc2V0dXBTbGlkZURyYWcoJ3VwJywgaW5keCk7XG5cbiAgICAgIH07Ly8gICRzY29wZS5zbGlkZUhhc0NoYW5nZWRcblxuICAgIFxuXG5cbiAgICAvKipcbiAgICAgKiBXYXRjaCB0aGUgUmFkaXVzIEtub2IgdmFsdWUgYW5kIHVkcGF0ZSBkYXRhIG9uIGNoYW5nZVxuICAgICAqL1xuICAgICRzY29wZS4kd2F0Y2goXCJNYXAua25vYi52YWx1ZVwiLCBmdW5jdGlvbihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwibmV3IE1hcC5rbm9iLnZhbHVlOiBcIituZXdWYWx1ZSk7XG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcIm9sZCBNYXAua25vYi52YWx1ZTogXCIrb2xkVmFsdWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih2bS5sb2NhdGlvbnNSYWRpdXMpe1xuICAgICAgICAgICAgICB2bS5sb2NhdGlvbnNSYWRpdXMuc2V0UmFkaXVzKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgdm0ubG9jYXRpb25zUmFkaXVzLnNldFZpc2libGUodHJ1ZSk7ICBcblxuICAgICAgICAgICAgICAvLyB1cGRhdGUgZGlzdGFuY2Uga25vYlxuICAgICAgICAgICAgICB2bS5kaXN0YW5jZV9rbm9iLnZhbHVlID0gTWF0aC5jZWlsKG5ld1ZhbHVlL3ZtLnRyYXZlbFJhdGUpO1xuICAgICAgICAgICAgICB2bS5kaXN0YW5jZV9rbm9iLm9wdGlvbnMgPSB2bS5kaXN0YW5jZV9rbm9iLm9wdGlvbnM7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICB2bS5zaG93RGlzY292ZXJ5TWFwKCk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgaWYodm0ubG9jYXRpb25zUmFkaXVzKSBfZml0SW5NYXBWaWV3KCk7XG5cbiAgICAgICAgICAgIC8vIHNob3cvcmV2ZWFsIGxvY2F0aW9ucyBpbnNpZGUgcmFkaXVzXG4gICAgICAgICAgICB2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UubWFwKGZ1bmN0aW9uKGxvY2F0ZSl7XG4gICAgICAgICAgICAgICAgICBpZiggbG9jYXRlLmRpc3RhbmNlZnJvbWxvY2F0aW9uIDwgbmV3VmFsdWUgKXtcbiAgICAgICAgICAgICAgICAgICAgX3Nob3dNYXJrZXJGb3IobG9jYXRlKTtcbiAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX2hpZGVNYXJrZXJGb3IobG9jYXRlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOy8vdm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlLm1hcFxuXG5cbiAgICAgICAgfSk7Ly8vJHNjb3BlLiR3YXRjaCBcIk1hcC5rbm9iLnZhbHVlXCJcblxuXG5cbiAgICAgIC8qKlxuICAgICAgICogTGlzdGVuIGZvciBhIEdvb2dsZSBNYXAgbG9hY3Rpb24gbWFya2VyIHRvIGJlIGNsaWNrZWRcbiAgICAgICAqIGFuZCB0aGVuIGRpc3BsYXkgdGhlIExvY2F0aW9ucyBTbGlkZXIgXG4gICAgICAgKi9cbiAgICAgICRzY29wZS4kb24oXCJtYXJrZXI6Y2xpY2tlZFwiLCBmdW5jdGlvbihlLCBtYXJrZXIpIHtcbiAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgXG4gICAgICAgICAgJGxvZy5sb2coXCJtYXJrZXI6Y2xpY2tlZCAtIHtuYW1lfVwiLCBtYXJrZXIpO1xuICAgICAgICBcbiAgICAgICAgICB2bS5nbWFwLm1hcC5zZXRPcHRpb25zKHtzdHlsZXM6IEFwcFNldHRpbmdzLkdNQVBfREVGQVVMVC5USEVNRS5saWdodH0pO1xuXG4gICAgICAgICAgXG4gICAgICAgICAgdm0uZ21hcC5oZWlnaHQgPSAzNTA7XG4gICAgICAgICAgdm0uc2xpZGVyID0ge1xuICAgICAgICAgICAgc2hvd246IHRydWUsXG4gICAgICAgICAgICBtZXRhOntcbiAgICAgICAgICAgICAgY2F0ZWdvcnk6ICAgICBtYXJrZXIuY2F0YWdvcnlsZXZlbDEsXG4gICAgICAgICAgICAgIHRyYXZlbFRpbWU6ICAgbWFya2VyLnRyYXZlbFRpbWUsXG4gICAgICAgICAgICAgIG5laWdoYm9yaG9vZDogbWFya2VyLm5laWdoYm9yaG9vZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAkaW9uaWNTbGlkZUJveERlbGVnYXRlLnNsaWRlKF8uaW5kZXhPZih2bS5sb2NhdGlvbnNfYnlfZGlzdGFuY2UsIG1hcmtlcikpO1xuXG5cbiAgICAgICAgICBfc2hvd1JvdXRlVG8obWFya2VyKTtcbiAgICAgICAgICBfZml0SW5NYXBWaWV3KCk7XG4gICAgICAgICAgX3NldHVwU2xpZGVEcmFnKCdkb3duJywgMCk7XG4gICAgICAgICAgX3NldHVwU2xpZGVEcmFnKCd1cCcsIDApO1xuXG4gICAgICB9KTtcbiAgICB9KTsvLyAkc2NvcGUuJG9uIFwibWFya2VyOmNsaWNrZWRcIlxuICAgICAgXG5cblxufTsvLy8vIE1hcEN0cmxcblxuXG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ01hcEN0cmwnLCBNYXBDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5kaXJlY3RpdmVzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRpcmVjdGl2ZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBtQXBwTG9hZGluZygkbG9nLCAkYW5pbWF0ZSl7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCBcIm1BcHBMb2FkaW5nXCIgKTtcbiAgXG5cbiAgLy8gUnVucyBkdXJpbmcgY29tcGlsZVxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAgICAnQycsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJpYnV0ZXMsIGNvbnRyb2xsZXIsIHRyYW5zY2x1ZGVGbikge1xuICAgICAkYW5pbWF0ZS5sZWF2ZSggXG4gICAgIFx0ZWxlbWVudC5jaGlsZHJlbigpLmVxKCAxIClcbiAgICAgXHQpLnRoZW4oXG4gICAgICAgICAgICBmdW5jdGlvbiBjbGVhbnVwQWZ0ZXJBbmltYXRpb24oKSB7XG4gICAgICAgICAgICBcdCRsb2cubG9nKCdjbGVhbnVwQWZ0ZXJBbmltYXRpb24nKTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHJvb3QgZGlyZWN0aXZlIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAvLyBDbGVhciB0aGUgY2xvc2VkLW92ZXIgdmFyaWFibGUgcmVmZXJlbmNlcy5cbiAgICAgICAgICAgICAgICBzY29wZSA9IGVsZW1lbnQgPSBhdHRyaWJ1dGVzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgIH1cbiAgfVxuXG5cbn07XG5cblxuZGlyZWN0aXZlc01vZHVsZS5kaXJlY3RpdmUoJ21BcHBMb2FkaW5nJywgbUFwcExvYWRpbmcpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1vZGVsc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4qL1xuXG5tb2RlbHNNb2R1bGUuZmFjdG9yeSgnR01hcCcsIGZ1bmN0aW9uKCRsb2csICRyb290U2NvcGUsICRxLCBMb2NhdGlvbnNTZXJ2aWNlLCBBcHBTZXR0aW5ncyl7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdHTWFwJywgZmFsc2UpO1xuXG4gIHZhciBjdXJyZW50Q2VudGVyID0gJHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb24uY29vcmRzO1xuXG5cblxuICBmdW5jdGlvbiBHTWFwKG1hcFNldHRpbmdzKXtcbiAgICBcbiAgICB0aGlzLm1hcE9wdGlvbnMgPSB7XG4gICAgICBjZW50ZXI6ICAgIHtsYXQ6IGN1cnJlbnRDZW50ZXIubGF0aXR1ZGUsIFxuICAgICAgICAgICAgICAgICAgbG5nOiBjdXJyZW50Q2VudGVyLmxvbmdpdHVkZX0sXG4gICAgICB6b29tOiAgICAgIEFwcFNldHRpbmdzLkdNQVBfREVGQVVMVC5aT09NLFxuICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCxcbiAgICAgIHJhZGl1czogICAgQXBwU2V0dGluZ3MuR01BUF9ERUZBVUxULlJBRElVUyxcbiAgICB9O1xuXG4gICAgYW5ndWxhci5leHRlbmQodGhpcy5tYXBPcHRpb25zLCBtYXBTZXR0aW5ncyk7XG4gICAgXG4gICAgJGxvZy5kZWJ1Zygnem9vbSB7bWFwT3B0aW9ucy56b29tfScsIHRoaXMpO1xuICAgIFxuICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1hcFwiKSwgdGhpcy5tYXBPcHRpb25zKTtcbiAgICBcbiB9Oy8vR01hcCBjb25zdHJ1Y3RvclxuXG5cblxuXG4gIEdNYXAucHJvdG90eXBlID17XG5cbiAgICBkcm9wTWFya2VyOiBmdW5jdGlvbihtYXJrZXJEYXRhKSB7XG4gICAgICB2YXIgX21hcmtlclNldHRpbmdzID0ge307XG4gICAgICBhbmd1bGFyLmV4dGVuZChfbWFya2VyU2V0dGluZ3MsIHRoaXMubWFwT3B0aW9ucywgbWFya2VyRGF0YSk7XG4gICAgICAkbG9nLmRlYnVnKCdkcm9wTWFya2VyIGZvciBcInt0aXRsZX1cIlwiIGF0IFwie2NlbnRlci5sYXR9LCB7Y2VudGVyLmxuZ31cIicsIF9tYXJrZXJTZXR0aW5ncyk7XG5cbiAgICAgIHZhciBfbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogIF9tYXJrZXJTZXR0aW5ncy5jZW50ZXIsXG4gICAgICAgICAgICBtYXA6ICAgICAgIF9tYXJrZXJTZXR0aW5ncy5tYXAsXG4gICAgICAgICAgICB0aXRsZTogICAgIF9tYXJrZXJTZXR0aW5ncy50aXRsZSxcbiAgICAgICAgICAgIG9wYWNpdHk6ICAgX21hcmtlclNldHRpbmdzLm9wYWNpdHksXG4gICAgICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxuICAgICAgICAgICAgaWNvbjogICAgICAgX21hcmtlclNldHRpbmdzLmljb25cbiAgICAgIH0pO1xuICAgICAgIFxuICAgICAgcmV0dXJuIF9tYXJrZXI7XG4gICAgfSxcblxuXG4gICAgYnVpbGRJbmZvV2luZG93OiBmdW5jdGlvbihsb2NhdGlvbkluZm8sIGxvY2F0aW9uTWFya2VyKSB7XG4gICAgICB2YXIgX21hcCA9IHRoaXM7XG5cbiAgICAgICRsb2cuZGVidWcoJ2J1aWxkSW5mb1dpbmRvdyBmb3Ige25hbWV9JywgbG9jYXRpb25JbmZvKTtcbiAgICAgIHZhciBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnPGgzIGlkPVwiZmlyc3RIZWFkaW5nXCIgY2xhc3M9XCJmaXJzdEhlYWRpbmdcIj4nK2xvY2F0aW9uSW5mby5uYW1lKyc8L2gzPicrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8cD4nK2xvY2F0aW9uSW5mby50cmF2ZWxUaW1lLnRleHQrJyB3YWxrPC9wPicrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c21hbGw+Jytsb2NhdGlvbkluZm8uZGlzdGFuY2Vmcm9tbG9jYXRpb24rJzwvc21hbGw+J1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGxvY2F0aW9uTWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgLy8gICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ21hcmtlcjpjbGlja2VkJywgbG9jYXRpb25JbmZvICk7XG4gICAgICAvLyAgIGluZm93aW5kb3cub3BlbiggX21hcC5tYXAgLGxvY2F0aW9uTWFya2VyKTtcbiAgICAgIC8vIH0pO1xuXG4gICAgICByZXR1cm4gaW5mb3dpbmRvdztcbiAgICB9LFxuXG5cbiAgICBnZXRQaXhlbFBvc2l0aW9uOiBmdW5jdGlvbiAobWFya2VyKSB7XG4gICAgICAgIHZhciBfbWFwID0gdGhpcy5tYXA7XG4gICAgICAgIHZhciBzY2FsZSA9IE1hdGgucG93KDIsIF9tYXAuZ2V0Wm9vbSgpKTtcbiAgICAgICAgdmFyIG53ID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhcbiAgICAgICAgICAgIF9tYXAuZ2V0Qm91bmRzKCkuZ2V0Tm9ydGhFYXN0KCkubGF0KCksXG4gICAgICAgICAgICBfbWFwLmdldEJvdW5kcygpLmdldFNvdXRoV2VzdCgpLmxuZygpXG4gICAgICAgICk7XG4gICAgICAgIHZhciB3b3JsZENvb3JkaW5hdGVOVyA9IF9tYXAuZ2V0UHJvamVjdGlvbigpLmZyb21MYXRMbmdUb1BvaW50KG53KTtcbiAgICAgICAgdmFyIHdvcmxkQ29vcmRpbmF0ZSA9IF9tYXAuZ2V0UHJvamVjdGlvbigpLmZyb21MYXRMbmdUb1BvaW50KG1hcmtlci5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgdmFyIHBpeGVsT2Zmc2V0ID0gbmV3IGdvb2dsZS5tYXBzLlBvaW50KFxuICAgICAgICAgICAgTWF0aC5mbG9vcigod29ybGRDb29yZGluYXRlLnggLSB3b3JsZENvb3JkaW5hdGVOVy54KSAqIHNjYWxlKSxcbiAgICAgICAgICAgIE1hdGguZmxvb3IoKHdvcmxkQ29vcmRpbmF0ZS55IC0gd29ybGRDb29yZGluYXRlTlcueSkgKiBzY2FsZSlcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gcGl4ZWxPZmZzZXQ7XG4gICAgfSxcblxuICAgIHBsb3RSb3V0ZVRvOiBmdW5jdGlvbihsb2NhdGlvbil7XG4gICAgICAkbG9nLmRlYnVnKCdwbG90Um91dGVUbyB7bmFtZX0nLGxvY2F0aW9uKTtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICB2YXIgX21hcCA9IHRoaXM7XG4gICAgICB2YXIgX3JvdXRlU2V0dGluZ3MgPSB7XG4gICAgICAgICAgICBkcmFnZ2FibGU6ICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIHN1cHByZXNzSW5mb1dpbmRvd3M6IHRydWUsXG4gICAgICAgICAgICBzdXBwcmVzc01hcmtlcnM6ICAgICB0cnVlLFxuICAgICAgICAgICAgb3JpZ2luOiAgICAgICAgICAgICAgX21hcC5tYXBPcHRpb25zLmNlbnRlclxuICAgICAgfTtcblxuICAgICAgYW5ndWxhci5leHRlbmQoX3JvdXRlU2V0dGluZ3MsIHRoaXMubWFwT3B0aW9ucyk7XG5cbiAgICAgIHZhciBkaXJlY3Rpb25zRGlzcGxheSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIoe1xuICAgICAgICAgICAgbWFwOiAgICAgICAgICAgICAgICAgX21hcC5tYXAsXG4gICAgICAgICAgICBkcmFnZ2FibGU6ICAgICAgICAgICBfcm91dGVTZXR0aW5ncy5kcmFnZ2FibGUsXG4gICAgICAgICAgICBzdXBwcmVzc0luZm9XaW5kb3dzOiBfcm91dGVTZXR0aW5ncy5zdXBwcmVzc0luZm9XaW5kb3dzLFxuICAgICAgICAgICAgc3VwcHJlc3NNYXJrZXJzOiAgICAgX3JvdXRlU2V0dGluZ3Muc3VwcHJlc3NNYXJrZXJzLFxuICAgICAgICAgICAgLy8gcHJlc2VydmVWaWV3cG9ydDogdHJ1ZVxuICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiB7bGF0OiBwYXJzZUZsb2F0KGxvY2F0aW9uLmxhdCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHBhcnNlRmxvYXQobG9jYXRpb24ubG9uZyl9LFxuICAgICAgICAgICAgb3JpZ2luOiAgICAgIF9yb3V0ZVNldHRpbmdzLm9yaWdpbixcbiAgICAgICAgICAgIHRyYXZlbE1vZGU6ICBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLldBTEtJTkcsXG4gICAgICAgICAgICBwcm92aWRlUm91dGVBbHRlcm5hdGl2ZXM6IGZhbHNlLFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpOy8vIFBhc3MgdGhlIGRpcmVjdGlvbnMgcmVxdWVzdCB0byB0aGUgZGlyZWN0aW9ucyBzZXJ2aWNlLlxuXG5cbiAgICAgICAgICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShyZXF1ZXN0LCBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xuICAgICAgICAgICAgICAvLyBEaXNwbGF5IHRoZSByb3V0ZSBvbiB0aGUgbWFwLlxuICAgICAgICAgICAgICByZXNwb25zZS5yZW5kZXJlciA9IGRpcmVjdGlvbnNEaXNwbGF5O1xuICAgICAgICAgICAgICBkaXJlY3Rpb25zRGlzcGxheS5zZXREaXJlY3Rpb25zKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkaXJlY3Rpb25zRGlzcGxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7Ly8vZGlyZWN0aW9zU2VydmljZS5yb3V0ZVxuXG4gICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG5cblxuICAgIH0sXG5cbiAgICBzZXRSYWRpdXNDaXJjbGU6IGZ1bmN0aW9uKHJhZGl1c0NpcmNsZVNldHRpbmdzKSB7XG4gICAgICB2YXIgX21hcCA9IHRoaXM7XG4gICAgICB2YXIgX2NpcmNsZVNldHRpbmdzID17XG4gICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAgICcjMDA4NGI0JyxcbiAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogMC44LFxuICAgICAgICAgICAgICBzdHJva2VXZWlnaHQ6ICAxLFxuICAgICAgICAgICAgICBmaWxsQ29sb3I6ICAgICAnIzAwODRiNCcsXG4gICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAgIDAuMDYyNSxcbiAgICAgIH07XG5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKF9jaXJjbGVTZXR0aW5ncyAsdGhpcy5tYXBPcHRpb25zLCByYWRpdXNDaXJjbGVTZXR0aW5ncyk7XG5cbiAgICAgIHZhciBsb2NhdGlvbnNDaXJjbGUgPSBuZXcgZ29vZ2xlLm1hcHMuQ2lyY2xlKHtcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogICBfY2lyY2xlU2V0dGluZ3Muc3Ryb2tlQ29sb3IsXG4gICAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogX2NpcmNsZVNldHRpbmdzLnN0cm9rZU9wYWNpdHksXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2VpZ2h0OiAgX2NpcmNsZVNldHRpbmdzLnN0cm9rZVdlaWdodCxcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3I6ICAgICBfY2lyY2xlU2V0dGluZ3MuZmlsbENvbG9yLFxuICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAgIF9jaXJjbGVTZXR0aW5ncy5maWxsT3BhY2l0eSxcbiAgICAgICAgICAgICAgICBtYXA6ICAgICAgICAgICBfbWFwLm1hcCxcbiAgICAgICAgICAgICAgICBjZW50ZXI6ICAgICAgICBfY2lyY2xlU2V0dGluZ3MuY2VudGVyLFxuICAgICAgICAgICAgICAgIHJhZGl1czogICAgICAgIF9jaXJjbGVTZXR0aW5ncy5yYWRpdXNcbiAgICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxvY2F0aW9uc0NpcmNsZTtcbiAgICB9LFxuXG4gICAgcGxhY2VzU2VydmljZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgX3NlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2UodGhpcy5tYXApO1xuICAgICAgcmV0dXJuIF9zZXJ2aWNlO1xuXG4gICAgfVxuXG4gIH07XG4gICAgXG5cblxuICByZXR1cm4gR01hcDtcblxuICBcbn0pO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBtb2RlbHNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbm1vZGVsc01vZHVsZS5mYWN0b3J5KCdMb2NhdGlvbicsIGZ1bmN0aW9uKCRyb290U2NvcGUsICRsb2csICRxLCAkZmlsdGVyKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdMb2NhdGlvbicsIHRydWUpO1xuXG4gIGZ1bmN0aW9uIExvY2F0aW9uKExvY2F0aW9uRGF0YSl7XG4gICAgYW5ndWxhci5leHRlbmQodGhpcywgTG9jYXRpb25EYXRhKTtcbiAgICAkbG9nLmxvZygne25hbWV9JywgdGhpcyk7XG4gIH1cblxuXG4gIExvY2F0aW9uLnJlc3BvbnNlVHJhbnNmb3JtZXIgPSBmdW5jdGlvbiAocmVzcG9uc2VEYXRhKSB7XG4gICAgJGxvZy5sb2coJ3Jlc29wb25zZVRyYW5zZm9ybWVyIGZvciB7bGVuZ3RofSBpdGVtcycsIHJlc3BvbnNlRGF0YS5sb2NhdGlvbnMpO1xuICAgIFxuICAgIC8vIGlmKHJlc3BvbnNlRGF0YS5sb2NhdGlvbnMpe1xuICAgICAgXG4gICAgLy8gICAvLyB0cmFuc2Zyb20gdGhlIHJlc3BvbnNlIGRhdGEgaW50byBhbiBhcnJheSBvZiBwcm9taXNlcyBcbiAgICAvLyAgIC8vIHRvIGJlIGZ1bGxmaWxsZWQgd2lodCBhc3luYyBMb2FjdGlvbiBtZXRob2RzIFxuICAgIC8vICAgcmV0dXJuIHJlc3BvbnNlRGF0YS5sb2NhdGlvbnMubWFwKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAvLyAgICAgICAvLyBjcmVhdGUgYSBuZXcgbG9hY3Rpb24gXG4gICAgLy8gICAgICAgLy8gYW5kIHBlcmZvcm0gc2VxdWVudGlhbCBhc3luYyBmdW5jdGlvbnNcbiAgICAvLyAgICAgICByZXR1cm4gbmV3IExvY2F0aW9uKGRhdGEpXG4gICAgLy8gICAgICAgICAgICAgICAgICAgLnNldFRyYXZlbFRpbWUoKVxuICAgIC8vICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKF9sKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfbC5zZXRHb29nbGVQbGFjZURldGFpbHMoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKF9MRGF0YSkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmFyIGRmZCA9ICRxLmRlZmVyKCk7IFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGZkLnJlc29sdmUoX0xEYXRhKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZmQucHJvbWlzZTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2VEYXRhLm1hcChmdW5jdGlvbihsb2NhdGlvbil7XG4gICAgICByZXR1cm4gbmV3IExvY2F0aW9uKGxvY2F0aW9uKTtcbiAgICB9KTsgICAgICBcbiAgfVxuXG5cblxuXG4gIExvY2F0aW9uLnByb3RvdHlwZS5zZXRUcmF2ZWxUaW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAkbG9nLmxvZygnc2V0VHJhdmVsVGltZTp7bmFtZX0nLCB0aGlzKTtcbiAgICAgIFxuICAgICAgdmFyIF9sb2NhdGlvbiA9IHRoaXM7XG4gICAgICB2YXIgZGVmZXJyZWQgID0gJHEuZGVmZXIoKTtcblxuICAgICAgdmFyIHNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlzdGFuY2VNYXRyaXhTZXJ2aWNlO1xuICAgICAgIHNlcnZpY2UuZ2V0RGlzdGFuY2VNYXRyaXgoe1xuICAgICAgICAgb3JpZ2luczogICAgICAgW3tsYXQ6ICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSwgbG5nOiRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGV9XSxcbiAgICAgICAgIGRlc3RpbmF0aW9uczogIFt7bGF0OiBwYXJzZUZsb2F0KHRoaXMubGF0KSwgbG5nOiBwYXJzZUZsb2F0KHRoaXMubG9uZyl9XSxcbiAgICAgICAgIHRyYXZlbE1vZGU6ICAgIGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuV0FMS0lORyxcbiAgICAgICAgIHVuaXRTeXN0ZW06ICAgIGdvb2dsZS5tYXBzLlVuaXRTeXN0ZW0uSU1QRVJJQUwsXG4gICAgICAgICBhdm9pZEhpZ2h3YXlzOiB0cnVlLFxuICAgICAgICAgYXZvaWRUb2xsczogICAgdHJ1ZVxuICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICAgICAgIFx0X2xvY2F0aW9uLnRyYXZlbFRpbWUgPSByZXNwb25zZS5yb3dzWzBdLmVsZW1lbnRzWzBdLmR1cmF0aW9uO1xuICAgICAgICAgIF9sb2NhdGlvbi5kaXN0YW5jZSAgID0gcmVzcG9uc2Uucm93c1swXS5lbGVtZW50c1swXS5kaXN0YW5jZTtcbiAgICAgICAgIFx0ZGVmZXJyZWQucmVzb2x2ZShfbG9jYXRpb24pO1xuICAgICAgICAgLy8gJGxvZy5kZWJ1ZyhcIntuYW1lfSAtIHt0cmF2ZWxUaW1lfVwiLCBfbG9jYXRpb24pO1xuICAgICAgICAgIFxuICAgICAgIH0pO1xuXG4gICAgICAgXG4gICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG5cbiAgfVxuXG5cbiAgTG9jYXRpb24ucHJvdG90eXBlLnNldEdvb2dsZVBsYWNlSUQgPSBmdW5jdGlvbigpIHtcblxuICAgICRsb2cubG9nKCdzZXRHb29nbGVQbGFjZUlEOntuYW1lfScsIHRoaXMpO1xuXG4gICAgICB2YXIgX2xvY2F0aW9uICAgICA9IHRoaXMsXG4gICAgICAgICAgZGVmZXJyZWQgICAgICA9ICRxLmRlZmVyKCksXG4gICAgICAgICAgUGxhY2VzU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZSgkcm9vdFNjb3BlLmdtYXAubWFwKSxcbiAgICAgICAgICBfc2VhcmNoUXVlcnkgID0ge3F1ZXJ5OiAgIF9sb2NhdGlvbi5uYW1lLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcocGFyc2VGbG9hdChfbG9jYXRpb24ubGF0KSwgcGFyc2VGbG9hdChfbG9jYXRpb24ubG9uZykpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6ICAgNTAwfTtcblxuXG4gICAgICAgICAgUGxhY2VzU2VydmljZS50ZXh0U2VhcmNoKF9zZWFyY2hRdWVyeSwgXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHRzLCBzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2VTdGF0dXMuT0spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RPRE86IG1ha2Ugc3VyZSB0aGlzIGlzIHRoZSBjb3JyZWN0IHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9sb2NhdGlvbi5nb29nbGVQbGFjZUlkID0gcmVzdWx0c1swXS5wbGFjZV9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKF9sb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cblxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgXG4gIH07XG5cblxuICBMb2NhdGlvbi5wcm90b3R5cGUuc2V0R29vZ2xlUGxhY2VEZXRhaWxzID0gZnVuY3Rpb24oKSB7XG4gICAgJGxvZy5sb2coJ3NldEdvb2dsZVBsYWNlRGV0YWlsczp7bmFtZX0nLCB0aGlzKTtcbiAgICB2YXIgX2xvY2F0aW9uICAgICAgPSB0aGlzLFxuICAgICAgICAgZGVmZXJyZWQgICAgICA9ICRxLmRlZmVyKCksXG4gICAgICAgICBQbGFjZXNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlKCRyb290U2NvcGUuZ21hcC5tYXApO1xuXG4gICAgICAgICB0aGlzLnNldEdvb2dsZVBsYWNlSUQoKS50aGVuKGZ1bmN0aW9uKF9wbGFjZSkge1xuXG4gICAgICAgICAgUGxhY2VzU2VydmljZS5nZXREZXRhaWxzKCB7cGxhY2VJZDpfcGxhY2UuZ29vZ2xlUGxhY2VJZH0sIFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihwbGFjZSwgc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoYW5ndWxhci5leHRlbmQoX2xvY2F0aW9uLCBwbGFjZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgXG4gICAgICAgICB9KTtcbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cblxuXG4gIExvY2F0aW9uLnByb3RvdHlwZS50b2RheXNIb3VycyA9IGZ1bmN0aW9uKG9wZW5DbG9zZSkge1xuICAgIHZhciBkID0gbmV3IERhdGUoKSxcbiAgICAgICAgd2Vla2RheT0gZC5nZXREYXkoKTtcblxuICAgICAgcmV0dXJuICRmaWx0ZXIoJ2RhdGUnKShuZXcgRGF0ZSh0aGlzLm9wZW5pbmdfaG91cnMucGVyaW9kc1t3ZWVrZGF5XVtvcGVuQ2xvc2VdLm5leHREYXRlKSwgJ2hhJykucmVwbGFjZSgnTScsJycpO1xuXG4gIH1cblxuICAvLyBMb2NhdGlvbi5idWlsZCA9IGZ1bmN0aW9uKGxEYXRhKSB7XG4gIC8vICAgJGxvZy5sb2coJ2J1aWxkOntuYW1lfScsIGxEYXRhKTtcbiAgICBcbiAgLy8gICByZXR1cm4gbmV3IExvY2F0aW9uKGxEYXRhKTtcbiAgLy8gfVxuXG4gICBcblxuICBcbiBcbiAgcmV0dXJuIExvY2F0aW9uO1xuXG5cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLm1vZGVscycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTsiLCIndXNlIHN0cmljdCc7XG5cblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gT25Db25maWcoJHN0YXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRwcm92aWRlKSB7XG4gIFxuICAvL2FjdGl2YXRlIExvZ0RlY29yYXRvclxuICByZXF1aXJlKCcuL3V0aWxzL2xvZ2dpbmcvTG9nRGVjb3JhdG9yLmpzJykoJHByb3ZpZGUpO1xuXG4kc3RhdGVQcm92aWRlclxuXG4gIC5zdGF0ZSgnYXBwJywge1xuICAgIHVybDogJy9hcHAnLFxuICAgIGFic3RyYWN0OiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL21lbnUuaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ0FwcEN0cmwnLFxuICAgIHJlc29sdmU6e1xuICAgICAgICBjb29yZGluYXRlczpmdW5jdGlvbihDdXJyZW50Q29vcmRzLCAkdGltZW91dCkge1xuICAgICAgICAgICAgcmV0dXJuIEN1cnJlbnRDb29yZHMuZ2V0KCk7ICBcbiAgICAgICAgfVxuICAgIH1cbiAgfSlcbiAgLnN0YXRlKCdhcHAuY29ubmVjdCcsIHtcbiAgICB1cmw6ICcvY29ubmVjdCcsXG4gICAgdmlld3M6IHtcbiAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvY29ubmVjdC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0Nvbm5lY3RDdHJsIGFzIENvbm5lY3QnXG4gICAgICB9XG4gICAgfVxuICB9IClcblxuICAuc3RhdGUoJ2FwcC5sb2dpbicsIHtcbiAgICB1cmw6ICcvbG9naW4nLFxuICAgIHZpZXdzOiB7XG4gICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2xvZ2luLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTG9naW5DdHJsIGFzIExnbidcbiAgICAgIH1cbiAgICB9XG4gIH0gKVxuICBcbiAgLnN0YXRlKCdhcHAuYnJvd3NlJywge1xuICAgIHVybDogJy9icm93c2UnLFxuICAgIHZpZXdzOiB7XG4gICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2Jyb3dzZS5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0Jyb3dzZUN0cmwnXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIFxuICAuc3RhdGUoJ2FwcC5tYXAnLCB7XG4gICAgICB1cmw6ICcvbWFwJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9tYXAuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ01hcEN0cmwgYXMgTWFwJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG5cblxuICAvLyBpZiBub25lIG9mIHRoZSBhYm92ZSBzdGF0ZXMgYXJlIG1hdGNoZWQsIHVzZSB0aGlzIGFzIHRoZSBmYWxsYmFja1xuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvYXBwL21hcCcpO1xuICBcbiAgXG5cblxufS8vLy8gT25Db25maWdcblxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uQ29uZmlnOyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gT25SdW4oJGlvbmljUGxhdGZvcm0sICRsb2csICRhbmltYXRlKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdPblJ1bicpO1xuICAgXG4gICRpb25pY1BsYXRmb3JtLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICRhbmltYXRlLmVuYWJsZWQodHJ1ZSk7XG4gICAgXG4gICAgLy8gSGlkZSB0aGUgYWNjZXNzb3J5IGJhciBieSBkZWZhdWx0IChyZW1vdmUgdGhpcyB0byBzaG93IHRoZSBhY2Nlc3NvcnkgYmFyIGFib3ZlIHRoZSBrZXlib2FyZFxuICAgIC8vIGZvciBmb3JtIGlucHV0cylcbiAgICBpZiAod2luZG93LmNvcmRvdmEgJiYgd2luZG93LmNvcmRvdmEucGx1Z2lucy5LZXlib2FyZCkge1xuICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmhpZGVLZXlib2FyZEFjY2Vzc29yeUJhcih0cnVlKTtcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5kaXNhYmxlU2Nyb2xsKHRydWUpO1xuXG4gICAgfVxuICAgIGlmICh3aW5kb3cuU3RhdHVzQmFyKSB7XG4gICAgICAvLyBvcmcuYXBhY2hlLmNvcmRvdmEuc3RhdHVzYmFyIHJlcXVpcmVkXG4gICAgICBTdGF0dXNCYXIuc3R5bGVEZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPblJ1bjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEN1cnJlbnRDb29yZHMoJHEsICRodHRwLCAkbG9nLCAgQXBwU2V0dGluZ3MpIHtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoXCJDdXJyZW50Q29vcmRzU2VydmljZVwiKTtcbiAgdmFyIGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG4gIHZhciBzZXJ2aWNlID0ge307XG5cbiAgc2VydmljZS5nZXQgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7ICAgIFxuICAgIC8vIGdldCBsYXRpdGl1ZGUgYW5kIGxvbmdpdHVkZSBcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKHBvcykge1xuICAgICAgJGxvZy5kZWJ1ZygnbGF0OiB7Y29vcmRzLmxhdGl0dWRlfScscG9zKTtcbiAgICAgICRsb2cuZGVidWcoJ2xvbmc6IHtjb29yZHMubG9uZ2l0dWRlfScscG9zKTtcbiAgICAgIFxuXG4gICAgICAgLy8gZ2V0IGNpdHkgbmFtZSBmcm9tIGdvb2dsZSBhcGkgZ2VvY29kZXJcbiAgICAgIHZhciBsYXRsbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHBvcy5jb29yZHMubGF0aXR1ZGUsIHBvcy5jb29yZHMubG9uZ2l0dWRlKTtcbiAgICAgIHZhciBfY2l0eTtcblxuICAgICAgZ2VvY29kZXIuZ2VvY29kZSh7J2xhdExuZyc6IGxhdGxuZ30sIGZ1bmN0aW9uKHJlc3VsdHMsIHN0YXR1cykge1xuICAgICAgICAgIGlmIChzdGF0dXMgPT0gZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuT0sgJiYgcmVzdWx0c1sxXSkge1xuICAgICAgICAgICAgLy8gVE9ETzogY2xlYW51cCB1bmRlcnNjb3JzIHBhcnNpbmdcbiAgICAgICAgICAgICAgIF9jaXR5ID0gXy5jb21wYWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfLm1hcChyZXN1bHRzWzFdLmFkZHJlc3NfY29tcG9uZW50cywgZnVuY3Rpb24oY29tcCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoXy5jb250YWlucyhjb21wLnR5cGVzLCdsb2NhbGl0eScpKSByZXR1cm4gY29tcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSApXG4gICAgICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgcG9zLmNpdHkgPSBfY2l0eVswXS5sb25nX25hbWU7XG5cbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShwb3MpOyAgXG4gICAgICB9KTsvLy8gZW5kIGdlb2NvZGVcblxuICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAkbG9nLndhcm4oJ1VuYWJsZSB0byBnZXQgbG9jYXRpb246ICcgKyBlcnJvcik7XG4gICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yLCBzdGF0dXMpO1xuICAgfSk7XG4gICAgXG4gIFxuICAgIFxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ0N1cnJlbnRDb29yZHMnLCBDdXJyZW50Q29vcmRzKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cblxuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBMb2NhdGlvbnNTZXJ2aWNlKCRsb2csIFlvY2FsLCBMb2NhdGlvbiwgJHEsICR0aW1lb3V0KSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKFwiTG9jYXRpb25zU2VydmljZVNlcnZpY2VcIik7XG5cbiAgdmFyIHNlcnZpY2UgPSB7fTtcbiAgXG5cbiAgc2VydmljZS5nZXQgPSBmdW5jdGlvbiggZ2V0RGF0YSApIHtcblxuICAgICRsb2cuZGVidWcoJ0dFVCBsb2NhdGlvbiBpbiBhIHtyYWRpdXN9ICBvZiB7bGF0fSwge2xuZ30nLCBnZXREYXRhKTtcblxuICAgIHJldHVybiBZb2NhbC5nZXQoZ2V0RGF0YSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICAgIC8vIG9ubHkgcmV0dXJuIGxvY2F0aW9ucyB3aGVuIHRoZXkgaGF2ZSBBTExcbiAgICAgICAgICAgICAgICAgIC8vIGJlZW4gcG9wdWxhdGVkIHdpdGggZGF0YSBmcm9tIGFzeW5jIHNlcnZpY2VzXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJHEuYWxsKExvY2F0aW9uLnJlc3BvbnNlVHJhbnNmb3JtZXIoZGF0YSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIFxuICB9O1xuXG5cblxuICBzZXJ2aWNlLmFsbCA9IGZ1bmN0aW9uKCBnZXREYXRhICkge1xuXG4gICAgJGxvZy5kZWJ1ZygnQUxMJyk7XG5cbiAgICByZXR1cm4gWW9jYWwuYWxsKClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICAgIC8vIG9ubHkgcmV0dXJuIGxvY2F0aW9ucyB3aGVuIHRoZXkgaGF2ZSBBTExcbiAgICAgICAgICAgICAgICAgIC8vIGJlZW4gcG9wdWxhdGVkIHdpdGggdHJhdmVsVGltZXNcbiAgICAgICAgICAgICAgICAgIHJldHVybiAkcS5hbGwoTG9jYXRpb24ucmVzcG9uc2VUcmFuc2Zvcm1lcihkYXRhKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgfTtcblxuICByZXR1cm4gc2VydmljZTtcblxufVxuXG5zZXJ2aWNlc01vZHVsZS5zZXJ2aWNlKCdMb2NhdGlvbnNTZXJ2aWNlJywgTG9jYXRpb25zU2VydmljZSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2VydmljZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xudmFyIExvY2F0aW9uc01vY2sgPSB7XG4gIGRyaW5rOiByZXF1aXJlKCcuLi9EQVRBL0xvY2F0aW9uc01vY2tfZHJpbmsuanNvbicpLFxuICBmb29kOiAgcmVxdWlyZSgnLi4vREFUQS9Mb2NhdGlvbnNNb2NrX2Zvb2QuanNvbicpXG59O1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBZb2NhbCgkcSwgJGh0dHAsIEFwcFNldHRpbmdzLCAkbG9nLCAkdGltZW91dCkge1xuXG4gIHZhciBzZXJ2aWNlID0ge307XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKFwiWW9jYWxTZXJ2aWNlXCIpO1xuXG4gICAgXG5cbiAgc2VydmljZS5nZXQgPSBmdW5jdGlvbiggZ2V0RGF0YSApIHtcbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgZGVmZXJyZWQucmVzb2x2ZShMb2NhdGlvbnNNb2NrW2dldERhdGEuY2F0ZWdvcnkudG9Mb3dlckNhc2UoKV0pOyAgXG4gICAgfSwgMTAwMCk7XG5cbiAgICAvLyBsaXN0QnlEaXN0YW5jZUNhdC9Gb29kLzgwMDAvMzkuOTM3ODkzLy03NS4xNjg5MzQ3XG4gICAvLyAkaHR0cC5nZXQoQXBwU2V0dGluZ3MueW9jYWxBUEkuYmFzZSsnbGlzdEJ5RGlzdGFuY2VDYXQvJytnZXREYXRhLmNhdGVnb3J5KycvJytnZXREYXRhLnJhZGl1cysnLycrZ2V0RGF0YS5sYXQrJy8nK2dldERhdGEubG5nKVxuICAgLy8gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAvLyAgICAgICAgJGxvZy5kZWJ1ZygnZm91bmQge2xlbmd0aH0gJytnZXREYXRhLmNhdGVnb3J5Kycgc3BvdHMgd2l0aGluICcrZ2V0RGF0YS5yYWRpdXMrJyBtZXRlcnMgb2YgJytnZXREYXRhLmxhdCsnLCcrZ2V0RGF0YS5sbmcsIGRhdGEubG9jYXRpb25zKTtcbiAgIC8vICAgICAgICBkYXRhLnJhZGl1cyA9IGdldERhdGEucmFkaXVzO1xuICAgLy8gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAvLyAgICAgIH0pXG4gICAvLyAgICAgIC5lcnJvcihmdW5jdGlvbihlcnIsIHN0YXR1cykge1xuICAgLy8gICAgICAgICRsb2cud2FybignVW5hYmxlIHRvIGdldCBsb2NhdGlvbjogJyArIGVyci5tZXNzYWdlKTtcbiAgIC8vICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyLCBzdGF0dXMpO1xuICAgLy8gICAgICB9KTtcbiAgIFxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG5cblxuICBzZXJ2aWNlLmFsbCA9IGZ1bmN0aW9uKGdldERhdGEpe1xuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAvL2xpc3RCeURpc3RhbmNlQ2F0L0Zvb2QvODAwMC8zOS45Mzc4OTMvLTc1LjE2ODkzNDdcbiAgICRodHRwLmdldChBcHBTZXR0aW5ncy55b2NhbEFQSS5iYXNlKycvbGlzdCcpXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKCdhbGw6IGZvdW5kIHtsZW5ndGh9IHRvdGFsIHNwb3RzJywgZGF0YSk7XG4gICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGVyciwgc3RhdHVzKSB7XG4gICAgICAgICAgJGxvZy53YXJuKCdVbmFibGUgdG8gZ2V0IGxvY2F0aW9uOiAnICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIsIHN0YXR1cyk7XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG5cbiAgfVxuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ1lvY2FsJywgWW9jYWwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLnNlcnZpY2VzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNlcnZpY2VzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gRXhhbXBsZVNlcnZpY2UoJHEsICRodHRwKSB7XG5cbiAgdmFyIHNlcnZpY2UgPSB7fTtcblxuICBzZXJ2aWNlLmdldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAkaHR0cC5nZXQoJ2FwaVBhdGgnKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICB9KS5lcnJvcihmdW5jdGlvbihlcnIsIHN0YXR1cykge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyLCBzdGF0dXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cbn1cblxuc2VydmljZXNNb2R1bGUuc2VydmljZSgnRXhhbXBsZVNlcnZpY2UnLCBFeGFtcGxlU2VydmljZSk7IiwiLyoqXG4gKiBAYXV0aG9yICAgICBUaG9tYXMgQnVybGVzb25cbiAqIEBhdXRob3IgICAgIFN0YWNrT3ZlcmZsb3cgLSBIYXJ0bywgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzE1NDA4L2hvdy1kby1pLWZvcm1hdC1hLXRpbWVzdGFtcC1pbi1qYXZhc2NyaXB0LXRvLWRpc3BsYXktaXQtaW4tZ3JhcGhzLXV0Yy1pcy1maW5lXG4gKiBAZGVzY3JpcHRpb25cbiAqICBcbiAqIERhdGVUaW1lIHV0aWxpdHkgY2xhc3MgdGhhdCBzcGl0cyBvdXQgVVRDIHRpbWVzdGFtcCBzdHJpbmdzIHVzdWFsbHkgdXNlZCBpbiBhIHJlcG9ydGluZywgcHJpbnQtY2FwYWJsZSBwcm9jZXNzLlxuKi9cbiBcblxuICd1c2Ugc3RyaWN0JztcblxuXG52YXIgYnVpbGRUaW1lU3RyaW5nID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdClcbiAgICAgICAge1xuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8IFwiJWg6JW06JXM6JXpcIjtcblxuICAgICAgICAgICAgZnVuY3Rpb24gcGFkKHZhbHVlLCBpc01pbGxpU2Vjb25kcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgKGlzTWlsbGlTZWNvbmRzKSA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlzTWlsbGlTZWNvbmRzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGlzTWlsbGlTZWNvbmRzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUgPCAxMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIjAwXCIgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHZhbHVlIDwgMTAwKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiMFwiICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuKHZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoIDwgMikgPyBcIjBcIiArIHZhbHVlIDogdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQucmVwbGFjZSgvJShbYS16QS1aXSkvZywgZnVuY3Rpb24gKF8sIGZtdENvZGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3dpdGNoKGZtdENvZGUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJZXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiaFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0SG91cnMoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldE1pbnV0ZXMoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldFNlY29uZHMoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldE1pbGxpc2Vjb25kcygpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBmb3JtYXQgY29kZTogXCIgKyBmbXRDb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG4gLy8gUHVibGlzaCBBUEkgZm9yIERhdGVUaW1lIHV0aWxzXG4gICAgICAgIC8vIHJldHVybiB7XG4gICAgICAgIC8vICAgICBmb3JtYXR0ZWROb3c6IGZ1bmN0aW9uICgpXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGJ1aWxkVGltZVN0cmluZyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gXG4gbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZm9ybWF0dGVkTm93OiBmdW5jdGlvbiAoKSB7IHJldHVybiBidWlsZFRpbWVTdHJpbmcobmV3IERhdGUoKSk7IH1cbiB9O1xuXG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBMb2dEZWNvcmF0b3JcbiAqICBAc291cmNlOiBodHRwOi8vc29sdXRpb25vcHRpbWlzdC5jb20vMjAxMy8xMC8wNy9lbmhhbmNlLWFuZ3VsYXJqcy1sb2dnaW5nLXVzaW5nLWRlY29yYXRvcnMvXG4gKi9cblxuIHZhciBMb2dEZWNvcmF0b3IgPSBmdW5jdGlvbiggJHByb3ZpZGUgICl7XG5cblxuICAgICAgICAgICAgICAvLyBSZWdpc3RlciBvdXIgJGxvZyBkZWNvcmF0b3Igd2l0aCBBbmd1bGFySlMgJHByb3ZpZGVyXG4gICAgICAgICAgICAgICRwcm92aWRlLmRlY29yYXRvciggJyRsb2cnLCBbIFwiJGRlbGVnYXRlXCIsIGZ1bmN0aW9uKCAkZGVsZWdhdGUgKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAvLyBOT1RFOiB0aGUgTG9nRW5jaGFuY2VyIG1vZHVsZSByZXR1cm5zIGEgRlVOQ1RJT04gdGhhdCB3ZSBuYW1lZCBgZW5jaGFuY2VMb2dnZXJGbmBcbiAgICAgICAgICAgICAgIC8vICAgICAgIEFsbCB0aGUgZGV0YWlscyBvZiBob3cgdGhlIGBlbmNoYW5jZW1lbnRgIHdvcmtzIGlzIGVuY2Fwc3VsYXRlZCBpbiBMb2dFbmhhbmNlciFcblxuICAgICAgICAgICAgICAgICAgcmVxdWlyZSgnLi9Mb2dFbmhhbmNlci5qcycpKCAkZGVsZWdhdGUgKTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuICRkZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgfV0pO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9ICBMb2dEZWNvcmF0b3I7IiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBMb2dFbmhhbmNlclxuICogVGhpcyBhZGRzIHRpbWVzdGFtcHMgYW5kIHN1cHBsYW50IGZ1bmN0aW9uYWxpdHkgdG8gQW5ndWxhciAkbG9nIHNlcnZpY2VcbiAqIEBzb3VyY2U6IGh0dHA6Ly9zb2x1dGlvbm9wdGltaXN0LmNvbS8yMDEzLzEwLzA3L2VuaGFuY2UtYW5ndWxhcmpzLWxvZ2dpbmctdXNpbmctZGVjb3JhdG9ycy9cbiAqIEBhcGk6IHB1YmxpY1xuICogQHJldHVybnM6IE9iamVjdCAtIGV4dGVuZGVkICRsb2cgc2VydmljZVxuICovXG5cbnZhciBlbmNoYW5jZUxvZ2dlciA9IGZ1bmN0aW9uKCAkbG9nICl7XG4gIHZhciBzdXBwbGFudCA9IHJlcXVpcmUoJy4uL3N1cHBsYW50LmpzJyk7XG4gIHZhciBEYXRlVGltZSA9IHJlcXVpcmUoJy4uL0RhdGVUaW1lLmpzJyk7XG5cblxuICAvKipcbiAgICogQ2FwdHVyZSB0aGUgb3JpZ2luYWwgJGxvZyBmdW5jdGlvbnM7IGZvciB1c2UgaW4gZW5oYW5jZWRMb2dGbigpXG4gICAqIEBhcGkgIHByaXZhdGUgXG4gICAqL1xuICBcbiAgdmFyIF8kbG9nID0gKGZ1bmN0aW9uKCAkbG9nICl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2cgICA6ICRsb2cubG9nLFxuICAgICAgICBpbmZvICA6ICRsb2cuaW5mbyxcbiAgICAgICAgd2FybiAgOiAkbG9nLndhcm4sXG4gICAgICAgIGRlYnVnIDogJGxvZy5kZWJ1ZyxcbiAgICAgICAgZXJyb3IgOiAkbG9nLmVycm9yXG4gICAgICB9O1xuICB9KSggJGxvZyApOyBcblxuXG5cbiAgIC8qKlxuICAgICogUGFydGlhbCBhcHBsaWNhdGlvbiB0byBwcmUtY2FwdHVyZSBhIGxvZ2dlciBmdW5jdGlvblxuICAgICogQGFwaTogIHByaXZhdGUgXG4gICAgKiBAcmV0dXJuczogRnVuY3Rpb24gXG4gICAgKi9cbiAgICB2YXIgcHJlcGFyZUxvZ0ZuID0gZnVuY3Rpb24oIGxvZ0ZuLCBjbGFzc05hbWUsIGxvZ2dpbmcgKXtcbiAgICAgIFxuICAgICAgLyoqXG4gICAgICAgKiBJbnZva2UgdGhlIHNwZWNpZmllZCBgbG9nRm48YCB3aXRoIHRoZSBzdXBwbGFudCBmdW5jdGlvbmFsaXR5Li4uXG4gICAgICAgKiBAYXBpOiBwcml2YXRlIFxuICAgICAgICogQGV4YW1wbGU6IFxuICAgICAgICogICB2YXIgdXNlciA9IHsgd2hvOlwiVGhvbWFzIEJ1cmxlc29uXCJcIiwgZW1haWw9XCJUaG9tYXNCdXJsZXNvbkBnbWFpbC5jb21cIlwiIH07XG4gICAgICAgKiAgICRsb2cud2FybiggXCJBIHdhcm5pbmcgbWVzc2FnZSBmb3IgYHt3aG99YCB3aWxsIGJlIHNlbnQgdG8gYHtlbWFpbH1gICFcIiwgdXNlciApOyAgIFxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc2hvdWxkIG91dHB1dDogQSB3YXJuaW5nIG1lc3NhZ2UgZm9yIGBUaG9tYXMgQnVybGVzb25gIHdpbGwgYmUgc2VudCB0byBgVGhvbWFzQnVybGVzb25AZ21haWwuY29tYCAhXG4gICAgICAgKi9cbiAgICAgIHZhciBlbmhhbmNlZExvZ0ZuID0gZnVuY3Rpb24oICl7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgICAgIG5vdyAgPSBEYXRlVGltZS5mb3JtYXR0ZWROb3coKTtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnO1xuICAgICAgICAgICAgLy8gcHJlcGVuZCBhIHRpbWVzdGFtcCB0byB0aGUgb3JpZ2luYWwgb3V0cHV0IG1lc3NhZ2VcbiAgICAgICAgICAgIGFyZ3NbMF0gPSBzdXBwbGFudChcInswfSAtIHsxfXsyfVwiLCBbIG5vdywgY2xhc3NOYW1lLCBhcmdzWzBdIF0pO1xuXG4gICAgICAgIGlmKGxvZ2dpbmcpbG9nRm4uY2FsbCggbnVsbCwgIHN1cHBsYW50LmFwcGx5KCBudWxsLCBhcmdzICkgKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIFNwZWNpYWwuLi4gb25seSBuZWVkZWQgdG8gc3VwcG9ydCBhbmd1bGFyLW1vY2tzIGV4cGVjdGF0aW9uc1xuICAgICAgZW5oYW5jZWRMb2dGbi5sb2dzID0gWyBdO1xuICAgICAgXG4gICAgXG4gICAgICAgIHJldHVybiAgZW5oYW5jZWRMb2dGbjsgXG4gICAgICBcbiAgICAgIFxuICAgIH07XG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBTdXBwb3J0IHRvIGdlbmVyYXRlIGNsYXNzLXNwZWNpZmljIGxvZ2dlciBpbnN0YW5jZSB3aXRoIGNsYXNzbmFtZSBvbmx5XG4gICAgICpcbiAgICAgKiBAcGFyYW06IG5hbWVcbiAgICAgKiBAcmV0dXJuczogT2JqZWN0IHdyYXBwZXIgZmFjYWRlIHRvICRsb2dcbiAgICAgKi9cbiAgICB2YXIgZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiggY2xhc3NOYW1lLCBsb2dnaW5nKXtcbiAgICAgIGNsYXNzTmFtZSA9ICggY2xhc3NOYW1lICE9PSB1bmRlZmluZWQgKSA/IGNsYXNzTmFtZSArIFwiOjpcIiA6IFwiXCI7XG5cbiAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgIGxvZyAgIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5sb2csICAgY2xhc3NOYW1lLCBsb2dnaW5nICksXG4gICAgICAgICAgIGluZm8gIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5pbmZvLCAgY2xhc3NOYW1lLCBsb2dnaW5nICksXG4gICAgICAgICAgIHdhcm4gIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy53YXJuLCAgY2xhc3NOYW1lLCBsb2dnaW5nICksXG4gICAgICAgICAgIGRlYnVnIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5kZWJ1ZywgY2xhc3NOYW1lLCBsb2dnaW5nICksXG4gICAgICAgICAgIC8vIGVycm9yIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5lcnJvciwgIGNsYXNzTmFtZSApXG4gICAgICAgIH07ICBcbiAgICBcbiAgICB9O1xuXG5cblxuICAgIC8vIHdyYXAgZWFjaCBsb2cgbWV0aG9kIFxuICAgICRsb2cubG9nICAgPSBwcmVwYXJlTG9nRm4oICRsb2cubG9nICk7XG4gICAgJGxvZy5pbmZvICA9IHByZXBhcmVMb2dGbiggJGxvZy5pbmZvICk7XG4gICAgJGxvZy53YXJuICA9IHByZXBhcmVMb2dGbiggJGxvZy53YXJuICk7XG4gICAgJGxvZy5kZWJ1ZyA9IHByZXBhcmVMb2dGbiggJGxvZy5kZWJ1ZyApO1xuICAgIC8vICRsb2cuZXJyb3IgPSBwcmVwYXJlTG9nRm4oICRsb2cuZXJyb3IgKTtcblxuICAgIC8vIEFkZCBzcGVjaWFsIG1ldGhvZCB0byBBbmd1bGFySlMgJGxvZ1xuICAgICRsb2cuZ2V0SW5zdGFuY2UgPSBnZXRJbnN0YW5jZTtcbiBcblxuICAgIHJldHVybiAkbG9nO1xufTsvL2VuY2hhbmNlTG9nZ2VyXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9ICBlbmNoYW5jZUxvZ2dlcjsiLCIvKipcbiAqIEBhdXRob3IgICAgICBUaG9tYXMgQnVybGVzb25cbiAqIEBkYXRlICAgICAgICBOb3ZlbWJlciwgMjAxM1xuICogQHNvdXJjZTogICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9UaG9tYXNCdXJsZXNvbi9hbmd1bGFyanMtbG9nRGVjb3JhdG9yL2Jsb2IvbWFzdGVyL3NyYy9taW5kc3BhY2UvdXRpbHMvc3VwcGxhbnQuanNcbiAgKi9cbiBcblxuICd1c2Ugc3RyaWN0JztcblxudmFyIHN1cHBsYW50ID0gIGZ1bmN0aW9uKCB0ZW1wbGF0ZSwgdmFsdWVzLCBwYXR0ZXJuICkge1xuICAgICAgICAgICAgcGF0dGVybiA9IHBhdHRlcm4gfHwgL1xceyhbXlxce1xcfV0qKVxcfS9nO1xuXG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZShwYXR0ZXJuLCBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSBiLnNwbGl0KCcuJyksXG4gICAgICAgICAgICAgICAgICAgIHIgPSB2YWx1ZXM7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzIGluIHApIHsgciA9IHJbcFtzXV07ICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgICAgICAgICAgciA9IGE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgciA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHIgPT09ICdudW1iZXInKSA/IHIgOiBhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cblxuLy8gc3VwcGxhbnQoKSBtZXRob2QgZnJvbSBDcm9ja2ZvcmRzIGBSZW1lZGlhbCBKYXZhc2NyaXB0YFxuRnVuY3Rpb24ucHJvdG90eXBlLm1ldGhvZCA9IGZ1bmN0aW9uIChuYW1lLCBmdW5jKSB7XG4gICAgdGhpcy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuU3RyaW5nLm1ldGhvZChcInN1cHBsYW50XCIsIGZ1bmN0aW9uKCB2YWx1ZXMsIHBhdHRlcm4gKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBzdXBwbGFudChzZWxmLCB2YWx1ZXMsIHBhdHRlcm4pO1xufSk7XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gIFN0cmluZy5zdXBwbGFudCA9IHN1cHBsYW50OyJdfQ==
