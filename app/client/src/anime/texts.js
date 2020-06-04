import anime from 'animejs';

export const textRotateIn = (properties) => {
    if (properties.animatedClass) {

        const texts = document.querySelector(properties.animatedClass);

        let text = texts.innerHTML.split(' ').map(function(el) {
            return '<span>' + el + '</span>';
        }).join('');

        texts.innerHTML = text;

        let textsArray = texts.querySelectorAll('span');

        let Duration = properties.duration || 1000;
        let delayPerText = properties.delayPerText || 50;
        let EndDelay = properties.endDelay || 0;
        let Loop = properties.loop || false;
        let Easing = properties.easing || 'easeOutElastic';
        let Direction = properties.direction || 'normal';

        anime({
            targets: textsArray,
            rotateY: [-90, 0],
            duration: Duration,
            delay: (el, i) => delayPerText * i,
            endDelay: EndDelay,
            loop: Loop,
            direction: Direction,
            easing: Easing
        });
        
    } else if (properties.spannedAnimatedClass) {
        // console.log('spanned animated class');

        let elem = document.querySelector(properties.spannedAnimatedClass);
        let elemArray = elem.querySelectorAll('span');

        let Duration = properties.duration || 1000;
        let delayPerText = properties.delayPerText || 50;
        let EndDelay = properties.endDelay || 0;
        let Loop = properties.loop || false;
        let Easing = properties.easing || 'easeOutElastic';
        let Direction = properties.direction || 'normal';

        anime({
            targets: elemArray,
            rotateY: [-90, 0],
            duration: Duration,
            delay: (el, i) => delayPerText * i,
            endDelay: EndDelay,
            loop: Loop,
            direction: Direction,
            easing: Easing
        });

    } else if (properties.svgTextsClass) {
        
        let elemsArray = document.querySelectorAll(properties.svgTextsClass);
        
        let Duration = properties.duration || 1000;
        let delayPerText = properties.delayPerText || 50;
        let EndDelay = properties.endDelay || 0;
        let Loop = properties.loop || false;
        let Easing = properties.easing || 'easeOutElastic';
        let Direction = properties.direction || 'normal';

        anime({
            targets: elemsArray,
            rotateY: [-90, 0],
            duration: Duration,
            delay: (el, i) => delayPerText * i,
            endDelay: EndDelay,
            loop: Loop,
            direction: Direction,
            easing: Easing
        });
    }
}

export const textRotateInAndFade = (properties) => {
    if (properties.animatedClass) {

        const texts = document.querySelector(properties.animatedClass);

        let text = texts.innerHTML.split(' ').map(function(el) {
            return '<span>' + el + '</span>';
        }).join('');

        texts.innerHTML = text;

        let textsArray = texts.querySelectorAll('span');

        let Duration = properties.duration || 1000;
        let delayPerText = properties.delayPerText || 50;
        let EndDelay = properties.endDelay || 0;
        let Loop = properties.loop || false;
        let Easing = properties.easing || 'easeOutElastic';
        let Direction = properties.direction || 'normal';

        anime.timeline({loop: Loop})
        .add({
            targets: textsArray,
            rotateY: [-90, 0],
            duration: Duration,
            delay: (el, i) => delayPerText * i,
            direction: Direction
        }).add({
            targets: textsArray,
            opacity: 0,
            duration: Duration,
            easing: Easing,
            delay: (el, i) => delayPerText * i,
            endDelay: EndDelay,
            direction: Direction
        }); 

    } else if (properties.spannedAnimatedClass) {

        // console.log('text array', textsArray);
        let elem = document.querySelector(properties.spannedAnimatedClass);
        let elemArray = elem.querySelectorAll('span');

        let Duration = properties.duration || 1000;
        let delayPerText = properties.delayPerText || 50;
        let EndDelay = properties.endDelay || 0;
        let Loop = properties.loop || false;
        let Easing = properties.easing || 'easeOutElastic';
        let Direction = properties.direction || 'normal';

        anime.timeline({loop: Loop})
        .add({
            targets: elemArray,
            rotateY: [-90, 0],
            duration: Duration,
            delay: (el, i) => delayPerText * i,
            direction: Direction
        }).add({
            targets: elemArray,
            opacity: 0,
            duration: Duration,
            easing: Easing,
            delay: (el, i) => delayPerText * i,
            endDelay: EndDelay,
            direction: Direction
        }); 

    } else if (properties.svgTextsClass) {

        let elemsArray = document.querySelectorAll(properties.svgTextsClass);
        
        let Duration = properties.duration || 1000;
        let delayPerText = properties.delayPerText || 50;
        let EndDelay = properties.endDelay || 0;
        let Loop = properties.loop || false;
        let Easing = properties.easing || 'easeOutElastic';
        let Direction = properties.direction || 'normal';

        anime.timeline({loop: Loop})
        .add({
            targets: elemsArray,
            rotateY: [-90, 0],
            duration: Duration,
            delay: (el, i) => delayPerText * i,
            direction: Direction
        }).add({
            targets: elemsArray,
            opacity: 0,
            duration: Duration,
            easing: Easing,
            delay: (el, i) => delayPerText * i,
            endDelay: EndDelay,
            direction: Direction
        }); 
    }
}



