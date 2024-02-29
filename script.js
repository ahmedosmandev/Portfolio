document.addEventListener("DOMContentLoaded", () => {
  // Event listener for opening the menu
  const mobileMenuIcon = document.querySelector(".mobile-menu");
  mobileMenuIcon.addEventListener("click", () => {
    const mobileNav = document.querySelector(".mobile-nav");
    mobileNav.classList.add("open-menu");
    mobileNav.classList.remove("closed-menu");
  });

  // Event listener for closing the menu using the "X" button
  const closeButton = document.querySelector(".mobile-nav .tabler-icon-x");
  closeButton.addEventListener("click", () => {
    const mobileNav = document.querySelector(".mobile-nav");
    mobileNav.classList.remove("open-menu");
    mobileNav.classList.add("closed-menu");
  });
});
