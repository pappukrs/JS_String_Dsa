
function runProgram(input) {
    // Write code here
    input = input.split('\n');
    const testCases = +input[0];
    let line = 1;
    for( let i = 1;i <= testCases;i++){
        let sen = input[line];
        line++;
        console.log(sen);
    }
  }
  
  if (process.env.USER === "") {
    runProgram(``);
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
  