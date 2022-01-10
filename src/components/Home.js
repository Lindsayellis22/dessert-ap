import React, { useState } from 'react';
import CuisineResults from './CuisineResults';
import CuisineForm from './CuisineForm';

function Home(props) {
    const [desserts, setDesserts] = useState([]);
    const [cuisine, setCuisine] = useState('default');
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);
  
  function getDessertCuisine() {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_DESSERT_API_KEY}&type=dessert&cuisine=${cuisine}`;
    setLoading(true);
    fetch(url)
        .then((res) => res.json())
        .then((res) => {
            setDesserts(res.results);
            setLoading(false);
            setSearched(true);
      }).catch((err) => {setLoading(false); setSearched(true);});
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
            <h2>Discover delicious desserts from around the globe!</h2>
            <CuisineForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                cuisine={cuisine}
            />
            {searched ? <CuisineResults loading={loading} desserts={desserts} /> : null}
        </div>
    );
}

export default Home;