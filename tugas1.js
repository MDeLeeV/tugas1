//Tugas nomor 1//
function findMaximum(arr) {
    if (arr.length === 0) {
      return "Array is empty.";
    }
  
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return max;
  }
  
  const inputArray = [2, 3, 10, 6, 4,8, 1];
  const maximumValue = findMaximum(inputArray);
  
  console.log("Arr:", inputArray);
  console.log("Output:", maximumValue);