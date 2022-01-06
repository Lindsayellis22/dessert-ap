import React from 'react';
import { useState } from 'react';

function CusineResults(props) {
  if (props.loading) {return <h1>Loading...</h1>};
 
  return (
    <section className="container">
      {props.desserts.map((dessert) => (
        <div className="card-image">
          <img src={dessert.image} alt={dessert.title} />
        </div>
      ))}
    </section>
  );
}         

export default CusineResults;