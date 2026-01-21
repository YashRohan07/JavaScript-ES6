/*

TEMPLATE LITERALS (``)

Before ES6:
- Strings were created using single (' ') or double (" ") quotes
- Combining text and variables was messy

ES6 introduced:
- Template literals using backticks (` `)
- Easier string building
- Cleaner and more readable code

Rule of thumb:
- Use template literals whenever variables are involved
*/



// OLD WAY (STRING CONCATENATION)

const name = "Yash";
const age = 21;

const messageOld = "My name is " + name + " and I am " + age + " years old.";

console.log(messageOld);
// Output: My name is Yash and I am 21 years old.



// TEMPLATE LITERAL (MODERN WAY)

// Use backticks ` `
// Use ${ } to insert variables
const messageNew = `My name is ${name} and I am ${age} years old.`;

console.log(messageNew);
// Output: My name is Yash and I am 21 years old.



// EXPRESSIONS INSIDE TEMPLATE LITERALS

const a = 5;
const b = 3;

const result = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(result);
// Output: The sum of 5 and 3 is 8.



// MULTI-LINE STRINGS (VERY USEFUL)

// Old way was hard to read
const oldText =
  "Hello\n" +
  "Welcome to ES6\n" +
  "This is hard to manage";

console.log(oldText);

// Template literal makes it easy
const newText = `
Hello
Welcome to ES6
This is easy to read
`;

console.log(newText);



/*
REAL LIFE EXAMPLE

Creating a user message
*/

const userName = "Yash";
const notifications = 3;

const userMessage = `Hello ${userName}, you have ${notifications} new messages.`;

console.log(userMessage);
// Output: Hello Yash, you have 3 new messages.



// TEMPLATE LITERALS WITH FUNCTIONS

const getGreeting = user => {
  return `Welcome back, ${user}!`;
};

console.log(getGreeting("Yash"));
// Output: Welcome back, Yash



// REACT-STYLE EXAMPLE

// Imagine this inside JSX
const isLoggedIn = true;

const statusMessage = isLoggedIn
  ? `User is logged in`
  : `User is logged out`;

console.log(statusMessage);
// Output: User is logged in



/*
WHY TEMPLATE LITERALS ARE IMPORTANT IN REACT

- Clean JSX code
- Easy dynamic text
- Better readability
- Fewer bugs
*/



/*
COMMON MISTAKE

❌ Using quotes instead of backticks
"Hello ${name}"  // will NOT work

✅ Correct
`Hello ${name}`
*/
