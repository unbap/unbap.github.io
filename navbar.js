// window.addEventListener("load", );

document.addEventListener("DOMContentLoaded", function () {
  const menubar = `<a class="menu" href="/">Home</a>|<a
  class="menu"
  href="/#members"
  >Members</a
  >|<a class="menu" href="/#projects">Projects</a>`;

  const div = document.createElement("div");
  div.className = "menuBar standalone";
  div.innerHTML = menubar;

  document.body.prepend(div);
});
