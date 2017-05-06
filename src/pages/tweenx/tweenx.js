import TWEEN from 'tween.js';

var coords = { x: 0, y: 0 };
var tween = new TWEEN.Tween(coords)
    .to({ x: 100, y: 100 }, 1000)
    .onUpdate(function() {
        console.log(this.x, this.y);
    })
    .start();

requestAnimationFrame(animate);

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
