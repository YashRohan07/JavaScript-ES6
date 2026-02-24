/*
ARROW FUNCTIONS (=>)

Before ES6:
- We used the `function` keyword
- Syntax was longer
- Handling `this` was confusing

ES6 introduced:
- Arrow functions (=>)
- Shorter syntax
- Cleaner code
- Different behavior for `this`

Rule of thumb:
- Use arrow functions by default
- Use arrow functions for small functions and callbacks
- Be careful with `this` (arrow functions do NOT create their own `this`).
*/

// ------------------------------------------------------------------------------
// NORMAL FUNCTION vs ARROW FUNCTION

// OLD WAY: normal function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
// Output: 5

// NEW WAY: arrow function (same logic, shorter)
const addArrow = (a, b) => {
  return a + b;
};

console.log(addArrow(2, 3));
// Output: 5

// ------------------------------------------------------------------------------
// SHORT VERSION (Implicit Return)

// If the function body has ONLY ONE expression and you do NOT use { },
// The expression is automatically returned, This is called "implicit return".

const addShort = (a, b) => a + b;

console.log(addShort(2, 3));
// Output: 5

// IMPORTANT BEGINNER MISTAKE:
// If you use { }, you MUST write return manually.

const wrongExample = (a, b) => {
  a + b;
};

console.log(wrongExample(2, 3));
// Output: undefined

/*
Why?
Because { } creates a function body.
Since there is no "return" statement,
nothing is returned.
*/

// ------------------------------------------------------------------------------
// RETURNING OBJECT

// Common mistake: trying to return an object without parentheses

const createUserWrong = (name) => {
  userName: name;
};

console.log(createUserWrong("Yash"));
// Output: undefined

/*
Why is it undefined?

Because { } is treated as a function body, not an object.
Inside the function body, there is no return statement.
So nothing is returned.
*/

// Correct way: Wrap the object in parentheses.

const createUser = (name) => ({ userName: name });

console.log(createUser("Yash"));
// Output: { userName: "Yash" }

/*
Rule:
If you want to return an object directly using implicit return,
you MUST wrap the object inside ( ).
*/

// ------------------------------------------------------------------------------
// ARROW FUNCTION SYNTAX VARIATIONS

// ONE PARAMETER
// Parentheses are optional for a single parameter.
// But using parentheses is better for consistency.

const square = (x) => x * x;

console.log(square(4));
// Output: 16

// NO PARAMETER
// You MUST use empty parentheses.

const sayHello = () => {
  console.log("Hello!");
};

sayHello();
// Output in console:
// Hello!

// MULTIPLE LINES
// When you use { }, you MUST write return manually.

const multiplyAndLog = (a, b) => {
  const result = a * b;
  console.log("Result is", result);
  return result;
};

multiplyAndLog(3, 4);
// Output in console:
// Result is 12

// ------------------------------------------------------------------------------
// ARROW FUNCTIONS WITH ARRAYS

/*
Common array methods used with arrow functions:

map()    → transforms each element and returns a new array
filter() → keeps elements that match a condition
reduce() → combines all values into a single value
forEach()→ runs a function for each element (no return array)
*/

const numbers = [1, 2, 3, 4];

// map() example
const doubled = numbers.map((num) => num * 2);

console.log(doubled);
// Output: [2, 4, 6, 8]

// filter() example
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);
// Output: [2, 4]

// reduce() example
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);
// Output: 10

// ------------------------------------------------------------------------------
// ARROW FUNCTIONS AND `arguments`

/*
Normal functions have a special `arguments` object (array-like).

Arrow functions do NOT have their own `arguments`.

If you try to use `arguments` inside an arrow function,
it will refer to the outer function's arguments (if any).

Instead, use rest parameters (...args),
which create a real array.
*/

// Normal function with arguments
function logAll() {
  console.log("arguments in normal function:", arguments);
}

logAll("a", "b", "c");
// Output: arguments object with values

// Arrow function with rest
const logAllArrow = (...args) => {
  console.log("args in arrow function:", args);
};

logAllArrow("a", "b", "c");
// Output: ["a", "b", "c"]

// ------------------------------------------------------------------------------
// ARROW FUNCTIONS AND `this`

/*
Normal function:
- `this` depends on HOW the function is called.

Arrow function:
- `this` is taken from the surrounding (outer) scope.
- It does NOT depend on how the function is called.
- It does NOT create its own `this`.

This behavior is called "lexical this".
*/

const user = {
  userName: "Yash",

  normalFunction: function () {
    console.log(this.userName);
  },

  arrowFunction: () => {
    console.log(this.userName);
  },
};

user.normalFunction();
// Output: Yash

user.arrowFunction();
// Output: undefined (or depends on outer scope)

