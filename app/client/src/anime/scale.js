import anime from 'animejs';

export const scaleSvgPart = (properties) => {
    
    let elem = document.querySelector(properties.animatedClass);
    
    if (elem) {
        let elemDimensions = elem.getBBox();
        let cx = elemDimensions.x;
        let cy = elemDimensions.y;
        let width = elemDimensions.width;
        let height = elemDimensions.height;
        let xTranslate = 0;
        let yTranslate = 0;
        
        let factor = properties.scaleFactor || 0.5;
        let Rotate = properties.rotate;
        let Duration = properties.duration || 1000;
        let Delay = properties.delay || 0;
        let EndDelay = properties.endDelay || 0;
        let Loop = properties.loop || false;
        let Easing = properties.easing || 'easeOutElastic';
        let Direction = properties.direction || 'normal';
        let Opacity = properties.opacity || [0, 1];

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

        // console.log(cx, cy, width, height, xTranslate, yTranslate);

        anime({
            targets: properties.animatedClass,
            scale: [factor, 1],
            translateX: [xTranslate, 0],
            translateY: [yTranslate, 0],
            duration: Duration,
            rotate: [Rotate, Rotate],
            delay: Delay,
            endDelay: EndDelay,
            loop: Loop,
            direction: Direction,
            easing: Easing,
            opacity: Opacity
        });
    }
}

export const scaleElement = (properties) => {

    if (properties.keyframes) {
        let factor = properties.scaleFactor || 0.5;
        let Rotate = properties.rotate || 0;
        let Duration = properties.duration || 1000;
        let TransformOrigin = properties.transformOrigin || '0% 0%'
        let Delay = properties.delay || 0;
        let EndDelay = properties.endDelay || 0;
        let Loop = properties.loop || false;
        let Easing = properties.easing || 'easeOutElastic';
        let Direction = properties.direction || 'normal';
        
        anime({
            targets: properties.animatedClass,
            duration: Duration,
            easing: Easing,
            rotate: Rotate,
            scale: factor,
            'transform-origin': TransformOrigin,
            delay: Delay,
            endDelay: EndDelay,
            loop: Loop,
            direction: Direction,
            keyframes: properties.keyframes
        });

    } else {
        let factor = properties.scaleFactor || 0.5;
        let Rotate = properties.rotate || 0;
        let Duration = properties.duration || 1000;
        let TransformOrigin = properties.transformOrigin || '0% 0%'
        let Delay = properties.delay || 0;
        let EndDelay = properties.endDelay || 0;
        let Loop = properties.loop || false;
        let Easing = properties.easing || 'easeOutElastic';
        let Direction = properties.direction || 'normal';

        anime({
            targets: properties.animatedClass,
            duration: Duration,
            easing: Easing,
            rotate: Rotate,
            scale: factor,
            'transform-origin': TransformOrigin,
            delay: Delay,
            endDelay: EndDelay,
            loop: Loop,
            direction: Direction
        });
    }
}

export const staggerScaleParts = (properties) => {
    let factor = properties.scaleFactor || 0.5;
    let StaggerOrigin = properties.staggerOrigin || 'first';
    let StaggerStart = properties.staggerStart || 0;
    let TransformOrigin = properties.transformOrigin || '0% 0%';
    let Duration = properties.duration || 1000;
    let Delay = properties.delayPerChild || 0;
    let EndDelay = properties.endDelay || 0;
    let Loop = properties.loop || false;
    let Easing = properties.easing || 'easeOutElastic';
    let Direction = properties.direction || 'normal';
    let Opacity = properties.opacity || [0, 1];

    anime({
        targets: properties.animatedClass,
        duration: Duration,
        easing: Easing,
        scale: factor,
        'transform-origin': TransformOrigin,
        delay: anime.stagger(Delay, {from: StaggerOrigin, start: StaggerStart}),
        endDelay: EndDelay,
        loop: Loop,
        direction: Direction,
        opacity: Opacity
    });
}