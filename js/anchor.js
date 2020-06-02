let top_pos;
let anchor = document.getElementById("anchor");

window.addEventListener(
  "scroll",
  function () {
    top_pos = this.scrollY;
    if (top_pos > 720) {
      anchor.style.display = "block";
      goTop();
    } else anchor.style.display = "none";
  },
  false
);

function goTop() {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    document.body.scrollIntoView();
  });
}
