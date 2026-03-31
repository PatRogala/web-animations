import gsap from 'gsap';

gsap.set(".gsap-box", {
  scale: 0.5,
  opacity: 0,
  y: -100,
});

gsap.to(".gsap-box", {
  delay: 0.5,
  opacity: 1,
  scale: 1,
  y: 0,
  duration: 0.6,
  ease: "expo.out"
});
