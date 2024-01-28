function reverseString(input) {
    return input.split('').reverse().join('');
  }
  
  const inputString = 'abcdefg';
  const reversedString = reverseString(inputString);
  
  console.log("Input String:", inputString);
  console.log("Reversed String:", reversedString);