/*
Why?

normalFunction → `this` refers to the object (user)
arrowFunction → `this` comes from the surrounding scope,
not from the user object

Important Rule:
- Do NOT use arrow functions for object methods that need `this`
- Do NOT use arrow functions in class methods (when you need `this`)
*/

// Example: object with methods
const person = {
  name: "Yash",

  // Good: method shorthand (recommended)
  greet() {
    console.log(`Hello, I am ${this.name}`);
  },

  // Bad: arrow function as method when you need `this`
  greetWrong: () => {
    console.log(`Hello, I am ${this.name}`);
  },
};

person.greet();
// Output: Hello, I am Yash

person.greetWrong();
// Output: Hello, I am undefined (because `this` is not the person object)

// ------------------------------------------------------------------------------
// Arrow functions and lexical `this`

const team = {
  name: "Dev Team",
  members: ["Yash", "Ayesha"],

  printMembers() {
    this.members.forEach((member) => {
      console.log(`${member} is in ${this.name}`);
    });
  },
};

team.printMembers();
// Output:
// Yash is in Dev Team
// Ayesha is in Dev Team

/*
Why does this work?

Arrow function inside forEach does NOT create its own `this`.
It uses the `this` from printMembers(),
which refers to the team object.

If we used a normal function inside forEach,
`this` would NOT refer to the team object.
*/

// ------------------------------------------------------------------------------
// REAL-LIFE STYLE EXAMPLES

const ages = [12, 18, 22, 15, 30];

// Get only adults
const adults = ages.filter((age) => age >= 18);

console.log(adults);
// Output: [18, 22, 30]

const pricesList = [100, 200, 300];

// Calculate total price
const total = pricesList.reduce((sum, price) => sum + price, 0);

console.log(total);
// Output: 600

// Example 2: simple API-like logic
const users = [
  { id: 1, name: "Yash", active: true },
  { id: 2, name: "Ayesha", active: false },
];

// Get only active users
const activeUsers = users.filter((user) => user.active);
console.log(activeUsers);
// Output: [{ id: 1, name: "Yash", active: true }]

// Get just the names
const userNames = users.map((user) => user.name);
console.log(userNames);
// Output: ["Yash", "Ayesha"]

// Example 3: sorting with arrow function
const prices = [400, 100, 250];

// IMPORTANT: sort() mutates the original array.
// Safer approach: copy first
const sortedPrices = [...prices].sort((a, b) => a - b);

console.log(sortedPrices);
// Output: [100, 250, 400]

console.log(prices);
// Original remains unchanged: [400, 100, 250]

// Example 4: Arrow functions and setTimeout
const student = {
  name: "Yash",

  delayedHello() {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`);
    }, 1000);
  },
};

student.delayedHello();

/*
Why does this work?

Because arrow function does NOT create its own `this`.
It uses the `this` from delayedHello().

This is called lexical `this`.
*/

// ------------------------------------------------------------------------------
// REACT-STYLE EXAMPLES (LOGIC ONLY, NO JSX)

/*
In React, arrow functions are common for:
- Event handlers
- Callbacks (map/filter when rendering lists)
- Small helper functions
*/

// Example: simple handler (as if inside a React component)
const handleClick = () => {
  console.log("Button clicked");
};

handleClick();
// Output: Button clicked

const handleLogin = () => {
  console.log("User logged in");
};

handleLogin();
// Output: User logged in

// Example: mapping data to "UI" (here just logs)
const todoItems = [
  { id: 1, title: "Learn ES6" },
  { id: 2, title: "Practice React" },
];

todoItems.forEach((item) => {
  console.log(`Todo #${item.id}: ${item.title}`);
});

// ------------------------------------------------------------------------------
// WHEN TO USE ARROW FUNCTIONS?

/*
Use arrow functions for:
- Event handlers (click, submit, etc. in React)
- Callbacks (map, filter, reduce, forEach)
- Small utility/helper functions
- When you want lexical `this` (for example inside setTimeout or array methods)

Avoid arrow functions:
- As object methods when you need `this` to be the object
- As constructor functions (you cannot use `new` with arrow functions)
*/

// ❌ Arrow functions cannot be constructors
const PersonArrow = (name) => {
  this.name = name;
};

// new Person("Yash"); ❌ TypeError

/*
Why?
Arrow functions:
- Do NOT have their own `this`
- Do NOT have a prototype
- Cannot be used with `new`
*/

// Normal constructor
function Person(name) {
  this.name = name;
}
const p = new Person("Yash");
console.log(p.name);
// Output: Yash

// ------------------------------------------------------------------------------
// FINAL SUMMARY

/*
Normal Function:
- Has its own `this`
- Has its own `arguments`
- Can be used as constructor
- Has prototype

Arrow Function:
- Does NOT create its own `this`
- Does NOT have its own `arguments`
- Cannot be used with `new`
- Does NOT have prototype
*/
