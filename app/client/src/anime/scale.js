import anime from 'animejs';

export const scaleSvgPart = (properties) => {
    
    let elem = document.querySelector(properties.animatedClass);
    let elemDimensions = elem.getBBox();
    let cx = elemDimensions.x;
    let cy = elemDimensions.y;
    let width = elemDimensions.width;
    let height = elemDimensions.height;

    
    let xTranslate = 0;
    let yTranslate = 0;
    let factor = 1;
    let Delay = 0;
    let EndDelay = 0;
    let Loop = false;
    let animateDirection = 'normal';
    let Duration = 1000;
    let Easing = 'easeOutElastic';
    let Rotate = 0;

    if (properties.scaleFactor) {
        factor = properties.scaleFactor;
    }

    if (properties.delay) {
        Delay = properties.delay;
    }

    if (properties.endDelay) {
        EndDelay = properties.endDelay;
    }

    if (properties.loop) {
        Loop = properties.loop;
    }

    if (properties.direction && (properties.direction === 'alternate' || properties.direction === 'reverse')) {
        animateDirection = properties.direction
    }

    if (properties.duration) {
        Duration = properties.duration
    }

    if (properties.easing) {
        Easing = properties.easing;
    }

    if (properties.rotate) {
        Rotate = properties.rotate;
    }



    if (properties.scaleOrigin && properties.scaleOrigin === 'center') {
        xTranslate = ((1 - factor) * ((width / 2) + cx)) / factor;
        yTranslate = ((1 - factor) * ((height / 2) + cy)) / factor;
    } else if (properties.scaleOrigin && properties.scaleOrigin === 'top-left') {
        xTranslate = ((1 - factor) * (width + cx)) / factor;
        yTranslate = ((1 - factor) * cy) / factor;
    } else if (properties.scaleOrigin && properties.scaleOrigin === 'top-center') {
        xTranslate = ((1 - factor) * ((width / 2) + cx)) / factor;
        yTranslate = ((1 - factor) * cy) / factor;
    } else if (properties.scaleOrigin && properties.scaleOrigin === 'top-right') {
        xTranslate = ((1 - factor) * (width + cx)) / factor;
        yTranslate = ((1 - factor) * cy) / factor;
    } else if (properties.scaleOrigin && properties.scaleOrigin === 'center-left') {
        xTranslate = ((1 - factor) * cx) / factor;
        yTranslate = ((1 - factor) * ((height / 2) + cy)) / factor;
    } else if (properties.scaleOrigin && properties.scaleOrigin === 'center-right') {
        xTranslate = ((1 - factor) * (width + cx)) / factor;
        yTranslate = ((1 - factor) * ((height / 2) + cy)) / factor;
    } else if (properties.scaleOrigin && properties.scaleOrigin === 'bottom-left') {
        xTranslate = ((1 - factor) * cx) / factor;
        yTranslate = ((1 - factor) * (height + cy)) / factor;
    } else if (properties.scaleOrigin && properties.scaleOrigin === 'bottom-center') {
        xTranslate = ((1 - factor) * ((width / 2) + cx)) / factor;
        yTranslate = ((1 - factor) * (height + cy)) / factor;
    } else if (properties.scaleOrigin && properties.scaleOrigin === 'bottom-right') {
        xTranslate = ((1 - factor) * (width + cx)) / factor;
        yTranslate = ((1 - factor) * (height + cy)) / factor;
    } 

    console.log(cx, cy, width, height, xTranslate, yTranslate);

    anime({
        targets: properties.animatedClass,
        scale: factor,
        translateX: xTranslate,
        translateY: xTranslate,
        duration: Duration,
        rotate: [Rotate, Rotate],
        delay: Delay,
        endDelay: EndDelay,
        loop: Loop,
        direction: animateDirection,
        easing: Easing
    });
}

export const scaleElement = (properties) => {

    let factor = 1;
    let Delay = 0;
    let EndDelay = 0;
    let Loop = false;
    let animateDirection = 'normal';
    let Duration = 1000;
    let Easing = 'easeOutElastic';
    let Rotate = 0;

    if (properties.scaleFactor) {
        factor = properties.scaleFactor;
    }

    if (properties.delay) {
        Delay = properties.delay;
    }

    if (properties.endDelay) {
        EndDelay = properties.endDelay;
    }

    if (properties.loop) {
        Loop = properties.loop;
    }

    if (properties.direction && (properties.direction === 'alternate' || properties.direction === 'reverse')) {
        animateDirection = properties.direction
    }

    if (properties.duration) {
        Duration = properties.duration
    }

    if (properties.easing) {
        Easing = properties.easing;
    }

    if (properties.rotate) {
        Rotate = properties.rotate;
    }

    anime({
        targets: properties.animatedClass,
        duration: Duration,
        easing: Easing,
        rotate: [Rotate, Rotate],
        scale: factor,
        delay: Delay,
        endDelay: EndDelay,
        loop: Loop,
        direction: animateDirection
    });
}