const array1 = [1, 2, 3, 4, 5, 6]
const array2 = [10, 11, 12]

// joining 2 arrays
console.log('joining 2 arrays')
const array3 = [...array1, ...array2]
console.log(array3)
console.log('_______________________')

// difference way of accessing array
const first = array1[0]
const last = array2.slice(-1)
console.log(first, last[0])


