// Section Form
const labels = document.querySelectorAll(".form-content label");
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

let reUserName = document.querySelector("#user-name");
let reEmail = document.querySelector("#email");
let rePassword = document.querySelector("#password");
let reBtn = document.querySelector("#register-btn");

reBtn.addEventListener("click", register);

function register(e) {
  e.preventDefault();

  if (
    reUserName.value === "" ||
    reEmail.value === "" ||
    rePassword.value === ""
  ) {
    alert("Please Fill Data");
  } else {
    saveDataInLocal();
  }
}

function saveDataInLocal() {
  // Set Data In Local Storage
  localStorage.setItem("userName", reUserName.value);
  localStorage.setItem("Email", reEmail.value);
  localStorage.setItem("password", rePassword.value);

  // Open Main Page
  setTimeout(() => {
    window.location = "login.html";
  }, 1500);
}
