/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./app/main/main.js ***!
  \**************************/


var path = __webpack_require__(/*! path */ "path");

var _require = __webpack_require__(/*! electron */ "electron"),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow;

function createWindow() {
  var mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    } //这个是为了能在主进程中引入node模块,必须项

  }); //这个是创建了新窗口

  mainWindow.loadFile('./index.html'); //选择加载html文件
}

app.whenReady().then(function () {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7QUN0QkEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGtCQUFELENBQXBCOztBQUNBLGVBQStCQSxtQkFBTyxDQUFDLDBCQUFELENBQXRDO0FBQUEsSUFBUUMsR0FBUixZQUFRQSxHQUFSO0FBQUEsSUFBYUMsYUFBYixZQUFhQSxhQUFiOztBQUNBLFNBQVNDLFlBQVQsR0FBd0I7QUFDdEIsTUFBTUMsVUFBVSxHQUFHLElBQUlGLGFBQUosQ0FBa0I7QUFDbkNHLElBQUFBLEtBQUssRUFBRSxJQUQ0QjtBQUVuQ0MsSUFBQUEsTUFBTSxFQUFFLEdBRjJCO0FBR25DQyxJQUFBQSxjQUFjLEVBQUU7QUFDZEMsTUFBQUEsZUFBZSxFQUFFLElBREg7QUFFZEMsTUFBQUEsZ0JBQWdCLEVBQUU7QUFGSixLQUhtQixDQU1qQzs7QUFOaUMsR0FBbEIsQ0FBbkIsQ0FEc0IsQ0FRcEI7O0FBQ0ZMLEVBQUFBLFVBQVUsQ0FBQ00sUUFBWCxDQUFvQixjQUFwQixFQVRzQixDQVV0QjtBQUNEOztBQUNEVCxHQUFHLENBQUNVLFNBQUosR0FBZ0JDLElBQWhCLENBQXFCLFlBQU07QUFDekJULEVBQUFBLFlBQVk7QUFDWkYsRUFBQUEsR0FBRyxDQUFDWSxFQUFKLENBQU8sVUFBUCxFQUFtQixZQUFNO0FBQ3ZCLFFBQUlYLGFBQWEsQ0FBQ1ksYUFBZCxHQUE4QkMsTUFBOUIsS0FBeUMsQ0FBN0MsRUFBZ0RaLFlBQVk7QUFDN0QsR0FGRDtBQUdELENBTEQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWN0cm9uLWhlbGxvd3JvbGQvZXh0ZXJuYWwgXCJlbGVjdHJvblwiIiwid2VicGFjazovL2VsZWN0cm9uLWhlbGxvd3JvbGQvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24taGVsbG93cm9sZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVjdHJvbi1oZWxsb3dyb2xkLy4vYXBwL21haW4vbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXHJcbmNvbnN0IHsgYXBwLCBCcm93c2VyV2luZG93IH0gPSByZXF1aXJlKCdlbGVjdHJvbicpXHJcbmZ1bmN0aW9uIGNyZWF0ZVdpbmRvdygpIHtcclxuICBjb25zdCBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xyXG4gICAgd2lkdGg6IDEwMDAsXHJcbiAgICBoZWlnaHQ6IDgwMCxcclxuICAgIHdlYlByZWZlcmVuY2VzOiB7XHJcbiAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSxcclxuICAgICAgY29udGV4dElzb2xhdGlvbjogZmFsc2VcclxuICAgIH0sLy/ov5nkuKrmmK/kuLrkuobog73lnKjkuLvov5vnqIvkuK3lvJXlhaVub2Rl5qih5Z2XLOW/hemhu+mhuVxyXG4gIH0pLy/ov5nkuKrmmK/liJvlu7rkuobmlrDnqpflj6NcclxuICBtYWluV2luZG93LmxvYWRGaWxlKCcuL2luZGV4Lmh0bWwnKVxyXG4gIC8v6YCJ5oup5Yqg6L29aHRtbOaWh+S7tlxyXG59XHJcbmFwcC53aGVuUmVhZHkoKS50aGVuKCgpID0+IHtcclxuICBjcmVhdGVXaW5kb3coKVxyXG4gIGFwcC5vbignYWN0aXZhdGUnLCAoKSA9PiB7XHJcbiAgICBpZiAoQnJvd3NlcldpbmRvdy5nZXRBbGxXaW5kb3dzKCkubGVuZ3RoID09PSAwKSBjcmVhdGVXaW5kb3coKVxyXG4gIH0pXHJcbn0pIl0sIm5hbWVzIjpbInBhdGgiLCJyZXF1aXJlIiwiYXBwIiwiQnJvd3NlcldpbmRvdyIsImNyZWF0ZVdpbmRvdyIsIm1haW5XaW5kb3ciLCJ3aWR0aCIsImhlaWdodCIsIndlYlByZWZlcmVuY2VzIiwibm9kZUludGVncmF0aW9uIiwiY29udGV4dElzb2xhdGlvbiIsImxvYWRGaWxlIiwid2hlblJlYWR5IiwidGhlbiIsIm9uIiwiZ2V0QWxsV2luZG93cyIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=