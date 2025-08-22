const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    body.style.background = "#fff";
    body.style.color = "#000";
    icon.classList.replace("fa-moon", "fa-sun");
    toggleBtn.style.color = "#000"
  } else {
    body.style.background = "#0e0e0e";
    body.style.color = "#eee";
    icon.classList.replace("fa-sun", "fa-moon");
    toggleBtn.style.color = "#fff"
  }
});
