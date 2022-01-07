import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function RecipePage(props) {
    const [dessert, setDessert] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const { extendedIngredients = [] } =  dessert;

    useEffect(() => { 
      const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_DESSERT_API_KEY}`;
      fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setDessert(res);
        setLoading(false);
        console.log(res);
      }).catch((err) => console.error(`Oops, something went wrong: ${err}`));
      }, []);

      if (loading) {return <h1>Loading...</h1>};

    return (
        <div>
          <h1>{dessert.title}</h1>
          <img src={dessert.image} alt={dessert.title} />
          <p>{dessert.instructions}</p>
          {/* <p>{dessert.extendedIngredients.original}</p> */}
          <ul>
    {extendedIngredients.map((ingredient) => {
      return <li key={ingredient.original}>{ingredient.original}</li>;
    })}
  </ul>
        </div>
    );
}

export default RecipePage;