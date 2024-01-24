// ---------------------------------
//      const
// ---------------------------------
console.log("---- const ---- ");
const x = "abc"
console.log(`x is :${x}`)

// I cannot assign a new value
//x = "123"

// below line will error out as x is defined and const
// const x = 1

const y = [1,3,4,5]
console.log(y)
// I cannot redine y 
//const y = [1,2,3,4]

y[1] = 2
y[2] = 3
y[3] = 4
console.log(y)
// how ever I change the contents as it is reference

// ---------------------------------
//      let
// ---------------------------------

console.log("---- let ---- ");
let a = 1;
console.log(`a value outside block:${a}`)

{
    // new scope as it is let
    let a = 2
}
console.log(`a value outside block:${a}`)


// ---------------------------------
//      var
// ---------------------------------
console.log("---- var ---- ");

var b = 1;
console.log(`b value outside block:${b}`)

{
    // new scope as it is let
    var b = 2
}
console.log(`b value outside block:${b}`)

/*
The main difference between var and let in JavaScript is their scope. 
Variables declared with var are function-scoped, 
while variables declared with let are block-scoped . This means that variables declared with 
var are accessible throughout the entire function in which they are declared, 
as well as any nested functions. On the other hand, variables declared with let are only 
available inside the block where they are defined.

Another difference between var and let is hoisting. 
Variables declared with var are hoisted and initialized, 
which means they are accessible in their enclosing scope even before they are declared. However, 
their value is undefined before the declaration statement is reached. 
Variables declared with let are hoisted but not initialized until their definition is evaluated. 
Accessing them before the initialization results in a ReferenceError. 
The variable is said to be in the temporal dead zone from the start of the block until the 
declaration statement is processed.

In general, it is recommended to use let instead of var in modern JavaScript 
codelet provides better scoping rules and helps avoid common bugs caused by function-scoped 
variables.

*/
