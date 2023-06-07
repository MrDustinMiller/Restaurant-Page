import loadContent from './locations';

function createHeader(htmlBody, navDiv) {
  const header = document.createElement('div');
  header.setAttribute('class', 'header');
  htmlBody.appendChild(header);
  header.appendChild(navDiv);
}

function addAllEventListeners(mainContent, ...elements) {
  const [{ homeNav, contactNav, locationsNav, menuNav }] = elements;

  homeNav.addEventListener('click', () => {
    loadContent(mainContent, 'home-nav-content');
  });
  contactNav.addEventListener('click', () => {
    loadContent(mainContent, 'contact-nav-content');
  });
  locationsNav.addEventListener('click', () => {
    loadContent(mainContent, 'locations-nav-content');
  });
  menuNav.addEventListener('click', () => {
    loadContent(mainContent, 'menu-nav-content');
  });
}

function createNav() {
  const htmlBody = document.querySelector('body');
  const mainContent = document.createElement('div');
  mainContent.setAttribute('class', 'content');
  const navDiv = document.createElement('div');
  navDiv.setAttribute('class', 'nav-div');
  const homeNav = document.createElement('button');
  homeNav.setAttribute('class', 'nav home-nav');
  homeNav.textContent = 'Home';
  const contactNav = document.createElement('button');
  contactNav.setAttribute('class', 'nav contact-nav');
  contactNav.textContent = 'Contact';
  const locationsNav = document.createElement('button');
  locationsNav.setAttribute('class', 'nav locations-nav');
  locationsNav.textContent = 'Locations';
  const menuNav = document.createElement('button');
  menuNav.setAttribute('class', 'nav menu-nav');
  menuNav.textContent = 'Menu';
  navDiv.appendChild(homeNav);
  navDiv.appendChild(contactNav);
  navDiv.appendChild(locationsNav);
  navDiv.appendChild(menuNav);
  addAllEventListeners(mainContent, {
    menuNav,
    homeNav,
    locationsNav,
    contactNav,
  });
  createHeader(htmlBody, navDiv);
  htmlBody.appendChild(mainContent);
}

export default createNav;
