// var projectName = "puppybook";
// var versionNumber = "0.0.1";
var currentDate = new Date();
// var currentTime = currentDate.getFullYear() + "-" +
//                   (currentDate.getMonth() + 1) + "-" +
//                   currentDate.getDate() + " at " +
//                   currentDate.getHours() + ":" +
//                   currentDate.getMinutes() + ":" +
//                   currentDate.getSeconds();
var pbValues = {
  projectName: "puppybook",
  versionNumber: "0.0.1",
  currentTime: currentDate.getFullYear() + "-" +
                    (currentDate.getMonth() + 1) + "-" +
                    currentDate.getDate() + " at " +
                    currentDate.getHours() + ":" +
                    currentDate.getMinutes() + ":" +
                    currentDate.getSeconds()
};

var userName = prompt("Hello, what's you name?");
var phoneNumber = prompt("Hello " + userName + " ,what's your phone number?");
var phoneNumberPattern = /1?-?\(?\d{3}[\-\)]\d{3}-\d{4}/;
var output = "<h1>Hello, " + userName + "!</h1>";

// Is the phone number valid?
if(phoneNumberPattern.test(phoneNumber)){
  output = output + "<p>" + pbValues.projectName + " " + pbValues.versionNumber +
          " viewed on: " + pbValues.currentTime + "</p>";
} else {
  output = output + "<h2>That phone number is invalid: " + phoneNumber;
}

document.body.innerHTML = output;
