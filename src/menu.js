import loadContent from './displayController';
import steakImage from './images/menu/steak.png';
import puddingImage from './images/menu/bread-pudding.png';
import cheeseburgerImage from './images/menu/cheeseburger.png';
import shrimpImage from './images/menu/pizza.png';
import pizzaImage from './images/menu/shrimp-grits.png';
import cheesecakeImage from './images/menu/cheesecake.png';
import bgImage from './images/b.jpeg';

export default function loadMenu() {
  const menuItems = [
    {
      image: steakImage,
      title: 'Steak',
      description: 'Juicy, tender, grilled delight for meat lovers.',
    },
    {
      image: puddingImage,
      title: 'Bread Pudding',
      description:
        'Sweet, creamy, and comforting dessert with caramelized edges',
    },
    {
      image: cheeseburgerImage,
      title: 'Cheeseburger',
      description: 'Classic combo of juicy beef and melted cheese.',
    },
    {
      image: pizzaImage,
      title: 'Shrimp and Grits',
      description: 'Savory blend of succulent shrimp and creamy grits.',
    },
    {
      image: shrimpImage,
      title: 'Pizza',
      description:
        'Deliciously cheesy, saucy, and endlessly customizable delight.',
    },
    {
      image: cheesecakeImage,
      title: 'Cheesecake',
      description: 'Rich, creamy, and indulgent dessert with smooth texture.',
    },
  ];

  const check = loadContent('menu-nav-content');
  document.body.style.backgroundImage = `url(${bgImage})`;

  // if false doesnt exist so make menu-content section
  if (check === false) {
    const content = document.querySelector('.content');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-nav-content');
    content.appendChild(menuDiv);

    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.style.backgroundColor = 'rgba(19, 20, 20, 0.7)';
    menuDiv.appendChild(menu);

    for (let i = 0; i < menuItems.length; i += 1) {
      const imgdiv = document.createElement('div');
      imgdiv.classList.add('menu-images');
      imgdiv.style.backgroundImage = `url(${menuItems[i].image})`;
      const foodDetails = document.createElement('div');
      foodDetails.classList.add('food-details');

      const foodTitle = document.createElement('div');
      foodTitle.classList.add('food-title');
      foodTitle.textContent = `${menuItems[i].title}`;
      foodTitle.style.color = 'white';
      const foodDescription = document.createElement('div');
      foodDescription.classList.add('food-description');
      foodDescription.textContent = `${menuItems[i].description}`;
      foodDescription.style.color = 'white';
      menu.appendChild(imgdiv);
      menu.appendChild(foodDetails);
      foodDetails.appendChild(foodTitle);
      foodDetails.appendChild(foodDescription);
    }
  }
}
