var item1 = document.querySelector(".item1");
var item2 = document.querySelector(".item2");
var item3 = document.querySelector(".item3");

var mob1 = document.querySelector(".mob-li-1");
var mob2 = document.querySelector(".mob-li-2");
var mob3 = document.querySelector(".mob-li-3");
var mob5 = document.querySelector(".mob-li-5");

var display1 = document.querySelector(".about-me");
var display2 = document.querySelector(".container");
var display3 = document.querySelector(".hire-me");
var display4 = document.querySelector(".title");

var brand = document.querySelector(".brand");
var box2 = document.querySelector(".box2");

//for animation
$(window).on("load", function () {
  $(".titleImg").addClass("animation");
});

//for desktop
item1.addEventListener("click", () => {
  // height
  display1.style.height = "100%";
  display2.style.height = "0%";
  display3.style.height = "0%";
  display4.style.height = "0%";

  display4.style.marginTop = "0%";
  display4.style.display = "none";

  // transform
  display1.style.transform = "scale(1)";
  display2.style.transform = "scale(0)";
  display3.style.transform = "scale(0)";
  display4.style.transform = "scale(0)";

  // color

  box2.style.backgroundImage =
    "linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%)";

  item1.style.color = "#4f9d9cba";
  item2.style.color = "#4f9d9c";
  item3.style.color = "#4f9d9c";
});

item2.addEventListener("click", () => {
  // height
  display1.style.height = "0%";
  display2.style.height = "100%";
  display3.style.height = "0%";
  display4.style.height = "0%";

  display4.style.marginTop = "0%";
  display4.style.display = "none";

  // transform
  display1.style.transform = "scale(0)";
  display2.style.transform = "scale(1)";
  display3.style.transform = "scale(0)";
  display4.style.transform = "scale(0)";

  box2.style.backgroundImage =
    "linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%)";

  item1.style.color = "#4f9d9c";
  item2.style.color = "#4f9d9cba";
  item3.style.color = "#4f9d9c";
});

item3.addEventListener("click", () => {
  // height
  display1.style.height = "0%";
  display2.style.height = "0%";
  display3.style.height = "100%";
  display4.style.height = "0%";

  display4.style.marginTop = "0%";
  display4.style.display = "none";

  // transform
  display1.style.transform = "scale(0)";
  display2.style.transform = "scale(0)";
  display3.style.transform = "scale(1)";
  display4.style.transform = "scale(0)";

  // margin
  display2.style.marginTop = "0%";

  box2.style.backgroundImage =
    "linear-gradient(to right top, #211c3f, #413d6a, #626199, #8588cb, #a8b1ff)";

  item1.style.color = "#4f9d9c";
  item2.style.color = "#4f9d9c";
  item3.style.color = "#4f9d9cba";
});

//for mobile
mob1.addEventListener("click", () => {
  display1.style.height = "100%";
  display2.style.height = "0%";
  display3.style.height = "0%";
  display4.style.height = "0%";

  display4.style.marginTop = "0%";
  display4.style.display = "none";

  display1.style.transform = "scale(1)";
  display2.style.transform = "scale(0)";
  display3.style.transform = "scale(0)";
  display4.style.transform = "scale(0)";

  box2.style.backgroundImage =
    "linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%)";
  box2.style.height = "80vh";
  box2.style.marginTop = "70px";

  mob1.style.color = "#4f9d9cba";
  mob2.style.color = "#4f9d9c";
  mob3.style.color = "#4f9d9c";
  mob5.style.color = "#4f9d9c";
});

mob2.addEventListener("click", () => {
  display1.style.height = "0%";
  display2.style.height = "100%";
  display3.style.height = "0%";
  display4.style.height = "0%";

  display4.style.marginTop = "0%";
  display4.style.display = "none";

  display1.style.transform = "scale(0)";
  display2.style.transform = "scale(1)";
  display3.style.transform = "scale(0)";
  display4.style.transform = "scale(0)";

  box2.style.backgroundImage =
    "linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%)";
  box2.style.height = "80vh";
  box2.style.marginTop = "70px";

  mob1.style.color = "#4f9d9c";
  mob2.style.color = "#4f9d9cba";
  mob3.style.color = "#4f9d9c";
  mob5.style.color = "#4f9d9c";
});

