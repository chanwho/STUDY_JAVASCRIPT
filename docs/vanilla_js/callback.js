console.log(`first`);
function secondCall() {
  console.log(`second`);
}
// setTimeout(functionRef, delay)
setTimeout(function () {
  console.log(`setTimeout : second`);
}, 4000);
console.log("third");

// // 5 + 6
// function plusFunction(first, second) {
//   return first + second;
// }
// plusFunction(5, 6);

// // 5 - 6
// function minusFunction(first, second) {
//   return first - second;
// }
// minusFunction(5, 6);

// function callbackFunction(callback, first, second) {
//   let result = callback(first, second);
//   console.log(`result : ${result}`);
// }

// callbackFunction(plusFunction, 5, 6);
