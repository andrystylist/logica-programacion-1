export function quickSort(array, reverse=false) {
  if (array.length <= 1) return array

  const i = Math.floor(array.length / 2)
  const pivot = array[i] // Guardo el pivote

  array.splice(i, 1) // Elimino el pivote de mi lista

  if (reverse) {
    return [
      ...quickSort(array.filter(elem => elem >= pivot), reverse),
      pivot,
      ...quickSort(array.filter(elem => elem < pivot), reverse),
    ]
  }

  return [
    ...quickSort(array.filter(elem => elem < pivot)),
    pivot,
    ...quickSort(array.filter(elem => elem >= pivot)),
  ]
}

// console.log(quickSort([70, 90, 30, 80, 50]))