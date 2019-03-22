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
    child.on('panstart', function (e) {
        console.log('child', e.target);
    });
});
var parent = new Hammer(document.getElementById('parent'));
parent.on('panstart', function (e) {
    console.log('parent', e.target);
});
var left = new Hammer(document.getElementById('left'));
left.on('panstart', function (e) { return console.log(e.target); });
var right = new Hammer(document.getElementById('right'));
right.on('panstart', function (e) { return console.log(e.target); });


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNCO0FBQ0o7QUFFbEIsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7SUFDaEUsSUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQzdELE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQUMsQ0FBQztJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFNLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDekQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFjLElBQUssY0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztBQUUvRCxJQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDM0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFjLElBQUssY0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbkJoRSx1QyIsImZpbGUiOiJpbmRleC42ZmYxMzc2NmU3NzFlNjc5N2I0Ny5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCAnaGFtbWVyanMnO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJyNwYXJlbnQgc3BhbicpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgIGNvbnN0IGNoaWxkID0gbmV3IEhhbW1lcihlbGVtKTtcclxuICAgIGNoaWxkLm9uKCdwYW5zdGFydCcsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkJywgZS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuY29uc3QgcGFyZW50ID0gbmV3IEhhbW1lcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyZW50JykpO1xyXG5wYXJlbnQub24oJ3BhbnN0YXJ0JywgKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdwYXJlbnQnLCBlLnRhcmdldCk7XHJcbn0pO1xyXG5cclxuY29uc3QgbGVmdCA9IG5ldyBIYW1tZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKSk7XHJcbmxlZnQub24oJ3BhbnN0YXJ0JywgKGU6IEhhbW1lcklucHV0KSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldCkpO1xyXG5cclxuY29uc3QgcmlnaHQgPSBuZXcgSGFtbWVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodCcpKTtcclxucmlnaHQub24oJ3BhbnN0YXJ0JywgKGU6IEhhbW1lcklucHV0KSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldCkpO1xyXG5cclxuXHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9