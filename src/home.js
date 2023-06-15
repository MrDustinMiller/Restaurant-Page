import loadContent from './displayController';
import bgImage from './images/b.jpeg';

function createHome() {
  const content = document.querySelector('.content');
  const check = loadContent('home-nav-content');

  // if false doesnt exist so make home-content section
  if (check === false) {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-nav-content');
    content.appendChild(homeDiv);
    document.body.style.backgroundImage = `url(${bgImage})`;
  }
}

export default createHome;
