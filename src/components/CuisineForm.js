import React from 'react';
import './cuisineform.css';

const CUISINE_ARRAY = ['African', 'American', 'British', 'Cajun', 'Eastern European', 'European', 'French', 'German', 'Indian', 'Irish', 'Italian', 'Mediterranean', 'Mexican', 'Southern', 'Spanish'];


function CuisineForm(props) { 
    return (  
      <form onSubmit={props.handleSubmit} className="form-horizontal">
        <label>Choose a Cuisine:
          <select value={props.cuisine} onChange={props.handleChange}>
            <option value='default' disabled hidden>
              Cuisine 
            </option>
            {CUISINE_ARRAY.map((cuisine) => {
              return (
                <option value={cuisine} key={cuisine}>{cuisine}</option> 
              )
            })}
          </select>
        </label> 
        <button type="submit">Select</button>
      </form>  
    );    
}
    
export default CuisineForm;