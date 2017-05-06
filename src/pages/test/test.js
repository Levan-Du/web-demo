import '../../commons/swiper-3.4.2.min.css';
import './test.css';
import '../../commons/swiper-3.4.2.jquery.min';


$((e) => {
    var mySwiper = new Swiper('#swiper1', {
        // direction: 'vertical',
        loop: true,

        onSlideChangeEnd: (e) => {
            console.log('end');
        }
    });

    console.log(Swiper, mySwiper.slideTo);
});
