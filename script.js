/* CSP sucks */
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("randomize").addEventListener("click", randomize);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("minusSlide").addEventListener("click", minusSlide);
});

document.addEventListener('DOMContentLoaded', function() {
 document.getElementById("plusSlide").addEventListener("click", plusSlide);
});

var random;
var max = 20
function findRandom() {
  random = Math.floor(Math.random() * max) //Finds number between 0 - max
  console.log(random)
}
findRandom()

/* Default slide index */
var slideIndex = random;
showSlides(slideIndex);

/* Random slide index */
function randomize() { 
  var min = 0;
  var max = 30;
  slideIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(slideIndex)
    showSlides(slideIndex);
}

/* Increment function, next slide */
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* ФDecrement function, prev slide */
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Current slide */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Main slider function */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
}