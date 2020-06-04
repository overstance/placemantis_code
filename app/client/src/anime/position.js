import anime from 'animejs';

export const positionX = (properties) => {

    let TranslateX = properties.translateX || [90, 0];
    let Duration = properties.duration || 1000;
    let Delay = properties.delay || 0;
    let EndDelay = properties.endDelay || 0;
    let Loop = properties.loop || false;
    let Easing = properties.easing || 'easeOutElastic';
    let Direction = properties.direction || 'normal';

    anime({
        targets: properties.animatedClass,
        translateX: TranslateX,
        duration: Duration,
        delay: Delay,
        endDelay: EndDelay,
        direction: Direction,
        loop: Loop,
        easing: Easing
    });
}