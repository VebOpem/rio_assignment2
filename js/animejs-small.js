export function animejsSmall () {
    const tl = anime.timeline({ autoplay: true })
        tl
        .add({
            targets: '#p1',
            keyframes: [
                { opacity:1, duration:0},
                { opacity:1, duration:100}
            ],
            easing: 'linear',
        }, 0)
        .add({ 
            targets: '#p2-text',
            keyframes: [
                {translateX: -100, opacity: 0, duration:0},
                {translateX: 0, opacity:1, translateY: 0, duration:5},
                {opacity: 0, duration: 5}
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 3.5}),
        }, 0)
        .add ({
            targets: '#p2-img',
            keyframes: [
                {translateY: 50, opacity: 0, duration: 0},
                {translateY: 0, opacity: 1, duration: 5},
                {opacity: 0, duration: 5}
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 3.5}),
        }, 0)
        .add ({
            targets: '#p3-text',
            keyframes: [
                {translateX: 200, translateY: -175, opacity: 0, duration:0},
                {translateX: 0, translateY: 0, opacity: 1, duration: 3},
                {translateY: -200, opacity: 0, duration: 30}
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 12}),
        }, 0)
        .add({
            targets: '#p3-img',
            keyframes: [
                {translateX: -200, translateY: 175, opacity: 0, duration:0},
                {translateX: 0, translateY: 0, opacity: 1, duration: 3},
                {opacity: 0, duration: 7}
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 12}),
        }, 0)
        .add({
            targets: '#p4-text',
            keyframes: [
                {translateX: -400, opacity: 0, duration:0},
                {translateX: 0, translateY: -50, opacity: 1, duration: 5},
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 18}),
        }, 0)
        .add({
            targets: '#p4-img',
            keyframes: [
                {translateX: 0, translateY: 0, opacity: 1, duration: 0},
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 18}),
        }, 0)
        .add({
            targets: '#p5-text',
            keyframes: [
                {translateX: 0, translateY: -50, opacity: 1, duration:0},
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 22}),
        }, 0)
        .add({
            targets: '#p5-text2',
            keyframes: [
                {translateX: -400, opacity: 0, duration:0},
                {translateX: 0, translateY: -50, opacity: 1, duration: 8},
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 22}),
        }, 0)
        .add({
            targets: '#p5-img',
            keyframes: [
                {translateX: 0, translateY: 0, opacity: 1, duration: 0},
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 22})
        }, 0)
        .add({
            targets: '#p6-img',
            keyframes: [
                {translateX: 75, translateY: -150, opacity: 0, duration: 0},
                {translateX: 0, translateY: 0, opacity: 1, duration: 10},
                //{opacity: 0, duration: 3},
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 30})
        }, 0)
        .add({
            targets: '#p6-text',
            keyframes: [
                {translateX: -400, opacity: 0, duration:0},
                {translateX: 0, translateY: 0, opacity: 1, duration: 10},
                {opacity: 0, duration: 3},
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 30})
        }, 0)
        .add({
            targets: '#p7-text',
            keyframes: [
                {translateX: -500, translateY: 500, opacity: 0, duration: 0},
                {translateX: 0, translateY: 0, opacity: 1, duration: 13},
                //{translateY: -1000, opacity: 0, duration: 0}
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 35})
        }, 0)
        .add({
            targets: '#p7-clouds',
            keyframes: [
                {translateX: 0, translateY: -500, opacity: 0, duration: 0},
                {translateX: 0, translateY: -300, opacity: 1, duration: 13},
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 35})
        }, 0)
        .add({
            targets: '#p8-clouds',
            keyframes: [
                {translateX: 0, translateY: -300, opacity: 1, duration: 0},
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 40})
        }, 0)
        .add({
            targets: '#p8-text',
            keyframes: [
                {translateY: 1000, translateX: -500, opacity: 0, duration: 0},
                {translateY: 50, translateX: 0, opacity: 1, duration: 15},
                //{translateX: -250, duration: 17}
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 40})
        }, 0)
        .add({
            targets: '#p8-sand',
            keyframes: [
                {translateY: 1000, opacity: 0, duration: 0},
                {translateY: 325, opacity: 1, duration: 17},
                //{translateX: 2000, translateY: 100, duration: 7},
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 38})
        }, 0)
        .add({
            targets: '#p9-text',
            keyframes: [
                {translateX: -100, translateY: 100, opacity: 0, duration: 0},
                {translateX: 0, translateY: 0, opacity: 1, duration: 17},
                //{translateX: -100, translateY: -500, duration: 7}
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 50})
        }, 0)
        .add({
            targets: '#p9-img',
            keyframes: [
                {translateX: 62, translateY: 500, duration: 0},
                {translateX: 0, translateY: 50, duration: 17},
                //{translateX: 0, translateY: -500, duration: 5}
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 47})
        }, 0)
        .add({
            targets: '#p10-img',
            keyframes: [
                {translateX: 75, translateY: 500, duration: 0},
                {translateX: 0, translateY: 50, duration: 17},
                {translateX: 0, opacity: 0, duration: 8}
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 55})
        }, 0)
        .add({
            targets: '#p10-text',
            keyframes: [
                {translateX: -500, translateY: 0, duration: 0},
                {translateX: 0, translateY: 0, duration: 17},
                //{opacity: 0, duration: 3}
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 55})
        }, 0)
        .add({
            targets: '#p11-img',
            keyframes: [
                {translateX: 0, opacity: 1, duration: 0},
                {translateX: 0, translateY: 50, opacity: 1, duration: 20},
                {opacity: 0, duration: 3},
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 67})
        }, 0)
        .add({
            targets: '#p11-text',
            keyframes: [
                {translateX: -400, translateY: 400, duration: 0},
                {translateX: 0, translateY: 0, duration: 20},
                //{translateX: -500, translateY: 125, duration: 3}
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 60})
        }, 0)
        .add({
            targets: '#p13-text',
            keyframes: [
                {translateY: 500, duration: 0},
                {translateY: -50, duration: 14}
            ],
            easing: 'linear',
            delay: anime.stagger(2500, {start: 85})
        }, 0)

        window.addEventListener('scroll', () => {
            const persentage = getScrollPercent()
            tl.seek(tl.duration * (persentage / 100))
        });

        function getScrollPercent() {
            var h = document.documentElement, 
                b = document.body,
                st = 'scrollTop',
                sh = 'scrollHeight'
            return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100
        };
}