!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueInsertDirective=t():e.VueInsertDirective=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(e,t){return void 0===t&&(t="SPAN"),e.nodeName===t?e:e.parentElement?o(e.parentElement,t):void 0};var r=[];function u(e,t){var n=t.value||{},u=o(e,n.nodeName||"SPAN");if(u){var i,a=r.find((function(e){return e.el===u}));if(a)a.options=n;else a={options:n,el:u},r.push(a),u.style.position="relative",u.addEventListener(n.type||"focus",(function(){i||(i="textarea"===n.elType?function(e){var t=document.createElement("textarea");return t.className=e.inputClass||"insert-textarea",t.rows=e.rows||1,t.value="function"==typeof e.value?e.value():e.value,t}(a.options):function(e){var t=document.createElement("input");return t.className=e.inputClass||"insert-input",t.type=e.inputType||"text",t.value="function"==typeof e.value?e.value():e.value,t}(a.options),u.appendChild(i),i.focus(),"textarea"===n.elType?(i.style.minHeight=i.offsetHeight+"px",i.onkeyup=function(e){e&&27==e.keyCode&&e.target.blur()}):i.onkeyup=function(e){(e&&13==e.keyCode||27==e.keyCode)&&e.target.blur()},i.onblur=function(){a.options.input&&a.options.input(i.value),u.removeChild(i),i=void 0})}))}}t.default={inserted:u,update:u}}])}));