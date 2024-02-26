// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);
// var tl = gsap.timeline({
//   delay: 1,
//   scrollTrigger: {
//     trigger: ".front",
//     scrub: true
//   },

// });

// tl.from(".line span", {
//   duration: 0.2,
//   left: "100%",
// });
// tl.to(".back .text", {
//   duration: 0.2,
//   opacity: 0.1,
//   filter: "blur(2px)",
// });
// tl.set(".down", {
//   transformOrigin: "50% 0%",
// });
// tl.to(".down", {
//   duration: 1.5,
//   // x: 120,
//   y: 500,
//   // rotation: -90,
//   ease: "power4.in",
// });
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Function to define the scroll-triggered animations
function defineAnimations() {
  // Define ScrollTrigger animations
  // let tl = gsap.timeline();
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".front",
        start: "top 30%",
        // end: "bottom 30%",
        end: () =>
          `+=${document.querySelector(".front").offsetHeight + 100} 30%`,
        scrub: 1, // Scrubbing ensures the animation progresses smoothly with scrolling
        markers: true, // For debugging, set markers to true to visualize ScrollTrigger triggers
      },
    })
    // .from(".line span", {
    //   duration: 0.2,
    //   xPercent: -100,
    // })
    .to(".back .text", {
      // duration: 0.2,
      // opacity: 0.1,
      // filter: "blur(2px)",
    })
    .set(".up", {
      transformOrigin: "50% 0%",
    })
    .to(".up", {
      duration: 2,
      // x: 120,
      y: -200,
      opacity: 0.4,
      // rotation: -90,
      ease: "power4.in",
    });

  gsap.timeline({
    scrollTrigger: {
      trigger: ".ndtext",
      start: "top 80%", // Adjust start point as needed
      end: "bottom 20%", // Adjust end point as needed
      markers: true,
    },
  });
  gsap.from(".ndtext", {
    scrollTrigger: {
      trigger: ".ndtext",
      start: "top 80%", // Adjust start point as needed
      end: "bottom 20%", // Adjust end point as needed
      markers: true,
    },
    duration: 2,
    opacity: 0,
    y: 100,
  });
  gsap.from(".ndtext-bar", {
    scrollTrigger: {
      trigger: ".ndtext",
      start: "top 80%", // Adjust start point as needed
      end: "bottom 20%", // Adjust end point as needed
      markers: true,
    },
    duration: 1,
    opacity: 0,
    x: 200,
    ease: "sine.out",
  });
  gsap.to(".ndtext-bar", {
    scrollTrigger: {
      trigger: ".ndtext",
      start: `+=${document.querySelector(".single").offsetHeight + 100} 78%`,
      end: `=${document.querySelector(".single").offsetHeight + 300} 21%`,
      markers: {
        startColor: "yellow",
        endColor: "yellow",
      },
    },
    opacity: 0,
    duration: 1,
    ease: "power1.out",
  });
  gsap.to(".single-1 .text", {
    scrollTrigger: {
      trigger: ".single-1",
    },
    skewX: 29,
    skewY: 5,
    duration: 3,
    opacity: 0.1,
  });
}

// Call the function to define animations
defineAnimations();
