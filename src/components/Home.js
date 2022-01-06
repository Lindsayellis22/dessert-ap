import React, { useState } from 'react';
import CusineResults from './CusineResults';
import RecipeResults from './RecipeResults';
import { Route, Routes, Link } from 'react-router-dom';

function Home(props) {
    const [desserts, setDesserts] = useState([]);
    const [cuisine, setCuisine] = useState('italian');
    const [loading, setLoading] = useState(false);
  
  function getDessertCuisine() {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_DESSERT_API_KEY}&type=dessert&cuisine=${cuisine}`;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setDesserts(res.results);
        setLoading(false);
        console.log(res);
      }).catch((err) => console.error(`Oops, something went wrong: ${err}`));
  }
    return (
        <div>
            <button onClick={getDessertCuisine}>Muffin</button>
            <h1>The Cultured Confectioner</h1>
            <h2>Discover delicious desserts from around the globe and get your...just desserts.</h2>
            <CusineResults loading={loading} desserts={desserts} />
            <RecipeResults loading={loading} desserts={desserts} />
        </div>
    );
}

export default Home;