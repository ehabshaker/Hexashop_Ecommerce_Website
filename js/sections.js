// header Section
let icon = document.querySelector("nav .icon");
let ul = document.querySelector("nav #nav");

icon.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Men Section
showItemsInPage(productsMen, menContent);

// When I Clicked NextBtn
menNextBtn.addEventListener("click", () => {
  clickNextBtn(menContent);
});

function clickNextBtn(section) {
  count += 20;
  if (count > 40) {
    count = 0;
  }
  section.style.cssText = `transform: translate3d(-${count}%, 0px, 0px);`;
}

// When I Clicked PrevBtn
menPrevBtn.addEventListener("click", () => {
  clickPrevBtn(menContent);
});

function clickPrevBtn(section) {
  count -= 20;
  if (count < 0) {
    count = 0;
  }
  section.style.cssText = `transform: translate3d(-${count}%, 0px, 0px);`;
}

// Women Section
showItemsInPage(productsWomen, womenContent);

// When I Clicked NextBtn
womenNextBtn.addEventListener("click", () => {
  clickNextBtn(womenContent);
});

// When I Clicked NextBtn
womenPrevBtn.addEventListener("click", () => {
  clickPrevBtn(womenContent);
});

// Kids Section
showItemsInPage(productsKids, kidsContent);
// When I Clicked NextBtn
kidsNextBtn.addEventListener("click", () => {
  clickNextBtn(kidsContent);
});

// When I Clicked NextBtn
kidsPrevBtn.addEventListener("click", () => {
  clickPrevBtn(kidsContent);
});

// Trigger Function To Add Active Class On Box's Icon Fav
boxesFav();
