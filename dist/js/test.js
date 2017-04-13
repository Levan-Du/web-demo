webpackJsonp([2],{

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ele = document.getElementsByClassName("img-box")[0];
var beginX, beginY, endX, endY, swipeLeft, swipeRight;
ele.addEventListener('touchstart', function (event) {
    event.stopPropagation();
    event.preventDefault();
    beginX = event.targetTouches[0].screenX;
    beginY = event.targetTouches[0].screenY;
    swipeLeft = false, swipeRight = false;
});

ele.addEventListener('touchmove', function (event) {
    event.stopPropagation();
    event.preventDefault();
    endX = event.targetTouches[0].screenX;
    endY = event.targetTouches[0].screenY;
    // 左右滑动
    if (Math.abs(endX - beginX) - Math.abs(endY - beginY) > 0) {
        /*向右滑动*/
        if (endX - beginX > 0) {
            swipeRight = true;
            swipeLeft = false;
        }
        /*向左滑动*/
        else {
                swipeLeft = true;
                swipeRight = false;
            }
    } else if (Math.abs(endX - beginX) - Math.abs(endY - beginY) < 0) {
        // 上下滑动
    }
});
ele.addEventListener('touchend', function (event) {
    event.stopPropagation();
    event.preventDefault();

    if (Math.abs(endX - beginX) - Math.abs(endY - beginY) > 0) {
        event.stopPropagation();
        event.preventDefault();
        if (swipeRight) {
            swipeRight = !swipeRight;
            /*向右滑动*/
        }
        if (swipeLeft) {
            swipeLeft = !swipeLeft;
            /*向左滑动*/
        }
    }
});

/***/ })

},[13]);