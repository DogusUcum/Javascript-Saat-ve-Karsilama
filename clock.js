var nameId = document.getElementById("myName");
var date = document.getElementById("myClock");

nameId.textContent = prompt("Adınızı giriniz", "");

setInterval(() => {
  var deneme = new Date().toUTCString();

  date.innerHTML = deneme.slice(0, 25);
}, 1000);
