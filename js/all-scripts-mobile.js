// Toggle Menu Icon
const menuIcon = document.querySelector('#menu-icon');

function toggleMenuIcon() {
      if(menuIcon.getAttribute('src') === "images/menu-icon.svg") {
            menuIcon.src = "images/menu-close-icon.svg";
      } else {
            menuIcon.src = "images/menu-icon.svg";
      }
}

menuIcon.addEventListener('click', toggleMenuIcon);

// Dropdown Menu
function dropdownMenu() {
      const menuMobile = document.querySelector('.menu-mobile');
      if(menuMobile.classList.contains('display-flex')) {
            menuMobile.classList.remove('display-flex');
      } else {
            menuMobile.classList.add('display-flex');
      }
}

menuIcon.addEventListener('click', dropdownMenu);

// Toggle Overlay Display
function toggleOverlayDisplay() {
      const overlay = document.querySelector('.overlay');
      if(overlay.classList.contains('display-block')) {
            overlay.classList.remove('display-block');
      } else {
            overlay.classList.add('display-block');
      }
}

menuIcon.addEventListener('click', toggleOverlayDisplay);

// ToggleArrowIcon features
const menuMobileFeatures = document.querySelector('.menu-mobile__features');
const iconArrow = document.querySelector('.menu-mobile__features__icon-arrow');

function toggleArrowIcon() {
      if(iconArrow.getAttribute('src') === "images/icon-arrow-down.svg") {
            iconArrow.src = "images/icon-arrow-up.svg";
      } else {
            iconArrow.src = "images/icon-arrow-down.svg";
      }
}

menuMobileFeatures.addEventListener('click', toggleArrowIcon);

// Dropdown SubMenu features
function dropdownFeaturesSubMenu() {
      const featuresSubMenu = document.querySelector('.features-subMenu');
      if(featuresSubMenu.classList.contains('display-grid')) {
            featuresSubMenu.classList.remove('display-grid');
      } else {
            featuresSubMenu.classList.add('display-grid');
      }
}

menuMobileFeatures.addEventListener('click', dropdownFeaturesSubMenu)

// ToggleArrowIcon company
const menuMobileCompany = document.querySelector('.menu-mobile__company');
const iconArrowCompany = document.querySelector('.menu-mobile__company__icon-arrow');

function toggleArrowIconCompany() {
      if(iconArrowCompany.getAttribute('src') === "images/icon-arrow-down.svg") {
            iconArrowCompany.src = "images/icon-arrow-up.svg";
      } else {
            iconArrowCompany.src = "images/icon-arrow-down.svg";
      }
}

menuMobileCompany.addEventListener('click', toggleArrowIconCompany);

// Dropdown SubMenu company
const subMenuCompany = document.querySelector(".subMenu-company");

function dropdownSubMenuCompany() {
      if(subMenuCompany.classList.contains('display-grid')) {
            subMenuCompany.classList.remove('display-grid');
      } else {
            subMenuCompany.classList.add('display-grid');
      }
}

menuMobileCompany.addEventListener('click', dropdownSubMenuCompany)

// toggleArrowIconFeaturesDesktop()
const menuDesktopFeatures = document.querySelector('.menu-desktop__features');
const menuDesktopFeaturesIconArrow = document.querySelector('.menu-desktop__features__icon-arrow');

function toggleArrowIconFeaturesDesktop() {
      if(menuDesktopFeaturesIconArrow.getAttribute('src') === "images/icon-arrow-down.svg") {
            menuDesktopFeaturesIconArrow.src = "images/icon-arrow-up.svg";
      } else {
            menuDesktopFeaturesIconArrow.src = "images/icon-arrow-down.svg";
      }
}

menuDesktopFeatures.addEventListener('click', toggleArrowIconFeaturesDesktop);


// toggleIconCompanyDesktop()
const menuDesktopCompany = document.querySelector('.menu-desktop__company');
const menuDesktopCompanyIconArrow = document.querySelector('.menu-desktop__company__icon-arrow');

function toggleIconCompanyDesktop() {
      if(menuDesktopCompanyIconArrow.getAttribute('src') === "images/icon-arrow-down.svg") {
            menuDesktopCompanyIconArrow.src = "images/icon-arrow-up.svg";
      } else {
            menuDesktopCompanyIconArrow.src = "images/icon-arrow-down.svg";
      }
}

menuDesktopCompany.addEventListener('click', toggleIconCompanyDesktop)

// DropDownSubMenuFeatureDesktop()
const subMenuDesktopFeatures = document.querySelector('.subMenu-Desktop-features');
function DropDownSubMenuFeatureDesktop() {
      if(subMenuDesktopFeatures.classList.contains('display-flex')) {
            subMenuDesktopFeatures.classList.remove('display-flex');
      } else {    
            subMenuDesktopFeatures.classList.add('display-flex');
      }
}

menuDesktopFeatures.addEventListener('click', DropDownSubMenuFeatureDesktop);

// DropDownSubMenuCompanyDesktop()
const subMenuDesktopCompany = document.querySelector('.subMenu-desktop-company');

function DropDownSubMenuCompanyDesktop() {
      if(subMenuDesktopCompany.classList.contains('display-flex')) {
            subMenuDesktopCompany.classList.remove('display-flex');
      } else {    
            subMenuDesktopCompany.classList.add('display-flex');
      }
}

menuDesktopCompany.addEventListener('click', DropDownSubMenuCompanyDesktop)