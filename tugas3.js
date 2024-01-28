function sortArray(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    // Menggunakan algoritma pengurutan bubble sort untuk tujuan contoh
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Tukar elemen jika mereka tidak dalam urutan
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  
  const inputArray = [2, 3, 10, 6, 4, 8, 1];
  const sortedArray = sortArray([...inputArray]); // Menggunakan spread operator agar inputArray tidak terpengaruh
  
  console.log("Input Array:", inputArray);
  console.log("Sorted Array:", sortedArray);