var productLeft = document.querySelector(".product-other-left");
var productRight = document.querySelector(".product-other-right");
var productHero = document.querySelector(".product-hero");

var arrowLeft1 = document.querySelector(".left1");
var arrowLeft2 = document.querySelector(".left2");
var arrowLeft3 = document.querySelector(".left3");
var arrowLeft4 = document.querySelector(".left4");
var arrowLeft5 = document.querySelector(".left5");
var arrowLeft6 = document.querySelector(".left6");

var arrowRight1 = document.querySelector(".right1");
var arrowRight2 = document.querySelector(".right2");
var arrowRight3 = document.querySelector(".right3");
var arrowRight4 = document.querySelector(".right4");
var arrowRight5 = document.querySelector(".right5");
var arrowRight6 = document.querySelector(".right6");

var left12 = function () {
  arrowLeft1.classList.toggle("hidden");
  arrowLeft2.classList.toggle("hidden");
  arrowRight1.classList.toggle("hidden");
  arrowRight4.classList.toggle("hidden");
};

var right46 = function () {
  arrowRight4.classList.toggle("hidden");
  arrowRight6.classList.toggle("hidden");
  arrowLeft2.classList.toggle("hidden");
  arrowLeft6.classList.toggle("hidden");
};

var left64 = function () {
  arrowLeft6.classList.toggle("hidden");
  arrowLeft4.classList.toggle("hidden");
  arrowRight6.classList.toggle("hidden");
  arrowRight3.classList.toggle("hidden");
};

var right35 = function () {
  arrowRight3.classList.toggle("hidden");
  arrowRight5.classList.toggle("hidden");
  arrowLeft4.classList.toggle("hidden");
  arrowLeft5.classList.toggle("hidden");
};

var left53 = function () {
  arrowRight2.classList.toggle("hidden");
  arrowRight5.classList.toggle("hidden");
  arrowLeft5.classList.toggle("hidden");
  arrowLeft3.classList.toggle("hidden");
};

var right21 = function () {
  arrowRight2.classList.toggle("hidden");
  arrowRight1.classList.toggle("hidden");
  arrowLeft3.classList.toggle("hidden");
  arrowLeft1.classList.toggle("hidden");
};

// var left = function () {
//   productLeft.classList.toggle("product-hero");
//   productLeft.classList.toggle("product-other");
//   productLeft.classList.toggle("product-other-left");
//   productHero.classList.toggle("product-other");
//   productHero.classList.toggle("product-other-left");
//   productHero.classList.toggle("product-hero");

//   productRight.classList.remove("product-hero");
//   productRight.classList.add("product-other");
//   productRight.classList.add("product-other-right");

//   arrowLeft.classList.add("hidden");
//   arrowLeft2.classList.remove("hidden");
// };

// var right1 = function () {
//   productRight.classList.toggle("product-hero");
//   productRight.classList.toggle("product-other");
//   productRight.classList.toggle("product-other-right");
//   productHero.classList.toggle("product-other");
//   productHero.classList.toggle("product-other-right");
//   productHero.classList.toggle("product-hero");

//   productLeft.classList.remove("product-hero");
//   productLeft.classList.add("product-other");
//   productLeft.classList.add("product-other-left");
// };

// arrowLeft.addEventListener("click", left);
// arrowRight.addEventListener("click", right1);

arrowLeft1.addEventListener("click", left12);
arrowLeft2.addEventListener("click", left12);

arrowRight4.addEventListener("click", right46);
arrowRight6.addEventListener("click", right46);

arrowLeft6.addEventListener("click", left64);
arrowLeft4.addEventListener("click", left64);

arrowRight3.addEventListener("click", right35);
arrowRight5.addEventListener("click", right35);

arrowLeft5.addEventListener("click", left53);
arrowLeft3.addEventListener("click", left53);

arrowRight2.addEventListener("click", right21);
arrowRight1.addEventListener("click", right21);
