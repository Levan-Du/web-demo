<<<<<<< HEAD
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
=======
import './test.css';

$((e) => {

    var clickme = (e) => {
        alert(e);
    }

    $('#btnStart').bind('click', 'hello world!', (e) => {
        alert(e.data);
    });
    $('#btnStart').click(clickme.bind(this, 'helloworld'));

})
>>>>>>> dafa1fa022783c54680a34867dab001b03c92ed8
