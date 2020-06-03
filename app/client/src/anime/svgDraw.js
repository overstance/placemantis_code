import anime from 'animejs';

export const drawSinglePath = (properties) => {

    let Duration = 1000;
    let Delay = 0;
    let EndDelay = 0;
    let Direction = 'normal';
    let Loop = false;
    let Easing = 'easeOutElastic';

    if (properties.delay) {
        Delay = properties.delay;
    }

    if (properties.endDelay) {
        EndDelay = properties.endDelay;
    }

    if (properties.duration) {
        Duration = properties.duration;
    }

    if (properties.direction && (properties.direction === 'alternate' || properties.direction === 'reverse')) {
        Direction = properties.direction
    }

    if (properties.loop) {
        Loop = properties.loop;
    }

    if (properties.easing) {
        Easing = properties.easing;
    }
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