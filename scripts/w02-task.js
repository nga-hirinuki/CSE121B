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
nameElement.innerHTML = `<strong> ${fullName} <strong>`;
imageElement.src = profilePicture;

/* Step 5 - Array */

let favFoods = ["Pork Roast "," Chop-suey "," Potato Salad ","Taro "," Kumara"];
foodElement.textContent = favFoods;

foodElement.innerHTML += '<br>';
favFoods.push(', Banana');

for (let i = 0; i < favFoods.length; i++) {
foodElement.innerHTML += `${favFoods[i]}`;
}

foodElement.innerHTML += '<br>';
favFoods.shift();

for (let i = 0; i < favFoods.length; i++) {
foodElement.innerHTML += `${favFoods[i]}`;
}

foodElement.innerHTML += '<br>';
favFoods.pop();

for (let i = 0; i < favFoods.length; i++) {
foodElement.innerHTML += `${favFoods[i]}`;
}
