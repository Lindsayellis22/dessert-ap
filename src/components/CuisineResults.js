import React from 'react';
import { Link } from "react-router-dom";

function CuisineResults(props) {
  if (props.loading) {return <h1>Loading...</h1>};
  if (props.desserts.length === 0) {
    return (<h1>Sorry, no results found.</h1>)
  }

  return (
    <section className="container">
      {props.desserts.map((dessert) => (
        <Link to={`recipes/${dessert.id}`} key={dessert.id} >
            <img className="card-image" src={dessert.image} alt={dessert.title} />
        </Link>
      ))}
    </section>
  )
}
         

export default CuisineResults;