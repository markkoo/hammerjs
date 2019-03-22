(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);


document.querySelectorAll('#parent span').forEach(function (elem) {
    var child = new Hammer(elem);
    child.on('tap', function (e) {
        console.log('child', e.target);
    });
});
var parent = new Hammer(document.getElementById('parent'));
parent.on('tap', function (e) {
    console.log('parent', e.target);
});


/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./index.ts","runtime~index","vendors~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdHlsZS5zY3NzPzg2MTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0I7QUFDSjtBQUVsQixRQUFRLENBQUMsZ0JBQWdCLENBQWMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtJQUNoRSxJQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFDLENBQUM7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILElBQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUM3RCxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFDLENBQUM7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ2JILHVDIiwiZmlsZSI6ImluZGV4LmMwMjIxZThjNTNkYzE2ZjI5ZmVhLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuaW1wb3J0ICdoYW1tZXJqcyc7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignI3BhcmVudCBzcGFuJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgY29uc3QgY2hpbGQgPSBuZXcgSGFtbWVyKGVsZW0pO1xyXG4gICAgY2hpbGQub24oJ3RhcCcsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkJywgZS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuY29uc3QgcGFyZW50ID0gbmV3IEhhbW1lcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyZW50JykpO1xyXG5wYXJlbnQub24oJ3RhcCcsIChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncGFyZW50JywgZS50YXJnZXQpO1xyXG59KTtcclxuXHJcblxyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==