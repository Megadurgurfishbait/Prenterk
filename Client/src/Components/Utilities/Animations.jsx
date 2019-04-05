import { TweenMax } from "gsap/TweenMax";
export const hellomoto = (
  [...array],
  opacityToZero,
  totalSpeed,
  staggerSpeed
) => {
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
};

export const FirstAnimation = (Container, [...grpEl]) => {
  TweenMax.fromTo(
    Container,
    1,
    { x: 0, width: "100vw" },
    {
      x: 0,
      width: "40vw",
      onComplete: () => hellomoto([...grpEl], false, 1, 0.4)
    }
  );
};

export const goAway = (Container, [...grpEl]) => {
  TweenMax.fromTo(
    Container,
    1.5,
    { x: 0, width: "40vw" },
    {
      x: 0,
      width: "100vw",
      onStart: () => hellomoto([...grpEl], true, 0.1, 0.1)
    }
  );
};

export const slideLeft = ([...array]) => {
  console.log([array]);
  TweenMax.staggerTo([...array], 1, { x: -1000 }, 0.2);
};
