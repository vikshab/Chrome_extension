var projectName = "puppybook";
var versionNumber = "0.0.1";
var currentDate = new Date();
var currentTime = currentDate.getFullYear() + "-" +
                  (currentDate.getMonth() + 1) + "-" +
                  currentDate.getDate() + " at " +
                  currentDate.getHours() + ":" +
                  currentDate.getMinutes() + ":" +
                  currentDate.getSeconds();

var userName = prompt("Hello, what's you name?");
document.body.innerHTML = "<h1>Hello, " + userName + "!</h1>" +
                          "<p>" + projectName + " " + versionNumber +
                          " accessed on: " + currentTime + "</p>";
