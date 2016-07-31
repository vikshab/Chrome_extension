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
