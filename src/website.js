import loadContent from './locations';

function createHeader(body, navDiv) {
  const header = document.createElement('div');
  header.setAttribute('class', 'header');
  body.appendChild(header);
  header.appendChild(navDiv);
}

function addAllEventListeners(body, ...elements) {
  const [{ homeNav, contactNav, locationsNav, menuNav }] = elements;

  homeNav.addEventListener('click', () => {
    loadContent(body, 'home-nav-content');
  });
  contactNav.addEventListener('click', () => {
    loadContent(body, 'contact-nav-content');
  });
  locationsNav.addEventListener('click', () => {
    loadContent(body, 'locations-nav-content');
  });
  menuNav.addEventListener('click', () => {
    loadContent(body, 'menu-nav-content');
  });
}

function createNav() {
  const body = document.querySelector('body');
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
  addAllEventListeners(body, { menuNav, homeNav, locationsNav, contactNav });
  createHeader(body, navDiv);
}

export default createNav;
