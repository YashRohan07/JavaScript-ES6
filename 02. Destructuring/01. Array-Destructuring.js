/*

ARRAY DESTRUCTURING (ES6)

What this feature is:
Array destructuring is a syntax that lets you unpack values from an array into separate variables.
It looks like an array on the left side: const [a, b] = someArray;

Why it exists:
Before ES6, we had to write array[0], array[1] again and again.
Destructuring makes code shorter, cleaner, and easier to read.
It removes repeated indexing like arr[0], arr[1].

Why ES6 introduced it:
ES6 added destructuring to make it easier to unpack values from arrays (and also properties from objects).

Rule of thumb:
Use array destructuring when you need multiple values from an array.
In arrays, the order matters (first variable gets the first value, second gets the second value).
*/

// -----------------------------------------------------------------------------
// BEFORE ES6 (OLD WAY)

/*
You must write array indexing many times: arr[0], arr[1], arr[2].
If you need many values, the code becomes longer and harder to scan quickly.
*/

{
  const colorsOld = ["red", "green", "blue"];

  const firstOld = colorsOld[0];
  const secondOld = colorsOld[1];

  console.log(firstOld, secondOld); // Output: red green
}

// -----------------------------------------------------------------------------
// ES6 WAY (MODERN WAY)

/*
What happens here:
[first, second] matches the array positions.
first gets index 0, second gets index 1.
*/

{
  const colors = ["red", "green", "blue"];

  const [first, second] = colors;

  console.log(first); // Output: red
  console.log(second); // Output: green
}

// -----------------------------------------------------------------------------
// TAKE ALL VALUES

{
  const rgb = ["R", "G", "B"];
  const [r, g, b] = rgb;

  console.log(r, g, b); // Output: R G B
}

// -----------------------------------------------------------------------------
// SKIPPING VALUES

{
  // If you want only the 3rd value, you can skip positions using commas.
  const colors = ["red", "green", "blue"];
  const [, , thirdColor] = colors;

  console.log(thirdColor); // Output: blue
}

// -----------------------------------------------------------------------------
// Default values (useful when array is missing a value)

/*
Default value is used ONLY when the value is:
→ missing
→ OR undefined

Default value is NOT used when the value is: → null
*/

{
  const [value = "DEFAULT"] = [undefined];
  console.log(value); // Output: DEFAULT

  const [value2 = "DEFAULT"] = [null];
  console.log(value2); // Output: null (default NOT used)

  const [value3 = "DEFAULT"] = [];
  console.log(value3); // Output: DEFAULT (missing => undefined)
}

// -----------------------------------------------------------------------------
// Real-life example (user input)

{
  function greet([name = "Guest"]) {
    console.log(`Hello ${name}`);
  }

  greet([]); // Output: Hello Guest  (missing => default)
  greet([undefined]); // Output: Hello Guest  (undefined => default)
  greet([null]); // Output: Hello null   (null is an actual value)
  greet(["Rohan"]); // Output: Hello Rohan
}

// -----------------------------------------------------------------------------
// REST ELEMENT (collect “the remaining” values into a new array)

// ...restScores collects the remaining values into an array.

{
  const scores = [80, 90, 75, 60];

  const [firstScore, secondScore, ...restScores] = scores;

  console.log(firstScore); // Output: 80
  console.log(secondScore); // Output: 90
  console.log(restScores); // Output: [75, 60]
}

// -----------------------------------------------------------------------------
// Function example: return multiple values and destructure them

/*
A function can return an array of values.
Destructuring makes it easy to grab them.

Simple idea:
- Start min and max from the first number
- Then check each number one by one
- Update min/max when needed
*/

// Arrays are used when order matters: [min, max]
// Objects are used when names matter: { min, max }

{
  function getMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (const n of arr) {
      if (n < min) min = n;
      if (n > max) max = n;
    }

    return [min, max];
  }

  const [minValue, maxValue] = getMinMax([3, 10, 1, 8]);

  console.log(minValue); // Output: 1
  console.log(maxValue); // Output: 10
}

