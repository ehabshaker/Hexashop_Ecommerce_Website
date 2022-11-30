let idProduct = eval(localStorage.getItem("productId"));
let productDetailsDom = document.querySelector(".product-details");

if (localStorage.getItem("allProduct")) {
  allProduct = JSON.parse(localStorage.getItem("allProduct"));
}

productDetailsDom.innerHTML = `
  <img src="${allProduct[idProduct].imageUrl}" alt="image">
  <h2> ${allProduct[idProduct].title} </h2>
  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corrupti eligendi recusandae harum incidunt quo ullam facilis id. Assumenda necessitatibus adipisci.</p>
  <p>$${allProduct[idProduct].price}.00</p>
`;
