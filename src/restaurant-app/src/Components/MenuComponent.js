import React, { useState, useEffect } from 'react';
import MenuItemComponent from './MenuItemComponent.js'



function MenuComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetch('https://foblm106he.execute-api.us-west-2.amazonaws.com/prod/myrestaurant/menu',)
      .then(response => response.json())
      .then(data => {
        setData(data);
        data.map(item => {
          console.log(item.name)
        })


        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);



  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const menuItemsByCategory = customGroupBy(data, 'category')
  console.log('--------------------')
  console.log(menuItemsByCategory)
  return (
    <div classname="container" align="center">
      {
        Object.keys(menuItemsByCategory).map(category => {
          let items =  menuItemsByCategory[category].map(menuitem => {
            return <MenuItemComponent menuitem={menuitem} />
          })

          return <div><h3>{category}</h3> {items}</div> 
        })
      }
    </div>

  )
}


// Object.keys(menuItemsByCategory).forEach(cat => {
//   <h1>{cat}</h1>
//   menuItemsByCategory[cat].map(menuitem =>{
//     <MenuItemComponent menuitem={menuitem} />
//   })
// })


// Export the component to be used elsewhere
export default MenuComponent;
