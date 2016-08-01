var currentDate = new Date();
var currentTime = currentDate.getFullYear() + "-" +
            (currentDate.getMonth() + 1) + "-" +
            currentDate.getDate() + " at " +
            currentDate.getHours() + ":" +
            currentDate.getMinutes() + ":" +
            currentDate.getSeconds();

var pbValues = {
  projectName: "puppybook",
  versionNumber: "0.0.1",
  areaCodes: {
    "408": "Silicon Valley",
    "702": "Las Vegas",
    "801": "Northern Utah",
    "765": "West Lafayette",
    "901": "Memphis",
    "507": "Rochester, MN",
    "206": "Seattle",
    "619": "San Diego"
   }
};

/**
* Get the user name
* @method
* @return {string}
**/
function getUserName() {
  var userName = prompt("Hello, what's you name?");
  if (!userName) {
    return prompt("You didn't enter a name. Really, what's your name");
  }
  return userName;
}

/**
* Get a user's phone number
* @method
* @param {string} userName
* @return {String}
**/
function getUserNumber(userName) {
  var phoneNumber = prompt("Hello " + userName + " ,what's your phone number?");
  if(!validatePhoneNumber(phoneNumber)) {
    phoneNumber = prompt("Please enter a valid phone number");
  }
  return phoneNumber;
}

/**
* Check the validity of a phone number
* @method
* @param {string} phoneNumber The phone number to be validated
* @return {boolen}
**/
function validatePhoneNumber(phoneNumber) {
  return phoneNumber.match(/(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/);
}

/**
* Determin location based on phone number
* @method
* @param {string} phoneNumber Location is based on phone number
* @return {string}
**/
function getLocation(phoneNumber) {
  var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/;
  var phoneMatches = phoneNumberPattern.exec(phoneNumber);
  var areaCodes, areaCode, locationName;

  if (phoneMatches) {
    areaCode = phoneMatches[1];
    areaCodes = getAreaCodes();
    locationName = areaCodes[areaCode];
  }

  return locationName ? locationName : "somewhere";
}

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

function main() {
  var userName = getUserName();
  var phoneNumber = getUserNumber();
  var location = getLocation();
  var images = getImages();

  setInterval(function() {
    images = getImages();
    replaceImages(images);
  }, 3000);
}

main();
