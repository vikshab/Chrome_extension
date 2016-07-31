function getImages() {
  return document.querySelectorAll("div.userContentWrapper img");
}

function getImageHeight(image) {
  return image.height;
}

function getImageWidth(image) {
  return image.width;
}

function replaceImages(images, location) {
  var baseImageUrl, height, width, image;
  baseImageUrl = "http://xoart.link/";

  for (var i = 0; i < images.length; i ++) {
    image = images[i];
    height = getImageHeight(image);
    width = getImageWidth(image);
    image.src = baseImageUrl + width + "/" + height + "/" + "dogs";
  }
}
