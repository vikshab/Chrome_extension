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
