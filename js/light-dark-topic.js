function load_theme(_img) {
  if (localStorage.getItem("theme") === "false") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    _img.style.filter = "invert(0)";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    _img.style.filter = "invert(1)";
  }
}

if (localStorage.getItem("theme") === "false") {
  document.getElementsByTagName("a")[0].style.backgroundColor = "black";
  document.getElementsByTagName("a")[0].style.color = "white";
} else {
  document.getElementsByTagName("a")[0].style.backgroundColor = "white";
  document.getElementsByTagName("a")[0].style.color = "black";
}
