// npm install core-js
require("core-js")


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

//var menuItemsByCategory = menuitems.group(m => m.category);
//console.log(menuItemsByCategory)

var menuItemsByCategory = menuitems.groupToMap(m => m.category);
menuItemsByCategory.forEach( (menuitems,category)=> {
    console.log(category)

    menuitems.map( menuitem => {
        console.log(`\t${menuitem.name} \t${menuitem.price}`)
    })
    console.log('-----------------------') 
});