import './Carousel.css';

<<<<<<< HEAD
$((e) = {

});
=======
window.onload = (e) => {
    var imgBox = document.querySelector('#img-box'),
        imgContainer = imgBox.parentNode,
        imgs = imgBox.getElementsByTagName('img'),
        imgsCount = imgs.length,
        imgWidth = parseInt(getStyle(imgContainer, 'width'));


    imgContainer.style.width = imgWidth + 'px';
    imgBox.style.width = ((imgsCount + 1) * imgWidth) + 'px';
    imgBox.style.marginLeft = (-imgWidth) + 'px';

    for (var i in imgs) {
        var el = imgs[i];
        if (el.style)
            el.style.width = imgWidth + 'px';
    };

    next(imgBox, imgsCount, imgWidth, 2000);
}

var timer = null,
    index = 0;
var next = (target, count, width, long) => {
    clearInterval(timer);

    index++;

    move(target, 500, width, () => {
        if (index === count - 2) {
            index = 0;
            target.style.marginLeft = (-width) + 'px';
        }

        timer = setInterval(() => {
            next(target, count, width, long);
        }, long);
    })
}

var move = (target, speed, itarget, cb) => {
    var sumspeed = 0,
        timespan = 30,
        size = parseInt(speed / 30),
        x = 1,
        finish = false,
        a = calcA(itarget, size),
        b = calcB(itarget, size),
        interval = setInterval(() => {
            var marginLeft = parseFloat(getStyle(target, 'marginLeft')),
                speed1 = parseFloat(calcSpeed(size, x, itarget, a, b));

            if (x === size) {
                speed1 = itarget - sumspeed;
                finish = true;
                clearInterval(interval);
            }
            sumspeed += speed1;
            target.style.marginLeft = marginLeft - speed1 + 'px';

            console.log(speed1);

            x++;
            if (finish) {
                cb();
            }
        }, timespan);

}

var calcSpeed = (size, x, itarget, a, b) => {
    return a * x * x + b * x;
}

var calcA = (itarget, size) => {
    var s2 = sumX2(size);
    var s1 = sumX1(size);
    return -itarget / (s1 * size - s2);
}
var calcB = (itarget, size) => {
    var s2 = sumX2(size);
    var s1 = sumX1(size);
    return -itarget / (s2 / size - s1);
}

var sumX2 = (s) => {
    var ss = 0;
    for (var i = 1; i <= s; i++) {
        ss += i * i;
    }
    return ss;
}

var sumX1 = (s) => {
    var ss = 0;
    for (var i = 1; i <= s; i++) {
        ss += i;
    }
    return ss;
}

var getStyle = (sel, style) => {
    if (getComputedStyle) {
        return getComputedStyle(sel)[style];
    } else {
        return sel.currentStyle[style];
    }
}
>>>>>>> dafa1fa022783c54680a34867dab001b03c92ed8
