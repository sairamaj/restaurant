const person = { name: 'John', age: 30 };
var { name, age } = person;
console.log(name); // John
console.log(age); // 30

const saiperson = {
    name: "sai",
    address: {
        address1: "address_1",
        address2: "address_2",
        city: "beaverton",
        state: "OR"
    }
}

var { name:saiName } = saiperson
console.log(saiName)

var { address: { state}} = saiperson

// giving different name to the variable.
var { address: { city: saiCity } } = saiperson
console.log(saiCity)
