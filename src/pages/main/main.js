import './main.css';

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

$(function(e) {
    fit();

    var data = [];
    for (var i = 1; i <= 100; i++) {
        data.push(i);
    }

    var html = data.map((el) => `
<li>
	<a class="img-box">
		<img src="/images/00${el%5+1}.jpg" />
	</a>
	<section class="info">
		<p>Macbook 2013款</p>
		<p>￥6300.00</p>
		<a>加入</a>
		<a>立即兑换</a>
	</section>
</li>
	`).join('');

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
