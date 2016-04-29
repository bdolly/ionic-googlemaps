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

},{}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/bower_components/ionic-advanced-carousel/dist/advanced-carousel.min.js":[function(require,module,exports){
!function(){"use strict";
t.$inject = ["e", "t", "o", "n", "r"];
e.$inject = ["e", "o", "n"];function e(e,o,n){function r(t,r,i,l){function a(){var e=null!==l.options.template?'template="'+l.options.template+'"':"";l.itemDirective="undefined"==typeof l.itemDirective?"carousel-generic-item":l.itemDirective;var t="<"+l.itemDirective+' ng-model="item" '+e+'on-select="vm.selectItem(item)" carousel-options="menuCarousel.options" ';return t+="></"+l.itemDirective+">"}function s(){var e=n.$getByHandle(l.options.carouselId).getScrollView(),t=e.__container,o=e.touchStart,r=e.touchMove;t.removeEventListener("touchstart",e.touchStart),document.removeEventListener("touchmove",e.touchMove),e.touchStart=function(t){t.preventDefault=function(){},o.apply(e,[t])},e.touchMove=function(t){t.preventDefault=function(){},r.apply(e,[t])},t.addEventListener("touchstart",e.touchStart,!1),document.addEventListener("touchmove",e.touchMove,!1)}l.el=r,l.options.trackBy="undefined"!=typeof i.trackBy?i.trackBy:"$index",l.options.trackBystr="$index"===l.options.trackBy?"$index":"item."+l.options.trackBy;var c=l.options.animateIn?" animateIn":"",u='<div class="a-carousel">';l.options.pullRefresh.active&&(u+='<div class="spinner-wrapper" ng-if="vm.options.pullRefresh.loading"><ion-spinner icon="android"></ion-spinner></div>',u+='<span class="pullrefresh-indicator"><svg viewBox="0 0 64 64"><g><circle stroke-width="6" stroke-dasharray="135.26261239144287" stroke-dashoffset="16.51371474556214" r="26" cx="32" cy="32" fill="none" transform="scale(1,1) translate(0,0) rotate(0,32,32)"></circle></g></svg></span>'),u+="<ion-scroll ",l.options.pullRefresh.active&&(u+='on-scroll="vm.onScroll()" '),u+='scrollbar-x="false" delegate-handle="'+l.options.carouselId+'" zooming="false" direction="x" overflow-scroll="false" has-bouncing="true"><nav style="visibility:hidden;"><ul> <li ng-repeat="item in vm.arrayProvider track by '+l.options.trackBystr+'"class="carousel-item'+c+'"ng-class="{\'active\':vm.itemActive === item}">'+a()+"</li></ul></nav></ion-scroll></div>",u=e(u)(t),r.append(u),o(function(){l.arrayProvider&&l.arrayProvider.length>0&&l.initCarousel(),s()},0)}return{restrict:"E",replace:!0,template:"",scope:{},link:r,controller:t,controllerAs:"vm",bindToController:{itemDirective:"@",carouselOptions:"=",arrayProvider:"=",onSelect:"&"}}}function t(e,t,o,n,r){function i(){function t(e,t){var n;"object"==typeof t?(n=t.carouselId,angular.extend(f.options,t)):n=t,n===f.options.carouselId&&o(f.initCarousel,0)}function n(e,t){var o=t.idContains,n=t.except;f.options.carouselId.indexOf(o)>=0&&f.options.carouselId!==n&&(f.itemActive=null)}angular.extend(f.options,f.carouselOptions),e.$on("a-carousel.arrayupdated",t),e.$on("a-carousel.desactivateItem",n),f.options.pullRefresh.active&&e.$on("a-carousel.pullrefresh.done",p)}function l(){function e(){var t=parseInt(l[s-1].offsetWidth),n=parseInt(l[s-1].offsetHeight);t>0&&n>0?i():(console.log("[INFO] Creating Carousel but DOM not ready yet..."),g>h?o(function(){e()},50):console.log("[ERROR] Size item Carousel could not be determined",f.options.carouselId),h++)}function i(){var e,o=null!==f.options.selectAtStart.property;if(angular.forEach(l,function(t){e=f.arrayProvider[v],e.carouselId=f.options.carouselId,d+=t.offsetWidth,f.options.widthItem=Math.max(t.offsetWidth,f.options.widthItem),f.options.heightItem=Math.max(t.offsetHeight,f.options.heightItem),f.arrayProvider[v].widthItem=t.offsetWidth,o&&-1===f.options.selectAtStart.index&&e[f.options.selectAtStart.property]===f.options.selectAtStart.value&&(f.options.selectAtStart.index=v),v+=1}),f.options.centerOnSelect){var i=.5*n.innerWidth,s=l[0],h=l[u-1];p=i-.5*s.offsetWidth,m=i-.5*h.offsetWidth,d+=p+m,f.options.maxScroll=n.innerWidth-d,"right"===f.options.align?r.$getByHandle(f.options.carouselId).scrollTo(-1*f.options.maxScroll,0,!1):"center"===f.options.align?r.$getByHandle(f.options.carouselId).scrollTo(f.options.maxScroll*-.5,0,!1):r.$getByHandle(f.options.carouselId).scrollTo(0,0,!0)}else d+=4,f.options.maxScroll=n.innerWidth-d;f.options.widthCarousel=d,!o&&f.options.selectFirst?c("right"===f.options.align?f.arrayProvider[u-1]:f.arrayProvider[0]):o&&-1!==f.options.selectAtStart.index&&a(f.arrayProvider[f.options.selectAtStart.index]),f.navElem=t.find("nav"),f.navElem.css({width:d+"px",height:f.options.heightItem+"px",visibility:"visible","padding-left":p+"px"}),f.options.pullRefresh.active&&(f.pullrefreshIndicator=angular.element(document.querySelector(".a-carousel .pullrefresh-indicator")),f.svgElem=t.find("g"))}var l=t.find("li"),s=l.length,u=angular.element(l).length,d=0,p=0,m=0,v=0,h=0,g=15;if(f.itemActive=null,!(u>0))throw Error("Trying to create a carousel from an empty array",f.options);o(function(){e()},50)}function a(e){var t,o;if(c(e),f.options.centerOnSelect){var n=u(e);if(t=0,0===n)t=0;else for(o=0;n>o;o++)t+=.5*(f.arrayProvider[o].widthItem+f.arrayProvider[o+1].widthItem);r.$getByHandle(f.options.carouselId).scrollTo(t,0,!0)}}function s(){var e,t=r.$getByHandle(f.options.carouselId).getScrollPosition().left,o=0,i=0;if(e=f.options.maxScroll<0?t/f.options.maxScroll*-1:t/10,e>1){var l=t- -1*f.options.maxScroll;o=l/n.innerWidth,f.pullrefreshIndicator.css({transform:"translateX("+-56*i+"px)"})}o>.25&&t>0?(f.pullrefreshIndicator.css({transform:"translateX(0px)",display:"none"}),d()):(i=o/.2,f.svgElem[0].setAttribute("transform","rotate("+360*i+" 32 32)"),f.pullrefreshIndicator.css({transform:"translateX("+-56*i+"px)"}))}function c(t){f.itemActive=t,f.onSelect.call(null,{item:t}),e.$broadcast("a-carousel.itemselected",t)}function u(e){for(var t in f.arrayProvider)if(f.arrayProvider[t]===e)return t}function d(){f.options.pullRefresh.loading||(e.$apply(function(){f.options.pullRefresh.loading=!0}),r.$getByHandle(f.options.carouselId).freezeScroll(!0),f.navElem.css({width:f.options.widthCarousel+45+"px"}),r.$getByHandle(f.options.carouselId).resize(),f.options.pullRefresh.callBack())}function p(){f.options.pullRefresh.loading=!1,f.navElem.css({width:f.options.widthCarousel+"px"}),r.$getByHandle(f.options.carouselId).resize(),r.$getByHandle(f.options.carouselId).freezeScroll(!1),f.pullrefreshIndicator.css({transform:"translateX(0px)",display:"block"})}var f=this;f.options={showScroll:!1,carouselId:"my-carousel",template:null,align:"left",centerOnSelect:!0,widthItem:0,heightItem:0,trackBy:"$index",selectFirst:!0,selectAtStart:{property:null,value:null,index:-1},pullRefresh:{active:!1,callBack:angular.noop,loading:!1},animateIn:!1},f.initCarousel=l,f.selectItem=a,f.onScroll=s,i()}angular.module("aCarousel",[]).directive("aCarousel",e),e.$inject=["$compile","$timeout","$ionicScrollDelegate"],t.$inject=["$scope","$element","$timeout","$window","$ionicScrollDelegate"]}(),function(){"use strict";
t.$inject = ["e"];function e(){return{restrict:"E",replace:!0,templateUrl:function(e,t){return t.template},scope:{},controller:t,controllerAs:"vm",bindToController:{ngModel:"=",onSelect:"&",carouselOptions:"="}}}function t(e){function t(){e.$on("a-carousel.itemselected",function(e,t){o.selected=t===o.ngModel?!0:!1})}var o=this;o.selected=!1,t()}var o=document.getElementsByTagName("script");o[o.length-1].src;angular.module("aCarousel").directive("carouselGenericItem",e),t.$inject=["$scope"]}(),function(){"use strict";
t.$inject = ["e"];function e(){return{restrict:"E",replace:!0,template:'<a class="a-carousel-text-item"ng-bind="::vm.ngModel.display"ng-click="vm.onSelect({item:vm.ngModel})"></a>',scope:{},controller:t,controllerAs:"vm",bindToController:{ngModel:"=",onSelect:"&"}}}function t(e){function t(){e.$on("acarousel.itemselected",function(e,t){o.selected=t===o.ngModel?!0:!1})}var o=this;o.selected=!1,t()}angular.module("aCarousel").directive("carouselTextItem",e),t.$inject=["$scope"]}();

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

},{"../bower_components/angular-animate/angular-animate.min":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/bower_components/angular-animate/angular-animate.min.js","../bower_components/ionic-advanced-carousel/dist/advanced-carousel.min":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/bower_components/ionic-advanced-carousel/dist/advanced-carousel.min.js","../bower_components/ng-knob/dist/ng-knob.min":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/bower_components/ng-knob/dist/ng-knob.min.js","./constants.development":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/constants.development.js","./controllers/_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js","./directives/_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/directives/_index.js","./models/_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/models/_index.js","./on_config":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/on_config.js","./on_run":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/on_run.js","./services/_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/constants.development.js":[function(require,module,exports){
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
          $q.all(locations).then(function(data){
            console.log(data)
          })
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

},{"./_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/PlaylistCtrl.js":[function(require,module,exports){
'use strict';

PlaylistCtrl.$inject = ["$scope"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function PlaylistCtrl($scope) {
  


};

controllersModule.controller('PlaylistCtrl', PlaylistCtrl);

},{"./_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/PlaylistsCtrl.js":[function(require,module,exports){
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

},{"./_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js":[function(require,module,exports){
'use strict';



module.exports = angular.module('app.controllers', []);

({"AppCtrl":require("./AppCtrl.js"),"BrowseCtrl":require("./BrowseCtrl.js"),"ConnectCtrl":require("./ConnectCtrl.js"),"LoginCtrl":require("./LoginCtrl.js"),"MapCtrl":require("./MapCtrl.js"),"PlaylistCtrl":require("./PlaylistCtrl.js"),"PlaylistsCtrl":require("./PlaylistsCtrl.js")});

},{"./AppCtrl.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/AppCtrl.js","./BrowseCtrl.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/BrowseCtrl.js","./ConnectCtrl.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/ConnectCtrl.js","./LoginCtrl.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/LoginCtrl.js","./MapCtrl.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/MapCtrl.js","./PlaylistCtrl.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/PlaylistCtrl.js","./PlaylistsCtrl.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/PlaylistsCtrl.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/directives/_index.js":[function(require,module,exports){
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

},{"./_index.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/LocationsService.js":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItYW5pbWF0ZS9hbmd1bGFyLWFuaW1hdGUubWluLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvYm93ZXJfY29tcG9uZW50cy9pb25pYy1hZHZhbmNlZC1jYXJvdXNlbC9kaXN0L2FkdmFuY2VkLWNhcm91c2VsLm1pbi5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2Jvd2VyX2NvbXBvbmVudHMvbmcta25vYi9kaXN0L25nLWtub2IubWluLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvYXBwLW1haW4uanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb25zdGFudHMuZGV2ZWxvcG1lbnQuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9BcHBDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvQnJvd3NlQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL0Nvbm5lY3RDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvTG9naW5DdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvTWFwQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL1BsYXlsaXN0Q3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL1BsYXlsaXN0c0N0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9faW5kZXguanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9kaXJlY3RpdmVzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2RpcmVjdGl2ZXMvbUFwcExvYWRpbmdEaXJlY3RpdmUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9tb2RlbHMvR01hcC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL21vZGVscy9Mb2NhdGlvbk1vZGVsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvbW9kZWxzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL29uX2NvbmZpZy5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL29uX3J1bi5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3NlcnZpY2VzL0N1cnJlbnRDb29yZHNTZXJ2aWNlLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvTG9jYXRpb25zU2VydmljZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3NlcnZpY2VzL1lvY2FsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvX2luZGV4LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvZXhhbXBsZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL0RhdGVUaW1lLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvdXRpbHMvbG9nZ2luZy9Mb2dEZWNvcmF0b3IuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9sb2dnaW5nL0xvZ0VuaGFuY2VyLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvdXRpbHMvc3VwcGxhbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7QUFLQSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxhQUFhLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sU0FBUyxPQUFPLEdBQUcsSUFBSSxHQUFHLFlBQVksT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLE1BQU0sT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxPQUFPLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsT0FBTyxFQUFFLFFBQVEsS0FBSyxFQUFFLE1BQU07QUFDeGdCLEtBQUssRUFBRSxHQUFHLElBQUksRUFBRSxHQUFHLFNBQVMsT0FBTyxFQUFFLE1BQU0sUUFBUSxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFFLFNBQVMsT0FBTyxFQUFFLEdBQUcsU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLFNBQVMsT0FBTyxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxLQUFLLFNBQVMsR0FBRyxFQUFFLENBQUMsT0FBTyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxHQUFHLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLE1BQU0sRUFBRSxjQUFjLEdBQUcsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLFlBQVksT0FBTyxTQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtBQUNsZixFQUFFLEVBQUUsYUFBYSxVQUFVLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLE1BQU0sU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxJQUFJLEtBQUssRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsYUFBYSxJQUFJLEtBQUssRUFBRSxhQUFhLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxTQUFTLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxLQUFLLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEtBQUssT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNO0FBQzFmLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSyxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxZQUFZLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxHQUFHLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsY0FBYyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsR0FBRyxTQUFTLEVBQUUsSUFBSSxLQUFLLEVBQUUsSUFBSSxLQUFLLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLE9BQU8sYUFBYSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sT0FBTyxNQUFNLEVBQUUsRUFBRSxpQkFBaUIsSUFBSSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTztBQUNyZixHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sV0FBVyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLE9BQU8sSUFBSSxFQUFFLFdBQVcsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLElBQUksRUFBRSxHQUFHLElBQUksT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFLENBQUMsT0FBTyxJQUFJLEdBQUcsTUFBTSxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsV0FBVyxHQUFHLGNBQWMsTUFBTSxDQUFDLEVBQUUsR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxZQUFZLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsRUFBRSxHQUFHLFNBQVMsR0FBRztBQUN4ZixFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sT0FBTyxNQUFNLE1BQU0sQ0FBQyxNQUFNLFVBQVUsQ0FBQyxFQUFFLE9BQU8sT0FBTyxPQUFPLE1BQU0sU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxJQUFJLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEtBQUssSUFBSSxFQUFFLEVBQUUsS0FBSyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsU0FBUyxHQUFHLEVBQUUsU0FBUyxHQUFHLEVBQUUsWUFBWSxHQUFHLEVBQUUsVUFBVSxHQUFHLEVBQUUsV0FBVyxHQUFHLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEdBQUcsRUFBRSx3QkFBd0IsR0FBRyxFQUFFLG1CQUFtQixHQUFHO0NBQzNlLEVBQUUsYUFBYSxHQUFHLGlCQUFpQixFQUFFLGlCQUFpQixHQUFHLEVBQUUsdUJBQXVCLEdBQUcsRUFBRSxrQkFBa0IsR0FBRyxvQ0FBb0MsRUFBRSxZQUFZLEdBQUcsZ0JBQWdCLElBQUksR0FBRyxFQUFFLFFBQVEsR0FBRyxFQUFFLFdBQVcsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLFdBQVcsSUFBSSxHQUFHLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLEdBQUcsbUJBQW1CLEVBQUUsV0FBVyxrQkFBa0IsR0FBRyxlQUFlLEdBQUcsd0JBQXdCLEVBQUUsa0JBQWtCLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxnQkFBZ0IsR0FBRyxrQkFBa0IsR0FBRyxlQUFlLElBQUksRUFBRSxPQUFPO0FBQy9lLElBQUksVUFBVSxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsSUFBSSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssc0JBQXNCLENBQUMsR0FBRyxFQUFFLFNBQVMsb0JBQW9CLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxzQkFBc0IsT0FBTyxHQUFHLFNBQVMsU0FBUyxRQUFRLGFBQWEsQ0FBQyxRQUFRLFNBQVMsRUFBRSxDQUFDLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksT0FBTyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLFFBQVEsaUJBQWlCLENBQUMsUUFBUSxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxHQUFHLE9BQU8sSUFBSSxJQUFJLFNBQVMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsR0FBRztBQUNwZixFQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsR0FBRyxPQUFPLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxlQUFlLFNBQVMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUUsS0FBSyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsa0JBQWtCLENBQUMsS0FBSyxhQUFhLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxLQUFLLFFBQVEsR0FBRyxLQUFLLGVBQWUsR0FBRyxLQUFLLHFCQUFxQixJQUFJLEtBQUssT0FBTyxFQUFFLEVBQUUsTUFBTSxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksT0FBTyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtBQUNuZixFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssTUFBTSxFQUFFLFVBQVUsQ0FBQyxRQUFRLFNBQVMsRUFBRSxDQUFDLEtBQUssS0FBSyxHQUFHLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLEtBQUssZUFBZSxLQUFLLElBQUksU0FBUyxFQUFFLFdBQVcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxLQUFLLFFBQVEsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLFFBQVEsT0FBTyxLQUFLLFNBQVMsS0FBSyxTQUFTLEVBQUUsRUFBRSxDQUFDLE9BQU8sS0FBSyxhQUFhLEtBQUssRUFBRSxJQUFJLFFBQVEsU0FBUyxFQUFFLENBQUMsT0FBTyxLQUFLLGFBQWEsU0FBUyxJQUFJLFVBQVUsU0FBUyxFQUFFLENBQUMsT0FBTyxLQUFLLGFBQWEsV0FBVyxJQUFJLE1BQU0sVUFBVSxDQUFDLEtBQUssS0FBSztBQUM3Z0IsS0FBSyxLQUFLLFNBQVMsT0FBTyxVQUFVLENBQUMsS0FBSyxLQUFLLFFBQVEsS0FBSyxLQUFLLFVBQVUsSUFBSSxVQUFVLENBQUMsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxTQUFTLENBQUMsSUFBSSxPQUFPLFVBQVUsQ0FBQyxLQUFLLEtBQUssUUFBUSxLQUFLLEtBQUssU0FBUyxLQUFLLFNBQVMsQ0FBQyxJQUFJLFNBQVMsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFLFNB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RUFBRSxTQUFTLEtBQUssTUFBTSxFQUFFLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxZQUFZLEtBQUssTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEtBQUssTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsYUFBYSxLQUFLO0FBQ3hmLEdBQUcsQ0FBQyxFQUFFLEdBQUcsT0FBTyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLE9BQU8sU0FBUyxRQUFRLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsRUFBRSxPQUFPLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxNQUFNLE9BQU8sSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsR0FBRyxPQUFPLEVBQUUsT0FBTyxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sTUFBTSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxjQUFjLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsU0FBUyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUU7QUFDcGYsRUFBRSxRQUFRLEVBQUUsU0FBUyxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsT0FBTyxLQUFLLEVBQUUsUUFBUSxJQUFJLElBQUksUUFBUSxFQUFFLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxPQUFPLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsYUFBYSxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxVQUFVLEdBQUcsRUFBRSxFQUFFLEVBQUUsU0FBUyxZQUFZLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLFVBQVUsR0FBRyxHQUFHLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUUsRUFBRSxlQUFlLEVBQUUsTUFBTSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsRUFBRSxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUU7QUFDamYsRUFBRSxZQUFZLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsVUFBVSxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsTUFBTSxFQUFFLFFBQVEsR0FBRyxFQUFFLEVBQUUsRUFBRSxRQUFRLE1BQU0sT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsaUJBQWlCLHFCQUFx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QUFFLEVBQUUsYUFBYSxrQkFBa0IsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLEtBQUssT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDeGYsRUFBRSxHQUFHLENBQUMsUUFBUSxRQUFRLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxPQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxhQUFhLGtCQUFrQixFQUFFLEdBQUcsRUFBRSxJQUFJLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxLQUFLLEtBQUssSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsWUFBWSxXQUFXLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsWUFBWSxVQUFVLENBQUMsRUFBRSxjQUFjLEVBQUUsZUFBZSxNQUFNLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRTtBQUN0ZixLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsSUFBSSxFQUFFLFFBQVEsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFLEtBQUssR0FBRyxFQUFFLEtBQUssSUFBSSxFQUFFLEdBQUcsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLEtBQUssRUFBRSxFQUFFLE1BQU0sS0FBSyxJQUFJLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksR0FBRyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLE9BQU8sT0FBTyxFQUFFLEtBQUssS0FBSyxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxPQUFPO0FBQ3JmLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLFNBQVMsUUFBUSxHQUFHLEVBQUUsRUFBRSxHQUFHLFNBQVMsUUFBUSxJQUFJLEVBQUUsRUFBRSxTQUFTLFFBQVEsR0FBRyxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLFdBQVcsSUFBSSxFQUFFLFdBQVcscUJBQXFCLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsZUFBZSxHQUFHLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxZQUFZLGNBQWMsRUFBRSxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsT0FBTyxTQUFTLFFBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssT0FBTyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsT0FBTyxPQUFPLElBQUksRUFBRSxFQUFFLEtBQUs7QUFDN2UsR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssU0FBUyxHQUFHLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxFQUFFLFlBQVksSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFLFlBQVksTUFBTSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsWUFBWSxVQUFVLENBQUMsRUFBRSxTQUFTLGNBQWMsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLE1BQU0sSUFBSSxFQUFFLEdBQUcsV0FBVyxJQUFJLEdBQUcsRUFBRSxFQUFFLE9BQU8sT0FBTyxFQUFFLEVBQUUsYUFBYSxVQUFVLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEdBQUcsU0FBUyxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxjQUFjLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUU7QUFDcGYsRUFBRSxLQUFLLFNBQVMsRUFBRSxHQUFHLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxF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LElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssVUFBVSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssVUFBVSxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxNQUFNLFNBQVMsRUFBRTtBQUMxZixFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFFBQVEsSUFBSSxFQUFFLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFNBQVMsS0FBSyxPQUFPLElBQUksU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxTQUFTLEdBQUcsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTTtBQUNqZixFQUFFLEVBQUUsRUFBRSxHQUFHLE9BQU8sRUFBRSxjQUFjLEVBQUUs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QUFFLE9BQU8sT0FBTyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzllLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLE9BQU8sU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsVUFBVSxJQUFJLFVBQVUsUUFBUSxHQUFHLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsRUFBRSxLQUFLLFVBQVUsR0FBRyxFQUFFLFdBQVcsR0FBRyxJQUFJLEVBQUUsVUFBVSxFQUFFLGNBQWMsR0FBRyxJQUFJLEVBQUUsY0FBYyxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsR0FBRyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE9BQU8sR0FBRyxjQUFjLEVBQUUsT0FBTyxHQUFHLEVBQUUsR0FBRyxVQUFVLEdBQUcsU0FBUyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztBQUMxZ0IsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxHQUFHLEVBQUUsS0FBSyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FB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LFNBQVMsR0FBRyxRQUFRLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsY0FBYyxHQUFHLEVBQUUsV0FBVyxFQUFFLFFBQVEsV0FBVyxHQUFHLEVBQUUsWUFBWSxFQUFFLFFBQVEsVUFBVSxLQUFLLElBQUksRUFBRSxZQUFZLEVBQUUsUUFBUSxXQUFXLEVBQUUsUUFBUSxXQUFXLEtBQUssSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRLFlBQVksRUFBRSxjQUFjLEdBQUcsVUFBVSxFQUFFLFlBQVksR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLGNBQWMsT0FBTyxFQUFFLEVBQUUsUUFBUSxjQUFjLFlBQVksRUFBRSxRQUFRLGNBQWMsUUFBUSxFQUFFLFFBQVEsY0FBYyxNQUFNLEdBQUcsR0FBRyxJQUFJLEVBQUUsUUFBUSxlQUFlLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsRUFBRSxHQUFHLEVBQUUsWUFBWSxHQUFHLEVBQUUsRUFBRSxFQUFFLFFBQVEsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxNQUFNLEVBQUUsYUFBYSxFQUFFLFFBQVEsWUFBWSxTQUFTLENBQUMsRUFBRSxFQUFFLFFBQVEsVUFBVSxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsUUFBUSxNQUFNLEVBQUUsYUFBYSxFQUFFLFFBQVEsWUFBWSxTQUFTLEVBQUUsUUFBUSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxRQUFRLFlBQVksU0FBUyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxFQUFFLFFBQVEsVUFBVSxFQUFFLFdBQVcsRUFBRSxFQUFFLFFBQVEsY0FBYyxFQUFFLENBQUMsR0FBRyxFQUFFLFFBQVEsWUFBWSxFQUFFLFVBQVUsRUFBRSxRQUFRLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLGNBQWMsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsY0FBYyxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsUUFBUSxjQUFjLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxPQUFPLEVBQUUsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssT0FBTyxFQUFFLFFBQVEsV0FBVyxLQUFLLFdBQVcsVUFBVSxlQUFlLEVBQUUsT0FBTyxFQUFFLFFBQVEsWUFBWSxTQUFTLEVBQUUscUJBQXFCLFFBQVEsUUFBUSxTQUFTLGNBQWMsdUNBQXVDLEVBQUUsUUFBUSxFQUFFLEtBQUssTUFBTSxJQUFJLEVBQUUsRUFBRSxLQUFLLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLFFBQVEsR0FBRyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxXQUFXLEtBQUssRUFBRSxFQUFFLEdBQUcsTUFBTSxNQUFNLGtEQUFrRCxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLGVBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUUsY0FBYyxHQUFHLFVBQVUsRUFBRSxjQUFjLEVBQUUsR0FBRyxXQUFXLEVBQUUsYUFBYSxFQUFFLFFBQVEsWUFBWSxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksU0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsUUFBUSxZQUFZLG9CQUFvQixLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsUUFBUSxVQUFVLEVBQUUsRUFBRSxFQUFFLFFBQVEsVUFBVSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLFFBQVEsVUFBVSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUscUJBQXFCLElBQUksQ0FBQyxVQUFVLGNBQWMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUscUJBQXFCLElBQUksQ0FBQyxVQUFVLGtCQUFrQixRQUFRLFNBQVMsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLFFBQVEsR0FBRyxhQUFhLFlBQVksVUFBVSxJQUFJLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixJQUFJLENBQUMsVUFBVSxjQUFjLENBQUMsR0FBRyxFQUFFLFNBQVMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFLFNBQVMsS0FBSyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsV0FBVywwQkFBMEIsR0FBRyxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsY0FBYyxHQUFHLEVBQUUsY0FBYyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsR0FBRyxDQUFDLEVBQUUsUUFBUSxZQUFZLFVBQVUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLFFBQVEsWUFBWSxRQUFRLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRLFlBQVksYUFBYSxDQUFDLEdBQUcsRUFBRSxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxjQUFjLEdBQUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLFlBQVksU0FBUyxFQUFFLFFBQVEsWUFBWSxZQUFZLFNBQVMsR0FBRyxDQUFDLEVBQUUsUUFBUSxZQUFZLFFBQVEsQ0FBQyxFQUFFLEVBQUUsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsY0FBYyxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsWUFBWSxTQUFTLEVBQUUsYUFBYSxFQUFFLFFBQVEsWUFBWSxhQUFhLENBQUMsR0FBRyxFQUFFLHFCQUFxQixJQUFJLENBQUMsVUFBVSxrQkFBa0IsUUFBUSxVQUFVLElB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VSxhQUFhLGNBQWMsT0FBTyxLQUFLLEtBQUssVUFBVSxRQUFRLFNBQVMsSUFBSSxJQUFJLE1BQU0sTUFBTSxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxPQUFPLFFBQVEsS0FBSyxLQUFLLE9BQU8sS0FBSyxJQUFJLEtBQUssTUFBTSxPQUFPLEtBQUssWUFBWSxhQUFhLEtBQUssUUFBUSxLQUFLLEVBQUUsS0FBSyxLQUFLLFFBQVEsS0FBSyxFQUFFLEtBQUssT0FBTyxLQUFLLFFBQVEsV0FBVyxDQUFDLElBQUksT0FBTyxLQUFLLEdBQUcsUUFBUSxPQUFPLE1BQU0sS0FBSyxLQUFLLE9BQU8sTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLENBQUMsSUFBSSxZQUFZLFNBQVMsS0FBSyxRQUFRLEtBQUssRUFBRSxJQUFJLFdBQVcsS0FBSyxlQUFlLEtBQUssUUFBUSxXQUFXLEtBQUssU0FBUyxLQUFLLGVBQWUsS0FBSyxRQUFRLFNBQVMsS0FBSyxLQUFLLFFBQVEsTUFBTSxVQUFVLGFBQWEsS0FBSyxRQUFRLE1BQU0sTUFBTSxLQUFLLFFBQVEsTUFBTSxZQUFZLElBQUksS0FBSyxpQkFBaUIsWUFBWSxLQUFLLFFBQVEsV0FBVyxrQkFBa0IsWUFBWSxLQUFLLFFBQVEsU0FBUyxpQkFBaUIsWUFBWSxLQUFLLFFBQVEsU0FBUyxvQkFBb0IsRUFBRSxpQkFBaUIsWUFBWSxrQkFBa0IsWUFBWSxpQkFBaUIsWUFBWSxvQkFBb0IsWUFBWSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsWUFBWSxLQUFLLENBQUMsS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFlBQVksRUFBRSxrQkFBa0IsS0FBSyxrQkFBa0IsTUFBTSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsYUFBYSxLQUFLLENBQUMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLFVBQVUsRUFBRSxtQkFBbUIsS0FBSyxrQkFBa0IsS0FBSyxtQkFBbUIsS0FBSyxrQkFBa0IsTUFBTSxLQUFLLFFBQVEsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLEVBQUUsWUFBWSxXQUFXLFdBQVcsU0FBUyxLQUFLLFFBQVEsS0FBSyxPQUFPLGlCQUFpQixpQkFBaUIsS0FBSyxRQUFRLEtBQUssTUFBTSxLQUFLLFFBQVEsS0FBSyxXQUFXLGtCQUFrQixrQkFBa0IsS0FBSyxRQUFRLEtBQUssTUFBTSxLQUFLLFFBQVEsS0FBSyxXQUFXLGlCQUFpQixpQkFBaUIsS0FBSyxRQUFRLEtBQUssTUFBTSxLQUFLLFFBQVEsS0FBSyxXQUFXLG9CQUFvQixvQkFBb0IsS0FBSyxRQUFRLEtBQUssTUFBTSxLQUFLLFFBQVEsS0FBSyxXQUFXLEtBQUssUUFBUSxLQUFLLFVBQVUsWUFBWSxLQUFLLFFBQVEsS0FBSyxNQUFNLFlBQVksV0FBVyxXQUFXLEtBQUssU0FBUyxLQUFLLFVBQVUsaUJBQWlCLGlCQUFpQixXQUFXLFVBQVUsS0FBSyxVQUFVLEtBQUssVUFBVSxrQkFBa0Isa0JBQWtCLFdBQVcsV0FBVyxLQUFLLFFBQVEsUUFBUSxLQUFLLFNBQVMsS0FBSyxVQUFVLGlCQUFpQixpQkFBaUIsV0FBVyxXQUFXLEtBQUssUUFBUSxRQUFRLEtBQUssWUFBWSxLQUFLLFVBQVUsb0JBQW9CLG9CQUFvQixXQUFXLFdBQVcsS0FBSyxVQUFVLFNBQVMsU0FBUyxpQkFBaUIsYUFBYSxDQUFDLElBQUksSUFBSSxHQUFHLE9BQU8sS0FBSyxTQUFTLE9BQU8sT0FBTyxLQUFLLFFBQVEsS0FBSyxRQUFRLE1BQU0sS0FBSyxTQUFTLEtBQUssUUFBUSxNQUFNLEdBQUcsS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLElBQUksS0FBSyxNQUFNLFFBQVEsQ0FBQyxLQUFLLEtBQUssUUFBUSxVQUFVLEtBQUssUUFBUSxhQUFhLENBQUMsSUFBSSxTQUFTLEdBQUcsS0FBSyxRQUFRLEtBQUssS0FBSyxTQUFTLEtBQUssUUFBUSxXQUFXLFNBQVMsS0FBSyxRQUFRLFNBQVMsTUFBTSxLQUFLLFFBQVEsS0FBSyxJQUFJLEtBQUssTUFBTSxLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksRUFBRSxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssUUFBUSxpQkFBaUIsRUFBRSxLQUFLLFFBQVEsZUFBZSxJQUFJLElBQUksT0FBTyxRQUFRLEtBQUssS0FBSyxRQUFRLEtBQUssY0FBYyxVQUFVLEtBQUssWUFBWSxVQUFVLE1BQU0sT0FBTyxLQUFLLFFBQVEsV0FBVyxLQUFLLEVBQUUsS0FBSyxRQUFRLE1BQU0sSUFBSSxLQUFLLFlBQVksYUFBYSxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sS0FBSyxRQUFRLEtBQUssRUFBRSxJQUFJLEtBQUssUUFBUSxNQUFNLEtBQUssS0FBSyxRQUFRLFFBQVEsVUFBVSxTQUFTLElBQUksS0FBSyxRQUFRLEtBQUssS0FBSyxTQUFTLEtBQUssUUFBUSxRQUFRLE9BQU8sU0FBUyxLQUFLLFFBQVEsUUFBUSxLQUFLLE1BQU0sSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLFlBQVksS0FBSyxjQUFjLFVBQVUsS0FBSyxZQUFZLFVBQVUsTUFBTSxPQUFPLEtBQUssUUFBUSxRQUFRLE9BQU8sS0FBSyxLQUFLLFFBQVEsUUFBUSxNQUFNLEtBQUssWUFBWSxhQUFhLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxLQUFLLFFBQVEsS0FBSyxFQUFFLElBQUksS0FBSyxRQUFRLE1BQU0sTUFBTSxHQUFHLEtBQUssUUFBUSxNQUFNLFFBQVEsQ0FBQyxJQUFJLE9BQU8sU0FBUyxLQUFLLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxLQUFLLGVBQWUsS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLEtBQUssV0FBVyxLQUFLLGVBQWUsS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLEtBQUssS0FBSyxFQUFFLEdBQUcsSUFBSSxLQUFLLFFBQVEsWUFBWSxNQUFNLEtBQUssUUFBUSxXQUFXLEtBQUssR0FBRyxTQUFTLEtBQUssUUFBUSxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxRQUFRLE1BQU0sTUFBTSxPQUFPLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxTQUFTLEtBQUssUUFBUSxNQUFNLFNBQVMsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLE1BQU0sTUFBTSxLQUFLLEdBQUcsTUFBTSxVQUFVLElBQUksVUFBVSxDQUFDLE9BQU8sTUFBTSxPQUFPLFdBQVcsY0FBYyxLQUFLLEdBQUcsRUFBRSxhQUFhLE9BQU8sR0FBRyxTQUFTLE1BQU0sQ0FBQyxHQUFHLE9BQU8sS0FBSyxJQUFJLE9BQU8sT0FBTyxHQUFHLE9BQU8sS0FBSyxJQUFJLE9BQU8sT0FBTyxFQUFFLFNBQVMsSUFBSSxVQUFVLFVBQVUsS0FBSyxNQUFNLFFBQVEsT0FBTyxVQUFVLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksR0FBRyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxLQUFLLEtBQUssUUFBUSxNQUFNLGFBQWEsR0FBRyxVQUFVLEtBQUssUUFBUSxNQUFNLEtBQUssQ0FBQyxJQUFJLE9BQU8sS0FBSyxRQUFRLE1BQU0sT0FBTyxPQUFPLEtBQUssUUFBUSxLQUFLLEVBQUUsU0FBUyxLQUFLLFFBQVEsTUFBTSxTQUFTLEtBQUssR0FBRyxNQUFNLFVBQVUsSUFBSSxVQUFVLENBQUMsT0FBTyxNQUFNLE9BQU8sV0FBVyxjQUFjLEtBQUssR0FBRyxFQUFFLGFBQWEsT0FBTyxHQUFHLFNBQVMsTUFBTSxDQUFDLEdBQUcsT0FBTyxLQUFLLElBQUksT0FBTyxPQUFPLEdBQUcsT0FBTyxLQUFLLElBQUksT0FBTyxPQUFPLEdBQUcsT0FBTyxLQUFLLElBQUksUUFBUSxPQUFPLFFBQVEsR0FBRyxPQUFPLEtBQUssSUFBSSxRQUFRLE9BQU8sV0FBVyxJQUFJLFVBQVUsUUFBUSxLQUFLLE1BQU0sUUFBUSxPQUFPLFFBQVEsS0FBSyxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksR0FBRyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksZUFBZSxLQUFLLFFBQVEsTUFBTSxNQUFNLE9BQU8sS0FBSyxRQUFRLE1BQU0sU0FBUyxTQUFTLEtBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFVBQVUsQ0FBQyxLQUFLLEtBQUssUUFBUSxLQUFLLFFBQVEsS0FBSyxRQUFRLElBQUksS0FBSyxTQUFTLFdBQVcsQ0FBQyxLQUFLLEtBQUssUUFBUSxhQUFhLEtBQUssUUFBUSxnQkFBZ0IsS0FBSyxXQUFXLEtBQUssUUFBUSxJQUFJLEtBQUssVUFBVSxZQUFZLENBQUMsS0FBSyxLQUFLLFFBQVEsZUFBZSxLQUFLLFdBQVcsS0FBSyxRQUFRLElBQUksS0FBSyxVQUFVLFlBQVksQ0FBQyxlQUFlLElBQUksS0FBSyxVQUFVLEtBQUssUUFBUSxJQUFJLEtBQUssU0FBUyxXQUFXLENBQUMsS0FBSyxLQUFLLFFBQVEsV0FBVyxJQUFJLE9BQU8sVUFBVSxLQUFLLFFBQVEsV0FBVyxPQUFPLFdBQVcsS0FBSyxRQUFRLElBQUksS0FBSyxZQUFZLGNBQWMsQ0FBQyxlQUFlLEVBQUUsT0FBTyxRQUFRLGlCQUFpQixlQUFlLEtBQUssVUFBVSxLQUFLLFNBQVMsT0FBTyxDQUFDLFNBQVMsaUJBQWlCLENBQUMsS0FBSyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLEVBQUUsS0FBSyxRQUFRLEtBQUssRUFBRSxFQUFFLEdBQUcsTUFBTSxFQUFFLEtBQUssUUFBUSxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsa0JBQWtCLENBQUMsS0FBSyxPQUFPLENBQUMsRUFBRSxJQUFJLE9BQU8sR0FBRyxNQUFNLEtBQUssWUFBWSxFQUFFLE9BQU8sR0FBRyxLQUFLLFFBQVEsS0FBSyxFQUFFLEVBQUUsT0FBTyxHQUFHLEtBQUssUUFBUSxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsWUFBWSxFQUFFLEVBQUUsUUFBUSxDQUFDLElBQUksUUFBUSxNQUFNLElBQUksS0FBSyxLQUFLLEVBQUUsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxNQUFNLElBQUksTUFBTSxJQUFJLEtBQUssUUFBUSxXQUFXLElBQUksTUFBTSxDQUFDLEtBQUssUUFBUSxDQUFDLE1BQU0sTUFBTSxLQUFLLEdBQUcsS0FBSyxLQUFLLE1BQU0sS0FBSyxlQUFlLFFBQVEsS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFlBQVksS0FBSyxPQUFPLEtBQUssUUFBUSxLQUFLLEtBQUssT0FBTyxLQUFLLFFBQVEsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLEtBQUssTUFBTSxLQUFLLFFBQVEsTUFBTSxLQUFLLFFBQVEsS0FBSyxLQUFLLElBQUksS0FBSyxRQUFRLEtBQUssSUFBSSxLQUFLLE1BQU0sS0FBSyxNQUFNLFFBQVEsSUFBSSxPQUFPLEtBQUssT0FBTyxLQUFLLFNBQVMsU0FBUyxLQUFLLGVBQWUsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxNQUFNLEtBQUssVUFBVSxLQUFLLElBQUksS0FBSyxVQUFVLFVBQVUsS0FBSyxVQUFVLFNBQVMsS0FBSyxlQUFlLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsTUFBTSxLQUFLLFdBQVcsS0FBSyxJQUFJLEtBQUssWUFBWSxLQUFLLFFBQVEsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssUUFBUSxpQkFBaUIsRUFBRSxLQUFLLFFBQVEsZUFBZSxJQUFJLEdBQUcsT0FBTyxLQUFLLFNBQVMsT0FBTyxTQUFTLEtBQUssRUFBRSxLQUFLLFFBQVEsTUFBTSxLQUFLLEdBQUcsT0FBTyxLQUFLLFNBQVMsT0FBTyxPQUFPLFNBQVMsSUFBSSxLQUFLLEtBQUssS0FBSyxhQUFhLElBQUksYUFBYSxHQUFHLFNBQVMsT0FBTyxHQUFHLE9BQU8saUJBQWlCLEdBQUcsVUFBVSxrQkFBa0IsS0FBSyxTQUFTLGlCQUFpQixjQUFjLEtBQUssUUFBUSxRQUFRLFFBQVEsS0FBSyxVQUFVLGFBQWEsS0FBSyxLQUFLLFFBQVEsUUFBUSxNQUFNLFNBQVMsS0FBSyxRQUFRLFFBQVEsVUFBVSxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxHQUFHLFlBQVksS0FBSyxlQUFlLEtBQUssUUFBUSxXQUFXLEtBQUssS0FBSyxlQUFlLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsTUFBTSxPQUFPLFNBQVMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLEdBQUcsS0FBSyxVQUFVLEtBQUssSUFBSSxLQUFLLFNBQVMsU0FBUyxNQUFNLEtBQUssV0FBVyxLQUFLLElBQUksS0FBSyxVQUFVLFNBQVMsVUFBVSxLQUFLLFVBQVUsU0FBUyxLQUFLLGVBQWUsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxNQUFNLEtBQUssV0FBVyxLQUFLLElBQUksS0FBSyxXQUFXLEtBQUssU0FBUyxTQUFTLEtBQUssZUFBZSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLE1BQU0sS0FBSyxVQUFVLEtBQUssSUFBSSxLQUFLLFlBQVksS0FBSyxVQUFVLFNBQVMsU0FBUyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxLQUFLLE9BQU8sS0FBSyxRQUFRLEtBQUssS0FBSyxPQUFPLEtBQUssUUFBUSxJQUFJLENBQUMsSUFBSSxRQUFRLEtBQUssZUFBZSxTQUFTLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxLQUFLLEdBQUcsS0FBSyxNQUFNLEtBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLElBQUksU0FBUyxLQUFLLFFBQVEsTUFBTSxLQUFLLFFBQVEsS0FBSyxLQUFLLElBQUksS0FBSyxRQUFRLEtBQUssSUFBSSxLQUFLLE1BQU0sS0FBSyxNQUFNLFFBQVEsSUFBSSxLQUFLLFVBQVUsU0FBUyxTQUFTLEdBQUcsT0FBTyxLQUFLLFNBQVMsT0FBTyxjQUFjLEtBQUssSUFBSSxLQUFLLFdBQVcsS0FBSyxTQUFTLFNBQVMsU0FBUyxHQUFHLE9BQU8sS0FBSyxTQUFTLE9BQU8sYUFBYSxLQUFLLElBQUksS0FBSyxVQUFVLEtBQUssUUFBUSxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxRQUFRLGlCQUFpQixFQUFFLEtBQUssUUFBUSxlQUFlLElBQUksR0FBRyxPQUFPLEtBQUssU0FBUyxPQUFPLFNBQVMsS0FBSyxFQUFFLEtBQUssUUFBUSxNQUFNLE9BQU8sR0FBRyxLQUFLLEtBQUssR0FBRyxjQUFjLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksUUFBUSxLQUFLLEtBQUssU0FBUyxNQUFNLFFBQVEsQ0FBQyxNQUFNLE1BQU0sTUFBTSxPQUFPLEVBQUUsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssU0FBUyxNQUFNLEdBQUcsTUFBTSxtQkFBbUIsV0FBVyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLElBQUksS0FBSyxVQUFVLEtBQUssSUFBSSxXQUFXLEVBQUUsU0FBUyxJQUFJLEtBQUssR0FBRyxhQUFhLENBQUMsRUFBRSxlQUFlLFNBQVMsRUFBRSxDQUFD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QUFTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG4gQW5ndWxhckpTIHYxLjQuM1xuIChjKSAyMDEwLTIwMTUgR29vZ2xlLCBJbmMuIGh0dHA6Ly9hbmd1bGFyanMub3JnXG4gTGljZW5zZTogTUlUXG4qL1xuKGZ1bmN0aW9uKEYsdCxXKXsndXNlIHN0cmljdCc7ZnVuY3Rpb24gdWEoYSxiLGMpe2lmKCFhKXRocm93IG5nTWluRXJyKFwiYXJlcVwiLGJ8fFwiP1wiLGN8fFwicmVxdWlyZWRcIik7cmV0dXJuIGF9ZnVuY3Rpb24gdmEoYSxiKXtpZighYSYmIWIpcmV0dXJuXCJcIjtpZighYSlyZXR1cm4gYjtpZighYilyZXR1cm4gYTtYKGEpJiYoYT1hLmpvaW4oXCIgXCIpKTtYKGIpJiYoYj1iLmpvaW4oXCIgXCIpKTtyZXR1cm4gYStcIiBcIitifWZ1bmN0aW9uIEVhKGEpe3ZhciBiPXt9O2EmJihhLnRvfHxhLmZyb20pJiYoYi50bz1hLnRvLGIuZnJvbT1hLmZyb20pO3JldHVybiBifWZ1bmN0aW9uIGJhKGEsYixjKXt2YXIgZD1cIlwiO2E9WChhKT9hOmEmJlUoYSkmJmEubGVuZ3RoP2Euc3BsaXQoL1xccysvKTpbXTt1KGEsZnVuY3Rpb24oYSxzKXthJiYwPGEubGVuZ3RoJiYoZCs9MDxzP1wiIFwiOlwiXCIsZCs9Yz9iK2E6YStiKX0pO3JldHVybiBkfWZ1bmN0aW9uIEZhKGEpe2lmKGEgaW5zdGFuY2VvZiBHKXN3aXRjaChhLmxlbmd0aCl7Y2FzZSAwOnJldHVybltdO1xuY2FzZSAxOmlmKDE9PT1hWzBdLm5vZGVUeXBlKXJldHVybiBhO2JyZWFrO2RlZmF1bHQ6cmV0dXJuIEcoa2EoYSkpfWlmKDE9PT1hLm5vZGVUeXBlKXJldHVybiBHKGEpfWZ1bmN0aW9uIGthKGEpe2lmKCFhWzBdKXJldHVybiBhO2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdO2lmKDE9PWMubm9kZVR5cGUpcmV0dXJuIGN9fWZ1bmN0aW9uIEdhKGEsYixjKXt1KGIsZnVuY3Rpb24oYil7YS5hZGRDbGFzcyhiLGMpfSl9ZnVuY3Rpb24gSGEoYSxiLGMpe3UoYixmdW5jdGlvbihiKXthLnJlbW92ZUNsYXNzKGIsYyl9KX1mdW5jdGlvbiBoYShhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtjLmFkZENsYXNzJiYoR2EoYSxiLGMuYWRkQ2xhc3MpLGMuYWRkQ2xhc3M9bnVsbCk7Yy5yZW1vdmVDbGFzcyYmKEhhKGEsYixjLnJlbW92ZUNsYXNzKSxjLnJlbW92ZUNsYXNzPW51bGwpfX1mdW5jdGlvbiBpYShhKXthPWF8fHt9O2lmKCFhLiQkcHJlcGFyZWQpe3ZhciBiPWEuZG9tT3BlcmF0aW9ufHxcbkg7YS5kb21PcGVyYXRpb249ZnVuY3Rpb24oKXthLiQkZG9tT3BlcmF0aW9uRmlyZWQ9ITA7YigpO2I9SH07YS4kJHByZXBhcmVkPSEwfXJldHVybiBhfWZ1bmN0aW9uIGNhKGEsYil7d2EoYSxiKTt4YShhLGIpfWZ1bmN0aW9uIHdhKGEsYil7Yi5mcm9tJiYoYS5jc3MoYi5mcm9tKSxiLmZyb209bnVsbCl9ZnVuY3Rpb24geGEoYSxiKXtiLnRvJiYoYS5jc3MoYi50byksYi50bz1udWxsKX1mdW5jdGlvbiBSKGEsYixjKXt2YXIgZD0oYi5hZGRDbGFzc3x8XCJcIikrXCIgXCIrKGMuYWRkQ2xhc3N8fFwiXCIpLGU9KGIucmVtb3ZlQ2xhc3N8fFwiXCIpK1wiIFwiKyhjLnJlbW92ZUNsYXNzfHxcIlwiKTthPUlhKGEuYXR0cihcImNsYXNzXCIpLGQsZSk7eWEoYixjKTtiLmFkZENsYXNzPWEuYWRkQ2xhc3M/YS5hZGRDbGFzczpudWxsO2IucmVtb3ZlQ2xhc3M9YS5yZW1vdmVDbGFzcz9hLnJlbW92ZUNsYXNzOm51bGw7cmV0dXJuIGJ9ZnVuY3Rpb24gSWEoYSxiLGMpe2Z1bmN0aW9uIGQoYSl7VShhKSYmKGE9YS5zcGxpdChcIiBcIikpO1xudmFyIGI9e307dShhLGZ1bmN0aW9uKGEpe2EubGVuZ3RoJiYoYlthXT0hMCl9KTtyZXR1cm4gYn12YXIgZT17fTthPWQoYSk7Yj1kKGIpO3UoYixmdW5jdGlvbihhLGIpe2VbYl09MX0pO2M9ZChjKTt1KGMsZnVuY3Rpb24oYSxiKXtlW2JdPTE9PT1lW2JdP251bGw6LTF9KTt2YXIgcz17YWRkQ2xhc3M6XCJcIixyZW1vdmVDbGFzczpcIlwifTt1KGUsZnVuY3Rpb24oYixjKXt2YXIgZCxlOzE9PT1iPyhkPVwiYWRkQ2xhc3NcIixlPSFhW2NdKTotMT09PWImJihkPVwicmVtb3ZlQ2xhc3NcIixlPWFbY10pO2UmJihzW2RdLmxlbmd0aCYmKHNbZF0rPVwiIFwiKSxzW2RdKz1jKX0pO3JldHVybiBzfWZ1bmN0aW9uIHooYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiB0LmVsZW1lbnQ/YVswXTphfWZ1bmN0aW9uIHphKGEsYixjKXt2YXIgZD1PYmplY3QuY3JlYXRlKG51bGwpLGU9YS5nZXRDb21wdXRlZFN0eWxlKGIpfHx7fTt1KGMsZnVuY3Rpb24oYSxiKXt2YXIgYz1lW2FdO2lmKGMpe3ZhciBrPWMuY2hhckF0KDApO1xuaWYoXCItXCI9PT1rfHxcIitcIj09PWt8fDA8PWspYz1KYShjKTswPT09YyYmKGM9bnVsbCk7ZFtiXT1jfX0pO3JldHVybiBkfWZ1bmN0aW9uIEphKGEpe3ZhciBiPTA7YT1hLnNwbGl0KC9cXHMqLFxccyovKTt1KGEsZnVuY3Rpb24oYSl7XCJzXCI9PWEuY2hhckF0KGEubGVuZ3RoLTEpJiYoYT1hLnN1YnN0cmluZygwLGEubGVuZ3RoLTEpKTthPXBhcnNlRmxvYXQoYSl8fDA7Yj1iP01hdGgubWF4KGEsYik6YX0pO3JldHVybiBifWZ1bmN0aW9uIGxhKGEpe3JldHVybiAwPT09YXx8bnVsbCE9YX1mdW5jdGlvbiBBYShhLGIpe3ZhciBjPU8sZD1hK1wic1wiO2I/Yys9XCJEdXJhdGlvblwiOmQrPVwiIGxpbmVhciBhbGxcIjtyZXR1cm5bYyxkXX1mdW5jdGlvbiBqYShhLGIpe3ZhciBjPWI/XCItXCIrYitcInNcIjpcIlwiO2RhKGEsW2VhLGNdKTtyZXR1cm5bZWEsY119ZnVuY3Rpb24gbWEoYSxiKXt2YXIgYz1iP1wicGF1c2VkXCI6XCJcIixkPVYrXCJQbGF5U3RhdGVcIjtkYShhLFtkLGNdKTtyZXR1cm5bZCxjXX1mdW5jdGlvbiBkYShhLFxuYil7YS5zdHlsZVtiWzBdXT1iWzFdfWZ1bmN0aW9uIEJhKCl7dmFyIGE9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57Zmx1c2g6ZnVuY3Rpb24oKXthPU9iamVjdC5jcmVhdGUobnVsbCl9LGNvdW50OmZ1bmN0aW9uKGIpe3JldHVybihiPWFbYl0pP2IudG90YWw6MH0sZ2V0OmZ1bmN0aW9uKGIpe3JldHVybihiPWFbYl0pJiZiLnZhbHVlfSxwdXQ6ZnVuY3Rpb24oYixjKXthW2JdP2FbYl0udG90YWwrKzphW2JdPXt0b3RhbDoxLHZhbHVlOmN9fX19dmFyIEg9dC5ub29wLHlhPXQuZXh0ZW5kLEc9dC5lbGVtZW50LHU9dC5mb3JFYWNoLFg9dC5pc0FycmF5LFU9dC5pc1N0cmluZyxuYT10LmlzT2JqZWN0LEthPXQuaXNVbmRlZmluZWQsTGE9dC5pc0RlZmluZWQsQ2E9dC5pc0Z1bmN0aW9uLG9hPXQuaXNFbGVtZW50LE8scGEsVixxYTtGLm9udHJhbnNpdGlvbmVuZD09PVcmJkYub253ZWJraXR0cmFuc2l0aW9uZW5kIT09Vz8oTz1cIldlYmtpdFRyYW5zaXRpb25cIixwYT1cIndlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZFwiKTpcbihPPVwidHJhbnNpdGlvblwiLHBhPVwidHJhbnNpdGlvbmVuZFwiKTtGLm9uYW5pbWF0aW9uZW5kPT09VyYmRi5vbndlYmtpdGFuaW1hdGlvbmVuZCE9PVc/KFY9XCJXZWJraXRBbmltYXRpb25cIixxYT1cIndlYmtpdEFuaW1hdGlvbkVuZCBhbmltYXRpb25lbmRcIik6KFY9XCJhbmltYXRpb25cIixxYT1cImFuaW1hdGlvbmVuZFwiKTt2YXIgcmE9VitcIkRlbGF5XCIsc2E9VitcIkR1cmF0aW9uXCIsZWE9TytcIkRlbGF5XCI7Rj1PK1wiRHVyYXRpb25cIjt2YXIgTWE9e3RyYW5zaXRpb25EdXJhdGlvbjpGLHRyYW5zaXRpb25EZWxheTplYSx0cmFuc2l0aW9uUHJvcGVydHk6TytcIlByb3BlcnR5XCIsYW5pbWF0aW9uRHVyYXRpb246c2EsYW5pbWF0aW9uRGVsYXk6cmEsYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6VitcIkl0ZXJhdGlvbkNvdW50XCJ9LE5hPXt0cmFuc2l0aW9uRHVyYXRpb246Rix0cmFuc2l0aW9uRGVsYXk6ZWEsYW5pbWF0aW9uRHVyYXRpb246c2EsYW5pbWF0aW9uRGVsYXk6cmF9O3QubW9kdWxlKFwibmdBbmltYXRlXCIsXG5bXSkuZGlyZWN0aXZlKFwibmdBbmltYXRlQ2hpbGRyZW5cIixbZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oYSxiLGMpe2E9Yy5uZ0FuaW1hdGVDaGlsZHJlbjt0LmlzU3RyaW5nKGEpJiYwPT09YS5sZW5ndGg/Yi5kYXRhKFwiJCRuZ0FuaW1hdGVDaGlsZHJlblwiLCEwKTpjLiRvYnNlcnZlKFwibmdBbmltYXRlQ2hpbGRyZW5cIixmdW5jdGlvbihhKXtiLmRhdGEoXCIkJG5nQW5pbWF0ZUNoaWxkcmVuXCIsXCJvblwiPT09YXx8XCJ0cnVlXCI9PT1hKX0pfX1dKS5mYWN0b3J5KFwiJCRyQUZNdXRleFwiLFtcIiQkckFGXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGI9ITE7YShmdW5jdGlvbigpe2I9ITB9KTtyZXR1cm4gZnVuY3Rpb24oYyl7Yj9jKCk6YShjKX19fV0pLmZhY3RvcnkoXCIkJHJBRlNjaGVkdWxlclwiLFtcIiQkckFGXCIsZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhKXtkLnB1c2goW10uY29uY2F0KGEpKTtjKCl9ZnVuY3Rpb24gYygpe2lmKGQubGVuZ3RoKXtmb3IodmFyIGI9W10sbj1cbjA7bjxkLmxlbmd0aDtuKyspe3ZhciBoPWRbbl07aC5zaGlmdCgpKCk7aC5sZW5ndGgmJmIucHVzaChoKX1kPWI7ZXx8YShmdW5jdGlvbigpe2V8fGMoKX0pfX12YXIgZD1bXSxlO2Iud2FpdFVudGlsUXVpZXQ9ZnVuY3Rpb24oYil7ZSYmZSgpO2U9YShmdW5jdGlvbigpe2U9bnVsbDtiKCk7YygpfSl9O3JldHVybiBifV0pLmZhY3RvcnkoXCIkJEFuaW1hdGVSdW5uZXJcIixbXCIkcVwiLFwiJCRyQUZNdXRleFwiLGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhKXt0aGlzLnNldEhvc3QoYSk7dGhpcy5fZG9uZUNhbGxiYWNrcz1bXTt0aGlzLl9ydW5JbkFuaW1hdGlvbkZyYW1lPWIoKTt0aGlzLl9zdGF0ZT0wfWMuY2hhaW49ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKCl7aWYobj09PWEubGVuZ3RoKWIoITApO2Vsc2UgYVtuXShmdW5jdGlvbihhKXshMT09PWE/YighMSk6KG4rKyxjKCkpfSl9dmFyIG49MDtjKCl9O2MuYWxsPWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhzKXtoPWgmJnM7KytuPT09XG5hLmxlbmd0aCYmYihoKX12YXIgbj0wLGg9ITA7dShhLGZ1bmN0aW9uKGEpe2EuZG9uZShjKX0pfTtjLnByb3RvdHlwZT17c2V0SG9zdDpmdW5jdGlvbihhKXt0aGlzLmhvc3Q9YXx8e319LGRvbmU6ZnVuY3Rpb24oYSl7Mj09PXRoaXMuX3N0YXRlP2EoKTp0aGlzLl9kb25lQ2FsbGJhY2tzLnB1c2goYSl9LHByb2dyZXNzOkgsZ2V0UHJvbWlzZTpmdW5jdGlvbigpe2lmKCF0aGlzLnByb21pc2Upe3ZhciBiPXRoaXM7dGhpcy5wcm9taXNlPWEoZnVuY3Rpb24oYSxjKXtiLmRvbmUoZnVuY3Rpb24oYil7ITE9PT1iP2MoKTphKCl9KX0pfXJldHVybiB0aGlzLnByb21pc2V9LHRoZW46ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5nZXRQcm9taXNlKCkudGhlbihhLGIpfSxcImNhdGNoXCI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZ2V0UHJvbWlzZSgpW1wiY2F0Y2hcIl0oYSl9LFwiZmluYWxseVwiOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmdldFByb21pc2UoKVtcImZpbmFsbHlcIl0oYSl9LHBhdXNlOmZ1bmN0aW9uKCl7dGhpcy5ob3N0LnBhdXNlJiZcbnRoaXMuaG9zdC5wYXVzZSgpfSxyZXN1bWU6ZnVuY3Rpb24oKXt0aGlzLmhvc3QucmVzdW1lJiZ0aGlzLmhvc3QucmVzdW1lKCl9LGVuZDpmdW5jdGlvbigpe3RoaXMuaG9zdC5lbmQmJnRoaXMuaG9zdC5lbmQoKTt0aGlzLl9yZXNvbHZlKCEwKX0sY2FuY2VsOmZ1bmN0aW9uKCl7dGhpcy5ob3N0LmNhbmNlbCYmdGhpcy5ob3N0LmNhbmNlbCgpO3RoaXMuX3Jlc29sdmUoITEpfSxjb21wbGV0ZTpmdW5jdGlvbihhKXt2YXIgYj10aGlzOzA9PT1iLl9zdGF0ZSYmKGIuX3N0YXRlPTEsYi5fcnVuSW5BbmltYXRpb25GcmFtZShmdW5jdGlvbigpe2IuX3Jlc29sdmUoYSl9KSl9LF9yZXNvbHZlOmZ1bmN0aW9uKGEpezIhPT10aGlzLl9zdGF0ZSYmKHUodGhpcy5fZG9uZUNhbGxiYWNrcyxmdW5jdGlvbihiKXtiKGEpfSksdGhpcy5fZG9uZUNhbGxiYWNrcy5sZW5ndGg9MCx0aGlzLl9zdGF0ZT0yKX19O3JldHVybiBjfV0pLnByb3ZpZGVyKFwiJCRhbmltYXRlUXVldWVcIixbXCIkYW5pbWF0ZVByb3ZpZGVyXCIsXG5mdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEsYixjLGgpe3JldHVybiBkW2FdLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIGEoYixjLGgpfSl9ZnVuY3Rpb24gYyhhLGIpe2E9YXx8e307dmFyIGM9MDwoYS5hZGRDbGFzc3x8XCJcIikubGVuZ3RoLGQ9MDwoYS5yZW1vdmVDbGFzc3x8XCJcIikubGVuZ3RoO3JldHVybiBiP2MmJmQ6Y3x8ZH12YXIgZD10aGlzLnJ1bGVzPXtza2lwOltdLGNhbmNlbDpbXSxqb2luOltdfTtkLmpvaW4ucHVzaChmdW5jdGlvbihhLGIsZCl7cmV0dXJuIWIuc3RydWN0dXJhbCYmYyhiLm9wdGlvbnMpfSk7ZC5za2lwLnB1c2goZnVuY3Rpb24oYSxiLGQpe3JldHVybiFiLnN0cnVjdHVyYWwmJiFjKGIub3B0aW9ucyl9KTtkLnNraXAucHVzaChmdW5jdGlvbihhLGIsYyl7cmV0dXJuXCJsZWF2ZVwiPT1jLmV2ZW50JiZiLnN0cnVjdHVyYWx9KTtkLnNraXAucHVzaChmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGMuc3RydWN0dXJhbCYmIWIuc3RydWN0dXJhbH0pO2QuY2FuY2VsLnB1c2goZnVuY3Rpb24oYSxcbmIsYyl7cmV0dXJuIGMuc3RydWN0dXJhbCYmYi5zdHJ1Y3R1cmFsfSk7ZC5jYW5jZWwucHVzaChmdW5jdGlvbihhLGIsYyl7cmV0dXJuIDI9PT1jLnN0YXRlJiZiLnN0cnVjdHVyYWx9KTtkLmNhbmNlbC5wdXNoKGZ1bmN0aW9uKGEsYixjKXthPWIub3B0aW9ucztjPWMub3B0aW9ucztyZXR1cm4gYS5hZGRDbGFzcyYmYS5hZGRDbGFzcz09PWMucmVtb3ZlQ2xhc3N8fGEucmVtb3ZlQ2xhc3MmJmEucmVtb3ZlQ2xhc3M9PT1jLmFkZENsYXNzfSk7dGhpcy4kZ2V0PVtcIiQkckFGXCIsXCIkcm9vdFNjb3BlXCIsXCIkcm9vdEVsZW1lbnRcIixcIiRkb2N1bWVudFwiLFwiJCRIYXNoTWFwXCIsXCIkJGFuaW1hdGlvblwiLFwiJCRBbmltYXRlUnVubmVyXCIsXCIkdGVtcGxhdGVSZXF1ZXN0XCIsXCIkJGpxTGl0ZVwiLGZ1bmN0aW9uKGQscyxuLGgsayxELEEsWixJKXtmdW5jdGlvbiB3KGEsYil7dmFyIGM9eihhKSxmPVtdLG09bFtiXTttJiZ1KG0sZnVuY3Rpb24oYSl7YS5ub2RlLmNvbnRhaW5zKGMpJiZmLnB1c2goYS5jYWxsYmFjayl9KTtcbnJldHVybiBmfWZ1bmN0aW9uIEIoYSxiLGMsZil7ZChmdW5jdGlvbigpe3UodyhiLGEpLGZ1bmN0aW9uKGEpe2EoYixjLGYpfSl9KX1mdW5jdGlvbiByKGEsUyxwKXtmdW5jdGlvbiBkKGIsYyxmLHApe0IoYyxhLGYscCk7Yi5wcm9ncmVzcyhjLGYscCl9ZnVuY3Rpb24gZyhiKXtEYShhLHApO2NhKGEscCk7cC5kb21PcGVyYXRpb24oKTtsLmNvbXBsZXRlKCFiKX12YXIgUCxFO2lmKGE9RmEoYSkpUD16KGEpLEU9YS5wYXJlbnQoKTtwPWlhKHApO3ZhciBsPW5ldyBBO2lmKCFQKXJldHVybiBnKCksbDtYKHAuYWRkQ2xhc3MpJiYocC5hZGRDbGFzcz1wLmFkZENsYXNzLmpvaW4oXCIgXCIpKTtYKHAucmVtb3ZlQ2xhc3MpJiYocC5yZW1vdmVDbGFzcz1wLnJlbW92ZUNsYXNzLmpvaW4oXCIgXCIpKTtwLmZyb20mJiFuYShwLmZyb20pJiYocC5mcm9tPW51bGwpO3AudG8mJiFuYShwLnRvKSYmKHAudG89bnVsbCk7dmFyIGU9W1AuY2xhc3NOYW1lLHAuYWRkQ2xhc3MscC5yZW1vdmVDbGFzc10uam9pbihcIiBcIik7XG5pZighdihlKSlyZXR1cm4gZygpLGw7dmFyIE09MDw9W1wiZW50ZXJcIixcIm1vdmVcIixcImxlYXZlXCJdLmluZGV4T2YoUyksaD0heHx8TC5nZXQoUCksZT0haCYmbS5nZXQoUCl8fHt9LGs9ISFlLnN0YXRlO2h8fGsmJjE9PWUuc3RhdGV8fChoPSF0YShhLEUsUykpO2lmKGgpcmV0dXJuIGcoKSxsO00mJksoYSk7aD17c3RydWN0dXJhbDpNLGVsZW1lbnQ6YSxldmVudDpTLGNsb3NlOmcsb3B0aW9uczpwLHJ1bm5lcjpsfTtpZihrKXtpZihiKFwic2tpcFwiLGEsaCxlKSl7aWYoMj09PWUuc3RhdGUpcmV0dXJuIGcoKSxsO1IoYSxlLm9wdGlvbnMscCk7cmV0dXJuIGUucnVubmVyfWlmKGIoXCJjYW5jZWxcIixhLGgsZSkpMj09PWUuc3RhdGU/ZS5ydW5uZXIuZW5kKCk6ZS5zdHJ1Y3R1cmFsP2UuY2xvc2UoKTpSKGEsaC5vcHRpb25zLGUub3B0aW9ucyk7ZWxzZSBpZihiKFwiam9pblwiLGEsaCxlKSlpZigyPT09ZS5zdGF0ZSlSKGEscCx7fSk7ZWxzZSByZXR1cm4gUz1oLmV2ZW50PWUuZXZlbnQscD1SKGEsXG5lLm9wdGlvbnMsaC5vcHRpb25zKSxsfWVsc2UgUihhLHAse30pOyhrPWguc3RydWN0dXJhbCl8fChrPVwiYW5pbWF0ZVwiPT09aC5ldmVudCYmMDxPYmplY3Qua2V5cyhoLm9wdGlvbnMudG98fHt9KS5sZW5ndGh8fGMoaC5vcHRpb25zKSk7aWYoIWspcmV0dXJuIGcoKSxDKGEpLGw7TSYmZihFKTt2YXIgcj0oZS5jb3VudGVyfHwwKSsxO2guY291bnRlcj1yO2dhKGEsMSxoKTtzLiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe3ZhciBiPW0uZ2V0KFApLHY9IWIsYj1ifHx7fSxlPWEucGFyZW50KCl8fFtdLEU9MDxlLmxlbmd0aCYmKFwiYW5pbWF0ZVwiPT09Yi5ldmVudHx8Yi5zdHJ1Y3R1cmFsfHxjKGIub3B0aW9ucykpO2lmKHZ8fGIuY291bnRlciE9PXJ8fCFFKXt2JiYoRGEoYSxwKSxjYShhLHApKTtpZih2fHxNJiZiLmV2ZW50IT09UylwLmRvbU9wZXJhdGlvbigpLGwuZW5kKCk7RXx8QyhhKX1lbHNlIFM9IWIuc3RydWN0dXJhbCYmYyhiLm9wdGlvbnMsITApP1wic2V0Q2xhc3NcIjpiLmV2ZW50LFxuYi5zdHJ1Y3R1cmFsJiZmKGUpLGdhKGEsMiksYj1EKGEsUyxiLm9wdGlvbnMpLGIuZG9uZShmdW5jdGlvbihiKXtnKCFiKTsoYj1tLmdldChQKSkmJmIuY291bnRlcj09PXImJkMoeihhKSk7ZChsLFMsXCJjbG9zZVwiLHt9KX0pLGwuc2V0SG9zdChiKSxkKGwsUyxcInN0YXJ0XCIse30pfSk7cmV0dXJuIGx9ZnVuY3Rpb24gSyhhKXthPXooYSkucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW5nLWFuaW1hdGVdXCIpO3UoYSxmdW5jdGlvbihhKXt2YXIgYj1wYXJzZUludChhLmdldEF0dHJpYnV0ZShcImRhdGEtbmctYW5pbWF0ZVwiKSksYz1tLmdldChhKTtzd2l0Y2goYil7Y2FzZSAyOmMucnVubmVyLmVuZCgpO2Nhc2UgMTpjJiZtLnJlbW92ZShhKX19KX1mdW5jdGlvbiBDKGEpe2E9eihhKTthLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtbmctYW5pbWF0ZVwiKTttLnJlbW92ZShhKX1mdW5jdGlvbiBFKGEsYil7cmV0dXJuIHooYSk9PT16KGIpfWZ1bmN0aW9uIGYoYSl7YT16KGEpO2Rve2lmKCFhfHwxIT09XG5hLm5vZGVUeXBlKWJyZWFrO3ZhciBiPW0uZ2V0KGEpO2lmKGIpe3ZhciBmPWE7IWIuc3RydWN0dXJhbCYmYyhiLm9wdGlvbnMpJiYoMj09PWIuc3RhdGUmJmIucnVubmVyLmVuZCgpLEMoZikpfWE9YS5wYXJlbnROb2RlfXdoaWxlKDEpfWZ1bmN0aW9uIHRhKGEsYixjKXt2YXIgZj1jPSExLGQ9ITEsdjtmb3IoKGE9YS5kYXRhKFwiJG5nQW5pbWF0ZVBpblwiKSkmJihiPWEpO2ImJmIubGVuZ3RoOyl7Znx8KGY9RShiLG4pKTthPWJbMF07aWYoMSE9PWEubm9kZVR5cGUpYnJlYWs7dmFyIGU9bS5nZXQoYSl8fHt9O2R8fChkPWUuc3RydWN0dXJhbHx8TC5nZXQoYSkpO2lmKEthKHYpfHwhMD09PXYpYT1iLmRhdGEoXCIkJG5nQW5pbWF0ZUNoaWxkcmVuXCIpLExhKGEpJiYodj1hKTtpZihkJiYhMT09PXYpYnJlYWs7Znx8KGY9RShiLG4pLGZ8fChhPWIuZGF0YShcIiRuZ0FuaW1hdGVQaW5cIikpJiYoYj1hKSk7Y3x8KGM9RShiLGcpKTtiPWIucGFyZW50KCl9cmV0dXJuKCFkfHx2KSYmZiYmY31mdW5jdGlvbiBnYShhLFxuYixjKXtjPWN8fHt9O2Muc3RhdGU9YjthPXooYSk7YS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5nLWFuaW1hdGVcIixiKTtjPShiPW0uZ2V0KGEpKT95YShiLGMpOmM7bS5wdXQoYSxjKX12YXIgbT1uZXcgayxMPW5ldyBrLHg9bnVsbCxNPXMuJHdhdGNoKGZ1bmN0aW9uKCl7cmV0dXJuIDA9PT1aLnRvdGFsUGVuZGluZ1JlcXVlc3RzfSxmdW5jdGlvbihhKXthJiYoTSgpLHMuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7cy4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXtudWxsPT09eCYmKHg9ITApfSl9KSl9KSxnPUcoaFswXS5ib2R5KSxsPXt9LFA9YS5jbGFzc05hbWVGaWx0ZXIoKSx2PVA/ZnVuY3Rpb24oYSl7cmV0dXJuIFAudGVzdChhKX06ZnVuY3Rpb24oKXtyZXR1cm4hMH0sRGE9aGEoSSk7cmV0dXJue29uOmZ1bmN0aW9uKGEsYixjKXtiPWthKGIpO2xbYV09bFthXXx8W107bFthXS5wdXNoKHtub2RlOmIsY2FsbGJhY2s6Y30pfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIGYoYSxcbmIsYyl7dmFyIGQ9a2EoYik7cmV0dXJuIGEuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiEoYS5ub2RlPT09ZCYmKCFjfHxhLmNhbGxiYWNrPT09YykpfSl9dmFyIGQ9bFthXTtkJiYobFthXT0xPT09YXJndW1lbnRzLmxlbmd0aD9udWxsOmYoZCxiLGMpKX0scGluOmZ1bmN0aW9uKGEsYil7dWEob2EoYSksXCJlbGVtZW50XCIsXCJub3QgYW4gZWxlbWVudFwiKTt1YShvYShiKSxcInBhcmVudEVsZW1lbnRcIixcIm5vdCBhbiBlbGVtZW50XCIpO2EuZGF0YShcIiRuZ0FuaW1hdGVQaW5cIixiKX0scHVzaDpmdW5jdGlvbihhLGIsYyxmKXtjPWN8fHt9O2MuZG9tT3BlcmF0aW9uPWY7cmV0dXJuIHIoYSxiLGMpfSxlbmFibGVkOmZ1bmN0aW9uKGEsYil7dmFyIGM9YXJndW1lbnRzLmxlbmd0aDtpZigwPT09YyliPSEheDtlbHNlIGlmKG9hKGEpKXt2YXIgZj16KGEpLGQ9TC5nZXQoZik7MT09PWM/Yj0hZDooYj0hIWIpP2QmJkwucmVtb3ZlKGYpOkwucHV0KGYsITApfWVsc2UgYj14PSEhYTtyZXR1cm4gYn19fV19XSkucHJvdmlkZXIoXCIkJGFuaW1hdGlvblwiLFxuW1wiJGFuaW1hdGVQcm92aWRlclwiLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSl7cmV0dXJuIGEuZGF0YShcIiQkYW5pbWF0aW9uUnVubmVyXCIpfXZhciBjPXRoaXMuZHJpdmVycz1bXTt0aGlzLiRnZXQ9W1wiJCRqcUxpdGVcIixcIiRyb290U2NvcGVcIixcIiRpbmplY3RvclwiLFwiJCRBbmltYXRlUnVubmVyXCIsXCIkJHJBRlNjaGVkdWxlclwiLGZ1bmN0aW9uKGEsZSxzLG4saCl7dmFyIGs9W10sRD1oYShhKSxBPTAsWj0wLEk9W107cmV0dXJuIGZ1bmN0aW9uKHcsQixyKXtmdW5jdGlvbiBLKGEpe2E9YS5oYXNBdHRyaWJ1dGUoXCJuZy1hbmltYXRlLXJlZlwiKT9bYV06YS5xdWVyeVNlbGVjdG9yQWxsKFwiW25nLWFuaW1hdGUtcmVmXVwiKTt2YXIgYj1bXTt1KGEsZnVuY3Rpb24oYSl7dmFyIGM9YS5nZXRBdHRyaWJ1dGUoXCJuZy1hbmltYXRlLXJlZlwiKTtjJiZjLmxlbmd0aCYmYi5wdXNoKGEpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gQyhhKXt2YXIgYj1bXSxjPXt9O3UoYSxmdW5jdGlvbihhLGYpe3ZhciBkPXooYS5lbGVtZW50KSxcbm09MDw9W1wiZW50ZXJcIixcIm1vdmVcIl0uaW5kZXhPZihhLmV2ZW50KSxkPWEuc3RydWN0dXJhbD9LKGQpOltdO2lmKGQubGVuZ3RoKXt2YXIgZz1tP1widG9cIjpcImZyb21cIjt1KGQsZnVuY3Rpb24oYSl7dmFyIGI9YS5nZXRBdHRyaWJ1dGUoXCJuZy1hbmltYXRlLXJlZlwiKTtjW2JdPWNbYl18fHt9O2NbYl1bZ109e2FuaW1hdGlvbklEOmYsZWxlbWVudDpHKGEpfX0pfWVsc2UgYi5wdXNoKGEpfSk7dmFyIGY9e30sZD17fTt1KGMsZnVuY3Rpb24oYyxtKXt2YXIgZz1jLmZyb20sZT1jLnRvO2lmKGcmJmUpe3ZhciBsPWFbZy5hbmltYXRpb25JRF0saD1hW2UuYW5pbWF0aW9uSURdLHg9Zy5hbmltYXRpb25JRC50b1N0cmluZygpO2lmKCFkW3hdKXt2YXIgQj1kW3hdPXtzdHJ1Y3R1cmFsOiEwLGJlZm9yZVN0YXJ0OmZ1bmN0aW9uKCl7bC5iZWZvcmVTdGFydCgpO2guYmVmb3JlU3RhcnQoKX0sY2xvc2U6ZnVuY3Rpb24oKXtsLmNsb3NlKCk7aC5jbG9zZSgpfSxjbGFzc2VzOkUobC5jbGFzc2VzLGguY2xhc3NlcyksXG5mcm9tOmwsdG86aCxhbmNob3JzOltdfTtCLmNsYXNzZXMubGVuZ3RoP2IucHVzaChCKTooYi5wdXNoKGwpLGIucHVzaChoKSl9ZFt4XS5hbmNob3JzLnB1c2goe291dDpnLmVsZW1lbnQsXCJpblwiOmUuZWxlbWVudH0pfWVsc2UgZz1nP2cuYW5pbWF0aW9uSUQ6ZS5hbmltYXRpb25JRCxlPWcudG9TdHJpbmcoKSxmW2VdfHwoZltlXT0hMCxiLnB1c2goYVtnXSkpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gRShhLGIpe2E9YS5zcGxpdChcIiBcIik7Yj1iLnNwbGl0KFwiIFwiKTtmb3IodmFyIGM9W10sZj0wO2Y8YS5sZW5ndGg7ZisrKXt2YXIgZD1hW2ZdO2lmKFwibmctXCIhPT1kLnN1YnN0cmluZygwLDMpKWZvcih2YXIgZz0wO2c8Yi5sZW5ndGg7ZysrKWlmKGQ9PT1iW2ddKXtjLnB1c2goZCk7YnJlYWt9fXJldHVybiBjLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIGYoYSl7Zm9yKHZhciBiPWMubGVuZ3RoLTE7MDw9YjtiLS0pe3ZhciBmPWNbYl07aWYocy5oYXMoZikmJihmPXMuZ2V0KGYpKGEpKSlyZXR1cm4gZn19XG5mdW5jdGlvbiB0YShhLGMpe2EuZnJvbSYmYS50bz8oYihhLmZyb20uZWxlbWVudCkuc2V0SG9zdChjKSxiKGEudG8uZWxlbWVudCkuc2V0SG9zdChjKSk6YihhLmVsZW1lbnQpLnNldEhvc3QoYyl9ZnVuY3Rpb24gZ2EoKXt2YXIgYT1iKHcpOyFhfHxcImxlYXZlXCI9PT1CJiZyLiQkZG9tT3BlcmF0aW9uRmlyZWR8fGEuZW5kKCl9ZnVuY3Rpb24gbShiKXt3Lm9mZihcIiRkZXN0cm95XCIsZ2EpO3cucmVtb3ZlRGF0YShcIiQkYW5pbWF0aW9uUnVubmVyXCIpO0QodyxyKTtjYSh3LHIpO3IuZG9tT3BlcmF0aW9uKCk7ZyYmYS5yZW1vdmVDbGFzcyh3LGcpO3cucmVtb3ZlQ2xhc3MoXCJuZy1hbmltYXRlXCIpO3guY29tcGxldGUoIWIpfXI9aWEocik7dmFyIEw9MDw9W1wiZW50ZXJcIixcIm1vdmVcIixcImxlYXZlXCJdLmluZGV4T2YoQikseD1uZXcgbih7ZW5kOmZ1bmN0aW9uKCl7bSgpfSxjYW5jZWw6ZnVuY3Rpb24oKXttKCEwKX19KTtpZighYy5sZW5ndGgpcmV0dXJuIG0oKSx4O3cuZGF0YShcIiQkYW5pbWF0aW9uUnVubmVyXCIsXG54KTt2YXIgTT12YSh3LmF0dHIoXCJjbGFzc1wiKSx2YShyLmFkZENsYXNzLHIucmVtb3ZlQ2xhc3MpKSxnPXIudGVtcENsYXNzZXM7ZyYmKE0rPVwiIFwiK2csci50ZW1wQ2xhc3Nlcz1udWxsKTt2YXIgbDtMfHwobD1BLEErPTEpO2sucHVzaCh7ZWxlbWVudDp3LGNsYXNzZXM6TSxldmVudDpCLGNsYXNzQmFzZWRJbmRleDpsLHN0cnVjdHVyYWw6TCxvcHRpb25zOnIsYmVmb3JlU3RhcnQ6ZnVuY3Rpb24oKXt3LmFkZENsYXNzKFwibmctYW5pbWF0ZVwiKTtnJiZhLmFkZENsYXNzKHcsZyl9LGNsb3NlOm19KTt3Lm9uKFwiJGRlc3Ryb3lcIixnYSk7aWYoMTxrLmxlbmd0aClyZXR1cm4geDtlLiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe1o9QTtBPTA7SS5sZW5ndGg9MDt2YXIgYT1bXTt1KGssZnVuY3Rpb24oYyl7YihjLmVsZW1lbnQpJiZhLnB1c2goYyl9KTtrLmxlbmd0aD0wO3UoQyhhKSxmdW5jdGlvbihhKXtmdW5jdGlvbiBjKCl7YS5iZWZvcmVTdGFydCgpO3ZhciBkLGc9YS5jbG9zZSxlPWEuYW5jaG9ycz9cbmEuZnJvbS5lbGVtZW50fHxhLnRvLmVsZW1lbnQ6YS5lbGVtZW50O2IoZSkmJnooZSkucGFyZW50Tm9kZSYmKGU9ZihhKSkmJihkPWUuc3RhcnQpO2Q/KGQ9ZCgpLGQuZG9uZShmdW5jdGlvbihhKXtnKCFhKX0pLHRhKGEsZCkpOmcoKX1hLnN0cnVjdHVyYWw/YygpOihJLnB1c2goe25vZGU6eihhLmVsZW1lbnQpLGZuOmN9KSxhLmNsYXNzQmFzZWRJbmRleD09PVotMSYmKEk9SS5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGIubm9kZS5jb250YWlucyhhLm5vZGUpfSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLmZufSksaChJKSkpfSl9KTtyZXR1cm4geH19XX1dKS5wcm92aWRlcihcIiRhbmltYXRlQ3NzXCIsW1wiJGFuaW1hdGVQcm92aWRlclwiLGZ1bmN0aW9uKGEpe3ZhciBiPUJhKCksYz1CYSgpO3RoaXMuJGdldD1bXCIkd2luZG93XCIsXCIkJGpxTGl0ZVwiLFwiJCRBbmltYXRlUnVubmVyXCIsXCIkdGltZW91dFwiLFwiJGRvY3VtZW50XCIsXCIkc25pZmZlclwiLFwiJCRyQUZTY2hlZHVsZXJcIixmdW5jdGlvbihhLFxuZSxzLG4saCxrLEQpe2Z1bmN0aW9uIEEoYSxiKXt2YXIgYz1hLnBhcmVudE5vZGU7cmV0dXJuKGMuJCRuZ0FuaW1hdGVQYXJlbnRLZXl8fChjLiQkbmdBbmltYXRlUGFyZW50S2V5PSsrcikpK1wiLVwiK2EuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikrXCItXCIrYn1mdW5jdGlvbiBaKGgsZixCLGspe3ZhciBtOzA8Yi5jb3VudChCKSYmKG09Yy5nZXQoQiksbXx8KGY9YmEoZixcIi1zdGFnZ2VyXCIpLGUuYWRkQ2xhc3MoaCxmKSxtPXphKGEsaCxrKSxtLmFuaW1hdGlvbkR1cmF0aW9uPU1hdGgubWF4KG0uYW5pbWF0aW9uRHVyYXRpb24sMCksbS50cmFuc2l0aW9uRHVyYXRpb249TWF0aC5tYXgobS50cmFuc2l0aW9uRHVyYXRpb24sMCksZS5yZW1vdmVDbGFzcyhoLGYpLGMucHV0KEIsbSkpKTtyZXR1cm4gbXx8e319ZnVuY3Rpb24gSShhKXtDLnB1c2goYSk7RC53YWl0VW50aWxRdWlldChmdW5jdGlvbigpe2IuZmx1c2goKTtjLmZsdXNoKCk7Zm9yKHZhciBhPUsub2Zmc2V0V2lkdGgrMSxkPTA7ZDxcbkMubGVuZ3RoO2QrKylDW2RdKGEpO0MubGVuZ3RoPTB9KX1mdW5jdGlvbiB3KGMsZixlKXtmPWIuZ2V0KGUpO2Z8fChmPXphKGEsYyxNYSksXCJpbmZpbml0ZVwiPT09Zi5hbmltYXRpb25JdGVyYXRpb25Db3VudCYmKGYuYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ9MSkpO2IucHV0KGUsZik7Yz1mO2U9Yy5hbmltYXRpb25EZWxheTtmPWMudHJhbnNpdGlvbkRlbGF5O2MubWF4RGVsYXk9ZSYmZj9NYXRoLm1heChlLGYpOmV8fGY7Yy5tYXhEdXJhdGlvbj1NYXRoLm1heChjLmFuaW1hdGlvbkR1cmF0aW9uKmMuYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQsYy50cmFuc2l0aW9uRHVyYXRpb24pO3JldHVybiBjfXZhciBCPWhhKGUpLHI9MCxLPXooaCkuYm9keSxDPVtdO3JldHVybiBmdW5jdGlvbihhLGMpe2Z1bmN0aW9uIGQoKXttKCl9ZnVuY3Rpb24gaCgpe20oITApfWZ1bmN0aW9uIG0oYil7aWYoIShLfHxDJiZEKSl7Sz0hMDtEPSExO2UucmVtb3ZlQ2xhc3MoYSxZKTtlLnJlbW92ZUNsYXNzKGEsXG5XKTttYShnLCExKTtqYShnLCExKTt1KGwsZnVuY3Rpb24oYSl7Zy5zdHlsZVthWzBdXT1cIlwifSk7QihhLGMpO2NhKGEsYyk7aWYoYy5vbkRvbmUpYy5vbkRvbmUoKTtwJiZwLmNvbXBsZXRlKCFiKX19ZnVuY3Rpb24gTChhKXtxLmJsb2NrVHJhbnNpdGlvbiYmamEoZyxhKTtxLmJsb2NrS2V5ZnJhbWVBbmltYXRpb24mJm1hKGcsISFhKX1mdW5jdGlvbiB4KCl7cD1uZXcgcyh7ZW5kOmQsY2FuY2VsOmh9KTttKCk7cmV0dXJueyQkd2lsbEFuaW1hdGU6ITEsc3RhcnQ6ZnVuY3Rpb24oKXtyZXR1cm4gcH0sZW5kOmR9fWZ1bmN0aW9uIE0oKXtmdW5jdGlvbiBiKCl7aWYoIUspe0woITEpO3UobCxmdW5jdGlvbihhKXtnLnN0eWxlW2FbMF1dPWFbMV19KTtCKGEsYyk7ZS5hZGRDbGFzcyhhLFcpO2lmKHEucmVjYWxjdWxhdGVUaW1pbmdTdHlsZXMpe2ZhPWcuY2xhc3NOYW1lK1wiIFwiK1k7JD1BKGcsZmEpO3k9dyhnLGZhLCQpO1E9eS5tYXhEZWxheTtIPU1hdGgubWF4KFEsMCk7Sj15Lm1heER1cmF0aW9uO1xuaWYoMD09PUope20oKTtyZXR1cm59cS5oYXNUcmFuc2l0aW9ucz0wPHkudHJhbnNpdGlvbkR1cmF0aW9uO3EuaGFzQW5pbWF0aW9ucz0wPHkuYW5pbWF0aW9uRHVyYXRpb259aWYocS5hcHBseVRyYW5zaXRpb25EZWxheXx8cS5hcHBseUFuaW1hdGlvbkRlbGF5KXtRPVwiYm9vbGVhblwiIT09dHlwZW9mIGMuZGVsYXkmJmxhKGMuZGVsYXkpP3BhcnNlRmxvYXQoYy5kZWxheSk6UTtIPU1hdGgubWF4KFEsMCk7dmFyIGs7cS5hcHBseVRyYW5zaXRpb25EZWxheSYmKHkudHJhbnNpdGlvbkRlbGF5PVEsaz1bZWEsUStcInNcIl0sbC5wdXNoKGspLGcuc3R5bGVba1swXV09a1sxXSk7cS5hcHBseUFuaW1hdGlvbkRlbGF5JiYoeS5hbmltYXRpb25EZWxheT1RLGs9W3JhLFErXCJzXCJdLGwucHVzaChrKSxnLnN0eWxlW2tbMF1dPWtbMV0pfUY9MUUzKkg7Rz0xRTMqSjtpZihjLmVhc2luZyl7dmFyIHI9Yy5lYXNpbmc7cS5oYXNUcmFuc2l0aW9ucyYmKGs9TytcIlRpbWluZ0Z1bmN0aW9uXCIsbC5wdXNoKFtrLFxucl0pLGcuc3R5bGVba109cik7cS5oYXNBbmltYXRpb25zJiYoaz1WK1wiVGltaW5nRnVuY3Rpb25cIixsLnB1c2goW2sscl0pLGcuc3R5bGVba109cil9eS50cmFuc2l0aW9uRHVyYXRpb24mJnAucHVzaChwYSk7eS5hbmltYXRpb25EdXJhdGlvbiYmcC5wdXNoKHFhKTt4PURhdGUubm93KCk7YS5vbihwLmpvaW4oXCIgXCIpLGgpO24oZCxGKzEuNSpHKTt4YShhLGMpfX1mdW5jdGlvbiBkKCl7bSgpfWZ1bmN0aW9uIGgoYSl7YS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgYj1hLm9yaWdpbmFsRXZlbnR8fGE7YT1iLiRtYW51YWxUaW1lU3RhbXB8fGIudGltZVN0YW1wfHxEYXRlLm5vdygpO2I9cGFyc2VGbG9hdChiLmVsYXBzZWRUaW1lLnRvRml4ZWQoMykpO01hdGgubWF4KGEteCwwKT49RiYmYj49SiYmKEM9ITAsbSgpKX1pZighSylpZihnLnBhcmVudE5vZGUpe3ZhciB4LHA9W10saz1mdW5jdGlvbihhKXtpZihDKUQmJmEmJihEPSExLG0oKSk7ZWxzZSBpZihEPSFhLHkuYW5pbWF0aW9uRHVyYXRpb24paWYoYT1cbm1hKGcsRCksRClsLnB1c2goYSk7ZWxzZXt2YXIgYj1sLGM9Yi5pbmRleE9mKGEpOzA8PWEmJmIuc3BsaWNlKGMsMSl9fSxyPTA8VSYmKHkudHJhbnNpdGlvbkR1cmF0aW9uJiYwPT09VC50cmFuc2l0aW9uRHVyYXRpb258fHkuYW5pbWF0aW9uRHVyYXRpb24mJjA9PT1ULmFuaW1hdGlvbkR1cmF0aW9uKSYmTWF0aC5tYXgoVC5hbmltYXRpb25EZWxheSxULnRyYW5zaXRpb25EZWxheSk7cj9uKGIsTWF0aC5mbG9vcihyKlUqMUUzKSwhMSk6YigpO3QucmVzdW1lPWZ1bmN0aW9uKCl7ayghMCl9O3QucGF1c2U9ZnVuY3Rpb24oKXtrKCExKX19ZWxzZSBtKCl9dmFyIGc9eihhKTtpZighZ3x8IWcucGFyZW50Tm9kZSlyZXR1cm4geCgpO2M9aWEoYyk7dmFyIGw9W10scj1hLmF0dHIoXCJjbGFzc1wiKSx2PUVhKGMpLEssRCxDLHAsdCxILEYsSixHO2lmKDA9PT1jLmR1cmF0aW9ufHwhay5hbmltYXRpb25zJiYhay50cmFuc2l0aW9ucylyZXR1cm4geCgpO3ZhciBhYT1jLmV2ZW50JiZYKGMuZXZlbnQpP1xuYy5ldmVudC5qb2luKFwiIFwiKTpjLmV2ZW50LFI9XCJcIixOPVwiXCI7YWEmJmMuc3RydWN0dXJhbD9SPWJhKGFhLFwibmctXCIsITApOmFhJiYoUj1hYSk7Yy5hZGRDbGFzcyYmKE4rPWJhKGMuYWRkQ2xhc3MsXCItYWRkXCIpKTtjLnJlbW92ZUNsYXNzJiYoTi5sZW5ndGgmJihOKz1cIiBcIiksTis9YmEoYy5yZW1vdmVDbGFzcyxcIi1yZW1vdmVcIikpO2MuYXBwbHlDbGFzc2VzRWFybHkmJk4ubGVuZ3RoJiYoQihhLGMpLE49XCJcIik7dmFyIFk9W1IsTl0uam9pbihcIiBcIikudHJpbSgpLGZhPXIrXCIgXCIrWSxXPWJhKFksXCItYWN0aXZlXCIpLHI9di50byYmMDxPYmplY3Qua2V5cyh2LnRvKS5sZW5ndGg7aWYoISgwPChjLmtleWZyYW1lU3R5bGV8fFwiXCIpLmxlbmd0aHx8cnx8WSkpcmV0dXJuIHgoKTt2YXIgJCxUOzA8Yy5zdGFnZ2VyPyh2PXBhcnNlRmxvYXQoYy5zdGFnZ2VyKSxUPXt0cmFuc2l0aW9uRGVsYXk6dixhbmltYXRpb25EZWxheTp2LHRyYW5zaXRpb25EdXJhdGlvbjowLGFuaW1hdGlvbkR1cmF0aW9uOjB9KTpcbigkPUEoZyxmYSksVD1aKGcsWSwkLE5hKSk7ZS5hZGRDbGFzcyhhLFkpO2MudHJhbnNpdGlvblN0eWxlJiYodj1bTyxjLnRyYW5zaXRpb25TdHlsZV0sZGEoZyx2KSxsLnB1c2godikpOzA8PWMuZHVyYXRpb24mJih2PTA8Zy5zdHlsZVtPXS5sZW5ndGgsdj1BYShjLmR1cmF0aW9uLHYpLGRhKGcsdiksbC5wdXNoKHYpKTtjLmtleWZyYW1lU3R5bGUmJih2PVtWLGMua2V5ZnJhbWVTdHlsZV0sZGEoZyx2KSxsLnB1c2godikpO3ZhciBVPVQ/MDw9Yy5zdGFnZ2VySW5kZXg/Yy5zdGFnZ2VySW5kZXg6Yi5jb3VudCgkKTowOyhhYT0wPT09VSkmJmphKGcsOTk5OSk7dmFyIHk9dyhnLGZhLCQpLFE9eS5tYXhEZWxheTtIPU1hdGgubWF4KFEsMCk7Sj15Lm1heER1cmF0aW9uO3ZhciBxPXt9O3EuaGFzVHJhbnNpdGlvbnM9MDx5LnRyYW5zaXRpb25EdXJhdGlvbjtxLmhhc0FuaW1hdGlvbnM9MDx5LmFuaW1hdGlvbkR1cmF0aW9uO3EuaGFzVHJhbnNpdGlvbkFsbD1xLmhhc1RyYW5zaXRpb25zJiZcblwiYWxsXCI9PXkudHJhbnNpdGlvblByb3BlcnR5O3EuYXBwbHlUcmFuc2l0aW9uRHVyYXRpb249ciYmKHEuaGFzVHJhbnNpdGlvbnMmJiFxLmhhc1RyYW5zaXRpb25BbGx8fHEuaGFzQW5pbWF0aW9ucyYmIXEuaGFzVHJhbnNpdGlvbnMpO3EuYXBwbHlBbmltYXRpb25EdXJhdGlvbj1jLmR1cmF0aW9uJiZxLmhhc0FuaW1hdGlvbnM7cS5hcHBseVRyYW5zaXRpb25EZWxheT1sYShjLmRlbGF5KSYmKHEuYXBwbHlUcmFuc2l0aW9uRHVyYXRpb258fHEuaGFzVHJhbnNpdGlvbnMpO3EuYXBwbHlBbmltYXRpb25EZWxheT1sYShjLmRlbGF5KSYmcS5oYXNBbmltYXRpb25zO3EucmVjYWxjdWxhdGVUaW1pbmdTdHlsZXM9MDxOLmxlbmd0aDtpZihxLmFwcGx5VHJhbnNpdGlvbkR1cmF0aW9ufHxxLmFwcGx5QW5pbWF0aW9uRHVyYXRpb24pSj1jLmR1cmF0aW9uP3BhcnNlRmxvYXQoYy5kdXJhdGlvbik6SixxLmFwcGx5VHJhbnNpdGlvbkR1cmF0aW9uJiYocS5oYXNUcmFuc2l0aW9ucz0hMCx5LnRyYW5zaXRpb25EdXJhdGlvbj1cbkosdj0wPGcuc3R5bGVbTytcIlByb3BlcnR5XCJdLmxlbmd0aCxsLnB1c2goQWEoSix2KSkpLHEuYXBwbHlBbmltYXRpb25EdXJhdGlvbiYmKHEuaGFzQW5pbWF0aW9ucz0hMCx5LmFuaW1hdGlvbkR1cmF0aW9uPUosbC5wdXNoKFtzYSxKK1wic1wiXSkpO2lmKDA9PT1KJiYhcS5yZWNhbGN1bGF0ZVRpbWluZ1N0eWxlcylyZXR1cm4geCgpO251bGw9PWMuZHVyYXRpb24mJjA8eS50cmFuc2l0aW9uRHVyYXRpb24mJihxLnJlY2FsY3VsYXRlVGltaW5nU3R5bGVzPXEucmVjYWxjdWxhdGVUaW1pbmdTdHlsZXN8fGFhKTtGPTFFMypIO0c9MUUzKko7Yy5za2lwQmxvY2tpbmd8fChxLmJsb2NrVHJhbnNpdGlvbj0wPHkudHJhbnNpdGlvbkR1cmF0aW9uLHEuYmxvY2tLZXlmcmFtZUFuaW1hdGlvbj0wPHkuYW5pbWF0aW9uRHVyYXRpb24mJjA8VC5hbmltYXRpb25EZWxheSYmMD09PVQuYW5pbWF0aW9uRHVyYXRpb24pO3dhKGEsYyk7cS5ibG9ja1RyYW5zaXRpb258fGphKGcsITEpO0woSik7cmV0dXJueyQkd2lsbEFuaW1hdGU6ITAsXG5lbmQ6ZCxzdGFydDpmdW5jdGlvbigpe2lmKCFLKXJldHVybiB0PXtlbmQ6ZCxjYW5jZWw6aCxyZXN1bWU6bnVsbCxwYXVzZTpudWxsfSxwPW5ldyBzKHQpLEkoTSkscH19fX1dfV0pLnByb3ZpZGVyKFwiJCRhbmltYXRlQ3NzRHJpdmVyXCIsW1wiJCRhbmltYXRpb25Qcm92aWRlclwiLGZ1bmN0aW9uKGEpe2EuZHJpdmVycy5wdXNoKFwiJCRhbmltYXRlQ3NzRHJpdmVyXCIpO3RoaXMuJGdldD1bXCIkYW5pbWF0ZUNzc1wiLFwiJHJvb3RTY29wZVwiLFwiJCRBbmltYXRlUnVubmVyXCIsXCIkcm9vdEVsZW1lbnRcIixcIiRkb2N1bWVudFwiLFwiJHNuaWZmZXJcIixmdW5jdGlvbihhLGMsZCxlLHMsbil7ZnVuY3Rpb24gaChhKXtyZXR1cm4gYS5yZXBsYWNlKC9cXGJuZy1cXFMrXFxiL2csXCJcIil9ZnVuY3Rpb24gayhhLGIpe1UoYSkmJihhPWEuc3BsaXQoXCIgXCIpKTtVKGIpJiYoYj1iLnNwbGl0KFwiIFwiKSk7cmV0dXJuIGEuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybi0xPT09Yi5pbmRleE9mKGEpfSkuam9pbihcIiBcIil9ZnVuY3Rpb24gRChjLFxuZSxBKXtmdW5jdGlvbiBEKGEpe3ZhciBiPXt9LGM9eihhKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTt1KFtcIndpZHRoXCIsXCJoZWlnaHRcIixcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihhKXt2YXIgZD1jW2FdO3N3aXRjaChhKXtjYXNlIFwidG9wXCI6ZCs9SS5zY3JvbGxUb3A7YnJlYWs7Y2FzZSBcImxlZnRcIjpkKz1JLnNjcm9sbExlZnR9YlthXT1NYXRoLmZsb29yKGQpK1wicHhcIn0pO3JldHVybiBifWZ1bmN0aW9uIHMoKXt2YXIgYz1oKEEuYXR0cihcImNsYXNzXCIpfHxcIlwiKSxkPWsoYyx0KSxjPWsodCxjKSxkPWEobix7dG86RChBKSxhZGRDbGFzczpcIm5nLWFuY2hvci1pbiBcIitkLHJlbW92ZUNsYXNzOlwibmctYW5jaG9yLW91dCBcIitjLGRlbGF5OiEwfSk7cmV0dXJuIGQuJCR3aWxsQW5pbWF0ZT9kOm51bGx9ZnVuY3Rpb24gZigpe24ucmVtb3ZlKCk7ZS5yZW1vdmVDbGFzcyhcIm5nLWFuaW1hdGUtc2hpbVwiKTtBLnJlbW92ZUNsYXNzKFwibmctYW5pbWF0ZS1zaGltXCIpfXZhciBuPUcoeihlKS5jbG9uZU5vZGUoITApKSxcbnQ9aChuLmF0dHIoXCJjbGFzc1wiKXx8XCJcIik7ZS5hZGRDbGFzcyhcIm5nLWFuaW1hdGUtc2hpbVwiKTtBLmFkZENsYXNzKFwibmctYW5pbWF0ZS1zaGltXCIpO24uYWRkQ2xhc3MoXCJuZy1hbmNob3JcIik7dy5hcHBlbmQobik7dmFyIG07Yz1mdW5jdGlvbigpe3ZhciBjPWEobix7YWRkQ2xhc3M6XCJuZy1hbmNob3Itb3V0XCIsZGVsYXk6ITAsZnJvbTpEKGUpfSk7cmV0dXJuIGMuJCR3aWxsQW5pbWF0ZT9jOm51bGx9KCk7aWYoIWMmJihtPXMoKSwhbSkpcmV0dXJuIGYoKTt2YXIgTD1jfHxtO3JldHVybntzdGFydDpmdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtjJiZjLmVuZCgpfXZhciBiLGM9TC5zdGFydCgpO2MuZG9uZShmdW5jdGlvbigpe2M9bnVsbDtpZighbSYmKG09cygpKSlyZXR1cm4gYz1tLnN0YXJ0KCksYy5kb25lKGZ1bmN0aW9uKCl7Yz1udWxsO2YoKTtiLmNvbXBsZXRlKCl9KSxjO2YoKTtiLmNvbXBsZXRlKCl9KTtyZXR1cm4gYj1uZXcgZCh7ZW5kOmEsY2FuY2VsOmF9KX19fWZ1bmN0aW9uIEEoYSxcbmIsYyxlKXt2YXIgaD10KGEpLGY9dChiKSxrPVtdO3UoZSxmdW5jdGlvbihhKXsoYT1EKGMsYS5vdXQsYVtcImluXCJdKSkmJmsucHVzaChhKX0pO2lmKGh8fGZ8fDAhPT1rLmxlbmd0aClyZXR1cm57c3RhcnQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7dShiLGZ1bmN0aW9uKGEpe2EuZW5kKCl9KX12YXIgYj1bXTtoJiZiLnB1c2goaC5zdGFydCgpKTtmJiZiLnB1c2goZi5zdGFydCgpKTt1KGssZnVuY3Rpb24oYSl7Yi5wdXNoKGEuc3RhcnQoKSl9KTt2YXIgYz1uZXcgZCh7ZW5kOmEsY2FuY2VsOmF9KTtkLmFsbChiLGZ1bmN0aW9uKGEpe2MuY29tcGxldGUoYSl9KTtyZXR1cm4gY319fWZ1bmN0aW9uIHQoYyl7dmFyIGQ9Yy5lbGVtZW50LGU9Yy5vcHRpb25zfHx7fTtjLnN0cnVjdHVyYWw/KGUuc3RydWN0dXJhbD1lLmFwcGx5Q2xhc3Nlc0Vhcmx5PSEwLGUuZXZlbnQ9Yy5ldmVudCxcImxlYXZlXCI9PT1lLmV2ZW50JiYoZS5vbkRvbmU9ZS5kb21PcGVyYXRpb24pKTplLmV2ZW50PW51bGw7XG5jPWEoZCxlKTtyZXR1cm4gYy4kJHdpbGxBbmltYXRlP2M6bnVsbH1pZighbi5hbmltYXRpb25zJiYhbi50cmFuc2l0aW9ucylyZXR1cm4gSDt2YXIgST16KHMpLmJvZHk7Yz16KGUpO3ZhciB3PUcoSS5wYXJlbnROb2RlPT09Yz9JOmMpO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gYS5mcm9tJiZhLnRvP0EoYS5mcm9tLGEudG8sYS5jbGFzc2VzLGEuYW5jaG9ycyk6dChhKX19XX1dKS5wcm92aWRlcihcIiQkYW5pbWF0ZUpzXCIsW1wiJGFuaW1hdGVQcm92aWRlclwiLGZ1bmN0aW9uKGEpe3RoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixcIiQkQW5pbWF0ZVJ1bm5lclwiLFwiJCRyQUZNdXRleFwiLFwiJCRqcUxpdGVcIixmdW5jdGlvbihiLGMsZCxlKXtmdW5jdGlvbiBzKGMpe2M9WChjKT9jOmMuc3BsaXQoXCIgXCIpO2Zvcih2YXIgZD1bXSxlPXt9LEE9MDtBPGMubGVuZ3RoO0ErKyl7dmFyIG49Y1tBXSxzPWEuJCRyZWdpc3RlcmVkQW5pbWF0aW9uc1tuXTtzJiYhZVtuXSYmKGQucHVzaChiLmdldChzKSksZVtuXT1cbiEwKX1yZXR1cm4gZH12YXIgbj1oYShlKTtyZXR1cm4gZnVuY3Rpb24oYSxiLGQsZSl7ZnVuY3Rpb24gdCgpe2UuZG9tT3BlcmF0aW9uKCk7bihhLGUpfWZ1bmN0aW9uIHooYSxiLGQsZSxnKXtzd2l0Y2goZCl7Y2FzZSBcImFuaW1hdGVcIjpiPVtiLGUuZnJvbSxlLnRvLGddO2JyZWFrO2Nhc2UgXCJzZXRDbGFzc1wiOmI9W2IscixLLGddO2JyZWFrO2Nhc2UgXCJhZGRDbGFzc1wiOmI9W2IscixnXTticmVhaztjYXNlIFwicmVtb3ZlQ2xhc3NcIjpiPVtiLEssZ107YnJlYWs7ZGVmYXVsdDpiPVtiLGddfWIucHVzaChlKTtpZihhPWEuYXBwbHkoYSxiKSlpZihDYShhLnN0YXJ0KSYmKGE9YS5zdGFydCgpKSxhIGluc3RhbmNlb2YgYylhLmRvbmUoZyk7ZWxzZSBpZihDYShhKSlyZXR1cm4gYTtyZXR1cm4gSH1mdW5jdGlvbiB3KGEsYixkLGUsZyl7dmFyIGY9W107dShlLGZ1bmN0aW9uKGUpe3ZhciBoPWVbZ107aCYmZi5wdXNoKGZ1bmN0aW9uKCl7dmFyIGUsZyxmPSExLGw9ZnVuY3Rpb24oYSl7Znx8XG4oZj0hMCwoZ3x8SCkoYSksZS5jb21wbGV0ZSghYSkpfTtlPW5ldyBjKHtlbmQ6ZnVuY3Rpb24oKXtsKCl9LGNhbmNlbDpmdW5jdGlvbigpe2woITApfX0pO2c9eihoLGEsYixkLGZ1bmN0aW9uKGEpe2woITE9PT1hKX0pO3JldHVybiBlfSl9KTtyZXR1cm4gZn1mdW5jdGlvbiBCKGEsYixkLGUsZyl7dmFyIGY9dyhhLGIsZCxlLGcpO2lmKDA9PT1mLmxlbmd0aCl7dmFyIGgsaztcImJlZm9yZVNldENsYXNzXCI9PT1nPyhoPXcoYSxcInJlbW92ZUNsYXNzXCIsZCxlLFwiYmVmb3JlUmVtb3ZlQ2xhc3NcIiksaz13KGEsXCJhZGRDbGFzc1wiLGQsZSxcImJlZm9yZUFkZENsYXNzXCIpKTpcInNldENsYXNzXCI9PT1nJiYoaD13KGEsXCJyZW1vdmVDbGFzc1wiLGQsZSxcInJlbW92ZUNsYXNzXCIpLGs9dyhhLFwiYWRkQ2xhc3NcIixkLGUsXCJhZGRDbGFzc1wiKSk7aCYmKGY9Zi5jb25jYXQoaCkpO2smJihmPWYuY29uY2F0KGspKX1pZigwIT09Zi5sZW5ndGgpcmV0dXJuIGZ1bmN0aW9uKGEpe3ZhciBiPVtdO2YubGVuZ3RoJiZcbnUoZixmdW5jdGlvbihhKXtiLnB1c2goYSgpKX0pO2IubGVuZ3RoP2MuYWxsKGIsYSk6YSgpO3JldHVybiBmdW5jdGlvbihhKXt1KGIsZnVuY3Rpb24oYil7YT9iLmNhbmNlbCgpOmIuZW5kKCl9KX19fTM9PT1hcmd1bWVudHMubGVuZ3RoJiZuYShkKSYmKGU9ZCxkPW51bGwpO2U9aWEoZSk7ZHx8KGQ9YS5hdHRyKFwiY2xhc3NcIil8fFwiXCIsZS5hZGRDbGFzcyYmKGQrPVwiIFwiK2UuYWRkQ2xhc3MpLGUucmVtb3ZlQ2xhc3MmJihkKz1cIiBcIitlLnJlbW92ZUNsYXNzKSk7dmFyIHI9ZS5hZGRDbGFzcyxLPWUucmVtb3ZlQ2xhc3MsQz1zKGQpLEUsZjtpZihDLmxlbmd0aCl7dmFyIEYsRztcImxlYXZlXCI9PWI/KEc9XCJsZWF2ZVwiLEY9XCJhZnRlckxlYXZlXCIpOihHPVwiYmVmb3JlXCIrYi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStiLnN1YnN0cigxKSxGPWIpO1wiZW50ZXJcIiE9PWImJlwibW92ZVwiIT09YiYmKEU9QihhLGIsZSxDLEcpKTtmPUIoYSxiLGUsQyxGKX1pZihFfHxmKXJldHVybntzdGFydDpmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYyl7bj1cbiEwO3QoKTtjYShhLGUpO2cuY29tcGxldGUoYyl9dmFyIGQsaz1bXTtFJiZrLnB1c2goZnVuY3Rpb24oYSl7ZD1FKGEpfSk7ay5sZW5ndGg/ay5wdXNoKGZ1bmN0aW9uKGEpe3QoKTthKCEwKX0pOnQoKTtmJiZrLnB1c2goZnVuY3Rpb24oYSl7ZD1mKGEpfSk7dmFyIG49ITEsZz1uZXcgYyh7ZW5kOmZ1bmN0aW9uKCl7bnx8KChkfHxIKSh2b2lkIDApLGIodm9pZCAwKSl9LGNhbmNlbDpmdW5jdGlvbigpe258fCgoZHx8SCkoITApLGIoITApKX19KTtjLmNoYWluKGssYik7cmV0dXJuIGd9fX19XX1dKS5wcm92aWRlcihcIiQkYW5pbWF0ZUpzRHJpdmVyXCIsW1wiJCRhbmltYXRpb25Qcm92aWRlclwiLGZ1bmN0aW9uKGEpe2EuZHJpdmVycy5wdXNoKFwiJCRhbmltYXRlSnNEcml2ZXJcIik7dGhpcy4kZ2V0PVtcIiQkYW5pbWF0ZUpzXCIsXCIkJEFuaW1hdGVSdW5uZXJcIixmdW5jdGlvbihhLGMpe2Z1bmN0aW9uIGQoYyl7cmV0dXJuIGEoYy5lbGVtZW50LGMuZXZlbnQsYy5jbGFzc2VzLGMub3B0aW9ucyl9XG5yZXR1cm4gZnVuY3Rpb24oYSl7aWYoYS5mcm9tJiZhLnRvKXt2YXIgYj1kKGEuZnJvbSksbj1kKGEudG8pO2lmKGJ8fG4pcmV0dXJue3N0YXJ0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3JldHVybiBmdW5jdGlvbigpe3UoZCxmdW5jdGlvbihhKXthLmVuZCgpfSl9fXZhciBkPVtdO2ImJmQucHVzaChiLnN0YXJ0KCkpO24mJmQucHVzaChuLnN0YXJ0KCkpO2MuYWxsKGQsZnVuY3Rpb24oYSl7ZS5jb21wbGV0ZShhKX0pO3ZhciBlPW5ldyBjKHtlbmQ6YSgpLGNhbmNlbDphKCl9KTtyZXR1cm4gZX19fWVsc2UgcmV0dXJuIGQoYSl9fV19XSl9KSh3aW5kb3csd2luZG93LmFuZ3VsYXIpO1xuXG4iLCIhZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUsbyxuKXtmdW5jdGlvbiByKHQscixpLGwpe2Z1bmN0aW9uIGEoKXt2YXIgZT1udWxsIT09bC5vcHRpb25zLnRlbXBsYXRlPyd0ZW1wbGF0ZT1cIicrbC5vcHRpb25zLnRlbXBsYXRlKydcIic6XCJcIjtsLml0ZW1EaXJlY3RpdmU9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGwuaXRlbURpcmVjdGl2ZT9cImNhcm91c2VsLWdlbmVyaWMtaXRlbVwiOmwuaXRlbURpcmVjdGl2ZTt2YXIgdD1cIjxcIitsLml0ZW1EaXJlY3RpdmUrJyBuZy1tb2RlbD1cIml0ZW1cIiAnK2UrJ29uLXNlbGVjdD1cInZtLnNlbGVjdEl0ZW0oaXRlbSlcIiBjYXJvdXNlbC1vcHRpb25zPVwibWVudUNhcm91c2VsLm9wdGlvbnNcIiAnO3JldHVybiB0Kz1cIj48L1wiK2wuaXRlbURpcmVjdGl2ZStcIj5cIn1mdW5jdGlvbiBzKCl7dmFyIGU9bi4kZ2V0QnlIYW5kbGUobC5vcHRpb25zLmNhcm91c2VsSWQpLmdldFNjcm9sbFZpZXcoKSx0PWUuX19jb250YWluZXIsbz1lLnRvdWNoU3RhcnQscj1lLnRvdWNoTW92ZTt0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsZS50b3VjaFN0YXJ0KSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsZS50b3VjaE1vdmUpLGUudG91Y2hTdGFydD1mdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7fSxvLmFwcGx5KGUsW3RdKX0sZS50b3VjaE1vdmU9ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe30sci5hcHBseShlLFt0XSl9LHQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixlLnRvdWNoU3RhcnQsITEpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixlLnRvdWNoTW92ZSwhMSl9bC5lbD1yLGwub3B0aW9ucy50cmFja0J5PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnRyYWNrQnk/aS50cmFja0J5OlwiJGluZGV4XCIsbC5vcHRpb25zLnRyYWNrQnlzdHI9XCIkaW5kZXhcIj09PWwub3B0aW9ucy50cmFja0J5P1wiJGluZGV4XCI6XCJpdGVtLlwiK2wub3B0aW9ucy50cmFja0J5O3ZhciBjPWwub3B0aW9ucy5hbmltYXRlSW4/XCIgYW5pbWF0ZUluXCI6XCJcIix1PSc8ZGl2IGNsYXNzPVwiYS1jYXJvdXNlbFwiPic7bC5vcHRpb25zLnB1bGxSZWZyZXNoLmFjdGl2ZSYmKHUrPSc8ZGl2IGNsYXNzPVwic3Bpbm5lci13cmFwcGVyXCIgbmctaWY9XCJ2bS5vcHRpb25zLnB1bGxSZWZyZXNoLmxvYWRpbmdcIj48aW9uLXNwaW5uZXIgaWNvbj1cImFuZHJvaWRcIj48L2lvbi1zcGlubmVyPjwvZGl2PicsdSs9JzxzcGFuIGNsYXNzPVwicHVsbHJlZnJlc2gtaW5kaWNhdG9yXCI+PHN2ZyB2aWV3Qm94PVwiMCAwIDY0IDY0XCI+PGc+PGNpcmNsZSBzdHJva2Utd2lkdGg9XCI2XCIgc3Ryb2tlLWRhc2hhcnJheT1cIjEzNS4yNjI2MTIzOTE0NDI4N1wiIHN0cm9rZS1kYXNob2Zmc2V0PVwiMTYuNTEzNzE0NzQ1NTYyMTRcIiByPVwiMjZcIiBjeD1cIjMyXCIgY3k9XCIzMlwiIGZpbGw9XCJub25lXCIgdHJhbnNmb3JtPVwic2NhbGUoMSwxKSB0cmFuc2xhdGUoMCwwKSByb3RhdGUoMCwzMiwzMilcIj48L2NpcmNsZT48L2c+PC9zdmc+PC9zcGFuPicpLHUrPVwiPGlvbi1zY3JvbGwgXCIsbC5vcHRpb25zLnB1bGxSZWZyZXNoLmFjdGl2ZSYmKHUrPSdvbi1zY3JvbGw9XCJ2bS5vblNjcm9sbCgpXCIgJyksdSs9J3Njcm9sbGJhci14PVwiZmFsc2VcIiBkZWxlZ2F0ZS1oYW5kbGU9XCInK2wub3B0aW9ucy5jYXJvdXNlbElkKydcIiB6b29taW5nPVwiZmFsc2VcIiBkaXJlY3Rpb249XCJ4XCIgb3ZlcmZsb3ctc2Nyb2xsPVwiZmFsc2VcIiBoYXMtYm91bmNpbmc9XCJ0cnVlXCI+PG5hdiBzdHlsZT1cInZpc2liaWxpdHk6aGlkZGVuO1wiPjx1bD4gPGxpIG5nLXJlcGVhdD1cIml0ZW0gaW4gdm0uYXJyYXlQcm92aWRlciB0cmFjayBieSAnK2wub3B0aW9ucy50cmFja0J5c3RyKydcImNsYXNzPVwiY2Fyb3VzZWwtaXRlbScrYysnXCJuZy1jbGFzcz1cIntcXCdhY3RpdmVcXCc6dm0uaXRlbUFjdGl2ZSA9PT0gaXRlbX1cIj4nK2EoKStcIjwvbGk+PC91bD48L25hdj48L2lvbi1zY3JvbGw+PC9kaXY+XCIsdT1lKHUpKHQpLHIuYXBwZW5kKHUpLG8oZnVuY3Rpb24oKXtsLmFycmF5UHJvdmlkZXImJmwuYXJyYXlQcm92aWRlci5sZW5ndGg+MCYmbC5pbml0Q2Fyb3VzZWwoKSxzKCl9LDApfXJldHVybntyZXN0cmljdDpcIkVcIixyZXBsYWNlOiEwLHRlbXBsYXRlOlwiXCIsc2NvcGU6e30sbGluazpyLGNvbnRyb2xsZXI6dCxjb250cm9sbGVyQXM6XCJ2bVwiLGJpbmRUb0NvbnRyb2xsZXI6e2l0ZW1EaXJlY3RpdmU6XCJAXCIsY2Fyb3VzZWxPcHRpb25zOlwiPVwiLGFycmF5UHJvdmlkZXI6XCI9XCIsb25TZWxlY3Q6XCImXCJ9fX1mdW5jdGlvbiB0KGUsdCxvLG4scil7ZnVuY3Rpb24gaSgpe2Z1bmN0aW9uIHQoZSx0KXt2YXIgbjtcIm9iamVjdFwiPT10eXBlb2YgdD8obj10LmNhcm91c2VsSWQsYW5ndWxhci5leHRlbmQoZi5vcHRpb25zLHQpKTpuPXQsbj09PWYub3B0aW9ucy5jYXJvdXNlbElkJiZvKGYuaW5pdENhcm91c2VsLDApfWZ1bmN0aW9uIG4oZSx0KXt2YXIgbz10LmlkQ29udGFpbnMsbj10LmV4Y2VwdDtmLm9wdGlvbnMuY2Fyb3VzZWxJZC5pbmRleE9mKG8pPj0wJiZmLm9wdGlvbnMuY2Fyb3VzZWxJZCE9PW4mJihmLml0ZW1BY3RpdmU9bnVsbCl9YW5ndWxhci5leHRlbmQoZi5vcHRpb25zLGYuY2Fyb3VzZWxPcHRpb25zKSxlLiRvbihcImEtY2Fyb3VzZWwuYXJyYXl1cGRhdGVkXCIsdCksZS4kb24oXCJhLWNhcm91c2VsLmRlc2FjdGl2YXRlSXRlbVwiLG4pLGYub3B0aW9ucy5wdWxsUmVmcmVzaC5hY3RpdmUmJmUuJG9uKFwiYS1jYXJvdXNlbC5wdWxscmVmcmVzaC5kb25lXCIscCl9ZnVuY3Rpb24gbCgpe2Z1bmN0aW9uIGUoKXt2YXIgdD1wYXJzZUludChsW3MtMV0ub2Zmc2V0V2lkdGgpLG49cGFyc2VJbnQobFtzLTFdLm9mZnNldEhlaWdodCk7dD4wJiZuPjA/aSgpOihjb25zb2xlLmxvZyhcIltJTkZPXSBDcmVhdGluZyBDYXJvdXNlbCBidXQgRE9NIG5vdCByZWFkeSB5ZXQuLi5cIiksZz5oP28oZnVuY3Rpb24oKXtlKCl9LDUwKTpjb25zb2xlLmxvZyhcIltFUlJPUl0gU2l6ZSBpdGVtIENhcm91c2VsIGNvdWxkIG5vdCBiZSBkZXRlcm1pbmVkXCIsZi5vcHRpb25zLmNhcm91c2VsSWQpLGgrKyl9ZnVuY3Rpb24gaSgpe3ZhciBlLG89bnVsbCE9PWYub3B0aW9ucy5zZWxlY3RBdFN0YXJ0LnByb3BlcnR5O2lmKGFuZ3VsYXIuZm9yRWFjaChsLGZ1bmN0aW9uKHQpe2U9Zi5hcnJheVByb3ZpZGVyW3ZdLGUuY2Fyb3VzZWxJZD1mLm9wdGlvbnMuY2Fyb3VzZWxJZCxkKz10Lm9mZnNldFdpZHRoLGYub3B0aW9ucy53aWR0aEl0ZW09TWF0aC5tYXgodC5vZmZzZXRXaWR0aCxmLm9wdGlvbnMud2lkdGhJdGVtKSxmLm9wdGlvbnMuaGVpZ2h0SXRlbT1NYXRoLm1heCh0Lm9mZnNldEhlaWdodCxmLm9wdGlvbnMuaGVpZ2h0SXRlbSksZi5hcnJheVByb3ZpZGVyW3ZdLndpZHRoSXRlbT10Lm9mZnNldFdpZHRoLG8mJi0xPT09Zi5vcHRpb25zLnNlbGVjdEF0U3RhcnQuaW5kZXgmJmVbZi5vcHRpb25zLnNlbGVjdEF0U3RhcnQucHJvcGVydHldPT09Zi5vcHRpb25zLnNlbGVjdEF0U3RhcnQudmFsdWUmJihmLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5pbmRleD12KSx2Kz0xfSksZi5vcHRpb25zLmNlbnRlck9uU2VsZWN0KXt2YXIgaT0uNSpuLmlubmVyV2lkdGgscz1sWzBdLGg9bFt1LTFdO3A9aS0uNSpzLm9mZnNldFdpZHRoLG09aS0uNSpoLm9mZnNldFdpZHRoLGQrPXArbSxmLm9wdGlvbnMubWF4U2Nyb2xsPW4uaW5uZXJXaWR0aC1kLFwicmlnaHRcIj09PWYub3B0aW9ucy5hbGlnbj9yLiRnZXRCeUhhbmRsZShmLm9wdGlvbnMuY2Fyb3VzZWxJZCkuc2Nyb2xsVG8oLTEqZi5vcHRpb25zLm1heFNjcm9sbCwwLCExKTpcImNlbnRlclwiPT09Zi5vcHRpb25zLmFsaWduP3IuJGdldEJ5SGFuZGxlKGYub3B0aW9ucy5jYXJvdXNlbElkKS5zY3JvbGxUbyhmLm9wdGlvbnMubWF4U2Nyb2xsKi0uNSwwLCExKTpyLiRnZXRCeUhhbmRsZShmLm9wdGlvbnMuY2Fyb3VzZWxJZCkuc2Nyb2xsVG8oMCwwLCEwKX1lbHNlIGQrPTQsZi5vcHRpb25zLm1heFNjcm9sbD1uLmlubmVyV2lkdGgtZDtmLm9wdGlvbnMud2lkdGhDYXJvdXNlbD1kLCFvJiZmLm9wdGlvbnMuc2VsZWN0Rmlyc3Q/YyhcInJpZ2h0XCI9PT1mLm9wdGlvbnMuYWxpZ24/Zi5hcnJheVByb3ZpZGVyW3UtMV06Zi5hcnJheVByb3ZpZGVyWzBdKTpvJiYtMSE9PWYub3B0aW9ucy5zZWxlY3RBdFN0YXJ0LmluZGV4JiZhKGYuYXJyYXlQcm92aWRlcltmLm9wdGlvbnMuc2VsZWN0QXRTdGFydC5pbmRleF0pLGYubmF2RWxlbT10LmZpbmQoXCJuYXZcIiksZi5uYXZFbGVtLmNzcyh7d2lkdGg6ZCtcInB4XCIsaGVpZ2h0OmYub3B0aW9ucy5oZWlnaHRJdGVtK1wicHhcIix2aXNpYmlsaXR5OlwidmlzaWJsZVwiLFwicGFkZGluZy1sZWZ0XCI6cCtcInB4XCJ9KSxmLm9wdGlvbnMucHVsbFJlZnJlc2guYWN0aXZlJiYoZi5wdWxscmVmcmVzaEluZGljYXRvcj1hbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hLWNhcm91c2VsIC5wdWxscmVmcmVzaC1pbmRpY2F0b3JcIikpLGYuc3ZnRWxlbT10LmZpbmQoXCJnXCIpKX12YXIgbD10LmZpbmQoXCJsaVwiKSxzPWwubGVuZ3RoLHU9YW5ndWxhci5lbGVtZW50KGwpLmxlbmd0aCxkPTAscD0wLG09MCx2PTAsaD0wLGc9MTU7aWYoZi5pdGVtQWN0aXZlPW51bGwsISh1PjApKXRocm93IEVycm9yKFwiVHJ5aW5nIHRvIGNyZWF0ZSBhIGNhcm91c2VsIGZyb20gYW4gZW1wdHkgYXJyYXlcIixmLm9wdGlvbnMpO28oZnVuY3Rpb24oKXtlKCl9LDUwKX1mdW5jdGlvbiBhKGUpe3ZhciB0LG87aWYoYyhlKSxmLm9wdGlvbnMuY2VudGVyT25TZWxlY3Qpe3ZhciBuPXUoZSk7aWYodD0wLDA9PT1uKXQ9MDtlbHNlIGZvcihvPTA7bj5vO28rKyl0Kz0uNSooZi5hcnJheVByb3ZpZGVyW29dLndpZHRoSXRlbStmLmFycmF5UHJvdmlkZXJbbysxXS53aWR0aEl0ZW0pO3IuJGdldEJ5SGFuZGxlKGYub3B0aW9ucy5jYXJvdXNlbElkKS5zY3JvbGxUbyh0LDAsITApfX1mdW5jdGlvbiBzKCl7dmFyIGUsdD1yLiRnZXRCeUhhbmRsZShmLm9wdGlvbnMuY2Fyb3VzZWxJZCkuZ2V0U2Nyb2xsUG9zaXRpb24oKS5sZWZ0LG89MCxpPTA7aWYoZT1mLm9wdGlvbnMubWF4U2Nyb2xsPDA/dC9mLm9wdGlvbnMubWF4U2Nyb2xsKi0xOnQvMTAsZT4xKXt2YXIgbD10LSAtMSpmLm9wdGlvbnMubWF4U2Nyb2xsO289bC9uLmlubmVyV2lkdGgsZi5wdWxscmVmcmVzaEluZGljYXRvci5jc3Moe3RyYW5zZm9ybTpcInRyYW5zbGF0ZVgoXCIrLTU2KmkrXCJweClcIn0pfW8+LjI1JiZ0PjA/KGYucHVsbHJlZnJlc2hJbmRpY2F0b3IuY3NzKHt0cmFuc2Zvcm06XCJ0cmFuc2xhdGVYKDBweClcIixkaXNwbGF5Olwibm9uZVwifSksZCgpKTooaT1vLy4yLGYuc3ZnRWxlbVswXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIixcInJvdGF0ZShcIiszNjAqaStcIiAzMiAzMilcIiksZi5wdWxscmVmcmVzaEluZGljYXRvci5jc3Moe3RyYW5zZm9ybTpcInRyYW5zbGF0ZVgoXCIrLTU2KmkrXCJweClcIn0pKX1mdW5jdGlvbiBjKHQpe2YuaXRlbUFjdGl2ZT10LGYub25TZWxlY3QuY2FsbChudWxsLHtpdGVtOnR9KSxlLiRicm9hZGNhc3QoXCJhLWNhcm91c2VsLml0ZW1zZWxlY3RlZFwiLHQpfWZ1bmN0aW9uIHUoZSl7Zm9yKHZhciB0IGluIGYuYXJyYXlQcm92aWRlcilpZihmLmFycmF5UHJvdmlkZXJbdF09PT1lKXJldHVybiB0fWZ1bmN0aW9uIGQoKXtmLm9wdGlvbnMucHVsbFJlZnJlc2gubG9hZGluZ3x8KGUuJGFwcGx5KGZ1bmN0aW9uKCl7Zi5vcHRpb25zLnB1bGxSZWZyZXNoLmxvYWRpbmc9ITB9KSxyLiRnZXRCeUhhbmRsZShmLm9wdGlvbnMuY2Fyb3VzZWxJZCkuZnJlZXplU2Nyb2xsKCEwKSxmLm5hdkVsZW0uY3NzKHt3aWR0aDpmLm9wdGlvbnMud2lkdGhDYXJvdXNlbCs0NStcInB4XCJ9KSxyLiRnZXRCeUhhbmRsZShmLm9wdGlvbnMuY2Fyb3VzZWxJZCkucmVzaXplKCksZi5vcHRpb25zLnB1bGxSZWZyZXNoLmNhbGxCYWNrKCkpfWZ1bmN0aW9uIHAoKXtmLm9wdGlvbnMucHVsbFJlZnJlc2gubG9hZGluZz0hMSxmLm5hdkVsZW0uY3NzKHt3aWR0aDpmLm9wdGlvbnMud2lkdGhDYXJvdXNlbCtcInB4XCJ9KSxyLiRnZXRCeUhhbmRsZShmLm9wdGlvbnMuY2Fyb3VzZWxJZCkucmVzaXplKCksci4kZ2V0QnlIYW5kbGUoZi5vcHRpb25zLmNhcm91c2VsSWQpLmZyZWV6ZVNjcm9sbCghMSksZi5wdWxscmVmcmVzaEluZGljYXRvci5jc3Moe3RyYW5zZm9ybTpcInRyYW5zbGF0ZVgoMHB4KVwiLGRpc3BsYXk6XCJibG9ja1wifSl9dmFyIGY9dGhpcztmLm9wdGlvbnM9e3Nob3dTY3JvbGw6ITEsY2Fyb3VzZWxJZDpcIm15LWNhcm91c2VsXCIsdGVtcGxhdGU6bnVsbCxhbGlnbjpcImxlZnRcIixjZW50ZXJPblNlbGVjdDohMCx3aWR0aEl0ZW06MCxoZWlnaHRJdGVtOjAsdHJhY2tCeTpcIiRpbmRleFwiLHNlbGVjdEZpcnN0OiEwLHNlbGVjdEF0U3RhcnQ6e3Byb3BlcnR5Om51bGwsdmFsdWU6bnVsbCxpbmRleDotMX0scHVsbFJlZnJlc2g6e2FjdGl2ZTohMSxjYWxsQmFjazphbmd1bGFyLm5vb3AsbG9hZGluZzohMX0sYW5pbWF0ZUluOiExfSxmLmluaXRDYXJvdXNlbD1sLGYuc2VsZWN0SXRlbT1hLGYub25TY3JvbGw9cyxpKCl9YW5ndWxhci5tb2R1bGUoXCJhQ2Fyb3VzZWxcIixbXSkuZGlyZWN0aXZlKFwiYUNhcm91c2VsXCIsZSksZS4kaW5qZWN0PVtcIiRjb21waWxlXCIsXCIkdGltZW91dFwiLFwiJGlvbmljU2Nyb2xsRGVsZWdhdGVcIl0sdC4kaW5qZWN0PVtcIiRzY29wZVwiLFwiJGVsZW1lbnRcIixcIiR0aW1lb3V0XCIsXCIkd2luZG93XCIsXCIkaW9uaWNTY3JvbGxEZWxlZ2F0ZVwiXX0oKSxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoKXtyZXR1cm57cmVzdHJpY3Q6XCJFXCIscmVwbGFjZTohMCx0ZW1wbGF0ZVVybDpmdW5jdGlvbihlLHQpe3JldHVybiB0LnRlbXBsYXRlfSxzY29wZTp7fSxjb250cm9sbGVyOnQsY29udHJvbGxlckFzOlwidm1cIixiaW5kVG9Db250cm9sbGVyOntuZ01vZGVsOlwiPVwiLG9uU2VsZWN0OlwiJlwiLGNhcm91c2VsT3B0aW9uczpcIj1cIn19fWZ1bmN0aW9uIHQoZSl7ZnVuY3Rpb24gdCgpe2UuJG9uKFwiYS1jYXJvdXNlbC5pdGVtc2VsZWN0ZWRcIixmdW5jdGlvbihlLHQpe28uc2VsZWN0ZWQ9dD09PW8ubmdNb2RlbD8hMDohMX0pfXZhciBvPXRoaXM7by5zZWxlY3RlZD0hMSx0KCl9dmFyIG89ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7b1tvLmxlbmd0aC0xXS5zcmM7YW5ndWxhci5tb2R1bGUoXCJhQ2Fyb3VzZWxcIikuZGlyZWN0aXZlKFwiY2Fyb3VzZWxHZW5lcmljSXRlbVwiLGUpLHQuJGluamVjdD1bXCIkc2NvcGVcIl19KCksZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKCl7cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHJlcGxhY2U6ITAsdGVtcGxhdGU6JzxhIGNsYXNzPVwiYS1jYXJvdXNlbC10ZXh0LWl0ZW1cIm5nLWJpbmQ9XCI6OnZtLm5nTW9kZWwuZGlzcGxheVwibmctY2xpY2s9XCJ2bS5vblNlbGVjdCh7aXRlbTp2bS5uZ01vZGVsfSlcIj48L2E+JyxzY29wZTp7fSxjb250cm9sbGVyOnQsY29udHJvbGxlckFzOlwidm1cIixiaW5kVG9Db250cm9sbGVyOntuZ01vZGVsOlwiPVwiLG9uU2VsZWN0OlwiJlwifX19ZnVuY3Rpb24gdChlKXtmdW5jdGlvbiB0KCl7ZS4kb24oXCJhY2Fyb3VzZWwuaXRlbXNlbGVjdGVkXCIsZnVuY3Rpb24oZSx0KXtvLnNlbGVjdGVkPXQ9PT1vLm5nTW9kZWw/ITA6ITF9KX12YXIgbz10aGlzO28uc2VsZWN0ZWQ9ITEsdCgpfWFuZ3VsYXIubW9kdWxlKFwiYUNhcm91c2VsXCIpLmRpcmVjdGl2ZShcImNhcm91c2VsVGV4dEl0ZW1cIixlKSx0LiRpbmplY3Q9W1wiJHNjb3BlXCJdfSgpOyIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBOYW1lOiAgICAgICAgICBuZy1rbm9iXG4gKiBEZXNjcmlwdGlvbjogICBBbmd1bGFyLmpzIEtub2IgZGlyZWN0aXZlXG4gKiBWZXJzaW9uOiAgICAgICAwLjEuM1xuICogSG9tZXBhZ2U6ICAgICAgaHR0cHM6Ly9yYWRtaWUuZ2l0aHViLmlvL25nLWtub2JcbiAqIExpY2VuY2U6ICAgICAgIE1JVFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cInVzZSBzdHJpY3RcIjshZnVuY3Rpb24oKXt2YXIgdWk9e30sS25vYj1mdW5jdGlvbihlbGVtZW50LHZhbHVlLG9wdGlvbnMpe3RoaXMuZWxlbWVudD1lbGVtZW50LHRoaXMudmFsdWU9dmFsdWUsdGhpcy5vcHRpb25zPW9wdGlvbnMsdGhpcy5pbkRyYWc9ITF9O0tub2IucHJvdG90eXBlLnZhbHVlVG9SYWRpYW5zPWZ1bmN0aW9uKHZhbHVlLHZhbHVlRW5kLGFuZ2xlRW5kLGFuZ2xlU3RhcnQsdmFsdWVTdGFydCl7cmV0dXJuIHZhbHVlRW5kPXZhbHVlRW5kfHwxMDAsdmFsdWVTdGFydD12YWx1ZVN0YXJ0fHwwLGFuZ2xlRW5kPWFuZ2xlRW5kfHwzNjAsYW5nbGVTdGFydD1hbmdsZVN0YXJ0fHwwLE1hdGguUEkvMTgwKigodmFsdWUtdmFsdWVTdGFydCkqKGFuZ2xlRW5kLWFuZ2xlU3RhcnQpLyh2YWx1ZUVuZC12YWx1ZVN0YXJ0KSthbmdsZVN0YXJ0KX0sS25vYi5wcm90b3R5cGUucmFkaWFuc1RvVmFsdWU9ZnVuY3Rpb24ocmFkaWFucyx2YWx1ZUVuZCx2YWx1ZVN0YXJ0LGFuZ2xlRW5kLGFuZ2xlU3RhcnQpe3JldHVybiB2YWx1ZUVuZD12YWx1ZUVuZHx8MTAwLHZhbHVlU3RhcnQ9dmFsdWVTdGFydHx8MCxhbmdsZUVuZD1hbmdsZUVuZHx8MzYwLGFuZ2xlU3RhcnQ9YW5nbGVTdGFydHx8MCwoMTgwL01hdGguUEkqcmFkaWFucy1hbmdsZVN0YXJ0KSoodmFsdWVFbmQtdmFsdWVTdGFydCkvKGFuZ2xlRW5kLWFuZ2xlU3RhcnQpK3ZhbHVlU3RhcnR9LEtub2IucHJvdG90eXBlLmNyZWF0ZUFyYz1mdW5jdGlvbihpbm5lclJhZGl1cyxvdXRlclJhZGl1cyxzdGFydEFuZ2xlLGVuZEFuZ2xlLGNvcm5lclJhZGl1cyl7dmFyIGFyYz1kMy5zdmcuYXJjKCkuaW5uZXJSYWRpdXMoaW5uZXJSYWRpdXMpLm91dGVyUmFkaXVzKG91dGVyUmFkaXVzKS5zdGFydEFuZ2xlKHN0YXJ0QW5nbGUpLmVuZEFuZ2xlKGVuZEFuZ2xlKS5jb3JuZXJSYWRpdXMoY29ybmVyUmFkaXVzKTtyZXR1cm4gYXJjfSxLbm9iLnByb3RvdHlwZS5kcmF3QXJjPWZ1bmN0aW9uKHN2ZyxhcmMsbGFiZWwsc3R5bGUsY2xpY2ssZHJhZyl7dmFyIGVsZW09c3ZnLmFwcGVuZChcInBhdGhcIikuYXR0cihcImlkXCIsbGFiZWwpLmF0dHIoXCJkXCIsYXJjKS5zdHlsZShzdHlsZSkuYXR0cihcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKFwiK3RoaXMub3B0aW9ucy5zaXplLzIrXCIsIFwiK3RoaXMub3B0aW9ucy5zaXplLzIrXCIpXCIpO3JldHVybiB0aGlzLm9wdGlvbnMucmVhZE9ubHk9PT0hMSYmKGNsaWNrJiZlbGVtLm9uKFwiY2xpY2tcIixjbGljayksZHJhZyYmZWxlbS5jYWxsKGRyYWcpKSxlbGVtfSxLbm9iLnByb3RvdHlwZS5jcmVhdGVBcmNzPWZ1bmN0aW9uKCl7dmFyIG91dGVyUmFkaXVzPXBhcnNlSW50KHRoaXMub3B0aW9ucy5zaXplLzIsMTApLHN0YXJ0QW5nbGU9dGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSwzNjApLGVuZEFuZ2xlPXRoaXMudmFsdWVUb1JhZGlhbnModGhpcy5vcHRpb25zLmVuZEFuZ2xlLDM2MCk7dGhpcy5vcHRpb25zLnNjYWxlLmVuYWJsZWQmJihvdXRlclJhZGl1cy09dGhpcy5vcHRpb25zLnNjYWxlLndpZHRoK3RoaXMub3B0aW9ucy5zY2FsZS5zcGFjZVdpZHRoKTt2YXIgZGlmZix0cmFja0lubmVyUmFkaXVzPW91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy50cmFja1dpZHRoLGNoYW5nZUlubmVyUmFkaXVzPW91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5iYXJXaWR0aCx2YWx1ZUlubmVyUmFkaXVzPW91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5iYXJXaWR0aCxpbnRlcmFjdElubmVyUmFkaXVzPTEsdHJhY2tPdXRlclJhZGl1cz1vdXRlclJhZGl1cyxjaGFuZ2VPdXRlclJhZGl1cz1vdXRlclJhZGl1cyx2YWx1ZU91dGVyUmFkaXVzPW91dGVyUmFkaXVzLGludGVyYWN0T3V0ZXJSYWRpdXM9b3V0ZXJSYWRpdXM7dGhpcy5vcHRpb25zLmJhcldpZHRoPnRoaXMub3B0aW9ucy50cmFja1dpZHRoPyhkaWZmPSh0aGlzLm9wdGlvbnMuYmFyV2lkdGgtdGhpcy5vcHRpb25zLnRyYWNrV2lkdGgpLzIsdHJhY2tJbm5lclJhZGl1cy09ZGlmZix0cmFja091dGVyUmFkaXVzLT1kaWZmKTp0aGlzLm9wdGlvbnMuYmFyV2lkdGg8dGhpcy5vcHRpb25zLnRyYWNrV2lkdGgmJihkaWZmPSh0aGlzLm9wdGlvbnMudHJhY2tXaWR0aC10aGlzLm9wdGlvbnMuYmFyV2lkdGgpLzIsY2hhbmdlT3V0ZXJSYWRpdXMtPWRpZmYsdmFsdWVPdXRlclJhZGl1cy09ZGlmZixjaGFuZ2VJbm5lclJhZGl1cy09ZGlmZix2YWx1ZUlubmVyUmFkaXVzLT1kaWZmKSx0aGlzLm9wdGlvbnMuYmdDb2xvciYmKHRoaXMuYmdBcmM9dGhpcy5jcmVhdGVBcmMoMCxvdXRlclJhZGl1cyxzdGFydEFuZ2xlLGVuZEFuZ2xlKSksXCJ0cm9uXCI9PT10aGlzLm9wdGlvbnMuc2tpbi50eXBlJiYodHJhY2tPdXRlclJhZGl1cz10cmFja091dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5za2luLndpZHRoLXRoaXMub3B0aW9ucy5za2luLnNwYWNlV2lkdGgsY2hhbmdlT3V0ZXJSYWRpdXM9Y2hhbmdlT3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnNraW4ud2lkdGgtdGhpcy5vcHRpb25zLnNraW4uc3BhY2VXaWR0aCx2YWx1ZU91dGVyUmFkaXVzPXZhbHVlT3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnNraW4ud2lkdGgtdGhpcy5vcHRpb25zLnNraW4uc3BhY2VXaWR0aCxpbnRlcmFjdE91dGVyUmFkaXVzPWludGVyYWN0T3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnNraW4ud2lkdGgtdGhpcy5vcHRpb25zLnNraW4uc3BhY2VXaWR0aCx0aGlzLmhvb3BBcmM9dGhpcy5jcmVhdGVBcmMob3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnNraW4ud2lkdGgsb3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxlbmRBbmdsZSkpLHRoaXMudHJhY2tBcmM9dGhpcy5jcmVhdGVBcmModHJhY2tJbm5lclJhZGl1cyx0cmFja091dGVyUmFkaXVzLHN0YXJ0QW5nbGUsZW5kQW5nbGUpLHRoaXMuY2hhbmdlQXJjPXRoaXMuY3JlYXRlQXJjKGNoYW5nZUlubmVyUmFkaXVzLGNoYW5nZU91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMuYmFyQ2FwKSx0aGlzLnZhbHVlQXJjPXRoaXMuY3JlYXRlQXJjKHZhbHVlSW5uZXJSYWRpdXMsdmFsdWVPdXRlclJhZGl1cyxzdGFydEFuZ2xlLHN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLmJhckNhcCksdGhpcy5pbnRlcmFjdEFyYz10aGlzLmNyZWF0ZUFyYyhpbnRlcmFjdElubmVyUmFkaXVzLGludGVyYWN0T3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxlbmRBbmdsZSl9LEtub2IucHJvdG90eXBlLmRyYXdBcmNzPWZ1bmN0aW9uKGNsaWNrSW50ZXJhY3Rpb24sZHJhZ0JlaGF2aW9yKXt2YXIgc3ZnPWQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpLmFwcGVuZChcInN2Z1wiKS5hdHRyKFwid2lkdGhcIix0aGlzLm9wdGlvbnMuc2l6ZSkuYXR0cihcImhlaWdodFwiLHRoaXMub3B0aW9ucy5zaXplKTtpZih0aGlzLm9wdGlvbnMuYmdDb2xvciYmdGhpcy5kcmF3QXJjKHN2Zyx0aGlzLmJnQXJjLFwiYmdBcmNcIix7ZmlsbDp0aGlzLm9wdGlvbnMuYmdDb2xvcn0pLHRoaXMub3B0aW9ucy5kaXNwbGF5SW5wdXQpe3ZhciBmb250U2l6ZT0uMip0aGlzLm9wdGlvbnMuc2l6ZStcInB4XCI7XCJhdXRvXCIhPT10aGlzLm9wdGlvbnMuZm9udFNpemUmJihmb250U2l6ZT10aGlzLm9wdGlvbnMuZm9udFNpemUrXCJweFwiKSx0aGlzLm9wdGlvbnMuc3RlcDwxJiYodGhpcy52YWx1ZT10aGlzLnZhbHVlLnRvRml4ZWQoMSkpO3ZhciB2PXRoaXMudmFsdWU7XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5vcHRpb25zLmlucHV0Rm9ybWF0dGVyJiYodj10aGlzLm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXIodikpLHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJpZFwiLFwidGV4dFwiKS5hdHRyKFwidGV4dC1hbmNob3JcIixcIm1pZGRsZVwiKS5hdHRyKFwiZm9udC1zaXplXCIsZm9udFNpemUpLnN0eWxlKFwiZmlsbFwiLHRoaXMub3B0aW9ucy50ZXh0Q29sb3IpLnRleHQodit0aGlzLm9wdGlvbnMudW5pdHx8XCJcIikuYXR0cihcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKFwiK3RoaXMub3B0aW9ucy5zaXplLzIrXCIsIFwiKyh0aGlzLm9wdGlvbnMuc2l6ZS8yKy4wNip0aGlzLm9wdGlvbnMuc2l6ZSkrXCIpXCIpLHRoaXMub3B0aW9ucy5zdWJUZXh0LmVuYWJsZWQmJihmb250U2l6ZT0uMDcqdGhpcy5vcHRpb25zLnNpemUrXCJweFwiLFwiYXV0b1wiIT09dGhpcy5vcHRpb25zLnN1YlRleHQuZm9udCYmKGZvbnRTaXplPXRoaXMub3B0aW9ucy5zdWJUZXh0LmZvbnQrXCJweFwiKSxzdmcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwiY2xhc3NcIixcInN1Yi10ZXh0XCIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLFwibWlkZGxlXCIpLmF0dHIoXCJmb250LXNpemVcIixmb250U2l6ZSkuc3R5bGUoXCJmaWxsXCIsdGhpcy5vcHRpb25zLnN1YlRleHQuY29sb3IpLnRleHQodGhpcy5vcHRpb25zLnN1YlRleHQudGV4dCkuYXR0cihcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKFwiK3RoaXMub3B0aW9ucy5zaXplLzIrXCIsIFwiKyh0aGlzLm9wdGlvbnMuc2l6ZS8yKy4xNSp0aGlzLm9wdGlvbnMuc2l6ZSkrXCIpXCIpKX1pZih0aGlzLm9wdGlvbnMuc2NhbGUuZW5hYmxlZCl7dmFyIHJhZGl1cyxxdWFudGl0eSxkYXRhLGNvdW50PTAsYW5nbGU9MCxzdGFydFJhZGlhbnM9dGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLm9wdGlvbnMubWluLHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLmVuZEFuZ2xlLHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5taW4pLGVuZFJhZGlhbnM9dGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLmVuZEFuZ2xlLHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5taW4pLGRpZmY9MDtpZigwPT09dGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUmJjM2MD09PXRoaXMub3B0aW9ucy5lbmRBbmdsZXx8KGRpZmY9MSksXCJkb3RzXCI9PT10aGlzLm9wdGlvbnMuc2NhbGUudHlwZSl7dmFyIHdpZHRoPXRoaXMub3B0aW9ucy5zY2FsZS53aWR0aDtyYWRpdXM9dGhpcy5vcHRpb25zLnNpemUvMi13aWR0aCxxdWFudGl0eT10aGlzLm9wdGlvbnMuc2NhbGUucXVhbnRpdHk7dmFyIG9mZnNldD1yYWRpdXMrdGhpcy5vcHRpb25zLnNjYWxlLndpZHRoO2RhdGE9ZDMucmFuZ2UocXVhbnRpdHkpLm1hcChmdW5jdGlvbigpe3JldHVybiBhbmdsZT1jb3VudCooZW5kUmFkaWFucy1zdGFydFJhZGlhbnMpLU1hdGguUEkvMitzdGFydFJhZGlhbnMsY291bnQrPTEvKHF1YW50aXR5LWRpZmYpLHtjeDpvZmZzZXQrTWF0aC5jb3MoYW5nbGUpKnJhZGl1cyxjeTpvZmZzZXQrTWF0aC5zaW4oYW5nbGUpKnJhZGl1cyxyOndpZHRofX0pLHN2Zy5zZWxlY3RBbGwoXCJjaXJjbGVcIikuZGF0YShkYXRhKS5lbnRlcigpLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKHtyOmZ1bmN0aW9uKGQpe3JldHVybiBkLnJ9LGN4OmZ1bmN0aW9uKGQpe3JldHVybiBkLmN4fSxjeTpmdW5jdGlvbihkKXtyZXR1cm4gZC5jeX0sZmlsbDp0aGlzLm9wdGlvbnMuc2NhbGUuY29sb3J9KX1lbHNlIGlmKFwibGluZXNcIj09PXRoaXMub3B0aW9ucy5zY2FsZS50eXBlKXt2YXIgaGVpZ2h0PXRoaXMub3B0aW9ucy5zY2FsZS5oZWlnaHQ7cmFkaXVzPXRoaXMub3B0aW9ucy5zaXplLzIscXVhbnRpdHk9dGhpcy5vcHRpb25zLnNjYWxlLnF1YW50aXR5LGRhdGE9ZDMucmFuZ2UocXVhbnRpdHkpLm1hcChmdW5jdGlvbigpe3JldHVybiBhbmdsZT1jb3VudCooZW5kUmFkaWFucy1zdGFydFJhZGlhbnMpLU1hdGguUEkvMitzdGFydFJhZGlhbnMsY291bnQrPTEvKHF1YW50aXR5LWRpZmYpLHt4MTpyYWRpdXMrTWF0aC5jb3MoYW5nbGUpKnJhZGl1cyx5MTpyYWRpdXMrTWF0aC5zaW4oYW5nbGUpKnJhZGl1cyx4MjpyYWRpdXMrTWF0aC5jb3MoYW5nbGUpKihyYWRpdXMtaGVpZ2h0KSx5MjpyYWRpdXMrTWF0aC5zaW4oYW5nbGUpKihyYWRpdXMtaGVpZ2h0KX19KSxzdmcuc2VsZWN0QWxsKFwibGluZVwiKS5kYXRhKGRhdGEpLmVudGVyKCkuYXBwZW5kKFwibGluZVwiKS5hdHRyKHt4MTpmdW5jdGlvbihkKXtyZXR1cm4gZC54MX0seTE6ZnVuY3Rpb24oZCl7cmV0dXJuIGQueTF9LHgyOmZ1bmN0aW9uKGQpe3JldHVybiBkLngyfSx5MjpmdW5jdGlvbihkKXtyZXR1cm4gZC55Mn0sXCJzdHJva2Utd2lkdGhcIjp0aGlzLm9wdGlvbnMuc2NhbGUud2lkdGgsc3Ryb2tlOnRoaXMub3B0aW9ucy5zY2FsZS5jb2xvcn0pfX1cInRyb25cIj09PXRoaXMub3B0aW9ucy5za2luLnR5cGUmJnRoaXMuZHJhd0FyYyhzdmcsdGhpcy5ob29wQXJjLFwiaG9vcEFyY1wiLHtmaWxsOnRoaXMub3B0aW9ucy5za2luLmNvbG9yfSksdGhpcy5kcmF3QXJjKHN2Zyx0aGlzLnRyYWNrQXJjLFwidHJhY2tBcmNcIix7ZmlsbDp0aGlzLm9wdGlvbnMudHJhY2tDb2xvcn0pLHRoaXMub3B0aW9ucy5kaXNwbGF5UHJldmlvdXM/dGhpcy5jaGFuZ2VFbGVtPXRoaXMuZHJhd0FyYyhzdmcsdGhpcy5jaGFuZ2VBcmMsXCJjaGFuZ2VBcmNcIix7ZmlsbDp0aGlzLm9wdGlvbnMucHJldkJhckNvbG9yfSk6dGhpcy5jaGFuZ2VFbGVtPXRoaXMuZHJhd0FyYyhzdmcsdGhpcy5jaGFuZ2VBcmMsXCJjaGFuZ2VBcmNcIix7XCJmaWxsLW9wYWNpdHlcIjowfSksdGhpcy52YWx1ZUVsZW09dGhpcy5kcmF3QXJjKHN2Zyx0aGlzLnZhbHVlQXJjLFwidmFsdWVBcmNcIix7ZmlsbDp0aGlzLm9wdGlvbnMuYmFyQ29sb3J9KTt2YXIgY3Vyc29yPVwicG9pbnRlclwiO3RoaXMub3B0aW9ucy5yZWFkT25seSYmKGN1cnNvcj1cImRlZmF1bHRcIiksdGhpcy5kcmF3QXJjKHN2Zyx0aGlzLmludGVyYWN0QXJjLFwiaW50ZXJhY3RBcmNcIix7XCJmaWxsLW9wYWNpdHlcIjowLGN1cnNvcjpjdXJzb3J9LGNsaWNrSW50ZXJhY3Rpb24sZHJhZ0JlaGF2aW9yKX0sS25vYi5wcm90b3R5cGUuZHJhdz1mdW5jdGlvbih1cGRhdGUpe2Z1bmN0aW9uIGRyYWdJbnRlcmFjdGlvbigpe3RoYXQuaW5EcmFnPSEwO3ZhciB4PWQzLmV2ZW50LngtdGhhdC5vcHRpb25zLnNpemUvMix5PWQzLmV2ZW50LnktdGhhdC5vcHRpb25zLnNpemUvMjtpbnRlcmFjdGlvbih4LHksITEpfWZ1bmN0aW9uIGNsaWNrSW50ZXJhY3Rpb24oKXt0aGF0LmluRHJhZz0hMTt2YXIgY29vcmRzPWQzLm1vdXNlKHRoaXMucGFyZW50Tm9kZSkseD1jb29yZHNbMF0tdGhhdC5vcHRpb25zLnNpemUvMix5PWNvb3Jkc1sxXS10aGF0Lm9wdGlvbnMuc2l6ZS8yO2ludGVyYWN0aW9uKHgseSwhMCl9ZnVuY3Rpb24gaW50ZXJhY3Rpb24oeCx5LGlzRmluYWwpe3ZhciByYWRpYW5zLGRlbHRhLGFyYz1NYXRoLmF0YW4oeS94KS8oTWF0aC5QSS8xODApO2lmKHg+PTAmJjA+PXl8fHg+PTAmJnk+PTA/ZGVsdGE9OTA6KGRlbHRhPTI3MCx0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZTwwJiYoZGVsdGE9LTkwKSkscmFkaWFucz0oZGVsdGErYXJjKSooTWF0aC5QSS8xODApLHRoYXQudmFsdWU9dGhhdC5yYWRpYW5zVG9WYWx1ZShyYWRpYW5zLHRoYXQub3B0aW9ucy5tYXgsdGhhdC5vcHRpb25zLm1pbix0aGF0Lm9wdGlvbnMuZW5kQW5nbGUsdGhhdC5vcHRpb25zLnN0YXJ0QW5nbGUpLHRoYXQudmFsdWU+PXRoYXQub3B0aW9ucy5taW4mJnRoYXQudmFsdWU8PXRoYXQub3B0aW9ucy5tYXgmJih0aGF0LnZhbHVlPU1hdGgucm91bmQofn4oKHRoYXQudmFsdWU8MD8tLjU6LjUpK3RoYXQudmFsdWUvdGhhdC5vcHRpb25zLnN0ZXApKnRoYXQub3B0aW9ucy5zdGVwKjEwMCkvMTAwLHRoYXQub3B0aW9ucy5zdGVwPDEmJih0aGF0LnZhbHVlPXRoYXQudmFsdWUudG9GaXhlZCgxKSksdXBkYXRlKHRoYXQudmFsdWUpLHRoYXQudmFsdWVBcmMuZW5kQW5nbGUodGhhdC52YWx1ZVRvUmFkaWFucyh0aGF0LnZhbHVlLHRoYXQub3B0aW9ucy5tYXgsdGhhdC5vcHRpb25zLmVuZEFuZ2xlLHRoYXQub3B0aW9ucy5zdGFydEFuZ2xlLHRoYXQub3B0aW9ucy5taW4pKSx0aGF0LnZhbHVlRWxlbS5hdHRyKFwiZFwiLHRoYXQudmFsdWVBcmMpLGlzRmluYWwmJih0aGF0LmNoYW5nZUFyYy5lbmRBbmdsZSh0aGF0LnZhbHVlVG9SYWRpYW5zKHRoYXQudmFsdWUsdGhhdC5vcHRpb25zLm1heCx0aGF0Lm9wdGlvbnMuZW5kQW5nbGUsdGhhdC5vcHRpb25zLnN0YXJ0QW5nbGUsdGhhdC5vcHRpb25zLm1pbikpLHRoYXQuY2hhbmdlRWxlbS5hdHRyKFwiZFwiLHRoYXQuY2hhbmdlQXJjKSksdGhhdC5vcHRpb25zLmRpc3BsYXlJbnB1dCkpe3ZhciB2PXRoYXQudmFsdWU7XCJmdW5jdGlvblwiPT10eXBlb2YgdGhhdC5vcHRpb25zLmlucHV0Rm9ybWF0dGVyJiYodj10aGF0Lm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXIodikpLGQzLnNlbGVjdCh0aGF0LmVsZW1lbnQpLnNlbGVjdChcIiN0ZXh0XCIpLnRleHQodit0aGF0Lm9wdGlvbnMudW5pdHx8XCJcIil9fWQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpLnNlbGVjdChcInN2Z1wiKS5yZW1vdmUoKTt2YXIgdGhhdD10aGlzO3RoYXQuY3JlYXRlQXJjcygpO3ZhciBkcmFnQmVoYXZpb3I9ZDMuYmVoYXZpb3IuZHJhZygpLm9uKFwiZHJhZ1wiLGRyYWdJbnRlcmFjdGlvbikub24oXCJkcmFnZW5kXCIsY2xpY2tJbnRlcmFjdGlvbik7dGhhdC5kcmF3QXJjcyhjbGlja0ludGVyYWN0aW9uLGRyYWdCZWhhdmlvciksdGhhdC5vcHRpb25zLmFuaW1hdGUuZW5hYmxlZD90aGF0LnZhbHVlRWxlbS50cmFuc2l0aW9uKCkuZWFzZSh0aGF0Lm9wdGlvbnMuYW5pbWF0ZS5lYXNlKS5kdXJhdGlvbih0aGF0Lm9wdGlvbnMuYW5pbWF0ZS5kdXJhdGlvbikudHdlZW4oXCJcIixmdW5jdGlvbigpe3ZhciBpPWQzLmludGVycG9sYXRlKHRoYXQudmFsdWVUb1JhZGlhbnModGhhdC5vcHRpb25zLnN0YXJ0QW5nbGUsMzYwKSx0aGF0LnZhbHVlVG9SYWRpYW5zKHRoYXQudmFsdWUsdGhhdC5vcHRpb25zLm1heCx0aGF0Lm9wdGlvbnMuZW5kQW5nbGUsdGhhdC5vcHRpb25zLnN0YXJ0QW5nbGUsdGhhdC5vcHRpb25zLm1pbikpO3JldHVybiBmdW5jdGlvbih0KXt2YXIgdmFsPWkodCk7dGhhdC52YWx1ZUVsZW0uYXR0cihcImRcIix0aGF0LnZhbHVlQXJjLmVuZEFuZ2xlKHZhbCkpLHRoYXQuY2hhbmdlRWxlbS5hdHRyKFwiZFwiLHRoYXQuY2hhbmdlQXJjLmVuZEFuZ2xlKHZhbCkpfX0pOih0aGF0LmNoYW5nZUFyYy5lbmRBbmdsZSh0aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMudmFsdWUsdGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMuZW5kQW5nbGUsdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLm1pbikpLHRoYXQuY2hhbmdlRWxlbS5hdHRyKFwiZFwiLHRoYXQuY2hhbmdlQXJjKSx0aGF0LnZhbHVlQXJjLmVuZEFuZ2xlKHRoaXMudmFsdWVUb1JhZGlhbnModGhpcy52YWx1ZSx0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5lbmRBbmdsZSx0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMubWluKSksdGhhdC52YWx1ZUVsZW0uYXR0cihcImRcIix0aGF0LnZhbHVlQXJjKSl9LEtub2IucHJvdG90eXBlLnNldFZhbHVlPWZ1bmN0aW9uKG5ld1ZhbHVlKXtpZighdGhpcy5pbkRyYWcmJnRoaXMudmFsdWU+PXRoaXMub3B0aW9ucy5taW4mJnRoaXMudmFsdWU8PXRoaXMub3B0aW9ucy5tYXgpe3ZhciByYWRpYW5zPXRoaXMudmFsdWVUb1JhZGlhbnMobmV3VmFsdWUsdGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMuZW5kQW5nbGUsdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLm1pbik7aWYodGhpcy52YWx1ZT1NYXRoLnJvdW5kKH5+KCgwPm5ld1ZhbHVlPy0uNTouNSkrbmV3VmFsdWUvdGhpcy5vcHRpb25zLnN0ZXApKnRoaXMub3B0aW9ucy5zdGVwKjEwMCkvMTAwLHRoaXMub3B0aW9ucy5zdGVwPDEmJih0aGlzLnZhbHVlPXRoaXMudmFsdWUudG9GaXhlZCgxKSksdGhpcy5jaGFuZ2VBcmMuZW5kQW5nbGUocmFkaWFucyksZDMuc2VsZWN0KHRoaXMuZWxlbWVudCkuc2VsZWN0KFwiI2NoYW5nZUFyY1wiKS5hdHRyKFwiZFwiLHRoaXMuY2hhbmdlQXJjKSx0aGlzLnZhbHVlQXJjLmVuZEFuZ2xlKHJhZGlhbnMpLGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpLnNlbGVjdChcIiN2YWx1ZUFyY1wiKS5hdHRyKFwiZFwiLHRoaXMudmFsdWVBcmMpLHRoaXMub3B0aW9ucy5kaXNwbGF5SW5wdXQpe3ZhciB2PXRoaXMudmFsdWU7XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5vcHRpb25zLmlucHV0Rm9ybWF0dGVyJiYodj10aGlzLm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXIodikpLGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpLnNlbGVjdChcIiN0ZXh0XCIpLnRleHQodit0aGlzLm9wdGlvbnMudW5pdHx8XCJcIil9fX0sdWkuS25vYj1Lbm9iLHVpLmtub2JEaXJlY3RpdmU9ZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFXCIsc2NvcGU6e3ZhbHVlOlwiPVwiLG9wdGlvbnM6XCI9XCJ9LGxpbms6ZnVuY3Rpb24oc2NvcGUsZWxlbWVudCl7c2NvcGUudmFsdWU9c2NvcGUudmFsdWV8fDA7dmFyIGRlZmF1bHRPcHRpb25zPXtza2luOnt0eXBlOlwic2ltcGxlXCIsd2lkdGg6MTAsY29sb3I6XCJyZ2JhKDI1NSwwLDAsLjUpXCIsc3BhY2VXaWR0aDo1fSxhbmltYXRlOntlbmFibGVkOiEwLGR1cmF0aW9uOjFlMyxlYXNlOlwiYm91bmNlXCJ9LHNpemU6MjAwLHN0YXJ0QW5nbGU6MCxlbmRBbmdsZTozNjAsdW5pdDpcIlwiLGRpc3BsYXlJbnB1dDohMCxpbnB1dEZvcm1hdHRlcjpmdW5jdGlvbih2KXtyZXR1cm4gdn0scmVhZE9ubHk6ITEsdHJhY2tXaWR0aDo1MCxiYXJXaWR0aDo1MCx0cmFja0NvbG9yOlwicmdiYSgwLDAsMCwwKVwiLGJhckNvbG9yOlwicmdiYSgyNTUsMCwwLC41KVwiLHByZXZCYXJDb2xvcjpcInJnYmEoMCwwLDAsMClcIix0ZXh0Q29sb3I6XCIjMjIyXCIsYmFyQ2FwOjAsZm9udFNpemU6XCJhdXRvXCIsc3ViVGV4dDp7ZW5hYmxlZDohMSx0ZXh0OlwiXCIsY29sb3I6XCJncmF5XCIsZm9udDpcImF1dG9cIn0sYmdDb2xvcjpcIlwiLHNjYWxlOntlbmFibGVkOiExLHR5cGU6XCJsaW5lc1wiLGNvbG9yOlwiZ3JheVwiLHdpZHRoOjQscXVhbnRpdHk6MjAsaGVpZ2h0OjEwLHNwYWNlV2lkdGg6MTV9LHN0ZXA6MSxkaXNwbGF5UHJldmlvdXM6ITEsbWluOjAsbWF4OjEwMCxkeW5hbWljT3B0aW9uczohMX07c2NvcGUub3B0aW9ucz1hbmd1bGFyLm1lcmdlKGRlZmF1bHRPcHRpb25zLHNjb3BlLm9wdGlvbnMpO3ZhciBrbm9iPW5ldyB1aS5Lbm9iKGVsZW1lbnRbMF0sc2NvcGUudmFsdWUsc2NvcGUub3B0aW9ucyk7aWYoc2NvcGUuJHdhdGNoKFwidmFsdWVcIixmdW5jdGlvbihuZXdWYWx1ZSxvbGRWYWx1ZSl7bnVsbD09PW5ld1ZhbHVlJiZcInVuZGVmaW5lZFwiPT10eXBlb2YgbmV3VmFsdWV8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBvbGRWYWx1ZXx8bmV3VmFsdWU9PT1vbGRWYWx1ZXx8a25vYi5zZXRWYWx1ZShuZXdWYWx1ZSl9KSxzY29wZS5vcHRpb25zLmR5bmFtaWNPcHRpb25zKXt2YXIgaXNGaXJzdFdhdGNoT25PcHRpb25zPSEwO3Njb3BlLiR3YXRjaChcIm9wdGlvbnNcIixmdW5jdGlvbigpe2lmKGlzRmlyc3RXYXRjaE9uT3B0aW9ucylpc0ZpcnN0V2F0Y2hPbk9wdGlvbnM9ITE7ZWxzZXt2YXIgbmV3T3B0aW9ucz1hbmd1bGFyLm1lcmdlKGRlZmF1bHRPcHRpb25zLHNjb3BlLm9wdGlvbnMpO2tub2I9bmV3IHVpLktub2IoZWxlbWVudFswXSxzY29wZS52YWx1ZSxuZXdPcHRpb25zKSxkcmF3S25vYigpfX0sITApfXZhciBkcmF3S25vYj1mdW5jdGlvbigpe2tub2IuZHJhdyhmdW5jdGlvbih2YWx1ZSl7c2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCl7c2NvcGUudmFsdWU9dmFsdWV9KX0pfTtkcmF3S25vYigpfX19LGFuZ3VsYXIubW9kdWxlKFwidWkua25vYlwiLFtdKS5kaXJlY3RpdmUoXCJ1aUtub2JcIix1aS5rbm9iRGlyZWN0aXZlKX0oKTsiLCIndXNlIHN0cmljdCc7XG5cbi8vIGFuZ3VsYXIgbW9kdWxlc1xuLy8gcmVxdWlyZSgnYW5ndWxhci1tb2R1bGUtc2FuaXRpemUnKTtcbi8vIHJlcXVpcmUoJy4vdGVtcGxhdGVzJyk7XG5cbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvX2luZGV4Jyk7XG5yZXF1aXJlKCcuL3NlcnZpY2VzL19pbmRleCcpO1xucmVxdWlyZSgnLi9tb2RlbHMvX2luZGV4Jyk7XG5yZXF1aXJlKCcuL2RpcmVjdGl2ZXMvX2luZGV4Jyk7XG5cbnJlcXVpcmUoJy4uL2Jvd2VyX2NvbXBvbmVudHMvbmcta25vYi9kaXN0L25nLWtub2IubWluJyk7XG5yZXF1aXJlKCcuLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItYW5pbWF0ZS9hbmd1bGFyLWFuaW1hdGUubWluJyk7XG5yZXF1aXJlKCcuLi9ib3dlcl9jb21wb25lbnRzL2lvbmljLWFkdmFuY2VkLWNhcm91c2VsL2Rpc3QvYWR2YW5jZWQtY2Fyb3VzZWwubWluJyk7XG5cblxuXG4vLyBjcmVhdGUgYW5kIGJvb3RzdHJhcCBhcHBsaWNhdGlvblxuYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICB2YXIgcmVxdWlyZXMgPSBbXG4gICAgJ2lvbmljJyxcbiAgICAnYXBwLmNvbnRyb2xsZXJzJyxcbiAgICAnYXBwLnNlcnZpY2VzJyxcbiAgICAnYXBwLm1vZGVscycsXG4gICAgJ2FwcC5kaXJlY3RpdmVzJyxcbiAgICAndWkucm91dGVyJyxcbiAgICAndWkua25vYicsXG4gICAgJ2FDYXJvdXNlbCcsXG4gICAgJ25nQW5pbWF0ZSdcbiAgICAvLyAndGVtcGxhdGVzJyxcbiAgICAvLyAnbmdTYW5pdGl6ZScsXG4gIF07XG5cbiAgLy8gbW91bnQgb24gd2luZG93IGZvciB0ZXN0aW5nXG4gIHdpbmRvdy5hcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgcmVxdWlyZXMpO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb25zdGFudCgnQXBwU2V0dGluZ3MnLCByZXF1aXJlKCcuL2NvbnN0YW50cy5kZXZlbG9wbWVudCcpKTtcblxuICBhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29uZmlnKHJlcXVpcmUoJy4vb25fY29uZmlnJykpO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5ydW4ocmVxdWlyZSgnLi9vbl9ydW4nKSk7XG5cblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGFuZ3VsYXIuYm9vdHN0cmFwKGRvY3VtZW50LCBbJ2FwcCddKTsgICBcbiAgfSwgKDEwMDApKTtcbiAgXG5cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFwcFNldHRpbmdzID0ge1xuICB5b2NhbEFQSTp7XG4gICAgLy8gYmFzZTogJ2h0dHA6Ly95b2VuZHBvaW50NC13YmJzLnJoY2xvdWQuY29tL2FwaS92MS95b2thbC9kYXRhLydcbiAgICBiYXNlOiAnaHR0cDovL2xvY2FsaG9zdDo4MTAwL2FwaS92MS95b2thbC9kYXRhLydcbiAgfSxcblxuICBHTUFQX0RFRkFVTFQ6e1xuICBcdFJBRElVUzogODAwLFxuICBcdFpPT006ICAgMTRcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBTZXR0aW5nczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEFwcEN0cmwoJGxvZywgJHJvb3RTY29wZSwgJHNjb3BlLCAkaW9uaWNNb2RhbCwgJHRpbWVvdXQsIGNvb3JkaW5hdGVzLCBBcHBTZXR0aW5ncykge1xuXG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdBcHBDdHJsJyk7XG5cbiAgdmFyIHZtID0gdGhpcztcbiAgLy8gc2V0IGN1cmVudCBwb3NpdGlvbiB0byByb290U2NvcGUgdG8gbWFrZSBnbG9iYWxseSBhdmFpbGFibGUgXG4gICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uID0gY29vcmRpbmF0ZXM7XG4gIFxuXG4gIC8vIEZvcm0gZGF0YSBmb3IgdGhlIGxvZ2luIG1vZGFsXG4gICRzY29wZS5sb2dpbkRhdGEgPSB7fTtcblxuICAvLyBDcmVhdGUgdGhlIGxvZ2luIG1vZGFsIHRoYXQgd2Ugd2lsbCB1c2UgbGF0ZXJcbiAgJGlvbmljTW9kYWwuZnJvbVRlbXBsYXRlVXJsKCd0ZW1wbGF0ZXMvbG9naW4uaHRtbCcsIHtcbiAgICBzY29wZTogJHNjb3BlXG4gIH0pLnRoZW4oZnVuY3Rpb24obW9kYWwpIHtcbiAgICAkc2NvcGUubW9kYWwgPSBtb2RhbDtcbiAgfSk7XG5cbiAgLy8gVHJpZ2dlcmVkIGluIHRoZSBsb2dpbiBtb2RhbCB0byBjbG9zZSBpdFxuICAkc2NvcGUuY2xvc2VMb2dpbiA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5tb2RhbC5oaWRlKCk7XG4gIH07XG5cbiAgLy8gT3BlbiB0aGUgbG9naW4gbW9kYWxcbiAgJHNjb3BlLmxvZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLm1vZGFsLnNob3coKTtcbiAgfTtcblxuICAvLyBQZXJmb3JtIHRoZSBsb2dpbiBhY3Rpb24gd2hlbiB0aGUgdXNlciBzdWJtaXRzIHRoZSBsb2dpbiBmb3JtXG4gICRzY29wZS5kb0xvZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ0RvaW5nIGxvZ2luJywgJHNjb3BlLmxvZ2luRGF0YSk7XG5cbiAgICAvLyBTaW11bGF0ZSBhIGxvZ2luIGRlbGF5LiBSZW1vdmUgdGhpcyBhbmQgcmVwbGFjZSB3aXRoIHlvdXIgbG9naW5cbiAgICAvLyBjb2RlIGlmIHVzaW5nIGEgbG9naW4gc3lzdGVtXG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAkc2NvcGUuY2xvc2VMb2dpbigpO1xuICAgIH0sIDEwMDApO1xuICB9O1xuXG4gIFxuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdBcHBDdHJsJywgQXBwQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBCcm93c2VDdHJsKCRzY29wZSwgJHJvb3RTY29wZSwgJHEsICRodHRwLCAkbG9nLCAkZmlsdGVyLCAkdGltZW91dCwgTG9jYXRpb25zU2VydmljZSwgICRpb25pY0xvYWRpbmcsICAkaW9uaWNTbGlkZUJveERlbGVnYXRlLCBBcHBTZXR0aW5ncykge1xuICAgICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdCcm93c2VDdHJsJyk7XG5cbiBcdC8vIFZpZXdNb2RlbFxuICBcdHZhciB2bSA9IHRoaXM7XG4gICAgdm0ucmFkaXVzID0gQXBwU2V0dGluZ3MuR01BUF9SQURJVVM7XG4gICAgJHNjb3BlLnJhZGl1cyA9IEFwcFNldHRpbmdzLkdNQVBfUkFESVVTO1xuICAgICRzY29wZS5DdXJyZW50Q29vcmRzID0gICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uO1xuXG4gICAgJHNjb3BlLmxvY2F0aW9ucyA9W107XG4gICAgJHNjb3BlLmxvY2F0aW9uc19ncm91cHMgPVtdO1xuICAgICRzY29wZS5sb2NhdGlvbnNfbG9hZGVkID0gMDsgXG4gICAgJHNjb3BlLmNhcm91c2VscyA9IFtdO1xuXG4gICAgJGlvbmljTG9hZGluZy5zaG93KHtcbiAgICAgICAgdGVtcGxhdGU6IFwiRmluZGluZyBSYWQgU3BvdHMgLi4uXCIsXG4gICAgICAgIGJhY2tkcm9wOiB0cnVlXG4gICAgfSk7XG5cbiAgICAkc2NvcGUuY2Fyb3VzZWxPcHRpb25zID0ge1xuICAgICAgICB0ZW1wbGF0ZSAgICAgIDogJy4uL3RlbXBsYXRlcy9sb2NhdGlvbnMtY2Fyb3VzZWwuaXRlbS5odG1sJywgLy8gdGVtcGxhdGVVcmwgaW4gY2FzZSB5b3UgZG9uJ3QgbmVlZCB0byBwYXNzIGEgZGlyZWN0aXZlIGJ1dCBqdXN0IGEgaHRtbCB2aWV3XG4gICAgICAgIGFsaWduICAgICAgICAgOiAnbGVmdCcsIC8vIGFsaWduZW1lbnQgb2YgdGhlIGNhcm91c2VsXG4gICAgICAgIHNlbGVjdEZpcnN0ICAgOiB0cnVlLFxuICAgICAgICBjZW50ZXJPblNlbGVjdDogZmFsc2UsIC8vIGNlbnRlciBjYXJvdXNlbCB3aGVuIGFuIGl0ZW0gaXMgc2VsZWN0ZWRcbiAgICB9O1xuXG4gICAgJHNjb3BlLm9uU2VsZWN0Q2Fyb3VzZWwgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBjYXQgPSAkc2NvcGUuZ2V0X2NhdGVnb3J5X3NsdWcoaXRlbS5jYXRhZ29yeWxldmVsMSk7XG4gICAgICAgICRsb2cubG9nKCdDYXJvdXNlbCAnK2NhdCsnIGl0ZW0gc2VsZWN0ZWQ6e25hbWV9JywgaXRlbSk7XG4gICAgICAgICRzY29wZS5jYXJvdXNlbHNbY2F0XS5pdGVtU2VsZWN0ZWQgPSBpdGVtO1xuICAgIH07XG5cbiAgICAkc2NvcGUucmFuZG9FeHBlbnNlV2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKzEpOyAgXG4gICAgfTtcbiAgICBcbiAgICAkc2NvcGUuZ2V0X2NhdGVnb3J5X3NsdWcgPSBmdW5jdGlvbiAoY2F0X25hbWUpIHtcbiAgICAgICAgcmV0dXJuIGNhdF9uYW1lLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uKGNhdCkgeyByZXR1cm4gY2F0LnRvTG93ZXJDYXNlKCkudHJpbSgpOyB9KS5qb2luKCctJyk7XG4gICAgfVxuXG4gICAgTG9jYXRpb25zU2VydmljZS5hbGwoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvY2F0aW9ucyA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdyb3VwIGxvY2F0aW9ucyBieSBjYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IHRyYXZlbFRpbWUgZm9yIGVhY2ggbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBjYXJvdXNlbE9wdGlvbnMgZm9yIGVhY2ggY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2NhdGlvbnNfZ3JvdXBzID0gXy5jaGFpbihkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ncm91cEJ5KFwiY2F0YWdvcnlsZXZlbDFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGxvY2F0aW9ucywgY2F0LCBhcnJheSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9ucy5tYXAoZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnNldFRyYXZlbFRpbWUoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2NhdGlvbnNfbG9hZGVkKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeV9zbHVnOiAkc2NvcGUuZ2V0X2NhdGVnb3J5X3NsdWcoY2F0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uczogbG9jYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGNhdGVnb3J5X29iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuY2Fyb3VzZWxzW2NhdGVnb3J5X29iai5jYXRlZ29yeV9zbHVnXSA9IGFuZ3VsYXIuZXh0ZW5kKHt9LCB7Y2Fyb3VzZWxJRDogJ2xvY2F0aW9ucy1jYXJvdXNlbC0nK2NhdGVnb3J5X29iai5jYXRlZ29yeV9zbHVnLCBpdGVtU2VsZWN0ZWQ6e319LCAkc2NvcGUuY2Fyb3VzZWxPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5X29iajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCdsb2NhdGlvbnNfbG9hZGVkJyxmdW5jdGlvbihuZXdfdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV3X3ZhbCA9PSBkYXRhLmxlbmd0aCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc29ydCBsb2NhdGlvbiBncm91cHMgYWxwYWhiZXRpY2FsbHkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvcnQgZ3JvdXAgbG9jYXRpb25zIGJ5IHRyYXZlbFRpbWUudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvY2F0aW9uc19ncm91cHNfc29ydGVkID0gXy5jaGFpbigkc2NvcGUubG9jYXRpb25zX2dyb3VwcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc29ydGVkX2xvY2F0aW9ucyA9ICRmaWx0ZXIoJ29yZGVyQnknKShncm91cC5sb2NhdGlvbnMsICd0cmF2ZWxUaW1lLnZhbHVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXIuZXh0ZW5kKHt9LGdyb3VwLCB7bG9jYXRpb25zOnNvcnRlZF9sb2NhdGlvbnN9ICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnRCeSgnY2F0ZWdvcnknKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpb25pY0xvYWRpbmcuaGlkZSgpOyAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgXHQgICAgICAgICAgICAgICAgfSk7XG5cblxuXG59O1xuXG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ0Jyb3dzZUN0cmwnLCBCcm93c2VDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIENvbm5lY3RDdHJsKCRsb2csICRyb290U2NvcGUsICRzY29wZSwgQXBwU2V0dGluZ3MpIHtcblxuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnQ29ubmVjdEN0cmwnKTtcblxuICB2YXIgdm0gPSB0aGlzO1xuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdDb25uZWN0Q3RybCcsIENvbm5lY3RDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIExvZ2luQ3RybCgkbG9nLCAkcm9vdFNjb3BlLCAkc2NvcGUsIEFwcFNldHRpbmdzKSB7XG5cbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0xvZ2luQ3RybCcpO1xuXG4gIHZhciB2bSA9IHRoaXM7XG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIExvZ2luQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBNYXBDdHJsKCRyb290U2NvcGUsICRzY29wZSwgJGxvZywgJGlvbmljTG9hZGluZywgQXBwU2V0dGluZ3MsIEdNYXAsIExvY2F0aW9uc1NlcnZpY2UsICRxKSB7XG5cbiAgICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZShcIk1hcEN0cmxcIik7XG5cbiBcdCAgLy8gVmlld01vZGVsXG4gIFx0dmFyIHZtID0gdGhpcztcbiAgICB2YXIgY3VycmVudENlbnRlciA9ICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uO1xuXG4gICAgdm0udGhpc19yYWRpdXMgPSA1MDAwO1xuICAgIHZtLmdtYXAgPSBuZXcgR01hcCh7em9vbToxMywgcmFkaXVzOnZtLnRoaXNfcmFkaXVzfSk7ICAgIFxuICAgIHZtLmdtYXAuaGVpZ2h0ID0gNjI1O1xuICAgIHZtLm1hcmtlcnMgPSBbXTsgICAgXG4gICAgLy8gdm0uZ21hcC5wbG90TG9jYXRpb25zKCk7XG4gICAgXG4gICAgdm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlID0gW107XG5cbiAgICB2bS5rbm9iID17XG4gICAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgICBvcHRpb25zOnsgZHluYW1pY09wdGlvbnM6IHRydWUgfSxcbiAgICAgICAgICAgIH07XG5cbiAgICBcbiAgICB2YXIgc2V0S25vYlZhbHVlID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAvLyBzZXQgdWkua25vYiBvcHRpb25zIGhlcmVcbiAgICAgIC8vIHRoaXMgdHJpY2tzIHRoZSBrbm9iIGludG8gdXBkYXRpbmcgdGhlIHZhbHVlIGNvcnJlY3RseVxuICAgICAgICAgIHZtLmtub2IgPXtcbiAgICAgICAgICAgICAgdmFsdWU6dmFsLFxuICAgICAgICAgICAgICBvcHRpb25zOntcbiAgICAgICAgICAgICAgICBzaXplOiAyMDAsXG4gICAgICAgICAgICAgICAgbWluOiAgMSxcbiAgICAgICAgICAgICAgICBtYXg6ICAxMDAwMCxcbiAgICAgICAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgICAgICAgIGJhckNvbG9yOiAnIzVCQzAxRScsXG4gICAgICAgICAgICAgICAgdHJhY2tDb2xvcjogJyMyMTIxMjEnLFxuICAgICAgICAgICAgICAgIHRyYWNrV2lkdGg6IDE1LFxuICAgICAgICAgICAgICAgIGJhcldpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICBzdWJUZXh0OiB7XG4gICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgdGV4dDogJ21ldGVyIHJhZGl1cydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgfTtcbiAgIFxuXG4gICAgdmFyIHNldE1hcmtlcnMgPSBmdW5jdGlvbihsb2NhdGlvbnMpIHtcbiAgICAgIGxvY2F0aW9ucy5tYXAoZnVuY3Rpb24obG9jYXRlKXtcbiAgICAgICAgICAgIHZhciBtYXJrZXIgPSB2bS5nbWFwLmRyb3BNYXJrZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiBwYXJzZUZsb2F0KGxvY2F0ZS5sYXQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogcGFyc2VGbG9hdChsb2NhdGUubG9uZylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogICAgIGxvY2F0ZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwOiAgICAgICB2bS5nbWFwLm1hcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICAgMC4xMjVcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdm0ubWFya2Vyc1tsb2NhdGUuX2lkXSA9IG1hcmtlcjtcbiAgICAgICAgICAgIHZhciBpbmZvV05EVyA9IHZtLmdtYXAuYnVpbGRJbmZvV2luZG93KGxvY2F0ZSwgbWFya2VyKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdm0ubWFya2VycztcbiAgICB9O1xuXG4gICAgXG4gICAgJGlvbmljTG9hZGluZy5zaG93KHtcbiAgICAgICAgdGVtcGxhdGU6IFwiRXhwbG9yaW5nIFlvdXIgQXJlYSAuLi5cIixcbiAgICAgICAgYmFja2Ryb3A6IHRydWVcbiAgICB9KTtcblxuICAgIC8vIGdldCBhbGwgbG9jYXRpb25zIGFyb3VuZCBzcGVjaWZpZWQgYXJlYVxuICAgICAgTG9jYXRpb25zU2VydmljZVxuICAgICAgICAuZ2V0KHtyYWRpdXM6IHZtLnRoaXNfcmFkaXVzLCBcbiAgICAgICAgICAgICAgbGF0OiAgICBjdXJyZW50Q2VudGVyLmxhdGl0dWRlLCBcbiAgICAgICAgICAgICAgbG5nOiAgICBjdXJyZW50Q2VudGVyLmxvbmdpdHVkZX0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGxvY2F0aW9ucykge1xuICAgICAgICAgICRxLmFsbChsb2NhdGlvbnMpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLy8gc29ydCBsb2NhdGlvbnMgYnkgZGlzdG5hY2UgXG4gICAgICAgICAgdm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlID0gXy5zb3J0QnkobG9jYXRpb25zLCAnZGlzdGFuY2Vmcm9tbG9jYXRpb24nKTtcbiAgICAgICAgICBzZXRNYXJrZXJzKHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZSk7XG5cbiAgICAgICAgICAvLyBzZXQgdGhlIGxvY2F0aW9ucyByYWRpdXMgYW5kIGtub2IgdmFsdWUgdG8gdGhlIGNsb3NlcyBsb2N0aW9uIHRvIHRlc3RcbiAgICAgICAgICB2bS50aGlzX3JhZGl1cyA9IF8uZmlyc3Qodm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlKS5kaXN0YW5jZWZyb21sb2NhdGlvbjtcbiAgICAgICAgICB2bS5sb2NhdGlvbnNSYWRpdXMgPSB2bS5nbWFwLnNldFJhZGl1c0NpcmNsZSh7cmFkaXVzOiB2bS50aGlzX3JhZGl1c30pO1xuICAgICAgICAgIHZtLmdtYXAubWFwLmZpdEJvdW5kcyh2bS5sb2NhdGlvbnNSYWRpdXMuZ2V0Qm91bmRzKCkpO1xuICAgICAgICAgIFxuICAgICAgICAgIHNldEtub2JWYWx1ZSh2bS50aGlzX3JhZGl1cyk7XG4gICAgICAgICAgJGlvbmljTG9hZGluZy5oaWRlKCk7XG5cblxuICAgICAgICB9KTsvL2VuZCAudGhlblxuXG5cblxuXG5cblxuXG4gICAgICAgICAkc2NvcGUuJHdhdGNoKFwiTWFwLmtub2IudmFsdWVcIiwgZnVuY3Rpb24obmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcIm5ldyBNYXAua25vYi52YWx1ZTogXCIrbmV3VmFsdWUpO1xuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJvbGQgTWFwLmtub2IudmFsdWU6IFwiK29sZFZhbHVlKTtcblxuICAgICAgICAgICAgaWYodm0ubG9jYXRpb25zUmFkaXVzKSB2bS5sb2NhdGlvbnNSYWRpdXMuc2V0UmFkaXVzKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih2bS5sb2NhdGlvbnNSYWRpdXMpe1xuXG4gICAgICAgICAgICAgICAvLyBHZXQgdGhlIGJvdW5kc1xuICAgICAgICAgICAgICB2YXIgY2lyY2xlQm91bmRzID0gdm0ubG9jYXRpb25zUmFkaXVzLmdldEJvdW5kcygpO1xuICAgICAgICAgICAgICB2YXIgbWFwQm91bmRzID0gdm0uZ21hcC5tYXAuZ2V0Qm91bmRzKCk7XG5cblxuICAgICAgICAgICAgICB2YXIgbmUgPSBjaXJjbGVCb3VuZHMuZ2V0Tm9ydGhFYXN0KCk7IC8vIExhdExuZyBvZiB0aGUgbm9ydGgtZWFzdCBjb3JuZXJcbiAgICAgICAgICAgICAgdmFyIHN3ID0gY2lyY2xlQm91bmRzLmdldFNvdXRoV2VzdCgpO1xuICAgICAgICAgICAgICB2YXIgbncgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG5lLmxhdCgpLCBzdy5sbmcoKSk7XG4gICAgICAgICAgICAgIHZhciBzZSA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoc3cubGF0KCksIG5lLmxuZygpKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHZhciBMYXRMbmdMaXN0ID0gbmV3IEFycmF5IChudywgc2UpO1xuXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZighbWFwQm91bmRzLmNvbnRhaW5zKG5lKSl7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIEx0TGdMZW4gPSBMYXRMbmdMaXN0Lmxlbmd0aDsgaSA8IEx0TGdMZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgLy8gIEFuZCBpbmNyZWFzZSB0aGUgYm91bmRzIHRvIHRha2UgdGhpcyBwb2ludFxuICAgICAgICAgICAgICAgICAgbWFwQm91bmRzLmV4dGVuZChMYXRMbmdMaXN0W2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdm0uZ21hcC5tYXAuZml0Qm91bmRzKG1hcEJvdW5kcyk7XG4gICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHZtLmdtYXAubWFwLmZpdEJvdW5kcyhjaXJjbGVCb3VuZHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgfS8vZW5kIGlmKHZtLmxvY2F0aW9uc1JhZGl1cylcbiAgICAgICAgICAgXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gc2hvdy9yZXZlYWwgbG9jYXRpb25zIGluc2lkZSByYWRpdXNcbiAgICAgICAgICAgIHZtLmxvY2F0aW9uc19ieV9kaXN0YW5jZS5tYXAoZnVuY3Rpb24obG9jYXRlKXtcbiAgICAgICAgICAgICAgICAgIGlmKCBsb2NhdGUuZGlzdGFuY2Vmcm9tbG9jYXRpb24gPCBuZXdWYWx1ZSApe1xuICAgICAgICAgICAgICAgICAgICB2bS5tYXJrZXJzW2xvY2F0ZS5faWRdLnNldE9wYWNpdHkoMSk7XG4gICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLm1hcmtlcnNbbG9jYXRlLl9pZF0uc2V0T3BhY2l0eSgwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOy8vdm0ubG9jYXRpb25zX2J5X2Rpc3RhbmNlLm1hcFxuXG5cbiAgICAgICAgfSk7Ly8vJHNjb3BlLiR3YXRjaCBcIk1hcC5rbm9iLnZhbHVlXCJcbiAgICAgIFxuICAgIFxuXG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuXG4gIFxuICBcblxuICAkcm9vdFNjb3BlLiRvbignbWFya2VyOmNsaWNrZWQnLCBmdW5jdGlvbihlLCBsb2NhbGUpIHtcbiAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgXG4gICAgICB2bS5nbWFwLmhlaWdodCA9IHZtLmdtYXAuaGVpZ2h0LzI7XG4gICAgICB2bS5nbWFwLm1hcC5wYW5Ubyh7bGF0OnBhcnNlRmxvYXQobG9jYWxlLmxhdCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzpwYXJzZUZsb2F0KGxvY2FsZS5sb25nKX0pO1xuICAgIH0pO1xuICAgIFxuICB9KTtcbn07Ly8vLyBNYXBDdHJsXG5cblxuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdNYXBDdHJsJywgTWFwQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBQbGF5bGlzdEN0cmwoJHNjb3BlKSB7XG4gIFxuXG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ1BsYXlsaXN0Q3RybCcsIFBsYXlsaXN0Q3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBQbGF5bGlzdHNDdHJsKCRzY29wZSkge1xuICBcbiAkc2NvcGUucGxheWxpc3RzID0gW1xuICAgIHsgdGl0bGU6ICdSZWdnYWUnLCBpZDogMSB9LFxuICAgIHsgdGl0bGU6ICdDaGlsbCcsIGlkOiAyIH0sXG4gICAgeyB0aXRsZTogJ0R1YnN0ZXAnLCBpZDogMyB9LFxuICAgIHsgdGl0bGU6ICdJbmRpZScsIGlkOiA0IH0sXG4gICAgeyB0aXRsZTogJ1JhcCcsIGlkOiA1IH0sXG4gICAgeyB0aXRsZTogJ0Nvd2JlbGwnLCBpZDogNiB9XG4gIF07XG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ1BsYXlsaXN0c0N0cmwnLCBQbGF5bGlzdHNDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5kaXJlY3RpdmVzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRpcmVjdGl2ZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBtQXBwTG9hZGluZygkbG9nLCAkYW5pbWF0ZSl7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCBcIm1BcHBMb2FkaW5nXCIgKTtcbiAgXG5cbiAgLy8gUnVucyBkdXJpbmcgY29tcGlsZVxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAgICAnQycsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJpYnV0ZXMsIGNvbnRyb2xsZXIsIHRyYW5zY2x1ZGVGbikge1xuICAgICAkYW5pbWF0ZS5sZWF2ZSggXG4gICAgIFx0ZWxlbWVudC5jaGlsZHJlbigpLmVxKCAxIClcbiAgICAgXHQpLnRoZW4oXG4gICAgICAgICAgICBmdW5jdGlvbiBjbGVhbnVwQWZ0ZXJBbmltYXRpb24oKSB7XG4gICAgICAgICAgICBcdCRsb2cubG9nKCdjbGVhbnVwQWZ0ZXJBbmltYXRpb24nKTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHJvb3QgZGlyZWN0aXZlIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAvLyBDbGVhciB0aGUgY2xvc2VkLW92ZXIgdmFyaWFibGUgcmVmZXJlbmNlcy5cbiAgICAgICAgICAgICAgICBzY29wZSA9IGVsZW1lbnQgPSBhdHRyaWJ1dGVzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgIH1cbiAgfVxuXG5cbn07XG5cblxuZGlyZWN0aXZlc01vZHVsZS5kaXJlY3RpdmUoJ21BcHBMb2FkaW5nJywgbUFwcExvYWRpbmcpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1vZGVsc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4qL1xuXG5tb2RlbHNNb2R1bGUuZmFjdG9yeSgnR01hcCcsIGZ1bmN0aW9uKCRsb2csICRyb290U2NvcGUsIExvY2F0aW9uc1NlcnZpY2UsIEFwcFNldHRpbmdzKXtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ0dNYXAnKTtcblxuICB2YXIgY3VycmVudENlbnRlciA9ICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uO1xuXG5cblxuICBmdW5jdGlvbiBHTWFwKG1hcFNldHRpbmdzKXtcbiAgICBcbiAgICB0aGlzLm1hcE9wdGlvbnMgPSB7XG4gICAgICBjZW50ZXI6ICAgIHtsYXQ6IGN1cnJlbnRDZW50ZXIubGF0aXR1ZGUsIFxuICAgICAgICAgICAgICAgICAgbG5nOiBjdXJyZW50Q2VudGVyLmxvbmdpdHVkZX0sXG4gICAgICB6b29tOiAgICAgIEFwcFNldHRpbmdzLkdNQVBfREVGQVVMVC5aT09NLFxuICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCxcbiAgICAgIHJhZGl1czogICAgQXBwU2V0dGluZ3MuR01BUF9ERUZBVUxULlJBRElVUyxcbiAgICB9O1xuXG4gICAgYW5ndWxhci5leHRlbmQodGhpcy5tYXBPcHRpb25zLCBtYXBTZXR0aW5ncyk7XG4gICAgXG4gICAgJGxvZy5kZWJ1Zygnem9vbSB7bWFwT3B0aW9ucy56b29tfScsIHRoaXMpO1xuICAgIFxuICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1hcFwiKSwgdGhpcy5tYXBPcHRpb25zKTtcbiAgICBcbiB9Oy8vR01hcCBjb25zdHJ1Y3RvclxuXG5cblxuXG4gIEdNYXAucHJvdG90eXBlID17XG5cbiAgICBkcm9wTWFya2VyOiBmdW5jdGlvbihtYXJrZXJEYXRhKSB7XG4gICAgICB2YXIgX21hcmtlclNldHRpbmdzID0ge307XG4gICAgICBhbmd1bGFyLmV4dGVuZChfbWFya2VyU2V0dGluZ3MsIHRoaXMubWFwT3B0aW9ucywgbWFya2VyRGF0YSk7XG4gICAgICAkbG9nLmRlYnVnKCdkcm9wTWFya2VyIGZvciBcInt0aXRsZX1cIlwiIGF0IFwie2NlbnRlci5sYXR9LCB7Y2VudGVyLmxuZ31cIicsIF9tYXJrZXJTZXR0aW5ncyk7XG4gICAgICBcbiAgICAgIHZhciBfbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogIF9tYXJrZXJTZXR0aW5ncy5jZW50ZXIsXG4gICAgICAgICAgICBtYXA6ICAgICAgIF9tYXJrZXJTZXR0aW5ncy5tYXAsXG4gICAgICAgICAgICB0aXRsZTogICAgIF9tYXJrZXJTZXR0aW5ncy50aXRsZSxcbiAgICAgICAgICAgIG9wYWNpdHk6ICAgX21hcmtlclNldHRpbmdzLm9wYWNpdHksXG4gICAgICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIF9tYXJrZXI7XG4gICAgfSxcblxuXG4gICAgYnVpbGRJbmZvV2luZG93OiBmdW5jdGlvbihsb2NhdGlvbkluZm8sIGxvY2F0aW9uTWFya2VyKSB7XG4gICAgICB2YXIgX21hcCA9IHRoaXM7XG5cbiAgICAgICRsb2cuZGVidWcoJ2J1aWxkSW5mb1dpbmRvdyBmb3Ige25hbWV9JywgbG9jYXRpb25JbmZvKTtcbiAgICAgIHZhciBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnPGgzIGlkPVwiZmlyc3RIZWFkaW5nXCIgY2xhc3M9XCJmaXJzdEhlYWRpbmdcIj4nK2xvY2F0aW9uSW5mby5uYW1lKyc8L2gzPicrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8cD4nK2xvY2F0aW9uSW5mby50cmF2ZWxUaW1lLnRleHQrJyB3YWxrPC9wPicrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c21hbGw+Jytsb2NhdGlvbkluZm8uZGlzdGFuY2Vmcm9tbG9jYXRpb24rJzwvc21hbGw+J1xuICAgICAgfSk7XG5cbiAgICAgIGxvY2F0aW9uTWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ21hcmtlcjpjbGlja2VkJywgbG9jYXRpb25JbmZvICk7XG4gICAgICAgIGluZm93aW5kb3cub3BlbiggX21hcC5tYXAgLGxvY2F0aW9uTWFya2VyKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gaW5mb3dpbmRvdztcbiAgICB9LFxuXG5cbiAgICBwbG90TG9jYXRpb25zOmZ1bmN0aW9uKHBsb3REYXRhKSB7XG4gICAgICB2YXIgX21hcCA9IHRoaXM7XG4gICAgICB2YXIgX3Bsb3RTZXR0aW5ncyA9e307IFxuXG4gICAgICBhbmd1bGFyLmV4dGVuZChfcGxvdFNldHRpbmdzLHRoaXMubWFwT3B0aW9ucywgcGxvdERhdGEpO1xuICAgICAgJGxvZy5kZWJ1ZygncGxvdExvY2F0aW9ucyB3aXRoaW4gYSBcIntyYWRpdXN9XCIgbWV0ZXIgcmFkaXVzIG9mIFwie2NlbnRlci5sYXR9LCB7Y2VudGVyLmxuZ31cIicsIF9wbG90U2V0dGluZ3MpO1xuICAgICAgXG4gICAgICAvLyBkcm9wIG1hcmtlciBvbiBjdXJyZW50IGxvY2F0aW9uXG4gICAgICBfbWFwLmRyb3BNYXJrZXIoe3RpdGxlOlwiWW91IEFyZSBIZXJlXCIsIG9wYWNpdHk6MX0pO1xuXG4gICAgICAvLyBnZXQgYWxsIGxvY2F0aW9ucyBhcm91bmQgc3BlY2lmaWVkIGFyZWFcbiAgICAgIExvY2F0aW9uc1NlcnZpY2VcbiAgICAgICAgLmdldCh7cmFkaXVzOiBfcGxvdFNldHRpbmdzLnJhZGl1cywgXG4gICAgICAgICAgICAgIGxhdDogICAgX3Bsb3RTZXR0aW5ncy5jZW50ZXIubGF0LCBcbiAgICAgICAgICAgICAgbG5nOiAgICBfcGxvdFNldHRpbmdzLmNlbnRlci5sbmcgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24obG9jYXRpb25zKSB7XG5cbiAgICAgICAgICAvLyBwcm9jZXNzIGxvY2F0aW9ucyBcbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2gobG9jYXRpb25zLCBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZygncGxvdExvY2F0aW9uIHtuYW1lfScsbG9jYXRpb24pO1xuICAgICAgICAgICAgLy9nZXQgdGhlIHRyYXZlbFRpbWUgZm9yRWFjaCBsb2NhdGlvblxuICAgICAgICAgICAgbG9jYXRpb24uc2V0VHJhdmVsVGltZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uUGluID0gX21hcC5kcm9wTWFya2VyKHtjZW50ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogcGFyc2VGbG9hdChsb2NhdGlvbi5sYXQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiBwYXJzZUZsb2F0KGxvY2F0aW9uLmxvbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGxvY2F0aW9uLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgX21hcC5idWlsZEluZm9XaW5kb3cobG9jYXRpb24sIGxvY2F0aW9uUGluKTtcbiAgICAgICAgICAgICAgX21hcC5wbG90Um91dGVUbyhsb2NhdGlvbik7XG5cbiAgICAgICAgICAgIH0pOy8vL2xvY2F0aW9uLnNldFRyYXZlbFRpbWVcblxuXG4gICAgICAgICAgfSk7Ly8vZW5kIGFuZ3VsYXIuZm9yRWFjaFxuXG4gICAgICAgIH0pOy8vZW5kIExvY2F0aW9uc1NlcnZpY2VcblxuICAgIH0sXG5cbiAgICBwbG90Um91dGVUbzogZnVuY3Rpb24obG9jYXRpb24pe1xuICAgICAgJGxvZy5kZWJ1ZygncGxvdFJvdXRlVG8ge25hbWV9Jyxsb2NhdGlvbik7XG5cbiAgICAgIHZhciBfbWFwID0gdGhpcztcbiAgICAgIHZhciBfcm91dGVTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgIGRyYWdnYWJsZTogICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgc3VwcHJlc3NJbmZvV2luZG93czogdHJ1ZSxcbiAgICAgICAgICAgIHN1cHByZXNzTWFya2VyczogICAgIHRydWUsXG4gICAgICAgICAgICBvcmlnaW46ICAgICAgICAgICAgICBfbWFwLm1hcE9wdGlvbnMuY2VudGVyXG4gICAgICB9O1xuXG4gICAgICBhbmd1bGFyLmV4dGVuZChfcm91dGVTZXR0aW5ncywgdGhpcy5tYXBPcHRpb25zKTtcblxuICAgICAgdmFyIGRpcmVjdGlvbnNEaXNwbGF5ID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcih7XG4gICAgICAgICAgICBtYXA6ICAgICAgICAgICAgICAgICBfbWFwLm1hcCxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogICAgICAgICAgIF9yb3V0ZVNldHRpbmdzLmRyYWdnYWJsZSxcbiAgICAgICAgICAgIHN1cHByZXNzSW5mb1dpbmRvd3M6IF9yb3V0ZVNldHRpbmdzLnN1cHByZXNzSW5mb1dpbmRvd3MsXG4gICAgICAgICAgICBzdXBwcmVzc01hcmtlcnM6ICAgICBfcm91dGVTZXR0aW5ncy5zdXBwcmVzc01hcmtlcnNcbiAgICAgICAgICB9KSxcbiAgICAgICAgICByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgZGVzdGluYXRpb246IHtsYXQ6IHBhcnNlRmxvYXQobG9jYXRpb24ubGF0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogcGFyc2VGbG9hdChsb2NhdGlvbi5sb25nKX0sXG4gICAgICAgICAgICBvcmlnaW46ICAgICAgX3JvdXRlU2V0dGluZ3Mub3JpZ2luLFxuICAgICAgICAgICAgdHJhdmVsTW9kZTogIGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuV0FMS0lORyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7Ly8gUGFzcyB0aGUgZGlyZWN0aW9ucyByZXF1ZXN0IHRvIHRoZSBkaXJlY3Rpb25zIHNlcnZpY2UuXG5cblxuICAgICAgICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKHJlcXVlc3QsIGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgIC8vIERpc3BsYXkgdGhlIHJvdXRlIG9uIHRoZSBtYXAuXG4gICAgICAgICAgICAgIGRpcmVjdGlvbnNEaXNwbGF5LnNldERpcmVjdGlvbnMocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pOy8vL2RpcmVjdGlvc1NlcnZpY2Uucm91dGVcblxuXG4gICAgfSxcblxuICAgIHNldFJhZGl1c0NpcmNsZTogZnVuY3Rpb24ocmFkaXVzQ2lyY2xlU2V0dGluZ3MpIHtcbiAgICAgIHZhciBfbWFwID0gdGhpcztcbiAgICAgIHZhciBfY2lyY2xlU2V0dGluZ3MgPXtcbiAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6ICAgJyMwMDg0YjQnLFxuICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAwLjgsXG4gICAgICAgICAgICAgIHN0cm9rZVdlaWdodDogIDEsXG4gICAgICAgICAgICAgIGZpbGxDb2xvcjogICAgICcjMDA4NGI0JyxcbiAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6ICAgMC4wNjI1LFxuICAgICAgfTtcblxuICAgICAgYW5ndWxhci5leHRlbmQoX2NpcmNsZVNldHRpbmdzICx0aGlzLm1hcE9wdGlvbnMsIHJhZGl1c0NpcmNsZVNldHRpbmdzKTtcblxuICAgICAgdmFyIGxvY2F0aW9uc0NpcmNsZSA9IG5ldyBnb29nbGUubWFwcy5DaXJjbGUoe1xuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAgIF9jaXJjbGVTZXR0aW5ncy5zdHJva2VDb2xvcixcbiAgICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiBfY2lyY2xlU2V0dGluZ3Muc3Ryb2tlT3BhY2l0eSxcbiAgICAgICAgICAgICAgICBzdHJva2VXZWlnaHQ6ICBfY2lyY2xlU2V0dGluZ3Muc3Ryb2tlV2VpZ2h0LFxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogICAgIF9jaXJjbGVTZXR0aW5ncy5maWxsQ29sb3IsXG4gICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6ICAgX2NpcmNsZVNldHRpbmdzLmZpbGxPcGFjaXR5LFxuICAgICAgICAgICAgICAgIG1hcDogICAgICAgICAgIF9tYXAubWFwLFxuICAgICAgICAgICAgICAgIGNlbnRlcjogICAgICAgIF9jaXJjbGVTZXR0aW5ncy5jZW50ZXIsXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAgICAgICAgX2NpcmNsZVNldHRpbmdzLnJhZGl1c1xuICAgICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbG9jYXRpb25zQ2lyY2xlO1xuICAgIH1cblxuICB9O1xuICAgIFxuXG5cbiAgcmV0dXJuIEdNYXA7XG5cbiAgXG59KTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbW9kZWxzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xubW9kZWxzTW9kdWxlLmZhY3RvcnkoJ0xvY2F0aW9uJywgZnVuY3Rpb24oJHJvb3RTY29wZSwgJGxvZywgJHEgKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdMb2NhdGlvbicpO1xuXG4gIGZ1bmN0aW9uIExvY2F0aW9uKExvY2F0aW9uRGF0YSl7XG4gICAgYW5ndWxhci5leHRlbmQodGhpcywgTG9jYXRpb25EYXRhKTtcbiAgICAkbG9nLmRlYnVnKCd7bmFtZX0nLCB0aGlzKTtcbiAgfVxuXG5cbiAgTG9jYXRpb24ucmVzcG9uc2VUcmFuc2Zvcm1lciA9IGZ1bmN0aW9uIChyZXNwb25zZURhdGEpIHtcbiAgICAkbG9nLmRlYnVnKCdyZXNvcG9uc2VUcmFuc2Zvcm1lciB7bGVuZ3RofScsIHJlc3BvbnNlRGF0YS5sb2NhdGlvbnMpO1xuICAgIFxuICAgIGlmKHJlc3BvbnNlRGF0YS5sb2NhdGlvbnMpe1xuICAgICAgXG4gICAgICB2YXIgcG9wdWxhdGVkX2xvY2F0aW9ucyA9IFtdO1xuXG4gICAgICByZXNwb25zZURhdGEubG9jYXRpb25zXG4gICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKGRhdGEpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlZF9sb2NhdGlvbnMucHVzaChsb2NhdGlvbi5zZXRUcmF2ZWxUaW1lKCkpO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcG9wdWxhdGVkX2xvY2F0aW9ucztcbiAgICB9XG5cbiAgICAgIHJldHVybiByZXNwb25zZURhdGEubWFwKExvY2F0aW9uLmJ1aWxkKTsgIFxuXG4gICAgXG4gIH1cblxuXG4gIExvY2F0aW9uLnByb3RvdHlwZS5zZXRUcmF2ZWxUaW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAkbG9nLmRlYnVnKCdzZXRUcmF2ZWxUaW1lIHtuYW1lfScsIHRoaXMpO1xuICAgICAgXG4gICAgICB2YXIgX2xvY2F0aW9uID0gdGhpcztcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgIHZhciBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpc3RhbmNlTWF0cml4U2VydmljZTtcbiAgICAgICBzZXJ2aWNlLmdldERpc3RhbmNlTWF0cml4KHtcbiAgICAgICAgIG9yaWdpbnM6ICAgICAgIFt7bGF0OiAkcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbi5sYXRpdHVkZSwgbG5nOiRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uLmxvbmdpdHVkZX1dLFxuICAgICAgICAgZGVzdGluYXRpb25zOiAgW3tsYXQ6IHBhcnNlRmxvYXQodGhpcy5sYXQpLCBsbmc6IHBhcnNlRmxvYXQodGhpcy5sb25nKX1dLFxuICAgICAgICAgdHJhdmVsTW9kZTogICAgZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5XQUxLSU5HLFxuICAgICAgICAgdW5pdFN5c3RlbTogICAgZ29vZ2xlLm1hcHMuVW5pdFN5c3RlbS5JTVBFUklBTCxcbiAgICAgICAgIGF2b2lkSGlnaHdheXM6IGZhbHNlLFxuICAgICAgICAgYXZvaWRUb2xsczogICAgZmFsc2VcbiAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzKSB7XG4gICAgICAgICBcdF9sb2NhdGlvbi50cmF2ZWxUaW1lID0gcmVzcG9uc2Uucm93c1swXS5lbGVtZW50c1swXS5kdXJhdGlvbjtcbiAgICAgICAgICBfbG9jYXRpb24uZGlzdGFuY2UgPSByZXNwb25zZS5yb3dzWzBdLmVsZW1lbnRzWzBdLmRpc3RhbmNlO1xuICAgICAgICAgXHRkZWZlcnJlZC5yZXNvbHZlKF9sb2NhdGlvbik7XG4gICAgICAgICAvLyAkbG9nLmRlYnVnKFwie25hbWV9IC0ge3RyYXZlbFRpbWV9XCIsIF9sb2NhdGlvbik7XG4gICAgICAgICAgXG4gICAgICAgfSk7XG5cbiAgICAgICBcbiAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcblxuICB9XG5cblxuICBMb2NhdGlvbi5idWlsZCA9IGZ1bmN0aW9uKGxEYXRhKSB7XG4gICAgJGxvZy5kZWJ1ZygnYnVpbGQge25hbWV9JywgbERhdGEpO1xuICAgIFxuICAgIHJldHVybiBuZXcgTG9jYXRpb24obERhdGEpO1xuICB9XG5cbiAgIFxuXG4gIFxuIFxuICByZXR1cm4gTG9jYXRpb247XG5cblxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYnVsayA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAubW9kZWxzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBPbkNvbmZpZygkc3RhdGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJHByb3ZpZGUpIHtcbiAgXG4gIC8vYWN0aXZhdGUgTG9nRGVjb3JhdG9yXG4gIHJlcXVpcmUoJy4vdXRpbHMvbG9nZ2luZy9Mb2dEZWNvcmF0b3IuanMnKSgkcHJvdmlkZSk7XG5cbiRzdGF0ZVByb3ZpZGVyXG5cbiAgLnN0YXRlKCdhcHAnLCB7XG4gICAgdXJsOiAnL2FwcCcsXG4gICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbWVudS5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnQXBwQ3RybCcsXG4gICAgcmVzb2x2ZTp7XG4gICAgICAgIGNvb3JkaW5hdGVzOmZ1bmN0aW9uKEN1cnJlbnRDb29yZHMsICR0aW1lb3V0KSB7XG4gICAgICAgICAgICByZXR1cm4gQ3VycmVudENvb3Jkcy5nZXQoKTsgIFxuICAgICAgICB9XG4gICAgfVxuICB9KVxuICAuc3RhdGUoJ2FwcC5jb25uZWN0Jywge1xuICAgIHVybDogJy9jb25uZWN0JyxcbiAgICB2aWV3czoge1xuICAgICAgJ21lbnVDb250ZW50Jzoge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9jb25uZWN0Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQ29ubmVjdEN0cmwgYXMgQ29ubmVjdCdcbiAgICAgIH1cbiAgICB9XG4gIH0gKVxuXG4gIC5zdGF0ZSgnYXBwLmxvZ2luJywge1xuICAgIHVybDogJy9sb2dpbicsXG4gICAgdmlld3M6IHtcbiAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbG9naW4uaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwgYXMgTGduJ1xuICAgICAgfVxuICAgIH1cbiAgfSApXG4gIFxuICAuc3RhdGUoJ2FwcC5icm93c2UnLCB7XG4gICAgdXJsOiAnL2Jyb3dzZScsXG4gICAgdmlld3M6IHtcbiAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYnJvd3NlLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQnJvd3NlQ3RybCdcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgXG4gIC5zdGF0ZSgnYXBwLm1hcCcsIHtcbiAgICAgIHVybDogJy9tYXAnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ21lbnVDb250ZW50Jzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL21hcC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnTWFwQ3RybCBhcyBNYXAnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBcblxuXG4gIC8vIGlmIG5vbmUgb2YgdGhlIGFib3ZlIHN0YXRlcyBhcmUgbWF0Y2hlZCwgdXNlIHRoaXMgYXMgdGhlIGZhbGxiYWNrXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9hcHAvbWFwJyk7XG4gIFxuICBcblxuXG59Ly8vLyBPbkNvbmZpZ1xuXG5cbm1vZHVsZS5leHBvcnRzID0gT25Db25maWc7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBPblJ1bigkaW9uaWNQbGF0Zm9ybSwgJGxvZywgJGFuaW1hdGUpIHtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ09uUnVuJyk7XG4gICBcbiAgJGlvbmljUGxhdGZvcm0ucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJGFuaW1hdGUuZW5hYmxlZCh0cnVlKTtcbiAgICBcbiAgICAvLyBIaWRlIHRoZSBhY2Nlc3NvcnkgYmFyIGJ5IGRlZmF1bHQgKHJlbW92ZSB0aGlzIHRvIHNob3cgdGhlIGFjY2Vzc29yeSBiYXIgYWJvdmUgdGhlIGtleWJvYXJkXG4gICAgLy8gZm9yIGZvcm0gaW5wdXRzKVxuICAgIGlmICh3aW5kb3cuY29yZG92YSAmJiB3aW5kb3cuY29yZG92YS5wbHVnaW5zLktleWJvYXJkKSB7XG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuaGlkZUtleWJvYXJkQWNjZXNzb3J5QmFyKHRydWUpO1xuICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmRpc2FibGVTY3JvbGwodHJ1ZSk7XG5cbiAgICB9XG4gICAgaWYgKHdpbmRvdy5TdGF0dXNCYXIpIHtcbiAgICAgIC8vIG9yZy5hcGFjaGUuY29yZG92YS5zdGF0dXNiYXIgcmVxdWlyZWRcbiAgICAgIFN0YXR1c0Jhci5zdHlsZURlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uUnVuOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNlcnZpY2VzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gQ3VycmVudENvb3JkcygkcSwgJGh0dHAsICRsb2csICBBcHBTZXR0aW5ncykge1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZShcIkN1cnJlbnRDb29yZHNTZXJ2aWNlXCIpO1xuICBcbiAgdmFyIHNlcnZpY2UgPSB7fTtcblxuICBzZXJ2aWNlLmdldCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTsgICAgXG5cbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKHBvcykge1xuICAgICAgICBcbiAgICAgICRsb2cuZGVidWcoJ2xhdDoge2Nvb3Jkcy5sYXRpdHVkZX0nLHBvcyk7XG4gICAgICAkbG9nLmRlYnVnKCdsb25nOiB7Y29vcmRzLmxvbmdpdHVkZX0nLHBvcyk7XG5cbiAgICAgIGRlZmVycmVkLnJlc29sdmUocG9zLmNvb3Jkcyk7XG4gICAgICAgIFxuICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAkbG9nLndhcm4oJ1VuYWJsZSB0byBnZXQgbG9jYXRpb246ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyLCBzdGF0dXMpO1xuICAgfSk7XG5cblxuICAgIFxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ0N1cnJlbnRDb29yZHMnLCBDdXJyZW50Q29vcmRzKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIExvY2F0aW9uc1NlcnZpY2UoJGxvZywgWW9jYWwsIExvY2F0aW9uKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKFwiTG9jYXRpb25zU2VydmljZVNlcnZpY2VcIik7XG5cbiAgdmFyIHNlcnZpY2UgPSB7fTtcblxuICBzZXJ2aWNlLmdldCA9IGZ1bmN0aW9uKCBnZXREYXRhICkge1xuXG4gICAgJGxvZy5kZWJ1ZygnR0VUIGxvY2F0aW9uIGluIGEge3JhZGl1c30gIG9mIHtsYXR9LCB7bG5nfScsIGdldERhdGEpO1xuXG4gICAgcmV0dXJuIFlvY2FsLmdldChnZXREYXRhKVxuICAgICAgICAgICAgICAgIC50aGVuKExvY2F0aW9uLnJlc3BvbnNlVHJhbnNmb3JtZXIpO1xuXG4gIH07XG5cbiAgc2VydmljZS5hbGwgPSBmdW5jdGlvbiggZ2V0RGF0YSApIHtcblxuICAgICRsb2cuZGVidWcoJ0FMTCcpO1xuXG4gICAgcmV0dXJuIFlvY2FsLmFsbCgpLnRoZW4oTG9jYXRpb24ucmVzcG9uc2VUcmFuc2Zvcm1lcik7XG5cbiAgfTtcblxuICByZXR1cm4gc2VydmljZTtcblxufVxuXG5zZXJ2aWNlc01vZHVsZS5zZXJ2aWNlKCdMb2NhdGlvbnNTZXJ2aWNlJywgTG9jYXRpb25zU2VydmljZSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2VydmljZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBZb2NhbCgkcSwgJGh0dHAsIEFwcFNldHRpbmdzLCAkbG9nKSB7XG5cbiAgdmFyIHNlcnZpY2UgPSB7fTtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoXCJZb2NhbFNlcnZpY2VcIik7XG5cbiAgc2VydmljZS5nZXQgPSBmdW5jdGlvbiggZ2V0RGF0YSApIHtcbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgLy8gL2xpc3RCeURpc3RhbmNlQ2F0L0Zvb2QvODAwMC8zOS45Mzc4OTMvLTc1LjE2ODkzNDdcbiAgICRodHRwLmdldChBcHBTZXR0aW5ncy55b2NhbEFQSS5iYXNlKycvbGlzdEJ5RGlzdGFuY2VDYXQvRm9vZC8nK2dldERhdGEucmFkaXVzKycvJytnZXREYXRhLmxhdCsnLycrZ2V0RGF0YS5sbmcpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKCdmb3VuZCB7bGVuZ3RofSBzcG90cyB3aXRoaW4gJytnZXREYXRhLnJhZGl1cysnIG1ldGVycyBvZiAnK2dldERhdGEubGF0KycsJytnZXREYXRhLmxuZywgZGF0YS5sb2NhdGlvbnMpO1xuICAgICAgICBkYXRhLnJhZGl1cyA9IGdldERhdGEucmFkaXVzO1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgIH0pLmVycm9yKGZ1bmN0aW9uKGVyciwgc3RhdHVzKSB7XG4gICAgICAgICRsb2cud2FybignVW5hYmxlIHRvIGdldCBsb2NhdGlvbjogJyArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVyciwgc3RhdHVzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIHNlcnZpY2UuYWxsID0gZnVuY3Rpb24oZ2V0RGF0YSl7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgIC8vIC9saXN0QnlEaXN0YW5jZUNhdC9Gb29kLzgwMDAvMzkuOTM3ODkzLy03NS4xNjg5MzQ3XG4gICAkaHR0cC5nZXQoQXBwU2V0dGluZ3MueW9jYWxBUEkuYmFzZSsnL2xpc3QnKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZygnYWxsOiBmb3VuZCB7bGVuZ3RofSB0b3RhbCBzcG90cycsIGRhdGEpO1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgIH0pLmVycm9yKGZ1bmN0aW9uKGVyciwgc3RhdHVzKSB7XG4gICAgICAgICRsb2cud2FybignVW5hYmxlIHRvIGdldCBsb2NhdGlvbjogJyArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVyciwgc3RhdHVzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuXG4gIH1cblxuICByZXR1cm4gc2VydmljZTtcblxufVxuXG5zZXJ2aWNlc01vZHVsZS5zZXJ2aWNlKCdZb2NhbCcsIFlvY2FsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5zZXJ2aWNlcycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEV4YW1wbGVTZXJ2aWNlKCRxLCAkaHR0cCkge1xuXG4gIHZhciBzZXJ2aWNlID0ge307XG5cbiAgc2VydmljZS5nZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgJGh0dHAuZ2V0KCdhcGlQYXRoJykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVyciwgc3RhdHVzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ0V4YW1wbGVTZXJ2aWNlJywgRXhhbXBsZVNlcnZpY2UpOyIsIi8qKlxuICogQGF1dGhvciAgICAgVGhvbWFzIEJ1cmxlc29uXG4gKiBAYXV0aG9yICAgICBTdGFja092ZXJmbG93IC0gSGFydG8sIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjMxNTQwOC9ob3ctZG8taS1mb3JtYXQtYS10aW1lc3RhbXAtaW4tamF2YXNjcmlwdC10by1kaXNwbGF5LWl0LWluLWdyYXBocy11dGMtaXMtZmluZVxuICogQGRlc2NyaXB0aW9uXG4gKiAgXG4gKiBEYXRlVGltZSB1dGlsaXR5IGNsYXNzIHRoYXQgc3BpdHMgb3V0IFVUQyB0aW1lc3RhbXAgc3RyaW5ncyB1c3VhbGx5IHVzZWQgaW4gYSByZXBvcnRpbmcsIHByaW50LWNhcGFibGUgcHJvY2Vzcy5cbiovXG4gXG5cbiAndXNlIHN0cmljdCc7XG5cblxudmFyIGJ1aWxkVGltZVN0cmluZyA9IGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCBcIiVoOiVtOiVzOiV6XCI7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBhZCh2YWx1ZSwgaXNNaWxsaVNlY29uZHMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIChpc01pbGxpU2Vjb25kcykgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpc01pbGxpU2Vjb25kcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihpc01pbGxpU2Vjb25kcylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlIDwgMTApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCIwMFwiICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih2YWx1ZSA8IDEwMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIjBcIiArIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybih2YWx1ZS50b1N0cmluZygpLmxlbmd0aCA8IDIpID8gXCIwXCIgKyB2YWx1ZSA6IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoLyUoW2EtekEtWl0pL2csIGZ1bmN0aW9uIChfLCBmbXRDb2RlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN3aXRjaChmbXRDb2RlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiWVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldERhdGUoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldEhvdXJzKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNaW51dGVzKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgZm9ybWF0IGNvZGU6IFwiICsgZm10Q29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cblxuIC8vIFB1Ymxpc2ggQVBJIGZvciBEYXRlVGltZSB1dGlsc1xuICAgICAgICAvLyByZXR1cm4ge1xuICAgICAgICAvLyAgICAgZm9ybWF0dGVkTm93OiBmdW5jdGlvbiAoKVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBidWlsZFRpbWVTdHJpbmcobmV3IERhdGUoKSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIFxuIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZvcm1hdHRlZE5vdzogZnVuY3Rpb24gKCkgeyByZXR1cm4gYnVpbGRUaW1lU3RyaW5nKG5ldyBEYXRlKCkpOyB9XG4gfTtcblxuXG5cbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogTG9nRGVjb3JhdG9yXG4gKiAgQHNvdXJjZTogaHR0cDovL3NvbHV0aW9ub3B0aW1pc3QuY29tLzIwMTMvMTAvMDcvZW5oYW5jZS1hbmd1bGFyanMtbG9nZ2luZy11c2luZy1kZWNvcmF0b3JzL1xuICovXG5cbiB2YXIgTG9nRGVjb3JhdG9yID0gZnVuY3Rpb24oICRwcm92aWRlICApe1xuXG5cbiAgICAgICAgICAgICAgLy8gUmVnaXN0ZXIgb3VyICRsb2cgZGVjb3JhdG9yIHdpdGggQW5ndWxhckpTICRwcm92aWRlclxuICAgICAgICAgICAgICAkcHJvdmlkZS5kZWNvcmF0b3IoICckbG9nJywgWyBcIiRkZWxlZ2F0ZVwiLCBmdW5jdGlvbiggJGRlbGVnYXRlIClcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgLy8gTk9URTogdGhlIExvZ0VuY2hhbmNlciBtb2R1bGUgcmV0dXJucyBhIEZVTkNUSU9OIHRoYXQgd2UgbmFtZWQgYGVuY2hhbmNlTG9nZ2VyRm5gXG4gICAgICAgICAgICAgICAvLyAgICAgICBBbGwgdGhlIGRldGFpbHMgb2YgaG93IHRoZSBgZW5jaGFuY2VtZW50YCB3b3JrcyBpcyBlbmNhcHN1bGF0ZWQgaW4gTG9nRW5oYW5jZXIhXG5cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmUoJy4vTG9nRW5oYW5jZXIuanMnKSggJGRlbGVnYXRlICk7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAkZGVsZWdhdGU7XG4gICAgICAgICAgICAgIH1dKTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSAgTG9nRGVjb3JhdG9yOyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogTG9nRW5oYW5jZXJcbiAqIFRoaXMgYWRkcyB0aW1lc3RhbXBzIGFuZCBzdXBwbGFudCBmdW5jdGlvbmFsaXR5IHRvIEFuZ3VsYXIgJGxvZyBzZXJ2aWNlXG4gKiBAc291cmNlOiBodHRwOi8vc29sdXRpb25vcHRpbWlzdC5jb20vMjAxMy8xMC8wNy9lbmhhbmNlLWFuZ3VsYXJqcy1sb2dnaW5nLXVzaW5nLWRlY29yYXRvcnMvXG4gKiBAYXBpOiBwdWJsaWNcbiAqIEByZXR1cm5zOiBPYmplY3QgLSBleHRlbmRlZCAkbG9nIHNlcnZpY2VcbiAqL1xuXG52YXIgZW5jaGFuY2VMb2dnZXIgPSBmdW5jdGlvbiggJGxvZyApe1xuICB2YXIgc3VwcGxhbnQgPSByZXF1aXJlKCcuLi9zdXBwbGFudC5qcycpO1xuICB2YXIgRGF0ZVRpbWUgPSByZXF1aXJlKCcuLi9EYXRlVGltZS5qcycpO1xuXG5cbiAgLyoqXG4gICAqIENhcHR1cmUgdGhlIG9yaWdpbmFsICRsb2cgZnVuY3Rpb25zOyBmb3IgdXNlIGluIGVuaGFuY2VkTG9nRm4oKVxuICAgKiBAYXBpICBwcml2YXRlIFxuICAgKi9cbiAgXG4gIHZhciBfJGxvZyA9IChmdW5jdGlvbiggJGxvZyApe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9nICAgOiAkbG9nLmxvZyxcbiAgICAgICAgaW5mbyAgOiAkbG9nLmluZm8sXG4gICAgICAgIHdhcm4gIDogJGxvZy53YXJuLFxuICAgICAgICBkZWJ1ZyA6ICRsb2cuZGVidWcsXG4gICAgICAgIGVycm9yIDogJGxvZy5lcnJvclxuICAgICAgfTtcbiAgfSkoICRsb2cgKTsgXG5cblxuXG4gICAvKipcbiAgICAqIFBhcnRpYWwgYXBwbGljYXRpb24gdG8gcHJlLWNhcHR1cmUgYSBsb2dnZXIgZnVuY3Rpb25cbiAgICAqIEBhcGk6ICBwcml2YXRlIFxuICAgICogQHJldHVybnM6IEZ1bmN0aW9uIFxuICAgICovXG4gICAgdmFyIHByZXBhcmVMb2dGbiA9IGZ1bmN0aW9uKCBsb2dGbiwgY2xhc3NOYW1lICl7XG5cbiAgICAgIC8qKlxuICAgICAgICogSW52b2tlIHRoZSBzcGVjaWZpZWQgYGxvZ0ZuPGAgd2l0aCB0aGUgc3VwcGxhbnQgZnVuY3Rpb25hbGl0eS4uLlxuICAgICAgICogQGFwaTogcHJpdmF0ZSBcbiAgICAgICAqIEBleGFtcGxlOiBcbiAgICAgICAqICAgdmFyIHVzZXIgPSB7IHdobzpcIlRob21hcyBCdXJsZXNvblwiXCIsIGVtYWlsPVwiVGhvbWFzQnVybGVzb25AZ21haWwuY29tXCJcIiB9O1xuICAgICAgICogICAkbG9nLndhcm4oIFwiQSB3YXJuaW5nIG1lc3NhZ2UgZm9yIGB7d2hvfWAgd2lsbCBiZSBzZW50IHRvIGB7ZW1haWx9YCAhXCIsIHVzZXIgKTsgICBcbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNob3VsZCBvdXRwdXQ6IEEgd2FybmluZyBtZXNzYWdlIGZvciBgVGhvbWFzIEJ1cmxlc29uYCB3aWxsIGJlIHNlbnQgdG8gYFRob21hc0J1cmxlc29uQGdtYWlsLmNvbWAgIVxuICAgICAgICovXG4gICAgICB2YXIgZW5oYW5jZWRMb2dGbiA9IGZ1bmN0aW9uKCApe1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgICAgICBub3cgID0gRGF0ZVRpbWUuZm9ybWF0dGVkTm93KCk7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJztcbiAgICAgICAgICAgIC8vIHByZXBlbmQgYSB0aW1lc3RhbXAgdG8gdGhlIG9yaWdpbmFsIG91dHB1dCBtZXNzYWdlXG4gICAgICAgICAgICBhcmdzWzBdID0gc3VwcGxhbnQoXCJ7MH0gLSB7MX17Mn1cIiwgWyBub3csIGNsYXNzTmFtZSwgYXJnc1swXSBdKTtcblxuICAgICAgICBsb2dGbi5jYWxsKCBudWxsLCAgc3VwcGxhbnQuYXBwbHkoIG51bGwsIGFyZ3MgKSApO1xuICAgICAgfTtcblxuICAgICAgLy8gU3BlY2lhbC4uLiBvbmx5IG5lZWRlZCB0byBzdXBwb3J0IGFuZ3VsYXItbW9ja3MgZXhwZWN0YXRpb25zXG4gICAgICBlbmhhbmNlZExvZ0ZuLmxvZ3MgPSBbIF07XG4gXG4gICAgICByZXR1cm4gZW5oYW5jZWRMb2dGbjtcbiAgICAgIFxuICAgIH07XG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBTdXBwb3J0IHRvIGdlbmVyYXRlIGNsYXNzLXNwZWNpZmljIGxvZ2dlciBpbnN0YW5jZSB3aXRoIGNsYXNzbmFtZSBvbmx5XG4gICAgICpcbiAgICAgKiBAcGFyYW06IG5hbWVcbiAgICAgKiBAcmV0dXJuczogT2JqZWN0IHdyYXBwZXIgZmFjYWRlIHRvICRsb2dcbiAgICAgKi9cbiAgICB2YXIgZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiggY2xhc3NOYW1lICl7XG4gICAgICBjbGFzc05hbWUgPSAoIGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICkgPyBjbGFzc05hbWUgKyBcIjo6XCIgOiBcIlwiO1xuXG4gICAgICByZXR1cm57XG4gICAgICAgICBsb2cgICA6IHByZXBhcmVMb2dGbiggXyRsb2cubG9nLCAgICBjbGFzc05hbWUgKSxcbiAgICAgICAgIGluZm8gIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5pbmZvLCAgIGNsYXNzTmFtZSApLFxuICAgICAgICAgd2FybiAgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLndhcm4sICAgY2xhc3NOYW1lICksXG4gICAgICAgICBkZWJ1ZyA6IHByZXBhcmVMb2dGbiggXyRsb2cuZGVidWcsICBjbGFzc05hbWUgKSxcbiAgICAgICAgIC8vIGVycm9yIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5lcnJvciwgIGNsYXNzTmFtZSApXG4gICAgICB9O1xuXG4gICAgfTtcblxuXG5cbiAgICAvLyB3cmFwIGVhY2ggbG9nIG1ldGhvZCBcbiAgICAkbG9nLmxvZyAgID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmxvZyApO1xuICAgICRsb2cuaW5mbyAgPSBwcmVwYXJlTG9nRm4oICRsb2cuaW5mbyApO1xuICAgICRsb2cud2FybiAgPSBwcmVwYXJlTG9nRm4oICRsb2cud2FybiApO1xuICAgICRsb2cuZGVidWcgPSBwcmVwYXJlTG9nRm4oICRsb2cuZGVidWcgKTtcbiAgICAvLyAkbG9nLmVycm9yID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmVycm9yICk7XG5cbiAgICAvLyBBZGQgc3BlY2lhbCBtZXRob2QgdG8gQW5ndWxhckpTICRsb2dcbiAgICAkbG9nLmdldEluc3RhbmNlID0gZ2V0SW5zdGFuY2U7XG4gXG5cbiAgICByZXR1cm4gJGxvZztcbn07Ly9lbmNoYW5jZUxvZ2dlclxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSAgZW5jaGFuY2VMb2dnZXI7IiwiLyoqXG4gKiBAYXV0aG9yICAgICAgVGhvbWFzIEJ1cmxlc29uXG4gKiBAZGF0ZSAgICAgICAgTm92ZW1iZXIsIDIwMTNcbiAqIEBzb3VyY2U6ICAgICBodHRwczovL2dpdGh1Yi5jb20vVGhvbWFzQnVybGVzb24vYW5ndWxhcmpzLWxvZ0RlY29yYXRvci9ibG9iL21hc3Rlci9zcmMvbWluZHNwYWNlL3V0aWxzL3N1cHBsYW50LmpzXG4gICovXG4gXG5cbiAndXNlIHN0cmljdCc7XG5cbnZhciBzdXBwbGFudCA9ICBmdW5jdGlvbiggdGVtcGxhdGUsIHZhbHVlcywgcGF0dGVybiApIHtcbiAgICAgICAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuIHx8IC9cXHsoW15cXHtcXH1dKilcXH0vZztcblxuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UocGF0dGVybiwgZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHZhciBwID0gYi5zcGxpdCgnLicpLFxuICAgICAgICAgICAgICAgICAgICByID0gdmFsdWVzO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyBpbiBwKSB7IHIgPSByW3Bbc11dOyAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAgICAgICAgIHIgPSBhO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAodHlwZW9mIHIgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiByID09PSAnbnVtYmVyJykgPyByIDogYTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG5cbi8vIHN1cHBsYW50KCkgbWV0aG9kIGZyb20gQ3JvY2tmb3JkcyBgUmVtZWRpYWwgSmF2YXNjcmlwdGBcbkZ1bmN0aW9uLnByb3RvdHlwZS5tZXRob2QgPSBmdW5jdGlvbiAobmFtZSwgZnVuYykge1xuICAgIHRoaXMucHJvdG90eXBlW25hbWVdID0gZnVuYztcbiAgICByZXR1cm4gdGhpcztcbn07XG5cblN0cmluZy5tZXRob2QoXCJzdXBwbGFudFwiLCBmdW5jdGlvbiggdmFsdWVzLCBwYXR0ZXJuICkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICByZXR1cm4gc3VwcGxhbnQoc2VsZiwgdmFsdWVzLCBwYXR0ZXJuKTtcbn0pO1xuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9ICBTdHJpbmcuc3VwcGxhbnQgPSBzdXBwbGFudDsiXX0=
