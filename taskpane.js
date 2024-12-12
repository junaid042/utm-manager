/*! For license information please see taskpane.js.LICENSE.txt */
!function(){"use strict";var t={27888:function(t,e,n){t.exports=n.p+"7e6b15e1cb088fec34ae.svg"},58394:function(t,e,n){t.exports=n.p+"cf3de4bbca769e4999ad.css"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t}(),n.b=document.baseURI||self.location.href,function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return r};var n,r={},o=Object.prototype,i=o.hasOwnProperty,c=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(n){f=function(t,e,n){return t[e]=n}}function p(t,e,n,r){var o=e&&e.prototype instanceof A?e:A,i=Object.create(o.prototype),a=new B(r||[]);return c(i,"_invoke",{value:L(t,n,a)}),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var h="suspendedStart",g="suspendedYield",m="executing",y="completed",v={};function A(){}function w(){}function b(){}var E={};f(E,u,(function(){return this}));var S=Object.getPrototypeOf,x=S&&S(S(V([])));x&&x!==o&&i.call(x,u)&&(E=x);var O=b.prototype=A.prototype=Object.create(E);function j(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function T(e,n){function r(o,c,a,u){var s=d(e[o],e,c);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&i.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):n.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,u)}))}u(s.arg)}var o;c(this,"_invoke",{value:function(t,e){function i(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(i,i):i()}})}function L(t,e,r){var o=h;return function(i,c){if(o===m)throw Error("Generator is already running");if(o===y){if("throw"===i)throw c;return{value:n,done:!0}}for(r.method=i,r.arg=c;;){var a=r.delegate;if(a){var u=I(a,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var s=d(t,e,r);if("normal"===s.type){if(o=r.done?y:g,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=y,r.method="throw",r.arg=s.arg)}}}function I(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,I(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=d(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var c=i.arg;return c?c.done?(e[t.resultName]=c.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function K(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function W(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(K,this),this.reset(!0)}function V(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,c=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=n,t.done=!0,t};return c.next=c}}throw new TypeError(t(e)+" is not iterable")}return w.prototype=b,c(O,"constructor",{value:b,configurable:!0}),c(b,"constructor",{value:w,configurable:!0}),w.displayName=f(b,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,l,"GeneratorFunction")),t.prototype=Object.create(O),t},r.awrap=function(t){return{__await:t}},j(T.prototype),f(T.prototype,s,(function(){return this})),r.AsyncIterator=T,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var c=new T(p(t,e,n,o),i);return r.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},j(O),f(O,l,"Generator"),f(O,u,(function(){return this})),f(O,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},r.values=V,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(W),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return a.type="throw",a.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],a=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var u=i.call(c,"catchLoc"),s=i.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),W(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;W(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:V(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}},r}function n(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var c=t.apply(e,r);function a(t){n(c,o,i,a,u,"next",t)}function u(t){n(c,o,i,a,u,"throw",t)}a(void 0)}))}}function o(){var t=Office.context.mailbox.item;t.subject.getAsync((function(e){if(e.status===Office.AsyncResultStatus.Succeeded){var n=e.value||"",r=document.getElementById("utm_content").value||"";n!==r&&(n.length>r.length?(document.getElementById("utm_content").value=n,console.log("UTM Content input updated to match the email subject.")):t.subject.setAsync(r,(function(t){t.status===Office.AsyncResultStatus.Succeeded?console.log("Email subject updated to match UTM Content input."):console.error("Error updating subject:",t.error)})))}else console.error("Error retrieving subject:",e.error)})),t.to.getAsync((function(e){if(e.status===Office.AsyncResultStatus.Succeeded){var n=e.value.map((function(t){return t.emailAddress})).join(", "),r=document.getElementById("utm_campaign").value||"";if(n!==r)if(n.length>r.length)document.getElementById("utm_campaign").value=n,console.log("UTM Campaign input updated to match To recipients.");else{var o=r.split(",").map((function(t){return{emailAddress:t.trim()}}));t.to.setAsync(o,(function(t){t.status===Office.AsyncResultStatus.Succeeded?console.log("To recipients updated to match UTM Campaign input."):console.error("Error updating To recipients:",t.error)}))}}else console.error("Error retrieving To recipients:",e.error)})),t.cc.getAsync((function(e){if(e.status===Office.AsyncResultStatus.Succeeded){var n=e.value.map((function(t){return t.emailAddress})).join(", "),r=document.getElementById("utm_term").value||"";if(n!==r)if(n.length>r.length)document.getElementById("utm_term").value=n,console.log("UTM Term input updated to match CC recipients.");else{var o=r.split(",").map((function(t){return{emailAddress:t.trim()}}));t.cc.setAsync(o,(function(t){t.status===Office.AsyncResultStatus.Succeeded?console.log("CC recipients updated to match UTM Term input."):console.error("Error updating CC recipients:",t.error)}))}}else console.error("Error retrieving CC recipients:",e.error)}))}var i;function c(){return a.apply(this,arguments)}function a(){return(a=r(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=localStorage.getItem("signatureHtml")||"",Office.context.ui.displayDialogAsync("https://junaid042.github.io/utm-manager/assets/edit-signature.html",{height:40,width:70,promptBeforeOpen:!1},(function(t){i=t.value,console.log(t),i.addEventHandler(Office.EventType.DialogMessageReceived,s),i.addEventHandler(Office.EventType.DialogEventReceived,u),setTimeout((function(){i.messageChild(n),console.log("html sent to dialog")}),5e3)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(){console.log("Dialog closed by user.")}function s(t){i.close();var e=t.message;localStorage.setItem("signatureHtml",e)}function l(){var t=new Date,e=t.getFullYear().toString().slice(-2),n=(t.getMonth()+1).toString().padStart(2,"0"),r=t.getDate().toString().padStart(2,"0"),o=t.getHours().toString().padStart(2,"0"),i=t.getMinutes().toString().padStart(2,"0");return"".concat(r,"-").concat(n,"-").concat(e,"_").concat(o,".").concat(i)}function f(){return p.apply(this,arguments)}function p(){return(p=r(e().mark((function t(){var n,r,o,i,c,a,u;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=Office.context.mailbox.item,t.next=4,new Promise((function(t,e){n.to.getAsync((function(n){n.status===Office.AsyncResultStatus.Succeeded?t(n.value):e(n.error)}))}));case 4:return r=t.sent,t.next=7,new Promise((function(t,e){n.cc.getAsync((function(n){n.status===Office.AsyncResultStatus.Succeeded?t(n.value):e(n.error)}))}));case 7:return o=t.sent,t.next=10,new Promise((function(t,e){n.subject.getAsync((function(n){n.status===Office.AsyncResultStatus.Succeeded?t(n.value):e(n.error)}))}));case 10:i=t.sent,c=r.map((function(t){return t.emailAddress})).join(", "),a=o.length>0?o.map((function(t){return t.emailAddress})).join(", "):"blank",u="e-mail_".concat(l()).replace(/ /g,"_"),document.getElementById("utm_campaign").value=c,document.getElementById("utm_source").value=Office.context.mailbox.userProfile.emailAddress,document.getElementById("utm_medium").value=u,document.getElementById("utm_content").value=i||"blank",document.getElementById("utm_term").value=a,t.next=24;break;case 21:t.prev=21,t.t0=t.catch(0),console.error("Error populating UTM defaults:",t.t0);case 24:case"end":return t.stop()}}),t,null,[[0,21]])})))).apply(this,arguments)}function d(){var t,e="http://www.centreblock.org/",n=(document.getElementById("utm_campaign").value||"blank").replace(/ /g,"_"),r=(document.getElementById("utm_source").value||"blank").replace(/ /g,"_"),o=(document.getElementById("utm_medium").value||"e-mail_".concat(l())).replace(/ /g,"_"),i=(document.getElementById("utm_content").value||"blank").replace(/ /g,"_"),c=(document.getElementById("utm_term").value||"blank").replace(/ /g,"_"),a=e+"?utm_campaign=".concat(n,"&utm_source=").concat(r,"&utm_medium=").concat(o,"&utm_content=").concat(i,"&utm_term=").concat(c);console.log(a);var u=Office.context.mailbox.userProfile.displayName,s=localStorage.getItem("signatureHtml");s?t=JSON.parse(s).html:(console.error("No signature HTML found in localStorage."),t="<p>".concat(u,'</p><p><a data-fr-linked="true" href="http://www.centreblock.org/" id="isPasted">http://www.centreblock.org/</a></p><p><img src="data:image/png;base64,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" style="width: 114px;" class="fr-fic fr-dib fr-fil"></p><p><br></p>'));var f='<a href="'.concat(a,'" target="_blank">').concat(e,"</a>"),p=t.replace(/<p[^>]*data-f-id="pbf"[^>]*>.*?<a[^>]*href="https:\/\/www\.froala\.com\/wysiwyg-editor\?pb=1"[^>]*>.*?<\/a><\/p>/g,"").replace(/<a[^>]*>.*?<\/a>/g,f);console.log("Updated Signature HTML:",p),Office.context.mailbox.item.body.setSignatureAsync(p,{coercionType:"html"},(function(t){t.status===Office.AsyncResultStatus.Succeeded?console.log("setSignatureAsync succeeded"):console.error(t.error)}))}Office.onReady((function(t){t.host===Office.HostType.Outlook&&(f(),document.getElementById("run").onclick=c,document.getElementById("Update").onclick=d,document.getElementById("sync").onclick=o,Office.context.mailbox.item.addHandlerAsync(Office.EventType.RecipientsChanged,(function(){f()})))}))}(),new URL(n(58394),n.b),new URL(n(27888),n.b)}();
//# sourceMappingURL=taskpane.js.map