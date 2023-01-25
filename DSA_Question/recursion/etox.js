function etopower(N, P) {
  if (P == 0) return 1;

  return N ** P / fctorial(P) + etopower(N, P - 1);
}
function fctorial(N) {
  if (N == 1) return 1;

  return N * fctorial(N - 1);
}
function runProgram(input) {
  input = input.split("\n");
  let [N, P] = input[0].split(" ").map(Number);
  let y = etopower(N, P);
  console.log(y.toFixed(4));
}

if (process.env.USERNAME === "sw") {
  runProgram(`4 2`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
