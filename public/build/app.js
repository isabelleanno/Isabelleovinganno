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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQzBCO0FBQzFCO0FBQ21COztBQUduQjtBQUNBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7RUFDckQsSUFBTUMsV0FBVyxHQUFHRixRQUFRLENBQUNHLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDO0VBRW5FRCxXQUFXLENBQUNFLE9BQU8sQ0FBQyxVQUFBQyxJQUFJLEVBQUk7SUFDeEIsSUFBTUMsS0FBSyxHQUFHRCxJQUFJLENBQUNFLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU1REosSUFBSSxDQUFDRSxJQUFJLEdBQUcsR0FBRztJQUNmRixJQUFJLENBQUNKLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFTUyxDQUFDLEVBQUU7TUFDdkNBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7O01BRWxCO01BQ0FDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUNSLEtBQUssQ0FBQyxDQUFDUyxJQUFJLENBQUMsWUFBVztRQUNqRDtRQUNBQyxLQUFLLENBQUMsd0JBQXdCLEdBQUdWLEtBQUssQ0FBQztNQUMzQyxDQUFDLENBQUMsU0FBTSxDQUFDLFVBQVNXLEdBQUcsRUFBRTtRQUNuQjtRQUNBLElBQU1DLFFBQVEsR0FBR2xCLFFBQVEsQ0FBQ21CLGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFDbkRELFFBQVEsQ0FBQ0UsS0FBSyxHQUFHZCxLQUFLO1FBQ3RCTixRQUFRLENBQUNxQixJQUFJLENBQUNDLFdBQVcsQ0FBQ0osUUFBUSxDQUFDO1FBQ25DQSxRQUFRLENBQUNLLE1BQU0sQ0FBQyxDQUFDO1FBQ2pCdkIsUUFBUSxDQUFDd0IsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUM1QnhCLFFBQVEsQ0FBQ3FCLElBQUksQ0FBQ0ksV0FBVyxDQUFDUCxRQUFRLENBQUM7UUFDbkNGLEtBQUssQ0FBQyx3QkFBd0IsR0FBR1YsS0FBSyxDQUFDO01BQzNDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7OztBQ25DRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udGVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250ZW5kL3Njc3MvbWFpbi5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG5cbi8vIEltcG9ydCBtYWluIGNzcyBmaWxlXG5pbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnO1xuLy8gSW1wb3J0IEJvb3RzdHJhcCBKYXZhU2NyaXB0ICh0aGlzIGluY2x1ZGVzIG9mZmNhbnZhcylcbmltcG9ydCAnYm9vdHN0cmFwJztcblxuXG4vL0ZpbmQgYWxsIG1haWx0bzogYnV0dG9ucywgYW5kIHJlcGxhY2Ugd2l0aCBjb3BpZWQgdG8gY2xpcGJvYXJkIGZ1bmN0aW9uYWxpdHlcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtYWlsdG9MaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCJtYWlsdG86XCJdJyk7XG4gICAgXG4gICAgbWFpbHRvTGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgY29uc3QgZW1haWwgPSBsaW5rLmhyZWYucmVwbGFjZSgnbWFpbHRvOicsICcnKS5zcGxpdCgnPycpWzBdO1xuICAgICAgICBcbiAgICAgICAgbGluay5ocmVmID0gJyMnO1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDb3B5IGVtYWlsIHRvIGNsaXBib2FyZFxuICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZW1haWwpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gU2hvdyBzdWNjZXNzIGFsZXJ0XG4gICAgICAgICAgICAgICAgYWxlcnQoJ0VtYWlsIGFkZHJlc3MgY29waWVkOiAnICsgZW1haWwpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sgZm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgICAgIHRleHRBcmVhLnZhbHVlID0gZW1haWw7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG4gICAgICAgICAgICAgICAgdGV4dEFyZWEuc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRBcmVhKTtcbiAgICAgICAgICAgICAgICBhbGVydCgnRW1haWwgYWRkcmVzcyBjb3BpZWQ6ICcgKyBlbWFpbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWlsdG9MaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGluayIsImVtYWlsIiwiaHJlZiIsInJlcGxhY2UiLCJzcGxpdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRoZW4iLCJhbGVydCIsImVyciIsInRleHRBcmVhIiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwiYm9keSIsImFwcGVuZENoaWxkIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=