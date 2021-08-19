window.addEventListener("DOMContentLoaded", () => {
  let $ = document.querySelector.bind(document);
  let $$ = document.querySelectorAll.bind(document);
  const imgDefault = $(".DetailPet .img-active img");
  const listImg = $$(".DetailPet .img img");
  listImg.forEach((item, index) => {
    item.onclick = function () {
      let imgSrc = item.src;
      imgDefault.setAttribute("src", imgSrc);
    };
  });
});
