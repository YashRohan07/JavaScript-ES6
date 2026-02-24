/*
TEMPLATE LITERALS (``)

Before ES6:
- We used single (' ') or double (" ") quotes for strings
- Combining variables with text was messy
- Multi-line strings were difficult

ES6 introduced:
- Template literals using backticks ` `
- Easy variable insertion
- Multi-line strings support
- Cleaner and more readable code

Rule of thumb:
- Use template literals whenever variables or expressions are involved
*/

// ------------------------------------------------------------------------------
// OLD WAY (STRING CONCATENATION)

const name = "Yash";
const age = 21;

// Using + to join strings and variables
const messageOld = "My name is " + name + " and I am " + age + " years old.";

console.log(messageOld);
// Output: My name is Yash and I am 21 years old.

// ------------------------------------------------------------------------------
// TEMPLATE LITERALS (MODERN WAY)

// Use backticks ` `
// Use ${ } to insert variables

const messageNew = `My name is ${name} and I am ${age} years old.`;

console.log(messageNew);
// Output: My name is Yash and I am 21 years old.

// ------------------------------------------------------------------------------
// EXPRESSIONS INSIDE TEMPLATE LITERALS

const a = 5;
const b = 3;

// You can run JavaScript inside ${ }

const result = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(result);
// Output: The sum of 5 and 3 is 8.

/*
Inside ${ } you can write:
- Variables
- Math operations
- Function calls
- Any JavaScript expression
*/

// ------------------------------------------------------------------------------
// MULTI-LINE STRINGS

// OLD WAY (ugly and hard to manage)
const oldText = "Hello\n" + "Welcome to ES6\n" + "This is hard to read";

console.log(oldText);

// MODERN WAY (clean and natural)
const newText = `
Hello
Welcome to ES6
This is easy to read
`;

console.log(newText);

// Template literals automatically support multiple lines. No need for \n

// ------------------------------------------------------------------------------
// REAL-LIFE EXAMPLE

const userName = "Yash";
const notifications = 3;

const userMessage = `Hello ${userName}, you have ${notifications} new messages.`;

console.log(userMessage);
// Output: Hello Yash, you have 3 new messages.

/*
This is very common in:
- Dashboards
- Notifications
- Emails
- API responses
*/

// Another common one
// CONDITIONAL (TERNARY) WITH TEMPLATE LITERALS

const isLoggedIn = true;
const statusMessage = isLoggedIn ? `User is logged in` : `User is logged out`;

console.log(statusMessage);
// Output: User is logged in

// ------------------------------------------------------------------------------
// TEMPLATE LITERALS WITH FUNCTIONS

const getGreeting = (user) => {
  return `Welcome back, ${user}!`;
};

console.log(getGreeting("Yash"));
// Output: Welcome back, Yash!

/*
You can use template literals inside:
- Arrow functions
- Normal functions
- React components
*/

// ------------------------------------------------------------------------------
// COMMON MISTAKES

const wrong1 = "Hello ${firstName}"; // ← WRONG (normal quotes)
console.log(wrong1); // Prints: Hello ${firstName}

// Correct
const correct1 = `Hello ${firstName}`;
console.log(correct1); // Hello Yash

const wrong2 = `Hello {firstName}`; // ← forgot the $
console.log(wrong2); // Hello {firstName}

// ------------------------------------------------------------------------------
// WHY TEMPLATE LITERALS ARE IMPORTANT IN REACT?

/*
React heavily uses template literals for:
- Dynamic text
- Building class names
- API URLs
- JSX expressions

They:
- Make code cleaner
- Reduce bugs
- Improve readability
*/

// ------------------------------------------------------------------------------
// FINAL SUMMARY

/*
Template Literals:
- Use backticks ` `
- Insert variables using ${ }
- Support multi-line strings
- Support expressions inside ${ }

QUICK CHEAT SHEET:
- Normal string          → "Hello"
- Template literal       → `Hello`
- With variable          → `Hello ${name}`
- Multi-line             → `Line 1
                            Line 2`
- With expression        → `Sum: ${2 + 3}`
- With ternary           → `Status: ${active ? "Yes" : "No"}`

Always prefer template literals over string concatenation.
*/
