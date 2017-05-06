import Swiper from '../../commons/swiper-3.4.2.jquery.min';
import '../../commons/swiper-3.4.2.min.css';
import './swiperx.css';

window.onload = (e) => {
    console.log(Swiper);
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
    })
}
console.log('after onload');
