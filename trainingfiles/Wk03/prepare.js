


let hour =14;
  if (hour >= 6 && hour < 12)
  console.log('Good Morning');
  else if (hour >= 12 && hour < 18) 
  console.log('Good Afternoon!');
  else 
  console.log('Good Evening!');

// declare function
// if (condition)
//      statement
// else if (another condition)
//      another statement
// else
//      final statement

//for (let i = 0 ; i<5 ; i++ ) each condition separated ;
// then add "statement" to display

let numSales =12020;
    if (numSales <= 50) 
    console.log("Way to few sales");
    else if (numSales <= 1000) 
    console.log("Average number of sales");
    else 
    console.log("A good number of sales.");

// loops 
// for (initialExpression) = 3 conditions
// for (let i = 0 ; i<5 ; i++ ) each condition separated ;
// then add "statement" to display

// to see on console in web
//  console.log('Hello World', i);

//for (let i = 0; i<5; i++ ) {
//  console.log('Hello World');
//}

//for (let i = 1; i <= 5; i++) {
 // if(i % 2 !== 0); console.log(i);
  
//}

// Switch Statements format below:

//        switch(expression) {
//           case x:
    //              code block
//                  break;
//           case y:
//                  code block
//                  break;
//           default:
    //              code block

let x = 3;
switch (x) {
    case 0:
    case 3:
      text = "Off";
      break;
    case 1:
      text = "On";
      break;
    default:
      text = "No value found";
}
console.log(text);

let grade = "D";
let gpaPoints = 0;
  
switch (grade) {
    case "A":
      gpaPoints = 4;
      break;
    case "B":
      gpaPoints = 3;
      break;
    case "C":
      gpaPoints = 2;
      break;
      case "D":
        gpaPoints = 1;
        break;
    default:
      gpaPoints = -1;
}
console.log(gpaPoints)

function calculateGPA(score) { 
  let gpa;
  switch (score) {
      case "A":
          gpa = 4;
          break;
      case "B":
          gpa = 3;
          break;
      case "C":
          gpa = 2;
          break;
      default:
          gpa = -1;
  }
  return gpa;
}

let score = "A";
console.log(calculateGPA(score)); // Outputs: 4
