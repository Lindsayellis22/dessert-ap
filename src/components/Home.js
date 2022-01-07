import React, { useState } from 'react';
import CuisineResults from './CuisineResults';
import CuisineForm from './CuisineForm';

function Home(props) {
    const [desserts, setDesserts] = useState([]);
    const [cuisine, setCuisine] = useState('');
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
  
    function handleSubmit(event) {
        event.preventDefault();
        getDessertCuisine();
    }

    function handleChange(event) {
        setCuisine(event.target.value);
    }

    return (
        <div>
            <h1>The Cultured Confectioner</h1>
            <h2>Discover delicious desserts from around the globe and get your...just desserts.</h2>
            <CuisineForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                cuisine={cuisine}
            />
            <CuisineResults loading={loading} desserts={desserts} />
        </div>
    );
}

export default Home;