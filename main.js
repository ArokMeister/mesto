(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n}var r,o;return r=t,(o=[{key:"enableValidation",value:function(){var t;this._inputs=function(t){if(Array.isArray(t))return e(t)}(t=this._formElement.querySelectorAll(this._inputSelector))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._button=this._formElement.querySelector(this._submitButtonSelector),this._setEventListeners()}},{key:"_showInputError",value:function(t){this._error.textContent=t.validationMessage,this._error.classList.add(this._errorClass),t.classList.add(this._inputErrorClass)}},{key:"_hideInputError",value:function(t){this._error=this._formElement.querySelector("#".concat(t.id,"-error")),this._error.textContent="",this._error.classList.remove(this._errorClass),t.classList.remove(this._inputErrorClass)}},{key:"_checkInputValid",value:function(t){this._error=this._formElement.querySelector("#".concat(t.id,"-error")),t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_activeButton",value:function(){this._button.classList.remove(this._inactiveButtonClass),this._button.disabled=!1}},{key:"_inactiveButton",value:function(){this._button.classList.add(this._inactiveButtonClass),this._button.disabled=!0}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonIsValid(),this._inputs.forEach((function(e){t._hideInputError(e)}))}},{key:"_toggleButtonIsValid",value:function(){this._inputs.every((function(t){return t.validity.valid}))?this._activeButton():this._inactiveButton()}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonIsValid(),this._formElement.addEventListener("submit",(function(t){return t.preventDefault()})),this._inputs.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValid(e),t._toggleButtonIsValid()}))})),this._formElement.addEventListener("reset",(function(){setTimeout((function(){t._toggleButtonIsValid()}),0)}))}}])&&n(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var u=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._value=e.name,this._url=e.link,this._likes=e.likes,this._cardId=e._id,this._owner=e.owner._id,this._userID=i,this._templateSelector=n,this._handleCardClick=r,this._handleDeleteButton=o,this._handleLikeClick=u,this._handleRemoveClick=this._handleRemoveClick.bind(this)}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__item").cloneNode(!0)}},{key:"generateCard",value:function(){var t=this;return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__image-temp"),this._cardImageCaption=this._element.querySelector(".element__title-temp"),this._likeCounter=this._element.querySelector(".element__like-counter"),this._removeButton=this._element.querySelector(".element__remove-btn"),this._likeButton=this._element.querySelector(".element__like-btn"),this._likeState=this._likes.some((function(e){return e._id===t._userID})),this._cardImage.src=this._url,this._cardImage.alt=this._value,this._cardImageCaption.textContent=this._value,this._likeCounter.textContent=this._likes.length,this._userID!==this._owner&&this._removeButton.remove(),this.getLikeState()&&this._changeVisualLike(),this._setEventListeners(),this._element}},{key:"getLikeState",value:function(){return this._likeState}},{key:"_setEventListeners",value:function(){var t=this,e=this;this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._value,t._url)})),this._likeButton.addEventListener("click",(function(){t._changeVisualLike(),t._handleLikeClick(t._cardId,e),t._likeState=!t._likeState})),this._removeButton.addEventListener("click",(function(){t._handleDeleteButton(t._cardId,t._handleRemoveClick)}))}},{key:"_changeVisualLike",value:function(){this._likeButton.classList.toggle("element__like-btn_active")}},{key:"_handleRemoveClick",value:function(){this._element.remove()}},{key:"setLikesCounter",value:function(t){this._likeCounter.textContent=t}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var s=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._containerSelector=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){return e.addItem(t)}))}},{key:"addItem",value:function(t){this._containerSelector.prepend(this._renderer(t))}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup__close-button")||e.target.classList.contains("popup"))&&t.close()}))}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=m(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function m(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function b(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(r);if(o){var n=d(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return b(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupImageCaption=e._popup.querySelector(".popup__caption"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupImage.src=e,this._popupImage.alt=t,this._popupImageCaption.textContent=t,v(d(u.prototype),"open",this).call(this)}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=C(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},E.apply(this,arguments)}function C(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function O(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return O(this,t)});function u(t,e){var n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submit=e,n._form=n._popup.querySelector(".popup__form"),n._inputList=function(t){if(Array.isArray(t))return k(t)}(r=n._form.querySelectorAll(".popup__input"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n._submitButton=n._popup.querySelector(".popup__button"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.map((function(e){return t[e.name]=e.value})),t}},{key:"close",value:function(){var t=this;E(P(u.prototype),"close",this).call(this),setTimeout((function(){t._form.reset(),t._submitButton.textContent="Сохранить"}),200)}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("submit",(function(){var e=t._getInputValues();t._submit(e),t._submitButton.textContent="Сохранение..."})),E(P(u.prototype),"setEventListeners",this).call(this)}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}var T=function(){function t(e){var n=e.nameSelector,r=e.descriptionSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=document.querySelector(n),this._descriptionElement=document.querySelector(r),this._avatarElement=document.querySelector(o),this._userId=null}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,about:this._descriptionElement.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about;this._nameElement.textContent=e,this._descriptionElement.textContent=n}},{key:"setUserId",value:function(t){var e=t._id;this._userId=e}},{key:"getUserId",value:function(){return this._userId}},{key:"setAvatar",value:function(t){var e=t.avatar;this._avatarElement.src=e}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var A=function(){function t(e){var n=e.token,r=e.cohort;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._token=n,this._cohort=r,this._baseURL="https://mesto.nomoreparties.co/v1/".concat(this._cohort),this._headers={authorization:this._token,"Content-Type":"application/json; charset=UTF-8"}}var e,n;return e=t,(n=[{key:"_verifyResponse",value:function(t){return t.ok?t.json():Promise.reject("Ой! Ошибка: ".concat(t.status))}},{key:"getUserData",value:function(){var t=this;return fetch("".concat(this._baseURL,"/users/me"),{headers:this._headers}).then((function(e){return t._verifyResponse(e)}))}},{key:"setUserData",value:function(t){var e=this;return fetch("".concat(this._baseURL,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then((function(t){return e._verifyResponse(t)}))}},{key:"getCards",value:function(){var t=this;return fetch("".concat(this._baseURL,"/cards"),{headers:this._headers}).then((function(e){return t._verifyResponse(e)}))}},{key:"postCard",value:function(t){var e=this;return fetch("".concat(this._baseURL,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then((function(t){return e._verifyResponse(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._baseURL,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._verifyResponse(t)}))}},{key:"updateAvatar",value:function(t){var e=this;return fetch("".concat(this._baseURL,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then((function(t){return e._verifyResponse(t)}))}},{key:"setLikes",value:function(t,e){var n=this;return fetch("".concat(this._baseURL,"/cards/").concat(t,"/likes"),{method:e,headers:this._headers}).then((function(t){return n._verifyResponse(t)}))}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=V(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},x.apply(this,arguments)}function V(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=M(t)););return t}function N(t,e){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},N(t,e)}function J(t,e){if(e&&("object"===U(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},M(t)}var H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&N(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=M(r);if(o){var n=M(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return J(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submit=e,n._buttonConfirm=n._popup.querySelector(".popup__button-yes"),n._cardId=null,n._fnDelete=null,n}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;this._buttonConfirm.addEventListener("click",(function(e){e.preventDefault(),t._submit(t._cardId,t._fnDelete),t._buttonConfirm.textContent="Удаляю"})),x(M(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){var t=this;x(M(u.prototype),"close",this).call(this),setTimeout((function(){t._buttonConfirm.textContent="Да"}),200)}},{key:"open",value:function(t,e){this._cardId=t,this._fnDelete=e,x(M(u.prototype),"open",this).call(this)}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p),$=document.querySelector(".profile__edit-btn"),z=document.querySelector(".profile__add-btn"),F=document.querySelector(".profile__image-edit"),G=new T({nameSelector:".profile__name",descriptionSelector:".profile__profession",avatarSelector:".profile__avatar"}),K=new A({token:"3c6efdf5-8f0e-4628-bbb4-38bfae6a93b7",cohort:"cohort-59"});function Q(t,e){var n=e.getLikeState()?"DELETE":"PUT";K.setLikes(t,n).then((function(t){e.setLikesCounter(t.likes.length)})).catch((function(t){return console.log(t)}))}function W(t,e){nt.open(t,e)}function X(t,e){et.open(t,e)}Promise.all([K.getUserData(),K.getCards()]).then((function(t){G.setUserId(t[0]),G.setUserInfo(t[0]),G.setAvatar(t[0]),Y.renderItems(t[1])})).catch((function(t){return console.log(t)}));var Y=new s({renderer:function(t){return new u(t,".elements__item-template",W,X,G.getUserId(),Q).generateCard()}},".elements__list"),Z=new L(".popup_profile",(function(t){K.setUserData(t).then((function(t){G.setUserInfo(t),Z.close()})).catch((function(t){return console.log(t)}))}));Z.setEventListeners();var tt=new L(".popup_place",(function(t){K.postCard(t).then((function(t){Y.addItem(t),tt.close()})).catch((function(t){return console.log(t)}))}));tt.setEventListeners();var et=new H(".popup_remove",(function(t,e){K.deleteCard(t).then((function(){e(),et.close()})).catch((function(t){return console.log(t)}))}));et.setEventListeners();var nt=new g(".popup_view");nt.setEventListeners();var rt=new L(".popup_avatar",(function(t){K.updateAvatar(t).then((function(t){G.setAvatar(t),rt.close()})).catch((function(t){return console.log(t)}))}));rt.setEventListeners();var ot,it={};ot={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(ot.formSelector)).forEach((function(t){var e=new r(ot,t),n=t.getAttribute("name");it[n]=e,e.enableValidation()})),$.addEventListener("click",(function(){var t;it.profileform.resetValidation(),Z.open(),t=G.getUserInfo(),Z.setInputValues(t)})),z.addEventListener("click",(function(){it.placeform.resetValidation(),tt.open()})),F.addEventListener("click",(function(){it.avatarform.resetValidation(),rt.open()}))})();