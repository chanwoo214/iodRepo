//3.6.23
let printSection = (questionNumber) => {
  console.log(
    "\n",
    "# " + questionNumber,
    "-------------------------------------------------------------",
    "\n"
  );
};

printSection("1");

function ucFirstLetter(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  let result = words.join(" ");
  return result;
}

console.log(ucFirstLetter("new york city best"));
console.log(ucFirstLetter("los angeles"));
console.log(ucFirstLetter("institute of data"));

printSection("2");

function truncate(str, max) {
  if (str.length < max) {
    return str;
  } else {
    return str.slice(0, max) + "...";
  }
}

let truncate1 = (str1, max1) =>
  str1.length > max1 ? str1.slice(0, max1) + "..." : str1;

console.log(truncate1("helloworld my name is chan", 9));
console.log(truncate1("hello", 7));
console.log(truncate("helloworld my name is chan", 9));
console.log(truncate("hello", 7));

printSection("3");
const animals = ["Tiger", "Giraffe"];
animals.push("Dog", "Cat");
animals.unshift("Elephant", "Lion", "Cheetah");
animals.sort();
console.log(animals);

function replaceMiddleAnimal(newValue) {
  let middleIndex = Math.floor(animals.length / 2);
  animals[middleIndex] = newValue;
}

replaceMiddleAnimal("Crocodile");
console.log(animals);

function findMatchingAnimals(beginsWith) {
  let matchingAnimals = animals.filter((animal) => {
    return animal.toLowerCase().startsWith(beginsWith.toLowerCase());
  });
  return matchingAnimals;
}

console.log(animals);
console.log(findMatchingAnimals("c"));

printSection("4");
function camelCase1(cssProp) {
  let words = cssProp.split("-");
  let camelCaseStr = words[0];

  for (let i = 1; i < words.length; i++) {
    camelCaseStr += words[i][0].toUpperCase() + words[i].slice(1);
  }

  return camelCaseStr;
}

console.log(camelCase1("margin-left"));

function camelCase2(cssProp) {
  let words = cssProp.split("-");
  let camelCaseStr = words[0];

  for (let word of words.slice(1)) {
    camelCaseStr += word[0].toUpperCase() + word.slice(1);
  }
  return camelCaseStr;
}
console.log(camelCase2("background-color"));

function camelCase3(cssProp) {
  let words = cssProp.split("-");
  let camelCaseStr = words[0];

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    camelCaseStr +=
      i !== 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word;
  }
  return camelCaseStr;
}
console.log(camelCase3("background-image"));
console.log(camelCase3("display"));

printSection("5");

let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

console.log(typeof twentyCents);
console.log(typeof fixedTwenty);
console.log(typeof fixedTen);
console.log(fixedTwenty + fixedTen);

console.log(
  "Answer to a): " +
    "after using toFixed function, you can see the typeof the value has changed to String which will add/concatenate fixedTwenty + fixedTen instead of performing arithmetic operation which we were expecting."
);

printSection("5B");
function currencyAddition(float1, float2) {
  let result = (float1 * 100 + float2 * 100) / 100;
  return result;
}
console.log(currencyAddition(fixedTwenty, fixedTen));

printSection("5C");
function currencyOperation(float1, float2, operation) {
  //  float1 = parseFloat(float1);
  //float2 = parseFloat(float2);
  //let factor = Math.pow(10, numDecimals);
  let result;
  switch (operation) {
    case "+":
      result = currencyAddition(float1, float2);
      break;

    case "-":
      result = currencyAddition(float1, -float2);
      break;

    case "*":
      result = float1 * float2;
      break;

    case "/":
      result = float1 / float2;
      break;

    default:
      result = NaN;
  }
  return result;
}

console.log("addition" + currencyOperation(fixedTwenty, fixedTen, "+"));
console.log("subtraction" + currencyOperation(fixedTwenty, fixedTen, "-"));
console.log("multiply" + currencyOperation(fixedTwenty, fixedTen, "*"));
console.log("divide" + currencyOperation(fixedTwenty, fixedTen, "/"));

//question 5D
printSection("5D");
function toFixedFloat(value, numDecimals) {
  return parseFloat(value.toFixed(numDecimals));
}

