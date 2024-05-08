
function runProgram(input) {
    // Write code here
    
   input = input.split("\n");
   let str = input[0];
   
   console.log(reduceString(str));
   
  }
  function reduceString(str){
      
      let stack = [];
      
      let strLength = str.length;
      for(let i = 0;i<strLength ;i++){
          if(stack.length === 0){
              stack.push(str[i])
          }
          else{
              if(stack[stack.length-1]===str[i]){
                  stack.pop()
              }
              else{
                  stack.push(str[i])
              }
          }
           
      }
      if(stack.length!==0){
          return stack.join("");
      }
      return "Empty String"
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
  