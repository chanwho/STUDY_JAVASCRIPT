// Array == ArrayList
fruits = ["apple", "banana", "orange", "mellon"];
let numbers = [1, 2, 3, 4, 5];
let fruits_init = new Array();
fruits_init = [];

// object == HashMap
let objects = { name: "Tome", age: 4 };

let mixins_first = [1, 2, 3, "apple", 4, "mellon"];
let mixins_second = [1, 2, 3, "apple", { name: "Tome", age: 4 }];
let mixins_third = [1, 2, 3, "apple", objects];
let mixins_forth = [fruits, numbers];

const mixins_array = [
  ["apple", "banana"],
  ["orange", "mellon"],
  ["berry", "strawberry"],
];

// push, pop, slice(슬라이스는 fruit를 안 건드림)
// concat , indexof, join
console.log();
