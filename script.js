const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");
const sectionP = document.querySelectorAll("section p");
const headerP = document.querySelector("header p");
const btns = document.querySelectorAll(".btn");
const tags = document.querySelectorAll(".tags span");
const socials = document.querySelectorAll(".socials a");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    body.style.background = "#fff";
    body.style.color = "#000";
    icon.classList.replace("fa-moon", "fa-sun");
    toggleBtn.style.color = "#000";

    sectionP.forEach((p) => {
      p.style.color = "rgb(85, 85, 85)";
    });

    headerP.style.color = "rgb(85, 85, 85)";

    btns.forEach((btn) => {
      btn.style.color = "#eee";
      btn.style.background = "rgb(18, 18, 18)";
    });

    tags.forEach((tag) => {
      tag.style.backgroundColor = "rgb(231, 231, 233)";
      tag.style.color = "rgb(85, 85, 85)";
    });

    socials.forEach((social) => {
      social.style.color = "#000";
    });


  } else {
    body.style.background = "#0e0e0e";
    body.style.color = "#eee";
    icon.classList.replace("fa-sun", "fa-moon");
    toggleBtn.style.color = "#fff";

    sectionP.forEach((p) => {
      p.style.color = "rgb(185, 185, 185)";
    });

    headerP.style.color = "rgb(185, 185, 185)";

    btns.forEach((btn) => {
      btn.style.color = "rgb(18, 18, 18)";
      btn.style.background = "#eee";
    });

    tags.forEach((tag) => {
      tag.style.backgroundColor = "#222";
      tag.style.color = "#aaa";
    });

    socials.forEach((social) => {
      social.style.color = "#eee";
    });
  }
});
