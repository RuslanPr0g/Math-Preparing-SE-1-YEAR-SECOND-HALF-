function load(countOfImgs, ext) {
  let photoUrls = [
    "1." + ext,
    "2." + ext,
    "3." + ext,
    "4." + ext,
    "5." + ext,
    "6." + ext,
    "7." + ext,
    "8." + ext,
    "9." + ext,
    "10." + ext,
    "11." + ext,
    "12." + ext,
    "13." + ext,
  ];
  for (i = 0; i < countOfImgs; i++) {
    try {
      let img = document.createElement("img");

      img.src = photoUrls[i];
      console.log(img.src);

      let photos = document.querySelector("#photo");
      photos.appendChild(img);
    } catch {}
  }
}
