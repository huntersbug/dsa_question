let ans = [];
function permutation(N, arr, ans, curr) {
  if (curr === N) {
    return ans.push(arr.join(" "));
  }
  for (let i = curr; i < N; i++) {
    let temp = arr[curr];
    arr[curr] = arr[i];
    arr[i] = temp;
    permutation(N, arr, ans, curr + 1);
    let t = arr[curr];
    arr[curr] = arr[i];
    arr[i] = t;
  }
}

function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let y = permutation(N, arr, ans, 0);
  ans.sort();
  for (var i = 0; i < ans.length; i++) {
    s = ans[i];
    console.log(s);
  }
}

if (process.env.USERNAME === "sw") {
  runProgram(`3
    1 2 3`);
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
