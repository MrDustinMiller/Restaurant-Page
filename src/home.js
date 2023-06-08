import loadContent from './displayController';

function createAboutUsDescription(aboutUsDiv) {
  const aboutUsText = document.createElement('p');
  aboutUsText.textContent =
    'With a legacy spanning two decades, our BBQ sanctuary on the Mississippi Gulf Coast offers a timeless blend of smoky flavors, soulful blues, and warm hospitality. Join us on this remarkable journey where our passion for great food and music has stood the test of time.';
  aboutUsText.classList.add('about-us-description');
  aboutUsDiv.appendChild(aboutUsText);
}

function createAboutUs(content) {
  const aboutUsDiv = document.createElement('div');
  aboutUsDiv.classList.add('about-us');
  content.appendChild(aboutUsDiv);
  createAboutUsDescription(aboutUsDiv);
}

function createHome() {
  const content = document.querySelector('.content');
  const check = loadContent('home-nav-content');

  // if false doesnt exist so make home-content section
  if (check === false) {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-nav-content');
    content.appendChild(homeDiv);
    createAboutUs(content);
  }
}

export default createHome;
