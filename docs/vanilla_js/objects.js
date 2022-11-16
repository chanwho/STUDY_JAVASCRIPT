// let animal = {key:value ...}
let animal = { name: "juju", species: "cat" };

console.log(animal.name);
// animal['species']

let animal_keys = Object.keys(animal);
for (let key of animal_keys) {
  console.log(`${key} : ${animal[key]}`);
}
