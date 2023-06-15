import loadContent from './displayController';
import bgImage from './images/b.jpeg';

function createForm(dialog) {
  const form = document.createElement('form');
  const leftFieldset = document.createElement('fieldset');
  leftFieldset.classList.add('form-left');
  form.appendChild(leftFieldset);
  const email = document.createElement('input');
  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email:';
  email.setAttribute('id', 'email');
  email.setAttribute('for', 'email');
  leftFieldset.appendChild(emailLabel);
  leftFieldset.appendChild(email);

  const name = document.createElement('input');
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name:';
  name.setAttribute('id', 'name');
  name.setAttribute('for', 'name');
  leftFieldset.appendChild(nameLabel);
  leftFieldset.appendChild(name);

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
  cancelBtn.classList.add('cancel-btn');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.setAttribute('formmethod', 'dialog');

  const confirmBtn = document.createElement('button');
  confirmBtn.classList.add('confirm-btn');
  confirmBtn.textContent = 'Confirm';
  confirmBtn.setAttribute('value', 'default');
  buttonDiv.appendChild(confirmBtn);
  buttonDiv.appendChild(cancelBtn);
  dialog.appendChild(form);
}

function createFormDisplayButton(dialog, contactDiv) {
  const btn = document.createElement('button');
  btn.classList.add('dialog-btn');
  btn.textContent = "Let's Talk";
  contactDiv.appendChild(btn);

  btn.addEventListener('click', () => {
    dialog.showModal();
    contactDiv.removeChild(btn);
  });
  dialog.addEventListener('close', () => {
    contactDiv.appendChild(btn);
  });

  createForm(dialog);
}

function createContactDiv() {
  document.body.style.backgroundImage = `url(${bgImage})`;
  const content = document.querySelector('.content');
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-nav-content');
  content.appendChild(contactDiv);
  const dialog = document.createElement('dialog');
  dialog.classList.add('contact-form');
  contactDiv.appendChild(dialog);
  createFormDisplayButton(dialog, contactDiv);
}

export default function MakeContactPage() {
  const check = loadContent('contact-nav-content');

  // if false, doesnt exist so make contact-content section
  if (check === false) {
    createContactDiv();
  }
}
