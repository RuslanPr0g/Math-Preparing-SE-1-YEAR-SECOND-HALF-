function welcome() {
  let _welcome = document.getElementById("welcome");
  let arr_welcome = ["W", "e", "l", "c", "o", "m", "e", "!"];
  for (let index = 0, delay = 1000; index < arr_welcome.length; index++) {
    setTimeout(function () {
      _welcome.innerHTML += arr_welcome[index];
      console.log(arr_welcome[index]);
    }, delay);
    delay += 500;
  }
}
