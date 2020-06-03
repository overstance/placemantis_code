import anime from 'animejs';

export const positionX = (properties) => {

    let TranslateX = [90, 0];
    let Duration = 1000;
    let Delay = 0;
    let EndDelay = 0;
    let Direction = 'normal';
    let Loop = false;
    let Easing = 'easeOutElastic';

    if (properties.translateX) {
        TranslateX = [properties.translateX, 0];
    }

    if (properties.duration) {
        Duration = properties.duration;
    }

    if (properties.delay) {
        Delay = properties.delay;
    }

    if (properties.endDelay) {
        EndDelay = properties.endDelay;
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
        translateX: TranslateX,
        duration: Duration,
        delay: Delay,
        endDelay: EndDelay,
        direction: Direction,
        loop: Loop
    });
}