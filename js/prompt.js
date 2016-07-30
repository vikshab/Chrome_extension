var userName = prompt("Hello, what's you name?");
var phoneNumber = prompt("Hello " + userName + " ,what's your phone number?");
var phoneNumberPattern = /(?:1-)?\(?\d{3}[\-\)]\d{3}-\d{4}/;
var output = "<h1>Hello, " + userName + "!</h1>";

// Is the phone number valid?
if(phoneNumberPattern.test(phoneNumber)){
  output = output + "<p>" + pbValues.projectName + " " + pbValues.versionNumber +
          " viewed on: " + pbValues.currentTime + "</p>";
} else {
  output = output + "<h2>That phone number is invalid: " + phoneNumber;
}

document.body.innerHTML = output;
