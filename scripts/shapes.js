const anime() = window.animejs

var animateCircles = anime({
    targets:'.circle',
    translateY: '150em',
    backgroundColor: '#FFF',
    autoplay: true
});

animateCircles.play()