var currentDate = new Date();
var pbValues = {
  projectName: "puppybook",
  versionNumber: "0.0.1",
  currentTime: currentDate.getFullYear() + "-" +
                    (currentDate.getMonth() + 1) + "-" +
                    currentDate.getDate() + " at " +
                    currentDate.getHours() + ":" +
                    currentDate.getMinutes() + ":" +
                    currentDate.getSeconds(),
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

// Get user name
function getUserName() {
  var userName = prompt("Hello, what's you name?");
  if (!userName) {
    return prompt("You didn't enter a name. Really, what's your name");
  }
  return userName;
}

// Ger user number
function getUserNumber(userName) {
  var phoneNumber = prompt("Hello " + userName + " ,what's your phone number?");
  if(!validatePhoneNumber(phoneNumber)) {
    phoneNumber = prompt("Please enter a valid phone number");
  }
  return phoneNumber;
}

// Validate a phone number
function validatePhoneNumber(phoneNumber) {
  return phoneNumber.match(/(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/);
}

//Determin location based on phone number
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
// var output = "<h1>Hello, " + userName + "!</h1>";
// var userLocation = pbValues.areaCodes[areaCode];
//
// // Is the phone number valid?
// if(phoneNumberPattern.test(phoneNumber)){
//   output = output + "<p>" + pbValues.projectName + " " + pbValues.versionNumber +
//           " viewed on: " + pbValues.currentTime + " Your location is " + userLocation + "</p>";
// } else {
//   output = output + "<h2>That phone number is invalid: " + phoneNumber;
// }
//
// document.getElementById("output").innerHTML = output;

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

var greeting = document.getElementById("greeting");
greeting.addEventListener("click", function() {
  if (greeting.innerHTML.match(/World/)) {
    greeting.innerHTML = "Ola, mundo";
  } else {
    greeting.innerHTML = "Hello, world!";
  }
});

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
