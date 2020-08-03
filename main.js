let counter = 1;
showTestimonials(counter);

document.querySelector(".prev").addEventListener("click", () => {
  plusTestimonials(-1);
});

document.querySelector(".next").addEventListener("click", () => {
  plusTestimonials(1);
});

function plusTestimonials(t) {
  showTestimonials((counter += t));
}

function showTestimonials(n) {
  let i;
  let testimonials = document.getElementsByClassName("testimonial");
  if (n > testimonials.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = testimonials.length;
  }
  for (i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = "none";
  }
  testimonials[counter - 1].style.display = "flex";
}
