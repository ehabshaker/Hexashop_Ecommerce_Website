// Check If There's Information In Local Storage
let loggedNav = document.querySelector("#logged-nav");
let loggedList = document.querySelectorAll(".logged");
let CheckUserName = document.querySelector(".user-name");

if (localStorage.getItem("userName")) {
  // Update loggedNav
  loggedList.forEach((li) => {
    li.style.display = "none";
  });
  document.querySelector(".carts").style.display = "block";
  CheckUserName.innerHTML = localStorage.getItem("userName");
  CheckUserName.style.display = "block";
} else {
  loggedList.forEach((li) => {
    li.style.display = "block";
  });
  document.querySelector(".carts").style.display = "none";
}
