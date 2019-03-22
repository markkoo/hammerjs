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
var keat = new Hammer(document.getElementById('keat'));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNCO0FBQ0o7QUFFbEIsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7SUFDaEUsSUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQzdELE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQUMsQ0FBQztJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFNLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDekQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFjLElBQUssY0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztBQUUvRCxJQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDM0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFjLElBQUssY0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztBQUVoRSxJQUFNLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ3JCekQsdUMiLCJmaWxlIjoiaW5kZXguNzU4ZGQ5ZjBiZWFmZjc0NmE3MWEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgJ2hhbW1lcmpzJztcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcjcGFyZW50IHNwYW4nKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICBjb25zdCBjaGlsZCA9IG5ldyBIYW1tZXIoZWxlbSk7XHJcbiAgICBjaGlsZC5vbigncGFuc3RhcnQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCcsIGUudGFyZ2V0KTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmNvbnN0IHBhcmVudCA9IG5ldyBIYW1tZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmVudCcpKTtcclxucGFyZW50Lm9uKCdwYW5zdGFydCcsIChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncGFyZW50JywgZS50YXJnZXQpO1xyXG59KTtcclxuXHJcbmNvbnN0IGxlZnQgPSBuZXcgSGFtbWVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0JykpO1xyXG5sZWZ0Lm9uKCdwYW5zdGFydCcsIChlOiBIYW1tZXJJbnB1dCkgPT4gY29uc29sZS5sb2coZS50YXJnZXQpKTtcclxuXHJcbmNvbnN0IHJpZ2h0ID0gbmV3IEhhbW1lcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQnKSk7XHJcbnJpZ2h0Lm9uKCdwYW5zdGFydCcsIChlOiBIYW1tZXJJbnB1dCkgPT4gY29uc29sZS5sb2coZS50YXJnZXQpKTtcclxuXHJcbmNvbnN0IGtlYXQgPSBuZXcgSGFtbWVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZWF0JykpO1xyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==