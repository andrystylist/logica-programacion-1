export function bubbleSort(array) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array
}

console.log(bubbleSort([70, 90, 30, 80, 50]))

// [70, 90, 30, 80, 50]
// [70, 30, 90, 80, 50]
// [70, 30, 80, 90, 50]
// [70, 30, 80, 50, 90]

// [30, 70, 80, 50, 90]
// [30, 70, 80, 50, 90]
// [30, 70, 50, 80, 90]

// [30, 70, 50, 80, 90]
// [30, 50, 70, 80, 90]

// [30, 50, 70, 80, 90]
