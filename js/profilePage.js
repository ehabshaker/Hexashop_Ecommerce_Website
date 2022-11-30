let getUser = localStorage.getItem("userName");
let getEmail = localStorage.getItem("Email");
let getUserImage = localStorage.getItem("userImage");

let logOut = document.querySelector(".logout");
let userImageDom = document.querySelector(".user-image");
let userNameDom = document.querySelector(".user-title");
let userEmailDom = document.querySelector(".user-Email");

userNameDom.innerHTML = getUser;
userEmailDom.innerHTML = getEmail;
if (getUserImage) {
  userImageDom.src = getUserImage;
}

logOut.addEventListener("click", () => {
  localStorage.clear();

  setTimeout(() => {
    window.location = "register.html";
  }, 500);
});
