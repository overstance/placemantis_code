import anime from 'animejs';

export const textRotateIn = (properties) => {
    if (properties.animatedClass) {

        const texts = document.querySelector(properties.animatedClass);

        let text = texts.innerHTML.split(' ').map(function(el) {
            return '<span>' + el + '</span>';
        }).join('');

        texts.innerHTML = text;

        let textsArray = texts.querySelectorAll('span');

        let loop = false;
        if (properties.loop) {
            loop = properties.loop
        }

        let animateDirection = 'normal';
        if (properties.direction && (properties.direction === 'alternate' || properties.direction === 'reverse')) {
            animateDirection = properties.direction
        }

        let duration = 1000;
        if (properties.duration) {
            duration = properties.duration;
        }

        let endDelay = 0;
        if (properties.endDelay) {
            endDelay = properties.endDelay
        }
        
        let delayPerText = 50;
        if (properties.delayPerText) {
            delayPerText = properties.delayPerText;
        }

        anime({
            targets: textsArray,
            rotateY: [-90, 0],
            duration: duration,
            delay: (el, i) => delayPerText * i,
            endDelay: endDelay,
            loop: loop,
            direction: animateDirection
        });
        
    } else if (properties.spannedAnimatedClass) {
        // console.log('spanned animated class');

        let elem = document.querySelector(properties.spannedAnimatedClass);
        let elemArray = elem.querySelectorAll('span');

        let loop = false;
        if (properties.loop) {
            loop = properties.loop
        }

        let animateDirection = 'normal';
        if (properties.direction && (properties.direction === 'alternate' || properties.direction === 'reverse')) {
            animateDirection = properties.direction
        }

        let duration = 1000;
        if (properties.duration) {
            duration = properties.duration;
        }

        let endDelay = 0;
        if (properties.endDelay) {
            endDelay = properties.endDelay
        }
        
        let delayPerText = 50;
        if (properties.delayPerText) {
            delayPerText = properties.delayPerText;
        }

        anime({
            targets: elemArray,
            rotateY: [-90, 0],
            duration: duration,
            delay: (el, i) => delayPerText * i,
            endDelay: endDelay,
            loop: loop,
            direction: animateDirection
        });

    } else if (properties.svgTextsClass) {
        
        let elemsArray = document.querySelectorAll(properties.svgTextsClass);
        
        let loop = false;
        if (properties.loop) {
            loop = properties.loop
        }

        let animateDirection = 'normal';
        if (properties.direction && (properties.direction === 'alternate' || properties.direction === 'reverse')) {
            animateDirection = properties.direction
        }

        let duration = 1000;
        if (properties.duration) {
            duration = properties.duration;
        }

        let endDelay = 0;
        if (properties.endDelay) {
            endDelay = properties.endDelay
        }
        
        let delayPerText = 50;
        if (properties.delayPerText) {
            delayPerText = properties.delayPerText;
        }

        anime({
            targets: elemsArray,
            rotateY: [-90, 0],
            duration: duration,
            delay: (el, i) => delayPerText * i,
            endDelay: endDelay,
            loop: loop,
            direction: animateDirection
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
        
        let loop = false;
        if (properties.loop) {
            loop = properties.loop
        }

        let animateDirection = 'normal';
        if (properties.direction && (properties.direction === 'alternate' || properties.direction === 'reverse')) {
            animateDirection = properties.direction
        }

        let duration = 1000;
        if (properties.duration) {
            duration = properties.duration;
        }

        let endDelay = 0;
        if (properties.endDelay) {
            endDelay = properties.endDelay
        }
        
        let delayPerText = 50;
        if (properties.delayPerText) {
            delayPerText = properties.delayPerText;
        }

        anime.timeline({loop: loop})
        .add({
            targets: textsArray,
            rotateY: [-90, 0],
            duration: duration,
            delay: (el, i) => delayPerText * i,
            direction: animateDirection
        }).add({
            targets: textsArray,
            opacity: 0,
            duration: duration,
            easing: "easeOutExpo",
            delay: (el, i) => delayPerText * i,
            endDelay: endDelay,
            direction: animateDirection
        }); 

    } else if (properties.spannedAnimatedClass) {

        // console.log('text array', textsArray);
        let elem = document.querySelector(properties.spannedAnimatedClass);
        let elemArray = elem.querySelectorAll('span');

        let loop = false;
        if (properties.loop) {
            loop = properties.loop
        }

        let animateDirection = 'normal';
        if (properties.direction && (properties.direction === 'alternate' || properties.direction === 'reverse')) {
            animateDirection = properties.direction
        }

        let duration = 1000;
        if (properties.duration) {
            duration = properties.duration;
        }

        let endDelay = 0;
        if (properties.endDelay) {
            endDelay = properties.endDelay
        }
        
        let delayPerText = 50;
        if (properties.delayPerText) {
            delayPerText = properties.delayPerText;
        }

        anime.timeline({loop: loop})
        .add({
            targets: elemArray,
            rotateY: [-90, 0],
            duration: duration,
            delay: (el, i) => delayPerText * i,
            // endDelay: 4500,
            direction: animateDirection
        }).add({
            targets: elemArray,
            opacity: 0,
            duration: duration,
            easing: "easeOutExpo",
            delay: (el, i) => delayPerText * i,
            endDelay: endDelay,
            direction: animateDirection
        }) 

    } else if (properties.svgTextsClass) {

        let elemsArray = document.querySelectorAll(properties.svgTextsClass);
        let loop = false;
        if (properties.loop) {
            loop = properties.loop
        }

        let animateDirection = 'normal';
        if (properties.direction && (properties.direction === 'alternate' || properties.direction === 'reverse')) {
            animateDirection = properties.direction
        }

        let duration = 1000;
        if (properties.duration) {
            duration = properties.duration;
        }

        let endDelay = 0;
        if (properties.endDelay) {
            endDelay = properties.endDelay
        }
        
        let delayPerText = 50;
        if (properties.delayPerText) {
            delayPerText = properties.delayPerText;
        }

        anime.timeline({loop: loop})
        .add({
            targets: elemsArray,
            rotateY: [-90, 0],
            duration: duration,
            delay: (el, i) => delayPerText * i,
            direction: animateDirection
        }).add({
            targets: elemsArray,
            opacity: 0,
            duration: duration,
            easing: "easeOutExpo",
            delay: (el, i) => delayPerText * i,
            endDelay: endDelay,
            direction: animateDirection
        }); 
    }
}



