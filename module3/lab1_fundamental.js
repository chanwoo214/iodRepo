//3 June 2023
function printSection(sectionNumber) {
  console.log(
    "\n",
    sectionNumber +
      "# ------------------------------------------------------------------",
    "\n"
  );
}

//Question 1
printSection("1");

console.log("" + 1 + 0); // 10
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(!true); // 0 (false)
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // 9px
console.log("$" + 4 + 5); //$9 ($45)
console.log("4" - 2); // 2
console.log("4px" - 2); // 2px (NaN)
console.log("  -9  " + 5); // -95 (  -9  5)
console.log("  -9  " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // 1 (NaN)
console.log(undefined == null); // true or 1
console.log(undefined === null); // false or undefined
console.log("\t \n" - 2); // -2

printSection("2");
//Question 2
let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four; // 34
let multiplication = three * four; // 12
let division = three / four; // 0.75
let subtraction = three - four; //-1
let lessThan1 = three < four; //true
let lessThan2 = thirty < four; //false (true)

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);

printSection("3");
//Question 3
if (0) console.log("#1 zero is true"); // since the 0 is falsy value it does not print
if ("0") console.log("#2 zero is true"); // this gets printed since "0" is considered string which is truthy value
if (null) console.log("null is true"); // null is a falsy value like 0 so it does not get printed in the console log
if (-1) console.log("negative is true"); // this gets printed since negative numbers are also the truthy values

printSection("4");
//Question 4
// += adds the string to the result
let a = 9,
  b = 3;
let result = `${a} + ${b} is `;

if (a + b < 10) {
  result += "less than 10";
} else {
  result += "greater than 10";
}

let result_new = `${a} + ${b} is ${a + b} is ${
  a + b < 10 ? "less than 10" : "greater than or equal to 10"
}`;
//let result = (a + b < 10) ? 'Less than 10': 'Greater than 10';

console.log(result);
console.log(result_new);

printSection("5");
//Question 5
function getGreeting(name) {
  return "Hello " + name + "!";
}

//using function syntax
let greeting = function (name) {
  return "Hello " + name + "!";
};

// using arrow function syntax
let greetingArrow = (name) => {
  return "Hello " + name + "!";
};

console.log(getGreeting("chan"));
console.log(greeting("chan"));
console.log(greetingArrow("chan"));

printSection("6");
//Question 6

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",

  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;

    console.log(greeting + this.getCatchPhrase2(person));
  },
  /*
    getCatchPhrase1:(person) => {
        if (numFingers == 6) {
            return '. You killed my father. Prepare to die.';
        }
        else {
            return 'Nice to meet you'; 
        }
    },*/

  getCatchPhrase2: (person) =>
    person.numFingers == 6
      ? "You have 6 fingers! You killed my father. Prepare to die."
      : "Nice to meet you",
};

inigo.greeting(westley);
inigo.greeting(rugen);

printSection("7");
//Question 7
const basketballGame = {
  score: 0,
  foul: 0,

  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  fouls() {
    this.foul++;
    return this;
  },

  numFouls() {
    console.log("Number of Fouls in Half Time: " + this.foul);
    return this;
  },

  halfTime() {
    console.log("Halftime score is " + this.score);
    return this;
  },

  fullTime() {
    console.log("Full Time! Final score is " + this.score);
    return this;
  },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .fouls()
  .fouls()
  .fouls()
  .numFouls()
  .halfTime()
  .fullTime();

printSection("8");
//Question 8
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const auckland = {
    name: "Auckland",
    population: "1.657 million",
    state: "AKL",
    founded: "around 1350",
    timezone: "Wellington/Auckland",
};

for (let key in sydney) {       
    //console.log(key, ":", auckland[key]);
    console.log(key, ":", sydney[key]);
};

for (let key in auckland) {
    console.log(key, ":", auckland[key]);
};

printSection("9");
//Question 9
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let moreSports = teamSports.slice();
moreSports.push('Tennis', 'Soccer');
moreSports.unshift('Golf', 'Swimming');

let dog2 = dog1;
dog2 = 'Max';

let cat2 = {...cat1};
cat2.name = 'Catty';

console.log(teamSports);
console.log(moreSports);
console.log(dog1);
console.log(dog2);
console.log(cat1);
console.log(cat2);

printSection("10");
//Question 10

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    
    this.canDrive = function() {
        return this.age >= 18;
    };
}
let person1 = new Person('John', 24);
let person2 = new Person('Dave', 40);

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
    canDrive () {
        return this.age >= 18;
    }
}

let person3 = new PersonClass('Josh', 20);

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person1.canDrive());
console.log(person2.canDrive());
console.log(person3.canDrive());