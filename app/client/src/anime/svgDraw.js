import anime from 'animejs';

export const drawSinglePath = (properties) => {

    let Duration = properties.duration || 1000;
    let Delay = properties.delay || 0;
    let EndDelay = properties.endDelay || 0;
    let Loop = properties.loop || false;
    let Easing = properties.easing || 'easeOutElastic';
    let Direction = properties.direction || 'normal';

    anime({
        targets: properties.animatedClass,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: Easing,
        duration: Duration,
        delay: Delay,
        endDelay: EndDelay,
        direction: Direction,
        loop: Loop
      });
}