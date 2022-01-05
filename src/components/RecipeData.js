import React from 'react';
import { useState } from 'react';

function RecipeData(props) {
    const [dessert, setDessert] = useState([]);
    const cuisine = 'french';
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_DESSERT_API_KEY}&type=dessert&cuisine=${cuisine}`;
    
    function handleClick(event) {
        fetch(url)
          .then((res) => res.json())
          .then((res) => {
          setDessert(res)})
          .catch((err) => console.error(`Oops, something went wrong: ${err}`));
      }

    return (
        <div>
            <button onClick={handleClick}>Get Data</button>
        </div>
    );
}

export default RecipeData;