//  Slideshow  //
var counter = 1;
carousel(counter);

function changeSlide(n) {
  carousel(counter += n);
}

function currentSlide(n) {
  carousel(counter = n);
}

function carousel(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { counter = 1 }
  if (n < 1) { counter = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[counter - 1].style.display = "block";
  dots[counter - 1].className += " active";
}