// Products Sections

// All Selectors
let cartsContainer = document.querySelector(".carts-items .items");
let carts = document.querySelector(".carts-items");
let shoppingIcon = document.querySelector(".shopping-icon");
let cartsItemsBtn = document.querySelector(".carts-items-btn");
let count = 0;

// Men Section
let menContent = document.querySelector(".men-content");
let menNextBtn = document.querySelector(".men .arrow-right");
let menPrevBtn = document.querySelector(".men .arrow-left");

// Women Section
let womenContent = document.querySelector(".Women-content");
let womenNextBtn = document.querySelector(".women .arrow-right");
let womenPrevBtn = document.querySelector(".women .arrow-left");

// Kids Section
let kidsContent = document.querySelector(".kids-content");
let kidsNextBtn = document.querySelector(".kids .arrow-right");
let kidsPrevBtn = document.querySelector(".kids .arrow-left");

// All Product Page

// Function To Add All Products In Page
function showItemsInPage(arr, section) {
  arr.forEach((product) => {
    section.innerHTML += `
    <div class="box">
      <div class="box-img">
        <img src="${product.imageUrl}" alt="">
        <div class="links">
          <i id="${product.numOfProduct}" class="product-details fa fa-eye"></i>
          <i id='${product.numOfProduct}' class="fa fa-star add-to-fav"></i>
          <i id='${product.numOfProduct}' class="add-to-cart fa fa-shopping-cart"></i>
        </div>
      </div>
      <div class="text">
        <div class="info">
          <h3>${product.title}</h3>
          <div class="stars">
            <span><i class="fa fa-star"></i></span>
            <span><i class="fa fa-star"></i></span>
            <span><i class="fa fa-star"></i></span>
            <span><i class="fa fa-star"></i></span>
            <span><i class="fa fa-star"></i></span>
          </div>
        </div>
        <div class="price">
          <p>$${product.price}.00</p>
          <div class="edit">
            <i id="remove-from-arr" data-num="${product.numOfProduct}" class="fa-solid fa-trash"></i>
            <i id="edit-from-arr" data-num="${product.numOfProduct}" class="fa-solid fa-pen-fancy"></i>
          </div>
        </div>
      </div>
    </div>
    `;
  });
}

// When I Clicked On Product's Add-to-cart Icon
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    checkDataLogin(e.target.id);
  }
});

// When I Clicked On Product's productDetails Icon
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("product-details")) {
    window.location = "productDetails.html";
    localStorage.setItem("productId", e.target.id);
  }
});

// When I Clicked On Product's Add-To-Fav Icon
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-fav")) {
    checkUserLogin(e.target.id);
  }
});

// Function To Handle Click On box's ShoppingIcon
function checkDataLogin(id) {
  if (localStorage.getItem("userName")) {
    addInCart(id);

    let cartsItemsDivs = document.querySelectorAll(".carts-items .items .box");

    if (cartsItemsDivs.length > 0) {
      showCountOnIcon(cartsItemsDivs);
    }
  } else {
    window.location = "register.html";
  }
}

// Function To Show Count On Shopping Cart Icon
function showCountOnIcon(arr) {
  document.querySelector(".count-carts").style.display = "block";

  document.querySelector(".count-carts").innerHTML = arr.length;
}

// Check If There's choosenProducts In LocalStorage
let arrCartFromLocal = localStorage.getItem("choosenProducts");
let arrayOfProducts = [];

if (arrCartFromLocal) {
  getDataFromLocal(arrayOfProducts);
}

// Function To Add Items Title In cartsContainer
function addInCart(numOfProduct) {
  let index = -1;

  if (arrayOfProducts.length > 0) {
    for (let i = 0; i < arrayOfProducts.length; i++) {
      if (
        arrayOfProducts[i].title == allProduct[numOfProduct].title ||
        arrayOfProducts[i].numOfProduct == allProduct[numOfProduct].numOfProduct
      ) {
        index = 0;
        arrayOfProducts[i].qty += 1;
      }
    }
  }

  // Add Product In arrayOfProducts
  if (index == -1) {
    arrayOfProducts.push(allProduct[numOfProduct]);
  }

  // Trigger Function addArrayInLocal To save Products In LocalStorage
  addArrayInLocal("choosenProducts", arrayOfProducts);

  cartsContainer.innerHTML = "";

  // Trigger Function To Add Data In Carts Container
  addDataInCartsCon(arrayOfProducts);
}

// When I Clicked On shoppingIcon
shoppingIcon.addEventListener("click", function (e) {
  e.preventDefault();

  if (cartsContainer.innerHTML !== "") {
    carts.classList.toggle("show");
  }
});

// Function To Add Products In LocalStorage
function addArrayInLocal(key, arr) {
  localStorage.setItem(key, JSON.stringify(arr));
}

// Function To get Data From LocalStorage
function getDataFromLocal() {
  arrayOfProducts = JSON.parse(arrCartFromLocal);
  if (arrayOfProducts.length > 0) {
    showCountOnIcon(arrayOfProducts);
    addDataInCartsCon(arrayOfProducts);
  }
}

// Function To Add Data In Carts Container
function addDataInCartsCon(array) {
  cartsContainer.innerHTML = "";

  array.forEach((product) => {
    cartsContainer.innerHTML += `
    <div class="box" id="${product.id}">
      <p>${product.title} (${product.qty})</p>
      <p>$${product.price}.00</p>
    </div>
    `;
  });
}

// When I Clicked On Show All Product Btn
cartsItemsBtn.addEventListener("click", () => {
  window.location = "choosenCartsPage.html";
});

// Add Favourite Product
// Check If There's choosenProducts In LocalStorage
let arrFavFromLocal = localStorage.getItem("favProducts");
let arrayOfFavProducts = [];

if (arrFavFromLocal) {
  arrayOfFavProducts = JSON.parse(arrFavFromLocal);
}

// Function To Handle Click On box's Fav Icon
function checkUserLogin(id) {
  if (localStorage.getItem("userName")) {
    addInFav(id);
  } else {
    window.location = "register.html";
  }
}

// Function To Add Product In Fav
function addInFav(numOfProduct) {
  let index = -1;

  if (arrayOfFavProducts.length > 0) {
    for (let i = 0; i < arrayOfFavProducts.length; i++) {
      if (
        arrayOfFavProducts[i].numOfProduct ==
        allProduct[numOfProduct].numOfProduct
      ) {
        index = 0;
      }
    }
  }

  // Add Product In arrayOfProducts
  if (index == -1) {
    allProduct[numOfProduct].liked = true;
    document
      .querySelectorAll(".add-to-fav")
      [numOfProduct].classList.add("active");
    arrayOfFavProducts.push(allProduct[numOfProduct]);
  }

  // Trigger Function addArrayInLocal To save Products In LocalStorage
  addArrayInLocal("favProducts", arrayOfFavProducts);
}

// Function To Add Active Class On Box's Icon Fav
function boxesFav() {
  if (localStorage.getItem("favProducts")) {
    let favItems = JSON.parse(localStorage.getItem("favProducts"));

    let addToFavIcons = document.querySelectorAll(".add-to-fav");

    favItems.forEach((favitem) => {
      allProduct.forEach((item) => {
        if (favitem.numOfProduct == item.numOfProduct) {
          addToFavIcons[item.numOfProduct].classList.add("active");
        }
      });
    });
  }
}
