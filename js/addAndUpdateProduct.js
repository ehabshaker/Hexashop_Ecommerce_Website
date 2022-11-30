// All Selectors
let mainForm = document.getElementById("create-form");
let formImage = document.getElementById("form-image");
let formTitle = document.getElementById("form-title");
let formPrice = document.getElementById("form-price");
let formCategory = document.getElementById("form-category");
let submitInput = document.querySelector(".submit");
let formCategoryValue;
let productImage;

// Events
formCategory.addEventListener("change", getCategory);
formImage.addEventListener("change", uploadImageFile);

if (window.location.pathname == "/editProduct.html") {
  // If This Page Is Upadte Page
  mainForm.addEventListener("submit", onUpdate);
} else {
  // If This Page Is Create Page
  mainForm.addEventListener("submit", onSubmmiting);
}

function getCategory(e) {
  formCategoryValue = e.target.value;
}

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

if (localStorage.getItem("allProduct")) {
  allProduct = JSON.parse(localStorage.getItem("allProduct"));
}

function onSubmmiting(e) {
  e.preventDefault();
  if (formImage.value != "" && formTitle.value != "" && formPrice.value != "") {
    let productObj = {
      id: allProduct.length,
      numOfProduct: allProduct.length,
      title: formTitle.value,
      imageUrl: productImage,
      price: formPrice.value,
      arrayName: formCategoryValue,
      qty: 1,
      isMe: "Y",
    };

    allProduct.push(productObj);

    localStorage.setItem("allProduct", JSON.stringify(allProduct));

    resetValues();

    setTimeout(() => {
      window.location = "allProducts.html";
    }, 500);
  }
}

function resetValues() {
  formImage.value = "";
  formTitle.value = "";
  formPrice.value = "";
  formCategory.value = "";
}

let currentEditProduct = allProduct[+localStorage.getItem("editProductId")];

if (window.location.pathname == "/editProduct.html") {
  formTitle.value = currentEditProduct.title;
  formPrice.value = currentEditProduct.price;
  formCategory.value = currentEditProduct.arrayName;
  submitInput.value = "Update";
}

function onUpdate(e) {
  e.preventDefault();

  if (formImage.value != "" && formTitle.value != "" && formPrice.value != "") {
    currentEditProduct.title = formTitle.value;
    currentEditProduct.price = formPrice.value;
    currentEditProduct.arrayName = formCategoryValue;
    currentEditProduct.imageUrl = productImage;

    localStorage.setItem("allProduct", JSON.stringify(allProduct));

    resetValues();

    setTimeout(() => {
      window.location = "allProducts.html";
    }, 500);
  }
}
