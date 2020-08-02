let counter = 1;
showSlides(counter);

document.querySelector(".prev").addEventListener("click", () => {
  plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", () => {
  plusSlides(1);
});

function plusSlides(t) {
  showSlides((counter += t));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[counter - 1].style.display = "block";
}
