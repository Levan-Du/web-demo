webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

window.onload = function (e) {
    var imgBox = document.querySelector('#img-box'),
        imgContainer = imgBox.parentNode,
        imgs = imgBox.getElementsByTagName('img'),
        imgsCount = imgs.length,
        imgWidth = parseInt(getStyle(imgContainer, 'width'));

    imgContainer.style.width = imgWidth + 'px';
    imgBox.style.width = (imgsCount + 1) * imgWidth + 'px';

    for (var i in imgs) {
        var el = imgs[i];
        if (el.style) el.style.width = imgWidth + 'px';
    };

    next(imgBox, imgsCount, imgWidth, 2000);
};

var timer = null,
    index = 0;
var next = function next(target, count, width, long) {
    clearInterval(timer);

    index++;

    move(target, 1, width, function () {
        if (index === count - 2) {
            index = 0;
            target.style.marginLeft = -width + 'px';
        }

        timer = setInterval(function () {
            next(target, count, width, long);
        }, long);
    });
};

var move = function move(target, speed, itarget, cb) {
    var sumspeed = 0,
        size = 10,
        step = 1,
        interval = setInterval(function () {
        var marginLeft = parseInt(getStyle(target, 'marginLeft')),
            speed1 = parseInt(calcSpeed(step, itarget));

        if (step === size - 1) {
            speed1 = itarget - sumspeed;
            clearInterval(interval);
            cb();
        }
        target.style.marginLeft = marginLeft - speed1 + 'px';
        console.log(moveLeft);

        sumspeed += speed1;
        step++;
    }, 30);
};

var calcSpeed = function calcSpeed(step, itarget) {
    return -step * step + calcB(itarget) * step;
};

var calcB = function calcB(itarget) {
    return (itarget + 385) / 55;
};

var getStyle = function getStyle(sel, style) {
    if (getComputedStyle) {
        return getComputedStyle(sel)[style];
    } else {
        return sel.currentStyle[style];
    }
};

/***/ })
],[4]);