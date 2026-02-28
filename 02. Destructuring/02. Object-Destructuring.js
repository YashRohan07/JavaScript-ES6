/*

OBJECT DESTRUCTURING (ES6)

What this feature is:
Object destructuring is a syntax that lets you unpack properties from an object into variables.
In objects, names matter (property names), not order.

Key difference from array destructuring:
- Arrays → POSITION matters
- Objects → PROPERTY NAME matters (order does NOT matter)

Why it exists:
Before ES6, we wrote user.name, user.age everywhere.
Destructuring makes it shorter and cleaner.

What problem it solves:
It reduces repeated “dot access” like obj.property again and again.
It helps you grab only what you need from a big object.

Why ES6 introduced it:
To make object data access cleaner, safer, and more readable.

Rule of thumb:
- Use object destructuring when working with objects (APIs, configs, React props)
- Use it when you need multiple properties from an object
- Property names must match exactly
*/

// -----------------------------------------------------------------------------
// BEFORE ES6 (OLD WAY)

/*
Repeating user.name, user.age makes code longer.
You can also make mistakes by typing the wrong property name many times.
*/

{
  const userOld = {
    name: "Yash",
    age: 21,
    country: "Bangladesh",
  };

  const nameOld = userOld.name;
  const ageOld = userOld.age;

  console.log(nameOld); // Output: Yash
  console.log(ageOld); // Output: 21
}

// -----------------------------------------------------------------------------
// ES6 WAY (MODERN WAY)

/*
What happens here:
{ name, age } matches property names.
It is similar to:
const name = user.name;
const age = user.age;
*/

{
  const user = {
    name: "Yash",
    age: 21,
    country: "Bangladesh",
  };

  const { name, age } = user;

  console.log(name); // Output: Yash
  console.log(age); // Output: 21
}

// -----------------------------------------------------------------------------
// ORDER DOES NOT MATTER (ONLY PROPERTY NAMES MATTER)

{
  // Order does NOT matter in object destructuring (only property names matter)
  const user = { name: "Yash", age: 21 };

  const { age, name } = user;

  console.log(name); // Output: Yash
  console.log(age); // Output: 21
}

// -----------------------------------------------------------------------------
// RENAMING (DECLARATION) vs REASSIGNING (ASSIGNMENT)
// New variables → rename without parentheses
// Existing variables → reassign with parentheses

{
  const user = {
    name: "Rohan",
    country: "Bangladesh",
  };

  // ---------------------------------------------------------
  // 1) RENAMING VARIABLES (DECLARATION TIME)
  // - Variables do NOT exist yet
  // - We are creating new variables here
  // - No parentheses needed

  const { name: userName, country: userCountry } = user;

  console.log(userName); // Output: Rohan
  console.log(userCountry); // Output: Bangladesh

  // ---------------------------------------------------------
  // 2) REASSIGNING EXISTING VARIABLES (ASSIGNMENT TIME)
  // - Variables already exist
  // - We are updating their values
  // - Parentheses are REQUIRED so JS knows this is assignment, not a block

  let nameValue = "OldName";
  let countryValue = "OldCountry";

  ({ name: nameValue, country: countryValue } = user);

  console.log(nameValue); // Output: Rohan
  console.log(countryValue); // Output: Bangladesh
}

// -----------------------------------------------------------------------------
// DEFAULT VALUES

/*
Default value is used ONLY when property is:
→ missing
→ OR undefined

Default value is NOT used when property is null
*/

{
  const settings = {
    theme: "dark",
    language: undefined,
    layout: null,
  };

  const { theme = "light", language = "en", layout = "grid" } = settings;

  console.log(theme); // Output: dark
  console.log(language); // Output: en
  console.log(layout); // Output: null
}

// -----------------------------------------------------------------------------
// REAL-LIFE EXAMPLE: USER PROFILE

{
  const profile = {
    fullName: "Rohan",
    city: "Dhaka",
    phone: "01700000000",
  };

  const { fullName, city } = profile;

  console.log(`${fullName} lives in ${city}.`);
  // Output: Rohan lives in Dhaka.
}

// -----------------------------------------------------------------------------
// REST PROPERTIES