// -----------------------------------------------------------------------------
// SWAPPING VARIABLES

// You can swap values without a temporary variable.
// NOTE: Starting a line with [ ... ] can be misread by JS as continuing the previous statement.
// Safer: start with a semicolon.

{
  let left = "Tea";
  let right = "Coffee";

  [left, right] = [right, left];

  console.log(left, right); // Output: Coffee Tea
}

// -----------------------------------------------------------------------------
// REACT-STYLE EXAMPLE
/*
Why React likes this:
React code often deals with arrays like [state, setState] from hooks.
Destructuring makes the code short and clear.
*/

// NOTE: This is not real React state. React re-renders UI; this example only shows destructuring + closure idea.

/*
Think like this:
- We have a box that holds a value
- And a button that can change that value
- Both are returned in an array
*/

{
  function createBox(initialValue) {
    // Store the value inside the box
    let value = initialValue;

    // Button to change the value
    function updateValue(newValue) {
      value = newValue;
      console.log("Box value updated to:", value);
    }

    // Return:
    // index 0 → current value
    // index 1 → function to update value
    return [value, updateValue];
  }

  // Destructure the returned array
  const [boxValue, updateBox] = createBox(50);

  console.log(boxValue);
  // Output: 50

  updateBox(75);
  // Output: Box value updated to: 75
}

// -----------------------------------------------------------------------------
// REAL-LIFE EXAMPLE: WALLET

/*
Imagine:
- A wallet has some money
- You also get a function to add money to it
*/

{
  function createWallet(startAmount) {
    let balance = startAmount;

    function addMoney(amount) {
      balance += amount;
      console.log("New balance:", balance);
    }

    // Return both balance and the function
    return [balance, addMoney];
  }

  // Destructure returned array
  const [balance, addMoney] = createWallet(100);

  console.log(balance);
  // Output: 100

  addMoney(50);
  // Output: New balance: 150
}

// -----------------------------------------------------------------------------
// REAL-WORLD API TUPLE EXAMPLE: [data, error]
// Very common pattern in Node/React: return result + error together

{
  function fetchResult() {
    return [{ id: 1, name: "Rohan" }, null];
  }

  const [data, error] = fetchResult();

  console.log(data); // Output: { id: 1, name: "Rohan" }
  console.log(error); // Output: null
}

// -----------------------------------------------------------------------------
// COMMON MISTAKES

// Mistake 1: Forgetting that order matters

/*
Order matters in array destructuring:
First variable gets first value, second gets second value.
*/

{
  // ❌ Wrong
  // const [wrongSecond, wrongFirst] = ["first", "second"];
  // console.log(wrongFirst);  // Output would be: second (not what you wanted)
  // console.log(wrongSecond); // Output would be: first

  // ✅ Correct
  const [correctFirst, correctSecond] = ["first", "second"];

  console.log(correctFirst); // Output: first
  console.log(correctSecond); // Output: second
}

// Mistake 2: Destructuring from undefined (crashes)

/*
Destructuring only works on arrays or objects.
If the value is undefined, JavaScript will CRASH.

So always make sure the array exists OR give a safe fallback.
*/

{
  // ❌ WRONG (do not do this)
  // const maybeArray = undefined;
  // const [value] = maybeArray;
  // Error: Cannot destructure undefined

  // ✅ CORRECT WAY
  const maybeArray = undefined;

  // If maybeArray is undefined, use a default empty array []
  const safeArray = maybeArray || [];

  // Destructure safely with a default value
  const [safeValue = "No value"] = safeArray;

  console.log(safeValue);
  // Output: No value
}

/*
FINAL EXPLANATION

Array destructuring helps you write cleaner code by avoiding repeated arr[0], arr[1] access.
It makes real apps easier to maintain because your variables clearly show what you are taking from the array.
Professionals use it because it reduces small mistakes, keeps code short, and is used a lot in modern JavaScript and React patterns.
*/
