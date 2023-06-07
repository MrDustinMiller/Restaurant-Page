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

  // check which navitem we clicked on and show corresponding content
  displayActiveTabsContent(navItemContentDiv, navItemText);
  navItemContentDiv.appendChild(navItemText);
}

function checkForAndRemoveMainContentChild(mainContentDiv) {
  const mainContent = mainContentDiv;

  if (mainContent.hasChildNodes()) {
    // if mainContent has a child, replace w/empty string so we can show next nav items clicked content
    mainContent.textContent = '';
  }
}

function createNavItemContentContainer(mainContentDiv, navItemContentClass) {
  const mainContent = mainContentDiv;
  const navItemContentDiv = document.createElement('div');
  navItemContentDiv.setAttribute('class', `${navItemContentClass}`);

  // check, make own function later
  const existingContentDiv = document.querySelector(`.${navItemContentClass}`);
  if (existingContentDiv) return;

  checkForAndRemoveMainContentChild(mainContentDiv);
  mainContent.appendChild(navItemContentDiv);
  createTextContent(navItemContentDiv);
}

export default createNavItemContentContainer;
