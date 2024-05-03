function runProgram(input) {
    input=input.split("\n");
    //console.log(input);
    var testCases=+input[0];
    //console.log(testCases);
    var line=1;
    for(var i=1;i<=testCases;i++){
       var size=+input[line];
       line++
       //console.log(size);
       var str=input[line];
       line++
       string(size,str);
       
    }
}
function string(size,str){
    console.log(str);
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