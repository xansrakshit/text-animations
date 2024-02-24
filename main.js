import gsap from "gsap";
var tl = gsap.timeline({
  delay: 1,
});

tl.from(".line span", {
  duration: 0.2,
  left: "100%",
});
tl.to(".back .text", {
  duration: 0.2,
  opacity: 0.1,
  filter: "blur(2px)",
});
tl.set(".down", {
  transformOrigin: "100% 0%",
});
tl.to(".down", {
  duration: 1.5,
  x: 120,
  y: 500,
  rotation: -90,
  ease: "power4.in",
});
