import React from 'react';

const CUISINE_ARRAY = ['African', 'American', 'British'];

function CuisineForm(props) {   
    return (
      <form onSubmit={props.handleSubmit} className="form-horizontal">
        <label>Choose a Cuisine:
          <select value={props.cuisine} onChange={props.handleChange}>
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