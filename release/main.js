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

var images = document.querySelectorAll("div.userContentWrapper img");

var greeting = document.getElementById("greeting");
greeting.addEventListener("click", function() {
  if (greeting.innerHTML.match(/World/)) {
    greeting.innerHTML = "Ola, mundo";
  } else {
    greeting.innerHTML = "Hello, world!";
  }
});
