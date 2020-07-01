import anime from 'animejs';


export const simpleRotate = (properties) => {

    let Rotate = properties.rotate || [0, 90];
    let Duration = properties.duration || 1000;
    let Delay = properties.delay || 0;
    let EndDelay = properties.endDelay || 0;
    let Loop = properties.loop || false;
    let Easing = properties.easing || 'easeOutElastic';
    let Direction = properties.direction || 'normal';
    let TransformOrigin = properties.transformOrigin || '0% 0%';

    anime({
        targets: properties.animatedClass,
        rotate: Rotate,
        duration: Duration,
        delay: Delay,
        endDelay: EndDelay,
        direction: Direction,
        loop: Loop,
        easing: Easing,
        'transform-origin': TransformOrigin,
    });
}