let isDark;
let lis = document.getElementsByTagName("li");
let imgs = document.getElementsByTagName("img");

if (!localStorage.getItem("theme")) {
  isDark = false;
  localStorage.removeItem("theme");
  localStorage.setItem("theme", isDark);
}
if (localStorage.getItem("theme")) {
  isDark = localStorage.getItem("theme");
}

checkTheme();

function toggle() {
  if (isDark === "false") {
    isDark = "true";
    dark();
  } else {
    isDark = "false";
    light();
  }

  checkTheme();
  localStorage.setItem("theme", isDark);
}

function dark() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.getElementsByTagName("input")[0].checked = true;
  document.getElementsByClassName("github")[0].style.filter = "invert(1)";
}

function light() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  document.getElementsByTagName("input")[0].checked = false;
  document.getElementsByClassName("github")[0].style.filter = "invert(0)";
}

function checkTheme() {
  if (isDark === "false") {
    for (let index = 0; index < lis.length; index++) {
      // style for li
      const element_li = lis[index];
      element_li.style.color = "black";
      element_li.style.backgroundColor = "white";

      let li_nodes = element_li.childNodes;

      element_li.onmouseover = function () {
        element_li.style.color = "white";
        element_li.style.backgroundColor = "black";
        li_nodes.forEach((el) => {
          if (el.nodeName === "IMG") {
            return (el.style.filter = "invert(1)");
          }
        });
      };
      element_li.onmouseout = function () {
        element_li.style.color = "black";
        element_li.style.backgroundColor = "white";
        li_nodes.forEach((el) => {
          if (el.nodeName === "IMG") {
            return (el.style.filter = "invert(0)");
          }
        });
      };
    }
    for (let index = 0; index < imgs.length; index++) {
      const element_img = imgs[index];
      element_img.style.filter = "invert(0)";
    }
    light();
  }
  if (isDark === "true") {
    dark();
    for (let index = 0; index < lis.length; index++) {
      const element_li = lis[index];
      element_li.style.color = "white";
      element_li.style.backgroundColor = "black";

      let li_nodes = element_li.childNodes;

      element_li.onmouseover = function () {
        element_li.style.color = "black";
        element_li.style.backgroundColor = "white";
        li_nodes.forEach((el) => {
          if (el.nodeName === "IMG") {
            return (el.style.filter = "invert(0)");
          }
        });
      };
      element_li.onmouseout = function () {
        element_li.style.color = "white";
        element_li.style.backgroundColor = "black";
        li_nodes.forEach((el) => {
          if (el.nodeName === "IMG") {
            return (el.style.filter = "invert(1)");
          }
        });
      };
    }
    for (let index = 0; index < imgs.length; index++) {
      const element_img = imgs[index];
      element_img.style.filter = "invert(1)";
    }
  }
}
