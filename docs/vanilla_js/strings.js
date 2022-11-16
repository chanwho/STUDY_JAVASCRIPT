// operate number type and string
let number_first = 3;
let string_second = "5";

console.log(number_first + string_second);
// recommanded this way
let concate_string = `${number_first}${string_second}`;

string_second = "A";
console.log(number_first + string_second);

// Strings
let animal = "tiger";
console.log(`${animal}`);

//substring(0,3), replace('ti','TI'), split('g'),toUpperCase(),charAt(0)

let sentance = "5 2 6 ";
parseInt(sentance.split(" "));
console.log(typeof parseInt(sentance.trim().split(" ").map(Number)));
