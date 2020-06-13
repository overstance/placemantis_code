import anime from 'animejs';

export const drawSinglePath = (properties) => {

  let Duration = properties.duration || 1000;
  let Delay = properties.delay || 0;
  let EndDelay = properties.endDelay || 0;
  let Loop = properties.loop || false;
  let Easing = properties.easing || 'easeOutElastic';
  let Direction = properties.direction || 'normal';

  anime({
      targets: properties.animatedClass,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: Easing,
      duration: Duration,
      delay: Delay,
      endDelay: EndDelay,
      direction: Direction,
      loop: Loop
  });

}

export const drawMultiplePaths = (properties) => {

  let Duration = properties.duration || 1000;
  let StaggerOrigin = properties.staggerOrigin || 'first';
  let StaggerStart = properties.staggerStart || 0;
  let Delay = properties.delayPerChild || 10;
  let EndDelay = properties.endDelay || 0;
  let Loop = properties.loop || false;
  let Easing = properties.easing || 'easeOutElastic';
  let Direction = properties.direction || 'normal';

  if (properties.strokeColor) {
    anime({
      targets: properties.animatedClass,
      strokeDashoffset: [anime.setDashoffset, 0],
      stroke: properties.strokeColor,
      easing: Easing,
      duration: Duration,
      delay: anime.stagger(Delay, {from: StaggerOrigin, start: StaggerStart}),
      endDelay: EndDelay,
      direction: Direction,
      loop: Loop
    });
  } else {
    anime({
      targets: properties.animatedClass,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: Easing,
      duration: Duration,
      delay: anime.stagger(Delay, {from: StaggerOrigin, start: StaggerStart}),
      endDelay: EndDelay,
      direction: Direction,
      loop: Loop
  });
  }
}



