// Normal function
function sum(num1, num2) {
  return 1 + 3;
}
{
  let sum = 1 + 3;
  sum = 3 + 5;
}

// anonymouse Function
let calculatieSum = function (item_first, item_second) {
  return item_first + item_second;
};
{
  console.log(`${calculatieSum(5, 7)}`);
}

// Arrow Function
let calculatieSum2 = (item_first, item_second) => {
  return item_first + item_second;
};
{
  console.log(`${calculatieSum2(7, 8)}`);
}

// rest parameter
function printRestParams(...args) {
  let restParams = (arg) => {
    console.log(`arg : ${arg}`);
  };

  args.forEach(restParams);
}

{
  printRestParams(2, 4, 5);
  printRestParams(2, 4, 5, 6, 7);
}
