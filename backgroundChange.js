export const changeBackground = function (c) {
  const clickimg = document.querySelector(`.${c}`);
  const bodyBackground = document.getElementById("background_img_comtainer");

  clickimg.addEventListener("click", function () {
    const getBackground = clickimg.getAttribute("src");
    bodyBackground.style.backgroundImage = `url("${getBackground}")`;
  });
};
