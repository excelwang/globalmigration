/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
;!function(){function n(n){return n&&(n.ownerDocument||n.document||n).documentElement}function t(n){return n&&(n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView)}function e(n,t){return t>n?-1:n>t?1:n>=t?0:NaN}function r(n){return null===n?NaN:+n}function u(n){return!isNaN(n)}function i(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function a(n){return n.length}function o(n){for(var t=1;n*t%1;)t*=10;return t}function c(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function l(){this._=Object.create(null)}function s(n){return(n+="")===pa||n[0]===va?va+n:n}function f(n){return(n+="")[0]===va?n.slice(1):n}function h(n){return s(n)in this._}function g(n){return(n=s(n))in this._&&delete this._[n]}function p(){var n=[];for(var t in this._)n.push(f(t));return n}function v(){var n=0;for(var t in this._)++n;return n}function d(){for(var n in this._)return!1;return!0}function m(){this._=Object.create(null)}function y(n){return n}function M(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function x(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=da.length;r>e;++e){var u=da[e]+t;if(u in n)return u}}function b(){}function _(){}function w(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new l;return t.on=function(t,u){var i,a=r.get(t);return arguments.length<2?a&&a.on:(a&&(a.on=null,e=e.slice(0,i=e.indexOf(a)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function S(){ta.event.preventDefault()}function k(){for(var n,t=ta.event;n=t.sourceEvent;)t=n;return t}function N(n){for(var t=new _,e=0,r=arguments.length;++e<r;)t[arguments[e]]=w(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=ta.event;u.target=n,ta.event=u,t[u.type].apply(e,r)}finally{ta.event=i}}},t}function E(n){return ya(n,_a),n}function A(n){return"function"==typeof n?n:function(){return Ma(n,this)}}function C(n){return"function"==typeof n?n:function(){return xa(n,this)}}function z(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ta.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?o:a:n.local?i:u}function L(n){return n.trim().replace(/\s+/g," ")}function q(n){return new RegExp("(?:^|\\s+)"+ta.requote(n)+"(?:\\s+|$)","g")}function T(n){return(n+"").trim().split(/^|\s+/)}function R(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=T(n).map(D);var u=n.length;return"function"==typeof t?r:e}function D(n){var t=q(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",L(u+" "+n))):e.setAttribute("class",L(u.replace(t," ")))}}function P(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function U(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function j(n){function t(){var t=this.ownerDocument,e=this.namespaceURI;return e?t.createElementNS(e,n):t.createElement(n)}function e(){return this.ownerDocument.createElementNS(n.space,n.local)}return"function"==typeof n?n:(n=ta.ns.qualify(n)).local?e:t}function F(){var n=this.parentNode;n&&n.removeChild(this)}function H(n){return{__data__:n}}function O(n){return function(){return ba(this,n)}}function I(n){return arguments.length||(n=e),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function Y(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],a=0,o=i.length;o>a;a++)(u=i[a])&&t(u,a,e);return n}function Z(n){return ya(n,Sa),n}function V(n){var t,e;return function(r,u,i){var a,o=n[i].update,c=o.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(a=o[t])&&++t<c;);return a}}function X(n,t,e){function r(){var t=this[a];t&&(this.removeEventListener(n,t,t.$),delete this[a])}function u(){var u=c(t,ra(arguments));r.call(this),this.addEventListener(n,this[a]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+ta.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var a="__on"+n,o=n.indexOf("."),c=$;o>0&&(n=n.slice(0,o));var l=ka.get(n);return l&&(n=l,c=B),o?t?u:r:t?b:i}function $(n,t){return function(e){var r=ta.event;ta.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ta.event=r}}}function B(n,t){var e=$(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function W(e){var r=".dragsuppress-"+ ++Ea,u="click"+r,i=ta.select(t(e)).on("touchmove"+r,S).on("dragstart"+r,S).on("selectstart"+r,S);if(null==Na&&(Na="onselectstart"in e?!1:x(e.style,"userSelect")),Na){var a=n(e).style,o=a[Na];a[Na]="none"}return function(n){if(i.on(r,null),Na&&(a[Na]=o),n){var t=function(){i.on(u,null)};i.on(u,function(){S(),t()},!0),setTimeout(t,0)}}}function J(n,e){e.changedTouches&&(e=e.changedTouches[0]);var r=n.ownerSVGElement||n;if(r.createSVGPoint){var u=r.createSVGPoint();if(0>Aa){var i=t(n);if(i.scrollX||i.scrollY){r=ta.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var a=r[0][0].getScreenCTM();Aa=!(a.f||a.e),r.remove()}}return Aa?(u.x=e.pageX,u.y=e.pageY):(u.x=e.clientX,u.y=e.clientY),u=u.matrixTransform(n.getScreenCTM().inverse()),[u.x,u.y]}var o=n.getBoundingClientRect();return[e.clientX-o.left-n.clientLeft,e.clientY-o.top-n.clientTop]}function G(){return ta.event.changedTouches[0].identifier}function K(n){return n>0?1:0>n?-1:0}function Q(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function nn(n){return n>1?0:-1>n?La:Math.acos(n)}function tn(n){return n>1?Ra:-1>n?-Ra:Math.asin(n)}function en(n){return((n=Math.exp(n))-1/n)/2}function rn(n){return((n=Math.exp(n))+1/n)/2}function un(n){return((n=Math.exp(2*n))-1)/(n+1)}function an(n){return(n=Math.sin(n/2))*n}function on(){}function cn(n,t,e){return this instanceof cn?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof cn?new cn(n.h,n.s,n.l):_n(""+n,wn,cn):new cn(n,t,e)}function ln(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(a-i)*n/60:180>n?a:240>n?i+(a-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,a;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,a=.5>=e?e*(1+t):e+t-e*t,i=2*e-a,new yn(u(n+120),u(n),u(n-120))}function sn(n,t,e){return this instanceof sn?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof sn?new sn(n.h,n.c,n.l):n instanceof hn?pn(n.l,n.a,n.b):pn((n=Sn((n=ta.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new sn(n,t,e)}function fn(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new hn(e,Math.cos(n*=Da)*t,Math.sin(n)*t)}function hn(n,t,e){return this instanceof hn?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof hn?new hn(n.l,n.a,n.b):n instanceof sn?fn(n.h,n.c,n.l):Sn((n=yn(n)).r,n.g,n.b):new hn(n,t,e)}function gn(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=vn(u)*Xa,r=vn(r)*$a,i=vn(i)*Ba,new yn(mn(3.2404542*u-1.5371385*r-.4985314*i),mn(-.969266*u+1.8760108*r+.041556*i),mn(.0556434*u-.2040259*r+1.0572252*i))}function pn(n,t,e){return n>0?new sn(Math.atan2(e,t)*Pa,Math.sqrt(t*t+e*e),n):new sn(NaN,NaN,n)}function vn(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function dn(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function mn(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function yn(n,t,e){return this instanceof yn?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof yn?new yn(n.r,n.g,n.b):_n(""+n,yn,ln):new yn(n,t,e)}function Mn(n){return new yn(n>>16,n>>8&255,255&n)}function xn(n){return Mn(n)+""}function bn(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function _n(n,t,e){var r,u,i,a=0,o=0,c=0;if(r=/([a-z]+)\((.*)\)/.exec(n=n.toLowerCase()))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(Nn(u[0]),Nn(u[1]),Nn(u[2]))}return(i=Ga.get(n))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.slice(1),16))||(4===n.length?(a=(3840&i)>>4,a=a>>4|a,o=240&i,o=o>>4|o,c=15&i,c=c<<4|c):7===n.length&&(a=(16711680&i)>>16,o=(65280&i)>>8,c=255&i)),t(a,o,c))}function wn(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),a=Math.max(n,t,e),o=a-i,c=(a+i)/2;return o?(u=.5>c?o/(a+i):o/(2-a-i),r=n==a?(t-e)/o+(e>t?6:0):t==a?(e-n)/o+2:(n-t)/o+4,r*=60):(r=NaN,u=c>0&&1>c?0:r),new cn(r,u,c)}function Sn(n,t,e){n=kn(n),t=kn(t),e=kn(e);var r=dn((.4124564*n+.3575761*t+.1804375*e)/Xa),u=dn((.2126729*n+.7151522*t+.072175*e)/$a),i=dn((.0193339*n+.119192*t+.9503041*e)/Ba);return hn(116*u-16,500*(r-u),200*(u-i))}function kn(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function Nn(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function En(n){return"function"==typeof n?n:function(){return n}}function An(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Cn(t,e,n,r)}}function Cn(n,t,e,r){function u(){var n,t=c.status;if(!t&&Ln(c)||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return void a.error.call(i,r)}a.load.call(i,n)}else a.error.call(i,c)}var i={},a=ta.dispatch("beforesend","progress","load","error"),o={},c=new XMLHttpRequest,l=null;return!this.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=ta.event;ta.event=n;try{a.progress.call(i,c)}finally{ta.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?o[n]:(null==t?delete o[n]:o[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(l=n,i):l},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(ra(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in o||(o.accept=t+",*/*"),c.setRequestHeader)for(var s in o)c.setRequestHeader(s,o[s]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=l&&(c.responseType=l),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),a.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},ta.rebind(i,a,"on"),null==r?i:i.get(zn(r))}function zn(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Ln(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function qn(){var n=Tn(),t=Rn()-n;t>24?(isFinite(t)&&(clearTimeout(to),to=setTimeout(qn,t)),no=0):(no=1,ro(qn))}function Tn(){var n=Date.now();for(eo=Ka;eo;)n>=eo.t&&(eo.f=eo.c(n-eo.t)),eo=eo.n;return n}function Rn(){for(var n,t=Ka,e=1/0;t;)t.f?t=n?n.n=t.n:Ka=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return Qa=n,e}function Dn(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Pn(n,t){var e=Math.pow(10,3*ga(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Un(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r&&e?function(n,t){for(var u=n.length,i=[],a=0,o=r[0],c=0;u>0&&o>0&&(c+o+1>t&&(o=Math.max(1,t-c)),i.push(n.substring(u-=o,u+o)),!((c+=o+1)>t));)o=r[a=(a+1)%r.length];return i.reverse().join(e)}:y;return function(n){var e=io.exec(n),r=e[1]||" ",a=e[2]||">",o=e[3]||"-",c=e[4]||"",l=e[5],s=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1,y=!0;switch(h&&(h=+h.substring(1)),(l||"0"===r&&"="===a)&&(l=r="0",a="="),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":y=!1;case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=ao.get(g)||jn;var M=l&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===o?"":o;if(0>p){var c=ta.formatPrefix(n,h);n=c.scale(n),e=c.symbol+d}else n*=p;n=g(n,h);var x,b,_=n.lastIndexOf(".");if(0>_){var w=y?n.lastIndexOf("e"):-1;0>w?(x=n,b=""):(x=n.substring(0,w),b=n.substring(w))}else x=n.substring(0,_),b=t+n.substring(_+1);!l&&f&&(x=i(x,1/0));var S=v.length+x.length+b.length+(M?0:u.length),k=s>S?new Array(S=s-S+1).join(r):"";return M&&(x=i(k+x,k.length?s-b.length:1/0)),u+=v,n=x+b,("<"===a?u+n+k:">"===a?k+u+n:"^"===a?k.substring(0,S>>=1)+u+n+k.substring(S):u+(M?n:k+n))+e}}}function jn(n){return n+""}function Fn(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Hn(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new co(e-1)),1),e}function i(n,e){return t(n=new co(+n),e),n}function a(n,r,i){var a=u(n),o=[];if(i>1)for(;r>a;)e(a)%i||o.push(new Date(+a)),t(a,1);else for(;r>a;)o.push(new Date(+a)),t(a,1);return o}function o(n,t,e){try{co=Fn;var r=new Fn;return r._=n,a(r,t,e)}finally{co=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=a;var c=n.utc=On(n);return c.floor=c,c.round=On(r),c.ceil=On(u),c.offset=On(i),c.range=o,n}function On(n){return function(t,e){try{co=Fn;var r=new Fn;return r._=t,n(r,e)._}finally{co=Date}}}function In(n){function t(n){function t(t){for(var e,u,i,a=[],o=-1,c=0;++o<r;)37===n.charCodeAt(o)&&(a.push(n.slice(c,o)),null!=(u=so[e=n.charAt(++o)])&&(e=n.charAt(++o)),(i=A[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),a.push(e),c=o+1);return a.push(n.slice(c,o)),a.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&co!==Fn,a=new(i?Fn:co);return"j"in r?a.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(a.setFullYear(r.y,0,1),a.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(a.getDay()+5)%7:r.w+7*r.U-(a.getDay()+6)%7)):a.setFullYear(r.y,r.m,r.d),a.setHours(r.H+(r.Z/100|0),r.M+r.Z%100,r.S,r.L),i?a._:a},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,a,o=0,c=t.length,l=e.length;c>o;){if(r>=l)return-1;if(u=t.charCodeAt(o++),37===u){if(a=t.charAt(o++),i=C[a in so?t.charAt(o++):a],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){_.lastIndex=0;var r=_.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){x.lastIndex=0;var r=x.exec(t.slice(e));return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){N.lastIndex=0;var r=N.exec(t.slice(e));return r?(n.m=E.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,r){return e(n,A.c.toString(),t,r)}function c(n,t,r){return e(n,A.x.toString(),t,r)}function l(n,t,r){return e(n,A.X.toString(),t,r)}function s(n,t,e){var r=M.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{co=Fn;var t=new co;return t._=n,r(t)}finally{co=Date}}var r=t(n);return e.parse=function(n){try{co=Fn;var t=r.parse(n);return t&&t._}finally{co=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ct;var M=ta.map(),x=Zn(v),b=Vn(v),_=Zn(d),w=Vn(d),S=Zn(m),k=Vn(m),N=Zn(y),E=Vn(y);p.forEach(function(n,t){M.set(n.toLowerCase(),t)});var A={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return Yn(n.getDate(),t,2)},e:function(n,t){return Yn(n.getDate(),t,2)},H:function(n,t){return Yn(n.getHours(),t,2)},I:function(n,t){return Yn(n.getHours()%12||12,t,2)},j:function(n,t){return Yn(1+oo.dayOfYear(n),t,3)},L:function(n,t){return Yn(n.getMilliseconds(),t,3)},m:function(n,t){return Yn(n.getMonth()+1,t,2)},M:function(n,t){return Yn(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return Yn(n.getSeconds(),t,2)},U:function(n,t){return Yn(oo.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Yn(oo.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return Yn(n.getFullYear()%100,t,2)},Y:function(n,t){return Yn(n.getFullYear()%1e4,t,4)},Z:at,"%":function(){return"%"}},C={a:r,A:u,b:i,B:a,c:o,d:nt,e:nt,H:et,I:et,j:tt,L:it,m:Qn,M:rt,p:s,S:ut,U:$n,w:Xn,W:Bn,x:c,X:l,y:Jn,Y:Wn,Z:Gn,"%":ot};return t}function Yn(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function Zn(n){return new RegExp("^(?:"+n.map(ta.requote).join("|")+")","i")}function Vn(n){for(var t=new l,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Xn(n,t,e){fo.lastIndex=0;var r=fo.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function $n(n,t,e){fo.lastIndex=0;var r=fo.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function Bn(n,t,e){fo.lastIndex=0;var r=fo.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Wn(n,t,e){fo.lastIndex=0;var r=fo.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Jn(n,t,e){fo.lastIndex=0;var r=fo.exec(t.slice(e,e+2));return r?(n.y=Kn(+r[0]),e+r[0].length):-1}function Gn(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Kn(n){return n+(n>68?1900:2e3)}function Qn(n,t,e){fo.lastIndex=0;var r=fo.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function nt(n,t,e){fo.lastIndex=0;var r=fo.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function tt(n,t,e){fo.lastIndex=0;var r=fo.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function et(n,t,e){fo.lastIndex=0;var r=fo.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function rt(n,t,e){fo.lastIndex=0;var r=fo.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function ut(n,t,e){fo.lastIndex=0;var r=fo.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function it(n,t,e){fo.lastIndex=0;var r=fo.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function at(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=ga(t)/60|0,u=ga(t)%60;return e+Yn(r,"0",2)+Yn(u,"0",2)}function ot(n,t,e){ho.lastIndex=0;var r=ho.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ct(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function lt(){}function st(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function ft(n,t){n&&mo.hasOwnProperty(n.type)&&mo[n.type](n,t)}function ht(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function gt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)ht(n[e],t,1);t.polygonEnd()}function pt(){function n(n,t){n*=Da,t=t*Da/2+La/4;var e=n-r,a=e>=0?1:-1,o=a*e,c=Math.cos(t),l=Math.sin(t),s=i*l,f=u*c+s*Math.cos(o),h=s*a*Math.sin(o);Mo.add(Math.atan2(h,f)),r=n,u=c,i=l}var t,e,r,u,i;xo.point=function(a,o){xo.point=n,r=(t=a)*Da,u=Math.cos(o=(e=o)*Da/2+La/4),i=Math.sin(o)},xo.lineEnd=function(){n(t,e)}}function vt(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function dt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function mt(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function yt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function Mt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function xt(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function bt(n){return[Math.atan2(n[1],n[0]),tn(n[2])]}function _t(n,t){return ga(n[0]-t[0])<Ca&&ga(n[1]-t[1])<Ca}function wt(n,t){n*=Da;var e=Math.cos(t*=Da);St(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function St(n,t,e){++bo,wo+=(n-wo)/bo,So+=(t-So)/bo,ko+=(e-ko)/bo}function kt(){function n(n,u){n*=Da;var i=Math.cos(u*=Da),a=i*Math.cos(n),o=i*Math.sin(n),c=Math.sin(u),l=Math.atan2(Math.sqrt((l=e*c-r*o)*l+(l=r*a-t*c)*l+(l=t*o-e*a)*l),t*a+e*o+r*c);_o+=l,No+=l*(t+(t=a)),Eo+=l*(e+(e=o)),Ao+=l*(r+(r=c)),St(t,e,r)}var t,e,r;qo.point=function(u,i){u*=Da;var a=Math.cos(i*=Da);t=a*Math.cos(u),e=a*Math.sin(u),r=Math.sin(i),qo.point=n,St(t,e,r)}}function Nt(){qo.point=wt}function Et(){function n(n,t){n*=Da;var e=Math.cos(t*=Da),a=e*Math.cos(n),o=e*Math.sin(n),c=Math.sin(t),l=u*c-i*o,s=i*a-r*c,f=r*o-u*a,h=Math.sqrt(l*l+s*s+f*f),g=r*a+u*o+i*c,p=h&&-nn(g)/h,v=Math.atan2(h,g);Co+=p*l,zo+=p*s,Lo+=p*f,_o+=v,No+=v*(r+(r=a)),Eo+=v*(u+(u=o)),Ao+=v*(i+(i=c)),St(r,u,i)}var t,e,r,u,i;qo.point=function(a,o){t=a,e=o,qo.point=n,a*=Da;var c=Math.cos(o*=Da);r=c*Math.cos(a),u=c*Math.sin(a),i=Math.sin(o),St(r,u,i)},qo.lineEnd=function(){n(t,e),qo.lineEnd=Nt,qo.point=wt}}function At(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function Ct(){return!0}function zt(n,t,e,r,u){var i=[],a=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(_t(e,r)){u.lineStart();for(var o=0;t>o;++o)u.point((e=n[o])[0],e[1]);return void u.lineEnd()}var c=new qt(e,n,null,!0),l=new qt(e,null,c,!1);c.o=l,i.push(c),a.push(l),c=new qt(r,n,null,!1),l=new qt(r,null,c,!0),c.o=l,i.push(c),a.push(l)}}),a.sort(t),Lt(i),Lt(a),i.length){for(var o=0,c=e,l=a.length;l>o;++o)a[o].e=c=!c;for(var s,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;s=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var o=0,l=s.length;l>o;++o)u.point((f=s[o])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){s=g.p.z;for(var o=s.length-1;o>=0;--o)u.point((f=s[o])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,s=g.z,p=!p}while(!g.v);u.lineEnd()}}}function Lt(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function qt(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Tt(n,t,e,r){return function(u,i){function a(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function o(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=o,d.lineStart()}function l(){y.point=a,d.lineEnd()}function s(n,t){v.push([n,t]);var e=u(n,t);x.point(e[0],e[1])}function f(){x.lineStart(),v=[]}function h(){s(v[0][0],v[0][1]),x.lineEnd();var n,t=x.clean(),e=M.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,a=-1;if(r>0){for(b||(i.polygonStart(),b=!0),i.lineStart();++a<r;)i.point((u=n[a])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Rt))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:a,lineStart:c,lineEnd:l,polygonStart:function(){y.point=s,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=a,y.lineStart=c,y.lineEnd=l,g=ta.merge(g);var n=Ht(m,p);g.length?(b||(i.polygonStart(),b=!0),zt(g,Pt,n,e,i)):n&&(b||(i.polygonStart(),b=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),b&&(i.polygonEnd(),b=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},M=Dt(),x=t(M),b=!1;return y}}function Rt(n){return n.length>1}function Dt(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:b,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Pt(n,t){return((n=n.x)[0]<0?n[1]-Ra-Ca:Ra-n[1])-((t=t.x)[0]<0?t[1]-Ra-Ca:Ra-t[1])}function Ut(n){var t,e=NaN,r=NaN,u=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(i,a){var o=i>0?La:-La,c=ga(i-e);ga(c-La)<Ca?(n.point(e,r=(r+a)/2>0?Ra:-Ra),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(o,r),n.point(i,r),t=0):u!==o&&c>=La&&(ga(e-u)<Ca&&(e-=u*Ca),ga(i-o)<Ca&&(i-=o*Ca),r=jt(e,r,i,a),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(o,r),t=0),n.point(e=i,r=a),u=o},lineEnd:function(){n.lineEnd(),e=r=NaN},clean:function(){return 2-t}}}function jt(n,t,e,r){var u,i,a=Math.sin(n-e);return ga(a)>Ca?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*a)):(t+r)/2}function Ft(n,t,e,r){var u;if(null==n)u=e*Ra,r.point(-La,u),r.point(0,u),r.point(La,u),r.point(La,0),r.point(La,-u),r.point(0,-u),r.point(-La,-u),r.point(-La,0),r.point(-La,u);else if(ga(n[0]-t[0])>Ca){var i=n[0]<t[0]?La:-La;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function Ht(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,a=0;Mo.reset();for(var o=0,c=t.length;c>o;++o){var l=t[o],s=l.length;if(s)for(var f=l[0],h=f[0],g=f[1]/2+La/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===s&&(d=0),n=l[d];var m=n[0],y=n[1]/2+La/4,M=Math.sin(y),x=Math.cos(y),b=m-h,_=b>=0?1:-1,w=_*b,S=w>La,k=p*M;if(Mo.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),i+=S?b+_*qa:b,S^h>=e^m>=e){var N=mt(vt(f),vt(n));xt(N);var E=mt(u,N);xt(E);var A=(S^b>=0?-1:1)*tn(E[2]);(r>A||r===A&&(N[0]||N[1]))&&(a+=S^b>=0?1:-1)}if(!d++)break;h=m,p=M,v=x,f=n}}return(-Ca>i||Ca>i&&0>Mo)^1&a}function Ot(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,l,s;return{lineStart:function(){l=c=!1,s=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=a?v?0:u(f,h):v?u(f+(0>f?La:-La),h):0;if(!e&&(l=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(_t(e,g)||_t(p,g))&&(p[0]+=Ca,p[1]+=Ca,v=t(p[0],p[1]))),v!==c)s=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(o&&e&&a^v){var m;d&i||!(m=r(p,e,!0))||(s=0,a?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&_t(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return s|(l&&c)<<1}}}function r(n,t,e){var r=vt(n),u=vt(t),a=[1,0,0],o=mt(r,u),c=dt(o,o),l=o[0],s=c-l*l;if(!s)return!e&&n;var f=i*c/s,h=-i*l/s,g=mt(a,o),p=Mt(a,f),v=Mt(o,h);yt(p,v);var d=g,m=dt(p,d),y=dt(d,d),M=m*m-y*(dt(p,p)-1);if(!(0>M)){var x=Math.sqrt(M),b=Mt(d,(-m-x)/y);if(yt(b,p),b=bt(b),!e)return b;var _,w=n[0],S=t[0],k=n[1],N=t[1];w>S&&(_=w,w=S,S=_);var E=S-w,A=ga(E-La)<Ca,C=A||Ca>E;if(!A&&k>N&&(_=k,k=N,N=_),C?A?k+N>0^b[1]<(ga(b[0]-w)<Ca?k:N):k<=b[1]&&b[1]<=N:E>La^(w<=b[0]&&b[0]<=S)){var z=Mt(d,(-m+x)/y);return yt(z,p),[b,bt(z)]}}}function u(t,e){var r=a?n:La-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),a=i>0,o=ga(i)>Ca,c=pe(n,6*Da);return Tt(t,e,c,a?[0,-n]:[-La,n-La])}function It(n,t,e,r){return function(u){var i,a=u.a,o=u.b,c=a.x,l=a.y,s=o.x,f=o.y,h=0,g=1,p=s-c,v=f-l;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-l,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-l,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:l+h*v}),1>g&&(u.b={x:c+g*p,y:l+g*v}),u}}}}}}function Yt(n,t,e,r){function u(r,u){return ga(r[0]-n)<Ca?u>0?0:3:ga(r[0]-e)<Ca?u>0?2:1:ga(r[1]-t)<Ca?u>0?1:0:u>0?3:2}function i(n,t){return a(n.x,t.x)}function a(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(o){function c(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,a=1,o=d[u],c=o.length,l=o[0];c>a;++a)i=o[a],l[1]<=r?i[1]>r&&Q(l,i,n)>0&&++t:i[1]<=r&&Q(l,i,n)<0&&--t,l=i;return 0!==t}function l(i,o,c,l){var s=0,f=0;if(null==i||(s=u(i,c))!==(f=u(o,c))||a(i,o)<0^c>0){do l.point(0===s||3===s?n:e,s>1?r:t);while((s=(s+c+4)%4)!==f)}else l.point(o[0],o[1])}function s(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){s(n,t)&&o.point(n,t)}function h(){C.point=p,d&&d.push(m=[]),S=!0,w=!1,b=_=NaN}function g(){v&&(p(y,M),x&&w&&E.rejoin(),v.push(E.buffer())),C.point=f,w&&o.lineEnd()}function p(n,t){n=Math.max(-Ro,Math.min(Ro,n)),t=Math.max(-Ro,Math.min(Ro,t));var e=s(n,t);if(d&&m.push([n,t]),S)y=n,M=t,x=e,S=!1,e&&(o.lineStart(),o.point(n,t));else if(e&&w)o.point(n,t);else{var r={a:{x:b,y:_},b:{x:n,y:t}};A(r)?(w||(o.lineStart(),o.point(r.a.x,r.a.y)),o.point(r.b.x,r.b.y),e||o.lineEnd(),k=!1):e&&(o.lineStart(),o.point(n,t),k=!1)}b=n,_=t,w=e}var v,d,m,y,M,x,b,_,w,S,k,N=o,E=Dt(),A=It(n,t,e,r),C={point:f,lineStart:h,lineEnd:g,polygonStart:function(){o=E,v=[],d=[],k=!0},polygonEnd:function(){o=N,v=ta.merge(v);var t=c([n,r]),e=k&&t,u=v.length;(e||u)&&(o.polygonStart(),e&&(o.lineStart(),l(null,null,1,o),o.lineEnd()),u&&zt(v,i,t,l,o),o.polygonEnd()),v=d=m=null}};return C}}function Zt(n){var t=0,e=La/3,r=ae(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*La/180,e=n[1]*La/180):[t/La*180,e/La*180]},u}function Vt(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),a-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),a=Math.sqrt(i)/u;return e.invert=function(n,t){var e=a-t;return[Math.atan2(n,e)/u,tn((i-(n*n+e*e)*u*u)/(2*u))]},e}function Xt(){function n(n,t){Po+=u*n-r*t,r=n,u=t}var t,e,r,u;Oo.point=function(i,a){Oo.point=n,t=r=i,e=u=a},Oo.lineEnd=function(){n(t,e)}}function $t(n,t){Uo>n&&(Uo=n),n>Fo&&(Fo=n),jo>t&&(jo=t),t>Ho&&(Ho=t)}function Bt(){function n(n,t){a.push("M",n,",",t,i)}function t(n,t){a.push("M",n,",",t),o.point=e}function e(n,t){a.push("L",n,",",t)}function r(){o.point=n}function u(){a.push("Z")}var i=Wt(4.5),a=[],o={point:n,lineStart:function(){o.point=t},lineEnd:r,polygonStart:function(){o.lineEnd=u},polygonEnd:function(){o.lineEnd=r,o.point=n},pointRadius:function(n){return i=Wt(n),o},result:function(){if(a.length){var n=a.join("");return a=[],n}}};return o}function Wt(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Jt(n,t){wo+=n,So+=t,++ko}function Gt(){function n(n,r){var u=n-t,i=r-e,a=Math.sqrt(u*u+i*i);No+=a*(t+n)/2,Eo+=a*(e+r)/2,Ao+=a,Jt(t=n,e=r)}var t,e;Yo.point=function(r,u){Yo.point=n,Jt(t=r,e=u)}}function Kt(){Yo.point=Jt}function Qt(){function n(n,t){var e=n-r,i=t-u,a=Math.sqrt(e*e+i*i);No+=a*(r+n)/2,Eo+=a*(u+t)/2,Ao+=a,a=u*n-r*t,Co+=a*(r+n),zo+=a*(u+t),Lo+=3*a,Jt(r=n,u=t)}var t,e,r,u;Yo.point=function(i,a){Yo.point=n,Jt(t=r=i,e=u=a)},Yo.lineEnd=function(){n(t,e)}}function ne(n){function t(t,e){n.moveTo(t+a,e),n.arc(t,e,a,0,qa)}function e(t,e){n.moveTo(t,e),o.point=r}function r(t,e){n.lineTo(t,e)}function u(){o.point=t}function i(){n.closePath()}var a=4.5,o={point:t,lineStart:function(){o.point=e},lineEnd:u,polygonStart:function(){o.lineEnd=i},polygonEnd:function(){o.lineEnd=u,o.point=t},pointRadius:function(n){return a=n,o},result:b};return o}function te(n){function t(n){return(o?r:e)(n)}function e(t){return ue(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){M=NaN,S.point=i,t.lineStart()}function i(e,r){var i=vt([e,r]),a=n(e,r);u(M,x,y,b,_,w,M=a[0],x=a[1],y=e,b=i[0],_=i[1],w=i[2],o,t),t.point(M,x)}function a(){S.point=e,t.lineEnd()}function c(){r(),S.point=l,S.lineEnd=s}function l(n,t){i(f=n,h=t),g=M,p=x,v=b,d=_,m=w,S.point=i}function s(){u(M,x,y,b,_,w,g,p,f,v,d,m,o,t),S.lineEnd=a,a()}var f,h,g,p,v,d,m,y,M,x,b,_,w,S={point:e,lineStart:r,lineEnd:a,polygonStart:function(){
t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,o,c,l,s,f,h,g,p,v,d,m){var y=s-t,M=f-e,x=y*y+M*M;if(x>4*i&&d--){var b=o+g,_=c+p,w=l+v,S=Math.sqrt(b*b+_*_+w*w),k=Math.asin(w/=S),N=ga(ga(w)-1)<Ca||ga(r-h)<Ca?(r+h)/2:Math.atan2(_,b),E=n(N,k),A=E[0],C=E[1],z=A-t,L=C-e,q=M*z-y*L;(q*q/x>i||ga((y*z+M*L)/x-.5)>.3||a>o*g+c*p+l*v)&&(u(t,e,r,o,c,l,A,C,N,b/=S,_/=S,w,d,m),m.point(A,C),u(A,C,N,b,_,w,s,f,h,g,p,v,d,m))}}var i=.5,a=Math.cos(30*Da),o=16;return t.precision=function(n){return arguments.length?(o=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function ee(n){var t=te(function(t,e){return n([t*Pa,e*Pa])});return function(n){return oe(t(n))}}function re(n){this.stream=n}function ue(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ie(n){return ae(function(){return n})()}function ae(n){function t(n){return n=o(n[0]*Da,n[1]*Da),[n[0]*h+c,l-n[1]*h]}function e(n){return n=o.invert((n[0]-c)/h,(l-n[1])/h),n&&[n[0]*Pa,n[1]*Pa]}function r(){o=At(a=se(m,M,x),i);var n=i(v,d);return c=g-n[0]*h,l=p+n[1]*h,u()}function u(){return s&&(s.valid=!1,s=null),t}var i,a,o,c,l,s,f=te(function(n,t){return n=i(n,t),[n[0]*h+c,l-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,M=0,x=0,b=To,_=y,w=null,S=null;return t.stream=function(n){return s&&(s.valid=!1),s=oe(b(a,f(_(n)))),s.valid=!0,s},t.clipAngle=function(n){return arguments.length?(b=null==n?(w=n,To):Ot((w=+n)*Da),u()):w},t.clipExtent=function(n){return arguments.length?(S=n,_=n?Yt(n[0][0],n[0][1],n[1][0],n[1][1]):y,u()):S},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*Da,d=n[1]%360*Da,r()):[v*Pa,d*Pa]},t.rotate=function(n){return arguments.length?(m=n[0]%360*Da,M=n[1]%360*Da,x=n.length>2?n[2]%360*Da:0,r()):[m*Pa,M*Pa,x*Pa]},ta.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function oe(n){return ue(n,function(t,e){n.point(t*Da,e*Da)})}function ce(n,t){return[n,t]}function le(n,t){return[n>La?n-qa:-La>n?n+qa:n,t]}function se(n,t,e){return n?t||e?At(he(n),ge(t,e)):he(n):t||e?ge(t,e):le}function fe(n){return function(t,e){return t+=n,[t>La?t-qa:-La>t?t+qa:t,e]}}function he(n){var t=fe(n);return t.invert=fe(-n),t}function ge(n,t){function e(n,t){var e=Math.cos(t),o=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*r+o*u;return[Math.atan2(c*i-s*a,o*r-l*u),tn(s*i+c*a)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),a=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),o=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*i-c*a;return[Math.atan2(c*i+l*a,o*r+s*u),tn(s*r-o*u)]},e}function pe(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,a,o){var c=a*t;null!=u?(u=ve(e,u),i=ve(e,i),(a>0?i>u:u>i)&&(u+=a*qa)):(u=n+a*qa,i=n-.5*c);for(var l,s=u;a>0?s>i:i>s;s-=c)o.point((l=bt([e,-r*Math.cos(s),-r*Math.sin(s)]))[0],l[1])}}function ve(n,t){var e=vt(t);e[0]-=n,xt(e);var r=nn(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Ca)%(2*Math.PI)}function de(n,t,e){var r=ta.range(n,t-Ca,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function me(n,t,e){var r=ta.range(n,t-Ca,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function ye(n){return n.source}function Me(n){return n.target}function xe(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),a=Math.cos(r),o=Math.sin(r),c=u*Math.cos(n),l=u*Math.sin(n),s=a*Math.cos(e),f=a*Math.sin(e),h=2*Math.asin(Math.sqrt(an(r-t)+u*a*an(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*s,u=e*l+t*f,a=e*i+t*o;return[Math.atan2(u,r)*Pa,Math.atan2(a,Math.sqrt(r*r+u*u))*Pa]}:function(){return[n*Pa,t*Pa]};return p.distance=h,p}function be(){function n(n,u){var i=Math.sin(u*=Da),a=Math.cos(u),o=ga((n*=Da)-t),c=Math.cos(o);Zo+=Math.atan2(Math.sqrt((o=a*Math.sin(o))*o+(o=r*i-e*a*c)*o),e*i+r*a*c),t=n,e=i,r=a}var t,e,r;Vo.point=function(u,i){t=u*Da,e=Math.sin(i*=Da),r=Math.cos(i),Vo.point=n},Vo.lineEnd=function(){Vo.point=Vo.lineEnd=b}}function _e(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),a=Math.cos(u);return[Math.atan2(n*i,r*a),Math.asin(r&&e*i/r)]},e}function we(n,t){function e(n,t){a>0?-Ra+Ca>t&&(t=-Ra+Ca):t>Ra-Ca&&(t=Ra-Ca);var e=a/Math.pow(u(t),i);return[e*Math.sin(i*n),a-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(La/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),a=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=a-t,r=K(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(a/r,1/i))-Ra]},e):ke}function Se(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return ga(u)<Ca?ce:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-K(u)*Math.sqrt(n*n+e*e)]},e)}function ke(n,t){return[n,Math.log(Math.tan(La/4+t/2))]}function Ne(n){var t,e=ie(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var a=i.apply(e,arguments);if(a===e){if(t=null==n){var o=La*r(),c=u();i([[c[0]-o,c[1]-o],[c[0]+o,c[1]+o]])}}else t&&(a=null);return a},e.clipExtent(null)}function Ee(n,t){return[Math.log(Math.tan(La/4+t/2)),-n]}function Ae(n){return n[0]}function Ce(n){return n[1]}function ze(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&Q(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function Le(n,t){return n[0]-t[0]||n[1]-t[1]}function qe(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Te(n,t,e,r){var u=n[0],i=e[0],a=t[0]-u,o=r[0]-i,c=n[1],l=e[1],s=t[1]-c,f=r[1]-l,h=(o*(c-l)-f*(u-i))/(f*a-o*s);return[u+h*a,c+h*s]}function Re(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function De(){er(this),this.edge=this.site=this.circle=null}function Pe(n){var t=rc.pop()||new De;return t.site=n,t}function Ue(n){$e(n),nc.remove(n),rc.push(n),er(n)}function je(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,a=n.N,o=[n];Ue(n);for(var c=i;c.circle&&ga(e-c.circle.x)<Ca&&ga(r-c.circle.cy)<Ca;)i=c.P,o.unshift(c),Ue(c),c=i;o.unshift(c),$e(c);for(var l=a;l.circle&&ga(e-l.circle.x)<Ca&&ga(r-l.circle.cy)<Ca;)a=l.N,o.push(l),Ue(l),l=a;o.push(l),$e(l);var s,f=o.length;for(s=1;f>s;++s)l=o[s],c=o[s-1],Qe(l.edge,c.site,l.site,u);c=o[0],l=o[f-1],l.edge=Ge(c.site,l.site,null,u),Xe(c),Xe(l)}function Fe(n){for(var t,e,r,u,i=n.x,a=n.y,o=nc._;o;)if(r=He(o,a)-i,r>Ca)o=o.L;else{if(u=i-Oe(o,a),!(u>Ca)){r>-Ca?(t=o.P,e=o):u>-Ca?(t=o,e=o.N):t=e=o;break}if(!o.R){t=o;break}o=o.R}var c=Pe(n);if(nc.insert(t,c),t||e){if(t===e)return $e(t),e=Pe(t.site),nc.insert(c,e),c.edge=e.edge=Ge(t.site,c.site),Xe(t),void Xe(e);if(!e)return void(c.edge=Ge(t.site,c.site));$e(t),$e(e);var l=t.site,s=l.x,f=l.y,h=n.x-s,g=n.y-f,p=e.site,v=p.x-s,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,M=v*v+d*d,x={x:(d*y-g*M)/m+s,y:(h*M-v*y)/m+f};Qe(e.edge,l,p,x),c.edge=Ge(l,n,null,x),e.edge=Ge(n,p,null,x),Xe(t),Xe(e)}}function He(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var a=n.P;if(!a)return-(1/0);e=a.site;var o=e.x,c=e.y,l=c-t;if(!l)return o;var s=o-r,f=1/i-1/l,h=s/l;return f?(-h+Math.sqrt(h*h-2*f*(s*s/(-2*l)-c+l/2+u-i/2)))/f+r:(r+o)/2}function Oe(n,t){var e=n.N;if(e)return He(e,t);var r=n.site;return r.y===t?r.x:1/0}function Ie(n){this.site=n,this.edges=[]}function Ye(n){for(var t,e,r,u,i,a,o,c,l,s,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=Qo,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(o=i.edges,c=o.length,a=0;c>a;)s=o[a].end(),r=s.x,u=s.y,l=o[++a%c].start(),t=l.x,e=l.y,(ga(r-t)>Ca||ga(u-e)>Ca)&&(o.splice(a,0,new nr(Ke(i.site,s,ga(r-f)<Ca&&p-u>Ca?{x:f,y:ga(t-f)<Ca?e:p}:ga(u-p)<Ca&&h-r>Ca?{x:ga(e-p)<Ca?t:h,y:p}:ga(r-h)<Ca&&u-g>Ca?{x:h,y:ga(t-h)<Ca?e:g}:ga(u-g)<Ca&&r-f>Ca?{x:ga(e-g)<Ca?t:f,y:g}:null),i.site,null)),++c)}function Ze(n,t){return t.angle-n.angle}function Ve(){er(this),this.x=this.y=this.arc=this.site=this.cy=null}function Xe(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var a=u.x,o=u.y,c=r.x-a,l=r.y-o,s=i.x-a,f=i.y-o,h=2*(c*f-l*s);if(!(h>=-za)){var g=c*c+l*l,p=s*s+f*f,v=(f*g-l*p)/h,d=(c*p-s*g)/h,f=d+o,m=uc.pop()||new Ve;m.arc=n,m.site=u,m.x=v+a,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,M=ec._;M;)if(m.y<M.y||m.y===M.y&&m.x<=M.x){if(!M.L){y=M.P;break}M=M.L}else{if(!M.R){y=M;break}M=M.R}ec.insert(y,m),y||(tc=m)}}}}function $e(n){var t=n.circle;t&&(t.P||(tc=t.N),ec.remove(t),uc.push(t),er(t),n.circle=null)}function Be(n){for(var t,e=Ko,r=It(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!We(t,n)||!r(t)||ga(t.a.x-t.b.x)<Ca&&ga(t.a.y-t.b.y)<Ca)&&(t.a=t.b=null,e.splice(u,1))}function We(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,a=t[0][0],o=t[1][0],c=t[0][1],l=t[1][1],s=n.l,f=n.r,h=s.x,g=s.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(a>d||d>=o)return;if(h>p){if(i){if(i.y>=l)return}else i={x:d,y:c};e={x:d,y:l}}else{if(i){if(i.y<c)return}else i={x:d,y:l};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=l)return}else i={x:(c-u)/r,y:c};e={x:(l-u)/r,y:l}}else{if(i){if(i.y<c)return}else i={x:(l-u)/r,y:l};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}else{if(i){if(i.x<a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}return n.a=i,n.b=e,!0}function Je(n,t){this.l=n,this.r=t,this.a=this.b=null}function Ge(n,t,e,r){var u=new Je(n,t);return Ko.push(u),e&&Qe(u,n,t,e),r&&Qe(u,t,n,r),Qo[n.i].edges.push(new nr(u,n,t)),Qo[t.i].edges.push(new nr(u,t,n)),u}function Ke(n,t,e){var r=new Je(n,null);return r.a=t,r.b=e,Ko.push(r),r}function Qe(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function nr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function tr(){this._=null}function er(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function rr(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ur(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function ir(n){for(;n.L;)n=n.L;return n}function ar(n,t){var e,r,u,i=n.sort(or).pop();for(Ko=[],Qo=new Array(n.length),nc=new tr,ec=new tr;;)if(u=tc,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(Qo[i.i]=new Ie(i),Fe(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;je(u.arc)}t&&(Be(t),Ye(t));var a={cells:Qo,edges:Ko};return nc=ec=Ko=Qo=null,a}function or(n,t){return t.y-n.y||t.x-n.x}function cr(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function lr(n){return n.x}function sr(n){return n.y}function fr(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function hr(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var a=.5*(e+u),o=.5*(r+i),c=t.nodes;c[0]&&hr(n,c[0],e,r,a,o),c[1]&&hr(n,c[1],a,r,u,o),c[2]&&hr(n,c[2],e,o,a,i),c[3]&&hr(n,c[3],a,o,u,i)}}function gr(n,t,e,r,u,i,a){var o,c=1/0;return function l(n,s,f,h,g){if(!(s>i||f>a||r>h||u>g)){if(p=n.point){var p,v=t-n.x,d=e-n.y,m=v*v+d*d;if(c>m){var y=Math.sqrt(c=m);r=t-y,u=e-y,i=t+y,a=e+y,o=p}}for(var M=n.nodes,x=.5*(s+h),b=.5*(f+g),_=t>=x,w=e>=b,S=w<<1|_,k=S+4;k>S;++S)if(n=M[3&S])switch(3&S){case 0:l(n,s,f,x,b);break;case 1:l(n,x,f,h,b);break;case 2:l(n,s,b,x,g);break;case 3:l(n,x,b,h,g)}}}(n,r,u,i,a),o}function pr(n,t){n=ta.rgb(n),t=ta.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,a=t.g-r,o=t.b-u;return function(n){return"#"+bn(Math.round(e+i*n))+bn(Math.round(r+a*n))+bn(Math.round(u+o*n))}}function vr(n,t){var e,r={},u={};for(e in n)e in t?r[e]=yr(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function dr(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function mr(n,t){var e,r,u,i=ac.lastIndex=oc.lastIndex=0,a=-1,o=[],c=[];for(n+="",t+="";(e=ac.exec(n))&&(r=oc.exec(t));)(u=r.index)>i&&(u=t.slice(i,u),o[a]?o[a]+=u:o[++a]=u),(e=e[0])===(r=r[0])?o[a]?o[a]+=r:o[++a]=r:(o[++a]=null,c.push({i:a,x:dr(e,r)})),i=oc.lastIndex;return i<t.length&&(u=t.slice(i),o[a]?o[a]+=u:o[++a]=u),o.length<2?c[0]?(t=c[0].x,function(n){return t(n)+""}):function(){return t}:(t=c.length,function(n){for(var e,r=0;t>r;++r)o[(e=c[r]).i]=e.x(n);return o.join("")})}function yr(n,t){for(var e,r=ta.interpolators.length;--r>=0&&!(e=ta.interpolators[r](n,t)););return e}function Mr(n,t){var e,r=[],u=[],i=n.length,a=t.length,o=Math.min(n.length,t.length);for(e=0;o>e;++e)r.push(yr(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;a>e;++e)u[e]=t[e];return function(n){for(e=0;o>e;++e)u[e]=r[e](n);return u}}function xr(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function br(n){return function(t){return 1-n(1-t)}}function _r(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function wr(n){return n*n}function Sr(n){return n*n*n}function kr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Nr(n){return function(t){return Math.pow(t,n)}}function Er(n){return 1-Math.cos(n*Ra)}function Ar(n){return Math.pow(2,10*(n-1))}function Cr(n){return 1-Math.sqrt(1-n*n)}function zr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/qa*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*qa/t)}}function Lr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function qr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Tr(n,t){n=ta.hcl(n),t=ta.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,a=t.c-r,o=t.l-u;return isNaN(a)&&(a=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return fn(e+i*n,r+a*n,u+o*n)+""}}function Rr(n,t){n=ta.hsl(n),t=ta.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,a=t.s-r,o=t.l-u;return isNaN(a)&&(a=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return ln(e+i*n,r+a*n,u+o*n)+""}}function Dr(n,t){n=ta.lab(n),t=ta.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,a=t.a-r,o=t.b-u;return function(n){return gn(e+i*n,r+a*n,u+o*n)+""}}function Pr(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Ur(n){var t=[n.a,n.b],e=[n.c,n.d],r=Fr(t),u=jr(t,e),i=Fr(Hr(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Pa,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Pa:0}function jr(n,t){return n[0]*t[0]+n[1]*t[1]}function Fr(n){var t=Math.sqrt(jr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Hr(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Or(n,t){var e,r=[],u=[],i=ta.transform(n),a=ta.transform(t),o=i.translate,c=a.translate,l=i.rotate,s=a.rotate,f=i.skew,h=a.skew,g=i.scale,p=a.scale;return o[0]!=c[0]||o[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:dr(o[0],c[0])},{i:3,x:dr(o[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),l!=s?(l-s>180?s+=360:s-l>180&&(l+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:dr(l,s)})):s&&r.push(r.pop()+"rotate("+s+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:dr(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:dr(g[0],p[0])},{i:e-2,x:dr(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function Ir(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Yr(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Zr(n){for(var t=n.source,e=n.target,r=Xr(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Vr(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Xr(n,t){if(n===t)return n;for(var e=Vr(n),r=Vr(t),u=e.pop(),i=r.pop(),a=null;u===i;)a=u,u=e.pop(),i=r.pop();return a}function $r(n){n.fixed|=2}function Br(n){n.fixed&=-7}function Wr(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Jr(n){n.fixed&=-5}function Gr(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,a=n.nodes,o=a.length,c=-1;++c<o;)i=a[c],null!=i&&(Gr(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var l=t*e[n.point.index];n.charge+=n.pointCharge=l,r+=l*n.point.x,u+=l*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function Kr(n,t){return ta.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=uu,n}function Qr(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(u=n.children)&&(r=u.length))for(var r,u;--r>=0;)e.push(u[r])}function nu(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(i=n.children)&&(u=i.length))for(var u,i,a=-1;++a<u;)e.push(i[a]);for(;null!=(n=r.pop());)t(n)}function tu(n){return n.children}function eu(n){return n.value}function ru(n,t){return t.value-n.value}function uu(n){return ta.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function iu(n){return n.x}function au(n){return n.y}function ou(n,t,e){n.y0=t,n.y=e}function cu(n){return ta.range(n.length)}function lu(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function su(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function fu(n){return n.reduce(hu,0)}function hu(n,t){return n+t[1]}function gu(n,t){return pu(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function pu(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function vu(n){return[ta.min(n),ta.max(n)]}function du(n,t){return n.value-t.value}function mu(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function yu(n,t){n._pack_next=t,t._pack_prev=n}function Mu(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function xu(n){function t(n){s=Math.min(n.x-n.r,s),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(l=e.length)){var e,r,u,i,a,o,c,l,s=1/0,f=-(1/0),h=1/0,g=-(1/0);if(e.forEach(bu),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(u=e[1],u.x=u.r,u.y=0,t(u),l>2))for(i=e[2],Su(r,u,i),t(i),mu(r,i),r._pack_prev=i,mu(i,u),u=r._pack_next,a=3;l>a;a++){Su(r,u,i=e[a]);var p=0,v=1,d=1;for(o=u._pack_next;o!==u;o=o._pack_next,v++)if(Mu(o,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==o._pack_prev&&!Mu(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?yu(r,u=o):yu(r=c,u),a--):(mu(r,i),u=i,t(i))}var m=(s+f)/2,y=(h+g)/2,M=0;for(a=0;l>a;a++)i=e[a],i.x-=m,i.y-=y,M=Math.max(M,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=M,e.forEach(_u)}}function bu(n){n._pack_next=n._pack_prev=n}function _u(n){delete n._pack_next,delete n._pack_prev}function wu(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,a=u.length;++i<a;)wu(u[i],t,e,r)}function Su(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var a=t.r+e.r,o=u*u+i*i;a*=a,r*=r;var c=.5+(r-a)/(2*o),l=Math.sqrt(Math.max(0,2*a*(r+o)-(r-=o)*r-a*a))/(2*o);e.x=n.x+c*u+l*i,e.y=n.y+c*i-l*u}else e.x=n.x+r,e.y=n.y}function ku(n,t){return n.parent==t.parent?1:2}function Nu(n){var t=n.children;return t.length?t[0]:n.t}function Eu(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Au(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Cu(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function zu(n,t,e){return n.a.parent===t.parent?n.a:e}function Lu(n){return 1+ta.max(n,function(n){return n.y})}function qu(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Tu(n){var t=n.children;return t&&t.length?Tu(t[0]):n}function Ru(n){var t,e=n.children;return e&&(t=e.length)?Ru(e[t-1]):n}function Du(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Pu(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Uu(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function ju(n){return n.rangeExtent?n.rangeExtent():Uu(n.range())}function Fu(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Hu(n,t){var e,r=0,u=n.length-1,i=n[r],a=n[u];return i>a&&(e=r,r=u,u=e,e=i,i=a,a=e),n[r]=t.floor(i),n[u]=t.ceil(a),n}function Ou(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:yc}function Iu(n,t,e,r){var u=[],i=[],a=0,o=Math.min(n.length,t.length)-1;for(n[o]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<=o;)u.push(e(n[a-1],n[a])),i.push(r(t[a-1],t[a]));return function(t){var e=ta.bisect(n,t,1,o)-1;return i[e](u[e](t))}}function Yu(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Iu:Fu,c=r?Yr:Ir;return a=u(n,t,c,e),o=u(t,n,c,yr),i}function i(n){return a(n)}var a,o;return i.invert=function(n){return o(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Pr)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return $u(n,t)},i.tickFormat=function(t,e){return Bu(n,t,e)},i.nice=function(t){return Vu(n,t),u()},i.copy=function(){return Yu(n,t,e,r)},u()}function Zu(n,t){return ta.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Vu(n,t){return Hu(n,Ou(Xu(n,t)[2]))}function Xu(n,t){null==t&&(t=10);var e=Uu(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function $u(n,t){return ta.range.apply(ta,Xu(n,t))}function Bu(n,t,e){var r=Xu(n,t);if(e){var u=io.exec(e);if(u.shift(),"s"===u[8]){var i=ta.formatPrefix(Math.max(ga(r[0]),ga(r[1])));return u[7]||(u[7]="."+Wu(i.scale(r[2]))),u[8]="f",e=ta.format(u.join("")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]="."+Ju(u[8],r)),e=u.join("")}else e=",."+Wu(r[2])+"f";return ta.format(e)}function Wu(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Ju(n,t){var e=Wu(t[2]);return n in Mc?Math.abs(e-Wu(Math.max(ga(t[0]),ga(t[1]))))+ +("e"!==n):e-2*("%"===n)}function Gu(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function a(t){return n(u(t))}return a.invert=function(t){return i(n.invert(t))},a.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),a):r},a.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),a):t},a.nice=function(){var t=Hu(r.map(u),e?Math:bc);return n.domain(t),r=t.map(i),a},a.ticks=function(){var n=Uu(r),a=[],o=n[0],c=n[1],l=Math.floor(u(o)),s=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(s-l)){if(e){for(;s>l;l++)for(var h=1;f>h;h++)a.push(i(l)*h);a.push(i(l))}else for(a.push(i(l));l++<s;)for(var h=f-1;h>0;h--)a.push(i(l)*h);for(l=0;a[l]<o;l++);for(s=a.length;a[s-1]>c;s--);a=a.slice(l,s)}return a},a.tickFormat=function(n,t){if(!arguments.length)return xc;arguments.length<2?t=xc:"function"!=typeof t&&(t=ta.format(t));var r,o=Math.max(.1,n/a.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=o?t(n):""}},a.copy=function(){return Gu(n.copy(),t,e,r)},Zu(a,n)}function Ku(n,t,e){function r(t){return n(u(t))}var u=Qu(t),i=Qu(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return $u(e,n)},r.tickFormat=function(n,t){return Bu(e,n,t)},r.nice=function(n){return r.domain(Vu(e,n))},r.exponent=function(a){return arguments.length?(u=Qu(t=a),i=Qu(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return Ku(n.copy(),t,e)},Zu(r,n)}function Qu(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function ni(n,t){function e(e){return i[((u.get(e)||("range"===t.t?u.set(e,n.push(e)):NaN))-1)%i.length]}function r(t,e){return ta.range(n.length).map(function(n){return t+e*n})}var u,i,a;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new l;for(var i,a=-1,o=r.length;++a<o;)u.has(i=r[a])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,a=0,t={t:"range",a:arguments},e):i},e.rangePoints=function(u,o){arguments.length<2&&(o=0);var c=u[0],l=u[1],s=n.length<2?(c=(c+l)/2,0):(l-c)/(n.length-1+o);return i=r(c+s*o/2,s),a=0,t={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(u,o){arguments.length<2&&(o=0);var c=u[0],l=u[1],s=n.length<2?(c=l=Math.round((c+l)/2),0):(l-c)/(n.length-1+o)|0;return i=r(c+Math.round(s*o/2+(l-c-(n.length-1+o)*s)/2),s),a=0,t={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(u,o,c){arguments.length<2&&(o=0),arguments.length<3&&(c=o);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=(f-s)/(n.length-o+2*c);return i=r(s+h*c,h),l&&i.reverse(),a=h*(1-o),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,o,c){arguments.length<2&&(o=0),arguments.length<3&&(c=o);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=Math.floor((f-s)/(n.length-o+2*c));return i=r(s+Math.round((f-s-(n.length-o)*h)/2),h),l&&i.reverse(),a=Math.round(h*(1-o)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return a},e.rangeExtent=function(){return Uu(t.a[0])},e.copy=function(){return ni(n,t)},e.domain(n)}function ti(n,t){function i(){var e=0,r=t.length;for(o=[];++e<r;)o[e-1]=ta.quantile(n,e/r);return a}function a(n){return isNaN(n=+n)?void 0:t[ta.bisect(o,n)]}var o;return a.domain=function(t){return arguments.length?(n=t.map(r).filter(u).sort(e),i()):n},a.range=function(n){return arguments.length?(t=n,i()):t},a.quantiles=function(){return o},a.invertExtent=function(e){return e=t.indexOf(e),0>e?[NaN,NaN]:[e>0?o[e-1]:n[0],e<o.length?o[e]:n[n.length-1]]},a.copy=function(){return ti(n,t)},i()}function ei(n,t,e){function r(t){return e[Math.max(0,Math.min(a,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),a=e.length-1,r}var i,a;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?NaN:t/i+n,[t,t+1/i]},r.copy=function(){return ei(n,t,e)},u()}function ri(n,t){function e(e){return e>=e?t[ta.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return ri(n,t)},e}function ui(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return $u(n,t)},t.tickFormat=function(t,e){return Bu(n,t,e)},t.copy=function(){return ui(n)},t}function ii(){return 0}function ai(n){return n.innerRadius}function oi(n){return n.outerRadius}function ci(n){return n.startAngle}function li(n){return n.endAngle}function si(n){return n&&n.padAngle}function fi(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function hi(n,t,e,r,u){var i=n[0]-t[0],a=n[1]-t[1],o=(u?r:-r)/Math.sqrt(i*i+a*a),c=o*a,l=-o*i,s=n[0]+c,f=n[1]+l,h=t[0]+c,g=t[1]+l,p=(s+h)/2,v=(f+g)/2,d=h-s,m=g-f,y=d*d+m*m,M=e-r,x=s*g-h*f,b=(0>m?-1:1)*Math.sqrt(M*M*y-x*x),_=(x*m-d*b)/y,w=(-x*d-m*b)/y,S=(x*m+d*b)/y,k=(-x*d+m*b)/y,N=_-p,E=w-v,A=S-p,C=k-v;return N*N+E*E>A*A+C*C&&(_=S,w=k),[[_-c,w-l],[_*e/M,w*e/M]]}function gi(n){function t(t){function a(){l.push("M",i(n(s),o))}for(var c,l=[],s=[],f=-1,h=t.length,g=En(e),p=En(r);++f<h;)u.call(this,c=t[f],f)?s.push([+g.call(this,c,f),+p.call(this,c,f)]):s.length&&(a(),s=[]);return s.length&&a(),l.length?l.join(""):null}var e=Ae,r=Ce,u=Ct,i=pi,a=i.key,o=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(a="function"==typeof n?i=n:(i=Ec.get(n)||pi).key,t):a},t.tension=function(n){return arguments.length?(o=n,t):o},t}function pi(n){return n.join("L")}function vi(n){return pi(n)+"Z"}function di(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function mi(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function yi(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function Mi(n,t){return n.length<4?pi(n):n[1]+_i(n.slice(1,-1),wi(n,t))}function xi(n,t){return n.length<3?pi(n):n[0]+_i((n.push(n[0]),n),wi([n[n.length-2]].concat(n,[n[1]]),t))}function bi(n,t){return n.length<3?pi(n):n[0]+_i(n,wi(n,t))}function _i(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return pi(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],a=t[0],o=a,c=1;if(e&&(r+="Q"+(i[0]-2*a[0]/3)+","+(i[1]-2*a[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){o=t[1],i=n[c],c++,r+="C"+(u[0]+a[0])+","+(u[1]+a[1])+","+(i[0]-o[0])+","+(i[1]-o[1])+","+i[0]+","+i[1];for(var l=2;l<t.length;l++,c++)i=n[c],o=t[l],r+="S"+(i[0]-o[0])+","+(i[1]-o[1])+","+i[0]+","+i[1]}if(e){var s=n[c];r+="Q"+(i[0]+2*o[0]/3)+","+(i[1]+2*o[1]/3)+","+s[0]+","+s[1]}return r}function wi(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],a=n[1],o=1,c=n.length;++o<c;)e=i,i=a,a=n[o],r.push([u*(a[0]-e[0]),u*(a[1]-e[1])]);return r}function Si(n){if(n.length<3)return pi(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],a=[u,u,u,(r=n[1])[0]],o=[i,i,i,r[1]],c=[u,",",i,"L",Ai(zc,a),",",Ai(zc,o)];for(n.push(n[e-1]);++t<=e;)r=n[t],a.shift(),a.push(r[0]),o.shift(),o.push(r[1]),Ci(c,a,o);return n.pop(),c.push("L",r),c.join("")}function ki(n){if(n.length<4)return pi(n);for(var t,e=[],r=-1,u=n.length,i=[0],a=[0];++r<3;)t=n[r],i.push(t[0]),a.push(t[1]);for(e.push(Ai(zc,i)+","+Ai(zc,a)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),a.shift(),a.push(t[1]),Ci(e,i,a);return e.join("")}function Ni(n){for(var t,e,r=-1,u=n.length,i=u+4,a=[],o=[];++r<4;)e=n[r%u],a.push(e[0]),o.push(e[1]);for(t=[Ai(zc,a),",",Ai(zc,o)],--r;++r<i;)e=n[r%u],a.shift(),a.push(e[0]),o.shift(),o.push(e[1]),Ci(t,a,o);return t.join("")}function Ei(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],a=n[0][1],o=n[e][0]-i,c=n[e][1]-a,l=-1;++l<=e;)r=n[l],u=l/e,r[0]=t*r[0]+(1-t)*(i+u*o),r[1]=t*r[1]+(1-t)*(a+u*c);return Si(n)}function Ai(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Ci(n,t,e){n.push("C",Ai(Ac,t),",",Ai(Ac,e),",",Ai(Cc,t),",",Ai(Cc,e),",",Ai(zc,t),",",Ai(zc,e))}function zi(n,t){return(t[1]-n[1])/(t[0]-n[0])}function Li(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],a=r[0]=zi(u,i);++t<e;)r[t]=(a+(a=zi(u=i,i=n[t+1])))/2;return r[t]=a,r}function qi(n){for(var t,e,r,u,i=[],a=Li(n),o=-1,c=n.length-1;++o<c;)t=zi(n[o],n[o+1]),ga(t)<Ca?a[o]=a[o+1]=0:(e=a[o]/t,r=a[o+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),a[o]=u*e,a[o+1]=u*r));for(o=-1;++o<=c;)u=(n[Math.min(c,o+1)][0]-n[Math.max(0,o-1)][0])/(6*(1+a[o]*a[o])),i.push([u||0,a[o]*u||0]);return i}function Ti(n){return n.length<3?pi(n):n[0]+_i(n,qi(n))}function Ri(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]-Ra,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Di(n){function t(t){function c(){v.push("M",o(n(m),f),s,l(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,M=t.length,x=En(e),b=En(u),_=e===r?function(){return g}:En(r),w=u===i?function(){return p}:En(i);++y<M;)a.call(this,h=t[y],y)?(d.push([g=+x.call(this,h,y),p=+b.call(this,h,y)]),m.push([+_.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=Ae,r=Ae,u=0,i=Ce,a=Ct,o=pi,c=o.key,l=o,s="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,
t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(a=n,t):a},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?o=n:(o=Ec.get(n)||pi).key,l=o.reverse||o,s=o.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Pi(n){return n.radius}function Ui(n){return[n.x,n.y]}function ji(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-Ra;return[e*Math.cos(r),e*Math.sin(r)]}}function Fi(){return 64}function Hi(){return"circle"}function Oi(n){var t=Math.sqrt(n/La);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Ii(n){return function(){var t,e;(t=this[n])&&(e=t[t.active])&&(--t.count?delete t[t.active]:delete this[n],t.active+=.5,e.event&&e.event.interrupt.call(this,this.__data__,e.index))}}function Yi(n,t,e){return ya(n,Uc),n.namespace=t,n.id=e,n}function Zi(n,t,e,r){var u=n.id,i=n.namespace;return Y(n,"function"==typeof e?function(n,a,o){n[i][u].tween.set(t,r(e.call(n,n.__data__,a,o)))}:(e=r(e),function(n){n[i][u].tween.set(t,e)}))}function Vi(n){return null==n&&(n=""),function(){this.textContent=n}}function Xi(n){return null==n?"__transition__":"__transition_"+n+"__"}function $i(n,t,e,r,u){var i=n[e]||(n[e]={active:0,count:0}),a=i[r];if(!a){var o=u.time;a=i[r]={tween:new l,time:o,delay:u.delay,duration:u.duration,ease:u.ease,index:t},u=null,++i.count,ta.timer(function(u){function c(e){if(i.active>r)return s();var u=i[i.active];u&&(--i.count,delete i[i.active],u.event&&u.event.interrupt.call(n,n.__data__,u.index)),i.active=r,a.event&&a.event.start.call(n,n.__data__,t),a.tween.forEach(function(e,r){(r=r.call(n,n.__data__,t))&&v.push(r)}),h=a.ease,f=a.duration,ta.timer(function(){return p.c=l(e||1)?Ct:l,1},0,o)}function l(e){if(i.active!==r)return 1;for(var u=e/f,o=h(u),c=v.length;c>0;)v[--c].call(n,o);return u>=1?(a.event&&a.event.end.call(n,n.__data__,t),s()):void 0}function s(){return--i.count?delete i[r]:delete n[e],1}var f,h,g=a.delay,p=eo,v=[];return p.t=g+o,u>=g?c(u-g):void(p.c=c)},0,o)}}function Bi(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function Wi(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function Ji(n){return n.toISOString()}function Gi(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=ta.bisect(Xc,u);return i==Xc.length?[t.year,Xu(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Xc[i-1]<Xc[i]/u?i-1:i]:[Wc,Xu(n,e)[2]]}return r.invert=function(t){return Ki(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Ki)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Ki(+e+1),t).length}var i=r.domain(),a=Uu(i),o=null==n?u(a,10):"number"==typeof n&&u(a,n);return o&&(n=o[0],t=o[1]),r.domain(Hu(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Ki(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Ki(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Uu(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Ki(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Gi(n.copy(),t,e)},Zu(r,n)}function Ki(n){return new Date(n)}function Qi(n){return JSON.parse(n.responseText)}function na(n){var t=ua.createRange();return t.selectNode(ua.body),t.createContextualFragment(n.responseText)}var ta={version:"3.5.6"},ea=[].slice,ra=function(n){return ea.call(n)},ua=this.document;if(ua)try{ra(ua.documentElement.childNodes)[0].nodeType}catch(ia){ra=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}if(Date.now||(Date.now=function(){return+new Date}),ua)try{ua.createElement("DIV").style.setProperty("opacity",0,"")}catch(aa){var oa=this.Element.prototype,ca=oa.setAttribute,la=oa.setAttributeNS,sa=this.CSSStyleDeclaration.prototype,fa=sa.setProperty;oa.setAttribute=function(n,t){ca.call(this,n,t+"")},oa.setAttributeNS=function(n,t,e){la.call(this,n,t,e+"")},sa.setProperty=function(n,t,e){fa.call(this,n,t+"",e)}}ta.ascending=e,ta.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:NaN},ta.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},ta.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},ta.extent=function(n,t){var e,r,u,i=-1,a=n.length;if(1===arguments.length){for(;++i<a;)if(null!=(r=n[i])&&r>=r){e=u=r;break}for(;++i<a;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<a;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=u=r;break}for(;++i<a;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},ta.sum=function(n,t){var e,r=0,i=n.length,a=-1;if(1===arguments.length)for(;++a<i;)u(e=+n[a])&&(r+=e);else for(;++a<i;)u(e=+t.call(n,n[a],a))&&(r+=e);return r},ta.mean=function(n,t){var e,i=0,a=n.length,o=-1,c=a;if(1===arguments.length)for(;++o<a;)u(e=r(n[o]))?i+=e:--c;else for(;++o<a;)u(e=r(t.call(n,n[o],o)))?i+=e:--c;return c?i/c:void 0},ta.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},ta.median=function(n,t){var i,a=[],o=n.length,c=-1;if(1===arguments.length)for(;++c<o;)u(i=r(n[c]))&&a.push(i);else for(;++c<o;)u(i=r(t.call(n,n[c],c)))&&a.push(i);return a.length?ta.quantile(a.sort(e),.5):void 0},ta.variance=function(n,t){var e,i,a=n.length,o=0,c=0,l=-1,s=0;if(1===arguments.length)for(;++l<a;)u(e=r(n[l]))&&(i=e-o,o+=i/++s,c+=i*(e-o));else for(;++l<a;)u(e=r(t.call(n,n[l],l)))&&(i=e-o,o+=i/++s,c+=i*(e-o));return s>1?c/(s-1):void 0},ta.deviation=function(){var n=ta.variance.apply(this,arguments);return n?Math.sqrt(n):n};var ha=i(e);ta.bisectLeft=ha.left,ta.bisect=ta.bisectRight=ha.right,ta.bisector=function(n){return i(1===n.length?function(t,r){return e(n(t),r)}:n)},ta.shuffle=function(n,t,e){(i=arguments.length)<3&&(e=n.length,2>i&&(t=0));for(var r,u,i=e-t;i;)u=Math.random()*i--|0,r=n[i+t],n[i+t]=n[u+t],n[u+t]=r;return n},ta.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},ta.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},ta.zip=function(){if(!(r=arguments.length))return[];for(var n=-1,t=ta.min(arguments,a),e=new Array(t);++n<t;)for(var r,u=-1,i=e[n]=new Array(r);++u<r;)i[u]=arguments[u][n];return e},ta.transpose=function(n){return ta.zip.apply(ta,n)},ta.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ta.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ta.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ta.merge=function(n){for(var t,e,r,u=n.length,i=-1,a=0;++i<u;)a+=n[i].length;for(e=new Array(a);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--a]=r[t];return e};var ga=Math.abs;ta.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),(t-n)/e===1/0)throw new Error("infinite range");var r,u=[],i=o(ga(e)),a=-1;if(n*=i,t*=i,e*=i,0>e)for(;(r=n+e*++a)>t;)u.push(r/i);else for(;(r=n+e*++a)<t;)u.push(r/i);return u},ta.map=function(n,t){var e=new l;if(n instanceof l)n.forEach(function(n,t){e.set(n,t)});else if(Array.isArray(n)){var r,u=-1,i=n.length;if(1===arguments.length)for(;++u<i;)e.set(u,n[u]);else for(;++u<i;)e.set(t.call(n,r=n[u],u),r)}else for(var a in n)e.set(a,n[a]);return e};var pa="__proto__",va="\x00";c(l,{has:h,get:function(n){return this._[s(n)]},set:function(n,t){return this._[s(n)]=t},remove:g,keys:p,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:f(t),value:this._[t]});return n},size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,f(t),this._[t])}}),ta.nest=function(){function n(t,a,o){if(o>=i.length)return r?r.call(u,a):e?a.sort(e):a;for(var c,s,f,h,g=-1,p=a.length,v=i[o++],d=new l;++g<p;)(h=d.get(c=v(s=a[g])))?h.push(s):d.set(c,[s]);return t?(s=t(),f=function(e,r){s.set(e,n(t,r,o))}):(s={},f=function(e,r){s[e]=n(t,r,o)}),d.forEach(f),s}function t(n,e){if(e>=i.length)return n;var r=[],u=a[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],a=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(ta.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return a[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},ta.set=function(n){var t=new m;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},c(m,{has:h,add:function(n){return this._[s(n+="")]=!0,n},remove:g,values:p,size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,f(t))}}),ta.behavior={},ta.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=M(n,t,t[e]);return n};var da=["webkit","ms","moz","Moz","o","O"];ta.dispatch=function(){for(var n=new _,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=w(n);return n},_.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ta.event=null,ta.requote=function(n){return n.replace(ma,"\\$&")};var ma=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,ya={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},Ma=function(n,t){return t.querySelector(n)},xa=function(n,t){return t.querySelectorAll(n)},ba=function(n,t){var e=n.matches||n[x(n,"matchesSelector")];return(ba=function(n,t){return e.call(n,t)})(n,t)};"function"==typeof Sizzle&&(Ma=function(n,t){return Sizzle(n,t)[0]||null},xa=Sizzle,ba=Sizzle.matchesSelector),ta.selection=function(){return ta.select(ua.documentElement)};var _a=ta.selection.prototype=[];_a.select=function(n){var t,e,r,u,i=[];n=A(n);for(var a=-1,o=this.length;++a<o;){i.push(t=[]),t.parentNode=(r=this[a]).parentNode;for(var c=-1,l=r.length;++c<l;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,a)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return E(i)},_a.selectAll=function(n){var t,e,r=[];n=C(n);for(var u=-1,i=this.length;++u<i;)for(var a=this[u],o=-1,c=a.length;++o<c;)(e=a[o])&&(r.push(t=ra(n.call(e,e.__data__,o,u))),t.parentNode=e);return E(r)};var wa={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};ta.ns={prefix:wa,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.slice(0,t),n=n.slice(t+1)),wa.hasOwnProperty(e)?{space:wa[e],local:n}:n}},_a.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=ta.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(z(t,n[t]));return this}return this.each(z(n,t))},_a.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=T(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!q(n[u]).test(t))return!1;return!0}for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},_a.style=function(n,e,r){var u=arguments.length;if(3>u){if("string"!=typeof n){2>u&&(e="");for(r in n)this.each(P(r,n[r],e));return this}if(2>u){var i=this.node();return t(i).getComputedStyle(i,null).getPropertyValue(n)}r=""}return this.each(P(n,e,r))},_a.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(U(t,n[t]));return this}return this.each(U(n,t))},_a.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},_a.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},_a.append=function(n){return n=j(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},_a.insert=function(n,t){return n=j(n),t=A(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},_a.remove=function(){return this.each(F)},_a.data=function(n,t){function e(n,e){var r,u,i,a=n.length,f=e.length,h=Math.min(a,f),g=new Array(f),p=new Array(f),v=new Array(a);if(t){var d,m=new l,y=new Array(a);for(r=-1;++r<a;)m.has(d=t.call(u=n[r],u.__data__,r))?v[r]=u:m.set(d,u),y[r]=d;for(r=-1;++r<f;)(u=m.get(d=t.call(e,i=e[r],r)))?u!==!0&&(g[r]=u,u.__data__=i):p[r]=H(i),m.set(d,!0);for(r=-1;++r<a;)m.get(y[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=H(i);for(;f>r;++r)p[r]=H(e[r]);for(;a>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,o.push(p),c.push(g),s.push(v)}var r,u,i=-1,a=this.length;if(!arguments.length){for(n=new Array(a=(r=this[0]).length);++i<a;)(u=r[i])&&(n[i]=u.__data__);return n}var o=Z([]),c=E([]),s=E([]);if("function"==typeof n)for(;++i<a;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<a;)e(r=this[i],n);return c.enter=function(){return o},c.exit=function(){return s},c},_a.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},_a.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=O(n));for(var i=0,a=this.length;a>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var o=0,c=e.length;c>o;o++)(r=e[o])&&n.call(r,r.__data__,o,i)&&t.push(r)}return E(u)},_a.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},_a.sort=function(n){n=I.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},_a.each=function(n){return Y(this,function(t,e,r){n.call(t,t.__data__,e,r)})},_a.call=function(n){var t=ra(arguments);return n.apply(t[0]=this,t),this},_a.empty=function(){return!this.node()},_a.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},_a.size=function(){var n=0;return Y(this,function(){++n}),n};var Sa=[];ta.selection.enter=Z,ta.selection.enter.prototype=Sa,Sa.append=_a.append,Sa.empty=_a.empty,Sa.node=_a.node,Sa.call=_a.call,Sa.size=_a.size,Sa.select=function(n){for(var t,e,r,u,i,a=[],o=-1,c=this.length;++o<c;){r=(u=this[o]).update,a.push(t=[]),t.parentNode=u.parentNode;for(var l=-1,s=u.length;++l<s;)(i=u[l])?(t.push(r[l]=e=n.call(u.parentNode,i.__data__,l,o)),e.__data__=i.__data__):t.push(null)}return E(a)},Sa.insert=function(n,t){return arguments.length<2&&(t=V(this)),_a.insert.call(this,n,t)},ta.select=function(t){var e;return"string"==typeof t?(e=[Ma(t,ua)],e.parentNode=ua.documentElement):(e=[t],e.parentNode=n(t)),E([e])},ta.selectAll=function(n){var t;return"string"==typeof n?(t=ra(xa(n,ua)),t.parentNode=ua.documentElement):(t=n,t.parentNode=null),E([t])},_a.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(X(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(X(n,t,e))};var ka=ta.map({mouseenter:"mouseover",mouseleave:"mouseout"});ua&&ka.forEach(function(n){"on"+n in ua&&ka.remove(n)});var Na,Ea=0;ta.mouse=function(n){return J(n,k())};var Aa=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0;ta.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=k().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return J(n,r)},ta.behavior.drag=function(){function n(){this.on("mousedown.drag",i).on("touchstart.drag",a)}function e(n,t,e,i,a){return function(){function o(){var n,e,r=t(h,v);r&&(n=r[0]-M[0],e=r[1]-M[1],p|=n|e,M=r,g({type:"drag",x:r[0]+l[0],y:r[1]+l[1],dx:n,dy:e}))}function c(){t(h,v)&&(m.on(i+d,null).on(a+d,null),y(p&&ta.event.target===f),g({type:"dragend"}))}var l,s=this,f=ta.event.target,h=s.parentNode,g=r.of(s,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=ta.select(e(f)).on(i+d,o).on(a+d,c),y=W(f),M=t(h,v);u?(l=u.apply(s,arguments),l=[l.x-M[0],l.y-M[1]]):l=[0,0],g({type:"dragstart"})}}var r=N(n,"drag","dragstart","dragend"),u=null,i=e(b,ta.mouse,t,"mousemove","mouseup"),a=e(G,ta.touch,y,"touchmove","touchend");return n.origin=function(t){return arguments.length?(u=t,n):u},ta.rebind(n,r,"on")},ta.touches=function(n,t){return arguments.length<2&&(t=k().touches),t?ra(t).map(function(t){var e=J(n,t);return e.identifier=t.identifier,e}):[]};var Ca=1e-6,za=Ca*Ca,La=Math.PI,qa=2*La,Ta=qa-Ca,Ra=La/2,Da=La/180,Pa=180/La,Ua=Math.SQRT2,ja=2,Fa=4;ta.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=rn(v),a=i/(ja*h)*(e*un(Ua*t+v)-en(v));return[r+a*l,u+a*s,i*e/rn(Ua*t+v)]}return[r+n*l,u+n*s,i*Math.exp(Ua*t)]}var r=n[0],u=n[1],i=n[2],a=t[0],o=t[1],c=t[2],l=a-r,s=o-u,f=l*l+s*s,h=Math.sqrt(f),g=(c*c-i*i+Fa*f)/(2*i*ja*h),p=(c*c-i*i-Fa*f)/(2*c*ja*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/Ua;return e.duration=1e3*y,e},ta.behavior.zoom=function(){function n(n){n.on(L,f).on(Oa+".zoom",g).on("dblclick.zoom",p).on(R,h)}function e(n){return[(n[0]-k.x)/k.k,(n[1]-k.y)/k.k]}function r(n){return[n[0]*k.k+k.x,n[1]*k.k+k.y]}function u(n){k.k=Math.max(A[0],Math.min(A[1],n))}function i(n,t){t=r(t),k.x+=n[0]-t[0],k.y+=n[1]-t[1]}function a(t,e,r,a){t.__chart__={x:k.x,y:k.y,k:k.k},u(Math.pow(2,a)),i(d=e,r),t=ta.select(t),C>0&&(t=t.transition().duration(C)),t.call(n.event)}function o(){b&&b.domain(x.range().map(function(n){return(n-k.x)/k.k}).map(x.invert)),w&&w.domain(_.range().map(function(n){return(n-k.y)/k.k}).map(_.invert))}function c(n){z++||n({type:"zoomstart"})}function l(n){o(),n({type:"zoom",scale:k.k,translate:[k.x,k.y]})}function s(n){--z||(n({type:"zoomend"}),d=null)}function f(){function n(){f=1,i(ta.mouse(u),g),l(o)}function r(){h.on(q,null).on(T,null),p(f&&ta.event.target===a),s(o)}var u=this,a=ta.event.target,o=D.of(u,arguments),f=0,h=ta.select(t(u)).on(q,n).on(T,r),g=e(ta.mouse(u)),p=W(u);Pc.call(u),c(o)}function h(){function n(){var n=ta.touches(p);return g=k.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=e(n))}),n}function t(){var t=ta.event.target;ta.select(t).on(x,r).on(b,o),_.push(t);for(var e=ta.event.changedTouches,u=0,i=e.length;i>u;++u)d[e[u].identifier]=null;var c=n(),l=Date.now();if(1===c.length){if(500>l-M){var s=c[0];a(p,s,d[s.identifier],Math.floor(Math.log(k.k)/Math.LN2)+1),S()}M=l}else if(c.length>1){var s=c[0],f=c[1],h=s[0]-f[0],g=s[1]-f[1];m=h*h+g*g}}function r(){var n,t,e,r,a=ta.touches(p);Pc.call(p);for(var o=0,c=a.length;c>o;++o,r=null)if(e=a[o],r=d[e.identifier]){if(t)break;n=e,t=r}if(r){var s=(s=e[0]-n[0])*s+(s=e[1]-n[1])*s,f=m&&Math.sqrt(s/m);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+r[0])/2,(t[1]+r[1])/2],u(f*g)}M=null,i(n,t),l(v)}function o(){if(ta.event.touches.length){for(var t=ta.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var u in d)return void n()}ta.selectAll(_).on(y,null),w.on(L,f).on(R,h),N(),s(v)}var g,p=this,v=D.of(p,arguments),d={},m=0,y=".zoom-"+ta.event.changedTouches[0].identifier,x="touchmove"+y,b="touchend"+y,_=[],w=ta.select(p),N=W(p);t(),c(v),w.on(L,null).on(R,t)}function g(){var n=D.of(this,arguments);y?clearTimeout(y):(Pc.call(this),v=e(d=m||ta.mouse(this)),c(n)),y=setTimeout(function(){y=null,s(n)},50),S(),u(Math.pow(2,.002*Ha())*k.k),i(d,v),l(n)}function p(){var n=ta.mouse(this),t=Math.log(k.k)/Math.LN2;a(this,n,e(n),ta.event.shiftKey?Math.ceil(t)-1:Math.floor(t)+1)}var v,d,m,y,M,x,b,_,w,k={x:0,y:0,k:1},E=[960,500],A=Ia,C=250,z=0,L="mousedown.zoom",q="mousemove.zoom",T="mouseup.zoom",R="touchstart.zoom",D=N(n,"zoomstart","zoom","zoomend");return Oa||(Oa="onwheel"in ua?(Ha=function(){return-ta.event.deltaY*(ta.event.deltaMode?120:1)},"wheel"):"onmousewheel"in ua?(Ha=function(){return ta.event.wheelDelta},"mousewheel"):(Ha=function(){return-ta.event.detail},"MozMousePixelScroll")),n.event=function(n){n.each(function(){var n=D.of(this,arguments),t=k;Rc?ta.select(this).transition().each("start.zoom",function(){k=this.__chart__||{x:0,y:0,k:1},c(n)}).tween("zoom:zoom",function(){var e=E[0],r=E[1],u=d?d[0]:e/2,i=d?d[1]:r/2,a=ta.interpolateZoom([(u-k.x)/k.k,(i-k.y)/k.k,e/k.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=a(t),o=e/r[2];this.__chart__=k={x:u-r[0]*o,y:i-r[1]*o,k:o},l(n)}}).each("interrupt.zoom",function(){s(n)}).each("end.zoom",function(){s(n)}):(this.__chart__=k,c(n),l(n),s(n))})},n.translate=function(t){return arguments.length?(k={x:+t[0],y:+t[1],k:k.k},o(),n):[k.x,k.y]},n.scale=function(t){return arguments.length?(k={x:k.x,y:k.y,k:+t},o(),n):k.k},n.scaleExtent=function(t){return arguments.length?(A=null==t?Ia:[+t[0],+t[1]],n):A},n.center=function(t){return arguments.length?(m=t&&[+t[0],+t[1]],n):m},n.size=function(t){return arguments.length?(E=t&&[+t[0],+t[1]],n):E},n.duration=function(t){return arguments.length?(C=+t,n):C},n.x=function(t){return arguments.length?(b=t,x=t.copy(),k={x:0,y:0,k:1},n):b},n.y=function(t){return arguments.length?(w=t,_=t.copy(),k={x:0,y:0,k:1},n):w},ta.rebind(n,D,"on")};var Ha,Oa,Ia=[0,1/0];ta.color=on,on.prototype.toString=function(){return this.rgb()+""},ta.hsl=cn;var Ya=cn.prototype=new on;Ya.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new cn(this.h,this.s,this.l/n)},Ya.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new cn(this.h,this.s,n*this.l)},Ya.rgb=function(){return ln(this.h,this.s,this.l)},ta.hcl=sn;var Za=sn.prototype=new on;Za.brighter=function(n){return new sn(this.h,this.c,Math.min(100,this.l+Va*(arguments.length?n:1)))},Za.darker=function(n){return new sn(this.h,this.c,Math.max(0,this.l-Va*(arguments.length?n:1)))},Za.rgb=function(){return fn(this.h,this.c,this.l).rgb()},ta.lab=hn;var Va=18,Xa=.95047,$a=1,Ba=1.08883,Wa=hn.prototype=new on;Wa.brighter=function(n){return new hn(Math.min(100,this.l+Va*(arguments.length?n:1)),this.a,this.b)},Wa.darker=function(n){return new hn(Math.max(0,this.l-Va*(arguments.length?n:1)),this.a,this.b)},Wa.rgb=function(){return gn(this.l,this.a,this.b)},ta.rgb=yn;var Ja=yn.prototype=new on;Ja.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),new yn(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new yn(u,u,u)},Ja.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new yn(n*this.r,n*this.g,n*this.b)},Ja.hsl=function(){return wn(this.r,this.g,this.b)},Ja.toString=function(){return"#"+bn(this.r)+bn(this.g)+bn(this.b)};var Ga=ta.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});Ga.forEach(function(n,t){Ga.set(n,Mn(t))}),ta.functor=En,ta.xhr=An(y),ta.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var a=Cn(n,t,null==e?r:u(e),i);return a.row=function(n){return arguments.length?a.response(null==(e=n)?r:u(n)):e},a}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(a).join(n)}function a(n){return o.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var o=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(s>=l)return a;if(u)return u=!1,i;var t=s;if(34===n.charCodeAt(t)){for(var e=t;e++<l;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}s=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++s):10===r&&(u=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;l>s;){var r=n.charCodeAt(s++),o=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(s)&&(++s,++o);else if(r!==c)continue;return n.slice(t,s-o)}return n.slice(t)}for(var r,u,i={},a={},o=[],l=n.length,s=0,f=0;(r=e())!==a;){for(var h=[];r!==i&&r!==a;)h.push(r),r=e();t&&null==(h=t(h,f++))||o.push(h)}return o},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new m,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(a).join(n)].concat(t.map(function(t){return u.map(function(n){return a(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},ta.csv=ta.dsv(",","text/csv"),ta.tsv=ta.dsv("	","text/tab-separated-values");var Ka,Qa,no,to,eo,ro=this[x(this,"requestAnimationFrame")]||function(n){setTimeout(n,17)};ta.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};Qa?Qa.n=i:Ka=i,Qa=i,no||(to=clearTimeout(to),no=1,ro(qn))},ta.timer.flush=function(){Tn(),Rn()},ta.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var uo=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Pn);ta.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=ta.round(n,Dn(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),uo[8+e/3]};var io=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,ao=ta.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ta.round(n,Dn(n,t))).toFixed(Math.max(0,Math.min(20,Dn(n*(1+1e-15),t))))}}),oo=ta.time={},co=Date;Fn.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){lo.setUTCDate.apply(this._,arguments)},setDay:function(){lo.setUTCDay.apply(this._,arguments)},setFullYear:function(){lo.setUTCFullYear.apply(this._,arguments)},setHours:function(){lo.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){lo.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){lo.setUTCMinutes.apply(this._,arguments)},setMonth:function(){lo.setUTCMonth.apply(this._,arguments)},setSeconds:function(){lo.setUTCSeconds.apply(this._,arguments)},setTime:function(){lo.setTime.apply(this._,arguments)}};var lo=Date.prototype;oo.year=Hn(function(n){return n=oo.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),oo.years=oo.year.range,oo.years.utc=oo.year.utc.range,oo.day=Hn(function(n){var t=new co(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),oo.days=oo.day.range,oo.days.utc=oo.day.utc.range,oo.dayOfYear=function(n){var t=oo.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=oo[n]=Hn(function(n){return(n=oo.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=oo.year(n).getDay();return Math.floor((oo.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});oo[n+"s"]=e.range,oo[n+"s"].utc=e.utc.range,oo[n+"OfYear"]=function(n){var e=oo.year(n).getDay();return Math.floor((oo.dayOfYear(n)+(e+t)%7)/7)}}),oo.week=oo.sunday,oo.weeks=oo.sunday.range,oo.weeks.utc=oo.sunday.utc.range,oo.weekOfYear=oo.sundayOfYear;var so={"-":"",_:" ",0:"0"},fo=/^\s*\d+/,ho=/^%/;ta.locale=function(n){return{numberFormat:Un(n),timeFormat:In(n)}};var go=ta.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});ta.format=go.numberFormat,ta.geo={},lt.prototype={s:0,t:0,add:function(n){
st(n,this.t,po),st(po.s,this.s,this),this.s?this.t+=po.t:this.s=po.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var po=new lt;ta.geo.stream=function(n,t){n&&vo.hasOwnProperty(n.type)?vo[n.type](n,t):ft(n,t)};var vo={Feature:function(n,t){ft(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)ft(e[r].geometry,t)}},mo={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){ht(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)ht(e[r],t,0)},Polygon:function(n,t){gt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)gt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)ft(e[r],t)}};ta.geo.area=function(n){return yo=0,ta.geo.stream(n,xo),yo};var yo,Mo=new lt,xo={sphere:function(){yo+=4*La},point:b,lineStart:b,lineEnd:b,polygonStart:function(){Mo.reset(),xo.lineStart=pt},polygonEnd:function(){var n=2*Mo;yo+=0>n?4*La+n:n,xo.lineStart=xo.lineEnd=xo.point=b}};ta.geo.bounds=function(){function n(n,t){M.push(x=[s=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=vt([t*Da,e*Da]);if(m){var u=mt(m,r),i=[u[1],-u[0],0],a=mt(i,u);xt(a),a=bt(a);var c=t-p,l=c>0?1:-1,v=a[0]*Pa*l,d=ga(c)>180;if(d^(v>l*p&&l*t>v)){var y=a[1]*Pa;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>l*p&&l*t>v)){var y=-a[1]*Pa;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?o(s,t)>o(s,h)&&(h=t):o(t,h)>o(s,h)&&(s=t):h>=s?(s>t&&(s=t),t>h&&(h=t)):t>p?o(s,t)>o(s,h)&&(h=t):o(t,h)>o(s,h)&&(s=t)}else n(t,e);m=r,p=t}function e(){b.point=t}function r(){x[0]=s,x[1]=h,b.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=ga(r)>180?r+(r>0?360:-360):r}else v=n,d=e;xo.point(n,e),t(n,e)}function i(){xo.lineStart()}function a(){u(v,d),xo.lineEnd(),ga(y)>Ca&&(s=-(h=180)),x[0]=s,x[1]=h,m=null}function o(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var s,f,h,g,p,v,d,m,y,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=u,b.lineStart=i,b.lineEnd=a,y=0,xo.polygonStart()},polygonEnd:function(){xo.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>Mo?(s=-(h=180),f=-(g=90)):y>Ca?g=90:-Ca>y&&(f=-90),x[0]=s,x[1]=h}};return function(n){g=h=-(s=f=1/0),M=[],ta.geo.stream(n,b);var t=M.length;if(t){M.sort(c);for(var e,r=1,u=M[0],i=[u];t>r;++r)e=M[r],l(e[0],u)||l(e[1],u)?(o(u[0],e[1])>o(u[0],u[1])&&(u[1]=e[1]),o(e[0],u[1])>o(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var a,e,p=-(1/0),t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(a=o(u[1],e[0]))>p&&(p=a,s=e[0],h=u[1])}return M=x=null,s===1/0||f===1/0?[[NaN,NaN],[NaN,NaN]]:[[s,f],[h,g]]}}(),ta.geo.centroid=function(n){bo=_o=wo=So=ko=No=Eo=Ao=Co=zo=Lo=0,ta.geo.stream(n,qo);var t=Co,e=zo,r=Lo,u=t*t+e*e+r*r;return za>u&&(t=No,e=Eo,r=Ao,Ca>_o&&(t=wo,e=So,r=ko),u=t*t+e*e+r*r,za>u)?[NaN,NaN]:[Math.atan2(e,t)*Pa,tn(r/Math.sqrt(u))*Pa]};var bo,_o,wo,So,ko,No,Eo,Ao,Co,zo,Lo,qo={sphere:b,point:wt,lineStart:kt,lineEnd:Nt,polygonStart:function(){qo.lineStart=Et},polygonEnd:function(){qo.lineStart=kt}},To=Tt(Ct,Ut,Ft,[-La,-La/2]),Ro=1e9;ta.geo.clipExtent=function(){var n,t,e,r,u,i,a={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(o){return arguments.length?(i=Yt(n=+o[0][0],t=+o[0][1],e=+o[1][0],r=+o[1][1]),u&&(u.valid=!1,u=null),a):[[n,t],[e,r]]}};return a.extent([[0,0],[960,500]])},(ta.geo.conicEqualArea=function(){return Zt(Vt)}).raw=Vt,ta.geo.albers=function(){return ta.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ta.geo.albersUsa=function(){function n(n){var i=n[0],a=n[1];return t=null,e(i,a),t||(r(i,a),t)||u(i,a),t}var t,e,r,u,i=ta.geo.albers(),a=ta.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),o=ta.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?a:u>=.166&&.234>u&&r>=-.214&&-.115>r?o:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=a.stream(n),r=o.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),a.precision(t),o.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),a.scale(.35*t),o.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var l=i.scale(),s=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[s-.455*l,f-.238*l],[s+.455*l,f+.238*l]]).stream(c).point,r=a.translate([s-.307*l,f+.201*l]).clipExtent([[s-.425*l+Ca,f+.12*l+Ca],[s-.214*l-Ca,f+.234*l-Ca]]).stream(c).point,u=o.translate([s-.205*l,f+.212*l]).clipExtent([[s-.214*l+Ca,f+.166*l+Ca],[s-.115*l-Ca,f+.234*l-Ca]]).stream(c).point,n},n.scale(1070)};var Do,Po,Uo,jo,Fo,Ho,Oo={point:b,lineStart:b,lineEnd:b,polygonStart:function(){Po=0,Oo.lineStart=Xt},polygonEnd:function(){Oo.lineStart=Oo.lineEnd=Oo.point=b,Do+=ga(Po/2)}},Io={point:$t,lineStart:b,lineEnd:b,polygonStart:b,polygonEnd:b},Yo={point:Jt,lineStart:Gt,lineEnd:Kt,polygonStart:function(){Yo.lineStart=Qt},polygonEnd:function(){Yo.point=Jt,Yo.lineStart=Gt,Yo.lineEnd=Kt}};ta.geo.path=function(){function n(n){return n&&("function"==typeof o&&i.pointRadius(+o.apply(this,arguments)),a&&a.valid||(a=u(i)),ta.geo.stream(n,a)),i.result()}function t(){return a=null,n}var e,r,u,i,a,o=4.5;return n.area=function(n){return Do=0,ta.geo.stream(n,u(Oo)),Do},n.centroid=function(n){return wo=So=ko=No=Eo=Ao=Co=zo=Lo=0,ta.geo.stream(n,u(Yo)),Lo?[Co/Lo,zo/Lo]:Ao?[No/Ao,Eo/Ao]:ko?[wo/ko,So/ko]:[NaN,NaN]},n.bounds=function(n){return Fo=Ho=-(Uo=jo=1/0),ta.geo.stream(n,u(Io)),[[Uo,jo],[Fo,Ho]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||ee(n):y,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new Bt:new ne(n),"function"!=typeof o&&i.pointRadius(o),t()):r},n.pointRadius=function(t){return arguments.length?(o="function"==typeof t?t:(i.pointRadius(+t),+t),n):o},n.projection(ta.geo.albersUsa()).context(null)},ta.geo.transform=function(n){return{stream:function(t){var e=new re(t);for(var r in n)e[r]=n[r];return e}}},re.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},ta.geo.projection=ie,ta.geo.projectionMutator=ae,(ta.geo.equirectangular=function(){return ie(ce)}).raw=ce.invert=ce,ta.geo.rotation=function(n){function t(t){return t=n(t[0]*Da,t[1]*Da),t[0]*=Pa,t[1]*=Pa,t}return n=se(n[0]%360*Da,n[1]*Da,n.length>2?n[2]*Da:0),t.invert=function(t){return t=n.invert(t[0]*Da,t[1]*Da),t[0]*=Pa,t[1]*=Pa,t},t},le.invert=ce,ta.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=se(-n[0]*Da,-n[1]*Da,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Pa,n[1]*=Pa}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=pe((t=+r)*Da,u*Da),n):t},n.precision=function(r){return arguments.length?(e=pe(t*Da,(u=+r)*Da),n):u},n.angle(90)},ta.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Da,u=n[1]*Da,i=t[1]*Da,a=Math.sin(r),o=Math.cos(r),c=Math.sin(u),l=Math.cos(u),s=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*a)*e+(e=l*s-c*f*o)*e),c*s+l*f*o)},ta.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ta.range(Math.ceil(i/d)*d,u,d).map(h).concat(ta.range(Math.ceil(l/m)*m,c,m).map(g)).concat(ta.range(Math.ceil(r/p)*p,e,p).filter(function(n){return ga(n%d)>Ca}).map(s)).concat(ta.range(Math.ceil(o/v)*v,a,v).filter(function(n){return ga(n%m)>Ca}).map(f))}var e,r,u,i,a,o,c,l,s,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],l=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),l>c&&(t=l,l=c,c=t),n.precision(y)):[[i,l],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],o=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),o>a&&(t=o,o=a,a=t),n.precision(y)):[[r,o],[e,a]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,s=de(o,a,90),f=me(r,e,y),h=de(l,c,90),g=me(i,u,y),n):y},n.majorExtent([[-180,-90+Ca],[180,90-Ca]]).minorExtent([[-180,-80-Ca],[180,80+Ca]])},ta.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=ye,u=Me;return n.distance=function(){return ta.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},ta.geo.interpolate=function(n,t){return xe(n[0]*Da,n[1]*Da,t[0]*Da,t[1]*Da)},ta.geo.length=function(n){return Zo=0,ta.geo.stream(n,Vo),Zo};var Zo,Vo={sphere:b,point:b,lineStart:be,lineEnd:b,polygonStart:b,polygonEnd:b},Xo=_e(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ta.geo.azimuthalEqualArea=function(){return ie(Xo)}).raw=Xo;var $o=_e(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},y);(ta.geo.azimuthalEquidistant=function(){return ie($o)}).raw=$o,(ta.geo.conicConformal=function(){return Zt(we)}).raw=we,(ta.geo.conicEquidistant=function(){return Zt(Se)}).raw=Se;var Bo=_e(function(n){return 1/n},Math.atan);(ta.geo.gnomonic=function(){return ie(Bo)}).raw=Bo,ke.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Ra]},(ta.geo.mercator=function(){return Ne(ke)}).raw=ke;var Wo=_e(function(){return 1},Math.asin);(ta.geo.orthographic=function(){return ie(Wo)}).raw=Wo;var Jo=_e(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ta.geo.stereographic=function(){return ie(Jo)}).raw=Jo,Ee.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Ra]},(ta.geo.transverseMercator=function(){var n=Ne(Ee),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Ee,ta.geom={},ta.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=En(e),i=En(r),a=n.length,o=[],c=[];for(t=0;a>t;t++)o.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(o.sort(Le),t=0;a>t;t++)c.push([o[t][0],-o[t][1]]);var l=ze(o),s=ze(c),f=s[0]===l[0],h=s[s.length-1]===l[l.length-1],g=[];for(t=l.length-1;t>=0;--t)g.push(n[o[l[t]][2]]);for(t=+f;t<s.length-h;++t)g.push(n[o[s[t]][2]]);return g}var e=Ae,r=Ce;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ta.geom.polygon=function(n){return ya(n,Go),n};var Go=ta.geom.polygon.prototype=[];Go.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},Go.centroid=function(n){var t,e,r=-1,u=this.length,i=0,a=0,o=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=o,o=this[r],e=t[0]*o[1]-o[0]*t[1],i+=(t[0]+o[0])*e,a+=(t[1]+o[1])*e;return[i*n,a*n]},Go.clip=function(n){for(var t,e,r,u,i,a,o=Re(n),c=-1,l=this.length-Re(this),s=this[l-1];++c<l;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-o)-1],e=-1;++e<r;)a=t[e],qe(a,s,u)?(qe(i,s,u)||n.push(Te(i,a,s,u)),n.push(a)):qe(i,s,u)&&n.push(Te(i,a,s,u)),i=a;o&&n.push(n[0]),s=u}return n};var Ko,Qo,nc,tc,ec,rc=[],uc=[];Ie.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Ze),t.length},nr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},tr.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=ir(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(rr(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ur(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(ur(this,e),n=e,e=n.U),e.C=!1,r.C=!0,rr(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,a=n.R;if(e=i?a?ir(a):i:a,u?u.L===n?u.L=e:u.R=e:this._=e,i&&a?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==a?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=a,a.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return void(n.C=!1);do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,rr(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ur(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,rr(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,ur(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,rr(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,ur(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},ta.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=o[0][0],u=o[0][1],i=o[1][0],a=o[1][1];return ar(e(n),o).cells.forEach(function(e,o){var c=e.edges,l=e.site,s=t[o]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):l.x>=r&&l.x<=i&&l.y>=u&&l.y<=a?[[r,a],[i,a],[i,u],[r,u]]:[];s.point=n[o]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Ca)*Ca,y:Math.round(a(n,t)/Ca)*Ca,i:t}})}var r=Ae,u=Ce,i=r,a=u,o=ic;return n?t(n):(t.links=function(n){return ar(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return ar(e(n)).cells.forEach(function(e,r){for(var u,i,a=e.site,o=e.edges.sort(Ze),c=-1,l=o.length,s=o[l-1].edge,f=s.l===a?s.r:s.l;++c<l;)u=s,i=f,s=o[c].edge,f=s.l===a?s.r:s.l,r<i.i&&r<f.i&&cr(a,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=En(r=n),t):r},t.y=function(n){return arguments.length?(a=En(u=n),t):u},t.clipExtent=function(n){return arguments.length?(o=null==n?ic:n,t):o===ic?null:o},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):o===ic?null:o&&o[1]},t)};var ic=[[-1e6,-1e6],[1e6,1e6]];ta.geom.delaunay=function(n){return ta.geom.voronoi().triangles(n)},ta.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,a,o){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,s=n.y;if(null!=c)if(ga(c-e)+ga(s-r)<.01)l(n,t,e,r,u,i,a,o);else{var f=n.point;n.x=n.y=n.point=null,l(n,f,c,s,u,i,a,o),l(n,t,e,r,u,i,a,o)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,u,i,a,o)}function l(n,t,e,r,u,a,o,c){var l=.5*(u+o),s=.5*(a+c),f=e>=l,h=r>=s,g=h<<1|f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=fr()),f?u=l:o=l,h?a=s:c=s,i(n,t,e,r,u,a,o,c)}var s,f,h,g,p,v,d,m,y,M=En(o),x=En(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,a)for(g=0;p>g;++g)s=n[g],s.x<v&&(v=s.x),s.y<d&&(d=s.y),s.x>m&&(m=s.x),s.y>y&&(y=s.y),f.push(s.x),h.push(s.y);else for(g=0;p>g;++g){var b=+M(s=n[g],g),_=+x(s,g);v>b&&(v=b),d>_&&(d=_),b>m&&(m=b),_>y&&(y=_),f.push(b),h.push(_)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=fr();if(k.add=function(n){i(k,n,+M(n,++g),+x(n,g),v,d,m,y)},k.visit=function(n){hr(n,k,v,d,m,y)},k.find=function(n){return gr(k,n[0],n[1],v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=s=null,k}var a,o=Ae,c=Ce;return(a=arguments.length)?(o=lr,c=sr,3===a&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(o=n,i):o},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},ta.interpolateRgb=pr,ta.interpolateObject=vr,ta.interpolateNumber=dr,ta.interpolateString=mr;var ac=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,oc=new RegExp(ac.source,"g");ta.interpolate=yr,ta.interpolators=[function(n,t){var e=typeof t;return("string"===e?Ga.has(t.toLowerCase())||/^(#|rgb\(|hsl\()/i.test(t)?pr:mr:t instanceof on?pr:Array.isArray(t)?Mr:"object"===e&&isNaN(t)?vr:dr)(n,t)}],ta.interpolateArray=Mr;var cc=function(){return y},lc=ta.map({linear:cc,poly:Nr,quad:function(){return wr},cubic:function(){return Sr},sin:function(){return Er},exp:function(){return Ar},circle:function(){return Cr},elastic:zr,back:Lr,bounce:function(){return qr}}),sc=ta.map({"in":y,out:br,"in-out":_r,"out-in":function(n){return _r(br(n))}});ta.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=lc.get(e)||cc,r=sc.get(r)||y,xr(r(e.apply(null,ea.call(arguments,1))))},ta.interpolateHcl=Tr,ta.interpolateHsl=Rr,ta.interpolateLab=Dr,ta.interpolateRound=Pr,ta.transform=function(n){var t=ua.createElementNS(ta.ns.prefix.svg,"g");return(ta.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Ur(e?e.matrix:fc)})(n)},Ur.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var fc={a:1,b:0,c:0,d:1,e:0,f:0};ta.interpolateTransform=Or,ta.layout={},ta.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Zr(n[e]));return t}},ta.layout.chord=function(){function n(){var n,l,f,h,g,p={},v=[],d=ta.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(l=0,g=-1;++g<i;)l+=u[h][g];v.push(l),m.push(ta.range(i)),n+=l}for(a&&d.sort(function(n,t){return a(v[n],v[t])}),o&&m.forEach(function(n,t){n.sort(function(n,e){return o(u[t][n],u[t][e])})}),n=(qa-s*i)/n,l=0,h=-1;++h<i;){for(f=l,g=-1;++g<i;){var y=d[h],M=m[y][g],x=u[y][M],b=l,_=l+=x*n;p[y+"-"+M]={index:y,subindex:M,startAngle:b,endAngle:_,value:x}}r[y]={index:y,startAngle:f,endAngle:l,value:(l-f)/n},l+=s}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,a,o,c,l={},s=0;return l.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,l):u},l.padding=function(n){return arguments.length?(s=n,e=r=null,l):s},l.sortGroups=function(n){return arguments.length?(a=n,e=r=null,l):a},l.sortSubgroups=function(n){return arguments.length?(o=n,e=null,l):o},l.sortChords=function(n){return arguments.length?(c=n,e&&t(),l):c},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},ta.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,a=t.cy-n.y,o=u-e,c=i*i+a*a;if(c>o*o/d){if(p>c){var l=t.charge/c;n.px-=i*l,n.py-=a*l}return!0}if(t.point&&c&&p>c){var l=t.pointCharge/c;n.px-=i*l,n.py-=a*l}}return!t.charge}}function t(n){n.px=ta.event.x,n.py=ta.event.y,o.resume()}var e,r,u,i,a,o={},c=ta.dispatch("start","tick","end"),l=[1,1],s=.9,f=hc,h=gc,g=-30,p=pc,v=.1,d=.64,m=[],M=[];return o.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,o,f,h,p,d,y,x,b=m.length,_=M.length;for(e=0;_>e;++e)o=M[e],f=o.source,h=o.target,y=h.x-f.x,x=h.y-f.y,(p=y*y+x*x)&&(p=r*i[e]*((p=Math.sqrt(p))-u[e])/p,y*=p,x*=p,h.x-=y*(d=f.weight/(h.weight+f.weight)),h.y-=x*d,f.x+=y*(d=1-d),f.y+=x*d);if((d=r*v)&&(y=l[0]/2,x=l[1]/2,e=-1,d))for(;++e<b;)o=m[e],o.x+=(y-o.x)*d,o.y+=(x-o.y)*d;if(g)for(Gr(t=ta.geom.quadtree(m),r,a),e=-1;++e<b;)(o=m[e]).fixed||t.visit(n(o));for(e=-1;++e<b;)o=m[e],o.fixed?(o.x=o.px,o.y=o.py):(o.x-=(o.px-(o.px=o.x))*s,o.y-=(o.py-(o.py=o.y))*s);c.tick({type:"tick",alpha:r})},o.nodes=function(n){return arguments.length?(m=n,o):m},o.links=function(n){return arguments.length?(M=n,o):M},o.size=function(n){return arguments.length?(l=n,o):l},o.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,o):f},o.distance=o.linkDistance,o.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,o):h},o.friction=function(n){return arguments.length?(s=+n,o):s},o.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,o):g},o.chargeDistance=function(n){return arguments.length?(p=n*n,o):Math.sqrt(p)},o.gravity=function(n){return arguments.length?(v=+n,o):v},o.theta=function(n){return arguments.length?(d=n*n,o):Math.sqrt(d)},o.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),ta.timer(o.tick)),o):r},o.start=function(){function n(n,r){if(!e){for(e=new Array(c),o=0;c>o;++o)e[o]=[];for(o=0;s>o;++o){var u=M[o];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,a=e[t],o=-1,l=a.length;++o<l;)if(!isNaN(i=a[o][n]))return i;return Math.random()*r}var t,e,r,c=m.length,s=M.length,p=l[0],v=l[1];for(t=0;c>t;++t)(r=m[t]).index=t,r.weight=0;for(t=0;s>t;++t)r=M[t],"number"==typeof r.source&&(r.source=m[r.source]),"number"==typeof r.target&&(r.target=m[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=m[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;s>t;++t)u[t]=+f.call(this,M[t],t);else for(t=0;s>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;s>t;++t)i[t]=+h.call(this,M[t],t);else for(t=0;s>t;++t)i[t]=h;if(a=[],"function"==typeof g)for(t=0;c>t;++t)a[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)a[t]=g;return o.resume()},o.resume=function(){return o.alpha(.1)},o.stop=function(){return o.alpha(0)},o.drag=function(){return e||(e=ta.behavior.drag().origin(y).on("dragstart.force",$r).on("drag.force",t).on("dragend.force",Br)),arguments.length?void this.on("mouseover.force",Wr).on("mouseout.force",Jr).call(e):e},ta.rebind(o,c,"on")};var hc=20,gc=1,pc=1/0;ta.layout.hierarchy=function(){function n(u){var i,a=[u],o=[];for(u.depth=0;null!=(i=a.pop());)if(o.push(i),(l=e.call(n,i,i.depth))&&(c=l.length)){for(var c,l,s;--c>=0;)a.push(s=l[c]),s.parent=i,s.depth=i.depth+1;r&&(i.value=0),i.children=l}else r&&(i.value=+r.call(n,i,i.depth)||0),delete i.children;return nu(u,function(n){var e,u;t&&(e=n.children)&&e.sort(t),r&&(u=n.parent)&&(u.value+=n.value)}),o}var t=ru,e=tu,r=eu;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(Qr(t,function(n){n.children&&(n.value=0)}),nu(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},ta.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(a=i.length)){var a,o,c,l=-1;for(r=t.value?r/t.value:0;++l<a;)n(o=i[l],e,c=o.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var a=r.call(this,e,i);return n(a[0],0,u[0],u[1]/t(a[0])),a}var r=ta.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},Kr(e,r)},ta.layout.pie=function(){function n(a){var o,c=a.length,l=a.map(function(e,r){return+t.call(n,e,r)}),s=+("function"==typeof r?r.apply(this,arguments):r),f=("function"==typeof u?u.apply(this,arguments):u)-s,h=Math.min(Math.abs(f)/c,+("function"==typeof i?i.apply(this,arguments):i)),g=h*(0>f?-1:1),p=(f-c*g)/ta.sum(l),v=ta.range(c),d=[];return null!=e&&v.sort(e===vc?function(n,t){return l[t]-l[n]}:function(n,t){return e(a[n],a[t])}),v.forEach(function(n){d[n]={data:a[n],value:o=l[n],startAngle:s,endAngle:s+=o*p+g,padAngle:h}}),d}var t=Number,e=vc,r=0,u=qa,i=0;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n.padAngle=function(t){return arguments.length?(i=t,n):i},n};var vc={};ta.layout.stack=function(){function n(o,c){if(!(h=o.length))return o;var l=o.map(function(e,r){return t.call(n,e,r)}),s=l.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),a.call(n,t,e)]})}),f=e.call(n,s,c);l=ta.permute(l,f),s=ta.permute(s,f);var h,g,p,v,d=r.call(n,s,c),m=l[0].length;for(p=0;m>p;++p)for(u.call(n,l[0][p],v=d[p],s[0][p][1]),g=1;h>g;++g)u.call(n,l[g][p],v+=s[g-1][p][1],s[g][p][1]);return o}var t=y,e=cu,r=lu,u=ou,i=iu,a=au;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:dc.get(t)||cu,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:mc.get(t)||lu,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(a=t,n):a},n.out=function(t){return arguments.length?(u=t,n):u},n};var dc=ta.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(su),i=n.map(fu),a=ta.range(r).sort(function(n,t){return u[n]-u[t]}),o=0,c=0,l=[],s=[];for(t=0;r>t;++t)e=a[t],c>o?(o+=i[e],l.push(e)):(c+=i[e],s.push(e));return s.reverse().concat(l)},reverse:function(n){return ta.range(n.length).reverse()},"default":cu}),mc=ta.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,a=[],o=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>o&&(o=r),a.push(r)}for(e=0;i>e;++e)c[e]=(o-a[e])/2;return c},wiggle:function(n){var t,e,r,u,i,a,o,c,l,s=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=l=0,e=1;h>e;++e){for(t=0,u=0;s>t;++t)u+=n[t][e][1];for(t=0,i=0,o=f[e][0]-f[e-1][0];s>t;++t){for(r=0,a=(n[t][e][1]-n[t][e-1][1])/(2*o);t>r;++r)a+=(n[r][e][1]-n[r][e-1][1])/o;i+=a*n[t][e][1]}g[e]=c-=u?i/u*o:0,l>c&&(l=c)}for(e=0;h>e;++e)g[e]-=l;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,a=1/u,o=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=a}for(e=0;i>e;++e)o[e]=0;return o},zero:lu});ta.layout.histogram=function(){function n(n,i){for(var a,o,c=[],l=n.map(e,this),s=r.call(this,l,i),f=u.call(this,s,l,i),i=-1,h=l.length,g=f.length-1,p=t?1:1/h;++i<g;)a=c[i]=[],a.dx=f[i+1]-(a.x=f[i]),a.y=0;if(g>0)for(i=-1;++i<h;)o=l[i],o>=s[0]&&o<=s[1]&&(a=c[ta.bisect(f,o,1,g)-1],a.y+=p,a.push(n[i]));return c}var t=!0,e=Number,r=vu,u=gu;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=En(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return pu(n,t)}:En(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ta.layout.pack=function(){function n(n,i){var a=e.call(this,n,i),o=a[0],c=u[0],l=u[1],s=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(o.x=o.y=0,nu(o,function(n){n.r=+s(n.value)}),nu(o,xu),r){var f=r*(t?1:Math.max(2*o.r/c,2*o.r/l))/2;nu(o,function(n){n.r+=f}),nu(o,xu),nu(o,function(n){n.r-=f})}return wu(o,c/2,l/2,t?1:1/Math.max(2*o.r/c,2*o.r/l)),a}var t,e=ta.layout.hierarchy().sort(du),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},Kr(n,e)},ta.layout.tree=function(){function n(n,u){var s=a.call(this,n,u),f=s[0],h=t(f);if(nu(h,e),h.parent.m=-h.z,Qr(h,r),l)Qr(f,i);else{var g=f,p=f,v=f;Qr(f,function(n){n.x<g.x&&(g=n),n.x>p.x&&(p=n),n.depth>v.depth&&(v=n)});var d=o(g,p)/2-g.x,m=c[0]/(p.x+o(p,g)/2+d),y=c[1]/(v.depth||1);Qr(f,function(n){n.x=(n.x+d)*m,n.y=n.depth*y})}return s}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var u,i=t.children,a=0,o=i.length;o>a;++a)r.push((i[a]=u={_:i[a],parent:t,children:(u=i[a].children)&&u.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:a}).a=u);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Cu(n);var i=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+o(n._,r._),n.m=n.z-i):n.z=i}else r&&(n.z=r.z+o(n._,r._));n.parent.A=u(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function u(n,t,e){if(t){for(var r,u=n,i=n,a=t,c=u.parent.children[0],l=u.m,s=i.m,f=a.m,h=c.m;a=Eu(a),u=Nu(u),a&&u;)c=Nu(c),i=Eu(i),i.a=n,r=a.z+f-u.z-l+o(a._,u._),r>0&&(Au(zu(a,n,e),n,r),l+=r,s+=r),f+=a.m,l+=u.m,h+=c.m,s+=i.m;a&&!Eu(i)&&(i.t=a,i.m+=f-s),u&&!Nu(c)&&(c.t=u,c.m+=l-h,e=n)}return e}function i(n){n.x*=c[0],n.y=n.depth*c[1]}var a=ta.layout.hierarchy().sort(null).value(null),o=ku,c=[1,1],l=null;return n.separation=function(t){return arguments.length?(o=t,n):o},n.size=function(t){return arguments.length?(l=null==(c=t)?i:null,n):l?null:c},n.nodeSize=function(t){return arguments.length?(l=null==(c=t)?null:i,n):l?c:null},Kr(n,a)},ta.layout.cluster=function(){function n(n,i){var a,o=t.call(this,n,i),c=o[0],l=0;nu(c,function(n){var t=n.children;t&&t.length?(n.x=qu(t),n.y=Lu(t)):(n.x=a?l+=e(n,a):0,n.y=0,a=n)});var s=Tu(c),f=Ru(c),h=s.x-e(s,f)/2,g=f.x+e(f,s)/2;return nu(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),o}var t=ta.layout.hierarchy().sort(null).value(null),e=ku,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Kr(n,t)},ta.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var a,o,c,l=f(e),s=[],h=i.slice(),p=1/0,v="slice"===g?l.dx:"dice"===g?l.dy:"slice-dice"===g?1&e.depth?l.dy:l.dx:Math.min(l.dx,l.dy);for(n(h,l.dx*l.dy/e.value),s.area=0;(c=h.length)>0;)s.push(a=h[c-1]),s.area+=a.area,"squarify"!==g||(o=r(s,v))<=p?(h.pop(),p=o):(s.area-=s.pop().area,u(s,v,l,!1),v=Math.min(l.dx,l.dy),s.length=s.area=0,p=1/0);s.length&&(u(s,v,l,!0),s.length=s.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,a=f(t),o=r.slice(),c=[];for(n(o,a.dx*a.dy/t.value),c.area=0;i=o.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?a.dx:a.dy,a,!o.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,a=-1,o=n.length;++a<o;)(e=n[a].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,a=n.length,o=e.x,l=e.y,s=t?c(n.area/t):0;if(t==e.dx){for((r||s>e.dy)&&(s=e.dy);++i<a;)u=n[i],u.x=o,u.y=l,u.dy=s,o+=u.dx=Math.min(e.x+e.dx-o,s?c(u.area/s):0);u.z=!0,u.dx+=e.x+e.dx-o,e.y+=s,e.dy-=s}else{for((r||s>e.dx)&&(s=e.dx);++i<a;)u=n[i],u.x=o,u.y=l,u.dx=s,l+=u.dy=Math.min(e.y+e.dy-l,s?c(u.area/s):0);u.z=!1,u.dy+=e.y+e.dy-l,e.x+=s,e.dx-=s}}function i(r){var u=a||o(r),i=u[0];return i.x=0,i.y=0,i.dx=l[0],i.dy=l[1],a&&o.revalue(i),
n([i],i.dx*i.dy/i.value),(a?e:t)(i),h&&(a=u),u}var a,o=ta.layout.hierarchy(),c=Math.round,l=[1,1],s=null,f=Du,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(l=n,i):l},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Du(t):Pu(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Pu(t,n)}if(!arguments.length)return s;var r;return f=null==(s=n)?Du:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,a=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Kr(i,o)},ta.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=ta.random.normal.apply(ta,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=ta.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},ta.scale={};var yc={floor:y,ceil:y};ta.scale.linear=function(){return Yu([0,1],[0,1],yr,!1)};var Mc={s:1,g:1,p:1,r:1,e:1};ta.scale.log=function(){return Gu(ta.scale.linear().domain([0,1]),10,!0,[1,10])};var xc=ta.format(".0e"),bc={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};ta.scale.pow=function(){return Ku(ta.scale.linear(),1,[0,1])},ta.scale.sqrt=function(){return ta.scale.pow().exponent(.5)},ta.scale.ordinal=function(){return ni([],{t:"range",a:[[]]})},ta.scale.category10=function(){return ta.scale.ordinal().range(_c)},ta.scale.category20=function(){return ta.scale.ordinal().range(wc)},ta.scale.category20b=function(){return ta.scale.ordinal().range(Sc)},ta.scale.category20c=function(){return ta.scale.ordinal().range(kc)};var _c=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(xn),wc=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(xn),Sc=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(xn),kc=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(xn);ta.scale.quantile=function(){return ti([],[])},ta.scale.quantize=function(){return ei(0,1,[0,1])},ta.scale.threshold=function(){return ri([.5],[0,1])},ta.scale.identity=function(){return ui([0,1])},ta.svg={},ta.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),l=Math.max(0,+r.apply(this,arguments)),s=a.apply(this,arguments)-Ra,f=o.apply(this,arguments)-Ra,h=Math.abs(f-s),g=s>f?0:1;if(n>l&&(p=l,l=n,n=p),h>=Ta)return t(l,g)+(n?t(n,1-g):"")+"Z";var p,v,d,m,y,M,x,b,_,w,S,k,N=0,E=0,A=[];if((m=(+c.apply(this,arguments)||0)/2)&&(d=i===Nc?Math.sqrt(n*n+l*l):+i.apply(this,arguments),g||(E*=-1),l&&(E=tn(d/l*Math.sin(m))),n&&(N=tn(d/n*Math.sin(m)))),l){y=l*Math.cos(s+E),M=l*Math.sin(s+E),x=l*Math.cos(f-E),b=l*Math.sin(f-E);var C=Math.abs(f-s-2*E)<=La?0:1;if(E&&fi(y,M,x,b)===g^C){var z=(s+f)/2;y=l*Math.cos(z),M=l*Math.sin(z),x=b=null}}else y=M=0;if(n){_=n*Math.cos(f-N),w=n*Math.sin(f-N),S=n*Math.cos(s+N),k=n*Math.sin(s+N);var L=Math.abs(s-f+2*N)<=La?0:1;if(N&&fi(_,w,S,k)===1-g^L){var q=(s+f)/2;_=n*Math.cos(q),w=n*Math.sin(q),S=k=null}}else _=w=0;if((p=Math.min(Math.abs(l-n)/2,+u.apply(this,arguments)))>.001){v=l>n^g?0:1;var T=null==S?[_,w]:null==x?[y,M]:Te([y,M],[S,k],[x,b],[_,w]),R=y-T[0],D=M-T[1],P=x-T[0],U=b-T[1],j=1/Math.sin(Math.acos((R*P+D*U)/(Math.sqrt(R*R+D*D)*Math.sqrt(P*P+U*U)))/2),F=Math.sqrt(T[0]*T[0]+T[1]*T[1]);if(null!=x){var H=Math.min(p,(l-F)/(j+1)),O=hi(null==S?[_,w]:[S,k],[y,M],l,H,g),I=hi([x,b],[_,w],l,H,g);p===H?A.push("M",O[0],"A",H,",",H," 0 0,",v," ",O[1],"A",l,",",l," 0 ",1-g^fi(O[1][0],O[1][1],I[1][0],I[1][1]),",",g," ",I[1],"A",H,",",H," 0 0,",v," ",I[0]):A.push("M",O[0],"A",H,",",H," 0 1,",v," ",I[0])}else A.push("M",y,",",M);if(null!=S){var Y=Math.min(p,(n-F)/(j-1)),Z=hi([y,M],[S,k],n,-Y,g),V=hi([_,w],null==x?[y,M]:[x,b],n,-Y,g);p===Y?A.push("L",V[0],"A",Y,",",Y," 0 0,",v," ",V[1],"A",n,",",n," 0 ",g^fi(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-g," ",Z[1],"A",Y,",",Y," 0 0,",v," ",Z[0]):A.push("L",V[0],"A",Y,",",Y," 0 0,",v," ",Z[0])}else A.push("L",_,",",w)}else A.push("M",y,",",M),null!=x&&A.push("A",l,",",l," 0 ",C,",",g," ",x,",",b),A.push("L",_,",",w),null!=S&&A.push("A",n,",",n," 0 ",L,",",1-g," ",S,",",k);return A.push("Z"),A.join("")}function t(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}var e=ai,r=oi,u=ii,i=Nc,a=ci,o=li,c=si;return n.innerRadius=function(t){return arguments.length?(e=En(t),n):e},n.outerRadius=function(t){return arguments.length?(r=En(t),n):r},n.cornerRadius=function(t){return arguments.length?(u=En(t),n):u},n.padRadius=function(t){return arguments.length?(i=t==Nc?Nc:En(t),n):i},n.startAngle=function(t){return arguments.length?(a=En(t),n):a},n.endAngle=function(t){return arguments.length?(o=En(t),n):o},n.padAngle=function(t){return arguments.length?(c=En(t),n):c},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+a.apply(this,arguments)+ +o.apply(this,arguments))/2-Ra;return[Math.cos(t)*n,Math.sin(t)*n]},n};var Nc="auto";ta.svg.line=function(){return gi(y)};var Ec=ta.map({linear:pi,"linear-closed":vi,step:di,"step-before":mi,"step-after":yi,basis:Si,"basis-open":ki,"basis-closed":Ni,bundle:Ei,cardinal:bi,"cardinal-open":Mi,"cardinal-closed":xi,monotone:Ti});Ec.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Ac=[0,2/3,1/3,0],Cc=[0,1/3,2/3,0],zc=[0,1/6,2/3,1/6];ta.svg.line.radial=function(){var n=gi(Ri);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},mi.reverse=yi,yi.reverse=mi,ta.svg.area=function(){return Di(y)},ta.svg.area.radial=function(){var n=Di(Ri);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ta.svg.chord=function(n){function t(t,l){var s=e(this,o,t,l),f=e(this,c,t,l,1-n);return"M"+s.p0+u(s.r,s.p1,s.a1-s.a0)+(r(s,f)?i(s.r,s.p1,s.r,s.p0):i(s.r,s.p1,f.r,f.p0)+(0===n?u(f.r,f.p1,f.a1-f.a0):a(f.pMid,f.p1))+i(f.r,f.p1,s.r,s.p0))+"Z"}function e(n,t,e,r,u){u||(u=1);var i=t.call(n,e,r),a=l.call(n,i,r),o=s.call(n,i,r)-Ra,c=f.call(n,i,r)-Ra,h=(c-o)/2+o;return{r:a,a0:o,a1:c,p0:[a*u*Math.cos(o),a*u*Math.sin(o)],p1:[a*u*Math.cos(c),a*u*Math.sin(c)],pMid:[a*Math.cos(h),a*Math.sin(h)]}}function r(n,t){return n.a0==t.a0&&n.a1==t.a1}function u(n,t,e){return"A"+n+","+n+" 0 "+ +(e>La)+",1 "+t}function i(n,t,e,r){return"Q 0,0 "+r}function a(n,t){return"L"+n+"L"+t}var o=ye,c=Me,l=Pi,s=ci,f=li;return n||(n=0),t.radius=function(n){return arguments.length?(l=En(n),t):l},t.source=function(n){return arguments.length?(o=En(n),t):o},t.target=function(n){return arguments.length?(c=En(n),t):c},t.startAngle=function(n){return arguments.length?(s=En(n),t):s},t.endAngle=function(n){return arguments.length?(f=En(n),t):f},t},ta.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),a=e.call(this,n,u),o=(i.y+a.y)/2,c=[i,{x:i.x,y:o},{x:a.x,y:o},a];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=ye,e=Me,r=Ui;return n.source=function(e){return arguments.length?(t=En(e),n):t},n.target=function(t){return arguments.length?(e=En(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ta.svg.diagonal.radial=function(){var n=ta.svg.diagonal(),t=Ui,e=n.projection;return n.projection=function(n){return arguments.length?e(ji(t=n)):t},n},ta.svg.symbol=function(){function n(n,r){return(Lc.get(t.call(this,n,r))||Oi)(e.call(this,n,r))}var t=Hi,e=Fi;return n.type=function(e){return arguments.length?(t=En(e),n):t},n.size=function(t){return arguments.length?(e=En(t),n):e},n};var Lc=ta.map({circle:Oi,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Tc)),e=t*Tc;return"M0,"+-t+"L"+e+",0 0,"+t+" "+-e+",0Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/qc),e=t*qc/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/qc),e=t*qc/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});ta.svg.symbolTypes=Lc.keys();var qc=Math.sqrt(3),Tc=Math.tan(30*Da);_a.transition=function(n){for(var t,e,r=Rc||++jc,u=Xi(n),i=[],a=Dc||{time:Date.now(),ease:kr,delay:0,duration:250},o=-1,c=this.length;++o<c;){i.push(t=[]);for(var l=this[o],s=-1,f=l.length;++s<f;)(e=l[s])&&$i(e,s,u,r,a),t.push(e)}return Yi(i,u,r)},_a.interrupt=function(n){return this.each(null==n?Pc:Ii(Xi(n)))};var Rc,Dc,Pc=Ii(Xi()),Uc=[],jc=0;Uc.call=_a.call,Uc.empty=_a.empty,Uc.node=_a.node,Uc.size=_a.size,ta.transition=function(n,t){return n&&n.transition?Rc?n.transition(t):n:ta.selection().transition(n)},ta.transition.prototype=Uc,Uc.select=function(n){var t,e,r,u=this.id,i=this.namespace,a=[];n=A(n);for(var o=-1,c=this.length;++o<c;){a.push(t=[]);for(var l=this[o],s=-1,f=l.length;++s<f;)(r=l[s])&&(e=n.call(r,r.__data__,s,o))?("__data__"in r&&(e.__data__=r.__data__),$i(e,s,i,u,r[i][u]),t.push(e)):t.push(null)}return Yi(a,i,u)},Uc.selectAll=function(n){var t,e,r,u,i,a=this.id,o=this.namespace,c=[];n=C(n);for(var l=-1,s=this.length;++l<s;)for(var f=this[l],h=-1,g=f.length;++h<g;)if(r=f[h]){i=r[o][a],e=n.call(r,r.__data__,h,l),c.push(t=[]);for(var p=-1,v=e.length;++p<v;)(u=e[p])&&$i(u,p,o,a,i),t.push(u)}return Yi(c,o,a)},Uc.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=O(n));for(var i=0,a=this.length;a>i;i++){u.push(t=[]);for(var e=this[i],o=0,c=e.length;c>o;o++)(r=e[o])&&n.call(r,r.__data__,o,i)&&t.push(r)}return Yi(u,this.namespace,this.id)},Uc.tween=function(n,t){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(n):Y(this,null==t?function(t){t[r][e].tween.remove(n)}:function(u){u[r][e].tween.set(n,t)})},Uc.attr=function(n,t){function e(){this.removeAttribute(o)}function r(){this.removeAttributeNS(o.space,o.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(o);return e!==n&&(t=a(e,n),function(n){this.setAttribute(o,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(o.space,o.local);return e!==n&&(t=a(e,n),function(n){this.setAttributeNS(o.space,o.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var a="transform"==n?Or:yr,o=ta.ns.qualify(n);return Zi(this,"attr."+n,t,o.local?i:u)},Uc.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=ta.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Uc.style=function(n,e,r){function u(){this.style.removeProperty(n)}function i(e){return null==e?u:(e+="",function(){var u,i=t(this).getComputedStyle(this,null).getPropertyValue(n);return i!==e&&(u=yr(i,e),function(t){this.style.setProperty(n,u(t),r)})})}var a=arguments.length;if(3>a){if("string"!=typeof n){2>a&&(e="");for(r in n)this.style(r,n[r],e);return this}r=""}return Zi(this,"style."+n,e,i)},Uc.styleTween=function(n,e,r){function u(u,i){var a=e.call(this,u,i,t(this).getComputedStyle(this,null).getPropertyValue(n));return a&&function(t){this.style.setProperty(n,a(t),r)}}return arguments.length<3&&(r=""),this.tween("style."+n,u)},Uc.text=function(n){return Zi(this,"text",n,Vi)},Uc.remove=function(){var n=this.namespace;return this.each("end.transition",function(){var t;this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Uc.ease=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=ta.ease.apply(ta,arguments)),Y(this,function(r){r[e][t].ease=n}))},Uc.delay=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].delay:Y(this,"function"==typeof n?function(r,u,i){r[e][t].delay=+n.call(r,r.__data__,u,i)}:(n=+n,function(r){r[e][t].delay=n}))},Uc.duration=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].duration:Y(this,"function"==typeof n?function(r,u,i){r[e][t].duration=Math.max(1,n.call(r,r.__data__,u,i))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Uc.each=function(n,t){var e=this.id,r=this.namespace;if(arguments.length<2){var u=Dc,i=Rc;try{Rc=e,Y(this,function(t,u,i){Dc=t[r][e],n.call(t,t.__data__,u,i)})}finally{Dc=u,Rc=i}}else Y(this,function(u){var i=u[r][e];(i.event||(i.event=ta.dispatch("start","end","interrupt"))).on(n,t)});return this},Uc.transition=function(){for(var n,t,e,r,u=this.id,i=++jc,a=this.namespace,o=[],c=0,l=this.length;l>c;c++){o.push(n=[]);for(var t=this[c],s=0,f=t.length;f>s;s++)(e=t[s])&&(r=e[a][u],$i(e,s,a,i,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return Yi(o,a,i)},ta.svg.axis=function(){function n(n){n.each(function(){var n,l=ta.select(this),s=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,o):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,o):y:t,p=l.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Ca),d=ta.transition(p.exit()).style("opacity",Ca).remove(),m=ta.transition(p.order()).style("opacity",1),M=Math.max(u,0)+a,x=ju(f),b=l.selectAll(".domain").data([0]),_=(b.enter().append("path").attr("class","domain"),ta.transition(b));v.append("line"),v.append("text");var w,S,k,N,E=v.select("line"),A=m.select("line"),C=p.select("text").text(g),z=v.select("text"),L=m.select("text"),q="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=Bi,w="x",k="y",S="x2",N="y2",C.attr("dy",0>q?"0em":".71em").style("text-anchor","middle"),_.attr("d","M"+x[0]+","+q*i+"V0H"+x[1]+"V"+q*i)):(n=Wi,w="y",k="x",S="y2",N="x2",C.attr("dy",".32em").style("text-anchor",0>q?"end":"start"),_.attr("d","M"+q*i+","+x[0]+"H0V"+x[1]+"H"+q*i)),E.attr(N,q*u),z.attr(k,q*M),A.attr(S,0).attr(N,q*u),L.attr(w,0).attr(k,q*M),f.rangeBand){var T=f,R=T.rangeBand()/2;s=f=function(n){return T(n)+R}}else s.rangeBand?s=f:d.call(n,f,s);v.call(n,s,f),m.call(n,f,f)})}var t,e=ta.scale.linear(),r=Fc,u=6,i=6,a=3,o=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Hc?t+"":Fc,n):r},n.ticks=function(){return arguments.length?(o=arguments,n):o},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(a=+t,n):a},n.tickSubdivide=function(){return arguments.length&&n},n};var Fc="bottom",Hc={top:1,right:1,bottom:1,left:1};ta.svg.brush=function(){function n(t){t.each(function(){var t=ta.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",i).on("touchstart.brush",i),a=t.selectAll(".background").data([0]);a.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),t.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var o=t.selectAll(".resize").data(v,y);o.exit().remove(),o.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Oc[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),o.style("display",n.empty()?"none":null);var c,f=ta.transition(t),h=ta.transition(a);l&&(c=ju(l),h.attr("x",c[0]).attr("width",c[1]-c[0]),r(f)),s&&(c=ju(s),h.attr("y",c[0]).attr("height",c[1]-c[0]),u(f)),e(f)})}function e(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+f[+/e$/.test(n)]+","+h[+/^s/.test(n)]+")"})}function r(n){n.select(".extent").attr("x",f[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",f[1]-f[0])}function u(n){n.select(".extent").attr("y",h[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",h[1]-h[0])}function i(){function i(){32==ta.event.keyCode&&(C||(M=null,L[0]-=f[1],L[1]-=h[1],C=2),S())}function v(){32==ta.event.keyCode&&2==C&&(L[0]+=f[1],L[1]+=h[1],C=0,S())}function d(){var n=ta.mouse(b),t=!1;x&&(n[0]+=x[0],n[1]+=x[1]),C||(ta.event.altKey?(M||(M=[(f[0]+f[1])/2,(h[0]+h[1])/2]),L[0]=f[+(n[0]<M[0])],L[1]=h[+(n[1]<M[1])]):M=null),E&&m(n,l,0)&&(r(k),t=!0),A&&m(n,s,1)&&(u(k),t=!0),t&&(e(k),w({type:"brush",mode:C?"move":"resize"}))}function m(n,t,e){var r,u,i=ju(t),c=i[0],l=i[1],s=L[e],v=e?h:f,d=v[1]-v[0];return C&&(c-=s,l-=d+s),r=(e?p:g)?Math.max(c,Math.min(l,n[e])):n[e],C?u=(r+=s)+d:(M&&(s=Math.max(c,Math.min(l,2*M[e]-r))),r>s?(u=r,r=s):u=s),v[0]!=r||v[1]!=u?(e?o=null:a=null,v[0]=r,v[1]=u,!0):void 0}function y(){d(),k.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ta.select("body").style("cursor",null),q.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),z(),w({type:"brushend"})}var M,x,b=this,_=ta.select(ta.event.target),w=c.of(b,arguments),k=ta.select(b),N=_.datum(),E=!/^(n|s)$/.test(N)&&l,A=!/^(e|w)$/.test(N)&&s,C=_.classed("extent"),z=W(b),L=ta.mouse(b),q=ta.select(t(b)).on("keydown.brush",i).on("keyup.brush",v);if(ta.event.changedTouches?q.on("touchmove.brush",d).on("touchend.brush",y):q.on("mousemove.brush",d).on("mouseup.brush",y),k.interrupt().selectAll("*").interrupt(),C)L[0]=f[0]-L[0],L[1]=h[0]-L[1];else if(N){var T=+/w$/.test(N),R=+/^n/.test(N);x=[f[1-T]-L[0],h[1-R]-L[1]],L[0]=f[T],L[1]=h[R]}else ta.event.altKey&&(M=L.slice());k.style("pointer-events","none").selectAll(".resize").style("display",null),ta.select("body").style("cursor",_.style("cursor")),w({type:"brushstart"}),d()}var a,o,c=N(n,"brushstart","brush","brushend"),l=null,s=null,f=[0,0],h=[0,0],g=!0,p=!0,v=Ic[0];return n.event=function(n){n.each(function(){var n=c.of(this,arguments),t={x:f,y:h,i:a,j:o},e=this.__chart__||t;this.__chart__=t,Rc?ta.select(this).transition().each("start.brush",function(){a=e.i,o=e.j,f=e.x,h=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=Mr(f,t.x),r=Mr(h,t.y);return a=o=null,function(u){f=t.x=e(u),h=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){a=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(l=t,v=Ic[!l<<1|!s],n):l},n.y=function(t){return arguments.length?(s=t,v=Ic[!l<<1|!s],n):s},n.clamp=function(t){return arguments.length?(l&&s?(g=!!t[0],p=!!t[1]):l?g=!!t:s&&(p=!!t),n):l&&s?[g,p]:l?g:s?p:null},n.extent=function(t){var e,r,u,i,c;return arguments.length?(l&&(e=t[0],r=t[1],s&&(e=e[0],r=r[0]),a=[e,r],l.invert&&(e=l(e),r=l(r)),e>r&&(c=e,e=r,r=c),(e!=f[0]||r!=f[1])&&(f=[e,r])),s&&(u=t[0],i=t[1],l&&(u=u[1],i=i[1]),o=[u,i],s.invert&&(u=s(u),i=s(i)),u>i&&(c=u,u=i,i=c),(u!=h[0]||i!=h[1])&&(h=[u,i])),n):(l&&(a?(e=a[0],r=a[1]):(e=f[0],r=f[1],l.invert&&(e=l.invert(e),r=l.invert(r)),e>r&&(c=e,e=r,r=c))),s&&(o?(u=o[0],i=o[1]):(u=h[0],i=h[1],s.invert&&(u=s.invert(u),i=s.invert(i)),u>i&&(c=u,u=i,i=c))),l&&s?[[e,u],[r,i]]:l?[e,r]:s&&[u,i])},n.clear=function(){return n.empty()||(f=[0,0],h=[0,0],a=o=null),n},n.empty=function(){return!!l&&f[0]==f[1]||!!s&&h[0]==h[1]},ta.rebind(n,c,"on")};var Oc={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Ic=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Yc=oo.format=go.timeFormat,Zc=Yc.utc,Vc=Zc("%Y-%m-%dT%H:%M:%S.%LZ");Yc.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Ji:Vc,Ji.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Ji.toString=Vc.toString,oo.second=Hn(function(n){return new co(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),oo.seconds=oo.second.range,oo.seconds.utc=oo.second.utc.range,oo.minute=Hn(function(n){return new co(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),oo.minutes=oo.minute.range,oo.minutes.utc=oo.minute.utc.range,oo.hour=Hn(function(n){var t=n.getTimezoneOffset()/60;return new co(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),oo.hours=oo.hour.range,oo.hours.utc=oo.hour.utc.range,oo.month=Hn(function(n){return n=oo.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),oo.months=oo.month.range,oo.months.utc=oo.month.utc.range;var Xc=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],$c=[[oo.second,1],[oo.second,5],[oo.second,15],[oo.second,30],[oo.minute,1],[oo.minute,5],[oo.minute,15],[oo.minute,30],[oo.hour,1],[oo.hour,3],[oo.hour,6],[oo.hour,12],[oo.day,1],[oo.day,2],[oo.week,1],[oo.month,1],[oo.month,3],[oo.year,1]],Bc=Yc.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",Ct]]),Wc={range:function(n,t,e){return ta.range(Math.ceil(n/e)*e,+t,e).map(Ki)},floor:y,ceil:y};$c.year=oo.year,oo.scale=function(){return Gi(ta.scale.linear(),$c,Bc)};var Jc=$c.map(function(n){return[n[0].utc,n[1]]}),Gc=Zc.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",Ct]]);Jc.year=oo.year.utc,oo.scale.utc=function(){return Gi(ta.scale.linear(),Jc,Gc)},ta.text=An(function(n){return n.responseText}),ta.json=function(n,t){return Cn(n,"application/json",Qi,t)},ta.html=function(n,t){return Cn(n,"text/html",na,t)},ta.xml=An(function(n){return n.responseXML}),"function"==typeof define&&define.amd?define(ta):"object"==typeof module&&module.exports&&(module.exports=ta),this.d3=ta}();;/*
 * globalmigration
 * https://github.com/null2/globalmigration
 *
 * Copyright (c) 2013 null2 GmbH Berlin
 * Licensed under the MIT license.
 */

// Merge country indices. Seperated for testing purpose.
(function(scope) {
  scope.countrymerge = function(data, countries) {
    return data.regions.reduce(function(memo, region, i) {
      if (countries.indexOf(region) === -1) {
        memo.push(region);
      } else {
        for (var idx = region + 1; idx < (data.regions[i + 1] || data.names.length); idx++) {
          memo.push(idx);
        }
      }

      return memo;
    }, []);
  };
})((typeof exports !== 'undefined' && exports) || window.Globalmigration || (window.Globalmigration = {}));
;/*
 * globalmigration
 * https://github.com/null2/globalmigration
 *
 * Copyright (c) 2013 null2 GmbH Berlin
 * Licensed under the MIT license.
 */

// Basically a d3.layout.chord, but with
// Depends on countrymerge.js
(function(scope) {
  // from d3/layout/chord.js

  // import "../arrays/range";
  // import "../math/trigonometry";
  var π = Math.PI;

  scope.layout = function() {
    var chord = {},
        chords,
        groups,
        data,
        matrix,
        indices,
        countries,
        year,
        n,
        padding = 0,
        threshold = null,
        sortGroups,
        sortSubgroups,
        sortChords;

    // get region from country index
    function region(index) {
      var r = 0;
      for (var i = 0; i < data.regions.length; i++) {
        if (data.regions[i] > index) {
          break;
        }
        r = i;
      }
      return data.regions[r];
    }

    function relayout() {
      var subgroups = {},
          groupSums = [],
          groupIndex = d3.range(n),
          subgroupIndex = [],
          k,
          x,
          x0,
          i,
          j;

      data = data || { matrix: {}, names: [], regions: []};
      year = year || Object.keys(data.matrix)[0];
      matrix = year && data.matrix[year] || [];

      chords = [];
      groups = [];

      // Compute the sum.
      k = 0, i = -1; while (++i < n) {
        x = 0, j = -1; while (++j < n) {
          x += matrix[indices[i]][indices[j]];
          x += matrix[indices[j]][indices[i]];
          // if (x === 0) {
          //   x = 1;
          // }
        }
        groupSums.push(x);
        subgroupIndex.push({source: d3.range(n), target: d3.range(n)});
        k += x;
      }

      // Sort groups…
      if (sortGroups) {
        groupIndex.sort(function(a, b) {
          return sortGroups(groupSums[a], groupSums[b]);
        });
      }

      // Sort subgroups…
      if (sortSubgroups) {
        subgroupIndex.forEach(function(d, i) {
          d.source.sort(function(a, b) {
            return sortSubgroups(matrix[indices[i]][indices[a]], matrix[indices[i]][indices[b]]);
          });
          d.target.sort(function(a, b) {
            return sortSubgroups(matrix[indices[a]][indices[i]], matrix[indices[b]][indices[i]]);
          });
        });
      }

      // TODO: substract padding from chords, instead of adding it to chrord sum
      // padding = 0;

      // Convert the sum to scaling factor for [0, 2pi].
      // TODO Allow start and end angle to be specified.
      // TODO Allow padding to be specified as percentage?
      k = (2 * π - padding * n) / k;

      // Compute the start and end angle for each group and subgroup.
      // Note: Opera has a bug reordering object literal properties!
      x = 0, i = -1; while (++i < n) {
        var inflow = 0;
        var outflow = 0;

        var di = groupIndex[i];
        // targets
        x0 = x, j = -1; while (++j < n) {
          var dj = subgroupIndex[di].target[j],
              v = matrix[indices[dj]][indices[di]],
              a0 = x,
              d = v * k;
          x += d;
          subgroups['target' + '-' + di + "-" + dj] = {
            originalIndex: indices[dj],
            index: di,
            subindex: dj,
            startAngle: a0,
            dAngle: v * k,
            value: v
          };
          inflow += v;
        }
        var lastX0 = x0;
        // sources
        x0 = x, j = -1; while (++j < n) {
          var dj = subgroupIndex[di].source[j],
              v = matrix[indices[di]][indices[dj]],
              a0 = x,
              d = v * k;
          x += d;
          subgroups['source' + '-' + di + "-" + dj] = {
            originalIndex: indices[di],
            index: di,
            subindex: dj,
            startAngle: a0,
            dAngle: v * k,
            value: v
          };
          outflow += v;
        }
        
        groups[di] = {
          id: indices[di],
          region: region(indices[di]),
          index: di,
          startAngle: lastX0,
          endAngle: x,
          angle: lastX0 + (x - lastX0) / 2,
          inflow: inflow,
          outflow: outflow,
          value: Math.round((x - lastX0) / k)
        };
        x += padding;
      }

      // Generate chords for each (non-empty) subgroup-subgroup link.
      i = -1; while (++i < n) {
        j = i - 1; while (++j < n) {
          var source = subgroups['source' + '-' + i + "-" + j],
              target = subgroups['target' + '-' + j + "-" + i];
          if (i === j) {
            if (threshold === null || source.value > threshold) {
              var target = subgroups['target' + '-' + i + "-" + j];
              chords.push({
                id: 'source-' + indices[i] + "-" + indices[j],
                target: {
                  id: indices[source.index],
                  region: region(indices[source.index]),
                  index: source.index,
                  subindex: source.subindex,
                  startAngle: source.startAngle,
                  endAngle: source.startAngle + source.dAngle,
                  value: source.value
                },
                source: {
                  id: indices[target.index],
                  region: region(indices[target.index]),
                  index: target.index,
                  subindex: target.subindex,
                  startAngle: target.startAngle,
                  endAngle: target.startAngle + target.dAngle,
                  value: target.value
                }
              });
            }
          } else {
            if (threshold === null || source.value > threshold) {
              chords.push({
                id: 'source-' + indices[i] + "-" + indices[j],
                source: {
                  id: indices[source.index],
                  region: region(indices[source.index]),
                  index: source.index,
                  subindex: source.subindex,
                  startAngle: source.startAngle,
                  endAngle: source.startAngle + source.dAngle,
                  value: source.value
                },
                target: {
                  id: indices[target.index],
                  region: region(indices[target.index]),
                  index: target.index,
                  subindex: target.subindex,
                  startAngle: target.startAngle,
                  endAngle: target.startAngle + target.dAngle,
                  value: target.value
                }
              });
            }
            var source = subgroups['source' + '-' + j + "-" + i],
                target = subgroups['target' + '-' + i + "-" + j];
            if (threshold === null || source.value > threshold) {
              chords.push({
                id: 'target-' + indices[i] + "-" + indices[j],
                source: {
                  id: indices[source.index],
                  region: region(indices[source.index]),
                  index: source.index,
                  subindex: source.subindex,
                  startAngle: source.startAngle,
                  endAngle: source.startAngle + source.dAngle,
                  value: source.value
                },
                target: {
                  id: indices[target.index],
                  region: region(indices[target.index]),
                  index: target.index,
                  subindex: target.subindex,
                  startAngle: target.startAngle,
                  endAngle: target.startAngle + target.dAngle,
                  value: target.value
                }
              });
            }
          }
        }
      }

      if (sortChords) resort();
    }

    function resort() {
      chords.sort(function(a, b) {
        return sortChords(a.source.value, b.source.value);
      });
    }

    chord.data = function(x) {
      if (!arguments.length) return data;
      data = x;
      indices = data.regions.slice();
      n = indices.length;
      chords = groups = null;
      return chord;
    };

    chord.year = function(x) {
      if (!arguments.length) return year;
      year = x;
      chords = groups = null;
      return chord;
    };

    chord.countries = function(x) {
      if (!arguments.length) return countries;
      countries = x;
      indices = scope.countrymerge(data, countries);
      n = indices.length;
      chords = groups = null;
      return chord;
    };

    chord.padding = function(x) {
      if (!arguments.length) return padding;
      padding = x;
      chords = groups = null;
      return chord;
    };

    chord.threshold = function(x) {
      if (!arguments.length) return threshold;
      threshold = x;
      chords = groups = null;
      return chord;
    };

    chord.sortGroups = function(x) {
      if (!arguments.length) return sortGroups;
      sortGroups = x;
      chords = groups = null;
      return chord;
    };

    chord.sortSubgroups = function(x) {
      if (!arguments.length) return sortSubgroups;
      sortSubgroups = x;
      chords = null;
      return chord;
    };

    chord.sortChords = function(x) {
      if (!arguments.length) return sortChords;
      sortChords = x;
      if (chords) resort();
      return chord;
    };

    chord.chords = function() {
      if (!chords) relayout();
      return chords;
    };

    chord.groups = function() {
      if (!groups) relayout();
      return groups;
    };

    return chord;
  };
})(window.Globalmigration || (window.Globalmigration = {}));
;/*
 * globalmigration
 * https://github.com/null2/globalmigration
 *
 * Copyright (c) 2013 null2 GmbH Berlin
 * Licensed under the MIT license.
 */

// Basically a d3.svg.chord, but with
// * sourcePadding
// * targetPadding

// Modefied by Excel Wang to add arrow to chord!
(function(scope) {
  // from d3/svg/chord.js

  // import "../core/functor";
  var d3_functor = d3.functor;
  // import "../core/source";
  function d3_source(d) {
    return d.source;
  }
  // import "../core/target";
  function d3_target(d) {
    return d.target;
  }
  // import "../math/trigonometry";
  var π = Math.PI;
  // import "arc";
  var d3_svg_arcOffset = -π / 2;
  function d3_svg_arcStartAngle(d) {
    return d.startAngle;
  }
  function d3_svg_arcEndAngle(d) {
    return d.endAngle;
  }
  // import "svg";

  scope.chord = function(arrowRatio) {
    var source = d3_source,
        target = d3_target,
        radius = d3_svg_chordRadius,
        sourcePadding = d3_svg_chordSourcePadding,
        targetPadding = d3_svg_chordTargetPadding,
        startAngle = d3_svg_arcStartAngle,
        endAngle = d3_svg_arcEndAngle;

    if(!arrowRatio) {
      arrowRatio=0;
    }
    // TODO Allow control point to be customized.

    function chord(d, i) {
      var s = subgroup(this, source, d, i),
          t = subgroup(this, target, d, i, true,1-arrowRatio);

      if (equals(s, t)) {
        s.a0 = s.a1 + (s.a1 - s.a0) / 2;
        s.p0 = [s.r * Math.cos(s.a0), s.r * Math.sin(s.a0)];

        t.a1 = t.a0 - (t.a1 - t.a0) / 2;
        t.p1 = [t.r * Math.cos(t.a1), t.r * Math.sin(t.a1)];
        t.aMid=(t.a1-t.a0)/2+t.a0;
        t.pMid= [r * Math.cos(t.aMid), r * Math.sin(t.aMid)]
      }

      var ccp = cubic_control_points(s, t, s.r * 0.618);

      return "M" + s.p0
        + arc(s.r, s.p1, s.a1 - s.a0)
        + cubic_curve(ccp.cps1, ccp.cpt0, t.p0)
        + (arrowRatio===0?arc(t.r, t.p1, t.a1 - t.a0):arrow(t.pMid,t.p1))
        + cubic_curve(ccp.cpt1, ccp.cps0, s.p0)
        + "Z";
    }

    function cubic_control_points(s, t, factor) {
      cps0 = [factor * Math.cos(s.a0), factor * Math.sin(s.a0)];
      cps1 = [factor * Math.cos(s.a1), factor * Math.sin(s.a1)];
      cpt0 = [factor * Math.cos(t.a0), factor * Math.sin(t.a0)];
      cpt1 = [factor * Math.cos(t.a1), factor * Math.sin(t.a1)];
      return {
        cps0: cps0, 
        cps1: cps1, 
        cpt0: cpt0, 
        cpt1: cpt1
      };
    }

    function subgroup(self, f, d, i, target,scale) {
      if (!scale){
        scale=1;
      }
      var subgroup = f.call(self, d, i),
          r = radius.call(self, subgroup, i),
          a0 = startAngle.call(self, subgroup, i) + d3_svg_arcOffset,
          a1 = endAngle.call(self, subgroup, i) + d3_svg_arcOffset
          aMid=(a1-a0)/2+a0;
      
      if (target) {
        var d = targetPadding.call(self, subgroup, i) || 0;
        r = r - d;
      } else {
        var d = sourcePadding.call(self, subgroup, i) || 0;
        r = r - d;
      }

      return {
        r: r,
        a0: a0,
        a1: a1,
        p0: [r*scale * Math.cos(a0), r*scale * Math.sin(a0)],
        p1: [r*scale * Math.cos(a1), r*scale * Math.sin(a1)],
        pMid: [r * Math.cos(aMid), r * Math.sin(aMid)]
      };
    }

    function equals(a, b) {
      return a.a0 == b.a0 && a.a1 == b.a1;
    }

    function arc(r, p, a) {
      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
    }

    function curve(r0, p0, r1, p1) {
      return "Q 0,0 " + p1;
    }

    function arrow(pMid,p1) {
      return "L"+pMid+"L"+p1;
    }
    
    function cubic_curve(cp0, cp1, p1) {
      return "C " + cp0 + " " + cp1 + " " + p1;
    }

    chord.radius = function(v) {
      if (!arguments.length) return radius;
      radius = d3_functor(v);
      return chord;
    };

    // null2
    chord.sourcePadding = function(v) {
      if (!arguments.length) return sourcePadding;
      sourcePadding = d3_functor(v);
      return chord;
    };
    chord.targetPadding = function(v) {
      if (!arguments.length) return targetPadding;
      targetPadding = d3_functor(v);
      return chord;
    };

    chord.source = function(v) {
      if (!arguments.length) return source;
      source = d3_functor(v);
      return chord;
    };

    chord.target = function(v) {
      if (!arguments.length) return target;
      target = d3_functor(v);
      return chord;
    };

    chord.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return chord;
    };

    chord.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return chord;
    };

    return chord;
  };

  function d3_svg_chordRadius(d) {
    return d.radius;
  }
  function d3_svg_chordTargetPadding(d) {
    return d.targetPadding;
  }
  function d3_svg_chordSourcePadding(d) {
    return d.sourcePadding;
  }
})(window.Globalmigration || (window.Globalmigration = {}));
;/*
 * globalmigration
 * https://github.com/null2/globalmigration
 *
 * Copyright (c) 2013 null2 GmbH Berlin
 * Licensed under the MIT license.
 */

// Timeline: year selector
(function(scope) {
  scope.timeline = function(diagram, config) {
    var years = Object.keys(diagram.data.matrix).map(function(y) { return parseInt(y); }); 

    config = config || {};
    config.element = config.element || 'body';
    config.now = config.now || years[0];

    var form = d3.select(config.element).append('form');

    var year = form.selectAll('.year')
      .data(years);

    var span = year.enter().append('span')
      .classed('year', true);
    span.append('input')
      .attr({
        name: 'year',
        type: 'radio',
        id: function(d) { return 'year-' + d; },
        value: function(d) { return d; },
        checked: function(d) { return d === config.now || null; }
      })
      .on('click', function(d) {
        var y = d;
        year.selectAll('input').attr('checked', function(d) {
          return y === d || null;
        });
        diagram.draw(d);
      });

    span.append('label')
      .attr('for', function(d) { return 'year-' + d; })
      .text(function(d) { return ""+d+"–" + (d+5); });

    // keyboard control
    d3.select(document.body).on('keypress', function() {
      var idx = d3.event.which - 49;
      var y = years[idx];
      if (y) {
        year.selectAll('input').each(function(d) {
          if (d === y) {
            d3.select(this).on('click')(d);
          }
        });
      }
    });
  };
})(window.Globalmigration || (window.Globalmigration = {}));
;/*
 * globalmigration
 * https://github.com/null2/globalmigration
 *
 * Copyright (c) 2013 null2 GmbH Berlin
 * Licensed under the MIT license.
 */

// Initialize diagram
(function(scope) {
  var π = Math.PI;

  scope.chart = function(data, config) {
    data = data || { regions: [], names: [], matrix: [] };

    config = config || {};
    config.element = config.element || 'body';

    config.now = config.now || Object.keys(data.matrix)[0];

    // geometry
    config.width = config.width || 1100;
    config.height = config.height || 1100;
    config.margin = config.margin || 125;
    config.outerRadius = config.outerRadius || (Math.min(config.width, config.height) / 2 - config.margin);
    config.arcWidth = config.arcWidth || 24;
    config.innerRadius = config.innerRadius || (config.outerRadius - config.arcWidth);
    config.arcPadding = config.arcPadding || 0.005;
    config.sourcePadding = config.sourcePadding || -1;
    config.targetPadding = config.targetPadding || 2;
    config.labelPadding = config.labelPadding || 10;
    config.labelRadius = config.labelRadius || (config.outerRadius + config.labelPadding);

    // animation
    var aLittleBit = Math.PI / 100000;
    config.animationDuration = config.animationDuration || 1000;
    config.initialAngle = config.initialAngle || {};
    config.initialAngle.arc = config.initialAngle.arc || { startAngle: 0, endAngle: aLittleBit };
    config.initialAngle.chord = config.initialAngle.chord || { source: config.initialAngle.arc, target: config.initialAngle.arc };

    // layout
    config.layout = config.layout || {};
    config.layout.sortSubgroups = config.layout.sortSubgroups || d3.descending;
    config.layout.sortChords = config.layout.sortChords || d3.descending;
    config.layout.threshold = config.layout.threshold || 1000;
    config.layout.labelThreshold = config.layout.labelThreshold || 100000;

    config.maxRegionsOpen = config.maxRegionsOpen || 2;
    config.infoPopupDelay = config.infoPopupDelay || 300;


    var colors = d3.scale.category10().domain(data.regions);
    if (config.layout.colors) {
      colors.range(config.layout.colors);
    }

    function arcColor(d) {
      if (d.region === d.id) {
        return colors(d.region);
      }
      var hsl = d3.hsl(colors(d.region));
      var r = [hsl.brighter(0.75), hsl.darker(2), hsl, hsl.brighter(1.5), hsl.darker(1)];
      return r[(d.id - d.region) % 5];
    }

    function chordColor(d) {
      return arcColor(d.source);
    }

    // state before animation
    var previous = {
      countries: []
    };

    // calculate label position
    function labelPosition(angle) {
      return {
        x: Math.cos(angle - π / 2) * config.labelRadius,
        y: Math.sin(angle - π / 2) * config.labelRadius,
        r: (angle - π / 2) * 180 / π
      };
    }

    function formatNumber(nStr, seperator) {
      seperator = seperator || ',';

      nStr += '';
      x = nStr.split('.');
      x1 = x[0];
      x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + seperator + '$2');
      }
      return x1 + x2;
    }

    function luminicity(color) {
      var rgb = d3.rgb(color);

      return 0.21 * rgb.r + 0.71 * rgb.g + 0.07 * rgb.b;
    }

    // arc path generator
    var textPathArc = d3.svg.arc()
        .innerRadius(config.outerRadius + 10)
        .outerRadius(config.outerRadius + 10);
    var textPathArc2 = d3.svg.arc()
        .innerRadius(config.outerRadius + 18)
        .outerRadius(config.outerRadius + 18);

    // arc generator
    var arc = d3.svg.arc()
        .innerRadius(config.innerRadius)
        .outerRadius(config.outerRadius);

    // chord diagram
    var layout = Globalmigration.layout()
        .padding(config.arcPadding)
        .threshold(config.layout.threshold)
        .data(data)
        .year(config.now);

    if (config.layout.sortGroups) {
      layout.sortGroups(config.layout.sortGroups);
    }
    if (config.layout.sortSubgroups) {
      layout.sortSubgroups(config.layout.sortSubgroups);
    }
    if (config.layout.sortChors) {
      layout.sortChors(config.layout.sortChords);
    }

    // chord path generator
    var chordGenerator = Globalmigration.chord(0.03)
        .radius(config.innerRadius)
        .sourcePadding(config.sourcePadding)
        .targetPadding(config.targetPadding);

    // svg element
    var svg = d3.select(config.element).append("svg")
        .attr('preserveAspectRatio', 'xMidYMid')
        .attr('viewBox', '0 0 ' + config.width + ' ' + config.height)
        .attr("width", config.width)
        .attr("height", config.height);
    var element = svg.append("g")
        .attr("id", "circle")
        .attr("transform", "translate(" + config.width / 2 + "," + config.height / 2 + ")");

    d3.select(window).on('resize.svg-resize', function() {
      var width = svg.node().parentNode.clientWidth;

      if (width) {
        svg.attr('height', width);
      }
    });

    // needed for fade mouseover
    var circle = element.append("circle").attr("r", config.outerRadius + 24);

    var filter = svg.append('filter').attr('id', 'dropshadow');
    filter.append('feGaussianBlur').attr({
      in: 'SourceAlpha',
      stdDeviation: 2
    });
    filter.append('feOffset').attr({
      dx: 0,
      dy: 1,
      result: 'offsetblur'
    });
    filter.append('feComponentTransfer').append('feFuncA').attr({
      type: 'linear',
      slope: 0.5
    });
    var femerge = filter.append('feMerge');
    femerge.append('feMergeNode');
    femerge.append('feMergeNode').attr('in', 'SourceGraphic');

    var info = svg.append('g')
      .attr('class', 'info-group')
      .attr("transform", "translate(" + config.width / 2 + "," + config.height / 2 + ")")
      .append('g')
        .attr('class', 'info')
        .attr('opacity', 0);
    
    info.append('rect')
      .style('filter', 'url(#dropshadow)');
    info.append('g').attr('class', 'text');

    svg.on('mousemove', function() {
      info
        .transition()
        .duration(10)
        .attr('opacity', 0);
    });

    circle.on('mouseout', function() {
      if (infoTimer) {
        clearTimeout(infoTimer);
      }
      info
        .transition()
        .duration(10)
        .attr('opacity', 0);
    });

    var infoTimer;

    // eg: West Africa: Total inflow 46, Total outflow 2
    function groupInfo(d) {
      var el = this;

      if (infoTimer) {
        clearTimeout(infoTimer);
      }

      var bbox = el.getBBox();
      infoTimer = setTimeout(function() {
        var color = d3.select(el).style('fill');

        info
          .attr('transform', 'translate(' + (bbox.x + bbox.width / 2) + ',' + (bbox.y + bbox.height / 2) + ')');

        var text = info.select('.text').selectAll('text')
          .data([
            data.names[d.id],
            'Total In: ' + formatNumber(d.inflow),
            'Total Out: ' + formatNumber(d.outflow)
          ]);
        text.enter().append('text');
        text
          .text(function(t) { return t; })
          .style({
            fill: luminicity(color) > 160 ? 'black' : 'white'
          })
          .attr({
            transform: function(t, i) {
              return 'translate(6, ' + (i * 14 + 16) + ')';
            }
          });
        text.exit().remove();

        var tbbox = info.select('.text').node().getBBox();
        info.select('rect')
          .style('fill', color)
          .attr({
            width: tbbox.width + 12,
            height: tbbox.height + 10
          });

        info
          .transition()
          .attr('opacity', 1);
      }, config.infoPopupDelay);
    }

    // chord info
    // eg: West Asia → Pacific: 46
    function chordInfo(d) {
      var el = this;

      if (infoTimer) {
        clearTimeout(infoTimer);
      }

      var bbox = el.getBBox();
      infoTimer = setTimeout(function() {
        var color = d3.select(el).style('fill');

        info.attr('transform', 'translate(' + (bbox.x + bbox.width / 2) + ',' + (bbox.y + bbox.height / 2) + ')')
          .attr('opacity', 0)
          .transition()
          .attr('opacity', 1);

        var text = info.select('.text').selectAll('text')
          .data([
            data.names[d.source.id] + ' → ' + data.names[d.target.id] + ': ' + formatNumber(d.source.value)
          ]);
        text.enter().append('text');
        text.exit().remove();
        text
          .text(function(t) { return t; })
          .style({
            fill: luminicity(color) > 160 ? 'black' : 'white'
          })
          .attr('transform', function(t, i) {
            return 'translate(6, ' + (i * 12 + 16) + ')';
          });

        info.selectAll('rect').style('fill', d3.select(el).style('fill'));

        var tbbox = info.select('.text').node().getBBox();
        info.select('rect')
          .attr({
            width: tbbox.width + 12,
            height: tbbox.height + 10
          });
      }, config.infoPopupDelay);
    }


    function rememberTheGroups() {
      previous.groups = layout.groups().reduce(function(sum, d) {
        sum[d.id] = d;
        return sum;
      }, {});
    }
    function rememberTheChords() {
      previous.chords = layout.chords().reduce(function(sum, d) {
        sum[d.source.id] = sum[d.source.id] || {};
        sum[d.source.id][d.target.id] = d
        return sum;
      }, {});
    }

    function getCountryRange(id) {
      var end = data.regions[data.regions.indexOf(id) + 1];

      return {
        start: id + 1,
        end: end ? end - 1 : data.names.length - 1
      };
    }

    function inRange(id, range) {
      return id >= range.start && id <= range.end;
    }

    function inAnyRange(d, ranges) {
      return !!ranges.filter(function(range) { return inRange(d.source.id, range) || inRange(d.target.id, range); }).length;
    }

    // Transition countries to region:
    // Use first country's start angle and last countries end angle. 
    function meltPreviousGroupArc(d) {
      if (d.id !== d.region) {
        return;
      }

      var range = getCountryRange(d.id);
      var start = previous.groups[range.start];
      var end = previous.groups[range.end];

      if (!start || !end) {
        return;
      }

      return {
        angle: start.startAngle + (end.endAngle - start.startAngle) / 2,
        startAngle: start.startAngle,
        endAngle: end.endAngle
      };
    }

    // Used to set the startpoint for
    // countries -> region
    // transition, that is closing a region.
    function meltPreviousChord(d) {
      if (d.source.id !== d.source.region) {
        return;
      }
      
      var c = {
        source: {},
        target: {}
      };

      Object.keys(previous.chords).forEach(function(sourceId) {
        Object.keys(previous.chords[sourceId]).forEach(function(targetId) {
          var chord = previous.chords[sourceId][targetId];

          if (chord.source.region === d.source.id) {
            if (!c.source.startAngle || chord.source.startAngle < c.source.startAngle) {
              c.source.startAngle = chord.source.startAngle;
            }
            if (!c.source.endAngle || chord.source.endAngle > c.source.endAngle) {
              c.source.endAngle = chord.source.endAngle;
            }
          }
          
          if (chord.target.region === d.target.id) {
            if (!c.target.startAngle || chord.target.startAngle < c.target.startAngle) {
              c.target.startAngle = chord.target.startAngle;
            }
            if (!c.target.endAngle || chord.target.endAngle > c.target.endAngle) {
              c.target.endAngle = chord.target.endAngle;
            }
          }
        });
      });
      
      c.source.startAngle = c.source.startAngle || 0;
      c.source.endAngle = c.source.endAngle || aLittleBit;
      c.target.startAngle = c.target.startAngle || 0;
      c.target.endAngle = c.target.endAngle || aLittleBit;

      // transition from start
      c.source.endAngle = c.source.startAngle + aLittleBit;
      c.target.endAngle = c.target.startAngle + aLittleBit;

      return c;
    }


    // finally draw the diagram
    function draw(year, countries) {
      year = year || Object.keys(data.matrix)[0];
      countries = countries || previous.countries;
      previous.countries = countries;
      var ranges = countries.map(getCountryRange);

      rememberTheGroups();
      rememberTheChords();

      layout
        .year(year)
        .countries(countries);

      // groups
      var group = element.selectAll(".group")
        .data(layout.groups, function(d) { return d.id; });
      group.enter()
        .append("g")
        .attr("class", "group");
      group
        .on("mouseover", function(d) {
          chord.classed("fade", function(p) {
            return p.source.id !== d.id && p.target.id !== d.id;
          });
        });
      group.exit().remove();
      
      // group arc
      var groupPath = group.selectAll('.group-arc')
        .data(function(d) { return [d]; });
      groupPath.enter()
        .append('path')
        .attr("class", "group-arc")
        .attr("id", function(d, i, k) { return "group" + k; });
      groupPath
        .style("fill", arcColor)
        .on("mousemove", groupInfo)
        .transition()
        .duration(config.animationDuration)
        .attrTween("d", function(d) {
          var i = d3.interpolate(previous.groups[d.id] || previous.groups[d.region] || meltPreviousGroupArc(d) || config.initialAngle.arc, d);
          return function (t) { return arc(i(t)); };
        });
      groupPath.exit().remove();

      // open regions
      groupPath
        .filter(function(d) {
          return d.id === d.region;
        })
        .on('click', function(d) {
          if (countries.length + 1 > config.maxRegionsOpen) {
            countries.shift();
          }
          draw(year, countries.concat(d.id));
        });

      // close regions
      groupPath
        .filter(function(d) {
          return d.id !== d.region;
        })
        .on('click', function(d) {
          countries.splice(countries.indexOf(d.region), 1);
          draw(year, countries);
        });

      
      // text label group
      var groupTextGroup = element.selectAll('.label')
        .data(layout.groups, function(d) { return d.id; });
      groupTextGroup.enter()
        .append("g")
        .attr('class', 'label');
      groupTextGroup
        .filter(function(d) {return d.id !== d.region})
        .transition()
        .duration(config.animationDuration)
        .attrTween("transform", function(d) {
          var i = d3.interpolate(previous.groups[d.id] || previous.groups[d.region] || meltPreviousGroupArc(d) || { angle: 0 }, d);
          return function (t) {
            var t = labelPosition(i(t).angle);
            return 'translate(' + t.x + ' ' + t.y + ') rotate(' + t.r + ')';
          };
        });
      groupTextGroup.exit()
        .transition()
        .duration(config.animationDuration)
        .style('opacity', 0)
        .attrTween("transform", function(d) {
          // do not animate region labels
          if (d.id === d.region) {
            return;
          }

          var region = layout.groups().filter(function(g) { return g.id === d.region });
          region = region && region[0];
          var angle = region && (region.startAngle + (region.endAngle - region.startAngle) / 2);
          angle = angle || 0;
          var i = d3.interpolate(d, { angle: angle });
          return function (t) {
            var t = labelPosition(i(t).angle);
            return 'translate(' + t.x + ' ' + t.y + ') rotate(' + t.r + ')';
          };
        })
        .each('end', function() {
          d3.select(this).remove();
        });

      // labels
      var groupText = groupTextGroup.selectAll('text')
        .data(function(d) { return [d]; });
      groupText.enter()
        .append("text")
      groupText
        .classed('region', function(d) {
          return d.id === d.region;
        })
        .text(function(d) { 
          if (d.id !== d.region) {
            return data.names[d.id];
          } 
        })
        .attr('transform', function(d) {
          if (d.id !== d.region) {
            return d.angle > Math.PI ? 'translate(0, -4) rotate(180)' : 'translate(0, 4)';
          }
        })
        .attr('text-anchor', function(d) {
          return d.id === d.region ?
            'middle' :
            (d.angle > Math.PI ? 'end' : 'start');
        })
        .style('fill', function(d) {
          return d.id === d.region ? arcColor(d) : null;
        })
        .classed('fade', function(d) {
          // hide labels for countries with little migrations
          return d.value < config.layout.labelThreshold;
        });

      // path for text-on-path
      var groupTextPathPath = group
        .filter(function(d) {return d.id === d.region})
        .selectAll('.group-textpath-arc')
        .data(function(d) { return [d]; });
      groupTextPathPath.enter()
        .append('path')
        .attr("class", "group-textpath-arc")
        .attr("id", function(d, i, k) { return "group-textpath-arc" + d.id; });
      groupTextPathPath
        .style("fill", 'none')
        .transition()
        .duration(config.animationDuration)
        .attrTween("d", function(d) {
          var i = d3.interpolate(previous.groups[d.id] || previous.groups[d.region] || meltPreviousGroupArc(d) || config.initialAngle.arc, d);
          if (d.angle > Math.PI/2 && d.angle < Math.PI*3/2) {
            return function (t) {
              return textPathArc2(i(t)); 
            };
          } else {
            return function (t) {
              return textPathArc(i(t)); 
            };
          }
        });
      groupTextPathPath.exit().remove();

      // text on path
      var groupTextPath = groupText
        .filter(function(d) {return d.id === d.region})
        .selectAll('textPath')
        .data(function(d) { return [d]; });
      groupTextPath
        .enter()
        .append("textPath")
      groupTextPath
        .text(function(d) { return data.names[d.id]; })
        .attr('startOffset', function(d) {
          if (d.angle > Math.PI/2 && d.angle < Math.PI*3/2) {
            return '75%';
          } else {
            return '25%';
          }
        })
        .attr("xlink:href", function(d, i, k) { return "#group-textpath-arc" + d.id; });


      groupTextPath
        .filter(function(d, i) {
          return this.getComputedTextLength() > (d.endAngle - d.startAngle) * (config.outerRadius + 18);
        })
        .remove();



      // chords
      var chord = element.selectAll(".chord")
          .data(layout.chords, function(d) { return d.id; });
      chord.enter()
        .append("path")
        .attr("class", "chord")
        .on('mousemove', chordInfo);
      chord
        .style("fill", chordColor)
        .transition()
        .duration(config.animationDuration)
        .attrTween("d", function(d) {
          var p = previous.chords[d.source.id] && previous.chords[d.source.id][d.target.id];
          p = p || (previous.chords[d.source.region] && previous.chords[d.source.region][d.target.region]);
          p = p || meltPreviousChord(d);
          p = p || config.initialAngle.chord;
          var i = d3.interpolate(p, d);
          return function (t) {
            return chordGenerator(i(t));
          };
        });
      chord.exit()
        .transition()
        .duration(config.animationDuration)
        .style('opacity', 0)
        .attrTween("d", function(d) {
          var i = d3.interpolate(d, {
            source: {
              startAngle: d.source.endAngle - aLittleBit,
              endAngle: d.source.endAngle
            },
            target: {
              startAngle: d.target.endAngle - aLittleBit,
              endAngle: d.target.endAngle
            }
          });
          return function (t) {
            return chordGenerator(i(t));
          };
        })
        .each('end', function() {
          d3.select(this).remove();
        });


      chord.classed("unselected", ranges.length ? function(d) {
        return !inAnyRange(d, ranges);
      } : false);

      d3.select(window).on('resize.svg-resize')();
    }

    return {
      draw: draw,
      data: data
    };
  };
})(window.Globalmigration || (window.Globalmigration = {}));
