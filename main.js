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
        end: () =>
          `+=${document.querySelector(".front").offsetHeight + 100} 30%`,
        scrub: 1,
        markers: true,
      },
    })
    .to(".back .text", {})
    .set(".up", {
      transformOrigin: "50% 0%",
    })
    .to(".up", {
      duration: 2,
      y: -200,
      opacity: 0.4,
      ease: "power4.in",
    });

  // gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".ndtext",
  //     start: "top 80%",
  //     end: "bottom 20%",
  //     markers: true,
  //   },
  // });
  // gsap.from(".ndtext", {
  //   scrollTrigger: {
  //     trigger: ".ndtext",
  //     start: "top 80%",
  //     end: "bottom 20%",
  //     markers: true,
  //   },
  //   duration: 2,
  //   opacity: 0,
  //   y: 100,
  // });
  // gsap.from(".ndtext-bar", {
  //   scrollTrigger: {
  //     trigger: ".ndtext",
  //     start: "top 80%",
  //     end: "bottom 20%",
  //     markers: true,
  //   },
  //   duration: 1,
  //   opacity: 0,
  //   x: 200,
  //   ease: "sine.out",
  // });
  // gsap.to(".ndtext-bar", {
  //   scrollTrigger: {
  //     trigger: ".ndtext",
  //     start: `+=${document.querySelector(".single").offsetHeight + 100} 78%`,
  //     end: `=${document.querySelector(".single").offsetHeight + 300} 21%`,
  //     markers: {
  //       startColor: "yellow",
  //       endColor: "yellow",
  //     },
  //   },
  //   opacity: 0,
  //   duration: 1,
  //   ease: "power1.out",
  // });
  // gsap.to(".single-1 .text", {
  //   scrollTrigger: {
  //     trigger: ".single-1",
  //     markers: true,
  //     start: "top 75%",
  //   },
  //   skewX: 29,
  //   skewY: 10,
  //   duration: 2,
  //   opacity: 0.1,
  //   onComplete: {
  //     opacity: 0,
  //   },
  // });
}

