import { TweenMax } from "gsap/TweenMax";

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

function handleAnimationIntro(myRef) {
  return TweenMax.fromTo(
    myRef,
    0.5,
    {
      x: 200,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1 // to end state
    }
  );
}

export { hellomoto, handleAnimationIntro };
