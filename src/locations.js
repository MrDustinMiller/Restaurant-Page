function displayActiveTabsContent(navItemContentDiv, navItemText) {
  const navItemContent = navItemText;

  switch (navItemContentDiv.className) {
    case 'home-nav-content':
      navItemContent.textContent = 'homeText';
      break;
    case 'contact-nav-content':
      navItemContent.textContent = 'contactText';
      break;
    case 'locations-nav-content':
      navItemContent.textContent = 'locationsText';
      break;
    case 'menu-nav-content':
      navItemContent.textContent = 'menuText';
      break;
    default:
      break;
  }
}

function createTextContent(navItemContentDiv) {
  // create paragraph elem for nav items content
  const navItemText = document.createElement('p');

  // check which navitem we clicked on to show corresponding content
  displayActiveTabsContent(navItemContentDiv, navItemText);
  navItemContentDiv.appendChild(navItemText);
}

function createNavItemContentContainer(body, navItemClass) {
  // create container div for nav items content
  const navItemContentDiv = document.createElement('div');

  // set container div classname to corresponding nav item (home/menu/etc)
  navItemContentDiv.setAttribute('class', `${navItemClass}`);

  const existingContentDiv = document.querySelector(`.${navItemClass}`);
  if (existingContentDiv) {
    // If the content div already exists in the DOM, return
    return;
  }

  body.appendChild(navItemContentDiv);
  createTextContent(navItemContentDiv);
}

export default createNavItemContentContainer;
