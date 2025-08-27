const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  if (body.classList.contains("light-theme")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});
