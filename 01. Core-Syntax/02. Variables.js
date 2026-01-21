/*

VARIABLES IN ES6 (var, let, const)

Before ES6:
- JavaScript only had `var`
- `var` ignores block scope
- This creates bugs in big apps like React

ES6 introduced:
- let   → value CAN change
- const → value CANNOT be reassigned

Rule of thumb:
- Use `const` by default
- Use `let` only when value must change
- Avoid `var`
*/



// FUNCTION SCOPE vs BLOCK SCOPE

// Function scope:
// - Variable exists inside the whole function
// - `var` follows function scope

// Block scope:
// - Variable exists only inside { }
// - `let` and `const` follow block scope



// VAR (OLD WAY - NOT RECOMMENDED)
// var is FUNCTION scoped, NOT block scoped

if (true) {
  var city = "Dhaka";
}

// Even though city was created inside the block,
// it is still accessible here
console.log(city);
// Output: Dhaka
// Reason: var ignores block scope

                                  

// LET (MODERN WAY)
// let is BLOCK scoped and value can change

let age = 20;
age = 21;
console.log(age);  // Output: 21

if (true) {
  let insideBlock = "I am inside block";
  console.log(insideBlock);
}

// ❌ ERROR if uncommented
// console.log(insideBlock);
// Reason: let exists only inside { }



// CONST (BEST PRACTICE)
// const is also BLOCK scoped and value can't be reassigned

const name = "Yash";

// ❌ NOT allowed
// name = "Rahul";

console.log(name);
// Output: Yash



// CONST WITH ARRAY
// const protects the variable name, not the data

const skills = ["HTML", "CSS"];

// Allowed: changing array content
skills.push("JavaScript");

console.log(skills);
// Output: ["HTML", "CSS", "JavaScript"]

// ❌ NOT allowed
// skills = [];
// Reason: const does not allow reassignment, so `skills` cannot point to a new array


// CONST WITH OBJECT

const user = {
  name: "Yash",
  age: 21,
};

// Allowed: changing object properties
user.age = 22;

console.log(user);
// Output: { name: "Yash", age: 22 }

// ❌ NOT allowed
// user = {};
// Reason: const locks the variable name, not the object itself. So `user` cannot point to a new object


// REACT-STYLE EXAMPLE

// React prefers block-scoped variables
// This keeps components safe and predictable
const isLoggedIn = true;

if (isLoggedIn) {
  const message = "Welcome back!";
  console.log(message);
}

// ❌ ERROR if uncommented
// console.log(message);


/*
Why React prefers const?
- Prevents accidental reassignment
- Uses block scope for safety
- Makes code predictable
- Reduces bugs
*/