function animations() {
  // 2nd animation
  gsap.utils.toArray(".text1").forEach(function (elem) {
    ScrollTrigger.create({
      trigger: elem,
      start: () => `=${document.querySelector(".text").offsetHeight - 100} 50%`,
      end: () => `=${document.querySelector(".text").offsetHeight + 190} 40%`,
      markers: true,
      scrub: 4,
      onEnter: function () {
        gsap.fromTo(
          elem,
          { y: 200, autoAlpha: 0 },
          {
            duration: 1.25,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto",
          }
        );
      },
      onLeave: function () {
        gsap.fromTo(
          elem,
          { y: 0, autoAlpha: 1 },
          { y: -100, overwrite: "auto", autoAlpha: 0 }
        );
      },
      onEnterBack: function () {
        gsap.fromTo(
          elem,
          { y: 200, autoAlpha: 0 },
          {
            duration: 1.25,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto",
          }
        );
      },
      onLeaveBack: function () {
        gsap.fromTo(
          elem,
          { y: 0, autoAlpha: 1 },
          { y: -100, autoAlpha: 0, overwrite: "auto" }
        );
      },
    });
  });

  // 3rd animation
  gsap.utils.toArray(".text2").forEach(function (elem) {
    ScrollTrigger.create({
      trigger: elem,
      start: () => `=${document.querySelector(".text").offsetHeight - 265} 50%`,
      end: "bottom 40%",
      markers: true,
      // scrub: 4,
      onEnter: function () {
        gsap.fromTo(
          elem,
          { x: 100, autoAlpha: 0, skewX: 10 },
          {
            duration: 1.25,
            x: 0,
            autoAlpha: 1,
            skewX: 0,
            ease: "back",
            overwrite: "auto",
          }
        );
      },
      onLeave: function () {
        gsap.fromTo(
          elem,
          { x: 0, autoAlpha: 1, skewX: 0 },
          { x: 100, autoAlpha: 0, overwrite: "auto", skewX: 10 }
        );
      },
      onEnterBack: function () {
        gsap.fromTo(
          elem,
          { x: 100, autoAlpha: 0, skewX: 10 },
          {
            duration: 1.25,
            x: 0,
            autoAlpha: 1,
            skewX: 0,
            ease: "back",
            overwrite: "auto",
          }
        );
      },
      onLeaveBack: function () {
        gsap.fromTo(
          elem,
          { x: 0, autoAlpha: 1, skewX: 0 },
          { x: 100, skewX: 10, autoAlpha: 0, overwrite: "auto" }
        );
      },
    });
  });

  // 4th animation
  gsap.utils.toArray(".text3").forEach(function (elem) {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 70%",
      end: "bottom 50%",
      markers: true,
      scrub: 4,
      onEnter: function () {
        gsap.fromTo(
          elem,
          { y: 100, autoAlpha: 0 },
          {
            duration: 1.25,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto",
          }
        );
      },
      onLeave: function () {
        gsap.fromTo(
          elem,
          { y: 0, autoAlpha: 1 },
          { y: 100, overwrite: "auto", autoAlpha: 0 }
        );
      },
      onEnterBack: function () {
        gsap.fromTo(
          elem,
          { y: 100, autoAlpha: 0 },
          {
            duration: 1.25,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto",
          }
        );
      },
      onLeaveBack: function () {
        gsap.fromTo(
          elem,
          { y: 0, autoAlpha: 1 },
          { y: 100, autoAlpha: 0, overwrite: "auto" }
        );
      },
    });
  });

  // 5th animation
  gsap.utils.toArray(".text4").forEach(function (elem) {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 70%",
      end: "bottom 40%",
      markers: true,
      onEnter: function () {
        gsap.fromTo(
          elem,
          { skewX: 45, skewY: 0, autoAlpha: 0 },
          {
            duration: 1.75,
            skewY: 0,
            skewX: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto",
          }
        );
      },
      onLeave: function () {
        gsap.fromTo(
          elem,
          { skewY: 0, skewX: 0, autoAlpha: 1 },
          { skewY: 0, skewX: 45, autoAlpha: 0, overwrite: "auto" }
        );
      },
      onEnterBack: function () {
        gsap.fromTo(
          elem,
          { skewX: 45, skewY: 0, autoAlpha: 0 },
          {
            duration: 1.75,
            skewY: 0,
            skewX: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto",
          }
        );
      },
      onLeaveBack: function () {
        gsap.fromTo(
          elem,
          { skewY: 0, skewX: 0, autoAlpha: 1 },
          { skewY: 0, skewX: 45, autoAlpha: 0, overwrite: "auto" }
        );
      },
    });
  });
}

// Call the function to define animations
defineAnimations();
animations();

// 1st animation
// gsap.registerPlugin(ScrollTrigger);
// REVEAL //
// gsap.utils.toArray(".revealUp").forEach(function (elem) {
//   ScrollTrigger.create({
//     trigger: elem,
//     start: () => `=${document.querySelector(".text").offsetHeight - 100} 80%`,
//     end: "bottom 20%",
//     markers: true,
//     scrub: 4,
//     onEnter: function () {
//       gsap.fromTo(
//         elem,
//         { y: 100, autoAlpha: 0 },
//         {
//           duration: 1.25,
//           y: 0,
//           autoAlpha: 1,
//           ease: "back",
//           overwrite: "auto",
//         }
//       );
//     },
//     onLeave: function () {
//       gsap.fromTo(
//         elem,
//         { y: 0, autoAlpha: 1 },
//         { y: -100, overwrite: "auto", autoAlpha: 0 }
//       );
//     },
//     onEnterBack: function () {
//       gsap.fromTo(
//         elem,
//         { y: 100, autoAlpha: 0 },
//         {
//           duration: 1.25,
//           y: 0,
//           autoAlpha: 1,
//           ease: "back",
//           overwrite: "auto",
//         }
//       );
//     },
//     onLeaveBack: function () {
//       gsap.fromTo(
//         elem,
//         { y: 0, autoAlpha: 1 },
//         { y: 100, autoAlpha: 0, overwrite: "auto" }
//       );
//     },
//   });
// });

