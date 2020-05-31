let _underline = false;
let _welcome;

function welcome() {
  _welcome = document.getElementById("welcome");
  let arr_welcome = ["W", "e", "l", "c", "o", "m", "e", "!"];
  for (let index = 0, delay = 1000; index < arr_welcome.length; index++) {
    setTimeout(function () {
      _welcome.innerHTML += arr_welcome[index];
      if (index + 1 === arr_welcome.length) {
        window.setInterval(underline, 700);
      }
    }, delay);
    delay += getRandomArbitrary(30, 800);
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function underline() {
  _underline = !_underline;
  if (_underline === false) {
    _welcome.innerHTML = "Welcome!";
  } else {
    _welcome.innerHTML = "Welcome!_";
  }
}
