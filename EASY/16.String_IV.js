
function runProgram(input) {
    // Write code here
    input = input.split('\n');
    //console.log(input)
    const testCases = +input[0];
    let line = 1;
    for( let i = 1;i <=testCases ;i++){
        let str = input[line];
        line++;
        String(str)
    }
    
  }
  
  function String(str){
      console.log(str)
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
  