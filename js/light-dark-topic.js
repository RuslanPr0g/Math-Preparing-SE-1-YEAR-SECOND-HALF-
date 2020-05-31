function load_theme(_img) {
  if (
    localStorage.getItem("theme") === "false" ||
    localStorage.getItem("theme") === "false"
  ) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    if (document.getElementsByTagName("img").length === 1)
      document.getElementsByTagName("img")[0].style.filter = "invert(0)";
    _img.style.filter = "invert(0)";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    if (document.getElementsByTagName("img").length === 1)
      document.getElementsByTagName("img")[0].style.filter = "invert(1)";
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