// Rest (...) collects remaining properties into a new object.

{
  const employee = {
    id: 101,
    name: "Ayesha",
    role: "Developer",
    location: "Dhaka",
  };

  const { id, ...publicProfile } = employee;

  console.log(id); // Output: 101
  console.log(publicProfile);
  // Output: { name: "Ayesha", role: "Developer", location: "Dhaka" }
}

// -----------------------------------------------------------------------------
// FUNCTION EXAMPLE (DESTRUCTURE INSIDE FUNCTION BODY)

{
  function printProductInfo(product) {
    const { title, price } = product;

    console.log(title); // Output: Laptop
    console.log(price); // Output: 65000
  }

  printProductInfo({
    title: "Laptop",
    price: 65000,
    brand: "Acer",
  });
}

// -----------------------------------------------------------------------------
// FUNCTION PARAM DESTRUCTURING (CLEANER)

// This is preferred in modern JS & React.

{
  function printProductInfo({ title, price }) {
    console.log(title); // Output: Phone
    console.log(price); // Output: 30000
  }

  printProductInfo({
    title: "Phone",
    price: 30000,
    brand: "Samsung",
  });
}

// -----------------------------------------------------------------------------
// DEFAULT + SAFETY IN FUNCTION PARAMS

/*
Why = {} is needed:
If function is called without argument → undefined
Destructuring undefined crashes
*/

{
  function greetUser({ name = "Guest" } = {}) {
    console.log(`Hello ${name}`);
  }

  greetUser({ name: "Rohan" }); // Output: Hello Rohan
  greetUser({}); // Output: Hello Guest
  greetUser(); // Output: Hello Guest
}

// -----------------------------------------------------------------------------
// REACT-STYLE EXAMPLE (LOGIC ONLY, NO JSX)

/*
Why React loves this:
- Components receive one object: props
- Destructuring makes needed props obvious
*/

// NOTE: This is NOT real React rendering.
// This only demonstrates destructuring logic.

{
  function ProfileCard({ username, isOnline, city = "Unknown" }) {
    console.log(username); // Output: Yash
    console.log(isOnline); // Output: true
    console.log(city); // Output: Khulna
  }

  ProfileCard({
    username: "Yash",
    isOnline: true,
    city: "Khulna",
  });
}

// -----------------------------------------------------------------------------
// REAL-WORLD API RESPONSE EXAMPLE

{
  const apiResponse = {
    status: "ok",
    data: {
      user: {
        id: 7,
        name: "Rohan",
        role: "Admin",
      },
    },
  };

  // In real apps, add defaults (= {}) if API fields might be missing
  const {
    data: {
      user: { id, name, role },
    },
  } = apiResponse;

  console.log(id); // Output: 7
  console.log(name); // Output: Rohan
  console.log(role); // Output: Admin
}

// -----------------------------------------------------------------------------
// COMMON MISTAKES

// Mistake 1: Using wrong property name

{
  const user = { name: "Yash" };

  const { country } = user;

  console.log(country); // Output: undefined (no crash, but value missing)
}

// Mistake 2: Destructuring undefined object (crashes)
// Fix: use safe fallback object (obj || {})

{
  // ❌ WRONG
  // const obj = undefined;
  // const { a } = obj; // crash

  // ✅ SAFE WAY
  const obj = undefined;
  const { a = "default" } = obj || {};

  console.log(a); // Output: default
}

// Mistake 3: Reassigning with object destructuring without parentheses

/*
If you are assigning to already-declared variables using object destructuring:
You need parentheses around it.
*/

{
  const user = {
    name: "Yash",
    country: "Bangladesh",
  };

  let firstName = "OldName";
  let userCity = "OldCity";

  // Correct way (parentheses required)
  ({ name: firstName, country: userCity } = user);

  console.log(firstName); // Output: Yash
  console.log(userCity); // Output: Bangladesh
}

/*
FINAL EXPLANATION

Object destructuring:
- Removes repeated obj.property access
- Makes code shorter and clearer
- Is heavily used in APIs, configs, and React props
- Works by PROPERTY NAME, not order

Professionals use it everywhere because it improves readability
and reduces small but dangerous mistakes.
*/
