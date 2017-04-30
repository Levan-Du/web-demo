import './Carousel.css';

window.onload = (e) => {
    var imgBox = document.querySelector('#img-box'),
        imgContainer = imgBox.parentNode,
        imgs = imgBox.getElementsByTagName('img'),
        imgsCount = imgs.length,
        imgWidth = parseInt(getStyle(imgContainer, 'width'));


    imgContainer.style.width = imgWidth + 'px';
    imgBox.style.width = (imgsCount * imgWidth) + 'px';

    for (var i in imgs) {
        var el = imgs[i];
        if (el.style)
            el.style.width = imgWidth + 'px';
    };

    moveNext(imgBox, imgsCount, imgWidth, 2000);
}

var timer = null,
    index = 0;
var moveNext = (target, count, width, long) => {
    clearInterval(timer);

    index++;

    var itarget = width,
        speed = 1,
        sumspeed = 0,
        finish = false,
        interval = setInterval(() => {
            var marginLeft = parseInt(getStyle(target, 'marginLeft'));
            speed = 2 + speed % itarget;
            if (sumspeed + speed > itarget) {
                speed = itarget - sumspeed;
                clearInterval(interval);
                finish = true;
            } else {
                sumspeed += speed;
            }
            console.log(speed);
            target.style.marginLeft = (marginLeft - speed) + 'px';

            if (finish) {
                if (index === count - 2) {
                    index = 0;
                    target.style.marginLeft = (-width) + 'px';
                }

                timer = setInterval(() => {
                    moveNext(target, count, width, long);
                }, long);
            }
        }, 30);
}

var getStyle = (sel, style) => {
    if (getComputedStyle) {
        return getComputedStyle(sel)[style];
    } else {
        return sel.currentStyle[style];
    }
}
