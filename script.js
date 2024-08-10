const menuOpenBtn = document.getElementById("menu-open");
const menuCloseBtn = document.getElementById("menu-close");
const topHeadPartEl = document.querySelector(".top-part");
const copyRightDate = document.querySelector(".date");

menuOpenBtn.addEventListener("click", () => {
  topHeadPartEl.classList.add("active");
});
menuCloseBtn.addEventListener("click", () => {
  topHeadPartEl.classList.remove("active");
});

const date = new Date().getFullYear();
copyRightDate.textContent = date;
