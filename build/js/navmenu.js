var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  } else {
    navMain.classList.add('main-nav--opened');
    navMain.classList.remove('main-nav--closed');
  }
});



var submit = document.querySelector(".btn--submit");
var popup = document.querySelector(".popup--rewiew");
var error = document.querySelector(".popup--error");
var close = popup.querySelector(".btn--closed");

// submit.addEventListener("click", function(event) {
//   event.preventDefault();
//   popup.classList.add("popup--opened");
// });



var form = document.querySelector("form");
var phone = document.querySelector("[name=phone]");
var email = document.querySelector("[name=email]");


form.addEventListener("submit", function(event) {
  if (!phone.value || !email.value) {
    event.preventDefault();
    error.classList.add("popup--opened");
  } else {
      event.preventDefault();
    popup.classList.add("popup--opened");
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup--opened");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("popup--opened")) {
       popup.classList.remove("popup--opened");
    }
  }
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (error.classList.contains("popup--opened")) {
       error.classList.remove("popup--opened");
    }
  }
});
