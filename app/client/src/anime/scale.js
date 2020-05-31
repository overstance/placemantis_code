import anime from 'animejs';

export const scaleSVG = (animatedClass, scaleFactor, scaleOrigin, delay, endDelay, loop) => {
    
    let elem = document.querySelector(animatedClass);
    let elemDimensions = elem.getBBox();
    let cx = elemDimensions.x;
    let cy = elemDimensions.y;
    let width = elemDimensions.width;
    let height = elemDimensions.height;

    
    let xTranslate = 0;
    let yTranslate = 0;
    let factor = 0;
    let Delay = 0;
    let EndDelay = 0;
    let Loop = false;

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
        scale: scaleFactor,
        translateX: xTranslate,
        translateY: yTranslate,
        delay: Delay,
        endDelay: EndDelay,
        loop: Loop,
        direction: 'alternate'
    });
}