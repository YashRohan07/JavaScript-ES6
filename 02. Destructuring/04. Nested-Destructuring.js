/*

NESTED DESTRUCTURING (ES6)

What this feature is:
Nested destructuring means extracting values from objects or arrays
that are inside other objects or arrays.

In simple words:
- Object inside object
- Array inside object
- Object inside array

Why it exists:
Real-world data (APIs, configs, React props) is usually nested.
Without it, you write deep dot access like user.address.city again and again.
Nested destructuring can make that cleaner by matching the same shape (structure).

What problem it solves:
- Reduces deep and repetitive access like user.profile.address.city
- Makes code shorter and easier to read
- Clearly shows what deep values you are using

Why ES6 introduced it:
To allow destructuring to match the exact shape of complex data.

Rule of thumb:
- Match the left-side structure with the right-side data shape
- Add safe defaults (= {}) to avoid crashes
- If it becomes hard to read, destructure step by step
*/

// -----------------------------------------------------------------------------
// BEFORE ES6
// Deep access using dot notation again and again

{
  const userOld = {
    name: "Yash",
    address: {
      city: "Khulna",
      zip: 9000,
    },
  };

  const cityOld = userOld.address.city;
  const zipOld = userOld.address.zip;

  console.log(cityOld); // Output: Khulna
  console.log(zipOld); // Output: 9000
}

// -----------------------------------------------------------------------------
// ES6 WAY (NESTED DESTRUCTURING)
// Match the structure: address → { city, zip }

{
  const user = {
    name: "Yash",
    address: {
      city: "Khulna",
      zip: 9000,
    },
  };

  const {
    address: { city, zip },
  } = user;

  console.log(city); // Output: Khulna
  console.log(zip); // Output: 9000
}

// -----------------------------------------------------------------------------
// BASIC OBJECT INSIDE OBJECT

{
  const company = {
    companyName: "TechSoft",
    owner: {
      name: "Ayesha",
      email: "ayesha@techsoft.com",
    },
  };

  const {
    owner: { name, email },
  } = company;

  console.log(name); // Output: Ayesha
  console.log(email); // Output: ayesha@techsoft.com
}

// -----------------------------------------------------------------------------
// REAL-WORLD API RESPONSE EXAMPLE
// API responses are usually deeply nested.

{
  const apiResponse = {
    status: "ok",
    data: {
      user: {
        id: 7,
        profile: {
          fullName: "Giash Uddin",
          city: "Dhaka",
        },
      },
    },
  };

  const {
    data: {
      user: {
        id,
        profile: { fullName, city },
      },
    },
  } = apiResponse;

  console.log(id); // Output: 7
  console.log(fullName); // Output: Giash Uddin
  console.log(city); // Output: Dhaka
}

// -----------------------------------------------------------------------------
// RENAMING DURING NESTED DESTRUCTURING

{
  const apiResponse = {
    data: {
      user: {
        profile: {
          city: "Dhaka",
        },
      },
    },
  };

  const {
    data: {
      user: {
        profile: { city: userCity },
      },
    },
  } = apiResponse;

  console.log(userCity); // Output: Dhaka
}

// -----------------------------------------------------------------------------
// ARRAY + OBJECT NESTED DESTRUCTURING
// Common pattern: array of objects

{
  const posts = [
    { id: 1, title: "Learn ES6", author: { name: "Yash" } },
    { id: 2, title: "Learn React", author: { name: "Ayesha" } },
  ];

  const [
    {
      title: firstPostTitle,
      author: { name: firstAuthor },
    },
  ] = posts;

  console.log(firstPostTitle); // Output: Learn ES6
  console.log(firstAuthor); // Output: Yash
}

// -----------------------------------------------------------------------------
// DEFAULT VALUES IN NESTED DESTRUCTURING
// Defaults are used when value is missing or undefined

{
  const profileData = {
    user: {
      name: "Yash",
      // settings missing
    },
  };

  const {
    user: { name, settings: { theme = "light" } = {} },
  } = profileData;

  console.log(name); // Output: Yash
  console.log(theme); // Output: light
}

// -----------------------------------------------------------------------------
// SAFETY: AVOID CRASH WHEN PARENT OBJECT IS MISSING
// Without fallback (= {}), this would crash.

{
  const data = {};

  // data.user might be missing → = {}
  // data.user.profile might be missing → = {}
  // profile.name might be missing → default "Unknown"
  const { user: { profile: { name = "Unknown" } = {} } = {} } = data;

  console.log(name); // Output: Unknown
}

// -----------------------------------------------------------------------------
// FUNCTION PARAM WITH NESTED DESTRUCTURING
// Very common in config objects

{
  function connectDatabase({ db: { host, port = 5432 } = {} } = {}) {
    console.log(host); // Output: localhost
    console.log(port); // Output: 5432
  }

  connectDatabase({ db: { host: "localhost" } });
}

// -----------------------------------------------------------------------------
// REACT-STYLE EXAMPLE (LOGIC ONLY, NO JSX)
// Props are often nested: props.user.profile

// NOTE: This is NOT real React rendering.
// This only demonstrates destructuring logic.

{
  function UserCard(props) {
    const {
      user: {
        profile: { name, city },
      },
    } = props;

    console.log(name); // Output: Yash
    console.log(city); // Output: Khulna
  }

  UserCard({
    user: {
      profile: { name: "Yash", city: "Khulna" },
    },
  });
}

// -----------------------------------------------------------------------------
// COMMON MISTAKES

// Mistake 1: Destructuring deep values without safety

{
  // ❌ WRONG (would crash)
  // const badData = {};
  // const { user: { profile: { name } } } = badData;

  // ✅ SAFE WAY (fallbacks prevent crash)
  const safeData = {};

  const { user: { profile: { name = "Unknown" } = {} } = {} } = safeData;

  console.log(name); // Output: Unknown
}

// -----------------------------------------------------------------------------
// Mistake 2: Making destructuring unreadable
// If destructuring becomes hard to understand, break it into steps.

{
  const bigData = {
    user: {
      profile: { name: "Ayesha", city: "Dhaka" },
    },
  };

  // Step-by-step (clear and readable)
  const { user } = bigData;
  const { profile } = user;
  const { name, city } = profile;

  console.log(name); // Output: Ayesha
  console.log(city); // Output: Dhaka
}

/*
FINAL EXPLANATION

Nested destructuring:
- Helps work with deeply nested real-world data
- Reduces repetitive deep access
- Must be used carefully with defaults for safety
- Should stay readable (break into steps if needed)

Professionals use nested destructuring daily,
especially when handling API responses and React props.
*/
