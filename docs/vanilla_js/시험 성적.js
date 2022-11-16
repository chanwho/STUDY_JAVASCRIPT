// 문제
// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
// 첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.
// 시험 성적을 출력한다.

// 풀이 유추
// if문을 사용하여 분류

// 테스트케이스
// 예제 입력 1
// 100
// 예제 출력 1
// A

// 나의 풀이
const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

if (inputs > 89) console.log("A");
else if (inputs > 79) console.log("B");
else if (inputs > 69) console.log("C");
else if (inputs > 59) console.log("D");
else console.log("F");

console.log();
