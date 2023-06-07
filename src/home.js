function createTextContent(homeDiv) {
  const homeText = document.createElement('p');
  homeText.textContent = 'homeText';
  homeDiv.appendChild(homeText);
}

function createHome(body) {
  const homeDiv = document.createElement('div');
  homeDiv.setAttribute('class', 'home-div');
  body.appendChild(homeDiv);
  createTextContent(homeDiv);
}

export default createHome;
