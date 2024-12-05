/*! For license information please see taskpane.js.LICENSE.txt */
!function(){"use strict";var t={58394:function(t,e,r){t.exports=r.p+"cf3de4bbca769e4999ad.css"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.m=t,r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t}(),r.b=document.baseURI||self.location.href,function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof A?e:A,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:W(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var d="suspendedStart",g="suspendedYield",m="executing",y="completed",v={};function A(){}function w(){}function b(){}var E={};f(E,u,(function(){return this}));var x=Object.getPrototypeOf,S=x&&x(x(B([])));S&&S!==o&&i.call(S,u)&&(E=S);var O=b.prototype=A.prototype=Object.create(E);function L(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function K(e,r){function n(o,a,c,u){var l=p(e[o],e,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==t(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function W(t,e,n){var o=d;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=V(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var l=p(t,e,n);if("normal"===l.type){if(o=n.done?y:g,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function V(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,V(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=p(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function B(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return w.prototype=b,a(O,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=f(b,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,s,"GeneratorFunction")),t.prototype=Object.create(O),t},n.awrap=function(t){return{__await:t}},L(K.prototype),f(K.prototype,l,(function(){return this})),n.AsyncIterator=K,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new K(h(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(O),f(O,s,"Generator"),f(O,u,(function(){return this})),f(O,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=B,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:B(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},n}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}var o;function i(){return a.apply(this,arguments)}function a(){return(a=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=localStorage.getItem("signatureHtml")||"",Office.context.ui.displayDialogAsync("https://junaid042.github.io/utm-manager/assets/edit-signature.html",{height:40,width:70,promptBeforeOpen:!1},(function(t){o=t.value,console.log(t),o.addEventHandler(Office.EventType.DialogMessageReceived,u),o.addEventHandler(Office.EventType.DialogEventReceived,c),setTimeout((function(){o.messageChild(r),console.log("html sent to dialog")}),5e3)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(){console.log("Dialog closed by user.")}function u(t){o.close();var e=t.message;localStorage.setItem("signatureHtml",e)}function l(){var t=new Date,e=t.getFullYear().toString().slice(-2),r=(t.getMonth()+1).toString().padStart(2,"0"),n=t.getDate().toString().padStart(2,"0"),o=t.getHours().toString().padStart(2,"0"),i=t.getMinutes().toString().padStart(2,"0");return"".concat(n,"-").concat(r,"-").concat(e,"_").concat(o,".").concat(i)}function s(){return f.apply(this,arguments)}function f(){return(f=n(e().mark((function t(){var r,n,o,i,a,c,u;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=Office.context.mailbox.item,t.next=4,new Promise((function(t,e){r.to.getAsync((function(r){r.status===Office.AsyncResultStatus.Succeeded?t(r.value):e(r.error)}))}));case 4:return n=t.sent,t.next=7,new Promise((function(t,e){r.cc.getAsync((function(r){r.status===Office.AsyncResultStatus.Succeeded?t(r.value):e(r.error)}))}));case 7:return o=t.sent,t.next=10,new Promise((function(t,e){r.subject.getAsync((function(r){r.status===Office.AsyncResultStatus.Succeeded?t(r.value):e(r.error)}))}));case 10:i=t.sent,a=n.map((function(t){return t.emailAddress})).join(", "),c=o.length>0?o.map((function(t){return t.emailAddress})).join(", "):"blank",u="e-mail_".concat(l()).replace(/ /g,"_"),document.getElementById("utm_campaign").value=a,document.getElementById("utm_source").value=Office.context.mailbox.userProfile.emailAddress,document.getElementById("utm_medium").value=u,document.getElementById("utm_content").value=i||"blank",document.getElementById("utm_term").value=c,t.next=24;break;case 21:t.prev=21,t.t0=t.catch(0),console.error("Error populating UTM defaults:",t.t0);case 24:case"end":return t.stop()}}),t,null,[[0,21]])})))).apply(this,arguments)}function h(){var t,e="http://www.centreblock.org/",r=(document.getElementById("utm_campaign").value||"blank").replace(/ /g,"_"),n=(document.getElementById("utm_source").value||"blank").replace(/ /g,"_"),o=(document.getElementById("utm_medium").value||"e-mail_".concat(l())).replace(/ /g,"_"),i=(document.getElementById("utm_content").value||"blank").replace(/ /g,"_"),a=(document.getElementById("utm_term").value||"blank").replace(/ /g,"_"),c=e+"?utm_campaign=".concat(r,"&utm_source=").concat(n,"&utm_medium=").concat(o,"&utm_content=").concat(i,"&utm_term=").concat(a);console.log(c);var u=Office.context.mailbox.userProfile.displayName,s=localStorage.getItem("signatureHtml");s?t=JSON.parse(s).html:(console.error("No signature HTML found in localStorage."),t="<p>".concat(u,'</p><p><a data-fr-linked="true" href="http://www.centreblock.org/" id="isPasted">http://www.centreblock.org/</a></p><p><img src="data:image/png;base64,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" style="width: 114px;" class="fr-fic fr-dib fr-fil"></p><p><br></p>'));var f='<a href="'.concat(c,'" target="_blank">').concat(e,"</a>"),h=t.replace(/<a[^>]*>.*?<\/a>/g,f);console.log("Updated Signature HTML:",h),Office.context.mailbox.item.body.setSignatureAsync(h,{coercionType:"html"},(function(t){t.status===Office.AsyncResultStatus.Succeeded?console.log("setSignatureAsync succeeded"):console.error(t.error)}))}Office.onReady((function(t){t.host===Office.HostType.Outlook&&(s(),document.getElementById("run").onclick=i,document.getElementById("Update").onclick=h,Office.context.mailbox.item.addHandlerAsync(Office.EventType.RecipientsChanged,(function(){s()})))}))}(),new URL(r(58394),r.b)}();
//# sourceMappingURL=taskpane.js.map