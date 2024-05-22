/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(){r=function(){return n};var t,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",s=u.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),u=new D(n||[]);return a(i,"_invoke",{value:C(t,r,u)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var h="suspendedStart",y="suspendedYield",v="executing",m="completed",_={};function b(){}function g(){}function w(){}var S={};f(S,c,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(P([])));L&&L!==o&&i.call(L,c)&&(S=L);var x=w.prototype=b.prototype=Object.create(S);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function q(t,r){function n(o,a,u,c){var l=d(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==e(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(f).then((function(t){s.value=t,u(s)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function C(e,r,n){var o=h;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=O(u,n);if(c){if(c===_)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=d(e,r,n);if("normal"===l.type){if(o=n.done?m:y,l.arg===_)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var i=d(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,_;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,_):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,_)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(r){if(r||""===r){var n=r[c];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(i.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(e(r)+" is not iterable")}return g.prototype=w,a(x,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:g,configurable:!0}),g.displayName=f(w,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},n.awrap=function(t){return{__await:t}},k(q.prototype),f(q.prototype,l,(function(){return this})),n.AsyncIterator=q,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new q(p(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),f(x,s,"Generator"),f(x,c,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=P,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),_}},n}function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}t.d({},{u:()=>$});var i={url:"https://nomoreparties.co/v1",headers:{authorization:"cef10085-5005-43aa-ab7f-5dc77bbcfb03","Content-Type":"application/json"}},a=function(t){if(t.ok)return t.json();throw new Error("Ошибка: ".concat(t.status))},u=function(t,e,r){return fetch("".concat(i.url,"/").concat("wff-cohort-14","/").concat(t),{method:e,headers:i.headers,body:JSON.stringify(r)}).then(a)},c=function(){var t=o(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u("users/me"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=o(r().mark((function t(e,n){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u("users/me","PATCH",{name:e,about:n}));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),s=function(){var t=o(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u("users/me/avatar","PATCH",{avatar:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=o(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u("cards","GET"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=o(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u("cards","POST",e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=o(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u("cards/".concat(e),"DELETE",{_id:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=o(r().mark((function t(e,n){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u("cards/likes/".concat(e),n?"DELETE":"PUT",{}));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),y=document.querySelector("#card-template").content,v=(document.querySelector(".delete__popup").querySelector(".popup__button"),function(t){t.classList.toggle("card__like-button_is-active")}),m=function(t){d(t.id).then((function(){t.remove()})).catch((function(t){console.log(t)}))},_=function(t,e){var r=t.querySelector(".card__like-button").classList.contains("card__like-button_is-active"),n=t.querySelector(".like__amount"),o=t.querySelector(".card__like-button");h(e._id,r).then((function(t){return n.textContent=t.likes.length||0,v(o),t})).catch((function(t){console.log(t)}))},b=function(t,e,r,n){var o=y.querySelector(".places__item").cloneNode(!0),i=o.querySelector(".card__image"),a=o.querySelector(".like__amount"),u=o.querySelector(".card__like-button"),c=o.querySelector(".card__delete-button");return t.owner._id!==$.userData._id&&(c.classList.add("card__delete-button-hidden"),c.disabled=!0),t.likes.some((function(t){return t._id===$.userData._id}))&&v(u),i.src=t.link,i.alt=t.name,o.id=t._id,a.textContent=t.likes.length?t.likes.length:0,o.querySelector(".card__title").textContent=t.name,u.addEventListener("click",(function(){return r(o,t)})),c.addEventListener("click",(function(){return e(o,t)})),i.addEventListener("click",(function(){return n(t)})),o},g=function(t){if("Escape"===t.key){var e=document.querySelector(".popup_is-opened");e&&S(e)}},w=function(t){t.classList.toggle("popup_is-opened"),document.addEventListener("keydown",g)},S=function(t){t.classList.toggle("popup_is-opened"),document.removeEventListener("keydown",g)},E=function(t,e,r){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.classList.remove(r),e.disabled=!1):(e.classList.add(r),e.disabled=!0)},L=function(t,e,r){var n=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""},x=function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);r.forEach((function(r){L(t,r,e)})),E(r,n,e.inactiveButtonClass)},k=document.querySelector(".places__list"),q=document.querySelector(".profile__edit-button"),C=document.querySelector(".profile__add-button"),O=document.querySelector(".avatar-edit__button"),j=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),D=document.querySelector(".profile__image"),P=document.querySelector(".popup_type_new-card"),T=document.querySelector(".popup_type_edit"),N=document.querySelector(".popup_type_image"),G=document.querySelector(".delete__popup"),B=document.querySelector(".popup_type_update_avatar"),I=[P,T,N,G,B],F=N.querySelector(".popup__caption"),M=N.querySelector(".popup__image"),H=document.forms["new-place"],U=document.forms["edit-profile"],V=document.forms["update-avatar"],Y={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"button_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_visible"};function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var J,$={userData:{},cardsData:[]},K=function(t){F.textContent=t.name,M.src=t.link,M.alt=t.name,w(N)};!function(t){t.forEach((function(t){t.querySelector(".popup__close").addEventListener("click",(function(){return S(t)})),t.addEventListener("click",(function(e){e.target===t&&S(t)}))}))}(I),Promise.all([c(),f()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,r)||function(t,e){if(t){if("string"==typeof t)return z(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];$.userData=o,$.cardsData=i,function(t){t.forEach((function(t){k.appendChild(b(t,m,_,K))}))}($.cardsData),j.textContent=$.userData.name,A.textContent=$.userData.about,D.setAttribute("style","background-image: url(".concat($.userData.avatar))})).catch((function(t){return console.log(t)})),q.addEventListener("click",(function(){U.name.value=j.textContent,U.description.value=A.textContent,x(U,Y),w(T)})),C.addEventListener("click",(function(){x(H,Y),w(P)})),O.addEventListener("click",(function(){x(V,Y),w(B)})),H.addEventListener("submit",(function(t){t.preventDefault(),t.submitter.textContent="Сохранение...";var e={name:H.elements["place-name"].value,link:H.elements.link.value,likes:[],owner:{_id:$.userData._id}};p(e).then((function(t){k.prepend(b(t,m,_,K)),H.reset(),S(P)})).catch((function(t){console.log(t)})).finally((function(){return t.submitter.textContent="Сохранить"}))})),U.addEventListener("submit",(function(t){var e,r,n;t.preventDefault(),e=t,r=U.elements.name.value,n=U.elements.description.value,e.submitter.textContent="Сохранение...",l(r,n).then((function(t){j.textContent=r,A.textContent=n,S(T)})).catch((function(t){return console.log(t)})).finally((function(){e.submitter.textContent="Сохранить"}))})),V.addEventListener("submit",(function(t){var e,r;t.preventDefault(),e=t,r=V.elements.link.value,e.submitter.textContent="Сохранение...",s(r).then((function(t){D.setAttribute("style","background-image: url(".concat(t.avatar)),S(B),V.reset()})).catch((function(t){return console.log(t)})).finally((function(){e.submitter.textContent="Сохранить"}))})),J=Y,Array.from(document.querySelectorAll(J.formSelector)).forEach((function(t){var e=Array.from(t.querySelectorAll(J.inputSelector)),r=t.querySelector(J.submitButtonSelector);E(e,r),e.forEach((function(n){n.addEventListener("input",(function(){!function(t,e,r){var n=e.dataset.errorMessage;e.validity.patternMismatch?e.setCustomValidity(n):e.setCustomValidity(""),e.validity.valid?L(t,e,r):function(t,e,r,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.add(r.inputErrorClass),o.classList.add(r.errorClass),o.textContent=n}(t,e,r,e.validationMessage)}(t,n,J),E(e,r,J.inactiveButtonClass)}))}))}))})();