(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(56)},32:function(e,t,n){},34:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},45:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(18),c=n.n(o),i=(n(32),n(34),n(36),n(8)),l=n(0),s=n(12),u=n(9),m=n(3),f=n(11),d=(n(38),function(e){var t=e.selected;return a.a.createElement("div",{className:"col-md-4"},a.a.createElement("div",{class:"card-body text-light coin-card"},a.a.createElement("h4",{class:"card-title"},"$",t.from," to $",t.to),a.a.createElement("p",{class:"card-text"}," Adress: $",t.address),a.a.createElement("p",{class:"card-text"}," Precio de cambio: $",t.price),a.a.createElement("a",{href:"#!",class:"btn btn-outline-secondary border-0"},"Comprar $",t.to," con $",t.from)))});function h(){h=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(k){i=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),c=new j(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=w(c,n);if(i){if(i===u)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,c),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var u={};function m(){}function f(){}function d(){}var p={};i(p,a,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(O([])));y&&y!==t&&n.call(y,a)&&(p=y);var g=d.prototype=m.prototype=Object.create(p);function b(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;this._invoke=function(a,o){function c(){return new t(function(r,c){!function r(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(m).then(function(e){u.value=e,c(u)},function(e){return r("throw",e,c,i)})}i(l.arg)}(a,o,r,c)})}return r=r?r.then(c,c):c()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=d,i(g,"constructor",d),i(d,"constructor",f),f.displayName=i(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,i(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),i(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new E(l(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},b(g),i(g,c,"Generator"),i(g,a,function(){return this}),i(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var p=function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(!1),i=Object(m.a)(c,2),l=(i[0],i[1]),p=Object(r.useState)([]),v=Object(m.a)(p,2),y=v[0],g=v[1];Object(r.useEffect)(function(){fetch("https://api.0x.org/swap/v1/tokens").then(function(e){return e.json()}).then(function(e){o(e.records)}).catch(function(e){return console.log(e)}).finally(function(){return l(!0)})},[]);var b=function(){var e=Object(u.a)(h().mark(function e(t){var r,a,o,c,i;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.getElementById("from").value,a=document.getElementById("towards").value,o=document.getElementById("amount").value,c=n.find(function(e){return e.symbol===r}),i=n.find(function(e){return e.symbol===a}),o*=Math.pow(10,Number(c.decimals)),"https://api.0x.org/swap/v1/price?sellToken=".concat(c.symbol,"&buyToken=").concat(i.symbol,"&sellAmount=").concat(o),e.next=9,fetch("https://api.0x.org/swap/v1/price?sellToken=".concat(c.symbol,"&buyToken=").concat(i.symbol,"&sellAmount=").concat(o)).then(function(e){return e.json()}).then(function(e){e.reason?alert(e.reason):g([].concat(Object(s.a)(y),[{from:c.symbol,address:c.address,to:i.symbol,amount:o,price:1/Number(e.price).toFixed(4)}]))}).catch(function(e){console.log(e)});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=document.getElementById("from"),n=document.getElementById("towards"),r=t.value,a=n.value;t.value=a,n.value=r};return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-12"},a.a.createElement("h1",{className:"text-center"},"Convertir monedas")))),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row m-3 "},a.a.createElement("div",{className:"col-md-4 mt-2"}),a.a.createElement("div",{className:"col-md-4 mt-2"},a.a.createElement("h3",null,"SELL:"),a.a.createElement("div",{className:"contenedorSelect"},a.a.createElement("select",{id:"from",className:"form-select form-select-lg text-center selectToken"},n.map(function(e){return a.a.createElement("option",{key:e.id},e.symbol," ")})),a.a.createElement("button",{className:"btn change",onClick:E},a.a.createElement(f.b,null))),a.a.createElement("h3",null,"BUY:"),a.a.createElement("div",{className:"contenedorSelect"},a.a.createElement("select",{id:"towards",className:" form-select form-select-lg mb-3 text-center selectToken"},n.map(function(e){return a.a.createElement("option",{key:e.id},e.symbol)})),a.a.createElement("button",{className:"btn change",onClick:E},a.a.createElement(f.b,null))),a.a.createElement("div",{id:"contenedorComprar",className:"container"},a.a.createElement("button",{id:"btnShop",className:"btn btn-outline-secondary ",type:"button",onClick:b},"BUY"),a.a.createElement("input",{id:"amount",type:"text",className:"form-control center-block",placeholder:"0.0"}))),a.a.createElement("div",{className:"col-md-4 mt-2"})),a.a.createElement("div",null,a.a.createElement("div",{id:"cards",className:"row"},y.map(function(e){return a.a.createElement(d,{selected:e})})))))},v=function(e){var t=e.coin,n=t.symbol,r=t.price;return a.a.createElement("div",{className:"col-md-4"},a.a.createElement("div",{key:Date.now(),className:"card text-center coin-card"},a.a.createElement("div",{className:"card-body text-light"},a.a.createElement("h4",{className:"card-title identificadorSymbol"},"$",n),a.a.createElement("p",{className:"card-text parrafoPrice"}," Precio de compra: $",r," $USD"),a.a.createElement("a",{href:"#!",className:"btn btn-card-left"},a.a.createElement(i.b,{className:"link",to:"/"},"Comprar $",n)),a.a.createElement("a",{href:"#!",className:"btn btn-card-right"},"Vender $",n))))};n(40);function y(){y=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(k){i=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),c=new j(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=w(c,n);if(i){if(i===u)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,c),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var u={};function m(){}function f(){}function d(){}var h={};i(h,a,function(){return this});var p=Object.getPrototypeOf,v=p&&p(p(O([])));v&&v!==t&&n.call(v,a)&&(h=v);var g=d.prototype=m.prototype=Object.create(h);function b(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;this._invoke=function(a,o){function c(){return new t(function(r,c){!function r(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(m).then(function(e){u.value=e,c(u)},function(e){return r("throw",e,c,i)})}i(l.arg)}(a,o,r,c)})}return r=r?r.then(c,c):c()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=d,i(g,"constructor",d),i(d,"constructor",f),f.displayName=i(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,i(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),i(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new E(l(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},b(g),i(g,c,"Generator"),i(g,a,function(){return this}),i(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var g,b,E,w,x,N,j,O,L=function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)([]),i=Object(m.a)(c,2),l=i[0],f=i[1],d=Object(r.useState)([]),h=Object(m.a)(d,2),p=h[0],g=(h[1],Object(r.useState)(0)),b=Object(m.a)(g,2);b[0],b[1];Object(r.useEffect)(function(){(function(){var e=Object(u.a)(y().mark(function e(){var t,n;return y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.0x.org/swap/v1/tokens");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,f(n.records);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]),setInterval(function(){if(n){var e=n.map(function(e){var t=function(){var t=Object(u.a)(y().mark(function t(){var n,r;return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.0x.org/swap/v1/quote?buyToken=".concat(e.symbol,"&sellToken=DAI&sellAmount=100000000000000000"));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,e.price=1/Number(r.price),t.abrupt("return",e);case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()();return t.then(function(t){e.price=t.price.toFixed(4),console.log(e.price)}),t});Promise.all(e).then(function(e){o(Object(s.a)(e))})}},3e4);var E=function(){var e=Object(u.a)(y().mark(function e(t){var r,a,c;return y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=document.getElementById("favouriteSelect").value,"DAI"!==(a=l.find(function(e){return e.symbol===r})).symbol){e.next=5;break}return alert("No se puede comprar la moneda base"),e.abrupt("return");case 5:return c="https://api.0x.org/swap/v1/quote?buyToken=".concat(a.symbol,"&sellToken=DAI&sellAmount=100000000000000000"),e.next=8,fetch(c).then(function(e){return e.json()}).then(function(e){if(e.reason)return alert(e.validationErrors),e.reason;a.price=1/e.price,a.price=a.price.toFixed(4)});case 8:if(!(p.length>=0&&p.length<=2)){e.next=23;break}if(!p.includes(a)){e.next=12;break}return alert("Ya esta en tu lista"),e.abrupt("return");case 12:if(3!==n.length){e.next=15;break}return alert("Ya tienes 3 monedas favoritas"),e.abrupt("return");case 15:if(!n.includes(a)){e.next=20;break}return alert("Ya esta en tu lista"),e.abrupt("return");case 20:o([].concat(Object(s.a)(n),[a]));case 21:e.next=24;break;case 23:alert("No puedes agregar mas de 3 monedas");case 24:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("h1",{className:"mt-4"},"PICK YOUT FAVOURITE COIN"),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-sm-12 mt-4"},a.a.createElement("div",{className:"card card-select"},a.a.createElement("div",{className:"card-body text-light"},a.a.createElement("h4",{className:"card-title"},"MONEDAS FAVORITAS"),a.a.createElement("p",{className:"card-text"},"Las monedas seleccionadas en esta pesta\xf1a se actualizaran cada 30 segundos."),a.a.createElement("select",{id:"favouriteSelect",className:"form-select form-select-lg text-center favouriteSelect "},l.map(function(e){return a.a.createElement("option",{key:e.id,value:e.symbol},e.symbol)})),a.a.createElement("br",null),a.a.createElement("button",{id:"btnPick",className:"btn btn-outline-secondary border-0",onClick:function(e){return E(e)}},"Pick"))))),a.a.createElement("div",{id:"rowFavourites",className:"row"},n.map(function(e){return a.a.createElement(v,{key:e.id,coin:e})}))))},k=n(6),S=n(7),_=S.a.nav(g||(g=Object(k.a)(["\n  background: #2c0658;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem calc((100vw - 1000px) / 2);\n  z-index: 10;\n  \n"]))),F=Object(S.a)(i.c)(b||(b=Object(k.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  font-size: 1 rem;\n  \n  &.active {\n    aling-items: center;\n    border-radius: 7px;\n    background: #3e0a79;\n    color: white;\n    transition: all 0.3s ease-in-out;\n\n  }\n"]))),T=Object(S.a)(f.a)(E||(E=Object(k.a)(["\n  display: none;\n  color: #fff;\n\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]))),C=S.a.div(w||(w=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n\n  \n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),I=S.a.nav(x||(x=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n  \n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),P=Object(S.a)(i.c)(N||(N=Object(k.a)(["\n  border-radius: 4px;\n  background: rgba(53,240,208,2);\n  padding: 10px 22px;\n  color: #3e0a79;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  font-size: 1.2rem;\n  font-weight: bold;\n  shadow: 0px 0px 10px rgba(0,0,0,0.5);\n  box-shadow: 0px 0px 10px rgba(0,0,0,0.5);\n  border: none;\n\n\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: rgba(53,240,208,0.8);\n  }\n"]))),A=S.a.div(j||(j=Object(k.a)(["\n  display: flex;\n  width: 300px;\n  height: 40px;\n  justify-content: space-between;\n  background: #491d7b;\n  border-radius: 10px;\n  padding: 0.5rem;\n  margin:\n"]))),G=S.a.span(O||(O=Object(k.a)(["\n  color: yellow;\n  font-weight: bold;\n\n"]))),q=n(22),B=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(_,null,a.a.createElement(F,{to:"/"},a.a.createElement("h2",null,a.a.createElement(q.a,null)," ",a.a.createElement(G,null,"B.Name"))),a.a.createElement(T,null),a.a.createElement(C,null,a.a.createElement(A,null,a.a.createElement(F,{to:"/home",activeStyle:!0},"Home"),a.a.createElement(F,{to:"/favourite",activeStyle:!0},"Favourite"),a.a.createElement(F,{to:"/contact",activeStyle:!0},"Contact"))),a.a.createElement(I,null,a.a.createElement(P,{to:"/"},"Connect Wallet"))))},$=(n(45),function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"container margin-top100"},a.a.createElement("form",{action:"",className:"form marginClass"},a.a.createElement("div",{className:"form"},a.a.createElement("h1",{className:"h1-contacto"},"CONTACTANOS!"),a.a.createElement("div",{class:"grupo"},a.a.createElement("input",{type:"text",name:"",id:"",required:!0}),a.a.createElement("span",{class:"barra"}),a.a.createElement("label",null,"Nombre")),a.a.createElement("div",{class:"grupo"},a.a.createElement("input",{type:"email",name:"",id:"",required:!0}),a.a.createElement("span",{class:"barra"}),a.a.createElement("label",null,"Email")),a.a.createElement("div",{class:"grupo"},a.a.createElement("input",{type:"number",name:"",id:"",required:!0}),a.a.createElement("span",{class:"barra"}),a.a.createElement("label",null,"Edad")),a.a.createElement("div",{class:"grupo"},a.a.createElement("textarea",{name:"",id:"",rows:"3",required:!0}),a.a.createElement("span",{class:"barra"}),a.a.createElement("label",null,"Asunto")),a.a.createElement("button",{type:"submit",class:"boton-submit"},"Enviar")))))}),Y=n(23),D=(n(52),n(54),function(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(""),i=Object(m.a)(c,2),l=i[0],s=i[1],u=Object(r.useState)(""),f=Object(m.a)(u,2),d=f[0],h=f[1],p=Object(r.useState)(""),v=Object(m.a)(p,2),y=v[0],g=v[1],b=Object(r.useState)(""),E=Object(m.a)(b,2),w=E[0],x=E[1];return a.a.createElement("div",null,a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-4"}),a.a.createElement("div",{className:"col-md-4 contenedorForm"},a.a.createElement("form",{action:""},a.a.createElement("div",{className:"form-group cardImage"},a.a.createElement(Y.a,{number:n,name:l,expiry:d,cvc:y,focused:w})),a.a.createElement("div",{className:"form"},a.a.createElement("h1",{className:"h1-contacto"},"Ingresa tus datos!"),a.a.createElement("div",{class:"grupo"},a.a.createElement("input",{type:"text",placeholder:"Ingrese aqui su nombre",name:"nombre",onChange:function(e){return s(e.target.value)},onFocus:function(e){return x(e.target.name)},required:!0}),a.a.createElement("span",{class:"barra"}),a.a.createElement("label",null,"Nombre del propietario")),a.a.createElement("div",{class:"grupo"},a.a.createElement("input",{type:"tel",name:"numero",onChange:function(e){return o(e.target.value)},onFocus:function(e){return x(e.target.name)},required:!0}),a.a.createElement("span",{class:"barra"}),a.a.createElement("label",null,"Numero de la tarjeta")),a.a.createElement("div",{class:"grupo"},a.a.createElement("input",{type:"tel",name:"",onChange:function(e){return h(e.target.value)},onFocus:function(e){return x(e.target.name)},required:!0}),a.a.createElement("span",{class:"barra"}),a.a.createElement("label",null,"Vencimiento")),a.a.createElement("div",{class:"grupo"},a.a.createElement("input",{name:"CVC",onChange:function(e){return g(e.target.value)},onFocus:function(e){return x(e.target.name)},required:!0}),a.a.createElement("span",{class:"barra"}),a.a.createElement("label",null,"CVC")),a.a.createElement("button",{type:"submit",class:"boton-submit",onClick:function(){return n.length<16?(alert("El numero de tarjeta debe tener 16 digitos"),!1):!(l.length<3)&&!(d.length<4)&&!(y.length<3)&&void alert("Tarjeta enviada")}},"Enviar")))),a.a.createElement("div",{className:"col-md-4"})))});var V=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,null,a.a.createElement(B,null),a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/",element:a.a.createElement(p,null)}),a.a.createElement(l.a,{path:"/home",element:a.a.createElement(p,null)}),a.a.createElement(l.a,{path:"/favourite",element:a.a.createElement(L,null)}),a.a.createElement(l.a,{path:"/contact",element:a.a.createElement($,null)}),a.a.createElement(l.a,{path:"/payment",element:a.a.createElement(D,null)}))))},z=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,57)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(a.a.createElement(V,null)),z()}},[[24,3,2]]]);
//# sourceMappingURL=main.8c9c06cc.chunk.js.map