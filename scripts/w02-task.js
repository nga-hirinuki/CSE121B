/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Nga Hirinuki";
const currentYear = new Date().getFullYear();

const profilePicture = "images/nga.png";




/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById("food");
const yearElement = document.querySelector('year');
const imgElement = document.querySelector('img');
imgElement.id = 'profile';
const imageElement = document.getElementById('profile');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong> ${fullName} </strong>`;

imageElement.setAttribute("src" , profilePicture);
yearElement.textContent = `${currentYear}`;

/* Step 5 - Array */

let foodArray = ["Pork Roast","Chop-suey","Potato Salad","Taro","Kumara"];
foodElement.textContent = foodArray