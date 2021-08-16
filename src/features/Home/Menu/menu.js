document.addEventListener("DOMContentLoaded", () => {
  let $ = document.querySelector.bind(document);
  let Menu = $(".Menu");
  document.addEventListener("scroll", () => {
    if (window.pageYOffset >= 16) {
      Menu.classList.add("menu-scroll");
    } else {
      Menu.classList.remove("menu-scroll");
    }
  });
  let menuHide = $("#menu-hide");
  let menuBar = $(".menu-bar");
  let indexShowMenu = "khong";

  const resizeMenu = (n) => {
    if (n <= 937) {
      menuHide.style.height = "0px";
      indexShowMenu = "khong";
    } else {
      menuHide.style.height = "auto";
      indexShowMenu = "co";
    }
  };
  menuBar.onclick = () => {
    clickBar();
  };
  const clickBar = () => {
    if (indexShowMenu === "khong") {
      menuHide.style.height = "309px";
      indexShowMenu = "co";
    } else {
      menuHide.style.height = "0";
      indexShowMenu = "khong";
    }
  };
  window.addEventListener("resize", () => {
    var widthScreen = window.innerWidth;
    resizeMenu(widthScreen);
  });
});
