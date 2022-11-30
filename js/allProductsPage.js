if (localStorage.getItem("allProduct")) {
  allProduct = JSON.parse(localStorage.getItem("allProduct"));
}

let ProductsContent = document.querySelector(".products-content");

showItemsInPage(allProduct, ProductsContent);

// Trigger Function To Add Active Class On Box's Icon Fav
boxesFav();

// Search Function
let searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", searchByTitle);

function searchByTitle(e) {
  let value = e.target.value.toLowerCase();

  if (value !== "") {
    ProductsContent.innerHTML = "";

    let filteredArray = allProduct.filter(
      (product) => product.title.toLowerCase().indexOf(value) !== -1
    );

    showItemsInPage(filteredArray, ProductsContent);
  } else {
    ProductsContent.innerHTML = "";

    showItemsInPage(allProduct, ProductsContent);
  }
}

document.addEventListener("click", (e) => {
  if (e.target.id == "edit-from-arr") {
    localStorage.setItem("editProductId", e.target.dataset.num);
    window.location = "editProduct.html";
  }
  if (e.target.id == "remove-from-arr") {
    let productId = e.target.dataset.num;

    let choosenArray;

    if (localStorage.getItem("choosenProducts")) {
      choosenArray = JSON.parse(localStorage.getItem("choosenProducts"));

      choosenArray.forEach((chooseProduct, index) => {
        if (
          chooseProduct.title == allProduct[productId].title ||
          chooseProduct.numOfProduct == allProduct[productId].numOfProduct
        ) {
          choosenArray.splice(index, 1);
        }
      });

      localStorage.setItem("choosenProducts", JSON.stringify(choosenArray));

      showCountOnIcon(choosenArray);
      addDataInCartsCon(choosenArray);
    }

    allProduct.splice(productId, 1);

    for (let i = productId; i < allProduct.length; i++) {
      allProduct[i].numOfProduct -= 1;
    }

    localStorage.setItem("allProduct", JSON.stringify(allProduct));

    let emptyArr = [];

    choosenArray.forEach((Choose) => {
      allProduct.forEach((product) => {
        if (Choose.title == product.title) {
          emptyArr.push(product);
        }
      });
    });

    localStorage.setItem("choosenProducts", JSON.stringify(emptyArr));

    ProductsContent.innerHTML = "";

    showItemsInPage(allProduct, ProductsContent);

    editItem();

    location.reload();
  }
});

function editItem() {
  let editItemsContainer = document.querySelectorAll(".edit");

  allProduct.forEach((product) => {
    product.isMe == "Y"
      ? (editItemsContainer[product.numOfProduct].style.display = "block")
      : (editItemsContainer[product.numOfProduct].style.display = "none");
  });
}

editItem();
