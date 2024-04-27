$(document).ready(function () {
  startHero();
});

function startHero() {
  gsap.to($("#hero"), { x: 400, duration: 2, repeat: -1, yoyo: true });

  gsap.to($(".hero__subtitle"), 2, {
    rotationX: 360,
    color: "red",
    repeat: -1,
    yoyo: true,
  });
}
