const apiKey = '6RzZVPYMYGe9YzaCvG8DbSeFaTtvnnIr3Li8NnU9J9GYDWxazNdwvmnN';
const apiEndpoint = 'https://api.pexels.com/v1/';

// assign btns to variables
const allBtn = document.querySelector('.all-btn');
const breakfastBtn = document.querySelector('.breakfast-btn');
const lunchBtn = document.querySelector('.lunch-btn');
const dessertBtn = document.querySelector('.dessert-btn');

const menuItems = [
    {
        id: 1,
        name: 'Buttermilk Pancakes',
        price: '$15.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: '',
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
        img: '',
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