function currencyOperationWithDecimals(float1, float2, operation, numDecimals) {
  float1 = parseFloat(float1);
  float2 = parseFloat(float2);
  console.log(float1);
  console.log(float2);
  switch (operation) {
    case "+":
      result = toFixedFloat(float1 + float2, 2);
      return result;
      break;

    case "-":
      return toFixedFloat(float1 - float2, numDecimals);

    case "*":
      return toFixedFloat(float1 * float2, numDecimals);

    case "/":
      return toFixedFloat(float1 / float2, numDecimals);

    default:
      return NaN;
  }
}

console.log(currencyOperationWithDecimals(0.634, 0.341, "+", 2));
console.log(currencyOperationWithDecimals(0.6, 0.31, "-", 2));
console.log(currencyOperationWithDecimals(0.734, 0.541, "*", 2));
console.log(currencyOperationWithDecimals(0.614, 0.641, "/", 2));

//Question 6
printSection("6");

const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

let fruits = ["apple", "mango", "orange", "mango", "melon", "banana", "apple"];

function unique(duplicatesArray) {
  /* let newArray = new Set(duplicatesArray);
      return newArray;
    */
  return Array.from(new Set(duplicatesArray));
}
console.log(unique(colours));
console.log(unique(testScores));
console.log(unique(fruits));

printSection("7a)");

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];
function getBookTitle(bookId) {
  let book = books.find((book) => book.id == bookId);
  return book ? book.title : "Book not found";
}
console.log(getBookTitle(5));

printSection("7b)");
function getOldBooks(bookYear) {
  let year = books.filter((book) => book.year < bookYear);
  return year;
}

console.log(getOldBooks(1950));

printSection("7c)");

function addGenre() {
  return books.map((book) => ({ ...book, genre: "classic" }));
}
console.log(addGenre());

printSection("7d)");

function getTitles(authorInitial) {
  let book = books
    .filter((book) => book.author.startsWith(authorInitial))
    .map((book) => book.title);
  return book;
}
console.log(getTitles("A"));

printSection("7e)");

function latestBook() {
  let latestBook = null;
  books.forEach((book) => {
    if (!latestBook || book.year > latestBook.year) {
      latestBook = book;
    }
  });
  return latestBook;
}

console.log(latestBook());

printSection("8");
const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

const phoneBookDEF = new Map(); //8a
phoneBookDEF.set("David", "021983204"); //8b
phoneBookDEF.set("Ethan", "021859038"); //8b
phoneBookDEF.set("Francis", "0218492034"); //8b

console.log(phoneBookABC);
console.log(phoneBookDEF);

phoneBookABC.set("Caroline", "0214590234"); //8c

console.log(phoneBookABC.get("Caroline"));

//8d
function printPhoneBook(contacts) {
  for (let contact of contacts) {
    console.log(contact);
  }
}

printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);

//8e
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
console.log(phoneBook);

printSection("9");
const salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

//9a
function sumSalaries(salaries) {
  const salary = Object.values(salaries);
  const sum = salary.reduce(
    (currentTotal, currentValue) => currentTotal + currentValue,
    0
  );
  return sum;
}
console.log(sumSalaries(salaries));

//9b
function topEarner(salaries) {
  let highestSalary = 0;
  let topEarnerName = "";

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > highestSalary) {
      highestSalary = salary;
      topEarnerName = name;
    }
  }
  return topEarnerName;
}

console.log(topEarner(salaries));

printSection("10");

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");
console.log(today.getMinutes() + " minutes have passed so far today"); //10a
console.log(today.getSeconds() + " seconds have passed so far today"); //10b

//10c
const birthDate = new Date("1989-07-22");
const years = today.getFullYear() - birthDate.getFullYear() - 1;
const months = today.getMonth() - birthDate.getMonth() + 11;
const days = today.getDate() - birthDate.getDate() + 31;

console.log(`I am ${years} years, ${months} months, and ${days} days old`);

//10d
function daysInBetween(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  const diffInTime = Math.abs(date2 - date1);
  const diffInDays = Math.floor(diffInTime / oneDay);

  return diffInDays;
}

const courseStart = new Date("2023-05-02");
const currentDate = new Date("2023-07-01");
console.log(daysInBetween(courseStart, currentDate));
