!function(n){var e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(r,i,function(e){return n[e]}.bind(null,i));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=2)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(a).concat([i]).join("\n")}var o;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(i=0;i<n.length;i++){var o=n[i];null!=o[0]&&r[o[0]]||(t&&!o[2]?o[2]=t:t&&(o[2]="("+o[2]+") and ("+t+")"),e.push(o))}},e}},function(n,e,t){var r,i,a={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),f=null,l=0,c=[],u=t(6);function d(n,e){for(var t=0;t<n.length;t++){var r=n[t],i=a[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(g(r.parts[o],e))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(g(r.parts[o],e));a[r.id]={id:r.id,refs:1,parts:s}}}}function m(n,e){for(var t=[],r={},i=0;i<n.length;i++){var a=n[i],o=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):t.push(r[o]={id:o,parts:[s]})}return t}function p(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),c.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(n.insertAt.before,t);t.insertBefore(e,i)}}function h(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=c.indexOf(n);e>=0&&c.splice(e,1)}function v(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return y(e,n.attrs),p(n,e),e}function y(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function g(n,e){var t,r,i,a;if(e.transform&&n.css){if(!(a="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=a}if(e.singleton){var o=l++;t=f||(f=v(e)),r=w.bind(null,t,o,!1),i=w.bind(null,t,o,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",y(e,n.attrs),p(n,e),e}(e),r=function(n,e,t){var r=t.css,i=t.sourceMap,a=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||a)&&(r=u(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}.bind(null,t,e),i=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=v(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){h(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else i()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=m(n,e);return d(t,e),function(n){for(var r=[],i=0;i<t.length;i++){var o=t[i];(s=a[o.id]).refs--,r.push(s)}n&&d(m(n,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete a[s.id]}}}};var b,x=(b=[],function(n,e){return b[n]=e,b.filter(Boolean).join("\n")});function w(n,e,t,r){var i=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=x(e,i);else{var a=document.createTextNode(i),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(a,o[e]):n.appendChild(a)}}},function(n,e,t){n.exports=t(3)},function(n,e,t){"use strict";t.r(e);t(4),t(7);function r(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=function(n,e){for(var t=[],r=0;r<e;r++){var i=n[Math.floor(Math.random()*n.length)],a=i[Math.floor(Math.random()*i.length)];a.opacity=1,t.push(a)}return t},a=function(n,e){var t=n.getContext("2d");t.fillRect(0,0,n.width,n.height),e.forEach(function(n){n.forEach(function(n){t.lineWidth=1,t.strokeStyle=n.baseColour,t.strokeRect(n.xPos,n.yPos,n.width,n.height)})})},o=document.getElementById("pixels"),s=function(n,e,t,i){for(var a=Math.ceil(n/(t+10)),o=Math.ceil(e/(t+10)),s=["#22D5E1","#BAED36","#DF9928","E7CE34"],f=[],l=0;l<o;l++){f=[].concat(r(f),[[]]);for(var c=0;c<a;c++){var u={xPos:c*(t+10)+10,yPos:l*(i+10)+10,opacity:1,width:t,height:i,speed:.01*Math.random(),baseColour:"#323232",activeColour:s[Math.floor(Math.random()*s.length)]};f[l]=[].concat(r(f[l]),[u])}}return f}(340,460,8,8),f=i(s,10);a(o,s),function(n,e,t){var r=n.getContext("2d"),o=t;return function t(){a(n,e),o.length<10&&(o=o.concat(i(e,10-o.length))),o.forEach(function(n,e){n.opacity-n.speed>=0?n.opacity=n.opacity-n.speed:(r.globalAlpha=0,n.opacity=0,o.splice(e,1)),r.lineWidth=1,r.strokeStyle=n.activeColour,r.strokeRect(n.xPos,n.yPos,n.width,n.height),r.globalAlpha=1}),requestAnimationFrame(t)}}(o,s,f)()},function(n,e,t){var r=t(5);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,i);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n",""])},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var i,a=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?n:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?t+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(n,e,t){var r=t(8);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,i);r.locals&&(n.exports=r.locals)},function(n,e,t){e=n.exports=t(0)(!1);var r=t(9),i=r(t(10)),a=r(t(11));e.push([n.i,"body {\n  background: #ffffff; }\n\n@keyframes fade {\n  0% {\n    opacity: 1; }\n  25% {\n    opacity: 0; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n#logo {\n  background: url("+i+") no-repeat;\n  width: 115px;\n  height: 60px;\n  position: absolute;\n  z-index: 10;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 130px; }\n\n#slinky {\n  width: 183px;\n  height: 120px;\n  position: absolute;\n  z-index: 15;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 200px; }\n\n#slinky-base {\n  background: url("+a+") no-repeat;\n  width: 183px;\n  height: 120px;\n  position: absolute;\n  z-index: 5;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 200px; }\n\n#ring-1 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 25ms; }\n\n#ring-2 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 50ms; }\n\n#ring-3 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 75ms; }\n\n#ring-4 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 100ms; }\n\n#ring-5 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 125ms; }\n\n#ring-6 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 150ms; }\n\n#ring-7 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 175ms; }\n\n#ring-8 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 200ms; }\n\n#ring-9 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 225ms; }\n\n#ring-10 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 250ms; }\n\n#ring-11 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 275ms; }\n\n#ring-12 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 300ms; }\n\n#ring-13 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 325ms; }\n\n#ring-14 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 350ms; }\n\n#ring-15 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 375ms; }\n\n#ring-16 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 400ms; }\n\n#ring-17 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 425ms; }\n\n#ring-18 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 450ms; }\n\n#ring-19 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 475ms; }\n\n#ring-20 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 500ms; }\n\n#ring-21 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 525ms; }\n\n#ring-22 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 550ms; }\n\n#ring-23 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 575ms; }\n\n#ring-24 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 600ms; }\n\n#ring-25 {\n  animation: fade 2500ms infinite alternate-reverse;\n  animation-delay: 625ms; }\n",""])},function(n,e,t){"use strict";n.exports=function(n,e){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||e?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,e,t){n.exports=t.p+"app/assets/logo.svg"},function(n,e,t){n.exports=t.p+"app/assets/slinky-gray-scale.svg"}]);
//# sourceMappingURL=main.494f778edbadaf31753e.js.map