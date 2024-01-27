const main = document.querySelector("body");
const fb = document.querySelector(".fb");

main.addEventListener("mousemove", function (dets) {
  fb.style.left = dets.x + "px";
  fb.style.top = dets.y + "px";
});
