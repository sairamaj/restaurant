// npm install core-js
require("core-js")

// Native Javascript does not have (yet it is coming up) groupBy
// we can use core-js for now.
var menuitems = [
    {
        name: "Bajji",
        category: "STARTER",
        price: 5
    },
    {
        name : "Pakora",
        category: "STARTER",
        price: 10
    },
    {
        name: "Malai Kofta",
        category: "ENTRIES",
        price: 15
    },
    {
        name: "Vegetable Biryani",
        category: "ENTRIES",
        price:16
    }
]

console.log(menuitems)

var menuItemsByCategory = menuitems.groupToMap(m => m.category);
menuItemsByCategory.forEach( (menuitems,category)=> {
    console.log(category)

    menuitems.map( menuitem => {
        console.log(`\t${menuitem.name} \t${menuitem.price}`)
    })
    console.log('-----------------------') 
});

// when we cannot use external library
// doing by simple function groupBy as explained here.
// https://www.wisdomgeek.com/development/web-development/javascript/how-to-groupby-using-reduce-in-javascript/

const customGroupBy = (input, key) => {
  return input.reduce((acc, currentValue) => {
    let groupKey = currentValue[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(currentValue);
    return acc;
  }, {});
};

console.log("Using custom groupBy ....")


const menuItemsByCategory2 = customGroupBy(menuitems, 'category');
console.log(menuItemsByCategory2)
Object.keys(menuItemsByCategory2).forEach(category => {
    console.log(category)
    menuItemsByCategory2[category].map( menuitem => {
        console.log(`\t${menuitem.name} \t${menuitem.price}`)
    })
    console.log('-----------------------') 
    
});