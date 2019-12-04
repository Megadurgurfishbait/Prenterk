import { TweenMax, TimelineMax, Circ } from "gsap/TweenMax";

function hellomoto([...array], opacityToZero, totalSpeed, staggerSpeed) {
  opacityToZero
    ? TweenMax.staggerFromTo(
        [...array],
        totalSpeed,
        { opacity: 1 },
        { opacity: 0 },
        staggerSpeed
      )
    : TweenMax.staggerFromTo(
        [...array],
        totalSpeed,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1 },
        staggerSpeed
      );
}

function handleAnimationIntroLong(myRef, TitleText1) {
  let tl = new TimelineMax();
  return tl
    .fromTo(TitleText1, 0.5, { opacity: 0, x: -30 }, { opacity: 1, x: 0 })
    .fromTo(
      myRef,
      0.2,
      { opacity: 0, y: -50, ease: Circ.easeOut },
      { opacity: 1, y: 0 },
      1
    )
    .delay(0.8);
}

export { hellomoto, handleAnimationIntroLong };
