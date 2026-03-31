import gsap from "gsap";

const toasts = document.querySelectorAll(".toast");

const showToastLoop = (toastIndex) => {
  gsap.to(toasts[toastIndex], {
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "power4.out",
    onComplete: () => {
      gsap.to(toasts[toastIndex], {
        delay: 2.5,
        y: 0,
        opacity: 0,
        scale: 0.95,
        onComplete: () => {
          setTimeout(showToastLoop(toastIndex + 1), 2500);
        }
      });
    }
  });
}

showToastLoop(0);
