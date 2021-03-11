/* new Waypoint({
    element: document.getElementById('p2'),
    handler: function() {
        console.log('p2');
        test2.play();
    }
}) */


function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight'
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100
};

const tl = anime.timeline({ autoplay: false });
tl
.add({
    targets: '#p1',
    keyframes: [
        {translateX: -100, opacity: 0, duration:0},
        {translateX: 0, opacity:1, duration:5, translateY: 250, duration:5},
        {translateX: 50, opacity:0, delay: 0, duration:100}
    ],
    //autoplay: false,
    easing: 'linear',
}, 0)
.add({ 
    //text.play()
    //autoplay: false,
    //easing: 'linear',
    
    targets: '#p2-text',
    keyframes: [
        {translateX: -200, opacity: 0, duration:0},
        {translateX: 0, opacity:1, duration:5, translateY: 250, duration:5},
        {opacity: 0, duration: 2}
    ],
    //autoplay: false,
    easing: 'linear',
    delay: anime.stagger(2500, {start: 5}),
}, 0)
.add ({
    targets: '#p2-img',
    keyframes: [
        {translateY: 400, opacity: 0, duration: 0},
        {translateY: 250, opacity: 1, duration: 5},
        {opacity: 0, duration: 2}
    ],
    //autoplay: false,
    easing: 'linear',
    delay: anime.stagger(2500, {start: 5}),
}, 0)
.add ({
    targets: '#p3',
    keyframes: [
        {opacity: 0, duration:0},
        {opacity: 1, duration: 5}
    ],
    //autoplay: false,
    easing: 'linear',
    delay: anime.stagger(2500, {start: 10}),
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
})


 
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