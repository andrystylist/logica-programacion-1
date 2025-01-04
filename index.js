import promptSync from 'prompt-sync'
import { quickSort } from './quick-sort.js'


const prompt = promptSync({})

const items = 3
const list = []

for (let i = 0; i < items; i++) {
  list.push(parseInt(prompt(`Ingrese el numero ${i+1}/${items}: `)));
}

const listBckp = [...list]
const resultAsc = quickSort(list)
const resultDes = quickSort(listBckp, true)

console.log(resultAsc)
console.log(resultDes)

const resultSet = new Set(resultAsc)

if (resultSet.size === 1) {
  console.log("All numbers are the same")
}

