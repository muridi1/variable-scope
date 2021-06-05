"use strict";

console.log("Start of programme");

const healthyFoods = ['fruit', 'veg'];
const junkFoods = ['chocolate', 'cake', 'poison'];

for (let Item of healthyFoods) {
  console.log(`${Item} is normally considered a healthy food`);
}

for (let Item of junkFoods) {
  console.log(`${Item} is NOT normally considered a healthy food`);
  // below will error. Why?
  console.log(`...so, swap it for ${Item}!`);
}

console.log("Reached the end of my programme!");