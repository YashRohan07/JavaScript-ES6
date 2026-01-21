/*

DEFAULT PARAMETERS (ES6)

Before ES6:
- Functions had NO default values
- We used if-checks or logical OR (||)
- Code became messy and buggy

ES6 introduced:
- Default parameters
- Clean, readable, safer functions

Rule of thumb:
- Use default parameters instead of if-checks
- Makes functions predictable
*/



// BEFORE ES6 (OLD WAY)

function greet(name) {
  if (name === undefined) {
    name = "Guest";
  }

  console.log("Hello " + name);
}

greet();        // Hello Guest
greet("Yash");  // Hello Yash



// PROBLEM WITH OLD WAY
// - Extra code
// - Easy to forget checks
// - Less readable



// ES6 DEFAULT PARAMETERS (MODERN WAY)

function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet();        // Hello Guest
greet("Yash");  // Hello Yash



// MULTIPLE DEFAULT PARAMETERS

function calculateTotal(price, tax = 5) {
  const total = price + (price * tax) / 100;
  console.log(total);
}

calculateTotal(100);      // 105
calculateTotal(100, 10);  // 110



// WHY DEFAULT PARAMETERS ARE BETTER
// - No extra if checks
// - Cleaner function body
// - Clear intention



// DEFAULT PARAMETERS WITH ARROW FUNCTION

const multiply = (a, b = 1) => {
  return a * b;
};

console.log(multiply(5));     // 5
console.log(multiply(5, 3));  // 15



// COMMON MISTAKE

// ❌ Wrong thinking:
// Default value runs every time

function showMessage(message = "Hello") {
  console.log(message);
}

showMessage(undefined); // Hello (default used)
showMessage(null);      // null (default NOT used)

// Default parameters only work when value is UNDEFINED



// REACT-STYLE EXAMPLE

// Props with default value
const Button = (text = "Click me") => {
  console.log(text);
};

Button();          // Click me
Button("Submit");  // Submit


/*
Why default parameters matter in real apps?
- Prevents crashes
- Reduces condition checks
- Makes components safer
- Cleaner React code
*/
