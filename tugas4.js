function findOddEven(arr) {
    const resultArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        resultArray.push('genap');
      } else {
        resultArray.push('ganjil');
      }
      resultArray.push(arr[i]);
    }
  
    return resultArray;
  }
  
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const modifiedArray = findOddEven(inputArray);
  
  console.log("Input Array:", inputArray);
  console.log("Modified Array:", modifiedArray);