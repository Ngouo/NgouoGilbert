// @ts-nocheck
anime({
  targets: "#img-accueil",
  translateX: [-100, 0],
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 2000,
});

anime({
  targets: "#test",
  translateY: [-100, 0],
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 3000,
});

// @ts-ignore
anime({
  targets: [".cards"],
  translateY: [
    { value: -10, duration: 1000 },
    { value: 0, duration: 1000 },
  ],
  loop: true,
  easing: "easeInOutSine",
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".hidden").forEach((element) => {
    observer.observe(element);
  });
});
