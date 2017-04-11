webpackJsonp([1],{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(1);

__webpack_require__(3);

function fit() {
    console.log($('html').css('fontSize'));
    var winWdith = $(window).width();
    if (winWdith < 640) {
        $('html').css('fontSize', 16);
    } else if (winWdith < 1000) {
        $('html').css('fontSize', 20);
    } else {
        $('html').css('fontSize', 30);
    }
}

$(function (e) {
    fit();

    var data = [];
    for (var i = 1; i <= 100; i++) {
        data.push(i);
    }

    var html = data.map(function (el) {
        return '\n<li>\n\t<a class="img-box">\n\t\t<img src="/images/00' + (el % 5 + 1) + '.jpg" />\n\t</a>\n\t<section class="info">\n\t\t<p>Macbook 2013\u6B3E</p>\n\t\t<p>\uFFE56300.00</p>\n\t\t<a>\u52A0\u5165</a>\n\t\t<a>\u7ACB\u5373\u5151\u6362</a>\n\t</section>\n</li>\n\t';
    }).join('');

    $('#list1').append(html);

    // calc();
});

function calc() {
    var winWdith = $(window).width(),
        splitnum = 2,
        itemWidth = 0;

    if (winWdith < 640) {
        splitnum = 2;
    } else {
        splitnum = 3;
    }

    itemWidth = winWdith / splitnum;

    $('#list1').width(itemWidth);
    $('#list1 .img-box').width(itemWidth);
    $('#list1 .img-box').height(itemWidth);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[11]);