var userName = prompt("Hello, what's you name?");
var phoneNumber = prompt("Hello " + userName + " ,what's your phone number?");
var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/;
var phoneMatches = phoneNumberPattern.exec(phoneNumber);
var areaCode = phoneMatches[1];
var output = "<h1>Hello, " + userName + "!</h1>";
var userLocation = pbValues.areaCodes[areaCode];

// Is the phone number valid?
if(phoneNumberPattern.test(phoneNumber)){
  output = output + "<p>" + pbValues.projectName + " " + pbValues.versionNumber +
          " viewed on: " + pbValues.currentTime + " Your location is " + userLocation + "</p>";
} else {
  output = output + "<h2>That phone number is invalid: " + phoneNumber;
}

document.getElementById("output").innerHTML = output;
