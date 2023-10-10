
/*     Activity 1 - Map #        */
/* Declare an array with value = ['one', 'two', 'three']
Convert our array of strings into an array of HTML strings.
Each string should be turned into a list item. For example: "<li>one</li>" */

const steps = ["one", "two", "three"];                          // declare 1st variable
const stepsHtml = steps.map(function (step) {                   // declare 2nd variable = 1st vari.map(function (3rd vari))
  return `<li>${step}</li>`;                                    // return 3rd vari in html list
});
document.getElementById("myList").innerHTML = stepsHtml.join(); // search document. get id(myLists).place list in here. go through the list and add them here
//-----------------------------------------------------------------------

/*     Activity 2 - Map #       
Declare an array with letter grades in it: ['A', 'B', 'A']
Write a function that will take one letter grade, 
and return the appropriate gpa points for that grade.
IE if we send in 'A' it should return 4.  
Use map and our conversion function to convert the array in step 1 to gpa points. */

const grades = ['A', 'B', 'A'];                             // declare 1st variable
function convertGradesToPoints(grade) {                     // function 2nd variable(3rd vari) {
    let points = 0;                                         // declare 4th vari set beginning stardard
     if (grade === "A") {                                   // if statement
        points = 4;                                         // 4th vari  = numbers
        } else if (grade === "B") {
            points = 3;
        } 
        return points;                                      // return points
}

const gpaPoints = grades.map(convertGradesToPoints);        // 5th variable = 1st vari.map(2nd vari): going thru list
console.log('gpaPoints:', gpaPoints);//[4, 3]               // check 5th vari

//-----------------------------------------------------------------------

/*Declare an array with the following value: ['watermelon', 'peach', 'apple', 'tomato', 'grape']
Using filter keep only the fruits that are longer than 6 characters.*/

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape']   // declare 1st variable

const shortWords = words.filter(function (word) {                   // declare 2nd vari = 1st varij .filter(function(3rd vari){
    return word.length <= 6;                                        // return 3rd vari.length; looking for words less than 6 and print them out
})

//-----------------------------------------------------------------------

/*  Activity 3 - Reduce #
reduce is useful when we need to compress an array into a single value. 
It is most often used when the array has at least one value that can be mathematically flattened

Using the function from the previous activity, convert an array of grades into an array of gpaPoints.
Using reduce calculate the GPA from the array of gpaPoints. */

const grades = ['A', 'B', 'A'];                                 // declare 1st variable
function convertGradesToPoints(grade) {                         // function 2nd variable(3rd vari) {
    let points = 0;                                             // declare 4th vari set beginning stardard
     if (grade === "A") {                                       // if statement
        points = 4;                                             // 4th vari  = numbers
        } else if (grade === "B") {
            points = 3;
        } 
        return points;                                          // return points
}
                               

const gpaPoints = grades.map(convertGradeToPoints);             // 5th vari = 1st vari.map(2nd vari)
const pointsTotal = gpaPoints.reduce(function (total, item) {   // 6th vari = 5th vari.reduce(function(item 1, item2)
  return total + item;                                          // return item1 + item2
});
const gpa = pointsTotal / gpaPoints.length;                     // 7th vari = 6th vari /5th length

/* example 2
this is the same thing as above, but with an arrow function*/

const pointsTotal = gpaPoints.reduce((total, item) => total + item);            // 5th vari = 6th vari.reduce(item1, item2) look at all item1 and item2 add together
const gpa = pointsTotal / gpaPoints.length;                                     // 7th vari = 5th vari / 6th vari. length

// this could be further simplified as
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length; // 5th vari = 6th vari.reduce(item1 , item2) look at all item1 add item2) divide 6th vari.length;


//-----------------------------------------------------------------------

/*  Activity 4 - Filter #
filter is similar to map in that it returns a new array of elements. The elements in the calling 
array will be included in the new array if they pass a test that you include in the callback you pass in.

Declare an array with the following value: ['watermelon', 'peach', 'apple', 'tomato', 'grape']
Using filter keep only the fruits that are longer than 6 characters. */

const words = ["watermelon", "peach", "apple", "tomato", "grape"];  //decl 1st vari
const shortWords = words.filter(function (word) {                   //2nd vari = 1st vari.filter(function(3rd vari){
  return word.length < 6;                                           //return 3rd vari.length less than 6 characters;
});

//same thing with an arrow function
const shortWords = words.filter((word) => word.length < 6);         // 2nd vari = 1st vari.filter((3rd vari) look at all list and find 3rd vari.length less than 6 characters)


//-----------------------------------------------------------------------

/*  Activity 5 - indexOf #
indexOf returns the first index at which a given element can be found in the array, or -1 if it is not present.

Declare an array with the following value: [12, 34, 21, 54]
Declare a luckNumber variable with the value 21;
Use indexOf to see if the luckyNumber is in the Array. */

// improved luckyNumber
const myArray = [12, 34, 21, 54];                   // 1st varibale
const luckyNumber = 21;                             // 2nd varibale
let luckyIndex = myArray.indexOf(luckyNumber);      // 3rd vari = 1st vari.indexof(2nd vari) 

// look thru the list and if 21 is found. What is the index of this number: 2


//-----------------------------------------------------------------------

/*  Check my understanding #
Using the array.filter() method, | create an array named namesB | 
with only those names from the name array | that start with the character 'B'.
 */
let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

const nameB = names.filter(name => name.charAt(0) === 'B' );        

//-----------------------------------------------------------------------

/*  Check my understanding #
Using the array.map() method, create a new array named namesLength | that contains the length of each name in the names array. | Expected output is [5, 8, 5, 8, 3].
 */
let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];    
        
  const namesLength = names.map((name) => name.length);     //2nd vari = 1st vari.map(3rd vari) 3rd vari.length
  
  // since they want the length no extra function needed


//-----------------------------------------------------------------------

/*  Check my understanding #
Using the names.reduce() method, create an expression that returns the average string length of the names in the names array. Expected output is 5.8.
 */
let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];    
        
const nameAverage = names.reduce((total, item) => total + item, 0) / names.length;     //2nd vari = 1st vari.reduce(3rd vari) 3rd vari.length
  
  // since they want the length no extra function needed