import anime from 'animejs';

export const textWipeIn = (animatedClass, loop) => {

    const el = document.querySelectorAll(animatedClass);
    let Loop = false;

    if (loop === 'loop') {
        Loop = true;
    }

    anime({
        targets: el,
        rotateY: [-90, 0],
        duration: 1000,
        delay: (el, i) => 10 * i,
        loop: Loop    
    });
}


export const textWipeInAndDissolve = (animatedClass, loop) => {

    const el = document.querySelectorAll(animatedClass);
    let loopBool = false;

    if (loop === 'loop') {
        loopBool = true
    }

    anime.timeline({loop: loopBool})
    .add({
        targets: el,
        rotateY: [-90, 0],
        duration: 1000,
        delay: (el, i) => 10 * i
    }).add({
        targets: el,
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
}