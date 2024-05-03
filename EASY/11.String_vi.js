
function runProgram(input) {
    // Write code here
    input =input.split('\n');
    console.log(input)
    test = +input[0];
    
    let line = 1;
    for(let i =1;i<=input;i++){
        let sent=input[line];
        line++;
        sentence(sent)
    }
  }
  function sentence(sent){
      console.log(sent)
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
  