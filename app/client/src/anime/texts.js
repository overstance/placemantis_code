import anime from 'animejs';

export const textRotateIn = (animatedClass, spannedAnimatedClass, svgTextsClass, direction, loop) => {
    if (animatedClass) {

        const texts = document.querySelector(animatedClass);

        let text = texts.innerHTML.split(' ').map(function(el) {
            return '<span>' + el + '</span>';
        }).join('');

        texts.innerHTML = text;

        let textsArray = texts.querySelectorAll('span');
        let loopBool = false;
        let animateDirection = 'normal';

        if (direction && (direction === 'alternate' || direction === 'reverse')) {
            animateDirection = direction
        }

        if (loop === 'loop') {
            loopBool = true
        }

        anime({
            targets: textsArray,
            rotateY: [-90, 0],
            duration: 1000,
            delay: (el, i) => 45 * i,
            endDelay: 4500,
            loop: loopBool,
            direction: animateDirection
        });
        
    } else if (spannedAnimatedClass) {
        // console.log('spanned animated class');

        let elem = document.querySelector(spannedAnimatedClass);
        let elemArray = elem.querySelectorAll('span');
        let loopBool = false;

        let animateDirection = 'normal';

        if (direction && (direction === 'alternate' || direction === 'reverse')) {
            animateDirection = direction
        }

        if (loop === 'loop') {
            loopBool = true
        }

        anime({
            targets: elemArray,
            rotateY: [-90, 0],
            duration: 1500,
            delay: (el, i) => 45 * i,
            endDelay: 4500,
            loop: loopBool,
            direction: animateDirection
        });
    } else if (svgTextsClass) {
        
        let elemsArray = document.querySelectorAll(svgTextsClass);
        let loopBool = false;

        let animateDirection = 'normal';

        if (direction && (direction === 'alternate' || direction === 'reverse')) {
            animateDirection = direction
        }

        if (loop === 'loop') {
            loopBool = true
        }

        anime({
            targets: elemsArray,
            rotateY: [-90, 0],
            duration: 1500,
            delay: (el, i) => 45 * i,
            endDelay: 4500,
            loop: loopBool,
            direction: animateDirection
        });
    }
}

export const textRotateInAndFade = (animatedClass, spannedAnimatedClass, svgTextsClass, direction, loop) => {
    if (animatedClass) {

        const texts = document.querySelector(animatedClass);

        let text = texts.innerHTML.split(' ').map(function(el) {
            return '<span>' + el + '</span>';
        }).join('');

        texts.innerHTML = text;

        let textsArray = texts.querySelectorAll('span');
        let animateDirection = 'normal';

        if (direction && (direction === 'alternate' || direction === 'reverse')) {
            animateDirection = direction
        }

        let loopBool = false;

        if (loop === 'loop') {
            loopBool = true
        }

        anime.timeline({loop: loopBool})
        .add({
            targets: textsArray,
            rotateY: [-90, 0],
            duration: 1000,
            delay: (el, i) => 10 * i,
            endDelay: 4500,
            direction: animateDirection
        }).add({
            targets: textsArray,
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000,
            direction: animateDirection
        }); 

    } else if (spannedAnimatedClass) {

        // console.log('text array', textsArray);
        let elem = document.querySelector(spannedAnimatedClass);
        let elemArray = elem.querySelectorAll('span');
        let animateDirection = 'normal';

        if (direction && (direction === 'alternate' || direction === 'reverse')) {
            animateDirection = direction
        }

        let loopBool = false;

        if (loop === 'loop') {
            loopBool = true
        }

        anime.timeline({loop: loopBool})
        .add({
            targets: elemArray,
            rotateY: [-90, 0],
            duration: 1000,
            delay: (el, i) => 10 * i,
            endDelay: 4500,
            direction: animateDirection
        }).add({
            targets: elemArray,
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000,
            direction: animateDirection
        }); 

    } else if (svgTextsClass) {

        let elemsArray = document.querySelectorAll('span');
        let animateDirection = 'normal';

        if (direction && (direction === 'alternate' || direction === 'reverse')) {
            animateDirection = direction
        }

        let loopBool = false;


        if (loop === 'loop') {
            loopBool = true
        }

        anime.timeline({loop: loopBool})
        .add({
            targets: elemsArray,
            rotateY: [-90, 0],
            duration: 1000,
            delay: (el, i) => 10 * i,
            endDelay: 4500,
            direction: animateDirection
        }).add({
            targets: elemsArray,
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000,
            direction: animateDirection
        }); 
    }
}



