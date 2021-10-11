anime({
  targets: ".box",
  translateY: [
    {
      value: 200,
      duration: 500,
    },
    {
      value: 0,
      duration: 800,
    },
  ],
  loop: true,
  rotate: {
    value: "1turn",
    duration: 900,
  },
  borderRadius: 50,
  direction: "alternate",
  easing: "easeInOutQuad",
  delay: function () {
    return anime.random(0, 1000);
  },
  elasticity: 200,
});
