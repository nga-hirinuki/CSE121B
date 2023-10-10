/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */                                                 // This area is for my understanding
function add (number1, number2) {                                                       // 1st func showing core parameters to solve equation       
    return number1 + number2;                                                           // return equation
}
  function addNumbers() {                                                               // 2nd func addNumbers looking within the html to find
    let add1 = Number(document.getElementById('add1').value);                           // the id's to input values. Number() changes from a string to number
    let add2 = Number(document.getElementById('add2').value);
    
    document.getElementById("sum").innerHTML = add(add1, add2);                         // Look in the document by id and run the equations using 
}                                                                                       // the values inputs by user
document.getElementById('addNumbers').addEventListener("click", addNumbers);            // use mouse click to execute the equation

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {                                           // setting up parameters to run equation
    return number1 - number2;
}
  const subtractNumbers = function() {  
    let subtract1 = Number(document.getElementById('subtract1').value);
    let subtract2 = Number(document.getElementById('subtract2').value);
    
    document.getElementById("difference").innerHTML = subtract(subtract1, subtract2);
}
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

  const multiplyNumbers = () => {  
    const factor1 = Number(document.getElementById('factor1').value);
    const factor2 = Number(document.getElementById('factor2').value);
    
    document.getElementById("product").innerHTML = multiply(factor1, factor2);
}
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);



/* Open Function Use - Divide Numbers */

function divide (number1, number2) {
    return number1 / number2;
}
  function divideNumbers() {  
    let divide1 = Number(document.getElementById('dividend').value);
    let divide2 = Number(document.getElementById('divisor').value);
    
    document.getElementById("quotient").innerHTML = add(divide1, divide2);
}
document.getElementById('divideNumbers').addEventListener("click", divideNumbers);

/* Decision Structure */
let today = new Date();
let currentYear = "";
currentYear = today.getFullYear();
document.getElementById('year').textContent = new Date().getFullYear();

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").innerHTML = numbersArray;
/* Output Odds Only Array */
document.getElementById("odds").innerHTML = numbersArray.filter((number) => number % 2  === 1);

/* Output Evens Only Array */
document.getElementById("evens").innerHTML = numbersArray.filter((number) => number % 2  === 0);

/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);