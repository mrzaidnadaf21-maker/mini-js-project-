const container = document.querySelectorAll("span");

container.forEach((dets) => {
  dets.addEventListener("click", function () {
    dets.classList.toggle("items");
  });
});
