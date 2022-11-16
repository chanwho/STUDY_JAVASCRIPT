// 문제
// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
// 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.
// 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.
// 제한사항 : 최대,최소값은 object type을 적용한다.

// 풀이 유추
// 최대값과 최소값을 object type으로 선언한다음, 크기비교를 통해 바꿔넣는다.

// 변수 선언
// input : N1, N2[]
// max,min : max_obj, min_obj
// output : max_obj, min_obj

// 예제 입력 1
// 5
// 20 10 35 30 7
// 예제 출력 1
// 7 35

const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let input = fs.readFileSync(filepath).toString().trim().split("\n");
let obj = { max_obj: -1000000, min_obj: 1000000 };

let n1 = parseInt(input[0]);
let n2 = input[1].split(" ").map(Number);

for (let i of n2) {
  if (i > obj.max_obj) obj.max_obj = i;
  if (i < obj.min_obj) obj.min_obj = i;
}
console.log(obj.min_obj);
console.log(obj.max_obj);

console.log();
