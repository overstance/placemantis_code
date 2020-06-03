import anime from 'animejs';

export const pathDraw = (animatedClass, duration) => {

  let drawDuration = 1000;

  if (duration) {
    drawDuration = duration;
  }
    anime({
        targets: animatedClass,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: drawDuration,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
      });
}