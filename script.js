const lenisJs = () => {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {});

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 400);
  });

  gsap.ticker.lagSmoothing(0);
};
lenisJs();

function loadingAnimation() {
  const startingTl = gsap.timeline();

  startingTl.from(".page1-part5-text >h1", {
    y: 200,
    stagger: {
      amount: 1,
    },
  });

  startingTl.from("nav", {
    y: -100,
  });
}

loadingAnimation();

function page1Animation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".page1",
      start: "top 0",
      end: "top -900%",
      scrub: 1,
      pin: true,
      //   markers: true,
      // pinSpacing: false,
    },
  });

  tl.to(".page1-part5 nav", {
    top: "-100%",
  });

  tl.to(".page1-part5-main-text", {
    scale: 2,
    top: "110%",
  });

  tl.to(".page1-part4", {
    top: "0%",
  });

  //   tl.from(".page1-part4-title>h1", {
  //     y: 500,
  //   });

  tl.from(".page1-part4-text", {
    opacity: 0,
  });

  tl.to(".page1-part4", {
    scale: 2,
    top: "200%",
  });

  tl.to(".page1-part3", {
    top: "0%",
  });

  tl.from(".page1-part3-title>h1", {
    y: 500,
  });

  tl.from(".page1-part3-text", {
    opacity: 0,
  });

  tl.to(".page1-part3", {
    scale: 2,
    top: "200%",
  });

  tl.to(".page1-part2", {
    top: "0%",
  });

  //   tl.from(".page1-part2-title>h1", {
  //     y: 500,
  //   });

  tl.from(".page1-part2-text", {
    opacity: 0,
  });

  tl.to(".page1-part2", {
    scale: 2,
    top: "200%",
  });

  tl.to(".page1-part1", {
    top: "0%",
  });

  tl.from(".page1-part1-title>h1", {
    y: 500,
  });

  tl.from(".page1-part1-text", {
    opacity: 0,
  });

  tl.to(".page1-part1", {
    scale: 4,
    top: "65%",
  });
}

page1Animation();

function clutterAnimation(element) {
  const htmlTag = document.querySelector(element);
  let clutter = "";
  htmlTag.textContent.split("").forEach((word) => {
    clutter += `<span>${word}</span>`;
  });
  htmlTag.innerHTML = clutter;
}

function page2Animation() {
  clutterAnimation(".page2>h1:nth-child(1)");
  clutterAnimation(".page2>h1:nth-child(2)");

  gsap.from(".page2>h1:nth-child(1)>span", {
    opacity: 0,
    stagger: {
      amount: 2,
      from: "center",
    },
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2",
      start: "top 50%",
      end: "top 25",
      scrub: 1,
      // markers: true,
    },
  });

  gsap.from(".page2>h1:nth-child(2)>span", {
    opacity: 0,
    stagger: {
      amount: 2,
      from: "center",
    },
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2",
      start: "top 25%",
      end: "top 0",
      scrub: 1,
      // markers: true,
    },
  });
}

page2Animation();

function page3Animation() {
  const page3Tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".page3",
      start: "top 0",
      end: "top -100%",
      scrub: 1,
      pin: true,
    },
  });

  page3Tl.from(
    ".page3-video",
    {
      y: 400,
      transform: "rotate(12deg)",
    },
    "a"
  );

  page3Tl.to(".page3-video", {
    height: "100%",
    width: "100%",
  });
}

page3Animation();
