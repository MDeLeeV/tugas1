function compressString(input) {
    if (!input) {
      return "Input string is empty.";
    }
  
    let compressedString = '';
    let count = 1;
  
    for (let i = 1; i < input.length; i++) {
      if (input[i] === input[i - 1]) {
        count++;
      } else {
        compressedString += input[i - 1] + (count > 1 ? count : '');
        count = 1;
      }
    }
  
    compressedString += input[input.length - 1] + (count > 1 ? count : '');
  
    return compressedString;
  }
  
  const inputString = 'aaaaaabbbbcccccccdaa';
  const compressedResult = compressString(inputString);
  
  console.log("Input String:", inputString);
  console.log("Compressed Result:", compressedResult);
