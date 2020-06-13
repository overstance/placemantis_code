import anime from 'animejs';

export const PP = (properties) => {

    let Duration = properties.duration || 1000;
    let EndDelay = properties.endDelay || 0;
    let Loop = properties.loop || false;
    let Easing = properties.easing || 'easeOutElastic';
    let Direction = properties.direction || 'normal';

    
    let Position1X = properties.position1X || [90, 0];
    let Position1Y = properties.position1Y || [90, 0];
    let Position1StaggerOrigin = properties.position1StaggerOrigin || 'first';
    let Position1TransformOrigin = properties.position1TransformOrigin || '0% 0%';
    let Position1Delay = properties.position1DelayPerChild || 10;
    let Position1TimeOffset = properties.position1TimeOffset || '+=0';
    let Position1Easing = properties.position1Easing || Easing;
    let Position1Duration = properties.position1Duration || Duration;
    let Position1Opacity = properties.position1Opacity || [0, 1];

    let Position2X = properties.position2X || [90, 0];
    let Position2Y = properties.position2Y || [90, 0];
    let Position2StaggerOrigin = properties.position2StaggerOrigin || 'first';
    let Position2TransformOrigin = properties.position2TransformOrigin || '0% 0%';
    let Position2Delay = properties.position2DelayPerChild || 10;
    let Position2TimeOffset = properties.position2TimeOffset || '+=0';
    let Position2Easing = properties.position2Easing || Easing;
    let Position2Duration = properties.position2Duration || Duration;
    let Position2Opacity = properties.position2Opacity || [0, 1];

    const t0 = {
        loop: Loop,
        duration: Duration,
        direction: Direction,
        easing: Easing,
        endDelay: EndDelay
    }

    const t5 = {
        targets: properties.position1Class,
        translateX: Position1X,
        translateY: Position1Y,
        'transform-origin': Position1TransformOrigin,
        delay: anime.stagger(Position1Delay, {from: Position1StaggerOrigin}),
        duration: Position1Duration,
        easing: Position1Easing,
        opacity: Position1Opacity
    }

    const t6 = {
        targets: properties.position2Class,
        translateX: Position2X,
        translateY: Position2Y,
        opacity: Position2Opacity,
        'transform-origin': Position2TransformOrigin,
        delay: anime.stagger(Position2Delay, {from: Position2StaggerOrigin}),
        duration: Position2Duration,
        easing: Position2Easing
    }

    anime.timeline(t0)    
    .add(t5, Position1TimeOffset)
    .add(t6, Position2TimeOffset)
}