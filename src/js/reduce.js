// reduce
const nums = [1,2,3,4,5]

// array(callback,initialvalue)

function myAdd(accumulator, curval){
    return accumulator + curval
}

// no initial values
console.log('--------using function----------')
var result = nums.reduce(myAdd)
console.log(result)
console.log('--------------------')

// with initial value.
console.log('--------using function with initial value----------')
var result = nums.reduce(myAdd,10)
console.log(result)
console.log('--------------------')

// using arrow function
console.log('--------using arrow function----------')
var result = nums.reduce( (accum, curval) => accum + curval, 10)
console.log(result)


// using reduce to groupBy
function groupBy(array, key) {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
      return result;
    }, {});
  }

  const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 },
    { name: 'Bob', age: 21 }
  ];
  
  const groupedPeople = groupBy(people, 'age');
  console.log(groupedPeople)


