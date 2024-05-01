function decompressString(string) {
    let decompressed = '';
    let currentChar = '';
    let count = '';
  
    for (let i = 0; i < string.length; i++) {
      if (!isNaN(string[i])) {
        count += string[i];
      } else {
        if (count === '') {
          if (currentChar !== '') {
            decompressed += currentChar;
          }
          currentChar = string[i];
        } else {
          decompressed += currentChar.repeat(parseInt(count));
          count = '';
          currentChar = string[i];
        }
      }
    }
  
    if (count !== '') {
      decompressed += currentChar.repeat(parseInt(count));
    } else {
      decompressed += currentChar; // Add the current character if no count is given
    }
  
    console.log(decompressed)
  }
  