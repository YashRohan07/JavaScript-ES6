/*

DESTRUCTURING IN FUNCTION PARAMETERS (ES6)

What this feature is:
You can destructure objects or arrays directly inside a function’s parameter list.
This means the function receives the values already unpacked, instead of you unpacking inside.

Why it exists:
Before ES6, we passed objects and repeatedly wrote obj.name, obj.age inside functions.
Destructuring in params makes functions shorter, cleaner, and self-documenting.

What problem it solves:
It makes functions easier to read because you can see what inputs are needed right in the parameter list.
It is extremely common in React when receiving props.

Why ES6 introduced it:
To make function signatures clearly show what data they need.

Rule of thumb:
- Destructure in params when you only need a few fields
- Always add safe defaults to avoid crashes
- Extremely common in React props and API handlers
*/

// -----------------------------------------------------------------------------
// BEFORE ES6

/*
You pass the object, then inside you keep writing user.name, user.age.
That becomes annoying and noisy in real apps.
*/
{
  function printUserOld(user) {
    console.log(user.name); // Output: Yash
    console.log(user.age); // Output: 21
  }

  printUserOld({ name: "Yash", age: 21 });
}

// -----------------------------------------------------------------------------
// ES6 WAY

/*
What happens here:
The function immediately unpacks { name, age } from the passed object.
So inside the function you can use name and age directly.
*/
{
  function printUser({ name, age }) {
    console.log(name); // Output: Yash
    console.log(age); // Output: 21
  }

  printUser({ name: "Yash", age: 21 });
}

// -----------------------------------------------------------------------------
// ONLY TAKE WHAT YOU NEED
{
  function showTitle({ title }) {
    console.log(title); // Output: ES6 Course
  }

  showTitle({ title: "ES6 Course", level: "Beginner" });
}

// -----------------------------------------------------------------------------
// REAL-LIFE EXAMPLE: ORDER SUMMARY
{
  function printOrderSummary({ orderId, total, paymentMethod }) {
    console.log(`Order ID: ${orderId}`);
    console.log(`Total: ${total} BDT`);
    console.log(`Payment: ${paymentMethod}`);
  }

  printOrderSummary({
    orderId: 5001,
    total: 1200,
    paymentMethod: "Cash",
    discount: 100,
  });
}

// -----------------------------------------------------------------------------
// DEFAULT VALUES IN PARAMS

// Defaults are used ONLY when value is undefined or missing.
{
  function greetUser({ name = "Guest" }) {
    console.log(`Hello ${name}`);
  }

  greetUser({ name: "Rohan" }); // Hello Rohan
  greetUser({}); // Hello Guest
}

// -----------------------------------------------------------------------------
// IMPORTANT SAFETY: = {} FALLBACK

/*
Why this is needed:
If function is called without an argument,
parameter becomes undefined and destructuring crashes.
*/

{
  function safeGreet({ name = "Guest" } = {}) {
    console.log(`Hello ${name}`);
  }

  safeGreet({ name: "Rohan" }); // Hello Rohan
  safeGreet({}); // Hello Guest
  safeGreet(); // Hello Guest (safe)
}

// -----------------------------------------------------------------------------
// RENAMING + DEFAULT TOGETHER
{
  function showProfile({ name: fullName = "Unknown", role = "Student" } = {}) {
    console.log(fullName); // Output: Ayesha
    console.log(role); // Output: Student
  }

  showProfile({ name: "Ayesha" });
}

// -----------------------------------------------------------------------------
// ARRAY DESTRUCTURING IN PARAMS

// Sometimes functions receive tuples like [lat, lng].
{
  function printLocation([lat, lng]) {
    console.log(lat); // 22.82
    console.log(lng); // 89.55
  }

  printLocation([22.82, 89.55]);
}

// -----------------------------------------------------------------------------
// REAL-WORLD API HANDLER STYLE

// Very common in Node / Express / NestJS
{
  function createUser({ name, email, role = "User" } = {}) {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Role:", role);
  }

  createUser({
    name: "Rohan",
    email: "rohan@gmail.com",
  });
}

// -----------------------------------------------------------------------------
// REACT-STYLE EXAMPLE (LOGIC ONLY, NO JSX)

/*
Why React prefers this:
- Props come as one object
- Destructuring shows exactly what the component needs
*/

// NOTE: This is NOT real React rendering.
// This only demonstrates destructuring logic.

{
  const Profile = ({ username, isOnline, city = "Unknown" }) => {
    console.log(username); // Yash
    console.log(isOnline); // true
    console.log(city); // Khulna
  };

  Profile({
    username: "Yash",
    isOnline: true,
    city: "Khulna",
  });
}

// -----------------------------------------------------------------------------
// COMMON MISTAKES

// Mistake 1: Destructuring without a fallback can crash if argument is undefined

/*
If you call the function without an argument:
The parameter becomes undefined.
Destructuring undefined causes an error.
So we use a fallback: ({ ... } = {}).
*/

// ❌ Wrong
// function badGreet({ name }) {
//   console.log(name);
// }
// badGreet(); // would crash
{
  // ✅ Correct (safe fallback)
  function safeGreet2({ name } = {}) {
    console.log(name); // Output: undefined
  }

  safeGreet2();
}

// -----------------------------------------------------------------------------
// Mistake 2: Using defaults but forgetting the “= {}” fallback

// ❌ Wrong
// function greet2({ name = "Guest" }) {
//   console.log(name);
// }
// greet2(); // would crash because argument is undefined

{
  // ✅ Correct (default + fallback)
  function greet2({ name = "Guest" } = {}) {
    console.log(name); // Output: Guest
  }

  greet2();
}

// -----------------------------------------------------------------------------
// Mistake 3: Over-destructuring (hurts readability)

// If destructuring gets too complex, destructure step by step instead.

{
  function processUser(user) {
    const { profile } = user;
    const { name, city } = profile;

    console.log(name);
    console.log(city);
  }

  processUser({
    profile: { name: "Rohan", city: "Dhaka" },
  });
}

/*
FINAL EXPLANATION

Destructuring in function parameters:
- Makes function inputs clear
- Reduces repeated object.property access
- Prevents crashes with safe defaults
- Is heavily used in React props and API handlers

Mastering this means your functions become cleaner, safer, and easier to maintain.
*/
