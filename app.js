import { animejsLarge } from './js/animejs-large.js';
import {animejsSmall} from './js/animejs-small.js';



const p2 = document.getElementById('#p2');
onWindowResize();

window.addEventListener("resize", onWindowResize )

function onWindowResize () {
    if (window.innerWidth <= 600) {
        console.log('smalldick');
        animejsSmall();
        location.reload();
        stop()
    } else {
        console.log('bigdick')
        animejsLarge();
        location.reload();
        stop()
    }
}