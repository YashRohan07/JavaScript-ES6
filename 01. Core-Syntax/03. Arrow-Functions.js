/*

ARROW FUNCTIONS (=>)

Before ES6:
- We used the `function` keyword
- Code was longer and harder to read

ES6 introduced:
- Arrow functions (=>)
- Shorter syntax
- Cleaner and more readable code

Rule of thumb:
- Use arrow functions by default
- Especially inside React components
*/



// NORMAL FUNCTION (OLD WAY)

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
// Output: 5



// ARROW FUNCTION (MODERN WAY)

// Same function written shorter
const addArrow = (a, b) => {
  return a + b;
};

console.log(addArrow(2, 3));
// Output: 5



// SHORTER ARROW FUNCTION

// If there is only ONE line,
// we can remove { } and `return`
const addShort = (a, b) => a + b;

console.log(addShort(2, 3));
// Output: 5



// ONE PARAMETER ARROW FUNCTION

// Parentheses are optional for ONE parameter
const square = x => x * x;

console.log(square(4));
// Output: 16



// NO PARAMETER ARROW FUNCTION

const sayHello = () => {
  console.log("Hello!");
};

sayHello();
// Output: Hello!



/*
REAL LIFE EXAMPLE

Imagine a button click action
*/

const clickHandler = () => {
  console.log("Button clicked");
};

clickHandler();
// Output: Button clicked



// ARROW FUNCTION WITH ARRAY

const numbers = [1, 2, 3, 4];

// Old way
const doubledOld = numbers.map(function (num) {
  return num * 2;
});

console.log(doubledOld);
// Output: [2, 4, 6, 8]

// Arrow function way
const doubled = numbers.map(num => num * 2);

console.log(doubled);
// Output: [2, 4, 6, 8]



/*
WHY ARROW FUNCTIONS ARE IMPORTANT IN REACT

- Cleaner JSX code
- Shorter event handlers
- Easier to read
*/


// REACT-STYLE EXAMPLE (LOGIC ONLY)

// Imagine this inside a React component
const handleLogin = () => {
  console.log("User logged in");
};

handleLogin();
// Output: User logged in



/*
IMPORTANT DIFFERENCES

- Normal function has its own `this`
- Arrow function does NOT create its own `this`

In React:
- Arrow functions avoid `this` problems
- Less bugs
*/


/*
WHEN TO USE ARROW FUNCTIONS?

- Event handlers
- Callbacks (map, filter, reduce)
- Small helper functions
- Almost everywhere in React
*/
