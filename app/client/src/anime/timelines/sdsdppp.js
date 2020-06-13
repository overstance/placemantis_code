import anime from 'animejs';

export const SDSDPPP = (properties) => {

    let Duration = properties.duration || 1000;
    let EndDelay = properties.endDelay || 0;
    let Loop = properties.loop || false;
    let Easing = properties.easing || 'easeOutElastic';
    let Direction = properties.direction || 'normal';

    let Scale1Factor = properties.scale1Factor || 0.5;
    let Scale1StaggerOrigin = properties.scale1StaggerOrigin || 'first';
    let Scale1TransformOrigin = properties.scale1TransformOrigin || '0% 0%';
    let Scale1Delay = properties.scale1DelayPerChild || 10;
    let Scale1TimeOffset = properties.scale1TimeOffset || '+=0';
    let Scale1Easing = properties.scale1Easing || Easing;
    let Scale1Duration = properties.scale1Duration || Duration;
    let Scale1Opacity = properties.scale1Opacity || [0, 1];

    let Scale2Factor = properties.scale2Factor || 0.5;
    let Scale2StaggerOrigin = properties.scale2StaggerOrigin || 'first';
    let Scale2TransformOrigin = properties.scale2TransformOrigin || '0% 0%';
    let Scale2Delay = properties.scale2DelayPerChild || 10;
    let Scale2TimeOffset = properties.scale2TimeOffset || '+=0';
    let Scale2Easing = properties.scale2Easing || Easing;
    let Scale2Duration = properties.scale2Duration || Duration;
    let Scale2Opacity = properties.scale2Opacity || [0, 1];

    let Draw1StaggerOrigin = properties.draw1StaggerOrigin || 'first';
    let Draw1Delay = properties.draw1DelayPerChild || 10;
    let Draw1TimeOffset = properties.draw1TimeOffset || '+=0';
    let Draw1Easing = properties.draw1Easing || Easing;
    let Draw1Duration = properties.draw1Duration || Duration;

    let Draw2StaggerOrigin = properties.draw2StaggerOrigin || 'first';
    let Draw2Delay = properties.draw2DelayPerChild || 10;
    let Draw2TimeOffset = properties.draw2TimeOffset || '+=0';
    let Draw2Easing = properties.draw2Easing || Easing;
    let Draw2Duration = properties.draw2Duration || Duration;

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

    let Position3X = properties.position3X || [90, 0];
    let Position3Y = properties.position3Y || [90, 0];
    let Position3StaggerOrigin = properties.position3StaggerOrigin || 'first';
    let Position3TransformOrigin = properties.position3TransformOrigin || '0% 0%';
    let Position3Delay = properties.position3DelayPerChild || 10;
    let Position3TimeOffset = properties.position3TimeOffset || '+=0';
    let Position3Easing = properties.position3Easing || Easing;
    let Position3Duration = properties.position3Duration || Duration;
    let Position3Opacity = properties.position3Opacity || [0, 1];

    const t0 = {
        loop: Loop,
        duration: Duration,
        direction: Direction,
        easing: Easing,
        endDelay: EndDelay
    }

    const t1 = {
        targets: properties.scale1Class,
        scale: Scale1Factor,
        'transform-origin': Scale1TransformOrigin,
        delay: anime.stagger(Scale1Delay, {from: Scale1StaggerOrigin}),
        duration: Scale1Duration,
        easing: Scale1Easing,
        opacity: Scale1Opacity
    }

    let t2 = {
        targets: properties.draw1Class,
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: anime.stagger(Draw1Delay, {from: Draw1StaggerOrigin}),
        duration: Draw1Duration,
        easing: Draw1Easing
    }

    if (properties.changeStrokeColor1) {
        t2 = {
            targets: properties.draw1Class,
            strokeDashoffset: [anime.setDashoffset, 0],
            stroke: properties.changeStrokeColor1,
            delay: anime.stagger(Draw1Delay, {from: Draw1StaggerOrigin})
        }
    }

    const t3 = {
        targets: properties.scale2Class,
        scale: Scale2Factor,
        'transform-origin': Scale2TransformOrigin,
        delay: anime.stagger(Scale2Delay, {from: Scale2StaggerOrigin}),
        duration: Scale2Duration,
        easing: Scale2Easing,
        opacity: Scale2Opacity
    }

    let t4 = {
        targets: properties.draw2Class,
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: anime.stagger(Draw2Delay, {from: Draw2StaggerOrigin}),
        duration: Draw2Duration,
        easing: Draw2Easing
    }

    if (properties.changeStrokeColor2) {
        t4 = {
            targets: properties.draw2Class,
            strokeDashoffset: [anime.setDashoffset, 0],
            stroke: properties.changeStrokeColor2,
            delay: anime.stagger(Draw2Delay, {from: Draw2StaggerOrigin})
        }
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

    const t7 = {
        targets: properties.position3Class,
        translateX: Position3X,
        translateY: Position3Y,
        opacity: Position3Opacity,
        'transform-origin': Position3TransformOrigin,
        delay: anime.stagger(Position3Delay, {from: Position3StaggerOrigin}),
        duration: Position3Duration,
        easing: Position3Easing
    }


    anime.timeline(t0)
    .add(t1, Scale1TimeOffset)
    .add(t2, Draw1TimeOffset)
    .add(t3, Scale2TimeOffset)
    .add(t4, Draw2TimeOffset)
    .add(t5, Position1TimeOffset)
    .add(t6, Position2TimeOffset)
    .add(t7, Position3TimeOffset)
}