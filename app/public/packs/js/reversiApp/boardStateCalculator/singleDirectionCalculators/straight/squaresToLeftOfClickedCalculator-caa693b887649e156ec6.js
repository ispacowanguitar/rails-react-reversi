!function(r){var e={};function t(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"===typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)t.d(n,o,function(e){return r[e]}.bind(null,o));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="/packs/",t(t.s=7)}({7:function(r,e,t){"use strict";function n(r){return function(r){if(Array.isArray(r)){for(var e=0,t=new Array(r.length);e<r.length;e++)t[e]=r[e];return t}}(r)||function(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.r(e),t.d(e,"flipSandwichedSquaresToLeftOfClickedSquare",function(){return o});var o=function(r,e,t){for(var o,u=r[e.row],i="bl"===t?"wh":"bl",f=0,a=e.column-1;a>=0;){var c=u[a];if(c===i&&0!==a)f++;else{if(c===t){o=f;break}if(0===a||null===c)return r}a--}o>0&&(r[e.row][e.column]=t);var l=e.column-1;return n(Array(o)).forEach(function(){r[e.row][l]=t,l--}),r}}});
//# sourceMappingURL=squaresToLeftOfClickedCalculator-caa693b887649e156ec6.js.map