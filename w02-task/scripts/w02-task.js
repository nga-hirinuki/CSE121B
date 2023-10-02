/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Nga Hirinuki";
let currentYear = new Date().getFullYear();
const profilePicture = 'images/nga.png';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name')

const foodElement = document.getElementById('food')

const yearElement = document.querySelector('year')

const imageElement = document.getElementById('image')

/* Step 4 - Adding Content */

let fullName ='Nga Hirinuki'
const nameElement = document.getElementById('name')
nameElement.innerHTML = `<strong> ${fullName} </strong>`;

const profilePicture = `images/nga.png`
const imageElement = document.getElementById('img')
imageElement.setAttribute('src' , profilePicture);


let currentYear = new Date();
const yearElement = document.querySelector('year')
yearElement.textContent = `${currentYear}`;


const foodElement = document.getElementById('food')


/* Step 5 - Array */

const foodElement = document.getElementById('food')
const foodElement = [ 'Chop-Suey' , 'Potato Salad' , 'Roasted Chicken' , ' Steak']

foodElement.push('Hot Pots')

foodElement.innerHTML += `<br> ${favFoods}`;




