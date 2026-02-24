/*

VARIABLES IN ES6 (var, let, const)

Before ES6:
- JavaScript only had `var`
- `var` ignores block scope
- This can create bugs in bigger apps (like React projects).

ES6 introduced:
- let   → value CAN change
- const → value CANNOT be reassigned

Rule of thumb:
- Use `const` by default
- Use let only when you must reassign
- Avoid `var`
*/

// FUNCTION SCOPE vs BLOCK SCOPE

// Function scope:
// - Variable exists inside the whole function
// - `var` follows function scope

// Block scope:
// - Variables inside { } should not be accessible outside.
// - `let` and `const` follow block scope

// ------------------------------------------------------------------------------
// VAR (OLD WAY - NOT RECOMMENDED)
// var is FUNCTION scoped, NOT block scoped

if (true) {
  var city = "Dhaka";
}

// Even though city was created inside the block, it is still accessible here

console.log(city);
// Output: Dhaka (var leaks outside the block)
// Reason: var ignores block scope

// Another problem with var: Redeclaration is allowed
var score = 10;
var score = 20; // No error (dangerous)

console.log(score);
// Output: 20

/*
This can silently overwrite variables.
let and const DO NOT allow redeclaration in same scope.
*/

// ------------------------------------------------------------------------------
// LET (MODERN WAY)
// let is BLOCK scoped and value can be reassigned
// But it does NOT allow access outside the block.

let age = 20;
age = 21;
console.log(age); // Output: 21

// let allows reassignment
// But it does NOT allow redeclaration in the same scope

// let age = 30; ❌ SyntaxError

if (true) {
  let insideBlock = "I am inside block";
  console.log(insideBlock);
}

// ❌ ERROR if uncommented
// console.log(insideBlock); // ReferenceError (block-scoped)
// Reason: let exists only inside { }

// ------------------------------------------------------------------------------
// CONST (BEST PRACTICE)
// const is also BLOCK scoped and value can't be reassigned

const userName = "Yash";

// userName = "Rahul"; ❌ NOT allowed

console.log(userName); // Output: Yash

// ------------------------------------------------------------------------------
// CONST WITH ARRAY

/*
const only locks the variable name, not the value stored inside it.
You can still change the content of an object or array, 
but you cannot make that variable point to a different object or array.

So:
- You cannot make the variable point to a new array.
- But you can change the items inside the array.

Think like this:
- const locks the label of the box
- But you can still change what is inside the box
*/

const skills = ["HTML", "CSS"];

// Allowed: changing array content
skills.push("JavaScript");

console.log(skills);
// Output: ["HTML", "CSS", "JavaScript"]

/*
skills = [];

❌ NOT allowed
Because now we are trying to make the variable point to a completely new array.
const does not allow reassignment, so `skills` cannot point to a new array
*/

// ------------------------------------------------------------------------------
// CONST WITH OBJECT

/*
Same rule for objects:
- You can change properties inside the object.
- You cannot make the variable point to a completely new object.
*/

const user = {
  userName: "Yash",
  age: 21,
};

// Allowed: changing object properties
user.age = 22;

console.log(user);
// Output: { userName: "Yash", age: 22 }

/*
user = {};
❌ NOT allowed
const stops reassignment, so `user` must always point to the same object.
Only the inside values can change.
*/

// ------------------------------------------------------------------------------
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
React prefers const because:

- Prevents accidental reassignment
- Makes code predictable
- Reduces bugs
- Encourages immutability mindset

Professional rule:
Use const everywhere.
Switch to let ONLY when absolutely necessary.
*/

/*

| Feature     | var | let | const |
| ----------- | --- | --- | ----- |
| Block Scope | ❌   | ✅   | ✅     |
| Reassign    | ✅   | ✅   | ❌     |
| Redeclare   | ✅   | ❌   | ❌     |

*/

// ----------------------------------------------
/* HOISTING

Hoisting means JavaScript remembers variable and function declarations before running your code line by line.

Think like this:
- JavaScript first remembers the names,
- then it starts running the code line by line.
*/

/*
var:
- JavaScript creates the variable at the top and sets it to undefined.
- So you can read it before the line, but you only get undefined.
*/

console.log(testVar); // Output: undefined
var testVar = 5;

/*
let and const:
- JavaScript also knows their names early,
- BUT they are not ready to use until their line.
- If you use them before the line, you get a ReferenceError.
*/

// console.log(testLet); // ❌ ReferenceError
let testLet = 10;

/*
Summary:
Hoisting only moves the declarations, not the value assignments. The line where you assign the value still runs in its original place.
- var: created early, starts as undefined → can be used before its line, but value is undefined.
- let / const: created early but not ready → can't be used before their line (Temporal Dead Zone).

*/
