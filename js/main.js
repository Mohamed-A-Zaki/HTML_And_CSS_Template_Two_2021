/**
 * scroll-to-top
 */
let scroll_to_top = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", function () {
  window.scrollY >= 1000
    ? scroll_to_top.classList.add("show")
    : scroll_to_top.classList.remove("show");
});

scroll_to_top.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
