function main() {
  var userName = getUserName();
  var phoneNumber = getUserNumber();
  var location = getLocation();
  var images = getImages();

  setInterval(function() {
    images = getImages();
    replaceImages(images, location);
  }, 3000);
}

main();