// 2nd Animation
// gsap.registerPlugin(ScrollTrigger);
// // REVEAL //
// gsap.utils.toArray(".revealUp").forEach(function (elem) {
//   ScrollTrigger.create({
//     trigger: elem,
//     start: "top 80%",
//     end: "bottom 20%",
//     markers: true,
//     // scrub: 4,
//     onEnter: function () {
//       gsap.fromTo(
//         elem,
//         { x: 100, autoAlpha: 0, skewX: 10 },
//         {
//           duration: 1.25,
//           x: 0,
//           autoAlpha: 1,
//           skewX: 0,
//           ease: "back",
//           overwrite: "auto"
//         }
//       );
//     },
//     onLeave: function () {
//       gsap.fromTo(elem, { x:0, autoAlpha:1, skewX:0 }, { x:100,autoAlpha:0, overwrite: "auto", skewX: 10 });
//     },
//     onEnterBack: function () {
//       gsap.fromTo(
//         elem,
//         { x: 100, autoAlpha: 0, skewX:10 },
//         {
//           duration: 1.25,
//           x: 0,
//           autoAlpha: 1,
//           skewX: 0,
//           ease: "back",
//           overwrite: "auto"
//         }
//       );
//     },
//     onLeaveBack: function () {
//       gsap.fromTo(elem, { x:0,autoAlpha: 1, skewX:0 }, { x:100, skewX:10,autoAlpha: 0, overwrite: "auto" });
//     }
//   });
// });

// 3rd Animation
// gsap.registerPlugin(ScrollTrigger);
// // REVEAL //
// gsap.utils.toArray(".revealUp").forEach(function (elem) {
//   ScrollTrigger.create({
//     trigger: elem,
//     start: "top 80%",
//     end: "bottom 20%",
//     markers: true,
//     scrub: 4,
//     onEnter: function () {
//       gsap.fromTo(
//         elem,
//         { y: 100, autoAlpha: 0 },
//         {
//           duration: 1.25,
//           y: 0,
//           autoAlpha: 1,
//           ease: "back",
//           overwrite: "auto"
//         }
//       );
//     },
//     onLeave: function () {
//       gsap.fromTo(elem, { y:0, autoAlpha:1 }, { y:100, overwrite: "auto", autoAlpha:0 });
//     },
//     onEnterBack: function () {
//       gsap.fromTo(
//         elem,
//         { y: 100, autoAlpha: 0 },
//         {
//           duration: 1.25,
//           y: 0,
//           autoAlpha: 1,
//           ease: "back",
//           overwrite: "auto"
//         }
//       );
//     },
//     onLeaveBack: function () {
//       gsap.fromTo(elem, { y:0,autoAlpha: 1 }, { y:100,autoAlpha: 0, overwrite: "auto" });
//     }
//   });
// });

// 4th Animation
// gsap.registerPlugin(ScrollTrigger);
// // REVEAL //
// gsap.utils.toArray(".revealUp").forEach(function (elem) {
//   ScrollTrigger.create({
//     trigger: elem,
//     start: "top 80%",
//     end: "bottom 20%",
//     markers: true,
//     onEnter: function () {
//       gsap.fromTo(
//         elem,
//         { skewX: 45, skewY:0, autoAlpha:0 },
//         {
//           duration: 1.75,
//           skewY: 0,
//         skewX: 0,
//           autoAlpha: 1,
//           ease: "back",
//           overwrite: "auto"
//         }
//       );
//     },
//     onLeave: function () {
//       gsap.fromTo(elem, { skewY: 0,
//         skewX: 0,
//           autoAlpha: 1,}, { skewY: 0,
//    skewX:45,autoAlpha: 0, overwrite: "auto" });
//     },
//     onEnterBack: function () {
//       gsap.fromTo(
//         elem,
//         { skewX: 45, skewY:0, autoAlpha:0 },
//         {
//           duration: 1.75,
//           skewY: 0,
//         skewX: 0,
//           autoAlpha: 1,
//           ease: "back",
//           overwrite: "auto"
//         }
//       );
//     },
//     onLeaveBack: function () {
//       gsap.fromTo(elem,{ skewY: 0,
//         skewX: 0,
//           autoAlpha: 1,}, { skewY: 0,
//    skewX:45,autoAlpha: 0, overwrite: "auto" });
//     }
//   });
// });
