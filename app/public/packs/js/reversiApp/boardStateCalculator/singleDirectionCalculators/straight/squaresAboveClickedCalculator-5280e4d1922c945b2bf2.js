!function(r){var e={};function t(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"===typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)t.d(n,o,function(e){return r[e]}.bind(null,o));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="/packs/",t(t.s=3)}({3:function(r,e,t){"use strict";function n(r){return function(r){if(Array.isArray(r)){for(var e=0,t=new Array(r.length);e<r.length;e++)t[e]=r[e];return t}}(r)||function(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.r(e),t.d(e,"flipSandwichedSquaresAboveClickedSquare",function(){return o});var o=function(r,e,t){for(var o="bl"===t?"wh":"bl",u=0,i=0,f=e.row-1;f>=0;){var a=r[f][e.column];if(a===o&&f<8)u++;else{if(a===t){i=u;break}if(7===f||null===a)return r}f--}i>0&&(r[e.row][e.column]=t);var c=e.row-1;return n(Array(i)).forEach(function(){r[c][e.column]=t,c--}),r}}});
//# sourceMappingURL=squaresAboveClickedCalculator-5280e4d1922c945b2bf2.js.map