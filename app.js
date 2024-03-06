const apiKey = '6RzZVPYMYGe9YzaCvG8DbSeFaTtvnnIr3Li8NnU9J9GYDWxazNdwvmnN';
const apiEndpoint = 'https://api.pexels.com/v1/';

// assign btns to variables
const allBtn = document.querySelector('.all-btn');
const breakfastBtn = document.querySelector('.breakfast-btn');
const lunchBtn = document.querySelector('.lunch-btn');
const dessertBtn = document.querySelector('.dessert-btn');

//assign menu class to variable
const menuSection = document.querySelector('.menu');

//menu items
const menuItems = [
    {
        id: 1,
        name: 'Buttermilk Pancakes',
        price: '$15.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: './images/pancakes.jpg',
    },
    {
        id: 2,
        name: 'Eggs Benedict',
        price: '$18.99',
        description: 'Urna porttitor rhoncus dolor purus non enim praesent elementum. Nisi porta lorem mollis aliquam.',
        img: '',
    },
    {
        id: 3,
        name: 'Bacon, Egg, Cheese Biscuit',
        price: '$14.99',
        description: 'Urna porttitor rhoncus dolor purus non enim praesent elementum. Nisi porta lorem mollis aliquam.',
        img: '',
    },
    {
        id: 4,
        name: 'Egg Attack',
        price: '$22.99',
        description: 'Urna porttitor rhoncus dolor purus non enim praesent elementum. Nisi porta lorem mollis aliquam.',
        img: './images/burger-with-egg.jpg',
    },
    {
        id: 5,
        name: 'Turkey Club',
        price: '$22.99',
        description: 'Urna porttitor rhoncus dolor purus non enim praesent elementum. Nisi porta lorem mollis aliquam.',
        img: '',
    },
    {
        id: 6,
        name: 'Mediterranean Salad',
        price: '$17.99',
        description: 'Urna porttitor rhoncus dolor purus non enim praesent elementum. Nisi porta lorem mollis aliquam.',
        img: '',
    },
    {
        id: 7,
        name: 'Penne Rosa',
        price: '$24.99',
        description: 'Urna porttitor rhoncus dolor purus non enim praesent elementum. Nisi porta lorem mollis aliquam.',
        img: '',
    },
    {
        id: 8,
        name: 'Chocolate Cake',
        price: '$10.99',
        description: 'Urna porttitor rhoncus dolor purus non enim praesent elementum. Nisi porta lorem mollis aliquam.',
        img: '',
    },
    {
        id: 9,
        name: 'Strawberry Milkshake',
        price: '$8.99',
        description: 'Urna porttitor rhoncus dolor purus non enim praesent elementum. Nisi porta lorem mollis aliquam.',
        img: '',
    },
    {
        id: 10,
        name: 'Cinnamon Churro',
        price: '$9.99',
        description: 'Urna porttitor rhoncus dolor purus non enim praesent elementum. Nisi porta lorem mollis aliquam.',
        img: '',
    },
]

window.addEventListener('DOMContentLoaded', function () {
    let displayMenu = menuItems.map(function (item) {
        return `<div class="item-1 item-wrapper">
                    <div class="item-image-wrapper">
                        <img src=${item.img} alt="" class="item-image">
                    </div>
                    <div class="item-details">
                        <div class="item-name-price">
                            <h3 class="name">${item.name}</h3>
                            <p class="price">${item.price}</p>
                        </div>
                        <p class="item-description">${item.description}</p>
                    </div>
                </div>`
    })
    console.log(displayMenu);
    displayMenu = displayMenu.join('');
    console.log(displayMenu);
    menuSection.innerHTML = displayMenu;
})