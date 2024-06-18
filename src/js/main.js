var productLeft = document.querySelector(".product-other-left");
var productRight = document.querySelector(".product-other-right");
var productHero = document.querySelector(".product-hero");

var arrowLeft = document.querySelector(".products-arrow-left");
var arrowRight = document.querySelector(".products-arrow-right");

var left = function () {
  productLeft.classList.toggle("product-hero");
  productLeft.classList.toggle("product-other");
  productLeft.classList.toggle("product-other-left");
  productHero.classList.toggle("product-other");
  productHero.classList.toggle("product-other-left");
  productHero.classList.toggle("product-hero");

  productRight.classList.remove("product-hero");
  productRight.classList.add("product-other");
  productRight.classList.add("product-other-right");
};

var right = function () {
  productRight.classList.toggle("product-hero");
  productRight.classList.toggle("product-other");
  productRight.classList.toggle("product-other-right");
  productHero.classList.toggle("product-other");
  productHero.classList.toggle("product-other-right");
  productHero.classList.toggle("product-hero");

  productLeft.classList.remove("product-hero");
  productLeft.classList.add("product-other");
  productLeft.classList.add("product-other-left");
};

arrowLeft.addEventListener("click", left);
arrowRight.addEventListener("click", right);
