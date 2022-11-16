// 문제
// 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.
// 작성해야 하는 함수는 다음과 같다.
// Python 2, Python 3, PyPy, PyPy3: def solve(a: list) -> int
// a: 합을 구해야 하는 정수 n개가 저장되어 있는 리스트 (0 ≤ a[i] ≤ 1,000,000, 1 ≤ n ≤ 3,000,000)
// 리턴값: a에 포함되어 있는 정수 n개의 합 (정수)
// Java: long sum(int[] a); (클래스 이름: Test)
// a: 합을 구해야 하는 정수 n개가 저장되어 있는 배열 (0 ≤ a[i] ≤ 1,000,000, 1 ≤ n ≤ 3,000,000)
// 리턴값: a에 포함되어 있는 정수 n개의 합

// 풀이 유추
// 함수 만들고 거기에 넣기

// 변수선언
// function
// input : array
// output : sum_result

// const fs = require("fs");
// const filepath = process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
// let input = fs.readFileSync(filepath).toString().trim().split("").map(Number);

// 시스템 흐름도
// sum_result 선언

function sum_function(arr) {
  let sum_result = 0;
  for (let i of arr) {
    sum_result += i;
  }
  return sum_result;
}

// 테스트케이스
// let a = [2, 4, 6, 8, 9];
// console.log(sum_function(a));

console.log();
