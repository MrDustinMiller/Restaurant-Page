import loadContent from './displayController';
import bgImage from './images/contact-bg.png';

function createContactText(content) {
  const contactText = document.createElement('p');
  contactText.classList.add('contactText');
  // contactText.textContent = 'Get in touch!';
  content.appendChild(contactText);
}

export default function MakeContactForm() {
  const check = loadContent('contact-nav-content');
  if (check === false) {
    document.body.style.backgroundImage = `url(${bgImage})`;
    // document.body.style.backgroundColor = '#fbc887';
    const content = document.querySelector('.content');
    // createContactText(content);

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-nav-content');
    content.appendChild(contactDiv);
    const dialog = document.createElement('dialog');
    dialog.classList.add('contact-form');

    const btn = document.createElement('button');
    btn.classList.add('dialog-btn');
    btn.textContent = "Let's Talk";
    btn.addEventListener('click', () => {
      dialog.showModal();
      contactDiv.removeChild(btn);
    });
    dialog.addEventListener('close', () => {
      contactDiv.appendChild(btn);
    });
    const form = document.createElement('form');
    const email = document.createElement('input');
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    email.setAttribute('id', 'email');
    email.setAttribute('for', 'email');
    form.appendChild(emailLabel);
    form.appendChild(email);

    const name = document.createElement('input');
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    name.setAttribute('id', 'name');
    name.setAttribute('for', 'name');
    form.appendChild(nameLabel);
    form.appendChild(name);

    const message = document.createElement('textarea');
    message.classList.add('contact-message');
    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message:';
    message.setAttribute('id', 'message');
    message.setAttribute('for', 'message');
    form.appendChild(messageLabel);
    form.appendChild(message);

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttonDiv');
    form.appendChild(buttonDiv);
    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.setAttribute('formmethod', 'dialog');

    const confirmBtn = document.createElement('button');
    confirmBtn.textContent = 'Confirm';
    confirmBtn.setAttribute('value', 'default');
    buttonDiv.appendChild(confirmBtn);
    buttonDiv.appendChild(cancelBtn);
    contactDiv.appendChild(btn);
    dialog.appendChild(form);
    contactDiv.appendChild(dialog);
  }
}
