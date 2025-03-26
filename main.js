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

anime({
  targets: "#Skills",
  translateX: [-100, 0],
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 2000,
});

// @ts-ignore
anime({
  targets: [".card-parcours", ".card-projet", ".cards"],
  translateY: [
    { value: -10, duration: 1000 },
    { value: 0, duration: 1000 },
  ],
  loop: true,
  easing: "easeInOutSine",
});
