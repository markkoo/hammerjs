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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdHlsZS5zY3NzPzg2MTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0I7QUFDSjtBQUVsQixRQUFRLENBQUMsZ0JBQWdCLENBQWMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtJQUNoRSxJQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixLQUFLLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUM7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDN0QsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUMsQ0FBQztBQUVILElBQU0sSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN6RCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQWMsSUFBSyxjQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0FBRS9ELElBQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUMzRCxLQUFLLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQWMsSUFBSyxjQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNuQmhFLHVDIiwiZmlsZSI6ImluZGV4LjM1NTQwODJiMzM2MzEwZWNlZjFjLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuaW1wb3J0ICdoYW1tZXJqcyc7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignI3BhcmVudCBzcGFuJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgY29uc3QgY2hpbGQgPSBuZXcgSGFtbWVyKGVsZW0pO1xyXG4gICAgY2hpbGQub24oJ3BhbnN0YXJ0JywgKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQnLCBlLnRhcmdldCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5jb25zdCBwYXJlbnQgPSBuZXcgSGFtbWVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJlbnQnKSk7XHJcbnBhcmVudC5vbigncGFuc3RhcnQnLCAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3BhcmVudCcsIGUudGFyZ2V0KTtcclxufSk7XHJcblxyXG5jb25zdCBsZWZ0ID0gbmV3IEhhbW1lcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdCcpKTtcclxubGVmdC5vbigncGFuc3RhcnQnLCAoZTogSGFtbWVySW5wdXQpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0KSk7XHJcblxyXG5jb25zdCByaWdodCA9IG5ldyBIYW1tZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0JykpO1xyXG5yaWdodC5vbigncGFuc3RhcnQnLCAoZTogSGFtbWVySW5wdXQpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0KSk7XHJcblxyXG5cclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=