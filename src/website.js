import loadHome from './home';
import loadContact from './contact';

function createHeader(htmlBody, navDiv) {
  const header = document.createElement('div');
  header.setAttribute('class', 'header');
  htmlBody.appendChild(header);
  const headerTitle = document.createElement('p');
  headerTitle.classList.add('header-title');
  headerTitle.textContent = 'Smoky Waters';
  header.appendChild(headerTitle);
  header.appendChild(navDiv);
}

function addAllEventListeners(mainContent, ...elements) {
  const [{ homeNav, contactNav, menuNav }] = elements;

  homeNav.addEventListener('click', () => {
    loadHome('home-nav-content');
  });
  contactNav.addEventListener('click', () => {
    loadContact('contact-nav-content');
  });
  menuNav.addEventListener('click', () => {
    // load menu?
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
  const menuNav = document.createElement('button');
  menuNav.setAttribute('class', 'nav menu-nav');
  menuNav.textContent = 'Menu';
  navDiv.appendChild(homeNav);
  navDiv.appendChild(contactNav);
  navDiv.appendChild(menuNav);
  addAllEventListeners(mainContent, {
    menuNav,
    homeNav,
    contactNav,
  });
  createHeader(htmlBody, navDiv);
  htmlBody.appendChild(mainContent);
}

export default createNav;
