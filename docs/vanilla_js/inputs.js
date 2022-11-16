const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

// linux는 dev라는 파일이 있고
// docs는 윈도우에 없어서 슬래쉬가 안붙음
