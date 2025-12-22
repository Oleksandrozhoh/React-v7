//----------------------- function and arrow function -----------------------//
function getRectangleArea(width, height) {
  return width * height;
}

console.log(getRectangleArea(10, 20));

const getRectangleAreaArrow = (window, hight) => window * hight;

console.log(getRectangleArea(5, 15));

numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((number) => number * number); // new squares array

console.log(`new squares array ${squares}`);

// can not call arrow function before its declaration
// arrow function does not have its own 'this' context

//----------------------- ternary operator -----------------------//
const age = 18;
const canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";

console.log(canVote);

//----------------------- template literals -----------------------//
const name = "John";
const greeting = `Hello, ${name}! Welcome to the JavaScript world.`;

console.log(greeting);

//----------------------- default parameters -----------------------//
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet());
console.log(greet("Alice"));

//----------------------- truthy and falsy values -----------------------//
const values = [0, 1, "", "Hello", null, undefined, [], {}, NaN];

values.forEach((value) => {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
});

// 0, '', null, undefined, NaN are falsy
// 1, 'Hello', [], {} are truthy

//----------------------- short circuit evaluation -----------------------//
const userInput = "";
const defaultInput = userInput || "Default Value";
// since userInput is falsy, defaultInput gets 'Default Value'
// if userInput had a truthy value, defaultInput would get that value

console.log(defaultInput); // Output: Default Value

const isLoggedIn = true;
console.log(isLoggedIn && `Welcome to the site!`); // Output: Welcome to the site!

//----------------------- destructuring assignment -----------------------//
const person = {
  firstName: "Jane",
  lastName: "Doe",
  personsAge: 30,
};

const { firstName, personsAge } = person;

console.log(`First Name: ${firstName}, Age: ${personsAge}`);

const coordinates = [10, 20];
const [x, y] = coordinates; // array destructuring assignment

console.log(`X: ${x}, Y: ${y}`); // X: 10, Y: 20

const { firstName: fName, ...lastNameAndAge } = person; // rest operator in destructuring

console.log(fName); // Jane
console.log(lastNameAndAge); // { lastName: 'Doe', personsAge: 30 }

//----------------------- spread operator -----------------------//
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2]; // combining arrays using spread operator

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObject = { ...obj1, ...obj2 }; // combining objects using spread operator

console.log(combinedObject); // { a: 1, b: 2, c: 3, d: 4 }

// Rest = left side of assignment → gathers into array
// Spread = right side of assignment → expands from array/object

//----------------------- array methods -----------------------//

const nums = [1, 2, 3, 4, 5];

// push
nums.push(6);
console.log(`After push: ${nums}`); // [1, 2, 3, 4, 5, 6]

// pop
const popped = nums.pop();
console.log(`Popped element: ${popped}`); // 6
console.log(`After pop: ${nums}`); // [1, 2, 3, 4, 5]

// shift
const shifted = nums.shift(); // removes first element
console.log(`Shifted element: ${shifted}`); // 1
console.log(`After shift: ${nums}`); // [2, 3, 4, 5]

// unshift
nums.unshift(0); // adds element at the beginning
console.log(`After unshift: ${nums}`); // [0, 2, 3, 4, 5]

// length
console.log(`Length of array: ${nums.length}`); // 5

// indexOf
const index = nums.indexOf(3);
console.log(`Index of 3: ${index}`); // 2

// includes
const hasFour = nums.includes(4);
console.log(`Array includes 4: ${hasFour}`); // true

// forEach
nums.forEach(function (num) {
  return console.log(`forEach: ${num}`);
});

// map
const doubled = nums.map((num, index) => console.log(`${index}: ${num * 2}`));

// filter
const evenNumbers = nums.filter((num) => num % 2 === 0);
console.log(`Filtered Even Numbers: ${evenNumbers}`);

// reduce
const sum = nums.reduce((total, current) => total + current, 0);
console.log(`Sum using reduce: ${sum}`);

// find
const id = nums.find((num) => num === 10);
console.log(`Find 10: ${id}`); // undefined since 10 is not in the array

// some
const hasEven = nums.some((num) => num % 2 === 0);
console.log(`Array has even number: ${hasEven}`); // true

// every
const allPositive = nums.every((num) => num > 0);
console.log(`All numbers are positive: ${allPositive}`); // true

//----------------------- nullish coalescing operator -----------------------//
const userSetting = null;
const defaultSetting = "Default Setting";

const finalSetting = userSetting ?? defaultSetting; // since userSetting is null, finalSetting gets defaultSetting

console.log(finalSetting); // Output: Default Setting

const anotherSetting = "User Setting";

const finalAnotherSetting = anotherSetting ?? defaultSetting; // since anotherSetting is not null/undefined, it gets its own value

console.log(finalAnotherSetting); // Output: User Setting

//----------------------- optional chaining -----------------------//
const user = {
  profile: {
    name: "Alice",
    address: {
      city: "Wonderland",
    },
  },
};

const userCity = user.profile?.address?.city; // safely accessing nested properties

console.log(`User City: ${userCity}`); // Output: User City: Wonderland

const userCountry = user.profile?.address?.country; // country does not exist

console.log(`User Country: ${userCountry}`); // Output: User Country: undefined

//----------------------- Nullish coalescing operator vs || -----------------------//
// || operator returns the right-hand side if the left-hand side is falsy
// '??' operator returns the right-hand side only if the left-hand side is null or undefined

const value = "";
const result = value || "Default Value";
// since value is falsy (empty string), result gets 'Default Value'

const nullishResult = value ?? "Default Value";
// since value is not null or undefined, nullishResult gets the empty string

console.log(result); // Output: Default Value
console.log(nullishResult); // Output:

//----------------------- Promises -----------------------//
const fetchData = new Promise((resolve, reject) => {
  const success = true; // change to false to test rejection
  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error fetching data.");
    }
  }, 2000);
});

fetchData
  .then((data) => {
    console.log(data); // Output: Data fetched successfully!
  })
  .catch((error) => {
    console.error(error); // Output: Error fetching data.
  });
// Promises are used for asynchronous operations in JavaScript.
// They represent a value that may be available now, in the future, or never.
// A Promise can be in one of three states: pending, fulfilled, or rejected.
// The 'then' method is called when the Promise is fulfilled, and the 'catch' method is called when it is rejected.
// Promises help avoid callback hell and make asynchronous code more manageable.

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) // parse JSON response
  .then((data) => console.log(data)); // log the data
// Fetch API returns a Promise that resolves to the Response object representing the response to the request.
// The 'json()' method of the Response object also returns a Promise that resolves to the parsed JSON data.
