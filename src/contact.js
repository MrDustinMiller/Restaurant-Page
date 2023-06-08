import loadContent from './displayController';

export default function test() {
  loadContent('contact-nav-content');
  const content = document.querySelector('.content');
  const dialog = document.createElement('div');
  dialog.classList.add('contact-form');
  content.appendChild(dialog);
}
