function createTextContent(homeDiv) {
  const contactText = document.createElement('p');
  contactText.textContent = 'contactText';
  homeDiv.appendChild(contactText);
}

function createHome(body) {
  const contactDiv = document.createElement('div');
  contactDiv.setAttribute('class', 'home-div');
  body.appendChild(contactDiv);
  createTextContent(contactDiv);
}

export default createHome;
