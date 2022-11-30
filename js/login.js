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

let logEmail = document.querySelector("#email");
let logPassword = document.querySelector("#password");
let logBtn = document.querySelector("#login-btn");

let getEmail = localStorage.getItem("Email");
let getPassword = localStorage.getItem("password");

logBtn.addEventListener("click", login);

function login(e) {
  e.preventDefault();
  if (
    getEmail &&
    getEmail === logEmail.value &&
    getPassword &&
    getPassword === logPassword.value
  ) {
    setTimeout(() => {
      window.location = "index.html";
    }, 1500);
  } else {
    alert("Email Or Password Is Wrong");
  }
}
