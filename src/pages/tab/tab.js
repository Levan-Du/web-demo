import '../../commons/swiper-3.4.2.jquery.min';
import '../../commons/swiper-3.4.2.min.css';
import './tab.css';

$((e) => {
    var mySwiper = new Swiper('.swiper-container', {
        loop: false,
        onSlideChangeEnd: (e) => {
            console.log(e);
        }
    });
});
