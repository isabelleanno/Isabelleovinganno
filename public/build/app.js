"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/frontend/app.js":
/*!********************************!*\
  !*** ./assets/frontend/app.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scss/main.scss */ "./assets/frontend/scss/main.scss");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");







// This app's main JavaScript file!

// Import main css file

// Import Bootstrap JavaScript (this includes offcanvas)


//Find all mailto: buttons, and replace with copied to clipboard functionality
document.addEventListener('DOMContentLoaded', function () {
  var mailtoLinks = document.querySelectorAll('a[href^="mailto:"]');
  mailtoLinks.forEach(function (link) {
    var email = link.href.replace('mailto:', '').split('?')[0];
    link.href = '#';
    link.addEventListener('click', function (e) {
      e.preventDefault();

      // Copy email to clipboard
      navigator.clipboard.writeText(email).then(function () {
        // Show success alert
        alert('Email address copied: ' + email);
      })["catch"](function (err) {
        // Fallback for older browsers
        var textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Email address copied: ' + email);
      });
    });
  });
});

/***/ }),

/***/ "./assets/frontend/scss/main.scss":
/*!****************************************!*\
  !*** ./assets/frontend/scss/main.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_core-js_modules_es_array-42a564"], () => (__webpack_exec__("./assets/frontend/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQzBCO0FBQzFCO0FBQ21COztBQUduQjtBQUNBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7RUFDckQsSUFBTUMsV0FBVyxHQUFHRixRQUFRLENBQUNHLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDO0VBRW5FRCxXQUFXLENBQUNFLE9BQU8sQ0FBQyxVQUFBQyxJQUFJLEVBQUk7SUFDeEIsSUFBTUMsS0FBSyxHQUFHRCxJQUFJLENBQUNFLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU1REosSUFBSSxDQUFDRSxJQUFJLEdBQUcsR0FBRztJQUNmRixJQUFJLENBQUNKLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFTUyxDQUFDLEVBQUU7TUFDdkNBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7O01BRWxCO01BQ0FDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUNSLEtBQUssQ0FBQyxDQUFDUyxJQUFJLENBQUMsWUFBVztRQUNqRDtRQUNBQyxLQUFLLENBQUMsd0JBQXdCLEdBQUdWLEtBQUssQ0FBQztNQUMzQyxDQUFDLENBQUMsU0FBTSxDQUFDLFVBQVNXLEdBQUcsRUFBRTtRQUNuQjtRQUNBLElBQU1DLFFBQVEsR0FBR2xCLFFBQVEsQ0FBQ21CLGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFDbkRELFFBQVEsQ0FBQ0UsS0FBSyxHQUFHZCxLQUFLO1FBQ3RCTixRQUFRLENBQUNxQixJQUFJLENBQUNDLFdBQVcsQ0FBQ0osUUFBUSxDQUFDO1FBQ25DQSxRQUFRLENBQUNLLE1BQU0sQ0FBQyxDQUFDO1FBQ2pCdkIsUUFBUSxDQUFDd0IsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUM1QnhCLFFBQVEsQ0FBQ3FCLElBQUksQ0FBQ0ksV0FBVyxDQUFDUCxRQUFRLENBQUM7UUFDbkNGLEtBQUssQ0FBQyx3QkFBd0IsR0FBR1YsS0FBSyxDQUFDO01BQzNDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7OztBQ25DRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udGVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250ZW5kL3Njc3MvbWFpbi5zY3NzP2JmNjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcblxuLy8gSW1wb3J0IG1haW4gY3NzIGZpbGVcbmltcG9ydCAnLi9zY3NzL21haW4uc2Nzcyc7XG4vLyBJbXBvcnQgQm9vdHN0cmFwIEphdmFTY3JpcHQgKHRoaXMgaW5jbHVkZXMgb2ZmY2FudmFzKVxuaW1wb3J0ICdib290c3RyYXAnO1xuXG5cbi8vRmluZCBhbGwgbWFpbHRvOiBidXR0b25zLCBhbmQgcmVwbGFjZSB3aXRoIGNvcGllZCB0byBjbGlwYm9hcmQgZnVuY3Rpb25hbGl0eVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1haWx0b0xpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIm1haWx0bzpcIl0nKTtcbiAgICBcbiAgICBtYWlsdG9MaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICBjb25zdCBlbWFpbCA9IGxpbmsuaHJlZi5yZXBsYWNlKCdtYWlsdG86JywgJycpLnNwbGl0KCc/JylbMF07XG4gICAgICAgIFxuICAgICAgICBsaW5rLmhyZWYgPSAnIyc7XG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENvcHkgZW1haWwgdG8gY2xpcGJvYXJkXG4gICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChlbWFpbCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvLyBTaG93IHN1Y2Nlc3MgYWxlcnRcbiAgICAgICAgICAgICAgICBhbGVydCgnRW1haWwgYWRkcmVzcyBjb3BpZWQ6ICcgKyBlbWFpbCk7XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAvLyBGYWxsYmFjayBmb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICAgICAgdGV4dEFyZWEudmFsdWUgPSBlbWFpbDtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgICAgICAgICAgICAgICB0ZXh0QXJlYS5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dEFyZWEpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdFbWFpbCBhZGRyZXNzIGNvcGllZDogJyArIGVtYWlsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1haWx0b0xpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwiZW1haWwiLCJocmVmIiwicmVwbGFjZSIsInNwbGl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGhlbiIsImFsZXJ0IiwiZXJyIiwidGV4dEFyZWEiLCJjcmVhdGVFbGVtZW50IiwidmFsdWUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==