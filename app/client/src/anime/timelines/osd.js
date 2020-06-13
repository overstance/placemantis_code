import anime from 'animejs';

export const OSD = (properties) => {
    
    let Duration = properties.duration || 1000;
    let EndDelay = properties.endDelay || 0;
    let Loop = properties.loop || false;
    let Easing = properties.easing || 'easeOutElastic';
    let Direction = properties.direction || 'normal';

    let Opacity = properties.opacity || [0, 1];
    let OpacityStaggerOrigin = properties.opacityStaggerOrigin || 'first';
    let OpacityDelay = properties.opacityDelayPerChild || 10;
    let OpacityEasing = properties.opacityEasing || Easing;
    let OpacityDuration = properties.opacityDuration || Duration;
    let OpacityTimeOffset = properties.opacityTimeOffset || '+=0';

    let ScaleFactor = properties.scaleFactor || 0.5;
    let ScaleStaggerOrigin = properties.scaleStaggerOrigin || 'first';
    let ScaleTransformOrigin = properties.scaleTransformOrigin || '0% 0%';
    let ScaleDelay = properties.scaleDelayPerChild || 10;
    let ScaleTimeOffset = properties.scaleTimeOffset || '+=0';
    let ScaleEasing = properties.scaleEasing || Easing;
    let ScaleDuration = properties.scaleDuration || Duration;
    let ScaleOpacity = properties.scaleOpacity || [0, 1];

    let DrawStaggerOrigin = properties.drawStaggerOrigin || 'first';
    let DrawDelay = properties.drawDelayPerChild || 10;
    let DrawTimeOffset = properties.drawTimeOffset || '+=0';
    let DrawEasing = properties.drawEasing || Easing;
    let DrawDuration = properties.drawDuration || Duration;
    
    
    const t0 = {
        loop: Loop,
        duration: Duration,
        direction: Direction,
        easing: Easing,
        endDelay: EndDelay
    }

    const t1 = {
        targets: properties.opacityClass,
        opacity: Opacity,
        delay: anime.stagger(OpacityDelay, {from: OpacityStaggerOrigin}),
        duration: OpacityDuration,
        easing: OpacityEasing
    }

    const t2 = {
        targets: properties.scaleClass,
        scale: ScaleFactor,
        'transform-origin': ScaleTransformOrigin,
        delay: anime.stagger(ScaleDelay, {from: ScaleStaggerOrigin}),
        duration: ScaleDuration,
        easing: ScaleEasing,
        opacity: ScaleOpacity
    }

    let t3 = {
        targets: properties.drawClass,
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: anime.stagger(DrawDelay, {from: DrawStaggerOrigin}),
        duration: DrawDuration,
        easing: DrawEasing
    }

    if (properties.changeStrokeColor) {
        t3 = {
            targets: properties.drawClass,
            strokeDashoffset: [anime.setDashoffset, 0],
            stroke: properties.changeStrokeColor,
            delay: anime.stagger(DrawDelay, {from: DrawStaggerOrigin})
        }
    }

    anime.timeline(t0)
    .add(t1, OpacityTimeOffset)
    .add(t2, ScaleTimeOffset)
    .add(t3, DrawTimeOffset)
}