import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeResults(props) {
    const [recipes, setRecipes] = useState(null);
    const { id } = useParams();

    useEffect(() => { 
        const url = `https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=${process.env.REACT_APP_DESSERT_API_KEY}&type=dessert&cuisine=italian`;
        fetch(url)
        .then((res) => res.json())
      .then((res) => {
        setRecipes(res.steps);
        console.log(res);
      }).catch((err) => console.error(`Oops, something went wrong: ${err}`));
      }, []);
    return (
        <div>
          
        </div>
    );
}

export default RecipeResults;