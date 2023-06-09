import loadContent from './displayController';
import bgImage from './images/home-bg.png';

function createAboutUsImage(aboutUsContent) {
  const video = document.createElement('video');
  const source = document.createElement('source');
  video.appendChild(source);
  aboutUsContent.appendChild(video);
  source.src = 'public/video.mp4';
  video.autoplay = true;
  video.loop = true;
}

function createAboutUsDescription(aboutUsContent) {
  const aboutUsText = document.createElement('p');
  aboutUsText.textContent =
    'With a legacy spanning two decades, our BBQ sanctuary on the Gulf Coast offers a timeless blend of smoky flavors, soulful blues, and warm hospitality. Join us on this remarkable journey where our passion for great food and music has stood the test of time.';
  aboutUsText.classList.add('about-us-description');
  aboutUsContent.appendChild(aboutUsText);
  createAboutUsImage(aboutUsContent);
}

function createAboutUs(content) {
  const aboutUsDiv = document.createElement('div');
  aboutUsDiv.classList.add('about-us');
  const aboutUsContent = document.createElement('div');
  aboutUsContent.classList.add('about-us-content');
  aboutUsDiv.appendChild(aboutUsContent);
  content.appendChild(aboutUsDiv);
  createAboutUsDescription(aboutUsContent);
}

function createHomeText() {
  const homeText = document.createElement('p');
  homeText.textContent = '';
}

function createHome() {
  const content = document.querySelector('.content');
  const check = loadContent('home-nav-content');

  // if false doesnt exist so make home-content section
  if (check === false) {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-nav-content');
    content.appendChild(homeDiv);
    document.body.style.backgroundImage = `url(${bgImage})`;
    // createAboutUs(content);
  }
}

export default createHome;
