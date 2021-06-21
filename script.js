const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const sectionTarget = document.querySelector(".container");

openBtn.addEventListener("click", () => {
  console.log("sectionTarget", sectionTarget);
  sectionTarget.classList.add("show-nav");
});

closeBtn.addEventListener("click", () => {
  console.log("sectionTarget", sectionTarget);
  sectionTarget.classList.remove("show-nav");
});
