/* new Waypoint({
    element: document.getElementById('p2'),
    handler: function() {
        console.log('p2');
        test2.play();
    }
}) */

const gra = function(min, max) {
    return Math.random() * (max - min) + min;
}
const init = function(){
  //let items = document.querySelectorAll('section');
  //cssScrollSnapPolyfill()
}
init();


function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight'
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100
};

const p2 = document.getElementById('#p2');

const tl = anime.timeline({ autoplay: false });
tl
.add({
    targets: '#p1',
    keyframes: [
        { opacity:1, duration:0},
        { opacity:0, duration:100}
    ],
    //autoplay: false,
    easing: 'linear',
}, 0)
.add({ 
    targets: '#p2-text',
    keyframes: [
        {translateX: -400, opacity: 0, duration:0},
        {translateX: 0, opacity:1, duration:5, translateY: 0, duration:5},
        {opacity: 0, duration: 5}
    ],
    //autoplay: false,
    easing: 'linear',
    delay: anime.stagger(2500, {start: 3.5}),
}, 0)
.add ({
    targets: '#p2-img',
    keyframes: [
        {translateY: 400, opacity: 0, duration: 0},
        {translateY: 0, opacity: 1, duration: 5},
        {opacity: 0, duration: 5}
    ],
    //autoplay: false,
    easing: 'linear',
    delay: anime.stagger(2500, {start: 3.5}),
}, 0)
.add ({
    targets: '#p3-text',
    keyframes: [
        {translateX: 400, translateY: -350, opacity: 0, duration:0},
        {translateX: -200, translateY: 300, opacity: 1, duration: 4},
        {translateY: -400, opacity: 0, duration: 30}
    ],
    //autoplay: false,
    easing: 'linear',
    delay: anime.stagger(2500, {start: 12}),
}, 0)
.add({
    targets: '#p3-img',
    keyframes: [
        {translateX: -400, translateY: 350, opacity: 0, duration:0},
        {translateX: 300, translateY: -100, opacity: 1, duration: 4},
        {opacity: 0, duration: 7}
    ],
    easing: 'linear',
    delay: anime.stagger(2500, {start: 12}),
}, 0)
.add({
    targets: '#p4-text',
    keyframes: [
        {translateX: -800, opacity: 0, duration:0},
        {translateX: -150, translateY: 300, opacity: 1, duration: 5},
    ],
    easing: 'linear',
    delay: anime.stagger(2500, {start: 20}),
}, 0)
.add({
    targets: '#p4-img',
    keyframes: [
        {translateX: 250, translateY: -100, opacity: 1, duration: 0},
    ],
    easing: 'linear',
    delay: anime.stagger(2500, {start: 20}),
}, 0)
.add({
    targets: '#p5-text',
    keyframes: [
        {translateX: -150, translateY: 300, opacity: 1, duration:0},
    ],
    easing: 'linear',
    delay: anime.stagger(2500, {start: 25}),
}, 0)
.add({
    targets: '#p5-text2',
    keyframes: [
        {translateX: -800, opacity: 0, duration:0},
        {translateX: -150, translateY: 300, opacity: 1, duration: 8},
    ],
    easing: 'linear',
    delay: anime.stagger(2500, {start: 25}),
}, 0)
.add({
    targets: '#p5-img',
    keyframes: [
        {translateX: 250, translateY: -100, opacity: 1, duration: 0},
    ],
    easing: 'linear',
    delay: anime.stagger(2500, {start: 25})
}, 0)



 /* var text = anime({
    targets: '#p2 p',
    keyframes: [
        {translateX: -100, opacity: 0, duration:0},
        {translateX: 0, opacity:1, duration:50, translateY: 250, duration:5},
    ],
}); */

//new AnimePlayer({ add: tl })

window.addEventListener('scroll', () => {
	const persentage = getScrollPercent()
	tl.seek(tl.duration * (persentage / 100))
});


 
/* 

var animation = anime({
    targets: '#p1',
    keyframes: [
      {translateX: -50, opacity: 0, duration:0},
      {translateX: 0, opacity:1, duration:500},
      {translateX: 50, opacity:0,delay: 2000, duration:500,}
    ],
    autoplay: false,
    easing: 'linear',
    //delay: anime.stagger(2500, {start: 0}),
});

document.addEventListener('scroll', function() {
    animation.play();
});


var test2 = anime({
    targets: '#p2',
    keyframes: [
        {translateY: 250, duration: 5000}
    ],
    //delay: anime.stagger(2500, {starts: 0})
}); */