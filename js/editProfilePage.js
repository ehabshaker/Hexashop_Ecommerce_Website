// LocalStorage Information
let getUser = localStorage.getItem("userName");
let getMail = localStorage.getItem("Email");

// All Selectors
let currentName = document.getElementById("profile-title");
let currentEmail = document.getElementById("profile-email");
let currentImage = document.getElementById("profile-image");
let submitEditInput = document.getElementById("update-profile-form");
let productImage;

// Add Values
currentName.value = getUser;
currentEmail.value = getMail;

// Events
currentImage.addEventListener("change", uploadImageFile);

submitEditInput.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    currentName.value != "" &&
    currentEmail.value != "" &&
    currentImage.value != ""
  ) {
    localStorage.setItem("userName", currentName.value);
    localStorage.setItem("Email", currentEmail.value);
    localStorage.setItem("userImage", productImage);

    setTimeout(() => {
      window.location = "profilePage.html";
    }, 500);
  }
});

// Functions
function uploadImageFile() {
  let file = this.files[0];

  // Check If Type Png Or Jpg
  if (file.type !== "image/jpeg" && file.type !== "image/png") {
    alert("Sorry, This Type Not Supported");
    this.value = "";
    return;
  }

  // Check If Size Smaller Than Or Equal 2MB
  if (file.size > 2 * 1024 * 1024) {
    alert("Image Not Exced 2MB");
    return;
  }

  getImageBase64(file);
}

function getImageBase64(file) {
  let reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function () {
    productImage = reader.result;
  };

  reader.onerror = function () {
    alert("There Is Something Wrong!");
  };
}
