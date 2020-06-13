import anime from 'animejs';

export const positionX = (properties) => {

    let TranslateX = properties.translateX || [90, 0];
    let Duration = properties.duration || 1000;
    let Delay = properties.delay || 0;
    let EndDelay = properties.endDelay || 0;
    let Loop = properties.loop || false;
    let Easing = properties.easing || 'easeOutElastic';
    let Direction = properties.direction || 'normal';
    let TransformOrigin = properties.transformOrigin || '0% 0%';

    anime({
        targets: properties.animatedClass,
        translateX: TranslateX,
        'transformOrigin': TransformOrigin,
        duration: Duration,
        delay: Delay,
        endDelay: EndDelay,
        direction: Direction,
        loop: Loop,
        easing: Easing
    });
}

export const positionY = (properties) => {

    let TranslateY = properties.translateY || [90, 0];
    let Duration = properties.duration || 1000;
    let Delay = properties.delay || 0;
    let EndDelay = properties.endDelay || 0;
    let Loop = properties.loop || false;
    let Easing = properties.easing || 'easeOutElastic';
    let Direction = properties.direction || 'normal';
    let TransformOrigin = properties.transformOrigin || '0% 0%';

    anime({
        targets: properties.animatedClass,
        translateY: TranslateY,
        'transformOrigin': TransformOrigin,
        duration: Duration,
        delay: Delay,
        endDelay: EndDelay,
        direction: Direction,
        loop: Loop,
        easing: Easing
    });
}

export const staggerPositionParts = (properties) => {
    let TranslateX = properties.translateX || [90, 0];
    let TranslateY = properties.translateY || [90, 0];
    let StaggerOrigin = properties.staggerOrigin || 'first';
    let StaggerStart = properties.staggerStart || 0;
    let TransformOrigin = properties.transformOrigin || '0% 0%';
    let Duration = properties.duration || 1000;
    let Delay = properties.delayPerChild || 0;
    let Opacity = properties.opacity || [0, 1];
    let EndDelay = properties.endDelay || 0;
    let Loop = properties.loop || false;
    let Easing = properties.easing || 'easeOutElastic';
    let Direction = properties.direction || 'normal';

    anime({
        targets: properties.animatedClass,
        duration: Duration,
        easing: Easing,
        translateX: TranslateX,
        translateY: TranslateY,
        'transform-origin': TransformOrigin,
        delay: anime.stagger(Delay, {from: StaggerOrigin, start: StaggerStart}),
        endDelay: EndDelay,
        loop: Loop,
        direction: Direction,
        opacity: Opacity
    });
}