let productsInLocal = localStorage.getItem("choosenProducts");
let favProductInLocal = localStorage.getItem("favProducts");
let productContent = document.querySelector(".product-container");

// Favourite Vars
let favProducts = [];
if (favProductInLocal) {
  favProducts = JSON.parse(favProductInLocal);
}

// Chossen Products Vars
let choosenProducts = [];
if (productsInLocal) {
  choosenProducts = JSON.parse(productsInLocal);
}

// Function To Add All Products In Page
function showItemsInPage(arr) {
  productContent.innerHTML = "";

  arr.forEach((product) => {
    productContent.innerHTML += `
    <div class="box">
      <div class="box-img">
        <img src="${product.imageUrl}" alt="">
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
          <i id="remove-from-arr" data-num="${product.numOfProduct}" class="fa-solid fa-trash"></i>
        </div>
        <p class="quantity"> Quantity: ${product.qty}</p>
      </div>
    </div>
    `;
  });
}

// When I Clicked On Remove Item Icon
document.addEventListener("click", (e) => {
  if (e.target.id == "remove-from-arr") {
    let numProductInArr = e.target.dataset.num;

    if (window.location.pathname == "/favPage.html") {
      removeItem(numProductInArr, favProducts, "favProducts");
    } else {
      removeItem(numProductInArr, choosenProducts, "choosenProducts");
    }
  }
});

// Function To Remove Item
function removeItem(numOfProduct, arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].numOfProduct == numOfProduct) {
      let index = arr.indexOf(arr[i]);
      arr.splice(index, 1);
    }
  }
  localStorage.setItem(key, JSON.stringify(arr));
  showItemsInPage(arr);
}

// If This Page Is Fav Page
if (
  window.location.pathname == "/favPage.html" ||
  window.location.pathname == "/Hexashop_Ecommerce_Website/favPage.html"
) {
  showItemsInPage(favProducts);
}

// If This Page Is Choosen Product Page
if (
  window.location.pathname == "/choosenCartsPage.html" ||
  window.location.pathname == "/Hexashop_Ecommerce_Website/choosenCartsPage.html"
) {
  showItemsInPage(choosenProducts);
}
