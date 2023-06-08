function checkForAndRemoveMainContentChild() {
  const content = document.querySelector('.content');

  if (content.hasChildNodes()) {
    // if mainContent has a child, replace w/empty string so we can show next nav items clicked content
    content.textContent = '';
  }
}

function checkIfNavItemIsActivelyDisplayed(navItemContentClass) {
  const existingContentDiv = document.querySelector(`.${navItemContentClass}`);
  if (existingContentDiv) return true;

  // if doesnt exist, remove current content on screen for new content coming in
  checkForAndRemoveMainContentChild();
  return false;
}

export default checkIfNavItemIsActivelyDisplayed;
