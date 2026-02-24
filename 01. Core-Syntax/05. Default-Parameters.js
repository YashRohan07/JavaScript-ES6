/*

DEFAULT PARAMETERS
Before ES6:
• If someone forgot to pass an argument → undefined → crash or weird behavior
• We had to write extra if-checks or || tricks
• Code became longer and easy to forget checks

ES6 gave us:
• Default values right inside the ( )
• Function becomes safer and cleaner
• No more manual checks needed

Rule of thumb:
→ Always give default values for optional parameters
→ Put required parameters FIRST, optional (with defaults) LAST

*/

// ------------------------------------------------------------------------------
// OLD WAY (messy)
function introduce(name, age) {
  if (name === undefined) name = "Guest";
  if (age === undefined) age = 18;

  console.log(`Hi, I'm ${name} and I'm ${age} years old.`);
}

introduce(); // Hi, I'm Guest and I'm 18 years old.
introduce("Yash"); // Hi, I'm Yash and I'm 18 years old.
introduce("Yash", 21); // Hi, I'm Yash and I'm 21 years old.

// ------------------------------------------------------------------------------
// MODERN WAY → DEFAULT PARAMETERS
function introduceModern(name = "Guest", age = 18) {
  console.log(`Hi, I'm ${name} and I'm ${age} years old.`);
}

introduceModern(); // Hi, I'm Guest and I'm 18 years old.
introduceModern("Yash"); // Hi, I'm Yash and I'm 18 years old.
introduceModern("Yash", 21); // Hi, I'm Yash and I'm 21 years old.

// ------------------------------------------------------------------------------
// ❌ Wrong thinking: Default value runs every time
// IMPORTANT: Default parameters only work when value is UNDEFINED
function test(a = "default") {
  console.log(a);
}

test(); // default
test(undefined); // default
test(null); // null          ← default NOT used. null is treated as an actual value
test(""); // "" (empty)    ← default NOT used
test(0); // 0             ← default NOT used

// This is different from the old || method.
// The || operator treats 0, "", and false as "no value" (false values).
// So it would replace them with the default — even when they are valid values.
// Default parameters are safer because they only replace UNDEFINED.

// ------------------------------------------------------------------------------
// Default parameters are evaluated at call time, not definition time.
let count = 0;

function testCallTime(value = count++) {
  console.log(value);
}

test(); // 0
test(); // 1
test(); // 2

// Because default expressions run every time the function is called.

// ------------------------------------------------------------------------------
// MULTIPLE DEFAULT PARAMETERS

function calculateTotal(price, tax = 5) {
  const total = price + (price * tax) / 100;
  console.log(total);
}

calculateTotal(100); // 105 (default tax 5%)
calculateTotal(100, 10); // 110 (custom tax)

// If you do not pass the second value,JavaScript automatically uses the default.

// ------------------------------------------------------------------------------
// DEFAULT PARAMETERS WITH ARROW FUNCTION

const multiply = (a, b = 1) => {
  return a * b;
};

console.log(multiply(5)); // 5
console.log(multiply(5, 3)); // 15

// If b is not provided, it automatically becomes 1.

// Another example
const greet = (name = "friend", time = "day") => {
  return `Good ${time}, ${name}!`;
};

console.log(greet()); // Good day, friend!
console.log(greet("Yash")); // Good day, Yash!
console.log(greet("Yash", "morning")); // Good morning, Yash!

// ------------------------------------------------------------------------------
// DEFAULT VALUE USING ANOTHER PARAMETER

function welcome(name, greeting = `Hello ${name}`) {
  console.log(greeting);
}

welcome("Yash", "Good Morning");
// Output: Good Morning

welcome("Yash");
// Output: Hello Yash

/*
Default values can depend on earlier parameters. 
Here: name = "Yash" and greeting is undefined
JS evaluates default → `Hello ${name}`
Since name already exists → "Hello Yash"
*/

// ------------------------------------------------------------------------------
// REAL LIFE EXAMPLES
function makeCoffee(type = "Black", sugar = 1) {
  console.log(
    `Making ${type} coffee with ${sugar} spoon${sugar === 1 ? "" : "s"} of sugar`,
  );
}

makeCoffee(); // Making Black coffee with 1 spoon of sugar
makeCoffee("Latte"); // Making Latte coffee with 1 spoon of sugar
makeCoffee("Cappuccino", 2); // Making Cappuccino coffee with 2 spoons of sugar

// Another example
function createUser(name = "Guest", role = "User") {
  return {
    name,
    role,
  };
}

console.log(createUser());
// { name: "Guest", role: "User" }

console.log(createUser("Yash", "Admin"));
// { name: "Yash", role: "Admin" }

// ------------------------------------------------------------------------------
// REACT-STYLE EXAMPLE

// In React components, default parameters help prevent crashes.
const Button = ({ text = "Click Me" }) => {
  console.log(text);
};

Button({}); // Click Me
Button({ text: "Submit" }); // Submit

// ------------------------------------------------------------------------------
// FINAL SUMMARY

/*
Default Parameters:
- Provide fallback values
- Work only when argument is undefined
- Make functions cleaner
- Reduce if-checks
- Improve readability

Why defaults are important in React:
• Props are often missing → defaults prevent crashes
• Components become reusable & safe
• Reduces condition checks
• Less if/else mess inside component

function bad(a = 10, b) {}   ← confusing, avoid this
function good(a, b = 10) {}  ← clear & safe

Always prefer ES6 default parameters over manual checks.
*/
