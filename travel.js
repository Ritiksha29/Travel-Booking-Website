let user = document.getElementById("user");
let loginBtn = document.getElementById("loginBtn");

let placeName = document.getElementById("placeName");
let submit = document.getElementById("submit");

let connectBtn = document.getElementById("connectBtn");

user.addEventListener("click", function () {
  document.querySelector(".loginPage").classList.toggle("active1");
});

loginBtn.addEventListener("click", function () {
  let email = document.getElementById("email");
  let pass = document.getElementById("pass");

  if (email.value == "" && pass.value == "") {
    alert("Please fill the details");
  } else {
    alert("You Logged In");
    document.querySelector(".loginPage").style.display = "none";
  }
});

submit.addEventListener("click", function () {
  if (placeName.value == "") {
    alert("Please fill the form");
  } else {
    alert(placeName.value + "Tour Booked");
  }
});
connectBtn.addEventListener("click", function () {
  let name = document.getElementById("name");
  let email1 = document.getElementById("email1");

  if (name.value == "" || email1.value == "") {
    alert("Please fill the details");
  } else {
    alert("Sent");
    document.querySelector(".contactForm").style.display = "none";
  }
});
