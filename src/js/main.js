var product1 = document.querySelector(".product-1");
var product2 = document.querySelector(".product-2");
var product3 = document.querySelector(".product-3");

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

var product2Title = document.querySelector(".product-2-title");
var product1Title = document.querySelector(".product-1-title");
var product3Title = document.querySelector(".product-3-title");

var infoGLuten = document.querySelector(".product-info-gluten");

var left12 = function () {
  arrowLeft1.classList.toggle("product-hidden");
  arrowLeft2.classList.toggle("product-hidden");
  arrowRight1.classList.toggle("product-hidden");
  arrowRight4.classList.toggle("product-hidden");

  product1Title.classList.toggle("product-hidden");
  product2Title.classList.toggle("product-hidden");
  infoGLuten.classList.toggle("product-hidden");

  product1.classList.toggle("product-hero");
  product1.classList.toggle("product-other");
  product1.classList.toggle("product-other-left");

  product2.classList.toggle("product-hero");
  product2.classList.toggle("product-other");
  product2.classList.toggle("product-other-left");
};

var right46 = function () {
  arrowRight4.classList.toggle("product-hidden");
  arrowRight6.classList.toggle("product-hidden");
  arrowLeft2.classList.toggle("product-hidden");
  arrowLeft6.classList.toggle("product-hidden");

  product1Title.classList.toggle("product-hidden");
  product3Title.classList.toggle("product-hidden");
  infoGLuten.classList.toggle("product-hidden");

  product1.classList.toggle("product-hero");
  product1.classList.toggle("product-other");
  product1.classList.toggle("product-other-right");

  product3.classList.toggle("product-hero");
  product3.classList.toggle("product-other");
  product3.classList.toggle("product-other-right");
};

var left64 = function () {
  arrowLeft6.classList.toggle("product-hidden");
  arrowLeft4.classList.toggle("product-hidden");
  arrowRight6.classList.toggle("product-hidden");
  arrowRight3.classList.toggle("product-hidden");

  product2Title.classList.toggle("product-hidden");
  product3Title.classList.toggle("product-hidden");

  product2.classList.toggle("product-hero");
  product2.classList.toggle("product-other");
  product2.classList.toggle("product-other-left");

  product3.classList.toggle("product-hero");
  product3.classList.toggle("product-other");
  product3.classList.toggle("product-other-left");
};

var right35 = function () {
  arrowRight3.classList.toggle("product-hidden");
  arrowRight5.classList.toggle("product-hidden");
  arrowLeft4.classList.toggle("product-hidden");
  arrowLeft5.classList.toggle("product-hidden");

  product1Title.classList.toggle("product-hidden");
  product2Title.classList.toggle("product-hidden");
  infoGLuten.classList.toggle("product-hidden");

  product1.classList.toggle("product-hero");
  product1.classList.toggle("product-other");
  product1.classList.toggle("product-other-right");

  product2.classList.toggle("product-hero");
  product2.classList.toggle("product-other");
  product2.classList.toggle("product-other-right");
};

var left53 = function () {
  arrowRight2.classList.toggle("product-hidden");
  arrowRight5.classList.toggle("product-hidden");
  arrowLeft5.classList.toggle("product-hidden");
  arrowLeft3.classList.toggle("product-hidden");

  product1Title.classList.toggle("product-hidden");
  product3Title.classList.toggle("product-hidden");
  infoGLuten.classList.toggle("product-hidden");

  product1.classList.toggle("product-hero");
  product1.classList.toggle("product-other");
  product1.classList.toggle("product-other-left");

  product3.classList.toggle("product-hero");
  product3.classList.toggle("product-other");
  product3.classList.toggle("product-other-left");
};

var right21 = function () {
  arrowRight2.classList.toggle("product-hidden");
  arrowRight1.classList.toggle("product-hidden");
  arrowLeft3.classList.toggle("product-hidden");
  arrowLeft1.classList.toggle("product-hidden");

  product2Title.classList.toggle("product-hidden");
  product3Title.classList.toggle("product-hidden");

  product3.classList.toggle("product-hero");
  product3.classList.toggle("product-other");
  product3.classList.toggle("product-other-right");

  product2.classList.toggle("product-hero");
  product2.classList.toggle("product-other");
  product2.classList.toggle("product-other-right");
};

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
