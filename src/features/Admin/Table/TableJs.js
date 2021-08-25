export const showAction = (e) => {
  const actionBtn = e.querySelectorAll(".action");
  const actionsShow = e.querySelectorAll(".action-content");
  const blurJs = e.querySelector(".blurJs");

  let i = 0;
  blurJs.onclick = function (e) {
    blurJs.classList.remove("blur");
    actionsShow[i].classList.add("action-hident");
  };
  actionBtn.forEach((item, index) => {
    item.onclick = function (event) {
      i = index;
      event.stopPropagation();
      actionsShow[index].classList.remove("action-hident");
      blurJs.classList.add("blur");
    };
  });
};
