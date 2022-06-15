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
      }).catch((err) => console.error(`Oops, something went wrong: ${err}`));
      }, []);

      if (loading) {return <h1>Loading...</h1>};

    

    return (
    <div>
      <h1 className="dessert-title">{dessert.title}</h1>
      <img className='image' src={dessert.image} alt={dessert.title} />
        <ul>
          {extendedIngredients.map((ingredient) => {
            return <li className='ingredients' key={ingredient.original}>{ingredient.original}</li>;
            })}
          <p>{dessert.instructions}</p>
        </ul>
    </div>
    );
}

export default RecipePage;