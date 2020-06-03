import anime from 'animejs';

export const scaleSvgPart = (animatedClass, scaleFactor, scaleOrigin, delay, endDelay, direction, loop) => {
    
    let elem = document.querySelector(animatedClass);
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

    if (scaleFactor) {
        factor = scaleFactor;
    }

    if (delay) {
        Delay = delay;
    }

    if (endDelay) {
        EndDelay = endDelay;
    }

    if (loop === 'loop') {
        Loop = true;
    }

    if (direction && (direction === 'alternate' || direction === 'reverse')) {
        animateDirection = direction
    }



    if (scaleOrigin && scaleOrigin === 'center') {
        xTranslate = ((1 - factor) * ((width / 2) + cx)) / factor;
        yTranslate = ((1 - factor) * ((height / 2) + cy)) / factor;
    } else if (scaleOrigin && scaleOrigin === 'top-left') {
        xTranslate = ((1 - factor) * (width + cx)) / factor;
        yTranslate = ((1 - factor) * cy) / factor;
    } else if (scaleOrigin && scaleOrigin === 'top-center') {
        xTranslate = ((1 - factor) * ((width / 2) + cx)) / factor;
        yTranslate = ((1 - factor) * cy) / factor;
    } else if (scaleOrigin && scaleOrigin === 'top-right') {
        xTranslate = ((1 - factor) * (width + cx)) / factor;
        yTranslate = ((1 - factor) * cy) / factor;
    } else if (scaleOrigin && scaleOrigin === 'center-left') {
        xTranslate = ((1 - factor) * cx) / factor;
        yTranslate = ((1 - factor) * ((height / 2) + cy)) / factor;
    } else if (scaleOrigin && scaleOrigin === 'center-right') {
        xTranslate = ((1 - factor) * (width + cx)) / factor;
        yTranslate = ((1 - factor) * ((height / 2) + cy)) / factor;
    } else if (scaleOrigin && scaleOrigin === 'bottom-left') {
        xTranslate = ((1 - factor) * cx) / factor;
        yTranslate = ((1 - factor) * (height + cy)) / factor;
    } else if (scaleOrigin && scaleOrigin === 'bottom-center') {
        xTranslate = ((1 - factor) * ((width / 2) + cx)) / factor;
        yTranslate = ((1 - factor) * (height + cy)) / factor;
    } else if (scaleOrigin && scaleOrigin === 'bottom-right') {
        xTranslate = ((1 - factor) * (width + cx)) / factor;
        yTranslate = ((1 - factor) * (height + cy)) / factor;
    } 

    console.log(cx, cy, width, height, xTranslate, yTranslate);

    anime({
        targets: animatedClass,
        scale: factor,
        translateX: xTranslate,
        translateY: xTranslate,
        rotate: [90, 90],
        delay: Delay,
        endDelay: EndDelay,
        loop: Loop,
        direction: animateDirection
    });
}

export const scaleElement = (animatedClass, scaleFactor, delay, endDelay, direction, loop) => {

    let factor = 1;
    let Delay = 0;
    let EndDelay = 0;
    let Loop = false;
    let animateDirection = 'normal';

    if (scaleFactor) {
        factor = scaleFactor;
    }

    if (delay) {
        Delay = delay;
    }

    if (endDelay) {
        EndDelay = endDelay;
    }

    if (loop === 'loop') {
        Loop = true;
    }

    if (direction && (direction === 'alternate' || direction === 'reverse')) {
        animateDirection = direction
    }

    anime({
        targets: animatedClass,
        scale: factor,
        delay: Delay,
        endDelay: EndDelay,
        loop: Loop,
        direction: animateDirection
    });
}