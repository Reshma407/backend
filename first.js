//example
//destructuring


let object1={
    name:"Reshma",
    age:12,
}




const { add } =require("./sum");
console.log(add(1,2));

//ES modules
//uses export and import
//supports default & named exports
//

// mul.js
export function mul(a, b) {
  return a * b;
}

// sum.js
export function add(a, b) {
  return a + b;
}

// main.js
import { mul } from './mul.js';
import { add } from './sum.js';

console.log(add(1, 2)); // 3
console.log(mul(3, 4)); // 12
