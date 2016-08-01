/**
* Get images from Facebook feed
* @method
* @return {Array}
**/
function getImages() {
  return document.querySelectorAll("div.userContentWrapper img");
}

/**
* Get an image height
* @method
* @param {string} Image
* @return {String}
**/
function getImageHeight(image) {
  return image.height;
}

/**
* Get an image width
* @method
* @param {string} Image
* @return {String}
**/
function getImageWidth(image) {
  return image.width;
}

/**
* Replace images on Facebook feed with images of puppies
* @method
* @param {string} Images to be replaced
**/
function replaceImages(images) {
  var baseImageUrl, height, width, image;
  baseImageUrl = "http://xoart.link/";

  for (var i = 0; i < images.length; i ++) {
    image = images[i];
    height = getImageHeight(image);
    width = getImageWidth(image);
    image.src = baseImageUrl + width + "/" + height + "/" + "dogs";
  }
}
