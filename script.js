function toggleMenu() {
  // Get the menu and icon elements
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");


  //menu is not scrollable when open
  if (menu.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  //menu closes when the user clicks outside of it
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !icon.contains(e.target)) {
      menu.classList.remove("open");
      icon.classList.remove("open");
      document.body.style.overflow = "auto";
    }
  });


}