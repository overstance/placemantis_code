import anime from 'animejs'

export const staggerOpacity = (properties) => {

    let Opacity = properties.opacity || [0, 1];
    let StaggerOrigin = properties.staggerOrigin || 'first';
    let Duration = properties.duration || 1000;
    let Delay = properties.delayPerChild || 10;
    let EndDelay = properties.endDelay || 0;
    let Loop = properties.loop || false;
    let Easing = properties.easing || 'easeInOutQuad';
    let Direction = properties.direction || 'normal';

    anime({
        targets: properties.animatedClass,
        opacity: Opacity,
        delay: anime.stagger(Delay, {from: StaggerOrigin}),
        duration: Duration,
        endDelay: EndDelay,
        direction: Direction,
        loop: Loop,
        easing: Easing
    });
}