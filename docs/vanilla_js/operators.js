// 문제
// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.
// (1 ≤ A, B ≤ 10,000)
// 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

// 풀이유추
// input을 받아서 사칙연산을 한걸 출력한다.

// 테스트케이스
// input
// 7 3
// output
// 10
// 4
// 21
// 2
// 1

// 나의 풀이
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);
num1 = inputs[0];
num2 = inputs[1];
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(parseInt(num1 / num2));
console.log(num1 % num2);

// 함수

// function operation(num1, num2) {
//   console.log(num1 + num2);
//   console.log(num1 - num2);
//   console.log(num1 * num2);
//   console.log(parseInt(num1 / num2));
//   console.log(num1 % num2);
// }

// 테스트케이스 실행
operation(7, 3);
