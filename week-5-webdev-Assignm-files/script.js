// Part 1: Getting Started with JavaScript (Variables & Conditionals)

// Declaring a couple of variables
let userName = "Student";
let userScore = 95;

// Checking the score and printing out a message
if (userScore >= 90) {
  console.log(`Well done, ${userName}! You earned an A grade.`);
} else {
  console.log(`Don’t worry, ${userName}, keep practicing and you’ll improve.`);
}


// Part 2: Functions in JavaScript (Making Code Reusable)
// This part has two functions for different purposes.

// Function 1: Calculate the area of a rectangle
function calculateArea(length, width) {
  return length * width;
}

// Function 2: Switch the background color each time it’s called
function toggleBackgroundColor() {
  const currentColor = document.body.style.backgroundColor;
  if (currentColor === 'rebeccapurple') {
    document.body.style.backgroundColor = 'lightblue';
  } else {
    document.body.style.backgroundColor = 'rebeccapurple';
  }
}


// Part 3: Loops in Action (Repetition Made Easy)

// Loop 1: A simple countdown using a for loop
console.log("Countdown:");
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// Loop 2: Going through a list of topics with a for...of loop
const topics = ['Variables', 'Functions', 'Loops', 'DOM'];
for (const topic of topics) {
  console.log(`Currently learning about: ${topic}`);
}


// Part 4: Working with the DOM
// Demonstrating how JavaScript interacts with web page elements.

// DOM Example 1: Change the text of the main heading
const mainHeading = document.querySelector('h1');
mainHeading.textContent = "Learning JavaScript is Fun!";

// DOM Example 2: Update the text on a button
const button = document.querySelector('.btn');
button.textContent = 'Click Me!';

// DOM Example 3: Add a click event to the button that changes the background color
button.addEventListener('click', function() {
  toggleBackgroundColor();
});