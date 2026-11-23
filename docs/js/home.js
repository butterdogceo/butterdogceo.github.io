const NAV = document.getElementById("nav");
const NAV_MOBILE_MENU_ICONS = document.querySelectorAll(".mobile-menu-icon");
const NAV_LOGO = document.getElementById("nav-logo");

let navIconRotateAngle = 0;

function toggleNav() {
  if (!NAV) {
    return;
  }

  NAV.classList.toggle("active");
}

function onNavLogoClick() {
  navIconRotateAngle += 180;
  NAV_LOGO.style.rotate = `${navIconRotateAngle}deg`;
}

function setupNav() {
  if (!NAV || !NAV_MOBILE_MENU_ICONS || !NAV_LOGO) {
    return;
  }

  NAV_MOBILE_MENU_ICONS.forEach(icon => {
    icon.addEventListener("click", toggleNav);
  });

  NAV_LOGO.addEventListener("click", onNavLogoClick);
}

setupNav();