mob3.addEventListener("click", () => {
  display1.style.height = "0%";
  display2.style.height = "0%";
  display3.style.height = "100%";
  display4.style.height = "0%";

  display4.style.marginTop = "0%";
  display4.style.display = "none";

  display1.style.transform = "scale(0)";
  display2.style.transform = "scale(0)";
  display3.style.transform = "scale(1)";
  display4.style.transform = "scale(0)";

  display2.style.marginTop = "0%";

  box2.style.backgroundImage =
    "linear-gradient(to right top, #211c3f, #413d6a, #626199, #8588cb, #a8b1ff)";
  box2.style.height = "80vh";
  box2.style.marginTop = "70px";

  mob1.style.color = "#4f9d9c";
  mob2.style.color = "#4f9d9c";
  mob3.style.color = "#4f9d9cba";
  mob5.style.color = "#4f9d9c";
});

mob5.addEventListener("click", () => {
  display1.style.height = "0%";
  display2.style.height = "0%";
  display3.style.height = "0%";
  display4.style.height = "100%";

  display1.style.transform = "scale(0)";
  display2.style.transform = "scale(0)";
  display3.style.transform = "scale(0)";
  display4.style.transform = "scale(1)";

  display4.style.display = "block";

  box2.style.backgroundImage = 'url("Images/retro-back.jpg")';
  box2.style.height = "40vh";
  box2.style.marginTop = "150px";

  mob1.style.color = "#4f9d9c";
  mob2.style.color = "#4f9d9c";
  mob3.style.color = "#4f9d9c";
  mob5.style.color = "#4f9d9cba";
});

// for pop

var bar = document.querySelector(".fa-bars");
var popup = document.querySelector(".pop");
var pop1 = document.querySelector(".pop1");

bar.addEventListener("mouseover", () => {
  popup.style.transform = "scale(1)";
});

bar.addEventListener("mouseout", () => {
  popup.style.transform = "scale(0)";
});

popup.addEventListener("mouseover", () => {
  popup.style.transform = "scale(1)";
});

popup.addEventListener("mouseout", () => {
  popup.style.transform = "scale(0)";
});

pop1.addEventListener("click", () => {
  display1.style.height = "0%";
  display2.style.height = "0%";
  display3.style.height = "0%";
  display4.style.width = "100%";

  display4.style.display = "block";

  display1.style.transform = "scale(0)";
  display2.style.transform = "scale(0)";
  display3.style.transform = "scale(0)";
  display4.style.transform = "scale(1)";

  box2.style.backgroundImage = 'url("Images/retro-back.jpg")';

  item1.style.color = "#4f9d9c";
  item2.style.color = "#4f9d9c";
  item3.style.color = "#4f9d9c";
});

// For Slideshow

var slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
  displaySlides((slide_index += n));
}

function currentSlide(n) {
  displaySlides((slide_index = n));
}

function displaySlides(n) {
  var i;
  var slides = document.getElementsByClassName("showSlide");
  if (n > slides.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}

//for menu-btn

const menuBtn = document.querySelector(".menu-btn");
const list = document.querySelector(".link");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

menuBtn.addEventListener("click", () => {
  if (!menuBtn.classList.contains("open")) {
    list.style.transform = "scale(0)";
  } else {
    list.style.transform = "scale(1)";
  }
});

list.addEventListener("click", () => {
  list.style.transform = "scale(0)";
  menuBtn.classList.remove("open");
  menuOpen = false;
});

//for color change

brand = document.querySelector(".brand");

setInterval(function () {
  let random1 = Math.floor(256 * Math.random());
  let random2 = Math.floor(256 * Math.random());
  let random3 = Math.floor(256 * Math.random());
  brand.style.color = `rgb(${random1},${random2},${random3})`;
}, 1000);
