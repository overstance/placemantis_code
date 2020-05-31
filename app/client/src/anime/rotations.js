import anime from 'animejs';


export const rotateOnce = (animatedClass) => {
    // console.log('running anime', animatedClass);
    anime({    
        targets: animatedClass,
        // translateX: 250,
        rotate: '1turn'    
    });
}