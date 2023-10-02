let printSection = (questionNumber) => {
  console.log(
    "\n",
    "# " + questionNumber,
    "-------------------------------------------------------------",
    "\n"
  );
};

let printSectionDelay = (questionNumber, delay) => {
  setTimeout(printSection, delay, questionNumber);
};

printSection("1a");
function makeCounter() {
  let currentCount = 0;

  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}
let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

let counter2 = makeCounter();
counter2();
counter2();

printSection("1b");
function makeCounter1b(startFrom) {
  let currentCount = startFrom || 0;

  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1b = makeCounter1b();
let counter2b = makeCounter1b(3);
counter1b();
counter1b();
counter2b();
counter2b();

printSection("1c");

function makeCounter1c(startFrom, incrementBy) {
  let currentCount = startFrom || 0;

  return function () {
    currentCount += incrementBy || 1;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1c = makeCounter1c();
let counter2c = makeCounter1c(3, 4);
counter1c();
counter1c();
counter2c();
counter2c();

printSection("2a");

function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}
setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

// #4 is printed first and #3 -> #2 -> #1. Its printed in this order due to the delays assigned to each message using setTimeout. It does not wait for the #1 message print and just executes next line of the code and so on. Since #4 message does not have delays, it gets printed first.

printSection("2b, 2c and 2d");
const delayMsgArrow = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

setTimeout(delayMsgArrow, 100, "#1: Delayed by 100ms");
setTimeout(delayMsgArrow, 20, "#2: Delayed by 20ms");
setTimeout(delayMsgArrow, 0, "#3: Delayed by 0ms");
delayMsgArrow("#4: Not delayed at all");
let timerId = setTimeout(delayMsgArrow, 15000, "#5: Delayed by 15s");
clearTimeout(timerId);

printSectionDelay("3a", 101);

function printMe() {
  console.log("printing debounced message");
}
printMe = debounce(printMe); //create this debounce function for a) //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);

function debounce(func) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, 1000);
  };
}

printSectionDelay("3b", 1313);

function debounce3b(func, ms) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, ms);
  };
}

printSectionDelay("3c", 1313);
function debounce3c(func, ms) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), ms);
  };
}

function printMe3c(msg) {
  console.log(`Printing debounced message: ${msg}`);
}

printMe3c = debounce(printMe, 1000);

// Fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout(printMe3c, 100, "Message 1");
setTimeout(printMe3c, 200, "Message 2");
setTimeout(printMe3c, 300, "Message 3");

printSectionDelay("4a", 2650);
function printFibonacci() {
  let prev = 0;
  let current = 1;

  const intervalId = setInterval(() => {
    console.log(current);
    const next = prev + current;
    prev = current;
    current = next;
  }, 1000);

  return intervalId;
}

printFibonacci();

printSection("4b");
function printFibonacciTimeouts() {
  let prev = 0;
  let current = 1;
  let count = 0;

  function printNextFibonacci() {
    console.log(current);
    const next = prev + current;
    prev = current;
    current = next;
    count++;

    if (count < 10) {
      setTimeout(printNextFibonacci, 1000);
    }
  }

  setTimeout(printNextFibonacci, 1000);
}

printFibonacciTimeouts();

printSection("4c");

function printFibonacci(limit) {
  let prev = 0;
  let current = 1;
  let count = 0;

  const intervalId = setInterval(() => {
    console.log(current);
    const next = prev + current;
    prev = current;
    current = next;
    count++;

    if (count >= limit) {
      clearInterval(intervalId);
    }
  }, 1000);
}

printFibonacci(10);

printSection("5a");
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works 
setTimeout(car.description, 200); //fails
