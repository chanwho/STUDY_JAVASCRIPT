// 문제
// 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
// 예를 들어, 서로 다른 9개의 자연수
// 3, 29, 38, 12, 57, 74, 40, 85, 61
// 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.
// 첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100 보다 작다.
// 첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.

// 풀이 유추
// 1보다 큰 자연수 범위니까 최대값은 0으로 초기값
// 비교해서 푼다.

// 테스트 케이스
// 예제 입력 1
// 3
// 29
// 38
// 12
// 57
// 74
// 40
// 85
// 61
// 예제 출력 1
// 85
// 8

// 나의 풀이
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let input = fs.readFileSync(filepath).toString().trim().split("\n").map(Number);
let max_value = 0;

for (let i of input) {
  if (i > max_value) max_value = i;
}

console.log(max_value);
console.log(input.indexOf(max_value) + 1);

console.log();
