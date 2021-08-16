// document.addEventListener("DOMContentLoaded", () => {
//   let $ = document.querySelector.bind(document);
//   let $$ = document.querySelectorAll.bind(document);
//   let slides = $$(".slide-item");

//   let slideIndex = 0;
//   const slideShow = (n) => {
//     let slideActive = $(".slide-item.slide-active");
//     slideActive.classList.remove("slide-active");
//     slides[n].classList.add("slide-active");
//   };
//   const AutoSlide = () => {
//     if (slideIndex === slides.length - 1) {
//       slideIndex = 0;
//     } else if (slideIndex >= 0) {
//       slideIndex += 1;
//     }
//     slideShow(slideIndex);

//     setTimeout(() => {
//       AutoSlide();
//     }, 4000);
//   };
//   AutoSlide();
// });
