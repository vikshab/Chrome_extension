var greeting = document.getElementById("greeting");
greeting.addEventListener("click", function() {
  if (greeting.innerHTML.match(/World/)) {
    greeting.innerHTML = "Ola, mundo";
  } else {
    greeting.innerHTML = "Hello, world!";
  }
});
