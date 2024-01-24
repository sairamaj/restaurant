// The rest operator is a feature in JavaScript that allows you to pass an indefinite number of arguments to a function as an array. The rest operator is represented by three dots ... followed by a variable name
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));

const numbers = [1, 2, 3, 4];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4]