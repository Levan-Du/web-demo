import './test.css';

var Tween = {
    Elastic: {
        easeOut: function(t, b, c, d, a, p) {
            var s;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (typeof p == "undefined") p = d * .3;
            if (!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
        }
    }
};

var ball = document.getElementById("ball")
var elasticFall = function() {
    var start = 0,
        beginingValue = 0,
        changeValue = 400,
        during = 100;
    var _run = function() {
        start++;
        var top = Tween.Elastic.easeOut(start, beginingValue, changeValue, during);
        ball.style.webkitTransform = "translateY(" + top + "px)";
        if (start < during) requestAnimationFrame(_run);
    }
    _run();
};
elasticFall();
