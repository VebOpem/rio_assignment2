import {animejsSmall} from './js/animejs-small.js';



const p2 = document.getElementById('#p2');
onWindowResize();

window.addEventListener("resize", onWindowResize )

function onWindowResize () {
    if (window.innerWidth <= 600) {
        console.log('smalldick');
        animejsSmall();
    } else {
        console.log('bigdick')
    }
}