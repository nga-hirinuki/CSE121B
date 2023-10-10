
//this is your function and you have specified this to display the value Toyota
function myFunc(theObject) {
    theObject.make = "Toyota";
  }
// this is your variable with 3 id's
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
// under your variable you are specifying the id you want to display with in this case .make
  console.log(mycar.make); // "Honda"
// myfunc has hijacked mycar so now when this function runs it will show toyota
  myFunc(mycar);
  console.log(mycar.make); // "Toyota"

// Same thing is hijacked the arr variable

  function myFunc(theArr) {
    theArr[0] = 42;
  }
  
  const arr = [45];
  
  console.log(arr[0]); // 45
  myFunc(arr);
  console.log(arr[0]); // 30


  // function expressions 

  const square = function (number) {
    return number * number;
  };
  
  console.log(square(10)); // 16


  const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
  console.log(factorial(3)); // 6

// The map function takes in a function f and an array a. 
//It applies the function f to each element of the array a 
//and returns a new array containing the results of these function applications.

  function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }

  const cube = function (x) {
    return x * x * x;
  };
  
  const numbers = [7, 4, 3, 5, 10];
  console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]




function fullName(first, last) {
    return `${first} ${last}`;   // or use string concatenation first + ' ' + last (not preferred)
  }
  const fullName = function (first, last) {
    return `${first} ${last}`;
  }

  const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

 