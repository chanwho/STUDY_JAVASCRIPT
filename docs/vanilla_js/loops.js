const animals = ["dog", "cat", "bird", "fish", "lizard"];

// Normal
for (let i = 0; i < animals.length; i++) {
  console.log(`${animals[i]}`);
}

// for iterable
for (let animal of animals) {
  console.log(`${animal}`);
}

const animals_obj = [
  { name: "dog", species: "canine" },
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];

for (let animal of animals_obj) {
  console.log(`${animal["name"]}, ${animal["species"]}`);
}

const cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
  console.log(`${car}`);
}
cars.forEach((car) => {
  console.log(`${car}`);
});

// forEach
const array1 = ["a", "b", "c"];
array1.forEach((element) => console.log(element));

// Arrow Function
let arrowFunction = (element, index) => {
  console.log(`${element} ${index}`);
};
array1.forEach(arrowFunction);

// normal Function
function elementNormal() {
  console.log(element);
}

console.log();
