import React, { useState, useEffect } from 'react';
import MenuItemComponent from './MenuItemComponent.js'

function MenuComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      <table align='center'>
        <th>Name</th>
        <th>Category</th>
        <th>Cost</th>
        {data.map((item) =>
          <MenuItemComponent menuitem={item} />
        )}
      </table>

      <div>
        categories = Object.groupBy(data, ({ category }) => category)
      </div>
    </div>
    
  )
}


// Export the component to be used elsewhere
export default MenuComponent;
