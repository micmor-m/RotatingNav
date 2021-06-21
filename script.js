const openBtn = document.getElementById("square");
const closeBtn = document.getElementById("close");
const sectionTarget = document.getElementById("target");
const nav = document.getElementsByTagName("nav")[0];
//console.log("sectionTarget", sectionTarget);
openBtn.addEventListener("click", () => {
  console.log("sectionTarget", sectionTarget);
  sectionTarget.classList.add("rotation");
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
  nav.style.visibility = "visible";
});

closeBtn.addEventListener("click", () => {
  console.log("sectionTarget", sectionTarget);
  sectionTarget.classList.remove("rotation");
  closeBtn.style.display = "none";
  openBtn.style.display = "inline-block";
  nav.style.visibility = "hidden";
});
