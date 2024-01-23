// spread opeartor for objects
var persons =
    [
        {
            fisrtName: "sai",
            lastName: "jamal",
            age: 57
        },
        {
            fisrtName: "sourab",
            lastName: "jamal",
            age: 23
        }
    ]

var younger = persons.filter(p => p.age < 25);
console.log(younger)
