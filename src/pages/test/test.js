import 'animate.css';
import './test.css';
import 'avalon';

$((e) => {

    var clickme = (e) => {
        alert(e);
    }

    $('#btnStart').bind('click', 'hello world!', (e) => {
        alert(e.data);
    });
    $('#btnStart').click(clickme.bind(this, 'helloworld'));

})
